import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { useSSRContext, ref, defineComponent, watch, mergeProps, unref, computed, withCtx, createTextVNode } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrLooseEqual } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { Q as Qty } from './Qty-BPZc3NdL.mjs';
import { D as DefaultBtn, I as InputPhone } from './InputPhone-DQEXtS7N.mjs';
import { u as useModalStore, I as Inputs } from './useModalStore-N9-mKhsh.mjs';
import { _ as _export_sfc, e as useUserStoreRefs } from './server.mjs';
import { u as useCartStoreRefs, a as useCartStore } from './useCartStore-XmGBzDbc.mjs';
import axios from 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import './index-DsmiHCAq.mjs';
import './index-C2merokO.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlockUserInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, user } = useUserStoreRefs();
    const { currentOrder } = useCartStoreRefs();
    const { openModal } = useModalStore();
    const isAuthorized = ref(false);
    const userData = ref({
      name: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0430\u044F \u041A\u0440\u0438\u0441\u0442\u0438\u043D\u0430",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "userInfo" }, _attrs))} data-v-937881f7><div class="userInfo__head" data-v-937881f7><h3 data-v-937881f7>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435</h3>`);
      if (!unref(user) && !((_a = unref(user)) == null ? void 0 : _a.token)) {
        _push(`<p data-v-937881f7> \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0437\u0430\u043A\u0430\u0437 </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(user) && !((_b = unref(user)) == null ? void 0 : _b.token)) {
        _push(`<div class="user_toggle__w" data-v-937881f7><div class="user__toggle" data-v-937881f7><label class="switch" data-v-937881f7><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isAuthorized.value) ? ssrLooseContain(isAuthorized.value, null) : isAuthorized.value) ? " checked" : ""} data-v-937881f7><span class="slider round" data-v-937881f7></span></label><span data-v-937881f7>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0431\u0435\u0437 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438</span></div><div class="userInfo__variant" data-v-937881f7>`);
        if (!isAuthorized.value) {
          _push(`<div class="userInfo_btn__auth" data-v-937881f7>`);
          _push(ssrRenderComponent(DefaultBtn, {
            name: "\u0412\u043E\u0439\u0442\u0438 \u0438\u043B\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",
            type: "secondary",
            color: "black",
            size: "large",
            onClick: ($event) => unref(openModal)("auth")
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="userInfoForm" data-v-937881f7><div class="userInfoForm__input" data-v-937881f7><p data-v-937881f7>\u0418\u043C\u044F*</p>`);
          _push(ssrRenderComponent(Inputs, {
            modelValue: userData.value.name,
            "onUpdate:modelValue": ($event) => userData.value.name = $event,
            placeholder: "\u041F\u043E\u0434\u0434\u0443\u0431\u043D\u0430\u044F \u0415\u043B\u0435\u043D\u0430"
          }, null, _parent));
          _push(`</div><div class="userInfoForm__input" data-v-937881f7><p data-v-937881f7>\u0422\u0435\u043B\u0435\u0444\u043E\u043D*</p>`);
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
        _push(`<div class="userInfoData" data-v-937881f7><p data-v-937881f7><strong data-v-937881f7>\u0418\u043C\u044F:</strong> ${ssrInterpolate(userData.value.name)}</p><p data-v-937881f7><strong data-v-937881f7>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</strong> ${ssrInterpolate(userData.value.phone)}</p><p data-v-937881f7><strong data-v-937881f7>Email:</strong> ${ssrInterpolate(userData.value.email)}</p></div>`);
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
  "\u041C\u043E\u0441\u043A\u0432\u0430 \u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C": {
    price: 1500,
    cities: {
      "\u041C\u043E\u0441\u043A\u0432\u0430": 1500,
      "\u041C\u044B\u0442\u0438\u0449\u0438": 1e3,
      "\u0425\u0438\u043C\u043A\u0438": 1e3
    }
  },
  "\u041A\u0440\u0443\u043F\u043D\u044B\u0435 \u0433\u043E\u0440\u043E\u0434\u0430": {
    price: 1e3,
    cities: {
      "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433": 1e3,
      "\u041A\u0430\u0437\u0430\u043D\u044C": 1e3,
      "\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A": 1e3,
      "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433": 1e3
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
    if (addressData.region_with_type.includes("\u041C\u043E\u0441\u043A\u0432\u0430") || addressData.region_with_type.includes("\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B")) {
      price = deliveryData.regions["\u041C\u043E\u0441\u043A\u0432\u0430 \u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C"].price;
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "delivery" }, _attrs))} data-v-dcbbe56b><div class="delivery__address" data-v-dcbbe56b><h3 data-v-dcbbe56b>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</h3><p data-v-dcbbe56b>\u0410\u0434\u0440\u0435\u0441</p><input type="text"${ssrRenderAttr("value", unref(query2))} placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441" data-v-dcbbe56b>`);
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
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0438 \u0441\u0435\u0441\u0441\u0438\u0438:", error);
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
        console.error("\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D:", buttonContainerId);
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
            "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0434\u043B\u044F \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D:",
            widgetContainerId
          );
        }
      }
    }).catch((err) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0435\u0441\u0441\u0438\u0438", err);
    });
  }
  function resetPaymentSession() {
    if (activeSession.value) {
      try {
        activeSession.value.destroy();
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0438\u0438 \u0441\u0435\u0441\u0441\u0438\u0438:", error);
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
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u043A\u043D\u043E\u043F\u043A\u0438:", error);
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
    const selectedMethod = ref("\u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0430\u0440\u0442\u043E\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u0438\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F");
    const { currentOrder } = useCartStoreRefs();
    const { createPaymentSession, resetPaymentSession } = useYaPay();
    const paymentMethods = [
      {
        name: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0430\u0440\u0442\u043E\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u0438\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041F"
      },
      { name: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C", logo: "/img/split.png" }
    ];
    const updateYaPaySession = () => {
      const amount = currentOrder.value.price || 0;
      resetPaymentSession();
      if (selectedMethod.value === "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C") {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment" }, _attrs))} data-v-76410542><div class="payment__address" data-v-76410542><h3 data-v-76410542>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B</h3></div><div class="payment__method" data-v-76410542><!--[-->`);
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
      if (selectedMethod.value === "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C") {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))} data-v-01494fae><div class="container" data-v-01494fae><div class="cart_main" data-v-01494fae><div class="cart_main__content" data-v-01494fae><h2 data-v-01494fae>\u041A\u043E\u0440\u0437\u0438\u043D\u0430 (${ssrInterpolate(unref(carts).length)})</h2><div class="cart_products__w" data-v-01494fae><div class="cart_products__head" data-v-01494fae><div class="cart_select__all" data-v-01494fae><input type="checkbox" name="select-all" id="select-all"${ssrIncludeBooleanAttr(isAllSelected.value) ? " checked" : ""} data-v-01494fae><label for="select-all" data-v-01494fae>\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435</label></div><div class="${ssrRenderClass([{ active: hasSelectedItems.value }, "cart_delete"])}" data-v-01494fae> \u0423\u0434\u0430\u043B\u0438\u0442\u044C </div></div><ul class="cart_products__list" data-v-01494fae><!--[-->`);
      ssrRenderList(unref(carts), (item, i) => {
        _push(`<li class="cart_products__item" data-v-01494fae><div class="cart_select__single" data-v-01494fae><input type="checkbox" name="single-cart"${ssrRenderAttr("id", item.id)}${ssrIncludeBooleanAttr(selectedItems.value.includes(item.id)) ? " checked" : ""} data-v-01494fae><label${ssrRenderAttr("for", item.id)} data-v-01494fae></label></div><div class="cart_item__img" data-v-01494fae><img${ssrRenderAttr("src", item.thumbnail)} alt="" data-v-01494fae></div><div class="cart_item__content" data-v-01494fae><h3 data-v-01494fae>${ssrInterpolate(item.title)}</h3><ul data-v-01494fae><li data-v-01494fae><p data-v-01494fae>\u0426\u0432\u0435\u0442:</p><span data-v-01494fae>${ssrInterpolate(item.color)}</span></li><li data-v-01494fae><p data-v-01494fae>\u0420\u0430\u0437\u043C\u0435\u0440\u044B:</p><span data-v-01494fae>180\u0445150</span></li></ul></div><div class="cart_item__action" data-v-01494fae><div class="cart_item__price" data-v-01494fae>${ssrInterpolate(item.price)} \u0420</div>`);
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
      _push(`</div></div><div class="cart_totals" data-v-01494fae><div class="cart_total__head" data-v-01494fae><span data-v-01494fae>\u0418\u0442\u043E\u0433\u043E</span><p data-v-01494fae>${ssrInterpolate(totalPrice.value)} P</p></div><div class="cart_total__body" data-v-01494fae><ul data-v-01494fae><li data-v-01494fae><span data-v-01494fae>${ssrInterpolate(unref(carts).length)} \u0442\u043E\u0432\u0430\u0440\u0430(\u043E\u0432) \u043D\u0430 \u0441\u0443\u043C\u043C\u0443</span><p data-v-01494fae>${ssrInterpolate(totalPrice.value)}</p></li><li data-v-01494fae><span data-v-01494fae>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</span><p data-v-01494fae>${ssrInterpolate(unref(deliveryPrice2))}</p></li></ul></div><div id="payButton" data-v-01494fae></div><div class="cart_total__privacy" data-v-01494fae> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 &#39;\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437&#39;, \u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u043E\u0444\u0435\u0440\u0442\u044B: \u041E\u0444\u0435\u0440\u0442\u044B \u0434\u043B\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446`);
          } else {
            return [
              createTextVNode("\u043E\u0444\u0435\u0440\u0442\u044B: \u041E\u0444\u0435\u0440\u0442\u044B \u0434\u043B\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u0438\u043B\u0438 `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041E\u0444\u0435\u0440\u0442\u044B \u0434\u043B\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 \u0438 \u0418\u041F`);
          } else {
            return [
              createTextVNode(" \u041E\u0444\u0435\u0440\u0442\u044B \u0434\u043B\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 \u0438 \u0418\u041F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0430\u0435\u0442\u0435 \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0438\u0445 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443.`);
          } else {
            return [
              createTextVNode("\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0438\u0445 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443.")
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

export { cart as default };
//# sourceMappingURL=cart-_wRYokeq.mjs.map
