---
name: tangison-web-loop
description: Orchestrate complete website work through bounded, verified outcomes. Use for multi-phase website planning, content, design, implementation, audit, correction, and deployment where ownership and stopping conditions must remain explicit.
---

# Tangison Web Loop

## Purpose

Sequence owner skills without merging their responsibilities and prevent planning, building, or polishing from becoming an unbounded loop.

**A completion claim without evidence is invalid.**

## Use this skill when

- A website task spans several phases.
- The next safe bounded outcome must be selected.
- Verification failures require a controlled correction cycle.

## Do not use this skill when

- Do not replace owner skills.
- Do not deploy without authority.
- Do not continue cycles without measurable improvement.

## Ownership

This skill owns sequence and bounded-loop state. Each phase owner controls its own decisions.

## Required inputs

- Current mode, approved scope, and owner map.
- `BUILD_PLAN.md`, `CONTENT_PLAN.md`, `ASSET_MANIFEST.md`, and `PROOF.md`.
- Latest verification evidence and open blockers.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop for destructive changes, unclear production authority, three cycles without measurable improvement, or ten cycles in one phase.
- Do not let a context limit silently close an open outcome.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Use the router and harness adapter first.
- Use planning, content, copy, widget, motion, build, audit, deploy, and handoff owners only for their defined phase.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Select one bounded outcome from the approved plan.
2. Name its owner, supporters, inputs, output, and pass criterion.
3. Execute only that outcome.
4. Run its exact verification gate.
5. If it fails, preserve evidence and perform one root-cause correction cycle.
6. Update `PROOF.md` and plan status.
7. Choose the next outcome only after pass or explicit blocked status.
8. Before release, run completeness, anti-slop where visual, independent audit, and deployment gates.
9. End only when all approved outcomes pass or an authority decision blocks progress.

## Verification

- Only one outcome was in progress.
- The named owner retained control.
- Each cycle changed measurable evidence.
- Open scope remains visible.
- Release gates cover the latest state.
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

Return completed outcomes, current open outcome, evidence, cycle count, blocker, and next owner.
