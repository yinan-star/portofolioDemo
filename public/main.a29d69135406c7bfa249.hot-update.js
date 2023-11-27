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
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        delay: 2
        // 控制加载页等待多久进入主页
      });

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
/******/ 	__webpack_require__.h = () => ("1682490f440fad076a31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMjlkNjkxMzU0MDZjN2JmYTI0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2Y7QUFDUDtBQUVSLE1BQU1HLFNBQVMsU0FBU0gsMERBQVM7RUFDNUNJLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUUsQ0FBQztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNULE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLENBQUNTLFlBQVksQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLFlBQVlBLENBQUEsRUFBRTtJQUFFO0lBQ1pkLGtEQUFJLENBQUMsSUFBSSxDQUFDSyxRQUFRLENBQUNHLE1BQU0sRUFBQ0osT0FBTyxJQUFHO01BQ2hDQSxPQUFPLENBQUNXLE1BQU0sR0FBQ0MsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsYUFBYSxDQUFDYixPQUFPLENBQUM7TUFDL0NBLE9BQU8sQ0FBQ2MsR0FBRyxHQUFDZCxPQUFPLENBQUNlLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBRU47RUFFQUYsYUFBYUEsQ0FBQ0csS0FBSyxFQUFDO0lBQUM7SUFDakIsSUFBSSxDQUFDVCxNQUFNLElBQUcsQ0FBQztJQUNmO0lBQ0EsTUFBTVUsT0FBTyxHQUFDLElBQUksQ0FBQ1YsTUFBTSxHQUFDLElBQUksQ0FBQ04sUUFBUSxDQUFDRyxNQUFNLENBQUNHLE1BQU07SUFDckQsSUFBSSxDQUFDTixRQUFRLENBQUNFLE1BQU0sQ0FBQ2UsU0FBUyxHQUFFLEdBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLEdBQUMsR0FBRyxDQUFFLEdBQUU7SUFDNUQ7O0lBRUEsSUFBR0EsT0FBTyxLQUFJLENBQUMsRUFDZjtNQUNJLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFDSjtFQUVBQSxRQUFRQSxDQUFBLEVBQUU7SUFBQztJQUNQLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUc7TUFDekIsSUFBSSxDQUFDQyxVQUFVLEdBQUczQiw0Q0FBSSxDQUFDNEIsUUFBUSxDQUFDO1FBQzVCQyxLQUFLLEVBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQzs7TUFDRixJQUFJLENBQUNGLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLElBQUksQ0FBQzNCLE9BQU8sRUFBQztRQUM1QjRCLFNBQVMsRUFBQztNQUNkLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxJQUFJLENBQUNqQixDQUFDLElBQUk7UUFDdEIsSUFBSSxDQUFDa0IsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBQyxPQUFPQSxDQUFBLEVBQUU7SUFDTCxJQUFJLENBQUMvQixPQUFPLENBQUNnQyxVQUFVLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNqQyxPQUFPLENBQUM7RUFDckQ7QUFDSjs7Ozs7Ozs7VUM1REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50JztcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6Jy5wcmVsb2FkZXInLFxuICAgICAgICAgICAgZWxlbWVudHM6e1xuICAgICAgICAgICAgICAgIHRpdGxlOicucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgICAgICAgICBudW1iZXI6Jy5wcmVsb2FkZXJfX251bWJlcicsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZW5ndGggPTBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LHRoaXMuZWxlbWVudHMpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICAgIH1cblxuICAgIGNyZWF0ZUxvYWRlcigpeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQ9XyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAgICAgfSkgXG4gICAgICAgXG4gICAgfVxuXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSl7Ly8g5Yqg6L296aG155qE6K6h566X5ZON5bqU5YWs5byPICAgICBcbiAgICAgICAgdGhpcy5sZW5ndGggKz0xXG4gICAgICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICAgICAgY29uc3QgcGVyY2VudD10aGlzLmxlbmd0aC90aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MPWAke01hdGgucm91bmQocGVyY2VudCoxMDApfSVgXG4gICAgICAgIC8vIOi/meS4quaYr+WKoOi9veWujOaJgOacieWbvuWDj+WQjueahOWKoOi9vemhteeahG51bWJlcueahOiuoeeul+WFrOW8j1xuXG4gICAgICAgIGlmKHBlcmNlbnQgPT09MSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub25sb2FkZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25sb2FkZWQoKXsvLyDmjqfliLbliqDovb3pobXnrYnlvoXlpJrkuYXov5vlhaXkuLvpobXlj4rliqjnlLtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgICAgICAgICBkZWxheToyXG4gICAgICAgICAgICAgICAgLy8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOjBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbChfID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgIFxuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNjgyNDkwZjQ0MGZhZDA3NmEzMVwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJlYWNoIiwiR1NBUCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTG9hZGVyIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbmxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=