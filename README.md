# Webman by Tangison Studio

An evidence-led website and document production system for strategy, content, brand definition, creation, auditing, deployment, and premium document production.

Webman uses portable Agent Skills and is designed for Codex, Claude Code, Kimi Code, Antigravity, Gemini CLI, Cursor, Windsurf, ZCode, Zed, OpenCode, and other compatible harnesses. It discovers available tools, installs verified project-scoped skills, defaults to autonomous full builds, uses planning only when requested or blocking, and requires proof for every completion claim.

## Install

Install the complete collection:

```bash
npx skills add https://github.com/tangison/webman
```

Or select an individual skill when prompted.

## Included skills

| Skill | Purpose |
|---|---|
| `tangison-web-loop` | Routes a project through the complete workflow |
| `tangison-web-plan` | Discovery, research, architecture, scope, and acceptance criteria |
| `tangison-web-content` | Research, editorial planning, exact website copy, metadata, and content QA |
| `tangison-web-create` | Complete website implementation, including forgotten routes and UI states |
| `tangison-web-audit` | Evidence-based code, design, accessibility, SEO, performance, and security audit |
| `tangison-web-deploy` | GitHub, Vercel, demo subdomain, production domain, verification, and rollback |
| `tangison-documents` | Premium transactional and business PDFs |
| `tangison-magazine` | Editorial profiles, reports, brochures, and page-image documents |

## Workflow

```text
Inspect and bootstrap
Plan only when requested or blocking
Content
Brand definition
Create
Audit
Fix and re-audit
Deploy when requested
Live audit
```

Demo mode is never assumed. It activates only when the user explicitly requests a demo. The specialist skills can also be invoked independently.

## Start a complete project

Copy the master invocation from [`SUPER_PROMPT.md`](SUPER_PROMPT.md). It connects Webman with Superpowers, Ponytail, Hallmark, Impeccable, Taste, full-output enforcement, Anime.js, GSAP ScrollTrigger, marketing, auditing, GitHub, and Vercel while keeping one proof ledger.

## Verification

Webman separates what it can prove from what it asks an agent to do. The
executable layer lives in this repository and runs locally and in CI:

| Gate | Command | What it proves |
|---|---|---|
| `validate.py` | `python3 validate.py` | Every shipped skill has a SKILL.md with valid frontmatter, every local reference resolves, no placeholder patterns, em dashes, or secret-shaped strings, the PDF preflight script parses, and SUPER_PROMPT.md only references repositories pinned in `skills-lock.json` |
| `validate.py --check-remotes` | adds network checks | Every pinned commit still exists upstream |
| `.github/workflows/validate.yml` | runs on every push and PR | The above cannot silently regress |
| `skills/tangison-documents/scripts/preflight_pdf.py` | run per document | Rendered PDF quality checks before delivery |

`skills-lock.json` pins every external skill repository referenced by the
super prompt to an exact commit. Update a pin deliberately: review the
upstream diff, then update the commit field.

What Webman does **not** prove by itself: the operating rules inside each
SKILL.md are instructions for a harness, not executable code. They are
enforced only when an agent follows them and records evidence in PROOF.md.
The `tangison-web-audit` and `tangison-web-deploy` skills define the release
gates; this repository guarantees the stack is structurally sound, clean, and
pinned, and that the rules cannot drift unnoticed.

## License

MIT. See [`LICENSE`](LICENSE).

