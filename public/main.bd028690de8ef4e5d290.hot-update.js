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
    console.log(this.element, this.elements);
    this.createLoader();
  }
  createLoader() {
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.elements.images, image => {
      console.log(image);
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f89accf01725d19a1c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZDAyODY5MGRlOGVmNGU1ZDI5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDZjtBQUVmLE1BQU1FLFNBQVMsU0FBU0YsMERBQVM7RUFDNUNHLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1IsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBRXZDLElBQUksQ0FBQ1EsWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFFO0lBQ1ZaLGtEQUFJLENBQUMsSUFBSSxDQUFDSSxRQUFRLENBQUNHLE1BQU0sRUFBQ00sS0FBSyxJQUFHO01BQzlCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztFQUNOO0FBQ0o7Ozs7Ozs7O1VDdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6Jy5wcmVsb2FkZXInLFxuICAgICAgICAgICAgZWxlbWVudHM6e1xuICAgICAgICAgICAgICAgIHRpdGxlOicucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgICAgICAgICBudW1iZXI6Jy5wcmVsb2FkZXJfX251bWJlcicsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCx0aGlzLmVsZW1lbnRzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgICB9XG5cbiAgICBjcmVhdGVMb2FkZXIoKXtcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxpbWFnZSA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlKVxuICAgICAgICB9KSBcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2Y4OWFjY2YwMTcyNWQxOWExYzlcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZWFjaCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTG9hZGVyIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9