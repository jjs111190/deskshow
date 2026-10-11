import { useEffect } from 'react';
import { ProjectCollection } from '../components/ProjectCollection';
import { useLang } from '../i18n';

export function Projects() {
  const { lang } = useLang();
  useEffect(() => {
    document.title = lang === 'ko' ? 'DESKSHOW — 프로젝트' : 'DESKSHOW — Projects';
  }, [lang]);
  return (
    <main className="wrap section">
      <h2>Projects</h2>
      <p className="sub">Search and filters run fully in the browser. Shareable via URL.</p>
      <ProjectCollection />
    </main>
  );
}
