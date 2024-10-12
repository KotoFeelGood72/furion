import { w as useRoute, l as useUserStore, _ as _export_sfc, e as useUserStoreRefs, v as useLoadingStoreRefs, q as fetchDefaults, t as useRequestFetch } from './server.mjs';
import { useSSRContext, defineComponent, computed, watch, mergeProps, unref, ref, withCtx, createTextVNode, isRef, createVNode, toDisplayString, toValue, reactive } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0, u as useAsyncData } from './index-DsmiHCAq.mjs';
import { u as useModalStore, a as useModalStoreRefs, I as Inputs } from './useModalStore-N9-mKhsh.mjs';
import { I as InputPhone, D as DefaultBtn } from './InputPhone-DQEXtS7N.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import Vue3OtpInput from 'file://C:/Users/studi/Desktop/furion/node_modules/vue3-otp-input/dist/vue3-otp-input.js';
import { useRouter, useRoute as useRoute$1 } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import axios from 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';
import { hash } from 'file://C:/Users/studi/Desktop/furion/node_modules/ohash/dist/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { u as useCartStoreRefs } from './useCartStore-XmGBzDbc.mjs';
import { a as useProductsStore } from './useProductsStore-C71uKDvE.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, "Request aborted as another request to the same endpoint was initiated.");
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort("Request aborted due to timeout."), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "IconBtn",
  __ssrInlineRender: true,
  props: {
    icon: { default: "custom:user" },
    size: { default: "24" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "icon-btn" }, _attrs))} data-v-c4979a21>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.icon,
        size: _ctx.size
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/IconBtn.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const IconBtn = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-c4979a21"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AuthNew",
  __ssrInlineRender: true,
  props: {
    phone: String,
    name: String
  },
  emits: ["onNext"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const phone = ref(props.phone);
    const name = ref(props.name);
    const nextStep = () => {
      emit("onNext", { phone: phone.value, name: name.value });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "usernew" }, _attrs))} data-v-71f00814><div class="usernew__form" data-v-71f00814><div class="usernew__input" data-v-71f00814><p data-v-71f00814>\u0418\u043C\u044F</p>`);
      _push(ssrRenderComponent(Inputs, {
        modelValue: name.value,
        "onUpdate:modelValue": ($event) => name.value = $event,
        placeholder: "\u041F\u043E\u0434\u0434\u0443\u0431\u043D\u0430\u044F \u0415\u043B\u0435\u043D\u0430"
      }, null, _parent));
      _push(`</div><div class="usernew__input" data-v-71f00814><p data-v-71f00814>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</p>`);
      _push(ssrRenderComponent(InputPhone, {
        modelValue: phone.value,
        "onUpdate:modelValue": ($event) => phone.value = $event,
        placeholder: "+7 (999) 999-99-99"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(DefaultBtn, {
        name: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
        type: "primary",
        color: "brown",
        size: "normal",
        onClick: nextStep
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/auth/AuthNew.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const AuthNew = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-71f00814"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AuthVerification",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    error: {}
  },
  emits: ["update:modelValue", "verify", "resendOtp"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const timer = ref(180);
    ref("");
    const localValue = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue)
    });
    watch(
      () => props.modelValue,
      (newValue) => {
        localValue.value = newValue;
      }
    );
    const formattedTime = computed(() => {
      const minutes = Math.floor(timer.value / 60).toString().padStart(2, "0");
      const seconds = (timer.value % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    });
    const nextStep = (value) => {
      emit("verify", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ver_main" }, _attrs))} data-v-e55cc2be><div class="ver_head" data-v-e55cc2be><p data-v-e55cc2be>\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C SMS-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u043A\u043E\u0434\u043E\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F</p></div><div class="ver__form" data-v-e55cc2be><p data-v-e55cc2be>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434</p><div class="ver_code__inputs" data-v-e55cc2be>`);
      _push(ssrRenderComponent(unref(Vue3OtpInput), {
        value: localValue.value,
        "onUpdate:value": ($event) => localValue.value = $event,
        "num-inputs": 6,
        "input-classes": "otp-input",
        onOnComplete: nextStep,
        placeholder: ["*", "*", "*", "*", "*", "*"]
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.error) {
        _push(`<p class="error" data-v-e55cc2be>${ssrInterpolate(_ctx.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ver__timer" data-v-e55cc2be><span class="${ssrRenderClass({ disabled: timer.value > 0 })}" data-v-e55cc2be> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E ${ssrInterpolate(formattedTime.value)}</span></div><div class="form__notice" data-v-e55cc2be> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u201D, \u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F `);
      _push(ssrRenderComponent(_component_NuxtLink, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 `);
      _push(ssrRenderComponent(_component_NuxtLink, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/auth/AuthVerification.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AuthVerification = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e55cc2be"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "EmailForm",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localValue = computed({
      get: () => props.modelValue,
      set: (newValue) => emit("update:modelValue", newValue)
    });
    function submitEmail() {
      emit("submitEmail", localValue);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))} data-v-b76477df><p data-v-b76477df>\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C SMS-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u043A\u043E\u0434\u043E\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F</p><div class="form__main" data-v-b76477df><div class="form_input" data-v-b76477df><span data-v-b76477df>E-Mail </span>`);
      _push(ssrRenderComponent(Inputs, {
        modelValue: unref(localValue),
        "onUpdate:modelValue": ($event) => isRef(localValue) ? localValue.value = $event : null,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail"
      }, null, _parent));
      _push(`</div><div class="form_btn" data-v-b76477df>`);
      _push(ssrRenderComponent(DefaultBtn, {
        name: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C e-mail",
        type: "primary",
        color: "brown",
        size: "normal",
        onClick: submitEmail
      }, null, _parent));
      _push(`</div><div class="form__notice" data-v-b76477df> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440\u201D, \u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F `);
      _push(ssrRenderComponent(_component_NuxtLink, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 `);
      _push(ssrRenderComponent(_component_NuxtLink, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/auth/EmailForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const EmailForm = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b76477df"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ModalAuth",
  __ssrInlineRender: true,
  setup(__props) {
    const showOtpForm = ref(false);
    const showVerification = ref(false);
    const otpErrorMessage = ref("");
    const otpCode = ref("");
    const email = ref("");
    const isLoad = ref(false);
    const userData = ref(null);
    const { loginUser } = useUserStore();
    const { closeModal } = useModalStore();
    const router = useRouter();
    const sendOTP = async () => {
      var _a, _b;
      try {
        isLoad.value = true;
        const response = await axios.post(
          "http://fura.dynamic-devs-collective.ru/wp-json/custom-auth/v1/send-otp",
          {
            email: email.value
          }
        );
        showOtpForm.value = true;
        otpErrorMessage.value = "";
        userData.value = response.data.user_data;
      } catch (error) {
        console.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message);
      } finally {
        isLoad.value = false;
      }
    };
    const resend = async () => {
      var _a, _b;
      try {
        isLoad.value = true;
        const response = await axios.post(
          "http://fura.dynamic-devs-collective.ru/wp-json/custom-auth/v1/resend-otp",
          {
            email: email.value
          }
        );
        console.log(response.data);
        showOtpForm.value = true;
        otpErrorMessage.value = "";
      } catch (error) {
        console.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message);
      } finally {
        isLoad.value = false;
      }
    };
    const verifyOTP = async () => {
      var _a, _b, _c, _d;
      try {
        isLoad.value = true;
        const response = await axios.post(
          "http://fura.dynamic-devs-collective.ru/wp-json/custom-auth/v1/verify-otp",
          {
            email: email.value,
            otp_code: otpCode.value
          }
        );
        if (response.data) {
          await loginUser(response.data);
          otpErrorMessage.value = "";
          if (userData.value && userData.value.first_name) {
            router.push("/");
          } else {
            showVerification.value = true;
          }
        }
      } catch (error) {
        console.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message);
        otpErrorMessage.value = ((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434 OTP";
      } finally {
        isLoad.value = false;
      }
    };
    const handleNextStep = async (data) => {
      try {
        isLoad.value = true;
        const response = await axios.post(
          "http://fura.dynamic-devs-collective.ru/wp-json/custom-auth/v1/update-profile",
          {
            email: email.value,
            name: data.name,
            phone: data.phone
          }
        );
        console.log("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D", response.data);
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F:", error);
      } finally {
        isLoad.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth" }, _attrs))} data-v-c4d32c5b><div class="auth__head" data-v-c4d32c5b><h3 data-v-c4d32c5b>\u0412\u043E\u0439\u0442\u0438 \u0438\u043B\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</h3><div class="close-btn" data-v-c4d32c5b>`);
      _push(ssrRenderComponent(IconBtn, {
        icon: "simple-line-icons:close",
        size: "34",
        onClick: ($event) => unref(closeModal)("auth")
      }, null, _parent));
      _push(`</div></div><div class="auth_main" data-v-c4d32c5b>`);
      if (isLoad.value) {
        _push(`<div class="loader" data-v-c4d32c5b>`);
        _push(ssrRenderComponent(_component_Icon, { name: "eos-icons:bubble-loading" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="auth_main__child" data-v-c4d32c5b>`);
        if (!showOtpForm.value && !showVerification.value) {
          _push(ssrRenderComponent(EmailForm, {
            onSubmitEmail: sendOTP,
            modelValue: email.value,
            "onUpdate:modelValue": ($event) => email.value = $event
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (showOtpForm.value && !showVerification.value) {
          _push(ssrRenderComponent(AuthVerification, {
            modelValue: otpCode.value,
            "onUpdate:modelValue": ($event) => otpCode.value = $event,
            onResendOtp: resend,
            onVerify: verifyOTP,
            error: otpErrorMessage.value
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (showVerification.value) {
          _push(ssrRenderComponent(AuthNew, { onOnNext: handleNextStep }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalAuth.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ModalAuth = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c4d32c5b"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Divider",
  __ssrInlineRender: true,
  props: {
    height: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "divider",
        style: { height: _ctx.height + "rem" }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Divider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
function useTelegramBot() {
  const sendMessage = async (message) => {
    const botToken = "8048487916:AAFismqdRc2IV_l3tW8lWoPtHz7Sg-OPOhc";
    const chatId = "-4538996700";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    try {
      const { data, error } = await useFetch(url, {
        method: "POST",
        body: {
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown"
        },
        headers: {
          "Content-Type": "application/json"
        }
      }, "$D94x6itNdV");
      if (error.value) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0432 Telegram:", error.value);
        return { success: false, error: error.value };
      }
      return { success: true, data: data.value };
    } catch (err) {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430:", err);
      return { success: false, error: err };
    }
  };
  return { sendMessage };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ModalCallback",
  __ssrInlineRender: true,
  setup(__props) {
    const { sendMessage } = useTelegramBot();
    const formData = ref({
      name: "",
      phone: ""
    });
    const { closeModal } = useModalStore();
    useRouter();
    const submitForm = async () => {
      if (formData.value.name && formData.value.phone) {
        const message = `\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430:
\u0418\u043C\u044F: ${formData.value.name}
\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ${formData.value.phone}`;
        const response = await sendMessage(message);
        if (response.success) {
          alert("\u0417\u0430\u044F\u0432\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!");
          closeModal("callback");
        } else {
          alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0437\u0430\u044F\u0432\u043A\u0438.");
        }
      } else {
        alert("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "callback" }, _attrs))} data-v-7ef41d21><div class="callback__head" data-v-7ef41d21><h3 data-v-7ef41d21>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</h3><div class="close-btn" data-v-7ef41d21>`);
      _push(ssrRenderComponent(IconBtn, {
        icon: "simple-line-icons:close",
        size: "34",
        onClick: ($event) => unref(closeModal)("callback")
      }, null, _parent));
      _push(`</div></div><div class="callback__form" data-v-7ef41d21>`);
      _push(ssrRenderComponent(Inputs, {
        placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
        modelValue: formData.value.name,
        "onUpdate:modelValue": ($event) => formData.value.name = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { height: 1 }, null, _parent));
      _push(ssrRenderComponent(InputPhone, {
        placeholder: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
        modelValue: formData.value.phone,
        "onUpdate:modelValue": ($event) => formData.value.phone = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { height: 2 }, null, _parent));
      _push(ssrRenderComponent(DefaultBtn, {
        name: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        type: "secondary",
        color: "black",
        size: "normal",
        onClick: submitForm
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalCallback.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ModalCallback = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7ef41d21"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Socials",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = ref([
      { icon: "vk", link: "/", size: "35" },
      { icon: "tg", link: "/", size: "35" },
      { icon: "wa", link: "/", size: "35" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "socials" }, _attrs))} data-v-75bb5279><ul data-v-75bb5279><!--[-->`);
      ssrRenderList(unref(socials), (item, i) => {
        _push(`<li data-v-75bb5279><a target="_blank"${ssrRenderAttr("href", item.link)} data-v-75bb5279>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: `custom:${item.icon}`,
          size: item.size
        }, null, _parent));
        _push(`</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Socials.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Socials = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-75bb5279"]]);
const _imports_0 = publicAssetsURL("/img/logo.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  props: {
    position: { default: "header" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [`position-${_ctx.position}`, "logo"]
      }, _attrs))} data-v-e73623d9>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e73623d9${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Logo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e73623d9"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const nav = ref([
      { name: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433", link: "/shop" },
      { name: "\u0410\u0440\u0435\u043D\u0434\u0430", link: "/rent" },
      { name: "\u0414\u043B\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432", link: "/design" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))} data-v-c00ec348><!--[-->`);
      ssrRenderList(unref(nav), (item, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: "nav-item-" + i,
          to: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Nav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c00ec348"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const router = useRouter();
    const { openModal, closeModal } = useModalStore();
    const { user } = useUserStoreRefs();
    const { carts } = useCartStoreRefs();
    const isHome = computed(() => route.name != "index");
    const isCarts = computed(() => carts.value);
    const isCallBackModal = () => {
      openModal("callback");
    };
    const isScrolled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", { gray: isHome.value, scrolled: isScrolled.value }]
      }, _attrs))} data-v-6956733f><div class="container" data-v-6956733f><div class="header_top" data-v-6956733f><div class="burger" data-v-6956733f>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "iconamoon:menu-burger-horizontal-thin",
        size: 35
      }, null, _parent));
      _push(`</div><div class="header_col__left" data-v-6956733f><div class="header_phone" data-v-6956733f><a target="_blank" href="tel:+78002222659" data-v-6956733f>+7 (800) 222 26 59 </a></div>`);
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "logo--scrolled": isScrolled.value }, "header_center"])}" data-v-6956733f>`);
      _push(ssrRenderComponent(Logo, null, null, _parent));
      _push(`</div><div class="header_col__right" data-v-6956733f>`);
      _push(ssrRenderComponent(DefaultBtn, {
        name: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438",
        type: "secondary",
        color: "brown",
        size: "xsmall",
        onClick: isCallBackModal
      }, null, _parent));
      _push(`<div class="header__action" data-v-6956733f><div class="header_user" data-v-6956733f>`);
      _push(ssrRenderComponent(IconBtn, null, null, _parent));
      if (unref(user) && unref(user).user_data) {
        _push(`<p data-v-6956733f>${ssrInterpolate(unref(user).user_data.first_name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="header_carts" data-v-6956733f><div class="counter" data-v-6956733f>${ssrInterpolate(isCarts.value.length)}</div>`);
      _push(ssrRenderComponent(IconBtn, {
        icon: "custom:cart",
        onClick: ($event) => unref(router).push("/cart")
      }, null, _parent));
      _push(`</div></div></div></div><div class="header_bottom" data-v-6956733f>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6956733f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const additionaly = ref([
      { name: "\u041E\u0444\u0435\u0440\u0442\u0430 \u0434\u043B\u044F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446", link: "/offer-physical" },
      { name: "\u041E\u0444\u0435\u0440\u0442\u0430 \u0434\u043B\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446 \u0438 \u0418\u041F", link: "/offer-legal" },
      { name: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438", link: "/privacy" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-e1b45a7f><div class="container" data-v-e1b45a7f><div class="footer_main" data-v-e1b45a7f><div class="footer_col__brand" data-v-e1b45a7f>`);
      _push(ssrRenderComponent(Logo, { position: "footer" }, null, _parent));
      _push(`<div class="footer__email" data-v-e1b45a7f><a target="_blank" href="mailto:Softpear@ya.ru" data-v-e1b45a7f>`);
      _push(ssrRenderComponent(_component_Icon, { name: "custom:email" }, null, _parent));
      _push(`<p data-v-e1b45a7f>Softpear@ya.ru</p></a></div></div><div class="footer_col__center" data-v-e1b45a7f>`);
      _push(ssrRenderComponent(Nav, null, null, _parent));
      _push(`<div class="footer_additionaly" data-v-e1b45a7f><!--[-->`);
      ssrRenderList(unref(additionaly), (item, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: "additionaly-nav-item-" + i,
          to: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="footer_legal__info" data-v-e1b45a7f><span data-v-e1b45a7f>\u0418\u041F \u0412\u043E\u0440\u0444\u043E\u043B\u043E\u043C\u0435\u0435\u0432\u0430 \u041E\u043B\u044C\u0433\u0430 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u043D\u0430 </span><span data-v-e1b45a7f>\u0418\u041D\u041D 571000616047</span></div></div><div class="footer_col__info" data-v-e1b45a7f>`);
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`<div class="footer_phone" data-v-e1b45a7f><a target="_blank" href="tel:+78002222659" data-v-e1b45a7f>+7 (800) 222 26 59</a></div><div class="footer_phone" data-v-e1b45a7f><a target="_blank" href="tel:+79189609505" data-v-e1b45a7f>+7 (918) 960 95 05</a></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e1b45a7f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preloader",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLoading } = useLoadingStoreRefs();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      if (unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-acd685fc><div class="preloader-inner" data-v-acd685fc><div class="preloader__icon" data-v-acd685fc>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "line-md:loading-twotone-loop",
          size: 100
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(Logo, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Preloader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Preloader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-acd685fc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { closeAllModals } = useModalStore();
    const { modals } = useModalStoreRefs();
    useProductsStore();
    useUserStore();
    const isModalActive = computed(() => {
      return Object.values(modals.value).some((isActive) => isActive);
    });
    watch(
      () => route.fullPath,
      () => {
        closeAllModals();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<div class="content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(modals).auth) {
        _push(ssrRenderComponent(ModalAuth, { class: "modal-animate" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(modals).callback) {
        _push(ssrRenderComponent(ModalCallback, { class: "modal-animate" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isModalActive)) {
        _push(`<div class="page-bg"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Preloader, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DzIUYaUA.mjs.map
