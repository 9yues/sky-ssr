globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _Z9o3pISPhN = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _Z9o3pISPhN
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/about.jpg": {
    "type": "image/jpeg",
    "etag": "\"71ce1-c/OGjuV3mnLJzjqQmZcAxIBvG4g\"",
    "mtime": "2024-07-10T13:17:24.159Z",
    "size": 466145,
    "path": "../public/about.jpg"
  },
  "/business.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a877-WhlmNIfPEJVktAUxoyexEjfOll4\"",
    "mtime": "2024-07-10T13:17:24.160Z",
    "size": 174199,
    "path": "../public/business.jpg"
  },
  "/carousel1.jpg": {
    "type": "image/jpeg",
    "etag": "\"38946-i61znfbE1pUKupe7A5SAfZSoinc\"",
    "mtime": "2024-07-10T13:17:24.161Z",
    "size": 231750,
    "path": "../public/carousel1.jpg"
  },
  "/carousel2.jpg": {
    "type": "image/jpeg",
    "etag": "\"3de5c-IYTHnkZIKuocoyzj/MSuUaJ8zW8\"",
    "mtime": "2024-07-10T13:17:24.162Z",
    "size": 253532,
    "path": "../public/carousel2.jpg"
  },
  "/carousel3.jpg": {
    "type": "image/jpeg",
    "etag": "\"40171-sqTnjHwPSaBq8pCIzSrPY0cRTi8\"",
    "mtime": "2024-07-10T13:17:24.164Z",
    "size": 262513,
    "path": "../public/carousel3.jpg"
  },
  "/contact.jpg": {
    "type": "image/jpeg",
    "etag": "\"5f252-pNGANVBJRt4VaGAM8i3whp84Bj8\"",
    "mtime": "2024-07-10T13:17:24.167Z",
    "size": 389714,
    "path": "../public/contact.jpg"
  },
  "/data.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b386-mo8Kq+Flw0n++LZtMJAhNDh7DhA\"",
    "mtime": "2024-07-10T13:17:24.168Z",
    "size": 177030,
    "path": "../public/data.jpg"
  },
  "/github.png": {
    "type": "image/png",
    "etag": "\"3ac5-xkdwciiPLsfl2aAP+5WHdwu+4Xc\"",
    "mtime": "2024-07-10T13:17:24.168Z",
    "size": 15045,
    "path": "../public/github.png"
  },
  "/logo.png": {
    "type": "image/png",
    "etag": "\"1341-ei8bz7NKkD72aOUC9gVqFvwyaoY\"",
    "mtime": "2024-07-10T13:17:24.168Z",
    "size": 4929,
    "path": "../public/logo.png"
  },
  "/qrCode.png": {
    "type": "image/png",
    "etag": "\"30f1-a6lG4EW9ouxzzRby85xsLlvup0k\"",
    "mtime": "2024-07-10T13:17:24.169Z",
    "size": 12529,
    "path": "../public/qrCode.png"
  },
  "/quality.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d531-st5pH2eksl60LvVr19nji76N78Y\"",
    "mtime": "2024-07-10T13:17:24.171Z",
    "size": 382257,
    "path": "../public/quality.jpg"
  },
  "/technology.jpg": {
    "type": "image/jpeg",
    "etag": "\"6e01e-dv7mrhB6LWcbRTi5pfwQG2/G2mE\"",
    "mtime": "2024-07-10T13:17:24.174Z",
    "size": 450590,
    "path": "../public/technology.jpg"
  },
  "/_nuxt/1.b9866271.png": {
    "type": "image/png",
    "etag": "\"1177d-PawDc3vDPW8N1VTrHTzbw+VklaU\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 71549,
    "path": "../public/_nuxt/1.b9866271.png"
  },
  "/_nuxt/2.f70d21b7.png": {
    "type": "image/png",
    "etag": "\"11111-JyY36VxieKOl0rQVjZrk79xHbJE\"",
    "mtime": "2024-07-30T14:50:27.910Z",
    "size": 69905,
    "path": "../public/_nuxt/2.f70d21b7.png"
  },
  "/_nuxt/3.2f837709.png": {
    "type": "image/png",
    "etag": "\"f14c-Zkpkd1OGnl+xb7u5Yg290lxbQYg\"",
    "mtime": "2024-07-30T14:50:27.910Z",
    "size": 61772,
    "path": "../public/_nuxt/3.2f837709.png"
  },
  "/_nuxt/8.27ff837b.png": {
    "type": "image/png",
    "etag": "\"46b11-DHV0StD0SZHpseWYnGIWbu/7dQI\"",
    "mtime": "2024-07-30T14:50:27.910Z",
    "size": 289553,
    "path": "../public/_nuxt/8.27ff837b.png"
  },
  "/_nuxt/avatar.c6ea676a.png": {
    "type": "image/png",
    "etag": "\"1dbfac-HvnOwRrrS15yxjFbJJNyq+gKqHo\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 1949612,
    "path": "../public/_nuxt/avatar.c6ea676a.png"
  },
  "/_nuxt/banner_bg.8f3bf9a4.png": {
    "type": "image/png",
    "etag": "\"953aa-Da7abYIXsyGoF+zMH2vVC280byY\"",
    "mtime": "2024-07-30T14:50:27.911Z",
    "size": 611242,
    "path": "../public/_nuxt/banner_bg.8f3bf9a4.png"
  },
  "/_nuxt/base.3bde811b.js": {
    "type": "application/javascript",
    "etag": "\"38e4-5eoNXyUY6FjGWFcmf36SdjGXzsg\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 14564,
    "path": "../public/_nuxt/base.3bde811b.js"
  },
  "/_nuxt/base.fbed925b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1edd-OhMe3f9XfA0U0uXqoUQWUjW8p9M\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 7901,
    "path": "../public/_nuxt/base.fbed925b.css"
  },
  "/_nuxt/bg_color2.d5425c22.jpg": {
    "type": "image/jpeg",
    "etag": "\"156f-oaDXB2wGjlnegRXKiT66ZftrG4s\"",
    "mtime": "2024-07-30T14:50:27.910Z",
    "size": 5487,
    "path": "../public/_nuxt/bg_color2.d5425c22.jpg"
  },
  "/_nuxt/default.6af23529.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32a9-cKkmK6w8pFRqEnaIitd62z7Tuo0\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 12969,
    "path": "../public/_nuxt/default.6af23529.css"
  },
  "/_nuxt/default.d9fc826d.js": {
    "type": "application/javascript",
    "etag": "\"103b4-Vg6v7YkbR+2wheG3r+k0kD2jmFE\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 66484,
    "path": "../public/_nuxt/default.d9fc826d.js"
  },
  "/_nuxt/el-button.2e70eb9e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d48-l60fAHKM1vUNxeLp/yHdjLJNj5k\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 15688,
    "path": "../public/_nuxt/el-button.2e70eb9e.css"
  },
  "/_nuxt/el-button.312247fa.js": {
    "type": "application/javascript",
    "etag": "\"4cad-Z3sW9BoGDPfpHmxD2irSylwH+NE\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 19629,
    "path": "../public/_nuxt/el-button.312247fa.js"
  },
  "/_nuxt/el-carousel.f7956e61.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ff2-uJIF8xtqvGttykoBjuBs2OvoW7E\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 4082,
    "path": "../public/_nuxt/el-carousel.f7956e61.css"
  },
  "/_nuxt/el-carousel.fb3dbec3.js": {
    "type": "application/javascript",
    "etag": "\"2a4b-TXrkcKtl37/wS33Qvqbdo1Tg/9s\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 10827,
    "path": "../public/_nuxt/el-carousel.fb3dbec3.js"
  },
  "/_nuxt/el-collapse.26234a48.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1afb-7ixWdBNgmGwPMlvVcmcu5Fdcw4M\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 6907,
    "path": "../public/_nuxt/el-collapse.26234a48.css"
  },
  "/_nuxt/el-collapse.7ec116d4.js": {
    "type": "application/javascript",
    "etag": "\"541b-IAVMhOevfjIYbOE8zljSmnwIv4E\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 21531,
    "path": "../public/_nuxt/el-collapse.7ec116d4.js"
  },
  "/_nuxt/el-link.71f568a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c3e-sbR4omcFy7mf5rhnGGrg8zENB2Y\"",
    "mtime": "2024-07-30T14:50:27.911Z",
    "size": 3134,
    "path": "../public/_nuxt/el-link.71f568a6.css"
  },
  "/_nuxt/el-link.970712c2.js": {
    "type": "application/javascript",
    "etag": "\"4ac-8BY+SvzjzHxMi+O927Ei1cNDVXo\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 1196,
    "path": "../public/_nuxt/el-link.970712c2.js"
  },
  "/_nuxt/el-row.ba1b7dea.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8202-1PtGnbGHp51JiFi3c+sz2CBwniQ\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 33282,
    "path": "../public/_nuxt/el-row.ba1b7dea.css"
  },
  "/_nuxt/el-row.dde33063.js": {
    "type": "application/javascript",
    "etag": "\"912-kJ2z7Yk7K66Twsp9wS0DFWQYo9s\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 2322,
    "path": "../public/_nuxt/el-row.dde33063.js"
  },
  "/_nuxt/entry.2e4a15a3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4083-6PfZY0TNRUViuMhe4+cBv+IxlCs\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 16515,
    "path": "../public/_nuxt/entry.2e4a15a3.css"
  },
  "/_nuxt/entry.31dcf398.js": {
    "type": "application/javascript",
    "etag": "\"23e38-TWHqgpiupxtDmTdwCC8OAECg2yM\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 147000,
    "path": "../public/_nuxt/entry.31dcf398.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.bf3ff950.js": {
    "type": "application/javascript",
    "etag": "\"8df-TFum//IAsI13JISthffSUQuLTzo\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 2271,
    "path": "../public/_nuxt/error-404.bf3ff950.js"
  },
  "/_nuxt/error-500.9cabc508.js": {
    "type": "application/javascript",
    "etag": "\"787-JeQnYK4detllhbkBnfbcnKmV744\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 1927,
    "path": "../public/_nuxt/error-500.9cabc508.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.cdd77bf0.js": {
    "type": "application/javascript",
    "etag": "\"4c7-IG2B+MkuOurfFEmRPHPoSxJUdus\"",
    "mtime": "2024-07-30T14:50:27.915Z",
    "size": 1223,
    "path": "../public/_nuxt/error-component.cdd77bf0.js"
  },
  "/_nuxt/footer_bg.bfa29365.png": {
    "type": "image/png",
    "etag": "\"10abf-IwMvNRpwU+XlxLcS+6TKLIZzbX4\"",
    "mtime": "2024-07-30T14:50:27.907Z",
    "size": 68287,
    "path": "../public/_nuxt/footer_bg.bfa29365.png"
  },
  "/_nuxt/home.12ceaefa.js": {
    "type": "application/javascript",
    "etag": "\"112-ePyFT6ZQU2ISgSXW/Zfo3zACs0I\"",
    "mtime": "2024-07-30T14:50:27.916Z",
    "size": 274,
    "path": "../public/_nuxt/home.12ceaefa.js"
  },
  "/_nuxt/icon.e8a2fe8a.js": {
    "type": "application/javascript",
    "etag": "\"56-hUHDiMBZ1AWRLPraLlGVeAmDJDg\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 86,
    "path": "../public/_nuxt/icon.e8a2fe8a.js"
  },
  "/_nuxt/index.21f2e3c3.js": {
    "type": "application/javascript",
    "etag": "\"144f1e-b+wLMrIjCJnHY4b/bN5ytb8IYA0\"",
    "mtime": "2024-07-30T14:50:27.922Z",
    "size": 1330974,
    "path": "../public/_nuxt/index.21f2e3c3.js"
  },
  "/_nuxt/index.8b573c38.js": {
    "type": "application/javascript",
    "etag": "\"81d-ij6si1e2vhd4oxOWn3bZ50LRHJc\"",
    "mtime": "2024-07-30T14:50:27.915Z",
    "size": 2077,
    "path": "../public/_nuxt/index.8b573c38.js"
  },
  "/_nuxt/index.cae1bbd8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36d-sBRKSS1jtsu25Tys1ixVsbOzPVQ\"",
    "mtime": "2024-07-30T14:50:27.913Z",
    "size": 877,
    "path": "../public/_nuxt/index.cae1bbd8.css"
  },
  "/_nuxt/pic-01.7d066441.png": {
    "type": "image/png",
    "etag": "\"232e4-hjeI3DaHBCdmg47sFjganwULFv0\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 144100,
    "path": "../public/_nuxt/pic-01.7d066441.png"
  },
  "/_nuxt/pic-02.2264fdcd.png": {
    "type": "image/png",
    "etag": "\"3fcee-fu+5g9uMx+25wV25pSy95BqOh1U\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 261358,
    "path": "../public/_nuxt/pic-02.2264fdcd.png"
  },
  "/_nuxt/pic-03.71062b42.png": {
    "type": "image/png",
    "etag": "\"2d574-GBFyoRTo0+xhwK3nhr0NnbAAZ3Q\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 185716,
    "path": "../public/_nuxt/pic-03.71062b42.png"
  },
  "/_nuxt/pic-04.ad0a3494.png": {
    "type": "image/png",
    "etag": "\"2b4f2-sO2NZvkj3lF8hu5UVgFtsIj5IwM\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 177394,
    "path": "../public/_nuxt/pic-04.ad0a3494.png"
  },
  "/_nuxt/pic-05.c6039c87.png": {
    "type": "image/png",
    "etag": "\"34a08-cDM3+Nx5ruhjaARdKUfOlaU5uQw\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 215560,
    "path": "../public/_nuxt/pic-05.c6039c87.png"
  },
  "/_nuxt/pic-06.d22b830f.png": {
    "type": "image/png",
    "etag": "\"2b7b1-hcdShTBmb0nm+Ikt9xkSMZmMnZE\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 178097,
    "path": "../public/_nuxt/pic-06.d22b830f.png"
  },
  "/_nuxt/pic-07.c4d21060.png": {
    "type": "image/png",
    "etag": "\"324d8-TMADGCuvq9O58zC8tscYH2XJw30\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 206040,
    "path": "../public/_nuxt/pic-07.c4d21060.png"
  },
  "/_nuxt/pic-08.7919ee1d.png": {
    "type": "image/png",
    "etag": "\"3100a-3JwbTHtDoO3dmltp+s/tz7grhPg\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 200714,
    "path": "../public/_nuxt/pic-08.7919ee1d.png"
  },
  "/_nuxt/pic-09.6a263764.png": {
    "type": "image/png",
    "etag": "\"49371-ApUyc7EnQp8NATIUJkozIp9EjA8\"",
    "mtime": "2024-07-30T14:50:27.910Z",
    "size": 299889,
    "path": "../public/_nuxt/pic-09.6a263764.png"
  },
  "/_nuxt/test.40b761ac.js": {
    "type": "application/javascript",
    "etag": "\"c2-/Dpij66FZr4Uv1eb19dAG6tT/9E\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 194,
    "path": "../public/_nuxt/test.40b761ac.js"
  },
  "/_nuxt/useHeader.2caa6216.js": {
    "type": "application/javascript",
    "etag": "\"580-ugE5cUMkkFvXl/9ydce8D2X50m4\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 1408,
    "path": "../public/_nuxt/useHeader.2caa6216.js"
  },
  "/_nuxt/wb-2wm.da42b6c8.png": {
    "type": "image/png",
    "etag": "\"3313-wyNxYt8IbNINI/QpIHdBB2hmFYA\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 13075,
    "path": "../public/_nuxt/wb-2wm.da42b6c8.png"
  },
  "/_nuxt/wx-2wm.e12b3feb.png": {
    "type": "image/png",
    "etag": "\"2b8e-Z1oXIIi6dQF9jf5PfHy3qKMezsQ\"",
    "mtime": "2024-07-30T14:50:27.909Z",
    "size": 11150,
    "path": "../public/_nuxt/wx-2wm.e12b3feb.png"
  },
  "/_nuxt/_...all_.6a5ff9c1.js": {
    "type": "application/javascript",
    "etag": "\"1d4-rr4R3LsnEYOBflS9AXUicV8fKv4\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 468,
    "path": "../public/_nuxt/_...all_.6a5ff9c1.js"
  },
  "/_nuxt/_...all_.7fbd4320.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e3-tiUb+1MoEUL6JS/pgOrFiilPFsc\"",
    "mtime": "2024-07-30T14:50:27.910Z",
    "size": 2019,
    "path": "../public/_nuxt/_...all_.7fbd4320.css"
  },
  "/_nuxt/_...all_.f68e1a62.js": {
    "type": "application/javascript",
    "etag": "\"184b-efK7mz1teD2JxtC71Ssx2tvRcq4\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 6219,
    "path": "../public/_nuxt/_...all_.f68e1a62.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/_specialist_.4e9362dc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"669-ZKz312yJ2rxMdTrP4aTbQ4CX3SQ\"",
    "mtime": "2024-07-30T14:50:27.913Z",
    "size": 1641,
    "path": "../public/_nuxt/_specialist_.4e9362dc.css"
  },
  "/_nuxt/_specialist_.6ed0962d.js": {
    "type": "application/javascript",
    "etag": "\"de0-hYbGATJ0Br1fvD/T8X1fg+tIClM\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 3552,
    "path": "../public/_nuxt/_specialist_.6ed0962d.js"
  },
  "/_nuxt/_works_.367a32f9.js": {
    "type": "application/javascript",
    "etag": "\"1c84-o7GRhekpKPIPpRCXh7xUp9rAueA\"",
    "mtime": "2024-07-30T14:50:27.921Z",
    "size": 7300,
    "path": "../public/_nuxt/_works_.367a32f9.js"
  },
  "/_nuxt/_works_.ea2758f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"624-QQmziTxhE31pAmMxrp0K1wbX2sc\"",
    "mtime": "2024-07-30T14:50:27.914Z",
    "size": 1572,
    "path": "../public/_nuxt/_works_.ea2758f8.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_vTQiVe = () => import('./pageview.mjs');
const _lazy_vGH9ew = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/pageview', handler: _lazy_vTQiVe, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_vGH9ew, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_vGH9ew, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
