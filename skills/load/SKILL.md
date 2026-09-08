---
name: load
description: Use when starting work on a new feature — loads its spec from context/features/ (or an inline description) into context/current-feature.md, the single pointer for what's in flight.
---

# Load a Feature

`context/current-feature.md` is the single source of truth for the feature currently in
flight (see `@context/ai-interaction.md`). Loading a feature means pointing that file at a
new spec and resetting its status — never edit the spec files under `context/features/`
themselves when loading; they're the durable record.

## Input

Takes an argument naming what to load:

- A spec filename (matches `context/features/{name}.md`, e.g. `port-transaction-email`) —
  read it, don't guess its contents.
- A multi-word inline description — no spec file exists yet; draft goals directly from the
  description. Only for work small enough that it doesn't earn a spec doc.
- Empty — ask which spec to load; don't guess.

## Steps

1. Resolve the spec. Filename-like arg → read `context/features/{name}.md`. If it's
   missing, check `context/project-overview.md` for the matching scope, or ask. Inline
   description → skip the file lookup.
2. If `context/current-feature.md` already has an active (non-"Complete") feature, confirm
   before overwriting it.
3. Rewrite `context/current-feature.md` with:
   - `# Current Feature: {name}` — H1 with a short feature name.
   - `Full spec: @context/features/{name}.md` line, if a spec file exists.
   - `## Goal` — one paragraph: what success looks like.
   - `## Status` — `Not started.`
   - `## Next Steps` — ordered list, pulled from the spec's plan.
   - `## Acceptance Criteria` — pulled from the spec (or drafted, for inline descriptions).
   - `## Out of Scope` — pulled from the spec, if it defines one.
4. Confirm what was loaded: feature name, spec source, one-line summary. Don't dump the
   whole file back at the user.

## Notes

- Never invent acceptance criteria or scope for a spec'd feature — pull from the actual spec
  file rather than drafting from assumption.
- This only loads/points; it doesn't start implementation.
