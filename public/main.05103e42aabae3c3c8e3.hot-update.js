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
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
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
        // 字体设计逐渐消失
        duration: 1.5,
        ease: 'expo.out',
        autoAlpha: 0,
        stagger: 0.1,
        y: '100%'
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
/******/ 	__webpack_require__.h = () => ("9e0e61c52d6085869e9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNTEwM2U0MmFhYmFlM2MzYzhlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUZULGlEQUFLLENBQUM7TUFDRkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCSyxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sVUFBVSxHQUFFWCxpREFBSyxDQUFDO01BQzVCRyxPQUFPLEVBQUMsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUs7TUFDM0JLLFVBQVUsRUFBQztJQUNmLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0UsTUFBTSxHQUFFLENBQUM7SUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDWCxPQUFPLEVBQUMsSUFBSSxDQUFDQyxRQUFRLENBQUM7SUFFdkMsSUFBSSxDQUFDVyxZQUFZLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxZQUFZQSxDQUFBLEVBQUU7SUFBRTtJQUNaakIsa0RBQUksQ0FBQyxJQUFJLENBQUNNLFFBQVEsQ0FBQ0csTUFBTSxFQUFDSixPQUFPLElBQUc7TUFDaENBLE9BQU8sQ0FBQ2EsTUFBTSxHQUFDQyxDQUFDLElBQUksSUFBSSxDQUFDQyxhQUFhLENBQUNmLE9BQU8sQ0FBQztNQUMvQ0EsT0FBTyxDQUFDZ0IsR0FBRyxHQUFDaEIsT0FBTyxDQUFDaUIsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxDQUFDLENBQUM7RUFFTjtFQUVBRixhQUFhQSxDQUFDRyxLQUFLLEVBQUM7SUFBQztJQUNqQixJQUFJLENBQUNULE1BQU0sSUFBRyxDQUFDO0lBQ2Y7SUFDQSxNQUFNVSxPQUFPLEdBQUMsSUFBSSxDQUFDVixNQUFNLEdBQUMsSUFBSSxDQUFDUixRQUFRLENBQUNHLE1BQU0sQ0FBQ0ssTUFBTTtJQUNyRCxJQUFJLENBQUNSLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDaUIsU0FBUyxHQUFFLEdBQUVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLEdBQUMsR0FBRyxDQUFFLEdBQUU7SUFDNUQ7O0lBRUEsSUFBR0EsT0FBTyxLQUFJLENBQUMsRUFDZjtNQUNJLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDbkI7RUFDSjtFQUVBQSxRQUFRQSxDQUFBLEVBQUU7SUFBQztJQUNQLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUc7TUFDekIsSUFBSSxDQUFDQyxVQUFVLEdBQUc5Qiw0Q0FBSSxDQUFDK0IsUUFBUSxDQUFDO1FBQzVCQyxLQUFLLEVBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQzs7TUFFRixJQUFJLENBQUNGLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLElBQUksQ0FBQzVCLFFBQVEsQ0FBQ08sVUFBVSxFQUFDO1FBQ3hDO1FBQ0FzQixRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsU0FBUyxFQUFDLENBQUM7UUFDWEMsT0FBTyxFQUFDLEdBQUc7UUFDWEMsQ0FBQyxFQUFFO01BQ1AsQ0FBQyxDQUFDOztNQUVGO01BQ0E7TUFDQTtNQUNBO01BQ0EsSUFBSSxDQUFDUixVQUFVLENBQUNTLElBQUksQ0FBQ3JCLENBQUMsSUFBSTtRQUN0QjtRQUNBO01BQUEsQ0FDSCxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047RUFFQXNCLE9BQU9BLENBQUEsRUFBRTtJQUNMLElBQUksQ0FBQ3BDLE9BQU8sQ0FBQ3FDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3RDLE9BQU8sQ0FBQztFQUNyRDtBQUNKOzs7Ozs7OztVQ3BGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnR7c3BsaXR9IGZyb20ndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6Jy5wcmVsb2FkZXInLFxuICAgICAgICAgICAgZWxlbWVudHM6e1xuICAgICAgICAgICAgICAgIHRpdGxlOicucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgICAgICAgICBudW1iZXI6Jy5wcmVsb2FkZXJfX251bWJlcicsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3BsaXQoe1xuICAgICAgICAgICAgZWxlbWVudDp0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjonPGJyPidcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPXNwbGl0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6dGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246Jzxicj4nXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZW5ndGggPTBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LHRoaXMuZWxlbWVudHMpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICAgIH1cblxuICAgIGNyZWF0ZUxvYWRlcigpeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAgICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcyxlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQ9XyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAgICAgfSkgXG4gICAgICAgXG4gICAgfVxuXG4gICAgb25Bc3NldExvYWRlZChpbWFnZSl7Ly8g5Yqg6L296aG155qE6K6h566X5ZON5bqU5YWs5byPICAgICBcbiAgICAgICAgdGhpcy5sZW5ndGggKz0xXG4gICAgICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICAgICAgY29uc3QgcGVyY2VudD10aGlzLmxlbmd0aC90aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MPWAke01hdGgucm91bmQocGVyY2VudCoxMDApfSVgXG4gICAgICAgIC8vIOi/meS4quaYr+WKoOi9veWujOaJgOacieWbvuWDj+WQjueahOWKoOi9vemhteeahG51bWJlcueahOiuoeeul+WFrOW8j1xuXG4gICAgICAgIGlmKHBlcmNlbnQgPT09MSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub25sb2FkZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25sb2FkZWQoKXsvLyDmjqfliLbliqDovb3pobXnrYnlvoXlpJrkuYXov5vlhaXkuLvpobXlj4rliqjnlLtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgICAgICAgICBkZWxheToyXG4gICAgICAgICAgICAgICAgLy8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG1XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLHtcbiAgICAgICAgICAgICAgICAvLyDlrZfkvZPorr7orqHpgJDmuJDmtojlpLFcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOjAsXG4gICAgICAgICAgICAgICAgc3RhZ2dlcjowLjEsXG4gICAgICAgICAgICAgICAgeTogJzEwMCUnLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgICAgICAvLyAgICAgLy8g6K6pcHJlbG9hZGVy5raI5aSxXG4gICAgICAgICAgICAvLyAgICAgYXV0b0FscGhhOjBcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbChfID0+IHtcbiAgICAgICAgICAgICAgICAvLyDov5vlhaXkuLvpobVcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgIFxuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZTBlNjFjNTJkNjA4NTg2OWU5ZVwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJlYWNoIiwiR1NBUCIsInNwbGl0IiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUxvYWRlciIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25sb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJhdXRvQWxwaGEiLCJzdGFnZ2VyIiwieSIsImNhbGwiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==