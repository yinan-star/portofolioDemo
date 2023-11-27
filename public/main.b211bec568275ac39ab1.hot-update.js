"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Box.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");

class Canvas {
  constructor() {
    this.createRenderer();
    this.createScene();
    this.createCube();
  }
  createRenderer() {
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_0__.Renderer();
    this.gl = this.renderer.gl; //TIP works like a canvas context

    document.body.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_1__.Camera(this.gl);
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
  }
  createCube() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_3__.Box(this.gl);
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_4__.Program(this.gl, {
      vertex: /* glsl */`
        attribute vec3 position;

        uniform mat4 modelViewMatrix;
        uniform mat4 ProjectionMatrix;

        void main() {
            gl_Position = ProjectionMatrix * modelViewMatrix * Vec4(position, 1.0);
        }
        `,
      fragment: `
          void main() {
            gl_FragColor = Vec4(1.0);
          }         
        `
    });
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_5__.Mesh(this.geometry, this.program);
    this.mesh.setParent(this.scene);
  }
  onResize() {
    // 将渲染的画布尺寸填满视窗口
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    });
  }
  update() {
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
/******/ 	__webpack_require__.h = () => ("6757ab770897acaf0fd8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMjExYmVjNTY4Mjc1YWMzOWFiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFFdkQsTUFBTU0sTUFBTSxDQUFDO0VBQzFCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNuQjtFQUVBRixjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNHLFFBQVEsR0FBRyxJQUFJVix5Q0FBUSxDQUFDLENBQUM7SUFFOUIsSUFBSSxDQUFDVyxFQUFFLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNDLEVBQUUsQ0FBQyxDQUFDOztJQUU1QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNILEVBQUUsQ0FBQ0ksTUFBTSxDQUFDO0VBQzNDO0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUlsQix1Q0FBTSxDQUFDLElBQUksQ0FBQ1ksRUFBRSxDQUFDO0lBQ2pDLElBQUksQ0FBQ00sTUFBTSxDQUFDQyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO0VBRTVCO0VBRUFYLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ1ksS0FBSyxHQUFHLElBQUluQiwwQ0FBUyxDQUFDLENBQUM7RUFDOUI7RUFFQVEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDWSxRQUFRLEdBQUcsSUFBSW5CLG9DQUFHLENBQUMsSUFBSSxDQUFDUyxFQUFFLENBQUM7SUFFaEMsSUFBSSxDQUFDVyxPQUFPLEdBQUcsSUFBSW5CLHdDQUFPLENBQUMsSUFBSSxDQUFDUSxFQUFFLEVBQUU7TUFDbENZLE1BQU0sRUFBRSxVQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO01BQ0hDLFFBQVEsRUFBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtJQUNJLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlyQixxQ0FBSSxDQUFDLElBQUksQ0FBQ2lCLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQztJQUNqRCxJQUFJLENBQUNHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDO0VBRWpDO0VBR0FPLFFBQVFBLENBQUEsRUFBRztJQUNUO0lBQ0EsSUFBSSxDQUFDakIsUUFBUSxDQUFDa0IsT0FBTyxDQUFDQyxNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7SUFDNUQsSUFBSSxDQUFDZCxNQUFNLENBQUNlLFdBQVcsQ0FBQztNQUFFQyxNQUFNLEVBQUVKLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFO0lBQVksQ0FBQyxDQUFDO0VBQzdFO0VBRUFHLE1BQU1BLENBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQztNQUNuQmxCLE1BQU0sRUFBQyxJQUFJLENBQUNBLE1BQU07TUFDbEJHLEtBQUssRUFBQyxJQUFJLENBQUNBO0lBQ2IsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNsRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIEJveCwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlQ3ViZSgpXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDsgLy9USVAgd29ya3MgbGlrZSBhIGNhbnZhcyBjb250ZXh0XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG5cbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICB2ZXJ0ZXg6IC8qIGdsc2wgKi8gYFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcblxuICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICB1bmlmb3JtIG1hdDQgUHJvamVjdGlvbk1hdHJpeDtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IFByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiBWZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICBmcmFnbWVudDogYFxuICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IFZlYzQoMS4wKTtcbiAgICAgICAgICB9ICAgICAgICAgXG4gICAgICAgIGBcbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5wcm9ncmFtKVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOnRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6dGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NzU3YWI3NzA4OTdhY2FmMGZkOFwiKSJdLCJuYW1lcyI6WyJDYW1lcmEiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIkJveCIsIlByb2dyYW0iLCJNZXNoIiwiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiZ2VvbWV0cnkiLCJwcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwic2V0UGFyZW50Iiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9