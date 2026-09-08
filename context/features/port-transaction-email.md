# Port: Transaction Email (adidas order confirmation)

## Goal

Rebuild the adidas "You're Almost Finished!" order-confirmation email (old repo:
`~/projects/old-emails/transaction-email/`) as a Maizzle template, following the
`add-email` checklist and the modernization policy — same layout, copy, and links,
refreshed code. This is the pilot port: it establishes the shared pattern (theme tokens,
header/footer/preheader components, data-as-props) the other six ports reuse.

## Next Steps

1. Follow the `add-email` skill checklist: inventory the old repo → copy assets → port
   theme tokens → build the template → content rules → verify.
2. Extract shared components this email exposes: header, footer, preheader, and the
   icon-outline "+" button pattern.
3. `customerData.json`'s `orderNumber` becomes a prop — no hardcoded markup drift.
4. The old custom flexgrid mixin becomes `<Row>`/`<Column>` usage — do not recreate it.
5. Swap dead tinyurl image redirects for the local assets in `src/assets/img/`.

## Acceptance Criteria

- [ ] One Maizzle template renders the full email: hero, order number, product grid,
      help section, best-of-adidas products, footer.
- [ ] UTM/tracking URLs and link targets verbatim from the old source.
- [ ] Dead image URLs replaced with local assets; every `<Img>` has `alt` + `width`.
- [ ] Clean production build; renders checked at desktop + ~375px; side-by-side against
      the old `dist/index.html` with deltas matching the modernization policy.
- [ ] Shared components extracted are reused, not duplicated inline.

## Out of Scope

- Sending the email or wiring an ESP.
- New copy, new products, redesigned layout.
- The old `index-layout` vs `default` layout split (collapses into the shared layout).
