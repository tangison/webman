---
name: tangison-social-design
description: Compose exact branded social posts, case-study announcements, flyers, posters, event graphics, coming-soon graphics, promotional graphics, and campaign visual systems. Use when final text, logos, imagery, and layout must be assembled at exact platform dimensions.
---

# Tangison Social Design

## Purpose

Create legible, specific campaign artwork with authentic logos and deterministic text composition.

**A completion claim without evidence is invalid.**

## Use this skill when

- A final social or promotional graphic is requested.
- A generated supporting image must be combined with exact copy and branding.
- A campaign needs repeatable format variants.

## Do not use this skill when

- Do not delegate exact typography or logo rendering to an image model.
- Do not add invented contact details, offers, dates, metrics, or results.
- Do not use arbitrary lines or corner marks as filler.

## Ownership

This skill owns final promotional composition. Imagegen owns supporting raster scenes; Brand Identity owns logos.

## Required inputs

- Exact platform, dimensions, format, safe areas, and variants.
- Approved brand source and authentic logo.
- Locked exact text, CTA, contact details, and imagery status.
- Reference ledger and selected art direction.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop if the official logo, exact text, event detail, or required legal line is missing.
- Do not present generated scenes as evidence of real work.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Compose text and logos deterministically.
- Inspect at full size and mobile thumbnail size.
- Use image generation only for labelled supporting imagery.
- Export exact pixel dimensions and colour format.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Confirm exact output dimensions and platform.
2. Read the approved brand source.
3. Lock every word before layout.
4. Build a reference ledger and choose one art-direction concept.
5. Set safe margins and one focal point.
6. Place the authentic logo without alteration.
7. Compose supporting imagery, text, hierarchy, CTA, and contact details deterministically.
8. Remove content the format cannot hold only with approved scope adjustment.
9. Inspect at full size and thumbnail size.
10. Verify spelling, logo integrity, contrast, cropping, dimensions, and export format.
11. Record proof for every variant.

## Verification

- Pixel dimensions and aspect ratio are exact.
- All text is spelled and rendered correctly.
- The authentic logo is unchanged.
- Hierarchy works at thumbnail size.
- Contrast and safe margins pass.
- Generated imagery is labelled and not used as factual evidence.
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

Return final exports, editable source, exact copy ledger, asset provenance, inspection evidence, and platform-specific notes.
