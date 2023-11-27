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
    this.createCamera();
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
/******/ 	__webpack_require__.h = () => ("5418d2e9527bb7a86585")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZmU5OTdmMmU3NWIwNDQzMTQ0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFFdkQsTUFBTU0sTUFBTSxDQUFDO0VBQzFCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ25CO0VBRUFILGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksQ0FBQ0ksUUFBUSxHQUFHLElBQUlYLHlDQUFRLENBQUMsQ0FBQztJQUU5QixJQUFJLENBQUNZLEVBQUUsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLENBQUM7O0lBRTVCQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0gsRUFBRSxDQUFDSSxNQUFNLENBQUM7RUFDM0M7RUFFQVIsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDUyxNQUFNLEdBQUcsSUFBSWxCLHVDQUFNLENBQUMsSUFBSSxDQUFDYSxFQUFFLENBQUM7SUFDakMsSUFBSSxDQUFDSyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7RUFFNUI7RUFFQVYsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDVyxLQUFLLEdBQUcsSUFBSW5CLDBDQUFTLENBQUMsQ0FBQztFQUM5QjtFQUVBUyxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNXLFFBQVEsR0FBRyxJQUFJbkIsb0NBQUcsQ0FBQyxJQUFJLENBQUNVLEVBQUUsQ0FBQztJQUVoQyxJQUFJLENBQUNVLE9BQU8sR0FBRyxJQUFJbkIsd0NBQU8sQ0FBQyxJQUFJLENBQUNTLEVBQUUsRUFBRTtNQUNsQ1csTUFBTSxFQUFFLFVBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7TUFDSEMsUUFBUSxFQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSXJCLHFDQUFJLENBQUMsSUFBSSxDQUFDUSxFQUFFLEVBQUM7TUFDM0JTLFFBQVEsRUFBQyxJQUFJLENBQUNBLFFBQVE7TUFDdEJDLE9BQU8sRUFBQyxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNOLEtBQUssQ0FBQztFQUVqQztFQUdBTyxRQUFRQSxDQUFBLEVBQUc7SUFDVDtJQUNBLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ2lCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0lBQzVELElBQUksQ0FBQ2QsTUFBTSxDQUFDZSxXQUFXLENBQUM7TUFBRUMsTUFBTSxFQUFFSixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRTtJQUFZLENBQUMsQ0FBQztFQUM3RTtFQUVBRyxNQUFNQSxDQUFBLEVBQUU7SUFDTixJQUFJLENBQUN2QixRQUFRLENBQUN3QixNQUFNLENBQUM7TUFDbkJsQixNQUFNLEVBQUMsSUFBSSxDQUFDQSxNQUFNO01BQ2xCRyxLQUFLLEVBQUMsSUFBSSxDQUFDQTtJQUNiLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDdEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBCb3gsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVDdWJlKClcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcblxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIHZlcnRleDogLyogZ2xzbCAqLyBgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuXG4gICAgICAgIHVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgIHVuaWZvcm0gbWF0NCBQcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gUHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIFZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIGZyYWdtZW50OiBgXG4gICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gVmVjNCgxLjApO1xuICAgICAgICAgIH0gICAgICAgICBcbiAgICAgICAgYFxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgICB9KVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOnRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6dGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NDE4ZDJlOTUyN2JiN2E4NjU4NVwiKSJdLCJuYW1lcyI6WyJDYW1lcmEiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIkJveCIsIlByb2dyYW0iLCJNZXNoIiwiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiZ2VvbWV0cnkiLCJwcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwic2V0UGFyZW50Iiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9