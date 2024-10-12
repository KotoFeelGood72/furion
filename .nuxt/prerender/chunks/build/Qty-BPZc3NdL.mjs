import { _ as __nuxt_component_0 } from './index-DsmiHCAq.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Qty",
  __ssrInlineRender: true,
  props: {
    initialQuantity: {}
  },
  emits: ["updateQuantity", "clear"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const quantity = ref(props.initialQuantity);
    watch(
      () => props.initialQuantity,
      (newValue) => {
        quantity.value = newValue;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quantity" }, _attrs))} data-v-667547bb><button class="quantity-btn" data-v-667547bb>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ic:baseline-minus" }, null, _parent));
      _push(`</button><input type="number"${ssrRenderAttr("value", quantity.value)} class="quantity-input" data-v-667547bb><button class="quantity-btn" data-v-667547bb>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ic:baseline-plus" }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Qty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Qty = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-667547bb"]]);

export { Qty as Q };
//# sourceMappingURL=Qty-BPZc3NdL.mjs.map
