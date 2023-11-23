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

    console.log(this.template);
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
/******/ 	__webpack_require__.h = () => ("996e8cf7ebeb1e1df21d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZmI1YzYxNmMzODZkOTkyZGY1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQ2Y7QUFDTjtBQUNyQyxNQUFNSSxHQUFHO0VBQ1BDLFdBQVdBLENBQUEsRUFBRTtJQUNYO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRXRCO0VBRUFELGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0UsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs7SUFFNURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0gsUUFBUSxDQUFDO0VBQzVCO0VBR0FKLFdBQVdBLENBQUEsRUFBRTtJQUNYO0lBQ0UsSUFBSSxDQUFDUSxLQUFLLEdBQUM7TUFDVEMsS0FBSyxFQUFDLElBQUloQiwwREFBSyxDQUFDLENBQUM7TUFDakJpQixXQUFXLEVBQUMsSUFBSWhCLHNFQUFXLENBQUMsQ0FBQztNQUM3QmlCLE1BQU0sRUFBQyxJQUFJaEIsNERBQU0sQ0FBQyxDQUFDO01BQ25CaUIsSUFBSSxFQUFDLElBQUloQix3REFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRFUsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7RUFDM0I7QUFDRjtBQUNBLElBQUlYLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztVQy9CVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuY2xhc3MgQXBwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vIOWPrOWUpFxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcbiAgICAgIFxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvL0RFUzogc2VsZWN0aW5nIHRoZSBjb250ZW50IGNsYXNzXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTsgLy9ERVM6IGdldHRpbmcgdGhlIGRhdGFzZXQtdGVtcGxhdGVcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudGVtcGxhdGUpXG4gIH1cblxuXG4gIGNyZWF0ZVBhZ2VzKCl7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgICAgdGhpcy5wYWdlcz17XG4gICAgICAgIGFib3V0Om5ldyBBYm91dCgpLFxuICAgICAgICBjb2xsZWN0aW9uczpuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgICAgZGV0YWlsOm5ldyBEZXRhaWwoKSxcbiAgICAgICAgaG9tZTpuZXcgSG9tZSgpLCAgICAgICBcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFnZXMpXG4gIH1cbn1cbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5NmU4Y2Y3ZWJlYjFlMWRmMjFkXCIpIl0sIm5hbWVzIjpbIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSJdLCJzb3VyY2VSb290IjoiIn0=