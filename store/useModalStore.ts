import { defineStore } from 'pinia';

interface ModalsState {
  auth: boolean;
}

export const useModalStore = defineStore('modal', {
  state: (): { modals: ModalsState } => ({
    modals: {
        auth: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState): void {
      this.modals[modalName] = false;
    },
  },
});


export const useModalStoreRefs = () => storeToRefs(useModalStore());