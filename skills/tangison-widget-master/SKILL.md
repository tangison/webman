---
name: tangison-widget-master
description: Choose accessible interaction patterns based on content purpose and visibility cost. Use when deciding between static content, tabs, accordions, carousels, modals, drawers, tooltips, menus, filters, or other interface widgets.
---

# Tangison Widget Master

## Purpose

Select only interaction patterns that improve comprehension or task completion without hiding essential content or creating inaccessible novelty.

**A completion claim without evidence is invalid.**

## Use this skill when

- A component or interaction pattern must be selected.
- Content may be hidden, condensed, filtered, or sequenced.
- Mobile, keyboard, touch, and reduced-motion behaviour must be defined.

## Do not use this skill when

- Do not add a widget because a library provides it.
- Do not hide essential information behind hover, tooltip, carousel slide two, or mobile accordion.
- Do not own animation timing.

## Ownership

This skill owns what interaction pattern should exist. Motion Master owns how it moves. Build owns implementation.

## Required inputs

- Content purpose, hierarchy, and frequency of use.
- Required visibility, comparison, disclosure, and task flow.
- Target viewports, input methods, accessibility constraints, and performance budget.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Reject a widget when static content performs the job better.
- Stop when hiding content would harm legal, pricing, safety, conversion, or accessibility requirements.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Inspect real content before choosing a component.
- Test keyboard, touch, focus, screen-reader naming, responsive layout, and no-JavaScript or failure behaviour where relevant.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Ask what the content must do.
2. Ask whether it must be visible immediately.
3. Measure the cost of hiding or exposing it.
4. Choose the simplest pattern that meets the job.
5. Define desktop, mobile, keyboard, touch, focus, loading, empty, error, and reduced-motion states.
6. Define content ordering when the widget fails or JavaScript is unavailable.
7. Hand spatial behaviour to Motion Master.
8. Hand exact states and acceptance criteria to Build.
9. Verify with real content, not placeholder labels.

## Verification

- The widget has a documented content reason.
- Essential content is immediately reachable.
- Keyboard and touch equivalents work.
- Focus order and accessible names are correct.
- Responsive and failure states preserve meaning.
- Performance cost is justified.
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

Return the chosen pattern, rejected alternatives, state table, accessibility requirements, and build acceptance criteria.
