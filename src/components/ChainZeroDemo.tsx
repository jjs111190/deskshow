import { Fragment, useMemo, useState } from 'react';
// Vendored copy of the real game engine (see src/vendor/chain-zero/ header).
import { SumpleteEngine, type SumpleteBoard } from '../vendor/chain-zero/SumpleteEngine';
import { useLang } from '../i18n';

export function ChainZeroDemo() {
  const { lang } = useLang();
  const [size, setSize] = useState(4);
  const [seed, setSeed] = useState(() => Date.now());
  const [board, setBoard] = useState<SumpleteBoard>(() => SumpleteEngine.create(4, Date.now()));

  const fresh = useMemo(() => board, [board]);
  const restart = (s: number) => {
    setSize(s);
    const b = SumpleteEngine.create(s, Date.now());
    setSeed(b.seed);
    setBoard(b);
  };

  return (
    <div>
      <div className="toolbar">
        {[4, 5].map((s) => (
          <button key={s} className="icon-btn" onClick={() => restart(s)} style={size === s ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : undefined}>
            {s}×{s}
          </button>
        ))}
        <button className="icon-btn" onClick={() => restart(size)}>
          {lang === 'ko' ? '새 문제' : 'New puzzle'} · seed {String(seed).slice(-5)}
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `auto repeat(${fresh.size}, 56px)`,
          gap: 6,
          justifyContent: 'center',
          alignItems: 'center',
          margin: '8px 0 4px',
        }}
      >
        <span />
        {fresh.colTargets.map((t, c) => (
          <span key={c} style={{ textAlign: 'center', fontWeight: 800, fontSize: 13, color: SumpleteEngine.colMatches(fresh, c) ? '#34c759' : 'var(--text-2)' }}>
            {t}
          </span>
        ))}
        {fresh.values.map((row, r) => (
          <Fragment key={r}>
            <span key={'t' + r} style={{ fontWeight: 800, fontSize: 13, textAlign: 'right', color: SumpleteEngine.rowMatches(fresh, r) ? '#34c759' : 'var(--text-2)' }}>
              {fresh.rowTargets[r]}
            </span>
            {row.map((v, c) => {
              const out = fresh.deleted[r]![c]!;
              return (
                <button
                  key={r + '-' + c}
                  onClick={() => setBoard((b) => SumpleteEngine.toggle(b, r, c))}
                  aria-label={`cell ${r},${c}`}
                  style={{
                    width: 56,
                    height: 56,
                    fontSize: 20,
                    fontWeight: 700,
                    borderRadius: 12,
                    border: '1px solid var(--border)',
                    background: out ? 'var(--surface)' : 'var(--card)',
                    color: out ? 'var(--text-2)' : 'var(--text)',
                    textDecoration: out ? 'line-through' : 'none',
                    opacity: out ? 0.55 : 1,
                    cursor: 'pointer',
                  }}
                >
                  {v}
                </button>
              );
            })}
          </Fragment>
        ))}
      </div>
      <p className="muted" style={{ textAlign: 'center', fontSize: 13 }}>
        {lang === 'ko'
          ? '칸을 눌러 지우세요. 각 행·열의 남은 합이 목표와 일치하면 초록색이 됩니다.'
          : 'Tap cells to delete them. Lines turn green when the remaining sum hits its target.'}
      </p>
      {fresh.solved && (
        <p style={{ textAlign: 'center', fontWeight: 800, color: '#34c759' }}>
          {lang === 'ko' ? '클리어! 🎉 실제 Chain Zero의 SUMPLETE 엔진으로 판정했습니다.' : 'Solved! 🎉 Judged by the real Chain Zero SUMPLETE engine.'}
        </p>
      )}
    </div>
  );
}
