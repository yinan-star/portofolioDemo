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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/Title */ "./app/animations/Title.js");
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
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].timeline();
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
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].timeline();
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
    this.scroll.target = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].utils.clamp(0, this.scroll.limit, this.scroll.target);
    // 目标不能小于0大于limit

    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
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
/******/ 	__webpack_require__.h = () => ("c528e7037a753a036b29")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vYW5pbWF0aW9ucy9UaXRsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIC8vIOaenOS9oOaDs+WcqOS4gOS4quaWh+S7tuS4reWumuS5ieS4gOS6m+S4nOilv+W5tuWcqOWPpuS4gOS4quaWh+S7tuS4reS9v+eUqOWug++8jOS9oOmcgOimgeWwhui/meS6m+WGheWuueWvvOWHuuW5tuWcqOWFtuS7luaWh+S7tuS4reWvvOWFpVxuICBjb25zdHJ1Y3Rvcih7Ly8g5p6E6YCg5Ye95pWw5Zyo5a6e5L6L5YyW5pe25Lya5Li65a+56LGh6K6+572u5Yid5aeL5bGe5oCn5oiW54q25oCB44CC5p6E6YCg5Ye95pWw5a6a5LmJ5LqG5a+56LGh5Zyo5Yib5bu65pe25bqU6K+l5YW35aSH55qE54m55b6B44CC5Zyo5Yib5bu657G755qE5a6e5L6L5ZCO77yM5Y+v5Lul6K6/6Zeu5ZKM5pON5L2c6L+Z5Lqb5bGe5oCn77yM6L+Y5Y+v5Lul6LCD55So5LiO6K+l57G755u45YWz6IGU55qE5pa55rOV44CCXG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IFxuICAgICAgLi4uZWxlbWVudHMsXG4gICAgICBhbmltYXRpb25UaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXG4gICAgfVxuICAgIC8vIHNlbGVjdG9y55So5p2l5a2Y5YKo5Lyg5YWl6L+Z5Lik5Liq5bGe5oCn55qE5byV55So77yM55So5p2l5a2Y5YKo5a+56aG16Z2i5YWD57Sg55qE5byV55So44CCZWxlbWVudOWPr+iDveaYr+S4gOS4qumhtemdoueahOWFg+e0oO+8jGVsZW1lbnRz5Y+v6IO95piv5YWD57Sg6ZuG5ZCIXG4gICAgLy8gLi4uZWxlbWVudOaYr+WxleW8gOi/kOeul+espu+8jOeUqOS6juW/q+mAn+WkjeWItuWvueixoeaIluWQiOW5tuWvueixoeWxnuaAp+WIsOS4gOS4quaWsOeahOWvueixoeS4reOAguWIm+W7uuS6huS4gOS4quaWsOeahOWvueixoe+8jOivpeWvueixoeWMheWQq+S6hiBlbGVtZW50cyDkuK3nmoTmiYDmnInlsZ7mgKdcblxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKTtcblxuICB9XG5cbiAgY3JlYXRlKCkgey8vIGNyZWF0ZeaWueazleaYr+S9v+eUqCBxdWVyeVNlbGVjdG9y6L+b6KGM6aG16Z2i55qE5YWD57Sg6YCJ5oup5ZKM5pON5L2cXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIC8vIOWwseaYr+WFiOiwg+eUqOS4iumdoueahOaehOmAoOWHveaVsO+8jOWwhumhtemdoueahGVsZW1lbnTnmoTlgLzlrZjliLB0aGkuc2VsZWN0b3LnmoTlrrnlmajph4zvvIznhLblkI7lnKjmiafooYzov5nkuKpjcmVhdGXlh73mlbDvvIzojrflj5bliLDlvZPliY3ooqvpgInmi6nlmajmiYDmjIflrprnmoTlhYPntKDjgIJxdWVyeVNlbGN0b3Lov5nkuKrmlrnms5XkuI3kvJrpgInmi6nmiYDmnInljLnphY3nmoTlhYPntKDvvIzogIzlj6rkvJrov5Tlm57nrKzkuIDkuKrljLnphY3nmoTlhYPntKDjgIJcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMCxcbiAgICB9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICAgIC8vIOWwhuWxnuaAp+WAvOWNs+mhtemdouWFg+e0oOWtmOWCqOWcqGVsZW1lbnRz5a+56LGh5Lit5bm25Lul5LuW5Lus55qE5bGe5oCn5ZCN5ZG95ZCNXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG4gICAgICAgIC8vIOaXoOiuuuaYr+ebtOaOpeeahOmhtemdouWFg+e0oO+8iDxkaXY+44CBPHA+44CBPHNwYW4+77yJ6L+Y5piv6YCJ5oup5Zmo5a2X56ym5Liy77yI57G75ZCN44CBSUTjgIHmoIfnrb7lkI3vvInpg73lrZjlnKhlbGVtZW50c+mHjO+8jOWlveeUqOWBmuWQjue7reaTjeS9nOiuv+mXrlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbnRyeTrmr4/kuKrlsZ7mgKfnmoTlgLzvvIzkuZ/lsLHmmK/lsZ7mgKfmiYDlr7nlupTnmoTlhoXlrrk7a2V5OuWxnuaAp+eahOWQjeensOOAguS8mOeCueaMieeFp+WxnuaAp+WQje+8iOihqOekuuWFg+e0oOexu+Wei+aIlueJueW+ge+8ieadpeiuv+mXruWvueW6lOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiFxuICAgICAgLy8g5q+P5Liq5bGe5oCn55qE5ZCN56ew6KGo56S65LqG5LiA57uE5YWD57Sg55qE57G75Z6L5oiW54m55b6B77yI5aaCIGFuaW1hdGlvblRpdGxlc+OAgWFuaW1hdGlvblBhcmFncmFwaHMg562J77yJ77yM6ICM5a+55bqU55qE5bGe5oCn5YC85piv55So6L+Z5Lqb6YCJ5oup5Zmo6YCJ5oup5Yiw55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCI44CCXG4gICAgfSk7XG4gICAgLy8gZW50cnnmmK/lvZPliY3lhYPntKAsZm9yZWFjaOeUqOS4jeS6huaNouaIkOS6hmxvd2Nhc2gvZWFjaOadpemBjeWOhlxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKCk7XG4gIH1cblxuICAvLyDlvIDlp4vlgZrliqjnlLvkuobvvZ7irIfvuI9cblxuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGl0bGVzKVxuICAgIHRoaXMuYW5pbWF0aW9uVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGl0bGVzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvblRpdGxlcylcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEdTQVDlsLHmmK9qYXZh5Yqo55S75bqT6YeM55qE5LiA5Liq5Yqo55S75pWI5p6cXG5cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBvbk1vdXNld2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7cGl4ZWxZfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZOyAvL1RJUCBub3JtYWxpemVkIHdoZWVsXG4gICAgXG4gICAgLy8gbm9ybWFsaXpl5ZCO77yM6byg5qCH55qE56e75Yqo5rua5ruR55qE56iL5bqm5Zyo5q+P5LiqcGFnZeW6lOivpeaYr+S4gOagt+eahFxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxuICAgIGVhY2godGhpcy5hbmltYXRpb25UaXRsZXMsIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKVxuICB9XG5cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XG4gICAgKTtcbiAgICAvLyDnm67moIfkuI3og73lsI/kuo4w5aSn5LqObGltaXRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG4gICAgLy8gaW50ZXJwb2xhdGXnm7jlvZPkuo5sZXJw77ya5L2/Y3VycmVudOWAvOWDj3RhcmdldOWAvOi/m+ihjOS4gOS4quW5s+a7kei/h+a4oe+9njAuMeaYr+aOp+WItuavlOS+i+WPguaVsOavj+S4gOatpeenu+WkmuWwke+8jOmAkOa4kOi2i+WQkeS6jnRhcmdldOWAvO+8jOWAvOi2iuWwj++8jOi2iuW5s+a7kVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMDtcbiAgICB9XG5cbiAgICBpZih0aGlzLmVsZW1lbnRzLndyYXBwZXIpe1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XT1gdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9XG4gICAgXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZXdoZWVsLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzUyOGU3MDM3YTc1M2EwMzZiMjlcIikiXSwibmFtZXMiOlsiR1NBUCIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiZWFjaCIsIm1hcCIsIlRpdGxlIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25UaXRsZXMiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJ0aW1lbGluZSIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsIm9uTW91c2V3aGVlbCIsImV2ZW50IiwicGl4ZWxZIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJ1dGlscyIsImNsYW1wIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=