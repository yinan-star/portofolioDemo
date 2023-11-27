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
    // this.timeline.play();
    console.log('enter');
  }
  onMouseLeave() {
    // this.timeline.reverse();
    console.log('leave');
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
/******/ 	__webpack_require__.h = () => ("3d917cf7965d798c0aaf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZWFlNzczNDc5NWFkYWVjYjFiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ1k7QUFFckIsTUFBTUUsTUFBTSxTQUFTRCxrREFBUyxDQUFDO0VBQzVDRSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUFFQTtJQUFRLENBQUMsQ0FBQzs7SUFFbEI7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUN0QjtFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYjtJQUNBRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDdEI7RUFFQUUsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakI7SUFDQTtJQUNBLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQztJQUNuRSxJQUFJLENBQUNQLE9BQU8sQ0FBQ00sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0UsaUJBQWlCLENBQUM7RUFDckU7RUFFQUMsbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEIsSUFBSSxDQUFDVCxPQUFPLENBQUNVLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNILGlCQUFpQixDQUFDO0lBQ3RFLElBQUksQ0FBQ1AsT0FBTyxDQUFDVSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQztFQUN4RTtBQUNGOzs7Ozs7OztVQzlDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50IH0pO1xuXG4gICAgLy8gdGhpcy5wYXRoID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKTtcbiAgICAvLyB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIC8vIHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuXG4gICAgLy8gdGhpcy50aW1lbGluZS5mcm9tVG8oXG4gICAgLy8gICB0aGlzLnBhdGgsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcbiAgICAvLyAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICAgIC8vICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIC8vIHRoaXMudGltZWxpbmUucGxheSgpO1xuICAgIGNvbnNvbGUubG9nKCdlbnRlcicpXG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgLy8gdGhpcy50aW1lbGluZS5yZXZlcnNlKCk7XG4gICAgY29uc29sZS5sb2coJ2xlYXZlJylcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgLy8gdGhpcy5vbk1vdXNlRW50ZXJFdmVudCA9IHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5vbk1vdXNlTGVhdmVFdmVudCA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlckV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyRXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmVFdmVudCk7XG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZDkxN2NmNzk2NWQ3OThjMGFhZlwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50Iiwib25Nb3VzZUVudGVyIiwiY29uc29sZSIsImxvZyIsIm9uTW91c2VMZWF2ZSIsImFkZEV2ZW50SGFuZGxlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZUVudGVyRXZlbnQiLCJvbk1vdXNlTGVhdmVFdmVudCIsInJlbW92ZUV2ZW50SGFuZGxlcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==