import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
      components: path.resolve('./dashboard/components'),
      next: path.resolve('./dashboard/components-next'),
      dashboard: path.resolve('./dashboard'),
      helpers: path.resolve('./shared/helpers'),
      shared: path.resolve('./shared'),
      assets: path.resolve('./dashboard/assets'),
    },
  },
})
