import { defineStore } from "pinia";
import axios from "axios";
import { storeToRefs } from "pinia";

export const useUserStore = defineStore("users", {
  state: () => ({
    user: null as any, // Храним данные пользователя
    data: null as any, // Дополнительные данные пользователя
  }),
  actions: {
    // Метод для логина пользователя
    async loginUser(data: any) {
      this.user = data; // Сохраняем данные пользователя в состоянии
      // Optionally: await this.fetchUser(); // Можно сразу вызвать fetchUser для получения дополнительных данных
    },

    // Получение данных пользователя
    async fetchUser() {
      const { $main } = useNuxtApp(); // Используем доступ к основному API через Nuxt
      if (!this.user) {
        throw new Error("Пользователь не авторизован");
      }
      try {
        const response = await $main.get(
          `/users/${this.user.user_data.ID}.json`
        ); // Запрос к файлу JSON с данными пользователя
        if (response.data) {
          this.data = response.data; // Сохраняем полученные данные
        }
      } catch (error) {
        console.error("Ошибка получения данных пользователя:", error);
        throw new Error("Токен недействителен. Выполнен выход."); // Обрабатываем ошибку токена
      }
    },

    // Метод для выхода пользователя
    async logout() {
      try {
        const response = await axios.post(
          "https://fura.dynamic-devs-collective.ru/custom-auth/v1/logout"
        );
        if (response.status === 200) {
          console.log("Пользователь успешно вышел");
        } else {
          console.warn("Ошибка при выполнении logout");
        }
      } catch (error) {
        console.error("Ошибка выполнения запроса logout:", error);
      }
      // Очищаем данные пользователя после выхода
      this.user = null;
      this.data = null; // Очищаем дополнительные данные пользователя
      localStorage.removeItem("users"); // Удаляем данные пользователя из localStorage
    },
  },
  persist: {
    storage: persistedState.localStorage, // Сохраняем данные пользователя в localStorage
  },
});

// Хук для получения реактивных данных из Pinia
export const useUserStoreRefs = () => storeToRefs(useUserStore());
