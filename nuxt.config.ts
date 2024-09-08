// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/style.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          `,
        },
      },
    },
  },

  modules: [
    "@nuxt/icon",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  plugins: ["~/plugins/yandex-pay.js"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          src: "https://pay.yandex.ru/sdk/v1/pay.js",
          async: true,
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "thumbs"],
  },

  build: {
    transpile: ["vue-toastification"],
  },

  icon: {
    provider: "iconify",
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons",
      },
    ],
  },

  compatibilityDate: "2024-09-03",

  runtimeConfig: {
    public: {
      DOMAIN: process.env.DOMAIN,
      BASE_URL: process.env.BASE_URL,
      CONSUMER_KEY: process.env.CONSUMER_KEY,
      CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    },
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  },

  nitro: {
    devProxy: {
      "/api/": {
        target: process.env.BASE_URL,
        changeOrigin: true,
      },
    },
  },
});
