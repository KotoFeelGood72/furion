<template>
  <div class="products">
    <div :class="`products_slider products_slider_${products.id}`">
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :modules="[Navigation, Pagination]"
        :navigation="{
          prevEl: `.products_prev_${products.id}`,
          nextEl: `.products_next_${products.id}`,
        }"
        @slideChange="updateCurrentSlide"
      >
        <SwiperSlide
          v-for="(item, i) in products.acf.galereya"
          :key="'products-item-slide-' + item.id"
        >
          <img :src="item.img.url" :alt="item.img.alt" />
        </SwiperSlide>
      </Swiper>
      <div class="products_navigation">
        <div :class="`products_prev products_prev_${products.id}`">
          <Icon name="bi:chevron-left" size="30" />
        </div>
        <div class="products-pagination">
          <span class="fraction">
            {{ currentSlide }}
            <div class="total">/{{ totalSlides }}</div>
          </span>
        </div>
        <div :class="`products_next products_next_${products.id}`">
          <Icon name="bi:chevron-right" size="30" />
        </div>
      </div>
    </div>
    <div class="products_content">
      <div class="products_content__head">
        <h3>{{ products.title }}</h3>
        <div class="products_description">
          {{ products.acf.about_txt_product }}
        </div>
        <NuxtLink :to="`/shop/products/${products.slug}`"
          >Подробнее о товаре</NuxtLink
        >
      </div>
      <div class="products_content_bottom">
        <ul class="products_color_select">
          <li
            v-for="(color, index) in products.attributes.pa_colors"
            :key="index"
          >
            <input
              type="radio"
              :id="'color-' + index + '-' + products.id"
              :value="color"
              v-model="selectedColor"
              @change="updateCart"
            />
            <label :for="'color-' + index + '-' + products.id">
              <span :style="{ backgroundColor: colorMap[color] }"></span>
            </label>
          </li>
        </ul>
        <div class="products_color_selected">
          Цвет: <span>{{ selectedColor }}</span>
        </div>
        <div class="products_prices">
          <p>{{ products.price }} ₽</p>
          <div class="products_prices__right">
            <AddToCart
              :active="isCarts"
              :name="isCarts ? 'В корзине' : 'В корзину'"
              icon="custom:cart"
              @click="toggleCart"
            />
            <Qty
              :initialQuantity="cartItem?.quantity || selectedQuantity"
              v-if="isCarts"
              @updateQuantity="updateQuantity"
              @clear="removeCart(products)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { useCartStore, useCartStoreRefs } from "~/store/useCartStore";
import AddToCart from "../ui/AddToCart.vue";
import { ref, computed } from "vue";
import Qty from "../ui/Qty.vue";
import { useToast } from "vue-toastification";

// Используем Pinia store
const { addCart, removeCart, updateCartItem } = useCartStore();
const { carts } = useCartStoreRefs();

// Пропсы
const props = withDefaults(
  defineProps<{
    products: any;
  }>(),
  {
    products: null,
  }
);

// Реактивные переменные
const currentSlide = ref(1);
const totalSlides = ref(props.products.acf.galereya.length);
const toast = useToast();
const cartItem = computed(() =>
  carts.value.find((cart: any) => cart.id === props.products.id)
);

const selectedQuantity = ref(cartItem.value ? cartItem.value.quantity : 1);
const selectedColor = ref(props.products.attributes.pa_colors[0]);

// Карта цветов для визуального отображения
const colorMap: Record<string, string> = {
  Бежевый: "#D8D1B6",
  Зелёный: "#547C51",
  Серый: "#5B5E62",
  Темный: "#342F2F",
  ["Светло-жёлтый"]: "#EAECD7",
  Черный: "#000000",
  "Тёмно-серый": "#909090",
};

// Проверка, находится ли товар в корзине
const isCarts = computed(() =>
  carts.value.some((cart: any) => cart.id === props.products.id)
);

// Обновляем текущее количество слайдов
const updateCurrentSlide = (swiper: any) => {
  currentSlide.value = swiper.realIndex + 1;
};

// Метод для добавления или удаления товара из корзины
const toggleCart = () => {
  if (isCarts.value) {
    removeCart(props.products);
    toast.error("Удалено из корзины");
  } else {
    addCart({
      ...props.products,
      quantity: selectedQuantity.value,
      color: selectedColor.value,
    });
    toast.success("Добавлено в корзину");
  }
};

// Обновляем корзину при изменении цвета или количества
const updateCart = () => {
  if (isCarts.value) {
    updateCartItem({
      id: props.products.id,
      color: selectedColor.value,
      quantity: selectedQuantity.value,
    });
  }
};

// Обновляем количество товара
const updateQuantity = (quantity: number) => {
  selectedQuantity.value = quantity;
  updateCart();
};
</script>

<style scoped lang="scss">
.products {
  @include flex-start;
  gap: 16.5rem;
}

.products_slider {
  max-width: 74.5rem;
  position: relative;

  :deep(.swiper) {
    height: 60.5rem;
  }

  .swiper-slide {
    @include flex-center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.products_navigation {
  @include flex-space;
  margin-top: 3rem;

  div {
    cursor: pointer;
    @include flex-center;
  }
}

.fraction {
  font-size: 2.4rem;
  @include flex-center;
  font-family: $font_2;
}
.total {
  font-size: 2rem;
  color: #ababab;
  padding-left: 0.5rem;
}

.products_content__head {
  margin-bottom: 8rem;
  h3 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  a {
    color: $brown;
    font-size: 2.4rem;
    font-family: $font_2;
    text-decoration: underline;
    text-underline-position: under;
    display: inline-flex;
    &:hover {
      text-decoration: none;
    }
  }
}

.products_description {
  margin-bottom: 3.5rem;
  color: $gray;
}

.products_color_select {
  @include flex-start;
  margin-bottom: 3.5rem;
  gap: 2.1rem;
  li {
    width: 3.5rem;
    height: 3.5rem;
  }

  input {
    display: none;
    &:checked + label {
      border: 0.1rem solid $brown;
      span {
        transform: scale(0.8);
      }
    }
  }

  label {
    width: 100%;
    height: 100%;
    @include flex-center;
    cursor: pointer;
    span {
      transition: all 0.3s ease-in-out;
      width: 100%;
      @include flex-center;
      height: 100%;
    }
  }
}

.products_color_selected {
  margin-bottom: 7rem;
  font-size: 2.4rem;
  font-family: $font_2;
  @include flex-start;
  gap: 0.5rem;
  span {
    color: $brown;
    font-size: 2rem;
    font-family: $font_1;
  }
}

.products_prices {
  @include flex-start;
  gap: 10rem;
  p {
    font-size: 4rem;
    font-family: $font_2;
  }
}

.products_prices__right {
  @include flex-end;
  gap: 3.1rem;
}
</style>
