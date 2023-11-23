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
    // this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_0__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_1__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_2__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"]()
    };
    console.log(this.pages);
  }
}
new App();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ad258fa63f777bc3200")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNmYyMDcyYTliNDMxY2Y4MDUxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQ2Y7QUFDTjtBQUNyQyxNQUFNSSxHQUFHO0VBQ1BDLFdBQVdBLENBQUEsRUFBRTtJQUNYO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRXRCO0VBRUFELGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0UsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25EO0VBQ0Y7O0VBR0FILFdBQVdBLENBQUEsRUFBRTtJQUNYO0lBQ0UsSUFBSSxDQUFDSSxLQUFLLEdBQUM7TUFDVEMsS0FBSyxFQUFDLElBQUlaLDBEQUFLLENBQUMsQ0FBQztNQUNqQmEsV0FBVyxFQUFDLElBQUlaLHNFQUFXLENBQUMsQ0FBQztNQUM3QmEsTUFBTSxFQUFDLElBQUlaLDREQUFNLENBQUMsQ0FBQztNQUNuQmEsSUFBSSxFQUFDLElBQUlaLHdEQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNOLEtBQUssQ0FBQztFQUMzQjtBQUNGO0FBQ0EsSUFBSVAsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDN0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4vcGFnZXMvRGV0YWlsL0RldGFpbFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZS9Ib21lXCI7XG5jbGFzcyBBcHB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuICAgICAgXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICAvLyB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cblxuICBjcmVhdGVQYWdlcygpe1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICAgIHRoaXMucGFnZXM9e1xuICAgICAgICBhYm91dDpuZXcgQWJvdXQoKSxcbiAgICAgICAgY29sbGVjdGlvbnM6bmV3IENvbGxlY3Rpb25zKCksXG4gICAgICAgIGRldGFpbDpuZXcgRGV0YWlsKCksXG4gICAgICAgIGhvbWU6bmV3IEhvbWUoKSwgICAgICAgXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBhZ2VzKVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYWQyNThmYTYzZjc3N2JjMzIwMFwiKSJdLCJuYW1lcyI6WyJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwiSG9tZSIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhZ2VzIiwiYWJvdXQiLCJjb2xsZWN0aW9ucyIsImRldGFpbCIsImhvbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==