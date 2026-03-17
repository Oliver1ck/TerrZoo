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
  ],

  alias: {
    '@components': '~/components',
    '@composables': '~/composables',
    '@styles': '~/assets/styles',
    '@assets': '~/assets',
    '@layouts': '~/layouts',
    '@pages': '~/pages',
    '@custom-types': '~/types',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
