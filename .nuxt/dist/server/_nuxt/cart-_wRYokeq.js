import { _ as __nuxt_component_0 } from "./nuxt-link-DRGY1ko4.js";
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext, computed, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { Q as Qty } from "./Qty-BPZc3NdL.js";
import { D as DefaultBtn, I as InputPhone } from "./InputPhone-DQEXtS7N.js";
import { u as useModalStore, I as Inputs } from "./useModalStore-N9-mKhsh.js";
import { e as useUserStoreRefs, _ as _export_sfc } from "../server.mjs";
import { u as useCartStoreRefs, a as useCartStore } from "./useCartStore-XmGBzDbc.js";
import axios from "axios";
import "ufo";
import "hookable";
import "./index-DsmiHCAq.js";
import "./index-C2merokO.js";
import "@unhead/shared";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue-the-mask";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlockUserInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, user } = useUserStoreRefs();
    const { currentOrder } = useCartStoreRefs();
    const { openModal } = useModalStore();
    const isAuthorized = ref(false);
    const userData = ref({
      name: "Константинопольская Кристина",
      phone: "+7 (918) 123 45 67",
      email: "dundub@gmail.com"
    });
    watch(
      () => user.value,
      (newUser) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        if (newUser) {
          userData.value = {
            name: ((_c = (_b = (_a = data.value) == null ? void 0 : _a.meta) == null ? void 0 : _b.billing_first_name) == null ? void 0 : _c[0]) || newUser.name,
            phone: ((_f = (_e = (_d = data.value) == null ? void 0 : _d.meta) == null ? void 0 : _e.billing_phone) == null ? void 0 : _f[0]) || newUser.phone,
            email: ((_i = (_h = (_g = data.value) == null ? void 0 : _g.meta) == null ? void 0 : _h.billing_email) == null ? void 0 : _i[0]) || newUser.email
          };
        }
      },
      { immediate: true }
    );
    watch(
      userData,
      (newUserData) => {
        currentOrder.value = {
          ...currentOrder.value,
          user: {
            name: newUserData.name,
            phone: newUserData.phone,
            email: newUserData.email
          },
          billing: {
            ...currentOrder.value.billing,
            // Сохраняем уже существующие данные в billing
            first_name: newUserData.name,
            phone: newUserData.phone,
            email: newUserData.email
          },
          shipping: {
            ...currentOrder.value.shipping,
            // Сохраняем уже существующие данные в shipping
            first_name: newUserData.name,
            phone: newUserData.phone,
            email: newUserData.email
          }
        };
      },
      { deep: true }
      // Чтобы отслеживать все изменения внутри объекта userData
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "userInfo" }, _attrs))} data-v-937881f7><div class="userInfo__head" data-v-937881f7><h3 data-v-937881f7>Информация о покупателе</h3>`);
      if (!unref(user) && !((_a = unref(user)) == null ? void 0 : _a.token)) {
        _push(`<p data-v-937881f7> Авторизуйтесь, чтобы отслеживать свой заказ </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(user) && !((_b = unref(user)) == null ? void 0 : _b.token)) {
        _push(`<div class="user_toggle__w" data-v-937881f7><div class="user__toggle" data-v-937881f7><label class="switch" data-v-937881f7><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isAuthorized.value) ? ssrLooseContain(isAuthorized.value, null) : isAuthorized.value) ? " checked" : ""} data-v-937881f7><span class="slider round" data-v-937881f7></span></label><span data-v-937881f7>Продолжить без авторизации</span></div><div class="userInfo__variant" data-v-937881f7>`);
        if (!isAuthorized.value) {
          _push(`<div class="userInfo_btn__auth" data-v-937881f7>`);
          _push(ssrRenderComponent(DefaultBtn, {
            name: "Войти или зарегистрироваться",
            type: "secondary",
            color: "black",
            size: "large",
            onClick: ($event) => unref(openModal)("auth")
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="userInfoForm" data-v-937881f7><div class="userInfoForm__input" data-v-937881f7><p data-v-937881f7>Имя*</p>`);
          _push(ssrRenderComponent(Inputs, {
            modelValue: userData.value.name,
            "onUpdate:modelValue": ($event) => userData.value.name = $event,
            placeholder: "Поддубная Елена"
          }, null, _parent));
          _push(`</div><div class="userInfoForm__input" data-v-937881f7><p data-v-937881f7>Телефон*</p>`);
          _push(ssrRenderComponent(InputPhone, {
            modelValue: userData.value.phone,
            "onUpdate:modelValue": ($event) => userData.value.phone = $event,
            placeholder: "+7 (918) 123 45 67"
          }, null, _parent));
          _push(`</div><div class="userInfoForm__input" data-v-937881f7><p data-v-937881f7>E-mail</p>`);
          _push(ssrRenderComponent(Inputs, {
            modelValue: userData.value.email,
            "onUpdate:modelValue": ($event) => userData.value.email = $event,
            placeholder: "dundub@gmail.com",
            type: "email"
          }, null, _parent));
          _push(`</div></div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="userInfoData" data-v-937881f7><p data-v-937881f7><strong data-v-937881f7>Имя:</strong> ${ssrInterpolate(userData.value.name)}</p><p data-v-937881f7><strong data-v-937881f7>Телефон:</strong> ${ssrInterpolate(userData.value.phone)}</p><p data-v-937881f7><strong data-v-937881f7>Email:</strong> ${ssrInterpolate(userData.value.email)}</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlockUserInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BlockUserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-937881f7"]]);
const regions = {
  "Москва и Московская область": {
    price: 1500,
    cities: {
      "Москва": 1500,
      "Мытищи": 1e3,
      "Химки": 1e3
    }
  },
  "Крупные города": {
    price: 1e3,
    cities: {
      "Санкт-Петербург": 1e3,
      "Казань": 1e3,
      "Новосибирск": 1e3,
      "Екатеринбург": 1e3
    }
  }
};
const deliveryData = {
  regions,
  "default": {
    base_price: 500,
    price_per_km: 20
  }
};
const query = ref("");
const suggestions = ref([]);
const selectedAddress = ref("");
const destinationCoordinates = ref(null);
const deliveryPrice = ref(0);
const useDelivery = () => {
  const fetchSuggestions = async () => {
    if (query.value.length > 1) {
      try {
        const response = await axios.post(
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
          {
            query: query.value
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Token cab538d49b7cbc9ae1d154721028bbbbb0130b57`
            }
          }
        );
        suggestions.value = response.data.suggestions;
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      suggestions.value = [];
    }
  };
  const selectSuggestion = (suggestion) => {
    query.value = suggestion.value;
    selectedAddress.value = JSON.stringify(suggestion.data);
    destinationCoordinates.value = suggestion.data.geo_lat && suggestion.data.geo_lon ? [suggestion.data.geo_lon, suggestion.data.geo_lat] : null;
    suggestions.value = [];
    calculateDeliveryPrice();
  };
  const calculateDeliveryPrice = () => {
    const addressData = JSON.parse(selectedAddress.value);
    let price = 0;
    if (addressData.region_with_type.includes("Москва") || addressData.region_with_type.includes("Московская обл")) {
      price = deliveryData.regions["Москва и Московская область"].price;
    } else {
      Object.keys(deliveryData.regions).forEach((region) => {
        const regionData = deliveryData.regions[region];
        if (regionData.cities && regionData.cities[addressData.city]) {
          price = regionData.cities[addressData.city];
        }
      });
    }
    if (price === 0 && destinationCoordinates.value) {
      const defaultPrice = deliveryData.default;
      const distanceKm = calculateDistanceFromCoordinates(
        destinationCoordinates.value
      );
      price = defaultPrice.base_price + distanceKm * defaultPrice.price_per_km;
    }
    deliveryPrice.value = price;
  };
  const calculateDistanceFromCoordinates = (coordinates) => {
    const exampleDistanceKm = 10;
    return exampleDistanceKm;
  };
  return {
    query,
    suggestions,
    selectedAddress,
    destinationCoordinates,
    deliveryPrice,
    fetchSuggestions,
    selectSuggestion,
    calculateDeliveryPrice
  };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BlockDeliveryCalc",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      query: query2,
      suggestions: suggestions2,
      deliveryPrice: deliveryPrice2,
      fetchSuggestions,
      selectSuggestion,
      selectedAddress: selectedAddress2
    } = useDelivery();
    const { currentOrder } = useCartStoreRefs();
    watch([selectedAddress2], (newAddress) => {
      const addressData = JSON.parse(newAddress);
      currentOrder.value = {
        ...currentOrder.value,
        shipping: {
          ...currentOrder.value.shipping,
          address_1: `${addressData.street_with_type || ""} ${addressData.house || ""}`,
          city: addressData.city || "",
          postcode: addressData.postal_code || "",
          country: addressData.country_iso_code || "RU",
          region: addressData.region_with_type || "",
          price: deliveryPrice2.value
        },
        billing: {
          ...currentOrder.value.billing,
          address_1: `${addressData.street_with_type || ""} ${addressData.house || ""}`,
          city: addressData.city || "",
          postcode: addressData.postal_code || "",
          country: addressData.country_iso_code || "RU",
          region: addressData.region_with_type || ""
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "delivery" }, _attrs))} data-v-dcbbe56b><div class="delivery__address" data-v-dcbbe56b><h3 data-v-dcbbe56b>Доставка</h3><p data-v-dcbbe56b>Адрес</p><input type="text"${ssrRenderAttr("value", unref(query2))} placeholder="Введите адрес" data-v-dcbbe56b>`);
      if (unref(suggestions2).length) {
        _push(`<ul class="delivery_siqqestion" data-v-dcbbe56b><!--[-->`);
        ssrRenderList(unref(suggestions2), (suggestion) => {
          _push(`<li data-v-dcbbe56b>${ssrInterpolate(suggestion.value)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlockDeliveryCalc.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlockDeliveryCalc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dcbbe56b"]]);
function useYaPay() {
  const { createOrder } = useCartStore();
  const activeSession = ref(null);
  function createPaymentSession({
    amount,
    methods,
    buttonContainerId,
    widgetContainerId
  }) {
    if (activeSession.value) {
      try {
        activeSession.value.destroy();
      } catch (error) {
        console.error("Ошибка при уничтожении сессии:", error);
      }
      activeSession.value = null;
    }
    const paymentData = {
      env: (void 0).YaPay.Sandbox,
      version: 4,
      currencyCode: (void 0).YaPay.CurrencyCode.Rub,
      merchantId: "4d715c56-1ac9-49bc-9330-889e3487b2c1",
      totalAmount: amount,
      availablePaymentMethods: methods
    };
    console.log(paymentData.totalAmount);
    (void 0).YaPay.createSession(paymentData, {
      onPayButtonClick: async () => {
        createOrder();
      }
    }).then((paymentSession) => {
      activeSession.value = paymentSession;
      const buttonContainer = (void 0).querySelector(buttonContainerId);
      if (buttonContainer) {
        activeSession.value.mountButton(buttonContainer, {
          type: methods.includes("SPLIT") ? (void 0).YaPay.ButtonType.Split : (void 0).YaPay.ButtonType.Pay,
          theme: (void 0).YaPay.ButtonTheme.Black,
          width: (void 0).YaPay.ButtonWidth.Auto
        });
      } else {
        console.error("Контейнер для кнопки не найден:", buttonContainerId);
      }
      if (methods.includes("SPLIT")) {
        const widgetContainer = (void 0).querySelector(widgetContainerId);
        if (widgetContainer) {
          widgetContainer.innerHTML = "";
          activeSession.value.mountWidget(widgetContainer, {
            widgetType: (void 0).YaPay.WidgetType.Info,
            widgetTheme: (void 0).YaPay.WidgetTheme.Light,
            borderRadius: 8
          });
        } else {
          console.error(
            "Контейнер для виджета не найден:",
            widgetContainerId
          );
        }
      }
    }).catch((err) => {
      console.error("Ошибка создания сессии", err);
    });
  }
  function resetPaymentSession() {
    if (activeSession.value) {
      try {
        activeSession.value.destroy();
      } catch (error) {
        console.error("Ошибка при уничтожении сессии:", error);
      }
      activeSession.value = null;
    }
  }
  function resetPaymentButton(buttonContainerId, amount, methods) {
    const buttonContainer = (void 0).querySelector(buttonContainerId);
    if (activeSession.value && buttonContainer) {
      try {
        activeSession.value.unmountButton(buttonContainer);
      } catch (error) {
        console.error("Ошибка при удалении кнопки:", error);
      }
    }
    createPaymentSession({ amount, methods, buttonContainerId });
  }
  return {
    createPaymentSession,
    resetPaymentSession,
    resetPaymentButton
    // Добавляем функцию в возвращаемый объект
  };
}
const _sfc_main$1 = {
  __name: "BlockPayment",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedMethod = ref("Оплата картой онлайн или через СБП");
    const { currentOrder } = useCartStoreRefs();
    const { createPaymentSession, resetPaymentSession } = useYaPay();
    const paymentMethods = [
      {
        name: "Оплата картой онлайн или через СБП"
      },
      { name: "Оплатить", logo: "/img/split.png" }
    ];
    const updateYaPaySession = () => {
      const amount = currentOrder.value.price || 0;
      resetPaymentSession();
      if (selectedMethod.value === "Оплатить") {
        createPaymentSession({
          amount,
          methods: ["SPLIT"],
          buttonContainerId: "#payButton",
          // Кнопка оплаты
          widgetContainerId: "#split-widget"
          // Информационный виджет сплита
        });
      } else {
        createPaymentSession({
          amount,
          methods: ["CARD"],
          buttonContainerId: "#payButton"
          // Кнопка мгновенной оплаты
        });
      }
    };
    watch(selectedMethod, () => {
      updateYaPaySession();
    });
    watch(
      () => currentOrder.value.price,
      () => {
        updateYaPaySession();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment" }, _attrs))} data-v-76410542><div class="payment__address" data-v-76410542><h3 data-v-76410542>Выберите способ оплаты</h3></div><div class="payment__method" data-v-76410542><!--[-->`);
      ssrRenderList(paymentMethods, (method) => {
        _push(`<div class="payment__method-item" data-v-76410542><input type="radio"${ssrRenderAttr("id", method.name)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedMethod.value, method.name)) ? " checked" : ""}${ssrRenderAttr("value", method.name)} data-v-76410542><label${ssrRenderAttr("for", method.name)} data-v-76410542><span data-v-76410542>${ssrInterpolate(method.name)}</span>`);
        if (method.logo) {
          _push(`<img${ssrRenderAttr("src", method.logo)} alt="" data-v-76410542>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label></div>`);
      });
      _push(`<!--]-->`);
      if (selectedMethod.value === "Оплатить") {
        _push(`<div class="split__w" data-v-76410542><div id="split-widget" data-v-76410542></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlockPayment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlockPayment = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-76410542"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const { carts, currentOrder } = useCartStoreRefs();
    const { updateCartItem, removeCartItem, createOrder } = useCartStore();
    const { deliveryPrice: deliveryPrice2 } = useDelivery();
    const selectedItems = ref([]);
    const hasSelectedItems = computed(() => {
      return selectedItems.value.length > 0;
    });
    const updateQuantity = (item, quantity) => {
      item.quantity = quantity;
      updateCartItem(item);
    };
    const isAllSelected = computed(() => {
      return carts.value.length > 0 && selectedItems.value.length === carts.value.length;
    });
    const totalPrice = computed(() => {
      return carts.value.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });
    const setLineItemsAndPrice = () => {
      const lineItems = carts.value.map((item) => ({
        product_id: item.id,
        name: item.title,
        quantity: item.quantity,
        price: item.price,
        color: item.color,
        thumbnail: item.thumbnail
      }));
      const totalOrderPrice = carts.value.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      currentOrder.value = {
        ...currentOrder.value,
        line_items: lineItems,
        price: totalOrderPrice
      };
    };
    watch(carts, setLineItemsAndPrice, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))} data-v-01494fae><div class="container" data-v-01494fae><div class="cart_main" data-v-01494fae><div class="cart_main__content" data-v-01494fae><h2 data-v-01494fae>Корзина (${ssrInterpolate(unref(carts).length)})</h2><div class="cart_products__w" data-v-01494fae><div class="cart_products__head" data-v-01494fae><div class="cart_select__all" data-v-01494fae><input type="checkbox" name="select-all" id="select-all"${ssrIncludeBooleanAttr(isAllSelected.value) ? " checked" : ""} data-v-01494fae><label for="select-all" data-v-01494fae>Выбрать все</label></div><div class="${ssrRenderClass([{ active: hasSelectedItems.value }, "cart_delete"])}" data-v-01494fae> Удалить </div></div><ul class="cart_products__list" data-v-01494fae><!--[-->`);
      ssrRenderList(unref(carts), (item, i) => {
        _push(`<li class="cart_products__item" data-v-01494fae><div class="cart_select__single" data-v-01494fae><input type="checkbox" name="single-cart"${ssrRenderAttr("id", item.id)}${ssrIncludeBooleanAttr(selectedItems.value.includes(item.id)) ? " checked" : ""} data-v-01494fae><label${ssrRenderAttr("for", item.id)} data-v-01494fae></label></div><div class="cart_item__img" data-v-01494fae><img${ssrRenderAttr("src", item.thumbnail)} alt="" data-v-01494fae></div><div class="cart_item__content" data-v-01494fae><h3 data-v-01494fae>${ssrInterpolate(item.title)}</h3><ul data-v-01494fae><li data-v-01494fae><p data-v-01494fae>Цвет:</p><span data-v-01494fae>${ssrInterpolate(item.color)}</span></li><li data-v-01494fae><p data-v-01494fae>Размеры:</p><span data-v-01494fae>180х150</span></li></ul></div><div class="cart_item__action" data-v-01494fae><div class="cart_item__price" data-v-01494fae>${ssrInterpolate(item.price)} Р</div>`);
        _push(ssrRenderComponent(Qty, {
          initialQuantity: item.quantity,
          onUpdateQuantity: (quantity) => updateQuantity(item, quantity),
          onClear: ($event) => unref(removeCartItem)(item.id)
        }, null, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div><div class="list-block" data-v-01494fae>`);
      _push(ssrRenderComponent(BlockUserInfo, null, null, _parent));
      _push(ssrRenderComponent(BlockDeliveryCalc, null, null, _parent));
      _push(ssrRenderComponent(BlockPayment, null, null, _parent));
      _push(`</div></div><div class="cart_totals" data-v-01494fae><div class="cart_total__head" data-v-01494fae><span data-v-01494fae>Итого</span><p data-v-01494fae>${ssrInterpolate(totalPrice.value)} P</p></div><div class="cart_total__body" data-v-01494fae><ul data-v-01494fae><li data-v-01494fae><span data-v-01494fae>${ssrInterpolate(unref(carts).length)} товара(ов) на сумму</span><p data-v-01494fae>${ssrInterpolate(totalPrice.value)}</p></li><li data-v-01494fae><span data-v-01494fae>Доставка</span><p data-v-01494fae>${ssrInterpolate(unref(deliveryPrice2))}</p></li></ul></div><div id="payButton" data-v-01494fae></div><div class="cart_total__privacy" data-v-01494fae> Нажимая кнопку &#39;Оформить заказ&#39;, Вы принимаете условия соответствующей `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`оферты: Оферты для физических лиц`);
          } else {
            return [
              createTextVNode("оферты: Оферты для физических лиц")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` или `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Оферты для юридических лиц и ИП`);
          } else {
            return [
              createTextVNode(" Оферты для юридических лиц и ИП")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, Политики конфиденциальности, а также даете Согласие на `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`обработку Ваших персональных данных и их передачу.`);
          } else {
            return [
              createTextVNode("обработку Ваших персональных данных и их передачу.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01494fae"]]);
export {
  cart as default
};
//# sourceMappingURL=cart-_wRYokeq.js.map
