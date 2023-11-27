"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Canvas/Media.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/Media.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var shaders_plane_fragment_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shaders/plane-fragment.glsl */ "./app/shaders/plane-fragment.glsl");
/* harmony import */ var shaders_plane_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shaders/plane-vertex.glsl */ "./app/shaders/plane-vertex.glsl");
//处理照片



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    element,
    geometry,
    gl,
    scene
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    // 上面的elment都是需要复用的所以在这里初始化
  }

  createTexture() {
    this.texture = new ogl__WEBPACK_IMPORTED_MODULE_2__.Texture(this.gl);
    this.image = new Image();
    this.image.src = this.element.getAttribute('data-src');
    this.image.onload = _ => this.texture.image = this.image;
    console.log(this.element);
  }
  // 然后将选好的照片传给program处理贴图
  createProgram() {
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_3__.Program(this.gl, {
      fragment: shaders_plane_fragment_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      vertex: shaders_plane_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
      uniforms: {
        //   tMap: { value: this.texture },
      }
    });
  }
  createMesh() {
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_4__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.mesh.setParent(this.scene);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44c781f57f7f2c528442")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYjkyMWY0MWE2N2MwMzNjY2JhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dEO0FBRUw7QUFDSjtBQUUvQyxpRUFBZSxNQUFNO0VBQ25CTSxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsUUFBUTtJQUFFQyxFQUFFO0lBQUNDO0VBQU0sQ0FBQyxFQUFFO0lBQzNDLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsRUFBRSxHQUFDQSxFQUFFO0lBQ1YsSUFBSSxDQUFDRCxRQUFRLEdBQUNBLFFBQVE7SUFDdEIsSUFBSSxDQUFDRSxLQUFLLEdBQUNBLEtBQUs7SUFDaEI7RUFDRjs7RUFDQUMsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSVQsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsQ0FBQztJQUVuQyxJQUFJLENBQUNJLEtBQUssR0FBRSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNELEtBQUssQ0FBQ0UsR0FBRyxHQUFFLElBQUksQ0FBQ1IsT0FBTyxDQUFDUyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ3JELElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxNQUFNLEdBQUNDLENBQUMsSUFBRyxJQUFJLENBQUNOLE9BQU8sQ0FBQ0MsS0FBSyxHQUFFLElBQUksQ0FBQ0EsS0FBTTtJQUVyRE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDYixPQUFPLENBQUM7RUFFM0I7RUFDQTtFQUNBYyxhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJckIsd0NBQU8sQ0FBQyxJQUFJLENBQUNRLEVBQUUsRUFBRTtNQUNsQ0wsUUFBUTtNQUNSQyxNQUFNO01BQ05rQixRQUFRLEVBQUU7UUFDUjtNQUFBO0lBRUosQ0FBQyxDQUFDO0VBRUo7RUFDQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUMsSUFBSXpCLHFDQUFJLENBQUMsSUFBSSxDQUFDUyxFQUFFLEVBQUM7TUFDekJELFFBQVEsRUFBQyxJQUFJLENBQUNBLFFBQVE7TUFDdEJjLE9BQU8sRUFBQyxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNoQixLQUFLLENBQUM7RUFDakM7QUFDRjs7Ozs7Ozs7VUMxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+WkhOeQhueFp+eJh1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVHJhbnNmb3JtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLHNjZW5lIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbD1nbFxuICAgIHRoaXMuZ2VvbWV0cnk9Z2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lPXNjZW5lXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKTtcblxuICAgIHRoaXMuaW1hZ2UgPW5ldyBJbWFnZSgpXG4gICAgdGhpcy5pbWFnZS5zcmMgPXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZD1fPT4odGhpcy50ZXh0dXJlLmltYWdlID10aGlzLmltYWdlKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcblxuICB9XG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIC8vICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIH1cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2g9bmV3IE1lc2godGhpcy5nbCx7XG4gICAgICBnZW9tZXRyeTp0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgICB9KVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ0Yzc4MWY1N2Y3ZjJjNTI4NDQyXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVHJhbnNmb3JtIiwiVGV4dHVyZSIsImZyYWdtZW50IiwidmVydGV4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsInNjZW5lIiwiY3JlYXRlVGV4dHVyZSIsInRleHR1cmUiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQcm9ncmFtIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwiY3JlYXRlTWVzaCIsIm1lc2giLCJzZXRQYXJlbnQiXSwic291cmNlUm9vdCI6IiJ9