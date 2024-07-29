import { E as ElCarousel, a as ElCarouselItem } from "./el-carousel-item-ef7bd407.js";
import { defineComponent, ref, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot, getCurrentInstance, inject, toRefs, createElementVNode, createBlock, withCtx, resolveDynamicComponent, toDisplayString, createTextVNode, createCommentVNode, normalizeStyle, mergeProps, createVNode, Fragment, renderList, useSSRContext } from "vue";
import { b as buildProps, u as useNamespace, _ as _export_sfc, d as definePropType, E as ElIcon, w as withInstall, a as withNoopInstall } from "./base-fff68214.js";
import { i as iconPropType } from "./icon-cb9c547f.js";
import { E as ElLink } from "./el-link-61704992.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { a as useRouter } from "../server.mjs";
import "destr";
import "lodash-unified";
import "@vue/shared";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
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
const elCard = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RichText",
  __ssrInlineRender: true,
  emits: ["string"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_el_link = ElLink;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "pb-20px row pt-0" }, _attrs))} data-v-94bb8087><h2 class="text-26px" data-v-94bb8087> 世界机器人大赛2022总决赛-元宇宙三维编程赛项成功举办 </h2><div class="text-[#9b9b9b] pt-20px pb-20px text-13px flex flex-items-center" data-v-94bb8087><span data-v-94bb8087>发表时间：2023-03-04 12:52:31</span><span data-v-94bb8087>浏览量：2585</span></div><div class="flex rich-text" data-v-94bb8087><div class="flex-1 rich-text__content" data-v-94bb8087><div data-v-94bb8087><img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt="" data-v-94bb8087> 新华社布宜诺斯艾利斯12月2日电 12月1日，国家主席习近平就美国前总统乔治·布什逝世向美国总统特朗普致唁电。习近平代表中国政府和中国人民，并以个人的名义，对乔治·布什前总统逝世表示深切的哀悼，向其家庭全体成员表示诚挚的慰问。 习近平在唁电中表示，乔治·布什前总统是中国人民的老朋友，40多年来见证并推动中美关系取得历史性发展，为两国人民友好事业作出了积极贡献。中国人民对此不会忘记。 新华社布宜诺斯艾利斯12月2日电 12月1日，国家主席习近平就美国前总统乔治·布什逝世向美国总统特朗普致唁电。习近平代表中国政府和中国人民，并以个人的名义，对乔治·布什前总统逝世表示深切的哀悼，向其家庭全体成员表示诚挚的慰问。 习近平在唁电中表示，乔治·布什前总统是中国人民的老朋友，40多年来见证并推动中美关系取得历史性发展，为两国人民友好事业作出了积极贡献。中国人民对此不会忘记。 习近平强调，长期以来，在两国领导人和两国人民共同努力下，中美关系不断前行，为两国人民和各国人民都带来了福祉。我高度重视中美关系，愿同总统先生一道，努力推动两国关系沿着正确轨道继续向前发展。 习近平强调，长期以来，在两国领导人和两国人民共同努力下，中美关系不断前行，为两国人民和各国人民都带来了福祉。我高度重视中美关系，愿同总统先生一道，努力推动两国关系沿着正确轨道继续向前发展。 </div></div><div class="w-300px ml-40px rich-text__file" data-v-94bb8087>`);
      _push(ssrRenderComponent(_component_el_card, { style: { "max-width": "480px" } }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-header" data-v-94bb8087${_scopeId}><span data-v-94bb8087${_scopeId}>附件下载</span></div>`);
          } else {
            return [
              createVNode("div", { class: "card-header" }, [
                createVNode("span", null, "附件下载")
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
const RichText_vue_vue_type_style_index_0_scoped_94bb8087_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RichText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-94bb8087"]]);
const elBreadcrumb = "";
const elBreadcrumbItem = "";
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
                  _push3(` 首页 `);
                } else {
                  return [
                    createTextVNode(" 首页 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`赛事介绍`);
                } else {
                  return [
                    createTextVNode("赛事介绍")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`正文`);
                } else {
                  return [
                    createTextVNode("正文")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_breadcrumb_item, { to: { path: "/" } }, {
                default: withCtx(() => [
                  createTextVNode(" 首页 ")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("赛事介绍")
                ]),
                _: 1
              }),
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createTextVNode("正文")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_...all_-d42be7c8.js.map
