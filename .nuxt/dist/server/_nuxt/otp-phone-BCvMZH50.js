import { defineComponent, ref, computed, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
import "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "otp-phone",
  __ssrInlineRender: true,
  emits: ["onNext"],
  setup(__props, { emit: __emit }) {
    ref("");
    const timer = ref(180);
    ref("");
    computed(() => {
      const minutes = Math.floor(timer.value / 60).toString().padStart(2, "0");
      const seconds = (timer.value % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/edit/components/otp-phone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const otpPhone = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e36fb81f"]]);
export {
  otpPhone as default
};
//# sourceMappingURL=otp-phone-BCvMZH50.js.map
