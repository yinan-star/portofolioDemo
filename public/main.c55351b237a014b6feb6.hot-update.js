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
        numberText: '.preloader__number__text',
        images: document.querySelectorAll('img')
      }
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    // 好像是在span里面做遮罩
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    this.elements.titleSpans = this.elements.title.querySelectorAll('span span');
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
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
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
        // 字体设计逐渐消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      });
      this.animateOut.to(this.elements.numberText, {
        // 数字设计逐渐消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%'
      }, '-=1.4');
      this.animateOut.to(this.element, {
        // 让preloader消失
        duration: 1.5,
        ease: 'expo.out',
        scaleY: 0,
        transformOrigin: '0 0'
      });
      this.animateOut.call(_ => {
        // 进入主页
        this.emit('completed');
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
/******/ 	__webpack_require__.h = () => ("66061b31d0860c2733c3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNTUzNTFiMjM3YTAxNGI2ZmViNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLFVBQVUsRUFBQywwQkFBMEI7UUFDckNDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUZWLGlEQUFLLENBQUM7TUFDRkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCTSxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFDRjtJQUNBWCxpREFBSyxDQUFDO01BQ0ZHLE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSztNQUMzQk0sVUFBVSxFQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUCxRQUFRLENBQUNRLFVBQVUsR0FBRyxJQUFJLENBQUNSLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDSyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFFNUUsSUFBSSxDQUFDRyxNQUFNLEdBQUUsQ0FBQztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNaLE9BQU8sRUFBQyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUV2QyxJQUFJLENBQUNZLFlBQVksQ0FBQyxDQUFDO0VBQ3ZCO0VBRUFBLFlBQVlBLENBQUEsRUFBRTtJQUFFO0lBQ1psQixrREFBSSxDQUFDLElBQUksQ0FBQ00sUUFBUSxDQUFDSSxNQUFNLEVBQUNMLE9BQU8sSUFBRztNQUNoQ0EsT0FBTyxDQUFDYyxNQUFNLEdBQUNDLENBQUMsSUFBSSxJQUFJLENBQUNDLGFBQWEsQ0FBQ2hCLE9BQU8sQ0FBQztNQUMvQ0EsT0FBTyxDQUFDaUIsR0FBRyxHQUFDakIsT0FBTyxDQUFDa0IsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDLENBQUM7RUFFTjtFQUVBRixhQUFhQSxDQUFDRyxLQUFLLEVBQUM7SUFBQztJQUNqQixJQUFJLENBQUNULE1BQU0sSUFBRyxDQUFDO0lBQ2Y7SUFDQSxNQUFNVSxPQUFPLEdBQUMsSUFBSSxDQUFDVixNQUFNLEdBQUMsSUFBSSxDQUFDVCxRQUFRLENBQUNJLE1BQU0sQ0FBQ0ssTUFBTTtJQUNyRCxJQUFJLENBQUNULFFBQVEsQ0FBQ0csVUFBVSxDQUFDaUIsU0FBUyxHQUFFLEdBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLEdBQUMsR0FBRyxDQUFFLEdBQUU7SUFDaEU7O0lBRUEsSUFBR0EsT0FBTyxLQUFJLENBQUMsRUFDZjtNQUNJLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFDSjtFQUVBQSxRQUFRQSxDQUFBLEVBQUU7SUFBQztJQUNQLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUc7TUFDekIsSUFBSSxDQUFDQyxVQUFVLEdBQUcvQiw0Q0FBSSxDQUFDZ0MsUUFBUSxDQUFDO1FBQzVCQyxLQUFLLEVBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQzs7TUFFRixJQUFJLENBQUNGLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLElBQUksQ0FBQzdCLFFBQVEsQ0FBQ1EsVUFBVSxFQUFDO1FBQ3hDO1FBQ0FzQixRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsT0FBTyxFQUFDLEdBQUc7UUFDWEMsQ0FBQyxFQUFFO01BQ1AsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDUCxVQUFVLENBQUNHLEVBQUUsQ0FBQyxJQUFJLENBQUM3QixRQUFRLENBQUNHLFVBQVUsRUFBQztRQUN4QztRQUNBMkIsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJDLE9BQU8sRUFBQyxHQUFHO1FBQ1hDLENBQUMsRUFBRTtNQUNQLENBQUMsRUFBQyxPQUFPLENBQUM7TUFFVixJQUFJLENBQUNQLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLElBQUksQ0FBQzlCLE9BQU8sRUFBQztRQUM1QjtRQUNBK0IsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJHLE1BQU0sRUFBQyxDQUFDO1FBQ1JDLGVBQWUsRUFBQztNQUNwQixDQUFDLENBQUM7TUFDRixJQUFJLENBQUNULFVBQVUsQ0FBQ1UsSUFBSSxDQUFDdEIsQ0FBQyxJQUFJO1FBQ3RCO1FBQ0EsSUFBSSxDQUFDdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBQyxPQUFPQSxDQUFBLEVBQUU7SUFDTCxJQUFJLENBQUN2QyxPQUFPLENBQUN3QyxVQUFVLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUN6QyxPQUFPLENBQUM7RUFDckQ7QUFDSjs7Ozs7Ozs7VUNqR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50JztcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0e3NwbGl0fSBmcm9tJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBlbGVtZW50OicucHJlbG9hZGVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgICAgICAgICB0aXRsZTonLnByZWxvYWRlcl9fdGV4dCcsXG4gICAgICAgICAgICAgICAgbnVtYmVyOicucHJlbG9hZGVyX19udW1iZXInLFxuICAgICAgICAgICAgICAgIG51bWJlclRleHQ6Jy5wcmVsb2FkZXJfX251bWJlcl9fdGV4dCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3BsaXQoe1xuICAgICAgICAgICAgZWxlbWVudDp0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjonPGJyPidcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5aW95YOP5piv5Zyoc3BhbumHjOmdouWBmumBrue9qVxuICAgICAgICBzcGxpdCh7XG4gICAgICAgICAgICBlbGVtZW50OnRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICAgICAgICBleHByZXNzaW9uOic8YnI+J1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblxuICAgICAgICB0aGlzLmxlbmd0aCA9MFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsdGhpcy5lbGVtZW50cylcblxuICAgICAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gICAgfVxuXG4gICAgY3JlYXRlTG9hZGVyKCl7IC8vIOWIm+W7uuWKoOi9vemhteWQjuebtOaOpeWllOedgGFib3V0IHBhZ2XlubbkuJTlsIZhYm91dOWbvueJh+mDveaYvuekuuWHuuadpVxuICAgICAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLGVsZW1lbnQgPT57XG4gICAgICAgICAgICBlbGVtZW50Lm9ubG9hZD1fID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgICAgICAgICAgZWxlbWVudC5zcmM9ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykgICAgICAgICAgIFxuICAgICAgICB9KSBcbiAgICAgICBcbiAgICB9XG5cbiAgICBvbkFzc2V0TG9hZGVkKGltYWdlKXsvLyDliqDovb3pobXnmoTorqHnrpflk43lupTlhazlvI8gICAgIFxuICAgICAgICB0aGlzLmxlbmd0aCArPTFcbiAgICAgICAgLy8g5q+PbG9hZOS4gOasoe+8jOi/meS4quW9k+WJjeWKoOi9veeahOi/m+W6puS8muWKoOS4gFxuICAgICAgICBjb25zdCBwZXJjZW50PXRoaXMubGVuZ3RoL3RoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MPWAke01hdGgucm91bmQocGVyY2VudCoxMDApfSVgXG4gICAgICAgIC8vIOi/meS4quaYr+WKoOi9veWujOaJgOacieWbvuWDj+WQjueahOWKoOi9vemhteeahG51bWJlcueahOiuoeeul+WFrOW8j1xuXG4gICAgICAgIGlmKHBlcmNlbnQgPT09MSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub25sb2FkZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25sb2FkZWQoKXsvLyDmjqfliLbliqDovb3pobXnrYnlvoXlpJrkuYXov5vlhaXkuLvpobXlj4rliqjnlLtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgICAgICAgICBkZWxheToyXG4gICAgICAgICAgICAgICAgLy8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG1XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLHtcbiAgICAgICAgICAgICAgICAvLyDlrZfkvZPorr7orqHpgJDmuJDmtojlpLFcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgICAgICAgc3RhZ2dlcjowLjEsXG4gICAgICAgICAgICAgICAgeTogJzEwMCUnLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCx7XG4gICAgICAgICAgICAgICAgLy8g5pWw5a2X6K6+6K6h6YCQ5riQ5raI5aSxXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHN0YWdnZXI6MC4xLFxuICAgICAgICAgICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgICAgIH0sJy09MS40JylcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgLy8g6K6pcHJlbG9hZGVy5raI5aSxXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgICAgICAgIHNjYWxlWTowLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjonMCAwJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIOi/m+WFpeS4u+mhtVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29tcGxldGVkJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pICAgXG4gICAgfVxuXG4gICAgZGVzdHJveSgpe1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY2MDYxYjMxZDA4NjBjMjczM2MzXCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImVhY2giLCJHU0FQIiwic3BsaXQiLCJQcmVsb2FkZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUxvYWRlciIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25sb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=