import { useEffect } from 'react';
import { useLang } from '../i18n';

export function About() {
  const { lang, t } = useLang();
  useEffect(() => {
    document.title = 'About — DESKSHOW';
  }, []);
  return (
    <main className="wrap section prose">
      <h2>About</h2>
      <p>
        {t(
          'DESKSHOW는 데스크탑의 실제 프로젝트를 분석해, 검증된 내용만 소개하는 개발자 쇼케이스입니다. 승인하지 않은 내부 파일은 절대 공개하지 않으며, 서버·유료 API 없이 GitHub Pages에서 운영됩니다.',
          'DESKSHOW is a developer showcase built from real desktop projects, presenting only verified facts. Nothing unapproved is published, and it runs on GitHub Pages with no servers or paid APIs.',
        )}
      </p>
      <p className="muted">
        {t(
          '이 페이지의 소개는 공개 승인된 정보로만 구성됩니다. 새 프로젝트 추가는 npm run scan → 검토 → 승인의 순서로 진행됩니다.',
          'This page only contains approved public info. New projects follow: npm run scan → review → approve.',
        )}
      </p>
      <p className="muted" style={{ fontSize: 13 }}>
        Lang: {lang} · {t('기본 언어는 한국어이며 영어로 전환할 수 있습니다.', 'Korean by default, switchable to English.')}
      </p>
    </main>
  );
}
