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
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./app/classes/Component.js");


class Button extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });

    // this.path = element.querySelector('path:last-child');
    // this.pathLength = this.path.getTotalLength();

    // this.timeline = GSAP.timeline({ paused: true });

    // this.timeline.fromTo(
    //   this.path,
    //   {
    //     strokeDashoffset: this.pathLength,
    //     strokeDasharray: `${this.pathLength} ${this.pathLength}`,
    //   },
    //   {
    //     strokeDashoffset: 0,
    //     strokeDasharray: `${this.pathLength} ${this.pathLength}`,
    //   }
    // );
  }

  onMouseEnter() {
    this.timeline.play();
  }
  onMouseLeave() {
    this.timeline.reverse();
  }
  addEventHandlers() {
    // this.onMouseEnterEvent = this.onMouseEnter.bind(this);
    // this.onMouseLeaveEvent = this.onMouseLeave.bind(this);
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
/******/ 	__webpack_require__.h = () => ("7e671d671288d9bfbe36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OTgwMjhhOTUxNTQxM2IyY2EwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ1k7QUFFckIsTUFBTUUsTUFBTSxTQUFTRCxrREFBUyxDQUFDO0VBQzVDRSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUFFQTtJQUFRLENBQUMsQ0FBQzs7SUFFbEI7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUN0QjtFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLENBQUM7RUFDekI7RUFFQUMsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakI7SUFDQTtJQUNBLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQztJQUNuRSxJQUFJLENBQUNSLE9BQU8sQ0FBQ08sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0UsaUJBQWlCLENBQUM7RUFDckU7RUFFQUMsbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEIsSUFBSSxDQUFDVixPQUFPLENBQUNXLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNILGlCQUFpQixDQUFDO0lBQ3RFLElBQUksQ0FBQ1IsT0FBTyxDQUFDVyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQztFQUN4RTtBQUNGOzs7Ozs7OztVQzVDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50IH0pO1xuXG4gICAgLy8gdGhpcy5wYXRoID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKTtcbiAgICAvLyB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIC8vIHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuXG4gICAgLy8gdGhpcy50aW1lbGluZS5mcm9tVG8oXG4gICAgLy8gICB0aGlzLnBhdGgsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcbiAgICAvLyAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICAgIC8vICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMudGltZWxpbmUucGxheSgpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMudGltZWxpbmUucmV2ZXJzZSgpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICAvLyB0aGlzLm9uTW91c2VFbnRlckV2ZW50ID0gdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyRXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmVFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50KTtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdlNjcxZDY3MTI4OGQ5YmZiZTM2XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJDb21wb25lbnQiLCJCdXR0b24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJvbk1vdXNlRW50ZXIiLCJ0aW1lbGluZSIsInBsYXkiLCJvbk1vdXNlTGVhdmUiLCJyZXZlcnNlIiwiYWRkRXZlbnRIYW5kbGVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlRW50ZXJFdmVudCIsIm9uTW91c2VMZWF2ZUV2ZW50IiwicmVtb3ZlRXZlbnRIYW5kbGVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9