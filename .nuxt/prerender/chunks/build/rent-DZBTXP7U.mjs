import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0 } from './index-DsmiHCAq.mjs';
import { useSSRContext, defineComponent, ref, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { P as PageHead } from './PageHead-C9K-KHiO.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/swiper-vue.mjs';
import { Navigation } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/modules/index.mjs';
import { A as ActionBlock } from './ActionBlock-aWUrXyPi.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
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
import './index-C2merokO.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';
import './InputPhone-DQEXtS7N.mjs';
import './nuxt-link-DRGY1ko4.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';

const _imports_0 = "" + buildAssetsURL("fruit.DeI5PNQa.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rent",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(null);
    const head = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      if (unref(page)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rent" }, _attrs))} data-v-c07cd4e7>`);
        _push(ssrRenderComponent(PageHead, {
          data: unref(head),
          page: "rent"
        }, null, _parent));
        _push(`<div class="rent_desc" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="rentdesc_main" data-v-c07cd4e7><div class="rentdesc__img" data-v-c07cd4e7><img${ssrRenderAttr("src", unref(page).your_img.url)} alt="" data-v-c07cd4e7></div><div class="rentdesc__content" data-v-c07cd4e7><ul data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).your_list, (item, i) => {
          _push(`<li data-v-c07cd4e7><p data-v-c07cd4e7>${ssrInterpolate(item.title)}</p><span data-v-c07cd4e7>${ssrInterpolate(item.txt)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div></div></div><div class="price" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="price_main" data-v-c07cd4e7><div class="price__content" data-v-c07cd4e7><h2 data-v-c07cd4e7>${ssrInterpolate(unref(page).price_title)}</h2><ul data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).price_list, (item, i) => {
          var _a;
          _push(`<li data-v-c07cd4e7><div class="price-icon" data-v-c07cd4e7><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c07cd4e7></div><div data-v-c07cd4e7>${(_a = item.item) != null ? _a : ""}</div></li>`);
        });
        _push(`<!--]--></ul><div class="price_notice" data-v-c07cd4e7>\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0434\u0430 \u2014 \u0435\u0449\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u0435\u0435!</div></div><div class="price_img" data-v-c07cd4e7><img${ssrRenderAttr("src", unref(page).price_img.url)}${ssrRenderAttr("alt", unref(page).price_img.alt)} data-v-c07cd4e7></div></div></div></div><div class="colors" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="colors_main" data-v-c07cd4e7><div class="colors_head" data-v-c07cd4e7><h3 data-v-c07cd4e7>${ssrInterpolate(unref(page).colors_title)}</h3><p data-v-c07cd4e7>${ssrInterpolate(unref(page).colors_subtitle)}</p></div><div class="colors_slder__w" data-v-c07cd4e7><div class="color_slider" data-v-c07cd4e7><div class="colors_slider" data-v-c07cd4e7>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 4,
          "space-between": 20,
          modules: [unref(Navigation)],
          navigation: {
            prevEl: `.colors_prev`,
            nextEl: `.colors_next`
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(page).colors_list, (item, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: "colors-item-slide-" + i
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a;
                    if (_push3) {
                      _push3(`<div class="colors_slide" data-v-c07cd4e7${_scopeId2}><div class="color_slide__img" data-v-c07cd4e7${_scopeId2}><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-c07cd4e7${_scopeId2}></div><div class="colors_slide__txt" data-v-c07cd4e7${_scopeId2}>${(_a = item.name) != null ? _a : ""}</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "colors_slide" }, [
                          createVNode("div", { class: "color_slide__img" }, [
                            createVNode("img", {
                              src: item.img.url,
                              alt: item.img.alt
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode("div", {
                            class: "colors_slide__txt",
                            innerHTML: item.name
                          }, null, 8, ["innerHTML"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(page).colors_list, (item, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: "colors-item-slide-" + i
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "colors_slide" }, [
                        createVNode("div", { class: "color_slide__img" }, [
                          createVNode("img", {
                            src: item.img.url,
                            alt: item.img.alt
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", {
                          class: "colors_slide__txt",
                          innerHTML: item.name
                        }, null, 8, ["innerHTML"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="colors_navigation" data-v-c07cd4e7><div class="colors_prev" data-v-c07cd4e7>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "custom:color-arrow",
          size: "40"
        }, null, _parent));
        _push(`</div><div class="colors_next" data-v-c07cd4e7>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "custom:color-arrow",
          size: "40"
        }, null, _parent));
        _push(`</div></div></div></div></div></div></div></div><div class="conditions" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="conditions_main" data-v-c07cd4e7><h3 data-v-c07cd4e7>${ssrInterpolate(unref(page).conditions_title)}</h3><ul class="conditions_list" data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).conditions_list, (item, i) => {
          _push(`<li class="conditions_item" data-v-c07cd4e7><div class="conditions_item__img" data-v-c07cd4e7><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-c07cd4e7></div><p data-v-c07cd4e7>${ssrInterpolate(item.txt)}</p></li>`);
        });
        _push(`<!--]--></ul></div></div></div><div class="rentxt" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="rentxt__main" data-v-c07cd4e7><div class="rentxt__row" data-v-c07cd4e7><h3 data-v-c07cd4e7>${ssrInterpolate(unref(page).whats_title)}</h3><ul data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).whats_list, (item, i) => {
          _push(`<li data-v-c07cd4e7><p data-v-c07cd4e7>${ssrInterpolate(item.title)}</p><span data-v-c07cd4e7>${ssrInterpolate(item.txt)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div class="rentxt__row" data-v-c07cd4e7><h3 data-v-c07cd4e7>${ssrInterpolate(unref(page).other_title)}</h3><ul data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).other_list, (item, i) => {
          _push(`<li data-v-c07cd4e7><p data-v-c07cd4e7>${ssrInterpolate(item.title)}</p><span data-v-c07cd4e7>${ssrInterpolate(item.txt)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div></div></div><div class="geo" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="geo_main" data-v-c07cd4e7><h2 data-v-c07cd4e7>${ssrInterpolate(unref(page).geo_title)}</h2><ul class="geo_list" data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).geo_list, (item, i) => {
          _push(`<li class="geo_item" data-v-c07cd4e7><div class="geo_item__img" data-v-c07cd4e7><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-c07cd4e7></div><p data-v-c07cd4e7>${ssrInterpolate(item.title)}</p></li>`);
        });
        _push(`<!--]--></ul></div></div></div><div class="event" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="event_main" data-v-c07cd4e7><h3 data-v-c07cd4e7>${ssrInterpolate(unref(page).events_title)}</h3><ul class="event_list" data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).events_list, (item, i) => {
          _push(`<li class="event_item" data-v-c07cd4e7><p data-v-c07cd4e7>${ssrInterpolate(item.title)}</p><span data-v-c07cd4e7>${ssrInterpolate(item.txt)}</span></li>`);
        });
        _push(`<!--]--></ul><ul class="event_grid" data-v-c07cd4e7><!--[-->`);
        ssrRenderList(unref(page).events_gallery, (item, i) => {
          _push(`<li class="event_grid__item" data-v-c07cd4e7><a${ssrRenderAttr("href", item.img.url)} data-v-c07cd4e7><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-c07cd4e7></a></li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
        _push(ssrRenderComponent(ActionBlock, {
          title: "\u0410\u0440\u0435\u043D\u0434\u0443\u0439\u0442\u0435 \u0443 \u043D\u0430\u0441 \u043A\u0440\u0435\u0441\u043B\u0430-\u043C\u0435\u0448\u043A\u0438 \u0434\u043B\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0438 \u0440\u0430\u0434\u043E\u0441\u0442\u043D\u043E\u0433\u043E\r\n		\u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
          txt: "",
          img: "/img/action-2.jpg"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c07cd4e7"]]);

export { rent as default };
//# sourceMappingURL=rent-DZBTXP7U.mjs.map
