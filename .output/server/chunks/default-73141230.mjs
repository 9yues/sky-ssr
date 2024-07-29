import { b as buildAssetsURL } from './paths.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { defineComponent, ref, createElementBlock, useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { E as ElButton } from './el-button-57fc21f6.mjs';
import { u as useEmitter } from './useHeader-560ce8eb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { E as ElLink } from './el-link-61704992.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import './base-fff68214.mjs';
import 'lodash-unified';
import '@vue/shared';
import './icon-cb9c547f.mjs';
import '@ctrl/tinycolor';
import 'mitt';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderCpn",
  __ssrInlineRender: true,
  setup(__props) {
    useEmitter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_el_button = ElButton;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header bg-[#fff]" }, _attrs))} data-v-afc51866><div class="row" data-v-afc51866><nav class="relative w-100% block" data-v-afc51866>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div class="absolute right--120px top-50% translate-y--50% flex flex-items-center" data-v-afc51866>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-afc51866${_scopeId}>\u6CE8\u518C</span><span class="ml-2 mr-2 opacity-20" data-v-afc51866${_scopeId}>|</span><span data-v-afc51866${_scopeId}>\u767B\u5F55</span>`);
          } else {
            return [
              createVNode("span", null, "\u6CE8\u518C"),
              createVNode("span", { class: "ml-2 mr-2 opacity-20" }, "|"),
              createVNode("span", null, "\u767B\u5F55")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/HeaderCpn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderCpn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-afc51866"]]);
const _imports_0 = "" + buildAssetsURL("wb-2wm.da42b6c8.png");
const _imports_1 = "" + buildAssetsURL("wx-2wm.e12b3feb.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterCpn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_link = ElLink;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sky-footer" }, _attrs))} data-v-39702879><div class="row" data-v-39702879><div class="flex pt-200px" data-v-39702879><div class="w-300px" data-v-39702879><div class="mb-40px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[20px]! text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5E95\u90E8\u5BFC\u822A `);
          } else {
            return [
              createTextVNode(" \u5E95\u90E8\u5BFC\u822A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[12px] text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9996\u9875 `);
          } else {
            return [
              createTextVNode(" \u9996\u9875 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[12px] text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8D5B\u9879\u4ECB\u7ECD `);
          } else {
            return [
              createTextVNode(" \u8D5B\u9879\u4ECB\u7ECD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[12px] text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u65B0\u95FB\u4E2D\u5FC3 `);
          } else {
            return [
              createTextVNode(" \u65B0\u95FB\u4E2D\u5FC3 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-300px" data-v-39702879><div class="mb-40px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[20px]! text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8054\u7CFB\u65B9\u5F0F `);
          } else {
            return [
              createTextVNode(" \u8054\u7CFB\u65B9\u5F0F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[12px] text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5730\u5740\uFF1A\u5317\u4EAC\u5E02XXXX `);
          } else {
            return [
              createTextVNode(" \u5730\u5740\uFF1A\u5317\u4EAC\u5E02XXXX ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[12px] text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7535\u8BDD\uFF1Axxxx `);
          } else {
            return [
              createTextVNode(" \u7535\u8BDD\uFF1Axxxx ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10px" data-v-39702879>`);
      _push(ssrRenderComponent(_component_el_link, {
        underline: false,
        class: "text-[12px] text-[#fff]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u90AE\u7BB1\uFF1Axxxx `);
          } else {
            return [
              createTextVNode(" \u90AE\u7BB1\uFF1Axxxx ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex-1 flex justify-end" data-v-39702879><div class="mr-40px" data-v-39702879><img${ssrRenderAttr("src", _imports_0)} class="w-120px h-120px object-cover" data-v-39702879><div class="mt-10px text-center" data-v-39702879> \u5B98\u7F51\u5BA2\u6237\u7AEF </div></div><div data-v-39702879><img${ssrRenderAttr("src", _imports_1)} class="w-120px h-120px object-cover" data-v-39702879><div class="mt-10px text-center" data-v-39702879> \u5FAE\u4FE1\u516C\u4F17\u53F7 </div></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/FooterCpn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterCpn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-39702879"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-dcdbe3ed>`);
      _push(ssrRenderComponent(HeaderCpn, null, null, _parent));
      _push(`<div class="sky-body" data-v-dcdbe3ed>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(FooterCpn, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dcdbe3ed"]]);

export { _default as default };
//# sourceMappingURL=default-73141230.mjs.map
