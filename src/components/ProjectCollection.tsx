import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { useLang, ui } from '../i18n';

export const FILTERS = ['All', 'iOS', 'Android', 'Web', 'macOS', 'Game', 'AI', 'Tools'] as const;

function matches(p: (typeof projects)[number], q: string, f: string) {
  const hay = [p.name, p.category, ...p.platforms, ...p.technologies, p.ko.shortDescription, p.en.shortDescription]
    .join(' ')
    .toLowerCase();
  if (q && !hay.includes(q.toLowerCase())) return false;
  if (f === 'All') return true;
  if (f === 'Game') return p.category === 'Game';
  if (f === 'AI') return p.technologies.some((t) => /AI|ML|Vision|LLM/i.test(t)) || /AI|바이브/i.test(p.ko.shortDescription);
  if (f === 'Tools') return p.category.includes('Tool') || p.category.includes('Web');
  return p.platforms.includes(f);
}

export function ProjectCollection() {
  const { lang } = useLang();
  const s = ui[lang];
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const f = params.get('filter') ?? 'All';
  const sort = params.get('sort') ?? 'recent';

  const list = useMemo(() => {
    const out = projects.filter((p) => matches(p, q, f));
    out.sort((a, b) =>
      sort === 'alpha' ? a.name.localeCompare(b.name) : b.updatedAt.localeCompare(a.updatedAt),
    );
    return out;
  }, [q, f, sort]);

  return (
    <div>
      <div className="toolbar" role="search">
        <input
          className="search"
          placeholder={s.searchPh}
          value={q}
          onChange={(e) => setParams({ q: e.target.value, filter: f, sort })}
          aria-label="search"
        />
        <select
          className="search"
          value={sort}
          onChange={(e) => setParams({ q, filter: f, sort: e.target.value })}
          aria-label={s.sort}
        >
          <option value="recent">{s.recent}</option>
          <option value="alpha">{s.alpha}</option>
        </select>
      </div>
      <div className="toolbar" aria-label="filters">
        {FILTERS.map((x) => (
          <button
            key={x}
            className="icon-btn"
            style={f === x ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : undefined}
            onClick={() => setParams({ q, filter: x, sort })}
          >
            {x === 'All' ? s.all : x}
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="muted">{s.noResults}</p>
      ) : (
        <div className="grid">
          {list.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
