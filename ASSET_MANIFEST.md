# Asset Manifest

| File | Source | Status | Method | Intended use | Restrictions |
|---|---|---|---|---|---|
| reference/Tangison_Universal_Skills_V2_Work_Mode_Spec.md | user supplied | authoritative | preserved original Markdown | audit and architecture source | do not silently rewrite |
| skills/*/SKILL.md | Tangison V2 specification and approved concepts | canonical source | deterministic authoring | installed, direct-read, and copy-paste skill use | keep unique; frontmatter name must match directory |
| references/*.md | Tangison V2 specification | canonical shared standard | consolidated authoring | progressive disclosure | critical rules remain repeated inside skills |
| prompt-packs/*.md | canonical skills and routing rules | canonical adapter source | explicit harness adaptation | no-install and repository-scoped use | never invent harness features |
| manifests/*.json | repository state | generated or audited metadata | deterministic JSON | catalogue and validation | must point to real files |
| Tangison_Universal_Skills_V2_Agent_Handoff.zip | verified source tree | delivery artifact | deterministic ZIP packaging | transfer to another agent | exclude credentials, Git metadata, caches, and temporary files |

No official Webman logo, font, raster image, or generated visual is included.
