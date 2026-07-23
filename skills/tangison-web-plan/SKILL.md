---
name: tangison-web-plan
description: Plan new websites, redesigns, migrations, portals, stores, explicit client demos, and substantial web features when the user asks for planning or when unresolved requirements make implementation unsafe. Use for read-only discovery, research, positioning, routes, architecture, integrations, deployment decisions, risks, and acceptance criteria. Do not invoke automatically for a sufficiently detailed build request.
---

# Tangison Web Plan

Plan only when requested or genuinely blocking. Remain read-only. Do not install packages, edit production code, create repositories, deploy, or change DNS.

## Universal operating foundation

This skill is harness-neutral. Discover the current harness, repository tools, web research, browser, connectors, and shell capabilities, then use the strongest available tool for each fact. Do not answer an inspectable question from memory. Cite unstable external facts and record evidence in `PROOF.md`.

Iterate through `discover, interview only where necessary, research, model, challenge, revise, verify`. Revisit earlier assumptions whenever evidence changes route scope, brand, architecture, cost, or launch. Stop after three cycles without meaningful improvement, ten cycles total, or a decision requiring user authority.

The user's first prompt, existing files, prior decisions, and repository are the brief. Do not turn a detailed request into a long interview. Ask one concise question only when the missing answer materially changes scope, cost, architecture, legal meaning, production data, deployment authority, or brand direction.

## Conditional interview

Inspect first. Confirm only unresolved critical items:

1. Project type: new site, redesign, migration, full build, explicit demo, portal, store, or feature.
2. Organisation, offer, audience, business objective, and primary conversion.
3. Existing website, repository, working systems, and anything that must remain.
4. Required pages, functions, user roles, forms, database, search, payments, email, analytics, and integrations.
5. Approved logo, colours, fonts, imagery, references, desired character, and rejected styles.
6. Content readiness, facts, claims, services, prices, contacts, case studies, testimonials, and approval owner.
7. GitHub owner, Vercel team, deployment target, production domain, DNS provider, deadline, and rollback expectations. Ask about demo details only when the user explicitly requested a demo.

If answers already exist, reuse them. When a non-critical detail is absent, label a reasonable assumption and continue.

## Existing-project discovery

Inspect `AGENTS.md`, Git status, package manifest, lockfile, scripts, framework configuration, routes, components, tokens, assets, APIs, database, authentication, environment examples, analytics, SEO, tests, README, and deployment files. Record what works and should be preserved. Do not rebuild a working system without a verified reason.

## Research

Research only what materially improves decisions:

- Official business sources and supplied documents.
- Three to six relevant competitors when differentiation matters.
- Customer needs, objections, trust signals, search intent, and local Namibian context.
- Official technical documentation for unstable software facts.
- Domain, DNS, integration, legal, accessibility, and deployment requirements.

Separate verified facts, user-supplied facts, assumptions, recommendations, missing information, and rejected information. Cite research sources. Never invent traffic, rankings, market share, revenue, credentials, partners, testimonials, or competitor performance.

When marketing strategy materially affects the website, use the relevant skills from `https://github.com/coreyhaines31/marketingskills`. Establish its product-marketing context first, then route to customer research, competitor analysis, positioning, pricing, content strategy, SEO, CRO, or analytics as needed. Treat its output as specialist evidence, not automatic truth.

## Product definition

Express the project as:

```text
We are building [website type] for [organisation] so that [audience]
can [primary action], supporting [business objective].
```

Define audience, problem, offer, positioning, primary and secondary conversions, trust requirements, brand personality, constraints, and explicit non-goals.

## User journeys

For every critical journey define entry, intent, information, decision points, errors, empty states, conversion, confirmation, follow-up, and analytics.

Do not plan pages without mapping how users reach and leave them.

## Route inventory

For every route define:

| Field | Value |
|---|---|
| Route | Final or proposed URL |
| Purpose | One clear job |
| Audience | Primary reader |
| CTA | Primary action |
| Content | Required sections |
| Proof | Evidence required |
| SEO intent | Topic or none |
| Data source | Static, CMS, database, API, or unknown |
| Access | Public, locked, authenticated, or role-based |
| Scope | Demo, full, optional, future, or excluded |

Every page must justify its existence.

## Content brief

For each page identify the audience question, promise, facts, proof, CTA, search intent, heading direction, source material, missing information, image needs, copy limit, owner, and approval status. Do not write filler to make the plan look complete.

## Design direction

Define typography character, colour logic, grid, spacing, shape language, imagery, icon system, motion intensity, density, navigation, buttons, mobile composition, and accessibility. State what makes the project specific to this brand.

Define the scroll and motion system in operational terms: purpose, hierarchy, page-entry behaviour, section reveals, continuity between sections, interaction feedback, timing, easing, reduced-motion fallback, cleanup, and performance budget. Select CSS and native APIs for simple motion, Anime.js for deliberate timelines, staggers, SVG, and interaction choreography, or GSAP ScrollTrigger for advanced scrollytelling. Plan one primary runtime motion engine unless a measured requirement justifies more.

Reject generic centred startup heroes, gradient text, glassmorphism, random blobs, excessive pills, repeated card grids, fake metrics, generic testimonials, default startup palettes, and template footers unless the brief specifically justifies them.

Avoid em dashes and generic AI copy.

Plan a restrained public-page footer credit reading `Made by Tangison Studio`, linked to `https://studio.tangison.com`. Record any explicit project instruction to remove or change it.

## Mandatory brand definition

Every project must define both a reusable brand guideline and a public brand page. Do not treat a logo and two colours as a complete identity.

Create `BRAND.md` with:

- brand purpose, audience, position, promise, personality, voice, and prohibited language;
- verified logo files, variants, clear space, minimum size, background rules, and misuse rules;
- colour roles with exact values and accessible pairings;
- typography roles, available files, licensing status, fallback stack, hierarchy, and usage;
- grid, spacing, radius, border, shadow, texture, icon, illustration, and photography rules;
- motion principles, reduced-motion behaviour, and interaction character;
- component principles for navigation, buttons, forms, cards, tables, alerts, and states;
- examples of correct and incorrect application;
- source and approval status for every identity decision.

Plan a `/brand` route containing the approved public expression of the identity. In explicitly requested demo mode it remains unlocked alongside the approved home experience. Exclude confidential internal rules from the public page.

## Architecture

Choose the smallest stack that supports the approved requirements. For existing projects, identify the installed versions and compatibility before suggesting upgrades. For new projects, justify rendering, framework, styling, database, authentication, content management, search, email, payments, analytics, storage, and deployment choices.

Do not select a dependency or service merely because Tangison has used it before.

For React interfaces, explicitly evaluate Meta Astryx from `https://github.com/facebook/astryx` against the existing system, native components, shadcn/ui, bundle cost, beta risk, accessibility, brand flexibility, and ownership. Prefer Astryx for component-heavy product interfaces when the evidence supports it. Do not force it into bespoke marketing pages or non-React projects.

## Explicit demo planning

Skip this section unless the user explicitly requested a demo. When requested, define whether the demo is:

- Hero-only concept.
- Hero plus brand page.
- Selected-page prototype.
- Functional client demo.
- Full pre-production site.

For a locked demo, specify exactly which routes are public, which display a locked preview, which redirect, and how unlocking will work. Prevent accidental indexing and real customer transactions where appropriate.

## Deployment planning

Document GitHub owner, repo name, visibility, default branch, Vercel team, project name, build settings, environment-variable names, preview mode, demo hostname, DNS owner, production domain, canonical host, database environments, email and payment modes, approval gate, rollback, and handover.

Do not perform these actions during planning.

## Quality targets

Set project-specific gates for build, types, lint, tests, critical journeys, responsive layouts, WCAG 2.2 AA, SEO crawlability, content accuracy, security, Core Web Vitals, demo indexing, deployment, and rollback. Do not create one fake universal score.

## Required outputs

Create `PRODUCT.md` with project summary, audience, offer, positioning, conversions, brand, design direction, content principles, competitors, non-goals, facts, assumptions, and open questions.

Create `BRAND.md` with the complete identity system and public brand-page brief.

Create `BUILD_PLAN.md` with repository state, stack, routes, demo locks, features, journeys, content needs, components, data, integrations, SEO, analytics, security, deployment, milestones, audit targets, risks, acceptance criteria, and human approval points.

End with Confirmed, Assumptions, Needs confirmation, Milestones, and Acceptance criteria. If the user requested planning only, stop. Otherwise hand the working documents back to `tangison-web-loop` so autonomous implementation can continue without requesting ceremonial plan approval.
