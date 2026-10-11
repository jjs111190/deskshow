/**
 * DESKSHOW analyzer — compares discovery output with curated site data.
 * Read-only. Never auto-overwrites approved public content.
 * Usage: npm run analyze
 */
import { readFileSync, existsSync } from 'node:fs';

if (!existsSync('content/discovery.json')) {
  console.log('run `npm run scan` first (content/discovery.json missing).');
  process.exit(0);
}
const discovery = JSON.parse(readFileSync('content/discovery.json', 'utf8'));
const curated = ['handy', 'spotory', 'viblog', 'chain-zero', 'receipt', 'flowworks', 'side-a', 'recordflow', 'cyworld-2026', 'flownote', 'rodeblockrush', 'blanky'];
console.log(`discovered: ${discovery.count} candidates`);
console.log(`curated in site: ${curated.length}`);
const names = new Set(discovery.projects.map((p) => p.projectName.toLowerCase()));
for (const c of curated) {
  const hit = [...names].some((n) => n.includes(c.split('-')[0]));
  console.log(` - ${c}: ${hit ? 'source found on disk' : 'source NOT matched (check name)'}`);
}
console.log('\nNew candidates not yet curated (review before adding):');
for (const p of discovery.projects) {
  const known = curated.some((c) => p.projectName.toLowerCase().includes(c.split('-')[0]));
  if (!known) console.log(`   ? ${p.projectName} [${p.projectType}]`);
}
console.log('\nNo public files were modified. Curate manually, then re-run validate.');
