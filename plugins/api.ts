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
    auth: {
      username: config.public.CONSUMER_KEY, // Consumer Key
      password: config.public.CONSUMER_SECRET, // Consumer Secret
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
