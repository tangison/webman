---
name: tangison-motion-master
description: Define purposeful interface motion, direction, timing, easing, and reduced-motion behaviour. Use for transitions, reveals, menus, drawers, page changes, sticky navigation, scroll effects, SVG sequences, and interaction feedback.
---

# Tangison Motion Master

## Purpose

Make motion describe spatial or state relationships instead of decorating the interface.

**A completion claim without evidence is invalid.**

## Use this skill when

- Any interface element enters, exits, expands, collapses, moves, or changes state.
- Navigation or scroll motion must be specified.
- An existing interface feels random or over-animated.

## Do not use this skill when

- Do not animate to prove animation was used.
- Do not choose the widget itself.
- Do not use multiple motion engines without a documented need.

## Ownership

This skill owns movement. Widget Master owns interaction choice; Build owns implementation; art direction owns visual style.

## Required inputs

- Trigger origin, destination, state relationship, and interaction frequency.
- Project motion intensity and easing tokens.
- Target devices, performance limits, and reduced-motion requirements.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when motion obscures content, harms task speed, causes vestibular risk, or lacks a relationship to explain.
- Require reduced-motion behaviour before release.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Prefer CSS or native APIs for simple interactions.
- Use Anime.js for justified timelines, SVG, or stagger work.
- Use GSAP ScrollTrigger only for advanced scroll-driven sequences.
- Prefer `transform` and `opacity`; profile expensive properties.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Define the relationship being described.
2. Set direction from the trigger origin or anchored edge.
3. Define project easing tokens.
4. Use approximately 140 to 220ms for common controls and 250 to 400ms for larger surfaces unless testing justifies another value.
5. Keep hero choreography rare and bounded.
6. Specify enter, active, exit, interruption, cleanup, route transition, and reduced-motion states.
7. Ensure sticky navigation does not cover anchors.
8. Use one primary engine.
9. Test on mobile, keyboard, touch, low-power hardware, and reduced-motion mode.
10. Record timings and evidence.

## Verification

- Every animation has a documented spatial or state reason.
- Similar relationships use similar motion.
- Reduced-motion preserves comprehension and control.
- No anchor, focus, route, or cleanup defect remains.
- Performance is acceptable on target devices.
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

Return motion tokens, relationship map, state timings, engine decision, reduced-motion behaviour, and test evidence.
