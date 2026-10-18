import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'ko' | 'en';

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (ko: string, en: string) => string }>({
  lang: 'ko',
  setLang: () => {},
  t: (ko) => ko,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem('deskshow-lang');
      return v === 'en' ? 'en' : 'ko';
    } catch {
      return 'ko';
    }
  });
  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('deskshow-lang', l);
    } catch {}
    document.documentElement.lang = l === 'ko' ? 'ko' : 'en';
  };
  useEffect(() => {
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
  }, [lang]);
  return (
    <LangCtx.Provider value={{ lang, setLang, t: (ko, en) => (lang === 'ko' ? ko : en) }}>
      {children}
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);

export const ui = {
  ko: {
    navProjects: 'Projects',
    navAbout: 'About',
    navStack: 'Tech Stack',
    explore: '프로젝트 탐색하기',
    featured: '대표 프로젝트',
    collection: '전체 프로젝트',
    searchPh: '이름 · 기술 · 플랫폼으로 검색',
    all: '전체',
    highlights: '한눈에 보는 기록',
    aboutPreview: '작업 방향',
    viewDetail: '상세 보기',
    related: '관련 프로젝트',
    overview: '소개',
    features: '주요 기능',
    how: '사용 흐름',
    tech: '기술',
    story: '개발 노트',
    plans: '향후 계획',
    status: '상태',
    platform: '플랫폼',
    concept: 'CONCEPT',
    conceptNote: '실제 실행 화면이 아직 없어 컨셉 플레이스홀더를 표시합니다.',
    seeAllScreens: '모든 화면 보기',
    screens: '모든 화면',
    screensHint: '좌우로 넘기고 클릭하면 크게 볼 수 있습니다',
    openShot: '화면 크게 보기',
    prevScreen: '이전 화면',
    nextScreen: '다음 화면',
    noResults: '조건에 맞는 프로젝트가 없습니다.',
    back: '목록으로',
    sort: '정렬',
    recent: '최근 업데이트',
    alpha: '가나다·ABC 순',
  },
  en: {
    navProjects: 'Projects',
    navAbout: 'About',
    navStack: 'Tech Stack',
    explore: 'Explore Projects',
    featured: 'Featured Projects',
    collection: 'Project Collection',
    searchPh: 'Search name · tech · platform',
    all: 'All',
    highlights: 'Highlights',
    aboutPreview: 'Direction',
    viewDetail: 'View detail',
    related: 'Related Projects',
    overview: 'Overview',
    features: 'Key Features',
    how: 'How It Works',
    tech: 'Technology',
    story: 'Development Notes',
    plans: 'Future Plans',
    status: 'Status',
    platform: 'Platform',
    concept: 'CONCEPT',
    conceptNote: 'No verified screenshots yet — showing a concept placeholder.',
    seeAllScreens: 'See all screens',
    screens: 'All screens',
    screensHint: 'swipe sideways, click to enlarge',
    openShot: 'Open screenshot',
    prevScreen: 'Previous screenshot',
    nextScreen: 'Next screenshot',
    noResults: 'No projects match your filters.',
    back: 'Back to list',
    sort: 'Sort',
    recent: 'Recently updated',
    alpha: 'Alphabetical',
  },
} as const;
