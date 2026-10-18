import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { StoreHero } from '../components/StoreHero';
import { useLang, ui } from '../i18n';

const shotUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;

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
      <StoreHero p={p} onOpen={setLightbox} />

      <section className="section">
        <h2>{s.overview}</h2>
        <p className="prose">{tr.overview}</p>
      </section>

      <section className="section" id="screens">
        <h2>{s.screens}</h2>
        {p.screenshots.length > 0 && (
          <p className="muted" style={{ fontSize: 13, margin: '0 0 12px' }}>
            {p.screenshots.length}
            {lang === 'ko' ? '장 · ' : ' images · '}
            {s.screensHint}
          </p>
        )}
        <div className="gallery">
          {p.screenshots.map((shot, i) => (
            <button
              key={i}
              className="shot shot-btn"
              onClick={() => setLightbox(shotUrl(shot.src))}
              aria-label={`${s.openShot} ${i + 1}`}
            >
              {shot.frame === 'phone' ? (
                <span className="device-frame">
                  <img
                    className="shot-img"
                    src={shotUrl(shot.src)}
                    alt={lang === 'ko' ? shot.altKo : shot.altEn}
                    loading="lazy"
                  />
                </span>
              ) : (
                <img
                  className="shot-img"
                  src={shotUrl(shot.src)}
                  alt={lang === 'ko' ? shot.altKo : shot.altEn}
                  loading="lazy"
                />
              )}
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
