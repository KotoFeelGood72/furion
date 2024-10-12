import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, ref } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './index-DsmiHCAq.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/swiper-vue.mjs';
import { Navigation, Pagination } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/modules/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import './index-C2merokO.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
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
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderCard",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "orders" }, _attrs))} data-v-84b4ad50><div class="orders__head" data-v-84b4ad50>\u2116 ${ssrInterpolate(_ctx.order.num)}</div><div class="orders__main" data-v-84b4ad50>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 5.5,
        "space-between": 25,
        modules: [unref(Navigation), unref(Pagination)],
        speed: 700,
        navigation: {
          prevEl: ".prev",
          nextEl: ".next"
        },
        pagination: { el: ".order-pagination", clickable: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.order.products, (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: "order-item-slide-" + i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="order" data-v-84b4ad50${_scopeId2}><div class="order_img" data-v-84b4ad50${_scopeId2}><img${ssrRenderAttr("src", item.img)} data-v-84b4ad50${_scopeId2}></div><div class="order__content" data-v-84b4ad50${_scopeId2}><h3 data-v-84b4ad50${_scopeId2}>${ssrInterpolate(item.title)}</h3><p data-v-84b4ad50${_scopeId2}> \u0426\u0432\u0435\u0442: <span data-v-84b4ad50${_scopeId2}>${ssrInterpolate(item.color)}</span></p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "order" }, [
                        createVNode("div", { class: "order_img" }, [
                          createVNode("img", {
                            src: item.img
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "order__content" }, [
                          createVNode("h3", null, toDisplayString(item.title), 1),
                          createVNode("p", null, [
                            createTextVNode(" \u0426\u0432\u0435\u0442: "),
                            createVNode("span", null, toDisplayString(item.color), 1)
                          ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.order.products, (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: "order-item-slide-" + i
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "order" }, [
                      createVNode("div", { class: "order_img" }, [
                        createVNode("img", {
                          src: item.img
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "order__content" }, [
                        createVNode("h3", null, toDisplayString(item.title), 1),
                        createVNode("p", null, [
                          createTextVNode(" \u0426\u0432\u0435\u0442: "),
                          createVNode("span", null, toDisplayString(item.color), 1)
                        ])
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
      _push(`<div class="order__nav" data-v-84b4ad50><div class="order__btn prev" data-v-84b4ad50>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:chevron-left",
        size: "30"
      }, null, _parent));
      _push(`</div><div class="order__btn next" data-v-84b4ad50>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:chevron-right",
        size: "30"
      }, null, _parent));
      _push(`</div></div><div class="order-pagination" data-v-84b4ad50></div></div><div class="orders__footer" data-v-84b4ad50><h4 data-v-84b4ad50>\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</h4><p data-v-84b4ad50>\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</p><span data-v-84b4ad50>${ssrInterpolate(_ctx.order.address)}</span></div><div class="orders__total" data-v-84b4ad50> \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430: <b data-v-84b4ad50>${ssrInterpolate(_ctx.order.total)}</b></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/OrderCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OrderCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-84b4ad50"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("active");
    const activeOrders = ref([
      {
        num: "12234",
        total: "60 500",
        address: "\u0433. \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440, \u0443\u043B. \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u043A\u0440\u0443\u0433\u043B\u0438\u043A\u043E\u0432\u0441\u043A\u0430\u044F 77",
        products: [
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          },
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          },
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          },
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          },
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          },
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          },
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          }
        ]
      }
    ]);
    const completedOrders = ref([
      {
        num: "54321",
        total: "40 000",
        address: "\u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041B\u0435\u043D\u0438\u043D\u0430 10",
        products: [
          {
            title: "\u0411\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0418\u043C\u043F\u0435\u0440\u0438\u0430\u043B",
            color: "\u0427\u0451\u0440\u043D\u044B\u0439",
            img: "/img/about-1.jpg"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "order" }, _attrs))} data-v-26326023><div class="order_tabs" data-v-26326023><div class="${ssrRenderClass([{ active: activeTab.value === "active" }, "order__tab"])}" data-v-26326023> \u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 </div><div class="${ssrRenderClass([{ active: activeTab.value === "completed" }, "order__tab"])}" data-v-26326023> \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435 </div></div><div class="order_tabs__contents" data-v-26326023>`);
      if (activeTab.value === "active") {
        _push(`<div class="order_tab__content" data-v-26326023><!--[-->`);
        ssrRenderList(activeOrders.value, (item, i) => {
          _push(ssrRenderComponent(OrderCard, {
            key: "active-orders-list-item-" + i,
            order: item
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "completed") {
        _push(`<div class="order_tab__content" data-v-26326023><!--[-->`);
        ssrRenderList(completedOrders.value, (item, i) => {
          _push(ssrRenderComponent(OrderCard, {
            key: "completed-orders-list-item-" + i,
            order: item
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-26326023"]]);

export { order as default };
//# sourceMappingURL=order-D8aeu1Jh.mjs.map
