import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const deferCssPlugin = () => {
  return {
    name: 'defer-css',
    enforce: 'post' as const,
    transformIndexHtml(html: string, ctx: any) {
      if (!ctx.bundle) return html;
      
      // Defer Vite's injected CSS link
      return html.replace(
        /<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/g,
        `<link rel="preload" href="$1" as="style"><link rel="stylesheet" href="$1" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="$1"></noscript>`
      );
    }
  }
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), deferCssPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            motion: ['motion'],
            lucide: ['lucide-react'],
            markdown: ['react-markdown', 'remark-gfm'],
            spline: ['@splinetool/react-spline', '@splinetool/runtime']
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
