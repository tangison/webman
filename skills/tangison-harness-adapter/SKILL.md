---
name: tangison-harness-adapter
description: Adapt Tangison workflows to the capabilities of ZCode and GLM, Codex, Claude Code, Cursor, Windsurf, Kimi Code, Gemini CLI, OpenCode, generic shell harnesses, and chat-only environments. Use before relying on tools, installed skills, referenced files, connectors, or automatic context loading.
---

# Tangison Harness Adapter

## Purpose

Map required outcomes to capabilities that actually exist, then choose a truthful fallback without inventing tools or checks.

**A completion claim without evidence is invalid.**

## Use this skill when

- The harness is unknown or changed.
- A workflow names a tool that may not exist.
- The agent must work without skill installation.
- A check is blocked by missing shell, browser, connector, or model access.

## Do not use this skill when

- Do not claim a product feature from memory.
- Do not pretend one harness behaves like another.
- Do not mark an unavailable check as passed.

## Ownership

This skill owns capability detection and fallback selection. It does not own project scope or specialist output.

## Required inputs

- Required outcomes and verification gates.
- Observed tool list and filesystem access.
- Observed model or harness identity when available.
- Repository instructions and prompt-pack options.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop before any workaround that changes credentials, repository ownership, production data, or destructive scope.
- Record unavailable capabilities and the verification they prevent.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Probe tools with non-destructive checks.
- Prefer installed Agent Skills when discovered.
- Fall back to direct `SKILL.md` reading, then to copy-paste prompts.
- For chat-only environments, produce files or complete copyable output without claiming shell verification.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. List the outcome capabilities: repository, filesystem, shell, browser, skills, connectors, image, documents, testing, audit, deployment, model, and context loading.
2. Test each required capability with the smallest safe probe.
3. Mark each capability available, unavailable, restricted, or unknown.
4. For ZCode and GLM, use short directives, explicit file paths, repeated proof gates, and no implied steps.
5. For Codex or Claude Code, use repository instructions only after confirming they are read.
6. For Cursor and Windsurf, keep instructions repository-scoped and verify edits in the actual worktree.
7. For Kimi Code, Gemini CLI, OpenCode, or a generic shell harness, describe features conditionally and inspect before use.
8. For chat-only work, use the no-install prompt pack and label every unperformed runtime check.
9. Select the nearest safe fallback for each unavailable capability.
10. Write the capability map and limitations to `PROOF.md`.

## Verification

- Every required outcome has an available method or an explicit blocked status.
- No tool result is invented.
- Fallback instructions remain complete in a weaker GLM environment.
- Unavailable checks are listed as remaining risk.
- Run verification after the latest material change.
- Separate action, observed result, evidence, interpretation, and remaining risk.

## Proof requirements

Maintain **PROOF.md** for material work using:

Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status

Use only these working statuses: planned, running, passed, failed, blocked, paused, superseded.

The following are not proof: a file merely existing, a claim that work should function, a check run before the latest change, a local commit without remote verification, or a different test replacing the failed test.

## Failure and debugging procedure

1. Reproduce the failure with the same input and command or method.
2. Preserve the failing output and evidence path.
3. Identify the root cause. Do not replace diagnosis with a guess.
4. Apply the smallest complete correction within the authorised scope.
5. Rerun the exact failed check, then run the relevant regression checks.
6. Record the failure, correction, new result, and remaining risk in `PROOF.md`.

## Completion gate

Do not claim completion until:

- every approved output exists and matches the locked scope;
- the latest applicable checks pass;
- **PROOF.md** contains real evidence;
- unauthorised or unrelated work is absent;
- remaining risk and blocked checks are disclosed.

## Handoff

Return the capability matrix, selected fallbacks, blocked checks, and exact instructions for the consuming harness.
