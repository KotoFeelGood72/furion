import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { P as PageHead } from "./PageHead-C9K-KHiO.js";
import { A as ActionBlock } from "./ActionBlock-aWUrXyPi.js";
import { _ as _export_sfc } from "../server.mjs";
import "./InputPhone-DQEXtS7N.js";
import "./index-DsmiHCAq.js";
import "./index-C2merokO.js";
import "@unhead/shared";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./nuxt-link-DRGY1ko4.js";
import "ufo";
import "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "radix3";
import "defu";
import "destr";
import "klona";
import "devalue";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue-the-mask";
import "axios";
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
          title: "Как начать сотрудничество?",
          txt: "Свяжитесь с нами, чтобы обсудить ваши идеи и запросы. Наши специалисты всегда готовы предоставить консультацию и помочь на каждом этапе реализации вашего проекта. Вместе мы сможем создать нечто действительно выдающееся."
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
export {
  design as default
};
//# sourceMappingURL=design-C2eF7-te.js.map
