import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "@vue/devtools-api";
import "@iconify/vue";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue-the-mask";
import "axios";
const _imports_0 = publicAssetsURL("/img/thanks.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "thanks" }, _attrs))} data-v-4063dc9d><div class="container" data-v-4063dc9d><div class="thanks__main" data-v-4063dc9d><h1 data-v-4063dc9d>Спасибо за покупку!</h1><div class="thanks_img" data-v-4063dc9d><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4063dc9d></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thanks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4063dc9d"]]);
export {
  thanks as default
};
//# sourceMappingURL=thanks-Dl3Ov6cw.js.map
