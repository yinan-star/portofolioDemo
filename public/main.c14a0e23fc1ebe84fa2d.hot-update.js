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
          console.log('animatein');
          this.animateIn();
        } else {
          console.log('animateout');
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
/******/ 	__webpack_require__.h = () => ("84ee1b26fca7c4cb13b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMTRhMGUyM2ZjMWViZTg0ZmEyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBRXBCLE1BQU1DLFNBQVMsU0FBU0Qsa0RBQVMsQ0FBQztFQUM3Q0UsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQy9CLEtBQUssQ0FBQztNQUFFRCxPQUFPO01BQUVDO0lBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNuQjtFQUVGRCxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNFLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBRUMsT0FBTyxJQUFLO01BQ3BEQSxPQUFPLENBQUNDLE9BQU8sQ0FBRUMsS0FBSyxJQUFLO1FBQ3pCLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7VUFDeEIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztRQUNsQixDQUFDLE1BQU07VUFDTEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1VBQ3pCLElBQUksQ0FBQ1IsVUFBVSxDQUFDLENBQUM7UUFDbkI7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFDSjs7SUFFRSxJQUFJLENBQUNDLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDLElBQUksQ0FBQ2IsT0FBTyxDQUFDO0VBQ3JDO0VBRUFZLFNBQVNBLENBQUEsRUFBRyxDQUFDO0VBQ2JULFVBQVVBLENBQUEsRUFBRyxDQUFDO0VBQ2RXLFFBQVFBLENBQUEsRUFBRSxDQUVWO0FBQ0o7Ozs7Ozs7O1VDaENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dCgpO1xuICAgICAgfVxuICBcbiAgICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICAgIHRoaXMub2Jlc2V2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuaW1hdGVpbicpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVJbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYW5pbWF0ZW91dCcpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgLy8gICDlpoLmnpzmmK/ov5vlhaXliqjnlLvvvIzlsLHosIPnlKjov5vlhaXliqjnlLvnmoTmlrnms5XvvIzlj43kuYvjgILnhLblkI7lnKhhbmltYXRpb25z55qE6K6+5a6a55qE5LiN5ZCM5Yqo55S75pa55rOV6YeM5bel5L2cXG4gIFxuICAgICAgdGhpcy5vYmVzZXZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge31cbiAgICBhbmltYXRlT3V0KCkge31cbiAgICBvblJlc2l6ZSgpe1xuICAgICAgICBcbiAgICB9XG59ICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NGVlMWIyNmZjYTdjNGNiMTNiN1wiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiYW5pbWF0ZU91dCIsIm9iZXNldmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUluIiwib2JzZXJ2ZSIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==