import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { D as DefaultBtn } from "./InputPhone-DQEXtS7N.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHead",
  __ssrInlineRender: true,
  props: {
    data: {},
    page: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["pagehead", _ctx.page]
      }, _attrs))} data-v-07f0119b><div class="container" data-v-07f0119b><div class="pagehead_main" data-v-07f0119b><div class="pagehead__content" data-v-07f0119b><h1 data-v-07f0119b>${ssrInterpolate(_ctx.data.title)}</h1><div class="pagehead__txt" data-v-07f0119b>${ssrInterpolate(_ctx.data.txt)}</div><div class="pagehead_btn" data-v-07f0119b>`);
      if (_ctx.data.btn) {
        _push(ssrRenderComponent(DefaultBtn, {
          name: "Арендовать",
          type: "secondary",
          color: "black",
          size: "large"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="pagehead__img" data-v-07f0119b><img${ssrRenderAttr("src", _ctx.data.img)} alt="" data-v-07f0119b></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/head/PageHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageHead = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07f0119b"]]);
export {
  PageHead as P
};
//# sourceMappingURL=PageHead-C9K-KHiO.js.map
