# Monorepo Scaffold

## Goal

Stand up the Maizzle 6 project every email port builds on: one npm project using
`@maizzle/framework` (v6), a templates directory, a shared components directory, a static
assets directory with per-email subdirectories, a shared Tailwind theme config, and
dev/build scripts — verified by building a throwaway template end-to-end.

## Next Steps

1. Scaffold from the official starter (`npx maizzle new maizzle/maizzle#master`) into this
   repo without disturbing the workflow files (`AGENTS.md`, `context/`, `skills/`,
   `agents/`, `.opencode/`).
2. Adopt the starter's directory conventions; confirm or correct the planned layout in
   `context/project-overview.md` and the commands section in `AGENTS.md`.
3. Wire package scripts: `npm run dev` (`maizzle serve`) and `npm run build`
   (`maizzle build`).
4. Create the shared Tailwind theme config with placeholder brand tokens (filled
   per-email during ports).
5. Create a throwaway template exercising `<Layout>`, `<Preheader>`, `<Container>`,
   `<Section>`, `<Row>`, `<Column>`, `<Button>`, `<Img>`, `<Spacer>`; build it, inspect
   the output (CSS inlined, no framework cruft), then delete it.
6. Confirm `.gitignore` covers `node_modules/`, build output, `.env`, `.maizzle/`.

## Acceptance Criteria

- [ ] `npm run dev` serves a template with HMR.
- [ ] `npm run build` produces clean production HTML (inlined CSS, minified).
- [ ] Directory conventions and commands are documented in
      `context/project-overview.md` and `AGENTS.md`.
- [ ] Workflow scaffolding files untouched.

## Out of Scope

- Porting any real email (separate specs).
- Gallery index and GitHub Pages deployment (`github-pages-gallery-spec.md`).
- Production `url.base` config (lands with the gallery spec).
