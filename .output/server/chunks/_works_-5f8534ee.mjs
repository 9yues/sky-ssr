import { b as buildAssetsURL } from './paths.mjs';
import { E as ElCarousel, a as ElCarouselItem } from './el-carousel-item-ef7bd407.mjs';
import { E as ElImage, a as ElCollapse, b as ElCollapseItem } from './el-collapse-item-d144b345.mjs';
import { E as ElRow, a as ElCol } from './el-col-576e676f.mjs';
import { useSSRContext, defineComponent, computed, ref, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, isRef, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useRoute, a as useRouter } from './server.mjs';
import { u as useEmitter, a as useHeader } from './useHeader-64fb2e60.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import './base-fff68214.mjs';
import 'lodash-unified';
import '@vue/shared';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA6lBMVEUAAAAoKDYlJSshJCsjJisiJSoiJishJiojJSsiJioiJSszMzMhJisjJiwhJSohJSohJCmAgIAiJywjJSoiJSpVVVUjJysiJioiJiomJi0iJioiJikhJSohJik1OD1TVFkkJywjJSonKzCwsbLf3+Dg4OLS09R/goQjJiulpqnKy8xoa24mJjPX19i5urxQUlckJCre3t/f3+CnqKo8P0Tb3NyTlZcsLzQjJivT1NV9gILHycpmaWy5urtPUVanqKo7PkPa3NxtbnHe3t9TVluWl5qnqKl9gIOVlpgtMTaoqqu6vL2Ag4YmKS4Ud1FiAAAATnRSTlMAEzBNXmhxeoSNlgo2V3SRmgI0bZcDQYeGIn9KmV2fqZt0m87p6uK5msncsBTk1Kgx6erLoefCnV/iuNyv06fKoeay6KnCyrnCncvUuZtgzikIAAABoUlEQVR4AZzBhQGDMAAEwMcdPrjL/kPWvWjuMEdRNd0wLdtxXce2TEPXVAU7eH4QRpwRhYHvYYWIk5Qr0iQWmJflBTeVeYYZVc1d6gp/mpY7tQ2+iY4HdAKfOh7S4UPDgxq8VC0Pais8ZDUPqzPc5ZSQ40YUlFAIXMWUEuMqoZQEF15KKakHwKckH0DAGf0wcksAYOKfc+llkd1gEMNghTnZFLYlhak8Zeb2/scpcwb8nrwb+IK/LWlldY3tTjcBLwPwzI0e36o/iMMtYOjZHvGjxpMoPcTUs7vOz9rY3IrAU+RiMLm9sxuEc3BxmNzbD/1yDoUUTB4c+uECimmYPDr2wUWULDDXTk5nr5VQNsHk2fnMtTIqRpgXl/+vVVC1wrz6f60qwdLH1n4w41917XnIS9JDoj2e6ca4CTdGqiVv7yItmY0Og/vYMMgiExlDD/ExlNEGIJqB0fuYmtzN8NB/Sg99SW4koVMkVhJ3yVYohkayUoqJU+yjYlx1y6ybdT0mGAPK4sK8GI0ioWzZH8qWPaHMV8Npzv2Ogy43HcJTL/wd69jGn4HfAAAAAElFTkSuQmCC";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAQAAACTbf5ZAAAFjUlEQVR42uWde2hWZRzHf+8sZ6LNwlIkQUyJoCjRhKAyK//I7/c5e02PJSaKeQ2mEJiZEIugxEuZUORaxiCa/zg0rzTsQqvWxZFaTgtnzcxLXpvT5tx+seY45S5ue8/9fD5/b7wf3nPec87znPMc8R47ByNhmxdYwJ3czZ9xmCdZi3qcZhUr8AlL+CbnmTHWAIk26SFmGgtYCe20p/kZ862H7J4SJewe1jiuw2Fod+UFlGIxhkr4MfdxNY5C3ZFfmWdNfwknM3phDiuhrnuJH+ExCRe4ySzlMah3cheftHtIGLBvxus4D/XBg5g/53oJkvzrzAKchvon93O8BIV5nJXQANw+4U7xG2sAN0EDs96snNFL/MPk4gQ0WPmjNUL8wO6DQmgovMQl+VniLbwHB6HhkV9Yg7zdlM9DwyWPWKPEG7AYjdDwyQtmsriN3ZNF0NDayHxNiXvkZXMrNOSu1ZR7udugEbBQU67kYjs0GnJdflbm++4OaHRkUYbJLIJGzBWZ5C6BRk/Olu5hJqIRGkHruzVCgpGshUbUs12+gLT6sgoaXbnf9JaugPehEXdt1/Zejb4mLZ3DGoRTcQjmyU5eOmILNB5yh1wbjofGR06SjplzPQ7EKvg3+wbpCD4HjZkvS/tMuBVnYxd8MT1E2oOroPGTxe1OibEmlsENHC5tYZZCY2phm/O7PB7XYNY9cZtcDedB46t5o3Xw7jgHs3bqjfJfcBc05k7/f/AyqDtO0xIt12KdosjAKVqs5bpBn3Yv+GNx0BSroe5YohX/WqpTMsgtvfJfNrgWzMv2QGnBjIG6ZblWOMkZ5DZbrnBNLpQWuBrqluu1IoNkJ7fZYoV7lksL2AN1RecDO8mZ/rWbG3UfacL0RyPUw+SAcx2tcdIEJ0GhXicHnwtlvjRh3oZ6nhxkrmOpNMG9UB+Sg89V1tg9xO7BOqgvyYHlOlrDhMOhUJ+Sg8t1frZooD4mB5PrOEe4COprcpC5yteE70F9Tg4i1xnf4lao78l+5zqWCcqgASQHk6v8wTkK+5scSC6UvwiroQEkB5IL5RHBOaiPyYHmQnlGeBnqa3KAuVDWZenfkiBUBScStUkfFxxK1I9WpeCnJB2W8KXgu0SdeGwWbkvSqSWLBGsSdfGwXLgwSZeHmCkWkjQAwPvFuiNJQzx2jtg9eTkpg3g8Ik3g+0QM0zrj0mZlUgbi+UpzMJMy1WKNlSbS/diQiMm0i3nZ0gx3JWK6dKe0wFehblkc2glxs1RayL07Cbc8WCPEgXvjflML9nnwDJpz29L6jG9bWq/lWqLT3N2gHdJD0AiNsY2t7prG57EOLmtrQQONsTPlajTFytjm/pGXLa0xz8Q2eHF7D78fjWMu/7JzpG24CBpDV3S0zNuhuOWyxh4o7cNJsQteIq2I8fGYVXnZ0jHpe9kQn2AzUa4N3opLLj+VzmB640AscmvSt0vn4GjURz/YzJLOY16Kei43dXFBXX4d6dxj9i3SNXIHOyeaCVmrhaNxMaLB86V74KlI5q6R7sP8yOVuz2iVYk2xIEq5/NZ5irT7ye9GJvcb58o3w+SE5DrJKAx9cLmT607ysjDncrPdR9wG01kX1kEcj1YhxoP8M3wrOJgZ4h0Yyt2hyq02D4i35GVzFRpDkvtBup/4gXkEhwPPPWUmi3+k++HDQHM3WoPEb6yxAe3Pe/hoYO/dMXN9fh/ACTM34FeY2Dlczhp/RjHwop0jYSDdj0tw1ONXlszOy5YwkZdtZnny/MQlbDG5mpJwgpFmJX93KbURZZhv+kvYyc/iw3iHVZk8MIeNZkF6iESL3MGcygLu78I3+iu28HlrlJcvJElZ4jl9ZVjDMBmeGiZDNUd6N5vK0nNy5orVqX1Z+3Iqpdb7D/MPkgsruFFo0vgAAAAASUVORK5CYII=";
function getFileExtension(url) {
  return url.substring(url.lastIndexOf(".") + 1);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageVideoCard",
  __ssrInlineRender: true,
  props: {
    poster: { default: "" },
    videoUrl: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const _getFileExtension = computed(() => {
      var _a;
      return props.poster && getFileExtension((_a = props.poster) == null ? void 0 : _a.toString());
    });
    const videoFileExtensions = ref(["avi", "mp4", "mov", "wmv", "flv", "webm", "mpeg"]);
    const isVideoVisble = ref(false);
    computed(() => {
      var _a;
      return _getFileExtension.value && ((_a = videoFileExtensions.value) == null ? void 0 : _a.includes(_getFileExtension.value));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      _push(`<!--[--><div class="card" data-v-e28b3a8b>`);
      if (props.videoUrl) {
        _push(`<div class="card-header relative" data-v-e28b3a8b>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: props.poster,
          fit: "cover"
        }, null, _parent));
        _push(`<img class="card-header__play absolute right-10px top-10px w-30px"${ssrRenderAttr("src", _imports_0)} data-v-e28b3a8b></div>`);
      } else {
        _push(`<div class="card-header" data-v-e28b3a8b>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: props.poster,
          fit: "cover",
          "preview-teleported": "",
          "preview-src-list": [props.poster]
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
      if (unref(isVideoVisble)) {
        _push(`<div class="card-video fixed top-0 left-0 w-100% h-100% z-9" data-v-e28b3a8b><div class="card-video__content relative w-500px h-500px absolute top-50% left-50% translate-y--50% translate-x--50%" data-v-e28b3a8b><img class="absolute right--40px top--40px w-30px cursor-pointer hover:opacity-80"${ssrRenderAttr("src", _imports_1)} data-v-e28b3a8b><video class="w-500px"${ssrRenderAttr("src", props.videoUrl)} controls data-v-e28b3a8b></video></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageVideoCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e28b3a8b"]]);
const pic01 = "" + buildAssetsURL("pic-01.7d066441.png");
const pic02 = "" + buildAssetsURL("pic-02.2264fdcd.png");
const pic03 = "" + buildAssetsURL("pic-03.71062b42.png");
const pic04 = "" + buildAssetsURL("pic-04.ad0a3494.png");
const pic05 = "" + buildAssetsURL("pic-05.c6039c87.png");
const pic06 = "" + buildAssetsURL("pic-06.d22b830f.png");
const pic07 = "" + buildAssetsURL("pic-07.c4d21060.png");
const pic08 = "" + buildAssetsURL("pic-08.7919ee1d.png");
const pic09 = "" + buildAssetsURL("pic-09.6a263764.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[works]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { $on, MITT_KEY } = useEmitter();
    const { headerList } = useHeader();
    const active = ref(["works"]);
    const list = ref([
      {
        poster: pic01,
        videoUrl: "https://www.runoob.com/try/demo_source/movie.mp4"
      },
      {
        poster: pic02
      },
      {
        poster: pic03
      },
      {
        poster: pic04
      },
      {
        poster: pic05
      },
      {
        poster: pic06
      },
      {
        poster: pic07
      },
      {
        poster: pic08
      },
      {
        poster: pic09
      }
    ]);
    const sidebarList = computed(() => headerList.find((v) => v.title === "\u7CBE\u5F69\u5C55\u793A").children);
    computed(() => {
      return 1;
    });
    $on(MITT_KEY.HEADER_SELECT_EVENT, (e) => {
      console.log("e", e);
    });
    const handleGo = (index) => {
      router.push(`/works/${index + 1}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_image_video_card = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "works" }, _attrs))} data-v-0b7b6373>`);
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
                    _push3(`<img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" data-v-0b7b6373${_scopeId2}>`);
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
      _push(`<div class="works-body mt-50px" data-v-0b7b6373><div class="row" data-v-0b7b6373><div class="flex" data-v-0b7b6373><div class="w-200px" data-v-0b7b6373>`);
      _push(ssrRenderComponent(_component_el_collapse, {
        modelValue: unref(active),
        "onUpdate:modelValue": ($event) => isRef(active) ? active.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_collapse_item, {
              title: "\u7CBE\u5F69\u5C55\u793A",
              name: "works"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul data-v-0b7b6373${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(sidebarList), (item, index) => {
                    _push3(`<li class="${ssrRenderClass({ on: index + 1 === +unref(route).params.works })}" data-v-0b7b6373${_scopeId2}>${ssrInterpolate(item.title)}</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(sidebarList), (item, index) => {
                        return openBlock(), createBlock("li", {
                          key: item.href,
                          class: { on: index + 1 === +unref(route).params.works },
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
                title: "\u7CBE\u5F69\u5C55\u793A",
                name: "works"
              }, {
                default: withCtx(() => [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sidebarList), (item, index) => {
                      return openBlock(), createBlock("li", {
                        key: item.href,
                        class: { on: index + 1 === +unref(route).params.works },
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
      _push(`</div><div class="flex-1 pl-40px" data-v-0b7b6373>`);
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
                    _push3(ssrRenderComponent(_component_image_video_card, {
                      poster: item.poster,
                      "video-url": item.videoUrl
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_image_video_card, {
                        poster: item.poster,
                        "video-url": item.videoUrl
                      }, null, 8, ["poster", "video-url"])
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
                    createVNode(_component_image_video_card, {
                      poster: item.poster,
                      "video-url": item.videoUrl
                    }, null, 8, ["poster", "video-url"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works/[works].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _works_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b7b6373"]]);

export { _works_ as default };
//# sourceMappingURL=_works_-5f8534ee.mjs.map
