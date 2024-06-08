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
    VitePWA({
      manifest: {
        name: 'Smart Nation',
        short_name: 'Smart Nation Lite',
        description:
          'Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/smartnation/logo-smartnation-id_64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/images/smartnation/logo-smartnation-id_192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/images/smartnation/logo-smartnation-id_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Konfigurasi Workbox
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 hari
              },
            },
          },
          {
            urlPattern: new RegExp('^http://localhost:4173/'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60, // 1 jam
              },
            },
          },
        ],
      },
    }),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias untuk direktori src
      components: '/src/components', // Alias untuk direktori komponen
    },
  },
});
