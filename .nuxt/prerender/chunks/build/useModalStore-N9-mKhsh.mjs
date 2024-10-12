import { useSSRContext, defineComponent, computed, mergeProps } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, f as defineStore, s as storeToRefs } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inputs",
  __ssrInlineRender: true,
  props: {
    type: { default: "text" },
    placeholder: { default: "placeholder" },
    message: { default: "" },
    error: { type: Boolean, default: false },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localValue = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))} data-v-269a4a20><div class="input__w" data-v-269a4a20><input${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderDynamicModel(_ctx.type, localValue.value, null)} data-v-269a4a20></div>`);
      if (_ctx.error) {
        _push(`<span class="input-message" data-v-269a4a20>${ssrInterpolate(_ctx.message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Inputs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Inputs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-269a4a20"]]);
const useModalStore = defineStore("modal", {
  state: () => ({
    modals: {
      auth: false,
      callback: false
    }
  }),
  actions: {
    openModal(modalName) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName) {
      this.modals[modalName] = false;
    },
    closeAllModals() {
      Object.keys(this.modals).forEach((modalName) => {
        this.modals[modalName] = false;
      });
    }
  }
});
const useModalStoreRefs = () => storeToRefs(useModalStore());

export { Inputs as I, useModalStoreRefs as a, useModalStore as u };
//# sourceMappingURL=useModalStore-N9-mKhsh.mjs.map
