"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/pages/Home/Home.js":
/*!********************************!*\
  !*** ./app/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Home extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        link: '.home__link',
        navigation: document.querySelector('.navigation')
      }
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }

  create() {
    super.create();
    this.elements.link.addEventListener('click', _ => console.log('oh,you clicked me'));
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eaf09b73b83c1732bf4a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZGE2MDQxNTE5OTNhYzNmN2RlYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWhCLE1BQU1DLElBQUksU0FBU0Qsb0RBQUk7RUFDcENFLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxFQUFFLEVBQUMsTUFBTTtNQUNUQyxPQUFPLEVBQUMsT0FBTztNQUNmQyxRQUFRLEVBQUM7UUFDUEMsSUFBSSxFQUFDLGFBQWE7UUFDbEJDLFVBQVUsRUFBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYTtNQUNqRDtJQUNGLENBQUMsQ0FBQztJQUNGO0VBRUY7O0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNQLEtBQUssQ0FBQ0EsTUFBTSxDQUFDLENBQUM7SUFFZCxJQUFJLENBQUNMLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUNDLENBQUMsSUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztFQUNsRjtBQUlKOzs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9wYWdlcy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdle1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDonaG9tZScsXG4gICAgICBlbGVtZW50OicuaG9tZScsXG4gICAgICBlbGVtZW50czp7XG4gICAgICAgIGxpbms6Jy5ob21lX19saW5rJyxcbiAgICAgICAgbmF2aWdhdGlvbjpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBzdXBlciDosIPnlKjkuobniLbnsbvnmoTmnoTpgKDlh73mlbDvvIzlubbkvKDpgJLkuobkuIDkuKrljIXlkKsgaWQ6ICdhYm91dCcg55qE5a+56LGh44CC6L+Z5Liq5a+56LGh55So5LqO54i257G755qE5p6E6YCg5Ye95pWw44CC54S25ZCO77yM54i257G755qE5p6E6YCg5Ye95pWw5Lit55qEIGNvbnNvbGUubG9nKCdDcmVhdGUnLCB0aGlzLmlkKSDlsIbkvJrlnKjmjqfliLblj7DorrDlvZUgJ0NyZWF0ZSBhYm91dCfjgILov5nmmK/lm6DkuLrniLbnsbvnmoTmnoTpgKDlh73mlbDmjqXmlLbliLDkuoYgeyBpZDogJ2Fib3V0JyB9IOi/meS4quWvueixoe+8jOW5tuiusOW9leS6huebuOWFs+S/oeaBr+OAglxuXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLmxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLF8gPT4gY29uc29sZS5sb2coJ29oLHlvdSBjbGlja2VkIG1lJykpXG4gICAgfVxuXG5cbiAgXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWFmMDliNzNiODNjMTczMmJmNGFcIikiXSwibmFtZXMiOlsiUGFnZSIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwibGluayIsIm5hdmlnYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiXyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9