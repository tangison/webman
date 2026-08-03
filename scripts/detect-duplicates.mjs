import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const skillsRoot = resolve(import.meta.dirname, "..", "skills");
const seen = new Map();
const duplicates = [];

for (const directory of readdirSync(skillsRoot).sort()) {
  const text = readFileSync(resolve(skillsRoot, directory, "SKILL.md"), "utf8");
  const body = text.replace(/^---[\s\S]*?---\n/, "").replace(/^# .*$/m, "").replace(/\s+/g, " ").trim();
  const hash = createHash("sha256").update(body).digest("hex");
  if (seen.has(hash)) duplicates.push(`${directory} duplicates ${seen.get(hash)}`);
  else seen.set(hash, directory);
}

if (duplicates.length) {
  console.error(duplicates.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${seen.size} canonical skill bodies are unique.`);
