# Build Plan

## Chosen architecture

Webman remains the canonical portable skills repository. SkillsCamp is excluded from implementation after the user's explicit later instruction to drop the website. No destructive action is authorised.

## Locked scope

1. 25 canonical SKILL.md files.
2. 7 complete prompt packs.
3. 10 shared standards.
4. Skills, routing, and migration manifests.
5. Root system, product, governance, index, routing, changelog, contribution, audit, readme, and proof files.
6. Skill and proof templates.
7. 20 deterministic routing scenarios.
8. Minimal dependency-free Node validation scripts.
9. One verified ZIP handoff for another agent.
10. One clean V2 branch based on the current remote main, pushed to tangison/webman with the remote commit SHA verified.
11. One draft pull request to main when the connected GitHub integration permits creation after the branch push.

## Bounded outcomes

| Outcome | Owner | Verification | State |
|---|---|---|---|
| Canonical skill bodies | tangison-skill-author | 25 unique skills; required sections; no placeholders | built |
| Routing architecture | tangison-studio-router | 20 scenarios map to one owner | built |
| Prompt packs | tangison-harness-adapter | 7 complete packs; no obsolete skill names | built |
| Documentation | tangison-project-launchpad | required files substantive and internally linked | built |
| Repository validation | tangison-skill-author | all local validators pass | passed |
| ZIP handoff | tangison-project-launchpad | inventory, extraction, checksum, and secret scan pass | passed |
| GitHub handoff | tangison-project-launchpad | branch derives from remote main; push succeeds; local and remote SHAs match | in progress |
| Draft pull request | tangison-project-launchpad | draft PR targets main from v2/universal-skills | pending |

## Rejected alternatives

- Modifying or packaging the SkillsCamp website: rejected by the user's later instruction.
- Maintaining tangison-web-create beside tangison-web-build: rejected because it duplicates ownership.
- Copying external skill bodies: rejected because source and licence must remain explicit.
- Depending on one package manager or harness: rejected because portability is required.

## Publishing authority

The user explicitly authorised publishing `v2/universal-skills` to `tangison/webman`. The branch must derive from the current remote `main`, preserve compatible baseline support assets, contain no credential, and pass the complete validation suite before push. Completion requires an independently read remote SHA matching the final local commit. SkillsCamp remains excluded.
