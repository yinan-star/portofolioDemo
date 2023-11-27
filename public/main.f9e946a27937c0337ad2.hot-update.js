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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Box.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../shaders/plane-fragment.glsl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../shaders/plane-vertex.glsl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



class Canvas {
  constructor() {
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.createCube();
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
  createCube() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_4__.Box(this.gl);
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_5__.Program(this.gl, {
      vertex: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../shaders/plane-vertex.glsl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      fragment: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../shaders/plane-fragment.glsl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    });
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_6__.Mesh(this.gl, {
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
/******/ 	__webpack_require__.h = () => ("5d702bca1f8761d0e904")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOWU5NDZhMjc5MzdjMDMzN2FkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUVoQjtBQUNKO0FBRW5DLE1BQU1RLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNuQjtFQUVBSCxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNJLFFBQVEsR0FBRyxJQUFJYix5Q0FBUSxDQUFDLENBQUM7SUFFOUIsSUFBSSxDQUFDYyxFQUFFLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNDLEVBQUUsQ0FBQyxDQUFDOztJQUU1QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNILEVBQUUsQ0FBQ0ksTUFBTSxDQUFDO0VBQzNDO0VBRUFSLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ1MsTUFBTSxHQUFHLElBQUlwQix1Q0FBTSxDQUFDLElBQUksQ0FBQ2UsRUFBRSxDQUFDO0lBQ2pDLElBQUksQ0FBQ0ssTUFBTSxDQUFDQyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO0VBRTVCO0VBRUFWLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ1csS0FBSyxHQUFHLElBQUlyQiwwQ0FBUyxDQUFDLENBQUM7RUFDOUI7RUFFQVcsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDVyxRQUFRLEdBQUcsSUFBSXJCLG9DQUFHLENBQUMsSUFBSSxDQUFDWSxFQUFFLENBQUM7SUFFaEMsSUFBSSxDQUFDVSxPQUFPLEdBQUcsSUFBSXJCLHdDQUFPLENBQUMsSUFBSSxDQUFDVyxFQUFFLEVBQUU7TUFDbENSLE1BQU07TUFDTkQsUUFBUUEsK0pBQUFBO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDb0IsSUFBSSxHQUFHLElBQUlyQixxQ0FBSSxDQUFDLElBQUksQ0FBQ1UsRUFBRSxFQUFFO01BQzVCUyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO01BQ3ZCQyxPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUNoQixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDO0VBRWpDO0VBR0FLLFFBQVFBLENBQUEsRUFBRztJQUNUO0lBQ0EsSUFBSSxDQUFDZCxRQUFRLENBQUNlLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0lBQzVELElBQUksQ0FBQ1osTUFBTSxDQUFDYSxXQUFXLENBQUM7TUFBRUMsTUFBTSxFQUFFSixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRTtJQUFZLENBQUMsQ0FBQztFQUM3RTtFQUVBRyxNQUFNQSxDQUFBLEVBQUc7SUFDUCxJQUFJLENBQUNULElBQUksQ0FBQ1UsUUFBUSxDQUFDQyxDQUFDLElBQUksSUFBSTtJQUM1QixJQUFJLENBQUNYLElBQUksQ0FBQ1UsUUFBUSxDQUFDRSxDQUFDLElBQUksSUFBSTtJQUU1QixJQUFJLENBQUN4QixRQUFRLENBQUN5QixNQUFNLENBQUM7TUFDbkJuQixNQUFNLEVBQUUsSUFBSSxDQUFDQSxNQUFNO01BQ25CRyxLQUFLLEVBQUUsSUFBSSxDQUFDQTtJQUNkLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDL0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBCb3gsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLmNyZWF0ZUN1YmUoKVxuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7IC8vVElQIHdvcmtzIGxpa2UgYSBjYW52YXMgY29udGV4dFxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgY3JlYXRlQ3ViZSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveCh0aGlzLmdsKVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnRcbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmVcbiAgICB9KVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWQ3MDJiY2ExZjg3NjFkMGU5MDRcIikiXSwibmFtZXMiOlsiQ2FtZXJhIiwiUmVuZGVyZXIiLCJUcmFuc2Zvcm0iLCJCb3giLCJQcm9ncmFtIiwiTWVzaCIsImZyYWdtZW50IiwidmVydGV4IiwiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiZ2VvbWV0cnkiLCJwcm9ncmFtIiwibWVzaCIsInNldFBhcmVudCIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=