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
    console.log(this.elementLinesSpans);
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
    console.log(this.elementLines);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b7a261828cc92c3aca36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZjFjNTNmNTk3ZjY1NmFhMTJmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDa0I7QUFFSTtBQUUvQixNQUFNSSxLQUFLLFNBQVNILHlEQUFTLENBQUM7RUFDekNJLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNqQyxLQUFLLENBQUM7TUFBRUQsT0FBTztNQUFFQztJQUFTLENBQUMsQ0FBQztJQUU1QkosaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRkwsaURBQUssQ0FBQztNQUNKRyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO01BQ3JCRSxNQUFNLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7RUFDckU7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1JYLDRDQUFJLENBQUNZLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGFBQWEsRUFBQztNQUMzQkMsU0FBUyxFQUFDLENBQUM7TUFDWEMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxFQUFDO01BQ0VELFNBQVMsRUFBQyxDQUFDO01BQ1hFLFFBQVEsRUFBQyxHQUFHO01BQ1pDLEtBQUssRUFBQyxHQUFHO01BQ1RDLE9BQU8sRUFBQyxHQUFHO01BQ1hILENBQUMsRUFBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBQ0FJLFVBQVVBLENBQUEsRUFBRztJQUNUbkIsNENBQUksQ0FBQ29CLEdBQUcsQ0FBQyxJQUFJLENBQUNkLE9BQU8sRUFBRTtNQUNyQlEsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0VBQ0o7RUFFRk8sUUFBUUEsQ0FBQSxFQUFHO0lBQ1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2QsaUJBQWlCLENBQUM7SUFDbkMsSUFBSSxDQUFDSSxhQUFhLEdBQUdYLHFEQUFTLENBQUMsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQztJQUV0RGEsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUM7RUFDbEM7QUFFSjs7Ozs7Ozs7VUMvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvYW5pbWF0aW9ucy9UaXRsZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IEFuaW1hdGlvbiBmcm9tICdjbGFzc2VzL0FuaW1hdGlvbic7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgICAgc3BsaXQoe1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHNwbGl0KHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICB9KTtcbiAgXG4gICAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpO1xuICAgIH1cblxuICAgIGFuaW1hdGVJbigpIHtcbiAgICAgICAgR1NBUC5mcm9tVG8odGhpcy5lbGVtZW50c0xpbmVzLHtcbiAgICAgICAgICAgIGF1dG9BbHBoYToxLFxuICAgICAgICAgICAgeTogJzEwMCUnXG4gICAgICAgIH0se1xuICAgICAgICAgICAgYXV0b0FscGhhOjEsXG4gICAgICAgICAgICBkdXJhdGlvbjoxLjUsXG4gICAgICAgICAgICBkZWxheTowLjUsXG4gICAgICAgICAgICBzdGFnZ2VyOjAuMixcbiAgICAgICAgICAgIHk6JzAlJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhbmltYXRlT3V0KCkge1xuICAgICAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpXG4gICAgICAgIHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRMaW5lcylcbiAgICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiN2EyNjE4MjhjYzkyYzNhY2EzNlwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiQW5pbWF0aW9uIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJUaXRsZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZUluIiwiZnJvbVRvIiwiZWxlbWVudHNMaW5lcyIsImF1dG9BbHBoYSIsInkiLCJkdXJhdGlvbiIsImRlbGF5Iiwic3RhZ2dlciIsImFuaW1hdGVPdXQiLCJzZXQiLCJvblJlc2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50TGluZXMiXSwic291cmNlUm9vdCI6IiJ9