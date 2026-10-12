import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: https://USERNAME.github.io/deskshow/
// Base path '/deskshow/' keeps assets working under project pages.
// Local dev still works (vite serves at /).
export default defineConfig({
  plugins: [react()],
  base: process.env.DESKSHOW_BASE ?? '/deskshow/',
  // Local dev only: allow serving workspace files. Originals are never written.
  server: { fs: { allow: ['..'] } },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
});
