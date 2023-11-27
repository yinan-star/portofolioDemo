self["webpackHotUpdatefloema"]("main",{

/***/ "./app/shaders/plane-fragment.glsl":
/*!*****************************************!*\
  !*** ./app/shaders/plane-fragment.glsl ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:12)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> void main() {\n|     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n| }");

/***/ }),

/***/ "./app/shaders/plane-vertex.glsl":
/*!***************************************!*\
  !*** ./app/shaders/plane-vertex.glsl ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> attribute vec3 position;\n| \n| uniform mat4 modelViewMatrix;");

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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Box.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var shaders_plane_fragment_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shaders/plane-fragment.glsl */ "./app/shaders/plane-fragment.glsl");
/* harmony import */ var shaders_plane_fragment_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shaders_plane_fragment_glsl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shaders_plane_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shaders/plane-vertex.glsl */ "./app/shaders/plane-vertex.glsl");
/* harmony import */ var shaders_plane_vertex_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shaders_plane_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__);



class Canvas {
  constructor() {
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.createCube();
  }
  createRenderer() {
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_2__.Renderer();
    this.gl = this.renderer.gl; //TIP works like a canvas context

    document.body.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_3__.Camera(this.gl);
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_4__.Transform();
  }
  createCube() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_5__.Box(this.gl);
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_6__.Program(this.gl, {
      vertex: (shaders_plane_vertex_glsl__WEBPACK_IMPORTED_MODULE_1___default()),
      fragment: (shaders_plane_fragment_glsl__WEBPACK_IMPORTED_MODULE_0___default())
    });
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_7__.Mesh(this.gl, {
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
/******/ 	__webpack_require__.h = () => ("f9e946a27937c0337ad2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYmQ1ZmYwMjVhZGZiN2VhODRkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFFbkI7QUFDSjtBQUVoQyxNQUFNUSxNQUFNLENBQUM7RUFDMUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDbkI7RUFFQUgsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDSSxRQUFRLEdBQUcsSUFBSWIseUNBQVEsQ0FBQyxDQUFDO0lBRTlCLElBQUksQ0FBQ2MsRUFBRSxHQUFHLElBQUksQ0FBQ0QsUUFBUSxDQUFDQyxFQUFFLENBQUMsQ0FBQzs7SUFFNUJDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDSCxFQUFFLENBQUNJLE1BQU0sQ0FBQztFQUMzQztFQUVBUixZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNTLE1BQU0sR0FBRyxJQUFJcEIsdUNBQU0sQ0FBQyxJQUFJLENBQUNlLEVBQUUsQ0FBQztJQUNqQyxJQUFJLENBQUNLLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztFQUU1QjtFQUVBVixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNXLEtBQUssR0FBRyxJQUFJckIsMENBQVMsQ0FBQyxDQUFDO0VBQzlCO0VBRUFXLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ1csUUFBUSxHQUFHLElBQUlyQixvQ0FBRyxDQUFDLElBQUksQ0FBQ1ksRUFBRSxDQUFDO0lBRWhDLElBQUksQ0FBQ1UsT0FBTyxHQUFHLElBQUlyQix3Q0FBTyxDQUFDLElBQUksQ0FBQ1csRUFBRSxFQUFFO01BQ2xDUixNQUFNO01BQ05ELFFBQVFBLHNFQUFBQTtJQUNWLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ29CLElBQUksR0FBRyxJQUFJckIscUNBQUksQ0FBQyxJQUFJLENBQUNVLEVBQUUsRUFBRTtNQUM1QlMsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtNQUN2QkMsT0FBTyxFQUFFLElBQUksQ0FBQ0E7SUFDaEIsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNKLEtBQUssQ0FBQztFQUVqQztFQUdBSyxRQUFRQSxDQUFBLEVBQUc7SUFDVDtJQUNBLElBQUksQ0FBQ2QsUUFBUSxDQUFDZSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNFLFdBQVcsQ0FBQztJQUM1RCxJQUFJLENBQUNaLE1BQU0sQ0FBQ2EsV0FBVyxDQUFDO01BQUVDLE1BQU0sRUFBRUosTUFBTSxDQUFDQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0U7SUFBWSxDQUFDLENBQUM7RUFDN0U7RUFFQUcsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDVCxJQUFJLENBQUNVLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJLElBQUk7SUFDNUIsSUFBSSxDQUFDWCxJQUFJLENBQUNVLFFBQVEsQ0FBQ0UsQ0FBQyxJQUFJLElBQUk7SUFFNUIsSUFBSSxDQUFDeEIsUUFBUSxDQUFDeUIsTUFBTSxDQUFDO01BQ25CbkIsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTTtNQUNuQkcsS0FBSyxFQUFFLElBQUksQ0FBQ0E7SUFDZCxDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQy9EQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSwgQm94LCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVDdWJlKClcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcblxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIHZlcnRleCxcbiAgICAgIGZyYWdtZW50XG4gICAgfSlcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cbiAgfVxuXG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8g5bCG5riy5p+T55qE55S75biD5bC65a+45aGr5ruh6KeG56qX5Y+jXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCB9KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5ZTk0NmEyNzkzN2MwMzM3YWQyXCIpIl0sIm5hbWVzIjpbIkNhbWVyYSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiQm94IiwiUHJvZ3JhbSIsIk1lc2giLCJmcmFnbWVudCIsInZlcnRleCIsIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUN1YmUiLCJyZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImdlb21ldHJ5IiwicHJvZ3JhbSIsIm1lc2giLCJzZXRQYXJlbnQiLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsInJvdGF0aW9uIiwieCIsInkiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9