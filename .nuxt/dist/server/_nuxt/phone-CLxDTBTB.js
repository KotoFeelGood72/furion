import { defineComponent, ref, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "phone",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref(false);
    ref(false);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/edit/phone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phone = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c669a2b"]]);
export {
  phone as default
};
//# sourceMappingURL=phone-CLxDTBTB.js.map
