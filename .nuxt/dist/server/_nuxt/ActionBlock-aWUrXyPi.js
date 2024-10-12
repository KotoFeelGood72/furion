import { _ as __nuxt_component_0 } from "./nuxt-link-DRGY1ko4.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { I as InputPhone, D as DefaultBtn } from "./InputPhone-DQEXtS7N.js";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActionBlock",
  __ssrInlineRender: true,
  props: {
    title: { default: "Остались вопросы — с удовольствием ответим!" },
    txt: { default: "Свяжитесь с нами, чтобы обсудить ваши идеи и запросы. Наши специалисты всегда готовы предоставить консультацию и помочь на каждом этапе реализации вашего проекта. Вместе мы сможем создать нечто действительно выдающееся." },
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
        _push(`<div class="action__privacy" data-v-fc8f7fd8> Отправляя заявку вы соглашаетесь на обработку своих `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`персональных данных`);
            } else {
              return [
                createTextVNode("персональных данных")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` и принимаете `);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`политику конфиденциальности.`);
            } else {
              return [
                createTextVNode("политику конфиденциальности.")
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
        placeholder: "Номер телефона"
      }, null, _parent));
      _push(`</div>`);
      if (!unref(isHome)) {
        _push(`<div class="action__privacy" data-v-fc8f7fd8> Отправляя заявку вы соглашаетесь на обработку своих `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`персональных данных`);
            } else {
              return [
                createTextVNode("персональных данных")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` и принимаете `);
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`политику конфиденциальности.`);
            } else {
              return [
                createTextVNode("политику конфиденциальности.")
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
        name: "Отправить заявку",
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
export {
  ActionBlock as A
};
//# sourceMappingURL=ActionBlock-aWUrXyPi.js.map
