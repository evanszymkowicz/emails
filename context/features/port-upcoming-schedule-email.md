# Port: Upcoming Schedule Emails (ESPN+)

## Goal

Rebuild the ESPN+ upcoming-schedule emails (old repo:
`~/projects/old-emails/upcoming-schedule-email/`) as Maizzle templates, following the
`add-email` checklist and the modernization policy — same layouts, copy, and links,
refreshed code. This is the largest port: five pages sharing components, done last so the
shared component library is mature.

## Next Steps

1. Follow the `add-email` skill checklist per page, in this order:
   `collegefootball-090719` (has a compiled `dist/` baseline) → `usopen` (also compiled)
   → `disneyplus` → `ufc242` → `index`.
2. The old `buttons` partial is driven by front matter (`button_1_copy`/`button_1_link`,
   `button_2_*`) — becomes a shared buttons component taking props, built on the
   buttons/divider components from the restaurant port.
3. `espnData.json` (subscriber email address) becomes a prop.
4. Copy the team-logo assets (appstate, big12, cc, charlotte, fiu, ku, lesmiles, nd,
   ndsu, osu, westkentucky) and hero/event images (espn-collegefootball.jpg,
   espn-usopen.jpg, disney+.jpg, khabib-poirier.jpg, main-event.jpg, buynow.jpg, ESPN
   logos) into the per-email static directory.
5. The old `_grid.scss` and template SCSS hold theme tokens — port into the shared theme.

## Acceptance Criteria

- [ ] Five Maizzle templates render, sharing one component set (header, hero, event
      blocks, buttons, footer).
- [ ] Per-page front-matter data (subjects, button copy/links) arrives as props.
- [ ] Copy and links verbatim; every `<Img>` has `alt` + `width`; images resolve locally.
- [ ] Clean production build; each page render-checked at desktop + ~375px;
      `collegefootball-090719` and `usopen` compared side-by-side against their old
      `dist/` baselines, deltas matching the modernization policy.

## Out of Scope

- Sending the emails or wiring an ESP.
- New schedule data or events; redesign beyond the modernization policy.
