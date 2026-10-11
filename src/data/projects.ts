import type { Project } from '../types';

/**
 * Public, approved-safe project data.
 * - No absolute local paths, no secrets, no personal emails.
 * - Every feature claim has an entry in `evidence` with a status.
 * - repositoryUrl / demoUrl are null unless a public URL was verified.
 * - screenshots: real captures only (public/screenshots/). Empty = CONCEPT placeholder UI.
 * - Owner approved all 12 rows on 2026-10-11 (see PUBLICATION_REVIEW.md).
 */
export const projects: Project[] = [
  {
    id: 'handy',
    slug: 'handy',
    name: 'HANDY',
    category: 'Mobile App',
    platforms: ['iOS', 'watchOS'],
    technologies: ['Swift', 'SwiftUI', 'VisionKit', 'MultipeerConnectivity', 'WidgetKit', 'App Intents', 'xcodegen'],
    status: 'in-development',
    visibility: 'approved',
    featured: true,
    icon: 'icons/handy.png',
    screenshots: [
      {
        src: 'screenshots/handy-1.png',
        altKo: 'HANDY 온보딩 첫 화면 — 종이 명함을 그대로, iPhone 안에',
        altEn: 'HANDY onboarding — paper cards, kept as designed, in your iPhone',
        captionKo: '실제 온보딩 화면 (시뮬레이터 실행 캡처)',
        captionEn: 'Real onboarding screen (simulator capture)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '종이 명함을, 원래 디자인 그대로.',
      shortDescription:
        '종이 명함의 앞뒤를 그대로 보관하고, 건넬 정보만 골라 전달하는 iPhone·Watch 명함 앱입니다.',
      overview:
        'HANDY는 명함 스캔부터 보관·공유까지 한 흐름으로 연결합니다. 문서 스캐너 기반 촬영과 원근 수동 보정, 일괄 스캔 요약을 갖추고, 건네기에서는 QR·근처 공유·연락처 만들기를 고를 수 있습니다. 만난 장소 지도, 3D 빌딩, 위젯과 워치 앱까지 포함된 네이티브 앱으로, 외부 패키지나 필수 서버 없이 동작합니다.',
      howItWorks: [
        '스캐너로 명함을 촬영하거나(원근 보정·일괄 요약 지원) 사진을 가져와 보관함에 저장합니다.',
        '건네기 탭에서 공개할 항목만 골라 QR·근처 공유·내 카드 만들기로 전달합니다.',
        '받은 명함은 보관함·지도·위젯·워치에서 꺼내 보고, 리마인더와 외형·PIN 설정으로 다듬습니다.',
      ],
      developmentNotes:
        'Features 아래 Scanner(촬영·원근·일괄), Sharing(공유 옵션·가져오기 검토), NameDrop·NFC·MyCards·Library·Map(만남 지도·3D 빌딩)·CardHandoff·CardViewer·CardDetail·Reminders·Onboarding·Tutorial·Settings(외형·PIN·개인정보·권한)·Automation·Handoff 모듈과 HANDYWatch·HANDYWidgets·HANDYTests·HANDYUITests가 소스에서 확인됩니다. Info.plist는 project.yml에서 생성되는 xcodegen 구조입니다.',
      futurePlans:
        '배포용 Signing(Team 지정)과 실기기 카메라·근거리 공유 검증이 README의 TODO로 남아 있습니다.',
    },
    en: {
      tagline: 'Paper business cards, kept as designed.',
      shortDescription:
        'An iPhone and Watch card app that archives both sides of each card and shares only what you pick.',
      overview:
        'HANDY connects card scanning, archiving, and sharing in one flow. It offers document-scanner capture with manual perspective fix and batch summaries, plus QR, nearby sharing, or contact creation for hand-off. A native app with meeting maps, 3D buildings, widgets, and a Watch app — no external packages or required servers.',
      howItWorks: [
        'Scan cards (perspective fix, batch summaries) or import photos into the library.',
        'Pick only the fields to share via QR, nearby sharing, or contact creation.',
        'Recall cards from the library, map, widgets, or Watch, tuned with reminders and appearance/PIN settings.',
      ],
      developmentNotes:
        'Verified in source: Scanner, Sharing, NameDrop, NFC, MyCards, Library, Map (meeting map, 3D buildings), CardHandoff, CardViewer, CardDetail, Reminders, Onboarding, Tutorial, Settings (appearance, PIN, privacy, permissions), Automation, Handoff, plus HANDYWatch, HANDYWidgets, HANDYTests, HANDYUITests. Info.plist is generated from project.yml (xcodegen).',
      futurePlans:
        'Distribution signing (Team) and on-device camera and nearby-sharing verification remain as README TODOs.',
    },
    features: [
      {
        titleKo: '문서 스캐너와 원근 보정',
        titleEn: 'Document scanner with perspective fix',
        bodyKo: 'DocumentCamera 촬영·수동 원근 조정·일괄 스캔 요약으로 휘어진 명함도 또렷하게 보관합니다.',
        bodyEn: 'Document-camera capture, manual perspective adjustment, and batch summaries keep warped cards crisp.',
      },
      {
        titleKo: '고를 수 있는 공유',
        titleEn: 'Selective sharing',
        bodyKo: '공유 옵션에서 건넬 항목만 고르고, 가져오기 검토로 받은 카드를 다듬습니다. NameDrop은 iOS 연락처 흐름에 얹고, QR에는 작은 앞면 미리보기를 담을 수 있습니다.',
        bodyEn: 'Share only selected fields, review imports, bridge to iOS NameDrop contact flow, and embed a small front preview in QR.',
      },
      {
        titleKo: '만남 지도와 3D',
        titleEn: 'Meeting maps and 3D',
        bodyKo: '카드를 만난 장소를 지도에서 되짚고 3D 빌딩으로 맥락을 확인합니다.',
        bodyEn: 'Revisit where each card was exchanged on a meeting map with 3D buildings.',
      },
      {
        titleKo: '위젯·워치·리마인더',
        titleEn: 'Widgets, Watch, reminders',
        bodyKo: '자주 쓰는 내 카드를 위젯·워치에서 꺼내고, 리마인더와 PIN·외형 설정으로 일상을 맞춥니다.',
        bodyEn: 'Reach favorite cards from widgets and Watch, with reminders plus PIN and appearance settings.',
      },
    ],
    evidence: [
      {
        feature: 'Scanner flow',
        evidence: 'Features/Scanner: CardScannerFlow, DocumentCameraView, ManualPerspectiveAdjustmentView, BatchScanSummaryView',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Sharing + NameDrop + NFC',
        evidence: 'Features/Sharing (ShareOptionsView, ImportCardReviewView), NameDropView, NFCBadgeView + README sharing policy',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Library, map, cards surface',
        evidence: 'LibraryView, MeetingMapView, Card3DBuildingView, MyCardsView, CardViewerView + HANDYWatch, HANDYWidgets',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Simulator run capture',
        evidence: 'xcodebuild Debug (CODE_SIGNING_ALLOWED=NO) + simctl install/launch on iPhone 17 Pro + screenshots/handy-1.png',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'On-device release build',
        evidence: 'README TODO: Signing & Capabilities Team required',
        status: 'Partially Implemented',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'spotory',
    slug: 'spotory',
    name: 'Spotory',
    category: 'Mobile App',
    platforms: ['iOS', 'Android'],
    technologies: ['Expo SDK 57', 'React Native', 'TypeScript', 'Expo Router', 'expo-sqlite', 'MapLibre', 'Firebase', 'AdMob'],
    status: 'in-development',
    visibility: 'approved',
    featured: true,
    icon: 'icons/spotory.png',
    screenshots: [
      {
        src: 'screenshots/spotory-map.png',
        altKo: 'Spotory 지도 화면 — 전국 미션 클러스터와 하단 탭',
        altEn: 'Spotory map screen — nationwide mission clusters and bottom tabs',
        captionKo: '실제 지도 화면 (지도 타일에 CARTO 키 필요 표시가 보이는 개발 중 상태)',
        captionEn: 'Real map screen (CARTO key-required tiles visible — work in progress)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '지도 위의 한 점을, 한 장의 이야기로.',
      shortDescription:
        '지도 위 장소를 직접 방문해 사진과 기록으로 남기는 iOS·Android 탐험 기록 앱입니다.',
      overview:
        'Spotory는 MapLibre 기반 지도 위에 미션·핀·완료 사진을 쌓는 탐험 기록 앱입니다. 서울 실제 장소 32곳·전국 대표 31곳과 읍면동별 미션 구조, 30가지 동네 촬영 유형을 갖추고, 사진과 기록은 기기에 우선 저장되어 계정 없이 핵심 기능을 씁니다. 아래 실제 지도 화면처럼 클러스터·하단 탭(지도·탐험·영토·앨범·프로필)이 동작하며, 선택적 Firebase 로그인 시 공개 미션과 온라인 영토가 열립니다.',
      howItWorks: [
        '지도에서 미션을 고르고(검색·필터·주변 5km·거리/난이도순) 직접 방문합니다.',
        '카메라 가이드(3분할·수평계·프레임)로 찍고 GPS·체크리스트로 인증합니다.',
        '앨범·월별 통계·연속 탐험·배지로 되돌아보고, JSON 백업으로 옮깁니다.',
      ],
      developmentNotes:
        'Expo SDK 57 + React Native 0.86 + TypeScript 6, Expo Router, Zustand, expo-sqlite 구조와 map·missions·verification·camera·album·territory·community·custom-missions·profile·auth 기능 분리가 확인됩니다. MapLibre 네이티브 모듈 때문에 Expo Go가 아닌 Development Build가 필요합니다.',
      futurePlans:
        '지도 타일 키 설정(CARTO 표시 해소)과 공개 미션 운영 정책 확정이 남은 것으로 보입니다.',
    },
    en: {
      tagline: 'Visit a spot. Keep its story.',
      shortDescription:
        'An iOS and Android field-log app for visiting map spots and keeping photo stories.',
      overview:
        'Spotory layers missions, pins, and finished photos on a MapLibre map — 32 Seoul spots, 31 national spots, town-level missions, and 30 neighborhood photo styles. Photos and logs stay on-device first with no account needed. The real map screen below shows working clusters and tabs (Map, Explore, Territory, Album, Profile); optional Firebase sign-in unlocks public missions and online territory.',
      howItWorks: [
        'Pick a mission on the map (search, filters, nearby 5km, distance/difficulty sort) and visit in person.',
        'Shoot with camera guides (thirds grid, level, frames) and verify via GPS plus checklist.',
        'Revisit via albums, monthly stats, streaks, badges — and move data with JSON backup.',
      ],
      developmentNotes:
        'Verified: Expo SDK 57, React Native 0.86, TypeScript 6, Expo Router, Zustand, expo-sqlite, with map, missions, verification, camera, album, territory, community, custom-missions, profile, auth splits. Native modules require a Development Build, not Expo Go.',
      futurePlans:
        'Map tile key setup (resolving the CARTO notice) and public-mission moderation policy look like remaining work.',
    },
    features: [
      {
        titleKo: '현장 인증 탐험',
        titleEn: 'On-site verified exploration',
        bodyKo: '거리·GPS 오차 반영 활성화, 도보 내비·음성 안내, 현장 수동 체크리스트로 다녀온 곳만 인증합니다.',
        bodyEn: 'Distance- and GPS-tolerance activation, walking guidance with voice, and on-site checklists verify only visited spots.',
      },
      {
        titleKo: '카메라 가이드',
        titleEn: 'Camera guides',
        bodyKo: '3분할 그리드·구조물 프레임·수평계·플래시·줌·전후면 전환과 로컬 해상도 검사를 갖춥니다.',
        bodyEn: 'Thirds grid, structure frames, level, flash, zoom, front/back switch, plus local resolution checks.',
      },
      {
        titleKo: '오프라인 우선 기록',
        titleEn: 'Offline-first logs',
        bodyKo: '원본·썸네일 분리 저장, 중복 방지, 사진 앱 내보내기·ZIP 공유, 로컬 프로필·통계·배지가 기기 안에서 돕니다.',
        bodyEn: 'Split original/thumbnail storage, dedupe, gallery export, ZIP sharing, local profile, stats, and badges on-device.',
      },
      {
        titleKo: '선택적 온라인',
        titleEn: 'Optional online',
        bodyKo: 'Firebase 로그인 시 공개/비공개 미션, 온라인 영토, 신고·차단, 앱 내 계정 삭제를 고를 수 있습니다.',
        bodyEn: 'Firebase sign-in optionally unlocks public/private missions, online territory, reports, blocks, and in-app deletion.',
      },
    ],
    evidence: [
      {
        feature: 'Real map screen',
        evidence: 'assets/images/real_app_map_screenshot.png (published as screenshots/spotory-map.png)',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Map + location stack',
        evidence: 'package.json: MapLibre, expo-location, expo-camera + src/features/map',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Local persistence',
        evidence: 'src/database + expo-sqlite dependency',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Mission catalog scale',
        evidence: 'README: 32 Seoul + 31 national + town-level missions (file count not recounted)',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Store release',
        evidence: 'No store URL verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'viblog',
    slug: 'viblog',
    name: 'VIBLOG',
    category: 'Mobile App',
    platforms: ['iOS', 'Android'],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Supabase', 'Apple Vision', 'ML Kit', 'AdMob'],
    status: 'in-development',
    visibility: 'approved',
    featured: true,
    icon: 'icons/viblog.png',
    screenshots: [
      {
        src: 'screenshots/viblog-1.png',
        altKo: 'VIBLOG 로그인 화면 — 로그인 없이 둘러보기',
        altEn: 'VIBLOG sign-in — browse without an account',
        captionKo: '실제 로그인 화면 (시뮬레이터 실행 캡처, 로컬 모드 안내 표시)',
        captionEn: 'Real sign-in screen (simulator capture, local-mode notice)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '순간을 찍으면, 분위기가 들린다.',
      shortDescription:
        '사진을 찍으면 기기 안 AI가 분위기를 읽고 4–8초 영상을 만들어 주는 Flutter 카메라 앱입니다.',
      overview:
        'VIBLOG는 촬영·AI 분석·음악 매칭·영상 렌더링을 기기 안에서 끝내는 것을 목표로 합니다. 장면·사물·얼굴 위치·색감 분석기(image_analyzer·scene_classifier·mood_classifier·color_analyzer)와 Ken Burns·오버레이 렌더러·네이티브 인코더 파이프라인이 소스에서 확인됩니다. 음악은 자체 CC0 내장 24곡과 무료 Openverse 추천을 병행하고, 라이선스를 영상에 자동 표기합니다. 포토부스(연속 촬영·16 필터·얼굴 추적 스티커·173 레이아웃)와 2.5D 음악실, Daily Mix·Room 소셜까지 담은 대형 코드베이스입니다.',
      howItWorks: [
        '사진·짧은 영상·포토부스 연속 촬영으로 순간을 담습니다.',
        '기기 안 분석이 바이브·무드·장르를 추정하고 음악(내장곡·사진의 노래·실제 곡 태그)을 매칭합니다.',
        '편집기(음악·캡션·비율·모션·스티커·필터)에서 다듬고 9:16 영상으로 저장·공유합니다.',
      ],
      developmentNotes:
        'Flutter 단일 코드베이스의 ai/·features(camera·booth·editor·music·rooms·studio·vibes·feed·gallery·pro)·video/·music_room·ads·billing 구조와 Riverpod·Supabase·AdMob 의존성이 확인됩니다. 웹 플랫폼 미구성으로 웹 실행 캡처는 불가했습니다.',
      futurePlans: '스토어 출시 여부와 서버 설정 연동 상태는 미확인으로 표기합니다.',
    },
    en: {
      tagline: 'Shoot the moment. Hear the vibe.',
      shortDescription:
        'A Flutter camera app that reads the mood on-device and turns photos into 4–8s videos.',
      overview:
        'VIBLOG aims to keep capture, AI analysis, music matching, and rendering fully on-device. Source shows scene/object/face/color analyzers plus a Ken Burns, overlay-renderer, and native-encoder pipeline. Music pairs 24 built-in CC0 tracks with free Openverse picks and auto license credits. A large codebase spanning photo booth (burst, 16 filters, face-tracking stickers, 173 layouts), a 2.5D music room, Daily Mix, and Room social.',
      howItWorks: [
        'Capture photos, clips, or booth bursts.',
        'On-device analysis estimates vibe, mood, and genre, then matches music (built-ins, photo-composed songs, real-track tags).',
        'Polish in the editor (music, captions, ratio, motion, stickers, filters) and save or share 9:16 video.',
      ],
      developmentNotes:
        'Single Flutter codebase: ai/, features (camera, booth, editor, music, rooms, studio, vibes, feed, gallery, pro), video/, music_room, ads, billing — with Riverpod, Supabase, AdMob. Web platform is not configured, so no web capture was possible.',
      futurePlans: 'Store release and server-settings wiring are marked unverified.',
    },
    features: [
      {
        titleKo: '온디바이스 AI 분석',
        titleEn: 'On-device AI analysis',
        bodyKo: '장면·사물·얼굴 위치·색감을 기기 안에서 분석해 바이브·무드를 추정하고, 민감 정보 추정은 하지 않습니다.',
        bodyEn: 'Scene, object, face-position, and color analysis run on-device to estimate vibe and mood — never sensitive attributes.',
      },
      {
        titleKo: '포토부스와 꾸미기',
        titleEn: 'Photo booth and styling',
        bodyKo: '타이머 연속 촬영·라이브 컷·실시간 필터·얼굴 추적 스티커·173 레이아웃·49 프레임·AI 무드 꾸미기를 갖춥니다.',
        bodyEn: 'Burst capture, live cuts, live filters, face-tracking stickers, 173 layouts, 49 frames, AI mood styling.',
      },
      {
        titleKo: '저작권 안전한 음악',
        titleEn: 'Rights-safe music',
        bodyKo: 'CC0 내장곡·사진을 악보처럼 읽는 자작곡·CC BY 이하 추천만 쓰고 라이선스를 자동 표기합니다.',
        bodyEn: 'Built-in CC0 tracks, photo-composed originals, and CC0/Public-Domain/CC-BY picks only, with auto credit.',
      },
      {
        titleKo: '네이티브 영상 파이프라인',
        titleEn: 'Native video pipeline',
        bodyKo: 'Ken Burns·오버레이 렌더·1080p 저장본+720p 업로드 사본을 네이티브 인코더로 뽑습니다.',
        bodyEn: 'Ken Burns, overlay rendering, and 1080p masters plus 720p upload copies via native encoders.',
      },
    ],
    evidence: [
      {
        feature: 'Analysis modules',
        evidence: 'lib/ai: image_analyzer, scene_classifier, mood_classifier, color_analyzer, caption_engine',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Booth + editor + export',
        evidence: 'features/booth (10 files), features/editor (6 files), video/ (8 files incl. video_exporter)',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Music licensing flow',
        evidence: 'README music policy + lib/audio, lib/music_room, photo_song_card',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Store release',
        evidence: 'No store URL verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'chain-zero',
    slug: 'chain-zero',
    name: 'Chain Zero',
    category: 'Game',
    platforms: ['iOS', 'Android'],
    technologies: ['Expo', 'React Native', 'TypeScript', 'matter-js', 'Reanimated', 'AsyncStorage', 'AdMob'],
    status: 'in-development',
    visibility: 'approved',
    featured: true,
    icon: 'icons/chain-zero.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '숫자 사이의 관계를 손가락으로 설계하라.',
      shortDescription:
        '경로 설계 퍼즐을 중심으로 20종 이상의 모드를 담은 Expo 모바일 퍼즐 게임입니다.',
      overview:
        'Chain Zero는 인접 숫자 잇기(CHAIN)의 규칙 판정에 OVERDRIVE·JACKPOT·GIFT·GOLDEN·STREAK 기믹과 프리즘 연쇄를 얹고, NOVA(머지+폭발)·DROP·ECHO(기억력)·FLOOD·SLIDE·PAIRS·SUMPLETE(논리합)에 Bricks·Defense·Gomoku·Mines·Snake·Sokoban·Suika까지 20종 이상 모드를 담은 퍼즐 모음입니다. 전 모드 공유 글로벌 레벨·XP 해금, 16 업적·10 등급·도감, 모드별 스포트라이트 튜토리얼, 실패 시 AdMob 테스트 전면광고(60초 제한)를 갖추고, 엔진은 React Native를 import하지 않는 순수 TypeScript에 테스트가 딸려 있습니다.',
      howItWorks: [
        '홈에서 플레이를 눌러 모드를 고릅니다(레벨에 따라 해금, 플레이한 모드는 계속 개방).',
        '드래그·밀기·뒤집기로 풀고 계산 결과와 규칙 충족을 실시간으로 확인합니다.',
        '성적으로 XP·등급·업적을 쌓고 도감에서 기믹을 복습합니다.',
      ],
      developmentNotes:
        'src/game 35+ 엔진(Board·Rule·Calculation·Gravity·Path·Stage·Spawn·Combo·Fever·Grade 등), 27개 화면, hooks(useXpAward·useFailureAd·useModeTutorial), data(codex·achievements·grades), services(AdEngine 등)와 npm run check 품질 게이트가 확인됩니다. README가 보드 스와이프·병합·성장 미구현 범위도 명시합니다.',
      futurePlans: '실 광고 ID 전환과 스토어 릴리스 검증이 다음 단계로 보입니다.',
    },
    en: {
      tagline: 'Design the relations between numbers.',
      shortDescription:
        'An Expo puzzle collection built around path-drawing, with 20+ game modes.',
      overview:
        'Chain Zero centers on path-drawing rule puzzles (CHAIN) layered with OVERDRIVE, JACKPOT, GIFT, GOLDEN, and STREAK gimmicks plus prism chains — then adds NOVA (merge + blasts), DROP, ECHO (memory), FLOOD, SLIDE, PAIRS, SUMPLETE (sum logic), Bricks, Defense, Gomoku, Mines, Snake, Sokoban, Suika, and more: over 20 modes. Shared global levels with XP unlocks, 16 achievements, 10 grades, a codex, per-mode spotlight tutorials, and test AdMob interstitials (60s throttle) round it out. Engines are pure TypeScript with tests.',
      howItWorks: [
        'Pick a mode from home (XP unlocks; played modes stay open).',
        'Drag, slide, or flip through puzzles with live result and rule feedback.',
        'Bank XP, grades, and achievements, and review gimmicks in the codex.',
      ],
      developmentNotes:
        'Verified: 35+ engines in src/game, 27 screens, hooks (useXpAward, useFailureAd, useModeTutorial), data (codex, achievements, grades), services (AdEngine), and an npm run check quality gate. The README also states out-of-scope mechanics.',
      futurePlans: 'Real ad-ID switchover and store-release verification look like next steps.',
    },
    features: [
      {
        titleKo: '20종 이상의 퍼즐 모드',
        titleEn: '20+ puzzle modes',
        bodyKo: 'CHAIN 원조 모드에 머지·낙하·기억·채우기·밀기·짝찾기·합추리 변형과 고전 아케이드 계열을 한 앱에 담습니다.',
        bodyEn: 'The original CHAIN mode plus merge, drop, memory, flood, slide, pairs, and sum-logic variants with arcade classics in one app.',
      },
      {
        titleKo: '런 단위 기믹',
        titleEn: 'Per-run gimmicks',
        bodyKo: '성공 게이지 OVERDRIVE, 분홍 JACKPOT, 랜덤 GIFT, 점수 GOLDEN, 연속 STREAK 배수가 매 런을 다르게 만듭니다.',
        bodyEn: 'OVERDRIVE gauge, rare JACKPOT, random GIFTs, GOLDEN tiles, and STREAK multipliers make every run different.',
      },
      {
        titleKo: '전 모드 성장 공유',
        titleEn: 'Shared progression',
        bodyKo: '어떤 모드를 해도 XP가 쌓여 레벨이 오르고 새 모드가 열립니다. 16 업적·10 등급·도감이 기록을 묶습니다.',
        bodyEn: 'Any mode earns XP toward levels that unlock modes. 16 achievements, 10 grades, and a codex tie records together.',
      },
      {
        titleKo: '완전 오프라인',
        titleEn: 'Fully offline',
        bodyKo: '로그인·서버·인터넷 없이 Expo Go에서 바로 실행되고, 기록은 AsyncStorage에 남습니다.',
        bodyEn: 'Runs in Expo Go with no login, server, or connection; records persist in AsyncStorage.',
      },
    ],
    evidence: [
      {
        feature: 'Mode roster',
        evidence: 'src/screens: 27 screens incl. Nova/Drop/Echo/Flood/Slide/Pairs/Sumplete/Snake/Sokoban/Suika + ModeSelectScreen GAME_MODES',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Gimmicks + progression',
        evidence: 'README gimmick/mode/progression sections + FeverEngine, ProgressionEngine, AchievementEngine, GradeEngine',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Quality gate',
        evidence: 'package.json: npm run check (tsc + vitest + expo-doctor) + src/game/__tests__',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Store release',
        evidence: 'No store URL verified; AdMob still test IDs per README',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'receipt',
    slug: 'receipt',
    name: 'RECEIPT',
    category: 'Mobile App',
    platforms: ['iOS'],
    technologies: ['Swift', 'SwiftUI', 'SwiftData', 'WidgetKit', 'HealthKit', 'MapKit'],
    status: 'in-development',
    visibility: 'approved',
    featured: false,
    icon: 'icons/receipt.png',
    screenshots: [
      {
        src: 'screenshots/receipt-1.png',
        altKo: 'RECEIPT 온보딩 첫 화면 — 오늘이 한 장의 영수증이 됩니다',
        altEn: 'RECEIPT onboarding — today becomes a receipt',
        captionKo: '실제 온보딩 화면 (시뮬레이터 실행 캡처)',
        captionEn: 'Real onboarding screen (simulator capture)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '하루를 영수증처럼 기록하다.',
      shortDescription:
        '순간·집중·기분을 영수증 형식으로 모아보는 iOS 라이프 로그 앱입니다.',
      overview:
        'RECEIPT는 Today(순간·포커스 세션)와 Archive(캘린더·월간·연간·일간 상세), 온보딩·설정, 위젯으로 하루를 기록합니다. 영수증 스타일 렌더(ReceiptView·ReceiptStyle·인쇄 전환·인쇄음)와 이미지 내보내기(ReceiptImageExporter·ShareReceiptSheet), 오늘의 한 줄 생성기, 햅틱·사운드, HealthKit·위치·사진 연동이 소스에서 확인되는 로컬 우선 앱입니다.',
      howItWorks: [
        '오늘의 순간(사진·한 줄)과 집중 세션을 기록합니다.',
        '하루 영수증으로 모아 확인하고 이미지로 내보내 공유합니다.',
        '월·연간 아카이브와 위젯으로 흐름을 되돌아봅니다.',
      ],
      developmentNotes:
        'Models(DailyReceipt·FocusSession·Mood·Moment·TimelineEntry·RouteBuilder·SharedModelContainer), Services(ReceiptStore·Exporter·TodaysLineGenerator·Haptic·PrintSound·Health·Location·Photo), Views(Today·Archive 5종·Components 9종·Onboarding·Settings), RECEIPTWidget, xcodegen(project.yml) 구조가 확인됩니다.',
      futurePlans: '클라우드 동기화 유무와 스토어 출시는 미확인으로 표기합니다.',
    },
    en: {
      tagline: 'Your day, printed as a receipt.',
      shortDescription:
        'An iOS life-log app that collects moments, focus, and mood like a printed receipt.',
      overview:
        'RECEIPT records the day through Today (moments, focus sessions) and Archive (calendar, monthly, yearly, day detail), plus onboarding, settings, and widgets. Source shows receipt-styled rendering (ReceiptView, print transition, print sounds), image export and sharing, a today-line generator, haptics, and Health, location, and photo wiring — local-first throughout.',
      howItWorks: [
        'Log moments (photos, one-liners) and focus sessions for today.',
        'Review the daily receipt and export it as an image to share.',
        'Revisit flows via monthly and yearly archives and widgets.',
      ],
      developmentNotes:
        'Verified: Models (DailyReceipt, FocusSession, Mood, Moment, TimelineEntry, RouteBuilder, SharedModelContainer), Services (ReceiptStore, Exporter, TodaysLineGenerator, Haptic, PrintSound, Health, Location, Photo), Views (Today, 5 Archive, 9 Components, Onboarding, Settings), RECEIPTWidget, xcodegen (project.yml).',
      futurePlans: 'Cloud sync and store release are marked unverified.',
    },
    features: [
      {
        titleKo: '데일리 영수증',
        titleEn: 'Daily receipt',
        bodyKo: '하루 기록을 영수증 레이아웃·인쇄 연출로 모아보고 이미지로 내보내 공유합니다.',
        bodyEn: 'Collect the day in a receipt layout with print theatrics, then export and share as an image.',
      },
      {
        titleKo: '월·연간 아카이브',
        titleEn: 'Monthly and yearly archives',
        bodyKo: '캘린더·월간·연간·일간 상세 보기로 긴 흐름을 되돌아봅니다.',
        bodyEn: 'Calendar, monthly, yearly, and day-detail views trace long-term flows.',
      },
      {
        titleKo: '집중 세션과 오늘의 한 줄',
        titleEn: 'Focus sessions and today-line',
        bodyKo: '포커스 기록과 자동 생성 한 줄이 하루를 요약합니다.',
        bodyEn: 'Focus logs plus an auto-generated one-liner summarize each day.',
      },
      {
        titleKo: '로컬 우선 저장',
        titleEn: 'Local-first storage',
        bodyKo: 'SwiftData 기반 저장과 HealthKit·위치·사진 연동이 기기 안에서 돕니다.',
        bodyEn: 'SwiftData storage with Health, location, and photo wiring stays on-device.',
      },
    ],
    evidence: [
      {
        feature: 'Receipt rendering + export',
        evidence: 'ReceiptView, ReceiptStyle, ReceiptPrintTransition + ReceiptImageExporter, ShareReceiptSheet, PrintSoundService',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Archive views',
        evidence: 'Views/Archive: Calendar, Monthly, Yearly, DayDetail + ArchiveView',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Data + device services',
        evidence: 'DailyReceipt, FocusSession, Mood, SharedModelContainer + Health/Location/Photo/Haptic services',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Cloud sync',
        evidence: 'No sync code verified',
        status: 'Unverified',
        confidence: 'Medium',
      },
    ],
  },
  {
    id: 'flowworks',
    slug: 'flowworks',
    name: 'FlowWorks',
    category: 'Web App',
    platforms: ['Web', 'macOS', 'iOS', 'Android'],
    technologies: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'Capacitor', 'Electron', 'Zustand', 'WebSocket'],
    status: 'partial',
    visibility: 'approved',
    featured: false,
    icon: 'icons/flowworks.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '서버 없이도 돌아가는 협업 MVP.',
      shortDescription:
        '채팅·프로젝트 관리·미니게임·자동화까지 담은 풀스택 협업 MVP입니다.',
      overview:
        'FlowWorks는 이메일 코드+JWT 인증, 워크스페이스·룸·메시지, 이슈·프로젝트·스프린트·태스크·댓글·링크의 지라 스타일 관리 API를 갖춘 협업 MVP입니다. 기본 스탠드얼론 모드(브라우저 저장소만)와 무료 로컬 JSON API, 선택적 Prisma 이관 구조 위에, 같은 코드베이스로 PWA·Capacitor 모바일·Electron 데스크탑을 뽑습니다. 덤으로 GameZone(2048·Flappy·Hextris·Pac-Man 내장)과 영상 생성·자동화 러너·관리 서버가 들어 있습니다.',
      howItWorks: [
        '스탠드얼론 모드에서 설치 없이 바로 씁니다.',
        '필요하면 무료 로컬 API를 켜고 워크스페이스·룸·이슈로 확장합니다.',
        '같은 빌드를 PWA·모바일·데스크탑으로 패키징하고, 쉬는 시간엔 GameZone을 엽니다.',
      ],
      developmentNotes:
        'server.ts의 40+ 라우트(auth·workspaces·rooms·messages·issues·projects·sprints·tasks), adminServer·WebSocket·rate-limit·Zod, standalone/pwa/websocket 서비스, GameZone·VideoGen·Automation 뷰, public/games 4종, dev:api:free·build:pwa·desktop:build 스크립트가 확인됩니다.',
      futurePlans: '프로덕션 DB 마이그레이션과 호스팅 운영 정책은 미확정으로 표기합니다.',
    },
    en: {
      tagline: 'A collaboration MVP that runs server-free.',
      shortDescription:
        'A full-stack collaboration MVP spanning chat, project tracking, mini-games, and automation.',
      overview:
        'FlowWorks is a collaboration MVP with email-code + JWT auth and Jira-style APIs across workspaces, rooms, messages, issues, projects, sprints, tasks, comments, and links. A standalone mode (browser storage only) and a free local JSON API sit under an optional Prisma migration path, while the same build ships as PWA, Capacitor mobile, and Electron desktop. Bonus: a built-in GameZone (2048, Flappy, Hextris, Pac-Man), video generation, an automation runner, and an admin server.',
      howItWorks: [
        'Start instantly in standalone mode with no setup.',
        'Turn on the free local API to scale to workspaces, rooms, and issues.',
        'Package the same build as PWA, mobile, or desktop — and open GameZone for breaks.',
      ],
      developmentNotes:
        'Verified: 40+ routes in server.ts, adminServer, WebSocket, rate limiting, Zod, standalone/PWA/websocket services, GameZone/VideoGen/Automation views, 4 games in public/games, and dev:api:free, build:pwa, desktop:build scripts.',
      futurePlans: 'Production database migration and hosting policy are marked undecided.',
    },
    features: [
      {
        titleKo: '지라 스타일 관리 API',
        titleEn: 'Jira-style tracking API',
        bodyKo: '이슈·프로젝트·스프린트·태스크·댓글·링크와 워크스페이스·룸·메시지를 한 API에 담습니다.',
        bodyEn: 'Issues, projects, sprints, tasks, comments, and links plus workspaces, rooms, and messages in one API.',
      },
      {
        titleKo: '스탠드얼론 PWA',
        titleEn: 'Standalone PWA',
        bodyKo: 'API 서버 없이 브라우저 저장소만으로 동작하고 설치할 수 있습니다.',
        bodyEn: 'Runs on browser storage alone with no API server, installable as a PWA.',
      },
      {
        titleKo: '내장 GameZone',
        titleEn: 'Built-in GameZone',
        bodyKo: '2048·Flappy·Hextris·Pac-Man이 앱 안에 들어 있어 쉬는 시간용으로 열립니다.',
        bodyEn: '2048, Flappy, Hextris, and Pac-Man ship inside the app for breaks.',
      },
      {
        titleKo: '자동화와 영상 생성',
        titleEn: 'Automation and video generation',
        bodyKo: '파이썬 자동화 러너·영상 생성 뷰·관리 서버가 MVP에 딸려 있습니다.',
        bodyEn: 'A Python automation runner, video-generation views, and an admin server ride along with the MVP.',
      },
    ],
    evidence: [
      {
        feature: 'Tracking + chat API',
        evidence: 'backend/src/server.ts: auth/workspaces/rooms/messages/issues/projects/sprints/tasks routes',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Standalone + free local API',
        evidence: 'README standalone section + src/services/standalone + FLOWWORKS_DATA_PATH JSON store',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'GameZone + extras',
        evidence: 'GameZoneView, VideoGenView, AutomationView + public/games (2048, flappy, hextris, pacman)',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Production deployment',
        evidence: 'No live URL verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'side-a',
    slug: 'side-a',
    name: 'Side A',
    category: 'Mobile App',
    platforms: ['iOS', 'Android', 'Web'],
    technologies: ['Expo SDK 57', 'TypeScript', 'Cloudflare Workers', 'D1', 'Supabase'],
    status: 'in-development',
    visibility: 'approved',
    featured: false,
    icon: 'icons/side-a.png',
    screenshots: [
      {
        src: 'screenshots/side-a-1.png',
        altKo: 'Side A 로그인 화면 — Welcome back, 한/영 전환',
        altEn: 'Side A sign-in screen — Welcome back with KO/EN switch',
        captionKo: '실제 로그인 화면 (Expo 웹 실행 캡처)',
        captionEn: 'Real sign-in screen (Expo web capture)',
        concept: false,
      },
      {
        src: 'screenshots/side-a-2.png',
        altKo: 'Side A 회원가입 화면 — Find your people',
        altEn: 'Side A sign-up screen — Find your people',
        captionKo: '실제 회원가입 화면 (Expo 웹 실행 캡처)',
        captionEn: 'Real sign-up screen (Expo web capture)',
        concept: false,
      },
      {
        src: 'screenshots/side-a-3.png',
        altKo: 'Side A 한국어 로그인 화면 — 다시 오셨네요',
        altEn: 'Side A Korean sign-in screen',
        captionKo: '실제 한국어 화면 (Expo 웹 실행 캡처)',
        captionEn: 'Real Korean screen (Expo web capture)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '바이닐 문화에서 온 플레이리스트 소셜.',
      shortDescription:
        '바이닐 감성의 크로스플랫폼 플레이리스트 소셜 앱입니다.',
      overview:
        'Side A는 Expo 모노레포(apps/mobile·apps/api·packages)와 Cloudflare Workers + D1 API(auth·rooms·social·context·security, 마이그레이션 2종)로 유료 음악 API·호스팅 오디오 없이 플레이리스트 소셜을 구현합니다. 모바일은 app·features·profile·db·i18n·design·store 분리에 한/영 지원 구조이며, 기본 실행은 허구 로컬 데모로 명확히 표기되고 핵심 API 테스트가 통과 상태로 문서화되어 있습니다.',
      howItWorks: [
        '로컬 데모 모드에서 플레이리스트를 만들고 탐색합니다.',
        '로그인 연동 시 실제 계정 플로우를 시험합니다.',
        '웹 빌드를 무료 티어에 배포합니다.',
      ],
      developmentNotes:
        'npm workspaces, apps/api 7개 라우트 모듈+D1 마이그레이션 2종, 모바일 src 11개 영역, typecheck·lint·vitest 게이트, docs/VALIDATION·XCODE가 확인됩니다. 아직 git 저장소가 아니라는 점이 README에 명시되어 있습니다.',
      futurePlans: '검증된 프로덕션 릴리스가 아니며 출시 QA 진행 중으로 표기합니다.',
    },
    en: {
      tagline: 'Playlist social, pressed like vinyl.',
      shortDescription: 'A cross-platform playlist social app inspired by vinyl culture.',
      overview:
        'Side A is an Expo monorepo (apps/mobile, apps/api, packages) on Cloudflare Workers + D1 (auth, rooms, social, context, security; 2 migrations) with no paid music API or hosted audio. Mobile splits into app, features, profile, db, i18n, design, and store with KO/EN structure. It launches by default in a clearly labelled fictional local demo; core API tests pass per docs.',
      howItWorks: [
        'Create and explore playlists in local demo mode.',
        'Try real account flows when login is wired up.',
        'Deploy the web build to a free tier.',
      ],
      developmentNotes:
        'Verified: npm workspaces, 7 API route modules + 2 D1 migrations, 11 mobile src areas, typecheck/lint/vitest gates, docs/VALIDATION and XCODE. The README states it is not yet a git repo.',
      futurePlans: 'Marked as not a verified production release; release QA in progress.',
    },
    features: [
      {
        titleKo: '로컬 데모 우선',
        titleEn: 'Local-demo first',
        bodyKo: '서버 없이도 전체 기능을 둘러볼 수 있는 허구 데모로 시작합니다.',
        bodyEn: 'A fictional demo lets you tour all features with no server.',
      },
      {
        titleKo: '무료 서버 구조',
        titleEn: 'Free-tier backend',
        bodyKo: 'Workers + D1와 2종 마이그레이션으로 유료 의존 없이 설계되었습니다.',
        bodyEn: 'Workers + D1 with 2 migrations and no paid dependencies by design.',
      },
      {
        titleKo: '검증 문서화',
        titleEn: 'Documented validation',
        bodyKo: '테스트 통과 범위와 한계를 VALIDATION 문서에 분리 표기합니다.',
        bodyEn: 'Passing scope and limits are tracked separately in VALIDATION docs.',
      },
    ],
    evidence: [
      {
        feature: 'Monorepo + API',
        evidence: 'workspaces apps/* packages/* + apps/api/src (auth, rooms, social, context, security) + 2 D1 migrations',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Mobile structure',
        evidence: 'apps/mobile/src: app, features, profile, db, i18n, design, store (+ react-native-web for web builds)',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Production release',
        evidence: 'README: not yet verified production',
        status: 'Planned',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'recordflow',
    slug: 'recordflow',
    name: 'RecordFlow',
    category: 'AI App',
    platforms: ['iOS', 'Android'],
    technologies: ['Expo', 'React Native', 'TypeScript', 'React Navigation', 'On-device AI'],
    status: 'partial',
    visibility: 'approved',
    featured: false,
    icon: 'icons/recordflow.png',
    screenshots: [
      {
        src: 'screenshots/recordflow-art.png',
        altKo: 'RecordFlow 브랜드 아트 — 파형 아이콘',
        altEn: 'RecordFlow brand art — waveform mark',
        captionKo: '프로젝트 브랜드 에셋 (실행 캡처는 준비 중)',
        captionEn: 'Project brand asset (run capture pending)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '기록을 읽고, 질문을 만들고, 그래프로 잇다.',
      shortDescription:
        '온디바이스 AI 학습 도구를 품은 Expo 기록·학습 앱입니다.',
      overview:
        'RecordFlow는 하단 탭의 기록 흐름 위에 로컬 AI 학습 엔진을 얹은 앱입니다. LocalAIManager·ModelRegistry·providers 구조의 모델 관리와 요약·코넬식 노트·플래시카드·퀴즈·Ask AI·청킹·프롬프트 빌더가 src/ai에 들어 있고, 홈·학습·라이브러리·지식 그래프·설정 화면, 오피스/파일 가져오기 미리보기와 내보내기, 협업 영역까지 확인됩니다. 번들 ID와 portrait·태블릿·엣지투엣지 설정이 app.json에 정리되어 있습니다.',
      howItWorks: [
        '홈·학습 탭에서 기록을 남기고 파일을 가져옵니다.',
        '로컬 AI로 요약·코넬 노트·플래시카드·퀴즈를 뽑고 지식 그래프로 잇습니다.',
        '라이브러리에서 되돌아보고 필요할 때 내보내거나 함께 씁니다.',
      ],
      developmentNotes:
        'src 20+ 영역(screens 5종·ai/localAI 10+ 모듈·import·export·collaboration·services·navigation 등)과 Expo 54 + React Navigation 7이 확인되나, README가 없어 성숙도는 부분 구현으로 표기합니다.',
      futurePlans: '기능 문서화와 실행 검증, 모델 제공자 연결 상태 확인이 남은 상태입니다.',
    },
    en: {
      tagline: 'Read logs, mint quizzes, link the graph.',
      shortDescription: 'An Expo logging and study app with on-device AI study tools.',
      overview:
        'RecordFlow layers a local-AI study engine over a tabbed log flow. Source shows model management (LocalAIManager, ModelRegistry, providers) with summarization, Cornell notes, flashcards, quizzes, Ask AI, chunking, and prompt building in src/ai — plus Home, Learning, Library, Knowledge-Graph, and Settings screens, office/file import previews, export, and collaboration areas. Bundle ID and portrait/tablet/edge-to-edge settings live in app.json.',
      howItWorks: [
        'Capture logs and import files from Home and Learning tabs.',
        'Mint summaries, Cornell notes, flashcards, and quizzes with local AI and link them in the knowledge graph.',
        'Revisit in the library, then export or collaborate as needed.',
      ],
      developmentNotes:
        'Verified: 20+ src areas (5 screens, 10+ ai/localAI modules, import, export, collaboration, services, navigation) with Expo 54 + React Navigation 7. No README exists, so maturity is marked partial.',
      futurePlans: 'Feature docs, run verification, and provider wiring checks remain.',
    },
    features: [
      {
        titleKo: '로컬 AI 학습 엔진',
        titleEn: 'Local AI study engine',
        bodyKo: '요약·코넬 노트·플래시카드·퀴즈·Ask AI를 기기 측 구조에서 뽑습니다.',
        bodyEn: 'Summaries, Cornell notes, flashcards, quizzes, and Ask AI from an on-device-side structure.',
      },
      {
        titleKo: '지식 그래프',
        titleEn: 'Knowledge graph',
        bodyKo: '기록과 학습 카드를 그래프로 이어 관계로 되돌아봅니다.',
        bodyEn: 'Link logs and study cards in a graph to revisit by relation.',
      },
      {
        titleKo: '가져오기·내보내기',
        titleEn: 'Import and export',
        bodyKo: '오피스·파일 미리보기 가져오기와 내보내기, 협업 영역을 갖춥니다.',
        bodyEn: 'Office/file import previews, export, and collaboration areas included.',
      },
    ],
    evidence: [
      {
        feature: 'AI services',
        evidence: 'src/ai/localAI: LocalAIManager, ModelRegistry, providers + Summary/CornellNote/Flashcard/Quiz/AskAI/Chunking/PromptBuilder',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Screens + flows',
        evidence: 'src/screens: Home, Learning, Library, KnowledgeGraph, Settings + import/export/collaboration dirs',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Release readiness',
        evidence: 'No README or run capture verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'cyworld-2026',
    slug: 'cyworld-2026',
    name: 'Cyworld 2026',
    category: 'Web App',
    platforms: ['Web', 'iOS', 'Android'],
    technologies: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Prisma', 'next-auth', 'Capacitor', 'Framer Motion'],
    status: 'partial',
    visibility: 'approved',
    featured: false,
    icon: 'icons/cyworld-2026.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '미니홈피 감성의 현대적 재해석.',
      shortDescription:
        '미니홈피·미니룸 감성을 Next.js로 다시 만든 레트로 소셜 프로젝트입니다.',
      overview:
        'Cyworld 2026(패키지·브랜드 VIBESPHERE 2026)은 랜딩·로그인·회원가입·닉네임 미니홈피·아바타 라우트와 픽셀아트 로고·Framer Motion 랜딩을 갖춘 Next.js 16 앱입니다. Prisma·next-auth·미들웨어의 계정 기반에 Capacitor+iOS·Android·Expo 셸(mobile/)의 모바일 확장을 얹고, Docker· )/dev.db 등 로컬 개발 흔적이 확인되는 초기 단계 프로젝트입니다.',
      howItWorks: [
        '랜딩에서 들어와 로그인·회원가입으로 계정을 만듭니다.',
        '닉네임 미니홈피와 아바타·미니룸을 꾸밉니다.',
        '모바일 셸 빌드로 폰에서도 이어 씁니다.',
      ],
      developmentNotes:
        'app 6개 라우트·api·middleware, Prisma·next-auth·Capacitor 의존성과 ios/·android/·mobile/ 존재, Docker 파일이 확인됩니다. out/ 정적 산출물은 0바이트로 무효해 dev 서버 캡처로 전환했습니다.',
      futurePlans: '인증·DB 운영 정책과 모바일 빌드 검증이 남은 상태입니다.',
    },
    en: {
      tagline: 'Mini-homepage nostalgia, rebuilt modern.',
      shortDescription: 'A retro-social project rebuilding mini-homepage and mini-room vibes with Next.js.',
      overview:
        'Cyworld 2026 (package and brand: VIBESPHERE 2026) is a Next.js 16 app with landing, login, signup, nickname mini-homepage, and avatar routes plus a pixel-art logo and Framer Motion landing. Account foundations (Prisma, next-auth, middleware) pair with mobile reach via Capacitor, iOS, Android, and an Expo shell (mobile/). Early stage, with local dev traces (Docker, dev DB) present.',
      howItWorks: [
        'Enter via landing, then sign up or log in.',
        'Decorate a nickname mini-homepage with avatar and mini-room.',
        'Continue on phones via mobile-shell builds.',
      ],
      developmentNotes:
        'Verified: 6 app routes, api, middleware, Prisma/next-auth/Capacitor deps, ios/, android/, mobile/ presence, Docker files. The out/ static artifact was 0 bytes (stale), so capture switched to the dev server.',
      futurePlans: 'Auth, database policy, and mobile build verification remain.',
    },
    features: [
      {
        titleKo: '미니홈피 소셜',
        titleEn: 'Mini-homepage social',
        bodyKo: '닉네임 홈·아바타·미니룸 꾸미기와 랜딩의 레트로 소셜을 지향합니다.',
        bodyEn: 'Retro social around nickname homes, avatars, mini-rooms, and landing.',
      },
      {
        titleKo: '계정 기반 구조',
        titleEn: 'Account foundations',
        bodyKo: '회원가입·로그인·미들웨어·Prisma를 갖춘 실제 서비스형 뼈대입니다.',
        bodyEn: 'Real service skeleton with signup, login, middleware, and Prisma.',
      },
      {
        titleKo: '웹-모바일 확장',
        titleEn: 'Web-to-mobile',
        bodyKo: 'Capacitor와 Expo 셸로 같은 웹을 모바일에 얹습니다.',
        bodyEn: 'The same web ships to mobile via Capacitor and an Expo shell.',
      },
    ],
    evidence: [
      {
        feature: 'Routes + landing',
        evidence: 'app/: page, landing, login, signup, [nickname], avatar + pixel-art logo + framer-motion',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Mobile reach',
        evidence: 'capacitor.config.ts + ios/ + android/ + mobile/ Expo shell',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Live service',
        evidence: 'No live URL verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'flownote',
    slug: 'flownote',
    name: 'FlowNote',
    category: 'Mobile App',
    platforms: ['iPad'],
    technologies: ['Swift', 'SwiftUI', 'PencilKit', 'PDFKit'],
    status: 'planned',
    visibility: 'approved',
    featured: false,
    icon: null,
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: 'iPad 학습 노트의 로컬 우선 실험.',
      shortDescription:
        '펜슬 필기·PDF 주석·블록 에디터를 한곳에 모으려는 iPad 네이티브 학습 노트 기획입니다.',
      overview:
        'FlowNote(PDFLOW)는 Apple Pencil 정밀 필기와 PDF 주석, Notion식 블록 편집, 온디바이스 학습 도구(요약·플래시카드·퀴즈·지식 그래프)를 노리는 기획입니다. docs 45종 아키텍처와 apps/ipad 스켈레톤·공유 contracts 패키지가 있으나, README가 현재 빌드·실행 불가 상태임을 명시해 DESKSHOW에서는 기획(Planned)으로만 표기합니다.',
      howItWorks: [
        '기획 문서와 스펙을 먼저 확정합니다.',
        '빌드 가능 상태가 되면 실행 화면을 확보합니다.',
        '그때 소개 콘텐츠를 구현 기준으로 갱신합니다.',
      ],
      developmentNotes:
        'docs 아키텍처와 apps/ipad 스켈레톤은 있으나, 빌드 불가 상태가 README에 명시되어 있습니다. 실행된 것처럼 소개하지 않습니다.',
      futurePlans: '빌드 복구가 최우선이며, 그 전까지 공개 범위도 기획으로 유지합니다.',
    },
    en: {
      tagline: 'A local-first iPad study-note experiment.',
      shortDescription:
        'An iPad-native study-note concept combining pencil, PDF, and block editing.',
      overview:
        'FlowNote (PDFLOW) aims at precision Pencil notes, PDF annotation, Notion-like blocks, and on-device study tools (summaries, flashcards, quizzes, knowledge graphs). Architecture docs (45 files), an apps/ipad skeleton, and shared contract packages exist — but the README states it cannot currently build or run, so DESKSHOW lists it as Planned only.',
      howItWorks: [
        'Finalize specs and architecture docs first.',
        'Capture real screens once it builds.',
        'Update the write-up from implemented code only then.',
      ],
      developmentNotes:
        'Docs and an apps/ipad skeleton exist, but the README marks it not buildable. It is not presented as running.',
      futurePlans: 'Build recovery comes first; the listing stays Planned until then.',
    },
    features: [
      {
        titleKo: '기획 중인 필기 흐름',
        titleEn: 'Planned writing flow',
        bodyKo: '펜슬·PDF·블록 편집의 결합을 목표로 기획 중입니다.',
        bodyEn: 'A planned combination of pencil, PDF, and block editing.',
      },
    ],
    evidence: [
      {
        feature: 'Buildable app',
        evidence: 'README: NOT READY + build attempt 2026-10-11 failed: Swift errors in AppShell/CollaborationViews.swift (ambiguous Document, no accessible initializers)',
        status: 'Planned',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'rodeblockrush',
    slug: 'rodeblockrush',
    name: 'RodeblockRush',
    category: 'Game',
    platforms: ['macOS', 'Mobile'],
    technologies: ['Godot 4.7', 'GDScript'],
    status: 'in-development',
    visibility: 'approved',
    featured: false,
    icon: 'icons/rodeblockrush.svg',
    screenshots: [
      {
        src: 'screenshots/rodeblockrush-splash.png',
        altKo: 'ROADBLOCK RUSH 스플래시 아트 — 주황색 로우폴리 자동차',
        altEn: 'ROADBLOCK RUSH splash art — orange low-poly car',
        captionKo: '프로젝트 스플래시 에셋 (실행 캡처는 준비 중)',
        captionEn: 'Project splash asset (run capture pending)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '세로 화면 무한 드라이빙.',
      shortDescription:
        '차고·미션·29대 수집으로 완성된 Godot 세로형 무한 레이싱입니다.',
      overview:
        'ROADBLOCK RUSH는 Godot 4.7·GDScript의 세로형 모바일 무한 드라이빙입니다. 스플래시→타이틀→차고/카드→6개 바이옴 3차선 트래픽·코인·위험·시간 이벤트→아차·플로우·부스트·완벽 회피→충돌→미션 정산·카드 드롭→29대 중 구매→재도전의 완성 루프를 갖추고, 사운드트랙과 효과음을 전부 실행 중 합성합니다. 합성 터치의 자동 스모크 190 어설션이 전부 통과 상태입니다.',
      howItWorks: [
        'Godot에서 열어 F5로 실행합니다(첫 클론은 임포트 패스 1회).',
        '화면 좌우·A/D·스와이프로 조향하며 코인·미션을 모읍니다.',
        '카드를 모아 29대 중 다음 차를 사고 재도전합니다.',
      ],
      developmentNotes:
        'scenes(environment·game·garage·main·road·traffic·ui·vehicles)와 scripts(audio·core·flow·mobile·obstacles·pickups·player·progression·save·score·traffic·ui) 분리, tests/SmokeTest, 저장소 복구 프로브(옵트인)가 확인됩니다. MacBook Pro와 PROJECT에 동명 폴더가 있어 중복으로 기록합니다.',
      futurePlans: '릴리스 익스포트 검증과 실행 화면 확보가 남은 상태입니다.',
    },
    en: {
      tagline: 'Portrait endless driving.',
      shortDescription: 'A Godot portrait endless racer with garage, missions, and 29 collectible cars.',
      overview:
        'ROADBLOCK RUSH is a portrait mobile endless driver in Godot 4.7 and GDScript. Its finished loop runs splash → title → garage/cards → six biomes of 3-lane traffic, coins, hazards, and timed events → near miss → flow → boost → perfect dodge → crash → mission settlement and card drops → buying from 29 cars → retry. Soundtrack and effects are synthesized at runtime. An automated smoke test (190 assertions, synthetic touch) is green.',
      howItWorks: [
        'Open in Godot and press F5 (one import pass on fresh clones).',
        'Steer via screen halves, A/D keys, or swipe while collecting coins and missions.',
        'Spend cards on the next of 29 cars and retry.',
      ],
      developmentNotes:
        'Verified split: scenes (environment, game, garage, main, road, traffic, ui, vehicles) and scripts (audio, core, flow, mobile, obstacles, pickups, player, progression, save, score, traffic, ui), tests/SmokeTest, opt-in save-recovery probes. Duplicate folders exist in MacBook Pro and PROJECT — recorded as one entry.',
      futurePlans: 'Release-export verification and real captures remain.',
    },
    features: [
      {
        titleKo: '완성형 무한 루프',
        titleEn: 'Finished endless loop',
        bodyKo: '차고·6 바이옴·미션·카드·수집이 맞물린 feature-complete 루프입니다.',
        bodyEn: 'A feature-complete loop meshing garage, six biomes, missions, cards, and collection.',
      },
      {
        titleKo: '실행 중 합성 오디오',
        titleEn: 'Runtime-synthesized audio',
        bodyKo: '음악과 효과음을 전부 실행 중에 합성해 에셋 없이 냅니다.',
        bodyEn: 'Music and effects are synthesized at runtime with no audio assets.',
      },
      {
        titleKo: '190 어설션 스모크',
        titleEn: '190-assertion smoke test',
        bodyKo: '메뉴→주행→충돌→재도전 흐름을 합성 터치로 검증하고 전부 통과 중입니다.',
        bodyEn: 'Menu → drive → crash → retry flows verified with synthetic touch — all green.',
      },
    ],
    evidence: [
      {
        feature: 'Game loop + content',
        evidence: 'README loop description + scenes/ (8 areas) + scripts/ (13 areas)',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Automated verification',
        evidence: 'tests/SmokeTest.tscn: 190 non-destructive assertions, all green per README',
        status: 'Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Shipped build',
        evidence: 'No export/capture verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'blanky',
    slug: 'blanky',
    name: 'BLANKY',
    category: 'Game',
    platforms: ['iOS', 'Android'],
    technologies: ['Flutter', 'Dart'],
    status: 'in-development',
    visibility: 'approved',
    featured: false,
    icon: 'icons/blanky.png',
    screenshots: [
      {
        src: 'screenshots/blanky-splash.png',
        altKo: 'BLANKY 스플래시 로고',
        altEn: 'BLANKY splash logo',
        captionKo: '프로젝트 스플래시 에셋 (실행 캡처는 준비 중)',
        captionEn: 'Project splash asset (run capture pending)',
        concept: false,
      },
    ],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '빈칸 하나로 터지는 우리 이야기.',
      shortDescription:
        '20가지 파티 게임을 담은 Flutter 크로스플랫폼 파티 게임입니다.',
      overview:
        'BLANKY(블랭키)는 모두에게 같은 빈칸을 주고 익명 답변·투표·득점으로 빈칸왕을 가리는 파티 게임입니다. 빈칸 채우기·이어 말하기·퀴즈·밸런스·타자·초성·이 방의 누구·거짓말 사전·다른 질문·시간 맞히기·끝말잇기·그림·라이어·마피아 등 20종과 방·로비·온보딩·결과·저널·가이드 흐름, custom·game·home·lobby·room·result·journal·settings 기능 분리가 확인됩니다.',
      howItWorks: [
        '방을 만들고 함께 들어갑니다.',
        '20가지 중 고른 게임으로 빈칸·퀴즈·그림 대결을 펼칩니다.',
        '투표·득점으로 라운드를 쌓고 빈칸왕을 가립니다.',
      ],
      developmentNotes:
        'lib(features 9종·game·core·data·models·networking·services·widgets)와 상세 README 게임 목록, 앱 아이콘·스플래시 브랜딩이 확인됩니다. 실행 캡처는 아직 없습니다.',
      futurePlans: '실행 검증과 멀티플레이 연결 방식 문서화가 남은 상태입니다.',
    },
    en: {
      tagline: 'One blank, endless stories.',
      shortDescription: 'A Flutter cross-platform party game packing 20 party games.',
      overview:
        'BLANKY deals everyone the same fill-in-the-blank, reveals answers anonymously in random order, votes for favorites, and crowns a blank-master by score. Source shows 20 games (blanks, story chains, quizzes, balance, typing, choseong, who-in-room, lie dictionary, odd-one-out, time guessing, word chains, drawing, liar, mafia, and more) with room, lobby, onboarding, results, journal, and guide flows across 9 feature areas.',
      howItWorks: [
        'Create a room and gather everyone in.',
        'Pick from 20 games for blank, quiz, and drawing battles.',
        'Stack rounds through votes and scores to crown the blank-master.',
      ],
      developmentNotes:
        'Verified: lib (9 features, game, core, data, models, networking, services, widgets), a detailed README game list, and app-icon/splash branding. No run capture yet.',
      futurePlans: 'Run verification and multiplayer wiring docs remain.',
    },
    features: [
      {
        titleKo: '20가지 파티 게임',
        titleEn: '20 party games',
        bodyKo: '빈칸·이야기·퀴즈·밸런스·타자·초성·그림·라이어·마피아까지 한 방에 담습니다.',
        bodyEn: 'Blanks, stories, quizzes, balance, typing, choseong, drawing, liar, and mafia in one room.',
      },
      {
        titleKo: '익명 투표 라운드',
        titleEn: 'Anonymous voting rounds',
        bodyKo: '작성자를 숨기고 무작위 순서로 공개해 가장 마음에 드는 답을 뽑습니다.',
        bodyEn: 'Authors stay hidden while answers reveal in random order for fair votes.',
      },
      {
        titleKo: '방·로비 흐름',
        titleEn: 'Room and lobby flow',
        bodyKo: '온보딩·로비·결과·저널·가이드가 파티의 처음과 끝을 묶습니다.',
        bodyEn: 'Onboarding, lobby, results, journal, and guide wrap each party.',
      },
    ],
    evidence: [
      {
        feature: 'Game roster',
        evidence: 'README: 20 games listed + lib/features (custom, game, guide, home, journal, lobby, onboarding, result, room)',
        status: 'Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Brand assets',
        evidence: 'assets/branding: app_icon, splash logos + public icon copy',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Playable verification',
        evidence: 'No run capture verified',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
];
