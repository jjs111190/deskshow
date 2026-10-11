import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard, AppIcon } from '../components/ProjectCard';
import { ProjectCollection } from '../components/ProjectCollection';
import { useLang, ui } from '../i18n';
import { useEffect } from 'react';

export function Home() {
  const { lang, t } = useLang();
  const s = ui[lang];
  useEffect(() => {
    document.title = lang === 'ko' ? 'DESKSHOW — 내가 만든 것들' : 'DESKSHOW — Things I’ve Built';
  }, [lang]);

  const featured = projects.filter((p) => p.featured);
  const [first, ...rest] = featured;
  const mobile = projects.filter((p) => p.platforms.includes('iOS') || p.platforms.includes('Android')).length;
  const web = projects.filter((p) => p.platforms.includes('Web')).length;
  const games = projects.filter((p) => p.category === 'Game').length;
  const techs = new Set(projects.flatMap((p) => p.technologies)).size;

  return (
    <main className="wrap">
      <section className="hero fade-in">
        <h1>{t('내가 만든 것들.', 'Things I’ve Built.')}</h1>
        <p>
          {t(
            '아이디어에서 시작해 직접 구현한 앱, 게임, 그리고 다양한 실험을 한곳에 담았습니다.',
            'A collection of apps, games, and experiments — thoughtfully built and beautifully presented.',
          )}
        </p>
        <a className="btn" href="#projects">
          {s.explore} <ArrowRight size={16} />
        </a>
      </section>

      <section className="section">
        <h2>{s.featured}</h2>
        <p className="sub">DESKSHOW · Your Apps, Beautifully Presented.</p>
        {first && (
          <Link className="featured-first fade-in" to={`/projects/${first.slug}`}>
            <div>
              <AppIcon p={first} size={72} />
              <h3 style={{ fontSize: 30 }}>{first.name}</h3>
              <p className="muted">{first[lang].tagline}</p>
              <p>{first[lang].shortDescription}</p>
              <div className="pills">
                {first.platforms.map((x) => (
                  <span key={x} className="pill">
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="shot" style={{ padding: first.screenshots.length > 0 ? 0 : 16 }}>
              {first.screenshots.length > 0 ? (
                <img
                  className="shot-img"
                  src={`${import.meta.env.BASE_URL}${first.screenshots[0].src}`}
                  alt={lang === 'ko' ? first.screenshots[0].altKo : first.screenshots[0].altEn}
                  loading="lazy"
                />
              ) : (
                <span>
                  <span className="badge-concept">{s.concept}</span>
                  <br />
                  {s.conceptNote}
                </span>
              )}
            </div>
          </Link>
        )}
        <div className="featured-grid">
          {rest.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>{s.collection}</h2>
        <p className="sub">{projects.length} projects · verified from local source</p>
        <ProjectCollection />
      </section>

      <section className="section">
        <h2>{s.highlights}</h2>
        <div className="stats">
          <div className="stat">
            <b>{projects.length}</b>
            <span className="muted">Total Projects</span>
          </div>
          <div className="stat">
            <b>{mobile}</b>
            <span className="muted">Mobile Apps</span>
          </div>
          <div className="stat">
            <b>{web}</b>
            <span className="muted">Web Projects</span>
          </div>
          <div className="stat">
            <b>{games}</b>
            <span className="muted">Games</span>
          </div>
          <div className="stat">
            <b>{techs}</b>
            <span className="muted">Technologies</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>{s.aboutPreview}</h2>
        <p className="prose muted">
          {t(
            '서버·유료 API 없이 기기 안에서 완결되는 앱과, 웹·모바일·데스크탑을 오가는 가벼운 실험에 관심이 많습니다. 확인된 코드만 소개하고, 실행되지 않은 것은 실행된 것처럼 말하지 않습니다.',
            'I focus on apps that finish on-device with no servers or paid APIs, plus light experiments across web, mobile, and desktop. Only verified code is presented; nothing is staged as running unless it runs.',
          )}
        </p>
        <p>
          <Link className="btn ghost" to="/about">
            About
          </Link>
        </p>
      </section>
    </main>
  );
}
