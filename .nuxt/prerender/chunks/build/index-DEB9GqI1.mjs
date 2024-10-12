import { useSSRContext, defineComponent, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/swiper-vue.mjs';
import { _ as _export_sfc, f as defineStore, s as storeToRefs, b as useNuxtApp } from './server.mjs';
import { A as ActionBlock } from './ActionBlock-aWUrXyPi.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { D as DefaultBtn } from './InputPhone-DQEXtS7N.mjs';
import { _ as __nuxt_component_0$1 } from './index-DsmiHCAq.mjs';
import { Navigation, Pagination } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/modules/index.mjs';
import { useRouter } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useProductsStoreRefs } from './useProductsStore-C71uKDvE.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/studi/Desktop/furion/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unenv/runtime/npm/consola.mjs';
import './index-C2merokO.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Hits",
  __ssrInlineRender: true,
  props: {
    title: {},
    products: {}
  },
  setup(__props) {
    const getStockStatus = (status) => {
      return status === "instock" ? "\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438" : status;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hits" }, _attrs))} data-v-00ca97ca><div class="container" data-v-00ca97ca><div class="hits_main p10" data-v-00ca97ca><div class="hits__title" data-v-00ca97ca><h2 data-v-00ca97ca>${ssrInterpolate(_ctx.title)}</h2></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1.2,
        "space-between": 20,
        "slides-offset-before": 16,
        "slides-offset-after": 16,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesOffsetBefore: 30,
            slidesOffsetAfter: 30
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.products, (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: `hits-item-${i}`,
                class: "hits_item"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/shop/products/${item.slug}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="hits_item__content" data-v-00ca97ca${_scopeId3}><span data-v-00ca97ca${_scopeId3}>${ssrInterpolate(getStockStatus(item.stock_status))}</span><h3 data-v-00ca97ca${_scopeId3}>${ssrInterpolate(item.title)}</h3><div class="hits_item__price" data-v-00ca97ca${_scopeId3}><span data-v-00ca97ca${_scopeId3}>${ssrInterpolate(item.price)} \u20BD</span>`);
                          if (item.sale_price) {
                            _push4(`<span class="item__oldprice" data-v-00ca97ca${_scopeId3}>${ssrInterpolate(item.sale_price)} \u20BD</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div><div class="hits_item__img" data-v-00ca97ca${_scopeId3}><img${ssrRenderAttr("src", item.acf.featured_img.url)} data-v-00ca97ca${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "hits_item__content" }, [
                              createVNode("span", null, toDisplayString(getStockStatus(item.stock_status)), 1),
                              createVNode("h3", null, toDisplayString(item.title), 1),
                              createVNode("div", { class: "hits_item__price" }, [
                                createVNode("span", null, toDisplayString(item.price) + " \u20BD", 1),
                                item.sale_price ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "item__oldprice"
                                }, toDisplayString(item.sale_price) + " \u20BD", 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "hits_item__img" }, [
                              createVNode("img", {
                                src: item.acf.featured_img.url
                              }, null, 8, ["src"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: `/shop/products/${item.slug}`
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "hits_item__content" }, [
                            createVNode("span", null, toDisplayString(getStockStatus(item.stock_status)), 1),
                            createVNode("h3", null, toDisplayString(item.title), 1),
                            createVNode("div", { class: "hits_item__price" }, [
                              createVNode("span", null, toDisplayString(item.price) + " \u20BD", 1),
                              item.sale_price ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "item__oldprice"
                              }, toDisplayString(item.sale_price) + " \u20BD", 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "hits_item__img" }, [
                            createVNode("img", {
                              src: item.acf.featured_img.url
                            }, null, 8, ["src"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.products, (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: `hits-item-${i}`,
                  class: "hits_item"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: `/shop/products/${item.slug}`
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "hits_item__content" }, [
                          createVNode("span", null, toDisplayString(getStockStatus(item.stock_status)), 1),
                          createVNode("h3", null, toDisplayString(item.title), 1),
                          createVNode("div", { class: "hits_item__price" }, [
                            createVNode("span", null, toDisplayString(item.price) + " \u20BD", 1),
                            item.sale_price ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "item__oldprice"
                            }, toDisplayString(item.sale_price) + " \u20BD", 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "hits_item__img" }, [
                          createVNode("img", {
                            src: item.acf.featured_img.url
                          }, null, 8, ["src"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/Hits.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Hits = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-00ca97ca"]]);
const _imports_0 = publicAssetsURL("/img/recomended-0.jpg");
const _imports_1 = publicAssetsURL("/img/recomended-1.jpg");
const _imports_2 = publicAssetsURL("/img/recomended-2.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RecomendedBlock",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recomended" }, _attrs))} data-v-f55a647d><div class="container" data-v-f55a647d><div class="recomended_main p10" data-v-f55a647d><h3 data-v-f55a647d>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0441\u0435\u0433\u043E\u0434\u043D\u044F</h3><ul class="recomended_list" data-v-f55a647d><li class="recomended_item" data-v-f55a647d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f55a647d${_scopeId}><div class="item__sale" data-v-f55a647d${_scopeId}>\u0434\u043E <span data-v-f55a647d${_scopeId}>-40 %</span></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              }),
              createVNode("div", { class: "item__sale" }, [
                createTextVNode("\u0434\u043E "),
                createVNode("span", null, "-40 %")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="recomended_item" data-v-f55a647d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="recomended_item__content" data-v-f55a647d${_scopeId}><span data-v-f55a647d${_scopeId}>23 \u0430\u043F\u0440\u0435\u043B\u044F - 18 \u043C\u0430\u044F</span><h3 data-v-f55a647d${_scopeId}>\u0423\u0436\u0435 \u0442\u0435\u043F\u043B\u043E</h3><p data-v-f55a647d${_scopeId}>\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F 2024 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u044B</p>`);
            _push2(ssrRenderComponent(DefaultBtn, {
              name: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
              type: "secondary",
              color: "white",
              size: "xnormal"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="recomended_item__img" data-v-f55a647d${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-f55a647d${_scopeId}><div class="item__sale" data-v-f55a647d${_scopeId}>\u0434\u043E <span data-v-f55a647d${_scopeId}>-40 %</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "recomended_item__content" }, [
                createVNode("span", null, "23 \u0430\u043F\u0440\u0435\u043B\u044F - 18 \u043C\u0430\u044F"),
                createVNode("h3", null, "\u0423\u0436\u0435 \u0442\u0435\u043F\u043B\u043E"),
                createVNode("p", null, "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F 2024 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u044B"),
                createVNode(DefaultBtn, {
                  name: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
                  type: "secondary",
                  color: "white",
                  size: "xnormal"
                })
              ]),
              createVNode("div", { class: "recomended_item__img" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("div", { class: "item__sale" }, [
                  createTextVNode("\u0434\u043E "),
                  createVNode("span", null, "-40 %")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="recomended_item" data-v-f55a647d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-f55a647d${_scopeId}><div class="item__sale" data-v-f55a647d${_scopeId}>\u0434\u043E <span data-v-f55a647d${_scopeId}>-40 %</span></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: ""
              }),
              createVNode("div", { class: "item__sale" }, [
                createTextVNode("\u0434\u043E "),
                createVNode("span", null, "-40 %")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/RecomendedBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RecomendedBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f55a647d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSlider",
  __ssrInlineRender: true,
  props: {
    slides: {}
  },
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero_slider" }, _attrs))} data-v-d6f0975e><div class="container" data-v-d6f0975e>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        modules: [unref(Navigation), unref(Pagination)],
        speed: 700,
        navigation: {
          prevEl: ".hero_prev",
          nextEl: ".hero_next"
        },
        pagination: { el: ".hero-pagination", clickable: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.slides, (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: "hero-item-slide-" + item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="hero_slide" data-v-d6f0975e${_scopeId2}><div class="hero_slide__content" data-v-d6f0975e${_scopeId2}><p data-v-d6f0975e${_scopeId2}>${ssrInterpolate(item.headtitle)}</p><h1 data-v-d6f0975e${_scopeId2}>${ssrInterpolate(item.title)}</h1><span data-v-d6f0975e${_scopeId2}>${ssrInterpolate(item.subtitle)}</span><div class="hero__link" data-v-d6f0975e${_scopeId2}>`);
                    _push3(ssrRenderComponent(DefaultBtn, {
                      name: "\u041A\u0443\u043F\u0438\u0442\u044C",
                      type: "secondary",
                      color: "black",
                      size: "large",
                      onClick: ($event) => unref(router).push("/shop/")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="hero_slide__img" data-v-d6f0975e${_scopeId2}><img${ssrRenderAttr("src", item.img.link)} alt="" data-v-d6f0975e${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "hero_slide" }, [
                        createVNode("div", { class: "hero_slide__content" }, [
                          createVNode("p", null, toDisplayString(item.headtitle), 1),
                          createVNode("h1", null, toDisplayString(item.title), 1),
                          createVNode("span", null, toDisplayString(item.subtitle), 1),
                          createVNode("div", { class: "hero__link" }, [
                            createVNode(DefaultBtn, {
                              name: "\u041A\u0443\u043F\u0438\u0442\u044C",
                              type: "secondary",
                              color: "black",
                              size: "large",
                              onClick: ($event) => unref(router).push("/shop/")
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "hero_slide__img" }, [
                          createVNode("img", {
                            src: item.img.link,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.slides, (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: "hero-item-slide-" + item.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "hero_slide" }, [
                      createVNode("div", { class: "hero_slide__content" }, [
                        createVNode("p", null, toDisplayString(item.headtitle), 1),
                        createVNode("h1", null, toDisplayString(item.title), 1),
                        createVNode("span", null, toDisplayString(item.subtitle), 1),
                        createVNode("div", { class: "hero__link" }, [
                          createVNode(DefaultBtn, {
                            name: "\u041A\u0443\u043F\u0438\u0442\u044C",
                            type: "secondary",
                            color: "black",
                            size: "large",
                            onClick: ($event) => unref(router).push("/shop/")
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "hero_slide__img" }, [
                        createVNode("img", {
                          src: item.img.link,
                          alt: ""
                        }, null, 8, ["src"])
                      ])
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
      _push(`<div class="hero_navigation" data-v-d6f0975e><div class="hero_prev" data-v-d6f0975e>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "custom:left",
        size: "70"
      }, null, _parent));
      _push(`</div><div class="hero_next" data-v-d6f0975e>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "custom:right",
        size: "70"
      }, null, _parent));
      _push(`</div></div><div class="hero-pagination" data-v-d6f0975e></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/HeroSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeroSlider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d6f0975e"]]);
const useHomeStore = defineStore("home", {
  state: () => ({
    home: null
  }),
  actions: {
    async getHome() {
      try {
        const { $main } = useNuxtApp();
        const response = await $main.get("/home.json");
        this.home = response.data.acf;
      } catch (error) {
      }
    }
  }
});
const useHomeStoreRefs = () => storeToRefs(useHomeStore());
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHomeStore();
    const { home } = useHomeStoreRefs();
    const { products } = useProductsStoreRefs();
    const featuredProducts = computed(() => {
      if (products.value) {
        return products.value.filter(
          (product) => product.is_featured === true
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(home)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}>`);
        _push(ssrRenderComponent(HeroSlider, {
          slides: unref(home).slider
        }, null, _parent));
        _push(ssrRenderComponent(Hits, {
          title: unref(home).title_hit,
          products: unref(featuredProducts)
        }, null, _parent));
        _push(ssrRenderComponent(RecomendedBlock, null, null, _parent));
        _push(ssrRenderComponent(ActionBlock, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DEB9GqI1.mjs.map
