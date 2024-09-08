import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPersistedstate"]: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/@pinia-plugin-persistedstate/nuxt
     */
    ["piniaPersistedstate"]: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/@pinia-plugin-persistedstate/nuxt
     */
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   GOOGLE_APPLICATION_CREDENTIALS: string,

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },
  }
  interface PublicRuntimeConfig {
   DOMAIN: string,

   BASE_URL: string,

   CONSUMER_KEY: string,

   CONSUMER_SECRET: string,

   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }