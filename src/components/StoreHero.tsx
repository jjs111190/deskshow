import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, FlaskConical, Images } from 'lucide-react';
import type { Project } from '../types';
import { initial, iconUrl } from './ProjectCard';
import { DEMOS } from '../pages/Demo';
import { useLang, ui } from '../i18n';

const shotUrl = (src: string) => `${import.meta.env.BASE_URL}${src}`;
const MAX_SLIDES = 5;
const MAX_BADGES = 3;

export const statusLabel: Record<string, { ko: string; en: string }> = {
  implemented: { ko: '구현 완료', en: 'Implemented' },
  'in-development': { ko: '개발 중', en: 'In development' },
  partial: { ko: '부분 구현', en: 'Partially implemented' },
  planned: { ko: '기획', en: 'Planned' },
  unverified: { ko: '미확인', en: 'Unverified' },
};

/**
 * Store-listing style header: app identity, key-feature badges and a swipeable
 * carousel of the most representative real screens. Media can be enlarged via
 * the parent's lightbox.
 */
export function StoreHero({ p, onOpen }: { p: Project; onOpen: (url: string) => void }) {
  const { lang } = useLang();
  const s = ui[lang];
  const tr = p[lang];
  const slides = p.screenshots.slice(0, MAX_SLIDES);
  const track = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  // Autoplay is on until the visitor takes over, and is paused while they
  // hover, focus, scroll away or switch tabs (WCAG 2.2.2).
  const [autoplay, setAutoplay] = useState(true);
  const hovering = useRef(false);
  const inView = useRef(true);
  const idxRef = useRef(0);
  idxRef.current = idx;

  const goTo = useCallback((i: number) => {
    const el = track.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({
      left: child.offsetLeft - el.offsetLeft,
      behavior: reduce ? 'auto' : 'smooth',
    });
  }, []);

  /** Same as goTo, but records that the visitor is now driving the carousel. */
  const goToByUser = useCallback(
    (i: number) => {
      setAutoplay(false);
      goTo(i);
    },
    [goTo],
  );

  // Keep the dots in sync while the user swipes/drags the track by hand.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      let best = 0;
      let bestDist = Infinity;
      kids.forEach((k, i) => {
        const d = Math.abs(k.offsetLeft - el.offsetLeft - el.scrollLeft);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIdx(best);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Store-style autoplay: advance every few seconds while it is safe to do so.
  useEffect(() => {
    if (!autoplay || slides.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (hovering.current || !inView.current || document.hidden) return;
      goTo((idxRef.current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [autoplay, slides.length, goTo]);

  // Offscreen carousels should not scroll themselves.
  useEffect(() => {
    const el = track.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        inView.current = entries.some((e) => e.isIntersecting);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const jumpToScreens = () => {
    const target = document.getElementById('screens');
    if (!target) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  const icon = iconUrl(p);
  const demo = DEMOS[p.slug];

  return (
    <section className="store-hero fade-in">
      <p className="muted" style={{ margin: '0 0 6px' }}>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <ArrowLeft size={13} style={{ verticalAlign: -2 }} /> {s.back}
        </Link>
      </p>
      <div className="store-hero-grid">
        <div className="store-info">
          <div className="store-title-row">
            {icon ? (
              <img src={icon} alt={`${p.name} icon`} width={76} height={76} />
            ) : (
              <div className="app-icon" aria-hidden>
                {initial(p.name)}
              </div>
            )}
            <div>
              <h1>{p.name}</h1>
              <p className="muted" style={{ margin: 0 }}>
                {tr.shortDescription}
              </p>
            </div>
          </div>

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

          {p.features.length > 0 && (
            <div className="store-badges">
              <span className="store-badges-label">{s.features}</span>
              {p.features.slice(0, MAX_BADGES).map((f, i) => (
                <span className="store-badge" key={i}>
                  {lang === 'ko' ? f.titleKo : f.titleEn}
                </span>
              ))}
            </div>
          )}

          <div className="store-ctas">
            {demo && (
              <Link className="btn" to={`/demo/${p.slug}`}>
                <FlaskConical size={15} /> {lang === 'ko' ? demo.ko : demo.en}
              </Link>
            )}
            {p.screenshots.length > 0 && (
              <button type="button" className="btn ghost" onClick={jumpToScreens}>
                <Images size={15} /> {s.seeAllScreens}
              </button>
            )}
          </div>
        </div>

        <div
          className="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={lang === 'ko' ? '대표 화면' : 'App screenshots'}
          onPointerEnter={() => {
            hovering.current = true;
          }}
          onPointerLeave={() => {
            hovering.current = false;
          }}
          onFocusCapture={() => {
            hovering.current = true;
          }}
          onBlurCapture={() => {
            hovering.current = false;
          }}
        >
          <div
            className="carousel-track"
            ref={track}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') goToByUser(Math.min(slides.length - 1, idx + 1));
              if (e.key === 'ArrowLeft') goToByUser(Math.max(0, idx - 1));
            }}
          >
            {slides.map((shot, i) => (
              <div
                className="carousel-slide"
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${slides.length}`}
              >
                <button
                  type="button"
                  className="shot shot-btn carousel-shot"
                  onClick={() => onOpen(shotUrl(shot.src))}
                  aria-label={`${s.openShot} ${i + 1}`}
                >
                  {shot.frame === 'phone' ? (
                    <span className="device-frame">
                      <img
                        className="shot-img"
                        src={shotUrl(shot.src)}
                        alt={lang === 'ko' ? shot.altKo : shot.altEn}
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </span>
                  ) : (
                    <img
                      className="shot-img"
                      src={shotUrl(shot.src)}
                      alt={lang === 'ko' ? shot.altKo : shot.altEn}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  )}
                </button>
              </div>
            ))}
            {slides.length === 0 && (
              <div className="shot">
                <span>
                  <span className="badge-concept">{s.concept}</span>
                  <br />
                  {s.conceptNote}
                </span>
              </div>
            )}
          </div>

          {slides.length > 1 && (
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => goToByUser(Math.max(0, idx - 1))}
                disabled={idx === 0}
                aria-label={s.prevScreen}
              >
                <ChevronLeft size={16} />
              </button>
              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    className="carousel-dot"
                    aria-current={i === idx}
                    aria-label={`${i + 1} / ${slides.length}`}
                    onClick={() => goToByUser(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => goToByUser(Math.min(slides.length - 1, idx + 1))}
                disabled={idx === slides.length - 1}
                aria-label={s.nextScreen}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
