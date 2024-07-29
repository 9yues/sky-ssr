import { E as ElCarousel, a as ElCarouselItem } from './el-carousel-item-ef7bd407.mjs';
import { defineComponent, ref, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot, getCurrentInstance, inject, toRefs, createElementVNode, createBlock, withCtx, resolveDynamicComponent, toDisplayString, createTextVNode, createCommentVNode, normalizeStyle, useSSRContext, createVNode, Fragment, renderList, mergeProps } from 'vue';
import { b as buildProps, u as useNamespace, d as definePropType, E as ElIcon, w as withInstall, a as withNoopInstall, _ as _export_sfc } from './base-fff68214.mjs';
import { i as iconPropType } from './icon-cb9c547f.mjs';
import { E as ElLink } from './el-link-61704992.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { a as useRouter } from './server.mjs';
import 'lodash-unified';
import '@vue/shared';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';

const breadcrumbKey = Symbol("breadcrumbKey");
const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});
const __default__$2 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": "Breadcrumb",
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: {
    type: Boolean,
    default: false
  }
});
const __default__$1 = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const { separator, separatorIcon } = toRefs(breadcrumbContext);
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        unref(separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(separatorIcon))))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString(unref(separator)), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__ = defineComponent({
  name: "ElCard"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("body")),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);
const ElCard = withInstall(Card);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RichText",
  __ssrInlineRender: true,
  emits: ["string"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_el_link = ElLink;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "pb-20px row pt-0" }, _attrs))} data-v-94bb8087><h2 class="text-26px" data-v-94bb8087> \u4E16\u754C\u673A\u5668\u4EBA\u5927\u8D5B2022\u603B\u51B3\u8D5B-\u5143\u5B87\u5B99\u4E09\u7EF4\u7F16\u7A0B\u8D5B\u9879\u6210\u529F\u4E3E\u529E </h2><div class="text-[#9b9b9b] pt-20px pb-20px text-13px flex flex-items-center" data-v-94bb8087><span data-v-94bb8087>\u53D1\u8868\u65F6\u95F4\uFF1A2023-03-04 12:52:31</span><span data-v-94bb8087>\u6D4F\u89C8\u91CF\uFF1A2585</span></div><div class="flex rich-text" data-v-94bb8087><div class="flex-1 rich-text__content" data-v-94bb8087><div data-v-94bb8087><img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt="" data-v-94bb8087> \u65B0\u534E\u793E\u5E03\u5B9C\u8BFA\u65AF\u827E\u5229\u65AF12\u67082\u65E5\u7535 12\u67081\u65E5\uFF0C\u56FD\u5BB6\u4E3B\u5E2D\u4E60\u8FD1\u5E73\u5C31\u7F8E\u56FD\u524D\u603B\u7EDF\u4E54\u6CBB\xB7\u5E03\u4EC0\u901D\u4E16\u5411\u7F8E\u56FD\u603B\u7EDF\u7279\u6717\u666E\u81F4\u5501\u7535\u3002\u4E60\u8FD1\u5E73\u4EE3\u8868\u4E2D\u56FD\u653F\u5E9C\u548C\u4E2D\u56FD\u4EBA\u6C11\uFF0C\u5E76\u4EE5\u4E2A\u4EBA\u7684\u540D\u4E49\uFF0C\u5BF9\u4E54\u6CBB\xB7\u5E03\u4EC0\u524D\u603B\u7EDF\u901D\u4E16\u8868\u793A\u6DF1\u5207\u7684\u54C0\u60BC\uFF0C\u5411\u5176\u5BB6\u5EAD\u5168\u4F53\u6210\u5458\u8868\u793A\u8BDA\u631A\u7684\u6170\u95EE\u3002 \u4E60\u8FD1\u5E73\u5728\u5501\u7535\u4E2D\u8868\u793A\uFF0C\u4E54\u6CBB\xB7\u5E03\u4EC0\u524D\u603B\u7EDF\u662F\u4E2D\u56FD\u4EBA\u6C11\u7684\u8001\u670B\u53CB\uFF0C40\u591A\u5E74\u6765\u89C1\u8BC1\u5E76\u63A8\u52A8\u4E2D\u7F8E\u5173\u7CFB\u53D6\u5F97\u5386\u53F2\u6027\u53D1\u5C55\uFF0C\u4E3A\u4E24\u56FD\u4EBA\u6C11\u53CB\u597D\u4E8B\u4E1A\u4F5C\u51FA\u4E86\u79EF\u6781\u8D21\u732E\u3002\u4E2D\u56FD\u4EBA\u6C11\u5BF9\u6B64\u4E0D\u4F1A\u5FD8\u8BB0\u3002 \u65B0\u534E\u793E\u5E03\u5B9C\u8BFA\u65AF\u827E\u5229\u65AF12\u67082\u65E5\u7535 12\u67081\u65E5\uFF0C\u56FD\u5BB6\u4E3B\u5E2D\u4E60\u8FD1\u5E73\u5C31\u7F8E\u56FD\u524D\u603B\u7EDF\u4E54\u6CBB\xB7\u5E03\u4EC0\u901D\u4E16\u5411\u7F8E\u56FD\u603B\u7EDF\u7279\u6717\u666E\u81F4\u5501\u7535\u3002\u4E60\u8FD1\u5E73\u4EE3\u8868\u4E2D\u56FD\u653F\u5E9C\u548C\u4E2D\u56FD\u4EBA\u6C11\uFF0C\u5E76\u4EE5\u4E2A\u4EBA\u7684\u540D\u4E49\uFF0C\u5BF9\u4E54\u6CBB\xB7\u5E03\u4EC0\u524D\u603B\u7EDF\u901D\u4E16\u8868\u793A\u6DF1\u5207\u7684\u54C0\u60BC\uFF0C\u5411\u5176\u5BB6\u5EAD\u5168\u4F53\u6210\u5458\u8868\u793A\u8BDA\u631A\u7684\u6170\u95EE\u3002 \u4E60\u8FD1\u5E73\u5728\u5501\u7535\u4E2D\u8868\u793A\uFF0C\u4E54\u6CBB\xB7\u5E03\u4EC0\u524D\u603B\u7EDF\u662F\u4E2D\u56FD\u4EBA\u6C11\u7684\u8001\u670B\u53CB\uFF0C40\u591A\u5E74\u6765\u89C1\u8BC1\u5E76\u63A8\u52A8\u4E2D\u7F8E\u5173\u7CFB\u53D6\u5F97\u5386\u53F2\u6027\u53D1\u5C55\uFF0C\u4E3A\u4E24\u56FD\u4EBA\u6C11\u53CB\u597D\u4E8B\u4E1A\u4F5C\u51FA\u4E86\u79EF\u6781\u8D21\u732E\u3002\u4E2D\u56FD\u4EBA\u6C11\u5BF9\u6B64\u4E0D\u4F1A\u5FD8\u8BB0\u3002 \u4E60\u8FD1\u5E73\u5F3A\u8C03\uFF0C\u957F\u671F\u4EE5\u6765\uFF0C\u5728\u4E24\u56FD\u9886\u5BFC\u4EBA\u548C\u4E24\u56FD\u4EBA\u6C11\u5171\u540C\u52AA\u529B\u4E0B\uFF0C\u4E2D\u7F8E\u5173\u7CFB\u4E0D\u65AD\u524D\u884C\uFF0C\u4E3A\u4E24\u56FD\u4EBA\u6C11\u548C\u5404\u56FD\u4EBA\u6C11\u90FD\u5E26\u6765\u4E86\u798F\u7949\u3002\u6211\u9AD8\u5EA6\u91CD\u89C6\u4E2D\u7F8E\u5173\u7CFB\uFF0C\u613F\u540C\u603B\u7EDF\u5148\u751F\u4E00\u9053\uFF0C\u52AA\u529B\u63A8\u52A8\u4E24\u56FD\u5173\u7CFB\u6CBF\u7740\u6B63\u786E\u8F68\u9053\u7EE7\u7EED\u5411\u524D\u53D1\u5C55\u3002 \u4E60\u8FD1\u5E73\u5F3A\u8C03\uFF0C\u957F\u671F\u4EE5\u6765\uFF0C\u5728\u4E24\u56FD\u9886\u5BFC\u4EBA\u548C\u4E24\u56FD\u4EBA\u6C11\u5171\u540C\u52AA\u529B\u4E0B\uFF0C\u4E2D\u7F8E\u5173\u7CFB\u4E0D\u65AD\u524D\u884C\uFF0C\u4E3A\u4E24\u56FD\u4EBA\u6C11\u548C\u5404\u56FD\u4EBA\u6C11\u90FD\u5E26\u6765\u4E86\u798F\u7949\u3002\u6211\u9AD8\u5EA6\u91CD\u89C6\u4E2D\u7F8E\u5173\u7CFB\uFF0C\u613F\u540C\u603B\u7EDF\u5148\u751F\u4E00\u9053\uFF0C\u52AA\u529B\u63A8\u52A8\u4E24\u56FD\u5173\u7CFB\u6CBF\u7740\u6B63\u786E\u8F68\u9053\u7EE7\u7EED\u5411\u524D\u53D1\u5C55\u3002 </div></div><div class="w-300px ml-40px rich-text__file" data-v-94bb8087>`);
      _push(ssrRenderComponent(_component_el_card, { style: { "max-width": "480px" } }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-header" data-v-94bb8087${_scopeId}><span data-v-94bb8087${_scopeId}>\u9644\u4EF6\u4E0B\u8F7D</span></div>`);
          } else {
            return [
              createVNode("div", { class: "card-header" }, [
                createVNode("span", null, "\u9644\u4EF6\u4E0B\u8F7D")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(4, (o) => {
              _push2(`<div data-v-94bb8087${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_link, { type: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(`List item ${o}`)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(`List item ${o}`), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(4, (o) => {
                return createVNode("div", { key: o }, [
                  createVNode(_component_el_link, { type: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(`List item ${o}`), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RichText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-94bb8087"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRouter();
    const bannerList = ref(["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg", "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_rich_text = __nuxt_component_4;
      _push(`<main${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        trigger: "click",
        height: "450px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(bannerList), (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", item)} class="w-100% h-450px object-cover" alt=""${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: item,
                        class: "w-100% h-450px object-cover",
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(bannerList), (item) => {
                return openBlock(), createBlock(_component_el_carousel_item, { key: item }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: item,
                      class: "w-100% h-450px object-cover",
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
      _push(`<div class="pt-20px pb-20px row">`);
      _push(ssrRenderComponent(_component_el_breadcrumb, { separator: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, { to: { path: "/" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u9996\u9875 `);
                } else {
                  return [
                    createTextVNode(" \u9996\u9875 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u8D5B\u4E8B\u4ECB\u7ECD`);
                } else {
                  return [
                    createTextVNode("\u8D5B\u4E8B\u4ECB\u7ECD")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6B63\u6587`);
                } else {
                  return [
                    createTextVNode("\u6B63\u6587")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_breadcrumb_item, { to: { path: "/" } }, {
                default: withCtx(() => [
                  createTextVNode(" \u9996\u9875 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("\u8D5B\u4E8B\u4ECB\u7ECD")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("\u6B63\u6587")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_rich_text, null, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/competitionInfo/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...all_-d42be7c8.mjs.map
