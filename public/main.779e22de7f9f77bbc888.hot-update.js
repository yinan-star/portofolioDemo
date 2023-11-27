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
    return new Promise(resolve => {
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
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
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
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
/******/ 	__webpack_require__.h = () => ("f71cf4cf04cc8b31a856")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NzllMjJkZTdmOWY3N2JiYzg4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QjtBQUVPO0FBRWYsTUFBTUUsSUFBSTtFQUN2QjtFQUNBQyxXQUFXQSxDQUFDO0lBQUM7SUFDWEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDO0VBQ0YsQ0FBQyxFQUNEO0lBQ0UsSUFBSSxDQUFDQyxRQUFRLEdBQUNILE9BQU87SUFDckIsSUFBSSxDQUFDSSxnQkFBZ0IsR0FBQztNQUFDLEdBQUdIO0lBQVEsQ0FBQztJQUNuQztJQUNBOztJQUVBLElBQUksQ0FBQ0MsRUFBRSxHQUFDQSxFQUFFO0VBQ1o7RUFFQUcsTUFBTUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxJQUFJLENBQUNMLE9BQU8sR0FBQ00sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUM7SUFDbEQ7SUFDQSxJQUFJLENBQUNGLFFBQVEsR0FBQyxDQUFDLENBQUM7SUFFaEJKLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxnQkFBZ0IsRUFBRSxDQUFDSSxLQUFLLEVBQUNDLEdBQUcsS0FBSztNQUN6QyxJQUNFRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBVyxJQUNuQ0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQVEsRUFDaEM7UUFDQSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdELEtBQUs7UUFDMUI7TUFDRixDQUFDLE1BQ0k7UUFDSCxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUNMLEtBQUssQ0FBQztRQUN2RDtRQUNFLElBQUksSUFBSSxDQUFDUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ25DLElBQUksQ0FBQ2IsUUFBUSxDQUFDUSxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQzNCLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUN4QyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUM7UUFDcEQ7TUFDRjtNQUNBO01BQ0E7SUFDRixDQUFDLENBQUM7SUFDRjtFQUNGOztFQUVGOztFQUVFTyxJQUFJQSxDQUFBLEVBQUU7SUFDSixPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQzNCLElBQUksQ0FBQ0MsV0FBVyxHQUFHdEIsNENBQUksQ0FBQ3VCLFFBQVEsQ0FBQyxDQUFDO01BRWxDLElBQUksQ0FBQ0QsV0FBVyxDQUFDRSxNQUFNLENBQ3JCLElBQUksQ0FBQ3BCLE9BQU8sRUFDWjtRQUNFcUIsU0FBUyxFQUFFO01BQ2IsQ0FBQyxFQUNEO1FBQ0VBLFNBQVMsRUFBRTtNQUNiLENBQ0YsQ0FBQztNQUVELElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxJQUFJLENBQUMsTUFBTTtRQUMxQixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7UUFFeEJOLE9BQU8sQ0FBQyxDQUFDO01BQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0E7RUFFSjs7RUFFQU8sSUFBSUEsQ0FBQSxFQUFFO0lBQ0osT0FBTyxJQUFJUixPQUFPLENBQUNDLE9BQU8sSUFBRztNQUMzQixJQUFJLENBQUNRLG9CQUFvQixDQUFDLENBQUM7TUFFM0IsSUFBSSxDQUFDQyxZQUFZLEdBQUc5Qiw0Q0FBSSxDQUFDdUIsUUFBUSxDQUFDLENBQUM7TUFFbkMsSUFBSSxDQUFDTyxZQUFZLENBQUNDLEVBQUUsQ0FBQyxJQUFJLENBQUMzQixPQUFPLEVBQUU7UUFDakNxQixTQUFTLEVBQUUsQ0FBQztRQUNaTyxVQUFVLEVBQUVYO01BQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQVksWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQ2xCOztJQUVBO0VBQ0Y7O0VBRUFQLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2xCYixNQUFNLENBQUN1QixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDSixZQUFZLENBQUM7RUFDMUQ7RUFFQUosb0JBQW9CQSxDQUFBLEVBQUc7SUFDckJmLE1BQU0sQ0FBQ3dCLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNMLFlBQVksQ0FBQztFQUM3RDtBQUVGOzs7Ozs7OztVQ3hHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnrqHnkIbnvZHpobXkuK3nmoTnibnlrprpobXpnaLnmoTliqjnlLvjgIHlhYPntKDlkozkuqTkupLmlYjmnpxcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdle1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioey8vIOaehOmAoOWHveaVsOWcqOWunuS+i+WMluaXtuS8muS4uuWvueixoeiuvue9ruWIneWni+WxnuaAp+aIlueKtuaAgeOAguaehOmAoOWHveaVsOWumuS5ieS6huWvueixoeWcqOWIm+W7uuaXtuW6lOivpeWFt+Wkh+eahOeJueW+geOAguWcqOWIm+W7uuexu+eahOWunuS+i+WQju+8jOWPr+S7peiuv+mXruWSjOaTjeS9nOi/meS6m+WxnuaAp++8jOi/mOWPr+S7peiwg+eUqOS4juivpeexu+ebuOWFs+iBlOeahOaWueazleOAglxuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHMsXG4gICAgaWRcbiAgfSlcbiAge1xuICAgIHRoaXMuc2VsZWN0b3I9ZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbj17Li4uZWxlbWVudHN9XG4gICAgLy8gc2VsZWN0b3LnlKjmnaXlrZjlgqjkvKDlhaXov5nkuKTkuKrlsZ7mgKfnmoTlvJXnlKjvvIznlKjmnaXlrZjlgqjlr7npobXpnaLlhYPntKDnmoTlvJXnlKjjgIJlbGVtZW505Y+v6IO95piv5LiA5Liq6aG16Z2i55qE5YWD57Sg77yMZWxlbWVudHPlj6/og73mmK/lhYPntKDpm4blkIhcbiAgICAvLyAuLi5lbGVtZW505piv5bGV5byA6L+Q566X56ym77yM55So5LqO5b+r6YCf5aSN5Yi25a+56LGh5oiW5ZCI5bm25a+56LGh5bGe5oCn5Yiw5LiA5Liq5paw55qE5a+56LGh5Lit44CC5Yib5bu65LqG5LiA5Liq5paw55qE5a+56LGh77yM6K+l5a+56LGh5YyF5ZCr5LqGIGVsZW1lbnRzIOS4reeahOaJgOacieWxnuaAp1xuXG4gICAgdGhpcy5pZD1pZFxuICB9XG5cbiAgY3JlYXRlKCl7Ly8gY3JlYXRl5pa55rOV5piv5L2/55SoIHF1ZXJ5U2VsZWN0b3Lov5vooYzpobXpnaLnmoTlhYPntKDpgInmi6nlkozmk43kvZxcbiAgICB0aGlzLmVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIC8vIOWwseaYr+WFiOiwg+eUqOS4iumdoueahOaehOmAoOWHveaVsO+8jOWwhumhtemdoueahGVsZW1lbnTnmoTlgLzlrZjliLB0aGkuc2VsZWN0b3LnmoTlrrnlmajph4zvvIznhLblkI7lnKjmiafooYzov5nkuKpjcmVhdGXlh73mlbDvvIzojrflj5bliLDlvZPliY3ooqvpgInmi6nlmajmiYDmjIflrprnmoTlhYPntKDjgIJxdWVyeVNlbGN0b3Lov5nkuKrmlrnms5XkuI3kvJrpgInmi6nmiYDmnInljLnphY3nmoTlhYPntKDvvIzogIzlj6rkvJrov5Tlm57nrKzkuIDkuKrljLnphY3nmoTlhYPntKDjgIJcbiAgICB0aGlzLmVsZW1lbnRzPXt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgICAvLyDlsIblsZ7mgKflgLzljbPpobXpnaLlhYPntKDlrZjlgqjlnKhlbGVtZW50c+WvueixoeS4reW5tuS7peS7luS7rOeahOWxnuaAp+WQjeWRveWQjVxuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcbiAgICAgIC8vIOaXoOiuuuaYr+ebtOaOpeeahOmhtemdouWFg+e0oO+8iDxkaXY+44CBPHA+44CBPHNwYW4+77yJ6L+Y5piv6YCJ5oup5Zmo5a2X56ym5Liy77yI57G75ZCN44CBSUTjgIHmoIfnrb7lkI3vvInpg73lrZjlnKhlbGVtZW50c+mHjO+8jOWlveeUqOWBmuWQjue7reaTjeS9nOiuv+mXrlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZW50cnk65q+P5Liq5bGe5oCn55qE5YC877yM5Lmf5bCx5piv5bGe5oCn5omA5a+55bqU55qE5YaF5a65O2tleTrlsZ7mgKfnmoTlkI3np7DjgILkvJjngrnmjInnhaflsZ7mgKflkI3vvIjooajnpLrlhYPntKDnsbvlnovmiJbnibnlvoHvvInmnaXorr/pl67lr7nlupTnmoTlhYPntKDmiJblhYPntKDpm4blkIhcbiAgICAgIC8vIOavj+S4quWxnuaAp+eahOWQjeensOihqOekuuS6huS4gOe7hOWFg+e0oOeahOexu+Wei+aIlueJueW+ge+8iOWmgiBhbmltYXRpb25UaXRsZXPjgIFhbmltYXRpb25QYXJhZ3JhcGhzIOetie+8ie+8jOiAjOWvueW6lOeahOWxnuaAp+WAvOaYr+eUqOi/meS6m+mAieaLqeWZqOmAieaLqeWIsOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiOOAglxuICAgIH0pO1xuICAgIC8vIGVudHJ55piv5b2T5YmN5YWD57SgLGZvcmVhY2jnlKjkuI3kuobmjaLmiJDkuoZsb3djYXNoL2VhY2jmnaXpgY3ljoZcbiAgfVxuXG4vLyDlvIDlp4vlgZrliqjnlLvkuobvvZ7irIfvuI9cblxuICBzaG93KCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgICAvLyBHU0FQ5bCx5pivamF2YeWKqOeUu+W6k+mHjOeahOS4gOS4quWKqOeUu+aViOaenFxuICBcbiAgfVxuXG4gIGhpZGUoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PntcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2V3aGVlbChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVXaGVlbChldmVudCk7XG5cbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgKz0gbm9ybWFsaXplZC5waXhlbFk7IC8vVElQIG5vcm1hbGl6ZWQgd2hlZWxcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNld2hlZWwpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2V3aGVlbCk7XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3MWNmNGNmMDRjYzhiMzFhODU2XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJlYWNoIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJ0aW1lbGluZSIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsIm9uTW91c2V3aGVlbCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==