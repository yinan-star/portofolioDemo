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
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Detail extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'detail',
      element: '.detail',
      elements: {
        button: '.detail'
      }
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }

  create() {
    super.create();
    this.link = new Button({
      element: this.elements.link
    });
  }
  destroy() {
    super.destroy();
    this.link.removeEventHandlers();
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2ce0a4e569b52ce77b22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xODdjMjVkM2MzYTE2OTBjZjA1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWhCLE1BQU1DLE1BQU0sU0FBU0Qsb0RBQUk7RUFDdENFLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxFQUFFLEVBQUMsUUFBUTtNQUNYQyxPQUFPLEVBQUMsU0FBUztNQUNqQkMsUUFBUSxFQUFDO1FBQ1BDLE1BQU0sRUFBQztNQUNUO0lBQ0YsQ0FBQyxDQUFDO0lBQ0Y7RUFFRjs7RUFDQUMsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsS0FBSyxDQUFDQSxNQUFNLENBQUMsQ0FBQztJQUVkLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlDLE1BQU0sQ0FBQztNQUNyQkwsT0FBTyxFQUFFLElBQUksQ0FBQ0MsUUFBUSxDQUFDRztJQUN6QixDQUFDLENBQUM7RUFDSjtFQUNBRSxPQUFPQSxDQUFBLEVBQUc7SUFDUixLQUFLLENBQUNBLE9BQU8sQ0FBQyxDQUFDO0lBRWYsSUFBSSxDQUFDRixJQUFJLENBQUNHLG1CQUFtQixDQUFDLENBQUM7RUFDakM7QUFFRjs7Ozs7Ozs7VUMzQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvRGV0YWlsL0RldGFpbC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsIGV4dGVuZHMgUGFnZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6J2RldGFpbCcsXG4gICAgICBlbGVtZW50OicuZGV0YWlsJyxcbiAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgYnV0dG9uOicuZGV0YWlsJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gc3VwZXIg6LCD55So5LqG54i257G755qE5p6E6YCg5Ye95pWw77yM5bm25Lyg6YCS5LqG5LiA5Liq5YyF5ZCrIGlkOiAnYWJvdXQnIOeahOWvueixoeOAgui/meS4quWvueixoeeUqOS6jueItuexu+eahOaehOmAoOWHveaVsOOAgueEtuWQju+8jOeItuexu+eahOaehOmAoOWHveaVsOS4reeahCBjb25zb2xlLmxvZygnQ3JlYXRlJywgdGhpcy5pZCkg5bCG5Lya5Zyo5o6n5Yi25Y+w6K6w5b2VICdDcmVhdGUgYWJvdXQn44CC6L+Z5piv5Zug5Li654i257G755qE5p6E6YCg5Ye95pWw5o6l5pS25Yiw5LqGIHsgaWQ6ICdhYm91dCcgfSDov5nkuKrlr7nosaHvvIzlubborrDlvZXkuobnm7jlhbPkv6Hmga/jgIJcblxuICB9XG4gIGNyZWF0ZSgpIHtcbiAgICBzdXBlci5jcmVhdGUoKTtcblxuICAgIHRoaXMubGluayA9IG5ldyBCdXR0b24oe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy5saW5rLFxuICAgIH0pO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5saW5rLnJlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmNlMGE0ZTU2OWI1MmNlNzdiMjJcIikiXSwibmFtZXMiOlsiUGFnZSIsIkRldGFpbCIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJidXR0b24iLCJjcmVhdGUiLCJsaW5rIiwiQnV0dG9uIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50SGFuZGxlcnMiXSwic291cmNlUm9vdCI6IiJ9