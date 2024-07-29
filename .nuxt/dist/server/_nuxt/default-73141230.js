import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { defineComponent, ref, createElementBlock, mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { E as ElButton } from "./el-button-57fc21f6.js";
import "./base-fff68214.js";
import { u as useEmitter } from "./useHeader-560ce8eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { E as ElLink } from "./el-link-61704992.js";
import "./icon-cb9c547f.js";
import "@ctrl/tinycolor";
import "lodash-unified";
import "@vue/shared";
import "mitt";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
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
const elMenu = "";
const elTooltip = "";
const elPopper = "";
const elMenuItem = "";
const elSubMenu = "";
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
            _push2(`<span data-v-afc51866${_scopeId}>注册</span><span class="ml-2 mr-2 opacity-20" data-v-afc51866${_scopeId}>|</span><span data-v-afc51866${_scopeId}>登录</span>`);
          } else {
            return [
              createVNode("span", null, "注册"),
              createVNode("span", { class: "ml-2 mr-2 opacity-20" }, "|"),
              createVNode("span", null, "登录")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav></div></header>`);
    };
  }
});
const HeaderCpn_vue_vue_type_style_index_0_scoped_afc51866_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/HeaderCpn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderCpn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-afc51866"]]);
const _imports_0 = "" + __buildAssetsURL("wb-2wm.da42b6c8.png");
const _imports_1 = "" + __buildAssetsURL("wx-2wm.e12b3feb.png");
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
            _push2(` 底部导航 `);
          } else {
            return [
              createTextVNode(" 底部导航 ")
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
            _push2(` 首页 `);
          } else {
            return [
              createTextVNode(" 首页 ")
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
            _push2(` 赛项介绍 `);
          } else {
            return [
              createTextVNode(" 赛项介绍 ")
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
            _push2(` 新闻中心 `);
          } else {
            return [
              createTextVNode(" 新闻中心 ")
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
            _push2(` 联系方式 `);
          } else {
            return [
              createTextVNode(" 联系方式 ")
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
            _push2(` 地址：北京市XXXX `);
          } else {
            return [
              createTextVNode(" 地址：北京市XXXX ")
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
            _push2(` 电话：xxxx `);
          } else {
            return [
              createTextVNode(" 电话：xxxx ")
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
            _push2(` 邮箱：xxxx `);
          } else {
            return [
              createTextVNode(" 邮箱：xxxx ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex-1 flex justify-end" data-v-39702879><div class="mr-40px" data-v-39702879><img${ssrRenderAttr("src", _imports_0)} class="w-120px h-120px object-cover" data-v-39702879><div class="mt-10px text-center" data-v-39702879> 官网客户端 </div></div><div data-v-39702879><img${ssrRenderAttr("src", _imports_1)} class="w-120px h-120px object-cover" data-v-39702879><div class="mt-10px text-center" data-v-39702879> 微信公众号 </div></div></div></div></div></footer>`);
    };
  }
});
const FooterCpn_vue_vue_type_style_index_0_scoped_39702879_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/FooterCpn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterCpn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-39702879"]]);
const default_vue_vue_type_style_index_0_scoped_dcdbe3ed_lang = "";
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
export {
  _default as default
};
//# sourceMappingURL=default-73141230.js.map
