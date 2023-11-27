"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Canvas/Home.js":
/*!***************************************!*\
  !*** ./app/components/Canvas/Home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Plane.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Media.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(gl, scene) {
    this.gl = gl;
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
    this.medias = document.querySelectorAll('.home__gallery__media__image');
    this.createGallery();
    this.createGeometry();
    this.group.setParent(scene);
  }
  createGeometry() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_3__.Plane(this.gl);
  }
  createGallery() {
    lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(this.medias, (element, index) => {
      return new _Media__WEBPACK_IMPORTED_MODULE_0__["default"]({
        element,
        geometry: this.geometry,
        index,
        scene: this.scene,
        gl: this.gl
      });
      // 传到media的文件里面
    });
  }
});

/***/ }),

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
    this.image = new window.Image();
    this.image.src = this.element.getAttribute('data-src');
    this.image.onload = _ => this.texture.image = this.image;
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

/***/ }),

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
    this.home = new _Home__WEBPACK_IMPORTED_MODULE_0__["default"]({
      gl: this.gl,
      scene: this.scene
    });
  }
  onResize() {
    // 将渲染的画布尺寸填满视窗口
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    });
  }
  update() {
    // this.mesh.rotation.x += 0.01
    // this.mesh.rotation.y += 0.01
    this.renderer.render({
      camera: this.camera,
      scene: this.scene
    });
  }
}

/***/ }),

/***/ "./app/shaders/plane-fragment.glsl":
/*!*****************************************!*\
  !*** ./app/shaders/plane-fragment.glsl ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nvoid main() {\n    gl_FragColor = vec4(0.5, 1.0, 0.0, 1.0);\n}");

/***/ }),

/***/ "./app/shaders/plane-vertex.glsl":
/*!***************************************!*\
  !*** ./app/shaders/plane-vertex.glsl ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),

/***/ "./node_modules/ogl/src/core/Camera.js":
/*!*********************************************!*\
  !*** ./node_modules/ogl/src/core/Camera.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transform.js */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");



const tempMat4 = /* @__PURE__ */new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
const tempVec3a = /* @__PURE__ */new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
const tempVec3b = /* @__PURE__ */new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
class Camera extends _Transform_js__WEBPACK_IMPORTED_MODULE_2__.Transform {
  constructor(gl, {
    near = 0.1,
    far = 100,
    fov = 45,
    aspect = 1,
    left,
    right,
    bottom,
    top,
    zoom = 1
  } = {}) {
    super();
    Object.assign(this, {
      near,
      far,
      fov,
      aspect,
      left,
      right,
      bottom,
      top,
      zoom
    });
    this.projectionMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.viewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.projectionViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.worldPosition = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();

    // Use orthographic if left/right set, else default to perspective camera
    this.type = left || right ? 'orthographic' : 'perspective';
    if (this.type === 'orthographic') this.orthographic();else this.perspective();
  }
  perspective({
    near = this.near,
    far = this.far,
    fov = this.fov,
    aspect = this.aspect
  } = {}) {
    Object.assign(this, {
      near,
      far,
      fov,
      aspect
    });
    this.projectionMatrix.fromPerspective({
      fov: fov * (Math.PI / 180),
      aspect,
      near,
      far
    });
    this.type = 'perspective';
    return this;
  }
  orthographic({
    near = this.near,
    far = this.far,
    left = this.left || -1,
    right = this.right || 1,
    bottom = this.bottom || -1,
    top = this.top || 1,
    zoom = this.zoom
  } = {}) {
    Object.assign(this, {
      near,
      far,
      left,
      right,
      bottom,
      top,
      zoom
    });
    left /= zoom;
    right /= zoom;
    bottom /= zoom;
    top /= zoom;
    this.projectionMatrix.fromOrthogonal({
      left,
      right,
      bottom,
      top,
      near,
      far
    });
    this.type = 'orthographic';
    return this;
  }
  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.inverse(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition);

    // used for sorting
    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }
  lookAt(target) {
    super.lookAt(target, true);
    return this;
  }

  // Project 3D coordinate to 2D point
  project(v) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  }

  // Unproject 2D point to 3D coordinate
  unproject(v) {
    v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }
  updateFrustum() {
    if (!this.frustum) {
      this.frustum = [new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3()];
    }
    const m = this.projectionViewMatrix;
    this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
    this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
    this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
    this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
    this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
    this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

    for (let i = 0; i < 6; i++) {
      const invLen = 1.0 / this.frustum[i].distance();
      this.frustum[i].multiply(invLen);
      this.frustum[i].constant *= invLen;
    }
  }
  frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
    // If no position attribute, treat as frustumCulled false
    if (!node.geometry.attributes.position) return true;
    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
    if (!node.geometry.bounds) return true;
    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(worldMatrix);
    const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(center, radius);
  }
  frustumIntersectsSphere(center, radius) {
    const normal = tempVec3b;
    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance = normal.copy(plane).dot(center) + plane.constant;
      if (distance < -radius) return false;
    }
    return true;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Geometry.js":
/*!***********************************************!*\
  !*** ./node_modules/ogl/src/core/Geometry.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geometry: () => (/* binding */ Geometry)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");
// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalized - boolean default false

//     buffer - gl buffer, if buffer exists, don't need to provide data - although needs position data for bounds calculation
//     stride - default 0 - for when passing in buffer
//     offset - default 0 - for when passing in buffer
//     count - default null - for when passing in buffer
//     min - array - for when passing in buffer
//     max - array - for when passing in buffer
// }

// TODO: fit in transform feedback


const tempVec3 = /* @__PURE__ */new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();
let ID = 1;
let ATTR_ID = 1;

// To stop inifinite warnings
let isBoundsWarned = false;
class Geometry {
  constructor(gl, attributes = {}) {
    if (!gl.canvas) console.error('gl not passed as first argument to Geometry');
    this.gl = gl;
    this.attributes = attributes;
    this.id = ID++;

    // Store one VAO per program attribute locations order
    this.VAOs = {};
    this.drawRange = {
      start: 0,
      count: 0
    };
    this.instancedCount = 0;

    // Unbind current VAO so that new buffers don't get added to active mesh
    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null;

    // Alias for state store to avoid redundant calls for global state
    this.glState = this.gl.renderer.state;

    // create the buffers
    for (let key in attributes) {
      this.addAttribute(key, attributes[key]);
    }
  }
  addAttribute(key, attr) {
    this.attributes[key] = attr;

    // Set options
    attr.id = ATTR_ID++; // TODO: currently unused, remove?
    attr.size = attr.size || 1;
    attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array
    attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    attr.normalized = attr.normalized || false;
    attr.stride = attr.stride || 0;
    attr.offset = attr.offset || 0;
    attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
    attr.divisor = attr.instanced || 0;
    attr.needsUpdate = false;
    attr.usage = attr.usage || this.gl.STATIC_DRAW;
    if (!attr.buffer) {
      // Push data to buffer
      this.updateAttribute(attr);
    }

    // Update geometry counts. If indexed, ignore regular attributes
    if (attr.divisor) {
      this.isInstanced = true;
      if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
        console.warn('geometry has multiple instanced buffers of different length');
        return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
      }
      this.instancedCount = attr.count * attr.divisor;
    } else if (key === 'index') {
      this.drawRange.count = attr.count;
    } else if (!this.attributes.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attr.count);
    }
  }
  updateAttribute(attr) {
    const isNewBuffer = !attr.buffer;
    if (isNewBuffer) attr.buffer = this.gl.createBuffer();
    if (this.glState.boundBuffer !== attr.buffer) {
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
    }
    if (isNewBuffer) {
      this.gl.bufferData(attr.target, attr.data, attr.usage);
    } else {
      this.gl.bufferSubData(attr.target, 0, attr.data);
    }
    attr.needsUpdate = false;
  }
  setIndex(value) {
    this.addAttribute('index', value);
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  setInstancedCount(value) {
    this.instancedCount = value;
  }
  createVAO(program) {
    this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
    this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
    this.bindAttributes(program);
  }
  bindAttributes(program) {
    // Link all attributes to program using gl.vertexAttribPointer
    program.attributeLocations.forEach((location, {
      name,
      type
    }) => {
      // If geometry missing a required shader attribute
      if (!this.attributes[name]) {
        console.warn(`active attribute ${name} not being supplied`);
        return;
      }
      const attr = this.attributes[name];
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;

      // For matrix attributes, buffer needs to be defined per column
      let numLoc = 1;
      if (type === 35674) numLoc = 2; // mat2
      if (type === 35675) numLoc = 3; // mat3
      if (type === 35676) numLoc = 4; // mat4

      const size = attr.size / numLoc;
      const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
      const offset = numLoc === 1 ? 0 : numLoc * 4;
      for (let i = 0; i < numLoc; i++) {
        this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
        this.gl.enableVertexAttribArray(location + i);

        // For instanced attributes, divisor needs to be set.
        // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render
        this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
      }
    });

    // Bind indices if geometry indexed
    if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({
    program,
    mode = this.gl.TRIANGLES
  }) {
    if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
      if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
    }

    // Check if any attributes need updating
    program.attributeLocations.forEach((location, {
      name
    }) => {
      const attr = this.attributes[name];
      if (attr.needsUpdate) this.updateAttribute(attr);
    });

    // For drawElements, offset needs to be multiple of type size
    let indexBytesPerElement = 2;
    if (this.attributes.index?.type === this.gl.UNSIGNED_INT) indexBytesPerElement = 4;
    if (this.isInstanced) {
      if (this.attributes.index) {
        this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * indexBytesPerElement, this.instancedCount);
      } else {
        this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
      }
    } else {
      if (this.attributes.index) {
        this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * indexBytesPerElement);
      } else {
        this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
      }
    }
  }
  getPosition() {
    // Use position buffer, or min/max if available
    const attr = this.attributes.position;
    // if (attr.min) return [...attr.min, ...attr.max];
    if (attr.data) return attr;
    if (isBoundsWarned) return;
    console.warn('No position buffer data found to compute bounds');
    return isBoundsWarned = true;
  }
  computeBoundingBox(attr) {
    if (!attr) attr = this.getPosition();
    const array = attr.data;
    // Data loaded shouldn't haave stride, only buffers
    // const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
    const stride = attr.size;
    if (!this.bounds) {
      this.bounds = {
        min: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        max: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        center: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        scale: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
        radius: Infinity
      };
    }
    const min = this.bounds.min;
    const max = this.bounds.max;
    const center = this.bounds.center;
    const scale = this.bounds.scale;
    min.set(+Infinity);
    max.set(-Infinity);

    // TODO: check size of position (eg triangle with Vec2)
    for (let i = 0, l = array.length; i < l; i += stride) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      min.x = Math.min(x, min.x);
      min.y = Math.min(y, min.y);
      min.z = Math.min(z, min.z);
      max.x = Math.max(x, max.x);
      max.y = Math.max(y, max.y);
      max.z = Math.max(z, max.z);
    }
    scale.sub(max, min);
    center.add(min, max).divide(2);
  }
  computeBoundingSphere(attr) {
    if (!attr) attr = this.getPosition();
    const array = attr.data;
    // Data loaded shouldn't haave stride, only buffers
    // const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
    const stride = attr.size;
    if (!this.bounds) this.computeBoundingBox(attr);
    let maxRadiusSq = 0;
    for (let i = 0, l = array.length; i < l; i += stride) {
      tempVec3.fromArray(array, i);
      maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
    }
    this.bounds.radius = Math.sqrt(maxRadiusSq);
  }
  remove() {
    for (let key in this.VAOs) {
      this.gl.renderer.deleteVertexArray(this.VAOs[key]);
      delete this.VAOs[key];
    }
    for (let key in this.attributes) {
      this.gl.deleteBuffer(this.attributes[key].buffer);
      delete this.attributes[key];
    }
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Mesh.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/core/Mesh.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mesh: () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform.js */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Mat3.js */ "./node_modules/ogl/src/math/Mat3.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");



let ID = 0;
class Mesh extends _Transform_js__WEBPACK_IMPORTED_MODULE_0__.Transform {
  constructor(gl, {
    geometry,
    program,
    mode = gl.TRIANGLES,
    frustumCulled = true,
    renderOrder = 0
  } = {}) {
    super();
    if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
    this.gl = gl;
    this.id = ID++;
    this.geometry = geometry;
    this.program = program;
    this.mode = mode;

    // Used to skip frustum culling
    this.frustumCulled = frustumCulled;

    // Override sorting to force an order
    this.renderOrder = renderOrder;
    this.modelViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__.Mat4();
    this.normalMatrix = new _math_Mat3_js__WEBPACK_IMPORTED_MODULE_2__.Mat3();
    this.beforeRenderCallbacks = [];
    this.afterRenderCallbacks = [];
  }
  onBeforeRender(f) {
    this.beforeRenderCallbacks.push(f);
    return this;
  }
  onAfterRender(f) {
    this.afterRenderCallbacks.push(f);
    return this;
  }
  draw({
    camera
  } = {}) {
    if (camera) {
      // Add empty matrix uniforms to program if unset
      if (!this.program.uniforms.modelMatrix) {
        Object.assign(this.program.uniforms, {
          modelMatrix: {
            value: null
          },
          viewMatrix: {
            value: null
          },
          modelViewMatrix: {
            value: null
          },
          normalMatrix: {
            value: null
          },
          projectionMatrix: {
            value: null
          },
          cameraPosition: {
            value: null
          }
        });
      }

      // Set the matrix uniforms
      this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
      this.program.uniforms.cameraPosition.value = camera.worldPosition;
      this.program.uniforms.viewMatrix.value = camera.viewMatrix;
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
      this.program.uniforms.modelMatrix.value = this.worldMatrix;
      this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
      this.program.uniforms.normalMatrix.value = this.normalMatrix;
    }
    this.beforeRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));

    // determine if faces need to be flipped - when mesh scaled negatively
    let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({
      flipFaces
    });
    this.geometry.draw({
      mode: this.mode,
      program: this.program
    });
    this.afterRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Program.js":
/*!**********************************************!*\
  !*** ./node_modules/ogl/src/core/Program.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Program: () => (/* binding */ Program)
/* harmony export */ });
// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube

let ID = 1;

// cache of typed arrays used to flatten uniform arrays
const arrayCacheF32 = {};
class Program {
  constructor(gl, {
    vertex,
    fragment,
    uniforms = {},
    transparent = false,
    cullFace = gl.BACK,
    frontFace = gl.CCW,
    depthTest = true,
    depthWrite = true,
    depthFunc = gl.LESS
  } = {}) {
    if (!gl.canvas) console.error('gl not passed as first argument to Program');
    this.gl = gl;
    this.uniforms = uniforms;
    this.id = ID++;
    if (!vertex) console.warn('vertex shader not supplied');
    if (!fragment) console.warn('fragment shader not supplied');

    // Store program state
    this.transparent = transparent;
    this.cullFace = cullFace;
    this.frontFace = frontFace;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.depthFunc = depthFunc;
    this.blendFunc = {};
    this.blendEquation = {};

    // set default blendFunc if transparent flagged
    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }

    // compile vertex shader and log errors
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);
    if (gl.getShaderInfoLog(vertexShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
    }

    // compile fragment shader and log errors
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);
    if (gl.getShaderInfoLog(fragmentShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
    }

    // compile program and log errors
    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      return console.warn(gl.getProgramInfoLog(this.program));
    }

    // Remove shader once linked
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    // Get active uniform locations
    this.uniformLocations = new Map();
    let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
      let uniform = gl.getActiveUniform(this.program, uIndex);
      this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));

      // split uniforms' names to separate array and struct declarations
      const split = uniform.name.match(/(\w+)/g);
      uniform.uniformName = split[0];
      uniform.nameComponents = split.slice(1);
    }

    // Get active attribute locations
    this.attributeLocations = new Map();
    const locations = [];
    const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
    for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
      const attribute = gl.getActiveAttrib(this.program, aIndex);
      const location = gl.getAttribLocation(this.program, attribute.name);
      // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
      if (location === -1) continue;
      locations[location] = attribute.name;
      this.attributeLocations.set(attribute, location);
    }
    this.attributeOrder = locations.join('');
  }
  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    this.blendFunc.src = src;
    this.blendFunc.dst = dst;
    this.blendFunc.srcAlpha = srcAlpha;
    this.blendFunc.dstAlpha = dstAlpha;
    if (src) this.transparent = true;
  }
  setBlendEquation(modeRGB, modeAlpha) {
    this.blendEquation.modeRGB = modeRGB;
    this.blendEquation.modeAlpha = modeAlpha;
  }
  applyState() {
    if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);else this.gl.renderer.disable(this.gl.DEPTH_TEST);
    if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);else this.gl.renderer.disable(this.gl.CULL_FACE);
    if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);else this.gl.renderer.disable(this.gl.BLEND);
    if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
    this.gl.renderer.setFrontFace(this.frontFace);
    this.gl.renderer.setDepthMask(this.depthWrite);
    this.gl.renderer.setDepthFunc(this.depthFunc);
    if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
    this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }
  use({
    flipFaces = false
  } = {}) {
    let textureUnit = -1;
    const programActive = this.gl.renderer.state.currentProgram === this.id;

    // Avoid gl call if program already in use
    if (!programActive) {
      this.gl.useProgram(this.program);
      this.gl.renderer.state.currentProgram = this.id;
    }

    // Set only the active uniforms found in the shader
    this.uniformLocations.forEach((location, activeUniform) => {
      let uniform = this.uniforms[activeUniform.uniformName];
      for (const component of activeUniform.nameComponents) {
        if (!uniform) break;
        if (component in uniform) {
          uniform = uniform[component];
        } else if (Array.isArray(uniform.value)) {
          break;
        } else {
          uniform = undefined;
          break;
        }
      }
      if (!uniform) {
        return warn(`Active uniform ${activeUniform.name} has not been supplied`);
      }
      if (uniform && uniform.value === undefined) {
        return warn(`${activeUniform.name} uniform is missing a value parameter`);
      }
      if (uniform.value.texture) {
        textureUnit = textureUnit + 1;

        // Check if texture needs to be updated
        uniform.value.update(textureUnit);
        return setUniform(this.gl, activeUniform.type, location, textureUnit);
      }

      // For texture arrays, set uniform as an array of texture units instead of just one
      if (uniform.value.length && uniform.value[0].texture) {
        const textureUnits = [];
        uniform.value.forEach(value => {
          textureUnit = textureUnit + 1;
          value.update(textureUnit);
          textureUnits.push(textureUnit);
        });
        return setUniform(this.gl, activeUniform.type, location, textureUnits);
      }
      setUniform(this.gl, activeUniform.type, location, uniform.value);
    });
    this.applyState();
    if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function setUniform(gl, type, location, value) {
  value = value.length ? flatten(value) : value;
  const setValue = gl.renderer.state.uniformLocations.get(location);

  // Avoid redundant uniform commands
  if (value.length) {
    if (setValue === undefined || setValue.length !== value.length) {
      // clone array to store as cache
      gl.renderer.state.uniformLocations.set(location, value.slice(0));
    } else {
      if (arraysEqual(setValue, value)) return;

      // Update cached array values
      setValue.set ? setValue.set(value) : setArray(setValue, value);
      gl.renderer.state.uniformLocations.set(location, setValue);
    }
  } else {
    if (setValue === value) return;
    gl.renderer.state.uniformLocations.set(location, value);
  }
  switch (type) {
    case 5126:
      return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
    // FLOAT
    case 35664:
      return gl.uniform2fv(location, value);
    // FLOAT_VEC2
    case 35665:
      return gl.uniform3fv(location, value);
    // FLOAT_VEC3
    case 35666:
      return gl.uniform4fv(location, value);
    // FLOAT_VEC4
    case 35670: // BOOL
    case 5124: // INT
    case 35678: // SAMPLER_2D
    case 35680:
      return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
    // SAMPLER_CUBE
    case 35671: // BOOL_VEC2
    case 35667:
      return gl.uniform2iv(location, value);
    // INT_VEC2
    case 35672: // BOOL_VEC3
    case 35668:
      return gl.uniform3iv(location, value);
    // INT_VEC3
    case 35673: // BOOL_VEC4
    case 35669:
      return gl.uniform4iv(location, value);
    // INT_VEC4
    case 35674:
      return gl.uniformMatrix2fv(location, false, value);
    // FLOAT_MAT2
    case 35675:
      return gl.uniformMatrix3fv(location, false, value);
    // FLOAT_MAT3
    case 35676:
      return gl.uniformMatrix4fv(location, false, value);
    // FLOAT_MAT4
  }
}

function addLineNumbers(string) {
  let lines = string.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ': ' + lines[i];
  }
  return lines.join('\n');
}
function flatten(a) {
  const arrayLen = a.length;
  const valueLen = a[0].length;
  if (valueLen === undefined) return a;
  const length = arrayLen * valueLen;
  let value = arrayCacheF32[length];
  if (!value) arrayCacheF32[length] = value = new Float32Array(length);
  for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
  return value;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function setArray(a, b) {
  for (let i = 0, l = a.length; i < l; i++) {
    a[i] = b[i];
  }
}
let warnCount = 0;
function warn(message) {
  if (warnCount > 100) return;
  console.warn(message);
  warnCount++;
  if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Renderer.js":
/*!***********************************************!*\
  !*** ./node_modules/ogl/src/core/Renderer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");


// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );

const tempVec3 = /* @__PURE__ */new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();
let ID = 1;
class Renderer {
  constructor({
    canvas = document.createElement('canvas'),
    width = 300,
    height = 150,
    dpr = 1,
    alpha = false,
    depth = true,
    stencil = false,
    antialias = false,
    premultipliedAlpha = false,
    preserveDrawingBuffer = false,
    powerPreference = 'default',
    autoClear = true,
    webgl = 2
  } = {}) {
    const attributes = {
      alpha,
      depth,
      stencil,
      antialias,
      premultipliedAlpha,
      preserveDrawingBuffer,
      powerPreference
    };
    this.dpr = dpr;
    this.alpha = alpha;
    this.color = true;
    this.depth = depth;
    this.stencil = stencil;
    this.premultipliedAlpha = premultipliedAlpha;
    this.autoClear = autoClear;
    this.id = ID++;

    // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;
    if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
    if (!this.gl) console.error('unable to create webgl context');

    // Attach renderer to gl so that all classes have access to internal state functions
    this.gl.renderer = this;

    // initialise size values
    this.setSize(width, height);

    // gl state stores to avoid redundant calls on methods used internally
    this.state = {};
    this.state.blendFunc = {
      src: this.gl.ONE,
      dst: this.gl.ZERO
    };
    this.state.blendEquation = {
      modeRGB: this.gl.FUNC_ADD
    };
    this.state.cullFace = false;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LESS;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = {
      x: 0,
      y: 0,
      width: null,
      height: null
    };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = new Map();
    this.state.currentProgram = null;

    // store requested extensions
    this.extensions = {};

    // Initialise extra format types
    if (this.isWebgl2) {
      this.getExtension('EXT_color_buffer_float');
      this.getExtension('OES_texture_float_linear');
    } else {
      this.getExtension('OES_texture_float');
      this.getExtension('OES_texture_float_linear');
      this.getExtension('OES_texture_half_float');
      this.getExtension('OES_texture_half_float_linear');
      this.getExtension('OES_element_index_uint');
      this.getExtension('OES_standard_derivatives');
      this.getExtension('EXT_sRGB');
      this.getExtension('WEBGL_depth_texture');
      this.getExtension('WEBGL_draw_buffers');
    }
    this.getExtension('WEBGL_compressed_texture_astc');
    this.getExtension('EXT_texture_compression_bptc');
    this.getExtension('WEBGL_compressed_texture_s3tc');
    this.getExtension('WEBGL_compressed_texture_etc1');
    this.getExtension('WEBGL_compressed_texture_pvrtc');
    this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

    // Create method aliases using extension (WebGL1) or native if available (WebGL2)
    this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
    this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
    this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
    this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
    this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
    this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
    this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

    // Store device parameters
    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic') ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.gl.canvas.width = width * this.dpr;
    this.gl.canvas.height = height * this.dpr;
    if (!this.gl.canvas.style) return;
    Object.assign(this.gl.canvas.style, {
      width: width + 'px',
      height: height + 'px'
    });
  }
  setViewport(width, height, x = 0, y = 0) {
    if (this.state.viewport.width === width && this.state.viewport.height === height) return;
    this.state.viewport.width = width;
    this.state.viewport.height = height;
    this.state.viewport.x = x;
    this.state.viewport.y = y;
    this.gl.viewport(x, y, width, height);
  }
  setScissor(width, height, x = 0, y = 0) {
    this.gl.scissor(x, y, width, height);
  }
  enable(id) {
    if (this.state[id] === true) return;
    this.gl.enable(id);
    this.state[id] = true;
  }
  disable(id) {
    if (this.state[id] === false) return;
    this.gl.disable(id);
    this.state[id] = false;
  }
  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
    this.state.blendFunc.src = src;
    this.state.blendFunc.dst = dst;
    this.state.blendFunc.srcAlpha = srcAlpha;
    this.state.blendFunc.dstAlpha = dstAlpha;
    if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);else this.gl.blendFunc(src, dst);
  }
  setBlendEquation(modeRGB, modeAlpha) {
    modeRGB = modeRGB || this.gl.FUNC_ADD;
    if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
    this.state.blendEquation.modeRGB = modeRGB;
    this.state.blendEquation.modeAlpha = modeAlpha;
    if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);else this.gl.blendEquation(modeRGB);
  }
  setCullFace(value) {
    if (this.state.cullFace === value) return;
    this.state.cullFace = value;
    this.gl.cullFace(value);
  }
  setFrontFace(value) {
    if (this.state.frontFace === value) return;
    this.state.frontFace = value;
    this.gl.frontFace(value);
  }
  setDepthMask(value) {
    if (this.state.depthMask === value) return;
    this.state.depthMask = value;
    this.gl.depthMask(value);
  }
  setDepthFunc(value) {
    if (this.state.depthFunc === value) return;
    this.state.depthFunc = value;
    this.gl.depthFunc(value);
  }
  activeTexture(value) {
    if (this.state.activeTextureUnit === value) return;
    this.state.activeTextureUnit = value;
    this.gl.activeTexture(this.gl.TEXTURE0 + value);
  }
  bindFramebuffer({
    target = this.gl.FRAMEBUFFER,
    buffer = null
  } = {}) {
    if (this.state.framebuffer === buffer) return;
    this.state.framebuffer = buffer;
    this.gl.bindFramebuffer(target, buffer);
  }
  getExtension(extension, webgl2Func, extFunc) {
    // if webgl2 function supported, return func bound to gl context
    if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);

    // fetch extension once only
    if (!this.extensions[extension]) {
      this.extensions[extension] = this.gl.getExtension(extension);
    }

    // return extension if no function requested
    if (!webgl2Func) return this.extensions[extension];

    // Return null if extension not supported
    if (!this.extensions[extension]) return null;

    // return extension function, bound to extension
    return this.extensions[extension][extFunc].bind(this.extensions[extension]);
  }
  sortOpaque(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else if (a.zDepth !== b.zDepth) {
      return a.zDepth - b.zDepth;
    } else {
      return b.id - a.id;
    }
  }
  sortTransparent(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    }
    if (a.zDepth !== b.zDepth) {
      return b.zDepth - a.zDepth;
    } else {
      return b.id - a.id;
    }
  }
  sortUI(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else {
      return b.id - a.id;
    }
  }
  getRenderList({
    scene,
    camera,
    frustumCull,
    sort
  }) {
    let renderList = [];
    if (camera && frustumCull) camera.updateFrustum();

    // Get visible
    scene.traverse(node => {
      if (!node.visible) return true;
      if (!node.draw) return;
      if (frustumCull && node.frustumCulled && camera) {
        if (!camera.frustumIntersectsMesh(node)) return;
      }
      renderList.push(node);
    });
    if (sort) {
      const opaque = [];
      const transparent = []; // depthTest true
      const ui = []; // depthTest false

      renderList.forEach(node => {
        // Split into the 3 render groups
        if (!node.program.transparent) {
          opaque.push(node);
        } else if (node.program.depthTest) {
          transparent.push(node);
        } else {
          ui.push(node);
        }
        node.zDepth = 0;

        // Only calculate z-depth if renderOrder unset and depthTest is true
        if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;

        // update z-depth
        node.worldMatrix.getTranslation(tempVec3);
        tempVec3.applyMatrix4(camera.projectionViewMatrix);
        node.zDepth = tempVec3.z;
      });
      opaque.sort(this.sortOpaque);
      transparent.sort(this.sortTransparent);
      ui.sort(this.sortUI);
      renderList = opaque.concat(transparent, ui);
    }
    return renderList;
  }
  render({
    scene,
    camera,
    target = null,
    update = true,
    sort = true,
    frustumCull = true,
    clear
  }) {
    if (target === null) {
      // make sure no render target bound so draws to canvas
      this.bindFramebuffer();
      this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      // bind supplied render target and update viewport
      this.bindFramebuffer(target);
      this.setViewport(target.width, target.height);
    }
    if (clear || this.autoClear && clear !== false) {
      // Ensure depth buffer writing is enabled so it can be cleared
      if (this.depth && (!target || target.depth)) {
        this.enable(this.gl.DEPTH_TEST);
        this.setDepthMask(true);
      }
      this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
    }

    // updates all scene graph matrices
    if (update) scene.updateMatrixWorld();

    // Update camera separately, in case not in scene graph
    if (camera) camera.updateMatrixWorld();

    // Get render list - entails culling and sorting
    const renderList = this.getRenderList({
      scene,
      camera,
      frustumCull,
      sort
    });
    renderList.forEach(node => {
      node.draw({
        camera
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Texture.js":
/*!**********************************************!*\
  !*** ./node_modules/ogl/src/core/Texture.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Texture: () => (/* binding */ Texture)
/* harmony export */ });
// TODO: delete texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads

const emptyPixel = new Uint8Array(4);
function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
let ID = 1;
class Texture {
  constructor(gl, {
    image,
    target = gl.TEXTURE_2D,
    type = gl.UNSIGNED_BYTE,
    format = gl.RGBA,
    internalFormat = format,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    generateMipmaps = true,
    minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
    magFilter = gl.LINEAR,
    premultiplyAlpha = false,
    unpackAlignment = 4,
    flipY = target == gl.TEXTURE_2D ? true : false,
    anisotropy = 0,
    level = 0,
    width,
    // used for RenderTargets or Data Textures
    height = width
  } = {}) {
    this.gl = gl;
    this.id = ID++;
    this.image = image;
    this.target = target;
    this.type = type;
    this.format = format;
    this.internalFormat = internalFormat;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.generateMipmaps = generateMipmaps;
    this.premultiplyAlpha = premultiplyAlpha;
    this.unpackAlignment = unpackAlignment;
    this.flipY = flipY;
    this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
    this.level = level;
    this.width = width;
    this.height = height;
    this.texture = this.gl.createTexture();
    this.store = {
      image: null
    };

    // Alias for state store to avoid redundant calls for global state
    this.glState = this.gl.renderer.state;

    // State store to avoid redundant calls for per-texture state
    this.state = {};
    this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
    this.state.magFilter = this.gl.LINEAR;
    this.state.wrapS = this.gl.REPEAT;
    this.state.wrapT = this.gl.REPEAT;
    this.state.anisotropy = 0;
  }
  bind() {
    // Already bound to active texture unit
    if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
    this.gl.bindTexture(this.target, this.texture);
    this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
  }
  update(textureUnit = 0) {
    const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);

    // Make sure that texture is bound to its texture unit
    if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
      // set active texture unit to perform texture functions
      this.gl.renderer.activeTexture(textureUnit);
      this.bind();
    }
    if (!needsUpdate) return;
    this.needsUpdate = false;
    if (this.flipY !== this.glState.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
      this.glState.flipY = this.flipY;
    }
    if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
      this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      this.glState.premultiplyAlpha = this.premultiplyAlpha;
    }
    if (this.unpackAlignment !== this.glState.unpackAlignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
      this.glState.unpackAlignment = this.unpackAlignment;
    }
    if (this.minFilter !== this.state.minFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
      this.state.minFilter = this.minFilter;
    }
    if (this.magFilter !== this.state.magFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
      this.state.magFilter = this.magFilter;
    }
    if (this.wrapS !== this.state.wrapS) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
      this.state.wrapS = this.wrapS;
    }
    if (this.wrapT !== this.state.wrapT) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
      this.state.wrapT = this.wrapT;
    }
    if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
      this.gl.texParameterf(this.target, this.gl.renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy);
      this.state.anisotropy = this.anisotropy;
    }
    if (this.image) {
      if (this.image.width) {
        this.width = this.image.width;
        this.height = this.image.height;
      }
      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        // For cube maps
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
        }
      } else if (ArrayBuffer.isView(this.image)) {
        // Data texture
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
      } else if (this.image.isCompressedTexture) {
        // Compressed texture
        for (let level = 0; level < this.image.length; level++) {
          this.gl.compressedTexImage2D(this.target, level, this.internalFormat, this.image[level].width, this.image[level].height, 0, this.image[level].data);
        }
      } else {
        // Regular texture
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
      }
      if (this.generateMipmaps) {
        // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
        if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
          this.generateMipmaps = false;
          this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
          this.minFilter = this.gl.LINEAR;
        } else {
          this.gl.generateMipmap(this.target);
        }
      }

      // Callback for when data is pushed to GPU
      this.onUpdate && this.onUpdate();
    } else {
      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        // Upload empty pixel for each side while no image to avoid errors while image or video loading
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
        }
      } else if (this.width) {
        // image intentionally left null for RenderTarget
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
      } else {
        // Upload empty pixel if no image to avoid errors while image or video loading
        this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
      }
    }
    this.store.image = this.image;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/core/Transform.js":
/*!************************************************!*\
  !*** ./node_modules/ogl/src/core/Transform.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3.js */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Quat.js */ "./node_modules/ogl/src/math/Quat.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");
/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Euler.js */ "./node_modules/ogl/src/math/Euler.js");




class Transform {
  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.worldMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
    this.matrixAutoUpdate = true;
    this.worldMatrixNeedsUpdate = false;
    this.position = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
    this.quaternion = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_2__.Quat();
    this.scale = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(1);
    this.rotation = new _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__.Euler();
    this.up = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(0, 1, 0);
    this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
    this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }
  setParent(parent, notifyParent = true) {
    if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
    this.parent = parent;
    if (notifyParent && parent) parent.addChild(this, false);
  }
  addChild(child, notifyChild = true) {
    if (!~this.children.indexOf(child)) this.children.push(child);
    if (notifyChild) child.setParent(this, false);
  }
  removeChild(child, notifyChild = true) {
    if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
    if (notifyChild) child.setParent(null, false);
  }
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.worldMatrixNeedsUpdate || force) {
      if (this.parent === null) this.worldMatrix.copy(this.matrix);else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      this.worldMatrixNeedsUpdate = false;
      force = true;
    }
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }
  traverse(callback) {
    // Return true in callback to stop traversing children
    if (callback(this)) return;
    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].traverse(callback);
    }
  }
  decompose() {
    this.matrix.getTranslation(this.position);
    this.matrix.getRotation(this.quaternion);
    this.matrix.getScaling(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(target, invert = false) {
    if (invert) this.matrix.lookAt(this.position, target, this.up);else this.matrix.lookAt(target, this.position, this.up);
    this.matrix.getRotation(this.quaternion);
    this.rotation.fromQuaternion(this.quaternion);
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/extras/Plane.js":
/*!**********************************************!*\
  !*** ./node_modules/ogl/src/extras/Plane.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plane: () => (/* binding */ Plane)
/* harmony export */ });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Geometry.js */ "./node_modules/ogl/src/core/Geometry.js");

class Plane extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__.Geometry {
  constructor(gl, {
    width = 1,
    height = 1,
    widthSegments = 1,
    heightSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;

    // Determine length of arrays
    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6;

    // Generate empty arrays once
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }
  static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
    const io = i;
    const segW = width / wSegs;
    const segH = height / hSegs;
    for (let iy = 0; iy <= hSegs; iy++) {
      let y = iy * segH - height / 2;
      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let x = ix * segW - width / 2;
        position[i * 3 + u] = x * uDir;
        position[i * 3 + v] = y * vDir;
        position[i * 3 + w] = depth / 2;
        normal[i * 3 + u] = 0;
        normal[i * 3 + v] = 0;
        normal[i * 3 + w] = depth >= 0 ? 1 : -1;
        uv[i * 2] = ix / wSegs;
        uv[i * 2 + 1] = 1 - iy / hSegs;
        if (iy === hSegs || ix === wSegs) continue;
        let a = io + ix + iy * (wSegs + 1);
        let b = io + ix + (iy + 1) * (wSegs + 1);
        let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
        let d = io + ix + iy * (wSegs + 1) + 1;
        index[ii * 6] = a;
        index[ii * 6 + 1] = b;
        index[ii * 6 + 2] = d;
        index[ii * 6 + 3] = b;
        index[ii * 6 + 4] = c;
        index[ii * 6 + 5] = d;
        ii++;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Euler.js":
/*!********************************************!*\
  !*** ./node_modules/ogl/src/math/Euler.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Euler: () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/EulerFunc.js */ "./node_modules/ogl/src/math/functions/EulerFunc.js");
/* harmony import */ var _Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mat4.js */ "./node_modules/ogl/src/math/Mat4.js");


const tmpMat4 = /* @__PURE__ */new _Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
class Euler extends Array {
  constructor(x = 0, y = x, z = x, order = 'YXZ') {
    super(x, y, z);
    this.order = order;
    this.onChange = () => {};
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(v) {
    this[0] = v;
    this.onChange();
  }
  set y(v) {
    this[1] = v;
    this.onChange();
  }
  set z(v) {
    this[2] = v;
    this.onChange();
  }
  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this.onChange();
    return this;
  }
  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    this.onChange();
    return this;
  }
  reorder(order) {
    this.order = order;
    this.onChange();
    return this;
  }
  fromRotationMatrix(m, order = this.order) {
    _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_1__.fromRotationMatrix(this, m, order);
    this.onChange();
    return this;
  }
  fromQuaternion(q, order = this.order) {
    tmpMat4.fromQuaternion(q);
    return this.fromRotationMatrix(tmpMat4, order);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Mat3.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Mat3.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mat3: () => (/* binding */ Mat3)
/* harmony export */ });
/* harmony import */ var _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Mat3Func.js */ "./node_modules/ogl/src/math/functions/Mat3Func.js");

class Mat3 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }
  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m00.length) return this.copy(m00);
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }
  translate(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.translate(this, m, v);
    return this;
  }
  rotate(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.rotate(this, m, v);
    return this;
  }
  scale(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, m, v);
    return this;
  }
  multiply(ma, mb) {
    if (mb) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, ma, mb);
    } else {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, ma);
    }
    return this;
  }
  identity() {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
    return this;
  }
  copy(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, m);
    return this;
  }
  fromMatrix4(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.fromMat4(this, m);
    return this;
  }
  fromQuaternion(q) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat(this, q);
    return this;
  }
  fromBasis(vec3a, vec3b, vec3c) {
    this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
    return this;
  }
  inverse(m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, m);
    return this;
  }
  getNormalMatrix(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.normalFromMat4(this, m);
    return this;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Mat4.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Mat4.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mat4: () => (/* binding */ Mat4)
/* harmony export */ });
/* harmony import */ var _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Mat4Func.js */ "./node_modules/ogl/src/math/functions/Mat4Func.js");

class Mat4 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
    super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(v) {
    this[12] = v;
  }
  set y(v) {
    this[13] = v;
  }
  set z(v) {
    this[14] = v;
  }
  set w(v) {
    this[15] = v;
  }
  set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m00.length) return this.copy(m00);
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }
  translate(v, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.translate(this, m, v);
    return this;
  }
  rotate(v, axis, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.rotate(this, m, v, axis);
    return this;
  }
  scale(v, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, m, typeof v === 'number' ? [v, v, v] : v);
    return this;
  }
  add(ma, mb) {
    if (mb) _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, ma, mb);else _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, ma);
    return this;
  }
  sub(ma, mb) {
    if (mb) _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, ma, mb);else _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, ma);
    return this;
  }
  multiply(ma, mb) {
    if (!ma.length) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiplyScalar(this, this, ma);
    } else if (mb) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, ma, mb);
    } else {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, ma);
    }
    return this;
  }
  identity() {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
    return this;
  }
  copy(m) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, m);
    return this;
  }
  fromPerspective({
    fov,
    aspect,
    near,
    far
  } = {}) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.perspective(this, fov, aspect, near, far);
    return this;
  }
  fromOrthogonal({
    left,
    right,
    bottom,
    top,
    near,
    far
  }) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.ortho(this, left, right, bottom, top, near, far);
    return this;
  }
  fromQuaternion(q) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat(this, q);
    return this;
  }
  setPosition(v) {
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    return this;
  }
  inverse(m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, m);
    return this;
  }
  compose(q, pos, scale) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.fromRotationTranslationScale(this, q, pos, scale);
    return this;
  }
  getRotation(q) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getRotation(q, this);
    return this;
  }
  getTranslation(pos) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getTranslation(pos, this);
    return this;
  }
  getScaling(scale) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getScaling(scale, this);
    return this;
  }
  getMaxScaleOnAxis() {
    return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getMaxScaleOnAxis(this);
  }
  lookAt(eye, target, up) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.targetTo(this, eye, target, up);
    return this;
  }
  determinant() {
    return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.determinant(this);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this[4] = a[o + 4];
    this[5] = a[o + 5];
    this[6] = a[o + 6];
    this[7] = a[o + 7];
    this[8] = a[o + 8];
    this[9] = a[o + 9];
    this[10] = a[o + 10];
    this[11] = a[o + 11];
    this[12] = a[o + 12];
    this[13] = a[o + 13];
    this[14] = a[o + 14];
    this[15] = a[o + 15];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    a[o + 4] = this[4];
    a[o + 5] = this[5];
    a[o + 6] = this[6];
    a[o + 7] = this[7];
    a[o + 8] = this[8];
    a[o + 9] = this[9];
    a[o + 10] = this[10];
    a[o + 11] = this[11];
    a[o + 12] = this[12];
    a[o + 13] = this[13];
    a[o + 14] = this[14];
    a[o + 15] = this[15];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Quat.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Quat.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quat: () => (/* binding */ Quat)
/* harmony export */ });
/* harmony import */ var _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/QuatFunc.js */ "./node_modules/ogl/src/math/functions/QuatFunc.js");

class Quat extends Array {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);
    this.onChange = () => {};
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(v) {
    this[0] = v;
    this.onChange();
  }
  set y(v) {
    this[1] = v;
    this.onChange();
  }
  set z(v) {
    this[2] = v;
    this.onChange();
  }
  set w(v) {
    this[3] = v;
    this.onChange();
  }
  identity() {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
    this.onChange();
    return this;
  }
  set(x, y, z, w) {
    if (x.length) return this.copy(x);
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y, z, w);
    this.onChange();
    return this;
  }
  rotateX(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateX(this, this, a);
    this.onChange();
    return this;
  }
  rotateY(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateY(this, this, a);
    this.onChange();
    return this;
  }
  rotateZ(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateZ(this, this, a);
    this.onChange();
    return this;
  }
  inverse(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, q);
    this.onChange();
    return this;
  }
  conjugate(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.conjugate(this, q);
    this.onChange();
    return this;
  }
  copy(q) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, q);
    this.onChange();
    return this;
  }
  normalize(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, q);
    this.onChange();
    return this;
  }
  multiply(qA, qB) {
    if (qB) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, qA, qB);
    } else {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, qA);
    }
    this.onChange();
    return this;
  }
  dot(v) {
    return _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
  }
  fromMatrix3(matrix3) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.fromMat3(this, matrix3);
    this.onChange();
    return this;
  }
  fromEuler(euler) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.fromEuler(this, euler, euler.order);
    return this;
  }
  fromAxisAngle(axis, a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.setAxisAngle(this, axis, a);
    this.onChange();
    return this;
  }
  slerp(q, t) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.slerp(this, this, q, t);
    this.onChange();
    return this;
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    this.onChange();
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/Vec3.js":
/*!*******************************************!*\
  !*** ./node_modules/ogl/src/math/Vec3.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vec3: () => (/* binding */ Vec3)
/* harmony export */ });
/* harmony import */ var _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Vec3Func.js */ "./node_modules/ogl/src/math/functions/Vec3Func.js");

class Vec3 extends Array {
  constructor(x = 0, y = x, z = x) {
    super(x, y, z);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(v) {
    this[0] = v;
  }
  set y(v) {
    this[1] = v;
  }
  set z(v) {
    this[2] = v;
  }
  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y, z);
    return this;
  }
  copy(v) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, v);
    return this;
  }
  add(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, va);
    return this;
  }
  sub(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, va);
    return this;
  }
  multiply(v) {
    if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
    return this;
  }
  divide(v) {
    if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.divide(this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, 1 / v);
    return this;
  }
  inverse(v = this) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.inverse(this, v);
    return this;
  }

  // Can't use 'length' as Array.prototype uses it
  len() {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
  }
  distance(v) {
    if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.distance(this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
  }
  squaredLen() {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
  }
  squaredDistance(v) {
    if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance(this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
  }
  negate(v = this) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.negate(this, v);
    return this;
  }
  cross(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, this, va);
    return this;
  }
  scale(v) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
    return this;
  }
  normalize() {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, this);
    return this;
  }
  dot(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
  }
  equals(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.exactEquals(this, v);
  }
  applyMatrix3(mat3) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat3(this, this, mat3);
    return this;
  }
  applyMatrix4(mat4) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat4(this, this, mat4);
    return this;
  }
  scaleRotateMatrix4(mat4) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scaleRotateMat4(this, this, mat4);
    return this;
  }
  applyQuaternion(q) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformQuat(this, this, q);
    return this;
  }
  angle(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.angle(this, v);
  }
  lerp(v, t) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this, this, v, t);
    return this;
  }
  clone() {
    return new Vec3(this[0], this[1], this[2]);
  }
  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }
  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }
  transformDirection(mat4) {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
    this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
    this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
    return this.normalize();
  }
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/EulerFunc.js":
/*!**********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/EulerFunc.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromRotationMatrix: () => (/* binding */ fromRotationMatrix)
/* harmony export */ });
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
function fromRotationMatrix(out, m, order = 'YXZ') {
  if (order === 'XYZ') {
    out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
    if (Math.abs(m[8]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[10]);
      out[2] = Math.atan2(-m[4], m[0]);
    } else {
      out[0] = Math.atan2(m[6], m[5]);
      out[2] = 0;
    }
  } else if (order === 'YXZ') {
    out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
    if (Math.abs(m[9]) < 0.99999) {
      out[1] = Math.atan2(m[8], m[10]);
      out[2] = Math.atan2(m[1], m[5]);
    } else {
      out[1] = Math.atan2(-m[2], m[0]);
      out[2] = 0;
    }
  } else if (order === 'ZXY') {
    out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
    if (Math.abs(m[6]) < 0.99999) {
      out[1] = Math.atan2(-m[2], m[10]);
      out[2] = Math.atan2(-m[4], m[5]);
    } else {
      out[1] = 0;
      out[2] = Math.atan2(m[1], m[0]);
    }
  } else if (order === 'ZYX') {
    out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
    if (Math.abs(m[2]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[10]);
      out[2] = Math.atan2(m[1], m[0]);
    } else {
      out[0] = 0;
      out[2] = Math.atan2(-m[4], m[5]);
    }
  } else if (order === 'YZX') {
    out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
    if (Math.abs(m[1]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[5]);
      out[1] = Math.atan2(-m[2], m[0]);
    } else {
      out[0] = 0;
      out[1] = Math.atan2(m[8], m[10]);
    }
  } else if (order === 'XZY') {
    out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
    if (Math.abs(m[4]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[5]);
      out[1] = Math.atan2(m[8], m[0]);
    } else {
      out[0] = Math.atan2(-m[9], m[10]);
      out[1] = 0;
    }
  }
  return out;
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Mat3Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Mat3Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */
function fromQuat(out, q) {
  let x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
      a02 = a[2],
      a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }
  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  let a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  let a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  let b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  let b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  let b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    x = v[0],
    y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0],
    y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */
function normalFromMat4(out, a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Mat4Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Mat4Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   getMaxScaleOnAxis: () => (/* binding */ getMaxScaleOnAxis),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
      a02 = a[2],
      a03 = a[3];
    let a12 = a[6],
      a13 = a[7];
    let a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  let a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  let a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  let a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];

  // Cache only the current line of the second matrix
  let b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0],
    y = v[1],
    z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0],
    y = v[1],
    z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0],
    y = axis[1],
    z = axis[2];
  let len = Math.hypot(x, y, z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;
  if (Math.abs(len) < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getMaxScaleOnAxis(mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  const x = m11 * m11 + m12 * m12 + m13 * m13;
  const y = m21 * m21 + m22 * m22 + m23 * m23;
  const z = m31 * m31 + m32 * m32 + m33 * m33;
  return Math.sqrt(Math.max(x, y, z));
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
const getRotation = function () {
  const temp = [1, 1, 1];
  return function (out, mat) {
    let scaling = temp;
    getScaling(scaling, mat);
    let is1 = 1 / scaling[0];
    let is2 = 1 / scaling[1];
    let is3 = 1 / scaling[2];
    let sm11 = mat[0] * is1;
    let sm12 = mat[1] * is2;
    let sm13 = mat[2] * is3;
    let sm21 = mat[4] * is1;
    let sm22 = mat[5] * is2;
    let sm23 = mat[6] * is3;
    let sm31 = mat[8] * is1;
    let sm32 = mat[9] * is2;
    let sm33 = mat[10] * is3;
    let trace = sm11 + sm22 + sm33;
    let S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1.0) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  };
}();

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} target Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
    eyey = eye[1],
    eyez = eye[2],
    upx = up[0],
    upy = up[1],
    upz = up[2];
  let z0 = eyex - target[0],
    z1 = eyey - target[1],
    z2 = eyez - target[2];
  let len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len === 0) {
    // eye and target are in the same position
    z2 = 1;
  } else {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  let x0 = upy * z2 - upz * z1,
    x1 = upz * z0 - upx * z2,
    x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len === 0) {
    // up and z are parallel
    if (upz) {
      upx += 1e-6;
    } else if (upy) {
      upz += 1e-6;
    } else {
      upy += 1e-6;
    }
    x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
  }
  len = 1 / Math.sqrt(len);
  x0 *= len;
  x1 *= len;
  x2 *= len;
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/QuatFunc.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/QuatFunc.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp)
/* harmony export */ });
/* harmony import */ var _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec4Func.js */ "./node_modules/ogl/src/math/functions/Vec4Func.js");


/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let by = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bz = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;
  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, euler, order = 'YXZ') {
  let sx = Math.sin(euler[0] * 0.5);
  let cx = Math.cos(euler[0] * 0.5);
  let sy = Math.sin(euler[1] * 0.5);
  let cy = Math.cos(euler[1] * 0.5);
  let sz = Math.sin(euler[2] * 0.5);
  let cz = Math.cos(euler[2] * 0.5);
  if (order === 'XYZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'YXZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'ZXY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'ZYX') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'YZX') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'XZY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }
  return out;
}

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.set;

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.add;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.scale;

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp;

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.length;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize;

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Vec3Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Vec3Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleRotateMat4: () => (/* binding */ scaleRotateMat4),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0],
    ay = a[1],
    az = a[2];
  let bx = b[0],
    by = b[1],
    bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0],
    y = a[1],
    z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Same as above but doesn't apply translation.
 * Useful for rays.
 */
function scaleRotateMat4(out, a, m) {
  let x = a[0],
    y = a[1],
    z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed

  let x = a[0],
    y = a[1],
    z = a[2];
  let qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];
  let uvx = qy * z - qz * y;
  let uvy = qz * x - qx * z;
  let uvz = qx * y - qy * x;
  let uuvx = qy * uvz - qz * uvy;
  let uuvy = qz * uvx - qx * uvz;
  let uuvz = qx * uvy - qy * uvx;
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
const angle = function () {
  const tempA = [0, 0, 0];
  const tempB = [0, 0, 0];
  return function (a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    let cosine = dot(tempA, tempB);
    if (cosine > 1.0) {
      return 0;
    } else if (cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/***/ }),

/***/ "./node_modules/ogl/src/math/functions/Vec4Func.js":
/*!*********************************************************!*\
  !*** ./node_modules/ogl/src/math/functions/Vec4Func.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b691356a8b1b7d02e0bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNmFiMjkxYTUxMGEzYzhjOTI1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNYO0FBQ0M7QUFFN0IsaUVBQWUsTUFBTTtFQUNqQkksV0FBV0EsQ0FBQ0MsRUFBRSxFQUFDQyxLQUFLLEVBQUM7SUFDakIsSUFBSSxDQUFDRCxFQUFFLEdBQUNBLEVBQUU7SUFDVixJQUFJLENBQUNFLEtBQUssR0FBRSxJQUFJTiwwQ0FBUyxDQUFDLENBQUM7SUFFM0IsSUFBSSxDQUFDTyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQ25DLDhCQUNGLENBQUM7SUFFSCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLFNBQVMsQ0FBQ1AsS0FBSyxDQUFDO0VBQy9CO0VBQ0FNLGNBQWNBLENBQUEsRUFBRTtJQUNaLElBQUksQ0FBQ0UsUUFBUSxHQUFDLElBQUlkLHNDQUFLLENBQUMsSUFBSSxDQUFDSyxFQUFFLENBQUM7RUFFcEM7RUFDQU0sYUFBYUEsQ0FBQSxFQUFFO0lBQ1hSLGlEQUFHLENBQUMsSUFBSSxDQUFDSyxNQUFNLEVBQUMsQ0FBQ08sT0FBTyxFQUFDQyxLQUFLLEtBQUk7TUFDOUIsT0FBTyxJQUFJZCw4Q0FBSyxDQUFDO1FBQ2JhLE9BQU87UUFDUEQsUUFBUSxFQUFDLElBQUksQ0FBQ0EsUUFBUTtRQUN0QkUsS0FBSztRQUNMVixLQUFLLEVBQUMsSUFBSSxDQUFDQSxLQUFLO1FBQ2hCRCxFQUFFLEVBQUMsSUFBSSxDQUFDQTtNQUNaLENBQUMsQ0FBQztNQUNGO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUN3RDtBQUVMO0FBQ0o7QUFFL0MsaUVBQWUsTUFBTTtFQUNuQkQsV0FBV0EsQ0FBQztJQUFFVyxPQUFPO0lBQUVELFFBQVE7SUFBRVQsRUFB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RUFBRSxJQUFJQSwrQ0FBSSxDQUFDLENBQUMsRUFBRSxJQUFJQSwrQ0FBSSxDQUFDLENBQUMsQ0FBQztJQUMzRjtJQUVBLE1BQU1xQyxDQUFDLEdBQUcsSUFBSSxDQUFDckIsb0JBQW9CO0lBQ25DLElBQUksQ0FBQ29CLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNFLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7SUFFdkYsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUN4QixNQUFNQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDL0MsSUFBSSxDQUFDTixPQUFPLENBQUNJLENBQUMsQ0FBQyxDQUFDWixRQUFRLENBQUNhLE1BQU0sQ0FBQztNQUNoQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDLENBQUNELFFBQVEsSUFBSUUsTUFBTTtJQUN0QztFQUNKO0VBRUFFLHFCQUFxQkEsQ0FBQ0MsSUFBSSxFQUFFbEIsV0FBVyxHQUFHa0IsSUFBSSxDQUFDbEIsV0FBVyxFQUFFO0lBQ3hEO0lBQ0EsSUFBSSxDQUFDa0IsSUFBSSxDQUFDN0YsUUFBUSxDQUFDOEYsVUFBVSxDQUFDekQsUUFBUSxFQUFFLE9BQU8sSUFBSTtJQUVuRCxJQUFJLENBQUN3RCxJQUFJLENBQUM3RixRQUFRLENBQUMrRixNQUFNLElBQUlGLElBQUksQ0FBQzdGLFFBQVEsQ0FBQytGLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLQyxRQUFRLEVBQUVKLElBQUksQ0FBQzdGLFFBQVEsQ0FBQ2tHLHFCQUFxQixDQUFDLENBQUM7SUFFNUcsSUFBSSxDQUFDTCxJQUFJLENBQUM3RixRQUFRLENBQUMrRixNQUFNLEVBQUUsT0FBTyxJQUFJO0lBRXRDLE1BQU1JLE1BQU0sR0FBR2hELFNBQVM7SUFDeEJnRCxNQUFNLENBQUNDLElBQUksQ0FBQ1AsSUFBSSxDQUFDN0YsUUFBUSxDQUFDK0YsTUFBTSxDQUFDSSxNQUFNLENBQUM7SUFDeENBLE1BQU0sQ0FBQ2pCLFlBQVksQ0FBQ1AsV0FBVyxDQUFDO0lBRWhDLE1BQU1xQixNQUFNLEdBQUdILElBQUksQ0FBQzdGLFFBQVEsQ0FBQytGLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHckIsV0FBVyxDQUFDMEIsaUJBQWlCLENBQUMsQ0FBQztJQUU1RSxPQUFPLElBQUksQ0FBQ0MsdUJBQXVCLENBQUNILE1BQU0sRUFBRUgsTUFBTSxDQUFDO0VBQ3ZEO0VBRUFNLHVCQUF1QkEsQ0FBQ0gsTUFBTSxFQUFFSCxNQUFNLEVBQUU7SUFDcEMsTUFBTU8sTUFBTSxHQUFHbkQsU0FBUztJQUV4QixLQUFLLElBQUlxQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUN4QixNQUFNZSxLQUFLLEdBQUcsSUFBSSxDQUFDbkIsT0FBTyxDQUFDSSxDQUFDLENBQUM7TUFDN0IsTUFBTUUsUUFBUSxHQUFHWSxNQUFNLENBQUNILElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUNDLEdBQUcsQ0FBQ04sTUFBTSxDQUFDLEdBQUdLLEtBQUssQ0FBQ2hCLFFBQVE7TUFDaEUsSUFBSUcsUUFBUSxHQUFHLENBQUNLLE1BQU0sRUFBRSxPQUFPLEtBQUs7SUFDeEM7SUFDQSxPQUFPLElBQUk7RUFDZjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXVDO0FBRXZDLE1BQU1VLFFBQVEsR0FBRyxlQUFnQixJQUFJekQsK0NBQUksQ0FBQyxDQUFDO0FBRTNDLElBQUkwRCxFQUFFLEdBQUcsQ0FBQztBQUNWLElBQUlDLE9BQU8sR0FBRyxDQUFDOztBQUVmO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEtBQUs7QUFFbkIsTUFBTUMsUUFBUSxDQUFDO0VBQ2xCeEgsV0FBV0EsQ0FBQ0MsRUFBRSxFQUFFdUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQzdCLElBQUksQ0FBQ3ZHLEVBQUUsQ0FBQzRDLE1BQU0sRUFBRXZCLE9BQU8sQ0FBQ21HLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQztJQUM1RSxJQUFJLENBQUN4SCxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUN1RyxVQUFVLEdBQUdBLFVBQVU7SUFDNUIsSUFBSSxDQUFDa0IsRUFBRSxHQUFHTCxFQUFFLEVBQUU7O0lBRWQ7SUFDQSxJQUFJLENBQUNNLElBQUksR0FBRyxDQUFDLENBQUM7SUFFZCxJQUFJLENBQUNDLFNBQVMsR0FBRztNQUFFQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBRSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ0MsY0FBYyxHQUFHLENBQUM7O0lBRXZCO0lBQ0EsSUFBSSxDQUFDOUgsRUFBRSxDQUFDeUMsUUFBUSxDQUFDc0YsZUFBZSxDQUFDLElBQUksQ0FBQztJQUN0QyxJQUFJLENBQUMvSCxFQUFFLENBQUN5QyxRQUFRLENBQUN1RixlQUFlLEdBQUcsSUFBSTs7SUFFdkM7SUFDQSxJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNqSSxFQUFFLENBQUN5QyxRQUFRLENBQUN5RixLQUFLOztJQUVyQztJQUNBLEtBQUssSUFBSUMsR0FBRyxJQUFJNUIsVUFBVSxFQUFFO01BQ3hCLElBQUksQ0FBQzZCLFlBQVksQ0FBQ0QsR0FBRyxFQUFFNUIsVUFBVSxDQUFDNEIsR0FBRyxDQUFDLENBQUM7SUFDM0M7RUFDSjtFQUVBQyxZQUFZQSxDQUFDRCxHQUFHLEVBQUVFLElBQUksRUFBRTtJQUNwQixJQUFJLENBQUM5QixVQUFVLENBQUM0QixHQUFHLENBQUMsR0FBR0UsSUFBSTs7SUFFM0I7SUFDQUEsSUFBSSxDQUFDWixFQUFFLEdBQUdKLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckJnQixJQUFJLENBQUNDLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFJLElBQUksQ0FBQztJQUMxQkQsSUFBSSxDQUFDekQsSUFBSSxHQUNMeUQsSUFBSSxDQUFDekQsSUFBSSxLQUNSeUQsSUFBSSxDQUFDRSxJQUFJLENBQUN4SSxXQUFXLEtBQUt5SSxZQUFZLEdBQ2pDLElBQUksQ0FBQ3hJLEVBQUUsQ0FBQ3lJLEtBQUssR0FDYkosSUFBSSxDQUFDRSxJQUFJLENBQUN4SSxXQUFXLEtBQUsySSxXQUFXLEdBQ3JDLElBQUksQ0FBQzFJLEVBQUUsQ0FBQzJJLGNBQWMsR0FDdEIsSUFBSSxDQUFDM0ksRUFBRSxDQUFDNEksWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNqQ1AsSUFBSSxDQUFDN0MsTUFBTSxHQUFHMkMsR0FBRyxLQUFLLE9BQU8sR0FBRyxJQUFJLENBQUNuSSxFQUFFLENBQUM2SSxvQkFBb0IsR0FBRyxJQUFJLENBQUM3SSxFQUFFLENBQUM4SSxZQUFZO0lBQ25GVCxJQUFJLENBQUNVLFVBQVUsR0FBR1YsSUFBSSxDQUFDVSxVQUFVLElBQUksS0FBSztJQUMxQ1YsSUFBSSxDQUFDVyxNQUFNLEdBQUdYLElBQUksQ0FBQ1csTUFBTSxJQUFJLENBQUM7SUFDOUJYLElBQUksQ0FBQ1ksTUFBTSxHQUFHWixJQUFJLENBQUNZLE1BQU0sSUFBSSxDQUFDO0lBQzlCWixJQUFJLENBQUNSLEtBQUssR0FBR1EsSUFBSSxDQUFDUixLQUFLLEtBQUtRLElBQUksQ0FBQ1csTUFBTSxHQUFHWCxJQUFJLENBQUNFLElBQUksQ0FBQ1csVUFBVSxHQUFHYixJQUFJLENBQUNXLE1BQU0sR0FBR1gsSUFBSSxDQUFDRSxJQUFJLENBQUNZLE1BQU0sR0FBR2QsSUFBSSxDQUFDQyxJQUFJLENBQUM7SUFDNUdELElBQUksQ0FBQ2UsT0FBTyxHQUFHZixJQUFJLENBQUNnQixTQUFTLElBQUksQ0FBQztJQUNsQ2hCLElBQUksQ0FBQ2lCLFdBQVcsR0FBRyxLQUFLO0lBQ3hCakIsSUFBSSxDQUFDa0IsS0FBSyxHQUFHbEIsSUFBSSxDQUFDa0IsS0FBSyxJQUFJLElBQUksQ0FBQ3ZKLEVBQUUsQ0FBQ3dKLFdBQVc7SUFFOUMsSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsTUFBTSxFQUFFO01BQ2Q7TUFDQSxJQUFJLENBQUNDLGVBQWUsQ0FBQ3JCLElBQUksQ0FBQztJQUM5Qjs7SUFFQTtJQUNBLElBQUlBLElBQUksQ0FBQ2UsT0FBTyxFQUFFO01BQ2QsSUFBSSxDQUFDTyxXQUFXLEdBQUcsSUFBSTtNQUN2QixJQUFJLElBQUksQ0FBQzdCLGNBQWMsSUFBSSxJQUFJLENBQUNBLGNBQWMsS0FBS08sSUFBSSxDQUFDUixLQUFLLEdBQUdRLElBQUksQ0FBQ2UsT0FBTyxFQUFFO1FBQzFFL0gsT0FBTyxDQUFDdUksSUFBSSxDQUFDLDZEQUE2RCxDQUFDO1FBQzNFLE9BQVEsSUFBSSxDQUFDOUIsY0FBYyxHQUFHL0MsSUFBSSxDQUFDOEUsR0FBRyxDQUFDLElBQUksQ0FBQy9CLGNBQWMsRUFBRU8sSUFBSSxDQUFDUixLQUFLLEdBQUdRLElBQUksQ0FBQ2UsT0FBTyxDQUFDO01BQzFGO01BQ0EsSUFBSSxDQUFDdEIsY0FBYyxHQUFHTyxJQUFJLENBQUNSLEtBQUssR0FBR1EsSUFBSSxDQUFDZSxPQUFPO0lBQ25ELENBQUMsTUFBTSxJQUFJakIsR0FBRyxLQUFLLE9BQU8sRUFBRTtNQUN4QixJQUFJLENBQUNSLFNBQVMsQ0FBQ0UsS0FBSyxHQUFHUSxJQUFJLENBQUNSLEtBQUs7SUFDckMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUN0QixVQUFVLENBQUM1RixLQUFLLEVBQUU7TUFDL0IsSUFBSSxDQUFDZ0gsU0FBUyxDQUFDRSxLQUFLLEdBQUc5QyxJQUFJLENBQUMrRSxHQUFHLENBQUMsSUFBSSxDQUFDbkMsU0FBUyxDQUFDRSxLQUFLLEVBQUVRLElBQUksQ0FBQ1IsS0FBSyxDQUFDO0lBQ3JFO0VBQ0o7RUFFQTZCLGVBQWVBLENBQUNyQixJQUFJLEVBQUU7SUFDbEIsTUFBTTBCLFdBQVcsR0FBRyxDQUFDMUIsSUFBSSxDQUFDb0IsTUFBTTtJQUNoQyxJQUFJTSxXQUFXLEVBQUUxQixJQUFJLENBQUNvQixNQUFNLEdBQUcsSUFBSSxDQUFDekosRUFBRSxDQUFDZ0ssWUFBWSxDQUFDLENBQUM7SUFDckQsSUFBSSxJQUFJLENBQUMvQixPQUFPLENBQUNnQyxXQUFXLEtBQUs1QixJQUFJLENBQUNvQixNQUFNLEVBQUU7TUFDMUMsSUFBSSxDQUFDekosRUFBRSxDQUFDa0ssVUFBVSxDQUFDN0IsSUFBSSxDQUFDN0MsTUFBTSxFQUFFNkMsSUFBSSxDQUFDb0IsTUFBTSxDQUFDO01BQzVDLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2dDLFdBQVcsR0FBRzVCLElBQUksQ0FBQ29CLE1BQU07SUFDMUM7SUFDQSxJQUFJTSxXQUFXLEVBQUU7TUFDYixJQUFJLENBQUMvSixFQUFFLENBQUNtSyxVQUFVLENBQUM5QixJQUFJLENBQUM3QyxNQUFNLEVBQUU2QyxJQUFJLENBQUNFLElBQUksRUFBRUYsSUFBSSxDQUFDa0IsS0FBSyxDQUFDO0lBQzFELENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ3ZKLEVBQUUsQ0FBQ29LLGFBQWEsQ0FBQy9CLElBQUksQ0FBQzdDLE1BQU0sRUFBRSxDQUFDLEVBQUU2QyxJQUFJLENBQUNFLElBQUksQ0FBQztJQUNwRDtJQUNBRixJQUFJLENBQUNpQixXQUFXLEdBQUcsS0FBSztFQUM1QjtFQUVBZSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7SUFDWixJQUFJLENBQUNsQyxZQUFZLENBQUMsT0FBTyxFQUFFa0MsS0FBSyxDQUFDO0VBQ3JDO0VBRUFDLFlBQVlBLENBQUMzQyxLQUFLLEVBQUVDLEtBQUssRUFBRTtJQUN2QixJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQzVCLElBQUksQ0FBQ0QsU0FBUyxDQUFDRSxLQUFLLEdBQUdBLEtBQUs7RUFDaEM7RUFFQTJDLGlCQUFpQkEsQ0FBQ0YsS0FBSyxFQUFFO0lBQ3JCLElBQUksQ0FBQ3hDLGNBQWMsR0FBR3dDLEtBQUs7RUFDL0I7RUFFQUcsU0FBU0EsQ0FBQzNJLE9BQU8sRUFBRTtJQUNmLElBQUksQ0FBQzRGLElBQUksQ0FBQzVGLE9BQU8sQ0FBQzRJLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQzFLLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ2tJLGlCQUFpQixDQUFDLENBQUM7SUFDeEUsSUFBSSxDQUFDM0ssRUFBRSxDQUFDeUMsUUFBUSxDQUFDc0YsZUFBZSxDQUFDLElBQUksQ0FBQ0wsSUFBSSxDQUFDNUYsT0FBTyxDQUFDNEksY0FBYyxDQUFDLENBQUM7SUFDbkUsSUFBSSxDQUFDRSxjQUFjLENBQUM5SSxPQUFPLENBQUM7RUFDaEM7RUFFQThJLGNBQWNBLENBQUM5SSxPQUFPLEVBQUU7SUFDcEI7SUFDQUEsT0FBTyxDQUFDK0ksa0JBQWtCLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLEVBQUU7TUFBRUMsSUFBSTtNQUFFcEc7SUFBSyxDQUFDLEtBQUs7TUFDN0Q7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDMkIsVUFBVSxDQUFDeUUsSUFBSSxDQUFDLEVBQUU7UUFDeEIzSixPQUFPLENBQUN1SSxJQUFJLENBQUUsb0JBQW1Cb0IsSUFBSyxxQkFBb0IsQ0FBQztRQUMzRDtNQUNKO01BRUEsTUFBTTNDLElBQUksR0FBRyxJQUFJLENBQUM5QixVQUFVLENBQUN5RSxJQUFJLENBQUM7TUFFbEMsSUFBSSxDQUFDaEwsRUFBRSxDQUFDa0ssVUFBVSxDQUFDN0IsSUFBSSxDQUFDN0MsTUFBTSxFQUFFNkMsSUFBSSxDQUFDb0IsTUFBTSxDQUFDO01BQzVDLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2dDLFdBQVcsR0FBRzVCLElBQUksQ0FBQ29CLE1BQU07O01BRXRDO01BQ0EsSUFBSXdCLE1BQU0sR0FBRyxDQUFDO01BQ2QsSUFBSXJHLElBQUksS0FBSyxLQUFLLEVBQUVxRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDaEMsSUFBSXJHLElBQUksS0FBSyxLQUFLLEVBQUVxRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDaEMsSUFBSXJHLElBQUksS0FBSyxLQUFLLEVBQUVxRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O01BRWhDLE1BQU0zQyxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBSSxHQUFHMkMsTUFBTTtNQUMvQixNQUFNakMsTUFBTSxHQUFHaUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdBLE1BQU0sR0FBR0EsTUFBTSxHQUFHLENBQUM7TUFDckQsTUFBTWhDLE1BQU0sR0FBR2dDLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxNQUFNLEdBQUcsQ0FBQztNQUU1QyxLQUFLLElBQUkvRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcrRSxNQUFNLEVBQUUvRSxDQUFDLEVBQUUsRUFBRTtRQUM3QixJQUFJLENBQUNsRyxFQUFFLENBQUNrTCxtQkFBbUIsQ0FBQ0gsUUFBUSxHQUFHN0UsQ0FBQyxFQUFFb0MsSUFBSSxFQUFFRCxJQUFJLENBQUN6RCxJQUFJLEVBQUV5RCxJQUFJLENBQUNVLFVBQVUsRUFBRVYsSUFBSSxDQUFDVyxNQUFNLEdBQUdBLE1BQU0sRUFBRVgsSUFBSSxDQUFDWSxNQUFNLEdBQUcvQyxDQUFDLEdBQUcrQyxNQUFNLENBQUM7UUFDM0gsSUFBSSxDQUFDakosRUFBRSxDQUFDbUwsdUJBQXVCLENBQUNKLFFBQVEsR0FBRzdFLENBQUMsQ0FBQzs7UUFFN0M7UUFDQTtRQUNBLElBQUksQ0FBQ2xHLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQzJJLG1CQUFtQixDQUFDTCxRQUFRLEdBQUc3RSxDQUFDLEVBQUVtQyxJQUFJLENBQUNlLE9BQU8sQ0FBQztNQUNwRTtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksSUFBSSxDQUFDN0MsVUFBVSxDQUFDNUYsS0FBSyxFQUFFLElBQUksQ0FBQ1gsRUFBRSxDQUFDa0ssVUFBVSxDQUFDLElBQUksQ0FBQ2xLLEVBQUUsQ0FBQzZJLG9CQUFvQixFQUFFLElBQUksQ0FBQ3RDLFVBQVUsQ0FBQzVGLEtBQUssQ0FBQzhJLE1BQU0sQ0FBQztFQUM3RztFQUVBNEIsSUFBSUEsQ0FBQztJQUFFdkosT0FBTztJQUFFd0osSUFBSSxHQUFHLElBQUksQ0FBQ3RMLEVBQUUsQ0FBQ3VMO0VBQVUsQ0FBQyxFQUFFO0lBQ3hDLElBQUksSUFBSSxDQUFDdkwsRUFBRSxDQUFDeUMsUUFBUSxDQUFDdUYsZUFBZSxLQUFNLEdBQUUsSUFBSSxDQUFDUCxFQUFHLElBQUczRixPQUFPLENBQUM0SSxjQUFlLEVBQUMsRUFBRTtNQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDaEQsSUFBSSxDQUFDNUYsT0FBTyxDQUFDNEksY0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFDRCxTQUFTLENBQUMzSSxPQUFPLENBQUM7TUFDL0QsSUFBSSxDQUFDOUIsRUFBRSxDQUFDeUMsUUFBUSxDQUFDc0YsZUFBZSxDQUFDLElBQUksQ0FBQ0wsSUFBSSxDQUFDNUYsT0FBTyxDQUFDNEksY0FBYyxDQUFDLENBQUM7TUFDbkUsSUFBSSxDQUFDMUssRUFBRSxDQUFDeUMsUUFBUSxDQUFDdUYsZUFBZSxHQUFJLEdBQUUsSUFBSSxDQUFDUCxFQUFHLElBQUczRixPQUFPLENBQUM0SSxjQUFlLEVBQUM7SUFDN0U7O0lBRUE7SUFDQTVJLE9BQU8sQ0FBQytJLGtCQUFrQixDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsUUFBUSxFQUFFO01BQUVDO0lBQUssQ0FBQyxLQUFLO01BQ3ZELE1BQU0zQyxJQUFJLEdBQUcsSUFBSSxDQUFDOUIsVUFBVSxDQUFDeUUsSUFBSSxDQUFDO01BQ2xDLElBQUkzQyxJQUFJLENBQUNpQixXQUFXLEVBQUUsSUFBSSxDQUFDSSxlQUFlLENBQUNyQixJQUFJLENBQUM7SUFDcEQsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSW1ELG9CQUFvQixHQUFHLENBQUM7SUFDNUIsSUFBSSxJQUFJLENBQUNqRixVQUFVLENBQUM1RixLQUFLLEVBQUVpRSxJQUFJLEtBQUssSUFBSSxDQUFDNUUsRUFBRSxDQUFDNEksWUFBWSxFQUFFNEMsb0JBQW9CLEdBQUcsQ0FBQztJQUVsRixJQUFJLElBQUksQ0FBQzdCLFdBQVcsRUFBRTtNQUNsQixJQUFJLElBQUksQ0FBQ3BELFVBQVUsQ0FBQzVGLEtBQUssRUFBRTtRQUN2QixJQUFJLENBQUNYLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ2dKLHFCQUFxQixDQUNsQ0gsSUFBSSxFQUNKLElBQUksQ0FBQzNELFNBQVMsQ0FBQ0UsS0FBSyxFQUNwQixJQUFJLENBQUN0QixVQUFVLENBQUM1RixLQUFLLENBQUNpRSxJQUFJLEVBQzFCLElBQUksQ0FBQzJCLFVBQVUsQ0FBQzVGLEtBQUssQ0FBQ3NJLE1BQU0sR0FBRyxJQUFJLENBQUN0QixTQUFTLENBQUNDLEtBQUssR0FBRzRELG9CQUFvQixFQUMxRSxJQUFJLENBQUMxRCxjQUNULENBQUM7TUFDTCxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUM5SCxFQUFFLENBQUN5QyxRQUFRLENBQUNpSixtQkFBbUIsQ0FBQ0osSUFBSSxFQUFFLElBQUksQ0FBQzNELFNBQVMsQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0QsU0FBUyxDQUFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUM7TUFDL0c7SUFDSixDQUFDLE1BQU07TUFDSCxJQUFJLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQzVGLEtBQUssRUFBRTtRQUN2QixJQUFJLENBQUNYLEVBQUUsQ0FBQzJMLFlBQVksQ0FDaEJMLElBQUksRUFDSixJQUFJLENBQUMzRCxTQUFTLENBQUNFLEtBQUssRUFDcEIsSUFBSSxDQUFDdEIsVUFBVSxDQUFDNUYsS0FBSyxDQUFDaUUsSUFBSSxFQUMxQixJQUFJLENBQUMyQixVQUFVLENBQUM1RixLQUFLLENBQUNzSSxNQUFNLEdBQUcsSUFBSSxDQUFDdEIsU0FBUyxDQUFDQyxLQUFLLEdBQUc0RCxvQkFDMUQsQ0FBQztNQUNMLENBQUMsTUFBTTtRQUNILElBQUksQ0FBQ3hMLEVBQUUsQ0FBQzRMLFVBQVUsQ0FBQ04sSUFBSSxFQUFFLElBQUksQ0FBQzNELFNBQVMsQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0QsU0FBUyxDQUFDRSxLQUFLLENBQUM7TUFDeEU7SUFDSjtFQUNKO0VBRUFnRSxXQUFXQSxDQUFBLEVBQUc7SUFDVjtJQUNBLE1BQU14RCxJQUFJLEdBQUcsSUFBSSxDQUFDOUIsVUFBVSxDQUFDekQsUUFBUTtJQUNyQztJQUNBLElBQUl1RixJQUFJLENBQUNFLElBQUksRUFBRSxPQUFPRixJQUFJO0lBQzFCLElBQUlmLGNBQWMsRUFBRTtJQUNwQmpHLE9BQU8sQ0FBQ3VJLElBQUksQ0FBQyxpREFBaUQsQ0FBQztJQUMvRCxPQUFRdEMsY0FBYyxHQUFHLElBQUk7RUFDakM7RUFFQXdFLGtCQUFrQkEsQ0FBQ3pELElBQUksRUFBRTtJQUNyQixJQUFJLENBQUNBLElBQUksRUFBRUEsSUFBSSxHQUFHLElBQUksQ0FBQ3dELFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU1FLEtBQUssR0FBRzFELElBQUksQ0FBQ0UsSUFBSTtJQUN2QjtJQUNBO0lBQ0EsTUFBTVMsTUFBTSxHQUFHWCxJQUFJLENBQUNDLElBQUk7SUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQzlCLE1BQU0sRUFBRTtNQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHO1FBQ1ZxRCxHQUFHLEVBQUUsSUFBSW5HLCtDQUFJLENBQUMsQ0FBQztRQUNmb0csR0FBRyxFQUFFLElBQUlwRywrQ0FBSSxDQUFDLENBQUM7UUFDZmtELE1BQU0sRUFBRSxJQUFJbEQsK0NBQUksQ0FBQyxDQUFDO1FBQ2xCc0ksS0FBSyxFQUFFLElBQUl0SSwrQ0FBSSxDQUFDLENBQUM7UUFDakIrQyxNQUFNLEVBQUVDO01BQ1osQ0FBQztJQUNMO0lBRUEsTUFBTW1ELEdBQUcsR0FBRyxJQUFJLENBQUNyRCxNQUFNLENBQUNxRCxHQUFHO0lBQzNCLE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUN0RCxNQUFNLENBQUNzRCxHQUFHO0lBQzNCLE1BQU1sRCxNQUFNLEdBQUcsSUFBSSxDQUFDSixNQUFNLENBQUNJLE1BQU07SUFDakMsTUFBTW9GLEtBQUssR0FBRyxJQUFJLENBQUN4RixNQUFNLENBQUN3RixLQUFLO0lBRS9CbkMsR0FBRyxDQUFDN0QsR0FBRyxDQUFDLENBQUNVLFFBQVEsQ0FBQztJQUNsQm9ELEdBQUcsQ0FBQzlELEdBQUcsQ0FBQyxDQUFDVSxRQUFRLENBQUM7O0lBRWxCO0lBQ0EsS0FBSyxJQUFJUixDQUFDLEdBQUcsQ0FBQyxFQUFFK0YsQ0FBQyxHQUFHRixLQUFLLENBQUM1QyxNQUFNLEVBQUVqRCxDQUFDLEdBQUcrRixDQUFDLEVBQUUvRixDQUFDLElBQUk4QyxNQUFNLEVBQUU7TUFDbEQsTUFBTWtELENBQUMsR0FBR0gsS0FBSyxDQUFDN0YsQ0FBQyxDQUFDO01BQ2xCLE1BQU1pRyxDQUFDLEdBQUdKLEtBQUssQ0FBQzdGLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDdEIsTUFBTW5ELENBQUMsR0FBR2dKLEtBQUssQ0FBQzdGLENBQUMsR0FBRyxDQUFDLENBQUM7TUFFdEIyRCxHQUFHLENBQUNxQyxDQUFDLEdBQUduSCxJQUFJLENBQUM4RSxHQUFHLENBQUNxQyxDQUFDLEVBQUVyQyxHQUFHLENBQUNxQyxDQUFDLENBQUM7TUFDMUJyQyxHQUFHLENBQUNzQyxDQUFDLEdBQUdwSCxJQUFJLENBQUM4RSxHQUFHLENBQUNzQyxDQUFDLEVBQUV0QyxHQUFHLENBQUNzQyxDQUFDLENBQUM7TUFDMUJ0QyxHQUFHLENBQUM5RyxDQUFDLEdBQUdnQyxJQUFJLENBQUM4RSxHQUFHLENBQUM5RyxDQUFDLEVBQUU4RyxHQUFHLENBQUM5RyxDQUFDLENBQUM7TUFFMUIrRyxHQUFHLENBQUNvQyxDQUFDLEdBQUduSCxJQUFJLENBQUMrRSxHQUFHLENBQUNvQyxDQUFDLEVBQUVwQyxHQUFHLENBQUNvQyxDQUFDLENBQUM7TUFDMUJwQyxHQUFHLENBQUNxQyxDQUFDLEdBQUdwSCxJQUFJLENBQUMrRSxHQUFHLENBQUNxQyxDQUFDLEVBQUVyQyxHQUFHLENBQUNxQyxDQUFDLENBQUM7TUFDMUJyQyxHQUFHLENBQUMvRyxDQUFDLEdBQUdnQyxJQUFJLENBQUMrRSxHQUFHLENBQUMvRyxDQUFDLEVBQUUrRyxHQUFHLENBQUMvRyxDQUFDLENBQUM7SUFDOUI7SUFFQWlKLEtBQUssQ0FBQ0ksR0FBRyxDQUFDdEMsR0FBRyxFQUFFRCxHQUFHLENBQUM7SUFDbkJqRCxNQUFNLENBQUN5RixHQUFHLENBQUN4QyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDd0MsTUFBTSxDQUFDLENBQUMsQ0FBQztFQUNsQztFQUVBM0YscUJBQXFCQSxDQUFDMEIsSUFBSSxFQUFFO0lBQ3hCLElBQUksQ0FBQ0EsSUFBSSxFQUFFQSxJQUFJLEdBQUcsSUFBSSxDQUFDd0QsV0FBVyxDQUFDLENBQUM7SUFDcEMsTUFBTUUsS0FBSyxHQUFHMUQsSUFBSSxDQUFDRSxJQUFJO0lBQ3ZCO0lBQ0E7SUFDQSxNQUFNUyxNQUFNLEdBQUdYLElBQUksQ0FBQ0MsSUFBSTtJQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQ3NGLGtCQUFrQixDQUFDekQsSUFBSSxDQUFDO0lBRS9DLElBQUlrRSxXQUFXLEdBQUcsQ0FBQztJQUNuQixLQUFLLElBQUlyRyxDQUFDLEdBQUcsQ0FBQyxFQUFFK0YsQ0FBQyxHQUFHRixLQUFLLENBQUM1QyxNQUFNLEVBQUVqRCxDQUFDLEdBQUcrRixDQUFDLEVBQUUvRixDQUFDLElBQUk4QyxNQUFNLEVBQUU7TUFDbEQ3QixRQUFRLENBQUNxRixTQUFTLENBQUNULEtBQUssRUFBRTdGLENBQUMsQ0FBQztNQUM1QnFHLFdBQVcsR0FBR3hILElBQUksQ0FBQytFLEdBQUcsQ0FBQ3lDLFdBQVcsRUFBRSxJQUFJLENBQUMvRixNQUFNLENBQUNJLE1BQU0sQ0FBQzZGLGVBQWUsQ0FBQ3RGLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGO0lBRUEsSUFBSSxDQUFDWCxNQUFNLENBQUNDLE1BQU0sR0FBRzFCLElBQUksQ0FBQzJILElBQUksQ0FBQ0gsV0FBVyxDQUFDO0VBQy9DO0VBRUFJLE1BQU1BLENBQUEsRUFBRztJQUNMLEtBQUssSUFBSXhFLEdBQUcsSUFBSSxJQUFJLENBQUNULElBQUksRUFBRTtNQUN2QixJQUFJLENBQUMxSCxFQUFFLENBQUN5QyxRQUFRLENBQUNtSyxpQkFBaUIsQ0FBQyxJQUFJLENBQUNsRixJQUFJLENBQUNTLEdBQUcsQ0FBQyxDQUFDO01BQ2xELE9BQU8sSUFBSSxDQUFDVCxJQUFJLENBQUNTLEdBQUcsQ0FBQztJQUN6QjtJQUNBLEtBQUssSUFBSUEsR0FBRyxJQUFJLElBQUksQ0FBQzVCLFVBQVUsRUFBRTtNQUM3QixJQUFJLENBQUN2RyxFQUFFLENBQUM2TSxZQUFZLENBQUMsSUFBSSxDQUFDdEcsVUFBVSxDQUFDNEIsR0FBRyxDQUFDLENBQUNzQixNQUFNLENBQUM7TUFDakQsT0FBTyxJQUFJLENBQUNsRCxVQUFVLENBQUM0QixHQUFHLENBQUM7SUFDL0I7RUFDSjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTMkM7QUFDSjtBQUNBO0FBRXZDLElBQUlmLEVBQUUsR0FBRyxDQUFDO0FBRUgsTUFBTXhHLElBQUksU0FBU2hCLG9EQUFTLENBQUM7RUFDaENHLFdBQVdBLENBQUNDLEVBQUUsRUFBRTtJQUFFUyxRQUFRO0lBQUVxQixPQUFPO0lBQUV3SixJQUFJLEdBQUd0TCxFQUFFLENBQUN1TCxTQUFTO0lBQUV3QixhQUFhLEdBQUcsSUFBSTtJQUFFQyxXQUFXLEdBQUc7RUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDcEcsS0FBSyxDQUFDLENBQUM7SUFDUCxJQUFJLENBQUNoTixFQUFFLENBQUM0QyxNQUFNLEVBQUV2QixPQUFPLENBQUNtRyxLQUFLLENBQUMseUNBQXlDLENBQUM7SUFDeEUsSUFBSSxDQUFDeEgsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDeUgsRUFBRSxHQUFHTCxFQUFFLEVBQUU7SUFDZCxJQUFJLENBQUMzRyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDcUIsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ3dKLElBQUksR0FBR0EsSUFBSTs7SUFFaEI7SUFDQSxJQUFJLENBQUN5QixhQUFhLEdBQUdBLGFBQWE7O0lBRWxDO0lBQ0EsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSXhKLCtDQUFJLENBQUMsQ0FBQztJQUNqQyxJQUFJLENBQUN5SixZQUFZLEdBQUcsSUFBSUosK0NBQUksQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQ0sscUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUNDLG9CQUFvQixHQUFHLEVBQUU7RUFDbEM7RUFFQUMsY0FBY0EsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2QsSUFBSSxDQUFDSCxxQkFBcUIsQ0FBQ0ksSUFBSSxDQUFDRCxDQUFDLENBQUM7SUFDbEMsT0FBTyxJQUFJO0VBQ2Y7RUFFQUUsYUFBYUEsQ0FBQ0YsQ0FBQyxFQUFFO0lBQ2IsSUFBSSxDQUFDRixvQkFBb0IsQ0FBQ0csSUFBSSxDQUFDRCxDQUFDLENBQUM7SUFDakMsT0FBTyxJQUFJO0VBQ2Y7RUFFQWpDLElBQUlBLENBQUM7SUFBRXhJO0VBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ2xCLElBQUlBLE1BQU0sRUFBRTtNQUNSO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ2YsT0FBTyxDQUFDQyxRQUFRLENBQUMwTCxXQUFXLEVBQUU7UUFDcENuSixNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUN6QyxPQUFPLENBQUNDLFFBQVEsRUFBRTtVQUNqQzBMLFdBQVcsRUFBRTtZQUFFbkQsS0FBSyxFQUFFO1VBQUssQ0FBQztVQUM1QjdGLFVBQVUsRUFBRTtZQUFFNkYsS0FBSyxFQUFFO1VBQUssQ0FBQztVQUMzQjJDLGVBQWUsRUFBRTtZQUFFM0MsS0FBSyxFQUFFO1VBQUssQ0FBQztVQUNoQzRDLFlBQVksRUFBRTtZQUFFNUMsS0FBSyxFQUFFO1VBQUssQ0FBQztVQUM3QjlGLGdCQUFnQixFQUFFO1lBQUU4RixLQUFLLEVBQUU7VUFBSyxDQUFDO1VBQ2pDb0QsY0FBYyxFQUFFO1lBQUVwRCxLQUFLLEVBQUU7VUFBSztRQUNsQyxDQUFDLENBQUM7TUFDTjs7TUFFQTtNQUNBLElBQUksQ0FBQ3hJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUM4RixLQUFLLEdBQUd6SCxNQUFNLENBQUMyQixnQkFBZ0I7TUFDdEUsSUFBSSxDQUFDMUMsT0FBTyxDQUFDQyxRQUFRLENBQUMyTCxjQUFjLENBQUNwRCxLQUFLLEdBQUd6SCxNQUFNLENBQUM4QixhQUFhO01BQ2pFLElBQUksQ0FBQzdDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDMEMsVUFBVSxDQUFDNkYsS0FBSyxHQUFHekgsTUFBTSxDQUFDNEIsVUFBVTtNQUMxRCxJQUFJLENBQUN3SSxlQUFlLENBQUMzSCxRQUFRLENBQUN6QyxNQUFNLENBQUM0QixVQUFVLEVBQUUsSUFBSSxDQUFDVyxXQUFXLENBQUM7TUFDbEUsSUFBSSxDQUFDOEgsWUFBWSxDQUFDUyxlQUFlLENBQUMsSUFBSSxDQUFDVixlQUFlLENBQUM7TUFDdkQsSUFBSSxDQUFDbkwsT0FBTyxDQUFDQyxRQUFRLENBQUMwTCxXQUFXLENBQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDbEYsV0FBVztNQUMxRCxJQUFJLENBQUN0RCxPQUFPLENBQUNDLFFBQVEsQ0FBQ2tMLGVBQWUsQ0FBQzNDLEtBQUssR0FBRyxJQUFJLENBQUMyQyxlQUFlO01BQ2xFLElBQUksQ0FBQ25MLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDbUwsWUFBWSxDQUFDNUMsS0FBSyxHQUFHLElBQUksQ0FBQzRDLFlBQVk7SUFDaEU7SUFDQSxJQUFJLENBQUNDLHFCQUFxQixDQUFDckMsT0FBTyxDQUFFd0MsQ0FBQyxJQUFLQSxDQUFDLElBQUlBLENBQUMsQ0FBQztNQUFFdEwsSUFBSSxFQUFFLElBQUk7TUFBRWE7SUFBTyxDQUFDLENBQUMsQ0FBQzs7SUFFekU7SUFDQSxJQUFJK0ssU0FBUyxHQUFHLElBQUksQ0FBQzlMLE9BQU8sQ0FBQytMLFFBQVEsSUFBSSxJQUFJLENBQUN6SSxXQUFXLENBQUMwSSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0UsSUFBSSxDQUFDaE0sT0FBTyxDQUFDaU0sR0FBRyxDQUFDO01BQUVIO0lBQVUsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ25OLFFBQVEsQ0FBQzRLLElBQUksQ0FBQztNQUFFQyxJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJO01BQUV4SixPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUFRLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUNzTCxvQkFBb0IsQ0FBQ3RDLE9BQU8sQ0FBRXdDLENBQUMsSUFBS0EsQ0FBQyxJQUFJQSxDQUFDLENBQUM7TUFBRXRMLElBQUksRUFBRSxJQUFJO01BQUVhO0lBQU8sQ0FBQyxDQUFDLENBQUM7RUFDNUU7QUFDSjs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBOztBQUVBLElBQUl1RSxFQUFFLEdBQUcsQ0FBQzs7QUFFVjtBQUNBLE1BQU00RyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLE1BQU1uTixPQUFPLENBQUM7RUFDakJkLFdBQVdBLENBQ1BDLEVBQUUsRUFDRjtJQUNJZ0IsTUFBTTtJQUNORCxRQUFRO0lBQ1JnQixRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWJrTSxXQUFXLEdBQUcsS0FBSztJQUNuQkosUUFBUSxHQUFHN04sRUFBRSxDQUFDa08sSUFBSTtJQUNsQkMsU0FBUyxHQUFHbk8sRUFBRSxDQUFDb08sR0FBRztJQUNsQkMsU0FBUyxHQUFHLElBQUk7SUFDaEJDLFVBQVUsR0FBRyxJQUFJO0lBQ2pCQyxTQUFTLEdBQUd2TyxFQUFFLENBQUN3TztFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ1I7SUFDRSxJQUFJLENBQUN4TyxFQUFFLENBQUM0QyxNQUFNLEVBQUV2QixPQUFPLENBQUNtRyxLQUFLLENBQUMsNENBQTRDLENBQUM7SUFDM0UsSUFBSSxDQUFDeEgsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDK0IsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQzBGLEVBQUUsR0FBR0wsRUFBRSxFQUFFO0lBRWQsSUFBSSxDQUFDcEcsTUFBTSxFQUFFSyxPQUFPLENBQUN1SSxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDdkQsSUFBSSxDQUFDN0ksUUFBUSxFQUFFTSxPQUFPLENBQUN1SSxJQUFJLENBQUMsOEJBQThCLENBQUM7O0lBRTNEO0lBQ0EsSUFBSSxDQUFDcUUsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0osUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ00sU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0UsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0UsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBRXZCO0lBQ0EsSUFBSSxJQUFJLENBQUNULFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQ1EsU0FBUyxDQUFDL00sR0FBRyxFQUFFO01BQ3pDLElBQUksSUFBSSxDQUFDMUIsRUFBRSxDQUFDeUMsUUFBUSxDQUFDa00sa0JBQWtCLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDNU8sRUFBRSxDQUFDNk8sR0FBRyxFQUFFLElBQUksQ0FBQzdPLEVBQUUsQ0FBQzhPLG1CQUFtQixDQUFDLENBQUMsS0FDaEcsSUFBSSxDQUFDRixZQUFZLENBQUMsSUFBSSxDQUFDNU8sRUFBRSxDQUFDK08sU0FBUyxFQUFFLElBQUksQ0FBQy9PLEVBQUUsQ0FBQzhPLG1CQUFtQixDQUFDO0lBQzFFOztJQUVBO0lBQ0EsTUFBTUUsWUFBWSxHQUFHaFAsRUFBRSxDQUFDaVAsWUFBWSxDQUFDalAsRUFBRSxDQUFDa1AsYUFBYSxDQUFDO0lBQ3REbFAsRUFBRSxDQUFDbVAsWUFBWSxDQUFDSCxZQUFZLEVBQUVoTyxNQUFNLENBQUM7SUFDckNoQixFQUFFLENBQUNvUCxhQUFhLENBQUNKLFlBQVksQ0FBQztJQUM5QixJQUFJaFAsRUFBRSxDQUFDcVAsZ0JBQWdCLENBQUNMLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRTtNQUMxQzNOLE9BQU8sQ0FBQ3VJLElBQUksQ0FBRSxHQUFFNUosRUFBRSxDQUFDcVAsZ0JBQWdCLENBQUNMLFlBQVksQ0FBRSxvQkFBbUJNLGNBQWMsQ0FBQ3RPLE1BQU0sQ0FBRSxFQUFDLENBQUM7SUFDbEc7O0lBRUE7SUFDQSxNQUFNdU8sY0FBYyxHQUFHdlAsRUFBRSxDQUFDaVAsWUFBWSxDQUFDalAsRUFBRSxDQUFDd1AsZUFBZSxDQUFDO0lBQzFEeFAsRUFBRSxDQUFDbVAsWUFBWSxDQUFDSSxjQUFjLEVBQUV4TyxRQUFRLENBQUM7SUFDekNmLEVBQUUsQ0FBQ29QLGFBQWEsQ0FBQ0csY0FBYyxDQUFDO0lBQ2hDLElBQUl2UCxFQUFFLENBQUNxUCxnQkFBZ0IsQ0FBQ0UsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFO01BQzVDbE8sT0FBTyxDQUFDdUksSUFBSSxDQUFFLEdBQUU1SixFQUFFLENBQUNxUCxnQkFBZ0IsQ0FBQ0UsY0FBYyxDQUFFLHNCQUFxQkQsY0FBYyxDQUFDdk8sUUFBUSxDQUFFLEVBQUMsQ0FBQztJQUN4Rzs7SUFFQTtJQUNBLElBQUksQ0FBQ2UsT0FBTyxHQUFHOUIsRUFBRSxDQUFDa0IsYUFBYSxDQUFDLENBQUM7SUFDakNsQixFQUFFLENBQUN5UCxZQUFZLENBQUMsSUFBSSxDQUFDM04sT0FBTyxFQUFFa04sWUFBWSxDQUFDO0lBQzNDaFAsRUFBRSxDQUFDeVAsWUFBWSxDQUFDLElBQUksQ0FBQzNOLE9BQU8sRUFBRXlOLGNBQWMsQ0FBQztJQUM3Q3ZQLEVBQUUsQ0FBQzBQLFdBQVcsQ0FBQyxJQUFJLENBQUM1TixPQUFPLENBQUM7SUFDNUIsSUFBSSxDQUFDOUIsRUFBRSxDQUFDMlAsbUJBQW1CLENBQUMsSUFBSSxDQUFDN04sT0FBTyxFQUFFOUIsRUFBRSxDQUFDNFAsV0FBVyxDQUFDLEVBQUU7TUFDdkQsT0FBT3ZPLE9BQU8sQ0FBQ3VJLElBQUksQ0FBQzVKLEVBQUUsQ0FBQzZQLGlCQUFpQixDQUFDLElBQUksQ0FBQy9OLE9BQU8sQ0FBQyxDQUFDO0lBQzNEOztJQUVBO0lBQ0E5QixFQUFFLENBQUM4UCxZQUFZLENBQUNkLFlBQVksQ0FBQztJQUM3QmhQLEVBQUUsQ0FBQzhQLFlBQVksQ0FBQ1AsY0FBYyxDQUFDOztJQUUvQjtJQUNBLElBQUksQ0FBQ1EsZ0JBQWdCLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBSUMsV0FBVyxHQUFHalEsRUFBRSxDQUFDMlAsbUJBQW1CLENBQUMsSUFBSSxDQUFDN04sT0FBTyxFQUFFOUIsRUFBRSxDQUFDa1EsZUFBZSxDQUFDO0lBQzFFLEtBQUssSUFBSUMsTUFBTSxHQUFHLENBQUMsRUFBRUEsTUFBTSxHQUFHRixXQUFXLEVBQUVFLE1BQU0sRUFBRSxFQUFFO01BQ2pELElBQUlDLE9BQU8sR0FBR3BRLEVBQUUsQ0FBQ3FRLGdCQUFnQixDQUFDLElBQUksQ0FBQ3ZPLE9BQU8sRUFBRXFPLE1BQU0sQ0FBQztNQUN2RCxJQUFJLENBQUNKLGdCQUFnQixDQUFDL0osR0FBRyxDQUFDb0ssT0FBTyxFQUFFcFEsRUFBRSxDQUFDc1Esa0JBQWtCLENBQUMsSUFBSSxDQUFDeE8sT0FBTyxFQUFFc08sT0FBTyxDQUFDcEYsSUFBSSxDQUFDLENBQUM7O01BRXJGO01BQ0EsTUFBTXVGLEtBQUssR0FBR0gsT0FBTyxDQUFDcEYsSUFBSSxDQUFDd0YsS0FBSyxDQUFDLFFBQVEsQ0FBQztNQUUxQ0osT0FBTyxDQUFDSyxXQUFXLEdBQUdGLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDOUJILE9BQU8sQ0FBQ00sY0FBYyxHQUFHSCxLQUFLLENBQUNJLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0M7O0lBRUE7SUFDQSxJQUFJLENBQUM5RixrQkFBa0IsR0FBRyxJQUFJbUYsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTVksU0FBUyxHQUFHLEVBQUU7SUFDcEIsTUFBTUMsVUFBVSxHQUFHN1EsRUFBRSxDQUFDMlAsbUJBQW1CLENBQUMsSUFBSSxDQUFDN04sT0FBTyxFQUFFOUIsRUFBRSxDQUFDOFEsaUJBQWlCLENBQUM7SUFDN0UsS0FBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBQyxFQUFFQSxNQUFNLEdBQUdGLFVBQVUsRUFBRUUsTUFBTSxFQUFFLEVBQUU7TUFDaEQsTUFBTUMsU0FBUyxHQUFHaFIsRUFBRSxDQUFDaVIsZUFBZSxDQUFDLElBQUksQ0FBQ25QLE9BQU8sRUFBRWlQLE1BQU0sQ0FBQztNQUMxRCxNQUFNaEcsUUFBUSxHQUFHL0ssRUFBRSxDQUFDa1IsaUJBQWlCLENBQUMsSUFBSSxDQUFDcFAsT0FBTyxFQUFFa1AsU0FBUyxDQUFDaEcsSUFBSSxDQUFDO01BQ25FO01BQ0EsSUFBSUQsUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO01BQ3JCNkYsU0FBUyxDQUFDN0YsUUFBUSxDQUFDLEdBQUdpRyxTQUFTLENBQUNoRyxJQUFJO01BQ3BDLElBQUksQ0FBQ0gsa0JBQWtCLENBQUM3RSxHQUFHLENBQUNnTCxTQUFTLEVBQUVqRyxRQUFRLENBQUM7SUFDcEQ7SUFDQSxJQUFJLENBQUNMLGNBQWMsR0FBR2tHLFNBQVMsQ0FBQ08sSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUM1QztFQUVBdkMsWUFBWUEsQ0FBQ2xOLEdBQUcsRUFBRTBQLEdBQUcsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsSUFBSSxDQUFDN0MsU0FBUyxDQUFDL00sR0FBRyxHQUFHQSxHQUFHO0lBQ3hCLElBQUksQ0FBQytNLFNBQVMsQ0FBQzJDLEdBQUcsR0FBR0EsR0FBRztJQUN4QixJQUFJLENBQUMzQyxTQUFTLENBQUM0QyxRQUFRLEdBQUdBLFFBQVE7SUFDbEMsSUFBSSxDQUFDNUMsU0FBUyxDQUFDNkMsUUFBUSxHQUFHQSxRQUFRO0lBQ2xDLElBQUk1UCxHQUFHLEVBQUUsSUFBSSxDQUFDdU0sV0FBVyxHQUFHLElBQUk7RUFDcEM7RUFFQXNELGdCQUFnQkEsQ0FBQ0MsT0FBTyxFQUFFQyxTQUFTLEVBQUU7SUFDakMsSUFBSSxDQUFDL0MsYUFBYSxDQUFDOEMsT0FBTyxHQUFHQSxPQUFPO0lBQ3BDLElBQUksQ0FBQzlDLGFBQWEsQ0FBQytDLFNBQVMsR0FBR0EsU0FBUztFQUM1QztFQUVBQyxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLElBQUksQ0FBQ3JELFNBQVMsRUFBRSxJQUFJLENBQUNyTyxFQUFFLENBQUN5QyxRQUFRLENBQUNrUCxNQUFNLENBQUMsSUFBSSxDQUFDM1IsRUFBRSxDQUFDNFIsVUFBVSxDQUFDLENBQUMsS0FDM0QsSUFBSSxDQUFDNVIsRUFBRSxDQUFDeUMsUUFBUSxDQUFDb1AsT0FBTyxDQUFDLElBQUksQ0FBQzdSLEVBQUUsQ0FBQzRSLFVBQVUsQ0FBQztJQUVqRCxJQUFJLElBQUksQ0FBQy9ELFFBQVEsRUFBRSxJQUFJLENBQUM3TixFQUFFLENBQUN5QyxRQUFRLENBQUNrUCxNQUFNLENBQUMsSUFBSSxDQUFDM1IsRUFBRSxDQUFDOFIsU0FBUyxDQUFDLENBQUMsS0FDekQsSUFBSSxDQUFDOVIsRUFBRSxDQUFDeUMsUUFBUSxDQUFDb1AsT0FBTyxDQUFDLElBQUksQ0FBQzdSLEVBQUUsQ0FBQzhSLFNBQVMsQ0FBQztJQUVoRCxJQUFJLElBQUksQ0FBQ3JELFNBQVMsQ0FBQy9NLEdBQUcsRUFBRSxJQUFJLENBQUMxQixFQUFFLENBQUN5QyxRQUFRLENBQUNrUCxNQUFNLENBQUMsSUFBSSxDQUFDM1IsRUFBRSxDQUFDK1IsS0FBSyxDQUFDLENBQUMsS0FDMUQsSUFBSSxDQUFDL1IsRUFBRSxDQUFDeUMsUUFBUSxDQUFDb1AsT0FBTyxDQUFDLElBQUksQ0FBQzdSLEVBQUUsQ0FBQytSLEtBQUssQ0FBQztJQUU1QyxJQUFJLElBQUksQ0FBQ2xFLFFBQVEsRUFBRSxJQUFJLENBQUM3TixFQUFFLENBQUN5QyxRQUFRLENBQUN1UCxXQUFXLENBQUMsSUFBSSxDQUFDbkUsUUFBUSxDQUFDO0lBQzlELElBQUksQ0FBQzdOLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ3dQLFlBQVksQ0FBQyxJQUFJLENBQUM5RCxTQUFTLENBQUM7SUFDN0MsSUFBSSxDQUFDbk8sRUFBRSxDQUFDeUMsUUFBUSxDQUFDeVAsWUFBWSxDQUFDLElBQUksQ0FBQzVELFVBQVUsQ0FBQztJQUM5QyxJQUFJLENBQUN0TyxFQUFFLENBQUN5QyxRQUFRLENBQUMwUCxZQUFZLENBQUMsSUFBSSxDQUFDNUQsU0FBUyxDQUFDO0lBQzdDLElBQUksSUFBSSxDQUFDRSxTQUFTLENBQUMvTSxHQUFHLEVBQ2xCLElBQUksQ0FBQzFCLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ21NLFlBQVksQ0FBQyxJQUFJLENBQUNILFNBQVMsQ0FBQy9NLEdBQUcsRUFBRSxJQUFJLENBQUMrTSxTQUFTLENBQUMyQyxHQUFHLEVBQUUsSUFBSSxDQUFDM0MsU0FBUyxDQUFDNEMsUUFBUSxFQUFFLElBQUksQ0FBQzVDLFNBQVMsQ0FBQzZDLFFBQVEsQ0FBQztJQUMzSCxJQUFJLENBQUN0UixFQUFFLENBQUN5QyxRQUFRLENBQUM4TyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM3QyxhQUFhLENBQUM4QyxPQUFPLEVBQUUsSUFBSSxDQUFDOUMsYUFBYSxDQUFDK0MsU0FBUyxDQUFDO0VBQy9GO0VBRUExRCxHQUFHQSxDQUFDO0lBQUVILFNBQVMsR0FBRztFQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtJQUM1QixJQUFJd0UsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixNQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDclMsRUFBRSxDQUFDeUMsUUFBUSxDQUFDeUYsS0FBSyxDQUFDb0ssY0FBYyxLQUFLLElBQUksQ0FBQzdLLEVBQUU7O0lBRXZFO0lBQ0EsSUFBSSxDQUFDNEssYUFBYSxFQUFFO01BQ2hCLElBQUksQ0FBQ3JTLEVBQUUsQ0FBQ3VTLFVBQVUsQ0FBQyxJQUFJLENBQUN6USxPQUFPLENBQUM7TUFDaEMsSUFBSSxDQUFDOUIsRUFBRSxDQUFDeUMsUUFBUSxDQUFDeUYsS0FBSyxDQUFDb0ssY0FBYyxHQUFHLElBQUksQ0FBQzdLLEVBQUU7SUFDbkQ7O0lBRUE7SUFDQSxJQUFJLENBQUNzSSxnQkFBZ0IsQ0FBQ2pGLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLEVBQUV5SCxhQUFhLEtBQUs7TUFDdkQsSUFBSXBDLE9BQU8sR0FBRyxJQUFJLENBQUNyTyxRQUFRLENBQUN5USxhQUFhLENBQUMvQixXQUFXLENBQUM7TUFFdEQsS0FBSyxNQUFNZ0MsU0FBUyxJQUFJRCxhQUFhLENBQUM5QixjQUFjLEVBQUU7UUFDbEQsSUFBSSxDQUFDTixPQUFPLEVBQUU7UUFFZCxJQUFJcUMsU0FBUyxJQUFJckMsT0FBTyxFQUFFO1VBQ3RCQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3FDLFNBQVMsQ0FBQztRQUNoQyxDQUFDLE1BQU0sSUFBSUMsS0FBSyxDQUFDQyxPQUFPLENBQUN2QyxPQUFPLENBQUM5RixLQUFLLENBQUMsRUFBRTtVQUNyQztRQUNKLENBQUMsTUFBTTtVQUNIOEYsT0FBTyxHQUFHd0MsU0FBUztVQUNuQjtRQUNKO01BQ0o7TUFFQSxJQUFJLENBQUN4QyxPQUFPLEVBQUU7UUFDVixPQUFPeEcsSUFBSSxDQUFFLGtCQUFpQjRJLGFBQWEsQ0FBQ3hILElBQUssd0JBQXVCLENBQUM7TUFDN0U7TUFFQSxJQUFJb0YsT0FBTyxJQUFJQSxPQUFPLENBQUM5RixLQUFLLEtBQUtzSSxTQUFTLEVBQUU7UUFDeEMsT0FBT2hKLElBQUksQ0FBRSxHQUFFNEksYUFBYSxDQUFDeEgsSUFBSyx1Q0FBc0MsQ0FBQztNQUM3RTtNQUVBLElBQUlvRixPQUFPLENBQUM5RixLQUFLLENBQUNsSixPQUFPLEVBQUU7UUFDdkJnUixXQUFXLEdBQUdBLFdBQVcsR0FBRyxDQUFDOztRQUU3QjtRQUNBaEMsT0FBTyxDQUFDOUYsS0FBSyxDQUFDL0csTUFBTSxDQUFDNk8sV0FBVyxDQUFDO1FBQ2pDLE9BQU9TLFVBQVUsQ0FBQyxJQUFJLENBQUM3UyxFQUFFLEVBQUV3UyxhQUFhLENBQUM1TixJQUFJLEVBQUVtRyxRQUFRLEVBQUVxSCxXQUFXLENBQUM7TUFDekU7O01BRUE7TUFDQSxJQUFJaEMsT0FBTyxDQUFDOUYsS0FBSyxDQUFDbkIsTUFBTSxJQUFJaUgsT0FBTyxDQUFDOUYsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDbEosT0FBTyxFQUFFO1FBQ2xELE1BQU0wUixZQUFZLEdBQUcsRUFBRTtRQUN2QjFDLE9BQU8sQ0FBQzlGLEtBQUssQ0FBQ1EsT0FBTyxDQUFFUixLQUFLLElBQUs7VUFDN0I4SCxXQUFXLEdBQUdBLFdBQVcsR0FBRyxDQUFDO1VBQzdCOUgsS0FBSyxDQUFDL0csTUFBTSxDQUFDNk8sV0FBVyxDQUFDO1VBQ3pCVSxZQUFZLENBQUN2RixJQUFJLENBQUM2RSxXQUFXLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBRUYsT0FBT1MsVUFBVSxDQUFDLElBQUksQ0FBQzdTLEVBQUUsRUFBRXdTLGFBQWEsQ0FBQzVOLElBQUksRUFBRW1HLFFBQVEsRUFBRStILFlBQVksQ0FBQztNQUMxRTtNQUVBRCxVQUFVLENBQUMsSUFBSSxDQUFDN1MsRUFBRSxFQUFFd1MsYUFBYSxDQUFDNU4sSUFBSSxFQUFFbUcsUUFBUSxFQUFFcUYsT0FBTyxDQUFDOUYsS0FBSyxDQUFDO0lBQ3BFLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ29ILFVBQVUsQ0FBQyxDQUFDO0lBQ2pCLElBQUk5RCxTQUFTLEVBQUUsSUFBSSxDQUFDNU4sRUFBRSxDQUFDeUMsUUFBUSxDQUFDd1AsWUFBWSxDQUFDLElBQUksQ0FBQzlELFNBQVMsS0FBSyxJQUFJLENBQUNuTyxFQUFFLENBQUNvTyxHQUFHLEdBQUcsSUFBSSxDQUFDcE8sRUFBRSxDQUFDK1MsRUFBRSxHQUFHLElBQUksQ0FBQy9TLEVBQUUsQ0FBQ29PLEdBQUcsQ0FBQztFQUMzRztFQUVBekIsTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDM00sRUFBRSxDQUFDZ1QsYUFBYSxDQUFDLElBQUksQ0FBQ2xSLE9BQU8sQ0FBQztFQUN2QztBQUNKO0FBRUEsU0FBUytRLFVBQVVBLENBQUM3UyxFQUFFLEVBQUU0RSxJQUFJLEVBQUVtRyxRQUFRLEVBQUVULEtBQUssRUFBRTtFQUMzQ0EsS0FBSyxHQUFHQSxLQUFLLENBQUNuQixNQUFNLEdBQUc4SixPQUFPLENBQUMzSSxLQUFLLENBQUMsR0FBR0EsS0FBSztFQUM3QyxNQUFNNEksUUFBUSxHQUFHbFQsRUFBRSxDQUFDeUMsUUFBUSxDQUFDeUYsS0FBSyxDQUFDNkgsZ0JBQWdCLENBQUNvRCxHQUFHLENBQUNwSSxRQUFRLENBQUM7O0VBRWpFO0VBQ0EsSUFBSVQsS0FBSyxDQUFDbkIsTUFBTSxFQUFFO0lBQ2QsSUFBSStKLFFBQVEsS0FBS04sU0FBUyxJQUFJTSxRQUFRLENBQUMvSixNQUFNLEtBQUttQixLQUFLLENBQUNuQixNQUFNLEVBQUU7TUFDNUQ7TUFDQW5KLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ3lGLEtBQUssQ0FBQzZILGdCQUFnQixDQUFDL0osR0FBRyxDQUFDK0UsUUFBUSxFQUFFVCxLQUFLLENBQUNxRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxNQUFNO01BQ0gsSUFBSXlDLFdBQVcsQ0FBQ0YsUUFBUSxFQUFFNUksS0FBSyxDQUFDLEVBQUU7O01BRWxDO01BQ0E0SSxRQUFRLENBQUNsTixHQUFHLEdBQUdrTixRQUFRLENBQUNsTixHQUFHLENBQUNzRSxLQUFLLENBQUMsR0FBRytJLFFBQVEsQ0FBQ0gsUUFBUSxFQUFFNUksS0FBSyxDQUFDO01BQzlEdEssRUFBRSxDQUFDeUMsUUFBUSxDQUFDeUYsS0FBSyxDQUFDNkgsZ0JBQWdCLENBQUMvSixHQUFHLENBQUMrRSxRQUFRLEVBQUVtSSxRQUFRLENBQUM7SUFDOUQ7RUFDSixDQUFDLE1BQU07SUFDSCxJQUFJQSxRQUFRLEtBQUs1SSxLQUFLLEVBQUU7SUFDeEJ0SyxFQUFFLENBQUN5QyxRQUFRLENBQUN5RixLQUFLLENBQUM2SCxnQkFBZ0IsQ0FBQy9KLEdBQUcsQ0FBQytFLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0VBQzNEO0VBRUEsUUFBUTFGLElBQUk7SUFDUixLQUFLLElBQUk7TUFDTCxPQUFPMEYsS0FBSyxDQUFDbkIsTUFBTSxHQUFHbkosRUFBRSxDQUFDc1QsVUFBVSxDQUFDdkksUUFBUSxFQUFFVCxLQUFLLENBQUMsR0FBR3RLLEVBQUUsQ0FBQ3VULFNBQVMsQ0FBQ3hJLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDMUYsS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQ3dULFVBQVUsQ0FBQ3pJLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDM0MsS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQ3lULFVBQVUsQ0FBQzFJLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDM0MsS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQzBULFVBQVUsQ0FBQzNJLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDM0MsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNaLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDWCxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ1osS0FBSyxLQUFLO01BQ04sT0FBT0EsS0FBSyxDQUFDbkIsTUFBTSxHQUFHbkosRUFBRSxDQUFDMlQsVUFBVSxDQUFDNUksUUFBUSxFQUFFVCxLQUFLLENBQUMsR0FBR3RLLEVBQUUsQ0FBQzRULFNBQVMsQ0FBQzdJLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDMUYsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNaLEtBQUssS0FBSztNQUNOLE9BQU90SyxFQUFFLENBQUM2VCxVQUFVLENBQUM5SSxRQUFRLEVBQUVULEtBQUssQ0FBQztJQUFFO0lBQzNDLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDWixLQUFLLEtBQUs7TUFDTixPQUFPdEssRUFBRSxDQUFDOFQsVUFBVSxDQUFDL0ksUUFBUSxFQUFFVCxLQUFLLENBQUM7SUFBRTtJQUMzQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ1osS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQytULFVBQVUsQ0FBQ2hKLFFBQVEsRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDM0MsS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQ2dVLGdCQUFnQixDQUFDakosUUFBUSxFQUFFLEtBQUssRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDeEQsS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQ2lVLGdCQUFnQixDQUFDbEosUUFBUSxFQUFFLEtBQUssRUFBRVQsS0FBSyxDQUFDO0lBQUU7SUFDeEQsS0FBSyxLQUFLO01BQ04sT0FBT3RLLEVBQUUsQ0FBQ2tVLGdCQUFnQixDQUFDbkosUUFBUSxFQUFFLEtBQUssRUFBRVQsS0FBSyxDQUFDO0lBQUU7RUFDNUQ7QUFDSjs7QUFFQSxTQUFTZ0YsY0FBY0EsQ0FBQzZFLE1BQU0sRUFBRTtFQUM1QixJQUFJQyxLQUFLLEdBQUdELE1BQU0sQ0FBQzVELEtBQUssQ0FBQyxJQUFJLENBQUM7RUFDOUIsS0FBSyxJQUFJckssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHa08sS0FBSyxDQUFDakwsTUFBTSxFQUFFakQsQ0FBQyxFQUFFLEVBQUU7SUFDbkNrTyxLQUFLLENBQUNsTyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUdrTyxLQUFLLENBQUNsTyxDQUFDLENBQUM7RUFDdEM7RUFDQSxPQUFPa08sS0FBSyxDQUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQztBQUMzQjtBQUVBLFNBQVM4QixPQUFPQSxDQUFDb0IsQ0FBQyxFQUFFO0VBQ2hCLE1BQU1DLFFBQVEsR0FBR0QsQ0FBQyxDQUFDbEwsTUFBTTtFQUN6QixNQUFNb0wsUUFBUSxHQUFHRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNsTCxNQUFNO0VBQzVCLElBQUlvTCxRQUFRLEtBQUszQixTQUFTLEVBQUUsT0FBT3lCLENBQUM7RUFDcEMsTUFBTWxMLE1BQU0sR0FBR21MLFFBQVEsR0FBR0MsUUFBUTtFQUNsQyxJQUFJakssS0FBSyxHQUFHMEQsYUFBYSxDQUFDN0UsTUFBTSxDQUFDO0VBQ2pDLElBQUksQ0FBQ21CLEtBQUssRUFBRTBELGFBQWEsQ0FBQzdFLE1BQU0sQ0FBQyxHQUFHbUIsS0FBSyxHQUFHLElBQUk5QixZQUFZLENBQUNXLE1BQU0sQ0FBQztFQUNwRSxLQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdvTyxRQUFRLEVBQUVwTyxDQUFDLEVBQUUsRUFBRW9FLEtBQUssQ0FBQ3RFLEdBQUcsQ0FBQ3FPLENBQUMsQ0FBQ25PLENBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxTyxRQUFRLENBQUM7RUFDaEUsT0FBT2pLLEtBQUs7QUFDaEI7QUFFQSxTQUFTOEksV0FBV0EsQ0FBQ2lCLENBQUMsRUFBRUcsQ0FBQyxFQUFFO0VBQ3ZCLElBQUlILENBQUMsQ0FBQ2xMLE1BQU0sS0FBS3FMLENBQUMsQ0FBQ3JMLE1BQU0sRUFBRSxPQUFPLEtBQUs7RUFDdkMsS0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQUMsRUFBRStGLENBQUMsR0FBR29JLENBQUMsQ0FBQ2xMLE1BQU0sRUFBRWpELENBQUMsR0FBRytGLENBQUMsRUFBRS9GLENBQUMsRUFBRSxFQUFFO0lBQ3RDLElBQUltTyxDQUFDLENBQUNuTyxDQUFDLENBQUMsS0FBS3NPLENBQUMsQ0FBQ3RPLENBQUMsQ0FBQyxFQUFFLE9BQU8sS0FBSztFQUNuQztFQUNBLE9BQU8sSUFBSTtBQUNmO0FBRUEsU0FBU21OLFFBQVFBLENBQUNnQixDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUNwQixLQUFLLElBQUl0TyxDQUFDLEdBQUcsQ0FBQyxFQUFFK0YsQ0FBQyxHQUFHb0ksQ0FBQyxDQUFDbEwsTUFBTSxFQUFFakQsQ0FBQyxHQUFHK0YsQ0FBQyxFQUFFL0YsQ0FBQyxFQUFFLEVBQUU7SUFDdENtTyxDQUFDLENBQUNuTyxDQUFDLENBQUMsR0FBR3NPLENBQUMsQ0FBQ3RPLENBQUMsQ0FBQztFQUNmO0FBQ0o7QUFFQSxJQUFJdU8sU0FBUyxHQUFHLENBQUM7QUFDakIsU0FBUzdLLElBQUlBLENBQUM4SyxPQUFPLEVBQUU7RUFDbkIsSUFBSUQsU0FBUyxHQUFHLEdBQUcsRUFBRTtFQUNyQnBULE9BQU8sQ0FBQ3VJLElBQUksQ0FBQzhLLE9BQU8sQ0FBQztFQUNyQkQsU0FBUyxFQUFFO0VBQ1gsSUFBSUEsU0FBUyxHQUFHLEdBQUcsRUFBRXBULE9BQU8sQ0FBQ3VJLElBQUksQ0FBQyxpREFBaUQsQ0FBQztBQUN4Rjs7Ozs7Ozs7Ozs7Ozs7O0FDMVN1Qzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXpDLFFBQVEsR0FBRyxlQUFnQixJQUFJekQsK0NBQUksQ0FBQyxDQUFDO0FBQzNDLElBQUkwRCxFQUFFLEdBQUcsQ0FBQztBQUVILE1BQU1sRixRQUFRLENBQUM7RUFDbEJuQyxXQUFXQSxDQUFDO0lBQ1I2QyxNQUFNLEdBQUd4QyxRQUFRLENBQUN1VSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3pDQyxLQUFLLEdBQUcsR0FBRztJQUNYQyxNQUFNLEdBQUcsR0FBRztJQUNaQyxHQUFHLEdBQUcsQ0FBQztJQUNQQyxLQUFLLEdBQUcsS0FBSztJQUNiQyxLQUFLLEdBQUcsSUFBSTtJQUNaQyxPQUFPLEdBQUcsS0FBSztJQUNmQyxTQUFTLEdBQUcsS0FBSztJQUNqQnZHLGtCQUFrQixHQUFHLEtBQUs7SUFDMUJ3RyxxQkFBcUIsR0FBRyxLQUFLO0lBQzdCQyxlQUFlLEdBQUcsU0FBUztJQUMzQkMsU0FBUyxHQUFHLElBQUk7SUFDaEJDLEtBQUssR0FBRztFQUNaLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNKLE1BQU0vTyxVQUFVLEdBQUc7TUFBRXdPLEtBQUs7TUFBRUMsS0FBSztNQUFFQyxPQUFPO01BQUVDLFNBQVM7TUFBRXZHLGtCQUFrQjtNQUFFd0cscUJBQXFCO01BQUVDO0lBQWdCLENBQUM7SUFDbkgsSUFBSSxDQUFDTixHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNRLEtBQUssR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQ1AsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ3RHLGtCQUFrQixHQUFHQSxrQkFBa0I7SUFDNUMsSUFBSSxDQUFDMEcsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQzVOLEVBQUUsR0FBR0wsRUFBRSxFQUFFOztJQUVkO0lBQ0EsSUFBSWtPLEtBQUssS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDdFYsRUFBRSxHQUFHNEMsTUFBTSxDQUFDNFMsVUFBVSxDQUFDLFFBQVEsRUFBRWpQLFVBQVUsQ0FBQztJQUNsRSxJQUFJLENBQUNrUCxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ3pWLEVBQUU7SUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQ0EsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRSxHQUFHNEMsTUFBTSxDQUFDNFMsVUFBVSxDQUFDLE9BQU8sRUFBRWpQLFVBQVUsQ0FBQztJQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDdkcsRUFBRSxFQUFFcUIsT0FBTyxDQUFDbUcsS0FBSyxDQUFDLGdDQUFnQyxDQUFDOztJQUU3RDtJQUNBLElBQUksQ0FBQ3hILEVBQUUsQ0FBQ3lDLFFBQVEsR0FBRyxJQUFJOztJQUV2QjtJQUNBLElBQUksQ0FBQ1MsT0FBTyxDQUFDMFIsS0FBSyxFQUFFQyxNQUFNLENBQUM7O0lBRTNCO0lBQ0EsSUFBSSxDQUFDM00sS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksQ0FBQ0EsS0FBSyxDQUFDdUcsU0FBUyxHQUFHO01BQUUvTSxHQUFHLEVBQUUsSUFBSSxDQUFDMUIsRUFBRSxDQUFDNk8sR0FBRztNQUFFdUMsR0FBRyxFQUFFLElBQUksQ0FBQ3BSLEVBQUUsQ0FBQzBWO0lBQUssQ0FBQztJQUM5RCxJQUFJLENBQUN4TixLQUFLLENBQUN3RyxhQUFhLEdBQUc7TUFBRThDLE9BQU8sRUFBRSxJQUFJLENBQUN4UixFQUFFLENBQUMyVjtJQUFTLENBQUM7SUFDeEQsSUFBSSxDQUFDek4sS0FBSyxDQUFDMkYsUUFBUSxHQUFHLEtBQUs7SUFDM0IsSUFBSSxDQUFDM0YsS0FBSyxDQUFDaUcsU0FBUyxHQUFHLElBQUksQ0FBQ25PLEVBQUUsQ0FBQ29PLEdBQUc7SUFDbEMsSUFBSSxDQUFDbEcsS0FBSyxDQUFDME4sU0FBUyxHQUFHLElBQUk7SUFDM0IsSUFBSSxDQUFDMU4sS0FBSyxDQUFDcUcsU0FBUyxHQUFHLElBQUksQ0FBQ3ZPLEVBQUUsQ0FBQ3dPLElBQUk7SUFDbkMsSUFBSSxDQUFDdEcsS0FBSyxDQUFDMk4sZ0JBQWdCLEdBQUcsS0FBSztJQUNuQyxJQUFJLENBQUMzTixLQUFLLENBQUM0TixLQUFLLEdBQUcsS0FBSztJQUN4QixJQUFJLENBQUM1TixLQUFLLENBQUM2TixlQUFlLEdBQUcsQ0FBQztJQUM5QixJQUFJLENBQUM3TixLQUFLLENBQUM4TixXQUFXLEdBQUcsSUFBSTtJQUM3QixJQUFJLENBQUM5TixLQUFLLENBQUMrTixRQUFRLEdBQUc7TUFBRS9KLENBQUMsRUFBRSxDQUFDO01BQUVDLENBQUMsRUFBRSxDQUFDO01BQUV5SSxLQUFLLEVBQUUsSUFBSTtNQUFFQyxNQUFNLEVBQUU7SUFBSyxDQUFDO0lBQy9ELElBQUksQ0FBQzNNLEtBQUssQ0FBQzRLLFlBQVksR0FBRyxFQUFFO0lBQzVCLElBQUksQ0FBQzVLLEtBQUssQ0FBQ2dPLGlCQUFpQixHQUFHLENBQUM7SUFDaEMsSUFBSSxDQUFDaE8sS0FBSyxDQUFDK0IsV0FBVyxHQUFHLElBQUk7SUFDN0IsSUFBSSxDQUFDL0IsS0FBSyxDQUFDNkgsZ0JBQWdCLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDOUgsS0FBSyxDQUFDb0ssY0FBYyxHQUFHLElBQUk7O0lBRWhDO0lBQ0EsSUFBSSxDQUFDNkQsVUFBVSxHQUFHLENBQUMsQ0FBQzs7SUFFcEI7SUFDQSxJQUFJLElBQUksQ0FBQ1YsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDVyxZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFDM0MsSUFBSSxDQUFDQSxZQUFZLENBQUMsMEJBQTBCLENBQUM7SUFDakQsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQSxZQUFZLENBQUMsbUJBQW1CLENBQUM7TUFDdEMsSUFBSSxDQUFDQSxZQUFZLENBQUMsMEJBQTBCLENBQUM7TUFDN0MsSUFBSSxDQUFDQSxZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFDM0MsSUFBSSxDQUFDQSxZQUFZLENBQUMsK0JBQStCLENBQUM7TUFDbEQsSUFBSSxDQUFDQSxZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFDM0MsSUFBSSxDQUFDQSxZQUFZLENBQUMsMEJBQTBCLENBQUM7TUFDN0MsSUFBSSxDQUFDQSxZQUFZLENBQUMsVUFBVSxDQUFDO01BQzdCLElBQUksQ0FBQ0EsWUFBWSxDQUFDLHFCQUFxQixDQUFDO01BQ3hDLElBQUksQ0FBQ0EsWUFBWSxDQUFDLG9CQUFvQixDQUFDO0lBQzNDO0lBQ0EsSUFBSSxDQUFDQSxZQUFZLENBQUMsK0JBQStCLENBQUM7SUFDbEQsSUFBSSxDQUFDQSxZQUFZLENBQUMsOEJBQThCLENBQUM7SUFDakQsSUFBSSxDQUFDQSxZQUFZLENBQUMsK0JBQStCLENBQUM7SUFDbEQsSUFBSSxDQUFDQSxZQUFZLENBQUMsK0JBQStCLENBQUM7SUFDbEQsSUFBSSxDQUFDQSxZQUFZLENBQUMsZ0NBQWdDLENBQUM7SUFDbkQsSUFBSSxDQUFDQSxZQUFZLENBQUMsdUNBQXVDLENBQUM7O0lBRTFEO0lBQ0EsSUFBSSxDQUFDaEwsbUJBQW1CLEdBQUcsSUFBSSxDQUFDZ0wsWUFBWSxDQUFDLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO0lBQ3pILElBQUksQ0FBQzFLLG1CQUFtQixHQUFHLElBQUksQ0FBQzBLLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztJQUN6SCxJQUFJLENBQUMzSyxxQkFBcUIsR0FBRyxJQUFJLENBQUMySyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsNEJBQTRCLENBQUM7SUFDL0gsSUFBSSxDQUFDekwsaUJBQWlCLEdBQUcsSUFBSSxDQUFDeUwsWUFBWSxDQUFDLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDO0lBQ2xILElBQUksQ0FBQ3JPLGVBQWUsR0FBRyxJQUFJLENBQUNxTyxZQUFZLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUM7SUFDNUcsSUFBSSxDQUFDeEosaUJBQWlCLEdBQUcsSUFBSSxDQUFDd0osWUFBWSxDQUFDLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDO0lBQ2xILElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0QsWUFBWSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQzs7SUFFN0Y7SUFDQSxJQUFJLENBQUNFLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDQSxVQUFVLENBQUNDLGVBQWUsR0FBRyxJQUFJLENBQUN2VyxFQUFFLENBQUN3VyxZQUFZLENBQUMsSUFBSSxDQUFDeFcsRUFBRSxDQUFDeVcsZ0NBQWdDLENBQUM7SUFDaEcsSUFBSSxDQUFDSCxVQUFVLENBQUNJLGFBQWEsR0FBRyxJQUFJLENBQUNOLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUM3RSxJQUFJLENBQUNwVyxFQUFFLENBQUN3VyxZQUFZLENBQUMsSUFBSSxDQUFDSixZQUFZLENBQUMsZ0NBQWdDLENBQUMsQ0FBQ08sOEJBQThCLENBQUMsR0FDeEcsQ0FBQztFQUNYO0VBRUF6VCxPQUFPQSxDQUFDMFIsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDbkIsSUFBSSxDQUFDRCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxDQUFDN1UsRUFBRSxDQUFDNEMsTUFBTSxDQUFDZ1MsS0FBSyxHQUFHQSxLQUFLLEdBQUcsSUFBSSxDQUFDRSxHQUFHO0lBQ3ZDLElBQUksQ0FBQzlVLEVBQUUsQ0FBQzRDLE1BQU0sQ0FBQ2lTLE1BQU0sR0FBR0EsTUFBTSxHQUFHLElBQUksQ0FBQ0MsR0FBRztJQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDOVUsRUFBRSxDQUFDNEMsTUFBTSxDQUFDZ1UsS0FBSyxFQUFFO0lBQzNCdFMsTUFBTSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDdkUsRUFBRSxDQUFDNEMsTUFBTSxDQUFDZ1UsS0FBSyxFQUFFO01BQ2hDaEMsS0FBSyxFQUFFQSxLQUFLLEdBQUcsSUFBSTtNQUNuQkMsTUFBTSxFQUFFQSxNQUFNLEdBQUc7SUFDckIsQ0FBQyxDQUFDO0VBQ047RUFFQWdDLFdBQVdBLENBQUNqQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTNJLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDckMsSUFBSSxJQUFJLENBQUNqRSxLQUFLLENBQUMrTixRQUFRLENBQUNyQixLQUFLLEtBQUtBLEtBQUssSUFBSSxJQUFJLENBQUMxTSxLQUFLLENBQUMrTixRQUFRLENBQUNwQixNQUFNLEtBQUtBLE1BQU0sRUFBRTtJQUNsRixJQUFJLENBQUMzTSxLQUFLLENBQUMrTixRQUFRLENBQUNyQixLQUFLLEdBQUdBLEtBQUs7SUFDakMsSUFBSSxDQUFDMU0sS0FBSyxDQUFDK04sUUFBUSxDQUFDcEIsTUFBTSxHQUFHQSxNQUFNO0lBQ25DLElBQUksQ0FBQzNNLEtBQUssQ0FBQytOLFFBQVEsQ0FBQy9KLENBQUMsR0FBR0EsQ0FBQztJQUN6QixJQUFJLENBQUNoRSxLQUFLLENBQUMrTixRQUFRLENBQUM5SixDQUFDLEdBQUdBLENBQUM7SUFDekIsSUFBSSxDQUFDbk0sRUFBRSxDQUFDaVcsUUFBUSxDQUFDL0osQ0FBQyxFQUFFQyxDQUFDLEVBQUV5SSxLQUFLLEVBQUVDLE1BQU0sQ0FBQztFQUN6QztFQUVBaUMsVUFBVUEsQ0FBQ2xDLEtBQUssRUFBRUMsTUFBTSxFQUFFM0ksQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNwQyxJQUFJLENBQUNuTSxFQUFFLENBQUMrVyxPQUFPLENBQUM3SyxDQUFDLEVBQUVDLENBQUMsRUFBRXlJLEtBQUssRUFBRUMsTUFBTSxDQUFDO0VBQ3hDO0VBRUFsRCxNQUFNQSxDQUFDbEssRUFBRSxFQUFFO0lBQ1AsSUFBSSxJQUFJLENBQUNTLEtBQUssQ0FBQ1QsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQzdCLElBQUksQ0FBQ3pILEVBQUUsQ0FBQzJSLE1BQU0sQ0FBQ2xLLEVBQUUsQ0FBQztJQUNsQixJQUFJLENBQUNTLEtBQUssQ0FBQ1QsRUFBRSxDQUFDLEdBQUcsSUFBSTtFQUN6QjtFQUVBb0ssT0FBT0EsQ0FBQ3BLLEVBQUUsRUFBRTtJQUNSLElBQUksSUFBSSxDQUFDUyxLQUFLLENBQUNULEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtJQUM5QixJQUFJLENBQUN6SCxFQUFFLENBQUM2UixPQUFPLENBQUNwSyxFQUFFLENBQUM7SUFDbkIsSUFBSSxDQUFDUyxLQUFLLENBQUNULEVBQUUsQ0FBQyxHQUFHLEtBQUs7RUFDMUI7RUFFQW1ILFlBQVlBLENBQUNsTixHQUFHLEVBQUUwUCxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLElBQ0ksSUFBSSxDQUFDcEosS0FBSyxDQUFDdUcsU0FBUyxDQUFDL00sR0FBRyxLQUFLQSxHQUFHLElBQ2hDLElBQUksQ0FBQ3dHLEtBQUssQ0FBQ3VHLFNBQVMsQ0FBQzJDLEdBQUcsS0FBS0EsR0FBRyxJQUNoQyxJQUFJLENBQUNsSixLQUFLLENBQUN1RyxTQUFTLENBQUM0QyxRQUFRLEtBQUtBLFFBQVEsSUFDMUMsSUFBSSxDQUFDbkosS0FBSyxDQUFDdUcsU0FBUyxDQUFDNkMsUUFBUSxLQUFLQSxRQUFRLEVBRTFDO0lBQ0osSUFBSSxDQUFDcEosS0FBSyxDQUFDdUcsU0FBUyxDQUFDL00sR0FBRyxHQUFHQSxHQUFHO0lBQzlCLElBQUksQ0FBQ3dHLEtBQUssQ0FBQ3VHLFNBQVMsQ0FBQzJDLEdBQUcsR0FBR0EsR0FBRztJQUM5QixJQUFJLENBQUNsSixLQUFLLENBQUN1RyxTQUFTLENBQUM0QyxRQUFRLEdBQUdBLFFBQVE7SUFDeEMsSUFBSSxDQUFDbkosS0FBSyxDQUFDdUcsU0FBUyxDQUFDNkMsUUFBUSxHQUFHQSxRQUFRO0lBQ3hDLElBQUlELFFBQVEsS0FBS3VCLFNBQVMsRUFBRSxJQUFJLENBQUM1UyxFQUFFLENBQUNnWCxpQkFBaUIsQ0FBQ3RWLEdBQUcsRUFBRTBQLEdBQUcsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLENBQUMsQ0FBQyxLQUMvRSxJQUFJLENBQUN0UixFQUFFLENBQUN5TyxTQUFTLENBQUMvTSxHQUFHLEVBQUUwUCxHQUFHLENBQUM7RUFDcEM7RUFFQUcsZ0JBQWdCQSxDQUFDQyxPQUFPLEVBQUVDLFNBQVMsRUFBRTtJQUNqQ0QsT0FBTyxHQUFHQSxPQUFPLElBQUksSUFBSSxDQUFDeFIsRUFBRSxDQUFDMlYsUUFBUTtJQUNyQyxJQUFJLElBQUksQ0FBQ3pOLEtBQUssQ0FBQ3dHLGFBQWEsQ0FBQzhDLE9BQU8sS0FBS0EsT0FBTyxJQUFJLElBQUksQ0FBQ3RKLEtBQUssQ0FBQ3dHLGFBQWEsQ0FBQytDLFNBQVMsS0FBS0EsU0FBUyxFQUFFO0lBQ3RHLElBQUksQ0FBQ3ZKLEtBQUssQ0FBQ3dHLGFBQWEsQ0FBQzhDLE9BQU8sR0FBR0EsT0FBTztJQUMxQyxJQUFJLENBQUN0SixLQUFLLENBQUN3RyxhQUFhLENBQUMrQyxTQUFTLEdBQUdBLFNBQVM7SUFDOUMsSUFBSUEsU0FBUyxLQUFLbUIsU0FBUyxFQUFFLElBQUksQ0FBQzVTLEVBQUUsQ0FBQ2lYLHFCQUFxQixDQUFDekYsT0FBTyxFQUFFQyxTQUFTLENBQUMsQ0FBQyxLQUMxRSxJQUFJLENBQUN6UixFQUFFLENBQUMwTyxhQUFhLENBQUM4QyxPQUFPLENBQUM7RUFDdkM7RUFFQVEsV0FBV0EsQ0FBQzFILEtBQUssRUFBRTtJQUNmLElBQUksSUFBSSxDQUFDcEMsS0FBSyxDQUFDMkYsUUFBUSxLQUFLdkQsS0FBSyxFQUFFO0lBQ25DLElBQUksQ0FBQ3BDLEtBQUssQ0FBQzJGLFFBQVEsR0FBR3ZELEtBQUs7SUFDM0IsSUFBSSxDQUFDdEssRUFBRSxDQUFDNk4sUUFBUSxDQUFDdkQsS0FBSyxDQUFDO0VBQzNCO0VBRUEySCxZQUFZQSxDQUFDM0gsS0FBSyxFQUFFO0lBQ2hCLElBQUksSUFBSSxDQUFDcEMsS0FBSyxDQUFDaUcsU0FBUyxLQUFLN0QsS0FBSyxFQUFFO0lBQ3BDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ2lHLFNBQVMsR0FBRzdELEtBQUs7SUFDNUIsSUFBSSxDQUFDdEssRUFBRSxDQUFDbU8sU0FBUyxDQUFDN0QsS0FBSyxDQUFDO0VBQzVCO0VBRUE0SCxZQUFZQSxDQUFDNUgsS0FBSyxFQUFFO0lBQ2hCLElBQUksSUFBSSxDQUFDcEMsS0FBSyxDQUFDME4sU0FBUyxLQUFLdEwsS0FBSyxFQUFFO0lBQ3BDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQzBOLFNBQVMsR0FBR3RMLEtBQUs7SUFDNUIsSUFBSSxDQUFDdEssRUFBRSxDQUFDNFYsU0FBUyxDQUFDdEwsS0FBSyxDQUFDO0VBQzVCO0VBRUE2SCxZQUFZQSxDQUFDN0gsS0FBSyxFQUFFO0lBQ2hCLElBQUksSUFBSSxDQUFDcEMsS0FBSyxDQUFDcUcsU0FBUyxLQUFLakUsS0FBSyxFQUFFO0lBQ3BDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ3FHLFNBQVMsR0FBR2pFLEtBQUs7SUFDNUIsSUFBSSxDQUFDdEssRUFBRSxDQUFDdU8sU0FBUyxDQUFDakUsS0FBSyxDQUFDO0VBQzVCO0VBRUE0TSxhQUFhQSxDQUFDNU0sS0FBSyxFQUFFO0lBQ2pCLElBQUksSUFBSSxDQUFDcEMsS0FBSyxDQUFDZ08saUJBQWlCLEtBQUs1TCxLQUFLLEVBQUU7SUFDNUMsSUFBSSxDQUFDcEMsS0FBSyxDQUFDZ08saUJBQWlCLEdBQUc1TCxLQUFLO0lBQ3BDLElBQUksQ0FBQ3RLLEVBQUUsQ0FBQ2tYLGFBQWEsQ0FBQyxJQUFJLENBQUNsWCxFQUFFLENBQUNtWCxRQUFRLEdBQUc3TSxLQUFLLENBQUM7RUFDbkQ7RUFFQThNLGVBQWVBLENBQUM7SUFBRTVSLE1BQU0sR0FBRyxJQUFJLENBQUN4RixFQUFFLENBQUNxWCxXQUFXO0lBQUU1TixNQUFNLEdBQUc7RUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDbEUsSUFBSSxJQUFJLENBQUN2QixLQUFLLENBQUM4TixXQUFXLEtBQUt2TSxNQUFNLEVBQUU7SUFDdkMsSUFBSSxDQUFDdkIsS0FBSyxDQUFDOE4sV0FBVyxHQUFHdk0sTUFBTTtJQUMvQixJQUFJLENBQUN6SixFQUFFLENBQUNvWCxlQUFlLENBQUM1UixNQUFNLEVBQUVpRSxNQUFNLENBQUM7RUFDM0M7RUFFQTJNLFlBQVlBLENBQUNrQixTQUFTLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO0lBQ3pDO0lBQ0EsSUFBSUQsVUFBVSxJQUFJLElBQUksQ0FBQ3ZYLEVBQUUsQ0FBQ3VYLFVBQVUsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDdlgsRUFBRSxDQUFDdVgsVUFBVSxDQUFDLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUN6WCxFQUFFLENBQUM7O0lBRS9FO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ21XLFVBQVUsQ0FBQ21CLFNBQVMsQ0FBQyxFQUFFO01BQzdCLElBQUksQ0FBQ25CLFVBQVUsQ0FBQ21CLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQ3RYLEVBQUUsQ0FBQ29XLFlBQVksQ0FBQ2tCLFNBQVMsQ0FBQztJQUNoRTs7SUFFQTtJQUNBLElBQUksQ0FBQ0MsVUFBVSxFQUFFLE9BQU8sSUFBSSxDQUFDcEIsVUFBVSxDQUFDbUIsU0FBUyxDQUFDOztJQUVsRDtJQUNBLElBQUksQ0FBQyxJQUFJLENBQUNuQixVQUFVLENBQUNtQixTQUFTLENBQUMsRUFBRSxPQUFPLElBQUk7O0lBRTVDO0lBQ0EsT0FBTyxJQUFJLENBQUNuQixVQUFVLENBQUNtQixTQUFTLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN0QixVQUFVLENBQUNtQixTQUFTLENBQUMsQ0FBQztFQUMvRTtFQUVBSSxVQUFVQSxDQUFDckQsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7SUFDYixJQUFJSCxDQUFDLENBQUNySCxXQUFXLEtBQUt3SCxDQUFDLENBQUN4SCxXQUFXLEVBQUU7TUFDakMsT0FBT3FILENBQUMsQ0FBQ3JILFdBQVcsR0FBR3dILENBQUMsQ0FBQ3hILFdBQVc7SUFDeEMsQ0FBQyxNQUFNLElBQUlxSCxDQUFDLENBQUN2UyxPQUFPLENBQUMyRixFQUFFLEtBQUsrTSxDQUFDLENBQUMxUyxPQUFPLENBQUMyRixFQUFFLEVBQUU7TUFDdEMsT0FBTzRNLENBQUMsQ0FBQ3ZTLE9BQU8sQ0FBQzJGLEVBQUUsR0FBRytNLENBQUMsQ0FBQzFTLE9BQU8sQ0FBQzJGLEVBQUU7SUFDdEMsQ0FBQyxNQUFNLElBQUk0TSxDQUFDLENBQUNzRCxNQUFNLEtBQUtuRCxDQUFDLENBQUNtRCxNQUFNLEVBQUU7TUFDOUIsT0FBT3RELENBQUMsQ0FBQ3NELE1BQU0sR0FBR25ELENBQUMsQ0FBQ21ELE1BQU07SUFDOUIsQ0FBQyxNQUFNO01BQ0gsT0FBT25ELENBQUMsQ0FBQy9NLEVBQUUsR0FBRzRNLENBQUMsQ0FBQzVNLEVBQUU7SUFDdEI7RUFDSjtFQUVBbVEsZUFBZUEsQ0FBQ3ZELENBQUMsRUFBRUcsQ0FBQyxFQUFFO0lBQ2xCLElBQUlILENBQUMsQ0FBQ3JILFdBQVcsS0FBS3dILENBQUMsQ0FBQ3hILFdBQVcsRUFBRTtNQUNqQyxPQUFPcUgsQ0FBQyxDQUFDckgsV0FBVyxHQUFHd0gsQ0FBQyxDQUFDeEgsV0FBVztJQUN4QztJQUNBLElBQUlxSCxDQUFDLENBQUNzRCxNQUFNLEtBQUtuRCxDQUFDLENBQUNtRCxNQUFNLEVBQUU7TUFDdkIsT0FBT25ELENBQUMsQ0FBQ21ELE1BQU0sR0FBR3RELENBQUMsQ0FBQ3NELE1BQU07SUFDOUIsQ0FBQyxNQUFNO01BQ0gsT0FBT25ELENBQUMsQ0FBQy9NLEVBQUUsR0FBRzRNLENBQUMsQ0FBQzVNLEVBQUU7SUFDdEI7RUFDSjtFQUVBb1EsTUFBTUEsQ0FBQ3hELENBQUMsRUFBRUcsQ0FBQyxFQUFFO0lBQ1QsSUFBSUgsQ0FBQyxDQUFDckgsV0FBVyxLQUFLd0gsQ0FBQyxDQUFDeEgsV0FBVyxFQUFFO01BQ2pDLE9BQU9xSCxDQUFDLENBQUNySCxXQUFXLEdBQUd3SCxDQUFDLENBQUN4SCxXQUFXO0lBQ3hDLENBQUMsTUFBTSxJQUFJcUgsQ0FBQyxDQUFDdlMsT0FBTyxDQUFDMkYsRUFBRSxLQUFLK00sQ0FBQyxDQUFDMVMsT0FBTyxDQUFDMkYsRUFBRSxFQUFFO01BQ3RDLE9BQU80TSxDQUFDLENBQUN2UyxPQUFPLENBQUMyRixFQUFFLEdBQUcrTSxDQUFDLENBQUMxUyxPQUFPLENBQUMyRixFQUFFO0lBQ3RDLENBQUMsTUFBTTtNQUNILE9BQU8rTSxDQUFDLENBQUMvTSxFQUFFLEdBQUc0TSxDQUFDLENBQUM1TSxFQUFFO0lBQ3RCO0VBQ0o7RUFFQXFRLGFBQWFBLENBQUM7SUFBRTdYLEtBQUs7SUFBRTRDLE1BQU07SUFBRWtWLFdBQVc7SUFBRUM7RUFBSyxDQUFDLEVBQUU7SUFDaEQsSUFBSUMsVUFBVSxHQUFHLEVBQUU7SUFFbkIsSUFBSXBWLE1BQU0sSUFBSWtWLFdBQVcsRUFBRWxWLE1BQU0sQ0FBQ2dELGFBQWEsQ0FBQyxDQUFDOztJQUVqRDtJQUNBNUYsS0FBSyxDQUFDaVksUUFBUSxDQUFFNVIsSUFBSSxJQUFLO01BQ3JCLElBQUksQ0FBQ0EsSUFBSSxDQUFDNlIsT0FBTyxFQUFFLE9BQU8sSUFBSTtNQUM5QixJQUFJLENBQUM3UixJQUFJLENBQUMrRSxJQUFJLEVBQUU7TUFFaEIsSUFBSTBNLFdBQVcsSUFBSXpSLElBQUksQ0FBQ3lHLGFBQWEsSUFBSWxLLE1BQU0sRUFBRTtRQUM3QyxJQUFJLENBQUNBLE1BQU0sQ0FBQ3dELHFCQUFxQixDQUFDQyxJQUFJLENBQUMsRUFBRTtNQUM3QztNQUVBMlIsVUFBVSxDQUFDMUssSUFBSSxDQUFDakgsSUFBSSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztJQUVGLElBQUkwUixJQUFJLEVBQUU7TUFDTixNQUFNSSxNQUFNLEdBQUcsRUFBRTtNQUNqQixNQUFNbkssV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO01BQ3hCLE1BQU1vSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7O01BRWZKLFVBQVUsQ0FBQ25OLE9BQU8sQ0FBRXhFLElBQUksSUFBSztRQUN6QjtRQUNBLElBQUksQ0FBQ0EsSUFBSSxDQUFDeEUsT0FBTyxDQUFDbU0sV0FBVyxFQUFFO1VBQzNCbUssTUFBTSxDQUFDN0ssSUFBSSxDQUFDakgsSUFBSSxDQUFDO1FBQ3JCLENBQUMsTUFBTSxJQUFJQSxJQUFJLENBQUN4RSxPQUFPLENBQUN1TSxTQUFTLEVBQUU7VUFDL0JKLFdBQVcsQ0FBQ1YsSUFBSSxDQUFDakgsSUFBSSxDQUFDO1FBQzFCLENBQUMsTUFBTTtVQUNIK1IsRUFBRSxDQUFDOUssSUFBSSxDQUFDakgsSUFBSSxDQUFDO1FBQ2pCO1FBRUFBLElBQUksQ0FBQ3FSLE1BQU0sR0FBRyxDQUFDOztRQUVmO1FBQ0EsSUFBSXJSLElBQUksQ0FBQzBHLFdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQzFHLElBQUksQ0FBQ3hFLE9BQU8sQ0FBQ3VNLFNBQVMsSUFBSSxDQUFDeEwsTUFBTSxFQUFFOztRQUVsRTtRQUNBeUQsSUFBSSxDQUFDbEIsV0FBVyxDQUFDQyxjQUFjLENBQUM4QixRQUFRLENBQUM7UUFDekNBLFFBQVEsQ0FBQ3hCLFlBQVksQ0FBQzlDLE1BQU0sQ0FBQzZCLG9CQUFvQixDQUFDO1FBQ2xENEIsSUFBSSxDQUFDcVIsTUFBTSxHQUFHeFEsUUFBUSxDQUFDcEUsQ0FBQztNQUM1QixDQUFDLENBQUM7TUFFRnFWLE1BQU0sQ0FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQ04sVUFBVSxDQUFDO01BQzVCekosV0FBVyxDQUFDK0osSUFBSSxDQUFDLElBQUksQ0FBQ0osZUFBZSxDQUFDO01BQ3RDUyxFQUFFLENBQUNMLElBQUksQ0FBQyxJQUFJLENBQUNILE1BQU0sQ0FBQztNQUVwQkksVUFBVSxHQUFHRyxNQUFNLENBQUNFLE1BQU0sQ0FBQ3JLLFdBQVcsRUFBRW9LLEVBQUUsQ0FBQztJQUMvQztJQUVBLE9BQU9KLFVBQVU7RUFDckI7RUFFQXpVLE1BQU1BLENBQUM7SUFBRXZELEtBQUs7SUFBRTRDLE1BQU07SUFBRTJDLE1BQU0sR0FBRyxJQUFJO0lBQUVqQyxNQUFNLEdBQUcsSUFBSTtJQUFFeVUsSUFBSSxHQUFHLElBQUk7SUFBRUQsV0FBVyxHQUFHLElBQUk7SUFBRVE7RUFBTSxDQUFDLEVBQUU7SUFDNUYsSUFBSS9TLE1BQU0sS0FBSyxJQUFJLEVBQUU7TUFDakI7TUFDQSxJQUFJLENBQUM0UixlQUFlLENBQUMsQ0FBQztNQUN0QixJQUFJLENBQUNQLFdBQVcsQ0FBQyxJQUFJLENBQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDRSxHQUFHLEVBQUUsSUFBSSxDQUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUM7SUFDbkUsQ0FBQyxNQUFNO01BQ0g7TUFDQSxJQUFJLENBQUNzQyxlQUFlLENBQUM1UixNQUFNLENBQUM7TUFDNUIsSUFBSSxDQUFDcVIsV0FBVyxDQUFDclIsTUFBTSxDQUFDb1AsS0FBSyxFQUFFcFAsTUFBTSxDQUFDcVAsTUFBTSxDQUFDO0lBQ2pEO0lBRUEsSUFBSTBELEtBQUssSUFBSyxJQUFJLENBQUNsRCxTQUFTLElBQUlrRCxLQUFLLEtBQUssS0FBTSxFQUFFO01BQzlDO01BQ0EsSUFBSSxJQUFJLENBQUN2RCxLQUFLLEtBQUssQ0FBQ3hQLE1BQU0sSUFBSUEsTUFBTSxDQUFDd1AsS0FBSyxDQUFDLEVBQUU7UUFDekMsSUFBSSxDQUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQzNSLEVBQUUsQ0FBQzRSLFVBQVUsQ0FBQztRQUMvQixJQUFJLENBQUNNLFlBQVksQ0FBQyxJQUFJLENBQUM7TUFDM0I7TUFDQSxJQUFJLENBQUNsUyxFQUFFLENBQUN1WSxLQUFLLENBQ1QsQ0FBQyxJQUFJLENBQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDdlYsRUFBRSxDQUFDd1ksZ0JBQWdCLEdBQUcsQ0FBQyxLQUNyQyxJQUFJLENBQUN4RCxLQUFLLEdBQUcsSUFBSSxDQUFDaFYsRUFBRSxDQUFDeVksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQzFDLElBQUksQ0FBQ3hELE9BQU8sR0FBRyxJQUFJLENBQUNqVixFQUFFLENBQUMwWSxrQkFBa0IsR0FBRyxDQUFDLENBQ3RELENBQUM7SUFDTDs7SUFFQTtJQUNBLElBQUluVixNQUFNLEVBQUV0RCxLQUFLLENBQUNpRixpQkFBaUIsQ0FBQyxDQUFDOztJQUVyQztJQUNBLElBQUlyQyxNQUFNLEVBQUVBLE1BQU0sQ0FBQ3FDLGlCQUFpQixDQUFDLENBQUM7O0lBRXRDO0lBQ0EsTUFBTStTLFVBQVUsR0FBRyxJQUFJLENBQUNILGFBQWEsQ0FBQztNQUFFN1gsS0FBSztNQUFFNEMsTUFBTTtNQUFFa1YsV0FBVztNQUFFQztJQUFLLENBQUMsQ0FBQztJQUUzRUMsVUFBVSxDQUFDbk4sT0FBTyxDQUFFeEUsSUFBSSxJQUFLO01BQ3pCQSxJQUFJLENBQUMrRSxJQUFJLENBQUM7UUFBRXhJO01BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNOO0FBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDcFdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU04VixVQUFVLEdBQUcsSUFBSUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUVwQyxTQUFTQyxVQUFVQSxDQUFDdk8sS0FBSyxFQUFFO0VBQ3ZCLE9BQU8sQ0FBQ0EsS0FBSyxHQUFJQSxLQUFLLEdBQUcsQ0FBRSxNQUFNLENBQUM7QUFDdEM7QUFFQSxJQUFJbEQsRUFBRSxHQUFHLENBQUM7QUFFSCxNQUFNdEcsT0FBTyxDQUFDO0VBQ2pCZixXQUFXQSxDQUNQQyxFQUFFLEVBQ0Y7SUFDSXVCLEtBQUs7SUFDTGlFLE1BQU0sR0FBR3hGLEVBQUUsQ0FBQzhZLFVBQVU7SUFDdEJsVSxJQUFJLEdBQUc1RSxFQUFFLENBQUMrWSxhQUFhO0lBQ3ZCQyxNQUFNLEdBQUdoWixFQUFFLENBQUNpWixJQUFJO0lBQ2hCQyxjQUFjLEdBQUdGLE1BQU07SUFDdkJHLEtBQUssR0FBR25aLEVBQUUsQ0FBQ29aLGFBQWE7SUFDeEJDLEtBQUssR0FBR3JaLEVBQUUsQ0FBQ29aLGFBQWE7SUFDeEJFLGVBQWUsR0FBRyxJQUFJO0lBQ3RCQyxTQUFTLEdBQUdELGVBQWUsR0FBR3RaLEVBQUUsQ0FBQ3daLHFCQUFxQixHQUFHeFosRUFBRSxDQUFDeVosTUFBTTtJQUNsRUMsU0FBUyxHQUFHMVosRUFBRSxDQUFDeVosTUFBTTtJQUNyQjVELGdCQUFnQixHQUFHLEtBQUs7SUFDeEJFLGVBQWUsR0FBRyxDQUFDO0lBQ25CRCxLQUFLLEdBQUd0USxNQUFNLElBQUl4RixFQUFFLENBQUM4WSxVQUFVLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFDOUNhLFVBQVUsR0FBRyxDQUFDO0lBQ2RDLEtBQUssR0FBRyxDQUFDO0lBQ1RoRixLQUFLO0lBQUU7SUFDUEMsTUFBTSxHQUFHRDtFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDUjtJQUNFLElBQUksQ0FBQzVVLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ3lILEVBQUUsR0FBR0wsRUFBRSxFQUFFO0lBRWQsSUFBSSxDQUFDN0YsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ2lFLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNaLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNvVSxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRSxjQUFjLEdBQUdBLGNBQWM7SUFDcEMsSUFBSSxDQUFDSyxTQUFTLEdBQUdBLFNBQVM7SUFDMUIsSUFBSSxDQUFDRyxTQUFTLEdBQUdBLFNBQVM7SUFDMUIsSUFBSSxDQUFDUCxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWU7SUFDdEMsSUFBSSxDQUFDekQsZ0JBQWdCLEdBQUdBLGdCQUFnQjtJQUN4QyxJQUFJLENBQUNFLGVBQWUsR0FBR0EsZUFBZTtJQUN0QyxJQUFJLENBQUNELEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUM2RCxVQUFVLEdBQUc1VSxJQUFJLENBQUM4RSxHQUFHLENBQUM4UCxVQUFVLEVBQUUsSUFBSSxDQUFDM1osRUFBRSxDQUFDeUMsUUFBUSxDQUFDNlQsVUFBVSxDQUFDSSxhQUFhLENBQUM7SUFDakYsSUFBSSxDQUFDa0QsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ2hGLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUN6VCxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsRUFBRSxDQUFDaUIsYUFBYSxDQUFDLENBQUM7SUFFdEMsSUFBSSxDQUFDNFksS0FBSyxHQUFHO01BQ1R0WSxLQUFLLEVBQUU7SUFDWCxDQUFDOztJQUVEO0lBQ0EsSUFBSSxDQUFDMEcsT0FBTyxHQUFHLElBQUksQ0FBQ2pJLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ3lGLEtBQUs7O0lBRXJDO0lBQ0EsSUFBSSxDQUFDQSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxDQUFDQSxLQUFLLENBQUNxUixTQUFTLEdBQUcsSUFBSSxDQUFDdlosRUFBRSxDQUFDd1oscUJBQXFCO0lBQ3BELElBQUksQ0FBQ3RSLEtBQUssQ0FBQ3dSLFNBQVMsR0FBRyxJQUFJLENBQUMxWixFQUFFLENBQUN5WixNQUFNO0lBQ3JDLElBQUksQ0FBQ3ZSLEtBQUssQ0FBQ2lSLEtBQUssR0FBRyxJQUFJLENBQUNuWixFQUFFLENBQUM4WixNQUFNO0lBQ2pDLElBQUksQ0FBQzVSLEtBQUssQ0FBQ21SLEtBQUssR0FBRyxJQUFJLENBQUNyWixFQUFFLENBQUM4WixNQUFNO0lBQ2pDLElBQUksQ0FBQzVSLEtBQUssQ0FBQ3lSLFVBQVUsR0FBRyxDQUFDO0VBQzdCO0VBRUFsQyxJQUFJQSxDQUFBLEVBQUc7SUFDSDtJQUNBLElBQUksSUFBSSxDQUFDeFAsT0FBTyxDQUFDNkssWUFBWSxDQUFDLElBQUksQ0FBQzdLLE9BQU8sQ0FBQ2lPLGlCQUFpQixDQUFDLEtBQUssSUFBSSxDQUFDek8sRUFBRSxFQUFFO0lBQzNFLElBQUksQ0FBQ3pILEVBQUUsQ0FBQytaLFdBQVcsQ0FBQyxJQUFJLENBQUN2VSxNQUFNLEVBQUUsSUFBSSxDQUFDcEUsT0FBTyxDQUFDO0lBQzlDLElBQUksQ0FBQzZHLE9BQU8sQ0FBQzZLLFlBQVksQ0FBQyxJQUFJLENBQUM3SyxPQUFPLENBQUNpTyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQ3pPLEVBQUU7RUFDdkU7RUFFQWxFLE1BQU1BLENBQUM2TyxXQUFXLEdBQUcsQ0FBQyxFQUFFO0lBQ3BCLE1BQU05SSxXQUFXLEdBQUcsRUFBRSxJQUFJLENBQUMvSCxLQUFLLEtBQUssSUFBSSxDQUFDc1ksS0FBSyxDQUFDdFksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDK0gsV0FBVyxDQUFDOztJQUUzRTtJQUNBLElBQUlBLFdBQVcsSUFBSSxJQUFJLENBQUNyQixPQUFPLENBQUM2SyxZQUFZLENBQUNWLFdBQVcsQ0FBQyxLQUFLLElBQUksQ0FBQzNLLEVBQUUsRUFBRTtNQUNuRTtNQUNBLElBQUksQ0FBQ3pILEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQ3lVLGFBQWEsQ0FBQzlFLFdBQVcsQ0FBQztNQUMzQyxJQUFJLENBQUNxRixJQUFJLENBQUMsQ0FBQztJQUNmO0lBRUEsSUFBSSxDQUFDbk8sV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLEtBQUs7SUFFeEIsSUFBSSxJQUFJLENBQUN3TSxLQUFLLEtBQUssSUFBSSxDQUFDN04sT0FBTyxDQUFDNk4sS0FBSyxFQUFFO01BQ25DLElBQUksQ0FBQzlWLEVBQUUsQ0FBQ2dhLFdBQVcsQ0FBQyxJQUFJLENBQUNoYSxFQUFFLENBQUNpYSxtQkFBbUIsRUFBRSxJQUFJLENBQUNuRSxLQUFLLENBQUM7TUFDNUQsSUFBSSxDQUFDN04sT0FBTyxDQUFDNk4sS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUNuQztJQUVBLElBQUksSUFBSSxDQUFDRCxnQkFBZ0IsS0FBSyxJQUFJLENBQUM1TixPQUFPLENBQUM0TixnQkFBZ0IsRUFBRTtNQUN6RCxJQUFJLENBQUM3VixFQUFFLENBQUNnYSxXQUFXLENBQUMsSUFBSSxDQUFDaGEsRUFBRSxDQUFDa2EsOEJBQThCLEVBQUUsSUFBSSxDQUFDckUsZ0JBQWdCLENBQUM7TUFDbEYsSUFBSSxDQUFDNU4sT0FBTyxDQUFDNE4sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0I7SUFDekQ7SUFFQSxJQUFJLElBQUksQ0FBQ0UsZUFBZSxLQUFLLElBQUksQ0FBQzlOLE9BQU8sQ0FBQzhOLGVBQWUsRUFBRTtNQUN2RCxJQUFJLENBQUMvVixFQUFFLENBQUNnYSxXQUFXLENBQUMsSUFBSSxDQUFDaGEsRUFBRSxDQUFDbWEsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDcEUsZUFBZSxDQUFDO01BQ25FLElBQUksQ0FBQzlOLE9BQU8sQ0FBQzhOLGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWU7SUFDdkQ7SUFFQSxJQUFJLElBQUksQ0FBQ3dELFNBQVMsS0FBSyxJQUFJLENBQUNyUixLQUFLLENBQUNxUixTQUFTLEVBQUU7TUFDekMsSUFBSSxDQUFDdlosRUFBRSxDQUFDb2EsYUFBYSxDQUFDLElBQUksQ0FBQzVVLE1BQU0sRUFBRSxJQUFJLENBQUN4RixFQUFFLENBQUNxYSxrQkFBa0IsRUFBRSxJQUFJLENBQUNkLFNBQVMsQ0FBQztNQUM5RSxJQUFJLENBQUNyUixLQUFLLENBQUNxUixTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTO0lBQ3pDO0lBRUEsSUFBSSxJQUFJLENBQUNHLFNBQVMsS0FBSyxJQUFJLENBQUN4UixLQUFLLENBQUN3UixTQUFTLEVBQUU7TUFDekMsSUFBSSxDQUFDMVosRUFBRSxDQUFDb2EsYUFBYSxDQUFDLElBQUksQ0FBQzVVLE1BQU0sRUFBRSxJQUFJLENBQUN4RixFQUFFLENBQUNzYSxrQkFBa0IsRUFBRSxJQUFJLENBQUNaLFNBQVMsQ0FBQztNQUM5RSxJQUFJLENBQUN4UixLQUFLLENBQUN3UixTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTO0lBQ3pDO0lBRUEsSUFBSSxJQUFJLENBQUNQLEtBQUssS0FBSyxJQUFJLENBQUNqUixLQUFLLENBQUNpUixLQUFLLEVBQUU7TUFDakMsSUFBSSxDQUFDblosRUFBRSxDQUFDb2EsYUFBYSxDQUFDLElBQUksQ0FBQzVVLE1BQU0sRUFBRSxJQUFJLENBQUN4RixFQUFFLENBQUN1YSxjQUFjLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDO01BQ3RFLElBQUksQ0FBQ2pSLEtBQUssQ0FBQ2lSLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7SUFDakM7SUFFQSxJQUFJLElBQUksQ0FBQ0UsS0FBSyxLQUFLLElBQUksQ0FBQ25SLEtBQUssQ0FBQ21SLEtBQUssRUFBRTtNQUNqQyxJQUFJLENBQUNyWixFQUFFLENBQUNvYSxhQUFhLENBQUMsSUFBSSxDQUFDNVUsTUFBTSxFQUFFLElBQUksQ0FBQ3hGLEVBQUUsQ0FBQ3dhLGNBQWMsRUFBRSxJQUFJLENBQUNuQixLQUFLLENBQUM7TUFDdEUsSUFBSSxDQUFDblIsS0FBSyxDQUFDbVIsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUNqQztJQUVBLElBQUksSUFBSSxDQUFDTSxVQUFVLElBQUksSUFBSSxDQUFDQSxVQUFVLEtBQUssSUFBSSxDQUFDelIsS0FBSyxDQUFDeVIsVUFBVSxFQUFFO01BQzlELElBQUksQ0FBQzNaLEVBQUUsQ0FBQ3lhLGFBQWEsQ0FDakIsSUFBSSxDQUFDalYsTUFBTSxFQUNYLElBQUksQ0FBQ3hGLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQzJULFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDc0UsMEJBQTBCLEVBQzFGLElBQUksQ0FBQ2YsVUFDVCxDQUFDO01BQ0QsSUFBSSxDQUFDelIsS0FBSyxDQUFDeVIsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVTtJQUMzQztJQUVBLElBQUksSUFBSSxDQUFDcFksS0FBSyxFQUFFO01BQ1osSUFBSSxJQUFJLENBQUNBLEtBQUssQ0FBQ3FULEtBQUssRUFBRTtRQUNsQixJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJLENBQUNyVCxLQUFLLENBQUNxVCxLQUFLO1FBQzdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ3RULEtBQUssQ0FBQ3NULE1BQU07TUFDbkM7TUFFQSxJQUFJLElBQUksQ0FBQ3JQLE1BQU0sS0FBSyxJQUFJLENBQUN4RixFQUFFLENBQUMyYSxnQkFBZ0IsRUFBRTtRQUMxQztRQUNBLEtBQUssSUFBSXpVLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1VBQ3hCLElBQUksQ0FBQ2xHLEVBQUUsQ0FBQzRhLFVBQVUsQ0FDZCxJQUFJLENBQUM1YSxFQUFFLENBQUM2YSwyQkFBMkIsR0FBRzNVLENBQUMsRUFDdkMsSUFBSSxDQUFDMFQsS0FBSyxFQUNWLElBQUksQ0FBQ1YsY0FBYyxFQUNuQixJQUFJLENBQUNGLE1BQU0sRUFDWCxJQUFJLENBQUNwVSxJQUFJLEVBQ1QsSUFBSSxDQUFDckQsS0FBSyxDQUFDMkUsQ0FBQyxDQUNoQixDQUFDO1FBQ0w7TUFDSixDQUFDLE1BQU0sSUFBSTRVLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ3haLEtBQUssQ0FBQyxFQUFFO1FBQ3ZDO1FBQ0EsSUFBSSxDQUFDdkIsRUFBRSxDQUFDNGEsVUFBVSxDQUFDLElBQUksQ0FBQ3BWLE1BQU0sRUFBRSxJQUFJLENBQUNvVSxLQUFLLEVBQUUsSUFBSSxDQUFDVixjQUFjLEVBQUUsSUFBSSxDQUFDdEUsS0FBSyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNtRSxNQUFNLEVBQUUsSUFBSSxDQUFDcFUsSUFBSSxFQUFFLElBQUksQ0FBQ3JELEtBQUssQ0FBQztNQUNwSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNBLEtBQUssQ0FBQ3laLG1CQUFtQixFQUFFO1FBQ3ZDO1FBQ0EsS0FBSyxJQUFJcEIsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHLElBQUksQ0FBQ3JZLEtBQUssQ0FBQzRILE1BQU0sRUFBRXlRLEtBQUssRUFBRSxFQUFFO1VBQ3BELElBQUksQ0FBQzVaLEVBQUUsQ0FBQ2liLG9CQUFvQixDQUN4QixJQUFJLENBQUN6VixNQUFNLEVBQ1hvVSxLQUFLLEVBQ0wsSUFBSSxDQUFDVixjQUFjLEVBQ25CLElBQUksQ0FBQzNYLEtBQUssQ0FBQ3FZLEtBQUssQ0FBQyxDQUFDaEYsS0FBSyxFQUN2QixJQUFJLENBQUNyVCxLQUFLLENBQUNxWSxLQUFLLENBQUMsQ0FBQy9FLE1BQU0sRUFDeEIsQ0FBQyxFQUNELElBQUksQ0FBQ3RULEtBQUssQ0FBQ3FZLEtBQUssQ0FBQyxDQUFDclIsSUFDdEIsQ0FBQztRQUNMO01BQ0osQ0FBQyxNQUFNO1FBQ0g7UUFDQSxJQUFJLENBQUN2SSxFQUFFLENBQUM0YSxVQUFVLENBQUMsSUFBSSxDQUFDcFYsTUFBTSxFQUFFLElBQUksQ0FBQ29VLEtBQUssRUFBRSxJQUFJLENBQUNWLGNBQWMsRUFBRSxJQUFJLENBQUNGLE1BQU0sRUFBRSxJQUFJLENBQUNwVSxJQUFJLEVBQUUsSUFBSSxDQUFDckQsS0FBSyxDQUFDO01BQ3hHO01BRUEsSUFBSSxJQUFJLENBQUMrWCxlQUFlLEVBQUU7UUFDdEI7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDdFosRUFBRSxDQUFDeUMsUUFBUSxDQUFDZ1QsUUFBUSxLQUFLLENBQUNvRCxVQUFVLENBQUMsSUFBSSxDQUFDdFgsS0FBSyxDQUFDcVQsS0FBSyxDQUFDLElBQUksQ0FBQ2lFLFVBQVUsQ0FBQyxJQUFJLENBQUN0WCxLQUFLLENBQUNzVCxNQUFNLENBQUMsQ0FBQyxFQUFFO1VBQ2pHLElBQUksQ0FBQ3lFLGVBQWUsR0FBRyxLQUFLO1VBQzVCLElBQUksQ0FBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUksQ0FBQ3JaLEVBQUUsQ0FBQ29aLGFBQWE7VUFDL0MsSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDdlosRUFBRSxDQUFDeVosTUFBTTtRQUNuQyxDQUFDLE1BQU07VUFDSCxJQUFJLENBQUN6WixFQUFFLENBQUNrYixjQUFjLENBQUMsSUFBSSxDQUFDMVYsTUFBTSxDQUFDO1FBQ3ZDO01BQ0o7O01BRUE7TUFDQSxJQUFJLENBQUMyVixRQUFRLElBQUksSUFBSSxDQUFDQSxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDLE1BQU07TUFDSCxJQUFJLElBQUksQ0FBQzNWLE1BQU0sS0FBSyxJQUFJLENBQUN4RixFQUFFLENBQUMyYSxnQkFBZ0IsRUFBRTtRQUMxQztRQUNBLEtBQUssSUFBSXpVLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1VBQ3hCLElBQUksQ0FBQ2xHLEVBQUUsQ0FBQzRhLFVBQVUsQ0FDZCxJQUFJLENBQUM1YSxFQUFFLENBQUM2YSwyQkFBMkIsR0FBRzNVLENBQUMsRUFDdkMsQ0FBQyxFQUNELElBQUksQ0FBQ2xHLEVBQUUsQ0FBQ2laLElBQUksRUFDWixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUNqWixFQUFFLENBQUNpWixJQUFJLEVBQ1osSUFBSSxDQUFDalosRUFBRSxDQUFDK1ksYUFBYSxFQUNyQkosVUFDSixDQUFDO1FBQ0w7TUFDSixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMvRCxLQUFLLEVBQUU7UUFDbkI7UUFDQSxJQUFJLENBQUM1VSxFQUFFLENBQUM0YSxVQUFVLENBQUMsSUFBSSxDQUFDcFYsTUFBTSxFQUFFLElBQUksQ0FBQ29VLEtBQUssRUFBRSxJQUFJLENBQUNWLGNBQWMsRUFBRSxJQUFJLENBQUN0RSxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ21FLE1BQU0sRUFBRSxJQUFJLENBQUNwVSxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQzlILENBQUMsTUFBTTtRQUNIO1FBQ0EsSUFBSSxDQUFDNUUsRUFBRSxDQUFDNGEsVUFBVSxDQUFDLElBQUksQ0FBQ3BWLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDeEYsRUFBRSxDQUFDaVosSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ2paLEVBQUUsQ0FBQ2laLElBQUksRUFBRSxJQUFJLENBQUNqWixFQUFFLENBQUMrWSxhQUFhLEVBQUVKLFVBQVUsQ0FBQztNQUM5RztJQUNKO0lBQ0EsSUFBSSxDQUFDa0IsS0FBSyxDQUFDdFksS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztFQUNqQztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TnVDO0FBQ0E7QUFDQTtBQUNFO0FBRWxDLE1BQU0zQixTQUFTLENBQUM7RUFDbkJHLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ3ViLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDcEQsT0FBTyxHQUFHLElBQUk7SUFFbkIsSUFBSSxDQUFDcUQsTUFBTSxHQUFHLElBQUkvWCwrQ0FBSSxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDMkIsV0FBVyxHQUFHLElBQUkzQiwrQ0FBSSxDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDZ1ksZ0JBQWdCLEdBQUcsSUFBSTtJQUM1QixJQUFJLENBQUNDLHNCQUFzQixHQUFHLEtBQUs7SUFFbkMsSUFBSSxDQUFDNVksUUFBUSxHQUFHLElBQUlZLCtDQUFJLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUNpWSxVQUFVLEdBQUcsSUFBSVAsK0NBQUksQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQ3BQLEtBQUssR0FBRyxJQUFJdEksK0NBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDa1ksUUFBUSxHQUFHLElBQUlQLGlEQUFLLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUNRLEVBQUUsR0FBRyxJQUFJblksK0NBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQixJQUFJLENBQUNrWSxRQUFRLENBQUNFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ0gsVUFBVSxDQUFDSSxTQUFTLENBQUMsSUFBSSxDQUFDSCxRQUFRLENBQUM7SUFDdkUsSUFBSSxDQUFDRCxVQUFVLENBQUNHLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ0YsUUFBUSxDQUFDSSxjQUFjLENBQUMsSUFBSSxDQUFDTCxVQUFVLENBQUM7RUFDbEY7RUFFQW5iLFNBQVNBLENBQUM4YSxNQUFNLEVBQUVXLFlBQVksR0FBRyxJQUFJLEVBQUU7SUFDbkMsSUFBSSxJQUFJLENBQUNYLE1BQU0sSUFBSUEsTUFBTSxLQUFLLElBQUksQ0FBQ0EsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTSxDQUFDWSxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUMvRSxJQUFJLENBQUNaLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJVyxZQUFZLElBQUlYLE1BQU0sRUFBRUEsTUFBTSxDQUFDYSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUM1RDtFQUVBQSxRQUFRQSxDQUFDQyxLQUFLLEVBQUVDLFdBQVcsR0FBRyxJQUFJLEVBQUU7SUFDaEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDZCxRQUFRLENBQUNlLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDYixRQUFRLENBQUNoTyxJQUFJLENBQUM2TyxLQUFLLENBQUM7SUFDN0QsSUFBSUMsV0FBVyxFQUFFRCxLQUFLLENBQUM1YixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUNqRDtFQUVBMGIsV0FBV0EsQ0FBQ0UsS0FBSyxFQUFFQyxXQUFXLEdBQUcsSUFBSSxFQUFFO0lBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDZCxRQUFRLENBQUNlLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDYixRQUFRLENBQUNnQixNQUFNLENBQUMsSUFBSSxDQUFDaEIsUUFBUSxDQUFDZSxPQUFPLENBQUNGLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRixJQUFJQyxXQUFXLEVBQUVELEtBQUssQ0FBQzViLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0VBQ2pEO0VBRUEwRSxpQkFBaUJBLENBQUNzWCxLQUFLLEVBQUU7SUFDckIsSUFBSSxJQUFJLENBQUNmLGdCQUFnQixFQUFFLElBQUksQ0FBQ2dCLFlBQVksQ0FBQyxDQUFDO0lBQzlDLElBQUksSUFBSSxDQUFDZixzQkFBc0IsSUFBSWMsS0FBSyxFQUFFO01BQ3RDLElBQUksSUFBSSxDQUFDbEIsTUFBTSxLQUFLLElBQUksRUFBRSxJQUFJLENBQUNsVyxXQUFXLENBQUN5QixJQUFJLENBQUMsSUFBSSxDQUFDMlUsTUFBTSxDQUFDLENBQUMsS0FDeEQsSUFBSSxDQUFDcFcsV0FBVyxDQUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDZ1csTUFBTSxDQUFDbFcsV0FBVyxFQUFFLElBQUksQ0FBQ29XLE1BQU0sQ0FBQztNQUNwRSxJQUFJLENBQUNFLHNCQUFzQixHQUFHLEtBQUs7TUFDbkNjLEtBQUssR0FBRyxJQUFJO0lBQ2hCO0lBRUEsS0FBSyxJQUFJdFcsQ0FBQyxHQUFHLENBQUMsRUFBRStGLENBQUMsR0FBRyxJQUFJLENBQUNzUCxRQUFRLENBQUNwUyxNQUFNLEVBQUVqRCxDQUFDLEdBQUcrRixDQUFDLEVBQUUvRixDQUFDLEVBQUUsRUFBRTtNQUNsRCxJQUFJLENBQUNxVixRQUFRLENBQUNyVixDQUFDLENBQUMsQ0FBQ2hCLGlCQUFpQixDQUFDc1gsS0FBSyxDQUFDO0lBQzdDO0VBQ0o7RUFFQUMsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDakIsTUFBTSxDQUFDa0IsT0FBTyxDQUFDLElBQUksQ0FBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQzdZLFFBQVEsRUFBRSxJQUFJLENBQUNrSixLQUFLLENBQUM7SUFDL0QsSUFBSSxDQUFDMFAsc0JBQXNCLEdBQUcsSUFBSTtFQUN0QztFQUVBeEQsUUFBUUEsQ0FBQ3lFLFFBQVEsRUFBRTtJQUNmO0lBQ0EsSUFBSUEsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3BCLEtBQUssSUFBSXpXLENBQUMsR0FBRyxDQUFDLEVBQUUrRixDQUFDLEdBQUcsSUFBSSxDQUFDc1AsUUFBUSxDQUFDcFMsTUFBTSxFQUFFakQsQ0FBQyxHQUFHK0YsQ0FBQyxFQUFFL0YsQ0FBQyxFQUFFLEVBQUU7TUFDbEQsSUFBSSxDQUFDcVYsUUFBUSxDQUFDclYsQ0FBQyxDQUFDLENBQUNnUyxRQUFRLENBQUN5RSxRQUFRLENBQUM7SUFDdkM7RUFDSjtFQUVBQyxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUNwQixNQUFNLENBQUNuVyxjQUFjLENBQUMsSUFBSSxDQUFDdkMsUUFBUSxDQUFDO0lBQ3pDLElBQUksQ0FBQzBZLE1BQU0sQ0FBQ3FCLFdBQVcsQ0FBQyxJQUFJLENBQUNsQixVQUFVLENBQUM7SUFDeEMsSUFBSSxDQUFDSCxNQUFNLENBQUNzQixVQUFVLENBQUMsSUFBSSxDQUFDOVEsS0FBSyxDQUFDO0lBQ2xDLElBQUksQ0FBQzRQLFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLElBQUksQ0FBQ0wsVUFBVSxDQUFDO0VBQ2pEO0VBRUFwVyxNQUFNQSxDQUFDQyxNQUFNLEVBQUV1WCxNQUFNLEdBQUcsS0FBSyxFQUFFO0lBQzNCLElBQUlBLE1BQU0sRUFBRSxJQUFJLENBQUN2QixNQUFNLENBQUNqVyxNQUFNLENBQUMsSUFBSSxDQUFDekMsUUFBUSxFQUFFMEMsTUFBTSxFQUFFLElBQUksQ0FBQ3FXLEVBQUUsQ0FBQyxDQUFDLEtBQzFELElBQUksQ0FBQ0wsTUFBTSxDQUFDalcsTUFBTSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQytZLEVBQUUsQ0FBQztJQUN2RCxJQUFJLENBQUNMLE1BQU0sQ0FBQ3FCLFdBQVcsQ0FBQyxJQUFJLENBQUNsQixVQUFVLENBQUM7SUFDeEMsSUFBSSxDQUFDQyxRQUFRLENBQUNJLGNBQWMsQ0FBQyxJQUFJLENBQUNMLFVBQVUsQ0FBQztFQUNqRDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUNsRitDO0FBRXhDLE1BQU1oYyxLQUFLLFNBQVM0SCx1REFBUSxDQUFDO0VBQ2hDeEgsV0FBV0EsQ0FBQ0MsRUFBRSxFQUFFO0lBQUU0VSxLQUFLLEdBQUcsQ0FBQztJQUFFQyxNQUFNLEdBQUcsQ0FBQztJQUFFbUksYUFBYSxHQUFHLENBQUM7SUFBRUMsY0FBYyxHQUFHLENBQUM7SUFBRTFXLFVBQVUsR0FBRyxDQUFDO0VBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ3BHLE1BQU0yVyxLQUFLLEdBQUdGLGFBQWE7SUFDM0IsTUFBTUcsS0FBSyxHQUFHRixjQUFjOztJQUU1QjtJQUNBLE1BQU1HLEdBQUcsR0FBRyxDQUFDRixLQUFLLEdBQUcsQ0FBQyxLQUFLQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE1BQU1FLFVBQVUsR0FBR0gsS0FBSyxHQUFHQyxLQUFLLEdBQUcsQ0FBQzs7SUFFcEM7SUFDQSxNQUFNcmEsUUFBUSxHQUFHLElBQUkwRixZQUFZLENBQUM0VSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE1BQU1wVyxNQUFNLEdBQUcsSUFBSXdCLFlBQVksQ0FBQzRVLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDeEMsTUFBTUUsRUFBRSxHQUFHLElBQUk5VSxZQUFZLENBQUM0VSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU16YyxLQUFLLEdBQUcwYyxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUlFLFdBQVcsQ0FBQ0YsVUFBVSxDQUFDLEdBQUcsSUFBSTNVLFdBQVcsQ0FBQzJVLFVBQVUsQ0FBQztJQUU1RjFkLEtBQUssQ0FBQzZkLFVBQVUsQ0FBQzFhLFFBQVEsRUFBRWtFLE1BQU0sRUFBRXNXLEVBQUUsRUFBRTNjLEtBQUssRUFBRWlVLEtBQUssRUFBRUMsTUFBTSxFQUFFLENBQUMsRUFBRXFJLEtBQUssRUFBRUMsS0FBSyxDQUFDO0lBRTdFN1ksTUFBTSxDQUFDQyxNQUFNLENBQUNnQyxVQUFVLEVBQUU7TUFDdEJ6RCxRQUFRLEVBQUU7UUFBRXdGLElBQUksRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRXpGO01BQVMsQ0FBQztNQUNyQ2tFLE1BQU0sRUFBRTtRQUFFc0IsSUFBSSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFdkI7TUFBTyxDQUFDO01BQ2pDc1csRUFBRSxFQUFFO1FBQUVoVixJQUFJLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUrVTtNQUFHLENBQUM7TUFDekIzYyxLQUFLLEVBQUU7UUFBRTRILElBQUksRUFBRTVIO01BQU07SUFDekIsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDWCxFQUFFLEVBQUV1RyxVQUFVLENBQUM7RUFDekI7RUFFQSxPQUFPaVgsVUFBVUEsQ0FBQzFhLFFBQVEsRUFBRWtFLE1BQU0sRUFBRXNXLEVBQUUsRUFBRTNjLEtBQUssRUFBRWlVLEtBQUssRUFBRUMsTUFBTSxFQUFFRyxLQUFLLEVBQUVrSSxLQUFLLEVBQUVDLEtBQUssRUFBRU0sQ0FBQyxHQUFHLENBQUMsRUFBRS9YLENBQUMsR0FBRyxDQUFDLEVBQUVnWSxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUxWCxDQUFDLEdBQUcsQ0FBQyxFQUFFMlgsRUFBRSxHQUFHLENBQUMsRUFBRTtJQUN4SSxNQUFNQyxFQUFFLEdBQUc1WCxDQUFDO0lBQ1osTUFBTTZYLElBQUksR0FBR25KLEtBQUssR0FBR3NJLEtBQUs7SUFDMUIsTUFBTWMsSUFBSSxHQUFHbkosTUFBTSxHQUFHc0ksS0FBSztJQUUzQixLQUFLLElBQUljLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsSUFBSWQsS0FBSyxFQUFFYyxFQUFFLEVBQUUsRUFBRTtNQUNoQyxJQUFJOVIsQ0FBQyxHQUFHOFIsRUFBRSxHQUFHRCxJQUFJLEdBQUduSixNQUFNLEdBQUcsQ0FBQztNQUM5QixLQUFLLElBQUlxSixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLElBQUloQixLQUFLLEVBQUVnQixFQUFFLEVBQUUsRUFBRWhZLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlnRyxDQUFDLEdBQUdnUyxFQUFFLEdBQUdILElBQUksR0FBR25KLEtBQUssR0FBRyxDQUFDO1FBRTdCOVIsUUFBUSxDQUFDb0QsQ0FBQyxHQUFHLENBQUMsR0FBR3VYLENBQUMsQ0FBQyxHQUFHdlIsQ0FBQyxHQUFHeVIsSUFBSTtRQUM5QjdhLFFBQVEsQ0FBQ29ELENBQUMsR0FBRyxDQUFDLEdBQUdSLENBQUMsQ0FBQyxHQUFHeUcsQ0FBQyxHQUFHeVIsSUFBSTtRQUM5QjlhLFFBQVEsQ0FBQ29ELENBQUMsR0FBRyxDQUFDLEdBQUd3WCxDQUFDLENBQUMsR0FBRzFJLEtBQUssR0FBRyxDQUFDO1FBRS9CaE8sTUFBTSxDQUFDZCxDQUFDLEdBQUcsQ0FBQyxHQUFHdVgsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyQnpXLE1BQU0sQ0FBQ2QsQ0FBQyxHQUFHLENBQUMsR0FBR1IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyQnNCLE1BQU0sQ0FBQ2QsQ0FBQyxHQUFHLENBQUMsR0FBR3dYLENBQUMsQ0FBQyxHQUFHMUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZDc0ksRUFBRSxDQUFDcFgsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHZ1ksRUFBRSxHQUFHaEIsS0FBSztRQUN0QkksRUFBRSxDQUFDcFgsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcrWCxFQUFFLEdBQUdkLEtBQUs7UUFFOUIsSUFBSWMsRUFBRSxLQUFLZCxLQUFLLElBQUllLEVBQUUsS0FBS2hCLEtBQUssRUFBRTtRQUNsQyxJQUFJN0ksQ0FBQyxHQUFHeUosRUFBRSxHQUFHSSxFQUFFLEdBQUdELEVBQUUsSUFBSWYsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJMUksQ0FBQyxHQUFHc0osRUFBRSxHQUFHSSxFQUFFLEdBQUcsQ0FBQ0QsRUFBRSxHQUFHLENBQUMsS0FBS2YsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJaUIsQ0FBQyxHQUFHTCxFQUFFLEdBQUdJLEVBQUUsR0FBRyxDQUFDRCxFQUFFLEdBQUcsQ0FBQyxLQUFLZixLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxJQUFJa0IsQ0FBQyxHQUFHTixFQUFFLEdBQUdJLEVBQUUsR0FBR0QsRUFBRSxJQUFJZixLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUV0Q3ZjLEtBQUssQ0FBQ2tkLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBR3hKLENBQUM7UUFDakIxVCxLQUFLLENBQUNrZCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHckosQ0FBQztRQUNyQjdULEtBQUssQ0FBQ2tkLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdPLENBQUM7UUFDckJ6ZCxLQUFLLENBQUNrZCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHckosQ0FBQztRQUNyQjdULEtBQUssQ0FBQ2tkLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdNLENBQUM7UUFDckJ4ZCxLQUFLLENBQUNrZCxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHTyxDQUFDO1FBQ3JCUCxFQUFFLEVBQUU7TUFDUjtJQUNKO0VBQ0o7QUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFc0Q7QUFDckI7QUFFakMsTUFBTVMsT0FBTyxHQUFHLGVBQWdCLElBQUk3YSwwQ0FBSSxDQUFDLENBQUM7QUFFbkMsTUFBTTRYLEtBQUssU0FBUzNJLEtBQUssQ0FBQztFQUM3QjNTLFdBQVdBLENBQUNtTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdELENBQUMsRUFBRW5KLENBQUMsR0FBR21KLENBQUMsRUFBRXFTLEtBQUssR0FBRyxLQUFLLEVBQUU7SUFDNUMsS0FBSyxDQUFDclMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVwSixDQUFDLENBQUM7SUFDZCxJQUFJLENBQUN3YixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDekMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNmO0VBRUEsSUFBSTVQLENBQUNBLENBQUEsRUFBRztJQUNKLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNsQjtFQUVBLElBQUlDLENBQUNBLENBQUEsRUFBRztJQUNKLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNsQjtFQUVBLElBQUlwSixDQUFDQSxDQUFBLEVBQUc7SUFDSixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDbEI7RUFFQSxJQUFJbUosQ0FBQ0EsQ0FBQ3hHLENBQUMsRUFBRTtJQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQztJQUNYLElBQUksQ0FBQ29XLFFBQVEsQ0FBQyxDQUFDO0VBQ25CO0VBRUEsSUFBSTNQLENBQUNBLENBQUN6RyxDQUFDLEVBQUU7SUFDTCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUM7SUFDWCxJQUFJLENBQUNvVyxRQUFRLENBQUMsQ0FBQztFQUNuQjtFQUVBLElBQUkvWSxDQUFDQSxDQUFDMkMsQ0FBQyxFQUFFO0lBQ0wsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDO0lBQ1gsSUFBSSxDQUFDb1csUUFBUSxDQUFDLENBQUM7RUFDbkI7RUFFQTlWLEdBQUdBLENBQUNrRyxDQUFDLEVBQUVDLENBQUMsR0FBR0QsQ0FBQyxFQUFFbkosQ0FBQyxHQUFHbUosQ0FBQyxFQUFFO0lBQ2pCLElBQUlBLENBQUMsQ0FBQy9DLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQ3RDLElBQUksQ0FBQ3FGLENBQUMsQ0FBQztJQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUM7SUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUM7SUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdwSixDQUFDO0lBQ1gsSUFBSSxDQUFDK1ksUUFBUSxDQUFDLENBQUM7SUFDZixPQUFPLElBQUk7RUFDZjtFQUVBalYsSUFBSUEsQ0FBQ25CLENBQUMsRUFBRTtJQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQ29XLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJO0VBQ2Y7RUFFQTBDLE9BQU9BLENBQUNELEtBQUssRUFBRTtJQUNYLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ3pDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJO0VBQ2Y7RUFFQTJDLGtCQUFrQkEsQ0FBQzFZLENBQUMsRUFBRXdZLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUssRUFBRTtJQUN0Q0YsdUVBQTRCLENBQUMsSUFBSSxFQUFFdFksQ0FBQyxFQUFFd1ksS0FBSyxDQUFDO0lBQzVDLElBQUksQ0FBQ3pDLFFBQVEsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJO0VBQ2Y7RUFFQUUsY0FBY0EsQ0FBQzBDLENBQUMsRUFBRUgsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSyxFQUFFO0lBQ2xDRCxPQUFPLENBQUN0QyxjQUFjLENBQUMwQyxDQUFDLENBQUM7SUFDekIsT0FBTyxJQUFJLENBQUNELGtCQUFrQixDQUFDSCxPQUFPLEVBQUVDLEtBQUssQ0FBQztFQUNsRDtFQUVBL1IsU0FBU0EsQ0FBQzZILENBQUMsRUFBRXNLLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUd0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sSUFBSTtFQUNmO0VBRUFDLE9BQU9BLENBQUN2SyxDQUFDLEdBQUcsRUFBRSxFQUFFc0ssQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNuQnRLLENBQUMsQ0FBQ3NLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDZHRLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsT0FBT3RLLENBQUM7RUFDWjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUN2Rm9EO0FBRTdDLE1BQU12SCxJQUFJLFNBQVM0RixLQUFLLENBQUM7RUFDNUIzUyxXQUFXQSxDQUFDK2UsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsR0FBRyxHQUFHLENBQUMsRUFBRTtJQUN6RixLQUFLLENBQUNSLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDbEQsT0FBTyxJQUFJO0VBQ2Y7RUFFQXRaLEdBQUdBLENBQUM4WSxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLElBQUlSLEdBQUcsQ0FBQzNWLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQ3RDLElBQUksQ0FBQ2lZLEdBQUcsQ0FBQztJQUNyQ0QsdURBQVksQ0FBQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDL0QsT0FBTyxJQUFJO0VBQ2Y7RUFFQUMsU0FBU0EsQ0FBQzdaLENBQUMsRUFBRUssQ0FBQyxHQUFHLElBQUksRUFBRTtJQUNuQjhZLDZEQUFrQixDQUFDLElBQUksRUFBRTlZLENBQUMsRUFBRUwsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sSUFBSTtFQUNmO0VBRUE4WixNQUFNQSxDQUFDOVosQ0FBQyxFQUFFSyxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQ2hCOFksMERBQWUsQ0FBQyxJQUFJLEVBQUU5WSxDQUFDLEVBQUVMLENBQUMsQ0FBQztJQUMzQixPQUFPLElBQUk7RUFDZjtFQUVBc0csS0FBS0EsQ0FBQ3RHLENBQUMsRUFBRUssQ0FBQyxHQUFHLElBQUksRUFBRTtJQUNmOFkseURBQWMsQ0FBQyxJQUFJLEVBQUU5WSxDQUFDLEVBQUVMLENBQUMsQ0FBQztJQUMxQixPQUFPLElBQUk7RUFDZjtFQUVBSixRQUFRQSxDQUFDbWEsRUFBRSxFQUFFQyxFQUFFLEVBQUU7SUFDYixJQUFJQSxFQUFFLEVBQUU7TUFDSmIsNERBQWlCLENBQUMsSUFBSSxFQUFFWSxFQUFFLEVBQUVDLEVBQUUsQ0FBQztJQUNuQyxDQUFDLE1BQU07TUFDSGIsNERBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRVksRUFBRSxDQUFDO0lBQ3JDO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7RUFFQUUsUUFBUUEsQ0FBQSxFQUFHO0lBQ1BkLDREQUFpQixDQUFDLElBQUksQ0FBQztJQUN2QixPQUFPLElBQUk7RUFDZjtFQUVBaFksSUFBSUEsQ0FBQ2QsQ0FBQyxFQUFFO0lBQ0o4WSx3REFBYSxDQUFDLElBQUksRUFBRTlZLENBQUMsQ0FBQztJQUN0QixPQUFPLElBQUk7RUFDZjtFQUVBNlosV0FBV0EsQ0FBQzdaLENBQUMsRUFBRTtJQUNYOFksNERBQWlCLENBQUMsSUFBSSxFQUFFOVksQ0FBQyxDQUFDO0lBQzFCLE9BQU8sSUFBSTtFQUNmO0VBRUFpVyxjQUFjQSxDQUFDMEMsQ0FBQyxFQUFFO0lBQ2RHLDREQUFpQixDQUFDLElBQUksRUFBRUgsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sSUFBSTtFQUNmO0VBRUFxQixTQUFTQSxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFO0lBQzNCLElBQUksQ0FBQ2xhLEdBQUcsQ0FBQ2dhLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsT0FBTyxJQUFJO0VBQ2Y7RUFFQS9hLE9BQU9BLENBQUNZLENBQUMsR0FBRyxJQUFJLEVBQUU7SUFDZDhZLDBEQUFlLENBQUMsSUFBSSxFQUFFOVksQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNmO0VBRUE0SCxlQUFlQSxDQUFDNUgsQ0FBQyxFQUFFO0lBQ2Y4WSxrRUFBdUIsQ0FBQyxJQUFJLEVBQUU5WSxDQUFDLENBQUM7SUFDaEMsT0FBTyxJQUFJO0VBQ2Y7QUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FDeEVvRDtBQUU3QyxNQUFNdEMsSUFBSSxTQUFTaVAsS0FBSyxDQUFDO0VBQzVCM1MsV0FBV0EsQ0FDUCtlLEdBQUcsR0FBRyxDQUFDLEVBQ1BDLEdBQUcsR0FBRyxDQUFDLEVBQ1BDLEdBQUcsR0FBRyxDQUFDLEVBQ1BxQixHQUFHLEdBQUcsQ0FBQyxFQUNQcEIsR0FBRyxHQUFHLENBQUMsRUFDUEMsR0FBRyxHQUFHLENBQUMsRUFDUEMsR0FBRyxHQUFHLENBQUMsRUFDUG1CLEdBQUcsR0FBRyxDQUFDLEVBQ1BsQixHQUFHLEdBQUcsQ0FBQyxFQUNQQyxHQUFHLEdBQUcsQ0FBQyxFQUNQQyxHQUFHLEdBQUcsQ0FBQyxFQUNQaUIsR0FBRyxHQUFHLENBQUMsRUFDUEMsR0FBRyxHQUFHLENBQUMsRUFDUEMsR0FBRyxHQUFHLENBQUMsRUFDUEMsR0FBRyxHQUFHLENBQUMsRUFDUEMsR0FBRyxHQUFHLENBQUMsRUFDVDtJQUNFLEtBQUssQ0FBQzdCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVxQixHQUFHLEVBQUVwQixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFbUIsR0FBRyxFQUFFbEIsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRWlCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ3JGLE9BQU8sSUFBSTtFQUNmO0VBRUEsSUFBSXpVLENBQUNBLENBQUEsRUFBRztJQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUNuQjtFQUVBLElBQUlDLENBQUNBLENBQUEsRUFBRztJQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUNuQjtFQUVBLElBQUlwSixDQUFDQSxDQUFBLEVBQUc7SUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDbkI7RUFFQSxJQUFJMmEsQ0FBQ0EsQ0FBQSxFQUFHO0lBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0VBQ25CO0VBRUEsSUFBSXhSLENBQUNBLENBQUN4RyxDQUFDLEVBQUU7SUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUM7RUFDaEI7RUFFQSxJQUFJeUcsQ0FBQ0EsQ0FBQ3pHLENBQUMsRUFBRTtJQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQztFQUNoQjtFQUVBLElBQUkzQyxDQUFDQSxDQUFDMkMsQ0FBQyxFQUFFO0lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDO0VBQ2hCO0VBRUEsSUFBSWdZLENBQUNBLENBQUNoWSxDQUFDLEVBQUU7SUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUM7RUFDaEI7RUFFQU0sR0FBR0EsQ0FBQzhZLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVxQixHQUFHLEVBQUVwQixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFbUIsR0FBRyxFQUFFbEIsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRWlCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hGLElBQUk3QixHQUFHLENBQUMzVixNQUFNLEVBQUUsT0FBTyxJQUFJLENBQUN0QyxJQUFJLENBQUNpWSxHQUFHLENBQUM7SUFDckNzQix1REFBWSxDQUFDLElBQUksRUFBRXRCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVxQixHQUFHLEVBQUVwQixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFbUIsR0FBRyxFQUFFbEIsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRWlCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ2xHLE9BQU8sSUFBSTtFQUNmO0VBRUFwQixTQUFTQSxDQUFDN1osQ0FBQyxFQUFFSyxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQ25CcWEsNkRBQWtCLENBQUMsSUFBSSxFQUFFcmEsQ0FBQyxFQUFFTCxDQUFDLENBQUM7SUFDOUIsT0FBTyxJQUFJO0VBQ2Y7RUFFQThaLE1BQU1BLENBQUM5WixDQUFDLEVBQUVrYixJQUFJLEVBQUU3YSxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQ3RCcWEsMERBQWUsQ0FBQyxJQUFJLEVBQUVyYSxDQUFDLEVBQUVMLENBQUMsRUFBRWtiLElBQUksQ0FBQztJQUNqQyxPQUFPLElBQUk7RUFDZjtFQUVBNVUsS0FBS0EsQ0FBQ3RHLENBQUMsRUFBRUssQ0FBQyxHQUFHLElBQUksRUFBRTtJQUNmcWEseURBQWMsQ0FBQyxJQUFJLEVBQUVyYSxDQUFDLEVBQUUsT0FBT0wsQ0FBQyxLQUFLLFFBQVEsR0FBRyxDQUFDQSxDQUFDLEVBQUVBLENBQUMsRUFBRUEsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQztJQUM5RCxPQUFPLElBQUk7RUFDZjtFQUVBMkcsR0FBR0EsQ0FBQ29ULEVBQUUsRUFBRUMsRUFBRSxFQUFFO0lBQ1IsSUFBSUEsRUFBRSxFQUFFVSx1REFBWSxDQUFDLElBQUksRUFBRVgsRUFBRSxFQUFFQyxFQUFFLENBQUMsQ0FBQyxLQUM5QlUsdURBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFWCxFQUFFLENBQUM7SUFDakMsT0FBTyxJQUFJO0VBQ2Y7RUFFQXJULEdBQUdBLENBQUNxVCxFQUFFLEVBQUVDLEVBQUUsRUFBRTtJQUNSLElBQUlBLEVBQUUsRUFBRVUsNERBQWlCLENBQUMsSUFBSSxFQUFFWCxFQUFFLEVBQUVDLEVBQUUsQ0FBQyxDQUFDLEtBQ25DVSw0REFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFWCxFQUFFLENBQUM7SUFDdEMsT0FBTyxJQUFJO0VBQ2Y7RUFFQW5hLFFBQVFBLENBQUNtYSxFQUFFLEVBQUVDLEVBQUUsRUFBRTtJQUNiLElBQUksQ0FBQ0QsRUFBRSxDQUFDdFcsTUFBTSxFQUFFO01BQ1ppWCxrRUFBdUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFWCxFQUFFLENBQUM7SUFDM0MsQ0FBQyxNQUFNLElBQUlDLEVBQUUsRUFBRTtNQUNYVSw0REFBaUIsQ0FBQyxJQUFJLEVBQUVYLEVBQUUsRUFBRUMsRUFBRSxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNIVSw0REFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFWCxFQUFFLENBQUM7SUFDckM7SUFDQSxPQUFPLElBQUk7RUFDZjtFQUVBRSxRQUFRQSxDQUFBLEVBQUc7SUFDUFMsNERBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLE9BQU8sSUFBSTtFQUNmO0VBRUF2WixJQUFJQSxDQUFDZCxDQUFDLEVBQUU7SUFDSnFhLHdEQUFhLENBQUMsSUFBSSxFQUFFcmEsQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sSUFBSTtFQUNmO0VBRUFqQixlQUFlQSxDQUFDO0lBQUVkLEdBQUc7SUFBRVYsTUFBTTtJQUFFUSxJQUFJO0lBQUVDO0VBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQzdDcWMsK0RBQW9CLENBQUMsSUFBSSxFQUFFcGMsR0FBRyxFQUFFVixNQUFNLEVBQUVRLElBQUksRUFBRUMsR0FBRyxDQUFDO0lBQ2xELE9BQU8sSUFBSTtFQUNmO0VBRUFrQixjQUFjQSxDQUFDO0lBQUVoQixJQUFJO0lBQUVDLEtBQUs7SUFBRUMsTUFBTTtJQUFFQyxHQUFHO0lBQUVOLElBQUk7SUFBRUM7RUFBSSxDQUFDLEVBQUU7SUFDcERxYyx5REFBYyxDQUFDLElBQUksRUFBRW5jLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRU4sSUFBSSxFQUFFQyxHQUFHLENBQUM7SUFDekQsT0FBTyxJQUFJO0VBQ2Y7RUFFQWlZLGNBQWNBLENBQUMwQyxDQUFDLEVBQUU7SUFDZDBCLDREQUFpQixDQUFDLElBQUksRUFBRTFCLENBQUMsQ0FBQztJQUMxQixPQUFPLElBQUk7RUFDZjtFQUVBc0MsV0FBV0EsQ0FBQ3RiLENBQUMsRUFBRTtJQUNYLElBQUksQ0FBQ3dHLENBQUMsR0FBR3hHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUN5RyxDQUFDLEdBQUd6RyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDM0MsQ0FBQyxHQUFHMkMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiLE9BQU8sSUFBSTtFQUNmO0VBRUFQLE9BQU9BLENBQUNZLENBQUMsR0FBRyxJQUFJLEVBQUU7SUFDZHFhLDBEQUFlLENBQUMsSUFBSSxFQUFFcmEsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sSUFBSTtFQUNmO0VBRUEyVyxPQUFPQSxDQUFDZ0MsQ0FBQyxFQUFFdUMsR0FBRyxFQUFFalYsS0FBSyxFQUFFO0lBQ25Cb1UsZ0ZBQXFDLENBQUMsSUFBSSxFQUFFMUIsQ0FBQyxFQUFFdUMsR0FBRyxFQUFFalYsS0FBSyxDQUFDO0lBQzFELE9BQU8sSUFBSTtFQUNmO0VBRUE2USxXQUFXQSxDQUFDNkIsQ0FBQyxFQUFFO0lBQ1gwQiwrREFBb0IsQ0FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDN0IsT0FBTyxJQUFJO0VBQ2Y7RUFFQXJaLGNBQWNBLENBQUM0YixHQUFHLEVBQUU7SUFDaEJiLGtFQUF1QixDQUFDYSxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sSUFBSTtFQUNmO0VBRUFuRSxVQUFVQSxDQUFDOVEsS0FBSyxFQUFFO0lBQ2RvVSw4REFBbUIsQ0FBQ3BVLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDaEMsT0FBTyxJQUFJO0VBQ2Y7RUFFQWxGLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCLE9BQU9zWixxRUFBMEIsQ0FBQyxJQUFJLENBQUM7RUFDM0M7RUFFQTdhLE1BQU1BLENBQUM0YixHQUFHLEVBQUUzYixNQUFNLEVBQUVxVyxFQUFFLEVBQUU7SUFDcEJ1RSw0REFBaUIsQ0FBQyxJQUFJLEVBQUVlLEdBQUcsRUFBRTNiLE1BQU0sRUFBRXFXLEVBQUUsQ0FBQztJQUN4QyxPQUFPLElBQUk7RUFDZjtFQUVBL04sV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsT0FBT3NTLCtEQUFvQixDQUFDLElBQUksQ0FBQztFQUNyQztFQUVBNVQsU0FBU0EsQ0FBQzZILENBQUMsRUFBRXNLLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUd0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3RLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUd0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3RLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUd0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3RLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUd0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR3RLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUd0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR3RLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsT0FBTyxJQUFJO0VBQ2Y7RUFFQUMsT0FBT0EsQ0FBQ3ZLLENBQUMsR0FBRyxFQUFFLEVBQUVzSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ25CdEssQ0FBQyxDQUFDc0ssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNkdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJ0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQnRLLENBQUMsQ0FBQ3NLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCdEssQ0FBQyxDQUFDc0ssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJ0SyxDQUFDLENBQUNzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJ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QSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1hBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1YsT0FBT0EsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTdlgsR0FBR0EsQ0FBQ3VYLEdBQUcsRUFBRXZQLENBQUMsRUFBRUcsQ0FBQyxFQUFFO0VBQzNCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCb1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCLE9BQU9vUCxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMvQyxRQUFRQSxDQUFDK0MsR0FBRyxFQUFFdlAsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDaENvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEIsT0FBT29QLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUzlDLGNBQWNBLENBQUM4QyxHQUFHLEVBQUV2UCxDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUN0Q29QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQixPQUFPb1AsR0FBRztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JmQSxNQUFNSSxPQUFPLEdBQUcsUUFBUTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTbmQsSUFBSUEsQ0FBQytjLEdBQUcsRUFBRXZQLENBQUMsRUFBRTtFQUN6QnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYnVQLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZnVQLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZnVQLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZnVQLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZnVQLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZnVQLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZixPQUFPdVAsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDWCxPQUFPQSxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVN2WCxHQUFHQSxDQUFDdVgsR0FBRyxFQUFFdlAsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDM0JvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJvUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUd2UCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkJvUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUd2UCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkJvUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUd2UCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkJvUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUd2UCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkJvUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUd2UCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkJvUCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUd2UCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkIsT0FBT29QLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUy9DLFFBQVFBLENBQUMrQyxHQUFHLEVBQUV2UCxDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUNoQ29QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQm9QLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2Qm9QLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2Qm9QLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2Qm9QLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR3ZQLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2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Ry9ILENBQUMsSUFBSTVOLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzJWLEVBQUUsQ0FBQztFQUM3QixPQUFPdkcsR0FBRztBQUNkOzs7Ozs7OztVQ3RJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL0dlb21ldHJ5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvTWVzaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvY29yZS9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvY29yZS9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvZXh0cmFzL1BsYW5lLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvRXVsZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9NYXQzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvTWF0NC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL1F1YXQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9WZWMzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvZnVuY3Rpb25zL0V1bGVyRnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9NYXQzRnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9NYXQ0RnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9RdWF0RnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9WZWMzRnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9WZWM0RnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnO1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGdsLHNjZW5lKXtcbiAgICAgICAgdGhpcy5nbD1nbFxuICAgICAgICB0aGlzLmdyb3VwID1uZXcgVHJhbnNmb3JtKClcblxuICAgICAgICB0aGlzLm1lZGlhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcbiAgICB9XG4gICAgY3JlYXRlR2VvbWV0cnkoKXtcbiAgICAgICAgdGhpcy5nZW9tZXRyeT1uZXcgUGxhbmUodGhpcy5nbClcbiAgICAgICAgXG4gICAgfVxuICAgIGNyZWF0ZUdhbGxlcnkoKXtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLChlbGVtZW50LGluZGV4KSA9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBzY2VuZTp0aGlzLnNjZW5lLFxuICAgICAgICAgICAgICAgIGdsOnRoaXMuZ2xcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDkvKDliLBtZWRpYeeahOaWh+S7tumHjOmdolxuICAgICAgICB9KVxuICAgIH1cbiBcbn0iLCIvL+WkhOeQhueFp+eJh1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVHJhbnNmb3JtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLHNjZW5lIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbD1nbFxuICAgIHRoaXMuZ2VvbWV0cnk9Z2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lPXNjZW5lXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcbiAgICBcbiAgICB0aGlzLmltYWdlID1uZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLnNyYyA9dGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIHRoaXMuaW1hZ2Uub25sb2FkPV89Pih0aGlzLnRleHR1cmUuaW1hZ2UgPXRoaXMuaW1hZ2UpXG5cbiAgIFxuXG4gIH1cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgLy8gICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfVxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaD1uZXcgTWVzaCh0aGlzLmdsLHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAgIH0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG59IiwiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVIb21lKClcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAgICAgZ2w6dGhpcy5nbCxcbiAgICAgIHNjZW5lOnRoaXMuc2NlbmVcbiAgICB9KVxuXG4gIH1cblxuXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIOWwhua4suafk+eahOeUu+W4g+WwuuWvuOWhq+a7oeinhueql+WPo1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnggKz0gMC4wMVxuICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi55ICs9IDAuMDFcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmVcbiAgICB9KVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjUsIDEuMCwgMC4wLCAxLjApO1xcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiOyIsImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4vVHJhbnNmb3JtLmpzJztcbmltcG9ydCB7IE1hdDQgfSBmcm9tICcuLi9tYXRoL01hdDQuanMnO1xuaW1wb3J0IHsgVmVjMyB9IGZyb20gJy4uL21hdGgvVmVjMy5qcyc7XG5cbmNvbnN0IHRlbXBNYXQ0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXQ0KCk7XG5jb25zdCB0ZW1wVmVjM2EgPSAvKiBAX19QVVJFX18gKi8gbmV3IFZlYzMoKTtcbmNvbnN0IHRlbXBWZWMzYiA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgVmVjMygpO1xuXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgeyBuZWFyID0gMC4xLCBmYXIgPSAxMDAsIGZvdiA9IDQ1LCBhc3BlY3QgPSAxLCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIHpvb20gPSAxIH0gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBuZWFyLCBmYXIsIGZvdiwgYXNwZWN0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIHpvb20gfSk7XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4ID0gbmV3IE1hdDQoKTtcbiAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gbmV3IE1hdDQoKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uVmlld01hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMud29ybGRQb3NpdGlvbiA9IG5ldyBWZWMzKCk7XG5cbiAgICAgICAgLy8gVXNlIG9ydGhvZ3JhcGhpYyBpZiBsZWZ0L3JpZ2h0IHNldCwgZWxzZSBkZWZhdWx0IHRvIHBlcnNwZWN0aXZlIGNhbWVyYVxuICAgICAgICB0aGlzLnR5cGUgPSBsZWZ0IHx8IHJpZ2h0ID8gJ29ydGhvZ3JhcGhpYycgOiAncGVyc3BlY3RpdmUnO1xuXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdvcnRob2dyYXBoaWMnKSB0aGlzLm9ydGhvZ3JhcGhpYygpO1xuICAgICAgICBlbHNlIHRoaXMucGVyc3BlY3RpdmUoKTtcbiAgICB9XG5cbiAgICBwZXJzcGVjdGl2ZSh7IG5lYXIgPSB0aGlzLm5lYXIsIGZhciA9IHRoaXMuZmFyLCBmb3YgPSB0aGlzLmZvdiwgYXNwZWN0ID0gdGhpcy5hc3BlY3QgfSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBuZWFyLCBmYXIsIGZvdiwgYXNwZWN0IH0pO1xuICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXguZnJvbVBlcnNwZWN0aXZlKHsgZm92OiBmb3YgKiAoTWF0aC5QSSAvIDE4MCksIGFzcGVjdCwgbmVhciwgZmFyIH0pO1xuICAgICAgICB0aGlzLnR5cGUgPSAncGVyc3BlY3RpdmUnO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvcnRob2dyYXBoaWMoe1xuICAgICAgICBuZWFyID0gdGhpcy5uZWFyLFxuICAgICAgICBmYXIgPSB0aGlzLmZhcixcbiAgICAgICAgbGVmdCA9IHRoaXMubGVmdCB8fCAtMSxcbiAgICAgICAgcmlnaHQgPSB0aGlzLnJpZ2h0IHx8IDEsXG4gICAgICAgIGJvdHRvbSA9IHRoaXMuYm90dG9tIHx8IC0xLFxuICAgICAgICB0b3AgPSB0aGlzLnRvcCB8fCAxLFxuICAgICAgICB6b29tID0gdGhpcy56b29tLFxuICAgIH0gPSB7fSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgbmVhciwgZmFyLCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIHpvb20gfSk7XG4gICAgICAgIGxlZnQgLz0gem9vbTtcbiAgICAgICAgcmlnaHQgLz0gem9vbTtcbiAgICAgICAgYm90dG9tIC89IHpvb207XG4gICAgICAgIHRvcCAvPSB6b29tO1xuICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXguZnJvbU9ydGhvZ29uYWwoeyBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciB9KTtcbiAgICAgICAgdGhpcy50eXBlID0gJ29ydGhvZ3JhcGhpYyc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVwZGF0ZU1hdHJpeFdvcmxkKCkge1xuICAgICAgICBzdXBlci51cGRhdGVNYXRyaXhXb3JsZCgpO1xuICAgICAgICB0aGlzLnZpZXdNYXRyaXguaW52ZXJzZSh0aGlzLndvcmxkTWF0cml4KTtcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeC5nZXRUcmFuc2xhdGlvbih0aGlzLndvcmxkUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIHVzZWQgZm9yIHNvcnRpbmdcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uVmlld01hdHJpeC5tdWx0aXBseSh0aGlzLnByb2plY3Rpb25NYXRyaXgsIHRoaXMudmlld01hdHJpeCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxvb2tBdCh0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIubG9va0F0KHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFByb2plY3QgM0QgY29vcmRpbmF0ZSB0byAyRCBwb2ludFxuICAgIHByb2plY3Qodikge1xuICAgICAgICB2LmFwcGx5TWF0cml4NCh0aGlzLnZpZXdNYXRyaXgpO1xuICAgICAgICB2LmFwcGx5TWF0cml4NCh0aGlzLnByb2plY3Rpb25NYXRyaXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBVbnByb2plY3QgMkQgcG9pbnQgdG8gM0QgY29vcmRpbmF0ZVxuICAgIHVucHJvamVjdCh2KSB7XG4gICAgICAgIHYuYXBwbHlNYXRyaXg0KHRlbXBNYXQ0LmludmVyc2UodGhpcy5wcm9qZWN0aW9uTWF0cml4KSk7XG4gICAgICAgIHYuYXBwbHlNYXRyaXg0KHRoaXMud29ybGRNYXRyaXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcnVzdHVtKCkge1xuICAgICAgICBpZiAoIXRoaXMuZnJ1c3R1bSkge1xuICAgICAgICAgICAgdGhpcy5mcnVzdHVtID0gW25ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCldO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IHRoaXMucHJvamVjdGlvblZpZXdNYXRyaXg7XG4gICAgICAgIHRoaXMuZnJ1c3R1bVswXS5zZXQobVszXSAtIG1bMF0sIG1bN10gLSBtWzRdLCBtWzExXSAtIG1bOF0pLmNvbnN0YW50ID0gbVsxNV0gLSBtWzEyXTsgLy8gLXhcbiAgICAgICAgdGhpcy5mcnVzdHVtWzFdLnNldChtWzNdICsgbVswXSwgbVs3XSArIG1bNF0sIG1bMTFdICsgbVs4XSkuY29uc3RhbnQgPSBtWzE1XSArIG1bMTJdOyAvLyAreFxuICAgICAgICB0aGlzLmZydXN0dW1bMl0uc2V0KG1bM10gKyBtWzFdLCBtWzddICsgbVs1XSwgbVsxMV0gKyBtWzldKS5jb25zdGFudCA9IG1bMTVdICsgbVsxM107IC8vICt5XG4gICAgICAgIHRoaXMuZnJ1c3R1bVszXS5zZXQobVszXSAtIG1bMV0sIG1bN10gLSBtWzVdLCBtWzExXSAtIG1bOV0pLmNvbnN0YW50ID0gbVsxNV0gLSBtWzEzXTsgLy8gLXlcbiAgICAgICAgdGhpcy5mcnVzdHVtWzRdLnNldChtWzNdIC0gbVsyXSwgbVs3XSAtIG1bNl0sIG1bMTFdIC0gbVsxMF0pLmNvbnN0YW50ID0gbVsxNV0gLSBtWzE0XTsgLy8gK3ogKGZhcilcbiAgICAgICAgdGhpcy5mcnVzdHVtWzVdLnNldChtWzNdICsgbVsyXSwgbVs3XSArIG1bNl0sIG1bMTFdICsgbVsxMF0pLmNvbnN0YW50ID0gbVsxNV0gKyBtWzE0XTsgLy8gLXogKG5lYXIpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGludkxlbiA9IDEuMCAvIHRoaXMuZnJ1c3R1bVtpXS5kaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5mcnVzdHVtW2ldLm11bHRpcGx5KGludkxlbik7XG4gICAgICAgICAgICB0aGlzLmZydXN0dW1baV0uY29uc3RhbnQgKj0gaW52TGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJ1c3R1bUludGVyc2VjdHNNZXNoKG5vZGUsIHdvcmxkTWF0cml4ID0gbm9kZS53b3JsZE1hdHJpeCkge1xuICAgICAgICAvLyBJZiBubyBwb3NpdGlvbiBhdHRyaWJ1dGUsIHRyZWF0IGFzIGZydXN0dW1DdWxsZWQgZmFsc2VcbiAgICAgICAgaWYgKCFub2RlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24pIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGlmICghbm9kZS5nZW9tZXRyeS5ib3VuZHMgfHwgbm9kZS5nZW9tZXRyeS5ib3VuZHMucmFkaXVzID09PSBJbmZpbml0eSkgbm9kZS5nZW9tZXRyeS5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcblxuICAgICAgICBpZiAoIW5vZGUuZ2VvbWV0cnkuYm91bmRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBjb25zdCBjZW50ZXIgPSB0ZW1wVmVjM2E7XG4gICAgICAgIGNlbnRlci5jb3B5KG5vZGUuZ2VvbWV0cnkuYm91bmRzLmNlbnRlcik7XG4gICAgICAgIGNlbnRlci5hcHBseU1hdHJpeDQod29ybGRNYXRyaXgpO1xuXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IG5vZGUuZ2VvbWV0cnkuYm91bmRzLnJhZGl1cyAqIHdvcmxkTWF0cml4LmdldE1heFNjYWxlT25BeGlzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZnJ1c3R1bUludGVyc2VjdHNTcGhlcmUoY2VudGVyLCByYWRpdXMpO1xuICAgIH1cblxuICAgIGZydXN0dW1JbnRlcnNlY3RzU3BoZXJlKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbCA9IHRlbXBWZWMzYjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGxhbmUgPSB0aGlzLmZydXN0dW1baV07XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IG5vcm1hbC5jb3B5KHBsYW5lKS5kb3QoY2VudGVyKSArIHBsYW5lLmNvbnN0YW50O1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgLXJhZGl1cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsIi8vIGF0dHJpYnV0ZSBwYXJhbXNcbi8vIHtcbi8vICAgICBkYXRhIC0gdHlwZWQgYXJyYXkgZWcgVUludDE2QXJyYXkgZm9yIGluZGljZXMsIEZsb2F0MzJBcnJheVxuLy8gICAgIHNpemUgLSBpbnQgZGVmYXVsdCAxXG4vLyAgICAgaW5zdGFuY2VkIC0gZGVmYXVsdCBudWxsLiBQYXNzIGRpdmlzb3IgYW1vdW50XG4vLyAgICAgdHlwZSAtIGdsIGVudW0gZGVmYXVsdCBnbC5VTlNJR05FRF9TSE9SVCBmb3IgJ2luZGV4JywgZ2wuRkxPQVQgZm9yIG90aGVyc1xuLy8gICAgIG5vcm1hbGl6ZWQgLSBib29sZWFuIGRlZmF1bHQgZmFsc2VcblxuLy8gICAgIGJ1ZmZlciAtIGdsIGJ1ZmZlciwgaWYgYnVmZmVyIGV4aXN0cywgZG9uJ3QgbmVlZCB0byBwcm92aWRlIGRhdGEgLSBhbHRob3VnaCBuZWVkcyBwb3NpdGlvbiBkYXRhIGZvciBib3VuZHMgY2FsY3VsYXRpb25cbi8vICAgICBzdHJpZGUgLSBkZWZhdWx0IDAgLSBmb3Igd2hlbiBwYXNzaW5nIGluIGJ1ZmZlclxuLy8gICAgIG9mZnNldCAtIGRlZmF1bHQgMCAtIGZvciB3aGVuIHBhc3NpbmcgaW4gYnVmZmVyXG4vLyAgICAgY291bnQgLSBkZWZhdWx0IG51bGwgLSBmb3Igd2hlbiBwYXNzaW5nIGluIGJ1ZmZlclxuLy8gICAgIG1pbiAtIGFycmF5IC0gZm9yIHdoZW4gcGFzc2luZyBpbiBidWZmZXJcbi8vICAgICBtYXggLSBhcnJheSAtIGZvciB3aGVuIHBhc3NpbmcgaW4gYnVmZmVyXG4vLyB9XG5cbi8vIFRPRE86IGZpdCBpbiB0cmFuc2Zvcm0gZmVlZGJhY2tcblxuaW1wb3J0IHsgVmVjMyB9IGZyb20gJy4uL21hdGgvVmVjMy5qcyc7XG5cbmNvbnN0IHRlbXBWZWMzID0gLyogQF9fUFVSRV9fICovIG5ldyBWZWMzKCk7XG5cbmxldCBJRCA9IDE7XG5sZXQgQVRUUl9JRCA9IDE7XG5cbi8vIFRvIHN0b3AgaW5pZmluaXRlIHdhcm5pbmdzXG5sZXQgaXNCb3VuZHNXYXJuZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgICAgIGlmICghZ2wuY2FudmFzKSBjb25zb2xlLmVycm9yKCdnbCBub3QgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50IHRvIEdlb21ldHJ5Jyk7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG5cbiAgICAgICAgLy8gU3RvcmUgb25lIFZBTyBwZXIgcHJvZ3JhbSBhdHRyaWJ1dGUgbG9jYXRpb25zIG9yZGVyXG4gICAgICAgIHRoaXMuVkFPcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuZHJhd1JhbmdlID0geyBzdGFydDogMCwgY291bnQ6IDAgfTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZWRDb3VudCA9IDA7XG5cbiAgICAgICAgLy8gVW5iaW5kIGN1cnJlbnQgVkFPIHNvIHRoYXQgbmV3IGJ1ZmZlcnMgZG9uJ3QgZ2V0IGFkZGVkIHRvIGFjdGl2ZSBtZXNoXG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmN1cnJlbnRHZW9tZXRyeSA9IG51bGw7XG5cbiAgICAgICAgLy8gQWxpYXMgZm9yIHN0YXRlIHN0b3JlIHRvIGF2b2lkIHJlZHVuZGFudCBjYWxscyBmb3IgZ2xvYmFsIHN0YXRlXG4gICAgICAgIHRoaXMuZ2xTdGF0ZSA9IHRoaXMuZ2wucmVuZGVyZXIuc3RhdGU7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBidWZmZXJzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRBdHRyaWJ1dGUoa2V5LCBhdHRyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gYXR0cjtcblxuICAgICAgICAvLyBTZXQgb3B0aW9uc1xuICAgICAgICBhdHRyLmlkID0gQVRUUl9JRCsrOyAvLyBUT0RPOiBjdXJyZW50bHkgdW51c2VkLCByZW1vdmU/XG4gICAgICAgIGF0dHIuc2l6ZSA9IGF0dHIuc2l6ZSB8fCAxO1xuICAgICAgICBhdHRyLnR5cGUgPVxuICAgICAgICAgICAgYXR0ci50eXBlIHx8XG4gICAgICAgICAgICAoYXR0ci5kYXRhLmNvbnN0cnVjdG9yID09PSBGbG9hdDMyQXJyYXlcbiAgICAgICAgICAgICAgICA/IHRoaXMuZ2wuRkxPQVRcbiAgICAgICAgICAgICAgICA6IGF0dHIuZGF0YS5jb25zdHJ1Y3RvciA9PT0gVWludDE2QXJyYXlcbiAgICAgICAgICAgICAgICA/IHRoaXMuZ2wuVU5TSUdORURfU0hPUlRcbiAgICAgICAgICAgICAgICA6IHRoaXMuZ2wuVU5TSUdORURfSU5UKTsgLy8gVWludDMyQXJyYXlcbiAgICAgICAgYXR0ci50YXJnZXQgPSBrZXkgPT09ICdpbmRleCcgPyB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSIDogdGhpcy5nbC5BUlJBWV9CVUZGRVI7XG4gICAgICAgIGF0dHIubm9ybWFsaXplZCA9IGF0dHIubm9ybWFsaXplZCB8fCBmYWxzZTtcbiAgICAgICAgYXR0ci5zdHJpZGUgPSBhdHRyLnN0cmlkZSB8fCAwO1xuICAgICAgICBhdHRyLm9mZnNldCA9IGF0dHIub2Zmc2V0IHx8IDA7XG4gICAgICAgIGF0dHIuY291bnQgPSBhdHRyLmNvdW50IHx8IChhdHRyLnN0cmlkZSA/IGF0dHIuZGF0YS5ieXRlTGVuZ3RoIC8gYXR0ci5zdHJpZGUgOiBhdHRyLmRhdGEubGVuZ3RoIC8gYXR0ci5zaXplKTtcbiAgICAgICAgYXR0ci5kaXZpc29yID0gYXR0ci5pbnN0YW5jZWQgfHwgMDtcbiAgICAgICAgYXR0ci5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBhdHRyLnVzYWdlID0gYXR0ci51c2FnZSB8fCB0aGlzLmdsLlNUQVRJQ19EUkFXO1xuXG4gICAgICAgIGlmICghYXR0ci5idWZmZXIpIHtcbiAgICAgICAgICAgIC8vIFB1c2ggZGF0YSB0byBidWZmZXJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGdlb21ldHJ5IGNvdW50cy4gSWYgaW5kZXhlZCwgaWdub3JlIHJlZ3VsYXIgYXR0cmlidXRlc1xuICAgICAgICBpZiAoYXR0ci5kaXZpc29yKSB7XG4gICAgICAgICAgICB0aGlzLmlzSW5zdGFuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlZENvdW50ICYmIHRoaXMuaW5zdGFuY2VkQ291bnQgIT09IGF0dHIuY291bnQgKiBhdHRyLmRpdmlzb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dlb21ldHJ5IGhhcyBtdWx0aXBsZSBpbnN0YW5jZWQgYnVmZmVycyBvZiBkaWZmZXJlbnQgbGVuZ3RoJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmluc3RhbmNlZENvdW50ID0gTWF0aC5taW4odGhpcy5pbnN0YW5jZWRDb3VudCwgYXR0ci5jb3VudCAqIGF0dHIuZGl2aXNvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZWRDb3VudCA9IGF0dHIuY291bnQgKiBhdHRyLmRpdmlzb3I7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW5kZXgnKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdSYW5nZS5jb3VudCA9IGF0dHIuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYXR0cmlidXRlcy5pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3UmFuZ2UuY291bnQgPSBNYXRoLm1heCh0aGlzLmRyYXdSYW5nZS5jb3VudCwgYXR0ci5jb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGUoYXR0cikge1xuICAgICAgICBjb25zdCBpc05ld0J1ZmZlciA9ICFhdHRyLmJ1ZmZlcjtcbiAgICAgICAgaWYgKGlzTmV3QnVmZmVyKSBhdHRyLmJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIGlmICh0aGlzLmdsU3RhdGUuYm91bmRCdWZmZXIgIT09IGF0dHIuYnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoYXR0ci50YXJnZXQsIGF0dHIuYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGF0ZS5ib3VuZEJ1ZmZlciA9IGF0dHIuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ld0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKGF0dHIudGFyZ2V0LCBhdHRyLmRhdGEsIGF0dHIudXNhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKGF0dHIudGFyZ2V0LCAwLCBhdHRyLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHIubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRJbmRleCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZSgnaW5kZXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0RHJhd1JhbmdlKHN0YXJ0LCBjb3VudCkge1xuICAgICAgICB0aGlzLmRyYXdSYW5nZS5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmRyYXdSYW5nZS5jb3VudCA9IGNvdW50O1xuICAgIH1cblxuICAgIHNldEluc3RhbmNlZENvdW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VkQ291bnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVWQU8ocHJvZ3JhbSkge1xuICAgICAgICB0aGlzLlZBT3NbcHJvZ3JhbS5hdHRyaWJ1dGVPcmRlcl0gPSB0aGlzLmdsLnJlbmRlcmVyLmNyZWF0ZVZlcnRleEFycmF5KCk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuYmluZFZlcnRleEFycmF5KHRoaXMuVkFPc1twcm9ncmFtLmF0dHJpYnV0ZU9yZGVyXSk7XG4gICAgICAgIHRoaXMuYmluZEF0dHJpYnV0ZXMocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgYmluZEF0dHJpYnV0ZXMocHJvZ3JhbSkge1xuICAgICAgICAvLyBMaW5rIGFsbCBhdHRyaWJ1dGVzIHRvIHByb2dyYW0gdXNpbmcgZ2wudmVydGV4QXR0cmliUG9pbnRlclxuICAgICAgICBwcm9ncmFtLmF0dHJpYnV0ZUxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbiwgeyBuYW1lLCB0eXBlIH0pID0+IHtcbiAgICAgICAgICAgIC8vIElmIGdlb21ldHJ5IG1pc3NpbmcgYSByZXF1aXJlZCBzaGFkZXIgYXR0cmlidXRlXG4gICAgICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgYWN0aXZlIGF0dHJpYnV0ZSAke25hbWV9IG5vdCBiZWluZyBzdXBwbGllZGApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKGF0dHIudGFyZ2V0LCBhdHRyLmJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmdsU3RhdGUuYm91bmRCdWZmZXIgPSBhdHRyLmJ1ZmZlcjtcblxuICAgICAgICAgICAgLy8gRm9yIG1hdHJpeCBhdHRyaWJ1dGVzLCBidWZmZXIgbmVlZHMgdG8gYmUgZGVmaW5lZCBwZXIgY29sdW1uXG4gICAgICAgICAgICBsZXQgbnVtTG9jID0gMTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAzNTY3NCkgbnVtTG9jID0gMjsgLy8gbWF0MlxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDM1Njc1KSBudW1Mb2MgPSAzOyAvLyBtYXQzXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMzU2NzYpIG51bUxvYyA9IDQ7IC8vIG1hdDRcblxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGF0dHIuc2l6ZSAvIG51bUxvYztcbiAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IG51bUxvYyA9PT0gMSA/IDAgOiBudW1Mb2MgKiBudW1Mb2MgKiA0O1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbnVtTG9jID09PSAxID8gMCA6IG51bUxvYyAqIDQ7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTG9jOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jYXRpb24gKyBpLCBzaXplLCBhdHRyLnR5cGUsIGF0dHIubm9ybWFsaXplZCwgYXR0ci5zdHJpZGUgKyBzdHJpZGUsIGF0dHIub2Zmc2V0ICsgaSAqIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2NhdGlvbiArIGkpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGluc3RhbmNlZCBhdHRyaWJ1dGVzLCBkaXZpc29yIG5lZWRzIHRvIGJlIHNldC5cbiAgICAgICAgICAgICAgICAvLyBGb3IgZmlyZWZveCwgbmVlZCB0byBzZXQgYmFjayB0byAwIGlmIG5vbi1pbnN0YW5jZWQgZHJhd24gYWZ0ZXIgaW5zdGFuY2VkLiBFbHNlIHdvbid0IHJlbmRlclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIudmVydGV4QXR0cmliRGl2aXNvcihsb2NhdGlvbiArIGksIGF0dHIuZGl2aXNvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgaW5kaWNlcyBpZiBnZW9tZXRyeSBpbmRleGVkXG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXgpIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmF0dHJpYnV0ZXMuaW5kZXguYnVmZmVyKTtcbiAgICB9XG5cbiAgICBkcmF3KHsgcHJvZ3JhbSwgbW9kZSA9IHRoaXMuZ2wuVFJJQU5HTEVTIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2wucmVuZGVyZXIuY3VycmVudEdlb21ldHJ5ICE9PSBgJHt0aGlzLmlkfV8ke3Byb2dyYW0uYXR0cmlidXRlT3JkZXJ9YCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLlZBT3NbcHJvZ3JhbS5hdHRyaWJ1dGVPcmRlcl0pIHRoaXMuY3JlYXRlVkFPKHByb2dyYW0pO1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5iaW5kVmVydGV4QXJyYXkodGhpcy5WQU9zW3Byb2dyYW0uYXR0cmlidXRlT3JkZXJdKTtcbiAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuY3VycmVudEdlb21ldHJ5ID0gYCR7dGhpcy5pZH1fJHtwcm9ncmFtLmF0dHJpYnV0ZU9yZGVyfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgYXR0cmlidXRlcyBuZWVkIHVwZGF0aW5nXG4gICAgICAgIHByb2dyYW0uYXR0cmlidXRlTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uLCB7IG5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChhdHRyLm5lZWRzVXBkYXRlKSB0aGlzLnVwZGF0ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRm9yIGRyYXdFbGVtZW50cywgb2Zmc2V0IG5lZWRzIHRvIGJlIG11bHRpcGxlIG9mIHR5cGUgc2l6ZVxuICAgICAgICBsZXQgaW5kZXhCeXRlc1BlckVsZW1lbnQgPSAyO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzLmluZGV4Py50eXBlID09PSB0aGlzLmdsLlVOU0lHTkVEX0lOVCkgaW5kZXhCeXRlc1BlckVsZW1lbnQgPSA0O1xuXG4gICAgICAgIGlmICh0aGlzLmlzSW5zdGFuY2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5kcmF3RWxlbWVudHNJbnN0YW5jZWQoXG4gICAgICAgICAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JhbmdlLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuaW5kZXgudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmluZGV4Lm9mZnNldCArIHRoaXMuZHJhd1JhbmdlLnN0YXJ0ICogaW5kZXhCeXRlc1BlckVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VkQ291bnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmRyYXdBcnJheXNJbnN0YW5jZWQobW9kZSwgdGhpcy5kcmF3UmFuZ2Uuc3RhcnQsIHRoaXMuZHJhd1JhbmdlLmNvdW50LCB0aGlzLmluc3RhbmNlZENvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyhcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmFuZ2UuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5pbmRleC50eXBlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuaW5kZXgub2Zmc2V0ICsgdGhpcy5kcmF3UmFuZ2Uuc3RhcnQgKiBpbmRleEJ5dGVzUGVyRWxlbWVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyhtb2RlLCB0aGlzLmRyYXdSYW5nZS5zdGFydCwgdGhpcy5kcmF3UmFuZ2UuY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vIFVzZSBwb3NpdGlvbiBidWZmZXIsIG9yIG1pbi9tYXggaWYgYXZhaWxhYmxlXG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmF0dHJpYnV0ZXMucG9zaXRpb247XG4gICAgICAgIC8vIGlmIChhdHRyLm1pbikgcmV0dXJuIFsuLi5hdHRyLm1pbiwgLi4uYXR0ci5tYXhdO1xuICAgICAgICBpZiAoYXR0ci5kYXRhKSByZXR1cm4gYXR0cjtcbiAgICAgICAgaWYgKGlzQm91bmRzV2FybmVkKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUud2FybignTm8gcG9zaXRpb24gYnVmZmVyIGRhdGEgZm91bmQgdG8gY29tcHV0ZSBib3VuZHMnKTtcbiAgICAgICAgcmV0dXJuIChpc0JvdW5kc1dhcm5lZCA9IHRydWUpO1xuICAgIH1cblxuICAgIGNvbXB1dGVCb3VuZGluZ0JveChhdHRyKSB7XG4gICAgICAgIGlmICghYXR0cikgYXR0ciA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBhdHRyLmRhdGE7XG4gICAgICAgIC8vIERhdGEgbG9hZGVkIHNob3VsZG4ndCBoYWF2ZSBzdHJpZGUsIG9ubHkgYnVmZmVyc1xuICAgICAgICAvLyBjb25zdCBzdHJpZGUgPSBhdHRyLnN0cmlkZSA/IGF0dHIuc3RyaWRlIC8gYXJyYXkuQllURVNfUEVSX0VMRU1FTlQgOiBhdHRyLnNpemU7XG4gICAgICAgIGNvbnN0IHN0cmlkZSA9IGF0dHIuc2l6ZTtcblxuICAgICAgICBpZiAoIXRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kcyA9IHtcbiAgICAgICAgICAgICAgICBtaW46IG5ldyBWZWMzKCksXG4gICAgICAgICAgICAgICAgbWF4OiBuZXcgVmVjMygpLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogbmV3IFZlYzMoKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogbmV3IFZlYzMoKSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IEluZmluaXR5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuYm91bmRzLm1pbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5ib3VuZHMubWF4O1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLmJvdW5kcy5jZW50ZXI7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5ib3VuZHMuc2NhbGU7XG5cbiAgICAgICAgbWluLnNldCgrSW5maW5pdHkpO1xuICAgICAgICBtYXguc2V0KC1JbmZpbml0eSk7XG5cbiAgICAgICAgLy8gVE9ETzogY2hlY2sgc2l6ZSBvZiBwb3NpdGlvbiAoZWcgdHJpYW5nbGUgd2l0aCBWZWMyKVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gYXJyYXlbaV07XG4gICAgICAgICAgICBjb25zdCB5ID0gYXJyYXlbaSArIDFdO1xuICAgICAgICAgICAgY29uc3QgeiA9IGFycmF5W2kgKyAyXTtcblxuICAgICAgICAgICAgbWluLnggPSBNYXRoLm1pbih4LCBtaW4ueCk7XG4gICAgICAgICAgICBtaW4ueSA9IE1hdGgubWluKHksIG1pbi55KTtcbiAgICAgICAgICAgIG1pbi56ID0gTWF0aC5taW4oeiwgbWluLnopO1xuXG4gICAgICAgICAgICBtYXgueCA9IE1hdGgubWF4KHgsIG1heC54KTtcbiAgICAgICAgICAgIG1heC55ID0gTWF0aC5tYXgoeSwgbWF4LnkpO1xuICAgICAgICAgICAgbWF4LnogPSBNYXRoLm1heCh6LCBtYXgueik7XG4gICAgICAgIH1cblxuICAgICAgICBzY2FsZS5zdWIobWF4LCBtaW4pO1xuICAgICAgICBjZW50ZXIuYWRkKG1pbiwgbWF4KS5kaXZpZGUoMik7XG4gICAgfVxuXG4gICAgY29tcHV0ZUJvdW5kaW5nU3BoZXJlKGF0dHIpIHtcbiAgICAgICAgaWYgKCFhdHRyKSBhdHRyID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBhcnJheSA9IGF0dHIuZGF0YTtcbiAgICAgICAgLy8gRGF0YSBsb2FkZWQgc2hvdWxkbid0IGhhYXZlIHN0cmlkZSwgb25seSBidWZmZXJzXG4gICAgICAgIC8vIGNvbnN0IHN0cmlkZSA9IGF0dHIuc3RyaWRlID8gYXR0ci5zdHJpZGUgLyBhcnJheS5CWVRFU19QRVJfRUxFTUVOVCA6IGF0dHIuc2l6ZTtcbiAgICAgICAgY29uc3Qgc3RyaWRlID0gYXR0ci5zaXplO1xuXG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHRoaXMuY29tcHV0ZUJvdW5kaW5nQm94KGF0dHIpO1xuXG4gICAgICAgIGxldCBtYXhSYWRpdXNTcSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgICAgIHRlbXBWZWMzLmZyb21BcnJheShhcnJheSwgaSk7XG4gICAgICAgICAgICBtYXhSYWRpdXNTcSA9IE1hdGgubWF4KG1heFJhZGl1c1NxLCB0aGlzLmJvdW5kcy5jZW50ZXIuc3F1YXJlZERpc3RhbmNlKHRlbXBWZWMzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdW5kcy5yYWRpdXMgPSBNYXRoLnNxcnQobWF4UmFkaXVzU3EpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuVkFPcykge1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5kZWxldGVWZXJ0ZXhBcnJheSh0aGlzLlZBT3Nba2V5XSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5WQU9zW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5hdHRyaWJ1dGVzW2tleV0uYnVmZmVyKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4vVHJhbnNmb3JtLmpzJztcbmltcG9ydCB7IE1hdDMgfSBmcm9tICcuLi9tYXRoL01hdDMuanMnO1xuaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4uL21hdGgvTWF0NC5qcyc7XG5cbmxldCBJRCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZXNoIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbSwgbW9kZSA9IGdsLlRSSUFOR0xFUywgZnJ1c3R1bUN1bGxlZCA9IHRydWUsIHJlbmRlck9yZGVyID0gMCB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKCFnbC5jYW52YXMpIGNvbnNvbGUuZXJyb3IoJ2dsIG5vdCBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQgdG8gTWVzaCcpO1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuaWQgPSBJRCsrO1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG5cbiAgICAgICAgLy8gVXNlZCB0byBza2lwIGZydXN0dW0gY3VsbGluZ1xuICAgICAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmcnVzdHVtQ3VsbGVkO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIHNvcnRpbmcgdG8gZm9yY2UgYW4gb3JkZXJcbiAgICAgICAgdGhpcy5yZW5kZXJPcmRlciA9IHJlbmRlck9yZGVyO1xuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMubm9ybWFsTWF0cml4ID0gbmV3IE1hdDMoKTtcbiAgICAgICAgdGhpcy5iZWZvcmVSZW5kZXJDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5hZnRlclJlbmRlckNhbGxiYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIG9uQmVmb3JlUmVuZGVyKGYpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVSZW5kZXJDYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25BZnRlclJlbmRlcihmKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXJDYWxsYmFja3MucHVzaChmKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZHJhdyh7IGNhbWVyYSB9ID0ge30pIHtcbiAgICAgICAgaWYgKGNhbWVyYSkge1xuICAgICAgICAgICAgLy8gQWRkIGVtcHR5IG1hdHJpeCB1bmlmb3JtcyB0byBwcm9ncmFtIGlmIHVuc2V0XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbS51bmlmb3Jtcy5tb2RlbE1hdHJpeCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wcm9ncmFtLnVuaWZvcm1zLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsTWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXdNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxWaWV3TWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbE1hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYVBvc2l0aW9uOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgbWF0cml4IHVuaWZvcm1zXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMucHJvamVjdGlvbk1hdHJpeC52YWx1ZSA9IGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLmNhbWVyYVBvc2l0aW9uLnZhbHVlID0gY2FtZXJhLndvcmxkUG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudmlld01hdHJpeC52YWx1ZSA9IGNhbWVyYS52aWV3TWF0cml4O1xuICAgICAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXgubXVsdGlwbHkoY2FtZXJhLnZpZXdNYXRyaXgsIHRoaXMud29ybGRNYXRyaXgpO1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxNYXRyaXguZ2V0Tm9ybWFsTWF0cml4KHRoaXMubW9kZWxWaWV3TWF0cml4KTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5tb2RlbE1hdHJpeC52YWx1ZSA9IHRoaXMud29ybGRNYXRyaXg7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMubW9kZWxWaWV3TWF0cml4LnZhbHVlID0gdGhpcy5tb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMubm9ybWFsTWF0cml4LnZhbHVlID0gdGhpcy5ub3JtYWxNYXRyaXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZWZvcmVSZW5kZXJDYWxsYmFja3MuZm9yRWFjaCgoZikgPT4gZiAmJiBmKHsgbWVzaDogdGhpcywgY2FtZXJhIH0pKTtcblxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgZmFjZXMgbmVlZCB0byBiZSBmbGlwcGVkIC0gd2hlbiBtZXNoIHNjYWxlZCBuZWdhdGl2ZWx5XG4gICAgICAgIGxldCBmbGlwRmFjZXMgPSB0aGlzLnByb2dyYW0uY3VsbEZhY2UgJiYgdGhpcy53b3JsZE1hdHJpeC5kZXRlcm1pbmFudCgpIDwgMDtcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSh7IGZsaXBGYWNlcyB9KTtcbiAgICAgICAgdGhpcy5nZW9tZXRyeS5kcmF3KHsgbW9kZTogdGhpcy5tb2RlLCBwcm9ncmFtOiB0aGlzLnByb2dyYW0gfSk7XG4gICAgICAgIHRoaXMuYWZ0ZXJSZW5kZXJDYWxsYmFja3MuZm9yRWFjaCgoZikgPT4gZiAmJiBmKHsgbWVzaDogdGhpcywgY2FtZXJhIH0pKTtcbiAgICB9XG59XG4iLCIvLyBUT0RPOiB1cGxvYWQgZW1wdHkgdGV4dHVyZSBpZiBudWxsID8gbWF5YmUgbm90XG4vLyBUT0RPOiB1cGxvYWQgaWRlbnRpdHkgbWF0cml4IGlmIG51bGwgP1xuLy8gVE9ETzogc2FtcGxlciBDdWJlXG5cbmxldCBJRCA9IDE7XG5cbi8vIGNhY2hlIG9mIHR5cGVkIGFycmF5cyB1c2VkIHRvIGZsYXR0ZW4gdW5pZm9ybSBhcnJheXNcbmNvbnN0IGFycmF5Q2FjaGVGMzIgPSB7fTtcblxuZXhwb3J0IGNsYXNzIFByb2dyYW0ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBnbCxcbiAgICAgICAge1xuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICB1bmlmb3JtcyA9IHt9LFxuXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VsbEZhY2UgPSBnbC5CQUNLLFxuICAgICAgICAgICAgZnJvbnRGYWNlID0gZ2wuQ0NXLFxuICAgICAgICAgICAgZGVwdGhUZXN0ID0gdHJ1ZSxcbiAgICAgICAgICAgIGRlcHRoV3JpdGUgPSB0cnVlLFxuICAgICAgICAgICAgZGVwdGhGdW5jID0gZ2wuTEVTUyxcbiAgICAgICAgfSA9IHt9XG4gICAgKSB7XG4gICAgICAgIGlmICghZ2wuY2FudmFzKSBjb25zb2xlLmVycm9yKCdnbCBub3QgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50IHRvIFByb2dyYW0nKTtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0gdW5pZm9ybXM7XG4gICAgICAgIHRoaXMuaWQgPSBJRCsrO1xuXG4gICAgICAgIGlmICghdmVydGV4KSBjb25zb2xlLndhcm4oJ3ZlcnRleCBzaGFkZXIgbm90IHN1cHBsaWVkJyk7XG4gICAgICAgIGlmICghZnJhZ21lbnQpIGNvbnNvbGUud2FybignZnJhZ21lbnQgc2hhZGVyIG5vdCBzdXBwbGllZCcpO1xuXG4gICAgICAgIC8vIFN0b3JlIHByb2dyYW0gc3RhdGVcbiAgICAgICAgdGhpcy50cmFuc3BhcmVudCA9IHRyYW5zcGFyZW50O1xuICAgICAgICB0aGlzLmN1bGxGYWNlID0gY3VsbEZhY2U7XG4gICAgICAgIHRoaXMuZnJvbnRGYWNlID0gZnJvbnRGYWNlO1xuICAgICAgICB0aGlzLmRlcHRoVGVzdCA9IGRlcHRoVGVzdDtcbiAgICAgICAgdGhpcy5kZXB0aFdyaXRlID0gZGVwdGhXcml0ZTtcbiAgICAgICAgdGhpcy5kZXB0aEZ1bmMgPSBkZXB0aEZ1bmM7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jID0ge307XG4gICAgICAgIHRoaXMuYmxlbmRFcXVhdGlvbiA9IHt9O1xuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGJsZW5kRnVuYyBpZiB0cmFuc3BhcmVudCBmbGFnZ2VkXG4gICAgICAgIGlmICh0aGlzLnRyYW5zcGFyZW50ICYmICF0aGlzLmJsZW5kRnVuYy5zcmMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsLnJlbmRlcmVyLnByZW11bHRpcGxpZWRBbHBoYSkgdGhpcy5zZXRCbGVuZEZ1bmModGhpcy5nbC5PTkUsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgICAgICBlbHNlIHRoaXMuc2V0QmxlbmRGdW5jKHRoaXMuZ2wuU1JDX0FMUEhBLCB0aGlzLmdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGlsZSB2ZXJ0ZXggc2hhZGVyIGFuZCBsb2cgZXJyb3JzXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlciwgdmVydGV4KTtcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBpZiAoZ2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0ZXhTaGFkZXIpICE9PSAnJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dsLmdldFNoYWRlckluZm9Mb2codmVydGV4U2hhZGVyKX1cXG5WZXJ0ZXggU2hhZGVyXFxuJHthZGRMaW5lTnVtYmVycyh2ZXJ0ZXgpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGlsZSBmcmFnbWVudCBzaGFkZXIgYW5kIGxvZyBlcnJvcnNcbiAgICAgICAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVyLCBmcmFnbWVudCk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBpZiAoZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcikgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcil9XFxuRnJhZ21lbnQgU2hhZGVyXFxuJHthZGRMaW5lTnVtYmVycyhmcmFnbWVudCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21waWxlIHByb2dyYW0gYW5kIGxvZyBlcnJvcnNcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBzaGFkZXIgb25jZSBsaW5rZWRcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG5cbiAgICAgICAgLy8gR2V0IGFjdGl2ZSB1bmlmb3JtIGxvY2F0aW9uc1xuICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxldCBudW1Vbmlmb3JtcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuICAgICAgICBmb3IgKGxldCB1SW5kZXggPSAwOyB1SW5kZXggPCBudW1Vbmlmb3JtczsgdUluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybSh0aGlzLnByb2dyYW0sIHVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KHVuaWZvcm0sIGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIHVuaWZvcm0ubmFtZSkpO1xuXG4gICAgICAgICAgICAvLyBzcGxpdCB1bmlmb3JtcycgbmFtZXMgdG8gc2VwYXJhdGUgYXJyYXkgYW5kIHN0cnVjdCBkZWNsYXJhdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gdW5pZm9ybS5uYW1lLm1hdGNoKC8oXFx3KykvZyk7XG5cbiAgICAgICAgICAgIHVuaWZvcm0udW5pZm9ybU5hbWUgPSBzcGxpdFswXTtcbiAgICAgICAgICAgIHVuaWZvcm0ubmFtZUNvbXBvbmVudHMgPSBzcGxpdC5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhY3RpdmUgYXR0cmlidXRlIGxvY2F0aW9uc1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gW107XG4gICAgICAgIGNvbnN0IG51bUF0dHJpYnMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuQUNUSVZFX0FUVFJJQlVURVMpO1xuICAgICAgICBmb3IgKGxldCBhSW5kZXggPSAwOyBhSW5kZXggPCBudW1BdHRyaWJzOyBhSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZ2wuZ2V0QWN0aXZlQXR0cmliKHRoaXMucHJvZ3JhbSwgYUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCBhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICAvLyBJZ25vcmUgc3BlY2lhbCBidWlsdC1pbiBpbnB1dHMuIGVnIGdsX1ZlcnRleElELCBnbF9JbnN0YW5jZUlEXG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT09IC0xKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxvY2F0aW9uc1tsb2NhdGlvbl0gPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLnNldChhdHRyaWJ1dGUsIGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9yZGVyID0gbG9jYXRpb25zLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHNldEJsZW5kRnVuYyhzcmMsIGRzdCwgc3JjQWxwaGEsIGRzdEFscGhhKSB7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMuZHN0ID0gZHN0O1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5zcmNBbHBoYSA9IHNyY0FscGhhO1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5kc3RBbHBoYSA9IGRzdEFscGhhO1xuICAgICAgICBpZiAoc3JjKSB0aGlzLnRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRCbGVuZEVxdWF0aW9uKG1vZGVSR0IsIG1vZGVBbHBoYSkge1xuICAgICAgICB0aGlzLmJsZW5kRXF1YXRpb24ubW9kZVJHQiA9IG1vZGVSR0I7XG4gICAgICAgIHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEgPSBtb2RlQWxwaGE7XG4gICAgfVxuXG4gICAgYXBwbHlTdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVwdGhUZXN0KSB0aGlzLmdsLnJlbmRlcmVyLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuICAgICAgICBlbHNlIHRoaXMuZ2wucmVuZGVyZXIuZGlzYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAgIGlmICh0aGlzLmN1bGxGYWNlKSB0aGlzLmdsLnJlbmRlcmVyLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XG4gICAgICAgIGVsc2UgdGhpcy5nbC5yZW5kZXJlci5kaXNhYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcblxuICAgICAgICBpZiAodGhpcy5ibGVuZEZ1bmMuc3JjKSB0aGlzLmdsLnJlbmRlcmVyLmVuYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLnJlbmRlcmVyLmRpc2FibGUodGhpcy5nbC5CTEVORCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VsbEZhY2UpIHRoaXMuZ2wucmVuZGVyZXIuc2V0Q3VsbEZhY2UodGhpcy5jdWxsRmFjZSk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0RnJvbnRGYWNlKHRoaXMuZnJvbnRGYWNlKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXREZXB0aE1hc2sodGhpcy5kZXB0aFdyaXRlKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXREZXB0aEZ1bmModGhpcy5kZXB0aEZ1bmMpO1xuICAgICAgICBpZiAodGhpcy5ibGVuZEZ1bmMuc3JjKVxuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXRCbGVuZEZ1bmModGhpcy5ibGVuZEZ1bmMuc3JjLCB0aGlzLmJsZW5kRnVuYy5kc3QsIHRoaXMuYmxlbmRGdW5jLnNyY0FscGhhLCB0aGlzLmJsZW5kRnVuYy5kc3RBbHBoYSk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc2V0QmxlbmRFcXVhdGlvbih0aGlzLmJsZW5kRXF1YXRpb24ubW9kZVJHQiwgdGhpcy5ibGVuZEVxdWF0aW9uLm1vZGVBbHBoYSk7XG4gICAgfVxuXG4gICAgdXNlKHsgZmxpcEZhY2VzID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCB0ZXh0dXJlVW5pdCA9IC0xO1xuICAgICAgICBjb25zdCBwcm9ncmFtQWN0aXZlID0gdGhpcy5nbC5yZW5kZXJlci5zdGF0ZS5jdXJyZW50UHJvZ3JhbSA9PT0gdGhpcy5pZDtcblxuICAgICAgICAvLyBBdm9pZCBnbCBjYWxsIGlmIHByb2dyYW0gYWxyZWFkeSBpbiB1c2VcbiAgICAgICAgaWYgKCFwcm9ncmFtQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuc3RhdGUuY3VycmVudFByb2dyYW0gPSB0aGlzLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IG9ubHkgdGhlIGFjdGl2ZSB1bmlmb3JtcyBmb3VuZCBpbiB0aGUgc2hhZGVyXG4gICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbiwgYWN0aXZlVW5pZm9ybSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVuaWZvcm0gPSB0aGlzLnVuaWZvcm1zW2FjdGl2ZVVuaWZvcm0udW5pZm9ybU5hbWVdO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBhY3RpdmVVbmlmb3JtLm5hbWVDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bmlmb3JtKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgaW4gdW5pZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtID0gdW5pZm9ybVtjb21wb25lbnRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdW5pZm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3YXJuKGBBY3RpdmUgdW5pZm9ybSAke2FjdGl2ZVVuaWZvcm0ubmFtZX0gaGFzIG5vdCBiZWVuIHN1cHBsaWVkYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1bmlmb3JtICYmIHVuaWZvcm0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3YXJuKGAke2FjdGl2ZVVuaWZvcm0ubmFtZX0gdW5pZm9ybSBpcyBtaXNzaW5nIGEgdmFsdWUgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnZhbHVlLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVW5pdCA9IHRleHR1cmVVbml0ICsgMTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRleHR1cmUgbmVlZHMgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgICAgICAgIHVuaWZvcm0udmFsdWUudXBkYXRlKHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VW5pZm9ybSh0aGlzLmdsLCBhY3RpdmVVbmlmb3JtLnR5cGUsIGxvY2F0aW9uLCB0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciB0ZXh0dXJlIGFycmF5cywgc2V0IHVuaWZvcm0gYXMgYW4gYXJyYXkgb2YgdGV4dHVyZSB1bml0cyBpbnN0ZWFkIG9mIGp1c3Qgb25lXG4gICAgICAgICAgICBpZiAodW5pZm9ybS52YWx1ZS5sZW5ndGggJiYgdW5pZm9ybS52YWx1ZVswXS50ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZVVuaXRzID0gW107XG4gICAgICAgICAgICAgICAgdW5pZm9ybS52YWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlVW5pdCA9IHRleHR1cmVVbml0ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUudXBkYXRlKHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZVVuaXRzLnB1c2godGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFVuaWZvcm0odGhpcy5nbCwgYWN0aXZlVW5pZm9ybS50eXBlLCBsb2NhdGlvbiwgdGV4dHVyZVVuaXRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VW5pZm9ybSh0aGlzLmdsLCBhY3RpdmVVbmlmb3JtLnR5cGUsIGxvY2F0aW9uLCB1bmlmb3JtLnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hcHBseVN0YXRlKCk7XG4gICAgICAgIGlmIChmbGlwRmFjZXMpIHRoaXMuZ2wucmVuZGVyZXIuc2V0RnJvbnRGYWNlKHRoaXMuZnJvbnRGYWNlID09PSB0aGlzLmdsLkNDVyA/IHRoaXMuZ2wuQ1cgOiB0aGlzLmdsLkNDVyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm0oZ2wsIHR5cGUsIGxvY2F0aW9uLCB2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoID8gZmxhdHRlbih2YWx1ZSkgOiB2YWx1ZTtcbiAgICBjb25zdCBzZXRWYWx1ZSA9IGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0KGxvY2F0aW9uKTtcblxuICAgIC8vIEF2b2lkIHJlZHVuZGFudCB1bmlmb3JtIGNvbW1hbmRzXG4gICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAoc2V0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBzZXRWYWx1ZS5sZW5ndGggIT09IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY2xvbmUgYXJyYXkgdG8gc3RvcmUgYXMgY2FjaGVcbiAgICAgICAgICAgIGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KGxvY2F0aW9uLCB2YWx1ZS5zbGljZSgwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlzRXF1YWwoc2V0VmFsdWUsIHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FjaGVkIGFycmF5IHZhbHVlc1xuICAgICAgICAgICAgc2V0VmFsdWUuc2V0ID8gc2V0VmFsdWUuc2V0KHZhbHVlKSA6IHNldEFycmF5KHNldFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBnbC5yZW5kZXJlci5zdGF0ZS51bmlmb3JtTG9jYXRpb25zLnNldChsb2NhdGlvbiwgc2V0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNldFZhbHVlID09PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICBnbC5yZW5kZXJlci5zdGF0ZS51bmlmb3JtTG9jYXRpb25zLnNldChsb2NhdGlvbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIDUxMjY6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID8gZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdmFsdWUpIDogZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUXG4gICAgICAgIGNhc2UgMzU2NjQ6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVF9WRUMyXG4gICAgICAgIGNhc2UgMzU2NjU6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVF9WRUMzXG4gICAgICAgIGNhc2UgMzU2NjY6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBGTE9BVF9WRUM0XG4gICAgICAgIGNhc2UgMzU2NzA6IC8vIEJPT0xcbiAgICAgICAgY2FzZSA1MTI0OiAvLyBJTlRcbiAgICAgICAgY2FzZSAzNTY3ODogLy8gU0FNUExFUl8yRFxuICAgICAgICBjYXNlIDM1NjgwOlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA/IGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHZhbHVlKSA6IGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdmFsdWUpOyAvLyBTQU1QTEVSX0NVQkVcbiAgICAgICAgY2FzZSAzNTY3MTogLy8gQk9PTF9WRUMyXG4gICAgICAgIGNhc2UgMzU2Njc6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTJpdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBJTlRfVkVDMlxuICAgICAgICBjYXNlIDM1NjcyOiAvLyBCT09MX1ZFQzNcbiAgICAgICAgY2FzZSAzNTY2ODpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIElOVF9WRUMzXG4gICAgICAgIGNhc2UgMzU2NzM6IC8vIEJPT0xfVkVDNFxuICAgICAgICBjYXNlIDM1NjY5OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHZhbHVlKTsgLy8gSU5UX1ZFQzRcbiAgICAgICAgY2FzZSAzNTY3NDpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUpOyAvLyBGTE9BVF9NQVQyXG4gICAgICAgIGNhc2UgMzU2NzU6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlKTsgLy8gRkxPQVRfTUFUM1xuICAgICAgICBjYXNlIDM1Njc2OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZhbHNlLCB2YWx1ZSk7IC8vIEZMT0FUX01BVDRcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZExpbmVOdW1iZXJzKHN0cmluZykge1xuICAgIGxldCBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaW5lc1tpXSA9IGkgKyAxICsgJzogJyArIGxpbmVzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYSkge1xuICAgIGNvbnN0IGFycmF5TGVuID0gYS5sZW5ndGg7XG4gICAgY29uc3QgdmFsdWVMZW4gPSBhWzBdLmxlbmd0aDtcbiAgICBpZiAodmFsdWVMZW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGE7XG4gICAgY29uc3QgbGVuZ3RoID0gYXJyYXlMZW4gKiB2YWx1ZUxlbjtcbiAgICBsZXQgdmFsdWUgPSBhcnJheUNhY2hlRjMyW2xlbmd0aF07XG4gICAgaWYgKCF2YWx1ZSkgYXJyYXlDYWNoZUYzMltsZW5ndGhdID0gdmFsdWUgPSBuZXcgRmxvYXQzMkFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxlbjsgaSsrKSB2YWx1ZS5zZXQoYVtpXSwgaSAqIHZhbHVlTGVuKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGFycmF5c0VxdWFsKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0QXJyYXkoYSwgYikge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgfVxufVxuXG5sZXQgd2FybkNvdW50ID0gMDtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGlmICh3YXJuQ291bnQgPiAxMDApIHJldHVybjtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgd2FybkNvdW50Kys7XG4gICAgaWYgKHdhcm5Db3VudCA+IDEwMCkgY29uc29sZS53YXJuKCdNb3JlIHRoYW4gMTAwIHByb2dyYW0gd2FybmluZ3MgLSBzdG9wcGluZyBsb2dzLicpO1xufVxuIiwiaW1wb3J0IHsgVmVjMyB9IGZyb20gJy4uL21hdGgvVmVjMy5qcyc7XG5cbi8vIFRPRE86IEhhbmRsZSBjb250ZXh0IGxvc3MgaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvd2ViZ2wvd2lraS9IYW5kbGluZ0NvbnRleHRMb3N0XG5cbi8vIE5vdCBhdXRvbWF0aWMgLSBkZXZzIHRvIHVzZSB0aGVzZSBtZXRob2RzIG1hbnVhbGx5XG4vLyBnbC5jb2xvck1hc2soIGNvbG9yTWFzaywgY29sb3JNYXNrLCBjb2xvck1hc2ssIGNvbG9yTWFzayApO1xuLy8gZ2wuY2xlYXJDb2xvciggciwgZywgYiwgYSApO1xuLy8gZ2wuc3RlbmNpbE1hc2soIHN0ZW5jaWxNYXNrICk7XG4vLyBnbC5zdGVuY2lsRnVuYyggc3RlbmNpbEZ1bmMsIHN0ZW5jaWxSZWYsIHN0ZW5jaWxNYXNrICk7XG4vLyBnbC5zdGVuY2lsT3AoIHN0ZW5jaWxGYWlsLCBzdGVuY2lsWkZhaWwsIHN0ZW5jaWxaUGFzcyApO1xuLy8gZ2wuY2xlYXJTdGVuY2lsKCBzdGVuY2lsICk7XG5cbmNvbnN0IHRlbXBWZWMzID0gLyogQF9fUFVSRV9fICovIG5ldyBWZWMzKCk7XG5sZXQgSUQgPSAxO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgICAgIHdpZHRoID0gMzAwLFxuICAgICAgICBoZWlnaHQgPSAxNTAsXG4gICAgICAgIGRwciA9IDEsXG4gICAgICAgIGFscGhhID0gZmFsc2UsXG4gICAgICAgIGRlcHRoID0gdHJ1ZSxcbiAgICAgICAgc3RlbmNpbCA9IGZhbHNlLFxuICAgICAgICBhbnRpYWxpYXMgPSBmYWxzZSxcbiAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2UsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlciA9IGZhbHNlLFxuICAgICAgICBwb3dlclByZWZlcmVuY2UgPSAnZGVmYXVsdCcsXG4gICAgICAgIGF1dG9DbGVhciA9IHRydWUsXG4gICAgICAgIHdlYmdsID0gMixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHsgYWxwaGEsIGRlcHRoLCBzdGVuY2lsLCBhbnRpYWxpYXMsIHByZW11bHRpcGxpZWRBbHBoYSwgcHJlc2VydmVEcmF3aW5nQnVmZmVyLCBwb3dlclByZWZlcmVuY2UgfTtcbiAgICAgICAgdGhpcy5kcHIgPSBkcHI7XG4gICAgICAgIHRoaXMuYWxwaGEgPSBhbHBoYTtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICAgICAgdGhpcy5zdGVuY2lsID0gc3RlbmNpbDtcbiAgICAgICAgdGhpcy5wcmVtdWx0aXBsaWVkQWxwaGEgPSBwcmVtdWx0aXBsaWVkQWxwaGE7XG4gICAgICAgIHRoaXMuYXV0b0NsZWFyID0gYXV0b0NsZWFyO1xuICAgICAgICB0aGlzLmlkID0gSUQrKztcblxuICAgICAgICAvLyBBdHRlbXB0IFdlYkdMMiB1bmxlc3MgZm9yY2VkIHRvIDEsIGlmIG5vdCBzdXBwb3J0ZWQgZmFsbGJhY2sgdG8gV2ViR0wxXG4gICAgICAgIGlmICh3ZWJnbCA9PT0gMikgdGhpcy5nbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5pc1dlYmdsMiA9ICEhdGhpcy5nbDtcbiAgICAgICAgaWYgKCF0aGlzLmdsKSB0aGlzLmdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywgYXR0cmlidXRlcyk7XG4gICAgICAgIGlmICghdGhpcy5nbCkgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNyZWF0ZSB3ZWJnbCBjb250ZXh0Jyk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHJlbmRlcmVyIHRvIGdsIHNvIHRoYXQgYWxsIGNsYXNzZXMgaGF2ZSBhY2Nlc3MgdG8gaW50ZXJuYWwgc3RhdGUgZnVuY3Rpb25zXG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluaXRpYWxpc2Ugc2l6ZSB2YWx1ZXNcbiAgICAgICAgdGhpcy5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIGdsIHN0YXRlIHN0b3JlcyB0byBhdm9pZCByZWR1bmRhbnQgY2FsbHMgb24gbWV0aG9kcyB1c2VkIGludGVybmFsbHlcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYyA9IHsgc3JjOiB0aGlzLmdsLk9ORSwgZHN0OiB0aGlzLmdsLlpFUk8gfTtcbiAgICAgICAgdGhpcy5zdGF0ZS5ibGVuZEVxdWF0aW9uID0geyBtb2RlUkdCOiB0aGlzLmdsLkZVTkNfQUREIH07XG4gICAgICAgIHRoaXMuc3RhdGUuY3VsbEZhY2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9udEZhY2UgPSB0aGlzLmdsLkNDVztcbiAgICAgICAgdGhpcy5zdGF0ZS5kZXB0aE1hc2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLmRlcHRoRnVuYyA9IHRoaXMuZ2wuTEVTUztcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVtdWx0aXBseUFscGhhID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuZmxpcFkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS51bnBhY2tBbGlnbm1lbnQgPSA0O1xuICAgICAgICB0aGlzLnN0YXRlLmZyYW1lYnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZS52aWV3cG9ydCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IG51bGwsIGhlaWdodDogbnVsbCB9O1xuICAgICAgICB0aGlzLnN0YXRlLnRleHR1cmVVbml0cyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVRleHR1cmVVbml0ID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5ib3VuZEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUudW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50UHJvZ3JhbSA9IG51bGw7XG5cbiAgICAgICAgLy8gc3RvcmUgcmVxdWVzdGVkIGV4dGVuc2lvbnNcbiAgICAgICAgdGhpcy5leHRlbnNpb25zID0ge307XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBleHRyYSBmb3JtYXQgdHlwZXNcbiAgICAgICAgaWYgKHRoaXMuaXNXZWJnbDIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfZmxvYXQnKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXInKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0Jyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXInKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfZWxlbWVudF9pbmRleF91aW50Jyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzJyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignRVhUX3NSR0InKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZXB0aF90ZXh0dXJlJyk7XG4gICAgICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignV0VCR0xfZHJhd19idWZmZXJzJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hc3RjJyk7XG4gICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9jb21wcmVzc2lvbl9icHRjJyk7XG4gICAgICAgIHRoaXMuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycpO1xuICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzEnKTtcbiAgICAgICAgdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycpO1xuICAgICAgICB0aGlzLmdldEV4dGVuc2lvbignV0VCS0lUX1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBtZXRob2QgYWxpYXNlcyB1c2luZyBleHRlbnNpb24gKFdlYkdMMSkgb3IgbmF0aXZlIGlmIGF2YWlsYWJsZSAoV2ViR0wyKVxuICAgICAgICB0aGlzLnZlcnRleEF0dHJpYkRpdmlzb3IgPSB0aGlzLmdldEV4dGVuc2lvbignQU5HTEVfaW5zdGFuY2VkX2FycmF5cycsICd2ZXJ0ZXhBdHRyaWJEaXZpc29yJywgJ3ZlcnRleEF0dHJpYkRpdmlzb3JBTkdMRScpO1xuICAgICAgICB0aGlzLmRyYXdBcnJheXNJbnN0YW5jZWQgPSB0aGlzLmdldEV4dGVuc2lvbignQU5HTEVfaW5zdGFuY2VkX2FycmF5cycsICdkcmF3QXJyYXlzSW5zdGFuY2VkJywgJ2RyYXdBcnJheXNJbnN0YW5jZWRBTkdMRScpO1xuICAgICAgICB0aGlzLmRyYXdFbGVtZW50c0luc3RhbmNlZCA9IHRoaXMuZ2V0RXh0ZW5zaW9uKCdBTkdMRV9pbnN0YW5jZWRfYXJyYXlzJywgJ2RyYXdFbGVtZW50c0luc3RhbmNlZCcsICdkcmF3RWxlbWVudHNJbnN0YW5jZWRBTkdMRScpO1xuICAgICAgICB0aGlzLmNyZWF0ZVZlcnRleEFycmF5ID0gdGhpcy5nZXRFeHRlbnNpb24oJ09FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0JywgJ2NyZWF0ZVZlcnRleEFycmF5JywgJ2NyZWF0ZVZlcnRleEFycmF5T0VTJyk7XG4gICAgICAgIHRoaXMuYmluZFZlcnRleEFycmF5ID0gdGhpcy5nZXRFeHRlbnNpb24oJ09FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0JywgJ2JpbmRWZXJ0ZXhBcnJheScsICdiaW5kVmVydGV4QXJyYXlPRVMnKTtcbiAgICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhBcnJheSA9IHRoaXMuZ2V0RXh0ZW5zaW9uKCdPRVNfdmVydGV4X2FycmF5X29iamVjdCcsICdkZWxldGVWZXJ0ZXhBcnJheScsICdkZWxldGVWZXJ0ZXhBcnJheU9FUycpO1xuICAgICAgICB0aGlzLmRyYXdCdWZmZXJzID0gdGhpcy5nZXRFeHRlbnNpb24oJ1dFQkdMX2RyYXdfYnVmZmVycycsICdkcmF3QnVmZmVycycsICdkcmF3QnVmZmVyc1dFQkdMJyk7XG5cbiAgICAgICAgLy8gU3RvcmUgZGV2aWNlIHBhcmFtZXRlcnNcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5tYXhUZXh0dXJlVW5pdHMgPSB0aGlzLmdsLmdldFBhcmFtZXRlcih0aGlzLmdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLm1heEFuaXNvdHJvcHkgPSB0aGlzLmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJylcbiAgICAgICAgICAgID8gdGhpcy5nbC5nZXRQYXJhbWV0ZXIodGhpcy5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpLk1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVClcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG5cbiAgICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICB0aGlzLmdsLmNhbnZhcy53aWR0aCA9IHdpZHRoICogdGhpcy5kcHI7XG4gICAgICAgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHRoaXMuZHByO1xuXG4gICAgICAgIGlmICghdGhpcy5nbC5jYW52YXMuc3R5bGUpIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmdsLmNhbnZhcy5zdHlsZSwge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0Vmlld3BvcnQod2lkdGgsIGhlaWdodCwgeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpZXdwb3J0LndpZHRoID09PSB3aWR0aCAmJiB0aGlzLnN0YXRlLnZpZXdwb3J0LmhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUudmlld3BvcnQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5zdGF0ZS52aWV3cG9ydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3RhdGUudmlld3BvcnQueCA9IHg7XG4gICAgICAgIHRoaXMuc3RhdGUudmlld3BvcnQueSA9IHk7XG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgc2V0U2Npc3Nvcih3aWR0aCwgaGVpZ2h0LCB4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgdGhpcy5nbC5zY2lzc29yKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIGVuYWJsZShpZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtpZF0gPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUoaWQpO1xuICAgICAgICB0aGlzLnN0YXRlW2lkXSA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzYWJsZShpZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtpZF0gPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZShpZCk7XG4gICAgICAgIHRoaXMuc3RhdGVbaWRdID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRGdW5jKHNyYywgZHN0LCBzcmNBbHBoYSwgZHN0QWxwaGEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ibGVuZEZ1bmMuc3JjID09PSBzcmMgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxlbmRGdW5jLmRzdCA9PT0gZHN0ICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYy5zcmNBbHBoYSA9PT0gc3JjQWxwaGEgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmxlbmRGdW5jLmRzdEFscGhhID09PSBkc3RBbHBoYVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuYmxlbmRGdW5jLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zdGF0ZS5ibGVuZEZ1bmMuZHN0ID0gZHN0O1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYy5zcmNBbHBoYSA9IHNyY0FscGhhO1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRnVuYy5kc3RBbHBoYSA9IGRzdEFscGhhO1xuICAgICAgICBpZiAoc3JjQWxwaGEgIT09IHVuZGVmaW5lZCkgdGhpcy5nbC5ibGVuZEZ1bmNTZXBhcmF0ZShzcmMsIGRzdCwgc3JjQWxwaGEsIGRzdEFscGhhKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLmJsZW5kRnVuYyhzcmMsIGRzdCk7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRFcXVhdGlvbihtb2RlUkdCLCBtb2RlQWxwaGEpIHtcbiAgICAgICAgbW9kZVJHQiA9IG1vZGVSR0IgfHwgdGhpcy5nbC5GVU5DX0FERDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbi5tb2RlUkdCID09PSBtb2RlUkdCICYmIHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEgPT09IG1vZGVBbHBoYSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlLmJsZW5kRXF1YXRpb24ubW9kZVJHQiA9IG1vZGVSR0I7XG4gICAgICAgIHRoaXMuc3RhdGUuYmxlbmRFcXVhdGlvbi5tb2RlQWxwaGEgPSBtb2RlQWxwaGE7XG4gICAgICAgIGlmIChtb2RlQWxwaGEgIT09IHVuZGVmaW5lZCkgdGhpcy5nbC5ibGVuZEVxdWF0aW9uU2VwYXJhdGUobW9kZVJHQiwgbW9kZUFscGhhKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLmJsZW5kRXF1YXRpb24obW9kZVJHQik7XG4gICAgfVxuXG4gICAgc2V0Q3VsbEZhY2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VsbEZhY2UgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuY3VsbEZhY2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5nbC5jdWxsRmFjZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0RnJvbnRGYWNlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZyb250RmFjZSA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9udEZhY2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5nbC5mcm9udEZhY2UodmFsdWUpO1xuICAgIH1cblxuICAgIHNldERlcHRoTWFzayh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXB0aE1hc2sgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuZGVwdGhNYXNrID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhNYXNrKHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXREZXB0aEZ1bmModmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGVwdGhGdW5jID09PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXRlLmRlcHRoRnVuYyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmdsLmRlcHRoRnVuYyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgYWN0aXZlVGV4dHVyZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUZXh0dXJlVW5pdCA9PT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVUZXh0dXJlVW5pdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHZhbHVlKTtcbiAgICB9XG5cbiAgICBiaW5kRnJhbWVidWZmZXIoeyB0YXJnZXQgPSB0aGlzLmdsLkZSQU1FQlVGRkVSLCBidWZmZXIgPSBudWxsIH0gPSB7fSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mcmFtZWJ1ZmZlciA9PT0gYnVmZmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3RhdGUuZnJhbWVidWZmZXIgPSBidWZmZXI7XG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcbiAgICB9XG5cbiAgICBnZXRFeHRlbnNpb24oZXh0ZW5zaW9uLCB3ZWJnbDJGdW5jLCBleHRGdW5jKSB7XG4gICAgICAgIC8vIGlmIHdlYmdsMiBmdW5jdGlvbiBzdXBwb3J0ZWQsIHJldHVybiBmdW5jIGJvdW5kIHRvIGdsIGNvbnRleHRcbiAgICAgICAgaWYgKHdlYmdsMkZ1bmMgJiYgdGhpcy5nbFt3ZWJnbDJGdW5jXSkgcmV0dXJuIHRoaXMuZ2xbd2ViZ2wyRnVuY10uYmluZCh0aGlzLmdsKTtcblxuICAgICAgICAvLyBmZXRjaCBleHRlbnNpb24gb25jZSBvbmx5XG4gICAgICAgIGlmICghdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbl0pIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb25dID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oZXh0ZW5zaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldHVybiBleHRlbnNpb24gaWYgbm8gZnVuY3Rpb24gcmVxdWVzdGVkXG4gICAgICAgIGlmICghd2ViZ2wyRnVuYykgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc1tleHRlbnNpb25dO1xuXG4gICAgICAgIC8vIFJldHVybiBudWxsIGlmIGV4dGVuc2lvbiBub3Qgc3VwcG9ydGVkXG4gICAgICAgIGlmICghdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbl0pIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vIHJldHVybiBleHRlbnNpb24gZnVuY3Rpb24sIGJvdW5kIHRvIGV4dGVuc2lvblxuICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zW2V4dGVuc2lvbl1bZXh0RnVuY10uYmluZCh0aGlzLmV4dGVuc2lvbnNbZXh0ZW5zaW9uXSk7XG4gICAgfVxuXG4gICAgc29ydE9wYXF1ZShhLCBiKSB7XG4gICAgICAgIGlmIChhLnJlbmRlck9yZGVyICE9PSBiLnJlbmRlck9yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5yZW5kZXJPcmRlciAtIGIucmVuZGVyT3JkZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5wcm9ncmFtLmlkICE9PSBiLnByb2dyYW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnByb2dyYW0uaWQgLSBiLnByb2dyYW0uaWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoYS56RGVwdGggIT09IGIuekRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gYS56RGVwdGggLSBiLnpEZXB0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiLmlkIC0gYS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRUcmFuc3BhcmVudChhLCBiKSB7XG4gICAgICAgIGlmIChhLnJlbmRlck9yZGVyICE9PSBiLnJlbmRlck9yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5yZW5kZXJPcmRlciAtIGIucmVuZGVyT3JkZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEuekRlcHRoICE9PSBiLnpEZXB0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGIuekRlcHRoIC0gYS56RGVwdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYi5pZCAtIGEuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0VUkoYSwgYikge1xuICAgICAgICBpZiAoYS5yZW5kZXJPcmRlciAhPT0gYi5yZW5kZXJPcmRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGEucmVuZGVyT3JkZXIgLSBiLnJlbmRlck9yZGVyO1xuICAgICAgICB9IGVsc2UgaWYgKGEucHJvZ3JhbS5pZCAhPT0gYi5wcm9ncmFtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5wcm9ncmFtLmlkIC0gYi5wcm9ncmFtLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGIuaWQgLSBhLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVuZGVyTGlzdCh7IHNjZW5lLCBjYW1lcmEsIGZydXN0dW1DdWxsLCBzb3J0IH0pIHtcbiAgICAgICAgbGV0IHJlbmRlckxpc3QgPSBbXTtcblxuICAgICAgICBpZiAoY2FtZXJhICYmIGZydXN0dW1DdWxsKSBjYW1lcmEudXBkYXRlRnJ1c3R1bSgpO1xuXG4gICAgICAgIC8vIEdldCB2aXNpYmxlXG4gICAgICAgIHNjZW5lLnRyYXZlcnNlKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAoIW5vZGUuZHJhdykgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoZnJ1c3R1bUN1bGwgJiYgbm9kZS5mcnVzdHVtQ3VsbGVkICYmIGNhbWVyYSkge1xuICAgICAgICAgICAgICAgIGlmICghY2FtZXJhLmZydXN0dW1JbnRlcnNlY3RzTWVzaChub2RlKSkgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXJMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICBjb25zdCBvcGFxdWUgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50ID0gW107IC8vIGRlcHRoVGVzdCB0cnVlXG4gICAgICAgICAgICBjb25zdCB1aSA9IFtdOyAvLyBkZXB0aFRlc3QgZmFsc2VcblxuICAgICAgICAgICAgcmVuZGVyTGlzdC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3BsaXQgaW50byB0aGUgMyByZW5kZXIgZ3JvdXBzXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnByb2dyYW0udHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhcXVlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnByb2dyYW0uZGVwdGhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50LnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdWkucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlLnpEZXB0aCA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IGNhbGN1bGF0ZSB6LWRlcHRoIGlmIHJlbmRlck9yZGVyIHVuc2V0IGFuZCBkZXB0aFRlc3QgaXMgdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnJlbmRlck9yZGVyICE9PSAwIHx8ICFub2RlLnByb2dyYW0uZGVwdGhUZXN0IHx8ICFjYW1lcmEpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB6LWRlcHRoXG4gICAgICAgICAgICAgICAgbm9kZS53b3JsZE1hdHJpeC5nZXRUcmFuc2xhdGlvbih0ZW1wVmVjMyk7XG4gICAgICAgICAgICAgICAgdGVtcFZlYzMuYXBwbHlNYXRyaXg0KGNhbWVyYS5wcm9qZWN0aW9uVmlld01hdHJpeCk7XG4gICAgICAgICAgICAgICAgbm9kZS56RGVwdGggPSB0ZW1wVmVjMy56O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG9wYXF1ZS5zb3J0KHRoaXMuc29ydE9wYXF1ZSk7XG4gICAgICAgICAgICB0cmFuc3BhcmVudC5zb3J0KHRoaXMuc29ydFRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgIHVpLnNvcnQodGhpcy5zb3J0VUkpO1xuXG4gICAgICAgICAgICByZW5kZXJMaXN0ID0gb3BhcXVlLmNvbmNhdCh0cmFuc3BhcmVudCwgdWkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKHsgc2NlbmUsIGNhbWVyYSwgdGFyZ2V0ID0gbnVsbCwgdXBkYXRlID0gdHJ1ZSwgc29ydCA9IHRydWUsIGZydXN0dW1DdWxsID0gdHJ1ZSwgY2xlYXIgfSkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgbm8gcmVuZGVyIHRhcmdldCBib3VuZCBzbyBkcmF3cyB0byBjYW52YXNcbiAgICAgICAgICAgIHRoaXMuYmluZEZyYW1lYnVmZmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFZpZXdwb3J0KHRoaXMud2lkdGggKiB0aGlzLmRwciwgdGhpcy5oZWlnaHQgKiB0aGlzLmRwcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBiaW5kIHN1cHBsaWVkIHJlbmRlciB0YXJnZXQgYW5kIHVwZGF0ZSB2aWV3cG9ydFxuICAgICAgICAgICAgdGhpcy5iaW5kRnJhbWVidWZmZXIodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0Vmlld3BvcnQodGFyZ2V0LndpZHRoLCB0YXJnZXQuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGVhciB8fCAodGhpcy5hdXRvQ2xlYXIgJiYgY2xlYXIgIT09IGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGRlcHRoIGJ1ZmZlciB3cml0aW5nIGlzIGVuYWJsZWQgc28gaXQgY2FuIGJlIGNsZWFyZWRcbiAgICAgICAgICAgIGlmICh0aGlzLmRlcHRoICYmICghdGFyZ2V0IHx8IHRhcmdldC5kZXB0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGVwdGhNYXNrKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbC5jbGVhcihcbiAgICAgICAgICAgICAgICAodGhpcy5jb2xvciA/IHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCA6IDApIHxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGVwdGggPyB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQgOiAwKSB8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0ZW5jaWwgPyB0aGlzLmdsLlNURU5DSUxfQlVGRkVSX0JJVCA6IDApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlcyBhbGwgc2NlbmUgZ3JhcGggbWF0cmljZXNcbiAgICAgICAgaWYgKHVwZGF0ZSkgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICAvLyBVcGRhdGUgY2FtZXJhIHNlcGFyYXRlbHksIGluIGNhc2Ugbm90IGluIHNjZW5lIGdyYXBoXG4gICAgICAgIGlmIChjYW1lcmEpIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgICAgIC8vIEdldCByZW5kZXIgbGlzdCAtIGVudGFpbHMgY3VsbGluZyBhbmQgc29ydGluZ1xuICAgICAgICBjb25zdCByZW5kZXJMaXN0ID0gdGhpcy5nZXRSZW5kZXJMaXN0KHsgc2NlbmUsIGNhbWVyYSwgZnJ1c3R1bUN1bGwsIHNvcnQgfSk7XG5cbiAgICAgICAgcmVuZGVyTGlzdC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmRyYXcoeyBjYW1lcmEgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIFRPRE86IGRlbGV0ZSB0ZXh0dXJlXG4vLyBUT0RPOiB1c2UgdGV4U3ViSW1hZ2UyRCBmb3IgdXBkYXRlcyAodmlkZW8gb3Igd2hlbiBsb2FkZWQpXG4vLyBUT0RPOiBuZWVkPyBlbmNvZGluZyA9IGxpbmVhckVuY29kaW5nXG4vLyBUT0RPOiBzdXBwb3J0IG5vbi1jb21wcmVzc2VkIG1pcG1hcHMgdXBsb2Fkc1xuXG5jb25zdCBlbXB0eVBpeGVsID0gbmV3IFVpbnQ4QXJyYXkoNCk7XG5cbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09PSAwO1xufVxuXG5sZXQgSUQgPSAxO1xuXG5leHBvcnQgY2xhc3MgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGdsLFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIHRhcmdldCA9IGdsLlRFWFRVUkVfMkQsXG4gICAgICAgICAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgICAgIGZvcm1hdCA9IGdsLlJHQkEsXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IGZvcm1hdCxcbiAgICAgICAgICAgIHdyYXBTID0gZ2wuQ0xBTVBfVE9fRURHRSxcbiAgICAgICAgICAgIHdyYXBUID0gZ2wuQ0xBTVBfVE9fRURHRSxcbiAgICAgICAgICAgIGdlbmVyYXRlTWlwbWFwcyA9IHRydWUsXG4gICAgICAgICAgICBtaW5GaWx0ZXIgPSBnZW5lcmF0ZU1pcG1hcHMgPyBnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVIgOiBnbC5MSU5FQVIsXG4gICAgICAgICAgICBtYWdGaWx0ZXIgPSBnbC5MSU5FQVIsXG4gICAgICAgICAgICBwcmVtdWx0aXBseUFscGhhID0gZmFsc2UsXG4gICAgICAgICAgICB1bnBhY2tBbGlnbm1lbnQgPSA0LFxuICAgICAgICAgICAgZmxpcFkgPSB0YXJnZXQgPT0gZ2wuVEVYVFVSRV8yRCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaXNvdHJvcHkgPSAwLFxuICAgICAgICAgICAgbGV2ZWwgPSAwLFxuICAgICAgICAgICAgd2lkdGgsIC8vIHVzZWQgZm9yIFJlbmRlclRhcmdldHMgb3IgRGF0YSBUZXh0dXJlc1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGgsXG4gICAgICAgIH0gPSB7fVxuICAgICkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuaWQgPSBJRCsrO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLmludGVybmFsRm9ybWF0ID0gaW50ZXJuYWxGb3JtYXQ7XG4gICAgICAgIHRoaXMubWluRmlsdGVyID0gbWluRmlsdGVyO1xuICAgICAgICB0aGlzLm1hZ0ZpbHRlciA9IG1hZ0ZpbHRlcjtcbiAgICAgICAgdGhpcy53cmFwUyA9IHdyYXBTO1xuICAgICAgICB0aGlzLndyYXBUID0gd3JhcFQ7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVNaXBtYXBzID0gZ2VuZXJhdGVNaXBtYXBzO1xuICAgICAgICB0aGlzLnByZW11bHRpcGx5QWxwaGEgPSBwcmVtdWx0aXBseUFscGhhO1xuICAgICAgICB0aGlzLnVucGFja0FsaWdubWVudCA9IHVucGFja0FsaWdubWVudDtcbiAgICAgICAgdGhpcy5mbGlwWSA9IGZsaXBZO1xuICAgICAgICB0aGlzLmFuaXNvdHJvcHkgPSBNYXRoLm1pbihhbmlzb3Ryb3B5LCB0aGlzLmdsLnJlbmRlcmVyLnBhcmFtZXRlcnMubWF4QW5pc290cm9weSk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgICAgICAgdGhpcy5zdG9yZSA9IHtcbiAgICAgICAgICAgIGltYWdlOiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFsaWFzIGZvciBzdGF0ZSBzdG9yZSB0byBhdm9pZCByZWR1bmRhbnQgY2FsbHMgZm9yIGdsb2JhbCBzdGF0ZVxuICAgICAgICB0aGlzLmdsU3RhdGUgPSB0aGlzLmdsLnJlbmRlcmVyLnN0YXRlO1xuXG4gICAgICAgIC8vIFN0YXRlIHN0b3JlIHRvIGF2b2lkIHJlZHVuZGFudCBjYWxscyBmb3IgcGVyLXRleHR1cmUgc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlLm1pbkZpbHRlciA9IHRoaXMuZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSO1xuICAgICAgICB0aGlzLnN0YXRlLm1hZ0ZpbHRlciA9IHRoaXMuZ2wuTElORUFSO1xuICAgICAgICB0aGlzLnN0YXRlLndyYXBTID0gdGhpcy5nbC5SRVBFQVQ7XG4gICAgICAgIHRoaXMuc3RhdGUud3JhcFQgPSB0aGlzLmdsLlJFUEVBVDtcbiAgICAgICAgdGhpcy5zdGF0ZS5hbmlzb3Ryb3B5ID0gMDtcbiAgICB9XG5cbiAgICBiaW5kKCkge1xuICAgICAgICAvLyBBbHJlYWR5IGJvdW5kIHRvIGFjdGl2ZSB0ZXh0dXJlIHVuaXRcbiAgICAgICAgaWYgKHRoaXMuZ2xTdGF0ZS50ZXh0dXJlVW5pdHNbdGhpcy5nbFN0YXRlLmFjdGl2ZVRleHR1cmVVbml0XSA9PT0gdGhpcy5pZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMudGFyZ2V0LCB0aGlzLnRleHR1cmUpO1xuICAgICAgICB0aGlzLmdsU3RhdGUudGV4dHVyZVVuaXRzW3RoaXMuZ2xTdGF0ZS5hY3RpdmVUZXh0dXJlVW5pdF0gPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0ZXh0dXJlVW5pdCA9IDApIHtcbiAgICAgICAgY29uc3QgbmVlZHNVcGRhdGUgPSAhKHRoaXMuaW1hZ2UgPT09IHRoaXMuc3RvcmUuaW1hZ2UgJiYgIXRoaXMubmVlZHNVcGRhdGUpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRleHR1cmUgaXMgYm91bmQgdG8gaXRzIHRleHR1cmUgdW5pdFxuICAgICAgICBpZiAobmVlZHNVcGRhdGUgfHwgdGhpcy5nbFN0YXRlLnRleHR1cmVVbml0c1t0ZXh0dXJlVW5pdF0gIT09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgdGV4dHVyZSB1bml0IHRvIHBlcmZvcm0gdGV4dHVyZSBmdW5jdGlvbnNcbiAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuYWN0aXZlVGV4dHVyZSh0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmVlZHNVcGRhdGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmZsaXBZICE9PSB0aGlzLmdsU3RhdGUuZmxpcFkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wucGl4ZWxTdG9yZWkodGhpcy5nbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0aGlzLmZsaXBZKTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGF0ZS5mbGlwWSA9IHRoaXMuZmxpcFk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmVtdWx0aXBseUFscGhhICE9PSB0aGlzLmdsU3RhdGUucHJlbXVsdGlwbHlBbHBoYSkge1xuICAgICAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgdGhpcy5wcmVtdWx0aXBseUFscGhhKTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGF0ZS5wcmVtdWx0aXBseUFscGhhID0gdGhpcy5wcmVtdWx0aXBseUFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudW5wYWNrQWxpZ25tZW50ICE9PSB0aGlzLmdsU3RhdGUudW5wYWNrQWxpZ25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX0FMSUdOTUVOVCwgdGhpcy51bnBhY2tBbGlnbm1lbnQpO1xuICAgICAgICAgICAgdGhpcy5nbFN0YXRlLnVucGFja0FsaWdubWVudCA9IHRoaXMudW5wYWNrQWxpZ25tZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWluRmlsdGVyICE9PSB0aGlzLnN0YXRlLm1pbkZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5taW5GaWx0ZXIpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5GaWx0ZXIgPSB0aGlzLm1pbkZpbHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hZ0ZpbHRlciAhPT0gdGhpcy5zdGF0ZS5tYWdGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMubWFnRmlsdGVyKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWFnRmlsdGVyID0gdGhpcy5tYWdGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy53cmFwUyAhPT0gdGhpcy5zdGF0ZS53cmFwUykge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9TLCB0aGlzLndyYXBTKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud3JhcFMgPSB0aGlzLndyYXBTO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMud3JhcFQgIT09IHRoaXMuc3RhdGUud3JhcFQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdGhpcy53cmFwVCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndyYXBUID0gdGhpcy53cmFwVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuaXNvdHJvcHkgJiYgdGhpcy5hbmlzb3Ryb3B5ICE9PSB0aGlzLnN0YXRlLmFuaXNvdHJvcHkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyZihcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCxcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykuVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsXG4gICAgICAgICAgICAgICAgdGhpcy5hbmlzb3Ryb3B5XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbmlzb3Ryb3B5ID0gdGhpcy5hbmlzb3Ryb3B5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgY3ViZSBtYXBzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ggKyBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VbaV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh0aGlzLmltYWdlKSkge1xuICAgICAgICAgICAgICAgIC8vIERhdGEgdGV4dHVyZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLnRhcmdldCwgdGhpcy5sZXZlbCwgdGhpcy5pbnRlcm5hbEZvcm1hdCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHRoaXMuaW1hZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlLmlzQ29tcHJlc3NlZFRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21wcmVzc2VkIHRleHR1cmVcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsZXZlbCA9IDA7IGxldmVsIDwgdGhpcy5pbWFnZS5sZW5ndGg7IGxldmVsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5jb21wcmVzc2VkVGV4SW1hZ2UyRChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVtsZXZlbF0ud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlW2xldmVsXS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVtsZXZlbF0uZGF0YVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmVndWxhciB0ZXh0dXJlXG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMudGFyZ2V0LCB0aGlzLmxldmVsLCB0aGlzLmludGVybmFsRm9ybWF0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCB0aGlzLmltYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVNaXBtYXBzKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIFdlYkdMMSwgaWYgbm90IGEgcG93ZXIgb2YgMiwgdHVybiBvZmYgbWlwcywgc2V0IHdyYXBwaW5nIHRvIGNsYW1wIHRvIGVkZ2UgYW5kIG1pbkZpbHRlciB0byBsaW5lYXJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2wucmVuZGVyZXIuaXNXZWJnbDIgJiYgKCFpc1Bvd2VyT2YyKHRoaXMuaW1hZ2Uud2lkdGgpIHx8ICFpc1Bvd2VyT2YyKHRoaXMuaW1hZ2UuaGVpZ2h0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53cmFwUyA9IHRoaXMud3JhcFQgPSB0aGlzLmdsLkNMQU1QX1RPX0VER0U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluRmlsdGVyID0gdGhpcy5nbC5MSU5FQVI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3Igd2hlbiBkYXRhIGlzIHB1c2hlZCB0byBHUFVcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUgJiYgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICAgICAgICAgICAgICAvLyBVcGxvYWQgZW1wdHkgcGl4ZWwgZm9yIGVhY2ggc2lkZSB3aGlsZSBubyBpbWFnZSB0byBhdm9pZCBlcnJvcnMgd2hpbGUgaW1hZ2Ugb3IgdmlkZW8gbG9hZGluZ1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLlJHQkEsXG4gICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLlJHQkEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eVBpeGVsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2UgaW50ZW50aW9uYWxseSBsZWZ0IG51bGwgZm9yIFJlbmRlclRhcmdldFxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLnRhcmdldCwgdGhpcy5sZXZlbCwgdGhpcy5pbnRlcm5hbEZvcm1hdCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIG51bGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVcGxvYWQgZW1wdHkgcGl4ZWwgaWYgbm8gaW1hZ2UgdG8gYXZvaWQgZXJyb3JzIHdoaWxlIGltYWdlIG9yIHZpZGVvIGxvYWRpbmdcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy50YXJnZXQsIDAsIHRoaXMuZ2wuUkdCQSwgMSwgMSwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIGVtcHR5UGl4ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlYzMgfSBmcm9tICcuLi9tYXRoL1ZlYzMuanMnO1xuaW1wb3J0IHsgUXVhdCB9IGZyb20gJy4uL21hdGgvUXVhdC5qcyc7XG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi4vbWF0aC9NYXQ0LmpzJztcbmltcG9ydCB7IEV1bGVyIH0gZnJvbSAnLi4vbWF0aC9FdWxlci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBNYXQ0KCk7XG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLndvcmxkTWF0cml4TmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlYzMoKTtcbiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uID0gbmV3IFF1YXQoKTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBWZWMzKDEpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gbmV3IEV1bGVyKCk7XG4gICAgICAgIHRoaXMudXAgPSBuZXcgVmVjMygwLCAxLCAwKTtcblxuICAgICAgICB0aGlzLnJvdGF0aW9uLm9uQ2hhbmdlID0gKCkgPT4gdGhpcy5xdWF0ZXJuaW9uLmZyb21FdWxlcih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uLm9uQ2hhbmdlID0gKCkgPT4gdGhpcy5yb3RhdGlvbi5mcm9tUXVhdGVybmlvbih0aGlzLnF1YXRlcm5pb24pO1xuICAgIH1cblxuICAgIHNldFBhcmVudChwYXJlbnQsIG5vdGlmeVBhcmVudCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmIHBhcmVudCAhPT0gdGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGlmIChub3RpZnlQYXJlbnQgJiYgcGFyZW50KSBwYXJlbnQuYWRkQ2hpbGQodGhpcywgZmFsc2UpO1xuICAgIH1cblxuICAgIGFkZENoaWxkKGNoaWxkLCBub3RpZnlDaGlsZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKCF+dGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSkgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgaWYgKG5vdGlmeUNoaWxkKSBjaGlsZC5zZXRQYXJlbnQodGhpcywgZmFsc2UpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkLCBub3RpZnlDaGlsZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKCEhfnRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCkpIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCksIDEpO1xuICAgICAgICBpZiAobm90aWZ5Q2hpbGQpIGNoaWxkLnNldFBhcmVudChudWxsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWF0cml4V29ybGQoZm9yY2UpIHtcbiAgICAgICAgaWYgKHRoaXMubWF0cml4QXV0b1VwZGF0ZSkgdGhpcy51cGRhdGVNYXRyaXgoKTtcbiAgICAgICAgaWYgKHRoaXMud29ybGRNYXRyaXhOZWVkc1VwZGF0ZSB8fCBmb3JjZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50ID09PSBudWxsKSB0aGlzLndvcmxkTWF0cml4LmNvcHkodGhpcy5tYXRyaXgpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLndvcmxkTWF0cml4Lm11bHRpcGx5KHRoaXMucGFyZW50LndvcmxkTWF0cml4LCB0aGlzLm1hdHJpeCk7XG4gICAgICAgICAgICB0aGlzLndvcmxkTWF0cml4TmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0udXBkYXRlTWF0cml4V29ybGQoZm9yY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTWF0cml4KCkge1xuICAgICAgICB0aGlzLm1hdHJpeC5jb21wb3NlKHRoaXMucXVhdGVybmlvbiwgdGhpcy5wb3NpdGlvbiwgdGhpcy5zY2FsZSk7XG4gICAgICAgIHRoaXMud29ybGRNYXRyaXhOZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdHJhdmVyc2UoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaW4gY2FsbGJhY2sgdG8gc3RvcCB0cmF2ZXJzaW5nIGNoaWxkcmVuXG4gICAgICAgIGlmIChjYWxsYmFjayh0aGlzKSkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnRyYXZlcnNlKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29tcG9zZSgpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguZ2V0VHJhbnNsYXRpb24odGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMubWF0cml4LmdldFJvdGF0aW9uKHRoaXMucXVhdGVybmlvbik7XG4gICAgICAgIHRoaXMubWF0cml4LmdldFNjYWxpbmcodGhpcy5zY2FsZSk7XG4gICAgICAgIHRoaXMucm90YXRpb24uZnJvbVF1YXRlcm5pb24odGhpcy5xdWF0ZXJuaW9uKTtcbiAgICB9XG5cbiAgICBsb29rQXQodGFyZ2V0LCBpbnZlcnQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoaW52ZXJ0KSB0aGlzLm1hdHJpeC5sb29rQXQodGhpcy5wb3NpdGlvbiwgdGFyZ2V0LCB0aGlzLnVwKTtcbiAgICAgICAgZWxzZSB0aGlzLm1hdHJpeC5sb29rQXQodGFyZ2V0LCB0aGlzLnBvc2l0aW9uLCB0aGlzLnVwKTtcbiAgICAgICAgdGhpcy5tYXRyaXguZ2V0Um90YXRpb24odGhpcy5xdWF0ZXJuaW9uKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbi5mcm9tUXVhdGVybmlvbih0aGlzLnF1YXRlcm5pb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi4vY29yZS9HZW9tZXRyeS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBQbGFuZSBleHRlbmRzIEdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgeyB3aWR0aCA9IDEsIGhlaWdodCA9IDEsIHdpZHRoU2VnbWVudHMgPSAxLCBoZWlnaHRTZWdtZW50cyA9IDEsIGF0dHJpYnV0ZXMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgd1NlZ3MgPSB3aWR0aFNlZ21lbnRzO1xuICAgICAgICBjb25zdCBoU2VncyA9IGhlaWdodFNlZ21lbnRzO1xuXG4gICAgICAgIC8vIERldGVybWluZSBsZW5ndGggb2YgYXJyYXlzXG4gICAgICAgIGNvbnN0IG51bSA9ICh3U2VncyArIDEpICogKGhTZWdzICsgMSk7XG4gICAgICAgIGNvbnN0IG51bUluZGljZXMgPSB3U2VncyAqIGhTZWdzICogNjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBlbXB0eSBhcnJheXMgb25jZVxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtICogMyk7XG4gICAgICAgIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkobnVtICogMyk7XG4gICAgICAgIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAyKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBudW1JbmRpY2VzID4gNjU1MzYgPyBuZXcgVWludDMyQXJyYXkobnVtSW5kaWNlcykgOiBuZXcgVWludDE2QXJyYXkobnVtSW5kaWNlcyk7XG5cbiAgICAgICAgUGxhbmUuYnVpbGRQbGFuZShwb3NpdGlvbiwgbm9ybWFsLCB1diwgaW5kZXgsIHdpZHRoLCBoZWlnaHQsIDAsIHdTZWdzLCBoU2Vncyk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiBwb3NpdGlvbiB9LFxuICAgICAgICAgICAgbm9ybWFsOiB7IHNpemU6IDMsIGRhdGE6IG5vcm1hbCB9LFxuICAgICAgICAgICAgdXY6IHsgc2l6ZTogMiwgZGF0YTogdXYgfSxcbiAgICAgICAgICAgIGluZGV4OiB7IGRhdGE6IGluZGV4IH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cGVyKGdsLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYnVpbGRQbGFuZShwb3NpdGlvbiwgbm9ybWFsLCB1diwgaW5kZXgsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCB3U2VncywgaFNlZ3MsIHUgPSAwLCB2ID0gMSwgdyA9IDIsIHVEaXIgPSAxLCB2RGlyID0gLTEsIGkgPSAwLCBpaSA9IDApIHtcbiAgICAgICAgY29uc3QgaW8gPSBpO1xuICAgICAgICBjb25zdCBzZWdXID0gd2lkdGggLyB3U2VncztcbiAgICAgICAgY29uc3Qgc2VnSCA9IGhlaWdodCAvIGhTZWdzO1xuXG4gICAgICAgIGZvciAobGV0IGl5ID0gMDsgaXkgPD0gaFNlZ3M7IGl5KyspIHtcbiAgICAgICAgICAgIGxldCB5ID0gaXkgKiBzZWdIIC0gaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGZvciAobGV0IGl4ID0gMDsgaXggPD0gd1NlZ3M7IGl4KyssIGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gaXggKiBzZWdXIC0gd2lkdGggLyAyO1xuXG4gICAgICAgICAgICAgICAgcG9zaXRpb25baSAqIDMgKyB1XSA9IHggKiB1RGlyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW2kgKiAzICsgdl0gPSB5ICogdkRpcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltpICogMyArIHddID0gZGVwdGggLyAyO1xuXG4gICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgdV0gPSAwO1xuICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIHZdID0gMDtcbiAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyB3XSA9IGRlcHRoID49IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICAgICAgICB1dltpICogMl0gPSBpeCAvIHdTZWdzO1xuICAgICAgICAgICAgICAgIHV2W2kgKiAyICsgMV0gPSAxIC0gaXkgLyBoU2VncztcblxuICAgICAgICAgICAgICAgIGlmIChpeSA9PT0gaFNlZ3MgfHwgaXggPT09IHdTZWdzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IGlvICsgaXggKyBpeSAqICh3U2VncyArIDEpO1xuICAgICAgICAgICAgICAgIGxldCBiID0gaW8gKyBpeCArIChpeSArIDEpICogKHdTZWdzICsgMSk7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBpbyArIGl4ICsgKGl5ICsgMSkgKiAod1NlZ3MgKyAxKSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBpbyArIGl4ICsgaXkgKiAod1NlZ3MgKyAxKSArIDE7XG5cbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDZdID0gYTtcbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDYgKyAxXSA9IGI7XG4gICAgICAgICAgICAgICAgaW5kZXhbaWkgKiA2ICsgMl0gPSBkO1xuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNiArIDNdID0gYjtcbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDYgKyA0XSA9IGM7XG4gICAgICAgICAgICAgICAgaW5kZXhbaWkgKiA2ICsgNV0gPSBkO1xuICAgICAgICAgICAgICAgIGlpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBFdWxlckZ1bmMgZnJvbSAnLi9mdW5jdGlvbnMvRXVsZXJGdW5jLmpzJztcbmltcG9ydCB7IE1hdDQgfSBmcm9tICcuL01hdDQuanMnO1xuXG5jb25zdCB0bXBNYXQ0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXQ0KCk7XG5cbmV4cG9ydCBjbGFzcyBFdWxlciBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IHgsIHogPSB4LCBvcmRlciA9ICdZWFonKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIHopO1xuICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSAoKSA9PiB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH1cblxuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxXTtcbiAgICB9XG5cbiAgICBnZXQgeigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMl07XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzBdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHNldCB5KHYpIHtcbiAgICAgICAgdGhpc1sxXSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBzZXQgeih2KSB7XG4gICAgICAgIHRoaXNbMl0gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgc2V0KHgsIHkgPSB4LCB6ID0geCkge1xuICAgICAgICBpZiAoeC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkoeCk7XG4gICAgICAgIHRoaXNbMF0gPSB4O1xuICAgICAgICB0aGlzWzFdID0geTtcbiAgICAgICAgdGhpc1syXSA9IHo7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSh2KSB7XG4gICAgICAgIHRoaXNbMF0gPSB2WzBdO1xuICAgICAgICB0aGlzWzFdID0gdlsxXTtcbiAgICAgICAgdGhpc1syXSA9IHZbMl07XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVvcmRlcihvcmRlcikge1xuICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbVJvdGF0aW9uTWF0cml4KG0sIG9yZGVyID0gdGhpcy5vcmRlcikge1xuICAgICAgICBFdWxlckZ1bmMuZnJvbVJvdGF0aW9uTWF0cml4KHRoaXMsIG0sIG9yZGVyKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUXVhdGVybmlvbihxLCBvcmRlciA9IHRoaXMub3JkZXIpIHtcbiAgICAgICAgdG1wTWF0NC5mcm9tUXVhdGVybmlvbihxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVJvdGF0aW9uTWF0cml4KHRtcE1hdDQsIG9yZGVyKTtcbiAgICB9XG5cbiAgICBmcm9tQXJyYXkoYSwgbyA9IDApIHtcbiAgICAgICAgdGhpc1swXSA9IGFbb107XG4gICAgICAgIHRoaXNbMV0gPSBhW28gKyAxXTtcbiAgICAgICAgdGhpc1syXSA9IGFbbyArIDJdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b0FycmF5KGEgPSBbXSwgbyA9IDApIHtcbiAgICAgICAgYVtvXSA9IHRoaXNbMF07XG4gICAgICAgIGFbbyArIDFdID0gdGhpc1sxXTtcbiAgICAgICAgYVtvICsgMl0gPSB0aGlzWzJdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBNYXQzRnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9NYXQzRnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXQzIGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKG0wMCA9IDEsIG0wMSA9IDAsIG0wMiA9IDAsIG0xMCA9IDAsIG0xMSA9IDEsIG0xMiA9IDAsIG0yMCA9IDAsIG0yMSA9IDAsIG0yMiA9IDEpIHtcbiAgICAgICAgc3VwZXIobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldChtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gICAgICAgIGlmIChtMDAubGVuZ3RoKSByZXR1cm4gdGhpcy5jb3B5KG0wMCk7XG4gICAgICAgIE1hdDNGdW5jLnNldCh0aGlzLCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDNGdW5jLnRyYW5zbGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDNGdW5jLnJvdGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMuc2NhbGUodGhpcywgbSwgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KG1hLCBtYikge1xuICAgICAgICBpZiAobWIpIHtcbiAgICAgICAgICAgIE1hdDNGdW5jLm11bHRpcGx5KHRoaXMsIG1hLCBtYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNYXQzRnVuYy5tdWx0aXBseSh0aGlzLCB0aGlzLCBtYSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIE1hdDNGdW5jLmlkZW50aXR5KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KG0pIHtcbiAgICAgICAgTWF0M0Z1bmMuY29weSh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbU1hdHJpeDQobSkge1xuICAgICAgICBNYXQzRnVuYy5mcm9tTWF0NCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbVF1YXRlcm5pb24ocSkge1xuICAgICAgICBNYXQzRnVuYy5mcm9tUXVhdCh0aGlzLCBxKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbUJhc2lzKHZlYzNhLCB2ZWMzYiwgdmVjM2MpIHtcbiAgICAgICAgdGhpcy5zZXQodmVjM2FbMF0sIHZlYzNhWzFdLCB2ZWMzYVsyXSwgdmVjM2JbMF0sIHZlYzNiWzFdLCB2ZWMzYlsyXSwgdmVjM2NbMF0sIHZlYzNjWzFdLCB2ZWMzY1syXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UobSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMuaW52ZXJ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXROb3JtYWxNYXRyaXgobSkge1xuICAgICAgICBNYXQzRnVuYy5ub3JtYWxGcm9tTWF0NCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgTWF0NEZ1bmMgZnJvbSAnLi9mdW5jdGlvbnMvTWF0NEZ1bmMuanMnO1xuXG5leHBvcnQgY2xhc3MgTWF0NCBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbTAwID0gMSxcbiAgICAgICAgbTAxID0gMCxcbiAgICAgICAgbTAyID0gMCxcbiAgICAgICAgbTAzID0gMCxcbiAgICAgICAgbTEwID0gMCxcbiAgICAgICAgbTExID0gMSxcbiAgICAgICAgbTEyID0gMCxcbiAgICAgICAgbTEzID0gMCxcbiAgICAgICAgbTIwID0gMCxcbiAgICAgICAgbTIxID0gMCxcbiAgICAgICAgbTIyID0gMSxcbiAgICAgICAgbTIzID0gMCxcbiAgICAgICAgbTMwID0gMCxcbiAgICAgICAgbTMxID0gMCxcbiAgICAgICAgbTMyID0gMCxcbiAgICAgICAgbTMzID0gMVxuICAgICkge1xuICAgICAgICBzdXBlcihtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMTJdO1xuICAgIH1cblxuICAgIGdldCB5KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxM107XG4gICAgfVxuXG4gICAgZ2V0IHooKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzE0XTtcbiAgICB9XG5cbiAgICBnZXQgdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMTVdO1xuICAgIH1cblxuICAgIHNldCB4KHYpIHtcbiAgICAgICAgdGhpc1sxMl0gPSB2O1xuICAgIH1cblxuICAgIHNldCB5KHYpIHtcbiAgICAgICAgdGhpc1sxM10gPSB2O1xuICAgIH1cblxuICAgIHNldCB6KHYpIHtcbiAgICAgICAgdGhpc1sxNF0gPSB2O1xuICAgIH1cblxuICAgIHNldCB3KHYpIHtcbiAgICAgICAgdGhpc1sxNV0gPSB2O1xuICAgIH1cblxuICAgIHNldChtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgICAgICAgaWYgKG0wMC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkobTAwKTtcbiAgICAgICAgTWF0NEZ1bmMuc2V0KHRoaXMsIG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZSh2LCBtID0gdGhpcykge1xuICAgICAgICBNYXQ0RnVuYy50cmFuc2xhdGUodGhpcywgbSwgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZSh2LCBheGlzLCBtID0gdGhpcykge1xuICAgICAgICBNYXQ0RnVuYy5yb3RhdGUodGhpcywgbSwgdiwgYXhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDRGdW5jLnNjYWxlKHRoaXMsIG0sIHR5cGVvZiB2ID09PSAnbnVtYmVyJyA/IFt2LCB2LCB2XSA6IHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGQobWEsIG1iKSB7XG4gICAgICAgIGlmIChtYikgTWF0NEZ1bmMuYWRkKHRoaXMsIG1hLCBtYik7XG4gICAgICAgIGVsc2UgTWF0NEZ1bmMuYWRkKHRoaXMsIHRoaXMsIG1hKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3ViKG1hLCBtYikge1xuICAgICAgICBpZiAobWIpIE1hdDRGdW5jLnN1YnRyYWN0KHRoaXMsIG1hLCBtYik7XG4gICAgICAgIGVsc2UgTWF0NEZ1bmMuc3VidHJhY3QodGhpcywgdGhpcywgbWEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShtYSwgbWIpIHtcbiAgICAgICAgaWYgKCFtYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE1hdDRGdW5jLm11bHRpcGx5U2NhbGFyKHRoaXMsIHRoaXMsIG1hKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYikge1xuICAgICAgICAgICAgTWF0NEZ1bmMubXVsdGlwbHkodGhpcywgbWEsIG1iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE1hdDRGdW5jLm11bHRpcGx5KHRoaXMsIHRoaXMsIG1hKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZGVudGl0eSgpIHtcbiAgICAgICAgTWF0NEZ1bmMuaWRlbnRpdHkodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkobSkge1xuICAgICAgICBNYXQ0RnVuYy5jb3B5KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUGVyc3BlY3RpdmUoeyBmb3YsIGFzcGVjdCwgbmVhciwgZmFyIH0gPSB7fSkge1xuICAgICAgICBNYXQ0RnVuYy5wZXJzcGVjdGl2ZSh0aGlzLCBmb3YsIGFzcGVjdCwgbmVhciwgZmFyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbU9ydGhvZ29uYWwoeyBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciB9KSB7XG4gICAgICAgIE1hdDRGdW5jLm9ydGhvKHRoaXMsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbVF1YXRlcm5pb24ocSkge1xuICAgICAgICBNYXQ0RnVuYy5mcm9tUXVhdCh0aGlzLCBxKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24odikge1xuICAgICAgICB0aGlzLnggPSB2WzBdO1xuICAgICAgICB0aGlzLnkgPSB2WzFdO1xuICAgICAgICB0aGlzLnogPSB2WzJdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbnZlcnNlKG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDRGdW5jLmludmVydCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcG9zZShxLCBwb3MsIHNjYWxlKSB7XG4gICAgICAgIE1hdDRGdW5jLmZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGUodGhpcywgcSwgcG9zLCBzY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFJvdGF0aW9uKHEpIHtcbiAgICAgICAgTWF0NEZ1bmMuZ2V0Um90YXRpb24ocSwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFRyYW5zbGF0aW9uKHBvcykge1xuICAgICAgICBNYXQ0RnVuYy5nZXRUcmFuc2xhdGlvbihwb3MsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRTY2FsaW5nKHNjYWxlKSB7XG4gICAgICAgIE1hdDRGdW5jLmdldFNjYWxpbmcoc2NhbGUsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRNYXhTY2FsZU9uQXhpcygpIHtcbiAgICAgICAgcmV0dXJuIE1hdDRGdW5jLmdldE1heFNjYWxlT25BeGlzKHRoaXMpO1xuICAgIH1cblxuICAgIGxvb2tBdChleWUsIHRhcmdldCwgdXApIHtcbiAgICAgICAgTWF0NEZ1bmMudGFyZ2V0VG8odGhpcywgZXllLCB0YXJnZXQsIHVwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnQoKSB7XG4gICAgICAgIHJldHVybiBNYXQ0RnVuYy5kZXRlcm1pbmFudCh0aGlzKTtcbiAgICB9XG5cbiAgICBmcm9tQXJyYXkoYSwgbyA9IDApIHtcbiAgICAgICAgdGhpc1swXSA9IGFbb107XG4gICAgICAgIHRoaXNbMV0gPSBhW28gKyAxXTtcbiAgICAgICAgdGhpc1syXSA9IGFbbyArIDJdO1xuICAgICAgICB0aGlzWzNdID0gYVtvICsgM107XG4gICAgICAgIHRoaXNbNF0gPSBhW28gKyA0XTtcbiAgICAgICAgdGhpc1s1XSA9IGFbbyArIDVdO1xuICAgICAgICB0aGlzWzZdID0gYVtvICsgNl07XG4gICAgICAgIHRoaXNbN10gPSBhW28gKyA3XTtcbiAgICAgICAgdGhpc1s4XSA9IGFbbyArIDhdO1xuICAgICAgICB0aGlzWzldID0gYVtvICsgOV07XG4gICAgICAgIHRoaXNbMTBdID0gYVtvICsgMTBdO1xuICAgICAgICB0aGlzWzExXSA9IGFbbyArIDExXTtcbiAgICAgICAgdGhpc1sxMl0gPSBhW28gKyAxMl07XG4gICAgICAgIHRoaXNbMTNdID0gYVtvICsgMTNdO1xuICAgICAgICB0aGlzWzE0XSA9IGFbbyArIDE0XTtcbiAgICAgICAgdGhpc1sxNV0gPSBhW28gKyAxNV07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvQXJyYXkoYSA9IFtdLCBvID0gMCkge1xuICAgICAgICBhW29dID0gdGhpc1swXTtcbiAgICAgICAgYVtvICsgMV0gPSB0aGlzWzFdO1xuICAgICAgICBhW28gKyAyXSA9IHRoaXNbMl07XG4gICAgICAgIGFbbyArIDNdID0gdGhpc1szXTtcbiAgICAgICAgYVtvICsgNF0gPSB0aGlzWzRdO1xuICAgICAgICBhW28gKyA1XSA9IHRoaXNbNV07XG4gICAgICAgIGFbbyArIDZdID0gdGhpc1s2XTtcbiAgICAgICAgYVtvICsgN10gPSB0aGlzWzddO1xuICAgICAgICBhW28gKyA4XSA9IHRoaXNbOF07XG4gICAgICAgIGFbbyArIDldID0gdGhpc1s5XTtcbiAgICAgICAgYVtvICsgMTBdID0gdGhpc1sxMF07XG4gICAgICAgIGFbbyArIDExXSA9IHRoaXNbMTFdO1xuICAgICAgICBhW28gKyAxMl0gPSB0aGlzWzEyXTtcbiAgICAgICAgYVtvICsgMTNdID0gdGhpc1sxM107XG4gICAgICAgIGFbbyArIDE0XSA9IHRoaXNbMTRdO1xuICAgICAgICBhW28gKyAxNV0gPSB0aGlzWzE1XTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUXVhdEZ1bmMgZnJvbSAnLi9mdW5jdGlvbnMvUXVhdEZ1bmMuanMnO1xuXG5leHBvcnQgY2xhc3MgUXVhdCBleHRlbmRzIEFycmF5IHtcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCB3ID0gMSkge1xuICAgICAgICBzdXBlcih4LCB5LCB6LCB3KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9ICgpID0+IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgfVxuXG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzFdO1xuICAgIH1cblxuICAgIGdldCB6KCkge1xuICAgICAgICByZXR1cm4gdGhpc1syXTtcbiAgICB9XG5cbiAgICBnZXQgdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbM107XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzBdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHNldCB5KHYpIHtcbiAgICAgICAgdGhpc1sxXSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBzZXQgeih2KSB7XG4gICAgICAgIHRoaXNbMl0gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgc2V0IHcodikge1xuICAgICAgICB0aGlzWzNdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIGlkZW50aXR5KCkge1xuICAgICAgICBRdWF0RnVuYy5pZGVudGl0eSh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXQoeCwgeSwgeiwgdykge1xuICAgICAgICBpZiAoeC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkoeCk7XG4gICAgICAgIFF1YXRGdW5jLnNldCh0aGlzLCB4LCB5LCB6LCB3KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGVYKGEpIHtcbiAgICAgICAgUXVhdEZ1bmMucm90YXRlWCh0aGlzLCB0aGlzLCBhKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGVZKGEpIHtcbiAgICAgICAgUXVhdEZ1bmMucm90YXRlWSh0aGlzLCB0aGlzLCBhKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGVaKGEpIHtcbiAgICAgICAgUXVhdEZ1bmMucm90YXRlWih0aGlzLCB0aGlzLCBhKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpbnZlcnNlKHEgPSB0aGlzKSB7XG4gICAgICAgIFF1YXRGdW5jLmludmVydCh0aGlzLCBxKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25qdWdhdGUocSA9IHRoaXMpIHtcbiAgICAgICAgUXVhdEZ1bmMuY29uanVnYXRlKHRoaXMsIHEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkocSkge1xuICAgICAgICBRdWF0RnVuYy5jb3B5KHRoaXMsIHEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZShxID0gdGhpcykge1xuICAgICAgICBRdWF0RnVuYy5ub3JtYWxpemUodGhpcywgcSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbXVsdGlwbHkocUEsIHFCKSB7XG4gICAgICAgIGlmIChxQikge1xuICAgICAgICAgICAgUXVhdEZ1bmMubXVsdGlwbHkodGhpcywgcUEsIHFCKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFF1YXRGdW5jLm11bHRpcGx5KHRoaXMsIHRoaXMsIHFBKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRvdCh2KSB7XG4gICAgICAgIHJldHVybiBRdWF0RnVuYy5kb3QodGhpcywgdik7XG4gICAgfVxuXG4gICAgZnJvbU1hdHJpeDMobWF0cml4Mykge1xuICAgICAgICBRdWF0RnVuYy5mcm9tTWF0Myh0aGlzLCBtYXRyaXgzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tRXVsZXIoZXVsZXIpIHtcbiAgICAgICAgUXVhdEZ1bmMuZnJvbUV1bGVyKHRoaXMsIGV1bGVyLCBldWxlci5vcmRlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21BeGlzQW5nbGUoYXhpcywgYSkge1xuICAgICAgICBRdWF0RnVuYy5zZXRBeGlzQW5nbGUodGhpcywgYXhpcywgYSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2xlcnAocSwgdCkge1xuICAgICAgICBRdWF0RnVuYy5zbGVycCh0aGlzLCB0aGlzLCBxLCB0KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tQXJyYXkoYSwgbyA9IDApIHtcbiAgICAgICAgdGhpc1swXSA9IGFbb107XG4gICAgICAgIHRoaXNbMV0gPSBhW28gKyAxXTtcbiAgICAgICAgdGhpc1syXSA9IGFbbyArIDJdO1xuICAgICAgICB0aGlzWzNdID0gYVtvICsgM107XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9BcnJheShhID0gW10sIG8gPSAwKSB7XG4gICAgICAgIGFbb10gPSB0aGlzWzBdO1xuICAgICAgICBhW28gKyAxXSA9IHRoaXNbMV07XG4gICAgICAgIGFbbyArIDJdID0gdGhpc1syXTtcbiAgICAgICAgYVtvICsgM10gPSB0aGlzWzNdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBWZWMzRnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9WZWMzRnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBWZWMzIGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0geCwgeiA9IHgpIHtcbiAgICAgICAgc3VwZXIoeCwgeSwgeik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9XG5cbiAgICBnZXQgeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMV07XG4gICAgfVxuXG4gICAgZ2V0IHooKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzJdO1xuICAgIH1cblxuICAgIHNldCB4KHYpIHtcbiAgICAgICAgdGhpc1swXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHkodikge1xuICAgICAgICB0aGlzWzFdID0gdjtcbiAgICB9XG5cbiAgICBzZXQgeih2KSB7XG4gICAgICAgIHRoaXNbMl0gPSB2O1xuICAgIH1cblxuICAgIHNldCh4LCB5ID0geCwgeiA9IHgpIHtcbiAgICAgICAgaWYgKHgubGVuZ3RoKSByZXR1cm4gdGhpcy5jb3B5KHgpO1xuICAgICAgICBWZWMzRnVuYy5zZXQodGhpcywgeCwgeSwgeik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkodikge1xuICAgICAgICBWZWMzRnVuYy5jb3B5KHRoaXMsIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGQodmEsIHZiKSB7XG4gICAgICAgIGlmICh2YikgVmVjM0Z1bmMuYWRkKHRoaXMsIHZhLCB2Yik7XG4gICAgICAgIGVsc2UgVmVjM0Z1bmMuYWRkKHRoaXMsIHRoaXMsIHZhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3ViKHZhLCB2Yikge1xuICAgICAgICBpZiAodmIpIFZlYzNGdW5jLnN1YnRyYWN0KHRoaXMsIHZhLCB2Yik7XG4gICAgICAgIGVsc2UgVmVjM0Z1bmMuc3VidHJhY3QodGhpcywgdGhpcywgdmEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtdWx0aXBseSh2KSB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCkgVmVjM0Z1bmMubXVsdGlwbHkodGhpcywgdGhpcywgdik7XG4gICAgICAgIGVsc2UgVmVjM0Z1bmMuc2NhbGUodGhpcywgdGhpcywgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpdmlkZSh2KSB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCkgVmVjM0Z1bmMuZGl2aWRlKHRoaXMsIHRoaXMsIHYpO1xuICAgICAgICBlbHNlIFZlYzNGdW5jLnNjYWxlKHRoaXMsIHRoaXMsIDEgLyB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW52ZXJzZSh2ID0gdGhpcykge1xuICAgICAgICBWZWMzRnVuYy5pbnZlcnNlKHRoaXMsIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDYW4ndCB1c2UgJ2xlbmd0aCcgYXMgQXJyYXkucHJvdG90eXBlIHVzZXMgaXRcbiAgICBsZW4oKSB7XG4gICAgICAgIHJldHVybiBWZWMzRnVuYy5sZW5ndGgodGhpcyk7XG4gICAgfVxuXG4gICAgZGlzdGFuY2Uodikge1xuICAgICAgICBpZiAodikgcmV0dXJuIFZlYzNGdW5jLmRpc3RhbmNlKHRoaXMsIHYpO1xuICAgICAgICBlbHNlIHJldHVybiBWZWMzRnVuYy5sZW5ndGgodGhpcyk7XG4gICAgfVxuXG4gICAgc3F1YXJlZExlbigpIHtcbiAgICAgICAgcmV0dXJuIFZlYzNGdW5jLnNxdWFyZWRMZW5ndGgodGhpcyk7XG4gICAgfVxuXG4gICAgc3F1YXJlZERpc3RhbmNlKHYpIHtcbiAgICAgICAgaWYgKHYpIHJldHVybiBWZWMzRnVuYy5zcXVhcmVkRGlzdGFuY2UodGhpcywgdik7XG4gICAgICAgIGVsc2UgcmV0dXJuIFZlYzNGdW5jLnNxdWFyZWRMZW5ndGgodGhpcyk7XG4gICAgfVxuXG4gICAgbmVnYXRlKHYgPSB0aGlzKSB7XG4gICAgICAgIFZlYzNGdW5jLm5lZ2F0ZSh0aGlzLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY3Jvc3ModmEsIHZiKSB7XG4gICAgICAgIGlmICh2YikgVmVjM0Z1bmMuY3Jvc3ModGhpcywgdmEsIHZiKTtcbiAgICAgICAgZWxzZSBWZWMzRnVuYy5jcm9zcyh0aGlzLCB0aGlzLCB2YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNjYWxlKHYpIHtcbiAgICAgICAgVmVjM0Z1bmMuc2NhbGUodGhpcywgdGhpcywgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgVmVjM0Z1bmMubm9ybWFsaXplKHRoaXMsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkb3Qodikge1xuICAgICAgICByZXR1cm4gVmVjM0Z1bmMuZG90KHRoaXMsIHYpO1xuICAgIH1cblxuICAgIGVxdWFscyh2KSB7XG4gICAgICAgIHJldHVybiBWZWMzRnVuYy5leGFjdEVxdWFscyh0aGlzLCB2KTtcbiAgICB9XG5cbiAgICBhcHBseU1hdHJpeDMobWF0Mykge1xuICAgICAgICBWZWMzRnVuYy50cmFuc2Zvcm1NYXQzKHRoaXMsIHRoaXMsIG1hdDMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhcHBseU1hdHJpeDQobWF0NCkge1xuICAgICAgICBWZWMzRnVuYy50cmFuc2Zvcm1NYXQ0KHRoaXMsIHRoaXMsIG1hdDQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZVJvdGF0ZU1hdHJpeDQobWF0NCkge1xuICAgICAgICBWZWMzRnVuYy5zY2FsZVJvdGF0ZU1hdDQodGhpcywgdGhpcywgbWF0NCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFwcGx5UXVhdGVybmlvbihxKSB7XG4gICAgICAgIFZlYzNGdW5jLnRyYW5zZm9ybVF1YXQodGhpcywgdGhpcywgcSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFuZ2xlKHYpIHtcbiAgICAgICAgcmV0dXJuIFZlYzNGdW5jLmFuZ2xlKHRoaXMsIHYpO1xuICAgIH1cblxuICAgIGxlcnAodiwgdCkge1xuICAgICAgICBWZWMzRnVuYy5sZXJwKHRoaXMsIHRoaXMsIHYsIHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKHRoaXNbMF0sIHRoaXNbMV0sIHRoaXNbMl0pO1xuICAgIH1cblxuICAgIGZyb21BcnJheShhLCBvID0gMCkge1xuICAgICAgICB0aGlzWzBdID0gYVtvXTtcbiAgICAgICAgdGhpc1sxXSA9IGFbbyArIDFdO1xuICAgICAgICB0aGlzWzJdID0gYVtvICsgMl07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvQXJyYXkoYSA9IFtdLCBvID0gMCkge1xuICAgICAgICBhW29dID0gdGhpc1swXTtcbiAgICAgICAgYVtvICsgMV0gPSB0aGlzWzFdO1xuICAgICAgICBhW28gKyAyXSA9IHRoaXNbMl07XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybURpcmVjdGlvbihtYXQ0KSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzWzBdO1xuICAgICAgICBjb25zdCB5ID0gdGhpc1sxXTtcbiAgICAgICAgY29uc3QgeiA9IHRoaXNbMl07XG5cbiAgICAgICAgdGhpc1swXSA9IG1hdDRbMF0gKiB4ICsgbWF0NFs0XSAqIHkgKyBtYXQ0WzhdICogejtcbiAgICAgICAgdGhpc1sxXSA9IG1hdDRbMV0gKiB4ICsgbWF0NFs1XSAqIHkgKyBtYXQ0WzldICogejtcbiAgICAgICAgdGhpc1syXSA9IG1hdDRbMl0gKiB4ICsgbWF0NFs2XSAqIHkgKyBtYXQ0WzEwXSAqIHo7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCk7XG4gICAgfVxufVxuIiwiLy8gYXNzdW1lcyB0aGUgdXBwZXIgM3gzIG9mIG0gaXMgYSBwdXJlIHJvdGF0aW9uIG1hdHJpeCAoaS5lLCB1bnNjYWxlZClcbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25NYXRyaXgob3V0LCBtLCBvcmRlciA9ICdZWFonKSB7XG4gICAgaWYgKG9yZGVyID09PSAnWFlaJykge1xuICAgICAgICBvdXRbMV0gPSBNYXRoLmFzaW4oTWF0aC5taW4oTWF0aC5tYXgobVs4XSwgLTEpLCAxKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhtWzhdKSA8IDAuOTk5OTkpIHtcbiAgICAgICAgICAgIG91dFswXSA9IE1hdGguYXRhbjIoLW1bOV0sIG1bMTBdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IE1hdGguYXRhbjIoLW1bNF0sIG1bMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0WzBdID0gTWF0aC5hdGFuMihtWzZdLCBtWzVdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IDA7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWVhaJykge1xuICAgICAgICBvdXRbMF0gPSBNYXRoLmFzaW4oLU1hdGgubWluKE1hdGgubWF4KG1bOV0sIC0xKSwgMSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobVs5XSkgPCAwLjk5OTk5KSB7XG4gICAgICAgICAgICBvdXRbMV0gPSBNYXRoLmF0YW4yKG1bOF0sIG1bMTBdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IE1hdGguYXRhbjIobVsxXSwgbVs1XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRbMV0gPSBNYXRoLmF0YW4yKC1tWzJdLCBtWzBdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IDA7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWlhZJykge1xuICAgICAgICBvdXRbMF0gPSBNYXRoLmFzaW4oTWF0aC5taW4oTWF0aC5tYXgobVs2XSwgLTEpLCAxKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhtWzZdKSA8IDAuOTk5OTkpIHtcbiAgICAgICAgICAgIG91dFsxXSA9IE1hdGguYXRhbjIoLW1bMl0sIG1bMTBdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IE1hdGguYXRhbjIoLW1bNF0sIG1bNV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0WzFdID0gMDtcbiAgICAgICAgICAgIG91dFsyXSA9IE1hdGguYXRhbjIobVsxXSwgbVswXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWllYJykge1xuICAgICAgICBvdXRbMV0gPSBNYXRoLmFzaW4oLU1hdGgubWluKE1hdGgubWF4KG1bMl0sIC0xKSwgMSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobVsyXSkgPCAwLjk5OTk5KSB7XG4gICAgICAgICAgICBvdXRbMF0gPSBNYXRoLmF0YW4yKG1bNl0sIG1bMTBdKTtcbiAgICAgICAgICAgIG91dFsyXSA9IE1hdGguYXRhbjIobVsxXSwgbVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRbMF0gPSAwO1xuICAgICAgICAgICAgb3V0WzJdID0gTWF0aC5hdGFuMigtbVs0XSwgbVs1XSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWVpYJykge1xuICAgICAgICBvdXRbMl0gPSBNYXRoLmFzaW4oTWF0aC5taW4oTWF0aC5tYXgobVsxXSwgLTEpLCAxKSk7XG4gICAgICAgIGlmIChNYXRoLmFicyhtWzFdKSA8IDAuOTk5OTkpIHtcbiAgICAgICAgICAgIG91dFswXSA9IE1hdGguYXRhbjIoLW1bOV0sIG1bNV0pO1xuICAgICAgICAgICAgb3V0WzFdID0gTWF0aC5hdGFuMigtbVsyXSwgbVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRbMF0gPSAwO1xuICAgICAgICAgICAgb3V0WzFdID0gTWF0aC5hdGFuMihtWzhdLCBtWzEwXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWFpZJykge1xuICAgICAgICBvdXRbMl0gPSBNYXRoLmFzaW4oLU1hdGgubWluKE1hdGgubWF4KG1bNF0sIC0xKSwgMSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobVs0XSkgPCAwLjk5OTk5KSB7XG4gICAgICAgICAgICBvdXRbMF0gPSBNYXRoLmF0YW4yKG1bNl0sIG1bNV0pO1xuICAgICAgICAgICAgb3V0WzFdID0gTWF0aC5hdGFuMihtWzhdLCBtWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFswXSA9IE1hdGguYXRhbjIoLW1bOV0sIG1bMTBdKTtcbiAgICAgICAgICAgIG91dFsxXSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuIiwiY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAxO1xuXG4vKipcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyAzeDMgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbNF07XG4gICAgb3V0WzRdID0gYVs1XTtcbiAgICBvdXRbNV0gPSBhWzZdO1xuICAgIG91dFs2XSA9IGFbOF07XG4gICAgb3V0WzddID0gYVs5XTtcbiAgICBvdXRbOF0gPSBhWzEwXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHl4ID0geSAqIHgyO1xuICAgIGxldCB5eSA9IHkgKiB5MjtcbiAgICBsZXQgenggPSB6ICogeDI7XG4gICAgbGV0IHp5ID0geiAqIHkyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFszXSA9IHl4IC0gd3o7XG4gICAgb3V0WzZdID0genggKyB3eTtcblxuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzddID0genkgLSB3eDtcblxuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzVdID0genkgKyB3eDtcbiAgICBvdXRbOF0gPSAxIC0geHggLSB5eTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIG91dFswXSA9IG0wMDtcbiAgICBvdXRbMV0gPSBtMDE7XG4gICAgb3V0WzJdID0gbTAyO1xuICAgIG91dFszXSA9IG0xMDtcbiAgICBvdXRbNF0gPSBtMTE7XG4gICAgb3V0WzVdID0gbTEyO1xuICAgIG91dFs2XSA9IG0yMDtcbiAgICBvdXRbN10gPSBtMjE7XG4gICAgb3V0WzhdID0gbTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMTtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIGxldCBhMDEgPSBhWzFdLFxuICAgICAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgICAgIGExMiA9IGFbNV07XG4gICAgICAgIG91dFsxXSA9IGFbM107XG4gICAgICAgIG91dFsyXSA9IGFbNl07XG4gICAgICAgIG91dFszXSA9IGEwMTtcbiAgICAgICAgb3V0WzVdID0gYVs3XTtcbiAgICAgICAgb3V0WzZdID0gYTAyO1xuICAgICAgICBvdXRbN10gPSBhMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVszXTtcbiAgICAgICAgb3V0WzJdID0gYVs2XTtcbiAgICAgICAgb3V0WzNdID0gYVsxXTtcbiAgICAgICAgb3V0WzRdID0gYVs0XTtcbiAgICAgICAgb3V0WzVdID0gYVs3XTtcbiAgICAgICAgb3V0WzZdID0gYVsyXTtcbiAgICAgICAgb3V0WzddID0gYVs1XTtcbiAgICAgICAgb3V0WzhdID0gYVs4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgbGV0IGIwMSA9IGEyMiAqIGExMSAtIGExMiAqIGEyMTtcbiAgICBsZXQgYjExID0gLWEyMiAqIGExMCArIGExMiAqIGEyMDtcbiAgICBsZXQgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIGxldCBkZXQgPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjE7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gYjAxICogZGV0O1xuICAgIG91dFsxXSA9ICgtYTIyICogYTAxICsgYTAyICogYTIxKSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTEyICogYTAxIC0gYTAyICogYTExKSAqIGRldDtcbiAgICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGEyMiAqIGEwMCAtIGEwMiAqIGEyMCkgKiBkZXQ7XG4gICAgb3V0WzVdID0gKC1hMTIgKiBhMDAgKyBhMDIgKiBhMTApICogZGV0O1xuICAgIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgICBvdXRbN10gPSAoLWEyMSAqIGEwMCArIGEwMSAqIGEyMCkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMSAqIGEwMCAtIGEwMSAqIGExMCkgKiBkZXQ7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXTtcbiAgICBsZXQgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBsZXQgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XTtcblxuICAgIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKSArIGEwMSAqICgtYTIyICogYTEwICsgYTEyICogYTIwKSArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgbGV0IGIwMCA9IGJbMF0sXG4gICAgICAgIGIwMSA9IGJbMV0sXG4gICAgICAgIGIwMiA9IGJbMl07XG4gICAgbGV0IGIxMCA9IGJbM10sXG4gICAgICAgIGIxMSA9IGJbNF0sXG4gICAgICAgIGIxMiA9IGJbNV07XG4gICAgbGV0IGIyMCA9IGJbNl0sXG4gICAgICAgIGIyMSA9IGJbN10sXG4gICAgICAgIGIyMiA9IGJbOF07XG5cbiAgICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gICAgb3V0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xuICAgIG91dFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMjtcblxuICAgIG91dFszXSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcbiAgICBvdXRbNF0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjE7XG4gICAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuXG4gICAgb3V0WzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwO1xuICAgIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgICBvdXRbOF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdLFxuICAgICAgICB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV07XG5cbiAgICBvdXRbMF0gPSBhMDA7XG4gICAgb3V0WzFdID0gYTAxO1xuICAgIG91dFsyXSA9IGEwMjtcblxuICAgIG91dFszXSA9IGExMDtcbiAgICBvdXRbNF0gPSBhMTE7XG4gICAgb3V0WzVdID0gYTEyO1xuXG4gICAgb3V0WzZdID0geCAqIGEwMCArIHkgKiBhMTAgKyBhMjA7XG4gICAgb3V0WzddID0geCAqIGEwMSArIHkgKiBhMTEgKyBhMjE7XG4gICAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MyBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF0sXG4gICAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICAgIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICAgIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuXG4gICAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gICAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gICAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG5cbiAgICBvdXRbNl0gPSBhMjA7XG4gICAgb3V0WzddID0gYTIxO1xuICAgIG91dFs4XSA9IGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgbGV0IHggPSB2WzBdLFxuICAgICAgICB5ID0gdlsxXTtcblxuICAgIG91dFswXSA9IHggKiBhWzBdO1xuICAgIG91dFsxXSA9IHggKiBhWzFdO1xuICAgIG91dFsyXSA9IHggKiBhWzJdO1xuXG4gICAgb3V0WzNdID0geSAqIGFbM107XG4gICAgb3V0WzRdID0geSAqIGFbNF07XG4gICAgb3V0WzVdID0geSAqIGFbNV07XG5cbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIGxldCBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG4gICAgbGV0IGEzMCA9IGFbMTJdLFxuICAgICAgICBhMzEgPSBhWzEzXSxcbiAgICAgICAgYTMyID0gYVsxNF0sXG4gICAgICAgIGEzMyA9IGFbMTVdO1xuXG4gICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICAgIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICAgIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICAgIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICAgIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcblxuICAgIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFs0XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuXG4gICAgb3V0WzZdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGdsIGNvbnRleHRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IC0yIC8gaGVpZ2h0O1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gLTE7XG4gICAgb3V0WzddID0gMTtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgb3V0WzRdID0gYVs0XSAqIGI7XG4gICAgb3V0WzVdID0gYVs1XSAqIGI7XG4gICAgb3V0WzZdID0gYVs2XSAqIGI7XG4gICAgb3V0WzddID0gYVs3XSAqIGI7XG4gICAgb3V0WzhdID0gYVs4XSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsImNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgbWF0NCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICAgIG91dFswXSA9IG0wMDtcbiAgICBvdXRbMV0gPSBtMDE7XG4gICAgb3V0WzJdID0gbTAyO1xuICAgIG91dFszXSA9IG0wMztcbiAgICBvdXRbNF0gPSBtMTA7XG4gICAgb3V0WzVdID0gbTExO1xuICAgIG91dFs2XSA9IG0xMjtcbiAgICBvdXRbN10gPSBtMTM7XG4gICAgb3V0WzhdID0gbTIwO1xuICAgIG91dFs5XSA9IG0yMTtcbiAgICBvdXRbMTBdID0gbTIyO1xuICAgIG91dFsxMV0gPSBtMjM7XG4gICAgb3V0WzEyXSA9IG0zMDtcbiAgICBvdXRbMTNdID0gbTMxO1xuICAgIG91dFsxNF0gPSBtMzI7XG4gICAgb3V0WzE1XSA9IG0zMztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIGxldCBhMDEgPSBhWzFdLFxuICAgICAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgICAgIGEwMyA9IGFbM107XG4gICAgICAgIGxldCBhMTIgPSBhWzZdLFxuICAgICAgICAgICAgYTEzID0gYVs3XTtcbiAgICAgICAgbGV0IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhMDE7XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhMDI7XG4gICAgICAgIG91dFs5XSA9IGExMjtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYTAzO1xuICAgICAgICBvdXRbMTNdID0gYTEzO1xuICAgICAgICBvdXRbMTRdID0gYTIzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhWzFdO1xuICAgICAgICBvdXRbNV0gPSBhWzVdO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYVsyXTtcbiAgICAgICAgb3V0WzldID0gYVs2XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhWzNdO1xuICAgICAgICBvdXRbMTNdID0gYVs3XTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICBsZXQgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICBsZXQgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuICAgIGxldCBhMzAgPSBhWzEyXSxcbiAgICAgICAgYTMxID0gYVsxM10sXG4gICAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgICBhMzMgPSBhWzE1XTtcblxuICAgIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICAgIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICAgIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICAgIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIGxldCBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG4gICAgbGV0IGEzMCA9IGFbMTJdLFxuICAgICAgICBhMzEgPSBhWzEzXSxcbiAgICAgICAgYTMyID0gYVsxNF0sXG4gICAgICAgIGEzMyA9IGFbMTVdO1xuXG4gICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICAgIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICAgIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICAgIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICAgIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0c1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIGxldCBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG4gICAgbGV0IGEzMCA9IGFbMTJdLFxuICAgICAgICBhMzEgPSBhWzEzXSxcbiAgICAgICAgYTMyID0gYVsxNF0sXG4gICAgICAgIGEzMyA9IGFbMTVdO1xuXG4gICAgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG4gICAgbGV0IGIwID0gYlswXSxcbiAgICAgICAgYjEgPSBiWzFdLFxuICAgICAgICBiMiA9IGJbMl0sXG4gICAgICAgIGIzID0gYlszXTtcbiAgICBvdXRbMF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgICBvdXRbMV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgICBvdXRbMl0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgICBvdXRbM10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcblxuICAgIGIwID0gYls0XTtcbiAgICBiMSA9IGJbNV07XG4gICAgYjIgPSBiWzZdO1xuICAgIGIzID0gYls3XTtcbiAgICBvdXRbNF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgICBvdXRbNV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgICBvdXRbNl0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgICBvdXRbN10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcblxuICAgIGIwID0gYls4XTtcbiAgICBiMSA9IGJbOV07XG4gICAgYjIgPSBiWzEwXTtcbiAgICBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFs5XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFsxMF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgICBvdXRbMTFdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG5cbiAgICBiMCA9IGJbMTJdO1xuICAgIGIxID0gYlsxM107XG4gICAgYjIgPSBiWzE0XTtcbiAgICBiMyA9IGJbMTVdO1xuICAgIG91dFsxMl0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgICBvdXRbMTNdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzE0XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFsxNV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgbGV0IHggPSB2WzBdLFxuICAgICAgICB5ID0gdlsxXSxcbiAgICAgICAgeiA9IHZbMl07XG4gICAgbGV0IGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgICBsZXQgYTEwLCBhMTEsIGExMiwgYTEzO1xuICAgIGxldCBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07XG4gICAgICAgIGEwMSA9IGFbMV07XG4gICAgICAgIGEwMiA9IGFbMl07XG4gICAgICAgIGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07XG4gICAgICAgIGExMSA9IGFbNV07XG4gICAgICAgIGExMiA9IGFbNl07XG4gICAgICAgIGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07XG4gICAgICAgIGEyMSA9IGFbOV07XG4gICAgICAgIGEyMiA9IGFbMTBdO1xuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7XG4gICAgICAgIG91dFsxXSA9IGEwMTtcbiAgICAgICAgb3V0WzJdID0gYTAyO1xuICAgICAgICBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDtcbiAgICAgICAgb3V0WzVdID0gYTExO1xuICAgICAgICBvdXRbNl0gPSBhMTI7XG4gICAgICAgIG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwO1xuICAgICAgICBvdXRbOV0gPSBhMjE7XG4gICAgICAgIG91dFsxMF0gPSBhMjI7XG4gICAgICAgIG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzIG5vdCB1c2luZyB2ZWN0b3JpemF0aW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICAgIGxldCB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV0sXG4gICAgICAgIHogPSB2WzJdO1xuXG4gICAgb3V0WzBdID0gYVswXSAqIHg7XG4gICAgb3V0WzFdID0gYVsxXSAqIHg7XG4gICAgb3V0WzJdID0gYVsyXSAqIHg7XG4gICAgb3V0WzNdID0gYVszXSAqIHg7XG4gICAgb3V0WzRdID0gYVs0XSAqIHk7XG4gICAgb3V0WzVdID0gYVs1XSAqIHk7XG4gICAgb3V0WzZdID0gYVs2XSAqIHk7XG4gICAgb3V0WzddID0gYVs3XSAqIHk7XG4gICAgb3V0WzhdID0gYVs4XSAqIHo7XG4gICAgb3V0WzldID0gYVs5XSAqIHo7XG4gICAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIGdpdmVuIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICAgIGxldCB4ID0gYXhpc1swXSxcbiAgICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICAgIHogPSBheGlzWzJdO1xuICAgIGxldCBsZW4gPSBNYXRoLmh5cG90KHgsIHksIHopO1xuICAgIGxldCBzLCBjLCB0O1xuICAgIGxldCBhMDAsIGEwMSwgYTAyLCBhMDM7XG4gICAgbGV0IGExMCwgYTExLCBhMTIsIGExMztcbiAgICBsZXQgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICAgIGxldCBiMDAsIGIwMSwgYjAyO1xuICAgIGxldCBiMTAsIGIxMSwgYjEyO1xuICAgIGxldCBiMjAsIGIyMSwgYjIyO1xuXG4gICAgaWYgKE1hdGguYWJzKGxlbikgPCBFUFNJTE9OKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeCAqPSBsZW47XG4gICAgeSAqPSBsZW47XG4gICAgeiAqPSBsZW47XG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgICB0ID0gMSAtIGM7XG5cbiAgICBhMDAgPSBhWzBdO1xuICAgIGEwMSA9IGFbMV07XG4gICAgYTAyID0gYVsyXTtcbiAgICBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07XG4gICAgYTExID0gYVs1XTtcbiAgICBhMTIgPSBhWzZdO1xuICAgIGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTtcbiAgICBhMjEgPSBhWzldO1xuICAgIGEyMiA9IGFbMTBdO1xuICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gICAgYjAwID0geCAqIHggKiB0ICsgYztcbiAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcztcbiAgICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzO1xuICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICAgIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gICAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICAgIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHRyYW5zbGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24ob3V0LCBtYXQpIHtcbiAgICBvdXRbMF0gPSBtYXRbMTJdO1xuICAgIG91dFsxXSA9IG1hdFsxM107XG4gICAgb3V0WzJdID0gbWF0WzE0XTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZVxuICogIHdpdGggYSBub3JtYWxpemVkIFF1YXRlcm5pb24gcGFyYW10ZXIsIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZVxuICogIHRoZSBzYW1lIGFzIHRoZSBzY2FsaW5nIHZlY3RvclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50XG4gKiBAcGFyYW0gIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsaW5nKG91dCwgbWF0KSB7XG4gICAgbGV0IG0xMSA9IG1hdFswXTtcbiAgICBsZXQgbTEyID0gbWF0WzFdO1xuICAgIGxldCBtMTMgPSBtYXRbMl07XG4gICAgbGV0IG0yMSA9IG1hdFs0XTtcbiAgICBsZXQgbTIyID0gbWF0WzVdO1xuICAgIGxldCBtMjMgPSBtYXRbNl07XG4gICAgbGV0IG0zMSA9IG1hdFs4XTtcbiAgICBsZXQgbTMyID0gbWF0WzldO1xuICAgIGxldCBtMzMgPSBtYXRbMTBdO1xuXG4gICAgb3V0WzBdID0gTWF0aC5oeXBvdChtMTEsIG0xMiwgbTEzKTtcbiAgICBvdXRbMV0gPSBNYXRoLmh5cG90KG0yMSwgbTIyLCBtMjMpO1xuICAgIG91dFsyXSA9IE1hdGguaHlwb3QobTMxLCBtMzIsIG0zMyk7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4U2NhbGVPbkF4aXMobWF0KSB7XG4gICAgbGV0IG0xMSA9IG1hdFswXTtcbiAgICBsZXQgbTEyID0gbWF0WzFdO1xuICAgIGxldCBtMTMgPSBtYXRbMl07XG4gICAgbGV0IG0yMSA9IG1hdFs0XTtcbiAgICBsZXQgbTIyID0gbWF0WzVdO1xuICAgIGxldCBtMjMgPSBtYXRbNl07XG4gICAgbGV0IG0zMSA9IG1hdFs4XTtcbiAgICBsZXQgbTMyID0gbWF0WzldO1xuICAgIGxldCBtMzMgPSBtYXRbMTBdO1xuXG4gICAgY29uc3QgeCA9IG0xMSAqIG0xMSArIG0xMiAqIG0xMiArIG0xMyAqIG0xMztcbiAgICBjb25zdCB5ID0gbTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzO1xuICAgIGNvbnN0IHogPSBtMzEgKiBtMzEgKyBtMzIgKiBtMzIgKyBtMzMgKiBtMzM7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgubWF4KHgsIHksIHopKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcXVhdGVybmlvbiByZXByZXNlbnRpbmcgdGhlIHJvdGF0aW9uYWwgY29tcG9uZW50XG4gKiAgb2YgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGhcbiAqICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbiwgdGhlIHJldHVybmVkIHF1YXRlcm5pb24gd2lsbCBiZSB0aGVcbiAqICBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBRdWF0ZXJuaW9uIHRvIHJlY2VpdmUgdGhlIHJvdGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSb3RhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGVtcCA9IFsxLCAxLCAxXTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAob3V0LCBtYXQpIHtcbiAgICAgICAgbGV0IHNjYWxpbmcgPSB0ZW1wO1xuICAgICAgICBnZXRTY2FsaW5nKHNjYWxpbmcsIG1hdCk7XG5cbiAgICAgICAgbGV0IGlzMSA9IDEgLyBzY2FsaW5nWzBdO1xuICAgICAgICBsZXQgaXMyID0gMSAvIHNjYWxpbmdbMV07XG4gICAgICAgIGxldCBpczMgPSAxIC8gc2NhbGluZ1syXTtcblxuICAgICAgICBsZXQgc20xMSA9IG1hdFswXSAqIGlzMTtcbiAgICAgICAgbGV0IHNtMTIgPSBtYXRbMV0gKiBpczI7XG4gICAgICAgIGxldCBzbTEzID0gbWF0WzJdICogaXMzO1xuICAgICAgICBsZXQgc20yMSA9IG1hdFs0XSAqIGlzMTtcbiAgICAgICAgbGV0IHNtMjIgPSBtYXRbNV0gKiBpczI7XG4gICAgICAgIGxldCBzbTIzID0gbWF0WzZdICogaXMzO1xuICAgICAgICBsZXQgc20zMSA9IG1hdFs4XSAqIGlzMTtcbiAgICAgICAgbGV0IHNtMzIgPSBtYXRbOV0gKiBpczI7XG4gICAgICAgIGxldCBzbTMzID0gbWF0WzEwXSAqIGlzMztcblxuICAgICAgICBsZXQgdHJhY2UgPSBzbTExICsgc20yMiArIHNtMzM7XG4gICAgICAgIGxldCBTID0gMDtcblxuICAgICAgICBpZiAodHJhY2UgPiAwKSB7XG4gICAgICAgICAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgICAgICAgICBvdXRbM10gPSAwLjI1ICogUztcbiAgICAgICAgICAgIG91dFswXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgICAgICAgICAgb3V0WzFdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgICAgICAgICBvdXRbMl0gPSAoc20xMiAtIHNtMjEpIC8gUztcbiAgICAgICAgfSBlbHNlIGlmIChzbTExID4gc20yMiAmJiBzbTExID4gc20zMykge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTExIC0gc20yMiAtIHNtMzMpICogMjtcbiAgICAgICAgICAgIG91dFszXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgICAgICAgICAgb3V0WzBdID0gMC4yNSAqIFM7XG4gICAgICAgICAgICBvdXRbMV0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICAgICAgICAgIG91dFsyXSA9IChzbTMxICsgc20xMykgLyBTO1xuICAgICAgICB9IGVsc2UgaWYgKHNtMjIgPiBzbTMzKSB7XG4gICAgICAgICAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMjIgLSBzbTExIC0gc20zMykgKiAyO1xuICAgICAgICAgICAgb3V0WzNdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgICAgICAgICBvdXRbMF0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICAgICAgICAgIG91dFsxXSA9IDAuMjUgKiBTO1xuICAgICAgICAgICAgb3V0WzJdID0gKHNtMjMgKyBzbTMyKSAvIFM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMzMgLSBzbTExIC0gc20yMikgKiAyO1xuICAgICAgICAgICAgb3V0WzNdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gICAgICAgICAgICBvdXRbMF0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICAgICAgICAgIG91dFsxXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgICAgICAgICAgb3V0WzJdID0gMC4yNSAqIFM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG59KSgpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKG91dCwgcSwgdiwgcykge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIGxldCB4ID0gcVswXSxcbiAgICAgICAgeSA9IHFbMV0sXG4gICAgICAgIHogPSBxWzJdLFxuICAgICAgICB3ID0gcVszXTtcbiAgICBsZXQgeDIgPSB4ICsgeDtcbiAgICBsZXQgeTIgPSB5ICsgeTtcbiAgICBsZXQgejIgPSB6ICsgejtcblxuICAgIGxldCB4eCA9IHggKiB4MjtcbiAgICBsZXQgeHkgPSB4ICogeTI7XG4gICAgbGV0IHh6ID0geCAqIHoyO1xuICAgIGxldCB5eSA9IHkgKiB5MjtcbiAgICBsZXQgeXogPSB5ICogejI7XG4gICAgbGV0IHp6ID0geiAqIHoyO1xuICAgIGxldCB3eCA9IHcgKiB4MjtcbiAgICBsZXQgd3kgPSB3ICogeTI7XG4gICAgbGV0IHd6ID0gdyAqIHoyO1xuICAgIGxldCBzeCA9IHNbMF07XG4gICAgbGV0IHN5ID0gc1sxXTtcbiAgICBsZXQgc3ogPSBzWzJdO1xuXG4gICAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gICAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gICAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICAgIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICAgIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDR4NCBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIGxldCB4ID0gcVswXSxcbiAgICAgICAgeSA9IHFbMV0sXG4gICAgICAgIHogPSBxWzJdLFxuICAgICAgICB3ID0gcVszXTtcbiAgICBsZXQgeDIgPSB4ICsgeDtcbiAgICBsZXQgeTIgPSB5ICsgeTtcbiAgICBsZXQgejIgPSB6ICsgejtcblxuICAgIGxldCB4eCA9IHggKiB4MjtcbiAgICBsZXQgeXggPSB5ICogeDI7XG4gICAgbGV0IHl5ID0geSAqIHkyO1xuICAgIGxldCB6eCA9IHogKiB4MjtcbiAgICBsZXQgenkgPSB6ICogeTI7XG4gICAgbGV0IHp6ID0geiAqIHoyO1xuICAgIGxldCB3eCA9IHcgKiB4MjtcbiAgICBsZXQgd3kgPSB3ICogeTI7XG4gICAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbMl0gPSB6eCAtIHd5O1xuICAgIG91dFszXSA9IDA7XG5cbiAgICBvdXRbNF0gPSB5eCAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICAgIG91dFs2XSA9IHp5ICsgd3g7XG4gICAgb3V0WzddID0gMDtcblxuICAgIG91dFs4XSA9IHp4ICsgd3k7XG4gICAgb3V0WzldID0genkgLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gICAgb3V0WzExXSA9IDA7XG5cbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgICBsZXQgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKTtcbiAgICBsZXQgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSBmO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMiAqIGZhciAqIG5lYXIgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgbGV0IGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpO1xuICAgIGxldCBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgICBsZXQgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IC0yICogbHI7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAtMiAqIGJ0O1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBtYXRyaXggdGhhdCBtYWtlcyBzb21ldGhpbmcgbG9vayBhdCBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge3ZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXG4gKiBAcGFyYW0ge3ZlYzN9IHRhcmdldCBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7dmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VG8ob3V0LCBleWUsIHRhcmdldCwgdXApIHtcbiAgICBsZXQgZXlleCA9IGV5ZVswXSxcbiAgICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgICB1cHogPSB1cFsyXTtcblxuICAgIGxldCB6MCA9IGV5ZXggLSB0YXJnZXRbMF0sXG4gICAgICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICAgICAgejIgPSBleWV6IC0gdGFyZ2V0WzJdO1xuXG4gICAgbGV0IGxlbiA9IHowICogejAgKyB6MSAqIHoxICsgejIgKiB6MjtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIC8vIGV5ZSBhbmQgdGFyZ2V0IGFyZSBpbiB0aGUgc2FtZSBwb3NpdGlvblxuICAgICAgICB6MiA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgICAgICB6MCAqPSBsZW47XG4gICAgICAgIHoxICo9IGxlbjtcbiAgICAgICAgejIgKj0gbGVuO1xuICAgIH1cblxuICAgIGxldCB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgICAgIHgxID0gdXB6ICogejAgLSB1cHggKiB6MixcbiAgICAgICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuXG4gICAgbGVuID0geDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyO1xuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgLy8gdXAgYW5kIHogYXJlIHBhcmFsbGVsXG4gICAgICAgIGlmICh1cHopIHtcbiAgICAgICAgICAgIHVweCArPSAxZS02O1xuICAgICAgICB9IGVsc2UgaWYgKHVweSkge1xuICAgICAgICAgICAgdXB6ICs9IDFlLTY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cHkgKz0gMWUtNjtcbiAgICAgICAgfVxuICAgICAgICAoeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxKSwgKHgxID0gdXB6ICogejAgLSB1cHggKiB6MiksICh4MiA9IHVweCAqIHoxIC0gdXB5ICogejApO1xuXG4gICAgICAgIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcbiAgICB9XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgeDAgKj0gbGVuO1xuICAgIHgxICo9IGxlbjtcbiAgICB4MiAqPSBsZW47XG5cbiAgICBvdXRbMF0gPSB4MDtcbiAgICBvdXRbMV0gPSB4MTtcbiAgICBvdXRbMl0gPSB4MjtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICAgIG91dFs1XSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIG91dFs2XSA9IHowICogeDEgLSB6MSAqIHgwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gejA7XG4gICAgb3V0WzldID0gejE7XG4gICAgb3V0WzEwXSA9IHoyO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSBleWV4O1xuICAgIG91dFsxM10gPSBleWV5O1xuICAgIG91dFsxNF0gPSBleWV6O1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgIG91dFs5XSA9IGFbOV0gKyBiWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXSArIGJbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXSArIGJbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XSArIGJbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgICBvdXRbOV0gPSBhWzldIC0gYls5XTtcbiAgICBvdXRbMTBdID0gYVsxMF0gLSBiWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV0gLSBiWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl0gLSBiWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM10gLSBiWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF0gLSBiWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV0gLSBiWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgb3V0WzRdID0gYVs0XSAqIGI7XG4gICAgb3V0WzVdID0gYVs1XSAqIGI7XG4gICAgb3V0WzZdID0gYVs2XSAqIGI7XG4gICAgb3V0WzddID0gYVs3XSAqIGI7XG4gICAgb3V0WzhdID0gYVs4XSAqIGI7XG4gICAgb3V0WzldID0gYVs5XSAqIGI7XG4gICAgb3V0WzEwXSA9IGFbMTBdICogYjtcbiAgICBvdXRbMTFdID0gYVsxMV0gKiBiO1xuICAgIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gICAgb3V0WzEzXSA9IGFbMTNdICogYjtcbiAgICBvdXRbMTRdID0gYVsxNF0gKiBiO1xuICAgIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsImltcG9ydCAqIGFzIHZlYzQgZnJvbSAnLi9WZWM0RnVuYy5qcyc7XG5cbi8qKlxuICogU2V0IGEgcXVhdCB0byB0aGUgaWRlbnRpdHkgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldHMgYSBxdWF0IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFuZCByb3RhdGlvbiBheGlzLFxuICogdGhlbiByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGlzQW5nbGUob3V0LCBheGlzLCByYWQpIHtcbiAgICByYWQgPSByYWQgKiAwLjU7XG4gICAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIG91dFswXSA9IHMgKiBheGlzWzBdO1xuICAgIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICAgIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICAgIG91dFszXSA9IE1hdGguY29zKHJhZCk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0c1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBsZXQgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXSxcbiAgICAgICAgYXcgPSBhWzNdO1xuICAgIGxldCBieCA9IGJbMF0sXG4gICAgICAgIGJ5ID0gYlsxXSxcbiAgICAgICAgYnogPSBiWzJdLFxuICAgICAgICBidyA9IGJbM107XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XG4gICAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICBsZXQgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXSxcbiAgICAgICAgYXcgPSBhWzNdO1xuICAgIGxldCBieCA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICAgIG91dFsyXSA9IGF6ICogYncgLSBheSAqIGJ4O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICBsZXQgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXSxcbiAgICAgICAgYXcgPSBhWzNdO1xuICAgIGxldCBieSA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgLSBheiAqIGJ5O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBheCAqIGJ5O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheSAqIGJ5O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICBsZXQgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXSxcbiAgICAgICAgYXcgPSBhWzNdO1xuICAgIGxldCBieiA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICAgIG91dFsxXSA9IGF5ICogYncgLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICAvLyBiZW5jaG1hcmtzOlxuICAgIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnggPSBiWzBdLFxuICAgICAgICBieSA9IGJbMV0sXG4gICAgICAgIGJ6ID0gYlsyXSxcbiAgICAgICAgYncgPSBiWzNdO1xuXG4gICAgbGV0IG9tZWdhLCBjb3NvbSwgc2lub20sIHNjYWxlMCwgc2NhbGUxO1xuXG4gICAgLy8gY2FsYyBjb3NpbmVcbiAgICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7XG4gICAgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpXG4gICAgaWYgKGNvc29tIDwgMC4wKSB7XG4gICAgICAgIGNvc29tID0gLWNvc29tO1xuICAgICAgICBieCA9IC1ieDtcbiAgICAgICAgYnkgPSAtYnk7XG4gICAgICAgIGJ6ID0gLWJ6O1xuICAgICAgICBidyA9IC1idztcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGNvZWZmaWNpZW50c1xuICAgIGlmICgxLjAgLSBjb3NvbSA+IDAuMDAwMDAxKSB7XG4gICAgICAgIC8vIHN0YW5kYXJkIGNhc2UgKHNsZXJwKVxuICAgICAgICBvbWVnYSA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgICAgIHNpbm9tID0gTWF0aC5zaW4ob21lZ2EpO1xuICAgICAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICAgICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFwiZnJvbVwiIGFuZCBcInRvXCIgcXVhdGVybmlvbnMgYXJlIHZlcnkgY2xvc2VcbiAgICAgICAgLy8gIC4uLiBzbyB3ZSBjYW4gZG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgICAgICBzY2FsZTAgPSAxLjAgLSB0O1xuICAgICAgICBzY2FsZTEgPSB0O1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgZmluYWwgdmFsdWVzXG4gICAgb3V0WzBdID0gc2NhbGUwICogYXggKyBzY2FsZTEgKiBieDtcbiAgICBvdXRbMV0gPSBzY2FsZTAgKiBheSArIHNjYWxlMSAqIGJ5O1xuICAgIG91dFsyXSA9IHNjYWxlMCAqIGF6ICsgc2NhbGUxICogYno7XG4gICAgb3V0WzNdID0gc2NhbGUwICogYXcgKyBzY2FsZTEgKiBidztcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgbGV0IGEwID0gYVswXSxcbiAgICAgICAgYTEgPSBhWzFdLFxuICAgICAgICBhMiA9IGFbMl0sXG4gICAgICAgIGEzID0gYVszXTtcbiAgICBsZXQgZG90ID0gYTAgKiBhMCArIGExICogYTEgKyBhMiAqIGEyICsgYTMgKiBhMztcbiAgICBsZXQgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDtcblxuICAgIC8vIFRPRE86IFdvdWxkIGJlIGZhc3RlciB0byByZXR1cm4gWzAsMCwwLDBdIGltbWVkaWF0ZWx5IGlmIGRvdCA9PSAwXG5cbiAgICBvdXRbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gICAgb3V0WzFdID0gLWExICogaW52RG90O1xuICAgIG91dFsyXSA9IC1hMiAqIGludkRvdDtcbiAgICBvdXRbM10gPSBhMyAqIGludkRvdDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIDN4MyByb3RhdGlvbiBtYXRyaXguXG4gKlxuICogTk9URTogVGhlIHJlc3VsdGFudCBxdWF0ZXJuaW9uIGlzIG5vdCBub3JtYWxpemVkLCBzbyB5b3Ugc2hvdWxkIGJlIHN1cmVcbiAqIHRvIHJlbm9ybWFsaXplIHRoZSBxdWF0ZXJuaW9uIHlvdXJzZWxmIHdoZXJlIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7bWF0M30gbSByb3RhdGlvbiBtYXRyaXhcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDMob3V0LCBtKSB7XG4gICAgLy8gQWxnb3JpdGhtIGluIEtlbiBTaG9lbWFrZSdzIGFydGljbGUgaW4gMTk4NyBTSUdHUkFQSCBjb3Vyc2Ugbm90ZXNcbiAgICAvLyBhcnRpY2xlIFwiUXVhdGVybmlvbiBDYWxjdWx1cyBhbmQgRmFzdCBBbmltYXRpb25cIi5cbiAgICBsZXQgZlRyYWNlID0gbVswXSArIG1bNF0gKyBtWzhdO1xuICAgIGxldCBmUm9vdDtcblxuICAgIGlmIChmVHJhY2UgPiAwLjApIHtcbiAgICAgICAgLy8gfHd8ID4gMS8yLCBtYXkgYXMgd2VsbCBjaG9vc2UgdyA+IDEvMlxuICAgICAgICBmUm9vdCA9IE1hdGguc3FydChmVHJhY2UgKyAxLjApOyAvLyAyd1xuICAgICAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICAgICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgLy8gMS8oNHcpXG4gICAgICAgIG91dFswXSA9IChtWzVdIC0gbVs3XSkgKiBmUm9vdDtcbiAgICAgICAgb3V0WzFdID0gKG1bNl0gLSBtWzJdKSAqIGZSb290O1xuICAgICAgICBvdXRbMl0gPSAobVsxXSAtIG1bM10pICogZlJvb3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gfHd8IDw9IDEvMlxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGlmIChtWzRdID4gbVswXSkgaSA9IDE7XG4gICAgICAgIGlmIChtWzhdID4gbVtpICogMyArIGldKSBpID0gMjtcbiAgICAgICAgbGV0IGogPSAoaSArIDEpICUgMztcbiAgICAgICAgbGV0IGsgPSAoaSArIDIpICUgMztcblxuICAgICAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApO1xuICAgICAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICAgICAgZlJvb3QgPSAwLjUgLyBmUm9vdDtcbiAgICAgICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0W2pdID0gKG1baiAqIDMgKyBpXSArIG1baSAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0W2tdID0gKG1bayAqIDMgKyBpXSArIG1baSAqIDMgKyBrXSkgKiBmUm9vdDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIGV1bGVyIGFuZ2xlIHgsIHksIHouXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IGV1bGVyIEFuZ2xlcyB0byByb3RhdGUgYXJvdW5kIGVhY2ggYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHtTdHJpbmd9IG9yZGVyIGRldGFpbGluZyBvcmRlciBvZiBvcGVyYXRpb25zLiBEZWZhdWx0ICdYWVonLlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXVsZXIob3V0LCBldWxlciwgb3JkZXIgPSAnWVhaJykge1xuICAgIGxldCBzeCA9IE1hdGguc2luKGV1bGVyWzBdICogMC41KTtcbiAgICBsZXQgY3ggPSBNYXRoLmNvcyhldWxlclswXSAqIDAuNSk7XG4gICAgbGV0IHN5ID0gTWF0aC5zaW4oZXVsZXJbMV0gKiAwLjUpO1xuICAgIGxldCBjeSA9IE1hdGguY29zKGV1bGVyWzFdICogMC41KTtcbiAgICBsZXQgc3ogPSBNYXRoLnNpbihldWxlclsyXSAqIDAuNSk7XG4gICAgbGV0IGN6ID0gTWF0aC5jb3MoZXVsZXJbMl0gKiAwLjUpO1xuXG4gICAgaWYgKG9yZGVyID09PSAnWFlaJykge1xuICAgICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XG4gICAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgICAgb3V0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1lYWicpIHtcbiAgICAgICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdaWFknKSB7XG4gICAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICAgICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogKyBzeCAqIHN5ICogY3o7XG4gICAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWllYJykge1xuICAgICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgICAgb3V0WzJdID0gY3ggKiBjeSAqIHN6IC0gc3ggKiBzeSAqIGN6O1xuICAgICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1laWCcpIHtcbiAgICAgICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6IC0gc3ggKiBzeSAqIHN6O1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdYWlknKSB7XG4gICAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6IC0gc3ggKiBjeSAqIHN6O1xuICAgICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogKyBzeCAqIHN5ICogY3o7XG4gICAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgY29weSA9IHZlYzQuY29weTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBxdWF0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IHZlYzQuc2V0O1xuXG4vKipcbiAqIEFkZHMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZCA9IHZlYzQuYWRkO1xuXG4vKipcbiAqIFNjYWxlcyBhIHF1YXQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzY2FsZSA9IHZlYzQuc2NhbGU7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBkb3QgPSB2ZWM0LmRvdDtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGxlcnAgPSB2ZWM0LmxlcnA7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGNvbnN0IGxlbmd0aCA9IHZlYzQubGVuZ3RoO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0ZXJuaW9uIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemUgPSB2ZWM0Lm5vcm1hbGl6ZTtcbiIsImNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIGxldCB6ID0gYVsyXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICBvdXRbMl0gPSB6O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYjtcbiAgICBvdXRbMV0gPSBhWzFdICogYjtcbiAgICBvdXRbMl0gPSBhWzJdICogYjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIGxldCB4ID0gYlswXSAtIGFbMF07XG4gICAgbGV0IHkgPSBiWzFdIC0gYVsxXTtcbiAgICBsZXQgeiA9IGJbMl0gLSBhWzJdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICAgIGxldCB4ID0gYlswXSAtIGFbMF07XG4gICAgbGV0IHkgPSBiWzFdIC0gYVsxXTtcbiAgICBsZXQgeiA9IGJbMl0gLSBhWzJdO1xuICAgIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIGxldCB4ID0gYVswXTtcbiAgICBsZXQgeSA9IGFbMV07XG4gICAgbGV0IHogPSBhWzJdO1xuICAgIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAtYVswXTtcbiAgICBvdXRbMV0gPSAtYVsxXTtcbiAgICBvdXRbMl0gPSAtYVsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICAgIG91dFswXSA9IDEuMCAvIGFbMF07XG4gICAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIGxldCB4ID0gYVswXTtcbiAgICBsZXQgeSA9IGFbMV07XG4gICAgbGV0IHogPSBhWzJdO1xuICAgIGxldCBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIH1cbiAgICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICAgIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gICAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl07XG4gICAgbGV0IGJ4ID0gYlswXSxcbiAgICAgICAgYnkgPSBiWzFdLFxuICAgICAgICBieiA9IGJbMl07XG5cbiAgICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICBsZXQgYXggPSBhWzBdO1xuICAgIGxldCBheSA9IGFbMV07XG4gICAgbGV0IGF6ID0gYVsyXTtcbiAgICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDQuXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgbGV0IHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl07XG4gICAgbGV0IHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV07XG4gICAgdyA9IHcgfHwgMS4wO1xuICAgIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSkgLyB3O1xuICAgIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3O1xuICAgIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNhbWUgYXMgYWJvdmUgYnV0IGRvZXNuJ3QgYXBwbHkgdHJhbnNsYXRpb24uXG4gKiBVc2VmdWwgZm9yIHJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVJvdGF0ZU1hdDQob3V0LCBhLCBtKSB7XG4gICAgbGV0IHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl07XG4gICAgbGV0IHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV07XG4gICAgdyA9IHcgfHwgMS4wO1xuICAgIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHopIC8gdztcbiAgICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6KSAvIHc7XG4gICAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHopIC8gdztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDMuXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIHRoZSAzeDMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICAgIGxldCB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdO1xuICAgIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN107XG4gICAgb3V0WzJdID0geCAqIG1bMl0gKyB5ICogbVs1XSArIHogKiBtWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAgIC8vIGJlbmNobWFya3M6IGh0dHBzOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9ucy1maXhlZFxuXG4gICAgbGV0IHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl07XG4gICAgbGV0IHF4ID0gcVswXSxcbiAgICAgICAgcXkgPSBxWzFdLFxuICAgICAgICBxeiA9IHFbMl0sXG4gICAgICAgIHF3ID0gcVszXTtcblxuICAgIGxldCB1dnggPSBxeSAqIHogLSBxeiAqIHk7XG4gICAgbGV0IHV2eSA9IHF6ICogeCAtIHF4ICogejtcbiAgICBsZXQgdXZ6ID0gcXggKiB5IC0gcXkgKiB4O1xuXG4gICAgbGV0IHV1dnggPSBxeSAqIHV2eiAtIHF6ICogdXZ5O1xuICAgIGxldCB1dXZ5ID0gcXogKiB1dnggLSBxeCAqIHV2ejtcbiAgICBsZXQgdXV2eiA9IHF4ICogdXZ5IC0gcXkgKiB1dng7XG5cbiAgICBsZXQgdzIgPSBxdyAqIDI7XG4gICAgdXZ4ICo9IHcyO1xuICAgIHV2eSAqPSB3MjtcbiAgICB1dnogKj0gdzI7XG5cbiAgICB1dXZ4ICo9IDI7XG4gICAgdXV2eSAqPSAyO1xuICAgIHV1dnogKj0gMjtcblxuICAgIG91dFswXSA9IHggKyB1dnggKyB1dXZ4O1xuICAgIG91dFsxXSA9IHkgKyB1dnkgKyB1dXZ5O1xuICAgIG91dFsyXSA9IHogKyB1dnogKyB1dXZ6O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGVtcEEgPSBbMCwgMCwgMF07XG4gICAgY29uc3QgdGVtcEIgPSBbMCwgMCwgMF07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgY29weSh0ZW1wQSwgYSk7XG4gICAgICAgIGNvcHkodGVtcEIsIGIpO1xuXG4gICAgICAgIG5vcm1hbGl6ZSh0ZW1wQSwgdGVtcEEpO1xuICAgICAgICBub3JtYWxpemUodGVtcEIsIHRlbXBCKTtcblxuICAgICAgICBsZXQgY29zaW5lID0gZG90KHRlbXBBLCB0ZW1wQik7XG5cbiAgICAgICAgaWYgKGNvc2luZSA+IDEuMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSBpZiAoY29zaW5lIDwgLTEuMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguUEk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc2luZSk7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cbiIsImNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjNCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6LCB3KSB7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgb3V0WzNdID0gdztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIGxldCB6ID0gYVsyXTtcbiAgICBsZXQgdyA9IGFbM107XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIGxldCB4ID0gYVswXTtcbiAgICBsZXQgeSA9IGFbMV07XG4gICAgbGV0IHogPSBhWzJdO1xuICAgIGxldCB3ID0gYVszXTtcbiAgICBsZXQgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIH1cbiAgICBvdXRbMF0gPSB4ICogbGVuO1xuICAgIG91dFsxXSA9IHkgKiBsZW47XG4gICAgb3V0WzJdID0geiAqIGxlbjtcbiAgICBvdXRbM10gPSB3ICogbGVuO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdICsgYVszXSAqIGJbM107XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIGxldCBheCA9IGFbMF07XG4gICAgbGV0IGF5ID0gYVsxXTtcbiAgICBsZXQgYXogPSBhWzJdO1xuICAgIGxldCBhdyA9IGFbM107XG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gICAgb3V0WzNdID0gYXcgKyB0ICogKGJbM10gLSBhdyk7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI2OTEzNTZhOGIxYjdkMDJlMGJiXCIpIl0sIm5hbWVzIjpbIlBsYW5lIiwiVHJhbnNmb3JtIiwiTWVkaWEiLCJtYXAiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJncm91cCIsIm1lZGlhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdhbGxlcnkiLCJjcmVhdGVHZW9tZXRyeSIsInNldFBhcmVudCIsImdlb21ldHJ5IiwiZWxlbWVudCIsImluZGV4IiwiTWVzaCIsIlByb2dyYW0iLCJUZXh0dXJlIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJ0ZXh0dXJlIiwiY29uc29sZSIsImxvZyIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwibWVzaCIsIkNhbWVyYSIsIlJlbmRlcmVyIiwiSG9tZSIsIkNhbnZhcyIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwib25SZXNpemUiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJyZW5kZXIiLCJNYXQ0IiwiVmVjMyIsInRlbXBNYXQ0IiwidGVtcFZlYzNhIiwidGVtcFZlYzNiIiwibmVhciIsImZhciIsImZvdiIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcCIsInpvb20iLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9qZWN0aW9uTWF0cml4Iiwidmlld01hdHJpeCIsInByb2plY3Rpb25WaWV3TWF0cml4Iiwid29ybGRQb3NpdGlvbiIsInR5cGUiLCJvcnRob2dyYXBoaWMiLCJmcm9tUGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJmcm9tT3J0aG9nb25hbCIsInVwZGF0ZU1hdHJpeFdvcmxkIiwiaW52ZXJzZSIsIndvcmxkTWF0cml4IiwiZ2V0VHJhbnNsYXRpb24iLCJtdWx0aXBseSIsImxvb2tBdCIsInRhcmdldCIsInByb2plY3QiLCJ2IiwiYXBwbHlNYXRyaXg0IiwidW5wcm9qZWN0IiwidXBkYXRlRnJ1c3R1bSIsImZydXN0dW0iLCJtIiwic2V0IiwiY29uc3RhbnQiLCJpIiwiaW52TGVuIiwiZGlzdGFuY2UiLCJmcnVzdHVtSW50ZXJzZWN0c01lc2giLCJub2RlIiwiYXR0cmlidXRlcyIsImJvdW5kcyIsInJhZGl1cyIsIkluZmluaXR5IiwiY29tcHV0ZUJvdW5kaW5nU3BoZXJlIiwiY2VudGVyIiwiY29weSIsImdldE1heFNjYWxlT25BeGlzIiwiZnJ1c3R1bUludGVyc2VjdHNTcGhlcmUiLCJub3JtYWwiLCJwbGFuZSIsImRvdCIsInRlbXBWZWMzIiwiSUQiLCJBVFRSX0lEIiwiaXNCb3VuZHNXYXJuZWQiLCJHZW9tZXRyeSIsImVycm9yIiwiaWQiLCJWQU9zIiwiZHJhd1JhbmdlIiwic3RhcnQiLCJjb3VudCIsImluc3RhbmNlZENvdW50IiwiYmluZFZlcnRleEFycmF5IiwiY3VycmVudEdlb21ldHJ5IiwiZ2xTdGF0ZSIsInN0YXRlIiwia2V5IiwiYWRkQXR0cmlidXRlIiwiYXR0ciIsInNpemUiLCJkYXRhIiwiRmxvYXQzMkFycmF5IiwiRkxPQVQiLCJVaW50MTZBcnJheSIsIlVOU0lHTkVEX1NIT1JUIiwiVU5TSUdORURfSU5UIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJBUlJBWV9CVUZGRVIiLCJub3JtYWxpemVkIiwic3RyaWRlIiwib2Zmc2V0IiwiYnl0ZUxlbmd0aCIsImxlbmd0aCIsImRpdmlzb3IiLCJpbnN0YW5jZWQiLCJuZWVkc1VwZGF0ZSIsInVzYWdlIiwiU1RBVElDX0RSQVciLCJidWZmZXIiLCJ1cGRhdGVBdHRyaWJ1dGUiLCJpc0luc3RhbmNlZCIsIndhcm4iLCJtaW4iLCJtYXgiLCJpc05ld0J1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJvdW5kQnVmZmVyIiwiYmluZEJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJidWZmZXJTdWJEYXRhIiwic2V0SW5kZXgiLCJ2YWx1ZSIsInNldERyYXdSYW5nZSIsInNldEluc3RhbmNlZENvdW50IiwiY3JlYXRlVkFPIiwiYXR0cmlidXRlT3JkZXIiLCJjcmVhdGVWZXJ0ZXhBcnJheSIsImJpbmRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZm9yRWFjaCIsImxvY2F0aW9uIiwibmFtZSIsIm51bUxvYyIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYkRpdmlzb3IiLCJkcmF3IiwibW9kZSIsIlRSSUFOR0xFUyIsImluZGV4Qnl0ZXNQZXJFbGVtZW50IiwiZHJhd0VsZW1lbnRzSW5zdGFuY2VkIiwiZHJhd0FycmF5c0luc3RhbmNlZCIsImRyYXdFbGVtZW50cyIsImRyYXdBcnJheXMiLCJnZXRQb3NpdGlvbiIsImNvbXB1dGVCb3VuZGluZ0JveCIsImFycmF5Iiwic2NhbGUiLCJsIiwieCIsInkiLCJzdWIiLCJhZGQiLCJkaXZpZGUiLCJtYXhSYWRpdXNTcSIsImZyb21BcnJheSIsInNxdWFyZWREaXN0YW5jZSIsInNxcnQiLCJyZW1vdmUiLCJkZWxldGVWZXJ0ZXhBcnJheSIsImRlbGV0ZUJ1ZmZlciIsIk1hdDMiLCJmcnVzdHVtQ3VsbGVkIiwicmVuZGVyT3JkZXIiLCJtb2RlbFZpZXdNYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJiZWZvcmVSZW5kZXJDYWxsYmFja3MiLCJhZnRlclJlbmRlckNhbGxiYWNrcyIsIm9uQmVmb3JlUmVuZGVyIiwiZiIsInB1c2giLCJvbkFmdGVyUmVuZGVyIiwibW9kZWxNYXRyaXgiLCJjYW1lcmFQb3NpdGlvbiIsImdldE5vcm1hbE1hdHJpeCIsImZsaXBGYWNlcyIsImN1bGxGYWNlIiwiZGV0ZXJtaW5hbnQiLCJ1c2UiLCJhcnJheUNhY2hlRjMyIiwidHJhbnNwYXJlbnQiLCJCQUNLIiwiZnJvbnRGYWNlIiwiQ0NXIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsImRlcHRoRnVuYyIsIkxFU1MiLCJibGVuZEZ1bmMiLCJibGVuZEVxdWF0aW9uIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0QmxlbmRGdW5jIiwiT05FIiwiT05FX01JTlVTX1NSQ19BTFBIQSIsIlNSQ19BTFBIQSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVySW5mb0xvZyIsImFkZExpbmVOdW1iZXJzIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImdldFByb2dyYW1JbmZvTG9nIiwiZGVsZXRlU2hhZGVyIiwidW5pZm9ybUxvY2F0aW9ucyIsIk1hcCIsIm51bVVuaWZvcm1zIiwiQUNUSVZFX1VOSUZPUk1TIiwidUluZGV4IiwidW5pZm9ybSIsImdldEFjdGl2ZVVuaWZvcm0iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJzcGxpdCIsIm1hdGNoIiwidW5pZm9ybU5hbWUiLCJuYW1lQ29tcG9uZW50cyIsInNsaWNlIiwibG9jYXRpb25zIiwibnVtQXR0cmlicyIsIkFDVElWRV9BVFRSSUJVVEVTIiwiYUluZGV4IiwiYXR0cmlidXRlIiwiZ2V0QWN0aXZlQXR0cmliIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJqb2luIiwiZHN0Iiwic3JjQWxwaGEiLCJkc3RBbHBoYSIsInNldEJsZW5kRXF1YXRpb24iLCJtb2RlUkdCIiwibW9kZUFscGhhIiwiYXBwbHlTdGF0ZSIsImVuYWJsZSIsIkRFUFRIX1RFU1QiLCJkaXNhYmxlIiwiQ1VMTF9GQUNFIiwiQkxFTkQiLCJzZXRDdWxsRmFjZSIsInNldEZyb250RmFjZSIsInNldERlcHRoTWFzayIsInNldERlcHRoRnVuYyIsInRleHR1cmVVbml0IiwicHJvZ3JhbUFjdGl2ZSIsImN1cnJlbnRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImFjdGl2ZVVuaWZvcm0iLCJjb21wb25lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJzZXRVbmlmb3JtIiwidGV4dHVyZVVuaXRzIiwiQ1ciLCJkZWxldGVQcm9ncmFtIiwiZmxhdHRlbiIsInNldFZhbHVlIiwiZ2V0IiwiYXJyYXlzRXF1YWwiLCJzZXRBcnJheSIsInVuaWZvcm0xZnYiLCJ1bmlmb3JtMWYiLCJ1bmlmb3JtMmZ2IiwidW5pZm9ybTNmdiIsInVuaWZvcm00ZnYiLCJ1bmlmb3JtMWl2IiwidW5pZm9ybTFpIiwidW5pZm9ybTJpdiIsInVuaWZvcm0zaXYiLCJ1bmlmb3JtNGl2IiwidW5pZm9ybU1hdHJpeDJmdiIsInVuaWZvcm1NYXRyaXgzZnYiLCJ1bmlmb3JtTWF0cml4NGZ2Iiwic3RyaW5nIiwibGluZXMiLCJhIiwiYXJyYXlMZW4iLCJ2YWx1ZUxlbiIsImIiLCJ3YXJuQ291bnQiLCJtZXNzYWdlIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZHByIiwiYWxwaGEiLCJkZXB0aCIsInN0ZW5jaWwiLCJhbnRpYWxpYXMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJwb3dlclByZWZlcmVuY2UiLCJhdXRvQ2xlYXIiLCJ3ZWJnbCIsImNvbG9yIiwiZ2V0Q29udGV4dCIsImlzV2ViZ2wyIiwiWkVSTyIsIkZVTkNfQUREIiwiZGVwdGhNYXNrIiwicHJlbXVsdGlwbHlBbHBoYSIsImZsaXBZIiwidW5wYWNrQWxpZ25tZW50IiwiZnJhbWVidWZmZXIiLCJ2aWV3cG9ydCIsImFjdGl2ZVRleHR1cmVVbml0IiwiZXh0ZW5zaW9ucyIsImdldEV4dGVuc2lvbiIsImRyYXdCdWZmZXJzIiwicGFyYW1ldGVycyIsIm1heFRleHR1cmVVbml0cyIsImdldFBhcmFtZXRlciIsIk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTIiwibWF4QW5pc290cm9weSIsIk1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCIsInN0eWxlIiwic2V0Vmlld3BvcnQiLCJzZXRTY2lzc29yIiwic2Npc3NvciIsImJsZW5kRnVuY1NlcGFyYXRlIiwiYmxlbmRFcXVhdGlvblNlcGFyYXRlIiwiYWN0aXZlVGV4dHVyZSIsIlRFWFRVUkUwIiwiYmluZEZyYW1lYnVmZmVyIiwiRlJBTUVCVUZGRVIiLCJleHRlbnNpb24iLCJ3ZWJnbDJGdW5jIiwiZXh0RnVuYyIsImJpbmQiLCJzb3J0T3BhcXVlIiwiekRlcHRoIiwic29ydFRyYW5zcGFyZW50Iiwic29ydFVJIiwiZ2V0UmVuZGVyTGlzdCIsImZydXN0dW1DdWxsIiwic29ydCIsInJlbmRlckxpc3QiLCJ0cmF2ZXJzZSIsInZpc2libGUiLCJvcGFxdWUiLCJ1aSIsImNvbmNhdCIsImNsZWFyIiwiQ09MT1JfQlVGRkVSX0JJVCIsIkRFUFRIX0JVRkZFUl9CSVQiLCJTVEVOQ0lMX0JVRkZFUl9CSVQiLCJlbXB0eVBpeGVsIiwiVWludDhBcnJheSIsImlzUG93ZXJPZjIiLCJURVhUVVJFXzJEIiwiVU5TSUdORURfQllURSIsImZvcm1hdCIsIlJHQkEiLCJpbnRlcm5hbEZvcm1hdCIsIndyYXBTIiwiQ0xBTVBfVE9fRURHRSIsIndyYXBUIiwiZ2VuZXJhdGVNaXBtYXBzIiwibWluRmlsdGVyIiwiTkVBUkVTVF9NSVBNQVBfTElORUFSIiwiTElORUFSIiwibWFnRmlsdGVyIiwiYW5pc290cm9weSIsImxldmVsIiwic3RvcmUiLCJSRVBFQVQiLCJiaW5kVGV4dHVyZSIsInBpeGVsU3RvcmVpIiwiVU5QQUNLX0ZMSVBfWV9XRUJHTCIsIlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCIsIlVOUEFDS19BTElHTk1FTlQiLCJ0ZXhQYXJhbWV0ZXJpIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiVEVYVFVSRV9NQUdfRklMVEVSIiwiVEVYVFVSRV9XUkFQX1MiLCJURVhUVVJFX1dSQVBfVCIsInRleFBhcmFtZXRlcmYiLCJURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCIsIlRFWFRVUkVfQ1VCRV9NQVAiLCJ0ZXhJbWFnZTJEIiwiVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJpc0NvbXByZXNzZWRUZXh0dXJlIiwiY29tcHJlc3NlZFRleEltYWdlMkQiLCJnZW5lcmF0ZU1pcG1hcCIsIm9uVXBkYXRlIiwiUXVhdCIsIkV1bGVyIiwicGFyZW50IiwiY2hpbGRyZW4iLCJtYXRyaXgiLCJtYXRyaXhBdXRvVXBkYXRlIiwid29ybGRNYXRyaXhOZWVkc1VwZGF0ZSIsInF1YXRlcm5pb24iLCJyb3RhdGlvbiIsInVwIiwib25DaGFuZ2UiLCJmcm9tRXVsZXIiLCJmcm9tUXVhdGVybmlvbiIsIm5vdGlmeVBhcmVudCIsInJlbW92ZUNoaWxkIiwiYWRkQ2hpbGQiLCJjaGlsZCIsIm5vdGlmeUNoaWxkIiwiaW5kZXhPZiIsInNwbGljZSIsImZvcmNlIiwidXBkYXRlTWF0cml4IiwiY29tcG9zZSIsImNhbGxiYWNrIiwiZGVjb21wb3NlIiwiZ2V0Um90YXRpb24iLCJnZXRTY2FsaW5nIiwiaW52ZXJ0Iiwid2lkdGhTZWdtZW50cyIsImhlaWdodFNlZ21lbnRzIiwid1NlZ3MiLCJoU2VncyIsIm51bSIsIm51bUluZGljZXMiLCJ1diIsIlVpbnQzMkFycmF5IiwiYnVpbGRQbGFuZSIsInUiLCJ3IiwidURpciIsInZEaXIiLCJpaSIsImlvIiwic2VnVyIsInNlZ0giLCJpeSIsIml4IiwiYyIsImQiLCJFdWxlckZ1bmMiLCJ0bXBNYXQ0Iiwib3JkZXIiLCJyZW9yZGVyIiwiZnJvbVJvdGF0aW9uTWF0cml4IiwicSIsIm8iLCJ0b0FycmF5IiwiTWF0M0Z1bmMiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJtMjAiLCJtMjEiLCJtMjIiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtYSIsIm1iIiwiaWRlbnRpdHkiLCJmcm9tTWF0cml4NCIsImZyb21NYXQ0IiwiZnJvbVF1YXQiLCJmcm9tQmFzaXMiLCJ2ZWMzYSIsInZlYzNiIiwidmVjM2MiLCJub3JtYWxGcm9tTWF0NCIsIk1hdDRGdW5jIiwibTAzIiwibTEzIiwibTIzIiwibTMwIiwibTMxIiwibTMyIiwibTMzIiwiYXhpcyIsInN1YnRyYWN0IiwibXVsdGlwbHlTY2FsYXIiLCJvcnRobyIsInNldFBvc2l0aW9uIiwicG9zIiwiZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZSIsImV5ZSIsInRhcmdldFRvIiwiUXVhdEZ1bmMiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJjb25qdWdhdGUiLCJub3JtYWxpemUiLCJxQSIsInFCIiwiZnJvbU1hdHJpeDMiLCJtYXRyaXgzIiwiZnJvbU1hdDMiLCJldWxlciIsImZyb21BeGlzQW5nbGUiLCJzZXRBeGlzQW5nbGUiLCJzbGVycCIsInQiLCJWZWMzRnVuYyIsInZhIiwidmIiLCJsZW4iLCJzcXVhcmVkTGVuIiwic3F1YXJlZExlbmd0aCIsIm5lZ2F0ZSIsImNyb3NzIiwiZXF1YWxzIiwiZXhhY3RFcXVhbHMiLCJhcHBseU1hdHJpeDMiLCJtYXQzIiwidHJhbnNmb3JtTWF0MyIsIm1hdDQiLCJ0cmFuc2Zvcm1NYXQ0Iiwic2NhbGVSb3RhdGVNYXRyaXg0Iiwic2NhbGVSb3RhdGVNYXQ0IiwiYXBwbHlRdWF0ZXJuaW9uIiwidHJhbnNmb3JtUXVhdCIsImFuZ2xlIiwibGVycCIsImNsb25lIiwidHJhbnNmb3JtRGlyZWN0aW9uIiwib3V0IiwiYXNpbiIsImFicyIsImF0YW4yIiwiRVBTSUxPTiIsIngyIiwieTIiLCJ6MiIsInh4IiwieXgiLCJ5eSIsInp4IiwienkiLCJ6eiIsInd4Iiwid3kiLCJ3eiIsInRyYW5zcG9zZSIsImEwMSIsImEwMiIsImExMiIsImEwMCIsImExMCIsImExMSIsImEyMCIsImEyMSIsImEyMiIsImIwMSIsImIxMSIsImIyMSIsImRldCIsImIwMCIsImIwMiIsImIxMCIsImIxMiIsImIyMCIsImIyMiIsInJhZCIsInMiLCJzaW4iLCJjb3MiLCJhMDMiLCJhMTMiLCJhMjMiLCJhMzAiLCJhMzEiLCJhMzIiLCJhMzMiLCJiMDMiLCJiMDQiLCJiMDUiLCJiMDYiLCJiMDciLCJiMDgiLCJiMDkiLCJwcm9qZWN0aW9uIiwiYjAiLCJiMSIsImIyIiwiYjMiLCJoeXBvdCIsIm1hdCIsInRlbXAiLCJzY2FsaW5nIiwiaXMxIiwiaXMyIiwiaXMzIiwic20xMSIsInNtMTIiLCJzbTEzIiwic20yMSIsInNtMjIiLCJzbTIzIiwic20zMSIsInNtMzIiLCJzbTMzIiwidHJhY2UiLCJTIiwieHkiLCJ4eiIsInl6Iiwic3giLCJzeSIsInN6IiwiZm92eSIsInRhbiIsIm5mIiwibHIiLCJidCIsImV5ZXgiLCJleWV5IiwiZXlleiIsInVweCIsInVweSIsInVweiIsInowIiwiejEiLCJ4MCIsIngxIiwidmVjNCIsImF4IiwiYXkiLCJheiIsImF3IiwiYngiLCJieSIsImJ6IiwiYnciLCJvbWVnYSIsImNvc29tIiwic2lub20iLCJzY2FsZTAiLCJzY2FsZTEiLCJhY29zIiwiYTAiLCJhMSIsImEyIiwiYTMiLCJpbnZEb3QiLCJmVHJhY2UiLCJmUm9vdCIsImoiLCJrIiwiY3giLCJjeSIsImN6IiwicXgiLCJxeSIsInF6IiwicXciLCJ1dngiLCJ1dnkiLCJ1dnoiLCJ1dXZ4IiwidXV2eSIsInV1dnoiLCJ3MiIsInRlbXBBIiwidGVtcEIiLCJjb3NpbmUiXSwic291cmNlUm9vdCI6IiJ9