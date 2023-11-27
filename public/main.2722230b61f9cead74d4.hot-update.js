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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");



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
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.element, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1.5
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.element, {
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
/******/ 	__webpack_require__.h = () => ("25a3decd258fadfdaa99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNzIyMjMwYjYxZjljZWFkNzRkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDa0I7QUFFSTtBQUUvQixNQUFNSSxLQUFLLFNBQVNILHlEQUFTLENBQUM7RUFDekNJLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNqQyxLQUFLLENBQUM7TUFBRUQsT0FBTztNQUFFQztJQUFTLENBQUMsQ0FBQztJQUU1QkosaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRkwsaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDckU7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1JYLDRDQUFJLENBQUNZLE1BQU0sQ0FBQyxJQUFJLENBQUNOLE9BQU8sRUFBQztNQUNyQk8sU0FBUyxFQUFDO0lBQ2QsQ0FBQyxFQUFDO01BQ0VBLFNBQVMsRUFBQyxDQUFDO01BQ1hDLFFBQVEsRUFBQztJQUNiLENBQUMsQ0FBQztFQUNOO0VBQ0FDLFVBQVVBLENBQUEsRUFBRztJQUNUZiw0Q0FBSSxDQUFDZ0IsR0FBRyxDQUFDLElBQUksQ0FBQ1YsT0FBTyxFQUFFO01BQ3JCTyxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDSjtFQUVGSSxRQUFRQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNDLGFBQWEsR0FBR2hCLHFEQUFTLENBQUMsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQztFQUN0RDtBQUVKOzs7Ozs7OztVQ3hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL1RpdGxlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuXG4gICAgICBzcGxpdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgfSk7XG4gIFxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge1xuICAgICAgICBHU0FQLmZyb21Ubyh0aGlzLmVsZW1lbnQse1xuICAgICAgICAgICAgYXV0b0FscGhhOjBcbiAgICAgICAgfSx7XG4gICAgICAgICAgICBhdXRvQWxwaGE6MSxcbiAgICAgICAgICAgIGR1cmF0aW9uOjEuNVxuICAgICAgICB9KVxuICAgIH1cbiAgICBhbmltYXRlT3V0KCkge1xuICAgICAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpO1xuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI1YTNkZWNkMjU4ZmFkZmRhYTk5XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsIlRpdGxlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmltYXRlSW4iLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImFuaW1hdGVPdXQiLCJzZXQiLCJvblJlc2l6ZSIsImVsZW1lbnRzTGluZXMiXSwic291cmNlUm9vdCI6IiJ9