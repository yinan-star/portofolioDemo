"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/pages/Detail/Detail.js":
/*!************************************!*\
  !*** ./app/pages/Detail/Detail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Detail)
/* harmony export */ });
/* harmony import */ var classes_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Button */ "./app/classes/Button.js");
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");


class Detail extends classes_Page__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super({
      id: 'detail',
      element: '.detail',
      elements: {
        button: '.detail__button'
      }
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }

  create() {
    super.create();
    this.link = new classes_Button__WEBPACK_IMPORTED_MODULE_0__["default"]({
      element: this.elements.button
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
/******/ 	__webpack_require__.h = () => ("197145fb19f63df4ad28")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NWUwZTUzODRiMjQ5YjYwZjMzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNKO0FBRWhCLE1BQU1FLE1BQU0sU0FBU0Qsb0RBQUk7RUFDdENFLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxFQUFFLEVBQUMsUUFBUTtNQUNYQyxPQUFPLEVBQUMsU0FBUztNQUNqQkMsUUFBUSxFQUFDO1FBQ1BDLE1BQU0sRUFBQztNQUNUO0lBQ0YsQ0FBQyxDQUFDO0lBQ0Y7RUFFRjs7RUFDQUMsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsS0FBSyxDQUFDQSxNQUFNLENBQUMsQ0FBQztJQUVkLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlULHNEQUFNLENBQUM7TUFDckJLLE9BQU8sRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0M7SUFDekIsQ0FBQyxDQUFDO0VBQ0o7RUFDQUcsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsS0FBSyxDQUFDQSxPQUFPLENBQUMsQ0FBQztJQUVmLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxvQkFBb0IsQ0FBQyxDQUFDO0VBQ2xDO0FBRUY7Ozs7Ozs7O1VDNUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3BhZ2VzL0RldGFpbC9EZXRhaWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ2NsYXNzZXMvQnV0dG9uJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnY2xhc3Nlcy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyBQYWdle1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBpZDonZGV0YWlsJyxcbiAgICAgIGVsZW1lbnQ6Jy5kZXRhaWwnLFxuICAgICAgZWxlbWVudHM6e1xuICAgICAgICBidXR0b246Jy5kZXRhaWxfX2J1dHRvbidcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIHN1cGVyIOiwg+eUqOS6hueItuexu+eahOaehOmAoOWHveaVsO+8jOW5tuS8oOmAkuS6huS4gOS4quWMheWQqyBpZDogJ2Fib3V0JyDnmoTlr7nosaHjgILov5nkuKrlr7nosaHnlKjkuo7niLbnsbvnmoTmnoTpgKDlh73mlbDjgILnhLblkI7vvIzniLbnsbvnmoTmnoTpgKDlh73mlbDkuK3nmoQgY29uc29sZS5sb2coJ0NyZWF0ZScsIHRoaXMuaWQpIOWwhuS8muWcqOaOp+WItuWPsOiusOW9lSAnQ3JlYXRlIGFib3V0J+OAgui/meaYr+WboOS4uueItuexu+eahOaehOmAoOWHveaVsOaOpeaUtuWIsOS6hiB7IGlkOiAnYWJvdXQnIH0g6L+Z5Liq5a+56LGh77yM5bm26K6w5b2V5LqG55u45YWz5L+h5oGv44CCXG5cbiAgfVxuICBjcmVhdGUoKSB7XG4gICAgc3VwZXIuY3JlYXRlKCk7XG5cbiAgICB0aGlzLmxpbmsgPSBuZXcgQnV0dG9uKHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMuYnV0dG9uLFxuICAgIH0pO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5saW5rLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5NzE0NWZiMTlmNjNkZjRhZDI4XCIpIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlBhZ2UiLCJEZXRhaWwiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiYnV0dG9uIiwiY3JlYXRlIiwibGluayIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=