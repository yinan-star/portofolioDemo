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
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_5__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
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
/******/ 	__webpack_require__.h = () => ("1fe997f2e75b04431445")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NzU3YWI3NzA4OTdhY2FmMGZkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFFdkQsTUFBTU0sTUFBTSxDQUFDO0VBQzFCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNuQjtFQUVBRixjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNHLFFBQVEsR0FBRyxJQUFJVix5Q0FBUSxDQUFDLENBQUM7SUFFOUIsSUFBSSxDQUFDVyxFQUFFLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNDLEVBQUUsQ0FBQyxDQUFDOztJQUU1QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNILEVBQUUsQ0FBQ0ksTUFBTSxDQUFDO0VBQzNDO0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUlsQix1Q0FBTSxDQUFDLElBQUksQ0FBQ1ksRUFBRSxDQUFDO0lBQ2pDLElBQUksQ0FBQ00sTUFBTSxDQUFDQyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO0VBRTVCO0VBRUFYLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ1ksS0FBSyxHQUFHLElBQUluQiwwQ0FBUyxDQUFDLENBQUM7RUFDOUI7RUFFQVEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDWSxRQUFRLEdBQUcsSUFBSW5CLG9DQUFHLENBQUMsSUFBSSxDQUFDUyxFQUFFLENBQUM7SUFFaEMsSUFBSSxDQUFDVyxPQUFPLEdBQUcsSUFBSW5CLHdDQUFPLENBQUMsSUFBSSxDQUFDUSxFQUFFLEVBQUU7TUFDbENZLE1BQU0sRUFBRSxVQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO01BQ0hDLFFBQVEsRUFBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtJQUNJLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlyQixxQ0FBSSxDQUFDLElBQUksQ0FBQ08sRUFBRSxFQUFDO01BQzNCVSxRQUFRLEVBQUMsSUFBSSxDQUFDQSxRQUFRO01BQ3RCQyxPQUFPLEVBQUMsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDTixLQUFLLENBQUM7RUFFakM7RUFHQU8sUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQSxJQUFJLENBQUNqQixRQUFRLENBQUNrQixPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNFLFdBQVcsQ0FBQztJQUM1RCxJQUFJLENBQUNkLE1BQU0sQ0FBQ2UsV0FBVyxDQUFDO01BQUVDLE1BQU0sRUFBRUosTUFBTSxDQUFDQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0U7SUFBWSxDQUFDLENBQUM7RUFDN0U7RUFFQUcsTUFBTUEsQ0FBQSxFQUFFO0lBQ04sSUFBSSxDQUFDeEIsUUFBUSxDQUFDeUIsTUFBTSxDQUFDO01BQ25CbEIsTUFBTSxFQUFDLElBQUksQ0FBQ0EsTUFBTTtNQUNsQkcsS0FBSyxFQUFDLElBQUksQ0FBQ0E7SUFDYixDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQ3JFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSwgQm94LCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVDdWJlKClcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcblxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIHZlcnRleDogLyogZ2xzbCAqLyBgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuXG4gICAgICAgIHVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgIHVuaWZvcm0gbWF0NCBQcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gUHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIFZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIGZyYWdtZW50OiBgXG4gICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gVmVjNCgxLjApO1xuICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgYFxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgICB9KVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOnRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6dGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZmU5OTdmMmU3NWIwNDQzMTQ0NVwiKSJdLCJuYW1lcyI6WyJDYW1lcmEiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIkJveCIsIlByb2dyYW0iLCJNZXNoIiwiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiZ2VvbWV0cnkiLCJwcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwic2V0UGFyZW50Iiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9