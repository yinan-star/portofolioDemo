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
        numberText: '.preloader__number__text',
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
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
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
        // 字体设计逐渐向下消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      });
      this.animateOut.to(this.elements.numberText, {
        // 数字设计逐渐向下消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      }, '-=1.4');
      this.animateOut.to(this.element, {
        // 让preloader沿Y轴向上消失
        duration: 1.5,
        ease: 'expo.out',
        scaleY: 0,
        transformOrigin: '100% 100%'
      }, '-=1');
      this.animateOut.call(_ => {
        // 进入主页
        this.emit('completed');
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
/******/ 	__webpack_require__.h = () => ("e219b9ae5bc54fcab399")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOWMxOGQ2OWU3Y2U0ODZhMDA1ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLFVBQVUsRUFBQywwQkFBMEI7UUFDckNDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUZWLGlEQUFLLENBQUM7TUFDRkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCTSxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFDRjtJQUNBWCxpREFBSyxDQUFDO01BQ0ZHLE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSztNQUMzQk0sVUFBVSxFQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUCxRQUFRLENBQUNRLFVBQVUsR0FBRyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDSyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFFNUUsSUFBSSxDQUFDRyxNQUFNLEdBQUUsQ0FBQztJQUVkLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFFO0lBQUU7SUFDWmhCLGtEQUFJLENBQUMsSUFBSSxDQUFDTSxRQUFRLENBQUNJLE1BQU0sRUFBQ0wsT0FBTyxJQUFHO01BQ2hDQSxPQUFPLENBQUNZLE1BQU0sR0FBQ0MsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsYUFBYSxDQUFDZCxPQUFPLENBQUM7TUFDL0NBLE9BQU8sQ0FBQ2UsR0FBRyxHQUFDZixPQUFPLENBQUNnQixZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ2hELENBQUMsQ0FBQztFQUVOO0VBRUFGLGFBQWFBLENBQUNHLEtBQUssRUFBQztJQUFDO0lBQ2pCLElBQUksQ0FBQ1AsTUFBTSxJQUFHLENBQUM7SUFDZjtJQUNBLE1BQU1RLE9BQU8sR0FBQyxJQUFJLENBQUNSLE1BQU0sR0FBQyxJQUFJLENBQUNULFFBQVEsQ0FBQ0ksTUFBTSxDQUFDSyxNQUFNO0lBQ3JELElBQUksQ0FBQ1QsUUFBUSxDQUFDRyxVQUFVLENBQUNlLFNBQVMsR0FBRSxHQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsT0FBTyxHQUFDLEdBQUcsQ0FBRSxHQUFFO0lBQ2hFOztJQUVBLElBQUdBLE9BQU8sS0FBSSxDQUFDLEVBQ2Y7TUFDSSxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDO0lBQ25CO0VBQ0o7RUFFQUEsUUFBUUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQ3pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHN0IsNENBQUksQ0FBQzhCLFFBQVEsQ0FBQztRQUM1QkMsS0FBSyxFQUFDO1FBQ047TUFDSixDQUFDLENBQUM7O01BRUYsSUFBSSxDQUFDRixVQUFVLENBQUNHLEVBQUUsQ0FBQyxJQUFJLENBQUMzQixRQUFRLENBQUNRLFVBQVUsRUFBQztRQUN4QztRQUNBb0IsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJDLE9BQU8sRUFBQyxHQUFHO1FBQ1hDLENBQUMsRUFBRTtNQUNQLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ1AsVUFBVSxDQUFDRyxFQUFFLENBQUMsSUFBSSxDQUFDM0IsUUFBUSxDQUFDRyxVQUFVLEVBQUM7UUFDeEM7UUFDQXlCLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxVQUFVO1FBQ2hCQyxPQUFPLEVBQUMsR0FBRztRQUNYQyxDQUFDLEVBQUU7TUFDUCxDQUFDLEVBQUMsT0FBTyxDQUFDO01BRVYsSUFBSSxDQUFDUCxVQUFVLENBQUNHLEVBQUUsQ0FBQyxJQUFJLENBQUM1QixPQUFPLEVBQUM7UUFDNUI7UUFDQTZCLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxVQUFVO1FBQ2hCRyxNQUFNLEVBQUMsQ0FBQztRQUNSQyxlQUFlLEVBQUM7TUFFcEIsQ0FBQyxFQUFDLEtBQUssQ0FBQztNQUNSLElBQUksQ0FBQ1QsVUFBVSxDQUFDVSxJQUFJLENBQUN0QixDQUFDLElBQUk7UUFDdEI7UUFDQSxJQUFJLENBQUN1QixJQUFJLENBQUMsV0FBVyxDQUFDO01BQzFCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBRUFDLE9BQU9BLENBQUEsRUFBRTtJQUNMLElBQUksQ0FBQ3JDLE9BQU8sQ0FBQ3NDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3ZDLE9BQU8sQ0FBQztFQUNyRDtBQUNKOzs7Ozs7OztVQ2pHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnR7c3BsaXR9IGZyb20ndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6Jy5wcmVsb2FkZXInLFxuICAgICAgICAgICAgZWxlbWVudHM6e1xuICAgICAgICAgICAgICAgIHRpdGxlOicucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgICAgICAgICBudW1iZXI6Jy5wcmVsb2FkZXJfX251bWJlcicsXG4gICAgICAgICAgICAgICAgbnVtYmVyVGV4dDonLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0JyxcbiAgICAgICAgICAgICAgICBpbWFnZXM6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzcGxpdCh7XG4gICAgICAgICAgICBlbGVtZW50OnRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICAgICAgICBleHByZXNzaW9uOic8YnI+J1xuICAgICAgICB9KVxuICAgICAgICAvLyDlpb3lg4/mmK/lnKhzcGFu6YeM6Z2i5YGa6YGu572pXG4gICAgICAgIHNwbGl0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6dGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246Jzxicj4nXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuXG4gICAgICAgIHRoaXMubGVuZ3RoID0wXG5cbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICAgIH1cblxuICAgIGNyZWF0ZUxvYWRlcigpeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQ9XyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAgICAgfSkgXG4gICAgICAgXG4gICAgfVxuXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSl7Ly8g5Yqg6L296aG155qE6K6h566X5ZON5bqU5YWs5byPICAgICBcbiAgICAgICAgdGhpcy5sZW5ndGggKz0xXG4gICAgICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICAgICAgY29uc3QgcGVyY2VudD10aGlzLmxlbmd0aC90aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTD1gJHtNYXRoLnJvdW5kKHBlcmNlbnQqMTAwKX0lYFxuICAgICAgICAvLyDov5nkuKrmmK/liqDovb3lrozmiYDmnInlm77lg4/lkI7nmoTliqDovb3pobXnmoRudW1iZXLnmoTorqHnrpflhazlvI9cblxuICAgICAgICBpZihwZXJjZW50ID09PTEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm9ubG9hZGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ubG9hZGVkKCl7Ly8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG15Y+K5Yqo55S7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICAgICAgZGVsYXk6MlxuICAgICAgICAgICAgICAgIC8vIOaOp+WItuWKoOi9vemhteetieW+heWkmuS5hei/m+WFpeS4u+mhtVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyx7XG4gICAgICAgICAgICAgICAgLy8g5a2X5L2T6K6+6K6h6YCQ5riQ5ZCR5LiL5raI5aSxXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHN0YWdnZXI6MC4xLFxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLm51bWJlclRleHQse1xuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+iuvuiuoemAkOa4kOWQkeS4i+a2iOWksVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgICAgICAgICBzdGFnZ2VyOjAuMSxcbiAgICAgICAgICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgICAgICB9LCctPTEuNCcpXG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQse1xuICAgICAgICAgICAgICAgIC8vIOiuqXByZWxvYWRlcuayv1novbTlkJHkuIrmtojlpLFcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgICAgICAgc2NhbGVZOjAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOicxMDAlIDEwMCUnXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCctPTEnKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB7XG4gICAgICAgICAgICAgICAgLy8g6L+b5YWl5Li76aG1XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTIxOWI5YWU1YmM1NGZjYWIzOTlcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZWFjaCIsIkdTQVAiLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9ubG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwidGltZWxpbmUiLCJkZWxheSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInkiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjYWxsIiwiZW1pdCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9