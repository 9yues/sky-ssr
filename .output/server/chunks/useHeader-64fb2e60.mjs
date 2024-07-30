import { u as useRoute, a as useRouter } from './server.mjs';
import { computed, watch } from 'vue';
import mitt from 'mitt';

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
      title: "\u9996\u9875"
    },
    {
      href: "/introduce",
      title: "\u8D5B\u9879\u4ECB\u7ECD",
      children: []
    },
    {
      href: "/specialist",
      title: "\u4E13\u5BB6\u56E2\u961F",
      children: [
        {
          href: "/specialist/1",
          title: "\u884C\u4E1A\u4E13\u5BB6"
        },
        {
          href: "/specialist/2",
          title: "\u822A\u7A7A\u4E13\u5BB6"
        },
        {
          href: "/specialist/3",
          title: "\u822A\u5929\u4E13\u5BB6"
        }
      ]
    },
    {
      href: "/works",
      title: "\u7CBE\u5F69\u5C55\u793A",
      children: [
        {
          href: "/works/1",
          title: "\u4F18\u79C0\u4F5C\u54C1"
        },
        {
          href: "/works/2",
          title: "\u4F18\u79C0\u7EC4\u7EC7\u5355\u4F4D"
        }
      ]
    },
    {
      href: "/news",
      title: "\u65B0\u95FB\u4E2D\u5FC3"
    },
    {
      href: "/connect",
      title: "\u8054\u7CFB\u6211\u4EEC"
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

export { useHeader as a, useEmitter as u };
//# sourceMappingURL=useHeader-64fb2e60.mjs.map
