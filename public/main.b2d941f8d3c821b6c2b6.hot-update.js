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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



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
    this.length = 0;
    console.log(this.element, this.elements);
    this.createLoader();
  }
  createLoader() {
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.elements.images, element => {
      const image = new Image();
      image.onload = _ => this.onAssetLoaded(image);
      image.src = element.getAttribute('data-src');
    });
  }
  onAssetLoaded(image) {
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
    return new Promise(resolve => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      this.animateOut.to(this.element, {
        autoAlpha: 0
      });
      this.animateOut.call(_ => {
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
/******/ 	__webpack_require__.h = () => ("7b8d16d991496fcbf60b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMmQ5NDFmOGQzYzgyMWI2YzJiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2Y7QUFDUDtBQUVSLE1BQU1HLFNBQVMsU0FBU0gsMERBQVM7RUFDNUNJLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUUsQ0FBQztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNULE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLENBQUNTLFlBQVksQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLFlBQVlBLENBQUEsRUFBRTtJQUNWZCxrREFBSSxDQUFDLElBQUksQ0FBQ0ssUUFBUSxDQUFDRyxNQUFNLEVBQUNKLE9BQU8sSUFBRztNQUNoQyxNQUFNVyxLQUFLLEdBQUMsSUFBSUMsS0FBSyxDQUFDLENBQUM7TUFDdkJELEtBQUssQ0FBQ0UsTUFBTSxHQUFDQyxDQUFDLElBQUksSUFBSSxDQUFDQyxhQUFhLENBQUNKLEtBQUssQ0FBQztNQUMzQ0EsS0FBSyxDQUFDSyxHQUFHLEdBQUNoQixPQUFPLENBQUNpQixZQUFZLENBQUMsVUFBVSxDQUFDO0lBQzlDLENBQUMsQ0FBQztFQUNOO0VBRUFGLGFBQWFBLENBQUNKLEtBQUssRUFBQztJQUNoQixJQUFJLENBQUNKLE1BQU0sSUFBRyxDQUFDO0lBQ2Y7SUFDQSxNQUFNVyxPQUFPLEdBQUMsSUFBSSxDQUFDWCxNQUFNLEdBQUMsSUFBSSxDQUFDTixRQUFRLENBQUNHLE1BQU0sQ0FBQ0csTUFBTTtJQUNyRCxJQUFJLENBQUNOLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDZ0IsU0FBUyxHQUFFLEdBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLEdBQUMsR0FBRyxDQUFFLEdBQUU7SUFDNUQ7O0lBRUEsSUFBR0EsT0FBTyxLQUFJLENBQUMsRUFDZjtNQUNJLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFDSjtFQUVBQSxRQUFRQSxDQUFBLEVBQUU7SUFDTixPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQ3pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHNUIsNENBQUksQ0FBQzZCLFFBQVEsQ0FBQyxDQUFDO01BQ2pDLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxFQUFFLENBQUMsSUFBSSxDQUFDM0IsT0FBTyxFQUFDO1FBQzVCNEIsU0FBUyxFQUFDO01BQ2QsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDSCxVQUFVLENBQUNJLElBQUksQ0FBQ2YsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQ2dCLElBQUksQ0FBQyxXQUFXLENBQUM7TUFDMUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047RUFFQUMsT0FBT0EsQ0FBQSxFQUFFO0lBQ0wsSUFBSSxDQUFDL0IsT0FBTyxDQUFDZ0MsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDakMsT0FBTyxDQUFDO0VBQ3JEO0FBQ0o7Ozs7Ozs7O1VDekRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBlbGVtZW50OicucHJlbG9hZGVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgICAgICAgICB0aXRsZTonLnByZWxvYWRlcl9fdGV4dCcsXG4gICAgICAgICAgICAgICAgbnVtYmVyOicucHJlbG9hZGVyX19udW1iZXInLFxuICAgICAgICAgICAgICAgIGltYWdlczpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGVuZ3RoID0wXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCx0aGlzLmVsZW1lbnRzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgICB9XG5cbiAgICBjcmVhdGVMb2FkZXIoKXtcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U9bmV3IEltYWdlKClcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZD1fID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSlcbiAgICAgICAgICAgIGltYWdlLnNyYz1lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSAgICAgICAgICAgXG4gICAgICAgIH0pIFxuICAgIH1cblxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2Upe1xuICAgICAgICB0aGlzLmxlbmd0aCArPTFcbiAgICAgICAgLy8g5q+PbG9hZOS4gOasoe+8jOi/meS4quW9k+WJjeWKoOi9veeahOi/m+W6puS8muWKoOS4gFxuICAgICAgICBjb25zdCBwZXJjZW50PXRoaXMubGVuZ3RoL3RoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUw9YCR7TWF0aC5yb3VuZChwZXJjZW50KjEwMCl9JWBcbiAgICAgICAgLy8g6L+Z5Liq5piv5Yqg6L295a6M5omA5pyJ5Zu+5YOP5ZCO55qE5Yqg6L296aG155qEbnVtYmVy55qE6K6h566X5YWs5byPXG5cbiAgICAgICAgaWYocGVyY2VudCA9PT0xIClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5vbmxvYWRlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmxvYWRlZCgpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PntcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOjBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbChfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgIFxuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YjhkMTZkOTkxNDk2ZmNiZjYwYlwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJlYWNoIiwiR1NBUCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9ubG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwidGltZWxpbmUiLCJ0byIsImF1dG9BbHBoYSIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=