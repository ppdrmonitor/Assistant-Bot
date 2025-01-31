import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './static',
    // Remove assetsDir to keep all assets in the root of static
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'style.css';
          }
          return '[name].[ext]';
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});