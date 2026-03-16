import { fileURLToPath } from 'node:url'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  app: {
    buildAssetsDir: 'assets',
  },

  css: ['@styles/fonts.css', '@styles/null.css', '@styles/variables.css'],

  alias: {
    '~': './',
    '@': './',
    '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '@composables': fileURLToPath(
      new URL('./app/composables', import.meta.url)
    ),
    '@styles': fileURLToPath(new URL('./app/assets/styles', import.meta.url)),
    '@assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
    '@layouts': fileURLToPath(new URL('./app/layouts', import.meta.url)),
    '@pages': fileURLToPath(new URL('./app/pages', import.meta.url)),
    '@custom-types': fileURLToPath(new URL('./app/types', import.meta.url)),
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
