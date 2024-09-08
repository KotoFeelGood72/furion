<template>
  <div class="hero_slider">
    <div class="container">
      <Swiper
        :slides-per-view="1"
        :modules="[Navigation, Pagination, EffectFade]"
        :speed="700"
        :effect="'fade'"
        :navigation="{
          prevEl: '.hero_prev',
          nextEl: '.hero_next',
        }"
        :pagination="{ el: '.hero-pagination', clickable: true }"
      >
        <SwiperSlide
          v-for="(item, i) in slides"
          :key="'hero-item-slide-' + item.id"
        >
          <div class="hero_slide">
            <div class="hero_slide__content">
              <p>{{ item.headtitle }}</p>
              <h1>{{ item.title }}</h1>
              <span>{{ item.subtitle }}</span>
              <div class="hero__link">
                <DefaultBtn
                  name="Купить"
                  type="secondary"
                  color="black"
                  size="large"
                  @click="router.push('/shop/')"
                />
              </div>
            </div>
            <div class="hero_slide__img">
              <img :src="item.img.link" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="hero_navigation">
        <div class="hero_prev">
          <Icon name="custom:left" size="70" />
        </div>
        <div class="hero_next">
          <Icon name="custom:right" size="70" />
        </div>
      </div>
      <div class="hero-pagination"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import DefaultBtn from "../ui/DefaultBtn.vue";
import { useRouter } from "vue-router";

const router = useRouter();
defineProps<{
  slides?: any;
}>();
</script>

<style lang="scss" scoped>
:deep(.container) {
  position: relative;
}

.hero_slider {
  background-color: $light;
  // margin-top: -17rem;
  padding-top: 5.6rem;
  // padding-top: 29.3rem;
}

.hero_slide {
  @include flex-space;
  width: 100%;
  padding-left: 14.5rem;
  z-index: -1;

  .hero_slide__content {
    max-width: 78.9rem;
    // padding: 0 0 19.6rem 0;

    & > p {
      font-size: 3rem;
      color: $brown;
      font-family: $font_2;
      margin-bottom: 2.5rem;
    }

    h1 {
      font-size: 6.5rem;
      line-height: 120%;
      margin-bottom: 2rem;
      margin-right: -7rem;
      //   margin-right: -15rem;
    }

    span {
      font-size: 2.4rem;
      color: $gray;
      margin-bottom: 5.2rem;
      display: block;
    }
  }

  .hero_slide__img {
    min-width: 84.9rem;

    img {
      @include flex-center;
      width: 100%;
      height: 100%;
    }
  }
}

.hero__link {
  display: inline-flex;
  position: relative;
  z-index: 99;
}

.hero_navigation {
  @include flex-space;
  width: 100%;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 33;

  div {
    cursor: pointer;
    pointer-events: all;
  }

  .hero_prev,
  .hero_next {
    color: #9d9d9d;
    &:hover {
      color: $brown;
    }
  }
}

.swiper-slide {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &-active {
    opacity: 1;
  }
}

.hero_slide__content,
.hero_slide__img {
  opacity: 0;
  transform: translateX(-5rem);
  transition: all 0.7s ease;
}

.swiper-slide-active .hero_slide__content,
.swiper-slide-active .hero_slide__img {
  opacity: 1;
  transform: translateX(0);
}

.hero-pagination {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4rem;
  z-index: 22;
  @include flex-center;
  gap: 3rem;
}

:deep(.swiper-pagination-bullet) {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: 0.1rem solid $brown;
  background-color: $white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: $lbrown;
}

.hero_slider * {
  z-index: 0;
  transition: none !important;
}

.hero__link {
  z-index: 9999 !important;
}
.hero_navigation {
  pointer-events: none;
}
</style>
