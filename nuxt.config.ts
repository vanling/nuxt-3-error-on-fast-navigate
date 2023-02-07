// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
css: ['@/assets/css/transitions.css'],
app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
