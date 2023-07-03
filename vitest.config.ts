import { defineConfig } from 'vitest/config'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      },
    }),
  ],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    exclude: ['**/node_modules/**'],
    clearMocks: true,
    environment: 'jsdom',
    // setupFiles: ['./vitest.setup.ts'],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
