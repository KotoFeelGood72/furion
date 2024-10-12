import { f as defineStore, b as useNuxtApp, p as persistedState, s as storeToRefs } from './server.mjs';

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

export { useProductsStore as a, useProductsStoreRefs as u };
//# sourceMappingURL=useProductsStore-C71uKDvE.mjs.map
