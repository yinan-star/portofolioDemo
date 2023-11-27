"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Button.js":
/*!*******************************!*\
  !*** ./app/classes/Button.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./app/classes/Component.js");


class Button extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.path = element.querySelector('path:last-child');
    this.pathLength = this.path.getTotalLength();
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
      paused: true
    });
    this.timeline.fromTo(this.path, {
      strokeDashoffset: this.pathLength,
      strokeDasharray: `${this.pathLength} ${this.pathLength}`
    }, {
      strokeDashoffset: 0,
      strokeDasharray: `${this.pathLength} ${this.pathLength}`
    });
  }
  onMouseEnter() {
    this.timeline.play();
  }
  onMouseLeave() {
    this.timeline.reverse();
  }
  addEventHandlers() {
    this.onMouseEnterEvent = this.onMouseEnter.bind(this);
    this.onMouseLeaveEvent = this.onMouseLeave.bind(this);
    this.element.addEventListener('mouseenter', this.onMouseEnterEvent);
    this.element.addEventListener('mouseleave', this.onMouseLeaveEvent);
  }
  removeEventHandlers() {
    this.element.removeEventListener('mouseenter', this.onMouseEnterEvent);
    this.element.removeEventListener('mouseleave', this.onMouseLeaveEvent);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3c10d311d409085acbb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOTcxNDVmYjE5ZjYzZGY0YWQyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZO0FBRXJCLE1BQU1FLE1BQU0sU0FBU0Qsa0RBQVMsQ0FBQztFQUM1Q0UsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixLQUFLLENBQUM7TUFBRUE7SUFBUSxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3BELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUU1QyxJQUFJLENBQUNDLFFBQVEsR0FBR1QsNENBQUksQ0FBQ1MsUUFBUSxDQUFDO01BQUVDLE1BQU0sRUFBRTtJQUFLLENBQUMsQ0FBQztJQUUvQyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsTUFBTSxDQUNsQixJQUFJLENBQUNOLElBQUksRUFDVDtNQUNFTyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNMLFVBQVU7TUFDakNNLGVBQWUsRUFBRyxHQUFFLElBQUksQ0FBQ04sVUFBVyxJQUFHLElBQUksQ0FBQ0EsVUFBVztJQUN6RCxDQUFDLEVBQ0Q7TUFDRUssZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQkMsZUFBZSxFQUFHLEdBQUUsSUFBSSxDQUFDTixVQUFXLElBQUcsSUFBSSxDQUFDQSxVQUFXO0lBQ3pELENBQ0YsQ0FBQztFQUNIO0VBRUFPLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJLENBQUMsQ0FBQztFQUN0QjtFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDLENBQUM7RUFDekI7RUFFQUMsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNMLFlBQVksQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyRCxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0wsWUFBWSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ2tCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNILGlCQUFpQixDQUFDO0lBQ25FLElBQUksQ0FBQ2YsT0FBTyxDQUFDa0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0QsaUJBQWlCLENBQUM7RUFDckU7RUFFQUUsbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEIsSUFBSSxDQUFDbkIsT0FBTyxDQUFDb0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0wsaUJBQWlCLENBQUM7SUFDdEUsSUFBSSxDQUFDZixPQUFPLENBQUNvQixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQztFQUN4RTtBQUNGOzs7Ozs7OztVQzVDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50IH0pO1xuXG4gICAgdGhpcy5wYXRoID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKTtcbiAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuXG4gICAgdGhpcy50aW1lbGluZS5mcm9tVG8oXG4gICAgICB0aGlzLnBhdGgsXG4gICAgICB7XG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMudGltZWxpbmUucGxheSgpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMudGltZWxpbmUucmV2ZXJzZSgpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICB0aGlzLm9uTW91c2VFbnRlckV2ZW50ID0gdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyRXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmVFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50KTtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIzYzEwZDMxMWQ0MDkwODVhY2JiXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJDb21wb25lbnQiLCJCdXR0b24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJwYXRoIiwicXVlcnlTZWxlY3RvciIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInRpbWVsaW5lIiwicGF1c2VkIiwiZnJvbVRvIiwic3Ryb2tlRGFzaG9mZnNldCIsInN0cm9rZURhc2hhcnJheSIsIm9uTW91c2VFbnRlciIsInBsYXkiLCJvbk1vdXNlTGVhdmUiLCJyZXZlcnNlIiwiYWRkRXZlbnRIYW5kbGVycyIsIm9uTW91c2VFbnRlckV2ZW50IiwiYmluZCIsIm9uTW91c2VMZWF2ZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50SGFuZGxlcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==