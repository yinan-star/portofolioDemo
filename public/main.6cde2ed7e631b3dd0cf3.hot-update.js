"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Animation.js":
/*!**********************************!*\
  !*** ./app/classes/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./app/classes/Component.js");

class Animation extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.createObserver();
    this.animateOut();
  }
  createObserver() {
    this.obesever = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    });
    //   如果是进入动画，就调用进入动画的方法，反之。然后在animations的设定的不同动画方法里工作

    this.obesever.observe(this.element);
  }
  animateIn() {}
  animateOut() {}
  onResize() {}
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81acdb1ef61d1daac8de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42Y2RlMmVkN2U2MzFiM2RkMGNmMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBRXBCLE1BQU1DLFNBQVMsU0FBU0Qsa0RBQVMsQ0FBQztFQUM3Q0UsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQy9CLEtBQUssQ0FBQztNQUFFRCxPQUFPO01BQUVDO0lBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNuQjtFQUVGRCxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNFLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBRUMsT0FBTyxJQUFLO01BQ3BEQSxPQUFPLENBQUNDLE9BQU8sQ0FBRUMsS0FBSyxJQUFLO1FBQ3pCLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQ3hCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDUCxVQUFVLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNKOztJQUVFLElBQUksQ0FBQ0MsUUFBUSxDQUFDTyxPQUFPLENBQUMsSUFBSSxDQUFDWCxPQUFPLENBQUM7RUFDckM7RUFFQVUsU0FBU0EsQ0FBQSxFQUFHLENBQUM7RUFDYlAsVUFBVUEsQ0FBQSxFQUFHLENBQUM7RUFDZFMsUUFBUUEsQ0FBQSxFQUFFLENBRVY7QUFDSjs7Ozs7Ozs7VUM5QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XG4gICAgXG4gICAgICAgIHRoaXMuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlT3V0KCk7XG4gICAgICB9XG4gIFxuICAgIGNyZWF0ZU9ic2VydmVyKCkge1xuICAgICAgdGhpcy5vYmVzZXZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVJbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgLy8gICDlpoLmnpzmmK/ov5vlhaXliqjnlLvvvIzlsLHosIPnlKjov5vlhaXliqjnlLvnmoTmlrnms5XvvIzlj43kuYvjgILnhLblkI7lnKhhbmltYXRpb25z55qE6K6+5a6a55qE5LiN5ZCM5Yqo55S75pa55rOV6YeM5bel5L2cXG4gIFxuICAgICAgdGhpcy5vYmVzZXZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge31cbiAgICBhbmltYXRlT3V0KCkge31cbiAgICBvblJlc2l6ZSgpe1xuXG4gICAgfVxufSAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODFhY2RiMWVmNjFkMWRhYWM4ZGVcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImFuaW1hdGVPdXQiLCJvYmVzZXZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYW5pbWF0ZUluIiwib2JzZXJ2ZSIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==