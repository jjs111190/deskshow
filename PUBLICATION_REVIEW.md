# DESKSHOW publication review — APPROVAL REQUIRED

> Owner approved all 12 rows on 2026-10-11 (chat). Pushed after approval only.
> Flip a project to `visibility: 'approved'` ONLY after you confirm its row.

| # | Project | Status shown | Screenshots | Links shown | Approve? |
|---|---------|--------------|-------------|-------------|----------|
| 1 | HANDY | 개발 중 (In development) | CONCEPT placeholder (no real shots) | none | [x] |
| 2 | Spotory | 개발 중 | CONCEPT placeholder | none | [x] |
| 3 | VIBLOG | 개발 중 | CONCEPT placeholder | none | [x] |
| 4 | Chain Zero | 개발 중 | CONCEPT placeholder | none | [x] |
| 5 | RECEIPT | 개발 중 | CONCEPT placeholder | none | [x] |
| 6 | FlowWorks | 부분 구현 (Partial) | CONCEPT placeholder | none | [x] |
| 7 | Side A | 개발 중 (출시 QA 중, 미검증 릴리스 명시) | CONCEPT placeholder | none | [x] |
| 8 | RecordFlow | 부분 구현 | CONCEPT placeholder | none | [x] |
| 9 | Cyworld 2026 | 부분 구현 | CONCEPT placeholder | none | [x] |
| 10 | FlowNote | 기획 (Planned, 실행 불가 명시) | CONCEPT placeholder | none | [x] |
| 11 | RodeblockRush | 미확인 (Unverified) | CONCEPT placeholder | none | [x] |
| 12 | BLANKY | 미확인 (Unverified) | CONCEPT placeholder | none | [x] |

## Security scan (2026-10-11, local)

- `npm run validate:public` — PASSED (no secrets, no `/Users/` paths, no private emails, no internal hosts, all private-draft).
- `dist/` grep for keys/paths — clean.
- `.env` at root — absent.

## What publishing means

1. Create (or connect) a public repo named `deskshow` — only after your explicit approval.
2. Push ONLY this workspace. Original project folders are never copied (no source code vendoring).
3. GitHub Actions builds and deploys `dist/` to Pages on `main` push.
4. Expected URL: `https://jjs111190.github.io/deskshow/` (username from `gh auth status`).

## Suggested first publish set

HANDY + Spotory + VIBLOG + Chain Zero (4 featured, strongest evidence). The rest can stay draft until screenshots exist.
