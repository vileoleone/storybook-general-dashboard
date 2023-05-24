import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/positionHelpers.scss";
          @import "@/assets/styles/marginHelpers.scss";
          @import "@/assets/styles/paddingHelpers.scss";
          @import "@/assets/styles/fontHelpers.scss";
          @import "@/assets/styles/stateHelpers.scss";
          @import "@/assets/styles/widthHeightHelpers.scss";
          @import "@/assets/styles/backgroundHelpers.scss";
          @import "@/assets/styles/borderHelpers.scss";
        `
      }
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '%': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '#': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  }
})
