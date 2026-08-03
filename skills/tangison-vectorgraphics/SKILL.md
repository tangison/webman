---
name: tangison-vectorgraphics
description: Create true editable SVG icons, motifs, route lines, dividers, botanical line work, diagrams, flat graphic elements, and simple symbol systems. Use when the deliverable must remain path-based, scalable, inspectable, and deterministic.
---

# Tangison Vector Graphics

## Purpose

Produce coherent SVG systems that render correctly at small and large sizes without hidden raster content.

**A completion claim without evidence is invalid.**

## Use this skill when

- An icon family, motif, diagram, divider, or route graphic is required.
- A raster graphic must be recreated as an authorised vector.
- A logo owner needs path-construction support.

## Do not use this skill when

- Do not rasterise an image and call it vector.
- Do not own brand strategy or final logo approval.
- Do not embed base64 raster content unless explicitly justified and documented.

## Ownership

This skill owns vector construction and SVG integrity. Brand Identity owns official identity decisions.

## Required inputs

- Exact subject list, intended sizes, and functional or decorative status.
- Approved palette, stroke, corner, fill, and optical language.
- Reference or authorised source geometry.
- Accessibility and export requirements.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop if reconstruction authority or official asset ownership is unclear.
- Do not trace protected work beyond authorised faithful reconstruction.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Write valid SVG with consistent viewBox and deterministic paths.
- Render at small and large sizes on light and dark backgrounds.
- Inspect XML, clipping, IDs, strokes, fills, and embedded assets.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Define a shared grid, viewBox, stroke weight, cap, join, corner, fill, and palette.
2. Construct the simplest paths that preserve the intended form.
3. Use consistent optical corrections across the family.
4. Add accessible title and description when informative, or mark decorative SVGs correctly.
5. Remove editor metadata and unused definitions.
6. Check for base64 raster content, clipping, transforms, and duplicate IDs.
7. Render at favicon or icon size and large display size.
8. Test light, dark, monochrome, print, and browser output.
9. Package editable masters and optimised delivery copies.
10. Record proof and intended use.

## Verification

- SVG parses and renders without clipping.
- ViewBox, strokes, corners, and fill logic are consistent.
- No unjustified embedded raster exists.
- Small, large, light, dark, and monochrome tests pass.
- Accessibility treatment matches informative or decorative use.
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

Return editable SVG masters, optimised copies, system tokens, accessibility notes, render evidence, and authorised-source record.
