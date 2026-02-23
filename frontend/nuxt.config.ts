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
    '@': '.',
    '~': '.',
    '@components': './app/components',
    '@composables': './app/composables',
    '@layouts': './app/layouts',
    '@pages': './app/pages',
    '@assets': './app/assets',
    '@styles': './app/assets/styles',
    '@fonts': './app/assets/fonts',
    '@images': './app/assets/images',
  }
})
