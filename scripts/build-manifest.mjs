import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const skillsRoot = resolve(root, "skills");
const manifestPath = resolve(root, "manifests/skills.json");

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error("Missing frontmatter");
  const result = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon < 1) continue;
    result[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }
  return result;
}

const skills = readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()
  .map((directory) => {
    const metadata = frontmatter(readFileSync(resolve(skillsRoot, directory, "SKILL.md"), "utf8"));
    return {
      name: metadata.name,
      path: `skills/${directory}/SKILL.md`,
      description: metadata.description,
      source: "Tangison",
      license: "MIT",
      portability: ["installed-agent-skill", "repository-reading", "copy-paste"]
    };
  });

const generated = {
  schema_version: 2,
  canonical_repository: "https://github.com/tangison/webman",
  generated_from: "skills/*/SKILL.md",
  skills
};

if (process.argv.includes("--write")) {
  writeFileSync(manifestPath, `${JSON.stringify(generated, null, 2)}\n`, "utf8");
  console.log(`PASS: wrote manifest for ${skills.length} skills.`);
} else {
  const current = JSON.parse(readFileSync(manifestPath, "utf8"));
  if (JSON.stringify(current) !== JSON.stringify(generated)) {
    console.error("FAIL: manifests/skills.json does not match skills/*/SKILL.md. Run node scripts/build-manifest.mjs --write.");
    process.exit(1);
  }
  console.log(`PASS: manifest matches ${skills.length} skills.`);
}
