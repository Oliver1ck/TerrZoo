import { fileURLToPath } from 'node:url'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/app/assets/styles/fonts.css',
    '~/app/assets/styles/null.css',
    '~/app/assets/styles/variables.css',
  ],

  alias: {
    '~': './',
    '@': './',
    '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '@composables': fileURLToPath(new URL('./app/composables', import.meta.url)),
    '@styles': fileURLToPath(new URL('./app/assets/styles', import.meta.url)),
    '@assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
    '@layouts': fileURLToPath(new URL('./app/layouts', import.meta.url)),
    '@pages': fileURLToPath(new URL('./app/pages', import.meta.url)),
  }
})
