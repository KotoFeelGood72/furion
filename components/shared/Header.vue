<template>
  <header class="header" :class="{ gray: isHome, scrolled: isScrolled }">
    <div class="container">
      <div class="header_top">
        <div class="header_col__left">
          <div class="header_phone">
            <a target="_blank" href="tel:+78002222659">+7 (800) 222 26 59 </a>
          </div>
          <Socials />
        </div>
        <div class="header_center" :class="{ 'logo--scrolled': isScrolled }">
          <Logo />
        </div>
        <div class="header_col__right">
          <DefaultBtn
            name="Связаться с нами"
            type="secondary"
            color="brown"
            size="xsmall"
            @click="isCallBackModal"
          />
          <div class="header__action">
            <div class="header_user" @click="targetUser()">
              <IconBtn />
              <p v-if="user && user.user_data">
                {{ user.user_data.first_name }}
              </p>
            </div>
            <div class="header_carts">
              <div class="counter">{{ isCarts.length }}</div>
              <IconBtn icon="custom:cart" @click="router.push('/cart')" />
            </div>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <Nav />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import Socials from "@/components/ui/Socials.vue";
import Logo from "../ui/Logo.vue";
import DefaultBtn from "../ui/DefaultBtn.vue";
import IconBtn from "../ui/IconBtn.vue";
import Nav from "../ui/Nav.vue";
import { useRoute, useRouter } from "vue-router";
import { useModalStore } from "~/store/useModalStore";
import { useUserStoreRefs } from "~/store/useUserStore";
import { useCartStoreRefs } from "~/store/useCartStore";

const route = useRoute();
const router = useRouter();
const { openModal, closeModal } = useModalStore();
const { user } = useUserStoreRefs();
const { carts } = useCartStoreRefs();

const isHome = computed(() => route.name != "index");
const isCarts = computed(() => carts.value);

const isCallBackModal = () => {
  openModal("callback");
};

const targetUser = () => {
  if (!user.value || !user.value.token) {
    openModal("auth");
  } else {
    closeModal("auth");
    router.push("profile");
  }
};

// Логика для добавления класса при прокрутке
const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 100) {
    // Порог прокрутки, при котором добавляется класс
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.header {
  padding-bottom: 4rem;
  // background-color: $light;
  position: fixed;
  // position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  height: $header;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &.gray {
    background-color: $light;
  }

  &.scrolled {
    height: 11rem;
    background-color: #f0f1f59c;
    backdrop-filter: blur(1rem);
    border-bottom: 0.1rem solid #f0f1f59c;
    :deep(.logo) {
      transform: translateY(-300%);
    }
    .header_bottom {
      transform: translateY(-320%);
    }
  }
}

.header_bottom {
  transition: all 0.3s ease-in-out;
}
.header_top {
  @include flex-space;
  padding: 3.4rem 0 4.6rem 0;
  position: relative;
}

.header_center {
  position: absolute;
  left: 49.2%;
  top: 46.3%;
  transform: translate(-50%, -50%);
}

.header_col__left,
.header_col__right,
.header__action {
  @include flex-start;
  gap: 4rem;
}

.header_col__right {
  gap: 3.5rem;
}
.header__action {
  gap: 2.4rem;
  min-width: 7.8rem;
  position: relative;
  z-index: 11;
}
.header_col__left {
  align-items: flex-end;
}
.header_phone {
  font-size: 1.8rem;
  font-family: $font_2;
  color: $gray;
}

.header_user {
  @include flex-start;
  gap: 1rem;
  font-size: 1.4rem;
  font-family: $font_3;
  color: $brown;
  cursor: pointer;
}

.header_carts {
  position: relative;
  @include flex-center;
}

.counter {
  font-size: 1.2rem;
  background-color: $brown;
  width: 1.5rem;
  height: 1.5rem;
  @include flex-center;
  font-family: $font_4;
  color: $white;
  border-radius: 100%;
  position: absolute;
  top: -0.5rem;
  right: -0.8rem;
}
</style>
