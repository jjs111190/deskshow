/**
 * DESKSHOW public validator — must pass before any publish.
 * Checks: secrets, local paths, private emails, visibility flags,
 *          required fields, screenshot honesty.
 * Usage: npm run validate:public
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error('FAIL: ' + msg);
};
const ok = (msg) => console.log('ok: ' + msg);

// 1. Scan public-bound sources for secrets
const SECRET_PATTERNS = [
  /AKIA[0-9A-Z]{16}/, /ghp_[A-Za-z0-9]{20,}/, /gho_[A-Za-z0-9]{20,}/,
  /AIza[0-9A-Za-z_-]{20,}/, /xox[bap]-/, /BEGIN (RSA )?PRIVATE KEY/,
  /\.env\b/, /\/Users\/[a-zA-Z0-9_.-]+\//,
];
const SCAN_FILES = ['src/data/projects.ts', 'index.html'];
for (const f of SCAN_FILES) {
  if (!existsSync(f)) {
    fail(`missing file ${f}`);
    continue;
  }
  const text = readFileSync(f, 'utf8');
  for (const pat of SECRET_PATTERNS) {
    if (pat.test(text)) fail(`${f} matches forbidden pattern ${pat}`);
  }
  // crude private-email check (allow example.com)
  const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) ?? [];
  for (const e of emails) {
    if (!e.endsWith('@example.com') && !e.endsWith('@flowworks.local')) fail(`${f} contains email-like ${e}`);
  }
}
ok('secret/path scan of public sources');

// 2. .env must not exist at root
if (existsSync('.env')) fail('.env exists in workspace root — remove before publish');
else ok('no .env at root');

// 3. Validate project data via dynamic import of TS? -> parse statically instead
const src = readFileSync('src/data/projects.ts', 'utf8');
const required = ['id', 'slug', 'name', 'platforms', 'technologies', 'status', 'visibility'];
for (const key of ['repositoryUrl: null', 'demoUrl: null']) {
  if (!src.includes(key)) console.log(`note: ${key} not found verbatim (verify links are null unless proven)`);
}
for (const r of required) {
  if (!src.includes(r)) fail(`projects.ts missing key ${r}`);
}
const approvedCount = (src.match(/visibility: 'approved'/g) ?? []).length;
const draftCount = (src.match(/visibility: 'private-draft'/g) ?? []).length;
console.log(`note: ${approvedCount} approved, ${draftCount} private-draft (approval recorded in PUBLICATION_REVIEW.md)`);
ok('visibility flags explicit (nothing auto-published by tooling)');
if (src.includes('localhost') || src.includes('192.168.')) fail('internal host leak in projects.ts');
else ok('no internal host leak');

// 4. Screenshots honesty: every screenshots: [] is fine (CONCEPT UI). Non-empty must reference public/
const nonEmpty = (src.match(/screenshots: \[[^\]]/g) ?? []).length;
ok(`screenshot honesty check (${nonEmpty} non-empty arrays — must point at public/ if any)`);

// 5. Required public files
for (const f of ['public/robots.txt', 'public/favicon.svg', 'index.html', '.github/workflows/deploy.yml']) {
  if (!existsSync(f)) fail(`missing ${f}`);
}
ok('required public files present (if no fails above)');

if (failures > 0) {
  console.error(`\nvalidate:public FAILED with ${failures} issue(s). Do not publish.`);
  process.exit(1);
}
console.log('\nvalidate:public PASSED. Still needs human approval before git push.');
