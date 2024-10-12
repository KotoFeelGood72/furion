import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, isRef } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue/server-renderer/index.mjs';
import { I as InputPhone, D as DefaultBtn } from './InputPhone-DQEXtS7N.mjs';
import { useRoute } from 'file://C:/Users/studi/Desktop/furion/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActionBlock",
  __ssrInlineRender: true,
  props: {
    title: { default: "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u2014 \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043E\u0442\u0432\u0435\u0442\u0438\u043C!" },
    txt: { default: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u0438\u0434\u0435\u0438 \u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u044B. \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0438 \u043F\u043E\u043C\u043E\u0447\u044C \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430. \u0412\u043C\u0435\u0441\u0442\u0435 \u043C\u044B \u0441\u043C\u043E\u0436\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u0435\u0447\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0434\u0430\u044E\u0449\u0435\u0435\u0441\u044F." },
    img: { default: "/img/action.jpg" }
  },
  setup(__props) {
    const route = useRoute();
    const phone = ref();
    const isHome = computed(() => route.name === "index");
    const isRent = computed(() => route.name === "rent");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "action" }, _attrs))} data-v-fc8f7fd8><div class="container" data-v-fc8f7fd8><div class="action__main" data-v-fc8f7fd8><div class="${ssrRenderClass([{ small: unref(isHome), rent: unref(isRent) }, "action_form__w"])}" data-v-fc8f7fd8><h6 data-v-fc8f7fd8>${ssrInterpolate(_ctx.title)}</h6>`);
      if (unref(isHome)) {
        _push(`<div class="action__privacy" data-v-fc8f7fd8> \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443 \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445`);
            } else {
              return [
                createTextVNode("\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 `);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.`);
            } else {
              return [
                createTextVNode("\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.txt && !unref(isHome)) {
        _push(`<div class="action_txt" data-v-fc8f7fd8>${ssrInterpolate(_ctx.txt)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="action_form" data-v-fc8f7fd8><div class="action_form__input" data-v-fc8f7fd8>`);
      _push(ssrRenderComponent(InputPhone, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
      }, null, _parent));
      _push(`</div>`);
      if (!unref(isHome)) {
        _push(`<div class="action__privacy" data-v-fc8f7fd8> \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443 \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445`);
            } else {
              return [
                createTextVNode("\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` \u0438 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 `);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.`);
            } else {
              return [
                createTextVNode("\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="action_form__btn" data-v-fc8f7fd8>`);
      _push(ssrRenderComponent(DefaultBtn, {
        name: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
        type: "primary",
        color: "brown",
        size: "normal"
      }, null, _parent));
      _push(`</div></div></div><div class="action__img" data-v-fc8f7fd8><img${ssrRenderAttr("src", _ctx.img)} alt="" data-v-fc8f7fd8></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/ActionBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ActionBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc8f7fd8"]]);

export { ActionBlock as A };
//# sourceMappingURL=ActionBlock-aWUrXyPi.mjs.map
