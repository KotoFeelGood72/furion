<template>
  <nav class="nav">
    <NuxtLink v-for="(item, i) in nav" :key="'nav-item-' + i" :to="item.link"
      >{{ item.name }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const nav = ref<any>([
  { name: "Каталог", link: "/shop" },
  { name: "Аренда", link: "/rent" },
  { name: "Для дизайнеров", link: "/design" },
]);
</script>

<style scoped lang="scss">
.nav {
  @include flex-center;
  gap: 6rem;
  a {
    font-size: 1.8rem;
    &.router-link-exact-active {
      color: $brown;
      font-family: $font_2;
      font-weight: 500;
    }
  }
}
</style>
