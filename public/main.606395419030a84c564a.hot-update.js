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
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.element, {
      autoAlpha: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(this.elementsLines, {
      y: '100%'
    }, {
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
    console.log(this.elementLinesSpans);
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
    console.log(this.elementsLines);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cef9822446ec3262591f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MDYzOTU0MTkwMzBhODRjNTY0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDa0I7QUFFSTtBQUUvQixNQUFNSSxLQUFLLFNBQVNILHlEQUFTLENBQUM7RUFDekNJLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNqQyxLQUFLLENBQUM7TUFBRUQsT0FBTztNQUFFQztJQUFTLENBQUMsQ0FBQztJQUU1QkosaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRkwsaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDckU7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1JYLDRDQUFJLENBQUNZLEdBQUcsQ0FBQyxJQUFJLENBQUNOLE9BQU8sRUFBRTtNQUNuQk8sU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0lBQ0piLDRDQUFJLENBQUNjLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGFBQWEsRUFBQztNQUMzQkMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxFQUFDO01BQ0VDLFFBQVEsRUFBQyxHQUFHO01BQ1pDLEtBQUssRUFBQyxHQUFHO01BQ1RDLE9BQU8sRUFBQyxHQUFHO01BQ1hILENBQUMsRUFBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBQ0FJLFVBQVVBLENBQUEsRUFBRztJQUNUcEIsNENBQUksQ0FBQ1ksR0FBRyxDQUFDLElBQUksQ0FBQ04sT0FBTyxFQUFFO01BQ3JCTyxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDSjtFQUVGUSxRQUFRQSxDQUFBLEVBQUc7SUFDUEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDZCxpQkFBaUIsQ0FBQztJQUNuQyxJQUFJLENBQUNNLGFBQWEsR0FBR2IscURBQVMsQ0FBQyxJQUFJLENBQUNPLGlCQUFpQixDQUFDO0lBQ3REYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNSLGFBQWEsQ0FBQztFQUNuQztBQUVKOzs7Ozs7OztVQy9DQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL1RpdGxlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuXG4gICAgICBzcGxpdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgfSk7XG4gIFxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJyk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZUluKCkge1xuICAgICAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgR1NBUC5mcm9tVG8odGhpcy5lbGVtZW50c0xpbmVzLHtcbiAgICAgICAgICAgIHk6ICcxMDAlJ1xuICAgICAgICB9LHtcbiAgICAgICAgICAgIGR1cmF0aW9uOjEuNSxcbiAgICAgICAgICAgIGRlbGF5OjAuNSxcbiAgICAgICAgICAgIHN0YWdnZXI6MC4yLFxuICAgICAgICAgICAgeTonMCUnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50TGluZXNTcGFucylcbiAgICAgICAgdGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzTGluZXMpXG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2VmOTgyMjQ0NmVjMzI2MjU5MWZcIikiXSwibmFtZXMiOlsiR1NBUCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsInNldCIsImF1dG9BbHBoYSIsImZyb21UbyIsImVsZW1lbnRzTGluZXMiLCJ5IiwiZHVyYXRpb24iLCJkZWxheSIsInN0YWdnZXIiLCJhbmltYXRlT3V0Iiwib25SZXNpemUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==