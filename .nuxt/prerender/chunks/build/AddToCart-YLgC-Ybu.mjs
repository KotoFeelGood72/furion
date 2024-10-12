import { _ as __nuxt_component_0 } from './index-DsmiHCAq.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddToCart",
  __ssrInlineRender: true,
  props: {
    type: { default: "secondary" },
    active: { type: Boolean, default: false },
    name: { default: "\u041A\u0443\u043F\u0438\u0442\u044C" },
    icon: {},
    center: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isColorSheme = computed(() => props.color);
    const isType = computed(() => props.type);
    const isCenter = computed(() => props.center);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["button", [
          "button",
          unref(isColorSheme),
          unref(isType),
          { center: unref(isCenter) },
          { active: _ctx.active }
        ]]
      }, _attrs))} data-v-84cd894e>`);
      if (_ctx.icon) {
        _push(`<div class="btn-icon" data-v-84cd894e>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: _ctx.active ? "custom:cart" : "custom:cart-white",
          size: "26"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-84cd894e>${ssrInterpolate(_ctx.name)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AddToCart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddToCart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84cd894e"]]);

export { AddToCart as A };
//# sourceMappingURL=AddToCart-YLgC-Ybu.mjs.map
