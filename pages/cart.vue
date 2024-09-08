<template>
  <div class="cart">
    <div class="container">
      <div class="cart_main">
        <div class="cart_main__content">
          <h2>Корзина ({{ carts.length }})</h2>
          <div class="cart_products__w">
            <div class="cart_products__head">
              <div class="cart_select__all">
                <input
                  type="checkbox"
                  name="select-all"
                  id="select-all"
                  :checked="isAllSelected"
                  @change="toggleSelectAll"
                />
                <label for="select-all">Выбрать все</label>
              </div>
              <div
                class="cart_delete"
                :class="{ active: hasSelectedItems }"
                @click="deleteSelectedItems"
              >
                Удалить
              </div>
            </div>
            <ul class="cart_products__list">
              <li
                class="cart_products__item"
                v-for="(item, i) in carts"
                :key="'carts-item-' + i"
              >
                <div class="cart_select__single">
                  <input
                    type="checkbox"
                    name="single-cart"
                    :id="item.id"
                    :checked="selectedItems.includes(item.id)"
                    @change="toggleSelectItem(item.id)"
                  />
                  <label :for="item.id"></label>
                </div>
                <div class="cart_item__img">
                  <img :src="item.thumbnail" alt="" />
                </div>
                <div class="cart_item__content">
                  <h3>{{ item.title }}</h3>
                  <ul>
                    <li>
                      <p>Цвет:</p>
                      <span>{{ item.color }}</span>
                    </li>
                    <li>
                      <p>Размеры:</p>
                      <span>180х150</span>
                    </li>
                  </ul>
                </div>
                <div class="cart_item__action">
                  <div class="cart_item__price">{{ item.price }} Р</div>
                  <Qty
                    :initialQuantity="item.quantity"
                    @updateQuantity="
                      (quantity) => updateQuantity(item, quantity)
                    "
                    @clear="removeCartItem(item.id)"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div class="list-block">
            <BlockUserInfo />
            <BlockDeliveryCalc />
            <BlockPayment />
          </div>
        </div>
        <div class="cart_totals">
          <div class="cart_total__head">
            <span>Итого</span>
            <p>{{ totalPrice }} P</p>
          </div>
          <div class="cart_total__body">
            <ul>
              <li>
                <span>{{ carts.length }} товара(ов) на сумму</span>
                <p>{{ totalPrice }}</p>
              </li>
              <li>
                <span>Доставка</span>
                <p>520</p>
              </li>
            </ul>
          </div>
          <DefaultBtn
            name="К оформлению заказа"
            type="primary"
            color="brown"
            size="small"
            @click="createOrder"
          />
          <div class="cart_total__privacy">
            Нажимая кнопку 'Оформить заказ', Вы принимаете условия
            соответствующей
            <NuxtLink to="/">оферты: Оферты для физических лиц</NuxtLink> или
            <NuxtLink to="/"> Оферты для юридических лиц и ИП</NuxtLink>,
            Политики конфиденциальности, а также даете Согласие на
            <NuxtLink to="/"
              >обработку Ваших персональных данных и их передачу.</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultBtn from "~/components/ui/DefaultBtn.vue";
import Qty from "~/components/ui/Qty.vue";
import BlockUserInfo from "~/components/blocks/BlockUserInfo.vue";
import BlockDeliveryCalc from "~/components/blocks/BlockDeliveryCalc.vue";
import BlockPayment from "~/components/blocks/BlockPayment.vue";
import { ref, computed, watch } from "vue";
import { useCartStoreRefs, useCartStore } from "~/store/useCartStore";

const { carts, currentOrder } = useCartStoreRefs();
const { updateCartItem, removeCartItem, createOrder } = useCartStore();

const selectedItems = ref<string[]>([]);

const hasSelectedItems = computed(() => {
  return selectedItems.value.length > 0;
});

const updateQuantity = (item: any, quantity: number) => {
  item.quantity = quantity;
  updateCartItem(item);
};

const deleteSelectedItems = () => {
  selectedItems.value.forEach((itemId) => {
    removeCartItem(itemId);
  });
  selectedItems.value = [];
};

const toggleSelectItem = (itemId: string) => {
  if (selectedItems.value.includes(itemId)) {
    selectedItems.value = selectedItems.value.filter((id) => id !== itemId);
  } else {
    selectedItems.value.push(itemId);
  }
};

const toggleSelectAll = (event: Event) => {
  if ((event.target as HTMLInputElement).checked) {
    selectedItems.value = carts.value.map((item: any) => item.id);
  } else {
    selectedItems.value = [];
  }
};

const isAllSelected = computed(() => {
  return (
    carts.value.length > 0 && selectedItems.value.length === carts.value.length
  );
});

const totalPrice = computed(() => {
  return carts.value.reduce((total: any, item: any) => {
    return total + item.price * item.quantity;
  }, 0);
});

// Следим за изменениями в корзине и обновляем currentOrder
watch(
  carts,
  (newCarts) => {
    currentOrder.value = {
      ...currentOrder.value,
      items: newCarts.map((item) => ({
        id: item.id,
        name: item.title,
        quantity: item.quantity,
        price: item.price,
        color: item.color,
        thumbnail: item.thumbnail,
      })),
    };
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.cart {
  background-color: $light;
}
.cart_main {
  padding-top: calc($header + 10rem);
  @include flex-start;
  gap: 16rem;
  align-items: flex-start;
  padding-bottom: 13.5rem;
}

.cart_main__content {
  flex-grow: 1;
  h2 {
    font-size: 5rem;
    margin-bottom: 4rem;
  }
}

.cart_totals {
  max-width: 43.5rem;
  position: sticky;
  top: 2rem;
  right: 0;
}

.cart_products__head {
  @include flex-space;
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.cart_total__head {
  @include flex-space;
  gap: 2rem;
  margin-bottom: 4rem;
  span,
  p {
    font-size: 4rem;
    font-family: $font_2;
  }
}

.cart_total__body {
  ul {
    margin-bottom: 4.5rem;
  }
  li {
    @include flex-space;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}

.cart_total__privacy {
  padding-top: 3.5rem;
  font-size: 1.6rem;
  a {
    color: $brown;
  }
}

.cart_select__all {
  input {
    display: none;
    &:checked ~ label {
      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  label {
    color: $brown;
    position: relative;
    padding-left: 3.1rem;
    font-size: 1.6rem;
    cursor: pointer;
    user-select: none;
    &:before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1.6rem;
      height: 1.6rem;
      border: 0.1rem solid $brown;
      content: "";
    }
    &:after {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1.6rem;
      height: 1.6rem;
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24'%3E%3Cpath fill='%23946b55' d='M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47'/%3E%3C/svg%3E");
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
  }
}
.cart_delete {
  font-size: 1.6rem;
  cursor: pointer;
  line-height: 110%;
  transition: all 0.3s ease-in-out;
  color: $gray;
  pointer-events: none;
  border-bottom: 0.1rem solid $light;
  &.active {
    pointer-events: all;
    color: #b23e00;
    border-bottom: 0.1rem solid #b23e00;
  }
  &:hover {
    border-bottom: 0.1rem solid transparent;
  }
}

.cart_products__item {
  @include flex-start;
  background-color: $white;
  padding: 2rem 4rem 2rem 5.1rem;
  gap: 5rem;
  position: relative;
}

.cart_item__img {
  min-width: 23.3rem;
  width: 23.3rem;
  height: 17.9rem;
  @include flex-center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.cart_item__content {
  // max-width: 41.6rem;
  flex-grow: 1;

  h3 {
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    li {
      @include flex-start;
      gap: 1rem;
      p {
        font-family: $font_2;
      }
      span {
        color: $brown;
      }
    }
  }
}

.cart_item__price {
  text-align: center;
  font-size: 3rem;
  font-family: $font_2;
  margin-bottom: 3.2rem;
}

.cart_products__w {
  margin-bottom: 3.5rem;
}

.userInfo {
  background-color: $white;
  padding: 1.7rem 2.4rem 3.4rem 2.4rem;
}

.list-block {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.cart_select__single {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.5rem;
  input {
    display: none;
    &:checked + label:after {
      opacity: 1;
      visibility: visible;
    }
  }

  label {
    border: 0.1rem solid $brown;
    width: 1.6rem;
    height: 1.6rem;
    @include flex-center;
    cursor: pointer;
    &:after {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1.6rem;
      height: 1.6rem;
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24'%3E%3Cpath fill='%23946b55' d='M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47'/%3E%3C/svg%3E");
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
  }
}

.cart_products__list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
</style>
