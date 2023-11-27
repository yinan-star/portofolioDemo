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
      vertex,
      fragment
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
/******/ 	__webpack_require__.h = () => ("abd5ff025adfb7ea84d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMzA0NmE4YjQ0NDVjZDg2MzcyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFFdkQsTUFBTU0sTUFBTSxDQUFDO0VBQzFCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ25CO0VBRUFILGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksQ0FBQ0ksUUFBUSxHQUFHLElBQUlYLHlDQUFRLENBQUMsQ0FBQztJQUU5QixJQUFJLENBQUNZLEVBQUUsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLENBQUM7O0lBRTVCQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0gsRUFBRSxDQUFDSSxNQUFNLENBQUM7RUFDM0M7RUFFQVIsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDUyxNQUFNLEdBQUcsSUFBSWxCLHVDQUFNLENBQUMsSUFBSSxDQUFDYSxFQUFFLENBQUM7SUFDakMsSUFBSSxDQUFDSyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7RUFFNUI7RUFFQVYsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDVyxLQUFLLEdBQUcsSUFBSW5CLDBDQUFTLENBQUMsQ0FBQztFQUM5QjtFQUVBUyxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNXLFFBQVEsR0FBRyxJQUFJbkIsb0NBQUcsQ0FBQyxJQUFJLENBQUNVLEVBQUUsQ0FBQztJQUVoQyxJQUFJLENBQUNVLE9BQU8sR0FBRyxJQUFJbkIsd0NBQU8sQ0FBQyxJQUFJLENBQUNTLEVBQUUsRUFBRTtNQUNsQ1csTUFBTTtNQUNOQztJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlyQixxQ0FBSSxDQUFDLElBQUksQ0FBQ1EsRUFBRSxFQUFFO01BQzVCUyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO01BQ3ZCQyxPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUNoQixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDO0VBRWpDO0VBR0FPLFFBQVFBLENBQUEsRUFBRztJQUNUO0lBQ0EsSUFBSSxDQUFDaEIsUUFBUSxDQUFDaUIsT0FBTyxDQUFDQyxNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7SUFDNUQsSUFBSSxDQUFDZCxNQUFNLENBQUNlLFdBQVcsQ0FBQztNQUFFQyxNQUFNLEVBQUVKLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFO0lBQVksQ0FBQyxDQUFDO0VBQzdFO0VBRUFHLE1BQU1BLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxRQUFRLENBQUNDLENBQUMsSUFBSSxJQUFJO0lBQzVCLElBQUksQ0FBQ1gsSUFBSSxDQUFDVSxRQUFRLENBQUNFLENBQUMsSUFBSSxJQUFJO0lBRTVCLElBQUksQ0FBQzFCLFFBQVEsQ0FBQzJCLE1BQU0sQ0FBQztNQUNuQnJCLE1BQU0sRUFBRSxJQUFJLENBQUNBLE1BQU07TUFDbkJHLEtBQUssRUFBRSxJQUFJLENBQUNBO0lBQ2QsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUM1REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIEJveCwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLmNyZWF0ZUN1YmUoKVxuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7IC8vVElQIHdvcmtzIGxpa2UgYSBjYW52YXMgY29udGV4dFxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgY3JlYXRlQ3ViZSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveCh0aGlzLmdsKVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnQsXG4gICAgfSlcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cbiAgfVxuXG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8g5bCG5riy5p+T55qE55S75biD5bC65a+45aGr5ruh6KeG56qX5Y+jXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCB9KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFiZDVmZjAyNWFkZmI3ZWE4NGQwXCIpIl0sIm5hbWVzIjpbIkNhbWVyYSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiQm94IiwiUHJvZ3JhbSIsIk1lc2giLCJDYW52YXMiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVDdWJlIiwicmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJnZW9tZXRyeSIsInByb2dyYW0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIm1lc2giLCJzZXRQYXJlbnQiLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsInJvdGF0aW9uIiwieCIsInkiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9