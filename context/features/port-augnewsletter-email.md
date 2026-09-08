# Port: Aug Newsletter Email (Heroku)

## Goal

Rebuild the Heroku August newsletter email (old repo:
`~/projects/old-emails/augnewsletter-email/`) as a Maizzle template, following the
`add-email` checklist and the modernization policy — same layout, copy, and links,
refreshed code.

## Next Steps

1. Follow the `add-email` skill checklist end to end.
2. Copy assets from `src/assets/img/` — top/bottom borders, Heroku + SF logos, social
   icons (fb, git, instagram, linkdn, rss, twitter), stitcher badge.
3. This repo was never compiled (no `dist/`) — verify against `src/pages/index.html`
   intent instead of a compiled baseline, and note that in the change-log entry.
4. Ignore the repo's task-tracker artifacts (`.imdone/`, `imdone-help.md`) and the
   `ews-heroku-email.herokuapp.com.json` endpoint dump — reference only if they clarify
   intent.

## Acceptance Criteria

- [ ] One Maizzle template renders the full newsletter with all sections from the old
      page.
- [ ] Copy and links verbatim; every `<Img>` has `alt` + `width`; images resolve locally.
- [ ] Clean production build; renders checked at desktop + ~375px.
- [ ] Deviations from the old source (there is no compiled baseline) are listed in the
      change-log entry.

## Out of Scope

- Sending the email or wiring an ESP.
- New content or newsletter items; redesign beyond the modernization policy.
- Reviving the Heroku endpoint the old repo references.
