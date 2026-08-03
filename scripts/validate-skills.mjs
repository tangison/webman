import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const skillsRoot = resolve(root, "skills");
const failures = [];
const requiredSections = [
  "## Purpose",
  "## Use this skill when",
  "## Do not use this skill when",
  "## Ownership",
  "## Required inputs",
  "## Inputs to inspect first",
  "## Assumptions and authority gates",
  "## Required tools and fallbacks",
  "## Procedure",
  "## Verification",
  "## Proof requirements",
  "## Failure and debugging procedure",
  "## Completion gate",
  "## Handoff"
];
const banned = [
  /\bTODO\b/i,
  /implement here/i,
  /rest of code/i,
  /similar to above/i,
  /continue the pattern/i,
  /add more as needed/i,
  /the rest follows/i,
  /bare \.\.\./i
];

const directories = readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const names = new Set();

for (const directory of directories) {
  const path = resolve(skillsRoot, directory, "SKILL.md");
  try {
    if (!statSync(path).isFile()) failures.push(`${directory}: SKILL.md is not a file`);
  } catch {
    failures.push(`${directory}: missing SKILL.md`);
    continue;
  }
  const text = readFileSync(path, "utf8");
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) {
    failures.push(`${directory}: invalid frontmatter`);
    continue;
  }
  const fields = fm[1].split("\n").filter(Boolean).map((line) => line.slice(0, line.indexOf(":")).trim());
  if (fields.join(",") !== "name,description") failures.push(`${directory}: frontmatter must contain only name and description`);
  const nameLine = fm[1].split("\n").find((line) => line.startsWith("name:"));
  const descriptionLine = fm[1].split("\n").find((line) => line.startsWith("description:"));
  const name = nameLine?.slice(5).trim();
  if (name !== directory) failures.push(`${directory}: frontmatter name mismatch`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name ?? "") || (name?.length ?? 0) > 64) failures.push(`${directory}: name violates Agent Skills constraints`);
  const descriptionLength = descriptionLine?.slice(12).trim().length ?? 0;
  if (descriptionLength < 80) failures.push(`${directory}: trigger description is too weak`);
  if (descriptionLength > 1024) failures.push(`${directory}: description exceeds 1024 characters`);
  if (names.has(name)) failures.push(`${directory}: duplicate canonical name ${name}`);
  names.add(name);
  for (const section of requiredSections) if (!text.includes(section)) failures.push(`${directory}: missing ${section}`);
  if (!text.includes("A completion claim without evidence is invalid.")) failures.push(`${directory}: missing mandatory proof statement`);
  if (!text.includes("Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status")) failures.push(`${directory}: missing proof schema`);
  if (text.includes("\\n")) failures.push(`${directory}: contains a literal escaped newline`);
  if (text.includes("tangison-web-create")) failures.push(`${directory}: contains obsolete tangison-web-create reference`);
  for (const line of text.split("\n")) {
    if (/reject|do not|no placeholder|without|banned|prohibit/i.test(line)) continue;
    for (const pattern of banned) if (pattern.test(line)) failures.push(`${directory}: banned placeholder pattern ${pattern}`);
  }
  if (text.split("\n").length < 95) failures.push(`${directory}: body is too short for the V2 standalone standard`);
  if (text.split("\n").length > 500) failures.push(`${directory}: body exceeds the recommended 500-line limit`);
}

if (directories.length !== 25) failures.push(`expected 25 canonical skill directories; found ${directories.length}`);

const manifest = JSON.parse(readFileSync(resolve(root, "manifests/skills.json"), "utf8"));
if (manifest.skills.length !== directories.length) failures.push("manifest count does not match skill directory count");
for (const entry of manifest.skills) {
  if (!directories.includes(entry.name)) failures.push(`manifest points to missing skill ${entry.name}`);
  if (entry.path !== `skills/${entry.name}/SKILL.md`) failures.push(`manifest path mismatch for ${entry.name}`);
  if (entry.source !== "Tangison" || entry.license !== "MIT") failures.push(`source or licence status missing for ${entry.name}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`PASS: ${directories.length} skills have unique names, valid frontmatter, V2 sections, proof gates, authority gates, and no banned placeholders.`);
