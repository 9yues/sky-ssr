import { u as useRoute, a as useRouter } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        p: "x4 y10",
        text: "center teal-700 dark:gray-200"
      }, _attrs))}><div text-4xl><div i-carbon-warning inline-block></div></div><div>Not found</div><div><button btn text-sm m="3 t8"> Back </button></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...all_-ecc426c1.mjs.map
