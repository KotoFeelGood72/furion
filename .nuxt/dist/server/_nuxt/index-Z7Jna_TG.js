import { _ as __nuxt_component_0 } from "./nuxt-link-DRGY1ko4.js";
import { defineComponent, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { e as useUserStoreRefs, l as useUserStore, _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
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
const _imports_0 = publicAssetsURL("/img/profile.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useUserStoreRefs();
    useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(data)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "user" }, _attrs))} data-v-5d2e51d8><div class="user__main" data-v-5d2e51d8><div class="user__info" data-v-5d2e51d8><div class="user__content" data-v-5d2e51d8><p data-v-5d2e51d8>${ssrInterpolate(unref(data).meta.billing_first_name[0])}</p><ul data-v-5d2e51d8><li data-v-5d2e51d8><p data-v-5d2e51d8>Телефон</p><span data-v-5d2e51d8>${ssrInterpolate(unref(data).meta.billing_phone[0])}</span></li><li data-v-5d2e51d8><p data-v-5d2e51d8>E-mail</p><span data-v-5d2e51d8>${ssrInterpolate(unref(data).meta.billing_email[0])}</span></li></ul></div><div class="user__edit" data-v-5d2e51d8>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/edit" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Редактировать`);
            } else {
              return [
                createTextVNode("Редактировать")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="user__logout" data-v-5d2e51d8>Выйти</div></div><div class="user__img" data-v-5d2e51d8><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-5d2e51d8></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d2e51d8"]]);
export {
  index as default
};
//# sourceMappingURL=index-Z7Jna_TG.js.map
