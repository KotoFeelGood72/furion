<template>
  <div class="phone_input">
    <MaskInput v-model="localValue" mask="# (###)-###-####" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import { MaskInput } from "vue-3-mask";
import { computed, defineEmits, defineProps } from "vue";

const props = defineProps<{
  modelValue: any;
  placeholder: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss">
.phone_input {
  width: 100%;
  input {
    @include app;
    background-color: $white;
    padding: 2rem;
    border: 0.1rem solid $gray;
    color: $gray;
    width: 100%;
    font-size: 1.8rem;
    height: 6.1rem;
    &::-webkit-input-placeholder {
      color: $gray;
    }
  }
}
</style>
