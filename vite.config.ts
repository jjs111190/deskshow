import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// GitHub Pages: https://USERNAME.github.io/deskshow/
// Base path '/deskshow/' keeps assets working under project pages.
// Local dev still works (vite serves at /).
export default defineConfig({
  plugins: [react()],
  base: process.env.DESKSHOW_BASE ?? '/deskshow/',
  // Local dev only: allow reading the real Chain Zero engine for the demo.
  // Production builds inline it; originals are never written.
  server: { fs: { allow: ['..'] } },
  resolve: {
    alias: {
      // absolute $HOME would leak into logs; HOME/Desktop is stable here
      '@cz-engine': path.resolve(process.env.HOME ?? '~', 'Desktop', 'Chain Zero', 'src', 'game', 'SumpleteEngine.ts'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
});
