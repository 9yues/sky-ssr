import { b as buildAssetsURL } from './paths.mjs';
import { E as ElCarousel, a as ElCarouselItem } from './el-carousel-item-ef7bd407.mjs';
import { E as ElButton } from './el-button-57fc21f6.mjs';
import { E as ElRow, a as ElCol } from './el-col-576e676f.mjs';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode, useSSRContext, mergeProps, ref, withCtx, createTextVNode, createVNode, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { b as buildProps, d as definePropType, u as useNamespace, w as withInstall, _ as _export_sfc$1 } from './base-fff68214.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useEmitter, a as useHeader } from './useHeader-64fb2e60.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import 'lodash-unified';
import '@vue/shared';
import './icon-cb9c547f.mjs';
import '@ctrl/tinycolor';
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
import 'mitt';

const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__ = defineComponent({
  name: "ElDivider"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);
const ElDivider = withInstall(Divider);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChinaMap",
  __ssrInlineRender: true,
  emits: ["string"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "map",
        class: "china-map"
      }, _attrs))} data-v-abc891de></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChinaMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-abc891de"]]);
const _imports_0 = "" + buildAssetsURL("1.b9866271.png");
const _imports_1 = "" + buildAssetsURL("2.f70d21b7.png");
const _imports_2 = "" + buildAssetsURL("3.2f837709.png");
const _imports_3 = "data:image/png;base64,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";
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "data:image/png;base64,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";
const _imports_6 = "" + buildAssetsURL("bg_color2.d5425c22.jpg");
const _imports_7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAZlBMVEUAAABNs/JHs/NGsvNGsvNFsvJFsvNGsvNIs/ZIsvVGs/NHtPJOxP9Fs/JHtPNGs/JGtPRFs/JFs/NFsvJFs/NGs/JGs/NGs/NGsvNGs/NHs/JFs/NKtfVFs/NGs/NFsvNGs/NFsvPnqoLCAAAAInRSTlMAFJTU/f/lsDk16ncN3UHcX7WX7Kooms/p+GT3NPqv6H/2KhAJtQAAALJJREFUeAHtzYWNxAAQA0AHfMwMwf6LfDxRtBth2NPAoEdERCQIo5gVs/kCjsV8xoo4CgPUWq5oidcwrWNaVkvU2Gxpi3cw7GLa9hv4DvQcYTjSc4DvRM8ZhjM9J/gudMFA10WJEiVTTq63++PjSdfDQNfz8XG/XfHj9Waj3i8gSdmwNEHGxmXI2bgcbIESJUqUKFGiRIkSJUqUKFGiRIkSJUp6mbzZuDeKkg0rCwyQiMg36A+Ir2Q4UnoAAAAASUVORK5CYII=";
const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABp1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9dxUMaAAAAjXRSTlMAAQUKDxMVFxgaHB0fIQwRFiAEDR4DFAcQEgYZAgkbP26Dj5COa0Q1JmotInNTL111hH9vSiRWVV6FO4xxI3JFbCyLMjxXOXd6JUZLSYIoeVRNcFmKKjh4KWFkZ40wiDcxdEiHJ0NQT35CbUFfNC5lY2Y+PX1RWEcrNmBOiTpSe1uBaHZcTHwzaVpigEAI+owDAAAHOElEQVR4AczUAbqCIBAE4BXTShgVBEtA73/Md4HX95kBy3+EndmhRBrR3rr+/ngOUgFKDs/Hve9urWioGmKc5kHjAz3M0yiIm1l6ixNsvxji4sZV4gtyHR0V17QzLpjbsp19dQoXqe5VLPL3gJ8Mb0f5uU3jZ3pzlJfpNJLQnaF8xIqEVpEr9BWJrY4yWBSSUwul5gOyCJ5Sihuy2SIls1tkZHdKo5mQ2dRQAiYgu2ASxK5QgNo5YmeIPwYUEyJd5g4UdDi6SEgUJQVd4i0Ks54u2DWK0xeev9VgoFv+e+a5qddgoj19QViwsYJOcxKMpKOT4gFWR6RTmgBmoaEzNrDb6IQdFTgxUkahAsqkLyhTTSdU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";
const _imports_9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAQAAACiV3CzAAABEklEQVR42pXQL0hDYRSG8c+NyZwwtEwMIktisxgMYrMIZsFgndgEizMPbNZZL5gEg2KaGtQyRDGImBTBoAjbwgZjf56xMLYTzv3uefPzK6/rjzHyfNKgzIaLMnYZrM1OFHDIcF1yfpDkltHt+0kKSfJ2UrCTEzs5JeYnN4IExK3knISVXJH0kQkkKZGyknvSflISpMy0lbySsZJ3Zq3k0Q+KAvyE50u8ibzGuh7HOKAp8geyej7HnYhbHBHX8y0qIv9gWY/TBMgVmdTzVb5E/MemHico0BH5NTN6vsCTiBvsOX3kqIv8mUU9znAp4g7HjOv5Cr8i/2bNhQ35yhlTLny8MFiVbecfWS6o8k/AfITc9QBqtRkGrI0d3AAAAABJRU5ErkJggg==";
const _imports_10 = "data:image/png;base64,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";
const _imports_11 = "" + buildAssetsURL("8.27ff837b.png");
const _imports_12 = "data:image/png;base64,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";
const bannerBg = "" + buildAssetsURL("banner_bg.8f3bf9a4.png");
const avatarPng = "" + buildAssetsURL("avatar.c6ea676a.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $on, MITT_KEY } = useEmitter();
    useHeader();
    const bannerList = ref([bannerBg, bannerBg, bannerBg]);
    const specialist = ref([
      {
        avatar: avatarPng,
        name: "\u5F20\u6559\u6388",
        englist_name: "Aviation Experts",
        texts: ["\u67D0\u7814\u7A76\u5B66\u9662\u5BA2\u5EA7\u6559\u6388", "1986\u5E74\u534E\u5357\u7406\u5DE5\u6570\u5B66\u7CFB\u6BD5\u4E1A", "10\u5E74\u822A\u7A7A\u822A\u5929\u5B9E\u6218\u8BC4\u59D4\u5B9E\u6218\u7ECF\u9A8C", "10\u5E74\u822A\u7A7A\u822A\u5929\u5B9E\u6218\u8BC4\u59D4\u5B9E\u6218\u7ECF\u9A8C"]
      },
      {
        avatar: avatarPng,
        name: "\u5F20\u6559\u6388",
        englist_name: "Aviation Experts",
        texts: ["\u67D0\u7814\u7A76\u5B66\u9662\u5BA2\u5EA7\u6559\u6388", "1986\u5E74\u534E\u5357\u7406\u5DE5\u6570\u5B66\u7CFB\u6BD5\u4E1A", "10\u5E74\u822A\u7A7A\u822A\u5929\u5B9E\u6218\u8BC4\u59D4\u5B9E\u6218\u7ECF\u9A8C", "10\u5E74\u822A\u7A7A\u822A\u5929\u5B9E\u6218\u8BC4\u59D4\u5B9E\u6218\u7ECF\u9A8C"]
      },
      {
        avatar: avatarPng,
        name: "\u5F20\u6559\u6388",
        englist_name: "Aviation Experts",
        texts: ["\u67D0\u7814\u7A76\u5B66\u9662\u5BA2\u5EA7\u6559\u6388", "1986\u5E74\u534E\u5357\u7406\u5DE5\u6570\u5B66\u7CFB\u6BD5\u4E1A", "10\u5E74\u822A\u7A7A\u822A\u5929\u5B9E\u6218\u8BC4\u59D4\u5B9E\u6218\u7ECF\u9A8C", "10\u5E74\u822A\u7A7A\u822A\u5929\u5B9E\u6218\u8BC4\u59D4\u5B9E\u6218\u7ECF\u9A8C"]
      }
    ]);
    $on(MITT_KEY.HEADER_SELECT_EVENT, (e) => {
      console.log("e", e);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_button = ElButton;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_divider = ElDivider;
      const _component_china_map = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-1a9a5466>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        trigger: "click",
        height: "740px",
        autoplay: false,
        interval: 1e6
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(bannerList), (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, {
                key: item,
                class: "relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-100% h-740px object-cover block"${ssrRenderAttr("src", item)} data-v-1a9a5466${_scopeId2}><div class="absolute top-50% left-50% translate-x--50% translate-y--90%" data-v-1a9a5466${_scopeId2}><div class="row" data-v-1a9a5466${_scopeId2}><div class="text-[40px] font-bold text-[#fff]" data-v-1a9a5466${_scopeId2}> \u7AE5\u521B\u7A7A\u5929 </div><div class="text-[40px] font-bold text-[#fff] mt-14px" data-v-1a9a5466${_scopeId2}> \u5168\u56FD\u9752\u5C11\u5E74\u7A7A\u5929\u79D1\u666E\u6210\u679C\u5C55\u6F14\u6D3B\u52A8 </div>`);
                    _push3(ssrRenderComponent(_component_el_button, {
                      color: "#fff",
                      round: "",
                      size: "large",
                      class: "mt-100px w-140px h-48px! border-rd-40px! home-banner__text"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u4E86\u89E3\u8BE6\u60C5 `);
                        } else {
                          return [
                            createTextVNode(" \u4E86\u89E3\u8BE6\u60C5 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-100% h-740px object-cover block",
                        src: item
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "absolute top-50% left-50% translate-x--50% translate-y--90%" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "text-[40px] font-bold text-[#fff]" }, " \u7AE5\u521B\u7A7A\u5929 "),
                          createVNode("div", { class: "text-[40px] font-bold text-[#fff] mt-14px" }, " \u5168\u56FD\u9752\u5C11\u5E74\u7A7A\u5929\u79D1\u666E\u6210\u679C\u5C55\u6F14\u6D3B\u52A8 "),
                          createVNode(_component_el_button, {
                            color: "#fff",
                            round: "",
                            size: "large",
                            class: "mt-100px w-140px h-48px! border-rd-40px! home-banner__text"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E86\u89E3\u8BE6\u60C5 ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
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
                return openBlock(), createBlock(_component_el_carousel_item, {
                  key: item,
                  class: "relative"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-100% h-740px object-cover block",
                      src: item
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "absolute top-50% left-50% translate-x--50% translate-y--90%" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "text-[40px] font-bold text-[#fff]" }, " \u7AE5\u521B\u7A7A\u5929 "),
                        createVNode("div", { class: "text-[40px] font-bold text-[#fff] mt-14px" }, " \u5168\u56FD\u9752\u5C11\u5E74\u7A7A\u5929\u79D1\u666E\u6210\u679C\u5C55\u6F14\u6D3B\u52A8 "),
                        createVNode(_component_el_button, {
                          color: "#fff",
                          round: "",
                          size: "large",
                          class: "mt-100px w-140px h-48px! border-rd-40px! home-banner__text"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E86\u89E3\u8BE6\u60C5 ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="home-entrance mt-100px" data-v-1a9a5466><div class="row" data-v-1a9a5466>`);
      _push(ssrRenderComponent(_component_el_row, {
        gutter: 80,
        class: "w-1200px ml-auto! mr-auto!",
        justify: "center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, { span: 8 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-center items-center" data-v-1a9a5466${_scopeId2}><img class="w-170px"${ssrRenderAttr("src", _imports_0)} data-v-1a9a5466${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    round: "",
                    size: "large",
                    class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u62A5\u540D\u5165\u53E3 `);
                      } else {
                        return [
                          createTextVNode(" \u62A5\u540D\u5165\u53E3 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                      createVNode("img", {
                        class: "w-170px",
                        src: _imports_0
                      }),
                      createVNode(_component_el_button, {
                        type: "primary",
                        round: "",
                        size: "large",
                        class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u62A5\u540D\u5165\u53E3 ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, { span: 8 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-center items-center" data-v-1a9a5466${_scopeId2}><img class="w-170px"${ssrRenderAttr("src", _imports_1)} data-v-1a9a5466${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    round: "",
                    size: "large",
                    class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u53C2\u4E0E\u6D3B\u52A8 `);
                      } else {
                        return [
                          createTextVNode(" \u53C2\u4E0E\u6D3B\u52A8 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                      createVNode("img", {
                        class: "w-170px",
                        src: _imports_1
                      }),
                      createVNode(_component_el_button, {
                        type: "primary",
                        round: "",
                        size: "large",
                        class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u53C2\u4E0E\u6D3B\u52A8 ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, { span: 8 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col justify-center items-center" data-v-1a9a5466${_scopeId2}><img class="w-170px"${ssrRenderAttr("src", _imports_2)} data-v-1a9a5466${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    round: "",
                    size: "large",
                    class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u8BC1\u4E66\u67E5\u8BE2 `);
                      } else {
                        return [
                          createTextVNode(" \u8BC1\u4E66\u67E5\u8BE2 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                      createVNode("img", {
                        class: "w-170px",
                        src: _imports_2
                      }),
                      createVNode(_component_el_button, {
                        type: "primary",
                        round: "",
                        size: "large",
                        class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8BC1\u4E66\u67E5\u8BE2 ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, { span: 8 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                    createVNode("img", {
                      class: "w-170px",
                      src: _imports_0
                    }),
                    createVNode(_component_el_button, {
                      type: "primary",
                      round: "",
                      size: "large",
                      class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u62A5\u540D\u5165\u53E3 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_col, { span: 8 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                    createVNode("img", {
                      class: "w-170px",
                      src: _imports_1
                    }),
                    createVNode(_component_el_button, {
                      type: "primary",
                      round: "",
                      size: "large",
                      class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u53C2\u4E0E\u6D3B\u52A8 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_col, { span: 8 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col justify-center items-center" }, [
                    createVNode("img", {
                      class: "w-170px",
                      src: _imports_2
                    }),
                    createVNode(_component_el_button, {
                      type: "primary",
                      round: "",
                      size: "large",
                      class: "mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u8BC1\u4E66\u67E5\u8BE2 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="home-progress mt-100px" data-v-1a9a5466><img class="w-100%"${ssrRenderAttr("src", _imports_3)} data-v-1a9a5466><div class="home-progress__body bg-[#fff]" data-v-1a9a5466><div class="row" data-v-1a9a5466><div class="flex items-center justify-center" data-v-1a9a5466><img class="w-50px"${ssrRenderAttr("src", _imports_4)} data-v-1a9a5466><b class="text-[50px] ml-16px mr-16px" data-v-1a9a5466>\u6D3B\u52A8\u8FDB\u5EA6</b><img class="w-50px"${ssrRenderAttr("src", _imports_5)} data-v-1a9a5466></div><div class="h-400px" data-v-1a9a5466></div></div></div><img class="w-100%"${ssrRenderAttr("src", _imports_6)} data-v-1a9a5466></div><div class="home-introduce" data-v-1a9a5466><div class="home-introduce__body bg-[#E8F1FF]" data-v-1a9a5466><div class="row" data-v-1a9a5466><div class="flex items-center justify-center" data-v-1a9a5466><img class="w-50px"${ssrRenderAttr("src", _imports_4)} data-v-1a9a5466><b class="text-[50px] ml-16px mr-16px" data-v-1a9a5466>\u8D5B\u9879\u4ECB\u7ECD</b><img class="w-50px"${ssrRenderAttr("src", _imports_5)} data-v-1a9a5466></div><!--[-->`);
      ssrRenderList(4, (item) => {
        _push(`<div class="w-1200px ml-auto! mr-auto!" data-v-1a9a5466><div class="flex items-center mt-40px" data-v-1a9a5466><img class="w-30px"${ssrRenderAttr("src", _imports_7)} data-v-1a9a5466><b class="text-[22px] ml-16px text-[#4B78FF]" data-v-1a9a5466>\u79EF\u6728\u6784\u5EFA</b></div>`);
        _push(ssrRenderComponent(_component_el_row, { gutter: 60 }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(4, (item2) => {
                _push2(ssrRenderComponent(_component_el_col, { span: 8 }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center bg-[#4B78FF] border-rd-20px p-16px pl-24px pr-24px hover:opacity-80 cursor-pointer mt-20px" data-v-1a9a5466${_scopeId2}><div data-v-1a9a5466${_scopeId2}><img${ssrRenderAttr("src", _imports_8)} class="w-88px" alt="" data-v-1a9a5466${_scopeId2}></div><div class="flex-1 pl-12px" data-v-1a9a5466${_scopeId2}><div class="text-[24px] text-[#fff] font-bold" data-v-1a9a5466${_scopeId2}> \u4E2A\u4EBA\u64CD\u63A7 </div><div class="text-[14px] mt-12px text-[#fff] opacity-60 font-bold" data-v-1a9a5466${_scopeId2}> \u67E5\u770B\u8BE6\u60C5 </div></div><div data-v-1a9a5466${_scopeId2}><img class="w-10px"${ssrRenderAttr("src", _imports_9)} alt="" data-v-1a9a5466${_scopeId2}></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center bg-[#4B78FF] border-rd-20px p-16px pl-24px pr-24px hover:opacity-80 cursor-pointer mt-20px" }, [
                          createVNode("div", null, [
                            createVNode("img", {
                              src: _imports_8,
                              class: "w-88px",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "flex-1 pl-12px" }, [
                            createVNode("div", { class: "text-[24px] text-[#fff] font-bold" }, " \u4E2A\u4EBA\u64CD\u63A7 "),
                            createVNode("div", { class: "text-[14px] mt-12px text-[#fff] opacity-60 font-bold" }, " \u67E5\u770B\u8BE6\u60C5 ")
                          ]),
                          createVNode("div", null, [
                            createVNode("img", {
                              class: "w-10px",
                              src: _imports_9,
                              alt: ""
                            })
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(4, (item2) => {
                  return createVNode(_component_el_col, { span: 8 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center bg-[#4B78FF] border-rd-20px p-16px pl-24px pr-24px hover:opacity-80 cursor-pointer mt-20px" }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: _imports_8,
                            class: "w-88px",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "flex-1 pl-12px" }, [
                          createVNode("div", { class: "text-[24px] text-[#fff] font-bold" }, " \u4E2A\u4EBA\u64CD\u63A7 "),
                          createVNode("div", { class: "text-[14px] mt-12px text-[#fff] opacity-60 font-bold" }, " \u67E5\u770B\u8BE6\u60C5 ")
                        ]),
                        createVNode("div", null, [
                          createVNode("img", {
                            class: "w-10px",
                            src: _imports_9,
                            alt: ""
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  });
                }), 64))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><img class="w-100%"${ssrRenderAttr("src", _imports_10)} data-v-1a9a5466></div><div class="home-specialist" data-v-1a9a5466><div class="home-specialist__body bg-[#fff]" data-v-1a9a5466><div class="flex items-center justify-center" data-v-1a9a5466><img class="w-50px"${ssrRenderAttr("src", _imports_4)} data-v-1a9a5466><b class="text-[50px] ml-16px mr-16px" data-v-1a9a5466>\u4E13\u5BB6\u56E2\u961F</b><img class="w-50px"${ssrRenderAttr("src", _imports_5)} data-v-1a9a5466></div><div class="mt-100px" data-v-1a9a5466>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        trigger: "click",
        height: "1240px",
        autoplay: false,
        interval: 1e6
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(specialist), (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, {
                key: item,
                class: "relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-100% object-cover block"${ssrRenderAttr("src", _imports_11)} data-v-1a9a5466${_scopeId2}><div class="h-740px absolute left-0 top-0 w-100% h-100%" data-v-1a9a5466${_scopeId2}><div class="row flex items-center" data-v-1a9a5466${_scopeId2}><div class="w-700px" data-v-1a9a5466${_scopeId2}><img class="w-100% object-cover block"${ssrRenderAttr("src", item.avatar)} data-v-1a9a5466${_scopeId2}></div><div class="flex-1 pl-240px" data-v-1a9a5466${_scopeId2}><div class="text-[80px] font-bold mt-250px" data-v-1a9a5466${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="text-[#959DB6] text-[40px] mt-20px" data-v-1a9a5466${_scopeId2}>${ssrInterpolate(item.englist_name)}</div><div class="pt-30px pb-30px" data-v-1a9a5466${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_divider, { class: "border-black! opacity-60" }, null, _parent3, _scopeId2));
                    _push3(`</div><!--[-->`);
                    ssrRenderList(item.texts, (text) => {
                      _push3(`<div class="text-[24px] text-[#959DB6] flex items-center mb-12px" data-v-1a9a5466${_scopeId2}><div data-v-1a9a5466${_scopeId2}><div class="flex items-center justify-center w-20px h-20px border-rd-50%" style="${ssrRenderStyle({ "border": "1px solid #959DB6" })}" data-v-1a9a5466${_scopeId2}><div class="w-60% h-60% border-rd-50% bg-[#959DB6]" data-v-1a9a5466${_scopeId2}></div></div></div><div class="pl-12px" data-v-1a9a5466${_scopeId2}>${ssrInterpolate(text)}</div></div>`);
                    });
                    _push3(`<!--]--></div></div></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "w-100% object-cover block",
                        src: _imports_11
                      }),
                      createVNode("div", { class: "h-740px absolute left-0 top-0 w-100% h-100%" }, [
                        createVNode("div", { class: "row flex items-center" }, [
                          createVNode("div", { class: "w-700px" }, [
                            createVNode("img", {
                              class: "w-100% object-cover block",
                              src: item.avatar
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "flex-1 pl-240px" }, [
                            createVNode("div", { class: "text-[80px] font-bold mt-250px" }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "text-[#959DB6] text-[40px] mt-20px" }, toDisplayString(item.englist_name), 1),
                            createVNode("div", { class: "pt-30px pb-30px" }, [
                              createVNode(_component_el_divider, { class: "border-black! opacity-60" })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(item.texts, (text) => {
                              return openBlock(), createBlock("div", {
                                key: text,
                                class: "text-[24px] text-[#959DB6] flex items-center mb-12px"
                              }, [
                                createVNode("div", null, [
                                  createVNode("div", {
                                    class: "flex items-center justify-center w-20px h-20px border-rd-50%",
                                    style: { "border": "1px solid #959DB6" }
                                  }, [
                                    createVNode("div", { class: "w-60% h-60% border-rd-50% bg-[#959DB6]" })
                                  ])
                                ]),
                                createVNode("div", { class: "pl-12px" }, toDisplayString(text), 1)
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(specialist), (item) => {
                return openBlock(), createBlock(_component_el_carousel_item, {
                  key: item,
                  class: "relative"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-100% object-cover block",
                      src: _imports_11
                    }),
                    createVNode("div", { class: "h-740px absolute left-0 top-0 w-100% h-100%" }, [
                      createVNode("div", { class: "row flex items-center" }, [
                        createVNode("div", { class: "w-700px" }, [
                          createVNode("img", {
                            class: "w-100% object-cover block",
                            src: item.avatar
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "flex-1 pl-240px" }, [
                          createVNode("div", { class: "text-[80px] font-bold mt-250px" }, toDisplayString(item.name), 1),
                          createVNode("div", { class: "text-[#959DB6] text-[40px] mt-20px" }, toDisplayString(item.englist_name), 1),
                          createVNode("div", { class: "pt-30px pb-30px" }, [
                            createVNode(_component_el_divider, { class: "border-black! opacity-60" })
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(item.texts, (text) => {
                            return openBlock(), createBlock("div", {
                              key: text,
                              class: "text-[24px] text-[#959DB6] flex items-center mb-12px"
                            }, [
                              createVNode("div", null, [
                                createVNode("div", {
                                  class: "flex items-center justify-center w-20px h-20px border-rd-50%",
                                  style: { "border": "1px solid #959DB6" }
                                }, [
                                  createVNode("div", { class: "w-60% h-60% border-rd-50% bg-[#959DB6]" })
                                ])
                              ]),
                              createVNode("div", { class: "pl-12px" }, toDisplayString(text), 1)
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><img class="w-100%"${ssrRenderAttr("src", _imports_12)} data-v-1a9a5466></div><div class="home-apply" data-v-1a9a5466><div class="home-apply__body bg-[#E8F1FF]" data-v-1a9a5466><div class="row" data-v-1a9a5466><div class="flex items-center justify-center" data-v-1a9a5466><img class="w-50px"${ssrRenderAttr("src", _imports_4)} data-v-1a9a5466><b class="text-[50px] ml-16px mr-16px" data-v-1a9a5466>\u62A5\u540D\u60C5\u51B5</b><img class="w-50px"${ssrRenderAttr("src", _imports_5)} data-v-1a9a5466></div><div class="mt-100px pb-100px" data-v-1a9a5466>`);
      _push(ssrRenderComponent(_component_china_map, null, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1a9a5466"]]);

export { index as default };
//# sourceMappingURL=index-db9248d7.mjs.map
