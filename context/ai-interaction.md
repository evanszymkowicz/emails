# AI Interaction Guidelines

## Communication

- Be concise and direct.
- Explain non-obvious decisions briefly.
- Always ask before large refactors or architectural changes.
- Don't add features or content not requested.
- When a preference isn't documented here or in `@context/coding-standards.md`: ask, never assume.

## Code Changes

- Make minimal changes to accomplish the task.
- Don't refactor unrelated code unless asked.
- Preserve the project state described in `@context/project-overview.md`: don't pull work
  forward from a later spec without asking. The feature in flight is described in
  `@context/current-feature.md`.
- The old repos in `~/projects/old-emails/` are read-only reference — never write to them.

## Credentials

- This repo has no credentials by design. Test-send credentials (SMTP/Nodemailer) live only
  in the gitignored `.env` if test sending is ever requested — never committed, logged, or
  printed.
- **Never send a test email without asking first.** Sending touches real inboxes.

## Verify Before Handing Off

- `npm run build` must complete without errors for the email(s) you touched.
- Spot-check rendered output with the playwright MCP against the dev server: layout
  intact at desktop and ~375px widths, images resolve, preheader present.
- When porting, compare against the old email's `dist/index.html` before calling it done.
- Update this section as tooling lands.

## Git — the user owns commits and merges

- **Do NOT commit, push, or merge** — the user handles all git operations.
- **Never** add AI attribution to commits or PRs — no "Co-Authored-By: <assistant>"
  trailers, no "Generated with <tool>" tags, nothing similar. There are no exceptions ever.
- When suggesting a commit/PR message, use a short descriptive title (conventional-commit
  style — `feat:`, `fix:`, `refactor:`, `chore:` — is welcome).
- Keep changes focused: one logical concern per PR; don't mix formatting-only churn with
  behavior changes.
- Branch naming: `feature/<desc>` or `fix/<desc>`.

## Commands the Agent May Run Without Asking

- Read-only inspection: `ls`, `cat`, `grep`, `find`, `jq`, and read-only git (`status`,
  `diff`, `log`, `show`, `ls-files`, `check-ignore`).
- Build/render runs: `npm run dev`, `npm run build`, `npm run screenshot`, `node
  scripts/*` (layout/alignment/button/screenshot checks) — plus the playwright MCP
  browser tools for live inspection.

Still ask first: dependency installs (`npm install`, `npx maizzle new`), destructive
operations (`rm`, `git reset/restore/clean`), anything touching credentials, `.env`, or
sending email.

## When Stuck

- If something isn't working after 2–3 attempts, stop and explain the issue rather than
  trying random fixes.
- Ask for clarification when requirements are unclear — especially on terse
  design feedback ("this is all wrong") with nothing specified. Re-examine the output
  and ask what looks broken rather than guessing from silence.
