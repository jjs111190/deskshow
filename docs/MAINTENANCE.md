# Maintenance — adding a new project

1. Build something new anywhere on your Mac (outside this folder is fine).
2. `npm run scan` — new folder appears in `content/discovery.json` (read-only, nothing touched).
3. `npm run analyze` — confirms whether it's already curated.
4. Add a draft entry in `src/data/projects.ts` with `visibility: 'private-draft'`, honest `status`, and `evidence[]` (file refs as `Folder/relative/path`, never absolute `/Users/...`).
5. `npm run validate:public && npm test && npm run build && npm run preview`
6. Open `PUBLICATION_REVIEW.md`, tick the row, then flip that one entry to `'approved'`.
7. `git add -A && git commit && git push origin main` — Pages redeploys automatically.

Never: edit originals from here, paste secrets, use fake screenshots as real, or approve without reading the rendered detail page first.
