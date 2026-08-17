import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  server: {
    proxy: {
      // The Insights blog is a separate Astro app (blog/) that serves itself
      // under /insights/ (see blog/astro.config.mjs `base`). In production
      // this is just static files under dist/insights/ served alongside the
      // main site; in dev, proxy to `npm run dev:blog` (Astro's default port)
      // so localhost:5173/insights/ works with hot-reload too.
      '/insights': {
        target: 'http://localhost:4321',
        changeOrigin: true,
      },
    },
  },
})
