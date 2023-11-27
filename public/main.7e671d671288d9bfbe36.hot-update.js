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
/* harmony import */ var classes_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Button */ "./app/classes/Button.js");
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");


class Home extends classes_Page__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
    this.link = new classes_Button__WEBPACK_IMPORTED_MODULE_0__["default"]({
      element: this.elements.link
    });
  }
  destroy() {
    super.destroy();
    this.link.removeEventListeners();
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45e0e5384b249b60f33f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZTY3MWQ2NzEyODhkOWJmYmUzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNMO0FBRWhCLE1BQU1FLElBQUksU0FBU0Qsb0RBQUk7RUFDcENFLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxFQUFFLEVBQUMsTUFBTTtNQUNUQyxPQUFPLEVBQUMsT0FBTztNQUNmQyxRQUFRLEVBQUM7UUFDUEMsSUFBSSxFQUFDLGFBQWE7UUFDbEJDLFVBQVUsRUFBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYTtNQUNqRDtJQUNGLENBQUMsQ0FBQztJQUNGO0VBRUY7O0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNQLEtBQUssQ0FBQ0EsTUFBTSxDQUFDLENBQUM7SUFFZCxJQUFJLENBQUNKLElBQUksR0FBRyxJQUFJUCxzREFBTSxDQUFDO01BQ3JCSyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUNDO0lBQ3pCLENBQUMsQ0FBQztFQUNKO0VBQ0FLLE9BQU9BLENBQUEsRUFBRztJQUNSLEtBQUssQ0FBQ0EsT0FBTyxDQUFDLENBQUM7SUFFZixJQUFJLENBQUNMLElBQUksQ0FBQ00sb0JBQW9CLENBQUMsQ0FBQztFQUNsQztBQUlGOzs7Ozs7OztVQ2hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9wYWdlcy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ2NsYXNzZXMvQnV0dG9uJztcbmltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2V7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOidob21lJyxcbiAgICAgIGVsZW1lbnQ6Jy5ob21lJyxcbiAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgbGluazonLmhvbWVfX2xpbmsnLFxuICAgICAgICBuYXZpZ2F0aW9uOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIHN1cGVyIOiwg+eUqOS6hueItuexu+eahOaehOmAoOWHveaVsO+8jOW5tuS8oOmAkuS6huS4gOS4quWMheWQqyBpZDogJ2Fib3V0JyDnmoTlr7nosaHjgILov5nkuKrlr7nosaHnlKjkuo7niLbnsbvnmoTmnoTpgKDlh73mlbDjgILnhLblkI7vvIzniLbnsbvnmoTmnoTpgKDlh73mlbDkuK3nmoQgY29uc29sZS5sb2coJ0NyZWF0ZScsIHRoaXMuaWQpIOWwhuS8muWcqOaOp+WItuWPsOiusOW9lSAnQ3JlYXRlIGFib3V0J+OAgui/meaYr+WboOS4uueItuexu+eahOaehOmAoOWHveaVsOaOpeaUtuWIsOS6hiB7IGlkOiAnYWJvdXQnIH0g6L+Z5Liq5a+56LGh77yM5bm26K6w5b2V5LqG55u45YWz5L+h5oGv44CCXG5cbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcblxuICAgIHRoaXMubGluayA9IG5ldyBCdXR0b24oe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy5saW5rLFxuICAgIH0pO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5saW5rLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuXG4gIFxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ1ZTBlNTM4NGIyNDliNjBmMzNmXCIpIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlBhZ2UiLCJIb21lIiwiY29uc3RydWN0b3IiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsImxpbmsiLCJuYXZpZ2F0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==