# Contributing

## Propose

Define concrete trigger and non-trigger examples. Prove the purpose is not already owned by a canonical skill.

## Verify source and licence

Record Tangison authorship or the verified upstream source. Verify licence before copying any external material. Prefer linking to external skills instead of copying their bodies.

## Write

Use a lowercase hyphenated name. Frontmatter contains only name and description. Follow templates/SKILL_TEMPLATE.md. Use direct GLM-readable steps and repeat critical standalone rules.

## Test

Run node scripts/validate.mjs. Add or update routing scenarios. Require no quality score below 3, an average of at least 4, and proof and verification scores of 5.

## Prove

Update manifests, routing, changelog, and PROOF.md. Preserve failing output and rerun the exact check after fixes.

## Pull request

Describe purpose, owner, source, licence, scenarios, validation results, migration impact, and unresolved authority decisions. Do not mix unrelated changes or claim remote success without matching SHAs.
