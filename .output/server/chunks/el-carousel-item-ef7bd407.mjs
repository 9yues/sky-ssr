import { defineComponent, computed, unref, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, normalizeStyle, createBlock, Transition, withCtx, withDirectives, createVNode, vShow, createCommentVNode, renderSlot, Fragment, renderList, toDisplayString, getCurrentInstance, ref, watch, shallowRef, provide, inject, onUnmounted, isVNode } from 'vue';
import { b as buildProps, u as useNamespace, E as ElIcon, c as arrow_left_default, e as arrow_right_default, w as withInstall, a as withNoopInstall, i as isNumber, _ as _export_sfc } from './base-fff68214.mjs';
import { throttle } from 'lodash-unified';
import { isString, isArray } from '@vue/shared';

const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
};
const carouselContextKey = Symbol("carouselContextKey");
const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3e3
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: ""
  },
  indicator: {
    type: Boolean,
    default: true
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
});
const carouselEmits = {
  change: (current, prev) => [current, prev].every(isNumber)
};
const THROTTLE_TIME = 300;
const useCarousel = (props, emit, componentName) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren(getCurrentInstance(), "ElCarouselItem");
  const activeIndex = ref(-1);
  const timer = ref(null);
  const hover = ref(false);
  const root = ref();
  const arrowDisplay = computed(() => props.arrow !== "never" && !unref(isVertical));
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0);
  });
  const isCardType = computed(() => props.type === "card");
  const isVertical = computed(() => props.direction === "vertical");
  const throttledArrowClick = throttle((index) => {
    setActiveItem(index);
  }, THROTTLE_TIME, { trailing: true });
  const throttledIndicatorHover = throttle((index) => {
    handleIndicatorHover(index);
  }, THROTTLE_TIME);
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value)
      return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }
  const playSlides = () => {
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0;
    }
  };
  function setActiveItem(index) {
    if (isString(index)) {
      const filteredItems = items.value.filter((item) => item.props.name === index);
      if (filteredItems.length > 0) {
        index = items.value.indexOf(filteredItems[0]);
      }
    }
    index = Number(index);
    if (Number.isNaN(index) || index !== Math.floor(index)) {
      return;
    }
    const itemCount = items.value.length;
    const oldIndex = activeIndex.value;
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index;
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex);
    }
    resetTimer();
  }
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index) => {
      item.translateItem(index, activeIndex.value, oldIndex);
    });
  }
  function itemInStage(item, index) {
    var _a, _b, _c, _d;
    const _items = unref(items);
    const itemCount = _items.length;
    if (itemCount === 0 || !item.states.inStage)
      return false;
    const nextItemIndex = index + 1;
    const prevItemIndex = index - 1;
    const lastItemIndex = itemCount - 1;
    const isLastItemActive = _items[lastItemIndex].states.active;
    const isFirstItemActive = _items[0].states.active;
    const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
    const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
    if (index === lastItemIndex && isFirstItemActive || isNextItemActive) {
      return "left";
    } else if (index === 0 && isLastItemActive || isPrevItemActive) {
      return "right";
    }
    return false;
  }
  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }
  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }
  function handleButtonEnter(arrow) {
    if (unref(isVertical))
      return;
    items.value.forEach((item, index) => {
      if (arrow === itemInStage(item, index)) {
        item.states.hover = true;
      }
    });
  }
  function handleButtonLeave() {
    if (unref(isVertical))
      return;
    items.value.forEach((item) => {
      item.states.hover = false;
    });
  }
  function handleIndicatorClick(index) {
    activeIndex.value = index;
  }
  function handleIndicatorHover(index) {
    if (props.trigger === "hover" && index !== activeIndex.value) {
      activeIndex.value = index;
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1);
  }
  function next() {
    setActiveItem(activeIndex.value + 1);
  }
  function resetTimer() {
    pauseTimer();
    startTimer();
  }
  watch(() => activeIndex.value, (current, prev2) => {
    resetItemPosition(prev2);
    if (prev2 > -1) {
      emit("change", current, prev2);
    }
  });
  watch(() => props.autoplay, (autoplay) => {
    autoplay ? startTimer() : pauseTimer();
  });
  watch(() => props.loop, () => {
    setActiveItem(activeIndex.value);
  });
  watch(() => props.interval, () => {
    resetTimer();
  });
  watch(() => items.value, () => {
    if (items.value.length > 0)
      setActiveItem(props.initialIndex);
  });
  shallowRef();
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    addItem,
    removeItem,
    setActiveItem
  });
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    items,
    handleButtonEnter,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    throttledArrowClick,
    throttledIndicatorHover
  };
};
const _hoisted_1 = ["onMouseenter", "onClick"];
const _hoisted_2 = { key: 0 };
const COMPONENT_NAME$1 = "ElCarousel";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: carouselProps,
  emits: carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      root,
      activeIndex,
      arrowDisplay,
      hasLabel,
      hover,
      isCardType,
      items,
      handleButtonEnter,
      handleButtonLeave,
      handleIndicatorClick,
      handleMouseEnter,
      handleMouseLeave,
      setActiveItem,
      prev,
      next,
      throttledArrowClick,
      throttledIndicatorHover
    } = useCarousel(props, emit);
    const ns = useNamespace("carousel");
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (unref(hasLabel)) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside" || unref(isCardType)) {
        classes.push(ns.em("indicators", "outside"));
      }
      return classes;
    });
    expose({
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(carouselClasses)),
        onMouseenter: _cache[6] || (_cache[6] = withModifiers((...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args), ["stop"])),
        onMouseleave: _cache[7] || (_cache[7] = withModifiers((...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args), ["stop"]))
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("container")),
          style: normalizeStyle({ height: _ctx.height })
        }, [
          unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
            key: 0,
            name: "carousel-arrow-left",
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "left")]),
                onMouseenter: _cache[0] || (_cache[0] = ($event) => unref(handleButtonEnter)("left")),
                onMouseleave: _cache[1] || (_cache[1] = (...args) => unref(handleButtonLeave) && unref(handleButtonLeave)(...args)),
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) - 1), ["stop"]))
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_left_default))
                  ]),
                  _: 1
                })
              ], 34), [
                [
                  vShow,
                  (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) > 0)
                ]
              ])
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
            key: 1,
            name: "carousel-arrow-right",
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "right")]),
                onMouseenter: _cache[3] || (_cache[3] = ($event) => unref(handleButtonEnter)("right")),
                onMouseleave: _cache[4] || (_cache[4] = (...args) => unref(handleButtonLeave) && unref(handleButtonLeave)(...args)),
                onClick: _cache[5] || (_cache[5] = withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) + 1), ["stop"]))
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                })
              ], 34), [
                [
                  vShow,
                  (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) < unref(items).length - 1)
                ]
              ])
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
          key: 0,
          class: normalizeClass(unref(indicatorsClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index) => {
            return openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass([
                unref(ns).e("indicator"),
                unref(ns).em("indicator", _ctx.direction),
                unref(ns).is("active", index === unref(activeIndex))
              ]),
              onMouseenter: ($event) => unref(throttledIndicatorHover)(index),
              onClick: withModifiers(($event) => unref(handleIndicatorClick)(index), ["stop"])
            }, [
              createElementVNode("button", {
                class: normalizeClass(unref(ns).e("button"))
              }, [
                unref(hasLabel) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(item.props.label), 1)) : createCommentVNode("v-if", true)
              ], 2)
            ], 42, _hoisted_1);
          }), 128))
        ], 2)) : createCommentVNode("v-if", true)
      ], 34);
    };
  }
});
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);
const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});
const useCarouselItem = (props, componentName) => {
  const carouselContext = inject(carouselContextKey);
  const instance = getCurrentInstance();
  const hover = ref(false);
  const translate = ref(0);
  const scale = ref(1);
  const active = ref(false);
  const ready = ref(false);
  const inStage = ref(false);
  const animating = ref(false);
  const { isCardType, isVertical } = carouselContext;
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
      carouselContext.setActiveItem(index);
    }
  }
  onUnmounted(() => {
    carouselContext.removeItem(instance.uid);
  });
  return {
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick
  };
};
const __default__ = defineComponent({
  name: "ElCarouselItem"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: carouselItemProps,
  setup(__props) {
    const ns = useNamespace("carousel");
    const {
      active,
      animating,
      hover,
      inStage,
      isVertical,
      translate,
      isCardType,
      scale,
      ready,
      handleItemClick
    } = useCarouselItem();
    const itemStyle = computed(() => {
      const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${unref(translate)}px)`;
      const _scale = `scale(${unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).e("item"),
          unref(ns).is("active", unref(active)),
          unref(ns).is("in-stage", unref(inStage)),
          unref(ns).is("hover", unref(hover)),
          unref(ns).is("animating", unref(animating)),
          { [unref(ns).em("item", "card")]: unref(isCardType) }
        ]),
        style: normalizeStyle(unref(itemStyle)),
        onClick: _cache[0] || (_cache[0] = (...args) => unref(handleItemClick) && unref(handleItemClick)(...args))
      }, [
        unref(isCardType) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("mask"))
        }, null, 2)), [
          [vShow, !unref(active)]
        ]) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 6)), [
        [vShow, unref(ready)]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);
const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);

export { ElCarousel as E, ElCarouselItem as a };
//# sourceMappingURL=el-carousel-item-ef7bd407.mjs.map
