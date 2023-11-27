"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/animations/Paragraph.js":
/*!*************************************!*\
  !*** ./app/animations/Paragraph.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




class Paragraph extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.elementLinesSpans = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      append: true,
      element: this.element
    });
  }
  animateIn() {
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    //每行的字体的渐变
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(line, {
        autoAlpha: 0,
        y: '100%'
      }, {
        autoAlpha: 1,
        delay: index * 0.1,
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
  //计算每行
  onResize() {
    this.elementsLines = (0,utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c14a0e23fc1ebe84fa2d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYmMxYTMzZGM3YjFkYzQ2ZWEwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNrQjtBQUVJO0FBQ2Y7QUFFaEIsTUFBTUssU0FBUyxTQUFTSix5REFBUyxDQUFDO0VBQzdDSyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDakMsS0FBSyxDQUFDO01BQUVELE9BQU87TUFBRUM7SUFBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR04saURBQUssQ0FBQztNQUM3Qk8sTUFBTSxFQUFFLElBQUk7TUFDWkgsT0FBTyxFQUFFLElBQUksQ0FBQ0E7SUFDaEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQUksU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDQyxVQUFVLEdBQUdaLDRDQUFJLENBQUNhLFFBQVEsQ0FBQztNQUM1QkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNSLE9BQU8sRUFBRTtNQUNoQ1MsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0lBQ0Y7SUFDQVosa0RBQUksQ0FBQyxJQUFJLENBQUNhLGFBQWEsRUFBRSxDQUFDQyxJQUFJLEVBQUVDLEtBQUssS0FBSztNQUN4QyxJQUFJLENBQUNQLFVBQVUsQ0FBQ1EsTUFBTSxDQUNwQkYsSUFBSSxFQUNKO1FBQ0VGLFNBQVMsRUFBRSxDQUFDO1FBQ1pLLENBQUMsRUFBRTtNQUNMLENBQUMsRUFDRDtRQUNFTCxTQUFTLEVBQUUsQ0FBQztRQUNaRixLQUFLLEVBQUVLLEtBQUssR0FBRyxHQUFHO1FBQ2xCRyxRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkYsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxFQUNELENBQ0YsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNSO0VBQ0FHLFVBQVVBLENBQUEsRUFBRztJQUNUeEIsNENBQUksQ0FBQ2UsR0FBRyxDQUFDLElBQUksQ0FBQ1IsT0FBTyxFQUFFO01BQ3JCUyxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7RUFDSjtFQUNGO0VBQ0FTLFFBQVFBLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ1IsYUFBYSxHQUFHZixxREFBUyxDQUFDLElBQUksQ0FBQ08saUJBQWlCLENBQUM7RUFDMUQ7QUFFSjs7Ozs7Ozs7VUNyREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvYW5pbWF0aW9ucy9QYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nO1xuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCc7XG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuXG4gICAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gc3BsaXQoe1xuICAgICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuaW1hdGVJbigpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgdGhpcy50aW1lbGluZUluLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvL+avj+ihjOeahOWtl+S9k+eahOa4kOWPmFxuICAgICAgICAgIGVhY2godGhpcy5lbGVtZW50c0xpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXG4gICAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgICAgICAgICAgeTogJzEwMCUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgICAgICAgIGRlbGF5OiBpbmRleCAqIDAuMSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgICAgICAgeTogJzAlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAvL+iuoeeul+avj+ihjFxuICAgIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzE0YTBlMjNmYzFlYmU4NGZhMmRcIikiXSwibmFtZXMiOlsiR1NBUCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiZWFjaCIsIlBhcmFncmFwaCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZWxlbWVudExpbmVzU3BhbnMiLCJhcHBlbmQiLCJhbmltYXRlSW4iLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImVsZW1lbnRzTGluZXMiLCJsaW5lIiwiaW5kZXgiLCJmcm9tVG8iLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwiYW5pbWF0ZU91dCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==