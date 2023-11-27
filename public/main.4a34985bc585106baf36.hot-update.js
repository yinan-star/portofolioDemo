"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/animations/Label.js":
/*!*********************************!*\
  !*** ./app/animations/Label.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




class Label extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6cde2ed7e631b3dd0cf3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YTM0OTg1YmM1ODUxMDZiYWYzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNrQjtBQUVJO0FBQ2Y7QUFFaEIsTUFBTUssS0FBSyxTQUFTSix5REFBUyxDQUFDO0VBQ3pDSyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDakMsS0FBSyxDQUFDO01BQUVELE9BQU87TUFBRUM7SUFBUyxDQUFDLENBQUM7SUFFNUJMLGlEQUFLLENBQUM7TUFDSkksT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztNQUNyQkUsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUZOLGlEQUFLLENBQUM7TUFDSkksT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTztNQUNyQkUsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0VBQ3JFO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0MsVUFBVSxHQUFHYiw0Q0FBSSxDQUFDYyxRQUFRLENBQUM7TUFDNUJDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDVCxPQUFPLEVBQUU7TUFDaENVLFNBQVMsRUFBRTtJQUNiLENBQUMsQ0FBQztJQUVGYixrREFBSSxDQUFDLElBQUksQ0FBQ2MsYUFBYSxFQUFFLENBQUNDLElBQUksRUFBRUMsS0FBSyxLQUFLO01BQ3hDLElBQUksQ0FBQ1AsVUFBVSxDQUFDUSxNQUFNLENBQ3BCRixJQUFJLEVBQ0o7UUFDRUcsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxFQUNEO1FBQ0VQLEtBQUssRUFBRUssS0FBSyxHQUFHLEdBQUc7UUFDbEJHLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxVQUFVO1FBQ2hCRixDQUFDLEVBQUU7TUFDTCxDQUFDLEVBQ0QsQ0FDRixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ1I7RUFDQUcsVUFBVUEsQ0FBQSxFQUFHO0lBQ1R6Qiw0Q0FBSSxDQUFDZ0IsR0FBRyxDQUFDLElBQUksQ0FBQ1QsT0FBTyxFQUFFO01BQ3JCVSxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDSjtFQUVGUyxRQUFRQSxDQUFBLEVBQUc7SUFDUCxJQUFJLENBQUNSLGFBQWEsR0FBR2hCLHFEQUFTLENBQUMsSUFBSSxDQUFDUSxpQkFBaUIsQ0FBQztFQUMxRDtBQUVKOzs7Ozs7OztVQzFEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL0xhYmVsLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuXG4gICAgICBzcGxpdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgfSk7XG4gIFxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge1xuICAgICAgICB0aGlzLnRpbWVsaW5lSW4gPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzTGluZXMsIChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZUluLmZyb21UbyhcbiAgICAgICAgICAgICAgbGluZSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlbGF5OiBpbmRleCAqIDAuMixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgICAgICAgeTogJzAlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmNkZTJlZDdlNjMxYjNkZDBjZjNcIikiXSwibmFtZXMiOlsiR1NBUCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiZWFjaCIsIkxhYmVsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmltYXRlSW4iLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImVsZW1lbnRzTGluZXMiLCJsaW5lIiwiaW5kZXgiLCJmcm9tVG8iLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwiYW5pbWF0ZU91dCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==