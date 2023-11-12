// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Sitetitle',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'img/favicon.ico'
        },

        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/lib/animate/animate.min.css' },
        { rel: 'stylesheet', href: '/lib/owlcarousel/assets/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js' },
        { src: '/lib/wow/wow.min.js' },
        { src: '/lib/easing/easing.min.js' },
        { src: '/lib/waypoints/waypoints.min.js' },
        { src: '/lib/owlcarousel/owl.carousel.min.js' },
        { src: '/lib/counterup/counterup.min.js' },
        { src: '/js/main.js' }
      ]
    }
  },
  css: ['~/assets/style.css'],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ],
    '@nuxt/image'
  ],
  nitro: {
    serveStatic: true
  },
  build: {
    transpile: ['vue-toastification']
  },
  devServerHandlers: [],
  runtimeConfig: {
    public: {
      baseURL: 'localhost'
    }
  }
})
