import { _ as __nuxt_component_0 } from "./index-DsmiHCAq.js";
import { defineComponent, mergeProps, useSSRContext, ref, watch, unref, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, m as useToast } from "../server.mjs";
import { A as AddToCart } from "./AddToCart-YLgC-Ybu.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { Q as Qty } from "./Qty-BPZc3NdL.js";
import { a as useProductsStore } from "./useProductsStore-C71uKDvE.js";
import { useRoute } from "vue-router";
import { a as useCartStore, u as useCartStoreRefs } from "./useCartStore-XmGBzDbc.js";
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SingleCharacter",
  __ssrInlineRender: true,
  props: {
    title: {},
    img: {},
    list: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "character" }, _attrs))} data-v-1051b115><div class="container" data-v-1051b115><h2 data-v-1051b115>${ssrInterpolate(_ctx.title)}</h2><div class="character_main" data-v-1051b115><div class="character_img" data-v-1051b115><img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-1051b115></div><div class="character__content" data-v-1051b115><ul class="character_list" data-v-1051b115><!--[-->`);
      ssrRenderList(_ctx.list, (item, i) => {
        _push(`<li class="character_item" data-v-1051b115><p data-v-1051b115>${ssrInterpolate(item.name)}</p><span data-v-1051b115>${ssrInterpolate(item.value)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/single/SingleCharacter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SingleCharacter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-1051b115"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SingleIdeas",
  __ssrInlineRender: true,
  props: {
    gallery: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ideas" }, _attrs))} data-v-adf497bc><div class="container" data-v-adf497bc><div class="ideas_main" data-v-adf497bc><h2 data-v-adf497bc>Идеи для дома</h2><ul class="ideas_grid" data-v-adf497bc><!--[-->`);
      ssrRenderList(_ctx.gallery, (item, i) => {
        _push(`<li class="ideas_item" data-v-adf497bc><a${ssrRenderAttr("href", item.img.url)} data-v-adf497bc><img${ssrRenderAttr("src", item.img.url)} alt="" data-v-adf497bc></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/single/SingleIdeas.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SingleIdeas = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-adf497bc"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SingleAbout",
  __ssrInlineRender: true,
  props: {
    gallery: {},
    title: {},
    txt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-59be4e3b><div class="container" data-v-59be4e3b><div class="about_main" data-v-59be4e3b><div class="about_head" data-v-59be4e3b><h2 data-v-59be4e3b>${ssrInterpolate(_ctx.title)}</h2><p data-v-59be4e3b>${ssrInterpolate(_ctx.txt)}</p></div><ul class="about_grid" data-v-59be4e3b><!--[-->`);
      ssrRenderList(_ctx.gallery, (item, i) => {
        _push(`<li class="about_item" data-v-59be4e3b><a${ssrRenderAttr("href", item.img.url)} data-v-59be4e3b><img${ssrRenderAttr("src", item.img.url)} alt="" data-v-59be4e3b></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/single/SingleAbout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SingleAbout = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-59be4e3b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ColorSelect",
  __ssrInlineRender: true,
  props: {
    colors: {},
    id: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const internalSelectedColor = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (newValue) => {
        internalSelectedColor.value = newValue;
      }
    );
    watch(internalSelectedColor, (newValue) => {
      emit("update:modelValue", newValue);
    });
    const colorMap = {
      Бежевый: "#D8D1B6",
      Зелёный: "#547C51",
      Серый: "#5B5E62",
      Темный: "#342F2F",
      ["Светло-жёлтый"]: "#EAECD7",
      Черный: "#000000",
      "Тёмно-серый": "#909090"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "select-color" }, _attrs))} data-v-f076f14a><ul class="products_color_select" data-v-f076f14a><!--[-->`);
      ssrRenderList(_ctx.colors, (color, index) => {
        _push(`<li data-v-f076f14a><input type="radio"${ssrRenderAttr("id", "color-" + index + "-" + _ctx.id)}${ssrRenderAttr("value", color)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(internalSelectedColor), color)) ? " checked" : ""} data-v-f076f14a><label${ssrRenderAttr("for", "color-" + index + "-" + _ctx.id)} data-v-f076f14a><span style="${ssrRenderStyle({ backgroundColor: colorMap[color] })}" data-v-f076f14a></span></label></li>`);
      });
      _push(`<!--]--></ul><div class="products_color_selected" data-v-f076f14a> Цвет: <span data-v-f076f14a>${ssrInterpolate(unref(internalSelectedColor))}</span></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ColorSelect.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ColorSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f076f14a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    crumbs: {}
  },
  setup(__props) {
    const props = __props;
    const defaultCrumb = { text: "Главная", href: "/" };
    const allCrumbs = computed(() => {
      return [defaultCrumb, ...props.crumbs || []];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "breadcrumb" }, _attrs))} data-v-dad6559a><ol class="breadcrumb" data-v-dad6559a><!--[-->`);
      ssrRenderList(allCrumbs.value, (crumb, index) => {
        _push(`<li class="breadcrumb-item" data-v-dad6559a>`);
        if (crumb.href) {
          _push(`<a${ssrRenderAttr("href", crumb.href)} data-v-dad6559a>${ssrInterpolate(crumb.text)}</a>`);
        } else {
          _push(`<span data-v-dad6559a>${ssrInterpolate(crumb.text)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Breadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dad6559a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const { removeCart, addCart, updateCartItem } = useCartStore();
    const { carts } = useCartStoreRefs();
    const currentSlide = ref(1);
    const product = ref();
    const totalSlides = ref();
    useProductsStore();
    useRoute();
    const toast = useToast();
    const breadcrumbs = ref([
      { text: "Каталог", href: "/shop" },
      { text: "Бескаркасное кресло империал" }
    ]);
    const isCarts = computed(
      () => carts.value.some((cart) => cart.id === product.value.id)
    );
    const cartItem = computed(
      () => carts.value.find((cart) => {
        var _a2;
        return cart.id === ((_a2 = product.value) == null ? void 0 : _a2.id);
      })
    );
    const selectedQuantity = ref(cartItem.value ? cartItem.value.quantity : 1);
    const selectedColor = ref(
      cartItem.value ? cartItem.value.color : ((_b = (_a = product.value) == null ? void 0 : _a.attributes) == null ? void 0 : _b.pa_colors[0]) || ""
    );
    const toggleCart = () => {
      if (isCarts.value) {
        removeCart(product.value);
        toast.error("Удалено из корзины");
      } else {
        addCart({
          ...product.value,
          quantity: selectedQuantity.value,
          color: selectedColor.value
        });
        toast.success("Добавлено в корзину");
      }
    };
    watch(cartItem, (newVal) => {
      if (newVal) {
        selectedQuantity.value = newVal.quantity;
        selectedColor.value = newVal.color;
      }
    });
    const updateCart = () => {
      if (isCarts.value) {
        updateCartItem({
          id: product.value.id,
          color: selectedColor.value,
          quantity: selectedQuantity.value
        });
      }
    };
    const updateQuantity = (quantity) => {
      selectedQuantity.value = quantity;
      updateCart();
    };
    const updateCurrentSlide = (swiper) => {
      currentSlide.value = swiper.realIndex + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_Icon = __nuxt_component_0;
      if (product.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "single" }, _attrs))} data-v-0c55025b><div class="products" data-v-0c55025b><div class="container" data-v-0c55025b>`);
        _push(ssrRenderComponent(Breadcrumbs, { crumbs: breadcrumbs.value }, null, _parent));
        _push(`<div class="products_main" data-v-0c55025b><div class="products_slider" data-v-0c55025b>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1,
          "space-between": 20,
          modules: [unref(Navigation), unref(Pagination)],
          navigation: {
            prevEl: `.products_prev`,
            nextEl: `.products_next`
          },
          onSlideChange: updateCurrentSlide
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(product.value.images, (item, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: "products-item-slide-" + i
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", item)} alt="" data-v-0c55025b${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: item,
                          alt: ""
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(product.value.images, (item, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: "products-item-slide-" + i
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: item,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="products_navigation" data-v-0c55025b><div class="products_prev" data-v-0c55025b>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "bi:chevron-left",
          size: "30"
        }, null, _parent));
        _push(`</div><div class="products-pagination" data-v-0c55025b><span class="fraction" data-v-0c55025b>${ssrInterpolate(currentSlide.value)} <div class="total" data-v-0c55025b>/${ssrInterpolate(totalSlides.value)}</div></span></div><div class="products_next" data-v-0c55025b>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "bi:chevron-right",
          size: "30"
        }, null, _parent));
        _push(`</div></div></div><div class="products_content" data-v-0c55025b><div class="products_content__head" data-v-0c55025b><h3 data-v-0c55025b>${ssrInterpolate(product.value.title)}</h3><div class="products_art" data-v-0c55025b>Артикул ${ssrInterpolate(product.value.sku)}</div></div><div class="products_content_bottom" data-v-0c55025b>`);
        _push(ssrRenderComponent(ColorSelect, {
          id: product.value.slug,
          colors: product.value.attributes.pa_colors,
          modelValue: selectedColor.value,
          "onUpdate:modelValue": ($event) => selectedColor.value = $event
        }, null, _parent));
        _push(`<div class="products_prices" data-v-0c55025b><p data-v-0c55025b>${ssrInterpolate(product.value.price)} ₽</p><div class="product_cart__row" data-v-0c55025b>`);
        _push(ssrRenderComponent(AddToCart, {
          center: true,
          active: isCarts.value,
          name: isCarts.value ? "В корзине" : "Добавить в корзину",
          icon: "custom:cart",
          onClick: ($event) => toggleCart()
        }, null, _parent));
        if (isCarts.value) {
          _push(ssrRenderComponent(Qty, {
            initialQuantity: ((_a2 = cartItem.value) == null ? void 0 : _a2.quantity) || selectedQuantity.value,
            onUpdateQuantity: updateQuantity,
            onClear: ($event) => unref(removeCart)(product.value)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><ul class="products__nav" data-v-0c55025b><li data-v-0c55025b><a href="#" data-v-0c55025b><p data-v-0c55025b>Характеристики</p>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fluent:chevron-right-28-regular" }, null, _parent));
        _push(`</a></li><li data-v-0c55025b><a href="#" data-v-0c55025b><p data-v-0c55025b>Отзывы</p>`);
        _push(ssrRenderComponent(_component_Icon, { name: "fluent:chevron-right-28-regular" }, null, _parent));
        _push(`</a></li></ul></div></div></div></div></div>`);
        _push(ssrRenderComponent(SingleAbout, {
          gallery: product.value.acf.galereya,
          title: product.value.acf.about_product,
          txt: product.value.acf.about_txt_product
        }, null, _parent));
        _push(ssrRenderComponent(SingleCharacter, {
          title: product.value.acf.character_title,
          img: product.value.acf.character_img.url,
          list: product.value.acf.character_list
        }, null, _parent));
        _push(ssrRenderComponent(SingleIdeas, {
          gallery: product.value.acf.ideas_gallery
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c55025b"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-BLLthTHa.js.map
