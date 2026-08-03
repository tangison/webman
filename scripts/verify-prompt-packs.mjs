import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const promptRoot = resolve(root, "prompt-packs");
const skills = new Set(JSON.parse(readFileSync(resolve(root, "manifests/skills.json"), "utf8")).skills.map((entry) => entry.name));
const expected = ["universal.md", "glm-zcode.md", "codex.md", "claude-code.md", "cursor-windsurf.md", "other-agent-skills-harnesses.md", "copy-paste-no-install.md"].sort();
const actual = readdirSync(promptRoot).filter((name) => name.endsWith(".md")).sort();
const failures = [];

if (JSON.stringify(actual) !== JSON.stringify(expected)) failures.push(`expected prompt packs ${expected.join(", ")}; found ${actual.join(", ")}`);
for (const name of actual) {
  const text = readFileSync(resolve(promptRoot, name), "utf8");
  if (text.length < 400) failures.push(`${name}: prompt pack is too short`);
  if (!/proof/i.test(text) || !/owner/i.test(text)) failures.push(`${name}: missing owner or proof gate`);
  if (text.includes("tangison-web-create")) failures.push(`${name}: obsolete skill name`);
  for (const match of text.matchAll(/\btangison-[a-z0-9-]+\b/g)) if (!skills.has(match[0])) failures.push(`${name}: unknown skill ${match[0]}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${actual.length} prompt packs are substantive, proof-driven, and reference only canonical skills.`);
