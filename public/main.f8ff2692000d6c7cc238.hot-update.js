"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/Title */ "./app/animations/Title.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Colors */ "./app/classes/Colors.js");
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
      animationTitles: '[data-animation="title"]'
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
    console.log(this.elements.animationTitles);
    this.animationTitles = lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(this.elements.animationTitles, element => {
      return new _animations_Title__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    console.log(this.animationTitles);
  }
  show() {
    return new Promise(resolve => {
      _Colors__WEBPACK_IMPORTED_MODULE_5__.ColorsManager.change({
        backgroundColor: this.element.getAttribute('data-background'),
        color: this.element.getAttribute('data-color')
      });
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_6__["default"].timeline();
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
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_6__["default"].timeline();
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
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.animationTitles, animation => animation.onResize());
  }
  update() {
    this.scroll.target = gsap__WEBPACK_IMPORTED_MODULE_6__["default"].utils.clamp(0, this.scroll.limit, this.scroll.target);
    // 目标不能小于0大于limit

    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_6__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38cedd85a6e10bc69321")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOGZmMjY5MjAwMGQ2YzdjYzIzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3VCO0FBQ3FCO0FBQ2pCO0FBRUc7QUFDRjtBQUVXO0FBRUM7QUFFekIsTUFBTU8sSUFBSSxDQUFDO0VBQ3hCO0VBQ0FDLFdBQVdBLENBQUM7SUFBQztJQUNYQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkM7RUFDRixDQUFDLEVBQUU7SUFDRCxJQUFJLENBQUNDLFFBQVEsR0FBR0gsT0FBTztJQUN2QixJQUFJLENBQUNJLGdCQUFnQixHQUFHO01BQ3RCLEdBQUdILFFBQVE7TUFDWEksZUFBZSxFQUFFO0lBQ25CLENBQUM7SUFDRDtJQUNBOztJQUVBLElBQUksQ0FBQ0gsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDSSxlQUFlLEdBQUdiLDZDQUFNLENBQUMsV0FBVyxDQUFDO0VBRTVDO0VBRUFjLE1BQU1BLENBQUEsRUFBRztJQUFDO0lBQ1IsSUFBSSxDQUFDUCxPQUFPLEdBQUdRLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ04sUUFBUSxDQUFDO0lBQ3BEO0lBQ0EsSUFBSSxDQUFDRixRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLElBQUksQ0FBQ1MsTUFBTSxHQUFHO01BQ1pDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLE1BQU0sRUFBRSxDQUFDO01BQ1RDLElBQUksRUFBRSxDQUFDO01BQ1BDLEtBQUssRUFBRTtJQUNULENBQUM7SUFFRHBCLGtEQUFJLENBQUMsSUFBSSxDQUFDVSxnQkFBZ0IsRUFBRSxDQUFDVyxLQUFLLEVBQUVDLEdBQUcsS0FBSztNQUMxQyxJQUNFRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBVyxJQUNuQ0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQVEsRUFDaEM7UUFDQSxJQUFJLENBQUNsQixRQUFRLENBQUNlLEdBQUcsQ0FBQyxHQUFHRCxLQUFLO1FBQzFCO01BQ0YsQ0FBQyxNQUNJO1FBQ0gsSUFBSSxDQUFDZCxRQUFRLENBQUNlLEdBQUcsQ0FBQyxHQUFHUixRQUFRLENBQUNZLGdCQUFnQixDQUFDTCxLQUFLLENBQUM7UUFDckQ7UUFDQSxJQUFJLElBQUksQ0FBQ2QsUUFBUSxDQUFDZSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNuQyxJQUFJLENBQUNwQixRQUFRLENBQUNlLEdBQUcsQ0FBQyxHQUFHLElBQUk7UUFDM0IsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDZixRQUFRLENBQUNlLEdBQUcsQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ3hDLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDTSxLQUFLLENBQUM7UUFDcEQ7TUFDRjtNQUNBO01BQ0E7SUFDRixDQUFDLENBQUM7SUFDRjs7SUFFQSxJQUFJLENBQUNPLGdCQUFnQixDQUFDLENBQUM7RUFDekI7O0VBRUE7O0VBRUFBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUN2QixRQUFRLENBQUNJLGVBQWUsQ0FBQztJQUMxQyxJQUFJLENBQUNBLGVBQWUsR0FBR1YsaURBQUcsQ0FBQyxJQUFJLENBQUNNLFFBQVEsQ0FBQ0ksZUFBZSxFQUFHTCxPQUFPLElBQUs7TUFDckUsT0FBTyxJQUFJSix5REFBSyxDQUFDO1FBQ2ZJO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0Z1QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixlQUFlLENBQUM7RUFDbkM7RUFFQW9CLElBQUlBLENBQUEsRUFBRztJQUNMLE9BQU8sSUFBSUMsT0FBTyxDQUFFQyxPQUFPLElBQUs7TUFDOUI5QixrREFBYSxDQUFDK0IsTUFBTSxDQUFDO1FBQ25CQyxlQUFlLEVBQUUsSUFBSSxDQUFDN0IsT0FBTyxDQUFDOEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQzdEQyxLQUFLLEVBQUUsSUFBSSxDQUFDL0IsT0FBTyxDQUFDOEIsWUFBWSxDQUFDLFlBQVk7TUFDL0MsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDRSxXQUFXLEdBQUd6Qyw0Q0FBSSxDQUFDMEMsUUFBUSxDQUFDLENBQUM7TUFFbEMsSUFBSSxDQUFDRCxXQUFXLENBQUNFLE1BQU0sQ0FDckIsSUFBSSxDQUFDbEMsT0FBTyxFQUNaO1FBQ0VtQyxTQUFTLEVBQUU7TUFDYixDQUFDLEVBQ0Q7UUFDRUEsU0FBUyxFQUFFO01BQ2IsQ0FDRixDQUFDO01BRUQsSUFBSSxDQUFDSCxXQUFXLENBQUNJLElBQUksQ0FBQyxNQUFNO1FBQzFCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztRQUV4QlYsT0FBTyxDQUFDLENBQUM7TUFDWCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFDRjtFQUVGOztFQUVBVyxJQUFJQSxDQUFBLEVBQUc7SUFDTCxPQUFPLElBQUlaLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJO01BQzVCLElBQUksQ0FBQ1ksb0JBQW9CLENBQUMsQ0FBQztNQUUzQixJQUFJLENBQUNDLFlBQVksR0FBR2pELDRDQUFJLENBQUMwQyxRQUFRLENBQUMsQ0FBQztNQUVuQyxJQUFJLENBQUNPLFlBQVksQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ3pDLE9BQU8sRUFBRTtRQUNqQ21DLFNBQVMsRUFBRSxDQUFDO1FBQ1pPLFVBQVUsRUFBRWY7TUFDZCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUdBZ0IsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2xCLE1BQU07TUFBQ0M7SUFBTSxDQUFDLEdBQUdyRCxzREFBYyxDQUFDb0QsS0FBSyxDQUFDO0lBQ3RDLElBQUksQ0FBQ2xDLE1BQU0sQ0FBQ0UsTUFBTSxJQUFJaUMsTUFBTSxDQUFDLENBQUM7O0lBRTlCO0VBQ0Y7O0VBRUFDLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksSUFBSSxDQUFDN0MsUUFBUSxDQUFDOEMsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ3JDLE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQ2IsUUFBUSxDQUFDOEMsT0FBTyxDQUFDQyxZQUFZLEdBQUcvQixNQUFNLENBQUNnQyxXQUFXO0lBQzdFO0lBQ0F2RCxrREFBSSxDQUFDLElBQUksQ0FBQ1csZUFBZSxFQUFHNkMsU0FBUyxJQUFLQSxTQUFTLENBQUNKLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDakU7RUFJQUssTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDekMsTUFBTSxDQUFDRSxNQUFNLEdBQUdyQiw0Q0FBSSxDQUFDNkQsS0FBSyxDQUFDQyxLQUFLLENBQ25DLENBQUMsRUFDRCxJQUFJLENBQUMzQyxNQUFNLENBQUNJLEtBQUssRUFDakIsSUFBSSxDQUFDSixNQUFNLENBQUNFLE1BQ2QsQ0FBQztJQUNEOztJQUVBLElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxPQUFPLEdBQUdwQiw0Q0FBSSxDQUFDNkQsS0FBSyxDQUFDRSxXQUFXLENBQzFDLElBQUksQ0FBQzVDLE1BQU0sQ0FBQ0MsT0FBTyxFQUNuQixJQUFJLENBQUNELE1BQU0sQ0FBQ0UsTUFBTSxFQUNsQixHQUNGLENBQUM7SUFDRDs7SUFFQSxJQUFJLElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxFQUFFO01BQzlCLElBQUksQ0FBQ0QsTUFBTSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUN6QjtJQUVBLElBQUcsSUFBSSxDQUFDVixRQUFRLENBQUM4QyxPQUFPLEVBQUM7TUFDdkIsSUFBSSxDQUFDOUMsUUFBUSxDQUFDOEMsT0FBTyxDQUFDUSxLQUFLLENBQUMsSUFBSSxDQUFDakQsZUFBZSxDQUFDLEdBQUUsZUFBYyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsT0FBUSxLQUFJO0lBQzNGO0VBRUY7RUFFQTBCLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2xCcEIsTUFBTSxDQUFDdUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ2IsWUFBWSxDQUFDYyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDckU7RUFFQWxCLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQ3JCdEIsTUFBTSxDQUFDeUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ2YsWUFBWSxDQUFDYyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDeEU7QUFFRjs7Ozs7Ozs7VUM5S0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g566h55CG572R6aG15Lit55qE54m55a6a6aG16Z2i55qE5Yqo55S744CB5YWD57Sg5ZKM5Lqk5LqS5pWI5p6cXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2FuaW1hdGlvbnMvVGl0bGUnXG5cbmltcG9ydCB7IENvbG9yc01hbmFnZXIgfSBmcm9tICcuL0NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIC8vIOaenOS9oOaDs+WcqOS4gOS4quaWh+S7tuS4reWumuS5ieS4gOS6m+S4nOilv+W5tuWcqOWPpuS4gOS4quaWh+S7tuS4reS9v+eUqOWug++8jOS9oOmcgOimgeWwhui/meS6m+WGheWuueWvvOWHuuW5tuWcqOWFtuS7luaWh+S7tuS4reWvvOWFpVxuICBjb25zdHJ1Y3Rvcih7Ly8g5p6E6YCg5Ye95pWw5Zyo5a6e5L6L5YyW5pe25Lya5Li65a+56LGh6K6+572u5Yid5aeL5bGe5oCn5oiW54q25oCB44CC5p6E6YCg5Ye95pWw5a6a5LmJ5LqG5a+56LGh5Zyo5Yib5bu65pe25bqU6K+l5YW35aSH55qE54m55b6B44CC5Zyo5Yib5bu657G755qE5a6e5L6L5ZCO77yM5Y+v5Lul6K6/6Zeu5ZKM5pON5L2c6L+Z5Lqb5bGe5oCn77yM6L+Y5Y+v5Lul6LCD55So5LiO6K+l57G755u45YWz6IGU55qE5pa55rOV44CCXG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IFxuICAgICAgLi4uZWxlbWVudHMsXG4gICAgICBhbmltYXRpb25UaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXG4gICAgfVxuICAgIC8vIHNlbGVjdG9y55So5p2l5a2Y5YKo5Lyg5YWl6L+Z5Lik5Liq5bGe5oCn55qE5byV55So77yM55So5p2l5a2Y5YKo5a+56aG16Z2i5YWD57Sg55qE5byV55So44CCZWxlbWVudOWPr+iDveaYr+S4gOS4qumhtemdoueahOWFg+e0oO+8jGVsZW1lbnRz5Y+v6IO95piv5YWD57Sg6ZuG5ZCIXG4gICAgLy8gLi4uZWxlbWVudOaYr+WxleW8gOi/kOeul+espu+8jOeUqOS6juW/q+mAn+WkjeWItuWvueixoeaIluWQiOW5tuWvueixoeWxnuaAp+WIsOS4gOS4quaWsOeahOWvueixoeS4reOAguWIm+W7uuS6huS4gOS4quaWsOeahOWvueixoe+8jOivpeWvueixoeWMheWQq+S6hiBlbGVtZW50cyDkuK3nmoTmiYDmnInlsZ7mgKdcblxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKTtcblxuICB9XG5cbiAgY3JlYXRlKCkgey8vIGNyZWF0ZeaWueazleaYr+S9v+eUqCBxdWVyeVNlbGVjdG9y6L+b6KGM6aG16Z2i55qE5YWD57Sg6YCJ5oup5ZKM5pON5L2cXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIC8vIOWwseaYr+WFiOiwg+eUqOS4iumdoueahOaehOmAoOWHveaVsO+8jOWwhumhtemdoueahGVsZW1lbnTnmoTlgLzlrZjliLB0aGkuc2VsZWN0b3LnmoTlrrnlmajph4zvvIznhLblkI7lnKjmiafooYzov5nkuKpjcmVhdGXlh73mlbDvvIzojrflj5bliLDlvZPliY3ooqvpgInmi6nlmajmiYDmjIflrprnmoTlhYPntKDjgIJxdWVyeVNlbGN0b3Lov5nkuKrmlrnms5XkuI3kvJrpgInmi6nmiYDmnInljLnphY3nmoTlhYPntKDvvIzogIzlj6rkvJrov5Tlm57nrKzkuIDkuKrljLnphY3nmoTlhYPntKDjgIJcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMCxcbiAgICB9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICAgIC8vIOWwhuWxnuaAp+WAvOWNs+mhtemdouWFg+e0oOWtmOWCqOWcqGVsZW1lbnRz5a+56LGh5Lit5bm25Lul5LuW5Lus55qE5bGe5oCn5ZCN5ZG95ZCNXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG4gICAgICAgIC8vIOaXoOiuuuaYr+ebtOaOpeeahOmhtemdouWFg+e0oO+8iDxkaXY+44CBPHA+44CBPHNwYW4+77yJ6L+Y5piv6YCJ5oup5Zmo5a2X56ym5Liy77yI57G75ZCN44CBSUTjgIHmoIfnrb7lkI3vvInpg73lrZjlnKhlbGVtZW50c+mHjO+8jOWlveeUqOWBmuWQjue7reaTjeS9nOiuv+mXrlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbnRyeTrmr4/kuKrlsZ7mgKfnmoTlgLzvvIzkuZ/lsLHmmK/lsZ7mgKfmiYDlr7nlupTnmoTlhoXlrrk7a2V5OuWxnuaAp+eahOWQjeensOOAguS8mOeCueaMieeFp+WxnuaAp+WQje+8iOihqOekuuWFg+e0oOexu+Wei+aIlueJueW+ge+8ieadpeiuv+mXruWvueW6lOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiFxuICAgICAgLy8g5q+P5Liq5bGe5oCn55qE5ZCN56ew6KGo56S65LqG5LiA57uE5YWD57Sg55qE57G75Z6L5oiW54m55b6B77yI5aaCIGFuaW1hdGlvblRpdGxlc+OAgWFuaW1hdGlvblBhcmFncmFwaHMg562J77yJ77yM6ICM5a+55bqU55qE5bGe5oCn5YC85piv55So6L+Z5Lqb6YCJ5oup5Zmo6YCJ5oup5Yiw55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCI44CCXG4gICAgfSk7XG4gICAgLy8gZW50cnnmmK/lvZPliY3lhYPntKAsZm9yZWFjaOeUqOS4jeS6huaNouaIkOS6hmxvd2Nhc2gvZWFjaOadpemBjeWOhlxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKCk7XG4gIH1cblxuICAvLyDlvIDlp4vlgZrliqjnlLvkuobvvZ7irIfvuI9cblxuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGl0bGVzKVxuICAgIHRoaXMuYW5pbWF0aW9uVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGl0bGVzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvblRpdGxlcylcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBDb2xvcnNNYW5hZ2VyLmNoYW5nZSh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXG4gICAgICAgIGNvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyksXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEdTQVDlsLHmmK9qYXZh5Yqo55S75bqT6YeM55qE5LiA5Liq5Yqo55S75pWI5p6cXG5cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBvbk1vdXNld2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7cGl4ZWxZfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZOyAvL1RJUCBub3JtYWxpemVkIHdoZWVsXG4gICAgXG4gICAgLy8gbm9ybWFsaXpl5ZCO77yM6byg5qCH55qE56e75Yqo5rua5ruR55qE56iL5bqm5Zyo5q+P5LiqcGFnZeW6lOivpeaYr+S4gOagt+eahFxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBlYWNoKHRoaXMuYW5pbWF0aW9uVGl0bGVzLCAoYW5pbWF0aW9uKSA9PiBhbmltYXRpb24ub25SZXNpemUoKSk7XG4gIH1cblxuXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoXG4gICAgICAwLFxuICAgICAgdGhpcy5zY3JvbGwubGltaXQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcbiAgICApO1xuICAgIC8vIOebruagh+S4jeiDveWwj+S6jjDlpKfkuo5saW1pdFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgMC4xXG4gICAgKTtcbiAgICAvLyBpbnRlcnBvbGF0ZeebuOW9k+S6jmxlcnDvvJrkvb9jdXJyZW505YC85YOPdGFyZ2V05YC86L+b6KGM5LiA5Liq5bmz5ruR6L+H5rih772eMC4x5piv5o6n5Yi25q+U5L6L5Y+C5pWw5q+P5LiA5q2l56e75aSa5bCR77yM6YCQ5riQ6LaL5ZCR5LqOdGFyZ2V05YC877yM5YC86LaK5bCP77yM6LaK5bmz5ruRXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZWxlbWVudHMud3JhcHBlcil7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdPWB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZXdoZWVsLmJpbmQodGhpcykpO1xuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOGNlZGQ4NWE2ZTEwYmM2OTMyMVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiTm9ybWFsaXplV2hlZWwiLCJQcmVmaXgiLCJlYWNoIiwibWFwIiwiVGl0bGUiLCJDb2xvcnNNYW5hZ2VyIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25UaXRsZXMiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hhbmdlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QXR0cmlidXRlIiwiY29sb3IiLCJhbmltYXRpb25JbiIsInRpbWVsaW5lIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJvbkNvbXBsZXRlIiwib25Nb3VzZXdoZWVsIiwiZXZlbnQiLCJwaXhlbFkiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInV0aWxzIiwiY2xhbXAiLCJpbnRlcnBvbGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==