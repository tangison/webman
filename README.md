# Tangison Universal Skills V2

Tangison Universal Skills V2 is a proof-first, cross-harness library for Tangison Studio. It contains 25 canonical skills for websites, brands, social design, imagery, documents, business planning, financial models, funding applications, research, completeness, and project handoff.

Webman is canonical. The legacy SkillsCamp website is excluded and unchanged.

## Start in under two minutes

1. Read SYSTEM.md.
2. Read skills/tangison-studio-router/SKILL.md.
3. Select exactly one owner from ROUTING_MATRIX.md.
4. Read the owner skill and only required supporting skills.
5. Maintain PROOF.md. A completion claim without evidence is invalid.

## Use modes

- Agent Skills harness: point the harness at this repository and confirm it discovers skills/*/SKILL.md. Installation commands vary by current harness and must be verified before use.
- Repository reading: tell the agent to read SYSTEM.md and the selected SKILL.md directly.
- Copy and paste: use prompt-packs/copy-paste-no-install.md, then paste the selected complete skill.
- ZCode and GLM: start with prompt-packs/glm-zcode.md. It uses explicit files, headings, counts, and proof gates.
- Codex, Claude Code, Cursor, Windsurf, and other harnesses: use the matching prompt pack and inspect real capabilities first.

## Validate

Run:

~~~sh
node scripts/validate.mjs
~~~

The validation suite checks skill structure, names, manifests, duplicates, links, prompt packs, routing scenarios, placeholder shortcuts, obsolete references, and credential signatures.

## Contribute

Read CONTRIBUTING.md and SOURCES.md. New skills require verified source and licence status, unique ownership, GLM-readable procedures, scenario coverage, manifest updates, and proof.

## Handoff

The ZIP is a starter-only source handoff. Another authenticated agent may create a branch, rerun validation, commit, push, verify the remote SHA, and open a pull request. Do not claim remote publication from this archive.
