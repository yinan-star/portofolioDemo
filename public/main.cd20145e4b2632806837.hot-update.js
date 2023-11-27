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
    return Promise(resolve => {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
  hide() {
    return Promise(resolve => {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95893501095479609ff9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZDIwMTQ1ZTRiMjYzMjgwNjgzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QjtBQUVPO0FBRWYsTUFBTUUsSUFBSTtFQUN2QjtFQUNBQyxXQUFXQSxDQUFDO0lBQUM7SUFDWEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDO0VBQ0YsQ0FBQyxFQUNEO0lBQ0UsSUFBSSxDQUFDQyxRQUFRLEdBQUNILE9BQU87SUFDckIsSUFBSSxDQUFDSSxnQkFBZ0IsR0FBQztNQUFDLEdBQUdIO0lBQVEsQ0FBQztJQUNuQztJQUNBOztJQUVBLElBQUksQ0FBQ0MsRUFBRSxHQUFDQSxFQUFFO0VBQ1o7RUFFQUcsTUFBTUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxJQUFJLENBQUNMLE9BQU8sR0FBQ00sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUM7SUFDbEQ7SUFDQSxJQUFJLENBQUNGLFFBQVEsR0FBQyxDQUFDLENBQUM7SUFFaEJKLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxnQkFBZ0IsRUFBRSxDQUFDSSxLQUFLLEVBQUNDLEdBQUcsS0FBSztNQUN6QyxJQUNFRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBVyxJQUNuQ0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQVEsRUFDaEM7UUFDQSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdELEtBQUs7UUFDMUI7TUFDRixDQUFDLE1BQ0k7UUFDSCxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUNMLEtBQUssQ0FBQztRQUN2RDtRQUNFLElBQUksSUFBSSxDQUFDUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ25DLElBQUksQ0FBQ2IsUUFBUSxDQUFDUSxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQzNCLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUN4QyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUM7UUFDcEQ7TUFDRjtNQUNBO01BQ0E7SUFDRixDQUFDLENBQUM7SUFDRjtFQUNGOztFQUVGOztFQUVFTyxJQUFJQSxDQUFBLEVBQUU7SUFDSixPQUFPQyxPQUFPLENBQUNDLE9BQU8sSUFBRztNQUN2QnJCLDRDQUFJLENBQUNzQixJQUFJLENBQUMsSUFBSSxDQUFDbEIsT0FBTyxFQUFDO1FBQ3JCbUIsU0FBUyxFQUFDLENBQUM7UUFDWEMsVUFBVSxFQUFDSDtNQUNiLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUVKO0VBRUFJLElBQUlBLENBQUEsRUFBRTtJQUNKLE9BQU9MLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQ3ZCckIsNENBQUksQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLENBQUNsQixPQUFPLEVBQUM7UUFDckJtQixTQUFTLEVBQUMsQ0FBQztRQUNYQyxVQUFVLEVBQUNIO01BQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUN0RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g566h55CG572R6aG15Lit55qE54m55a6a6aG16Z2i55qE5Yqo55S744CB5YWD57Sg5ZKM5Lqk5LqS5pWI5p6cXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXtcbiAgLy8g5p6c5L2g5oOz5Zyo5LiA5Liq5paH5Lu25Lit5a6a5LmJ5LiA5Lqb5Lic6KW/5bm25Zyo5Y+m5LiA5Liq5paH5Lu25Lit5L2/55So5a6D77yM5L2g6ZyA6KaB5bCG6L+Z5Lqb5YaF5a655a+85Ye65bm25Zyo5YW25LuW5paH5Lu25Lit5a+85YWlXG4gIGNvbnN0cnVjdG9yKHsvLyDmnoTpgKDlh73mlbDlnKjlrp7kvovljJbml7bkvJrkuLrlr7nosaHorr7nva7liJ3lp4vlsZ7mgKfmiJbnirbmgIHjgILmnoTpgKDlh73mlbDlrprkuYnkuoblr7nosaHlnKjliJvlu7rml7blupTor6XlhbflpIfnmoTnibnlvoHjgILlnKjliJvlu7rnsbvnmoTlrp7kvovlkI7vvIzlj6/ku6Xorr/pl67lkozmk43kvZzov5nkupvlsZ7mgKfvvIzov5jlj6/ku6XosIPnlKjkuI7or6Xnsbvnm7jlhbPogZTnmoTmlrnms5XjgIJcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnRzLFxuICAgIGlkXG4gIH0pXG4gIHtcbiAgICB0aGlzLnNlbGVjdG9yPWVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW49ey4uLmVsZW1lbnRzfVxuICAgIC8vIHNlbGVjdG9y55So5p2l5a2Y5YKo5Lyg5YWl6L+Z5Lik5Liq5bGe5oCn55qE5byV55So77yM55So5p2l5a2Y5YKo5a+56aG16Z2i5YWD57Sg55qE5byV55So44CCZWxlbWVudOWPr+iDveaYr+S4gOS4qumhtemdoueahOWFg+e0oO+8jGVsZW1lbnRz5Y+v6IO95piv5YWD57Sg6ZuG5ZCIXG4gICAgLy8gLi4uZWxlbWVudOaYr+WxleW8gOi/kOeul+espu+8jOeUqOS6juW/q+mAn+WkjeWItuWvueixoeaIluWQiOW5tuWvueixoeWxnuaAp+WIsOS4gOS4quaWsOeahOWvueixoeS4reOAguWIm+W7uuS6huS4gOS4quaWsOeahOWvueixoe+8jOivpeWvueixoeWMheWQq+S6hiBlbGVtZW50cyDkuK3nmoTmiYDmnInlsZ7mgKdcblxuICAgIHRoaXMuaWQ9aWRcbiAgfVxuXG4gIGNyZWF0ZSgpey8vIGNyZWF0ZeaWueazleaYr+S9v+eUqCBxdWVyeVNlbGVjdG9y6L+b6KGM6aG16Z2i55qE5YWD57Sg6YCJ5oup5ZKM5pON5L2cXG4gICAgdGhpcy5lbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICAvLyDlsLHmmK/lhYjosIPnlKjkuIrpnaLnmoTmnoTpgKDlh73mlbDvvIzlsIbpobXpnaLnmoRlbGVtZW5055qE5YC85a2Y5YiwdGhpLnNlbGVjdG9y55qE5a655Zmo6YeM77yM54S25ZCO5Zyo5omn6KGM6L+Z5LiqY3JlYXRl5Ye95pWw77yM6I635Y+W5Yiw5b2T5YmN6KKr6YCJ5oup5Zmo5omA5oyH5a6a55qE5YWD57Sg44CCcXVlcnlTZWxjdG9y6L+Z5Liq5pa55rOV5LiN5Lya6YCJ5oup5omA5pyJ5Yy56YWN55qE5YWD57Sg77yM6ICM5Y+q5Lya6L+U5Zue56ys5LiA5Liq5Yy56YWN55qE5YWD57Sg44CCXG4gICAgdGhpcy5lbGVtZW50cz17fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSxrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3RcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgICAgLy8g5bCG5bGe5oCn5YC85Y2z6aG16Z2i5YWD57Sg5a2Y5YKo5ZyoZWxlbWVudHPlr7nosaHkuK3lubbku6Xku5bku6znmoTlsZ7mgKflkI3lkb3lkI1cbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG4gICAgICAvLyDml6DorrrmmK/nm7TmjqXnmoTpobXpnaLlhYPntKDvvIg8ZGl2PuOAgTxwPuOAgTxzcGFuPu+8iei/mOaYr+mAieaLqeWZqOWtl+espuS4su+8iOexu+WQjeOAgUlE44CB5qCH562+5ZCN77yJ6YO95a2Y5ZyoZWxlbWVudHPph4zvvIzlpb3nlKjlgZrlkI7nu63mk43kvZzorr/pl65cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGVudHJ5Ouavj+S4quWxnuaAp+eahOWAvO+8jOS5n+WwseaYr+WxnuaAp+aJgOWvueW6lOeahOWGheWuuTtrZXk65bGe5oCn55qE5ZCN56ew44CC5LyY54K55oyJ54Wn5bGe5oCn5ZCN77yI6KGo56S65YWD57Sg57G75Z6L5oiW54m55b6B77yJ5p2l6K6/6Zeu5a+55bqU55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCIXG4gICAgICAvLyDmr4/kuKrlsZ7mgKfnmoTlkI3np7DooajnpLrkuobkuIDnu4TlhYPntKDnmoTnsbvlnovmiJbnibnlvoHvvIjlpoIgYW5pbWF0aW9uVGl0bGVz44CBYW5pbWF0aW9uUGFyYWdyYXBocyDnrYnvvInvvIzogIzlr7nlupTnmoTlsZ7mgKflgLzmmK/nlKjov5nkupvpgInmi6nlmajpgInmi6nliLDnmoTlhYPntKDmiJblhYPntKDpm4blkIjjgIJcbiAgICB9KTtcbiAgICAvLyBlbnRyeeaYr+W9k+WJjeWFg+e0oCxmb3JlYWNo55So5LiN5LqG5o2i5oiQ5LqGbG93Y2FzaC9lYWNo5p2l6YGN5Y6GXG4gIH1cblxuLy8g5byA5aeL5YGa5Yqo55S75LqG772e4qyH77iPXG5cbiAgc2hvdygpe1xuICAgIHJldHVybiBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LHtcbiAgICAgICAgYXV0b0FscGhhOjAsXG4gICAgICAgIG9uQ29tcGxldGU6cmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICBcbiAgfVxuXG4gIGhpZGUoKXtcbiAgICByZXR1cm4gUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgR1NBUC5mcm9tKHRoaXMuZWxlbWVudCx7XG4gICAgICAgIGF1dG9BbHBoYTowLFxuICAgICAgICBvbkNvbXBsZXRlOnJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1ODkzNTAxMDk1NDc5NjA5ZmY5XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJlYWNoIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==