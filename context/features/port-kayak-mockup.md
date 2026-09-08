# Port: Kayak Mockup Email

## Goal

Rebuild the Kayak travel-deals mockup email (old repo:
`~/projects/old-emails/kayak-mockup/`) as a Maizzle template, following the `add-email`
checklist and the modernization policy — same layout, copy, and links, refreshed code.

## Next Steps

1. Follow the `add-email` skill checklist end to end.
2. `kayakEmail.json` becomes props: title, `dealOfTheDay`, and the three-item `offers`
   array — render offers with a loop, one card component.
3. The offers' imgur-hosted images have local counterparts in
   `src/assets/img/kayak_files/` (cancun.png, ireland.png, london.png, china.jpg) — map
   and swap; do the same for any other dead remote URLs.
4. Copy the remaining assets (KayakHeader.png, KayakFooter.png, Offers.png, and the rest
   of `kayak_files/`) into the per-email static directory.
5. The old repo had a dedicated `kayak.html` layout — evaluate whether it differs from
   the shared layout; if not, collapse it and note the delta.

## Acceptance Criteria

- [ ] One Maizzle template renders the full email: header, deal-of-the-day, offers grid,
      footer.
- [ ] Offer cards render from the data array via one reusable card component.
- [ ] Copy and links verbatim; every `<Img>` has `alt` + `width`; images resolve locally.
- [ ] Clean production build; renders checked at desktop + ~375px; side-by-side against
      the old `dist/index.html` with deltas matching the modernization policy.

## Out of Scope

- Sending the email or wiring an ESP.
- New deals data; redesign beyond the modernization policy.
