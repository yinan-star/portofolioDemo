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
      last: 0
      // limit: 0,
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
    console.log(this.scroll.target);
    this.scroll.target += deltaY;
    console.log(this.scroll.target);
  }
  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    // interpolate相当于lerp：使current值像target值进行一个平滑过渡～0.1是控制比例参数每一步移多少，逐渐趋向于target值，值越小，越平滑
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
/******/ 	__webpack_require__.h = () => ("64ad11288a18ef259d0b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWixZQUFZLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN4RTtBQUVGOzs7Ozs7OztVQzdIQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgLy8g5p6c5L2g5oOz5Zyo5LiA5Liq5paH5Lu25Lit5a6a5LmJ5LiA5Lqb5Lic6KW/5bm25Zyo5Y+m5LiA5Liq5paH5Lu25Lit5L2/55So5a6D77yM5L2g6ZyA6KaB5bCG6L+Z5Lqb5YaF5a655a+85Ye65bm25Zyo5YW25LuW5paH5Lu25Lit5a+85YWlXG4gIGNvbnN0cnVjdG9yKHsvLyDmnoTpgKDlh73mlbDlnKjlrp7kvovljJbml7bkvJrkuLrlr7nosaHorr7nva7liJ3lp4vlsZ7mgKfmiJbnirbmgIHjgILmnoTpgKDlh73mlbDlrprkuYnkuoblr7nosaHlnKjliJvlu7rml7blupTor6XlhbflpIfnmoTnibnlvoHjgILlnKjliJvlu7rnsbvnmoTlrp7kvovlkI7vvIzlj6/ku6Xorr/pl67lkozmk43kvZzov5nkupvlsZ7mgKfvvIzov5jlj6/ku6XosIPnlKjkuI7or6Xnsbvnm7jlhbPogZTnmoTmlrnms5XjgIJcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnRzLFxuICAgIGlkXG4gIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHsgLi4uZWxlbWVudHMgfVxuICAgIC8vIHNlbGVjdG9y55So5p2l5a2Y5YKo5Lyg5YWl6L+Z5Lik5Liq5bGe5oCn55qE5byV55So77yM55So5p2l5a2Y5YKo5a+56aG16Z2i5YWD57Sg55qE5byV55So44CCZWxlbWVudOWPr+iDveaYr+S4gOS4qumhtemdoueahOWFg+e0oO+8jGVsZW1lbnRz5Y+v6IO95piv5YWD57Sg6ZuG5ZCIXG4gICAgLy8gLi4uZWxlbWVudOaYr+WxleW8gOi/kOeul+espu+8jOeUqOS6juW/q+mAn+WkjeWItuWvueixoeaIluWQiOW5tuWvueixoeWxnuaAp+WIsOS4gOS4quaWsOeahOWvueixoeS4reOAguWIm+W7uuS6huS4gOS4quaWsOeahOWvueixoe+8jOivpeWvueixoeWMheWQq+S6hiBlbGVtZW50cyDkuK3nmoTmiYDmnInlsZ7mgKdcblxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKTtcblxuICB9XG5cbiAgY3JlYXRlKCkgey8vIGNyZWF0ZeaWueazleaYr+S9v+eUqCBxdWVyeVNlbGVjdG9y6L+b6KGM6aG16Z2i55qE5YWD57Sg6YCJ5oup5ZKM5pON5L2cXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIC8vIOWwseaYr+WFiOiwg+eUqOS4iumdoueahOaehOmAoOWHveaVsO+8jOWwhumhtemdoueahGVsZW1lbnTnmoTlgLzlrZjliLB0aGkuc2VsZWN0b3LnmoTlrrnlmajph4zvvIznhLblkI7lnKjmiafooYzov5nkuKpjcmVhdGXlh73mlbDvvIzojrflj5bliLDlvZPliY3ooqvpgInmi6nlmajmiYDmjIflrprnmoTlhYPntKDjgIJxdWVyeVNlbGN0b3Lov5nkuKrmlrnms5XkuI3kvJrpgInmi6nmiYDmnInljLnphY3nmoTlhYPntKDvvIzogIzlj6rkvJrov5Tlm57nrKzkuIDkuKrljLnphY3nmoTlhYPntKDjgIJcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICAvLyBsaW1pdDogMCxcbiAgICB9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICAgIC8vIOWwhuWxnuaAp+WAvOWNs+mhtemdouWFg+e0oOWtmOWCqOWcqGVsZW1lbnRz5a+56LGh5Lit5bm25Lul5LuW5Lus55qE5bGe5oCn5ZCN5ZG95ZCNXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG4gICAgICAgIC8vIOaXoOiuuuaYr+ebtOaOpeeahOmhtemdouWFg+e0oO+8iDxkaXY+44CBPHA+44CBPHNwYW4+77yJ6L+Y5piv6YCJ5oup5Zmo5a2X56ym5Liy77yI57G75ZCN44CBSUTjgIHmoIfnrb7lkI3vvInpg73lrZjlnKhlbGVtZW50c+mHjO+8jOWlveeUqOWBmuWQjue7reaTjeS9nOiuv+mXrlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbnRyeTrmr4/kuKrlsZ7mgKfnmoTlgLzvvIzkuZ/lsLHmmK/lsZ7mgKfmiYDlr7nlupTnmoTlhoXlrrk7a2V5OuWxnuaAp+eahOWQjeensOOAguS8mOeCueaMieeFp+WxnuaAp+WQje+8iOihqOekuuWFg+e0oOexu+Wei+aIlueJueW+ge+8ieadpeiuv+mXruWvueW6lOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiFxuICAgICAgLy8g5q+P5Liq5bGe5oCn55qE5ZCN56ew6KGo56S65LqG5LiA57uE5YWD57Sg55qE57G75Z6L5oiW54m55b6B77yI5aaCIGFuaW1hdGlvblRpdGxlc+OAgWFuaW1hdGlvblBhcmFncmFwaHMg562J77yJ77yM6ICM5a+55bqU55qE5bGe5oCn5YC85piv55So6L+Z5Lqb6YCJ5oup5Zmo6YCJ5oup5Yiw55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCI44CCXG4gICAgfSk7XG4gICAgLy8gZW50cnnmmK/lvZPliY3lhYPntKAsZm9yZWFjaOeUqOS4jeS6huaNouaIkOS6hmxvd2Nhc2gvZWFjaOadpemBjeWOhlxuICB9XG5cbiAgLy8g5byA5aeL5YGa5Yqo55S75LqG772e4qyH77iPXG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gR1NBUOWwseaYr2phdmHliqjnlLvlupPph4znmoTkuIDkuKrliqjnlLvmlYjmnpxcblxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNld2hlZWwoZXZlbnQpIHtcbiAgICAvLyBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuXG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0ICs9IG5vcm1hbGl6ZWQucGl4ZWxZOyAvL1RJUCBub3JtYWxpemVkIHdoZWVsXG5cbiAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnRcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbC50YXJnZXQpXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50PUdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LDAuMSlcbiAgICAvLyBpbnRlcnBvbGF0ZeebuOW9k+S6jmxlcnDvvJrkvb9jdXJyZW505YC85YOPdGFyZ2V05YC86L+b6KGM5LiA5Liq5bmz5ruR6L+H5rih772eMC4x5piv5o6n5Yi25q+U5L6L5Y+C5pWw5q+P5LiA5q2l56e75aSa5bCR77yM6YCQ5riQ6LaL5ZCR5LqOdGFyZ2V05YC877yM5YC86LaK5bCP77yM6LaK5bmz5ruRXG4gICAgaWYodGhpcy5lbGVtZW50cy53cmFwcGVyKXtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF09YHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwuYmluZCh0aGlzKSk7XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY0YWQxMTI4OGExOGVmMjU5ZDBiXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJQcmVmaXgiLCJlYWNoIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsInRpbWVsaW5lIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0IiwidG8iLCJvbkNvbXBsZXRlIiwib25Nb3VzZXdoZWVsIiwiZXZlbnQiLCJkZWx0YVkiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsIndyYXBwZXIiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=