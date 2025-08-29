import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: { quality: 60 },
      jpeg: { quality: 60 },
      webp: { lossless: true },
      avif: { lossless: true },
      svg: {
        plugins: [{ name: 'removeViewBox', active: false }, { name: 'sortAttrs' }],
      },
    }),
  ],
});
