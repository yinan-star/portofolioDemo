"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");




class Preloader extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        images: document.querySelectorAll('img')
      }
    });
    this.elements.titleSpans = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    this.length = 0;
    console.log(this.element, this.elements);
    this.createLoader();
  }
  createLoader() {
    // 创建加载页后直接奔着about page并且将about图片都显示出来
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element);
      element.src = element.getAttribute('data-src');
    });
  }
  onAssetLoaded(image) {
    // 加载页的计算响应公式     
    this.length += 1;
    // 每load一次，这个当前加载的进度会加一
    const percent = this.length / this.elements.images.length;
    this.elements.number.innerHTML = `${Math.round(percent * 100)}%`;
    // 这个是加载完所有图像后的加载页的number的计算公式

    if (percent === 1) {
      this.onloaded();
    }
  }
  onloaded() {
    // 控制加载页等待多久进入主页及动画
    return new Promise(resolve => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        delay: 2
        // 控制加载页等待多久进入主页
      });

      this.animateOut.to(this.elements.titleSpans, {
        autoAlpha: 0,
        stagger: 0.1,
        y: -10
      });

      // this.animateOut.to(this.element,{
      //     // 让preloader消失
      //     autoAlpha:0
      // })
      this.animateOut.call(_ => {
        // 进入主页
        // this.emit('completed')
      });
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("05103e42aabae3c3c8e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NTE5YjcyYmQ2ODk2ZGY4MjEzMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTCxRQUFRLENBQUNNLFVBQVUsR0FBRVYsaURBQUssQ0FBQztNQUM1QkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCTSxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLE1BQU0sR0FBRSxDQUFDO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1gsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBRXZDLElBQUksQ0FBQ1csWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFFO0lBQUU7SUFDWmpCLGtEQUFJLENBQUMsSUFBSSxDQUFDTSxRQUFRLENBQUNHLE1BQU0sRUFBQ0osT0FBTyxJQUFHO01BQ2hDQSxPQUFPLENBQUNhLE1BQU0sR0FBQ0MsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsYUFBYSxDQUFDZixPQUFPLENBQUM7TUFDL0NBLE9BQU8sQ0FBQ2dCLEdBQUcsR0FBQ2hCLE9BQU8sQ0FBQ2lCLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBRU47RUFFQUYsYUFBYUEsQ0FBQ0csS0FBSyxFQUFDO0lBQUM7SUFDakIsSUFBSSxDQUFDVCxNQUFNLElBQUcsQ0FBQztJQUNmO0lBQ0EsTUFBTVUsT0FBTyxHQUFDLElBQUksQ0FBQ1YsTUFBTSxHQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDRyxNQUFNLENBQUNLLE1BQU07SUFDckQsSUFBSSxDQUFDUixRQUFRLENBQUNFLE1BQU0sQ0FBQ2lCLFNBQVMsR0FBRSxHQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsT0FBTyxHQUFDLEdBQUcsQ0FBRSxHQUFFO0lBQzVEOztJQUVBLElBQUdBLE9BQU8sS0FBSSxDQUFDLEVBQ2Y7TUFDSSxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDO0lBQ25CO0VBQ0o7RUFFQUEsUUFBUUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQ3pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHOUIsNENBQUksQ0FBQytCLFFBQVEsQ0FBQztRQUM1QkMsS0FBSyxFQUFDO1FBQ047TUFDSixDQUFDLENBQUM7O01BRUYsSUFBSSxDQUFDRixVQUFVLENBQUNHLEVBQUUsQ0FBQyxJQUFJLENBQUM1QixRQUFRLENBQUNNLFVBQVUsRUFBQztRQUN4Q3VCLFNBQVMsRUFBQyxDQUFDO1FBQ1hDLE9BQU8sRUFBQyxHQUFHO1FBQ1hDLENBQUMsRUFBQyxDQUFDO01BRVAsQ0FBQyxDQUFDOztNQUVGO01BQ0E7TUFDQTtNQUNBO01BQ0EsSUFBSSxDQUFDTixVQUFVLENBQUNPLElBQUksQ0FBQ25CLENBQUMsSUFBSTtRQUN0QjtRQUNBO01BQUEsQ0FDSCxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047RUFFQW9CLE9BQU9BLENBQUEsRUFBRTtJQUNMLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQ21DLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3BDLE9BQU8sQ0FBQztFQUNyRDtBQUNKOzs7Ozs7OztVQzdFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnR7c3BsaXR9IGZyb20ndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6Jy5wcmVsb2FkZXInLFxuICAgICAgICAgICAgZWxlbWVudHM6e1xuICAgICAgICAgICAgICAgIHRpdGxlOicucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgICAgICAgICBudW1iZXI6Jy5wcmVsb2FkZXJfX251bWJlcicsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID1zcGxpdCh7XG4gICAgICAgICAgICBlbGVtZW50OnRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICAgICAgICBleHByZXNzaW9uOic8YnI+J1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGVuZ3RoID0wXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCx0aGlzLmVsZW1lbnRzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgICB9XG5cbiAgICBjcmVhdGVMb2FkZXIoKXsgLy8g5Yib5bu65Yqg6L296aG15ZCO55u05o6l5aWU552AYWJvdXQgcGFnZeW5tuS4lOWwhmFib3V05Zu+54mH6YO95pi+56S65Ye65p2lXG4gICAgICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsZWxlbWVudCA9PntcbiAgICAgICAgICAgIGVsZW1lbnQub25sb2FkPV8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXG4gICAgICAgICAgICBlbGVtZW50LnNyYz1lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSAgICAgICAgICAgXG4gICAgICAgIH0pIFxuICAgICAgIFxuICAgIH1cblxuICAgIG9uQXNzZXRMb2FkZWQoaW1hZ2Upey8vIOWKoOi9vemhteeahOiuoeeul+WTjeW6lOWFrOW8jyAgICAgXG4gICAgICAgIHRoaXMubGVuZ3RoICs9MVxuICAgICAgICAvLyDmr49sb2Fk5LiA5qyh77yM6L+Z5Liq5b2T5YmN5Yqg6L2955qE6L+b5bqm5Lya5Yqg5LiAXG4gICAgICAgIGNvbnN0IHBlcmNlbnQ9dGhpcy5sZW5ndGgvdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTD1gJHtNYXRoLnJvdW5kKHBlcmNlbnQqMTAwKX0lYFxuICAgICAgICAvLyDov5nkuKrmmK/liqDovb3lrozmiYDmnInlm77lg4/lkI7nmoTliqDovb3pobXnmoRudW1iZXLnmoTorqHnrpflhazlvI9cblxuICAgICAgICBpZihwZXJjZW50ID09PTEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm9ubG9hZGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ubG9hZGVkKCl7Ly8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG15Y+K5Yqo55S7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgICAgICAgICAgZGVsYXk6MlxuICAgICAgICAgICAgICAgIC8vIOaOp+WItuWKoOi9vemhteetieW+heWkmuS5hei/m+WFpeS4u+mhtVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyx7XG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOjAsXG4gICAgICAgICAgICAgICAgc3RhZ2dlcjowLjEsXG4gICAgICAgICAgICAgICAgeTotMTBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQse1xuICAgICAgICAgICAgLy8gICAgIC8vIOiuqXByZWxvYWRlcua2iOWksVxuICAgICAgICAgICAgLy8gICAgIGF1dG9BbHBoYTowXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB7XG4gICAgICAgICAgICAgICAgLy8g6L+b5YWl5Li76aG1XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDUxMDNlNDJhYWJhZTNjM2M4ZTNcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZWFjaCIsIkdTQVAiLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aXRsZVNwYW5zIiwiZXhwcmVzc2lvbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVMb2FkZXIiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9ubG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwidGltZWxpbmUiLCJkZWxheSIsInRvIiwiYXV0b0FscGhhIiwic3RhZ2dlciIsInkiLCJjYWxsIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=