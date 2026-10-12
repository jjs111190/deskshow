import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Smartphone, Puzzle } from 'lucide-react';
import { ChainZeroDemo } from '../components/ChainZeroDemo';
import { useLang, ui } from '../i18n';

const base = import.meta.env.BASE_URL;
const GAMES = [
  { id: '2048', label: '2048', src: `${base}demo/gamezone/2048/index.html` },
  { id: 'flappy', label: 'Flappy', src: `${base}demo/gamezone/flappy/index.html` },
  { id: 'hextris', label: 'Hextris', src: `${base}demo/gamezone/hextris/index.html` },
  { id: 'pacman', label: 'Pac-Man', src: `${base}demo/gamezone/pacman/index.html` },
];

export const DEMOS: Record<string, { ko: string; en: string }> = {
  'chain-zero': { ko: 'SUMPLETE 플레이', en: 'Play SUMPLETE' },
  flowworks: { ko: 'GameZone 미니게임', en: 'GameZone mini-games' },
  'side-a': { ko: '앱 실행해 보기', en: 'Try the app' },
};

function FlowWorksDemo() {
  const [game, setGame] = useState(GAMES[0]);
  const { lang } = useLang();
  return (
    <div>
      <div className="toolbar" aria-label="games">
        {GAMES.map((g) => (
          <button
            key={g.id}
            className="icon-btn"
            onClick={() => setGame(g)}
            style={game.id === g.id ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : undefined}
          >
            <Gamepad2 size={13} style={{ verticalAlign: -2 }} /> {g.label}
          </button>
        ))}
      </div>
      <p className="muted" style={{ fontSize: 13 }}>
        {lang === 'ko'
          ? 'FlowWorks 앱에 내장된 서드파티 미니게임입니다 (원작자 표기 포함). 키보드·터치로 바로 플레이할 수 있습니다.'
          : 'Third-party mini-games bundled inside FlowWorks (with author credits). Playable with keyboard and touch.'}
      </p>
      <iframe
        key={game.id}
        title={game.label}
        src={game.src}
        style={{ width: '100%', height: 640, border: '1px solid var(--border)', borderRadius: 18, background: '#fff' }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}

function SideADemo() {
  const { lang } = useLang();
  return (
    <div style={{ display: 'grid', justifyItems: 'center', gap: 12 }}>
      <p className="muted" style={{ fontSize: 13, maxWidth: 560, textAlign: 'center' }}>
        {lang === 'ko'
          ? 'Side A의 실제 웹 빌드를 그대로 얹은 체험판입니다. 로그인 화면에서 둘러볼 수 있습니다.'
          : 'The real Side A web build, embedded for trial. Explore from the sign-in screen.'}
      </p>
      <div style={{ width: 390, maxWidth: '100%', border: '1px solid var(--border)', borderRadius: 36, padding: 12, background: 'var(--surface)' }}>
        <iframe
          title="Side A demo"
          src={`${base}demo/side-a/`}
          style={{ width: '100%', height: 720, border: 0, borderRadius: 26, background: '#fff' }}
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
}

export function Demo() {
  const { slug } = useParams();
  const { lang } = useLang();
  const s = ui[lang];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const meta = slug ? DEMOS[slug] : null;
  return (
    <main className="wrap section">
      <p className="muted" style={{ margin: 0 }}>
        <Link to={slug ? `/projects/${slug}` : '/projects'} style={{ textDecoration: 'none' }}>
          <ArrowLeft size={13} style={{ verticalAlign: -2 }} /> {s.back}
        </Link>
      </p>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {slug === 'chain-zero' ? <Puzzle size={22} /> : <Smartphone size={22} />}
        {lang === 'ko' ? '웹 체험' : 'Web demo'} {meta ? `· ${lang === 'ko' ? meta.ko : meta.en}` : ''}
      </h2>
      {!slug || !meta ? (
        <div className="grid">
          {Object.entries(DEMOS).map(([id, m]) => (
            <Link key={id} className="card" to={`/demo/${id}`}>
              <h3>{id}</h3>
              <p className="muted">{lang === 'ko' ? m.ko : m.en}</p>
            </Link>
          ))}
        </div>
      ) : slug === 'chain-zero' ? (
        <>
          <p className="prose muted">
            {lang === 'ko'
              ? 'Chain Zero의 실제 SUMPLETE 엔진을 브라우저에서 그대로 돌립니다. 승인받아 복제한 엔진 코드로, 원본 프로젝트는 손대지 않았습니다.'
              : 'Runs the real SUMPLETE engine from Chain Zero in your browser — vendored with approval; the original project is untouched.'}
          </p>
          <ChainZeroDemo />
        </>
      ) : slug === 'flowworks' ? (
        <FlowWorksDemo />
      ) : (
        <SideADemo />
      )}
    </main>
  );
}
