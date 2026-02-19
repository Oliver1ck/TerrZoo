// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  alias: {
    '@': '.',
    '~': '.',
    '@components': './components',
    '@composables': './composables',
    '@layouts': './layouts',
    '@pages': './pages',
    '@assets': './assets',
    '@types': './types',
  }
})
