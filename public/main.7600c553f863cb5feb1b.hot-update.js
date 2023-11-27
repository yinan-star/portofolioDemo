self["webpackHotUpdatefloema"]("main",{

/***/ "./app/animations/Label.js":
/*!*********************************!*\
  !*** ./app/animations/Label.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




class Label extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      element: this.element,
      append: true
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      element: this.element,
      append: true
    });
    this.elementLinesSpans = this.element.querySelectorAll('span span');
  }
  animateIn() {
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(line, {
        y: '100%'
      }, {
        delay: index * 0.2,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%'
      }, 0);
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.element, {
      autoAlpha: 0
    });
  }
  onResize() {
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
    console.log(this.elementsLines);
  }
}

/***/ }),

/***/ "./app/animations/Paragraph.js":
/*!*************************************!*\
  !*** ./app/animations/Paragraph.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




class Paragraph extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.elementLinesSpans = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      append: true,
      element: this.element
    });
  }
  animateIn() {
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(line, {
        autoAlpha: 0,
        y: '100%'
      }, {
        autoAlpha: 1,
        delay: index * 0.1,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%'
      }, 0);
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.element, {
      autoAlpha: 0
    });
  }
  onResize() {
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
  }
}

/***/ }),

/***/ "./app/animations/Title.js":
/*!*********************************!*\
  !*** ./app/animations/Title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




class Title extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      element: this.element,
      append: true
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      element: this.element,
      append: true
    });
    this.elementLinesSpans = this.element.querySelectorAll('span span');
  }
  animateIn() {
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(line, {
        y: '100%'
      }, {
        delay: index * 0.2,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%'
      }, 0);
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.element, {
      autoAlpha: 0
    });
  }
  onResize() {
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
    console.log(this.elementsLines);
  }
}

/***/ }),

/***/ "./app/classes/Animation.js":
/*!**********************************!*\
  !*** ./app/classes/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./app/classes/Component.js");

class Animation extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.createObserver();
    this.animateOut();
  }
  createObserver() {
    this.obesever = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('animatein');
          this.animateIn();
        } else {
          console.log('animateout');
          this.animateOut();
        }
      });
    });
    //   如果是进入动画，就调用进入动画的方法，反之。然后在animations的设定的不同动画方法里工作

    this.obesever.observe(this.element);
  }
  animateIn() {}
  animateOut() {}
}

/***/ }),

/***/ "./app/classes/Colors.js":
/*!*******************************!*\
  !*** ./app/classes/Colors.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorsManager: () => (/* binding */ ColorsManager)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


//TIP using the singleton OOPS concept
class Colors {
  change({
    backgroundColor,
    color
  }) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.documentElement, {
      backgroundColor,
      color,
      duration: 1.5
    });
  }
}
const ColorsManager = new Colors();

/***/ }),

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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animations_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animations/Title */ "./app/animations/Title.js");
/* harmony import */ var animations_Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animations/Paragraph */ "./app/animations/Paragraph.js");
/* harmony import */ var animations_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animations/Label */ "./app/animations/Label.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Colors */ "./app/classes/Colors.js");
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
      ...elements,
      animationTitles: '[data-animation="title"]',
      animationParagraphs: '[data-animation="paragraph"]',
      animationLabels: '[data-animation="label"]'
    };
    // selector用来存储传入这两个属性的引用，用来存储对页面元素的引用。element可能是一个页面的元素，elements可能是元素集合
    // ...element是展开运算符，用于快速复制对象或合并对象属性到一个新的对象中。创建了一个新的对象，该对象包含了 elements 中的所有属性

    this.id = id;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()('transform');
  }
  create() {
    // create方法是使用 querySelector进行页面的元素选择和操作
    this.element = document.querySelector(this.selector);
    // 就是先调用上面的构造函数，将页面的element的值存到thi.selector的容器里，然后在执行这个create函数，获取到当前被选择器所指定的元素。querySelctor这个方法不会选择所有匹配的元素，而只会返回第一个匹配的元素。
    this.elements = {};
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    };
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.selectorChildren, (entry, key) => {
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

    this.createAnimations();
  }

  // 开始做动画了～⬇️

  createAnimations() {
    this.animations = [];
    //Title
    this.animationTitles = lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(this.elements.animationTitles, element => {
      return new animations_Title__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    this.animations.push(...this.animationTitles);

    //Paragraph
    this.animationParagraphs = lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(this.elements.animationParagraphs, element => {
      return new animations_Paragraph__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.animationParagraphs);

    //Label
    this.animationLabels = lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(this.elements.animationLabels, element => {
      return new animations_Label__WEBPACK_IMPORTED_MODULE_6__["default"]({
        element
      });
    });
    this.animations.push(...this.animationLabels);
  }
  show() {
    return new Promise(resolve => {
      _Colors__WEBPACK_IMPORTED_MODULE_7__.ColorsManager.change({
        backgroundColor: this.element.getAttribute('data-background'),
        color: this.element.getAttribute('data-color')
      });
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].timeline();
      this.animationIn.fromTo(this.element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      });
      this.animationIn.call(() => {
        this.addEventListeners();
        resolve();
      });
    });
    // GSAP就是java动画库里的一个动画效果
  }

  hide() {
    return new Promise(resolve => {
      this.removeEventListeners();
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].timeline();
      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
  onMousewheel(event) {
    const {
      pixelY
    } = normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default()(event);
    this.scroll.target += pixelY; //TIP normalized wheel

    // normalize后，鼠标的移动滚滑的程度在每个page应该是一样的
  }

  onResize() {
    if (this.elements.wrapper) {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight;
    }
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.animation, animation => animation.onResize());
  }
  update() {
    this.scroll.target = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].utils.clamp(0, this.scroll.limit, this.scroll.target);
    // 目标不能小于0大于limit

    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    // interpolate相当于lerp：使current值像target值进行一个平滑过渡～0.1是控制比例参数每一步移多少，逐渐趋向于target值，值越小，越平滑

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }
    if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`;
    }
  }
  addEventListeners() {
    window.addEventListener('mousewheel', this.onMousewheel.bind(this));
  }
  removeEventListeners() {
    window.removeEventListener('mousewheel', this.onMousewheel.bind(this));
  }
}

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
      element: '.about',
      elements: {
        wrapper: '.about__wrapper',
        navigation: document.querySelector('.navigation'),
        title: '.about__title'
      }
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
      element: '.collections',
      elements: {
        title: '.collections__title'
      }
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

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
  hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
  hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
  hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
  hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
  listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
  listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
  listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
  listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
  mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
  mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
  mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
  mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
  setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
  setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
  stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
  stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
  stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
  stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
  stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
  root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
module.exports = arrayFilter;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
module.exports = arrayPush;

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
module.exports = arraySome;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
  toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
    length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}
module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
module.exports = baseHasIn;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
  equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
  equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
  equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
  getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
  isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
    othIsArr = isArray(other),
    objTag = objIsArr ? arrayTag : getTag(object),
    othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
  baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
    length = index,
    noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
      objValue = object[key],
      srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
module.exports = baseIsMatch;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
  isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
  isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
  toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
  baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
  identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
module.exports = baseIteratee;

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
  isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
    result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}
module.exports = baseMap;

/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
  getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
  matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
module.exports = baseMatches;

/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
  get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
  hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
  isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
  isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
  matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
  toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
module.exports = baseMatchesProperty;

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
module.exports = baseProperty;

/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}
module.exports = basePropertyDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
  arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}
module.exports = cacheHas;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
  stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
  toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
  arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
  cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
module.exports = equalArrays;

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
  Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
  eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
  equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
  mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
  setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
module.exports = equalByTag;

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = getAllKeys(object),
    objLength = objProps.length,
    othProps = getAllKeys(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
module.exports = equalObjects;

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
  getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
  keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
  keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
    length = result.length;
  while (length--) {
    var key = result[length],
      value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
module.exports = getMatchData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
  getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
  stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
  Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
  Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
  Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
  WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
  baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
  mapCtorString = toSource(Map),
  promiseCtorString = toSource(Promise),
  setCtorString = toSource(Set),
  weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
module.exports = getTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
  isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
  isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
  toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
  isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
module.exports = isStrictComparable;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
  ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
  Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
module.exports = mapToArray;

/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}
module.exports = matchesStrictComparable;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
module.exports = setCacheAdd;

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}
module.exports = setCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
module.exports = setToArray;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
  Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
  MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
  hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
  isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
  baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
  baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
  isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
  basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
  isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
  toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
module.exports = stubArray;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}
module.exports = toString;

/***/ }),

/***/ "./node_modules/normalize-wheel/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-wheel/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./src/normalizeWheel.js */ "./node_modules/normalize-wheel/src/normalizeWheel.js");

/***/ }),

/***/ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/ExecutionEnvironment.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.
};

module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js ***!
  \******************************************************************/
/***/ ((module) => {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;
var _mobile;
function _populate() {
  if (_populated) {
    return;
  }
  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!/Win64/.exec(uas);
  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }
  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}
var UserAgent_DEPRECATED = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function () {
    return _populate() || _ie;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function () {
    return _populate() || _ie_real_version > _ie;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function () {
    return UserAgent_DEPRECATED.ie() && _win64;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function () {
    return _populate() || _firefox;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function () {
    return _populate() || _opera;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function () {
    return _populate() || _webkit;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function () {
    return UserAgent_DEPRECATED.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function () {
    return _populate() || _chrome;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function () {
    return _populate() || _windows;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function () {
    return _populate() || _osx;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function () {
    return _populate() || _linux;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function () {
    return _populate() || _iphone;
  },
  mobile: function () {
    return _populate() || _iphone || _ipad || _android || _mobile;
  },
  nativeApp: function () {
    // webviews inside of the native apps
    return _populate() || _native;
  },
  android: function () {
    return _populate() || _android;
  },
  ipad: function () {
    return _populate() || _ipad;
  }
};
module.exports = UserAgent_DEPRECATED;

/***/ }),

/***/ "./node_modules/normalize-wheel/src/isEventSupported.js":
/*!**************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/isEventSupported.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */



var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js");
var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature &&
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
    return false;
  }
  var eventName = 'on' + eventNameSuffix;
  var isSupported = (eventName in document);
  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }
  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }
  return isSupported;
}
module.exports = isEventSupported;

/***/ }),

/***/ "./node_modules/normalize-wheel/src/normalizeWheel.js":
/*!************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/normalizeWheel.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */



var UserAgent_DEPRECATED = __webpack_require__(/*! ./UserAgent_DEPRECATED */ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js");
var isEventSupported = __webpack_require__(/*! ./isEventSupported */ "./node_modules/normalize-wheel/src/isEventSupported.js");

// Reasonable defaults
var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel( /*object*/event) /*object*/{
  var sX = 0,
    sY = 0,
    // spinX, spinY
    pX = 0,
    pY = 0; // pixelX, pixelY

  // Legacy
  if ('detail' in event) {
    sY = event.detail;
  }
  if ('wheelDelta' in event) {
    sY = -event.wheelDelta / 120;
  }
  if ('wheelDeltaY' in event) {
    sY = -event.wheelDeltaY / 120;
  }
  if ('wheelDeltaX' in event) {
    sX = -event.wheelDeltaX / 120;
  }

  // side scrolling on FF with DOMMouseScroll
  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }
  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;
  if ('deltaY' in event) {
    pY = event.deltaY;
  }
  if ('deltaX' in event) {
    pX = event.deltaX;
  }
  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {
      // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }
  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }
  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
}

/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function () /*string*/{
  return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
};
module.exports = normalizeWheel;

/***/ }),

/***/ "./node_modules/prefix/index.js":
/*!**************************************!*\
  !*** ./node_modules/prefix/index.js ***!
  \**************************************/
/***/ ((module) => {

// check document first so it doesn't error in node.js
var style = typeof document != 'undefined' ? document.createElement('p').style : {};
var prefixes = ['O', 'ms', 'Moz', 'Webkit'];
var upper = /([A-Z])/g;
var memo = {};

/**
 * prefix `key`
 *
 *   prefix('transform') // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefix(key) {
  // Camel case
  key = key.replace(/-([a-z])/g, function (_, char) {
    return char.toUpperCase();
  });

  // Without prefix
  if (style[key] !== undefined) return key;

  // With prefix
  var Key = key.charAt(0).toUpperCase() + key.slice(1);
  var i = prefixes.length;
  while (i--) {
    var name = prefixes[i] + Key;
    if (style[name] !== undefined) return name;
  }
  return key;
}

/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixMemozied(key) {
  return key in memo ? memo[key] : memo[key] = prefix(key);
}

/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixDashed(key) {
  key = prefix(key);
  if (upper.test(key)) {
    key = '-' + key.replace(upper, '-$1');
    upper.lastIndex = 0;
  }
  return key.toLowerCase();
}
module.exports = prefixMemozied;
module.exports.dash = prefixDashed;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e9e1e66878c32f4501de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MVgsTUFBTTtFQUN2QixPQUFPbVksQ0FBQyxFQUFFLEVBQUU7SUFDVixJQUFJeEssSUFBSSxHQUFHK0osUUFBUSxDQUFDUyxDQUFDLENBQUMsR0FBR0gsR0FBRztJQUM1QixJQUFJdFcsS0FBSyxDQUFDaU0sSUFBSSxDQUFDLEtBQUtwSCxTQUFTLEVBQUUsT0FBT29ILElBQUk7RUFDNUM7RUFFQSxPQUFPL04sR0FBRztBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3dZLGNBQWNBLENBQUN4WSxHQUFHLEVBQUM7RUFDMUIsT0FBT0EsR0FBRyxJQUFJZ1ksSUFBSSxHQUNkQSxJQUFJLENBQUNoWSxHQUFHLENBQUMsR0FDVGdZLElBQUksQ0FBQ2hZLEdBQUcsQ0FBQyxHQUFHaVksTUFBTSxDQUFDalksR0FBRyxDQUFDO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3lZLFlBQVlBLENBQUN6WSxHQUFHLEVBQUM7RUFDeEJBLEdBQUcsR0FBR2lZLE1BQU0sQ0FBQ2pZLEdBQUcsQ0FBQztFQUNqQixJQUFJK1gsS0FBSyxDQUFDeE4sSUFBSSxDQUFDdkssR0FBRyxDQUFDLEVBQUU7SUFDbkJBLEdBQUcsR0FBRyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ29LLE9BQU8sQ0FBQzJOLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDckNBLEtBQUssQ0FBQzlHLFNBQVMsR0FBRyxDQUFDO0VBQ3JCO0VBQ0EsT0FBT2pSLEdBQUcsQ0FBQzBZLFdBQVcsQ0FBQyxDQUFDO0FBQzFCO0FBRUE1VixNQUFNLENBQUNDLE9BQU8sR0FBR3lWLGNBQWM7QUFDL0IxVixtQkFBbUIsR0FBRzJWLFlBQVk7Ozs7Ozs7O1VDcEVsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL0xhYmVsLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL1BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvYW5pbWF0aW9ucy9UaXRsZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvQ29sb3JzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3BhZ2VzL0Fib3V0L0Fib3V0LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvRGV0YWlsL0RldGFpbC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvSG9tZS9Ib21lLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZU1hcC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tYXAuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXdoZWVsL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL1VzZXJBZ2VudF9ERVBSRUNBVEVELmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL2lzRXZlbnRTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS13aGVlbC9zcmMvbm9ybWFsaXplV2hlZWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL3ByZWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICdjbGFzc2VzL0FuaW1hdGlvbic7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0JztcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHNwbGl0KHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpO1xuICAgIH1cblxuICAgIGFuaW1hdGVJbigpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgdGhpcy50aW1lbGluZUluLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgIGVhY2godGhpcy5lbGVtZW50c0xpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXG4gICAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWxheTogaW5kZXggKiAwLjIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHk6ICcwJScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzTGluZXMpXG4gICAgfVxuXG59IiwiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHNwbGl0KHtcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmltYXRlSW4oKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmVJbiA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgIHRoaXMudGltZWxpbmVJbi5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgICBlYWNoKHRoaXMuZWxlbWVudHNMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lSW4uZnJvbVRvKFxuICAgICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICAgICAgICBkZWxheTogaW5kZXggKiAwLjEsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHk6ICcwJScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpO1xuICAgIH1cblxufSIsImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICdjbGFzc2VzL0FuaW1hdGlvbic7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0JztcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHNwbGl0KHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpO1xuICAgIH1cblxuICAgIGFuaW1hdGVJbigpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgdGhpcy50aW1lbGluZUluLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgIGVhY2godGhpcy5lbGVtZW50c0xpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXG4gICAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWxheTogaW5kZXggKiAwLjIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHk6ICcwJScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzTGluZXMpXG4gICAgfVxuXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dCgpO1xuICAgICAgfVxuICBcbiAgICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICAgIHRoaXMub2Jlc2V2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuaW1hdGVpbicpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVJbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0ZW91dCcpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgLy8gICDlpoLmnpzmmK/ov5vlhaXliqjnlLvvvIzlsLHosIPnlKjov5vlhaXliqjnlLvnmoTmlrnms5XvvIzlj43kuYvjgILnhLblkI7lnKhhbmltYXRpb25z55qE6K6+5a6a55qE5LiN5ZCM5Yqo55S75pa55rOV6YeM5bel5L2cXG4gIFxuICAgICAgdGhpcy5vYmVzZXZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge31cbiAgICBhbmltYXRlT3V0KCkge31cbn0gICIsImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuXG4vL1RJUCB1c2luZyB0aGUgc2luZ2xldG9uIE9PUFMgY29uY2VwdFxuY2xhc3MgQ29sb3JzIHtcbiAgY2hhbmdlKHsgYmFja2dyb3VuZENvbG9yLCBjb2xvciB9KSB7XG4gICAgR1NBUC50byhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgIGNvbG9yLFxuICAgICAgZHVyYXRpb246IDEuNSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ29sb3JzTWFuYWdlciA9IG5ldyBDb2xvcnMoKTsiLCIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnYW5pbWF0aW9ucy9UaXRsZSdcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnYW5pbWF0aW9ucy9QYXJhZ3JhcGgnO1xuaW1wb3J0IExhYmVsIGZyb20gJ2FuaW1hdGlvbnMvTGFiZWwnO1xuXG5pbXBvcnQgeyBDb2xvcnNNYW5hZ2VyIH0gZnJvbSAnLi9Db2xvcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioey8vIOaehOmAoOWHveaVsOWcqOWunuS+i+WMluaXtuS8muS4uuWvueixoeiuvue9ruWIneWni+WxnuaAp+aIlueKtuaAgeOAguaehOmAoOWHveaVsOWumuS5ieS6huWvueixoeWcqOWIm+W7uuaXtuW6lOivpeWFt+Wkh+eahOeJueW+geOAguWcqOWIm+W7uuexu+eahOWunuS+i+WQju+8jOWPr+S7peiuv+mXruWSjOaTjeS9nOi/meS6m+WxnuaAp++8jOi/mOWPr+S7peiwg+eUqOS4juivpeexu+ebuOWFs+iBlOeahOaWueazleOAglxuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHMsXG4gICAgaWRcbiAgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyBcbiAgICAgIC4uLmVsZW1lbnRzLFxuICAgICAgYW5pbWF0aW9uVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPVwidGl0bGVcIl0nLFxuICAgICAgYW5pbWF0aW9uUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICBhbmltYXRpb25MYWJlbHM6ICdbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXScsXG5cblxuICAgIH1cbiAgICAvLyBzZWxlY3RvcueUqOadpeWtmOWCqOS8oOWFpei/meS4pOS4quWxnuaAp+eahOW8leeUqO+8jOeUqOadpeWtmOWCqOWvuemhtemdouWFg+e0oOeahOW8leeUqOOAgmVsZW1lbnTlj6/og73mmK/kuIDkuKrpobXpnaLnmoTlhYPntKDvvIxlbGVtZW50c+WPr+iDveaYr+WFg+e0oOmbhuWQiFxuICAgIC8vIC4uLmVsZW1lbnTmmK/lsZXlvIDov5DnrpfnrKbvvIznlKjkuo7lv6vpgJ/lpI3liLblr7nosaHmiJblkIjlubblr7nosaHlsZ7mgKfliLDkuIDkuKrmlrDnmoTlr7nosaHkuK3jgILliJvlu7rkuobkuIDkuKrmlrDnmoTlr7nosaHvvIzor6Xlr7nosaHljIXlkKvkuoYgZWxlbWVudHMg5Lit55qE5omA5pyJ5bGe5oCnXG5cbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHsvLyBjcmVhdGXmlrnms5XmmK/kvb/nlKggcXVlcnlTZWxlY3Rvcui/m+ihjOmhtemdoueahOWFg+e0oOmAieaLqeWSjOaTjeS9nFxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICAvLyDlsLHmmK/lhYjosIPnlKjkuIrpnaLnmoTmnoTpgKDlh73mlbDvvIzlsIbpobXpnaLnmoRlbGVtZW5055qE5YC85a2Y5YiwdGhpLnNlbGVjdG9y55qE5a655Zmo6YeM77yM54S25ZCO5Zyo5omn6KGM6L+Z5LiqY3JlYXRl5Ye95pWw77yM6I635Y+W5Yiw5b2T5YmN6KKr6YCJ5oup5Zmo5omA5oyH5a6a55qE5YWD57Sg44CCcXVlcnlTZWxjdG9y6L+Z5Liq5pa55rOV5LiN5Lya6YCJ5oup5omA5pyJ5Yy56YWN55qE5YWD57Sg77yM6ICM5Y+q5Lya6L+U5Zue56ys5LiA5Liq5Yy56YWN55qE5YWD57Sg44CCXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgICAvLyDlsIblsZ7mgKflgLzljbPpobXpnaLlhYPntKDlrZjlgqjlnKhlbGVtZW50c+WvueixoeS4reW5tuS7peS7luS7rOeahOWxnuaAp+WQjeWRveWQjVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuICAgICAgICAvLyDml6DorrrmmK/nm7TmjqXnmoTpobXpnaLlhYPntKDvvIg8ZGl2PuOAgTxwPuOAgTxzcGFuPu+8iei/mOaYr+mAieaLqeWZqOWtl+espuS4su+8iOexu+WQjeOAgUlE44CB5qCH562+5ZCN77yJ6YO95a2Y5ZyoZWxlbWVudHPph4zvvIzlpb3nlKjlgZrlkI7nu63mk43kvZzorr/pl65cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZW50cnk65q+P5Liq5bGe5oCn55qE5YC877yM5Lmf5bCx5piv5bGe5oCn5omA5a+55bqU55qE5YaF5a65O2tleTrlsZ7mgKfnmoTlkI3np7DjgILkvJjngrnmjInnhaflsZ7mgKflkI3vvIjooajnpLrlhYPntKDnsbvlnovmiJbnibnlvoHvvInmnaXorr/pl67lr7nlupTnmoTlhYPntKDmiJblhYPntKDpm4blkIhcbiAgICAgIC8vIOavj+S4quWxnuaAp+eahOWQjeensOihqOekuuS6huS4gOe7hOWFg+e0oOeahOexu+Wei+aIlueJueW+ge+8iOWmgiBhbmltYXRpb25UaXRsZXPjgIFhbmltYXRpb25QYXJhZ3JhcGhzIOetie+8ie+8jOiAjOWvueW6lOeahOWxnuaAp+WAvOaYr+eUqOi/meS6m+mAieaLqeWZqOmAieaLqeWIsOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiOOAglxuICAgIH0pO1xuICAgIC8vIGVudHJ55piv5b2T5YmN5YWD57SgLGZvcmVhY2jnlKjkuI3kuobmjaLmiJDkuoZsb3djYXNoL2VhY2jmnaXpgY3ljoZcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgLy8g5byA5aeL5YGa5Yqo55S75LqG772e4qyH77iPXG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIC8vVGl0bGVcbiAgICB0aGlzLmFuaW1hdGlvblRpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvblRpdGxlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25UaXRsZXMpO1xuXG4gICAgLy9QYXJhZ3JhcGhcbiAgICB0aGlzLmFuaW1hdGlvblBhcmFncmFwaHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25QYXJhZ3JhcGhzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25QYXJhZ3JhcGhzKTtcblxuICAgIC8vTGFiZWxcbiAgICB0aGlzLmFuaW1hdGlvbkxhYmVscyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbkxhYmVscywgKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTGFiZWwoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25MYWJlbHMpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIENvbG9yc01hbmFnZXIuY2hhbmdlKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQnKSxcbiAgICAgICAgY29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gR1NBUOWwseaYr2phdmHliqjnlLvlupPph4znmoTkuIDkuKrliqjnlLvmlYjmnpxcblxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIG9uTW91c2V3aGVlbChldmVudCkge1xuICAgIGNvbnN0IHtwaXhlbFl9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7IC8vVElQIG5vcm1hbGl6ZWQgd2hlZWxcbiAgICBcbiAgICAvLyBub3JtYWxpemXlkI7vvIzpvKDmoIfnmoTnp7vliqjmu5rmu5HnmoTnqIvluqblnKjmr4/kuKpwYWdl5bqU6K+l5piv5LiA5qC355qEXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIGVhY2godGhpcy5hbmltYXRpb24sIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcbiAgfVxuXG5cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcbiAgICAgIDAsXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxuICAgICk7XG4gICAgLy8g55uu5qCH5LiN6IO95bCP5LqOMOWkp+S6jmxpbWl0XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICAwLjFcbiAgICApO1xuICAgIC8vIGludGVycG9sYXRl55u45b2T5LqObGVycO+8muS9v2N1cnJlbnTlgLzlg490YXJnZXTlgLzov5vooYzkuIDkuKrlubPmu5Hov4fmuKHvvZ4wLjHmmK/mjqfliLbmr5Tkvovlj4LmlbDmr4/kuIDmraXnp7vlpJrlsJHvvIzpgJDmuJDotovlkJHkuo50YXJnZXTlgLzvvIzlgLzotorlsI/vvIzotorlubPmu5FcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5lbGVtZW50cy53cmFwcGVyKXtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF09YHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwuYmluZCh0aGlzKSk7XG4gIH1cblxufSIsImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyBQYWdle1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDonYWJvdXQnLFxuXG4gICAgICBlbGVtZW50OicuYWJvdXQnLFxuXG4gICAgICBlbGVtZW50czp7XG4gICAgICAgIHdyYXBwZXI6Jy5hYm91dF9fd3JhcHBlcicsXG4gICAgICAgIG5hdmlnYXRpb246ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKSxcbiAgICAgICAgdGl0bGU6Jy5hYm91dF9fdGl0bGUnXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBzdXBlciDosIPnlKjkuobniLbnsbvnmoTmnoTpgKDlh73mlbDvvIzlubbkvKDpgJLkuobkuIDkuKrljIXlkKsgaWQ6ICdhYm91dCcg55qE5a+56LGh44CC6L+Z5Liq5a+56LGh55So5LqO54i257G755qE5p6E6YCg5Ye95pWw44CC54S25ZCO77yM54i257G755qE5p6E6YCg5Ye95pWw5Lit55qEIGNvbnNvbGUubG9nKCdDcmVhdGUnLCB0aGlzLmlkKSDlsIbkvJrlnKjmjqfliLblj7DorrDlvZUgJ0NyZWF0ZSBhYm91dCfjgILov5nmmK/lm6DkuLrniLbnsbvnmoTmnoTpgKDlh73mlbDmjqXmlLbliLDkuoYgeyBpZDogJ2Fib3V0JyB9IOi/meS4quWvueixoe+8jOW5tuiusOW9leS6huebuOWFs+S/oeaBr+OAglxuXG4gIH1cbn0iLCJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb25zIGV4dGVuZHMgUGFnZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6J2NvbGxlY3Rpb25zJyxcbiAgICAgIGVsZW1lbnQ6Jy5jb2xsZWN0aW9ucycsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogJy5jb2xsZWN0aW9uc19fdGl0bGUnLFxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gc3VwZXIg6LCD55So5LqG54i257G755qE5p6E6YCg5Ye95pWw77yM5bm25Lyg6YCS5LqG5LiA5Liq5YyF5ZCrIGlkOiAnYWJvdXQnIOeahOWvueixoeOAgui/meS4quWvueixoeeUqOS6jueItuexu+eahOaehOmAoOWHveaVsOOAgueEtuWQju+8jOeItuexu+eahOaehOmAoOWHveaVsOS4reeahCBjb25zb2xlLmxvZygnQ3JlYXRlJywgdGhpcy5pZCkg5bCG5Lya5Zyo5o6n5Yi25Y+w6K6w5b2VICdDcmVhdGUgYWJvdXQn44CC6L+Z5piv5Zug5Li654i257G755qE5p6E6YCg5Ye95pWw5o6l5pS25Yiw5LqGIHsgaWQ6ICdhYm91dCcgfSDov5nkuKrlr7nosaHvvIzlubborrDlvZXkuobnm7jlhbPkv6Hmga/jgIJcbiAgfVxufSIsImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgUGFnZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6J2RldGFpbCcsXG4gICAgICBlbGVtZW50OicuZGV0YWlsJ1xuICAgIH0pXG4gICAgLy8gc3VwZXIg6LCD55So5LqG54i257G755qE5p6E6YCg5Ye95pWw77yM5bm25Lyg6YCS5LqG5LiA5Liq5YyF5ZCrIGlkOiAnYWJvdXQnIOeahOWvueixoeOAgui/meS4quWvueixoeeUqOS6jueItuexu+eahOaehOmAoOWHveaVsOOAgueEtuWQju+8jOeItuexu+eahOaehOmAoOWHveaVsOS4reeahCBjb25zb2xlLmxvZygnQ3JlYXRlJywgdGhpcy5pZCkg5bCG5Lya5Zyo5o6n5Yi25Y+w6K6w5b2VICdDcmVhdGUgYWJvdXQn44CC6L+Z5piv5Zug5Li654i257G755qE5p6E6YCg5Ye95pWw5o6l5pS25Yiw5LqGIHsgaWQ6ICdhYm91dCcgfSDov5nkuKrlr7nosaHvvIzlubborrDlvZXkuobnm7jlhbPkv6Hmga/jgIJcblxuICB9XG59IiwiaW1wb3J0IFBhZ2UgZnJvbSAnY2xhc3Nlcy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6J2hvbWUnLFxuICAgICAgZWxlbWVudDonLmhvbWUnLFxuICAgICAgZWxlbWVudHM6e1xuICAgICAgICBsaW5rOicuaG9tZV9fbGluaycsXG4gICAgICAgIG5hdmlnYXRpb246ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gc3VwZXIg6LCD55So5LqG54i257G755qE5p6E6YCg5Ye95pWw77yM5bm25Lyg6YCS5LqG5LiA5Liq5YyF5ZCrIGlkOiAnYWJvdXQnIOeahOWvueixoeOAgui/meS4quWvueixoeeUqOS6jueItuexu+eahOaehOmAoOWHveaVsOOAgueEtuWQju+8jOeItuexu+eahOaehOmAoOWHveaVsOS4reeahCBjb25zb2xlLmxvZygnQ3JlYXRlJywgdGhpcy5pZCkg5bCG5Lya5Zyo5o6n5Yi25Y+w6K6w5b2VICdDcmVhdGUgYWJvdXQn44CC6L+Z5piv5Zug5Li654i257G755qE5p6E6YCg5Ye95pWw5o6l5pS25Yiw5LqGIHsgaWQ6ICdhYm91dCcgfSDov5nkuKrlr7nosaHvvIzlubborrDlvZXkuobnm7jlhbPkv6Hmga/jgIJcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5saW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxfID0+IGNvbnNvbGUubG9nKCdvaCx5b3UgY2xpY2tlZCBtZScpKVxuICAgIH1cblxuXG4gIFxufSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIENoZWNrIHRoYXQgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBhcnJTdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAoYXJyU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIGFyclN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBhcnJheTtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgdGhhdCBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIG9ialN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgdmFyIG90aFN0YWNrZWQgPSBzdGFjay5nZXQob3RoZXIpO1xuICBpZiAob2JqU3RhY2tlZCAmJiBvdGhTdGFja2VkKSB7XG4gICAgcmV0dXJuIG9ialN0YWNrZWQgPT0gb3RoZXIgJiYgb3RoU3RhY2tlZCA9PSBvYmplY3Q7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZU1hcCA9IHJlcXVpcmUoJy4vX2Jhc2VNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMgYnkgcnVubmluZyBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocnVcbiAqIGBpdGVyYXRlZWAuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8uZXZlcnlgLCBgXy5maWx0ZXJgLCBgXy5tYXBgLCBgXy5tYXBWYWx1ZXNgLCBgXy5yZWplY3RgLCBhbmQgYF8uc29tZWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXJ5YCwgYGNodW5rYCwgYGN1cnJ5YCwgYGN1cnJ5UmlnaHRgLCBgZHJvcGAsIGBkcm9wUmlnaHRgLCBgZXZlcnlgLFxuICogYGZpbGxgLCBgaW52ZXJ0YCwgYHBhcnNlSW50YCwgYHJhbmRvbWAsIGByYW5nZWAsIGByYW5nZVJpZ2h0YCwgYHJlcGVhdGAsXG4gKiBgc2FtcGxlU2l6ZWAsIGBzbGljZWAsIGBzb21lYCwgYHNvcnRCeWAsIGBzcGxpdGAsIGB0YWtlYCwgYHRha2VSaWdodGAsXG4gKiBgdGVtcGxhdGVgLCBgdHJpbWAsIGB0cmltRW5kYCwgYHRyaW1TdGFydGAsIGFuZCBgd29yZHNgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBzcXVhcmUobikge1xuICogICByZXR1cm4gbiAqIG47XG4gKiB9XG4gKlxuICogXy5tYXAoWzQsIDhdLCBzcXVhcmUpO1xuICogLy8gPT4gWzE2LCA2NF1cbiAqXG4gKiBfLm1hcCh7ICdhJzogNCwgJ2InOiA4IH0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWFwKHVzZXJzLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknLCAnZnJlZCddXG4gKi9cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheU1hcCA6IGJhc2VNYXA7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvbm9ybWFsaXplV2hlZWwuanMnKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYW5Vc2VET00gPSAhIShcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93LmRvY3VtZW50ICYmXG4gIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4pO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG4gICAgY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMDQtcHJlc2VudCBGYWNlYm9vay4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgVXNlckFnZW50X0RFUFJFQ0FURURcbiAqL1xuXG4vKipcbiAqICBQcm92aWRlcyBlbnRpcmVseSBjbGllbnQtc2lkZSBVc2VyIEFnZW50IGFuZCBPUyBkZXRlY3Rpb24uIFlvdSBzaG91bGQgcHJlZmVyXG4gKiAgdGhlIG5vbi1kZXByZWNhdGVkIFVzZXJBZ2VudCBtb2R1bGUgd2hlbiBwb3NzaWJsZSwgd2hpY2ggZXhwb3NlcyBvdXJcbiAqICBhdXRob3JpdGF0aXZlIHNlcnZlci1zaWRlIFBIUC1iYXNlZCBkZXRlY3Rpb24gdG8gdGhlIGNsaWVudC5cbiAqXG4gKiAgVXNhZ2UgaXMgc3RyYWlnaHRmb3J3YXJkOlxuICpcbiAqICAgIGlmIChVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpKSB7XG4gKiAgICAgIC8vICBJRVxuICogICAgfVxuICpcbiAqICBZb3UgY2FuIGFsc28gZG8gdmVyc2lvbiBjaGVja3M6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgPj0gNykge1xuICogICAgICAvLyAgSUU3IG9yIGJldHRlclxuICogICAgfVxuICpcbiAqICBUaGUgYnJvd3NlciBmdW5jdGlvbnMgd2lsbCByZXR1cm4gTmFOIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IG1hdGNoLCBzb1xuICogIHlvdSBjYW4gYWxzbyBkbyB2ZXJzaW9uIGNvbXBhcmVzIHRoZSBvdGhlciB3YXk6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkgPCA3KSB7XG4gKiAgICAgIC8vICBJRTYgb3Igd29yc2VcbiAqICAgIH1cbiAqXG4gKiAgTm90ZSB0aGF0IHRoZSB2ZXJzaW9uIGlzIGEgZmxvYXQgYW5kIG1heSBpbmNsdWRlIGEgbWlub3IgdmVyc2lvbiBudW1iZXIsXG4gKiAgc28geW91IHNob3VsZCBhbHdheXMgdXNlIHJhbmdlIG9wZXJhdG9ycyB0byBwZXJmb3JtIGNvbXBhcmlzb25zLCBub3RcbiAqICBzdHJpY3QgZXF1YWxpdHkuXG4gKlxuICogICoqTm90ZToqKiBZb3Ugc2hvdWxkICoqc3Ryb25nbHkqKiBwcmVmZXIgY2FwYWJpbGl0eSBkZXRlY3Rpb24gdG8gYnJvd3NlclxuICogIHZlcnNpb24gZGV0ZWN0aW9uIHdoZXJlIGl0J3MgcmVhc29uYWJsZTpcbiAqXG4gKiAgICBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2pzL3N1cHBvcnQuaHRtbFxuICpcbiAqICBGdXJ0aGVyLCB3ZSBoYXZlIGEgbGFyZ2UgbnVtYmVyIG9mIG1hdHVyZSB3cmFwcGVyIGZ1bmN0aW9ucyBhbmQgY2xhc3Nlc1xuICogIHdoaWNoIGFic3RyYWN0IGF3YXkgbWFueSBicm93c2VyIGlycmVndWxhcml0aWVzLiBDaGVjayB0aGUgZG9jdW1lbnRhdGlvbixcbiAqICBncmVwIGZvciB0aGluZ3MsIG9yIGFzayBvbiBqYXZhc2NyaXB0QGxpc3RzLmZhY2Vib29rLmNvbSBiZWZvcmUgd3JpdGluZyB5ZXRcbiAqICBhbm90aGVyIGNvcHkgb2YgXCJldmVudCB8fCB3aW5kb3cuZXZlbnRcIi5cbiAqXG4gKi9cblxudmFyIF9wb3B1bGF0ZWQgPSBmYWxzZTtcblxuLy8gQnJvd3NlcnNcbnZhciBfaWUsIF9maXJlZm94LCBfb3BlcmEsIF93ZWJraXQsIF9jaHJvbWU7XG5cbi8vIEFjdHVhbCBJRSBicm93c2VyIGZvciBjb21wYXRpYmlsaXR5IG1vZGVcbnZhciBfaWVfcmVhbF92ZXJzaW9uO1xuXG4vLyBQbGF0Zm9ybXNcbnZhciBfb3N4LCBfd2luZG93cywgX2xpbnV4LCBfYW5kcm9pZDtcblxuLy8gQXJjaGl0ZWN0dXJlc1xudmFyIF93aW42NDtcblxuLy8gRGV2aWNlc1xudmFyIF9pcGhvbmUsIF9pcGFkLCBfbmF0aXZlO1xuXG52YXIgX21vYmlsZTtcblxuZnVuY3Rpb24gX3BvcHVsYXRlKCkge1xuICBpZiAoX3BvcHVsYXRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9wb3B1bGF0ZWQgPSB0cnVlO1xuXG4gIC8vIFRvIHdvcmsgYXJvdW5kIGJ1Z2d5IEpTIGxpYnJhcmllcyB0aGF0IGNhbid0IGhhbmRsZSBtdWx0aS1kaWdpdFxuICAvLyB2ZXJzaW9uIG51bWJlcnMsIE9wZXJhIDEwJ3MgdXNlciBhZ2VudCBzdHJpbmcgY2xhaW1zIGl0J3MgT3BlcmFcbiAgLy8gOSwgdGhlbiBsYXRlciBpbmNsdWRlcyBhIFZlcnNpb24vWC5ZIGZpZWxkOlxuICAvL1xuICAvLyBPcGVyYS85LjgwIChmb28pIFByZXN0by8yLjIuMTUgVmVyc2lvbi8xMC4xMFxuICB2YXIgdWFzID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGFnZW50ID0gLyg/Ok1TSUUuKFxcZCtcXC5cXGQrKSl8KD86KD86RmlyZWZveHxHcmFuUGFyYWRpc298SWNld2Vhc2VsKS4oXFxkK1xcLlxcZCspKXwoPzpPcGVyYSg/Oi4rVmVyc2lvbi58LikoXFxkK1xcLlxcZCspKXwoPzpBcHBsZVdlYktpdC4oXFxkKyg/OlxcLlxcZCspPykpfCg/OlRyaWRlbnRcXC9cXGQrXFwuXFxkKy4qcnY6KFxcZCtcXC5cXGQrKSkvLmV4ZWModWFzKTtcbiAgdmFyIG9zICAgID0gLyhNYWMgT1MgWCl8KFdpbmRvd3MpfChMaW51eCkvLmV4ZWModWFzKTtcblxuICBfaXBob25lID0gL1xcYihpUGhvbmV8aVBbYW9dZCkvLmV4ZWModWFzKTtcbiAgX2lwYWQgPSAvXFxiKGlQW2FvXWQpLy5leGVjKHVhcyk7XG4gIF9hbmRyb2lkID0gL0FuZHJvaWQvaS5leGVjKHVhcyk7XG4gIF9uYXRpdmUgPSAvRkJBTlxcL1xcdys7L2kuZXhlYyh1YXMpO1xuICBfbW9iaWxlID0gL01vYmlsZS9pLmV4ZWModWFzKTtcblxuICAvLyBOb3RlIHRoYXQgdGhlIElFIHRlYW0gYmxvZyB3b3VsZCBoYXZlIHlvdSBiZWxpZXZlIHlvdSBzaG91bGQgYmUgY2hlY2tpbmdcbiAgLy8gZm9yICdXaW42NDsgeDY0Jy4gIEJ1dCBNU0ROIHRoZW4gcmV2ZWFscyB0aGF0IHlvdSBjYW4gYWN0dWFsbHkgYmUgY29taW5nXG4gIC8vIGZyb20gZWl0aGVyIHg2NCBvciBpYTY0OyAgc28gdWx0aW1hdGVseSwgeW91IHNob3VsZCBqdXN0IGNoZWNrIGZvciBXaW42NFxuICAvLyBhcyBpbiBpbmRpY2F0b3Igb2Ygd2hldGhlciB5b3UncmUgaW4gNjQtYml0IElFLiAgMzItYml0IElFIG9uIDY0LWJpdFxuICAvLyBXaW5kb3dzIHdpbGwgc2VuZCAnV09XNjQnIGluc3RlYWQuXG4gIF93aW42NCA9ICEhKC9XaW42NC8uZXhlYyh1YXMpKTtcblxuICBpZiAoYWdlbnQpIHtcbiAgICBfaWUgPSBhZ2VudFsxXSA/IHBhcnNlRmxvYXQoYWdlbnRbMV0pIDogKFxuICAgICAgICAgIGFnZW50WzVdID8gcGFyc2VGbG9hdChhZ2VudFs1XSkgOiBOYU4pO1xuICAgIC8vIElFIGNvbXBhdGliaWxpdHkgbW9kZVxuICAgIGlmIChfaWUgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG4gICAgICBfaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgfVxuICAgIC8vIGdyYWIgdGhlIFwidHJ1ZVwiIGllIHZlcnNpb24gZnJvbSB0aGUgdHJpZGVudCB0b2tlbiBpZiBhdmFpbGFibGVcbiAgICB2YXIgdHJpZGVudCA9IC8oPzpUcmlkZW50XFwvKFxcZCsuXFxkKykpLy5leGVjKHVhcyk7XG4gICAgX2llX3JlYWxfdmVyc2lvbiA9IHRyaWRlbnQgPyBwYXJzZUZsb2F0KHRyaWRlbnRbMV0pICsgNCA6IF9pZTtcblxuICAgIF9maXJlZm94ID0gYWdlbnRbMl0gPyBwYXJzZUZsb2F0KGFnZW50WzJdKSA6IE5hTjtcbiAgICBfb3BlcmEgICA9IGFnZW50WzNdID8gcGFyc2VGbG9hdChhZ2VudFszXSkgOiBOYU47XG4gICAgX3dlYmtpdCAgPSBhZ2VudFs0XSA/IHBhcnNlRmxvYXQoYWdlbnRbNF0pIDogTmFOO1xuICAgIGlmIChfd2Via2l0KSB7XG4gICAgICAvLyBXZSBkbyBub3QgYWRkIHRoZSByZWdleHAgdG8gdGhlIGFib3ZlIHRlc3QsIGJlY2F1c2UgaXQgd2lsbCBhbHdheXNcbiAgICAgIC8vIG1hdGNoICdzYWZhcmknIG9ubHkgc2luY2UgJ0FwcGxlV2ViS2l0JyBhcHBlYXJzIGJlZm9yZSAnQ2hyb21lJyBpblxuICAgICAgLy8gdGhlIHVzZXJBZ2VudCBzdHJpbmcuXG4gICAgICBhZ2VudCA9IC8oPzpDaHJvbWVcXC8oXFxkK1xcLlxcZCspKS8uZXhlYyh1YXMpO1xuICAgICAgX2Nocm9tZSA9IGFnZW50ICYmIGFnZW50WzFdID8gcGFyc2VGbG9hdChhZ2VudFsxXSkgOiBOYU47XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jaHJvbWUgPSBOYU47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIF9pZSA9IF9maXJlZm94ID0gX29wZXJhID0gX2Nocm9tZSA9IF93ZWJraXQgPSBOYU47XG4gIH1cblxuICBpZiAob3MpIHtcbiAgICBpZiAob3NbMV0pIHtcbiAgICAgIC8vIERldGVjdCBPUyBYIHZlcnNpb24uICBJZiBubyB2ZXJzaW9uIG51bWJlciBtYXRjaGVzLCBzZXQgX29zeCB0byB0cnVlLlxuICAgICAgLy8gVmVyc2lvbiBleGFtcGxlczogIDEwLCAxMF82XzEsIDEwLjdcbiAgICAgIC8vIFBhcnNlcyB2ZXJzaW9uIG51bWJlciBhcyBhIGZsb2F0LCB0YWtpbmcgb25seSBmaXJzdCB0d28gc2V0cyBvZlxuICAgICAgLy8gZGlnaXRzLiAgSWYgb25seSBvbmUgc2V0IG9mIGRpZ2l0cyBpcyBmb3VuZCwgcmV0dXJucyBqdXN0IHRoZSBtYWpvclxuICAgICAgLy8gdmVyc2lvbiBudW1iZXIuXG4gICAgICB2YXIgdmVyID0gLyg/Ok1hYyBPUyBYIChcXGQrKD86Wy5fXVxcZCspPykpLy5leGVjKHVhcyk7XG5cbiAgICAgIF9vc3ggPSB2ZXIgPyBwYXJzZUZsb2F0KHZlclsxXS5yZXBsYWNlKCdfJywgJy4nKSkgOiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfb3N4ID0gZmFsc2U7XG4gICAgfVxuICAgIF93aW5kb3dzID0gISFvc1syXTtcbiAgICBfbGludXggICA9ICEhb3NbM107XG4gIH0gZWxzZSB7XG4gICAgX29zeCA9IF93aW5kb3dzID0gX2xpbnV4ID0gZmFsc2U7XG4gIH1cbn1cblxudmFyIFVzZXJBZ2VudF9ERVBSRUNBVEVEID0ge1xuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIEludGVybmV0IEV4cGxvcmVyLlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBpZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UncmUgaW4gSW50ZXJuZXQgRXhwbG9yZXIgY29tcGF0aWJpbGl0eSBtb2RlLlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgdHJ1ZSBpZiBpbiBjb21wYXRpYmlsaXR5IG1vZGUsIGZhbHNlIGlmXG4gICAqIG5vdCBjb21wYXRpYmlsaXR5IG1vZGUgb3Igbm90IGllXG4gICAqL1xuICBpZUNvbXBhdGliaWxpdHlNb2RlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgKF9pZV9yZWFsX3ZlcnNpb24gPiBfaWUpO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgNjQtYml0IElFLiAgUmVhbGx5LCB0aGlzIGlzIGtpbmQgb2Ygd2VhayBzYXVjZTsgIHdlXG4gICAqIG9ubHkgbmVlZCB0aGlzIGJlY2F1c2UgU2t5cGUgY2FuJ3QgaGFuZGxlIDY0LWJpdCBJRSB5ZXQuICBXZSBuZWVkIHRvIHJlbW92ZVxuICAgKiB0aGlzIHdoZW4gd2UgZG9uJ3QgbmVlZCBpdCAtLSB0cmFja2VkIGJ5ICM2MDE5NTcuXG4gICAqL1xuICBpZTY0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSAmJiBfd2luNjQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgRmlyZWZveC5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgZmlyZWZveDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9maXJlZm94O1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgT3BlcmEuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIG9wZXJhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX29wZXJhO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgV2ViS2l0LlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICB3ZWJraXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfd2Via2l0O1xuICB9LFxuXG4gIC8qKlxuICAgKiAgRm9yIFB1c2hcbiAgICogIFdJTEwgQkUgUkVNT1ZFRCBWRVJZIFNPT04uIFVzZSBVc2VyQWdlbnRfREVQUkVDQVRFRC53ZWJraXRcbiAgICovXG4gIHNhZmFyaTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFVzZXJBZ2VudF9ERVBSRUNBVEVELndlYmtpdCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIFVBIGlzIGEgQ2hyb21lIGJyb3dzZXIuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIGNocm9tZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfY2hyb21lO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIFdpbmRvd3MuXG4gICAqXG4gICAqICBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyJ3MgT1MgaXMgV2luZG93cy5cbiAgICovXG4gIHdpbmRvd3M6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfd2luZG93cztcbiAgfSxcblxuXG4gIC8qKlxuICAgKiAgQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBNYWMgT1MgWC5cbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8Ym9vbCAgIFJldHVybnMgYSBmbG9hdCBpZiBhIHZlcnNpb24gbnVtYmVyIGlzIGRldGVjdGVkLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIHRydWUvZmFsc2UuXG4gICAqL1xuICBvc3g6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfb3N4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIExpbnV4LlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyJ3MgT1MgaXMgc29tZSBmbGF2b3Igb2YgTGludXguXG4gICAqL1xuICBsaW51eDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9saW51eDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgcnVubmluZyBvbiBhbiBpUGhvbmUgb3IgaVBvZCBwbGF0Zm9ybS5cbiAgICpcbiAgICogQHJldHVybiBib29sIGB0cnVlJyBpZiB0aGUgdXNlciBpcyBydW5uaW5nIHNvbWUgZmxhdm9yIG9mIHRoZVxuICAgKiAgICBpUGhvbmUgT1MuXG4gICAqL1xuICBpcGhvbmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaXBob25lO1xuICB9LFxuXG4gIG1vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IChfaXBob25lIHx8IF9pcGFkIHx8IF9hbmRyb2lkIHx8IF9tb2JpbGUpO1xuICB9LFxuXG4gIG5hdGl2ZUFwcDogZnVuY3Rpb24oKSB7XG4gICAgLy8gd2Vidmlld3MgaW5zaWRlIG9mIHRoZSBuYXRpdmUgYXBwc1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfbmF0aXZlO1xuICB9LFxuXG4gIGFuZHJvaWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfYW5kcm9pZDtcbiAgfSxcblxuICBpcGFkOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2lwYWQ7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlckFnZW50X0RFUFJFQ0FURUQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaXNFdmVudFN1cHBvcnRlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgdXNlSGFzRmVhdHVyZTtcbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiAgdXNlSGFzRmVhdHVyZSA9XG4gICAgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24gJiZcbiAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlICYmXG4gICAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAgIC8vIEBzZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1oYXNmZWF0dXJlXG4gICAgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnJywgJycpICE9PSB0cnVlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBldmVudCBpcyBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGVudmlyb25tZW50LlxuICpcbiAqIE5PVEU6IFRoaXMgd2lsbCBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbi1nZW5lcmljIGV2ZW50cyBzdWNoIGFzIGBjaGFuZ2VgLFxuICogYHJlc2V0YCwgYGxvYWRgLCBgZXJyb3JgLCBhbmQgYHNlbGVjdGAuXG4gKlxuICogQm9ycm93cyBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lU3VmZml4IEV2ZW50IG5hbWUsIGUuZy4gXCJjbGlja1wiLlxuICogQHBhcmFtIHs/Ym9vbGVhbn0gY2FwdHVyZSBDaGVjayBpZiB0aGUgY2FwdHVyZSBwaGFzZSBpcyBzdXBwb3J0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBldmVudCBpcyBzdXBwb3J0ZWQuXG4gKiBAaW50ZXJuYWxcbiAqIEBsaWNlbnNlIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuICovXG5mdW5jdGlvbiBpc0V2ZW50U3VwcG9ydGVkKGV2ZW50TmFtZVN1ZmZpeCwgY2FwdHVyZSkge1xuICBpZiAoIUV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSB8fFxuICAgICAgY2FwdHVyZSAmJiAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiBkb2N1bWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZVN1ZmZpeDtcbiAgdmFyIGlzU3VwcG9ydGVkID0gZXZlbnROYW1lIGluIGRvY3VtZW50O1xuXG4gIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGV2ZW50TmFtZSwgJ3JldHVybjsnKTtcbiAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbGVtZW50W2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoIWlzU3VwcG9ydGVkICYmIHVzZUhhc0ZlYXR1cmUgJiYgZXZlbnROYW1lU3VmZml4ID09PSAnd2hlZWwnKSB7XG4gICAgLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gdGVzdCBzdXBwb3J0IGZvciB0aGUgYHdoZWVsYCBldmVudCBpbiBJRTkrLlxuICAgIGlzU3VwcG9ydGVkID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnRXZlbnRzLndoZWVsJywgJzMuMCcpO1xuICB9XG5cbiAgcmV0dXJuIGlzU3VwcG9ydGVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXZlbnRTdXBwb3J0ZWQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBub3JtYWxpemVXaGVlbFxuICogQHR5cGVjaGVja3NcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBVc2VyQWdlbnRfREVQUkVDQVRFRCA9IHJlcXVpcmUoJy4vVXNlckFnZW50X0RFUFJFQ0FURUQnKTtcblxudmFyIGlzRXZlbnRTdXBwb3J0ZWQgPSByZXF1aXJlKCcuL2lzRXZlbnRTdXBwb3J0ZWQnKTtcblxuXG4vLyBSZWFzb25hYmxlIGRlZmF1bHRzXG52YXIgUElYRUxfU1RFUCAgPSAxMDtcbnZhciBMSU5FX0hFSUdIVCA9IDQwO1xudmFyIFBBR0VfSEVJR0hUID0gODAwO1xuXG4vKipcbiAqIE1vdXNlIHdoZWVsIChhbmQgMi1maW5nZXIgdHJhY2twYWQpIHN1cHBvcnQgb24gdGhlIHdlYiBzdWNrcy4gIEl0IGlzXG4gKiBjb21wbGljYXRlZCwgdGh1cyB0aGlzIGRvYyBpcyBsb25nIGFuZCAoaG9wZWZ1bGx5KSBkZXRhaWxlZCBlbm91Z2ggdG8gYW5zd2VyXG4gKiB5b3VyIHF1ZXN0aW9ucy5cbiAqXG4gKiBJZiB5b3UgbmVlZCB0byByZWFjdCB0byB0aGUgbW91c2Ugd2hlZWwgaW4gYSBwcmVkaWN0YWJsZSB3YXksIHRoaXMgY29kZSBpc1xuICogbGlrZSB5b3VyIGJlc3Rlc3QgZnJpZW5kLiAqIGh1Z3MgKlxuICpcbiAqIEFzIG9mIHRvZGF5LCB0aGVyZSBhcmUgNCBET00gZXZlbnQgdHlwZXMgeW91IGNhbiBsaXN0ZW4gdG86XG4gKlxuICogICAnd2hlZWwnICAgICAgICAgICAgICAgIC0tIENocm9tZSgzMSspLCBGRigxNyspLCBJRSg5KylcbiAqICAgJ21vdXNld2hlZWwnICAgICAgICAgICAtLSBDaHJvbWUsIElFKDYrKSwgT3BlcmEsIFNhZmFyaVxuICogICAnTW96TW91c2VQaXhlbFNjcm9sbCcgIC0tIEZGKDMuNSBvbmx5ISkgKDIwMTAtMjAxMykgLS0gZG9uJ3QgYm90aGVyIVxuICogICAnRE9NTW91c2VTY3JvbGwnICAgICAgIC0tIEZGKDAuOS43Kykgc2luY2UgMjAwM1xuICpcbiAqIFNvIHdoYXQgdG8gZG8/ICBUaGUgaXMgdGhlIGJlc3Q6XG4gKlxuICogICBub3JtYWxpemVXaGVlbC5nZXRFdmVudFR5cGUoKTtcbiAqXG4gKiBJbiB5b3VyIGV2ZW50IGNhbGxiYWNrLCB1c2UgdGhpcyBjb2RlIHRvIGdldCBzYW5lIGludGVycHJldGF0aW9uIG9mIHRoZVxuICogZGVsdGFzLiAgVGhpcyBjb2RlIHdpbGwgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXM6XG4gKlxuICogICBzcGluWCAgIC0tIG5vcm1hbGl6ZWQgc3BpbiBzcGVlZCAodXNlIGZvciB6b29tKSAtIHggcGxhbmVcbiAqICAgc3BpblkgICAtLSBcIiAtIHkgcGxhbmVcbiAqICAgcGl4ZWxYICAtLSBub3JtYWxpemVkIGRpc3RhbmNlICh0byBwaXhlbHMpIC0geCBwbGFuZVxuICogICBwaXhlbFkgIC0tIFwiIC0geSBwbGFuZVxuICpcbiAqIFdoZWVsIHZhbHVlcyBhcmUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgYXNzdW1pbmcgeW91IGFyZSB1c2luZyB0aGUgd2hlZWwgdG9cbiAqIHNjcm9sbCBhIHdlYiBwYWdlIGJ5IGEgbnVtYmVyIG9mIGxpbmVzIG9yIHBpeGVscyAob3IgcGFnZXMpLiAgVmFsdWVzIGNhbiB2YXJ5XG4gKiBzaWduaWZpY2FudGx5IG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMgYW5kIGJyb3dzZXJzLCBmb3JnZXR0aW5nIHRoYXQgeW91IGNhblxuICogc2Nyb2xsIGF0IGRpZmZlcmVudCBzcGVlZHMuICBTb21lIGRldmljZXMgKGxpa2UgdHJhY2twYWRzKSBlbWl0IG1vcmUgZXZlbnRzXG4gKiBhdCBzbWFsbGVyIGluY3JlbWVudHMgd2l0aCBmaW5lIGdyYW51bGFyaXR5LCBhbmQgc29tZSBlbWl0IG1hc3NpdmUganVtcHMgd2l0aFxuICogbGluZWFyIHNwZWVkIG9yIGFjY2VsZXJhdGlvbi5cbiAqXG4gKiBUaGlzIGNvZGUgZG9lcyBpdHMgYmVzdCB0byBub3JtYWxpemUgdGhlIGRlbHRhcyBmb3IgeW91OlxuICpcbiAqICAgLSBzcGluIGlzIHRyeWluZyB0byBub3JtYWxpemUgaG93IGZhciB0aGUgd2hlZWwgd2FzIHNwdW4gKG9yIHRyYWNrcGFkXG4gKiAgICAgZHJhZ2dlZCkuICBUaGlzIGlzIHN1cGVyIHVzZWZ1bCBmb3Igem9vbSBzdXBwb3J0IHdoZXJlIHlvdSB3YW50IHRvXG4gKiAgICAgdGhyb3cgYXdheSB0aGUgY2h1bmt5IHNjcm9sbCBzdGVwcyBvbiB0aGUgUEMgYW5kIG1ha2UgdGhvc2UgZXF1YWwgdG9cbiAqICAgICB0aGUgc2xvdyBhbmQgc21vb3RoIHRpbnkgc3RlcHMgb24gdGhlIE1hYy4gS2V5IGRhdGE6IFRoaXMgY29kZSB0cmllcyB0b1xuICogICAgIHJlc29sdmUgYSBzaW5nbGUgc2xvdyBzdGVwIG9uIGEgd2hlZWwgdG8gMS5cbiAqXG4gKiAgIC0gcGl4ZWwgaXMgbm9ybWFsaXppbmcgdGhlIGRlc2lyZWQgc2Nyb2xsIGRlbHRhIGluIHBpeGVsIHVuaXRzLiAgWW91J2xsXG4gKiAgICAgZ2V0IHRoZSBjcmF6eSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGJyb3dzZXJzLCBidXQgYXQgbGVhc3QgaXQnbGwgYmUgaW5cbiAqICAgICBwaXhlbHMhXG4gKlxuICogICAtIHBvc2l0aXZlIHZhbHVlIGluZGljYXRlcyBzY3JvbGxpbmcgRE9XTi9SSUdIVCwgbmVnYXRpdmUgVVAvTEVGVC4gIFRoaXNcbiAqICAgICBzaG91bGQgdHJhbnNsYXRlIHRvIHBvc2l0aXZlIHZhbHVlIHpvb21pbmcgSU4sIG5lZ2F0aXZlIHpvb21pbmcgT1VULlxuICogICAgIFRoaXMgbWF0Y2hlcyB0aGUgbmV3ZXIgJ3doZWVsJyBldmVudC5cbiAqXG4gKiBXaHkgYXJlIHRoZXJlIHNwaW5YLCBzcGluWSAob3IgcGl4ZWxzKT9cbiAqXG4gKiAgIC0gc3BpblggaXMgYSAyLWZpbmdlciBzaWRlIGRyYWcgb24gdGhlIHRyYWNrcGFkLCBhbmQgYSBzaGlmdCArIHdoZWVsIHR1cm5cbiAqICAgICB3aXRoIGEgbW91c2UuICBJdCByZXN1bHRzIGluIHNpZGUtc2Nyb2xsaW5nIGluIHRoZSBicm93c2VyIGJ5IGRlZmF1bHQuXG4gKlxuICogICAtIHNwaW5ZIGlzIHdoYXQgeW91IGV4cGVjdCAtLSBpdCdzIHRoZSBjbGFzc2ljIGF4aXMgb2YgYSBtb3VzZSB3aGVlbC5cbiAqXG4gKiAgIC0gSSBkcm9wcGVkIHNwaW5aL3BpeGVsWi4gIEl0IGlzIHN1cHBvcnRlZCBieSB0aGUgRE9NIDMgJ3doZWVsJyBldmVudCBhbmRcbiAqICAgICBwcm9iYWJseSBpcyBieSBicm93c2VycyBpbiBjb25qdW5jdGlvbiB3aXRoIGZhbmN5IDNEIGNvbnRyb2xsZXJzIC4uIGJ1dFxuICogICAgIHlvdSBrbm93LlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGluZm86XG4gKlxuICogRXhhbXBsZXMgb2YgJ3doZWVsJyBldmVudCBpZiB5b3Ugc2Nyb2xsIHNsb3dseSAoZG93bikgYnkgb25lIHN0ZXAgd2l0aCBhblxuICogYXZlcmFnZSBtb3VzZTpcbiAqXG4gKiAgIE9TIFggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gICAgNCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICogICBPUyBYICsgU2FmYXJpICAobW91c2UpICAgICAtICBOL0EgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgIC0xMilcbiAqICAgT1MgWCArIEZpcmVmb3ggKG1vdXNlKSAgICAgLSAgICAwLjEgbGluZSAgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gKiAgIFdpbjggKyBDaHJvbWUgIChtb3VzZSkgICAgIC0gIDEwMCAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICogICBXaW44ICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDMgICBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgLTEyMClcbiAqXG4gKiBPbiB0aGUgdHJhY2twYWQ6XG4gKlxuICogICBPUyBYICsgQ2hyb21lICAodHJhY2twYWQpICAtICAgIDIgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgICAtNilcbiAqICAgT1MgWCArIEZpcmVmb3ggKHRyYWNrcGFkKSAgLSAgICAxICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhICBOL0EpXG4gKlxuICogT24gb3RoZXIvb2xkZXIgYnJvd3NlcnMuLiBpdCdzIG1vcmUgY29tcGxpY2F0ZWQgYXMgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGFuZFxuICogYWxzbyBtaXNzaW5nIGRlbHRhIHZhbHVlcy5cbiAqXG4gKiBUaGUgJ3doZWVsJyBldmVudCBpcyBtb3JlIHN0YW5kYXJkOlxuICpcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLXdoZWVsZXZlbnRzXG4gKlxuICogVGhlIGJhc2ljcyBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdW5pdCwgZGVsdGFNb2RlIChwaXhlbHMsIGxpbmVzLCBwYWdlcyksIGFuZFxuICogZGVsdGFYLCBkZWx0YVkgYW5kIGRlbHRhWi4gIFNvbWUgYnJvd3NlcnMgcHJvdmlkZSBvdGhlciB2YWx1ZXMgdG8gbWFpbnRhaW5cbiAqIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBldmVudHMuICBUaG9zZSBvdGhlciB2YWx1ZXMgaGVscCB1c1xuICogYmV0dGVyIG5vcm1hbGl6ZSBzcGluIHNwZWVkLiAgRXhhbXBsZSBvZiB3aGF0IHRoZSBicm93c2VycyBwcm92aWRlOlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICB8IGV2ZW50LndoZWVsRGVsdGEgfCBldmVudC5kZXRhaWxcbiAqICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tXG4gKiAgICAgICAgICBTYWZhcmkgdjUvT1MgWCAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICAgU2FmYXJpIHY1L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgQ2hyb21lIHYxNy9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgIENocm9tZSB2MTcvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICAgICAgICAgSUU5L1dpbjcgIHwgICAgICAgLTEyMCAgICAgICB8ICAgdW5kZWZpbmVkXG4gKiAgICAgICAgIEZpcmVmb3ggdjQvT1MgWCAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgMVxuICogICAgICAgICBGaXJlZm94IHY0L1dpbjcgIHwgICAgIHVuZGVmaW5lZCAgICB8ICAgICAgIDNcbiAqXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdoZWVsKC8qb2JqZWN0Ki8gZXZlbnQpIC8qb2JqZWN0Ki8ge1xuICB2YXIgc1ggPSAwLCBzWSA9IDAsICAgICAgIC8vIHNwaW5YLCBzcGluWVxuICAgICAgcFggPSAwLCBwWSA9IDA7ICAgICAgIC8vIHBpeGVsWCwgcGl4ZWxZXG5cbiAgLy8gTGVnYWN5XG4gIGlmICgnZGV0YWlsJyAgICAgIGluIGV2ZW50KSB7IHNZID0gZXZlbnQuZGV0YWlsOyB9XG4gIGlmICgnd2hlZWxEZWx0YScgIGluIGV2ZW50KSB7IHNZID0gLWV2ZW50LndoZWVsRGVsdGEgLyAxMjA7IH1cbiAgaWYgKCd3aGVlbERlbHRhWScgaW4gZXZlbnQpIHsgc1kgPSAtZXZlbnQud2hlZWxEZWx0YVkgLyAxMjA7IH1cbiAgaWYgKCd3aGVlbERlbHRhWCcgaW4gZXZlbnQpIHsgc1ggPSAtZXZlbnQud2hlZWxEZWx0YVggLyAxMjA7IH1cblxuICAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG4gIGlmICggJ2F4aXMnIGluIGV2ZW50ICYmIGV2ZW50LmF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUyApIHtcbiAgICBzWCA9IHNZO1xuICAgIHNZID0gMDtcbiAgfVxuXG4gIHBYID0gc1ggKiBQSVhFTF9TVEVQO1xuICBwWSA9IHNZICogUElYRUxfU1RFUDtcblxuICBpZiAoJ2RlbHRhWScgaW4gZXZlbnQpIHsgcFkgPSBldmVudC5kZWx0YVk7IH1cbiAgaWYgKCdkZWx0YVgnIGluIGV2ZW50KSB7IHBYID0gZXZlbnQuZGVsdGFYOyB9XG5cbiAgaWYgKChwWCB8fCBwWSkgJiYgZXZlbnQuZGVsdGFNb2RlKSB7XG4gICAgaWYgKGV2ZW50LmRlbHRhTW9kZSA9PSAxKSB7ICAgICAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgIHBYICo9IExJTkVfSEVJR0hUO1xuICAgICAgcFkgKj0gTElORV9IRUlHSFQ7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbHRhIGluIFBBR0UgdW5pdHNcbiAgICAgIHBYICo9IFBBR0VfSEVJR0hUO1xuICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcbiAgaWYgKHBYICYmICFzWCkgeyBzWCA9IChwWCA8IDEpID8gLTEgOiAxOyB9XG4gIGlmIChwWSAmJiAhc1kpIHsgc1kgPSAocFkgPCAxKSA/IC0xIDogMTsgfVxuXG4gIHJldHVybiB7IHNwaW5YICA6IHNYLFxuICAgICAgICAgICBzcGluWSAgOiBzWSxcbiAgICAgICAgICAgcGl4ZWxYIDogcFgsXG4gICAgICAgICAgIHBpeGVsWSA6IHBZIH07XG59XG5cblxuLyoqXG4gKiBUaGUgYmVzdCBjb21iaW5hdGlvbiBpZiB5b3UgcHJlZmVyIHNwaW5YICsgc3Bpblkgbm9ybWFsaXphdGlvbi4gIEl0IGZhdm9yc1xuICogdGhlIG9sZGVyIERPTU1vdXNlU2Nyb2xsIGZvciBGaXJlZm94LCBhcyBGRiBkb2VzIG5vdCBpbmNsdWRlIHdoZWVsRGVsdGEgd2l0aFxuICogJ3doZWVsJyBldmVudCwgbWFraW5nIHNwaW4gc3BlZWQgZGV0ZXJtaW5hdGlvbiBpbXBvc3NpYmxlLlxuICovXG5ub3JtYWxpemVXaGVlbC5nZXRFdmVudFR5cGUgPSBmdW5jdGlvbigpIC8qc3RyaW5nKi8ge1xuICByZXR1cm4gKFVzZXJBZ2VudF9ERVBSRUNBVEVELmZpcmVmb3goKSlcbiAgICAgICAgICAgPyAnRE9NTW91c2VTY3JvbGwnXG4gICAgICAgICAgIDogKGlzRXZlbnRTdXBwb3J0ZWQoJ3doZWVsJykpXG4gICAgICAgICAgICAgICA/ICd3aGVlbCdcbiAgICAgICAgICAgICAgIDogJ21vdXNld2hlZWwnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVXaGVlbDtcbiIsIi8vIGNoZWNrIGRvY3VtZW50IGZpcnN0IHNvIGl0IGRvZXNuJ3QgZXJyb3IgaW4gbm9kZS5qc1xudmFyIHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlXG4gIDoge31cblxudmFyIHByZWZpeGVzID0gWydPJywgJ21zJywgJ01veicsICdXZWJraXQnXVxudmFyIHVwcGVyID0gLyhbQS1aXSkvZ1xudmFyIG1lbW8gPSB7fVxuXG4vKipcbiAqIHByZWZpeCBga2V5YFxuICpcbiAqICAgcHJlZml4KCd0cmFuc2Zvcm0nKSAvLyA9PiBXZWJraXRUcmFuc2Zvcm1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBwcmVmaXgoa2V5KXtcbiAgLy8gQ2FtZWwgY2FzZVxuICBrZXkgPSBrZXkucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24oXywgY2hhcil7XG4gICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKVxuICB9KVxuXG4gIC8vIFdpdGhvdXQgcHJlZml4XG4gIGlmIChzdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHJldHVybiBrZXlcblxuICAvLyBXaXRoIHByZWZpeFxuICB2YXIgS2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpXG4gIHZhciBpID0gcHJlZml4ZXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgbmFtZSA9IHByZWZpeGVzW2ldICsgS2V5XG4gICAgaWYgKHN0eWxlW25hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybiBuYW1lXG4gIH1cblxuICByZXR1cm4ga2V5XG59XG5cbi8qKlxuICogTWVtb2l6ZWQgdmVyc2lvbiBvZiBgcHJlZml4YFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHByZWZpeE1lbW96aWVkKGtleSl7XG4gIHJldHVybiBrZXkgaW4gbWVtb1xuICAgID8gbWVtb1trZXldXG4gICAgOiBtZW1vW2tleV0gPSBwcmVmaXgoa2V5KVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRhc2hlZCBwcmVmaXhcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBwcmVmaXhEYXNoZWQoa2V5KXtcbiAga2V5ID0gcHJlZml4KGtleSlcbiAgaWYgKHVwcGVyLnRlc3Qoa2V5KSkge1xuICAgIGtleSA9ICctJyArIGtleS5yZXBsYWNlKHVwcGVyLCAnLSQxJylcbiAgICB1cHBlci5sYXN0SW5kZXggPSAwXG4gIH1cbiAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJlZml4TWVtb3ppZWRcbm1vZHVsZS5leHBvcnRzLmRhc2ggPSBwcmVmaXhEYXNoZWRcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5ZTFlNjY4NzhjMzJmNDUwMWRlXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsImVhY2giLCJMYWJlbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsInRpbWVsaW5lIiwiZGVsYXkiLCJzZXQiLCJhdXRvQWxwaGEiLCJlbGVtZW50c0xpbmVzIiwibGluZSIsImluZGV4IiwiZnJvbVRvIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJQYXJhZ3JhcGgiLCJUaXRsZSIsIkNvbXBvbmVudCIsImNyZWF0ZU9ic2VydmVyIiwib2Jlc2V2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJDb2xvcnMiLCJjaGFuZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRvIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJDb2xvcnNNYW5hZ2VyIiwiTm9ybWFsaXplV2hlZWwiLCJQcmVmaXgiLCJtYXAiLCJQYWdlIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25UaXRsZXMiLCJhbmltYXRpb25QYXJhZ3JhcGhzIiwiYW5pbWF0aW9uTGFiZWxzIiwidHJhbnNmb3JtUHJlZml4IiwiY3JlYXRlIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImFuaW1hdGlvbnMiLCJwdXNoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0QXR0cmlidXRlIiwiYW5pbWF0aW9uSW4iLCJjYWxsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwib25Nb3VzZXdoZWVsIiwiZXZlbnQiLCJwaXhlbFkiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJ1dGlscyIsImNsYW1wIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFib3V0IiwibmF2aWdhdGlvbiIsInRpdGxlIiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwibGluayIsIl8iLCJnZXROYXRpdmUiLCJyZXF1aXJlIiwicm9vdCIsIkRhdGFWaWV3IiwibW9kdWxlIiwiZXhwb3J0cyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiY2xlYXIiLCJwcm90b3R5cGUiLCJnZXQiLCJoYXMiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsIk1hcCIsIm1hcENhY2hlQ2xlYXIiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwidmFsdWVzIiwiX19kYXRhX18iLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsImRhdGEiLCJzaXplIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJhcnJheUZpbHRlciIsImFycmF5IiwicHJlZGljYXRlIiwicmVzSW5kZXgiLCJyZXN1bHQiLCJ2YWx1ZSIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJBcnJheSIsImFycmF5UHVzaCIsIm9mZnNldCIsImFycmF5U29tZSIsImVxIiwiYXNzb2NJbmRleE9mIiwiY2FzdFBhdGgiLCJ0b0tleSIsImJhc2VHZXQiLCJvYmplY3QiLCJwYXRoIiwidW5kZWZpbmVkIiwiaXNBcnJheSIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsIk9iamVjdCIsImJhc2VJc0VxdWFsRGVlcCIsImlzT2JqZWN0TGlrZSIsImJhc2VJc0VxdWFsIiwib3RoZXIiLCJiaXRtYXNrIiwiY3VzdG9taXplciIsInN0YWNrIiwiZXF1YWxBcnJheXMiLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiZ2V0VGFnIiwiaXNCdWZmZXIiLCJpc1R5cGVkQXJyYXkiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsImFyZ3NUYWciLCJhcnJheVRhZyIsIm9iamVjdFRhZyIsIm9iamVjdFByb3RvIiwiaGFzT3duUHJvcGVydHkiLCJlcXVhbEZ1bmMiLCJvYmpJc0FyciIsIm90aElzQXJyIiwib2JqVGFnIiwib3RoVGFnIiwib2JqSXNPYmoiLCJvdGhJc09iaiIsImlzU2FtZVRhZyIsIm9iaklzV3JhcHBlZCIsIm90aElzV3JhcHBlZCIsIm9ialVud3JhcHBlZCIsIm90aFVud3JhcHBlZCIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJiYXNlSXNNYXRjaCIsInNvdXJjZSIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwic3JjVmFsdWUiLCJpc0Z1bmN0aW9uIiwiaXNNYXNrZWQiLCJpc09iamVjdCIsInRvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwiZnVuY1Byb3RvIiwiRnVuY3Rpb24iLCJmdW5jVG9TdHJpbmciLCJ0b1N0cmluZyIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJyZXBsYWNlIiwiYmFzZUlzTmF0aXZlIiwicGF0dGVybiIsInRlc3QiLCJiYXNlTWF0Y2hlcyIsImJhc2VNYXRjaGVzUHJvcGVydHkiLCJpZGVudGl0eSIsInByb3BlcnR5IiwiYmFzZUl0ZXJhdGVlIiwiYmFzZUVhY2giLCJpc0FycmF5TGlrZSIsImJhc2VNYXAiLCJjb2xsZWN0aW9uIiwiZ2V0TWF0Y2hEYXRhIiwibWF0Y2hlc1N0cmljdENvbXBhcmFibGUiLCJoYXNJbiIsImlzS2V5IiwiaXNTdHJpY3RDb21wYXJhYmxlIiwiYmFzZVByb3BlcnR5IiwiYmFzZVByb3BlcnR5RGVlcCIsIlN5bWJvbCIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJzeW1ib2xQcm90byIsInN5bWJvbFRvU3RyaW5nIiwiYmFzZVRvU3RyaW5nIiwiY2FjaGVIYXMiLCJjYWNoZSIsInN0cmluZ1RvUGF0aCIsImNvcmVKc0RhdGEiLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJhcnJTdGFja2VkIiwib3RoU3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsIm1hcFRvQXJyYXkiLCJzZXRUb0FycmF5IiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsInN5bWJvbFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJzeW1ib2xWYWx1ZU9mIiwidmFsdWVPZiIsInRhZyIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibmFtZSIsIm1lc3NhZ2UiLCJjb252ZXJ0Iiwic3RhY2tlZCIsImdldEFsbEtleXMiLCJvYmpQcm9wcyIsIm9iakxlbmd0aCIsIm90aFByb3BzIiwib2JqU3RhY2tlZCIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwia2V5cyIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJnZXRWYWx1ZSIsInN0dWJBcnJheSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsImJhc2VHZXRUYWciLCJwcm9taXNlVGFnIiwid2Vha01hcFRhZyIsImRhdGFWaWV3Q3RvclN0cmluZyIsIm1hcEN0b3JTdHJpbmciLCJwcm9taXNlQ3RvclN0cmluZyIsInNldEN0b3JTdHJpbmciLCJ3ZWFrTWFwQ3RvclN0cmluZyIsIkFycmF5QnVmZmVyIiwiQ3RvciIsImN0b3JTdHJpbmciLCJpc0FyZ3VtZW50cyIsImlzSW5kZXgiLCJpc0xlbmd0aCIsImhhc1BhdGgiLCJoYXNGdW5jIiwibmF0aXZlQ3JlYXRlIiwiSEFTSF9VTkRFRklORUQiLCJyZUlzRGVlcFByb3AiLCJyZUlzUGxhaW5Qcm9wIiwidHlwZSIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwiSUVfUFJPVE8iLCJmdW5jIiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJwYWlycyIsInJlUHJvcE5hbWUiLCJyZUVzY2FwZUNoYXIiLCJzdHJpbmciLCJjaGFyQ29kZUF0IiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsInN1YlN0cmluZyIsImUiLCJkZWZhdWx0VmFsdWUiLCJGVU5DX0VSUk9SX1RFWFQiLCJyZXNvbHZlciIsIlR5cGVFcnJvciIsIm1lbW9pemVkIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiQ2FjaGUiLCJjYW5Vc2VET00iLCJjcmVhdGVFbGVtZW50IiwiRXhlY3V0aW9uRW52aXJvbm1lbnQiLCJjYW5Vc2VXb3JrZXJzIiwiV29ya2VyIiwiY2FuVXNlRXZlbnRMaXN0ZW5lcnMiLCJhdHRhY2hFdmVudCIsImNhblVzZVZpZXdwb3J0Iiwic2NyZWVuIiwiaXNJbldvcmtlciIsIl9wb3B1bGF0ZWQiLCJfaWUiLCJfZmlyZWZveCIsIl9vcGVyYSIsIl93ZWJraXQiLCJfY2hyb21lIiwiX2llX3JlYWxfdmVyc2lvbiIsIl9vc3giLCJfd2luZG93cyIsIl9saW51eCIsIl9hbmRyb2lkIiwiX3dpbjY0IiwiX2lwaG9uZSIsIl9pcGFkIiwiX25hdGl2ZSIsIl9tb2JpbGUiLCJfcG9wdWxhdGUiLCJ1YXMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhZ2VudCIsIm9zIiwicGFyc2VGbG9hdCIsIk5hTiIsImRvY3VtZW50TW9kZSIsInRyaWRlbnQiLCJ2ZXIiLCJVc2VyQWdlbnRfREVQUkVDQVRFRCIsImllIiwiaWVDb21wYXRpYmlsaXR5TW9kZSIsImllNjQiLCJmaXJlZm94Iiwib3BlcmEiLCJ3ZWJraXQiLCJzYWZhcmkiLCJjaHJvbWUiLCJ3aW5kb3dzIiwib3N4IiwibGludXgiLCJpcGhvbmUiLCJtb2JpbGUiLCJuYXRpdmVBcHAiLCJhbmRyb2lkIiwiaXBhZCIsInVzZUhhc0ZlYXR1cmUiLCJpbXBsZW1lbnRhdGlvbiIsImhhc0ZlYXR1cmUiLCJpc0V2ZW50U3VwcG9ydGVkIiwiZXZlbnROYW1lU3VmZml4IiwiY2FwdHVyZSIsImV2ZW50TmFtZSIsImlzU3VwcG9ydGVkIiwic2V0QXR0cmlidXRlIiwiUElYRUxfU1RFUCIsIkxJTkVfSEVJR0hUIiwiUEFHRV9IRUlHSFQiLCJub3JtYWxpemVXaGVlbCIsInNYIiwic1kiLCJwWCIsInBZIiwiZGV0YWlsIiwid2hlZWxEZWx0YSIsIndoZWVsRGVsdGFZIiwid2hlZWxEZWx0YVgiLCJheGlzIiwiSE9SSVpPTlRBTF9BWElTIiwiZGVsdGFZIiwiZGVsdGFYIiwiZGVsdGFNb2RlIiwic3BpblgiLCJzcGluWSIsInBpeGVsWCIsImdldEV2ZW50VHlwZSIsInByZWZpeGVzIiwidXBwZXIiLCJtZW1vIiwicHJlZml4IiwiY2hhciIsInRvVXBwZXJDYXNlIiwiS2V5IiwiY2hhckF0Iiwic2xpY2UiLCJpIiwicHJlZml4TWVtb3ppZWQiLCJwcmVmaXhEYXNoZWQiLCJ0b0xvd2VyQ2FzZSIsImRhc2giXSwic291cmNlUm9vdCI6IiJ9