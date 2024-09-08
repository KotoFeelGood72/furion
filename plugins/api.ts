import axios from "axios";
import { useUserStoreRefs } from "~/store/useUserStore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { user } = useUserStoreRefs();

  // Создаем основной экземпляр axios
  const main = axios.create({
    baseURL: "/api/",
    params: {
      username: config.public.CONSUMER_KEY, // Consumer Key
      password: config.public.CONSUMER_SECRET,
    },
  });

  // Создаем экземпляр axios для домена
  const domain = axios.create({
    baseURL: config.public.DOMAIN,
    // params: {
    //   username: config.public.CONSUMER_KEY, // Consumer Key
    //   password: config.public.CONSUMER_SECRET,
    // },
    auth: {
      username: "ck_ea41c3ad9122e5d498e1e0c11b7ddde65acb37d7", // Consumer Key
      password: "cs_e4d516384889b824f90c0be99a69325c9a0f815e", // Consumer Secret
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Добавляем интерсепторы для добавления токена в запросы
  function addAuthInterceptor(axiosInstance: any) {
    axiosInstance.interceptors.request.use(
      (config: any) => {
        if (user.value && user.value.token) {
          config.headers.Authorization = `Bearer ${user.value.token}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  // Добавляем интерсепторы для обеих конфигураций axios
  addAuthInterceptor(main);
  // addAuthInterceptor(domain);
  // addAuthInterceptor(shop);

  return {
    provide: {
      main,
      domain,
    },
  };
});
