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
  }
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
/******/ 	__webpack_require__.h = () => ("93ae33fe64d49924980b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMzk0MGEwMTcwZTNkMDUxOGY5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dEO0FBRUw7QUFDSjtBQUUvQyxpRUFBZSxNQUFNO0VBQ25CTSxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsUUFBUTtJQUFFQyxFQUFFO0lBQUNDO0VBQU0sQ0FBQyxFQUFFO0lBQzNDLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsRUFBRSxHQUFDQSxFQUFFO0lBQ1YsSUFBSSxDQUFDRCxRQUFRLEdBQUNBLFFBQVE7SUFDdEIsSUFBSSxDQUFDRSxLQUFLLEdBQUNBLEtBQUs7SUFDaEI7RUFDRjs7RUFDQUMsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSVQsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsQ0FBQztFQUVyQztFQUNBSSxhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJYix3Q0FBTyxDQUFDLElBQUksQ0FBQ1EsRUFBRSxFQUFFO01BQ2xDTCxRQUFRO01BQ1JDLE1BQU07TUFDTlUsUUFBUSxFQUFFO1FBQ1I7TUFBQTtJQUVKLENBQUMsQ0FBQztFQUVKO0VBQ0FDLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFDLElBQUlqQixxQ0FBSSxDQUFDLElBQUksQ0FBQ1MsRUFBRSxFQUFDO01BQ3pCRCxRQUFRLEVBQUMsSUFBSSxDQUFDQSxRQUFRO01BQ3RCTSxPQUFPLEVBQUMsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDUixLQUFLLENBQUM7RUFDakM7QUFDRjs7Ozs7Ozs7VUNuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL+WkhOeQhueFp+eJh1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVHJhbnNmb3JtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLHNjZW5lIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbD1nbFxuICAgIHRoaXMuZ2VvbWV0cnk9Z2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lPXNjZW5lXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKTtcblxuICB9XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICAvLyAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9XG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoPW5ldyBNZXNoKHRoaXMuZ2wse1xuICAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06dGhpcy5wcm9ncmFtXG4gICAgfSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5M2FlMzNmZTY0ZDQ5OTI0OTgwYlwiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsIlRyYW5zZm9ybSIsIlRleHR1cmUiLCJmcmFnbWVudCIsInZlcnRleCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJzY2VuZSIsImNyZWF0ZVRleHR1cmUiLCJ0ZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsInByb2dyYW0iLCJ1bmlmb3JtcyIsImNyZWF0ZU1lc2giLCJtZXNoIiwic2V0UGFyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==