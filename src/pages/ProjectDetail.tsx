import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard, initial, iconUrl } from '../components/ProjectCard';
import { DEMOS } from './Demo';
import { FlaskConical } from 'lucide-react';
import { useLang, ui } from '../i18n';

const shotUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;

const statusLabel: Record<string, { ko: string; en: string }> = {
  implemented: { ko: '구현 완료', en: 'Implemented' },
  'in-development': { ko: '개발 중', en: 'In development' },
  partial: { ko: '부분 구현', en: 'Partially implemented' },
  planned: { ko: '기획', en: 'Planned' },
  unverified: { ko: '미확인', en: 'Unverified' },
};

export function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const s = ui[lang];
  const [lightbox, setLightbox] = useState<string | null>(null);
  const p = projects.find((x) => x.slug === slug);

  useEffect(() => {
    if (p) document.title = `${p.name} — DESKSHOW`;
    window.scrollTo(0, 0);
  }, [slug, p]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  if (!p) {
    return (
      <main className="wrap section">
        <p>Not found.</p>
        <Link to="/projects">{s.back}</Link>
      </main>
    );
  }
  const tr = p[lang];
  const related = projects
    .filter((x) => x.id !== p.id && x.platforms.some((pl) => p.platforms.includes(pl)))
    .slice(0, 3);

  return (
    <main className="wrap">
      <div className="detail-hero fade-in">
        {iconUrl(p) ? (
          <img
            src={iconUrl(p)!}
            alt={`${p.name} icon`}
            width={88}
            height={88}
            style={{ width: 88, height: 88, borderRadius: 22, border: '1px solid var(--border)' }}
          />
        ) : (
          <div className="app-icon" aria-hidden>
            {initial(p.name)}
          </div>
        )}
        <div>
          <p className="muted" style={{ margin: 0 }}>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <ArrowLeft size={13} style={{ verticalAlign: -2 }} /> {s.back}
            </Link>
          </p>
          <h1 style={{ margin: '6px 0', letterSpacing: '-0.03em' }}>{p.name}</h1>
          <p className="muted" style={{ margin: 0 }}>
            {tr.tagline}
          </p>
          <div className="pills">
            <span className="pill">
              <span className="status-dot" />
              {statusLabel[p.status][lang]}
            </span>
            {p.platforms.map((x) => (
              <span key={x} className="pill">
                {x}
              </span>
            ))}
          </div>
          {slug && DEMOS[slug] && (
            <p style={{ marginTop: 14 }}>
              <Link className="btn" to={`/demo/${slug}`}>
                <FlaskConical size={15} /> {lang === 'ko' ? '웹에서 체험하기' : 'Try in browser'}
              </Link>
            </p>
          )}
        </div>
      </div>

      <section className="section">
        <h2>{s.overview}</h2>
        <p className="prose">{tr.overview}</p>
        {p.screenshots.length > 0 && (
          <p className="muted" style={{ fontSize: 13, margin: '0 0 8px' }}>
            {p.screenshots.length}
            {lang === 'ko' ? '장의 이미지 · 좌우로 넘기고 클릭하면 크게 볼 수 있습니다' : ' images · scroll sideways, click to enlarge'}
          </p>
        )}
        <div className="gallery">
          {p.screenshots.map((shot, i) => (
            <button
              key={i}
              className="shot shot-btn"
              onClick={() => setLightbox(shotUrl(shot.src))}
              aria-label={`open screenshot ${i + 1}`}
            >
              <img
                className="shot-img"
                src={shotUrl(shot.src)}
                alt={lang === 'ko' ? shot.altKo : shot.altEn}
                loading="lazy"
              />
            </button>
          ))}
          {p.screenshots.length === 0 && (
            <div className="shot">
              <span>
                <span className="badge-concept">{s.concept}</span>
                <br />
                {s.conceptNote}
              </span>
            </div>
          )}
        </div>
        {p.screenshots.length > 0 && (
          <p className="muted" style={{ fontSize: 13 }}>
            {p.screenshots
              .map((shot) => (lang === 'ko' ? shot.captionKo : shot.captionEn) ?? '')
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}
      </section>

      <section className="section">
        <h2>{s.features}</h2>
        <div className="grid">
          {p.features.map((f, i) => (
            <div className="card" key={i}>
              <p className="muted" style={{ margin: 0 }}>
                FEATURE {String(i + 1).padStart(2, '0')}
              </p>
              <h3>{lang === 'ko' ? f.titleKo : f.titleEn}</h3>
              <p className="muted">{lang === 'ko' ? f.bodyKo : f.bodyEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{s.how}</h2>
        <div className="steps">
          {tr.howItWorks.map((x, i) => (
            <div className="step" key={i}>
              {x}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{s.tech}</h2>
        <div className="pills">
          {p.technologies.map((x) => (
            <span key={x} className="pill">
              {x}
            </span>
          ))}
        </div>
        <h2 style={{ marginTop: 28 }}>{s.story}</h2>
        <p className="prose muted">{tr.developmentNotes}</p>
        <h2 style={{ marginTop: 28 }}>{s.plans}</h2>
        <p className="prose muted">{tr.futurePlans}</p>
      </section>

      {related.length > 0 && (
        <section className="section">
          <h2>{s.related}</h2>
          <div className="grid">
            {related.map((r) => (
              <ProjectCard key={r.id} p={r} />
            ))}
          </div>
        </section>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <img className="lightbox-img" src={lightbox} alt="screenshot fullscreen" />
        </div>
      )}
    </main>
  );
}
