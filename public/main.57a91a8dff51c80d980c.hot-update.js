"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");




class Preloader extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        images: document.querySelectorAll('img')
      }
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    // 好像是在span里面做遮罩
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    this.elements.titleSpans = this.elements.title.querySelectorAll('span span');
    this.length = 0;
    console.log(this.element, this.elements);
    this.createLoader();
  }
  createLoader() {
    // 创建加载页后直接奔着about page并且将about图片都显示出来
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element);
      element.src = element.getAttribute('data-src');
    });
  }
  onAssetLoaded(image) {
    // 加载页的计算响应公式     
    this.length += 1;
    // 每load一次，这个当前加载的进度会加一
    const percent = this.length / this.elements.images.length;
    this.elements.number.innerHTML = `${Math.round(percent * 100)}%`;
    // 这个是加载完所有图像后的加载页的number的计算公式

    if (percent === 1) {
      this.onloaded();
    }
  }
  onloaded() {
    // 控制加载页等待多久进入主页及动画
    return new Promise(resolve => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        delay: 2
        // 控制加载页等待多久进入主页
      });

      this.animateOut.to(this.elements.titleSpans, {
        // 字体设计逐渐消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      });

      // this.animateOut.to(this.element,{
      //     // 让preloader消失
      //     autoAlpha:0
      // })
      this.animateOut.call(_ => {
        // 进入主页
        // this.emit('completed')
      });
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee7ffcbf8b3eb86a4f77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDbkMsT0FBTyxDQUFDb0MsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDckMsT0FBTyxDQUFDO0VBQ3JEO0FBQ0o7Ozs7Ozs7O1VDckZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydHtzcGxpdH0gZnJvbSd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZWxlbWVudDonLnByZWxvYWRlcicsXG4gICAgICAgICAgICBlbGVtZW50czp7XG4gICAgICAgICAgICAgICAgdGl0bGU6Jy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICAgICAgICAgIG51bWJlcjonLnByZWxvYWRlcl9fbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBpbWFnZXM6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzcGxpdCh7XG4gICAgICAgICAgICBlbGVtZW50OnRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICAgICAgICBleHByZXNzaW9uOic8YnI+J1xuICAgICAgICB9KVxuICAgICAgICAvLyDlpb3lg4/mmK/lnKhzcGFu6YeM6Z2i5YGa6YGu572pXG4gICAgICAgIHNwbGl0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6dGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246Jzxicj4nXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuXG4gICAgICAgIHRoaXMubGVuZ3RoID0wXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCx0aGlzLmVsZW1lbnRzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgICB9XG5cbiAgICBjcmVhdGVMb2FkZXIoKXsgLy8g5Yib5bu65Yqg6L296aG15ZCO55u05o6l5aWU552AYWJvdXQgcGFnZeW5tuS4lOWwhmFib3V05Zu+54mH6YO95pi+56S65Ye65p2lXG4gICAgICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsZWxlbWVudCA9PntcbiAgICAgICAgICAgIGVsZW1lbnQub25sb2FkPV8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXG4gICAgICAgICAgICBlbGVtZW50LnNyYz1lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSAgICAgICAgICAgXG4gICAgICAgIH0pIFxuICAgICAgIFxuICAgIH1cblxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2Upey8vIOWKoOi9vemhteeahOiuoeeul+WTjeW6lOWFrOW8jyAgICAgXG4gICAgICAgIHRoaXMubGVuZ3RoICs9MVxuICAgICAgICAvLyDmr49sb2Fk5LiA5qyh77yM6L+Z5Liq5b2T5YmN5Yqg6L2955qE6L+b5bqm5Lya5Yqg5LiAXG4gICAgICAgIGNvbnN0IHBlcmNlbnQ9dGhpcy5sZW5ndGgvdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTD1gJHtNYXRoLnJvdW5kKHBlcmNlbnQqMTAwKX0lYFxuICAgICAgICAvLyDov5nkuKrmmK/liqDovb3lrozmiYDmnInlm77lg4/lkI7nmoTliqDovb3pobXnmoRudW1iZXLnmoTorqHnrpflhazlvI9cblxuICAgICAgICBpZihwZXJjZW50ID09PTEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm9ubG9hZGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ubG9hZGVkKCl7Ly8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG15Y+K5Yqo55S7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICAgICAgZGVsYXk6MlxuICAgICAgICAgICAgICAgIC8vIOaOp+WItuWKoOi9vemhteetieW+heWkmuS5hei/m+WFpeS4u+mhtVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyx7XG4gICAgICAgICAgICAgICAgLy8g5a2X5L2T6K6+6K6h6YCQ5riQ5raI5aSxXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHN0YWdnZXI6MC4xLFxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQse1xuICAgICAgICAgICAgLy8gICAgIC8vIOiuqXByZWxvYWRlcua2iOWksVxuICAgICAgICAgICAgLy8gICAgIGF1dG9BbHBoYTowXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB7XG4gICAgICAgICAgICAgICAgLy8g6L+b5YWl5Li76aG1XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWU3ZmZjYmY4YjNlYjg2YTRmNzdcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZWFjaCIsIkdTQVAiLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVMb2FkZXIiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9ubG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwidGltZWxpbmUiLCJkZWxheSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInkiLCJjYWxsIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=