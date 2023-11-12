"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = /** @type {HTMLScriptElement} */document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {



/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1699709788742
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0206138d4e413b3c9971")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBc0IsbUJBQU8sQ0FBQyx5SkFBMEUsY0FBYywrQkFBK0I7QUFDckosTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL25vcm1hbGl6ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKlxuICBlc2xpbnQtZGlzYWJsZVxuICBuby1jb25zb2xlLFxuICBmdW5jLW5hbWVzXG4qL1xuXG4vKiogQHR5cGVkZWYge2FueX0gVE9ETyAqL1xuXG52YXIgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybFwiKTtcbnZhciBzcmNCeU1vZHVsZUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBub0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiO1xudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqIEByZXR1cm5zIHsoZnVuY3Rpb24oKTogdm9pZCl8Kn1cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKSB7XG4gIHZhciBzcmMgPSBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXTtcbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID0gLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxhc3RTY3JpcHRUYWcpIHtcbiAgICAgICAgc3JjID0gbGFzdFNjcmlwdFRhZy5zcmM7XG4gICAgICB9XG4gICAgfVxuICAgIHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdID0gc3JjO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTWFwXG4gICAqIEByZXR1cm5zIHtudWxsIHwgc3RyaW5nW119XG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gKGZpbGVNYXApIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZU1hcC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChtYXBSdWxlKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChmaWxlbmFtZSwgXCJcXFxcLmpzJFwiKSwgXCJnXCIpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXVxuICovXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWwsIHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHVybCA9IGVsLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICB9XG4gIGlmICghaXNVcmxSZXF1ZXN0KCAvKiogQHR5cGUge3N0cmluZ30gKi91cmwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChlbC5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBXZSBzZWVtIHRvIGJlIGFib3V0IHRvIHJlcGxhY2UgYSBjc3MgbGluayB0aGF0IGhhc24ndCBsb2FkZWQgeWV0LlxuICAgIC8vIFdlJ3JlIHByb2JhYmx5IGNoYW5naW5nIHRoZSBzYW1lIGZpbGUgbW9yZSB0aGFuIG9uY2UuXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGVsLnZpc2l0ZWQgPSB0cnVlO1xuICB2YXIgbmV3RWwgPSBlbC5jbG9uZU5vZGUoKTtcbiAgbmV3RWwuaXNMb2FkZWQgPSBmYWxzZTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuICBpZiAoZWwubmV4dFNpYmxpbmcpIHtcbiAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbCwgZWwubmV4dFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIGVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7VE9ET30gc3JjXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYpO1xuICBzcmMuc29tZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgZnVuY3Rpb24gKHVybCkge1xuICAgIGlmIChocmVmLmluZGV4T2Yoc3JjKSA+IC0xKSB7XG4gICAgICByZXQgPSB1cmw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NyY11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHVybCA9IGdldFJlbG9hZFVybChlbC5ocmVmLCBzcmMpO1xuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHVybCkge1xuICAgICAgdXBkYXRlQ3NzKGVsLCB1cmwpO1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9hZGVkO1xufVxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cGRhdGVDc3MoZWwpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KHVybCkge1xuICAvLyBBbiBVUkwgaXMgbm90IGFuIHJlcXVlc3QgaWZcblxuICAvLyBJdCBpcyBub3QgaHR0cCBvciBodHRwc1xuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aXFxkK1xcLS5dKjovLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcGFyYW0ge1RPRE99IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG4gIHZhciBnZXRTY3JpcHRTcmMgPSBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKTtcbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzcmMgPSBnZXRTY3JpcHRTcmMob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgdmFyIHJlbG9hZGVkID0gcmVsb2FkU3R5bGUoc3JjKTtcbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZWxvYWRlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBjc3MgcmVsb2FkICVzXCIsIHNyYy5qb2luKFwiIFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKHVwZGF0ZSwgNTApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQ29tcG9uZW50c1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlIFwiLi5cIjpcbiAgICAgICAgYWNjdW11bGF0b3IucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIC8qKiBAdHlwZSB7c3RyaW5nW119ICovW10pLmpvaW4oXCIvXCIpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybFN0cmluZykge1xuICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cbiAgdmFyIHByb3RvY29sID0gdXJsU3RyaW5nLmluZGV4T2YoXCIvL1wiKSAhPT0gLTEgPyB1cmxTdHJpbmcuc3BsaXQoXCIvL1wiKVswXSArIFwiLy9cIiA6IFwiXCI7XG4gIHZhciBjb21wb25lbnRzID0gdXJsU3RyaW5nLnJlcGxhY2UobmV3IFJlZ0V4cChwcm90b2NvbCwgXCJpXCIpLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIHZhciBob3N0ID0gY29tcG9uZW50c1swXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgY29tcG9uZW50c1swXSA9IFwiXCI7XG4gIHZhciBwYXRoID0gbm9ybWFsaXplVXJsKGNvbXBvbmVudHMpO1xuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY5OTcwOTc4ODc0MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAyMDYxMzhkNGU0MTNiM2M5OTcxXCIpIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVVybCIsInJlcXVpcmUiLCJzcmNCeU1vZHVsZUlkIiwiT2JqZWN0IiwiY3JlYXRlIiwibm9Eb2N1bWVudCIsImRvY3VtZW50IiwiZm9yRWFjaCIsIkFycmF5IiwicHJvdG90eXBlIiwiZGVib3VuY2UiLCJmbiIsInRpbWUiLCJ0aW1lb3V0Iiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkNhbGwiLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJub29wIiwiZ2V0Q3VycmVudFNjcmlwdFVybCIsIm1vZHVsZUlkIiwic3JjIiwiY3VycmVudFNjcmlwdCIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxhc3RTY3JpcHRUYWciLCJsZW5ndGgiLCJmaWxlTWFwIiwic3BsaXRSZXN1bHQiLCJzcGxpdCIsImZpbGVuYW1lIiwicmVwbGFjZSIsIm1hcCIsIm1hcFJ1bGUiLCJyZWciLCJSZWdFeHAiLCJjb25jYXQiLCJ1cGRhdGVDc3MiLCJlbCIsInVybCIsImhyZWYiLCJpc1VybFJlcXVlc3QiLCJpc0xvYWRlZCIsImluZGV4T2YiLCJ2aXNpdGVkIiwibmV3RWwiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiRGF0ZSIsIm5vdyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJnZXRSZWxvYWRVcmwiLCJyZXQiLCJzb21lIiwicmVsb2FkU3R5bGUiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2FkZWQiLCJjYWxsIiwicmVsb2FkQWxsIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsImdldFNjcmlwdFNyYyIsInVwZGF0ZSIsInJlbG9hZGVkIiwibG9jYWxzIiwiam9pbiIsInBhdGhDb21wb25lbnRzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwicG9wIiwicHVzaCIsInVybFN0cmluZyIsInRyaW0iLCJwcm90b2NvbCIsImNvbXBvbmVudHMiLCJob3N0IiwidG9Mb3dlckNhc2UiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==