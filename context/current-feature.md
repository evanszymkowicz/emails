# Current Feature: Port T-Mobile Money Email

Full spec: @context/features/port-tmobile-email.md

## Goal

Rebuild the T-Mobile Money "not another bank" email (old repo: `~/projects/old-emails/tmobile-email/`) as a Maizzle template, following the `add-email` checklist and the modernization policy — same layout, copy, and links, refreshed code.

## Status

In Progress.

## Next Steps

1. Follow the `add-email` skill checklist end to end.
2. The old repo's per-section partials (`header`, `heroimage`, `getstarted`, `moremoney`, `privacy`, `footer`) define the component breakdown — port each as a Vue component.
3. `tmobileData.json` becomes props: `offerDetails` (percent, ATMs, link) and `dataPoints` (APY, qualifyingAPY, cashBack, afterAPY, image, link).
4. The data file's `image` field points at i.imgur.com with no local copy in the old repo — if dead at port time, flag it and ask rather than inventing a replacement.
5. Copy the local assets (purple background, logos, phone, bar graph, store badges, FDIC logo) into the per-email static directory; the sectioned SCSS (`_header`, `_heroimage`, `_getstarted`, `_moremoney`, `_privacy`, `_footer`, `_reset`) holds the theme tokens to port.

## Acceptance Criteria

- [ ] One Maizzle template renders the full email with all six sections.
- [ ] APY/percent/ATM/cash-back figures come from props, matching the old data file.
- [ ] UTM/tracking links verbatim; every `<Img>` has `alt` + `width`; dead images handled per the flag-and-ask rule.
- [ ] Clean production build; renders checked at desktop + ~375px; side-by-side against the old `dist/index.html` with deltas matching the modernization policy.

## Out of Scope

- Sending the email or wiring an ESP.
- New copy or rate figures; redesign beyond the modernization policy.
