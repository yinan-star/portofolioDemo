self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Canvas/Home.js":
/*!***************************************!*\
  !*** ./app/components/Canvas/Home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Media.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Media__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor() {
    this.medias = document.querySelectorAll('.home__gallery__media__image');
    this.createGallery();
  }
  createGallery() {
    lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(this.medias, (element, index) => {
      return new (_Media__WEBPACK_IMPORTED_MODULE_0___default())({
        element,
        index
      });
    });
  }
});

/***/ }),

/***/ "./app/components/Canvas/Media.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/Media.js ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./app/components/Canvas/Home.js");


class Canvas {
  constructor() {
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.createHome();
  }
  createRenderer() {
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_1__.Renderer();
    this.gl = this.renderer.gl; //TIP works like a canvas context

    document.body.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_2__.Camera(this.gl);
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
  }
  createHome() {
    this.home = new _Home__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  onResize() {
    // 将渲染的画布尺寸填满视窗口
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    });
  }
  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.renderer.render({
      camera: this.camera,
      scene: this.scene
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf35e8f382a88ce037ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZDY4YzA3NjZlMGNhNGJmODU3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0M7QUFFN0IsaUVBQWUsTUFBTTtFQUNqQkUsV0FBV0EsQ0FBQSxFQUFFO0lBQ1QsSUFBSSxDQUFDQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQ25DLDhCQUNGLENBQUM7SUFFSCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0VBQ3hCO0VBQ0FBLGFBQWFBLENBQUEsRUFBRTtJQUNYTCxpREFBRyxDQUFDLElBQUksQ0FBQ0UsTUFBTSxFQUFDLENBQUNJLE9BQU8sRUFBQ0MsS0FBSyxLQUFJO01BQzlCLE9BQU8sSUFBSVIsK0NBQUssQ0FBQztRQUNiTyxPQUFPO1FBQUNDO01BQ1osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmtEO0FBRXpCO0FBRVYsTUFBTUssTUFBTSxDQUFDO0VBQzFCWCxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNZLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ25CO0VBRUFILGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksQ0FBQ0ksUUFBUSxHQUFHLElBQUlSLHlDQUFRLENBQUMsQ0FBQztJQUU5QixJQUFJLENBQUNTLEVBQUUsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLENBQUM7O0lBRTVCZixRQUFRLENBQUNnQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNGLEVBQUUsQ0FBQ0csTUFBTSxDQUFDO0VBQzNDO0VBRUFQLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ1EsTUFBTSxHQUFHLElBQUlkLHVDQUFNLENBQUMsSUFBSSxDQUFDVSxFQUFFLENBQUM7SUFDakMsSUFBSSxDQUFDSSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7RUFFNUI7RUFFQVQsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDVSxLQUFLLEdBQUcsSUFBSWYsMENBQVMsQ0FBQyxDQUFDO0VBQzlCO0VBRUFNLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ1UsSUFBSSxHQUFHLElBQUlmLDZDQUFJLENBQUMsQ0FBQztFQUV4QjtFQUdBZ0IsUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQSxJQUFJLENBQUNWLFFBQVEsQ0FBQ1csT0FBTyxDQUFDQyxNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7SUFDNUQsSUFBSSxDQUFDVCxNQUFNLENBQUNVLFdBQVcsQ0FBQztNQUFFQyxNQUFNLEVBQUVKLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFO0lBQVksQ0FBQyxDQUFDO0VBQzdFO0VBRUFHLE1BQU1BLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUNDLENBQUMsSUFBSSxJQUFJO0lBQzVCLElBQUksQ0FBQ0YsSUFBSSxDQUFDQyxRQUFRLENBQUNFLENBQUMsSUFBSSxJQUFJO0lBRTVCLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ3NCLE1BQU0sQ0FBQztNQUNuQmpCLE1BQU0sRUFBRSxJQUFJLENBQUNBLE1BQU07TUFDbkJHLEtBQUssRUFBRSxJQUFJLENBQUNBO0lBQ2QsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNuREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSc7XG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5tZWRpYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcbiAgICB9XG4gICAgY3JlYXRlR2FsbGVyeSgpe1xuICAgICAgICBtYXAodGhpcy5tZWRpYXMsKGVsZW1lbnQsaW5kZXgpID0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxpbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVIb21lKClcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoKVxuXG4gIH1cblxuXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIOWwhua4suafk+eahOeUu+W4g+WwuuWvuOWhq+a7oeinhueql+WPo1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnggKz0gMC4wMVxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi55ICs9IDAuMDFcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZjM1ZThmMzgyYTg4Y2UwMzdlYVwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsIm1hcCIsImNvbnN0cnVjdG9yIiwibWVkaWFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2FsbGVyeSIsImVsZW1lbnQiLCJpbmRleCIsIkNhbWVyYSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiSG9tZSIsIkNhbnZhcyIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJnbCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiaG9tZSIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwibWVzaCIsInJvdGF0aW9uIiwieCIsInkiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9