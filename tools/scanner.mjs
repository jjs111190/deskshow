/**
 * DESKSHOW scanner — READ-ONLY analysis of local projects.
 * Never modifies, moves, or deletes originals. All output goes to
 * this workspace: content/discovery.json + content/projects/*.json (private-draft).
 *
 * Usage: npm run scan
 */
import { readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const HOME = process.env.HOME ?? '';
const ROOTS = [join(HOME, 'Desktop')];
const SKIP = new Set([
  'node_modules', '.git', 'build', 'dist', 'DerivedData', '.dart_tool',
  '.expo', 'Pods', 'venv_automation', 'venv', '.venv', '__pycache__',
  'dist-desktop', 'dist-ssg', '.cxx', 'android-sdk', 'android_tmp',
]);
const MAX_DEPTH = 3;
const MAX_FILES_PER_DIR = 200;

function detectType(files) {
  const has = (n) => files.includes(n);
  const anyExt = (ext) => files.some((f) => f.endsWith(ext));
  if (files.includes('pubspec.yaml')) return { type: 'flutter', lang: 'Dart' };
  if (anyExt('.xcodeproj')) return { type: 'xcode', lang: 'Swift' };
  if (files.includes('project.godot')) return { type: 'godot', lang: 'GDScript' };
  if (files.includes('Cargo.toml')) return { type: 'rust', lang: 'Rust' };
  if (files.includes('capacitor.config.ts')) return { type: 'capacitor', lang: 'TypeScript' };
  if (files.includes('app.json') && has('package.json')) return { type: 'expo', lang: 'TypeScript' };
  if (has('package.json')) {
    if (files.includes('vite.config.ts')) return { type: 'vite-web', lang: 'TypeScript' };
    if (files.includes('next.config.js') || files.includes('next.config.mjs')) return { type: 'nextjs', lang: 'TypeScript' };
    return { type: 'node', lang: 'TypeScript/JavaScript' };
  }
  if (files.includes('requirements.txt') || files.includes('pyproject.toml')) return { type: 'python', lang: 'Python' };
  return null;
}

function scanDir(path, depth, out) {
  if (depth > MAX_DEPTH) return;
  let entries;
  try {
    entries = readdirSync(path).slice(0, MAX_FILES_PER_DIR);
  } catch {
    return;
  }
  const files = entries.filter((e) => {
    try {
      return statSync(join(path, e)).isFile();
    } catch {
      return false;
    }
  });
  const hit = detectType(entries);
  if (hit && depth >= 1) {
    let mtime = '';
    try {
      mtime = statSync(path).mtime.toISOString();
    } catch {}
    out.push({
      projectPathRef: path.replace(HOME, '~'),
      projectName: basename(path),
      projectType: hit.type,
      language: hit.lang,
      lastModified: mtime,
      analysisConfidence: 'Medium',
      visibility: 'private-draft',
    });
    return; // don't descend into a detected project root
  }
  if (depth === MAX_DEPTH) return;
  for (const e of entries) {
    if (SKIP.has(e) || e.startsWith('.')) continue;
    const p = join(path, e);
    try {
      if (statSync(p).isDirectory()) scanDir(p, depth + 1, out);
    } catch {}
  }
}

const results = [];
for (const root of ROOTS) {
  if (!existsSync(root)) continue;
  scanDir(root, 0, results);
}
results.sort((a, b) => a.projectName.localeCompare(b.projectName));

mkdirSync('content/projects', { recursive: true });
mkdirSync('.local-analysis', { recursive: true });
writeFileSync('content/discovery.json', JSON.stringify({ scannedAt: new Date().toISOString(), roots: ROOTS.map((r) => r.replace(HOME, '~')), count: results.length, projects: results }, null, 2));
writeFileSync('.local-analysis/last-scan.json', JSON.stringify({ at: new Date().toISOString(), count: results.length }, null, 2));
console.log(`scan complete: ${results.length} candidate projects -> content/discovery.json`);
for (const r of results) console.log(` - ${r.projectName} [${r.projectType}] ${r.projectPathRef}`);
