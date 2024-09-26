<template>
  <main class="main">
    <slot name="header"></slot>
    <div class="page-bg" v-if="modals.auth" @click="closeModal('auth')"></div>
    <div class="content">
      <slot />
    </div>
    <transition name="modal">
      <ModalAuth v-if="modals.auth" class="modal-animate" />
    </transition>
    <slot name="footer"></slot>
  </main>
</template>

<script setup lang="ts">
import ModalAuth from "~/components/modal/ModalAuth.vue";
import { useModalStoreRefs, useModalStore } from "~/store/useModalStore";
import { useSlots } from "vue";

const { modals } = useModalStoreRefs();
const { closeModal } = useModalStore();

const slots = useSlots();

slots;
</script>

<style lang="scss">
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s ease;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(81, 81, 81, 0.164);
  z-index: 99;
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
