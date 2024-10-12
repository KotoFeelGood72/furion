import { b as useNuxtApp, g as asyncDataDefaults, j as useAppConfig, h as createError, c as useRuntimeConfig } from './server.mjs';
import { ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, defineComponent, computed, h, unref } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { u as useHead } from './index-C2merokO.mjs';
import { Icon, getIcon, loadIcons, addCollection } from 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/vue/dist/iconify.mjs';
import { getIconCSS } from 'file://C:/Users/studi/Desktop/furion/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/devalue/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
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
import 'file://C:/Users/studi/Desktop/furion/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/studi/Desktop/furion/node_modules/pinia-plugin-persistedstate/dist/index.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/vue-the-mask/dist/vue-the-mask.js';
import 'file://C:/Users/studi/Desktop/furion/node_modules/axios/index.js';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
let _initialized = false;
function init() {
  if (_initialized)
    return;
  const collections = JSON.parse('[{"prefix":"custom","icons":{"cart-white":{"width":30,"height":29,"body":"<g fill=\\"none\\"><path d=\\"M1.7085 3.02084H3.98774C4.46613 3.02084 4.70532 3.02084 4.89978 3.10758C5.0712 3.18405 5.21764 3.30722 5.32235 3.46301C5.44113 3.63973 5.48211 3.87538 5.56408 4.3467L6.069 7.25001M6.069 7.25001L7.24189 13.9941C7.42107 15.0244 7.51066 15.5395 7.77599 15.9106C8.00962 16.2374 8.33622 16.4862 8.71327 16.6247C9.14149 16.782 9.66193 16.7317 10.7028 16.6309L23.5876 15.384C24.6089 15.2852 25.1195 15.2358 25.5055 15.0051C25.8454 14.8019 26.1174 14.5023 26.2869 14.1444C26.4793 13.738 26.4793 13.225 26.4793 12.1989V10.9609C26.4793 9.87033 26.4793 9.32507 26.2693 8.90373C26.0845 8.53295 25.7892 8.22871 25.424 8.03303C25.0091 7.81066 24.4641 7.79452 23.374 7.76226L6.069 7.25001Z\\" stroke=\\"white\\" stroke-width=\\"1.8\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/>\\r\\n<ellipse cx=\\"10.7707\\" cy=\\"22.9584\\" rx=\\"2.41667\\" ry=\\"2.41667\\" stroke=\\"white\\" stroke-width=\\"1.8\\"/>\\r\\n<circle cx=\\"22.2502\\" cy=\\"22.9584\\" r=\\"2.41667\\" stroke=\\"white\\" stroke-width=\\"1.8\\"/></g>"},"cart":{"width":30,"height":30,"body":"<g fill=\\"none\\"><path d=\\"M1.25 3.125H3.65424C4.13263 3.125 4.37183 3.125 4.56628 3.21174C4.73771 3.28821 4.88415 3.41138 4.98886 3.56717C5.10763 3.74388 5.14862 3.97954 5.23058 4.45085L5.76087 7.5M5.76087 7.5L6.99173 14.5774C7.17091 15.6077 7.2605 16.1228 7.52583 16.4939C7.75945 16.8207 8.08606 17.0695 8.46311 17.208C8.89133 17.3654 9.41176 17.315 10.4526 17.2143L23.9832 15.9048C25.0046 15.806 25.5152 15.7566 25.9012 15.5259C26.2411 15.3227 26.513 15.0232 26.6825 14.6652C26.875 14.2589 26.875 13.7458 26.875 12.7197V11.2317C26.875 10.1412 26.875 9.5959 26.665 9.17455C26.4802 8.80377 26.1848 8.49953 25.8197 8.30385C25.4047 8.08148 24.8597 8.06535 23.7697 8.03308L5.76087 7.5Z\\" stroke=\\"#946B55\\" stroke-width=\\"1.8\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/>\\r\\n<circle cx=\\"10.625\\" cy=\\"23.75\\" r=\\"2.5\\" stroke=\\"#946B55\\" stroke-width=\\"1.8\\"/>\\r\\n<circle cx=\\"22.5\\" cy=\\"23.75\\" r=\\"2.5\\" stroke=\\"#946B55\\" stroke-width=\\"1.8\\"/></g>"},"close":{"width":50,"height":50,"body":"<g fill=\\"none\\"><path d=\\"M25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42ZM25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10Z\\" fill=\\"#616060\\"/>\\r\\n<path d=\\"M32.2827 16.3018L33.6967 17.7168L17.7167 33.6968L16.3027 32.2828L32.2827 16.3018Z\\" fill=\\"#616060\\"/>\\r\\n<path d=\\"M17.7167 16.3018L33.6967 32.2818L32.2827 33.6968L16.3027 17.7168L17.7167 16.3018Z\\" fill=\\"#616060\\"/></g>"},"color-arrow":{"width":23,"height":44,"body":"<g fill=\\"none\\"><path d=\\"M0.999999 1L22 21.9999L0.999999 43\\" stroke=\\"#946B55\\" stroke-linecap=\\"round\\"/></g>"},"email":{"width":24,"height":25,"body":"<g fill=\\"none\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M4.2 5.7L11.76 11.37C11.8292 11.4219 11.9135 11.45 12 11.45C12.0865 11.45 12.1708 11.4219 12.24 11.37L19.8 5.7H4.2ZM20.8 6.45L12.96 12.33C12.683 12.5377 12.3462 12.65 12 12.65C11.6538 12.65 11.317 12.5377 11.04 12.33L3.2 6.45V19.3H20.8V6.45ZM3 4.5H21C21.2652 4.5 21.5196 4.60536 21.7071 4.79289C21.8946 4.98043 22 5.23478 22 5.5V19.5C22 19.7652 21.8946 20.0196 21.7071 20.2071C21.5196 20.3946 21.2652 20.5 21 20.5H3C2.73478 20.5 2.48043 20.3946 2.29289 20.2071C2.10536 20.0196 2 19.7652 2 19.5V5.5C2 5.23478 2.10536 4.98043 2.29289 4.79289C2.48043 4.60536 2.73478 4.5 3 4.5Z\\" fill=\\"#946B55\\"/></g>"},"left":{"width":43,"height":82,"body":"<g fill=\\"none\\"><path d=\\"M42.2248 1L1 40.9997L42.2248 80.9997\\" stroke=\\"#9D9D9D\\" stroke-linecap=\\"round\\"/></g>"},"link":{"width":40,"height":41,"body":"<defs><clipPath id=\\"clip0_96_698\\">\\r\\n<rect width=\\"40\\" height=\\"40\\" fill=\\"white\\" transform=\\"translate(0 0.5)\\"/>\\r\\n</clipPath></defs><g fill=\\"none\\"><g clip-path=\\"url(#clip0_96_698)\\">\\r\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M24.8476 3.0996C26.5121 1.43511 28.7696 0.5 31.1236 0.5C33.4776 0.5 35.7351 1.43511 37.3996 3.0996C39.0641 4.7641 39.9992 7.02165 39.9992 9.3756C39.9992 11.7296 39.0641 13.9871 37.3996 15.6516L28.9436 24.1103L27.0556 22.2223L35.5143 13.7663C36.0909 13.1897 36.5482 12.5052 36.8603 11.7518C37.1723 10.9985 37.3329 10.191 37.3329 9.3756C37.3329 8.56018 37.1723 7.75274 36.8603 6.99939C36.5482 6.24604 36.0909 5.56153 35.5143 4.98494C34.9377 4.40835 34.2532 3.95097 33.4998 3.63892C32.7465 3.32687 31.939 3.16626 31.1236 3.16626C30.3082 3.16626 29.5007 3.32687 28.7474 3.63892C27.994 3.95097 27.3095 4.40835 26.7329 4.98494L18.2769 13.4436L16.3889 11.5556L24.8476 3.0996ZM28.9436 13.4436L12.9436 29.4436L11.0556 27.5556L27.0556 11.5556L28.9436 13.4436ZM12.9436 18.7769L4.48494 27.2329C3.35992 28.4054 2.73923 29.9722 2.75602 31.597C2.77282 33.2219 3.42575 34.7754 4.57476 35.9245C5.72376 37.0735 7.27733 37.7264 8.90218 37.7432C10.527 37.76 12.0938 37.1393 13.2663 36.0143L21.7223 27.5556L23.6103 29.4436L15.1516 37.8996C14.3274 38.7238 13.349 39.3776 12.2722 39.8236C11.1953 40.2696 10.0412 40.4992 8.8756 40.4992C7.71004 40.4992 6.5559 40.2696 5.47906 39.8236C4.40222 39.3776 3.42378 38.7238 2.5996 37.8996C1.77543 37.0754 1.12166 36.097 0.675615 35.0201C0.229574 33.9433 -8.68411e-09 32.7892 0 31.6236C8.68411e-09 30.458 0.229574 29.3039 0.675615 28.2271C1.12166 27.1502 1.77543 26.1718 2.5996 25.3476L11.0556 16.8889L12.9436 18.7769Z\\" fill=\\"#946B55\\"/>\\r\\n</g></g>"},"print":{"width":50,"height":51,"body":"<g fill=\\"none\\"><path d=\\"M12.5072 10.7948V13.0001H10.7144C8.81999 13.0001 7.00317 13.7527 5.66363 15.0922C4.32408 16.4318 3.57153 18.2486 3.57153 20.143V32.643C3.57153 34.0638 4.13595 35.4264 5.1406 36.4311C6.14526 37.4357 7.50787 38.0001 8.92868 38.0001H12.5001V39.7858C12.5001 41.2066 13.0645 42.5693 14.0692 43.5739C15.0738 44.5786 16.4364 45.143 17.8572 45.143H32.143C33.5638 45.143 34.9264 44.5786 35.931 43.5739C36.9357 42.5693 37.5001 41.2066 37.5001 39.7858V38.0001H41.0715C42.4923 38.0001 43.8549 37.4357 44.8596 36.4311C45.8643 35.4264 46.4287 34.0638 46.4287 32.643V20.143C46.4287 18.2486 45.6761 16.4318 44.3366 15.0922C42.997 13.7527 41.1802 13.0001 39.2858 13.0001H37.5001V10.7716C37.5001 10.1261 37.3728 9.48692 37.1256 8.89066C36.8784 8.2944 36.516 7.75273 36.0593 7.29663C35.6025 6.84054 35.0603 6.47896 34.4637 6.2326C33.8671 5.98623 33.2277 5.85991 32.5822 5.86085L17.4108 5.88406C16.1097 5.88595 14.8624 6.40416 13.943 7.3249C13.0236 8.24563 12.5072 9.49361 12.5072 10.7948ZM37.5001 35.3216V30.8573C37.5001 29.4365 36.9357 28.0739 35.931 27.0692C34.9264 26.0645 33.5638 25.5001 32.143 25.5001H17.8572C16.4364 25.5001 15.0738 26.0645 14.0692 27.0692C13.0645 28.0739 12.5001 29.4365 12.5001 30.8573V35.3216H8.92868C8.21827 35.3216 7.53697 35.0394 7.03464 34.537C6.53231 34.0347 6.2501 33.3534 6.2501 32.643V20.143C6.2501 18.959 6.72045 17.8235 7.55766 16.9863C8.39488 16.149 9.53039 15.6787 10.7144 15.6787H39.2858C40.4698 15.6787 41.6053 16.149 42.4425 16.9863C43.2798 17.8235 43.7501 18.959 43.7501 20.143V32.643C43.7501 33.3534 43.4679 34.0347 42.9656 34.537C42.4632 35.0394 41.7819 35.3216 41.0715 35.3216H37.5001ZM34.8215 10.7716V13.0001H15.1858V10.7948C15.1858 9.56263 16.1822 8.56442 17.4144 8.56263L32.5858 8.53942C32.8792 8.53895 33.1699 8.59634 33.4411 8.7083C33.7123 8.82027 33.9588 8.98461 34.1665 9.19193C34.3741 9.39925 34.5389 9.64548 34.6513 9.91653C34.7637 10.1876 34.8215 10.4781 34.8215 10.7716ZM17.8572 28.1787H32.143C32.8534 28.1787 33.5347 28.4609 34.037 28.9632C34.5393 29.4656 34.8215 30.1469 34.8215 30.8573V39.7858C34.8215 40.4962 34.5393 41.1775 34.037 41.6799C33.5347 42.1822 32.8534 42.4644 32.143 42.4644H17.8572C17.1468 42.4644 16.4655 42.1822 15.9632 41.6799C15.4609 41.1775 15.1787 40.4962 15.1787 39.7858V30.8573C15.1787 30.1469 15.4609 29.4656 15.9632 28.9632C16.4655 28.4609 17.1468 28.1787 17.8572 28.1787Z\\" fill=\\"#946B55\\"/></g>"},"right":{"width":43,"height":82,"body":"<g fill=\\"none\\"><path d=\\"M1.00006 1L42.2249 40.9997L1.00006 80.9997\\" stroke=\\"#9D9D9D\\" stroke-linecap=\\"round\\"/></g>"},"sale-bg":{"width":97,"height":36,"body":"<g fill=\\"none\\"><path d=\\"M21.5529 0H91.9996C94.7611 0 96.9996 2.23858 96.9996 5V30.5913C96.9996 33.3527 94.7611 35.5913 91.9996 35.5913H21.5529C20.4394 35.5913 19.3577 35.2196 18.4794 34.5351L2.0605 21.7395C-0.508163 19.7376 -0.508163 15.8537 2.0605 13.8518L18.4794 1.0562C19.3577 0.37171 20.4394 0 21.5529 0Z\\" fill=\\"white\\" fill-opacity=\\"0.8\\"/></g>"},"save":{"width":50,"height":51,"body":"<g fill=\\"none\\"><path d=\\"M35.4167 44.25H14.5833M35.4167 44.25H37.0896C39.4187 44.25 40.5833 44.25 41.4729 43.7958C42.2583 43.3958 42.8958 42.7583 43.2958 41.975C43.75 41.0854 43.75 39.9187 43.75 37.5896V19.7083C43.75 18.7708 43.75 18.3021 43.65 17.8563C43.5613 17.4585 43.4146 17.0759 43.2146 16.7208C42.9937 16.325 42.6813 15.9812 42.0688 15.3L36.3292 8.92083C35.6187 8.13333 35.2583 7.73333 34.8271 7.44583C34.4381 7.18775 34.0085 6.99689 33.5562 6.88125C33.0479 6.75 32.5 6.75 31.4062 6.75H12.9167C10.5833 6.75 9.41667 6.75 8.525 7.20417C7.74094 7.60352 7.10352 8.24094 6.70417 9.025C6.25 9.91667 6.25 11.0833 6.25 13.4167V37.5833C6.25 39.9167 6.25 41.0833 6.70417 41.9729C7.10417 42.7583 7.73958 43.3958 8.525 43.7958C9.41458 44.25 10.5812 44.25 12.9104 44.25H14.5833M35.4167 44.25V36.3271C35.4167 33.9979 35.4167 32.8312 34.9625 31.9417C34.5624 31.1575 33.9242 30.5201 33.1396 30.1208C32.25 29.6667 31.0833 29.6667 28.75 29.6667H21.25C18.9167 29.6667 17.75 29.6667 16.8583 30.1208C16.0743 30.5202 15.4368 31.1576 15.0375 31.9417C14.5833 32.8333 14.5833 34 14.5833 36.3333V44.25M31.25 15.0833H18.75\\" stroke=\\"#946B55\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"tg":{"width":35,"height":35,"body":"<g fill=\\"none\\"><rect x=\\"0.5\\" y=\\"0.5\\" width=\\"34\\" height=\\"34\\" rx=\\"17\\" stroke=\\"#946B55\\"/>\\r\\n<path d=\\"M24.5 11.0269L21.8703 24.7557C21.8703 24.7557 21.5023 25.7076 20.4915 25.2511L14.424 20.4335L14.3959 20.4193C15.2155 19.6572 21.5708 13.7398 21.8486 13.4716C22.2786 13.0562 22.0117 12.8089 21.5124 13.1227L12.1247 19.2963L8.50293 18.0344C8.50293 18.0344 7.93298 17.8245 7.87814 17.368C7.82259 16.9107 8.52169 16.6634 8.52169 16.6634L23.2865 10.6653C23.2865 10.6653 24.5 10.1132 24.5 11.0269Z\\" fill=\\"#946B55\\"/></g>"},"user":{"width":26,"height":26,"body":"<g fill=\\"none\\"><path d=\\"M13 1C6.3724 1 1 6.3724 1 13C1 19.6276 6.3724 25 13 25C19.6276 25 25 19.6276 25 13C25 6.3724 19.6276 1 13 1Z\\" stroke=\\"#946B55\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/>\\r\\n<path d=\\"M3.72583 20.6153C3.72583 20.6153 6.40063 17.2 13.0006 17.2C19.6006 17.2 22.2766 20.6153 22.2766 20.6153M13.0006 13C13.9554 13 14.8711 12.6208 15.5462 11.9456C16.2213 11.2705 16.6006 10.3548 16.6006 9.40005C16.6006 8.44527 16.2213 7.5296 15.5462 6.85446C14.8711 6.17933 13.9554 5.80005 13.0006 5.80005C12.0459 5.80005 11.1302 6.17933 10.455 6.85446C9.77991 7.5296 9.40063 8.44527 9.40063 9.40005C9.40063 10.3548 9.77991 11.2705 10.455 11.9456C11.1302 12.6208 12.0459 13 13.0006 13Z\\" stroke=\\"#946B55\\" stroke-width=\\"1.5\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/></g>"},"vk":{"width":35,"height":35,"body":"<g fill=\\"none\\"><rect x=\\"0.5\\" y=\\"0.5\\" width=\\"34\\" height=\\"34\\" rx=\\"17\\" stroke=\\"#946B55\\"/>\\r\\n<path d=\\"M18.3597 23.625C11.7827 23.625 8.03131 19.0267 7.875 11.375H11.1695C11.2777 16.9911 13.7065 19.37 15.6303 19.8605V11.375H18.7324V16.2186C20.6322 16.0101 22.6281 13.8029 23.3015 11.375H26.4036C26.1498 12.6342 25.6441 13.8264 24.9179 14.8772C24.1917 15.9279 23.2608 16.8146 22.1832 17.4816C23.386 18.0911 24.4484 18.9538 25.3002 20.0128C26.152 21.0717 26.774 22.3029 27.125 23.625H23.7103C23.3952 22.4767 22.7547 21.4487 21.8692 20.67C20.9837 19.8912 19.8925 19.3964 18.7324 19.2474V23.625H18.3597V23.625Z\\" fill=\\"#946B55\\"/></g>"},"wa":{"width":35,"height":35,"body":"<g fill=\\"none\\"><rect x=\\"0.5\\" y=\\"0.5\\" width=\\"34\\" height=\\"34\\" rx=\\"17\\" stroke=\\"#946B55\\"/>\\r\\n<path d=\\"M24.436 10.5547C22.7073 8.83203 20.4024 7.875 17.9695 7.875C12.9116 7.875 8.81402 11.9583 8.81402 16.9987C8.81402 18.5938 9.2622 20.1888 10.0305 21.5286L8.75 26.25L13.6159 24.974C14.9604 25.6758 16.4329 26.0586 17.9695 26.0586C23.0274 26.0586 27.125 21.9753 27.125 16.9349C27.061 14.5742 26.1646 12.2773 24.436 10.5547ZM22.3872 20.2526C22.1951 20.763 21.2988 21.2734 20.8506 21.3372C20.4665 21.401 19.9543 21.401 19.4421 21.2734C19.122 21.1458 18.6738 21.0182 18.1616 20.763C15.8567 19.806 14.3841 17.5091 14.2561 17.3177C14.1281 17.1901 13.2957 16.1055 13.2957 14.957C13.2957 13.8086 13.872 13.2982 14.064 13.043C14.2561 12.7878 14.5122 12.7878 14.7043 12.7878C14.8323 12.7878 15.0244 12.7878 15.1524 12.7878C15.2805 12.7878 15.4726 12.724 15.6646 13.1706C15.8567 13.6172 16.3049 14.7656 16.3689 14.8294C16.4329 14.957 16.4329 15.0846 16.3689 15.2122C16.3049 15.3398 16.2409 15.4674 16.1128 15.5951C15.9848 15.7227 15.8567 15.9141 15.7927 15.9779C15.6646 16.1055 15.5366 16.2331 15.6646 16.4245C15.7927 16.6797 16.2409 17.3815 16.9451 18.0195C17.8415 18.7852 18.5457 19.0404 18.8018 19.168C19.0579 19.2956 19.186 19.2318 19.314 19.1042C19.4421 18.9766 19.8902 18.4661 20.0183 18.2109C20.1463 17.9557 20.3384 18.0195 20.5305 18.0833C20.7226 18.1471 21.875 18.7214 22.0671 18.849C22.3232 18.9766 22.4512 19.0404 22.5152 19.1042C22.5793 19.2956 22.5793 19.7422 22.3872 20.2526Z\\" fill=\\"#946B55\\"/></g>"}}}]');
  for (const collection of collections) {
    addCollection(collection);
  }
  _initialized = true;
}
async function loadIcon(name, timeout) {
  if (!name)
    return null;
  init();
  const _icon = getIcon(name);
  if (_icon)
    return _icon;
  const load = new Promise((resolve) => loadIcons([name], () => resolve())).catch(() => null);
  if (timeout > 0)
    await Promise.race([load, new Promise((resolve) => setTimeout(() => resolve(), timeout))]);
  else
    await load;
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a = options.aliases) == null ? void 0 : _a[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}
const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    var _a;
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => props.name ? options.cssSelectorPrefix + props.name : "");
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    {
      const configs = useRuntimeConfig().icon || {};
      if (!((_a = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a.includes(cssClass.value))) {
        onServerPrefetch(async () => {
          const icon = await loadIcon(props.name, options.fetchTimeout).catch(() => null);
          if (!icon)
            return null;
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (props.name && !ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
          return null;
        });
      }
    }
    return () => h("span", { class: ["iconify", cssClass.value, options.class] });
  }
});
const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    if (name.value) {
      {
        useAsyncData(
          storeKey,
          () => loadIcon(name.value, options.fetchTimeout),
          { deep: false }
        );
      }
    }
    return () => h(Icon, {
      icon: name.value,
      ssr: true,
      class: options.class,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize
    }, slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  async setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const runtimeOptions = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a;
        return ((_a = nuxtApp.vueApp) == null ? void 0 : _a.component(name.value)) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || runtimeOptions.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || runtimeOptions.customize;
    return () => h(
      component.value,
      {
        ...runtimeOptions.attrs,
        name: name.value,
        class: runtimeOptions.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));

export { __nuxt_component_0 as _, index as i, useAsyncData as u };
//# sourceMappingURL=index-DsmiHCAq.mjs.map
