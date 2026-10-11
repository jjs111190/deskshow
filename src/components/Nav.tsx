import { Link } from 'react-router-dom';
import { Moon, Sun, Search } from 'lucide-react';
import { useLang, ui } from '../i18n';
import { useTheme } from '../theme';

export function Nav() {
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  const s = ui[lang];
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" to="/">
          DESKSHOW<small>{t('당신의 앱, 아름답게', 'Your Apps, Beautifully')}</small>
        </Link>
        <nav className="nav-links" aria-label="primary">
          <Link className="hide-m" to="/projects">
            {s.navProjects}
          </Link>
          <Link className="hide-m" to="/about">
            {s.navAbout}
          </Link>
          <Link className="hide-m" to="/stack">
            {s.navStack}
          </Link>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <button className="icon-btn" onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} aria-label="language">
            {lang === 'ko' ? 'EN' : '한'}
          </button>
          <button className="icon-btn" onClick={toggle} aria-label="theme">
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export function SearchIcon() {
  return <Search size={14} aria-hidden />;
}
