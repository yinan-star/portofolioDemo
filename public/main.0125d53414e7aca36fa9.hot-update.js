"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/animations/Title.js":
/*!*********************************!*\
  !*** ./app/animations/Title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




class Title extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      element: this.element,
      append: true
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      element: this.element,
      append: true
    });
    this.elementLinesSpans = this.element.querySelectorAll('span span');
  }
  animateIn() {
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(line, {
        y: '100%'
      }, {
        delay: index * 0.2,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%'
      }, 0);
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.element, {
      autoAlpha: 0
    });
  }
  onResize() {
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
    console.log(this.elementsLines);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d28aebf85163e25bd6ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMTI1ZDUzNDE0ZTdhY2EzNmZhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNrQjtBQUVJO0FBQ2Y7QUFFaEIsTUFBTUssS0FBSyxTQUFTSix5REFBUyxDQUFDO0VBQ3pDSyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDakMsS0FBSyxDQUFDO01BQUVELE9BQU87TUFBRUM7SUFBUyxDQUFDLENBQUM7SUFFNUJMLGlEQUFLLENBQUM7TUFDSkksT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztNQUNyQkUsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUZOLGlEQUFLLENBQUM7TUFDSkksT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztNQUNyQkUsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0VBQ3JFO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0MsVUFBVSxHQUFHYiw0Q0FBSSxDQUFDYyxRQUFRLENBQUM7TUFDNUJDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDVCxPQUFPLEVBQUU7TUFDaENVLFNBQVMsRUFBRTtJQUNiLENBQUMsQ0FBQztJQUVGYixrREFBSSxDQUFDLElBQUksQ0FBQ2MsYUFBYSxFQUFFLENBQUNDLElBQUksRUFBRUMsS0FBSyxLQUFLO01BQ3hDLElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxNQUFNLENBQ3BCRixJQUFJLEVBQ0o7UUFDRUcsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxFQUNEO1FBQ0VQLEtBQUssRUFBRUssS0FBSyxHQUFHLEdBQUc7UUFDbEJHLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxVQUFVO1FBQ2hCRixDQUFDLEVBQUU7TUFDTCxDQUFDLEVBQ0QsQ0FDRixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ1I7RUFDQUcsVUFBVUEsQ0FBQSxFQUFHO0lBQ1R6Qiw0Q0FBSSxDQUFDZ0IsR0FBRyxDQUFDLElBQUksQ0FBQ1QsT0FBTyxFQUFFO01BQ3JCVSxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDSjtFQUVGUyxRQUFRQSxDQUFBLEVBQUc7SUFDUCxJQUFJLENBQUNSLGFBQWEsR0FBR2hCLHFEQUFTLENBQUMsSUFBSSxDQUFDUSxpQkFBaUIsQ0FBQztJQUN0RGlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1YsYUFBYSxDQUFDO0VBQ25DO0FBRUo7Ozs7Ozs7O1VDM0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nO1xuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XG5cbiAgICAgIHNwbGl0KHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICB9KTtcbiAgXG4gICAgICBzcGxpdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgfSk7XG4gIFxuICAgICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKTtcbiAgICB9XG5cbiAgICBhbmltYXRlSW4oKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmVJbiA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgIHRoaXMudGltZWxpbmVJbi5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgICBlYWNoKHRoaXMuZWxlbWVudHNMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lSW4uZnJvbVRvKFxuICAgICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeTogJzEwMCUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IGluZGV4ICogMC4yLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgICAgICAgICB5OiAnMCUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBhbmltYXRlT3V0KCkge1xuICAgICAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50c0xpbmVzKVxuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQyOGFlYmY4NTE2M2UyNWJkNmVlXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsImVhY2giLCJUaXRsZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsInRpbWVsaW5lIiwiZGVsYXkiLCJzZXQiLCJhdXRvQWxwaGEiLCJlbGVtZW50c0xpbmVzIiwibGluZSIsImluZGV4IiwiZnJvbVRvIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9