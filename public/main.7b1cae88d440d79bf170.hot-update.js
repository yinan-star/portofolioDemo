"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");




class App {
  constructor() {
    // 召唤
    this.createContent();
    this.createPages();
  }
  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_0__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_1__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_2__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"]()
    };
    this.page = this.pages[this.template];
    // 你在哪个页面就渲染了哪个页面
    this.page.create();
    console.log(this.page);
  }
}
new App();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10ceb3aa32f5e155072a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YjFjYWU4OGQ0NDBkNzliZjE3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQ2Y7QUFDTjtBQUNyQyxNQUFNSSxHQUFHO0VBQ1BDLFdBQVdBLENBQUEsRUFBRTtJQUNYO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRXRCO0VBRUFELGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0UsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztFQUM5RDs7RUFHQUwsV0FBV0EsQ0FBQSxFQUFFO0lBQ1g7SUFDRSxJQUFJLENBQUNNLEtBQUssR0FBQztNQUNUQyxLQUFLLEVBQUMsSUFBSWQsMERBQUssQ0FBQyxDQUFDO01BQ2pCZSxXQUFXLEVBQUMsSUFBSWQsc0VBQVcsQ0FBQyxDQUFDO01BQzdCZSxNQUFNLEVBQUMsSUFBSWQsNERBQU0sQ0FBQyxDQUFDO01BQ25CZSxJQUFJLEVBQUMsSUFBSWQsd0RBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBSSxDQUFDZSxJQUFJLEdBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDbkM7SUFDQSxJQUFJLENBQUNPLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0gsSUFBSSxDQUFDO0VBQzFCO0FBQ0Y7QUFDQSxJQUFJZCxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcbmNsYXNzIEFwcHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgICAgdGhpcy5jcmVhdGVQYWdlcygpXG4gICAgICBcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuXG4gIGNyZWF0ZVBhZ2VzKCl7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgICAgdGhpcy5wYWdlcz17XG4gICAgICAgIGFib3V0Om5ldyBBYm91dCgpLFxuICAgICAgICBjb2xsZWN0aW9uczpuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgICAgZGV0YWlsOm5ldyBEZXRhaWwoKSxcbiAgICAgICAgaG9tZTpuZXcgSG9tZSgpLCAgICAgICBcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZT10aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaJcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgY29uc29sZS5sb2codGhpcy5wYWdlKVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMGNlYjNhYTMyZjVlMTU1MDcyYVwiKSJdLCJuYW1lcyI6WyJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwiSG9tZSIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==