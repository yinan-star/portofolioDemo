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
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.elementsLines, {
      autoAlpha: 1,
      y: '100%'
    }, {
      autoAlpha: 1,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
      y: '0%'
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
/******/ 	__webpack_require__.h = () => ("5484b509f00193460802")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZjdhZWQzYzJjNjNkYzZmMWE1ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDa0I7QUFFSTtBQUUvQixNQUFNSSxLQUFLLFNBQVNILHlEQUFTLENBQUM7RUFDekNJLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNqQyxLQUFLLENBQUM7TUFBRUQsT0FBTztNQUFFQztJQUFTLENBQUMsQ0FBQztJQUU1QkosaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRkwsaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDckU7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1JYLDRDQUFJLENBQUNZLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGFBQWEsRUFBQztNQUMzQkMsU0FBUyxFQUFDLENBQUM7TUFDWEMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxFQUFDO01BQ0VELFNBQVMsRUFBQyxDQUFDO01BQ1hFLFFBQVEsRUFBQyxHQUFHO01BQ1pDLEtBQUssRUFBQyxHQUFHO01BQ1RDLE9BQU8sRUFBQyxHQUFHO01BQ1hILENBQUMsRUFBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBQ0FJLFVBQVVBLENBQUEsRUFBRztJQUNUbkIsNENBQUksQ0FBQ29CLEdBQUcsQ0FBQyxJQUFJLENBQUNkLE9BQU8sRUFBRTtNQUNyQlEsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0VBQ0o7RUFFRk8sUUFBUUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDUixhQUFhLEdBQUdYLHFEQUFTLENBQUMsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQztFQUN0RDtBQUVKOzs7Ozs7OztVQzVDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL1RpdGxlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuXG4gICAgICBzcGxpdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgfSk7XG4gIFxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge1xuICAgICAgICBHU0FQLmZyb21Ubyh0aGlzLmVsZW1lbnRzTGluZXMse1xuICAgICAgICAgICAgYXV0b0FscGhhOjEsXG4gICAgICAgICAgICB5OiAnMTAwJSdcbiAgICAgICAgfSx7XG4gICAgICAgICAgICBhdXRvQWxwaGE6MSxcbiAgICAgICAgICAgIGR1cmF0aW9uOjEuNSxcbiAgICAgICAgICAgIGRlbGF5OjAuNSxcbiAgICAgICAgICAgIHN0YWdnZXI6MC4yLFxuICAgICAgICAgICAgeTonMCUnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTQ4NGI1MDlmMDAxOTM0NjA4MDJcIikiXSwibmFtZXMiOlsiR1NBUCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsImZyb21UbyIsImVsZW1lbnRzTGluZXMiLCJhdXRvQWxwaGEiLCJ5IiwiZHVyYXRpb24iLCJkZWxheSIsInN0YWdnZXIiLCJhbmltYXRlT3V0Iiwic2V0Iiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9