# Content store

- `content/discovery.json` — scanner output (37 candidates, local `~` refs only, never deployed).
- `src/data/projects.ts` — the single source of truth for public content (typed with Zod in `src/types.ts`).
  - Separated from UI components (`src/components`, `src/pages`).
  - Every claim carries `evidence[]` with Implemented / Partially Implemented / Planned / Unverified.
  - All entries are `visibility: 'private-draft'` until the owner approves each one.
- `.local-analysis/` — local-only scan logs. Never published (gitignored + validator-checked).
