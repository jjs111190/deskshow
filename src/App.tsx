import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider, useLang } from './i18n';
import { ThemeProvider } from './theme';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Stack } from './pages/Stack';

function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <p style={{ margin: 0 }}>
          <b style={{ color: 'var(--text)' }}>DESKSHOW</b> —{' '}
          {t('당신의 앱, 아름답게.', 'Your Apps, Beautifully Presented.')}
        </p>
        <p style={{ margin: '6px 0 0' }}>
          {t(
            '검증된 내용만 공개합니다 · 서버·유료 API 없음 · GitHub Pages 운영',
            'Verified content only · no servers or paid APIs · hosted on GitHub Pages',
          )}
        </p>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <main className="wrap section">
      <h2>404</h2>
      <p className="muted">Page not found.</p>
      <Link to="/">Home</Link>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
