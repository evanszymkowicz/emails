---
name: start
description: Use when beginning implementation of the feature already loaded into context/current-feature.md — sets it In Progress and works through its Next Steps one by one.
---

# Start Implementation

Begins work on whatever `context/current-feature.md` currently points at. Run `load` first
if nothing is loaded.

## Steps

1. Read `context/current-feature.md`. If there's no active feature (H1 has no name, or
   `## Goal`/`## Next Steps` are empty), stop and say: "Run the `load` skill first."
2. Set `## Status` to `In Progress` if it isn't already.
3. Confirm a branch exists for this work (`feature/<desc>` or `fix/<desc>`, per
   `@context/ai-interaction.md`) — the user creates branches, not you. If none exists,
   flag it and ask before writing code.
4. List the `## Next Steps` back to the user, then implement them in order.
5. Email ports: follow the `add-email` skill's checklist for each email in scope.
6. Stay inside `## Out of Scope` boundaries and the project state in
   `@context/project-overview.md` — don't pull work forward without asking.
7. Do **not** test as part of implementation — no builds, dev-server checks, or render
   comparisons. All of that belongs to the `test` skill.
8. If unsure about a Maizzle component's props or a transformer's behavior, verify against
   the Maizzle skill/docs before writing code — don't guess.

## Notes

- Small, reviewable increments over one giant diff.
- If a Next Step turns out to be wrong or missing once you're in the code, say so and
  propose an update to `context/current-feature.md` rather than silently deviating.
