"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Navigation.js":
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Naviagation)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/color */ "./app/utils/color.js");



class Naviagation extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    template
  }) {
    super({
      element: '.navigation',
      elements: {
        items: '.navigation__list__item',
        links: '.navigation__list__link'
      }
    });
    this.onChange(template);
  }
  onChange(template) {
    // 如果用户点击about页面，导航的字体的颜色会变成灰色，如果不是就是会反白
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.element, {
      color: template === 'about' ? utils_color__WEBPACK_IMPORTED_MODULE_1__.COLOR_BRIGHT_GRAY : utils_color__WEBPACK_IMPORTED_MODULE_1__.COLOR_QUARTER_SPANISH_WHITE,
      duration: 1.5
    });
  }
}

/***/ }),

/***/ "./app/utils/color.js":
/*!****************************!*\
  !*** ./app/utils/color.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_BRIGHT_GRAY: () => (/* binding */ COLOR_BRIGHT_GRAY),
/* harmony export */   COLOR_QUARTER_SPANISH_WHITE: () => (/* binding */ COLOR_QUARTER_SPANISH_WHITE)
/* harmony export */ });
// 
const COLOR_BRIGHT_GRAY = '#37384c';
const COLOR_QUARTER_SPANISH_WHITE = '#f9f1e7';

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d5dab3b3ee774140ff48")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MWM4ZWM0MTVmZjJiNWRlZGRhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDckI7QUFFcUQ7QUFFOUQsTUFBTUksV0FBVyxTQUFTSiwwREFBUyxDQUFDO0VBQ2pESyxXQUFXQSxDQUFDO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ3hCLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUUsYUFBYTtNQUN0QkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSx5QkFBeUI7UUFDaENDLEtBQUssRUFBRTtNQUNUO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxRQUFRLENBQUNMLFFBQVEsQ0FBQztFQUN6QjtFQUVBSyxRQUFRQSxDQUFDTCxRQUFRLEVBQUM7SUFDaEI7SUFDQUwsNENBQUksQ0FBQ1csRUFBRSxDQUFDLElBQUksQ0FBQ0wsT0FBTyxFQUFDO01BQ25CTSxLQUFLLEVBQUNQLFFBQVEsS0FBSyxPQUFPLEdBQUdKLDBEQUFpQixHQUFHQyxvRUFBMkI7TUFDNUVXLFFBQVEsRUFBQztJQUNYLENBQUMsQ0FBQztFQUNKO0FBRUY7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNPLE1BQU1aLGlCQUFpQixHQUFHLFNBQVM7QUFDbkMsTUFBTUMsMkJBQTJCLEdBQUcsU0FBUzs7Ozs7Ozs7VUNGcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC91dGlscy9jb2xvci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5cbmltcG9ydCB7IENPTE9SX0JSSUdIVF9HUkFZLCBDT0xPUl9RVUFSVEVSX1NQQU5JU0hfV0hJVEUgfSBmcm9tICd1dGlscy9jb2xvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlhZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5uYXZpZ2F0aW9uJyxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGl0ZW1zOiAnLm5hdmlnYXRpb25fX2xpc3RfX2l0ZW0nLFxuICAgICAgICBsaW5rczogJy5uYXZpZ2F0aW9uX19saXN0X19saW5rJyxcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25DaGFuZ2UodGVtcGxhdGUpO1xuICB9XG4gIFxuICBvbkNoYW5nZSh0ZW1wbGF0ZSl7XG4gICAgLy8g5aaC5p6c55So5oi354K55Ye7YWJvdXTpobXpnaLvvIzlr7zoiKrnmoTlrZfkvZPnmoTpopzoibLkvJrlj5jmiJDngbDoibLvvIzlpoLmnpzkuI3mmK/lsLHmmK/kvJrlj43nmb1cbiAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCx7XG4gICAgICBjb2xvcjp0ZW1wbGF0ZSA9PT0gJ2Fib3V0JyA/IENPTE9SX0JSSUdIVF9HUkFZIDogQ09MT1JfUVVBUlRFUl9TUEFOSVNIX1dISVRFLFxuICAgICAgZHVyYXRpb246MS41XG4gICAgfSlcbiAgfVxuXG59IiwiLy8gXG5leHBvcnQgY29uc3QgQ09MT1JfQlJJR0hUX0dSQVkgPSAnIzM3Mzg0Yyc7XG5leHBvcnQgY29uc3QgQ09MT1JfUVVBUlRFUl9TUEFOSVNIX1dISVRFID0gJyNmOWYxZTcnOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ1ZGFiM2IzZWU3NzQxNDBmZjQ4XCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkdTQVAiLCJDT0xPUl9CUklHSFRfR1JBWSIsIkNPTE9SX1FVQVJURVJfU1BBTklTSF9XSElURSIsIk5hdmlhZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIml0ZW1zIiwibGlua3MiLCJvbkNoYW5nZSIsInRvIiwiY29sb3IiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=