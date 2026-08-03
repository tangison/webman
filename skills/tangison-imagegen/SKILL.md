---
name: tangison-imagegen
description: Create truthful supporting raster imagery including photographic scenes, product-style images, environments, textures, backgrounds, illustrations, web heroes, and editorial imagery. Use when authentic assets are unavailable and generated imagery is appropriate and clearly labelled.
---

# Tangison Image Generation

## Purpose

Produce consistent, regionally accurate supporting imagery with provenance, restrictions, and responsive delivery variants.

**A completion claim without evidence is invalid.**

## Use this skill when

- A project needs an original raster scene or supporting background.
- A recurring subject must be generated as a reusable master asset.
- Existing imagery must be edited with explicit instructions.

## Do not use this skill when

- Do not create final logos, exact typography, dense documents, legal forms, evidence images, real staff photos, or fake project results.
- Do not generate a new recurring subject for every use and pretend it is the same.
- Do not fabricate readable signage or credentials.

## Ownership

This skill owns raster image generation and editing. Final layout belongs to the relevant design owner.

## Required inputs

- Intended use, dimensions, crop variants, and format.
- Authentic references, subject master, regional and industry context.
- Approved brand treatment and restrictions.
- Asset manifest path.

## Inputs to inspect first

1. Read the complete current request.
2. Read approved project files and authentic source assets.
3. Read repository instructions and inspect the current state when code or files are involved.
4. Read **BUILD_PLAN.md** and **PROOF.md** when present.
5. Inspect available capabilities before declaring a tool or check unavailable.

## Assumptions and authority gates

- Stop when generation would misrepresent staff, facilities, credentials, results, products, or official assets.
- For Namibia, verify the specific region and industry rather than using generic desert or African stereotypes.
- Record every material assumption. Never present an assumption as a verified fact.
- Ask one concise question only when the answer materially changes scope, ownership, legal meaning, cost, public release, production state, or an irreversible action.
- Never expose credentials or place them in source, URLs, logs, evidence, or handoff files.

## Required tools and fallbacks

- Use authentic assets first, then verified client sources, deterministic vectors, generated imagery, and labelled placeholders in that order.
- Use reference conditioning for subject consistency when available.
- Inspect output at full size.
- When a required capability is unavailable, use the nearest safe supported method and record the missing verification.
- Never invent a tool result, browser result, build result, deployment result, or remote state.

## Procedure

1. Define the image job and factual restrictions.
2. Inspect authentic and verified source assets.
3. Select or create one master asset for recurring subjects.
4. Write a prompt with real geography, industry, material, light, camera, composition, exclusions, and delivery crop.
5. Generate or edit the asset.
6. Inspect anatomy, geometry, text artefacts, signage, brand marks, edges, noise, and resolution.
7. Reject outputs that fabricate evidence or drift from the master subject.
8. Create required responsive or transparent variants.
9. Record asset name, prompt, model, date, source, path, dimensions, uses, generated status, and restrictions in `ASSET_MANIFEST.md`.
10. Hand the asset to the layout owner.

## Verification

- The image matches the specific geography and industry.
- No unreadable text, fake signage, fake credential, or false evidence remains.
- Recurring subjects remain consistent.
- Dimensions, crop, format, and transparency match the use.
- Manifest provenance is complete.
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

Return master and variants, provenance record, intended uses, restrictions, inspection evidence, and rejected output notes.
