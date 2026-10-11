import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useLang } from '../i18n';

export function Stack() {
  const { t } = useLang();
  useEffect(() => {
    document.title = 'Tech Stack — DESKSHOW';
  }, []);
  const counts = new Map<string, number>();
  for (const p of projects) for (const tech of p.technologies) counts.set(tech, (counts.get(tech) ?? 0) + 1);
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  return (
    <main className="wrap section">
      <h2>Tech Stack</h2>
      <p className="sub">
        {t('실제 분석된 프로젝트에서 집계했습니다.', 'Aggregated from actually analyzed projects.')}
      </p>
      <div className="grid">
        {sorted.map(([tech, n]) => (
          <div className="card" key={tech}>
            <h3>{tech}</h3>
            <p className="muted">
              {n} project{n > 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
