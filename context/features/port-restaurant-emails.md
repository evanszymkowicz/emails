# Port: Restaurant Email (Glen's Garden Market)

## Goal

Rebuild the Glen's Garden Market email (old repo:
`~/projects/old-emails/restaurant-emails/`) as a Maizzle template, following the
`add-email` checklist and the modernization policy — same layout, copy, and links,
refreshed code.

## Next Steps

1. Follow the `add-email` skill checklist end to end.
2. Reuse the shared header/footer components established by the transaction-email pilot;
   extend rather than duplicate.
3. The old `buttons` and `divider` partials become shared Vue components (this email is
   the natural home for them — the ESPN email's buttons partial lands later).
4. Port the `bold` and `mainButton` helper patterns as components or direct markup.
5. Copy assets (glens-specials.png, glens-spread.jpg, glensgardenmarket.jpg,
   thursdays.png, framegrab.png) into the per-email static directory.

## Acceptance Criteria

- [ ] One Maizzle template renders the full email with all sections from the old page.
- [ ] Buttons/divider patterns exist as shared components, reused here and ready for the
      ESPN port.
- [ ] Copy and links verbatim; every `<Img>` has `alt` + `width`.
- [ ] Clean production build; renders checked at desktop + ~375px; side-by-side against
      the old `dist/index.html` with deltas matching the modernization policy.

## Out of Scope

- Sending the email or wiring an ESP.
- New copy or a redesign beyond the modernization policy.
- The old `dist/index.zip` packaging step (no equivalent needed).
