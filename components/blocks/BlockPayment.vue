<template>
  <div class="payment">
    <div class="payment__address">
      <h3>Выберите способ оплаты</h3>
    </div>
    <div class="payment__method">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="payment__method-item"
      >
        <input
          type="radio"
          :id="method.name"
          v-model="selectedMethod"
          :value="method.name"
        />
        <label :for="method.name">
          <span>{{ method.name }}</span>
          <img v-if="method.logo" :src="method.logo" alt="" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useCartStoreRefs } from "~/store/useCartStore";

// Инициализируем выбранный метод оплаты значением по умолчанию
const selectedMethod = ref("Оплата картой онлайн или через СБП");

// Массив способов оплаты
const paymentMethods = [
  {
    name: "Оплата картой онлайн или через СБП",
  },
  { name: "Оплатить", logo: "/img/split.png" },
];

// Достаем текущий заказ из стора
const { currentOrder } = useCartStoreRefs();

// Следим за изменением способа оплаты и обновляем currentOrder
watch(selectedMethod, (newMethod) => {
  currentOrder.value = {
    ...currentOrder.value,
    paymentMethod: newMethod, // Добавляем выбранный способ оплаты
  };
});

// Инициализация currentOrder при монтировании компонента
onMounted(() => {
  currentOrder.value = {
    ...currentOrder.value,
    paymentMethod: selectedMethod.value, // Устанавливаем значение по умолчанию в заказ
  };
});
</script>

<style scoped lang="scss">
.payment {
  background-color: $white;
  padding: 1.7rem 2.4rem 3.4rem 2.4rem;

  h3 {
    font-size: 3rem;
    margin-bottom: 3rem;
    font-family: $font_2;
    font-weight: 500;
  }
}

.payment__method-item {
  input:checked + label {
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
  label {
    cursor: pointer;
    @include flex-start;
    position: relative;
    padding-left: 3.1rem;
    font-size: 1.8rem;

    span {
      margin-right: 1.2rem;
    }

    img {
      @include flex-start;
    }
    &:before {
      position: absolute;
      top: 45%;
      left: 0%;
      width: 1.6rem;
      height: 1.6rem;
      border: 0.1rem solid $brown;
      border-radius: 100%;
      content: "";
      transform: translateY(-50%);
    }
    &:after {
      position: absolute;
      top: 45%;
      left: 0.3rem;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      content: "";
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      background-position: center center;
      background-color: $brown;
      border-radius: 100%;
    }
  }

  input {
    display: none;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
