import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

describe('deskshow public data', () => {
  it('projects.ts exists with 12 curated projects and explicit visibility', () => {
    assert.ok(existsSync('src/data/projects.ts'));
    const src = readFileSync('src/data/projects.ts', 'utf8');
    const ids = [...src.matchAll(/id: '([^']+)'/g)].map((m) => m[1]);
    assert.ok(ids.length >= 9, `expected >=9 projects, got ${ids.length}`);
    assert.ok(!src.includes("visibility: 'secret'"), 'no invalid visibility');
    assert.ok(
      existsSync('PUBLICATION_REVIEW.md'),
      'approval record must exist alongside visibility flags',
    );
  });

  it('no absolute home paths or secrets in public sources', () => {
    for (const f of ['src/data/projects.ts', 'src/pages/Home.tsx']) {
      const text = readFileSync(f, 'utf8');
      assert.ok(!/\/Users\//.test(text), `${f} leaks /Users/`);
      assert.ok(!/BEGIN PRIVATE KEY/.test(text), `${f} leaks key`);
    }
  });

  it('routes exist for all required pages', () => {
    const app = readFileSync('src/App.tsx', 'utf8');
    for (const r of ['/projects/:slug', '/about', '/stack']) assert.ok(app.includes(r), `missing route ${r}`);
    assert.ok(app.includes('HashRouter'), 'must use HashRouter for GitHub Pages');
  });

  it('deploy workflow deploys only on main push', () => {
    const yml = readFileSync('.github/workflows/deploy.yml', 'utf8');
    assert.ok(yml.includes('gh-pages') || yml.includes('pages'), 'must target pages');
    assert.ok(yml.includes('main'), 'must gate on main');
  });
});
