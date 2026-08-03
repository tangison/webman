# Tangison Universal Skills V2
## Full Work Mode Build, Audit, Migration and GitHub Handoff Specification

Use the following repositories:

- Canonical portable skills repository: `https://github.com/tangison/webman`
- Legacy SkillsCamp application and salvage source: `https://github.com/tangison/skills`

Operate in ultra-think, autonomous engineering mode. This is a complete repository audit, architecture correction, skill-authoring project, migration, verification and GitHub handoff.

Do not treat this as a quick content-editing task. Inspect both repositories with real tools before making architectural decisions.

Do not merely write a report and stop. After the audit, implement Tangison Universal Skills V2 in the correct repository, verify it, push the audited branch and provide a precise handoff.

---

# 1. Conversation context and user intent

The user is Tangison Studio, a Namibian digital studio that works across:

- Website planning, design and development
- Brand strategy and identity
- UI and UX
- Motion and interactive web experiences
- Website auditing and deployment
- Marketing and social media assets
- Flyers and promotional posters
- Company profiles and editorial documents
- Business plans
- Financial projections
- Funding applications
- Quotations, invoices, proposals, agreements and formal letters
- Image generation
- Vector artwork
- Project starter repositories and GitHub handoffs
- Workflow automation

The user works with several AI coding harnesses and does not want the library to depend on Codex.

The library must work across, where supported:

- ZCode by Z.ai
- GLM 5.x models
- Claude Code
- Codex
- Kimi Code
- Gemini CLI
- Antigravity
- Cursor
- Windsurf
- Zed
- OpenCode
- Agent Skills-compatible environments
- Plain chat environments that cannot install skills
- Environments that only support copy-and-paste system prompts

The user expects GLM models to be the main consumers. Assume that some consuming models will:

- Miss implied requirements
- Lose track of scope
- Claim completion too early
- Confuse planning with implementation
- Skip verification
- Invent tool results
- Ignore referenced files
- Merge unrelated responsibilities
- Produce generic AI-looking design
- Use placeholder code
- Announce success without proof

Every skill must therefore be unusually explicit, procedural, self-checking and proof-driven.

The system must remain useful to stronger models without depending on their reasoning ability.

---

# 2. The two repositories are separate

Do not confuse or collapse the repositories without inspection.

## `tangison/webman`

This is the cleaner, smaller portable Agent Skills repository.

It is the intended canonical source for Tangison’s reusable, public, installable and copyable skills.

Its existing baseline includes approximately:

- `tangison-web-loop`
- `tangison-web-plan`
- `tangison-web-content`
- `tangison-web-create`
- `tangison-web-audit`
- `tangison-web-deploy`
- `tangison-documents`
- `tangison-magazine`
- `SUPER_PROMPT.md`

The exact current repository state must be inspected rather than assumed.

## `tangison/skills`

This is not merely another folder of the same Webman skills.

It is a larger SkillsCamp application with:

- A Next.js frontend
- React
- Bun scripts
- Prisma
- API routes
- Z.ai integration
- Seeded skill metadata
- Agent context files
- An existing audit report
- A public skill catalogue or skills interface
- Historical experimental and generated material
- Approximately 36 to 49 listed skills depending on the source and repository state

The user considers much of the old SkillsCamp material sloppy, buggy, duplicated or unreliable.

Do not trust the old count. Determine the exact current count.

Do not assume that catalogue entries in `src/lib/data.ts` are real installable skills.

Do not assume summaries, descriptions, metrics, rankings, source URLs, installation commands or licence claims are correct.

Do not delete, archive or overwrite this repository before salvage analysis.

Treat `tangison/skills` as:

1. A legacy application to audit.
2. A possible source of salvageable skill material.
3. A possible future public catalogue for Webman.
4. Not the canonical source of skill definitions unless the audit proves otherwise.

---

# 3. Chosen repository strategy

Use this strategy unless repository evidence makes it unsafe:

## Canonical source

`https://github.com/tangison/webman` becomes the canonical Tangison Universal Skills V2 repository.

It owns:

- Actual portable skills
- Shared standards
- Prompt packs
- Skill manifest
- Routing rules
- Validation scripts
- Installation documentation
- Copy-and-paste usage
- Source and licence records
- Proof records

## SkillsCamp application

`https://github.com/tangison/skills` remains separate during the first implementation.

After Webman V2 is verified, determine whether SkillsCamp should become:

- A public catalogue that consumes Webman’s generated manifest
- A read-only historical archive
- A separate app rebuilt later
- A repository to archive after the user explicitly authorises it

Do not delete or GitHub-archive `tangison/skills` without explicit user authority.

Do not duplicate authoritative skill text in both repositories.

The preferred future arrangement is:

```text
tangison/webman
    canonical SKILL.md files
    manifests
    prompt packs
    validators
    documentation

tangison/skills
    optional catalogue application
    reads generated Webman manifest
    does not independently rewrite skill definitions
```

Record this chosen interpretation and alternatives in `BUILD_PLAN.md`.

---

# 4. Active mode

This task is explicitly a planning, audit and implementation task.

Use planning to establish the migration safely, but do not spend the entire session writing planning documents.

Mode:

```text
Tangison Universal Skills V2
Audit + migration + full implementation
Production repository work
Public reusable library
Proof-first
GLM-compatible
Cross-harness
```

The first bounded outcome is:

> Produce a verified inventory of both repositories and a keep, merge, rewrite, archive or reject decision for every relevant skill or skill-like artefact.

Verification criterion:

> Every classified item must have a real repository path, source status, reason, target location and evidence. No item may be classified from memory or naming alone.

After that outcome passes verification, continue implementing V2 without asking for approval unless a destructive or ownership-sensitive decision genuinely requires the user.

---

# 5. Mandatory starting response

Before making changes, state:

- Active Tangison phase
- Current mode
- Detected harness
- Available shell, filesystem, browser, GitHub, image, document, deployment and audit capabilities
- Authentication state
- Repository access state
- Current branches and working-tree status
- Installed verified skills
- Missing verified skills
- Art-direction governance model
- Assumptions
- First bounded action
- Verification criterion for that action

Do not ask the user to approve a long plan.

Ask one concise question only if a missing answer materially changes:

- Repository ownership
- Public versus private visibility
- Destructive deletion
- Licence compliance
- Production deployment
- Cost
- Legal meaning
- Domain ownership
- Irreversible architecture

Otherwise document the assumption and continue.

---

# 6. Harness and capability detection

Detect the actual current harness.

Map capabilities by purpose, not merely by product name:

| Purpose | Capability to detect |
|---|---|
| Repository | Clone, fetch, branch, commit, push, PR |
| Filesystem | Read, write, move, delete, diff |
| Shell | Commands, package managers, scripts |
| Browser | Research, screenshots, responsive rendering |
| Skills | Agent Skills support, skills.sh installation |
| Connectors | GitHub, Vercel, DNS, storage |
| Image | Generation, editing, resizing, format conversion |
| Documents | PDF, DOCX, rendering and inspection |
| Testing | Unit, integration, E2E, browser |
| Audit | Lighthouse, axe, Pa11y, Squirrelscan, secret scanning |
| Deployment | Vercel, custom domains, rollback |
| Model | GLM, Claude, GPT, Gemini or other |
| Context | Whether referenced files are automatically read |

Do not guess that a command, MCP server, plugin or connector exists.

Record unavailable capabilities.

When a capability is absent, use the nearest safe supported workflow and state the limitation.

Never claim a check passed when the required capability was unavailable.

---

# 7. Authentication and token safety

Prefer, in order:

1. Existing authenticated GitHub connector
2. Existing authenticated GitHub CLI
3. Existing environment-based credential
4. A temporary token supplied through a secret or environment-variable interface

Do not ask the user to paste a GitHub token directly into ordinary chat.

Never print a token.

Never place a token in:

- Git remotes
- Files
- Shell history
- Logs
- Markdown
- `PROOF.md`
- Commit messages
- URLs
- Screenshots
- Final output

If a temporary token is supplied through an approved secret interface:

- Use it only in the current process.
- Disable shell echo where relevant.
- Prefer an ephemeral askpass helper.
- Remove the helper after use.
- Unset the environment variable after the push.
- Verify the remote commit.
- Recommend revocation after verification.

Do not delete repositories or rewrite public history with a temporary token.

---

# 8. Inspect both repositories first

For each repository:

1. Fetch repository metadata.
2. Identify default branch.
3. Record current HEAD SHA.
4. Inspect branches and open pull requests.
5. Clone or open the repository.
6. Inspect Git status.
7. Preserve unrelated work.
8. Read all root instructions.
9. Read `README.md`.
10. Read `AGENTS.md`, `CLAUDE.md`, `SYSTEM.md` or equivalent if present.
11. Inspect all skill directories.
12. Inspect manifests.
13. Inspect package files and lockfiles.
14. Inspect validation scripts.
15. Inspect CI configuration.
16. Inspect licences.
17. Inspect generated files.
18. Inspect existing audit reports.
19. Inspect open TODO, FIXME and placeholder patterns.
20. Inspect source URLs and install commands.
21. Inspect Git history relevant to the current architecture.
22. Identify stale or conflicting documentation.

Do not rely only on README claims.

---

# 9. Create an evidence-backed migration inventory

Create `MIGRATION_AUDIT.md` in the Webman V2 branch.

Also create a machine-readable inventory such as:

```text
manifests/migration-inventory.json
```

For every item found in either repository, record:

| Field | Required value |
|---|---|
| Name | Current name |
| Repository | `webman` or `skills` |
| Path | Exact repository path |
| Type | Real skill, catalogue entry, prompt, app feature, draft, duplicate, reference or unknown |
| Source | Tangison, external repository or unknown |
| Licence | Verified licence or unknown |
| Install command | Verified, invalid, absent or not applicable |
| Current quality | Pass, partial, fail or not assessed |
| Factual accuracy | Verified, suspect, false or unknown |
| Portability | Installable, copyable, app-bound or non-portable |
| GLM suitability | Strong, partial or weak |
| Duplicate of | Exact target where applicable |
| Decision | Keep, merge, rewrite, archive, reject or investigate |
| Target | Destination path or none |
| Reason | Concise evidence-based rationale |
| Evidence | File path, command output or URL |
| Destructive action needed | Yes or no |
| Authority required | Yes or no |

Count:

- Actual installable skills
- Skill catalogue entries
- Tangison-original skills
- External skill summaries
- Duplicates
- Broken entries
- Unverified source claims
- Missing licences
- Invalid installation commands
- Orphaned files
- App-only features
- Reusable content

Resolve the discrepancy between the previously discussed count of approximately 46 to 49 and any count in the current source.

Do not invent the reason for a discrepancy. Trace it to code, history or configuration.

---

# 10. Skill quality scoring rubric

Score each real or proposed skill from 0 to 5 on:

1. Purpose clarity
2. Trigger clarity
3. Input requirements
4. Explicit procedure
5. Tool discipline
6. Scope discipline
7. Failure handling
8. Authority gates
9. Verification strength
10. Proof requirements
11. Standalone portability
12. GLM readability
13. Conflict management
14. Source truthfulness
15. Licence clarity

Minimum promotion threshold:

```text
No dimension below 3
Average at least 4
Verification and proof both equal 5
```

An item below threshold may be rewritten.

Do not promote app marketing copy as a skill.

Do not promote an external skill summary as if Tangison authored the upstream skill.

---

# 11. Tangison V2 architecture

Implement a clean structure similar to this, adjusting only when repository evidence requires it:

```text
webman/
├── README.md
├── LICENSE
├── SYSTEM.md
├── SUPER_PROMPT.md
├── SKILL_INDEX.md
├── ROUTING_MATRIX.md
├── MIGRATION_AUDIT.md
├── BUILD_PLAN.md
├── PROOF.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── skills/
│   ├── tangison-studio-router/
│   │   └── SKILL.md
│   ├── tangison-harness-adapter/
│   │   └── SKILL.md
│   ├── tangison-skill-author/
│   │   └── SKILL.md
│   ├── tangison-full-output-enforcement/
│   │   └── SKILL.md
│   ├── tangison-anti-ai-slop/
│   │   └── SKILL.md
│   ├── tangison-research/
│   │   └── SKILL.md
│   ├── tangison-project-launchpad/
│   │   └── SKILL.md
│   ├── tangison-web-loop/
│   │   └── SKILL.md
│   ├── tangison-web-plan/
│   │   └── SKILL.md
│   ├── tangison-web-content/
│   │   └── SKILL.md
│   ├── tangison-copywriting-master/
│   │   └── SKILL.md
│   ├── tangison-widget-master/
│   │   └── SKILL.md
│   ├── tangison-motion-master/
│   │   └── SKILL.md
│   ├── tangison-web-build/
│   │   └── SKILL.md
│   ├── tangison-web-audit/
│   │   └── SKILL.md
│   ├── tangison-web-deploy/
│   │   └── SKILL.md
│   ├── tangison-brand-identity/
│   │   └── SKILL.md
│   ├── tangison-social-design/
│   │   └── SKILL.md
│   ├── tangison-imagegen/
│   │   └── SKILL.md
│   ├── tangison-vectorgraphics/
│   │   └── SKILL.md
│   ├── tangison-documents/
│   │   └── SKILL.md
│   ├── tangison-magazine/
│   │   └── SKILL.md
│   ├── tangison-business-plan/
│   │   └── SKILL.md
│   ├── tangison-financial-model/
│   │   └── SKILL.md
│   └── tangison-funding-application/
│       └── SKILL.md
├── references/
│   ├── proof-standard.md
│   ├── skill-authoring-standard.md
│   ├── harness-capability-standard.md
│   ├── anti-ai-slop-standard.md
│   ├── visual-reference-standard.md
│   ├── brand-integrity-standard.md
│   ├── factual-integrity-standard.md
│   ├── document-quality-standard.md
│   ├── motion-standard.md
│   └── security-and-credential-standard.md
├── prompt-packs/
│   ├── universal.md
│   ├── glm-zcode.md
│   ├── codex.md
│   ├── claude-code.md
│   ├── cursor-windsurf.md
│   ├── other-agent-skills-harnesses.md
│   └── copy-paste-no-install.md
├── manifests/
│   ├── skills.json
│   ├── routing.json
│   └── migration-inventory.json
├── templates/
│   ├── SKILL_TEMPLATE.md
│   └── PROOF_TEMPLATE.md
└── scripts/
    ├── validate-skills.*
    ├── validate-links.*
    ├── detect-duplicates.*
    ├── build-manifest.*
    └── verify-prompt-packs.*
```

Do not create empty folders.

Do not add tools or scripts that cannot be justified.

Prefer built-in runtime functionality over a new dependency.

---

# 12. Standalone portability requirement

Every Tangison skill must work in three modes:

## Mode A: Installed Agent Skill

The harness loads `SKILL.md` through Agent Skills or skills.sh.

## Mode B: Repository instruction

An agent reads the skill directly from the repository.

## Mode C: Copy and paste

The user copies a prompt pack or the complete skill into a chat or coding harness that cannot install it.

Do not make core instructions depend on:

- `npx`
- One package manager
- One model provider
- One connector
- One operating system
- One shell
- Codex-specific syntax
- Claude-specific syntax
- A hidden MCP server
- Cross-file references that the consuming harness may not read

References may reduce maintenance duplication, but every skill must repeat the critical rules required for safe standalone execution.

Do not over-optimise for DRY if it makes skills fragile.

A weaker GLM model should not need to infer that it must open another file before obeying a safety-critical instruction.

---

# 13. Standard anatomy for every skill

Every `SKILL.md` must contain valid frontmatter:

```yaml
---
name: exact-skill-name
description: Clear triggering description explaining when the skill must be used.
---
```

Then use this consistent structure where relevant:

```text
# Skill title

## Purpose

## Use this skill when

## Do not use this skill when

## Ownership

## Required inputs

## Inputs to inspect first

## Assumptions and authority gates

## Required tools and fallbacks

## Procedure

## Verification

## Proof requirements

## Failure and debugging procedure

## Completion gate

## Handoff
```

Skills may add specialised sections but must not remove:

- Procedure
- Verification
- Proof requirements
- Completion gate

---

# 14. GLM-compatible writing standard

Write for models that require explicit instructions.

Use:

- Short sentences
- Numbered steps
- Direct verbs
- Exact filenames
- Exact output formats
- Explicit ownership
- Explicit stop conditions
- Explicit forbidden actions
- Concrete examples
- Good versus bad examples
- Repeated critical safety rules at the point of action
- Defined terms
- One decision per paragraph
- Small checklists
- Clear completion conditions

Avoid:

- Vague words such as “properly,” “appropriately” or “as needed” without defining the requirement
- Implied steps
- Long philosophical introductions
- Nested exceptions
- Rules spread across several unrelated files
- Metaphors in operational instructions
- Conflicting owners
- Instructions that say only “use best practices”
- Assuming the model will remember earlier warnings

Where a skill requires judgment, define:

1. What is being judged.
2. What evidence to inspect.
3. What pass looks like.
4. What fail looks like.
5. What to do after failure.

---

# 15. Mandatory proof protocol

Proof is the central principle of Tangison Universal Skills V2.

Every skill must state:

> A completion claim without evidence is invalid.

Every material project must maintain `PROOF.md` using:

```text
Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status
```

Allowed statuses:

- planned
- running
- passed
- failed
- blocked
- paused
- superseded

Do not use `complete` until all relevant verification gates pass.

Every skill must distinguish:

- Action performed
- Result observed
- Evidence collected
- Interpretation
- Remaining risk

The following are not proof:

- “It should work.”
- “This looks correct.”
- “The code was updated.”
- “The build is likely fine.”
- “I followed best practices.”
- A file existing without content validation
- A local commit without remote verification
- A screenshot without route and viewport information
- A build check run before the latest changes
- A different test replacing the original failed test

After a failure:

1. Reproduce the failure.
2. Preserve the failing output.
3. Identify the root cause.
4. Fix the root cause.
5. Rerun the exact failing command.
6. Run broader regression checks.
7. Record both failure and passing evidence.

---

# 16. Tangison Studio Router

Create `tangison-studio-router`.

This is the universal entry skill.

It must:

1. Detect the task type.
2. Detect the harness.
3. Identify the owner skill.
4. Identify supporting skills.
5. Resolve conflicts.
6. Set mode.
7. Set proof requirements.
8. Route handoffs.
9. Prevent two skills from owning the same decision.
10. Prevent a build skill from silently taking over strategy or content.
11. Prevent an image skill from taking over layout.
12. Prevent an audit skill from making unauthorised edits.

Required ownership model:

| Decision | Owner |
|---|---|
| Harness capability | `tangison-harness-adapter` |
| Scope and architecture | `tangison-web-plan` or appropriate planning owner |
| Facts and sources | `tangison-research` |
| Website content strategy | `tangison-web-content` |
| Final website wording | `tangison-copywriting-master` |
| Widget choice | `tangison-widget-master` |
| Motion behaviour | `tangison-motion-master` |
| Website implementation | `tangison-web-build` |
| Website evidence audit | `tangison-web-audit` |
| Deployment | `tangison-web-deploy` |
| Project repository handoff | `tangison-project-launchpad` |
| Logo and identity system | `tangison-brand-identity` |
| Flyer and social layout | `tangison-social-design` |
| Photographic or scene imagery | `tangison-imagegen` |
| SVG and path-based graphics | `tangison-vectorgraphics` |
| Formal transactional documents | `tangison-documents` |
| Editorial profiles and reports | `tangison-magazine` |
| Business-plan reasoning | `tangison-business-plan` |
| Financial calculations | `tangison-financial-model` |
| Funding submission requirements | `tangison-funding-application` |
| Anti-slop enforcement | `tangison-anti-ai-slop` |
| Completeness | `tangison-full-output-enforcement` |
| Skill creation and revision | `tangison-skill-author` |

The router must state the selected owner before work begins.

---

# 17. Harness Adapter

Create `tangison-harness-adapter`.

It must explain how to:

- Detect available capabilities
- Use Agent Skills when installed
- Install project-scoped skills safely
- Fall back to direct file reading
- Fall back to copy-paste prompts
- Avoid inventing unavailable tools
- Avoid pretending one harness works like another
- Handle limited GLM environments
- Record unavailable checks honestly

Include compact adapter notes for:

- ZCode and GLM
- Codex
- Claude Code
- Cursor
- Windsurf
- Kimi Code
- Gemini CLI
- OpenCode
- Generic shell-capable harness
- Chat-only harness

Do not claim exact harness features without current evidence.

Phrase feature details conditionally where environments vary.

---

# 18. Skill Author

Create `tangison-skill-author`.

This skill must govern the creation, revision and audit of every Tangison skill.

It must enforce:

- Correct frontmatter
- Unique canonical names
- Clear triggering descriptions
- No invented tool or package
- No unsupported installation command
- Source and licence verification
- Explicit owner and boundaries
- GLM-readable instructions
- Proof sections
- Failure handling
- Standalone copyability
- Conflict review
- Scenario testing
- Version and changelog updates
- Manifest generation
- No duplicate skill definitions

Include a skill validation checklist and a test matrix.

---

# 19. Full Output Enforcement

Use the supplied `tangison-full-output-enforcement` concept as the canonical Tangison completeness skill.

Preserve these principles:

- Read `BUILD_PLAN.md`, `PROOF.md`, `CONTENT_PLAN.md`, `ASSET_MANIFEST.md` and approved instructions when available.
- Count approved deliverables before writing.
- Deliver the complete approved count.
- Do not add unapproved scope.
- Do not omit repeated files, routes or sections.
- Do not use TODOs.
- Do not use placeholder comments.
- Do not replace implementation with prose.
- Do not claim completion because files merely exist.
- Allow clean resumable breakpoints when a single deliverable exceeds context.
- Keep paused scope open in `PROOF.md`.
- Route complete work through independent verification.

Banned shortcut patterns include:

```text
...
rest of code
similar to above
continue the pattern
add more as needed
TODO
implement here
the rest follows
and so on
```

Do not confuse this skill with any external skill using a similar name.

Canonical name:

```text
tangison-full-output-enforcement
```

---

# 20. Anti-AI Slop foundation

Create `tangison-anti-ai-slop`.

This is a foundation skill.

It applies to:

- Websites
- Landing pages
- Portfolios
- Dashboards where relevant
- Logos
- Brand identities
- Flyers
- Posters
- Social media graphics
- Company profiles
- Brochures
- Business plans
- Generated imagery
- Presentation pages
- Editorial documents

It must run before visual production and again before final handoff.

## Reference-first rule

Never begin a visual concept from an empty generic AI prompt.

First build a reference ledger.

For visual work, gather where possible:

1. One relevant industry-leading reference
2. One strong typography or editorial reference
3. One composition or interaction reference

For example, for a mechanical company:

- Inspect strong mechanical, engineering, industrial or automotive brands.
- Identify how they handle hierarchy, material, typography, image crops and technical detail.
- Abstract the useful principles.
- Do not copy the exact artwork, mark, layout or protected expression.

Reference-led does not mean cloning.

Record:

| Reference | Source | Relevant principle | What may be abstracted | What must not be copied |
|---|---|---|---|---|

When browsing is unavailable:

- Use supplied references.
- Or explicitly state that visual-reference research could not be performed.
- Do not invent a famous design or pretend it was inspected.

## General visual bans

Reject by default:

- Generic purple and blue gradients
- Random glows
- Floating glass panels
- Unrelated 3D shapes
- Fake depth
- AI-generated gibberish text
- Excessive pills
- Repeated rounded cards
- Generic centred startup heroes
- Random blobs
- Decorative grids without meaning
- Excessive shadows
- Generic sans-serif typography with no rationale
- Fake metrics
- Fake testimonials
- Fake clients
- Fake awards
- Generic team photographs
- Staged people laughing at laptops
- Meaningless counters
- Unrelated neon lighting
- Excessive line decorations
- Decorative lines placed merely because AI posters often use them
- Two arbitrary lines framing headings
- Generic “premium” black-and-gold treatment
- Repeating the same layout across unrelated brands
- Copying a competitor’s unique design too closely

## Structural anti-slop test

Before approval, ask:

1. What is the design idea?
2. How does it connect to the specific organisation?
3. What is the hierarchy?
4. What is the one focal point?
5. What was removed because it had no purpose?
6. Does the design still work in monochrome?
7. Would the same design fit an unrelated company with only the logo changed?

If question 7 is yes, the design is too generic and must be revised.

---

# 21. Logo and brand identity skill

Create `tangison-brand-identity`.

Do not make the image-generation skill responsible for final logo generation.

The identity skill owns:

- Discovery
- Brand attributes
- Competitor and category review
- Reference ledger
- Naming lock
- Wordmark decisions
- Symbol decisions
- Monogram decisions
- Geometry
- Typography
- Colour
- Variants
- Clear space
- Minimum sizes
- Favicon
- Export formats
- Brand-kit documentation

## Logo-specific anti-AI rules

Never deliver a final official logo as raw AI image-model output.

An image model may be used for rough ideation or mood exploration only when useful.

The final logo must be:

- Path-based or typographically deterministic
- Editable
- Correctly spelled
- Geometrically inspected
- Tested in monochrome
- Tested at favicon size
- Tested on light and dark backgrounds
- Tested at print size
- Free of accidental gradients unless explicitly required
- Free of faux 3D bevels
- Free of generic swooshes
- Free of random sparks
- Free of over-complicated mascots
- Free of unreadable micro-detail
- Distinct from competitor marks

Create, when relevant:

- Primary lockup
- Horizontal lockup
- Stacked lockup
- Symbol
- Wordmark
- Monochrome
- Reversed
- Favicon
- Social avatar
- Safe SVG
- Transparent PNG delivery copies

Never redraw an existing official logo unless the user explicitly authorises faithful reconstruction.

Never change an existing client logo during unrelated work.

---

# 22. Social design and flyer skill

Create `tangison-social-design`.

It owns final composition for:

- Social posts
- Case-study announcements
- Flyers
- Posters
- Event graphics
- Coming-soon graphics
- Promotional graphics
- Campaign visual systems

It must not delegate exact text rendering to an image-generation model.

Use image generation for supporting imagery when necessary, then compose final text, logos and structure deterministically.

Required process:

1. Confirm exact output dimensions and platform.
2. Read the approved brand source.
3. Lock exact text.
4. Build the reference ledger.
5. Choose one art-direction concept.
6. Establish safe margins.
7. Define one focal point.
8. Place the exact authentic logo.
9. Use no more content than the format can hold.
10. Create the artwork.
11. Inspect at full size.
12. Inspect at mobile thumbnail size.
13. Verify spelling.
14. Verify logo integrity.
15. Verify contrast.
16. Export the exact requested format.
17. Record proof.

For a 1:1 social post, verify the actual square dimensions.

Do not add arbitrary heading lines, border lines or corner marks merely because they are common in AI-generated posters.

---

# 23. Image generation skill

Revise `tangison-imagegen`.

It owns:

- Original photographic scenes
- Product-style imagery
- Environmental imagery
- Textures
- Backgrounds
- Illustration-style scenes
- Supporting campaign imagery
- Web hero imagery
- Editorial imagery

It does not own:

- Final logos
- Exact typography
- Final flyers
- Final company-profile pages
- Dense documents
- Legal forms
- Evidence images
- Real staff photographs
- Real project results

## Asset truth hierarchy

1. Authentic client assets
2. Verified client-source assets
3. Deterministic vector or diagram
4. Generated supporting imagery
5. Clearly labelled structural placeholder

## Subject consistency

Generate recurring subjects once as master assets.

Reuse the same asset.

Do not generate a new bottle, vehicle, person or product every time and pretend it is the same subject.

Use reference conditioning where available.

Record:

```text
Asset name
Prompt
Model
Date
Source/reference
File path
Dimensions
Intended uses
Generated status
Restrictions
```

## Authenticity

Generated images must:

- Match the actual region
- Match the actual industry
- Avoid generic “African” stereotypes
- Avoid fabricated signage
- Avoid fake credentials
- Avoid fake buildings presented as real
- Avoid fake client work
- Avoid fake before-and-after evidence
- Avoid fake dashboards or numbers
- Avoid unreadable generated text

For Namibia, use accurate regional references rather than generic desert imagery.

Never present generated people as actual employees.

---

# 24. Vector graphics skill

Keep `tangison-vectorgraphics` separate from image generation.

It owns:

- Icons
- SVG motifs
- Route lines
- Dividers
- Botanical line work
- Flat graphic elements
- Deterministic diagrams
- Simple symbol systems

It must produce real SVG.

Do not rasterise a graphic and call it vector.

Require:

- Consistent viewBox
- Consistent stroke
- Consistent corner language
- Optical-size checks
- Light and dark checks
- Small and large rendering checks
- No embedded base64 raster unless explicitly justified
- No accidental clipping
- Accessible title or decorative treatment where relevant

---

# 25. Web skill decisions

## Rename

Rename:

```text
tangison-web-create
```

to:

```text
tangison-web-build
```

Preserve Git history where possible.

Add a migration note.

Avoid leaving two independently maintained versions.

A temporary compatibility note may point from the old name to the new canonical name, but do not maintain duplicate full skill bodies.

## Keep separate

Do not merge these responsibilities:

- `tangison-web-content`
- `tangison-copywriting-master`

Content owns facts, research, structure and page-level content planning.

Copywriting owns final persuasive wording.

Do not merge:

- `tangison-widget-master`
- `tangison-motion-master`

Widget Master decides what interaction pattern is appropriate.

Motion Master decides how it moves.

Do not merge:

- `tangison-web-audit`
- `tangison-web-build`

Audit must remain capable of read-only independent review.

## Web loop

Update `tangison-web-loop` to route through the complete V2 skill set.

It must not reference renamed or missing skills.

---

# 26. Website design governance

For visual web builds:

## Art-direction owner

Choose one art-direction owner per project.

Examples:

- Impeccable for substantial web UI
- `tangison-magazine` for editorial page systems
- `tangison-documents` for formal documents
- `tangison-brand-identity` for identity systems
- `tangison-social-design` for flyers and social layouts

Hallmark is not the primary art-direction owner.

Hallmark is the structural anti-slop gate and final independent critic.

## Foundation gates

For landing pages, portfolios, marketing sites and redesign surfaces:

- Hallmark
- Impeccable
- Taste
- `tangison-anti-ai-slop`
- `tangison-motion-master`

For dashboards, portals, checkout and multi-step product UI:

- Hallmark
- Impeccable
- `tangison-anti-ai-slop`
- `tangison-motion-master`

Do not force Taste’s expressive dials into dense product UI.

## Ownership

- Taste sets variance, density and motion intensity where applicable.
- Impeccable owns responsive hardening and polish.
- Hallmark audits structural genericness.
- Widget Master owns interaction choice.
- Motion Master owns movement.
- Build owns implementation.

Do not let one silently overwrite the other.

---

# 27. Motion Master

Preserve and improve the supplied `tangison-motion-master`.

It must enforce:

- Motion has a spatial or state reason.
- Trigger origin determines direction.
- Similar relationships use similar motion.
- Default UI timing: approximately 140 to 220ms.
- Larger surface timing: approximately 250 to 400ms.
- Hero choreography is rare and bounded.
- Define project easing tokens.
- Prefer `transform` and `opacity`.
- Use `clip-path` only with clear purpose and performance checks.
- Respect `prefers-reduced-motion`.
- Use one primary motion engine.
- Use CSS or native APIs for simple interactions.
- Use Anime.js for deliberate timeline, SVG and stagger work when justified.
- Use GSAP ScrollTrigger only for genuinely advanced scroll-driven sequences.
- Do not animate frequently triggered controls unnecessarily.
- Navigation motion must be precise.
- Mobile off-canvas direction must match its anchored edge.
- Sticky navigation must not cover anchor targets.
- Test cleanup and route transitions.

Do not prescribe motion merely to prove that the site has animation.

---

# 28. Widget Master

Preserve and improve `tangison-widget-master`.

It must ask:

1. What must the content do?
2. Must it be visible immediately?
3. What is the cost of hiding or exposing it?

Widgets must not be added merely because a component library exists.

Do not hide essential content behind:

- Hover-only interactions
- Accordions on mobile
- Carousel slide two
- Tooltips
- Modals

Require functional keyboard and touch equivalents.

Require reduced-motion alternatives.

Require performance justification.

---

# 29. Website planning, content, build, audit and deploy

Preserve the strongest supplied rules for:

- `tangison-web-plan`
- `tangison-web-content`
- `tangison-copywriting-master`
- `tangison-web-build`
- `tangison-web-audit`
- `tangison-web-deploy`

Resolve conflicts deliberately.

## Planning

Planning is mandatory when:

- The user explicitly says “plan”
- Scope is genuinely undefined
- Architecture would be unsafe to assume
- Legal or production data is unclear
- A substantial migration is being decided

Planning must not become a reason never to build.

## Build

Build must:

- Inspect first
- Preserve existing architecture
- Touch only task-related code
- Use the smallest complete implementation
- Avoid speculative abstraction
- Avoid dependency duplication
- Build every approved route and state
- Use exact approved content
- Verify each bounded outcome

## Audit

Audit modes must remain distinct:

- Baseline
- Release
- Audit and fix
- Regression

An audit request alone does not automatically authorise edits.

## Deploy

Deployment must:

- Use exact audited commit
- Verify local and remote SHA
- Preserve unrelated DNS records
- Verify TLS
- Verify redirects
- Verify indexing
- Verify forms and integrations
- Verify rollback
- Run live audit

Do not deploy unless requested or already authorised.

---

# 30. Documents and magazine skills

Keep `tangison-documents` and `tangison-magazine` separate.

Remove duplicate pasted versions.

Consolidate each into one canonical file.

## Documents owns

- Quotations
- Invoices
- Proforma invoices
- Letters
- Agreements
- NDAs
- Statements of work
- Policies
- Reports
- Financial tables
- Certificates
- Formal A4 documents

## Magazine owns

- Company profiles
- Brand books
- Brochures
- Editorial proposals
- Annual reports
- Portfolios
- Lookbooks
- Visual case studies
- Page-image documents

Shared rules should live in references, but both skills must repeat critical requirements:

- Exact logo
- Exact text
- No fabricated facts
- Correct page size
- Render every page
- Inspect every page
- Reject clipping
- Reject missing pages
- Reject repeated generic templates
- Record evidence

Remove stray document instructions accidentally inserted into the magazine skill.

---

# 31. Business plan skill

Create `tangison-business-plan`.

This skill owns the reasoning and content architecture of business plans.

It does not own final visual PDF construction.

It must distinguish:

- Verified fact
- User-supplied fact
- Assumption
- Estimate
- Projection
- Recommendation
- Missing information
- Rejected claim

It must cover, where relevant:

- Executive summary
- Company background
- Ownership
- Problem and opportunity
- Product or service
- Market
- Competition
- Business model
- Pricing
- Operations
- Staffing
- Marketing
- Sales
- Implementation
- Risks
- Funding need
- Use of funds
- Financial assumptions
- Supporting documents
- Approval and verification items

Never invent:

- Market size
- Competitor performance
- Client demand
- Employment numbers
- Revenue
- Costs
- Loan approval probability
- Regulatory claims
- Qualifications
- Property values

Use current Namibian sources when Namibia is in scope.

---

# 32. Financial model skill

Create `tangison-financial-model`.

It owns:

- Assumption schedules
- Revenue models
- Cost schedules
- Capital expenditure
- Operating expenditure
- Payroll
- Loan schedules
- Cash flow
- Income statements
- Balance-sheet logic where required
- Break-even
- Sensitivity analysis
- Funding-use tables
- Scenario analysis

It must:

1. State currency.
2. State period.
3. State whether figures include tax.
4. Identify every assumption.
5. Show formulas.
6. Recalculate totals.
7. Check balance continuity.
8. Separate supplied figures from generated assumptions.
9. Mark estimates.
10. Never invent precision.
11. Verify percentages and deposits.
12. Keep machine-readable source data.

Do not let document layout calculations become the only source of truth.

---

# 33. Funding application skill

Create `tangison-funding-application`.

It owns packaging a verified business plan and financial model for a named funding institution.

It must:

- Research the current institution from official sources.
- Verify current requirements.
- Record access date.
- Separate mandatory documents from recommendations.
- Avoid claiming approval.
- Avoid legal or financial guarantees.
- Create a gap checklist.
- Create a submission index.
- Preserve institutional wording where exact forms are involved.
- Route financial work to `tangison-financial-model`.
- Route document production to `tangison-documents` or `tangison-magazine`.

Support Namibia-focused use cases without hard-coding outdated DBN, EIF or SME requirements as permanent facts.

---

# 34. Research skill

Create `tangison-research`.

It is the shared fact-verification owner.

It must:

- Prefer supplied documents.
- Prefer primary sources.
- Prefer official APIs and connectors.
- Prefer current authoritative sources.
- Record source date.
- Separate fact from inference.
- Avoid copying competitor language.
- Observe quotation limits.
- Create a fact ledger.
- Flag conflicting sources.
- Avoid inventing missing data.
- Mark unsupported claims.

For visual research, it works with `tangison-anti-ai-slop`.

For website content, it hands facts to `tangison-web-content`.

For business plans, it hands facts to `tangison-business-plan`.

---

# 35. Project Launchpad

Keep one canonical `tangison-project-launchpad`.

Remove the duplicate.

It must remain the repository and handoff owner.

It should create, when relevant:

```text
SYSTEM.md
PRODUCT.md
BRAND.md
BUILD_PLAN.md
CONTENT_PLAN.md
ASSET_MANIFEST.md
PROOF.md
README.md
```

It must distinguish:

- Starter-only
- Starter-and-build
- Demo
- Production

It must:

- Inspect first
- Organise authentic assets
- Preserve originals
- Protect credentials
- Verify Git status
- Verify commit scope
- Verify remote SHA
- Produce a short continuation prompt
- Avoid making PDF the only source of truth

---

# 36. External skill stack

Inspect primary repositories before installing or invoking external skills.

Required candidates:

- Webman from `https://github.com/tangison/webman`
- Superpowers from `https://github.com/obra/superpowers`
- Ponytail and Ponytail Audit from `https://github.com/dietrichgebert/ponytail`
- Impeccable from `https://github.com/pbakaus/impeccable`
- Hallmark from `https://github.com/nutlope/hallmark`
- Taste Skill from `https://github.com/leonxlnx/taste-skill`
- Anime.js skill from `https://github.com/freshtechbro/claudedesignskills`
- GSAP ScrollTrigger skill from `https://github.com/freshtechbro/claudedesignskills`
- Motion skill from `https://github.com/emilkowalski/skill`
- Relevant marketing skills from `https://github.com/coreyhaines31/marketingskills`
- Relevant audit skills from `https://github.com/squirrelscan/skills`
- Relevant SEO audit skills from `https://github.com/calm-north/seojuice-skills`

Before installation:

1. Verify repository exists.
2. Verify actual skill name.
3. Verify installation method.
4. Verify licence.
5. Inspect scripts.
6. Confirm installation is project-scoped and reversible.
7. Confirm no overlapping dependency is already installed.
8. Record source and commit.

Never guess an install name.

Never silently substitute a different package.

Never execute an uninspected installer requiring elevated privileges.

---

# 37. Conflict precedence

When instructions conflict, use this precedence:

1. Current explicit user instruction
2. Verified legal, security and credential constraints
3. Approved project files
4. Tangison Studio Router
5. Task owner skill
6. Tangison proof and factual-integrity rules
7. Hallmark structural gate
8. Impeccable responsive and polish review
9. Taste settings where applicable
10. Widget Master
11. Motion Master
12. Supporting external skills
13. General defaults

Do not silently merge conflicting rules.

Record the conflict and resolution in `BUILD_PLAN.md`.

---

# 38. Prompt packs

Create prompt packs for users who cannot run `npx`.

At minimum create:

## Universal

A vendor-neutral prompt that:

- Detects the harness
- Reads installed skills
- Falls back to repository files
- Selects an owner skill
- Enforces proof
- Does not assume shell access

## GLM and ZCode

This is the highest-priority prompt pack.

It must:

- Use short directives
- Explicitly tell the agent which files to read
- Repeat the proof gate
- Prevent early completion
- Prevent invented tool output
- Prevent “I cannot” claims before capability inspection
- Prevent hidden scope reduction
- Limit unnecessary questions
- Provide exact output headings
- Require a final proof table

## Codex

Use Codex-compatible language without making it the canonical standard.

## Claude Code

Use repository and tool language appropriate to Claude Code, but do not invent features.

## Cursor and Windsurf

Provide repository-scoped usage.

## No-install copy-paste

Bundle the minimum complete router and proof rules into one portable prompt.

Prompt packs must be generated from canonical source where practical to prevent drift.

Validate that no prompt pack names obsolete skills.

---

# 39. Skills.sh compatibility

Verify the current Agent Skills and skills.sh format from primary sources.

Do not assume the current repository convention is still correct.

Validate:

- Directory naming
- Frontmatter
- Discovery
- Installation from GitHub URL
- Individual skill selection
- Repository-level installation
- Required metadata
- Nested reference handling

Keep installation optional.

The README must show:

- `npx` installation where verified
- Direct Git clone usage
- Direct file-reading usage
- Copy-and-paste usage
- ZCode and GLM usage
- Individual skill usage
- Full-library usage

Do not present untested installation commands as fact.

---

# 40. Validation scripts

Build only the minimum scripts required to verify the repository.

The validator must check:

- Every skill directory has `SKILL.md`.
- Every `SKILL.md` has valid frontmatter.
- Skill names are unique.
- Directory and frontmatter names agree.
- Required sections exist.
- No duplicate canonical skills exist.
- No obsolete `tangison-web-create` references remain except migration documentation.
- No duplicate project-launchpad exists.
- No duplicate documents skill exists.
- No banned placeholder patterns exist.
- No broken internal references exist.
- Every manifest entry points to a real skill.
- Every source URL has valid syntax.
- Every external source has a licence status.
- Every prompt pack names existing skills.
- Every skill has proof and completion sections.
- Every skill declares ownership or scope.
- Every high-risk skill includes authority gates.
- Critical reference rules are present in standalone skills.
- Generated manifest matches repository state.

Do not add a heavy validation framework when a small local script is enough.

---

# 41. Scenario tests

Create a routing and behaviour test matrix.

At minimum test these scenarios:

1. New marketing website with logo and final copy supplied
2. Existing broken Next.js website
3. Website audit only, no fixes authorised
4. Full website build and deployment
5. Social-media case-study graphic
6. New company logo
7. Company profile
8. Formal business letter
9. Business plan for Namibian funding
10. Financial projections
11. Photographed government document restoration
12. Starter repository handoff
13. Chat-only harness
14. ZCode with GLM model
15. Harness with no browser
16. Harness with no shell
17. Missing official logo
18. Conflicting source facts
19. Failed build
20. Token or context limit during a complete deliverable

For each scenario verify:

- Correct owner skill
- Correct supporting skills
- Authority gates
- Required proof
- Correct completion definition
- No conflicting ownership

Do not claim actual GLM runtime testing unless an authorised GLM runtime was used.

Label deterministic prompt inspection separately from live model testing.

---

# 42. Audit the old SkillsCamp application

After the Webman inventory is established, audit `tangison/skills`.

Inspect whether the existing audit report remains accurate.

At minimum verify:

- Current skill count
- Actual `skills/` directories
- Seed catalogue accuracy
- Source URLs
- Installation commands
- Licence metadata
- Fabricated rankings or popularity claims
- Fabricated performance claims
- Dead API routes
- Request validation
- Rate limiting
- Authentication assumptions
- Prisma schema
- Dependency health
- Build scripts
- Strict TypeScript
- Lint
- Build
- Secret handling
- CSP and headers
- SSRF risks
- Database handling
- AI provider handling
- Dead files
- Orphaned assets
- App-to-manifest coupling
- Whether agent context files are production inputs or development debris
- Whether the existing `tangison-audit` should remain universal or merge into another skill

Do not accept a historical audit report as current proof.

Rerun checks.

---

# 43. SkillsCamp salvage rules

Move a skill from SkillsCamp into Webman only when:

- It is a real skill rather than catalogue copy.
- Its source is known.
- Its licence permits inclusion.
- Its instructions are truthful.
- Its install command is verified.
- Its purpose is not already covered.
- It passes the quality rubric after revision.
- Its Tangison authorship is represented accurately.

Do not copy:

- Fabricated popularity claims
- Unverified stars
- Unverified install counts
- Marketing language presented as technical truth
- Phantom integrations
- Placeholder commands
- Generic generated summaries
- Duplicate upstream documentation
- Unlicensed content

External skills should usually remain external dependencies with verified links, not be copied wholesale into Webman.

---

# 44. Possible SkillsCamp future

After Webman V2 passes:

Produce a recommendation for `tangison/skills`:

## Preferred option

Refactor SkillsCamp into a public catalogue that consumes:

```text
webman/manifests/skills.json
```

It should display:

- Canonical name
- Purpose
- Source
- Licence
- Installation options
- Copy-paste option
- Owner category
- Verification status
- Last verified commit

It should not maintain independent full skill bodies.

If this refactor is too large for the current bounded project:

- Create a separate implementation plan.
- Open a separate branch or issue.
- Do not leave partial integration on the primary branch.
- Do not archive or delete the repo.

---

# 45. Documentation requirements

Update or create:

## `README.md`

Explain in under two minutes:

- What Tangison Universal Skills is
- Difference between Webman and SkillsCamp
- Who it is for
- How to install
- How to use without installation
- How to use with ZCode and GLM
- How proof works
- How to select skills
- How to contribute
- Which repository is canonical

## `SYSTEM.md`

Tell an agent:

- Reading order
- Repository purpose
- Skill-authoring rules
- Proof requirement
- Release gate
- Forbidden shortcuts

## `SKILL_INDEX.md`

List every canonical skill and its owner role.

## `ROUTING_MATRIX.md`

Map task types to owner and supporting skills.

## `CHANGELOG.md`

Record V2 migration and renames.

## `CONTRIBUTING.md`

Explain:

- Skill proposal
- Source verification
- Licence verification
- Naming
- Writing standard
- Testing
- Proof
- PR requirements

---

# 46. Branch and Git workflow

Do not make the migration directly on `main`.

For `tangison/webman`:

1. Record current `main` SHA.
2. Create a branch such as:

```text
v2/universal-skills
```

3. Make logically grouped commits.
4. Keep unrelated changes out.
5. Run all validation.
6. Push the branch.
7. Open a pull request.
8. Include audit summary and migration decisions.
9. Include exact passing checks.
10. Include unresolved authority decisions.

For `tangison/skills`:

- Use a separate audit branch if changes are needed.
- Do not mix SkillsCamp app changes into the Webman PR.
- Do not archive, delete or force-push.
- Open a separate PR for any safe app correction.

Do not report push success until remote SHA is verified.

---

# 47. Material-action proof

Record every material action in `PROOF.md`.

Examples:

```text
Audit | Fetch repository metadata | tangison/webman | GitHub API | Default branch main, SHA ... | evidence/... | timestamp | passed
Audit | Count actual skill directories | tangison/skills | filesystem scan | 37 real directories, 41 catalogue entries | evidence/... | timestamp | passed
Migration | Rename skill | tangison-web-create | git mv | renamed to tangison-web-build | git diff | timestamp | passed
Validation | Validate frontmatter | skills/*/SKILL.md | validation script | 24/24 passed | reports/skill-validation.json | timestamp | passed
Git | Push branch | v2/universal-skills | git push | local and remote SHA match | repository URL | timestamp | passed
```

Never fabricate an evidence path.

Store useful command outputs under a small `reports/` or `evidence/` directory only when they add value and do not expose secrets.

---

# 48. Completion gate

Do not call the project complete until all applicable items pass:

## Repository

- Clean intended working tree
- No accidental secrets
- No unrelated changes
- Valid licence state
- Correct canonical repository

## Skills

- All canonical skills exist
- All frontmatter passes
- No duplicate canonical definitions
- No obsolete owner references
- No placeholder text
- No TODO omissions
- No invented install commands
- Proof sections present
- GLM readability reviewed
- Routing scenarios pass

## Prompt packs

- Universal pack passes
- GLM and ZCode pack passes
- No-install pack passes
- All named skills exist
- No harness capability is invented

## Webman

- Manifest generated
- README accurate
- Internal links valid
- Installation instructions verified or clearly labelled
- V2 branch pushed
- Remote SHA verified
- Pull request opened

## SkillsCamp

- Current audit recorded
- Salvage decisions recorded
- No destructive action performed without authority
- Future recommendation documented

## Independent gate

Before presenting completion, run:

- Tangison Full Output cross-check
- Tangison Anti-AI Slop review for visual documentation
- Hallmark-style structural review where applicable
- Ponytail-style necessity review
- Superpowers verification-before-completion
- Exact failing check rerun after any fix

A passing repository must be both complete and minimal.

---

# 49. Final response

Return:

1. Active repositories
2. Webman V2 branch
3. SkillsCamp audit branch, if created
4. Exact commit SHAs
5. Pull-request links
6. Exact number of canonical skills
7. Number kept
8. Number merged
9. Number rewritten
10. Number archived or recommended for archive
11. Number rejected
12. Main architecture decision
13. What was deliberately not deleted
14. Verification commands and results
15. Remaining authority decisions
16. A concise continuation prompt

Do not return only a summary.

Do not say “done” without remote proof.

---

# 50. Initial source skill concepts supplied by the user

The user supplied or approved the following concepts. Preserve their strongest rules while removing duplication and conflict:

- `tangison-full-output-enforcement`
- `tangison-project-launchpad`
- `tangison-vectorgraphics`
- `tangison-imagegen`
- `tangison-motion-master`
- `tangison-copywriting-master`
- `tangison-widget-master`
- `tangison-web-audit`
- `tangison-web-build`
- `tangison-web-content`
- `tangison-web-plan`
- `tangison-magazine`
- `tangison-documents`

The user also approved adding:

- Universal Studio Router
- Harness Adapter
- Skill Author
- Anti-AI Slop
- Research and source verification
- Brand Identity
- Social Design
- Business Plan
- Financial Model
- Funding Application

Do not lose these concepts during deduplication.

Do not merge skills merely because they repeat some standards.

Merge only duplicate ownership.

Keep specialist responsibilities separate.

---

# 51. Immediate execution instruction

Start now.

Do not begin by asking for the GitHub token.

First use any existing authenticated GitHub capability.

Inspect both repositories.

Create the evidence-backed inventory.

Choose the first bounded migration outcome.

Implement Tangison Universal Skills V2 in `tangison/webman`.

Verify each bounded outcome.

Push the audited branch when authenticated write access is available.

Do not delete or archive `tangison/skills` without an explicit authority decision from the user.
