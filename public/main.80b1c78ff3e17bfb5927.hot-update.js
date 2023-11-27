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
    this.elements.titleSpans = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
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

      this.animateOut.to(this.element, {
        autoAlpha: 0
      });
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
/******/ 	__webpack_require__.h = () => ("fa554d04dd66388636bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MGIxYzc4ZmYzZTE3YmZiNTkyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTCxRQUFRLENBQUNNLFVBQVUsR0FBRVYsaURBQUssQ0FBQztNQUM1QkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCTSxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLE1BQU0sR0FBRSxDQUFDO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1gsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBRXZDLElBQUksQ0FBQ1csWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFFO0lBQUU7SUFDWmpCLGtEQUFJLENBQUMsSUFBSSxDQUFDTSxRQUFRLENBQUNHLE1BQU0sRUFBQ0osT0FBTyxJQUFHO01BQ2hDQSxPQUFPLENBQUNhLE1BQU0sR0FBQ0MsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsYUFBYSxDQUFDZixPQUFPLENBQUM7TUFDL0NBLE9BQU8sQ0FBQ2dCLEdBQUcsR0FBQ2hCLE9BQU8sQ0FBQ2lCLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBRU47RUFFQUYsYUFBYUEsQ0FBQ0csS0FBSyxFQUFDO0lBQUM7SUFDakIsSUFBSSxDQUFDVCxNQUFNLElBQUcsQ0FBQztJQUNmO0lBQ0EsTUFBTVUsT0FBTyxHQUFDLElBQUksQ0FBQ1YsTUFBTSxHQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDRyxNQUFNLENBQUNLLE1BQU07SUFDckQsSUFBSSxDQUFDUixRQUFRLENBQUNFLE1BQU0sQ0FBQ2lCLFNBQVMsR0FBRSxHQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsT0FBTyxHQUFDLEdBQUcsQ0FBRSxHQUFFO0lBQzVEOztJQUVBLElBQUdBLE9BQU8sS0FBSSxDQUFDLEVBQ2Y7TUFDSSxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDO0lBQ25CO0VBQ0o7RUFFQUEsUUFBUUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQ3pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHOUIsNENBQUksQ0FBQytCLFFBQVEsQ0FBQztRQUM1QkMsS0FBSyxFQUFDO1FBQ047TUFDSixDQUFDLENBQUM7O01BQ0YsSUFBSSxDQUFDRixVQUFVLENBQUNHLEVBQUUsQ0FBQyxJQUFJLENBQUM3QixPQUFPLEVBQUM7UUFDNUI4QixTQUFTLEVBQUM7TUFDZCxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNKLFVBQVUsQ0FBQ0ssSUFBSSxDQUFDakIsQ0FBQyxJQUFJO1FBQ3RCO1FBQ0E7TUFBQSxDQUNILENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBa0IsT0FBT0EsQ0FBQSxFQUFFO0lBQ0wsSUFBSSxDQUFDaEMsT0FBTyxDQUFDaUMsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDbEMsT0FBTyxDQUFDO0VBQ3JEO0FBQ0o7Ozs7Ozs7O1VDcEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydHtzcGxpdH0gZnJvbSd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZWxlbWVudDonLnByZWxvYWRlcicsXG4gICAgICAgICAgICBlbGVtZW50czp7XG4gICAgICAgICAgICAgICAgdGl0bGU6Jy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICAgICAgICAgIG51bWJlcjonLnByZWxvYWRlcl9fbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBpbWFnZXM6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPXNwbGl0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6dGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246Jzxicj4nXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZW5ndGggPTBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LHRoaXMuZWxlbWVudHMpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICAgIH1cblxuICAgIGNyZWF0ZUxvYWRlcigpeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQ9XyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAgICAgfSkgXG4gICAgICAgXG4gICAgfVxuXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSl7Ly8g5Yqg6L296aG155qE6K6h566X5ZON5bqU5YWs5byPICAgICBcbiAgICAgICAgdGhpcy5sZW5ndGggKz0xXG4gICAgICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICAgICAgY29uc3QgcGVyY2VudD10aGlzLmxlbmd0aC90aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MPWAke01hdGgucm91bmQocGVyY2VudCoxMDApfSVgXG4gICAgICAgIC8vIOi/meS4quaYr+WKoOi9veWujOaJgOacieWbvuWDj+WQjueahOWKoOi9vemhteeahG51bWJlcueahOiuoeeul+WFrOW8j1xuXG4gICAgICAgIGlmKHBlcmNlbnQgPT09MSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub25sb2FkZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25sb2FkZWQoKXsvLyDmjqfliLbliqDovb3pobXnrYnlvoXlpJrkuYXov5vlhaXkuLvpobXlj4rliqjnlLtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgICAgICAgICBkZWxheToyXG4gICAgICAgICAgICAgICAgLy8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOjBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbChfID0+IHtcbiAgICAgICAgICAgICAgICAvLyDov5vlhaXkuLvpobVcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgIFxuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYTU1NGQwNGRkNjYzODg2MzZiZFwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJlYWNoIiwiR1NBUCIsInNwbGl0IiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRpdGxlU3BhbnMiLCJleHByZXNzaW9uIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUxvYWRlciIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25sb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsImRlbGF5IiwidG8iLCJhdXRvQWxwaGEiLCJjYWxsIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=