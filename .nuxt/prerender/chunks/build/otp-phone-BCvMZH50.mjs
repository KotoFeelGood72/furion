import { useSSRContext, defineComponent, ref, computed } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
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

export { otpPhone as default };
//# sourceMappingURL=otp-phone-BCvMZH50.mjs.map
