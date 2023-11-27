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
    this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight;
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
/******/ 	__webpack_require__.h = () => ("536674393fc8830d4f7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTyxLQUFLLENBQUMsSUFBSSxDQUFDekMsZUFBZSxDQUFDLEdBQUUsZUFBYyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsT0FBUSxLQUFJO0lBQzNGO0VBRUY7RUFFQW1CLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2xCYixNQUFNLENBQUMrQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDWixZQUFZLENBQUNhLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNyRTtFQUVBakIsb0JBQW9CQSxDQUFBLEVBQUc7SUFDckJmLE1BQU0sQ0FBQ2lDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNkLFlBQVksQ0FBQ2EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3hFO0FBRUY7Ozs7Ozs7O1VDOUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOeuoeeQhue9kemhteS4reeahOeJueWumumhtemdoueahOWKqOeUu+OAgeWFg+e0oOWSjOS6pOS6kuaViOaenFxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioey8vIOaehOmAoOWHveaVsOWcqOWunuS+i+WMluaXtuS8muS4uuWvueixoeiuvue9ruWIneWni+WxnuaAp+aIlueKtuaAgeOAguaehOmAoOWHveaVsOWumuS5ieS6huWvueixoeWcqOWIm+W7uuaXtuW6lOivpeWFt+Wkh+eahOeJueW+geOAguWcqOWIm+W7uuexu+eahOWunuS+i+WQju+8jOWPr+S7peiuv+mXruWSjOaTjeS9nOi/meS6m+WxnuaAp++8jOi/mOWPr+S7peiwg+eUqOS4juivpeexu+ebuOWFs+iBlOeahOaWueazleOAglxuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHMsXG4gICAgaWRcbiAgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9XG4gICAgLy8gc2VsZWN0b3LnlKjmnaXlrZjlgqjkvKDlhaXov5nkuKTkuKrlsZ7mgKfnmoTlvJXnlKjvvIznlKjmnaXlrZjlgqjlr7npobXpnaLlhYPntKDnmoTlvJXnlKjjgIJlbGVtZW505Y+v6IO95piv5LiA5Liq6aG16Z2i55qE5YWD57Sg77yMZWxlbWVudHPlj6/og73mmK/lhYPntKDpm4blkIhcbiAgICAvLyAuLi5lbGVtZW505piv5bGV5byA6L+Q566X56ym77yM55So5LqO5b+r6YCf5aSN5Yi25a+56LGh5oiW5ZCI5bm25a+56LGh5bGe5oCn5Yiw5LiA5Liq5paw55qE5a+56LGh5Lit44CC5Yib5bu65LqG5LiA5Liq5paw55qE5a+56LGh77yM6K+l5a+56LGh5YyF5ZCr5LqGIGVsZW1lbnRzIOS4reeahOaJgOacieWxnuaAp1xuXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpO1xuXG4gIH1cblxuICBjcmVhdGUoKSB7Ly8gY3JlYXRl5pa55rOV5piv5L2/55SoIHF1ZXJ5U2VsZWN0b3Lov5vooYzpobXpnaLnmoTlhYPntKDpgInmi6nlkozmk43kvZxcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgLy8g5bCx5piv5YWI6LCD55So5LiK6Z2i55qE5p6E6YCg5Ye95pWw77yM5bCG6aG16Z2i55qEZWxlbWVudOeahOWAvOWtmOWIsHRoaS5zZWxlY3RvcueahOWuueWZqOmHjO+8jOeEtuWQjuWcqOaJp+ihjOi/meS4qmNyZWF0ZeWHveaVsO+8jOiOt+WPluWIsOW9k+WJjeiiq+mAieaLqeWZqOaJgOaMh+WumueahOWFg+e0oOOAgnF1ZXJ5U2VsY3Rvcui/meS4quaWueazleS4jeS8mumAieaLqeaJgOacieWMuemFjeeahOWFg+e0oO+8jOiAjOWPquS8mui/lOWbnuesrOS4gOS4quWMuemFjeeahOWFg+e0oOOAglxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICAgIGxpbWl0OiAwLFxuICAgIH07XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3RcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgICAgLy8g5bCG5bGe5oCn5YC85Y2z6aG16Z2i5YWD57Sg5a2Y5YKo5ZyoZWxlbWVudHPlr7nosaHkuK3lubbku6Xku5bku6znmoTlsZ7mgKflkI3lkb3lkI1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcbiAgICAgICAgLy8g5peg6K665piv55u05o6l55qE6aG16Z2i5YWD57Sg77yIPGRpdj7jgIE8cD7jgIE8c3Bhbj7vvInov5jmmK/pgInmi6nlmajlrZfnrKbkuLLvvIjnsbvlkI3jgIFJROOAgeagh+etvuWQje+8iemDveWtmOWcqGVsZW1lbnRz6YeM77yM5aW955So5YGa5ZCO57ut5pON5L2c6K6/6ZeuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGVudHJ5Ouavj+S4quWxnuaAp+eahOWAvO+8jOS5n+WwseaYr+WxnuaAp+aJgOWvueW6lOeahOWGheWuuTtrZXk65bGe5oCn55qE5ZCN56ew44CC5LyY54K55oyJ54Wn5bGe5oCn5ZCN77yI6KGo56S65YWD57Sg57G75Z6L5oiW54m55b6B77yJ5p2l6K6/6Zeu5a+55bqU55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCIXG4gICAgICAvLyDmr4/kuKrlsZ7mgKfnmoTlkI3np7DooajnpLrkuobkuIDnu4TlhYPntKDnmoTnsbvlnovmiJbnibnlvoHvvIjlpoIgYW5pbWF0aW9uVGl0bGVz44CBYW5pbWF0aW9uUGFyYWdyYXBocyDnrYnvvInvvIzogIzlr7nlupTnmoTlsZ7mgKflgLzmmK/nlKjov5nkupvpgInmi6nlmajpgInmi6nliLDnmoTlhYPntKDmiJblhYPntKDpm4blkIjjgIJcbiAgICB9KTtcbiAgICAvLyBlbnRyeeaYr+W9k+WJjeWFg+e0oCxmb3JlYWNo55So5LiN5LqG5o2i5oiQ5LqGbG93Y2FzaC9lYWNo5p2l6YGN5Y6GXG4gIH1cblxuICAvLyDlvIDlp4vlgZrliqjnlLvkuobvvZ7irIfvuI9cblxuICBzaG93KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBHU0FQ5bCx5pivamF2YeWKqOeUu+W6k+mHjOeahOS4gOS4quWKqOeUu+aViOaenFxuXG4gIH1cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgb25Nb3VzZXdoZWVsKGV2ZW50KSB7XG4gICAgLy8gY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcblxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBub3JtYWxpemVkLnBpeGVsWTsgLy9USVAgbm9ybWFsaXplZCB3aGVlbFxuXG4gICAgY29uc3QgeyBkZWx0YVkgfSA9IGV2ZW50XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JvbGwubGltaXQgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50PUdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LDAuMSlcbiAgICAvLyBpbnRlcnBvbGF0ZeebuOW9k+S6jmxlcnDvvJrkvb9jdXJyZW505YC85YOPdGFyZ2V05YC86L+b6KGM5LiA5Liq5bmz5ruR6L+H5rih772eMC4x5piv5o6n5Yi25q+U5L6L5Y+C5pWw5q+P5LiA5q2l56e75aSa5bCR77yM6YCQ5riQ6LaL5ZCR5LqOdGFyZ2V05YC877yM5YC86LaK5bCP77yM6LaK5bmz5ruRXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcbiAgICAgIDAsXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxuICAgICk7XG4gICAgLy8g55uu5qCH5LiN6IO95bCP5LqOMOWkp+S6jmxpbWl0XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZih0aGlzLmVsZW1lbnRzLndyYXBwZXIpe1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XT1gdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9XG4gICAgXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZXdoZWVsLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTM2Njc0MzkzZmM4ODMwZDRmN2ZcIikiXSwibmFtZXMiOlsiR1NBUCIsIlByZWZpeCIsImVhY2giLCJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsInRyYW5zZm9ybVByZWZpeCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJ0aW1lbGluZSIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsIm9uTW91c2V3aGVlbCIsImV2ZW50IiwiZGVsdGFZIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1cGRhdGUiLCJ1dGlscyIsImludGVycG9sYXRlIiwiY2xhbXAiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=