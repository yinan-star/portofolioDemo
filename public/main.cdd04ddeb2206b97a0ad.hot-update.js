"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Component.js":
/*!**********************************!*\
  !*** ./app/classes/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);
// 管理网页中的特定页面的动画、元素和交互效果,单单是为了preloader的页面继承

// 这个从node.js里看看有没有events

class Component extends (events__WEBPACK_IMPORTED_MODULE_0___default()) {
  // 果你想在一个文件中定义一些东西并在另一个文件中使用它，你需要将这些内容导出并在其他文件中导入
  constructor({
    // 构造函数在实例化时会为对象设置初始属性或状态。构造函数定义了对象在创建时应该具备的特征。在创建类的实例后，可以访问和操作这些属性，还可以调用与该类相关联的方法。
    element,
    elements
  }) {
    super();
    this.selector = element;
    this.selectorChildren = {
      ...elements
    };
    // selector用来存储传入这两个属性的引用，用来存储对页面元素的引用。element可能是一个页面的元素，elements可能是元素集合
    // ...element是展开运算符，用于快速复制对象或合并对象属性到一个新的对象中。创建了一个新的对象，该对象包含了 elements 中的所有属性
    this.create();
    this.addEventListeners();
  }
  create() {
    // create方法是使用 querySelector进行页面的元素选择和操作
    this.element = document.querySelector(this.selector);
    // 就是先调用上面的构造函数，将页面的element的值存到thi.selector的容器里，然后在执行这个create函数，获取到当前被选择器所指定的元素。querySelctor这个方法不会选择所有匹配的元素，而只会返回第一个匹配的元素。
    this.elements = {};
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

  addEventListeners() {}
  removeEventListeners() {}
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a9730dfdc1e11b4214d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZGQwNGRkZWIyMjA2Yjk3YTBhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0M7QUFDbEM7QUFDOEI7QUFFZixNQUFNRSxTQUFTLFNBQVNGLCtDQUFZLENBQUM7RUFDbEQ7RUFDQUcsV0FBV0EsQ0FBQztJQUFDO0lBQ1hDLE9BQU87SUFDUEM7RUFDRixDQUFDLEVBQ0Q7SUFDRSxLQUFLLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQ0MsUUFBUSxHQUFDRixPQUFPO0lBQ3JCLElBQUksQ0FBQ0csZ0JBQWdCLEdBQUM7TUFBQyxHQUFHRjtJQUFRLENBQUM7SUFDbkM7SUFDQTtJQUNBLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7RUFDMUI7RUFFQUQsTUFBTUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxJQUFJLENBQUNKLE9BQU8sR0FBQ00sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDTCxRQUFRLENBQUM7SUFDbEQ7SUFDQSxJQUFJLENBQUNELFFBQVEsR0FBQyxDQUFDLENBQUM7SUFFaEJKLGtEQUFJLENBQUMsSUFBSSxDQUFDTSxnQkFBZ0IsRUFBRSxDQUFDSyxLQUFLLEVBQUNDLEdBQUcsS0FBSztNQUN6QyxJQUNFRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBVyxJQUNuQ0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQVEsRUFDaEM7UUFDQSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdELEtBQUs7UUFDMUI7TUFDRixDQUFDLE1BQ0k7UUFDSCxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUNMLEtBQUssQ0FBQztRQUN2RDtRQUNFLElBQUksSUFBSSxDQUFDUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ25DLElBQUksQ0FBQ2IsUUFBUSxDQUFDUSxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQzNCLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUN4QyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUM7UUFDcEQ7TUFDRjtNQUNBO01BQ0E7SUFDRixDQUFDLENBQUM7SUFDRjtFQUNGOztFQUVGOztFQUVFSCxpQkFBaUJBLENBQUEsRUFBRSxDQUVuQjtFQUVBVSxvQkFBb0JBLENBQUEsRUFBRSxDQUN0QjtBQUNGOzs7Ozs7OztVQzNEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOeuoeeQhue9kemhteS4reeahOeJueWumumhtemdoueahOWKqOeUu+OAgeWFg+e0oOWSjOS6pOS6kuaViOaenCzljZXljZXmmK/kuLrkuoZwcmVsb2FkZXLnmoTpobXpnaLnu6fmib9cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcbi8vIOi/meS4quS7jm5vZGUuanPph4znnIvnnIvmnInmsqHmnIlldmVudHNcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioey8vIOaehOmAoOWHveaVsOWcqOWunuS+i+WMluaXtuS8muS4uuWvueixoeiuvue9ruWIneWni+WxnuaAp+aIlueKtuaAgeOAguaehOmAoOWHveaVsOWumuS5ieS6huWvueixoeWcqOWIm+W7uuaXtuW6lOivpeWFt+Wkh+eahOeJueW+geOAguWcqOWIm+W7uuexu+eahOWunuS+i+WQju+8jOWPr+S7peiuv+mXruWSjOaTjeS9nOi/meS6m+WxnuaAp++8jOi/mOWPr+S7peiwg+eUqOS4juivpeexu+ebuOWFs+iBlOeahOaWueazleOAglxuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHNcbiAgfSlcbiAge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc2VsZWN0b3I9ZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbj17Li4uZWxlbWVudHN9XG4gICAgLy8gc2VsZWN0b3LnlKjmnaXlrZjlgqjkvKDlhaXov5nkuKTkuKrlsZ7mgKfnmoTlvJXnlKjvvIznlKjmnaXlrZjlgqjlr7npobXpnaLlhYPntKDnmoTlvJXnlKjjgIJlbGVtZW505Y+v6IO95piv5LiA5Liq6aG16Z2i55qE5YWD57Sg77yMZWxlbWVudHPlj6/og73mmK/lhYPntKDpm4blkIhcbiAgICAvLyAuLi5lbGVtZW505piv5bGV5byA6L+Q566X56ym77yM55So5LqO5b+r6YCf5aSN5Yi25a+56LGh5oiW5ZCI5bm25a+56LGh5bGe5oCn5Yiw5LiA5Liq5paw55qE5a+56LGh5Lit44CC5Yib5bu65LqG5LiA5Liq5paw55qE5a+56LGh77yM6K+l5a+56LGh5YyF5ZCr5LqGIGVsZW1lbnRzIOS4reeahOaJgOacieWxnuaAp1xuICAgIHRoaXMuY3JlYXRlKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNyZWF0ZSgpey8vIGNyZWF0ZeaWueazleaYr+S9v+eUqCBxdWVyeVNlbGVjdG9y6L+b6KGM6aG16Z2i55qE5YWD57Sg6YCJ5oup5ZKM5pON5L2cXG4gICAgdGhpcy5lbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICAvLyDlsLHmmK/lhYjosIPnlKjkuIrpnaLnmoTmnoTpgKDlh73mlbDvvIzlsIbpobXpnaLnmoRlbGVtZW5055qE5YC85a2Y5YiwdGhpLnNlbGVjdG9y55qE5a655Zmo6YeM77yM54S25ZCO5Zyo5omn6KGM6L+Z5LiqY3JlYXRl5Ye95pWw77yM6I635Y+W5Yiw5b2T5YmN6KKr6YCJ5oup5Zmo5omA5oyH5a6a55qE5YWD57Sg44CCcXVlcnlTZWxjdG9y6L+Z5Liq5pa55rOV5LiN5Lya6YCJ5oup5omA5pyJ5Yy56YWN55qE5YWD57Sg77yM6ICM5Y+q5Lya6L+U5Zue56ys5LiA5Liq5Yy56YWN55qE5YWD57Sg44CCXG4gICAgdGhpcy5lbGVtZW50cz17fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSxrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3RcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgICAgLy8g5bCG5bGe5oCn5YC85Y2z6aG16Z2i5YWD57Sg5a2Y5YKo5ZyoZWxlbWVudHPlr7nosaHkuK3lubbku6Xku5bku6znmoTlsZ7mgKflkI3lkb3lkI1cbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG4gICAgICAvLyDml6DorrrmmK/nm7TmjqXnmoTpobXpnaLlhYPntKDvvIg8ZGl2PuOAgTxwPuOAgTxzcGFuPu+8iei/mOaYr+mAieaLqeWZqOWtl+espuS4su+8iOexu+WQjeOAgUlE44CB5qCH562+5ZCN77yJ6YO95a2Y5ZyoZWxlbWVudHPph4zvvIzlpb3nlKjlgZrlkI7nu63mk43kvZzorr/pl65cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGVudHJ5Ouavj+S4quWxnuaAp+eahOWAvO+8jOS5n+WwseaYr+WxnuaAp+aJgOWvueW6lOeahOWGheWuuTtrZXk65bGe5oCn55qE5ZCN56ew44CC5LyY54K55oyJ54Wn5bGe5oCn5ZCN77yI6KGo56S65YWD57Sg57G75Z6L5oiW54m55b6B77yJ5p2l6K6/6Zeu5a+55bqU55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCIXG4gICAgICAvLyDmr4/kuKrlsZ7mgKfnmoTlkI3np7DooajnpLrkuobkuIDnu4TlhYPntKDnmoTnsbvlnovmiJbnibnlvoHvvIjlpoIgYW5pbWF0aW9uVGl0bGVz44CBYW5pbWF0aW9uUGFyYWdyYXBocyDnrYnvvInvvIzogIzlr7nlupTnmoTlsZ7mgKflgLzmmK/nlKjov5nkupvpgInmi6nlmajpgInmi6nliLDnmoTlhYPntKDmiJblhYPntKDpm4blkIjjgIJcbiAgICB9KTtcbiAgICAvLyBlbnRyeeaYr+W9k+WJjeWFg+e0oCxmb3JlYWNo55So5LiN5LqG5o2i5oiQ5LqGbG93Y2FzaC9lYWNo5p2l6YGN5Y6GXG4gIH1cblxuLy8g5byA5aeL5YGa5Yqo55S75LqG772e4qyH77iPXG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgIFxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKXtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE5NzMwZGZkYzFlMTFiNDIxNGQyXCIpIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsImVhY2giLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==