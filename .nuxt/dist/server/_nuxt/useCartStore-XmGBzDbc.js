import { f as defineStore, s as storeToRefs, b as useNuxtApp, p as persistedState } from "../server.mjs";
const useCartStore = defineStore("carts", {
  state: () => ({
    carts: [],
    currentOrder: {}
  }),
  actions: {
    addCart(item) {
      console.log(item);
      const existingCartItem = this.carts.find(
        (cart) => cart.id === item.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        this.carts.push({ ...item, quantity: 1 });
      }
    },
    removeCart(item) {
      const existingCartItem = this.carts.find(
        (cart) => cart.id === item.id
      );
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          existingCartItem.quantity -= 1;
        } else {
          this.carts = this.carts.filter((cart) => cart.id !== item.id);
        }
      }
    },
    updateCartItem(updatedItem) {
      const existingCartItem = this.carts.find(
        (cart) => cart.id === updatedItem.id
      );
      if (existingCartItem) {
        existingCartItem.quantity = updatedItem.quantity || existingCartItem.quantity;
        existingCartItem.color = updatedItem.color || existingCartItem.color;
        existingCartItem.price = updatedItem.price || existingCartItem.price;
      }
    },
    removeCartItem(itemId) {
      this.carts = this.carts.filter((cart) => cart.id !== itemId);
    },
    async createOrder() {
      try {
        const { $domain } = useNuxtApp();
        const response = $domain.post(
          "/wp-json/wc/v3/orders",
          this.currentOrder
        );
      } catch (error) {
      }
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
const useCartStoreRefs = () => storeToRefs(useCartStore());
export {
  useCartStore as a,
  useCartStoreRefs as u
};
//# sourceMappingURL=useCartStore-XmGBzDbc.js.map
