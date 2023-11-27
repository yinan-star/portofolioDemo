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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/Title */ "./app/animations/Title.js");
/* harmony import */ var _animations_Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/Paragraph */ "./app/animations/Paragraph.js");
/* harmony import */ var _animations_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/Label */ "./app/animations/Label.js");
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
      return new _animations_Title__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    this.animations.push(...this.animationTitles);

    //Paragraph
    this.animationParagraphs = lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(this.elements.animationParagraphs, element => {
      return new _animations_Paragraph__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.animationParagraphs);

    //Label
    this.animationLabels = lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(this.elements.animationLabels, element => {
      return new _animations_Label__WEBPACK_IMPORTED_MODULE_6__["default"]({
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("508c25fe3a3e02b2d5dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FBR3hCLDRDQUFJLENBQUNpRSxLQUFLLENBQUNFLFdBQVcsQ0FDMUMsSUFBSSxDQUFDNUMsTUFBTSxDQUFDQyxPQUFPLEVBQ25CLElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxNQUFNLEVBQ2xCLEdBQ0YsQ0FBQztJQUNEOztJQUVBLElBQUksSUFBSSxDQUFDRixNQUFNLENBQUNDLE9BQU8sR0FBRyxJQUFJLEVBQUU7TUFDOUIsSUFBSSxDQUFDRCxNQUFNLENBQUNDLE9BQU8sR0FBRyxDQUFDO0lBQ3pCO0lBRUEsSUFBRyxJQUFJLENBQUNaLFFBQVEsQ0FBQ2dELE9BQU8sRUFBQztNQUN2QixJQUFJLENBQUNoRCxRQUFRLENBQUNnRCxPQUFPLENBQUNRLEtBQUssQ0FBQyxJQUFJLENBQUNqRCxlQUFlLENBQUMsR0FBRSxlQUFjLElBQUksQ0FBQ0ksTUFBTSxDQUFDQyxPQUFRLEtBQUk7SUFDM0Y7RUFFRjtFQUVBMEIsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEJwQixNQUFNLENBQUN1QyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDYixZQUFZLENBQUNjLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNyRTtFQUVBbEIsb0JBQW9CQSxDQUFBLEVBQUc7SUFDckJ0QixNQUFNLENBQUN5QyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDZixZQUFZLENBQUNjLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN4RTtBQUVGOzs7Ozs7OztVQ3JNQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vYW5pbWF0aW9ucy9UaXRsZSdcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vYW5pbWF0aW9ucy9QYXJhZ3JhcGgnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uL2FuaW1hdGlvbnMvTGFiZWwnO1xuXG5pbXBvcnQgeyBDb2xvcnNNYW5hZ2VyIH0gZnJvbSAnLi9Db2xvcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioey8vIOaehOmAoOWHveaVsOWcqOWunuS+i+WMluaXtuS8muS4uuWvueixoeiuvue9ruWIneWni+WxnuaAp+aIlueKtuaAgeOAguaehOmAoOWHveaVsOWumuS5ieS6huWvueixoeWcqOWIm+W7uuaXtuW6lOivpeWFt+Wkh+eahOeJueW+geOAguWcqOWIm+W7uuexu+eahOWunuS+i+WQju+8jOWPr+S7peiuv+mXruWSjOaTjeS9nOi/meS6m+WxnuaAp++8jOi/mOWPr+S7peiwg+eUqOS4juivpeexu+ebuOWFs+iBlOeahOaWueazleOAglxuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHMsXG4gICAgaWRcbiAgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyBcbiAgICAgIC4uLmVsZW1lbnRzLFxuICAgICAgYW5pbWF0aW9uVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPVwidGl0bGVcIl0nLFxuICAgICAgYW5pbWF0aW9uUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICBhbmltYXRpb25MYWJlbHM6ICdbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXScsXG5cblxuICAgIH1cbiAgICAvLyBzZWxlY3RvcueUqOadpeWtmOWCqOS8oOWFpei/meS4pOS4quWxnuaAp+eahOW8leeUqO+8jOeUqOadpeWtmOWCqOWvuemhtemdouWFg+e0oOeahOW8leeUqOOAgmVsZW1lbnTlj6/og73mmK/kuIDkuKrpobXpnaLnmoTlhYPntKDvvIxlbGVtZW50c+WPr+iDveaYr+WFg+e0oOmbhuWQiFxuICAgIC8vIC4uLmVsZW1lbnTmmK/lsZXlvIDov5DnrpfnrKbvvIznlKjkuo7lv6vpgJ/lpI3liLblr7nosaHmiJblkIjlubblr7nosaHlsZ7mgKfliLDkuIDkuKrmlrDnmoTlr7nosaHkuK3jgILliJvlu7rkuobkuIDkuKrmlrDnmoTlr7nosaHvvIzor6Xlr7nosaHljIXlkKvkuoYgZWxlbWVudHMg5Lit55qE5omA5pyJ5bGe5oCnXG5cbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHsvLyBjcmVhdGXmlrnms5XmmK/kvb/nlKggcXVlcnlTZWxlY3Rvcui/m+ihjOmhtemdoueahOWFg+e0oOmAieaLqeWSjOaTjeS9nFxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICAvLyDlsLHmmK/lhYjosIPnlKjkuIrpnaLnmoTmnoTpgKDlh73mlbDvvIzlsIbpobXpnaLnmoRlbGVtZW5055qE5YC85a2Y5YiwdGhpLnNlbGVjdG9y55qE5a655Zmo6YeM77yM54S25ZCO5Zyo5omn6KGM6L+Z5LiqY3JlYXRl5Ye95pWw77yM6I635Y+W5Yiw5b2T5YmN6KKr6YCJ5oup5Zmo5omA5oyH5a6a55qE5YWD57Sg44CCcXVlcnlTZWxjdG9y6L+Z5Liq5pa55rOV5LiN5Lya6YCJ5oup5omA5pyJ5Yy56YWN55qE5YWD57Sg77yM6ICM5Y+q5Lya6L+U5Zue56ys5LiA5Liq5Yy56YWN55qE5YWD57Sg44CCXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgICAvLyDlsIblsZ7mgKflgLzljbPpobXpnaLlhYPntKDlrZjlgqjlnKhlbGVtZW50c+WvueixoeS4reW5tuS7peS7luS7rOeahOWxnuaAp+WQjeWRveWQjVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuICAgICAgICAvLyDml6DorrrmmK/nm7TmjqXnmoTpobXpnaLlhYPntKDvvIg8ZGl2PuOAgTxwPuOAgTxzcGFuPu+8iei/mOaYr+mAieaLqeWZqOWtl+espuS4su+8iOexu+WQjeOAgUlE44CB5qCH562+5ZCN77yJ6YO95a2Y5ZyoZWxlbWVudHPph4zvvIzlpb3nlKjlgZrlkI7nu63mk43kvZzorr/pl65cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZW50cnk65q+P5Liq5bGe5oCn55qE5YC877yM5Lmf5bCx5piv5bGe5oCn5omA5a+55bqU55qE5YaF5a65O2tleTrlsZ7mgKfnmoTlkI3np7DjgILkvJjngrnmjInnhaflsZ7mgKflkI3vvIjooajnpLrlhYPntKDnsbvlnovmiJbnibnlvoHvvInmnaXorr/pl67lr7nlupTnmoTlhYPntKDmiJblhYPntKDpm4blkIhcbiAgICAgIC8vIOavj+S4quWxnuaAp+eahOWQjeensOihqOekuuS6huS4gOe7hOWFg+e0oOeahOexu+Wei+aIlueJueW+ge+8iOWmgiBhbmltYXRpb25UaXRsZXPjgIFhbmltYXRpb25QYXJhZ3JhcGhzIOetie+8ie+8jOiAjOWvueW6lOeahOWxnuaAp+WAvOaYr+eUqOi/meS6m+mAieaLqeWZqOmAieaLqeWIsOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiOOAglxuICAgIH0pO1xuICAgIC8vIGVudHJ55piv5b2T5YmN5YWD57SgLGZvcmVhY2jnlKjkuI3kuobmjaLmiJDkuoZsb3djYXNoL2VhY2jmnaXpgY3ljoZcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgLy8g5byA5aeL5YGa5Yqo55S75LqG772e4qyH77iPXG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIC8vVGl0bGVcbiAgICB0aGlzLmFuaW1hdGlvblRpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvblRpdGxlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25UaXRsZXMpO1xuXG4gICAgLy9QYXJhZ3JhcGhcbiAgICB0aGlzLmFuaW1hdGlvblBhcmFncmFwaHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25QYXJhZ3JhcGhzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25QYXJhZ3JhcGhzKTtcblxuICAgIC8vTGFiZWxcbiAgICB0aGlzLmFuaW1hdGlvbkxhYmVscyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbkxhYmVscywgKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTGFiZWwoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25MYWJlbHMpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIENvbG9yc01hbmFnZXIuY2hhbmdlKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQnKSxcbiAgICAgICAgY29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gR1NBUOWwseaYr2phdmHliqjnlLvlupPph4znmoTkuIDkuKrliqjnlLvmlYjmnpxcblxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIG9uTW91c2V3aGVlbChldmVudCkge1xuICAgIGNvbnN0IHtwaXhlbFl9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7IC8vVElQIG5vcm1hbGl6ZWQgd2hlZWxcbiAgICBcbiAgICAvLyBub3JtYWxpemXlkI7vvIzpvKDmoIfnmoTnp7vliqjmu5rmu5HnmoTnqIvluqblnKjmr4/kuKpwYWdl5bqU6K+l5piv5LiA5qC355qEXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIGVhY2godGhpcy5hbmltYXRpb24sIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcbiAgfVxuXG5cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcbiAgICAgIDAsXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxuICAgICk7XG4gICAgLy8g55uu5qCH5LiN6IO95bCP5LqOMOWkp+S6jmxpbWl0XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICAwLjFcbiAgICApO1xuICAgIC8vIGludGVycG9sYXRl55u45b2T5LqObGVycO+8muS9v2N1cnJlbnTlgLzlg490YXJnZXTlgLzov5vooYzkuIDkuKrlubPmu5Hov4fmuKHvvZ4wLjHmmK/mjqfliLbmr5Tkvovlj4LmlbDmr4/kuIDmraXnp7vlpJrlsJHvvIzpgJDmuJDotovlkJHkuo50YXJnZXTlgLzvvIzlgLzotorlsI/vvIzotorlubPmu5FcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5lbGVtZW50cy53cmFwcGVyKXtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF09YHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwuYmluZCh0aGlzKSk7XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUwOGMyNWZlM2EzZTAyYjJkNWRkXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJOb3JtYWxpemVXaGVlbCIsIlByZWZpeCIsImVhY2giLCJtYXAiLCJUaXRsZSIsIlBhcmFncmFwaCIsIkxhYmVsIiwiQ29sb3JzTWFuYWdlciIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uVGl0bGVzIiwiYW5pbWF0aW9uUGFyYWdyYXBocyIsImFuaW1hdGlvbkxhYmVscyIsInRyYW5zZm9ybVByZWZpeCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImFuaW1hdGlvbnMiLCJwdXNoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hhbmdlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QXR0cmlidXRlIiwiY29sb3IiLCJhbmltYXRpb25JbiIsInRpbWVsaW5lIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJvbkNvbXBsZXRlIiwib25Nb3VzZXdoZWVsIiwiZXZlbnQiLCJwaXhlbFkiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInV0aWxzIiwiY2xhbXAiLCJpbnRlcnBvbGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==