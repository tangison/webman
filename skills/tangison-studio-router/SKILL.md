---
name: tangison-studio-router
description: Route Tangison Studio work to exactly one owner skill and explicit supporting skills. Use at the start of multi-domain work, ambiguous requests, or any task where planning, content, design, implementation, audit, deployment, or handoff responsibilities could conflict.
---

# Tangison Studio Router

## Purpose

Select one decision owner, define supporting roles, set the operating mode, and establish the proof gate before material work begins.

**A completion claim without evidence is invalid.**

## Use this skill when

- A request spans two or more Tangison disciplines.
- The correct owner is unclear.
- Two skills appear to claim the same decision.
- A handoff must preserve ownership across agents.

## Do not use this skill when

- Do not perform specialist work that belongs to the selected owner.
- Do not let a supporting skill overwrite the owner.
- Do not route from names alone when repository evidence is available.

## Ownership

This skill owns routing only. The selected specialist owns the work product and acceptance criteria.

## Required inputs

- The complete current request and approved project files.
- Available skills and real harness capabilities.
- Current mode: audit, plan, build, fix, deploy, starter-only, or production.
- Existing `BUILD_PLAN.md` and `PROOF.md` when present.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop for ambiguous destructive actions, public release, production deployment, legal meaning, or repository ownership.
- Do not ask questions that do not change scope or authority.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Inspect the filesystem, repository, and installed skill catalogue before declaring capability.
- Use direct file reading when automatic skill loading is unavailable.
- Use copy-paste prompt packs when installation is unavailable.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Classify the task by deliverable and risk.
2. Detect the actual harness and available capabilities.
3. Select exactly one owner skill.
4. List supporting skills and what evidence each supplies.
5. Resolve conflicts using current user instruction, verified constraints, approved files, router, owner, then supporting rules.
6. State mode, owner, supporters, assumptions, first bounded action, and verification criterion.
7. Route each completed bounded outcome through its independent verification gate.
8. Record routing changes in `BUILD_PLAN.md` and evidence in `PROOF.md`.

## Verification

- Exactly one owner is named for each material decision.
- Every supporting skill has a limited role.
- No required capability was invented.
- The completion definition includes evidence, not a claim.
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

Return the selected owner, supporters, mode, authority gates, evidence requirements, and next bounded action.
