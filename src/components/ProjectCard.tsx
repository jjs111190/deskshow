import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { useLang, ui } from '../i18n';

export function initial(name: string) {
  return name.trim().charAt(0).toUpperCase() || '·';
}

export function iconUrl(p: Pick<Project, 'icon'>) {
  if (!p.icon) return null;
  return `${import.meta.env.BASE_URL}${p.icon}`;
}

export function AppIcon({ p, size = 56 }: { p: Project; size?: number }) {
  const url = iconUrl(p);
  if (url) {
    return (
      <img
        src={url}
        alt={`${p.name} icon`}
        width={size}
        height={size}
        loading="lazy"
        style={{ width: size, height: size, borderRadius: Math.max(12, size * 0.24), border: '1px solid var(--border)', marginBottom: 12 }}
      />
    );
  }
  return (
    <div className="app-icon" aria-hidden>
      {initial(p.name)}
    </div>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const { lang } = useLang();
  const s = ui[lang];
  const tr = p[lang];
  return (
    <Link className="card fade-in" to={`/projects/${p.slug}`}>
      <AppIcon p={p} />
      <h3>{p.name}</h3>
      <p className="muted">{tr.shortDescription}</p>
      <div className="pills">
        {p.platforms.map((x) => (
          <span key={x} className="pill">
            {x}
          </span>
        ))}
        {p.technologies.slice(0, 3).map((x) => (
          <span key={x} className="pill">
            {x}
          </span>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 12 }}>
        {s.viewDetail} <ArrowUpRight size={13} style={{ verticalAlign: -2 }} />
      </p>
    </Link>
  );
}
