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
    console.log('enter');
  }
  onMouseLeave() {
    this.timeline.reverse();
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
/******/ 	__webpack_require__.h = () => ("4eae7734795adaecb1b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NGRjMzAwZTBkZmM4NTIxNmUzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ1k7QUFFckIsTUFBTUUsTUFBTSxTQUFTRCxrREFBUyxDQUFDO0VBQzVDRSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUFFQTtJQUFRLENBQUMsQ0FBQzs7SUFFbEI7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3RCO0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsQ0FBQztJQUN2QkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3RCO0VBRUFHLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCO0lBQ0E7SUFDQSxJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0MsaUJBQWlCLENBQUM7SUFDbkUsSUFBSSxDQUFDVixPQUFPLENBQUNTLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNFLGlCQUFpQixDQUFDO0VBQ3JFO0VBRUFDLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ3BCLElBQUksQ0FBQ1osT0FBTyxDQUFDYSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQztJQUN0RSxJQUFJLENBQUNWLE9BQU8sQ0FBQ2EsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0YsaUJBQWlCLENBQUM7RUFDeEU7QUFDRjs7Ozs7Ozs7VUM5Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHsgZWxlbWVudCB9KTtcblxuICAgIC8vIHRoaXMucGF0aCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigncGF0aDpsYXN0LWNoaWxkJyk7XG4gICAgLy8gdGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAvLyB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KTtcblxuICAgIC8vIHRoaXMudGltZWxpbmUuZnJvbVRvKFxuICAgIC8vICAgdGhpcy5wYXRoLFxuICAgIC8vICAge1xuICAgIC8vICAgICBzdHJva2VEYXNob2Zmc2V0OiB0aGlzLnBhdGhMZW5ndGgsXG4gICAgLy8gICAgIHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgc3Ryb2tlRGFzaG9mZnNldDogMCxcbiAgICAvLyAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG4gICAgLy8gICB9XG4gICAgLy8gKTtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcigpIHtcbiAgICB0aGlzLnRpbWVsaW5lLnBsYXkoKTtcbiAgICBjb25zb2xlLmxvZygnZW50ZXInKVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMudGltZWxpbmUucmV2ZXJzZSgpO1xuICAgIGNvbnNvbGUubG9nKCdsZWF2ZScpXG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXJzKCkge1xuICAgIC8vIHRoaXMub25Nb3VzZUVudGVyRXZlbnQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudCk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlckV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQpO1xuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGVhZTc3MzQ3OTVhZGFlY2IxYjZcIikiXSwibmFtZXMiOlsiR1NBUCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsIm9uTW91c2VFbnRlciIsInRpbWVsaW5lIiwicGxheSIsImNvbnNvbGUiLCJsb2ciLCJvbk1vdXNlTGVhdmUiLCJyZXZlcnNlIiwiYWRkRXZlbnRIYW5kbGVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlRW50ZXJFdmVudCIsIm9uTW91c2VMZWF2ZUV2ZW50IiwicmVtb3ZlRXZlbnRIYW5kbGVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9