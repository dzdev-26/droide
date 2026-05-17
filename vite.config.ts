<<<<<<< HEAD
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import cascadeLayers from '@csstools/postcss-cascade-layers';
import tailwindPostcss from '@tailwindcss/postcss';
=======
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
>>>>>>> 3658308 (update-1.1.0)

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
<<<<<<< HEAD
    base: './',
    css: {
      postcss: {
        plugins: [
          tailwindPostcss(),
          cascadeLayers()
        ]
      }
    },
    build: {
      target: 'chrome87',
      cssTarget: 'chrome87',
    },
    plugins: [react(), viteSingleFile()],
=======
    plugins: [react(), tailwindcss()],
>>>>>>> 3658308 (update-1.1.0)
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
