import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path';
const isLibraryMode = process.env.BUILD_MODE === 'library';
console.log(isLibraryMode);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    rollupOptions: {
      output: {
        // [NOTE] when not in library mode, no new keys will be addedd or overwritten
        // setting dir: isLibraryMode ? 'public/packs' : undefined will not work
        ...(isLibraryMode
          ? {
              dir: 'public/js',
              entryFileNames: chunkInfo => {
                if (chunkInfo.name === 'sdk') {
                  return 'sdk.js';
                }
                return '[name].js';
              },
            }
          : {}),
        inlineDynamicImports: isLibraryMode, // Disable code-splitting for SDK
      },
    },
    lib: isLibraryMode
      ? {
          entry: path.resolve(__dirname, './src/chat-bubble-sdk/sdk.js'),
          formats: ['iife'], // IIFE format for single file
          name: 'sdk',
        }
      : undefined,
  },
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
