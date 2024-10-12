import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { _ as _export_sfc, k as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/studi/Desktop/furion/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-d7a205a0><div class="container" data-v-d7a205a0><div class="profile_main" data-v-d7a205a0><div class="profile_head" data-v-d7a205a0><h1 data-v-d7a205a0>\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h1><nav class="profile_nav" data-v-d7a205a0>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041F\u0440\u043E\u0444\u0438\u043B\u044C `);
      } else {
        return [
          createTextVNode(" \u041F\u0440\u043E\u0444\u0438\u043B\u044C ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/order" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0417\u0430\u043A\u0430\u0437\u044B `);
      } else {
        return [
          createTextVNode(" \u0417\u0430\u043A\u0430\u0437\u044B ")
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

export { profile as default };
//# sourceMappingURL=profile-Be1KrEwH.mjs.map
