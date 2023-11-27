"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/AsyncLoad.js":
/*!**********************************!*\
  !*** ./app/classes/AsyncLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncLoad)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./app/classes/Component.js");
// 同步加载图片出来

class AsyncLoad extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.createObserver();
  }
  createObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.element.src) {
            this.element.src = this.element.getAttribute('data-src');
            this.element.onload = () => {
              this.element.classList.add('loaded');
            };
          }
        }
      });
    });
    this.observer.observe(this.element);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("580084bd0b220f47e6b5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZDhlNGFmZTEzOWZhNTBjYzUxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0M7QUFFckIsTUFBTUMsU0FBUyxTQUFTRCxrREFBUyxDQUFDO0VBQy9DRSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUFFQTtJQUFRLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFFQyxPQUFPLElBQUs7TUFDcERBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFFQyxLQUFLLElBQUs7UUFDekIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQ1AsT0FBTyxDQUFDUSxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDUixPQUFPLENBQUNRLEdBQUcsR0FBRyxJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUN4RCxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsTUFBTSxHQUFHLE1BQU07Y0FDMUIsSUFBSSxDQUFDVixPQUFPLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN0QyxDQUFDO1VBQ0g7UUFDRjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ1YsUUFBUSxDQUFDVyxPQUFPLENBQUMsSUFBSSxDQUFDYixPQUFPLENBQUM7RUFDckM7QUFDRjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9Bc3luY0xvYWQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlkIzmraXliqDovb3lm77niYflh7rmnaVcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3luY0xvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHsgZWxlbWVudCB9KTtcbiAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gIH1cblxuICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LnNyYykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50KTtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU4MDA4NGJkMGIyMjBmNDdlNmI1XCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkFzeW5jTG9hZCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsImNsYXNzTGlzdCIsImFkZCIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9