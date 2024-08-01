import { E as ElCarousel, a as ElCarouselItem } from "./el-carousel-item-ef7bd407.js";
import { E as ElImage, a as ElCollapse, b as ElCollapseItem } from "./el-collapse-item-d144b345.js";
import { E as ElRow, a as ElCol } from "./el-col-576e676f.js";
import "./base-fff68214.js";
import { defineComponent, mergeProps, useSSRContext, ref, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, unref, isRef, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { u as useRoute, a as useRouter } from "../server.mjs";
import "destr";
import { u as useEmitter, a as useHeader } from "./useHeader-64fb2e60.js";
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
import "mitt";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageTextCard",
  __ssrInlineRender: true,
  props: {
    poster: { default: "" },
    title: { default: "" },
    desc: { default: "" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "cardRef",
        class: "card"
      }, _attrs))} data-v-0644e2a7><div class="card-header" data-v-0644e2a7>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: props.poster,
        fit: "cover"
      }, null, _parent));
      _push(`</div><div class="card-body p-12px" data-v-0644e2a7>${ssrInterpolate(props.title)}</div><div class="card-footer p-12px pt-0 text-[12px] text-[#959DB6]" data-v-0644e2a7>${ssrInterpolate(props.desc)}</div></div>`);
    };
  }
});
const ImageTextCard_vue_vue_type_style_index_0_scoped_0644e2a7_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageTextCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0644e2a7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[specialist]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    useEmitter();
    const { headerList } = useHeader();
    const active = ref(["specialist"]);
    const list = ref([
      {
        title: "王明明",
        desc: "某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。",
        poster: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      },
      {
        title: "王明明",
        desc: "某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。",
        poster: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      },
      {
        title: "王明明",
        desc: "某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。",
        poster: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      },
      {
        title: "王明明",
        desc: "某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。",
        poster: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      }
    ]);
    const sidebarList = computed(() => headerList.find((v) => v.title === "专家团队").children);
    const handleGo = (index) => {
      router.push(`/specialist/${index + 1}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_image_text_card = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "specialist" }, _attrs))} data-v-05cbdb2f>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        trigger: "click",
        height: "500px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(4, (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" data-v-05cbdb2f${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-100% h-500px object-cover block",
                        src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
                return createVNode(_component_el_carousel_item, { key: item }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-100% h-500px object-cover block",
                      src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="specialist-body mt-50px" data-v-05cbdb2f><div class="row" data-v-05cbdb2f><div class="flex" data-v-05cbdb2f><div class="w-200px" data-v-05cbdb2f>`);
      _push(ssrRenderComponent(_component_el_collapse, {
        modelValue: unref(active),
        "onUpdate:modelValue": ($event) => isRef(active) ? active.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_collapse_item, {
              title: "团队专家",
              name: "specialist"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul data-v-05cbdb2f${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(sidebarList), (item, index) => {
                    _push3(`<li class="${ssrRenderClass({ on: index + 1 === +unref(route).params.specialist })}" data-v-05cbdb2f${_scopeId2}>${ssrInterpolate(item.title)}</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(sidebarList), (item, index) => {
                        return openBlock(), createBlock("li", {
                          key: item.href,
                          class: { on: index + 1 === +unref(route).params.specialist },
                          onClick: ($event) => handleGo(index)
                        }, toDisplayString(item.title), 11, ["onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_collapse_item, {
                title: "团队专家",
                name: "specialist"
              }, {
                default: withCtx(() => [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sidebarList), (item, index) => {
                      return openBlock(), createBlock("li", {
                        key: item.href,
                        class: { on: index + 1 === +unref(route).params.specialist },
                        onClick: ($event) => handleGo(index)
                      }, toDisplayString(item.title), 11, ["onClick"]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 pl-40px" data-v-05cbdb2f>`);
      _push(ssrRenderComponent(_component_el_row, { gutter: 60 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(list), (item, index) => {
              _push2(ssrRenderComponent(_component_el_col, {
                key: index,
                class: "mb-60px",
                span: 8
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_image_text_card, {
                      title: item.title,
                      desc: item.desc,
                      poster: item.poster
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_image_text_card, {
                        title: item.title,
                        desc: item.desc,
                        poster: item.poster
                      }, null, 8, ["title", "desc", "poster"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(list), (item, index) => {
                return openBlock(), createBlock(_component_el_col, {
                  key: index,
                  class: "mb-60px",
                  span: 8
                }, {
                  default: withCtx(() => [
                    createVNode(_component_image_text_card, {
                      title: item.title,
                      desc: item.desc,
                      poster: item.poster
                    }, null, 8, ["title", "desc", "poster"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _specialist__vue_vue_type_style_index_0_scoped_05cbdb2f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/specialist/[specialist].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _specialist_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05cbdb2f"]]);
export {
  _specialist_ as default
};
//# sourceMappingURL=_specialist_-9aff3697.js.map
