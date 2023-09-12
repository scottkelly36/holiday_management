import { postcss } from "postcss-nested";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      "postcss-simple-vars": {},
      "postcss-custom-media": {},
      "postcss-mixins": {},
      "postcss-calc": {},
    },
  },
  css: [
    {
      lang: 'postcss',
      src:  '~/assets/css/main.css',
    }
  ]
});
