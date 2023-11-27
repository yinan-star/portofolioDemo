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
      image.src = element.getAttribute('data-src');
      image.onload = _ => this.onAssetLoaded(image);
    });
  }
  onAssetLoaded(image) {
    this.length += 1;
    // 每load一次，这个当前长度会加一
    console.log(Math.round(this.length / this.elements.images.length * 100));
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8cf420bbfe12acf202e9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNmZmN2UxNDM3ZDczZTRjY2FlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDZjtBQUVmLE1BQU1FLFNBQVMsU0FBU0YsMERBQVM7RUFDNUNHLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUUsQ0FBQztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNULE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLENBQUNTLFlBQVksQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLFlBQVlBLENBQUEsRUFBRTtJQUNWYixrREFBSSxDQUFDLElBQUksQ0FBQ0ksUUFBUSxDQUFDRyxNQUFNLEVBQUNKLE9BQU8sSUFBRztNQUNoQyxNQUFNVyxLQUFLLEdBQUMsSUFBSUMsS0FBSyxDQUFDLENBQUM7TUFFdkJELEtBQUssQ0FBQ0UsR0FBRyxHQUFDYixPQUFPLENBQUNjLFlBQVksQ0FBQyxVQUFVLENBQUM7TUFDMUNILEtBQUssQ0FBQ0ksTUFBTSxHQUFDQyxDQUFDLElBQUksSUFBSSxDQUFDQyxhQUFhLENBQUNOLEtBQUssQ0FBQztJQUUvQyxDQUFDLENBQUM7RUFDTjtFQUVBTSxhQUFhQSxDQUFDTixLQUFLLEVBQUM7SUFDaEIsSUFBSSxDQUFDSixNQUFNLElBQUcsQ0FBQztJQUNmO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNaLE1BQU0sR0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ0csTUFBTSxDQUFDRyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUM7RUFDeEU7QUFDSjs7Ozs7Ozs7VUNuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50JztcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZWxlbWVudDonLnByZWxvYWRlcicsXG4gICAgICAgICAgICBlbGVtZW50czp7XG4gICAgICAgICAgICAgICAgdGl0bGU6Jy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICAgICAgICAgIG51bWJlcjonLnByZWxvYWRlcl9fbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBpbWFnZXM6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxlbmd0aCA9MFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsdGhpcy5lbGVtZW50cylcblxuICAgICAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gICAgfVxuXG4gICAgY3JlYXRlTG9hZGVyKCl7XG4gICAgICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsZWxlbWVudCA9PntcbiAgICAgICAgICAgIGNvbnN0IGltYWdlPW5ldyBJbWFnZSgpXG5cbiAgICAgICAgICAgIGltYWdlLnNyYz1lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkPV8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGltYWdlKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pIFxuICAgIH1cblxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2Upe1xuICAgICAgICB0aGlzLmxlbmd0aCArPTFcbiAgICAgICAgLy8g5q+PbG9hZOS4gOasoe+8jOi/meS4quW9k+WJjemVv+W6puS8muWKoOS4gFxuICAgICAgICBjb25zb2xlLmxvZyhNYXRoLnJvdW5kKHRoaXMubGVuZ3RoL3RoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aCoxMDApKVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4Y2Y0MjBiYmZlMTJhY2YyMDJlOVwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJlYWNoIiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVMb2FkZXIiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJNYXRoIiwicm91bmQiXSwic291cmNlUm9vdCI6IiJ9