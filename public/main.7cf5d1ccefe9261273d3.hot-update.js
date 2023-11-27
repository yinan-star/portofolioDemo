self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
// 管理网页中的特定页面的动画、元素和交互效果


class Page {
  // 果你想在一个文件中定义一些东西并在另一个文件中使用它，你需要将这些内容导出并在其他文件中导入
  constructor({
    // 构造函数在实例化时会为对象设置初始属性或状态。构造函数定义了对象在创建时应该具备的特征。在创建类的实例后，可以访问和操作这些属性，还可以调用与该类相关联的方法。
    element,
    elements,
    id
  }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements
    };
    // selector用来存储传入这两个属性的引用，用来存储对页面元素的引用。element可能是一个页面的元素，elements可能是元素集合
    // ...element是展开运算符，用于快速复制对象或合并对象属性到一个新的对象中。创建了一个新的对象，该对象包含了 elements 中的所有属性

    this.id = id;
  }
  create() {
    // create方法是使用 querySelector进行页面的元素选择和操作
    this.element = document.querySelector(this.selector);
    // 就是先调用上面的构造函数，将页面的element的值存到thi.selector的容器里，然后在执行这个create函数，获取到当前被选择器所指定的元素。querySelctor这个方法不会选择所有匹配的元素，而只会返回第一个匹配的元素。
    this.elements = {};
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList) {
        this.elements[key] = entry;
        // 将属性值即页面元素存储在elements对象中并以他们的属性名命名
      } else {
        this.elements[key] = document.querySelectorAll(entry);
        // 无论是直接的页面元素（<div>、<p>、<span>）还是选择器字符串（类名、ID、标签名）都存在elements里，好用做后续操作访问
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
      // entry:每个属性的值，也就是属性所对应的内容;key:属性的名称。优点按照属性名（表示元素类型或特征）来访问对应的元素或元素集合
      // 每个属性的名称表示了一组元素的类型或特征（如 animationTitles、animationParagraphs 等），而对应的属性值是用这些选择器选择到的元素或元素集合。
    });
    // entry是当前元素,foreach用不了换成了lowcash/each来遍历
  }

  // 开始做动画了～⬇️

  show() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.element, {
      autoAlpha: 0,
      delay: 5
    });
  }
  hide() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.element, {
      autoAlpha: 0
    });
  }
}

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");





class App {
  constructor() {
    // 召唤
    this.createContent();
    this.createPages();
    this.addLinkListeners();
  }
  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_1__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_2__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_3__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"]()
    };
    this.page = this.pages[this.template];
    // 你在哪个页面就渲染了哪个页面，data0tempalte它使得你可以在 HTML 元素中存储数据，然后通过 JavaScript 来读取和使用这些数据，
    this.page.create();
    this.page.show();
  }
  addLinkListeners() {
    const links = document.querySelectorAll('a');
    // 选择所有链接，links是数组

    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(links, link => {
      link.onclick = event => {
        event.preventDefault();
        // 阻止链接默认行为，打印下面的对象
        console.log(event);
      };
    });
  }
}
new App();

/***/ }),

/***/ "./app/pages/About/About.js":
/*!**********************************!*\
  !*** ./app/pages/About/About.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class About extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'about',
      element: '.about'
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }
}

/***/ }),

/***/ "./app/pages/Collections/Collections.js":
/*!**********************************************!*\
  !*** ./app/pages/Collections/Collections.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collections)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Collections extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'collections',
      element: '.collections'
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }
}

/***/ }),

/***/ "./app/pages/Detail/Detail.js":
/*!************************************!*\
  !*** ./app/pages/Detail/Detail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Detail)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Detail extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'detail',
      element: '.detail'
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }
}

/***/ }),

/***/ "./app/pages/Home/Home.js":
/*!********************************!*\
  !*** ./app/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Home extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        link: '.home__link',
        navigation: document.querySelector('.navigation')
      }
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }

  create() {
    super.create();
    this.elements.link.addEventListener('click', _ => console.log('oh,you clicked me'));
  }
}

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */

var _win,
  _doc,
  _docElement,
  _pluginInitted,
  _tempDiv,
  _tempDivStyler,
  _recentSetterPlugin,
  _reverting,
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _transformProps = {},
  _RAD2DEG = 180 / Math.PI,
  _DEG2RAD = Math.PI / 180,
  _atan2 = Math.atan2,
  _bigNum = 1e8,
  _capsExp = /([A-Z])/g,
  _horizontalExp = /(left|right|width|margin|padding|x)/i,
  _complexExp = /[\s,\(]\S/,
  _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
  _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
  _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
  //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
  _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
  _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
  _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
  _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
  _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
  _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
  _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
  _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
  _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
  _transformProp = "transform",
  _transformOriginProp = _transformProp + "Origin",
  _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target,
      style = target.style;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function (a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
      } else {
        return _propertyAliases.transform.split(",").forEach(function (p) {
          return _saveStyle.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  },
  _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  },
  _revertStyle = function _revertStyle() {
    var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;
    for (i = 0; i < props.length; i += 3) {
      // stored like this: property, isNotCSS, value
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
      }
    }
  },
  _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
      target: target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

    properties && properties.split(",").forEach(function (p) {
      return saver.save(p);
    });
    return saver;
  },
  _supports3D,
  _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
  },
  _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
  },
  _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
  _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
      s = e.style,
      i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {}
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
  _initCore = function _initCore() {
    if (_windowExists() && window.document) {
      _win = window;
      _doc = _win.document;
      _docElement = _doc.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

      _supports3D = !!_checkPropPrefix("perspective");
      _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
      _pluginInitted = 1;
    }
  },
  _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original

        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  },
  _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
  _getBBox = function _getBBox(target) {
    var bounds;
    try {
      bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
  _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
  //reports if the element is an SVG on which getBBox() actually works
  _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
      }
    }
  },
  _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  },
  _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  _nonStandardLayouts = {
    grid: 1,
    flex: 1
  },
  //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
  _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
      style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc || !parent.appendChild) {
      parent = _doc.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
      return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
        cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
  _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
  _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
      // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
      var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
      }
    }

    var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings

    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().

    start = a[0];
    end = a[1];
    startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
    endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            //if something like "perspective:300" is passed in and we must add a unit to the end
            endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

    return pt;
  },
  _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      //the user provided them in the wrong order, so flip them
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
  _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.

          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  },
  // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
  _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  },
  /*
   * --------------------------------------------------------------------------------------
   * TRANSFORMS
   * --------------------------------------------------------------------------------------
   */
  _identity2DMatrix = [1, 0, 0, 1, 0, 0],
  _rotationalProperties = {},
  _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
  _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
  },
  _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
      //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
        addedToDOM = 1; //flag

        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
  _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
  _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      // accommodate independent transforms by combining them into normal ones.
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
      }

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0]; //a11

      b = matrix[1]; //a21

      c = matrix[2]; //a31

      d = matrix[3]; //a41

      x = a12 = matrix[4];
      y = a22 = matrix[5]; //2D matrix

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        } //3D matrix
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG; //rotationX

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        } //rotationY

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        } //rotationZ

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
        scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
    cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
    cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
    cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
    cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
  _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
  //for handling transformOrigin values, stripping out the 3rd dimension
  _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
  _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  },
  _zeroDeg = "0deg",
  _zeroPx = "0px",
  _endParenthesis = ") ",
  _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
  _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
      a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
      a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
      a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
      temp = target.getBBox();
      tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
      ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
  },
  _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  },
  _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  },
  _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
        startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
        endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
    r = "Right",
    b = "Bottom",
    l = "Left",
    props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });
  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
      style = target.style,
      startAt = tween.vars.startAt,
      startValue,
      endValue,
      endNum,
      startNum,
      type,
      specialProp,
      p,
      startUnit,
      endUnit,
      relative,
      isTransformRelated,
      transformPropTween,
      cache,
      smooth,
      hasPriority,
      inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;
        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style.visibility);
            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }
    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;
(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });
  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
  _suppressOverwrites,
  _reverting,
  _context,
  _bigNum = 1e8,
  _tinyNum = 1 / _bigNum,
  _2PI = Math.PI * 2,
  _HALF_PI = _2PI / 4,
  _gsID = 0,
  _sqrt = Math.sqrt,
  _cos = Math.cos,
  _sin = Math.sin,
  _isString = function _isString(value) {
    return typeof value === "string";
  },
  _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
  _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
  _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
  _isObject = function _isObject(value) {
    return typeof value === "object";
  },
  _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
  _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
  // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
  _isArray = Array.isArray,
  _strictNumExp = /(?:-?\.?\d|\.)+/gi,
  //only numbers (including negatives and decimals) but NOT relative values.
  _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
  _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
  _relExp = /[+-]=-?[.\d]+/,
  _delimitedValueExp = /[^,'"\[\]\s]+/gi,
  // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
  _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  _globalTimeline,
  _win,
  _coreInitted,
  _doc,
  _globals = {},
  _installScope = {},
  _coreReady,
  _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
  _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
  _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
  _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
  _emptyFunc = function _emptyFunc() {
    return 0;
  },
  _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  },
  _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  },
  _revertConfig = {
    suppressEvents: true
  },
  _reservedProps = {},
  _lazyTweens = [],
  _lazyLookup = {},
  _lastRenderedFrame,
  _plugins = {},
  _effects = {},
  _nextGCFrame = 30,
  _harnessPlugins = [],
  _callbackNames = "",
  _harness = function _harness(targets) {
    var target = targets[0],
      harnessPlugin,
      i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {}
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  },
  _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
  _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
  _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
  //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
  _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
  _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
  // increased precision mostly for timing values.
  _parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  },
  _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length,
      i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}
    return i < l;
  },
  _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
  _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
  },
  _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
  _passThrough = function _passThrough(p) {
    return p;
  },
  _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }
    return obj;
  },
  _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function (obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  },
  _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  },
  _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  },
  _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
      p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  },
  _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  },
  _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
      match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {}
    return i < 0;
  },
  _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp],
      t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
  _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev,
      next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
  },
  _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  },
  _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  },
  _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  },
  _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  },
  _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
  _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
  // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
  _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
  _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
  _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
  _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }

    return animation;
  },
  /*
  _totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
  	let cycleDuration = duration + repeatDelay,
  		time = _round(clampedTotalTime % cycleDuration);
  	if (time > duration) {
  		time = duration;
  	}
  	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
  },
  */
  _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
      // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
      t = _parentToChildTotalTime(timeline.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      //in case any of the ancestors had completed but should now be enabled...
      if (timeline._dur < timeline.duration()) {
        t = timeline;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

          t = t._dp;
        }
      }
      timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
  },
  _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

    return timeline;
  },
  _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
  _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  },
  _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
  // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
  _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  },
  _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
      repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;
    if (repeatDelay && tween._repeat) {
      // in case there's a zero-duration tween that has a repeat with a repeatDelay
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        // if iteration changed
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

      suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
  _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  },
  _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
  _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
  _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
  _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
      i,
      offset,
      isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  },
  _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
      irVars = vars;
      parent = timeline;
      while (parent && !("immediateRender" in irVars)) {
        // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }

    return new Tween(params[0], vars, params[varsIndex + 1]);
  },
  _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
  _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
  getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  },
  // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
  clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
  _slice = [].slice,
  _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
  _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function (value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
  //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
  toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
  selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  },
  shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
  // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
  //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
  distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
        each: v
      },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
      ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function (i, target, a) {
      var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0; //unit

        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
  },
  _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

    return function (raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
  },
  snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
      radius,
      is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
  random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
  pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
  unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
  normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
  _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
  wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
  wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
      total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
  _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  },
  mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
      outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
  interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };
    if (!func) {
      var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
        }

        l--;
        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  },
  _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  },
  _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  },
  _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
  _quickTween,
  _registerPluginQueue = [],
  _createPlugin = function _createPlugin(config) {
    if (_windowExists() && config) {
      // edge case: some build tools may pass in a null/undefined value
      config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

      var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
          this._props = [];
        } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        },
        statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
      _wake();
      if (config !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods

        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods

        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
      }

      _addGlobal(name, Plugin);
      config.register && config.register(gsap, Plugin, PropTween);
    } else {
      config && _registerPluginQueue.push(config);
    }
  },
  /*
   * --------------------------------------------------------------------------------------
   * COLORS
   * --------------------------------------------------------------------------------------
   */
  _255 = 255,
  _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
  // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
  // let ctx = _doc.createElement("canvas").getContext("2d");
  // _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
  _hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
  splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          //for shorthand like #9F0 or #9F0F (could have alpha)
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          // hex with alpha, like #fd5e53ff
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1); //cast as number

          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          //if relative values are found, just return the raw strings with the relative prefixes in place.
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
  _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [],
      c = [],
      i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
  _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  },
  _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
      p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }(),
  _hslExp = /hsl[a]?\(/,
  _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
      toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

      return true;
    }
  },
  /*
   * --------------------------------------------------------------------------------------
   * TICKER
   * --------------------------------------------------------------------------------------
   */
  _tickerActive,
  _ticker = function () {
    var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
          frame = ++_self.frame;
          _delta = time - _self.time * 1000;
          _self.time = time = time / 1000;
          _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
          dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

        if (dispatch) {
          for (_i = 0; _i < _listeners.length; _i++) {
            // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
            _listeners[_i](time, _delta, frame, v);
          }
        }
      };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id && _self.sleep();
          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function (t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
  _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
  //also ensures the core classes are initialized.

  /*
  * -------------------------------------------------
  * EASING
  * -------------------------------------------------
  */
  _easeMap = {},
  _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
  _quotesExp = /["']/g,
  _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  },
  _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
  _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("),
      ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
  _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
  // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
  _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
      ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  },
  _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
  _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
      },
      lowercaseName;
    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  },
  _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
  _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
      p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
      },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };
    return ease;
  },
  _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
      },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };
    return ease;
  }; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };

_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function (n, c) {
  var n1 = 1 / c,
    n2 = 2 * n1,
    n3 = 2.5 * n1,
    easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps,
      p2 = steps + (immediateStart ? 0 : 1),
      p3 = immediateStart ? 1 : 0,
      max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */

var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context) {
      this._ctx = _context;
      _context.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}
    }

    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.

    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();
        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }
    var prevIsReverting = _reverting;
    _reverting = config;
    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }
    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
      time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
      start = this._start,
      rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
        _resolve = function _resolve() {
          var _then = self.then;
          self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation;
}();
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */

var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);
  function Timeline(vars, position) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
      tDur = this._dirty ? this.totalDuration() : this._tDur,
      dur = this._dur,
      tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
      // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
      crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
      time,
      child,
      next,
      iteration,
      cycleDuration,
      prevPaused,
      pauseTween,
      timeScale,
      prevStart,
      prevIteration,
      yoyo,
      isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */

        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
            doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }
          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.

          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber(position) || (position = _parsePosition(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }
    var a = [],
      child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
      i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
      i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
      parsedTargets = toArray(targets),
      child = this._first,
      isGlobalTime = _isNumber(onlyActive),
      // a number is interpreted as a global time. If the animation spans
      children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this,
      endTime = _parsePosition(tl, position),
      _vars = vars,
      startAt = _vars.startAt,
      _onStart = _vars.onStart,
      onStartParams = _vars.onStartParams,
      immediateRender = _vars.immediateRender,
      initted,
      tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
        }
      }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first,
      labels = this.labels,
      p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first,
      next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
      self = this,
      child = self._last,
      prevStart = _bigNum,
      prev,
      start,
      parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
  };
  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }
        child || _ticker.sleep();
      }
    }
  };
  return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings

    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }

    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

    return pt;
  },
  _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          // to avoid isNaN, like if someone passes in a value like "!= whatever"
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        // fun fact: any number multiplied by "" is evaluated as the number 0!
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
  //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
  _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {},
      p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  },
  _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  },
  _overwritingTween,
  //store a reference temporarily so we can avoid overwriting itself.
  _forceAllPropTweens,
  _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

    if (!tl || keyframes && !vars.stagger) {
      //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
        // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

        tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
            time && (tween._zTime = time);
            return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
          }
        }
      } else if (runBackwards && dur) {
        //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        if (!prevStartAt) {
          time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender: immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

          tween._startAt._sat = tween; // used in globalTime()

          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }

    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
  },
  _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          // it's a plugin, so find the nested PropTween
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
            pt = pt._next;
          }
        }
        if (!pt) {
          // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
          // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
          _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
  },
  _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  },
  // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
  _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

      obj.forEach(function (value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  },
  _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
  _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */

var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);
  function Tween(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
      duration = _this3$vars.duration,
      delay = _this3$vars.delay,
      immediateRender = _this3$vars.immediateRender,
      stagger = _this3$vars.stagger,
      overwrite = _this3$vars.overwrite,
      keyframes = _this3$vars.keyframes,
      defaults = _this3$vars.defaults,
      scrollTrigger = _this3$vars.scrollTrigger,
      yoyoEase = _this3$vars.yoyoEase,
      parent = vars.parent || _globalTimeline,
      parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
      tl,
      i,
      copy,
      l,
      p,
      curTarget,
      staggerFunc,
      staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
          a,
          kf,
          v;
        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};
          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween.prototype;
  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
      tDur = this._tDur,
      dur = this._dur,
      isNegative = totalTime < 0,
      tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
      time,
      pt,
      iteration,
      cycleDuration,
      prevIteration,
      isYoyo,
      ratio,
      timeline,
      yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;
      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }
        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }
        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}

    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }
    var parsedTargets = this._targets,
      killingTargets = targets ? toArray(targets) : parsedTargets,
      propTweenLookup = this._ptLookup,
      firstPT = this._pt,
      overwrittenProps,
      curLookup,
      curOverwriteProps,
      props,
      p,
      pt,
      i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function (name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };
  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };
  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };
  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.

_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
      params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */

var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
  _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
  _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
  _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
  _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
  _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  },
  _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
  _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
      s = "";
    if (!ratio && data.b) {
      //b = beginning string
      s = data.b;
    } else if (ratio === 1 && data.e) {
      //e = ending string
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

        pt = pt._next;
      }
      s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }

    data.set(data.t, data.p, s, data);
  },
  _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
  _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
      next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
  _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
      hasNonDependentRemaining,
      next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  },
  _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
  _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)

var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };
  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [],
  _listeners = {},
  _emptyArray = [],
  _lastMediaTime = 0,
  _contextID = 0,
  _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function (f) {
      return f();
    });
  },
  _onMediaChange = function _onMediaChange() {
    var time = Date.now(),
      matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function (c) {
        var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function (c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }
  var _proto5 = Context.prototype;
  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }
    var self = this,
      f = function f() {
        var prev = _context,
          prevSelector = self.selector,
          result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
    self.last = f;
    return name === _isFunction ? f(self) : name ? self[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;
    if (revert) {
      var tweens = this.getTweens();
      this.data.forEach(function (t) {
        // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
        if (t.data === "isFlip") {
          t.revert();
          t.getChildren(true, true, false).forEach(function (tween) {
            return tweens.splice(tweens.indexOf(tween), 1);
          });
        }
      }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort

      tweens.map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (a, b) {
        return b.g - a.g || -Infinity;
      }).forEach(function (o) {
        return o.t.revert(revert);
      }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

      this.data.forEach(function (e) {
        return !(e instanceof Tween) && e.revert && e.revert(revert);
      });
      this._r.forEach(function (f) {
        return f(revert, _this4);
      });
      this.isReverted = true;
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia) {
      var i = _media.length;
      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };
  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };
  return Context;
}();
var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
  }
  var _proto6 = MatchMedia.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
      cond = context.conditions = {},
      mq,
      p,
      active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context);
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
      format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
        l = setters.length;
      return function (value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property],
      cache = _getCache(target),
      p = cache.harness && (cache.harness.aliases || {})[property] || property,
      // in case it's an alias, like "rotate" for "rotation".
      setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;
    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
      func = function func(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
      effect = _ref3.effect,
      plugins = _ref3.plugins,
      defaults = _ref3.defaults,
      extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars),
      child,
      next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
        found,
        p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
      i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);
        toAdd._ctx = _context;
      }
      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  },
  _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
      p,
      i,
      pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            // is a plugin
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
  _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function (name) {
              return temp[name] = 1;
            }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.

            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween, vars);
        };
      }
    };
  }; //register core plugins

var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.2";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
  Power1 = _easeMap.Power1,
  Power2 = _easeMap.Power2,
  Power3 = _easeMap.Power3,
  Power4 = _easeMap.Power4,
  Linear = _easeMap.Linear,
  Quad = _easeMap.Quad,
  Cubic = _easeMap.Cubic,
  Quart = _easeMap.Quart,
  Quint = _easeMap.Quint,
  Strong = _easeMap.Strong,
  Elastic = _easeMap.Elastic,
  Back = _easeMap.Back,
  SteppedEase = _easeMap.SteppedEase,
  Bounce = _easeMap.Bounce,
  Sine = _easeMap.Sine,
  Expo = _easeMap.Expo,
  Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
  // to protect from tree shaking
  TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
module.exports = arrayEach;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
  isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
  isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
  isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
    isArg = !isArr && isArguments(value),
    isBuff = !isArr && !isArg && isBuffer(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
  createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
  keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
  getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
  objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
  nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}
module.exports = castFunction;

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
module.exports = createBaseEach;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
module.exports = nodeUtil;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");

/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
  baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
  castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}
module.exports = forEach;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
  isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
  stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
  baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
  nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
  baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
  isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67c1d48d86f3586326e2")
/******/ })();
/******/ 
/******/ /* webpack/runtime/node module decorator */
/******/ (() => {
/******/ 	__webpack_require__.nmd = (module) => {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43Y2Y1ZDFjY2VmZTkyNjEyNzNkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QjtBQUVPO0FBRWYsTUFBTUUsSUFBSTtFQUN2QjtFQUNBQyxXQUFXQSxDQUFDO0lBQUM7SUFDWEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDO0VBQ0YsQ0FBQyxFQUNEO0lBQ0UsSUFBSSxDQUFDQyxRQUFRLEdBQUNILE9BQU87SUFDckIsSUFBSSxDQUFDSSxnQkFBZ0IsR0FBQztNQUFDLEdBQUdIO0lBQVEsQ0FBQztJQUNuQztJQUNBOztJQUVBLElBQUksQ0FBQ0MsRUFBRSxHQUFDQSxFQUFFO0VBQ1o7RUFFQUcsTUFBTUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxJQUFJLENBQUNMLE9BQU8sR0FBQ00sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUM7SUFDbEQ7SUFDQSxJQUFJLENBQUNGLFFBQVEsR0FBQyxDQUFDLENBQUM7SUFFaEJKLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxnQkFBZ0IsRUFBRSxDQUFDSSxLQUFLLEVBQUNDLEdBQUcsS0FBSztNQUN6QyxJQUNFRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBVyxJQUNuQ0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQVEsRUFDaEM7UUFDQSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdELEtBQUs7UUFDMUI7TUFDRixDQUFDLE1BQ0k7UUFDSCxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUNMLEtBQUssQ0FBQztRQUN2RDtRQUNFLElBQUksSUFBSSxDQUFDUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ25DLElBQUksQ0FBQ2IsUUFBUSxDQUFDUSxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQzNCLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUN4QyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUM7UUFDcEQ7TUFDRjtNQUNBO01BQ0E7SUFDRixDQUFDLENBQUM7SUFDRjtFQUNGOztFQUVGOztFQUVFTyxJQUFJQSxDQUFBLEVBQUU7SUFDSm5CLDRDQUFJLENBQUNvQixJQUFJLENBQUMsSUFBSSxDQUFDaEIsT0FBTyxFQUFDO01BQ3JCaUIsU0FBUyxFQUFDLENBQUM7TUFDWEMsS0FBSyxFQUFDO0lBQ1IsQ0FBQyxDQUFDO0VBR0o7RUFFQUMsSUFBSUEsQ0FBQSxFQUFFO0lBQ0p2Qiw0Q0FBSSxDQUFDd0IsRUFBRSxDQUFDLElBQUksQ0FBQ3BCLE9BQU8sRUFBQztNQUNuQmlCLFNBQVMsRUFBQztJQUNaLENBQUMsQ0FBQztFQUVKO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FK0I7QUFFUztBQUNrQjtBQUNmO0FBQ047QUFDckMsTUFBTVEsR0FBRztFQUNQMUIsV0FBV0EsQ0FBQSxFQUFFO0lBQ1g7SUFDQSxJQUFJLENBQUMyQixhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRWxCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUV6QjtFQUVBRixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNHLE9BQU8sR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDdUIsUUFBUSxHQUFHLElBQUksQ0FBQ0QsT0FBTyxDQUFDRSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztFQUM5RDs7RUFHQUosV0FBV0EsQ0FBQSxFQUFFO0lBQ1g7SUFDRSxJQUFJLENBQUNLLEtBQUssR0FBQztNQUNUQyxLQUFLLEVBQUMsSUFBSVosMERBQUssQ0FBQyxDQUFDO01BQ2pCYSxXQUFXLEVBQUMsSUFBSVosc0VBQVcsQ0FBQyxDQUFDO01BQzdCYSxNQUFNLEVBQUMsSUFBSVosNERBQU0sQ0FBQyxDQUFDO01BQ25CYSxJQUFJLEVBQUMsSUFBSVosd0RBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBSSxDQUFDYSxJQUFJLEdBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDbkM7SUFDQSxJQUFJLENBQUNPLElBQUksQ0FBQ2hDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ2dDLElBQUksQ0FBQ3RCLElBQUksQ0FBQyxDQUFDO0VBQ3BCO0VBRUFhLGdCQUFnQkEsQ0FBQSxFQUFFO0lBQ2hCLE1BQU1VLEtBQUssR0FBRWhDLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBQzNDOztJQUVBaEIsa0RBQUksQ0FBQ3lDLEtBQUssRUFBQ0MsSUFBSSxJQUFHO01BQ2hCQSxJQUFJLENBQUNDLE9BQU8sR0FBR0MsS0FBSyxJQUFHO1FBQ3JCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUM7TUFDcEIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJaEIsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHNCO0FBRWhCLE1BQU1KLEtBQUssU0FBU3ZCLG9EQUFJO0VBQ3JDQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSkcsRUFBRSxFQUFDLE9BQU87TUFFVkYsT0FBTyxFQUFDO0lBQ1YsQ0FBQyxDQUFDO0lBQ0Y7RUFFRjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDWitCO0FBRWhCLE1BQU1zQixXQUFXLFNBQVN4QixvREFBSTtFQUMzQ0MsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDO01BQ0pHLEVBQUUsRUFBQyxhQUFhO01BQ2hCRixPQUFPLEVBQUM7SUFDVixDQUFDLENBQUM7SUFDRjtFQUNGO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWK0I7QUFFaEIsTUFBTXVCLE1BQU0sU0FBU3pCLG9EQUFJO0VBQ3RDQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSkcsRUFBRSxFQUFDLFFBQVE7TUFDWEYsT0FBTyxFQUFDO0lBQ1YsQ0FBQyxDQUFDO0lBQ0Y7RUFFRjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDWCtCO0FBRWhCLE1BQU13QixJQUFJLFNBQVMxQixvREFBSTtFQUNwQ0MsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDO01BQ0pHLEVBQUUsRUFBQyxNQUFNO01BQ1RGLE9BQU8sRUFBQyxPQUFPO01BQ2ZDLFFBQVEsRUFBQztRQUNQc0MsSUFBSSxFQUFDLGFBQWE7UUFDbEJNLFVBQVUsRUFBQ3ZDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWE7TUFDakQ7SUFDRixDQUFDLENBQUM7SUFDRjtFQUVGOztFQUVBRixNQUFNQSxDQUFBLEVBQUc7SUFDUCxLQUFLLENBQUNBLE1BQU0sQ0FBQyxDQUFDO0lBRWQsSUFBSSxDQUFDSixRQUFRLENBQUNzQyxJQUFJLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBQ0MsQ0FBQyxJQUFJSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQ2xGO0FBSUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUV3QjtBQUV4QixJQUFJK0IsSUFBSTtFQUNKQyxJQUFJO0VBQ0pDLFdBQVc7RUFDWEMsY0FBYztFQUNkQyxRQUFRO0VBQ1JDLGNBQWM7RUFDZEMsbUJBQW1CO0VBQ25CQyxVQUFVO0VBQ1ZDLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFBLEVBQUc7SUFDM0MsT0FBTyxPQUFPekUsTUFBTSxLQUFLLFdBQVc7RUFDdEMsQ0FBQztFQUNHMEUsZUFBZSxHQUFHLENBQUMsQ0FBQztFQUNwQkMsUUFBUSxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxFQUFFO0VBQ3hCQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0MsRUFBRSxHQUFHLEdBQUc7RUFDeEJFLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxLQUFLO0VBQ25CQyxPQUFPLEdBQUcsR0FBRztFQUNiQyxRQUFRLEdBQUcsVUFBVTtFQUNyQkMsY0FBYyxHQUFHLHNDQUFzQztFQUN2REMsV0FBVyxHQUFHLFdBQVc7RUFDekJDLGdCQUFnQixHQUFHO0lBQ3JCOUUsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQitFLEtBQUssRUFBRSxlQUFlO0lBQ3RCQyxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0dDLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDQyxLQUFLLEVBQUVDLElBQUksRUFBRTtJQUN4RCxPQUFPQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxDQUFDLEVBQUVGLElBQUksQ0FBQ0csQ0FBQyxFQUFFakIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLENBQUNKLElBQUksQ0FBQ0ssQ0FBQyxHQUFHTCxJQUFJLENBQUNNLENBQUMsR0FBR1AsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBR0MsSUFBSSxDQUFDTyxDQUFDLEVBQUVQLElBQUksQ0FBQztFQUN2RyxDQUFDO0VBQ0dRLGtCQUFrQixHQUFHLFNBQVNBLGtCQUFrQkEsQ0FBQ1QsS0FBSyxFQUFFQyxJQUFJLEVBQUU7SUFDaEUsT0FBT0EsSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ0UsQ0FBQyxFQUFFRixJQUFJLENBQUNHLENBQUMsRUFBRUosS0FBSyxLQUFLLENBQUMsR0FBR0MsSUFBSSxDQUFDUyxDQUFDLEdBQUd2QixJQUFJLENBQUNrQixLQUFLLENBQUMsQ0FBQ0osSUFBSSxDQUFDSyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sQ0FBQyxHQUFHUCxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHQyxJQUFJLENBQUNPLENBQUMsRUFBRVAsSUFBSSxDQUFDO0VBQzlILENBQUM7RUFDR1UsMkJBQTJCLEdBQUcsU0FBU0EsMkJBQTJCQSxDQUFDWCxLQUFLLEVBQUVDLElBQUksRUFBRTtJQUNsRixPQUFPQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxDQUFDLEVBQUVGLElBQUksQ0FBQ0csQ0FBQyxFQUFFSixLQUFLLEdBQUdiLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDSixJQUFJLENBQUNLLENBQUMsR0FBR0wsSUFBSSxDQUFDTSxDQUFDLEdBQUdQLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUdDLElBQUksQ0FBQ08sQ0FBQyxHQUFHUCxJQUFJLENBQUNXLENBQUMsRUFBRVgsSUFBSSxDQUFDO0VBQ3hILENBQUM7RUFDRztFQUNKWSxxQkFBcUIsR0FBRyxTQUFTQSxxQkFBcUJBLENBQUNiLEtBQUssRUFBRUMsSUFBSSxFQUFFO0lBQ2xFLElBQUlhLEtBQUssR0FBR2IsSUFBSSxDQUFDSyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sQ0FBQyxHQUFHUCxLQUFLO0lBQ25DQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxDQUFDLEVBQUVGLElBQUksQ0FBQ0csQ0FBQyxFQUFFLENBQUMsRUFBRVUsS0FBSyxJQUFJQSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdiLElBQUksQ0FBQ08sQ0FBQyxFQUFFUCxJQUFJLENBQUM7RUFDN0UsQ0FBQztFQUNHYyx1QkFBdUIsR0FBRyxTQUFTQSx1QkFBdUJBLENBQUNmLEtBQUssRUFBRUMsSUFBSSxFQUFFO0lBQzFFLE9BQU9BLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUNFLENBQUMsRUFBRUYsSUFBSSxDQUFDRyxDQUFDLEVBQUVKLEtBQUssR0FBR0MsSUFBSSxDQUFDUyxDQUFDLEdBQUdULElBQUksQ0FBQ1csQ0FBQyxFQUFFWCxJQUFJLENBQUM7RUFDaEUsQ0FBQztFQUNHZSxnQ0FBZ0MsR0FBRyxTQUFTQSxnQ0FBZ0NBLENBQUNoQixLQUFLLEVBQUVDLElBQUksRUFBRTtJQUM1RixPQUFPQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxDQUFDLEVBQUVGLElBQUksQ0FBQ0csQ0FBQyxFQUFFSixLQUFLLEtBQUssQ0FBQyxHQUFHQyxJQUFJLENBQUNXLENBQUMsR0FBR1gsSUFBSSxDQUFDUyxDQUFDLEVBQUVULElBQUksQ0FBQztFQUN0RSxDQUFDO0VBQ0dnQixlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ0MsTUFBTSxFQUFFQyxRQUFRLEVBQUVMLEtBQUssRUFBRTtJQUN0RSxPQUFPSSxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsUUFBUSxDQUFDLEdBQUdMLEtBQUs7RUFDdkMsQ0FBQztFQUNHTyxjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQ0gsTUFBTSxFQUFFQyxRQUFRLEVBQUVMLEtBQUssRUFBRTtJQUNwRSxPQUFPSSxNQUFNLENBQUNFLEtBQUssQ0FBQ0UsV0FBVyxDQUFDSCxRQUFRLEVBQUVMLEtBQUssQ0FBQztFQUNsRCxDQUFDO0VBQ0dTLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQ0wsTUFBTSxFQUFFQyxRQUFRLEVBQUVMLEtBQUssRUFBRTtJQUN4RSxPQUFPSSxNQUFNLENBQUNNLEtBQUssQ0FBQ0wsUUFBUSxDQUFDLEdBQUdMLEtBQUs7RUFDdkMsQ0FBQztFQUNHVyxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUVMLEtBQUssRUFBRTtJQUNoRSxPQUFPSSxNQUFNLENBQUNNLEtBQUssQ0FBQ0UsTUFBTSxHQUFHUixNQUFNLENBQUNNLEtBQUssQ0FBQ0csTUFBTSxHQUFHYixLQUFLO0VBQzFELENBQUM7RUFDR2Msc0JBQXNCLEdBQUcsU0FBU0Esc0JBQXNCQSxDQUFDVixNQUFNLEVBQUVDLFFBQVEsRUFBRUwsS0FBSyxFQUFFYixJQUFJLEVBQUVELEtBQUssRUFBRTtJQUNqRyxJQUFJNkIsS0FBSyxHQUFHWCxNQUFNLENBQUNNLEtBQUs7SUFDeEJLLEtBQUssQ0FBQ0gsTUFBTSxHQUFHRyxLQUFLLENBQUNGLE1BQU0sR0FBR2IsS0FBSztJQUNuQ2UsS0FBSyxDQUFDQyxlQUFlLENBQUM5QixLQUFLLEVBQUU2QixLQUFLLENBQUM7RUFDckMsQ0FBQztFQUNHRSwwQkFBMEIsR0FBRyxTQUFTQSwwQkFBMEJBLENBQUNiLE1BQU0sRUFBRUMsUUFBUSxFQUFFTCxLQUFLLEVBQUViLElBQUksRUFBRUQsS0FBSyxFQUFFO0lBQ3pHLElBQUk2QixLQUFLLEdBQUdYLE1BQU0sQ0FBQ00sS0FBSztJQUN4QkssS0FBSyxDQUFDVixRQUFRLENBQUMsR0FBR0wsS0FBSztJQUN2QmUsS0FBSyxDQUFDQyxlQUFlLENBQUM5QixLQUFLLEVBQUU2QixLQUFLLENBQUM7RUFDckMsQ0FBQztFQUNHRyxjQUFjLEdBQUcsV0FBVztFQUM1QkMsb0JBQW9CLEdBQUdELGNBQWMsR0FBRyxRQUFRO0VBQ2hERSxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQ2YsUUFBUSxFQUFFZ0IsUUFBUSxFQUFFO0lBQ3ZELElBQUlDLEtBQUssR0FBRyxJQUFJO0lBRWhCLElBQUlsQixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO01BQ3BCRSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBSztJQUV4QixJQUFJRCxRQUFRLElBQUlsQyxlQUFlLElBQUltQyxLQUFLLEVBQUU7TUFDeEMsSUFBSSxDQUFDaUIsR0FBRyxHQUFHLElBQUksQ0FBQ0EsR0FBRyxJQUFJLENBQUMsQ0FBQztNQUV6QixJQUFJbEIsUUFBUSxLQUFLLFdBQVcsRUFBRTtRQUM1QkEsUUFBUSxHQUFHdkIsZ0JBQWdCLENBQUN1QixRQUFRLENBQUMsSUFBSUEsUUFBUTtRQUNqRCxDQUFDQSxRQUFRLENBQUNtQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUduQixRQUFRLENBQUNvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVQyxDQUFDLEVBQUU7VUFDaEUsT0FBT0wsS0FBSyxDQUFDQyxHQUFHLENBQUNJLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUN4QixNQUFNLEVBQUV1QixDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDSixHQUFHLENBQUNsQixRQUFRLENBQUMsR0FBR0QsTUFBTSxDQUFDTSxLQUFLLENBQUNtQixDQUFDLEdBQUd6QixNQUFNLENBQUNNLEtBQUssQ0FBQ0wsUUFBUSxDQUFDLEdBQUd1QixJQUFJLENBQUN4QixNQUFNLEVBQUVDLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFDOUYsQ0FBQyxNQUFNO1FBQ0wsT0FBT3ZCLGdCQUFnQixDQUFDZ0QsU0FBUyxDQUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVcEMsQ0FBQyxFQUFFO1VBQ2hFLE9BQU84QixVQUFVLENBQUNXLElBQUksQ0FBQ1QsS0FBSyxFQUFFaEMsQ0FBQyxFQUFFK0IsUUFBUSxDQUFDO1FBQzVDLENBQUMsQ0FBQztNQUNKO01BRUEsSUFBSSxJQUFJLENBQUNXLEtBQUssQ0FBQ1IsT0FBTyxDQUFDTixjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDM0M7TUFDRjtNQUVBLElBQUlkLE1BQU0sQ0FBQ00sS0FBSyxDQUFDdUIsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQ0MsSUFBSSxHQUFHOUIsTUFBTSxDQUFDdEYsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQ2tILEtBQUssQ0FBQ0csSUFBSSxDQUFDaEIsb0JBQW9CLEVBQUVFLFFBQVEsRUFBRSxFQUFFLENBQUM7TUFDckQ7TUFFQWhCLFFBQVEsR0FBR2EsY0FBYztJQUMzQjtJQUVBLENBQUNaLEtBQUssSUFBSWUsUUFBUSxLQUFLLElBQUksQ0FBQ1csS0FBSyxDQUFDRyxJQUFJLENBQUM5QixRQUFRLEVBQUVnQixRQUFRLEVBQUVmLEtBQUssQ0FBQ0QsUUFBUSxDQUFDLENBQUM7RUFDN0UsQ0FBQztFQUNHK0IsNEJBQTRCLEdBQUcsU0FBU0EsNEJBQTRCQSxDQUFDOUIsS0FBSyxFQUFFO0lBQzlFLElBQUlBLEtBQUssQ0FBQytCLFNBQVMsRUFBRTtNQUNuQi9CLEtBQUssQ0FBQ2dDLGNBQWMsQ0FBQyxXQUFXLENBQUM7TUFDakNoQyxLQUFLLENBQUNnQyxjQUFjLENBQUMsT0FBTyxDQUFDO01BQzdCaEMsS0FBSyxDQUFDZ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNoQztFQUNGLENBQUM7RUFDR0MsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUEsRUFBRztJQUN6QyxJQUFJUCxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO01BQ2xCNUIsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtNQUNwQkUsS0FBSyxHQUFHRixNQUFNLENBQUNFLEtBQUs7TUFDcEJTLEtBQUssR0FBR1gsTUFBTSxDQUFDTSxLQUFLO01BQ3BCOEIsQ0FBQztNQUNEbEQsQ0FBQztJQUVMLEtBQUtrRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLEtBQUssQ0FBQ25JLE1BQU0sRUFBRTJJLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDcEM7TUFDQVIsS0FBSyxDQUFDUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdwQyxNQUFNLENBQUM0QixLQUFLLENBQUNRLENBQUMsQ0FBQyxDQUFDLEdBQUdSLEtBQUssQ0FBQ1EsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHUixLQUFLLENBQUNRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR2xDLEtBQUssQ0FBQzBCLEtBQUssQ0FBQ1EsQ0FBQyxDQUFDLENBQUMsR0FBR1IsS0FBSyxDQUFDUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdsQyxLQUFLLENBQUNnQyxjQUFjLENBQUNOLEtBQUssQ0FBQ1EsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHVCxLQUFLLENBQUNRLENBQUMsQ0FBQyxHQUFHUixLQUFLLENBQUNRLENBQUMsQ0FBQyxDQUFDRSxPQUFPLENBQUMvRCxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUNnRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BOO0lBRUEsSUFBSSxJQUFJLENBQUNwQixHQUFHLEVBQUU7TUFDWixLQUFLakMsQ0FBQyxJQUFJLElBQUksQ0FBQ2lDLEdBQUcsRUFBRTtRQUNsQlIsS0FBSyxDQUFDekIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDaUMsR0FBRyxDQUFDakMsQ0FBQyxDQUFDO01BQ3hCO01BRUEsSUFBSXlCLEtBQUssQ0FBQ2tCLEdBQUcsRUFBRTtRQUNibEIsS0FBSyxDQUFDQyxlQUFlLENBQUMsQ0FBQztRQUN2QlosTUFBTSxDQUFDd0MsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQ1YsSUFBSSxJQUFJLEVBQUUsQ0FBQztNQUN6RDtNQUVBTSxDQUFDLEdBQUd2RSxVQUFVLENBQUMsQ0FBQztNQUVoQixJQUFJLENBQUMsQ0FBQ3VFLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUNLLE9BQU8sS0FBSyxDQUFDdkMsS0FBSyxDQUFDWSxjQUFjLENBQUMsRUFBRTtRQUNoRGtCLDRCQUE0QixDQUFDOUIsS0FBSyxDQUFDO1FBRW5DUyxLQUFLLENBQUMrQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDckI7SUFDRjtFQUNGLENBQUM7RUFDR0MsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUMzQyxNQUFNLEVBQUU0QyxVQUFVLEVBQUU7SUFDL0QsSUFBSUMsS0FBSyxHQUFHO01BQ1Y3QyxNQUFNLEVBQUVBLE1BQU07TUFDZDRCLEtBQUssRUFBRSxFQUFFO01BQ1RrQixNQUFNLEVBQUVYLFlBQVk7TUFDcEJZLElBQUksRUFBRS9CO0lBQ1IsQ0FBQztJQUNEaEIsTUFBTSxDQUFDTSxLQUFLLElBQUkzRSwrQ0FBSSxDQUFDcUgsSUFBSSxDQUFDQyxRQUFRLENBQUNqRCxNQUFNLENBQUMsQ0FBQyxDQUFDOztJQUU1QzRDLFVBQVUsSUFBSUEsVUFBVSxDQUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVXBDLENBQUMsRUFBRTtNQUN2RCxPQUFPMkQsS0FBSyxDQUFDRSxJQUFJLENBQUM3RCxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBQ0YsT0FBTzJELEtBQUs7RUFDZCxDQUFDO0VBQ0dLLFdBQVc7RUFDWEMsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNDLElBQUksRUFBRUMsRUFBRSxFQUFFO0lBQ3JELElBQUk3RCxDQUFDLEdBQUdqQyxJQUFJLENBQUMrRixlQUFlLEdBQUcvRixJQUFJLENBQUMrRixlQUFlLENBQUMsQ0FBQ0QsRUFBRSxJQUFJLDhCQUE4QixFQUFFZixPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFYyxJQUFJLENBQUMsR0FBRzdGLElBQUksQ0FBQ2dHLGFBQWEsQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQzs7SUFFeEosT0FBTzVELENBQUMsQ0FBQ1UsS0FBSyxHQUFHVixDQUFDLEdBQUdqQyxJQUFJLENBQUNnRyxhQUFhLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUM7RUFDakQsQ0FBQztFQUNHSSxvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUN4RCxNQUFNLEVBQUVDLFFBQVEsRUFBRXdELGtCQUFrQixFQUFFO0lBQzdGLElBQUlDLEVBQUUsR0FBR0MsZ0JBQWdCLENBQUMzRCxNQUFNLENBQUM7SUFDakMsT0FBTzBELEVBQUUsQ0FBQ3pELFFBQVEsQ0FBQyxJQUFJeUQsRUFBRSxDQUFDRSxnQkFBZ0IsQ0FBQzNELFFBQVEsQ0FBQ3FDLE9BQU8sQ0FBQy9ELFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQ2dFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSW1CLEVBQUUsQ0FBQ0UsZ0JBQWdCLENBQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDd0Qsa0JBQWtCLElBQUlELG9CQUFvQixDQUFDeEQsTUFBTSxFQUFFNkQsZ0JBQWdCLENBQUM1RCxRQUFRLENBQUMsSUFBSUEsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ3hPLENBQUM7RUFDRzZELFNBQVMsR0FBRyxvQkFBb0IsQ0FBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDM0N3QyxnQkFBZ0IsR0FBRyxTQUFTQSxnQkFBZ0JBLENBQUM1RCxRQUFRLEVBQUV0SCxPQUFPLEVBQUVvTCxZQUFZLEVBQUU7SUFDaEYsSUFBSXZFLENBQUMsR0FBRzdHLE9BQU8sSUFBSStFLFFBQVE7TUFDdkIwQixDQUFDLEdBQUdJLENBQUMsQ0FBQ1UsS0FBSztNQUNYa0MsQ0FBQyxHQUFHLENBQUM7SUFFVCxJQUFJbkMsUUFBUSxJQUFJYixDQUFDLElBQUksQ0FBQzJFLFlBQVksRUFBRTtNQUNsQyxPQUFPOUQsUUFBUTtJQUNqQjtJQUVBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQytELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsR0FBR2hFLFFBQVEsQ0FBQ29DLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFaEUsT0FBT0QsQ0FBQyxFQUFFLElBQUksRUFBRTBCLFNBQVMsQ0FBQzFCLENBQUMsQ0FBQyxHQUFHbkMsUUFBUSxJQUFJYixDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWhELE9BQU9nRCxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDQSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBR0EsQ0FBQyxJQUFJLENBQUMsR0FBRzBCLFNBQVMsQ0FBQzFCLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSW5DLFFBQVE7RUFDaEYsQ0FBQztFQUNHaUUsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUEsRUFBRztJQUNuQyxJQUFJcEcsYUFBYSxDQUFDLENBQUMsSUFBSXpFLE1BQU0sQ0FBQ0osUUFBUSxFQUFFO01BQ3RDcUUsSUFBSSxHQUFHakUsTUFBTTtNQUNia0UsSUFBSSxHQUFHRCxJQUFJLENBQUNyRSxRQUFRO01BQ3BCdUUsV0FBVyxHQUFHRCxJQUFJLENBQUM0RyxlQUFlO01BQ2xDekcsUUFBUSxHQUFHeUYsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ2xDakQsS0FBSyxFQUFFLENBQUM7TUFDVixDQUFDO01BQ0R2QyxjQUFjLEdBQUd3RixjQUFjLENBQUMsS0FBSyxDQUFDO01BQ3RDckMsY0FBYyxHQUFHK0MsZ0JBQWdCLENBQUMvQyxjQUFjLENBQUM7TUFDakRDLG9CQUFvQixHQUFHRCxjQUFjLEdBQUcsUUFBUTtNQUNoRHBELFFBQVEsQ0FBQ3dDLEtBQUssQ0FBQ2tFLE9BQU8sR0FBRywwREFBMEQsQ0FBQyxDQUFDOztNQUVyRmxCLFdBQVcsR0FBRyxDQUFDLENBQUNXLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztNQUMvQ2hHLFVBQVUsR0FBR2xDLCtDQUFJLENBQUNxSCxJQUFJLENBQUNxQixTQUFTO01BQ2hDNUcsY0FBYyxHQUFHLENBQUM7SUFDcEI7RUFDRixDQUFDO0VBQ0c2RyxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ0MsY0FBYyxFQUFFO0lBQ3ZEO0lBQ0EsSUFBSTFDLEdBQUcsR0FBR3NCLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDcUIsZUFBZSxJQUFJLElBQUksQ0FBQ0EsZUFBZSxDQUFDOUosWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLDRCQUE0QixDQUFDO01BQy9IK0osU0FBUyxHQUFHLElBQUksQ0FBQ0MsVUFBVTtNQUMzQkMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsV0FBVztNQUM3QkMsTUFBTSxHQUFHLElBQUksQ0FBQzNFLEtBQUssQ0FBQ2tFLE9BQU87TUFDM0JVLElBQUk7SUFFUnRILFdBQVcsQ0FBQ3VILFdBQVcsQ0FBQ2xELEdBQUcsQ0FBQztJQUU1QkEsR0FBRyxDQUFDa0QsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNyQixJQUFJLENBQUM3RSxLQUFLLENBQUM4RSxPQUFPLEdBQUcsT0FBTztJQUU1QixJQUFJVCxjQUFjLEVBQUU7TUFDbEIsSUFBSTtRQUNGTyxJQUFJLEdBQUcsSUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDOztRQUUvQixJQUFJLENBQUNBLE9BQU8sR0FBR1gsWUFBWTtNQUM3QixDQUFDLENBQUMsT0FBTzlFLENBQUMsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDMEYsU0FBUyxFQUFFO01BQ3pCSixJQUFJLEdBQUcsSUFBSSxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUN6QjtJQUVBLElBQUlULFNBQVMsRUFBRTtNQUNiLElBQUlFLFVBQVUsRUFBRTtRQUNkRixTQUFTLENBQUNVLFlBQVksQ0FBQyxJQUFJLEVBQUVSLFVBQVUsQ0FBQztNQUMxQyxDQUFDLE1BQU07UUFDTEYsU0FBUyxDQUFDTSxXQUFXLENBQUMsSUFBSSxDQUFDO01BQzdCO0lBQ0Y7SUFFQXZILFdBQVcsQ0FBQzRILFdBQVcsQ0FBQ3ZELEdBQUcsQ0FBQztJQUU1QixJQUFJLENBQUMzQixLQUFLLENBQUNrRSxPQUFPLEdBQUdTLE1BQU07SUFDM0IsT0FBT0MsSUFBSTtFQUNiLENBQUM7RUFDR08sc0JBQXNCLEdBQUcsU0FBU0Esc0JBQXNCQSxDQUFDckYsTUFBTSxFQUFFc0YsZUFBZSxFQUFFO0lBQ3BGLElBQUlsRCxDQUFDLEdBQUdrRCxlQUFlLENBQUM3TCxNQUFNO0lBRTlCLE9BQU8ySSxDQUFDLEVBQUUsRUFBRTtNQUNWLElBQUlwQyxNQUFNLENBQUN1RixZQUFZLENBQUNELGVBQWUsQ0FBQ2xELENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDM0MsT0FBT3BDLE1BQU0sQ0FBQ3RGLFlBQVksQ0FBQzRLLGVBQWUsQ0FBQ2xELENBQUMsQ0FBQyxDQUFDO01BQ2hEO0lBQ0Y7RUFDRixDQUFDO0VBQ0dvRCxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ3hGLE1BQU0sRUFBRTtJQUN2QyxJQUFJeUYsTUFBTTtJQUVWLElBQUk7TUFDRkEsTUFBTSxHQUFHekYsTUFBTSxDQUFDaUYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxPQUFPUyxLQUFLLEVBQUU7TUFDZEQsTUFBTSxHQUFHbkIsWUFBWSxDQUFDM0MsSUFBSSxDQUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQztJQUMxQztJQUVBeUYsTUFBTSxLQUFLQSxNQUFNLENBQUNFLEtBQUssSUFBSUYsTUFBTSxDQUFDRyxNQUFNLENBQUMsSUFBSTVGLE1BQU0sQ0FBQ2lGLE9BQU8sS0FBS1gsWUFBWSxLQUFLbUIsTUFBTSxHQUFHbkIsWUFBWSxDQUFDM0MsSUFBSSxDQUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFFNUgsT0FBT3lGLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNFLEtBQUssSUFBSSxDQUFDRixNQUFNLENBQUNoRSxDQUFDLElBQUksQ0FBQ2dFLE1BQU0sQ0FBQ0ksQ0FBQyxHQUFHO01BQ3pEcEUsQ0FBQyxFQUFFLENBQUM0RCxzQkFBc0IsQ0FBQ3JGLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO01BQzFENkYsQ0FBQyxFQUFFLENBQUNSLHNCQUFzQixDQUFDckYsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDMUQyRixLQUFLLEVBQUUsQ0FBQztNQUNSQyxNQUFNLEVBQUU7SUFDVixDQUFDLEdBQUdILE1BQU07RUFDWixDQUFDO0VBQ0dLLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDdEcsQ0FBQyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxFQUFFQSxDQUFDLENBQUN1RyxNQUFNLEtBQUssQ0FBQ3ZHLENBQUMsQ0FBQ2tGLFVBQVUsSUFBSWxGLENBQUMsQ0FBQ2dGLGVBQWUsQ0FBQyxJQUFJZ0IsUUFBUSxDQUFDaEcsQ0FBQyxDQUFDLENBQUM7RUFDNUUsQ0FBQztFQUNHO0VBQ0p3RyxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ2hHLE1BQU0sRUFBRUMsUUFBUSxFQUFFO0lBQzNELElBQUlBLFFBQVEsRUFBRTtNQUNaLElBQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLO01BRXhCLElBQUlELFFBQVEsSUFBSWxDLGVBQWUsSUFBSWtDLFFBQVEsS0FBS2Msb0JBQW9CLEVBQUU7UUFDcEVkLFFBQVEsR0FBR2EsY0FBYztNQUMzQjtNQUVBLElBQUlaLEtBQUssQ0FBQ2dDLGNBQWMsRUFBRTtRQUN4QixJQUFJakMsUUFBUSxDQUFDb0MsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUlwQyxRQUFRLENBQUNvQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtVQUN4RTtVQUNBcEMsUUFBUSxHQUFHLEdBQUcsR0FBR0EsUUFBUTtRQUMzQjtRQUVBQyxLQUFLLENBQUNnQyxjQUFjLENBQUNqQyxRQUFRLENBQUNxQyxPQUFPLENBQUMvRCxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUNnRSxXQUFXLENBQUMsQ0FBQyxDQUFDO01BQ3ZFLENBQUMsTUFBTTtRQUNMO1FBQ0FyQyxLQUFLLENBQUMrRixlQUFlLENBQUNoRyxRQUFRLENBQUM7TUFDakM7SUFDRjtFQUNGLENBQUM7RUFDR2lHLGlCQUFpQixHQUFHLFNBQVNBLGlCQUFpQkEsQ0FBQ0MsTUFBTSxFQUFFbkcsTUFBTSxFQUFFQyxRQUFRLEVBQUVtRyxTQUFTLEVBQUVDLEdBQUcsRUFBRUMsWUFBWSxFQUFFO0lBQ3pHLElBQUlDLEVBQUUsR0FBRyxJQUFJNUosb0RBQVMsQ0FBQ3dKLE1BQU0sQ0FBQ0ssR0FBRyxFQUFFeEcsTUFBTSxFQUFFQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRXFHLFlBQVksR0FBR3hHLGdDQUFnQyxHQUFHRCx1QkFBdUIsQ0FBQztJQUNySXNHLE1BQU0sQ0FBQ0ssR0FBRyxHQUFHRCxFQUFFO0lBQ2ZBLEVBQUUsQ0FBQzdHLENBQUMsR0FBRzBHLFNBQVM7SUFDaEJHLEVBQUUsQ0FBQy9HLENBQUMsR0FBRzZHLEdBQUc7SUFFVkYsTUFBTSxDQUFDTSxNQUFNLENBQUMxRSxJQUFJLENBQUM5QixRQUFRLENBQUM7SUFFNUIsT0FBT3NHLEVBQUU7RUFDWCxDQUFDO0VBQ0dHLG9CQUFvQixHQUFHO0lBQ3pCQyxHQUFHLEVBQUUsQ0FBQztJQUNOQyxHQUFHLEVBQUUsQ0FBQztJQUNOQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0dDLG1CQUFtQixHQUFHO0lBQ3hCQyxJQUFJLEVBQUUsQ0FBQztJQUNQQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0c7RUFDSkMsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNqSCxNQUFNLEVBQUVDLFFBQVEsRUFBRUwsS0FBSyxFQUFFc0gsSUFBSSxFQUFFO0lBQ3RFLElBQUlDLFFBQVEsR0FBR0MsVUFBVSxDQUFDeEgsS0FBSyxDQUFDLElBQUksQ0FBQztNQUNqQ3lILE9BQU8sR0FBRyxDQUFDekgsS0FBSyxHQUFHLEVBQUUsRUFBRTBILElBQUksQ0FBQyxDQUFDLENBQUNqRixNQUFNLENBQUMsQ0FBQzhFLFFBQVEsR0FBRyxFQUFFLEVBQUUxTixNQUFNLENBQUMsSUFBSSxJQUFJO01BQ3BFO01BQ0p5RyxLQUFLLEdBQUd4QyxRQUFRLENBQUN3QyxLQUFLO01BQ2xCcUgsVUFBVSxHQUFHL0ksY0FBYyxDQUFDZ0osSUFBSSxDQUFDdkgsUUFBUSxDQUFDO01BQzFDd0gsU0FBUyxHQUFHekgsTUFBTSxDQUFDMEgsT0FBTyxDQUFDbkYsV0FBVyxDQUFDLENBQUMsS0FBSyxLQUFLO01BQ2xEb0YsZUFBZSxHQUFHLENBQUNGLFNBQVMsR0FBRyxRQUFRLEdBQUcsUUFBUSxLQUFLRixVQUFVLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQztNQUN2RkssTUFBTSxHQUFHLEdBQUc7TUFDWkMsUUFBUSxHQUFHWCxJQUFJLEtBQUssSUFBSTtNQUN4QlksU0FBUyxHQUFHWixJQUFJLEtBQUssR0FBRztNQUN4QmEsRUFBRTtNQUNGQyxNQUFNO01BQ05ySCxLQUFLO01BQ0xzSCxLQUFLO0lBRVQsSUFBSWYsSUFBSSxLQUFLRyxPQUFPLElBQUksQ0FBQ0YsUUFBUSxJQUFJVCxvQkFBb0IsQ0FBQ1EsSUFBSSxDQUFDLElBQUlSLG9CQUFvQixDQUFDVyxPQUFPLENBQUMsRUFBRTtNQUNoRyxPQUFPRixRQUFRO0lBQ2pCO0lBRUFFLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQ1EsUUFBUSxLQUFLVixRQUFRLEdBQUdGLGNBQWMsQ0FBQ2pILE1BQU0sRUFBRUMsUUFBUSxFQUFFTCxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0ZxSSxLQUFLLEdBQUdqSSxNQUFNLENBQUMrRixNQUFNLElBQUlELE1BQU0sQ0FBQzlGLE1BQU0sQ0FBQztJQUV2QyxJQUFJLENBQUM4SCxTQUFTLElBQUlULE9BQU8sS0FBSyxHQUFHLE1BQU10SixlQUFlLENBQUNrQyxRQUFRLENBQUMsSUFBSSxDQUFDQSxRQUFRLENBQUNtQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtNQUMvRjJHLEVBQUUsR0FBR0UsS0FBSyxHQUFHakksTUFBTSxDQUFDaUYsT0FBTyxDQUFDLENBQUMsQ0FBQ3NDLFVBQVUsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUd2SCxNQUFNLENBQUMySCxlQUFlLENBQUM7TUFDeEYsT0FBTzdLLHFEQUFNLENBQUNnTCxTQUFTLEdBQUdYLFFBQVEsR0FBR1ksRUFBRSxHQUFHSCxNQUFNLEdBQUdULFFBQVEsR0FBRyxHQUFHLEdBQUdZLEVBQUUsQ0FBQztJQUN6RTtJQUVBN0gsS0FBSyxDQUFDcUgsVUFBVSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBR0ssTUFBTSxJQUFJQyxRQUFRLEdBQUdSLE9BQU8sR0FBR0gsSUFBSSxDQUFDO0lBQzdFYyxNQUFNLEdBQUcsQ0FBQy9ILFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSThGLElBQUksS0FBSyxJQUFJLElBQUlsSCxNQUFNLENBQUMrRSxXQUFXLElBQUksQ0FBQzBDLFNBQVMsR0FBR3pILE1BQU0sR0FBR0EsTUFBTSxDQUFDMEUsVUFBVTtJQUVySCxJQUFJdUQsS0FBSyxFQUFFO01BQ1RELE1BQU0sR0FBRyxDQUFDaEksTUFBTSxDQUFDd0UsZUFBZSxJQUFJLENBQUMsQ0FBQyxFQUFFRSxVQUFVO0lBQ3BEO0lBRUEsSUFBSSxDQUFDc0QsTUFBTSxJQUFJQSxNQUFNLEtBQUt6SyxJQUFJLElBQUksQ0FBQ3lLLE1BQU0sQ0FBQ2pELFdBQVcsRUFBRTtNQUNyRGlELE1BQU0sR0FBR3pLLElBQUksQ0FBQzJLLElBQUk7SUFDcEI7SUFFQXZILEtBQUssR0FBR3FILE1BQU0sQ0FBQzFILEtBQUs7SUFFcEIsSUFBSUssS0FBSyxJQUFJbUgsU0FBUyxJQUFJbkgsS0FBSyxDQUFDZ0YsS0FBSyxJQUFJNEIsVUFBVSxJQUFJNUcsS0FBSyxDQUFDd0gsSUFBSSxLQUFLdEwsa0RBQU8sQ0FBQ3NMLElBQUksSUFBSSxDQUFDeEgsS0FBSyxDQUFDK0IsT0FBTyxFQUFFO01BQ3BHLE9BQU81RixxREFBTSxDQUFDcUssUUFBUSxHQUFHeEcsS0FBSyxDQUFDZ0YsS0FBSyxHQUFHaUMsTUFBTSxDQUFDO0lBQ2hELENBQUMsTUFBTTtNQUNMLENBQUNFLFNBQVMsSUFBSVQsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDUCxtQkFBbUIsQ0FBQ3RELG9CQUFvQixDQUFDd0UsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUs5SCxLQUFLLENBQUNrSSxRQUFRLEdBQUc1RSxvQkFBb0IsQ0FBQ3hELE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztNQUM5SmdJLE1BQU0sS0FBS2hJLE1BQU0sS0FBS0UsS0FBSyxDQUFDa0ksUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7O01BRWxESixNQUFNLENBQUNqRCxXQUFXLENBQUNySCxRQUFRLENBQUM7TUFDNUJxSyxFQUFFLEdBQUdySyxRQUFRLENBQUNpSyxlQUFlLENBQUM7TUFDOUJLLE1BQU0sQ0FBQzVDLFdBQVcsQ0FBQzFILFFBQVEsQ0FBQztNQUM1QndDLEtBQUssQ0FBQ2tJLFFBQVEsR0FBRyxVQUFVO01BRTNCLElBQUliLFVBQVUsSUFBSU8sU0FBUyxFQUFFO1FBQzNCbkgsS0FBSyxHQUFHMUQsd0RBQVMsQ0FBQytLLE1BQU0sQ0FBQztRQUN6QnJILEtBQUssQ0FBQ3dILElBQUksR0FBR3RMLGtEQUFPLENBQUNzTCxJQUFJO1FBQ3pCeEgsS0FBSyxDQUFDZ0YsS0FBSyxHQUFHcUMsTUFBTSxDQUFDTCxlQUFlLENBQUM7TUFDdkM7SUFDRjtJQUVBLE9BQU83SyxxREFBTSxDQUFDK0ssUUFBUSxHQUFHRSxFQUFFLEdBQUdaLFFBQVEsR0FBR1MsTUFBTSxHQUFHRyxFQUFFLElBQUlaLFFBQVEsR0FBR1MsTUFBTSxHQUFHRyxFQUFFLEdBQUdaLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDaEcsQ0FBQztFQUNHM0YsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUN4QixNQUFNLEVBQUVDLFFBQVEsRUFBRWlILElBQUksRUFBRXhFLE9BQU8sRUFBRTtJQUN4RCxJQUFJOUMsS0FBSztJQUNUbkMsY0FBYyxJQUFJeUcsU0FBUyxDQUFDLENBQUM7SUFFN0IsSUFBSWpFLFFBQVEsSUFBSXZCLGdCQUFnQixJQUFJdUIsUUFBUSxLQUFLLFdBQVcsRUFBRTtNQUM1REEsUUFBUSxHQUFHdkIsZ0JBQWdCLENBQUN1QixRQUFRLENBQUM7TUFFckMsSUFBSSxDQUFDQSxRQUFRLENBQUNtQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDMUJuQixRQUFRLEdBQUdBLFFBQVEsQ0FBQ29CLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbkM7SUFDRjtJQUVBLElBQUl0RCxlQUFlLENBQUNrQyxRQUFRLENBQUMsSUFBSUEsUUFBUSxLQUFLLFdBQVcsRUFBRTtNQUN6REwsS0FBSyxHQUFHeUksZUFBZSxDQUFDckksTUFBTSxFQUFFMEMsT0FBTyxDQUFDO01BQ3hDOUMsS0FBSyxHQUFHSyxRQUFRLEtBQUssaUJBQWlCLEdBQUdMLEtBQUssQ0FBQ0ssUUFBUSxDQUFDLEdBQUdMLEtBQUssQ0FBQ2lDLEdBQUcsR0FBR2pDLEtBQUssQ0FBQzBJLE1BQU0sR0FBR0MsYUFBYSxDQUFDL0Usb0JBQW9CLENBQUN4RCxNQUFNLEVBQUVlLG9CQUFvQixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUduQixLQUFLLENBQUM0SSxPQUFPLEdBQUcsSUFBSTtJQUN0TCxDQUFDLE1BQU07TUFDTDVJLEtBQUssR0FBR0ksTUFBTSxDQUFDRSxLQUFLLENBQUNELFFBQVEsQ0FBQztNQUU5QixJQUFJLENBQUNMLEtBQUssSUFBSUEsS0FBSyxLQUFLLE1BQU0sSUFBSThDLE9BQU8sSUFBSSxDQUFDLENBQUM5QyxLQUFLLEdBQUcsRUFBRSxFQUFFd0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzNFeEIsS0FBSyxHQUFHNkksYUFBYSxDQUFDeEksUUFBUSxDQUFDLElBQUl3SSxhQUFhLENBQUN4SSxRQUFRLENBQUMsQ0FBQ0QsTUFBTSxFQUFFQyxRQUFRLEVBQUVpSCxJQUFJLENBQUMsSUFBSTFELG9CQUFvQixDQUFDeEQsTUFBTSxFQUFFQyxRQUFRLENBQUMsSUFBSXJFLDJEQUFZLENBQUNvRSxNQUFNLEVBQUVDLFFBQVEsQ0FBQyxLQUFLQSxRQUFRLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3RNO0lBQ0Y7O0lBRUEsT0FBT2lILElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQ3RILEtBQUssR0FBRyxFQUFFLEVBQUUwSCxJQUFJLENBQUMsQ0FBQyxDQUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHNkYsY0FBYyxDQUFDakgsTUFBTSxFQUFFQyxRQUFRLEVBQUVMLEtBQUssRUFBRXNILElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUd0SCxLQUFLO0VBQ2xILENBQUM7RUFDRzhJLHNCQUFzQixHQUFHLFNBQVNBLHNCQUFzQkEsQ0FBQzFJLE1BQU0sRUFBRTJJLElBQUksRUFBRUMsS0FBSyxFQUFFdkMsR0FBRyxFQUFFO0lBQ3JGO0lBQ0EsSUFBSSxDQUFDdUMsS0FBSyxJQUFJQSxLQUFLLEtBQUssTUFBTSxFQUFFO01BQzlCO01BQ0EsSUFBSTFKLENBQUMsR0FBRzJFLGdCQUFnQixDQUFDOEUsSUFBSSxFQUFFM0ksTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNyQ1osQ0FBQyxHQUFHRixDQUFDLElBQUlzRSxvQkFBb0IsQ0FBQ3hELE1BQU0sRUFBRWQsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUUvQyxJQUFJRSxDQUFDLElBQUlBLENBQUMsS0FBS3dKLEtBQUssRUFBRTtRQUNwQkQsSUFBSSxHQUFHekosQ0FBQztRQUNSMEosS0FBSyxHQUFHeEosQ0FBQztNQUNYLENBQUMsTUFBTSxJQUFJdUosSUFBSSxLQUFLLGFBQWEsRUFBRTtRQUNqQ0MsS0FBSyxHQUFHcEYsb0JBQW9CLENBQUN4RCxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO01BQzFEO0lBQ0Y7O0lBRUEsSUFBSXVHLEVBQUUsR0FBRyxJQUFJNUosb0RBQVMsQ0FBQyxJQUFJLENBQUM2SixHQUFHLEVBQUV4RyxNQUFNLENBQUNFLEtBQUssRUFBRXlJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFek0sK0RBQW9CLENBQUM7TUFDNUUyTSxLQUFLLEdBQUcsQ0FBQztNQUNUQyxVQUFVLEdBQUcsQ0FBQztNQUNkdkgsQ0FBQztNQUNEd0gsTUFBTTtNQUNOQyxXQUFXO01BQ1hDLFFBQVE7TUFDUkMsS0FBSztNQUNMQyxVQUFVO01BQ1ZDLFFBQVE7TUFDUkMsTUFBTTtNQUNOQyxLQUFLO01BQ0xDLE9BQU87TUFDUEMsU0FBUztNQUNUQyxTQUFTO0lBQ2JsRCxFQUFFLENBQUM3RyxDQUFDLEdBQUdrSixLQUFLO0lBQ1pyQyxFQUFFLENBQUMvRyxDQUFDLEdBQUc2RyxHQUFHO0lBQ1Z1QyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7O0lBRWJ2QyxHQUFHLElBQUksRUFBRTtJQUVULElBQUlBLEdBQUcsS0FBSyxNQUFNLEVBQUU7TUFDbEJyRyxNQUFNLENBQUNFLEtBQUssQ0FBQ3lJLElBQUksQ0FBQyxHQUFHdEMsR0FBRztNQUN4QkEsR0FBRyxHQUFHN0Msb0JBQW9CLENBQUN4RCxNQUFNLEVBQUUySSxJQUFJLENBQUMsSUFBSXRDLEdBQUc7TUFDL0NyRyxNQUFNLENBQUNFLEtBQUssQ0FBQ3lJLElBQUksQ0FBQyxHQUFHQyxLQUFLO0lBQzVCO0lBRUFySCxDQUFDLEdBQUcsQ0FBQ3FILEtBQUssRUFBRXZDLEdBQUcsQ0FBQztJQUVoQi9KLGlFQUFrQixDQUFDaUYsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFHdkJxSCxLQUFLLEdBQUdySCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1o4RSxHQUFHLEdBQUc5RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1Z5SCxXQUFXLEdBQUdKLEtBQUssQ0FBQ2MsS0FBSyxDQUFDNU4sMERBQWUsQ0FBQyxJQUFJLEVBQUU7SUFDaEQyTixTQUFTLEdBQUdwRCxHQUFHLENBQUNxRCxLQUFLLENBQUM1TiwwREFBZSxDQUFDLElBQUksRUFBRTtJQUU1QyxJQUFJMk4sU0FBUyxDQUFDaFEsTUFBTSxFQUFFO01BQ3BCLE9BQU9zUCxNQUFNLEdBQUdqTiwwREFBZSxDQUFDNk4sSUFBSSxDQUFDdEQsR0FBRyxDQUFDLEVBQUU7UUFDekMrQyxRQUFRLEdBQUdMLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEJPLEtBQUssR0FBR2pELEdBQUcsQ0FBQ3VELFNBQVMsQ0FBQ2YsS0FBSyxFQUFFRSxNQUFNLENBQUNGLEtBQUssQ0FBQztRQUUxQyxJQUFJSyxLQUFLLEVBQUU7VUFDVEEsS0FBSyxHQUFHLENBQUNBLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLE1BQU0sSUFBSUksS0FBSyxDQUFDakgsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxJQUFJaUgsS0FBSyxDQUFDakgsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO1VBQ3ZFNkcsS0FBSyxHQUFHLENBQUM7UUFDWDtRQUVBLElBQUlFLFFBQVEsTUFBTUQsVUFBVSxHQUFHSCxXQUFXLENBQUNGLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7VUFDL0RHLFFBQVEsR0FBRzdCLFVBQVUsQ0FBQytCLFVBQVUsQ0FBQyxJQUFJLENBQUM7VUFDdENLLFNBQVMsR0FBR0wsVUFBVSxDQUFDOUcsTUFBTSxDQUFDLENBQUM0RyxRQUFRLEdBQUcsRUFBRSxFQUFFeFAsTUFBTSxDQUFDO1VBQ3JEMlAsUUFBUSxDQUFDcEYsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBS29GLFFBQVEsR0FBR2pNLDZEQUFjLENBQUM4TCxRQUFRLEVBQUVHLFFBQVEsQ0FBQyxHQUFHSSxTQUFTLENBQUM7VUFDekZILE1BQU0sR0FBR2pDLFVBQVUsQ0FBQ2dDLFFBQVEsQ0FBQztVQUM3QkcsT0FBTyxHQUFHSCxRQUFRLENBQUMvRyxNQUFNLENBQUMsQ0FBQ2dILE1BQU0sR0FBRyxFQUFFLEVBQUU1UCxNQUFNLENBQUM7VUFDL0NvUCxLQUFLLEdBQUcvTSwwREFBZSxDQUFDK04sU0FBUyxHQUFHTixPQUFPLENBQUM5UCxNQUFNO1VBRWxELElBQUksQ0FBQzhQLE9BQU8sRUFBRTtZQUNaO1lBQ0FBLE9BQU8sR0FBR0EsT0FBTyxJQUFJM00sa0RBQU8sQ0FBQ2tOLEtBQUssQ0FBQ25CLElBQUksQ0FBQyxJQUFJYSxTQUFTO1lBRXJELElBQUlYLEtBQUssS0FBS3hDLEdBQUcsQ0FBQzVNLE1BQU0sRUFBRTtjQUN4QjRNLEdBQUcsSUFBSWtELE9BQU87Y0FDZGhELEVBQUUsQ0FBQy9HLENBQUMsSUFBSStKLE9BQU87WUFDakI7VUFDRjtVQUVBLElBQUlDLFNBQVMsS0FBS0QsT0FBTyxFQUFFO1lBQ3pCTixRQUFRLEdBQUdoQyxjQUFjLENBQUNqSCxNQUFNLEVBQUUySSxJQUFJLEVBQUVRLFVBQVUsRUFBRUksT0FBTyxDQUFDLElBQUksQ0FBQztVQUNuRSxDQUFDLENBQUM7O1VBR0ZoRCxFQUFFLENBQUNDLEdBQUcsR0FBRztZQUNQdUQsS0FBSyxFQUFFeEQsRUFBRSxDQUFDQyxHQUFHO1lBQ2J0SCxDQUFDLEVBQUVvSyxLQUFLLElBQUlSLFVBQVUsS0FBSyxDQUFDLEdBQUdRLEtBQUssR0FBRyxHQUFHO1lBQzFDO1lBQ0FsSyxDQUFDLEVBQUU2SixRQUFRO1lBQ1g1SixDQUFDLEVBQUVnSyxNQUFNLEdBQUdKLFFBQVE7WUFDcEJlLENBQUMsRUFBRWQsS0FBSyxJQUFJQSxLQUFLLEdBQUcsQ0FBQyxJQUFJUCxJQUFJLEtBQUssUUFBUSxHQUFHMUssSUFBSSxDQUFDa0IsS0FBSyxHQUFHO1VBQzVELENBQUM7UUFDSDtNQUNGO01BRUFvSCxFQUFFLENBQUNsSCxDQUFDLEdBQUd3SixLQUFLLEdBQUd4QyxHQUFHLENBQUM1TSxNQUFNLEdBQUc0TSxHQUFHLENBQUN1RCxTQUFTLENBQUNmLEtBQUssRUFBRXhDLEdBQUcsQ0FBQzVNLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsTUFBTTtNQUNMOE0sRUFBRSxDQUFDMEQsQ0FBQyxHQUFHdEIsSUFBSSxLQUFLLFNBQVMsSUFBSXRDLEdBQUcsS0FBSyxNQUFNLEdBQUd2RyxnQ0FBZ0MsR0FBR0QsdUJBQXVCO0lBQzFHO0lBRUExRCxrREFBTyxDQUFDcUwsSUFBSSxDQUFDbkIsR0FBRyxDQUFDLEtBQUtFLEVBQUUsQ0FBQy9HLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVqQyxJQUFJLENBQUNnSCxHQUFHLEdBQUdELEVBQUUsQ0FBQyxDQUFDOztJQUVmLE9BQU9BLEVBQUU7RUFDWCxDQUFDO0VBQ0cyRCxpQkFBaUIsR0FBRztJQUN0QkMsR0FBRyxFQUFFLElBQUk7SUFDVEMsTUFBTSxFQUFFLE1BQU07SUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDVkMsS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNHQyw2QkFBNkIsR0FBRyxTQUFTQSw2QkFBNkJBLENBQUM1SyxLQUFLLEVBQUU7SUFDaEYsSUFBSXlCLEtBQUssR0FBR3pCLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDeEJJLENBQUMsR0FBR0osS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNad0UsQ0FBQyxHQUFHeEUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUs7SUFFekIsSUFBSUksQ0FBQyxLQUFLLEtBQUssSUFBSUEsQ0FBQyxLQUFLLFFBQVEsSUFBSW9FLENBQUMsS0FBSyxNQUFNLElBQUlBLENBQUMsS0FBSyxPQUFPLEVBQUU7TUFDbEU7TUFDQWpHLEtBQUssR0FBRzZCLENBQUM7TUFDVEEsQ0FBQyxHQUFHb0UsQ0FBQztNQUNMQSxDQUFDLEdBQUdqRyxLQUFLO0lBQ1g7SUFFQXlCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRzZJLGlCQUFpQixDQUFDekksQ0FBQyxDQUFDLElBQUlBLENBQUM7SUFDcENKLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRzZJLGlCQUFpQixDQUFDckUsQ0FBQyxDQUFDLElBQUlBLENBQUM7SUFDcEMsT0FBT3hFLEtBQUssQ0FBQ29KLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDeEIsQ0FBQztFQUNHQyxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUM1TCxLQUFLLEVBQUVDLElBQUksRUFBRTtJQUM5RCxJQUFJQSxJQUFJLENBQUM0TCxLQUFLLElBQUk1TCxJQUFJLENBQUM0TCxLQUFLLENBQUNDLEtBQUssS0FBSzdMLElBQUksQ0FBQzRMLEtBQUssQ0FBQ0UsSUFBSSxFQUFFO01BQ3RELElBQUk3SyxNQUFNLEdBQUdqQixJQUFJLENBQUNFLENBQUM7UUFDZmlCLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLO1FBQ3BCMEIsS0FBSyxHQUFHN0MsSUFBSSxDQUFDTyxDQUFDO1FBQ2RxQixLQUFLLEdBQUdYLE1BQU0sQ0FBQ00sS0FBSztRQUNwQnFJLElBQUk7UUFDSm1DLGVBQWU7UUFDZjFJLENBQUM7TUFFTCxJQUFJUixLQUFLLEtBQUssS0FBSyxJQUFJQSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ3JDMUIsS0FBSyxDQUFDa0UsT0FBTyxHQUFHLEVBQUU7UUFDbEIwRyxlQUFlLEdBQUcsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDTGxKLEtBQUssR0FBR0EsS0FBSyxDQUFDUCxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hCZSxDQUFDLEdBQUdSLEtBQUssQ0FBQ25JLE1BQU07UUFFaEIsT0FBTyxFQUFFMkksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQ2Z1RyxJQUFJLEdBQUcvRyxLQUFLLENBQUNRLENBQUMsQ0FBQztVQUVmLElBQUlyRSxlQUFlLENBQUM0SyxJQUFJLENBQUMsRUFBRTtZQUN6Qm1DLGVBQWUsR0FBRyxDQUFDO1lBQ25CbkMsSUFBSSxHQUFHQSxJQUFJLEtBQUssaUJBQWlCLEdBQUc1SCxvQkFBb0IsR0FBR0QsY0FBYztVQUMzRTtVQUVBa0YsZUFBZSxDQUFDaEcsTUFBTSxFQUFFMkksSUFBSSxDQUFDO1FBQy9CO01BQ0Y7TUFFQSxJQUFJbUMsZUFBZSxFQUFFO1FBQ25COUUsZUFBZSxDQUFDaEcsTUFBTSxFQUFFYyxjQUFjLENBQUM7UUFFdkMsSUFBSUgsS0FBSyxFQUFFO1VBQ1RBLEtBQUssQ0FBQ2tCLEdBQUcsSUFBSTdCLE1BQU0sQ0FBQ2lHLGVBQWUsQ0FBQyxXQUFXLENBQUM7VUFFaERvQyxlQUFlLENBQUNySSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFHNUJXLEtBQUssQ0FBQytCLE9BQU8sR0FBRyxDQUFDO1VBRWpCViw0QkFBNEIsQ0FBQzlCLEtBQUssQ0FBQztRQUNyQztNQUNGO0lBQ0Y7RUFDRixDQUFDO0VBQ0c7RUFDSnVJLGFBQWEsR0FBRztJQUNkc0MsVUFBVSxFQUFFLFNBQVNBLFVBQVVBLENBQUM1RSxNQUFNLEVBQUVuRyxNQUFNLEVBQUVDLFFBQVEsRUFBRW1KLFFBQVEsRUFBRXVCLEtBQUssRUFBRTtNQUN6RSxJQUFJQSxLQUFLLENBQUM1TCxJQUFJLEtBQUssYUFBYSxFQUFFO1FBQ2hDLElBQUl3SCxFQUFFLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBRyxHQUFHLElBQUk3SixvREFBUyxDQUFDd0osTUFBTSxDQUFDSyxHQUFHLEVBQUV4RyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFeUssaUJBQWlCLENBQUM7UUFDMUZuRSxFQUFFLENBQUNqSCxDQUFDLEdBQUc4SixRQUFRO1FBQ2Y3QyxFQUFFLENBQUN5RSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1h6RSxFQUFFLENBQUNvRSxLQUFLLEdBQUdBLEtBQUs7UUFFaEJ4RSxNQUFNLENBQUNNLE1BQU0sQ0FBQzFFLElBQUksQ0FBQzlCLFFBQVEsQ0FBQztRQUU1QixPQUFPLENBQUM7TUFDVjtJQUNGO0lBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUEsQ0FBQztFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQWdMLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDbENDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztFQUMxQkMsZ0JBQWdCLEdBQUcsU0FBU0EsZ0JBQWdCQSxDQUFDdkwsS0FBSyxFQUFFO0lBQ3RELE9BQU9BLEtBQUssS0FBSywwQkFBMEIsSUFBSUEsS0FBSyxLQUFLLE1BQU0sSUFBSSxDQUFDQSxLQUFLO0VBQzNFLENBQUM7RUFDR3dMLGtDQUFrQyxHQUFHLFNBQVNBLGtDQUFrQ0EsQ0FBQ3BMLE1BQU0sRUFBRTtJQUMzRixJQUFJcUwsWUFBWSxHQUFHN0gsb0JBQW9CLENBQUN4RCxNQUFNLEVBQUVjLGNBQWMsQ0FBQztJQUUvRCxPQUFPcUssZ0JBQWdCLENBQUNFLFlBQVksQ0FBQyxHQUFHSixpQkFBaUIsR0FBR0ksWUFBWSxDQUFDaEosTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDcUgsS0FBSyxDQUFDN04sa0RBQU8sQ0FBQyxDQUFDeVAsR0FBRyxDQUFDeE8saURBQU0sQ0FBQztFQUMvRyxDQUFDO0VBQ0d5TyxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQ3ZMLE1BQU0sRUFBRXdMLE9BQU8sRUFBRTtJQUNwRCxJQUFJN0ssS0FBSyxHQUFHWCxNQUFNLENBQUNNLEtBQUssSUFBSXJELHdEQUFTLENBQUMrQyxNQUFNLENBQUM7TUFDekNFLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLO01BQ3BCdUwsTUFBTSxHQUFHTCxrQ0FBa0MsQ0FBQ3BMLE1BQU0sQ0FBQztNQUNuRGdJLE1BQU07TUFDTnBELFdBQVc7TUFDWDhHLElBQUk7TUFDSkMsVUFBVTtJQUVkLElBQUloTCxLQUFLLENBQUNrQixHQUFHLElBQUk3QixNQUFNLENBQUN0RixZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7TUFDakRnUixJQUFJLEdBQUcxTCxNQUFNLENBQUMwQixTQUFTLENBQUNrSyxPQUFPLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUNKLE1BQU0sQ0FBQyxDQUFDOztNQUV0REEsTUFBTSxHQUFHLENBQUNDLElBQUksQ0FBQ25LLENBQUMsRUFBRW1LLElBQUksQ0FBQ2hNLENBQUMsRUFBRWdNLElBQUksQ0FBQ3JNLENBQUMsRUFBRXFNLElBQUksQ0FBQ0ksQ0FBQyxFQUFFSixJQUFJLENBQUNsTSxDQUFDLEVBQUVrTSxJQUFJLENBQUNLLENBQUMsQ0FBQztNQUN6RCxPQUFPTixNQUFNLENBQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssYUFBYSxHQUFHUSxpQkFBaUIsR0FBR1EsTUFBTTtJQUN4RSxDQUFDLE1BQU0sSUFBSUEsTUFBTSxLQUFLUixpQkFBaUIsSUFBSSxDQUFDakwsTUFBTSxDQUFDZ00sWUFBWSxJQUFJaE0sTUFBTSxLQUFLeEMsV0FBVyxJQUFJLENBQUNtRCxLQUFLLENBQUNrQixHQUFHLEVBQUU7TUFDdkc7TUFDQTtNQUNBNkosSUFBSSxHQUFHeEwsS0FBSyxDQUFDOEUsT0FBTztNQUNwQjlFLEtBQUssQ0FBQzhFLE9BQU8sR0FBRyxPQUFPO01BQ3ZCZ0QsTUFBTSxHQUFHaEksTUFBTSxDQUFDMEUsVUFBVTtNQUUxQixJQUFJLENBQUNzRCxNQUFNLElBQUksQ0FBQ2hJLE1BQU0sQ0FBQ2dNLFlBQVksRUFBRTtRQUNuQztRQUNBTCxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBRWhCL0csV0FBVyxHQUFHNUUsTUFBTSxDQUFDaU0sa0JBQWtCO1FBRXZDek8sV0FBVyxDQUFDdUgsV0FBVyxDQUFDL0UsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUVuQzs7TUFFQXlMLE1BQU0sR0FBR0wsa0NBQWtDLENBQUNwTCxNQUFNLENBQUM7TUFDbkQwTCxJQUFJLEdBQUd4TCxLQUFLLENBQUM4RSxPQUFPLEdBQUcwRyxJQUFJLEdBQUcxRixlQUFlLENBQUNoRyxNQUFNLEVBQUUsU0FBUyxDQUFDO01BRWhFLElBQUkyTCxVQUFVLEVBQUU7UUFDZC9HLFdBQVcsR0FBR29ELE1BQU0sQ0FBQzdDLFlBQVksQ0FBQ25GLE1BQU0sRUFBRTRFLFdBQVcsQ0FBQyxHQUFHb0QsTUFBTSxHQUFHQSxNQUFNLENBQUNqRCxXQUFXLENBQUMvRSxNQUFNLENBQUMsR0FBR3hDLFdBQVcsQ0FBQzRILFdBQVcsQ0FBQ3BGLE1BQU0sQ0FBQztNQUNoSTtJQUNGO0lBRUEsT0FBT3dMLE9BQU8sSUFBSUMsTUFBTSxDQUFDaFMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDZ1MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUVBLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHQSxNQUFNO0VBQ3JILENBQUM7RUFDR1MsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUNsTSxNQUFNLEVBQUVzSSxNQUFNLEVBQUU2RCxnQkFBZ0IsRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLHVCQUF1QixFQUFFO0lBQzdILElBQUkzTCxLQUFLLEdBQUdYLE1BQU0sQ0FBQ00sS0FBSztNQUNwQm1MLE1BQU0sR0FBR1ksV0FBVyxJQUFJZCxVQUFVLENBQUN2TCxNQUFNLEVBQUUsSUFBSSxDQUFDO01BQ2hEdU0sVUFBVSxHQUFHNUwsS0FBSyxDQUFDNkwsT0FBTyxJQUFJLENBQUM7TUFDL0JDLFVBQVUsR0FBRzlMLEtBQUssQ0FBQytMLE9BQU8sSUFBSSxDQUFDO01BQy9CQyxVQUFVLEdBQUdoTSxLQUFLLENBQUNpTSxPQUFPLElBQUksQ0FBQztNQUMvQkMsVUFBVSxHQUFHbE0sS0FBSyxDQUFDbU0sT0FBTyxJQUFJLENBQUM7TUFDL0J2TCxDQUFDLEdBQUdrSyxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ2IvTCxDQUFDLEdBQUcrTCxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ2JwTSxDQUFDLEdBQUdvTSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ2JLLENBQUMsR0FBR0wsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUNic0IsRUFBRSxHQUFHdEIsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUNkdUIsRUFBRSxHQUFHdkIsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUNkd0IsV0FBVyxHQUFHM0UsTUFBTSxDQUFDakgsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUMvQm1MLE9BQU8sR0FBR3BGLFVBQVUsQ0FBQzZGLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDekNQLE9BQU8sR0FBR3RGLFVBQVUsQ0FBQzZGLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFDekN4SCxNQUFNO01BQ055SCxXQUFXO01BQ1h6TCxDQUFDO01BQ0RvRSxDQUFDO0lBRUwsSUFBSSxDQUFDc0csZ0JBQWdCLEVBQUU7TUFDckIxRyxNQUFNLEdBQUdELFFBQVEsQ0FBQ3hGLE1BQU0sQ0FBQztNQUN6QndNLE9BQU8sR0FBRy9HLE1BQU0sQ0FBQ2hFLENBQUMsSUFBSSxDQUFDd0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDN0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHb0wsT0FBTyxHQUFHLEdBQUcsR0FBRy9HLE1BQU0sQ0FBQ0UsS0FBSyxHQUFHNkcsT0FBTyxDQUFDO01BQzVGRSxPQUFPLEdBQUdqSCxNQUFNLENBQUNJLENBQUMsSUFBSSxDQUFDLENBQUNvSCxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUlBLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTdMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBR3NMLE9BQU8sR0FBRyxHQUFHLEdBQUdqSCxNQUFNLENBQUNHLE1BQU0sR0FBRzhHLE9BQU8sQ0FBQztJQUNuSCxDQUFDLE1BQU0sSUFBSWpCLE1BQU0sS0FBS1IsaUJBQWlCLEtBQUtpQyxXQUFXLEdBQUczTCxDQUFDLEdBQUd1SyxDQUFDLEdBQUdwTSxDQUFDLEdBQUdMLENBQUMsQ0FBQyxFQUFFO01BQ3hFO01BQ0FvQyxDQUFDLEdBQUcrSyxPQUFPLElBQUlWLENBQUMsR0FBR29CLFdBQVcsQ0FBQyxHQUFHUixPQUFPLElBQUksQ0FBQ3JOLENBQUMsR0FBRzZOLFdBQVcsQ0FBQyxHQUFHLENBQUM3TixDQUFDLEdBQUcyTixFQUFFLEdBQUdsQixDQUFDLEdBQUdpQixFQUFFLElBQUlHLFdBQVc7TUFDaEdySCxDQUFDLEdBQUcyRyxPQUFPLElBQUksQ0FBQzlNLENBQUMsR0FBR3dOLFdBQVcsQ0FBQyxHQUFHUixPQUFPLElBQUluTCxDQUFDLEdBQUcyTCxXQUFXLENBQUMsR0FBRyxDQUFDM0wsQ0FBQyxHQUFHeUwsRUFBRSxHQUFHdE4sQ0FBQyxHQUFHcU4sRUFBRSxJQUFJRyxXQUFXO01BQ2hHVixPQUFPLEdBQUcvSyxDQUFDO01BQ1hpTCxPQUFPLEdBQUc3RyxDQUFDO0lBQ2I7SUFFQSxJQUFJdUcsTUFBTSxJQUFJQSxNQUFNLEtBQUssS0FBSyxJQUFJekwsS0FBSyxDQUFDeUwsTUFBTSxFQUFFO01BQzlDVyxFQUFFLEdBQUdQLE9BQU8sR0FBR0QsVUFBVTtNQUN6QlMsRUFBRSxHQUFHTixPQUFPLEdBQUdELFVBQVU7TUFDekI5TCxLQUFLLENBQUNpTSxPQUFPLEdBQUdELFVBQVUsSUFBSUksRUFBRSxHQUFHeEwsQ0FBQyxHQUFHeUwsRUFBRSxHQUFHM04sQ0FBQyxDQUFDLEdBQUcwTixFQUFFO01BQ25EcE0sS0FBSyxDQUFDbU0sT0FBTyxHQUFHRCxVQUFVLElBQUlFLEVBQUUsR0FBR3JOLENBQUMsR0FBR3NOLEVBQUUsR0FBR2xCLENBQUMsQ0FBQyxHQUFHa0IsRUFBRTtJQUNyRCxDQUFDLE1BQU07TUFDTHJNLEtBQUssQ0FBQ2lNLE9BQU8sR0FBR2pNLEtBQUssQ0FBQ21NLE9BQU8sR0FBRyxDQUFDO0lBQ25DO0lBRUFuTSxLQUFLLENBQUM2TCxPQUFPLEdBQUdBLE9BQU87SUFDdkI3TCxLQUFLLENBQUMrTCxPQUFPLEdBQUdBLE9BQU87SUFDdkIvTCxLQUFLLENBQUN5TCxNQUFNLEdBQUcsQ0FBQyxDQUFDQSxNQUFNO0lBQ3ZCekwsS0FBSyxDQUFDMkgsTUFBTSxHQUFHQSxNQUFNO0lBQ3JCM0gsS0FBSyxDQUFDd0wsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDQSxnQkFBZ0I7SUFDM0NuTSxNQUFNLENBQUNFLEtBQUssQ0FBQ2Esb0JBQW9CLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQzs7SUFFaEQsSUFBSXVMLHVCQUF1QixFQUFFO01BQzNCcEcsaUJBQWlCLENBQUNvRyx1QkFBdUIsRUFBRTNMLEtBQUssRUFBRSxTQUFTLEVBQUU0TCxVQUFVLEVBQUVDLE9BQU8sQ0FBQztNQUVqRnRHLGlCQUFpQixDQUFDb0csdUJBQXVCLEVBQUUzTCxLQUFLLEVBQUUsU0FBUyxFQUFFOEwsVUFBVSxFQUFFQyxPQUFPLENBQUM7TUFFakZ4RyxpQkFBaUIsQ0FBQ29HLHVCQUF1QixFQUFFM0wsS0FBSyxFQUFFLFNBQVMsRUFBRWdNLFVBQVUsRUFBRWhNLEtBQUssQ0FBQ2lNLE9BQU8sQ0FBQztNQUV2RjFHLGlCQUFpQixDQUFDb0csdUJBQXVCLEVBQUUzTCxLQUFLLEVBQUUsU0FBUyxFQUFFa00sVUFBVSxFQUFFbE0sS0FBSyxDQUFDbU0sT0FBTyxDQUFDO0lBQ3pGO0lBRUE5TSxNQUFNLENBQUN3QyxZQUFZLENBQUMsaUJBQWlCLEVBQUVnSyxPQUFPLEdBQUcsR0FBRyxHQUFHRSxPQUFPLENBQUM7RUFDakUsQ0FBQztFQUNHckUsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLENBQUNySSxNQUFNLEVBQUUwQyxPQUFPLEVBQUU7SUFDOUQsSUFBSS9CLEtBQUssR0FBR1gsTUFBTSxDQUFDTSxLQUFLLElBQUksSUFBSTVELGtEQUFPLENBQUNzRCxNQUFNLENBQUM7SUFFL0MsSUFBSSxHQUFHLElBQUlXLEtBQUssSUFBSSxDQUFDK0IsT0FBTyxJQUFJLENBQUMvQixLQUFLLENBQUMrQixPQUFPLEVBQUU7TUFDOUMsT0FBTy9CLEtBQUs7SUFDZDtJQUVBLElBQUlULEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLO01BQ3BCaU4sY0FBYyxHQUFHeE0sS0FBSyxDQUFDSCxNQUFNLEdBQUcsQ0FBQztNQUNqQ3VILEVBQUUsR0FBRyxJQUFJO01BQ1RwQixHQUFHLEdBQUcsS0FBSztNQUNYakQsRUFBRSxHQUFHQyxnQkFBZ0IsQ0FBQzNELE1BQU0sQ0FBQztNQUM3QnNJLE1BQU0sR0FBRzlFLG9CQUFvQixDQUFDeEQsTUFBTSxFQUFFZSxvQkFBb0IsQ0FBQyxJQUFJLEdBQUc7TUFDbEVVLENBQUM7TUFDRG9FLENBQUM7TUFDRHVILENBQUM7TUFDRDVNLE1BQU07TUFDTkMsTUFBTTtNQUNONE0sUUFBUTtNQUNSQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsS0FBSztNQUNMQyxLQUFLO01BQ0xDLFdBQVc7TUFDWGxCLE9BQU87TUFDUEUsT0FBTztNQUNQakIsTUFBTTtNQUNOa0MsS0FBSztNQUNMQyxHQUFHO01BQ0hDLEdBQUc7TUFDSHRNLENBQUM7TUFDRDdCLENBQUM7TUFDREwsQ0FBQztNQUNEeU0sQ0FBQztNQUNEZ0MsR0FBRztNQUNIQyxHQUFHO01BQ0hDLEVBQUU7TUFDRkMsRUFBRTtNQUNGQyxFQUFFO01BQ0ZDLEdBQUc7TUFDSEMsR0FBRztNQUNIQyxHQUFHO01BQ0hDLEdBQUc7TUFDSEMsR0FBRztNQUNIQyxHQUFHO0lBQ1AvTSxDQUFDLEdBQUdvRSxDQUFDLEdBQUd1SCxDQUFDLEdBQUdDLFFBQVEsR0FBR0MsU0FBUyxHQUFHQyxTQUFTLEdBQUdDLEtBQUssR0FBR0MsS0FBSyxHQUFHQyxXQUFXLEdBQUcsQ0FBQztJQUM5RWxOLE1BQU0sR0FBR0MsTUFBTSxHQUFHLENBQUM7SUFDbkJFLEtBQUssQ0FBQ2tCLEdBQUcsR0FBRyxDQUFDLEVBQUU3QixNQUFNLENBQUMrRixNQUFNLElBQUlELE1BQU0sQ0FBQzlGLE1BQU0sQ0FBQyxDQUFDO0lBRS9DLElBQUkwRCxFQUFFLENBQUN6QixTQUFTLEVBQUU7TUFDaEI7TUFDQSxJQUFJeUIsRUFBRSxDQUFDekIsU0FBUyxLQUFLLE1BQU0sSUFBSXlCLEVBQUUsQ0FBQy9FLEtBQUssS0FBSyxNQUFNLElBQUkrRSxFQUFFLENBQUMrSyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQzFFdk8sS0FBSyxDQUFDWSxjQUFjLENBQUMsR0FBRyxDQUFDNEMsRUFBRSxDQUFDekIsU0FBUyxLQUFLLE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQ3lCLEVBQUUsQ0FBQ3pCLFNBQVMsR0FBRyxNQUFNLEVBQUVaLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3FOLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsS0FBSy9HLEVBQUUsQ0FBQytLLE1BQU0sS0FBSyxNQUFNLEdBQUcsU0FBUyxHQUFHL0ssRUFBRSxDQUFDK0ssTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSS9LLEVBQUUsQ0FBQy9FLEtBQUssS0FBSyxNQUFNLEdBQUcsUUFBUSxHQUFHK0UsRUFBRSxDQUFDL0UsS0FBSyxDQUFDMEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDb0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSS9HLEVBQUUsQ0FBQzVDLGNBQWMsQ0FBQyxLQUFLLE1BQU0sR0FBRzRDLEVBQUUsQ0FBQzVDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztNQUNwVjtNQUVBWixLQUFLLENBQUN2QixLQUFLLEdBQUd1QixLQUFLLENBQUN1TyxNQUFNLEdBQUd2TyxLQUFLLENBQUMrQixTQUFTLEdBQUcsTUFBTTtJQUN2RDtJQUVBd0osTUFBTSxHQUFHRixVQUFVLENBQUN2TCxNQUFNLEVBQUVXLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQztJQUV0QyxJQUFJbEIsS0FBSyxDQUFDa0IsR0FBRyxFQUFFO01BQ2IsSUFBSWxCLEtBQUssQ0FBQytCLE9BQU8sRUFBRTtRQUNqQjtRQUNBdUwsRUFBRSxHQUFHak8sTUFBTSxDQUFDaUYsT0FBTyxDQUFDLENBQUM7UUFDckJxRCxNQUFNLEdBQUczSCxLQUFLLENBQUM2TCxPQUFPLEdBQUd5QixFQUFFLENBQUN4TSxDQUFDLEdBQUcsS0FBSyxJQUFJZCxLQUFLLENBQUMrTCxPQUFPLEdBQUd1QixFQUFFLENBQUNwSSxDQUFDLENBQUMsR0FBRyxJQUFJO1FBQ3JFbUksRUFBRSxHQUFHLEVBQUU7TUFDVCxDQUFDLE1BQU07UUFDTEEsRUFBRSxHQUFHLENBQUN0TCxPQUFPLElBQUkxQyxNQUFNLENBQUN0RixZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO01BQzNEOztNQUVBd1IsZUFBZSxDQUFDbE0sTUFBTSxFQUFFZ08sRUFBRSxJQUFJMUYsTUFBTSxFQUFFLENBQUMsQ0FBQzBGLEVBQUUsSUFBSXJOLEtBQUssQ0FBQ3dMLGdCQUFnQixFQUFFeEwsS0FBSyxDQUFDeUwsTUFBTSxLQUFLLEtBQUssRUFBRVgsTUFBTSxDQUFDO0lBQ3ZHO0lBRUFlLE9BQU8sR0FBRzdMLEtBQUssQ0FBQzZMLE9BQU8sSUFBSSxDQUFDO0lBQzVCRSxPQUFPLEdBQUcvTCxLQUFLLENBQUMrTCxPQUFPLElBQUksQ0FBQztJQUU1QixJQUFJakIsTUFBTSxLQUFLUixpQkFBaUIsRUFBRTtNQUNoQzFKLENBQUMsR0FBR2tLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVmL0wsQ0FBQyxHQUFHK0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRWZwTSxDQUFDLEdBQUdvTSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFZkssQ0FBQyxHQUFHTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFZmhLLENBQUMsR0FBR3FNLEdBQUcsR0FBR3JDLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDbkI1RixDQUFDLEdBQUdrSSxHQUFHLEdBQUd0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFckIsSUFBSUEsTUFBTSxDQUFDaFMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QitHLE1BQU0sR0FBR3ZDLElBQUksQ0FBQzBRLElBQUksQ0FBQ3BOLENBQUMsR0FBR0EsQ0FBQyxHQUFHN0IsQ0FBQyxHQUFHQSxDQUFDLENBQUM7UUFDakNlLE1BQU0sR0FBR3hDLElBQUksQ0FBQzBRLElBQUksQ0FBQzdDLENBQUMsR0FBR0EsQ0FBQyxHQUFHek0sQ0FBQyxHQUFHQSxDQUFDLENBQUM7UUFDakNnTyxRQUFRLEdBQUc5TCxDQUFDLElBQUk3QixDQUFDLEdBQUd0QixNQUFNLENBQUNzQixDQUFDLEVBQUU2QixDQUFDLENBQUMsR0FBR3ZELFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFFakR3UCxLQUFLLEdBQUduTyxDQUFDLElBQUl5TSxDQUFDLEdBQUcxTixNQUFNLENBQUNpQixDQUFDLEVBQUV5TSxDQUFDLENBQUMsR0FBRzlOLFFBQVEsR0FBR3FQLFFBQVEsR0FBRyxDQUFDO1FBQ3ZERyxLQUFLLEtBQUsvTSxNQUFNLElBQUl4QyxJQUFJLENBQUMyUSxHQUFHLENBQUMzUSxJQUFJLENBQUMyUCxHQUFHLENBQUNKLEtBQUssR0FBR3JQLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSXdDLEtBQUssQ0FBQ2tCLEdBQUcsRUFBRTtVQUNiSixDQUFDLElBQUkrSyxPQUFPLElBQUlBLE9BQU8sR0FBR2pMLENBQUMsR0FBR21MLE9BQU8sR0FBR3JOLENBQUMsQ0FBQztVQUMxQ3dHLENBQUMsSUFBSTZHLE9BQU8sSUFBSUYsT0FBTyxHQUFHOU0sQ0FBQyxHQUFHZ04sT0FBTyxHQUFHWixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO01BRUosQ0FBQyxNQUFNO1FBQ0wwQyxHQUFHLEdBQUcvQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2Y2QyxHQUFHLEdBQUc3QyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2YwQyxHQUFHLEdBQUcxQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2YyQyxHQUFHLEdBQUczQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2Y0QyxHQUFHLEdBQUc1QyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2hCOEMsR0FBRyxHQUFHOUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNoQmhLLENBQUMsR0FBR2dLLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZDVGLENBQUMsR0FBRzRGLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZDJCLENBQUMsR0FBRzNCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZGtDLEtBQUssR0FBR3ZQLE1BQU0sQ0FBQ29RLEdBQUcsRUFBRUgsR0FBRyxDQUFDO1FBQ3hCZixTQUFTLEdBQUdLLEtBQUssR0FBRzNQLFFBQVEsQ0FBQyxDQUFDOztRQUU5QixJQUFJMlAsS0FBSyxFQUFFO1VBQ1RDLEdBQUcsR0FBRzNQLElBQUksQ0FBQzJQLEdBQUcsQ0FBQyxDQUFDRCxLQUFLLENBQUM7VUFDdEJFLEdBQUcsR0FBRzVQLElBQUksQ0FBQzRQLEdBQUcsQ0FBQyxDQUFDRixLQUFLLENBQUM7VUFDdEJLLEVBQUUsR0FBR0YsR0FBRyxHQUFHRixHQUFHLEdBQUdPLEdBQUcsR0FBR04sR0FBRztVQUMxQkksRUFBRSxHQUFHRixHQUFHLEdBQUdILEdBQUcsR0FBR1EsR0FBRyxHQUFHUCxHQUFHO1VBQzFCSyxFQUFFLEdBQUdNLEdBQUcsR0FBR1osR0FBRyxHQUFHUyxHQUFHLEdBQUdSLEdBQUc7VUFDMUJNLEdBQUcsR0FBR0wsR0FBRyxHQUFHLENBQUNELEdBQUcsR0FBR00sR0FBRyxHQUFHUCxHQUFHO1VBQzVCUSxHQUFHLEdBQUdMLEdBQUcsR0FBRyxDQUFDRixHQUFHLEdBQUdPLEdBQUcsR0FBR1IsR0FBRztVQUM1QlMsR0FBRyxHQUFHRyxHQUFHLEdBQUcsQ0FBQ1gsR0FBRyxHQUFHUSxHQUFHLEdBQUdULEdBQUc7VUFDNUJXLEdBQUcsR0FBR0QsR0FBRyxHQUFHLENBQUNULEdBQUcsR0FBR1UsR0FBRyxHQUFHWCxHQUFHO1VBQzVCRSxHQUFHLEdBQUdFLEVBQUU7VUFDUkQsR0FBRyxHQUFHRSxFQUFFO1VBQ1JPLEdBQUcsR0FBR04sRUFBRTtRQUNWLENBQUMsQ0FBQzs7UUFHRlAsS0FBSyxHQUFHdlAsTUFBTSxDQUFDLENBQUNpQixDQUFDLEVBQUVnUCxHQUFHLENBQUM7UUFDdkJkLFNBQVMsR0FBR0ksS0FBSyxHQUFHM1AsUUFBUTtRQUU1QixJQUFJMlAsS0FBSyxFQUFFO1VBQ1RDLEdBQUcsR0FBRzNQLElBQUksQ0FBQzJQLEdBQUcsQ0FBQyxDQUFDRCxLQUFLLENBQUM7VUFDdEJFLEdBQUcsR0FBRzVQLElBQUksQ0FBQzRQLEdBQUcsQ0FBQyxDQUFDRixLQUFLLENBQUM7VUFDdEJLLEVBQUUsR0FBR3pNLENBQUMsR0FBR3FNLEdBQUcsR0FBR08sR0FBRyxHQUFHTixHQUFHO1VBQ3hCSSxFQUFFLEdBQUd2TyxDQUFDLEdBQUdrTyxHQUFHLEdBQUdRLEdBQUcsR0FBR1AsR0FBRztVQUN4QkssRUFBRSxHQUFHN08sQ0FBQyxHQUFHdU8sR0FBRyxHQUFHUyxHQUFHLEdBQUdSLEdBQUc7VUFDeEJVLEdBQUcsR0FBR3pDLENBQUMsR0FBRytCLEdBQUcsR0FBR1UsR0FBRyxHQUFHWCxHQUFHO1VBQ3pCck0sQ0FBQyxHQUFHeU0sRUFBRTtVQUNOdE8sQ0FBQyxHQUFHdU8sRUFBRTtVQUNONU8sQ0FBQyxHQUFHNk8sRUFBRTtRQUNSLENBQUMsQ0FBQzs7UUFHRlAsS0FBSyxHQUFHdlAsTUFBTSxDQUFDc0IsQ0FBQyxFQUFFNkIsQ0FBQyxDQUFDO1FBQ3BCOEwsUUFBUSxHQUFHTSxLQUFLLEdBQUczUCxRQUFRO1FBRTNCLElBQUkyUCxLQUFLLEVBQUU7VUFDVEMsR0FBRyxHQUFHM1AsSUFBSSxDQUFDMlAsR0FBRyxDQUFDRCxLQUFLLENBQUM7VUFDckJFLEdBQUcsR0FBRzVQLElBQUksQ0FBQzRQLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1VBQ3JCSyxFQUFFLEdBQUd6TSxDQUFDLEdBQUdxTSxHQUFHLEdBQUdsTyxDQUFDLEdBQUdtTyxHQUFHO1VBQ3RCSSxFQUFFLEdBQUdILEdBQUcsR0FBR0YsR0FBRyxHQUFHRyxHQUFHLEdBQUdGLEdBQUc7VUFDMUJuTyxDQUFDLEdBQUdBLENBQUMsR0FBR2tPLEdBQUcsR0FBR3JNLENBQUMsR0FBR3NNLEdBQUc7VUFDckJFLEdBQUcsR0FBR0EsR0FBRyxHQUFHSCxHQUFHLEdBQUdFLEdBQUcsR0FBR0QsR0FBRztVQUMzQnRNLENBQUMsR0FBR3lNLEVBQUU7VUFDTkYsR0FBRyxHQUFHRyxFQUFFO1FBQ1Y7UUFFQSxJQUFJWCxTQUFTLElBQUlyUCxJQUFJLENBQUMyUSxHQUFHLENBQUN0QixTQUFTLENBQUMsR0FBR3JQLElBQUksQ0FBQzJRLEdBQUcsQ0FBQ3ZCLFFBQVEsQ0FBQyxHQUFHLEtBQUssRUFBRTtVQUNqRTtVQUNBQyxTQUFTLEdBQUdELFFBQVEsR0FBRyxDQUFDO1VBQ3hCRSxTQUFTLEdBQUcsR0FBRyxHQUFHQSxTQUFTO1FBQzdCO1FBRUEvTSxNQUFNLEdBQUcxRCxxREFBTSxDQUFDbUIsSUFBSSxDQUFDMFEsSUFBSSxDQUFDcE4sQ0FBQyxHQUFHQSxDQUFDLEdBQUc3QixDQUFDLEdBQUdBLENBQUMsR0FBR0wsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQztRQUNqRG9CLE1BQU0sR0FBRzNELHFEQUFNLENBQUNtQixJQUFJLENBQUMwUSxJQUFJLENBQUNaLEdBQUcsR0FBR0EsR0FBRyxHQUFHUyxHQUFHLEdBQUdBLEdBQUcsQ0FBQyxDQUFDO1FBQ2pEYixLQUFLLEdBQUd2UCxNQUFNLENBQUMwUCxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUN4QlAsS0FBSyxHQUFHdlAsSUFBSSxDQUFDMlEsR0FBRyxDQUFDakIsS0FBSyxDQUFDLEdBQUcsTUFBTSxHQUFHQSxLQUFLLEdBQUczUCxRQUFRLEdBQUcsQ0FBQztRQUN2RDBQLFdBQVcsR0FBR2EsR0FBRyxHQUFHLENBQUMsSUFBSUEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFDcEQ7TUFFQSxJQUFJNU4sS0FBSyxDQUFDa0IsR0FBRyxFQUFFO1FBQ2I7UUFDQW1NLEVBQUUsR0FBR2hPLE1BQU0sQ0FBQ3RGLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDckNpRyxLQUFLLENBQUNrTyxRQUFRLEdBQUc3TyxNQUFNLENBQUN3QyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMySSxnQkFBZ0IsQ0FBQzNILG9CQUFvQixDQUFDeEQsTUFBTSxFQUFFYyxjQUFjLENBQUMsQ0FBQztRQUN4SGtOLEVBQUUsSUFBSWhPLE1BQU0sQ0FBQ3dDLFlBQVksQ0FBQyxXQUFXLEVBQUV3TCxFQUFFLENBQUM7TUFDNUM7SUFDRjtJQUVBLElBQUkvUCxJQUFJLENBQUMyUSxHQUFHLENBQUNwQixLQUFLLENBQUMsR0FBRyxFQUFFLElBQUl2UCxJQUFJLENBQUMyUSxHQUFHLENBQUNwQixLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUU7TUFDakQsSUFBSUwsY0FBYyxFQUFFO1FBQ2xCM00sTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNaZ04sS0FBSyxJQUFJSCxRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7UUFDbkNBLFFBQVEsSUFBSUEsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHO01BQ3hDLENBQUMsTUFBTTtRQUNMNU0sTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNaK00sS0FBSyxJQUFJQSxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7TUFDbEM7SUFDRjtJQUVBOUssT0FBTyxHQUFHQSxPQUFPLElBQUkvQixLQUFLLENBQUMrQixPQUFPO0lBQ2xDL0IsS0FBSyxDQUFDYyxDQUFDLEdBQUdBLENBQUMsSUFBSSxDQUFDZCxLQUFLLENBQUNtTyxRQUFRLEdBQUdyTixDQUFDLEtBQUssQ0FBQ2lCLE9BQU8sSUFBSS9CLEtBQUssQ0FBQ21PLFFBQVEsS0FBSzdRLElBQUksQ0FBQ2tCLEtBQUssQ0FBQ2EsTUFBTSxDQUFDK08sV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLOVEsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLENBQUNzQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJekIsTUFBTSxDQUFDK08sV0FBVyxHQUFHcE8sS0FBSyxDQUFDbU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRy9HLEVBQUU7SUFDOUxwSCxLQUFLLENBQUNrRixDQUFDLEdBQUdBLENBQUMsSUFBSSxDQUFDbEYsS0FBSyxDQUFDcU8sUUFBUSxHQUFHbkosQ0FBQyxLQUFLLENBQUNuRCxPQUFPLElBQUkvQixLQUFLLENBQUNxTyxRQUFRLEtBQUsvUSxJQUFJLENBQUNrQixLQUFLLENBQUNhLE1BQU0sQ0FBQ2lQLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBS2hSLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDMEcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTdGLE1BQU0sQ0FBQ2lQLFlBQVksR0FBR3RPLEtBQUssQ0FBQ3FPLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUdqSCxFQUFFO0lBQ2hNcEgsS0FBSyxDQUFDeU0sQ0FBQyxHQUFHQSxDQUFDLEdBQUdyRixFQUFFO0lBQ2hCcEgsS0FBSyxDQUFDSCxNQUFNLEdBQUcxRCxxREFBTSxDQUFDMEQsTUFBTSxDQUFDO0lBQzdCRyxLQUFLLENBQUNGLE1BQU0sR0FBRzNELHFEQUFNLENBQUMyRCxNQUFNLENBQUM7SUFDN0JFLEtBQUssQ0FBQzBNLFFBQVEsR0FBR3ZRLHFEQUFNLENBQUN1USxRQUFRLENBQUMsR0FBRzFHLEdBQUc7SUFDdkNoRyxLQUFLLENBQUMyTSxTQUFTLEdBQUd4USxxREFBTSxDQUFDd1EsU0FBUyxDQUFDLEdBQUczRyxHQUFHO0lBQ3pDaEcsS0FBSyxDQUFDNE0sU0FBUyxHQUFHelEscURBQU0sQ0FBQ3lRLFNBQVMsQ0FBQyxHQUFHNUcsR0FBRztJQUN6Q2hHLEtBQUssQ0FBQzZNLEtBQUssR0FBR0EsS0FBSyxHQUFHN0csR0FBRztJQUN6QmhHLEtBQUssQ0FBQzhNLEtBQUssR0FBR0EsS0FBSyxHQUFHOUcsR0FBRztJQUN6QmhHLEtBQUssQ0FBQ3VPLG9CQUFvQixHQUFHeEIsV0FBVyxHQUFHM0YsRUFBRTtJQUU3QyxJQUFJcEgsS0FBSyxDQUFDNkgsT0FBTyxHQUFHcEIsVUFBVSxDQUFDa0IsTUFBTSxDQUFDakgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ3pEbkIsS0FBSyxDQUFDYSxvQkFBb0IsQ0FBQyxHQUFHd0gsYUFBYSxDQUFDRCxNQUFNLENBQUM7SUFDckQ7SUFFQTNILEtBQUssQ0FBQ2lNLE9BQU8sR0FBR2pNLEtBQUssQ0FBQ21NLE9BQU8sR0FBRyxDQUFDO0lBQ2pDbk0sS0FBSyxDQUFDd08sT0FBTyxHQUFHdlMsa0RBQU8sQ0FBQ3VTLE9BQU87SUFDL0J4TyxLQUFLLENBQUNDLGVBQWUsR0FBR0QsS0FBSyxDQUFDa0IsR0FBRyxHQUFHdU4sb0JBQW9CLEdBQUdsTSxXQUFXLEdBQUdtTSxvQkFBb0IsR0FBR0Msc0JBQXNCO0lBQ3RIM08sS0FBSyxDQUFDK0IsT0FBTyxHQUFHLENBQUM7SUFDakIsT0FBTy9CLEtBQUs7RUFDZCxDQUFDO0VBQ0c0SCxhQUFhLEdBQUcsU0FBU0EsYUFBYUEsQ0FBQzNJLEtBQUssRUFBRTtJQUNoRCxPQUFPLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDeUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR3pCLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDdkQsQ0FBQztFQUNHO0VBQ0oyUCxlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ3ZQLE1BQU0sRUFBRTRJLEtBQUssRUFBRWhKLEtBQUssRUFBRTtJQUMvRCxJQUFJc0gsSUFBSSxHQUFHbkwsc0RBQU8sQ0FBQzZNLEtBQUssQ0FBQztJQUN6QixPQUFPOUwscURBQU0sQ0FBQ3NLLFVBQVUsQ0FBQ3dCLEtBQUssQ0FBQyxHQUFHeEIsVUFBVSxDQUFDSCxjQUFjLENBQUNqSCxNQUFNLEVBQUUsR0FBRyxFQUFFSixLQUFLLEdBQUcsSUFBSSxFQUFFc0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxJQUFJO0VBQ3ZHLENBQUM7RUFDR29JLHNCQUFzQixHQUFHLFNBQVNBLHNCQUFzQkEsQ0FBQ3hRLEtBQUssRUFBRTZCLEtBQUssRUFBRTtJQUN6RUEsS0FBSyxDQUFDeU0sQ0FBQyxHQUFHLEtBQUs7SUFDZnpNLEtBQUssQ0FBQzRNLFNBQVMsR0FBRzVNLEtBQUssQ0FBQzJNLFNBQVMsR0FBRyxNQUFNO0lBQzFDM00sS0FBSyxDQUFDd08sT0FBTyxHQUFHLENBQUM7SUFFakJFLG9CQUFvQixDQUFDdlEsS0FBSyxFQUFFNkIsS0FBSyxDQUFDO0VBQ3BDLENBQUM7RUFDRzZPLFFBQVEsR0FBRyxNQUFNO0VBQ2pCQyxPQUFPLEdBQUcsS0FBSztFQUNmQyxlQUFlLEdBQUcsSUFBSTtFQUN0Qkwsb0JBQW9CLEdBQUcsU0FBU0Esb0JBQW9CQSxDQUFDdlEsS0FBSyxFQUFFNkIsS0FBSyxFQUFFO0lBQ3JFLElBQUlnUCxJQUFJLEdBQUdoUCxLQUFLLElBQUksSUFBSTtNQUNwQm1PLFFBQVEsR0FBR2EsSUFBSSxDQUFDYixRQUFRO01BQ3hCRSxRQUFRLEdBQUdXLElBQUksQ0FBQ1gsUUFBUTtNQUN4QnZOLENBQUMsR0FBR2tPLElBQUksQ0FBQ2xPLENBQUM7TUFDVm9FLENBQUMsR0FBRzhKLElBQUksQ0FBQzlKLENBQUM7TUFDVnVILENBQUMsR0FBR3VDLElBQUksQ0FBQ3ZDLENBQUM7TUFDVkMsUUFBUSxHQUFHc0MsSUFBSSxDQUFDdEMsUUFBUTtNQUN4QkUsU0FBUyxHQUFHb0MsSUFBSSxDQUFDcEMsU0FBUztNQUMxQkQsU0FBUyxHQUFHcUMsSUFBSSxDQUFDckMsU0FBUztNQUMxQkUsS0FBSyxHQUFHbUMsSUFBSSxDQUFDbkMsS0FBSztNQUNsQkMsS0FBSyxHQUFHa0MsSUFBSSxDQUFDbEMsS0FBSztNQUNsQmpOLE1BQU0sR0FBR21QLElBQUksQ0FBQ25QLE1BQU07TUFDcEJDLE1BQU0sR0FBR2tQLElBQUksQ0FBQ2xQLE1BQU07TUFDcEJ5TyxvQkFBb0IsR0FBR1MsSUFBSSxDQUFDVCxvQkFBb0I7TUFDaERDLE9BQU8sR0FBR1EsSUFBSSxDQUFDUixPQUFPO01BQ3RCblAsTUFBTSxHQUFHMlAsSUFBSSxDQUFDM1AsTUFBTTtNQUNwQndJLE9BQU8sR0FBR21ILElBQUksQ0FBQ25ILE9BQU87TUFDdEJvSCxVQUFVLEdBQUcsRUFBRTtNQUNmQyxLQUFLLEdBQUdWLE9BQU8sS0FBSyxNQUFNLElBQUlyUSxLQUFLLElBQUlBLEtBQUssS0FBSyxDQUFDLElBQUlxUSxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7O0lBRzVFLElBQUkzRyxPQUFPLEtBQUs4RSxTQUFTLEtBQUtrQyxRQUFRLElBQUlqQyxTQUFTLEtBQUtpQyxRQUFRLENBQUMsRUFBRTtNQUNqRSxJQUFJN0IsS0FBSyxHQUFHdkcsVUFBVSxDQUFDbUcsU0FBUyxDQUFDLEdBQUdwUCxRQUFRO1FBQ3hDZ1EsR0FBRyxHQUFHbFEsSUFBSSxDQUFDNFAsR0FBRyxDQUFDRixLQUFLLENBQUM7UUFDckJVLEdBQUcsR0FBR3BRLElBQUksQ0FBQzJQLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDO1FBQ3JCQyxHQUFHO01BRVBELEtBQUssR0FBR3ZHLFVBQVUsQ0FBQ2tHLFNBQVMsQ0FBQyxHQUFHblAsUUFBUTtNQUN4Q3lQLEdBQUcsR0FBRzNQLElBQUksQ0FBQzJQLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDO01BQ3JCbE0sQ0FBQyxHQUFHOE4sZUFBZSxDQUFDdlAsTUFBTSxFQUFFeUIsQ0FBQyxFQUFFME0sR0FBRyxHQUFHUCxHQUFHLEdBQUcsQ0FBQ3BGLE9BQU8sQ0FBQztNQUNwRDNDLENBQUMsR0FBRzBKLGVBQWUsQ0FBQ3ZQLE1BQU0sRUFBRTZGLENBQUMsRUFBRSxDQUFDNUgsSUFBSSxDQUFDNFAsR0FBRyxDQUFDRixLQUFLLENBQUMsR0FBRyxDQUFDbkYsT0FBTyxDQUFDO01BQzNENEUsQ0FBQyxHQUFHbUMsZUFBZSxDQUFDdlAsTUFBTSxFQUFFb04sQ0FBQyxFQUFFaUIsR0FBRyxHQUFHVCxHQUFHLEdBQUcsQ0FBQ3BGLE9BQU8sR0FBR0EsT0FBTyxDQUFDO0lBQ2hFO0lBRUEsSUFBSTBHLG9CQUFvQixLQUFLTyxPQUFPLEVBQUU7TUFDcENHLFVBQVUsSUFBSSxjQUFjLEdBQUdWLG9CQUFvQixHQUFHUSxlQUFlO0lBQ3ZFO0lBRUEsSUFBSVosUUFBUSxJQUFJRSxRQUFRLEVBQUU7TUFDeEJZLFVBQVUsSUFBSSxZQUFZLEdBQUdkLFFBQVEsR0FBRyxLQUFLLEdBQUdFLFFBQVEsR0FBRyxLQUFLO0lBQ2xFO0lBRUEsSUFBSWEsS0FBSyxJQUFJcE8sQ0FBQyxLQUFLZ08sT0FBTyxJQUFJNUosQ0FBQyxLQUFLNEosT0FBTyxJQUFJckMsQ0FBQyxLQUFLcUMsT0FBTyxFQUFFO01BQzVERyxVQUFVLElBQUl4QyxDQUFDLEtBQUtxQyxPQUFPLElBQUlJLEtBQUssR0FBRyxjQUFjLEdBQUdwTyxDQUFDLEdBQUcsSUFBSSxHQUFHb0UsQ0FBQyxHQUFHLElBQUksR0FBR3VILENBQUMsR0FBRyxJQUFJLEdBQUcsWUFBWSxHQUFHM0wsQ0FBQyxHQUFHLElBQUksR0FBR29FLENBQUMsR0FBRzZKLGVBQWU7SUFDeEk7SUFFQSxJQUFJckMsUUFBUSxLQUFLbUMsUUFBUSxFQUFFO01BQ3pCSSxVQUFVLElBQUksU0FBUyxHQUFHdkMsUUFBUSxHQUFHcUMsZUFBZTtJQUN0RDtJQUVBLElBQUluQyxTQUFTLEtBQUtpQyxRQUFRLEVBQUU7TUFDMUJJLFVBQVUsSUFBSSxVQUFVLEdBQUdyQyxTQUFTLEdBQUdtQyxlQUFlO0lBQ3hEO0lBRUEsSUFBSXBDLFNBQVMsS0FBS2tDLFFBQVEsRUFBRTtNQUMxQkksVUFBVSxJQUFJLFVBQVUsR0FBR3RDLFNBQVMsR0FBR29DLGVBQWU7SUFDeEQ7SUFFQSxJQUFJbEMsS0FBSyxLQUFLZ0MsUUFBUSxJQUFJL0IsS0FBSyxLQUFLK0IsUUFBUSxFQUFFO01BQzVDSSxVQUFVLElBQUksT0FBTyxHQUFHcEMsS0FBSyxHQUFHLElBQUksR0FBR0MsS0FBSyxHQUFHaUMsZUFBZTtJQUNoRTtJQUVBLElBQUlsUCxNQUFNLEtBQUssQ0FBQyxJQUFJQyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ2hDbVAsVUFBVSxJQUFJLFFBQVEsR0FBR3BQLE1BQU0sR0FBRyxJQUFJLEdBQUdDLE1BQU0sR0FBR2lQLGVBQWU7SUFDbkU7SUFFQTFQLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDWSxjQUFjLENBQUMsR0FBRzhPLFVBQVUsSUFBSSxpQkFBaUI7RUFDaEUsQ0FBQztFQUNHUixvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUN0USxLQUFLLEVBQUU2QixLQUFLLEVBQUU7SUFDckUsSUFBSW1QLEtBQUssR0FBR25QLEtBQUssSUFBSSxJQUFJO01BQ3JCbU8sUUFBUSxHQUFHZ0IsS0FBSyxDQUFDaEIsUUFBUTtNQUN6QkUsUUFBUSxHQUFHYyxLQUFLLENBQUNkLFFBQVE7TUFDekJ2TixDQUFDLEdBQUdxTyxLQUFLLENBQUNyTyxDQUFDO01BQ1hvRSxDQUFDLEdBQUdpSyxLQUFLLENBQUNqSyxDQUFDO01BQ1h3SCxRQUFRLEdBQUd5QyxLQUFLLENBQUN6QyxRQUFRO01BQ3pCRyxLQUFLLEdBQUdzQyxLQUFLLENBQUN0QyxLQUFLO01BQ25CQyxLQUFLLEdBQUdxQyxLQUFLLENBQUNyQyxLQUFLO01BQ25Cak4sTUFBTSxHQUFHc1AsS0FBSyxDQUFDdFAsTUFBTTtNQUNyQkMsTUFBTSxHQUFHcVAsS0FBSyxDQUFDclAsTUFBTTtNQUNyQlQsTUFBTSxHQUFHOFAsS0FBSyxDQUFDOVAsTUFBTTtNQUNyQndNLE9BQU8sR0FBR3NELEtBQUssQ0FBQ3RELE9BQU87TUFDdkJFLE9BQU8sR0FBR29ELEtBQUssQ0FBQ3BELE9BQU87TUFDdkJFLE9BQU8sR0FBR2tELEtBQUssQ0FBQ2xELE9BQU87TUFDdkJFLE9BQU8sR0FBR2dELEtBQUssQ0FBQ2hELE9BQU87TUFDdkIrQixRQUFRLEdBQUdpQixLQUFLLENBQUNqQixRQUFRO01BQ3pCOUIsRUFBRSxHQUFHM0YsVUFBVSxDQUFDM0YsQ0FBQyxDQUFDO01BQ2xCdUwsRUFBRSxHQUFHNUYsVUFBVSxDQUFDdkIsQ0FBQyxDQUFDO01BQ2xCa0ssR0FBRztNQUNIQyxHQUFHO01BQ0hsQyxHQUFHO01BQ0hDLEdBQUc7TUFDSHJDLElBQUk7SUFFUjJCLFFBQVEsR0FBR2pHLFVBQVUsQ0FBQ2lHLFFBQVEsQ0FBQztJQUMvQkcsS0FBSyxHQUFHcEcsVUFBVSxDQUFDb0csS0FBSyxDQUFDO0lBQ3pCQyxLQUFLLEdBQUdyRyxVQUFVLENBQUNxRyxLQUFLLENBQUM7SUFFekIsSUFBSUEsS0FBSyxFQUFFO01BQ1Q7TUFDQUEsS0FBSyxHQUFHckcsVUFBVSxDQUFDcUcsS0FBSyxDQUFDO01BQ3pCRCxLQUFLLElBQUlDLEtBQUs7TUFDZEosUUFBUSxJQUFJSSxLQUFLO0lBQ25CO0lBRUEsSUFBSUosUUFBUSxJQUFJRyxLQUFLLEVBQUU7TUFDckJILFFBQVEsSUFBSWxQLFFBQVE7TUFDcEJxUCxLQUFLLElBQUlyUCxRQUFRO01BQ2pCNFIsR0FBRyxHQUFHOVIsSUFBSSxDQUFDMlAsR0FBRyxDQUFDUCxRQUFRLENBQUMsR0FBRzdNLE1BQU07TUFDakN3UCxHQUFHLEdBQUcvUixJQUFJLENBQUM0UCxHQUFHLENBQUNSLFFBQVEsQ0FBQyxHQUFHN00sTUFBTTtNQUNqQ3NOLEdBQUcsR0FBRzdQLElBQUksQ0FBQzRQLEdBQUcsQ0FBQ1IsUUFBUSxHQUFHRyxLQUFLLENBQUMsR0FBRyxDQUFDL00sTUFBTTtNQUMxQ3NOLEdBQUcsR0FBRzlQLElBQUksQ0FBQzJQLEdBQUcsQ0FBQ1AsUUFBUSxHQUFHRyxLQUFLLENBQUMsR0FBRy9NLE1BQU07TUFFekMsSUFBSStNLEtBQUssRUFBRTtRQUNUQyxLQUFLLElBQUl0UCxRQUFRO1FBQ2pCdU4sSUFBSSxHQUFHek4sSUFBSSxDQUFDZ1MsR0FBRyxDQUFDekMsS0FBSyxHQUFHQyxLQUFLLENBQUM7UUFDOUIvQixJQUFJLEdBQUd6TixJQUFJLENBQUMwUSxJQUFJLENBQUMsQ0FBQyxHQUFHakQsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakNvQyxHQUFHLElBQUlwQyxJQUFJO1FBQ1hxQyxHQUFHLElBQUlyQyxJQUFJO1FBRVgsSUFBSStCLEtBQUssRUFBRTtVQUNUL0IsSUFBSSxHQUFHek4sSUFBSSxDQUFDZ1MsR0FBRyxDQUFDeEMsS0FBSyxDQUFDO1VBQ3RCL0IsSUFBSSxHQUFHek4sSUFBSSxDQUFDMFEsSUFBSSxDQUFDLENBQUMsR0FBR2pELElBQUksR0FBR0EsSUFBSSxDQUFDO1VBQ2pDcUUsR0FBRyxJQUFJckUsSUFBSTtVQUNYc0UsR0FBRyxJQUFJdEUsSUFBSTtRQUNiO01BQ0Y7TUFFQXFFLEdBQUcsR0FBR2pULHFEQUFNLENBQUNpVCxHQUFHLENBQUM7TUFDakJDLEdBQUcsR0FBR2xULHFEQUFNLENBQUNrVCxHQUFHLENBQUM7TUFDakJsQyxHQUFHLEdBQUdoUixxREFBTSxDQUFDZ1IsR0FBRyxDQUFDO01BQ2pCQyxHQUFHLEdBQUdqUixxREFBTSxDQUFDaVIsR0FBRyxDQUFDO0lBQ25CLENBQUMsTUFBTTtNQUNMZ0MsR0FBRyxHQUFHdlAsTUFBTTtNQUNadU4sR0FBRyxHQUFHdE4sTUFBTTtNQUNadVAsR0FBRyxHQUFHbEMsR0FBRyxHQUFHLENBQUM7SUFDZjtJQUVBLElBQUlmLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQ3RMLENBQUMsR0FBRyxFQUFFLEVBQUVMLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSTRMLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQ25ILENBQUMsR0FBRyxFQUFFLEVBQUV6RSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDcEUyTCxFQUFFLEdBQUc5RixjQUFjLENBQUNqSCxNQUFNLEVBQUUsR0FBRyxFQUFFeUIsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUN6Q3VMLEVBQUUsR0FBRy9GLGNBQWMsQ0FBQ2pILE1BQU0sRUFBRSxHQUFHLEVBQUU2RixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQzNDO0lBRUEsSUFBSTJHLE9BQU8sSUFBSUUsT0FBTyxJQUFJRSxPQUFPLElBQUlFLE9BQU8sRUFBRTtNQUM1Q0MsRUFBRSxHQUFHalEscURBQU0sQ0FBQ2lRLEVBQUUsR0FBR1AsT0FBTyxJQUFJQSxPQUFPLEdBQUd1RCxHQUFHLEdBQUdyRCxPQUFPLEdBQUdvQixHQUFHLENBQUMsR0FBR2xCLE9BQU8sQ0FBQztNQUNyRUksRUFBRSxHQUFHbFEscURBQU0sQ0FBQ2tRLEVBQUUsR0FBR04sT0FBTyxJQUFJRixPQUFPLEdBQUd3RCxHQUFHLEdBQUd0RCxPQUFPLEdBQUdxQixHQUFHLENBQUMsR0FBR2pCLE9BQU8sQ0FBQztJQUN2RTtJQUVBLElBQUlnQyxRQUFRLElBQUlFLFFBQVEsRUFBRTtNQUN4QjtNQUNBdEQsSUFBSSxHQUFHMUwsTUFBTSxDQUFDaUYsT0FBTyxDQUFDLENBQUM7TUFDdkI4SCxFQUFFLEdBQUdqUSxxREFBTSxDQUFDaVEsRUFBRSxHQUFHK0IsUUFBUSxHQUFHLEdBQUcsR0FBR3BELElBQUksQ0FBQy9GLEtBQUssQ0FBQztNQUM3Q3FILEVBQUUsR0FBR2xRLHFEQUFNLENBQUNrUSxFQUFFLEdBQUdnQyxRQUFRLEdBQUcsR0FBRyxHQUFHdEQsSUFBSSxDQUFDOUYsTUFBTSxDQUFDO0lBQ2hEO0lBRUE4RixJQUFJLEdBQUcsU0FBUyxHQUFHcUUsR0FBRyxHQUFHLEdBQUcsR0FBR0MsR0FBRyxHQUFHLEdBQUcsR0FBR2xDLEdBQUcsR0FBRyxHQUFHLEdBQUdDLEdBQUcsR0FBRyxHQUFHLEdBQUdoQixFQUFFLEdBQUcsR0FBRyxHQUFHQyxFQUFFLEdBQUcsR0FBRztJQUN0RmhOLE1BQU0sQ0FBQ3dDLFlBQVksQ0FBQyxXQUFXLEVBQUVrSixJQUFJLENBQUM7SUFDdENtRCxRQUFRLEtBQUs3TyxNQUFNLENBQUNFLEtBQUssQ0FBQ1ksY0FBYyxDQUFDLEdBQUc0SyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3JELENBQUM7RUFDR3dFLHVCQUF1QixHQUFHLFNBQVNBLHVCQUF1QkEsQ0FBQy9KLE1BQU0sRUFBRW5HLE1BQU0sRUFBRUMsUUFBUSxFQUFFZ0osUUFBUSxFQUFFRyxRQUFRLEVBQUU7SUFDM0csSUFBSStHLEdBQUcsR0FBRyxHQUFHO01BQ1RDLFFBQVEsR0FBR3BVLHdEQUFTLENBQUNvTixRQUFRLENBQUM7TUFDOUJDLE1BQU0sR0FBR2pDLFVBQVUsQ0FBQ2dDLFFBQVEsQ0FBQyxJQUFJZ0gsUUFBUSxJQUFJLENBQUNoSCxRQUFRLENBQUNoSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUdwRCxRQUFRLEdBQUcsQ0FBQyxDQUFDO01BQ3JGcVMsTUFBTSxHQUFHaEgsTUFBTSxHQUFHSixRQUFRO01BQzFCcUgsVUFBVSxHQUFHckgsUUFBUSxHQUFHb0gsTUFBTSxHQUFHLEtBQUs7TUFDdENFLFNBQVM7TUFDVGhLLEVBQUU7SUFFTixJQUFJNkosUUFBUSxFQUFFO01BQ1pHLFNBQVMsR0FBR25ILFFBQVEsQ0FBQy9ILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFFbEMsSUFBSWtQLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDekJGLE1BQU0sSUFBSUYsR0FBRztRQUViLElBQUlFLE1BQU0sS0FBS0EsTUFBTSxJQUFJRixHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFDakNFLE1BQU0sSUFBSUEsTUFBTSxHQUFHLENBQUMsR0FBR0YsR0FBRyxHQUFHLENBQUNBLEdBQUc7UUFDbkM7TUFDRjtNQUVBLElBQUlJLFNBQVMsS0FBSyxJQUFJLElBQUlGLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDcENBLE1BQU0sR0FBRyxDQUFDQSxNQUFNLEdBQUdGLEdBQUcsR0FBRzdSLE9BQU8sSUFBSTZSLEdBQUcsR0FBRyxDQUFDLEVBQUVFLE1BQU0sR0FBR0YsR0FBRyxDQUFDLEdBQUdBLEdBQUc7TUFDbEUsQ0FBQyxNQUFNLElBQUlJLFNBQVMsS0FBSyxLQUFLLElBQUlGLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDNUNBLE1BQU0sR0FBRyxDQUFDQSxNQUFNLEdBQUdGLEdBQUcsR0FBRzdSLE9BQU8sSUFBSTZSLEdBQUcsR0FBRyxDQUFDLEVBQUVFLE1BQU0sR0FBR0YsR0FBRyxDQUFDLEdBQUdBLEdBQUc7TUFDbEU7SUFDRjtJQUVBaEssTUFBTSxDQUFDSyxHQUFHLEdBQUdELEVBQUUsR0FBRyxJQUFJNUosb0RBQVMsQ0FBQ3dKLE1BQU0sQ0FBQ0ssR0FBRyxFQUFFeEcsTUFBTSxFQUFFQyxRQUFRLEVBQUVnSixRQUFRLEVBQUVvSCxNQUFNLEVBQUU5USxrQkFBa0IsQ0FBQztJQUNuR2dILEVBQUUsQ0FBQy9HLENBQUMsR0FBRzhRLFVBQVU7SUFDakIvSixFQUFFLENBQUNqSCxDQUFDLEdBQUcsS0FBSztJQUVaNkcsTUFBTSxDQUFDTSxNQUFNLENBQUMxRSxJQUFJLENBQUM5QixRQUFRLENBQUM7SUFFNUIsT0FBT3NHLEVBQUU7RUFDWCxDQUFDO0VBQ0dpSyxPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQ3hRLE1BQU0sRUFBRXlRLE1BQU0sRUFBRTtJQUM3QztJQUNBLEtBQUssSUFBSXZSLENBQUMsSUFBSXVSLE1BQU0sRUFBRTtNQUNwQnpRLE1BQU0sQ0FBQ2QsQ0FBQyxDQUFDLEdBQUd1UixNQUFNLENBQUN2UixDQUFDLENBQUM7SUFDdkI7SUFFQSxPQUFPYyxNQUFNO0VBQ2YsQ0FBQztFQUNHMFEsbUJBQW1CLEdBQUcsU0FBU0EsbUJBQW1CQSxDQUFDdkssTUFBTSxFQUFFeUosVUFBVSxFQUFFNVAsTUFBTSxFQUFFO0lBQ2pGO0lBQ0EsSUFBSTJRLFVBQVUsR0FBR0gsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFeFEsTUFBTSxDQUFDTSxLQUFLLENBQUM7TUFDdENzUSxPQUFPLEdBQUcsK0NBQStDO01BQ3pEMVEsS0FBSyxHQUFHRixNQUFNLENBQUNFLEtBQUs7TUFDcEIyUSxRQUFRO01BQ1IzUixDQUFDO01BQ0RpSyxVQUFVO01BQ1ZDLFFBQVE7TUFDUkgsUUFBUTtNQUNSSSxNQUFNO01BQ05HLFNBQVM7TUFDVEQsT0FBTztJQUVYLElBQUlvSCxVQUFVLENBQUM5TyxHQUFHLEVBQUU7TUFDbEJzSCxVQUFVLEdBQUduSixNQUFNLENBQUN0RixZQUFZLENBQUMsV0FBVyxDQUFDO01BQzdDc0YsTUFBTSxDQUFDd0MsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7TUFDcEN0QyxLQUFLLENBQUNZLGNBQWMsQ0FBQyxHQUFHOE8sVUFBVTtNQUNsQ2lCLFFBQVEsR0FBR3hJLGVBQWUsQ0FBQ3JJLE1BQU0sRUFBRSxDQUFDLENBQUM7TUFFckNnRyxlQUFlLENBQUNoRyxNQUFNLEVBQUVjLGNBQWMsQ0FBQztNQUV2Q2QsTUFBTSxDQUFDd0MsWUFBWSxDQUFDLFdBQVcsRUFBRTJHLFVBQVUsQ0FBQztJQUM5QyxDQUFDLE1BQU07TUFDTEEsVUFBVSxHQUFHeEYsZ0JBQWdCLENBQUMzRCxNQUFNLENBQUMsQ0FBQ2MsY0FBYyxDQUFDO01BQ3JEWixLQUFLLENBQUNZLGNBQWMsQ0FBQyxHQUFHOE8sVUFBVTtNQUNsQ2lCLFFBQVEsR0FBR3hJLGVBQWUsQ0FBQ3JJLE1BQU0sRUFBRSxDQUFDLENBQUM7TUFDckNFLEtBQUssQ0FBQ1ksY0FBYyxDQUFDLEdBQUdxSSxVQUFVO0lBQ3BDO0lBRUEsS0FBS2pLLENBQUMsSUFBSW5CLGVBQWUsRUFBRTtNQUN6Qm9MLFVBQVUsR0FBR3dILFVBQVUsQ0FBQ3pSLENBQUMsQ0FBQztNQUMxQmtLLFFBQVEsR0FBR3lILFFBQVEsQ0FBQzNSLENBQUMsQ0FBQztNQUV0QixJQUFJaUssVUFBVSxLQUFLQyxRQUFRLElBQUl3SCxPQUFPLENBQUN4UCxPQUFPLENBQUNsQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckQ7UUFDQXNLLFNBQVMsR0FBR3pOLHNEQUFPLENBQUNvTixVQUFVLENBQUM7UUFDL0JJLE9BQU8sR0FBR3hOLHNEQUFPLENBQUNxTixRQUFRLENBQUM7UUFDM0JILFFBQVEsR0FBR08sU0FBUyxLQUFLRCxPQUFPLEdBQUd0QyxjQUFjLENBQUNqSCxNQUFNLEVBQUVkLENBQUMsRUFBRWlLLFVBQVUsRUFBRUksT0FBTyxDQUFDLEdBQUduQyxVQUFVLENBQUMrQixVQUFVLENBQUM7UUFDMUdFLE1BQU0sR0FBR2pDLFVBQVUsQ0FBQ2dDLFFBQVEsQ0FBQztRQUM3QmpELE1BQU0sQ0FBQ0ssR0FBRyxHQUFHLElBQUk3SixvREFBUyxDQUFDd0osTUFBTSxDQUFDSyxHQUFHLEVBQUVxSyxRQUFRLEVBQUUzUixDQUFDLEVBQUUrSixRQUFRLEVBQUVJLE1BQU0sR0FBR0osUUFBUSxFQUFFcEssY0FBYyxDQUFDO1FBQ2hHc0gsTUFBTSxDQUFDSyxHQUFHLENBQUNsSCxDQUFDLEdBQUdpSyxPQUFPLElBQUksQ0FBQztRQUUzQnBELE1BQU0sQ0FBQ00sTUFBTSxDQUFDMUUsSUFBSSxDQUFDN0MsQ0FBQyxDQUFDO01BQ3ZCO0lBQ0Y7SUFFQXNSLE9BQU8sQ0FBQ0ssUUFBUSxFQUFFRixVQUFVLENBQUM7RUFDL0IsQ0FBQyxDQUFDLENBQUM7O0FBR0h2VSwyREFBWSxDQUFDLDZCQUE2QixFQUFFLFVBQVUwVSxJQUFJLEVBQUVqSSxLQUFLLEVBQUU7RUFDakUsSUFBSTVKLENBQUMsR0FBRyxLQUFLO0lBQ1RnTCxDQUFDLEdBQUcsT0FBTztJQUNYdkssQ0FBQyxHQUFHLFFBQVE7SUFDWnFSLENBQUMsR0FBRyxNQUFNO0lBQ1ZuUCxLQUFLLEdBQUcsQ0FBQ2lILEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQzVKLENBQUMsRUFBRWdMLENBQUMsRUFBRXZLLENBQUMsRUFBRXFSLENBQUMsQ0FBQyxHQUFHLENBQUM5UixDQUFDLEdBQUc4UixDQUFDLEVBQUU5UixDQUFDLEdBQUdnTCxDQUFDLEVBQUV2SyxDQUFDLEdBQUd1SyxDQUFDLEVBQUV2SyxDQUFDLEdBQUdxUixDQUFDLENBQUMsRUFBRXpGLEdBQUcsQ0FBQyxVQUFVMEYsSUFBSSxFQUFFO01BQ3hGLE9BQU9uSSxLQUFLLEdBQUcsQ0FBQyxHQUFHaUksSUFBSSxHQUFHRSxJQUFJLEdBQUcsUUFBUSxHQUFHQSxJQUFJLEdBQUdGLElBQUk7SUFDekQsQ0FBQyxDQUFDO0VBRUZySSxhQUFhLENBQUNJLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHaUksSUFBSSxHQUFHQSxJQUFJLENBQUMsR0FBRyxVQUFVM0ssTUFBTSxFQUFFbkcsTUFBTSxFQUFFQyxRQUFRLEVBQUVtSixRQUFRLEVBQUV1QixLQUFLLEVBQUU7SUFDdkcsSUFBSXBKLENBQUMsRUFBRTBQLElBQUk7SUFFWCxJQUFJQyxTQUFTLENBQUN6WCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3hCO01BQ0E4SCxDQUFDLEdBQUdLLEtBQUssQ0FBQzBKLEdBQUcsQ0FBQyxVQUFVM0MsSUFBSSxFQUFFO1FBQzVCLE9BQU9uSCxJQUFJLENBQUMyRSxNQUFNLEVBQUV3QyxJQUFJLEVBQUUxSSxRQUFRLENBQUM7TUFDckMsQ0FBQyxDQUFDO01BQ0ZnUixJQUFJLEdBQUcxUCxDQUFDLENBQUNrSixJQUFJLENBQUMsR0FBRyxDQUFDO01BQ2xCLE9BQU93RyxJQUFJLENBQUM1UCxLQUFLLENBQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOUgsTUFBTSxLQUFLLENBQUMsR0FBRzhILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzBQLElBQUk7SUFDcEQ7SUFFQTFQLENBQUMsR0FBRyxDQUFDNkgsUUFBUSxHQUFHLEVBQUUsRUFBRS9ILEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUI0UCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1RyUCxLQUFLLENBQUNOLE9BQU8sQ0FBQyxVQUFVcUgsSUFBSSxFQUFFdkcsQ0FBQyxFQUFFO01BQy9CLE9BQU82TyxJQUFJLENBQUN0SSxJQUFJLENBQUMsR0FBR3BILENBQUMsQ0FBQ2EsQ0FBQyxDQUFDLEdBQUdiLENBQUMsQ0FBQ2EsQ0FBQyxDQUFDLElBQUliLENBQUMsQ0FBQyxDQUFDYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBQ0YrRCxNQUFNLENBQUNnTCxJQUFJLENBQUNuUixNQUFNLEVBQUVpUixJQUFJLEVBQUV0RyxLQUFLLENBQUM7RUFDbEMsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVLLElBQUl5RyxTQUFTLEdBQUc7RUFDckJOLElBQUksRUFBRSxLQUFLO0VBQ1hPLFFBQVEsRUFBRW5OLFNBQVM7RUFDbkJvTixVQUFVLEVBQUUsU0FBU0EsVUFBVUEsQ0FBQ3RSLE1BQU0sRUFBRTtJQUN0QyxPQUFPQSxNQUFNLENBQUNFLEtBQUssSUFBSUYsTUFBTSxDQUFDdVIsUUFBUTtFQUN4QyxDQUFDO0VBQ0RKLElBQUksRUFBRSxTQUFTQSxJQUFJQSxDQUFDblIsTUFBTSxFQUFFaVIsSUFBSSxFQUFFdEcsS0FBSyxFQUFFOUIsS0FBSyxFQUFFMkksT0FBTyxFQUFFO0lBQ3ZELElBQUk1UCxLQUFLLEdBQUcsSUFBSSxDQUFDNkUsTUFBTTtNQUNuQnZHLEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLO01BQ3BCdVIsT0FBTyxHQUFHOUcsS0FBSyxDQUFDc0csSUFBSSxDQUFDUSxPQUFPO01BQzVCdEksVUFBVTtNQUNWQyxRQUFRO01BQ1JDLE1BQU07TUFDTkosUUFBUTtNQUNSN0YsSUFBSTtNQUNKc08sV0FBVztNQUNYeFMsQ0FBQztNQUNEc0ssU0FBUztNQUNURCxPQUFPO01BQ1BvSSxRQUFRO01BQ1JDLGtCQUFrQjtNQUNsQkMsa0JBQWtCO01BQ2xCbFIsS0FBSztNQUNMeUwsTUFBTTtNQUNOMEYsV0FBVztNQUNYQyxXQUFXO0lBQ2Z0VSxjQUFjLElBQUl5RyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRS9CLElBQUksQ0FBQzhOLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sSUFBSXJQLGNBQWMsQ0FBQzNDLE1BQU0sQ0FBQztJQUNuRCtSLFdBQVcsR0FBRyxJQUFJLENBQUNDLE1BQU0sQ0FBQ3BRLEtBQUs7SUFDL0IsSUFBSSxDQUFDK0ksS0FBSyxHQUFHQSxLQUFLO0lBRWxCLEtBQUt6TCxDQUFDLElBQUkrUixJQUFJLEVBQUU7TUFDZCxJQUFJL1IsQ0FBQyxLQUFLLFdBQVcsRUFBRTtRQUNyQjtNQUNGO01BRUFrSyxRQUFRLEdBQUc2SCxJQUFJLENBQUMvUixDQUFDLENBQUM7TUFFbEIsSUFBSXpDLG1EQUFRLENBQUN5QyxDQUFDLENBQUMsSUFBSTNDLDJEQUFZLENBQUMyQyxDQUFDLEVBQUUrUixJQUFJLEVBQUV0RyxLQUFLLEVBQUU5QixLQUFLLEVBQUU3SSxNQUFNLEVBQUV3UixPQUFPLENBQUMsRUFBRTtRQUN2RTtRQUNBO01BQ0Y7TUFFQXBPLElBQUksR0FBRyxPQUFPZ0csUUFBUTtNQUN0QnNJLFdBQVcsR0FBR2pKLGFBQWEsQ0FBQ3ZKLENBQUMsQ0FBQztNQUU5QixJQUFJa0UsSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUN2QmdHLFFBQVEsR0FBR0EsUUFBUSxDQUFDekgsSUFBSSxDQUFDZ0osS0FBSyxFQUFFOUIsS0FBSyxFQUFFN0ksTUFBTSxFQUFFd1IsT0FBTyxDQUFDO1FBQ3ZEcE8sSUFBSSxHQUFHLE9BQU9nRyxRQUFRO01BQ3hCO01BRUEsSUFBSWhHLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQ2dHLFFBQVEsQ0FBQ2hJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNyRGdJLFFBQVEsR0FBRzVNLDZEQUFjLENBQUM0TSxRQUFRLENBQUM7TUFDckM7TUFFQSxJQUFJc0ksV0FBVyxFQUFFO1FBQ2ZBLFdBQVcsQ0FBQyxJQUFJLEVBQUUxUixNQUFNLEVBQUVkLENBQUMsRUFBRWtLLFFBQVEsRUFBRXVCLEtBQUssQ0FBQyxLQUFLbUgsV0FBVyxHQUFHLENBQUMsQ0FBQztNQUNwRSxDQUFDLE1BQU0sSUFBSTVTLENBQUMsQ0FBQ21ELE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2xDO1FBQ0E4RyxVQUFVLEdBQUcsQ0FBQ3hGLGdCQUFnQixDQUFDM0QsTUFBTSxDQUFDLENBQUM0RCxnQkFBZ0IsQ0FBQzFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRW9JLElBQUksQ0FBQyxDQUFDO1FBQ3ZFOEIsUUFBUSxJQUFJLEVBQUU7UUFDZGxNLG9EQUFTLENBQUMyTSxTQUFTLEdBQUcsQ0FBQztRQUV2QixJQUFJLENBQUMzTSxvREFBUyxDQUFDc0ssSUFBSSxDQUFDMkIsVUFBVSxDQUFDLEVBQUU7VUFDL0I7VUFDQUssU0FBUyxHQUFHek4sc0RBQU8sQ0FBQ29OLFVBQVUsQ0FBQztVQUMvQkksT0FBTyxHQUFHeE4sc0RBQU8sQ0FBQ3FOLFFBQVEsQ0FBQztRQUM3QjtRQUVBRyxPQUFPLEdBQUdDLFNBQVMsS0FBS0QsT0FBTyxLQUFLSixVQUFVLEdBQUdsQyxjQUFjLENBQUNqSCxNQUFNLEVBQUVkLENBQUMsRUFBRWlLLFVBQVUsRUFBRUksT0FBTyxDQUFDLEdBQUdBLE9BQU8sQ0FBQyxHQUFHQyxTQUFTLEtBQUtKLFFBQVEsSUFBSUksU0FBUyxDQUFDO1FBQ2pKLElBQUksQ0FBQ3lJLEdBQUcsQ0FBQy9SLEtBQUssRUFBRSxhQUFhLEVBQUVpSixVQUFVLEVBQUVDLFFBQVEsRUFBRVAsS0FBSyxFQUFFMkksT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUV0UyxDQUFDLENBQUM7UUFDN0UwQyxLQUFLLENBQUNHLElBQUksQ0FBQzdDLENBQUMsQ0FBQztRQUNiNlMsV0FBVyxDQUFDaFEsSUFBSSxDQUFDN0MsQ0FBQyxFQUFFLENBQUMsRUFBRWdCLEtBQUssQ0FBQ2hCLENBQUMsQ0FBQyxDQUFDO01BQ2xDLENBQUMsTUFBTSxJQUFJa0UsSUFBSSxLQUFLLFdBQVcsRUFBRTtRQUMvQixJQUFJcU8sT0FBTyxJQUFJdlMsQ0FBQyxJQUFJdVMsT0FBTyxFQUFFO1VBQzNCO1VBQ0F0SSxVQUFVLEdBQUcsT0FBT3NJLE9BQU8sQ0FBQ3ZTLENBQUMsQ0FBQyxLQUFLLFVBQVUsR0FBR3VTLE9BQU8sQ0FBQ3ZTLENBQUMsQ0FBQyxDQUFDeUMsSUFBSSxDQUFDZ0osS0FBSyxFQUFFOUIsS0FBSyxFQUFFN0ksTUFBTSxFQUFFd1IsT0FBTyxDQUFDLEdBQUdDLE9BQU8sQ0FBQ3ZTLENBQUMsQ0FBQztVQUMzR2xELHdEQUFTLENBQUNtTixVQUFVLENBQUMsSUFBSSxDQUFDQSxVQUFVLENBQUMvSCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUsrSCxVQUFVLEdBQUczTSw2REFBYyxDQUFDMk0sVUFBVSxDQUFDLENBQUM7VUFDcEdwTixzREFBTyxDQUFDb04sVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLQSxVQUFVLElBQUl2TSxrREFBTyxDQUFDa04sS0FBSyxDQUFDNUssQ0FBQyxDQUFDLElBQUluRCxzREFBTyxDQUFDeUYsSUFBSSxDQUFDeEIsTUFBTSxFQUFFZCxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1VBRWhHLENBQUNpSyxVQUFVLEdBQUcsRUFBRSxFQUFFbkYsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBS21GLFVBQVUsR0FBRzNILElBQUksQ0FBQ3hCLE1BQU0sRUFBRWQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsTUFBTTtVQUNMaUssVUFBVSxHQUFHM0gsSUFBSSxDQUFDeEIsTUFBTSxFQUFFZCxDQUFDLENBQUM7UUFDOUI7UUFFQStKLFFBQVEsR0FBRzdCLFVBQVUsQ0FBQytCLFVBQVUsQ0FBQztRQUNqQ3dJLFFBQVEsR0FBR3ZPLElBQUksS0FBSyxRQUFRLElBQUlnRyxRQUFRLENBQUNwRixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJb0YsUUFBUSxDQUFDL0csTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkZzUCxRQUFRLEtBQUt2SSxRQUFRLEdBQUdBLFFBQVEsQ0FBQy9HLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQ2dILE1BQU0sR0FBR2pDLFVBQVUsQ0FBQ2dDLFFBQVEsQ0FBQztRQUU3QixJQUFJbEssQ0FBQyxJQUFJUixnQkFBZ0IsRUFBRTtVQUN6QixJQUFJUSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQ3JCO1lBQ0EsSUFBSStKLFFBQVEsS0FBSyxDQUFDLElBQUl6SCxJQUFJLENBQUN4QixNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUssUUFBUSxJQUFJcUosTUFBTSxFQUFFO2NBQ3ZFO2NBQ0FKLFFBQVEsR0FBRyxDQUFDO1lBQ2Q7WUFFQThJLFdBQVcsQ0FBQ2hRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFN0IsS0FBSyxDQUFDZ1MsVUFBVSxDQUFDO1lBRW5EaE0saUJBQWlCLENBQUMsSUFBSSxFQUFFaEcsS0FBSyxFQUFFLFlBQVksRUFBRStJLFFBQVEsR0FBRyxTQUFTLEdBQUcsUUFBUSxFQUFFSSxNQUFNLEdBQUcsU0FBUyxHQUFHLFFBQVEsRUFBRSxDQUFDQSxNQUFNLENBQUM7VUFDdkg7VUFFQSxJQUFJbkssQ0FBQyxLQUFLLE9BQU8sSUFBSUEsQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUN0Q0EsQ0FBQyxHQUFHUixnQkFBZ0IsQ0FBQ1EsQ0FBQyxDQUFDO1lBQ3ZCLENBQUNBLENBQUMsQ0FBQ2tDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBS2xDLENBQUMsR0FBR0EsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzFDO1FBQ0Y7UUFFQXVRLGtCQUFrQixHQUFHMVMsQ0FBQyxJQUFJbkIsZUFBZSxDQUFDLENBQUM7O1FBRTNDLElBQUk2VCxrQkFBa0IsRUFBRTtVQUN0QixJQUFJLENBQUNJLE1BQU0sQ0FBQ2pQLElBQUksQ0FBQzdELENBQUMsQ0FBQztVQUVuQixJQUFJLENBQUMyUyxrQkFBa0IsRUFBRTtZQUN2QmxSLEtBQUssR0FBR1gsTUFBTSxDQUFDTSxLQUFLO1lBQ3BCSyxLQUFLLENBQUNDLGVBQWUsSUFBSSxDQUFDcVEsSUFBSSxDQUFDa0IsY0FBYyxJQUFJOUosZUFBZSxDQUFDckksTUFBTSxFQUFFaVIsSUFBSSxDQUFDa0IsY0FBYyxDQUFDLENBQUMsQ0FBQzs7WUFFL0YvRixNQUFNLEdBQUc2RSxJQUFJLENBQUNtQixZQUFZLEtBQUssS0FBSyxJQUFJelIsS0FBSyxDQUFDeUwsTUFBTTtZQUNwRHlGLGtCQUFrQixHQUFHLElBQUksQ0FBQ3JMLEdBQUcsR0FBRyxJQUFJN0osb0RBQVMsQ0FBQyxJQUFJLENBQUM2SixHQUFHLEVBQUV0RyxLQUFLLEVBQUVZLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFSCxLQUFLLENBQUNDLGVBQWUsRUFBRUQsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNIa1Isa0JBQWtCLENBQUNRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUM5Qjs7VUFFQSxJQUFJblQsQ0FBQyxLQUFLLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUNzSCxHQUFHLEdBQUcsSUFBSTdKLG9EQUFTLENBQUMsSUFBSSxDQUFDNkosR0FBRyxFQUFFN0YsS0FBSyxFQUFFLFFBQVEsRUFBRUEsS0FBSyxDQUFDRixNQUFNLEVBQUUsQ0FBQ2tSLFFBQVEsR0FBR3hVLDZEQUFjLENBQUN3RCxLQUFLLENBQUNGLE1BQU0sRUFBRWtSLFFBQVEsR0FBR3RJLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLElBQUkxSSxLQUFLLENBQUNGLE1BQU0sSUFBSSxDQUFDLEVBQUU1QixjQUFjLENBQUM7WUFDNUssSUFBSSxDQUFDMkgsR0FBRyxDQUFDbEgsQ0FBQyxHQUFHLENBQUM7WUFDZHNDLEtBQUssQ0FBQ0csSUFBSSxDQUFDLFFBQVEsRUFBRTdDLENBQUMsQ0FBQztZQUN2QkEsQ0FBQyxJQUFJLEdBQUc7VUFDVixDQUFDLE1BQU0sSUFBSUEsQ0FBQyxLQUFLLGlCQUFpQixFQUFFO1lBQ2xDNlMsV0FBVyxDQUFDaFEsSUFBSSxDQUFDaEIsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFYixLQUFLLENBQUNhLG9CQUFvQixDQUFDLENBQUM7WUFDdEVxSSxRQUFRLEdBQUdvQiw2QkFBNkIsQ0FBQ3BCLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1lBRXBELElBQUl6SSxLQUFLLENBQUNrQixHQUFHLEVBQUU7Y0FDYnFLLGVBQWUsQ0FBQ2xNLE1BQU0sRUFBRW9KLFFBQVEsRUFBRSxDQUFDLEVBQUVnRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUN2RCxDQUFDLE1BQU07Y0FDTDdDLE9BQU8sR0FBR25DLFVBQVUsQ0FBQ2dDLFFBQVEsQ0FBQy9ILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztjQUVuRGtJLE9BQU8sS0FBSzVJLEtBQUssQ0FBQzZILE9BQU8sSUFBSXRDLGlCQUFpQixDQUFDLElBQUksRUFBRXZGLEtBQUssRUFBRSxTQUFTLEVBQUVBLEtBQUssQ0FBQzZILE9BQU8sRUFBRWUsT0FBTyxDQUFDO2NBRTlGckQsaUJBQWlCLENBQUMsSUFBSSxFQUFFaEcsS0FBSyxFQUFFaEIsQ0FBQyxFQUFFcUosYUFBYSxDQUFDWSxVQUFVLENBQUMsRUFBRVosYUFBYSxDQUFDYSxRQUFRLENBQUMsQ0FBQztZQUN2RjtZQUVBO1VBQ0YsQ0FBQyxNQUFNLElBQUlsSyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzVCZ04sZUFBZSxDQUFDbE0sTUFBTSxFQUFFb0osUUFBUSxFQUFFLENBQUMsRUFBRWdELE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBRXJEO1VBQ0YsQ0FBQyxNQUFNLElBQUlsTixDQUFDLElBQUlnTSxxQkFBcUIsRUFBRTtZQUNyQ2dGLHVCQUF1QixDQUFDLElBQUksRUFBRXZQLEtBQUssRUFBRXpCLENBQUMsRUFBRStKLFFBQVEsRUFBRTBJLFFBQVEsR0FBR3hVLDZEQUFjLENBQUM4TCxRQUFRLEVBQUUwSSxRQUFRLEdBQUd2SSxRQUFRLENBQUMsR0FBR0EsUUFBUSxDQUFDO1lBRXRIO1VBQ0YsQ0FBQyxNQUFNLElBQUlsSyxDQUFDLEtBQUssY0FBYyxFQUFFO1lBQy9CZ0gsaUJBQWlCLENBQUMsSUFBSSxFQUFFdkYsS0FBSyxFQUFFLFFBQVEsRUFBRUEsS0FBSyxDQUFDeUwsTUFBTSxFQUFFaEQsUUFBUSxDQUFDO1lBRWhFO1VBQ0YsQ0FBQyxNQUFNLElBQUlsSyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzFCeUIsS0FBSyxDQUFDekIsQ0FBQyxDQUFDLEdBQUdrSyxRQUFRO1lBQ25CO1VBQ0YsQ0FBQyxNQUFNLElBQUlsSyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzVCd1IsbUJBQW1CLENBQUMsSUFBSSxFQUFFdEgsUUFBUSxFQUFFcEosTUFBTSxDQUFDO1lBRTNDO1VBQ0Y7UUFDRixDQUFDLE1BQU0sSUFBSSxFQUFFZCxDQUFDLElBQUlnQixLQUFLLENBQUMsRUFBRTtVQUN4QmhCLENBQUMsR0FBRzJFLGdCQUFnQixDQUFDM0UsQ0FBQyxDQUFDLElBQUlBLENBQUM7UUFDOUI7UUFFQSxJQUFJMFMsa0JBQWtCLElBQUksQ0FBQ3ZJLE1BQU0sSUFBSUEsTUFBTSxLQUFLLENBQUMsTUFBTUosUUFBUSxJQUFJQSxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQ3hLLFdBQVcsQ0FBQytJLElBQUksQ0FBQzRCLFFBQVEsQ0FBQyxJQUFJbEssQ0FBQyxJQUFJZ0IsS0FBSyxFQUFFO1VBQy9Ic0osU0FBUyxHQUFHLENBQUNMLFVBQVUsR0FBRyxFQUFFLEVBQUU5RyxNQUFNLENBQUMsQ0FBQzRHLFFBQVEsR0FBRyxFQUFFLEVBQUV4UCxNQUFNLENBQUM7VUFDNUQ0UCxNQUFNLEtBQUtBLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUV4QkUsT0FBTyxHQUFHeE4sc0RBQU8sQ0FBQ3FOLFFBQVEsQ0FBQyxLQUFLbEssQ0FBQyxJQUFJdEMsa0RBQU8sQ0FBQ2tOLEtBQUssR0FBR2xOLGtEQUFPLENBQUNrTixLQUFLLENBQUM1SyxDQUFDLENBQUMsR0FBR3NLLFNBQVMsQ0FBQztVQUNsRkEsU0FBUyxLQUFLRCxPQUFPLEtBQUtOLFFBQVEsR0FBR2hDLGNBQWMsQ0FBQ2pILE1BQU0sRUFBRWQsQ0FBQyxFQUFFaUssVUFBVSxFQUFFSSxPQUFPLENBQUMsQ0FBQztVQUNwRixJQUFJLENBQUMvQyxHQUFHLEdBQUcsSUFBSTdKLG9EQUFTLENBQUMsSUFBSSxDQUFDNkosR0FBRyxFQUFFb0wsa0JBQWtCLEdBQUdqUixLQUFLLEdBQUdULEtBQUssRUFBRWhCLENBQUMsRUFBRStKLFFBQVEsRUFBRSxDQUFDMEksUUFBUSxHQUFHeFUsNkRBQWMsQ0FBQzhMLFFBQVEsRUFBRTBJLFFBQVEsR0FBR3RJLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLElBQUlKLFFBQVEsRUFBRSxDQUFDMkksa0JBQWtCLEtBQUtySSxPQUFPLEtBQUssSUFBSSxJQUFJckssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJK1IsSUFBSSxDQUFDcUIsU0FBUyxLQUFLLEtBQUssR0FBRzNTLHFCQUFxQixHQUFHZCxjQUFjLENBQUM7VUFDblMsSUFBSSxDQUFDMkgsR0FBRyxDQUFDbEgsQ0FBQyxHQUFHaUssT0FBTyxJQUFJLENBQUM7VUFFekIsSUFBSUMsU0FBUyxLQUFLRCxPQUFPLElBQUlBLE9BQU8sS0FBSyxHQUFHLEVBQUU7WUFDNUM7WUFDQSxJQUFJLENBQUMvQyxHQUFHLENBQUM5RyxDQUFDLEdBQUd5SixVQUFVO1lBQ3ZCLElBQUksQ0FBQzNDLEdBQUcsQ0FBQ3lELENBQUMsR0FBR3hLLDJCQUEyQjtVQUMxQztRQUNGLENBQUMsTUFBTSxJQUFJLEVBQUVQLENBQUMsSUFBSWdCLEtBQUssQ0FBQyxFQUFFO1VBQ3hCLElBQUloQixDQUFDLElBQUljLE1BQU0sRUFBRTtZQUNmO1lBQ0EsSUFBSSxDQUFDaVMsR0FBRyxDQUFDalMsTUFBTSxFQUFFZCxDQUFDLEVBQUVpSyxVQUFVLElBQUluSixNQUFNLENBQUNkLENBQUMsQ0FBQyxFQUFFeVMsUUFBUSxHQUFHQSxRQUFRLEdBQUd2SSxRQUFRLEdBQUdBLFFBQVEsRUFBRVAsS0FBSyxFQUFFMkksT0FBTyxDQUFDO1VBQ3pHLENBQUMsTUFBTSxJQUFJdFMsQ0FBQyxLQUFLLGdCQUFnQixFQUFFO1lBQ2pDbkMsNkRBQWMsQ0FBQ21DLENBQUMsRUFBRWtLLFFBQVEsQ0FBQztZQUUzQjtVQUNGO1FBQ0YsQ0FBQyxNQUFNO1VBQ0xWLHNCQUFzQixDQUFDL0csSUFBSSxDQUFDLElBQUksRUFBRTNCLE1BQU0sRUFBRWQsQ0FBQyxFQUFFaUssVUFBVSxFQUFFd0ksUUFBUSxHQUFHQSxRQUFRLEdBQUd2SSxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUNyRztRQUVBd0ksa0JBQWtCLEtBQUsxUyxDQUFDLElBQUlnQixLQUFLLEdBQUc2UixXQUFXLENBQUNoUSxJQUFJLENBQUM3QyxDQUFDLEVBQUUsQ0FBQyxFQUFFZ0IsS0FBSyxDQUFDaEIsQ0FBQyxDQUFDLENBQUMsR0FBRzZTLFdBQVcsQ0FBQ2hRLElBQUksQ0FBQzdDLENBQUMsRUFBRSxDQUFDLEVBQUVpSyxVQUFVLElBQUluSixNQUFNLENBQUNkLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkgwQyxLQUFLLENBQUNHLElBQUksQ0FBQzdDLENBQUMsQ0FBQztNQUNmO0lBQ0Y7SUFFQTRTLFdBQVcsSUFBSXpWLHdFQUF5QixDQUFDLElBQUksQ0FBQztFQUNoRCxDQUFDO0VBQ0RrVyxNQUFNLEVBQUUsU0FBU0EsTUFBTUEsQ0FBQ3pULEtBQUssRUFBRUMsSUFBSSxFQUFFO0lBQ25DLElBQUlBLElBQUksQ0FBQzRMLEtBQUssQ0FBQ0MsS0FBSyxJQUFJLENBQUMvTSxVQUFVLENBQUMsQ0FBQyxFQUFFO01BQ3JDLElBQUkwSSxFQUFFLEdBQUd4SCxJQUFJLENBQUN5SCxHQUFHO01BRWpCLE9BQU9ELEVBQUUsRUFBRTtRQUNUQSxFQUFFLENBQUMwRCxDQUFDLENBQUNuTCxLQUFLLEVBQUV5SCxFQUFFLENBQUN1RixDQUFDLENBQUM7UUFDakJ2RixFQUFFLEdBQUdBLEVBQUUsQ0FBQ3dELEtBQUs7TUFDZjtJQUNGLENBQUMsTUFBTTtNQUNMaEwsSUFBSSxDQUFDaVQsTUFBTSxDQUFDbFAsTUFBTSxDQUFDLENBQUM7SUFDdEI7RUFDRixDQUFDO0VBQ0QwUCxHQUFHLEVBQUVoUixJQUFJO0VBQ1RpUixPQUFPLEVBQUUvVCxnQkFBZ0I7RUFDekJnVSxTQUFTLEVBQUUsU0FBU0EsU0FBU0EsQ0FBQzFTLE1BQU0sRUFBRUMsUUFBUSxFQUFFa0csTUFBTSxFQUFFO0lBQ3REO0lBQ0EsSUFBSWpILENBQUMsR0FBR1IsZ0JBQWdCLENBQUN1QixRQUFRLENBQUM7SUFDbENmLENBQUMsSUFBSUEsQ0FBQyxDQUFDa0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBS25CLFFBQVEsR0FBR2YsQ0FBQyxDQUFDO0lBQ3pDLE9BQU9lLFFBQVEsSUFBSWxDLGVBQWUsSUFBSWtDLFFBQVEsS0FBS2Msb0JBQW9CLEtBQUtmLE1BQU0sQ0FBQ00sS0FBSyxDQUFDbUIsQ0FBQyxJQUFJRCxJQUFJLENBQUN4QixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBR21HLE1BQU0sSUFBSXZJLG1CQUFtQixLQUFLdUksTUFBTSxHQUFHbEcsUUFBUSxLQUFLLE9BQU8sR0FBR00sWUFBWSxHQUFHRixnQkFBZ0IsR0FBRyxDQUFDekMsbUJBQW1CLEdBQUd1SSxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU1sRyxRQUFRLEtBQUssT0FBTyxHQUFHUyxzQkFBc0IsR0FBR0csMEJBQTBCLENBQUMsR0FBR2IsTUFBTSxDQUFDRSxLQUFLLElBQUksQ0FBQ2pFLDJEQUFZLENBQUMrRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsUUFBUSxDQUFDLENBQUMsR0FBR0YsZUFBZSxHQUFHLENBQUNFLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBR2pCLGNBQWMsR0FBR25ELHlEQUFVLENBQUNnRCxNQUFNLEVBQUVDLFFBQVEsQ0FBQztFQUNoZSxDQUFDO0VBQ0QrQyxJQUFJLEVBQUU7SUFDSmdELGVBQWUsRUFBRUEsZUFBZTtJQUNoQ3VGLFVBQVUsRUFBRUE7RUFDZDtBQUNGLENBQUM7QUFDRDVQLCtDQUFJLENBQUNnWCxLQUFLLENBQUNDLFdBQVcsR0FBRy9PLGdCQUFnQjtBQUN6Q2xJLCtDQUFJLENBQUNxSCxJQUFJLENBQUM2UCxhQUFhLEdBQUdsUSxjQUFjO0FBRXhDLENBQUMsVUFBVW1RLGdCQUFnQixFQUFFekYsUUFBUSxFQUFFMEYsTUFBTSxFQUFFTixPQUFPLEVBQUU7RUFDdEQsSUFBSU8sR0FBRyxHQUFHNVcsMkRBQVksQ0FBQzBXLGdCQUFnQixHQUFHLEdBQUcsR0FBR3pGLFFBQVEsR0FBRyxHQUFHLEdBQUcwRixNQUFNLEVBQUUsVUFBVWpDLElBQUksRUFBRTtJQUN2Ri9TLGVBQWUsQ0FBQytTLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0VBRUYxVSwyREFBWSxDQUFDaVIsUUFBUSxFQUFFLFVBQVV5RCxJQUFJLEVBQUU7SUFDckNsVSxrREFBTyxDQUFDa04sS0FBSyxDQUFDZ0gsSUFBSSxDQUFDLEdBQUcsS0FBSztJQUMzQjVGLHFCQUFxQixDQUFDNEYsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFFRnBTLGdCQUFnQixDQUFDc1UsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUdGLGdCQUFnQixHQUFHLEdBQUcsR0FBR3pGLFFBQVE7RUFFN0RqUiwyREFBWSxDQUFDcVcsT0FBTyxFQUFFLFVBQVUzQixJQUFJLEVBQUU7SUFDcEMsSUFBSXpQLEtBQUssR0FBR3lQLElBQUksQ0FBQ3pQLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0IzQyxnQkFBZ0IsQ0FBQzJDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHMlIsR0FBRyxDQUFDM1IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVDLENBQUMsQ0FBQztBQUNKLENBQUMsRUFBRSw2Q0FBNkMsRUFBRSwwQ0FBMEMsRUFBRSwrRUFBK0UsRUFBRSw0RkFBNEYsQ0FBQztBQUU1UWpGLDJEQUFZLENBQUMsOEVBQThFLEVBQUUsVUFBVTBVLElBQUksRUFBRTtFQUMzR2xVLGtEQUFPLENBQUNrTixLQUFLLENBQUNnSCxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQzVCLENBQUMsQ0FBQztBQUVGblYsK0NBQUksQ0FBQ3NYLGNBQWMsQ0FBQzdCLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOWdEOUIsU0FBUytCLHNCQUFzQkEsQ0FBQ0MsSUFBSSxFQUFFO0VBQUUsSUFBSUEsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0lBQUUsTUFBTSxJQUFJQyxjQUFjLENBQUMsMkRBQTJELENBQUM7RUFBRTtFQUFFLE9BQU9ELElBQUk7QUFBRTtBQUVySyxTQUFTRSxjQUFjQSxDQUFDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRTtFQUFFRCxRQUFRLENBQUNFLFNBQVMsR0FBR0MsTUFBTSxDQUFDMWEsTUFBTSxDQUFDd2EsVUFBVSxDQUFDQyxTQUFTLENBQUM7RUFBRUYsUUFBUSxDQUFDRSxTQUFTLENBQUMvYSxXQUFXLEdBQUc2YSxRQUFRO0VBQUVBLFFBQVEsQ0FBQ0ksU0FBUyxHQUFHSCxVQUFVO0FBQUU7O0FBRXRMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk1VyxPQUFPLEdBQUc7SUFDWmdYLFNBQVMsRUFBRSxHQUFHO0lBQ2R6RSxPQUFPLEVBQUUsTUFBTTtJQUNmMEUsY0FBYyxFQUFFLENBQUM7SUFDakIvSixLQUFLLEVBQUU7TUFDTGdLLFVBQVUsRUFBRTtJQUNkO0VBQ0YsQ0FBQztFQUNHQyxTQUFTLEdBQUc7SUFDZEMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsU0FBUyxFQUFFLEtBQUs7SUFDaEJwYSxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0dxYSxtQkFBbUI7RUFDbkJyVyxVQUFVO0VBQ1ZzVyxRQUFRO0VBQ1I3VixPQUFPLEdBQUcsR0FBRztFQUNiOFYsUUFBUSxHQUFHLENBQUMsR0FBRzlWLE9BQU87RUFDdEIrVixJQUFJLEdBQUdwVyxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO0VBQ2xCb1csUUFBUSxHQUFHRCxJQUFJLEdBQUcsQ0FBQztFQUNuQkUsS0FBSyxHQUFHLENBQUM7RUFDVEMsS0FBSyxHQUFHdlcsSUFBSSxDQUFDMFEsSUFBSTtFQUNqQjhGLElBQUksR0FBR3hXLElBQUksQ0FBQzJQLEdBQUc7RUFDZjhHLElBQUksR0FBR3pXLElBQUksQ0FBQzRQLEdBQUc7RUFDZjdSLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDNEQsS0FBSyxFQUFFO0lBQ3hDLE9BQU8sT0FBT0EsS0FBSyxLQUFLLFFBQVE7RUFDbEMsQ0FBQztFQUNHK1UsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUMvVSxLQUFLLEVBQUU7SUFDNUMsT0FBTyxPQUFPQSxLQUFLLEtBQUssVUFBVTtFQUNwQyxDQUFDO0VBQ0dnVixTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ2hWLEtBQUssRUFBRTtJQUN4QyxPQUFPLE9BQU9BLEtBQUssS0FBSyxRQUFRO0VBQ2xDLENBQUM7RUFDRzNELFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDMkQsS0FBSyxFQUFFO0lBQzlDLE9BQU8sT0FBT0EsS0FBSyxLQUFLLFdBQVc7RUFDckMsQ0FBQztFQUNHaVYsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUNqVixLQUFLLEVBQUU7SUFDeEMsT0FBTyxPQUFPQSxLQUFLLEtBQUssUUFBUTtFQUNsQyxDQUFDO0VBQ0drVixXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQ2xWLEtBQUssRUFBRTtJQUM1QyxPQUFPQSxLQUFLLEtBQUssS0FBSztFQUN4QixDQUFDO0VBQ0c5QixhQUFhLEdBQUcsU0FBU0EsYUFBYUEsQ0FBQSxFQUFHO0lBQzNDLE9BQU8sT0FBT3pFLE1BQU0sS0FBSyxXQUFXO0VBQ3RDLENBQUM7RUFDRzBiLGVBQWUsR0FBRyxTQUFTQSxlQUFlQSxDQUFDblYsS0FBSyxFQUFFO0lBQ3BELE9BQU8rVSxXQUFXLENBQUMvVSxLQUFLLENBQUMsSUFBSTVELFNBQVMsQ0FBQzRELEtBQUssQ0FBQztFQUMvQyxDQUFDO0VBQ0dvVixhQUFhLEdBQUcsT0FBT0MsV0FBVyxLQUFLLFVBQVUsSUFBSUEsV0FBVyxDQUFDQyxNQUFNLElBQUksWUFBWSxDQUFDLENBQUM7RUFDekY7RUFDSkMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLE9BQU87RUFDcEJDLGFBQWEsR0FBRyxtQkFBbUI7RUFDbkM7RUFDSnpaLE9BQU8sR0FBRyxrQ0FBa0M7RUFDeEM7RUFDSkMsZUFBZSxHQUFHLDZCQUE2QjtFQUMzQ3laLG9CQUFvQixHQUFHLGtDQUFrQztFQUN6RDtFQUNKcFosT0FBTyxHQUFHLGVBQWU7RUFDckJxWixrQkFBa0IsR0FBRyxpQkFBaUI7RUFDdEM7RUFDSkMsUUFBUSxHQUFHLHVDQUF1QztFQUM5Q0MsZUFBZTtFQUNmcFksSUFBSTtFQUNKcVksWUFBWTtFQUNacFksSUFBSTtFQUNKcVksUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNiQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0VBQ2xCQyxVQUFVO0VBQ1ZDLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7SUFDdEMsT0FBTyxDQUFDSCxhQUFhLEdBQUdJLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFSixRQUFRLENBQUMsS0FBS2phLElBQUk7RUFDMUQsQ0FBQztFQUNHb0IsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNrRCxRQUFRLEVBQUVMLEtBQUssRUFBRTtJQUM1RCxPQUFPdEUsT0FBTyxDQUFDNGEsSUFBSSxDQUFDLGtCQUFrQixFQUFFalcsUUFBUSxFQUFFLFFBQVEsRUFBRUwsS0FBSyxFQUFFLHVDQUF1QyxDQUFDO0VBQzdHLENBQUM7RUFDR3VXLEtBQUssR0FBRyxTQUFTQSxLQUFLQSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUM1QyxPQUFPLENBQUNBLFFBQVEsSUFBSS9hLE9BQU8sQ0FBQzRhLElBQUksQ0FBQ0UsT0FBTyxDQUFDO0VBQzNDLENBQUM7RUFDR0UsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUN4RixJQUFJLEVBQUV5RixHQUFHLEVBQUU7SUFDOUMsT0FBT3pGLElBQUksS0FBSzhFLFFBQVEsQ0FBQzlFLElBQUksQ0FBQyxHQUFHeUYsR0FBRyxDQUFDLElBQUlWLGFBQWEsS0FBS0EsYUFBYSxDQUFDL0UsSUFBSSxDQUFDLEdBQUd5RixHQUFHLENBQUMsSUFBSVgsUUFBUTtFQUNuRyxDQUFDO0VBQ0dZLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFBLEVBQUc7SUFDckMsT0FBTyxDQUFDO0VBQ1YsQ0FBQztFQUNHQyxvQkFBb0IsR0FBRztJQUN6QkMsY0FBYyxFQUFFLElBQUk7SUFDcEJqVSxPQUFPLEVBQUUsSUFBSTtJQUNia1UsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUNHQyxtQkFBbUIsR0FBRztJQUN4QkYsY0FBYyxFQUFFLElBQUk7SUFDcEJDLElBQUksRUFBRTtFQUNSLENBQUM7RUFDR0UsYUFBYSxHQUFHO0lBQ2xCSCxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNHSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0VBQ25CQyxXQUFXLEdBQUcsRUFBRTtFQUNoQkMsV0FBVyxHQUFHLENBQUMsQ0FBQztFQUNoQkMsa0JBQWtCO0VBQ2xCeGEsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNieWEsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNiQyxZQUFZLEdBQUcsRUFBRTtFQUNqQkMsZUFBZSxHQUFHLEVBQUU7RUFDcEJDLGNBQWMsR0FBRyxFQUFFO0VBQ25CQyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQzlGLE9BQU8sRUFBRTtJQUN4QyxJQUFJeFIsTUFBTSxHQUFHd1IsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNuQitGLGFBQWE7TUFDYm5WLENBQUM7SUFDTHlTLFNBQVMsQ0FBQzdVLE1BQU0sQ0FBQyxJQUFJMlUsV0FBVyxDQUFDM1UsTUFBTSxDQUFDLEtBQUt3UixPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxDQUFDLENBQUM7SUFFakUsSUFBSSxFQUFFK0YsYUFBYSxHQUFHLENBQUN2WCxNQUFNLENBQUNNLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRWtYLE9BQU8sQ0FBQyxFQUFFO01BQ25EO01BQ0FwVixDQUFDLEdBQUdnVixlQUFlLENBQUMzZCxNQUFNO01BRTFCLE9BQU8ySSxDQUFDLEVBQUUsSUFBSSxDQUFDZ1YsZUFBZSxDQUFDaFYsQ0FBQyxDQUFDLENBQUNrUCxVQUFVLENBQUN0UixNQUFNLENBQUMsRUFBRSxDQUFDO01BRXZEdVgsYUFBYSxHQUFHSCxlQUFlLENBQUNoVixDQUFDLENBQUM7SUFDcEM7SUFFQUEsQ0FBQyxHQUFHb1AsT0FBTyxDQUFDL1gsTUFBTTtJQUVsQixPQUFPMkksQ0FBQyxFQUFFLEVBQUU7TUFDVm9QLE9BQU8sQ0FBQ3BQLENBQUMsQ0FBQyxLQUFLb1AsT0FBTyxDQUFDcFAsQ0FBQyxDQUFDLENBQUM5QixLQUFLLEtBQUtrUixPQUFPLENBQUNwUCxDQUFDLENBQUMsQ0FBQzlCLEtBQUssR0FBRyxJQUFJNUQsT0FBTyxDQUFDOFUsT0FBTyxDQUFDcFAsQ0FBQyxDQUFDLEVBQUVtVixhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUkvRixPQUFPLENBQUNpRyxNQUFNLENBQUNyVixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pIO0lBRUEsT0FBT29QLE9BQU87RUFDaEIsQ0FBQztFQUNHdlUsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUMrQyxNQUFNLEVBQUU7SUFDekMsT0FBT0EsTUFBTSxDQUFDTSxLQUFLLElBQUlnWCxRQUFRLENBQUNJLE9BQU8sQ0FBQzFYLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNNLEtBQUs7RUFDM0QsQ0FBQztFQUNHMUUsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUNvRSxNQUFNLEVBQUVDLFFBQVEsRUFBRTBYLENBQUMsRUFBRTtJQUM1RCxPQUFPLENBQUNBLENBQUMsR0FBRzNYLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEtBQUswVSxXQUFXLENBQUNnRCxDQUFDLENBQUMsR0FBRzNYLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHaEUsWUFBWSxDQUFDMGIsQ0FBQyxDQUFDLElBQUkzWCxNQUFNLENBQUN0RixZQUFZLElBQUlzRixNQUFNLENBQUN0RixZQUFZLENBQUN1RixRQUFRLENBQUMsSUFBSTBYLENBQUM7RUFDckosQ0FBQztFQUNHdmIsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUN3YixLQUFLLEVBQUVDLElBQUksRUFBRTtJQUNwRCxPQUFPLENBQUNELEtBQUssR0FBR0EsS0FBSyxDQUFDdlcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxPQUFPLENBQUN1VyxJQUFJLENBQUMsSUFBSUQsS0FBSztFQUMxRCxDQUFDO0VBQ0c7RUFDSjlhLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDOEMsS0FBSyxFQUFFO0lBQzlCLE9BQU8zQixJQUFJLENBQUNrQixLQUFLLENBQUNTLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQztFQUNqRCxDQUFDO0VBQ0drWSxhQUFhLEdBQUcsU0FBU0EsYUFBYUEsQ0FBQ2xZLEtBQUssRUFBRTtJQUNoRCxPQUFPM0IsSUFBSSxDQUFDa0IsS0FBSyxDQUFDUyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUSxJQUFJLENBQUM7RUFDckQsQ0FBQztFQUNHO0VBQ0p6QyxjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQ3lMLEtBQUssRUFBRWhKLEtBQUssRUFBRTtJQUNyRCxJQUFJbVksUUFBUSxHQUFHblksS0FBSyxDQUFDb0UsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUMxQnFDLEdBQUcsR0FBR2UsVUFBVSxDQUFDeEgsS0FBSyxDQUFDeUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDdUcsS0FBSyxHQUFHeEIsVUFBVSxDQUFDd0IsS0FBSyxDQUFDO0lBQ3pCLE9BQU9tUCxRQUFRLEtBQUssR0FBRyxHQUFHblAsS0FBSyxHQUFHdkMsR0FBRyxHQUFHMFIsUUFBUSxLQUFLLEdBQUcsR0FBR25QLEtBQUssR0FBR3ZDLEdBQUcsR0FBRzBSLFFBQVEsS0FBSyxHQUFHLEdBQUduUCxLQUFLLEdBQUd2QyxHQUFHLEdBQUd1QyxLQUFLLEdBQUd2QyxHQUFHO0VBQ3ZILENBQUM7RUFDRzJSLGlCQUFpQixHQUFHLFNBQVNBLGlCQUFpQkEsQ0FBQ0MsUUFBUSxFQUFFQyxNQUFNLEVBQUU7SUFDbkU7SUFDQSxJQUFJbkgsQ0FBQyxHQUFHbUgsTUFBTSxDQUFDemUsTUFBTTtNQUNqQjJJLENBQUMsR0FBRyxDQUFDO0lBRVQsT0FBTzZWLFFBQVEsQ0FBQzdXLE9BQU8sQ0FBQzhXLE1BQU0sQ0FBQzlWLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUVBLENBQUMsR0FBRzJPLENBQUMsR0FBRyxDQUFDO0lBRXJELE9BQU8zTyxDQUFDLEdBQUcyTyxDQUFDO0VBQ2QsQ0FBQztFQUNHb0gsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUEsRUFBRztJQUN2QyxJQUFJcEgsQ0FBQyxHQUFHZ0csV0FBVyxDQUFDdGQsTUFBTTtNQUN0QjhILENBQUMsR0FBR3dWLFdBQVcsQ0FBQ3JJLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDeEJ0TSxDQUFDO01BQ0R1SSxLQUFLO0lBRVRxTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCRCxXQUFXLENBQUN0ZCxNQUFNLEdBQUcsQ0FBQztJQUV0QixLQUFLMkksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMk8sQ0FBQyxFQUFFM08sQ0FBQyxFQUFFLEVBQUU7TUFDdEJ1SSxLQUFLLEdBQUdwSixDQUFDLENBQUNhLENBQUMsQ0FBQztNQUNadUksS0FBSyxJQUFJQSxLQUFLLENBQUN5TixLQUFLLEtBQUt6TixLQUFLLENBQUM0SCxNQUFNLENBQUM1SCxLQUFLLENBQUN5TixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUV6TixLQUFLLENBQUN5TixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUNBLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDeEY7RUFDRixDQUFDO0VBQ0dDLGVBQWUsR0FBRyxTQUFTQSxlQUFlQSxDQUFDQyxTQUFTLEVBQUVuUSxJQUFJLEVBQUV1TyxjQUFjLEVBQUU2QixLQUFLLEVBQUU7SUFDckZ4QixXQUFXLENBQUN0ZCxNQUFNLElBQUksQ0FBQ29FLFVBQVUsSUFBSXNhLFdBQVcsQ0FBQyxDQUFDO0lBQ2xERyxTQUFTLENBQUMvRixNQUFNLENBQUNwSyxJQUFJLEVBQUV1TyxjQUFjLEVBQUU2QixLQUFLLElBQUkxYSxVQUFVLElBQUlzSyxJQUFJLEdBQUcsQ0FBQyxLQUFLbVEsU0FBUyxDQUFDRSxRQUFRLElBQUlGLFNBQVMsQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFDckgxQixXQUFXLENBQUN0ZCxNQUFNLElBQUksQ0FBQ29FLFVBQVUsSUFBSXNhLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0RCxDQUFDO0VBQ0dPLGtCQUFrQixHQUFHLFNBQVNBLGtCQUFrQkEsQ0FBQzlZLEtBQUssRUFBRTtJQUMxRCxJQUFJK1ksQ0FBQyxHQUFHdlIsVUFBVSxDQUFDeEgsS0FBSyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQytZLENBQUMsSUFBSUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDL1ksS0FBSyxHQUFHLEVBQUUsRUFBRThKLEtBQUssQ0FBQzhMLGtCQUFrQixDQUFDLENBQUMvYixNQUFNLEdBQUcsQ0FBQyxHQUFHa2YsQ0FBQyxHQUFHM2MsU0FBUyxDQUFDNEQsS0FBSyxDQUFDLEdBQUdBLEtBQUssQ0FBQzBILElBQUksQ0FBQyxDQUFDLEdBQUcxSCxLQUFLO0VBQzFILENBQUM7RUFDR2daLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDMVosQ0FBQyxFQUFFO0lBQzFDLE9BQU9BLENBQUM7RUFDVixDQUFDO0VBQ0c5QixZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ21aLEdBQUcsRUFBRXNDLFFBQVEsRUFBRTtJQUN0RCxLQUFLLElBQUkzWixDQUFDLElBQUkyWixRQUFRLEVBQUU7TUFDdEIzWixDQUFDLElBQUlxWCxHQUFHLEtBQUtBLEdBQUcsQ0FBQ3JYLENBQUMsQ0FBQyxHQUFHMlosUUFBUSxDQUFDM1osQ0FBQyxDQUFDLENBQUM7SUFDcEM7SUFFQSxPQUFPcVgsR0FBRztFQUNaLENBQUM7RUFDR3VDLG9CQUFvQixHQUFHLFNBQVNBLG9CQUFvQkEsQ0FBQ0MsZUFBZSxFQUFFO0lBQ3hFLE9BQU8sVUFBVXhDLEdBQUcsRUFBRXNDLFFBQVEsRUFBRTtNQUM5QixLQUFLLElBQUkzWixDQUFDLElBQUkyWixRQUFRLEVBQUU7UUFDdEIzWixDQUFDLElBQUlxWCxHQUFHLElBQUlyWCxDQUFDLEtBQUssVUFBVSxJQUFJNlosZUFBZSxJQUFJN1osQ0FBQyxLQUFLLE1BQU0sS0FBS3FYLEdBQUcsQ0FBQ3JYLENBQUMsQ0FBQyxHQUFHMlosUUFBUSxDQUFDM1osQ0FBQyxDQUFDLENBQUM7TUFDM0Y7SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUNHK1csTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUMrQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUMxQyxLQUFLLElBQUkvWixDQUFDLElBQUkrWixPQUFPLEVBQUU7TUFDckJELElBQUksQ0FBQzlaLENBQUMsQ0FBQyxHQUFHK1osT0FBTyxDQUFDL1osQ0FBQyxDQUFDO0lBQ3RCO0lBRUEsT0FBTzhaLElBQUk7RUFDYixDQUFDO0VBQ0dFLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDRixJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUNsRCxLQUFLLElBQUkvWixDQUFDLElBQUkrWixPQUFPLEVBQUU7TUFDckIvWixDQUFDLEtBQUssV0FBVyxJQUFJQSxDQUFDLEtBQUssYUFBYSxJQUFJQSxDQUFDLEtBQUssV0FBVyxLQUFLOFosSUFBSSxDQUFDOVosQ0FBQyxDQUFDLEdBQUcyVixTQUFTLENBQUNvRSxPQUFPLENBQUMvWixDQUFDLENBQUMsQ0FBQyxHQUFHZ2EsVUFBVSxDQUFDRixJQUFJLENBQUM5WixDQUFDLENBQUMsS0FBSzhaLElBQUksQ0FBQzlaLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUrWixPQUFPLENBQUMvWixDQUFDLENBQUMsQ0FBQyxHQUFHK1osT0FBTyxDQUFDL1osQ0FBQyxDQUFDLENBQUM7SUFDcks7SUFFQSxPQUFPOFosSUFBSTtFQUNiLENBQUM7RUFDR0csY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUM1QyxHQUFHLEVBQUU2QyxTQUFTLEVBQUU7SUFDM0QsSUFBSUMsSUFBSSxHQUFHLENBQUMsQ0FBQztNQUNUbmEsQ0FBQztJQUVMLEtBQUtBLENBQUMsSUFBSXFYLEdBQUcsRUFBRTtNQUNiclgsQ0FBQyxJQUFJa2EsU0FBUyxLQUFLQyxJQUFJLENBQUNuYSxDQUFDLENBQUMsR0FBR3FYLEdBQUcsQ0FBQ3JYLENBQUMsQ0FBQyxDQUFDO0lBQ3RDO0lBRUEsT0FBT21hLElBQUk7RUFDYixDQUFDO0VBQ0dDLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQ3JJLElBQUksRUFBRTtJQUNyRCxJQUFJakosTUFBTSxHQUFHaUosSUFBSSxDQUFDakosTUFBTSxJQUFJME4sZUFBZTtNQUN2Q21DLElBQUksR0FBRzVHLElBQUksQ0FBQ3NJLFNBQVMsR0FBR1Qsb0JBQW9CLENBQUMzRCxRQUFRLENBQUNsRSxJQUFJLENBQUNzSSxTQUFTLENBQUMsQ0FBQyxHQUFHbmMsWUFBWTtJQUV6RixJQUFJMFgsV0FBVyxDQUFDN0QsSUFBSSxDQUFDdUksT0FBTyxDQUFDLEVBQUU7TUFDN0IsT0FBT3hSLE1BQU0sRUFBRTtRQUNiNlAsSUFBSSxDQUFDNUcsSUFBSSxFQUFFakosTUFBTSxDQUFDaUosSUFBSSxDQUFDNEgsUUFBUSxDQUFDO1FBQ2hDN1EsTUFBTSxHQUFHQSxNQUFNLENBQUNBLE1BQU0sSUFBSUEsTUFBTSxDQUFDeVIsR0FBRztNQUN0QztJQUNGO0lBRUEsT0FBT3hJLElBQUk7RUFDYixDQUFDO0VBQ0d5SSxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ0MsRUFBRSxFQUFFQyxFQUFFLEVBQUU7SUFDL0MsSUFBSXhYLENBQUMsR0FBR3VYLEVBQUUsQ0FBQ2xnQixNQUFNO01BQ2JpUSxLQUFLLEdBQUd0SCxDQUFDLEtBQUt3WCxFQUFFLENBQUNuZ0IsTUFBTTtJQUUzQixPQUFPaVEsS0FBSyxJQUFJdEgsQ0FBQyxFQUFFLElBQUl1WCxFQUFFLENBQUN2WCxDQUFDLENBQUMsS0FBS3dYLEVBQUUsQ0FBQ3hYLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFekMsT0FBT0EsQ0FBQyxHQUFHLENBQUM7RUFDZCxDQUFDO0VBQ0d5WCxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUM3UixNQUFNLEVBQUU4UixLQUFLLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUU7SUFDL0YsSUFBSUYsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3hCQSxTQUFTLEdBQUcsUUFBUTtJQUN0QjtJQUVBLElBQUlDLFFBQVEsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUN2QkEsUUFBUSxHQUFHLE9BQU87SUFDcEI7SUFFQSxJQUFJRSxJQUFJLEdBQUdsUyxNQUFNLENBQUNnUyxRQUFRLENBQUM7TUFDdkIvYSxDQUFDO0lBRUwsSUFBSWdiLE1BQU0sRUFBRTtNQUNWaGIsQ0FBQyxHQUFHNmEsS0FBSyxDQUFDRyxNQUFNLENBQUM7TUFFakIsT0FBT0MsSUFBSSxJQUFJQSxJQUFJLENBQUNELE1BQU0sQ0FBQyxHQUFHaGIsQ0FBQyxFQUFFO1FBQy9CaWIsSUFBSSxHQUFHQSxJQUFJLENBQUNDLEtBQUs7TUFDbkI7SUFDRjtJQUVBLElBQUlELElBQUksRUFBRTtNQUNSSixLQUFLLENBQUMvUCxLQUFLLEdBQUdtUSxJQUFJLENBQUNuUSxLQUFLO01BQ3hCbVEsSUFBSSxDQUFDblEsS0FBSyxHQUFHK1AsS0FBSztJQUNwQixDQUFDLE1BQU07TUFDTEEsS0FBSyxDQUFDL1AsS0FBSyxHQUFHL0IsTUFBTSxDQUFDK1IsU0FBUyxDQUFDO01BQy9CL1IsTUFBTSxDQUFDK1IsU0FBUyxDQUFDLEdBQUdELEtBQUs7SUFDM0I7SUFFQSxJQUFJQSxLQUFLLENBQUMvUCxLQUFLLEVBQUU7TUFDZitQLEtBQUssQ0FBQy9QLEtBQUssQ0FBQ29RLEtBQUssR0FBR0wsS0FBSztJQUMzQixDQUFDLE1BQU07TUFDTDlSLE1BQU0sQ0FBQ2dTLFFBQVEsQ0FBQyxHQUFHRixLQUFLO0lBQzFCO0lBRUFBLEtBQUssQ0FBQ0ssS0FBSyxHQUFHRCxJQUFJO0lBQ2xCSixLQUFLLENBQUM5UixNQUFNLEdBQUc4UixLQUFLLENBQUNMLEdBQUcsR0FBR3pSLE1BQU07SUFDakMsT0FBTzhSLEtBQUs7RUFDZCxDQUFDO0VBQ0d6YyxxQkFBcUIsR0FBRyxTQUFTQSxxQkFBcUJBLENBQUMySyxNQUFNLEVBQUU4UixLQUFLLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO0lBQzdGLElBQUlELFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUN4QkEsU0FBUyxHQUFHLFFBQVE7SUFDdEI7SUFFQSxJQUFJQyxRQUFRLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDdkJBLFFBQVEsR0FBRyxPQUFPO0lBQ3BCO0lBRUEsSUFBSUUsSUFBSSxHQUFHSixLQUFLLENBQUNLLEtBQUs7TUFDbEJDLElBQUksR0FBR04sS0FBSyxDQUFDL1AsS0FBSztJQUV0QixJQUFJbVEsSUFBSSxFQUFFO01BQ1JBLElBQUksQ0FBQ25RLEtBQUssR0FBR3FRLElBQUk7SUFDbkIsQ0FBQyxNQUFNLElBQUlwUyxNQUFNLENBQUMrUixTQUFTLENBQUMsS0FBS0QsS0FBSyxFQUFFO01BQ3RDOVIsTUFBTSxDQUFDK1IsU0FBUyxDQUFDLEdBQUdLLElBQUk7SUFDMUI7SUFFQSxJQUFJQSxJQUFJLEVBQUU7TUFDUkEsSUFBSSxDQUFDRCxLQUFLLEdBQUdELElBQUk7SUFDbkIsQ0FBQyxNQUFNLElBQUlsUyxNQUFNLENBQUNnUyxRQUFRLENBQUMsS0FBS0YsS0FBSyxFQUFFO01BQ3JDOVIsTUFBTSxDQUFDZ1MsUUFBUSxDQUFDLEdBQUdFLElBQUk7SUFDekI7SUFFQUosS0FBSyxDQUFDL1AsS0FBSyxHQUFHK1AsS0FBSyxDQUFDSyxLQUFLLEdBQUdMLEtBQUssQ0FBQzlSLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztFQUNuRCxDQUFDO0VBQ0dxUyxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUNQLEtBQUssRUFBRVEseUJBQXlCLEVBQUU7SUFDbkZSLEtBQUssQ0FBQzlSLE1BQU0sS0FBSyxDQUFDc1MseUJBQXlCLElBQUlSLEtBQUssQ0FBQzlSLE1BQU0sQ0FBQ3VTLGtCQUFrQixDQUFDLElBQUlULEtBQUssQ0FBQzlSLE1BQU0sQ0FBQ3dTLE1BQU0sSUFBSVYsS0FBSyxDQUFDOVIsTUFBTSxDQUFDd1MsTUFBTSxDQUFDVixLQUFLLENBQUM7SUFDcElBLEtBQUssQ0FBQ1csSUFBSSxHQUFHLENBQUM7RUFDaEIsQ0FBQztFQUNHQyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ3BDLFNBQVMsRUFBRXdCLEtBQUssRUFBRTtJQUNqRCxJQUFJeEIsU0FBUyxLQUFLLENBQUN3QixLQUFLLElBQUlBLEtBQUssQ0FBQ2EsSUFBSSxHQUFHckMsU0FBUyxDQUFDek4sSUFBSSxJQUFJaVAsS0FBSyxDQUFDYyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7TUFDNUU7TUFDQSxJQUFJclosQ0FBQyxHQUFHK1csU0FBUztNQUVqQixPQUFPL1csQ0FBQyxFQUFFO1FBQ1JBLENBQUMsQ0FBQ3NaLE1BQU0sR0FBRyxDQUFDO1FBQ1p0WixDQUFDLEdBQUdBLENBQUMsQ0FBQ3lHLE1BQU07TUFDZDtJQUNGO0lBRUEsT0FBT3NRLFNBQVM7RUFDbEIsQ0FBQztFQUNHd0MsaUJBQWlCLEdBQUcsU0FBU0EsaUJBQWlCQSxDQUFDeEMsU0FBUyxFQUFFO0lBQzVELElBQUl0USxNQUFNLEdBQUdzUSxTQUFTLENBQUN0USxNQUFNO0lBRTdCLE9BQU9BLE1BQU0sSUFBSUEsTUFBTSxDQUFDQSxNQUFNLEVBQUU7TUFDOUI7TUFDQUEsTUFBTSxDQUFDNlMsTUFBTSxHQUFHLENBQUM7TUFDakI3UyxNQUFNLENBQUMrUyxhQUFhLENBQUMsQ0FBQztNQUN0Qi9TLE1BQU0sR0FBR0EsTUFBTSxDQUFDQSxNQUFNO0lBQ3hCO0lBRUEsT0FBT3NRLFNBQVM7RUFDbEIsQ0FBQztFQUNHMEMsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNyUSxLQUFLLEVBQUVzUSxTQUFTLEVBQUV2RSxjQUFjLEVBQUU2QixLQUFLLEVBQUU7SUFDcEYsT0FBTzVOLEtBQUssQ0FBQzhOLFFBQVEsS0FBSzVhLFVBQVUsR0FBRzhNLEtBQUssQ0FBQzhOLFFBQVEsQ0FBQzNWLE1BQU0sQ0FBQzhULG1CQUFtQixDQUFDLEdBQUdqTSxLQUFLLENBQUNzRyxJQUFJLENBQUNpSyxlQUFlLElBQUksQ0FBQ3ZRLEtBQUssQ0FBQ3NHLElBQUksQ0FBQ2tLLFVBQVUsSUFBSXhRLEtBQUssQ0FBQzhOLFFBQVEsQ0FBQ2xHLE1BQU0sQ0FBQzBJLFNBQVMsRUFBRSxJQUFJLEVBQUUxQyxLQUFLLENBQUMsQ0FBQztFQUM1TCxDQUFDO0VBQ0c2QyxxQkFBcUIsR0FBRyxTQUFTQSxxQkFBcUJBLENBQUM5QyxTQUFTLEVBQUU7SUFDcEUsT0FBTyxDQUFDQSxTQUFTLElBQUlBLFNBQVMsQ0FBQytDLEdBQUcsSUFBSUQscUJBQXFCLENBQUM5QyxTQUFTLENBQUN0USxNQUFNLENBQUM7RUFDL0UsQ0FBQztFQUNHc1QscUJBQXFCLEdBQUcsU0FBU0EscUJBQXFCQSxDQUFDaEQsU0FBUyxFQUFFO0lBQ3BFLE9BQU9BLFNBQVMsQ0FBQ2lELE9BQU8sR0FBR0MsZUFBZSxDQUFDbEQsU0FBUyxDQUFDbUQsTUFBTSxFQUFFbkQsU0FBUyxHQUFHQSxTQUFTLENBQUN0RSxRQUFRLENBQUMsQ0FBQyxHQUFHc0UsU0FBUyxDQUFDb0QsT0FBTyxDQUFDLEdBQUdwRCxTQUFTLEdBQUcsQ0FBQztFQUNwSSxDQUFDO0VBQ0c7RUFDSmtELGVBQWUsR0FBRyxTQUFTQSxlQUFlQSxDQUFDRyxLQUFLLEVBQUVDLGFBQWEsRUFBRTtJQUMvRCxJQUFJQyxLQUFLLEdBQUc1ZCxJQUFJLENBQUM2ZCxLQUFLLENBQUNILEtBQUssSUFBSUMsYUFBYSxDQUFDO0lBQzlDLE9BQU9ELEtBQUssSUFBSUUsS0FBSyxLQUFLRixLQUFLLEdBQUdFLEtBQUssR0FBRyxDQUFDLEdBQUdBLEtBQUs7RUFDckQsQ0FBQztFQUNHRSx1QkFBdUIsR0FBRyxTQUFTQSx1QkFBdUJBLENBQUNDLFVBQVUsRUFBRWxDLEtBQUssRUFBRTtJQUNoRixPQUFPLENBQUNrQyxVQUFVLEdBQUdsQyxLQUFLLENBQUNjLE1BQU0sSUFBSWQsS0FBSyxDQUFDdUIsR0FBRyxJQUFJdkIsS0FBSyxDQUFDdUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUd2QixLQUFLLENBQUNlLE1BQU0sR0FBR2YsS0FBSyxDQUFDaUIsYUFBYSxDQUFDLENBQUMsR0FBR2pCLEtBQUssQ0FBQ21DLEtBQUssQ0FBQztFQUM1SCxDQUFDO0VBQ0dDLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDNUQsU0FBUyxFQUFFO0lBQ3hDLE9BQU9BLFNBQVMsQ0FBQ3FDLElBQUksR0FBRzdDLGFBQWEsQ0FBQ1EsU0FBUyxDQUFDc0MsTUFBTSxJQUFJdEMsU0FBUyxDQUFDMkQsS0FBSyxHQUFHaGUsSUFBSSxDQUFDMlEsR0FBRyxDQUFDMEosU0FBUyxDQUFDK0MsR0FBRyxJQUFJL0MsU0FBUyxDQUFDNkQsSUFBSSxJQUFJL0gsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDMUksQ0FBQztFQUNHZ0ksY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUM5RCxTQUFTLEVBQUUyQyxTQUFTLEVBQUU7SUFDakU7SUFDQSxJQUFJalQsTUFBTSxHQUFHc1EsU0FBUyxDQUFDbUIsR0FBRztJQUUxQixJQUFJelIsTUFBTSxJQUFJQSxNQUFNLENBQUNxVSxpQkFBaUIsSUFBSS9ELFNBQVMsQ0FBQytDLEdBQUcsRUFBRTtNQUN2RC9DLFNBQVMsQ0FBQ3NDLE1BQU0sR0FBRzlDLGFBQWEsQ0FBQzlQLE1BQU0sQ0FBQzRDLEtBQUssSUFBSTBOLFNBQVMsQ0FBQytDLEdBQUcsR0FBRyxDQUFDLEdBQUdKLFNBQVMsR0FBRzNDLFNBQVMsQ0FBQytDLEdBQUcsR0FBRyxDQUFDLENBQUMvQyxTQUFTLENBQUN1QyxNQUFNLEdBQUd2QyxTQUFTLENBQUN5QyxhQUFhLENBQUMsQ0FBQyxHQUFHekMsU0FBUyxDQUFDMkQsS0FBSyxJQUFJaEIsU0FBUyxJQUFJLENBQUMzQyxTQUFTLENBQUMrQyxHQUFHLENBQUMsQ0FBQztNQUVsTWEsT0FBTyxDQUFDNUQsU0FBUyxDQUFDO01BRWxCdFEsTUFBTSxDQUFDNlMsTUFBTSxJQUFJSCxRQUFRLENBQUMxUyxNQUFNLEVBQUVzUSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hEOztJQUVBLE9BQU9BLFNBQVM7RUFDbEIsQ0FBQztFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0FnRSxjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQ0MsUUFBUSxFQUFFekMsS0FBSyxFQUFFO0lBQ3hELElBQUk3YSxDQUFDO0lBRUwsSUFBSTZhLEtBQUssQ0FBQ2xQLEtBQUssSUFBSSxDQUFDa1AsS0FBSyxDQUFDalAsSUFBSSxJQUFJaVAsS0FBSyxDQUFDdEIsUUFBUSxJQUFJc0IsS0FBSyxDQUFDYyxNQUFNLEdBQUcyQixRQUFRLENBQUMzUixLQUFLLEtBQUtrUCxLQUFLLENBQUNqUCxJQUFJLElBQUksQ0FBQ2lQLEtBQUssQ0FBQzdILEdBQUcsQ0FBQyxFQUFFO01BQy9HO01BQ0FoVCxDQUFDLEdBQUc4Yyx1QkFBdUIsQ0FBQ1EsUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFMUMsS0FBSyxDQUFDO01BRXRELElBQUksQ0FBQ0EsS0FBSyxDQUFDalAsSUFBSSxJQUFJNFIsTUFBTSxDQUFDLENBQUMsRUFBRTNDLEtBQUssQ0FBQ2lCLGFBQWEsQ0FBQyxDQUFDLEVBQUU5YixDQUFDLENBQUMsR0FBRzZhLEtBQUssQ0FBQzJCLE1BQU0sR0FBR3JILFFBQVEsRUFBRTtRQUNoRjBGLEtBQUssQ0FBQ3ZILE1BQU0sQ0FBQ3RULENBQUMsRUFBRSxJQUFJLENBQUM7TUFDdkI7SUFDRixDQUFDLENBQUM7O0lBR0YsSUFBSXliLFFBQVEsQ0FBQzZCLFFBQVEsRUFBRXpDLEtBQUssQ0FBQyxDQUFDTCxHQUFHLElBQUk4QyxRQUFRLENBQUMvRCxRQUFRLElBQUkrRCxRQUFRLENBQUMzUixLQUFLLElBQUkyUixRQUFRLENBQUMxUixJQUFJLElBQUkwUixRQUFRLENBQUNsQixHQUFHLEVBQUU7TUFDekc7TUFDQSxJQUFJa0IsUUFBUSxDQUFDMVIsSUFBSSxHQUFHMFIsUUFBUSxDQUFDdkksUUFBUSxDQUFDLENBQUMsRUFBRTtRQUN2Qy9VLENBQUMsR0FBR3NkLFFBQVE7UUFFWixPQUFPdGQsQ0FBQyxDQUFDd2EsR0FBRyxFQUFFO1VBQ1p4YSxDQUFDLENBQUN1ZCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSXZkLENBQUMsQ0FBQ2djLFNBQVMsQ0FBQ2hjLENBQUMsQ0FBQ3djLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1VBRTNDeGMsQ0FBQyxHQUFHQSxDQUFDLENBQUN3YSxHQUFHO1FBQ1g7TUFDRjtNQUVBOEMsUUFBUSxDQUFDRyxNQUFNLEdBQUcsQ0FBQ3RJLFFBQVEsQ0FBQyxDQUFDO0lBQy9CO0VBQ0YsQ0FBQztFQUNHdUksY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNKLFFBQVEsRUFBRXpDLEtBQUssRUFBRTFSLFFBQVEsRUFBRXdVLFVBQVUsRUFBRTtJQUNsRjlDLEtBQUssQ0FBQzlSLE1BQU0sSUFBSXFTLGlCQUFpQixDQUFDUCxLQUFLLENBQUM7SUFDeENBLEtBQUssQ0FBQ2MsTUFBTSxHQUFHOUMsYUFBYSxDQUFDLENBQUNsRCxTQUFTLENBQUN4TSxRQUFRLENBQUMsR0FBR0EsUUFBUSxHQUFHQSxRQUFRLElBQUltVSxRQUFRLEtBQUs3RyxlQUFlLEdBQUdtSCxjQUFjLENBQUNOLFFBQVEsRUFBRW5VLFFBQVEsRUFBRTBSLEtBQUssQ0FBQyxHQUFHeUMsUUFBUSxDQUFDM1IsS0FBSyxJQUFJa1AsS0FBSyxDQUFDZ0QsTUFBTSxDQUFDO0lBQ3JMaEQsS0FBSyxDQUFDYSxJQUFJLEdBQUc3QyxhQUFhLENBQUNnQyxLQUFLLENBQUNjLE1BQU0sSUFBSWQsS0FBSyxDQUFDaUIsYUFBYSxDQUFDLENBQUMsR0FBRzljLElBQUksQ0FBQzJRLEdBQUcsQ0FBQ2tMLEtBQUssQ0FBQ2lELFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVyR2xELGtCQUFrQixDQUFDMEMsUUFBUSxFQUFFekMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUV5QyxRQUFRLENBQUNTLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRXJGQyxrQkFBa0IsQ0FBQ25ELEtBQUssQ0FBQyxLQUFLeUMsUUFBUSxDQUFDVyxPQUFPLEdBQUdwRCxLQUFLLENBQUM7SUFDdkQ4QyxVQUFVLElBQUlOLGNBQWMsQ0FBQ0MsUUFBUSxFQUFFekMsS0FBSyxDQUFDO0lBQzdDeUMsUUFBUSxDQUFDbEIsR0FBRyxHQUFHLENBQUMsSUFBSWUsY0FBYyxDQUFDRyxRQUFRLEVBQUVBLFFBQVEsQ0FBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQzs7SUFFL0QsT0FBT2MsUUFBUTtFQUNqQixDQUFDO0VBQ0dZLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDN0UsU0FBUyxFQUFFOEUsT0FBTyxFQUFFO0lBQy9ELE9BQU8sQ0FBQ3hILFFBQVEsQ0FBQ3lILGFBQWEsSUFBSXRnQixjQUFjLENBQUMsZUFBZSxFQUFFcWdCLE9BQU8sQ0FBQyxLQUFLeEgsUUFBUSxDQUFDeUgsYUFBYSxDQUFDcmtCLE1BQU0sQ0FBQ29rQixPQUFPLEVBQUU5RSxTQUFTLENBQUM7RUFDbEksQ0FBQztFQUNHZ0YsaUJBQWlCLEdBQUcsU0FBU0EsaUJBQWlCQSxDQUFDM1MsS0FBSyxFQUFFeEMsSUFBSSxFQUFFb1EsS0FBSyxFQUFFN0IsY0FBYyxFQUFFaUYsS0FBSyxFQUFFO0lBQzVGNEIsVUFBVSxDQUFDNVMsS0FBSyxFQUFFeEMsSUFBSSxFQUFFd1QsS0FBSyxDQUFDO0lBRTlCLElBQUksQ0FBQ2hSLEtBQUssQ0FBQzZOLFFBQVEsRUFBRTtNQUNuQixPQUFPLENBQUM7SUFDVjtJQUVBLElBQUksQ0FBQ0QsS0FBSyxJQUFJNU4sS0FBSyxDQUFDbkUsR0FBRyxJQUFJLENBQUMzSSxVQUFVLEtBQUs4TSxLQUFLLENBQUNFLElBQUksSUFBSUYsS0FBSyxDQUFDc0csSUFBSSxDQUFDdU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDN1MsS0FBSyxDQUFDRSxJQUFJLElBQUlGLEtBQUssQ0FBQ3NHLElBQUksQ0FBQ3VNLElBQUksQ0FBQyxJQUFJdkcsa0JBQWtCLEtBQUtwYSxPQUFPLENBQUM0Z0IsS0FBSyxFQUFFO01BQzdKMUcsV0FBVyxDQUFDaFYsSUFBSSxDQUFDNEksS0FBSyxDQUFDO01BRXZCQSxLQUFLLENBQUN5TixLQUFLLEdBQUcsQ0FBQ3VELEtBQUssRUFBRWpGLGNBQWMsQ0FBQztNQUNyQyxPQUFPLENBQUM7SUFDVjtFQUNGLENBQUM7RUFDR2dILDRCQUE0QixHQUFHLFNBQVNBLDRCQUE0QkEsQ0FBQy9OLElBQUksRUFBRTtJQUM3RSxJQUFJM0gsTUFBTSxHQUFHMkgsSUFBSSxDQUFDM0gsTUFBTTtJQUN4QixPQUFPQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ3FULEdBQUcsSUFBSXJULE1BQU0sQ0FBQ3dRLFFBQVEsSUFBSSxDQUFDeFEsTUFBTSxDQUFDMlYsS0FBSyxLQUFLM1YsTUFBTSxDQUFDd1UsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUlrQiw0QkFBNEIsQ0FBQzFWLE1BQU0sQ0FBQyxDQUFDO0VBQ25JLENBQUM7RUFDRztFQUNKaVYsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDbk4sS0FBSyxFQUFFO0lBQ3RELElBQUkvUSxJQUFJLEdBQUcrUSxLQUFLLENBQUMvUSxJQUFJO0lBQ3JCLE9BQU9BLElBQUksS0FBSyxhQUFhLElBQUlBLElBQUksS0FBSyxTQUFTO0VBQ3JELENBQUM7RUFDRzZlLHdCQUF3QixHQUFHLFNBQVNBLHdCQUF3QkEsQ0FBQ2pULEtBQUssRUFBRXNRLFNBQVMsRUFBRXZFLGNBQWMsRUFBRTZCLEtBQUssRUFBRTtJQUN4RyxJQUFJc0YsU0FBUyxHQUFHbFQsS0FBSyxDQUFDN0wsS0FBSztNQUN2QkEsS0FBSyxHQUFHbWMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDQSxTQUFTLEtBQUssQ0FBQ3RRLEtBQUssQ0FBQ2lRLE1BQU0sSUFBSThDLDRCQUE0QixDQUFDL1MsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQSxLQUFLLENBQUM2TixRQUFRLElBQUl5RSxrQkFBa0IsQ0FBQ3RTLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDMFEsR0FBRyxHQUFHLENBQUMsSUFBSTFRLEtBQUssQ0FBQzhPLEdBQUcsQ0FBQzRCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzRCLGtCQUFrQixDQUFDdFMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUM5TjtNQUNKbVQsV0FBVyxHQUFHblQsS0FBSyxDQUFDK1EsT0FBTztNQUN2QkMsS0FBSyxHQUFHLENBQUM7TUFDVHBWLEVBQUU7TUFDRndYLFNBQVM7TUFDVEMsYUFBYTtJQUVqQixJQUFJRixXQUFXLElBQUluVCxLQUFLLENBQUM0USxPQUFPLEVBQUU7TUFDaEM7TUFDQUksS0FBSyxHQUFHYyxNQUFNLENBQUMsQ0FBQyxFQUFFOVIsS0FBSyxDQUFDc1IsS0FBSyxFQUFFaEIsU0FBUyxDQUFDO01BQ3pDOEMsU0FBUyxHQUFHdkMsZUFBZSxDQUFDRyxLQUFLLEVBQUVtQyxXQUFXLENBQUM7TUFDL0NuVCxLQUFLLENBQUNzVCxLQUFLLElBQUlGLFNBQVMsR0FBRyxDQUFDLEtBQUtqZixLQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFLLENBQUM7TUFFbkQsSUFBSWlmLFNBQVMsS0FBS3ZDLGVBQWUsQ0FBQzdRLEtBQUssQ0FBQzhRLE1BQU0sRUFBRXFDLFdBQVcsQ0FBQyxFQUFFO1FBQzVEO1FBQ0FELFNBQVMsR0FBRyxDQUFDLEdBQUcvZSxLQUFLO1FBQ3JCNkwsS0FBSyxDQUFDc0csSUFBSSxDQUFDaU4sYUFBYSxJQUFJdlQsS0FBSyxDQUFDNk4sUUFBUSxJQUFJN04sS0FBSyxDQUFDd1QsVUFBVSxDQUFDLENBQUM7TUFDbEU7SUFDRjtJQUVBLElBQUlyZixLQUFLLEtBQUsrZSxTQUFTLElBQUloZ0IsVUFBVSxJQUFJMGEsS0FBSyxJQUFJNU4sS0FBSyxDQUFDK1IsTUFBTSxLQUFLdEksUUFBUSxJQUFJLENBQUM2RyxTQUFTLElBQUl0USxLQUFLLENBQUMrUixNQUFNLEVBQUU7TUFDekcsSUFBSSxDQUFDL1IsS0FBSyxDQUFDNk4sUUFBUSxJQUFJOEUsaUJBQWlCLENBQUMzUyxLQUFLLEVBQUVzUSxTQUFTLEVBQUUxQyxLQUFLLEVBQUU3QixjQUFjLEVBQUVpRixLQUFLLENBQUMsRUFBRTtRQUN4RjtRQUNBO01BQ0Y7TUFFQXFDLGFBQWEsR0FBR3JULEtBQUssQ0FBQytSLE1BQU07TUFDNUIvUixLQUFLLENBQUMrUixNQUFNLEdBQUd6QixTQUFTLEtBQUt2RSxjQUFjLEdBQUd0QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFN0RzQyxjQUFjLEtBQUtBLGNBQWMsR0FBR3VFLFNBQVMsSUFBSSxDQUFDK0MsYUFBYSxDQUFDLENBQUMsQ0FBQzs7TUFFbEVyVCxLQUFLLENBQUM3TCxLQUFLLEdBQUdBLEtBQUs7TUFDbkI2TCxLQUFLLENBQUN5VCxLQUFLLEtBQUt0ZixLQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFLLENBQUM7TUFDbEM2TCxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO01BQ2ZELEtBQUssQ0FBQzhRLE1BQU0sR0FBR0UsS0FBSztNQUNwQnBWLEVBQUUsR0FBR29FLEtBQUssQ0FBQ25FLEdBQUc7TUFFZCxPQUFPRCxFQUFFLEVBQUU7UUFDVEEsRUFBRSxDQUFDMEQsQ0FBQyxDQUFDbkwsS0FBSyxFQUFFeUgsRUFBRSxDQUFDdUYsQ0FBQyxDQUFDO1FBQ2pCdkYsRUFBRSxHQUFHQSxFQUFFLENBQUN3RCxLQUFLO01BQ2Y7TUFFQWtSLFNBQVMsR0FBRyxDQUFDLElBQUlELGNBQWMsQ0FBQ3JRLEtBQUssRUFBRXNRLFNBQVMsRUFBRXZFLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDdkUvTCxLQUFLLENBQUMwVCxTQUFTLElBQUksQ0FBQzNILGNBQWMsSUFBSTRILFNBQVMsQ0FBQzNULEtBQUssRUFBRSxVQUFVLENBQUM7TUFDbEVnUixLQUFLLElBQUloUixLQUFLLENBQUM0USxPQUFPLElBQUksQ0FBQzdFLGNBQWMsSUFBSS9MLEtBQUssQ0FBQzNDLE1BQU0sSUFBSXNXLFNBQVMsQ0FBQzNULEtBQUssRUFBRSxVQUFVLENBQUM7TUFFekYsSUFBSSxDQUFDc1EsU0FBUyxJQUFJdFEsS0FBSyxDQUFDc1IsS0FBSyxJQUFJaEIsU0FBUyxHQUFHLENBQUMsS0FBS3RRLEtBQUssQ0FBQzdMLEtBQUssS0FBS0EsS0FBSyxFQUFFO1FBQ3hFQSxLQUFLLElBQUl1YixpQkFBaUIsQ0FBQzFQLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDK0wsY0FBYyxJQUFJLENBQUM3WSxVQUFVLEVBQUU7VUFDbEN5Z0IsU0FBUyxDQUFDM1QsS0FBSyxFQUFFN0wsS0FBSyxHQUFHLFlBQVksR0FBRyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7VUFFbEU2TCxLQUFLLENBQUM0VCxLQUFLLElBQUk1VCxLQUFLLENBQUM0VCxLQUFLLENBQUMsQ0FBQztRQUM5QjtNQUNGO0lBQ0YsQ0FBQyxNQUFNLElBQUksQ0FBQzVULEtBQUssQ0FBQytSLE1BQU0sRUFBRTtNQUN4Qi9SLEtBQUssQ0FBQytSLE1BQU0sR0FBR3pCLFNBQVM7SUFDMUI7RUFDRixDQUFDO0VBQ0d1RCxtQkFBbUIsR0FBRyxTQUFTQSxtQkFBbUJBLENBQUNsRyxTQUFTLEVBQUVtRyxRQUFRLEVBQUV0VyxJQUFJLEVBQUU7SUFDaEYsSUFBSTJSLEtBQUs7SUFFVCxJQUFJM1IsSUFBSSxHQUFHc1csUUFBUSxFQUFFO01BQ25CM0UsS0FBSyxHQUFHeEIsU0FBUyxDQUFDb0csTUFBTTtNQUV4QixPQUFPNUUsS0FBSyxJQUFJQSxLQUFLLENBQUNjLE1BQU0sSUFBSXpTLElBQUksRUFBRTtRQUNwQyxJQUFJMlIsS0FBSyxDQUFDL2EsSUFBSSxLQUFLLFNBQVMsSUFBSSthLEtBQUssQ0FBQ2MsTUFBTSxHQUFHNkQsUUFBUSxFQUFFO1VBQ3ZELE9BQU8zRSxLQUFLO1FBQ2Q7UUFFQUEsS0FBSyxHQUFHQSxLQUFLLENBQUMvUCxLQUFLO01BQ3JCO0lBQ0YsQ0FBQyxNQUFNO01BQ0wrUCxLQUFLLEdBQUd4QixTQUFTLENBQUNxRyxLQUFLO01BRXZCLE9BQU83RSxLQUFLLElBQUlBLEtBQUssQ0FBQ2MsTUFBTSxJQUFJelMsSUFBSSxFQUFFO1FBQ3BDLElBQUkyUixLQUFLLENBQUMvYSxJQUFJLEtBQUssU0FBUyxJQUFJK2EsS0FBSyxDQUFDYyxNQUFNLEdBQUc2RCxRQUFRLEVBQUU7VUFDdkQsT0FBTzNFLEtBQUs7UUFDZDtRQUVBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ssS0FBSztNQUNyQjtJQUNGO0VBQ0YsQ0FBQztFQUNHeUUsWUFBWSxHQUFHLFNBQVNBLFlBQVlBLENBQUN0RyxTQUFTLEVBQUV0RSxRQUFRLEVBQUU2SyxXQUFXLEVBQUVDLGFBQWEsRUFBRTtJQUN4RixJQUFJQyxNQUFNLEdBQUd6RyxTQUFTLENBQUNpRCxPQUFPO01BQzFCeUQsR0FBRyxHQUFHbEgsYUFBYSxDQUFDOUQsUUFBUSxDQUFDLElBQUksQ0FBQztNQUNsQ2lMLGFBQWEsR0FBRzNHLFNBQVMsQ0FBQ21ELE1BQU0sR0FBR25ELFNBQVMsQ0FBQzJELEtBQUs7SUFDdERnRCxhQUFhLElBQUksQ0FBQ0gsYUFBYSxLQUFLeEcsU0FBUyxDQUFDMU4sS0FBSyxJQUFJb1UsR0FBRyxHQUFHMUcsU0FBUyxDQUFDek4sSUFBSSxDQUFDO0lBQzVFeU4sU0FBUyxDQUFDek4sSUFBSSxHQUFHbVUsR0FBRztJQUNwQjFHLFNBQVMsQ0FBQzJELEtBQUssR0FBRyxDQUFDOEMsTUFBTSxHQUFHQyxHQUFHLEdBQUdELE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHakgsYUFBYSxDQUFDa0gsR0FBRyxJQUFJRCxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUd6RyxTQUFTLENBQUNvRCxPQUFPLEdBQUdxRCxNQUFNLENBQUM7SUFDcEhFLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQ0gsYUFBYSxJQUFJMUMsY0FBYyxDQUFDOUQsU0FBUyxFQUFFQSxTQUFTLENBQUNtRCxNQUFNLEdBQUduRCxTQUFTLENBQUMyRCxLQUFLLEdBQUdnRCxhQUFhLENBQUM7SUFDcEgzRyxTQUFTLENBQUN0USxNQUFNLElBQUlrVSxPQUFPLENBQUM1RCxTQUFTLENBQUM7SUFDdEN1RyxXQUFXLElBQUluRSxRQUFRLENBQUNwQyxTQUFTLENBQUN0USxNQUFNLEVBQUVzUSxTQUFTLENBQUM7SUFDcEQsT0FBT0EsU0FBUztFQUNsQixDQUFDO0VBQ0c0RyxzQkFBc0IsR0FBRyxTQUFTQSxzQkFBc0JBLENBQUM1RyxTQUFTLEVBQUU7SUFDdEUsT0FBT0EsU0FBUyxZQUFZNkcsUUFBUSxHQUFHekUsUUFBUSxDQUFDcEMsU0FBUyxDQUFDLEdBQUdzRyxZQUFZLENBQUN0RyxTQUFTLEVBQUVBLFNBQVMsQ0FBQ3pOLElBQUksQ0FBQztFQUN0RyxDQUFDO0VBQ0d1VSxhQUFhLEdBQUc7SUFDbEJ4RSxNQUFNLEVBQUUsQ0FBQztJQUNUeUUsT0FBTyxFQUFFN0ksVUFBVTtJQUNuQnVFLGFBQWEsRUFBRXZFO0VBQ2pCLENBQUM7RUFDR3FHLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDdkUsU0FBUyxFQUFFbFEsUUFBUSxFQUFFa1gsZ0JBQWdCLEVBQUU7SUFDbEYsSUFBSUMsTUFBTSxHQUFHakgsU0FBUyxDQUFDaUgsTUFBTTtNQUN6QkMsTUFBTSxHQUFHbEgsU0FBUyxDQUFDNEUsT0FBTyxJQUFJa0MsYUFBYTtNQUMzQ0ssZUFBZSxHQUFHbkgsU0FBUyxDQUFDdEUsUUFBUSxDQUFDLENBQUMsSUFBSTFWLE9BQU8sR0FBR2toQixNQUFNLENBQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRy9HLFNBQVMsQ0FBQ3pOLElBQUk7TUFDMUY7TUFDSnpJLENBQUM7TUFDR3NkLE1BQU07TUFDTkMsU0FBUztJQUViLElBQUkzakIsU0FBUyxDQUFDb00sUUFBUSxDQUFDLEtBQUt3WCxLQUFLLENBQUN4WCxRQUFRLENBQUMsSUFBSUEsUUFBUSxJQUFJbVgsTUFBTSxDQUFDLEVBQUU7TUFDbEU7TUFDQUcsTUFBTSxHQUFHdFgsUUFBUSxDQUFDcEUsTUFBTSxDQUFDLENBQUMsQ0FBQztNQUMzQjJiLFNBQVMsR0FBR3ZYLFFBQVEsQ0FBQy9GLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7TUFDdkNELENBQUMsR0FBR2dHLFFBQVEsQ0FBQ2hILE9BQU8sQ0FBQyxHQUFHLENBQUM7TUFFekIsSUFBSXNlLE1BQU0sS0FBSyxHQUFHLElBQUlBLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDcEN0ZCxDQUFDLElBQUksQ0FBQyxLQUFLZ0csUUFBUSxHQUFHQSxRQUFRLENBQUM5RixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQ29kLE1BQU0sS0FBSyxHQUFHLEdBQUdGLE1BQU0sQ0FBQzVFLE1BQU0sR0FBRzRFLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDRyxNQUFNLENBQUNqRSxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ25VLFVBQVUsQ0FBQ2dCLFFBQVEsQ0FBQy9GLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBS3NkLFNBQVMsR0FBRyxDQUFDdmQsQ0FBQyxHQUFHLENBQUMsR0FBR29kLE1BQU0sR0FBR0YsZ0JBQWdCLEVBQUV2RSxhQUFhLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7TUFDck07TUFFQSxJQUFJM1ksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNUZ0csUUFBUSxJQUFJbVgsTUFBTSxLQUFLQSxNQUFNLENBQUNuWCxRQUFRLENBQUMsR0FBR3FYLGVBQWUsQ0FBQztRQUMxRCxPQUFPRixNQUFNLENBQUNuWCxRQUFRLENBQUM7TUFDekI7TUFFQXNYLE1BQU0sR0FBR3RZLFVBQVUsQ0FBQ2dCLFFBQVEsQ0FBQ3BFLE1BQU0sQ0FBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR2dHLFFBQVEsQ0FBQy9GLE1BQU0sQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BRXBFLElBQUl1ZCxTQUFTLElBQUlMLGdCQUFnQixFQUFFO1FBQ2pDSSxNQUFNLEdBQUdBLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQ3ZLLFFBQVEsQ0FBQ21LLGdCQUFnQixDQUFDLEdBQUdBLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHQSxnQkFBZ0IsRUFBRXZFLGFBQWEsQ0FBQyxDQUFDO01BQy9HO01BRUEsT0FBTzNZLENBQUMsR0FBRyxDQUFDLEdBQUd5YSxjQUFjLENBQUN2RSxTQUFTLEVBQUVsUSxRQUFRLENBQUMvRixNQUFNLENBQUMsQ0FBQyxFQUFFRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVrZCxnQkFBZ0IsQ0FBQyxHQUFHSSxNQUFNLEdBQUdELGVBQWUsR0FBR0MsTUFBTTtJQUMzSDtJQUVBLE9BQU90WCxRQUFRLElBQUksSUFBSSxHQUFHcVgsZUFBZSxHQUFHLENBQUNyWCxRQUFRO0VBQ3ZELENBQUM7RUFDR3lYLGdCQUFnQixHQUFHLFNBQVNBLGdCQUFnQkEsQ0FBQ3pjLElBQUksRUFBRTBjLE1BQU0sRUFBRXZELFFBQVEsRUFBRTtJQUN2RSxJQUFJd0QsUUFBUSxHQUFHbkwsU0FBUyxDQUFDa0wsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9CRSxTQUFTLEdBQUcsQ0FBQ0QsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUszYyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDbkQ2TixJQUFJLEdBQUc2TyxNQUFNLENBQUNFLFNBQVMsQ0FBQztNQUN4QkMsTUFBTTtNQUNOalksTUFBTTtJQUVWK1gsUUFBUSxLQUFLOU8sSUFBSSxDQUFDK0MsUUFBUSxHQUFHOEwsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDN08sSUFBSSxDQUFDakosTUFBTSxHQUFHdVUsUUFBUTtJQUV0QixJQUFJblosSUFBSSxFQUFFO01BQ1I2YyxNQUFNLEdBQUdoUCxJQUFJO01BQ2JqSixNQUFNLEdBQUd1VSxRQUFRO01BRWpCLE9BQU92VSxNQUFNLElBQUksRUFBRSxpQkFBaUIsSUFBSWlZLE1BQU0sQ0FBQyxFQUFFO1FBQy9DO1FBQ0FBLE1BQU0sR0FBR2pZLE1BQU0sQ0FBQ2lKLElBQUksQ0FBQzRILFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDbkM3USxNQUFNLEdBQUc4TSxXQUFXLENBQUM5TSxNQUFNLENBQUNpSixJQUFJLENBQUN1SSxPQUFPLENBQUMsSUFBSXhSLE1BQU0sQ0FBQ0EsTUFBTTtNQUM1RDtNQUVBaUosSUFBSSxDQUFDaUssZUFBZSxHQUFHcEcsV0FBVyxDQUFDbUwsTUFBTSxDQUFDL0UsZUFBZSxDQUFDO01BQzFEOVgsSUFBSSxHQUFHLENBQUMsR0FBRzZOLElBQUksQ0FBQ2lQLFlBQVksR0FBRyxDQUFDLEdBQUdqUCxJQUFJLENBQUNRLE9BQU8sR0FBR3FPLE1BQU0sQ0FBQ0UsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0U7O0lBRUEsT0FBTyxJQUFJRyxLQUFLLENBQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTdPLElBQUksRUFBRTZPLE1BQU0sQ0FBQ0UsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzFELENBQUM7RUFDR0ksa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDeGdCLEtBQUssRUFBRWlZLElBQUksRUFBRTtJQUNoRSxPQUFPalksS0FBSyxJQUFJQSxLQUFLLEtBQUssQ0FBQyxHQUFHaVksSUFBSSxDQUFDalksS0FBSyxDQUFDLEdBQUdpWSxJQUFJO0VBQ2xELENBQUM7RUFDRzRFLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDNEQsR0FBRyxFQUFFQyxHQUFHLEVBQUUxZ0IsS0FBSyxFQUFFO0lBQzVDLE9BQU9BLEtBQUssR0FBR3lnQixHQUFHLEdBQUdBLEdBQUcsR0FBR3pnQixLQUFLLEdBQUcwZ0IsR0FBRyxHQUFHQSxHQUFHLEdBQUcxZ0IsS0FBSztFQUN0RCxDQUFDO0VBQ0c3RCxPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQzZELEtBQUssRUFBRStYLENBQUMsRUFBRTtJQUN2QyxPQUFPLENBQUMzYixTQUFTLENBQUM0RCxLQUFLLENBQUMsSUFBSSxFQUFFK1gsQ0FBQyxHQUFHbEMsUUFBUSxDQUFDOUwsSUFBSSxDQUFDL0osS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcrWCxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLENBQUM7RUFDRztFQUNKNEksS0FBSyxHQUFHLFNBQVNBLEtBQUtBLENBQUNGLEdBQUcsRUFBRUMsR0FBRyxFQUFFMWdCLEtBQUssRUFBRTtJQUN0QyxPQUFPd2dCLGtCQUFrQixDQUFDeGdCLEtBQUssRUFBRSxVQUFVK1gsQ0FBQyxFQUFFO01BQzVDLE9BQU84RSxNQUFNLENBQUM0RCxHQUFHLEVBQUVDLEdBQUcsRUFBRTNJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0c2SSxNQUFNLEdBQUcsRUFBRSxDQUFDOVIsS0FBSztFQUNqQitSLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDN2dCLEtBQUssRUFBRThnQixRQUFRLEVBQUU7SUFDeEQsT0FBTzlnQixLQUFLLElBQUlpVixTQUFTLENBQUNqVixLQUFLLENBQUMsSUFBSSxRQUFRLElBQUlBLEtBQUssS0FBSyxDQUFDOGdCLFFBQVEsSUFBSSxDQUFDOWdCLEtBQUssQ0FBQ25HLE1BQU0sSUFBSW1HLEtBQUssQ0FBQ25HLE1BQU0sR0FBRyxDQUFDLElBQUltRyxLQUFLLElBQUlpVixTQUFTLENBQUNqVixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQzJSLFFBQVEsSUFBSTNSLEtBQUssS0FBS3RDLElBQUk7RUFDaEwsQ0FBQztFQUNHcWpCLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDQyxFQUFFLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFO0lBQzlELElBQUlBLFdBQVcsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUMxQkEsV0FBVyxHQUFHLEVBQUU7SUFDbEI7SUFFQSxPQUFPRixFQUFFLENBQUN0ZixPQUFPLENBQUMsVUFBVTFCLEtBQUssRUFBRTtNQUNqQyxJQUFJbWhCLFlBQVk7TUFFaEIsT0FBTy9rQixTQUFTLENBQUM0RCxLQUFLLENBQUMsSUFBSSxDQUFDaWhCLFlBQVksSUFBSUosWUFBWSxDQUFDN2dCLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDbWhCLFlBQVksR0FBR0QsV0FBVyxFQUFFL2UsSUFBSSxDQUFDaWYsS0FBSyxDQUFDRCxZQUFZLEVBQUVySixPQUFPLENBQUM5WCxLQUFLLENBQUMsQ0FBQyxHQUFHa2hCLFdBQVcsQ0FBQy9lLElBQUksQ0FBQ25DLEtBQUssQ0FBQztJQUN0SyxDQUFDLENBQUMsSUFBSWtoQixXQUFXO0VBQ25CLENBQUM7RUFDRztFQUNKcEosT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUM5WCxLQUFLLEVBQUVvVyxLQUFLLEVBQUU2SyxZQUFZLEVBQUU7SUFDckQsT0FBTzFNLFFBQVEsSUFBSSxDQUFDNkIsS0FBSyxJQUFJN0IsUUFBUSxDQUFDcmIsUUFBUSxHQUFHcWIsUUFBUSxDQUFDcmIsUUFBUSxDQUFDOEcsS0FBSyxDQUFDLEdBQUc1RCxTQUFTLENBQUM0RCxLQUFLLENBQUMsSUFBSSxDQUFDaWhCLFlBQVksS0FBS2xMLFlBQVksSUFBSSxDQUFDc0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHVCxNQUFNLENBQUM3ZSxJQUFJLENBQUMsQ0FBQ3FVLEtBQUssSUFBSXpZLElBQUksRUFBRS9ELGdCQUFnQixDQUFDb0csS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUd1VixRQUFRLENBQUN2VixLQUFLLENBQUMsR0FBRytnQixRQUFRLENBQUMvZ0IsS0FBSyxFQUFFaWhCLFlBQVksQ0FBQyxHQUFHSixZQUFZLENBQUM3Z0IsS0FBSyxDQUFDLEdBQUc0Z0IsTUFBTSxDQUFDN2UsSUFBSSxDQUFDL0IsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHQSxLQUFLLEdBQUcsQ0FBQ0EsS0FBSyxDQUFDLEdBQUcsRUFBRTtFQUM5VCxDQUFDO0VBQ0c5RyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQzhHLEtBQUssRUFBRTtJQUN0Q0EsS0FBSyxHQUFHOFgsT0FBTyxDQUFDOVgsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUl1VyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELE9BQU8sVUFBVXdCLENBQUMsRUFBRTtNQUNsQixJQUFJdUosRUFBRSxHQUFHdGhCLEtBQUssQ0FBQ3VoQixPQUFPLElBQUl2aEIsS0FBSyxDQUFDd2hCLGFBQWEsSUFBSXhoQixLQUFLO01BQ3RELE9BQU84WCxPQUFPLENBQUNDLENBQUMsRUFBRXVKLEVBQUUsQ0FBQzFuQixnQkFBZ0IsR0FBRzBuQixFQUFFLEdBQUdBLEVBQUUsS0FBS3RoQixLQUFLLEdBQUd1VyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUk1WSxJQUFJLENBQUNnRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUczRCxLQUFLLENBQUM7SUFDMUgsQ0FBQztFQUNILENBQUM7RUFDR3loQixPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQzlmLENBQUMsRUFBRTtJQUNoQyxPQUFPQSxDQUFDLENBQUMrZixJQUFJLENBQUMsWUFBWTtNQUN4QixPQUFPLEVBQUUsR0FBR3JqQixJQUFJLENBQUNzakIsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNHO0VBQ0o7RUFDQUMsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUM3SixDQUFDLEVBQUU7SUFDbEMsSUFBSWhELFdBQVcsQ0FBQ2dELENBQUMsQ0FBQyxFQUFFO01BQ2xCLE9BQU9BLENBQUM7SUFDVjtJQUVBLElBQUkxRyxJQUFJLEdBQUc0RCxTQUFTLENBQUM4QyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxHQUFHO1FBQzVCbmYsSUFBSSxFQUFFbWY7TUFDUixDQUFDO01BQ0c7TUFDSjhKLElBQUksR0FBR0MsVUFBVSxDQUFDelEsSUFBSSxDQUFDd1EsSUFBSSxDQUFDO01BQ3hCOW5CLElBQUksR0FBR3NYLElBQUksQ0FBQ3RYLElBQUksSUFBSSxDQUFDO01BQ3JCcWYsSUFBSSxHQUFHNVIsVUFBVSxDQUFDNkosSUFBSSxDQUFDK0gsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNqQ3JZLEtBQUssR0FBRyxDQUFDLENBQUM7TUFDVmdoQixTQUFTLEdBQUdob0IsSUFBSSxHQUFHLENBQUMsSUFBSUEsSUFBSSxHQUFHLENBQUM7TUFDaENpb0IsTUFBTSxHQUFHaEMsS0FBSyxDQUFDam1CLElBQUksQ0FBQyxJQUFJZ29CLFNBQVM7TUFDakNFLElBQUksR0FBRzVRLElBQUksQ0FBQzRRLElBQUk7TUFDaEJDLE1BQU0sR0FBR25vQixJQUFJO01BQ2Jvb0IsTUFBTSxHQUFHcG9CLElBQUk7SUFFakIsSUFBSXFDLFNBQVMsQ0FBQ3JDLElBQUksQ0FBQyxFQUFFO01BQ25CbW9CLE1BQU0sR0FBR0MsTUFBTSxHQUFHO1FBQ2hCeFgsTUFBTSxFQUFFLEVBQUU7UUFDVnlYLEtBQUssRUFBRSxFQUFFO1FBQ1QzYixHQUFHLEVBQUU7TUFDUCxDQUFDLENBQUMxTSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQyxNQUFNLElBQUksQ0FBQ2dvQixTQUFTLElBQUlDLE1BQU0sRUFBRTtNQUMvQkUsTUFBTSxHQUFHbm9CLElBQUksQ0FBQyxDQUFDLENBQUM7TUFDaEJvb0IsTUFBTSxHQUFHcG9CLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEI7SUFFQSxPQUFPLFVBQVV5SSxDQUFDLEVBQUVwQyxNQUFNLEVBQUV1QixDQUFDLEVBQUU7TUFDN0IsSUFBSXdQLENBQUMsR0FBRyxDQUFDeFAsQ0FBQyxJQUFJMFAsSUFBSSxFQUFFeFgsTUFBTTtRQUN0QndvQixTQUFTLEdBQUd0aEIsS0FBSyxDQUFDb1EsQ0FBQyxDQUFDO1FBQ3BCbVIsT0FBTztRQUNQQyxPQUFPO1FBQ1AxZ0IsQ0FBQztRQUNEb0UsQ0FBQztRQUNEaUcsQ0FBQztRQUNEc1csQ0FBQztRQUNEOUIsR0FBRztRQUNIRCxHQUFHO1FBQ0hnQyxNQUFNO01BRVYsSUFBSSxDQUFDSixTQUFTLEVBQUU7UUFDZEksTUFBTSxHQUFHcFIsSUFBSSxDQUFDbEssSUFBSSxLQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQ2tLLElBQUksQ0FBQ2xLLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRXpJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMrakIsTUFBTSxFQUFFO1VBQ1gvQixHQUFHLEdBQUcsQ0FBQ2hpQixPQUFPO1VBRWQsT0FBT2dpQixHQUFHLElBQUlBLEdBQUcsR0FBRy9lLENBQUMsQ0FBQzhnQixNQUFNLEVBQUUsQ0FBQyxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNqWSxJQUFJLENBQUMsSUFBSWdZLE1BQU0sR0FBR3RSLENBQUMsRUFBRSxDQUFDO1VBRTlFc1IsTUFBTSxFQUFFO1FBQ1Y7UUFFQUosU0FBUyxHQUFHdGhCLEtBQUssQ0FBQ29RLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDekJtUixPQUFPLEdBQUdOLE1BQU0sR0FBRzNqQixJQUFJLENBQUNvaUIsR0FBRyxDQUFDZ0MsTUFBTSxFQUFFdFIsQ0FBQyxDQUFDLEdBQUcrUSxNQUFNLEdBQUcsRUFBRSxHQUFHbm9CLElBQUksR0FBRzBvQixNQUFNO1FBQ3BFRixPQUFPLEdBQUdFLE1BQU0sS0FBSy9qQixPQUFPLEdBQUcsQ0FBQyxHQUFHc2pCLE1BQU0sR0FBRzdRLENBQUMsR0FBR2dSLE1BQU0sR0FBR00sTUFBTSxHQUFHLEVBQUUsR0FBRzFvQixJQUFJLEdBQUcwb0IsTUFBTSxHQUFHLENBQUM7UUFDeEYvQixHQUFHLEdBQUcsQ0FBQztRQUNQRCxHQUFHLEdBQUcvaEIsT0FBTztRQUViLEtBQUs4akIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHclIsQ0FBQyxFQUFFcVIsQ0FBQyxFQUFFLEVBQUU7VUFDdEIzZ0IsQ0FBQyxHQUFHMmdCLENBQUMsR0FBR0MsTUFBTSxHQUFHSCxPQUFPO1VBQ3hCcmMsQ0FBQyxHQUFHc2MsT0FBTyxJQUFJQyxDQUFDLEdBQUdDLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDOUJKLFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLEdBQUd0VyxDQUFDLEdBQUcsQ0FBQytWLElBQUksR0FBR3JOLEtBQUssQ0FBQy9TLENBQUMsR0FBR0EsQ0FBQyxHQUFHb0UsQ0FBQyxHQUFHQSxDQUFDLENBQUMsR0FBRzVILElBQUksQ0FBQzJRLEdBQUcsQ0FBQ2lULElBQUksS0FBSyxHQUFHLEdBQUdoYyxDQUFDLEdBQUdwRSxDQUFDLENBQUM7VUFDaEZxSyxDQUFDLEdBQUd3VSxHQUFHLEtBQUtBLEdBQUcsR0FBR3hVLENBQUMsQ0FBQztVQUNwQkEsQ0FBQyxHQUFHdVUsR0FBRyxLQUFLQSxHQUFHLEdBQUd2VSxDQUFDLENBQUM7UUFDdEI7UUFFQW5TLElBQUksS0FBSyxRQUFRLElBQUkwbkIsT0FBTyxDQUFDWSxTQUFTLENBQUM7UUFDdkNBLFNBQVMsQ0FBQzNCLEdBQUcsR0FBR0EsR0FBRyxHQUFHRCxHQUFHO1FBQ3pCNEIsU0FBUyxDQUFDNUIsR0FBRyxHQUFHQSxHQUFHO1FBQ25CNEIsU0FBUyxDQUFDdEssQ0FBQyxHQUFHNUcsQ0FBQyxHQUFHLENBQUMzSixVQUFVLENBQUM2SixJQUFJLENBQUNySixNQUFNLENBQUMsSUFBSVIsVUFBVSxDQUFDNkosSUFBSSxDQUFDelksSUFBSSxDQUFDLElBQUk2cEIsTUFBTSxHQUFHdFIsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM4USxJQUFJLEdBQUc1akIsSUFBSSxDQUFDcWlCLEdBQUcsQ0FBQytCLE1BQU0sRUFBRXRSLENBQUMsR0FBR3NSLE1BQU0sQ0FBQyxHQUFHUixJQUFJLEtBQUssR0FBRyxHQUFHOVEsQ0FBQyxHQUFHc1IsTUFBTSxHQUFHQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUsxb0IsSUFBSSxLQUFLLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMU1zb0IsU0FBUyxDQUFDdmlCLENBQUMsR0FBR3FSLENBQUMsR0FBRyxDQUFDLEdBQUdpSSxJQUFJLEdBQUdqSSxDQUFDLEdBQUdpSSxJQUFJO1FBQ3JDaUosU0FBUyxDQUFDM2lCLENBQUMsR0FBR3ZELE9BQU8sQ0FBQ2tWLElBQUksQ0FBQ3JKLE1BQU0sSUFBSXFKLElBQUksQ0FBQ3pZLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUV0RGlwQixJQUFJLEdBQUdBLElBQUksSUFBSTFRLENBQUMsR0FBRyxDQUFDLEdBQUd3UixXQUFXLENBQUNkLElBQUksQ0FBQyxHQUFHQSxJQUFJO01BQ2pEO01BRUExUSxDQUFDLEdBQUcsQ0FBQ2tSLFNBQVMsQ0FBQzdmLENBQUMsQ0FBQyxHQUFHNmYsU0FBUyxDQUFDNUIsR0FBRyxJQUFJNEIsU0FBUyxDQUFDM0IsR0FBRyxJQUFJLENBQUM7TUFDdkQsT0FBT3hJLGFBQWEsQ0FBQ21LLFNBQVMsQ0FBQ3ZpQixDQUFDLEdBQUcsQ0FBQytoQixJQUFJLEdBQUdBLElBQUksQ0FBQzFRLENBQUMsQ0FBQyxHQUFHQSxDQUFDLElBQUlrUixTQUFTLENBQUN0SyxDQUFDLENBQUMsR0FBR3NLLFNBQVMsQ0FBQzNpQixDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0VBQ0gsQ0FBQztFQUNHa2pCLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFDN0ssQ0FBQyxFQUFFO0lBQzlDO0lBQ0EsSUFBSXpZLENBQUMsR0FBR2pCLElBQUksQ0FBQ3drQixHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzlLLENBQUMsR0FBRyxFQUFFLEVBQUV0VyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFNUgsTUFBTSxDQUFDLENBQUMsQ0FBQzs7SUFFN0QsT0FBTyxVQUFVaXBCLEdBQUcsRUFBRTtNQUNwQixJQUFJL0osQ0FBQyxHQUFHYixhQUFhLENBQUM3WixJQUFJLENBQUNrQixLQUFLLENBQUNpSSxVQUFVLENBQUNzYixHQUFHLENBQUMsR0FBRy9LLENBQUMsQ0FBQyxHQUFHQSxDQUFDLEdBQUd6WSxDQUFDLENBQUM7TUFFOUQsT0FBTyxDQUFDeVosQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBQyxJQUFJelosQ0FBQyxJQUFJMFYsU0FBUyxDQUFDOE4sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHM21CLE9BQU8sQ0FBQzJtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztFQUNILENBQUM7RUFDR0MsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUNDLE1BQU0sRUFBRWhqQixLQUFLLEVBQUU7SUFDdEMsSUFBSXlWLE9BQU8sR0FBR0YsUUFBUSxDQUFDeU4sTUFBTSxDQUFDO01BQzFCQyxNQUFNO01BQ05DLElBQUk7SUFFUixJQUFJLENBQUN6TixPQUFPLElBQUlSLFNBQVMsQ0FBQytOLE1BQU0sQ0FBQyxFQUFFO01BQ2pDQyxNQUFNLEdBQUd4TixPQUFPLEdBQUd1TixNQUFNLENBQUNDLE1BQU0sSUFBSXZrQixPQUFPO01BRTNDLElBQUlza0IsTUFBTSxDQUFDRyxNQUFNLEVBQUU7UUFDakJILE1BQU0sR0FBR2xMLE9BQU8sQ0FBQ2tMLE1BQU0sQ0FBQ0csTUFBTSxDQUFDO1FBRS9CLElBQUlELElBQUksR0FBRyxDQUFDbE8sU0FBUyxDQUFDZ08sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDaENDLE1BQU0sSUFBSUEsTUFBTSxDQUFDLENBQUM7UUFDcEI7TUFDRixDQUFDLE1BQU07UUFDTEQsTUFBTSxHQUFHSixjQUFjLENBQUNJLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDO01BQzNDO0lBQ0Y7SUFFQSxPQUFPNUMsa0JBQWtCLENBQUN4Z0IsS0FBSyxFQUFFLENBQUN5VixPQUFPLEdBQUdtTixjQUFjLENBQUNJLE1BQU0sQ0FBQyxHQUFHak8sV0FBVyxDQUFDaU8sTUFBTSxDQUFDLEdBQUcsVUFBVUYsR0FBRyxFQUFFO01BQ3hHSSxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDO01BQ2xCLE9BQU96a0IsSUFBSSxDQUFDMlEsR0FBRyxDQUFDa1UsSUFBSSxHQUFHSixHQUFHLENBQUMsSUFBSUcsTUFBTSxHQUFHQyxJQUFJLEdBQUdKLEdBQUc7SUFDcEQsQ0FBQyxHQUFHLFVBQVVBLEdBQUcsRUFBRTtNQUNqQixJQUFJamhCLENBQUMsR0FBRzJGLFVBQVUsQ0FBQzBiLElBQUksR0FBR0osR0FBRyxDQUFDamhCLENBQUMsR0FBR2loQixHQUFHLENBQUM7UUFDbEM3YyxDQUFDLEdBQUd1QixVQUFVLENBQUMwYixJQUFJLEdBQUdKLEdBQUcsQ0FBQzdjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEN3YSxHQUFHLEdBQUcvaEIsT0FBTztRQUNiMmtCLE9BQU8sR0FBRyxDQUFDO1FBQ1g3Z0IsQ0FBQyxHQUFHd2dCLE1BQU0sQ0FBQ25wQixNQUFNO1FBQ2pCeXBCLEVBQUU7UUFDRkMsRUFBRTtNQUVOLE9BQU8vZ0IsQ0FBQyxFQUFFLEVBQUU7UUFDVixJQUFJMGdCLElBQUksRUFBRTtVQUNSSSxFQUFFLEdBQUdOLE1BQU0sQ0FBQ3hnQixDQUFDLENBQUMsQ0FBQ1gsQ0FBQyxHQUFHQSxDQUFDO1VBQ3BCMGhCLEVBQUUsR0FBR1AsTUFBTSxDQUFDeGdCLENBQUMsQ0FBQyxDQUFDeUQsQ0FBQyxHQUFHQSxDQUFDO1VBQ3BCcWQsRUFBRSxHQUFHQSxFQUFFLEdBQUdBLEVBQUUsR0FBR0MsRUFBRSxHQUFHQSxFQUFFO1FBQ3hCLENBQUMsTUFBTTtVQUNMRCxFQUFFLEdBQUdqbEIsSUFBSSxDQUFDMlEsR0FBRyxDQUFDZ1UsTUFBTSxDQUFDeGdCLENBQUMsQ0FBQyxHQUFHWCxDQUFDLENBQUM7UUFDOUI7UUFFQSxJQUFJeWhCLEVBQUUsR0FBRzdDLEdBQUcsRUFBRTtVQUNaQSxHQUFHLEdBQUc2QyxFQUFFO1VBQ1JELE9BQU8sR0FBRzdnQixDQUFDO1FBQ2I7TUFDRjtNQUVBNmdCLE9BQU8sR0FBRyxDQUFDSixNQUFNLElBQUl4QyxHQUFHLElBQUl3QyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLEdBQUdQLEdBQUc7TUFDMUQsT0FBT0ksSUFBSSxJQUFJRyxPQUFPLEtBQUtQLEdBQUcsSUFBSTlOLFNBQVMsQ0FBQzhOLEdBQUcsQ0FBQyxHQUFHTyxPQUFPLEdBQUdBLE9BQU8sR0FBR2xuQixPQUFPLENBQUMybUIsR0FBRyxDQUFDO0lBQ3JGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDR25CLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDbEIsR0FBRyxFQUFFQyxHQUFHLEVBQUU4QyxpQkFBaUIsRUFBRUMsY0FBYyxFQUFFO0lBQ3hFLE9BQU9qRCxrQkFBa0IsQ0FBQ2pMLFFBQVEsQ0FBQ2tMLEdBQUcsQ0FBQyxHQUFHLENBQUNDLEdBQUcsR0FBRzhDLGlCQUFpQixLQUFLLElBQUksR0FBRyxDQUFDLEVBQUVBLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUNDLGNBQWMsRUFBRSxZQUFZO01BQ3JJLE9BQU9sTyxRQUFRLENBQUNrTCxHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDLENBQUMsRUFBRXBpQixJQUFJLENBQUNzakIsTUFBTSxDQUFDLENBQUMsR0FBR2xCLEdBQUcsQ0FBQzVtQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMycEIsaUJBQWlCLEdBQUdBLGlCQUFpQixJQUFJLElBQUksTUFBTUMsY0FBYyxHQUFHRCxpQkFBaUIsR0FBRyxDQUFDLEdBQUdubEIsSUFBSSxDQUFDd2tCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQ1csaUJBQWlCLEdBQUcsRUFBRSxFQUFFM3BCLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSXdFLElBQUksQ0FBQzZkLEtBQUssQ0FBQzdkLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDa2hCLEdBQUcsR0FBRytDLGlCQUFpQixHQUFHLENBQUMsR0FBR25sQixJQUFJLENBQUNzakIsTUFBTSxDQUFDLENBQUMsSUFBSWpCLEdBQUcsR0FBR0QsR0FBRyxHQUFHK0MsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLElBQUlBLGlCQUFpQixDQUFDLEdBQUdBLGlCQUFpQixHQUFHQyxjQUFjLENBQUMsR0FBR0EsY0FBYztJQUM3WSxDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0dDLElBQUksR0FBRyxTQUFTQSxJQUFJQSxDQUFBLEVBQUc7SUFDekIsS0FBSyxJQUFJQyxJQUFJLEdBQUdyUyxTQUFTLENBQUN6WCxNQUFNLEVBQUUrcEIsU0FBUyxHQUFHLElBQUlwTyxLQUFLLENBQUNtTyxJQUFJLENBQUMsRUFBRUUsSUFBSSxHQUFHLENBQUMsRUFBRUEsSUFBSSxHQUFHRixJQUFJLEVBQUVFLElBQUksRUFBRSxFQUFFO01BQzVGRCxTQUFTLENBQUNDLElBQUksQ0FBQyxHQUFHdlMsU0FBUyxDQUFDdVMsSUFBSSxDQUFDO0lBQ25DO0lBRUEsT0FBTyxVQUFVN2pCLEtBQUssRUFBRTtNQUN0QixPQUFPNGpCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFVBQVUvTCxDQUFDLEVBQUU1TCxDQUFDLEVBQUU7UUFDdEMsT0FBT0EsQ0FBQyxDQUFDNEwsQ0FBQyxDQUFDO01BQ2IsQ0FBQyxFQUFFL1gsS0FBSyxDQUFDO0lBQ1gsQ0FBQztFQUNILENBQUM7RUFDRytqQixPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQzlMLElBQUksRUFBRTNRLElBQUksRUFBRTtJQUN6QyxPQUFPLFVBQVV0SCxLQUFLLEVBQUU7TUFDdEIsT0FBT2lZLElBQUksQ0FBQ3pRLFVBQVUsQ0FBQ3hILEtBQUssQ0FBQyxDQUFDLElBQUlzSCxJQUFJLElBQUluTCxPQUFPLENBQUM2RCxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0VBQ0gsQ0FBQztFQUNHZ2tCLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDdkQsR0FBRyxFQUFFQyxHQUFHLEVBQUUxZ0IsS0FBSyxFQUFFO0lBQ2xELE9BQU9pa0IsUUFBUSxDQUFDeEQsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTFnQixLQUFLLENBQUM7RUFDeEMsQ0FBQztFQUNHa2tCLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDdmlCLENBQUMsRUFBRXdpQixPQUFPLEVBQUVua0IsS0FBSyxFQUFFO0lBQ3RELE9BQU93Z0Isa0JBQWtCLENBQUN4Z0IsS0FBSyxFQUFFLFVBQVVpSixLQUFLLEVBQUU7TUFDaEQsT0FBT3RILENBQUMsQ0FBQyxDQUFDLENBQUN3aUIsT0FBTyxDQUFDbGIsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNHbWIsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUMzRCxHQUFHLEVBQUVDLEdBQUcsRUFBRTFnQixLQUFLLEVBQUU7SUFDeEM7SUFDQSxJQUFJcWtCLEtBQUssR0FBRzNELEdBQUcsR0FBR0QsR0FBRztJQUNyQixPQUFPbEwsUUFBUSxDQUFDa0wsR0FBRyxDQUFDLEdBQUd5RCxVQUFVLENBQUN6RCxHQUFHLEVBQUUyRCxJQUFJLENBQUMsQ0FBQyxFQUFFM0QsR0FBRyxDQUFDNW1CLE1BQU0sQ0FBQyxFQUFFNm1CLEdBQUcsQ0FBQyxHQUFHRixrQkFBa0IsQ0FBQ3hnQixLQUFLLEVBQUUsVUFBVUEsS0FBSyxFQUFFO01BQzVHLE9BQU8sQ0FBQ3FrQixLQUFLLEdBQUcsQ0FBQ3JrQixLQUFLLEdBQUd5Z0IsR0FBRyxJQUFJNEQsS0FBSyxJQUFJQSxLQUFLLEdBQUc1RCxHQUFHO0lBQ3RELENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRzZELFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDN0QsR0FBRyxFQUFFQyxHQUFHLEVBQUUxZ0IsS0FBSyxFQUFFO0lBQ2hELElBQUlxa0IsS0FBSyxHQUFHM0QsR0FBRyxHQUFHRCxHQUFHO01BQ2pCOEQsS0FBSyxHQUFHRixLQUFLLEdBQUcsQ0FBQztJQUNyQixPQUFPOU8sUUFBUSxDQUFDa0wsR0FBRyxDQUFDLEdBQUd5RCxVQUFVLENBQUN6RCxHQUFHLEVBQUU2RCxRQUFRLENBQUMsQ0FBQyxFQUFFN0QsR0FBRyxDQUFDNW1CLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTZtQixHQUFHLENBQUMsR0FBR0Ysa0JBQWtCLENBQUN4Z0IsS0FBSyxFQUFFLFVBQVVBLEtBQUssRUFBRTtNQUNwSEEsS0FBSyxHQUFHLENBQUN1a0IsS0FBSyxHQUFHLENBQUN2a0IsS0FBSyxHQUFHeWdCLEdBQUcsSUFBSThELEtBQUssSUFBSUEsS0FBSyxJQUFJLENBQUM7TUFDcEQsT0FBTzlELEdBQUcsSUFBSXpnQixLQUFLLEdBQUdxa0IsS0FBSyxHQUFHRSxLQUFLLEdBQUd2a0IsS0FBSyxHQUFHQSxLQUFLLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNHcEQsY0FBYyxHQUFHLFNBQVNBLGNBQWNBLENBQUNvRCxLQUFLLEVBQUU7SUFDbEQ7SUFDQSxJQUFJc2EsSUFBSSxHQUFHLENBQUM7TUFDUjlhLENBQUMsR0FBRyxFQUFFO01BQ05nRCxDQUFDO01BQ0RnaUIsSUFBSTtNQUNKL2QsR0FBRztNQUNIZ1AsT0FBTztJQUVYLE9BQU8sRUFBRWpULENBQUMsR0FBR3hDLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxTQUFTLEVBQUU4WSxJQUFJLENBQUMsQ0FBQyxFQUFFO01BQzVDN1QsR0FBRyxHQUFHekcsS0FBSyxDQUFDd0IsT0FBTyxDQUFDLEdBQUcsRUFBRWdCLENBQUMsQ0FBQztNQUMzQmlULE9BQU8sR0FBR3pWLEtBQUssQ0FBQ29FLE1BQU0sQ0FBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHO01BQ3JDZ2lCLElBQUksR0FBR3hrQixLQUFLLENBQUN5QyxNQUFNLENBQUNELENBQUMsR0FBRyxDQUFDLEVBQUVpRSxHQUFHLEdBQUdqRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNzSCxLQUFLLENBQUMyTCxPQUFPLEdBQUdHLGtCQUFrQixHQUFHRixhQUFhLENBQUM7TUFDM0ZsVyxDQUFDLElBQUlRLEtBQUssQ0FBQ3lDLE1BQU0sQ0FBQzZYLElBQUksRUFBRTlYLENBQUMsR0FBRzhYLElBQUksQ0FBQyxHQUFHcUgsTUFBTSxDQUFDbE0sT0FBTyxHQUFHK08sSUFBSSxHQUFHLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRS9PLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQytPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO01BQy9HbEssSUFBSSxHQUFHN1QsR0FBRyxHQUFHLENBQUM7SUFDaEI7SUFFQSxPQUFPakgsQ0FBQyxHQUFHUSxLQUFLLENBQUN5QyxNQUFNLENBQUM2WCxJQUFJLEVBQUV0YSxLQUFLLENBQUNuRyxNQUFNLEdBQUd5Z0IsSUFBSSxDQUFDO0VBQ3BELENBQUM7RUFDRzJKLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDUSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU1a0IsS0FBSyxFQUFFO0lBQ3BFLElBQUk2a0IsT0FBTyxHQUFHSCxLQUFLLEdBQUdELEtBQUs7TUFDdkJLLFFBQVEsR0FBR0YsTUFBTSxHQUFHRCxNQUFNO0lBQzlCLE9BQU9uRSxrQkFBa0IsQ0FBQ3hnQixLQUFLLEVBQUUsVUFBVUEsS0FBSyxFQUFFO01BQ2hELE9BQU8ya0IsTUFBTSxJQUFJLENBQUMza0IsS0FBSyxHQUFHeWtCLEtBQUssSUFBSUksT0FBTyxHQUFHQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQztFQUNKLENBQUM7RUFDR0MsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUMvYixLQUFLLEVBQUV2QyxHQUFHLEVBQUV1ZSxRQUFRLEVBQUVDLE1BQU0sRUFBRTtJQUNuRSxJQUFJaE4sSUFBSSxHQUFHK0gsS0FBSyxDQUFDaFgsS0FBSyxHQUFHdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVVuSCxDQUFDLEVBQUU7TUFDL0MsT0FBTyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxJQUFJMEosS0FBSyxHQUFHMUosQ0FBQyxHQUFHbUgsR0FBRztJQUNsQyxDQUFDO0lBRUQsSUFBSSxDQUFDd1IsSUFBSSxFQUFFO01BQ1QsSUFBSXpILFFBQVEsR0FBR3BVLFNBQVMsQ0FBQzRNLEtBQUssQ0FBQztRQUMzQmtjLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDWDVsQixDQUFDO1FBQ0RrRCxDQUFDO1FBQ0QyaUIsYUFBYTtRQUNiaFUsQ0FBQztRQUNEaVUsRUFBRTtNQUVOSixRQUFRLEtBQUssSUFBSSxLQUFLQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUtELFFBQVEsR0FBRyxJQUFJLENBQUM7TUFFdEQsSUFBSXhVLFFBQVEsRUFBRTtRQUNaeEgsS0FBSyxHQUFHO1VBQ04xSixDQUFDLEVBQUUwSjtRQUNMLENBQUM7UUFDRHZDLEdBQUcsR0FBRztVQUNKbkgsQ0FBQyxFQUFFbUg7UUFDTCxDQUFDO01BQ0gsQ0FBQyxNQUFNLElBQUk4TyxRQUFRLENBQUN2TSxLQUFLLENBQUMsSUFBSSxDQUFDdU0sUUFBUSxDQUFDOU8sR0FBRyxDQUFDLEVBQUU7UUFDNUMwZSxhQUFhLEdBQUcsRUFBRTtRQUNsQmhVLENBQUMsR0FBR25JLEtBQUssQ0FBQ25QLE1BQU07UUFDaEJ1ckIsRUFBRSxHQUFHalUsQ0FBQyxHQUFHLENBQUM7UUFFVixLQUFLM08sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMk8sQ0FBQyxFQUFFM08sQ0FBQyxFQUFFLEVBQUU7VUFDdEIyaUIsYUFBYSxDQUFDaGpCLElBQUksQ0FBQzRpQixXQUFXLENBQUMvYixLQUFLLENBQUN4RyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUV3RyxLQUFLLENBQUN4RyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRDs7UUFFQTJPLENBQUMsRUFBRTtRQUVIOEcsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUMzWSxDQUFDLEVBQUU7VUFDdEJBLENBQUMsSUFBSTZSLENBQUM7VUFDTixJQUFJM08sQ0FBQyxHQUFHbkUsSUFBSSxDQUFDb2lCLEdBQUcsQ0FBQzJFLEVBQUUsRUFBRSxDQUFDLENBQUM5bEIsQ0FBQyxDQUFDO1VBQ3pCLE9BQU82bEIsYUFBYSxDQUFDM2lCLENBQUMsQ0FBQyxDQUFDbEQsQ0FBQyxHQUFHa0QsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRHdpQixRQUFRLEdBQUd2ZSxHQUFHO01BQ2hCLENBQUMsTUFBTSxJQUFJLENBQUN3ZSxNQUFNLEVBQUU7UUFDbEJqYyxLQUFLLEdBQUdxTixNQUFNLENBQUNkLFFBQVEsQ0FBQ3ZNLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDO01BQ2xEO01BRUEsSUFBSSxDQUFDbWMsYUFBYSxFQUFFO1FBQ2xCLEtBQUs3bEIsQ0FBQyxJQUFJbUgsR0FBRyxFQUFFO1VBQ2I0ZSxhQUFhLENBQUN0akIsSUFBSSxDQUFDbWpCLE1BQU0sRUFBRWxjLEtBQUssRUFBRTFKLENBQUMsRUFBRSxLQUFLLEVBQUVtSCxHQUFHLENBQUNuSCxDQUFDLENBQUMsQ0FBQztRQUNyRDtRQUVBMlksSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUMzWSxDQUFDLEVBQUU7VUFDdEIsT0FBT2dtQixpQkFBaUIsQ0FBQ2htQixDQUFDLEVBQUU0bEIsTUFBTSxDQUFDLEtBQUsxVSxRQUFRLEdBQUd4SCxLQUFLLENBQUMxSixDQUFDLEdBQUcwSixLQUFLLENBQUM7UUFDckUsQ0FBQztNQUNIO0lBQ0Y7SUFFQSxPQUFPd1gsa0JBQWtCLENBQUN3RSxRQUFRLEVBQUUvTSxJQUFJLENBQUM7RUFDM0MsQ0FBQztFQUNHc04sb0JBQW9CLEdBQUcsU0FBU0Esb0JBQW9CQSxDQUFDNUksUUFBUSxFQUFFNkksUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDckY7SUFDQSxJQUFJOUYsTUFBTSxHQUFHaEQsUUFBUSxDQUFDZ0QsTUFBTTtNQUN4QmMsR0FBRyxHQUFHL2hCLE9BQU87TUFDYlksQ0FBQztNQUNEb21CLFFBQVE7TUFDUkMsS0FBSztJQUVULEtBQUtybUIsQ0FBQyxJQUFJcWdCLE1BQU0sRUFBRTtNQUNoQitGLFFBQVEsR0FBRy9GLE1BQU0sQ0FBQ3JnQixDQUFDLENBQUMsR0FBR2ttQixRQUFRO01BRS9CLElBQUlFLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxRQUFRLElBQUlDLFFBQVEsSUFBSWpGLEdBQUcsSUFBSWlGLFFBQVEsR0FBR3JuQixJQUFJLENBQUMyUSxHQUFHLENBQUMwVyxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQ3BGQyxLQUFLLEdBQUdybUIsQ0FBQztRQUNUbWhCLEdBQUcsR0FBR2lGLFFBQVE7TUFDaEI7SUFDRjtJQUVBLE9BQU9DLEtBQUs7RUFDZCxDQUFDO0VBQ0dqSCxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ2hHLFNBQVMsRUFBRWxWLElBQUksRUFBRW9pQixnQkFBZ0IsRUFBRTtJQUNwRSxJQUFJN04sQ0FBQyxHQUFHVyxTQUFTLENBQUNySCxJQUFJO01BQ2xCd1UsUUFBUSxHQUFHOU4sQ0FBQyxDQUFDdlUsSUFBSSxDQUFDO01BQ2xCc2lCLFdBQVcsR0FBR3ZSLFFBQVE7TUFDdEJ3UixPQUFPLEdBQUdyTixTQUFTLENBQUNzTixJQUFJO01BQ3hCOUYsTUFBTTtNQUNOOUosS0FBSztNQUNMak4sTUFBTTtJQUVWLElBQUksQ0FBQzBjLFFBQVEsRUFBRTtNQUNiO0lBQ0Y7SUFFQTNGLE1BQU0sR0FBR25JLENBQUMsQ0FBQ3ZVLElBQUksR0FBRyxRQUFRLENBQUM7SUFDM0I0UyxLQUFLLEdBQUcyQixDQUFDLENBQUNrTyxhQUFhLElBQUl2TixTQUFTO0lBQ3BDa04sZ0JBQWdCLElBQUl6TyxXQUFXLENBQUN0ZCxNQUFNLElBQUkwZSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRXpEd04sT0FBTyxLQUFLeFIsUUFBUSxHQUFHd1IsT0FBTyxDQUFDO0lBQy9CNWMsTUFBTSxHQUFHK1csTUFBTSxHQUFHMkYsUUFBUSxDQUFDekUsS0FBSyxDQUFDaEwsS0FBSyxFQUFFOEosTUFBTSxDQUFDLEdBQUcyRixRQUFRLENBQUM5akIsSUFBSSxDQUFDcVUsS0FBSyxDQUFDO0lBQ3RFN0IsUUFBUSxHQUFHdVIsV0FBVztJQUN0QixPQUFPM2MsTUFBTTtFQUNmLENBQUM7RUFDRytjLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDeE4sU0FBUyxFQUFFO0lBQzlDK0IsaUJBQWlCLENBQUMvQixTQUFTLENBQUM7SUFFNUJBLFNBQVMsQ0FBQ3lOLGFBQWEsSUFBSXpOLFNBQVMsQ0FBQ3lOLGFBQWEsQ0FBQ3BQLElBQUksQ0FBQyxDQUFDLENBQUM5WSxVQUFVLENBQUM7SUFDckV5YSxTQUFTLENBQUNzTSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSXRHLFNBQVMsQ0FBQ2hHLFNBQVMsRUFBRSxhQUFhLENBQUM7SUFDL0QsT0FBT0EsU0FBUztFQUNsQixDQUFDO0VBQ0cwTixXQUFXO0VBQ1hDLG9CQUFvQixHQUFHLEVBQUU7RUFDekJDLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7SUFDakQsSUFBSXJvQixhQUFhLENBQUMsQ0FBQyxJQUFJcW9CLE1BQU0sRUFBRTtNQUM3QjtNQUNBQSxNQUFNLEdBQUcsQ0FBQ0EsTUFBTSxDQUFDclYsSUFBSSxJQUFJcVYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJQSxNQUFNLENBQUMsQ0FBQzs7TUFFdEQsSUFBSXJWLElBQUksR0FBR3FWLE1BQU0sQ0FBQ3JWLElBQUk7UUFDbEJzVixNQUFNLEdBQUd6UixXQUFXLENBQUN3UixNQUFNLENBQUM7UUFDNUJFLE1BQU0sR0FBR3ZWLElBQUksSUFBSSxDQUFDc1YsTUFBTSxJQUFJRCxNQUFNLENBQUNoVixJQUFJLEdBQUcsWUFBWTtVQUN4RCxJQUFJLENBQUMxSyxNQUFNLEdBQUcsRUFBRTtRQUNsQixDQUFDLEdBQUcwZixNQUFNO1FBQ047UUFDSkcsZ0JBQWdCLEdBQUc7VUFDakJuVixJQUFJLEVBQUVxRixVQUFVO1VBQ2hCakUsTUFBTSxFQUFFMlMsaUJBQWlCO1VBQ3pCalQsR0FBRyxFQUFFZ1QsYUFBYTtVQUNsQnRPLElBQUksRUFBRTRQLGlCQUFpQjtVQUN2QkMsUUFBUSxFQUFFQyxrQkFBa0I7VUFDNUJDLE9BQU8sRUFBRTtRQUNYLENBQUM7UUFDR0MsT0FBTyxHQUFHO1VBQ1pyVixVQUFVLEVBQUUsQ0FBQztVQUNia0IsR0FBRyxFQUFFLENBQUM7VUFDTkUsU0FBUyxFQUFFMVYsVUFBVTtVQUNyQnlWLE9BQU8sRUFBRSxDQUFDLENBQUM7VUFDWHBCLFFBQVEsRUFBRTtRQUNaLENBQUM7TUFFRDRQLEtBQUssQ0FBQyxDQUFDO01BRVAsSUFBSWtGLE1BQU0sS0FBS0UsTUFBTSxFQUFFO1FBQ3JCLElBQUk1cEIsUUFBUSxDQUFDcVUsSUFBSSxDQUFDLEVBQUU7VUFDbEI7UUFDRjtRQUVBMVQsWUFBWSxDQUFDaXBCLE1BQU0sRUFBRWpwQixZQUFZLENBQUMrYixjQUFjLENBQUNnTixNQUFNLEVBQUVHLGdCQUFnQixDQUFDLEVBQUVLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFHdkYxUSxNQUFNLENBQUNvUSxNQUFNLENBQUM1UyxTQUFTLEVBQUV3QyxNQUFNLENBQUNxUSxnQkFBZ0IsRUFBRW5OLGNBQWMsQ0FBQ2dOLE1BQU0sRUFBRVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBR3JGbHFCLFFBQVEsQ0FBQzRwQixNQUFNLENBQUMxZCxJQUFJLEdBQUdtSSxJQUFJLENBQUMsR0FBR3VWLE1BQU07UUFFckMsSUFBSUYsTUFBTSxDQUFDN1UsVUFBVSxFQUFFO1VBQ3JCOEYsZUFBZSxDQUFDclYsSUFBSSxDQUFDc2tCLE1BQU0sQ0FBQztVQUU1QnZQLGNBQWMsQ0FBQ2hHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUI7UUFFQUEsSUFBSSxHQUFHLENBQUNBLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHQSxJQUFJLENBQUM5TSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEdBQUc2TSxJQUFJLENBQUN6TyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUM7TUFDOUY7O01BRUFpVSxVQUFVLENBQUN4RixJQUFJLEVBQUV1VixNQUFNLENBQUM7TUFFeEJGLE1BQU0sQ0FBQzlVLFFBQVEsSUFBSThVLE1BQU0sQ0FBQzlVLFFBQVEsQ0FBQzFWLElBQUksRUFBRTBxQixNQUFNLEVBQUUxcEIsU0FBUyxDQUFDO0lBQzdELENBQUMsTUFBTTtNQUNMd3BCLE1BQU0sSUFBSUYsb0JBQW9CLENBQUNsa0IsSUFBSSxDQUFDb2tCLE1BQU0sQ0FBQztJQUM3QztFQUNGLENBQUM7RUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0FTLElBQUksR0FBRyxHQUFHO0VBQ05DLFlBQVksR0FBRztJQUNqQkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFRixJQUFJLEVBQUVBLElBQUksQ0FBQztJQUNyQkcsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFSCxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCSSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN2QkMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEJDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNuQkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVIsSUFBSSxDQUFDO0lBQ2xCUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNqQkMsS0FBSyxFQUFFLENBQUNWLElBQUksRUFBRUEsSUFBSSxFQUFFQSxJQUFJLENBQUM7SUFDekJXLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCQyxNQUFNLEVBQUUsQ0FBQ1osSUFBSSxFQUFFQSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCYSxNQUFNLEVBQUUsQ0FBQ2IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdEJjLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3JCQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNyQkMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbEJDLEdBQUcsRUFBRSxDQUFDakIsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakJrQixJQUFJLEVBQUUsQ0FBQ2xCLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3RCbUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFbkIsSUFBSSxFQUFFQSxJQUFJLENBQUM7SUFDckJvQixXQUFXLEVBQUUsQ0FBQ3BCLElBQUksRUFBRUEsSUFBSSxFQUFFQSxJQUFJLEVBQUUsQ0FBQztFQUNuQyxDQUFDO0VBQ0c7RUFDSjtFQUNBO0VBQ0FxQixJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQ0MsQ0FBQyxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRTtJQUM5QkYsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQy9CLE9BQU8sQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdDLEVBQUUsR0FBRyxDQUFDQyxFQUFFLEdBQUdELEVBQUUsSUFBSUQsQ0FBQyxHQUFHLENBQUMsR0FBR0EsQ0FBQyxHQUFHLEVBQUUsR0FBR0UsRUFBRSxHQUFHRixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0MsRUFBRSxHQUFHLENBQUNDLEVBQUUsR0FBR0QsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdELENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBR0MsRUFBRSxJQUFJdkIsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQy9ILENBQUM7RUFDR3lCLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDMVEsQ0FBQyxFQUFFMlEsS0FBSyxFQUFFQyxVQUFVLEVBQUU7SUFDekQsSUFBSWhuQixDQUFDLEdBQUcsQ0FBQ29XLENBQUMsR0FBR2tQLFlBQVksQ0FBQ0ksS0FBSyxHQUFHclMsU0FBUyxDQUFDK0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0EsQ0FBQyxJQUFJLEVBQUUsRUFBRUEsQ0FBQyxJQUFJLENBQUMsR0FBR2lQLElBQUksRUFBRWpQLENBQUMsR0FBR2lQLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDbkYzYyxDQUFDO01BQ0R1ZSxDQUFDO01BQ0Q5b0IsQ0FBQztNQUNEd29CLENBQUM7TUFDRDlvQixDQUFDO01BQ0QyUixDQUFDO01BQ0R1UCxHQUFHO01BQ0hELEdBQUc7TUFDSHZVLENBQUM7TUFDRDJjLE1BQU07SUFFVixJQUFJLENBQUNsbkIsQ0FBQyxFQUFFO01BQ04sSUFBSW9XLENBQUMsQ0FBQ3RWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUN4QjtRQUNBc1YsQ0FBQyxHQUFHQSxDQUFDLENBQUN0VixNQUFNLENBQUMsQ0FBQyxFQUFFc1YsQ0FBQyxDQUFDbGUsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUMvQjtNQUVBLElBQUlvdEIsWUFBWSxDQUFDbFAsQ0FBQyxDQUFDLEVBQUU7UUFDbkJwVyxDQUFDLEdBQUdzbEIsWUFBWSxDQUFDbFAsQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBTSxJQUFJQSxDQUFDLENBQUMzVCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzlCLElBQUkyVCxDQUFDLENBQUNsZSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2hCO1VBQ0F3USxDQUFDLEdBQUcwTixDQUFDLENBQUMzVCxNQUFNLENBQUMsQ0FBQyxDQUFDO1VBQ2Z3a0IsQ0FBQyxHQUFHN1EsQ0FBQyxDQUFDM1QsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUNmdEUsQ0FBQyxHQUFHaVksQ0FBQyxDQUFDM1QsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUNmMlQsQ0FBQyxHQUFHLEdBQUcsR0FBRzFOLENBQUMsR0FBR0EsQ0FBQyxHQUFHdWUsQ0FBQyxHQUFHQSxDQUFDLEdBQUc5b0IsQ0FBQyxHQUFHQSxDQUFDLElBQUlpWSxDQUFDLENBQUNsZSxNQUFNLEtBQUssQ0FBQyxHQUFHa2UsQ0FBQyxDQUFDM1QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHMlQsQ0FBQyxDQUFDM1QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyRjtRQUVBLElBQUkyVCxDQUFDLENBQUNsZSxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ2xCO1VBQ0E4SCxDQUFDLEdBQUdtbkIsUUFBUSxDQUFDL1EsQ0FBQyxDQUFDdFYsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7VUFDaEMsT0FBTyxDQUFDZCxDQUFDLElBQUksRUFBRSxFQUFFQSxDQUFDLElBQUksQ0FBQyxHQUFHcWxCLElBQUksRUFBRXJsQixDQUFDLEdBQUdxbEIsSUFBSSxFQUFFOEIsUUFBUSxDQUFDL1EsQ0FBQyxDQUFDdFYsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RTtRQUVBc1YsQ0FBQyxHQUFHK1EsUUFBUSxDQUFDL1EsQ0FBQyxDQUFDdFYsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM3QmQsQ0FBQyxHQUFHLENBQUNvVyxDQUFDLElBQUksRUFBRSxFQUFFQSxDQUFDLElBQUksQ0FBQyxHQUFHaVAsSUFBSSxFQUFFalAsQ0FBQyxHQUFHaVAsSUFBSSxDQUFDO01BQ3hDLENBQUMsTUFBTSxJQUFJalAsQ0FBQyxDQUFDdFYsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDbkNkLENBQUMsR0FBR2tuQixNQUFNLEdBQUc5USxDQUFDLENBQUNqTyxLQUFLLENBQUM0TCxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDZ1QsS0FBSyxFQUFFO1VBQ1ZKLENBQUMsR0FBRyxDQUFDM21CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRztVQUNyQm5DLENBQUMsR0FBRyxDQUFDbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7VUFDZndQLENBQUMsR0FBRyxDQUFDeFAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7VUFDZmluQixDQUFDLEdBQUd6WCxDQUFDLElBQUksRUFBRSxHQUFHQSxDQUFDLElBQUkzUixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcyUixDQUFDLEdBQUczUixDQUFDLEdBQUcyUixDQUFDLEdBQUczUixDQUFDO1VBQ3pDNkssQ0FBQyxHQUFHOEcsQ0FBQyxHQUFHLENBQUMsR0FBR3lYLENBQUM7VUFDYmpuQixDQUFDLENBQUM5SCxNQUFNLEdBQUcsQ0FBQyxLQUFLOEgsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBRTdCQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcwbUIsSUFBSSxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRWplLENBQUMsRUFBRXVlLENBQUMsQ0FBQztVQUM1QmpuQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcwbUIsSUFBSSxDQUFDQyxDQUFDLEVBQUVqZSxDQUFDLEVBQUV1ZSxDQUFDLENBQUM7VUFDcEJqbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHMG1CLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUVqZSxDQUFDLEVBQUV1ZSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxNQUFNLElBQUksQ0FBQzdRLENBQUMsQ0FBQ3ZXLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtVQUMxQjtVQUNBRyxDQUFDLEdBQUdvVyxDQUFDLENBQUNqTyxLQUFLLENBQUM3TixPQUFPLENBQUM7VUFDcEIwc0IsVUFBVSxJQUFJaG5CLENBQUMsQ0FBQzlILE1BQU0sR0FBRyxDQUFDLEtBQUs4SCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3hDLE9BQU9BLENBQUM7UUFDVjtNQUNGLENBQUMsTUFBTTtRQUNMQSxDQUFDLEdBQUdvVyxDQUFDLENBQUNqTyxLQUFLLENBQUM0TCxhQUFhLENBQUMsSUFBSXVSLFlBQVksQ0FBQ21CLFdBQVc7TUFDeEQ7TUFFQXptQixDQUFDLEdBQUdBLENBQUMsQ0FBQytKLEdBQUcsQ0FBQ3FkLE1BQU0sQ0FBQztJQUNuQjtJQUVBLElBQUlMLEtBQUssSUFBSSxDQUFDRyxNQUFNLEVBQUU7TUFDcEJ4ZSxDQUFDLEdBQUcxSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdxbEIsSUFBSTtNQUNmNEIsQ0FBQyxHQUFHam5CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3FsQixJQUFJO01BQ2ZsbkIsQ0FBQyxHQUFHNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHcWxCLElBQUk7TUFDZnRHLEdBQUcsR0FBR3JpQixJQUFJLENBQUNxaUIsR0FBRyxDQUFDclcsQ0FBQyxFQUFFdWUsQ0FBQyxFQUFFOW9CLENBQUMsQ0FBQztNQUN2QjJnQixHQUFHLEdBQUdwaUIsSUFBSSxDQUFDb2lCLEdBQUcsQ0FBQ3BXLENBQUMsRUFBRXVlLENBQUMsRUFBRTlvQixDQUFDLENBQUM7TUFDdkJxUixDQUFDLEdBQUcsQ0FBQ3VQLEdBQUcsR0FBR0QsR0FBRyxJQUFJLENBQUM7TUFFbkIsSUFBSUMsR0FBRyxLQUFLRCxHQUFHLEVBQUU7UUFDZjZILENBQUMsR0FBRzlvQixDQUFDLEdBQUcsQ0FBQztNQUNYLENBQUMsTUFBTTtRQUNMME0sQ0FBQyxHQUFHd1UsR0FBRyxHQUFHRCxHQUFHO1FBQ2JqaEIsQ0FBQyxHQUFHMlIsQ0FBQyxHQUFHLEdBQUcsR0FBR2pGLENBQUMsSUFBSSxDQUFDLEdBQUd3VSxHQUFHLEdBQUdELEdBQUcsQ0FBQyxHQUFHdlUsQ0FBQyxJQUFJd1UsR0FBRyxHQUFHRCxHQUFHLENBQUM7UUFDbkQ2SCxDQUFDLEdBQUc1SCxHQUFHLEtBQUtyVyxDQUFDLEdBQUcsQ0FBQ3VlLENBQUMsR0FBRzlvQixDQUFDLElBQUlvTSxDQUFDLElBQUkwYyxDQUFDLEdBQUc5b0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzRnQixHQUFHLEtBQUtrSSxDQUFDLEdBQUcsQ0FBQzlvQixDQUFDLEdBQUd1SyxDQUFDLElBQUk2QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM3QixDQUFDLEdBQUd1ZSxDQUFDLElBQUkxYyxDQUFDLEdBQUcsQ0FBQztRQUM3Rm9jLENBQUMsSUFBSSxFQUFFO01BQ1Q7TUFFQTNtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFMm1CLENBQUMsR0FBRyxFQUFFLENBQUM7TUFDakIzbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRW5DLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO01BQ3ZCbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRXdQLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3pCO0lBRUF3WCxVQUFVLElBQUlobkIsQ0FBQyxDQUFDOUgsTUFBTSxHQUFHLENBQUMsS0FBSzhILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsT0FBT0EsQ0FBQztFQUNWLENBQUM7RUFDR3FuQixlQUFlLEdBQUcsU0FBU0EsZUFBZUEsQ0FBQ2pSLENBQUMsRUFBRTtJQUNoRDtJQUNBLElBQUlvTCxNQUFNLEdBQUcsRUFBRTtNQUNYMWpCLENBQUMsR0FBRyxFQUFFO01BQ04rQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1Z1VixDQUFDLENBQUN0VyxLQUFLLENBQUNuRSxTQUFTLENBQUMsQ0FBQ29FLE9BQU8sQ0FBQyxVQUFVcVcsQ0FBQyxFQUFFO01BQ3RDLElBQUlwVyxDQUFDLEdBQUdvVyxDQUFDLENBQUNqTyxLQUFLLENBQUM1TixlQUFlLENBQUMsSUFBSSxFQUFFO01BQ3RDaW5CLE1BQU0sQ0FBQ2hoQixJQUFJLENBQUNpZixLQUFLLENBQUMrQixNQUFNLEVBQUV4aEIsQ0FBQyxDQUFDO01BQzVCbEMsQ0FBQyxDQUFDMEMsSUFBSSxDQUFDSyxDQUFDLElBQUliLENBQUMsQ0FBQzlILE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ZzcEIsTUFBTSxDQUFDMWpCLENBQUMsR0FBR0EsQ0FBQztJQUNaLE9BQU8wakIsTUFBTTtFQUNmLENBQUM7RUFDRzhGLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDenBCLENBQUMsRUFBRWtwQixLQUFLLEVBQUVRLGNBQWMsRUFBRTtJQUNuRSxJQUFJL2YsTUFBTSxHQUFHLEVBQUU7TUFDWGdnQixNQUFNLEdBQUcsQ0FBQzNwQixDQUFDLEdBQUcySixNQUFNLEVBQUVXLEtBQUssQ0FBQ3hNLFNBQVMsQ0FBQztNQUN0Q2tHLElBQUksR0FBR2tsQixLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU87TUFDaENsbUIsQ0FBQyxHQUFHLENBQUM7TUFDTC9DLENBQUM7TUFDRDJwQixLQUFLO01BQ0xsZCxDQUFDO01BQ0RpRixDQUFDO0lBRUwsSUFBSSxDQUFDZ1ksTUFBTSxFQUFFO01BQ1gsT0FBTzNwQixDQUFDO0lBQ1Y7SUFFQTJwQixNQUFNLEdBQUdBLE1BQU0sQ0FBQ3pkLEdBQUcsQ0FBQyxVQUFVcEMsS0FBSyxFQUFFO01BQ25DLE9BQU8sQ0FBQ0EsS0FBSyxHQUFHbWYsVUFBVSxDQUFDbmYsS0FBSyxFQUFFb2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLbGxCLElBQUksSUFBSWtsQixLQUFLLEdBQUdwZixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEtBQUssQ0FBQ3VCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUc7SUFDeEosQ0FBQyxDQUFDO0lBRUYsSUFBSXFlLGNBQWMsRUFBRTtNQUNsQmhkLENBQUMsR0FBRzhjLGVBQWUsQ0FBQ3hwQixDQUFDLENBQUM7TUFDdEJDLENBQUMsR0FBR3lwQixjQUFjLENBQUN6cEIsQ0FBQztNQUVwQixJQUFJQSxDQUFDLENBQUNvTCxJQUFJLENBQUMxQixNQUFNLENBQUMsS0FBSytDLENBQUMsQ0FBQ3pNLENBQUMsQ0FBQ29MLElBQUksQ0FBQzFCLE1BQU0sQ0FBQyxFQUFFO1FBQ3ZDaWdCLEtBQUssR0FBRzVwQixDQUFDLENBQUNrRCxPQUFPLENBQUNwRixTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUNtRSxLQUFLLENBQUN2RixlQUFlLENBQUM7UUFDeERpVixDQUFDLEdBQUdpWSxLQUFLLENBQUN2dkIsTUFBTSxHQUFHLENBQUM7UUFFcEIsT0FBTzJJLENBQUMsR0FBRzJPLENBQUMsRUFBRTNPLENBQUMsRUFBRSxFQUFFO1VBQ2pCMkcsTUFBTSxJQUFJaWdCLEtBQUssQ0FBQzVtQixDQUFDLENBQUMsSUFBSSxDQUFDL0MsQ0FBQyxDQUFDK0IsT0FBTyxDQUFDZ0IsQ0FBQyxDQUFDLEdBQUcybUIsTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxJQUFJN2xCLElBQUksR0FBRyxVQUFVLEdBQUcsQ0FBQzBJLENBQUMsQ0FBQ3JTLE1BQU0sR0FBR3FTLENBQUMsR0FBR2lkLE1BQU0sQ0FBQ3R2QixNQUFNLEdBQUdzdkIsTUFBTSxHQUFHRCxjQUFjLEVBQUVHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0k7TUFDRjtJQUNGO0lBRUEsSUFBSSxDQUFDRCxLQUFLLEVBQUU7TUFDVkEsS0FBSyxHQUFHNXBCLENBQUMsQ0FBQ2lDLEtBQUssQ0FBQ25FLFNBQVMsQ0FBQztNQUMxQjZULENBQUMsR0FBR2lZLEtBQUssQ0FBQ3Z2QixNQUFNLEdBQUcsQ0FBQztNQUVwQixPQUFPMkksQ0FBQyxHQUFHMk8sQ0FBQyxFQUFFM08sQ0FBQyxFQUFFLEVBQUU7UUFDakIyRyxNQUFNLElBQUlpZ0IsS0FBSyxDQUFDNW1CLENBQUMsQ0FBQyxHQUFHMm1CLE1BQU0sQ0FBQzNtQixDQUFDLENBQUM7TUFDaEM7SUFDRjtJQUVBLE9BQU8yRyxNQUFNLEdBQUdpZ0IsS0FBSyxDQUFDalksQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFDRzdULFNBQVMsR0FBRyxZQUFZO0lBQzFCLElBQUlrQyxDQUFDLEdBQUcsd0VBQXdFO01BQzVFO01BQ0pGLENBQUM7SUFFRCxLQUFLQSxDQUFDLElBQUkybkIsWUFBWSxFQUFFO01BQ3RCem5CLENBQUMsSUFBSSxHQUFHLEdBQUdGLENBQUMsR0FBRyxLQUFLO0lBQ3RCO0lBRUEsT0FBTyxJQUFJZ3FCLE1BQU0sQ0FBQzlwQixDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQztFQUNsQyxDQUFDLENBQUMsQ0FBQztFQUNDK3BCLE9BQU8sR0FBRyxXQUFXO0VBQ3JCN3NCLGtCQUFrQixHQUFHLFNBQVNBLGtCQUFrQkEsQ0FBQ2lGLENBQUMsRUFBRTtJQUN0RCxJQUFJNm5CLFFBQVEsR0FBRzduQixDQUFDLENBQUNrSixJQUFJLENBQUMsR0FBRyxDQUFDO01BQ3RCNmQsS0FBSztJQUNUcHJCLFNBQVMsQ0FBQzJNLFNBQVMsR0FBRyxDQUFDO0lBRXZCLElBQUkzTSxTQUFTLENBQUNzSyxJQUFJLENBQUM0aEIsUUFBUSxDQUFDLEVBQUU7TUFDNUJkLEtBQUssR0FBR2EsT0FBTyxDQUFDM2hCLElBQUksQ0FBQzRoQixRQUFRLENBQUM7TUFDOUI3bkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHc25CLGFBQWEsQ0FBQ3RuQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUrbUIsS0FBSyxDQUFDO01BQ2pDL21CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3NuQixhQUFhLENBQUN0bkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFK21CLEtBQUssRUFBRU0sZUFBZSxDQUFDcm5CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFMUQsT0FBTyxJQUFJO0lBQ2I7RUFDRixDQUFDO0VBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBOG5CLGFBQWE7RUFDVHhzQixPQUFPLEdBQUcsWUFBWTtJQUN4QixJQUFJeXNCLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFHO01BQ25CQyxhQUFhLEdBQUcsR0FBRztNQUNuQkMsWUFBWSxHQUFHLEVBQUU7TUFDakJDLFVBQVUsR0FBR0wsUUFBUSxDQUFDLENBQUM7TUFDdkJNLFdBQVcsR0FBR0QsVUFBVTtNQUN4QkUsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHO01BQ2pCQyxTQUFTLEdBQUdELElBQUk7TUFDaEJFLFVBQVUsR0FBRyxFQUFFO01BQ2ZDLEdBQUc7TUFDSEMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLEtBQUs7TUFDTEMsTUFBTTtNQUNOQyxFQUFFO01BQ0ZDLEtBQUssR0FBRyxTQUFTQSxLQUFLQSxDQUFDM1MsQ0FBQyxFQUFFO1FBQzVCLElBQUk0UyxPQUFPLEdBQUdqQixRQUFRLENBQUMsQ0FBQyxHQUFHTSxXQUFXO1VBQ2xDWSxNQUFNLEdBQUc3UyxDQUFDLEtBQUssSUFBSTtVQUNuQjhTLE9BQU87VUFDUEMsUUFBUTtVQUNSdmlCLElBQUk7VUFDSnNWLEtBQUs7UUFFVDhNLE9BQU8sR0FBR2QsYUFBYSxLQUFLRSxVQUFVLElBQUlZLE9BQU8sR0FBR2IsWUFBWSxDQUFDO1FBQ2pFRSxXQUFXLElBQUlXLE9BQU87UUFDdEJwaUIsSUFBSSxHQUFHeWhCLFdBQVcsR0FBR0QsVUFBVTtRQUMvQmMsT0FBTyxHQUFHdGlCLElBQUksR0FBRzJoQixTQUFTO1FBRTFCLElBQUlXLE9BQU8sR0FBRyxDQUFDLElBQUlELE1BQU0sRUFBRTtVQUN6Qi9NLEtBQUssR0FBRyxFQUFFME0sS0FBSyxDQUFDMU0sS0FBSztVQUNyQjJNLE1BQU0sR0FBR2ppQixJQUFJLEdBQUdnaUIsS0FBSyxDQUFDaGlCLElBQUksR0FBRyxJQUFJO1VBQ2pDZ2lCLEtBQUssQ0FBQ2hpQixJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSSxHQUFHLElBQUk7VUFDL0IyaEIsU0FBUyxJQUFJVyxPQUFPLElBQUlBLE9BQU8sSUFBSVosSUFBSSxHQUFHLENBQUMsR0FBR0EsSUFBSSxHQUFHWSxPQUFPLENBQUM7VUFDN0RDLFFBQVEsR0FBRyxDQUFDO1FBQ2Q7UUFFQUYsTUFBTSxLQUFLUixHQUFHLEdBQUdDLElBQUksQ0FBQ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUUvQixJQUFJSSxRQUFRLEVBQUU7VUFDWixLQUFLTCxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUdOLFVBQVUsQ0FBQ3R3QixNQUFNLEVBQUU0d0IsRUFBRSxFQUFFLEVBQUU7WUFDekM7WUFDQU4sVUFBVSxDQUFDTSxFQUFFLENBQUMsQ0FBQ2xpQixJQUFJLEVBQUVpaUIsTUFBTSxFQUFFM00sS0FBSyxFQUFFOUYsQ0FBQyxDQUFDO1VBQ3hDO1FBQ0Y7TUFDRixDQUFDO0lBRUR3UyxLQUFLLEdBQUc7TUFDTmhpQixJQUFJLEVBQUUsQ0FBQztNQUNQc1YsS0FBSyxFQUFFLENBQUM7TUFDUmtOLElBQUksRUFBRSxTQUFTQSxJQUFJQSxDQUFBLEVBQUc7UUFDcEJMLEtBQUssQ0FBQyxJQUFJLENBQUM7TUFDYixDQUFDO01BQ0RNLFVBQVUsRUFBRSxTQUFTQSxVQUFVQSxDQUFDQyxHQUFHLEVBQUU7UUFDbkMsT0FBT1QsTUFBTSxJQUFJLElBQUksSUFBSVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ3RDLENBQUM7TUFDREMsSUFBSSxFQUFFLFNBQVNBLElBQUlBLENBQUEsRUFBRztRQUNwQixJQUFJaFYsVUFBVSxFQUFFO1VBQ2QsSUFBSSxDQUFDSCxZQUFZLElBQUk3WCxhQUFhLENBQUMsQ0FBQyxFQUFFO1lBQ3BDUixJQUFJLEdBQUdxWSxZQUFZLEdBQUd0YyxNQUFNO1lBQzVCa0UsSUFBSSxHQUFHRCxJQUFJLENBQUNyRSxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQzFCMmMsUUFBUSxDQUFDamEsSUFBSSxHQUFHQSxJQUFJO1lBQ3BCLENBQUMyQixJQUFJLENBQUN5dEIsWUFBWSxLQUFLenRCLElBQUksQ0FBQ3l0QixZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUVocEIsSUFBSSxDQUFDcEcsSUFBSSxDQUFDcXZCLE9BQU8sQ0FBQztZQUVsRWpWLFFBQVEsQ0FBQ0YsYUFBYSxJQUFJdlksSUFBSSxDQUFDMnRCLGdCQUFnQixJQUFJLENBQUMzdEIsSUFBSSxDQUFDM0IsSUFBSSxJQUFJMkIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTVFNHNCLElBQUksR0FBRzVzQixJQUFJLENBQUM0dEIscUJBQXFCO1lBRWpDakYsb0JBQW9CLENBQUMza0IsT0FBTyxDQUFDNGtCLGFBQWEsQ0FBQztVQUM3QztVQUVBOEQsR0FBRyxJQUFJRyxLQUFLLENBQUNnQixLQUFLLENBQUMsQ0FBQztVQUVwQmxCLElBQUksR0FBR0MsSUFBSSxJQUFJLFVBQVVuZSxDQUFDLEVBQUU7WUFDMUIsT0FBT3FmLFVBQVUsQ0FBQ3JmLENBQUMsRUFBRStkLFNBQVMsR0FBR0ssS0FBSyxDQUFDaGlCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUM3RCxDQUFDO1VBRURraEIsYUFBYSxHQUFHLENBQUM7VUFFakJpQixLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1Y7TUFDRixDQUFDO01BQ0RhLEtBQUssRUFBRSxTQUFTQSxLQUFLQSxDQUFBLEVBQUc7UUFDdEIsQ0FBQ2pCLElBQUksR0FBRzVzQixJQUFJLENBQUMrdEIsb0JBQW9CLEdBQUdDLFlBQVksRUFBRXRCLEdBQUcsQ0FBQztRQUN0RFgsYUFBYSxHQUFHLENBQUM7UUFDakJZLElBQUksR0FBR3pULFVBQVU7TUFDbkIsQ0FBQztNQUNEK1UsWUFBWSxFQUFFLFNBQVNBLFlBQVlBLENBQUNDLFNBQVMsRUFBRUMsV0FBVyxFQUFFO1FBQzFEaEMsYUFBYSxHQUFHK0IsU0FBUyxJQUFJRSxRQUFRLENBQUMsQ0FBQzs7UUFFdkNoQyxZQUFZLEdBQUd6ckIsSUFBSSxDQUFDb2lCLEdBQUcsQ0FBQ29MLFdBQVcsSUFBSSxFQUFFLEVBQUVoQyxhQUFhLENBQUM7TUFDM0QsQ0FBQztNQUNEb0IsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLENBQUNjLElBQUksRUFBRTtRQUN0QjlCLElBQUksR0FBRyxJQUFJLElBQUk4QixJQUFJLElBQUksR0FBRyxDQUFDO1FBQzNCN0IsU0FBUyxHQUFHSyxLQUFLLENBQUNoaUIsSUFBSSxHQUFHLElBQUksR0FBRzBoQixJQUFJO01BQ3RDLENBQUM7TUFDRDVYLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxDQUFDd1QsUUFBUSxFQUFFbUcsSUFBSSxFQUFFQyxVQUFVLEVBQUU7UUFDNUMsSUFBSWhVLElBQUksR0FBRytULElBQUksR0FBRyxVQUFVM3NCLENBQUMsRUFBRTZNLENBQUMsRUFBRUMsQ0FBQyxFQUFFNEwsQ0FBQyxFQUFFO1VBQ3RDOE4sUUFBUSxDQUFDeG1CLENBQUMsRUFBRTZNLENBQUMsRUFBRUMsQ0FBQyxFQUFFNEwsQ0FBQyxDQUFDO1VBRXBCd1MsS0FBSyxDQUFDM1AsTUFBTSxDQUFDM0MsSUFBSSxDQUFDO1FBQ3BCLENBQUMsR0FBRzROLFFBQVE7UUFFWjBFLEtBQUssQ0FBQzNQLE1BQU0sQ0FBQ2lMLFFBQVEsQ0FBQztRQUV0QnNFLFVBQVUsQ0FBQzhCLFVBQVUsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUNoVSxJQUFJLENBQUM7UUFFakRvSixLQUFLLENBQUMsQ0FBQztRQUVQLE9BQU9wSixJQUFJO01BQ2IsQ0FBQztNQUNEMkMsTUFBTSxFQUFFLFNBQVNBLE1BQU1BLENBQUNpTCxRQUFRLEVBQUVyakIsQ0FBQyxFQUFFO1FBQ25DLEVBQUVBLENBQUMsR0FBRzJuQixVQUFVLENBQUMzb0IsT0FBTyxDQUFDcWtCLFFBQVEsQ0FBQyxDQUFDLElBQUlzRSxVQUFVLENBQUN0UyxNQUFNLENBQUNyVixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUlpb0IsRUFBRSxJQUFJam9CLENBQUMsSUFBSWlvQixFQUFFLEVBQUU7TUFDbkYsQ0FBQztNQUNETixVQUFVLEVBQUVBO0lBQ2QsQ0FBQztJQUNELE9BQU9JLEtBQUs7RUFDZCxDQUFDLENBQUMsQ0FBQztFQUNDbEosS0FBSyxHQUFHLFNBQVNBLEtBQUtBLENBQUEsRUFBRztJQUMzQixPQUFPLENBQUNvSSxhQUFhLElBQUl4c0IsT0FBTyxDQUFDaXVCLElBQUksQ0FBQyxDQUFDO0VBQ3pDLENBQUM7RUFDRzs7RUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0FnQixRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ1RDLGNBQWMsR0FBRyxxQkFBcUI7RUFDdENDLFVBQVUsR0FBRyxPQUFPO0VBQ3BCQyxvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUNyc0IsS0FBSyxFQUFFO0lBQzlEO0lBQ0EsSUFBSTJXLEdBQUcsR0FBRyxDQUFDLENBQUM7TUFDUmxWLEtBQUssR0FBR3pCLEtBQUssQ0FBQ3lDLE1BQU0sQ0FBQyxDQUFDLEVBQUV6QyxLQUFLLENBQUNuRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM0SCxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ3BEakksR0FBRyxHQUFHaUksS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNkZSxDQUFDLEdBQUcsQ0FBQztNQUNMMk8sQ0FBQyxHQUFHMVAsS0FBSyxDQUFDNUgsTUFBTTtNQUNoQm9QLEtBQUs7TUFDTHFqQixHQUFHO01BQ0hDLFNBQVM7SUFFYixPQUFPL3BCLENBQUMsR0FBRzJPLENBQUMsRUFBRTNPLENBQUMsRUFBRSxFQUFFO01BQ2pCOHBCLEdBQUcsR0FBRzdxQixLQUFLLENBQUNlLENBQUMsQ0FBQztNQUNkeUcsS0FBSyxHQUFHekcsQ0FBQyxLQUFLMk8sQ0FBQyxHQUFHLENBQUMsR0FBR21iLEdBQUcsQ0FBQ0UsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHRixHQUFHLENBQUN6eUIsTUFBTTtNQUN2RDB5QixTQUFTLEdBQUdELEdBQUcsQ0FBQzdwQixNQUFNLENBQUMsQ0FBQyxFQUFFd0csS0FBSyxDQUFDO01BQ2hDME4sR0FBRyxDQUFDbmQsR0FBRyxDQUFDLEdBQUd3bUIsS0FBSyxDQUFDdU0sU0FBUyxDQUFDLEdBQUdBLFNBQVMsQ0FBQzdwQixPQUFPLENBQUMwcEIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDMWtCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQzZrQixTQUFTO01BQ25GL3lCLEdBQUcsR0FBRzh5QixHQUFHLENBQUM3cEIsTUFBTSxDQUFDd0csS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDdkIsSUFBSSxDQUFDLENBQUM7SUFDcEM7SUFFQSxPQUFPaVAsR0FBRztFQUNaLENBQUM7RUFDRzhWLG1CQUFtQixHQUFHLFNBQVNBLG1CQUFtQkEsQ0FBQ3pzQixLQUFLLEVBQUU7SUFDNUQsSUFBSTBzQixJQUFJLEdBQUcxc0IsS0FBSyxDQUFDd0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFDN0JtckIsS0FBSyxHQUFHM3NCLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxHQUFHLENBQUM7TUFDMUJvckIsTUFBTSxHQUFHNXNCLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxHQUFHLEVBQUVrckIsSUFBSSxDQUFDO0lBQ3JDLE9BQU8xc0IsS0FBSyxDQUFDZ0ssU0FBUyxDQUFDMGlCLElBQUksRUFBRSxDQUFDRSxNQUFNLElBQUlBLE1BQU0sR0FBR0QsS0FBSyxHQUFHM3NCLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxHQUFHLEVBQUVtckIsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHQSxLQUFLLENBQUM7RUFDakcsQ0FBQztFQUNHRSxxQkFBcUIsR0FBRyxTQUFTQSxxQkFBcUJBLENBQUMzYixJQUFJLEVBQUU7SUFDL0Q7SUFDQSxJQUFJelAsS0FBSyxHQUFHLENBQUN5UCxJQUFJLEdBQUcsRUFBRSxFQUFFelAsS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUM5Qm9nQixJQUFJLEdBQUdxSyxRQUFRLENBQUN6cUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE9BQU9vZ0IsSUFBSSxJQUFJcGdCLEtBQUssQ0FBQzVILE1BQU0sR0FBRyxDQUFDLElBQUlnb0IsSUFBSSxDQUFDMEUsTUFBTSxHQUFHMUUsSUFBSSxDQUFDMEUsTUFBTSxDQUFDbkYsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDbFEsSUFBSSxDQUFDMVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM2cUIsb0JBQW9CLENBQUM1cUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR2dyQixtQkFBbUIsQ0FBQ3ZiLElBQUksQ0FBQyxDQUFDelAsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDaUssR0FBRyxDQUFDb04sa0JBQWtCLENBQUMsQ0FBQyxHQUFHb1QsUUFBUSxDQUFDWSxHQUFHLElBQUlYLGNBQWMsQ0FBQ3ZrQixJQUFJLENBQUNzSixJQUFJLENBQUMsR0FBR2diLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLEVBQUUsRUFBRTViLElBQUksQ0FBQyxHQUFHMlEsSUFBSTtFQUM1USxDQUFDO0VBQ0djLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDZCxJQUFJLEVBQUU7SUFDM0MsT0FBTyxVQUFVdmlCLENBQUMsRUFBRTtNQUNsQixPQUFPLENBQUMsR0FBR3VpQixJQUFJLENBQUMsQ0FBQyxHQUFHdmlCLENBQUMsQ0FBQztJQUN4QixDQUFDO0VBQ0gsQ0FBQztFQUNHO0VBQ0p5dEIsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDcFEsUUFBUSxFQUFFcVEsTUFBTSxFQUFFO0lBQ2pFLElBQUk5UyxLQUFLLEdBQUd5QyxRQUFRLENBQUNtQyxNQUFNO01BQ3ZCK0MsSUFBSTtJQUVSLE9BQU8zSCxLQUFLLEVBQUU7TUFDWixJQUFJQSxLQUFLLFlBQVlxRixRQUFRLEVBQUU7UUFDN0J3TixrQkFBa0IsQ0FBQzdTLEtBQUssRUFBRThTLE1BQU0sQ0FBQztNQUNuQyxDQUFDLE1BQU0sSUFBSTlTLEtBQUssQ0FBQzdJLElBQUksQ0FBQzRiLFFBQVEsS0FBSyxDQUFDL1MsS0FBSyxDQUFDbUUsS0FBSyxJQUFJLENBQUNuRSxLQUFLLENBQUN5QixPQUFPLENBQUMsSUFBSXpCLEtBQUssQ0FBQ21FLEtBQUssS0FBSzJPLE1BQU0sRUFBRTtRQUM1RixJQUFJOVMsS0FBSyxDQUFDeUMsUUFBUSxFQUFFO1VBQ2xCb1Esa0JBQWtCLENBQUM3UyxLQUFLLENBQUN5QyxRQUFRLEVBQUVxUSxNQUFNLENBQUM7UUFDNUMsQ0FBQyxNQUFNO1VBQ0xuTCxJQUFJLEdBQUczSCxLQUFLLENBQUNnVCxLQUFLO1VBQ2xCaFQsS0FBSyxDQUFDZ1QsS0FBSyxHQUFHaFQsS0FBSyxDQUFDaVQsTUFBTTtVQUMxQmpULEtBQUssQ0FBQ2lULE1BQU0sR0FBR3RMLElBQUk7VUFDbkIzSCxLQUFLLENBQUNtRSxLQUFLLEdBQUcyTyxNQUFNO1FBQ3RCO01BQ0Y7TUFFQTlTLEtBQUssR0FBR0EsS0FBSyxDQUFDL1AsS0FBSztJQUNyQjtFQUNGLENBQUM7RUFDRzJYLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDRCxJQUFJLEVBQUV1TCxXQUFXLEVBQUU7SUFDdEQsT0FBTyxDQUFDdkwsSUFBSSxHQUFHdUwsV0FBVyxHQUFHLENBQUNyWSxXQUFXLENBQUM4TSxJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHcUssUUFBUSxDQUFDckssSUFBSSxDQUFDLElBQUlnTCxxQkFBcUIsQ0FBQ2hMLElBQUksQ0FBQyxLQUFLdUwsV0FBVztFQUN4SCxDQUFDO0VBQ0dDLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDclYsS0FBSyxFQUFFc1YsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRTtJQUN4RSxJQUFJRCxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDdEJBLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDanVCLENBQUMsRUFBRTtRQUM1QixPQUFPLENBQUMsR0FBR2d1QixNQUFNLENBQUMsQ0FBQyxHQUFHaHVCLENBQUMsQ0FBQztNQUMxQixDQUFDO0lBQ0g7SUFFQSxJQUFJa3VCLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUN4QkEsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUNsdUIsQ0FBQyxFQUFFO1FBQ2hDLE9BQU9BLENBQUMsR0FBRyxFQUFFLEdBQUdndUIsTUFBTSxDQUFDaHVCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHZ3VCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBR2h1QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUNqRSxDQUFDO0lBQ0g7SUFFQSxJQUFJdWlCLElBQUksR0FBRztRQUNUeUwsTUFBTSxFQUFFQSxNQUFNO1FBQ2RDLE9BQU8sRUFBRUEsT0FBTztRQUNoQkMsU0FBUyxFQUFFQTtNQUNiLENBQUM7TUFDR0MsYUFBYTtJQUVqQmp4QixZQUFZLENBQUN3YixLQUFLLEVBQUUsVUFBVTlHLElBQUksRUFBRTtNQUNsQ2diLFFBQVEsQ0FBQ2hiLElBQUksQ0FBQyxHQUFHOEUsUUFBUSxDQUFDOUUsSUFBSSxDQUFDLEdBQUcyUSxJQUFJO01BQ3RDcUssUUFBUSxDQUFDdUIsYUFBYSxHQUFHdmMsSUFBSSxDQUFDdk8sV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHNHFCLE9BQU87TUFFdEQsS0FBSyxJQUFJanVCLENBQUMsSUFBSXVpQixJQUFJLEVBQUU7UUFDbEJxSyxRQUFRLENBQUN1QixhQUFhLElBQUludUIsQ0FBQyxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUdBLENBQUMsS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUc0c0IsUUFBUSxDQUFDaGIsSUFBSSxHQUFHLEdBQUcsR0FBRzVSLENBQUMsQ0FBQyxHQUFHdWlCLElBQUksQ0FBQ3ZpQixDQUFDLENBQUM7TUFDL0g7SUFDRixDQUFDLENBQUM7SUFFRixPQUFPdWlCLElBQUk7RUFDYixDQUFDO0VBQ0c2TCxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUNILE9BQU8sRUFBRTtJQUMxRCxPQUFPLFVBQVVqdUIsQ0FBQyxFQUFFO01BQ2xCLE9BQU9BLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUdpdUIsT0FBTyxDQUFDLENBQUMsR0FBR2p1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBR2l1QixPQUFPLENBQUMsQ0FBQ2p1QixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDL0UsQ0FBQztFQUNILENBQUM7RUFDR3F1QixjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQ25xQixJQUFJLEVBQUVvcUIsU0FBUyxFQUFFQyxNQUFNLEVBQUU7SUFDcEUsSUFBSUMsRUFBRSxHQUFHRixTQUFTLElBQUksQ0FBQyxHQUFHQSxTQUFTLEdBQUcsQ0FBQztNQUNuQztNQUNKRyxFQUFFLEdBQUcsQ0FBQ0YsTUFBTSxLQUFLcnFCLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUtvcUIsU0FBUyxHQUFHLENBQUMsR0FBR0EsU0FBUyxHQUFHLENBQUMsQ0FBQztNQUNoRUksRUFBRSxHQUFHRCxFQUFFLEdBQUd0WixJQUFJLElBQUlwVyxJQUFJLENBQUM0dkIsSUFBSSxDQUFDLENBQUMsR0FBR0gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3pDUCxPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQ2p1QixDQUFDLEVBQUU7UUFDaEMsT0FBT0EsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUd3dUIsRUFBRSxHQUFHenZCLElBQUksQ0FBQ3drQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHdmpCLENBQUMsQ0FBQyxHQUFHd1YsSUFBSSxDQUFDLENBQUN4VixDQUFDLEdBQUcwdUIsRUFBRSxJQUFJRCxFQUFFLENBQUMsR0FBRyxDQUFDO01BQzFFLENBQUM7TUFDR2xNLElBQUksR0FBR3JlLElBQUksS0FBSyxLQUFLLEdBQUcrcEIsT0FBTyxHQUFHL3BCLElBQUksS0FBSyxJQUFJLEdBQUcsVUFBVWxFLENBQUMsRUFBRTtRQUNqRSxPQUFPLENBQUMsR0FBR2l1QixPQUFPLENBQUMsQ0FBQyxHQUFHanVCLENBQUMsQ0FBQztNQUMzQixDQUFDLEdBQUdvdUIsaUJBQWlCLENBQUNILE9BQU8sQ0FBQztJQUU5QlEsRUFBRSxHQUFHdFosSUFBSSxHQUFHc1osRUFBRSxDQUFDLENBQUM7O0lBRWhCbE0sSUFBSSxDQUFDMEUsTUFBTSxHQUFHLFVBQVVxSCxTQUFTLEVBQUVDLE1BQU0sRUFBRTtNQUN6QyxPQUFPRixjQUFjLENBQUNucUIsSUFBSSxFQUFFb3FCLFNBQVMsRUFBRUMsTUFBTSxDQUFDO0lBQ2hELENBQUM7SUFFRCxPQUFPaE0sSUFBSTtFQUNiLENBQUM7RUFDR3FNLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDMXFCLElBQUksRUFBRTJxQixTQUFTLEVBQUU7SUFDdEQsSUFBSUEsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3hCQSxTQUFTLEdBQUcsT0FBTztJQUNyQjtJQUVBLElBQUlaLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDanVCLENBQUMsRUFBRTtRQUNoQyxPQUFPQSxDQUFDLEdBQUcsRUFBRUEsQ0FBQyxHQUFHQSxDQUFDLElBQUksQ0FBQzZ1QixTQUFTLEdBQUcsQ0FBQyxJQUFJN3VCLENBQUMsR0FBRzZ1QixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztNQUNoRSxDQUFDO01BQ0d0TSxJQUFJLEdBQUdyZSxJQUFJLEtBQUssS0FBSyxHQUFHK3BCLE9BQU8sR0FBRy9wQixJQUFJLEtBQUssSUFBSSxHQUFHLFVBQVVsRSxDQUFDLEVBQUU7UUFDakUsT0FBTyxDQUFDLEdBQUdpdUIsT0FBTyxDQUFDLENBQUMsR0FBR2p1QixDQUFDLENBQUM7TUFDM0IsQ0FBQyxHQUFHb3VCLGlCQUFpQixDQUFDSCxPQUFPLENBQUM7SUFFOUIxTCxJQUFJLENBQUMwRSxNQUFNLEdBQUcsVUFBVTRILFNBQVMsRUFBRTtNQUNqQyxPQUFPRCxXQUFXLENBQUMxcUIsSUFBSSxFQUFFMnFCLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBT3RNLElBQUk7RUFDYixDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQXJsQixZQUFZLENBQUMsc0NBQXNDLEVBQUUsVUFBVTBVLElBQUksRUFBRTFPLENBQUMsRUFBRTtFQUN0RSxJQUFJNHJCLEtBQUssR0FBRzVyQixDQUFDLEdBQUcsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxDQUFDO0VBRTdCNnFCLFdBQVcsQ0FBQ25jLElBQUksR0FBRyxRQUFRLElBQUlrZCxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU1ckIsQ0FBQyxHQUFHLFVBQVVsRCxDQUFDLEVBQUU7SUFDMUQsT0FBT2pCLElBQUksQ0FBQ3drQixHQUFHLENBQUN2akIsQ0FBQyxFQUFFOHVCLEtBQUssQ0FBQztFQUMzQixDQUFDLEdBQUcsVUFBVTl1QixDQUFDLEVBQUU7SUFDZixPQUFPQSxDQUFDO0VBQ1YsQ0FBQyxFQUFFLFVBQVVBLENBQUMsRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHakIsSUFBSSxDQUFDd2tCLEdBQUcsQ0FBQyxDQUFDLEdBQUd2akIsQ0FBQyxFQUFFOHVCLEtBQUssQ0FBQztFQUNuQyxDQUFDLEVBQUUsVUFBVTl1QixDQUFDLEVBQUU7SUFDZCxPQUFPQSxDQUFDLEdBQUcsRUFBRSxHQUFHakIsSUFBSSxDQUFDd2tCLEdBQUcsQ0FBQ3ZqQixDQUFDLEdBQUcsQ0FBQyxFQUFFOHVCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcvdkIsSUFBSSxDQUFDd2tCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZqQixDQUFDLElBQUksQ0FBQyxFQUFFOHVCLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDbkYsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUZsQyxRQUFRLENBQUNtQyxNQUFNLENBQUNDLFFBQVEsR0FBR3BDLFFBQVEsQ0FBQ3FDLElBQUksR0FBR3JDLFFBQVEsQ0FBQ21DLE1BQU0sQ0FBQ2YsTUFBTTtBQUVqRUQsV0FBVyxDQUFDLFNBQVMsRUFBRU0sY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFQSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUVBLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFFckYsQ0FBQyxVQUFVNVUsQ0FBQyxFQUFFdFosQ0FBQyxFQUFFO0VBQ2YsSUFBSSt1QixFQUFFLEdBQUcsQ0FBQyxHQUFHL3VCLENBQUM7SUFDVmd2QixFQUFFLEdBQUcsQ0FBQyxHQUFHRCxFQUFFO0lBQ1hFLEVBQUUsR0FBRyxHQUFHLEdBQUdGLEVBQUU7SUFDYmpCLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDanVCLENBQUMsRUFBRTtNQUNoQyxPQUFPQSxDQUFDLEdBQUdrdkIsRUFBRSxHQUFHelYsQ0FBQyxHQUFHelosQ0FBQyxHQUFHQSxDQUFDLEdBQUdBLENBQUMsR0FBR212QixFQUFFLEdBQUcxVixDQUFDLEdBQUcxYSxJQUFJLENBQUN3a0IsR0FBRyxDQUFDdmpCLENBQUMsR0FBRyxHQUFHLEdBQUdHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILENBQUMsR0FBR292QixFQUFFLEdBQUczVixDQUFDLElBQUl6WixDQUFDLElBQUksSUFBSSxHQUFHRyxDQUFDLENBQUMsR0FBR0gsQ0FBQyxHQUFHLEtBQUssR0FBR3laLENBQUMsR0FBRzFhLElBQUksQ0FBQ3drQixHQUFHLENBQUN2akIsQ0FBQyxHQUFHLEtBQUssR0FBR0csQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE9BQU87SUFDL0osQ0FBQztFQUVENHRCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsVUFBVS90QixDQUFDLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUdpdUIsT0FBTyxDQUFDLENBQUMsR0FBR2p1QixDQUFDLENBQUM7RUFDM0IsQ0FBQyxFQUFFaXVCLE9BQU8sQ0FBQztBQUNiLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO0FBRWhCRixXQUFXLENBQUMsTUFBTSxFQUFFLFVBQVUvdEIsQ0FBQyxFQUFFO0VBQy9CLE9BQU9BLENBQUMsR0FBR2pCLElBQUksQ0FBQ3drQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSXZqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzFDLENBQUMsQ0FBQztBQUVGK3RCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBVS90QixDQUFDLEVBQUU7RUFDL0IsT0FBTyxFQUFFc1YsS0FBSyxDQUFDLENBQUMsR0FBR3RWLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGK3RCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBVS90QixDQUFDLEVBQUU7RUFDL0IsT0FBT0EsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQ3VWLElBQUksQ0FBQ3ZWLENBQUMsR0FBR29WLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRUYyWSxXQUFXLENBQUMsTUFBTSxFQUFFYSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUVBLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRUEsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUV6RWhDLFFBQVEsQ0FBQ3lDLFdBQVcsR0FBR3pDLFFBQVEsQ0FBQzBDLEtBQUssR0FBRzVZLFFBQVEsQ0FBQzJZLFdBQVcsR0FBRztFQUM3RHBJLE1BQU0sRUFBRSxTQUFTQSxNQUFNQSxDQUFDcUksS0FBSyxFQUFFQyxjQUFjLEVBQUU7SUFDN0MsSUFBSUQsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3BCQSxLQUFLLEdBQUcsQ0FBQztJQUNYO0lBRUEsSUFBSWQsRUFBRSxHQUFHLENBQUMsR0FBR2MsS0FBSztNQUNkYixFQUFFLEdBQUdhLEtBQUssSUFBSUMsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDckNiLEVBQUUsR0FBR2EsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO01BQzNCbk8sR0FBRyxHQUFHLENBQUMsR0FBR2xNLFFBQVE7SUFDdEIsT0FBTyxVQUFVbFYsQ0FBQyxFQUFFO01BQ2xCLE9BQU8sQ0FBQyxDQUFDeXVCLEVBQUUsR0FBR2xSLE1BQU0sQ0FBQyxDQUFDLEVBQUU2RCxHQUFHLEVBQUVwaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJMHVCLEVBQUUsSUFBSUYsRUFBRTtJQUNqRCxDQUFDO0VBQ0g7QUFDRixDQUFDO0FBQ0QzWixTQUFTLENBQUMwTixJQUFJLEdBQUdxSyxRQUFRLENBQUMsVUFBVSxDQUFDO0FBRXJDMXZCLFlBQVksQ0FBQyxvRUFBb0UsRUFBRSxVQUFVMFUsSUFBSSxFQUFFO0VBQ2pHLE9BQU91RyxjQUFjLElBQUl2RyxJQUFJLEdBQUcsR0FBRyxHQUFHQSxJQUFJLEdBQUcsU0FBUztBQUN4RCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdPLElBQUlwVSxPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQ3NELE1BQU0sRUFBRXdYLE9BQU8sRUFBRTtFQUNyRCxJQUFJLENBQUMzZSxFQUFFLEdBQUcwYixLQUFLLEVBQUU7RUFDakJ2VSxNQUFNLENBQUNNLEtBQUssR0FBRyxJQUFJO0VBQ25CLElBQUksQ0FBQ04sTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ3dYLE9BQU8sR0FBR0EsT0FBTztFQUN0QixJQUFJLENBQUNoRixHQUFHLEdBQUdnRixPQUFPLEdBQUdBLE9BQU8sQ0FBQ2hGLEdBQUcsR0FBRzVXLFlBQVk7RUFDL0MsSUFBSSxDQUFDb0QsR0FBRyxHQUFHd1ksT0FBTyxHQUFHQSxPQUFPLENBQUM5RSxTQUFTLEdBQUcxVixVQUFVO0FBQ3JELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQUkweEIsU0FBUyxHQUFHLGFBQWEsWUFBWTtFQUM5QyxTQUFTQSxTQUFTQSxDQUFDemQsSUFBSSxFQUFFO0lBQ3ZCLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQzZMLE1BQU0sR0FBRyxDQUFDN0wsSUFBSSxDQUFDcFgsS0FBSyxJQUFJLENBQUM7SUFFOUIsSUFBSSxJQUFJLENBQUMwaEIsT0FBTyxHQUFHdEssSUFBSSxDQUFDOE4sTUFBTSxLQUFLMk0sUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHemEsSUFBSSxDQUFDOE4sTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNuRTtNQUNBLElBQUksQ0FBQ3JELE9BQU8sR0FBR3pLLElBQUksQ0FBQzZNLFdBQVcsSUFBSSxDQUFDO01BQ3BDLElBQUksQ0FBQ0csS0FBSyxHQUFHLENBQUMsQ0FBQ2hOLElBQUksQ0FBQzBkLElBQUksSUFBSSxDQUFDLENBQUMxZCxJQUFJLENBQUM0YixRQUFRO0lBQzdDO0lBRUEsSUFBSSxDQUFDeFIsR0FBRyxHQUFHLENBQUM7SUFFWnVELFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzNOLElBQUksQ0FBQytDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXhDLElBQUksQ0FBQ2pWLElBQUksR0FBR2tTLElBQUksQ0FBQ2xTLElBQUk7SUFFckIsSUFBSW9WLFFBQVEsRUFBRTtNQUNaLElBQUksQ0FBQ3lSLElBQUksR0FBR3pSLFFBQVE7TUFFcEJBLFFBQVEsQ0FBQ3BWLElBQUksQ0FBQ2dELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUI7SUFFQXNuQixhQUFhLElBQUl4c0IsT0FBTyxDQUFDaXVCLElBQUksQ0FBQyxDQUFDO0VBQ2pDO0VBRUEsSUFBSThELE1BQU0sR0FBR0YsU0FBUyxDQUFDamIsU0FBUztFQUVoQ21iLE1BQU0sQ0FBQy8wQixLQUFLLEdBQUcsU0FBU0EsS0FBS0EsQ0FBQytGLEtBQUssRUFBRTtJQUNuQyxJQUFJQSxLQUFLLElBQUlBLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDeEIsSUFBSSxDQUFDb0ksTUFBTSxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDcVUsaUJBQWlCLElBQUksSUFBSSxDQUFDd1MsU0FBUyxDQUFDLElBQUksQ0FBQ2pVLE1BQU0sR0FBR2hiLEtBQUssR0FBRyxJQUFJLENBQUNrZCxNQUFNLENBQUM7TUFDakcsSUFBSSxDQUFDQSxNQUFNLEdBQUdsZCxLQUFLO01BQ25CLE9BQU8sSUFBSTtJQUNiO0lBRUEsT0FBTyxJQUFJLENBQUNrZCxNQUFNO0VBQ3BCLENBQUM7RUFFRDhSLE1BQU0sQ0FBQzVhLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFDcFUsS0FBSyxFQUFFO0lBQ3pDLE9BQU9zUixTQUFTLENBQUN6WCxNQUFNLEdBQUcsSUFBSSxDQUFDc2hCLGFBQWEsQ0FBQyxJQUFJLENBQUNRLE9BQU8sR0FBRyxDQUFDLEdBQUczYixLQUFLLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQzhiLE9BQU8sSUFBSSxJQUFJLENBQUNILE9BQU8sR0FBRzNiLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQ21iLGFBQWEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDbFEsSUFBSTtFQUM1SixDQUFDO0VBRUQrakIsTUFBTSxDQUFDN1QsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUNuYixLQUFLLEVBQUU7SUFDbkQsSUFBSSxDQUFDc1IsU0FBUyxDQUFDelgsTUFBTSxFQUFFO01BQ3JCLE9BQU8sSUFBSSxDQUFDd2lCLEtBQUs7SUFDbkI7SUFFQSxJQUFJLENBQUNwQixNQUFNLEdBQUcsQ0FBQztJQUNmLE9BQU8rRCxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ3JELE9BQU8sR0FBRyxDQUFDLEdBQUczYixLQUFLLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQzJiLE9BQU8sR0FBRyxJQUFJLENBQUNHLE9BQU8sS0FBSyxJQUFJLENBQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNsSCxDQUFDO0VBRURxVCxNQUFNLENBQUMzVCxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQzZULFVBQVUsRUFBRXBZLGNBQWMsRUFBRTtJQUNoRXVLLEtBQUssQ0FBQyxDQUFDO0lBRVAsSUFBSSxDQUFDL1AsU0FBUyxDQUFDelgsTUFBTSxFQUFFO01BQ3JCLE9BQU8sSUFBSSxDQUFDZ2lCLE1BQU07SUFDcEI7SUFFQSxJQUFJelQsTUFBTSxHQUFHLElBQUksQ0FBQ3lSLEdBQUc7SUFFckIsSUFBSXpSLE1BQU0sSUFBSUEsTUFBTSxDQUFDcVUsaUJBQWlCLElBQUksSUFBSSxDQUFDaEIsR0FBRyxFQUFFO01BQ2xEZSxjQUFjLENBQUMsSUFBSSxFQUFFMFMsVUFBVSxDQUFDO01BRWhDLENBQUM5bUIsTUFBTSxDQUFDeVIsR0FBRyxJQUFJelIsTUFBTSxDQUFDQSxNQUFNLElBQUlzVSxjQUFjLENBQUN0VSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUM5RDs7TUFFQSxPQUFPQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0EsTUFBTSxFQUFFO1FBQzlCLElBQUlBLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDNEMsS0FBSyxLQUFLNUMsTUFBTSxDQUFDNFMsTUFBTSxJQUFJNVMsTUFBTSxDQUFDcVQsR0FBRyxJQUFJLENBQUMsR0FBR3JULE1BQU0sQ0FBQ3lULE1BQU0sR0FBR3pULE1BQU0sQ0FBQ3FULEdBQUcsR0FBRyxDQUFDclQsTUFBTSxDQUFDK1MsYUFBYSxDQUFDLENBQUMsR0FBRy9TLE1BQU0sQ0FBQ3lULE1BQU0sSUFBSSxDQUFDelQsTUFBTSxDQUFDcVQsR0FBRyxDQUFDLEVBQUU7VUFDbkpyVCxNQUFNLENBQUNpVCxTQUFTLENBQUNqVCxNQUFNLENBQUN5VCxNQUFNLEVBQUUsSUFBSSxDQUFDO1FBQ3ZDO1FBRUF6VCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0EsTUFBTTtNQUN4QjtNQUVBLElBQUksQ0FBQyxJQUFJLENBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUN5UixHQUFHLENBQUNjLGtCQUFrQixLQUFLLElBQUksQ0FBQ2MsR0FBRyxHQUFHLENBQUMsSUFBSXlULFVBQVUsR0FBRyxJQUFJLENBQUM3UyxLQUFLLElBQUksSUFBSSxDQUFDWixHQUFHLEdBQUcsQ0FBQyxJQUFJeVQsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzdTLEtBQUssSUFBSSxDQUFDNlMsVUFBVSxDQUFDLEVBQUU7UUFDNUo7UUFDQW5TLGNBQWMsQ0FBQyxJQUFJLENBQUNsRCxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQ21CLE1BQU0sR0FBRyxJQUFJLENBQUNrQyxNQUFNLENBQUM7TUFDM0Q7SUFDRjtJQUVBLElBQUksSUFBSSxDQUFDckIsTUFBTSxLQUFLcVQsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDamtCLElBQUksSUFBSSxDQUFDNkwsY0FBYyxJQUFJLElBQUksQ0FBQzhCLFFBQVEsSUFBSXZhLElBQUksQ0FBQzJRLEdBQUcsQ0FBQyxJQUFJLENBQUM4TixNQUFNLENBQUMsS0FBS3RJLFFBQVEsSUFBSSxDQUFDMGEsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDdFcsUUFBUSxLQUFLLElBQUksQ0FBQ3ZHLEdBQUcsSUFBSSxJQUFJLENBQUM4YyxTQUFTLENBQUMsRUFBRTtNQUN2TDtNQUNBLElBQUksQ0FBQzFULEdBQUcsS0FBSyxJQUFJLENBQUMyVCxNQUFNLEdBQUdGLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDeEM7TUFDQTs7TUFFQXpXLGVBQWUsQ0FBQyxJQUFJLEVBQUV5VyxVQUFVLEVBQUVwWSxjQUFjLENBQUMsQ0FBQyxDQUFDO01BQ25EO0lBRUY7O0lBRUEsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEa1ksTUFBTSxDQUFDem1CLElBQUksR0FBRyxTQUFTQSxJQUFJQSxDQUFDdkksS0FBSyxFQUFFOFcsY0FBYyxFQUFFO0lBQ2pELE9BQU94RixTQUFTLENBQUN6WCxNQUFNLEdBQUcsSUFBSSxDQUFDd2hCLFNBQVMsQ0FBQ2hkLElBQUksQ0FBQ29pQixHQUFHLENBQUMsSUFBSSxDQUFDdEYsYUFBYSxDQUFDLENBQUMsRUFBRW5iLEtBQUssR0FBRzBiLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDelEsSUFBSSxHQUFHLElBQUksQ0FBQzZRLE9BQU8sQ0FBQyxLQUFLOWIsS0FBSyxHQUFHLElBQUksQ0FBQ2lMLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTZMLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQzlMLEtBQUssQ0FBQyxDQUFDO0VBQ3RNLENBQUM7O0VBRURna0IsTUFBTSxDQUFDM1AsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUNyZixLQUFLLEVBQUU4VyxjQUFjLEVBQUU7SUFDbkUsT0FBT3hGLFNBQVMsQ0FBQ3pYLE1BQU0sR0FBRyxJQUFJLENBQUN3aEIsU0FBUyxDQUFDLElBQUksQ0FBQ0YsYUFBYSxDQUFDLENBQUMsR0FBR25iLEtBQUssRUFBRThXLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQ3FFLGFBQWEsQ0FBQyxDQUFDLEdBQUc5YyxJQUFJLENBQUNvaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM1RSxNQUFNLEdBQUcsSUFBSSxDQUFDUSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNuZCxLQUFLO0VBQ3BLLENBQUM7RUFFRDh2QixNQUFNLENBQUNoSyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ2hsQixLQUFLLEVBQUU4VyxjQUFjLEVBQUU7SUFDekQsT0FBT3hGLFNBQVMsQ0FBQ3pYLE1BQU0sR0FBRyxJQUFJLENBQUN3aEIsU0FBUyxDQUFDLElBQUksQ0FBQ2pILFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDaUssS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDRixTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBR25lLEtBQUssR0FBR0EsS0FBSyxDQUFDLEdBQUcwYixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRTVFLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQzFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcvVixJQUFJLENBQUNvaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUN6VixLQUFLLEdBQUcsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMvTCxLQUFLO0VBQzVPLENBQUM7RUFFRDh2QixNQUFNLENBQUM3USxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ25lLEtBQUssRUFBRThXLGNBQWMsRUFBRTtJQUMzRCxJQUFJa0YsYUFBYSxHQUFHLElBQUksQ0FBQzVILFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDMEgsT0FBTztJQUVsRCxPQUFPeEssU0FBUyxDQUFDelgsTUFBTSxHQUFHLElBQUksQ0FBQ3doQixTQUFTLENBQUMsSUFBSSxDQUFDclEsS0FBSyxHQUFHLENBQUNoTCxLQUFLLEdBQUcsQ0FBQyxJQUFJZ2MsYUFBYSxFQUFFbEYsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDNkUsT0FBTyxHQUFHQyxlQUFlLENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUVHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ3pLLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFBOztFQUdBZ1QsTUFBTSxDQUFDN1IsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUNuZCxLQUFLLEVBQUU7SUFDM0MsSUFBSSxDQUFDc1IsU0FBUyxDQUFDelgsTUFBTSxFQUFFO01BQ3JCLE9BQU8sSUFBSSxDQUFDMGlCLElBQUksS0FBSyxDQUFDL0gsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMrSCxJQUFJLENBQUMsQ0FBQztJQUNsRDs7SUFFQSxJQUFJLElBQUksQ0FBQ0EsSUFBSSxLQUFLdmMsS0FBSyxFQUFFO01BQ3ZCLE9BQU8sSUFBSTtJQUNiO0lBRUEsSUFBSStiLEtBQUssR0FBRyxJQUFJLENBQUMzVCxNQUFNLElBQUksSUFBSSxDQUFDcVQsR0FBRyxHQUFHVSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMvVCxNQUFNLENBQUM0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDNlEsTUFBTSxDQUFDLENBQUM7SUFDdEc7SUFDQTtJQUNBOztJQUVBLElBQUksQ0FBQ1UsSUFBSSxHQUFHLENBQUN2YyxLQUFLLElBQUksQ0FBQztJQUN2QixJQUFJLENBQUN5YixHQUFHLEdBQUcsSUFBSSxDQUFDNFQsR0FBRyxJQUFJcnZCLEtBQUssS0FBSyxDQUFDd1UsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMrSCxJQUFJLENBQUMsQ0FBQzs7SUFFNUQsSUFBSSxDQUFDbEIsU0FBUyxDQUFDd0IsTUFBTSxDQUFDLENBQUN4ZSxJQUFJLENBQUMyUSxHQUFHLENBQUMsSUFBSSxDQUFDa08sTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDYixLQUFLLEVBQUVOLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztJQUV2RU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O0lBR2YsT0FBT3BCLGlCQUFpQixDQUFDLElBQUksQ0FBQztFQUNoQyxDQUFDO0VBRUQ4VCxNQUFNLENBQUNNLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDdHZCLEtBQUssRUFBRTtJQUNyQyxJQUFJLENBQUNzUixTQUFTLENBQUN6WCxNQUFNLEVBQUU7TUFDckIsT0FBTyxJQUFJLENBQUN3MUIsR0FBRztJQUNqQjtJQUVBLElBQUksSUFBSSxDQUFDQSxHQUFHLEtBQUtydkIsS0FBSyxFQUFFO01BQ3RCLElBQUksQ0FBQ3F2QixHQUFHLEdBQUdydkIsS0FBSztNQUVoQixJQUFJQSxLQUFLLEVBQUU7UUFDVCxJQUFJLENBQUNvdkIsTUFBTSxHQUFHLElBQUksQ0FBQ3ZULE1BQU0sSUFBSXhkLElBQUksQ0FBQ3FpQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUN4RCxNQUFNLEVBQUUsSUFBSSxDQUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFckUsSUFBSSxDQUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQzVCLENBQUMsTUFBTTtRQUNMd0csS0FBSyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUM1RixHQUFHLEdBQUcsSUFBSSxDQUFDYyxJQUFJLENBQUMsQ0FBQzs7UUFFdEIsSUFBSSxDQUFDbEIsU0FBUyxDQUFDLElBQUksQ0FBQ2pULE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDcVUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2YsTUFBTSxJQUFJLElBQUksQ0FBQ3VULE1BQU0sRUFBRSxJQUFJLENBQUNwSyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTNtQixJQUFJLENBQUMyUSxHQUFHLENBQUMsSUFBSSxDQUFDOE4sTUFBTSxDQUFDLEtBQUt0SSxRQUFRLEtBQUssSUFBSSxDQUFDcUgsTUFBTSxJQUFJckgsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3pNO0lBQ0Y7O0lBRUEsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEd2EsTUFBTSxDQUFDQyxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQ2p2QixLQUFLLEVBQUU7SUFDM0MsSUFBSXNSLFNBQVMsQ0FBQ3pYLE1BQU0sRUFBRTtNQUNwQixJQUFJLENBQUNtaEIsTUFBTSxHQUFHaGIsS0FBSztNQUNuQixJQUFJb0ksTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxJQUFJLElBQUksQ0FBQ3lSLEdBQUc7TUFDcEN6UixNQUFNLEtBQUtBLE1BQU0sQ0FBQ2dWLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQ2hWLE1BQU0sQ0FBQyxJQUFJMlUsY0FBYyxDQUFDM1UsTUFBTSxFQUFFLElBQUksRUFBRXBJLEtBQUssR0FBRyxJQUFJLENBQUNrZCxNQUFNLENBQUM7TUFDN0YsT0FBTyxJQUFJO0lBQ2I7SUFFQSxPQUFPLElBQUksQ0FBQ2xDLE1BQU07RUFDcEIsQ0FBQztFQUVEZ1UsTUFBTSxDQUFDdlAsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUM4UCxjQUFjLEVBQUU7SUFDaEQsT0FBTyxJQUFJLENBQUN2VSxNQUFNLEdBQUcsQ0FBQzlGLFdBQVcsQ0FBQ3FhLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQ3BVLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDL0csUUFBUSxDQUFDLENBQUMsSUFBSS9WLElBQUksQ0FBQzJRLEdBQUcsQ0FBQyxJQUFJLENBQUN5TSxHQUFHLElBQUksQ0FBQyxDQUFDO0VBQ3ZILENBQUM7RUFFRHVULE1BQU0sQ0FBQ3BTLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDNFMsV0FBVyxFQUFFO0lBQzdDLElBQUlwbkIsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxJQUFJLElBQUksQ0FBQ3lSLEdBQUcsQ0FBQyxDQUFDOztJQUV0QyxPQUFPLENBQUN6UixNQUFNLEdBQUcsSUFBSSxDQUFDeVQsTUFBTSxHQUFHMlQsV0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDL1QsR0FBRyxJQUFJLElBQUksQ0FBQ0UsT0FBTyxJQUFJLElBQUksQ0FBQzNRLEtBQUssSUFBSSxJQUFJLENBQUNxVSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3hELE1BQU0sSUFBSSxJQUFJLENBQUM1USxJQUFJLEdBQUcsSUFBSSxDQUFDNlEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLEdBQUcsR0FBRyxJQUFJLENBQUNJLE1BQU0sR0FBR00sdUJBQXVCLENBQUMvVCxNQUFNLENBQUN3VSxPQUFPLENBQUM0UyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDdlAsQ0FBQztFQUVEUixNQUFNLENBQUM5ckIsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUNxakIsTUFBTSxFQUFFO0lBQ3RDLElBQUlBLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFBRTtNQUNyQkEsTUFBTSxHQUFHdFAsYUFBYTtJQUN4QjtJQUVBLElBQUl3WSxlQUFlLEdBQUd4eEIsVUFBVTtJQUNoQ0EsVUFBVSxHQUFHc29CLE1BQU07SUFFbkIsSUFBSSxJQUFJLENBQUMzTixRQUFRLElBQUksSUFBSSxDQUFDQyxRQUFRLEVBQUU7TUFDbEMsSUFBSSxDQUFDOEQsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDelosTUFBTSxDQUFDcWpCLE1BQU0sQ0FBQztNQUM3QyxJQUFJLENBQUNsTCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUVrTCxNQUFNLENBQUN6UCxjQUFjLENBQUM7SUFDOUM7SUFFQSxJQUFJLENBQUMzWCxJQUFJLEtBQUssUUFBUSxJQUFJb25CLE1BQU0sQ0FBQ3hQLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztJQUM5RDlZLFVBQVUsR0FBR3d4QixlQUFlO0lBQzVCLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRFQsTUFBTSxDQUFDVSxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQzlTLE9BQU8sRUFBRTtJQUMvQyxJQUFJbEUsU0FBUyxHQUFHLElBQUk7TUFDaEJuUSxJQUFJLEdBQUcrSSxTQUFTLENBQUN6WCxNQUFNLEdBQUcraUIsT0FBTyxHQUFHbEUsU0FBUyxDQUFDa0UsT0FBTyxDQUFDLENBQUM7SUFFM0QsT0FBT2xFLFNBQVMsRUFBRTtNQUNoQm5RLElBQUksR0FBR21RLFNBQVMsQ0FBQ3NDLE1BQU0sR0FBR3pTLElBQUksSUFBSW1RLFNBQVMsQ0FBQytDLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDckQvQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQ21CLEdBQUc7SUFDM0I7SUFFQSxPQUFPLENBQUMsSUFBSSxDQUFDelIsTUFBTSxJQUFJLElBQUksQ0FBQ3VuQixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUN0ZSxJQUFJLENBQUNpSyxlQUFlLEdBQUcsQ0FBQ3dRLFFBQVEsR0FBRyxJQUFJLENBQUM2RCxJQUFJLENBQUNELFVBQVUsQ0FBQzlTLE9BQU8sQ0FBQyxHQUFHclUsSUFBSSxDQUFDLENBQUM7RUFDeEgsQ0FBQzs7RUFFRHltQixNQUFNLENBQUM3UCxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQ25mLEtBQUssRUFBRTtJQUNyQyxJQUFJc1IsU0FBUyxDQUFDelgsTUFBTSxFQUFFO01BQ3BCLElBQUksQ0FBQzhoQixPQUFPLEdBQUczYixLQUFLLEtBQUs4ckIsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHOXJCLEtBQUs7TUFDOUMsT0FBT3NmLHNCQUFzQixDQUFDLElBQUksQ0FBQztJQUNyQztJQUVBLE9BQU8sSUFBSSxDQUFDM0QsT0FBTyxLQUFLLENBQUMsQ0FBQyxHQUFHbVEsUUFBUSxHQUFHLElBQUksQ0FBQ25RLE9BQU87RUFDdEQsQ0FBQztFQUVEcVQsTUFBTSxDQUFDOVEsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUNsZSxLQUFLLEVBQUU7SUFDL0MsSUFBSXNSLFNBQVMsQ0FBQ3pYLE1BQU0sRUFBRTtNQUNwQixJQUFJME8sSUFBSSxHQUFHLElBQUksQ0FBQ3lDLEtBQUs7TUFDckIsSUFBSSxDQUFDOFEsT0FBTyxHQUFHOWIsS0FBSztNQUVwQnNmLHNCQUFzQixDQUFDLElBQUksQ0FBQztNQUU1QixPQUFPL1csSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUMsR0FBRyxJQUFJO0lBQ3RDO0lBRUEsT0FBTyxJQUFJLENBQUN1VCxPQUFPO0VBQ3JCLENBQUM7RUFFRGtULE1BQU0sQ0FBQ0QsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUMvdUIsS0FBSyxFQUFFO0lBQ2pDLElBQUlzUixTQUFTLENBQUN6WCxNQUFNLEVBQUU7TUFDcEIsSUFBSSxDQUFDd2tCLEtBQUssR0FBR3JlLEtBQUs7TUFDbEIsT0FBTyxJQUFJO0lBQ2I7SUFFQSxPQUFPLElBQUksQ0FBQ3FlLEtBQUs7RUFDbkIsQ0FBQztFQUVEMlEsTUFBTSxDQUFDWSxJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQ3BuQixRQUFRLEVBQUVzTyxjQUFjLEVBQUU7SUFDcEQsT0FBTyxJQUFJLENBQUN1RSxTQUFTLENBQUM0QixjQUFjLENBQUMsSUFBSSxFQUFFelUsUUFBUSxDQUFDLEVBQUUwTSxXQUFXLENBQUM0QixjQUFjLENBQUMsQ0FBQztFQUNwRixDQUFDO0VBRURrWSxNQUFNLENBQUNhLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDQyxZQUFZLEVBQUVoWixjQUFjLEVBQUU7SUFDOUQsT0FBTyxJQUFJLENBQUNpWixJQUFJLENBQUMsQ0FBQyxDQUFDMVUsU0FBUyxDQUFDeVUsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDNVMsTUFBTSxHQUFHLENBQUMsRUFBRWhJLFdBQVcsQ0FBQzRCLGNBQWMsQ0FBQyxDQUFDO0VBQzVGLENBQUM7RUFFRGtZLE1BQU0sQ0FBQ2UsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUNoMkIsSUFBSSxFQUFFK2MsY0FBYyxFQUFFO0lBQ2hEL2MsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUM2MUIsSUFBSSxDQUFDNzFCLElBQUksRUFBRStjLGNBQWMsQ0FBQztJQUMvQyxPQUFPLElBQUksQ0FBQ2taLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUMzQyxDQUFDO0VBRUROLE1BQU0sQ0FBQ2lCLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDbDJCLElBQUksRUFBRStjLGNBQWMsRUFBRTtJQUN0RC9jLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDNjFCLElBQUksQ0FBQzcxQixJQUFJLElBQUksSUFBSSxDQUFDb2hCLGFBQWEsQ0FBQyxDQUFDLEVBQUVyRSxjQUFjLENBQUM7SUFDdkUsT0FBTyxJQUFJLENBQUNrWixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFDMUMsQ0FBQztFQUVETixNQUFNLENBQUNrQixLQUFLLEdBQUcsU0FBU0EsS0FBS0EsQ0FBQ0MsTUFBTSxFQUFFclosY0FBYyxFQUFFO0lBQ3BEcVosTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUNQLElBQUksQ0FBQ08sTUFBTSxFQUFFclosY0FBYyxDQUFDO0lBQ25ELE9BQU8sSUFBSSxDQUFDd1ksTUFBTSxDQUFDLElBQUksQ0FBQztFQUMxQixDQUFDO0VBRUROLE1BQU0sQ0FBQ29CLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7SUFDaEMsT0FBTyxJQUFJLENBQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFDM0IsQ0FBQztFQUVETixNQUFNLENBQUNnQixRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQ2h3QixLQUFLLEVBQUU7SUFDekMsSUFBSXNSLFNBQVMsQ0FBQ3pYLE1BQU0sRUFBRTtNQUNwQixDQUFDLENBQUNtRyxLQUFLLEtBQUssSUFBSSxDQUFDZ3dCLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDN1MsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDWixJQUFJLEtBQUt2YyxLQUFLLEdBQUcsQ0FBQ3dVLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRXRGLE9BQU8sSUFBSTtJQUNiO0lBRUEsT0FBTyxJQUFJLENBQUMrSCxJQUFJLEdBQUcsQ0FBQztFQUN0QixDQUFDO0VBRUR5UyxNQUFNLENBQUN6USxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQSxFQUFHO0lBQ3hDLElBQUksQ0FBQzNGLFFBQVEsR0FBRyxJQUFJLENBQUNpQyxJQUFJLEdBQUcsQ0FBQztJQUM3QixJQUFJLENBQUNpQyxNQUFNLEdBQUcsQ0FBQ3RJLFFBQVE7SUFDdkIsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEd2EsTUFBTSxDQUFDcUIsUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUEsRUFBRztJQUNwQyxJQUFJam9CLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUN5UixHQUFHO01BQ2hDN1EsS0FBSyxHQUFHLElBQUksQ0FBQ2dTLE1BQU07TUFDbkI0QixPQUFPO0lBQ1gsT0FBTyxDQUFDLEVBQUUsQ0FBQ3hVLE1BQU0sSUFBSSxJQUFJLENBQUNxVCxHQUFHLElBQUksSUFBSSxDQUFDN0MsUUFBUSxJQUFJeFEsTUFBTSxDQUFDaW9CLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQ3pULE9BQU8sR0FBR3hVLE1BQU0sQ0FBQ3dVLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSzVULEtBQUssSUFBSTRULE9BQU8sR0FBRyxJQUFJLENBQUM2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUdqTCxRQUFRLENBQUM7RUFDOUosQ0FBQztFQUVEd2EsTUFBTSxDQUFDc0IsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUM5c0IsSUFBSSxFQUFFcWlCLFFBQVEsRUFBRTNGLE1BQU0sRUFBRTtJQUNwRSxJQUFJN08sSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSTtJQUVwQixJQUFJQyxTQUFTLENBQUN6WCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3hCLElBQUksQ0FBQ2dzQixRQUFRLEVBQUU7UUFDYixPQUFPeFUsSUFBSSxDQUFDN04sSUFBSSxDQUFDO01BQ25CLENBQUMsTUFBTTtRQUNMNk4sSUFBSSxDQUFDN04sSUFBSSxDQUFDLEdBQUdxaUIsUUFBUTtRQUNyQjNGLE1BQU0sS0FBSzdPLElBQUksQ0FBQzdOLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRzBjLE1BQU0sQ0FBQztRQUMxQzFjLElBQUksS0FBSyxVQUFVLEtBQUssSUFBSSxDQUFDaWIsU0FBUyxHQUFHb0gsUUFBUSxDQUFDO01BQ3BEO01BRUEsT0FBTyxJQUFJO0lBQ2I7SUFFQSxPQUFPeFUsSUFBSSxDQUFDN04sSUFBSSxDQUFDO0VBQ25CLENBQUM7RUFFRHdyQixNQUFNLENBQUN1QixJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3ZDLElBQUloZCxJQUFJLEdBQUcsSUFBSTtJQUNmLE9BQU8sSUFBSWlkLE9BQU8sQ0FBQyxVQUFVQyxPQUFPLEVBQUU7TUFDcEMsSUFBSXZrQixDQUFDLEdBQUc0SSxXQUFXLENBQUN5YixXQUFXLENBQUMsR0FBR0EsV0FBVyxHQUFHeFgsWUFBWTtRQUN6RDJYLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxDQUFBLEVBQUc7VUFDakMsSUFBSUMsS0FBSyxHQUFHcGQsSUFBSSxDQUFDK2MsSUFBSTtVQUNyQi9jLElBQUksQ0FBQytjLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzs7VUFFbEJ4YixXQUFXLENBQUM1SSxDQUFDLENBQUMsS0FBS0EsQ0FBQyxHQUFHQSxDQUFDLENBQUNxSCxJQUFJLENBQUMsQ0FBQyxLQUFLckgsQ0FBQyxDQUFDb2tCLElBQUksSUFBSXBrQixDQUFDLEtBQUtxSCxJQUFJLENBQUMsS0FBS0EsSUFBSSxDQUFDK2MsSUFBSSxHQUFHSyxLQUFLLENBQUM7VUFDaEZGLE9BQU8sQ0FBQ3ZrQixDQUFDLENBQUM7VUFDVnFILElBQUksQ0FBQytjLElBQUksR0FBR0ssS0FBSztRQUNuQixDQUFDO01BRUQsSUFBSXBkLElBQUksQ0FBQ29GLFFBQVEsSUFBSXBGLElBQUksQ0FBQzZMLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJN0wsSUFBSSxDQUFDaUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDakksSUFBSSxDQUFDcUksTUFBTSxJQUFJckksSUFBSSxDQUFDaUksR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNoR2tWLFFBQVEsQ0FBQyxDQUFDO01BQ1osQ0FBQyxNQUFNO1FBQ0xuZCxJQUFJLENBQUNtTCxLQUFLLEdBQUdnUyxRQUFRO01BQ3ZCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEM0IsTUFBTSxDQUFDalksSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUEsRUFBRztJQUM1Qm1QLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDbEIsQ0FBQztFQUVELE9BQU80SSxTQUFTO0FBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBRUh0eEIsWUFBWSxDQUFDc3hCLFNBQVMsQ0FBQ2piLFNBQVMsRUFBRTtFQUNoQzdJLEtBQUssRUFBRSxDQUFDO0VBQ1JnUSxNQUFNLEVBQUUsQ0FBQztFQUNURCxJQUFJLEVBQUUsQ0FBQztFQUNQYyxNQUFNLEVBQUUsQ0FBQztFQUNUUSxLQUFLLEVBQUUsQ0FBQztFQUNScEIsTUFBTSxFQUFFLENBQUM7RUFDVFUsT0FBTyxFQUFFLENBQUM7RUFDVjBDLEtBQUssRUFBRSxLQUFLO0VBQ1pqVyxNQUFNLEVBQUUsSUFBSTtFQUNad1EsUUFBUSxFQUFFLEtBQUs7RUFDZmtELE9BQU8sRUFBRSxDQUFDO0VBQ1ZMLEdBQUcsRUFBRSxDQUFDO0VBQ041QixHQUFHLEVBQUUsQ0FBQztFQUNOM2EsS0FBSyxFQUFFLENBQUM7RUFDUjRkLE1BQU0sRUFBRSxDQUFDdEksUUFBUTtFQUNqQm1LLEtBQUssRUFBRSxDQUFDO0VBQ1IwUSxHQUFHLEVBQUUsS0FBSztFQUNWOVMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHTyxJQUFJZ0QsUUFBUSxHQUFHLGFBQWEsVUFBVXNSLFVBQVUsRUFBRTtFQUN2RG5kLGNBQWMsQ0FBQzZMLFFBQVEsRUFBRXNSLFVBQVUsQ0FBQztFQUVwQyxTQUFTdFIsUUFBUUEsQ0FBQ2xPLElBQUksRUFBRTdJLFFBQVEsRUFBRTtJQUNoQyxJQUFJbEgsS0FBSztJQUVULElBQUkrUCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDbkJBLElBQUksR0FBRyxDQUFDLENBQUM7SUFDWDtJQUVBL1AsS0FBSyxHQUFHdXZCLFVBQVUsQ0FBQzl1QixJQUFJLENBQUMsSUFBSSxFQUFFc1AsSUFBSSxDQUFDLElBQUksSUFBSTtJQUMzQy9QLEtBQUssQ0FBQ3FlLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakJyZSxLQUFLLENBQUNtYixpQkFBaUIsR0FBRyxDQUFDLENBQUNwTCxJQUFJLENBQUNvTCxpQkFBaUI7SUFDbERuYixLQUFLLENBQUNxWixrQkFBa0IsR0FBRyxDQUFDLENBQUN0SixJQUFJLENBQUNzSixrQkFBa0I7SUFDcERyWixLQUFLLENBQUM4YixLQUFLLEdBQUdsSSxXQUFXLENBQUM3RCxJQUFJLENBQUN5ZixZQUFZLENBQUM7SUFDNUNoYixlQUFlLElBQUlpSCxjQUFjLENBQUMxTCxJQUFJLENBQUNqSixNQUFNLElBQUkwTixlQUFlLEVBQUV2QyxzQkFBc0IsQ0FBQ2pTLEtBQUssQ0FBQyxFQUFFa0gsUUFBUSxDQUFDO0lBQzFHNkksSUFBSSxDQUFDMmUsUUFBUSxJQUFJMXVCLEtBQUssQ0FBQzJ1QixPQUFPLENBQUMsQ0FBQztJQUNoQzVlLElBQUksQ0FBQ2llLE1BQU0sSUFBSWh1QixLQUFLLENBQUNndUIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNqQ2plLElBQUksQ0FBQzhVLGFBQWEsSUFBSTVJLGNBQWMsQ0FBQ2hLLHNCQUFzQixDQUFDalMsS0FBSyxDQUFDLEVBQUUrUCxJQUFJLENBQUM4VSxhQUFhLENBQUM7SUFDdkYsT0FBTzdrQixLQUFLO0VBQ2Q7RUFFQSxJQUFJeXZCLE9BQU8sR0FBR3hSLFFBQVEsQ0FBQzFMLFNBQVM7RUFFaENrZCxPQUFPLENBQUM1MkIsRUFBRSxHQUFHLFNBQVNBLEVBQUVBLENBQUN5WCxPQUFPLEVBQUVQLElBQUksRUFBRTdJLFFBQVEsRUFBRTtJQUNoRHlYLGdCQUFnQixDQUFDLENBQUMsRUFBRTNPLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFFcEMsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEeWYsT0FBTyxDQUFDaDNCLElBQUksR0FBRyxTQUFTQSxJQUFJQSxDQUFDNlgsT0FBTyxFQUFFUCxJQUFJLEVBQUU3SSxRQUFRLEVBQUU7SUFDcER5WCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUzTyxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBRXBDLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRHlmLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUNwZixPQUFPLEVBQUVxZixRQUFRLEVBQUVDLE1BQU0sRUFBRTFvQixRQUFRLEVBQUU7SUFDcEV5WCxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUzTyxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBRXBDLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRHlmLE9BQU8sQ0FBQzN4QixHQUFHLEdBQUcsU0FBU0EsR0FBR0EsQ0FBQ3dTLE9BQU8sRUFBRVAsSUFBSSxFQUFFN0ksUUFBUSxFQUFFO0lBQ2xENkksSUFBSSxDQUFDK0MsUUFBUSxHQUFHLENBQUM7SUFDakIvQyxJQUFJLENBQUNqSixNQUFNLEdBQUcsSUFBSTtJQUNsQnNSLGdCQUFnQixDQUFDckksSUFBSSxDQUFDLENBQUM2TSxXQUFXLEtBQUs3TSxJQUFJLENBQUM4TixNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZEOU4sSUFBSSxDQUFDaUssZUFBZSxHQUFHLENBQUMsQ0FBQ2pLLElBQUksQ0FBQ2lLLGVBQWU7SUFDN0MsSUFBSWlGLEtBQUssQ0FBQzNPLE9BQU8sRUFBRVAsSUFBSSxFQUFFNEwsY0FBYyxDQUFDLElBQUksRUFBRXpVLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRCxPQUFPLElBQUk7RUFDYixDQUFDO0VBRUR1b0IsT0FBTyxDQUFDaHZCLElBQUksR0FBRyxTQUFTQSxJQUFJQSxDQUFDOGpCLFFBQVEsRUFBRTNGLE1BQU0sRUFBRTFYLFFBQVEsRUFBRTtJQUN2RCxPQUFPdVUsY0FBYyxDQUFDLElBQUksRUFBRXdELEtBQUssQ0FBQzRRLFdBQVcsQ0FBQyxDQUFDLEVBQUV0TCxRQUFRLEVBQUUzRixNQUFNLENBQUMsRUFBRTFYLFFBQVEsQ0FBQztFQUMvRSxDQUFDLENBQUM7RUFBQTs7RUFHRnVvQixPQUFPLENBQUNLLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDeGYsT0FBTyxFQUFFd0MsUUFBUSxFQUFFL0MsSUFBSSxFQUFFZ2dCLE9BQU8sRUFBRTdvQixRQUFRLEVBQUU4b0IsYUFBYSxFQUFFQyxtQkFBbUIsRUFBRTtJQUNySGxnQixJQUFJLENBQUMrQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIvQyxJQUFJLENBQUNnZ0IsT0FBTyxHQUFHaGdCLElBQUksQ0FBQ2dnQixPQUFPLElBQUlBLE9BQU87SUFDdENoZ0IsSUFBSSxDQUFDbWdCLFVBQVUsR0FBR0YsYUFBYTtJQUMvQmpnQixJQUFJLENBQUNvZ0IsZ0JBQWdCLEdBQUdGLG1CQUFtQjtJQUMzQ2xnQixJQUFJLENBQUNqSixNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJbVksS0FBSyxDQUFDM08sT0FBTyxFQUFFUCxJQUFJLEVBQUU0TCxjQUFjLENBQUMsSUFBSSxFQUFFelUsUUFBUSxDQUFDLENBQUM7SUFDeEQsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEdW9CLE9BQU8sQ0FBQ1csV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUM5ZixPQUFPLEVBQUV3QyxRQUFRLEVBQUUvQyxJQUFJLEVBQUVnZ0IsT0FBTyxFQUFFN29CLFFBQVEsRUFBRThvQixhQUFhLEVBQUVDLG1CQUFtQixFQUFFO0lBQ3pIbGdCLElBQUksQ0FBQ2lQLFlBQVksR0FBRyxDQUFDO0lBQ3JCNUcsZ0JBQWdCLENBQUNySSxJQUFJLENBQUMsQ0FBQ2lLLGVBQWUsR0FBR3BHLFdBQVcsQ0FBQzdELElBQUksQ0FBQ2lLLGVBQWUsQ0FBQztJQUMxRSxPQUFPLElBQUksQ0FBQzhWLFNBQVMsQ0FBQ3hmLE9BQU8sRUFBRXdDLFFBQVEsRUFBRS9DLElBQUksRUFBRWdnQixPQUFPLEVBQUU3b0IsUUFBUSxFQUFFOG9CLGFBQWEsRUFBRUMsbUJBQW1CLENBQUM7RUFDdkcsQ0FBQztFQUVEUixPQUFPLENBQUNZLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDL2YsT0FBTyxFQUFFd0MsUUFBUSxFQUFFNmMsUUFBUSxFQUFFQyxNQUFNLEVBQUVHLE9BQU8sRUFBRTdvQixRQUFRLEVBQUU4b0IsYUFBYSxFQUFFQyxtQkFBbUIsRUFBRTtJQUN6SUwsTUFBTSxDQUFDcmYsT0FBTyxHQUFHb2YsUUFBUTtJQUN6QnZYLGdCQUFnQixDQUFDd1gsTUFBTSxDQUFDLENBQUM1VixlQUFlLEdBQUdwRyxXQUFXLENBQUNnYyxNQUFNLENBQUM1VixlQUFlLENBQUM7SUFDOUUsT0FBTyxJQUFJLENBQUM4VixTQUFTLENBQUN4ZixPQUFPLEVBQUV3QyxRQUFRLEVBQUU4YyxNQUFNLEVBQUVHLE9BQU8sRUFBRTdvQixRQUFRLEVBQUU4b0IsYUFBYSxFQUFFQyxtQkFBbUIsQ0FBQztFQUN6RyxDQUFDO0VBRURSLE9BQU8sQ0FBQ3BlLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDMEksU0FBUyxFQUFFdkUsY0FBYyxFQUFFNkIsS0FBSyxFQUFFO0lBQ2pFLElBQUlrRyxRQUFRLEdBQUcsSUFBSSxDQUFDN1QsS0FBSztNQUNyQjRtQixJQUFJLEdBQUcsSUFBSSxDQUFDM1csTUFBTSxHQUFHLElBQUksQ0FBQ0UsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNrQixLQUFLO01BQ3REK0MsR0FBRyxHQUFHLElBQUksQ0FBQ25VLElBQUk7TUFDZjhRLEtBQUssR0FBR1YsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUduRCxhQUFhLENBQUNtRCxTQUFTLENBQUM7TUFDckQ7TUFDSndXLGFBQWEsR0FBRyxJQUFJLENBQUMvVSxNQUFNLEdBQUcsQ0FBQyxLQUFLekIsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUN6QyxRQUFRLElBQUksQ0FBQ3dHLEdBQUcsQ0FBQztNQUN4RTdXLElBQUk7TUFDSjJSLEtBQUs7TUFDTE0sSUFBSTtNQUNKMkQsU0FBUztNQUNUbkMsYUFBYTtNQUNiOFYsVUFBVTtNQUNWQyxVQUFVO01BQ1Y1VSxTQUFTO01BQ1Q2VSxTQUFTO01BQ1Q1VCxhQUFhO01BQ2IyUSxJQUFJO01BQ0ovQixNQUFNO0lBQ1YsSUFBSSxLQUFLbFgsZUFBZSxJQUFJaUcsS0FBSyxHQUFHNlYsSUFBSSxJQUFJdlcsU0FBUyxJQUFJLENBQUMsS0FBS1UsS0FBSyxHQUFHNlYsSUFBSSxDQUFDO0lBRTVFLElBQUk3VixLQUFLLEtBQUssSUFBSSxDQUFDRixNQUFNLElBQUlsRCxLQUFLLElBQUlrWixhQUFhLEVBQUU7TUFDbkQsSUFBSWhULFFBQVEsS0FBSyxJQUFJLENBQUM3VCxLQUFLLElBQUlvVSxHQUFHLEVBQUU7UUFDbEM7UUFDQXJELEtBQUssSUFBSSxJQUFJLENBQUMvUSxLQUFLLEdBQUc2VCxRQUFRO1FBQzlCeEQsU0FBUyxJQUFJLElBQUksQ0FBQ3JRLEtBQUssR0FBRzZULFFBQVE7TUFDcEM7TUFFQXRXLElBQUksR0FBR3dULEtBQUs7TUFDWmlXLFNBQVMsR0FBRyxJQUFJLENBQUNoWCxNQUFNO01BQ3ZCbUMsU0FBUyxHQUFHLElBQUksQ0FBQzFCLEdBQUc7TUFDcEJxVyxVQUFVLEdBQUcsQ0FBQzNVLFNBQVM7TUFFdkIsSUFBSTBVLGFBQWEsRUFBRTtRQUNqQnpTLEdBQUcsS0FBS1AsUUFBUSxHQUFHLElBQUksQ0FBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1FBRWpDLENBQUN6QixTQUFTLElBQUksQ0FBQ3ZFLGNBQWMsTUFBTSxJQUFJLENBQUNnRyxNQUFNLEdBQUd6QixTQUFTLENBQUM7TUFDN0Q7TUFFQSxJQUFJLElBQUksQ0FBQ00sT0FBTyxFQUFFO1FBQ2hCO1FBQ0FvVCxJQUFJLEdBQUcsSUFBSSxDQUFDMVEsS0FBSztRQUNqQnJDLGFBQWEsR0FBR29ELEdBQUcsR0FBRyxJQUFJLENBQUN0RCxPQUFPO1FBRWxDLElBQUksSUFBSSxDQUFDSCxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUlOLFNBQVMsR0FBRyxDQUFDLEVBQUU7VUFDdEMsT0FBTyxJQUFJLENBQUNBLFNBQVMsQ0FBQ1csYUFBYSxHQUFHLEdBQUcsR0FBR1gsU0FBUyxFQUFFdkUsY0FBYyxFQUFFNkIsS0FBSyxDQUFDO1FBQy9FO1FBRUFwUSxJQUFJLEdBQUcyUCxhQUFhLENBQUM2RCxLQUFLLEdBQUdDLGFBQWEsQ0FBQyxDQUFDLENBQUM7O1FBRTdDLElBQUlELEtBQUssS0FBSzZWLElBQUksRUFBRTtVQUNsQjtVQUNBelQsU0FBUyxHQUFHLElBQUksQ0FBQ3hDLE9BQU87VUFDeEJwVCxJQUFJLEdBQUc2VyxHQUFHO1FBQ1osQ0FBQyxNQUFNO1VBQ0xqQixTQUFTLEdBQUcsQ0FBQyxFQUFFcEMsS0FBSyxHQUFHQyxhQUFhLENBQUM7VUFFckMsSUFBSW1DLFNBQVMsSUFBSUEsU0FBUyxLQUFLcEMsS0FBSyxHQUFHQyxhQUFhLEVBQUU7WUFDcER6VCxJQUFJLEdBQUc2VyxHQUFHO1lBQ1ZqQixTQUFTLEVBQUU7VUFDYjtVQUVBNVYsSUFBSSxHQUFHNlcsR0FBRyxLQUFLN1csSUFBSSxHQUFHNlcsR0FBRyxDQUFDO1FBQzVCO1FBRUFoQixhQUFhLEdBQUd4QyxlQUFlLENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUVHLGFBQWEsQ0FBQztRQUMzRCxDQUFDNkMsUUFBUSxJQUFJLElBQUksQ0FBQ2hELE1BQU0sSUFBSXVDLGFBQWEsS0FBS0QsU0FBUyxJQUFJLElBQUksQ0FBQ3RDLE1BQU0sR0FBR3VDLGFBQWEsR0FBR3BDLGFBQWEsR0FBRyxJQUFJLENBQUMvUSxJQUFJLElBQUksQ0FBQyxLQUFLbVQsYUFBYSxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDOztRQUV4SixJQUFJNFEsSUFBSSxJQUFJNVEsU0FBUyxHQUFHLENBQUMsRUFBRTtVQUN6QjVWLElBQUksR0FBRzZXLEdBQUcsR0FBRzdXLElBQUk7VUFDakJ5a0IsTUFBTSxHQUFHLENBQUM7UUFDWjtRQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1FBR1EsSUFBSTdPLFNBQVMsS0FBS0MsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDTCxLQUFLLEVBQUU7VUFDOUMsSUFBSWtVLFNBQVMsR0FBR2xELElBQUksSUFBSTNRLGFBQWEsR0FBRyxDQUFDO1lBQ3JDOFQsUUFBUSxHQUFHRCxTQUFTLE1BQU1sRCxJQUFJLElBQUk1USxTQUFTLEdBQUcsQ0FBQyxDQUFDO1VBQ3BEQSxTQUFTLEdBQUdDLGFBQWEsS0FBSzZULFNBQVMsR0FBRyxDQUFDQSxTQUFTLENBQUM7VUFDckRwVCxRQUFRLEdBQUdvVCxTQUFTLEdBQUcsQ0FBQyxHQUFHbFcsS0FBSyxHQUFHcUQsR0FBRyxHQUFHQSxHQUFHLEdBQUdyRCxLQUFLLENBQUMsQ0FBQzs7VUFFdEQsSUFBSSxDQUFDZ0MsS0FBSyxHQUFHLENBQUM7VUFDZCxJQUFJLENBQUNwTCxNQUFNLENBQUNrTSxRQUFRLEtBQUttTyxNQUFNLEdBQUcsQ0FBQyxHQUFHOVUsYUFBYSxDQUFDaUcsU0FBUyxHQUFHbkMsYUFBYSxDQUFDLENBQUMsRUFBRWxGLGNBQWMsRUFBRSxDQUFDc0ksR0FBRyxDQUFDLENBQUNyQixLQUFLLEdBQUcsQ0FBQztVQUNoSCxJQUFJLENBQUNsQyxNQUFNLEdBQUdFLEtBQUssQ0FBQyxDQUFDOztVQUVyQixDQUFDakYsY0FBYyxJQUFJLElBQUksQ0FBQzFPLE1BQU0sSUFBSXNXLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO1VBQzdELElBQUksQ0FBQ3JOLElBQUksQ0FBQ2lOLGFBQWEsSUFBSSxDQUFDME8sTUFBTSxLQUFLLElBQUksQ0FBQ3pPLFVBQVUsQ0FBQyxDQUFDLENBQUNSLEtBQUssR0FBRyxDQUFDLENBQUM7VUFFbkUsSUFBSWMsUUFBUSxJQUFJQSxRQUFRLEtBQUssSUFBSSxDQUFDN1QsS0FBSyxJQUFJOG1CLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQ3JXLEdBQUcsSUFBSSxJQUFJLENBQUNwSyxJQUFJLENBQUM4Z0IsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDL3BCLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ3lTLElBQUksRUFBRTtZQUN2SDtZQUNBLE9BQU8sSUFBSTtVQUNiO1VBRUF1RSxHQUFHLEdBQUcsSUFBSSxDQUFDblUsSUFBSSxDQUFDLENBQUM7O1VBRWpCMm1CLElBQUksR0FBRyxJQUFJLENBQUN2VixLQUFLO1VBRWpCLElBQUk2VixRQUFRLEVBQUU7WUFDWixJQUFJLENBQUNuVSxLQUFLLEdBQUcsQ0FBQztZQUNkYyxRQUFRLEdBQUdvVCxTQUFTLEdBQUc3UyxHQUFHLEdBQUcsQ0FBQyxNQUFNO1lBQ3BDLElBQUksQ0FBQ3pNLE1BQU0sQ0FBQ2tNLFFBQVEsRUFBRSxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDeE4sSUFBSSxDQUFDaU4sYUFBYSxJQUFJLENBQUMwTyxNQUFNLElBQUksSUFBSSxDQUFDek8sVUFBVSxDQUFDLENBQUM7VUFDekQ7VUFFQSxJQUFJLENBQUNSLEtBQUssR0FBRyxDQUFDO1VBRWQsSUFBSSxDQUFDLElBQUksQ0FBQ3RDLEdBQUcsSUFBSSxDQUFDcVcsVUFBVSxFQUFFO1lBQzVCLE9BQU8sSUFBSTtVQUNiLENBQUMsQ0FBQzs7VUFHRi9FLGtCQUFrQixDQUFDLElBQUksRUFBRUMsTUFBTSxDQUFDO1FBQ2xDO01BQ0Y7TUFFQSxJQUFJLElBQUksQ0FBQ29GLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsUUFBUSxJQUFJLElBQUksQ0FBQ3RVLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDdERnVSxVQUFVLEdBQUduVCxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUxRyxhQUFhLENBQUMyRyxRQUFRLENBQUMsRUFBRTNHLGFBQWEsQ0FBQzNQLElBQUksQ0FBQyxDQUFDO1FBRXBGLElBQUl3cEIsVUFBVSxFQUFFO1VBQ2RoVyxLQUFLLElBQUl4VCxJQUFJLElBQUlBLElBQUksR0FBR3dwQixVQUFVLENBQUMvVyxNQUFNLENBQUM7UUFDNUM7TUFDRjtNQUVBLElBQUksQ0FBQ2EsTUFBTSxHQUFHRSxLQUFLO01BQ25CLElBQUksQ0FBQy9RLEtBQUssR0FBR3pDLElBQUk7TUFDakIsSUFBSSxDQUFDc1MsSUFBSSxHQUFHLENBQUNzQyxTQUFTLENBQUMsQ0FBQzs7TUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQ3ZFLFFBQVEsRUFBRTtRQUNsQixJQUFJLENBQUM2RixTQUFTLEdBQUcsSUFBSSxDQUFDcE4sSUFBSSxDQUFDaWhCLFFBQVE7UUFDbkMsSUFBSSxDQUFDMVosUUFBUSxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDa0UsTUFBTSxHQUFHekIsU0FBUztRQUN2QndELFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNoQjs7TUFFQSxJQUFJLENBQUNBLFFBQVEsSUFBSXRXLElBQUksSUFBSSxDQUFDdU8sY0FBYyxJQUFJLENBQUNxSCxTQUFTLEVBQUU7UUFDdERPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDN0MsTUFBTSxLQUFLRSxLQUFLLEVBQUU7VUFDekI7VUFDQSxPQUFPLElBQUk7UUFDYjtNQUNGO01BRUEsSUFBSXhULElBQUksSUFBSXNXLFFBQVEsSUFBSXhELFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDdENuQixLQUFLLEdBQUcsSUFBSSxDQUFDNEUsTUFBTTtRQUVuQixPQUFPNUUsS0FBSyxFQUFFO1VBQ1pNLElBQUksR0FBR04sS0FBSyxDQUFDL1AsS0FBSztVQUVsQixJQUFJLENBQUMrUCxLQUFLLENBQUNXLElBQUksSUFBSXRTLElBQUksSUFBSTJSLEtBQUssQ0FBQ2MsTUFBTSxLQUFLZCxLQUFLLENBQUN1QixHQUFHLElBQUlzVyxVQUFVLEtBQUs3WCxLQUFLLEVBQUU7WUFDN0UsSUFBSUEsS0FBSyxDQUFDOVIsTUFBTSxLQUFLLElBQUksRUFBRTtjQUN6QjtjQUNBLE9BQU8sSUFBSSxDQUFDdUssTUFBTSxDQUFDMEksU0FBUyxFQUFFdkUsY0FBYyxFQUFFNkIsS0FBSyxDQUFDO1lBQ3REO1lBRUF1QixLQUFLLENBQUN2SCxNQUFNLENBQUN1SCxLQUFLLENBQUN1QixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUNsVCxJQUFJLEdBQUcyUixLQUFLLENBQUNjLE1BQU0sSUFBSWQsS0FBSyxDQUFDdUIsR0FBRyxHQUFHLENBQUN2QixLQUFLLENBQUNlLE1BQU0sR0FBR2YsS0FBSyxDQUFDaUIsYUFBYSxDQUFDLENBQUMsR0FBR2pCLEtBQUssQ0FBQ21DLEtBQUssSUFBSSxDQUFDOVQsSUFBSSxHQUFHMlIsS0FBSyxDQUFDYyxNQUFNLElBQUlkLEtBQUssQ0FBQ3VCLEdBQUcsRUFBRTNFLGNBQWMsRUFBRTZCLEtBQUssQ0FBQztZQUVqTCxJQUFJcFEsSUFBSSxLQUFLLElBQUksQ0FBQ3lDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQ3lRLEdBQUcsSUFBSSxDQUFDcVcsVUFBVSxFQUFFO2NBQ25EO2NBQ0FDLFVBQVUsR0FBRyxDQUFDO2NBQ2R2WCxJQUFJLEtBQUt1QixLQUFLLElBQUksSUFBSSxDQUFDZSxNQUFNLEdBQUcsQ0FBQ3RJLFFBQVEsQ0FBQyxDQUFDLENBQUM7O2NBRTVDO1lBQ0Y7VUFDRjtVQUVBMEYsS0FBSyxHQUFHTSxJQUFJO1FBQ2Q7TUFDRixDQUFDLE1BQU07UUFDTE4sS0FBSyxHQUFHLElBQUksQ0FBQzZFLEtBQUs7UUFDbEIsSUFBSXdULFlBQVksR0FBR2xYLFNBQVMsR0FBRyxDQUFDLEdBQUdBLFNBQVMsR0FBRzlTLElBQUksQ0FBQyxDQUFDOztRQUVyRCxPQUFPMlIsS0FBSyxFQUFFO1VBQ1pNLElBQUksR0FBR04sS0FBSyxDQUFDSyxLQUFLO1VBRWxCLElBQUksQ0FBQ0wsS0FBSyxDQUFDVyxJQUFJLElBQUkwWCxZQUFZLElBQUlyWSxLQUFLLENBQUNhLElBQUksS0FBS2IsS0FBSyxDQUFDdUIsR0FBRyxJQUFJc1csVUFBVSxLQUFLN1gsS0FBSyxFQUFFO1lBQ25GLElBQUlBLEtBQUssQ0FBQzlSLE1BQU0sS0FBSyxJQUFJLEVBQUU7Y0FDekI7Y0FDQSxPQUFPLElBQUksQ0FBQ3VLLE1BQU0sQ0FBQzBJLFNBQVMsRUFBRXZFLGNBQWMsRUFBRTZCLEtBQUssQ0FBQztZQUN0RDtZQUVBdUIsS0FBSyxDQUFDdkgsTUFBTSxDQUFDdUgsS0FBSyxDQUFDdUIsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDOFcsWUFBWSxHQUFHclksS0FBSyxDQUFDYyxNQUFNLElBQUlkLEtBQUssQ0FBQ3VCLEdBQUcsR0FBRyxDQUFDdkIsS0FBSyxDQUFDZSxNQUFNLEdBQUdmLEtBQUssQ0FBQ2lCLGFBQWEsQ0FBQyxDQUFDLEdBQUdqQixLQUFLLENBQUNtQyxLQUFLLElBQUksQ0FBQ2tXLFlBQVksR0FBR3JZLEtBQUssQ0FBQ2MsTUFBTSxJQUFJZCxLQUFLLENBQUN1QixHQUFHLEVBQUUzRSxjQUFjLEVBQUU2QixLQUFLLElBQUkxYSxVQUFVLEtBQUtpYyxLQUFLLENBQUN0QixRQUFRLElBQUlzQixLQUFLLENBQUNyQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXZQLElBQUl0USxJQUFJLEtBQUssSUFBSSxDQUFDeUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDeVEsR0FBRyxJQUFJLENBQUNxVyxVQUFVLEVBQUU7Y0FDbkQ7Y0FDQUMsVUFBVSxHQUFHLENBQUM7Y0FDZHZYLElBQUksS0FBS3VCLEtBQUssSUFBSSxJQUFJLENBQUNlLE1BQU0sR0FBR3lWLFlBQVksR0FBRyxDQUFDL2QsUUFBUSxHQUFHQSxRQUFRLENBQUMsQ0FBQyxDQUFDOztjQUV0RTtZQUNGO1VBQ0Y7VUFFQTBGLEtBQUssR0FBR00sSUFBSTtRQUNkO01BQ0Y7TUFFQSxJQUFJdVgsVUFBVSxJQUFJLENBQUNqYixjQUFjLEVBQUU7UUFDakMsSUFBSSxDQUFDb1osS0FBSyxDQUFDLENBQUM7UUFDWjZCLFVBQVUsQ0FBQ3BmLE1BQU0sQ0FBQ3BLLElBQUksSUFBSXNXLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQ3JLLFFBQVEsQ0FBQyxDQUFDc0ksTUFBTSxHQUFHdlUsSUFBSSxJQUFJc1csUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEYsSUFBSSxJQUFJLENBQUNwRCxHQUFHLEVBQUU7VUFDWjtVQUNBLElBQUksQ0FBQ1QsTUFBTSxHQUFHZ1gsU0FBUyxDQUFDLENBQUM7O1VBRXpCMVYsT0FBTyxDQUFDLElBQUksQ0FBQztVQUViLE9BQU8sSUFBSSxDQUFDM0osTUFBTSxDQUFDMEksU0FBUyxFQUFFdkUsY0FBYyxFQUFFNkIsS0FBSyxDQUFDO1FBQ3REO01BQ0Y7TUFFQSxJQUFJLENBQUM4RixTQUFTLElBQUksQ0FBQzNILGNBQWMsSUFBSTRILFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQztNQUN0RSxJQUFJM0MsS0FBSyxLQUFLNlYsSUFBSSxJQUFJLElBQUksQ0FBQy9WLE1BQU0sSUFBSSxJQUFJLENBQUNWLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQ1ksS0FBSyxJQUFJOEMsUUFBUSxFQUFFLElBQUltVCxTQUFTLEtBQUssSUFBSSxDQUFDaFgsTUFBTSxJQUFJM2MsSUFBSSxDQUFDMlEsR0FBRyxDQUFDbU8sU0FBUyxDQUFDLEtBQUs5ZSxJQUFJLENBQUMyUSxHQUFHLENBQUMsSUFBSSxDQUFDeU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQ3NDLEtBQUssRUFBRTtRQUM3SztRQUNBLENBQUMxQyxTQUFTLElBQUksQ0FBQytELEdBQUcsTUFBTXJELEtBQUssS0FBSzZWLElBQUksSUFBSSxJQUFJLENBQUNuVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUNNLEtBQUssSUFBSSxJQUFJLENBQUNOLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSWhCLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVqSCxJQUFJLENBQUMzRCxjQUFjLElBQUksRUFBRXVFLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ3dELFFBQVEsQ0FBQyxLQUFLOUMsS0FBSyxJQUFJOEMsUUFBUSxJQUFJLENBQUMrUyxJQUFJLENBQUMsRUFBRTtVQUNwRmxULFNBQVMsQ0FBQyxJQUFJLEVBQUUzQyxLQUFLLEtBQUs2VixJQUFJLElBQUl2VyxTQUFTLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7VUFFNUYsSUFBSSxDQUFDc0QsS0FBSyxJQUFJLEVBQUU1QyxLQUFLLEdBQUc2VixJQUFJLElBQUksSUFBSSxDQUFDelUsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUN3QixLQUFLLENBQUMsQ0FBQztRQUN2RTtNQUNGO0lBQ0Y7SUFFQSxPQUFPLElBQUk7RUFDYixDQUFDO0VBRURvUyxPQUFPLENBQUMxZSxHQUFHLEdBQUcsU0FBU0EsR0FBR0EsQ0FBQzZILEtBQUssRUFBRTFSLFFBQVEsRUFBRTtJQUMxQyxJQUFJZ3FCLE1BQU0sR0FBRyxJQUFJO0lBRWpCeGQsU0FBUyxDQUFDeE0sUUFBUSxDQUFDLEtBQUtBLFFBQVEsR0FBR3lVLGNBQWMsQ0FBQyxJQUFJLEVBQUV6VSxRQUFRLEVBQUUwUixLQUFLLENBQUMsQ0FBQztJQUV6RSxJQUFJLEVBQUVBLEtBQUssWUFBWTRVLFNBQVMsQ0FBQyxFQUFFO01BQ2pDLElBQUl2WixRQUFRLENBQUMyRSxLQUFLLENBQUMsRUFBRTtRQUNuQkEsS0FBSyxDQUFDeFksT0FBTyxDQUFDLFVBQVVpVixHQUFHLEVBQUU7VUFDM0IsT0FBTzZiLE1BQU0sQ0FBQ25nQixHQUFHLENBQUNzRSxHQUFHLEVBQUVuTyxRQUFRLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJO01BQ2I7TUFFQSxJQUFJcE0sU0FBUyxDQUFDOGQsS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUN1WSxRQUFRLENBQUN2WSxLQUFLLEVBQUUxUixRQUFRLENBQUM7TUFDdkM7TUFFQSxJQUFJdU0sV0FBVyxDQUFDbUYsS0FBSyxDQUFDLEVBQUU7UUFDdEJBLEtBQUssR0FBR3FHLEtBQUssQ0FBQzRRLFdBQVcsQ0FBQyxDQUFDLEVBQUVqWCxLQUFLLENBQUM7TUFDckMsQ0FBQyxNQUFNO1FBQ0wsT0FBTyxJQUFJO01BQ2I7SUFDRjtJQUVBLE9BQU8sSUFBSSxLQUFLQSxLQUFLLEdBQUc2QyxjQUFjLENBQUMsSUFBSSxFQUFFN0MsS0FBSyxFQUFFMVIsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7RUFDeEUsQ0FBQzs7RUFFRHVvQixPQUFPLENBQUMyQixXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQzlGLE1BQU0sRUFBRStGLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRTtJQUN0RixJQUFJakcsTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3JCQSxNQUFNLEdBQUcsSUFBSTtJQUNmO0lBRUEsSUFBSStGLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFBRTtNQUNyQkEsTUFBTSxHQUFHLElBQUk7SUFDZjtJQUVBLElBQUlDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUN4QkEsU0FBUyxHQUFHLElBQUk7SUFDbEI7SUFFQSxJQUFJQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUMvQkEsZ0JBQWdCLEdBQUcsQ0FBQ24wQixPQUFPO0lBQzdCO0lBRUEsSUFBSWlELENBQUMsR0FBRyxFQUFFO01BQ051WSxLQUFLLEdBQUcsSUFBSSxDQUFDNEUsTUFBTTtJQUV2QixPQUFPNUUsS0FBSyxFQUFFO01BQ1osSUFBSUEsS0FBSyxDQUFDYyxNQUFNLElBQUk2WCxnQkFBZ0IsRUFBRTtRQUNwQyxJQUFJM1ksS0FBSyxZQUFZcUcsS0FBSyxFQUFFO1VBQzFCb1MsTUFBTSxJQUFJaHhCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDK1gsS0FBSyxDQUFDO1FBQ3pCLENBQUMsTUFBTTtVQUNMMFksU0FBUyxJQUFJanhCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDK1gsS0FBSyxDQUFDO1VBQzFCMFMsTUFBTSxJQUFJanJCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDaWYsS0FBSyxDQUFDemYsQ0FBQyxFQUFFdVksS0FBSyxDQUFDd1ksV0FBVyxDQUFDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLENBQUMsQ0FBQztRQUN2RTtNQUNGO01BRUExWSxLQUFLLEdBQUdBLEtBQUssQ0FBQy9QLEtBQUs7SUFDckI7SUFFQSxPQUFPeEksQ0FBQztFQUNWLENBQUM7RUFFRG92QixPQUFPLENBQUMrQixPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQzc1QixFQUFFLEVBQUU7SUFDckMsSUFBSTg1QixVQUFVLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDdENsd0IsQ0FBQyxHQUFHdXdCLFVBQVUsQ0FBQ2w1QixNQUFNO0lBRXpCLE9BQU8ySSxDQUFDLEVBQUUsRUFBRTtNQUNWLElBQUl1d0IsVUFBVSxDQUFDdndCLENBQUMsQ0FBQyxDQUFDNk8sSUFBSSxDQUFDcFksRUFBRSxLQUFLQSxFQUFFLEVBQUU7UUFDaEMsT0FBTzg1QixVQUFVLENBQUN2d0IsQ0FBQyxDQUFDO01BQ3RCO0lBQ0Y7RUFDRixDQUFDO0VBRUR1dUIsT0FBTyxDQUFDblcsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUNWLEtBQUssRUFBRTtJQUN0QyxJQUFJOWQsU0FBUyxDQUFDOGQsS0FBSyxDQUFDLEVBQUU7TUFDcEIsT0FBTyxJQUFJLENBQUM4WSxXQUFXLENBQUM5WSxLQUFLLENBQUM7SUFDaEM7SUFFQSxJQUFJbkYsV0FBVyxDQUFDbUYsS0FBSyxDQUFDLEVBQUU7TUFDdEIsT0FBTyxJQUFJLENBQUMrWSxZQUFZLENBQUMvWSxLQUFLLENBQUM7SUFDakM7SUFFQXpjLHFCQUFxQixDQUFDLElBQUksRUFBRXljLEtBQUssQ0FBQztJQUVsQyxJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDb0QsT0FBTyxFQUFFO01BQzFCLElBQUksQ0FBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQ3lCLEtBQUs7SUFDM0I7SUFFQSxPQUFPakUsUUFBUSxDQUFDLElBQUksQ0FBQztFQUN2QixDQUFDO0VBRURpVyxPQUFPLENBQUMxVixTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQzZYLFdBQVcsRUFBRXBjLGNBQWMsRUFBRTtJQUNsRSxJQUFJLENBQUN4RixTQUFTLENBQUN6WCxNQUFNLEVBQUU7TUFDckIsT0FBTyxJQUFJLENBQUNnaUIsTUFBTTtJQUNwQjtJQUVBLElBQUksQ0FBQ3dXLFFBQVEsR0FBRyxDQUFDO0lBRWpCLElBQUksQ0FBQyxJQUFJLENBQUN4WSxHQUFHLElBQUksSUFBSSxDQUFDNEIsR0FBRyxFQUFFO01BQ3pCO01BQ0EsSUFBSSxDQUFDVCxNQUFNLEdBQUc5QyxhQUFhLENBQUNqYixPQUFPLENBQUNzTCxJQUFJLElBQUksSUFBSSxDQUFDa1QsR0FBRyxHQUFHLENBQUMsR0FBR3lYLFdBQVcsR0FBRyxJQUFJLENBQUN6WCxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUNOLGFBQWEsQ0FBQyxDQUFDLEdBQUcrWCxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUN6WCxHQUFHLENBQUMsQ0FBQztJQUN4STtJQUVBb1YsVUFBVSxDQUFDaGQsU0FBUyxDQUFDd0gsU0FBUyxDQUFDdFosSUFBSSxDQUFDLElBQUksRUFBRW14QixXQUFXLEVBQUVwYyxjQUFjLENBQUM7SUFFdEUsSUFBSSxDQUFDdWIsUUFBUSxHQUFHLENBQUM7SUFDakIsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEdEIsT0FBTyxDQUFDMEIsUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUM5TSxLQUFLLEVBQUVuZCxRQUFRLEVBQUU7SUFDcEQsSUFBSSxDQUFDbVgsTUFBTSxDQUFDZ0csS0FBSyxDQUFDLEdBQUcxSSxjQUFjLENBQUMsSUFBSSxFQUFFelUsUUFBUSxDQUFDO0lBQ25ELE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRHVvQixPQUFPLENBQUNpQyxXQUFXLEdBQUcsU0FBU0EsV0FBV0EsQ0FBQ3JOLEtBQUssRUFBRTtJQUNoRCxPQUFPLElBQUksQ0FBQ2hHLE1BQU0sQ0FBQ2dHLEtBQUssQ0FBQztJQUN6QixPQUFPLElBQUk7RUFDYixDQUFDO0VBRURvTCxPQUFPLENBQUNvQyxRQUFRLEdBQUcsU0FBU0EsUUFBUUEsQ0FBQzNxQixRQUFRLEVBQUVxZCxRQUFRLEVBQUUzRixNQUFNLEVBQUU7SUFDL0QsSUFBSTdnQixDQUFDLEdBQUdraEIsS0FBSyxDQUFDNFEsV0FBVyxDQUFDLENBQUMsRUFBRXRMLFFBQVEsSUFBSWpQLFVBQVUsRUFBRXNKLE1BQU0sQ0FBQztJQUM1RDdnQixDQUFDLENBQUNGLElBQUksR0FBRyxTQUFTO0lBQ2xCLElBQUksQ0FBQ2l6QixTQUFTLEdBQUcsQ0FBQztJQUNsQixPQUFPclYsY0FBYyxDQUFDLElBQUksRUFBRTFkLENBQUMsRUFBRTRkLGNBQWMsQ0FBQyxJQUFJLEVBQUV6VSxRQUFRLENBQUMsQ0FBQztFQUNoRSxDQUFDO0VBRUR1b0IsT0FBTyxDQUFDcUMsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUM1cUIsUUFBUSxFQUFFO0lBQ25ELElBQUkwUixLQUFLLEdBQUcsSUFBSSxDQUFDNEUsTUFBTTtJQUN2QnRXLFFBQVEsR0FBR3lVLGNBQWMsQ0FBQyxJQUFJLEVBQUV6VSxRQUFRLENBQUM7SUFFekMsT0FBTzBSLEtBQUssRUFBRTtNQUNaLElBQUlBLEtBQUssQ0FBQ2MsTUFBTSxLQUFLeFMsUUFBUSxJQUFJMFIsS0FBSyxDQUFDL2EsSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUN6RHNiLGlCQUFpQixDQUFDUCxLQUFLLENBQUM7TUFDMUI7TUFFQUEsS0FBSyxHQUFHQSxLQUFLLENBQUMvUCxLQUFLO0lBQ3JCO0VBQ0YsQ0FBQztFQUVENG1CLE9BQU8sQ0FBQ2tDLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDcmhCLE9BQU8sRUFBRTVQLEtBQUssRUFBRXF4QixVQUFVLEVBQUU7SUFDdkUsSUFBSVYsTUFBTSxHQUFHLElBQUksQ0FBQ1csV0FBVyxDQUFDMWhCLE9BQU8sRUFBRXloQixVQUFVLENBQUM7TUFDOUM3d0IsQ0FBQyxHQUFHbXdCLE1BQU0sQ0FBQzk0QixNQUFNO0lBRXJCLE9BQU8ySSxDQUFDLEVBQUUsRUFBRTtNQUNWK3dCLGlCQUFpQixLQUFLWixNQUFNLENBQUNud0IsQ0FBQyxDQUFDLElBQUltd0IsTUFBTSxDQUFDbndCLENBQUMsQ0FBQyxDQUFDdVUsSUFBSSxDQUFDbkYsT0FBTyxFQUFFNVAsS0FBSyxDQUFDO0lBQ25FO0lBRUEsT0FBTyxJQUFJO0VBQ2IsQ0FBQztFQUVEK3VCLE9BQU8sQ0FBQ3VDLFdBQVcsR0FBRyxTQUFTQSxXQUFXQSxDQUFDMWhCLE9BQU8sRUFBRXloQixVQUFVLEVBQUU7SUFDOUQsSUFBSTF4QixDQUFDLEdBQUcsRUFBRTtNQUNONnhCLGFBQWEsR0FBRzFiLE9BQU8sQ0FBQ2xHLE9BQU8sQ0FBQztNQUNoQ3NJLEtBQUssR0FBRyxJQUFJLENBQUM0RSxNQUFNO01BQ25CMlUsWUFBWSxHQUFHemUsU0FBUyxDQUFDcWUsVUFBVSxDQUFDO01BQ3BDO01BQ0pLLFFBQVE7SUFFUixPQUFPeFosS0FBSyxFQUFFO01BQ1osSUFBSUEsS0FBSyxZQUFZcUcsS0FBSyxFQUFFO1FBQzFCLElBQUluSSxpQkFBaUIsQ0FBQzhCLEtBQUssQ0FBQ3laLFFBQVEsRUFBRUgsYUFBYSxDQUFDLEtBQUtDLFlBQVksR0FBRyxDQUFDLENBQUNGLGlCQUFpQixJQUFJclosS0FBSyxDQUFDdEIsUUFBUSxJQUFJc0IsS0FBSyxDQUFDdUIsR0FBRyxLQUFLdkIsS0FBSyxDQUFDd1YsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJMkQsVUFBVSxJQUFJblosS0FBSyxDQUFDd1YsVUFBVSxDQUFDeFYsS0FBSyxDQUFDaUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHa1ksVUFBVSxHQUFHLENBQUNBLFVBQVUsSUFBSW5aLEtBQUssQ0FBQ21XLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUMzUDtVQUNBMXVCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDK1gsS0FBSyxDQUFDO1FBQ2Y7TUFDRixDQUFDLE1BQU0sSUFBSSxDQUFDd1osUUFBUSxHQUFHeFosS0FBSyxDQUFDb1osV0FBVyxDQUFDRSxhQUFhLEVBQUVILFVBQVUsQ0FBQyxFQUFFeDVCLE1BQU0sRUFBRTtRQUMzRThILENBQUMsQ0FBQ1EsSUFBSSxDQUFDaWYsS0FBSyxDQUFDemYsQ0FBQyxFQUFFK3hCLFFBQVEsQ0FBQztNQUMzQjtNQUVBeFosS0FBSyxHQUFHQSxLQUFLLENBQUMvUCxLQUFLO0lBQ3JCO0lBRUEsT0FBT3hJLENBQUM7RUFDVixDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQUE7O0VBR0FvdkIsT0FBTyxDQUFDNkMsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLENBQUNwckIsUUFBUSxFQUFFNkksSUFBSSxFQUFFO0lBQ2pEQSxJQUFJLEdBQUdBLElBQUksSUFBSSxDQUFDLENBQUM7SUFFakIsSUFBSXdpQixFQUFFLEdBQUcsSUFBSTtNQUNUcFUsT0FBTyxHQUFHeEMsY0FBYyxDQUFDNFcsRUFBRSxFQUFFcnJCLFFBQVEsQ0FBQztNQUN0Q3NyQixLQUFLLEdBQUd6aUIsSUFBSTtNQUNaUSxPQUFPLEdBQUdpaUIsS0FBSyxDQUFDamlCLE9BQU87TUFDdkJraUIsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE9BQU87TUFDeEJDLGFBQWEsR0FBR0gsS0FBSyxDQUFDRyxhQUFhO01BQ25DM1ksZUFBZSxHQUFHd1ksS0FBSyxDQUFDeFksZUFBZTtNQUN2QzRZLE9BQU87TUFDUG5wQixLQUFLLEdBQUd3VixLQUFLLENBQUNwbUIsRUFBRSxDQUFDMDVCLEVBQUUsRUFBRXIyQixZQUFZLENBQUM7UUFDcENxa0IsSUFBSSxFQUFFeFEsSUFBSSxDQUFDd1EsSUFBSSxJQUFJLE1BQU07UUFDekJqRSxJQUFJLEVBQUUsS0FBSztRQUNYdEMsZUFBZSxFQUFFLEtBQUs7UUFDdEIvUyxJQUFJLEVBQUVrWCxPQUFPO1FBQ2JwTCxTQUFTLEVBQUUsTUFBTTtRQUNqQkQsUUFBUSxFQUFFL0MsSUFBSSxDQUFDK0MsUUFBUSxJQUFJL1YsSUFBSSxDQUFDMlEsR0FBRyxDQUFDLENBQUN5USxPQUFPLElBQUk1TixPQUFPLElBQUksTUFBTSxJQUFJQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3RKLElBQUksR0FBR3NyQixFQUFFLENBQUM3b0IsS0FBSyxDQUFDLElBQUk2b0IsRUFBRSxDQUFDMVcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJM0ksUUFBUTtRQUN0SXdmLE9BQU8sRUFBRSxTQUFTQSxPQUFPQSxDQUFBLEVBQUc7VUFDMUJILEVBQUUsQ0FBQzNELEtBQUssQ0FBQyxDQUFDO1VBRVYsSUFBSSxDQUFDZ0UsT0FBTyxFQUFFO1lBQ1osSUFBSTlmLFFBQVEsR0FBRy9DLElBQUksQ0FBQytDLFFBQVEsSUFBSS9WLElBQUksQ0FBQzJRLEdBQUcsQ0FBQyxDQUFDeVEsT0FBTyxJQUFJNU4sT0FBTyxJQUFJLE1BQU0sSUFBSUEsT0FBTyxHQUFHQSxPQUFPLENBQUN0SixJQUFJLEdBQUdzckIsRUFBRSxDQUFDN29CLEtBQUssQ0FBQyxJQUFJNm9CLEVBQUUsQ0FBQzFXLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0hwUyxLQUFLLENBQUNFLElBQUksS0FBS21KLFFBQVEsSUFBSTRLLFlBQVksQ0FBQ2pVLEtBQUssRUFBRXFKLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUN6QixNQUFNLENBQUM1SCxLQUFLLENBQUNDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzlGa3BCLE9BQU8sR0FBRyxDQUFDO1VBQ2I7VUFFQUgsUUFBUSxJQUFJQSxRQUFRLENBQUMzUyxLQUFLLENBQUNyVyxLQUFLLEVBQUVrcEIsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQ7TUFDRixDQUFDLEVBQUU1aUIsSUFBSSxDQUFDLENBQUM7SUFFVCxPQUFPaUssZUFBZSxHQUFHdlEsS0FBSyxDQUFDNEgsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHNUgsS0FBSztFQUNsRCxDQUFDO0VBRURnbUIsT0FBTyxDQUFDb0QsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUNDLFlBQVksRUFBRUMsVUFBVSxFQUFFaGpCLElBQUksRUFBRTtJQUN6RSxPQUFPLElBQUksQ0FBQ3VpQixPQUFPLENBQUNTLFVBQVUsRUFBRTcyQixZQUFZLENBQUM7TUFDM0NxVSxPQUFPLEVBQUU7UUFDUHRKLElBQUksRUFBRTBVLGNBQWMsQ0FBQyxJQUFJLEVBQUVtWCxZQUFZO01BQ3pDO0lBQ0YsQ0FBQyxFQUFFL2lCLElBQUksQ0FBQyxDQUFDO0VBQ1gsQ0FBQztFQUVEMGYsT0FBTyxDQUFDblIsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztJQUNqQyxPQUFPLElBQUksQ0FBQ3RDLE9BQU87RUFDckIsQ0FBQztFQUVEeVQsT0FBTyxDQUFDdUQsU0FBUyxHQUFHLFNBQVNBLFNBQVNBLENBQUNDLFNBQVMsRUFBRTtJQUNoRCxJQUFJQSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDeEJBLFNBQVMsR0FBRyxJQUFJLENBQUN2cEIsS0FBSztJQUN4QjtJQUVBLE9BQU91YSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUV0SSxjQUFjLENBQUMsSUFBSSxFQUFFc1gsU0FBUyxDQUFDLENBQUM7RUFDcEUsQ0FBQztFQUVEeEQsT0FBTyxDQUFDeUQsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLENBQUNDLFVBQVUsRUFBRTtJQUN6RCxJQUFJQSxVQUFVLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDekJBLFVBQVUsR0FBRyxJQUFJLENBQUN6cEIsS0FBSztJQUN6QjtJQUVBLE9BQU91YSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUV0SSxjQUFjLENBQUMsSUFBSSxFQUFFd1gsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3hFLENBQUM7RUFFRDFELE9BQU8sQ0FBQzJELFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDMTBCLEtBQUssRUFBRTtJQUNsRCxPQUFPc1IsU0FBUyxDQUFDelgsTUFBTSxHQUFHLElBQUksQ0FBQysxQixJQUFJLENBQUM1dkIsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQ3cwQixhQUFhLENBQUMsSUFBSSxDQUFDeHBCLEtBQUssR0FBR3dKLFFBQVEsQ0FBQztFQUM5RixDQUFDO0VBRUR1YyxPQUFPLENBQUM0RCxhQUFhLEdBQUcsU0FBU0EsYUFBYUEsQ0FBQzNzQixNQUFNLEVBQUU0c0IsWUFBWSxFQUFFL0IsZ0JBQWdCLEVBQUU7SUFDckYsSUFBSUEsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDL0JBLGdCQUFnQixHQUFHLENBQUM7SUFDdEI7SUFFQSxJQUFJM1ksS0FBSyxHQUFHLElBQUksQ0FBQzRFLE1BQU07TUFDbkJhLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU07TUFDcEJyZ0IsQ0FBQztJQUVMLE9BQU80YSxLQUFLLEVBQUU7TUFDWixJQUFJQSxLQUFLLENBQUNjLE1BQU0sSUFBSTZYLGdCQUFnQixFQUFFO1FBQ3BDM1ksS0FBSyxDQUFDYyxNQUFNLElBQUloVCxNQUFNO1FBQ3RCa1MsS0FBSyxDQUFDYSxJQUFJLElBQUkvUyxNQUFNO01BQ3RCO01BRUFrUyxLQUFLLEdBQUdBLEtBQUssQ0FBQy9QLEtBQUs7SUFDckI7SUFFQSxJQUFJeXFCLFlBQVksRUFBRTtNQUNoQixLQUFLdDFCLENBQUMsSUFBSXFnQixNQUFNLEVBQUU7UUFDaEIsSUFBSUEsTUFBTSxDQUFDcmdCLENBQUMsQ0FBQyxJQUFJdXpCLGdCQUFnQixFQUFFO1VBQ2pDbFQsTUFBTSxDQUFDcmdCLENBQUMsQ0FBQyxJQUFJMEksTUFBTTtRQUNyQjtNQUNGO0lBQ0Y7SUFFQSxPQUFPOFMsUUFBUSxDQUFDLElBQUksQ0FBQztFQUN2QixDQUFDO0VBRURpVyxPQUFPLENBQUN4UyxVQUFVLEdBQUcsU0FBU0EsVUFBVUEsQ0FBQ3NXLElBQUksRUFBRTtJQUM3QyxJQUFJM2EsS0FBSyxHQUFHLElBQUksQ0FBQzRFLE1BQU07SUFDdkIsSUFBSSxDQUFDZixLQUFLLEdBQUcsQ0FBQztJQUVkLE9BQU83RCxLQUFLLEVBQUU7TUFDWkEsS0FBSyxDQUFDcUUsVUFBVSxDQUFDc1csSUFBSSxDQUFDO01BQ3RCM2EsS0FBSyxHQUFHQSxLQUFLLENBQUMvUCxLQUFLO0lBQ3JCO0lBRUEsT0FBTzBtQixVQUFVLENBQUNoZCxTQUFTLENBQUMwSyxVQUFVLENBQUN4YyxJQUFJLENBQUMsSUFBSSxFQUFFOHlCLElBQUksQ0FBQztFQUN6RCxDQUFDO0VBRUQ5RCxPQUFPLENBQUMrRCxLQUFLLEdBQUcsU0FBU0EsS0FBS0EsQ0FBQ0MsYUFBYSxFQUFFO0lBQzVDLElBQUlBLGFBQWEsS0FBSyxLQUFLLENBQUMsRUFBRTtNQUM1QkEsYUFBYSxHQUFHLElBQUk7SUFDdEI7SUFFQSxJQUFJN2EsS0FBSyxHQUFHLElBQUksQ0FBQzRFLE1BQU07TUFDbkJ0RSxJQUFJO0lBRVIsT0FBT04sS0FBSyxFQUFFO01BQ1pNLElBQUksR0FBR04sS0FBSyxDQUFDL1AsS0FBSztNQUNsQixJQUFJLENBQUN5USxNQUFNLENBQUNWLEtBQUssQ0FBQztNQUNsQkEsS0FBSyxHQUFHTSxJQUFJO0lBQ2Q7SUFFQSxJQUFJLENBQUNYLEdBQUcsS0FBSyxJQUFJLENBQUM3TyxLQUFLLEdBQUcsSUFBSSxDQUFDNlEsTUFBTSxHQUFHLElBQUksQ0FBQ3VULE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEQyRixhQUFhLEtBQUssSUFBSSxDQUFDcFYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLE9BQU83RSxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQ3ZCLENBQUM7RUFFRGlXLE9BQU8sQ0FBQzVWLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDbmIsS0FBSyxFQUFFO0lBQ3BELElBQUkwZ0IsR0FBRyxHQUFHLENBQUM7TUFDUGxOLElBQUksR0FBRyxJQUFJO01BQ1gwRyxLQUFLLEdBQUcxRyxJQUFJLENBQUN1TCxLQUFLO01BQ2xCaVQsU0FBUyxHQUFHdHpCLE9BQU87TUFDbkI0YixJQUFJO01BQ0p0UixLQUFLO01BQ0xaLE1BQU07SUFFVixJQUFJa0osU0FBUyxDQUFDelgsTUFBTSxFQUFFO01BQ3BCLE9BQU8yWixJQUFJLENBQUMySixTQUFTLENBQUMsQ0FBQzNKLElBQUksQ0FBQ21JLE9BQU8sR0FBRyxDQUFDLEdBQUduSSxJQUFJLENBQUNZLFFBQVEsQ0FBQyxDQUFDLEdBQUdaLElBQUksQ0FBQzJILGFBQWEsQ0FBQyxDQUFDLEtBQUszSCxJQUFJLENBQUN3YyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUNod0IsS0FBSyxHQUFHQSxLQUFLLENBQUMsQ0FBQztJQUN6SDtJQUVBLElBQUl3VCxJQUFJLENBQUN5SCxNQUFNLEVBQUU7TUFDZjdTLE1BQU0sR0FBR29MLElBQUksQ0FBQ3BMLE1BQU07TUFFcEIsT0FBTzhSLEtBQUssRUFBRTtRQUNaSSxJQUFJLEdBQUdKLEtBQUssQ0FBQ0ssS0FBSyxDQUFDLENBQUM7O1FBRXBCTCxLQUFLLENBQUNlLE1BQU0sSUFBSWYsS0FBSyxDQUFDaUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUV2Q25TLEtBQUssR0FBR2tSLEtBQUssQ0FBQ2MsTUFBTTtRQUVwQixJQUFJaFMsS0FBSyxHQUFHZ3BCLFNBQVMsSUFBSXhlLElBQUksQ0FBQzRKLEtBQUssSUFBSWxELEtBQUssQ0FBQ3VCLEdBQUcsSUFBSSxDQUFDakksSUFBSSxDQUFDdUssS0FBSyxFQUFFO1VBQy9EO1VBQ0F2SyxJQUFJLENBQUN1SyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1VBRWhCaEIsY0FBYyxDQUFDdkosSUFBSSxFQUFFMEcsS0FBSyxFQUFFbFIsS0FBSyxHQUFHa1IsS0FBSyxDQUFDZ0QsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDYSxLQUFLLEdBQUcsQ0FBQztRQUNoRSxDQUFDLE1BQU07VUFDTGlVLFNBQVMsR0FBR2hwQixLQUFLO1FBQ25CO1FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQUMsSUFBSWtSLEtBQUssQ0FBQ3VCLEdBQUcsRUFBRTtVQUMxQjtVQUNBaUYsR0FBRyxJQUFJMVgsS0FBSztVQUVaLElBQUksQ0FBQ1osTUFBTSxJQUFJLENBQUNvTCxJQUFJLENBQUNxRyxHQUFHLElBQUl6UixNQUFNLElBQUlBLE1BQU0sQ0FBQ3FVLGlCQUFpQixFQUFFO1lBQzlEakosSUFBSSxDQUFDd0gsTUFBTSxJQUFJaFMsS0FBSyxHQUFHd0ssSUFBSSxDQUFDaUksR0FBRztZQUMvQmpJLElBQUksQ0FBQ3hJLEtBQUssSUFBSWhDLEtBQUs7WUFDbkJ3SyxJQUFJLENBQUNxSSxNQUFNLElBQUk3UyxLQUFLO1VBQ3RCO1VBRUF3SyxJQUFJLENBQUNtaEIsYUFBYSxDQUFDLENBQUMzckIsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztVQUN6Q2dwQixTQUFTLEdBQUcsQ0FBQztRQUNmO1FBRUE5WCxLQUFLLENBQUNhLElBQUksR0FBRzJGLEdBQUcsSUFBSXhHLEtBQUssQ0FBQ3VCLEdBQUcsS0FBS2lGLEdBQUcsR0FBR3hHLEtBQUssQ0FBQ2EsSUFBSSxDQUFDO1FBQ25EYixLQUFLLEdBQUdJLElBQUk7TUFDZDtNQUVBMEUsWUFBWSxDQUFDeEwsSUFBSSxFQUFFQSxJQUFJLEtBQUtzQyxlQUFlLElBQUl0QyxJQUFJLENBQUN4SSxLQUFLLEdBQUcwVixHQUFHLEdBQUdsTixJQUFJLENBQUN4SSxLQUFLLEdBQUcwVixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUV6RmxOLElBQUksQ0FBQ3lILE1BQU0sR0FBRyxDQUFDO0lBQ2pCO0lBRUEsT0FBT3pILElBQUksQ0FBQzZJLEtBQUs7RUFDbkIsQ0FBQztFQUVEa0QsUUFBUSxDQUFDeVYsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUN6c0IsSUFBSSxFQUFFO0lBQzlDLElBQUl1TixlQUFlLENBQUMyRixHQUFHLEVBQUU7TUFDdkJoRCxlQUFlLENBQUMzQyxlQUFlLEVBQUVxRyx1QkFBdUIsQ0FBQzVULElBQUksRUFBRXVOLGVBQWUsQ0FBQyxDQUFDO01BRWhGdUIsa0JBQWtCLEdBQUdwYSxPQUFPLENBQUM0Z0IsS0FBSztJQUNwQztJQUVBLElBQUk1Z0IsT0FBTyxDQUFDNGdCLEtBQUssSUFBSXRHLFlBQVksRUFBRTtNQUNqQ0EsWUFBWSxJQUFJdmEsT0FBTyxDQUFDZ1gsU0FBUyxJQUFJLEdBQUc7TUFDeEMsSUFBSWtHLEtBQUssR0FBR3BFLGVBQWUsQ0FBQ2dKLE1BQU07TUFDbEMsSUFBSSxDQUFDNUUsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ3VCLEdBQUcsRUFBRSxJQUFJemUsT0FBTyxDQUFDZ1gsU0FBUyxJQUFJL1csT0FBTyxDQUFDa3RCLFVBQVUsQ0FBQ3R3QixNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2hGLE9BQU9xZ0IsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ3VCLEdBQUcsRUFBRTtVQUMxQnZCLEtBQUssR0FBR0EsS0FBSyxDQUFDL1AsS0FBSztRQUNyQjtRQUVBK1AsS0FBSyxJQUFJamQsT0FBTyxDQUFDc3VCLEtBQUssQ0FBQyxDQUFDO01BQzFCO0lBQ0Y7RUFDRixDQUFDO0VBRUQsT0FBT2hNLFFBQVE7QUFDakIsQ0FBQyxDQUFDdVAsU0FBUyxDQUFDO0FBRVp0eEIsWUFBWSxDQUFDK2hCLFFBQVEsQ0FBQzFMLFNBQVMsRUFBRTtFQUMvQmtLLEtBQUssRUFBRSxDQUFDO0VBQ1JxVSxTQUFTLEVBQUUsQ0FBQztFQUNaQyxRQUFRLEVBQUU7QUFDWixDQUFDLENBQUM7QUFFRixJQUFJNEMsMEJBQTBCLEdBQUcsU0FBU0EsMEJBQTBCQSxDQUFDNzBCLE1BQU0sRUFBRTJJLElBQUksRUFBRUMsS0FBSyxFQUFFdkMsR0FBRyxFQUFFeXVCLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUU7SUFDOUg7SUFDQSxJQUFJenVCLEVBQUUsR0FBRyxJQUFJNUosU0FBUyxDQUFDLElBQUksQ0FBQzZKLEdBQUcsRUFBRXhHLE1BQU0sRUFBRTJJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFek0sb0JBQW9CLEVBQUUsSUFBSSxFQUFFNDRCLE1BQU0sQ0FBQztNQUNwRmpzQixLQUFLLEdBQUcsQ0FBQztNQUNUQyxVQUFVLEdBQUcsQ0FBQztNQUNkQyxNQUFNO01BQ05rc0IsU0FBUztNQUNUL3JCLEtBQUs7TUFDTEcsTUFBTTtNQUNOQyxLQUFLO01BQ0xMLFFBQVE7TUFDUmlzQixTQUFTO01BQ1QzekIsQ0FBQztJQUNMZ0YsRUFBRSxDQUFDN0csQ0FBQyxHQUFHa0osS0FBSztJQUNackMsRUFBRSxDQUFDL0csQ0FBQyxHQUFHNkcsR0FBRztJQUNWdUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDOztJQUVidkMsR0FBRyxJQUFJLEVBQUU7SUFFVCxJQUFJNnVCLFNBQVMsR0FBRyxDQUFDN3VCLEdBQUcsQ0FBQ2pGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUN2Q2lGLEdBQUcsR0FBRzdKLGNBQWMsQ0FBQzZKLEdBQUcsQ0FBQztJQUMzQjtJQUVBLElBQUkwdUIsWUFBWSxFQUFFO01BQ2hCeHpCLENBQUMsR0FBRyxDQUFDcUgsS0FBSyxFQUFFdkMsR0FBRyxDQUFDO01BQ2hCMHVCLFlBQVksQ0FBQ3h6QixDQUFDLEVBQUV2QixNQUFNLEVBQUUySSxJQUFJLENBQUMsQ0FBQyxDQUFDOztNQUUvQkMsS0FBSyxHQUFHckgsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaOEUsR0FBRyxHQUFHOUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaO0lBRUEwekIsU0FBUyxHQUFHcnNCLEtBQUssQ0FBQ2MsS0FBSyxDQUFDNkwsb0JBQW9CLENBQUMsSUFBSSxFQUFFO0lBRW5ELE9BQU94TSxNQUFNLEdBQUd3TSxvQkFBb0IsQ0FBQzVMLElBQUksQ0FBQ3RELEdBQUcsQ0FBQyxFQUFFO01BQzlDZ0QsTUFBTSxHQUFHTixNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ2xCTyxLQUFLLEdBQUdqRCxHQUFHLENBQUN1RCxTQUFTLENBQUNmLEtBQUssRUFBRUUsTUFBTSxDQUFDRixLQUFLLENBQUM7TUFFMUMsSUFBSUssS0FBSyxFQUFFO1FBQ1RBLEtBQUssR0FBRyxDQUFDQSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUM7TUFDekIsQ0FBQyxNQUFNLElBQUlJLEtBQUssQ0FBQ2pILE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtRQUN2QzZHLEtBQUssR0FBRyxDQUFDO01BQ1g7TUFFQSxJQUFJRyxNQUFNLEtBQUs0ckIsU0FBUyxDQUFDbnNCLFVBQVUsRUFBRSxDQUFDLEVBQUU7UUFDdENHLFFBQVEsR0FBRzdCLFVBQVUsQ0FBQzZ0QixTQUFTLENBQUNuc0IsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O1FBRXZEdkMsRUFBRSxDQUFDQyxHQUFHLEdBQUc7VUFDUHVELEtBQUssRUFBRXhELEVBQUUsQ0FBQ0MsR0FBRztVQUNidEgsQ0FBQyxFQUFFb0ssS0FBSyxJQUFJUixVQUFVLEtBQUssQ0FBQyxHQUFHUSxLQUFLLEdBQUcsR0FBRztVQUMxQztVQUNBbEssQ0FBQyxFQUFFNkosUUFBUTtVQUNYNUosQ0FBQyxFQUFFZ0ssTUFBTSxDQUFDckYsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRzdHLGNBQWMsQ0FBQzhMLFFBQVEsRUFBRUksTUFBTSxDQUFDLEdBQUdKLFFBQVEsR0FBRzdCLFVBQVUsQ0FBQ2lDLE1BQU0sQ0FBQyxHQUFHSixRQUFRO1VBQ3pHZSxDQUFDLEVBQUVkLEtBQUssSUFBSUEsS0FBSyxHQUFHLENBQUMsR0FBR2pMLElBQUksQ0FBQ2tCLEtBQUssR0FBRztRQUN2QyxDQUFDO1FBQ0QwSixLQUFLLEdBQUcwTSxvQkFBb0IsQ0FBQzFMLFNBQVM7TUFDeEM7SUFDRjtJQUVBdEQsRUFBRSxDQUFDbEgsQ0FBQyxHQUFHd0osS0FBSyxHQUFHeEMsR0FBRyxDQUFDNU0sTUFBTSxHQUFHNE0sR0FBRyxDQUFDdUQsU0FBUyxDQUFDZixLQUFLLEVBQUV4QyxHQUFHLENBQUM1TSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7SUFFbkU4TSxFQUFFLENBQUM0dUIsRUFBRSxHQUFHSCxTQUFTO0lBRWpCLElBQUk3NEIsT0FBTyxDQUFDcUwsSUFBSSxDQUFDbkIsR0FBRyxDQUFDLElBQUk2dUIsU0FBUyxFQUFFO01BQ2xDM3VCLEVBQUUsQ0FBQy9HLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNaOztJQUVBLElBQUksQ0FBQ2dILEdBQUcsR0FBR0QsRUFBRSxDQUFDLENBQUM7O0lBRWYsT0FBT0EsRUFBRTtFQUNYLENBQUM7RUFDRzBlLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDamxCLE1BQU0sRUFBRTJJLElBQUksRUFBRUMsS0FBSyxFQUFFdkMsR0FBRyxFQUFFd0MsS0FBSyxFQUFFMkksT0FBTyxFQUFFZ1YsUUFBUSxFQUFFdU8sWUFBWSxFQUFFQyxTQUFTLEVBQUVJLFFBQVEsRUFBRTtJQUNoSXpnQixXQUFXLENBQUN0TyxHQUFHLENBQUMsS0FBS0EsR0FBRyxHQUFHQSxHQUFHLENBQUN3QyxLQUFLLElBQUksQ0FBQyxFQUFFN0ksTUFBTSxFQUFFd1IsT0FBTyxDQUFDLENBQUM7SUFDNUQsSUFBSTZqQixZQUFZLEdBQUdyMUIsTUFBTSxDQUFDMkksSUFBSSxDQUFDO01BQzNCMnNCLFdBQVcsR0FBRzFzQixLQUFLLEtBQUssS0FBSyxHQUFHQSxLQUFLLEdBQUcsQ0FBQytMLFdBQVcsQ0FBQzBnQixZQUFZLENBQUMsR0FBR0EsWUFBWSxHQUFHTCxTQUFTLEdBQUdoMUIsTUFBTSxDQUFDMkksSUFBSSxDQUFDdkgsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUN1VCxXQUFXLENBQUMzVSxNQUFNLENBQUMsS0FBSyxHQUFHMkksSUFBSSxDQUFDdEcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3NHLElBQUksR0FBRyxLQUFLLEdBQUdBLElBQUksQ0FBQ3RHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDMnlCLFNBQVMsQ0FBQyxHQUFHaDFCLE1BQU0sQ0FBQzJJLElBQUksQ0FBQyxDQUFDLENBQUM7TUFDdk9tc0IsTUFBTSxHQUFHLENBQUNuZ0IsV0FBVyxDQUFDMGdCLFlBQVksQ0FBQyxHQUFHRSxZQUFZLEdBQUdQLFNBQVMsR0FBR1Esb0JBQW9CLEdBQUdDLFdBQVc7TUFDbkdsdkIsRUFBRTtJQUVOLElBQUl2SyxTQUFTLENBQUNxSyxHQUFHLENBQUMsRUFBRTtNQUNsQixJQUFJLENBQUNBLEdBQUcsQ0FBQ2pGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUMzQmlGLEdBQUcsR0FBRzdKLGNBQWMsQ0FBQzZKLEdBQUcsQ0FBQztNQUMzQjtNQUVBLElBQUlBLEdBQUcsQ0FBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDekJ1QyxFQUFFLEdBQUdwSixjQUFjLENBQUNtNEIsV0FBVyxFQUFFanZCLEdBQUcsQ0FBQyxJQUFJdEssT0FBTyxDQUFDdTVCLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRSxJQUFJL3VCLEVBQUUsSUFBSUEsRUFBRSxLQUFLLENBQUMsRUFBRTtVQUNsQjtVQUNBRixHQUFHLEdBQUdFLEVBQUU7UUFDVjtNQUNGO0lBQ0Y7SUFFQSxJQUFJLENBQUM2dUIsUUFBUSxJQUFJRSxXQUFXLEtBQUtqdkIsR0FBRyxJQUFJcXZCLG1CQUFtQixFQUFFO01BQzNELElBQUksQ0FBQzlWLEtBQUssQ0FBQzBWLFdBQVcsR0FBR2p2QixHQUFHLENBQUMsSUFBSUEsR0FBRyxLQUFLLEVBQUUsRUFBRTtRQUMzQztRQUNBRSxFQUFFLEdBQUcsSUFBSTVKLFNBQVMsQ0FBQyxJQUFJLENBQUM2SixHQUFHLEVBQUV4RyxNQUFNLEVBQUUySSxJQUFJLEVBQUUsQ0FBQzJzQixXQUFXLElBQUksQ0FBQyxFQUFFanZCLEdBQUcsSUFBSWl2QixXQUFXLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBT0QsWUFBWSxLQUFLLFNBQVMsR0FBR00sY0FBYyxHQUFHQyxZQUFZLEVBQUUsQ0FBQyxFQUFFZCxNQUFNLENBQUM7UUFDcktFLFNBQVMsS0FBS3p1QixFQUFFLENBQUM0dUIsRUFBRSxHQUFHSCxTQUFTLENBQUM7UUFDaEN4TyxRQUFRLElBQUlqZ0IsRUFBRSxDQUFDaWdCLFFBQVEsQ0FBQ0EsUUFBUSxFQUFFLElBQUksRUFBRXhtQixNQUFNLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUN3RyxHQUFHLEdBQUdELEVBQUU7TUFDdEI7TUFFQSxDQUFDOHVCLFlBQVksSUFBSSxFQUFFMXNCLElBQUksSUFBSTNJLE1BQU0sQ0FBQyxJQUFJakQsY0FBYyxDQUFDNEwsSUFBSSxFQUFFdEMsR0FBRyxDQUFDO01BQy9ELE9BQU93dUIsMEJBQTBCLENBQUNsekIsSUFBSSxDQUFDLElBQUksRUFBRTNCLE1BQU0sRUFBRTJJLElBQUksRUFBRTJzQixXQUFXLEVBQUVqdkIsR0FBRyxFQUFFeXVCLE1BQU0sRUFBRUMsWUFBWSxJQUFJbjRCLE9BQU8sQ0FBQ200QixZQUFZLEVBQUVDLFNBQVMsQ0FBQztJQUN2STtFQUNGLENBQUM7RUFDRztFQUNKYSxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQzVrQixJQUFJLEVBQUVwSSxLQUFLLEVBQUU3SSxNQUFNLEVBQUV3UixPQUFPLEVBQUU3RyxLQUFLLEVBQUU7SUFDeEVnSyxXQUFXLENBQUMxRCxJQUFJLENBQUMsS0FBS0EsSUFBSSxHQUFHNmtCLGtCQUFrQixDQUFDN2tCLElBQUksRUFBRXRHLEtBQUssRUFBRTlCLEtBQUssRUFBRTdJLE1BQU0sRUFBRXdSLE9BQU8sQ0FBQyxDQUFDO0lBRXJGLElBQUksQ0FBQ3FELFNBQVMsQ0FBQzVELElBQUksQ0FBQyxJQUFJQSxJQUFJLENBQUMvUSxLQUFLLElBQUkrUSxJQUFJLENBQUNNLFFBQVEsSUFBSTRELFFBQVEsQ0FBQ2xFLElBQUksQ0FBQyxJQUFJK0QsYUFBYSxDQUFDL0QsSUFBSSxDQUFDLEVBQUU7TUFDNUYsT0FBT2pWLFNBQVMsQ0FBQ2lWLElBQUksQ0FBQyxHQUFHNmtCLGtCQUFrQixDQUFDN2tCLElBQUksRUFBRXRHLEtBQUssRUFBRTlCLEtBQUssRUFBRTdJLE1BQU0sRUFBRXdSLE9BQU8sQ0FBQyxHQUFHUCxJQUFJO0lBQ3pGO0lBRUEsSUFBSW9JLElBQUksR0FBRyxDQUFDLENBQUM7TUFDVG5hLENBQUM7SUFFTCxLQUFLQSxDQUFDLElBQUkrUixJQUFJLEVBQUU7TUFDZG9JLElBQUksQ0FBQ25hLENBQUMsQ0FBQyxHQUFHNDJCLGtCQUFrQixDQUFDN2tCLElBQUksQ0FBQy9SLENBQUMsQ0FBQyxFQUFFeUwsS0FBSyxFQUFFOUIsS0FBSyxFQUFFN0ksTUFBTSxFQUFFd1IsT0FBTyxDQUFDO0lBQ3RFO0lBRUEsT0FBTzZILElBQUk7RUFDYixDQUFDO0VBQ0c5YyxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQzBELFFBQVEsRUFBRWdSLElBQUksRUFBRXRHLEtBQUssRUFBRTlCLEtBQUssRUFBRTdJLE1BQU0sRUFBRXdSLE9BQU8sRUFBRTtJQUN0RixJQUFJckwsTUFBTSxFQUFFSSxFQUFFLEVBQUV3dkIsUUFBUSxFQUFFM3pCLENBQUM7SUFFM0IsSUFBSTNGLFFBQVEsQ0FBQ3dELFFBQVEsQ0FBQyxJQUFJLENBQUNrRyxNQUFNLEdBQUcsSUFBSTFKLFFBQVEsQ0FBQ3dELFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRWtSLElBQUksQ0FBQ25SLE1BQU0sRUFBRW1HLE1BQU0sQ0FBQ3VnQixPQUFPLEdBQUd6VixJQUFJLENBQUNoUixRQUFRLENBQUMsR0FBRzQxQixZQUFZLENBQUM1a0IsSUFBSSxDQUFDaFIsUUFBUSxDQUFDLEVBQUU0SSxLQUFLLEVBQUU3SSxNQUFNLEVBQUV3UixPQUFPLEVBQUU3RyxLQUFLLENBQUMsRUFBRUEsS0FBSyxFQUFFOUIsS0FBSyxFQUFFMkksT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFO01BQzFNN0csS0FBSyxDQUFDbkUsR0FBRyxHQUFHRCxFQUFFLEdBQUcsSUFBSTVKLFNBQVMsQ0FBQ2dPLEtBQUssQ0FBQ25FLEdBQUcsRUFBRXhHLE1BQU0sRUFBRUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVrRyxNQUFNLENBQUNvTSxNQUFNLEVBQUVwTSxNQUFNLEVBQUUsQ0FBQyxFQUFFQSxNQUFNLENBQUM2dkIsUUFBUSxDQUFDO01BRTVHLElBQUlyckIsS0FBSyxLQUFLcWIsV0FBVyxFQUFFO1FBQ3pCK1AsUUFBUSxHQUFHcHJCLEtBQUssQ0FBQ29rQixTQUFTLENBQUNwa0IsS0FBSyxDQUFDNG9CLFFBQVEsQ0FBQ255QixPQUFPLENBQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRTVEb0MsQ0FBQyxHQUFHK0QsTUFBTSxDQUFDTSxNQUFNLENBQUNoTixNQUFNO1FBRXhCLE9BQU8ySSxDQUFDLEVBQUUsRUFBRTtVQUNWMnpCLFFBQVEsQ0FBQzV2QixNQUFNLENBQUNNLE1BQU0sQ0FBQ3JFLENBQUMsQ0FBQyxDQUFDLEdBQUdtRSxFQUFFO1FBQ2pDO01BQ0Y7SUFDRjtJQUVBLE9BQU9KLE1BQU07RUFDZixDQUFDO0VBQ0dndEIsaUJBQWlCO0VBQ2pCO0VBQ0p1QyxtQkFBbUI7RUFDZm5ZLFVBQVUsR0FBRyxTQUFTQSxVQUFVQSxDQUFDNVMsS0FBSyxFQUFFeEMsSUFBSSxFQUFFd1QsS0FBSyxFQUFFO0lBQ3ZELElBQUkxSyxJQUFJLEdBQUd0RyxLQUFLLENBQUNzRyxJQUFJO01BQ2pCd1EsSUFBSSxHQUFHeFEsSUFBSSxDQUFDd1EsSUFBSTtNQUNoQmhRLE9BQU8sR0FBR1IsSUFBSSxDQUFDUSxPQUFPO01BQ3RCeUosZUFBZSxHQUFHakssSUFBSSxDQUFDaUssZUFBZTtNQUN0Q3NDLElBQUksR0FBR3ZNLElBQUksQ0FBQ3VNLElBQUk7TUFDaEIwVSxRQUFRLEdBQUdqaEIsSUFBSSxDQUFDaWhCLFFBQVE7TUFDeEIrRCxjQUFjLEdBQUdobEIsSUFBSSxDQUFDZ2xCLGNBQWM7TUFDcENwUSxhQUFhLEdBQUc1VSxJQUFJLENBQUM0VSxhQUFhO01BQ2xDM0YsWUFBWSxHQUFHalAsSUFBSSxDQUFDaVAsWUFBWTtNQUNoQzJNLFFBQVEsR0FBRzViLElBQUksQ0FBQzRiLFFBQVE7TUFDeEJ0VCxTQUFTLEdBQUd0SSxJQUFJLENBQUNzSSxTQUFTO01BQzFCNEIsVUFBVSxHQUFHbEssSUFBSSxDQUFDa0ssVUFBVTtNQUM1QjZELEdBQUcsR0FBR3JVLEtBQUssQ0FBQ0UsSUFBSTtNQUNoQnFyQixXQUFXLEdBQUd2ckIsS0FBSyxDQUFDOE4sUUFBUTtNQUM1QmpILE9BQU8sR0FBRzdHLEtBQUssQ0FBQzRvQixRQUFRO01BQ3hCdnJCLE1BQU0sR0FBRzJDLEtBQUssQ0FBQzNDLE1BQU07TUFDckJtdUIsV0FBVyxHQUFHbnVCLE1BQU0sSUFBSUEsTUFBTSxDQUFDakosSUFBSSxLQUFLLFFBQVEsR0FBR2lKLE1BQU0sQ0FBQ2lKLElBQUksQ0FBQ08sT0FBTyxHQUFHQSxPQUFPO01BQ2hGNGtCLGFBQWEsR0FBR3pyQixLQUFLLENBQUMwckIsVUFBVSxLQUFLLE1BQU0sSUFBSSxDQUFDbmlCLG1CQUFtQjtNQUNuRXVmLEVBQUUsR0FBRzlvQixLQUFLLENBQUM0UixRQUFRO01BQ25CK1osU0FBUztNQUNUbDBCLENBQUM7TUFDRGxELENBQUM7TUFDRHFILEVBQUU7TUFDRnZHLE1BQU07TUFDTjhSLFdBQVc7TUFDWHlrQixNQUFNO01BQ04vZSxPQUFPO01BQ1ByUixNQUFNO01BQ040dkIsUUFBUTtNQUNSbHRCLEtBQUs7TUFDTDJ0QixXQUFXO01BQ1hDLFdBQVc7SUFDZmhELEVBQUUsS0FBSyxDQUFDbGEsU0FBUyxJQUFJLENBQUNrSSxJQUFJLENBQUMsS0FBS0EsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUM5QzlXLEtBQUssQ0FBQ21pQixLQUFLLEdBQUdwTCxVQUFVLENBQUNELElBQUksRUFBRTFOLFNBQVMsQ0FBQzBOLElBQUksQ0FBQztJQUM5QzlXLEtBQUssQ0FBQ29pQixNQUFNLEdBQUdGLFFBQVEsR0FBR3RLLFdBQVcsQ0FBQ2IsVUFBVSxDQUFDbUwsUUFBUSxLQUFLLElBQUksR0FBR3BMLElBQUksR0FBR29MLFFBQVEsRUFBRTlZLFNBQVMsQ0FBQzBOLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUUxRyxJQUFJb0wsUUFBUSxJQUFJbGlCLEtBQUssQ0FBQ3NULEtBQUssSUFBSSxDQUFDdFQsS0FBSyxDQUFDNFEsT0FBTyxFQUFFO01BQzdDO01BQ0FzUixRQUFRLEdBQUdsaUIsS0FBSyxDQUFDb2lCLE1BQU07TUFDdkJwaUIsS0FBSyxDQUFDb2lCLE1BQU0sR0FBR3BpQixLQUFLLENBQUNtaUIsS0FBSztNQUMxQm5pQixLQUFLLENBQUNtaUIsS0FBSyxHQUFHRCxRQUFRO0lBQ3hCO0lBRUFsaUIsS0FBSyxDQUFDeVQsS0FBSyxHQUFHLENBQUNxVixFQUFFLElBQUksQ0FBQyxDQUFDeGlCLElBQUksQ0FBQ2lQLFlBQVksQ0FBQyxDQUFDOztJQUUxQyxJQUFJLENBQUN1VCxFQUFFLElBQUlsYSxTQUFTLElBQUksQ0FBQ3RJLElBQUksQ0FBQ2dnQixPQUFPLEVBQUU7TUFDckM7TUFDQXpaLE9BQU8sR0FBR2hHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBR3ZVLFNBQVMsQ0FBQ3VVLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDZ0csT0FBTyxHQUFHLENBQUM7TUFDeERnZixXQUFXLEdBQUdoZixPQUFPLElBQUl2RyxJQUFJLENBQUN1RyxPQUFPLENBQUM3TyxJQUFJLENBQUMsQ0FBQyxDQUFDOztNQUU3QzJ0QixTQUFTLEdBQUduZCxjQUFjLENBQUNsSSxJQUFJLEVBQUU2RixjQUFjLENBQUM7TUFFaEQsSUFBSW9mLFdBQVcsRUFBRTtRQUNmQSxXQUFXLENBQUN4WixNQUFNLEdBQUcsQ0FBQyxJQUFJd1osV0FBVyxDQUFDdFIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRW5EemMsSUFBSSxHQUFHLENBQUMsSUFBSStYLFlBQVksSUFBSWhGLGVBQWUsSUFBSSxDQUFDQyxVQUFVLEdBQUcrYSxXQUFXLENBQUMzakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHMmpCLFdBQVcsQ0FBQ3B6QixNQUFNLENBQUNvZCxZQUFZLElBQUlsQixHQUFHLEdBQUdwSSxtQkFBbUIsR0FBR0gsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2xMOztRQUVBeWYsV0FBVyxDQUFDOWQsS0FBSyxHQUFHLENBQUM7TUFDdkI7TUFFQSxJQUFJM0csT0FBTyxFQUFFO1FBQ1g0SSxpQkFBaUIsQ0FBQzFQLEtBQUssQ0FBQzhOLFFBQVEsR0FBRzBILEtBQUssQ0FBQ25oQixHQUFHLENBQUN3UyxPQUFPLEVBQUVwVSxZQUFZLENBQUM7VUFDakUyQixJQUFJLEVBQUUsU0FBUztVQUNma1YsU0FBUyxFQUFFLEtBQUs7VUFDaEJqTSxNQUFNLEVBQUVBLE1BQU07VUFDZGtULGVBQWUsRUFBRSxJQUFJO1VBQ3JCc0MsSUFBSSxFQUFFLENBQUMwWSxXQUFXLElBQUlwaEIsV0FBVyxDQUFDMEksSUFBSSxDQUFDO1VBQ3ZDL0wsT0FBTyxFQUFFLElBQUk7VUFDYjVYLEtBQUssRUFBRSxDQUFDO1VBQ1JxNEIsUUFBUSxFQUFFQSxRQUFRO1VBQ2xCK0QsY0FBYyxFQUFFQSxjQUFjO1VBQzlCcFEsYUFBYSxFQUFFQSxhQUFhO1VBQzVCb0wsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxFQUFFeGYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBR2Y5RyxLQUFLLENBQUM4TixRQUFRLENBQUNnQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBRXhCOU8sS0FBSyxDQUFDOE4sUUFBUSxDQUFDOFcsSUFBSSxHQUFHNWtCLEtBQUssQ0FBQyxDQUFDOztRQUU3QnhDLElBQUksR0FBRyxDQUFDLEtBQUt0SyxVQUFVLElBQUksQ0FBQ3FkLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSXhRLEtBQUssQ0FBQzhOLFFBQVEsQ0FBQzNWLE1BQU0sQ0FBQzhULG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7UUFFM0csSUFBSXNFLGVBQWUsRUFBRTtVQUNuQixJQUFJOEQsR0FBRyxJQUFJN1csSUFBSSxJQUFJLENBQUMsSUFBSXdULEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDbEM7WUFDQXhULElBQUksS0FBS3dDLEtBQUssQ0FBQytSLE1BQU0sR0FBR3ZVLElBQUksQ0FBQztZQUM3QixPQUFPLENBQUM7VUFDVjtRQUNGO01BQ0YsQ0FBQyxNQUFNLElBQUkrWCxZQUFZLElBQUlsQixHQUFHLEVBQUU7UUFDOUI7UUFDQSxJQUFJLENBQUNrWCxXQUFXLEVBQUU7VUFDaEIvdEIsSUFBSSxLQUFLK1MsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O1VBRW5DaGMsQ0FBQyxHQUFHOUIsWUFBWSxDQUFDO1lBQ2Y2VyxTQUFTLEVBQUUsS0FBSztZQUNoQmxWLElBQUksRUFBRSxhQUFhO1lBQ25CO1lBQ0F5ZSxJQUFJLEVBQUV0QyxlQUFlLElBQUksQ0FBQ2diLFdBQVcsSUFBSXBoQixXQUFXLENBQUMwSSxJQUFJLENBQUM7WUFDMUR0QyxlQUFlLEVBQUVBLGVBQWU7WUFDaEM7WUFDQStWLE9BQU8sRUFBRSxDQUFDO1lBQ1ZqcEIsTUFBTSxFQUFFQSxNQUFNLENBQUM7VUFFakIsQ0FBQyxFQUFFc3VCLFNBQVMsQ0FBQztVQUNiRSxXQUFXLEtBQUt0M0IsQ0FBQyxDQUFDc1ksT0FBTyxDQUFDN08sSUFBSSxDQUFDLEdBQUc2dEIsV0FBVyxDQUFDLENBQUMsQ0FBQzs7VUFFaERuYyxpQkFBaUIsQ0FBQzFQLEtBQUssQ0FBQzhOLFFBQVEsR0FBRzBILEtBQUssQ0FBQ25oQixHQUFHLENBQUN3UyxPQUFPLEVBQUV0UyxDQUFDLENBQUMsQ0FBQztVQUV6RHlMLEtBQUssQ0FBQzhOLFFBQVEsQ0FBQ2dCLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7VUFFeEI5TyxLQUFLLENBQUM4TixRQUFRLENBQUM4VyxJQUFJLEdBQUc1a0IsS0FBSyxDQUFDLENBQUM7O1VBRTdCeEMsSUFBSSxHQUFHLENBQUMsS0FBS3RLLFVBQVUsR0FBRzhNLEtBQUssQ0FBQzhOLFFBQVEsQ0FBQzNWLE1BQU0sQ0FBQzhULG1CQUFtQixDQUFDLEdBQUdqTSxLQUFLLENBQUM4TixRQUFRLENBQUNsRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFDdkc1SCxLQUFLLENBQUMrUixNQUFNLEdBQUd2VSxJQUFJO1VBRW5CLElBQUksQ0FBQytTLGVBQWUsRUFBRTtZQUNwQnFDLFVBQVUsQ0FBQzVTLEtBQUssQ0FBQzhOLFFBQVEsRUFBRXJFLFFBQVEsRUFBRUEsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUVsRCxDQUFDLE1BQU0sSUFBSSxDQUFDak0sSUFBSSxFQUFFO1lBQ2hCO1VBQ0Y7UUFDRjtNQUNGO01BRUF3QyxLQUFLLENBQUNuRSxHQUFHLEdBQUdtRSxLQUFLLENBQUMrckIsUUFBUSxHQUFHLENBQUM7TUFDOUJsWixJQUFJLEdBQUd3QixHQUFHLElBQUlsSyxXQUFXLENBQUMwSSxJQUFJLENBQUMsSUFBSUEsSUFBSSxJQUFJLENBQUN3QixHQUFHO01BRS9DLEtBQUs1YyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdvUCxPQUFPLENBQUMvWCxNQUFNLEVBQUUySSxDQUFDLEVBQUUsRUFBRTtRQUNuQ3BDLE1BQU0sR0FBR3dSLE9BQU8sQ0FBQ3BQLENBQUMsQ0FBQztRQUNuQm0wQixNQUFNLEdBQUd2MkIsTUFBTSxDQUFDTSxLQUFLLElBQUlnWCxRQUFRLENBQUM5RixPQUFPLENBQUMsQ0FBQ3BQLENBQUMsQ0FBQyxDQUFDOUIsS0FBSztRQUNuRHFLLEtBQUssQ0FBQ29rQixTQUFTLENBQUMzc0IsQ0FBQyxDQUFDLEdBQUcyekIsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQy9lLFdBQVcsQ0FBQ3VmLE1BQU0sQ0FBQzE5QixFQUFFLENBQUMsSUFBSWtlLFdBQVcsQ0FBQ3RkLE1BQU0sSUFBSTBlLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFL0R0UCxLQUFLLEdBQUdzdEIsV0FBVyxLQUFLM2tCLE9BQU8sR0FBR3BQLENBQUMsR0FBRyt6QixXQUFXLENBQUMvMEIsT0FBTyxDQUFDcEIsTUFBTSxDQUFDO1FBRWpFLElBQUl3WCxPQUFPLElBQUksQ0FBQ3JSLE1BQU0sR0FBRyxJQUFJcVIsT0FBTyxDQUFDLENBQUMsRUFBRXJHLElBQUksQ0FBQ25SLE1BQU0sRUFBRXcyQixXQUFXLElBQUlGLFNBQVMsRUFBRTNyQixLQUFLLEVBQUU5QixLQUFLLEVBQUVzdEIsV0FBVyxDQUFDLEtBQUssS0FBSyxFQUFFO1VBQ25IeHJCLEtBQUssQ0FBQ25FLEdBQUcsR0FBR0QsRUFBRSxHQUFHLElBQUk1SixTQUFTLENBQUNnTyxLQUFLLENBQUNuRSxHQUFHLEVBQUV4RyxNQUFNLEVBQUVtRyxNQUFNLENBQUMySyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTNLLE1BQU0sQ0FBQ29NLE1BQU0sRUFBRXBNLE1BQU0sRUFBRSxDQUFDLEVBQUVBLE1BQU0sQ0FBQzZ2QixRQUFRLENBQUM7VUFFL0c3dkIsTUFBTSxDQUFDTSxNQUFNLENBQUNuRixPQUFPLENBQUMsVUFBVXdQLElBQUksRUFBRTtZQUNwQ2lsQixRQUFRLENBQUNqbEIsSUFBSSxDQUFDLEdBQUd2SyxFQUFFO1VBQ3JCLENBQUMsQ0FBQztVQUVGSixNQUFNLENBQUM2dkIsUUFBUSxLQUFLbGtCLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdEM7UUFFQSxJQUFJLENBQUMwRixPQUFPLElBQUlnZixXQUFXLEVBQUU7VUFDM0IsS0FBS3QzQixDQUFDLElBQUlvM0IsU0FBUyxFQUFFO1lBQ25CLElBQUk3NUIsUUFBUSxDQUFDeUMsQ0FBQyxDQUFDLEtBQUtpSCxNQUFNLEdBQUc1SixZQUFZLENBQUMyQyxDQUFDLEVBQUVvM0IsU0FBUyxFQUFFM3JCLEtBQUssRUFBRTlCLEtBQUssRUFBRTdJLE1BQU0sRUFBRW0yQixXQUFXLENBQUMsQ0FBQyxFQUFFO2NBQzNGaHdCLE1BQU0sQ0FBQzZ2QixRQUFRLEtBQUtsa0IsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLE1BQU07Y0FDTGlrQixRQUFRLENBQUM3MkIsQ0FBQyxDQUFDLEdBQUdxSCxFQUFFLEdBQUcwZSxhQUFhLENBQUN0akIsSUFBSSxDQUFDZ0osS0FBSyxFQUFFM0ssTUFBTSxFQUFFZCxDQUFDLEVBQUUsS0FBSyxFQUFFbzNCLFNBQVMsQ0FBQ3AzQixDQUFDLENBQUMsRUFBRTJKLEtBQUssRUFBRXN0QixXQUFXLEVBQUUsQ0FBQyxFQUFFbGxCLElBQUksQ0FBQzhqQixZQUFZLENBQUM7WUFDeEg7VUFDRjtRQUNGO1FBRUFwcUIsS0FBSyxDQUFDZ3NCLEdBQUcsSUFBSWhzQixLQUFLLENBQUNnc0IsR0FBRyxDQUFDdjBCLENBQUMsQ0FBQyxJQUFJdUksS0FBSyxDQUFDZ00sSUFBSSxDQUFDM1csTUFBTSxFQUFFMkssS0FBSyxDQUFDZ3NCLEdBQUcsQ0FBQ3YwQixDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJZzBCLGFBQWEsSUFBSXpyQixLQUFLLENBQUNuRSxHQUFHLEVBQUU7VUFDOUIyc0IsaUJBQWlCLEdBQUd4b0IsS0FBSztVQUV6QitLLGVBQWUsQ0FBQ21kLFlBQVksQ0FBQzd5QixNQUFNLEVBQUUrMUIsUUFBUSxFQUFFcHJCLEtBQUssQ0FBQzJrQixVQUFVLENBQUNubkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUd4RXN1QixXQUFXLEdBQUcsQ0FBQzlyQixLQUFLLENBQUMzQyxNQUFNO1VBQzNCbXJCLGlCQUFpQixHQUFHLENBQUM7UUFDdkI7UUFFQXhvQixLQUFLLENBQUNuRSxHQUFHLElBQUlnWCxJQUFJLEtBQUt4RyxXQUFXLENBQUN1ZixNQUFNLENBQUMxOUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ25EO01BRUFpWixXQUFXLElBQUl6Vix5QkFBeUIsQ0FBQ3NPLEtBQUssQ0FBQztNQUMvQ0EsS0FBSyxDQUFDaXNCLE9BQU8sSUFBSWpzQixLQUFLLENBQUNpc0IsT0FBTyxDQUFDanNCLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekM7O0lBRUFBLEtBQUssQ0FBQzBULFNBQVMsR0FBRzZULFFBQVE7SUFDMUJ2bkIsS0FBSyxDQUFDNk4sUUFBUSxHQUFHLENBQUMsQ0FBQzdOLEtBQUssQ0FBQ2dzQixHQUFHLElBQUloc0IsS0FBSyxDQUFDbkUsR0FBRyxLQUFLLENBQUNpd0IsV0FBVyxDQUFDLENBQUM7O0lBRTVEbGQsU0FBUyxJQUFJcFIsSUFBSSxJQUFJLENBQUMsSUFBSXNyQixFQUFFLENBQUNsaEIsTUFBTSxDQUFDalUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQzVELENBQUM7RUFDR3U0QixpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUNsc0IsS0FBSyxFQUFFMUssUUFBUSxFQUFFTCxLQUFLLEVBQUVnSixLQUFLLEVBQUVrdUIsZUFBZSxFQUFFaDRCLEtBQUssRUFBRXFKLElBQUksRUFBRTtJQUM5RyxJQUFJNHVCLE9BQU8sR0FBRyxDQUFDcHNCLEtBQUssQ0FBQ25FLEdBQUcsSUFBSW1FLEtBQUssQ0FBQytyQixRQUFRLEtBQUsvckIsS0FBSyxDQUFDK3JCLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFejJCLFFBQVEsQ0FBQztNQUMxRXNHLEVBQUU7TUFDRnl3QixNQUFNO01BQ05DLE1BQU07TUFDTjcwQixDQUFDO0lBRUwsSUFBSSxDQUFDMjBCLE9BQU8sRUFBRTtNQUNaQSxPQUFPLEdBQUdwc0IsS0FBSyxDQUFDK3JCLFFBQVEsQ0FBQ3oyQixRQUFRLENBQUMsR0FBRyxFQUFFO01BQ3ZDZzNCLE1BQU0sR0FBR3RzQixLQUFLLENBQUNva0IsU0FBUztNQUN4QjNzQixDQUFDLEdBQUd1SSxLQUFLLENBQUM0b0IsUUFBUSxDQUFDOTVCLE1BQU07TUFFekIsT0FBTzJJLENBQUMsRUFBRSxFQUFFO1FBQ1ZtRSxFQUFFLEdBQUcwd0IsTUFBTSxDQUFDNzBCLENBQUMsQ0FBQyxDQUFDbkMsUUFBUSxDQUFDO1FBRXhCLElBQUlzRyxFQUFFLElBQUlBLEVBQUUsQ0FBQ3VGLENBQUMsSUFBSXZGLEVBQUUsQ0FBQ3VGLENBQUMsQ0FBQ3RGLEdBQUcsRUFBRTtVQUMxQjtVQUNBRCxFQUFFLEdBQUdBLEVBQUUsQ0FBQ3VGLENBQUMsQ0FBQ3RGLEdBQUc7VUFFYixPQUFPRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ3JILENBQUMsS0FBS2UsUUFBUSxJQUFJc0csRUFBRSxDQUFDNHVCLEVBQUUsS0FBS2wxQixRQUFRLEVBQUU7WUFDcEQ7WUFDQXNHLEVBQUUsR0FBR0EsRUFBRSxDQUFDd0QsS0FBSztVQUNmO1FBQ0Y7UUFFQSxJQUFJLENBQUN4RCxFQUFFLEVBQUU7VUFDUDtVQUNBO1VBQ0FtdkIsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1VBRXpCL3FCLEtBQUssQ0FBQ3NHLElBQUksQ0FBQ2hSLFFBQVEsQ0FBQyxHQUFHLEtBQUs7VUFFNUJzZCxVQUFVLENBQUM1UyxLQUFLLEVBQUV4QyxJQUFJLENBQUM7VUFFdkJ1dEIsbUJBQW1CLEdBQUcsQ0FBQztVQUN2QixPQUFPLENBQUM7UUFDVjtRQUVBcUIsT0FBTyxDQUFDaDFCLElBQUksQ0FBQ3dFLEVBQUUsQ0FBQztNQUNsQjtJQUNGO0lBRUFuRSxDQUFDLEdBQUcyMEIsT0FBTyxDQUFDdDlCLE1BQU07SUFFbEIsT0FBTzJJLENBQUMsRUFBRSxFQUFFO01BQ1Y0MEIsTUFBTSxHQUFHRCxPQUFPLENBQUMzMEIsQ0FBQyxDQUFDO01BQ25CbUUsRUFBRSxHQUFHeXdCLE1BQU0sQ0FBQ3h3QixHQUFHLElBQUl3d0IsTUFBTSxDQUFDLENBQUM7O01BRTNCendCLEVBQUUsQ0FBQ25ILENBQUMsR0FBRyxDQUFDd0osS0FBSyxJQUFJQSxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUNrdUIsZUFBZSxHQUFHbHVCLEtBQUssR0FBR3JDLEVBQUUsQ0FBQ25ILENBQUMsSUFBSXdKLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRzlKLEtBQUssR0FBR3lILEVBQUUsQ0FBQ2xILENBQUM7TUFDOUZrSCxFQUFFLENBQUNsSCxDQUFDLEdBQUdPLEtBQUssR0FBRzJHLEVBQUUsQ0FBQ25ILENBQUM7TUFDbkI0M0IsTUFBTSxDQUFDeDNCLENBQUMsS0FBS3czQixNQUFNLENBQUN4M0IsQ0FBQyxHQUFHMUMsTUFBTSxDQUFDOEMsS0FBSyxDQUFDLEdBQUc3RCxPQUFPLENBQUNpN0IsTUFBTSxDQUFDeDNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFNUR3M0IsTUFBTSxDQUFDdDNCLENBQUMsS0FBS3MzQixNQUFNLENBQUN0M0IsQ0FBQyxHQUFHNkcsRUFBRSxDQUFDbkgsQ0FBQyxHQUFHckQsT0FBTyxDQUFDaTdCLE1BQU0sQ0FBQ3QzQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQ7RUFDRixDQUFDO0VBQ0d3M0IsaUJBQWlCLEdBQUcsU0FBU0EsaUJBQWlCQSxDQUFDMWxCLE9BQU8sRUFBRVAsSUFBSSxFQUFFO0lBQ2hFLElBQUl1RyxPQUFPLEdBQUdoRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUd2VSxTQUFTLENBQUN1VSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2dHLE9BQU8sR0FBRyxDQUFDO01BQ3hEMmYsZUFBZSxHQUFHM2YsT0FBTyxJQUFJQSxPQUFPLENBQUMvRSxPQUFPO01BQzVDNEcsSUFBSTtNQUNKbmEsQ0FBQztNQUNEa0QsQ0FBQztNQUNEcVEsT0FBTztJQUVYLElBQUksQ0FBQzBrQixlQUFlLEVBQUU7TUFDcEIsT0FBT2xtQixJQUFJO0lBQ2I7SUFFQW9JLElBQUksR0FBR3BELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWhGLElBQUksQ0FBQztJQUV2QixLQUFLL1IsQ0FBQyxJQUFJaTRCLGVBQWUsRUFBRTtNQUN6QixJQUFJajRCLENBQUMsSUFBSW1hLElBQUksRUFBRTtRQUNiNUcsT0FBTyxHQUFHMGtCLGVBQWUsQ0FBQ2o0QixDQUFDLENBQUMsQ0FBQ21DLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkNlLENBQUMsR0FBR3FRLE9BQU8sQ0FBQ2haLE1BQU07UUFFbEIsT0FBTzJJLENBQUMsRUFBRSxFQUFFO1VBQ1ZpWCxJQUFJLENBQUM1RyxPQUFPLENBQUNyUSxDQUFDLENBQUMsQ0FBQyxHQUFHaVgsSUFBSSxDQUFDbmEsQ0FBQyxDQUFDO1FBQzVCO01BQ0Y7SUFDRjtJQUVBLE9BQU9tYSxJQUFJO0VBQ2IsQ0FBQztFQUNHO0VBQ0orZCxjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQ3p1QixJQUFJLEVBQUU0TixHQUFHLEVBQUU4Z0IsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDdEUsSUFBSTdWLElBQUksR0FBR2xMLEdBQUcsQ0FBQ2tMLElBQUksSUFBSTZWLFFBQVEsSUFBSSxjQUFjO01BQzdDcDRCLENBQUM7TUFDRHFDLENBQUM7SUFFTCxJQUFJNFQsUUFBUSxDQUFDb0IsR0FBRyxDQUFDLEVBQUU7TUFDakJoVixDQUFDLEdBQUc4MUIsUUFBUSxDQUFDMXVCLElBQUksQ0FBQyxLQUFLMHVCLFFBQVEsQ0FBQzF1QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztNQUU3QzROLEdBQUcsQ0FBQ2pWLE9BQU8sQ0FBQyxVQUFVMUIsS0FBSyxFQUFFd0MsQ0FBQyxFQUFFO1FBQzlCLE9BQU9iLENBQUMsQ0FBQ1EsSUFBSSxDQUFDO1VBQ1o5QyxDQUFDLEVBQUVtRCxDQUFDLElBQUltVSxHQUFHLENBQUM5YyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztVQUM3QmtlLENBQUMsRUFBRS9YLEtBQUs7VUFDUkosQ0FBQyxFQUFFaWlCO1FBQ0wsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0wsS0FBS3ZpQixDQUFDLElBQUlxWCxHQUFHLEVBQUU7UUFDYmhWLENBQUMsR0FBRzgxQixRQUFRLENBQUNuNEIsQ0FBQyxDQUFDLEtBQUttNEIsUUFBUSxDQUFDbjRCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQ0EsQ0FBQyxLQUFLLE1BQU0sSUFBSXFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDO1VBQ3JCOUMsQ0FBQyxFQUFFbUksVUFBVSxDQUFDdUIsSUFBSSxDQUFDO1VBQ25CZ1AsQ0FBQyxFQUFFcEIsR0FBRyxDQUFDclgsQ0FBQyxDQUFDO1VBQ1RNLENBQUMsRUFBRWlpQjtRQUNMLENBQUMsQ0FBQztNQUNKO0lBQ0Y7RUFDRixDQUFDO0VBQ0dxVSxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUNsMkIsS0FBSyxFQUFFK0ssS0FBSyxFQUFFdkksQ0FBQyxFQUFFcEMsTUFBTSxFQUFFd1IsT0FBTyxFQUFFO0lBQ3JGLE9BQU9tRCxXQUFXLENBQUMvVSxLQUFLLENBQUMsR0FBR0EsS0FBSyxDQUFDK0IsSUFBSSxDQUFDZ0osS0FBSyxFQUFFdkksQ0FBQyxFQUFFcEMsTUFBTSxFQUFFd1IsT0FBTyxDQUFDLEdBQUd4VixTQUFTLENBQUM0RCxLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLLENBQUN3QixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc1RSxjQUFjLENBQUNvRCxLQUFLLENBQUMsR0FBR0EsS0FBSztFQUNuSixDQUFDO0VBQ0cyM0Isa0JBQWtCLEdBQUdsZ0IsY0FBYyxHQUFHLDJEQUEyRDtFQUNqR21nQixtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFFNUJwN0IsWUFBWSxDQUFDbTdCLGtCQUFrQixHQUFHLGlEQUFpRCxFQUFFLFVBQVV6bUIsSUFBSSxFQUFFO0VBQ25HLE9BQU8wbUIsbUJBQW1CLENBQUMxbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdPLElBQUlxUCxLQUFLLEdBQUcsYUFBYSxVQUFVc1gsV0FBVyxFQUFFO0VBQ3JEbmtCLGNBQWMsQ0FBQzZNLEtBQUssRUFBRXNYLFdBQVcsQ0FBQztFQUVsQyxTQUFTdFgsS0FBS0EsQ0FBQzNPLE9BQU8sRUFBRVAsSUFBSSxFQUFFN0ksUUFBUSxFQUFFc3ZCLFdBQVcsRUFBRTtJQUNuRCxJQUFJQyxNQUFNO0lBRVYsSUFBSSxPQUFPMW1CLElBQUksS0FBSyxRQUFRLEVBQUU7TUFDNUI3SSxRQUFRLENBQUM0TCxRQUFRLEdBQUcvQyxJQUFJO01BQ3hCQSxJQUFJLEdBQUc3SSxRQUFRO01BQ2ZBLFFBQVEsR0FBRyxJQUFJO0lBQ2pCO0lBRUF1dkIsTUFBTSxHQUFHRixXQUFXLENBQUM5MUIsSUFBSSxDQUFDLElBQUksRUFBRSsxQixXQUFXLEdBQUd6bUIsSUFBSSxHQUFHcUksZ0JBQWdCLENBQUNySSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUk7SUFDcEYsSUFBSTJtQixXQUFXLEdBQUdELE1BQU0sQ0FBQzFtQixJQUFJO01BQ3pCK0MsUUFBUSxHQUFHNGpCLFdBQVcsQ0FBQzVqQixRQUFRO01BQy9CbmEsS0FBSyxHQUFHKzlCLFdBQVcsQ0FBQy85QixLQUFLO01BQ3pCcWhCLGVBQWUsR0FBRzBjLFdBQVcsQ0FBQzFjLGVBQWU7TUFDN0MrVixPQUFPLEdBQUcyRyxXQUFXLENBQUMzRyxPQUFPO01BQzdCaGQsU0FBUyxHQUFHMmpCLFdBQVcsQ0FBQzNqQixTQUFTO01BQ2pDc0YsU0FBUyxHQUFHcWUsV0FBVyxDQUFDcmUsU0FBUztNQUNqQ1YsUUFBUSxHQUFHK2UsV0FBVyxDQUFDL2UsUUFBUTtNQUMvQmtOLGFBQWEsR0FBRzZSLFdBQVcsQ0FBQzdSLGFBQWE7TUFDekM4RyxRQUFRLEdBQUcrSyxXQUFXLENBQUMvSyxRQUFRO01BQy9CN2tCLE1BQU0sR0FBR2lKLElBQUksQ0FBQ2pKLE1BQU0sSUFBSTBOLGVBQWU7TUFDdkMwZCxhQUFhLEdBQUcsQ0FBQ2plLFFBQVEsQ0FBQzNELE9BQU8sQ0FBQyxJQUFJd0QsYUFBYSxDQUFDeEQsT0FBTyxDQUFDLEdBQUdvRCxTQUFTLENBQUNwRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLElBQUlQLElBQUksSUFBSSxDQUFDTyxPQUFPLENBQUMsR0FBR2tHLE9BQU8sQ0FBQ2xHLE9BQU8sQ0FBQztNQUN2SWlpQixFQUFFO01BQ0ZyeEIsQ0FBQztNQUNEaVgsSUFBSTtNQUNKdEksQ0FBQztNQUNEN1IsQ0FBQztNQUNEMjRCLFNBQVM7TUFDVEMsV0FBVztNQUNYQyxrQkFBa0I7SUFDdEJKLE1BQU0sQ0FBQ3BFLFFBQVEsR0FBR0gsYUFBYSxDQUFDMzVCLE1BQU0sR0FBRzZkLFFBQVEsQ0FBQzhiLGFBQWEsQ0FBQyxHQUFHamQsS0FBSyxDQUFDLGNBQWMsR0FBRzNFLE9BQU8sR0FBRyxtQ0FBbUMsRUFBRSxDQUFDNVUsT0FBTyxDQUFDaVgsY0FBYyxDQUFDLElBQUksRUFBRTtJQUN2SzhqQixNQUFNLENBQUM1SSxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBRXZCNEksTUFBTSxDQUFDdEIsVUFBVSxHQUFHcGlCLFNBQVM7SUFFN0IsSUFBSXNGLFNBQVMsSUFBSTBYLE9BQU8sSUFBSWxjLGVBQWUsQ0FBQ2YsUUFBUSxDQUFDLElBQUllLGVBQWUsQ0FBQ2xiLEtBQUssQ0FBQyxFQUFFO01BQy9Fb1gsSUFBSSxHQUFHMG1CLE1BQU0sQ0FBQzFtQixJQUFJO01BQ2xCd2lCLEVBQUUsR0FBR2tFLE1BQU0sQ0FBQ3BiLFFBQVEsR0FBRyxJQUFJNEMsUUFBUSxDQUFDO1FBQ2xDcGdCLElBQUksRUFBRSxRQUFRO1FBQ2Q4WixRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUM7UUFDeEJySCxPQUFPLEVBQUV4SixNQUFNLElBQUlBLE1BQU0sQ0FBQ2pKLElBQUksS0FBSyxRQUFRLEdBQUdpSixNQUFNLENBQUNpSixJQUFJLENBQUNPLE9BQU8sR0FBRzRoQjtNQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVKSyxFQUFFLENBQUM5YyxJQUFJLENBQUMsQ0FBQztNQUNUOGMsRUFBRSxDQUFDenJCLE1BQU0sR0FBR3lyQixFQUFFLENBQUNoYSxHQUFHLEdBQUd0RyxzQkFBc0IsQ0FBQ3drQixNQUFNLENBQUM7TUFDbkRsRSxFQUFFLENBQUM3WSxNQUFNLEdBQUcsQ0FBQztNQUViLElBQUlxVyxPQUFPLElBQUlsYyxlQUFlLENBQUNmLFFBQVEsQ0FBQyxJQUFJZSxlQUFlLENBQUNsYixLQUFLLENBQUMsRUFBRTtRQUNsRWtYLENBQUMsR0FBR3FpQixhQUFhLENBQUMzNUIsTUFBTTtRQUN4QnErQixXQUFXLEdBQUc3RyxPQUFPLElBQUl6UCxVQUFVLENBQUN5UCxPQUFPLENBQUM7UUFFNUMsSUFBSXBjLFNBQVMsQ0FBQ29jLE9BQU8sQ0FBQyxFQUFFO1VBQ3RCO1VBQ0EsS0FBSy94QixDQUFDLElBQUkreEIsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQ3NHLGtCQUFrQixDQUFDbjJCLE9BQU8sQ0FBQ2xDLENBQUMsQ0FBQyxFQUFFO2NBQ2xDNjRCLGtCQUFrQixLQUFLQSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztjQUMvQ0Esa0JBQWtCLENBQUM3NEIsQ0FBQyxDQUFDLEdBQUcreEIsT0FBTyxDQUFDL3hCLENBQUMsQ0FBQztZQUNwQztVQUNGO1FBQ0Y7UUFFQSxLQUFLa0QsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMk8sQ0FBQyxFQUFFM08sQ0FBQyxFQUFFLEVBQUU7VUFDdEJpWCxJQUFJLEdBQUdGLGNBQWMsQ0FBQ2xJLElBQUksRUFBRXVtQixtQkFBbUIsQ0FBQztVQUNoRG5lLElBQUksQ0FBQzRYLE9BQU8sR0FBRyxDQUFDO1VBQ2hCcEUsUUFBUSxLQUFLeFQsSUFBSSxDQUFDd1QsUUFBUSxHQUFHQSxRQUFRLENBQUM7VUFDdENrTCxrQkFBa0IsSUFBSTloQixNQUFNLENBQUNvRCxJQUFJLEVBQUUwZSxrQkFBa0IsQ0FBQztVQUN0REYsU0FBUyxHQUFHekUsYUFBYSxDQUFDaHhCLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBRTlCaVgsSUFBSSxDQUFDckYsUUFBUSxHQUFHLENBQUM4aEIsa0JBQWtCLENBQUM5aEIsUUFBUSxFQUFFYixzQkFBc0IsQ0FBQ3drQixNQUFNLENBQUMsRUFBRXYxQixDQUFDLEVBQUV5MUIsU0FBUyxFQUFFekUsYUFBYSxDQUFDO1VBQzFHL1osSUFBSSxDQUFDeGYsS0FBSyxHQUFHLENBQUMsQ0FBQ2k4QixrQkFBa0IsQ0FBQ2o4QixLQUFLLEVBQUVzWixzQkFBc0IsQ0FBQ3drQixNQUFNLENBQUMsRUFBRXYxQixDQUFDLEVBQUV5MUIsU0FBUyxFQUFFekUsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJdUUsTUFBTSxDQUFDN2EsTUFBTTtVQUUzSCxJQUFJLENBQUNtVSxPQUFPLElBQUlsZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSXNJLElBQUksQ0FBQ3hmLEtBQUssRUFBRTtZQUNyQztZQUNBODlCLE1BQU0sQ0FBQzdhLE1BQU0sR0FBR2pqQixLQUFLLEdBQUd3ZixJQUFJLENBQUN4ZixLQUFLO1lBQ2xDODlCLE1BQU0sQ0FBQy9jLE1BQU0sSUFBSS9nQixLQUFLO1lBQ3RCd2YsSUFBSSxDQUFDeGYsS0FBSyxHQUFHLENBQUM7VUFDaEI7VUFFQTQ1QixFQUFFLENBQUMxNUIsRUFBRSxDQUFDODlCLFNBQVMsRUFBRXhlLElBQUksRUFBRXllLFdBQVcsR0FBR0EsV0FBVyxDQUFDMTFCLENBQUMsRUFBRXkxQixTQUFTLEVBQUV6RSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDbEZLLEVBQUUsQ0FBQzNHLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ3FDLElBQUk7UUFDMUI7UUFFQXNGLEVBQUUsQ0FBQ3pmLFFBQVEsQ0FBQyxDQUFDLEdBQUdBLFFBQVEsR0FBR25hLEtBQUssR0FBRyxDQUFDLEdBQUc4OUIsTUFBTSxDQUFDcGIsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQzlELENBQUMsTUFBTSxJQUFJaEQsU0FBUyxFQUFFO1FBQ3BCRCxnQkFBZ0IsQ0FBQ2xjLFlBQVksQ0FBQ3EyQixFQUFFLENBQUN4aUIsSUFBSSxDQUFDNEgsUUFBUSxFQUFFO1VBQzlDNEksSUFBSSxFQUFFO1FBQ1IsQ0FBQyxDQUFDLENBQUM7UUFFSGdTLEVBQUUsQ0FBQzNHLEtBQUssR0FBR3BMLFVBQVUsQ0FBQ25JLFNBQVMsQ0FBQ2tJLElBQUksSUFBSXhRLElBQUksQ0FBQ3dRLElBQUksSUFBSSxNQUFNLENBQUM7UUFDNUQsSUFBSXRaLElBQUksR0FBRyxDQUFDO1VBQ1I1RyxDQUFDO1VBQ0R5MkIsRUFBRTtVQUNGcmdCLENBQUM7UUFFTCxJQUFJeEMsUUFBUSxDQUFDb0UsU0FBUyxDQUFDLEVBQUU7VUFDdkJBLFNBQVMsQ0FBQ2pZLE9BQU8sQ0FBQyxVQUFVbWMsS0FBSyxFQUFFO1lBQ2pDLE9BQU9nVyxFQUFFLENBQUMxNUIsRUFBRSxDQUFDcTVCLGFBQWEsRUFBRTNWLEtBQUssRUFBRSxHQUFHLENBQUM7VUFDekMsQ0FBQyxDQUFDO1VBQ0ZnVyxFQUFFLENBQUN6ZixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxNQUFNO1VBQ0xxRixJQUFJLEdBQUcsQ0FBQyxDQUFDO1VBRVQsS0FBS25hLENBQUMsSUFBSXFhLFNBQVMsRUFBRTtZQUNuQnJhLENBQUMsS0FBSyxNQUFNLElBQUlBLENBQUMsS0FBSyxVQUFVLElBQUlrNEIsY0FBYyxDQUFDbDRCLENBQUMsRUFBRXFhLFNBQVMsQ0FBQ3JhLENBQUMsQ0FBQyxFQUFFbWEsSUFBSSxFQUFFRSxTQUFTLENBQUMrZCxRQUFRLENBQUM7VUFDL0Y7VUFFQSxLQUFLcDRCLENBQUMsSUFBSW1hLElBQUksRUFBRTtZQUNkOVgsQ0FBQyxHQUFHOFgsSUFBSSxDQUFDbmEsQ0FBQyxDQUFDLENBQUNvaUIsSUFBSSxDQUFDLFVBQVUvZixDQUFDLEVBQUU3QixDQUFDLEVBQUU7Y0FDL0IsT0FBTzZCLENBQUMsQ0FBQ3RDLENBQUMsR0FBR1MsQ0FBQyxDQUFDVCxDQUFDO1lBQ2xCLENBQUMsQ0FBQztZQUNGa0osSUFBSSxHQUFHLENBQUM7WUFFUixLQUFLL0YsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHYixDQUFDLENBQUM5SCxNQUFNLEVBQUUySSxDQUFDLEVBQUUsRUFBRTtjQUM3QjQxQixFQUFFLEdBQUd6MkIsQ0FBQyxDQUFDYSxDQUFDLENBQUM7Y0FDVHVWLENBQUMsR0FBRztnQkFDRjhKLElBQUksRUFBRXVXLEVBQUUsQ0FBQ3g0QixDQUFDO2dCQUNWd1UsUUFBUSxFQUFFLENBQUNna0IsRUFBRSxDQUFDLzRCLENBQUMsSUFBSW1ELENBQUMsR0FBR2IsQ0FBQyxDQUFDYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNuRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHK1U7Y0FDbEQsQ0FBQztjQUNEMkQsQ0FBQyxDQUFDelksQ0FBQyxDQUFDLEdBQUc4NEIsRUFBRSxDQUFDcmdCLENBQUM7Y0FDWDhiLEVBQUUsQ0FBQzE1QixFQUFFLENBQUNxNUIsYUFBYSxFQUFFemIsQ0FBQyxFQUFFeFAsSUFBSSxDQUFDO2NBQzdCQSxJQUFJLElBQUl3UCxDQUFDLENBQUMzRCxRQUFRO1lBQ3BCO1VBQ0Y7VUFFQXlmLEVBQUUsQ0FBQ3pmLFFBQVEsQ0FBQyxDQUFDLEdBQUdBLFFBQVEsSUFBSXlmLEVBQUUsQ0FBQzE1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcENpYSxRQUFRLEVBQUVBLFFBQVEsR0FBR3lmLEVBQUUsQ0FBQ3pmLFFBQVEsQ0FBQztVQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ047TUFDRjs7TUFFQUEsUUFBUSxJQUFJMmpCLE1BQU0sQ0FBQzNqQixRQUFRLENBQUNBLFFBQVEsR0FBR3lmLEVBQUUsQ0FBQ3pmLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxNQUFNO01BQ0wyakIsTUFBTSxDQUFDcGIsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCOztJQUVBLElBQUl0SSxTQUFTLEtBQUssSUFBSSxJQUFJLENBQUNDLG1CQUFtQixFQUFFO01BQzlDaWYsaUJBQWlCLEdBQUdoZ0Isc0JBQXNCLENBQUN3a0IsTUFBTSxDQUFDO01BRWxEamlCLGVBQWUsQ0FBQ21kLFlBQVksQ0FBQ08sYUFBYSxDQUFDO01BRTNDRCxpQkFBaUIsR0FBRyxDQUFDO0lBQ3ZCO0lBRUF4VyxjQUFjLENBQUMzVSxNQUFNLEVBQUVtTCxzQkFBc0IsQ0FBQ3drQixNQUFNLENBQUMsRUFBRXZ2QixRQUFRLENBQUM7SUFFaEU2SSxJQUFJLENBQUMyZSxRQUFRLElBQUkrSCxNQUFNLENBQUM5SCxPQUFPLENBQUMsQ0FBQztJQUNqQzVlLElBQUksQ0FBQ2llLE1BQU0sSUFBSXlJLE1BQU0sQ0FBQ3pJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFFbEMsSUFBSWhVLGVBQWUsSUFBSSxDQUFDbEgsUUFBUSxJQUFJLENBQUN1RixTQUFTLElBQUlvZSxNQUFNLENBQUMvYyxNQUFNLEtBQUs5QyxhQUFhLENBQUM5UCxNQUFNLENBQUM0QyxLQUFLLENBQUMsSUFBSWtLLFdBQVcsQ0FBQ29HLGVBQWUsQ0FBQyxJQUFJRSxxQkFBcUIsQ0FBQ2pJLHNCQUFzQixDQUFDd2tCLE1BQU0sQ0FBQyxDQUFDLElBQUkzdkIsTUFBTSxDQUFDakosSUFBSSxLQUFLLFFBQVEsRUFBRTtNQUNwTjQ0QixNQUFNLENBQUNsYyxNQUFNLEdBQUcsQ0FBQ3JILFFBQVEsQ0FBQyxDQUFDOztNQUUzQnVqQixNQUFNLENBQUNwbEIsTUFBTSxDQUFDdFUsSUFBSSxDQUFDcWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQ3ptQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNDOztJQUVBa3NCLGFBQWEsSUFBSTVJLGNBQWMsQ0FBQ2hLLHNCQUFzQixDQUFDd2tCLE1BQU0sQ0FBQyxFQUFFNVIsYUFBYSxDQUFDO0lBQzlFLE9BQU80UixNQUFNO0VBQ2Y7RUFFQSxJQUFJTSxPQUFPLEdBQUc5WCxLQUFLLENBQUMxTSxTQUFTO0VBRTdCd2tCLE9BQU8sQ0FBQzFsQixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQzBJLFNBQVMsRUFBRXZFLGNBQWMsRUFBRTZCLEtBQUssRUFBRTtJQUNqRSxJQUFJa0csUUFBUSxHQUFHLElBQUksQ0FBQzdULEtBQUs7TUFDckI0bUIsSUFBSSxHQUFHLElBQUksQ0FBQ3ZWLEtBQUs7TUFDakIrQyxHQUFHLEdBQUcsSUFBSSxDQUFDblUsSUFBSTtNQUNmcXRCLFVBQVUsR0FBR2pkLFNBQVMsR0FBRyxDQUFDO01BQzFCVSxLQUFLLEdBQUdWLFNBQVMsR0FBR3VXLElBQUksR0FBR3BkLFFBQVEsSUFBSSxDQUFDOGpCLFVBQVUsR0FBRzFHLElBQUksR0FBR3ZXLFNBQVMsR0FBRzdHLFFBQVEsR0FBRyxDQUFDLEdBQUc2RyxTQUFTO01BQ2hHOVMsSUFBSTtNQUNKNUIsRUFBRTtNQUNGd1gsU0FBUztNQUNUbkMsYUFBYTtNQUNib0MsYUFBYTtNQUNiNE8sTUFBTTtNQUNOOXRCLEtBQUs7TUFDTHlkLFFBQVE7TUFDUnNRLFFBQVE7SUFFWixJQUFJLENBQUM3TixHQUFHLEVBQUU7TUFDUnBCLHdCQUF3QixDQUFDLElBQUksRUFBRTNDLFNBQVMsRUFBRXZFLGNBQWMsRUFBRTZCLEtBQUssQ0FBQztJQUNsRSxDQUFDLE1BQU0sSUFBSW9ELEtBQUssS0FBSyxJQUFJLENBQUNGLE1BQU0sSUFBSSxDQUFDUixTQUFTLElBQUkxQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUNDLFFBQVEsSUFBSSxJQUFJLENBQUNpRCxNQUFNLElBQUksSUFBSSxDQUFDaEQsUUFBUSxJQUFJLElBQUksQ0FBQ2lFLE1BQU0sR0FBRyxDQUFDLEtBQUt3YixVQUFVLEVBQUU7TUFDM0k7TUFDQS92QixJQUFJLEdBQUd3VCxLQUFLO01BQ1pZLFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVE7TUFFeEIsSUFBSSxJQUFJLENBQUNoQixPQUFPLEVBQUU7UUFDaEI7UUFDQUssYUFBYSxHQUFHb0QsR0FBRyxHQUFHLElBQUksQ0FBQ3RELE9BQU87UUFFbEMsSUFBSSxJQUFJLENBQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSTJjLFVBQVUsRUFBRTtVQUNuQyxPQUFPLElBQUksQ0FBQ2pkLFNBQVMsQ0FBQ1csYUFBYSxHQUFHLEdBQUcsR0FBR1gsU0FBUyxFQUFFdkUsY0FBYyxFQUFFNkIsS0FBSyxDQUFDO1FBQy9FO1FBRUFwUSxJQUFJLEdBQUcyUCxhQUFhLENBQUM2RCxLQUFLLEdBQUdDLGFBQWEsQ0FBQyxDQUFDLENBQUM7O1FBRTdDLElBQUlELEtBQUssS0FBSzZWLElBQUksRUFBRTtVQUNsQjtVQUNBelQsU0FBUyxHQUFHLElBQUksQ0FBQ3hDLE9BQU87VUFDeEJwVCxJQUFJLEdBQUc2VyxHQUFHO1FBQ1osQ0FBQyxNQUFNO1VBQ0xqQixTQUFTLEdBQUcsQ0FBQyxFQUFFcEMsS0FBSyxHQUFHQyxhQUFhLENBQUM7VUFFckMsSUFBSW1DLFNBQVMsSUFBSUEsU0FBUyxLQUFLcEMsS0FBSyxHQUFHQyxhQUFhLEVBQUU7WUFDcER6VCxJQUFJLEdBQUc2VyxHQUFHO1lBQ1ZqQixTQUFTLEVBQUU7VUFDYjtVQUVBNVYsSUFBSSxHQUFHNlcsR0FBRyxLQUFLN1csSUFBSSxHQUFHNlcsR0FBRyxDQUFDO1FBQzVCO1FBRUE0TixNQUFNLEdBQUcsSUFBSSxDQUFDM08sS0FBSyxJQUFJRixTQUFTLEdBQUcsQ0FBQztRQUVwQyxJQUFJNk8sTUFBTSxFQUFFO1VBQ1ZDLFFBQVEsR0FBRyxJQUFJLENBQUNFLE1BQU07VUFDdEI1a0IsSUFBSSxHQUFHNlcsR0FBRyxHQUFHN1csSUFBSTtRQUNuQjtRQUVBNlYsYUFBYSxHQUFHeEMsZUFBZSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxFQUFFRyxhQUFhLENBQUM7UUFFM0QsSUFBSXpULElBQUksS0FBS3NXLFFBQVEsSUFBSSxDQUFDbEcsS0FBSyxJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUFFO1VBQ2hEO1VBQ0EsSUFBSSxDQUFDaUQsTUFBTSxHQUFHRSxLQUFLO1VBQ25CLE9BQU8sSUFBSTtRQUNiO1FBRUEsSUFBSW9DLFNBQVMsS0FBS0MsYUFBYSxFQUFFO1VBQy9CekIsUUFBUSxJQUFJLElBQUksQ0FBQ3dRLE1BQU0sSUFBSUosa0JBQWtCLENBQUNwUSxRQUFRLEVBQUVxUSxNQUFNLENBQUMsQ0FBQyxDQUFDOztVQUVqRSxJQUFJLElBQUksQ0FBQzNiLElBQUksQ0FBQ2lOLGFBQWEsSUFBSSxDQUFDME8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDalAsS0FBSyxFQUFFO1lBQ3JELElBQUksQ0FBQ0EsS0FBSyxHQUFHcEYsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUV4QixJQUFJLENBQUNoRyxNQUFNLENBQUN1RixhQUFhLENBQUM4RCxhQUFhLEdBQUdtQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQ0ksVUFBVSxDQUFDLENBQUMsQ0FBQ1IsS0FBSyxHQUFHLENBQUM7VUFDcEY7UUFDRjtNQUNGO01BRUEsSUFBSSxDQUFDLElBQUksQ0FBQ25GLFFBQVEsRUFBRTtRQUNsQixJQUFJOEUsaUJBQWlCLENBQUMsSUFBSSxFQUFFNGEsVUFBVSxHQUFHamQsU0FBUyxHQUFHOVMsSUFBSSxFQUFFb1EsS0FBSyxFQUFFN0IsY0FBYyxFQUFFaUYsS0FBSyxDQUFDLEVBQUU7VUFDeEYsSUFBSSxDQUFDRixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1VBRWpCLE9BQU8sSUFBSTtRQUNiO1FBRUEsSUFBSWdELFFBQVEsS0FBSyxJQUFJLENBQUM3VCxLQUFLLEVBQUU7VUFDM0I7VUFDQSxPQUFPLElBQUk7UUFDYjtRQUVBLElBQUlvVSxHQUFHLEtBQUssSUFBSSxDQUFDblUsSUFBSSxFQUFFO1VBQ3JCO1VBQ0EsT0FBTyxJQUFJLENBQUMwSCxNQUFNLENBQUMwSSxTQUFTLEVBQUV2RSxjQUFjLEVBQUU2QixLQUFLLENBQUM7UUFDdEQ7TUFDRjtNQUVBLElBQUksQ0FBQ2tELE1BQU0sR0FBR0UsS0FBSztNQUNuQixJQUFJLENBQUMvUSxLQUFLLEdBQUd6QyxJQUFJO01BRWpCLElBQUksQ0FBQyxJQUFJLENBQUNzUyxJQUFJLElBQUksSUFBSSxDQUFDWSxHQUFHLEVBQUU7UUFDMUIsSUFBSSxDQUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBRWYsSUFBSSxDQUFDckMsS0FBSyxHQUFHLENBQUM7TUFDaEI7TUFFQSxJQUFJLENBQUN0WixLQUFLLEdBQUdBLEtBQUssR0FBRyxDQUFDK3RCLFFBQVEsSUFBSSxJQUFJLENBQUNDLEtBQUssRUFBRTNrQixJQUFJLEdBQUc2VyxHQUFHLENBQUM7TUFFekQsSUFBSSxJQUFJLENBQUNaLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQ3RmLEtBQUssR0FBR0EsS0FBSyxHQUFHLENBQUMsR0FBR0EsS0FBSztNQUNoQztNQUVBLElBQUlxSixJQUFJLElBQUksQ0FBQ3NXLFFBQVEsSUFBSSxDQUFDL0gsY0FBYyxJQUFJLENBQUNxSCxTQUFTLEVBQUU7UUFDdERPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDN0MsTUFBTSxLQUFLRSxLQUFLLEVBQUU7VUFDekI7VUFDQSxPQUFPLElBQUk7UUFDYjtNQUNGO01BRUFwVixFQUFFLEdBQUcsSUFBSSxDQUFDQyxHQUFHO01BRWIsT0FBT0QsRUFBRSxFQUFFO1FBQ1RBLEVBQUUsQ0FBQzBELENBQUMsQ0FBQ25MLEtBQUssRUFBRXlILEVBQUUsQ0FBQ3VGLENBQUMsQ0FBQztRQUNqQnZGLEVBQUUsR0FBR0EsRUFBRSxDQUFDd0QsS0FBSztNQUNmO01BRUF3UyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2hLLE1BQU0sQ0FBQzBJLFNBQVMsR0FBRyxDQUFDLEdBQUdBLFNBQVMsR0FBRyxDQUFDOVMsSUFBSSxJQUFJeWtCLE1BQU0sR0FBRyxDQUFDeFksUUFBUSxHQUFHbUksUUFBUSxDQUFDMVIsSUFBSSxHQUFHMFIsUUFBUSxDQUFDdVEsS0FBSyxDQUFDM2tCLElBQUksR0FBRyxJQUFJLENBQUMwQyxJQUFJLENBQUMsRUFBRTZMLGNBQWMsRUFBRTZCLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQ0UsUUFBUSxLQUFLLElBQUksQ0FBQ2lFLE1BQU0sR0FBR3pCLFNBQVMsQ0FBQztNQUU1TSxJQUFJLElBQUksQ0FBQ29ELFNBQVMsSUFBSSxDQUFDM0gsY0FBYyxFQUFFO1FBQ3JDd2hCLFVBQVUsSUFBSWxkLGNBQWMsQ0FBQyxJQUFJLEVBQUVDLFNBQVMsRUFBRXZFLGNBQWMsRUFBRTZCLEtBQUssQ0FBQyxDQUFDLENBQUM7O1FBRXRFK0YsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7TUFDN0I7TUFFQSxJQUFJLENBQUMvQyxPQUFPLElBQUl3QyxTQUFTLEtBQUtDLGFBQWEsSUFBSSxJQUFJLENBQUMvTSxJQUFJLENBQUM4Z0IsUUFBUSxJQUFJLENBQUNyYixjQUFjLElBQUksSUFBSSxDQUFDMU8sTUFBTSxJQUFJc1csU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7TUFFbEksSUFBSSxDQUFDM0MsS0FBSyxLQUFLLElBQUksQ0FBQ00sS0FBSyxJQUFJLENBQUNOLEtBQUssS0FBSyxJQUFJLENBQUNGLE1BQU0sS0FBS0UsS0FBSyxFQUFFO1FBQzdEdWMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDN1osU0FBUyxJQUFJckQsY0FBYyxDQUFDLElBQUksRUFBRUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDNUUsQ0FBQ0EsU0FBUyxJQUFJLENBQUMrRCxHQUFHLE1BQU1yRCxLQUFLLEtBQUssSUFBSSxDQUFDTSxLQUFLLElBQUksSUFBSSxDQUFDWixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUNNLEtBQUssSUFBSSxJQUFJLENBQUNOLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSWhCLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUV2SCxJQUFJLENBQUMzRCxjQUFjLElBQUksRUFBRXdoQixVQUFVLElBQUksQ0FBQ3paLFFBQVEsQ0FBQyxLQUFLOUMsS0FBSyxJQUFJOEMsUUFBUSxJQUFJbU8sTUFBTSxDQUFDLEVBQUU7VUFDbEY7VUFDQXRPLFNBQVMsQ0FBQyxJQUFJLEVBQUUzQyxLQUFLLEtBQUs2VixJQUFJLEdBQUcsWUFBWSxHQUFHLG1CQUFtQixFQUFFLElBQUksQ0FBQztVQUUxRSxJQUFJLENBQUNqVCxLQUFLLElBQUksRUFBRTVDLEtBQUssR0FBRzZWLElBQUksSUFBSSxJQUFJLENBQUN6VSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFO01BQ0Y7SUFDRjtJQUVBLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFRDBaLE9BQU8sQ0FBQ3ptQixPQUFPLEdBQUcsU0FBU0EsT0FBT0EsQ0FBQSxFQUFHO0lBQ25DLE9BQU8sSUFBSSxDQUFDK2hCLFFBQVE7RUFDdEIsQ0FBQztFQUVEMEUsT0FBTyxDQUFDOVosVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUNzVyxJQUFJLEVBQUU7SUFDN0M7SUFDQSxDQUFDLENBQUNBLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ3hqQixJQUFJLENBQUNpUCxZQUFZLE1BQU0sSUFBSSxDQUFDekgsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUNqUyxHQUFHLEdBQUcsSUFBSSxDQUFDbXdCLEdBQUcsR0FBRyxJQUFJLENBQUN0WSxTQUFTLEdBQUcsSUFBSSxDQUFDakcsS0FBSyxHQUFHLElBQUksQ0FBQ3RaLEtBQUssR0FBRyxDQUFDO0lBQ2xFLElBQUksQ0FBQ2l3QixTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUN4UyxRQUFRLElBQUksSUFBSSxDQUFDQSxRQUFRLENBQUM0QixVQUFVLENBQUNzVyxJQUFJLENBQUM7SUFDL0MsT0FBT2dELFdBQVcsQ0FBQ2hrQixTQUFTLENBQUMwSyxVQUFVLENBQUN4YyxJQUFJLENBQUMsSUFBSSxFQUFFOHlCLElBQUksQ0FBQztFQUMxRCxDQUFDO0VBRUR3RCxPQUFPLENBQUNFLE9BQU8sR0FBRyxTQUFTQSxPQUFPQSxDQUFDbDRCLFFBQVEsRUFBRUwsS0FBSyxFQUFFZ0osS0FBSyxFQUFFa3VCLGVBQWUsRUFBRTtJQUMxRXpOLGFBQWEsSUFBSXhzQixPQUFPLENBQUNpdUIsSUFBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDelAsR0FBRyxJQUFJLElBQUksQ0FBQ3NVLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUl4bkIsSUFBSSxHQUFHbEssSUFBSSxDQUFDb2lCLEdBQUcsQ0FBQyxJQUFJLENBQUN4VixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM0TyxHQUFHLENBQUM3TyxLQUFLLEdBQUcsSUFBSSxDQUFDZ1EsTUFBTSxJQUFJLElBQUksQ0FBQ1MsR0FBRyxDQUFDO01BQ3JFdmMsS0FBSztJQUNULElBQUksQ0FBQzBaLFFBQVEsSUFBSStFLFVBQVUsQ0FBQyxJQUFJLEVBQUVwVixJQUFJLENBQUM7SUFDdkNySixLQUFLLEdBQUcsSUFBSSxDQUFDZ3VCLEtBQUssQ0FBQzNrQixJQUFJLEdBQUcsSUFBSSxDQUFDMEMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLElBQUlnc0IsaUJBQWlCLENBQUMsSUFBSSxFQUFFNTJCLFFBQVEsRUFBRUwsS0FBSyxFQUFFZ0osS0FBSyxFQUFFa3VCLGVBQWUsRUFBRWg0QixLQUFLLEVBQUVxSixJQUFJLENBQUMsRUFBRTtNQUNqRixPQUFPLElBQUksQ0FBQ2d3QixPQUFPLENBQUNsNEIsUUFBUSxFQUFFTCxLQUFLLEVBQUVnSixLQUFLLEVBQUVrdUIsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUM7O0lBR0YxYSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUV2QixJQUFJLENBQUNwVSxNQUFNLElBQUk2UixrQkFBa0IsQ0FBQyxJQUFJLENBQUNKLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQ3VELEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25HLE9BQU8sSUFBSSxDQUFDekssTUFBTSxDQUFDLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBRUQwbEIsT0FBTyxDQUFDdGhCLElBQUksR0FBRyxTQUFTQSxJQUFJQSxDQUFDbkYsT0FBTyxFQUFFUCxJQUFJLEVBQUU7SUFDMUMsSUFBSUEsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ25CQSxJQUFJLEdBQUcsS0FBSztJQUNkO0lBRUEsSUFBSSxDQUFDTyxPQUFPLEtBQUssQ0FBQ1AsSUFBSSxJQUFJQSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDekMsSUFBSSxDQUFDbUgsS0FBSyxHQUFHLElBQUksQ0FBQzVSLEdBQUcsR0FBRyxDQUFDO01BQ3pCLE9BQU8sSUFBSSxDQUFDd0IsTUFBTSxHQUFHOGQsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7SUFDOUM7SUFFQSxJQUFJLElBQUksQ0FBQ3ZKLFFBQVEsRUFBRTtNQUNqQixJQUFJaVYsSUFBSSxHQUFHLElBQUksQ0FBQ2pWLFFBQVEsQ0FBQ3hCLGFBQWEsQ0FBQyxDQUFDO01BQ3hDLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ3NXLFlBQVksQ0FBQ3JoQixPQUFPLEVBQUVQLElBQUksRUFBRWtpQixpQkFBaUIsSUFBSUEsaUJBQWlCLENBQUNsaUIsSUFBSSxDQUFDZ0QsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDeUssTUFBTSxJQUFJb0gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O01BRXRJLElBQUksQ0FBQzlkLE1BQU0sSUFBSXdwQixJQUFJLEtBQUssSUFBSSxDQUFDalYsUUFBUSxDQUFDeEIsYUFBYSxDQUFDLENBQUMsSUFBSTZELFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDL1QsSUFBSSxHQUFHLElBQUksQ0FBQzBSLFFBQVEsQ0FBQ04sS0FBSyxHQUFHdVYsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUUzSCxPQUFPLElBQUk7SUFDYjtJQUVBLElBQUk0QixhQUFhLEdBQUcsSUFBSSxDQUFDRyxRQUFRO01BQzdCNkUsY0FBYyxHQUFHNW1CLE9BQU8sR0FBR2tHLE9BQU8sQ0FBQ2xHLE9BQU8sQ0FBQyxHQUFHNGhCLGFBQWE7TUFDM0RpRixlQUFlLEdBQUcsSUFBSSxDQUFDdEosU0FBUztNQUNoQ3VKLE9BQU8sR0FBRyxJQUFJLENBQUM5eEIsR0FBRztNQUNsQit4QixnQkFBZ0I7TUFDaEJDLFNBQVM7TUFDVEMsaUJBQWlCO01BQ2pCNzJCLEtBQUs7TUFDTDFDLENBQUM7TUFDRHFILEVBQUU7TUFDRm5FLENBQUM7SUFFTCxJQUFJLENBQUMsQ0FBQzZPLElBQUksSUFBSUEsSUFBSSxLQUFLLEtBQUssS0FBS3lJLFlBQVksQ0FBQzBaLGFBQWEsRUFBRWdGLGNBQWMsQ0FBQyxFQUFFO01BQzVFbm5CLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDekssR0FBRyxHQUFHLENBQUMsQ0FBQztNQUNoQyxPQUFPc2YsVUFBVSxDQUFDLElBQUksQ0FBQztJQUN6QjtJQUVBeVMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQ0EsR0FBRyxJQUFJLEVBQUU7SUFFNUMsSUFBSTFsQixJQUFJLEtBQUssS0FBSyxFQUFFO01BQ2xCO01BQ0EsSUFBSWpWLFNBQVMsQ0FBQ2lWLElBQUksQ0FBQyxFQUFFO1FBQ25CL1IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVOOUMsWUFBWSxDQUFDNlUsSUFBSSxFQUFFLFVBQVVILElBQUksRUFBRTtVQUNqQyxPQUFPNVIsQ0FBQyxDQUFDNFIsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUM7UUFFRkcsSUFBSSxHQUFHL1IsQ0FBQztNQUNWO01BRUErUixJQUFJLEdBQUdpbUIsaUJBQWlCLENBQUM5RCxhQUFhLEVBQUVuaUIsSUFBSSxDQUFDO0lBQy9DO0lBRUE3TyxDQUFDLEdBQUdneEIsYUFBYSxDQUFDMzVCLE1BQU07SUFFeEIsT0FBTzJJLENBQUMsRUFBRSxFQUFFO01BQ1YsSUFBSSxDQUFDZzJCLGNBQWMsQ0FBQ2gzQixPQUFPLENBQUNneUIsYUFBYSxDQUFDaHhCLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDN0NvMkIsU0FBUyxHQUFHSCxlQUFlLENBQUNqMkIsQ0FBQyxDQUFDO1FBRTlCLElBQUk2TyxJQUFJLEtBQUssS0FBSyxFQUFFO1VBQ2xCc25CLGdCQUFnQixDQUFDbjJCLENBQUMsQ0FBQyxHQUFHNk8sSUFBSTtVQUMxQnJQLEtBQUssR0FBRzQyQixTQUFTO1VBQ2pCQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxNQUFNO1VBQ0xBLGlCQUFpQixHQUFHRixnQkFBZ0IsQ0FBQ24yQixDQUFDLENBQUMsR0FBR20yQixnQkFBZ0IsQ0FBQ24yQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7VUFDbkVSLEtBQUssR0FBR3FQLElBQUk7UUFDZDtRQUVBLEtBQUsvUixDQUFDLElBQUkwQyxLQUFLLEVBQUU7VUFDZjJFLEVBQUUsR0FBR2l5QixTQUFTLElBQUlBLFNBQVMsQ0FBQ3Q1QixDQUFDLENBQUM7VUFFOUIsSUFBSXFILEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNLElBQUlBLEVBQUUsQ0FBQ3VGLENBQUMsQ0FBQyxJQUFJdkYsRUFBRSxDQUFDdUYsQ0FBQyxDQUFDNkssSUFBSSxDQUFDelgsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2NBQzlDN0IscUJBQXFCLENBQUMsSUFBSSxFQUFFa0osRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN4QztZQUVBLE9BQU9peUIsU0FBUyxDQUFDdDVCLENBQUMsQ0FBQztVQUNyQjtVQUVBLElBQUl1NUIsaUJBQWlCLEtBQUssS0FBSyxFQUFFO1lBQy9CQSxpQkFBaUIsQ0FBQ3Y1QixDQUFDLENBQUMsR0FBRyxDQUFDO1VBQzFCO1FBQ0Y7TUFDRjtJQUNGO0lBRUEsSUFBSSxDQUFDc1osUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDaFMsR0FBRyxJQUFJOHhCLE9BQU8sSUFBSXhTLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztJQUUzRCxPQUFPLElBQUk7RUFDYixDQUFDO0VBRUQzRixLQUFLLENBQUNwbUIsRUFBRSxHQUFHLFNBQVNBLEVBQUVBLENBQUN5WCxPQUFPLEVBQUVQLElBQUksRUFBRTtJQUNwQyxPQUFPLElBQUlrUCxLQUFLLENBQUMzTyxPQUFPLEVBQUVQLElBQUksRUFBRUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQy9DLENBQUM7RUFFRGlQLEtBQUssQ0FBQ3htQixJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQzZYLE9BQU8sRUFBRVAsSUFBSSxFQUFFO0lBQ3hDLE9BQU80TyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUzTyxTQUFTLENBQUM7RUFDdkMsQ0FBQztFQUVEaVAsS0FBSyxDQUFDNFEsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUNsM0IsS0FBSyxFQUFFNHJCLFFBQVEsRUFBRTNGLE1BQU0sRUFBRTlKLEtBQUssRUFBRTtJQUN2RSxPQUFPLElBQUltSyxLQUFLLENBQUNzRixRQUFRLEVBQUUsQ0FBQyxFQUFFO01BQzVCdkssZUFBZSxFQUFFLEtBQUs7TUFDdEJzQyxJQUFJLEVBQUUsS0FBSztNQUNYdkosU0FBUyxFQUFFLEtBQUs7TUFDaEJwYSxLQUFLLEVBQUVBLEtBQUs7TUFDWnUzQixVQUFVLEVBQUUzTCxRQUFRO01BQ3BCaVQsaUJBQWlCLEVBQUVqVCxRQUFRO01BQzNCNEwsZ0JBQWdCLEVBQUV2UixNQUFNO01BQ3hCNlksdUJBQXVCLEVBQUU3WSxNQUFNO01BQy9CK0YsYUFBYSxFQUFFN1A7SUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNOLENBQUM7O0VBRURtSyxLQUFLLENBQUN5USxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQ3BmLE9BQU8sRUFBRXFmLFFBQVEsRUFBRUMsTUFBTSxFQUFFO0lBQ3hELE9BQU9qUixnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUzTyxTQUFTLENBQUM7RUFDdkMsQ0FBQztFQUVEaVAsS0FBSyxDQUFDbmhCLEdBQUcsR0FBRyxTQUFTQSxHQUFHQSxDQUFDd1MsT0FBTyxFQUFFUCxJQUFJLEVBQUU7SUFDdENBLElBQUksQ0FBQytDLFFBQVEsR0FBRyxDQUFDO0lBQ2pCL0MsSUFBSSxDQUFDNk0sV0FBVyxLQUFLN00sSUFBSSxDQUFDOE4sTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyQyxPQUFPLElBQUlvQixLQUFLLENBQUMzTyxPQUFPLEVBQUVQLElBQUksQ0FBQztFQUNqQyxDQUFDO0VBRURrUCxLQUFLLENBQUMwUyxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ3JoQixPQUFPLEVBQUU1UCxLQUFLLEVBQUVxeEIsVUFBVSxFQUFFO0lBQ3JFLE9BQU92ZCxlQUFlLENBQUNtZCxZQUFZLENBQUNyaEIsT0FBTyxFQUFFNVAsS0FBSyxFQUFFcXhCLFVBQVUsQ0FBQztFQUNqRSxDQUFDO0VBRUQsT0FBTzlTLEtBQUs7QUFDZCxDQUFDLENBQUN1TyxTQUFTLENBQUM7QUFFWnR4QixZQUFZLENBQUMraUIsS0FBSyxDQUFDMU0sU0FBUyxFQUFFO0VBQzVCOGYsUUFBUSxFQUFFLEVBQUU7RUFDWm5iLEtBQUssRUFBRSxDQUFDO0VBQ1JLLFFBQVEsRUFBRSxDQUFDO0VBQ1hrZSxHQUFHLEVBQUUsQ0FBQztFQUNOQyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0F4NkIsWUFBWSxDQUFDLHFDQUFxQyxFQUFFLFVBQVUwVSxJQUFJLEVBQUU7RUFDbEVxUCxLQUFLLENBQUNyUCxJQUFJLENBQUMsR0FBRyxZQUFZO0lBQ3hCLElBQUkyaUIsRUFBRSxHQUFHLElBQUl0VSxRQUFRLENBQUMsQ0FBQztNQUNuQlcsTUFBTSxHQUFHVSxNQUFNLENBQUM3ZSxJQUFJLENBQUN1UCxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBRXRDNE8sTUFBTSxDQUFDckksTUFBTSxDQUFDM0csSUFBSSxLQUFLLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsT0FBTzJpQixFQUFFLENBQUMzaUIsSUFBSSxDQUFDLENBQUNrUSxLQUFLLENBQUN5UyxFQUFFLEVBQUUzVCxNQUFNLENBQUM7RUFDbkMsQ0FBQztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBSXlWLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxDQUFDdjFCLE1BQU0sRUFBRUMsUUFBUSxFQUFFTCxLQUFLLEVBQUU7SUFDaEUsT0FBT0ksTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBR0wsS0FBSztFQUNqQyxDQUFDO0VBQ0c2MUIsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLENBQUN6MUIsTUFBTSxFQUFFQyxRQUFRLEVBQUVMLEtBQUssRUFBRTtJQUM5RCxPQUFPSSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDTCxLQUFLLENBQUM7RUFDaEMsQ0FBQztFQUNHNDFCLG9CQUFvQixHQUFHLFNBQVNBLG9CQUFvQkEsQ0FBQ3gxQixNQUFNLEVBQUVDLFFBQVEsRUFBRUwsS0FBSyxFQUFFYixJQUFJLEVBQUU7SUFDdEYsT0FBT2lCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNsQixJQUFJLENBQUNvMkIsRUFBRSxFQUFFdjFCLEtBQUssQ0FBQztFQUN6QyxDQUFDO0VBQ0dnNUIsZ0JBQWdCLEdBQUcsU0FBU0EsZ0JBQWdCQSxDQUFDNTRCLE1BQU0sRUFBRUMsUUFBUSxFQUFFTCxLQUFLLEVBQUU7SUFDeEUsT0FBT0ksTUFBTSxDQUFDd0MsWUFBWSxDQUFDdkMsUUFBUSxFQUFFTCxLQUFLLENBQUM7RUFDN0MsQ0FBQztFQUNHNUMsVUFBVSxHQUFHLFNBQVNBLFVBQVVBLENBQUNnRCxNQUFNLEVBQUVDLFFBQVEsRUFBRTtJQUNyRCxPQUFPMFUsV0FBVyxDQUFDM1UsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxHQUFHdzFCLFdBQVcsR0FBR3g1QixZQUFZLENBQUMrRCxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLElBQUlELE1BQU0sQ0FBQ3dDLFlBQVksR0FBR28yQixnQkFBZ0IsR0FBR3JELFlBQVk7RUFDOUksQ0FBQztFQUNHSyxZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQzkyQixLQUFLLEVBQUVDLElBQUksRUFBRTtJQUNwRCxPQUFPQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxDQUFDLEVBQUVGLElBQUksQ0FBQ0csQ0FBQyxFQUFFakIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDLENBQUNKLElBQUksQ0FBQ0ssQ0FBQyxHQUFHTCxJQUFJLENBQUNNLENBQUMsR0FBR1AsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRUMsSUFBSSxDQUFDO0VBQ2xHLENBQUM7RUFDRzQyQixjQUFjLEdBQUcsU0FBU0EsY0FBY0EsQ0FBQzcyQixLQUFLLEVBQUVDLElBQUksRUFBRTtJQUN4RCxPQUFPQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxDQUFDLEVBQUVGLElBQUksQ0FBQ0csQ0FBQyxFQUFFLENBQUMsRUFBRUgsSUFBSSxDQUFDSyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sQ0FBQyxHQUFHUCxLQUFLLENBQUMsRUFBRUMsSUFBSSxDQUFDO0VBQ3BFLENBQUM7RUFDRzdDLG9CQUFvQixHQUFHLFNBQVNBLG9CQUFvQkEsQ0FBQzRDLEtBQUssRUFBRUMsSUFBSSxFQUFFO0lBQ3BFLElBQUl3SCxFQUFFLEdBQUd4SCxJQUFJLENBQUN5SCxHQUFHO01BQ2JwSCxDQUFDLEdBQUcsRUFBRTtJQUVWLElBQUksQ0FBQ04sS0FBSyxJQUFJQyxJQUFJLENBQUNXLENBQUMsRUFBRTtNQUNwQjtNQUNBTixDQUFDLEdBQUdMLElBQUksQ0FBQ1csQ0FBQztJQUNaLENBQUMsTUFBTSxJQUFJWixLQUFLLEtBQUssQ0FBQyxJQUFJQyxJQUFJLENBQUNTLENBQUMsRUFBRTtNQUNoQztNQUNBSixDQUFDLEdBQUdMLElBQUksQ0FBQ1MsQ0FBQztJQUNaLENBQUMsTUFBTTtNQUNMLE9BQU8rRyxFQUFFLEVBQUU7UUFDVG5ILENBQUMsR0FBR21ILEVBQUUsQ0FBQ3JILENBQUMsSUFBSXFILEVBQUUsQ0FBQ3lELENBQUMsR0FBR3pELEVBQUUsQ0FBQ3lELENBQUMsQ0FBQ3pELEVBQUUsQ0FBQ25ILENBQUMsR0FBR21ILEVBQUUsQ0FBQ2xILENBQUMsR0FBR1AsS0FBSyxDQUFDLEdBQUdiLElBQUksQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDb0gsRUFBRSxDQUFDbkgsQ0FBQyxHQUFHbUgsRUFBRSxDQUFDbEgsQ0FBQyxHQUFHUCxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdNLENBQUMsQ0FBQyxDQUFDOztRQUV2R21ILEVBQUUsR0FBR0EsRUFBRSxDQUFDd0QsS0FBSztNQUNmO01BRUEzSyxDQUFDLElBQUlMLElBQUksQ0FBQ00sQ0FBQyxDQUFDLENBQUM7SUFDZjs7SUFFQU4sSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQ0UsQ0FBQyxFQUFFRixJQUFJLENBQUNHLENBQUMsRUFBRUUsQ0FBQyxFQUFFTCxJQUFJLENBQUM7RUFDbkMsQ0FBQztFQUNHbW1CLGlCQUFpQixHQUFHLFNBQVNBLGlCQUFpQkEsQ0FBQ3BtQixLQUFLLEVBQUVDLElBQUksRUFBRTtJQUM5RCxJQUFJd0gsRUFBRSxHQUFHeEgsSUFBSSxDQUFDeUgsR0FBRztJQUVqQixPQUFPRCxFQUFFLEVBQUU7TUFDVEEsRUFBRSxDQUFDMEQsQ0FBQyxDQUFDbkwsS0FBSyxFQUFFeUgsRUFBRSxDQUFDdUYsQ0FBQyxDQUFDO01BQ2pCdkYsRUFBRSxHQUFHQSxFQUFFLENBQUN3RCxLQUFLO0lBQ2Y7RUFDRixDQUFDO0VBQ0cwYyxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLENBQUNELFFBQVEsRUFBRTdiLEtBQUssRUFBRTNLLE1BQU0sRUFBRUMsUUFBUSxFQUFFO0lBQ3RGLElBQUlzRyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxHQUFHO01BQ2I0VCxJQUFJO0lBRVIsT0FBTzdULEVBQUUsRUFBRTtNQUNUNlQsSUFBSSxHQUFHN1QsRUFBRSxDQUFDd0QsS0FBSztNQUNmeEQsRUFBRSxDQUFDckgsQ0FBQyxLQUFLZSxRQUFRLElBQUlzRyxFQUFFLENBQUNpZ0IsUUFBUSxDQUFDQSxRQUFRLEVBQUU3YixLQUFLLEVBQUUzSyxNQUFNLENBQUM7TUFDekR1RyxFQUFFLEdBQUc2VCxJQUFJO0lBQ1g7RUFDRixDQUFDO0VBQ0dtTSxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLENBQUN0bUIsUUFBUSxFQUFFO0lBQzNELElBQUlzRyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxHQUFHO01BQ2JxeUIsd0JBQXdCO01BQ3hCemUsSUFBSTtJQUVSLE9BQU83VCxFQUFFLEVBQUU7TUFDVDZULElBQUksR0FBRzdULEVBQUUsQ0FBQ3dELEtBQUs7TUFFZixJQUFJeEQsRUFBRSxDQUFDckgsQ0FBQyxLQUFLZSxRQUFRLElBQUksQ0FBQ3NHLEVBQUUsQ0FBQ3V5QixFQUFFLElBQUl2eUIsRUFBRSxDQUFDdXlCLEVBQUUsS0FBSzc0QixRQUFRLEVBQUU7UUFDckQ1QyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUVrSixFQUFFLEVBQUUsS0FBSyxDQUFDO01BQ3hDLENBQUMsTUFBTSxJQUFJLENBQUNBLEVBQUUsQ0FBQzhMLEdBQUcsRUFBRTtRQUNsQndtQix3QkFBd0IsR0FBRyxDQUFDO01BQzlCO01BRUF0eUIsRUFBRSxHQUFHNlQsSUFBSTtJQUNYO0lBRUEsT0FBTyxDQUFDeWUsd0JBQXdCO0VBQ2xDLENBQUM7RUFDR0UsbUJBQW1CLEdBQUcsU0FBU0EsbUJBQW1CQSxDQUFDLzRCLE1BQU0sRUFBRUMsUUFBUSxFQUFFTCxLQUFLLEVBQUViLElBQUksRUFBRTtJQUNwRkEsSUFBSSxDQUFDaTZCLElBQUksQ0FBQ2g1QixNQUFNLEVBQUVDLFFBQVEsRUFBRWxCLElBQUksQ0FBQ2lMLENBQUMsQ0FBQ3JJLElBQUksQ0FBQzVDLElBQUksQ0FBQzRMLEtBQUssRUFBRS9LLEtBQUssRUFBRWIsSUFBSSxDQUFDazZCLEVBQUUsQ0FBQyxFQUFFbDZCLElBQUksQ0FBQztFQUM1RSxDQUFDO0VBQ0cxQyx5QkFBeUIsR0FBRyxTQUFTQSx5QkFBeUJBLENBQUMyTCxNQUFNLEVBQUU7SUFDekUsSUFBSXpCLEVBQUUsR0FBR3lCLE1BQU0sQ0FBQ3hCLEdBQUc7TUFDZjRULElBQUk7TUFDSjhlLEdBQUc7TUFDSEMsS0FBSztNQUNMQyxJQUFJLENBQUMsQ0FBQzs7SUFFVixPQUFPN3lCLEVBQUUsRUFBRTtNQUNUNlQsSUFBSSxHQUFHN1QsRUFBRSxDQUFDd0QsS0FBSztNQUNmbXZCLEdBQUcsR0FBR0MsS0FBSztNQUVYLE9BQU9ELEdBQUcsSUFBSUEsR0FBRyxDQUFDbHVCLEVBQUUsR0FBR3pFLEVBQUUsQ0FBQ3lFLEVBQUUsRUFBRTtRQUM1Qmt1QixHQUFHLEdBQUdBLEdBQUcsQ0FBQ252QixLQUFLO01BQ2pCO01BRUEsSUFBSXhELEVBQUUsQ0FBQzRULEtBQUssR0FBRytlLEdBQUcsR0FBR0EsR0FBRyxDQUFDL2UsS0FBSyxHQUFHaWYsSUFBSSxFQUFFO1FBQ3JDN3lCLEVBQUUsQ0FBQzRULEtBQUssQ0FBQ3BRLEtBQUssR0FBR3hELEVBQUU7TUFDckIsQ0FBQyxNQUFNO1FBQ0w0eUIsS0FBSyxHQUFHNXlCLEVBQUU7TUFDWjtNQUVBLElBQUlBLEVBQUUsQ0FBQ3dELEtBQUssR0FBR212QixHQUFHLEVBQUU7UUFDbEJBLEdBQUcsQ0FBQy9lLEtBQUssR0FBRzVULEVBQUU7TUFDaEIsQ0FBQyxNQUFNO1FBQ0w2eUIsSUFBSSxHQUFHN3lCLEVBQUU7TUFDWDtNQUVBQSxFQUFFLEdBQUc2VCxJQUFJO0lBQ1g7SUFFQXBTLE1BQU0sQ0FBQ3hCLEdBQUcsR0FBRzJ5QixLQUFLO0VBQ3BCLENBQUMsQ0FBQyxDQUFDOztBQUdJLElBQUl4OEIsU0FBUyxHQUFHLGFBQWEsWUFBWTtFQUM5QyxTQUFTQSxTQUFTQSxDQUFDeWQsSUFBSSxFQUFFcGEsTUFBTSxFQUFFMkksSUFBSSxFQUFFQyxLQUFLLEVBQUV5SCxNQUFNLEVBQUVncEIsUUFBUSxFQUFFdDZCLElBQUksRUFBRSsxQixNQUFNLEVBQUVrQixRQUFRLEVBQUU7SUFDdEYsSUFBSSxDQUFDLzJCLENBQUMsR0FBR2UsTUFBTTtJQUNmLElBQUksQ0FBQ1osQ0FBQyxHQUFHd0osS0FBSztJQUNkLElBQUksQ0FBQ3ZKLENBQUMsR0FBR2dSLE1BQU07SUFDZixJQUFJLENBQUNuUixDQUFDLEdBQUd5SixJQUFJO0lBQ2IsSUFBSSxDQUFDc0IsQ0FBQyxHQUFHb3ZCLFFBQVEsSUFBSXpELFlBQVk7SUFDakMsSUFBSSxDQUFDOXBCLENBQUMsR0FBRy9NLElBQUksSUFBSSxJQUFJO0lBQ3JCLElBQUksQ0FBQ0MsR0FBRyxHQUFHODFCLE1BQU0sSUFBSVMsWUFBWTtJQUNqQyxJQUFJLENBQUN2cUIsRUFBRSxHQUFHZ3JCLFFBQVEsSUFBSSxDQUFDO0lBQ3ZCLElBQUksQ0FBQ2pzQixLQUFLLEdBQUdxUSxJQUFJO0lBRWpCLElBQUlBLElBQUksRUFBRTtNQUNSQSxJQUFJLENBQUNELEtBQUssR0FBRyxJQUFJO0lBQ25CO0VBQ0Y7RUFFQSxJQUFJbWYsT0FBTyxHQUFHMzhCLFNBQVMsQ0FBQzhXLFNBQVM7RUFFakM2bEIsT0FBTyxDQUFDOVMsUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUMzTyxJQUFJLEVBQUVsTixLQUFLLEVBQUUzSyxNQUFNLEVBQUU7SUFDeEQsSUFBSSxDQUFDZzVCLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksSUFBSSxJQUFJLENBQUNoNkIsR0FBRyxDQUFDLENBQUM7O0lBRW5DLElBQUksQ0FBQ0EsR0FBRyxHQUFHKzVCLG1CQUFtQjtJQUM5QixJQUFJLENBQUMvdUIsQ0FBQyxHQUFHNk4sSUFBSTtJQUNiLElBQUksQ0FBQ29oQixFQUFFLEdBQUdqNUIsTUFBTSxDQUFDLENBQUM7O0lBRWxCLElBQUksQ0FBQzJLLEtBQUssR0FBR0EsS0FBSztFQUNwQixDQUFDO0VBRUQsT0FBT2hPLFNBQVM7QUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVMUCxZQUFZLENBQUNpYixjQUFjLEdBQUcscU9BQXFPLEVBQUUsVUFBVXZHLElBQUksRUFBRTtFQUNuUixPQUFPZ0csY0FBYyxDQUFDaEcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRjhFLFFBQVEsQ0FBQzJqQixRQUFRLEdBQUczakIsUUFBUSxDQUFDNGpCLFNBQVMsR0FBR3JaLEtBQUs7QUFDOUN2SyxRQUFRLENBQUM2akIsWUFBWSxHQUFHN2pCLFFBQVEsQ0FBQzhqQixXQUFXLEdBQUd2YSxRQUFRO0FBQ3ZEekosZUFBZSxHQUFHLElBQUl5SixRQUFRLENBQUM7RUFDN0J1UixZQUFZLEVBQUUsS0FBSztFQUNuQjdYLFFBQVEsRUFBRTlFLFNBQVM7RUFDbkJ3RyxrQkFBa0IsRUFBRSxJQUFJO0VBQ3hCMWhCLEVBQUUsRUFBRSxNQUFNO0VBQ1Z3akIsaUJBQWlCLEVBQUU7QUFDckIsQ0FBQyxDQUFDO0FBQ0Z6ZixPQUFPLENBQUNtNEIsWUFBWSxHQUFHejRCLGtCQUFrQjtBQUV6QyxJQUFJcTlCLE1BQU0sR0FBRyxFQUFFO0VBQ1g1UCxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ2Y2UCxXQUFXLEdBQUcsRUFBRTtFQUNoQkMsY0FBYyxHQUFHLENBQUM7RUFDbEJDLFVBQVUsR0FBRyxDQUFDO0VBQ2RDLFNBQVMsR0FBRyxTQUFTQSxTQUFTQSxDQUFDMzJCLElBQUksRUFBRTtJQUN2QyxPQUFPLENBQUMybUIsVUFBVSxDQUFDM21CLElBQUksQ0FBQyxJQUFJdzJCLFdBQVcsRUFBRXR1QixHQUFHLENBQUMsVUFBVVMsQ0FBQyxFQUFFO01BQ3hELE9BQU9BLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNHaXVCLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxDQUFBLEVBQUc7SUFDN0MsSUFBSTd4QixJQUFJLEdBQUdvaEIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUNqQnlRLE9BQU8sR0FBRyxFQUFFO0lBRWhCLElBQUk5eEIsSUFBSSxHQUFHMHhCLGNBQWMsR0FBRyxDQUFDLEVBQUU7TUFDN0JFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztNQUUzQkosTUFBTSxDQUFDcjRCLE9BQU8sQ0FBQyxVQUFVakMsQ0FBQyxFQUFFO1FBQzFCLElBQUk2NkIsT0FBTyxHQUFHNzZCLENBQUMsQ0FBQzY2QixPQUFPO1VBQ25CQyxVQUFVLEdBQUc5NkIsQ0FBQyxDQUFDODZCLFVBQVU7VUFDekJ6d0IsS0FBSztVQUNMeEssQ0FBQztVQUNEazdCLFFBQVE7VUFDUkMsT0FBTztRQUVYLEtBQUtuN0IsQ0FBQyxJQUFJZzdCLE9BQU8sRUFBRTtVQUNqQnh3QixLQUFLLEdBQUdwTSxJQUFJLENBQUNnOUIsVUFBVSxDQUFDSixPQUFPLENBQUNoN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQys2QixPQUFPLENBQUMsQ0FBQzs7VUFFN0N2d0IsS0FBSyxLQUFLMHdCLFFBQVEsR0FBRyxDQUFDLENBQUM7VUFFdkIsSUFBSTF3QixLQUFLLEtBQUt5d0IsVUFBVSxDQUFDajdCLENBQUMsQ0FBQyxFQUFFO1lBQzNCaTdCLFVBQVUsQ0FBQ2o3QixDQUFDLENBQUMsR0FBR3dLLEtBQUs7WUFDckIyd0IsT0FBTyxHQUFHLENBQUM7VUFDYjtRQUNGO1FBRUEsSUFBSUEsT0FBTyxFQUFFO1VBQ1hoN0IsQ0FBQyxDQUFDeUQsTUFBTSxDQUFDLENBQUM7VUFDVnMzQixRQUFRLElBQUlILE9BQU8sQ0FBQ2w0QixJQUFJLENBQUMxQyxDQUFDLENBQUM7UUFDN0I7TUFDRixDQUFDLENBQUM7TUFFRjA2QixTQUFTLENBQUMsa0JBQWtCLENBQUM7TUFFN0JFLE9BQU8sQ0FBQzM0QixPQUFPLENBQUMsVUFBVWpDLENBQUMsRUFBRTtRQUMzQixPQUFPQSxDQUFDLENBQUNrN0IsT0FBTyxDQUFDbDdCLENBQUMsQ0FBQztNQUNyQixDQUFDLENBQUM7TUFDRnc2QixjQUFjLEdBQUcxeEIsSUFBSTtNQUVyQjR4QixTQUFTLENBQUMsWUFBWSxDQUFDO0lBQ3pCO0VBQ0YsQ0FBQztBQUVELElBQUlTLE9BQU8sR0FBRyxhQUFhLFlBQVk7RUFDckMsU0FBU0EsT0FBT0EsQ0FBQzNpQixJQUFJLEVBQUU3QixLQUFLLEVBQUU7SUFDNUIsSUFBSSxDQUFDbGQsUUFBUSxHQUFHa2QsS0FBSyxJQUFJbGQsUUFBUSxDQUFDa2QsS0FBSyxDQUFDO0lBQ3hDLElBQUksQ0FBQ2pYLElBQUksR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDMDdCLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7SUFFZCxJQUFJLENBQUNDLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQzdoQyxFQUFFLEdBQUdpaEMsVUFBVSxFQUFFLENBQUMsQ0FBQzs7SUFFeEJqaUIsSUFBSSxJQUFJLElBQUksQ0FBQzVGLEdBQUcsQ0FBQzRGLElBQUksQ0FBQztFQUN4QjtFQUVBLElBQUk4aUIsT0FBTyxHQUFHSCxPQUFPLENBQUMvbUIsU0FBUztFQUUvQmtuQixPQUFPLENBQUMxb0IsR0FBRyxHQUFHLFNBQVNBLEdBQUdBLENBQUNuQixJQUFJLEVBQUUrRyxJQUFJLEVBQUU3QixLQUFLLEVBQUU7SUFDNUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUlyQixXQUFXLENBQUM3RCxJQUFJLENBQUMsRUFBRTtNQUNyQmtGLEtBQUssR0FBRzZCLElBQUk7TUFDWkEsSUFBSSxHQUFHL0csSUFBSTtNQUNYQSxJQUFJLEdBQUc2RCxXQUFXO0lBQ3BCO0lBRUEsSUFBSXZCLElBQUksR0FBRyxJQUFJO01BQ1hySCxDQUFDLEdBQUcsU0FBU0EsQ0FBQ0EsQ0FBQSxFQUFHO1FBQ25CLElBQUltTyxJQUFJLEdBQUcvRixRQUFRO1VBQ2Z5bUIsWUFBWSxHQUFHeG5CLElBQUksQ0FBQ3RhLFFBQVE7VUFDNUJpUSxNQUFNO1FBQ1ZtUixJQUFJLElBQUlBLElBQUksS0FBSzlHLElBQUksSUFBSThHLElBQUksQ0FBQ25iLElBQUksQ0FBQ2dELElBQUksQ0FBQ3FSLElBQUksQ0FBQztRQUM3QzRDLEtBQUssS0FBSzVDLElBQUksQ0FBQ3RhLFFBQVEsR0FBR0EsUUFBUSxDQUFDa2QsS0FBSyxDQUFDLENBQUM7UUFDMUM3QixRQUFRLEdBQUdmLElBQUk7UUFDZnJLLE1BQU0sR0FBRzhPLElBQUksQ0FBQ21KLEtBQUssQ0FBQzVOLElBQUksRUFBRWxDLFNBQVMsQ0FBQztRQUNwQ3lELFdBQVcsQ0FBQzVMLE1BQU0sQ0FBQyxJQUFJcUssSUFBSSxDQUFDcW5CLEVBQUUsQ0FBQzE0QixJQUFJLENBQUNnSCxNQUFNLENBQUM7UUFDM0NvTCxRQUFRLEdBQUcrRixJQUFJO1FBQ2Y5RyxJQUFJLENBQUN0YSxRQUFRLEdBQUc4aEMsWUFBWTtRQUM1QnhuQixJQUFJLENBQUNzbkIsVUFBVSxHQUFHLEtBQUs7UUFDdkIsT0FBTzN4QixNQUFNO01BQ2YsQ0FBQztJQUVEcUssSUFBSSxDQUFDZ21CLElBQUksR0FBR3J0QixDQUFDO0lBQ2IsT0FBTytFLElBQUksS0FBSzZELFdBQVcsR0FBRzVJLENBQUMsQ0FBQ3FILElBQUksQ0FBQyxHQUFHdEMsSUFBSSxHQUFHc0MsSUFBSSxDQUFDdEMsSUFBSSxDQUFDLEdBQUcvRSxDQUFDLEdBQUdBLENBQUM7RUFDbkUsQ0FBQztFQUVENHVCLE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUNoakIsSUFBSSxFQUFFO0lBQ3JDLElBQUlxQyxJQUFJLEdBQUcvRixRQUFRO0lBQ25CQSxRQUFRLEdBQUcsSUFBSTtJQUNmMEQsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNWMUQsUUFBUSxHQUFHK0YsSUFBSTtFQUNqQixDQUFDO0VBRUR5Z0IsT0FBTyxDQUFDRyxTQUFTLEdBQUcsU0FBU0EsU0FBU0EsQ0FBQSxFQUFHO0lBQ3ZDLElBQUl2NUIsQ0FBQyxHQUFHLEVBQUU7SUFDVixJQUFJLENBQUN4QyxJQUFJLENBQUN1QyxPQUFPLENBQUMsVUFBVTlCLENBQUMsRUFBRTtNQUM3QixPQUFPQSxDQUFDLFlBQVlnN0IsT0FBTyxHQUFHajVCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDaWYsS0FBSyxDQUFDemYsQ0FBQyxFQUFFL0IsQ0FBQyxDQUFDczdCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBR3Q3QixDQUFDLFlBQVkyZ0IsS0FBSyxJQUFJLEVBQUUzZ0IsQ0FBQyxDQUFDd0ksTUFBTSxJQUFJeEksQ0FBQyxDQUFDd0ksTUFBTSxDQUFDakosSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJd0MsQ0FBQyxDQUFDUSxJQUFJLENBQUN2QyxDQUFDLENBQUM7SUFDN0ksQ0FBQyxDQUFDO0lBQ0YsT0FBTytCLENBQUM7RUFDVixDQUFDO0VBRURvNUIsT0FBTyxDQUFDakcsS0FBSyxHQUFHLFNBQVNBLEtBQUtBLENBQUEsRUFBRztJQUMvQixJQUFJLENBQUMrRixFQUFFLENBQUNoaEMsTUFBTSxHQUFHLElBQUksQ0FBQ3NGLElBQUksQ0FBQ3RGLE1BQU0sR0FBRyxDQUFDO0VBQ3ZDLENBQUM7RUFFRGtoQyxPQUFPLENBQUNoa0IsSUFBSSxHQUFHLFNBQVNBLElBQUlBLENBQUM3VCxNQUFNLEVBQUV3M0IsVUFBVSxFQUFFO0lBQy9DLElBQUlTLE1BQU0sR0FBRyxJQUFJO0lBRWpCLElBQUlqNEIsTUFBTSxFQUFFO01BQ1YsSUFBSXl2QixNQUFNLEdBQUcsSUFBSSxDQUFDdUksU0FBUyxDQUFDLENBQUM7TUFDN0IsSUFBSSxDQUFDLzdCLElBQUksQ0FBQ3VDLE9BQU8sQ0FBQyxVQUFVckMsQ0FBQyxFQUFFO1FBQzdCO1FBQ0EsSUFBSUEsQ0FBQyxDQUFDRixJQUFJLEtBQUssUUFBUSxFQUFFO1VBQ3ZCRSxDQUFDLENBQUM2RCxNQUFNLENBQUMsQ0FBQztVQUNWN0QsQ0FBQyxDQUFDcXpCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDaHhCLE9BQU8sQ0FBQyxVQUFVcUosS0FBSyxFQUFFO1lBQ3hELE9BQU80bkIsTUFBTSxDQUFDOWEsTUFBTSxDQUFDOGEsTUFBTSxDQUFDbnhCLE9BQU8sQ0FBQ3VKLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNoRCxDQUFDLENBQUM7UUFDSjtNQUNGLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRUo0bkIsTUFBTSxDQUFDam5CLEdBQUcsQ0FBQyxVQUFVck0sQ0FBQyxFQUFFO1FBQ3RCLE9BQU87VUFDTHVwQixDQUFDLEVBQUV2cEIsQ0FBQyxDQUFDcXdCLFVBQVUsQ0FBQyxDQUFDLENBQUM7VUFDbEJyd0IsQ0FBQyxFQUFFQTtRQUNMLENBQUM7TUFDSCxDQUFDLENBQUMsQ0FBQ3FpQixJQUFJLENBQUMsVUFBVS9mLENBQUMsRUFBRTdCLENBQUMsRUFBRTtRQUN0QixPQUFPQSxDQUFDLENBQUM4b0IsQ0FBQyxHQUFHam5CLENBQUMsQ0FBQ2luQixDQUFDLElBQUksQ0FBQ2tELFFBQVE7TUFDL0IsQ0FBQyxDQUFDLENBQUNwcUIsT0FBTyxDQUFDLFVBQVUwNUIsQ0FBQyxFQUFFO1FBQ3RCLE9BQU9BLENBQUMsQ0FBQy83QixDQUFDLENBQUM2RCxNQUFNLENBQUNBLE1BQU0sQ0FBQztNQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVKLElBQUksQ0FBQy9ELElBQUksQ0FBQ3VDLE9BQU8sQ0FBQyxVQUFVOUIsQ0FBQyxFQUFFO1FBQzdCLE9BQU8sRUFBRUEsQ0FBQyxZQUFZMmdCLEtBQUssQ0FBQyxJQUFJM2dCLENBQUMsQ0FBQ3NELE1BQU0sSUFBSXRELENBQUMsQ0FBQ3NELE1BQU0sQ0FBQ0EsTUFBTSxDQUFDO01BQzlELENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQzIzQixFQUFFLENBQUNuNUIsT0FBTyxDQUFDLFVBQVV5SyxDQUFDLEVBQUU7UUFDM0IsT0FBT0EsQ0FBQyxDQUFDakosTUFBTSxFQUFFaTRCLE1BQU0sQ0FBQztNQUMxQixDQUFDLENBQUM7TUFFRixJQUFJLENBQUNMLFVBQVUsR0FBRyxJQUFJO0lBQ3hCLENBQUMsTUFBTTtNQUNMLElBQUksQ0FBQzM3QixJQUFJLENBQUN1QyxPQUFPLENBQUMsVUFBVTlCLENBQUMsRUFBRTtRQUM3QixPQUFPQSxDQUFDLENBQUNtWCxJQUFJLElBQUluWCxDQUFDLENBQUNtWCxJQUFJLENBQUMsQ0FBQztNQUMzQixDQUFDLENBQUM7SUFDSjtJQUVBLElBQUksQ0FBQytkLEtBQUssQ0FBQyxDQUFDO0lBRVosSUFBSTRGLFVBQVUsRUFBRTtNQUNkLElBQUlsNEIsQ0FBQyxHQUFHdTNCLE1BQU0sQ0FBQ2xnQyxNQUFNO01BRXJCLE9BQU8ySSxDQUFDLEVBQUUsRUFBRTtRQUNWO1FBQ0F1M0IsTUFBTSxDQUFDdjNCLENBQUMsQ0FBQyxDQUFDdkosRUFBRSxLQUFLLElBQUksQ0FBQ0EsRUFBRSxJQUFJOGdDLE1BQU0sQ0FBQ2xpQixNQUFNLENBQUNyVixDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ2pEO0lBQ0Y7RUFDRixDQUFDO0VBRUR1NEIsT0FBTyxDQUFDNzNCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFDcWpCLE1BQU0sRUFBRTtJQUN2QyxJQUFJLENBQUN4UCxJQUFJLENBQUN3UCxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekIsQ0FBQztFQUVELE9BQU9xVSxPQUFPO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSVMsVUFBVSxHQUFHLGFBQWEsWUFBWTtFQUN4QyxTQUFTQSxVQUFVQSxDQUFDamxCLEtBQUssRUFBRTtJQUN6QixJQUFJLENBQUNrbEIsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDbGxCLEtBQUssR0FBR0EsS0FBSztFQUNwQjtFQUVBLElBQUltbEIsT0FBTyxHQUFHRixVQUFVLENBQUN4bkIsU0FBUztFQUVsQzBuQixPQUFPLENBQUNscEIsR0FBRyxHQUFHLFNBQVNBLEdBQUdBLENBQUNrb0IsVUFBVSxFQUFFdGlCLElBQUksRUFBRTdCLEtBQUssRUFBRTtJQUNsRG5CLFNBQVMsQ0FBQ3NsQixVQUFVLENBQUMsS0FBS0EsVUFBVSxHQUFHO01BQ3JDRixPQUFPLEVBQUVFO0lBQ1gsQ0FBQyxDQUFDO0lBQ0YsSUFBSXhVLE9BQU8sR0FBRyxJQUFJNlUsT0FBTyxDQUFDLENBQUMsRUFBRXhrQixLQUFLLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUM7TUFDN0NvbEIsSUFBSSxHQUFHelYsT0FBTyxDQUFDd1UsVUFBVSxHQUFHLENBQUMsQ0FBQztNQUM5QmtCLEVBQUU7TUFDRm44QixDQUFDO01BQ0RvOEIsTUFBTTtJQUNWbm5CLFFBQVEsSUFBSSxDQUFDd1IsT0FBTyxDQUFDN3NCLFFBQVEsS0FBSzZzQixPQUFPLENBQUM3c0IsUUFBUSxHQUFHcWIsUUFBUSxDQUFDcmIsUUFBUSxDQUFDLENBQUMsQ0FBQzs7SUFFekUsSUFBSSxDQUFDb2lDLFFBQVEsQ0FBQ241QixJQUFJLENBQUM0akIsT0FBTyxDQUFDO0lBQzNCOU4sSUFBSSxHQUFHOE4sT0FBTyxDQUFDMVQsR0FBRyxDQUFDLFNBQVMsRUFBRTRGLElBQUksQ0FBQztJQUNuQzhOLE9BQU8sQ0FBQ3VVLE9BQU8sR0FBR0MsVUFBVTtJQUU1QixLQUFLajdCLENBQUMsSUFBSWk3QixVQUFVLEVBQUU7TUFDcEIsSUFBSWo3QixDQUFDLEtBQUssS0FBSyxFQUFFO1FBQ2ZvOEIsTUFBTSxHQUFHLENBQUM7TUFDWixDQUFDLE1BQU07UUFDTEQsRUFBRSxHQUFHLzlCLElBQUksQ0FBQ2c5QixVQUFVLENBQUNILFVBQVUsQ0FBQ2o3QixDQUFDLENBQUMsQ0FBQztRQUVuQyxJQUFJbThCLEVBQUUsRUFBRTtVQUNOMUIsTUFBTSxDQUFDdjRCLE9BQU8sQ0FBQ3VrQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUlnVSxNQUFNLENBQUM1M0IsSUFBSSxDQUFDNGpCLE9BQU8sQ0FBQztVQUNuRCxDQUFDeVYsSUFBSSxDQUFDbDhCLENBQUMsQ0FBQyxHQUFHbThCLEVBQUUsQ0FBQ3BCLE9BQU8sTUFBTXFCLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDdENELEVBQUUsQ0FBQ0UsV0FBVyxHQUFHRixFQUFFLENBQUNFLFdBQVcsQ0FBQ3ZCLGNBQWMsQ0FBQyxHQUFHcUIsRUFBRSxDQUFDNS9CLGdCQUFnQixDQUFDLFFBQVEsRUFBRXUrQixjQUFjLENBQUM7UUFDakc7TUFDRjtJQUNGO0lBRUFzQixNQUFNLElBQUl6akIsSUFBSSxDQUFDOE4sT0FBTyxDQUFDO0lBQ3ZCLE9BQU8sSUFBSTtFQUNiLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBQTs7RUFHQXdWLE9BQU8sQ0FBQ3I0QixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQ3FqQixNQUFNLEVBQUU7SUFDdkMsSUFBSSxDQUFDeFAsSUFBSSxDQUFDd1AsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pCLENBQUM7RUFFRGdWLE9BQU8sQ0FBQ3hrQixJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQzdULE1BQU0sRUFBRTtJQUNuQyxJQUFJLENBQUNvNEIsUUFBUSxDQUFDNTVCLE9BQU8sQ0FBQyxVQUFVakMsQ0FBQyxFQUFFO01BQ2pDLE9BQU9BLENBQUMsQ0FBQ3NYLElBQUksQ0FBQzdULE1BQU0sRUFBRSxJQUFJLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELE9BQU9tNEIsVUFBVTtBQUNuQixDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBSTM2QixLQUFLLEdBQUc7RUFDVjJTLGNBQWMsRUFBRSxTQUFTQSxjQUFjQSxDQUFBLEVBQUc7SUFDeEMsS0FBSyxJQUFJdW9CLEtBQUssR0FBR3RxQixTQUFTLENBQUN6WCxNQUFNLEVBQUVnaUMsSUFBSSxHQUFHLElBQUlybUIsS0FBSyxDQUFDb21CLEtBQUssQ0FBQyxFQUFFRSxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUdGLEtBQUssRUFBRUUsS0FBSyxFQUFFLEVBQUU7TUFDN0ZELElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUd4cUIsU0FBUyxDQUFDd3FCLEtBQUssQ0FBQztJQUNoQztJQUVBRCxJQUFJLENBQUNuNkIsT0FBTyxDQUFDLFVBQVU2a0IsTUFBTSxFQUFFO01BQzdCLE9BQU9ELGFBQWEsQ0FBQ0MsTUFBTSxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRDVKLFFBQVEsRUFBRSxTQUFTQSxRQUFRQSxDQUFDdEwsSUFBSSxFQUFFO0lBQ2hDLE9BQU8sSUFBSWtPLFFBQVEsQ0FBQ2xPLElBQUksQ0FBQztFQUMzQixDQUFDO0VBQ0RpaUIsV0FBVyxFQUFFLFNBQVNBLFdBQVdBLENBQUMxaEIsT0FBTyxFQUFFeWhCLFVBQVUsRUFBRTtJQUNyRCxPQUFPdmQsZUFBZSxDQUFDd2QsV0FBVyxDQUFDMWhCLE9BQU8sRUFBRXloQixVQUFVLENBQUM7RUFDekQsQ0FBQztFQUNEMEksV0FBVyxFQUFFLFNBQVNBLFdBQVdBLENBQUMzN0IsTUFBTSxFQUFFQyxRQUFRLEVBQUVpSCxJQUFJLEVBQUV4RSxPQUFPLEVBQUU7SUFDakUxRyxTQUFTLENBQUNnRSxNQUFNLENBQUMsS0FBS0EsTUFBTSxHQUFHMFgsT0FBTyxDQUFDMVgsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVwRCxJQUFJNDdCLE1BQU0sR0FBRzMrQixTQUFTLENBQUMrQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ3dTLEdBQUc7TUFDcENxcEIsTUFBTSxHQUFHMzBCLElBQUksR0FBRzBSLFlBQVksR0FBR0Ysa0JBQWtCO0lBRXJEeFIsSUFBSSxLQUFLLFFBQVEsS0FBS0EsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQyxPQUFPLENBQUNsSCxNQUFNLEdBQUdBLE1BQU0sR0FBRyxDQUFDQyxRQUFRLEdBQUcsVUFBVUEsUUFBUSxFQUFFaUgsSUFBSSxFQUFFeEUsT0FBTyxFQUFFO01BQ3ZFLE9BQU9tNUIsTUFBTSxDQUFDLENBQUNwL0IsUUFBUSxDQUFDd0QsUUFBUSxDQUFDLElBQUl4RCxRQUFRLENBQUN3RCxRQUFRLENBQUMsQ0FBQ3VTLEdBQUcsSUFBSW9wQixNQUFNLEVBQUU1N0IsTUFBTSxFQUFFQyxRQUFRLEVBQUVpSCxJQUFJLEVBQUV4RSxPQUFPLENBQUMsQ0FBQztJQUMxRyxDQUFDLEdBQUdtNUIsTUFBTSxDQUFDLENBQUNwL0IsUUFBUSxDQUFDd0QsUUFBUSxDQUFDLElBQUl4RCxRQUFRLENBQUN3RCxRQUFRLENBQUMsQ0FBQ3VTLEdBQUcsSUFBSW9wQixNQUFNLEVBQUU1N0IsTUFBTSxFQUFFQyxRQUFRLEVBQUVpSCxJQUFJLEVBQUV4RSxPQUFPLENBQUMsQ0FBQztFQUN2RyxDQUFDO0VBQ0RvNUIsV0FBVyxFQUFFLFNBQVNBLFdBQVdBLENBQUM5N0IsTUFBTSxFQUFFQyxRQUFRLEVBQUVpSCxJQUFJLEVBQUU7SUFDeERsSCxNQUFNLEdBQUcwWCxPQUFPLENBQUMxWCxNQUFNLENBQUM7SUFFeEIsSUFBSUEsTUFBTSxDQUFDdkcsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNyQixJQUFJc2lDLE9BQU8sR0FBRy83QixNQUFNLENBQUNzTCxHQUFHLENBQUMsVUFBVXJNLENBQUMsRUFBRTtVQUNwQyxPQUFPdEQsSUFBSSxDQUFDbWdDLFdBQVcsQ0FBQzc4QixDQUFDLEVBQUVnQixRQUFRLEVBQUVpSCxJQUFJLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBQ0U2SixDQUFDLEdBQUdnckIsT0FBTyxDQUFDdGlDLE1BQU07TUFDdEIsT0FBTyxVQUFVbUcsS0FBSyxFQUFFO1FBQ3RCLElBQUl3QyxDQUFDLEdBQUcyTyxDQUFDO1FBRVQsT0FBTzNPLENBQUMsRUFBRSxFQUFFO1VBQ1YyNUIsT0FBTyxDQUFDMzVCLENBQUMsQ0FBQyxDQUFDeEMsS0FBSyxDQUFDO1FBQ25CO01BQ0YsQ0FBQztJQUNIO0lBRUFJLE1BQU0sR0FBR0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QixJQUFJcW1CLE1BQU0sR0FBRzVwQixRQUFRLENBQUN3RCxRQUFRLENBQUM7TUFDM0JVLEtBQUssR0FBRzFELFNBQVMsQ0FBQytDLE1BQU0sQ0FBQztNQUN6QmQsQ0FBQyxHQUFHeUIsS0FBSyxDQUFDNlcsT0FBTyxJQUFJLENBQUM3VyxLQUFLLENBQUM2VyxPQUFPLENBQUMvRSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUV4UyxRQUFRLENBQUMsSUFBSUEsUUFBUTtNQUN4RTtNQUNKNjBCLE1BQU0sR0FBR3pPLE1BQU0sR0FBRyxVQUFVem1CLEtBQUssRUFBRTtRQUNqQyxJQUFJVixDQUFDLEdBQUcsSUFBSW1uQixNQUFNLENBQUMsQ0FBQztRQUNwQkwsV0FBVyxDQUFDeGYsR0FBRyxHQUFHLENBQUM7UUFDbkJ0SCxDQUFDLENBQUNpUyxJQUFJLENBQUNuUixNQUFNLEVBQUVrSCxJQUFJLEdBQUd0SCxLQUFLLEdBQUdzSCxJQUFJLEdBQUd0SCxLQUFLLEVBQUVvbUIsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDaG1CLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFZCxDQUFDLENBQUNxVCxNQUFNLENBQUMsQ0FBQyxFQUFFclQsQ0FBQyxDQUFDO1FBQ2Q4bUIsV0FBVyxDQUFDeGYsR0FBRyxJQUFJMGUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFYyxXQUFXLENBQUM7TUFDdEQsQ0FBQyxHQUFHcmxCLEtBQUssQ0FBQzNCLEdBQUcsQ0FBQ2dCLE1BQU0sRUFBRWQsQ0FBQyxDQUFDO0lBRXhCLE9BQU9tbkIsTUFBTSxHQUFHeU8sTUFBTSxHQUFHLFVBQVVsMUIsS0FBSyxFQUFFO01BQ3hDLE9BQU9rMUIsTUFBTSxDQUFDOTBCLE1BQU0sRUFBRWQsQ0FBQyxFQUFFZ0ksSUFBSSxHQUFHdEgsS0FBSyxHQUFHc0gsSUFBSSxHQUFHdEgsS0FBSyxFQUFFZSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7RUFDSCxDQUFDO0VBQ0RxN0IsT0FBTyxFQUFFLFNBQVNBLE9BQU9BLENBQUNoOEIsTUFBTSxFQUFFQyxRQUFRLEVBQUVnUixJQUFJLEVBQUU7SUFDaEQsSUFBSWdyQixPQUFPO0lBRVgsSUFBSXR4QixLQUFLLEdBQUdoUCxJQUFJLENBQUM1QixFQUFFLENBQUNpRyxNQUFNLEVBQUVpVyxNQUFNLEVBQUVnbUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFQSxPQUFPLENBQUNoOEIsUUFBUSxDQUFDLEdBQUcsT0FBTyxFQUFFZzhCLE9BQU8sQ0FBQy9NLE1BQU0sR0FBRyxJQUFJLEVBQUUrTSxPQUFPLEdBQUdockIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDeEg0RyxJQUFJLEdBQUcsU0FBU0EsSUFBSUEsQ0FBQ2pZLEtBQUssRUFBRWdKLEtBQUssRUFBRWt1QixlQUFlLEVBQUU7UUFDdEQsT0FBT25zQixLQUFLLENBQUN3dEIsT0FBTyxDQUFDbDRCLFFBQVEsRUFBRUwsS0FBSyxFQUFFZ0osS0FBSyxFQUFFa3VCLGVBQWUsQ0FBQztNQUMvRCxDQUFDO0lBRURqZixJQUFJLENBQUNsTixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsT0FBT2tOLElBQUk7RUFDYixDQUFDO0VBQ0Rxa0IsVUFBVSxFQUFFLFNBQVNBLFVBQVVBLENBQUMxcUIsT0FBTyxFQUFFO0lBQ3ZDLE9BQU9rRSxlQUFlLENBQUN3ZCxXQUFXLENBQUMxaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDL1gsTUFBTSxHQUFHLENBQUM7RUFDOUQsQ0FBQztFQUNEb2YsUUFBUSxFQUFFLFNBQVNBLFFBQVFBLENBQUNqWixLQUFLLEVBQUU7SUFDakNBLEtBQUssSUFBSUEsS0FBSyxDQUFDNmhCLElBQUksS0FBSzdoQixLQUFLLENBQUM2aEIsSUFBSSxHQUFHQyxVQUFVLENBQUM5aEIsS0FBSyxDQUFDNmhCLElBQUksRUFBRTFOLFNBQVMsQ0FBQzBOLElBQUksQ0FBQyxDQUFDO0lBQzVFLE9BQU92SSxVQUFVLENBQUNuRixTQUFTLEVBQUVuVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDM0MsQ0FBQztFQUNEdW1CLE1BQU0sRUFBRSxTQUFTQSxNQUFNQSxDQUFDdm1CLEtBQUssRUFBRTtJQUM3QixPQUFPc1osVUFBVSxDQUFDdGMsT0FBTyxFQUFFZ0QsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pDLENBQUM7RUFDRHU4QixjQUFjLEVBQUUsU0FBU0EsY0FBY0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQzdDLElBQUl0ckIsSUFBSSxHQUFHc3JCLEtBQUssQ0FBQ3RyQixJQUFJO01BQ2pCdXJCLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFNO01BQ3JCQyxPQUFPLEdBQUdGLEtBQUssQ0FBQ0UsT0FBTztNQUN2QnpqQixRQUFRLEdBQUd1akIsS0FBSyxDQUFDdmpCLFFBQVE7TUFDekIwakIsY0FBYyxHQUFHSCxLQUFLLENBQUNHLGNBQWM7SUFDekMsQ0FBQ0QsT0FBTyxJQUFJLEVBQUUsRUFBRWo3QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVazdCLFVBQVUsRUFBRTtNQUN2RCxPQUFPQSxVQUFVLElBQUksQ0FBQy8vQixRQUFRLENBQUMrL0IsVUFBVSxDQUFDLElBQUksQ0FBQzVtQixRQUFRLENBQUM0bUIsVUFBVSxDQUFDLElBQUlybUIsS0FBSyxDQUFDckYsSUFBSSxHQUFHLG1CQUFtQixHQUFHMHJCLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDcEksQ0FBQyxDQUFDO0lBRUZ0bEIsUUFBUSxDQUFDcEcsSUFBSSxDQUFDLEdBQUcsVUFBVVUsT0FBTyxFQUFFUCxJQUFJLEVBQUV3aUIsRUFBRSxFQUFFO01BQzVDLE9BQU80SSxNQUFNLENBQUMza0IsT0FBTyxDQUFDbEcsT0FBTyxDQUFDLEVBQUVwVSxZQUFZLENBQUM2VCxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU0SCxRQUFRLENBQUMsRUFBRTRhLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSThJLGNBQWMsRUFBRTtNQUNsQnBkLFFBQVEsQ0FBQzFMLFNBQVMsQ0FBQzNDLElBQUksQ0FBQyxHQUFHLFVBQVVVLE9BQU8sRUFBRVAsSUFBSSxFQUFFN0ksUUFBUSxFQUFFO1FBQzVELE9BQU8sSUFBSSxDQUFDNkosR0FBRyxDQUFDaUYsUUFBUSxDQUFDcEcsSUFBSSxDQUFDLENBQUNVLE9BQU8sRUFBRXFELFNBQVMsQ0FBQzVELElBQUksQ0FBQyxHQUFHQSxJQUFJLEdBQUcsQ0FBQzdJLFFBQVEsR0FBRzZJLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTdJLFFBQVEsQ0FBQztNQUM1RyxDQUFDO0lBQ0g7RUFDRixDQUFDO0VBQ0RxMEIsWUFBWSxFQUFFLFNBQVNBLFlBQVlBLENBQUMzckIsSUFBSSxFQUFFMlEsSUFBSSxFQUFFO0lBQzlDcUssUUFBUSxDQUFDaGIsSUFBSSxDQUFDLEdBQUc0USxVQUFVLENBQUNELElBQUksQ0FBQztFQUNuQyxDQUFDO0VBQ0RpYixTQUFTLEVBQUUsU0FBU0EsU0FBU0EsQ0FBQ2piLElBQUksRUFBRXVMLFdBQVcsRUFBRTtJQUMvQyxPQUFPOWIsU0FBUyxDQUFDelgsTUFBTSxHQUFHaW9CLFVBQVUsQ0FBQ0QsSUFBSSxFQUFFdUwsV0FBVyxDQUFDLEdBQUdsQixRQUFRO0VBQ3BFLENBQUM7RUFDRDRHLE9BQU8sRUFBRSxTQUFTQSxPQUFPQSxDQUFDNzVCLEVBQUUsRUFBRTtJQUM1QixPQUFPNmMsZUFBZSxDQUFDZ2QsT0FBTyxDQUFDNzVCLEVBQUUsQ0FBQztFQUNwQyxDQUFDO0VBQ0Q4akMsVUFBVSxFQUFFLFNBQVNBLFVBQVVBLENBQUMxckIsSUFBSSxFQUFFMnJCLG1CQUFtQixFQUFFO0lBQ3pELElBQUkzckIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ25CQSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1g7SUFFQSxJQUFJd2lCLEVBQUUsR0FBRyxJQUFJdFUsUUFBUSxDQUFDbE8sSUFBSSxDQUFDO01BQ3ZCNkksS0FBSztNQUNMTSxJQUFJO0lBQ1JxWixFQUFFLENBQUNwWCxpQkFBaUIsR0FBR3ZILFdBQVcsQ0FBQzdELElBQUksQ0FBQ29MLGlCQUFpQixDQUFDO0lBRTFEM0csZUFBZSxDQUFDOEUsTUFBTSxDQUFDaVosRUFBRSxDQUFDO0lBRTFCQSxFQUFFLENBQUNoYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRVpnYSxFQUFFLENBQUM3b0IsS0FBSyxHQUFHNm9CLEVBQUUsQ0FBQ2hZLE1BQU0sR0FBRy9GLGVBQWUsQ0FBQzlLLEtBQUs7SUFDNUNrUCxLQUFLLEdBQUdwRSxlQUFlLENBQUNnSixNQUFNO0lBRTlCLE9BQU81RSxLQUFLLEVBQUU7TUFDWk0sSUFBSSxHQUFHTixLQUFLLENBQUMvUCxLQUFLO01BRWxCLElBQUk2eUIsbUJBQW1CLElBQUksRUFBRSxDQUFDOWlCLEtBQUssQ0FBQ2pQLElBQUksSUFBSWlQLEtBQUssWUFBWXFHLEtBQUssSUFBSXJHLEtBQUssQ0FBQzdJLElBQUksQ0FBQ21nQixVQUFVLEtBQUt0WCxLQUFLLENBQUN5WixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsSDVXLGNBQWMsQ0FBQzhXLEVBQUUsRUFBRTNaLEtBQUssRUFBRUEsS0FBSyxDQUFDYyxNQUFNLEdBQUdkLEtBQUssQ0FBQ2dELE1BQU0sQ0FBQztNQUN4RDtNQUVBaEQsS0FBSyxHQUFHTSxJQUFJO0lBQ2Q7SUFFQXVDLGNBQWMsQ0FBQ2pILGVBQWUsRUFBRStkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdEMsT0FBT0EsRUFBRTtFQUNYLENBQUM7RUFDRDlOLE9BQU8sRUFBRSxTQUFTQSxPQUFPQSxDQUFDOU4sSUFBSSxFQUFFN0IsS0FBSyxFQUFFO0lBQ3JDLE9BQU82QixJQUFJLEdBQUcsSUFBSTJpQixPQUFPLENBQUMzaUIsSUFBSSxFQUFFN0IsS0FBSyxDQUFDLEdBQUc3QixRQUFRO0VBQ25ELENBQUM7RUFDRG1tQixVQUFVLEVBQUUsU0FBU0EsVUFBVUEsQ0FBQ3RrQixLQUFLLEVBQUU7SUFDckMsT0FBTyxJQUFJaWxCLFVBQVUsQ0FBQ2psQixLQUFLLENBQUM7RUFDOUIsQ0FBQztFQUNENm1CLGlCQUFpQixFQUFFLFNBQVNBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQzlDLE9BQU9sRCxNQUFNLENBQUNyNEIsT0FBTyxDQUFDLFVBQVVqQyxDQUFDLEVBQUU7TUFDakMsSUFBSSs3QixJQUFJLEdBQUcvN0IsQ0FBQyxDQUFDODZCLFVBQVU7UUFDbkIyQyxLQUFLO1FBQ0w1OUIsQ0FBQztNQUVMLEtBQUtBLENBQUMsSUFBSWs4QixJQUFJLEVBQUU7UUFDZCxJQUFJQSxJQUFJLENBQUNsOEIsQ0FBQyxDQUFDLEVBQUU7VUFDWGs4QixJQUFJLENBQUNsOEIsQ0FBQyxDQUFDLEdBQUcsS0FBSztVQUNmNDlCLEtBQUssR0FBRyxDQUFDO1FBQ1g7TUFDRjtNQUVBQSxLQUFLLElBQUl6OUIsQ0FBQyxDQUFDeUQsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLElBQUlrM0IsY0FBYyxDQUFDLENBQUM7RUFDeEIsQ0FBQztFQUNEditCLGdCQUFnQixFQUFFLFNBQVNBLGdCQUFnQkEsQ0FBQzJILElBQUksRUFBRXFpQixRQUFRLEVBQUU7SUFDMUQsSUFBSWxrQixDQUFDLEdBQUd3b0IsVUFBVSxDQUFDM21CLElBQUksQ0FBQyxLQUFLMm1CLFVBQVUsQ0FBQzNtQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbkQsQ0FBQzdCLENBQUMsQ0FBQ0gsT0FBTyxDQUFDcWtCLFFBQVEsQ0FBQyxJQUFJbGtCLENBQUMsQ0FBQ1EsSUFBSSxDQUFDMGpCLFFBQVEsQ0FBQztFQUMxQyxDQUFDO0VBQ0RzWCxtQkFBbUIsRUFBRSxTQUFTQSxtQkFBbUJBLENBQUMzNUIsSUFBSSxFQUFFcWlCLFFBQVEsRUFBRTtJQUNoRSxJQUFJbGtCLENBQUMsR0FBR3dvQixVQUFVLENBQUMzbUIsSUFBSSxDQUFDO01BQ3BCaEIsQ0FBQyxHQUFHYixDQUFDLElBQUlBLENBQUMsQ0FBQ0gsT0FBTyxDQUFDcWtCLFFBQVEsQ0FBQztJQUNoQ3JqQixDQUFDLElBQUksQ0FBQyxJQUFJYixDQUFDLENBQUNrVyxNQUFNLENBQUNyVixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFDRHVRLEtBQUssRUFBRTtJQUNMcVIsSUFBSSxFQUFFQSxJQUFJO0lBQ1ZFLFFBQVEsRUFBRUEsUUFBUTtJQUNsQjFDLFVBQVUsRUFBRUEsVUFBVTtJQUN0QkQsTUFBTSxFQUFFQSxNQUFNO0lBQ2RvQixJQUFJLEVBQUVBLElBQUk7SUFDVmlCLFNBQVMsRUFBRUEsU0FBUztJQUNwQjduQixPQUFPLEVBQUVBLE9BQU87SUFDaEJ3a0IsS0FBSyxFQUFFQSxLQUFLO0lBQ1o4SCxVQUFVLEVBQUVBLFVBQVU7SUFDdEIzUSxPQUFPLEVBQUVBLE9BQU87SUFDaEI1ZSxRQUFRLEVBQUVBLFFBQVE7SUFDbEIrcUIsUUFBUSxFQUFFQSxRQUFRO0lBQ2xCUCxJQUFJLEVBQUVBLElBQUk7SUFDVkssT0FBTyxFQUFFQSxPQUFPO0lBQ2hCZ0IsV0FBVyxFQUFFQSxXQUFXO0lBQ3hCdEQsT0FBTyxFQUFFQTtFQUNYLENBQUM7RUFDRDJiLE9BQU8sRUFBRWpuQixRQUFRO0VBQ2pCa25CLE9BQU8sRUFBRS9sQixRQUFRO0VBQ2pCZ21CLE1BQU0sRUFBRXJnQyxPQUFPO0VBQ2YrM0IsVUFBVSxFQUFFelYsUUFBUSxDQUFDeVYsVUFBVTtFQUMvQjBILE9BQU8sRUFBRTcvQixRQUFRO0VBQ2pCMGdDLGNBQWMsRUFBRXpuQixlQUFlO0VBQy9CMVMsSUFBSSxFQUFFO0lBQ0pyRyxTQUFTLEVBQUVBLFNBQVM7SUFDcEJ5Z0MsT0FBTyxFQUFFOW1CLFVBQVU7SUFDbkI2SixLQUFLLEVBQUVBLEtBQUs7SUFDWmhCLFFBQVEsRUFBRUEsUUFBUTtJQUNsQnVQLFNBQVMsRUFBRUEsU0FBUztJQUNwQnpyQixRQUFRLEVBQUVoRyxTQUFTO0lBQ25CSSxxQkFBcUIsRUFBRUEscUJBQXFCO0lBQzVDZ0gsU0FBUyxFQUFFLFNBQVNBLFNBQVNBLENBQUEsRUFBRztNQUM5QixPQUFPeEcsVUFBVTtJQUNuQixDQUFDO0lBQ0Q4bkIsT0FBTyxFQUFFLFNBQVNBLE9BQU9BLENBQUMwWCxLQUFLLEVBQUU7TUFDL0IsSUFBSUEsS0FBSyxJQUFJbHBCLFFBQVEsRUFBRTtRQUNyQkEsUUFBUSxDQUFDcFYsSUFBSSxDQUFDZ0QsSUFBSSxDQUFDczdCLEtBQUssQ0FBQztRQUV6QkEsS0FBSyxDQUFDelgsSUFBSSxHQUFHelIsUUFBUTtNQUN2QjtNQUVBLE9BQU9BLFFBQVE7SUFDakIsQ0FBQztJQUNEbXBCLGtCQUFrQixFQUFFLFNBQVNBLGtCQUFrQkEsQ0FBQzE5QixLQUFLLEVBQUU7TUFDckQsT0FBT3NVLG1CQUFtQixHQUFHdFUsS0FBSztJQUNwQztFQUNGO0FBQ0YsQ0FBQztBQUVEeEQsWUFBWSxDQUFDLDZDQUE2QyxFQUFFLFVBQVUwVSxJQUFJLEVBQUU7RUFDMUUsT0FBT3hRLEtBQUssQ0FBQ3dRLElBQUksQ0FBQyxHQUFHcVAsS0FBSyxDQUFDclAsSUFBSSxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVGalUsT0FBTyxDQUFDb1YsR0FBRyxDQUFDa04sUUFBUSxDQUFDeVYsVUFBVSxDQUFDO0FBRWhDNU8sV0FBVyxHQUFHMWxCLEtBQUssQ0FBQ3ZHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtFQUN6QmlhLFFBQVEsRUFBRTtBQUNaLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRUosSUFBSXVwQixtQkFBbUIsR0FBRyxTQUFTQSxtQkFBbUJBLENBQUNwM0IsTUFBTSxFQUFFd0MsSUFBSSxFQUFFO0lBQ25FLElBQUlwQyxFQUFFLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBRztJQUVuQixPQUFPRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ3JILENBQUMsS0FBS3lKLElBQUksSUFBSXBDLEVBQUUsQ0FBQ3V5QixFQUFFLEtBQUtud0IsSUFBSSxJQUFJcEMsRUFBRSxDQUFDNHVCLEVBQUUsS0FBS3hzQixJQUFJLEVBQUU7TUFDOURwQyxFQUFFLEdBQUdBLEVBQUUsQ0FBQ3dELEtBQUs7SUFDZjtJQUVBLE9BQU94RCxFQUFFO0VBQ1gsQ0FBQztFQUNHaTNCLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxDQUFDN3lCLEtBQUssRUFBRTh5QixTQUFTLEVBQUU7SUFDM0QsSUFBSWpzQixPQUFPLEdBQUc3RyxLQUFLLENBQUM0b0IsUUFBUTtNQUN4QnIwQixDQUFDO01BQ0RrRCxDQUFDO01BQ0RtRSxFQUFFO0lBRU4sS0FBS3JILENBQUMsSUFBSXUrQixTQUFTLEVBQUU7TUFDbkJyN0IsQ0FBQyxHQUFHb1AsT0FBTyxDQUFDL1gsTUFBTTtNQUVsQixPQUFPMkksQ0FBQyxFQUFFLEVBQUU7UUFDVm1FLEVBQUUsR0FBR29FLEtBQUssQ0FBQ29rQixTQUFTLENBQUMzc0IsQ0FBQyxDQUFDLENBQUNsRCxDQUFDLENBQUM7UUFFMUIsSUFBSXFILEVBQUUsS0FBS0EsRUFBRSxHQUFHQSxFQUFFLENBQUN1RixDQUFDLENBQUMsRUFBRTtVQUNyQixJQUFJdkYsRUFBRSxDQUFDQyxHQUFHLEVBQUU7WUFDVjtZQUNBRCxFQUFFLEdBQUdnM0IsbUJBQW1CLENBQUNoM0IsRUFBRSxFQUFFckgsQ0FBQyxDQUFDO1VBQ2pDO1VBRUFxSCxFQUFFLElBQUlBLEVBQUUsQ0FBQ2lnQixRQUFRLElBQUlqZ0IsRUFBRSxDQUFDaWdCLFFBQVEsQ0FBQ2lYLFNBQVMsQ0FBQ3YrQixDQUFDLENBQUMsRUFBRXlMLEtBQUssRUFBRTZHLE9BQU8sQ0FBQ3BQLENBQUMsQ0FBQyxFQUFFbEQsQ0FBQyxDQUFDO1FBQ3RFO01BQ0Y7SUFDRjtFQUNGLENBQUM7RUFDR3crQixvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUM1c0IsSUFBSSxFQUFFMFYsUUFBUSxFQUFFO0lBQ3ZFLE9BQU87TUFDTDFWLElBQUksRUFBRUEsSUFBSTtNQUNWNFYsT0FBTyxFQUFFLENBQUM7TUFDVjtNQUNBdlYsSUFBSSxFQUFFLFNBQVNBLElBQUlBLENBQUNuUixNQUFNLEVBQUVpUixJQUFJLEVBQUV0RyxLQUFLLEVBQUU7UUFDdkNBLEtBQUssQ0FBQ2lzQixPQUFPLEdBQUcsVUFBVWpzQixLQUFLLEVBQUU7VUFDL0IsSUFBSWUsSUFBSSxFQUFFeE0sQ0FBQztVQUVYLElBQUlsRCxTQUFTLENBQUNpVixJQUFJLENBQUMsRUFBRTtZQUNuQnZGLElBQUksR0FBRyxDQUFDLENBQUM7WUFFVHRQLFlBQVksQ0FBQzZVLElBQUksRUFBRSxVQUFVSCxJQUFJLEVBQUU7Y0FDakMsT0FBT3BGLElBQUksQ0FBQ29GLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFHSkcsSUFBSSxHQUFHdkYsSUFBSTtVQUNiO1VBRUEsSUFBSThhLFFBQVEsRUFBRTtZQUNaOWEsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUVULEtBQUt4TSxDQUFDLElBQUkrUixJQUFJLEVBQUU7Y0FDZHZGLElBQUksQ0FBQ3hNLENBQUMsQ0FBQyxHQUFHc25CLFFBQVEsQ0FBQ3ZWLElBQUksQ0FBQy9SLENBQUMsQ0FBQyxDQUFDO1lBQzdCO1lBRUErUixJQUFJLEdBQUd2RixJQUFJO1VBQ2I7VUFFQTh4QixhQUFhLENBQUM3eUIsS0FBSyxFQUFFc0csSUFBSSxDQUFDO1FBQzVCLENBQUM7TUFDSDtJQUNGLENBQUM7RUFDSCxDQUFDLENBQUMsQ0FBQzs7QUFHSSxJQUFJdFYsSUFBSSxHQUFHMkUsS0FBSyxDQUFDMlMsY0FBYyxDQUFDO0VBQ3JDbkMsSUFBSSxFQUFFLE1BQU07RUFDWkssSUFBSSxFQUFFLFNBQVNBLElBQUlBLENBQUNuUixNQUFNLEVBQUVpUixJQUFJLEVBQUV0RyxLQUFLLEVBQUU5QixLQUFLLEVBQUUySSxPQUFPLEVBQUU7SUFDdkQsSUFBSXRTLENBQUMsRUFBRXFILEVBQUUsRUFBRW9SLENBQUM7SUFDWixJQUFJLENBQUNoTixLQUFLLEdBQUdBLEtBQUs7SUFFbEIsS0FBS3pMLENBQUMsSUFBSStSLElBQUksRUFBRTtNQUNkMEcsQ0FBQyxHQUFHM1gsTUFBTSxDQUFDdEYsWUFBWSxDQUFDd0UsQ0FBQyxDQUFDLElBQUksRUFBRTtNQUNoQ3FILEVBQUUsR0FBRyxJQUFJLENBQUMwTCxHQUFHLENBQUNqUyxNQUFNLEVBQUUsY0FBYyxFQUFFLENBQUMyWCxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTFHLElBQUksQ0FBQy9SLENBQUMsQ0FBQyxFQUFFMkosS0FBSyxFQUFFMkksT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUV0UyxDQUFDLENBQUM7TUFDdEZxSCxFQUFFLENBQUN1eUIsRUFBRSxHQUFHNTVCLENBQUM7TUFDVHFILEVBQUUsQ0FBQzdHLENBQUMsR0FBR2lZLENBQUMsQ0FBQyxDQUFDOztNQUVWLElBQUksQ0FBQ2xSLE1BQU0sQ0FBQzFFLElBQUksQ0FBQzdDLENBQUMsQ0FBQztJQUNyQjtFQUNGLENBQUM7RUFDRHFULE1BQU0sRUFBRSxTQUFTQSxNQUFNQSxDQUFDelQsS0FBSyxFQUFFQyxJQUFJLEVBQUU7SUFDbkMsSUFBSXdILEVBQUUsR0FBR3hILElBQUksQ0FBQ3lILEdBQUc7SUFFakIsT0FBT0QsRUFBRSxFQUFFO01BQ1QxSSxVQUFVLEdBQUcwSSxFQUFFLENBQUN2SCxHQUFHLENBQUN1SCxFQUFFLENBQUN0SCxDQUFDLEVBQUVzSCxFQUFFLENBQUNySCxDQUFDLEVBQUVxSCxFQUFFLENBQUM3RyxDQUFDLEVBQUU2RyxFQUFFLENBQUMsR0FBR0EsRUFBRSxDQUFDMEQsQ0FBQyxDQUFDbkwsS0FBSyxFQUFFeUgsRUFBRSxDQUFDdUYsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFL0R2RixFQUFFLEdBQUdBLEVBQUUsQ0FBQ3dELEtBQUs7SUFDZjtFQUNGO0FBQ0YsQ0FBQyxFQUFFO0VBQ0QrRyxJQUFJLEVBQUUsVUFBVTtFQUNoQkssSUFBSSxFQUFFLFNBQVNBLElBQUlBLENBQUNuUixNQUFNLEVBQUVKLEtBQUssRUFBRTtJQUNqQyxJQUFJd0MsQ0FBQyxHQUFHeEMsS0FBSyxDQUFDbkcsTUFBTTtJQUVwQixPQUFPMkksQ0FBQyxFQUFFLEVBQUU7TUFDVixJQUFJLENBQUM2UCxHQUFHLENBQUNqUyxNQUFNLEVBQUVvQyxDQUFDLEVBQUVwQyxNQUFNLENBQUNvQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUV4QyxLQUFLLENBQUN3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRTtFQUNGO0FBQ0YsQ0FBQyxFQUFFczdCLG9CQUFvQixDQUFDLFlBQVksRUFBRWxiLGNBQWMsQ0FBQyxFQUFFa2Isb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQUVBLG9CQUFvQixDQUFDLE1BQU0sRUFBRS9hLElBQUksQ0FBQyxDQUFDLElBQUlyaUIsS0FBSyxDQUFDLENBQUM7O0FBRXhJNmYsS0FBSyxDQUFDNkssT0FBTyxHQUFHN0wsUUFBUSxDQUFDNkwsT0FBTyxHQUFHcnZCLElBQUksQ0FBQ3F2QixPQUFPLEdBQUcsUUFBUTtBQUMxRGxWLFVBQVUsR0FBRyxDQUFDO0FBQ2RoWSxhQUFhLENBQUMsQ0FBQyxJQUFJbWpCLEtBQUssQ0FBQyxDQUFDO0FBQzFCLElBQUkwYyxNQUFNLEdBQUc3UixRQUFRLENBQUM2UixNQUFNO0VBQ3hCQyxNQUFNLEdBQUc5UixRQUFRLENBQUM4UixNQUFNO0VBQ3hCQyxNQUFNLEdBQUcvUixRQUFRLENBQUMrUixNQUFNO0VBQ3hCQyxNQUFNLEdBQUdoUyxRQUFRLENBQUNnUyxNQUFNO0VBQ3hCQyxNQUFNLEdBQUdqUyxRQUFRLENBQUNpUyxNQUFNO0VBQ3hCOVAsTUFBTSxHQUFHbkMsUUFBUSxDQUFDbUMsTUFBTTtFQUN4QitQLElBQUksR0FBR2xTLFFBQVEsQ0FBQ2tTLElBQUk7RUFDcEJDLEtBQUssR0FBR25TLFFBQVEsQ0FBQ21TLEtBQUs7RUFDdEJDLEtBQUssR0FBR3BTLFFBQVEsQ0FBQ29TLEtBQUs7RUFDdEJDLEtBQUssR0FBR3JTLFFBQVEsQ0FBQ3FTLEtBQUs7RUFDdEJDLE1BQU0sR0FBR3RTLFFBQVEsQ0FBQ3NTLE1BQU07RUFDeEJDLE9BQU8sR0FBR3ZTLFFBQVEsQ0FBQ3VTLE9BQU87RUFDMUJDLElBQUksR0FBR3hTLFFBQVEsQ0FBQ3dTLElBQUk7RUFDcEIvUCxXQUFXLEdBQUd6QyxRQUFRLENBQUN5QyxXQUFXO0VBQ2xDZ1EsTUFBTSxHQUFHelMsUUFBUSxDQUFDeVMsTUFBTTtFQUN4QkMsSUFBSSxHQUFHMVMsUUFBUSxDQUFDMFMsSUFBSTtFQUNwQkMsSUFBSSxHQUFHM1MsUUFBUSxDQUFDMlMsSUFBSTtFQUNwQkMsSUFBSSxHQUFHNVMsUUFBUSxDQUFDNFMsSUFBSTtBQUMySDtBQUNxSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMTJJcEQ7QUFDMUs7QUFDM0MsSUFBSUMsV0FBVyxHQUFHaGpDLCtDQUFJLENBQUNzWCxjQUFjLENBQUM3QixvREFBUyxDQUFDLElBQUl6ViwrQ0FBSTtFQUNwRDtFQUNKaWpDLGVBQWUsR0FBR0QsV0FBVyxDQUFDMzdCLElBQUksQ0FBQ21kLEtBQUs7Ozs7Ozs7Ozs7O0FDSnhDLElBQUkwZSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsK0NBQVMsQ0FBQzs7QUFFN0I7QUFDQSxJQUFJQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0UsTUFBTTtBQUV4QkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdGLE1BQU07Ozs7Ozs7Ozs7QUNMdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0csU0FBU0EsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUU7RUFDbEMsSUFBSXYyQixLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1ZwUCxNQUFNLEdBQUcwbEMsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUdBLEtBQUssQ0FBQzFsQyxNQUFNO0VBRTdDLE9BQU8sRUFBRW9QLEtBQUssR0FBR3BQLE1BQU0sRUFBRTtJQUN2QixJQUFJMmxDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDdDJCLEtBQUssQ0FBQyxFQUFFQSxLQUFLLEVBQUVzMkIsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO01BQ2xEO0lBQ0Y7RUFDRjtFQUNBLE9BQU9BLEtBQUs7QUFDZDtBQUVBSCxNQUFNLENBQUNDLE9BQU8sR0FBR0MsU0FBUzs7Ozs7Ozs7OztBQ3JCMUIsSUFBSUcsU0FBUyxHQUFHUCxtQkFBTyxDQUFDLHlEQUFjLENBQUM7RUFDbkNRLFdBQVcsR0FBR1IsbUJBQU8sQ0FBQywyREFBZSxDQUFDO0VBQ3RDenBCLE9BQU8sR0FBR3lwQixtQkFBTyxDQUFDLG1EQUFXLENBQUM7RUFDOUJTLFFBQVEsR0FBR1QsbUJBQU8sQ0FBQyxxREFBWSxDQUFDO0VBQ2hDVSxPQUFPLEdBQUdWLG1CQUFPLENBQUMscURBQVksQ0FBQztFQUMvQlcsWUFBWSxHQUFHWCxtQkFBTyxDQUFDLDZEQUFnQixDQUFDOztBQUU1QztBQUNBLElBQUlZLFdBQVcsR0FBR2hzQixNQUFNLENBQUNELFNBQVM7O0FBRWxDO0FBQ0EsSUFBSWtzQixjQUFjLEdBQUdELFdBQVcsQ0FBQ0MsY0FBYzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLGFBQWFBLENBQUNoZ0MsS0FBSyxFQUFFaWdDLFNBQVMsRUFBRTtFQUN2QyxJQUFJQyxLQUFLLEdBQUd6cUIsT0FBTyxDQUFDelYsS0FBSyxDQUFDO0lBQ3RCbWdDLEtBQUssR0FBRyxDQUFDRCxLQUFLLElBQUlSLFdBQVcsQ0FBQzEvQixLQUFLLENBQUM7SUFDcENvZ0MsTUFBTSxHQUFHLENBQUNGLEtBQUssSUFBSSxDQUFDQyxLQUFLLElBQUlSLFFBQVEsQ0FBQzMvQixLQUFLLENBQUM7SUFDNUNxZ0MsTUFBTSxHQUFHLENBQUNILEtBQUssSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0MsTUFBTSxJQUFJUCxZQUFZLENBQUM3L0IsS0FBSyxDQUFDO0lBQzNEc2dDLFdBQVcsR0FBR0osS0FBSyxJQUFJQyxLQUFLLElBQUlDLE1BQU0sSUFBSUMsTUFBTTtJQUNoRGwzQixNQUFNLEdBQUdtM0IsV0FBVyxHQUFHYixTQUFTLENBQUN6L0IsS0FBSyxDQUFDbkcsTUFBTSxFQUFFMG1DLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDM0QxbUMsTUFBTSxHQUFHc1AsTUFBTSxDQUFDdFAsTUFBTTtFQUUxQixLQUFLLElBQUlMLEdBQUcsSUFBSXdHLEtBQUssRUFBRTtJQUNyQixJQUFJLENBQUNpZ0MsU0FBUyxJQUFJRixjQUFjLENBQUNoK0IsSUFBSSxDQUFDL0IsS0FBSyxFQUFFeEcsR0FBRyxDQUFDLEtBQzdDLEVBQUU4bUMsV0FBVztJQUNWO0lBQ0E5bUMsR0FBRyxJQUFJLFFBQVE7SUFDZjtJQUNDNG1DLE1BQU0sS0FBSzVtQyxHQUFHLElBQUksUUFBUSxJQUFJQSxHQUFHLElBQUksUUFBUSxDQUFFO0lBQ2hEO0lBQ0M2bUMsTUFBTSxLQUFLN21DLEdBQUcsSUFBSSxRQUFRLElBQUlBLEdBQUcsSUFBSSxZQUFZLElBQUlBLEdBQUcsSUFBSSxZQUFZLENBQUU7SUFDM0U7SUFDQW9tQyxPQUFPLENBQUNwbUMsR0FBRyxFQUFFSyxNQUFNLENBQUMsQ0FDdEIsQ0FBQyxFQUFFO01BQ05zUCxNQUFNLENBQUNoSCxJQUFJLENBQUMzSSxHQUFHLENBQUM7SUFDbEI7RUFDRjtFQUNBLE9BQU8yUCxNQUFNO0FBQ2Y7QUFFQWkyQixNQUFNLENBQUNDLE9BQU8sR0FBR1csYUFBYTs7Ozs7Ozs7OztBQ2hEOUIsSUFBSVEsVUFBVSxHQUFHdEIsbUJBQU8sQ0FBQywyREFBZSxDQUFDO0VBQ3JDdUIsY0FBYyxHQUFHdkIsbUJBQU8sQ0FBQyxtRUFBbUIsQ0FBQzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUl3QixRQUFRLEdBQUdELGNBQWMsQ0FBQ0QsVUFBVSxDQUFDO0FBRXpDcEIsTUFBTSxDQUFDQyxPQUFPLEdBQUdxQixRQUFROzs7Ozs7Ozs7O0FDYnpCLElBQUlDLGFBQWEsR0FBR3pCLG1CQUFPLENBQUMsaUVBQWtCLENBQUM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJMEIsT0FBTyxHQUFHRCxhQUFhLENBQUMsQ0FBQztBQUU3QnZCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdUIsT0FBTzs7Ozs7Ozs7OztBQ2Z4QixJQUFJQSxPQUFPLEdBQUcxQixtQkFBTyxDQUFDLHFEQUFZLENBQUM7RUFDL0IyQixJQUFJLEdBQUczQixtQkFBTyxDQUFDLDZDQUFRLENBQUM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTc0IsVUFBVUEsQ0FBQ00sTUFBTSxFQUFFdEIsUUFBUSxFQUFFO0VBQ3BDLE9BQU9zQixNQUFNLElBQUlGLE9BQU8sQ0FBQ0UsTUFBTSxFQUFFdEIsUUFBUSxFQUFFcUIsSUFBSSxDQUFDO0FBQ2xEO0FBRUF6QixNQUFNLENBQUNDLE9BQU8sR0FBR21CLFVBQVU7Ozs7Ozs7Ozs7QUNmM0IsSUFBSXJCLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxtREFBVyxDQUFDO0VBQzdCNkIsU0FBUyxHQUFHN0IsbUJBQU8sQ0FBQyx5REFBYyxDQUFDO0VBQ25DOEIsY0FBYyxHQUFHOUIsbUJBQU8sQ0FBQyxtRUFBbUIsQ0FBQzs7QUFFakQ7QUFDQSxJQUFJK0IsT0FBTyxHQUFHLGVBQWU7RUFDekJDLFlBQVksR0FBRyxvQkFBb0I7O0FBRXZDO0FBQ0EsSUFBSUMsY0FBYyxHQUFHaEMsTUFBTSxHQUFHQSxNQUFNLENBQUNpQyxXQUFXLEdBQUdDLFNBQVM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsVUFBVUEsQ0FBQ3RoQyxLQUFLLEVBQUU7RUFDekIsSUFBSUEsS0FBSyxJQUFJLElBQUksRUFBRTtJQUNqQixPQUFPQSxLQUFLLEtBQUtxaEMsU0FBUyxHQUFHSCxZQUFZLEdBQUdELE9BQU87RUFDckQ7RUFDQSxPQUFRRSxjQUFjLElBQUlBLGNBQWMsSUFBSXJ0QixNQUFNLENBQUM5VCxLQUFLLENBQUMsR0FDckQrZ0MsU0FBUyxDQUFDL2dDLEtBQUssQ0FBQyxHQUNoQmdoQyxjQUFjLENBQUNoaEMsS0FBSyxDQUFDO0FBQzNCO0FBRUFvL0IsTUFBTSxDQUFDQyxPQUFPLEdBQUdpQyxVQUFVOzs7Ozs7Ozs7O0FDM0IzQixJQUFJQSxVQUFVLEdBQUdwQyxtQkFBTyxDQUFDLDJEQUFlLENBQUM7RUFDckNxQyxZQUFZLEdBQUdyQyxtQkFBTyxDQUFDLDZEQUFnQixDQUFDOztBQUU1QztBQUNBLElBQUlzQyxPQUFPLEdBQUcsb0JBQW9COztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLGVBQWVBLENBQUN6aEMsS0FBSyxFQUFFO0VBQzlCLE9BQU91aEMsWUFBWSxDQUFDdmhDLEtBQUssQ0FBQyxJQUFJc2hDLFVBQVUsQ0FBQ3RoQyxLQUFLLENBQUMsSUFBSXdoQyxPQUFPO0FBQzVEO0FBRUFwQyxNQUFNLENBQUNDLE9BQU8sR0FBR29DLGVBQWU7Ozs7Ozs7Ozs7QUNqQmhDLElBQUlILFVBQVUsR0FBR3BDLG1CQUFPLENBQUMsMkRBQWUsQ0FBQztFQUNyQ3dDLFFBQVEsR0FBR3hDLG1CQUFPLENBQUMscURBQVksQ0FBQztFQUNoQ3FDLFlBQVksR0FBR3JDLG1CQUFPLENBQUMsNkRBQWdCLENBQUM7O0FBRTVDO0FBQ0EsSUFBSXNDLE9BQU8sR0FBRyxvQkFBb0I7RUFDOUJHLFFBQVEsR0FBRyxnQkFBZ0I7RUFDM0JDLE9BQU8sR0FBRyxrQkFBa0I7RUFDNUJDLE9BQU8sR0FBRyxlQUFlO0VBQ3pCQyxRQUFRLEdBQUcsZ0JBQWdCO0VBQzNCQyxPQUFPLEdBQUcsbUJBQW1CO0VBQzdCQyxNQUFNLEdBQUcsY0FBYztFQUN2QkMsU0FBUyxHQUFHLGlCQUFpQjtFQUM3QkMsU0FBUyxHQUFHLGlCQUFpQjtFQUM3QkMsU0FBUyxHQUFHLGlCQUFpQjtFQUM3QkMsTUFBTSxHQUFHLGNBQWM7RUFDdkJDLFNBQVMsR0FBRyxpQkFBaUI7RUFDN0JDLFVBQVUsR0FBRyxrQkFBa0I7QUFFbkMsSUFBSUMsY0FBYyxHQUFHLHNCQUFzQjtFQUN2Q0MsV0FBVyxHQUFHLG1CQUFtQjtFQUNqQ0MsVUFBVSxHQUFHLHVCQUF1QjtFQUNwQ0MsVUFBVSxHQUFHLHVCQUF1QjtFQUNwQ0MsT0FBTyxHQUFHLG9CQUFvQjtFQUM5QkMsUUFBUSxHQUFHLHFCQUFxQjtFQUNoQ0MsUUFBUSxHQUFHLHFCQUFxQjtFQUNoQ0MsUUFBUSxHQUFHLHFCQUFxQjtFQUNoQ0MsZUFBZSxHQUFHLDRCQUE0QjtFQUM5Q0MsU0FBUyxHQUFHLHNCQUFzQjtFQUNsQ0MsU0FBUyxHQUFHLHNCQUFzQjs7QUFFdEM7QUFDQSxJQUFJQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCQSxjQUFjLENBQUNULFVBQVUsQ0FBQyxHQUFHUyxjQUFjLENBQUNSLFVBQVUsQ0FBQyxHQUN2RFEsY0FBYyxDQUFDUCxPQUFPLENBQUMsR0FBR08sY0FBYyxDQUFDTixRQUFRLENBQUMsR0FDbERNLGNBQWMsQ0FBQ0wsUUFBUSxDQUFDLEdBQUdLLGNBQWMsQ0FBQ0osUUFBUSxDQUFDLEdBQ25ESSxjQUFjLENBQUNILGVBQWUsQ0FBQyxHQUFHRyxjQUFjLENBQUNGLFNBQVMsQ0FBQyxHQUMzREUsY0FBYyxDQUFDRCxTQUFTLENBQUMsR0FBRyxJQUFJO0FBQ2hDQyxjQUFjLENBQUMxQixPQUFPLENBQUMsR0FBRzBCLGNBQWMsQ0FBQ3ZCLFFBQVEsQ0FBQyxHQUNsRHVCLGNBQWMsQ0FBQ1gsY0FBYyxDQUFDLEdBQUdXLGNBQWMsQ0FBQ3RCLE9BQU8sQ0FBQyxHQUN4RHNCLGNBQWMsQ0FBQ1YsV0FBVyxDQUFDLEdBQUdVLGNBQWMsQ0FBQ3JCLE9BQU8sQ0FBQyxHQUNyRHFCLGNBQWMsQ0FBQ3BCLFFBQVEsQ0FBQyxHQUFHb0IsY0FBYyxDQUFDbkIsT0FBTyxDQUFDLEdBQ2xEbUIsY0FBYyxDQUFDbEIsTUFBTSxDQUFDLEdBQUdrQixjQUFjLENBQUNqQixTQUFTLENBQUMsR0FDbERpQixjQUFjLENBQUNoQixTQUFTLENBQUMsR0FBR2dCLGNBQWMsQ0FBQ2YsU0FBUyxDQUFDLEdBQ3JEZSxjQUFjLENBQUNkLE1BQU0sQ0FBQyxHQUFHYyxjQUFjLENBQUNiLFNBQVMsQ0FBQyxHQUNsRGEsY0FBYyxDQUFDWixVQUFVLENBQUMsR0FBRyxLQUFLOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNhLGdCQUFnQkEsQ0FBQ25qQyxLQUFLLEVBQUU7RUFDL0IsT0FBT3VoQyxZQUFZLENBQUN2aEMsS0FBSyxDQUFDLElBQ3hCMGhDLFFBQVEsQ0FBQzFoQyxLQUFLLENBQUNuRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUNxcEMsY0FBYyxDQUFDNUIsVUFBVSxDQUFDdGhDLEtBQUssQ0FBQyxDQUFDO0FBQ2pFO0FBRUFvL0IsTUFBTSxDQUFDQyxPQUFPLEdBQUc4RCxnQkFBZ0I7Ozs7Ozs7Ozs7QUMzRGpDLElBQUlDLFdBQVcsR0FBR2xFLG1CQUFPLENBQUMsNkRBQWdCLENBQUM7RUFDdkNtRSxVQUFVLEdBQUduRSxtQkFBTyxDQUFDLDJEQUFlLENBQUM7O0FBRXpDO0FBQ0EsSUFBSVksV0FBVyxHQUFHaHNCLE1BQU0sQ0FBQ0QsU0FBUzs7QUFFbEM7QUFDQSxJQUFJa3NCLGNBQWMsR0FBR0QsV0FBVyxDQUFDQyxjQUFjOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVN1RCxRQUFRQSxDQUFDeEMsTUFBTSxFQUFFO0VBQ3hCLElBQUksQ0FBQ3NDLFdBQVcsQ0FBQ3RDLE1BQU0sQ0FBQyxFQUFFO0lBQ3hCLE9BQU91QyxVQUFVLENBQUN2QyxNQUFNLENBQUM7RUFDM0I7RUFDQSxJQUFJMzNCLE1BQU0sR0FBRyxFQUFFO0VBQ2YsS0FBSyxJQUFJM1AsR0FBRyxJQUFJc2EsTUFBTSxDQUFDZ3RCLE1BQU0sQ0FBQyxFQUFFO0lBQzlCLElBQUlmLGNBQWMsQ0FBQ2grQixJQUFJLENBQUMrK0IsTUFBTSxFQUFFdG5DLEdBQUcsQ0FBQyxJQUFJQSxHQUFHLElBQUksYUFBYSxFQUFFO01BQzVEMlAsTUFBTSxDQUFDaEgsSUFBSSxDQUFDM0ksR0FBRyxDQUFDO0lBQ2xCO0VBQ0Y7RUFDQSxPQUFPMlAsTUFBTTtBQUNmO0FBRUFpMkIsTUFBTSxDQUFDQyxPQUFPLEdBQUdpRSxRQUFROzs7Ozs7Ozs7O0FDN0J6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTN0QsU0FBU0EsQ0FBQzFtQixDQUFDLEVBQUV5bUIsUUFBUSxFQUFFO0VBQzlCLElBQUl2MkIsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNWRSxNQUFNLEdBQUdxTSxLQUFLLENBQUN1RCxDQUFDLENBQUM7RUFFckIsT0FBTyxFQUFFOVAsS0FBSyxHQUFHOFAsQ0FBQyxFQUFFO0lBQ2xCNVAsTUFBTSxDQUFDRixLQUFLLENBQUMsR0FBR3UyQixRQUFRLENBQUN2MkIsS0FBSyxDQUFDO0VBQ2pDO0VBQ0EsT0FBT0UsTUFBTTtBQUNmO0FBRUFpMkIsTUFBTSxDQUFDQyxPQUFPLEdBQUdJLFNBQVM7Ozs7Ozs7Ozs7QUNuQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzhELFNBQVNBLENBQUN0ckIsSUFBSSxFQUFFO0VBQ3ZCLE9BQU8sVUFBU2pZLEtBQUssRUFBRTtJQUNyQixPQUFPaVksSUFBSSxDQUFDalksS0FBSyxDQUFDO0VBQ3BCLENBQUM7QUFDSDtBQUVBby9CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHa0UsU0FBUzs7Ozs7Ozs7OztBQ2IxQixJQUFJQyxRQUFRLEdBQUd0RSxtQkFBTyxDQUFDLHFEQUFZLENBQUM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3VFLFlBQVlBLENBQUN6akMsS0FBSyxFQUFFO0VBQzNCLE9BQU8sT0FBT0EsS0FBSyxJQUFJLFVBQVUsR0FBR0EsS0FBSyxHQUFHd2pDLFFBQVE7QUFDdEQ7QUFFQXBFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHb0UsWUFBWTs7Ozs7Ozs7OztBQ2I3QixJQUFJQyxXQUFXLEdBQUd4RSxtQkFBTyxDQUFDLDJEQUFlLENBQUM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTdUIsY0FBY0EsQ0FBQ2tELFFBQVEsRUFBRUMsU0FBUyxFQUFFO0VBQzNDLE9BQU8sVUFBU0MsVUFBVSxFQUFFckUsUUFBUSxFQUFFO0lBQ3BDLElBQUlxRSxVQUFVLElBQUksSUFBSSxFQUFFO01BQ3RCLE9BQU9BLFVBQVU7SUFDbkI7SUFDQSxJQUFJLENBQUNILFdBQVcsQ0FBQ0csVUFBVSxDQUFDLEVBQUU7TUFDNUIsT0FBT0YsUUFBUSxDQUFDRSxVQUFVLEVBQUVyRSxRQUFRLENBQUM7SUFDdkM7SUFDQSxJQUFJM2xDLE1BQU0sR0FBR2dxQyxVQUFVLENBQUNocUMsTUFBTTtNQUMxQm9QLEtBQUssR0FBRzI2QixTQUFTLEdBQUcvcEMsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUMvQmlxQyxRQUFRLEdBQUdod0IsTUFBTSxDQUFDK3ZCLFVBQVUsQ0FBQztJQUVqQyxPQUFRRCxTQUFTLEdBQUczNkIsS0FBSyxFQUFFLEdBQUcsRUFBRUEsS0FBSyxHQUFHcFAsTUFBTSxFQUFHO01BQy9DLElBQUkybEMsUUFBUSxDQUFDc0UsUUFBUSxDQUFDNzZCLEtBQUssQ0FBQyxFQUFFQSxLQUFLLEVBQUU2NkIsUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFO1FBQ3hEO01BQ0Y7SUFDRjtJQUNBLE9BQU9ELFVBQVU7RUFDbkIsQ0FBQztBQUNIO0FBRUF6RSxNQUFNLENBQUNDLE9BQU8sR0FBR29CLGNBQWM7Ozs7Ozs7Ozs7QUMvQi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0UsYUFBYUEsQ0FBQ2lELFNBQVMsRUFBRTtFQUNoQyxPQUFPLFVBQVM5QyxNQUFNLEVBQUV0QixRQUFRLEVBQUV1RSxRQUFRLEVBQUU7SUFDMUMsSUFBSTk2QixLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ1Y2NkIsUUFBUSxHQUFHaHdCLE1BQU0sQ0FBQ2d0QixNQUFNLENBQUM7TUFDekI5K0IsS0FBSyxHQUFHK2hDLFFBQVEsQ0FBQ2pELE1BQU0sQ0FBQztNQUN4QmpuQyxNQUFNLEdBQUdtSSxLQUFLLENBQUNuSSxNQUFNO0lBRXpCLE9BQU9BLE1BQU0sRUFBRSxFQUFFO01BQ2YsSUFBSUwsR0FBRyxHQUFHd0ksS0FBSyxDQUFDNGhDLFNBQVMsR0FBRy9wQyxNQUFNLEdBQUcsRUFBRW9QLEtBQUssQ0FBQztNQUM3QyxJQUFJdTJCLFFBQVEsQ0FBQ3NFLFFBQVEsQ0FBQ3RxQyxHQUFHLENBQUMsRUFBRUEsR0FBRyxFQUFFc3FDLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUNwRDtNQUNGO0lBQ0Y7SUFDQSxPQUFPaEQsTUFBTTtFQUNmLENBQUM7QUFDSDtBQUVBMUIsTUFBTSxDQUFDQyxPQUFPLEdBQUdzQixhQUFhOzs7Ozs7Ozs7O0FDeEI5QjtBQUNBLElBQUlxRCxVQUFVLEdBQUcsT0FBT0MscUJBQU0sSUFBSSxRQUFRLElBQUlBLHFCQUFNLElBQUlBLHFCQUFNLENBQUNud0IsTUFBTSxLQUFLQSxNQUFNLElBQUltd0IscUJBQU07QUFFMUY3RSxNQUFNLENBQUNDLE9BQU8sR0FBRzJFLFVBQVU7Ozs7Ozs7Ozs7QUNIM0IsSUFBSTdFLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxtREFBVyxDQUFDOztBQUVqQztBQUNBLElBQUlZLFdBQVcsR0FBR2hzQixNQUFNLENBQUNELFNBQVM7O0FBRWxDO0FBQ0EsSUFBSWtzQixjQUFjLEdBQUdELFdBQVcsQ0FBQ0MsY0FBYzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUltRSxvQkFBb0IsR0FBR3BFLFdBQVcsQ0FBQ3FFLFFBQVE7O0FBRS9DO0FBQ0EsSUFBSWhELGNBQWMsR0FBR2hDLE1BQU0sR0FBR0EsTUFBTSxDQUFDaUMsV0FBVyxHQUFHQyxTQUFTOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNOLFNBQVNBLENBQUMvZ0MsS0FBSyxFQUFFO0VBQ3hCLElBQUlva0MsS0FBSyxHQUFHckUsY0FBYyxDQUFDaCtCLElBQUksQ0FBQy9CLEtBQUssRUFBRW1oQyxjQUFjLENBQUM7SUFDbERrRCxHQUFHLEdBQUdya0MsS0FBSyxDQUFDbWhDLGNBQWMsQ0FBQztFQUUvQixJQUFJO0lBQ0ZuaEMsS0FBSyxDQUFDbWhDLGNBQWMsQ0FBQyxHQUFHRSxTQUFTO0lBQ2pDLElBQUlpRCxRQUFRLEdBQUcsSUFBSTtFQUNyQixDQUFDLENBQUMsT0FBTzFrQyxDQUFDLEVBQUUsQ0FBQztFQUViLElBQUl1SixNQUFNLEdBQUcrNkIsb0JBQW9CLENBQUNuaUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDO0VBQzdDLElBQUlza0MsUUFBUSxFQUFFO0lBQ1osSUFBSUYsS0FBSyxFQUFFO01BQ1Rwa0MsS0FBSyxDQUFDbWhDLGNBQWMsQ0FBQyxHQUFHa0QsR0FBRztJQUM3QixDQUFDLE1BQU07TUFDTCxPQUFPcmtDLEtBQUssQ0FBQ21oQyxjQUFjLENBQUM7SUFDOUI7RUFDRjtFQUNBLE9BQU9oNEIsTUFBTTtBQUNmO0FBRUFpMkIsTUFBTSxDQUFDQyxPQUFPLEdBQUcwQixTQUFTOzs7Ozs7Ozs7O0FDN0MxQjtBQUNBLElBQUl3RCxnQkFBZ0IsR0FBRyxnQkFBZ0I7O0FBRXZDO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLGtCQUFrQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM1RSxPQUFPQSxDQUFDNS9CLEtBQUssRUFBRW5HLE1BQU0sRUFBRTtFQUM5QixJQUFJMkosSUFBSSxHQUFHLE9BQU94RCxLQUFLO0VBQ3ZCbkcsTUFBTSxHQUFHQSxNQUFNLElBQUksSUFBSSxHQUFHMHFDLGdCQUFnQixHQUFHMXFDLE1BQU07RUFFbkQsT0FBTyxDQUFDLENBQUNBLE1BQU0sS0FDWjJKLElBQUksSUFBSSxRQUFRLElBQ2RBLElBQUksSUFBSSxRQUFRLElBQUlnaEMsUUFBUSxDQUFDNThCLElBQUksQ0FBQzVILEtBQUssQ0FBRSxDQUFDLElBQ3hDQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUlBLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJQSxLQUFLLEdBQUduRyxNQUFPO0FBQ3hEO0FBRUF1bEMsTUFBTSxDQUFDQyxPQUFPLEdBQUdPLE9BQU87Ozs7Ozs7Ozs7QUN4QnhCO0FBQ0EsSUFBSUUsV0FBVyxHQUFHaHNCLE1BQU0sQ0FBQ0QsU0FBUzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTdXZCLFdBQVdBLENBQUNwakMsS0FBSyxFQUFFO0VBQzFCLElBQUl5a0MsSUFBSSxHQUFHemtDLEtBQUssSUFBSUEsS0FBSyxDQUFDbEgsV0FBVztJQUNqQzRyQyxLQUFLLEdBQUksT0FBT0QsSUFBSSxJQUFJLFVBQVUsSUFBSUEsSUFBSSxDQUFDNXdCLFNBQVMsSUFBS2lzQixXQUFXO0VBRXhFLE9BQU85L0IsS0FBSyxLQUFLMGtDLEtBQUs7QUFDeEI7QUFFQXRGLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHK0QsV0FBVzs7Ozs7Ozs7OztBQ2pCNUIsSUFBSXVCLE9BQU8sR0FBR3pGLG1CQUFPLENBQUMscURBQVksQ0FBQzs7QUFFbkM7QUFDQSxJQUFJbUUsVUFBVSxHQUFHc0IsT0FBTyxDQUFDN3dCLE1BQU0sQ0FBQytzQixJQUFJLEVBQUUvc0IsTUFBTSxDQUFDO0FBRTdDc3JCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHZ0UsVUFBVTs7Ozs7Ozs7Ozs7QUNMM0IsSUFBSVcsVUFBVSxHQUFHOUUsbUJBQU8sQ0FBQywyREFBZSxDQUFDOztBQUV6QztBQUNBLElBQUkwRixXQUFXLEdBQUcsS0FBMEIsSUFBSXZGLE9BQU8sSUFBSSxDQUFDQSxPQUFPLENBQUMxdEIsUUFBUSxJQUFJMHRCLE9BQU87O0FBRXZGO0FBQ0EsSUFBSXdGLFVBQVUsR0FBR0QsV0FBVyxJQUFJLFFBQWEsSUFBSSxRQUFRLElBQUl4RixNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDenRCLFFBQVEsSUFBSXl0QixNQUFNOztBQUVqRztBQUNBLElBQUkwRixhQUFhLEdBQUdELFVBQVUsSUFBSUEsVUFBVSxDQUFDeEYsT0FBTyxLQUFLdUYsV0FBVzs7QUFFcEU7QUFDQSxJQUFJRyxXQUFXLEdBQUdELGFBQWEsSUFBSWQsVUFBVSxDQUFDZ0IsT0FBTzs7QUFFckQ7QUFDQSxJQUFJQyxRQUFRLEdBQUksWUFBVztFQUN6QixJQUFJO0lBQ0Y7SUFDQSxJQUFJQyxLQUFLLEdBQUdMLFVBQVUsSUFBSUEsVUFBVSxDQUFDM0YsT0FBTyxJQUFJMkYsVUFBVSxDQUFDM0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0csS0FBSztJQUVoRixJQUFJQSxLQUFLLEVBQUU7TUFDVCxPQUFPQSxLQUFLO0lBQ2Q7O0lBRUE7SUFDQSxPQUFPSCxXQUFXLElBQUlBLFdBQVcsQ0FBQ0ksT0FBTyxJQUFJSixXQUFXLENBQUNJLE9BQU8sQ0FBQyxNQUFNLENBQUM7RUFDMUUsQ0FBQyxDQUFDLE9BQU92bEMsQ0FBQyxFQUFFLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBRTtBQUVKdy9CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHNEYsUUFBUTs7Ozs7Ozs7OztBQzdCekI7QUFDQSxJQUFJbkYsV0FBVyxHQUFHaHNCLE1BQU0sQ0FBQ0QsU0FBUzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlxd0Isb0JBQW9CLEdBQUdwRSxXQUFXLENBQUNxRSxRQUFROztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNuRCxjQUFjQSxDQUFDaGhDLEtBQUssRUFBRTtFQUM3QixPQUFPa2tDLG9CQUFvQixDQUFDbmlDLElBQUksQ0FBQy9CLEtBQUssQ0FBQztBQUN6QztBQUVBby9CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHMkIsY0FBYzs7Ozs7Ozs7OztBQ3JCL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMyRCxPQUFPQSxDQUFDMXNCLElBQUksRUFBRW5XLFNBQVMsRUFBRTtFQUNoQyxPQUFPLFVBQVNzakMsR0FBRyxFQUFFO0lBQ25CLE9BQU9udEIsSUFBSSxDQUFDblcsU0FBUyxDQUFDc2pDLEdBQUcsQ0FBQyxDQUFDO0VBQzdCLENBQUM7QUFDSDtBQUVBaEcsTUFBTSxDQUFDQyxPQUFPLEdBQUdzRixPQUFPOzs7Ozs7Ozs7O0FDZHhCLElBQUlYLFVBQVUsR0FBRzlFLG1CQUFPLENBQUMsMkRBQWUsQ0FBQzs7QUFFekM7QUFDQSxJQUFJbUcsUUFBUSxHQUFHLE9BQU83eEIsSUFBSSxJQUFJLFFBQVEsSUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNNLE1BQU0sS0FBS0EsTUFBTSxJQUFJTixJQUFJOztBQUVoRjtBQUNBLElBQUl5ckIsSUFBSSxHQUFHK0UsVUFBVSxJQUFJcUIsUUFBUSxJQUFJQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUU5RGxHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixJQUFJOzs7Ozs7Ozs7O0FDUnJCRyx5RkFBcUM7Ozs7Ozs7Ozs7QUNBckMsSUFBSUUsU0FBUyxHQUFHSixtQkFBTyxDQUFDLHlEQUFjLENBQUM7RUFDbkN3QixRQUFRLEdBQUd4QixtQkFBTyxDQUFDLHVEQUFhLENBQUM7RUFDakN1RSxZQUFZLEdBQUd2RSxtQkFBTyxDQUFDLCtEQUFpQixDQUFDO0VBQ3pDenBCLE9BQU8sR0FBR3lwQixtQkFBTyxDQUFDLG1EQUFXLENBQUM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVN4OUIsT0FBT0EsQ0FBQ21pQyxVQUFVLEVBQUVyRSxRQUFRLEVBQUU7RUFDckMsSUFBSXZuQixJQUFJLEdBQUd4QyxPQUFPLENBQUNvdUIsVUFBVSxDQUFDLEdBQUd2RSxTQUFTLEdBQUdvQixRQUFRO0VBQ3JELE9BQU96b0IsSUFBSSxDQUFDNHJCLFVBQVUsRUFBRUosWUFBWSxDQUFDakUsUUFBUSxDQUFDLENBQUM7QUFDakQ7QUFFQUosTUFBTSxDQUFDQyxPQUFPLEdBQUczOUIsT0FBTzs7Ozs7Ozs7OztBQ3hDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOGhDLFFBQVFBLENBQUN4akMsS0FBSyxFQUFFO0VBQ3ZCLE9BQU9BLEtBQUs7QUFDZDtBQUVBby9CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbUUsUUFBUTs7Ozs7Ozs7OztBQ3BCekIsSUFBSS9CLGVBQWUsR0FBR3ZDLG1CQUFPLENBQUMscUVBQW9CLENBQUM7RUFDL0NxQyxZQUFZLEdBQUdyQyxtQkFBTyxDQUFDLDZEQUFnQixDQUFDOztBQUU1QztBQUNBLElBQUlZLFdBQVcsR0FBR2hzQixNQUFNLENBQUNELFNBQVM7O0FBRWxDO0FBQ0EsSUFBSWtzQixjQUFjLEdBQUdELFdBQVcsQ0FBQ0MsY0FBYzs7QUFFL0M7QUFDQSxJQUFJd0Ysb0JBQW9CLEdBQUd6RixXQUFXLENBQUN5RixvQkFBb0I7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk3RixXQUFXLEdBQUcrQixlQUFlLENBQUMsWUFBVztFQUFFLE9BQU9ud0IsU0FBUztBQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR213QixlQUFlLEdBQUcsVUFBU3poQyxLQUFLLEVBQUU7RUFDeEcsT0FBT3VoQyxZQUFZLENBQUN2aEMsS0FBSyxDQUFDLElBQUkrL0IsY0FBYyxDQUFDaCtCLElBQUksQ0FBQy9CLEtBQUssRUFBRSxRQUFRLENBQUMsSUFDaEUsQ0FBQ3VsQyxvQkFBb0IsQ0FBQ3hqQyxJQUFJLENBQUMvQixLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQy9DLENBQUM7QUFFRG8vQixNQUFNLENBQUNDLE9BQU8sR0FBR0ssV0FBVzs7Ozs7Ozs7OztBQ25DNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlqcUIsT0FBTyxHQUFHRCxLQUFLLENBQUNDLE9BQU87QUFFM0IycEIsTUFBTSxDQUFDQyxPQUFPLEdBQUc1cEIsT0FBTzs7Ozs7Ozs7OztBQ3pCeEIsSUFBSSt2QixVQUFVLEdBQUd0RyxtQkFBTyxDQUFDLHlEQUFjLENBQUM7RUFDcEN3QyxRQUFRLEdBQUd4QyxtQkFBTyxDQUFDLHFEQUFZLENBQUM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3dFLFdBQVdBLENBQUMxakMsS0FBSyxFQUFFO0VBQzFCLE9BQU9BLEtBQUssSUFBSSxJQUFJLElBQUkwaEMsUUFBUSxDQUFDMWhDLEtBQUssQ0FBQ25HLE1BQU0sQ0FBQyxJQUFJLENBQUMyckMsVUFBVSxDQUFDeGxDLEtBQUssQ0FBQztBQUN0RTtBQUVBby9CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHcUUsV0FBVzs7Ozs7Ozs7Ozs7QUNoQzVCLElBQUl6RSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsK0NBQVMsQ0FBQztFQUN6QnVHLFNBQVMsR0FBR3ZHLG1CQUFPLENBQUMsdURBQWEsQ0FBQzs7QUFFdEM7QUFDQSxJQUFJMEYsV0FBVyxHQUFHLEtBQTBCLElBQUl2RixPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDMXRCLFFBQVEsSUFBSTB0QixPQUFPOztBQUV2RjtBQUNBLElBQUl3RixVQUFVLEdBQUdELFdBQVcsSUFBSSxRQUFhLElBQUksUUFBUSxJQUFJeEYsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3p0QixRQUFRLElBQUl5dEIsTUFBTTs7QUFFakc7QUFDQSxJQUFJMEYsYUFBYSxHQUFHRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ3hGLE9BQU8sS0FBS3VGLFdBQVc7O0FBRXBFO0FBQ0EsSUFBSWMsTUFBTSxHQUFHWixhQUFhLEdBQUc3RixJQUFJLENBQUN5RyxNQUFNLEdBQUdyRSxTQUFTOztBQUVwRDtBQUNBLElBQUlzRSxjQUFjLEdBQUdELE1BQU0sR0FBR0EsTUFBTSxDQUFDL0YsUUFBUSxHQUFHMEIsU0FBUzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkxQixRQUFRLEdBQUdnRyxjQUFjLElBQUlGLFNBQVM7QUFFMUNyRyxNQUFNLENBQUNDLE9BQU8sR0FBR00sUUFBUTs7Ozs7Ozs7OztBQ3JDekIsSUFBSTJCLFVBQVUsR0FBR3BDLG1CQUFPLENBQUMsMkRBQWUsQ0FBQztFQUNyQzBHLFFBQVEsR0FBRzFHLG1CQUFPLENBQUMscURBQVksQ0FBQzs7QUFFcEM7QUFDQSxJQUFJMkcsUUFBUSxHQUFHLHdCQUF3QjtFQUNuQzlELE9BQU8sR0FBRyxtQkFBbUI7RUFDN0IrRCxNQUFNLEdBQUcsNEJBQTRCO0VBQ3JDQyxRQUFRLEdBQUcsZ0JBQWdCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU1AsVUFBVUEsQ0FBQ3hsQyxLQUFLLEVBQUU7RUFDekIsSUFBSSxDQUFDNGxDLFFBQVEsQ0FBQzVsQyxLQUFLLENBQUMsRUFBRTtJQUNwQixPQUFPLEtBQUs7RUFDZDtFQUNBO0VBQ0E7RUFDQSxJQUFJcWtDLEdBQUcsR0FBRy9DLFVBQVUsQ0FBQ3RoQyxLQUFLLENBQUM7RUFDM0IsT0FBT3FrQyxHQUFHLElBQUl0QyxPQUFPLElBQUlzQyxHQUFHLElBQUl5QixNQUFNLElBQUl6QixHQUFHLElBQUl3QixRQUFRLElBQUl4QixHQUFHLElBQUkwQixRQUFRO0FBQzlFO0FBRUEzRyxNQUFNLENBQUNDLE9BQU8sR0FBR21HLFVBQVU7Ozs7Ozs7Ozs7QUNwQzNCO0FBQ0EsSUFBSWpCLGdCQUFnQixHQUFHLGdCQUFnQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM3QyxRQUFRQSxDQUFDMWhDLEtBQUssRUFBRTtFQUN2QixPQUFPLE9BQU9BLEtBQUssSUFBSSxRQUFRLElBQzdCQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUlBLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJQSxLQUFLLElBQUl1a0MsZ0JBQWdCO0FBQzdEO0FBRUFuRixNQUFNLENBQUNDLE9BQU8sR0FBR3FDLFFBQVE7Ozs7Ozs7Ozs7QUNsQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU2tFLFFBQVFBLENBQUM1bEMsS0FBSyxFQUFFO0VBQ3ZCLElBQUl3RCxJQUFJLEdBQUcsT0FBT3hELEtBQUs7RUFDdkIsT0FBT0EsS0FBSyxJQUFJLElBQUksS0FBS3dELElBQUksSUFBSSxRQUFRLElBQUlBLElBQUksSUFBSSxVQUFVLENBQUM7QUFDbEU7QUFFQTQ3QixNQUFNLENBQUNDLE9BQU8sR0FBR3VHLFFBQVE7Ozs7Ozs7Ozs7QUM5QnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNyRSxZQUFZQSxDQUFDdmhDLEtBQUssRUFBRTtFQUMzQixPQUFPQSxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU9BLEtBQUssSUFBSSxRQUFRO0FBQ2xEO0FBRUFvL0IsTUFBTSxDQUFDQyxPQUFPLEdBQUdrQyxZQUFZOzs7Ozs7Ozs7O0FDNUI3QixJQUFJNEIsZ0JBQWdCLEdBQUdqRSxtQkFBTyxDQUFDLHVFQUFxQixDQUFDO0VBQ2pEcUUsU0FBUyxHQUFHckUsbUJBQU8sQ0FBQyx5REFBYyxDQUFDO0VBQ25DK0YsUUFBUSxHQUFHL0YsbUJBQU8sQ0FBQyx1REFBYSxDQUFDOztBQUVyQztBQUNBLElBQUk4RyxnQkFBZ0IsR0FBR2YsUUFBUSxJQUFJQSxRQUFRLENBQUNwRixZQUFZOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsWUFBWSxHQUFHbUcsZ0JBQWdCLEdBQUd6QyxTQUFTLENBQUN5QyxnQkFBZ0IsQ0FBQyxHQUFHN0MsZ0JBQWdCO0FBRXBGL0QsTUFBTSxDQUFDQyxPQUFPLEdBQUdRLFlBQVk7Ozs7Ozs7Ozs7QUMxQjdCLElBQUlHLGFBQWEsR0FBR2QsbUJBQU8sQ0FBQyxpRUFBa0IsQ0FBQztFQUMzQ29FLFFBQVEsR0FBR3BFLG1CQUFPLENBQUMsdURBQWEsQ0FBQztFQUNqQ3dFLFdBQVcsR0FBR3hFLG1CQUFPLENBQUMsMkRBQWUsQ0FBQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTMkIsSUFBSUEsQ0FBQ0MsTUFBTSxFQUFFO0VBQ3BCLE9BQU80QyxXQUFXLENBQUM1QyxNQUFNLENBQUMsR0FBR2QsYUFBYSxDQUFDYyxNQUFNLENBQUMsR0FBR3dDLFFBQVEsQ0FBQ3hDLE1BQU0sQ0FBQztBQUN2RTtBQUVBMUIsTUFBTSxDQUFDQyxPQUFPLEdBQUd3QixJQUFJOzs7Ozs7Ozs7O0FDcENyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM0RSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsT0FBTyxLQUFLO0FBQ2Q7QUFFQXJHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHb0csU0FBUzs7Ozs7Ozs7VUNqQjFCOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvQWJvdXQvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9wYWdlcy9EZXRhaWwvRGV0YWlsLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9wYWdlcy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2dzYXAvQ1NTUGx1Z2luLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9nc2FwL2dzYXAtY29yZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZWFjaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdle1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioey8vIOaehOmAoOWHveaVsOWcqOWunuS+i+WMluaXtuS8muS4uuWvueixoeiuvue9ruWIneWni+WxnuaAp+aIlueKtuaAgeOAguaehOmAoOWHveaVsOWumuS5ieS6huWvueixoeWcqOWIm+W7uuaXtuW6lOivpeWFt+Wkh+eahOeJueW+geOAguWcqOWIm+W7uuexu+eahOWunuS+i+WQju+8jOWPr+S7peiuv+mXruWSjOaTjeS9nOi/meS6m+WxnuaAp++8jOi/mOWPr+S7peiwg+eUqOS4juivpeexu+ebuOWFs+iBlOeahOaWueazleOAglxuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHMsXG4gICAgaWRcbiAgfSlcbiAge1xuICAgIHRoaXMuc2VsZWN0b3I9ZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbj17Li4uZWxlbWVudHN9XG4gICAgLy8gc2VsZWN0b3LnlKjmnaXlrZjlgqjkvKDlhaXov5nkuKTkuKrlsZ7mgKfnmoTlvJXnlKjvvIznlKjmnaXlrZjlgqjlr7npobXpnaLlhYPntKDnmoTlvJXnlKjjgIJlbGVtZW505Y+v6IO95piv5LiA5Liq6aG16Z2i55qE5YWD57Sg77yMZWxlbWVudHPlj6/og73mmK/lhYPntKDpm4blkIhcbiAgICAvLyAuLi5lbGVtZW505piv5bGV5byA6L+Q566X56ym77yM55So5LqO5b+r6YCf5aSN5Yi25a+56LGh5oiW5ZCI5bm25a+56LGh5bGe5oCn5Yiw5LiA5Liq5paw55qE5a+56LGh5Lit44CC5Yib5bu65LqG5LiA5Liq5paw55qE5a+56LGh77yM6K+l5a+56LGh5YyF5ZCr5LqGIGVsZW1lbnRzIOS4reeahOaJgOacieWxnuaAp1xuXG4gICAgdGhpcy5pZD1pZFxuICB9XG5cbiAgY3JlYXRlKCl7Ly8gY3JlYXRl5pa55rOV5piv5L2/55SoIHF1ZXJ5U2VsZWN0b3Lov5vooYzpobXpnaLnmoTlhYPntKDpgInmi6nlkozmk43kvZxcbiAgICB0aGlzLmVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIC8vIOWwseaYr+WFiOiwg+eUqOS4iumdoueahOaehOmAoOWHveaVsO+8jOWwhumhtemdoueahGVsZW1lbnTnmoTlgLzlrZjliLB0aGkuc2VsZWN0b3LnmoTlrrnlmajph4zvvIznhLblkI7lnKjmiafooYzov5nkuKpjcmVhdGXlh73mlbDvvIzojrflj5bliLDlvZPliY3ooqvpgInmi6nlmajmiYDmjIflrprnmoTlhYPntKDjgIJxdWVyeVNlbGN0b3Lov5nkuKrmlrnms5XkuI3kvJrpgInmi6nmiYDmnInljLnphY3nmoTlhYPntKDvvIzogIzlj6rkvJrov5Tlm57nrKzkuIDkuKrljLnphY3nmoTlhYPntKDjgIJcbiAgICB0aGlzLmVsZW1lbnRzPXt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgICAvLyDlsIblsZ7mgKflgLzljbPpobXpnaLlhYPntKDlrZjlgqjlnKhlbGVtZW50c+WvueixoeS4reW5tuS7peS7luS7rOeahOWxnuaAp+WQjeWRveWQjVxuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcbiAgICAgIC8vIOaXoOiuuuaYr+ebtOaOpeeahOmhtemdouWFg+e0oO+8iDxkaXY+44CBPHA+44CBPHNwYW4+77yJ6L+Y5piv6YCJ5oup5Zmo5a2X56ym5Liy77yI57G75ZCN44CBSUTjgIHmoIfnrb7lkI3vvInpg73lrZjlnKhlbGVtZW50c+mHjO+8jOWlveeUqOWBmuWQjue7reaTjeS9nOiuv+mXrlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZW50cnk65q+P5Liq5bGe5oCn55qE5YC877yM5Lmf5bCx5piv5bGe5oCn5omA5a+55bqU55qE5YaF5a65O2tleTrlsZ7mgKfnmoTlkI3np7DjgILkvJjngrnmjInnhaflsZ7mgKflkI3vvIjooajnpLrlhYPntKDnsbvlnovmiJbnibnlvoHvvInmnaXorr/pl67lr7nlupTnmoTlhYPntKDmiJblhYPntKDpm4blkIhcbiAgICAgIC8vIOavj+S4quWxnuaAp+eahOWQjeensOihqOekuuS6huS4gOe7hOWFg+e0oOeahOexu+Wei+aIlueJueW+ge+8iOWmgiBhbmltYXRpb25UaXRsZXPjgIFhbmltYXRpb25QYXJhZ3JhcGhzIOetie+8ie+8jOiAjOWvueW6lOeahOWxnuaAp+WAvOaYr+eUqOi/meS6m+mAieaLqeWZqOmAieaLqeWIsOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiOOAglxuICAgIH0pO1xuICAgIC8vIGVudHJ55piv5b2T5YmN5YWD57SgLGZvcmVhY2jnlKjkuI3kuobmjaLmiJDkuoZsb3djYXNoL2VhY2jmnaXpgY3ljoZcbiAgfVxuXG4vLyDlvIDlp4vlgZrliqjnlLvkuobvvZ7irIfvuI9cblxuICBzaG93KCl7XG4gICAgR1NBUC5mcm9tKHRoaXMuZWxlbWVudCx7XG4gICAgICBhdXRvQWxwaGE6MCxcbiAgICAgIGRlbGF5OjVcbiAgICB9KVxuXG4gIFxuICB9XG5cbiAgaGlkZSgpe1xuICAgIEdTQVAudG8odGhpcy5lbGVtZW50LHtcbiAgICAgIGF1dG9BbHBoYTowXG4gICAgfSlcblxuICB9XG59IiwiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICAgIFxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvL0RFUzogc2VsZWN0aW5nIHRoZSBjb250ZW50IGNsYXNzXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTsgLy9ERVM6IGdldHRpbmcgdGhlIGRhdGFzZXQtdGVtcGxhdGVcbiAgfVxuXG5cbiAgY3JlYXRlUGFnZXMoKXtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgICB0aGlzLnBhZ2VzPXtcbiAgICAgICAgYWJvdXQ6bmV3IEFib3V0KCksXG4gICAgICAgIGNvbGxlY3Rpb25zOm5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgICBkZXRhaWw6bmV3IERldGFpbCgpLFxuICAgICAgICBob21lOm5ldyBIb21lKCksICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5wYWdlPXRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpe1xuICAgIGNvbnN0IGxpbmtzID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcbiAgICAvLyDpgInmi6nmiYDmnInpk77mjqXvvIxsaW5rc+aYr+aVsOe7hFxuXG4gICAgZWFjaChsaW5rcyxsaW5rID0+e1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgLy8g6Zi75q2i6ZO+5o6l6buY6K6k6KGM5Li677yM5omT5Y2w5LiL6Z2i55qE5a+56LGhXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbm5ldyBBcHAoKSIsImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBQYWdle1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDonYWJvdXQnLFxuXG4gICAgICBlbGVtZW50OicuYWJvdXQnXG4gICAgfSlcbiAgICAvLyBzdXBlciDosIPnlKjkuobniLbnsbvnmoTmnoTpgKDlh73mlbDvvIzlubbkvKDpgJLkuobkuIDkuKrljIXlkKsgaWQ6ICdhYm91dCcg55qE5a+56LGh44CC6L+Z5Liq5a+56LGh55So5LqO54i257G755qE5p6E6YCg5Ye95pWw44CC54S25ZCO77yM54i257G755qE5p6E6YCg5Ye95pWw5Lit55qEIGNvbnNvbGUubG9nKCdDcmVhdGUnLCB0aGlzLmlkKSDlsIbkvJrlnKjmjqfliLblj7DorrDlvZUgJ0NyZWF0ZSBhYm91dCfjgILov5nmmK/lm6DkuLrniLbnsbvnmoTmnoTpgKDlh73mlbDmjqXmlLbliLDkuoYgeyBpZDogJ2Fib3V0JyB9IOi/meS4quWvueixoe+8jOW5tuiusOW9leS6huebuOWFs+S/oeaBr+OAglxuXG4gIH1cbn0iLCJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb25zIGV4dGVuZHMgUGFnZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6J2NvbGxlY3Rpb25zJyxcbiAgICAgIGVsZW1lbnQ6Jy5jb2xsZWN0aW9ucydcbiAgICB9KVxuICAgIC8vIHN1cGVyIOiwg+eUqOS6hueItuexu+eahOaehOmAoOWHveaVsO+8jOW5tuS8oOmAkuS6huS4gOS4quWMheWQqyBpZDogJ2Fib3V0JyDnmoTlr7nosaHjgILov5nkuKrlr7nosaHnlKjkuo7niLbnsbvnmoTmnoTpgKDlh73mlbDjgILnhLblkI7vvIzniLbnsbvnmoTmnoTpgKDlh73mlbDkuK3nmoQgY29uc29sZS5sb2coJ0NyZWF0ZScsIHRoaXMuaWQpIOWwhuS8muWcqOaOp+WItuWPsOiusOW9lSAnQ3JlYXRlIGFib3V0J+OAgui/meaYr+WboOS4uueItuexu+eahOaehOmAoOWHveaVsOaOpeaUtuWIsOS6hiB7IGlkOiAnYWJvdXQnIH0g6L+Z5Liq5a+56LGh77yM5bm26K6w5b2V5LqG55u45YWz5L+h5oGv44CCXG4gIH1cbn0iLCJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCBleHRlbmRzIFBhZ2V7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOidkZXRhaWwnLFxuICAgICAgZWxlbWVudDonLmRldGFpbCdcbiAgICB9KVxuICAgIC8vIHN1cGVyIOiwg+eUqOS6hueItuexu+eahOaehOmAoOWHveaVsO+8jOW5tuS8oOmAkuS6huS4gOS4quWMheWQqyBpZDogJ2Fib3V0JyDnmoTlr7nosaHjgILov5nkuKrlr7nosaHnlKjkuo7niLbnsbvnmoTmnoTpgKDlh73mlbDjgILnhLblkI7vvIzniLbnsbvnmoTmnoTpgKDlh73mlbDkuK3nmoQgY29uc29sZS5sb2coJ0NyZWF0ZScsIHRoaXMuaWQpIOWwhuS8muWcqOaOp+WItuWPsOiusOW9lSAnQ3JlYXRlIGFib3V0J+OAgui/meaYr+WboOS4uueItuexu+eahOaehOmAoOWHveaVsOaOpeaUtuWIsOS6hiB7IGlkOiAnYWJvdXQnIH0g6L+Z5Liq5a+56LGh77yM5bm26K6w5b2V5LqG55u45YWz5L+h5oGv44CCXG5cbiAgfVxufSIsImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2V7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOidob21lJyxcbiAgICAgIGVsZW1lbnQ6Jy5ob21lJyxcbiAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgbGluazonLmhvbWVfX2xpbmsnLFxuICAgICAgICBuYXZpZ2F0aW9uOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIHN1cGVyIOiwg+eUqOS6hueItuexu+eahOaehOmAoOWHveaVsO+8jOW5tuS8oOmAkuS6huS4gOS4quWMheWQqyBpZDogJ2Fib3V0JyDnmoTlr7nosaHjgILov5nkuKrlr7nosaHnlKjkuo7niLbnsbvnmoTmnoTpgKDlh73mlbDjgILnhLblkI7vvIzniLbnsbvnmoTmnoTpgKDlh73mlbDkuK3nmoQgY29uc29sZS5sb2coJ0NyZWF0ZScsIHRoaXMuaWQpIOWwhuS8muWcqOaOp+WItuWPsOiusOW9lSAnQ3JlYXRlIGFib3V0J+OAgui/meaYr+WboOS4uueItuexu+eahOaehOmAoOWHveaVsOaOpeaUtuWIsOS6hiB7IGlkOiAnYWJvdXQnIH0g6L+Z5Liq5a+56LGh77yM5bm26K6w5b2V5LqG55u45YWz5L+h5oGv44CCXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcblxuICAgIHRoaXMuZWxlbWVudHMubGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXyA9PiBjb25zb2xlLmxvZygnb2gseW91IGNsaWNrZWQgbWUnKSlcbiAgICB9XG5cblxuICBcbn0iLCIvKiFcbiAqIENTU1BsdWdpbiAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBnc2FwLCBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgZ2V0VW5pdCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX2NoZWNrUGx1Z2luLCBfcmVwbGFjZVJhbmRvbSwgX3BsdWdpbnMsIEdTQ2FjaGUsIFByb3BUd2VlbiwgX2NvbmZpZywgX3RpY2tlciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAsIF9wYXJzZVJlbGF0aXZlLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSAvL2ZvciB0aGUgY29tbWVudGVkLW91dCBjbGFzc05hbWUgZmVhdHVyZS5cbn0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5cbnZhciBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsZW1lbnQsXG4gICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgX3RlbXBEaXYsXG4gICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICBfcmV2ZXJ0aW5nLFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3BzID0ge30sXG4gICAgX1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuICAgIF9ERUcyUkFEID0gTWF0aC5QSSAvIDE4MCxcbiAgICBfYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9ob3Jpem9udGFsRXhwID0gLyhsZWZ0fHJpZ2h0fHdpZHRofG1hcmdpbnxwYWRkaW5nfHgpL2ksXG4gICAgX2NvbXBsZXhFeHAgPSAvW1xccyxcXChdXFxTLyxcbiAgICBfcHJvcGVydHlBbGlhc2VzID0ge1xuICBhdXRvQWxwaGE6IFwib3BhY2l0eSx2aXNpYmlsaXR5XCIsXG4gIHNjYWxlOiBcInNjYWxlWCxzY2FsZVlcIixcbiAgYWxwaGE6IFwib3BhY2l0eVwiXG59LFxuICAgIF9yZW5kZXJDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wV2l0aEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wV2l0aEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID09PSAxID8gZGF0YS5lIDogTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51IDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgLy9pZiB1bml0cyBjaGFuZ2UsIHdlIG5lZWQgYSB3YXkgdG8gcmVuZGVyIHRoZSBvcmlnaW5hbCB1bml0L3ZhbHVlIHdoZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nIChyYXRpbzowKVxuX3JlbmRlclJvdW5kZWRDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlclJvdW5kZWRDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGEucyArIGRhdGEuYyAqIHJhdGlvO1xuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgfn4odmFsdWUgKyAodmFsdWUgPCAwID8gLS41IDogLjUpKSArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyAhPT0gMSA/IGRhdGEuYiA6IGRhdGEuZSwgZGF0YSk7XG59LFxuICAgIF9zZXR0ZXJDU1NTdHlsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NTdHlsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NQcm9wKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlID0gZnVuY3Rpb24gX3NldHRlclNjYWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAuc2NhbGVYID0gdGFyZ2V0Ll9nc2FwLnNjYWxlWSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclNjYWxlV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZS5zY2FsZVggPSBjYWNoZS5zY2FsZVkgPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCIsXG4gICAgX3NhdmVTdHlsZSA9IGZ1bmN0aW9uIF9zYXZlU3R5bGUocHJvcGVydHksIGlzTm90Q1NTKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0LFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgaWYgKHByb3BlcnR5IGluIF90cmFuc2Zvcm1Qcm9wcyAmJiBzdHlsZSkge1xuICAgIHRoaXMudGZtID0gdGhpcy50Zm0gfHwge307XG5cbiAgICBpZiAocHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgIHByb3BlcnR5ID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV0gfHwgcHJvcGVydHk7XG4gICAgICB+cHJvcGVydHkuaW5kZXhPZihcIixcIikgPyBwcm9wZXJ0eS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudGZtW2FdID0gX2dldCh0YXJnZXQsIGEpO1xuICAgICAgfSkgOiB0aGlzLnRmbVtwcm9wZXJ0eV0gPSB0YXJnZXQuX2dzYXAueCA/IHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gOiBfZ2V0KHRhcmdldCwgcHJvcGVydHkpOyAvLyBub3RlOiBzY2FsZSB3b3VsZCBtYXAgdG8gXCJzY2FsZVgsc2NhbGVZXCIsIHRodXMgd2UgbG9vcCBhbmQgYXBwbHkgdGhlbSBib3RoLlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3Byb3BlcnR5QWxpYXNlcy50cmFuc2Zvcm0uc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIF9zYXZlU3R5bGUuY2FsbChfdGhpcywgcCwgaXNOb3RDU1MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5kZXhPZihfdHJhbnNmb3JtUHJvcCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuX2dzYXAuc3ZnKSB7XG4gICAgICB0aGlzLnN2Z28gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpO1xuICAgICAgdGhpcy5wcm9wcy5wdXNoKF90cmFuc2Zvcm1PcmlnaW5Qcm9wLCBpc05vdENTUywgXCJcIik7XG4gICAgfVxuXG4gICAgcHJvcGVydHkgPSBfdHJhbnNmb3JtUHJvcDtcbiAgfVxuXG4gIChzdHlsZSB8fCBpc05vdENTUykgJiYgdGhpcy5wcm9wcy5wdXNoKHByb3BlcnR5LCBpc05vdENTUywgc3R5bGVbcHJvcGVydHldKTtcbn0sXG4gICAgX3JlbW92ZUluZGVwZW5kZW50VHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW1vdmVJbmRlcGVuZGVudFRyYW5zZm9ybXMoc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnRyYW5zbGF0ZSkge1xuICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNsYXRlXCIpO1xuICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KFwic2NhbGVcIik7XG4gICAgc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJyb3RhdGVcIik7XG4gIH1cbn0sXG4gICAgX3JldmVydFN0eWxlID0gZnVuY3Rpb24gX3JldmVydFN0eWxlKCkge1xuICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgdGFyZ2V0ID0gdGhpcy50YXJnZXQsXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgaSxcbiAgICAgIHA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgLy8gc3RvcmVkIGxpa2UgdGhpczogcHJvcGVydHksIGlzTm90Q1NTLCB2YWx1ZVxuICAgIHByb3BzW2kgKyAxXSA/IHRhcmdldFtwcm9wc1tpXV0gPSBwcm9wc1tpICsgMl0gOiBwcm9wc1tpICsgMl0gPyBzdHlsZVtwcm9wc1tpXV0gPSBwcm9wc1tpICsgMl0gOiBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wc1tpXS5zdWJzdHIoMCwgMikgPT09IFwiLS1cIiA/IHByb3BzW2ldIDogcHJvcHNbaV0ucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAodGhpcy50Zm0pIHtcbiAgICBmb3IgKHAgaW4gdGhpcy50Zm0pIHtcbiAgICAgIGNhY2hlW3BdID0gdGhpcy50Zm1bcF07XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKCk7XG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsIHRoaXMuc3ZnbyB8fCBcIlwiKTtcbiAgICB9XG5cbiAgICBpID0gX3JldmVydGluZygpO1xuXG4gICAgaWYgKCghaSB8fCAhaS5pc1N0YXJ0KSAmJiAhc3R5bGVbX3RyYW5zZm9ybVByb3BdKSB7XG4gICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcblxuICAgICAgY2FjaGUudW5jYWNoZSA9IDE7IC8vIGlmIGl0J3MgYSBzdGFydEF0IHRoYXQncyBiZWluZyByZXZlcnRlZCBpbiB0aGUgX2luaXRUd2VlbigpIG9mIHRoZSBjb3JlLCB3ZSBkb24ndCBuZWVkIHRvIHVuY2FjaGUgdHJhbnNmb3Jtcy4gVGhpcyBpcyBwdXJlbHkgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRTdHlsZVNhdmVyID0gZnVuY3Rpb24gX2dldFN0eWxlU2F2ZXIodGFyZ2V0LCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBzYXZlciA9IHtcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICBwcm9wczogW10sXG4gICAgcmV2ZXJ0OiBfcmV2ZXJ0U3R5bGUsXG4gICAgc2F2ZTogX3NhdmVTdHlsZVxuICB9O1xuICB0YXJnZXQuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKHRhcmdldCk7IC8vIGp1c3QgbWFrZSBzdXJlIHRoZXJlJ3MgYSBfZ3NhcCBjYWNoZSBkZWZpbmVkIGJlY2F1c2Ugd2UgcmVhZCBmcm9tIGl0IGluIF9zYXZlU3R5bGUoKSBhbmQgaXQncyBtb3JlIGVmZmljaWVudCB0byBqdXN0IGNoZWNrIGl0IGhlcmUgb25jZS5cblxuICBwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gc2F2ZXIuc2F2ZShwKTtcbiAgfSk7XG4gIHJldHVybiBzYXZlcjtcbn0sXG4gICAgX3N1cHBvcnRzM0QsXG4gICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudE5TID8gX2RvYy5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgc2VydmVycyBzd2FwIGluIGh0dHBzIGZvciBodHRwIGluIHRoZSBuYW1lc3BhY2Ugd2hpY2ggY2FuIGJyZWFrIHRoaW5ncywgbWFraW5nIFwic3R5bGVcIiBpbmFjY2Vzc2libGUuXG5cbiAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgZW52aXJvbm1lbnRzIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgZWxlbWVudCdzIHN0eWxlIHdoZW4gY3JlYXRlZCB3aXRoIGEgbmFtZXNwYWNlIGluIHdoaWNoIGNhc2Ugd2UgZGVmYXVsdCB0byB0aGUgc3RhbmRhcmQgY3JlYXRlRWxlbWVudCgpIHRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZS4gQWxzbyBub3RlIHRoYXQgd2hlbiBHU0FQIGlzIGVtYmVkZGVkIGRpcmVjdGx5IGluc2lkZSBhbiBTVkcgZmlsZSwgY3JlYXRlRWxlbWVudCgpIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgc3R5bGUgb2JqZWN0IGluIEZpcmVmb3ggKHNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMjE1LXByb2JsZW0tdXNpbmctdHdlZW5tYXgtaW4tc3RhbmRhbG9uZS1zZWxmLWNvbnRhaW5pbmctc3ZnLWZpbGUtZXJyLWNhbm5vdC1zZXQtcHJvcGVydHktY3NzdGV4dC1vZi11bmRlZmluZWQvKS5cbn0sXG4gICAgX2dldENvbXB1dGVkUHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBza2lwUHJlZml4RmFsbGJhY2spIHtcbiAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiOyAvL2NzcyB2YXJpYWJsZXMgbWF5IG5vdCBuZWVkIGNhcHMgc3dhcHBlZCBvdXQgZm9yIGRhc2hlcyBhbmQgbG93ZXJjYXNlLlxufSxcbiAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gIHZhciBlID0gZWxlbWVudCB8fCBfdGVtcERpdixcbiAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgaSA9IDU7XG5cbiAgaWYgKHByb3BlcnR5IGluIHMgJiYgIXByZWZlclByZWZpeCkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG59LFxuICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBfd2luLmRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiOyAvL21ha2Ugc3VyZSB0byBvdmVycmlkZSBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBtYXkgY29udGFtaW5hdGUgbWVhc3VyZW1lbnRzLCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBvdmVycmVhY2hpbmcgc3R5bGUgc2hlZXRzLlxuXG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICBfcmV2ZXJ0aW5nID0gZ3NhcC5jb3JlLnJldmVydGluZztcbiAgICBfcGx1Z2luSW5pdHRlZCA9IDE7XG4gIH1cbn0sXG4gICAgX2dldEJCb3hIYWNrID0gZnVuY3Rpb24gX2dldEJCb3hIYWNrKHN3YXBJZlBvc3NpYmxlKSB7XG4gIC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIHRoYXQgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCBnZXRCQm94KCkgb24gU1ZHIGVsZW1lbnRzIGluc2lkZSBhIDxkZWZzPiBlbGVtZW50IGFuZC9vciA8bWFzaz4uIFdlIHRyeSBjcmVhdGluZyBhbiBTVkcsIGFkZGluZyBpdCB0byB0aGUgZG9jdW1lbnRFbGVtZW50IGFuZCB0b3NzIHRoZSBlbGVtZW50IGluIHRoZXJlIHNvIHRoYXQgaXQncyBkZWZpbml0ZWx5IHBhcnQgb2YgdGhlIHJlbmRlcmluZyB0cmVlLCB0aGVuIGdyYWIgdGhlIGJib3ggYW5kIGlmIGl0IHdvcmtzLCB3ZSBhY3R1YWxseSBzd2FwIG91dCB0aGUgb3JpZ2luYWwgZ2V0QkJveCgpIG1ldGhvZCBmb3Igb3VyIG93biB0aGF0IGRvZXMgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbmV2ZXIgZ2V0QkJveCBpcyBuZWVkZWQuIFRoaXMgaGVscHMgZW5zdXJlIHRoYXQgcGVyZm9ybWFuY2UgaXMgb3B0aW1hbCAob25seSBkbyBhbGwgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4uLm1vc3QgZWxlbWVudHMgZG9uJ3QgbmVlZCBpdCkuXG4gIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgb2xkU2libGluZyA9IHRoaXMubmV4dFNpYmxpbmcsXG4gICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICBiYm94O1xuXG4gIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHN3YXBJZlBvc3NpYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgIHRoaXMuX2dzYXBCQm94ID0gdGhpcy5nZXRCQm94OyAvL3N0b3JlIHRoZSBvcmlnaW5hbFxuXG4gICAgICB0aGlzLmdldEJCb3ggPSBfZ2V0QkJveEhhY2s7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgIGJib3ggPSB0aGlzLl9nc2FwQkJveCgpO1xuICB9XG5cbiAgaWYgKG9sZFBhcmVudCkge1xuICAgIGlmIChvbGRTaWJsaW5nKSB7XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3ZnKTtcblxuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gIHJldHVybiBiYm94O1xufSxcbiAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRCQm94ID0gZnVuY3Rpb24gX2dldEJCb3godGFyZ2V0KSB7XG4gIHZhciBib3VuZHM7XG5cbiAgdHJ5IHtcbiAgICBib3VuZHMgPSB0YXJnZXQuZ2V0QkJveCgpOyAvL0ZpcmVmb3ggdGhyb3dzIGVycm9ycyBpZiB5b3UgdHJ5IGNhbGxpbmcgZ2V0QkJveCgpIG9uIGFuIFNWRyBlbGVtZW50IHRoYXQncyBub3QgcmVuZGVyZWQgKGxpa2UgaW4gYSA8c3ltYm9sPiBvciA8ZGVmcz4pLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTIxMThcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBtaXNyZXBvcnQgdGhlIGJvdW5kcyBpZiB0aGUgZWxlbWVudCBoYXMgemVybyB3aWR0aCBhbmQgaGVpZ2h0IChpdCBqdXN0IGFzc3VtZXMgaXQncyBhdCB4OjAsIHk6MCksIHRodXMgd2UgbmVlZCB0byBtYW51YWxseSBncmFiIHRoZSBwb3NpdGlvbiBpbiB0aGF0IGNhc2UuXG5cbiAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgeDogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ4XCIsIFwiY3hcIiwgXCJ4MVwiXSkgfHwgMCxcbiAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9IDogYm91bmRzO1xufSxcbiAgICBfaXNTVkcgPSBmdW5jdGlvbiBfaXNTVkcoZSkge1xuICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbn0sXG4gICAgLy9yZXBvcnRzIGlmIHRoZSBlbGVtZW50IGlzIGFuIFNWRyBvbiB3aGljaCBnZXRCQm94KCkgYWN0dWFsbHkgd29ya3Ncbl9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSkge1xuICAgIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgX25vblN0YW5kYXJkTGF5b3V0cyA9IHtcbiAgZ3JpZDogMSxcbiAgZmxleDogMVxufSxcbiAgICAvL3Rha2VzIGEgc2luZ2xlIHZhbHVlIGxpa2UgMjBweCBhbmQgY29udmVydHMgaXQgdG8gdGhlIHVuaXQgc3BlY2lmaWVkLCBsaWtlIFwiJVwiLCByZXR1cm5pbmcgb25seSB0aGUgbnVtZXJpYyBhbW91bnQuXG5fY29udmVydFRvVW5pdCA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSB7XG4gIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbGVhdmUgZXh0cmEgd2hpdGVzcGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIENTUyB2YXJpYWJsZXMsIGhlbmNlIHRoZSBuZWVkIHRvIHRyaW0oKVxuICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgaXNSb290U1ZHID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIixcbiAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgdG9QaXhlbHMgPSB1bml0ID09PSBcInB4XCIsXG4gICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgIHB4LFxuICAgICAgcGFyZW50LFxuICAgICAgY2FjaGUsXG4gICAgICBpc1NWRztcblxuICBpZiAodW5pdCA9PT0gY3VyVW5pdCB8fCAhY3VyVmFsdWUgfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbdW5pdF0gfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbY3VyVW5pdF0pIHtcbiAgICByZXR1cm4gY3VyVmFsdWU7XG4gIH1cblxuICBjdXJVbml0ICE9PSBcInB4XCIgJiYgIXRvUGl4ZWxzICYmIChjdXJWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBcInB4XCIpKTtcbiAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gIGlmICgodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgIHB4ID0gaXNTVkcgPyB0YXJnZXQuZ2V0QkJveCgpW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA6IHRhcmdldFttZWFzdXJlUHJvcGVydHldO1xuICAgIHJldHVybiBfcm91bmQodG9QZXJjZW50ID8gY3VyVmFsdWUgLyBweCAqIGFtb3VudCA6IGN1clZhbHVlIC8gMTAwICogcHgpO1xuICB9XG5cbiAgc3R5bGVbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdID0gYW1vdW50ICsgKHRvUGl4ZWxzID8gY3VyVW5pdCA6IHVuaXQpO1xuICBwYXJlbnQgPSB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpIHx8IHVuaXQgPT09IFwiZW1cIiAmJiB0YXJnZXQuYXBwZW5kQ2hpbGQgJiYgIWlzUm9vdFNWRyA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gIGlmIChpc1NWRykge1xuICAgIHBhcmVudCA9ICh0YXJnZXQub3duZXJTVkdFbGVtZW50IHx8IHt9KS5wYXJlbnROb2RlO1xuICB9XG5cbiAgaWYgKCFwYXJlbnQgfHwgcGFyZW50ID09PSBfZG9jIHx8ICFwYXJlbnQuYXBwZW5kQ2hpbGQpIHtcbiAgICBwYXJlbnQgPSBfZG9jLmJvZHk7XG4gIH1cblxuICBjYWNoZSA9IHBhcmVudC5fZ3NhcDtcblxuICBpZiAoY2FjaGUgJiYgdG9QZXJjZW50ICYmIGNhY2hlLndpZHRoICYmIGhvcml6b250YWwgJiYgY2FjaGUudGltZSA9PT0gX3RpY2tlci50aW1lICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIF9yb3VuZChjdXJWYWx1ZSAvIGNhY2hlLndpZHRoICogYW1vdW50KTtcbiAgfSBlbHNlIHtcbiAgICAodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAhX25vblN0YW5kYXJkTGF5b3V0c1tfZ2V0Q29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQsIFwiZGlzcGxheVwiKV0gJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiB2YWx1ZS5zdmcgPyB2YWx1ZS5vcmlnaW4gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy8gbm90ZTogd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA9PT0gXCJub25lXCIpIHtcbiAgICAvLyBzb21lIGJyb3dzZXJzIGxpa2UgU2FmYXJpIGFjdHVhbGx5IFBSRUZFUiB0aGUgcHJlZml4ZWQgcHJvcGVydHkgYW5kIG1pcy1yZXBvcnQgdGhlIHVucHJlZml4ZWQgdmFsdWUgbGlrZSBjbGlwUGF0aCAoQlVHKS4gSW4gb3RoZXIgd29yZHMsIGV2ZW4gdGhvdWdoIGNsaXBQYXRoIGV4aXN0cyBpbiB0aGUgc3R5bGUgKFwiY2xpcFBhdGhcIiBpbiB0YXJnZXQuc3R5bGUpIGFuZCBpdCdzIHNldCBpbiB0aGUgQ1NTIHByb3Blcmx5IChhbG9uZyB3aXRoIC13ZWJraXQtY2xpcC1wYXRoKSwgU2FmYXJpIHJlcG9ydHMgY2xpcFBhdGggYXMgXCJub25lXCIgd2hlcmVhcyBXZWJraXRDbGlwUGF0aCByZXBvcnRzIGFjY3VyYXRlbHkgbGlrZSBcImVsbGlwc2UoMTAwJSAwJSBhdCA1MCUgMCUpXCIsIHNvIGluIHRoaXMgY2FzZSB3ZSBtdXN0IFNXSVRDSCB0byB1c2luZyB0aGUgcHJlZml4ZWQgcHJvcGVydHkgaW5zdGVhZC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMTgzMTAtY2xpcHBhdGgtZG9lc250LXdvcmstb24taW9zL1xuICAgIHZhciBwID0gX2NoZWNrUHJvcFByZWZpeChwcm9wLCB0YXJnZXQsIDEpLFxuICAgICAgICBzID0gcCAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHAsIDEpO1xuXG4gICAgaWYgKHMgJiYgcyAhPT0gc3RhcnQpIHtcbiAgICAgIHByb3AgPSBwO1xuICAgICAgc3RhcnQgPSBzO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJib3JkZXJDb2xvclwiKSB7XG4gICAgICBzdGFydCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJib3JkZXJUb3BDb2xvclwiKTsgLy8gRmlyZWZveCBidWc6IGFsd2F5cyByZXBvcnRzIFwiYm9yZGVyQ29sb3JcIiBhcyBcIlwiLCBzbyB3ZSBtdXN0IGZhbGwgYmFjayB0byBib3JkZXJUb3BDb2xvci4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjQ1ODMtaG93LXRvLXJldHVybi1jb2xvcnMtdGhhdC1pLWhhZC1hZnRlci1yZXZlcnNlL1xuICAgIH1cbiAgfVxuXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldC5zdHlsZSwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICBhLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnRWYWx1ZXMsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGNvbG9yLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBlbmRVbml0LFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVmFsdWVzO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vIGVuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvLyBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLiBJZiBjb2xvcnMgYXJlIGZvdW5kLCBpdCByZXR1cm5zIHRydWUgYW5kIHRoZW4gd2UgbXVzdCBtYXRjaCB3aGVyZSB0aGUgY29sb3Igc2hvd3MgdXAgb3JkZXItd2lzZSBiZWNhdXNlIGZvciB0aGluZ3MgbGlrZSBib3hTaGFkb3csIHNvbWV0aW1lcyB0aGUgYnJvd3NlciBwcm92aWRlcyB0aGUgY29tcHV0ZWQgdmFsdWVzIHdpdGggdGhlIGNvbG9yIEZJUlNULCBidXQgdGhlIHVzZXIgcHJvdmlkZXMgaXQgd2l0aCB0aGUgY29sb3IgTEFTVCwgc28gZmxpcCB0aGVtIGlmIG5lY2Vzc2FyeS4gU2FtZSBmb3IgZHJvcC1zaGFkb3coKS5cblxuXG4gIHN0YXJ0ID0gYVswXTtcbiAgZW5kID0gYVsxXTtcbiAgc3RhcnRWYWx1ZXMgPSBzdGFydC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICBlbmRWYWx1ZXMgPSBlbmQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcblxuICBpZiAoZW5kVmFsdWVzLmxlbmd0aCkge1xuICAgIHdoaWxlIChyZXN1bHQgPSBfbnVtV2l0aFVuaXRFeHAuZXhlYyhlbmQpKSB7XG4gICAgICBlbmRWYWx1ZSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIgfHwgY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJoc2xhKFwiKSB7XG4gICAgICAgIGNvbG9yID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFZhbHVlICE9PSAoc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWVzW21hdGNoSW5kZXgrK10gfHwgXCJcIikpIHtcbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XG4gICAgICAgIHN0YXJ0VW5pdCA9IHN0YXJ0VmFsdWUuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKGVuZFZhbHVlID0gX3BhcnNlUmVsYXRpdmUoc3RhcnROdW0sIGVuZFZhbHVlKSArIHN0YXJ0VW5pdCk7XG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICBlbmRVbml0ID0gZW5kVmFsdWUuc3Vic3RyKChlbmROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICBpbmRleCA9IF9udW1XaXRoVW5pdEV4cC5sYXN0SW5kZXggLSBlbmRVbml0Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZFVuaXQpIHtcbiAgICAgICAgICAvL2lmIHNvbWV0aGluZyBsaWtlIFwicGVyc3BlY3RpdmU6MzAwXCIgaXMgcGFzc2VkIGluIGFuZCB3ZSBtdXN0IGFkZCBhIHVuaXQgdG8gdGhlIGVuZFxuICAgICAgICAgIGVuZFVuaXQgPSBlbmRVbml0IHx8IF9jb25maWcudW5pdHNbcHJvcF0gfHwgc3RhcnRVbml0O1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmQgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgIHB0LmUgKz0gZW5kVW5pdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3AsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIHx8IDA7XG4gICAgICAgIH0gLy8gdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuXG4gICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgIGM6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCB8fCBwcm9wID09PSBcInpJbmRleFwiID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG4gIH0gZWxzZSB7XG4gICAgcHQuciA9IHByb3AgPT09IFwiZGlzcGxheVwiICYmIGVuZCA9PT0gXCJub25lXCIgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlO1xuICB9XG5cbiAgX3JlbEV4cC50ZXN0KGVuZCkgJiYgKHB0LmUgPSAwKTsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbm90aGVyIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9rZXl3b3JkVG9QZXJjZW50ID0ge1xuICB0b3A6IFwiMCVcIixcbiAgYm90dG9tOiBcIjEwMCVcIixcbiAgbGVmdDogXCIwJVwiLFxuICByaWdodDogXCIxMDAlXCIsXG4gIGNlbnRlcjogXCI1MCVcIlxufSxcbiAgICBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyA9IGZ1bmN0aW9uIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKHZhbHVlKSB7XG4gIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgIHggPSBzcGxpdFswXSxcbiAgICAgIHkgPSBzcGxpdFsxXSB8fCBcIjUwJVwiO1xuXG4gIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgLy90aGUgdXNlciBwcm92aWRlZCB0aGVtIGluIHRoZSB3cm9uZyBvcmRlciwgc28gZmxpcCB0aGVtXG4gICAgdmFsdWUgPSB4O1xuICAgIHggPSB5O1xuICAgIHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNwbGl0WzBdID0gX2tleXdvcmRUb1BlcmNlbnRbeF0gfHwgeDtcbiAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICByZXR1cm4gc3BsaXQuam9pbihcIiBcIik7XG59LFxuICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgaWYgKGRhdGEudHdlZW4gJiYgZGF0YS50d2Vlbi5fdGltZSA9PT0gZGF0YS50d2Vlbi5fZHVyKSB7XG4gICAgdmFyIHRhcmdldCA9IGRhdGEudCxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gZGF0YS51LFxuICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgY2xlYXJUcmFuc2Zvcm1zLFxuICAgICAgICBpO1xuXG4gICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICBwcm9wID0gcHJvcCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3RyYW5zZm9ybVByb3A7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTsgLy8gZm9yY2UgYWxsIHRoZSBjYWNoZWQgdmFsdWVzIGJhY2sgdG8gXCJub3JtYWxcIi9pZGVudGl0eSwgb3RoZXJ3aXNlIGlmIHRoZXJlJ3MgYW5vdGhlciB0d2VlbiB0aGF0J3MgYWxyZWFkeSBzZXQgdG8gcmVuZGVyIHRyYW5zZm9ybXMgb24gdGhpcyBlbGVtZW50LCBpdCBjb3VsZCBkaXNwbGF5IHRoZSB3cm9uZyB2YWx1ZXMuXG5cblxuICAgICAgICBjYWNoZS51bmNhY2hlID0gMTtcblxuICAgICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgLy8gbm90ZTogc3BlY2lhbFByb3BzIHNob3VsZCByZXR1cm4gMSBpZiAoYW5kIG9ubHkgaWYpIHRoZXkgaGF2ZSBhIG5vbi16ZXJvIHByaW9yaXR5LiBJdCBpbmRpY2F0ZXMgd2UgbmVlZCB0byBzb3J0IHRoZSBsaW5rZWQgbGlzdC5cbl9zcGVjaWFsUHJvcHMgPSB7XG4gIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICBpZiAodHdlZW4uZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7XG4gICAgICB2YXIgcHQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAwLCBfcmVuZGVyQ2xlYXJQcm9wcyk7XG4gICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICBwdC5wciA9IC0xMDtcbiAgICAgIHB0LnR3ZWVuID0gdHdlZW47XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICAvKiBjbGFzc05hbWUgZmVhdHVyZSAoYWJvdXQgMC40a2IgZ3ppcHBlZCkuXG4gICwgY2xhc3NOYW1lKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gIFx0bGV0IF9yZW5kZXJDbGFzc05hbWUgPSAocmF0aW8sIGRhdGEpID0+IHtcbiAgXHRcdFx0ZGF0YS5jc3MucmVuZGVyKHJhdGlvLCBkYXRhLmNzcyk7XG4gIFx0XHRcdGlmICghcmF0aW8gfHwgcmF0aW8gPT09IDEpIHtcbiAgXHRcdFx0XHRsZXQgaW5saW5lID0gZGF0YS5ybXYsXG4gIFx0XHRcdFx0XHR0YXJnZXQgPSBkYXRhLnQsXG4gIFx0XHRcdFx0XHRwO1xuICBcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYik7XG4gIFx0XHRcdFx0Zm9yIChwIGluIGlubGluZSkge1xuICBcdFx0XHRcdFx0X3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9LFxuICBcdFx0X2dldEFsbFN0eWxlcyA9ICh0YXJnZXQpID0+IHtcbiAgXHRcdFx0bGV0IHN0eWxlcyA9IHt9LFxuICBcdFx0XHRcdGNvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLFxuICBcdFx0XHRcdHA7XG4gIFx0XHRcdGZvciAocCBpbiBjb21wdXRlZCkge1xuICBcdFx0XHRcdGlmIChpc05hTihwKSAmJiBwICE9PSBcImNzc1RleHRcIiAmJiBwICE9PSBcImxlbmd0aFwiKSB7XG4gIFx0XHRcdFx0XHRzdHlsZXNbcF0gPSBjb21wdXRlZFtwXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0X3NldERlZmF1bHRzKHN0eWxlcywgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSkpO1xuICBcdFx0XHRyZXR1cm4gc3R5bGVzO1xuICBcdFx0fSxcbiAgXHRcdHN0YXJ0Q2xhc3NMaXN0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICBcdFx0c3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gIFx0XHRjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCxcbiAgXHRcdGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICBcdFx0Y2xhc3NQVCA9IGNhY2hlLmNsYXNzUFQsXG4gIFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kID0ge30sXG4gIFx0XHRkYXRhID0ge3Q6dGFyZ2V0LCBwbHVnaW46cGx1Z2luLCBybXY6aW5saW5lVG9SZW1vdmVBdEVuZCwgYjpzdGFydENsYXNzTGlzdCwgZTooZW5kVmFsdWUuY2hhckF0KDEpICE9PSBcIj1cIikgPyBlbmRWYWx1ZSA6IHN0YXJ0Q2xhc3NMaXN0LnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgKyBcIig/IVtcXFxcdy1dKVwiKSwgXCJcIikgKyAoKGVuZFZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgOiBcIlwiKX0sXG4gIFx0XHRjaGFuZ2luZ1ZhcnMgPSB7fSxcbiAgXHRcdHN0YXJ0VmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0KSxcbiAgXHRcdHRyYW5zZm9ybVJlbGF0ZWQgPSAvKHRyYW5zZm9ybXxwZXJzcGVjdGl2ZSkvaSxcbiAgXHRcdGVuZFZhcnMsIHA7XG4gIFx0aWYgKGNsYXNzUFQpIHtcbiAgXHRcdGNsYXNzUFQucigxLCBjbGFzc1BULmQpO1xuICBcdFx0X3JlbW92ZUxpbmtlZExpc3RJdGVtKGNsYXNzUFQuZC5wbHVnaW4sIGNsYXNzUFQsIFwiX3B0XCIpO1xuICBcdH1cbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGF0YS5lKTtcbiAgXHRlbmRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIHRydWUpO1xuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGFydENsYXNzTGlzdCk7XG4gIFx0Zm9yIChwIGluIGVuZFZhcnMpIHtcbiAgXHRcdGlmIChlbmRWYXJzW3BdICE9PSBzdGFydFZhcnNbcF0gJiYgIXRyYW5zZm9ybVJlbGF0ZWQudGVzdChwKSkge1xuICBcdFx0XHRjaGFuZ2luZ1ZhcnNbcF0gPSBlbmRWYXJzW3BdO1xuICBcdFx0XHRpZiAoIXN0eWxlW3BdICYmIHN0eWxlW3BdICE9PSBcIjBcIikge1xuICBcdFx0XHRcdGlubGluZVRvUmVtb3ZlQXRFbmRbcF0gPSAxO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdGNhY2hlLmNsYXNzUFQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIFwiY2xhc3NOYW1lXCIsIDAsIDAsIF9yZW5kZXJDbGFzc05hbWUsIGRhdGEsIDAsIC0xMSk7XG4gIFx0aWYgKHN0eWxlLmNzc1RleHQgIT09IGNzc1RleHQpIHsgLy9vbmx5IGFwcGx5IGlmIHRoaW5ncyBjaGFuZ2UuIE90aGVyd2lzZSwgaW4gY2FzZXMgbGlrZSBhIGJhY2tncm91bmQtaW1hZ2UgdGhhdCdzIHB1bGxlZCBkeW5hbWljYWxseSwgaXQgY291bGQgY2F1c2UgYSByZWZyZXNoLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDM2OC1wb3NzaWJsZS1nc2FwLWJ1Zy1zd2l0Y2hpbmctY2xhc3NuYW1lcy1pbi1jaHJvbWUvLlxuICBcdFx0c3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7IC8vd2UgcmVjb3JkZWQgY3NzVGV4dCBiZWZvcmUgd2Ugc3dhcHBlZCBjbGFzc2VzIGFuZCByYW4gX2dldEFsbFN0eWxlcygpIGJlY2F1c2UgaW4gY2FzZXMgd2hlbiBhIGNsYXNzTmFtZSB0d2VlbiBpcyBvdmVyd3JpdHRlbiwgd2UgcmVtb3ZlIGFsbCB0aGUgcmVsYXRlZCB0d2VlbmluZyBwcm9wZXJ0aWVzIGZyb20gdGhhdCBjbGFzcyBjaGFuZ2UgKG90aGVyd2lzZSBjbGFzcy1zcGVjaWZpYyBzdHVmZiBjYW4ndCBvdmVycmlkZSBwcm9wZXJ0aWVzIHdlJ3ZlIGRpcmVjdGx5IHNldCBvbiB0aGUgdGFyZ2V0J3Mgc3R5bGUgb2JqZWN0IGR1ZSB0byBzcGVjaWZpY2l0eSkuXG4gIFx0fVxuICBcdF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHRydWUpOyAvL3RvIGNsZWFyIHRoZSBjYWNoaW5nIG9mIHRyYW5zZm9ybXNcbiAgXHRkYXRhLmNzcyA9IG5ldyBnc2FwLnBsdWdpbnMuY3NzKCk7XG4gIFx0ZGF0YS5jc3MuaW5pdCh0YXJnZXQsIGNoYW5naW5nVmFycywgdHdlZW4pO1xuICBcdHBsdWdpbi5fcHJvcHMucHVzaCguLi5kYXRhLmNzcy5fcHJvcHMpO1xuICBcdHJldHVybiAxO1xuICB9XG4gICovXG5cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFJBTlNGT1JNU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzID0ge30sXG4gICAgX2lzTnVsbFRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9pc051bGxUcmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG59LFxuICAgIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCkge1xuICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgcmV0dXJuIF9pc051bGxUcmFuc2Zvcm0obWF0cml4U3RyaW5nKSA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4U3RyaW5nLnN1YnN0cig3KS5tYXRjaChfbnVtRXhwKS5tYXAoX3JvdW5kKTtcbn0sXG4gICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgcGFyZW50LFxuICAgICAgbmV4dFNpYmxpbmcsXG4gICAgICB0ZW1wLFxuICAgICAgYWRkZWRUb0RPTTtcblxuICBpZiAoY2FjaGUuc3ZnICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikpIHtcbiAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4OyAvL2Vuc3VyZXMgdGhhdCBldmVuIGNvbXBsZXggdmFsdWVzIGxpa2UgXCJ0cmFuc2xhdGUoNTAsNjApIHJvdGF0ZSgxMzUsMCwwKVwiIGFyZSBwYXJzZWQgYmVjYXVzZSBpdCBtYXNoZXMgaXQgaW50byBhIG1hdHJpeC5cblxuICAgIG1hdHJpeCA9IFt0ZW1wLmEsIHRlbXAuYiwgdGVtcC5jLCB0ZW1wLmQsIHRlbXAuZSwgdGVtcC5mXTtcbiAgICByZXR1cm4gbWF0cml4LmpvaW4oXCIsXCIpID09PSBcIjEsMCwwLDEsMCwwXCIgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeDtcbiAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgIC8vbm90ZTogaWYgb2Zmc2V0UGFyZW50IGlzIG51bGwsIHRoYXQgbWVhbnMgdGhlIGVsZW1lbnQgaXNuJ3QgaW4gdGhlIG5vcm1hbCBkb2N1bWVudCBmbG93LCBsaWtlIGlmIGl0IGhhcyBkaXNwbGF5Om5vbmUgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIGRpc3BsYXk6bm9uZSkuIEZpcmVmb3ggcmV0dXJucyBudWxsIGZvciBnZXRDb21wdXRlZFN0eWxlKCkgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYW4gaWZyYW1lIHRoYXQgaGFzIGRpc3BsYXk6bm9uZS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgLy9icm93c2VycyBkb24ndCByZXBvcnQgdHJhbnNmb3JtcyBhY2N1cmF0ZWx5IHVubGVzcyB0aGUgZWxlbWVudCBpcyBpbiB0aGUgRE9NIGFuZCBoYXMgYSBkaXNwbGF5IHZhbHVlIHRoYXQncyBub3QgXCJub25lXCIuIEZpcmVmb3ggYW5kIE1pY3Jvc29mdCBicm93c2VycyBoYXZlIGEgcGFydGlhbCBidWcgd2hlcmUgdGhleSdsbCByZXBvcnQgdHJhbnNmb3JtcyBldmVuIGlmIGRpc3BsYXk6bm9uZSBCVVQgbm90IGFueSBwZXJjZW50YWdlLWJhc2VkIHZhbHVlcyBsaWtlIHRyYW5zbGF0ZSgtNTAlLCA4cHgpIHdpbGwgYmUgcmVwb3J0ZWQgYXMgaWYgaXQncyB0cmFuc2xhdGUoMCwgOHB4KS5cbiAgICB0ZW1wID0gc3R5bGUuZGlzcGxheTtcbiAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXJlbnQgfHwgIXRhcmdldC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIG5vdGU6IGluIDMuMy4wIHdlIHN3aXRjaGVkIHRhcmdldC5vZmZzZXRQYXJlbnQgdG8gX2RvYy5ib2R5LmNvbnRhaW5zKHRhcmdldCkgdG8gYXZvaWQgW3NvbWV0aW1lcyB1bm5lY2Vzc2FyeV0gTXV0YXRpb25PYnNlcnZlciBjYWxscyBidXQgdGhhdCB3YXNuJ3QgYWRlcXVhdGUgYmVjYXVzZSB0aGVyZSBhcmUgZWRnZSBjYXNlcyB3aGVyZSBuZXN0ZWQgcG9zaXRpb246IGZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gZ2V0IHJlcGFyZW50ZWQgdG8gYWNjdXJhdGVseSBzZW5zZSB0cmFuc2Zvcm1zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zODggYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzc1XG4gICAgICBhZGRlZFRvRE9NID0gMTsgLy9mbGFnXG5cbiAgICAgIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTsgLy93ZSBtdXN0IGFkZCBpdCB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGdldCB2YWx1ZXMgcHJvcGVybHlcblxuICAgIH1cblxuICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICBpZiAoYWRkZWRUb0RPTSkge1xuICAgICAgbmV4dFNpYmxpbmcgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgbmV4dFNpYmxpbmcpIDogcGFyZW50ID8gcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCkgOiBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JjZTJEICYmIG1hdHJpeC5sZW5ndGggPiA2ID8gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSwgbWF0cml4WzEyXSwgbWF0cml4WzEzXV0gOiBtYXRyaXg7XG59LFxuICAgIF9hcHBseVNWR09yaWdpbiA9IGZ1bmN0aW9uIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIG9yaWdpbiwgb3JpZ2luSXNBYnNvbHV0ZSwgc21vb3RoLCBtYXRyaXhBcnJheSwgcGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgeE9yaWdpbk9sZCA9IGNhY2hlLnhPcmlnaW4gfHwgMCxcbiAgICAgIHlPcmlnaW5PbGQgPSBjYWNoZS55T3JpZ2luIHx8IDAsXG4gICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgeU9mZnNldE9sZCA9IGNhY2hlLnlPZmZzZXQgfHwgMCxcbiAgICAgIGEgPSBtYXRyaXhbMF0sXG4gICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgYyA9IG1hdHJpeFsyXSxcbiAgICAgIGQgPSBtYXRyaXhbM10sXG4gICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgIHR5ID0gbWF0cml4WzVdLFxuICAgICAgb3JpZ2luU3BsaXQgPSBvcmlnaW4uc3BsaXQoXCIgXCIpLFxuICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICB5T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFsxXSkgfHwgMCxcbiAgICAgIGJvdW5kcyxcbiAgICAgIGRldGVybWluYW50LFxuICAgICAgeCxcbiAgICAgIHk7XG5cbiAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3godGFyZ2V0KTtcbiAgICB4T3JpZ2luID0gYm91bmRzLnggKyAofm9yaWdpblNwbGl0WzBdLmluZGV4T2YoXCIlXCIpID8geE9yaWdpbiAvIDEwMCAqIGJvdW5kcy53aWR0aCA6IHhPcmlnaW4pO1xuICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAoZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjKSkge1xuICAgIC8vaWYgaXQncyB6ZXJvIChsaWtlIGlmIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSB6ZXJvKSwgc2tpcCBpdCB0byBhdm9pZCBlcnJvcnMgd2l0aCBkaXZpZGluZyBieSB6ZXJvLlxuICAgIHggPSB4T3JpZ2luICogKGQgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKC1jIC8gZGV0ZXJtaW5hbnQpICsgKGMgKiB0eSAtIGQgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeE9yaWdpbiA9IHg7XG4gICAgeU9yaWdpbiA9IHk7XG4gIH1cblxuICBpZiAoc21vb3RoIHx8IHNtb290aCAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoKSB7XG4gICAgdHggPSB4T3JpZ2luIC0geE9yaWdpbk9sZDtcbiAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgIGNhY2hlLnhPZmZzZXQgPSB4T2Zmc2V0T2xkICsgKHR4ICogYSArIHR5ICogYykgLSB0eDtcbiAgICBjYWNoZS55T2Zmc2V0ID0geU9mZnNldE9sZCArICh0eCAqIGIgKyB0eSAqIGQpIC0gdHk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICB9XG5cbiAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gIGNhY2hlLnlPcmlnaW4gPSB5T3JpZ2luO1xuICBjYWNoZS5zbW9vdGggPSAhIXNtb290aDtcbiAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlID0gISFvcmlnaW5Jc0Fic29sdXRlO1xuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCIwcHggMHB4XCI7IC8vb3RoZXJ3aXNlLCBpZiBzb21lb25lIHNldHMgIGFuIG9yaWdpbiB2aWEgQ1NTLCBpdCB3aWxsIGxpa2VseSBpbnRlcmZlcmUgd2l0aCB0aGUgU1ZHIHRyYW5zZm9ybSBhdHRyaWJ1dGUgb25lcyAoYmVjYXVzZSByZW1lbWJlciwgd2UncmUgYmFraW5nIHRoZSBvcmlnaW4gaW50byB0aGUgbWF0cml4KCkgdmFsdWUpLlxuXG4gIGlmIChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T3JpZ2luXCIsIHhPcmlnaW5PbGQsIHhPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9mZnNldFwiLCB4T2Zmc2V0T2xkLCBjYWNoZS54T2Zmc2V0KTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T2Zmc2V0XCIsIHlPZmZzZXRPbGQsIGNhY2hlLnlPZmZzZXQpO1xuICB9XG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB4T3JpZ2luICsgXCIgXCIgKyB5T3JpZ2luKTtcbn0sXG4gICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgbmV3IEdTQ2FjaGUodGFyZ2V0KTtcblxuICBpZiAoXCJ4XCIgaW4gY2FjaGUgJiYgIXVuY2FjaGUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICBweCA9IFwicHhcIixcbiAgICAgIGRlZyA9IFwiZGVnXCIsXG4gICAgICBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSxcbiAgICAgIG9yaWdpbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApIHx8IFwiMFwiLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6LFxuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgcm90YXRpb24sXG4gICAgICByb3RhdGlvblgsXG4gICAgICByb3RhdGlvblksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICB4T3JpZ2luLFxuICAgICAgeU9yaWdpbixcbiAgICAgIG1hdHJpeCxcbiAgICAgIGFuZ2xlLFxuICAgICAgY29zLFxuICAgICAgc2luLFxuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHQxLFxuICAgICAgdDIsXG4gICAgICB0MyxcbiAgICAgIGExMyxcbiAgICAgIGEyMyxcbiAgICAgIGEzMyxcbiAgICAgIGE0MixcbiAgICAgIGE0MyxcbiAgICAgIGEzMjtcbiAgeCA9IHkgPSB6ID0gcm90YXRpb24gPSByb3RhdGlvblggPSByb3RhdGlvblkgPSBza2V3WCA9IHNrZXdZID0gcGVyc3BlY3RpdmUgPSAwO1xuICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICBjYWNoZS5zdmcgPSAhISh0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpKTtcblxuICBpZiAoY3MudHJhbnNsYXRlKSB7XG4gICAgLy8gYWNjb21tb2RhdGUgaW5kZXBlbmRlbnQgdHJhbnNmb3JtcyBieSBjb21iaW5pbmcgdGhlbSBpbnRvIG5vcm1hbCBvbmVzLlxuICAgIGlmIChjcy50cmFuc2xhdGUgIT09IFwibm9uZVwiIHx8IGNzLnNjYWxlICE9PSBcIm5vbmVcIiB8fCBjcy5yb3RhdGUgIT09IFwibm9uZVwiKSB7XG4gICAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSAoY3MudHJhbnNsYXRlICE9PSBcIm5vbmVcIiA/IFwidHJhbnNsYXRlM2QoXCIgKyAoY3MudHJhbnNsYXRlICsgXCIgMCAwXCIpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIikgXCIgOiBcIlwiKSArIChjcy5yb3RhdGUgIT09IFwibm9uZVwiID8gXCJyb3RhdGUoXCIgKyBjcy5yb3RhdGUgKyBcIikgXCIgOiBcIlwiKSArIChjcy5zY2FsZSAhPT0gXCJub25lXCIgPyBcInNjYWxlKFwiICsgY3Muc2NhbGUuc3BsaXQoXCIgXCIpLmpvaW4oXCIsXCIpICsgXCIpIFwiIDogXCJcIikgKyAoY3NbX3RyYW5zZm9ybVByb3BdICE9PSBcIm5vbmVcIiA/IGNzW190cmFuc2Zvcm1Qcm9wXSA6IFwiXCIpO1xuICAgIH1cblxuICAgIHN0eWxlLnNjYWxlID0gc3R5bGUucm90YXRlID0gc3R5bGUudHJhbnNsYXRlID0gXCJub25lXCI7XG4gIH1cblxuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgaWYgKGNhY2hlLnVuY2FjaGUpIHtcbiAgICAgIC8vIGlmIGNhY2hlLnVuY2FjaGUgaXMgdHJ1ZSAoYW5kIG1heWJlIGlmIG9yaWdpbiBpcyAwLDApLCB3ZSBuZWVkIHRvIHNldCBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChjYWNoZS54T3JpZ2luIC0gYmJveC54KSArIFwicHggXCIgKyAoY2FjaGUueU9yaWdpbiAtIGJib3gueSkgKyBcInB4XCIuIFByZXZpb3VzbHkgd2UgbGV0IHRoZSBkYXRhLXN2Zy1vcmlnaW4gc3RheSBpbnN0ZWFkLCBidXQgd2hlbiBpbnRyb2R1Y2luZyByZXZlcnQoKSwgaXQgY29tcGxpY2F0ZWQgdGhpbmdzLlxuICAgICAgdDIgPSB0YXJnZXQuZ2V0QkJveCgpO1xuICAgICAgb3JpZ2luID0gY2FjaGUueE9yaWdpbiAtIHQyLnggKyBcInB4IFwiICsgKGNhY2hlLnlPcmlnaW4gLSB0Mi55KSArIFwicHhcIjtcbiAgICAgIHQxID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdDEgPSAhdW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpOyAvLyAgUmVtZW1iZXIsIHRvIHdvcmsgYXJvdW5kIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzIHdlIGFsd2F5cyBmb3JjZSBTVkcgZWxlbWVudHMnIHRyYW5zZm9ybU9yaWdpbiB0byAwLDAgYW5kIG9mZnNldCB0aGUgdHJhbnNsYXRpb24gYWNjb3JkaW5nbHkuXG4gICAgfVxuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5hYnMoTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIHVuY2FjaGUgPSB1bmNhY2hlIHx8IGNhY2hlLnVuY2FjaGU7XG4gIGNhY2hlLnggPSB4IC0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgKCF1bmNhY2hlICYmIGNhY2hlLnhQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0V2lkdGggKiBjYWNoZS54UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKCF1bmNhY2hlICYmIGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueiA9IHogKyBweDtcbiAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICBjYWNoZS5yb3RhdGlvbiA9IF9yb3VuZChyb3RhdGlvbikgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgY2FjaGUuc2tld1ggPSBza2V3WCArIGRlZztcbiAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gIGlmIChjYWNoZS56T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW4uc3BsaXQoXCIgXCIpWzJdKSB8fCAwKSB7XG4gICAgc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gX2ZpcnN0VHdvT25seShvcmlnaW4pO1xuICB9XG5cbiAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICBjYWNoZS5mb3JjZTNEID0gX2NvbmZpZy5mb3JjZTNEO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gPSBjYWNoZS5zdmcgPyBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA6IF9zdXBwb3J0czNEID8gX3JlbmRlckNTU1RyYW5zZm9ybXMgOiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zO1xuICBjYWNoZS51bmNhY2hlID0gMDtcbiAgcmV0dXJuIGNhY2hlO1xufSxcbiAgICBfZmlyc3RUd29Pbmx5ID0gZnVuY3Rpb24gX2ZpcnN0VHdvT25seSh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlID0gdmFsdWUuc3BsaXQoXCIgXCIpKVswXSArIFwiIFwiICsgdmFsdWVbMV07XG59LFxuICAgIC8vZm9yIGhhbmRsaW5nIHRyYW5zZm9ybU9yaWdpbiB2YWx1ZXMsIHN0cmlwcGluZyBvdXQgdGhlIDNyZCBkaW1lbnNpb25cbl9hZGRQeFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHN0YXJ0LCB2YWx1ZSkge1xuICB2YXIgdW5pdCA9IGdldFVuaXQoc3RhcnQpO1xuICByZXR1cm4gX3JvdW5kKHBhcnNlRmxvYXQoc3RhcnQpICsgcGFyc2VGbG9hdChfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB2YWx1ZSArIFwicHhcIiwgdW5pdCkpKSArIHVuaXQ7XG59LFxuICAgIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICBjYWNoZS56ID0gXCIwcHhcIjtcbiAgY2FjaGUucm90YXRpb25ZID0gY2FjaGUucm90YXRpb25YID0gXCIwZGVnXCI7XG4gIGNhY2hlLmZvcmNlM0QgPSAwO1xuXG4gIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF96ZXJvRGVnID0gXCIwZGVnXCIsXG4gICAgX3plcm9QeCA9IFwiMHB4XCIsXG4gICAgX2VuZFBhcmVudGhlc2lzID0gXCIpIFwiLFxuICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgeiA9IF9yZWYueixcbiAgICAgIHJvdGF0aW9uID0gX3JlZi5yb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWSA9IF9yZWYucm90YXRpb25ZLFxuICAgICAgcm90YXRpb25YID0gX3JlZi5yb3RhdGlvblgsXG4gICAgICBza2V3WCA9IF9yZWYuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgdHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBfcmVmLnRyYW5zZm9ybVBlcnNwZWN0aXZlLFxuICAgICAgZm9yY2UzRCA9IF9yZWYuZm9yY2UzRCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgek9yaWdpbiA9IF9yZWYuek9yaWdpbixcbiAgICAgIHRyYW5zZm9ybXMgPSBcIlwiLFxuICAgICAgdXNlM0QgPSBmb3JjZTNEID09PSBcImF1dG9cIiAmJiByYXRpbyAmJiByYXRpbyAhPT0gMSB8fCBmb3JjZTNEID09PSB0cnVlOyAvLyBTYWZhcmkgaGFzIGEgYnVnIHRoYXQgY2F1c2VzIGl0IG5vdCB0byByZW5kZXIgM0QgdHJhbnNmb3JtLW9yaWdpbiB2YWx1ZXMgcHJvcGVybHksIHNvIHdlIGZvcmNlIHRoZSB6IG9yaWdpbiB0byAwLCByZWNvcmQgaXQgaW4gdGhlIGNhY2hlLCBhbmQgdGhlbiBkbyB0aGUgbWF0aCBoZXJlIHRvIG9mZnNldCB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhY2NvcmRpbmdseSAoYmFzaWNhbGx5IGRvIHRoZSAzRCB0cmFuc2Zvcm0tb3JpZ2luIHBhcnQgbWFudWFsbHkpXG5cblxuICBpZiAoek9yaWdpbiAmJiAocm90YXRpb25YICE9PSBfemVyb0RlZyB8fCByb3RhdGlvblkgIT09IF96ZXJvRGVnKSkge1xuICAgIHZhciBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25ZKSAqIF9ERUcyUkFELFxuICAgICAgICBhMTMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGEzMyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgY29zO1xuXG4gICAgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWCkgKiBfREVHMlJBRDtcbiAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgeCA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHgsIGExMyAqIGNvcyAqIC16T3JpZ2luKTtcbiAgICB5ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeSwgLU1hdGguc2luKGFuZ2xlKSAqIC16T3JpZ2luKTtcbiAgICB6ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeiwgYTMzICogY29zICogLXpPcmlnaW4gKyB6T3JpZ2luKTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1QZXJzcGVjdGl2ZSAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJwZXJzcGVjdGl2ZShcIiArIHRyYW5zZm9ybVBlcnNwZWN0aXZlICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInRyYW5zbGF0ZShcIiArIHhQZXJjZW50ICsgXCIlLCBcIiArIHlQZXJjZW50ICsgXCIlKSBcIjtcbiAgfVxuXG4gIGlmICh1c2UzRCB8fCB4ICE9PSBfemVyb1B4IHx8IHkgIT09IF96ZXJvUHggfHwgeiAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0geiAhPT0gX3plcm9QeCB8fCB1c2UzRCA/IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCBcIiArIHogKyBcIikgXCIgOiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblkgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVkoXCIgKyByb3RhdGlvblkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25YICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVYKFwiICsgcm90YXRpb25YICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNrZXdYICE9PSBfemVyb0RlZyB8fCBza2V3WSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2tldyhcIiArIHNrZXdYICsgXCIsIFwiICsgc2tld1kgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMSkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJzY2FsZShcIiArIHNjYWxlWCArIFwiLCBcIiArIHNjYWxlWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zIHx8IFwidHJhbnNsYXRlKDAsIDApXCI7XG59LFxuICAgIF9yZW5kZXJTVkdUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlclNWR1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmMiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYyLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmMi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnksXG4gICAgICByb3RhdGlvbiA9IF9yZWYyLnJvdGF0aW9uLFxuICAgICAgc2tld1ggPSBfcmVmMi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZjIuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICB4T3JpZ2luID0gX3JlZjIueE9yaWdpbixcbiAgICAgIHlPcmlnaW4gPSBfcmVmMi55T3JpZ2luLFxuICAgICAgeE9mZnNldCA9IF9yZWYyLnhPZmZzZXQsXG4gICAgICB5T2Zmc2V0ID0gX3JlZjIueU9mZnNldCxcbiAgICAgIGZvcmNlQ1NTID0gX3JlZjIuZm9yY2VDU1MsXG4gICAgICB0eCA9IHBhcnNlRmxvYXQoeCksXG4gICAgICB0eSA9IHBhcnNlRmxvYXQoeSksXG4gICAgICBhMTEsXG4gICAgICBhMjEsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0ZW1wO1xuXG4gIHJvdGF0aW9uID0gcGFyc2VGbG9hdChyb3RhdGlvbik7XG4gIHNrZXdYID0gcGFyc2VGbG9hdChza2V3WCk7XG4gIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG5cbiAgaWYgKHNrZXdZKSB7XG4gICAgLy9mb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgY29tYmluZSBhbGwgc2tld2luZyBpbnRvIHRoZSBza2V3WCBhbmQgcm90YXRpb24gdmFsdWVzLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBkZWdyZWVzIGxvb2tzIHRoZSBzYW1lIGFzIGEgcm90YXRpb24gb2YgMTAgZGVncmVlcyBwbHVzIGEgc2tld1ggb2YgMTAgZGVncmVlcy5cbiAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuICAgIHNrZXdYICs9IHNrZXdZO1xuICAgIHJvdGF0aW9uICs9IHNrZXdZO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uIHx8IHNrZXdYKSB7XG4gICAgcm90YXRpb24gKj0gX0RFRzJSQUQ7XG4gICAgc2tld1ggKj0gX0RFRzJSQUQ7XG4gICAgYTExID0gTWF0aC5jb3Mocm90YXRpb24pICogc2NhbGVYO1xuICAgIGEyMSA9IE1hdGguc2luKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMTIgPSBNYXRoLnNpbihyb3RhdGlvbiAtIHNrZXdYKSAqIC1zY2FsZVk7XG4gICAgYTIyID0gTWF0aC5jb3Mocm90YXRpb24gLSBza2V3WCkgKiBzY2FsZVk7XG5cbiAgICBpZiAoc2tld1gpIHtcbiAgICAgIHNrZXdZICo9IF9ERUcyUkFEO1xuICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdYIC0gc2tld1kpO1xuICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgYTEyICo9IHRlbXA7XG4gICAgICBhMjIgKj0gdGVtcDtcblxuICAgICAgaWYgKHNrZXdZKSB7XG4gICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WSk7XG4gICAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgICAgYTExICo9IHRlbXA7XG4gICAgICAgIGEyMSAqPSB0ZW1wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGExMSA9IF9yb3VuZChhMTEpO1xuICAgIGEyMSA9IF9yb3VuZChhMjEpO1xuICAgIGExMiA9IF9yb3VuZChhMTIpO1xuICAgIGEyMiA9IF9yb3VuZChhMjIpO1xuICB9IGVsc2Uge1xuICAgIGExMSA9IHNjYWxlWDtcbiAgICBhMjIgPSBzY2FsZVk7XG4gICAgYTIxID0gYTEyID0gMDtcbiAgfVxuXG4gIGlmICh0eCAmJiAhfih4ICsgXCJcIikuaW5kZXhPZihcInB4XCIpIHx8IHR5ICYmICF+KHkgKyBcIlwiKS5pbmRleE9mKFwicHhcIikpIHtcbiAgICB0eCA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHgsIFwicHhcIik7XG4gICAgdHkgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieVwiLCB5LCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKHhPcmlnaW4gfHwgeU9yaWdpbiB8fCB4T2Zmc2V0IHx8IHlPZmZzZXQpIHtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhPcmlnaW4gLSAoeE9yaWdpbiAqIGExMSArIHlPcmlnaW4gKiBhMTIpICsgeE9mZnNldCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5T3JpZ2luIC0gKHhPcmlnaW4gKiBhMjEgKyB5T3JpZ2luICogYTIyKSArIHlPZmZzZXQpO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgLy9UaGUgU1ZHIHNwZWMgZG9lc24ndCBzdXBwb3J0IHBlcmNlbnRhZ2UtYmFzZWQgdHJhbnNsYXRpb24gaW4gdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLCBzbyB3ZSBtZXJnZSBpdCBpbnRvIHRoZSB0cmFuc2xhdGlvbiB0byBzaW11bGF0ZSBpdC5cbiAgICB0ZW1wID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhQZXJjZW50IC8gMTAwICogdGVtcC53aWR0aCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5UGVyY2VudCAvIDEwMCAqIHRlbXAuaGVpZ2h0KTtcbiAgfVxuXG4gIHRlbXAgPSBcIm1hdHJpeChcIiArIGExMSArIFwiLFwiICsgYTIxICsgXCIsXCIgKyBhMTIgKyBcIixcIiArIGEyMiArIFwiLFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdGVtcCk7XG4gIGZvcmNlQ1NTICYmICh0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcCk7IC8vc29tZSBicm93c2VycyBwcmlvcml0aXplIENTUyB0cmFuc2Zvcm1zIG92ZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFdoZW4gd2Ugc2Vuc2UgdGhhdCB0aGUgdXNlciBoYXMgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCwgd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB0aGlzIHdheSAob3RoZXJ3aXNlIHNvbWUgYnJvd3NlciBzaW1wbHkgd29uJ3QgcmVuZGVyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlIGNoYW5nZXMhKVxufSxcbiAgICBfYWRkUm90YXRpb25hbFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGVuZFZhbHVlKSB7XG4gIHZhciBjYXAgPSAzNjAsXG4gICAgICBpc1N0cmluZyA9IF9pc1N0cmluZyhlbmRWYWx1ZSksXG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKSAqIChpc1N0cmluZyAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhZFwiKSA/IF9SQUQyREVHIDogMSksXG4gICAgICBjaGFuZ2UgPSBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgIGZpbmFsVmFsdWUgPSBzdGFydE51bSArIGNoYW5nZSArIFwiZGVnXCIsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBwdDtcblxuICBpZiAoaXNTdHJpbmcpIHtcbiAgICBkaXJlY3Rpb24gPSBlbmRWYWx1ZS5zcGxpdChcIl9cIilbMV07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInNob3J0XCIpIHtcbiAgICAgIGNoYW5nZSAlPSBjYXA7XG5cbiAgICAgIGlmIChjaGFuZ2UgIT09IGNoYW5nZSAlIChjYXAgLyAyKSkge1xuICAgICAgICBjaGFuZ2UgKz0gY2hhbmdlIDwgMCA/IGNhcCA6IC1jYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJjd1wiICYmIGNoYW5nZSA8IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgKyBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiY2N3XCIgJiYgY2hhbmdlID4gMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSAtIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9XG4gIH1cblxuICBwbHVnaW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBjaGFuZ2UsIF9yZW5kZXJQcm9wV2l0aEVuZCk7XG4gIHB0LmUgPSBmaW5hbFZhbHVlO1xuICBwdC51ID0gXCJkZWdcIjtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2Fzc2lnbiA9IGZ1bmN0aW9uIF9hc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgZG9lc24ndCBoYXZlIE9iamVjdC5hc3NpZ24oKSwgc28gd2UgcmVjcmVhdGUgaXQgaGVyZS5cbiAgZm9yICh2YXIgcCBpbiBzb3VyY2UpIHtcbiAgICB0YXJnZXRbcF0gPSBzb3VyY2VbcF07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSxcbiAgICBfYWRkUmF3VHJhbnNmb3JtUFRzID0gZnVuY3Rpb24gX2FkZFJhd1RyYW5zZm9ybVBUcyhwbHVnaW4sIHRyYW5zZm9ybXMsIHRhcmdldCkge1xuICAvL2ZvciBoYW5kbGluZyBjYXNlcyB3aGVyZSBzb21lb25lIHBhc3NlcyBpbiBhIHdob2xlIHRyYW5zZm9ybSBzdHJpbmcsIGxpa2UgdHJhbnNmb3JtOiBcInNjYWxlKDIsIDMpIHJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWSgzMGVtKVwiXG4gIHZhciBzdGFydENhY2hlID0gX2Fzc2lnbih7fSwgdGFyZ2V0Ll9nc2FwKSxcbiAgICAgIGV4Y2x1ZGUgPSBcInBlcnNwZWN0aXZlLGZvcmNlM0QsdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpblwiLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBlbmRDYWNoZSxcbiAgICAgIHAsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGVuZE51bSxcbiAgICAgIHN0YXJ0VW5pdCxcbiAgICAgIGVuZFVuaXQ7XG5cbiAgaWYgKHN0YXJ0Q2FjaGUuc3ZnKSB7XG4gICAgc3RhcnRWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIlwiKTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG5cbiAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHN0YXJ0VmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldClbX3RyYW5zZm9ybVByb3BdO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXM7XG4gICAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSBzdGFydFZhbHVlO1xuICB9XG5cbiAgZm9yIChwIGluIF90cmFuc2Zvcm1Qcm9wcykge1xuICAgIHN0YXJ0VmFsdWUgPSBzdGFydENhY2hlW3BdO1xuICAgIGVuZFZhbHVlID0gZW5kQ2FjaGVbcF07XG5cbiAgICBpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgZXhjbHVkZS5pbmRleE9mKHApIDwgMCkge1xuICAgICAgLy90d2VlbmluZyB0byBubyBwZXJzcGVjdGl2ZSBnaXZlcyB2ZXJ5IHVuaW50dWl0aXZlIHJlc3VsdHMgLSBqdXN0IGtlZXAgdGhlIHNhbWUgcGVyc3BlY3RpdmUgaW4gdGhhdCBjYXNlLlxuICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgIHN0YXJ0TnVtID0gc3RhcnRVbml0ICE9PSBlbmRVbml0ID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSA6IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgIHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIGVuZENhY2hlLCBwLCBzdGFydE51bSwgZW5kTnVtIC0gc3RhcnROdW0sIF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgIHBsdWdpbi5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxuXG4gIF9hc3NpZ24oZW5kQ2FjaGUsIHN0YXJ0Q2FjaGUpO1xufTsgLy8gaGFuZGxlIHNwbGl0dGluZyBhcGFydCBwYWRkaW5nLCBtYXJnaW4sIGJvcmRlcldpZHRoLCBhbmQgYm9yZGVyUmFkaXVzIGludG8gdGhlaXIgNCBjb21wb25lbnRzLiBGaXJlZm94LCBmb3IgZXhhbXBsZSwgd29uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkgLSBpdCB3aWxsIG9ubHkgZG8gYm9yZGVyVG9wTGVmdFJhZGl1cyBhbmQgdGhlIG90aGVyIGNvcm5lcnMuIFdlIGFsc28gd2FudCB0byBoYW5kbGUgcGFkZGluZ1RvcCwgbWFyZ2luTGVmdCwgYm9yZGVyUmlnaHRXaWR0aCwgZXRjLlxuXG5cbl9mb3JFYWNoTmFtZShcInBhZGRpbmcsbWFyZ2luLFdpZHRoLFJhZGl1c1wiLCBmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgdmFyIHQgPSBcIlRvcFwiLFxuICAgICAgciA9IFwiUmlnaHRcIixcbiAgICAgIGIgPSBcIkJvdHRvbVwiLFxuICAgICAgbCA9IFwiTGVmdFwiLFxuICAgICAgcHJvcHMgPSAoaW5kZXggPCAzID8gW3QsIHIsIGIsIGxdIDogW3QgKyBsLCB0ICsgciwgYiArIHIsIGIgKyBsXSkubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMiA/IG5hbWUgKyBzaWRlIDogXCJib3JkZXJcIiArIHNpZGUgKyBuYW1lO1xuICB9KTtcblxuICBfc3BlY2lhbFByb3BzW2luZGV4ID4gMSA/IFwiYm9yZGVyXCIgKyBuYW1lIDogbmFtZV0gPSBmdW5jdGlvbiAocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICB2YXIgYSwgdmFycztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNCkge1xuICAgICAgLy8gZ2V0dGVyLCBwYXNzZWQgdGFyZ2V0LCBwcm9wZXJ0eSwgYW5kIHVuaXQgKGZyb20gX2dldCgpKVxuICAgICAgYSA9IHByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gX2dldChwbHVnaW4sIHByb3AsIHByb3BlcnR5KTtcbiAgICAgIH0pO1xuICAgICAgdmFycyA9IGEuam9pbihcIiBcIik7XG4gICAgICByZXR1cm4gdmFycy5zcGxpdChhWzBdKS5sZW5ndGggPT09IDUgPyBhWzBdIDogdmFycztcbiAgICB9XG5cbiAgICBhID0gKGVuZFZhbHVlICsgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIHZhcnMgPSB7fTtcbiAgICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wLCBpKSB7XG4gICAgICByZXR1cm4gdmFyc1twcm9wXSA9IGFbaV0gPSBhW2ldIHx8IGFbKGkgLSAxKSAvIDIgfCAwXTtcbiAgICB9KTtcbiAgICBwbHVnaW4uaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKTtcbiAgfTtcbn0pO1xuXG5leHBvcnQgdmFyIENTU1BsdWdpbiA9IHtcbiAgbmFtZTogXCJjc3NcIixcbiAgcmVnaXN0ZXI6IF9pbml0Q29yZSxcbiAgdGFyZ2V0VGVzdDogZnVuY3Rpb24gdGFyZ2V0VGVzdCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnN0eWxlICYmIHRhcmdldC5ub2RlVHlwZTtcbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuX3Byb3BzLFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgc3RhcnRBdCA9IHR3ZWVuLnZhcnMuc3RhcnRBdCxcbiAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgZW5kVmFsdWUsXG4gICAgICAgIGVuZE51bSxcbiAgICAgICAgc3RhcnROdW0sXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHNwZWNpYWxQcm9wLFxuICAgICAgICBwLFxuICAgICAgICBzdGFydFVuaXQsXG4gICAgICAgIGVuZFVuaXQsXG4gICAgICAgIHJlbGF0aXZlLFxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQsXG4gICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbixcbiAgICAgICAgY2FjaGUsXG4gICAgICAgIHNtb290aCxcbiAgICAgICAgaGFzUHJpb3JpdHksXG4gICAgICAgIGlubGluZVByb3BzO1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpOyAvLyB3ZSBtYXkgY2FsbCBpbml0KCkgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgcGx1Z2luIGluc3RhbmNlLCBsaWtlIHdoZW4gYWRkaW5nIHNwZWNpYWwgcHJvcGVydGllcywgc28gbWFrZSBzdXJlIHdlIGRvbid0IG92ZXJ3cml0ZSB0aGUgcmV2ZXJ0IGRhdGEgb3IgaW5saW5lUHJvcHNcblxuICAgIHRoaXMuc3R5bGVzID0gdGhpcy5zdHlsZXMgfHwgX2dldFN0eWxlU2F2ZXIodGFyZ2V0KTtcbiAgICBpbmxpbmVQcm9wcyA9IHRoaXMuc3R5bGVzLnByb3BzO1xuICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBpZiAocCA9PT0gXCJhdXRvUm91bmRcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZW5kVmFsdWUgPSB2YXJzW3BdO1xuXG4gICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgX2NoZWNrUGx1Z2luKHAsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSkge1xuICAgICAgICAvLyBwbHVnaW5zXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgc3BlY2lhbFByb3AgPSBfc3BlY2lhbFByb3BzW3BdO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuY2FsbCh0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gICAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgICBlbmRWYWx1ZSA9IF9yZXBsYWNlUmFuZG9tKGVuZFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwZWNpYWxQcm9wKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wKHRoaXMsIHRhcmdldCwgcCwgZW5kVmFsdWUsIHR3ZWVuKSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH0gZWxzZSBpZiAocC5zdWJzdHIoMCwgMikgPT09IFwiLS1cIikge1xuICAgICAgICAvL0NTUyB2YXJpYWJsZVxuICAgICAgICBzdGFydFZhbHVlID0gKGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5nZXRQcm9wZXJ0eVZhbHVlKHApICsgXCJcIikudHJpbSgpO1xuICAgICAgICBlbmRWYWx1ZSArPSBcIlwiO1xuICAgICAgICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICAgICAgICBpZiAoIV9jb2xvckV4cC50ZXN0KHN0YXJ0VmFsdWUpKSB7XG4gICAgICAgICAgLy8gY29sb3JzIGRvbid0IGhhdmUgdW5pdHNcbiAgICAgICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZFVuaXQgPyBzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgKHN0YXJ0VmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpICsgZW5kVW5pdCkgOiBzdGFydFVuaXQgJiYgKGVuZFZhbHVlICs9IHN0YXJ0VW5pdCk7XG4gICAgICAgIHRoaXMuYWRkKHN0eWxlLCBcInNldFByb3BlcnR5XCIsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICAgIGlubGluZVByb3BzLnB1c2gocCwgMCwgc3R5bGVbcF0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmIChzdGFydEF0ICYmIHAgaW4gc3RhcnRBdCkge1xuICAgICAgICAgIC8vIGluIGNhc2Ugc29tZW9uZSBoYXJkLWNvZGVzIGEgY29tcGxleCB2YWx1ZSBhcyB0aGUgc3RhcnQsIGxpa2UgdG9wOiBcImNhbGMoMnZoIC8gMilcIi4gV2l0aG91dCB0aGlzLCBpdCdkIHVzZSB0aGUgY29tcHV0ZWQgdmFsdWUgKGFsd2F5cyBpbiBweClcbiAgICAgICAgICBzdGFydFZhbHVlID0gdHlwZW9mIHN0YXJ0QXRbcF0gPT09IFwiZnVuY3Rpb25cIiA/IHN0YXJ0QXRbcF0uY2FsbCh0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiBzdGFydEF0W3BdO1xuICAgICAgICAgIF9pc1N0cmluZyhzdGFydFZhbHVlKSAmJiB+c3RhcnRWYWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSAmJiAoc3RhcnRWYWx1ZSA9IF9yZXBsYWNlUmFuZG9tKHN0YXJ0VmFsdWUpKTtcbiAgICAgICAgICBnZXRVbml0KHN0YXJ0VmFsdWUgKyBcIlwiKSB8fCAoc3RhcnRWYWx1ZSArPSBfY29uZmlnLnVuaXRzW3BdIHx8IGdldFVuaXQoX2dldCh0YXJnZXQsIHApKSB8fCBcIlwiKTsgLy8gZm9yIGNhc2VzIHdoZW4gc29tZW9uZSBwYXNzZXMgaW4gYSB1bml0bGVzcyB2YWx1ZSBsaWtlIHt4OiAxMDB9OyBpZiB3ZSB0cnkgc2V0dGluZyB0cmFuc2xhdGUoMTAwLCAwcHgpIGl0IHdvbid0IHdvcmsuXG5cbiAgICAgICAgICAoc3RhcnRWYWx1ZSArIFwiXCIpLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCkpOyAvLyBjYW4ndCB3b3JrIHdpdGggcmVsYXRpdmUgdmFsdWVzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKTtcbiAgICAgICAgcmVsYXRpdmUgPSB0eXBlID09PSBcInN0cmluZ1wiICYmIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgZW5kVmFsdWUuc3Vic3RyKDAsIDIpO1xuICAgICAgICByZWxhdGl2ZSAmJiAoZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMikpO1xuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcblxuICAgICAgICBpZiAocCBpbiBfcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICAgICAgaWYgKHAgPT09IFwiYXV0b0FscGhhXCIpIHtcbiAgICAgICAgICAgIC8vc3BlY2lhbCBjYXNlIHdoZXJlIHdlIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgYWxvbmcgd2l0aCBvcGFjaXR5LiBXZSBzdGlsbCBhbGxvdyB0aGUgb3BhY2l0eSB2YWx1ZSB0byBwYXNzIHRocm91Z2ggYW5kIGdldCB0d2VlbmVkLlxuICAgICAgICAgICAgaWYgKHN0YXJ0TnVtID09PSAxICYmIF9nZXQodGFyZ2V0LCBcInZpc2liaWxpdHlcIikgPT09IFwiaGlkZGVuXCIgJiYgZW5kTnVtKSB7XG4gICAgICAgICAgICAgIC8vaWYgdmlzaWJpbGl0eSBpcyBpbml0aWFsbHkgc2V0IHRvIFwiaGlkZGVuXCIsIHdlIHNob3VsZCBpbnRlcnByZXQgdGhhdCBhcyBpbnRlbnQgdG8gbWFrZSBvcGFjaXR5IDAgKGEgY29udmVuaWVuY2UpXG4gICAgICAgICAgICAgIHN0YXJ0TnVtID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5saW5lUHJvcHMucHVzaChcInZpc2liaWxpdHlcIiwgMCwgc3R5bGUudmlzaWJpbGl0eSk7XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZXMuc2F2ZShwKTtcblxuICAgICAgICAgIGlmICghdHJhbnNmb3JtUHJvcFR3ZWVuKSB7XG4gICAgICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSAmJiAhdmFycy5wYXJzZVRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB2YXJzLnBhcnNlVHJhbnNmb3JtKTsgLy8gaWYsIGZvciBleGFtcGxlLCBnc2FwLnNldCguLi4ge3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoNTB2dylcIn0pLCB0aGUgX2dldCgpIGNhbGwgZG9lc24ndCBwYXJzZSB0aGUgdHJhbnNmb3JtLCB0aHVzIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB3b24ndCBiZSBzZXQgeWV0IHNvIGZvcmNlIHRoZSBwYXJzaW5nIG9mIHRoZSB0cmFuc2Zvcm0gaGVyZS5cblxuICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbiA9IHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgc3R5bGUsIF90cmFuc2Zvcm1Qcm9wLCAwLCAxLCBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0sIGNhY2hlLCAwLCAtMSk7IC8vdGhlIGZpcnN0IHRpbWUgdGhyb3VnaCwgY3JlYXRlIHRoZSByZW5kZXJpbmcgUHJvcFR3ZWVuIHNvIHRoYXQgaXQgcnVucyBMQVNUIChpbiB0aGUgbGlua2VkIGxpc3QsIHdlIGtlZXAgYWRkaW5nIHRvIHRoZSBiZWdpbm5pbmcpXG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2Vlbi5kZXAgPSAxOyAvL2ZsYWcgaXQgYXMgZGVwZW5kZW50IHNvIHRoYXQgaWYgdGhpbmdzIGdldCBraWxsZWQvb3ZlcndyaXR0ZW4gYW5kIHRoaXMgaXMgdGhlIG9ubHkgUHJvcFR3ZWVuIGxlZnQsIHdlIGNhbiBzYWZlbHkga2lsbCB0aGUgd2hvbGUgdHdlZW4uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCAocmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShjYWNoZS5zY2FsZVksIHJlbGF0aXZlICsgZW5kTnVtKSA6IGVuZE51bSkgLSBjYWNoZS5zY2FsZVkgfHwgMCwgX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgICAgdGhpcy5fcHQudSA9IDA7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKFwic2NhbGVZXCIsIHApO1xuICAgICAgICAgICAgcCArPSBcIlhcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIGlubGluZVByb3BzLnB1c2goX3RyYW5zZm9ybU9yaWdpblByb3AsIDAsIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSk7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTsgLy9pbiBjYXNlIHNvbWV0aGluZyBsaWtlIFwibGVmdCB0b3BcIiBvciBcImJvdHRvbSByaWdodFwiIGlzIHBhc3NlZCBpbi4gQ29udmVydCB0byBwZXJjZW50YWdlcy5cblxuICAgICAgICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMCwgc21vb3RoLCAwLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZFVuaXQgPSBwYXJzZUZsb2F0KGVuZFZhbHVlLnNwbGl0KFwiIFwiKVsyXSkgfHwgMDsgLy9oYW5kbGUgdGhlIHpPcmlnaW4gc2VwYXJhdGVseSFcblxuICAgICAgICAgICAgICBlbmRVbml0ICE9PSBjYWNoZS56T3JpZ2luICYmIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInpPcmlnaW5cIiwgY2FjaGUuek9yaWdpbiwgZW5kVW5pdCk7XG5cbiAgICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgc3R5bGUsIHAsIF9maXJzdFR3b09ubHkoc3RhcnRWYWx1ZSksIF9maXJzdFR3b09ubHkoZW5kVmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInN2Z09yaWdpblwiKSB7XG4gICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwIGluIF9yb3RhdGlvbmFsUHJvcGVydGllcykge1xuICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCByZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCByZWxhdGl2ZSArIGVuZFZhbHVlKSA6IGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG4gICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIChyZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCByZWxhdGl2ZSArIGVuZE51bSkgOiBlbmROdW0pIC0gc3RhcnROdW0sICFpc1RyYW5zZm9ybVJlbGF0ZWQgJiYgKGVuZFVuaXQgPT09IFwicHhcIiB8fCBwID09PSBcInpJbmRleFwiKSAmJiB2YXJzLmF1dG9Sb3VuZCAhPT0gZmFsc2UgPyBfcmVuZGVyUm91bmRlZENTU1Byb3AgOiBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgICAgdGhpcy5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgZW5kVW5pdCAhPT0gXCIlXCIpIHtcbiAgICAgICAgICAgIC8vd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcsIHdlIG5lZWQgdG8gcmV2ZXJ0IGl0IHRvIHRoZSBPTEQvT1JJR0lOQUwgdmFsdWUgKHdpdGggdGhvc2UgdW5pdHMpLiBXZSByZWNvcmQgdGhhdCBhcyBhIFwiYlwiIChiZWdpbm5pbmcpIHByb3BlcnR5IGFuZCBwb2ludCB0byBhIHJlbmRlciBtZXRob2QgdGhhdCBoYW5kbGVzIHRoYXQuIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgICAgICAgICB0aGlzLl9wdC5iID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3B0LnIgPSBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICBpZiAocCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vbWF5YmUgaXQncyBub3QgYSBzdHlsZSAtIGl0IGNvdWxkIGJlIGEgcHJvcGVydHkgYWRkZWQgZGlyZWN0bHkgdG8gYW4gZWxlbWVudCBpbiB3aGljaCBjYXNlIHdlJ2xsIHRyeSB0byBhbmltYXRlIHRoYXQuXG4gICAgICAgICAgICB0aGlzLmFkZCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUgfHwgdGFyZ2V0W3BdLCByZWxhdGl2ZSA/IHJlbGF0aXZlICsgZW5kVmFsdWUgOiBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCAhPT0gXCJwYXJzZVRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBfbWlzc2luZ1BsdWdpbihwLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwodGhpcywgdGFyZ2V0LCBwLCBzdGFydFZhbHVlLCByZWxhdGl2ZSA/IHJlbGF0aXZlICsgZW5kVmFsdWUgOiBlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKHAgaW4gc3R5bGUgPyBpbmxpbmVQcm9wcy5wdXNoKHAsIDAsIHN0eWxlW3BdKSA6IGlubGluZVByb3BzLnB1c2gocCwgMSwgc3RhcnRWYWx1ZSB8fCB0YXJnZXRbcF0pKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihyYXRpbywgZGF0YSkge1xuICAgIGlmIChkYXRhLnR3ZWVuLl90aW1lIHx8ICFfcmV2ZXJ0aW5nKCkpIHtcbiAgICAgIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuc3R5bGVzLnJldmVydCgpO1xuICAgIH1cbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcbmdzYXAuY29yZS5nZXRTdHlsZVNhdmVyID0gX2dldFN0eWxlU2F2ZXI7XG5cbihmdW5jdGlvbiAocG9zaXRpb25BbmRTY2FsZSwgcm90YXRpb24sIG90aGVycywgYWxpYXNlcykge1xuICB2YXIgYWxsID0gX2ZvckVhY2hOYW1lKHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uICsgXCIsXCIgKyBvdGhlcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX3RyYW5zZm9ybVByb3BzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX2ZvckVhY2hOYW1lKHJvdGF0aW9uLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9jb25maWcudW5pdHNbbmFtZV0gPSBcImRlZ1wiO1xuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9wcm9wZXJ0eUFsaWFzZXNbYWxsWzEzXV0gPSBwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbjtcblxuICBfZm9yRWFjaE5hbWUoYWxpYXNlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3BsaXQgPSBuYW1lLnNwbGl0KFwiOlwiKTtcbiAgICBfcHJvcGVydHlBbGlhc2VzW3NwbGl0WzFdXSA9IGFsbFtzcGxpdFswXV07XG4gIH0pO1xufSkoXCJ4LHkseixzY2FsZSxzY2FsZVgsc2NhbGVZLHhQZXJjZW50LHlQZXJjZW50XCIsIFwicm90YXRpb24scm90YXRpb25YLHJvdGF0aW9uWSxza2V3WCxza2V3WVwiLCBcInRyYW5zZm9ybSx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luLGZvcmNlM0Qsc21vb3RoT3JpZ2luLHRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsIFwiMDp0cmFuc2xhdGVYLDE6dHJhbnNsYXRlWSwyOnRyYW5zbGF0ZVosODpyb3RhdGUsODpyb3RhdGlvblosODpyb3RhdGVaLDk6cm90YXRlWCwxMDpyb3RhdGVZXCIpO1xuXG5fZm9yRWFjaE5hbWUoXCJ4LHkseix0b3AscmlnaHQsYm90dG9tLGxlZnQsd2lkdGgsaGVpZ2h0LGZvbnRTaXplLHBhZGRpbmcsbWFyZ2luLHBlcnNwZWN0aXZlXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIF9jb25maWcudW5pdHNbbmFtZV0gPSBcInB4XCI7XG59KTtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xuZXhwb3J0IHsgQ1NTUGx1Z2luIGFzIGRlZmF1bHQsIF9nZXRCQm94LCBfY3JlYXRlRWxlbWVudCwgX2NoZWNrUHJvcFByZWZpeCBhcyBjaGVja1ByZWZpeCB9OyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyohXG4gKiBHU0FQIDMuMTIuMlxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMywgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBfY29uZmlnID0ge1xuICBhdXRvU2xlZXA6IDEyMCxcbiAgZm9yY2UzRDogXCJhdXRvXCIsXG4gIG51bGxUYXJnZXRXYXJuOiAxLFxuICB1bml0czoge1xuICAgIGxpbmVIZWlnaHQ6IFwiXCJcbiAgfVxufSxcbiAgICBfZGVmYXVsdHMgPSB7XG4gIGR1cmF0aW9uOiAuNSxcbiAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn0sXG4gICAgX3N1cHByZXNzT3ZlcndyaXRlcyxcbiAgICBfcmV2ZXJ0aW5nLFxuICAgIF9jb250ZXh0LFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX3RpbnlOdW0gPSAxIC8gX2JpZ051bSxcbiAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICBfZ3NJRCA9IDAsXG4gICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9zaW4gPSBNYXRoLnNpbixcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xufSxcbiAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgIC8vIG5vdGU6IElFMTAgaGFzIEFycmF5QnVmZmVyLCBidXQgTk9UIEFycmF5QnVmZmVyLmlzVmlldygpLlxuX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgIC8vb25seSBudW1iZXJzIChpbmNsdWRpbmcgbmVnYXRpdmVzIGFuZCBkZWNpbWFscykgYnV0IE5PVCByZWxhdGl2ZSB2YWx1ZXMuXG5fbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtK10qXFxkKi9nLFxuICAgIC8vZmluZHMgYW55IG51bWJlcnMsIGluY2x1ZGluZyBvbmVzIHRoYXQgc3RhcnQgd2l0aCArPSBvciAtPSwgbmVnYXRpdmUgbnVtYmVycywgYW5kIG9uZXMgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBsaWtlIDFlLTguXG5fbnVtV2l0aFVuaXRFeHAgPSAvWy0rPS5dKlxcZCtbLmUtXSpcXGQqW2EteiVdKi9nLFxuICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrXFwuP1xcZCooPzplLXxlXFwrKT9cXGQqL2dpLFxuICAgIC8vZHVwbGljYXRlIHNvIHRoYXQgd2hpbGUgd2UncmUgbG9vcGluZyB0aHJvdWdoIG1hdGNoZXMgZnJvbSBleGVjKCksIGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGxhc3RJbmRleCBvZiBfbnVtRXhwIHdoaWNoIHdlIHVzZSB0byBzZWFyY2ggZm9yIGNvbG9ycyB0b28uXG5fcmVsRXhwID0gL1srLV09LT9bLlxcZF0rLyxcbiAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvW14sJ1wiXFxbXFxdXFxzXSsvZ2ksXG4gICAgLy8gcHJldmlvdXNseSAvWyNcXC0rLl0qXFxiW2EtelxcZFxcLT0rJS5dKy9naSBidXQgZGlkbid0IGNhdGNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbl91bml0RXhwID0gL15bK1xcLT1lXFxzXFxkXSpcXGQrWy5cXGRdKihbYS16XSp8JSlcXHMqJC9pLFxuICAgIF9nbG9iYWxUaW1lbGluZSxcbiAgICBfd2luLFxuICAgIF9jb3JlSW5pdHRlZCxcbiAgICBfZG9jLFxuICAgIF9nbG9iYWxzID0ge30sXG4gICAgX2luc3RhbGxTY29wZSA9IHt9LFxuICAgIF9jb3JlUmVhZHksXG4gICAgX2luc3RhbGwgPSBmdW5jdGlvbiBfaW5zdGFsbChzY29wZSkge1xuICByZXR1cm4gKF9pbnN0YWxsU2NvcGUgPSBfbWVyZ2Uoc2NvcGUsIF9nbG9iYWxzKSkgJiYgZ3NhcDtcbn0sXG4gICAgX21pc3NpbmdQbHVnaW4gPSBmdW5jdGlvbiBfbWlzc2luZ1BsdWdpbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHksIFwic2V0IHRvXCIsIHZhbHVlLCBcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIik7XG59LFxuICAgIF93YXJuID0gZnVuY3Rpb24gX3dhcm4obWVzc2FnZSwgc3VwcHJlc3MpIHtcbiAgcmV0dXJuICFzdXBwcmVzcyAmJiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59LFxuICAgIF9hZGRHbG9iYWwgPSBmdW5jdGlvbiBfYWRkR2xvYmFsKG5hbWUsIG9iaikge1xuICByZXR1cm4gbmFtZSAmJiAoX2dsb2JhbHNbbmFtZV0gPSBvYmopICYmIF9pbnN0YWxsU2NvcGUgJiYgKF9pbnN0YWxsU2NvcGVbbmFtZV0gPSBvYmopIHx8IF9nbG9iYWxzO1xufSxcbiAgICBfZW1wdHlGdW5jID0gZnVuY3Rpb24gX2VtcHR5RnVuYygpIHtcbiAgcmV0dXJuIDA7XG59LFxuICAgIF9zdGFydEF0UmV2ZXJ0Q29uZmlnID0ge1xuICBzdXBwcmVzc0V2ZW50czogdHJ1ZSxcbiAgaXNTdGFydDogdHJ1ZSxcbiAga2lsbDogZmFsc2Vcbn0sXG4gICAgX3JldmVydENvbmZpZ05vS2lsbCA9IHtcbiAgc3VwcHJlc3NFdmVudHM6IHRydWUsXG4gIGtpbGw6IGZhbHNlXG59LFxuICAgIF9yZXZlcnRDb25maWcgPSB7XG4gIHN1cHByZXNzRXZlbnRzOiB0cnVlXG59LFxuICAgIF9yZXNlcnZlZFByb3BzID0ge30sXG4gICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICBfbGF6eUxvb2t1cCA9IHt9LFxuICAgIF9sYXN0UmVuZGVyZWRGcmFtZSxcbiAgICBfcGx1Z2lucyA9IHt9LFxuICAgIF9lZmZlY3RzID0ge30sXG4gICAgX25leHRHQ0ZyYW1lID0gMzAsXG4gICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgX2NhbGxiYWNrTmFtZXMgPSBcIlwiLFxuICAgIF9oYXJuZXNzID0gZnVuY3Rpb24gX2hhcm5lc3ModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgIGhhcm5lc3NQbHVnaW4sXG4gICAgICBpO1xuICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICBpZiAoIShoYXJuZXNzUGx1Z2luID0gKHRhcmdldC5fZ3NhcCB8fCB7fSkuaGFybmVzcykpIHtcbiAgICAvLyBmaW5kIHRoZSBmaXJzdCB0YXJnZXQgd2l0aCBhIGhhcm5lc3MuIFdlIGFzc3VtZSB0YXJnZXRzIHBhc3NlZCBpbnRvIGFuIGFuaW1hdGlvbiB3aWxsIGJlIG9mIHNpbWlsYXIgdHlwZSwgbWVhbmluZyB0aGUgc2FtZSBraW5kIG9mIGhhcm5lc3MgY2FuIGJlIHVzZWQgZm9yIHRoZW0gYWxsIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tICYmICFfaGFybmVzc1BsdWdpbnNbaV0udGFyZ2V0VGVzdCh0YXJnZXQpKSB7fVxuXG4gICAgaGFybmVzc1BsdWdpbiA9IF9oYXJuZXNzUGx1Z2luc1tpXTtcbiAgfVxuXG4gIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0cztcbn0sXG4gICAgX2dldENhY2hlID0gZnVuY3Rpb24gX2dldENhY2hlKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRvQXJyYXkodGFyZ2V0KSlbMF0uX2dzYXA7XG59LFxuICAgIF9nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2KSB7XG4gIHJldHVybiAodiA9IHRhcmdldFtwcm9wZXJ0eV0pICYmIF9pc0Z1bmN0aW9uKHYpID8gdGFyZ2V0W3Byb3BlcnR5XSgpIDogX2lzVW5kZWZpbmVkKHYpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgdjtcbn0sXG4gICAgX2ZvckVhY2hOYW1lID0gZnVuY3Rpb24gX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jKSB7XG4gIHJldHVybiAobmFtZXMgPSBuYW1lcy5zcGxpdChcIixcIikpLmZvckVhY2goZnVuYykgfHwgbmFtZXM7XG59LFxuICAgIC8vc3BsaXQgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBuYW1lcyBpbnRvIGFuIGFycmF5LCB0aGVuIHJ1biBhIGZvckVhY2goKSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBzcGxpdCBhcnJheSAodGhpcyBpcyBqdXN0IGEgd2F5IHRvIGNvbnNvbGlkYXRlL3Nob3J0ZW4gc29tZSBjb2RlKS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3JvdW5kUHJlY2lzZSA9IGZ1bmN0aW9uIF9yb3VuZFByZWNpc2UodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMCB8fCAwO1xufSxcbiAgICAvLyBpbmNyZWFzZWQgcHJlY2lzaW9uIG1vc3RseSBmb3IgdGltaW5nIHZhbHVlcy5cbl9wYXJzZVJlbGF0aXZlID0gZnVuY3Rpb24gX3BhcnNlUmVsYXRpdmUoc3RhcnQsIHZhbHVlKSB7XG4gIHZhciBvcGVyYXRvciA9IHZhbHVlLmNoYXJBdCgwKSxcbiAgICAgIGVuZCA9IHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKDIpKTtcbiAgc3RhcnQgPSBwYXJzZUZsb2F0KHN0YXJ0KTtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSBcIitcIiA/IHN0YXJ0ICsgZW5kIDogb3BlcmF0b3IgPT09IFwiLVwiID8gc3RhcnQgLSBlbmQgOiBvcGVyYXRvciA9PT0gXCIqXCIgPyBzdGFydCAqIGVuZCA6IHN0YXJ0IC8gZW5kO1xufSxcbiAgICBfYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgLy9zZWFyY2hlcyBvbmUgYXJyYXkgdG8gZmluZCBtYXRjaGVzIGZvciBhbnkgb2YgdGhlIGl0ZW1zIGluIHRoZSB0b0ZpbmQgYXJyYXkuIEFzIHNvb24gYXMgb25lIGlzIGZvdW5kLCBpdCByZXR1cm5zIHRydWUuIEl0IGRvZXMgTk9UIHJldHVybiBhbGwgdGhlIG1hdGNoZXM7IGl0J3Mgc2ltcGx5IGEgYm9vbGVhbiBzZWFyY2guXG4gIHZhciBsID0gdG9GaW5kLmxlbmd0aCxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyB0b1NlYXJjaC5pbmRleE9mKHRvRmluZFtpXSkgPCAwICYmICsraSA8IGw7KSB7fVxuXG4gIHJldHVybiBpIDwgbDtcbn0sXG4gICAgX2xhenlSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVJlbmRlcigpIHtcbiAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICBhID0gX2xhenlUd2VlbnMuc2xpY2UoMCksXG4gICAgICBpLFxuICAgICAgdHdlZW47XG5cbiAgX2xhenlMb29rdXAgPSB7fTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdHdlZW4gPSBhW2ldO1xuICAgIHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICYmICh0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKS5fbGF6eSA9IDApO1xuICB9XG59LFxuICAgIF9sYXp5U2FmZVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5U2FmZVJlbmRlcihhbmltYXRpb24sIHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgIV9yZXZlcnRpbmcgJiYgX2xhenlSZW5kZXIoKTtcbiAgYW5pbWF0aW9uLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UgfHwgX3JldmVydGluZyAmJiB0aW1lIDwgMCAmJiAoYW5pbWF0aW9uLl9pbml0dGVkIHx8IGFuaW1hdGlvbi5fc3RhcnRBdCkpO1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgIV9yZXZlcnRpbmcgJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIHNvbWVvbmUgY2FsbHMgc2VlaygpIG9yIHRpbWUoKSBvciBwcm9ncmVzcygpLCB0aGV5IGV4cGVjdCBhbiBpbW1lZGlhdGUgcmVuZGVyLlxufSxcbiAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIChuIHx8IG4gPT09IDApICYmICh2YWx1ZSArIFwiXCIpLm1hdGNoKF9kZWxpbWl0ZWRWYWx1ZUV4cCkubGVuZ3RoIDwgMiA/IG4gOiBfaXNTdHJpbmcodmFsdWUpID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG59LFxuICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaChwKSB7XG4gIHJldHVybiBwO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9zZXRLZXlmcmFtZURlZmF1bHRzID0gZnVuY3Rpb24gX3NldEtleWZyYW1lRGVmYXVsdHMoZXhjbHVkZUR1cmF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICAgIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICAgIHAgaW4gb2JqIHx8IHAgPT09IFwiZHVyYXRpb25cIiAmJiBleGNsdWRlRHVyYXRpb24gfHwgcCA9PT0gXCJlYXNlXCIgfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgICB9XG4gIH07XG59LFxuICAgIF9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZShiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9tZXJnZURlZXAgPSBmdW5jdGlvbiBfbWVyZ2VEZWVwKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgcCAhPT0gXCJfX3Byb3RvX19cIiAmJiBwICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgcCAhPT0gXCJwcm90b3R5cGVcIiAmJiAoYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdKTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfY29weUV4Y2x1ZGluZyA9IGZ1bmN0aW9uIF9jb3B5RXhjbHVkaW5nKG9iaiwgZXhjbHVkaW5nKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMoX2lzQXJyYXkodmFycy5rZXlmcmFtZXMpKSA6IF9zZXREZWZhdWx0cztcblxuICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGZ1bmModmFycywgcGFyZW50LnZhcnMuZGVmYXVsdHMpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfYXJyYXlzTWF0Y2ggPSBmdW5jdGlvbiBfYXJyYXlzTWF0Y2goYTEsIGEyKSB7XG4gIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgd2hpbGUgKG1hdGNoICYmIGktLSAmJiBhMVtpXSA9PT0gYTJbaV0pIHt9XG5cbiAgcmV0dXJuIGkgPCAwO1xufSxcbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfYWRkTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCwgc29ydEJ5KSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgdDtcblxuICBpZiAoc29ydEJ5KSB7XG4gICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICBwcmV2ID0gcHJldi5fcHJldjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBjaGlsZC5fcHJldiA9IHByZXY7XG4gIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgcmV0dXJuIGNoaWxkO1xufSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIGlmIChwYXJlbnRbZmlyc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IHByZXY7XG4gIH1cblxuICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDsgLy8gZG9uJ3QgZGVsZXRlIHRoZSBfZHAganVzdCBzbyB3ZSBjYW4gcmV2ZXJ0IGlmIG5lY2Vzc2FyeS4gQnV0IHBhcmVudCBzaG91bGQgYmUgbnVsbCB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpc24ndCBpbiBhIGxpbmtlZCBsaXN0LlxufSxcbiAgICBfcmVtb3ZlRnJvbVBhcmVudCA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkLCBvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlKSB7XG4gIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZSAmJiBjaGlsZC5wYXJlbnQucmVtb3ZlKGNoaWxkKTtcbiAgY2hpbGQuX2FjdCA9IDA7XG59LFxuICAgIF91bmNhY2hlID0gZnVuY3Rpb24gX3VuY2FjaGUoYW5pbWF0aW9uLCBjaGlsZCkge1xuICBpZiAoYW5pbWF0aW9uICYmICghY2hpbGQgfHwgY2hpbGQuX2VuZCA+IGFuaW1hdGlvbi5fZHVyIHx8IGNoaWxkLl9zdGFydCA8IDApKSB7XG4gICAgLy8gcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uOiBpZiBhIGNoaWxkIGFuaW1hdGlvbiBpcyBwYXNzZWQgaW4gd2Ugc2hvdWxkIG9ubHkgdW5jYWNoZSBpZiB0aGF0IGNoaWxkIEVYVEVORFMgdGhlIGFuaW1hdGlvbiAoaXRzIGVuZCB0aW1lIGlzIGJleW9uZCB0aGUgZW5kKVxuICAgIHZhciBhID0gYW5pbWF0aW9uO1xuXG4gICAgd2hpbGUgKGEpIHtcbiAgICAgIGEuX2RpcnR5ID0gMTtcbiAgICAgIGEgPSBhLnBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcmVjYWNoZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9yZWNhY2hlQW5jZXN0b3JzKGFuaW1hdGlvbikge1xuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLnBhcmVudDtcblxuICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAvL3NvbWV0aW1lcyB3ZSBtdXN0IGZvcmNlIGEgcmUtc29ydCBvZiBhbGwgY2hpbGRyZW4gYW5kIHVwZGF0ZSB0aGUgZHVyYXRpb24vdG90YWxEdXJhdGlvbiBvZiBhbGwgYW5jZXN0b3IgdGltZWxpbmVzIGltbWVkaWF0ZWx5IGluIGNhc2UsIGZvciBleGFtcGxlLCBpbiB0aGUgbWlkZGxlIG9mIGEgcmVuZGVyIGxvb3AsIG9uZSB0d2VlbiBhbHRlcnMgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSB3aGljaCBzaG92ZXMgaXRzIHN0YXJ0VGltZSBiZWZvcmUgMCwgZm9yY2luZyB0aGUgcGFyZW50IHRpbWVsaW5lIHRvIHNoaWZ0IGFyb3VuZCBhbmQgc2hpZnRDaGlsZHJlbigpIHdoaWNoIGNvdWxkIGFmZmVjdCB0aGF0IG5leHQgdHdlZW4ncyByZW5kZXIgKHN0YXJ0VGltZSkuIERvZXNuJ3QgbWF0dGVyIGZvciB0aGUgcm9vdCB0aW1lbGluZSB0aG91Z2guXG4gICAgcGFyZW50Ll9kaXJ0eSA9IDE7XG4gICAgcGFyZW50LnRvdGFsRHVyYXRpb24oKTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3Jld2luZFN0YXJ0QXQgPSBmdW5jdGlvbiBfcmV3aW5kU3RhcnRBdCh0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgcmV0dXJuIHR3ZWVuLl9zdGFydEF0ICYmIChfcmV2ZXJ0aW5nID8gdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWdOb0tpbGwpIDogdHdlZW4udmFycy5pbW1lZGlhdGVSZW5kZXIgJiYgIXR3ZWVuLnZhcnMuYXV0b1JldmVydCB8fCB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCBmb3JjZSkpO1xufSxcbiAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAhYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5fdHMgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbi5wYXJlbnQpO1xufSxcbiAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZShhbmltYXRpb24uX3RUaW1lLCBhbmltYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSArIGFuaW1hdGlvbi5fckRlbGF5KSAqIGFuaW1hdGlvbiA6IDA7XG59LFxuICAgIC8vIGZlZWQgaW4gdGhlIHRvdGFsVGltZSBhbmQgY3ljbGVEdXJhdGlvbiBhbmQgaXQnbGwgcmV0dXJuIHRoZSBjeWNsZSAoaXRlcmF0aW9uIG1pbnVzIDEpIGFuZCBpZiB0aGUgcGxheWhlYWQgaXMgZXhhY3RseSBhdCB0aGUgdmVyeSBFTkQsIGl0IHdpbGwgTk9UIGJ1bXAgdXAgdG8gdGhlIG5leHQgY3ljbGUuXG5fYW5pbWF0aW9uQ3ljbGUgPSBmdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIGN5Y2xlRHVyYXRpb24pIHtcbiAgdmFyIHdob2xlID0gTWF0aC5mbG9vcih0VGltZSAvPSBjeWNsZUR1cmF0aW9uKTtcbiAgcmV0dXJuIHRUaW1lICYmIHdob2xlID09PSB0VGltZSA/IHdob2xlIC0gMSA6IHdob2xlO1xufSxcbiAgICBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSA9IGZ1bmN0aW9uIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudFRpbWUsIGNoaWxkKSB7XG4gIHJldHVybiAocGFyZW50VGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgKyAoY2hpbGQuX3RzID49IDAgPyAwIDogY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpO1xufSxcbiAgICBfc2V0RW5kID0gZnVuY3Rpb24gX3NldEVuZChhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fZW5kID0gX3JvdW5kUHJlY2lzZShhbmltYXRpb24uX3N0YXJ0ICsgKGFuaW1hdGlvbi5fdER1ciAvIE1hdGguYWJzKGFuaW1hdGlvbi5fdHMgfHwgYW5pbWF0aW9uLl9ydHMgfHwgX3RpbnlOdW0pIHx8IDApKTtcbn0sXG4gICAgX2FsaWduUGxheWhlYWQgPSBmdW5jdGlvbiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIHRvdGFsVGltZSkge1xuICAvLyBhZGp1c3RzIHRoZSBhbmltYXRpb24ncyBfc3RhcnQgYW5kIF9lbmQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCB0b3RhbFRpbWUgKG9ubHkgaWYgdGhlIHBhcmVudCdzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUgYW5kIHRoZSBhbmltYXRpb24gaXNuJ3QgcGF1c2VkKS4gSXQgZG9lc24ndCBkbyBhbnkgcmVuZGVyaW5nIG9yIGZvcmNpbmcgdGhpbmdzIGJhY2sgaW50byBwYXJlbnQgdGltZWxpbmVzLCBldGMuIC0gdGhhdCdzIHdoYXQgdG90YWxUaW1lKCkgaXMgZm9yLlxuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLl9kcDtcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiBhbmltYXRpb24uX3RzKSB7XG4gICAgYW5pbWF0aW9uLl9zdGFydCA9IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lIC0gKGFuaW1hdGlvbi5fdHMgPiAwID8gdG90YWxUaW1lIC8gYW5pbWF0aW9uLl90cyA6ICgoYW5pbWF0aW9uLl9kaXJ0eSA/IGFuaW1hdGlvbi50b3RhbER1cmF0aW9uKCkgOiBhbmltYXRpb24uX3REdXIpIC0gdG90YWxUaW1lKSAvIC1hbmltYXRpb24uX3RzKSk7XG5cbiAgICBfc2V0RW5kKGFuaW1hdGlvbik7XG5cbiAgICBwYXJlbnQuX2RpcnR5IHx8IF91bmNhY2hlKHBhcmVudCwgYW5pbWF0aW9uKTsgLy9mb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIElmIHRoZSBwYXJlbnQncyBjYWNoZSBpcyBhbHJlYWR5IGRpcnR5LCBpdCBhbHJlYWR5IHRvb2sgY2FyZSBvZiBtYXJraW5nIHRoZSBhbmNlc3RvcnMgYXMgZGlydHkgdG9vLCBzbyBza2lwIHRoZSBmdW5jdGlvbiBjYWxsIGhlcmUuXG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcblxuLypcbl90b3RhbFRpbWVUb1RpbWUgPSAoY2xhbXBlZFRvdGFsVGltZSwgZHVyYXRpb24sIHJlcGVhdCwgcmVwZWF0RGVsYXksIHlveW8pID0+IHtcblx0bGV0IGN5Y2xlRHVyYXRpb24gPSBkdXJhdGlvbiArIHJlcGVhdERlbGF5LFxuXHRcdHRpbWUgPSBfcm91bmQoY2xhbXBlZFRvdGFsVGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXHRpZiAodGltZSA+IGR1cmF0aW9uKSB7XG5cdFx0dGltZSA9IGR1cmF0aW9uO1xuXHR9XG5cdHJldHVybiAoeW95byAmJiAofn4oY2xhbXBlZFRvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pICYgMSkpID8gZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbn0sXG4qL1xuX3Bvc3RBZGRDaGVja3MgPSBmdW5jdGlvbiBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpIHtcbiAgdmFyIHQ7XG5cbiAgaWYgKGNoaWxkLl90aW1lIHx8ICFjaGlsZC5fZHVyICYmIGNoaWxkLl9pbml0dGVkIHx8IGNoaWxkLl9zdGFydCA8IHRpbWVsaW5lLl90aW1lICYmIChjaGlsZC5fZHVyIHx8ICFjaGlsZC5hZGQpKSB7XG4gICAgLy8gaW4gY2FzZSwgZm9yIGV4YW1wbGUsIHRoZSBfc3RhcnQgaXMgbW92ZWQgb24gYSB0d2VlbiB0aGF0IGhhcyBhbHJlYWR5IHJlbmRlcmVkLCBvciBpZiBpdCdzIGJlaW5nIGluc2VydGVkIGludG8gYSB0aW1lbGluZSBCRUZPUkUgd2hlcmUgdGhlIHBsYXloZWFkIGlzIGN1cnJlbnRseS4gSW1hZ2luZSBpdCdzIGF0IGl0cyBlbmQgc3RhdGUsIHRoZW4gdGhlIHN0YXJ0VGltZSBpcyBtb3ZlZCBXQVkgbGF0ZXIgKGFmdGVyIHRoZSBlbmQgb2YgdGhpcyB0aW1lbGluZSksIGl0IHNob3VsZCByZW5kZXIgYXQgaXRzIGJlZ2lubmluZy4gU3BlY2lhbCBjYXNlOiBpZiBpdCdzIGEgdGltZWxpbmUgKGhhcyAuYWRkKCkgbWV0aG9kKSBhbmQgbm8gZHVyYXRpb24sIHdlIGNhbiBza2lwIHJlbmRlcmluZyBiZWNhdXNlIHRoZSB1c2VyIG1heSBiZSBwb3B1bGF0aW5nIGl0IEFGVEVSIGFkZGluZyBpdCB0byBhIHBhcmVudCB0aW1lbGluZSAodW5jb252ZW50aW9uYWwsIGJ1dCBwb3NzaWJsZSwgYW5kIHdlIHdvdWxkbid0IHdhbnQgaXQgdG8gZ2V0IHJlbW92ZWQgaWYgdGhlIHBhcmVudCdzIGF1dG9SZW1vdmVDaGlsZHJlbiBpcyB0cnVlKS5cbiAgICB0ID0gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZWxpbmUucmF3VGltZSgpLCBjaGlsZCk7XG5cbiAgICBpZiAoIWNoaWxkLl9kdXIgfHwgX2NsYW1wKDAsIGNoaWxkLnRvdGFsRHVyYXRpb24oKSwgdCkgLSBjaGlsZC5fdFRpbWUgPiBfdGlueU51bSkge1xuICAgICAgY2hpbGQucmVuZGVyKHQsIHRydWUpO1xuICAgIH1cbiAgfSAvL2lmIHRoZSB0aW1lbGluZSBoYXMgYWxyZWFkeSBlbmRlZCBidXQgdGhlIGluc2VydGVkIHR3ZWVuL3RpbWVsaW5lIGV4dGVuZHMgdGhlIGR1cmF0aW9uLCB3ZSBzaG91bGQgZW5hYmxlIHRoaXMgdGltZWxpbmUgYWdhaW4gc28gdGhhdCBpdCByZW5kZXJzIHByb3Blcmx5LiBXZSBzaG91bGQgYWxzbyBhbGlnbiB0aGUgcGxheWhlYWQgd2l0aCB0aGUgcGFyZW50IHRpbWVsaW5lJ3Mgd2hlbiBhcHByb3ByaWF0ZS5cblxuXG4gIGlmIChfdW5jYWNoZSh0aW1lbGluZSwgY2hpbGQpLl9kcCAmJiB0aW1lbGluZS5faW5pdHRlZCAmJiB0aW1lbGluZS5fdGltZSA+PSB0aW1lbGluZS5fZHVyICYmIHRpbWVsaW5lLl90cykge1xuICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9ycyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQuLi5cbiAgICBpZiAodGltZWxpbmUuX2R1ciA8IHRpbWVsaW5lLmR1cmF0aW9uKCkpIHtcbiAgICAgIHQgPSB0aW1lbGluZTtcblxuICAgICAgd2hpbGUgKHQuX2RwKSB7XG4gICAgICAgIHQucmF3VGltZSgpID49IDAgJiYgdC50b3RhbFRpbWUodC5fdFRpbWUpOyAvL21vdmVzIHRoZSB0aW1lbGluZSAoc2hpZnRzIGl0cyBzdGFydFRpbWUpIGlmIG5lY2Vzc2FyeSwgYW5kIGFsc28gZW5hYmxlcyBpdC4gSWYgaXQncyBjdXJyZW50bHkgemVybywgdGhvdWdoLCBpdCBtYXkgbm90IGJlIHNjaGVkdWxlZCB0byByZW5kZXIgdW50aWwgbGF0ZXIgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIGl0IHRvIGFsaWduIHdpdGggdGhlIGN1cnJlbnQgcGxheWhlYWQgcG9zaXRpb24uIE9ubHkgbW92ZSB0byBjYXRjaCB1cCB3aXRoIHRoZSBwbGF5aGVhZC5cblxuICAgICAgICB0ID0gdC5fZHA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZWxpbmUuX3pUaW1lID0gLV90aW55TnVtOyAvLyBoZWxwcyBlbnN1cmUgdGhhdCB0aGUgbmV4dCByZW5kZXIoKSB3aWxsIGJlIGZvcmNlZCAoY3Jvc3NpbmdTdGFydCA9IHRydWUgaW4gcmVuZGVyKCkpLCBldmVuIGlmIHRoZSBkdXJhdGlvbiBoYXNuJ3QgY2hhbmdlZCAod2UncmUgYWRkaW5nIGEgY2hpbGQgd2hpY2ggd291bGQgbmVlZCB0byBnZXQgcmVuZGVyZWQpLiBEZWZpbml0ZWx5IGFuIGVkZ2UgY2FzZS4gTm90ZTogd2UgTVVTVCBkbyB0aGlzIEFGVEVSIHRoZSBsb29wIGFib3ZlIHdoZXJlIHRoZSB0b3RhbFRpbWUoKSBtaWdodCB0cmlnZ2VyIGEgcmVuZGVyKCkgYmVjYXVzZSB0aGlzIF9hZGRUb1RpbWVsaW5lKCkgbWV0aG9kIGdldHMgY2FsbGVkIGZyb20gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgQkVGT1JFIHR3ZWVucyBldmVuIHJlY29yZCB0aGVpciB0YXJnZXRzLCBldGMuIHNvIHdlIHdvdWxkbid0IHdhbnQgdGhpbmdzIHRvIGdldCB0cmlnZ2VyZWQgaW4gdGhlIHdyb25nIG9yZGVyLlxuICB9XG59LFxuICAgIF9hZGRUb1RpbWVsaW5lID0gZnVuY3Rpb24gX2FkZFRvVGltZWxpbmUodGltZWxpbmUsIGNoaWxkLCBwb3NpdGlvbiwgc2tpcENoZWNrcykge1xuICBjaGlsZC5wYXJlbnQgJiYgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICBjaGlsZC5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKChfaXNOdW1iZXIocG9zaXRpb24pID8gcG9zaXRpb24gOiBwb3NpdGlvbiB8fCB0aW1lbGluZSAhPT0gX2dsb2JhbFRpbWVsaW5lID8gX3BhcnNlUG9zaXRpb24odGltZWxpbmUsIHBvc2l0aW9uLCBjaGlsZCkgOiB0aW1lbGluZS5fdGltZSkgKyBjaGlsZC5fZGVsYXkpO1xuICBjaGlsZC5fZW5kID0gX3JvdW5kUHJlY2lzZShjaGlsZC5fc3RhcnQgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gTWF0aC5hYnMoY2hpbGQudGltZVNjYWxlKCkpIHx8IDApKTtcblxuICBfYWRkTGlua2VkTGlzdEl0ZW0odGltZWxpbmUsIGNoaWxkLCBcIl9maXJzdFwiLCBcIl9sYXN0XCIsIHRpbWVsaW5lLl9zb3J0ID8gXCJfc3RhcnRcIiA6IDApO1xuXG4gIF9pc0Zyb21PckZyb21TdGFydChjaGlsZCkgfHwgKHRpbWVsaW5lLl9yZWNlbnQgPSBjaGlsZCk7XG4gIHNraXBDaGVja3MgfHwgX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKTtcbiAgdGltZWxpbmUuX3RzIDwgMCAmJiBfYWxpZ25QbGF5aGVhZCh0aW1lbGluZSwgdGltZWxpbmUuX3RUaW1lKTsgLy8gaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgbmV3IGNoaWxkIG1ha2VzIGl0IGxvbmdlciwgd2UgbWF5IG5lZWQgdG8gYWRqdXN0IHRoZSBwYXJlbnQncyBfc3RhcnQgKHB1c2ggaXQgYmFjaylcblxuICByZXR1cm4gdGltZWxpbmU7XG59LFxuICAgIF9zY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gX3Njcm9sbFRyaWdnZXIoYW5pbWF0aW9uLCB0cmlnZ2VyKSB7XG4gIHJldHVybiAoX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlciB8fCBfbWlzc2luZ1BsdWdpbihcInNjcm9sbFRyaWdnZXJcIiwgdHJpZ2dlcikpICYmIF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHRyaWdnZXIsIGFuaW1hdGlvbik7XG59LFxuICAgIF9hdHRlbXB0SW5pdFR3ZWVuID0gZnVuY3Rpb24gX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cywgdFRpbWUpIHtcbiAgX2luaXRUd2Vlbih0d2VlbiwgdGltZSwgdFRpbWUpO1xuXG4gIGlmICghdHdlZW4uX2luaXR0ZWQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICghZm9yY2UgJiYgdHdlZW4uX3B0ICYmICFfcmV2ZXJ0aW5nICYmICh0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSAhPT0gZmFsc2UgfHwgIXR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5KSAmJiBfbGFzdFJlbmRlcmVkRnJhbWUgIT09IF90aWNrZXIuZnJhbWUpIHtcbiAgICBfbGF6eVR3ZWVucy5wdXNoKHR3ZWVuKTtcblxuICAgIHR3ZWVuLl9sYXp5ID0gW3RUaW1lLCBzdXBwcmVzc0V2ZW50c107XG4gICAgcmV0dXJuIDE7XG4gIH1cbn0sXG4gICAgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydCA9IGZ1bmN0aW9uIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQoX3JlZikge1xuICB2YXIgcGFyZW50ID0gX3JlZi5wYXJlbnQ7XG4gIHJldHVybiBwYXJlbnQgJiYgcGFyZW50Ll90cyAmJiBwYXJlbnQuX2luaXR0ZWQgJiYgIXBhcmVudC5fbG9jayAmJiAocGFyZW50LnJhd1RpbWUoKSA8IDAgfHwgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChwYXJlbnQpKTtcbn0sXG4gICAgLy8gY2hlY2sgcGFyZW50J3MgX2xvY2sgYmVjYXVzZSB3aGVuIGEgdGltZWxpbmUgcmVwZWF0cy95b3lvcyBhbmQgZG9lcyBpdHMgYXJ0aWZpY2lhbCB3cmFwcGluZywgd2Ugc2hvdWxkbid0IGZvcmNlIHRoZSByYXRpbyBiYWNrIHRvIDBcbl9pc0Zyb21PckZyb21TdGFydCA9IGZ1bmN0aW9uIF9pc0Zyb21PckZyb21TdGFydChfcmVmMikge1xuICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XG4gIHJldHVybiBkYXRhID09PSBcImlzRnJvbVN0YXJ0XCIgfHwgZGF0YSA9PT0gXCJpc1N0YXJ0XCI7XG59LFxuICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiA9IGZ1bmN0aW9uIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgdmFyIHByZXZSYXRpbyA9IHR3ZWVuLnJhdGlvLFxuICAgICAgcmF0aW8gPSB0b3RhbFRpbWUgPCAwIHx8ICF0b3RhbFRpbWUgJiYgKCF0d2Vlbi5fc3RhcnQgJiYgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydCh0d2VlbikgJiYgISghdHdlZW4uX2luaXR0ZWQgJiYgX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgfHwgKHR3ZWVuLl90cyA8IDAgfHwgdHdlZW4uX2RwLl90cyA8IDApICYmICFfaXNGcm9tT3JGcm9tU3RhcnQodHdlZW4pKSA/IDAgOiAxLFxuICAgICAgLy8gaWYgdGhlIHR3ZWVuIG9yIGl0cyBwYXJlbnQgaXMgcmV2ZXJzZWQgYW5kIHRoZSB0b3RhbFRpbWUgaXMgMCwgd2Ugc2hvdWxkIGdvIHRvIGEgcmF0aW8gb2YgMC4gRWRnZSBjYXNlOiBpZiBhIGZyb20oKSBvciBmcm9tVG8oKSBzdGFnZ2VyIHR3ZWVuIGlzIHBsYWNlZCBsYXRlciBpbiBhIHRpbWVsaW5lLCB0aGUgXCJzdGFydEF0XCIgemVyby1kdXJhdGlvbiB0d2VlbiBjb3VsZCBpbml0aWFsbHkgcmVuZGVyIGF0IGEgdGltZSB3aGVuIHRoZSBwYXJlbnQgdGltZWxpbmUncyBwbGF5aGVhZCBpcyB0ZWNobmljYWxseSBCRUZPUkUgd2hlcmUgdGhpcyB0d2VlbiBpcywgc28gbWFrZSBzdXJlIHRoYXQgYW55IFwiZnJvbVwiIGFuZCBcImZyb21Ub1wiIHN0YXJ0QXQgdHdlZW5zIGFyZSByZW5kZXJlZCB0aGUgZmlyc3QgdGltZSBhdCBhIHJhdGlvIG9mIDEuXG4gIHJlcGVhdERlbGF5ID0gdHdlZW4uX3JEZWxheSxcbiAgICAgIHRUaW1lID0gMCxcbiAgICAgIHB0LFxuICAgICAgaXRlcmF0aW9uLFxuICAgICAgcHJldkl0ZXJhdGlvbjtcblxuICBpZiAocmVwZWF0RGVsYXkgJiYgdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vIGluIGNhc2UgdGhlcmUncyBhIHplcm8tZHVyYXRpb24gdHdlZW4gdGhhdCBoYXMgYSByZXBlYXQgd2l0aCBhIHJlcGVhdERlbGF5XG4gICAgdFRpbWUgPSBfY2xhbXAoMCwgdHdlZW4uX3REdXIsIHRvdGFsVGltZSk7XG4gICAgaXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRUaW1lLCByZXBlYXREZWxheSk7XG4gICAgdHdlZW4uX3lveW8gJiYgaXRlcmF0aW9uICYgMSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuXG4gICAgaWYgKGl0ZXJhdGlvbiAhPT0gX2FuaW1hdGlvbkN5Y2xlKHR3ZWVuLl90VGltZSwgcmVwZWF0RGVsYXkpKSB7XG4gICAgICAvLyBpZiBpdGVyYXRpb24gY2hhbmdlZFxuICAgICAgcHJldlJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgdHdlZW4udmFycy5yZXBlYXRSZWZyZXNoICYmIHR3ZWVuLl9pbml0dGVkICYmIHR3ZWVuLmludmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmF0aW8gIT09IHByZXZSYXRpbyB8fCBfcmV2ZXJ0aW5nIHx8IGZvcmNlIHx8IHR3ZWVuLl96VGltZSA9PT0gX3RpbnlOdW0gfHwgIXRvdGFsVGltZSAmJiB0d2Vlbi5felRpbWUpIHtcbiAgICBpZiAoIXR3ZWVuLl9pbml0dGVkICYmIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cywgdFRpbWUpKSB7XG4gICAgICAvLyBpZiB3ZSByZW5kZXIgdGhlIHZlcnkgYmVnaW5uaW5nICh0aW1lID09IDApIG9mIGEgZnJvbVRvKCksIHdlIG11c3QgZm9yY2UgdGhlIHJlbmRlciAobm9ybWFsIHR3ZWVucyB3b3VsZG4ndCBuZWVkIHRvIHJlbmRlciBhdCBhIHRpbWUgb2YgMCB3aGVuIHRoZSBwcmV2VGltZSB3YXMgYWxzbyAwKS4gVGhpcyBpcyBhbHNvIG1hbmRhdG9yeSB0byBtYWtlIHN1cmUgb3ZlcndyaXRpbmcga2lja3MgaW4gaW1tZWRpYXRlbHkuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldkl0ZXJhdGlvbiA9IHR3ZWVuLl96VGltZTtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWUgfHwgKHN1cHByZXNzRXZlbnRzID8gX3RpbnlOdW0gOiAwKTsgLy8gd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICBzdXBwcmVzc0V2ZW50cyB8fCAoc3VwcHJlc3NFdmVudHMgPSB0b3RhbFRpbWUgJiYgIXByZXZJdGVyYXRpb24pOyAvLyBpZiBpdCB3YXMgcmVuZGVyZWQgcHJldmlvdXNseSBhdCBleGFjdGx5IDAgKF96VGltZSkgYW5kIG5vdyB0aGUgcGxheWhlYWQgaXMgbW92aW5nIGF3YXksIERPTidUIGZpcmUgY2FsbGJhY2tzIG90aGVyd2lzZSB0aGV5J2xsIHNlZW0gbGlrZSBkdXBsaWNhdGVzLlxuXG4gICAgdHdlZW4ucmF0aW8gPSByYXRpbztcbiAgICB0d2Vlbi5fZnJvbSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuICAgIHR3ZWVuLl90aW1lID0gMDtcbiAgICB0d2Vlbi5fdFRpbWUgPSB0VGltZTtcbiAgICBwdCA9IHR3ZWVuLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHRvdGFsVGltZSA8IDAgJiYgX3Jld2luZFN0YXJ0QXQodHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIHRydWUpO1xuICAgIHR3ZWVuLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uVXBkYXRlXCIpO1xuICAgIHRUaW1lICYmIHR3ZWVuLl9yZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHR3ZWVuLnBhcmVudCAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25SZXBlYXRcIik7XG5cbiAgICBpZiAoKHRvdGFsVGltZSA+PSB0d2Vlbi5fdER1ciB8fCB0b3RhbFRpbWUgPCAwKSAmJiB0d2Vlbi5yYXRpbyA9PT0gcmF0aW8pIHtcbiAgICAgIHJhdGlvICYmIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLCAxKTtcblxuICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhX3JldmVydGluZykge1xuICAgICAgICBfY2FsbGJhY2sodHdlZW4sIHJhdGlvID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgIHR3ZWVuLl9wcm9tICYmIHR3ZWVuLl9wcm9tKCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKCF0d2Vlbi5felRpbWUpIHtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWU7XG4gIH1cbn0sXG4gICAgX2ZpbmROZXh0UGF1c2VUd2VlbiA9IGZ1bmN0aW9uIF9maW5kTmV4dFBhdXNlVHdlZW4oYW5pbWF0aW9uLCBwcmV2VGltZSwgdGltZSkge1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHRpbWUgPiBwcmV2VGltZSkge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPD0gdGltZSkge1xuICAgICAgaWYgKGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA+IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2xhc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0ID49IHRpbWUpIHtcbiAgICAgIGlmIChjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPCBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX3ByZXY7XG4gICAgfVxuICB9XG59LFxuICAgIF9zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIF9zZXREdXJhdGlvbihhbmltYXRpb24sIGR1cmF0aW9uLCBza2lwVW5jYWNoZSwgbGVhdmVQbGF5aGVhZCkge1xuICB2YXIgcmVwZWF0ID0gYW5pbWF0aW9uLl9yZXBlYXQsXG4gICAgICBkdXIgPSBfcm91bmRQcmVjaXNlKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgJiYgKGFuaW1hdGlvbi5fdGltZSAqPSBkdXIgLyBhbmltYXRpb24uX2R1cik7XG4gIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmRQcmVjaXNlKGR1ciAqIChyZXBlYXQgKyAxKSArIGFuaW1hdGlvbi5fckRlbGF5ICogcmVwZWF0KTtcbiAgdG90YWxQcm9ncmVzcyA+IDAgJiYgIWxlYXZlUGxheWhlYWQgJiYgX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCBhbmltYXRpb24uX3RUaW1lID0gYW5pbWF0aW9uLl90RHVyICogdG90YWxQcm9ncmVzcyk7XG4gIGFuaW1hdGlvbi5wYXJlbnQgJiYgX3NldEVuZChhbmltYXRpb24pO1xuICBza2lwVW5jYWNoZSB8fCBfdW5jYWNoZShhbmltYXRpb24ucGFyZW50LCBhbmltYXRpb24pO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uID0gZnVuY3Rpb24gX29uVXBkYXRlVG90YWxEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbiBpbnN0YW5jZW9mIFRpbWVsaW5lID8gX3VuY2FjaGUoYW5pbWF0aW9uKSA6IF9zZXREdXJhdGlvbihhbmltYXRpb24sIGFuaW1hdGlvbi5fZHVyKTtcbn0sXG4gICAgX3plcm9Qb3NpdGlvbiA9IHtcbiAgX3N0YXJ0OiAwLFxuICBlbmRUaW1lOiBfZW1wdHlGdW5jLFxuICB0b3RhbER1cmF0aW9uOiBfZW1wdHlGdW5jXG59LFxuICAgIF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbiwgcGVyY2VudEFuaW1hdGlvbikge1xuICB2YXIgbGFiZWxzID0gYW5pbWF0aW9uLmxhYmVscyxcbiAgICAgIHJlY2VudCA9IGFuaW1hdGlvbi5fcmVjZW50IHx8IF96ZXJvUG9zaXRpb24sXG4gICAgICBjbGlwcGVkRHVyYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSA+PSBfYmlnTnVtID8gcmVjZW50LmVuZFRpbWUoZmFsc2UpIDogYW5pbWF0aW9uLl9kdXIsXG4gICAgICAvL2luIGNhc2UgdGhlcmUncyBhIGNoaWxkIHRoYXQgaW5maW5pdGVseSByZXBlYXRzLCB1c2VycyBhbG1vc3QgbmV2ZXIgaW50ZW5kIGZvciB0aGUgaW5zZXJ0aW9uIHBvaW50IG9mIGEgbmV3IGNoaWxkIHRvIGJlIGJhc2VkIG9uIGEgU1VQRVIgbG9uZyB2YWx1ZSBsaWtlIHRoYXQgc28gd2UgY2xpcCBpdCBhbmQgYXNzdW1lIHRoZSBtb3N0IHJlY2VudGx5LWFkZGVkIGNoaWxkJ3MgZW5kVGltZSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICBpLFxuICAgICAgb2Zmc2V0LFxuICAgICAgaXNQZXJjZW50O1xuXG4gIGlmIChfaXNTdHJpbmcocG9zaXRpb24pICYmIChpc05hTihwb3NpdGlvbikgfHwgcG9zaXRpb24gaW4gbGFiZWxzKSkge1xuICAgIC8vaWYgdGhlIHN0cmluZyBpcyBhIG51bWJlciBsaWtlIFwiMVwiLCBjaGVjayB0byBzZWUgaWYgdGhlcmUncyBhIGxhYmVsIHdpdGggdGhhdCBuYW1lLCBvdGhlcndpc2UgaW50ZXJwcmV0IGl0IGFzIGEgbnVtYmVyIChhYnNvbHV0ZSB2YWx1ZSkuXG4gICAgb2Zmc2V0ID0gcG9zaXRpb24uY2hhckF0KDApO1xuICAgIGlzUGVyY2VudCA9IHBvc2l0aW9uLnN1YnN0cigtMSkgPT09IFwiJVwiO1xuICAgIGkgPSBwb3NpdGlvbi5pbmRleE9mKFwiPVwiKTtcblxuICAgIGlmIChvZmZzZXQgPT09IFwiPFwiIHx8IG9mZnNldCA9PT0gXCI+XCIpIHtcbiAgICAgIGkgPj0gMCAmJiAocG9zaXRpb24gPSBwb3NpdGlvbi5yZXBsYWNlKC89LywgXCJcIikpO1xuICAgICAgcmV0dXJuIChvZmZzZXQgPT09IFwiPFwiID8gcmVjZW50Ll9zdGFydCA6IHJlY2VudC5lbmRUaW1lKHJlY2VudC5fcmVwZWF0ID49IDApKSArIChwYXJzZUZsb2F0KHBvc2l0aW9uLnN1YnN0cigxKSkgfHwgMCkgKiAoaXNQZXJjZW50ID8gKGkgPCAwID8gcmVjZW50IDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpIC8gMTAwIDogMSk7XG4gICAgfVxuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBwb3NpdGlvbiBpbiBsYWJlbHMgfHwgKGxhYmVsc1twb3NpdGlvbl0gPSBjbGlwcGVkRHVyYXRpb24pO1xuICAgICAgcmV0dXJuIGxhYmVsc1twb3NpdGlvbl07XG4gICAgfVxuXG4gICAgb2Zmc2V0ID0gcGFyc2VGbG9hdChwb3NpdGlvbi5jaGFyQXQoaSAtIDEpICsgcG9zaXRpb24uc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoaXNQZXJjZW50ICYmIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCAvIDEwMCAqIChfaXNBcnJheShwZXJjZW50QW5pbWF0aW9uKSA/IHBlcmNlbnRBbmltYXRpb25bMF0gOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGkgPiAxID8gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbi5zdWJzdHIoMCwgaSAtIDEpLCBwZXJjZW50QW5pbWF0aW9uKSArIG9mZnNldCA6IGNsaXBwZWREdXJhdGlvbiArIG9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbiA9PSBudWxsID8gY2xpcHBlZER1cmF0aW9uIDogK3Bvc2l0aW9uO1xufSxcbiAgICBfY3JlYXRlVHdlZW5UeXBlID0gZnVuY3Rpb24gX2NyZWF0ZVR3ZWVuVHlwZSh0eXBlLCBwYXJhbXMsIHRpbWVsaW5lKSB7XG4gIHZhciBpc0xlZ2FjeSA9IF9pc051bWJlcihwYXJhbXNbMV0pLFxuICAgICAgdmFyc0luZGV4ID0gKGlzTGVnYWN5ID8gMiA6IDEpICsgKHR5cGUgPCAyID8gMCA6IDEpLFxuICAgICAgdmFycyA9IHBhcmFtc1t2YXJzSW5kZXhdLFxuICAgICAgaXJWYXJzLFxuICAgICAgcGFyZW50O1xuXG4gIGlzTGVnYWN5ICYmICh2YXJzLmR1cmF0aW9uID0gcGFyYW1zWzFdKTtcbiAgdmFycy5wYXJlbnQgPSB0aW1lbGluZTtcblxuICBpZiAodHlwZSkge1xuICAgIGlyVmFycyA9IHZhcnM7XG4gICAgcGFyZW50ID0gdGltZWxpbmU7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmICEoXCJpbW1lZGlhdGVSZW5kZXJcIiBpbiBpclZhcnMpKSB7XG4gICAgICAvLyBpbmhlcml0YW5jZSBoYXNuJ3QgaGFwcGVuZWQgeWV0LCBidXQgc29tZW9uZSBtYXkgaGF2ZSBzZXQgYSBkZWZhdWx0IGluIGFuIGFuY2VzdG9yIHRpbWVsaW5lLiBXZSBjb3VsZCBkbyB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyKSBidXQgdGhhdCdkIGV4YWN0IGEgc2xpZ2h0IHBlcmZvcm1hbmNlIHBlbmFsdHkgYmVjYXVzZSBfaW5oZXJpdERlZmF1bHRzKCkgYWxzbyBydW5zIGluIHRoZSBUd2VlbiBjb25zdHJ1Y3Rvci4gV2UncmUgcGF5aW5nIGEgc21hbGwga2IgcHJpY2UgaGVyZSB0byBnYWluIHNwZWVkLlxuICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICBwYXJlbnQgPSBfaXNOb3RGYWxzZShwYXJlbnQudmFycy5pbmhlcml0KSAmJiBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgdHlwZSA8IDIgPyB2YXJzLnJ1bkJhY2t3YXJkcyA9IDEgOiB2YXJzLnN0YXJ0QXQgPSBwYXJhbXNbdmFyc0luZGV4IC0gMV07IC8vIFwiZnJvbVwiIHZhcnNcbiAgfVxuXG4gIHJldHVybiBuZXcgVHdlZW4ocGFyYW1zWzBdLCB2YXJzLCBwYXJhbXNbdmFyc0luZGV4ICsgMV0pO1xufSxcbiAgICBfY29uZGl0aW9uYWxSZXR1cm4gPSBmdW5jdGlvbiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmMpIHtcbiAgcmV0dXJuIHZhbHVlIHx8IHZhbHVlID09PSAwID8gZnVuYyh2YWx1ZSkgOiBmdW5jO1xufSxcbiAgICBfY2xhbXAgPSBmdW5jdGlvbiBfY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG59LFxuICAgIGdldFVuaXQgPSBmdW5jdGlvbiBnZXRVbml0KHZhbHVlLCB2KSB7XG4gIHJldHVybiAhX2lzU3RyaW5nKHZhbHVlKSB8fCAhKHYgPSBfdW5pdEV4cC5leGVjKHZhbHVlKSkgPyBcIlwiIDogdlsxXTtcbn0sXG4gICAgLy8gbm90ZTogcHJvdGVjdCBhZ2FpbnN0IHBhZGRlZCBudW1iZXJzIGFzIHN0cmluZ3MsIGxpa2UgXCIxMDAuMTAwXCIuIFRoYXQgc2hvdWxkbid0IHJldHVybiBcIjAwXCIgYXMgdGhlIHVuaXQuIElmIGl0J3MgbnVtZXJpYywgcmV0dXJuIG5vIHVuaXQuXG5jbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfY2xhbXAobWluLCBtYXgsIHYpO1xuICB9KTtcbn0sXG4gICAgX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICByZXR1cm4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlKSAmJiBcImxlbmd0aFwiIGluIHZhbHVlICYmICghbm9uRW1wdHkgJiYgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggLSAxIGluIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZVswXSkpICYmICF2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZSAhPT0gX3dpbjtcbn0sXG4gICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICBpZiAoYWNjdW11bGF0b3IgPT09IHZvaWQgMCkge1xuICAgIGFjY3VtdWxhdG9yID0gW107XG4gIH1cblxuICByZXR1cm4gYXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX2FjY3VtdWxhdG9yO1xuXG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gIH0pIHx8IGFjY3VtdWxhdG9yO1xufSxcbiAgICAvL3Rha2VzIGFueSB2YWx1ZSBhbmQgcmV0dXJucyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZyAoYW5kIGxlYXZlU3RyaW5ncyBpc24ndCB0cnVlKSwgaXQnbGwgdXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKSBhbmQgY29udmVydCB0aGF0IHRvIGFuIGFycmF5LiBJdCdsbCBhbHNvIGFjY2VwdCBpdGVyYWJsZXMgbGlrZSBqUXVlcnkgb2JqZWN0cy5cbnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlLCBzY29wZSwgbGVhdmVTdHJpbmdzKSB7XG4gIHJldHVybiBfY29udGV4dCAmJiAhc2NvcGUgJiYgX2NvbnRleHQuc2VsZWN0b3IgPyBfY29udGV4dC5zZWxlY3Rvcih2YWx1ZSkgOiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgJiYgKF9jb3JlSW5pdHRlZCB8fCAhX3dha2UoKSkgPyBfc2xpY2UuY2FsbCgoc2NvcGUgfHwgX2RvYykucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG59LFxuICAgIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3IodmFsdWUpIHtcbiAgdmFsdWUgPSB0b0FycmF5KHZhbHVlKVswXSB8fCBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBlbCA9IHZhbHVlLmN1cnJlbnQgfHwgdmFsdWUubmF0aXZlRWxlbWVudCB8fCB2YWx1ZTtcbiAgICByZXR1cm4gdG9BcnJheSh2LCBlbC5xdWVyeVNlbGVjdG9yQWxsID8gZWwgOiBlbCA9PT0gdmFsdWUgPyBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwgX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIDogdmFsdWUpO1xuICB9O1xufSxcbiAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0pO1xufSxcbiAgICAvLyBhbHRlcm5hdGl2ZSB0aGF0J3MgYSBiaXQgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGRpdmVyc2UgYnV0IGJpZ2dlcjogICBmb3IgKGxldCBqLCB2LCBpID0gYS5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgdiA9IGFbLS1pXSwgYVtpXSA9IGFbal0sIGFbal0gPSB2KTsgcmV0dXJuIGE7XG4vL2ZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBhcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYSBmdW5jdGlvbiB3aGljaCBjYW4gY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHtiYXNlLCBhbW91bnQsIGZyb20sIGVhc2UsIGdyaWQsIGF4aXMsIGxlbmd0aCwgZWFjaH0uIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBpbmRleCwgdGFyZ2V0LCBhcnJheS4gUmVjb2duaXplcyB0aGUgZm9sbG93aW5nXG5kaXN0cmlidXRlID0gZnVuY3Rpb24gZGlzdHJpYnV0ZSh2KSB7XG4gIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgIGVhY2g6IHZcbiAgfSxcbiAgICAgIC8vbjoxIGlzIGp1c3QgdG8gaW5kaWNhdGUgdiB3YXMgYSBudW1iZXI7IHdlIGxldmVyYWdlIHRoYXQgbGF0ZXIgdG8gc2V0IHYgYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggd2UgZ2V0LiBJZiBhIG51bWJlciBpcyBwYXNzZWQgaW4sIHdlIHRyZWF0IGl0IGxpa2UgdGhlIG9sZCBzdGFnZ2VyIHZhbHVlIHdoZXJlIDAuMSwgZm9yIGV4YW1wbGUsIHdvdWxkIG1lYW4gdGhhdCB0aGluZ3Mgd291bGQgYmUgZGlzdHJpYnV0ZWQgd2l0aCAwLjEgYmV0d2VlbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHJhdGhlciB0aGFuIGEgdG90YWwgXCJhbW91bnRcIiB0aGF0J3MgY2h1bmtlZCBvdXQgYW1vbmcgdGhlbSBhbGwuXG4gIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICBmcm9tID0gdmFycy5mcm9tIHx8IDAsXG4gICAgICBiYXNlID0gcGFyc2VGbG9hdCh2YXJzLmJhc2UpIHx8IDAsXG4gICAgICBjYWNoZSA9IHt9LFxuICAgICAgaXNEZWNpbWFsID0gZnJvbSA+IDAgJiYgZnJvbSA8IDEsXG4gICAgICByYXRpb3MgPSBpc05hTihmcm9tKSB8fCBpc0RlY2ltYWwsXG4gICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgcmF0aW9YID0gZnJvbSxcbiAgICAgIHJhdGlvWSA9IGZyb207XG5cbiAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgIHJhdGlvWCA9IHJhdGlvWSA9IHtcbiAgICAgIGNlbnRlcjogLjUsXG4gICAgICBlZGdlczogLjUsXG4gICAgICBlbmQ6IDFcbiAgICB9W2Zyb21dIHx8IDA7XG4gIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICByYXRpb1ggPSBmcm9tWzBdO1xuICAgIHJhdGlvWSA9IGZyb21bMV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGksIHRhcmdldCwgYSkge1xuICAgIHZhciBsID0gKGEgfHwgdmFycykubGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgZCxcbiAgICAgICAgaixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHdyYXBBdDtcblxuICAgIGlmICghZGlzdGFuY2VzKSB7XG4gICAgICB3cmFwQXQgPSB2YXJzLmdyaWQgPT09IFwiYXV0b1wiID8gMCA6ICh2YXJzLmdyaWQgfHwgWzEsIF9iaWdOdW1dKVsxXTtcblxuICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgbWF4ID0gLV9iaWdOdW07XG5cbiAgICAgICAgd2hpbGUgKG1heCA8IChtYXggPSBhW3dyYXBBdCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAmJiB3cmFwQXQgPCBsKSB7fVxuXG4gICAgICAgIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gd3JhcEF0ID09PSBfYmlnTnVtID8gMCA6IHJhdGlvcyA/IGwgKiByYXRpb1kgLyB3cmFwQXQgLSAuNSA6IGZyb20gLyB3cmFwQXQgfCAwO1xuICAgICAgbWF4ID0gMDtcbiAgICAgIG1pbiA9IF9iaWdOdW07XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICB5ID0gb3JpZ2luWSAtIChqIC8gd3JhcEF0IHwgMCk7XG4gICAgICAgIGRpc3RhbmNlc1tqXSA9IGQgPSAhYXhpcyA/IF9zcXJ0KHggKiB4ICsgeSAqIHkpIDogTWF0aC5hYnMoYXhpcyA9PT0gXCJ5XCIgPyB5IDogeCk7XG4gICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICBkIDwgbWluICYmIChtaW4gPSBkKTtcbiAgICAgIH1cblxuICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICBkaXN0YW5jZXMubWF4ID0gbWF4IC0gbWluO1xuICAgICAgZGlzdGFuY2VzLm1pbiA9IG1pbjtcbiAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgZGlzdGFuY2VzLmIgPSBsIDwgMCA/IGJhc2UgLSBsIDogYmFzZTtcbiAgICAgIGRpc3RhbmNlcy51ID0gZ2V0VW5pdCh2YXJzLmFtb3VudCB8fCB2YXJzLmVhY2gpIHx8IDA7IC8vdW5pdFxuXG4gICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICB9XG5cbiAgICBsID0gKGRpc3RhbmNlc1tpXSAtIGRpc3RhbmNlcy5taW4pIC8gZGlzdGFuY2VzLm1heCB8fCAwO1xuICAgIHJldHVybiBfcm91bmRQcmVjaXNlKGRpc3RhbmNlcy5iICsgKGVhc2UgPyBlYXNlKGwpIDogbCkgKiBkaXN0YW5jZXMudikgKyBkaXN0YW5jZXMudTsgLy9yb3VuZCBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgfTtcbn0sXG4gICAgX3JvdW5kTW9kaWZpZXIgPSBmdW5jdGlvbiBfcm91bmRNb2RpZmllcih2KSB7XG4gIC8vcGFzcyBpbiAwLjEgZ2V0IGEgZnVuY3Rpb24gdGhhdCdsbCByb3VuZCB0byB0aGUgbmVhcmVzdCB0ZW50aCwgb3IgNSB0byByb3VuZCB0byB0aGUgY2xvc2VzdCA1LCBvciAwLjAwMSB0byB0aGUgY2xvc2VzdCAxMDAwdGgsIGV0Yy5cbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgKCh2ICsgXCJcIikuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aCk7IC8vdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGxpa2UgMjQgKiAwLjEgPT0gMi40MDAwMDAwMDAwMDAwMDA0KSwgd2UgY2hvcCBvZmYgYXQgYSBzcGVjaWZpYyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKG11Y2ggZmFzdGVyIHRoYW4gdG9GaXhlZCgpKVxuXG4gIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIG4gPSBfcm91bmRQcmVjaXNlKE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcCk7XG5cbiAgICByZXR1cm4gKG4gLSBuICUgMSkgLyBwICsgKF9pc051bWJlcihyYXcpID8gMCA6IGdldFVuaXQocmF3KSk7IC8vIG4gLSBuICUgMSByZXBsYWNlcyBNYXRoLmZsb29yKCkgaW4gb3JkZXIgdG8gaGFuZGxlIG5lZ2F0aXZlIHZhbHVlcyBwcm9wZXJseS4gRm9yIGV4YW1wbGUsIE1hdGguZmxvb3IoLTE1MC4wMDAwMDAwMDAwMDAwMykgaXMgMTUxIVxuICB9O1xufSxcbiAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGlzMkQ7XG5cbiAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgcmFkaXVzID0gaXNBcnJheSA9IHNuYXBUby5yYWRpdXMgfHwgX2JpZ051bTtcblxuICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICBpZiAoaXMyRCA9ICFfaXNOdW1iZXIoc25hcFRvWzBdKSkge1xuICAgICAgICByYWRpdXMgKj0gcmFkaXVzOyAvL3BlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB3ZSBkb24ndCBoYXZlIHRvIE1hdGguc3FydCgpIGluIHRoZSBsb29wLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICByZXR1cm4gTWF0aC5hYnMoaXMyRCAtIHJhdykgPD0gcmFkaXVzID8gaXMyRCA6IHJhdztcbiAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy55IDogMCksXG4gICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICBpID0gc25hcFRvLmxlbmd0aCxcbiAgICAgICAgZHgsXG4gICAgICAgIGR5O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgIGR5ID0gc25hcFRvW2ldLnkgLSB5O1xuICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSBNYXRoLmFicyhzbmFwVG9baV0gLSB4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgIG1pbiA9IGR4O1xuICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICB9KTtcbn0sXG4gICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihfaXNBcnJheShtaW4pID8gIW1heCA6IHJvdW5kaW5nSW5jcmVtZW50ID09PSB0cnVlID8gISEocm91bmRpbmdJbmNyZW1lbnQgPSAwKSA6ICFyZXR1cm5GdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiAtIHJvdW5kaW5nSW5jcmVtZW50IC8gMiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgcm91bmRpbmdJbmNyZW1lbnQgKiAuOTkpKSAvIHJvdW5kaW5nSW5jcmVtZW50KSAqIHJvdW5kaW5nSW5jcmVtZW50ICogcmV0dXJuRnVuY3Rpb24pIC8gcmV0dXJuRnVuY3Rpb247XG4gIH0pO1xufSxcbiAgICBwaXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyc2VGbG9hdCh2YWx1ZSkpICsgKHVuaXQgfHwgZ2V0VW5pdCh2YWx1ZSkpO1xuICB9O1xufSxcbiAgICBub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xufSxcbiAgICBfd3JhcEFycmF5ID0gZnVuY3Rpb24gX3dyYXBBcnJheShhLCB3cmFwcGVyLCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gYVt+fndyYXBwZXIoaW5kZXgpXTtcbiAgfSk7XG59LFxuICAgIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAvLyBOT1RFOiB3cmFwKCkgQ0FOTk9UIGJlIGFuIGFycm93IGZ1bmN0aW9uISBBIHZlcnkgb2RkIGNvbXBpbGluZyBidWcgY2F1c2VzIHByb2JsZW1zICh1bnJlbGF0ZWQgdG8gR1NBUCkuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcCgwLCBtaW4ubGVuZ3RoKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgfSk7XG59LFxuICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbixcbiAgICAgIHRvdGFsID0gcmFuZ2UgKiAyO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gKHRvdGFsICsgKHZhbHVlIC0gbWluKSAlIHRvdGFsKSAlIHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIG1pbiArICh2YWx1ZSA+IHJhbmdlID8gdG90YWwgLSB2YWx1ZSA6IHZhbHVlKTtcbiAgfSk7XG59LFxuICAgIF9yZXBsYWNlUmFuZG9tID0gZnVuY3Rpb24gX3JlcGxhY2VSYW5kb20odmFsdWUpIHtcbiAgLy9yZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgcmFuZG9tKC4uLikgaW4gYSBzdHJpbmcgd2l0aCB0aGUgY2FsY3VsYXRlZCByYW5kb20gdmFsdWUuIGNhbiBiZSBhIHJhbmdlIGxpa2UgcmFuZG9tKC0xMDAsIDEwMCwgNSkgb3IgYW4gYXJyYXkgbGlrZSByYW5kb20oWzAsIDEwMCwgNTAwXSlcbiAgdmFyIHByZXYgPSAwLFxuICAgICAgcyA9IFwiXCIsXG4gICAgICBpLFxuICAgICAgbnVtcyxcbiAgICAgIGVuZCxcbiAgICAgIGlzQXJyYXk7XG5cbiAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgIGVuZCA9IHZhbHVlLmluZGV4T2YoXCIpXCIsIGkpO1xuICAgIGlzQXJyYXkgPSB2YWx1ZS5jaGFyQXQoaSArIDcpID09PSBcIltcIjtcbiAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgIHMgKz0gdmFsdWUuc3Vic3RyKHByZXYsIGkgLSBwcmV2KSArIHJhbmRvbShpc0FycmF5ID8gbnVtcyA6ICtudW1zWzBdLCBpc0FycmF5ID8gMCA6ICtudW1zWzFdLCArbnVtc1syXSB8fCAxZS01KTtcbiAgICBwcmV2ID0gZW5kICsgMTtcbiAgfVxuXG4gIHJldHVybiBzICsgdmFsdWUuc3Vic3RyKHByZXYsIHZhbHVlLmxlbmd0aCAtIHByZXYpO1xufSxcbiAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gIHZhciBpblJhbmdlID0gaW5NYXggLSBpbk1pbixcbiAgICAgIG91dFJhbmdlID0gb3V0TWF4IC0gb3V0TWluO1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gb3V0TWluICsgKCh2YWx1ZSAtIGluTWluKSAvIGluUmFuZ2UgKiBvdXRSYW5nZSB8fCAwKTtcbiAgfSk7XG59LFxuICAgIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MsIG11dGF0ZSkge1xuICB2YXIgZnVuYyA9IGlzTmFOKHN0YXJ0ICsgZW5kKSA/IDAgOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICB9O1xuXG4gIGlmICghZnVuYykge1xuICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgIG1hc3RlciA9IHt9LFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBpbnRlcnBvbGF0b3JzLFxuICAgICAgICBsLFxuICAgICAgICBpbDtcblxuICAgIHByb2dyZXNzID09PSB0cnVlICYmIChtdXRhdGUgPSAxKSAmJiAocHJvZ3Jlc3MgPSBudWxsKTtcblxuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgc3RhcnQgPSB7XG4gICAgICAgIHA6IHN0YXJ0XG4gICAgICB9O1xuICAgICAgZW5kID0ge1xuICAgICAgICBwOiBlbmRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgIGludGVycG9sYXRvcnMgPSBbXTtcbiAgICAgIGwgPSBzdGFydC5sZW5ndGg7XG4gICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludGVycG9sYXRvcnMucHVzaChpbnRlcnBvbGF0ZShzdGFydFtpIC0gMV0sIHN0YXJ0W2ldKSk7IC8vYnVpbGQgdGhlIGludGVycG9sYXRvcnMgdXAgZnJvbnQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gdGhhdCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgbWFueSB0aW1lcywgaXQgY2FuIGp1c3QgcmV1c2UgdGhlbS5cbiAgICAgIH1cblxuICAgICAgbC0tO1xuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHAgKj0gbDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcnNbaV0ocCAtIGkpO1xuICAgICAgfTtcblxuICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgfSBlbHNlIGlmICghbXV0YXRlKSB7XG4gICAgICBzdGFydCA9IF9tZXJnZShfaXNBcnJheShzdGFydCkgPyBbXSA6IHt9LCBzdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnRlcnBvbGF0b3JzKSB7XG4gICAgICBmb3IgKHAgaW4gZW5kKSB7XG4gICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4ocHJvZ3Jlc3MsIGZ1bmMpO1xufSxcbiAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgLy91c2VkIGZvciBuZXh0TGFiZWwoKSBhbmQgcHJldmlvdXNMYWJlbCgpXG4gIHZhciBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgcCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgbGFiZWw7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGRpc3RhbmNlID0gbGFiZWxzW3BdIC0gZnJvbVRpbWU7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgIGxhYmVsID0gcDtcbiAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKGFuaW1hdGlvbiwgdHlwZSwgZXhlY3V0ZUxhenlGaXJzdCkge1xuICB2YXIgdiA9IGFuaW1hdGlvbi52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgcHJldkNvbnRleHQgPSBfY29udGV4dCxcbiAgICAgIGNvbnRleHQgPSBhbmltYXRpb24uX2N0eCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNjb3BlLFxuICAgICAgcmVzdWx0O1xuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXTtcbiAgc2NvcGUgPSB2LmNhbGxiYWNrU2NvcGUgfHwgYW5pbWF0aW9uO1xuICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblxuICBjb250ZXh0ICYmIChfY29udGV4dCA9IGNvbnRleHQpO1xuICByZXN1bHQgPSBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICBfY29udGV4dCA9IHByZXZDb250ZXh0O1xuICByZXR1cm4gcmVzdWx0O1xufSxcbiAgICBfaW50ZXJydXB0ID0gZnVuY3Rpb24gX2ludGVycnVwdChhbmltYXRpb24pIHtcbiAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciAmJiBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5raWxsKCEhX3JldmVydGluZyk7XG4gIGFuaW1hdGlvbi5wcm9ncmVzcygpIDwgMSAmJiBfY2FsbGJhY2soYW5pbWF0aW9uLCBcIm9uSW50ZXJydXB0XCIpO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcXVpY2tUd2VlbixcbiAgICBfcmVnaXN0ZXJQbHVnaW5RdWV1ZSA9IFtdLFxuICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICBpZiAoX3dpbmRvd0V4aXN0cygpICYmIGNvbmZpZykge1xuICAgIC8vIGVkZ2UgY2FzZTogc29tZSBidWlsZCB0b29scyBtYXkgcGFzcyBpbiBhIG51bGwvdW5kZWZpbmVkIHZhbHVlXG4gICAgY29uZmlnID0gIWNvbmZpZy5uYW1lICYmIGNvbmZpZ1tcImRlZmF1bHRcIl0gfHwgY29uZmlnOyAvL1VNRCBwYWNrYWdpbmcgd3JhcHMgdGhpbmdzIG9kZGx5LCBzbyBmb3IgZXhhbXBsZSBNb3Rpb25QYXRoSGVscGVyIGJlY29tZXMge01vdGlvblBhdGhIZWxwZXI6TW90aW9uUGF0aEhlbHBlciwgZGVmYXVsdDpNb3Rpb25QYXRoSGVscGVyfS5cblxuICAgIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICAgIGlzRnVuYyA9IF9pc0Z1bmN0aW9uKGNvbmZpZyksXG4gICAgICAgIFBsdWdpbiA9IG5hbWUgJiYgIWlzRnVuYyAmJiBjb25maWcuaW5pdCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3Byb3BzID0gW107XG4gICAgfSA6IGNvbmZpZyxcbiAgICAgICAgLy9pbiBjYXNlIHNvbWVvbmUgcGFzc2VzIGluIGFuIG9iamVjdCB0aGF0J3Mgbm90IGEgcGx1Z2luLCBsaWtlIEN1c3RvbUVhc2VcbiAgICBpbnN0YW5jZURlZmF1bHRzID0ge1xuICAgICAgaW5pdDogX2VtcHR5RnVuYyxcbiAgICAgIHJlbmRlcjogX3JlbmRlclByb3BUd2VlbnMsXG4gICAgICBhZGQ6IF9hZGRQcm9wVHdlZW4sXG4gICAgICBraWxsOiBfa2lsbFByb3BUd2VlbnNPZixcbiAgICAgIG1vZGlmaWVyOiBfYWRkUGx1Z2luTW9kaWZpZXIsXG4gICAgICByYXdWYXJzOiAwXG4gICAgfSxcbiAgICAgICAgc3RhdGljcyA9IHtcbiAgICAgIHRhcmdldFRlc3Q6IDAsXG4gICAgICBnZXQ6IDAsXG4gICAgICBnZXRTZXR0ZXI6IF9nZXRTZXR0ZXIsXG4gICAgICBhbGlhc2VzOiB7fSxcbiAgICAgIHJlZ2lzdGVyOiAwXG4gICAgfTtcblxuICAgIF93YWtlKCk7XG5cbiAgICBpZiAoY29uZmlnICE9PSBQbHVnaW4pIHtcbiAgICAgIGlmIChfcGx1Z2luc1tuYW1lXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF9zZXREZWZhdWx0cyhQbHVnaW4sIF9zZXREZWZhdWx0cyhfY29weUV4Y2x1ZGluZyhjb25maWcsIGluc3RhbmNlRGVmYXVsdHMpLCBzdGF0aWNzKSk7IC8vc3RhdGljIG1ldGhvZHNcblxuXG4gICAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTsgLy9pbnN0YW5jZSBtZXRob2RzXG5cblxuICAgICAgX3BsdWdpbnNbUGx1Z2luLnByb3AgPSBuYW1lXSA9IFBsdWdpbjtcblxuICAgICAgaWYgKGNvbmZpZy50YXJnZXRUZXN0KSB7XG4gICAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgICAgX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICAgICAgfVxuXG4gICAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7IC8vZm9yIHRoZSBnbG9iYWwgbmFtZS4gXCJtb3Rpb25QYXRoXCIgc2hvdWxkIGJlY29tZSBNb3Rpb25QYXRoUGx1Z2luXG4gICAgfVxuXG4gICAgX2FkZEdsb2JhbChuYW1lLCBQbHVnaW4pO1xuXG4gICAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnICYmIF9yZWdpc3RlclBsdWdpblF1ZXVlLnB1c2goY29uZmlnKTtcbiAgfVxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDT0xPUlNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl8yNTUgPSAyNTUsXG4gICAgX2NvbG9yTG9va3VwID0ge1xuICBhcXVhOiBbMCwgXzI1NSwgXzI1NV0sXG4gIGxpbWU6IFswLCBfMjU1LCAwXSxcbiAgc2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG4gIGJsYWNrOiBbMCwgMCwgMF0sXG4gIG1hcm9vbjogWzEyOCwgMCwgMF0sXG4gIHRlYWw6IFswLCAxMjgsIDEyOF0sXG4gIGJsdWU6IFswLCAwLCBfMjU1XSxcbiAgbmF2eTogWzAsIDAsIDEyOF0sXG4gIHdoaXRlOiBbXzI1NSwgXzI1NSwgXzI1NV0sXG4gIG9saXZlOiBbMTI4LCAxMjgsIDBdLFxuICB5ZWxsb3c6IFtfMjU1LCBfMjU1LCAwXSxcbiAgb3JhbmdlOiBbXzI1NSwgMTY1LCAwXSxcbiAgZ3JheTogWzEyOCwgMTI4LCAxMjhdLFxuICBwdXJwbGU6IFsxMjgsIDAsIDEyOF0sXG4gIGdyZWVuOiBbMCwgMTI4LCAwXSxcbiAgcmVkOiBbXzI1NSwgMCwgMF0sXG4gIHBpbms6IFtfMjU1LCAxOTIsIDIwM10sXG4gIGN5YW46IFswLCBfMjU1LCBfMjU1XSxcbiAgdHJhbnNwYXJlbnQ6IFtfMjU1LCBfMjU1LCBfMjU1LCAwXVxufSxcbiAgICAvLyBwb3NzaWJsZSBmdXR1cmUgaWRlYSB0byByZXBsYWNlIHRoZSBoYXJkLWNvZGVkIGNvbG9yIG5hbWUgdmFsdWVzIC0gcHV0IHRoaXMgaW4gdGhlIHRpY2tlci53YWtlKCkgd2hlcmUgd2Ugc2V0IHRoZSBfZG9jOlxuLy8gbGV0IGN0eCA9IF9kb2MuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBfZm9yRWFjaE5hbWUoXCJhcXVhLGxpbWUsc2lsdmVyLGJsYWNrLG1hcm9vbix0ZWFsLGJsdWUsbmF2eSx3aGl0ZSxvbGl2ZSx5ZWxsb3csb3JhbmdlLGdyYXkscHVycGxlLGdyZWVuLHJlZCxwaW5rLGN5YW5cIiwgY29sb3IgPT4ge2N0eC5maWxsU3R5bGUgPSBjb2xvcjsgX2NvbG9yTG9va3VwW2NvbG9yXSA9IHNwbGl0Q29sb3IoY3R4LmZpbGxTdHlsZSl9KTtcbl9odWUgPSBmdW5jdGlvbiBfaHVlKGgsIG0xLCBtMikge1xuICBoICs9IGggPCAwID8gMSA6IGggPiAxID8gLTEgOiAwO1xuICByZXR1cm4gKGggKiA2IDwgMSA/IG0xICsgKG0yIC0gbTEpICogaCAqIDYgOiBoIDwgLjUgPyBtMiA6IGggKiAzIDwgMiA/IG0xICsgKG0yIC0gbTEpICogKDIgLyAzIC0gaCkgKiA2IDogbTEpICogXzI1NSArIC41IHwgMDtcbn0sXG4gICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgdmFyIGEgPSAhdiA/IF9jb2xvckxvb2t1cC5ibGFjayA6IF9pc051bWJlcih2KSA/IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV0gOiAwLFxuICAgICAgcixcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgaCxcbiAgICAgIHMsXG4gICAgICBsLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgZCxcbiAgICAgIHdhc0hTTDtcblxuICBpZiAoIWEpIHtcbiAgICBpZiAodi5zdWJzdHIoLTEpID09PSBcIixcIikge1xuICAgICAgLy9zb21ldGltZXMgYSB0cmFpbGluZyBjb21tYSBpcyBpbmNsdWRlZCBhbmQgd2Ugc2hvdWxkIGNob3AgaXQgb2ZmICh0eXBpY2FsbHkgZnJvbSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcyBsaWtlIGEgdGV4dFNoYWRvdzpcIjJweCAycHggMnB4IGJsdWUsIDVweCA1cHggNXB4IHJnYigyNTUsMCwwKVwiIC0gaW4gdGhpcyBleGFtcGxlIFwiYmx1ZSxcIiBoYXMgYSB0cmFpbGluZyBjb21tYS4gV2UgY291bGQgc3RyaXAgaXQgb3V0IGluc2lkZSBwYXJzZUNvbXBsZXgoKSBidXQgd2UnZCBuZWVkIHRvIGRvIGl0IHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgcGx1cyBpdCB3b3VsZG4ndCBwcm92aWRlIHByb3RlY3Rpb24gZnJvbSBvdGhlciBwb3RlbnRpYWwgc2NlbmFyaW9zIGxpa2UgaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgc2ltaWxhciB2YWx1ZS5cbiAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlmIChfY29sb3JMb29rdXBbdl0pIHtcbiAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgfSBlbHNlIGlmICh2LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIGlmICh2Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgLy9mb3Igc2hvcnRoYW5kIGxpa2UgIzlGMCBvciAjOUYwRiAoY291bGQgaGF2ZSBhbHBoYSlcbiAgICAgICAgciA9IHYuY2hhckF0KDEpO1xuICAgICAgICBnID0gdi5jaGFyQXQoMik7XG4gICAgICAgIGIgPSB2LmNoYXJBdCgzKTtcbiAgICAgICAgdiA9IFwiI1wiICsgciArIHIgKyBnICsgZyArIGIgKyBiICsgKHYubGVuZ3RoID09PSA1ID8gdi5jaGFyQXQoNCkgKyB2LmNoYXJBdCg0KSA6IFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodi5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgLy8gaGV4IHdpdGggYWxwaGEsIGxpa2UgI2ZkNWU1M2ZmXG4gICAgICAgIGEgPSBwYXJzZUludCh2LnN1YnN0cigxLCA2KSwgMTYpO1xuICAgICAgICByZXR1cm4gW2EgPj4gMTYsIGEgPj4gOCAmIF8yNTUsIGEgJiBfMjU1LCBwYXJzZUludCh2LnN1YnN0cig3KSwgMTYpIC8gMjU1XTtcbiAgICAgIH1cblxuICAgICAgdiA9IHBhcnNlSW50KHYuc3Vic3RyKDEpLCAxNik7XG4gICAgICBhID0gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XTtcbiAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICBhID0gd2FzSFNMID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKTtcblxuICAgICAgaWYgKCF0b0hTTCkge1xuICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgIHMgPSArYVsxXSAvIDEwMDtcbiAgICAgICAgbCA9ICthWzJdIC8gMTAwO1xuICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgciA9IGwgKiAyIC0gZztcbiAgICAgICAgYS5sZW5ndGggPiAzICYmIChhWzNdICo9IDEpOyAvL2Nhc3QgYXMgbnVtYmVyXG5cbiAgICAgICAgYVswXSA9IF9odWUoaCArIDEgLyAzLCByLCBnKTtcbiAgICAgICAgYVsxXSA9IF9odWUoaCwgciwgZyk7XG4gICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICB9IGVsc2UgaWYgKH52LmluZGV4T2YoXCI9XCIpKSB7XG4gICAgICAgIC8vaWYgcmVsYXRpdmUgdmFsdWVzIGFyZSBmb3VuZCwganVzdCByZXR1cm4gdGhlIHJhdyBzdHJpbmdzIHdpdGggdGhlIHJlbGF0aXZlIHByZWZpeGVzIGluIHBsYWNlLlxuICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApIHx8IF9jb2xvckxvb2t1cC50cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBhID0gYS5tYXAoTnVtYmVyKTtcbiAgfVxuXG4gIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgciA9IGFbMF0gLyBfMjU1O1xuICAgIGcgPSBhWzFdIC8gXzI1NTtcbiAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0gbWF4IC0gbWluO1xuICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgaCAqPSA2MDtcbiAgICB9XG5cbiAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICBhWzFdID0gfn4ocyAqIDEwMCArIC41KTtcbiAgICBhWzJdID0gfn4obCAqIDEwMCArIC41KTtcbiAgfVxuXG4gIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gIHJldHVybiBhO1xufSxcbiAgICBfY29sb3JPcmRlckRhdGEgPSBmdW5jdGlvbiBfY29sb3JPcmRlckRhdGEodikge1xuICAvLyBzdHJpcHMgb3V0IHRoZSBjb2xvcnMgZnJvbSB0aGUgc3RyaW5nLCBmaW5kcyBhbGwgdGhlIG51bWVyaWMgc2xvdHMgKHdpdGggdW5pdHMpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlLiBUaGUgQXJyYXkgYWxzbyBoYXMgYSBcImNcIiBwcm9wZXJ0eSB3aGljaCBpcyBhbiBBcnJheSBvZiB0aGUgaW5kZXggdmFsdWVzIHdoZXJlIHRoZSBjb2xvcnMgYmVsb25nLiBUaGlzIGlzIHRvIGhlbHAgd29yayBhcm91bmQgaXNzdWVzIHdoZXJlIHRoZXJlJ3MgYSBtaXMtbWF0Y2hlZCBvcmRlciBvZiBjb2xvci9udW1lcmljIGRhdGEgbGlrZSBkcm9wLXNoYWRvdygjZjAwIDBweCAxcHggMnB4KSBhbmQgZHJvcC1zaGFkb3coMHggMXB4IDJweCAjZjAwKS4gVGhpcyBpcyBiYXNpY2FsbHkgYSBoZWxwZXIgZnVuY3Rpb24gdXNlZCBpbiBfZm9ybWF0Q29sb3JzKClcbiAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgYyA9IFtdLFxuICAgICAgaSA9IC0xO1xuICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIHZhciBhID0gdi5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgYSk7XG4gICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgfSk7XG4gIHZhbHVlcy5jID0gYztcbiAgcmV0dXJuIHZhbHVlcztcbn0sXG4gICAgX2Zvcm1hdENvbG9ycyA9IGZ1bmN0aW9uIF9mb3JtYXRDb2xvcnMocywgdG9IU0wsIG9yZGVyTWF0Y2hEYXRhKSB7XG4gIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgY29sb3JzID0gKHMgKyByZXN1bHQpLm1hdGNoKF9jb2xvckV4cCksXG4gICAgICB0eXBlID0gdG9IU0wgPyBcImhzbGEoXCIgOiBcInJnYmEoXCIsXG4gICAgICBpID0gMCxcbiAgICAgIGMsXG4gICAgICBzaGVsbCxcbiAgICAgIGQsXG4gICAgICBsO1xuXG4gIGlmICghY29sb3JzKSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gIH0pO1xuXG4gIGlmIChvcmRlck1hdGNoRGF0YSkge1xuICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgYyA9IG9yZGVyTWF0Y2hEYXRhLmM7XG5cbiAgICBpZiAoYy5qb2luKHJlc3VsdCkgIT09IGQuYy5qb2luKHJlc3VsdCkpIHtcbiAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaGVsbCkge1xuICAgIHNoZWxsID0gcy5zcGxpdChfY29sb3JFeHApO1xuICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArIGNvbG9yc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICsgc2hlbGxbbF07XG59LFxuICAgIF9jb2xvckV4cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHMgPSBcIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17Myw0fSl7MSwyfVxcXFxiXCIsXG4gICAgICAvL3dlJ2xsIGR5bmFtaWNhbGx5IGJ1aWxkIHRoaXMgUmVndWxhciBFeHByZXNzaW9uIHRvIGNvbnNlcnZlIGZpbGUgc2l6ZS4gQWZ0ZXIgYnVpbGRpbmcgaXQsIGl0IHdpbGwgYmUgYWJsZSB0byBmaW5kIHJnYigpLCByZ2JhKCksICMgKGhleGFkZWNpbWFsKSwgYW5kIG5hbWVkIGNvbG9yIHZhbHVlcyBsaWtlIHJlZCwgYmx1ZSwgcHVycGxlLCBldGMuLFxuICBwO1xuXG4gIGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcbiAgICBzICs9IFwifFwiICsgcCArIFwiXFxcXGJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHMgKyBcIilcIiwgXCJnaVwiKTtcbn0oKSxcbiAgICBfaHNsRXhwID0gL2hzbFthXT9cXCgvLFxuICAgIF9jb2xvclN0cmluZ0ZpbHRlciA9IGZ1bmN0aW9uIF9jb2xvclN0cmluZ0ZpbHRlcihhKSB7XG4gIHZhciBjb21iaW5lZCA9IGEuam9pbihcIiBcIiksXG4gICAgICB0b0hTTDtcbiAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgaWYgKF9jb2xvckV4cC50ZXN0KGNvbWJpbmVkKSkge1xuICAgIHRvSFNMID0gX2hzbEV4cC50ZXN0KGNvbWJpbmVkKTtcbiAgICBhWzFdID0gX2Zvcm1hdENvbG9ycyhhWzFdLCB0b0hTTCk7XG4gICAgYVswXSA9IF9mb3JtYXRDb2xvcnMoYVswXSwgdG9IU0wsIF9jb2xvck9yZGVyRGF0YShhWzFdKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3JkZXIgb2YgbnVtYmVycy9jb2xvcnMgbWF0Y2ggd2l0aCB0aGUgRU5EIHZhbHVlLlxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElDS0VSXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fdGlja2VyQWN0aXZlLFxuICAgIF90aWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgICAgX2xhZ1RocmVzaG9sZCA9IDUwMCxcbiAgICAgIF9hZGp1c3RlZExhZyA9IDMzLFxuICAgICAgX3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBfbGFzdFVwZGF0ZSA9IF9zdGFydFRpbWUsXG4gICAgICBfZ2FwID0gMTAwMCAvIDI0MCxcbiAgICAgIF9uZXh0VGltZSA9IF9nYXAsXG4gICAgICBfbGlzdGVuZXJzID0gW10sXG4gICAgICBfaWQsXG4gICAgICBfcmVxLFxuICAgICAgX3JhZixcbiAgICAgIF9zZWxmLFxuICAgICAgX2RlbHRhLFxuICAgICAgX2ksXG4gICAgICBfdGljayA9IGZ1bmN0aW9uIF90aWNrKHYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcbiAgICAgICAgbWFudWFsID0gdiA9PT0gdHJ1ZSxcbiAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGZyYW1lO1xuXG4gICAgZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgX2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcbiAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgaWYgKG92ZXJsYXAgPiAwIHx8IG1hbnVhbCkge1xuICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgX3NlbGYudGltZSA9IHRpbWUgPSB0aW1lIC8gMTAwMDtcbiAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICBkaXNwYXRjaCA9IDE7XG4gICAgfVxuXG4gICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IF9saXN0ZW5lcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vIHVzZSBfaSBhbmQgY2hlY2sgX2xpc3RlbmVycy5sZW5ndGggaW5zdGVhZCBvZiBhIHZhcmlhYmxlIGJlY2F1c2UgYSBsaXN0ZW5lciBjb3VsZCBnZXQgcmVtb3ZlZCBkdXJpbmcgdGhlIGxvb3AsIGFuZCBpZiB0aGF0IGhhcHBlbnMgdG8gYW4gZWxlbWVudCBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXgsIGl0J2QgdGhyb3cgdGhpbmdzIG9mZiBpbiB0aGUgbG9vcC5cbiAgICAgICAgX2xpc3RlbmVyc1tfaV0odGltZSwgX2RlbHRhLCBmcmFtZSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9zZWxmID0ge1xuICAgIHRpbWU6IDAsXG4gICAgZnJhbWU6IDAsXG4gICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIF90aWNrKHRydWUpO1xuICAgIH0sXG4gICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICB9LFxuICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICBpZiAoIV9jb3JlSW5pdHRlZCAmJiBfd2luZG93RXhpc3RzKCkpIHtcbiAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgIF9nbG9iYWxzLmdzYXAgPSBnc2FwO1xuICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICBfcmFmID0gX3dpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgICAgICAgICBfcmVnaXN0ZXJQbHVnaW5RdWV1ZS5mb3JFYWNoKF9jcmVhdGVQbHVnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgX2lkICYmIF9zZWxmLnNsZWVwKCk7XG5cbiAgICAgICAgX3JlcSA9IF9yYWYgfHwgZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmLCBfbmV4dFRpbWUgLSBfc2VsZi50aW1lICogMTAwMCArIDEgfCAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGlja2VyQWN0aXZlID0gMTtcblxuICAgICAgICBfdGljaygyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsZWVwOiBmdW5jdGlvbiBzbGVlcCgpIHtcbiAgICAgIChfcmFmID8gX3dpbi5jYW5jZWxBbmltYXRpb25GcmFtZSA6IGNsZWFyVGltZW91dCkoX2lkKTtcbiAgICAgIF90aWNrZXJBY3RpdmUgPSAwO1xuICAgICAgX3JlcSA9IF9lbXB0eUZ1bmM7XG4gICAgfSxcbiAgICBsYWdTbW9vdGhpbmc6IGZ1bmN0aW9uIGxhZ1Ntb290aGluZyh0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG4gICAgICBfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8IEluZmluaXR5OyAvLyB6ZXJvIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNpY2FsbHkgdW5saW1pdGVkXG5cbiAgICAgIF9hZGp1c3RlZExhZyA9IE1hdGgubWluKGFkanVzdGVkTGFnIHx8IDMzLCBfbGFnVGhyZXNob2xkKTtcbiAgICB9LFxuICAgIGZwczogZnVuY3Rpb24gZnBzKF9mcHMpIHtcbiAgICAgIF9nYXAgPSAxMDAwIC8gKF9mcHMgfHwgMjQwKTtcbiAgICAgIF9uZXh0VGltZSA9IF9zZWxmLnRpbWUgKiAxMDAwICsgX2dhcDtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gYWRkKGNhbGxiYWNrLCBvbmNlLCBwcmlvcml0aXplKSB7XG4gICAgICB2YXIgZnVuYyA9IG9uY2UgPyBmdW5jdGlvbiAodCwgZCwgZiwgdikge1xuICAgICAgICBjYWxsYmFjayh0LCBkLCBmLCB2KTtcblxuICAgICAgICBfc2VsZi5yZW1vdmUoZnVuYyk7XG4gICAgICB9IDogY2FsbGJhY2s7XG5cbiAgICAgIF9zZWxmLnJlbW92ZShjYWxsYmFjayk7XG5cbiAgICAgIF9saXN0ZW5lcnNbcHJpb3JpdGl6ZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKGZ1bmMpO1xuXG4gICAgICBfd2FrZSgpO1xuXG4gICAgICByZXR1cm4gZnVuYztcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNhbGxiYWNrLCBpKSB7XG4gICAgICB+KGkgPSBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spKSAmJiBfbGlzdGVuZXJzLnNwbGljZShpLCAxKSAmJiBfaSA+PSBpICYmIF9pLS07XG4gICAgfSxcbiAgICBfbGlzdGVuZXJzOiBfbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBfc2VsZjtcbn0oKSxcbiAgICBfd2FrZSA9IGZ1bmN0aW9uIF93YWtlKCkge1xuICByZXR1cm4gIV90aWNrZXJBY3RpdmUgJiYgX3RpY2tlci53YWtlKCk7XG59LFxuICAgIC8vYWxzbyBlbnN1cmVzIHRoZSBjb3JlIGNsYXNzZXMgYXJlIGluaXRpYWxpemVkLlxuXG4vKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVBU0lOR1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuX2Vhc2VNYXAgPSB7fSxcbiAgICBfY3VzdG9tRWFzZUV4cCA9IC9eW1xcZC5cXC1NXVtcXGQuXFwtLFxcc10vLFxuICAgIF9xdW90ZXNFeHAgPSAvW1wiJ10vZyxcbiAgICBfcGFyc2VPYmplY3RJblN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHZhbHVlKSB7XG4gIC8vdGFrZXMgYSBzdHJpbmcgbGlrZSBcInt3aWdnbGVzOjEwLCB0eXBlOmFudGljaXBhdGV9KVwiIGFuZCB0dXJucyBpdCBpbnRvIGEgcmVhbCBvYmplY3QuIE5vdGljZSBpdCBlbmRzIGluIFwiKVwiIGFuZCBpbmNsdWRlcyB0aGUge30gd3JhcHBlcnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSBvbmx5IHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGVhc2UgY29uZmlncyBhbmQgcHJpb3JpdGl6ZWQgb3B0aW1pemF0aW9uIHJhdGhlciB0aGFuIHJldXNhYmlsaXR5LlxuICB2YXIgb2JqID0ge30sXG4gICAgICBzcGxpdCA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAzKS5zcGxpdChcIjpcIiksXG4gICAgICBrZXkgPSBzcGxpdFswXSxcbiAgICAgIGkgPSAxLFxuICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcbiAgICAgIGluZGV4LFxuICAgICAgdmFsLFxuICAgICAgcGFyc2VkVmFsO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFsID0gc3BsaXRbaV07XG4gICAgaW5kZXggPSBpICE9PSBsIC0gMSA/IHZhbC5sYXN0SW5kZXhPZihcIixcIikgOiB2YWwubGVuZ3RoO1xuICAgIHBhcnNlZFZhbCA9IHZhbC5zdWJzdHIoMCwgaW5kZXgpO1xuICAgIG9ialtrZXldID0gaXNOYU4ocGFyc2VkVmFsKSA/IHBhcnNlZFZhbC5yZXBsYWNlKF9xdW90ZXNFeHAsIFwiXCIpLnRyaW0oKSA6ICtwYXJzZWRWYWw7XG4gICAga2V5ID0gdmFsLnN1YnN0cihpbmRleCArIDEpLnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF92YWx1ZUluUGFyZW50aGVzZXMgPSBmdW5jdGlvbiBfdmFsdWVJblBhcmVudGhlc2VzKHZhbHVlKSB7XG4gIHZhciBvcGVuID0gdmFsdWUuaW5kZXhPZihcIihcIikgKyAxLFxuICAgICAgY2xvc2UgPSB2YWx1ZS5pbmRleE9mKFwiKVwiKSxcbiAgICAgIG5lc3RlZCA9IHZhbHVlLmluZGV4T2YoXCIoXCIsIG9wZW4pO1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKG9wZW4sIH5uZXN0ZWQgJiYgbmVzdGVkIDwgY2xvc2UgPyB2YWx1ZS5pbmRleE9mKFwiKVwiLCBjbG9zZSArIDEpIDogY2xvc2UpO1xufSxcbiAgICBfY29uZmlnRWFzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBfY29uZmlnRWFzZUZyb21TdHJpbmcobmFtZSkge1xuICAvL25hbWUgY2FuIGJlIGEgc3RyaW5nIGxpa2UgXCJlbGFzdGljLm91dCgxLDAuNSlcIiwgYW5kIHBhc3MgaW4gX2Vhc2VNYXAgYXMgb2JqIGFuZCBpdCdsbCBwYXJzZSBpdCBvdXQgYW5kIGNhbGwgdGhlIGFjdHVhbCBmdW5jdGlvbiBsaWtlIF9lYXNlTWFwLkVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwwLjUpLiBJdCB3aWxsIGFsc28gcGFyc2UgY3VzdG9tIGVhc2Ugc3RyaW5ncyBhcyBsb25nIGFzIEN1c3RvbUVhc2UgaXMgbG9hZGVkIGFuZCByZWdpc3RlcmVkIChpbnRlcm5hbGx5IGFzIF9lYXNlTWFwLl9DRSkuXG4gIHZhciBzcGxpdCA9IChuYW1lICsgXCJcIikuc3BsaXQoXCIoXCIpLFxuICAgICAgZWFzZSA9IF9lYXNlTWFwW3NwbGl0WzBdXTtcbiAgcmV0dXJuIGVhc2UgJiYgc3BsaXQubGVuZ3RoID4gMSAmJiBlYXNlLmNvbmZpZyA/IGVhc2UuY29uZmlnLmFwcGx5KG51bGwsIH5uYW1lLmluZGV4T2YoXCJ7XCIpID8gW19wYXJzZU9iamVjdEluU3RyaW5nKHNwbGl0WzFdKV0gOiBfdmFsdWVJblBhcmVudGhlc2VzKG5hbWUpLnNwbGl0KFwiLFwiKS5tYXAoX251bWVyaWNJZlBvc3NpYmxlKSkgOiBfZWFzZU1hcC5fQ0UgJiYgX2N1c3RvbUVhc2VFeHAudGVzdChuYW1lKSA/IF9lYXNlTWFwLl9DRShcIlwiLCBuYW1lKSA6IGVhc2U7XG59LFxuICAgIF9pbnZlcnRFYXNlID0gZnVuY3Rpb24gX2ludmVydEVhc2UoZWFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2UoMSAtIHApO1xuICB9O1xufSxcbiAgICAvLyBhbGxvdyB5b3lvRWFzZSB0byBiZSBzZXQgaW4gY2hpbGRyZW4gYW5kIGhhdmUgdGhvc2UgYWZmZWN0ZWQgd2hlbiB0aGUgcGFyZW50L2FuY2VzdG9yIHRpbWVsaW5lIHlveW9zLlxuX3Byb3BhZ2F0ZVlveW9FYXNlID0gZnVuY3Rpb24gX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pIHtcbiAgdmFyIGNoaWxkID0gdGltZWxpbmUuX2ZpcnN0LFxuICAgICAgZWFzZTtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUaW1lbGluZSkge1xuICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLCBpc1lveW8pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudmFycy55b3lvRWFzZSAmJiAoIWNoaWxkLl95b3lvIHx8ICFjaGlsZC5fcmVwZWF0KSAmJiBjaGlsZC5feW95byAhPT0gaXNZb3lvKSB7XG4gICAgICBpZiAoY2hpbGQudGltZWxpbmUpIHtcbiAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLnRpbWVsaW5lLCBpc1lveW8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWFzZSA9IGNoaWxkLl9lYXNlO1xuICAgICAgICBjaGlsZC5fZWFzZSA9IGNoaWxkLl95RWFzZTtcbiAgICAgICAgY2hpbGQuX3lFYXNlID0gZWFzZTtcbiAgICAgICAgY2hpbGQuX3lveW8gPSBpc1lveW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgfVxufSxcbiAgICBfcGFyc2VFYXNlID0gZnVuY3Rpb24gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICByZXR1cm4gIWVhc2UgPyBkZWZhdWx0RWFzZSA6IChfaXNGdW5jdGlvbihlYXNlKSA/IGVhc2UgOiBfZWFzZU1hcFtlYXNlXSB8fCBfY29uZmlnRWFzZUZyb21TdHJpbmcoZWFzZSkpIHx8IGRlZmF1bHRFYXNlO1xufSxcbiAgICBfaW5zZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnNlcnRFYXNlKG5hbWVzLCBlYXNlSW4sIGVhc2VPdXQsIGVhc2VJbk91dCkge1xuICBpZiAoZWFzZU91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oMSAtIHApO1xuICAgIH07XG4gIH1cblxuICBpZiAoZWFzZUluT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlSW5PdXQgPSBmdW5jdGlvbiBlYXNlSW5PdXQocCkge1xuICAgICAgcmV0dXJuIHAgPCAuNSA/IGVhc2VJbihwICogMikgLyAyIDogMSAtIGVhc2VJbigoMSAtIHApICogMikgLyAyO1xuICAgIH07XG4gIH1cblxuICB2YXIgZWFzZSA9IHtcbiAgICBlYXNlSW46IGVhc2VJbixcbiAgICBlYXNlT3V0OiBlYXNlT3V0LFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0XG4gIH0sXG4gICAgICBsb3dlcmNhc2VOYW1lO1xuXG4gIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9nbG9iYWxzW25hbWVdID0gZWFzZTtcbiAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGVhc2VPdXQ7XG5cbiAgICBmb3IgKHZhciBwIGluIGVhc2UpIHtcbiAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgKyAocCA9PT0gXCJlYXNlSW5cIiA/IFwiLmluXCIgOiBwID09PSBcImVhc2VPdXRcIiA/IFwiLm91dFwiIDogXCIuaW5PdXRcIildID0gX2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgcF0gPSBlYXNlW3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9lYXNlSW5PdXRGcm9tT3V0ID0gZnVuY3Rpb24gX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gKDEgLSBlYXNlT3V0KDEgLSBwICogMikpIC8gMiA6IC41ICsgZWFzZU91dCgocCAtIC41KSAqIDIpIC8gMjtcbiAgfTtcbn0sXG4gICAgX2NvbmZpZ0VsYXN0aWMgPSBmdW5jdGlvbiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICB2YXIgcDEgPSBhbXBsaXR1ZGUgPj0gMSA/IGFtcGxpdHVkZSA6IDEsXG4gICAgICAvL25vdGU6IGlmIGFtcGxpdHVkZSBpcyA8IDEsIHdlIHNpbXBseSBhZGp1c3QgdGhlIHBlcmlvZCBmb3IgYSBtb3JlIG5hdHVyYWwgZmVlbC4gT3RoZXJ3aXNlIHRoZSBtYXRoIGRvZXNuJ3Qgd29yayByaWdodCBhbmQgdGhlIGN1cnZlIHN0YXJ0cyBhdCAxLlxuICBwMiA9IChwZXJpb2QgfHwgKHR5cGUgPyAuMyA6IC40NSkpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKSxcbiAgICAgIHAzID0gcDIgLyBfMlBJICogKE1hdGguYXNpbigxIC8gcDEpIHx8IDApLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID09PSAxID8gMSA6IHAxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBfc2luKChwIC0gcDMpICogcDIpICsgMTtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIHAyID0gXzJQSSAvIHAyOyAvL3ByZWNhbGN1bGF0ZSB0byBvcHRpbWl6ZVxuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgcmV0dXJuIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2NvbmZpZ0JhY2sgPSBmdW5jdGlvbiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpIHtcbiAgaWYgKG92ZXJzaG9vdCA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnNob290ID0gMS43MDE1ODtcbiAgfVxuXG4gIHZhciBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPyAtLXAgKiBwICogKChvdmVyc2hvb3QgKyAxKSAqIHAgKyBvdmVyc2hvb3QpICsgMSA6IDA7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChvdmVyc2hvb3QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn07IC8vIGEgY2hlYXBlciAoa2IgYW5kIGNwdSkgYnV0IG1vcmUgbWlsZCB3YXkgdG8gZ2V0IGEgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIGJ5IGZlZWRpbmcgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2UgPSByYXRpbyA9PiB7XG4vLyBcdGxldCB5ID0gMC41ICsgcmF0aW8gLyAyO1xuLy8gXHRyZXR1cm4gcCA9PiAoMiAqICgxIC0gcCkgKiBwICogeSArIHAgKiBwKTtcbi8vIH0sXG4vLyBhIHN0cm9uZ2VyIChidXQgbW9yZSBleHBlbnNpdmUga2IvY3B1KSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgdGhhdCBsZXRzIHlvdSBmZWVkIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlU3Ryb25nID0gcmF0aW8gPT4ge1xuLy8gXHRyYXRpbyA9IC41ICsgcmF0aW8gLyAyO1xuLy8gXHRsZXQgbyA9IDEgLyAzICogKHJhdGlvIDwgLjUgPyByYXRpbyA6IDEgLSByYXRpbyksXG4vLyBcdFx0YiA9IHJhdGlvIC0gbyxcbi8vIFx0XHRjID0gcmF0aW8gKyBvO1xuLy8gXHRyZXR1cm4gcCA9PiBwID09PSAxID8gcCA6IDMgKiBiICogKDEgLSBwKSAqICgxIC0gcCkgKiBwICsgMyAqIGMgKiAoMSAtIHApICogcCAqIHAgKyBwICogcCAqIHA7XG4vLyB9O1xuXG5cbl9mb3JFYWNoTmFtZShcIkxpbmVhcixRdWFkLEN1YmljLFF1YXJ0LFF1aW50LFN0cm9uZ1wiLCBmdW5jdGlvbiAobmFtZSwgaSkge1xuICB2YXIgcG93ZXIgPSBpIDwgNSA/IGkgKyAxIDogaTtcblxuICBfaW5zZXJ0RWFzZShuYW1lICsgXCIsUG93ZXJcIiArIChwb3dlciAtIDEpLCBpID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9IDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSBwLCBwb3dlcik7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/IE1hdGgucG93KHAgKiAyLCBwb3dlcikgLyAyIDogMSAtIE1hdGgucG93KCgxIC0gcCkgKiAyLCBwb3dlcikgLyAyO1xuICB9KTtcbn0pO1xuXG5fZWFzZU1hcC5MaW5lYXIuZWFzZU5vbmUgPSBfZWFzZU1hcC5ub25lID0gX2Vhc2VNYXAuTGluZWFyLmVhc2VJbjtcblxuX2luc2VydEVhc2UoXCJFbGFzdGljXCIsIF9jb25maWdFbGFzdGljKFwiaW5cIiksIF9jb25maWdFbGFzdGljKFwib3V0XCIpLCBfY29uZmlnRWxhc3RpYygpKTtcblxuKGZ1bmN0aW9uIChuLCBjKSB7XG4gIHZhciBuMSA9IDEgLyBjLFxuICAgICAgbjIgPSAyICogbjEsXG4gICAgICBuMyA9IDIuNSAqIG4xLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwIDwgbjEgPyBuICogcCAqIHAgOiBwIDwgbjIgPyBuICogTWF0aC5wb3cocCAtIDEuNSAvIGMsIDIpICsgLjc1IDogcCA8IG4zID8gbiAqIChwIC09IDIuMjUgLyBjKSAqIHAgKyAuOTM3NSA6IG4gKiBNYXRoLnBvdyhwIC0gMi42MjUgLyBjLCAyKSArIC45ODQzNzU7XG4gIH07XG5cbiAgX2luc2VydEVhc2UoXCJCb3VuY2VcIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9LCBlYXNlT3V0KTtcbn0pKDcuNTYyNSwgMi43NSk7XG5cbl9pbnNlcnRFYXNlKFwiRXhwb1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA/IE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgOiAwO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQ2lyY1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gLShfc3FydCgxIC0gcCAqIHApIC0gMSk7XG59KTtcblxuX2luc2VydEVhc2UoXCJTaW5lXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID09PSAxID8gMSA6IC1fY29zKHAgKiBfSEFMRl9QSSkgKyAxO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQmFja1wiLCBfY29uZmlnQmFjayhcImluXCIpLCBfY29uZmlnQmFjayhcIm91dFwiKSwgX2NvbmZpZ0JhY2soKSk7XG5cbl9lYXNlTWFwLlN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuc3RlcHMgPSBfZ2xvYmFscy5TdGVwcGVkRWFzZSA9IHtcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcoc3RlcHMsIGltbWVkaWF0ZVN0YXJ0KSB7XG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHtcbiAgICAgIHN0ZXBzID0gMTtcbiAgICB9XG5cbiAgICB2YXIgcDEgPSAxIC8gc3RlcHMsXG4gICAgICAgIHAyID0gc3RlcHMgKyAoaW1tZWRpYXRlU3RhcnQgPyAwIDogMSksXG4gICAgICAgIHAzID0gaW1tZWRpYXRlU3RhcnQgPyAxIDogMCxcbiAgICAgICAgbWF4ID0gMSAtIF90aW55TnVtO1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuICgocDIgKiBfY2xhbXAoMCwgbWF4LCBwKSB8IDApICsgcDMpICogcDE7XG4gICAgfTtcbiAgfVxufTtcbl9kZWZhdWx0cy5lYXNlID0gX2Vhc2VNYXBbXCJxdWFkLm91dFwiXTtcblxuX2ZvckVhY2hOYW1lKFwib25Db21wbGV0ZSxvblVwZGF0ZSxvblN0YXJ0LG9uUmVwZWF0LG9uUmV2ZXJzZUNvbXBsZXRlLG9uSW50ZXJydXB0XCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfY2FsbGJhY2tOYW1lcyArPSBuYW1lICsgXCIsXCIgKyBuYW1lICsgXCJQYXJhbXMsXCI7XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ0FDSEVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIEdTQ2FjaGUgPSBmdW5jdGlvbiBHU0NhY2hlKHRhcmdldCwgaGFybmVzcykge1xuICB0aGlzLmlkID0gX2dzSUQrKztcbiAgdGFyZ2V0Ll9nc2FwID0gdGhpcztcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIHRoaXMuaGFybmVzcyA9IGhhcm5lc3M7XG4gIHRoaXMuZ2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0IDogX2dldFByb3BlcnR5O1xuICB0aGlzLnNldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldFNldHRlciA6IF9nZXRTZXR0ZXI7XG59O1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBTklNQVRJT05cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IHZhciBBbmltYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbmltYXRpb24odmFycykge1xuICAgIHRoaXMudmFycyA9IHZhcnM7XG4gICAgdGhpcy5fZGVsYXkgPSArdmFycy5kZWxheSB8fCAwO1xuXG4gICAgaWYgKHRoaXMuX3JlcGVhdCA9IHZhcnMucmVwZWF0ID09PSBJbmZpbml0eSA/IC0yIDogdmFycy5yZXBlYXQgfHwgMCkge1xuICAgICAgLy8gVE9ETzogcmVwZWF0OiBJbmZpbml0eSBvbiBhIHRpbWVsaW5lJ3MgY2hpbGRyZW4gbXVzdCBmbGFnIHRoYXQgdGltZWxpbmUgaW50ZXJuYWxseSBhbmQgYWZmZWN0IGl0cyB0b3RhbER1cmF0aW9uLCBvdGhlcndpc2UgaXQnbGwgc3RvcCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIHdoZW4gcmVhY2hpbmcgdGhlIHN0YXJ0LlxuICAgICAgdGhpcy5fckRlbGF5ID0gdmFycy5yZXBlYXREZWxheSB8fCAwO1xuICAgICAgdGhpcy5feW95byA9ICEhdmFycy55b3lvIHx8ICEhdmFycy55b3lvRWFzZTtcbiAgICB9XG5cbiAgICB0aGlzLl90cyA9IDE7XG5cbiAgICBfc2V0RHVyYXRpb24odGhpcywgK3ZhcnMuZHVyYXRpb24sIDEsIDEpO1xuXG4gICAgdGhpcy5kYXRhID0gdmFycy5kYXRhO1xuXG4gICAgaWYgKF9jb250ZXh0KSB7XG4gICAgICB0aGlzLl9jdHggPSBfY29udGV4dDtcblxuICAgICAgX2NvbnRleHQuZGF0YS5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIF90aWNrZXJBY3RpdmUgfHwgX3RpY2tlci53YWtlKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVsYXkgPSBmdW5jdGlvbiBkZWxheSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5zdGFydFRpbWUodGhpcy5fc3RhcnQgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHRoaXMuX2RlbGF5ID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLmR1cmF0aW9uID0gZnVuY3Rpb24gZHVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxEdXJhdGlvbih0aGlzLl9yZXBlYXQgPiAwID8gdmFsdWUgKyAodmFsdWUgKyB0aGlzLl9yRGVsYXkpICogdGhpcy5fcmVwZWF0IDogdmFsdWUpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgJiYgdGhpcy5fZHVyO1xuICB9O1xuXG4gIF9wcm90by50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3REdXI7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlydHkgPSAwO1xuICAgIHJldHVybiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fcmVwZWF0IDwgMCA/IHZhbHVlIDogKHZhbHVlIC0gdGhpcy5fcmVwZWF0ICogdGhpcy5fckRlbGF5KSAvICh0aGlzLl9yZXBlYXQgKyAxKSk7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIF93YWtlKCk7XG5cbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5fZHA7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLl90cykge1xuICAgICAgX2FsaWduUGxheWhlYWQodGhpcywgX3RvdGFsVGltZSk7XG5cbiAgICAgICFwYXJlbnQuX2RwIHx8IHBhcmVudC5wYXJlbnQgfHwgX3Bvc3RBZGRDaGVja3MocGFyZW50LCB0aGlzKTsgLy8gZWRnZSBjYXNlOiBpZiB0aGlzIGlzIGEgY2hpbGQgb2YgYSB0aW1lbGluZSB0aGF0IGFscmVhZHkgY29tcGxldGVkLCBmb3IgZXhhbXBsZSwgd2UgbXVzdCByZS1hY3RpdmF0ZSB0aGUgcGFyZW50LlxuICAgICAgLy9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3IgdGltZWxpbmVzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZCwgd2Ugc2hvdWxkIHJlc2V0IHRoZWlyIHRvdGFsVGltZSgpIHdoaWNoIHdpbGwgYWxzbyBlbnN1cmUgdGhhdCB0aGV5J3JlIGxpbmVkIHVwIHByb3Blcmx5IGFuZCBlbmFibGVkLiBTa2lwIGZvciBhbmltYXRpb25zIHRoYXQgYXJlIG9uIHRoZSByb290ICh3YXN0ZWZ1bCkuIEV4YW1wbGU6IGEgVGltZWxpbmVMaXRlLmV4cG9ydFJvb3QoKSBpcyBwZXJmb3JtZWQgd2hlbiB0aGVyZSdzIGEgcGF1c2VkIHR3ZWVuIG9uIHRoZSByb290LCB0aGUgZXhwb3J0IHdpbGwgbm90IGNvbXBsZXRlIHVudGlsIHRoYXQgdHdlZW4gaXMgdW5wYXVzZWQsIGJ1dCBpbWFnaW5lIGEgY2hpbGQgZ2V0cyByZXN0YXJ0ZWQgbGF0ZXIsIGFmdGVyIGFsbCBbdW5wYXVzZWRdIHR3ZWVucyBoYXZlIGNvbXBsZXRlZC4gVGhlIHN0YXJ0IG9mIHRoYXQgY2hpbGQgd291bGQgZ2V0IHB1c2hlZCBvdXQsIGJ1dCBvbmUgb2YgdGhlIGFuY2VzdG9ycyBtYXkgaGF2ZSBjb21wbGV0ZWQuXG5cbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50LnBhcmVudC5fdGltZSAhPT0gcGFyZW50Ll9zdGFydCArIChwYXJlbnQuX3RzID49IDAgPyBwYXJlbnQuX3RUaW1lIC8gcGFyZW50Ll90cyA6IChwYXJlbnQudG90YWxEdXJhdGlvbigpIC0gcGFyZW50Ll90VGltZSkgLyAtcGFyZW50Ll90cykpIHtcbiAgICAgICAgICBwYXJlbnQudG90YWxUaW1lKHBhcmVudC5fdFRpbWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnBhcmVudCAmJiB0aGlzLl9kcC5hdXRvUmVtb3ZlQ2hpbGRyZW4gJiYgKHRoaXMuX3RzID4gMCAmJiBfdG90YWxUaW1lIDwgdGhpcy5fdER1ciB8fCB0aGlzLl90cyA8IDAgJiYgX3RvdGFsVGltZSA+IDAgfHwgIXRoaXMuX3REdXIgJiYgIV90b3RhbFRpbWUpKSB7XG4gICAgICAgIC8vaWYgdGhlIGFuaW1hdGlvbiBkb2Vzbid0IGhhdmUgYSBwYXJlbnQsIHB1dCBpdCBiYWNrIGludG8gaXRzIGxhc3QgcGFyZW50IChyZWNvcmRlZCBhcyBfZHAgZm9yIGV4YWN0bHkgY2FzZXMgbGlrZSB0aGlzKS4gTGltaXQgdG8gcGFyZW50cyB3aXRoIGF1dG9SZW1vdmVDaGlsZHJlbiAobGlrZSBnbG9iYWxUaW1lbGluZSkgc28gdGhhdCBpZiB0aGUgdXNlciBtYW51YWxseSByZW1vdmVzIGFuIGFuaW1hdGlvbiBmcm9tIGEgdGltZWxpbmUgYW5kIHRoZW4gYWx0ZXJzIGl0cyBwbGF5aGVhZCwgaXQgZG9lc24ndCBnZXQgYWRkZWQgYmFjayBpbi5cbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGhpcy5fZHAsIHRoaXMsIHRoaXMuX3N0YXJ0IC0gdGhpcy5fZGVsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90VGltZSAhPT0gX3RvdGFsVGltZSB8fCAhdGhpcy5fZHVyICYmICFzdXBwcmVzc0V2ZW50cyB8fCB0aGlzLl9pbml0dGVkICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSA9PT0gX3RpbnlOdW0gfHwgIV90b3RhbFRpbWUgJiYgIXRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuYWRkIHx8IHRoaXMuX3B0TG9va3VwKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIF9wdExvb2t1cCBvbiBhIFR3ZWVuIGluc3RhbmNlIHRvIGVuc3VyZSBpdCBoYXMgYWN0dWFsbHkgZmluaXNoZWQgYmVpbmcgaW5zdGFudGlhdGVkLCBvdGhlcndpc2UgaWYgdGhpcy5yZXZlcnNlKCkgZ2V0cyBjYWxsZWQgaW4gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgaXQgY291bGQgdHJpZ2dlciBhIHJlbmRlcigpIGhlcmUgZXZlbiB0aG91Z2ggdGhlIF90YXJnZXRzIHdlcmVuJ3QgcG9wdWxhdGVkLCB0aHVzIHdoZW4gX2luaXQoKSBpcyBjYWxsZWQgdGhlcmUgd29uJ3QgYmUgYW55IFByb3BUd2VlbnMgKGl0J2xsIGFjdCBsaWtlIHRoZSB0d2VlbiBpcyBub24tZnVuY3Rpb25hbClcbiAgICAgIHRoaXMuX3RzIHx8ICh0aGlzLl9wVGltZSA9IF90b3RhbFRpbWUpOyAvLyBvdGhlcndpc2UsIGlmIGFuIGFuaW1hdGlvbiBpcyBwYXVzZWQsIHRoZW4gdGhlIHBsYXloZWFkIGlzIG1vdmVkIGJhY2sgdG8gemVybywgdGhlbiByZXN1bWVkLCBpdCdkIHJldmVydCBiYWNrIHRvIHRoZSBvcmlnaW5hbCB0aW1lIGF0IHRoZSBwYXVzZVxuICAgICAgLy9pZiAoIXRoaXMuX2xvY2spIHsgLy8gYXZvaWQgZW5kbGVzcyByZWN1cnNpb24gKG5vdCBzdXJlIHdlIG5lZWQgdGhpcyB5ZXQgb3IgaWYgaXQncyB3b3J0aCB0aGUgcGVyZm9ybWFuY2UgaGl0KVxuICAgICAgLy8gICB0aGlzLl9sb2NrID0gMTtcblxuICAgICAgX2xhenlTYWZlUmVuZGVyKHRoaXMsIF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKTsgLy8gICB0aGlzLl9sb2NrID0gMDtcbiAgICAgIC8vfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnRpbWUgPSBmdW5jdGlvbiB0aW1lKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUoTWF0aC5taW4odGhpcy50b3RhbER1cmF0aW9uKCksIHZhbHVlICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpKSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIHx8ICh2YWx1ZSA/IHRoaXMuX2R1ciA6IDApLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl90aW1lOyAvLyBub3RlOiBpZiB0aGUgbW9kdWx1cyByZXN1bHRzIGluIDAsIHRoZSBwbGF5aGVhZCBjb3VsZCBiZSBleGFjdGx5IGF0IHRoZSBlbmQgb3IgdGhlIGJlZ2lubmluZywgYW5kIHdlIGFsd2F5cyBkZWZlciB0byB0aGUgRU5EIHdpdGggYSBub24temVybyB2YWx1ZSwgb3RoZXJ3aXNlIGlmIHlvdSBzZXQgdGhlIHRpbWUoKSB0byB0aGUgdmVyeSBlbmQgKGR1cmF0aW9uKCkpLCBpdCB3b3VsZCByZW5kZXIgYXQgdGhlIFNUQVJUIVxuICB9O1xuXG4gIF9wcm90by50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24gdG90YWxQcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMudG90YWxEdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMudG90YWxEdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdFRpbWUgLyB0aGlzLl90RHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLnByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkgKiAodGhpcy5feW95byAmJiAhKHRoaXMuaXRlcmF0aW9uKCkgJiAxKSA/IDEgLSB2YWx1ZSA6IHZhbHVlKSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5kdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdGltZSAvIHRoaXMuX2R1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5pdGVyYXRpb24gPSBmdW5jdGlvbiBpdGVyYXRpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgdmFyIGN5Y2xlRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCkgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuX3RpbWUgKyAodmFsdWUgLSAxKSAqIGN5Y2xlRHVyYXRpb24sIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbikgKyAxIDogMTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGFkZGl0aW9uOlxuICAvLyBpc1BsYXlpbmdCYWNrd2FyZHMoKSB7XG4gIC8vIFx0bGV0IGFuaW1hdGlvbiA9IHRoaXMsXG4gIC8vIFx0XHRvcmllbnRhdGlvbiA9IDE7IC8vIDEgPSBmb3J3YXJkLCAtMSA9IGJhY2t3YXJkXG4gIC8vIFx0d2hpbGUgKGFuaW1hdGlvbikge1xuICAvLyBcdFx0b3JpZW50YXRpb24gKj0gYW5pbWF0aW9uLnJldmVyc2VkKCkgfHwgKGFuaW1hdGlvbi5yZXBlYXQoKSAmJiAhKGFuaW1hdGlvbi5pdGVyYXRpb24oKSAmIDEpKSA/IC0xIDogMTtcbiAgLy8gXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXJlbnQ7XG4gIC8vIFx0fVxuICAvLyBcdHJldHVybiBvcmllbnRhdGlvbiA8IDA7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90by50aW1lU2NhbGUgPSBmdW5jdGlvbiB0aW1lU2NhbGUodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydHMgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIHJlY29yZGVkIHRpbWVTY2FsZS4gU3BlY2lhbCBjYXNlOiBpZiBzb21lb25lIGNhbGxzIHJldmVyc2UoKSBvbiBhbiBhbmltYXRpb24gd2l0aCB0aW1lU2NhbGUgb2YgMCwgd2UgYXNzaWduIGl0IC1fdGlueU51bSB0byByZW1lbWJlciBpdCdzIHJldmVyc2VkLlxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ydHMgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgdFRpbWUgPSB0aGlzLnBhcmVudCAmJiB0aGlzLl90cyA/IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRoaXMucGFyZW50Ll90aW1lLCB0aGlzKSA6IHRoaXMuX3RUaW1lOyAvLyBtYWtlIHN1cmUgdG8gZG8gdGhlIHBhcmVudFRvQ2hpbGRUb3RhbFRpbWUoKSBCRUZPUkUgc2V0dGluZyB0aGUgbmV3IF90cyBiZWNhdXNlIHRoZSBvbGQgb25lIG11c3QgYmUgdXNlZCBpbiB0aGF0IGNhbGN1bGF0aW9uLlxuICAgIC8vIGZ1dHVyZSBhZGRpdGlvbj8gVXAgc2lkZTogZmFzdCBhbmQgbWluaW1hbCBmaWxlIHNpemUuIERvd24gc2lkZTogb25seSB3b3JrcyBvbiB0aGlzIGFuaW1hdGlvbjsgaWYgYSB0aW1lbGluZSBpcyByZXZlcnNlZCwgZm9yIGV4YW1wbGUsIGl0cyBjaGlsZHJlbnMnIG9uUmV2ZXJzZSB3b3VsZG4ndCBnZXQgY2FsbGVkLlxuICAgIC8vKCt2YWx1ZSA8IDAgJiYgdGhpcy5fcnRzID49IDApICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmV2ZXJzZVwiLCB0cnVlKTtcbiAgICAvLyBwcmlvcml0aXplIHJlbmRlcmluZyB3aGVyZSB0aGUgcGFyZW50J3MgcGxheWhlYWQgbGluZXMgdXAgaW5zdGVhZCBvZiB0aGlzLl90VGltZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIGEgdHdlZW4gdGhhdCdzIGFuaW1hdGluZyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIGluIHRoZSBzYW1lIHJlbmRlcmluZyBsb29wIChzYW1lIHBhcmVudCksIHRodXMgaWYgdGhlIHRpbWVTY2FsZSB0d2VlbiByZW5kZXJzIGZpcnN0LCBpdCB3b3VsZCBhbHRlciBfc3RhcnQgQkVGT1JFIF90VGltZSB3YXMgc2V0IG9uIHRoYXQgdGljayAoaW4gdGhlIHJlbmRlcmluZyBsb29wKSwgZWZmZWN0aXZlbHkgZnJlZXppbmcgaXQgdW50aWwgdGhlIHRpbWVTY2FsZSB0d2VlbiBmaW5pc2hlcy5cblxuICAgIHRoaXMuX3J0cyA9ICt2YWx1ZSB8fCAwO1xuICAgIHRoaXMuX3RzID0gdGhpcy5fcHMgfHwgdmFsdWUgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUgd2hpY2ggd291bGQgYmUgMCBpZiB0aGUgYW5pbWF0aW9uIGlzIHBhdXNlZC5cblxuICAgIHRoaXMudG90YWxUaW1lKF9jbGFtcCgtTWF0aC5hYnModGhpcy5fZGVsYXkpLCB0aGlzLl90RHVyLCB0VGltZSksIHRydWUpO1xuXG4gICAgX3NldEVuZCh0aGlzKTsgLy8gaWYgcGFyZW50LnNtb290aENoaWxkVGltaW5nIHdhcyBmYWxzZSwgdGhlIGVuZCB0aW1lIGRpZG4ndCBnZXQgdXBkYXRlZCBpbiB0aGUgX2FsaWduUGxheWhlYWQoKSBtZXRob2QsIHNvIGRvIGl0IGhlcmUuXG5cblxuICAgIHJldHVybiBfcmVjYWNoZUFuY2VzdG9ycyh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2VkID0gZnVuY3Rpb24gcGF1c2VkKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fcHMgPSB2YWx1ZTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BUaW1lID0gdGhpcy5fdFRpbWUgfHwgTWF0aC5tYXgoLXRoaXMuX2RlbGF5LCB0aGlzLnJhd1RpbWUoKSk7IC8vIGlmIHRoZSBwYXVzZSBvY2N1cnMgZHVyaW5nIHRoZSBkZWxheSBwaGFzZSwgbWFrZSBzdXJlIHRoYXQncyBmYWN0b3JlZCBpbiB3aGVuIHJlc3VtaW5nLlxuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fYWN0ID0gMDsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSwgc28gYSBwYXVzZWQgdHdlZW4gd291bGQgZWZmZWN0aXZlbHkgaGF2ZSBhIHRpbWVTY2FsZSBvZiAwLiBXZSByZWNvcmQgdGhlIFwicmVhbFwiIHRpbWVTY2FsZSBhcyBfcnRzIChyZWNvcmRlZCB0aW1lIHNjYWxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3dha2UoKTtcblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX3J0czsgLy9vbmx5IGRlZmVyIHRvIF9wVGltZSAocGF1c2VUaW1lKSBpZiB0VGltZSBpcyB6ZXJvLiBSZW1lbWJlciwgc29tZW9uZSBjb3VsZCBwYXVzZSgpIGFuIGFuaW1hdGlvbiwgdGhlbiBzY3J1YiB0aGUgcGxheWhlYWQgYW5kIHJlc3VtZSgpLiBJZiB0aGUgcGFyZW50IGRvZXNuJ3QgaGF2ZSBzbW9vdGhDaGlsZFRpbWluZywgd2UgcmVuZGVyIGF0IHRoZSByYXdUaW1lKCkgYmVjYXVzZSB0aGUgc3RhcnRUaW1lIHdvbid0IGdldCB1cGRhdGVkLlxuXG4gICAgICAgIHRoaXMudG90YWxUaW1lKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMucmF3VGltZSgpIDogdGhpcy5fdFRpbWUgfHwgdGhpcy5fcFRpbWUsIHRoaXMucHJvZ3Jlc3MoKSA9PT0gMSAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgIT09IF90aW55TnVtICYmICh0aGlzLl90VGltZSAtPSBfdGlueU51bSkpOyAvLyBlZGdlIGNhc2U6IGFuaW1hdGlvbi5wcm9ncmVzcygxKS5wYXVzZSgpLnBsYXkoKSB3b3VsZG4ndCByZW5kZXIgYWdhaW4gYmVjYXVzZSB0aGUgcGxheWhlYWQgaXMgYWxyZWFkeSBhdCB0aGUgZW5kLCBidXQgdGhlIGNhbGwgdG8gdG90YWxUaW1lKCkgYmVsb3cgd2lsbCBhZGQgaXQgYmFjayB0byBpdHMgcGFyZW50Li4uYW5kIG5vdCByZW1vdmUgaXQgYWdhaW4gKHNpbmNlIHJlbW92aW5nIG9ubHkgaGFwcGVucyB1cG9uIHJlbmRlcmluZyBhdCBhIG5ldyB0aW1lKS4gT2Zmc2V0dGluZyB0aGUgX3RUaW1lIHNsaWdodGx5IGlzIGRvbmUgc2ltcGx5IHRvIGNhdXNlIHRoZSBmaW5hbCByZW5kZXIgaW4gdG90YWxUaW1lKCkgdGhhdCdsbCBwb3AgaXQgb2ZmIGl0cyB0aW1lbGluZSAoaWYgYXV0b1JlbW92ZUNoaWxkcmVuIGlzIHRydWUsIG9mIGNvdXJzZSkuIENoZWNrIHRvIG1ha2Ugc3VyZSBfelRpbWUgaXNuJ3QgLV90aW55TnVtIHRvIGF2b2lkIGFuIGVkZ2UgY2FzZSB3aGVyZSB0aGUgcGxheWhlYWQgaXMgcHVzaGVkIHRvIHRoZSBlbmQgYnV0IElOU0lERSBhIHR3ZWVuL2NhbGxiYWNrLCB0aGUgdGltZWxpbmUgaXRzZWxmIGlzIHBhdXNlZCB0aHVzIGhhbHRpbmcgcmVuZGVyaW5nIGFuZCBsZWF2aW5nIGEgZmV3IHVucmVuZGVyZWQuIFdoZW4gcmVzdW1pbmcsIGl0IHdvdWxkbid0IHJlbmRlciB0aG9zZSBvdGhlcndpc2UuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0VGltZSA9IGZ1bmN0aW9uIHN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwO1xuICAgICAgcGFyZW50ICYmIChwYXJlbnQuX3NvcnQgfHwgIXRoaXMucGFyZW50KSAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9O1xuXG4gIF9wcm90by5lbmRUaW1lID0gZnVuY3Rpb24gZW5kVGltZShpbmNsdWRlUmVwZWF0cykge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIChfaXNOb3RGYWxzZShpbmNsdWRlUmVwZWF0cykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuZHVyYXRpb24oKSkgLyBNYXRoLmFicyh0aGlzLl90cyB8fCAxKTtcbiAgfTtcblxuICBfcHJvdG8ucmF3VGltZSA9IGZ1bmN0aW9uIHJhd1RpbWUod3JhcFJlcGVhdHMpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7IC8vIF9kcCA9IGRldGFjaGVkIHBhcmVudFxuXG4gICAgcmV0dXJuICFwYXJlbnQgPyB0aGlzLl90VGltZSA6IHdyYXBSZXBlYXRzICYmICghdGhpcy5fdHMgfHwgdGhpcy5fcmVwZWF0ICYmIHRoaXMuX3RpbWUgJiYgdGhpcy50b3RhbFByb2dyZXNzKCkgPCAxKSA/IHRoaXMuX3RUaW1lICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgOiAhdGhpcy5fdHMgPyB0aGlzLl90VGltZSA6IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudC5yYXdUaW1lKHdyYXBSZXBlYXRzKSwgdGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVydCA9IGZ1bmN0aW9uIHJldmVydChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIGNvbmZpZyA9IF9yZXZlcnRDb25maWc7XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc1JldmVydGluZyA9IF9yZXZlcnRpbmc7XG4gICAgX3JldmVydGluZyA9IGNvbmZpZztcblxuICAgIGlmICh0aGlzLl9pbml0dGVkIHx8IHRoaXMuX3N0YXJ0QXQpIHtcbiAgICAgIHRoaXMudGltZWxpbmUgJiYgdGhpcy50aW1lbGluZS5yZXZlcnQoY29uZmlnKTtcbiAgICAgIHRoaXMudG90YWxUaW1lKC0wLjAxLCBjb25maWcuc3VwcHJlc3NFdmVudHMpO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSAhPT0gXCJuZXN0ZWRcIiAmJiBjb25maWcua2lsbCAhPT0gZmFsc2UgJiYgdGhpcy5raWxsKCk7XG4gICAgX3JldmVydGluZyA9IHByZXZJc1JldmVydGluZztcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZ2xvYmFsVGltZSA9IGZ1bmN0aW9uIGdsb2JhbFRpbWUocmF3VGltZSkge1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLFxuICAgICAgICB0aW1lID0gYXJndW1lbnRzLmxlbmd0aCA/IHJhd1RpbWUgOiBhbmltYXRpb24ucmF3VGltZSgpO1xuXG4gICAgd2hpbGUgKGFuaW1hdGlvbikge1xuICAgICAgdGltZSA9IGFuaW1hdGlvbi5fc3RhcnQgKyB0aW1lIC8gKGFuaW1hdGlvbi5fdHMgfHwgMSk7XG4gICAgICBhbmltYXRpb24gPSBhbmltYXRpb24uX2RwO1xuICAgIH1cblxuICAgIHJldHVybiAhdGhpcy5wYXJlbnQgJiYgdGhpcy5fc2F0ID8gdGhpcy5fc2F0LnZhcnMuaW1tZWRpYXRlUmVuZGVyID8gLUluZmluaXR5IDogdGhpcy5fc2F0Lmdsb2JhbFRpbWUocmF3VGltZSkgOiB0aW1lOyAvLyB0aGUgX3N0YXJ0QXQgdHdlZW5zIGZvciAuZnJvbVRvKCkgYW5kIC5mcm9tKCkgdGhhdCBoYXZlIGltbWVkaWF0ZVJlbmRlciBzaG91bGQgYWx3YXlzIGJlIEZJUlNUIGluIHRoZSB0aW1lbGluZSAoaW1wb3J0YW50IGZvciBjb250ZXh0LnJldmVydCgpKS4gXCJfc2F0XCIgc3RhbmRzIGZvciBfc3RhcnRBdFR3ZWVuLCByZWZlcnJpbmcgdG8gdGhlIHBhcmVudCB0d2VlbiB0aGF0IGNyZWF0ZWQgdGhlIF9zdGFydEF0LiBXZSBtdXN0IGRpc2Nlcm4gaWYgdGhhdCB0d2VlbiBoYWQgaW1tZWRpYXRlUmVuZGVyIHNvIHRoYXQgd2UgY2FuIGtub3cgd2hldGhlciBvciBub3QgdG8gcHJpb3JpdGl6ZSBpdCBpbiByZXZlcnQoKS5cbiAgfTtcblxuICBfcHJvdG8ucmVwZWF0ID0gZnVuY3Rpb24gcmVwZWF0KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3JlcGVhdCA9IHZhbHVlID09PSBJbmZpbml0eSA/IC0yIDogdmFsdWU7XG4gICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVwZWF0ID09PSAtMiA/IEluZmluaXR5IDogdGhpcy5fcmVwZWF0O1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXREZWxheSA9IGZ1bmN0aW9uIHJlcGVhdERlbGF5KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhciB0aW1lID0gdGhpcy5fdGltZTtcbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhbHVlO1xuXG4gICAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuXG4gICAgICByZXR1cm4gdGltZSA/IHRoaXMudGltZSh0aW1lKSA6IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JEZWxheTtcbiAgfTtcblxuICBfcHJvdG8ueW95byA9IGZ1bmN0aW9uIHlveW8odmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5feW95byA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3lveW87XG4gIH07XG5cbiAgX3Byb3RvLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KGluY2x1ZGVEZWxheSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5KCkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnBsYXkgPSBmdW5jdGlvbiBwbGF5KGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2UgPSBmdW5jdGlvbiBwYXVzZShhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgYXRUaW1lICE9IG51bGwgJiYgdGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VkID0gZnVuY3Rpb24gcmV2ZXJzZWQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgISF2YWx1ZSAhPT0gdGhpcy5yZXZlcnNlZCgpICYmIHRoaXMudGltZVNjYWxlKC10aGlzLl9ydHMgfHwgKHZhbHVlID8gLV90aW55TnVtIDogMCkpOyAvLyBpbiBjYXNlIHRpbWVTY2FsZSBpcyB6ZXJvLCByZXZlcnNpbmcgd291bGQgaGF2ZSBubyBlZmZlY3Qgc28gd2UgdXNlIF90aW55TnVtLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnRzIDwgMDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5faW5pdHRlZCA9IHRoaXMuX2FjdCA9IDA7XG4gICAgdGhpcy5felRpbWUgPSAtX3RpbnlOdW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwLFxuICAgICAgICBzdGFydCA9IHRoaXMuX3N0YXJ0LFxuICAgICAgICByYXdUaW1lO1xuICAgIHJldHVybiAhISghcGFyZW50IHx8IHRoaXMuX3RzICYmIHRoaXMuX2luaXR0ZWQgJiYgcGFyZW50LmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSBwYXJlbnQucmF3VGltZSh0cnVlKSkgPj0gc3RhcnQgJiYgcmF3VGltZSA8IHRoaXMuZW5kVGltZSh0cnVlKSAtIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8uZXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uIGV2ZW50Q2FsbGJhY2sodHlwZSwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB2YXJzID0gdGhpcy52YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIGRlbGV0ZSB2YXJzW3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyc1t0eXBlXSA9IGNhbGxiYWNrO1xuICAgICAgICBwYXJhbXMgJiYgKHZhcnNbdHlwZSArIFwiUGFyYW1zXCJdID0gcGFyYW1zKTtcbiAgICAgICAgdHlwZSA9PT0gXCJvblVwZGF0ZVwiICYmICh0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcnNbdHlwZV07XG4gIH07XG5cbiAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIGYgPSBfaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IF9wYXNzVGhyb3VnaCxcbiAgICAgICAgICBfcmVzb2x2ZSA9IGZ1bmN0aW9uIF9yZXNvbHZlKCkge1xuICAgICAgICB2YXIgX3RoZW4gPSBzZWxmLnRoZW47XG4gICAgICAgIHNlbGYudGhlbiA9IG51bGw7IC8vIHRlbXBvcmFyaWx5IG51bGwgdGhlIHRoZW4oKSBtZXRob2QgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzIyKVxuXG4gICAgICAgIF9pc0Z1bmN0aW9uKGYpICYmIChmID0gZihzZWxmKSkgJiYgKGYudGhlbiB8fCBmID09PSBzZWxmKSAmJiAoc2VsZi50aGVuID0gX3RoZW4pO1xuICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICBzZWxmLnRoZW4gPSBfdGhlbjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLl9pbml0dGVkICYmIHNlbGYudG90YWxQcm9ncmVzcygpID09PSAxICYmIHNlbGYuX3RzID49IDAgfHwgIXNlbGYuX3RUaW1lICYmIHNlbGYuX3RzIDwgMCkge1xuICAgICAgICBfcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fcHJvbSA9IF9yZXNvbHZlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5raWxsID0gZnVuY3Rpb24ga2lsbCgpIHtcbiAgICBfaW50ZXJydXB0KHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBBbmltYXRpb247XG59KCk7XG5cbl9zZXREZWZhdWx0cyhBbmltYXRpb24ucHJvdG90eXBlLCB7XG4gIF90aW1lOiAwLFxuICBfc3RhcnQ6IDAsXG4gIF9lbmQ6IDAsXG4gIF90VGltZTogMCxcbiAgX3REdXI6IDAsXG4gIF9kaXJ0eTogMCxcbiAgX3JlcGVhdDogMCxcbiAgX3lveW86IGZhbHNlLFxuICBwYXJlbnQ6IG51bGwsXG4gIF9pbml0dGVkOiBmYWxzZSxcbiAgX3JEZWxheTogMCxcbiAgX3RzOiAxLFxuICBfZHA6IDAsXG4gIHJhdGlvOiAwLFxuICBfelRpbWU6IC1fdGlueU51bSxcbiAgX3Byb206IDAsXG4gIF9wczogZmFsc2UsXG4gIF9ydHM6IDFcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJTUVMSU5FXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFRpbWVsaW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uKSB7XG4gIF9pbmhlcml0c0xvb3NlKFRpbWVsaW5lLCBfQW5pbWF0aW9uKTtcblxuICBmdW5jdGlvbiBUaW1lbGluZSh2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9BbmltYXRpb24uY2FsbCh0aGlzLCB2YXJzKSB8fCB0aGlzO1xuICAgIF90aGlzLmxhYmVscyA9IHt9O1xuICAgIF90aGlzLnNtb290aENoaWxkVGltaW5nID0gISF2YXJzLnNtb290aENoaWxkVGltaW5nO1xuICAgIF90aGlzLmF1dG9SZW1vdmVDaGlsZHJlbiA9ICEhdmFycy5hdXRvUmVtb3ZlQ2hpbGRyZW47XG4gICAgX3RoaXMuX3NvcnQgPSBfaXNOb3RGYWxzZSh2YXJzLnNvcnRDaGlsZHJlbik7XG4gICAgX2dsb2JhbFRpbWVsaW5lICYmIF9hZGRUb1RpbWVsaW5lKHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHBvc2l0aW9uKTtcbiAgICB2YXJzLnJldmVyc2VkICYmIF90aGlzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpcy5wYXVzZWQodHJ1ZSk7XG4gICAgdmFycy5zY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YXJzLnNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gVGltZWxpbmUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIudG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMCwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMiwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSAhIXZhcnMuaW1tZWRpYXRlUmVuZGVyO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuY2FsbCA9IGZ1bmN0aW9uIGNhbGwoY2FsbGJhY2ssIHBhcmFtcywgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2ssIHBhcmFtcyksIHBvc2l0aW9uKTtcbiAgfSAvL09OTFkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkhIE1heWJlIGRlbGV0ZT9cbiAgO1xuXG4gIF9wcm90bzIuc3RhZ2dlclRvID0gZnVuY3Rpb24gc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB2YXJzLnN0YWdnZXIgPSB2YXJzLnN0YWdnZXIgfHwgc3RhZ2dlcjtcbiAgICB2YXJzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlQWxsO1xuICAgIHZhcnMub25Db21wbGV0ZVBhcmFtcyA9IG9uQ29tcGxldGVBbGxQYXJhbXM7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb20gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbSh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLnJ1bkJhY2t3YXJkcyA9IDE7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh2YXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbVRvID0gZnVuY3Rpb24gc3RhZ2dlckZyb21Ubyh0YXJnZXRzLCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModG9WYXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX2RpcnR5ID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lIDw9IDAgPyAwIDogX3JvdW5kUHJlY2lzZSh0b3RhbFRpbWUpLFxuICAgICAgICAvLyBpZiBhIHBhdXNlZCB0aW1lbGluZSBpcyByZXN1bWVkIChvciBpdHMgX3N0YXJ0IGlzIHVwZGF0ZWQgZm9yIGFub3RoZXIgcmVhc29uLi4ud2hpY2ggcm91bmRzIGl0KSwgdGhhdCBjb3VsZCByZXN1bHQgaW4gdGhlIHBsYXloZWFkIHNoaWZ0aW5nIGEgKip0aW55KiogYW1vdW50IGFuZCBhIHplcm8tZHVyYXRpb24gY2hpbGQgYXQgdGhhdCBzcG90IG1heSBnZXQgcmVuZGVyZWQgYXQgYSBkaWZmZXJlbnQgcmF0aW8sIGxpa2UgaXRzIHRvdGFsVGltZSBpbiByZW5kZXIoKSBtYXkgYmUgMWUtMTcgaW5zdGVhZCBvZiAwLCBmb3IgZXhhbXBsZS5cbiAgICBjcm9zc2luZ1N0YXJ0ID0gdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwICYmICh0aGlzLl9pbml0dGVkIHx8ICFkdXIpLFxuICAgICAgICB0aW1lLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2UGF1c2VkLFxuICAgICAgICBwYXVzZVR3ZWVuLFxuICAgICAgICB0aW1lU2NhbGUsXG4gICAgICAgIHByZXZTdGFydCxcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgeW95byxcbiAgICAgICAgaXNZb3lvO1xuICAgIHRoaXMgIT09IF9nbG9iYWxUaW1lbGluZSAmJiB0VGltZSA+IHREdXIgJiYgdG90YWxUaW1lID49IDAgJiYgKHRUaW1lID0gdER1cik7XG5cbiAgICBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8IGZvcmNlIHx8IGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSAmJiBkdXIpIHtcbiAgICAgICAgLy9pZiB0b3RhbER1cmF0aW9uKCkgZmluZHMgYSBjaGlsZCB3aXRoIGEgbmVnYXRpdmUgc3RhcnRUaW1lIGFuZCBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlLCB0aGluZ3MgZ2V0IHNoaWZ0ZWQgYXJvdW5kIGludGVybmFsbHkgc28gd2UgbmVlZCB0byBhZGp1c3QgdGhlIHRpbWUgYWNjb3JkaW5nbHkuIEZvciBleGFtcGxlLCBpZiBhIHR3ZWVuIHN0YXJ0cyBhdCAtMzAgd2UgbXVzdCBzaGlmdCBFVkVSWVRISU5HIGZvcndhcmQgMzAgc2Vjb25kcyBhbmQgbW92ZSB0aGlzIHRpbWVsaW5lJ3Mgc3RhcnRUaW1lIGJhY2t3YXJkIGJ5IDMwIHNlY29uZHMgc28gdGhhdCB0aGluZ3MgYWxpZ24gd2l0aCB0aGUgcGxheWhlYWQgKG5vIGp1bXApLlxuICAgICAgICB0VGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICAgIHRvdGFsVGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICB9XG5cbiAgICAgIHRpbWUgPSB0VGltZTtcbiAgICAgIHByZXZTdGFydCA9IHRoaXMuX3N0YXJ0O1xuICAgICAgdGltZVNjYWxlID0gdGhpcy5fdHM7XG4gICAgICBwcmV2UGF1c2VkID0gIXRpbWVTY2FsZTtcblxuICAgICAgaWYgKGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgICAgZHVyIHx8IChwcmV2VGltZSA9IHRoaXMuX3pUaW1lKTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0aW1lbGluZSwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC5cblxuICAgICAgICAodG90YWxUaW1lIHx8ICFzdXBwcmVzc0V2ZW50cykgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAvL2FkanVzdCB0aGUgdGltZSBmb3IgcmVwZWF0cyBhbmQgeW95b3NcbiAgICAgICAgeW95byA9IHRoaXMuX3lveW87XG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG4gICAgICAgICFwcmV2VGltZSAmJiB0aGlzLl90VGltZSAmJiBwcmV2SXRlcmF0aW9uICE9PSBpdGVyYXRpb24gJiYgdGhpcy5fdFRpbWUgLSBwcmV2SXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbiAtIHRoaXMuX2R1ciA8PSAwICYmIChwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uKTsgLy8gZWRnZSBjYXNlIC0gaWYgc29tZW9uZSBkb2VzIGFkZFBhdXNlKCkgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgcmVwZWF0aW5nIHRpbWVsaW5lLCB0aGF0IHBhdXNlIGlzIHRlY2huaWNhbGx5IGF0IHRoZSBzYW1lIHNwb3QgYXMgdGhlIGVuZCB3aGljaCBjYXVzZXMgdGhpcy5fdGltZSB0byBnZXQgc2V0IHRvIDAgd2hlbiB0aGUgdG90YWxUaW1lIHdvdWxkIG5vcm1hbGx5IHBsYWNlIHRoZSBwbGF5aGVhZCBhdCB0aGUgZW5kLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMzgyMy1jbG9zaW5nLW5hdi1hbmltYXRpb24tbm90LXdvcmtpbmctb24taWUtYW5kLWlwaG9uZS02LW1heWJlLW90aGVyLW9sZGVyLWJyb3dzZXIvP3RhYj1jb21tZW50cyNjb21tZW50LTExMzAwNSBhbHNvLCB0aGlzLl90VGltZSAtIHByZXZJdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uIC0gdGhpcy5fZHVyIDw9IDAganVzdCBjaGVja3MgdG8gbWFrZSBzdXJlIGl0IHdhc24ndCBwcmV2aW91c2x5IGluIHRoZSBcInJlcGVhdERlbGF5XCIgcG9ydGlvblxuXG4gICAgICAgIGlmICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpIHtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgICBpc1lveW8gPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIG1ha2Ugc3VyZSBjaGlsZHJlbiBhdCB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUgYXJlIHJlbmRlcmVkIHByb3Blcmx5LiBJZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgIGEgMy1zZWNvbmQgbG9uZyB0aW1lbGluZSByZW5kZXJlZCBhdCAyLjkgc2Vjb25kcyBwcmV2aW91c2x5LCBhbmQgbm93IHJlbmRlcnMgYXQgMy4yIHNlY29uZHMgKHdoaWNoXG4gICAgICAgIHdvdWxkIGdldCB0cmFuc2xhdGVkIHRvIDIuOCBzZWNvbmRzIGlmIHRoZSB0aW1lbGluZSB5b3lvcyBvciAwLjIgc2Vjb25kcyBpZiBpdCBqdXN0IHJlcGVhdHMpLCB0aGVyZVxuICAgICAgICBjb3VsZCBiZSBhIGNhbGxiYWNrIG9yIGEgc2hvcnQgdHdlZW4gdGhhdCdzIGF0IDIuOTUgb3IgMyBzZWNvbmRzIGluIHdoaWNoIHdvdWxkbid0IHJlbmRlci4gU29cbiAgICAgICAgd2UgbmVlZCB0byBwdXNoIHRoZSB0aW1lbGluZSB0byB0aGUgZW5kIChhbmQvb3IgYmVnaW5uaW5nIGRlcGVuZGluZyBvbiBpdHMgeW95byB2YWx1ZSkuIEFsc28gd2UgbXVzdFxuICAgICAgICBlbnN1cmUgdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBUaW1lbGluZSB3b3JrLlxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgIHZhciByZXdpbmRpbmcgPSB5b3lvICYmIHByZXZJdGVyYXRpb24gJiAxLFxuICAgICAgICAgICAgICBkb2VzV3JhcCA9IHJld2luZGluZyA9PT0gKHlveW8gJiYgaXRlcmF0aW9uICYgMSk7XG4gICAgICAgICAgaXRlcmF0aW9uIDwgcHJldkl0ZXJhdGlvbiAmJiAocmV3aW5kaW5nID0gIXJld2luZGluZyk7XG4gICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyAwIDogdFRpbWUgJSBkdXIgPyBkdXIgOiB0VGltZTsgLy8gaWYgdGhlIHBsYXloZWFkIGlzIGxhbmRpbmcgZXhhY3RseSBhdCB0aGUgZW5kIG9mIGFuIGl0ZXJhdGlvbiwgdXNlIHRoYXQgdG90YWxUaW1lIHJhdGhlciB0aGFuIG9ubHkgdGhlIGR1cmF0aW9uLCBvdGhlcndpc2UgaXQnbGwgc2tpcCB0aGUgMm5kIHJlbmRlciBzaW5jZSBpdCdzIGVmZmVjdGl2ZWx5IGF0IHRoZSBzYW1lIHRpbWUuXG5cbiAgICAgICAgICB0aGlzLl9sb2NrID0gMTtcbiAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSB8fCAoaXNZb3lvID8gMCA6IF9yb3VuZFByZWNpc2UoaXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbikpLCBzdXBwcmVzc0V2ZW50cywgIWR1cikuX2xvY2sgPSAwO1xuICAgICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7IC8vIGlmIGEgdXNlciBnZXRzIHRoZSBpdGVyYXRpb24oKSBpbnNpZGUgdGhlIG9uUmVwZWF0LCBmb3IgZXhhbXBsZSwgaXQgc2hvdWxkIGJlIGFjY3VyYXRlLlxuXG4gICAgICAgICAgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgKHRoaXMuaW52YWxpZGF0ZSgpLl9sb2NrID0gMSk7XG5cbiAgICAgICAgICBpZiAocHJldlRpbWUgJiYgcHJldlRpbWUgIT09IHRoaXMuX3RpbWUgfHwgcHJldlBhdXNlZCAhPT0gIXRoaXMuX3RzIHx8IHRoaXMudmFycy5vblJlcGVhdCAmJiAhdGhpcy5wYXJlbnQgJiYgIXRoaXMuX2FjdCkge1xuICAgICAgICAgICAgLy8gaWYgcHJldlRpbWUgaXMgMCBhbmQgd2UgcmVuZGVyIGF0IHRoZSB2ZXJ5IGVuZCwgX3RpbWUgd2lsbCBiZSB0aGUgZW5kLCB0aHVzIHdvbid0IG1hdGNoLiBTbyBpbiB0aGlzIGVkZ2UgY2FzZSwgcHJldlRpbWUgd29uJ3QgbWF0Y2ggX3RpbWUgYnV0IHRoYXQncyBva2F5LiBJZiBpdCBnZXRzIGtpbGxlZCBpbiB0aGUgb25SZXBlYXQsIGVqZWN0IGFzIHdlbGwuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkdXIgPSB0aGlzLl9kdXI7IC8vIGluIGNhc2UgdGhlIGR1cmF0aW9uIGNoYW5nZWQgaW4gdGhlIG9uUmVwZWF0XG5cbiAgICAgICAgICB0RHVyID0gdGhpcy5fdER1cjtcblxuICAgICAgICAgIGlmIChkb2VzV3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IDI7XG4gICAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IGR1ciA6IC0wLjAwMDE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmIHRoaXMuaW52YWxpZGF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xvY2sgPSAwO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSAvL2luIG9yZGVyIGZvciB5b3lvRWFzZSB0byB3b3JrIHByb3Blcmx5IHdoZW4gdGhlcmUncyBhIHN0YWdnZXIsIHdlIG11c3Qgc3dhcCBvdXQgdGhlIGVhc2UgaW4gZWFjaCBzdWItdHdlZW4uXG5cblxuICAgICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZSh0aGlzLCBpc1lveW8pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9oYXNQYXVzZSAmJiAhdGhpcy5fZm9yY2luZyAmJiB0aGlzLl9sb2NrIDwgMikge1xuICAgICAgICBwYXVzZVR3ZWVuID0gX2ZpbmROZXh0UGF1c2VUd2Vlbih0aGlzLCBfcm91bmRQcmVjaXNlKHByZXZUaW1lKSwgX3JvdW5kUHJlY2lzZSh0aW1lKSk7XG5cbiAgICAgICAgaWYgKHBhdXNlVHdlZW4pIHtcbiAgICAgICAgICB0VGltZSAtPSB0aW1lIC0gKHRpbWUgPSBwYXVzZVR3ZWVuLl9zdGFydCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgICAgdGhpcy5fYWN0ID0gIXRpbWVTY2FsZTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICB0aGlzLl9vblVwZGF0ZSA9IHRoaXMudmFycy5vblVwZGF0ZTtcbiAgICAgICAgdGhpcy5faW5pdHRlZCA9IDE7XG4gICAgICAgIHRoaXMuX3pUaW1lID0gdG90YWxUaW1lO1xuICAgICAgICBwcmV2VGltZSA9IDA7IC8vIHVwb24gaW5pdCwgdGhlIHBsYXloZWFkIHNob3VsZCBhbHdheXMgZ28gZm9yd2FyZDsgc29tZW9uZSBjb3VsZCBpbnZhbGlkYXRlKCkgYSBjb21wbGV0ZWQgdGltZWxpbmUgYW5kIHRoZW4gaWYgdGhleSByZXN0YXJ0KCksIHRoYXQgd291bGQgbWFrZSBjaGlsZCB0d2VlbnMgcmVuZGVyIGluIHJldmVyc2Ugb3JkZXIgd2hpY2ggY291bGQgbG9jayBpbiB0aGUgd3Jvbmcgc3RhcnRpbmcgdmFsdWVzIGlmIHRoZXkgYnVpbGQgb24gZWFjaCBvdGhlciwgbGlrZSB0bC50byhvYmosIHt4OiAxMDB9KS50byhvYmosIHt4OiAwfSkuXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJldlRpbWUgJiYgdGltZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgIWl0ZXJhdGlvbikge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lID49IHByZXZUaW1lICYmIHRvdGFsVGltZSA+PSAwKSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IC1fdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBmbGFnIHpUaW1lIGFzIG5lZ2F0aXZlIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9sYXN0O1xuICAgICAgICB2YXIgYWRqdXN0ZWRUaW1lID0gdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWU7IC8vd2hlbiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0IG9mIHRoaXMgdGltZWxpbmUsIHdlIG11c3QgcGFzcyB0aGF0IGluZm9ybWF0aW9uIGRvd24gdG8gdGhlIGNoaWxkIGFuaW1hdGlvbnMgc28gdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBrbm93IHdoZXRoZXIgdG8gcmVuZGVyIHRoZWlyIHN0YXJ0aW5nIG9yIGVuZGluZyB2YWx1ZXMuXG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9wcmV2O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IGFkanVzdGVkVGltZSA8PSBjaGlsZC5fZW5kKSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/IChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArIChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UgfHwgX3JldmVydGluZyAmJiAoY2hpbGQuX2luaXR0ZWQgfHwgY2hpbGQuX3N0YXJ0QXQpKTsgLy8gaWYgcmV2ZXJ0aW5nLCB3ZSBzaG91bGQgYWx3YXlzIGZvcmNlIHJlbmRlcnMgb2YgaW5pdHRlZCB0d2VlbnMgKGJ1dCByZW1lbWJlciB0aGF0IC5mcm9tVG8oKSBvciAuZnJvbSgpIG1heSBoYXZlIGEgX3N0YXJ0QXQgYnV0IG5vdCBfaW5pdHRlZCB5ZXQpLiBJZiwgZm9yIGV4YW1wbGUsIGEgLmZyb21UbygpIHR3ZWVuIHdpdGggYSBzdGFnZ2VyICh3aGljaCBjcmVhdGVzIGFuIGludGVybmFsIHRpbWVsaW5lKSBnZXRzIHJldmVydGVkIEJFRk9SRSBzb21lIG9mIGl0cyBjaGlsZCB0d2VlbnMgcmVuZGVyIGZvciB0aGUgZmlyc3QgdGltZSwgaXQgbWF5IG5vdCBwcm9wZXJseSB0cmlnZ2VyIHRoZW0gdG8gcmV2ZXJ0LlxuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSBhZGp1c3RlZFRpbWUgPyAtX3RpbnlOdW0gOiBfdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBhZGp1c3QgelRpbWUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXVzZVR3ZWVuICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHBhdXNlVHdlZW4ucmVuZGVyKHRpbWUgPj0gcHJldlRpbWUgPyAwIDogLV90aW55TnVtKS5felRpbWUgPSB0aW1lID49IHByZXZUaW1lID8gMSA6IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLl90cykge1xuICAgICAgICAgIC8vdGhlIGNhbGxiYWNrIHJlc3VtZWQgcGxheWJhY2shIFNvIHNpbmNlIHdlIG1heSBoYXZlIGhlbGQgYmFjayB0aGUgcGxheWhlYWQgZHVlIHRvIHdoZXJlIHRoZSBwYXVzZSBpcyBwb3NpdGlvbmVkLCBnbyBhaGVhZCBhbmQganVtcCB0byB3aGVyZSBpdCdzIFNVUFBPU0VEIHRvIGJlIChpZiBubyBwYXVzZSBoYXBwZW5lZCkuXG4gICAgICAgICAgdGhpcy5fc3RhcnQgPSBwcmV2U3RhcnQ7IC8vaWYgdGhlIHBhdXNlIHdhcyBhdCBhbiBlYXJsaWVyIHRpbWUgYW5kIHRoZSB1c2VyIHJlc3VtZWQgaW4gdGhlIGNhbGxiYWNrLCBpdCBjb3VsZCByZXBvc2l0aW9uIHRoZSB0aW1lbGluZSAoY2hhbmdpbmcgaXRzIHN0YXJ0VGltZSksIHRocm93aW5nIHRoaW5ncyBvZmYgc2xpZ2h0bHksIHNvIHdlIG1ha2Ugc3VyZSB0aGUgX3N0YXJ0IGRvZXNuJ3Qgc2hpZnQuXG5cbiAgICAgICAgICBfc2V0RW5kKHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIiwgdHJ1ZSk7XG4gICAgICBpZiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdFRpbWUgPj0gdGhpcy50b3RhbER1cmF0aW9uKCkgfHwgIXRUaW1lICYmIHByZXZUaW1lKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydCB8fCBNYXRoLmFicyh0aW1lU2NhbGUpICE9PSBNYXRoLmFicyh0aGlzLl90cykpIGlmICghdGhpcy5fbG9jaykge1xuICAgICAgICAvLyByZW1lbWJlciwgYSBjaGlsZCdzIGNhbGxiYWNrIG1heSBhbHRlciB0aGlzIHRpbWVsaW5lJ3MgcGxheWhlYWQgb3IgdGltZVNjYWxlIHdoaWNoIGlzIHdoeSB3ZSBuZWVkIHRvIGFkZCBzb21lIG9mIHRoZXNlIGNoZWNrcy5cbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSB8fCAhdER1cikpIHtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgJiYgdG90YWxUaW1lID49IDAgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZCA9IGZ1bmN0aW9uIGFkZChjaGlsZCwgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9pc051bWJlcihwb3NpdGlvbikgfHwgKHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24sIGNoaWxkKSk7XG5cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEFuaW1hdGlvbikpIHtcbiAgICAgIGlmIChfaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5hZGQob2JqLCBwb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGFiZWwoY2hpbGQsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICBjaGlsZCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzICE9PSBjaGlsZCA/IF9hZGRUb1RpbWVsaW5lKHRoaXMsIGNoaWxkLCBwb3NpdGlvbikgOiB0aGlzOyAvL2Rvbid0IGFsbG93IGEgdGltZWxpbmUgdG8gYmUgYWRkZWQgdG8gaXRzZWxmIGFzIGEgY2hpbGQhXG4gIH07XG5cbiAgX3Byb3RvMi5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKG5lc3RlZCwgdHdlZW5zLCB0aW1lbGluZXMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAobmVzdGVkID09PSB2b2lkIDApIHtcbiAgICAgIG5lc3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR3ZWVucyA9PT0gdm9pZCAwKSB7XG4gICAgICB0d2VlbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aW1lbGluZXMgPT09IHZvaWQgMCkge1xuICAgICAgdGltZWxpbmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gLV9iaWdOdW07XG4gICAgfVxuXG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgdHdlZW5zICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZWxpbmVzICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgbmVzdGVkICYmIGEucHVzaC5hcHBseShhLCBjaGlsZC5nZXRDaGlsZHJlbih0cnVlLCB0d2VlbnMsIHRpbWVsaW5lcykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRCeUlkID0gZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlbigxLCAxLCAxKSxcbiAgICAgICAgaSA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGFuaW1hdGlvbnNbaV0udmFycy5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUxhYmVsKGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5raWxsVHdlZW5zT2YoY2hpbGQpO1xuICAgIH1cblxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBjaGlsZCk7XG5cbiAgICBpZiAoY2hpbGQgPT09IHRoaXMuX3JlY2VudCkge1xuICAgICAgdGhpcy5fcmVjZW50ID0gdGhpcy5fbGFzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9yY2luZyA9IDE7XG5cbiAgICBpZiAoIXRoaXMuX2RwICYmIHRoaXMuX3RzKSB7XG4gICAgICAvL3NwZWNpYWwgY2FzZSBmb3IgdGhlIGdsb2JhbCB0aW1lbGluZSAob3IgYW55IG90aGVyIHRoYXQgaGFzIG5vIHBhcmVudCBvciBkZXRhY2hlZCBwYXJlbnQpLlxuICAgICAgdGhpcy5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKF90aWNrZXIudGltZSAtICh0aGlzLl90cyA+IDAgPyBfdG90YWxUaW1lMiAvIHRoaXMuX3RzIDogKHRoaXMudG90YWxEdXJhdGlvbigpIC0gX3RvdGFsVGltZTIpIC8gLXRoaXMuX3RzKSk7XG4gICAgfVxuXG4gICAgX0FuaW1hdGlvbi5wcm90b3R5cGUudG90YWxUaW1lLmNhbGwodGhpcywgX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKTtcblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkTGFiZWwgPSBmdW5jdGlvbiBhZGRMYWJlbChsYWJlbCwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmxhYmVsc1tsYWJlbF0gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGxhYmVsKSB7XG4gICAgZGVsZXRlIHRoaXMubGFiZWxzW2xhYmVsXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZFBhdXNlID0gZnVuY3Rpb24gYWRkUGF1c2UocG9zaXRpb24sIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrIHx8IF9lbXB0eUZ1bmMsIHBhcmFtcyk7XG4gICAgdC5kYXRhID0gXCJpc1BhdXNlXCI7XG4gICAgdGhpcy5faGFzUGF1c2UgPSAxO1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCB0LCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlUGF1c2UgPSBmdW5jdGlvbiByZW1vdmVQYXVzZShwb3NpdGlvbikge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuICAgIHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID09PSBwb3NpdGlvbiAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIikge1xuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIHR3ZWVucyA9IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSksXG4gICAgICAgIGkgPSB0d2VlbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gIT09IHR3ZWVuc1tpXSAmJiB0d2VlbnNbaV0ua2lsbCh0YXJnZXRzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRUd2VlbnNPZiA9IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgaXNHbG9iYWxUaW1lID0gX2lzTnVtYmVyKG9ubHlBY3RpdmUpLFxuICAgICAgICAvLyBhIG51bWJlciBpcyBpbnRlcnByZXRlZCBhcyBhIGdsb2JhbCB0aW1lLiBJZiB0aGUgYW5pbWF0aW9uIHNwYW5zXG4gICAgY2hpbGRyZW47XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgIGlmIChfYXJyYXlDb250YWluc0FueShjaGlsZC5fdGFyZ2V0cywgcGFyc2VkVGFyZ2V0cykgJiYgKGlzR2xvYmFsVGltZSA/ICghX292ZXJ3cml0aW5nVHdlZW4gfHwgY2hpbGQuX2luaXR0ZWQgJiYgY2hpbGQuX3RzKSAmJiBjaGlsZC5nbG9iYWxUaW1lKDApIDw9IG9ubHlBY3RpdmUgJiYgY2hpbGQuZ2xvYmFsVGltZShjaGlsZC50b3RhbER1cmF0aW9uKCkpID4gb25seUFjdGl2ZSA6ICFvbmx5QWN0aXZlIHx8IGNoaWxkLmlzQWN0aXZlKCkpKSB7XG4gICAgICAgICAgLy8gbm90ZTogaWYgdGhpcyBpcyBmb3Igb3ZlcndyaXRpbmcsIGl0IHNob3VsZCBvbmx5IGJlIGZvciB0d2VlbnMgdGhhdCBhcmVuJ3QgcGF1c2VkIGFuZCBhcmUgaW5pdHRlZC5cbiAgICAgICAgICBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHJlbiA9IGNoaWxkLmdldFR3ZWVuc09mKHBhcnNlZFRhcmdldHMsIG9ubHlBY3RpdmUpKS5sZW5ndGgpIHtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGZlYXR1cmUgLSB0YXJnZXRzKCkgb24gdGltZWxpbmVzXG4gIC8vIHRhcmdldHMoKSB7XG4gIC8vIFx0bGV0IHJlc3VsdCA9IFtdO1xuICAvLyBcdHRoaXMuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpLmZvckVhY2godCA9PiByZXN1bHQucHVzaCguLi50LnRhcmdldHMoKSkpO1xuICAvLyBcdHJldHVybiByZXN1bHQuZmlsdGVyKCh2LCBpKSA9PiByZXN1bHQuaW5kZXhPZih2KSA9PT0gaSk7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90bzIudHdlZW5UbyA9IGZ1bmN0aW9uIHR3ZWVuVG8ocG9zaXRpb24sIHZhcnMpIHtcbiAgICB2YXJzID0gdmFycyB8fCB7fTtcblxuICAgIHZhciB0bCA9IHRoaXMsXG4gICAgICAgIGVuZFRpbWUgPSBfcGFyc2VQb3NpdGlvbih0bCwgcG9zaXRpb24pLFxuICAgICAgICBfdmFycyA9IHZhcnMsXG4gICAgICAgIHN0YXJ0QXQgPSBfdmFycy5zdGFydEF0LFxuICAgICAgICBfb25TdGFydCA9IF92YXJzLm9uU3RhcnQsXG4gICAgICAgIG9uU3RhcnRQYXJhbXMgPSBfdmFycy5vblN0YXJ0UGFyYW1zLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIGluaXR0ZWQsXG4gICAgICAgIHR3ZWVuID0gVHdlZW4udG8odGwsIF9zZXREZWZhdWx0cyh7XG4gICAgICBlYXNlOiB2YXJzLmVhc2UgfHwgXCJub25lXCIsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICB0aW1lOiBlbmRUaW1lLFxuICAgICAgb3ZlcndyaXRlOiBcImF1dG9cIixcbiAgICAgIGR1cmF0aW9uOiB2YXJzLmR1cmF0aW9uIHx8IE1hdGguYWJzKChlbmRUaW1lIC0gKHN0YXJ0QXQgJiYgXCJ0aW1lXCIgaW4gc3RhcnRBdCA/IHN0YXJ0QXQudGltZSA6IHRsLl90aW1lKSkgLyB0bC50aW1lU2NhbGUoKSkgfHwgX3RpbnlOdW0sXG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgICAgICB0bC5wYXVzZSgpO1xuXG4gICAgICAgIGlmICghaW5pdHRlZCkge1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKTtcbiAgICAgICAgICB0d2Vlbi5fZHVyICE9PSBkdXJhdGlvbiAmJiBfc2V0RHVyYXRpb24odHdlZW4sIGR1cmF0aW9uLCAwLCAxKS5yZW5kZXIodHdlZW4uX3RpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGluaXR0ZWQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgX29uU3RhcnQgJiYgX29uU3RhcnQuYXBwbHkodHdlZW4sIG9uU3RhcnRQYXJhbXMgfHwgW10pOyAvL2luIGNhc2UgdGhlIHVzZXIgaGFkIGFuIG9uU3RhcnQgaW4gdGhlIHZhcnMgLSB3ZSBkb24ndCB3YW50IHRvIG92ZXJ3cml0ZSBpdC5cbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUmVuZGVyID8gdHdlZW4ucmVuZGVyKDApIDogdHdlZW47XG4gIH07XG5cbiAgX3Byb3RvMi50d2VlbkZyb21UbyA9IGZ1bmN0aW9uIHR3ZWVuRnJvbVRvKGZyb21Qb3NpdGlvbiwgdG9Qb3NpdGlvbiwgdmFycykge1xuICAgIHJldHVybiB0aGlzLnR3ZWVuVG8odG9Qb3NpdGlvbiwgX3NldERlZmF1bHRzKHtcbiAgICAgIHN0YXJ0QXQ6IHtcbiAgICAgICAgdGltZTogX3BhcnNlUG9zaXRpb24odGhpcywgZnJvbVBvc2l0aW9uKVxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlY2VudCA9IGZ1bmN0aW9uIHJlY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjZW50O1xuICB9O1xuXG4gIF9wcm90bzIubmV4dExhYmVsID0gZnVuY3Rpb24gbmV4dExhYmVsKGFmdGVyVGltZSkge1xuICAgIGlmIChhZnRlclRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYWZ0ZXJUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYWZ0ZXJUaW1lKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5wcmV2aW91c0xhYmVsID0gZnVuY3Rpb24gcHJldmlvdXNMYWJlbChiZWZvcmVUaW1lKSB7XG4gICAgaWYgKGJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYmVmb3JlVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGJlZm9yZVRpbWUpLCAxKTtcbiAgfTtcblxuICBfcHJvdG8yLmN1cnJlbnRMYWJlbCA9IGZ1bmN0aW9uIGN1cnJlbnRMYWJlbCh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5zZWVrKHZhbHVlLCB0cnVlKSA6IHRoaXMucHJldmlvdXNMYWJlbCh0aGlzLl90aW1lICsgX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90bzIuc2hpZnRDaGlsZHJlbiA9IGZ1bmN0aW9uIHNoaWZ0Q2hpbGRyZW4oYW1vdW50LCBhZGp1c3RMYWJlbHMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gMDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbGFiZWxzID0gdGhpcy5sYWJlbHMsXG4gICAgICAgIHA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBjaGlsZC5fc3RhcnQgKz0gYW1vdW50O1xuICAgICAgICBjaGlsZC5fZW5kICs9IGFtb3VudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAoYWRqdXN0TGFiZWxzKSB7XG4gICAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICAgIGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGxhYmVsc1twXSArPSBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZShzb2Z0KSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLmludmFsaWRhdGUoc29mdCk7XG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBfQW5pbWF0aW9uLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcywgc29mdCk7XG4gIH07XG5cbiAgX3Byb3RvMi5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGluY2x1ZGVMYWJlbHMpIHtcbiAgICBpZiAoaW5jbHVkZUxhYmVscyA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlTGFiZWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbmV4dDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuICAgICAgdGhpcy5yZW1vdmUoY2hpbGQpO1xuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIHRoaXMuX2RwICYmICh0aGlzLl90aW1lID0gdGhpcy5fdFRpbWUgPSB0aGlzLl9wVGltZSA9IDApO1xuICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG1heCA9IDAsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgIHByZXZTdGFydCA9IF9iaWdOdW0sXG4gICAgICAgIHByZXYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBwYXJlbnQ7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuX2RpcnR5KSB7XG4gICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHByZXYgPSBjaGlsZC5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBpbiBjYXNlIHRoZSB0d2VlbiBjaGFuZ2VzIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS4uLlxuXG4gICAgICAgIGNoaWxkLl9kaXJ0eSAmJiBjaGlsZC50b3RhbER1cmF0aW9uKCk7IC8vY291bGQgY2hhbmdlIHRoZSB0d2Vlbi5fc3RhcnRUaW1lLCBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbidzIGNhY2hlIGlzIGNsZWFuIGJlZm9yZSBhbmFseXppbmcgaXQuXG5cbiAgICAgICAgc3RhcnQgPSBjaGlsZC5fc3RhcnQ7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gcHJldlN0YXJ0ICYmIHNlbGYuX3NvcnQgJiYgY2hpbGQuX3RzICYmICFzZWxmLl9sb2NrKSB7XG4gICAgICAgICAgLy9pbiBjYXNlIG9uZSBvZiB0aGUgdHdlZW5zIHNoaWZ0ZWQgb3V0IG9mIG9yZGVyLCBpdCBuZWVkcyB0byBiZSByZS1pbnNlcnRlZCBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZVxuICAgICAgICAgIHNlbGYuX2xvY2sgPSAxOyAvL3ByZXZlbnQgZW5kbGVzcyByZWN1cnNpdmUgY2FsbHMgLSB0aGVyZSBhcmUgbWV0aG9kcyB0aGF0IGdldCB0cmlnZ2VyZWQgdGhhdCBjaGVjayBkdXJhdGlvbi90b3RhbER1cmF0aW9uIHdoZW4gd2UgYWRkKCkuXG5cbiAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2U3RhcnQgPSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCA8IDAgJiYgY2hpbGQuX3RzKSB7XG4gICAgICAgICAgLy9jaGlsZHJlbiBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIG5lZ2F0aXZlIHN0YXJ0VGltZXMgdW5sZXNzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHNvIGFkanVzdCBoZXJlIGlmIG9uZSBpcyBmb3VuZC5cbiAgICAgICAgICBtYXggLT0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiAoIXBhcmVudCAmJiAhc2VsZi5fZHAgfHwgcGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZykge1xuICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gc3RhcnQgLyBzZWxmLl90cztcbiAgICAgICAgICAgIHNlbGYuX3RpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICBzZWxmLl90VGltZSAtPSBzdGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnNoaWZ0Q2hpbGRyZW4oLXN0YXJ0LCBmYWxzZSwgLTFlOTk5KTtcbiAgICAgICAgICBwcmV2U3RhcnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuX2VuZCA+IG1heCAmJiBjaGlsZC5fdHMgJiYgKG1heCA9IGNoaWxkLl9lbmQpO1xuICAgICAgICBjaGlsZCA9IHByZXY7XG4gICAgICB9XG5cbiAgICAgIF9zZXREdXJhdGlvbihzZWxmLCBzZWxmID09PSBfZ2xvYmFsVGltZWxpbmUgJiYgc2VsZi5fdGltZSA+IG1heCA/IHNlbGYuX3RpbWUgOiBtYXgsIDEsIDEpO1xuXG4gICAgICBzZWxmLl9kaXJ0eSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuX3REdXI7XG4gIH07XG5cbiAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgIGlmIChfZ2xvYmFsVGltZWxpbmUuX3RzKSB7XG4gICAgICBfbGF6eVNhZmVSZW5kZXIoX2dsb2JhbFRpbWVsaW5lLCBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lLCBfZ2xvYmFsVGltZWxpbmUpKTtcblxuICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHtcbiAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICB2YXIgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQuX3RzKSBpZiAoX2NvbmZpZy5hdXRvU2xlZXAgJiYgX3RpY2tlci5fbGlzdGVuZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGltZWxpbmU7XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgX2xvY2s6IDAsXG4gIF9oYXNQYXVzZTogMCxcbiAgX2ZvcmNpbmc6IDBcbn0pO1xuXG52YXIgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBudWxsLCBzZXR0ZXIpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydE51bXMsXG4gICAgICBjb2xvcixcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBoYXNSYW5kb20sXG4gICAgICBhO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChoYXNSYW5kb20gPSB+ZW5kLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgfVxuXG4gIGlmIChzdHJpbmdGaWx0ZXIpIHtcbiAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgIHN0cmluZ0ZpbHRlcihhLCB0YXJnZXQsIHByb3ApOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cbiAgICBzdGFydCA9IGFbMF07XG4gICAgZW5kID0gYVsxXTtcbiAgfVxuXG4gIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICB3aGlsZSAocmVzdWx0ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAuZXhlYyhlbmQpKSB7XG4gICAgZW5kTnVtID0gcmVzdWx0WzBdO1xuICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgIGNvbG9yID0gMTtcbiAgICB9XG5cbiAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0TnVtc1ttYXRjaEluZGV4IC0gMV0pIHx8IDA7IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuICAgICAgcHQuX3B0ID0ge1xuICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgLy9ub3RlOiBTVkcgc3BlYyBhbGxvd3Mgb21pc3Npb24gb2YgY29tbWEvc3BhY2Ugd2hlbiBhIG5lZ2F0aXZlIHNpZ24gaXMgd2VkZ2VkIGJldHdlZW4gdHdvIG51bWJlcnMsIGxpa2UgMi41LTUuMyBpbnN0ZWFkIG9mIDIuNSwtNS4zIGJ1dCB3aGVuIHR3ZWVuaW5nLCB0aGUgbmVnYXRpdmUgdmFsdWUgbWF5IHN3aXRjaCB0byBwb3NpdGl2ZSwgc28gd2UgaW5zZXJ0IHRoZSBjb21tYSBqdXN0IGluIGNhc2UuXG4gICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICBjOiBlbmROdW0uY2hhckF0KDEpID09PSBcIj1cIiA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCBlbmROdW0pIC0gc3RhcnROdW0gOiBwYXJzZUZsb2F0KGVuZE51bSkgLSBzdGFydE51bSxcbiAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgIH07XG4gICAgICBpbmRleCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmxhc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG5cbiAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgaWYgKF9yZWxFeHAudGVzdChlbmQpIHx8IGhhc1JhbmRvbSkge1xuICAgIHB0LmUgPSAwOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG4gIH1cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFByb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIGluZGV4LCB0YXJnZXRzLCBtb2RpZmllciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0sIG9wdGlvbmFsKSB7XG4gIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRhcmdldFtwcm9wXSxcbiAgICAgIHBhcnNlZFN0YXJ0ID0gc3RhcnQgIT09IFwiZ2V0XCIgPyBzdGFydCA6ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gY3VycmVudFZhbHVlIDogZnVuY1BhcmFtID8gdGFyZ2V0W3Byb3AuaW5kZXhPZihcInNldFwiKSB8fCAhX2lzRnVuY3Rpb24odGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0oZnVuY1BhcmFtKSA6IHRhcmdldFtwcm9wXSgpLFxuICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgcHQ7XG5cbiAgaWYgKF9pc1N0cmluZyhlbmQpKSB7XG4gICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICBwdCA9IF9wYXJzZVJlbGF0aXZlKHBhcnNlZFN0YXJ0LCBlbmQpICsgKGdldFVuaXQocGFyc2VkU3RhcnQpIHx8IDApO1xuXG4gICAgICBpZiAocHQgfHwgcHQgPT09IDApIHtcbiAgICAgICAgLy8gdG8gYXZvaWQgaXNOYU4sIGxpa2UgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB2YWx1ZSBsaWtlIFwiIT0gd2hhdGV2ZXJcIlxuICAgICAgICBlbmQgPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIW9wdGlvbmFsIHx8IHBhcnNlZFN0YXJ0ICE9PSBlbmQgfHwgX2ZvcmNlQWxsUHJvcFR3ZWVucykge1xuICAgIGlmICghaXNOYU4ocGFyc2VkU3RhcnQgKiBlbmQpICYmIGVuZCAhPT0gXCJcIikge1xuICAgICAgLy8gZnVuIGZhY3Q6IGFueSBudW1iZXIgbXVsdGlwbGllZCBieSBcIlwiIGlzIGV2YWx1YXRlZCBhcyB0aGUgbnVtYmVyIDAhXG4gICAgICBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgK3BhcnNlZFN0YXJ0IHx8IDAsIGVuZCAtIChwYXJzZWRTdGFydCB8fCAwKSwgdHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gXCJib29sZWFuXCIgPyBfcmVuZGVyQm9vbGVhbiA6IF9yZW5kZXJQbGFpbiwgMCwgc2V0dGVyKTtcbiAgICAgIGZ1bmNQYXJhbSAmJiAocHQuZnAgPSBmdW5jUGFyYW0pO1xuICAgICAgbW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHRoaXMsIHRhcmdldCk7XG4gICAgICByZXR1cm4gdGhpcy5fcHQgPSBwdDtcbiAgICB9XG5cbiAgICAhY3VycmVudFZhbHVlICYmICEocHJvcCBpbiB0YXJnZXQpICYmIF9taXNzaW5nUGx1Z2luKHByb3AsIGVuZCk7XG4gICAgcmV0dXJuIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodGhpcywgdGFyZ2V0LCBwcm9wLCBwYXJzZWRTdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciB8fCBfY29uZmlnLnN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKTtcbiAgfVxufSxcbiAgICAvL2NyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2YXJzIG9iamVjdCBhbmQgcHJvY2Vzc2VzIGFueSBmdW5jdGlvbi1iYXNlZCB2YWx1ZXMgKHB1dHRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgZGlyZWN0bHkgaW50byB0aGUgY29weSkgYXMgd2VsbCBhcyBzdHJpbmdzIHdpdGggXCJyYW5kb20oKVwiIGluIHRoZW0uIEl0IGRvZXMgTk9UIHByb2Nlc3MgcmVsYXRpdmUgdmFsdWVzLlxuX3Byb2Nlc3NWYXJzID0gZnVuY3Rpb24gX3Byb2Nlc3NWYXJzKHZhcnMsIGluZGV4LCB0YXJnZXQsIHRhcmdldHMsIHR3ZWVuKSB7XG4gIF9pc0Z1bmN0aW9uKHZhcnMpICYmICh2YXJzID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSk7XG5cbiAgaWYgKCFfaXNPYmplY3QodmFycykgfHwgdmFycy5zdHlsZSAmJiB2YXJzLm5vZGVUeXBlIHx8IF9pc0FycmF5KHZhcnMpIHx8IF9pc1R5cGVkQXJyYXkodmFycykpIHtcbiAgICByZXR1cm4gX2lzU3RyaW5nKHZhcnMpID8gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSA6IHZhcnM7XG4gIH1cblxuICB2YXIgY29weSA9IHt9LFxuICAgICAgcDtcblxuICBmb3IgKHAgaW4gdmFycykge1xuICAgIGNvcHlbcF0gPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFyc1twXSwgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9jaGVja1BsdWdpbiA9IGZ1bmN0aW9uIF9jaGVja1BsdWdpbihwcm9wZXJ0eSwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgdmFyIHBsdWdpbiwgcHQsIHB0TG9va3VwLCBpO1xuXG4gIGlmIChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgKHBsdWdpbiA9IG5ldyBfcGx1Z2luc1twcm9wZXJ0eV0oKSkuaW5pdCh0YXJnZXQsIHBsdWdpbi5yYXdWYXJzID8gdmFyc1twcm9wZXJ0eV0gOiBfcHJvY2Vzc1ZhcnModmFyc1twcm9wZXJ0eV0sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMsIHR3ZWVuKSwgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICBpZiAodHdlZW4gIT09IF9xdWlja1R3ZWVuKSB7XG4gICAgICBwdExvb2t1cCA9IHR3ZWVuLl9wdExvb2t1cFt0d2Vlbi5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCldOyAvL25vdGU6IHdlIGNhbid0IHVzZSB0d2Vlbi5fcHRMb29rdXBbaW5kZXhdIGJlY2F1c2UgZm9yIHN0YWdnZXJlZCB0d2VlbnMsIHRoZSBpbmRleCBmcm9tIHRoZSBmdWxsVGFyZ2V0cyBhcnJheSB3b24ndCBtYXRjaCB3aGF0IGl0IGlzIGluIGVhY2ggaW5kaXZpZHVhbCB0d2VlbiB0aGF0IHNwYXducyBmcm9tIHRoZSBzdGFnZ2VyLlxuXG4gICAgICBpID0gcGx1Z2luLl9wcm9wcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgcHRMb29rdXBbcGx1Z2luLl9wcm9wc1tpXV0gPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGx1Z2luO1xufSxcbiAgICBfb3ZlcndyaXRpbmdUd2VlbixcbiAgICAvL3N0b3JlIGEgcmVmZXJlbmNlIHRlbXBvcmFyaWx5IHNvIHdlIGNhbiBhdm9pZCBvdmVyd3JpdGluZyBpdHNlbGYuXG5fZm9yY2VBbGxQcm9wVHdlZW5zLFxuICAgIF9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lLCB0VGltZSkge1xuICB2YXIgdmFycyA9IHR3ZWVuLnZhcnMsXG4gICAgICBlYXNlID0gdmFycy5lYXNlLFxuICAgICAgc3RhcnRBdCA9IHZhcnMuc3RhcnRBdCxcbiAgICAgIGltbWVkaWF0ZVJlbmRlciA9IHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgbGF6eSA9IHZhcnMubGF6eSxcbiAgICAgIG9uVXBkYXRlID0gdmFycy5vblVwZGF0ZSxcbiAgICAgIG9uVXBkYXRlUGFyYW1zID0gdmFycy5vblVwZGF0ZVBhcmFtcyxcbiAgICAgIGNhbGxiYWNrU2NvcGUgPSB2YXJzLmNhbGxiYWNrU2NvcGUsXG4gICAgICBydW5CYWNrd2FyZHMgPSB2YXJzLnJ1bkJhY2t3YXJkcyxcbiAgICAgIHlveW9FYXNlID0gdmFycy55b3lvRWFzZSxcbiAgICAgIGtleWZyYW1lcyA9IHZhcnMua2V5ZnJhbWVzLFxuICAgICAgYXV0b1JldmVydCA9IHZhcnMuYXV0b1JldmVydCxcbiAgICAgIGR1ciA9IHR3ZWVuLl9kdXIsXG4gICAgICBwcmV2U3RhcnRBdCA9IHR3ZWVuLl9zdGFydEF0LFxuICAgICAgdGFyZ2V0cyA9IHR3ZWVuLl90YXJnZXRzLFxuICAgICAgcGFyZW50ID0gdHdlZW4ucGFyZW50LFxuICAgICAgZnVsbFRhcmdldHMgPSBwYXJlbnQgJiYgcGFyZW50LmRhdGEgPT09IFwibmVzdGVkXCIgPyBwYXJlbnQudmFycy50YXJnZXRzIDogdGFyZ2V0cyxcbiAgICAgIGF1dG9PdmVyd3JpdGUgPSB0d2Vlbi5fb3ZlcndyaXRlID09PSBcImF1dG9cIiAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcyxcbiAgICAgIHRsID0gdHdlZW4udGltZWxpbmUsXG4gICAgICBjbGVhblZhcnMsXG4gICAgICBpLFxuICAgICAgcCxcbiAgICAgIHB0LFxuICAgICAgdGFyZ2V0LFxuICAgICAgaGFzUHJpb3JpdHksXG4gICAgICBnc0RhdGEsXG4gICAgICBoYXJuZXNzLFxuICAgICAgcGx1Z2luLFxuICAgICAgcHRMb29rdXAsXG4gICAgICBpbmRleCxcbiAgICAgIGhhcm5lc3NWYXJzLFxuICAgICAgb3ZlcndyaXR0ZW47XG4gIHRsICYmICgha2V5ZnJhbWVzIHx8ICFlYXNlKSAmJiAoZWFzZSA9IFwibm9uZVwiKTtcbiAgdHdlZW4uX2Vhc2UgPSBfcGFyc2VFYXNlKGVhc2UsIF9kZWZhdWx0cy5lYXNlKTtcbiAgdHdlZW4uX3lFYXNlID0geW95b0Vhc2UgPyBfaW52ZXJ0RWFzZShfcGFyc2VFYXNlKHlveW9FYXNlID09PSB0cnVlID8gZWFzZSA6IHlveW9FYXNlLCBfZGVmYXVsdHMuZWFzZSkpIDogMDtcblxuICBpZiAoeW95b0Vhc2UgJiYgdHdlZW4uX3lveW8gJiYgIXR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvL3RoZXJlIG11c3QgaGF2ZSBiZWVuIGEgcGFyZW50IHRpbWVsaW5lIHdpdGggeW95bzp0cnVlIHRoYXQgaXMgY3VycmVudGx5IGluIGl0cyB5b3lvIHBoYXNlLCBzbyBmbGlwIHRoZSBlYXNlcy5cbiAgICB5b3lvRWFzZSA9IHR3ZWVuLl95RWFzZTtcbiAgICB0d2Vlbi5feUVhc2UgPSB0d2Vlbi5fZWFzZTtcbiAgICB0d2Vlbi5fZWFzZSA9IHlveW9FYXNlO1xuICB9XG5cbiAgdHdlZW4uX2Zyb20gPSAhdGwgJiYgISF2YXJzLnJ1bkJhY2t3YXJkczsgLy9uZXN0ZWQgdGltZWxpbmVzIHNob3VsZCBuZXZlciBydW4gYmFja3dhcmRzIC0gdGhlIGJhY2t3YXJkcy1uZXNzIGlzIGluIHRoZSBjaGlsZCB0d2VlbnMuXG5cbiAgaWYgKCF0bCB8fCBrZXlmcmFtZXMgJiYgIXZhcnMuc3RhZ2dlcikge1xuICAgIC8vaWYgdGhlcmUncyBhbiBpbnRlcm5hbCB0aW1lbGluZSwgc2tpcCBhbGwgdGhlIHBhcnNpbmcgYmVjYXVzZSB3ZSBwYXNzZWQgdGhhdCB0YXNrIGRvd24gdGhlIGNoYWluLlxuICAgIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwO1xuICAgIGhhcm5lc3NWYXJzID0gaGFybmVzcyAmJiB2YXJzW2hhcm5lc3MucHJvcF07IC8vc29tZW9uZSBtYXkgbmVlZCB0byBzcGVjaWZ5IENTUy1zcGVjaWZpYyB2YWx1ZXMgQU5EIG5vbi1DU1MgdmFsdWVzLCBsaWtlIGlmIHRoZSBlbGVtZW50IGhhcyBhbiBcInhcIiBwcm9wZXJ0eSBwbHVzIGl0J3MgYSBzdGFuZGFyZCBET00gZWxlbWVudC4gV2UgYWxsb3cgcGVvcGxlIHRvIGRpc3Rpbmd1aXNoIGJ5IHdyYXBwaW5nIHBsdWdpbi1zcGVjaWZpYyBzdHVmZiBpbiBhIGNzczp7fSBvYmplY3QgZm9yIGV4YW1wbGUuXG5cbiAgICBjbGVhblZhcnMgPSBfY29weUV4Y2x1ZGluZyh2YXJzLCBfcmVzZXJ2ZWRQcm9wcyk7XG5cbiAgICBpZiAocHJldlN0YXJ0QXQpIHtcbiAgICAgIHByZXZTdGFydEF0Ll96VGltZSA8IDAgJiYgcHJldlN0YXJ0QXQucHJvZ3Jlc3MoMSk7IC8vIGluIGNhc2UgaXQncyBhIGxhenkgc3RhcnRBdCB0aGF0IGhhc24ndCByZW5kZXJlZCB5ZXQuXG5cbiAgICAgIHRpbWUgPCAwICYmIHJ1bkJhY2t3YXJkcyAmJiBpbW1lZGlhdGVSZW5kZXIgJiYgIWF1dG9SZXZlcnQgPyBwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpIDogcHJldlN0YXJ0QXQucmV2ZXJ0KHJ1bkJhY2t3YXJkcyAmJiBkdXIgPyBfcmV2ZXJ0Q29uZmlnTm9LaWxsIDogX3N0YXJ0QXRSZXZlcnRDb25maWcpOyAvLyBpZiBpdCdzIGEgXCJzdGFydEF0XCIgKG5vdCBcImZyb20oKVwiIG9yIHJ1bkJhY2t3YXJkczogdHJ1ZSksIHdlIG9ubHkgbmVlZCB0byBkbyBhIHNoYWxsb3cgcmV2ZXJ0IChrZWVwIHRyYW5zZm9ybXMgY2FjaGVkIGluIENTU1BsdWdpbilcbiAgICAgIC8vIGRvbid0IGp1c3QgX3JlbW92ZUZyb21QYXJlbnQocHJldlN0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKSkgYmVjYXVzZSB0aGF0J2xsIGxlYXZlIGlubGluZSBzdHlsZXMuIFdlJ3JlIGNyZWF0aW5nIGEgbmV3IF9zdGFydEF0IGZvciBcInN0YXJ0QXRcIiB0d2VlbnMgdGhhdCByZS1jYXB0dXJlIHRoaW5ncyB0byBlbnN1cmUgdGhhdCBpZiB0aGUgcHJlLXR3ZWVuIHZhbHVlcyBjaGFuZ2VkIHNpbmNlIHRoZSB0d2VlbiB3YXMgY3JlYXRlZCwgdGhleSdyZSByZWNvcmRlZC5cblxuICAgICAgcHJldlN0YXJ0QXQuX2xhenkgPSAwO1xuICAgIH1cblxuICAgIGlmIChzdGFydEF0KSB7XG4gICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgICBkYXRhOiBcImlzU3RhcnRcIixcbiAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGF6eTogIXByZXZTdGFydEF0ICYmIF9pc05vdEZhbHNlKGxhenkpLFxuICAgICAgICBzdGFydEF0OiBudWxsLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICBvblVwZGF0ZVBhcmFtczogb25VcGRhdGVQYXJhbXMsXG4gICAgICAgIGNhbGxiYWNrU2NvcGU6IGNhbGxiYWNrU2NvcGUsXG4gICAgICAgIHN0YWdnZXI6IDBcbiAgICAgIH0sIHN0YXJ0QXQpKSk7IC8vY29weSB0aGUgcHJvcGVydGllcy92YWx1ZXMgaW50byBhIG5ldyBvYmplY3QgdG8gYXZvaWQgY29sbGlzaW9ucywgbGlrZSB2YXIgdG8gPSB7eDowfSwgZnJvbSA9IHt4OjUwMH07IHRpbWVsaW5lLmZyb21UbyhlLCBmcm9tLCB0bykuZnJvbVRvKGUsIHRvLCBmcm9tKTtcblxuXG4gICAgICB0d2Vlbi5fc3RhcnRBdC5fZHAgPSAwOyAvLyBkb24ndCBhbGxvdyBpdCB0byBnZXQgcHV0IGJhY2sgaW50byByb290IHRpbWVsaW5lISBMaWtlIHdoZW4gcmV2ZXJ0KCkgaXMgY2FsbGVkIGFuZCB0b3RhbFRpbWUoKSBnZXRzIHNldC5cblxuICAgICAgdHdlZW4uX3N0YXJ0QXQuX3NhdCA9IHR3ZWVuOyAvLyB1c2VkIGluIGdsb2JhbFRpbWUoKS4gX3NhdCBzdGFuZHMgZm9yIF9zdGFydEF0VHdlZW5cblxuICAgICAgdGltZSA8IDAgJiYgKF9yZXZlcnRpbmcgfHwgIWltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCkgJiYgdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWdOb0tpbGwpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIHR3ZWVuLlxuXG4gICAgICBpZiAoaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgIGlmIChkdXIgJiYgdGltZSA8PSAwICYmIHRUaW1lIDw9IDApIHtcbiAgICAgICAgICAvLyBjaGVjayB0VGltZSBoZXJlIGJlY2F1c2UgaW4gdGhlIGNhc2Ugb2YgYSB5b3lvIHR3ZWVuIHdob3NlIHBsYXloZWFkIGdldHMgcHVzaGVkIHRvIHRoZSBlbmQgbGlrZSB0d2Vlbi5wcm9ncmVzcygxKSwgd2Ugc2hvdWxkIGFsbG93IGl0IHRocm91Z2ggc28gdGhhdCB0aGUgb25Db21wbGV0ZSBnZXRzIGZpcmVkIHByb3Blcmx5LlxuICAgICAgICAgIHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAgIHJldHVybjsgLy93ZSBza2lwIGluaXRpYWxpemF0aW9uIGhlcmUgc28gdGhhdCBvdmVyd3JpdGluZyBkb2Vzbid0IG9jY3VyIHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBzZXZlcmFsIGltbWVkaWF0ZVJlbmRlcjp0cnVlIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQvcHJvcGVydGllcyB0byBkcm9wIGludG8gYSBUaW1lbGluZSwgdGhlIGxhc3Qgb25lIGNyZWF0ZWQgd291bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmVzIGJlY2F1c2UgdGhleSBkaWRuJ3QgZ2V0IHBsYWNlZCBpbnRvIHRoZSB0aW1lbGluZSB5ZXQgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXIgb2NjdXJzIGFuZCBraWNrcyBpbiBvdmVyd3JpdGluZy5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVuQmFja3dhcmRzICYmIGR1cikge1xuICAgICAgLy9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuICAgICAgaWYgKCFwcmV2U3RhcnRBdCkge1xuICAgICAgICB0aW1lICYmIChpbW1lZGlhdGVSZW5kZXIgPSBmYWxzZSk7IC8vaW4gcmFyZSBjYXNlcyAobGlrZSBpZiBhIGZyb20oKSB0d2VlbiBydW5zIGFuZCB0aGVuIGlzIGludmFsaWRhdGUoKS1lZCksIGltbWVkaWF0ZVJlbmRlciBjb3VsZCBiZSB0cnVlIGJ1dCB0aGUgaW5pdGlhbCBmb3JjZWQtcmVuZGVyIGdldHMgc2tpcHBlZCwgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIHRoZSByZW5kZXIgaW4gdGhpcyBjb250ZXh0IHdoZW4gdGhlIF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXG5cbiAgICAgICAgcCA9IF9zZXREZWZhdWx0cyh7XG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBcImlzRnJvbVN0YXJ0XCIsXG4gICAgICAgICAgLy93ZSB0YWcgdGhlIHR3ZWVuIHdpdGggYXMgXCJpc0Zyb21TdGFydFwiIHNvIHRoYXQgaWYgW2luc2lkZSBhIHBsdWdpbl0gd2UgbmVlZCB0byBvbmx5IGRvIHNvbWV0aGluZyBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2Vlbiwgd2UgaGF2ZSBhIHdheSBvZiBpZGVudGlmeWluZyB0aGlzIHR3ZWVuIGFzIG1lcmVseSB0aGUgb25lIHRoYXQncyBzZXR0aW5nIHRoZSBiZWdpbm5pbmcgdmFsdWVzIGZvciBhIFwiZnJvbSgpXCIgdHdlZW4uIEZvciBleGFtcGxlLCBjbGVhclByb3BzIGluIENTU1BsdWdpbiBzaG91bGQgb25seSBnZXQgYXBwbGllZCBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2VlbiBhbmQgd2l0aG91dCB0aGlzIHRhZywgZnJvbSguLi57aGVpZ2h0OjEwMCwgY2xlYXJQcm9wczpcImhlaWdodFwiLCBkZWxheToxfSkgd291bGQgd2lwZSB0aGUgaGVpZ2h0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuIGFuZCBhZnRlciAxIHNlY29uZCwgaXQnZCBraWNrIGJhY2sgaW4uXG4gICAgICAgICAgbGF6eTogaW1tZWRpYXRlUmVuZGVyICYmICFwcmV2U3RhcnRBdCAmJiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IGltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgICAvL3plcm8tZHVyYXRpb24gdHdlZW5zIHJlbmRlciBpbW1lZGlhdGVseSBieSBkZWZhdWx0LCBidXQgaWYgd2UncmUgbm90IHNwZWNpZmljYWxseSBpbnN0cnVjdGVkIHRvIHJlbmRlciB0aGlzIHR3ZWVuIGltbWVkaWF0ZWx5LCB3ZSBzaG91bGQgc2tpcCB0aGlzIGFuZCBtZXJlbHkgX2luaXQoKSB0byByZWNvcmQgdGhlIHN0YXJ0aW5nIHZhbHVlcyAocmVuZGVyaW5nIHRoZW0gaW1tZWRpYXRlbHkgd291bGQgcHVzaCB0aGVtIHRvIGNvbXBsZXRpb24gd2hpY2ggaXMgd2FzdGVmdWwgaW4gdGhhdCBjYXNlIC0gd2UnZCBoYXZlIHRvIHJlbmRlcigtMSkgaW1tZWRpYXRlbHkgYWZ0ZXIpXG4gICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCAvL2Vuc3VyZXMgdGhhdCBuZXN0ZWQgdHdlZW5zIHRoYXQgaGFkIGEgc3RhZ2dlciBhcmUgaGFuZGxlZCBwcm9wZXJseSwgbGlrZSBnc2FwLmZyb20oXCIuY2xhc3NcIiwge3k6IGdzYXAudXRpbHMud3JhcChbLTEwMCwxMDBdKSwgc3RhZ2dlcjogMC41fSlcblxuICAgICAgICB9LCBjbGVhblZhcnMpO1xuICAgICAgICBoYXJuZXNzVmFycyAmJiAocFtoYXJuZXNzLnByb3BdID0gaGFybmVzc1ZhcnMpOyAvLyBpbiBjYXNlIHNvbWVvbmUgZG9lcyBzb21ldGhpbmcgbGlrZSAuZnJvbSguLi4sIHtjc3M6e319KVxuXG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIHApKTtcblxuICAgICAgICB0d2Vlbi5fc3RhcnRBdC5fZHAgPSAwOyAvLyBkb24ndCBhbGxvdyBpdCB0byBnZXQgcHV0IGJhY2sgaW50byByb290IHRpbWVsaW5lIVxuXG4gICAgICAgIHR3ZWVuLl9zdGFydEF0Ll9zYXQgPSB0d2VlbjsgLy8gdXNlZCBpbiBnbG9iYWxUaW1lKClcblxuICAgICAgICB0aW1lIDwgMCAmJiAoX3JldmVydGluZyA/IHR3ZWVuLl9zdGFydEF0LnJldmVydChfcmV2ZXJ0Q29uZmlnTm9LaWxsKSA6IHR3ZWVuLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSkpO1xuICAgICAgICB0d2Vlbi5felRpbWUgPSB0aW1lO1xuXG4gICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgX2luaXRUd2Vlbih0d2Vlbi5fc3RhcnRBdCwgX3RpbnlOdW0sIF90aW55TnVtKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRpbWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0d2Vlbi5fcHQgPSB0d2Vlbi5fcHRDYWNoZSA9IDA7XG4gICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgIHR3ZWVuLl9wdExvb2t1cFtpXSA9IHB0TG9va3VwID0ge307XG4gICAgICBfbGF6eUxvb2t1cFtnc0RhdGEuaWRdICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2lmIG90aGVyIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQgaGF2ZSByZWNlbnRseSBpbml0dGVkIGJ1dCBoYXZlbid0IHJlbmRlcmVkIHlldCwgd2UndmUgZ290IHRvIGZvcmNlIHRoZSByZW5kZXIgc28gdGhhdCB0aGUgc3RhcnRpbmcgdmFsdWVzIGFyZSBjb3JyZWN0IChpbWFnaW5lIHBvcHVsYXRpbmcgYSB0aW1lbGluZSB3aXRoIGEgYnVuY2ggb2Ygc2VxdWVudGlhbCB0d2VlbnMgYW5kIHRoZW4ganVtcGluZyB0byB0aGUgZW5kKVxuXG4gICAgICBpbmRleCA9IGZ1bGxUYXJnZXRzID09PSB0YXJnZXRzID8gaSA6IGZ1bGxUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgICAgaWYgKGhhcm5lc3MgJiYgKHBsdWdpbiA9IG5ldyBoYXJuZXNzKCkpLmluaXQodGFyZ2V0LCBoYXJuZXNzVmFycyB8fCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgZnVsbFRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHBsdWdpbi5uYW1lLCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICAgICAgcGx1Z2luLl9wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcHRMb29rdXBbbmFtZV0gPSBwdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhcm5lc3MgfHwgaGFybmVzc1ZhcnMpIHtcbiAgICAgICAgZm9yIChwIGluIGNsZWFuVmFycykge1xuICAgICAgICAgIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gX2NoZWNrUGx1Z2luKHAsIGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIGZ1bGxUYXJnZXRzKSkpIHtcbiAgICAgICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHRMb29rdXBbcF0gPSBwdCA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0d2VlbiwgdGFyZ2V0LCBwLCBcImdldFwiLCBjbGVhblZhcnNbcF0sIGluZGV4LCBmdWxsVGFyZ2V0cywgMCwgdmFycy5zdHJpbmdGaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fb3AgJiYgdHdlZW4uX29wW2ldICYmIHR3ZWVuLmtpbGwodGFyZ2V0LCB0d2Vlbi5fb3BbaV0pO1xuXG4gICAgICBpZiAoYXV0b092ZXJ3cml0ZSAmJiB0d2Vlbi5fcHQpIHtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSB0d2VlbjtcblxuICAgICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldCwgcHRMb29rdXAsIHR3ZWVuLmdsb2JhbFRpbWUodGltZSkpOyAvLyBtYWtlIHN1cmUgdGhlIG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb3ZlcndyaXRlIFRISVMgdHdlZW4hISFcblxuXG4gICAgICAgIG92ZXJ3cml0dGVuID0gIXR3ZWVuLnBhcmVudDtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgJiYgbGF6eSAmJiAoX2xhenlMb29rdXBbZ3NEYXRhLmlkXSA9IDEpO1xuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodHdlZW4pO1xuICAgIHR3ZWVuLl9vbkluaXQgJiYgdHdlZW4uX29uSW5pdCh0d2Vlbik7IC8vcGx1Z2lucyBsaWtlIFJvdW5kUHJvcHMgbXVzdCB3YWl0IHVudGlsIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyBhcmUgaW5zdGFudGlhdGVkLiBJbiB0aGUgcGx1Z2luJ3MgaW5pdCgpIGZ1bmN0aW9uLCBpdCBzZXRzIHRoZSBfb25Jbml0IG9uIHRoZSB0d2VlbiBpbnN0YW5jZS4gTWF5IG5vdCBiZSBwcmV0dHkvaW50dWl0aXZlLCBidXQgaXQncyBmYXN0IGFuZCBrZWVwcyBmaWxlIHNpemUgZG93bi5cbiAgfVxuXG4gIHR3ZWVuLl9vblVwZGF0ZSA9IG9uVXBkYXRlO1xuICB0d2Vlbi5faW5pdHRlZCA9ICghdHdlZW4uX29wIHx8IHR3ZWVuLl9wdCkgJiYgIW92ZXJ3cml0dGVuOyAvLyBpZiBvdmVyd3JpdHRlblByb3BzIHJlc3VsdGVkIGluIHRoZSBlbnRpcmUgdHdlZW4gYmVpbmcga2lsbGVkLCBkbyBOT1QgZmxhZyBpdCBhcyBpbml0dGVkIG9yIGVsc2UgaXQgbWF5IHJlbmRlciBmb3Igb25lIHRpY2suXG5cbiAga2V5ZnJhbWVzICYmIHRpbWUgPD0gMCAmJiB0bC5yZW5kZXIoX2JpZ051bSwgdHJ1ZSwgdHJ1ZSk7IC8vIGlmIHRoZXJlJ3MgYSAwJSBrZXlmcmFtZSwgaXQnbGwgcmVuZGVyIGluIHRoZSBcImJlZm9yZVwiIHN0YXRlIGZvciBhbnkgc3RhZ2dlcmVkL2RlbGF5ZWQgYW5pbWF0aW9ucyB0aHVzIHdoZW4gdGhlIGZvbGxvd2luZyB0d2VlbiBpbml0aWFsaXplcywgaXQnbGwgdXNlIHRoZSBcImJlZm9yZVwiIHN0YXRlIGluc3RlYWQgb2YgdGhlIFwiYWZ0ZXJcIiBzdGF0ZSBhcyB0aGUgaW5pdGlhbCB2YWx1ZXMuXG59LFxuICAgIF91cGRhdGVQcm9wVHdlZW5zID0gZnVuY3Rpb24gX3VwZGF0ZVByb3BUd2VlbnModHdlZW4sIHByb3BlcnR5LCB2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSwgcmF0aW8sIHRpbWUpIHtcbiAgdmFyIHB0Q2FjaGUgPSAodHdlZW4uX3B0ICYmIHR3ZWVuLl9wdENhY2hlIHx8ICh0d2Vlbi5fcHRDYWNoZSA9IHt9KSlbcHJvcGVydHldLFxuICAgICAgcHQsXG4gICAgICByb290UFQsXG4gICAgICBsb29rdXAsXG4gICAgICBpO1xuXG4gIGlmICghcHRDYWNoZSkge1xuICAgIHB0Q2FjaGUgPSB0d2Vlbi5fcHRDYWNoZVtwcm9wZXJ0eV0gPSBbXTtcbiAgICBsb29rdXAgPSB0d2Vlbi5fcHRMb29rdXA7XG4gICAgaSA9IHR3ZWVuLl90YXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHB0ID0gbG9va3VwW2ldW3Byb3BlcnR5XTtcblxuICAgICAgaWYgKHB0ICYmIHB0LmQgJiYgcHQuZC5fcHQpIHtcbiAgICAgICAgLy8gaXQncyBhIHBsdWdpbiwgc28gZmluZCB0aGUgbmVzdGVkIFByb3BUd2VlblxuICAgICAgICBwdCA9IHB0LmQuX3B0O1xuXG4gICAgICAgIHdoaWxlIChwdCAmJiBwdC5wICE9PSBwcm9wZXJ0eSAmJiBwdC5mcCAhPT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAvLyBcImZwXCIgaXMgZnVuY3Rpb25QYXJhbSBmb3IgdGhpbmdzIGxpa2Ugc2V0dGluZyBDU1MgdmFyaWFibGVzIHdoaWNoIHJlcXVpcmUgLnNldFByb3BlcnR5KFwiLS12YXItbmFtZVwiLCB2YWx1ZSlcbiAgICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcHQpIHtcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gUHJvcFR3ZWVuIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHByb3BlcnR5LCBzbyB3ZSBtdXN0IEZPUkNFIG9uZSB0byBiZSBjcmVhdGVkIGFuZCBkaXRjaCBvdXQgb2YgdGhpc1xuICAgICAgICAvLyBpZiB0aGUgdHdlZW4gaGFzIG90aGVyIHByb3BlcnRpZXMgdGhhdCBhbHJlYWR5IHJlbmRlcmVkIGF0IG5ldyBwb3NpdGlvbnMsIHdlJ2Qgbm9ybWFsbHkgaGF2ZSB0byByZXdpbmQgdG8gcHV0IHRoZW0gYmFjayBsaWtlIHR3ZWVuLnJlbmRlcigwLCB0cnVlKSBiZWZvcmUgZm9yY2luZyBhbiBfaW5pdFR3ZWVuKCksIGJ1dCB0aGF0IGNhbiBjcmVhdGUgYW5vdGhlciBlZGdlIGNhc2UgbGlrZSB0d2VlbmluZyBhIHRpbWVsaW5lJ3MgcHJvZ3Jlc3Mgd291bGQgdHJpZ2dlciBvblVwZGF0ZXMgdG8gZmlyZSB3aGljaCBjb3VsZCBtb3ZlIG90aGVyIHRoaW5ncyBhcm91bmQuIEl0J3MgYmV0dGVyIHRvIGp1c3QgaW5mb3JtIHVzZXJzIHRoYXQgLnJlc2V0VG8oKSBzaG91bGQgT05MWSBiZSB1c2VkIGZvciB0d2VlbnMgdGhhdCBhbHJlYWR5IGhhdmUgdGhhdCBwcm9wZXJ0eS4gRm9yIGV4YW1wbGUsIHlvdSBjYW4ndCBnc2FwLnRvKC4uLnsgeTogMCB9KSBhbmQgdGhlbiB0d2Vlbi5yZXN0VG8oXCJ4XCIsIDIwMCkgZm9yIGV4YW1wbGUuXG4gICAgICAgIF9mb3JjZUFsbFByb3BUd2VlbnMgPSAxOyAvLyBvdGhlcndpc2UsIHdoZW4gd2UgX2FkZFByb3BUd2VlbigpIGFuZCBpdCBmaW5kcyBubyBjaGFuZ2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCB2YWx1ZXMsIGl0IHNraXBzIGNyZWF0aW5nIGEgUHJvcFR3ZWVuIChmb3IgZWZmaWNpZW5jeS4uLndoeSB0d2VlbiB3aGVuIHRoZXJlJ3Mgbm8gZGlmZmVyZW5jZT8pIGJ1dCBpbiB0aGlzIGNhc2Ugd2UgTkVFRCB0aGF0IFByb3BUd2VlbiBjcmVhdGVkIHNvIHdlIGNhbiBlZGl0IGl0LlxuXG4gICAgICAgIHR3ZWVuLnZhcnNbcHJvcGVydHldID0gXCIrPTBcIjtcblxuICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKTtcblxuICAgICAgICBfZm9yY2VBbGxQcm9wVHdlZW5zID0gMDtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHB0Q2FjaGUucHVzaChwdCk7XG4gICAgfVxuICB9XG5cbiAgaSA9IHB0Q2FjaGUubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICByb290UFQgPSBwdENhY2hlW2ldO1xuICAgIHB0ID0gcm9vdFBULl9wdCB8fCByb290UFQ7IC8vIGNvbXBsZXggdmFsdWVzIG1heSBoYXZlIG5lc3RlZCBQcm9wVHdlZW5zLiBXZSBvbmx5IGFjY29tbW9kYXRlIHRoZSBGSVJTVCB2YWx1ZS5cblxuICAgIHB0LnMgPSAoc3RhcnQgfHwgc3RhcnQgPT09IDApICYmICFzdGFydElzUmVsYXRpdmUgPyBzdGFydCA6IHB0LnMgKyAoc3RhcnQgfHwgMCkgKyByYXRpbyAqIHB0LmM7XG4gICAgcHQuYyA9IHZhbHVlIC0gcHQucztcbiAgICByb290UFQuZSAmJiAocm9vdFBULmUgPSBfcm91bmQodmFsdWUpICsgZ2V0VW5pdChyb290UFQuZSkpOyAvLyBtYWlubHkgZm9yIENTU1BsdWdpbiAoZW5kIHZhbHVlKVxuXG4gICAgcm9vdFBULmIgJiYgKHJvb3RQVC5iID0gcHQucyArIGdldFVuaXQocm9vdFBULmIpKTsgLy8gKGJlZ2lubmluZyB2YWx1ZSlcbiAgfVxufSxcbiAgICBfYWRkQWxpYXNlc1RvVmFycyA9IGZ1bmN0aW9uIF9hZGRBbGlhc2VzVG9WYXJzKHRhcmdldHMsIHZhcnMpIHtcbiAgdmFyIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwLFxuICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICBjb3B5LFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBhbGlhc2VzO1xuXG4gIGlmICghcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBjb3B5ID0gX21lcmdlKHt9LCB2YXJzKTtcblxuICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgaWYgKHAgaW4gY29weSkge1xuICAgICAgYWxpYXNlcyA9IHByb3BlcnR5QWxpYXNlc1twXS5zcGxpdChcIixcIik7XG4gICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29weVthbGlhc2VzW2ldXSA9IGNvcHlbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIC8vIHBhcnNlcyBtdWx0aXBsZSBmb3JtYXRzLCBsaWtlIHtcIjAlXCI6IHt4OiAxMDB9LCB7XCI1MCVcIjoge3g6IC0yMH19IGFuZCB7IHg6IHtcIjAlXCI6IDEwMCwgXCI1MCVcIjogLTIwfSB9LCBhbmQgYW4gXCJlYXNlXCIgY2FuIGJlIHNldCBvbiBhbnkgb2JqZWN0LiBXZSBwb3B1bGF0ZSBhbiBcImFsbFByb3BzXCIgb2JqZWN0IHdpdGggYW4gQXJyYXkgZm9yIGVhY2ggcHJvcGVydHksIGxpa2Uge3g6IFt7fSwge31dLCB5Olt7fSwge31dfSB3aXRoIGRhdGEgZm9yIGVhY2ggcHJvcGVydHkgdHdlZW4uIFRoZSBvYmplY3RzIGhhdmUgYSBcInRcIiAodGltZSksIFwidlwiLCAodmFsdWUpLCBhbmQgXCJlXCIgKGVhc2UpIHByb3BlcnR5LiBUaGlzIGFsbG93cyB1cyB0byBwaWVjZSB0b2dldGhlciBhIHRpbWVsaW5lIGxhdGVyLlxuX3BhcnNlS2V5ZnJhbWUgPSBmdW5jdGlvbiBfcGFyc2VLZXlmcmFtZShwcm9wLCBvYmosIGFsbFByb3BzLCBlYXNlRWFjaCkge1xuICB2YXIgZWFzZSA9IG9iai5lYXNlIHx8IGVhc2VFYWNoIHx8IFwicG93ZXIxLmluT3V0XCIsXG4gICAgICBwLFxuICAgICAgYTtcblxuICBpZiAoX2lzQXJyYXkob2JqKSkge1xuICAgIGEgPSBhbGxQcm9wc1twcm9wXSB8fCAoYWxsUHJvcHNbcHJvcF0gPSBbXSk7IC8vIHQgPSB0aW1lIChvdXQgb2YgMTAwKSwgdiA9IHZhbHVlLCBlID0gZWFzZVxuXG4gICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICByZXR1cm4gYS5wdXNoKHtcbiAgICAgICAgdDogaSAvIChvYmoubGVuZ3RoIC0gMSkgKiAxMDAsXG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICBlOiBlYXNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICBhID0gYWxsUHJvcHNbcF0gfHwgKGFsbFByb3BzW3BdID0gW10pO1xuICAgICAgcCA9PT0gXCJlYXNlXCIgfHwgYS5wdXNoKHtcbiAgICAgICAgdDogcGFyc2VGbG9hdChwcm9wKSxcbiAgICAgICAgdjogb2JqW3BdLFxuICAgICAgICBlOiBlYXNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3BhcnNlRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlRnVuY09yU3RyaW5nKHZhbHVlLCB0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIDogX2lzU3RyaW5nKHZhbHVlKSAmJiB+dmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgPyBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkgOiB2YWx1ZTtcbn0sXG4gICAgX3N0YWdnZXJUd2VlblByb3BzID0gX2NhbGxiYWNrTmFtZXMgKyBcInJlcGVhdCxyZXBlYXREZWxheSx5b3lvLHJlcGVhdFJlZnJlc2gseW95b0Vhc2UsYXV0b1JldmVydFwiLFxuICAgIF9zdGFnZ2VyUHJvcHNUb1NraXAgPSB7fTtcblxuX2ZvckVhY2hOYW1lKF9zdGFnZ2VyVHdlZW5Qcm9wcyArIFwiLGlkLHN0YWdnZXIsZGVsYXksZHVyYXRpb24scGF1c2VkLHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9zdGFnZ2VyUHJvcHNUb1NraXBbbmFtZV0gPSAxO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHdlZW4sIF9BbmltYXRpb24yKTtcblxuICBmdW5jdGlvbiBUd2Vlbih0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbiwgc2tpcEluaGVyaXQpIHtcbiAgICB2YXIgX3RoaXMzO1xuXG4gICAgaWYgKHR5cGVvZiB2YXJzID09PSBcIm51bWJlclwiKSB7XG4gICAgICBwb3NpdGlvbi5kdXJhdGlvbiA9IHZhcnM7XG4gICAgICB2YXJzID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RoaXMzID0gX0FuaW1hdGlvbjIuY2FsbCh0aGlzLCBza2lwSW5oZXJpdCA/IHZhcnMgOiBfaW5oZXJpdERlZmF1bHRzKHZhcnMpKSB8fCB0aGlzO1xuICAgIHZhciBfdGhpczMkdmFycyA9IF90aGlzMy52YXJzLFxuICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF90aGlzMyR2YXJzLmRlbGF5LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdGhpczMkdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICBvdmVyd3JpdGUgPSBfdGhpczMkdmFycy5vdmVyd3JpdGUsXG4gICAgICAgIGtleWZyYW1lcyA9IF90aGlzMyR2YXJzLmtleWZyYW1lcyxcbiAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlciA9IF90aGlzMyR2YXJzLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgIHlveW9FYXNlID0gX3RoaXMzJHZhcnMueW95b0Vhc2UsXG4gICAgICAgIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIHRsLFxuICAgICAgICBpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBsLFxuICAgICAgICBwLFxuICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgIHN0YWdnZXJGdW5jLFxuICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2U7XG4gICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgIF90aGlzMy5fcHRMb29rdXAgPSBbXTsgLy9Qcm9wVHdlZW4gbG9va3VwLiBBbiBhcnJheSBjb250YWluaW5nIGFuIG9iamVjdCBmb3IgZWFjaCB0YXJnZXQsIGhhdmluZyBrZXlzIGZvciBlYWNoIHR3ZWVuaW5nIHByb3BlcnR5XG5cbiAgICBfdGhpczMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZTtcblxuICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgIHZhcnMgPSBfdGhpczMudmFycztcbiAgICAgIHRsID0gX3RoaXMzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgZGVmYXVsdHM6IGRlZmF1bHRzIHx8IHt9LFxuICAgICAgICB0YXJnZXRzOiBwYXJlbnQgJiYgcGFyZW50LmRhdGEgPT09IFwibmVzdGVkXCIgPyBwYXJlbnQudmFycy50YXJnZXRzIDogcGFyc2VkVGFyZ2V0c1xuICAgICAgfSk7IC8vIHdlIG5lZWQgdG8gc3RvcmUgdGhlIHRhcmdldHMgYmVjYXVzZSBmb3Igc3RhZ2dlcnMgYW5kIGtleWZyYW1lcywgd2UgZW5kIHVwIGNyZWF0aW5nIGFuIGluZGl2aWR1YWwgdHdlZW4gZm9yIGVhY2ggYnV0IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyBuZWVkIHRvIGtub3cgdGhlIGluZGV4IGFuZCB0aGUgd2hvbGUgQXJyYXkgb2YgdGFyZ2V0cy5cblxuICAgICAgdGwua2lsbCgpO1xuICAgICAgdGwucGFyZW50ID0gdGwuX2RwID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuICAgICAgdGwuX3N0YXJ0ID0gMDtcblxuICAgICAgaWYgKHN0YWdnZXIgfHwgX2lzRnVuY09yU3RyaW5nKGR1cmF0aW9uKSB8fCBfaXNGdW5jT3JTdHJpbmcoZGVsYXkpKSB7XG4gICAgICAgIGwgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcbiAgICAgICAgc3RhZ2dlckZ1bmMgPSBzdGFnZ2VyICYmIGRpc3RyaWJ1dGUoc3RhZ2dlcik7XG5cbiAgICAgICAgaWYgKF9pc09iamVjdChzdGFnZ2VyKSkge1xuICAgICAgICAgIC8vdXNlcnMgY2FuIHBhc3MgaW4gY2FsbGJhY2tzIGxpa2Ugb25TdGFydC9vbkNvbXBsZXRlIGluIHRoZSBzdGFnZ2VyIG9iamVjdC4gVGhlc2Ugc2hvdWxkIGZpcmUgd2l0aCBlYWNoIGluZGl2aWR1YWwgdHdlZW4uXG4gICAgICAgICAgZm9yIChwIGluIHN0YWdnZXIpIHtcbiAgICAgICAgICAgIGlmICh+X3N0YWdnZXJUd2VlblByb3BzLmluZGV4T2YocCkpIHtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlIHx8IChzdGFnZ2VyVmFyc1RvTWVyZ2UgPSB7fSk7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZVtwXSA9IHN0YWdnZXJbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvcHkgPSBfY29weUV4Y2x1ZGluZyh2YXJzLCBfc3RhZ2dlclByb3BzVG9Ta2lwKTtcbiAgICAgICAgICBjb3B5LnN0YWdnZXIgPSAwO1xuICAgICAgICAgIHlveW9FYXNlICYmIChjb3B5LnlveW9FYXNlID0geW95b0Vhc2UpO1xuICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSAmJiBfbWVyZ2UoY29weSwgc3RhZ2dlclZhcnNUb01lcmdlKTtcbiAgICAgICAgICBjdXJUYXJnZXQgPSBwYXJzZWRUYXJnZXRzW2ldOyAvL2Rvbid0IGp1c3QgY29weSBkdXJhdGlvbiBvciBkZWxheSBiZWNhdXNlIGlmIHRoZXkncmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24sIHdlJ2QgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSBfaXNGdW5jT3JTdHJpbmcoKSB3b3VsZCBldmFsdWF0ZSBhcyB0cnVlIGluIHRoZSBjaGlsZCB0d2VlbnMsIGVudGVyaW5nIHRoaXMgbG9vcCwgZXRjLiBTbyB3ZSBwYXJzZSB0aGUgdmFsdWUgc3RyYWlnaHQgZnJvbSB2YXJzIGFuZCBkZWZhdWx0IHRvIDAuXG5cbiAgICAgICAgICBjb3B5LmR1cmF0aW9uID0gK19wYXJzZUZ1bmNPclN0cmluZyhkdXJhdGlvbiwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpO1xuICAgICAgICAgIGNvcHkuZGVsYXkgPSAoK19wYXJzZUZ1bmNPclN0cmluZyhkZWxheSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpIHx8IDApIC0gX3RoaXMzLl9kZWxheTtcblxuICAgICAgICAgIGlmICghc3RhZ2dlciAmJiBsID09PSAxICYmIGNvcHkuZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWVvbmUgZG9lcyBkZWxheTpcInJhbmRvbSgxLCA1KVwiLCByZXBlYXQ6LTEsIGZvciBleGFtcGxlLCB0aGUgZGVsYXkgc2hvdWxkbid0IGJlIGluc2lkZSB0aGUgcmVwZWF0LlxuICAgICAgICAgICAgX3RoaXMzLl9kZWxheSA9IGRlbGF5ID0gY29weS5kZWxheTtcbiAgICAgICAgICAgIF90aGlzMy5fc3RhcnQgKz0gZGVsYXk7XG4gICAgICAgICAgICBjb3B5LmRlbGF5ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0bC50byhjdXJUYXJnZXQsIGNvcHksIHN0YWdnZXJGdW5jID8gc3RhZ2dlckZ1bmMoaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSA6IDApO1xuICAgICAgICAgIHRsLl9lYXNlID0gX2Vhc2VNYXAubm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRsLmR1cmF0aW9uKCkgPyBkdXJhdGlvbiA9IGRlbGF5ID0gMCA6IF90aGlzMy50aW1lbGluZSA9IDA7IC8vIGlmIHRoZSB0aW1lbGluZSdzIGR1cmF0aW9uIGlzIDAsIHdlIGRvbid0IG5lZWQgYSB0aW1lbGluZSBpbnRlcm5hbGx5IVxuICAgICAgfSBlbHNlIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgICAgX2luaGVyaXREZWZhdWx0cyhfc2V0RGVmYXVsdHModGwudmFycy5kZWZhdWx0cywge1xuICAgICAgICAgIGVhc2U6IFwibm9uZVwiXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0bC5fZWFzZSA9IF9wYXJzZUVhc2Uoa2V5ZnJhbWVzLmVhc2UgfHwgdmFycy5lYXNlIHx8IFwibm9uZVwiKTtcbiAgICAgICAgdmFyIHRpbWUgPSAwLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIGtmLFxuICAgICAgICAgICAgdjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkoa2V5ZnJhbWVzKSkge1xuICAgICAgICAgIGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRsLnRvKHBhcnNlZFRhcmdldHMsIGZyYW1lLCBcIj5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGwuZHVyYXRpb24oKTsgLy8gdG8gZW5zdXJlIHRsLl9kdXIgaXMgY2FjaGVkIGJlY2F1c2Ugd2UgdGFwIGludG8gaXQgZm9yIHBlcmZvcm1hbmNlIHB1cnBvc2VzIGluIHRoZSByZW5kZXIoKSBtZXRob2QuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29weSA9IHt9O1xuXG4gICAgICAgICAgZm9yIChwIGluIGtleWZyYW1lcykge1xuICAgICAgICAgICAgcCA9PT0gXCJlYXNlXCIgfHwgcCA9PT0gXCJlYXNlRWFjaFwiIHx8IF9wYXJzZUtleWZyYW1lKHAsIGtleWZyYW1lc1twXSwgY29weSwga2V5ZnJhbWVzLmVhc2VFYWNoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHAgaW4gY29weSkge1xuICAgICAgICAgICAgYSA9IGNvcHlbcF0uc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS50IC0gYi50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aW1lID0gMDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAga2YgPSBhW2ldO1xuICAgICAgICAgICAgICB2ID0ge1xuICAgICAgICAgICAgICAgIGVhc2U6IGtmLmUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IChrZi50IC0gKGkgPyBhW2kgLSAxXS50IDogMCkpIC8gMTAwICogZHVyYXRpb25cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdltwXSA9IGtmLnY7XG4gICAgICAgICAgICAgIHRsLnRvKHBhcnNlZFRhcmdldHMsIHYsIHRpbWUpO1xuICAgICAgICAgICAgICB0aW1lICs9IHYuZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwuZHVyYXRpb24oKSA8IGR1cmF0aW9uICYmIHRsLnRvKHt9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gLSB0bC5kdXJhdGlvbigpXG4gICAgICAgICAgfSk7IC8vIGluIGNhc2Uga2V5ZnJhbWVzIGRpZG4ndCBnbyB0byAxMDAlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZHVyYXRpb24gfHwgX3RoaXMzLmR1cmF0aW9uKGR1cmF0aW9uID0gdGwuZHVyYXRpb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzMy50aW1lbGluZSA9IDA7IC8vc3BlZWQgb3B0aW1pemF0aW9uLCBmYXN0ZXIgbG9va3VwcyAobm8gZ29pbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbilcbiAgICB9XG5cbiAgICBpZiAob3ZlcndyaXRlID09PSB0cnVlICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcblxuICAgICAgX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZihwYXJzZWRUYXJnZXRzKTtcblxuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgIH1cblxuICAgIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBwb3NpdGlvbik7XG5cbiAgICB2YXJzLnJldmVyc2VkICYmIF90aGlzMy5yZXZlcnNlKCk7XG4gICAgdmFycy5wYXVzZWQgJiYgX3RoaXMzLnBhdXNlZCh0cnVlKTtcblxuICAgIGlmIChpbW1lZGlhdGVSZW5kZXIgfHwgIWR1cmF0aW9uICYmICFrZXlmcmFtZXMgJiYgX3RoaXMzLl9zdGFydCA9PT0gX3JvdW5kUHJlY2lzZShwYXJlbnQuX3RpbWUpICYmIF9pc05vdEZhbHNlKGltbWVkaWF0ZVJlbmRlcikgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSkgJiYgcGFyZW50LmRhdGEgIT09IFwibmVzdGVkXCIpIHtcbiAgICAgIF90aGlzMy5fdFRpbWUgPSAtX3RpbnlOdW07IC8vZm9yY2VzIGEgcmVuZGVyIHdpdGhvdXQgaGF2aW5nIHRvIHNldCB0aGUgcmVuZGVyKCkgXCJmb3JjZVwiIHBhcmFtZXRlciB0byB0cnVlIGJlY2F1c2Ugd2Ugd2FudCB0byBhbGxvdyBsYXp5aW5nIGJ5IGRlZmF1bHQgKHVzaW5nIHRoZSBcImZvcmNlXCIgcGFyYW1ldGVyIGFsd2F5cyBmb3JjZXMgYW4gaW1tZWRpYXRlIGZ1bGwgcmVuZGVyKVxuXG4gICAgICBfdGhpczMucmVuZGVyKE1hdGgubWF4KDAsIC1kZWxheSkgfHwgMCk7IC8vaW4gY2FzZSBkZWxheSBpcyBuZWdhdGl2ZVxuXG4gICAgfVxuXG4gICAgc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIGlzTmVnYXRpdmUgPSB0b3RhbFRpbWUgPCAwLFxuICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA+IHREdXIgLSBfdGlueU51bSAmJiAhaXNOZWdhdGl2ZSA/IHREdXIgOiB0b3RhbFRpbWUgPCBfdGlueU51bSA/IDAgOiB0b3RhbFRpbWUsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIHB0LFxuICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgIHByZXZJdGVyYXRpb24sXG4gICAgICAgIGlzWW95byxcbiAgICAgICAgcmF0aW8sXG4gICAgICAgIHRpbWVsaW5lLFxuICAgICAgICB5b3lvRWFzZTtcblxuICAgIGlmICghZHVyKSB7XG4gICAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odGhpcywgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgIH0gZWxzZSBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8ICF0b3RhbFRpbWUgfHwgZm9yY2UgfHwgIXRoaXMuX2luaXR0ZWQgJiYgdGhpcy5fdFRpbWUgfHwgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl96VGltZSA8IDAgIT09IGlzTmVnYXRpdmUpIHtcbiAgICAgIC8vdGhpcyBzZW5zZXMgaWYgd2UncmUgY3Jvc3Npbmcgb3ZlciB0aGUgc3RhcnQgdGltZSwgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IHJlY29yZCBfelRpbWUgYW5kIGZvcmNlIHRoZSByZW5kZXIsIGJ1dCB3ZSBkbyBpdCBpbiB0aGlzIGxlbmd0aHkgY29uZGl0aW9uYWwgd2F5IGZvciBwZXJmb3JtYW5jZSByZWFzb25zICh1c3VhbGx5IHdlIGNhbiBza2lwIHRoZSBjYWxjdWxhdGlvbnMpOiB0aGlzLl9pbml0dGVkICYmICh0aGlzLl96VGltZSA8IDApICE9PSAodG90YWxUaW1lIDwgMClcbiAgICAgIHRpbWUgPSB0VGltZTtcbiAgICAgIHRpbWVsaW5lID0gdGhpcy50aW1lbGluZTtcblxuICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAvL2FkanVzdCB0aGUgdGltZSBmb3IgcmVwZWF0cyBhbmQgeW95b3NcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgaXNOZWdhdGl2ZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShjeWNsZUR1cmF0aW9uICogMTAwICsgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgIH1cblxuICAgICAgICBpc1lveW8gPSB0aGlzLl95b3lvICYmIGl0ZXJhdGlvbiAmIDE7XG5cbiAgICAgICAgaWYgKGlzWW95bykge1xuICAgICAgICAgIHlveW9FYXNlID0gdGhpcy5feUVhc2U7XG4gICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICBpZiAodGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlICYmIHRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgICAvL2NvdWxkIGJlIGR1cmluZyB0aGUgcmVwZWF0RGVsYXkgcGFydC4gTm8gbmVlZCB0byByZW5kZXIgYW5kIGZpcmUgY2FsbGJhY2tzLlxuICAgICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSB7XG4gICAgICAgICAgdGltZWxpbmUgJiYgdGhpcy5feUVhc2UgJiYgX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pOyAvL3JlcGVhdFJlZnJlc2ggZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgICAgaWYgKHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSBmb3JjZSA9IDE7IC8vZm9yY2UsIG90aGVyd2lzZSBpZiBsYXp5IGlzIHRydWUsIHRoZSBfYXR0ZW1wdEluaXRUd2VlbigpIHdpbGwgcmV0dXJuIGFuZCB3ZSdsbCBqdW1wIG91dCBhbmQgZ2V0IGNhdWdodCBib3VuY2luZyBvbiBlYWNoIHRpY2suXG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKF9yb3VuZFByZWNpc2UoY3ljbGVEdXJhdGlvbiAqIGl0ZXJhdGlvbiksIHRydWUpLmludmFsaWRhdGUoKS5fbG9jayA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICBpZiAoX2F0dGVtcHRJbml0VHdlZW4odGhpcywgaXNOZWdhdGl2ZSA/IHRvdGFsVGltZSA6IHRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cywgdFRpbWUpKSB7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSAwOyAvLyBpbiBjb25zdHJ1Y3RvciBpZiBpbW1lZGlhdGVSZW5kZXIgaXMgdHJ1ZSwgd2Ugc2V0IF90VGltZSB0byAtX3RpbnlOdW0gdG8gaGF2ZSB0aGUgcGxheWhlYWQgY3Jvc3MgdGhlIHN0YXJ0aW5nIHBvaW50IGJ1dCB3ZSBjYW4ndCBsZWF2ZSBfdFRpbWUgYXMgYSBuZWdhdGl2ZSBudW1iZXIuXG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSkge1xuICAgICAgICAgIC8vIHJhcmUgZWRnZSBjYXNlIC0gZHVyaW5nIGluaXRpYWxpemF0aW9uLCBhbiBvblVwZGF0ZSBpbiB0aGUgX3N0YXJ0QXQgKC5mcm9tVG8oKSkgbWlnaHQgZm9yY2UgdGhpcyB0d2VlbiB0byByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBkaXRjaCB0aGlzIHJlbmRlcigpIGNhbGwgc28gdGhhdCBpdCBkb2Vzbid0IHJldmVydCB0aGUgdmFsdWVzLlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgLy8gd2hpbGUgaW5pdHRpbmcsIGEgcGx1Z2luIGxpa2UgSW5lcnRpYVBsdWdpbiBtaWdodCBhbHRlciB0aGUgZHVyYXRpb24sIHNvIHJlcnVuIGZyb20gdGhlIHN0YXJ0IHRvIGVuc3VyZSBldmVyeXRoaW5nIHJlbmRlcnMgYXMgaXQgc2hvdWxkLlxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9hY3QgPSAxOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gKHlveW9FYXNlIHx8IHRoaXMuX2Vhc2UpKHRpbWUgLyBkdXIpO1xuXG4gICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lICYmICFwcmV2VGltZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgIWl0ZXJhdGlvbikge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB0ID0gdGhpcy5fcHQ7XG5cbiAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgdGltZWxpbmUgJiYgdGltZWxpbmUucmVuZGVyKHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiAhdGltZSAmJiBpc1lveW8gPyAtX3RpbnlOdW0gOiB0aW1lbGluZS5fZHVyICogdGltZWxpbmUuX2Vhc2UodGltZSAvIHRoaXMuX2R1ciksIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkgfHwgdGhpcy5fc3RhcnRBdCAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuXG4gICAgICBpZiAodGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIGlzTmVnYXRpdmUgJiYgX3Jld2luZFN0YXJ0QXQodGhpcywgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpOyAvL25vdGU6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSB0dWNrIHRoaXMgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIGxlc3MgdHJhdmVsZWQgYXJlYXMgKG1vc3QgdHdlZW5zIGRvbid0IGhhdmUgYW4gb25VcGRhdGUpLiBXZSdkIGp1c3QgaGF2ZSBpdCBhdCB0aGUgZW5kIGJlZm9yZSB0aGUgb25Db21wbGV0ZSwgYnV0IHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQgYmVmb3JlIGFueSBvblVwZGF0ZSBpcyBjYWxsZWQsIHNvIHdlIEFMU08gcHV0IGl0IGhlcmUgYW5kIHRoZW4gaWYgaXQncyBub3QgY2FsbGVkLCB3ZSBkbyBzbyBsYXRlciBuZWFyIHRoZSBvbkNvbXBsZXRlLlxuXG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXBlYXQgJiYgaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmIHRoaXMudmFycy5vblJlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG5cbiAgICAgIGlmICgodFRpbWUgPT09IHRoaXMuX3REdXIgfHwgIXRUaW1lKSAmJiB0aGlzLl90VGltZSA9PT0gdFRpbWUpIHtcbiAgICAgICAgaXNOZWdhdGl2ZSAmJiAhdGhpcy5fb25VcGRhdGUgJiYgX3Jld2luZFN0YXJ0QXQodGhpcywgdG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHRoaXMuX3REdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgd2UncmUgcmVuZGVyaW5nIGF0IGV4YWN0bHkgYSB0aW1lIG9mIDAsIGFzIHRoZXJlIGNvdWxkIGJlIGF1dG9SZXZlcnQgdmFsdWVzIHRoYXQgc2hvdWxkIGdldCBzZXQgb24gdGhlIG5leHQgdGljayAoaWYgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydFRpbWUsIG5lZ2F0aXZlIHRvdGFsVGltZSkuIERvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgIShpc05lZ2F0aXZlICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lIHx8IGlzWW95bykpIHtcbiAgICAgICAgICAvLyBpZiBwcmV2VGltZSBhbmQgdFRpbWUgYXJlIHplcm8sIHdlIHNob3VsZG4ndCBmaXJlIHRoZSBvblJldmVyc2VDb21wbGV0ZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWYgeW91IGdzYXAudG8oLi4uIHtwYXVzZWQ6dHJ1ZX0pLnBsYXkoKTtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8zLnRhcmdldHMgPSBmdW5jdGlvbiB0YXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRzO1xuICB9O1xuXG4gIF9wcm90bzMuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoc29mdCkge1xuICAgIC8vIFwic29mdFwiIGdpdmVzIHVzIGEgd2F5IHRvIGNsZWFyIG91dCBldmVyeXRoaW5nIEVYQ0VQVCB0aGUgcmVjb3JkZWQgcHJlLVwiZnJvbVwiIHBvcnRpb24gb2YgZnJvbSgpIHR3ZWVucy4gT3RoZXJ3aXNlLCBmb3IgZXhhbXBsZSwgaWYgeW91IHR3ZWVuLnByb2dyZXNzKDEpLnJlbmRlcigwLCB0cnVlIHRydWUpLmludmFsaWRhdGUoKSwgdGhlIFwiZnJvbVwiIHZhbHVlcyB3b3VsZCBwZXJzaXN0IGFuZCB0aGVuIG9uIHRoZSBuZXh0IHJlbmRlciwgdGhlIGZyb20oKSB0d2VlbnMgd291bGQgaW5pdGlhbGl6ZSBhbmQgdGhlIGN1cnJlbnQgdmFsdWUgd291bGQgbWF0Y2ggdGhlIFwiZnJvbVwiIHZhbHVlcywgdGh1cyBhbmltYXRlIGZyb20gdGhlIHNhbWUgdmFsdWUgdG8gdGhlIHNhbWUgdmFsdWUgKG5vIGFuaW1hdGlvbikuIFdlIHRhcCBpbnRvIHRoaXMgaW4gU2Nyb2xsVHJpZ2dlcidzIHJlZnJlc2goKSB3aGVyZSB3ZSBtdXN0IHB1c2ggYSB0d2VlbiB0byBjb21wbGV0aW9uIGFuZCB0aGVuIGJhY2sgYWdhaW4gYnV0IGhvbm9yIGl0cyBpbml0IHN0YXRlIGluIGNhc2UgdGhlIHR3ZWVuIGlzIGRlcGVuZGVudCBvbiBhbm90aGVyIHR3ZWVuIGZ1cnRoZXIgdXAgb24gdGhlIHBhZ2UuXG4gICAgKCFzb2Z0IHx8ICF0aGlzLnZhcnMucnVuQmFja3dhcmRzKSAmJiAodGhpcy5fc3RhcnRBdCA9IDApO1xuICAgIHRoaXMuX3B0ID0gdGhpcy5fb3AgPSB0aGlzLl9vblVwZGF0ZSA9IHRoaXMuX2xhenkgPSB0aGlzLnJhdGlvID0gMDtcbiAgICB0aGlzLl9wdExvb2t1cCA9IFtdO1xuICAgIHRoaXMudGltZWxpbmUgJiYgdGhpcy50aW1lbGluZS5pbnZhbGlkYXRlKHNvZnQpO1xuICAgIHJldHVybiBfQW5pbWF0aW9uMi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMsIHNvZnQpO1xuICB9O1xuXG4gIF9wcm90bzMucmVzZXRUbyA9IGZ1bmN0aW9uIHJlc2V0VG8ocHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKSB7XG4gICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgICB0aGlzLl90cyB8fCB0aGlzLnBsYXkoKTtcbiAgICB2YXIgdGltZSA9IE1hdGgubWluKHRoaXMuX2R1ciwgKHRoaXMuX2RwLl90aW1lIC0gdGhpcy5fc3RhcnQpICogdGhpcy5fdHMpLFxuICAgICAgICByYXRpbztcbiAgICB0aGlzLl9pbml0dGVkIHx8IF9pbml0VHdlZW4odGhpcywgdGltZSk7XG4gICAgcmF0aW8gPSB0aGlzLl9lYXNlKHRpbWUgLyB0aGlzLl9kdXIpOyAvLyBkb24ndCBqdXN0IGdldCB0d2Vlbi5yYXRpbyBiZWNhdXNlIGl0IG1heSBub3QgaGF2ZSByZW5kZXJlZCB5ZXQuXG4gICAgLy8gcG9zc2libGUgZnV0dXJlIGFkZGl0aW9uIHRvIGFsbG93IGFuIG9iamVjdCB3aXRoIG11bHRpcGxlIHZhbHVlcyB0byB1cGRhdGUsIGxpa2UgdHdlZW4ucmVzZXRUbyh7eDogMTAwLCB5OiAyMDB9KTsgQXQgdGhpcyBwb2ludCwgaXQgZG9lc24ndCBzZWVtIHdvcnRoIHRoZSBhZGRlZCBrYiBnaXZlbiB0aGUgZmFjdCB0aGF0IG1vc3QgdXNlcnMgd2lsbCBsaWtlbHkgb3B0IGZvciB0aGUgY29udmVuaWVudCBnc2FwLnF1aWNrVG8oKSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICAvLyBpZiAoX2lzT2JqZWN0KHByb3BlcnR5KSkgeyAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25cbiAgICAvLyBcdGZvciAocCBpbiBwcm9wZXJ0eSkge1xuICAgIC8vIFx0XHRpZiAoX3VwZGF0ZVByb3BUd2VlbnModGhpcywgcCwgcHJvcGVydHlbcF0sIHZhbHVlID8gdmFsdWVbcF0gOiBudWxsLCBzdGFydCwgcmF0aW8sIHRpbWUpKSB7XG4gICAgLy8gXHRcdFx0cmV0dXJuIHRoaXMucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpOyAvLyBpZiBhIFByb3BUd2VlbiB3YXNuJ3QgZm91bmQgZm9yIHRoZSBwcm9wZXJ0eSwgaXQnbGwgZ2V0IGZvcmNlZCB3aXRoIGEgcmUtaW5pdGlhbGl6YXRpb24gc28gd2UgbmVlZCB0byBqdW1wIG91dCBhbmQgc3RhcnQgb3ZlciBhZ2Fpbi5cbiAgICAvLyBcdFx0fVxuICAgIC8vIFx0fVxuICAgIC8vIH0gZWxzZSB7XG5cbiAgICBpZiAoX3VwZGF0ZVByb3BUd2VlbnModGhpcywgcHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlLCByYXRpbywgdGltZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc2V0VG8ocHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKTsgLy8gaWYgYSBQcm9wVHdlZW4gd2Fzbid0IGZvdW5kIGZvciB0aGUgcHJvcGVydHksIGl0J2xsIGdldCBmb3JjZWQgd2l0aCBhIHJlLWluaXRpYWxpemF0aW9uIHNvIHdlIG5lZWQgdG8ganVtcCBvdXQgYW5kIHN0YXJ0IG92ZXIgYWdhaW4uXG4gICAgfSAvL31cblxuXG4gICAgX2FsaWduUGxheWhlYWQodGhpcywgMCk7XG5cbiAgICB0aGlzLnBhcmVudCB8fCBfYWRkTGlua2VkTGlzdEl0ZW0odGhpcy5fZHAsIHRoaXMsIFwiX2ZpcnN0XCIsIFwiX2xhc3RcIiwgdGhpcy5fZHAuX3NvcnQgPyBcIl9zdGFydFwiIDogMCk7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyKDApO1xuICB9O1xuXG4gIF9wcm90bzMua2lsbCA9IGZ1bmN0aW9uIGtpbGwodGFyZ2V0cywgdmFycykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSBcImFsbFwiO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0cyAmJiAoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikpIHtcbiAgICAgIHRoaXMuX2xhenkgPSB0aGlzLl9wdCA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBfaW50ZXJydXB0KHRoaXMpIDogdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lbGluZSkge1xuICAgICAgdmFyIHREdXIgPSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKTtcbiAgICAgIHRoaXMudGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHZhcnMsIF9vdmVyd3JpdGluZ1R3ZWVuICYmIF9vdmVyd3JpdGluZ1R3ZWVuLnZhcnMub3ZlcndyaXRlICE9PSB0cnVlKS5fZmlyc3QgfHwgX2ludGVycnVwdCh0aGlzKTsgLy8gaWYgbm90aGluZyBpcyBsZWZ0IHR3ZWVuaW5nLCBpbnRlcnJ1cHQuXG5cbiAgICAgIHRoaXMucGFyZW50ICYmIHREdXIgIT09IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpICYmIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9kdXIgKiB0aGlzLnRpbWVsaW5lLl90RHVyIC8gdER1ciwgMCwgMSk7IC8vIGlmIGEgbmVzdGVkIHR3ZWVuIGlzIGtpbGxlZCB0aGF0IGNoYW5nZXMgdGhlIGR1cmF0aW9uLCBpdCBzaG91bGQgYWZmZWN0IHRoaXMgdHdlZW4ncyBkdXJhdGlvbi4gV2UgbXVzdCB1c2UgdGhlIHJhdGlvLCB0aG91Z2gsIGJlY2F1c2Ugc29tZXRpbWVzIHRoZSBpbnRlcm5hbCB0aW1lbGluZSBpcyBzdHJldGNoZWQgbGlrZSBmb3Iga2V5ZnJhbWVzIHdoZXJlIHRoZXkgZG9uJ3QgYWxsIGFkZCB1cCB0byB3aGF0ZXZlciB0aGUgcGFyZW50IHR3ZWVuJ3MgZHVyYXRpb24gd2FzIHNldCB0by5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlZFRhcmdldHMgPSB0aGlzLl90YXJnZXRzLFxuICAgICAgICBraWxsaW5nVGFyZ2V0cyA9IHRhcmdldHMgPyB0b0FycmF5KHRhcmdldHMpIDogcGFyc2VkVGFyZ2V0cyxcbiAgICAgICAgcHJvcFR3ZWVuTG9va3VwID0gdGhpcy5fcHRMb29rdXAsXG4gICAgICAgIGZpcnN0UFQgPSB0aGlzLl9wdCxcbiAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wcyxcbiAgICAgICAgY3VyTG9va3VwLFxuICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHAsXG4gICAgICAgIHB0LFxuICAgICAgICBpO1xuXG4gICAgaWYgKCghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSAmJiBfYXJyYXlzTWF0Y2gocGFyc2VkVGFyZ2V0cywga2lsbGluZ1RhcmdldHMpKSB7XG4gICAgICB2YXJzID09PSBcImFsbFwiICYmICh0aGlzLl9wdCA9IDApO1xuICAgICAgcmV0dXJuIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgfVxuXG4gICAgb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX29wID0gdGhpcy5fb3AgfHwgW107XG5cbiAgICBpZiAodmFycyAhPT0gXCJhbGxcIikge1xuICAgICAgLy9zbyBwZW9wbGUgY2FuIHBhc3MgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICBwID0ge307XG5cbiAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHBbbmFtZV0gPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXJzID0gcDtcbiAgICAgIH1cblxuICAgICAgdmFycyA9IF9hZGRBbGlhc2VzVG9WYXJzKHBhcnNlZFRhcmdldHMsIHZhcnMpO1xuICAgIH1cblxuICAgIGkgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh+a2lsbGluZ1RhcmdldHMuaW5kZXhPZihwYXJzZWRUYXJnZXRzW2ldKSkge1xuICAgICAgICBjdXJMb29rdXAgPSBwcm9wVHdlZW5Mb29rdXBbaV07XG5cbiAgICAgICAgaWYgKHZhcnMgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICBvdmVyd3JpdHRlblByb3BzW2ldID0gdmFycztcbiAgICAgICAgICBwcm9wcyA9IGN1ckxvb2t1cDtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gfHwge307XG4gICAgICAgICAgcHJvcHMgPSB2YXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwIGluIHByb3BzKSB7XG4gICAgICAgICAgcHQgPSBjdXJMb29rdXAgJiYgY3VyTG9va3VwW3BdO1xuXG4gICAgICAgICAgaWYgKHB0KSB7XG4gICAgICAgICAgICBpZiAoIShcImtpbGxcIiBpbiBwdC5kKSB8fCBwdC5kLmtpbGwocCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGN1ckxvb2t1cFtwXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VyT3ZlcndyaXRlUHJvcHMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzW3BdID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0dGVkICYmICF0aGlzLl9wdCAmJiBmaXJzdFBUICYmIF9pbnRlcnJ1cHQodGhpcyk7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgYXJlIGtpbGxlZCwga2lsbCB0aGUgdHdlZW4uIFdpdGhvdXQgdGhpcyBsaW5lLCBpZiB0aGVyZSdzIGEgdHdlZW4gd2l0aCBtdWx0aXBsZSB0YXJnZXRzIGFuZCB0aGVuIHlvdSBraWxsVHdlZW5zT2YoKSBlYWNoIHRhcmdldCBpbmRpdmlkdWFsbHksIHRoZSB0d2VlbiB3b3VsZCB0ZWNobmljYWxseSBzdGlsbCByZW1haW4gYWN0aXZlIGFuZCBmaXJlIGl0cyBvbkNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBwcm9wZXJ0aWVzIHR3ZWVuaW5nLlxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4udG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBhcmd1bWVudHNbMl0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gX2NyZWF0ZVR3ZWVuVHlwZSgxLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIFR3ZWVuLmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24gZGVsYXllZENhbGwoZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBUd2VlbihjYWxsYmFjaywgMCwge1xuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgIG9uQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgb25Db21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIGNhbGxiYWNrU2NvcGU6IHNjb3BlXG4gICAgfSk7IC8vIHdlIG11c3QgdXNlIG9uUmV2ZXJzZUNvbXBsZXRlIHRvbyBmb3IgdGhpbmdzIGxpa2UgdGltZWxpbmUuYWRkKCgpID0+IHsuLi59KSB3aGljaCBzaG91bGQgYmUgdHJpZ2dlcmVkIGluIEJPVEggZGlyZWN0aW9ucyAoZm9yd2FyZCBhbmQgcmV2ZXJzZSlcbiAgfTtcblxuICBUd2Vlbi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycyk7XG4gIH07XG5cbiAgVHdlZW4ua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFR3ZWVuLnByb3RvdHlwZSwge1xuICBfdGFyZ2V0czogW10sXG4gIF9sYXp5OiAwLFxuICBfc3RhcnRBdDogMCxcbiAgX29wOiAwLFxuICBfb25Jbml0OiAwXG59KTsgLy9hZGQgdGhlIHBlcnRpbmVudCB0aW1lbGluZSBtZXRob2RzIHRvIFR3ZWVuIGluc3RhbmNlcyBzbyB0aGF0IHVzZXJzIGNhbiBjaGFpbiBjb252ZW5pZW50bHkgYW5kIGNyZWF0ZSBhIHRpbWVsaW5lIGF1dG9tYXRpY2FsbHkuIChyZW1vdmVkIGR1ZSB0byBjb25jZXJucyB0aGF0IGl0J2QgdWx0aW1hdGVseSBhZGQgdG8gbW9yZSBjb25mdXNpb24gZXNwZWNpYWxseSBmb3IgYmVnaW5uZXJzKVxuLy8gX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sc2V0LGNhbGwsYWRkLGFkZExhYmVsLGFkZFBhdXNlXCIsIG5hbWUgPT4ge1xuLy8gXHRUd2Vlbi5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRsZXQgdGwgPSBuZXcgVGltZWxpbmUoKTtcbi8vIFx0XHRyZXR1cm4gX2FkZFRvVGltZWxpbmUodGwsIHRoaXMpW25hbWVdLmFwcGx5KHRsLCB0b0FycmF5KGFyZ3VtZW50cykpO1xuLy8gXHR9XG4vLyB9KTtcbi8vZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIExldmVyYWdlIHRoZSB0aW1lbGluZSBjYWxscy5cblxuXG5fZm9yRWFjaE5hbWUoXCJzdGFnZ2VyVG8sc3RhZ2dlckZyb20sc3RhZ2dlckZyb21Ub1wiLCBmdW5jdGlvbiAobmFtZSkge1xuICBUd2VlbltuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUoKSxcbiAgICAgICAgcGFyYW1zID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHBhcmFtcy5zcGxpY2UobmFtZSA9PT0gXCJzdGFnZ2VyRnJvbVRvXCIgPyA1IDogNCwgMCwgMCk7XG4gICAgcmV0dXJuIHRsW25hbWVdLmFwcGx5KHRsLCBwYXJhbXMpO1xuICB9O1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBST1BUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbnZhciBfc2V0dGVyUGxhaW4gPSBmdW5jdGlvbiBfc2V0dGVyUGxhaW4odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckZ1bmMgPSBmdW5jdGlvbiBfc2V0dGVyRnVuYyh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSh2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJGdW5jV2l0aFBhcmFtID0gZnVuY3Rpb24gX3NldHRlckZ1bmNXaXRoUGFyYW0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0oZGF0YS5mcCwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyQXR0cmlidXRlID0gZnVuY3Rpb24gX3NldHRlckF0dHJpYnV0ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfZ2V0U2V0dGVyID0gZnVuY3Rpb24gX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih0YXJnZXRbcHJvcGVydHldKSA/IF9zZXR0ZXJGdW5jIDogX2lzVW5kZWZpbmVkKHRhcmdldFtwcm9wZXJ0eV0pICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUgPyBfc2V0dGVyQXR0cmlidXRlIDogX3NldHRlclBsYWluO1xufSxcbiAgICBfcmVuZGVyUGxhaW4gPSBmdW5jdGlvbiBfcmVuZGVyUGxhaW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMDAwKSAvIDEwMDAwMDAsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQm9vbGVhbiA9IGZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgISEoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNvbXBsZXhTdHJpbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ29tcGxleFN0cmluZyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdCxcbiAgICAgIHMgPSBcIlwiO1xuXG4gIGlmICghcmF0aW8gJiYgZGF0YS5iKSB7XG4gICAgLy9iID0gYmVnaW5uaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmI7XG4gIH0gZWxzZSBpZiAocmF0aW8gPT09IDEgJiYgZGF0YS5lKSB7XG4gICAgLy9lID0gZW5kaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmU7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBzID0gcHQucCArIChwdC5tID8gcHQubShwdC5zICsgcHQuYyAqIHJhdGlvKSA6IE1hdGgucm91bmQoKHB0LnMgKyBwdC5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDApICsgczsgLy93ZSB1c2UgdGhlIFwicFwiIHByb3BlcnR5IGZvciB0aGUgdGV4dCBpbmJldHdlZW4gKGxpa2UgYSBzdWZmaXgpLiBBbmQgaW4gdGhlIGNvbnRleHQgb2YgYSBjb21wbGV4IHN0cmluZywgdGhlIG1vZGlmaWVyIChtKSBpcyB0eXBpY2FsbHkganVzdCBNYXRoLnJvdW5kKCksIGxpa2UgZm9yIFJHQiBjb2xvcnMuXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgcyArPSBkYXRhLmM7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBjaHVuayBvZiBub24tbnVtZXJpYyB0ZXh0LlxuICB9XG5cbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHMsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wVHdlZW5zKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cbn0sXG4gICAgX2FkZFBsdWdpbk1vZGlmaWVyID0gZnVuY3Rpb24gX2FkZFBsdWdpbk1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0LCBwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0LnAgPT09IHByb3BlcnR5ICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0KTtcbiAgICBwdCA9IG5leHQ7XG4gIH1cbn0sXG4gICAgX2tpbGxQcm9wVHdlZW5zT2YgPSBmdW5jdGlvbiBfa2lsbFByb3BUd2VlbnNPZihwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuXG4gICAgaWYgKHB0LnAgPT09IHByb3BlcnR5ICYmICFwdC5vcCB8fCBwdC5vcCA9PT0gcHJvcGVydHkpIHtcbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgfSBlbHNlIGlmICghcHQuZGVwKSB7XG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcgPSAxO1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiAhaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nO1xufSxcbiAgICBfc2V0dGVyV2l0aE1vZGlmaWVyID0gZnVuY3Rpb24gX3NldHRlcldpdGhNb2RpZmllcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICBkYXRhLm1TZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGF0YS5tLmNhbGwoZGF0YS50d2VlbiwgdmFsdWUsIGRhdGEubXQpLCBkYXRhKTtcbn0sXG4gICAgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSA9IGZ1bmN0aW9uIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkocGFyZW50KSB7XG4gIHZhciBwdCA9IHBhcmVudC5fcHQsXG4gICAgICBuZXh0LFxuICAgICAgcHQyLFxuICAgICAgZmlyc3QsXG4gICAgICBsYXN0OyAvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byBkbyB0aGVpciB3b3JrIGFmdGVyIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyB3ZXJlIGNyZWF0ZWQgKGxpa2UgUm91bmRQcm9wc1BsdWdpbiBhbmQgTW9kaWZpZXJzUGx1Z2luKVxuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdDIgPSBmaXJzdDtcblxuICAgIHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcbiAgICAgIHB0MiA9IHB0Mi5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSB7XG4gICAgICBwdC5fcHJldi5fbmV4dCA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdCA9IHB0O1xuICAgIH1cblxuICAgIGlmIChwdC5fbmV4dCA9IHB0Mikge1xuICAgICAgcHQyLl9wcmV2ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBwdDtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICBwYXJlbnQuX3B0ID0gZmlyc3Q7XG59OyAvL1Byb3BUd2VlbiBrZXk6IHQgPSB0YXJnZXQsIHAgPSBwcm9wLCByID0gcmVuZGVyZXIsIGQgPSBkYXRhLCBzID0gc3RhcnQsIGMgPSBjaGFuZ2UsIG9wID0gb3ZlcndyaXRlUHJvcGVydHkgKE9OTFkgcG9wdWxhdGVkIHdoZW4gaXQncyBkaWZmZXJlbnQgdGhhbiBwKSwgcHIgPSBwcmlvcml0eSwgX25leHQvX3ByZXYgZm9yIHRoZSBsaW5rZWQgbGlzdCBzaWJsaW5ncywgc2V0ID0gc2V0dGVyLCBtID0gbW9kaWZpZXIsIG1TZXQgPSBtb2RpZmllclNldHRlciAodGhlIG9yaWdpbmFsIHNldHRlciwgYmVmb3JlIGEgbW9kaWZpZXIgd2FzIGFkZGVkKVxuXG5cbmV4cG9ydCB2YXIgUHJvcFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvcFR3ZWVuKG5leHQsIHRhcmdldCwgcHJvcCwgc3RhcnQsIGNoYW5nZSwgcmVuZGVyZXIsIGRhdGEsIHNldHRlciwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgdGhpcy5zID0gc3RhcnQ7XG4gICAgdGhpcy5jID0gY2hhbmdlO1xuICAgIHRoaXMucCA9IHByb3A7XG4gICAgdGhpcy5yID0gcmVuZGVyZXIgfHwgX3JlbmRlclBsYWluO1xuICAgIHRoaXMuZCA9IGRhdGEgfHwgdGhpcztcbiAgICB0aGlzLnNldCA9IHNldHRlciB8fCBfc2V0dGVyUGxhaW47XG4gICAgdGhpcy5wciA9IHByaW9yaXR5IHx8IDA7XG4gICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5fcHJldiA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90bzQgPSBQcm9wVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzQubW9kaWZpZXIgPSBmdW5jdGlvbiBtb2RpZmllcihmdW5jLCB0d2VlbiwgdGFyZ2V0KSB7XG4gICAgdGhpcy5tU2V0ID0gdGhpcy5tU2V0IHx8IHRoaXMuc2V0OyAvL2luIGNhc2UgaXQgd2FzIGFscmVhZHkgc2V0IChhIFByb3BUd2VlbiBjYW4gb25seSBoYXZlIG9uZSBtb2RpZmllcilcblxuICAgIHRoaXMuc2V0ID0gX3NldHRlcldpdGhNb2RpZmllcjtcbiAgICB0aGlzLm0gPSBmdW5jO1xuICAgIHRoaXMubXQgPSB0YXJnZXQ7IC8vbW9kaWZpZXIgdGFyZ2V0XG5cbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG4gIH07XG5cbiAgcmV0dXJuIFByb3BUd2Vlbjtcbn0oKTsgLy9Jbml0aWFsaXphdGlvbiB0YXNrc1xuXG5fZm9yRWFjaE5hbWUoX2NhbGxiYWNrTmFtZXMgKyBcInBhcmVudCxkdXJhdGlvbixlYXNlLGRlbGF5LG92ZXJ3cml0ZSxydW5CYWNrd2FyZHMsc3RhcnRBdCx5b3lvLGltbWVkaWF0ZVJlbmRlcixyZXBlYXQscmVwZWF0RGVsYXksZGF0YSxwYXVzZWQscmV2ZXJzZWQsbGF6eSxjYWxsYmFja1Njb3BlLHN0cmluZ0ZpbHRlcixpZCx5b3lvRWFzZSxzdGFnZ2VyLGluaGVyaXQscmVwZWF0UmVmcmVzaCxrZXlmcmFtZXMsYXV0b1JldmVydCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG59KTtcblxuX2dsb2JhbHMuVHdlZW5NYXggPSBfZ2xvYmFscy5Ud2VlbkxpdGUgPSBUd2Vlbjtcbl9nbG9iYWxzLlRpbWVsaW5lTGl0ZSA9IF9nbG9iYWxzLlRpbWVsaW5lTWF4ID0gVGltZWxpbmU7XG5fZ2xvYmFsVGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICBzb3J0Q2hpbGRyZW46IGZhbHNlLFxuICBkZWZhdWx0czogX2RlZmF1bHRzLFxuICBhdXRvUmVtb3ZlQ2hpbGRyZW46IHRydWUsXG4gIGlkOiBcInJvb3RcIixcbiAgc21vb3RoQ2hpbGRUaW1pbmc6IHRydWVcbn0pO1xuX2NvbmZpZy5zdHJpbmdGaWx0ZXIgPSBfY29sb3JTdHJpbmdGaWx0ZXI7XG5cbnZhciBfbWVkaWEgPSBbXSxcbiAgICBfbGlzdGVuZXJzID0ge30sXG4gICAgX2VtcHR5QXJyYXkgPSBbXSxcbiAgICBfbGFzdE1lZGlhVGltZSA9IDAsXG4gICAgX2NvbnRleHRJRCA9IDAsXG4gICAgX2Rpc3BhdGNoID0gZnVuY3Rpb24gX2Rpc3BhdGNoKHR5cGUpIHtcbiAgcmV0dXJuIChfbGlzdGVuZXJzW3R5cGVdIHx8IF9lbXB0eUFycmF5KS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZigpO1xuICB9KTtcbn0sXG4gICAgX29uTWVkaWFDaGFuZ2UgPSBmdW5jdGlvbiBfb25NZWRpYUNoYW5nZSgpIHtcbiAgdmFyIHRpbWUgPSBEYXRlLm5vdygpLFxuICAgICAgbWF0Y2hlcyA9IFtdO1xuXG4gIGlmICh0aW1lIC0gX2xhc3RNZWRpYVRpbWUgPiAyKSB7XG4gICAgX2Rpc3BhdGNoKFwibWF0Y2hNZWRpYUluaXRcIik7XG5cbiAgICBfbWVkaWEuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIHF1ZXJpZXMgPSBjLnF1ZXJpZXMsXG4gICAgICAgICAgY29uZGl0aW9ucyA9IGMuY29uZGl0aW9ucyxcbiAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGFueU1hdGNoLFxuICAgICAgICAgIHRvZ2dsZWQ7XG5cbiAgICAgIGZvciAocCBpbiBxdWVyaWVzKSB7XG4gICAgICAgIG1hdGNoID0gX3dpbi5tYXRjaE1lZGlhKHF1ZXJpZXNbcF0pLm1hdGNoZXM7IC8vIEZpcmVmb3ggZG9lc24ndCB1cGRhdGUgdGhlIFwibWF0Y2hlc1wiIHByb3BlcnR5IG9mIHRoZSBNZWRpYVF1ZXJ5TGlzdCBvYmplY3QgY29ycmVjdGx5IC0gaXQgb25seSBkb2VzIHNvIGFzIGl0IGNhbGxzIGl0cyBjaGFuZ2UgaGFuZGxlciAtIHNvIHdlIG11c3QgcmUtY3JlYXRlIGEgbWVkaWEgcXVlcnkgaGVyZSB0byBlbnN1cmUgaXQncyBhY2N1cmF0ZS5cblxuICAgICAgICBtYXRjaCAmJiAoYW55TWF0Y2ggPSAxKTtcblxuICAgICAgICBpZiAobWF0Y2ggIT09IGNvbmRpdGlvbnNbcF0pIHtcbiAgICAgICAgICBjb25kaXRpb25zW3BdID0gbWF0Y2g7XG4gICAgICAgICAgdG9nZ2xlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgYy5yZXZlcnQoKTtcbiAgICAgICAgYW55TWF0Y2ggJiYgbWF0Y2hlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2Rpc3BhdGNoKFwibWF0Y2hNZWRpYVJldmVydFwiKTtcblxuICAgIG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMub25NYXRjaChjKTtcbiAgICB9KTtcbiAgICBfbGFzdE1lZGlhVGltZSA9IHRpbWU7XG5cbiAgICBfZGlzcGF0Y2goXCJtYXRjaE1lZGlhXCIpO1xuICB9XG59O1xuXG52YXIgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbnRleHQoZnVuYywgc2NvcGUpIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gc2NvcGUgJiYgc2VsZWN0b3Ioc2NvcGUpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX3IgPSBbXTsgLy8gcmV0dXJuZWQvY2xlYW51cCBmdW5jdGlvbnNcblxuICAgIHRoaXMuaXNSZXZlcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSBfY29udGV4dElEKys7IC8vIHRvIHdvcmsgYXJvdW5kIGlzc3VlcyB0aGF0IGZyYW1ld29ya3MgbGlrZSBWdWUgY2F1c2UgYnkgbWFraW5nIHRoaW5ncyBpbnRvIFByb3hpZXMgd2hpY2ggbWFrZSBpdCBpbXBvc3NpYmxlIHRvIGRvIHNvbWV0aGluZyBsaWtlIF9tZWRpYS5pbmRleE9mKHRoaXMpIGJlY2F1c2UgXCJ0aGlzXCIgd291bGQgbm8gbG9uZ2VyIHJlZmVyIHRvIHRoZSBDb250ZXh0IGluc3RhbmNlIGl0c2VsZiAtIGl0J2QgcmVmZXIgdG8gYSBQcm94eSEgV2UgbmVlZGVkIGEgd2F5IHRvIGlkZW50aWZ5IHRoZSBjb250ZXh0IHVuaXF1ZWx5XG5cbiAgICBmdW5jICYmIHRoaXMuYWRkKGZ1bmMpO1xuICB9XG5cbiAgdmFyIF9wcm90bzUgPSBDb250ZXh0LnByb3RvdHlwZTtcblxuICBfcHJvdG81LmFkZCA9IGZ1bmN0aW9uIGFkZChuYW1lLCBmdW5jLCBzY29wZSkge1xuICAgIC8vIHBvc3NpYmxlIGZ1dHVyZSBhZGRpdGlvbiBpZiB3ZSBuZWVkIHRoZSBhYmlsaXR5IHRvIGFkZCgpIGFuIGFuaW1hdGlvbiB0byBhIGNvbnRleHQgYW5kIGZvciB3aGF0ZXZlciByZWFzb24gY2Fubm90IGNyZWF0ZSB0aGF0IGFuaW1hdGlvbiBpbnNpZGUgb2YgYSBjb250ZXh0LmFkZCgoKSA9PiB7Li4ufSkgZnVuY3Rpb24uXG4gICAgLy8gaWYgKG5hbWUgJiYgX2lzRnVuY3Rpb24obmFtZS5yZXZlcnQpKSB7XG4gICAgLy8gXHR0aGlzLmRhdGEucHVzaChuYW1lKTtcbiAgICAvLyBcdHJldHVybiAobmFtZS5fY3R4ID0gdGhpcyk7XG4gICAgLy8gfVxuICAgIGlmIChfaXNGdW5jdGlvbihuYW1lKSkge1xuICAgICAgc2NvcGUgPSBmdW5jO1xuICAgICAgZnVuYyA9IG5hbWU7XG4gICAgICBuYW1lID0gX2lzRnVuY3Rpb247XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBmID0gZnVuY3Rpb24gZigpIHtcbiAgICAgIHZhciBwcmV2ID0gX2NvbnRleHQsXG4gICAgICAgICAgcHJldlNlbGVjdG9yID0gc2VsZi5zZWxlY3RvcixcbiAgICAgICAgICByZXN1bHQ7XG4gICAgICBwcmV2ICYmIHByZXYgIT09IHNlbGYgJiYgcHJldi5kYXRhLnB1c2goc2VsZik7XG4gICAgICBzY29wZSAmJiAoc2VsZi5zZWxlY3RvciA9IHNlbGVjdG9yKHNjb3BlKSk7XG4gICAgICBfY29udGV4dCA9IHNlbGY7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICBfaXNGdW5jdGlvbihyZXN1bHQpICYmIHNlbGYuX3IucHVzaChyZXN1bHQpO1xuICAgICAgX2NvbnRleHQgPSBwcmV2O1xuICAgICAgc2VsZi5zZWxlY3RvciA9IHByZXZTZWxlY3RvcjtcbiAgICAgIHNlbGYuaXNSZXZlcnRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgc2VsZi5sYXN0ID0gZjtcbiAgICByZXR1cm4gbmFtZSA9PT0gX2lzRnVuY3Rpb24gPyBmKHNlbGYpIDogbmFtZSA/IHNlbGZbbmFtZV0gPSBmIDogZjtcbiAgfTtcblxuICBfcHJvdG81Lmlnbm9yZSA9IGZ1bmN0aW9uIGlnbm9yZShmdW5jKSB7XG4gICAgdmFyIHByZXYgPSBfY29udGV4dDtcbiAgICBfY29udGV4dCA9IG51bGw7XG4gICAgZnVuYyh0aGlzKTtcbiAgICBfY29udGV4dCA9IHByZXY7XG4gIH07XG5cbiAgX3Byb3RvNS5nZXRUd2VlbnMgPSBmdW5jdGlvbiBnZXRUd2VlbnMoKSB7XG4gICAgdmFyIGEgPSBbXTtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBDb250ZXh0ID8gYS5wdXNoLmFwcGx5KGEsIGUuZ2V0VHdlZW5zKCkpIDogZSBpbnN0YW5jZW9mIFR3ZWVuICYmICEoZS5wYXJlbnQgJiYgZS5wYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIikgJiYgYS5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLl9yLmxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGggPSAwO1xuICB9O1xuXG4gIF9wcm90bzUua2lsbCA9IGZ1bmN0aW9uIGtpbGwocmV2ZXJ0LCBtYXRjaE1lZGlhKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAocmV2ZXJ0KSB7XG4gICAgICB2YXIgdHdlZW5zID0gdGhpcy5nZXRUd2VlbnMoKTtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIC8vIEZsaXAgcGx1Z2luIHR3ZWVucyBhcmUgdmVyeSBkaWZmZXJlbnQgaW4gdGhhdCB0aGV5IHNob3VsZCBhY3R1YWxseSBiZSBwdXNoZWQgdG8gdGhlaXIgZW5kLiBUaGUgcGx1Z2luIHJlcGxhY2VzIHRoZSB0aW1lbGluZSdzIC5yZXZlcnQoKSBtZXRob2QgdG8gZG8gZXhhY3RseSB0aGF0LiBCdXQgd2UgYWxzbyBuZWVkIHRvIHJlbW92ZSBhbnkgb2YgdGhvc2UgbmVzdGVkIHR3ZWVucyBpbnNpZGUgdGhlIGZsaXAgdGltZWxpbmUgc28gdGhhdCB0aGV5IGRvbid0IGdldCBpbmRpdmlkdWFsbHkgcmV2ZXJ0ZWQuXG4gICAgICAgIGlmICh0LmRhdGEgPT09IFwiaXNGbGlwXCIpIHtcbiAgICAgICAgICB0LnJldmVydCgpO1xuICAgICAgICAgIHQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpLmZvckVhY2goZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdHdlZW5zLnNwbGljZSh0d2VlbnMuaW5kZXhPZih0d2VlbiksIDEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gc2F2ZSBhcyBhbiBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gY2FjaGUgdGhlIGdsb2JhbFRpbWUgZm9yIGVhY2ggdHdlZW4gdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UgZHVyaW5nIHRoZSBzb3J0XG5cbiAgICAgIHR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnOiB0Lmdsb2JhbFRpbWUoMCksXG4gICAgICAgICAgdDogdFxuICAgICAgICB9O1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5nIC0gYS5nIHx8IC1JbmZpbml0eTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIG8udC5yZXZlcnQocmV2ZXJ0KTtcbiAgICAgIH0pOyAvLyBub3RlOiBhbGwgb2YgdGhlIF9zdGFydEF0IHR3ZWVucyBzaG91bGQgYmUgcmV2ZXJ0ZWQgaW4gcmV2ZXJzZSBvcmRlciB0aGF0IHRoZXkgd2VyZSBjcmVhdGVkLCBhbmQgdGhleSdsbCBhbGwgaGF2ZSB0aGUgc2FtZSBnbG9iYWxUaW1lICgtMSkgc28gdGhlIFwiIHx8IC0xXCIgaW4gdGhlIHNvcnQga2VlcHMgdGhlIG9yZGVyIHByb3Blcmx5LlxuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIShlIGluc3RhbmNlb2YgVHdlZW4pICYmIGUucmV2ZXJ0ICYmIGUucmV2ZXJ0KHJldmVydCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fci5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmKHJldmVydCwgX3RoaXM0KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmlzUmV2ZXJ0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5raWxsICYmIGUua2lsbCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKG1hdGNoTWVkaWEpIHtcbiAgICAgIHZhciBpID0gX21lZGlhLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAvLyBwcmV2aW91c2x5LCB3ZSBjaGVja2VkIF9tZWRpYS5pbmRleE9mKHRoaXMpLCBidXQgc29tZSBmcmFtZXdvcmtzIGxpa2UgVnVlIGVuZm9yY2UgUHJveHkgb2JqZWN0cyB0aGF0IG1ha2UgaXQgaW1wb3NzaWJsZSB0byBnZXQgdGhlIHByb3BlciByZXN1bHQgdGhhdCB3YXksIHNvIHdlIG11c3QgdXNlIGEgdW5pcXVlIElEIG51bWJlciBpbnN0ZWFkLlxuICAgICAgICBfbWVkaWFbaV0uaWQgPT09IHRoaXMuaWQgJiYgX21lZGlhLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvNS5yZXZlcnQgPSBmdW5jdGlvbiByZXZlcnQoY29uZmlnKSB7XG4gICAgdGhpcy5raWxsKGNvbmZpZyB8fCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRleHQ7XG59KCk7XG5cbnZhciBNYXRjaE1lZGlhID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF0Y2hNZWRpYShzY29wZSkge1xuICAgIHRoaXMuY29udGV4dHMgPSBbXTtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gIH1cblxuICB2YXIgX3Byb3RvNiA9IE1hdGNoTWVkaWEucHJvdG90eXBlO1xuXG4gIF9wcm90bzYuYWRkID0gZnVuY3Rpb24gYWRkKGNvbmRpdGlvbnMsIGZ1bmMsIHNjb3BlKSB7XG4gICAgX2lzT2JqZWN0KGNvbmRpdGlvbnMpIHx8IChjb25kaXRpb25zID0ge1xuICAgICAgbWF0Y2hlczogY29uZGl0aW9uc1xuICAgIH0pO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoMCwgc2NvcGUgfHwgdGhpcy5zY29wZSksXG4gICAgICAgIGNvbmQgPSBjb250ZXh0LmNvbmRpdGlvbnMgPSB7fSxcbiAgICAgICAgbXEsXG4gICAgICAgIHAsXG4gICAgICAgIGFjdGl2ZTtcbiAgICBfY29udGV4dCAmJiAhY29udGV4dC5zZWxlY3RvciAmJiAoY29udGV4dC5zZWxlY3RvciA9IF9jb250ZXh0LnNlbGVjdG9yKTsgLy8gaW4gY2FzZSBhIGNvbnRleHQgaXMgY3JlYXRlZCBpbnNpZGUgYSBjb250ZXh0LiBMaWtlIGEgZ3NhcC5tYXRjaE1lZGlhKCkgdGhhdCdzIGluc2lkZSBhIHNjb3BlZCBnc2FwLmNvbnRleHQoKVxuXG4gICAgdGhpcy5jb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuICAgIGZ1bmMgPSBjb250ZXh0LmFkZChcIm9uTWF0Y2hcIiwgZnVuYyk7XG4gICAgY29udGV4dC5xdWVyaWVzID0gY29uZGl0aW9ucztcblxuICAgIGZvciAocCBpbiBjb25kaXRpb25zKSB7XG4gICAgICBpZiAocCA9PT0gXCJhbGxcIikge1xuICAgICAgICBhY3RpdmUgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXEgPSBfd2luLm1hdGNoTWVkaWEoY29uZGl0aW9uc1twXSk7XG5cbiAgICAgICAgaWYgKG1xKSB7XG4gICAgICAgICAgX21lZGlhLmluZGV4T2YoY29udGV4dCkgPCAwICYmIF9tZWRpYS5wdXNoKGNvbnRleHQpO1xuICAgICAgICAgIChjb25kW3BdID0gbXEubWF0Y2hlcykgJiYgKGFjdGl2ZSA9IDEpO1xuICAgICAgICAgIG1xLmFkZExpc3RlbmVyID8gbXEuYWRkTGlzdGVuZXIoX29uTWVkaWFDaGFuZ2UpIDogbXEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBfb25NZWRpYUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmUgJiYgZnVuYyhjb250ZXh0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyByZWZyZXNoKCkge1xuICAvLyBcdGxldCB0aW1lID0gX2xhc3RNZWRpYVRpbWUsXG4gIC8vIFx0XHRtZWRpYSA9IF9tZWRpYTtcbiAgLy8gXHRfbGFzdE1lZGlhVGltZSA9IC0xO1xuICAvLyBcdF9tZWRpYSA9IHRoaXMuY29udGV4dHM7XG4gIC8vIFx0X29uTWVkaWFDaGFuZ2UoKTtcbiAgLy8gXHRfbGFzdE1lZGlhVGltZSA9IHRpbWU7XG4gIC8vIFx0X21lZGlhID0gbWVkaWE7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90bzYucmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KGNvbmZpZykge1xuICAgIHRoaXMua2lsbChjb25maWcgfHwge30pO1xuICB9O1xuXG4gIF9wcm90bzYua2lsbCA9IGZ1bmN0aW9uIGtpbGwocmV2ZXJ0KSB7XG4gICAgdGhpcy5jb250ZXh0cy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5raWxsKHJldmVydCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1hdGNoTWVkaWE7XG59KCk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX2dzYXAgPSB7XG4gIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgcmV0dXJuIF9jcmVhdGVQbHVnaW4oY29uZmlnKTtcbiAgICB9KTtcbiAgfSxcbiAgdGltZWxpbmU6IGZ1bmN0aW9uIHRpbWVsaW5lKHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFRpbWVsaW5lKHZhcnMpO1xuICB9LFxuICBnZXRUd2VlbnNPZjogZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSk7XG4gIH0sXG4gIGdldFByb3BlcnR5OiBmdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgX2lzU3RyaW5nKHRhcmdldCkgJiYgKHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KVswXSk7IC8vaW4gY2FzZSBzZWxlY3RvciB0ZXh0IG9yIGFuIGFycmF5IGlzIHBhc3NlZCBpblxuXG4gICAgdmFyIGdldHRlciA9IF9nZXRDYWNoZSh0YXJnZXQgfHwge30pLmdldCxcbiAgICAgICAgZm9ybWF0ID0gdW5pdCA/IF9wYXNzVGhyb3VnaCA6IF9udW1lcmljSWZQb3NzaWJsZTtcblxuICAgIHVuaXQgPT09IFwibmF0aXZlXCIgJiYgKHVuaXQgPSBcIlwiKTtcbiAgICByZXR1cm4gIXRhcmdldCA/IHRhcmdldCA6ICFwcm9wZXJ0eSA/IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgfSA6IGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gIH0sXG4gIHF1aWNrU2V0dGVyOiBmdW5jdGlvbiBxdWlja1NldHRlcih0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB7XG4gICAgdGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpO1xuXG4gICAgaWYgKHRhcmdldC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc2V0dGVycyA9IHRhcmdldC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGdzYXAucXVpY2tTZXR0ZXIodCwgcHJvcGVydHksIHVuaXQpO1xuICAgICAgfSksXG4gICAgICAgICAgbCA9IHNldHRlcnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IGw7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHNldHRlcnNbaV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRhcmdldCA9IHRhcmdldFswXSB8fCB7fTtcblxuICAgIHZhciBQbHVnaW4gPSBfcGx1Z2luc1twcm9wZXJ0eV0sXG4gICAgICAgIGNhY2hlID0gX2dldENhY2hlKHRhcmdldCksXG4gICAgICAgIHAgPSBjYWNoZS5oYXJuZXNzICYmIChjYWNoZS5oYXJuZXNzLmFsaWFzZXMgfHwge30pW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSxcbiAgICAgICAgLy8gaW4gY2FzZSBpdCdzIGFuIGFsaWFzLCBsaWtlIFwicm90YXRlXCIgZm9yIFwicm90YXRpb25cIi5cbiAgICBzZXR0ZXIgPSBQbHVnaW4gPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBwID0gbmV3IFBsdWdpbigpO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ID0gMDtcbiAgICAgIHAuaW5pdCh0YXJnZXQsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgX3F1aWNrVHdlZW4sIDAsIFt0YXJnZXRdKTtcbiAgICAgIHAucmVuZGVyKDEsIHApO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ICYmIF9yZW5kZXJQcm9wVHdlZW5zKDEsIF9xdWlja1R3ZWVuKTtcbiAgICB9IDogY2FjaGUuc2V0KHRhcmdldCwgcCk7XG5cbiAgICByZXR1cm4gUGx1Z2luID8gc2V0dGVyIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2V0dGVyKHRhcmdldCwgcCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBjYWNoZSwgMSk7XG4gICAgfTtcbiAgfSxcbiAgcXVpY2tUbzogZnVuY3Rpb24gcXVpY2tUbyh0YXJnZXQsIHByb3BlcnR5LCB2YXJzKSB7XG4gICAgdmFyIF9tZXJnZTI7XG5cbiAgICB2YXIgdHdlZW4gPSBnc2FwLnRvKHRhcmdldCwgX21lcmdlKChfbWVyZ2UyID0ge30sIF9tZXJnZTJbcHJvcGVydHldID0gXCIrPTAuMVwiLCBfbWVyZ2UyLnBhdXNlZCA9IHRydWUsIF9tZXJnZTIpLCB2YXJzIHx8IHt9KSksXG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKSB7XG4gICAgICByZXR1cm4gdHdlZW4ucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpO1xuICAgIH07XG5cbiAgICBmdW5jLnR3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0sXG4gIGlzVHdlZW5pbmc6IGZ1bmN0aW9uIGlzVHdlZW5pbmcodGFyZ2V0cykge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHZhbHVlKSB7XG4gICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmMykge1xuICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0LFxuICAgICAgICBwbHVnaW5zID0gX3JlZjMucGx1Z2lucyxcbiAgICAgICAgZGVmYXVsdHMgPSBfcmVmMy5kZWZhdWx0cyxcbiAgICAgICAgZXh0ZW5kVGltZWxpbmUgPSBfcmVmMy5leHRlbmRUaW1lbGluZTtcbiAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgfSk7XG5cbiAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgfTtcblxuICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChfZWZmZWN0c1tuYW1lXSh0YXJnZXRzLCBfaXNPYmplY3QodmFycykgPyB2YXJzIDogKHBvc2l0aW9uID0gdmFycykgJiYge30sIHRoaXMpLCBwb3NpdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgfSxcbiAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gIH0sXG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICB9LFxuICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dDtcbiAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgX2dsb2JhbFRpbWVsaW5lLnJlbW92ZSh0bCk7XG5cbiAgICB0bC5fZHAgPSAwOyAvL290aGVyd2lzZSBpdCdsbCBnZXQgcmUtYWN0aXZhdGVkIHdoZW4gYWRkaW5nIGNoaWxkcmVuIGFuZCBiZSByZS1pbnRyb2R1Y2VkIGludG8gX2dsb2JhbFRpbWVsaW5lJ3MgbGlua2VkIGxpc3QgKHRoZW4gYWRkZWQgdG8gaXRzZWxmKS5cblxuICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICBpZiAoaW5jbHVkZURlbGF5ZWRDYWxscyB8fCAhKCFjaGlsZC5fZHVyICYmIGNoaWxkIGluc3RhbmNlb2YgVHdlZW4gJiYgY2hpbGQudmFycy5vbkNvbXBsZXRlID09PSBjaGlsZC5fdGFyZ2V0c1swXSkpIHtcbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH0sXG4gIGNvbnRleHQ6IGZ1bmN0aW9uIGNvbnRleHQoZnVuYywgc2NvcGUpIHtcbiAgICByZXR1cm4gZnVuYyA/IG5ldyBDb250ZXh0KGZ1bmMsIHNjb3BlKSA6IF9jb250ZXh0O1xuICB9LFxuICBtYXRjaE1lZGlhOiBmdW5jdGlvbiBtYXRjaE1lZGlhKHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaE1lZGlhKHNjb3BlKTtcbiAgfSxcbiAgbWF0Y2hNZWRpYVJlZnJlc2g6IGZ1bmN0aW9uIG1hdGNoTWVkaWFSZWZyZXNoKCkge1xuICAgIHJldHVybiBfbWVkaWEuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNvbmQgPSBjLmNvbmRpdGlvbnMsXG4gICAgICAgICAgZm91bmQsXG4gICAgICAgICAgcDtcblxuICAgICAgZm9yIChwIGluIGNvbmQpIHtcbiAgICAgICAgaWYgKGNvbmRbcF0pIHtcbiAgICAgICAgICBjb25kW3BdID0gZmFsc2U7XG4gICAgICAgICAgZm91bmQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvdW5kICYmIGMucmV2ZXJ0KCk7XG4gICAgfSkgfHwgX29uTWVkaWFDaGFuZ2UoKTtcbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaykge1xuICAgIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSB8fCAoX2xpc3RlbmVyc1t0eXBlXSA9IFtdKTtcbiAgICB+YS5pbmRleE9mKGNhbGxiYWNrKSB8fCBhLnB1c2goY2FsbGJhY2spO1xuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdLFxuICAgICAgICBpID0gYSAmJiBhLmluZGV4T2YoY2FsbGJhY2spO1xuICAgIGkgPj0gMCAmJiBhLnNwbGljZShpLCAxKTtcbiAgfSxcbiAgdXRpbHM6IHtcbiAgICB3cmFwOiB3cmFwLFxuICAgIHdyYXBZb3lvOiB3cmFwWW95byxcbiAgICBkaXN0cmlidXRlOiBkaXN0cmlidXRlLFxuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNuYXA6IHNuYXAsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgZ2V0VW5pdDogZ2V0VW5pdCxcbiAgICBjbGFtcDogY2xhbXAsXG4gICAgc3BsaXRDb2xvcjogc3BsaXRDb2xvcixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgcGlwZTogcGlwZSxcbiAgICB1bml0aXplOiB1bml0aXplLFxuICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICBzaHVmZmxlOiBzaHVmZmxlXG4gIH0sXG4gIGluc3RhbGw6IF9pbnN0YWxsLFxuICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgdGlja2VyOiBfdGlja2VyLFxuICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgZ2xvYmFsVGltZWxpbmU6IF9nbG9iYWxUaW1lbGluZSxcbiAgY29yZToge1xuICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgIGdsb2JhbHM6IF9hZGRHbG9iYWwsXG4gICAgVHdlZW46IFR3ZWVuLFxuICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICBBbmltYXRpb246IEFuaW1hdGlvbixcbiAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtLFxuICAgIHJldmVydGluZzogZnVuY3Rpb24gcmV2ZXJ0aW5nKCkge1xuICAgICAgcmV0dXJuIF9yZXZlcnRpbmc7XG4gICAgfSxcbiAgICBjb250ZXh0OiBmdW5jdGlvbiBjb250ZXh0KHRvQWRkKSB7XG4gICAgICBpZiAodG9BZGQgJiYgX2NvbnRleHQpIHtcbiAgICAgICAgX2NvbnRleHQuZGF0YS5wdXNoKHRvQWRkKTtcblxuICAgICAgICB0b0FkZC5fY3R4ID0gX2NvbnRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfY29udGV4dDtcbiAgICB9LFxuICAgIHN1cHByZXNzT3ZlcndyaXRlczogZnVuY3Rpb24gc3VwcHJlc3NPdmVyd3JpdGVzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3N1cHByZXNzT3ZlcndyaXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sZGVsYXllZENhbGwsc2V0LGtpbGxUd2VlbnNPZlwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2dzYXBbbmFtZV0gPSBUd2VlbltuYW1lXTtcbn0pO1xuXG5fdGlja2VyLmFkZChUaW1lbGluZS51cGRhdGVSb290KTtcblxuX3F1aWNrVHdlZW4gPSBfZ3NhcC50byh7fSwge1xuICBkdXJhdGlvbjogMFxufSk7IC8vIC0tLS0gRVhUUkEgUExVR0lOUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgX2dldFBsdWdpblByb3BUd2VlbiA9IGZ1bmN0aW9uIF9nZXRQbHVnaW5Qcm9wVHdlZW4ocGx1Z2luLCBwcm9wKSB7XG4gIHZhciBwdCA9IHBsdWdpbi5fcHQ7XG5cbiAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3AgJiYgcHQub3AgIT09IHByb3AgJiYgcHQuZnAgIT09IHByb3ApIHtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24gX2FkZE1vZGlmaWVycyh0d2VlbiwgbW9kaWZpZXJzKSB7XG4gIHZhciB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIHB0O1xuXG4gIGZvciAocCBpbiBtb2RpZmllcnMpIHtcbiAgICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwdCA9IHR3ZWVuLl9wdExvb2t1cFtpXVtwXTtcblxuICAgICAgaWYgKHB0ICYmIChwdCA9IHB0LmQpKSB7XG4gICAgICAgIGlmIChwdC5fcHQpIHtcbiAgICAgICAgICAvLyBpcyBhIHBsdWdpblxuICAgICAgICAgIHB0ID0gX2dldFBsdWdpblByb3BUd2VlbihwdCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdCAmJiBwdC5tb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllcnNbcF0sIHR3ZWVuLCB0YXJnZXRzW2ldLCBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2J1aWxkTW9kaWZpZXJQbHVnaW4gPSBmdW5jdGlvbiBfYnVpbGRNb2RpZmllclBsdWdpbihuYW1lLCBtb2RpZmllcikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgcmF3VmFyczogMSxcbiAgICAvL2Rvbid0IHByZS1wcm9jZXNzIGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyBvciBcInJhbmRvbSgpXCIgc3RyaW5ncy5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4pIHtcbiAgICAgIHR3ZWVuLl9vbkluaXQgPSBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIHRlbXAsIHA7XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbbmFtZV0gPSAxO1xuICAgICAgICAgIH0pOyAvL2lmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIHRvIHJvdW5kUHJvcHMsIGxpa2UgXCJ4LHlcIiwgd2Ugcm91bmQgdG8gd2hvbGUgbnVtYmVycy5cblxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgdGVtcFtwXSA9IG1vZGlmaWVyKHZhcnNbcF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZE1vZGlmaWVycyh0d2VlbiwgdmFycyk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07IC8vcmVnaXN0ZXIgY29yZSBwbHVnaW5zXG5cblxuZXhwb3J0IHZhciBnc2FwID0gX2dzYXAucmVnaXN0ZXJQbHVnaW4oe1xuICBuYW1lOiBcImF0dHJcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwLCBwdCwgdjtcbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgdiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUocCkgfHwgXCJcIjtcbiAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodiB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIHB0Lm9wID0gcDtcbiAgICAgIHB0LmIgPSB2OyAvLyByZWNvcmQgdGhlIGJlZ2lubmluZyB2YWx1ZSBzbyB3ZSBjYW4gcmV2ZXJ0KClcblxuICAgICAgdGhpcy5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHJhdGlvLCBkYXRhKSB7XG4gICAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIF9yZXZlcnRpbmcgPyBwdC5zZXQocHQudCwgcHQucCwgcHQuYiwgcHQpIDogcHQucihyYXRpbywgcHQuZCk7IC8vIGlmIHJldmVydGluZywgZ28gYmFjayB0byB0aGUgb3JpZ2luYWwgKHB0LmIpXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmFkZCh0YXJnZXQsIGksIHRhcmdldFtpXSB8fCAwLCB2YWx1ZVtpXSwgMCwgMCwgMCwgMCwgMCwgMSk7XG4gICAgfVxuICB9XG59LCBfYnVpbGRNb2RpZmllclBsdWdpbihcInJvdW5kUHJvcHNcIiwgX3JvdW5kTW9kaWZpZXIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcIm1vZGlmaWVyc1wiKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJzbmFwXCIsIHNuYXApKSB8fCBfZ3NhcDsgLy90byBwcmV2ZW50IHRoZSBjb3JlIHBsdWdpbnMgZnJvbSBiZWluZyBkcm9wcGVkIHZpYSBhZ2dyZXNzaXZlIHRyZWUgc2hha2luZywgd2UgbXVzdCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoaXMgd2F5LlxuXG5Ud2Vlbi52ZXJzaW9uID0gVGltZWxpbmUudmVyc2lvbiA9IGdzYXAudmVyc2lvbiA9IFwiMy4xMi4yXCI7XG5fY29yZVJlYWR5ID0gMTtcbl93aW5kb3dFeGlzdHMoKSAmJiBfd2FrZSgpO1xudmFyIFBvd2VyMCA9IF9lYXNlTWFwLlBvd2VyMCxcbiAgICBQb3dlcjEgPSBfZWFzZU1hcC5Qb3dlcjEsXG4gICAgUG93ZXIyID0gX2Vhc2VNYXAuUG93ZXIyLFxuICAgIFBvd2VyMyA9IF9lYXNlTWFwLlBvd2VyMyxcbiAgICBQb3dlcjQgPSBfZWFzZU1hcC5Qb3dlcjQsXG4gICAgTGluZWFyID0gX2Vhc2VNYXAuTGluZWFyLFxuICAgIFF1YWQgPSBfZWFzZU1hcC5RdWFkLFxuICAgIEN1YmljID0gX2Vhc2VNYXAuQ3ViaWMsXG4gICAgUXVhcnQgPSBfZWFzZU1hcC5RdWFydCxcbiAgICBRdWludCA9IF9lYXNlTWFwLlF1aW50LFxuICAgIFN0cm9uZyA9IF9lYXNlTWFwLlN0cm9uZyxcbiAgICBFbGFzdGljID0gX2Vhc2VNYXAuRWxhc3RpYyxcbiAgICBCYWNrID0gX2Vhc2VNYXAuQmFjayxcbiAgICBTdGVwcGVkRWFzZSA9IF9lYXNlTWFwLlN0ZXBwZWRFYXNlLFxuICAgIEJvdW5jZSA9IF9lYXNlTWFwLkJvdW5jZSxcbiAgICBTaW5lID0gX2Vhc2VNYXAuU2luZSxcbiAgICBFeHBvID0gX2Vhc2VNYXAuRXhwbyxcbiAgICBDaXJjID0gX2Vhc2VNYXAuQ2lyYztcbmV4cG9ydCB7IFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9O1xuZXhwb3J0IHsgVHdlZW4gYXMgVHdlZW5NYXgsIFR3ZWVuIGFzIFR3ZWVuTGl0ZSwgVGltZWxpbmUgYXMgVGltZWxpbmVNYXgsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTGl0ZSwgZ3NhcCBhcyBkZWZhdWx0LCB3cmFwLCB3cmFwWW95bywgZGlzdHJpYnV0ZSwgcmFuZG9tLCBzbmFwLCBub3JtYWxpemUsIGdldFVuaXQsIGNsYW1wLCBzcGxpdENvbG9yLCB0b0FycmF5LCBzZWxlY3RvciwgbWFwUmFuZ2UsIHBpcGUsIHVuaXRpemUsIGludGVycG9sYXRlLCBzaHVmZmxlIH07IC8vZXhwb3J0IHNvbWUgaW50ZXJuYWwgbWV0aG9kcy9vcm9qZWN0cyBmb3IgdXNlIGluIENTU1BsdWdpbiBzbyB0aGF0IHdlIGNhbiBleHRlcm5hbGl6ZSB0aGF0IGZpbGUgYW5kIGFsbG93IGN1c3RvbSBidWlsZHMgdGhhdCBleGNsdWRlIGl0LlxuXG5leHBvcnQgeyBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9yZXBsYWNlUmFuZG9tLCBfY2hlY2tQbHVnaW4sIF9wbHVnaW5zLCBfdGlja2VyLCBfY29uZmlnLCBfcm91bmRNb2RpZmllciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAsIF9wYXJzZVJlbGF0aXZlIH07IiwiaW1wb3J0IHsgZ3NhcCwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjLCBUd2VlbkxpdGUsIFRpbWVsaW5lTGl0ZSwgVGltZWxpbmVNYXggfSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcbmltcG9ydCB7IENTU1BsdWdpbiB9IGZyb20gXCIuL0NTU1BsdWdpbi5qc1wiO1xudmFyIGdzYXBXaXRoQ1NTID0gZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pIHx8IGdzYXAsXG4gICAgLy8gdG8gcHJvdGVjdCBmcm9tIHRyZWUgc2hha2luZ1xuVHdlZW5NYXhXaXRoQ1NTID0gZ3NhcFdpdGhDU1MuY29yZS5Ud2VlbjtcbmV4cG9ydCB7IGdzYXBXaXRoQ1NTIGFzIGdzYXAsIGdzYXBXaXRoQ1NTIGFzIGRlZmF1bHQsIENTU1BsdWdpbiwgVHdlZW5NYXhXaXRoQ1NTIGFzIFR3ZWVuTWF4LCBUd2VlbkxpdGUsIFRpbWVsaW5lTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9OyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwidmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYGlkZW50aXR5YCBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGNhc3QgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhc3RGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IGlkZW50aXR5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RGdW5jdGlvbjtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZvckVhY2gnKTtcbiIsInZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyksXG4gICAgY2FzdEZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fY2FzdEZ1bmN0aW9uJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggZWxlbWVudC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogKipOb3RlOioqIEFzIHdpdGggb3RoZXIgXCJDb2xsZWN0aW9uc1wiIG1ldGhvZHMsIG9iamVjdHMgd2l0aCBhIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IGFyZSBpdGVyYXRlZCBsaWtlIGFycmF5cy4gVG8gYXZvaWQgdGhpcyBiZWhhdmlvciB1c2UgYF8uZm9ySW5gXG4gKiBvciBgXy5mb3JPd25gIGZvciBvYmplY3QgaXRlcmF0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBhbGlhcyBlYWNoXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqIEBzZWUgXy5mb3JFYWNoUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogXy5mb3JFYWNoKFsxLCAyXSwgZnVuY3Rpb24odmFsdWUpIHtcbiAqICAgY29uc29sZS5sb2codmFsdWUpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzIGAxYCB0aGVuIGAyYC5cbiAqXG4gKiBfLmZvckVhY2goeyAnYSc6IDEsICdiJzogMiB9LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gKiAgIGNvbnNvbGUubG9nKGtleSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgJ2EnIHRoZW4gJ2InIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RWFjaCA6IGJhc2VFYWNoO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBjYXN0RnVuY3Rpb24oaXRlcmF0ZWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY3YzFkNDhkODZmMzU4NjMyNmUyXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJmcm9tIiwiYXV0b0FscGhhIiwiZGVsYXkiLCJoaWRlIiwidG8iLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwiSG9tZSIsIkFwcCIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJjb250ZW50IiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImxpbmtzIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsImdzYXAiLCJfZ2V0UHJvcGVydHkiLCJfbnVtRXhwIiwiX251bVdpdGhVbml0RXhwIiwiZ2V0VW5pdCIsIl9pc1N0cmluZyIsIl9pc1VuZGVmaW5lZCIsIl9yZW5kZXJDb21wbGV4U3RyaW5nIiwiX3JlbEV4cCIsIl9mb3JFYWNoTmFtZSIsIl9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkiLCJfY29sb3JTdHJpbmdGaWx0ZXIiLCJfY2hlY2tQbHVnaW4iLCJfcmVwbGFjZVJhbmRvbSIsIl9wbHVnaW5zIiwiR1NDYWNoZSIsIlByb3BUd2VlbiIsIl9jb25maWciLCJfdGlja2VyIiwiX3JvdW5kIiwiX21pc3NpbmdQbHVnaW4iLCJfZ2V0U2V0dGVyIiwiX2dldENhY2hlIiwiX2NvbG9yRXhwIiwiX3BhcnNlUmVsYXRpdmUiLCJfc2V0RGVmYXVsdHMiLCJfcmVtb3ZlTGlua2VkTGlzdEl0ZW0iLCJfd2luIiwiX2RvYyIsIl9kb2NFbGVtZW50IiwiX3BsdWdpbkluaXR0ZWQiLCJfdGVtcERpdiIsIl90ZW1wRGl2U3R5bGVyIiwiX3JlY2VudFNldHRlclBsdWdpbiIsIl9yZXZlcnRpbmciLCJfd2luZG93RXhpc3RzIiwiX3RyYW5zZm9ybVByb3BzIiwiX1JBRDJERUciLCJNYXRoIiwiUEkiLCJfREVHMlJBRCIsIl9hdGFuMiIsImF0YW4yIiwiX2JpZ051bSIsIl9jYXBzRXhwIiwiX2hvcml6b250YWxFeHAiLCJfY29tcGxleEV4cCIsIl9wcm9wZXJ0eUFsaWFzZXMiLCJzY2FsZSIsImFscGhhIiwiX3JlbmRlckNTU1Byb3AiLCJyYXRpbyIsImRhdGEiLCJzZXQiLCJ0IiwicCIsInJvdW5kIiwicyIsImMiLCJ1IiwiX3JlbmRlclByb3BXaXRoRW5kIiwiZSIsIl9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyIsImIiLCJfcmVuZGVyUm91bmRlZENTU1Byb3AiLCJ2YWx1ZSIsIl9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlIiwiX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQiLCJfc2V0dGVyQ1NTU3R5bGUiLCJ0YXJnZXQiLCJwcm9wZXJ0eSIsInN0eWxlIiwiX3NldHRlckNTU1Byb3AiLCJzZXRQcm9wZXJ0eSIsIl9zZXR0ZXJUcmFuc2Zvcm0iLCJfZ3NhcCIsIl9zZXR0ZXJTY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsIl9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIiLCJjYWNoZSIsInJlbmRlclRyYW5zZm9ybSIsIl9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyIiwiX3RyYW5zZm9ybVByb3AiLCJfdHJhbnNmb3JtT3JpZ2luUHJvcCIsIl9zYXZlU3R5bGUiLCJpc05vdENTUyIsIl90aGlzIiwidGZtIiwiaW5kZXhPZiIsInNwbGl0IiwiZm9yRWFjaCIsImEiLCJfZ2V0IiwieCIsInRyYW5zZm9ybSIsImNhbGwiLCJwcm9wcyIsInN2ZyIsInN2Z28iLCJwdXNoIiwiX3JlbW92ZUluZGVwZW5kZW50VHJhbnNmb3JtcyIsInRyYW5zbGF0ZSIsInJlbW92ZVByb3BlcnR5IiwiX3JldmVydFN0eWxlIiwiaSIsInN1YnN0ciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImlzU3RhcnQiLCJ1bmNhY2hlIiwiX2dldFN0eWxlU2F2ZXIiLCJwcm9wZXJ0aWVzIiwic2F2ZXIiLCJyZXZlcnQiLCJzYXZlIiwiY29yZSIsImdldENhY2hlIiwiX3N1cHBvcnRzM0QiLCJfY3JlYXRlRWxlbWVudCIsInR5cGUiLCJucyIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSIsInNraXBQcmVmaXhGYWxsYmFjayIsImNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJfY2hlY2tQcm9wUHJlZml4IiwiX3ByZWZpeGVzIiwicHJlZmVyUHJlZml4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJfaW5pdENvcmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjc3NUZXh0IiwicmV2ZXJ0aW5nIiwiX2dldEJCb3hIYWNrIiwic3dhcElmUG9zc2libGUiLCJvd25lclNWR0VsZW1lbnQiLCJvbGRQYXJlbnQiLCJwYXJlbnROb2RlIiwib2xkU2libGluZyIsIm5leHRTaWJsaW5nIiwib2xkQ1NTIiwiYmJveCIsImFwcGVuZENoaWxkIiwiZGlzcGxheSIsImdldEJCb3giLCJfZ3NhcEJCb3giLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIl9nZXRBdHRyaWJ1dGVGYWxsYmFja3MiLCJhdHRyaWJ1dGVzQXJyYXkiLCJoYXNBdHRyaWJ1dGUiLCJfZ2V0QkJveCIsImJvdW5kcyIsImVycm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ5IiwiX2lzU1ZHIiwiZ2V0Q1RNIiwiX3JlbW92ZVByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiX2FkZE5vblR3ZWVuaW5nUFQiLCJwbHVnaW4iLCJiZWdpbm5pbmciLCJlbmQiLCJvbmx5U2V0QXRFbmQiLCJwdCIsIl9wdCIsIl9wcm9wcyIsIl9ub25Db252ZXJ0aWJsZVVuaXRzIiwiZGVnIiwicmFkIiwidHVybiIsIl9ub25TdGFuZGFyZExheW91dHMiLCJncmlkIiwiZmxleCIsIl9jb252ZXJ0VG9Vbml0IiwidW5pdCIsImN1clZhbHVlIiwicGFyc2VGbG9hdCIsImN1clVuaXQiLCJ0cmltIiwiaG9yaXpvbnRhbCIsInRlc3QiLCJpc1Jvb3RTVkciLCJ0YWdOYW1lIiwibWVhc3VyZVByb3BlcnR5IiwiYW1vdW50IiwidG9QaXhlbHMiLCJ0b1BlcmNlbnQiLCJweCIsInBhcmVudCIsImlzU1ZHIiwiYm9keSIsInRpbWUiLCJwb3NpdGlvbiIsIl9wYXJzZVRyYW5zZm9ybSIsIm9yaWdpbiIsIl9maXJzdFR3b09ubHkiLCJ6T3JpZ2luIiwiX3NwZWNpYWxQcm9wcyIsIl90d2VlbkNvbXBsZXhDU1NTdHJpbmciLCJwcm9wIiwic3RhcnQiLCJpbmRleCIsIm1hdGNoSW5kZXgiLCJyZXN1bHQiLCJzdGFydFZhbHVlcyIsInN0YXJ0TnVtIiwiY29sb3IiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJlbmROdW0iLCJjaHVuayIsImVuZFVuaXQiLCJzdGFydFVuaXQiLCJlbmRWYWx1ZXMiLCJtYXRjaCIsImV4ZWMiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXgiLCJ1bml0cyIsIl9uZXh0IiwibSIsInIiLCJfa2V5d29yZFRvUGVyY2VudCIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImNlbnRlciIsIl9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzIiwiam9pbiIsIl9yZW5kZXJDbGVhclByb3BzIiwidHdlZW4iLCJfdGltZSIsIl9kdXIiLCJjbGVhclRyYW5zZm9ybXMiLCJjbGVhclByb3BzIiwicHIiLCJfaWRlbnRpdHkyRE1hdHJpeCIsIl9yb3RhdGlvbmFsUHJvcGVydGllcyIsIl9pc051bGxUcmFuc2Zvcm0iLCJfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5IiwibWF0cml4U3RyaW5nIiwibWFwIiwiX2dldE1hdHJpeCIsImZvcmNlMkQiLCJtYXRyaXgiLCJ0ZW1wIiwiYWRkZWRUb0RPTSIsImJhc2VWYWwiLCJjb25zb2xpZGF0ZSIsImQiLCJmIiwib2Zmc2V0UGFyZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2FwcGx5U1ZHT3JpZ2luIiwib3JpZ2luSXNBYnNvbHV0ZSIsInNtb290aCIsIm1hdHJpeEFycmF5IiwicGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8iLCJ4T3JpZ2luT2xkIiwieE9yaWdpbiIsInlPcmlnaW5PbGQiLCJ5T3JpZ2luIiwieE9mZnNldE9sZCIsInhPZmZzZXQiLCJ5T2Zmc2V0T2xkIiwieU9mZnNldCIsInR4IiwidHkiLCJvcmlnaW5TcGxpdCIsImRldGVybWluYW50IiwiaW52ZXJ0ZWRTY2FsZVgiLCJ6Iiwicm90YXRpb24iLCJyb3RhdGlvblgiLCJyb3RhdGlvblkiLCJza2V3WCIsInNrZXdZIiwicGVyc3BlY3RpdmUiLCJhbmdsZSIsImNvcyIsInNpbiIsImExMiIsImEyMiIsInQxIiwidDIiLCJ0MyIsImExMyIsImEyMyIsImEzMyIsImE0MiIsImE0MyIsImEzMiIsInJvdGF0ZSIsInNsaWNlIiwic3FydCIsImFicyIsImZvcmNlQ1NTIiwieFBlcmNlbnQiLCJvZmZzZXRXaWR0aCIsInlQZXJjZW50Iiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJmb3JjZTNEIiwiX3JlbmRlclNWR1RyYW5zZm9ybXMiLCJfcmVuZGVyQ1NTVHJhbnNmb3JtcyIsIl9yZW5kZXJOb24zRFRyYW5zZm9ybXMiLCJfYWRkUHhUcmFuc2xhdGUiLCJfemVyb0RlZyIsIl96ZXJvUHgiLCJfZW5kUGFyZW50aGVzaXMiLCJfcmVmIiwidHJhbnNmb3JtcyIsInVzZTNEIiwiX3JlZjIiLCJhMTEiLCJhMjEiLCJ0YW4iLCJfYWRkUm90YXRpb25hbFByb3BUd2VlbiIsImNhcCIsImlzU3RyaW5nIiwiY2hhbmdlIiwiZmluYWxWYWx1ZSIsImRpcmVjdGlvbiIsIl9hc3NpZ24iLCJzb3VyY2UiLCJfYWRkUmF3VHJhbnNmb3JtUFRzIiwic3RhcnRDYWNoZSIsImV4Y2x1ZGUiLCJlbmRDYWNoZSIsIm5hbWUiLCJsIiwic2lkZSIsInZhcnMiLCJhcmd1bWVudHMiLCJpbml0IiwiQ1NTUGx1Z2luIiwicmVnaXN0ZXIiLCJ0YXJnZXRUZXN0Iiwibm9kZVR5cGUiLCJ0YXJnZXRzIiwic3RhcnRBdCIsInNwZWNpYWxQcm9wIiwicmVsYXRpdmUiLCJpc1RyYW5zZm9ybVJlbGF0ZWQiLCJ0cmFuc2Zvcm1Qcm9wVHdlZW4iLCJoYXNQcmlvcml0eSIsImlubGluZVByb3BzIiwic3R5bGVzIiwiYWRkIiwidmlzaWJpbGl0eSIsInBhcnNlVHJhbnNmb3JtIiwic21vb3RoT3JpZ2luIiwiZGVwIiwiYXV0b1JvdW5kIiwicmVuZGVyIiwiZ2V0IiwiYWxpYXNlcyIsImdldFNldHRlciIsInV0aWxzIiwiY2hlY2tQcmVmaXgiLCJnZXRTdHlsZVNhdmVyIiwicG9zaXRpb25BbmRTY2FsZSIsIm90aGVycyIsImFsbCIsInJlZ2lzdGVyUGx1Z2luIiwiZGVmYXVsdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsInByb3RvdHlwZSIsIk9iamVjdCIsIl9fcHJvdG9fXyIsImF1dG9TbGVlcCIsIm51bGxUYXJnZXRXYXJuIiwibGluZUhlaWdodCIsIl9kZWZhdWx0cyIsImR1cmF0aW9uIiwib3ZlcndyaXRlIiwiX3N1cHByZXNzT3ZlcndyaXRlcyIsIl9jb250ZXh0IiwiX3RpbnlOdW0iLCJfMlBJIiwiX0hBTEZfUEkiLCJfZ3NJRCIsIl9zcXJ0IiwiX2NvcyIsIl9zaW4iLCJfaXNGdW5jdGlvbiIsIl9pc051bWJlciIsIl9pc09iamVjdCIsIl9pc05vdEZhbHNlIiwiX2lzRnVuY09yU3RyaW5nIiwiX2lzVHlwZWRBcnJheSIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiX2lzQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJfc3RyaWN0TnVtRXhwIiwiX2NvbXBsZXhTdHJpbmdOdW1FeHAiLCJfZGVsaW1pdGVkVmFsdWVFeHAiLCJfdW5pdEV4cCIsIl9nbG9iYWxUaW1lbGluZSIsIl9jb3JlSW5pdHRlZCIsIl9nbG9iYWxzIiwiX2luc3RhbGxTY29wZSIsIl9jb3JlUmVhZHkiLCJfaW5zdGFsbCIsInNjb3BlIiwiX21lcmdlIiwid2FybiIsIl93YXJuIiwibWVzc2FnZSIsInN1cHByZXNzIiwiX2FkZEdsb2JhbCIsIm9iaiIsIl9lbXB0eUZ1bmMiLCJfc3RhcnRBdFJldmVydENvbmZpZyIsInN1cHByZXNzRXZlbnRzIiwia2lsbCIsIl9yZXZlcnRDb25maWdOb0tpbGwiLCJfcmV2ZXJ0Q29uZmlnIiwiX3Jlc2VydmVkUHJvcHMiLCJfbGF6eVR3ZWVucyIsIl9sYXp5TG9va3VwIiwiX2xhc3RSZW5kZXJlZEZyYW1lIiwiX2VmZmVjdHMiLCJfbmV4dEdDRnJhbWUiLCJfaGFybmVzc1BsdWdpbnMiLCJfY2FsbGJhY2tOYW1lcyIsIl9oYXJuZXNzIiwiaGFybmVzc1BsdWdpbiIsImhhcm5lc3MiLCJzcGxpY2UiLCJ0b0FycmF5IiwidiIsIm5hbWVzIiwiZnVuYyIsIl9yb3VuZFByZWNpc2UiLCJvcGVyYXRvciIsIl9hcnJheUNvbnRhaW5zQW55IiwidG9TZWFyY2giLCJ0b0ZpbmQiLCJfbGF6eVJlbmRlciIsIl9sYXp5IiwiX2xhenlTYWZlUmVuZGVyIiwiYW5pbWF0aW9uIiwiZm9yY2UiLCJfaW5pdHRlZCIsIl9zdGFydEF0IiwiX251bWVyaWNJZlBvc3NpYmxlIiwibiIsIl9wYXNzVGhyb3VnaCIsImRlZmF1bHRzIiwiX3NldEtleWZyYW1lRGVmYXVsdHMiLCJleGNsdWRlRHVyYXRpb24iLCJiYXNlIiwidG9NZXJnZSIsIl9tZXJnZURlZXAiLCJfY29weUV4Y2x1ZGluZyIsImV4Y2x1ZGluZyIsImNvcHkiLCJfaW5oZXJpdERlZmF1bHRzIiwia2V5ZnJhbWVzIiwiaW5oZXJpdCIsIl9kcCIsIl9hcnJheXNNYXRjaCIsImExIiwiYTIiLCJfYWRkTGlua2VkTGlzdEl0ZW0iLCJjaGlsZCIsImZpcnN0UHJvcCIsImxhc3RQcm9wIiwic29ydEJ5IiwicHJldiIsIl9wcmV2IiwibmV4dCIsIl9yZW1vdmVGcm9tUGFyZW50Iiwib25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSIsImF1dG9SZW1vdmVDaGlsZHJlbiIsInJlbW92ZSIsIl9hY3QiLCJfdW5jYWNoZSIsIl9lbmQiLCJfc3RhcnQiLCJfZGlydHkiLCJfcmVjYWNoZUFuY2VzdG9ycyIsInRvdGFsRHVyYXRpb24iLCJfcmV3aW5kU3RhcnRBdCIsInRvdGFsVGltZSIsImltbWVkaWF0ZVJlbmRlciIsImF1dG9SZXZlcnQiLCJfaGFzTm9QYXVzZWRBbmNlc3RvcnMiLCJfdHMiLCJfZWxhcHNlZEN5Y2xlRHVyYXRpb24iLCJfcmVwZWF0IiwiX2FuaW1hdGlvbkN5Y2xlIiwiX3RUaW1lIiwiX3JEZWxheSIsInRUaW1lIiwiY3ljbGVEdXJhdGlvbiIsIndob2xlIiwiZmxvb3IiLCJfcGFyZW50VG9DaGlsZFRvdGFsVGltZSIsInBhcmVudFRpbWUiLCJfdER1ciIsIl9zZXRFbmQiLCJfcnRzIiwiX2FsaWduUGxheWhlYWQiLCJzbW9vdGhDaGlsZFRpbWluZyIsIl9wb3N0QWRkQ2hlY2tzIiwidGltZWxpbmUiLCJyYXdUaW1lIiwiX2NsYW1wIiwiX3pUaW1lIiwiX2FkZFRvVGltZWxpbmUiLCJza2lwQ2hlY2tzIiwiX3BhcnNlUG9zaXRpb24iLCJfZGVsYXkiLCJ0aW1lU2NhbGUiLCJfc29ydCIsIl9pc0Zyb21PckZyb21TdGFydCIsIl9yZWNlbnQiLCJfc2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJTY3JvbGxUcmlnZ2VyIiwiX2F0dGVtcHRJbml0VHdlZW4iLCJfaW5pdFR3ZWVuIiwibGF6eSIsImZyYW1lIiwiX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydCIsIl9sb2NrIiwiX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuIiwicHJldlJhdGlvIiwicmVwZWF0RGVsYXkiLCJpdGVyYXRpb24iLCJwcmV2SXRlcmF0aW9uIiwiX3lveW8iLCJyZXBlYXRSZWZyZXNoIiwiaW52YWxpZGF0ZSIsIl9mcm9tIiwiX29uVXBkYXRlIiwiX2NhbGxiYWNrIiwiX3Byb20iLCJfZmluZE5leHRQYXVzZVR3ZWVuIiwicHJldlRpbWUiLCJfZmlyc3QiLCJfbGFzdCIsIl9zZXREdXJhdGlvbiIsInNraXBVbmNhY2hlIiwibGVhdmVQbGF5aGVhZCIsInJlcGVhdCIsImR1ciIsInRvdGFsUHJvZ3Jlc3MiLCJfb25VcGRhdGVUb3RhbER1cmF0aW9uIiwiVGltZWxpbmUiLCJfemVyb1Bvc2l0aW9uIiwiZW5kVGltZSIsInBlcmNlbnRBbmltYXRpb24iLCJsYWJlbHMiLCJyZWNlbnQiLCJjbGlwcGVkRHVyYXRpb24iLCJvZmZzZXQiLCJpc1BlcmNlbnQiLCJpc05hTiIsIl9jcmVhdGVUd2VlblR5cGUiLCJwYXJhbXMiLCJpc0xlZ2FjeSIsInZhcnNJbmRleCIsImlyVmFycyIsInJ1bkJhY2t3YXJkcyIsIlR3ZWVuIiwiX2NvbmRpdGlvbmFsUmV0dXJuIiwibWluIiwibWF4IiwiY2xhbXAiLCJfc2xpY2UiLCJfaXNBcnJheUxpa2UiLCJub25FbXB0eSIsIl9mbGF0dGVuIiwiYXIiLCJsZWF2ZVN0cmluZ3MiLCJhY2N1bXVsYXRvciIsIl9hY2N1bXVsYXRvciIsImFwcGx5IiwiX3dha2UiLCJlbCIsImN1cnJlbnQiLCJuYXRpdmVFbGVtZW50Iiwic2h1ZmZsZSIsInNvcnQiLCJyYW5kb20iLCJkaXN0cmlidXRlIiwiZWFzZSIsIl9wYXJzZUVhc2UiLCJpc0RlY2ltYWwiLCJyYXRpb3MiLCJheGlzIiwicmF0aW9YIiwicmF0aW9ZIiwiZWRnZXMiLCJkaXN0YW5jZXMiLCJvcmlnaW5YIiwib3JpZ2luWSIsImoiLCJ3cmFwQXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfaW52ZXJ0RWFzZSIsIl9yb3VuZE1vZGlmaWVyIiwicG93IiwicmF3Iiwic25hcCIsInNuYXBUbyIsInJhZGl1cyIsImlzMkQiLCJ2YWx1ZXMiLCJpbmNyZW1lbnQiLCJjbG9zZXN0IiwiZHgiLCJkeSIsInJvdW5kaW5nSW5jcmVtZW50IiwicmV0dXJuRnVuY3Rpb24iLCJwaXBlIiwiX2xlbiIsImZ1bmN0aW9ucyIsIl9rZXkiLCJyZWR1Y2UiLCJ1bml0aXplIiwibm9ybWFsaXplIiwibWFwUmFuZ2UiLCJfd3JhcEFycmF5Iiwid3JhcHBlciIsIndyYXAiLCJyYW5nZSIsIndyYXBZb3lvIiwidG90YWwiLCJudW1zIiwiaW5NaW4iLCJpbk1heCIsIm91dE1pbiIsIm91dE1heCIsImluUmFuZ2UiLCJvdXRSYW5nZSIsImludGVycG9sYXRlIiwicHJvZ3Jlc3MiLCJtdXRhdGUiLCJtYXN0ZXIiLCJpbnRlcnBvbGF0b3JzIiwiaWwiLCJfYWRkUHJvcFR3ZWVuIiwiX3JlbmRlclByb3BUd2VlbnMiLCJfZ2V0TGFiZWxJbkRpcmVjdGlvbiIsImZyb21UaW1lIiwiYmFja3dhcmQiLCJkaXN0YW5jZSIsImxhYmVsIiwiZXhlY3V0ZUxhenlGaXJzdCIsImNhbGxiYWNrIiwicHJldkNvbnRleHQiLCJjb250ZXh0IiwiX2N0eCIsImNhbGxiYWNrU2NvcGUiLCJfaW50ZXJydXB0Iiwic2Nyb2xsVHJpZ2dlciIsIl9xdWlja1R3ZWVuIiwiX3JlZ2lzdGVyUGx1Z2luUXVldWUiLCJfY3JlYXRlUGx1Z2luIiwiY29uZmlnIiwiaXNGdW5jIiwiUGx1Z2luIiwiaW5zdGFuY2VEZWZhdWx0cyIsIl9raWxsUHJvcFR3ZWVuc09mIiwibW9kaWZpZXIiLCJfYWRkUGx1Z2luTW9kaWZpZXIiLCJyYXdWYXJzIiwic3RhdGljcyIsIl8yNTUiLCJfY29sb3JMb29rdXAiLCJhcXVhIiwibGltZSIsInNpbHZlciIsImJsYWNrIiwibWFyb29uIiwidGVhbCIsImJsdWUiLCJuYXZ5Iiwid2hpdGUiLCJvbGl2ZSIsInllbGxvdyIsIm9yYW5nZSIsImdyYXkiLCJwdXJwbGUiLCJncmVlbiIsInJlZCIsInBpbmsiLCJjeWFuIiwidHJhbnNwYXJlbnQiLCJfaHVlIiwiaCIsIm0xIiwibTIiLCJzcGxpdENvbG9yIiwidG9IU0wiLCJmb3JjZUFscGhhIiwiZyIsIndhc0hTTCIsInBhcnNlSW50IiwiTnVtYmVyIiwiX2NvbG9yT3JkZXJEYXRhIiwiX2Zvcm1hdENvbG9ycyIsIm9yZGVyTWF0Y2hEYXRhIiwiY29sb3JzIiwic2hlbGwiLCJzaGlmdCIsIlJlZ0V4cCIsIl9oc2xFeHAiLCJjb21iaW5lZCIsIl90aWNrZXJBY3RpdmUiLCJfZ2V0VGltZSIsIkRhdGUiLCJub3ciLCJfbGFnVGhyZXNob2xkIiwiX2FkanVzdGVkTGFnIiwiX3N0YXJ0VGltZSIsIl9sYXN0VXBkYXRlIiwiX2dhcCIsIl9uZXh0VGltZSIsIl9saXN0ZW5lcnMiLCJfaWQiLCJfcmVxIiwiX3JhZiIsIl9zZWxmIiwiX2RlbHRhIiwiX2kiLCJfdGljayIsImVsYXBzZWQiLCJtYW51YWwiLCJvdmVybGFwIiwiZGlzcGF0Y2giLCJ0aWNrIiwiZGVsdGFSYXRpbyIsImZwcyIsIndha2UiLCJnc2FwVmVyc2lvbnMiLCJ2ZXJzaW9uIiwiR3JlZW5Tb2NrR2xvYmFscyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNsZWVwIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwibGFnU21vb3RoaW5nIiwidGhyZXNob2xkIiwiYWRqdXN0ZWRMYWciLCJJbmZpbml0eSIsIl9mcHMiLCJvbmNlIiwicHJpb3JpdGl6ZSIsIl9lYXNlTWFwIiwiX2N1c3RvbUVhc2VFeHAiLCJfcXVvdGVzRXhwIiwiX3BhcnNlT2JqZWN0SW5TdHJpbmciLCJ2YWwiLCJwYXJzZWRWYWwiLCJsYXN0SW5kZXhPZiIsIl92YWx1ZUluUGFyZW50aGVzZXMiLCJvcGVuIiwiY2xvc2UiLCJuZXN0ZWQiLCJfY29uZmlnRWFzZUZyb21TdHJpbmciLCJfQ0UiLCJfcHJvcGFnYXRlWW95b0Vhc2UiLCJpc1lveW8iLCJ5b3lvRWFzZSIsIl9lYXNlIiwiX3lFYXNlIiwiZGVmYXVsdEVhc2UiLCJfaW5zZXJ0RWFzZSIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJsb3dlcmNhc2VOYW1lIiwiX2Vhc2VJbk91dEZyb21PdXQiLCJfY29uZmlnRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsInAxIiwicDIiLCJwMyIsImFzaW4iLCJfY29uZmlnQmFjayIsIm92ZXJzaG9vdCIsInBvd2VyIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJub25lIiwibjEiLCJuMiIsIm4zIiwiU3RlcHBlZEVhc2UiLCJzdGVwcyIsImltbWVkaWF0ZVN0YXJ0IiwiQW5pbWF0aW9uIiwieW95byIsIl9wcm90byIsInN0YXJ0VGltZSIsIl90b3RhbFRpbWUiLCJfcHRMb29rdXAiLCJfcFRpbWUiLCJfcHMiLCJwYXVzZWQiLCJpbmNsdWRlUmVwZWF0cyIsIndyYXBSZXBlYXRzIiwicHJldklzUmV2ZXJ0aW5nIiwiZ2xvYmFsVGltZSIsIl9zYXQiLCJzZWVrIiwicmVzdGFydCIsImluY2x1ZGVEZWxheSIsInBsYXkiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJwYXVzZSIsImF0VGltZSIsInJlc3VtZSIsImlzQWN0aXZlIiwiZXZlbnRDYWxsYmFjayIsInRoZW4iLCJvbkZ1bGZpbGxlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX3Jlc29sdmUiLCJfdGhlbiIsIl9BbmltYXRpb24iLCJzb3J0Q2hpbGRyZW4iLCJfcHJvdG8yIiwiZnJvbVRvIiwiZnJvbVZhcnMiLCJ0b1ZhcnMiLCJkZWxheWVkQ2FsbCIsInN0YWdnZXJUbyIsInN0YWdnZXIiLCJvbkNvbXBsZXRlQWxsIiwib25Db21wbGV0ZUFsbFBhcmFtcyIsIm9uQ29tcGxldGUiLCJvbkNvbXBsZXRlUGFyYW1zIiwic3RhZ2dlckZyb20iLCJzdGFnZ2VyRnJvbVRvIiwidER1ciIsImNyb3NzaW5nU3RhcnQiLCJwcmV2UGF1c2VkIiwicGF1c2VUd2VlbiIsInByZXZTdGFydCIsInJld2luZGluZyIsImRvZXNXcmFwIiwib25SZXBlYXQiLCJfaGFzUGF1c2UiLCJfZm9yY2luZyIsIm9uVXBkYXRlIiwiYWRqdXN0ZWRUaW1lIiwiX3RoaXMyIiwiYWRkTGFiZWwiLCJnZXRDaGlsZHJlbiIsInR3ZWVucyIsInRpbWVsaW5lcyIsImlnbm9yZUJlZm9yZVRpbWUiLCJnZXRCeUlkIiwiYW5pbWF0aW9ucyIsInJlbW92ZUxhYmVsIiwia2lsbFR3ZWVuc09mIiwiX3RvdGFsVGltZTIiLCJhZGRQYXVzZSIsInJlbW92ZVBhdXNlIiwib25seUFjdGl2ZSIsImdldFR3ZWVuc09mIiwiX292ZXJ3cml0aW5nVHdlZW4iLCJwYXJzZWRUYXJnZXRzIiwiaXNHbG9iYWxUaW1lIiwiY2hpbGRyZW4iLCJfdGFyZ2V0cyIsInR3ZWVuVG8iLCJ0bCIsIl92YXJzIiwiX29uU3RhcnQiLCJvblN0YXJ0Iiwib25TdGFydFBhcmFtcyIsImluaXR0ZWQiLCJ0d2VlbkZyb21UbyIsImZyb21Qb3NpdGlvbiIsInRvUG9zaXRpb24iLCJuZXh0TGFiZWwiLCJhZnRlclRpbWUiLCJwcmV2aW91c0xhYmVsIiwiYmVmb3JlVGltZSIsImN1cnJlbnRMYWJlbCIsInNoaWZ0Q2hpbGRyZW4iLCJhZGp1c3RMYWJlbHMiLCJzb2Z0IiwiY2xlYXIiLCJpbmNsdWRlTGFiZWxzIiwidXBkYXRlUm9vdCIsIl9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuIiwic2V0dGVyIiwic3RyaW5nRmlsdGVyIiwiZnVuY1BhcmFtIiwic3RhcnROdW1zIiwiaGFzUmFuZG9tIiwiZnAiLCJvcHRpb25hbCIsImN1cnJlbnRWYWx1ZSIsInBhcnNlZFN0YXJ0IiwiX3NldHRlclBsYWluIiwiX3NldHRlckZ1bmNXaXRoUGFyYW0iLCJfc2V0dGVyRnVuYyIsIl9mb3JjZUFsbFByb3BUd2VlbnMiLCJfcmVuZGVyQm9vbGVhbiIsIl9yZW5kZXJQbGFpbiIsIl9wcm9jZXNzVmFycyIsIl9wYXJzZUZ1bmNPclN0cmluZyIsInB0TG9va3VwIiwicHJpb3JpdHkiLCJvblVwZGF0ZVBhcmFtcyIsInByZXZTdGFydEF0IiwiZnVsbFRhcmdldHMiLCJhdXRvT3ZlcndyaXRlIiwiX292ZXJ3cml0ZSIsImNsZWFuVmFycyIsImdzRGF0YSIsImhhcm5lc3NWYXJzIiwib3ZlcndyaXR0ZW4iLCJfcHRDYWNoZSIsIl9vcCIsIl9vbkluaXQiLCJfdXBkYXRlUHJvcFR3ZWVucyIsInN0YXJ0SXNSZWxhdGl2ZSIsInB0Q2FjaGUiLCJyb290UFQiLCJsb29rdXAiLCJfYWRkQWxpYXNlc1RvVmFycyIsInByb3BlcnR5QWxpYXNlcyIsIl9wYXJzZUtleWZyYW1lIiwiYWxsUHJvcHMiLCJlYXNlRWFjaCIsIl9zdGFnZ2VyVHdlZW5Qcm9wcyIsIl9zdGFnZ2VyUHJvcHNUb1NraXAiLCJfQW5pbWF0aW9uMiIsInNraXBJbmhlcml0IiwiX3RoaXMzIiwiX3RoaXMzJHZhcnMiLCJjdXJUYXJnZXQiLCJzdGFnZ2VyRnVuYyIsInN0YWdnZXJWYXJzVG9NZXJnZSIsImtmIiwiX3Byb3RvMyIsImlzTmVnYXRpdmUiLCJyZXNldFRvIiwia2lsbGluZ1RhcmdldHMiLCJwcm9wVHdlZW5Mb29rdXAiLCJmaXJzdFBUIiwib3ZlcndyaXR0ZW5Qcm9wcyIsImN1ckxvb2t1cCIsImN1ck92ZXJ3cml0ZVByb3BzIiwib25SZXZlcnNlQ29tcGxldGUiLCJvblJldmVyc2VDb21wbGV0ZVBhcmFtcyIsIl9zZXR0ZXJBdHRyaWJ1dGUiLCJoYXNOb25EZXBlbmRlbnRSZW1haW5pbmciLCJvcCIsIl9zZXR0ZXJXaXRoTW9kaWZpZXIiLCJtU2V0IiwibXQiLCJwdDIiLCJmaXJzdCIsImxhc3QiLCJyZW5kZXJlciIsIl9wcm90bzQiLCJUd2Vlbk1heCIsIlR3ZWVuTGl0ZSIsIlRpbWVsaW5lTGl0ZSIsIlRpbWVsaW5lTWF4IiwiX21lZGlhIiwiX2VtcHR5QXJyYXkiLCJfbGFzdE1lZGlhVGltZSIsIl9jb250ZXh0SUQiLCJfZGlzcGF0Y2giLCJfb25NZWRpYUNoYW5nZSIsIm1hdGNoZXMiLCJxdWVyaWVzIiwiY29uZGl0aW9ucyIsImFueU1hdGNoIiwidG9nZ2xlZCIsIm1hdGNoTWVkaWEiLCJvbk1hdGNoIiwiQ29udGV4dCIsIl9yIiwiaXNSZXZlcnRlZCIsIl9wcm90bzUiLCJwcmV2U2VsZWN0b3IiLCJpZ25vcmUiLCJnZXRUd2VlbnMiLCJfdGhpczQiLCJvIiwiTWF0Y2hNZWRpYSIsImNvbnRleHRzIiwiX3Byb3RvNiIsImNvbmQiLCJtcSIsImFjdGl2ZSIsImFkZExpc3RlbmVyIiwiX2xlbjIiLCJhcmdzIiwiX2tleTIiLCJnZXRQcm9wZXJ0eSIsImdldHRlciIsImZvcm1hdCIsInF1aWNrU2V0dGVyIiwic2V0dGVycyIsInF1aWNrVG8iLCJfbWVyZ2UyIiwiaXNUd2VlbmluZyIsInJlZ2lzdGVyRWZmZWN0IiwiX3JlZjMiLCJlZmZlY3QiLCJwbHVnaW5zIiwiZXh0ZW5kVGltZWxpbmUiLCJwbHVnaW5OYW1lIiwicmVnaXN0ZXJFYXNlIiwicGFyc2VFYXNlIiwiZXhwb3J0Um9vdCIsImluY2x1ZGVEZWxheWVkQ2FsbHMiLCJtYXRjaE1lZGlhUmVmcmVzaCIsImZvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImluc3RhbGwiLCJlZmZlY3RzIiwidGlja2VyIiwiZ2xvYmFsVGltZWxpbmUiLCJnbG9iYWxzIiwidG9BZGQiLCJzdXBwcmVzc092ZXJ3cml0ZXMiLCJfZ2V0UGx1Z2luUHJvcFR3ZWVuIiwiX2FkZE1vZGlmaWVycyIsIm1vZGlmaWVycyIsIl9idWlsZE1vZGlmaWVyUGx1Z2luIiwiUG93ZXIwIiwiUG93ZXIxIiwiUG93ZXIyIiwiUG93ZXIzIiwiUG93ZXI0IiwiUXVhZCIsIkN1YmljIiwiUXVhcnQiLCJRdWludCIsIlN0cm9uZyIsIkVsYXN0aWMiLCJCYWNrIiwiQm91bmNlIiwiU2luZSIsIkV4cG8iLCJDaXJjIiwiZ3NhcFdpdGhDU1MiLCJUd2Vlbk1heFdpdGhDU1MiLCJyb290IiwicmVxdWlyZSIsIlN5bWJvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheUVhY2giLCJhcnJheSIsIml0ZXJhdGVlIiwiYmFzZVRpbWVzIiwiaXNBcmd1bWVudHMiLCJpc0J1ZmZlciIsImlzSW5kZXgiLCJpc1R5cGVkQXJyYXkiLCJvYmplY3RQcm90byIsImhhc093blByb3BlcnR5IiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIlN0cmluZyIsImJhc2VGb3JPd24iLCJjcmVhdGVCYXNlRWFjaCIsImJhc2VFYWNoIiwiY3JlYXRlQmFzZUZvciIsImJhc2VGb3IiLCJrZXlzIiwib2JqZWN0IiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsInVuZGVmaW5lZCIsImJhc2VHZXRUYWciLCJpc09iamVjdExpa2UiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwiaXNMZW5ndGgiLCJhcnJheVRhZyIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJmdW5jVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwib2JqZWN0VGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VJc1R5cGVkQXJyYXkiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJiYXNlS2V5cyIsImJhc2VVbmFyeSIsImlkZW50aXR5IiwiY2FzdEZ1bmN0aW9uIiwiaXNBcnJheUxpa2UiLCJlYWNoRnVuYyIsImZyb21SaWdodCIsImNvbGxlY3Rpb24iLCJpdGVyYWJsZSIsImtleXNGdW5jIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJpc093biIsInRhZyIsInVubWFza2VkIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlSXNVaW50IiwiQ3RvciIsInByb3RvIiwib3ZlckFyZyIsImZyZWVFeHBvcnRzIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJmcmVlUHJvY2VzcyIsInByb2Nlc3MiLCJub2RlVXRpbCIsInR5cGVzIiwiYmluZGluZyIsImFyZyIsImZyZWVTZWxmIiwiRnVuY3Rpb24iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlzRnVuY3Rpb24iLCJzdHViRmFsc2UiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzT2JqZWN0IiwiYXN5bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsIm5vZGVJc1R5cGVkQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9