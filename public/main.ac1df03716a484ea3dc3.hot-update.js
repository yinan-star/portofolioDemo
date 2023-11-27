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
    console.log(this.transformPrefix);
  }
  create() {
    // create方法是使用 querySelector进行页面的元素选择和操作
    this.element = document.querySelector(this.selector);
    // 就是先调用上面的构造函数，将页面的element的值存到thi.selector的容器里，然后在执行这个create函数，获取到当前被选择器所指定的元素。querySelctor这个方法不会选择所有匹配的元素，而只会返回第一个匹配的元素。
    this.elements = {};
    this.scroll = {
      current: 0,
      target: 0,
      last: 0
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
    console.log(event);
    // const normalized = normalizeWheel(event);

    // this.scroll.target += normalized.pixelY; //TIP normalized wheel

    const {
      deltaY
    } = event;
    console.log(deltaY);
    this.scroll.target += deltaY;
  }
  update() {
    console.log(this.scroll.target);
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    // interpolate相当于lerp：使current值像target值进行一个平滑过渡～0.1是控制比例参数每一步移多少，逐渐趋向于target值，值越小，越平滑

    this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`;
  }
  addEventListeners() {
    window.addEventListener('mousewheel', this.onMousewheel);
  }
  removeEventListeners() {
    window.removeEventListener('mousewheel', this.onMousewheel);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0e2c31c075342c50557")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztFQUM3RDtBQUVGOzs7Ozs7OztVQzlIQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgLy8g5p6c5L2g5oOz5Zyo5LiA5Liq5paH5Lu25Lit5a6a5LmJ5LiA5Lqb5Lic6KW/5bm25Zyo5Y+m5LiA5Liq5paH5Lu25Lit5L2/55So5a6D77yM5L2g6ZyA6KaB5bCG6L+Z5Lqb5YaF5a655a+85Ye65bm25Zyo5YW25LuW5paH5Lu25Lit5a+85YWlXG4gIGNvbnN0cnVjdG9yKHsvLyDmnoTpgKDlh73mlbDlnKjlrp7kvovljJbml7bkvJrkuLrlr7nosaHorr7nva7liJ3lp4vlsZ7mgKfmiJbnirbmgIHjgILmnoTpgKDlh73mlbDlrprkuYnkuoblr7nosaHlnKjliJvlu7rml7blupTor6XlhbflpIfnmoTnibnlvoHjgILlnKjliJvlu7rnsbvnmoTlrp7kvovlkI7vvIzlj6/ku6Xorr/pl67lkozmk43kvZzov5nkupvlsZ7mgKfvvIzov5jlj6/ku6XosIPnlKjkuI7or6Xnsbvnm7jlhbPogZTnmoTmlrnms5XjgIJcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnRzLFxuICAgIGlkXG4gIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHsgLi4uZWxlbWVudHMgfVxuICAgIC8vIHNlbGVjdG9y55So5p2l5a2Y5YKo5Lyg5YWl6L+Z5Lik5Liq5bGe5oCn55qE5byV55So77yM55So5p2l5a2Y5YKo5a+56aG16Z2i5YWD57Sg55qE5byV55So44CCZWxlbWVudOWPr+iDveaYr+S4gOS4qumhtemdoueahOWFg+e0oO+8jGVsZW1lbnRz5Y+v6IO95piv5YWD57Sg6ZuG5ZCIXG4gICAgLy8gLi4uZWxlbWVudOaYr+WxleW8gOi/kOeul+espu+8jOeUqOS6juW/q+mAn+WkjeWItuWvueixoeaIluWQiOW5tuWvueixoeWxnuaAp+WIsOS4gOS4quaWsOeahOWvueixoeS4reOAguWIm+W7uuS6huS4gOS4quaWsOeahOWvueixoe+8jOivpeWvueixoeWMheWQq+S6hiBlbGVtZW50cyDkuK3nmoTmiYDmnInlsZ7mgKdcblxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4PVByZWZpeCgndHJhbnNmb3JtJylcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudHJhbnNmb3JtUHJlZml4KVxuICB9XG5cbiAgY3JlYXRlKCkgey8vIGNyZWF0ZeaWueazleaYr+S9v+eUqCBxdWVyeVNlbGVjdG9y6L+b6KGM6aG16Z2i55qE5YWD57Sg6YCJ5oup5ZKM5pON5L2cXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIC8vIOWwseaYr+WFiOiwg+eUqOS4iumdoueahOaehOmAoOWHveaVsO+8jOWwhumhtemdoueahGVsZW1lbnTnmoTlgLzlrZjliLB0aGkuc2VsZWN0b3LnmoTlrrnlmajph4zvvIznhLblkI7lnKjmiafooYzov5nkuKpjcmVhdGXlh73mlbDvvIzojrflj5bliLDlvZPliY3ooqvpgInmi6nlmajmiYDmjIflrprnmoTlhYPntKDjgIJxdWVyeVNlbGN0b3Lov5nkuKrmlrnms5XkuI3kvJrpgInmi6nmiYDmnInljLnphY3nmoTlhYPntKDvvIzogIzlj6rkvJrov5Tlm57nrKzkuIDkuKrljLnphY3nmoTlhYPntKDjgIJcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDBcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3RcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgICAgLy8g5bCG5bGe5oCn5YC85Y2z6aG16Z2i5YWD57Sg5a2Y5YKo5ZyoZWxlbWVudHPlr7nosaHkuK3lubbku6Xku5bku6znmoTlsZ7mgKflkI3lkb3lkI1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcbiAgICAgICAgLy8g5peg6K665piv55u05o6l55qE6aG16Z2i5YWD57Sg77yIPGRpdj7jgIE8cD7jgIE8c3Bhbj7vvInov5jmmK/pgInmi6nlmajlrZfnrKbkuLLvvIjnsbvlkI3jgIFJROOAgeagh+etvuWQje+8iemDveWtmOWcqGVsZW1lbnRz6YeM77yM5aW955So5YGa5ZCO57ut5pON5L2c6K6/6ZeuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGVudHJ5Ouavj+S4quWxnuaAp+eahOWAvO+8jOS5n+WwseaYr+WxnuaAp+aJgOWvueW6lOeahOWGheWuuTtrZXk65bGe5oCn55qE5ZCN56ew44CC5LyY54K55oyJ54Wn5bGe5oCn5ZCN77yI6KGo56S65YWD57Sg57G75Z6L5oiW54m55b6B77yJ5p2l6K6/6Zeu5a+55bqU55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCIXG4gICAgICAvLyDmr4/kuKrlsZ7mgKfnmoTlkI3np7DooajnpLrkuobkuIDnu4TlhYPntKDnmoTnsbvlnovmiJbnibnlvoHvvIjlpoIgYW5pbWF0aW9uVGl0bGVz44CBYW5pbWF0aW9uUGFyYWdyYXBocyDnrYnvvInvvIzogIzlr7nlupTnmoTlsZ7mgKflgLzmmK/nlKjov5nkupvpgInmi6nlmajpgInmi6nliLDnmoTlhYPntKDmiJblhYPntKDpm4blkIjjgIJcbiAgICB9KTtcbiAgICAvLyBlbnRyeeaYr+W9k+WJjeWFg+e0oCxmb3JlYWNo55So5LiN5LqG5o2i5oiQ5LqGbG93Y2FzaC9lYWNo5p2l6YGN5Y6GXG4gIH1cblxuICAvLyDlvIDlp4vlgZrliqjnlLvkuobvvZ7irIfvuI9cblxuICBzaG93KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBHU0FQ5bCx5pivamF2YeWKqOeUu+W6k+mHjOeahOS4gOS4quWKqOeUu+aViOaenFxuXG4gIH1cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2V3aGVlbChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVXaGVlbChldmVudCk7XG5cbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgKz0gbm9ybWFsaXplZC5waXhlbFk7IC8vVElQIG5vcm1hbGl6ZWQgd2hlZWxcblxuICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxuICAgIGNvbnNvbGUubG9nKGRlbHRhWSlcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGVsdGFZXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudD1HU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwwLjEpXG4gICAgLy8gaW50ZXJwb2xhdGXnm7jlvZPkuo5sZXJw77ya5L2/Y3VycmVudOWAvOWDj3RhcmdldOWAvOi/m+ihjOS4gOS4quW5s+a7kei/h+a4oe+9njAuMeaYr+aOp+WItuavlOS+i+WPguaVsOavj+S4gOatpeenu+WkmuWwke+8jOmAkOa4kOi2i+WQkeS6jnRhcmdldOWAvO+8jOWAvOi2iuWwj++8jOi2iuW5s+a7kVxuICAgIFxuICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF09YHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbCk7XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIwZTJjMzFjMDc1MzQyYzUwNTU3XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJQcmVmaXgiLCJlYWNoIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJ0aW1lbGluZSIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsIm9uTW91c2V3aGVlbCIsImV2ZW50IiwiZGVsdGFZIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsIndyYXBwZXIiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==