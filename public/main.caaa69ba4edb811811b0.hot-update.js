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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);
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
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()('transform');
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
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.selectorChildren, (entry, key) => {
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
    return new Promise(resolve => {
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
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
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
  onMousewheel(event) {
    // const normalized = normalizeWheel(event);

    // this.scroll.target += normalized.pixelY; //TIP normalized wheel

    const {
      deltaY
    } = event;
    this.scroll.target += deltaY;
  }
  onResize() {
    if (this.elements.wrapper) {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight;
    }
  }
  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    // interpolate相当于lerp：使current值像target值进行一个平滑过渡～0.1是控制比例参数每一步移多少，逐渐趋向于target值，值越小，越平滑
    this.scroll.target = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.clamp(0, this.scroll.limit, this.scroll.target);
    // 目标不能小于0大于limit

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
/******/ 	__webpack_require__.h = () => ("aadd5bfef43051d172a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3NDLE9BQU8sRUFBQztNQUN2QixJQUFJLENBQUN0QyxRQUFRLENBQUNzQyxPQUFPLENBQUNPLEtBQUssQ0FBQyxJQUFJLENBQUN6QyxlQUFlLENBQUMsR0FBRSxlQUFjLElBQUksQ0FBQ0ksTUFBTSxDQUFDQyxPQUFRLEtBQUk7SUFDM0Y7RUFFRjtFQUVBbUIsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEJiLE1BQU0sQ0FBQytCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNaLFlBQVksQ0FBQ2EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3JFO0VBRUFqQixvQkFBb0JBLENBQUEsRUFBRztJQUNyQmYsTUFBTSxDQUFDaUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ2QsWUFBWSxDQUFDYSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDeEU7QUFFRjs7Ozs7Ozs7VUNoSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g566h55CG572R6aG15Lit55qE54m55a6a6aG16Z2i55qE5Yqo55S744CB5YWD57Sg5ZKM5Lqk5LqS5pWI5p6cXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIC8vIOaenOS9oOaDs+WcqOS4gOS4quaWh+S7tuS4reWumuS5ieS4gOS6m+S4nOilv+W5tuWcqOWPpuS4gOS4quaWh+S7tuS4reS9v+eUqOWug++8jOS9oOmcgOimgeWwhui/meS6m+WGheWuueWvvOWHuuW5tuWcqOWFtuS7luaWh+S7tuS4reWvvOWFpVxuICBjb25zdHJ1Y3Rvcih7Ly8g5p6E6YCg5Ye95pWw5Zyo5a6e5L6L5YyW5pe25Lya5Li65a+56LGh6K6+572u5Yid5aeL5bGe5oCn5oiW54q25oCB44CC5p6E6YCg5Ye95pWw5a6a5LmJ5LqG5a+56LGh5Zyo5Yib5bu65pe25bqU6K+l5YW35aSH55qE54m55b6B44CC5Zyo5Yib5bu657G755qE5a6e5L6L5ZCO77yM5Y+v5Lul6K6/6Zeu5ZKM5pON5L2c6L+Z5Lqb5bGe5oCn77yM6L+Y5Y+v5Lul6LCD55So5LiO6K+l57G755u45YWz6IGU55qE5pa55rOV44CCXG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH1cbiAgICAvLyBzZWxlY3RvcueUqOadpeWtmOWCqOS8oOWFpei/meS4pOS4quWxnuaAp+eahOW8leeUqO+8jOeUqOadpeWtmOWCqOWvuemhtemdouWFg+e0oOeahOW8leeUqOOAgmVsZW1lbnTlj6/og73mmK/kuIDkuKrpobXpnaLnmoTlhYPntKDvvIxlbGVtZW50c+WPr+iDveaYr+WFg+e0oOmbhuWQiFxuICAgIC8vIC4uLmVsZW1lbnTmmK/lsZXlvIDov5DnrpfnrKbvvIznlKjkuo7lv6vpgJ/lpI3liLblr7nosaHmiJblkIjlubblr7nosaHlsZ7mgKfliLDkuIDkuKrmlrDnmoTlr7nosaHkuK3jgILliJvlu7rkuobkuIDkuKrmlrDnmoTlr7nosaHvvIzor6Xlr7nosaHljIXlkKvkuoYgZWxlbWVudHMg5Lit55qE5omA5pyJ5bGe5oCnXG5cbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHsvLyBjcmVhdGXmlrnms5XmmK/kvb/nlKggcXVlcnlTZWxlY3Rvcui/m+ihjOmhtemdoueahOWFg+e0oOmAieaLqeWSjOaTjeS9nFxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICAvLyDlsLHmmK/lhYjosIPnlKjkuIrpnaLnmoTmnoTpgKDlh73mlbDvvIzlsIbpobXpnaLnmoRlbGVtZW5055qE5YC85a2Y5YiwdGhpLnNlbGVjdG9y55qE5a655Zmo6YeM77yM54S25ZCO5Zyo5omn6KGM6L+Z5LiqY3JlYXRl5Ye95pWw77yM6I635Y+W5Yiw5b2T5YmN6KKr6YCJ5oup5Zmo5omA5oyH5a6a55qE5YWD57Sg44CCcXVlcnlTZWxjdG9y6L+Z5Liq5pa55rOV5LiN5Lya6YCJ5oup5omA5pyJ5Yy56YWN55qE5YWD57Sg77yM6ICM5Y+q5Lya6L+U5Zue56ys5LiA5Liq5Yy56YWN55qE5YWD57Sg44CCXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgICAvLyDlsIblsZ7mgKflgLzljbPpobXpnaLlhYPntKDlrZjlgqjlnKhlbGVtZW50c+WvueixoeS4reW5tuS7peS7luS7rOeahOWxnuaAp+WQjeWRveWQjVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuICAgICAgICAvLyDml6DorrrmmK/nm7TmjqXnmoTpobXpnaLlhYPntKDvvIg8ZGl2PuOAgTxwPuOAgTxzcGFuPu+8iei/mOaYr+mAieaLqeWZqOWtl+espuS4su+8iOexu+WQjeOAgUlE44CB5qCH562+5ZCN77yJ6YO95a2Y5ZyoZWxlbWVudHPph4zvvIzlpb3nlKjlgZrlkI7nu63mk43kvZzorr/pl65cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZW50cnk65q+P5Liq5bGe5oCn55qE5YC877yM5Lmf5bCx5piv5bGe5oCn5omA5a+55bqU55qE5YaF5a65O2tleTrlsZ7mgKfnmoTlkI3np7DjgILkvJjngrnmjInnhaflsZ7mgKflkI3vvIjooajnpLrlhYPntKDnsbvlnovmiJbnibnlvoHvvInmnaXorr/pl67lr7nlupTnmoTlhYPntKDmiJblhYPntKDpm4blkIhcbiAgICAgIC8vIOavj+S4quWxnuaAp+eahOWQjeensOihqOekuuS6huS4gOe7hOWFg+e0oOeahOexu+Wei+aIlueJueW+ge+8iOWmgiBhbmltYXRpb25UaXRsZXPjgIFhbmltYXRpb25QYXJhZ3JhcGhzIOetie+8ie+8jOiAjOWvueW6lOeahOWxnuaAp+WAvOaYr+eUqOi/meS6m+mAieaLqeWZqOmAieaLqeWIsOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiOOAglxuICAgIH0pO1xuICAgIC8vIGVudHJ55piv5b2T5YmN5YWD57SgLGZvcmVhY2jnlKjkuI3kuobmjaLmiJDkuoZsb3djYXNoL2VhY2jmnaXpgY3ljoZcbiAgfVxuXG4gIC8vIOW8gOWni+WBmuWKqOeUu+S6hu+9nuKsh++4j1xuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEdTQVDlsLHmmK9qYXZh5Yqo55S75bqT6YeM55qE5LiA5Liq5Yqo55S75pWI5p6cXG5cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBvbk1vdXNld2hlZWwoZXZlbnQpIHtcbiAgICAvLyBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuXG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0ICs9IG5vcm1hbGl6ZWQucGl4ZWxZOyAvL1RJUCBub3JtYWxpemVkIHdoZWVsXG5cbiAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnRcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGVsdGFZXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9XG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICB9XG5cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50PUdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LDAuMSlcbiAgICAvLyBpbnRlcnBvbGF0ZeebuOW9k+S6jmxlcnDvvJrkvb9jdXJyZW505YC85YOPdGFyZ2V05YC86L+b6KGM5LiA5Liq5bmz5ruR6L+H5rih772eMC4x5piv5o6n5Yi25q+U5L6L5Y+C5pWw5q+P5LiA5q2l56e75aSa5bCR77yM6YCQ5riQ6LaL5ZCR5LqOdGFyZ2V05YC877yM5YC86LaK5bCP77yM6LaK5bmz5ruRXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcbiAgICAgIDAsXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxuICAgICk7XG4gICAgLy8g55uu5qCH5LiN6IO95bCP5LqOMOWkp+S6jmxpbWl0XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZWxlbWVudHMud3JhcHBlcil7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdPWB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZXdoZWVsLmJpbmQodGhpcykpO1xuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhYWRkNWJmZWY0MzA1MWQxNzJhNFwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiUHJlZml4IiwiZWFjaCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwidHJhbnNmb3JtUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsInRpbWVsaW5lIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJvbkNvbXBsZXRlIiwib25Nb3VzZXdoZWVsIiwiZXZlbnQiLCJkZWx0YVkiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInVwZGF0ZSIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJjbGFtcCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==