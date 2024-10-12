import { _ as __nuxt_component_0 } from "./nuxt-link-DRGY1ko4.js";
import { _ as _export_sfc, k as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-d7a205a0><div class="container" data-v-d7a205a0><div class="profile_main" data-v-d7a205a0><div class="profile_head" data-v-d7a205a0><h1 data-v-d7a205a0>Личный кабинет</h1><nav class="profile_nav" data-v-d7a205a0>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Профиль `);
      } else {
        return [
          createTextVNode(" Профиль ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/order" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Заказы `);
      } else {
        return [
          createTextVNode(" Заказы ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d7a205a0"]]);
export {
  profile as default
};
//# sourceMappingURL=profile-Be1KrEwH.js.map
