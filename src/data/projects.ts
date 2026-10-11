import type { Project } from '../types';

/**
 * Public, approved-safe project data.
 * - No absolute local paths, no secrets, no personal emails.
 * - Every feature claim has an entry in `evidence` with a status.
 * - repositoryUrl / demoUrl are null unless a public URL was verified.
 * - screenshots: real captures only. Empty = CONCEPT placeholder UI.
 */
export const projects: Project[] = [
  {
    id: 'handy',
    slug: 'handy',
    name: 'HANDY',
    category: 'Mobile App',
    platforms: ['iOS', 'watchOS'],
    technologies: ['Swift', 'SwiftUI', 'VisionKit', 'MultipeerConnectivity', 'WidgetKit', 'xcodegen'],
    status: 'in-development',
    visibility: 'approved',
    featured: true,
    icon: 'icons/handy.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '종이 명함을, 원래 디자인 그대로.',
      shortDescription:
        '종이 명함의 앞면과 뒷면을 그대로 보관하고, 필요한 연락처 정보만 자연스럽게 건네는 iPhone 앱입니다.',
      overview:
        'HANDY는 명함을 사진으로 보관하는 것을 넘어, 스캔·공유·근거리 교환까지 한 흐름으로 연결합니다. 외부 패키지나 필수 서버 없이 동작하며, 실제 카메라 스캔과 근거리 공유는 실기기에서 확인하도록 설계되었습니다.',
      howItWorks: [
        '명함을 스캔하거나 사진 가져오기로 보관함에 저장합니다.',
        '건네기 탭에서 공개할 항목만 골라 QR·근처 공유·연락처 만들기로 전달합니다.',
        '받은 명함은 보관함에서 검색하고 위젯·워치에서 빠르게 확인합니다.',
      ],
      developmentNotes:
        'SwiftUI 기반 네이티브 앱으로 Features/Scanner, Sharing, NFC, NameDrop, Library 모듈이 소스에서 확인됩니다. Info.plist는 project.yml에서 생성되는 xcodegen 구조입니다.',
      futurePlans:
        '배포용 Signing(Team 지정)과 실기기 검증이 남은 상태로 README에 TODO로 명시되어 있습니다.',
    },
    en: {
      tagline: 'Paper business cards, kept as designed.',
      shortDescription:
        'An iPhone app that keeps both sides of a paper business card and shares only what you choose.',
      overview:
        'HANDY connects scanning, storing, and proximity sharing in one flow. It has no external packages or required servers; camera scanning and nearby sharing are designed for real devices.',
      howItWorks: [
        'Scan a card or import a photo into your library.',
        'Pick only the fields to share via QR, nearby sharing, or contact creation.',
        'Find cards in the library and glance at them from widgets and Watch.',
      ],
      developmentNotes:
        'A native SwiftUI app. Scanner, Sharing, NFC, NameDrop, and Library modules are verified in source. Info.plist is generated from project.yml (xcodegen).',
      futurePlans:
        'Distribution signing (Team) and on-device verification remain as TODO items in the README.',
    },
    features: [
      {
        titleKo: '명함 앞뒤 보관',
        titleEn: 'Front-and-back archive',
        bodyKo: '명함의 앞면과 뒷면을 원래 디자인 그대로 보관합니다.',
        bodyEn: 'Keep both sides of each card exactly as designed.',
      },
      {
        titleKo: '선택 공유',
        titleEn: 'Selective sharing',
        bodyKo: '건넬 연락처 항목만 골라 QR·근처 공유·연락처 만들기로 전달합니다.',
        bodyEn: 'Share only selected fields via QR, nearby sharing, or contact creation.',
      },
      {
        titleKo: '위젯과 워치',
        titleEn: 'Widgets and Watch',
        bodyKo: '자주 쓰는 내 카드를 위젯과 워치에서 빠르게 꺼낼 수 있는 구조가 확인됩니다.',
        bodyEn: 'Frequently used cards are reachable from widgets and Watch.',
      },
    ],
    evidence: [
      {
        feature: 'Card library models',
        evidence: 'HANDY/Models/BusinessCard.swift, CardTypes.swift',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Scanner feature module',
        evidence: 'HANDY/Features/Scanner + README VisionKit note',
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
    technologies: ['Expo SDK 57', 'React Native', 'TypeScript', 'Expo Router', 'expo-sqlite', 'MapLibre', 'Firebase'],
    status: 'in-development',
    visibility: 'approved',
    featured: true,
    icon: 'icons/spotory.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '지도 위의 한 점을, 한 장의 이야기로.',
      shortDescription:
        '지도 위의 장소를 직접 방문해 사진과 기록으로 남기는 iOS·Android 탐험 기록 앱입니다.',
      overview:
        'Spotory는 MapLibre 기반 지도 위에 미션·핀·완료 사진을 쌓아가는 탐험 기록 앱입니다. 사진과 개인 기록은 기기에 우선 저장되고, 계정 없이 핵심 기능을 쓸 수 있습니다. 선택적 Firebase 로그인과 공개 미션, 온라인 영토 기능이 별도로 제공됩니다.',
      howItWorks: [
        '지도에서 미션을 고르고 직접 방문합니다.',
        '현장에서 사진을 찍고 체크리스트로 인증합니다.',
        '앨범·통계·배지로 탐험을 되돌아봅니다.',
      ],
      developmentNotes:
        'Expo SDK 57 + React Native 0.86 + TypeScript 6, Expo Router, Zustand, expo-sqlite 구조가 package.json과 src/features·database에서 확인됩니다. 네이티브 모듈 때문에 Expo Go가 아닌 Development Build가 필요합니다.',
      futurePlans: '공개 미션·신고·차단 등 온라인 기능의 운영 정책 확정이 남은 것으로 보입니다.',
    },
    en: {
      tagline: 'Visit a spot. Keep its story.',
      shortDescription:
        'An iOS and Android field-log app for visiting map spots and keeping photo stories.',
      overview:
        'Spotory layers missions, pins, and finished photos on a MapLibre map. Photos and personal logs stay on-device first; core features work without an account. Optional Firebase sign-in unlocks public missions and territory play.',
      howItWorks: [
        'Pick a mission on the map and visit it in person.',
        'Take a photo on site and verify with a checklist.',
        'Revisit explorations through albums, stats, and badges.',
      ],
      developmentNotes:
        'Verified stack: Expo SDK 57, React Native 0.86, TypeScript 6, Expo Router, Zustand, expo-sqlite. Native modules require a Development Build, not Expo Go.',
      futurePlans: 'Online moderation policies for public missions appear to remain open.',
    },
    features: [
      {
        titleKo: '현장 인증 탐험',
        titleEn: 'On-site verified exploration',
        bodyKo: '거리·GPS 오차를 반영한 위치 기반 활성화와 도보 내비게이션으로 현장을 인증합니다.',
        bodyEn: 'Location activation with distance and GPS tolerance plus walking guidance.',
      },
      {
        titleKo: '오프라인 우선 기록',
        titleEn: 'Offline-first logs',
        bodyKo: '원본·썸네일 분리 저장과 로컬 프로필·통계·배지가 기기 안에서 동작합니다.',
        bodyEn: 'Split original/thumbnail storage with local profile, stats, and badges on-device.',
      },
      {
        titleKo: '선택적 온라인',
        titleEn: 'Optional online',
        bodyKo: 'Firebase 로그인 시 공개 미션과 온라인 영토를 선택적으로 쓸 수 있습니다.',
        bodyEn: 'Firebase sign-in optionally unlocks public missions and online territory.',
      },
    ],
    evidence: [
      {
        feature: 'Map + location stack',
        evidence: 'package.json: MapLibre, expo-location, expo-camera',
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
        feature: 'Public release',
        evidence: 'No store listing URL verified',
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
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '순간을 찍으면, 분위기가 들린다.',
      shortDescription:
        '사진을 찍으면 기기 안 AI가 분위기를 읽고 4–8초 영상을 만들어 주는 Flutter 카메라 앱입니다.',
      overview:
        'VIBLOG는 촬영·AI 분석·음악 매칭·영상 렌더링을 모두 기기 안에서 처리하는 것을 목표로 합니다. 유료 AI API 없이 Apple Vision과 번들된 ML Kit을 쓰고, 음악은 자체 CC0 내장곡과 무료 Openverse 추천을 병행합니다. 완성은 9:16 순간 영상으로 저장·공유됩니다.',
      howItWorks: [
        '사진이나 짧은 영상을 찍거나 포토부스로 연속 촬영합니다.',
        '기기 안 분석이 바이브·무드·장르를 추정하고 음악을 매칭합니다.',
        '편집기에서 다듬고 9:16 영상으로 저장·공유합니다.',
      ],
      developmentNotes:
        'Flutter 단일 코드베이스(lib/ai·audio·video·music_room), Riverpod, Supabase, AdMob 구조가 pubspec.yaml과 lib 디렉터리에서 확인됩니다.',
      futurePlans: '스토어 출시 여부와 서버 설정 연동 상태는 미확인으로 표기합니다.',
    },
    en: {
      tagline: 'Shoot the moment. Hear the vibe.',
      shortDescription:
        'A Flutter camera app that reads the mood on-device and turns photos into 4–8s videos.',
      overview:
        'VIBLOG aims to keep capture, AI analysis, music matching, and rendering fully on-device. It avoids paid AI APIs via Apple Vision and bundled ML Kit, pairing built-in CC0 tracks with free Openverse suggestions. Results are saved and shared as 9:16 moment videos.',
      howItWorks: [
        'Capture a photo or clip, or use the photo-booth burst mode.',
        'On-device analysis estimates vibe, mood, and genre, then matches music.',
        'Polish in the editor and save or share a 9:16 video.',
      ],
      developmentNotes:
        'Single Flutter codebase (lib/ai, audio, video, music_room), Riverpod, Supabase, AdMob — verified in pubspec.yaml and lib/.',
      futurePlans: 'Store release and server-settings wiring are marked unverified.',
    },
    features: [
      {
        titleKo: '온디바이스 AI 분석',
        titleEn: 'On-device AI analysis',
        bodyKo: '장면·사물·얼굴 위치·색감을 기기 안에서 분석해 바이브를 추정합니다.',
        bodyEn: 'Scene, object, face-position, and color analysis run fully on-device.',
      },
      {
        titleKo: '포토부스와 꾸미기',
        titleEn: 'Photo booth and styling',
        bodyKo: '타이머 연속 촬영, 실시간 필터, 얼굴 추적 스티커, 173종 레이아웃 꾸미기가 문서에 정리되어 있습니다.',
        bodyEn: 'Burst capture, live filters, face-tracking stickers, and 173 layouts are documented.',
      },
      {
        titleKo: '저작권 안전한 음악',
        titleEn: 'Rights-safe music',
        bodyKo: 'CC0 내장곡과 CC0·Public Domain·CC BY 추천만 사용하고 라이선스를 자동 표기합니다.',
        bodyEn: 'Built-in CC0 tracks plus CC0 / Public Domain / CC BY suggestions with auto credit.',
      },
    ],
    evidence: [
      {
        feature: 'On-device analysis modules',
        evidence: 'lib/ai + camera/image_picker/video_player deps',
        status: 'Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Music licensing flow',
        evidence: 'README music policy + lib/audio, lib/music_room',
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
    technologies: ['Expo', 'React Native', 'TypeScript', 'matter-js', 'Reanimated', 'AsyncStorage'],
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
        '숫자를 합치는 게임이 아니라, 숫자 사이의 관계를 경로로 설계하는 모바일 퍼즐 게임입니다.',
      overview:
        'Chain Zero는 인접한 숫자 카드를 드래그해 경로를 그리고, 계산 결과와 규칙 충족을 실시간으로 확인한 뒤 손을 떼어 판정하는 퍼즐입니다. 로그인·서버·인터넷·유료 API 없이 Expo Go에서 바로 실행됩니다.',
      howItWorks: [
        '인접한 숫자 카드를 터치하고 드래그해 경로를 그립니다.',
        '계산 결과와 규칙 충족을 실시간으로 확인합니다.',
        '손을 떼어 판정하고 연쇄 효과와 중력으로 보드를 정리합니다.',
      ],
      developmentNotes:
        'src/game·screens·state·services와 matter-js·Reanimated·Gesture Handler 의존성이 확인됩니다. README는 미구현 범위(보드 스와이프, 병합, 성장 시스템)를 명시하고 있습니다.',
      futurePlans: '스테이지·규칙 카드 확장과 릴리스 빌드 검증이 다음 단계로 보입니다.',
    },
    en: {
      tagline: 'Design the relations between numbers.',
      shortDescription:
        'A mobile puzzle game about drawing paths between numbers, not merging them.',
      overview:
        'Chain Zero lets you drag across adjacent number cards, preview results and satisfied rules live, then release to judge the stage. It runs in Expo Go with no login, server, connection, or paid API.',
      howItWorks: [
        'Touch and drag across adjacent number cards.',
        'Preview the computed result and satisfied rules live.',
        'Release to judge, clear chains, and settle the board with gravity.',
      ],
      developmentNotes:
        'Verified: src/game, screens, state, services plus matter-js, Reanimated, Gesture Handler. The README explicitly lists out-of-scope mechanics.',
      futurePlans: 'More stages, rule cards, and release-build verification look like next steps.',
    },
    features: [
      {
        titleKo: '경로 설계 퍼즐',
        titleEn: 'Path-drawing puzzle',
        bodyKo: '숫자 이동·병합이 아니라 경로 설계와 규칙 판정이 핵심 루프입니다.',
        bodyEn: 'Path design and rule judgment — not sliding or merging — is the core loop.',
      },
      {
        titleKo: '실시간 규칙 피드백',
        titleEn: 'Live rule feedback',
        bodyKo: '드래그 중 계산 결과와 충족 규칙을 바로 보여줍니다.',
        bodyEn: 'Computed results and satisfied rules preview while you drag.',
      },
      {
        titleKo: '완전 오프라인',
        titleEn: 'Fully offline',
        bodyKo: '로그인·서버·인터넷 연결 없이 실행됩니다.',
        bodyEn: 'Runs with no login, server, or internet connection.',
      },
    ],
    evidence: [
      {
        feature: 'Game loop',
        evidence: 'README play loop + src/game, src/screens',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Quality gate',
        evidence: 'package.json: npm run check (tsc + vitest + expo-doctor)',
        status: 'Implemented',
        confidence: 'High',
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
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '하루를 영수증처럼 기록하다.',
      shortDescription:
        '하루의 순간·집중·기분을 영수증 형식으로 모아보는 iOS 라이프 로그 앱입니다.',
      overview:
        'RECEIPT는 Today·Archive·위젯 흐름으로 하루를 기록합니다. SwiftData 기반 로컬 저장과 HealthKit·위치·사진 연동 구조가 소스에서 확인되며, 연간·월간 영수증 보기가 Archive 모듈에 정리되어 있습니다.',
      howItWorks: [
        '오늘의 순간과 집중 세션을 기록합니다.',
        '하루 영수증으로 모아 확인하고 이미지로 내보냅니다.',
        '월·연간 아카이브와 위젯으로 흐름을 되돌아봅니다.',
      ],
      developmentNotes:
        'Models/SharedModelContainer·ReceiptStore와 Today·Archive·Onboarding 뷰, RECEIPTWidget이 확인됩니다. xcodegen(project.yml) 구조입니다.',
      futurePlans: '클라우드 동기화 유무와 스토어 출시는 미확인으로 표기합니다.',
    },
    en: {
      tagline: 'Your day, printed as a receipt.',
      shortDescription:
        'An iOS life-log app that collects moments, focus, and mood like a printed receipt.',
      overview:
        'RECEIPT records the day through Today, Archive, and widget flows. Local SwiftData storage with Health, location, and photo wiring is visible in source, alongside yearly and monthly receipt views.',
      howItWorks: [
        'Log moments and focus sessions for today.',
        'Review the daily receipt and export it as an image.',
        'Revisit flows via monthly, yearly archives and widgets.',
      ],
      developmentNotes:
        'Verified: SharedModelContainer, ReceiptStore, Today/Archive/Onboarding views, RECEIPTWidget. xcodegen (project.yml) structure.',
      futurePlans: 'Cloud sync and store release are marked unverified.',
    },
    features: [
      {
        titleKo: '데일리 영수증',
        titleEn: 'Daily receipt',
        bodyKo: '하루 기록을 영수증 레이아웃으로 모아보고 이미지로 내보냅니다.',
        bodyEn: 'Collect the day in a receipt layout and export it as an image.',
      },
      {
        titleKo: '월·연간 아카이브',
        titleEn: 'Monthly and yearly archives',
        bodyKo: '캘린더·월간·연간 보기로 흐름을 되돌아봅니다.',
        bodyEn: 'Calendar, monthly, and yearly views trace long-term flows.',
      },
      {
        titleKo: '로컬 우선 저장',
        titleEn: 'Local-first storage',
        bodyKo: 'SwiftData 기반 로컬 저장 구조가 확인됩니다.',
        bodyEn: 'SwiftData-based local storage is verified in source.',
      },
    ],
    evidence: [
      {
        feature: 'Receipt data layer',
        evidence: 'Models/DailyReceipt, ReceiptStore, SharedModelContainer',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Archive views',
        evidence: 'Views/Archive: Calendar, Monthly, Yearly',
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
    technologies: ['React', 'TypeScript', 'Vite', 'Express', 'Prisma', 'Capacitor', 'Electron', 'Zustand'],
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
        '채팅·협업·지라 스타일 프로젝트 관리를 담은 풀스택 MVP로, 무료 로컬 실행을 최우선으로 설계되었습니다.',
      overview:
        'FlowWorks는 React 웹 + Express API + 선택적 Prisma 구조 위에, 기본 스탠드얼론 모드(브라우저 저장소만으로 동작)와 무료 로컬 JSON API 모드를 제공합니다. Capacitor와 Electron으로 모바일·데스크탑 확장이 같은 코드베이스에서 이어집니다.',
      howItWorks: [
        '스탠드얼론 모드에서 설치 없이 바로 씁니다.',
        '필요하면 무료 로컬 API를 켜고 팀 데이터로 확장합니다.',
        '같은 빌드를 PWA·모바일·데스크탑으로 패키징합니다.',
      ],
      developmentNotes:
        'package.json의 dev:api:free·build:pwa·desktop:build 스크립트와 backend JSON 저장소가 확인됩니다. Prisma 스키마는 이후 유료 이전용 옵션으로 분리되어 있습니다.',
      futurePlans: '프로덕션 DB 마이그레이션과 호스팅 운영 정책은 미확정으로 표기합니다.',
    },
    en: {
      tagline: 'A collaboration MVP that runs server-free.',
      shortDescription:
        'A full-stack MVP for chat and Jira-style project work, designed to run free and local first.',
      overview:
        'FlowWorks pairs a React web app with an Express API and optional Prisma layer. A standalone mode runs on browser storage alone, while a free local JSON API mode extends it for teams. Capacitor and Electron package the same build for mobile and desktop.',
      howItWorks: [
        'Start instantly in standalone mode with no setup.',
        'Turn on the free local API to scale to team data.',
        'Package the same build as PWA, mobile, or desktop.',
      ],
      developmentNotes:
        'Verified scripts: dev:api:free, build:pwa, desktop:build, plus a backend JSON store. The Prisma schema stays an optional later migration path.',
      futurePlans: 'Production database migration and hosting policy are marked undecided.',
    },
    features: [
      {
        titleKo: '스탠드얼론 PWA',
        titleEn: 'Standalone PWA',
        bodyKo: 'API 서버 없이 브라우저 저장소만으로 동작하고 설치할 수 있습니다.',
        bodyEn: 'Runs on browser storage alone with no API server, installable as a PWA.',
      },
      {
        titleKo: '무료 로컬 API',
        titleEn: 'Free local API',
        bodyKo: '로컬 JSON 파일 저장으로 유료 DB 없이 팀 기능을 시험할 수 있습니다.',
        bodyEn: 'A local JSON store lets teams trial features with no paid database.',
      },
      {
        titleKo: '멀티 패키징',
        titleEn: 'Multi packaging',
        bodyKo: '같은 빌드를 Capacitor·Electron으로 모바일·데스크탑에 얹습니다.',
        bodyEn: 'The same build ships to mobile and desktop via Capacitor and Electron.',
      },
    ],
    evidence: [
      {
        feature: 'Standalone mode',
        evidence: 'README standalone section + build:pwa script',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Local JSON API',
        evidence: 'backend/src/server.ts + FLOWWORKS_DATA_PATH',
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
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '바이닐 문화에서 온 플레이리스트 소셜.',
      shortDescription:
        '바이닐 문화에서 영감을 받은 크로스플랫폼 플레이리스트 소셜 앱입니다.',
      overview:
        'Side A는 Expo 모노레포(apps/mobile·apps/api·packages)와 Cloudflare Workers + D1 구조로, 유료 음악 API나 호스팅 오디오 없이 플레이리스트 소셜을 구현합니다. 기본 실행은 허구 로컬 데모로 명확히 표기되어 있고, 핵심 API 테스트는 통과 상태로 문서화되어 있습니다.',
      howItWorks: [
        '로컬 데모 모드에서 플레이리스트를 만들고 탐색합니다.',
        '로그인 연동 시 실제 계정 플로우를 시험합니다.',
        '웹 빌드를 무료 티어에 배포합니다.',
      ],
      developmentNotes:
        'npm workspaces, typecheck·lint·vitest 게이트, docs/VALIDATION·XCODE 문서가 확인됩니다. 아직 git 저장소가 아니라는 점이 README에 명시되어 있습니다.',
      futurePlans: '검증된 프로덕션 릴리스가 아니며 출시 QA 진행 중으로 표기합니다.',
    },
    en: {
      tagline: 'Playlist social, pressed like vinyl.',
      shortDescription: 'A cross-platform playlist social app inspired by vinyl culture.',
      overview:
        'Side A is an Expo monorepo (apps/mobile, apps/api, packages) on Cloudflare Workers + D1 with no paid music API or hosted audio. It launches by default in a clearly labelled fictional local demo; core API tests pass per docs.',
      howItWorks: [
        'Create and explore playlists in local demo mode.',
        'Try real account flows when login is wired up.',
        'Deploy the web build to a free tier.',
      ],
      developmentNotes:
        'Verified: npm workspaces, typecheck/lint/vitest gates, docs/VALIDATION and XCODE. The README states it is not yet a git repo.',
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
        bodyKo: 'Cloudflare Workers + D1 조합으로 유료 의존 없이 설계되었습니다.',
        bodyEn: 'Cloudflare Workers + D1 with no paid dependencies by design.',
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
        feature: 'Monorepo structure',
        evidence: 'package.json workspaces apps/* packages/*',
        status: 'Implemented',
        confidence: 'High',
      },
      {
        feature: 'Core API tests',
        evidence: 'docs/VALIDATION.md (per README)',
        status: 'Partially Implemented',
        confidence: 'Medium',
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
    category: 'Mobile App',
    platforms: ['iOS', 'Android'],
    technologies: ['Expo', 'React Native', 'TypeScript', 'React Navigation'],
    status: 'partial',
    visibility: 'approved',
    featured: false,
    icon: 'icons/recordflow.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: '기록의 흐름을 가볍게.',
      shortDescription:
        '가볍게 기록하고 흐름으로 되돌아보는 Expo 기반 모바일 기록 앱입니다.',
      overview:
        'RecordFlow는 Expo + React Navigation 탭 구조 위에 파일 시스템 기반 기록 흐름을 얹은 초기 단계 프로젝트입니다. 확인된 의존성은 expo-file-system·blur·safe-area로, 무거운 서버 없이 기기 저장을 전제로 합니다.',
      howItWorks: [
        '탭을 오가며 기록을 남깁니다.',
        '저장된 흐름을 시간 순으로 확인합니다.',
        '필요한 기록을 다시 꺼내 씁니다.',
      ],
      developmentNotes:
        'package.json(Expo 54 + React Navigation 7)과 src 존재가 확인되나, 상세 기능 문서는 부족해 부분 구현으로 표기합니다.',
      futurePlans: '기능 문서화와 실행 검증이 남은 상태입니다.',
    },
    en: {
      tagline: 'Lightweight logging, gentle flow.',
      shortDescription: 'An early-stage Expo mobile logger built around a gentle timeline flow.',
      overview:
        'RecordFlow is an early Expo + React Navigation tab app with a file-system-backed log flow. Verified dependencies (expo-file-system, blur, safe-area) point at on-device storage with no heavy server.',
      howItWorks: [
        'Capture logs across tabs.',
        'Review the saved flow chronologically.',
        'Pull records back up when needed.',
      ],
      developmentNotes:
        'Verified: Expo 54 + React Navigation 7 with src present. Feature docs are thin, so this is marked partial.',
      futurePlans: 'Feature documentation and run verification remain.',
    },
    features: [
      {
        titleKo: '탭 기반 기록',
        titleEn: 'Tab-based logging',
        bodyKo: '하단 탭 구조로 빠르게 기록을 남깁니다.',
        bodyEn: 'Bottom-tab structure for fast capture.',
      },
      {
        titleKo: '기기 저장 전제',
        titleEn: 'On-device storage',
        bodyKo: '파일 시스템 의존으로 로컬 저장을 전제로 설계되었습니다.',
        bodyEn: 'File-system dependencies assume local storage.',
      },
    ],
    evidence: [
      {
        feature: 'Navigation shell',
        evidence: 'package.json: React Navigation 7 + expo',
        status: 'Partially Implemented',
        confidence: 'Medium',
      },
      {
        feature: 'Full feature set',
        evidence: 'No feature docs verified',
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
    technologies: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Prisma', 'Capacitor', 'next-auth'],
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
        '미니홈피 감성을 Next.js와 Capacitor로 다시 만든 레트로 소셜 웹 프로젝트입니다.',
      overview:
        'Cyworld 2026(패키지명 vibesphere-2026)은 Next.js 16 + Prisma + next-auth 구조에 Capacitor를 얹어 웹·모바일 확장을 노립니다. 미니룸·방명록 계열의 소셜 흐름이 소스 구조에 드러나나, 완성도는 초기 단계로 표기합니다.',
      howItWorks: [
        '웹에서 미니홈피를 꾸미고 글을 남깁니다.',
        'Capacitor 빌드로 모바일 셸에 얹습니다.',
        '지인 흐름으로 확장합니다.',
      ],
      developmentNotes:
        'package.json(Next 16, Prisma, Capacitor, next-auth)과 ios·android·capacitor.config.ts 존재가 확인됩니다.',
      futurePlans: '인증·DB 운영 정책과 모바일 빌드 검증이 남은 상태입니다.',
    },
    en: {
      tagline: 'Mini-homepage nostalgia, rebuilt modern.',
      shortDescription: 'A retro-social web project rebuilding mini-homepage vibes with Next.js and Capacitor.',
      overview:
        'Cyworld 2026 (package: vibesphere-2026) pairs Next.js 16 + Prisma + next-auth with Capacitor for web-to-mobile reach. Mini-room and guestbook-style social flows appear in structure, but maturity is early.',
      howItWorks: [
        'Decorate a mini homepage and leave posts on the web.',
        'Wrap it in a mobile shell via Capacitor builds.',
        'Grow it through friend flows.',
      ],
      developmentNotes:
        'Verified: Next 16, Prisma, Capacitor, next-auth in package.json with ios/, android/, capacitor.config.ts present.',
      futurePlans: 'Auth, database policy, and mobile build verification remain.',
    },
    features: [
      {
        titleKo: '미니홈피 소셜',
        titleEn: 'Mini-homepage social',
        bodyKo: '꾸미기와 방명록 흐름의 레트로 소셜을 지향합니다.',
        bodyEn: 'Retro social around decorating and guestbooks.',
      },
      {
        titleKo: '웹-모바일 확장',
        titleEn: 'Web-to-mobile',
        bodyKo: 'Capacitor로 같은 웹을 모바일 셸에 얹습니다.',
        bodyEn: 'The same web ships in a mobile shell via Capacitor.',
      },
    ],
    evidence: [
      {
        feature: 'Web + Capacitor shell',
        evidence: 'capacitor.config.ts + ios/ + android/',
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
        'FlowNote(PDFLOW)는 Apple Pencil 필기와 PDF 주석, Notion식 블록 편집, 온디바이스 학습 도구를 지향합니다. 다만 README가 현재 빌드·실행 불가 상태임을 명시하고 있어, DESKSHOW에서는 기획(Planned)으로만 표기합니다.',
      howItWorks: [
        '기획 문서와 스펙을 먼저 확정합니다.',
        '빌드 가능 상태가 되면 실행 화면을 확보합니다.',
        '그때 소개 콘텐츠를 구현 기준으로 갱신합니다.',
      ],
      developmentNotes:
        'docs 아키텍처와 apps/ipad 스켈레톤은 있으나, 빌드 불가 상태가 README에 명시되어 있습니다. 실행된 것처럼 소개하지 않습니다.',
      futurePlans: '빌드 복구가 최우선이며, 그 전까지 공개하지 않습니다.',
    },
    en: {
      tagline: 'A local-first iPad study-note experiment.',
      shortDescription:
        'An iPad-native study-note concept combining pencil, PDF, and block editing.',
      overview:
        'FlowNote (PDFLOW) aims at Pencil notes, PDF annotation, Notion-like blocks, and on-device study tools. Its README states it cannot currently build or run, so DESKSHOW lists it as Planned only.',
      howItWorks: [
        'Finalize specs and architecture docs first.',
        'Capture real screens once it builds.',
        'Update the write-up from implemented code only then.',
      ],
      developmentNotes:
        'Docs and an apps/ipad skeleton exist, but the README marks it not buildable. It is not presented as running.',
      futurePlans: 'Build recovery comes first; no public launch before that.',
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
        evidence: 'README: NOT READY / cannot build or run',
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
    platforms: ['macOS', 'Web'],
    technologies: ['Godot', 'GDScript'],
    status: 'unverified',
    visibility: 'approved',
    featured: false,
    icon: 'icons/rodeblockrush.svg',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: 'Godot 러너 프로토타입.',
      shortDescription:
        'Godot 프로젝트 구조가 확인되는 러너 계열 게임 프로토타입입니다.',
      overview:
        'RodeblockRush는 project.godot와 Godot 폴더 구조가 확인되나, 플레이 루프·에셋·실행 화면은 아직 검증하지 못했습니다. DESKSHOW에서는 미확인(Unverified)으로 표기하고 가짜 화면을 쓰지 않습니다.',
      howItWorks: ['프로젝트 실행 검증이 필요합니다.', '실행 화면 확보 후 소개를 갱신합니다.'],
      developmentNotes: 'project.godot 존재만 확인됨. 상세 분석은 스캔 후속 단계로 미뤄졌습니다.',
      futurePlans: '실행 검증과 장르·조작 문서화가 필요합니다.',
    },
    en: {
      tagline: 'A Godot runner prototype.',
      shortDescription: 'A runner-style game prototype with a verified Godot project structure.',
      overview:
        'RodeblockRush has a verified project.godot and Godot folder layout, but its loop, assets, and runnable screens are not yet verified. DESKSHOW lists it as Unverified with no fake screens.',
      howItWorks: ['Run verification is needed.', 'The write-up updates after real captures.'],
      developmentNotes: 'Only project.godot verified so far; deeper analysis is deferred to a later scan.',
      futurePlans: 'Run verification plus genre and control documentation are needed.',
    },
    features: [
      {
        titleKo: '구조 확인됨',
        titleEn: 'Structure verified',
        bodyKo: 'Godot 프로젝트 파일이 존재합니다.',
        bodyEn: 'A Godot project file exists.',
      },
    ],
    evidence: [
      {
        feature: 'Playable build',
        evidence: 'project.godot only; no run captured',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
  {
    id: 'blanky',
    slug: 'blanky',
    name: 'BLANKY',
    category: 'Mobile App',
    platforms: ['iOS', 'Android'],
    technologies: ['Flutter', 'Dart'],
    status: 'unverified',
    visibility: 'approved',
    featured: false,
    icon: 'icons/blanky.png',
    screenshots: [],
    videos: [],
    repositoryUrl: null,
    demoUrl: null,
    updatedAt: '2026-10-11',
    ko: {
      tagline: 'Flutter 구조가 확인된 초기 프로젝트.',
      shortDescription:
        'Flutter 앱 구조(pubspec·lib·android·ios)가 확인되는 초기 단계 프로젝트입니다.',
      overview:
        'BLANKY는 Flutter 프로젝트 뼈대가 확인되나, 기능·화면·상태는 아직 검증하지 못했습니다. 성급하게 소개하지 않고 미확인으로 표기합니다.',
      howItWorks: ['상세 스캔 후 소개를 작성합니다.'],
      developmentNotes: 'pubspec.yaml·lib 존재만 확인됨.',
      futurePlans: '코드 분석과 실행 검증이 필요합니다.',
    },
    en: {
      tagline: 'An early Flutter project, structure verified.',
      shortDescription: 'An early-stage project with a verified Flutter structure.',
      overview:
        'BLANKY has a verified Flutter skeleton (pubspec, lib, android, ios), but features, screens, and status are not yet verified. It stays Unverified until a deeper scan.',
      howItWorks: ['A write-up follows a deeper scan.'],
      developmentNotes: 'Only pubspec.yaml and lib verified so far.',
      futurePlans: 'Code analysis and run verification are needed.',
    },
    features: [
      {
        titleKo: '구조 확인됨',
        titleEn: 'Structure verified',
        bodyKo: 'Flutter 기본 구조가 존재합니다.',
        bodyEn: 'A base Flutter structure exists.',
      },
    ],
    evidence: [
      {
        feature: 'Feature set',
        evidence: 'No feature code reviewed yet',
        status: 'Unverified',
        confidence: 'High',
      },
    ],
  },
];
