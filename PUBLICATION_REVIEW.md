# DESKSHOW publication review — APPROVAL REQUIRED

> Owner approved all 12 rows on 2026-10-11 (chat). Pushed after approval only.
> Flip a project to `visibility: 'approved'` ONLY after you confirm its row.

| # | Project | Status shown | Screenshots | Links shown | Approve? |
|---|---------|--------------|-------------|-------------|----------|
| 1 | HANDY | 개발 중 (In development) | 실화면 2 (온보딩·런치아트) | none | [x] |
| 2 | Spotory | 개발 중 | 실화면 9 (지도+홍보 8) | none | [x] |
| 3 | VIBLOG | 개발 중 | 실화면 1 (로그인) | none | [x] |
| 4 | Chain Zero | 개발 중 | 실화면 2 (홈·스플래시) | none | [x] |
| 5 | RECEIPT | 개발 중 | 실화면 1 (온보딩) | none | [x] |
| 6 | FlowWorks | 부분 구현 (Partial) | 실화면 3 (GameZone 게임) | none | [x] |
| 7 | Side A | 개발 중 (출시 QA 중, 미검증 릴리스 명시) | 실화면 4 (로그인·회원가입·한국어·브랜드) | none | [x] |
| 8 | RecordFlow | 부분 구현 (AI 학습) | 브랜드 에셋 2 (실행 캡처 아님 명시) | none | [x] |
| 9 | Cyworld 2026 | 부분 구현 | 미니룸 에셋 6 (실행 캡처 아님 명시) | none | [x] |
| 10 | FlowNote | 기획 (Planned, 빌드 실패 확인) | 개발 중 UI 2 (문서 캡처) | none | [x] |
| 11 | RodeblockRush | 개발 중 (루프 완성, 테스트 통과) | 스플래시·아이콘 에셋 2 (실행 캡처 아님 명시) | none | [x] |
| 12 | BLANKY | 개발 중 (20종 파티게임) | 스플래시 2종 (실행 캡처 아님 명시) | none | [x] |

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

## Capture log (2026-10-11, owner-approved)

| Project | Image on site | How obtained |
|---|---|---|
| HANDY | `handy-1.png` — real onboarding screen | xcodebuild Debug + simctl install/launch/screenshot (iPhone 17 Pro) |
| Chain Zero | `chain-zero-1.png` — real home screen (level, rank, daily, missions) | `pod install` recovery + xcodebuild Release + simctl install/launch/screenshot |
| Spotory | `spotory-map.png` — real map screen | in-repo asset `assets/images/real_app_map_screenshot.png` |
| Side A | `side-a-1.png` — real sign-in screen | `expo start --web` + Playwright capture |
| RodeblockRush | `rodeblockrush-splash.png` — splash art (asset, not a run capture) | in-repo `assets/splash/splash.png` |
| RecordFlow | `recordflow-art.png` — brand art (asset, not a run capture) | in-repo `assets/Recody 1.png` |
| VIBLOG | `viblog-1.png` — real sign-in screen (local-mode notice) | `flutter build ios --simulator` + simctl install/launch/screenshot |
| RECEIPT | `receipt-1.png` — real onboarding screen | xcodebuild Debug + simctl install/launch/screenshot (healthy device; earlier failures were a wedged simulator, not the app) |
| BLANKY | `blanky-splash.png` — splash logo (asset, not a run capture) | in-repo `assets/branding/splash_logo.png` |

Not captured (CONCEPT shown, reasons recorded):

- RECEIPT — captured (`receipt-1.png`, real onboarding). Earlier failures were a wedged simulator device, not the app; healthy device worked first try.
| FlowWorks | `flowworks-2048/hextris/pacman.png` — GameZone 내장 게임 실행 3종 | 정적 서빙 + Playwright 캡처 (본앱은 API 없이 blank라 제외, 사유 기록) |
| FlowNote | `flownote-complete-ui/mainappview-success.png` — 개발 중 UI 2종 | 프로젝트 docs 캡처 (빌드는 컴파일 실패로 Planned 유지) |
- BLANKY — run capture blocked by third-party conflict: `google_mobile_ads` (CocoaPods) vs `webview_flutter_wkwebview` (SPM); needs owner-side Podfile fix. Disclosed: flutter tool auto-migrated BLANKY's Podfile/AppDelegate/.gitignore/xcscheme during attempts (standard forward-compatible upgrades).
- Cyworld 2026 — blocked three ways: `next dev` wedges at startup (0% CPU, no output, no listen, Node 22 and 25); `next build` hits a Turbopack IPC crash plus a genuine type error in the original (`app/api/upload/route.ts` FormData — owner fix needed); stale `out/` is 0 bytes.
- VIBLOG — `flutter build ios --simulator` in progress (web platform not configured; expo-style web capture N/A).
- Chain Zero / RecordFlow — no `react-native-web` dep; web capture would require adding deps to originals (declined).
- FlowNote — not buildable per its README (Planned).
