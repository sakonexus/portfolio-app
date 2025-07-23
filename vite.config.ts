import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 3000,
  },
  define: {
    'process.env': {},
  },
  assetsInclude: ['**/*.html'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@hooks': resolve(__dirname, './src/hooks'),
    },
  },
});
