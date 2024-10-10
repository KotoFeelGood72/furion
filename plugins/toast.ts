// toast.js
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    // hideProgressBar: true,
    position: POSITION.BOTTOM_LEFT,
    timeout: 2000,
  });
});
