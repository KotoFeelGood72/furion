import { mergeProps, useSSRContext, defineComponent, ref, computed, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc, m as useToast } from "../server.mjs";
import { u as useProductsStoreRefs } from "./useProductsStore-C71uKDvE.js";
import { _ as __nuxt_component_0 } from "./index-DsmiHCAq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DRGY1ko4.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { a as useCartStore, u as useCartStoreRefs } from "./useCartStore-XmGBzDbc.js";
import { A as AddToCart } from "./AddToCart-YLgC-Ybu.js";
import { Q as Qty } from "./Qty-BPZc3NdL.js";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
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
import "./index-C2merokO.js";
import "@iconify/utils/lib/css/icon";
const _imports_0 = publicAssetsURL("/img/shophead.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shophead" }, _attrs))} data-v-075082bb><div class="container" data-v-075082bb><div class="shophead__main" data-v-075082bb><div class="shophead__content" data-v-075082bb><h1 data-v-075082bb>Каталог</h1><p data-v-075082bb> Ассортимент уютных и стильных бескаркасных кресел и пуфов помогут вам найти идеальное решение для комфортного отдыха и создать неповторимую атмосферу в вашем доме </p></div><div class="shophead_img__w" data-v-075082bb><div class="shophead__img" data-v-075082bb><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-075082bb></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/head/ShopHead.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ShopHead = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-075082bb"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductsCard",
  __ssrInlineRender: true,
  props: {
    products: { default: null }
  },
  setup(__props) {
    const { addCart, removeCart, updateCartItem } = useCartStore();
    const { carts } = useCartStoreRefs();
    const props = __props;
    const currentSlide = ref(1);
    const totalSlides = ref(props.products.acf.galereya.length);
    const toast = useToast();
    const cartItem = computed(
      () => carts.value.find((cart) => cart.id === props.products.id)
    );
    const selectedQuantity = ref(cartItem.value ? cartItem.value.quantity : 1);
    const selectedColor = ref(props.products.attributes.pa_colors[0]);
    const colorMap = {
      Бежевый: "#D8D1B6",
      Зелёный: "#547C51",
      Серый: "#5B5E62",
      Темный: "#342F2F",
      ["Светло-жёлтый"]: "#EAECD7",
      Черный: "#000000",
      "Тёмно-серый": "#909090"
    };
    const isCarts = computed(
      () => carts.value.some((cart) => cart.id === props.products.id)
    );
    const updateCurrentSlide = (swiper) => {
      currentSlide.value = swiper.realIndex + 1;
    };
    const toggleCart = () => {
      if (isCarts.value) {
        removeCart(props.products);
        toast.error("Удалено из корзины");
      } else {
        addCart({
          ...props.products,
          quantity: selectedQuantity.value,
          color: selectedColor.value
        });
        toast.success("Добавлено в корзину");
      }
    };
    const updateCart = () => {
      if (isCarts.value) {
        updateCartItem({
          id: props.products.id,
          color: selectedColor.value,
          quantity: selectedQuantity.value
        });
      }
    };
    const updateQuantity = (quantity) => {
      selectedQuantity.value = quantity;
      updateCart();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products" }, _attrs))} data-v-baf00376><div class="${ssrRenderClass(`products_slider products_slider_${_ctx.products.id}`)}" data-v-baf00376>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        "space-between": 20,
        modules: [unref(Navigation), unref(Pagination)],
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          prevEl: `.products_prev_${_ctx.products.id}`,
          nextEl: `.products_next_${_ctx.products.id}`
        },
        onSlideChange: updateCurrentSlide
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.products.acf.galereya, (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: "products-item-slide-" + item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", item.img.url)}${ssrRenderAttr("alt", item.img.alt)} data-v-baf00376${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: item.img.url,
                        alt: item.img.alt
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.products.acf.galereya, (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: "products-item-slide-" + item.id
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: item.img.url,
                      alt: item.img.alt
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="products_navigation" data-v-baf00376><div class="${ssrRenderClass(`products_prev products_prev_${_ctx.products.id}`)}" data-v-baf00376>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:chevron-left",
        size: "30"
      }, null, _parent));
      _push(`</div><div class="products-pagination" data-v-baf00376><span class="fraction" data-v-baf00376>${ssrInterpolate(currentSlide.value)} <div class="total" data-v-baf00376>/${ssrInterpolate(totalSlides.value)}</div></span></div><div class="${ssrRenderClass(`products_next products_next_${_ctx.products.id}`)}" data-v-baf00376>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:chevron-right",
        size: "30"
      }, null, _parent));
      _push(`</div></div></div><div class="products_content" data-v-baf00376><div class="products_content__head" data-v-baf00376><h3 data-v-baf00376>${ssrInterpolate(_ctx.products.title)}</h3><div class="products_description" data-v-baf00376>${ssrInterpolate(_ctx.products.acf.about_txt_product)}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/shop/products/${_ctx.products.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее о товаре`);
          } else {
            return [
              createTextVNode("Подробнее о товаре")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="products_content_bottom" data-v-baf00376><ul class="products_color_select" data-v-baf00376><!--[-->`);
      ssrRenderList(_ctx.products.attributes.pa_colors, (color, index2) => {
        _push(`<li data-v-baf00376><input type="radio"${ssrRenderAttr("id", "color-" + index2 + "-" + _ctx.products.id)}${ssrRenderAttr("value", color)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedColor.value, color)) ? " checked" : ""} data-v-baf00376><label${ssrRenderAttr("for", "color-" + index2 + "-" + _ctx.products.id)} data-v-baf00376><span style="${ssrRenderStyle({ backgroundColor: colorMap[color] })}" data-v-baf00376></span></label></li>`);
      });
      _push(`<!--]--></ul><div class="products_color_selected" data-v-baf00376> Цвет: <span data-v-baf00376>${ssrInterpolate(selectedColor.value)}</span></div><div class="products_prices" data-v-baf00376><p data-v-baf00376>${ssrInterpolate(_ctx.products.price)} ₽</p><div class="products_prices__right" data-v-baf00376>`);
      _push(ssrRenderComponent(AddToCart, {
        active: isCarts.value,
        name: isCarts.value ? "В корзине" : "В корзину",
        icon: "custom:cart",
        onClick: toggleCart
      }, null, _parent));
      if (isCarts.value) {
        _push(ssrRenderComponent(Qty, {
          initialQuantity: ((_a = cartItem.value) == null ? void 0 : _a.quantity) || selectedQuantity.value,
          onUpdateQuantity: updateQuantity,
          onClear: ($event) => unref(removeCart)(_ctx.products)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/ProductsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductsCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-baf00376"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { products } = useProductsStoreRefs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shop" }, _attrs))} data-v-910ae681>`);
      _push(ssrRenderComponent(ShopHead, null, null, _parent));
      _push(`<div class="container" data-v-910ae681><ul class="products_list p10" data-v-910ae681><!--[-->`);
      ssrRenderList(unref(products), (item) => {
        _push(`<li class="products_item" data-v-910ae681>`);
        _push(ssrRenderComponent(ProductsCard, { products: item }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-910ae681"]]);
export {
  index as default
};
//# sourceMappingURL=index-WytsLPTQ.js.map
