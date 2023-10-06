// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  postcss: {
    parse: 'postcss-scss',
    plugins: {
      "postcss-simple-vars": {},
      "postcss-custom-media": {},
      "postcss-mixins": {},
      "postcss-calc": {},
      "postcss-nesting": {},
    },
  },
  css: [
    {
      lang: 'postcss',
      src:  '~/assets/css/main.css',
    }
  ]
});
