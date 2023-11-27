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
    // 每load一次，这个当前加载的进度会加一
    console.log(Math.round(this.length / this.elements.images.length * 100));
    // 这个是加载完所有图像后的加载页的number的计算公式
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4e8a7f2a375168928de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44Y2Y0MjBiYmZlMTJhY2YyMDJlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDZjtBQUVmLE1BQU1FLFNBQVMsU0FBU0YsMERBQVM7RUFDNUNHLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUUsQ0FBQztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNULE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLENBQUNTLFlBQVksQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLFlBQVlBLENBQUEsRUFBRTtJQUNWYixrREFBSSxDQUFDLElBQUksQ0FBQ0ksUUFBUSxDQUFDRyxNQUFNLEVBQUNKLE9BQU8sSUFBRztNQUNoQyxNQUFNVyxLQUFLLEdBQUMsSUFBSUMsS0FBSyxDQUFDLENBQUM7TUFFdkJELEtBQUssQ0FBQ0UsR0FBRyxHQUFDYixPQUFPLENBQUNjLFlBQVksQ0FBQyxVQUFVLENBQUM7TUFDMUNILEtBQUssQ0FBQ0ksTUFBTSxHQUFDQyxDQUFDLElBQUksSUFBSSxDQUFDQyxhQUFhLENBQUNOLEtBQUssQ0FBQztJQUUvQyxDQUFDLENBQUM7RUFDTjtFQUVBTSxhQUFhQSxDQUFDTixLQUFLLEVBQUM7SUFDaEIsSUFBSSxDQUFDSixNQUFNLElBQUcsQ0FBQztJQUNmO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNaLE1BQU0sR0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ0csTUFBTSxDQUFDRyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEU7RUFDSjtBQUNKOzs7Ozs7OztVQ3BDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBlbGVtZW50OicucHJlbG9hZGVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgICAgICAgICB0aXRsZTonLnByZWxvYWRlcl9fdGV4dCcsXG4gICAgICAgICAgICAgICAgbnVtYmVyOicucHJlbG9hZGVyX19udW1iZXInLFxuICAgICAgICAgICAgICAgIGltYWdlczpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGVuZ3RoID0wXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCx0aGlzLmVsZW1lbnRzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgICB9XG5cbiAgICBjcmVhdGVMb2FkZXIoKXtcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U9bmV3IEltYWdlKClcblxuICAgICAgICAgICAgaW1hZ2Uuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQ9XyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoaW1hZ2UpXG4gICAgICAgICAgICBcbiAgICAgICAgfSkgXG4gICAgfVxuXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSl7XG4gICAgICAgIHRoaXMubGVuZ3RoICs9MVxuICAgICAgICAvLyDmr49sb2Fk5LiA5qyh77yM6L+Z5Liq5b2T5YmN5Yqg6L2955qE6L+b5bqm5Lya5Yqg5LiAXG4gICAgICAgIGNvbnNvbGUubG9nKE1hdGgucm91bmQodGhpcy5sZW5ndGgvdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoKjEwMCkpXG4gICAgICAgIC8vIOi/meS4quaYr+WKoOi9veWujOaJgOacieWbvuWDj+WQjueahOWKoOi9vemhteeahG51bWJlcueahOiuoeeul+WFrOW8j1xuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNGU4YTdmMmEzNzUxNjg5MjhkZVwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJlYWNoIiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVMb2FkZXIiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJNYXRoIiwicm91bmQiXSwic291cmNlUm9vdCI6IiJ9