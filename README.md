# DESKSHOW — Your Apps, Beautifully Presented.

개발한 프로젝트를 하나씩 등록할 필요 없이, 로컬 프로젝트를 분석해 코드에 근거한 소개 페이지를 만드는 개발자 쇼케이스.
정적 빌드 + GitHub Pages 무료 배포. 서버·유료 API 없음.

## 빠른 시작

```bash
npm install
npm run dev        # 로컬 미리보기
npm run scan       # 데스크탑 프로젝트 탐색 (READ-ONLY, content/discovery.json)
npm run analyze    # 탐색 결과 vs 사이트 수록 비교
npm run validate:public  # 공개 전 보안 검사 (반드시 통과)
npm test           # 공개 데이터 테스트
npm run build      # 정적 빌드 (dist/)
npm run preview    # 빌드 결과 미리보기
```

## 기술 선택 근거

- **Vite + React + TypeScript**: spec 우선 검토안. 정적 호스팅 호환·base path·상대경로·SEO·sitemap을 직접 제어.
- **Tailwind 미사용**: 기본 디자인 시스템(Apple product + App Store editorial + minimal portfolio)이 소규모 정적 사이트에는 단일 CSS가 더 가볍고 Lighthouse에 유리. 전역 일관성 유지.
- **HashRouter**: GitHub Pages SPA 새로고침 404 회피. 깊은 링크·공유 안정.
- **lucide-react + zod**: 무료 OSS. 아이콘·데이터 검증용.
- **/plain CSS motion**: `prefers-reduced-motion` 지원, 무거운 3D 없음.

## 공개 원칙

- 모든 프로젝트는 `visibility: 'private-draft'`로 시작.
- `repositoryUrl`·`demoUrl`은 실제 주소 확인 전까지 `null`.
- 실제 스크린샷 없이는 CONCEPT 플레이스홀더만 표시. 가짜를 실화면처럼 쓰지 않음.
- 기능 상태: Implemented / Partially Implemented / Planned / Unverified를 `evidence`에 근거와 함께 기록.
- `.local-analysis/`와 `content/discovery.json`의 로컬 경로는 절대 빌드에 포함하지 않음.

## 새 프로젝트 추가

1. `npm run scan` → `content/discovery.json`에서 신규 탐지 확인
2. `src/data/projects.ts`에 초안 추가 (`visibility: 'private-draft'`)
3. `npm run validate:public && npm test && npm run build && npm run preview`
4. 승인 목록(아래 리포트)으로 사용자에게 공개 승인 요청
5. 승인된 것만 `visibility: 'approved'`로 전환 후 main push → Pages 자동 배포
