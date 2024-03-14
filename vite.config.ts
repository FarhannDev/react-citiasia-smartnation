/* eslint-disable prefer-const */
import { defineConfig } from 'vite';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

import react from '@vitejs/plugin-react-swc';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  // Konfigurasi pengembangan (development)
  server: {
    port: 3000, // Port server pengembangan
    open: true, // Buka browser otomatis saat server berjalan
    hmr: true, // Aktifkan Hot Module Replacement
    proxy: {
      // Konfigurasi proxy jika Anda membutuhkannya
      // '/api': 'http://localhost:8080/api'
    },
  },

  plugins: [
    react(),
    ViteImageOptimizer(),
    optimizeCssModules(),
    imagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      mozjpeg: { quality: 80 },
      webp: { quality: 75 },
    }),
    VitePWA(),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias untuk direktori src
      components: '/src/components', // Alias untuk direktori komponen
    },
  },
});
