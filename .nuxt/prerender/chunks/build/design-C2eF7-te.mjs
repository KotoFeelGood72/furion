import { useSSRContext, defineComponent, ref, unref, mergeProps } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { P as PageHead } from './PageHead-C9K-KHiO.mjs';
import { A as ActionBlock } from './ActionBlock-aWUrXyPi.mjs';
import { _ as _export_sfc } from './server.mjs';
import './InputPhone-DQEXtS7N.mjs';
import './index-DsmiHCAq.mjs';
import './index-C2merokO.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';
import './nuxt-link-DRGY1ko4.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
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
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design",
  __ssrInlineRender: true,
  setup(__props) {
    const head = ref();
    const page = ref();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(page)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "degign" }, _attrs))} data-v-00be2a60>`);
        _push(ssrRenderComponent(PageHead, { data: unref(head) }, null, _parent));
        _push(`<div class="whats" data-v-00be2a60><div class="container" data-v-00be2a60><div class="whats_main" data-v-00be2a60><div class="whats__content" data-v-00be2a60><h2 data-v-00be2a60>${ssrInterpolate(unref(page).whats_title)}</h2><p data-v-00be2a60>${ssrInterpolate(unref(page).whats_txt)}</p></div><div class="whats_imgs" data-v-00be2a60><!--[-->`);
        ssrRenderList(unref(page).whats_gallery, (item, i) => {
          _push(`<div class="whats_img" data-v-00be2a60><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-00be2a60></div>`);
        });
        _push(`<!--]--></div></div></div></div><div class="proposal" data-v-00be2a60><div class="container" data-v-00be2a60><div class="propposal_main" data-v-00be2a60><h3 data-v-00be2a60>${ssrInterpolate(unref(page).services_title)}</h3><ul class="propposal_list" data-v-00be2a60><!--[-->`);
        ssrRenderList(unref(page).services_list, (item, i) => {
          _push(`<li class="proposal_item" data-v-00be2a60><div class="proposal_item__img" data-v-00be2a60><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-00be2a60></div><div class="proposal_item__content" data-v-00be2a60><h3 data-v-00be2a60>${ssrInterpolate(item.title)}</h3><p data-v-00be2a60>${ssrInterpolate(item.txt)}</p></div></li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
        _push(ssrRenderComponent(ActionBlock, {
          img: "/img/action-1.jpg",
          title: "\u041A\u0430\u043A \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E?",
          txt: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u0438\u0434\u0435\u0438 \u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u044B. \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0438 \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0412\u043C\u0435\u0441\u0442\u0435 \u043C\u044B \u0441\u043C\u043E\u0436\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u0435\u0447\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0434\u0430\u044E\u0449\u0435\u0435\u0441\u044F."
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const design = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00be2a60"]]);

export { design as default };
//# sourceMappingURL=design-C2eF7-te.mjs.map
