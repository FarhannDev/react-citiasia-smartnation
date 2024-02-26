import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      mozjpeg: { quality: 80 },
      webp: { quality: 75 },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias untuk direktori src
      components: '/src/components', // Alias untuk direktori komponen
      // Tambahkan alias tambahan di sini sesuai kebutuhan Anda
    },
  },
});
