import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  app: {
    buildAssetsDir: '/_assets/',
  },

  css: [
    '~/assets/styles/fonts.css',
    '~/assets/styles/null.css',
    '~/assets/styles/variables.css',
    'notivue/notification.css',
    'notivue/animations.css',
  ],

  alias: {
    '@assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
    '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '@composables': fileURLToPath(
      new URL('./app/composables', import.meta.url),
    ),
    '@data': fileURLToPath(new URL('./app/data', import.meta.url)),
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

  notivue: {
    position: 'bottom-right',
    pauseOnHover: true,
    pauseOnTouch: true,
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    teleportTo: 'body',
    notifications: {
      global: {
        duration: 3000,
      },
    },
  },

  modules: ['@nuxtjs/device', '@pinia/nuxt', 'notivue/nuxt'],
})
