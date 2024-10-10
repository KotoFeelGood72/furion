<template>
  <main class="main">
    <Header />
    <div class="content">
      <slot />
    </div>
    <transition name="modal">
      <ModalAuth v-if="modals.auth" class="modal-animate" />
    </transition>
    <transition name="modal">
      <ModalCallback v-if="modals.callback" class="modal-animate" />
    </transition>
    <transition name="fade-bg">
      <div v-if="isModalActive" class="page-bg" @click="closeAllModals"></div>
    </transition>
    <Preloader />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import ModalAuth from "~/components/modal/ModalAuth.vue";
import ModalCallback from "~/components/modal/ModalCallback.vue";
import { useModalStoreRefs, useModalStore } from "~/store/useModalStore";
import Header from "~/components/shared/Header.vue";
import Footer from "~/components/shared/Footer.vue";
import { useProductsStore } from "@/store/useProductsStore";
import { useUserStore } from "@/store/useUserStore";
import Preloader from "~/components/shared/Preloader.vue";

const route = useRoute();
const { closeAllModals } = useModalStore();
const { modals } = useModalStoreRefs();
const { getAllProducts } = useProductsStore();
const { fetchUser } = useUserStore();

const isModalActive = computed(() => {
  return Object.values(modals.value).some((isActive) => isActive);
});

watch(
  () => route.fullPath,
  () => {
    closeAllModals();
  }
);

onMounted(async () => {
  await getAllProducts();
  await fetchUser();

  // Убираем прелоадер через 1.5 секунды после загрузки
  // setTimeout(() => {
  //   isLoading.value = false;
  // }, 1500);
});
</script>

<style lang="scss">
.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.modal-enter-to {
  transform: translateX(0%);
  opacity: 1;
}
Ы .modal-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.modal-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
