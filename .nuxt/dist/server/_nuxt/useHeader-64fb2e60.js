import { u as useRoute, a as useRouter } from "../server.mjs";
import { computed, watch } from "vue";
import "destr";
import mitt from "mitt";
var MITT_KEY_ENUM = /* @__PURE__ */ ((MITT_KEY_ENUM2) => {
  MITT_KEY_ENUM2["HEADER_SELECT_EVENT"] = "HEADER_SELECT_EVENT";
  MITT_KEY_ENUM2["CHANGE_TO_HOME"] = "CHANGE_TO_HOME";
  MITT_KEY_ENUM2["CHANGE_TO_BUSINESS"] = "CHANGE_TO_BUSINESS";
  MITT_KEY_ENUM2["CHANGE_TO_DATA"] = "CHANGE_TO_DATA";
  MITT_KEY_ENUM2["CHANGE_TO_TECHNOLOGY"] = "CHANGE_TO_TECHNOLOGY";
  MITT_KEY_ENUM2["CHANGE_TO_QUALITY"] = "CHANGE_TO_QUALITY";
  MITT_KEY_ENUM2["CHANGE_TO_ABOUT"] = "CHANGE_TO_ABOUT";
  return MITT_KEY_ENUM2;
})(MITT_KEY_ENUM || {});
const emitter = mitt();
function useEmitter() {
  const MITT_KEY = MITT_KEY_ENUM;
  return {
    MITT_KEY,
    $on: emitter.on,
    $emit: emitter.emit
  };
}
const useHeader = () => {
  const route = useRoute();
  useRouter();
  useEmitter();
  const headerList = [
    {
      href: "/home",
      title: "首页"
    },
    {
      href: "/introduce",
      title: "赛项介绍",
      children: []
    },
    {
      href: "/specialist",
      title: "专家团队",
      children: [
        {
          href: "/specialist/1",
          title: "行业专家"
        },
        {
          href: "/specialist/2",
          title: "航空专家"
        },
        {
          href: "/specialist/3",
          title: "航天专家"
        }
      ]
    },
    {
      href: "/works",
      title: "精彩展示",
      children: [
        {
          href: "/works/1",
          title: "优秀作品"
        },
        {
          href: "/works/2",
          title: "优秀组织单位"
        }
      ]
    },
    {
      href: "/news",
      title: "新闻中心"
    },
    {
      href: "/connect",
      title: "联系我们"
    }
  ];
  const activeIndex = computed(() => {
    console.log("route", route);
    return route.fullPath;
  });
  watch(activeIndex, (val) => {
    console.log("activeIndex", activeIndex);
  });
  return {
    /** 菜单默认的索引 */
    activeIndex,
    /** 菜单列表 */
    headerList
  };
};
export {
  useHeader as a,
  useEmitter as u
};
//# sourceMappingURL=useHeader-64fb2e60.js.map
