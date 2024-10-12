import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc, m as useToast } from './server.mjs';
import { u as useProductsStoreRefs } from './useProductsStore-C71uKDvE.mjs';
import { _ as __nuxt_component_0 } from './index-DsmiHCAq.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import { Swiper, SwiperSlide } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/swiper-vue.mjs';
import { Navigation, Pagination } from 'file://C:/Users/studi/Desktop/furion/node_modules/swiper/modules/index.mjs';
import { a as useCartStore, u as useCartStoreRefs } from './useCartStore-XmGBzDbc.mjs';
import { A as AddToCart } from './AddToCart-YLgC-Ybu.mjs';
import { Q as Qty } from './Qty-BPZc3NdL.mjs';
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
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';
import './index-C2merokO.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';

const _imports_0 = publicAssetsURL("/img/shophead.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shophead" }, _attrs))} data-v-075082bb><div class="container" data-v-075082bb><div class="shophead__main" data-v-075082bb><div class="shophead__content" data-v-075082bb><h1 data-v-075082bb>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</h1><p data-v-075082bb> \u0410\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u0443\u044E\u0442\u043D\u044B\u0445 \u0438 \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0445 \u0431\u0435\u0441\u043A\u0430\u0440\u043A\u0430\u0441\u043D\u044B\u0445 \u043A\u0440\u0435\u0441\u0435\u043B \u0438 \u043F\u0443\u0444\u043E\u0432 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0432\u0430\u043C \u043D\u0430\u0439\u0442\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430 \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u0443\u044E \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443 \u0432 \u0432\u0430\u0448\u0435\u043C \u0434\u043E\u043C\u0435 </p></div><div class="shophead_img__w" data-v-075082bb><div class="shophead__img" data-v-075082bb><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-075082bb></div></div></div></div></div>`);
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
      \u0411\u0435\u0436\u0435\u0432\u044B\u0439: "#D8D1B6",
      \u0417\u0435\u043B\u0451\u043D\u044B\u0439: "#547C51",
      \u0421\u0435\u0440\u044B\u0439: "#5B5E62",
      \u0422\u0435\u043C\u043D\u044B\u0439: "#342F2F",
      ["\u0421\u0432\u0435\u0442\u043B\u043E-\u0436\u0451\u043B\u0442\u044B\u0439"]: "#EAECD7",
      \u0427\u0435\u0440\u043D\u044B\u0439: "#000000",
      "\u0422\u0451\u043C\u043D\u043E-\u0441\u0435\u0440\u044B\u0439": "#909090"
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
        toast.error("\u0423\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B");
      } else {
        addCart({
          ...props.products,
          quantity: selectedQuantity.value,
          color: selectedColor.value
        });
        toast.success("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
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
            _push2(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0442\u043E\u0432\u0430\u0440\u0435`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u0442\u043E\u0432\u0430\u0440\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="products_content_bottom" data-v-baf00376><ul class="products_color_select" data-v-baf00376><!--[-->`);
      ssrRenderList(_ctx.products.attributes.pa_colors, (color, index2) => {
        _push(`<li data-v-baf00376><input type="radio"${ssrRenderAttr("id", "color-" + index2 + "-" + _ctx.products.id)}${ssrRenderAttr("value", color)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedColor.value, color)) ? " checked" : ""} data-v-baf00376><label${ssrRenderAttr("for", "color-" + index2 + "-" + _ctx.products.id)} data-v-baf00376><span style="${ssrRenderStyle({ backgroundColor: colorMap[color] })}" data-v-baf00376></span></label></li>`);
      });
      _push(`<!--]--></ul><div class="products_color_selected" data-v-baf00376> \u0426\u0432\u0435\u0442: <span data-v-baf00376>${ssrInterpolate(selectedColor.value)}</span></div><div class="products_prices" data-v-baf00376><p data-v-baf00376>${ssrInterpolate(_ctx.products.price)} \u20BD</p><div class="products_prices__right" data-v-baf00376>`);
      _push(ssrRenderComponent(AddToCart, {
        active: isCarts.value,
        name: isCarts.value ? "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435" : "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443",
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

export { index as default };
//# sourceMappingURL=index-WytsLPTQ.mjs.map
