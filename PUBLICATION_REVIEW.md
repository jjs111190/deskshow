# DESKSHOW publication review — APPROVAL REQUIRED

> Owner approved all 12 rows on 2026-10-11 (chat). Pushed after approval only.
> Flip a project to `visibility: 'approved'` ONLY after you confirm its row.

| # | Project | Status shown | Screenshots | Links shown | Approve? |
|---|---------|--------------|-------------|-------------|----------|
| 1 | HANDY | 개발 중 (In development) | 실화면 5 (온보딩 2·메인탭 2·런치아트) | none | [x] |
| 2 | Spotory | 개발 중 | 실화면 9 (지도+홍보 8) | none | [x] |
| 3 | VIBLOG | 개발 중 | 실화면 11 (회원가입·인트로·로그인·프로필 설정·포토부스·편집기 4·아이콘 2) | none | [x] |
| 4 | Chain Zero | 개발 중 | 실화면 7 (홈·플레이보드·모드선택·튜토리얼·도감·업적·등급) + 스플래시 | none | [x] |
| 5 | RECEIPT | 개발 중 | 실화면 1 (온보딩) | none | [x] |
| 6 | FlowWorks | 부분 구현 (Partial) | 실화면 4 (GameZone 게임 2048·Flappy·Hextris·Pac-Man) | none | [x] |
| 7 | Side A | 개발 중 (출시 QA 중, 미검증 릴리스 명시) | 실화면 10 (홈·디스커버·제작·프로필·레코드·Spins·로그인 2·한국어·브랜드) | none | [x] |
| 8 | RecordFlow | 부분 구현 (AI 학습) | 브랜드 에셋 3 (실행 캡처 아님 명시) | none | [x] |
| 9 | Cyworld 2026 | 부분 구현 | 미니룸 에셋 6 (실행 캡처 아님 명시) | none | [x] |
| 10 | FlowNote | 기획 (Planned, 빌드 실패 확인) | 개발 중 UI 6 (문서 캡처: 시작·라이브러리·워크스페이스·스페이스) | none | [x] |
| 11 | RodeblockRush | 개발 중 (루프 완성, 테스트 통과) | 실화면 13 (게임 플레이 11·스플래시·아이콘) | none | [x] |
| 12 | BLANKY | 개발 중 (20종 파티게임) | 실화면 3 (홈 라이트·다크, 첫 실행 닉네임) + 스플래시 2 | none | [x] |

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

## Capture log (2026-10-18 round 2 — deeper real screens)

Goal: replace splash/icon-only galleries with real in-app screens like a store listing.

| Project | Images added | How obtained |
|---|---|---|
| RodeblockRush | 11 gameplay screens (title, lane change, traffic/near-miss, boost, coins, perfect dodge, result, garage, cards, missions, pause) | Ran the game's own `tests/SmokeTest.tscn` (Godot 4.7) in a scratch copy; it saves 720×1280 portrait stage renders to `user://smoke/`. |
| VIBLOG | 9 real screens (sign-up, onboarding, sign-in, profile setup, photo booth, editor filter/adjust/face-sticker/video) | Ran the project's own `integration_test/looks_faces_flow_test.dart` on the iOS simulator with `TEST_SHOTS=true`; the tests write screenshots themselves. Server-free test, so it passed. |
| Side A | 6 real screens (home, discover, create, profile, record detail, spins) | Built an offline Expo web export with empty `EXPO_PUBLIC_*` (the repo's documented local-demo mode) and drove it with Playwright through the guest "Browse the records" path. Demo-studio banner (fictional content) is visible in-frame. |
| FlowNote | 4 more iPad UI captures (launch, workspace docs, spaces, empty library) | In-repo `docs/` captures only; the app still does not build (Planned). |
| FlowWorks | +1 game (Flappy) | Static-served `public/games/flappy` + Playwright. |

Removed from publication: a VIBLOG email-verification screen showing a local dev server URL and a synthetic test address (not store-quality), and a VIBLOG camera screen that only showed the simulator's "no camera" empty state.

Still on asset-only galleries (no real run capture) with reasons:
- Cyworld 2026 — `next dev` wedges at startup; `next build` hits a Turbopack IPC crash plus a real FormData type error in `app/api/upload/route.ts`. Mini-room art only.
- RecordFlow — brand assets only; no runnable target located in this workspace.
- Chain Zero — native home screen only; no UI-test target and no Simulator GUI available for scripted taps, and web capture needs an added dependency. *(Resolved in round 4: captured from a scratch copy's own web build.)*
- FlowNote — not buildable (Planned).

Notes on environment: the Supabase local stack for VIBLOG was already running, so integration tests could execute. The FlowWorks free JSON API (`tsx backend/src/server.ts`) still exits without listening in this environment, so its main app remains uncaptured.

Total published real images: 81 (75 after round 3, +6 Chain Zero screens in round 4).

## UI change (2026-10-18) — store-style detail header

Each project detail page now opens with a store-listing style header: app icon, name, one-line description, status/platform pills, up to three key-feature badges (taken from the project's own verified feature titles), a demo CTA where one exists, and a swipeable carousel of up to five representative real screens with dots and prev/next arrows. Media in the carousel opens the existing lightbox. The full gallery of every published image remains below under "모든 화면 / All screens", with the existing click-to-enlarge behaviour.

Verified: carousel dot/arrow sync, keyboard left/right on the track, lightbox open, and a responsive sweep of 10 routes at 320/390/768/1024/1440px with 0 horizontal overflow and 0 console errors, in light and dark themes.

## Round 3 (2026-10-18) — playable web demo + carousel autoplay

### RodeblockRush is now playable in the browser
`#/demo/rodeblockrush` runs the real game, embedded in its detail page: main menu → PLAY → a real run
(distance and score climbing, "COIN CHAIN x6", traffic, JUMP/BOOST), lane changes by tapping the left/right half of the
screen or with ←/→ · A/D, and the pause overlay. Verified with Playwright, 0 console errors.

How it was produced, without touching the original:
- Web engine shell: Godot 4.7.1 release template, exported with `variant/thread_support=false` (so it needs no
  COOP/COEP headers, which static Pages hosting cannot send). Exported from a scratch copy.
- Game data: the project's own shipped pack, `build/ios/RoadblockRush.pck` — the same compiled build its iOS export
  produced. The only edit was rewriting `index.pck`'s size in the generated `index.html` so the loader's size check passes.
- The project already uses `renderer/rendering_method="gl_compatibility"` and `import_etc2_astc=true`, which is why a
  pack built for iOS runs unchanged under WebGL2.

### Finding — the RodeblockRush source tree on disk is incomplete
`scripts/` is missing 8 `.gd` sources; only their `.gd.uid` stubs remain:
`core/BlockyMesh.gd`, `core/ObjectPool.gd`, `core/VehicleBuilder.gd`, `ui/HUD.gd`, `ui/CardsScreen.gd`,
`obstacles/ObstacleManager.gd`, `traffic/TrafficManager.gd`, `environment/RoadsideProps.gd`,
`progression/MissionLibrary.gd`. With them gone, `RoadManager.gd` fails to parse ("Could not find type ObjectPool") and
the project cannot run or export from source at all. The compiled code is still inside the shipped pack, which is why the
pack runs. The original folder was **not** modified — nothing was written into it. Owner action needed: restore those files.

### Carousel autoplay
Store-style hero carousels auto-advance every 4.5 s, pause while the visitor hovers or focuses them, stop when the
carousel is scrolled off-screen or the tab is hidden, are disabled entirely under `prefers-reduced-motion: reduce`, and
stop for good once the visitor takes over with a dot, arrow or the keyboard. All five behaviours verified with Playwright.

### BLANKY — real screens obtained
BLANKY now publishes 3 real screens (home light, home dark, first-run nickname) plus its 2 branding assets.
The build previously failed for three separate reasons, all fixed **in a scratch copy only**:
1. `win32 5.5.0` (transitive) uses a Dart API that no longer exists → pinned `win32: ^5.13.0` via `dependency_overrides`.
2. `dialogTheme: DialogTheme(...)` → `DialogThemeData(...)` (SDK rename).
3. `CupertinoPageTransitionsBuilder` is no longer re-exported by `material.dart` → added the `cupertino.dart` import.
None of these touch the app's UI or behaviour — they are SDK-drift fixes, and page transitions do not affect a static screen.

Capture notes: Impeller is disabled on the simulator (`FLTEnableImpeller=false`) because on this simulator runtime it draws every
glyph as a placeholder box; with it off, text renders correctly. To reach the home screen without a GUI to tap, the stored
nickname was seeded into the app's container preferences while the simulator was shut down, and the app's own "ads removed"
preference was set so the SDK's one-time consent sheet does not cover the screen. Owner action needed: reinstall/upgrade the
Flutter toolchain or fix these three compile errors, since the project does not build with the installed Flutter 3.47.5.

### Responsive fix
The Side A demo page overflowed horizontally at 320px (a fixed-width frame inside a centred grid); it now shrinks with
the viewport. Demo sweep at 320/390/768/1440px over all four demo routes: 0 overflow, 0 console errors.

## Round 4 (2026-10-19) — Chain Zero play screens

Chain Zero publishes 6 new real screens, captured by running the app itself:

| Image | Screen |
|---|---|
| `chain-zero-board.png` | CHAIN ORIGIN STAGE 01 play board — 점수 0, 이동 9, 클리어 0/3, OVERDRIVE gauge, "합을 10으로" goal + filter chips, 6×6 number grid with a live selected tile |
| `chain-zero-mode-select.png` | 모드 선택 — CHAIN and SUIKA open, DEFENSE/SOKOBAN/SNAKE shown locked ("레벨 6에서 해제"), category filters 전체/실시간/퍼즐/점수·기억 |
| `chain-zero-tutorial.png` | Per-mode spotlight tutorial over the board — "MISSION 1/4 목표와 규칙부터", 건너뛰기/다음 |
| `chain-zero-codex.png` | 도감 — gimmicks (OVERDRIVE, JACKPOT, GIFT, GOLDEN, STREAK) and special tiles (골든, 잭팟, 선물, 폭탄, 와일드, 복사) |
| `chain-zero-achievements.png` | 업적 — 0/16 달성 with all 16 achievement cards and progress bars |
| `chain-zero-grade.png` | 등급 — 1/10 달성, CURRENT GRADE BOOT, 기록 stats, and the 10-grade roadmap (BOOT → WIRE 800 → … → RESONANCE 45,000) |

How they were obtained, without touching the original:
- `npx expo export -p web` in a scratch copy (the project's own App/Navigator/screens/engines), plus the three web
  dependencies Expo requires. The result is served statically and driven by a scripted Playwright session
  (home → 플레이 → CHAIN → tutorial → 등급 보기, then 도감 / 업적 / MY GRADE) that clicks the app's real controls.
- Two edits exist **in the scratch copy only**: a web platform twin for `src/services/AdEngine` (AdMob ships no web
  target and Metro refuses to bundle its React Native internals; the twin reproduces the file's own
  "native module missing" no-op path, so behaviour on web matches a JS-only reload), and the exported `web/` output.
  The original project folder is unchanged and still has no web target.
- Note the earlier round's blocker is resolved in a copy, not in the original: the original still needs
  `react-native-web`/`react-dom`/`@expo/metro-runtime` added (or a UI-test target) before it can produce web captures itself.

Honesty notes: these captures come from the app's own web build rather than a device screenshot, so they show the real
screens, state, and copy but not the iOS status bar — the existing native home capture (`chain-zero-1.png`) is kept
first in the gallery as device evidence. The 설정 (settings) screen was not captured (its icon button did not open under
scripted input); no substitute image was invented for it. Localisation is Korean, matching the app's shipped default.

