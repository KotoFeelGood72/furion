import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./index-DsmiHCAq.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { _ as _export_sfc } from "../server.mjs";
import "./index-C2merokO.js";
import "@unhead/shared";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue-the-mask";
import "axios";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderCard",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "orders" }, _attrs))} data-v-84b4ad50><div class="orders__head" data-v-84b4ad50>№ ${ssrInterpolate(_ctx.order.num)}</div><div class="orders__main" data-v-84b4ad50>`);
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
                    _push3(`<div class="order" data-v-84b4ad50${_scopeId2}><div class="order_img" data-v-84b4ad50${_scopeId2}><img${ssrRenderAttr("src", item.img)} data-v-84b4ad50${_scopeId2}></div><div class="order__content" data-v-84b4ad50${_scopeId2}><h3 data-v-84b4ad50${_scopeId2}>${ssrInterpolate(item.title)}</h3><p data-v-84b4ad50${_scopeId2}> Цвет: <span data-v-84b4ad50${_scopeId2}>${ssrInterpolate(item.color)}</span></p></div></div>`);
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
                            createTextVNode(" Цвет: "),
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
                          createTextVNode(" Цвет: "),
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
      _push(`</div></div><div class="order-pagination" data-v-84b4ad50></div></div><div class="orders__footer" data-v-84b4ad50><h4 data-v-84b4ad50>Данные доставки</h4><p data-v-84b4ad50>Адрес доставки</p><span data-v-84b4ad50>${ssrInterpolate(_ctx.order.address)}</span></div><div class="orders__total" data-v-84b4ad50> Сумма заказа: <b data-v-84b4ad50>${ssrInterpolate(_ctx.order.total)}</b></div></div>`);
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
        address: "г. Краснодар, ул. Восточно-кругликовская 77",
        products: [
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          },
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          },
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          },
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          },
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          },
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          },
          {
            title: "Бескаркасное кресло Империал",
            color: "Молочный",
            img: "/img/about-1.jpg"
          }
        ]
      }
    ]);
    const completedOrders = ref([
      {
        num: "54321",
        total: "40 000",
        address: "г. Москва, ул. Ленина 10",
        products: [
          {
            title: "Бескаркасное кресло Империал",
            color: "Чёрный",
            img: "/img/about-1.jpg"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "order" }, _attrs))} data-v-26326023><div class="order_tabs" data-v-26326023><div class="${ssrRenderClass([{ active: activeTab.value === "active" }, "order__tab"])}" data-v-26326023> Активные </div><div class="${ssrRenderClass([{ active: activeTab.value === "completed" }, "order__tab"])}" data-v-26326023> Завершенные </div></div><div class="order_tabs__contents" data-v-26326023>`);
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
export {
  order as default
};
//# sourceMappingURL=order-D8aeu1Jh.js.map
