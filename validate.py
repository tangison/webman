#!/usr/bin/env python3
"""Webman validation gate.

Executable enforcement for the Webman skill suite. This is the repo's
quality gate: it verifies that every shipped skill is structurally valid,
that local references resolve, that no placeholder patterns, em dashes, or
secret-shaped strings are present, that the PDF preflight script compiles,
and that the external skill stack matches the pinned commits in
skills-lock.json.

Run locally:
    python3 validate.py

Run with remote pin verification (network required, uses GITHUB_TOKEN when
present to avoid rate limits):
    python3 validate.py --check-remotes

Exit codes: 0 = all checks passed, 1 = one or more checks failed.
"""
from __future__ import annotations

import argparse
import ast
import json
import os
import re
import sys
import urllib.request
import urllib.error

ROOT = os.path.dirname(os.path.abspath(__file__))
SKILLS_DIR = os.path.join(ROOT, "skills")
LOCK_PATH = os.path.join(ROOT, "skills-lock.json")
SUPER_PROMPT = os.path.join(ROOT, "SUPER_PROMPT.md")
README = os.path.join(ROOT, "README.md")

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.S)
NAME_RE = re.compile(r"^name:\s*(.+)$", re.M)
DESC_RE = re.compile(r"^description:\s*(.+)$", re.M)
GITHUB_URL_RE = re.compile(r"https://github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)")
RELATIVE_REF_RE = re.compile(
    r"(?:\./)?((?:agents|references|scripts|assets)/[A-Za-z0-9_./-]+\.[A-Za-z0-9]+)"
)

EXPECTED_SKILLS = [
    "tangison-web-loop",
    "tangison-web-plan",
    "tangison-web-content",
    "tangison-web-create",
    "tangison-web-audit",
    "tangison-web-deploy",
    "tangison-documents",
    "tangison-magazine",
]

BANNED_PATTERNS = [
    "// TODO",
    "TODO:",
    "// ...",
    "/* ... */",
    "<!-- rest of sections -->",
    "rest of code",
    "implement here",
    "for brevity",
    "the rest follows the same pattern",
    "I can add more if needed",
]

SECRET_PATTERNS = [
    (re.compile(r"github_pat_[A-Za-z0-9]{20,}"), "GitHub fine-grained PAT"),
    (re.compile(r"\bghp_[A-Za-z0-9]{30,}\b"), "GitHub classic PAT"),
    (re.compile(r"\bgho_[A-Za-z0-9]{30,}\b"), "GitHub OAuth token"),
    (re.compile(r"sk-ant-[A-Za-z0-9_-]{20,}"), "Anthropic API key"),
    (re.compile(r"\bAKIA[0-9A-Z]{16}\b"), "AWS access key ID"),
    (re.compile(r"\bre_[A-Za-z0-9]{25,}\b"), "Resend API key"),
    (re.compile(r"\bvcp_[A-Za-z0-9]{40,}\b"), "Vercel token"),
    (re.compile(r"-----BEGIN [A-Z ]*PRIVATE KEY-----"), "private key block"),
]

TEXT_EXTENSIONS = (
    ".md", ".json", ".yaml", ".yml", ".txt", ".py", ".sh", ".toml", ".cfg",
)

findings: list[tuple[str, str, str]] = []  # (severity, location, message)


def fail(location: str, message: str) -> None:
    findings.append(("FAIL", location, message))


def warn(location: str, message: str) -> None:
    findings.append(("WARN", location, message))


def info(location: str, message: str) -> None:
    findings.append(("INFO", location, message))


def iter_text_files(base: str):
    for root, dirs, files in os.walk(base):
        dirs[:] = [d for d in dirs if d not in (".git", "node_modules", "__pycache__")]
        for fn in sorted(files):
            path = os.path.join(root, fn)
            if os.path.splitext(fn)[1].lower() in TEXT_EXTENSIONS:
                yield path


def check_skill_structure() -> None:
    if not os.path.isdir(SKILLS_DIR):
        fail("skills/", "skills directory is missing")
        return
    actual = sorted(
        d for d in os.listdir(SKILLS_DIR)
        if os.path.isdir(os.path.join(SKILLS_DIR, d))
    )
    for expected in EXPECTED_SKILLS:
        if expected not in actual:
            fail("skills/", f"expected skill directory missing: {expected}")
    for name in actual:
        skill_md = os.path.join(SKILLS_DIR, name, "SKILL.md")
        if not os.path.isfile(skill_md):
            fail(f"skills/{name}/", "SKILL.md missing")
            continue
        text = open(skill_md, encoding="utf-8").read()
        m = FRONTMATTER_RE.match(text)
        if not m:
            fail(skill_md, "frontmatter block missing or malformed")
            continue
        front = m.group(1)
        name_m = NAME_RE.search(front)
        desc_m = DESC_RE.search(front)
        if not name_m:
            fail(skill_md, "frontmatter has no name field")
        elif name_m.group(1).strip() != name:
            fail(skill_md, f"frontmatter name {name_m.group(1).strip()!r} != directory name {name!r}")
        if not desc_m:
            fail(skill_md, "frontmatter has no description field")
        elif len(desc_m.group(1).strip()) < 20:
            warn(skill_md, "description is very short (<20 chars)")
        info(skill_md, f"frontmatter OK ({len(text.split())} words)")


def check_local_references() -> None:
    for skill in EXPECTED_SKILLS:
        skill_md = os.path.join(SKILLS_DIR, skill, "SKILL.md")
        if not os.path.isfile(skill_md):
            continue
        text = open(skill_md, encoding="utf-8").read()
        skill_dir = os.path.join(SKILLS_DIR, skill)
        for ref in set(RELATIVE_REF_RE.findall(text)):
            target = os.path.join(skill_dir, ref)
            if not os.path.isfile(target):
                fail(skill_md, f"referenced file does not exist: {ref}")
        # references referenced by other files inside the skill dir
        for path in iter_text_files(skill_dir):
            body = open(path, encoding="utf-8").read()
            for ref in set(RELATIVE_REF_RE.findall(body)):
                target = os.path.normpath(os.path.join(os.path.dirname(path), ref))
                if not os.path.isfile(target):
                    fail(path, f"referenced file does not exist: {ref}")


def check_content_hygiene() -> None:
    quote_chars = "\"\u201c\u201d\u2018\u2019"
    for path in iter_text_files(ROOT):
        rel = os.path.relpath(path, ROOT)
        if rel.startswith(".git") or os.path.basename(path) == "validate.py":
            continue
        text = open(path, encoding="utf-8").read()
        for line_no, line in enumerate(text.splitlines(), 1):
            for pattern in BANNED_PATTERNS:
                start = 0
                while True:
                    idx = line.find(pattern, start)
                    if idx < 0:
                        break
                    before = line[idx - 1] if idx > 0 else ""
                    after = idx + len(pattern)
                    after_char = line[after] if after < len(line) else ""
                    quoted = before in quote_chars or after_char in quote_chars
                    if not quoted:
                        fail(rel, f"banned placeholder pattern present: {pattern!r} (line {line_no})")
                    start = idx + 1
            if "\u2014" in line:  # em dash
                fail(rel, f"em dash at line {line_no} (Tangison rule: avoid em dashes)")
        for rx, label in SECRET_PATTERNS:
            m = rx.search(text)
            if m:
                fail(rel, f"secret-shaped string present ({label}): {m.group(0)[:8]}...")


def check_preflight_script() -> None:
    script = os.path.join(SKILLS_DIR, "tangison-documents", "scripts", "preflight_pdf.py")
    if not os.path.isfile(script):
        fail("skills/tangison-documents/scripts/preflight_pdf.py", "preflight script missing")
        return
    source = open(script, encoding="utf-8").read()
    try:
        ast.parse(source)
        info(script, "parses cleanly (ast)")
    except SyntaxError as e:
        fail(script, f"Python syntax error: {e}")


def check_lock_file() -> dict:
    if not os.path.isfile(LOCK_PATH):
        fail("skills-lock.json", "skills-lock.json missing")
        return {}
    try:
        lock = json.load(open(LOCK_PATH, encoding="utf-8"))
    except json.JSONDecodeError as e:
        fail("skills-lock.json", f"invalid JSON: {e}")
        return {}
    entries = lock.get("pins", {})
    if not entries:
        fail("skills-lock.json", "no pins recorded")
        return lock
    for repo, entry in entries.items():
        if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", repo):
            fail("skills-lock.json", f"malformed repo key: {repo}")
        commit = entry.get("commit", "")
        if not re.fullmatch(r"[0-9a-f]{40}", commit):
            fail("skills-lock.json", f"{repo}: commit must be a 40-char SHA, got {commit!r}")
        if not entry.get("purpose"):
            warn("skills-lock.json", f"{repo}: no purpose recorded")
    info("skills-lock.json", f"{len(entries)} pinned repositories")
    return lock


def check_prompt_pins(lock: dict) -> None:
    if not os.path.isfile(SUPER_PROMPT):
        fail("SUPER_PROMPT.md", "missing")
        return
    text = open(SUPER_PROMPT, encoding="utf-8").read()
    repos = set()
    for owner, repo in GITHUB_URL_RE.findall(text):
        if owner == "tangison":
            continue
        repos.add(f"{owner}/{repo}")
    pins = set(lock.get("pins", {}).keys())
    unpinned = repos - pins
    for repo in sorted(unpinned):
        fail("SUPER_PROMPT.md", f"external skill repo not pinned in skills-lock.json: {repo}")
    if not unpinned:
        info("SUPER_PROMPT.md", f"all {len(repos)} external repos are pinned")


def check_remotes(lock: dict) -> None:
    token = os.environ.get("GITHUB_TOKEN")
    for repo, entry in sorted(lock.get("pins", {}).items()):
        commit = entry.get("commit", "")
        url = f"https://api.github.com/repos/{repo}/commits/{commit}"
        req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json"})
        if token:
            req.add_header("Authorization", f"Bearer {token}")
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                json.load(resp)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                fail("skills-lock.json", f"{repo}: pinned commit {commit[:10]} not found on GitHub")
            else:
                warn("skills-lock.json", f"{repo}: HTTP {e.code} while verifying pin")
            continue
        except Exception as e:  # network issues should not fail local validation
            warn("skills-lock.json", f"{repo}: could not reach GitHub ({e})")
            continue
        head_url = f"https://api.github.com/repos/{repo}/commits/main"
        req2 = urllib.request.Request(head_url, headers={"Accept": "application/vnd.github+json"})
        if token:
            req2.add_header("Authorization", f"Bearer {token}")
        try:
            with urllib.request.urlopen(req2, timeout=20) as resp:
                head = json.load(resp).get("sha", "")
        except Exception:
            head = ""
        if head and head != commit:
            warn("skills-lock.json", f"{repo}: upstream main has moved past pinned commit (pin is intentional; update deliberately)")
        else:
            info("skills-lock.json", f"{repo}: pin verified at upstream main")


def check_readme_claims() -> None:
    if not os.path.isfile(README):
        fail("README.md", "missing")
        return
    text = open(README, encoding="utf-8").read()
    required = ["validate.py", "skills-lock.json"]
    for needle in required:
        if needle not in text:
            warn("README.md", f"does not mention {needle} (executable gates should be documented)")
    if "LICENSE" not in text and not os.path.isfile(os.path.join(ROOT, "LICENSE")):
        warn("README.md", "no LICENSE file and README does not reference a license")


def main() -> int:
    parser = argparse.ArgumentParser(description="Webman validation gate")
    parser.add_argument("--check-remotes", action="store_true",
                        help="verify pinned commits against GitHub (network)")
    args = parser.parse_args()

    print("Webman validation gate")
    print("=" * 60)

    check_skill_structure()
    check_local_references()
    check_content_hygiene()
    check_preflight_script()
    lock = check_lock_file()
    check_prompt_pins(lock)
    check_readme_claims()
    if args.check_remotes and lock:
        check_remotes(lock)

    fails = [f for f in findings if f[0] == "FAIL"]
    warns = [f for f in findings if f[0] == "WARN"]
    for sev, loc, msg in findings:
        print(f"[{sev:<4}] {loc}: {msg}")
    print("=" * 60)
    print(f"result: {len(fails)} failures, {len(warns)} warnings, "
          f"{len(findings) - len(fails) - len(warns)} checks passed")
    if fails:
        print("VALIDATION FAILED")
        return 1
    print("ALL CHECKS PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
