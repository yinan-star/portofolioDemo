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
/******/ 	__webpack_require__.h = () => ("698028a9515413b2ca06")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMmU2YmVlZmM1NTMzNDU3YjAyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZO0FBRXJCLE1BQU1FLE1BQU0sU0FBU0Qsa0RBQVMsQ0FBQztFQUM1Q0UsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixLQUFLLENBQUM7TUFBRUE7SUFBUSxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3BELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUU1QyxJQUFJLENBQUNDLFFBQVEsR0FBR1QsNENBQUksQ0FBQ1MsUUFBUSxDQUFDO01BQUVDLE1BQU0sRUFBRTtJQUFLLENBQUMsQ0FBQztJQUUvQyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsTUFBTSxDQUNsQixJQUFJLENBQUNOLElBQUksRUFDVDtNQUNFTyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNMLFVBQVU7TUFDakNNLGVBQWUsRUFBRyxHQUFFLElBQUksQ0FBQ04sVUFBVyxJQUFHLElBQUksQ0FBQ0EsVUFBVztJQUN6RCxDQUFDLEVBQ0Q7TUFDRUssZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQkMsZUFBZSxFQUFHLEdBQUUsSUFBSSxDQUFDTixVQUFXLElBQUcsSUFBSSxDQUFDQSxVQUFXO0lBQ3pELENBQ0YsQ0FBQztFQUNIO0VBRUFPLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJLENBQUMsQ0FBQztFQUN0QjtFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDLENBQUM7RUFDekI7RUFFQUMsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakI7SUFDQTtJQUNBLElBQUksQ0FBQ2QsT0FBTyxDQUFDZSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQztJQUNuRSxJQUFJLENBQUNoQixPQUFPLENBQUNlLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNFLGlCQUFpQixDQUFDO0VBQ3JFO0VBRUFDLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ3BCLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ21CLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNILGlCQUFpQixDQUFDO0lBQ3RFLElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ21CLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNGLGlCQUFpQixDQUFDO0VBQ3hFO0FBQ0Y7Ozs7Ozs7O1VDNUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvQnV0dG9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7IGVsZW1lbnQgfSk7XG5cbiAgICB0aGlzLnBhdGggPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BhdGg6bGFzdC1jaGlsZCcpO1xuICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMucGF0aC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgdGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSk7XG5cbiAgICB0aGlzLnRpbWVsaW5lLmZyb21UbyhcbiAgICAgIHRoaXMucGF0aCxcbiAgICAgIHtcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogdGhpcy5wYXRoTGVuZ3RoLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDAsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy50aW1lbGluZS5wbGF5KCk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy50aW1lbGluZS5yZXZlcnNlKCk7XG4gIH1cblxuICBhZGRFdmVudEhhbmRsZXJzKCkge1xuICAgIC8vIHRoaXMub25Nb3VzZUVudGVyRXZlbnQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudCk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlckV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlRXZlbnQpO1xuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjk4MDI4YTk1MTU0MTNiMmNhMDZcIikiXSwibmFtZXMiOlsiR1NBUCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsInBhdGgiLCJxdWVyeVNlbGVjdG9yIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwidGltZWxpbmUiLCJwYXVzZWQiLCJmcm9tVG8iLCJzdHJva2VEYXNob2Zmc2V0Iiwic3Ryb2tlRGFzaGFycmF5Iiwib25Nb3VzZUVudGVyIiwicGxheSIsIm9uTW91c2VMZWF2ZSIsInJldmVyc2UiLCJhZGRFdmVudEhhbmRsZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VFbnRlckV2ZW50Iiwib25Nb3VzZUxlYXZlRXZlbnQiLCJyZW1vdmVFdmVudEhhbmRsZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=