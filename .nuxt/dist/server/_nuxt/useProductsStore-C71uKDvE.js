import { f as defineStore, s as storeToRefs, b as useNuxtApp, p as persistedState } from "../server.mjs";
import "vue";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
const useProductsStore = defineStore("products", {
  state: () => ({
    products: null,
    single: {}
  }),
  actions: {
    async getAllProducts() {
      try {
        const { $main } = useNuxtApp();
        const response = await $main.get("/all-products.json");
        this.products = response.data;
      } catch (error) {
      }
    },
    getProductBySlug(slug) {
      if (!this.products) {
        return null;
      }
      return this.products.find((product) => product.slug === slug) || null;
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
const useProductsStoreRefs = () => storeToRefs(useProductsStore());
export {
  useProductsStore as a,
  useProductsStoreRefs as u
};
//# sourceMappingURL=useProductsStore-C71uKDvE.js.map
