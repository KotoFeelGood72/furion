<!-- @format -->

<template>
  <div class="about">
    <div class="container">
      <div class="about_main">
        <div class="about_head">
          <h2>{{ title }}</h2>
          <p>{{ txt }}</p>
        </div>
        <ul class="about_grid">
          <li
            class="about_item"
            v-for="(item, i) in gallery"
            :key="'about-item-' + i"
          >
            <a :href="item.img.url">
              <img :src="item.img.url" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  gallery: any;
  title: string;
  txt: string;
}>();
</script>

<style scoped lang="scss">
.about {
  background-color: #fdfdff;
}

.about_main {
  padding: 5rem 0 10rem 0;
}

.about_head {
  margin-bottom: 4rem;
  h2 {
    font-size: 4rem;
    margin-bottom: 3rem;
    font-family: $font_2;
    font-weight: 500;
  }

  p {
    max-width: 110rem;
    color: $gray;
  }
}

.about_grid {
  display: grid;
  grid-template-areas:
    "a b d"
    "a c d";

  li {
    &:nth-child(1) {
      grid-area: a;
      height: 70.2rem;
    }
    &:nth-child(2) {
      grid-area: b;
      height: 40.4rem;
    }
    &:nth-child(3) {
      grid-area: c;
      height: 29.8rem;
    }
    &:nth-child(4) {
      grid-area: d;
      height: 70.2rem;
    }
  }
}

.about_item {
  a {
    @include flex-center;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      @include flex-center;
      object-fit: cover;
    }
  }
}
</style>
