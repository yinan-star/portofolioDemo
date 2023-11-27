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
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3d0d5adce88ec11f26f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNjdiOWY2MmUwM2UyZTg1MjA5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDa0I7QUFFSTtBQUUvQixNQUFNSSxLQUFLLFNBQVNILHlEQUFTLENBQUM7RUFDekNJLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNqQyxLQUFLLENBQUM7TUFBRUQsT0FBTztNQUFFQztJQUFTLENBQUMsQ0FBQztJQUU1QkosaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRkwsaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDckU7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1JYLDRDQUFJLENBQUNZLEdBQUcsQ0FBQyxJQUFJLENBQUNOLE9BQU8sRUFBRTtNQUNuQk8sU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0lBQ0piLDRDQUFJLENBQUNjLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGFBQWEsRUFBQztNQUMzQkMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxFQUFDO01BQ0VDLFFBQVEsRUFBQyxHQUFHO01BQ1pDLEtBQUssRUFBQyxHQUFHO01BQ1RDLE9BQU8sRUFBQyxHQUFHO01BQ1hILENBQUMsRUFBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBQ0FJLFVBQVVBLENBQUEsRUFBRztJQUNUcEIsNENBQUksQ0FBQ1ksR0FBRyxDQUFDLElBQUksQ0FBQ04sT0FBTyxFQUFFO01BQ3JCTyxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDSjtFQUVGUSxRQUFRQSxDQUFBLEVBQUc7SUFDUCxJQUFJLENBQUNOLGFBQWEsR0FBR2IscURBQVMsQ0FBQyxJQUFJLENBQUNPLGlCQUFpQixDQUFDO0VBQzFEO0FBRUo7Ozs7Ozs7O1VDN0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nO1xuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XG5cbiAgICAgIHNwbGl0KHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICB9KTtcbiAgXG4gICAgICBzcGxpdCh7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgfSk7XG4gIFxuICAgICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKTtcbiAgICB9XG5cbiAgICBhbmltYXRlSW4oKSB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgIH0pO1xuICAgICAgICBHU0FQLmZyb21Ubyh0aGlzLmVsZW1lbnRzTGluZXMse1xuICAgICAgICAgICAgeTogJzEwMCUnXG4gICAgICAgIH0se1xuICAgICAgICAgICAgZHVyYXRpb246MS41LFxuICAgICAgICAgICAgZGVsYXk6MC41LFxuICAgICAgICAgICAgc3RhZ2dlcjowLjIsXG4gICAgICAgICAgICB5OicwJSdcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2QwZDVhZGNlODhlYzExZjI2ZjJcIikiXSwibmFtZXMiOlsiR1NBUCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsInNldCIsImF1dG9BbHBoYSIsImZyb21UbyIsImVsZW1lbnRzTGluZXMiLCJ5IiwiZHVyYXRpb24iLCJkZWxheSIsInN0YWdnZXIiLCJhbmltYXRlT3V0Iiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9