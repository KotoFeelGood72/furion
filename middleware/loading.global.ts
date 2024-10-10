import { useLoadingStore } from "~/store/useLoadingStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const { setLoading } = useLoadingStore();
  const nuxtApp = useNuxtApp();
  setLoading(true);
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  });
});
