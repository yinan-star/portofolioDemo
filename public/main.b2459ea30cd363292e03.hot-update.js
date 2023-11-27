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

    this.createTexture();
    this.createProgram();
    this.createMesh();
  }
  createTexture() {
    this.texture = new ogl__WEBPACK_IMPORTED_MODULE_2__.Texture(this.gl);
    console.log(this.element);
    this.image = new Image();
    this.image.src = this.element.getAttribute('data-src');
    this.image.onload = () => this.texture.image = this.image;
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
/******/ 	__webpack_require__.h = () => ("9aae6cf522e24746188d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMjQ1OWVhMzBjZDM2MzI5MmUwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dEO0FBRUw7QUFDSjtBQUUvQyxpRUFBZSxNQUFNO0VBQ25CTSxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsUUFBUTtJQUFFQyxFQUFFO0lBQUNDO0VBQU0sQ0FBQyxFQUFFO0lBQzNDLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsRUFBRSxHQUFDQSxFQUFFO0lBQ1YsSUFBSSxDQUFDRCxRQUFRLEdBQUNBLFFBQVE7SUFDdEIsSUFBSSxDQUFDRSxLQUFLLEdBQUNBLEtBQUs7SUFDaEI7O0lBRUEsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDbkI7RUFDQUYsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSVgsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsQ0FBQztJQUNuQ00sT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDVCxPQUFPLENBQUM7SUFFekIsSUFBSSxDQUFDVSxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDRCxLQUFLLENBQUNFLEdBQUcsR0FBRyxJQUFJLENBQUNaLE9BQU8sQ0FBQ2EsWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUN0RCxJQUFJLENBQUNILEtBQUssQ0FBQ0ksTUFBTSxHQUFHLE1BQU8sSUFBSSxDQUFDUCxPQUFPLENBQUNHLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQU07RUFJN0Q7RUFDQTtFQUNBTCxhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNVLE9BQU8sR0FBRyxJQUFJckIsd0NBQU8sQ0FBQyxJQUFJLENBQUNRLEVBQUUsRUFBRTtNQUNsQ0wsUUFBUTtNQUNSQyxNQUFNO01BQ05rQixRQUFRLEVBQUU7UUFDUjtNQUFBO0lBRUosQ0FBQyxDQUFDO0VBRUo7RUFDQVYsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDVyxJQUFJLEdBQUMsSUFBSXhCLHFDQUFJLENBQUMsSUFBSSxDQUFDUyxFQUFFLEVBQUM7TUFDekJELFFBQVEsRUFBQyxJQUFJLENBQUNBLFFBQVE7TUFDdEJjLE9BQU8sRUFBQyxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDRSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNmLEtBQUssQ0FBQztFQUNqQztBQUNGOzs7Ozs7OztVQy9DQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUcmFuc2Zvcm0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsc2NlbmUgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsPWdsXG4gICAgdGhpcy5nZW9tZXRyeT1nZW9tZXRyeVxuICAgIHRoaXMuc2NlbmU9c2NlbmVcbiAgICAvLyDkuIrpnaLnmoRlbG1lbnTpg73mmK/pnIDopoHlpI3nlKjnmoTmiYDku6XlnKjov5nph4zliJ3lp4vljJZcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCk7XG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50KVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKTtcblxuICAgXG5cbiAgfVxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICAvLyAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9XG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoPW5ldyBNZXNoKHRoaXMuZ2wse1xuICAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06dGhpcy5wcm9ncmFtXG4gICAgfSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YWFlNmNmNTIyZTI0NzQ2MTg4ZFwiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsIlRyYW5zZm9ybSIsIlRleHR1cmUiLCJmcmFnbWVudCIsInZlcnRleCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJzY2VuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsInByb2dyYW0iLCJ1bmlmb3JtcyIsIm1lc2giLCJzZXRQYXJlbnQiXSwic291cmNlUm9vdCI6IiJ9