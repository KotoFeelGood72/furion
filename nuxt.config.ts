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
      csp: {
        reportOnly: false,
        // hashAlgorithm: "sha256",
        policies: {
          "default-src": ["'self'"],
          "script-src": [
            "'self'",
            "https://mc.yandex.ru",
            "https://yastatic.net",
            "https://pay.yandex.ru",
          ],
          "connect-src": [
            "'self'",
            "https://mc.yandex.ru",
            "https://mc.yandex.com",
            "https://pay.yandex.ru",
          ],
          "frame-src": [
            "'self'",
            "https://pay.yandex.ru",
            "https://mc.yandex.ru",
            "https://mc.yandex.com",
          ],
          "img-src": ["'self'", "data:", "https://mc.yandex.ru"],
        },
      },
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
      YANDEX_URL: process.env.YANDEX_URL,
    },
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
