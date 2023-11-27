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

/***/ }),

/***/ "./app/pages/Home/Home.js":
/*!********************************!*\
  !*** ./app/pages/Home/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var classes_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Button */ "./app/classes/Button.js");
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");


class Home extends classes_Page__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        link: '.home__link',
        navigation: document.querySelector('.navigation')
      }
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }

  create() {
    super.create();
    this.link = new classes_Button__WEBPACK_IMPORTED_MODULE_0__["default"]({
      element: this.elements.link
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d810fa093fa4c21a9c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NzE2ZTE1ZDQ0MjBjNzcwZjUxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZO0FBRXJCLE1BQU1FLE1BQU0sU0FBU0Qsa0RBQVMsQ0FBQztFQUM1Q0UsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixLQUFLLENBQUM7TUFBRUE7SUFBUSxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3BELElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUU1QyxJQUFJLENBQUNDLFFBQVEsR0FBR1QsNENBQUksQ0FBQ1MsUUFBUSxDQUFDO01BQUVDLE1BQU0sRUFBRTtJQUFLLENBQUMsQ0FBQztJQUUvQyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsTUFBTSxDQUNsQixJQUFJLENBQUNOLElBQUksRUFDVDtNQUNFTyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNMLFVBQVU7TUFDakNNLGVBQWUsRUFBRyxHQUFFLElBQUksQ0FBQ04sVUFBVyxJQUFHLElBQUksQ0FBQ0EsVUFBVztJQUN6RCxDQUFDLEVBQ0Q7TUFDRUssZ0JBQWdCLEVBQUUsQ0FBQztNQUNuQkMsZUFBZSxFQUFHLEdBQUUsSUFBSSxDQUFDTixVQUFXLElBQUcsSUFBSSxDQUFDQSxVQUFXO0lBQ3pELENBQ0YsQ0FBQztFQUNIO0VBRUFPLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJLENBQUMsQ0FBQztFQUN0QjtFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDLENBQUM7RUFDekI7RUFFQUMsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNMLFlBQVksQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyRCxJQUFJLENBQUNDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0wsWUFBWSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ2tCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNILGlCQUFpQixDQUFDO0lBQ25FLElBQUksQ0FBQ2YsT0FBTyxDQUFDa0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0QsaUJBQWlCLENBQUM7RUFDckU7RUFFQUUsbUJBQW1CQSxDQUFBLEVBQUc7SUFDcEIsSUFBSSxDQUFDbkIsT0FBTyxDQUFDb0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0wsaUJBQWlCLENBQUM7SUFDdEUsSUFBSSxDQUFDZixPQUFPLENBQUNvQixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQztFQUN4RTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNvQztBQUNMO0FBRWhCLE1BQU1LLElBQUksU0FBU0Qsb0RBQUk7RUFDcEN0QixXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSndCLEVBQUUsRUFBQyxNQUFNO01BQ1R2QixPQUFPLEVBQUMsT0FBTztNQUNmd0IsUUFBUSxFQUFDO1FBQ1BDLElBQUksRUFBQyxhQUFhO1FBQ2xCQyxVQUFVLEVBQUNDLFFBQVEsQ0FBQ3pCLGFBQWEsQ0FBQyxhQUFhO01BQ2pEO0lBQ0YsQ0FBQyxDQUFDO0lBQ0Y7RUFFRjs7RUFFQTBCLE1BQU1BLENBQUEsRUFBRztJQUNQLEtBQUssQ0FBQ0EsTUFBTSxDQUFDLENBQUM7SUFFZCxJQUFJLENBQUNILElBQUksR0FBRyxJQUFJM0Isc0RBQU0sQ0FBQztNQUNyQkUsT0FBTyxFQUFFLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ0M7SUFDekIsQ0FBQyxDQUFDO0VBQ0o7QUFJRjs7Ozs7Ozs7VUMzQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3BhZ2VzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50IH0pO1xuXG4gICAgdGhpcy5wYXRoID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKTtcbiAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuXG4gICAgdGhpcy50aW1lbGluZS5mcm9tVG8oXG4gICAgICB0aGlzLnBhdGgsXG4gICAgICB7XG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMudGltZWxpbmUucGxheSgpO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMudGltZWxpbmUucmV2ZXJzZSgpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVycygpIHtcbiAgICB0aGlzLm9uTW91c2VFbnRlckV2ZW50ID0gdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyRXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmVFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXJFdmVudCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZUV2ZW50KTtcbiAgfVxufSIsImltcG9ydCBCdXR0b24gZnJvbSAnY2xhc3Nlcy9CdXR0b24nO1xuaW1wb3J0IFBhZ2UgZnJvbSAnY2xhc3Nlcy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZXtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6J2hvbWUnLFxuICAgICAgZWxlbWVudDonLmhvbWUnLFxuICAgICAgZWxlbWVudHM6e1xuICAgICAgICBsaW5rOicuaG9tZV9fbGluaycsXG4gICAgICAgIG5hdmlnYXRpb246ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gc3VwZXIg6LCD55So5LqG54i257G755qE5p6E6YCg5Ye95pWw77yM5bm25Lyg6YCS5LqG5LiA5Liq5YyF5ZCrIGlkOiAnYWJvdXQnIOeahOWvueixoeOAgui/meS4quWvueixoeeUqOS6jueItuexu+eahOaehOmAoOWHveaVsOOAgueEtuWQju+8jOeItuexu+eahOaehOmAoOWHveaVsOS4reeahCBjb25zb2xlLmxvZygnQ3JlYXRlJywgdGhpcy5pZCkg5bCG5Lya5Zyo5o6n5Yi25Y+w6K6w5b2VICdDcmVhdGUgYWJvdXQn44CC6L+Z5piv5Zug5Li654i257G755qE5p6E6YCg5Ye95pWw5o6l5pS25Yiw5LqGIHsgaWQ6ICdhYm91dCcgfSDov5nkuKrlr7nosaHvvIzlubborrDlvZXkuobnm7jlhbPkv6Hmga/jgIJcblxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpO1xuXG4gICAgdGhpcy5saW5rID0gbmV3IEJ1dHRvbih7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLmxpbmssXG4gICAgfSk7XG4gIH1cblxuXG4gIFxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZkODEwZmEwOTNmYTRjMjFhOWM3XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJDb21wb25lbnQiLCJCdXR0b24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJwYXRoIiwicXVlcnlTZWxlY3RvciIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInRpbWVsaW5lIiwicGF1c2VkIiwiZnJvbVRvIiwic3Ryb2tlRGFzaG9mZnNldCIsInN0cm9rZURhc2hhcnJheSIsIm9uTW91c2VFbnRlciIsInBsYXkiLCJvbk1vdXNlTGVhdmUiLCJyZXZlcnNlIiwiYWRkRXZlbnRIYW5kbGVycyIsIm9uTW91c2VFbnRlckV2ZW50IiwiYmluZCIsIm9uTW91c2VMZWF2ZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50SGFuZGxlcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUGFnZSIsIkhvbWUiLCJpZCIsImVsZW1lbnRzIiwibGluayIsIm5hdmlnYXRpb24iLCJkb2N1bWVudCIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=