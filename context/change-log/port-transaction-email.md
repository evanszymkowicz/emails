# Port: Transaction Email (adidas order confirmation)

## What shipped

Built `emails/transaction-email.vue` — the first Maizzle 6 port and the pilot that
establishes the shared pattern for the remaining six emails.

- Ported the adidas "You're Almost Finished!" order-confirmation email from
  `~/projects/old-emails/transaction-email/`.
- Extracted shared components in `components/`: `Layout`, `TopHeader`, `EmailHeader`,
  `EmailFooter`, and `IconOutlineButton`.
- Replaced dead tinyurl image redirects with local assets copied from
  `src/assets/img/` into `public/transaction-email/`.
- Removed the backpack hero image: the old repo's `1.png` was a composite/screenshot
  of the email itself, not a product photo, and no red backpack asset exists locally.
  The hero now shows the t-shirt and shoes only.
- Ported `customerData.json` to `data/transaction-email/customerData.json`; the
  `orderNumber` is pulled into the template as data-as-props.
- Added shared Tailwind theme tokens in `tailwind.css` (adidas brand colors and font
  families) and a custom `Layout` in `components/Layout.vue` that imports them.
- Set `css.base` in `maizzle.config.js` so Tailwind scans the project root and keeps
  the built-in `<Container>` centering behavior (`max-w-150`) working.
- Added a screenshot capture script (`scripts/capture-screenshot.js`) that renders
  the built email and saves desktop + mobile PNGs to `screenshots/<email>/`.

## URLs

- Local preview: `npm run dev` → http://localhost:3000/transaction-email.html
- Production (GitHub Pages): `https://evanszymkowicz.github.io/emails/transaction-email.html`

## Visual deltas from original (modernization policy)

- Rebuilt the custom Foundation flexgrid with Maizzle `<Row>`/`<Column>`.
- The "+" icon-outline buttons are rendered inline above each product image instead
  of absolutely positioned over the image, for better email-client safety.
- Normalized spacing and font stacks; removed obsolete Gmail-iOS font-fix div and
  `bgcolor` attributes.

## Verification

- `npm run build` produces clean inlined CSS.
- Screenshots captured at 700 px and 375 px are in
  `screenshots/transaction-email/`.
