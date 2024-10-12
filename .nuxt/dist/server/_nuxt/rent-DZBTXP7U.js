import { _ as __nuxt_component_0 } from "./index-DsmiHCAq.js";
import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { P as PageHead } from "./PageHead-C9K-KHiO.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { A as ActionBlock } from "./ActionBlock-aWUrXyPi.js";
import { _ as _export_sfc } from "../server.mjs";
import "./index-C2merokO.js";
import "@unhead/shared";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "./InputPhone-DQEXtS7N.js";
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
const _imports_0 = "" + __buildAssetsURL("fruit.DeI5PNQa.svg");
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
          _push(`<li data-v-c07cd4e7><div class="price-icon" data-v-c07cd4e7><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c07cd4e7></div><div data-v-c07cd4e7>${item.item ?? ""}</div></li>`);
        });
        _push(`<!--]--></ul><div class="price_notice" data-v-c07cd4e7>Длительная аренда — еще выгоднее!</div></div><div class="price_img" data-v-c07cd4e7><img${ssrRenderAttr("src", unref(page).price_img.url)}${ssrRenderAttr("alt", unref(page).price_img.alt)} data-v-c07cd4e7></div></div></div></div><div class="colors" data-v-c07cd4e7><div class="container" data-v-c07cd4e7><div class="colors_main" data-v-c07cd4e7><div class="colors_head" data-v-c07cd4e7><h3 data-v-c07cd4e7>${ssrInterpolate(unref(page).colors_title)}</h3><p data-v-c07cd4e7>${ssrInterpolate(unref(page).colors_subtitle)}</p></div><div class="colors_slder__w" data-v-c07cd4e7><div class="color_slider" data-v-c07cd4e7><div class="colors_slider" data-v-c07cd4e7>`);
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
                    if (_push3) {
                      _push3(`<div class="colors_slide" data-v-c07cd4e7${_scopeId2}><div class="color_slide__img" data-v-c07cd4e7${_scopeId2}><img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-c07cd4e7${_scopeId2}></div><div class="colors_slide__txt" data-v-c07cd4e7${_scopeId2}>${item.name ?? ""}</div></div>`);
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
          title: "Арендуйте у нас кресла-мешки для комфортного и радостного\r\n		мероприятия",
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
export {
  rent as default
};
//# sourceMappingURL=rent-DZBTXP7U.js.map
