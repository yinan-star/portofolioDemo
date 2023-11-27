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
/******/ 	__webpack_require__.h = () => ("44978d417aa211461a90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41Mjg1ZjBmM2IwZGI5N2Y4OTRjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLFVBQVUsRUFBQywwQkFBMEI7UUFDckNDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUZWLGlEQUFLLENBQUM7TUFDRkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCTSxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFDRjtJQUNBWCxpREFBSyxDQUFDO01BQ0ZHLE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSztNQUMzQk0sVUFBVSxFQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUCxRQUFRLENBQUNRLFVBQVUsR0FBRyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDSyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFFNUUsSUFBSSxDQUFDRyxNQUFNLEdBQUUsQ0FBQztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNaLE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLENBQUNZLFlBQVksQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLFlBQVlBLENBQUEsRUFBRTtJQUFFO0lBQ1psQixrREFBSSxDQUFDLElBQUksQ0FBQ00sUUFBUSxDQUFDSSxNQUFNLEVBQUNMLE9BQU8sSUFBRztNQUNoQ0EsT0FBTyxDQUFDYyxNQUFNLEdBQUNDLENBQUMsSUFBSSxJQUFJLENBQUNDLGFBQWEsQ0FBQ2hCLE9BQU8sQ0FBQztNQUMvQ0EsT0FBTyxDQUFDaUIsR0FBRyxHQUFDakIsT0FBTyxDQUFDa0IsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDLENBQUM7RUFFTjtFQUVBRixhQUFhQSxDQUFDRyxLQUFLLEVBQUM7SUFBQztJQUNqQixJQUFJLENBQUNULE1BQU0sSUFBRyxDQUFDO0lBQ2Y7SUFDQSxNQUFNVSxPQUFPLEdBQUMsSUFBSSxDQUFDVixNQUFNLEdBQUMsSUFBSSxDQUFDVCxRQUFRLENBQUNJLE1BQU0sQ0FBQ0ssTUFBTTtJQUNyRCxJQUFJLENBQUNULFFBQVEsQ0FBQ0csVUFBVSxDQUFDaUIsU0FBUyxHQUFFLEdBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLEdBQUMsR0FBRyxDQUFFLEdBQUU7SUFDaEU7O0lBRUEsSUFBR0EsT0FBTyxLQUFJLENBQUMsRUFDZjtNQUNJLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFDSjtFQUVBQSxRQUFRQSxDQUFBLEVBQUU7SUFBQztJQUNQLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUc7TUFDekIsSUFBSSxDQUFDQyxVQUFVLEdBQUcvQiw0Q0FBSSxDQUFDZ0MsUUFBUSxDQUFDO1FBQzVCQyxLQUFLLEVBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQzs7TUFFRixJQUFJLENBQUNGLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLElBQUksQ0FBQzdCLFFBQVEsQ0FBQ1EsVUFBVSxFQUFDO1FBQ3hDO1FBQ0FzQixRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsT0FBTyxFQUFDLEdBQUc7UUFDWEMsQ0FBQyxFQUFFO01BQ1AsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDUCxVQUFVLENBQUNHLEVBQUUsQ0FBQyxJQUFJLENBQUM3QixRQUFRLENBQUNHLFVBQVUsRUFBQztRQUN4QztRQUNBMkIsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJDLE9BQU8sRUFBQyxHQUFHO1FBQ1hDLENBQUMsRUFBRTtNQUNQLENBQUMsRUFBQyxPQUFPLENBQUM7TUFFVixJQUFJLENBQUNQLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLElBQUksQ0FBQzlCLE9BQU8sRUFBQztRQUM1QjtRQUNBK0IsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJHLE1BQU0sRUFBQyxDQUFDO1FBQ1JDLGVBQWUsRUFBQztNQUVwQixDQUFDLEVBQUMsS0FBSyxDQUFDO01BQ1IsSUFBSSxDQUFDVCxVQUFVLENBQUNVLElBQUksQ0FBQ3RCLENBQUMsSUFBSTtRQUN0QjtRQUNBLElBQUksQ0FBQ3VCLElBQUksQ0FBQyxXQUFXLENBQUM7TUFDMUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047RUFFQUMsT0FBT0EsQ0FBQSxFQUFFO0lBQ0wsSUFBSSxDQUFDdkMsT0FBTyxDQUFDd0MsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDekMsT0FBTyxDQUFDO0VBQ3JEO0FBQ0o7Ozs7Ozs7O1VDbEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydHtzcGxpdH0gZnJvbSd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZWxlbWVudDonLnByZWxvYWRlcicsXG4gICAgICAgICAgICBlbGVtZW50czp7XG4gICAgICAgICAgICAgICAgdGl0bGU6Jy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICAgICAgICAgIG51bWJlcjonLnByZWxvYWRlcl9fbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBudW1iZXJUZXh0OicucHJlbG9hZGVyX19udW1iZXJfX3RleHQnLFxuICAgICAgICAgICAgICAgIGltYWdlczpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHNwbGl0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6dGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246Jzxicj4nXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOWlveWDj+aYr+WcqHNwYW7ph4zpnaLlgZrpga7nvalcbiAgICAgICAgc3BsaXQoe1xuICAgICAgICAgICAgZWxlbWVudDp0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjonPGJyPidcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpXG5cbiAgICAgICAgdGhpcy5sZW5ndGggPTBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LHRoaXMuZWxlbWVudHMpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICAgIH1cblxuICAgIGNyZWF0ZUxvYWRlcigpeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQ9XyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAgICAgfSkgXG4gICAgICAgXG4gICAgfVxuXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSl7Ly8g5Yqg6L296aG155qE6K6h566X5ZON5bqU5YWs5byPICAgICBcbiAgICAgICAgdGhpcy5sZW5ndGggKz0xXG4gICAgICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICAgICAgY29uc3QgcGVyY2VudD10aGlzLmxlbmd0aC90aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTD1gJHtNYXRoLnJvdW5kKHBlcmNlbnQqMTAwKX0lYFxuICAgICAgICAvLyDov5nkuKrmmK/liqDovb3lrozmiYDmnInlm77lg4/lkI7nmoTliqDovb3pobXnmoRudW1iZXLnmoTorqHnrpflhazlvI9cblxuICAgICAgICBpZihwZXJjZW50ID09PTEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm9ubG9hZGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ubG9hZGVkKCl7Ly8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG15Y+K5Yqo55S7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICAgICAgZGVsYXk6MlxuICAgICAgICAgICAgICAgIC8vIOaOp+WItuWKoOi9vemhteetieW+heWkmuS5hei/m+WFpeS4u+mhtVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyx7XG4gICAgICAgICAgICAgICAgLy8g5a2X5L2T6K6+6K6h6YCQ5riQ5ZCR5LiL5raI5aSxXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHN0YWdnZXI6MC4xLFxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLm51bWJlclRleHQse1xuICAgICAgICAgICAgICAgIC8vIOaVsOWtl+iuvuiuoemAkOa4kOWQkeS4i+a2iOWksVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgICAgICAgICBzdGFnZ2VyOjAuMSxcbiAgICAgICAgICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgICAgICB9LCctPTEuNCcpXG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQse1xuICAgICAgICAgICAgICAgIC8vIOiuqXByZWxvYWRlcuayv1novbTlkJHkuIrmtojlpLFcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgICAgICAgc2NhbGVZOjAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOicxMDAlIDEwMCUnXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCctPTEnKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB7XG4gICAgICAgICAgICAgICAgLy8g6L+b5YWl5Li76aG1XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDQ5NzhkNDE3YWEyMTE0NjFhOTBcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZWFjaCIsIkdTQVAiLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTG9hZGVyIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbmxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5Iiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==