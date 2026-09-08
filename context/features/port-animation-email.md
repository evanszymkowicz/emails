# Port: Animation Email (CAVA grilling)

## Goal

Rebuild the CAVA "John, grill school is in session" email (old repo:
`~/projects/old-emails/animation-email/`) as a Maizzle template, following the
`add-email` checklist and the modernization policy — same layout, copy, and links,
refreshed code.

## Next Steps

1. Follow the `add-email` skill checklist end to end.
2. Copy assets from `src/assets/img/` — including the GIF hero (`cookwithfire.gif`) and
   the food photography (`cava.jpg`, `grilled-chicken.jpg`, `meatballs.jpg`,
   `seasonal.jpg`, `banner-img.gif`, `framegrab.png`) and social icons (`fa-*.png`).
3. The old template points at i.imgur.com URLs that duplicate the local assets — swap
   them for local copies; keep the live cava.com / forthosewhosavor.com links (with
   their long UTM strings) verbatim.
4. Verify GIF animation in rendered checks — this email's identity is motion.

## Acceptance Criteria

- [ ] One Maizzle template renders the full email: hero, big GIF, sizzle copy, three
      protein bowls, two CTA buttons, second copy block, second button.
- [ ] All images resolve locally (no imgur dependencies); GIFs animate in render checks.
- [ ] UTM-bearing links verbatim; every `<Img>` has `alt` + `width`.
- [ ] Clean production build; renders checked at desktop + ~375px; side-by-side against
      the old `dist/index.html` with deltas matching the modernization policy.

## Out of Scope

- Sending the email or wiring an ESP.
- New copy or photography; redesign beyond the modernization policy.
- The old Heroku `Procfile` / deploy tooling.
