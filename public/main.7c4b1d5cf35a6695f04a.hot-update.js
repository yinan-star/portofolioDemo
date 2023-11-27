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
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_4__.Program(gl, {
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

/***/ "./node_modules/ogl/src/extras/Box.js":
/*!********************************************!*\
  !*** ./node_modules/ogl/src/extras/Box.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Geometry.js */ "./node_modules/ogl/src/core/Geometry.js");
/* harmony import */ var _Plane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plane.js */ "./node_modules/ogl/src/extras/Plane.js");


class Box extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__.Geometry {
  constructor(gl, {
    width = 1,
    height = 1,
    depth = 1,
    widthSegments = 1,
    heightSegments = 1,
    depthSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const dSegs = depthSegments;
    const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
    const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let ii = 0;

    // left, right
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
    i += (dSegs + 1) * (hSegs + 1);
    ii += dSegs * hSegs;
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane.buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);
    i += (dSegs + 1) * (hSegs + 1);
    ii += dSegs * hSegs;

    // top, bottom
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane.buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);
    i += (wSegs + 1) * (dSegs + 1);
    ii += wSegs * dSegs;
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane.buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);
    i += (wSegs + 1) * (dSegs + 1);
    ii += wSegs * dSegs;

    // front, back
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane.buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);
    i += (wSegs + 1) * (hSegs + 1);
    ii += wSegs * hSegs;
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__.Plane.buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);
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
/******/ 	__webpack_require__.h = () => ("2ce4d36212c86eae1ace")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUEsK0NBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0Y7SUFFQSxNQUFNcUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3JCLG9CQUFvQjtJQUNuQyxJQUFJLENBQUNvQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkYsSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBRXZGLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMs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QyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3JFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3JFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR3JFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR3JFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQixPQUFPLElBQUk7RUFDZjtFQUVBQyxPQUFPQSxDQUFDdEUsQ0FBQyxHQUFHLEVBQUUsRUFBRXFFLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDbkJyRSxDQUFDLENBQUNxRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2RyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQnJFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQnJFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQnJFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEJyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQnJFLENBQUMsQ0FBQ3FFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BCckUsQ0FBQyxDQUFDcUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDcEJyRSxDQUFDLENBQUNxRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQnJFLENBQUMsQ0FBQ3FFLENB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QyxDQUFDO0VBQ3BCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCLE9BQU80SCxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVN4QixRQUFRQSxDQUFDd0IsR0FBRyxFQUFFL0gsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDaEM0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEIsT0FBTzRILEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3ZCLGNBQWNBLENBQUN1QixHQUFHLEVBQUUvSCxDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUN0QzRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQztFQUNqQixPQUFPNEgsR0FBRztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JmQSxNQUFNSSxPQUFPLEdBQUcsUUFBUTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTalcsSUFBSUEsQ0FBQzZWLEdBQUcsRUFBRS9ILENBQUMsRUFBRTtFQUN6QitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYitILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZitILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZitILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZitILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDZitILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMs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QUFDO0lBQ2IrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2QrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2QrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IrSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IrSCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2YrSCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2YrSCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QrSCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QrSCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2YrSCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ25CO0VBRUEsT0FBTytILEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVM1RixNQUFNQSxDQUFDNEYsR0FBRyxFQUFFL0gsQ0FBQyxFQUFFO0VBQzNCLElBQUlvSixHQUFHLEdBQUdwSixDQUFD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R0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHNEYsSUFBSTtFQUNkNUYsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDWCxPQUFPQSxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNuUSxHQUFHQSxDQUFDbVEsR0FBRyxFQUFFL0gsQ0FBQyxFQUFFRyxDQUFDLEVBQUU7RUFDM0I0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcvSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI0SCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkI0SCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkI0SCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkI0SCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkI0SCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkI0SCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcvSCxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdHLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDdkIsT0FBTzRILEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3hCLFFBQVFBLENBQUN3QixHQUFHLEVBQUUvSCxDQUFDLEVBQUVHLENBQUMsRUFBRTtFQUNoQzRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0csQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQjRILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QjRILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QjRILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QjRILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QjRILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QjRILEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRy9ILENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBR0csQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUN2QixPQUFPNEgsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTdkIsY0FBY0EsQ0FBQ3VCLEdBQUcsRUFBRS9ILENBQUMsRUFBRUcsQ0FBQyxFQUFFO0VBQ3RDNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHRyxDQUFDO0VBQ2pCNEgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRyxDQUFDO0VBQ25CNEgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRyxDQUFDO0VBQ25CNEgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRyxDQUFDO0VBQ25CNEgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRyxDQUFDO0VBQ25CNEgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRyxDQUFDO0VBQ25CNEgsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHL0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHRyxDQUFDO0VBQ25CLE9BQU80SCxHQUFHO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3g2QnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTMUMsUUFBUUEsQ0FBQzBDLEdBQUcsRUFBRTtFQUMxQkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDVixPQUFPQSxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0gsWUFBWUEsQ0FBQ0csR0FBRyxFQUFFekIsSUFBSSxFQUFFOEQsR0FBRyxFQUFFO0VBQ3pDQSxHQUFHLEdBQUdBLEdB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Q0FBQyxDQUFDLEdBQUdHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUzJQLElBQUlBLENBQUMvSCxHQUFHLEVBQUUvSCxDQUFDLEVBQUVHLENBQUMsRUFBRTJILENBQUMsRUFBRTtFQUMvQixJQUFJc0csRUFBRSxHQUFHcE8sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiLElBQUlxTyxFQUFFLEdBQUdyTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2IsSUFBSXNPLEVBQUUsR0FBR3RPLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDYixJQUFJdU8sRUFBRSxHQUFHdk8sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNiK0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcUcsRUFBRSxHQUFHdEcsQ0FBQyxJQUFJM0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHaU8sRUFBRSxDQUFDO0VBQzdCckcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHc0csRUFBRSxHQUFHdkcsQ0FBQyxJQUFJM0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHa08sRUFBRSxDQUFDO0VBQzdCdEcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHdUcsRUFBRSxHQUFHeEcsQ0FBQyxJQUFJM0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHbU8sRUFBRSxDQUFDO0VBQzdCdkcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHd0csRUFBRSxHQUFHekcsQ0FBQyxJQUFJM0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHb08sRUFBRSxDQUFDO0VBQzdCLE9BQU94RyxHQUFHO0FBQ2Q7Ozs7Ozs7O1VDdElBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvQ2FtZXJhLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvR2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvY29yZS9NZXNoLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9leHRyYXMvQm94LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2V4dHJhcy9QbGFuZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL0V1bGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvTWF0My5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL01hdDQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvbWF0aC9RdWF0LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvZnVuY3Rpb25zL0V1bGVyRnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9NYXQzRnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9NYXQ0RnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9RdWF0RnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9WZWM0RnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSwgQm94LCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDsgLy9USVAgd29ya3MgbGlrZSBhIGNhbnZhcyBjb250ZXh0XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG5cbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xuICAgICAgdmVydGV4OiAvKiBnbHNsICovIGBcbiAgICAgICAgYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgdW5pZm9ybSBtYXQ0IFByb2plY3Rpb25NYXRyaXg7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBQcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogVmVjNChwb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgZnJhZ21lbnQ6IGBcbiAgICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBWZWM0KDEuMCk7XG4gICAgICAgICAgfSAgICAgICAgIFxuICAgICAgICBgXG4gICAgfSlcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2VvbWV0cnksIHRoaXMucHJvZ3JhbSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cbiAgfVxuXG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8g5bCG5riy5p+T55qE55S75biD5bC65a+45aGr5ruh6KeG56qX5Y+jXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCB9KTtcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTp0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOnRoaXMuc2NlbmVcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0uanMnO1xuaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4uL21hdGgvTWF0NC5qcyc7XG5pbXBvcnQgeyBWZWMzIH0gZnJvbSAnLi4vbWF0aC9WZWMzLmpzJztcblxuY29uc3QgdGVtcE1hdDQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hdDQoKTtcbmNvbnN0IHRlbXBWZWMzYSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgVmVjMygpO1xuY29uc3QgdGVtcFZlYzNiID0gLyogQF9fUFVSRV9fICovIG5ldyBWZWMzKCk7XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGdsLCB7IG5lYXIgPSAwLjEsIGZhciA9IDEwMCwgZm92ID0gNDUsIGFzcGVjdCA9IDEsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgem9vbSA9IDEgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG5lYXIsIGZhciwgZm92LCBhc3BlY3QsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgem9vbSB9KTtcblxuICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLnZpZXdNYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLnByb2plY3Rpb25WaWV3TWF0cml4ID0gbmV3IE1hdDQoKTtcbiAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9uID0gbmV3IFZlYzMoKTtcblxuICAgICAgICAvLyBVc2Ugb3J0aG9ncmFwaGljIGlmIGxlZnQvcmlnaHQgc2V0LCBlbHNlIGRlZmF1bHQgdG8gcGVyc3BlY3RpdmUgY2FtZXJhXG4gICAgICAgIHRoaXMudHlwZSA9IGxlZnQgfHwgcmlnaHQgPyAnb3J0aG9ncmFwaGljJyA6ICdwZXJzcGVjdGl2ZSc7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ29ydGhvZ3JhcGhpYycpIHRoaXMub3J0aG9ncmFwaGljKCk7XG4gICAgICAgIGVsc2UgdGhpcy5wZXJzcGVjdGl2ZSgpO1xuICAgIH1cblxuICAgIHBlcnNwZWN0aXZlKHsgbmVhciA9IHRoaXMubmVhciwgZmFyID0gdGhpcy5mYXIsIGZvdiA9IHRoaXMuZm92LCBhc3BlY3QgPSB0aGlzLmFzcGVjdCB9ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG5lYXIsIGZhciwgZm92LCBhc3BlY3QgfSk7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeC5mcm9tUGVyc3BlY3RpdmUoeyBmb3Y6IGZvdiAqIChNYXRoLlBJIC8gMTgwKSwgYXNwZWN0LCBuZWFyLCBmYXIgfSk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdwZXJzcGVjdGl2ZSc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9ydGhvZ3JhcGhpYyh7XG4gICAgICAgIG5lYXIgPSB0aGlzLm5lYXIsXG4gICAgICAgIGZhciA9IHRoaXMuZmFyLFxuICAgICAgICBsZWZ0ID0gdGhpcy5sZWZ0IHx8IC0xLFxuICAgICAgICByaWdodCA9IHRoaXMucmlnaHQgfHwgMSxcbiAgICAgICAgYm90dG9tID0gdGhpcy5ib3R0b20gfHwgLTEsXG4gICAgICAgIHRvcCA9IHRoaXMudG9wIHx8IDEsXG4gICAgICAgIHpvb20gPSB0aGlzLnpvb20sXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBuZWFyLCBmYXIsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgem9vbSB9KTtcbiAgICAgICAgbGVmdCAvPSB6b29tO1xuICAgICAgICByaWdodCAvPSB6b29tO1xuICAgICAgICBib3R0b20gLz0gem9vbTtcbiAgICAgICAgdG9wIC89IHpvb207XG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeC5mcm9tT3J0aG9nb25hbCh7IGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyIH0pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnb3J0aG9ncmFwaGljJztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlTWF0cml4V29ybGQoKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG4gICAgICAgIHRoaXMudmlld01hdHJpeC5pbnZlcnNlKHRoaXMud29ybGRNYXRyaXgpO1xuICAgICAgICB0aGlzLndvcmxkTWF0cml4LmdldFRyYW5zbGF0aW9uKHRoaXMud29ybGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gdXNlZCBmb3Igc29ydGluZ1xuICAgICAgICB0aGlzLnByb2plY3Rpb25WaWV3TWF0cml4Lm11bHRpcGx5KHRoaXMucHJvamVjdGlvbk1hdHJpeCwgdGhpcy52aWV3TWF0cml4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbG9va0F0KHRhcmdldCkge1xuICAgICAgICBzdXBlci5sb29rQXQodGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUHJvamVjdCAzRCBjb29yZGluYXRlIHRvIDJEIHBvaW50XG4gICAgcHJvamVjdCh2KSB7XG4gICAgICAgIHYuYXBwbHlNYXRyaXg0KHRoaXMudmlld01hdHJpeCk7XG4gICAgICAgIHYuYXBwbHlNYXRyaXg0KHRoaXMucHJvamVjdGlvbk1hdHJpeCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFVucHJvamVjdCAyRCBwb2ludCB0byAzRCBjb29yZGluYXRlXG4gICAgdW5wcm9qZWN0KHYpIHtcbiAgICAgICAgdi5hcHBseU1hdHJpeDQodGVtcE1hdDQuaW52ZXJzZSh0aGlzLnByb2plY3Rpb25NYXRyaXgpKTtcbiAgICAgICAgdi5hcHBseU1hdHJpeDQodGhpcy53b3JsZE1hdHJpeCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVwZGF0ZUZydXN0dW0oKSB7XG4gICAgICAgIGlmICghdGhpcy5mcnVzdHVtKSB7XG4gICAgICAgICAgICB0aGlzLmZydXN0dW0gPSBbbmV3IFZlYzMoKSwgbmV3IFZlYzMoKSwgbmV3IFZlYzMoKSwgbmV3IFZlYzMoKSwgbmV3IFZlYzMoKSwgbmV3IFZlYzMoKV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gdGhpcy5wcm9qZWN0aW9uVmlld01hdHJpeDtcbiAgICAgICAgdGhpcy5mcnVzdHVtWzBdLnNldChtWzNdIC0gbVswXSwgbVs3XSAtIG1bNF0sIG1bMTFdIC0gbVs4XSkuY29uc3RhbnQgPSBtWzE1XSAtIG1bMTJdOyAvLyAteFxuICAgICAgICB0aGlzLmZydXN0dW1bMV0uc2V0KG1bM10gKyBtWzBdLCBtWzddICsgbVs0XSwgbVsxMV0gKyBtWzhdKS5jb25zdGFudCA9IG1bMTVdICsgbVsxMl07IC8vICt4XG4gICAgICAgIHRoaXMuZnJ1c3R1bVsyXS5zZXQobVszXSArIG1bMV0sIG1bN10gKyBtWzVdLCBtWzExXSArIG1bOV0pLmNvbnN0YW50ID0gbVsxNV0gKyBtWzEzXTsgLy8gK3lcbiAgICAgICAgdGhpcy5mcnVzdHVtWzNdLnNldChtWzNdIC0gbVsxXSwgbVs3XSAtIG1bNV0sIG1bMTFdIC0gbVs5XSkuY29uc3RhbnQgPSBtWzE1XSAtIG1bMTNdOyAvLyAteVxuICAgICAgICB0aGlzLmZydXN0dW1bNF0uc2V0KG1bM10gLSBtWzJdLCBtWzddIC0gbVs2XSwgbVsxMV0gLSBtWzEwXSkuY29uc3RhbnQgPSBtWzE1XSAtIG1bMTRdOyAvLyAreiAoZmFyKVxuICAgICAgICB0aGlzLmZydXN0dW1bNV0uc2V0KG1bM10gKyBtWzJdLCBtWzddICsgbVs2XSwgbVsxMV0gKyBtWzEwXSkuY29uc3RhbnQgPSBtWzE1XSArIG1bMTRdOyAvLyAteiAobmVhcilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW52TGVuID0gMS4wIC8gdGhpcy5mcnVzdHVtW2ldLmRpc3RhbmNlKCk7XG4gICAgICAgICAgICB0aGlzLmZydXN0dW1baV0ubXVsdGlwbHkoaW52TGVuKTtcbiAgICAgICAgICAgIHRoaXMuZnJ1c3R1bVtpXS5jb25zdGFudCAqPSBpbnZMZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcnVzdHVtSW50ZXJzZWN0c01lc2gobm9kZSwgd29ybGRNYXRyaXggPSBub2RlLndvcmxkTWF0cml4KSB7XG4gICAgICAgIC8vIElmIG5vIHBvc2l0aW9uIGF0dHJpYnV0ZSwgdHJlYXQgYXMgZnJ1c3R1bUN1bGxlZCBmYWxzZVxuICAgICAgICBpZiAoIW5vZGUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbikgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgaWYgKCFub2RlLmdlb21ldHJ5LmJvdW5kcyB8fCBub2RlLmdlb21ldHJ5LmJvdW5kcy5yYWRpdXMgPT09IEluZmluaXR5KSBub2RlLmdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuXG4gICAgICAgIGlmICghbm9kZS5nZW9tZXRyeS5ib3VuZHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRlbXBWZWMzYTtcbiAgICAgICAgY2VudGVyLmNvcHkobm9kZS5nZW9tZXRyeS5ib3VuZHMuY2VudGVyKTtcbiAgICAgICAgY2VudGVyLmFwcGx5TWF0cml4NCh3b3JsZE1hdHJpeCk7XG5cbiAgICAgICAgY29uc3QgcmFkaXVzID0gbm9kZS5nZW9tZXRyeS5ib3VuZHMucmFkaXVzICogd29ybGRNYXRyaXguZ2V0TWF4U2NhbGVPbkF4aXMoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mcnVzdHVtSW50ZXJzZWN0c1NwaGVyZShjZW50ZXIsIHJhZGl1cyk7XG4gICAgfVxuXG4gICAgZnJ1c3R1bUludGVyc2VjdHNTcGhlcmUoY2VudGVyLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gdGVtcFZlYzNiO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwbGFuZSA9IHRoaXMuZnJ1c3R1bVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gbm9ybWFsLmNvcHkocGxhbmUpLmRvdChjZW50ZXIpICsgcGxhbmUuY29uc3RhbnQ7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAtcmFkaXVzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiLy8gYXR0cmlidXRlIHBhcmFtc1xuLy8ge1xuLy8gICAgIGRhdGEgLSB0eXBlZCBhcnJheSBlZyBVSW50MTZBcnJheSBmb3IgaW5kaWNlcywgRmxvYXQzMkFycmF5XG4vLyAgICAgc2l6ZSAtIGludCBkZWZhdWx0IDFcbi8vICAgICBpbnN0YW5jZWQgLSBkZWZhdWx0IG51bGwuIFBhc3MgZGl2aXNvciBhbW91bnRcbi8vICAgICB0eXBlIC0gZ2wgZW51bSBkZWZhdWx0IGdsLlVOU0lHTkVEX1NIT1JUIGZvciAnaW5kZXgnLCBnbC5GTE9BVCBmb3Igb3RoZXJzXG4vLyAgICAgbm9ybWFsaXplZCAtIGJvb2xlYW4gZGVmYXVsdCBmYWxzZVxuXG4vLyAgICAgYnVmZmVyIC0gZ2wgYnVmZmVyLCBpZiBidWZmZXIgZXhpc3RzLCBkb24ndCBuZWVkIHRvIHByb3ZpZGUgZGF0YSAtIGFsdGhvdWdoIG5lZWRzIHBvc2l0aW9uIGRhdGEgZm9yIGJvdW5kcyBjYWxjdWxhdGlvblxuLy8gICAgIHN0cmlkZSAtIGRlZmF1bHQgMCAtIGZvciB3aGVuIHBhc3NpbmcgaW4gYnVmZmVyXG4vLyAgICAgb2Zmc2V0IC0gZGVmYXVsdCAwIC0gZm9yIHdoZW4gcGFzc2luZyBpbiBidWZmZXJcbi8vICAgICBjb3VudCAtIGRlZmF1bHQgbnVsbCAtIGZvciB3aGVuIHBhc3NpbmcgaW4gYnVmZmVyXG4vLyAgICAgbWluIC0gYXJyYXkgLSBmb3Igd2hlbiBwYXNzaW5nIGluIGJ1ZmZlclxuLy8gICAgIG1heCAtIGFycmF5IC0gZm9yIHdoZW4gcGFzc2luZyBpbiBidWZmZXJcbi8vIH1cblxuLy8gVE9ETzogZml0IGluIHRyYW5zZm9ybSBmZWVkYmFja1xuXG5pbXBvcnQgeyBWZWMzIH0gZnJvbSAnLi4vbWF0aC9WZWMzLmpzJztcblxuY29uc3QgdGVtcFZlYzMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFZlYzMoKTtcblxubGV0IElEID0gMTtcbmxldCBBVFRSX0lEID0gMTtcblxuLy8gVG8gc3RvcCBpbmlmaW5pdGUgd2FybmluZ3NcbmxldCBpc0JvdW5kc1dhcm5lZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBhdHRyaWJ1dGVzID0ge30pIHtcbiAgICAgICAgaWYgKCFnbC5jYW52YXMpIGNvbnNvbGUuZXJyb3IoJ2dsIG5vdCBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQgdG8gR2VvbWV0cnknKTtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgICAgICB0aGlzLmlkID0gSUQrKztcblxuICAgICAgICAvLyBTdG9yZSBvbmUgVkFPIHBlciBwcm9ncmFtIGF0dHJpYnV0ZSBsb2NhdGlvbnMgb3JkZXJcbiAgICAgICAgdGhpcy5WQU9zID0ge307XG5cbiAgICAgICAgdGhpcy5kcmF3UmFuZ2UgPSB7IHN0YXJ0OiAwLCBjb3VudDogMCB9O1xuICAgICAgICB0aGlzLmluc3RhbmNlZENvdW50ID0gMDtcblxuICAgICAgICAvLyBVbmJpbmQgY3VycmVudCBWQU8gc28gdGhhdCBuZXcgYnVmZmVycyBkb24ndCBnZXQgYWRkZWQgdG8gYWN0aXZlIG1lc2hcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuY3VycmVudEdlb21ldHJ5ID0gbnVsbDtcblxuICAgICAgICAvLyBBbGlhcyBmb3Igc3RhdGUgc3RvcmUgdG8gYXZvaWQgcmVkdW5kYW50IGNhbGxzIGZvciBnbG9iYWwgc3RhdGVcbiAgICAgICAgdGhpcy5nbFN0YXRlID0gdGhpcy5nbC5yZW5kZXJlci5zdGF0ZTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGJ1ZmZlcnNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEF0dHJpYnV0ZShrZXksIGF0dHIpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tleV0gPSBhdHRyO1xuXG4gICAgICAgIC8vIFNldCBvcHRpb25zXG4gICAgICAgIGF0dHIuaWQgPSBBVFRSX0lEKys7IC8vIFRPRE86IGN1cnJlbnRseSB1bnVzZWQsIHJlbW92ZT9cbiAgICAgICAgYXR0ci5zaXplID0gYXR0ci5zaXplIHx8IDE7XG4gICAgICAgIGF0dHIudHlwZSA9XG4gICAgICAgICAgICBhdHRyLnR5cGUgfHxcbiAgICAgICAgICAgIChhdHRyLmRhdGEuY29uc3RydWN0b3IgPT09IEZsb2F0MzJBcnJheVxuICAgICAgICAgICAgICAgID8gdGhpcy5nbC5GTE9BVFxuICAgICAgICAgICAgICAgIDogYXR0ci5kYXRhLmNvbnN0cnVjdG9yID09PSBVaW50MTZBcnJheVxuICAgICAgICAgICAgICAgID8gdGhpcy5nbC5VTlNJR05FRF9TSE9SVFxuICAgICAgICAgICAgICAgIDogdGhpcy5nbC5VTlNJR05FRF9JTlQpOyAvLyBVaW50MzJBcnJheVxuICAgICAgICBhdHRyLnRhcmdldCA9IGtleSA9PT0gJ2luZGV4JyA/IHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIgOiB0aGlzLmdsLkFSUkFZX0JVRkZFUjtcbiAgICAgICAgYXR0ci5ub3JtYWxpemVkID0gYXR0ci5ub3JtYWxpemVkIHx8IGZhbHNlO1xuICAgICAgICBhdHRyLnN0cmlkZSA9IGF0dHIuc3RyaWRlIHx8IDA7XG4gICAgICAgIGF0dHIub2Zmc2V0ID0gYXR0ci5vZmZzZXQgfHwgMDtcbiAgICAgICAgYXR0ci5jb3VudCA9IGF0dHIuY291bnQgfHwgKGF0dHIuc3RyaWRlID8gYXR0ci5kYXRhLmJ5dGVMZW5ndGggLyBhdHRyLnN0cmlkZSA6IGF0dHIuZGF0YS5sZW5ndGggLyBhdHRyLnNpemUpO1xuICAgICAgICBhdHRyLmRpdmlzb3IgPSBhdHRyLmluc3RhbmNlZCB8fCAwO1xuICAgICAgICBhdHRyLm5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGF0dHIudXNhZ2UgPSBhdHRyLnVzYWdlIHx8IHRoaXMuZ2wuU1RBVElDX0RSQVc7XG5cbiAgICAgICAgaWYgKCFhdHRyLmJ1ZmZlcikge1xuICAgICAgICAgICAgLy8gUHVzaCBkYXRhIHRvIGJ1ZmZlclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZ2VvbWV0cnkgY291bnRzLiBJZiBpbmRleGVkLCBpZ25vcmUgcmVndWxhciBhdHRyaWJ1dGVzXG4gICAgICAgIGlmIChhdHRyLmRpdmlzb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaXNJbnN0YW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VkQ291bnQgJiYgdGhpcy5pbnN0YW5jZWRDb3VudCAhPT0gYXR0ci5jb3VudCAqIGF0dHIuZGl2aXNvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZ2VvbWV0cnkgaGFzIG11bHRpcGxlIGluc3RhbmNlZCBidWZmZXJzIG9mIGRpZmZlcmVudCBsZW5ndGgnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuaW5zdGFuY2VkQ291bnQgPSBNYXRoLm1pbih0aGlzLmluc3RhbmNlZENvdW50LCBhdHRyLmNvdW50ICogYXR0ci5kaXZpc29yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlZENvdW50ID0gYXR0ci5jb3VudCAqIGF0dHIuZGl2aXNvcjtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbmRleCcpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1JhbmdlLmNvdW50ID0gYXR0ci5jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5hdHRyaWJ1dGVzLmluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdSYW5nZS5jb3VudCA9IE1hdGgubWF4KHRoaXMuZHJhd1JhbmdlLmNvdW50LCBhdHRyLmNvdW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUF0dHJpYnV0ZShhdHRyKSB7XG4gICAgICAgIGNvbnN0IGlzTmV3QnVmZmVyID0gIWF0dHIuYnVmZmVyO1xuICAgICAgICBpZiAoaXNOZXdCdWZmZXIpIGF0dHIuYnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2xTdGF0ZS5ib3VuZEJ1ZmZlciAhPT0gYXR0ci5idWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihhdHRyLnRhcmdldCwgYXR0ci5idWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5nbFN0YXRlLmJvdW5kQnVmZmVyID0gYXR0ci5idWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV3QnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoYXR0ci50YXJnZXQsIGF0dHIuZGF0YSwgYXR0ci51c2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoYXR0ci50YXJnZXQsIDAsIGF0dHIuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0ci5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldEluZGV4KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWRkQXR0cmlidXRlKCdpbmRleCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXREcmF3UmFuZ2Uoc3RhcnQsIGNvdW50KSB7XG4gICAgICAgIHRoaXMuZHJhd1JhbmdlLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuZHJhd1JhbmdlLmNvdW50ID0gY291bnQ7XG4gICAgfVxuXG4gICAgc2V0SW5zdGFuY2VkQ291bnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZWRDb3VudCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGNyZWF0ZVZBTyhwcm9ncmFtKSB7XG4gICAgICAgIHRoaXMuVkFPc1twcm9ncmFtLmF0dHJpYnV0ZU9yZGVyXSA9IHRoaXMuZ2wucmVuZGVyZXIuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5iaW5kVmVydGV4QXJyYXkodGhpcy5WQU9zW3Byb2dyYW0uYXR0cmlidXRlT3JkZXJdKTtcbiAgICAgICAgdGhpcy5iaW5kQXR0cmlidXRlcyhwcm9ncmFtKTtcbiAgICB9XG5cbiAgICBiaW5kQXR0cmlidXRlcyhwcm9ncmFtKSB7XG4gICAgICAgIC8vIExpbmsgYWxsIGF0dHJpYnV0ZXMgdG8gcHJvZ3JhbSB1c2luZyBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyXG4gICAgICAgIHByb2dyYW0uYXR0cmlidXRlTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uLCB7IG5hbWUsIHR5cGUgfSkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgZ2VvbWV0cnkgbWlzc2luZyBhIHJlcXVpcmVkIHNoYWRlciBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBhY3RpdmUgYXR0cmlidXRlICR7bmFtZX0gbm90IGJlaW5nIHN1cHBsaWVkYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoYXR0ci50YXJnZXQsIGF0dHIuYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGF0ZS5ib3VuZEJ1ZmZlciA9IGF0dHIuYnVmZmVyO1xuXG4gICAgICAgICAgICAvLyBGb3IgbWF0cml4IGF0dHJpYnV0ZXMsIGJ1ZmZlciBuZWVkcyB0byBiZSBkZWZpbmVkIHBlciBjb2x1bW5cbiAgICAgICAgICAgIGxldCBudW1Mb2MgPSAxO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IDM1Njc0KSBudW1Mb2MgPSAyOyAvLyBtYXQyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMzU2NzUpIG51bUxvYyA9IDM7IC8vIG1hdDNcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAzNTY3NikgbnVtTG9jID0gNDsgLy8gbWF0NFxuXG4gICAgICAgICAgICBjb25zdCBzaXplID0gYXR0ci5zaXplIC8gbnVtTG9jO1xuICAgICAgICAgICAgY29uc3Qgc3RyaWRlID0gbnVtTG9jID09PSAxID8gMCA6IG51bUxvYyAqIG51bUxvYyAqIDQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBudW1Mb2MgPT09IDEgPyAwIDogbnVtTG9jICogNDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Mb2M7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihsb2NhdGlvbiArIGksIHNpemUsIGF0dHIudHlwZSwgYXR0ci5ub3JtYWxpemVkLCBhdHRyLnN0cmlkZSArIHN0cmlkZSwgYXR0ci5vZmZzZXQgKyBpICogb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uICsgaSk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgaW5zdGFuY2VkIGF0dHJpYnV0ZXMsIGRpdmlzb3IgbmVlZHMgdG8gYmUgc2V0LlxuICAgICAgICAgICAgICAgIC8vIEZvciBmaXJlZm94LCBuZWVkIHRvIHNldCBiYWNrIHRvIDAgaWYgbm9uLWluc3RhbmNlZCBkcmF3biBhZnRlciBpbnN0YW5jZWQuIEVsc2Ugd29uJ3QgcmVuZGVyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci52ZXJ0ZXhBdHRyaWJEaXZpc29yKGxvY2F0aW9uICsgaSwgYXR0ci5kaXZpc29yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmluZCBpbmRpY2VzIGlmIGdlb21ldHJ5IGluZGV4ZWRcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlcy5pbmRleCkgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuYXR0cmlidXRlcy5pbmRleC5idWZmZXIpO1xuICAgIH1cblxuICAgIGRyYXcoeyBwcm9ncmFtLCBtb2RlID0gdGhpcy5nbC5UUklBTkdMRVMgfSkge1xuICAgICAgICBpZiAodGhpcy5nbC5yZW5kZXJlci5jdXJyZW50R2VvbWV0cnkgIT09IGAke3RoaXMuaWR9XyR7cHJvZ3JhbS5hdHRyaWJ1dGVPcmRlcn1gKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuVkFPc1twcm9ncmFtLmF0dHJpYnV0ZU9yZGVyXSkgdGhpcy5jcmVhdGVWQU8ocHJvZ3JhbSk7XG4gICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLlZBT3NbcHJvZ3JhbS5hdHRyaWJ1dGVPcmRlcl0pO1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5jdXJyZW50R2VvbWV0cnkgPSBgJHt0aGlzLmlkfV8ke3Byb2dyYW0uYXR0cmlidXRlT3JkZXJ9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBhdHRyaWJ1dGVzIG5lZWQgdXBkYXRpbmdcbiAgICAgICAgcHJvZ3JhbS5hdHRyaWJ1dGVMb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24sIHsgbmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5hdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICAgICAgaWYgKGF0dHIubmVlZHNVcGRhdGUpIHRoaXMudXBkYXRlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGb3IgZHJhd0VsZW1lbnRzLCBvZmZzZXQgbmVlZHMgdG8gYmUgbXVsdGlwbGUgb2YgdHlwZSBzaXplXG4gICAgICAgIGxldCBpbmRleEJ5dGVzUGVyRWxlbWVudCA9IDI7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXg/LnR5cGUgPT09IHRoaXMuZ2wuVU5TSUdORURfSU5UKSBpbmRleEJ5dGVzUGVyRWxlbWVudCA9IDQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnN0YW5jZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmRyYXdFbGVtZW50c0luc3RhbmNlZChcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmFuZ2UuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5pbmRleC50eXBlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuaW5kZXgub2Zmc2V0ICsgdGhpcy5kcmF3UmFuZ2Uuc3RhcnQgKiBpbmRleEJ5dGVzUGVyRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZWRDb3VudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wucmVuZGVyZXIuZHJhd0FycmF5c0luc3RhbmNlZChtb2RlLCB0aGlzLmRyYXdSYW5nZS5zdGFydCwgdGhpcy5kcmF3UmFuZ2UuY291bnQsIHRoaXMuaW5zdGFuY2VkQ291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlcy5pbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKFxuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdSYW5nZS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmluZGV4LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5pbmRleC5vZmZzZXQgKyB0aGlzLmRyYXdSYW5nZS5zdGFydCAqIGluZGV4Qnl0ZXNQZXJFbGVtZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKG1vZGUsIHRoaXMuZHJhd1JhbmdlLnN0YXJ0LCB0aGlzLmRyYXdSYW5nZS5jb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgLy8gVXNlIHBvc2l0aW9uIGJ1ZmZlciwgb3IgbWluL21heCBpZiBhdmFpbGFibGVcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuYXR0cmlidXRlcy5wb3NpdGlvbjtcbiAgICAgICAgLy8gaWYgKGF0dHIubWluKSByZXR1cm4gWy4uLmF0dHIubWluLCAuLi5hdHRyLm1heF07XG4gICAgICAgIGlmIChhdHRyLmRhdGEpIHJldHVybiBhdHRyO1xuICAgICAgICBpZiAoaXNCb3VuZHNXYXJuZWQpIHJldHVybjtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBwb3NpdGlvbiBidWZmZXIgZGF0YSBmb3VuZCB0byBjb21wdXRlIGJvdW5kcycpO1xuICAgICAgICByZXR1cm4gKGlzQm91bmRzV2FybmVkID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUJvdW5kaW5nQm94KGF0dHIpIHtcbiAgICAgICAgaWYgKCFhdHRyKSBhdHRyID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBhcnJheSA9IGF0dHIuZGF0YTtcbiAgICAgICAgLy8gRGF0YSBsb2FkZWQgc2hvdWxkbid0IGhhYXZlIHN0cmlkZSwgb25seSBidWZmZXJzXG4gICAgICAgIC8vIGNvbnN0IHN0cmlkZSA9IGF0dHIuc3RyaWRlID8gYXR0ci5zdHJpZGUgLyBhcnJheS5CWVRFU19QRVJfRUxFTUVOVCA6IGF0dHIuc2l6ZTtcbiAgICAgICAgY29uc3Qgc3RyaWRlID0gYXR0ci5zaXplO1xuXG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRzID0ge1xuICAgICAgICAgICAgICAgIG1pbjogbmV3IFZlYzMoKSxcbiAgICAgICAgICAgICAgICBtYXg6IG5ldyBWZWMzKCksXG4gICAgICAgICAgICAgICAgY2VudGVyOiBuZXcgVmVjMygpLFxuICAgICAgICAgICAgICAgIHNjYWxlOiBuZXcgVmVjMygpLFxuICAgICAgICAgICAgICAgIHJhZGl1czogSW5maW5pdHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5ib3VuZHMubWluO1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLmJvdW5kcy5tYXg7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuYm91bmRzLmNlbnRlcjtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmJvdW5kcy5zY2FsZTtcblxuICAgICAgICBtaW4uc2V0KCtJbmZpbml0eSk7XG4gICAgICAgIG1heC5zZXQoLUluZmluaXR5KTtcblxuICAgICAgICAvLyBUT0RPOiBjaGVjayBzaXplIG9mIHBvc2l0aW9uIChlZyB0cmlhbmdsZSB3aXRoIFZlYzIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBhcnJheVtpICsgMV07XG4gICAgICAgICAgICBjb25zdCB6ID0gYXJyYXlbaSArIDJdO1xuXG4gICAgICAgICAgICBtaW4ueCA9IE1hdGgubWluKHgsIG1pbi54KTtcbiAgICAgICAgICAgIG1pbi55ID0gTWF0aC5taW4oeSwgbWluLnkpO1xuICAgICAgICAgICAgbWluLnogPSBNYXRoLm1pbih6LCBtaW4ueik7XG5cbiAgICAgICAgICAgIG1heC54ID0gTWF0aC5tYXgoeCwgbWF4LngpO1xuICAgICAgICAgICAgbWF4LnkgPSBNYXRoLm1heCh5LCBtYXgueSk7XG4gICAgICAgICAgICBtYXgueiA9IE1hdGgubWF4KHosIG1heC56KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjYWxlLnN1YihtYXgsIG1pbik7XG4gICAgICAgIGNlbnRlci5hZGQobWluLCBtYXgpLmRpdmlkZSgyKTtcbiAgICB9XG5cbiAgICBjb21wdXRlQm91bmRpbmdTcGhlcmUoYXR0cikge1xuICAgICAgICBpZiAoIWF0dHIpIGF0dHIgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gYXR0ci5kYXRhO1xuICAgICAgICAvLyBEYXRhIGxvYWRlZCBzaG91bGRuJ3QgaGFhdmUgc3RyaWRlLCBvbmx5IGJ1ZmZlcnNcbiAgICAgICAgLy8gY29uc3Qgc3RyaWRlID0gYXR0ci5zdHJpZGUgPyBhdHRyLnN0cmlkZSAvIGFycmF5LkJZVEVTX1BFUl9FTEVNRU5UIDogYXR0ci5zaXplO1xuICAgICAgICBjb25zdCBzdHJpZGUgPSBhdHRyLnNpemU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmJvdW5kcykgdGhpcy5jb21wdXRlQm91bmRpbmdCb3goYXR0cik7XG5cbiAgICAgICAgbGV0IG1heFJhZGl1c1NxID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgICAgICAgdGVtcFZlYzMuZnJvbUFycmF5KGFycmF5LCBpKTtcbiAgICAgICAgICAgIG1heFJhZGl1c1NxID0gTWF0aC5tYXgobWF4UmFkaXVzU3EsIHRoaXMuYm91bmRzLmNlbnRlci5zcXVhcmVkRGlzdGFuY2UodGVtcFZlYzMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm91bmRzLnJhZGl1cyA9IE1hdGguc3FydChtYXhSYWRpdXNTcSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5WQU9zKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmRlbGV0ZVZlcnRleEFycmF5KHRoaXMuVkFPc1trZXldKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLlZBT3Nba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmF0dHJpYnV0ZXNba2V5XS5idWZmZXIpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0uanMnO1xuaW1wb3J0IHsgTWF0MyB9IGZyb20gJy4uL21hdGgvTWF0My5qcyc7XG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi4vbWF0aC9NYXQ0LmpzJztcblxubGV0IElEID0gMDtcblxuZXhwb3J0IGNsYXNzIE1lc2ggZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGdsLCB7IGdlb21ldHJ5LCBwcm9ncmFtLCBtb2RlID0gZ2wuVFJJQU5HTEVTLCBmcnVzdHVtQ3VsbGVkID0gdHJ1ZSwgcmVuZGVyT3JkZXIgPSAwIH0gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoIWdsLmNhbnZhcykgY29uc29sZS5lcnJvcignZ2wgbm90IHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudCB0byBNZXNoJyk7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcblxuICAgICAgICAvLyBVc2VkIHRvIHNraXAgZnJ1c3R1bSBjdWxsaW5nXG4gICAgICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZydXN0dW1DdWxsZWQ7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgc29ydGluZyB0byBmb3JjZSBhbiBvcmRlclxuICAgICAgICB0aGlzLnJlbmRlck9yZGVyID0gcmVuZGVyT3JkZXI7XG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4ID0gbmV3IE1hdDQoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxNYXRyaXggPSBuZXcgTWF0MygpO1xuICAgICAgICB0aGlzLmJlZm9yZVJlbmRlckNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmFmdGVyUmVuZGVyQ2FsbGJhY2tzID0gW107XG4gICAgfVxuXG4gICAgb25CZWZvcmVSZW5kZXIoZikge1xuICAgICAgICB0aGlzLmJlZm9yZVJlbmRlckNhbGxiYWNrcy5wdXNoKGYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkFmdGVyUmVuZGVyKGYpIHtcbiAgICAgICAgdGhpcy5hZnRlclJlbmRlckNhbGxiYWNrcy5wdXNoKGYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3KHsgY2FtZXJhIH0gPSB7fSkge1xuICAgICAgICBpZiAoY2FtZXJhKSB7XG4gICAgICAgICAgICAvLyBBZGQgZW1wdHkgbWF0cml4IHVuaWZvcm1zIHRvIHByb2dyYW0gaWYgdW5zZXRcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtLnVuaWZvcm1zLm1vZGVsTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb2dyYW0udW5pZm9ybXMsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgdmlld01hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbFZpZXdNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsTWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb25NYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb246IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBtYXRyaXggdW5pZm9ybXNcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5wcm9qZWN0aW9uTWF0cml4LnZhbHVlID0gY2FtZXJhLnByb2plY3Rpb25NYXRyaXg7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMuY2FtZXJhUG9zaXRpb24udmFsdWUgPSBjYW1lcmEud29ybGRQb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy52aWV3TWF0cml4LnZhbHVlID0gY2FtZXJhLnZpZXdNYXRyaXg7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5tdWx0aXBseShjYW1lcmEudmlld01hdHJpeCwgdGhpcy53b3JsZE1hdHJpeCk7XG4gICAgICAgICAgICB0aGlzLm5vcm1hbE1hdHJpeC5nZXROb3JtYWxNYXRyaXgodGhpcy5tb2RlbFZpZXdNYXRyaXgpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLm1vZGVsTWF0cml4LnZhbHVlID0gdGhpcy53b3JsZE1hdHJpeDtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5tb2RlbFZpZXdNYXRyaXgudmFsdWUgPSB0aGlzLm1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5ub3JtYWxNYXRyaXgudmFsdWUgPSB0aGlzLm5vcm1hbE1hdHJpeDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlZm9yZVJlbmRlckNhbGxiYWNrcy5mb3JFYWNoKChmKSA9PiBmICYmIGYoeyBtZXNoOiB0aGlzLCBjYW1lcmEgfSkpO1xuXG4gICAgICAgIC8vIGRldGVybWluZSBpZiBmYWNlcyBuZWVkIHRvIGJlIGZsaXBwZWQgLSB3aGVuIG1lc2ggc2NhbGVkIG5lZ2F0aXZlbHlcbiAgICAgICAgbGV0IGZsaXBGYWNlcyA9IHRoaXMucHJvZ3JhbS5jdWxsRmFjZSAmJiB0aGlzLndvcmxkTWF0cml4LmRldGVybWluYW50KCkgPCAwO1xuICAgICAgICB0aGlzLnByb2dyYW0udXNlKHsgZmxpcEZhY2VzIH0pO1xuICAgICAgICB0aGlzLmdlb21ldHJ5LmRyYXcoeyBtb2RlOiB0aGlzLm1vZGUsIHByb2dyYW06IHRoaXMucHJvZ3JhbSB9KTtcbiAgICAgICAgdGhpcy5hZnRlclJlbmRlckNhbGxiYWNrcy5mb3JFYWNoKChmKSA9PiBmICYmIGYoeyBtZXNoOiB0aGlzLCBjYW1lcmEgfSkpO1xuICAgIH1cbn1cbiIsIi8vIFRPRE86IHVwbG9hZCBlbXB0eSB0ZXh0dXJlIGlmIG51bGwgPyBtYXliZSBub3Rcbi8vIFRPRE86IHVwbG9hZCBpZGVudGl0eSBtYXRyaXggaWYgbnVsbCA/XG4vLyBUT0RPOiBzYW1wbGVyIEN1YmVcblxubGV0IElEID0gMTtcblxuLy8gY2FjaGUgb2YgdHlwZWQgYXJyYXlzIHVzZWQgdG8gZmxhdHRlbiB1bmlmb3JtIGFycmF5c1xuY29uc3QgYXJyYXlDYWNoZUYzMiA9IHt9O1xuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGdsLFxuICAgICAgICB7XG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHVuaWZvcm1zID0ge30sXG5cbiAgICAgICAgICAgIHRyYW5zcGFyZW50ID0gZmFsc2UsXG4gICAgICAgICAgICBjdWxsRmFjZSA9IGdsLkJBQ0ssXG4gICAgICAgICAgICBmcm9udEZhY2UgPSBnbC5DQ1csXG4gICAgICAgICAgICBkZXB0aFRlc3QgPSB0cnVlLFxuICAgICAgICAgICAgZGVwdGhXcml0ZSA9IHRydWUsXG4gICAgICAgICAgICBkZXB0aEZ1bmMgPSBnbC5MRVNTLFxuICAgICAgICB9ID0ge31cbiAgICApIHtcbiAgICAgICAgaWYgKCFnbC5jYW52YXMpIGNvbnNvbGUuZXJyb3IoJ2dsIG5vdCBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQgdG8gUHJvZ3JhbScpO1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSB1bmlmb3JtcztcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG5cbiAgICAgICAgaWYgKCF2ZXJ0ZXgpIGNvbnNvbGUud2FybigndmVydGV4IHNoYWRlciBub3Qgc3VwcGxpZWQnKTtcbiAgICAgICAgaWYgKCFmcmFnbWVudCkgY29uc29sZS53YXJuKCdmcmFnbWVudCBzaGFkZXIgbm90IHN1cHBsaWVkJyk7XG5cbiAgICAgICAgLy8gU3RvcmUgcHJvZ3JhbSBzdGF0ZVxuICAgICAgICB0aGlzLnRyYW5zcGFyZW50ID0gdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRoaXMuY3VsbEZhY2UgPSBjdWxsRmFjZTtcbiAgICAgICAgdGhpcy5mcm9udEZhY2UgPSBmcm9udEZhY2U7XG4gICAgICAgIHRoaXMuZGVwdGhUZXN0ID0gZGVwdGhUZXN0O1xuICAgICAgICB0aGlzLmRlcHRoV3JpdGUgPSBkZXB0aFdyaXRlO1xuICAgICAgICB0aGlzLmRlcHRoRnVuYyA9IGRlcHRoRnVuYztcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMgPSB7fTtcbiAgICAgICAgdGhpcy5ibGVuZEVxdWF0aW9uID0ge307XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgYmxlbmRGdW5jIGlmIHRyYW5zcGFyZW50IGZsYWdnZWRcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwYXJlbnQgJiYgIXRoaXMuYmxlbmRGdW5jLnNyYykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2wucmVuZGVyZXIucHJlbXVsdGlwbGllZEFscGhhKSB0aGlzLnNldEJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5zZXRCbGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21waWxlIHZlcnRleCBzaGFkZXIgYW5kIGxvZyBlcnJvcnNcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UodmVydGV4U2hhZGVyLCB2ZXJ0ZXgpO1xuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIGlmIChnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRleFNoYWRlcikgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0ZXhTaGFkZXIpfVxcblZlcnRleCBTaGFkZXJcXG4ke2FkZExpbmVOdW1iZXJzKHZlcnRleCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21waWxlIGZyYWdtZW50IHNoYWRlciBhbmQgbG9nIGVycm9yc1xuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXIsIGZyYWdtZW50KTtcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGlmIChnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdtZW50U2hhZGVyKSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdtZW50U2hhZGVyKX1cXG5GcmFnbWVudCBTaGFkZXJcXG4ke2FkZExpbmVOdW1iZXJzKGZyYWdtZW50KX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBpbGUgcHJvZ3JhbSBhbmQgbG9nIGVycm9yc1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICAgICAgZ2wubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMucHJvZ3JhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHNoYWRlciBvbmNlIGxpbmtlZFxuICAgICAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcblxuICAgICAgICAvLyBHZXQgYWN0aXZlIHVuaWZvcm0gbG9jYXRpb25zXG4gICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGV0IG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG4gICAgICAgIGZvciAobGV0IHVJbmRleCA9IDA7IHVJbmRleCA8IG51bVVuaWZvcm1zOyB1SW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHVuaWZvcm0gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHRoaXMucHJvZ3JhbSwgdUluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5zZXQodW5pZm9ybSwgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgdW5pZm9ybS5uYW1lKSk7XG5cbiAgICAgICAgICAgIC8vIHNwbGl0IHVuaWZvcm1zJyBuYW1lcyB0byBzZXBhcmF0ZSBhcnJheSBhbmQgc3RydWN0IGRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSB1bmlmb3JtLm5hbWUubWF0Y2goLyhcXHcrKS9nKTtcblxuICAgICAgICAgICAgdW5pZm9ybS51bmlmb3JtTmFtZSA9IHNwbGl0WzBdO1xuICAgICAgICAgICAgdW5pZm9ybS5uYW1lQ29tcG9uZW50cyA9IHNwbGl0LnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGFjdGl2ZSBhdHRyaWJ1dGUgbG9jYXRpb25zXG4gICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgbnVtQXR0cmlicyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5BQ1RJVkVfQVRUUklCVVRFUyk7XG4gICAgICAgIGZvciAobGV0IGFJbmRleCA9IDA7IGFJbmRleCA8IG51bUF0dHJpYnM7IGFJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBnbC5nZXRBY3RpdmVBdHRyaWIodGhpcy5wcm9ncmFtLCBhSW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sIGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIC8vIElnbm9yZSBzcGVjaWFsIGJ1aWx0LWluIGlucHV0cy4gZWcgZ2xfVmVydGV4SUQsIGdsX0luc3RhbmNlSURcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbG9jYXRpb25zW2xvY2F0aW9uXSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuc2V0KGF0dHJpYnV0ZSwgbG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT3JkZXIgPSBsb2NhdGlvbnMuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRGdW5jKHNyYywgZHN0LCBzcmNBbHBoYSwgZHN0QWxwaGEpIHtcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5kc3QgPSBkc3Q7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLnNyY0FscGhhID0gc3JjQWxwaGE7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLmRzdEFscGhhID0gZHN0QWxwaGE7XG4gICAgICAgIGlmIChzcmMpIHRoaXMudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldEJsZW5kRXF1YXRpb24obW9kZVJHQiwgbW9kZUFscGhhKSB7XG4gICAgICAgIHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlUkdCID0gbW9kZVJHQjtcbiAgICAgICAgdGhpcy5ibGVuZEVxdWF0aW9uLm1vZGVBbHBoYSA9IG1vZGVBbHBoYTtcbiAgICB9XG5cbiAgICBhcHBseVN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aFRlc3QpIHRoaXMuZ2wucmVuZGVyZXIuZW5hYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG4gICAgICAgIGVsc2UgdGhpcy5nbC5yZW5kZXJlci5kaXNhYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VsbEZhY2UpIHRoaXMuZ2wucmVuZGVyZXIuZW5hYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLnJlbmRlcmVyLmRpc2FibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xuXG4gICAgICAgIGlmICh0aGlzLmJsZW5kRnVuYy5zcmMpIHRoaXMuZ2wucmVuZGVyZXIuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICBlbHNlIHRoaXMuZ2wucmVuZGVyZXIuZGlzYWJsZSh0aGlzLmdsLkJMRU5EKTtcblxuICAgICAgICBpZiAodGhpcy5jdWxsRmFjZSkgdGhpcy5nbC5yZW5kZXJlci5zZXRDdWxsRmFjZSh0aGlzLmN1bGxGYWNlKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXRGcm9udEZhY2UodGhpcy5mcm9udEZhY2UpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldERlcHRoTWFzayh0aGlzLmRlcHRoV3JpdGUpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldERlcHRoRnVuYyh0aGlzLmRlcHRoRnVuYyk7XG4gICAgICAgIGlmICh0aGlzLmJsZW5kRnVuYy5zcmMpXG4gICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldEJsZW5kRnVuYyh0aGlzLmJsZW5kRnVuYy5zcmMsIHRoaXMuYmxlbmRGdW5jLmRzdCwgdGhpcy5ibGVuZEZ1bmMuc3JjQWxwaGEsIHRoaXMuYmxlbmRGdW5jLmRzdEFscGhhKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXRCbGVuZEVxdWF0aW9uKHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlUkdCLCB0aGlzLmJsZW5kRXF1YXRpb24ubW9kZUFscGhhKTtcbiAgICB9XG5cbiAgICB1c2UoeyBmbGlwRmFjZXMgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgbGV0IHRleHR1cmVVbml0ID0gLTE7XG4gICAgICAgIGNvbnN0IHByb2dyYW1BY3RpdmUgPSB0aGlzLmdsLnJlbmRlcmVyLnN0YXRlLmN1cnJlbnRQcm9ncmFtID09PSB0aGlzLmlkO1xuXG4gICAgICAgIC8vIEF2b2lkIGdsIGNhbGwgaWYgcHJvZ3JhbSBhbHJlYWR5IGluIHVzZVxuICAgICAgICBpZiAoIXByb2dyYW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zdGF0ZS5jdXJyZW50UHJvZ3JhbSA9IHRoaXMuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgb25seSB0aGUgYWN0aXZlIHVuaWZvcm1zIGZvdW5kIGluIHRoZSBzaGFkZXJcbiAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uLCBhY3RpdmVVbmlmb3JtKSA9PiB7XG4gICAgICAgICAgICBsZXQgdW5pZm9ybSA9IHRoaXMudW5pZm9ybXNbYWN0aXZlVW5pZm9ybS51bmlmb3JtTmFtZV07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGFjdGl2ZVVuaWZvcm0ubmFtZUNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVuaWZvcm0pIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB1bmlmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gPSB1bmlmb3JtW2NvbXBvbmVudF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHVuaWZvcm0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF1bmlmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhcm4oYEFjdGl2ZSB1bmlmb3JtICR7YWN0aXZlVW5pZm9ybS5uYW1lfSBoYXMgbm90IGJlZW4gc3VwcGxpZWRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVuaWZvcm0gJiYgdW5pZm9ybS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhcm4oYCR7YWN0aXZlVW5pZm9ybS5uYW1lfSB1bmlmb3JtIGlzIG1pc3NpbmcgYSB2YWx1ZSBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVuaWZvcm0udmFsdWUudGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHRleHR1cmVVbml0ID0gdGV4dHVyZVVuaXQgKyAxO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGV4dHVyZSBuZWVkcyB0byBiZSB1cGRhdGVkXG4gICAgICAgICAgICAgICAgdW5pZm9ybS52YWx1ZS51cGRhdGUodGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRVbmlmb3JtKHRoaXMuZ2wsIGFjdGl2ZVVuaWZvcm0udHlwZSwgbG9jYXRpb24sIHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIHRleHR1cmUgYXJyYXlzLCBzZXQgdW5pZm9ybSBhcyBhbiBhcnJheSBvZiB0ZXh0dXJlIHVuaXRzIGluc3RlYWQgb2YganVzdCBvbmVcbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnZhbHVlLmxlbmd0aCAmJiB1bmlmb3JtLnZhbHVlWzBdLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlVW5pdHMgPSBbXTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLnZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVVbml0ID0gdGV4dHVyZVVuaXQgKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS51cGRhdGUodGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlVW5pdHMucHVzaCh0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VW5pZm9ybSh0aGlzLmdsLCBhY3RpdmVVbmlmb3JtLnR5cGUsIGxvY2F0aW9uLCB0ZXh0dXJlVW5pdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRVbmlmb3JtKHRoaXMuZ2wsIGFjdGl2ZVVuaWZvcm0udHlwZSwgbG9jYXRpb24sIHVuaWZvcm0udmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGx5U3RhdGUoKTtcbiAgICAgICAgaWYgKGZsaXBGYWNlcykgdGhpcy5nbC5yZW5kZXJlci5zZXRGcm9udEZhY2UodGhpcy5mcm9udEZhY2UgPT09IHRoaXMuZ2wuQ0NXID8gdGhpcy5nbC5DVyA6IHRoaXMuZ2wuQ0NXKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybShnbCwgdHlwZSwgbG9jYXRpb24sIHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGggPyBmbGF0dGVuKHZhbHVlKSA6IHZhbHVlO1xuICAgIGNvbnN0IHNldFZhbHVlID0gZ2wucmVuZGVyZXIuc3RhdGUudW5pZm9ybUxvY2F0aW9ucy5nZXQobG9jYXRpb24pO1xuXG4gICAgLy8gQXZvaWQgcmVkdW5kYW50IHVuaWZvcm0gY29tbWFuZHNcbiAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzZXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHNldFZhbHVlLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjbG9uZSBhcnJheSB0byBzdG9yZSBhcyBjYWNoZVxuICAgICAgICAgICAgZ2wucmVuZGVyZXIuc3RhdGUudW5pZm9ybUxvY2F0aW9ucy5zZXQobG9jYXRpb24sIHZhbHVlLnNsaWNlKDApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcnJheXNFcXVhbChzZXRWYWx1ZSwgdmFsdWUpKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYWNoZWQgYXJyYXkgdmFsdWVzXG4gICAgICAgICAgICBzZXRWYWx1ZS5zZXQgPyBzZXRWYWx1ZS5zZXQodmFsdWUpIDogc2V0QXJyYXkoc2V0VmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KGxvY2F0aW9uLCBzZXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2V0VmFsdWUgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgNTEyNjpcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPyBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2YWx1ZSkgOiBnbC51bmlmb3JtMWYobG9jYXRpb24sIHZhbHVlKTsgLy8gRkxPQVRcbiAgICAgICAgY2FzZSAzNTY2NDpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUX1ZFQzJcbiAgICAgICAgY2FzZSAzNTY2NTpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUX1ZFQzNcbiAgICAgICAgY2FzZSAzNTY2NjpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUX1ZFQzRcbiAgICAgICAgY2FzZSAzNTY3MDogLy8gQk9PTFxuICAgICAgICBjYXNlIDUxMjQ6IC8vIElOVFxuICAgICAgICBjYXNlIDM1Njc4OiAvLyBTQU1QTEVSXzJEXG4gICAgICAgIGNhc2UgMzU2ODA6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID8gZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdmFsdWUpIDogZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7IC8vIFNBTVBMRVJfQ1VCRVxuICAgICAgICBjYXNlIDM1NjcxOiAvLyBCT09MX1ZFQzJcbiAgICAgICAgY2FzZSAzNTY2NzpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIElOVF9WRUMyXG4gICAgICAgIGNhc2UgMzU2NzI6IC8vIEJPT0xfVkVDM1xuICAgICAgICBjYXNlIDM1NjY4OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHZhbHVlKTsgLy8gSU5UX1ZFQzNcbiAgICAgICAgY2FzZSAzNTY3MzogLy8gQk9PTF9WRUM0XG4gICAgICAgIGNhc2UgMzU2Njk6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBJTlRfVkVDNFxuICAgICAgICBjYXNlIDM1Njc0OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2YWx1ZSk7IC8vIEZMT0FUX01BVDJcbiAgICAgICAgY2FzZSAzNTY3NTpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtTWF0cml4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUpOyAvLyBGTE9BVF9NQVQzXG4gICAgICAgIGNhc2UgMzU2NzY6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlKTsgLy8gRkxPQVRfTUFUNFxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTGluZU51bWJlcnMoc3RyaW5nKSB7XG4gICAgbGV0IGxpbmVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpbmVzW2ldID0gaSArIDEgKyAnOiAnICsgbGluZXNbaV07XG4gICAgfVxuICAgIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhKSB7XG4gICAgY29uc3QgYXJyYXlMZW4gPSBhLmxlbmd0aDtcbiAgICBjb25zdCB2YWx1ZUxlbiA9IGFbMF0ubGVuZ3RoO1xuICAgIGlmICh2YWx1ZUxlbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gYTtcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheUxlbiAqIHZhbHVlTGVuO1xuICAgIGxldCB2YWx1ZSA9IGFycmF5Q2FjaGVGMzJbbGVuZ3RoXTtcbiAgICBpZiAoIXZhbHVlKSBhcnJheUNhY2hlRjMyW2xlbmd0aF0gPSB2YWx1ZSA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGVuOyBpKyspIHZhbHVlLnNldChhW2ldLCBpICogdmFsdWVMZW4pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXRBcnJheShhLCBiKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBhW2ldID0gYltpXTtcbiAgICB9XG59XG5cbmxldCB3YXJuQ291bnQgPSAwO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gICAgaWYgKHdhcm5Db3VudCA+IDEwMCkgcmV0dXJuO1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB3YXJuQ291bnQrKztcbiAgICBpZiAod2FybkNvdW50ID4gMTAwKSBjb25zb2xlLndhcm4oJ01vcmUgdGhhbiAxMDAgcHJvZ3JhbSB3YXJuaW5ncyAtIHN0b3BwaW5nIGxvZ3MuJyk7XG59XG4iLCJpbXBvcnQgeyBWZWMzIH0gZnJvbSAnLi4vbWF0aC9WZWMzLmpzJztcbmltcG9ydCB7IFF1YXQgfSBmcm9tICcuLi9tYXRoL1F1YXQuanMnO1xuaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4uL21hdGgvTWF0NC5qcyc7XG5pbXBvcnQgeyBFdWxlciB9IGZyb20gJy4uL21hdGgvRXVsZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5tYXRyaXggPSBuZXcgTWF0NCgpO1xuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gbmV3IE1hdDQoKTtcbiAgICAgICAgdGhpcy5tYXRyaXhBdXRvVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeE5lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWMzKCk7XG4gICAgICAgIHRoaXMucXVhdGVybmlvbiA9IG5ldyBRdWF0KCk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXcgVmVjMygxKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG5ldyBFdWxlcigpO1xuICAgICAgICB0aGlzLnVwID0gbmV3IFZlYzMoMCwgMSwgMCk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvbi5vbkNoYW5nZSA9ICgpID0+IHRoaXMucXVhdGVybmlvbi5mcm9tRXVsZXIodGhpcy5yb3RhdGlvbik7XG4gICAgICAgIHRoaXMucXVhdGVybmlvbi5vbkNoYW5nZSA9ICgpID0+IHRoaXMucm90YXRpb24uZnJvbVF1YXRlcm5pb24odGhpcy5xdWF0ZXJuaW9uKTtcbiAgICB9XG5cbiAgICBzZXRQYXJlbnQocGFyZW50LCBub3RpZnlQYXJlbnQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiBwYXJlbnQgIT09IHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBpZiAobm90aWZ5UGFyZW50ICYmIHBhcmVudCkgcGFyZW50LmFkZENoaWxkKHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBhZGRDaGlsZChjaGlsZCwgbm90aWZ5Q2hpbGQgPSB0cnVlKSB7XG4gICAgICAgIGlmICghfnRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCkpIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGlmIChub3RpZnlDaGlsZCkgY2hpbGQuc2V0UGFyZW50KHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCwgbm90aWZ5Q2hpbGQgPSB0cnVlKSB7XG4gICAgICAgIGlmICghIX50aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpKSB0aGlzLmNoaWxkcmVuLnNwbGljZSh0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpLCAxKTtcbiAgICAgICAgaWYgKG5vdGlmeUNoaWxkKSBjaGlsZC5zZXRQYXJlbnQobnVsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdHJpeEF1dG9VcGRhdGUpIHRoaXMudXBkYXRlTWF0cml4KCk7XG4gICAgICAgIGlmICh0aGlzLndvcmxkTWF0cml4TmVlZHNVcGRhdGUgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudCA9PT0gbnVsbCkgdGhpcy53b3JsZE1hdHJpeC5jb3B5KHRoaXMubWF0cml4KTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy53b3JsZE1hdHJpeC5tdWx0aXBseSh0aGlzLnBhcmVudC53b3JsZE1hdHJpeCwgdGhpcy5tYXRyaXgpO1xuICAgICAgICAgICAgdGhpcy53b3JsZE1hdHJpeE5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JjZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZU1hdHJpeFdvcmxkKGZvcmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZU1hdHJpeCgpIHtcbiAgICAgICAgdGhpcy5tYXRyaXguY29tcG9zZSh0aGlzLnF1YXRlcm5pb24sIHRoaXMucG9zaXRpb24sIHRoaXMuc2NhbGUpO1xuICAgICAgICB0aGlzLndvcmxkTWF0cml4TmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRyYXZlcnNlKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFJldHVybiB0cnVlIGluIGNhbGxiYWNrIHRvIHN0b3AgdHJhdmVyc2luZyBjaGlsZHJlblxuICAgICAgICBpZiAoY2FsbGJhY2sodGhpcykpIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS50cmF2ZXJzZShjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvbXBvc2UoKSB7XG4gICAgICAgIHRoaXMubWF0cml4LmdldFRyYW5zbGF0aW9uKHRoaXMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLm1hdHJpeC5nZXRSb3RhdGlvbih0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLm1hdHJpeC5nZXRTY2FsaW5nKHRoaXMuc2NhbGUpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uLmZyb21RdWF0ZXJuaW9uKHRoaXMucXVhdGVybmlvbik7XG4gICAgfVxuXG4gICAgbG9va0F0KHRhcmdldCwgaW52ZXJ0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGludmVydCkgdGhpcy5tYXRyaXgubG9va0F0KHRoaXMucG9zaXRpb24sIHRhcmdldCwgdGhpcy51cCk7XG4gICAgICAgIGVsc2UgdGhpcy5tYXRyaXgubG9va0F0KHRhcmdldCwgdGhpcy5wb3NpdGlvbiwgdGhpcy51cCk7XG4gICAgICAgIHRoaXMubWF0cml4LmdldFJvdGF0aW9uKHRoaXMucXVhdGVybmlvbik7XG4gICAgICAgIHRoaXMucm90YXRpb24uZnJvbVF1YXRlcm5pb24odGhpcy5xdWF0ZXJuaW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4uL2NvcmUvR2VvbWV0cnkuanMnO1xuaW1wb3J0IHsgUGxhbmUgfSBmcm9tICcuL1BsYW5lLmpzJztcblxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIEdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgeyB3aWR0aCA9IDEsIGhlaWdodCA9IDEsIGRlcHRoID0gMSwgd2lkdGhTZWdtZW50cyA9IDEsIGhlaWdodFNlZ21lbnRzID0gMSwgZGVwdGhTZWdtZW50cyA9IDEsIGF0dHJpYnV0ZXMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgd1NlZ3MgPSB3aWR0aFNlZ21lbnRzO1xuICAgICAgICBjb25zdCBoU2VncyA9IGhlaWdodFNlZ21lbnRzO1xuICAgICAgICBjb25zdCBkU2VncyA9IGRlcHRoU2VnbWVudHM7XG5cbiAgICAgICAgY29uc3QgbnVtID0gKHdTZWdzICsgMSkgKiAoaFNlZ3MgKyAxKSAqIDIgKyAod1NlZ3MgKyAxKSAqIChkU2VncyArIDEpICogMiArIChoU2VncyArIDEpICogKGRTZWdzICsgMSkgKiAyO1xuICAgICAgICBjb25zdCBudW1JbmRpY2VzID0gKHdTZWdzICogaFNlZ3MgKiAyICsgd1NlZ3MgKiBkU2VncyAqIDIgKyBoU2VncyAqIGRTZWdzICogMikgKiA2O1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAzKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAzKTtcbiAgICAgICAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KG51bSAqIDIpO1xuICAgICAgICBjb25zdCBpbmRleCA9IG51bSA+IDY1NTM2ID8gbmV3IFVpbnQzMkFycmF5KG51bUluZGljZXMpIDogbmV3IFVpbnQxNkFycmF5KG51bUluZGljZXMpO1xuXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGlpID0gMDtcblxuICAgICAgICAvLyBsZWZ0LCByaWdodFxuICAgICAgICBQbGFuZS5idWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgZGVwdGgsIGhlaWdodCwgd2lkdGgsIGRTZWdzLCBoU2VncywgMiwgMSwgMCwgLTEsIC0xLCBpLCBpaSk7XG4gICAgICAgIGkgKz0gKGRTZWdzICsgMSkgKiAoaFNlZ3MgKyAxKTtcbiAgICAgICAgaWkgKz0gZFNlZ3MgKiBoU2VncztcblxuICAgICAgICBQbGFuZS5idWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgZGVwdGgsIGhlaWdodCwgLXdpZHRoLCBkU2VncywgaFNlZ3MsIDIsIDEsIDAsIDEsIC0xLCBpLCBpaSk7XG4gICAgICAgIGkgKz0gKGRTZWdzICsgMSkgKiAoaFNlZ3MgKyAxKTtcbiAgICAgICAgaWkgKz0gZFNlZ3MgKiBoU2VncztcblxuICAgICAgICAvLyB0b3AsIGJvdHRvbVxuICAgICAgICBQbGFuZS5idWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIGRTZWdzLCB3U2VncywgMCwgMiwgMSwgMSwgMSwgaSwgaWkpO1xuICAgICAgICBpICs9ICh3U2VncyArIDEpICogKGRTZWdzICsgMSk7XG4gICAgICAgIGlpICs9IHdTZWdzICogZFNlZ3M7XG5cbiAgICAgICAgUGxhbmUuYnVpbGRQbGFuZShwb3NpdGlvbiwgbm9ybWFsLCB1diwgaW5kZXgsIHdpZHRoLCBkZXB0aCwgLWhlaWdodCwgZFNlZ3MsIHdTZWdzLCAwLCAyLCAxLCAxLCAtMSwgaSwgaWkpO1xuICAgICAgICBpICs9ICh3U2VncyArIDEpICogKGRTZWdzICsgMSk7XG4gICAgICAgIGlpICs9IHdTZWdzICogZFNlZ3M7XG5cbiAgICAgICAgLy8gZnJvbnQsIGJhY2tcbiAgICAgICAgUGxhbmUuYnVpbGRQbGFuZShwb3NpdGlvbiwgbm9ybWFsLCB1diwgaW5kZXgsIHdpZHRoLCBoZWlnaHQsIC1kZXB0aCwgd1NlZ3MsIGhTZWdzLCAwLCAxLCAyLCAtMSwgLTEsIGksIGlpKTtcbiAgICAgICAgaSArPSAod1NlZ3MgKyAxKSAqIChoU2VncyArIDEpO1xuICAgICAgICBpaSArPSB3U2VncyAqIGhTZWdzO1xuXG4gICAgICAgIFBsYW5lLmJ1aWxkUGxhbmUocG9zaXRpb24sIG5vcm1hbCwgdXYsIGluZGV4LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgd1NlZ3MsIGhTZWdzLCAwLCAxLCAyLCAxLCAtMSwgaSwgaWkpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywge1xuICAgICAgICAgICAgcG9zaXRpb246IHsgc2l6ZTogMywgZGF0YTogcG9zaXRpb24gfSxcbiAgICAgICAgICAgIG5vcm1hbDogeyBzaXplOiAzLCBkYXRhOiBub3JtYWwgfSxcbiAgICAgICAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHV2IH0sXG4gICAgICAgICAgICBpbmRleDogeyBkYXRhOiBpbmRleCB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBzdXBlcihnbCwgYXR0cmlidXRlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuLi9jb3JlL0dlb21ldHJ5LmpzJztcblxuZXhwb3J0IGNsYXNzIFBsYW5lIGV4dGVuZHMgR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKGdsLCB7IHdpZHRoID0gMSwgaGVpZ2h0ID0gMSwgd2lkdGhTZWdtZW50cyA9IDEsIGhlaWdodFNlZ21lbnRzID0gMSwgYXR0cmlidXRlcyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCB3U2VncyA9IHdpZHRoU2VnbWVudHM7XG4gICAgICAgIGNvbnN0IGhTZWdzID0gaGVpZ2h0U2VnbWVudHM7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGxlbmd0aCBvZiBhcnJheXNcbiAgICAgICAgY29uc3QgbnVtID0gKHdTZWdzICsgMSkgKiAoaFNlZ3MgKyAxKTtcbiAgICAgICAgY29uc3QgbnVtSW5kaWNlcyA9IHdTZWdzICogaFNlZ3MgKiA2O1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIGVtcHR5IGFycmF5cyBvbmNlXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAzKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShudW0gKiAzKTtcbiAgICAgICAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KG51bSAqIDIpO1xuICAgICAgICBjb25zdCBpbmRleCA9IG51bUluZGljZXMgPiA2NTUzNiA/IG5ldyBVaW50MzJBcnJheShudW1JbmRpY2VzKSA6IG5ldyBVaW50MTZBcnJheShudW1JbmRpY2VzKTtcblxuICAgICAgICBQbGFuZS5idWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgd2lkdGgsIGhlaWdodCwgMCwgd1NlZ3MsIGhTZWdzKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHNpemU6IDMsIGRhdGE6IHBvc2l0aW9uIH0sXG4gICAgICAgICAgICBub3JtYWw6IHsgc2l6ZTogMywgZGF0YTogbm9ybWFsIH0sXG4gICAgICAgICAgICB1djogeyBzaXplOiAyLCBkYXRhOiB1diB9LFxuICAgICAgICAgICAgaW5kZXg6IHsgZGF0YTogaW5kZXggfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3VwZXIoZ2wsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBidWlsZFBsYW5lKHBvc2l0aW9uLCBub3JtYWwsIHV2LCBpbmRleCwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHdTZWdzLCBoU2VncywgdSA9IDAsIHYgPSAxLCB3ID0gMiwgdURpciA9IDEsIHZEaXIgPSAtMSwgaSA9IDAsIGlpID0gMCkge1xuICAgICAgICBjb25zdCBpbyA9IGk7XG4gICAgICAgIGNvbnN0IHNlZ1cgPSB3aWR0aCAvIHdTZWdzO1xuICAgICAgICBjb25zdCBzZWdIID0gaGVpZ2h0IC8gaFNlZ3M7XG5cbiAgICAgICAgZm9yIChsZXQgaXkgPSAwOyBpeSA8PSBoU2VnczsgaXkrKykge1xuICAgICAgICAgICAgbGV0IHkgPSBpeSAqIHNlZ0ggLSBoZWlnaHQgLyAyO1xuICAgICAgICAgICAgZm9yIChsZXQgaXggPSAwOyBpeCA8PSB3U2VnczsgaXgrKywgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBpeCAqIHNlZ1cgLSB3aWR0aCAvIDI7XG5cbiAgICAgICAgICAgICAgICBwb3NpdGlvbltpICogMyArIHVdID0geCAqIHVEaXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25baSAqIDMgKyB2XSA9IHkgKiB2RGlyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW2kgKiAzICsgd10gPSBkZXB0aCAvIDI7XG5cbiAgICAgICAgICAgICAgICBub3JtYWxbaSAqIDMgKyB1XSA9IDA7XG4gICAgICAgICAgICAgICAgbm9ybWFsW2kgKiAzICsgdl0gPSAwO1xuICAgICAgICAgICAgICAgIG5vcm1hbFtpICogMyArIHddID0gZGVwdGggPj0gMCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgIHV2W2kgKiAyXSA9IGl4IC8gd1NlZ3M7XG4gICAgICAgICAgICAgICAgdXZbaSAqIDIgKyAxXSA9IDEgLSBpeSAvIGhTZWdzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl5ID09PSBoU2VncyB8fCBpeCA9PT0gd1NlZ3MpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGxldCBhID0gaW8gKyBpeCArIGl5ICogKHdTZWdzICsgMSk7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSBpbyArIGl4ICsgKGl5ICsgMSkgKiAod1NlZ3MgKyAxKTtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGlvICsgaXggKyAoaXkgKyAxKSAqICh3U2VncyArIDEpICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgZCA9IGlvICsgaXggKyBpeSAqICh3U2VncyArIDEpICsgMTtcblxuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNl0gPSBhO1xuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNiArIDFdID0gYjtcbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDYgKyAyXSA9IGQ7XG4gICAgICAgICAgICAgICAgaW5kZXhbaWkgKiA2ICsgM10gPSBiO1xuICAgICAgICAgICAgICAgIGluZGV4W2lpICogNiArIDRdID0gYztcbiAgICAgICAgICAgICAgICBpbmRleFtpaSAqIDYgKyA1XSA9IGQ7XG4gICAgICAgICAgICAgICAgaWkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEV1bGVyRnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9FdWxlckZ1bmMuanMnO1xuaW1wb3J0IHsgTWF0NCB9IGZyb20gJy4vTWF0NC5qcyc7XG5cbmNvbnN0IHRtcE1hdDQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hdDQoKTtcblxuZXhwb3J0IGNsYXNzIEV1bGVyIGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0geCwgeiA9IHgsIG9yZGVyID0gJ1lYWicpIHtcbiAgICAgICAgc3VwZXIoeCwgeSwgeik7XG4gICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9ICgpID0+IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgfVxuXG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzFdO1xuICAgIH1cblxuICAgIGdldCB6KCkge1xuICAgICAgICByZXR1cm4gdGhpc1syXTtcbiAgICB9XG5cbiAgICBzZXQgeCh2KSB7XG4gICAgICAgIHRoaXNbMF0gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgc2V0IHkodikge1xuICAgICAgICB0aGlzWzFdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHNldCB6KHYpIHtcbiAgICAgICAgdGhpc1syXSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBzZXQoeCwgeSA9IHgsIHogPSB4KSB7XG4gICAgICAgIGlmICh4Lmxlbmd0aCkgcmV0dXJuIHRoaXMuY29weSh4KTtcbiAgICAgICAgdGhpc1swXSA9IHg7XG4gICAgICAgIHRoaXNbMV0gPSB5O1xuICAgICAgICB0aGlzWzJdID0gejtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KHYpIHtcbiAgICAgICAgdGhpc1swXSA9IHZbMF07XG4gICAgICAgIHRoaXNbMV0gPSB2WzFdO1xuICAgICAgICB0aGlzWzJdID0gdlsyXTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW9yZGVyKG9yZGVyKSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUm90YXRpb25NYXRyaXgobSwgb3JkZXIgPSB0aGlzLm9yZGVyKSB7XG4gICAgICAgIEV1bGVyRnVuYy5mcm9tUm90YXRpb25NYXRyaXgodGhpcywgbSwgb3JkZXIpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21RdWF0ZXJuaW9uKHEsIG9yZGVyID0gdGhpcy5vcmRlcikge1xuICAgICAgICB0bXBNYXQ0LmZyb21RdWF0ZXJuaW9uKHEpO1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tUm90YXRpb25NYXRyaXgodG1wTWF0NCwgb3JkZXIpO1xuICAgIH1cblxuICAgIGZyb21BcnJheShhLCBvID0gMCkge1xuICAgICAgICB0aGlzWzBdID0gYVtvXTtcbiAgICAgICAgdGhpc1sxXSA9IGFbbyArIDFdO1xuICAgICAgICB0aGlzWzJdID0gYVtvICsgMl07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvQXJyYXkoYSA9IFtdLCBvID0gMCkge1xuICAgICAgICBhW29dID0gdGhpc1swXTtcbiAgICAgICAgYVtvICsgMV0gPSB0aGlzWzFdO1xuICAgICAgICBhW28gKyAyXSA9IHRoaXNbMl07XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIE1hdDNGdW5jIGZyb20gJy4vZnVuY3Rpb25zL01hdDNGdW5jLmpzJztcblxuZXhwb3J0IGNsYXNzIE1hdDMgZXh0ZW5kcyBBcnJheSB7XG4gICAgY29uc3RydWN0b3IobTAwID0gMSwgbTAxID0gMCwgbTAyID0gMCwgbTEwID0gMCwgbTExID0gMSwgbTEyID0gMCwgbTIwID0gMCwgbTIxID0gMCwgbTIyID0gMSkge1xuICAgICAgICBzdXBlcihtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0KG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgICAgICAgaWYgKG0wMC5sZW5ndGgpIHJldHVybiB0aGlzLmNvcHkobTAwKTtcbiAgICAgICAgTWF0M0Z1bmMuc2V0KHRoaXMsIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0cmFuc2xhdGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMudHJhbnNsYXRlKHRoaXMsIG0sIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByb3RhdGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMucm90YXRlKHRoaXMsIG0sIHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzY2FsZSh2LCBtID0gdGhpcykge1xuICAgICAgICBNYXQzRnVuYy5zY2FsZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbXVsdGlwbHkobWEsIG1iKSB7XG4gICAgICAgIGlmIChtYikge1xuICAgICAgICAgICAgTWF0M0Z1bmMubXVsdGlwbHkodGhpcywgbWEsIG1iKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE1hdDNGdW5jLm11bHRpcGx5KHRoaXMsIHRoaXMsIG1hKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZGVudGl0eSgpIHtcbiAgICAgICAgTWF0M0Z1bmMuaWRlbnRpdHkodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkobSkge1xuICAgICAgICBNYXQzRnVuYy5jb3B5KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tTWF0cml4NChtKSB7XG4gICAgICAgIE1hdDNGdW5jLmZyb21NYXQ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUXVhdGVybmlvbihxKSB7XG4gICAgICAgIE1hdDNGdW5jLmZyb21RdWF0KHRoaXMsIHEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tQmFzaXModmVjM2EsIHZlYzNiLCB2ZWMzYykge1xuICAgICAgICB0aGlzLnNldCh2ZWMzYVswXSwgdmVjM2FbMV0sIHZlYzNhWzJdLCB2ZWMzYlswXSwgdmVjM2JbMV0sIHZlYzNiWzJdLCB2ZWMzY1swXSwgdmVjM2NbMV0sIHZlYzNjWzJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW52ZXJzZShtID0gdGhpcykge1xuICAgICAgICBNYXQzRnVuYy5pbnZlcnQodGhpcywgbSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldE5vcm1hbE1hdHJpeChtKSB7XG4gICAgICAgIE1hdDNGdW5jLm5vcm1hbEZyb21NYXQ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBNYXQ0RnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9NYXQ0RnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXQ0IGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBtMDAgPSAxLFxuICAgICAgICBtMDEgPSAwLFxuICAgICAgICBtMDIgPSAwLFxuICAgICAgICBtMDMgPSAwLFxuICAgICAgICBtMTAgPSAwLFxuICAgICAgICBtMTEgPSAxLFxuICAgICAgICBtMTIgPSAwLFxuICAgICAgICBtMTMgPSAwLFxuICAgICAgICBtMjAgPSAwLFxuICAgICAgICBtMjEgPSAwLFxuICAgICAgICBtMjIgPSAxLFxuICAgICAgICBtMjMgPSAwLFxuICAgICAgICBtMzAgPSAwLFxuICAgICAgICBtMzEgPSAwLFxuICAgICAgICBtMzIgPSAwLFxuICAgICAgICBtMzMgPSAxXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxMl07XG4gICAgfVxuXG4gICAgZ2V0IHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzEzXTtcbiAgICB9XG5cbiAgICBnZXQgeigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMTRdO1xuICAgIH1cblxuICAgIGdldCB3KCkge1xuICAgICAgICByZXR1cm4gdGhpc1sxNV07XG4gICAgfVxuXG4gICAgc2V0IHgodikge1xuICAgICAgICB0aGlzWzEyXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHkodikge1xuICAgICAgICB0aGlzWzEzXSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHoodikge1xuICAgICAgICB0aGlzWzE0XSA9IHY7XG4gICAgfVxuXG4gICAgc2V0IHcodikge1xuICAgICAgICB0aGlzWzE1XSA9IHY7XG4gICAgfVxuXG4gICAgc2V0KG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICAgICAgICBpZiAobTAwLmxlbmd0aCkgcmV0dXJuIHRoaXMuY29weShtMDApO1xuICAgICAgICBNYXQ0RnVuYy5zZXQodGhpcywgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDRGdW5jLnRyYW5zbGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKHYsIGF4aXMsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDRGdW5jLnJvdGF0ZSh0aGlzLCBtLCB2LCBheGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0NEZ1bmMuc2NhbGUodGhpcywgbSwgdHlwZW9mIHYgPT09ICdudW1iZXInID8gW3YsIHYsIHZdIDogdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZChtYSwgbWIpIHtcbiAgICAgICAgaWYgKG1iKSBNYXQ0RnVuYy5hZGQodGhpcywgbWEsIG1iKTtcbiAgICAgICAgZWxzZSBNYXQ0RnVuYy5hZGQodGhpcywgdGhpcywgbWEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWIobWEsIG1iKSB7XG4gICAgICAgIGlmIChtYikgTWF0NEZ1bmMuc3VidHJhY3QodGhpcywgbWEsIG1iKTtcbiAgICAgICAgZWxzZSBNYXQ0RnVuYy5zdWJ0cmFjdCh0aGlzLCB0aGlzLCBtYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KG1hLCBtYikge1xuICAgICAgICBpZiAoIW1hLmxlbmd0aCkge1xuICAgICAgICAgICAgTWF0NEZ1bmMubXVsdGlwbHlTY2FsYXIodGhpcywgdGhpcywgbWEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1iKSB7XG4gICAgICAgICAgICBNYXQ0RnVuYy5tdWx0aXBseSh0aGlzLCBtYSwgbWIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTWF0NEZ1bmMubXVsdGlwbHkodGhpcywgdGhpcywgbWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlkZW50aXR5KCkge1xuICAgICAgICBNYXQ0RnVuYy5pZGVudGl0eSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weShtKSB7XG4gICAgICAgIE1hdDRGdW5jLmNvcHkodGhpcywgbSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21QZXJzcGVjdGl2ZSh7IGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIgfSA9IHt9KSB7XG4gICAgICAgIE1hdDRGdW5jLnBlcnNwZWN0aXZlKHRoaXMsIGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tT3J0aG9nb25hbCh7IGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyIH0pIHtcbiAgICAgICAgTWF0NEZ1bmMub3J0aG8odGhpcywgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmcm9tUXVhdGVybmlvbihxKSB7XG4gICAgICAgIE1hdDRGdW5jLmZyb21RdWF0KHRoaXMsIHEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbih2KSB7XG4gICAgICAgIHRoaXMueCA9IHZbMF07XG4gICAgICAgIHRoaXMueSA9IHZbMV07XG4gICAgICAgIHRoaXMueiA9IHZbMl07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UobSA9IHRoaXMpIHtcbiAgICAgICAgTWF0NEZ1bmMuaW52ZXJ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wb3NlKHEsIHBvcywgc2NhbGUpIHtcbiAgICAgICAgTWF0NEZ1bmMuZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZSh0aGlzLCBxLCBwb3MsIHNjYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0Um90YXRpb24ocSkge1xuICAgICAgICBNYXQ0RnVuYy5nZXRSb3RhdGlvbihxLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNsYXRpb24ocG9zKSB7XG4gICAgICAgIE1hdDRGdW5jLmdldFRyYW5zbGF0aW9uKHBvcywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFNjYWxpbmcoc2NhbGUpIHtcbiAgICAgICAgTWF0NEZ1bmMuZ2V0U2NhbGluZyhzY2FsZSwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldE1heFNjYWxlT25BeGlzKCkge1xuICAgICAgICByZXR1cm4gTWF0NEZ1bmMuZ2V0TWF4U2NhbGVPbkF4aXModGhpcyk7XG4gICAgfVxuXG4gICAgbG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCkge1xuICAgICAgICBNYXQ0RnVuYy50YXJnZXRUbyh0aGlzLCBleWUsIHRhcmdldCwgdXApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdDRGdW5jLmRldGVybWluYW50KHRoaXMpO1xuICAgIH1cblxuICAgIGZyb21BcnJheShhLCBvID0gMCkge1xuICAgICAgICB0aGlzWzBdID0gYVtvXTtcbiAgICAgICAgdGhpc1sxXSA9IGFbbyArIDFdO1xuICAgICAgICB0aGlzWzJdID0gYVtvICsgMl07XG4gICAgICAgIHRoaXNbM10gPSBhW28gKyAzXTtcbiAgICAgICAgdGhpc1s0XSA9IGFbbyArIDRdO1xuICAgICAgICB0aGlzWzVdID0gYVtvICsgNV07XG4gICAgICAgIHRoaXNbNl0gPSBhW28gKyA2XTtcbiAgICAgICAgdGhpc1s3XSA9IGFbbyArIDddO1xuICAgICAgICB0aGlzWzhdID0gYVtvICsgOF07XG4gICAgICAgIHRoaXNbOV0gPSBhW28gKyA5XTtcbiAgICAgICAgdGhpc1sxMF0gPSBhW28gKyAxMF07XG4gICAgICAgIHRoaXNbMTFdID0gYVtvICsgMTFdO1xuICAgICAgICB0aGlzWzEyXSA9IGFbbyArIDEyXTtcbiAgICAgICAgdGhpc1sxM10gPSBhW28gKyAxM107XG4gICAgICAgIHRoaXNbMTRdID0gYVtvICsgMTRdO1xuICAgICAgICB0aGlzWzE1XSA9IGFbbyArIDE1XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9BcnJheShhID0gW10sIG8gPSAwKSB7XG4gICAgICAgIGFbb10gPSB0aGlzWzBdO1xuICAgICAgICBhW28gKyAxXSA9IHRoaXNbMV07XG4gICAgICAgIGFbbyArIDJdID0gdGhpc1syXTtcbiAgICAgICAgYVtvICsgM10gPSB0aGlzWzNdO1xuICAgICAgICBhW28gKyA0XSA9IHRoaXNbNF07XG4gICAgICAgIGFbbyArIDVdID0gdGhpc1s1XTtcbiAgICAgICAgYVtvICsgNl0gPSB0aGlzWzZdO1xuICAgICAgICBhW28gKyA3XSA9IHRoaXNbN107XG4gICAgICAgIGFbbyArIDhdID0gdGhpc1s4XTtcbiAgICAgICAgYVtvICsgOV0gPSB0aGlzWzldO1xuICAgICAgICBhW28gKyAxMF0gPSB0aGlzWzEwXTtcbiAgICAgICAgYVtvICsgMTFdID0gdGhpc1sxMV07XG4gICAgICAgIGFbbyArIDEyXSA9IHRoaXNbMTJdO1xuICAgICAgICBhW28gKyAxM10gPSB0aGlzWzEzXTtcbiAgICAgICAgYVtvICsgMTRdID0gdGhpc1sxNF07XG4gICAgICAgIGFbbyArIDE1XSA9IHRoaXNbMTVdO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBRdWF0RnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9RdWF0RnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBRdWF0IGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAxKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIHosIHcpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gKCkgPT4ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCB4KCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICB9XG5cbiAgICBnZXQgeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMV07XG4gICAgfVxuXG4gICAgZ2V0IHooKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzJdO1xuICAgIH1cblxuICAgIGdldCB3KCkge1xuICAgICAgICByZXR1cm4gdGhpc1szXTtcbiAgICB9XG5cbiAgICBzZXQgeCh2KSB7XG4gICAgICAgIHRoaXNbMF0gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgc2V0IHkodikge1xuICAgICAgICB0aGlzWzFdID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHNldCB6KHYpIHtcbiAgICAgICAgdGhpc1syXSA9IHY7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBzZXQgdyh2KSB7XG4gICAgICAgIHRoaXNbM10gPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIFF1YXRGdW5jLmlkZW50aXR5KHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldCh4LCB5LCB6LCB3KSB7XG4gICAgICAgIGlmICh4Lmxlbmd0aCkgcmV0dXJuIHRoaXMuY29weSh4KTtcbiAgICAgICAgUXVhdEZ1bmMuc2V0KHRoaXMsIHgsIHksIHosIHcpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVgoYSkge1xuICAgICAgICBRdWF0RnVuYy5yb3RhdGVYKHRoaXMsIHRoaXMsIGEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVkoYSkge1xuICAgICAgICBRdWF0RnVuYy5yb3RhdGVZKHRoaXMsIHRoaXMsIGEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVooYSkge1xuICAgICAgICBRdWF0RnVuYy5yb3RhdGVaKHRoaXMsIHRoaXMsIGEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UocSA9IHRoaXMpIHtcbiAgICAgICAgUXVhdEZ1bmMuaW52ZXJ0KHRoaXMsIHEpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbmp1Z2F0ZShxID0gdGhpcykge1xuICAgICAgICBRdWF0RnVuYy5jb25qdWdhdGUodGhpcywgcSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weShxKSB7XG4gICAgICAgIFF1YXRGdW5jLmNvcHkodGhpcywgcSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKHEgPSB0aGlzKSB7XG4gICAgICAgIFF1YXRGdW5jLm5vcm1hbGl6ZSh0aGlzLCBxKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtdWx0aXBseShxQSwgcUIpIHtcbiAgICAgICAgaWYgKHFCKSB7XG4gICAgICAgICAgICBRdWF0RnVuYy5tdWx0aXBseSh0aGlzLCBxQSwgcUIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUXVhdEZ1bmMubXVsdGlwbHkodGhpcywgdGhpcywgcUEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZG90KHYpIHtcbiAgICAgICAgcmV0dXJuIFF1YXRGdW5jLmRvdCh0aGlzLCB2KTtcbiAgICB9XG5cbiAgICBmcm9tTWF0cml4MyhtYXRyaXgzKSB7XG4gICAgICAgIFF1YXRGdW5jLmZyb21NYXQzKHRoaXMsIG1hdHJpeDMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21FdWxlcihldWxlcikge1xuICAgICAgICBRdWF0RnVuYy5mcm9tRXVsZXIodGhpcywgZXVsZXIsIGV1bGVyLm9yZGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbUF4aXNBbmdsZShheGlzLCBhKSB7XG4gICAgICAgIFF1YXRGdW5jLnNldEF4aXNBbmdsZSh0aGlzLCBheGlzLCBhKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbGVycChxLCB0KSB7XG4gICAgICAgIFF1YXRGdW5jLnNsZXJwKHRoaXMsIHRoaXMsIHEsIHQpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZyb21BcnJheShhLCBvID0gMCkge1xuICAgICAgICB0aGlzWzBdID0gYVtvXTtcbiAgICAgICAgdGhpc1sxXSA9IGFbbyArIDFdO1xuICAgICAgICB0aGlzWzJdID0gYVtvICsgMl07XG4gICAgICAgIHRoaXNbM10gPSBhW28gKyAzXTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b0FycmF5KGEgPSBbXSwgbyA9IDApIHtcbiAgICAgICAgYVtvXSA9IHRoaXNbMF07XG4gICAgICAgIGFbbyArIDFdID0gdGhpc1sxXTtcbiAgICAgICAgYVtvICsgMl0gPSB0aGlzWzJdO1xuICAgICAgICBhW28gKyAzXSA9IHRoaXNbM107XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbn1cbiIsIi8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uTWF0cml4KG91dCwgbSwgb3JkZXIgPSAnWVhaJykge1xuICAgIGlmIChvcmRlciA9PT0gJ1hZWicpIHtcbiAgICAgICAgb3V0WzFdID0gTWF0aC5hc2luKE1hdGgubWluKE1hdGgubWF4KG1bOF0sIC0xKSwgMSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobVs4XSkgPCAwLjk5OTk5KSB7XG4gICAgICAgICAgICBvdXRbMF0gPSBNYXRoLmF0YW4yKC1tWzldLCBtWzEwXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBNYXRoLmF0YW4yKC1tWzRdLCBtWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFswXSA9IE1hdGguYXRhbjIobVs2XSwgbVs1XSk7XG4gICAgICAgICAgICBvdXRbMl0gPSAwO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1lYWicpIHtcbiAgICAgICAgb3V0WzBdID0gTWF0aC5hc2luKC1NYXRoLm1pbihNYXRoLm1heChtWzldLCAtMSksIDEpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG1bOV0pIDwgMC45OTk5OSkge1xuICAgICAgICAgICAgb3V0WzFdID0gTWF0aC5hdGFuMihtWzhdLCBtWzEwXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBNYXRoLmF0YW4yKG1bMV0sIG1bNV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0WzFdID0gTWF0aC5hdGFuMigtbVsyXSwgbVswXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSAwO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1pYWScpIHtcbiAgICAgICAgb3V0WzBdID0gTWF0aC5hc2luKE1hdGgubWluKE1hdGgubWF4KG1bNl0sIC0xKSwgMSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobVs2XSkgPCAwLjk5OTk5KSB7XG4gICAgICAgICAgICBvdXRbMV0gPSBNYXRoLmF0YW4yKC1tWzJdLCBtWzEwXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBNYXRoLmF0YW4yKC1tWzRdLCBtWzVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dFsxXSA9IDA7XG4gICAgICAgICAgICBvdXRbMl0gPSBNYXRoLmF0YW4yKG1bMV0sIG1bMF0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1pZWCcpIHtcbiAgICAgICAgb3V0WzFdID0gTWF0aC5hc2luKC1NYXRoLm1pbihNYXRoLm1heChtWzJdLCAtMSksIDEpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG1bMl0pIDwgMC45OTk5OSkge1xuICAgICAgICAgICAgb3V0WzBdID0gTWF0aC5hdGFuMihtWzZdLCBtWzEwXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBNYXRoLmF0YW4yKG1bMV0sIG1bMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0WzBdID0gMDtcbiAgICAgICAgICAgIG91dFsyXSA9IE1hdGguYXRhbjIoLW1bNF0sIG1bNV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1laWCcpIHtcbiAgICAgICAgb3V0WzJdID0gTWF0aC5hc2luKE1hdGgubWluKE1hdGgubWF4KG1bMV0sIC0xKSwgMSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobVsxXSkgPCAwLjk5OTk5KSB7XG4gICAgICAgICAgICBvdXRbMF0gPSBNYXRoLmF0YW4yKC1tWzldLCBtWzVdKTtcbiAgICAgICAgICAgIG91dFsxXSA9IE1hdGguYXRhbjIoLW1bMl0sIG1bMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0WzBdID0gMDtcbiAgICAgICAgICAgIG91dFsxXSA9IE1hdGguYXRhbjIobVs4XSwgbVsxMF0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1haWScpIHtcbiAgICAgICAgb3V0WzJdID0gTWF0aC5hc2luKC1NYXRoLm1pbihNYXRoLm1heChtWzRdLCAtMSksIDEpKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG1bNF0pIDwgMC45OTk5OSkge1xuICAgICAgICAgICAgb3V0WzBdID0gTWF0aC5hdGFuMihtWzZdLCBtWzVdKTtcbiAgICAgICAgICAgIG91dFsxXSA9IE1hdGguYXRhbjIobVs4XSwgbVswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRbMF0gPSBNYXRoLmF0YW4yKC1tWzldLCBtWzEwXSk7XG4gICAgICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cbiIsImNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMTtcblxuLyoqXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzRdO1xuICAgIG91dFs0XSA9IGFbNV07XG4gICAgb3V0WzVdID0gYVs2XTtcbiAgICBvdXRbNl0gPSBhWzhdO1xuICAgIG91dFs3XSA9IGFbOV07XG4gICAgb3V0WzhdID0gYVsxMF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgbGV0IHggPSBxWzBdLFxuICAgICAgICB5ID0gcVsxXSxcbiAgICAgICAgeiA9IHFbMl0sXG4gICAgICAgIHcgPSBxWzNdO1xuICAgIGxldCB4MiA9IHggKyB4O1xuICAgIGxldCB5MiA9IHkgKyB5O1xuICAgIGxldCB6MiA9IHogKyB6O1xuXG4gICAgbGV0IHh4ID0geCAqIHgyO1xuICAgIGxldCB5eCA9IHkgKiB4MjtcbiAgICBsZXQgeXkgPSB5ICogeTI7XG4gICAgbGV0IHp4ID0geiAqIHgyO1xuICAgIGxldCB6eSA9IHogKiB5MjtcbiAgICBsZXQgenogPSB6ICogejI7XG4gICAgbGV0IHd4ID0gdyAqIHgyO1xuICAgIGxldCB3eSA9IHcgKiB5MjtcbiAgICBsZXQgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbM10gPSB5eCAtIHd6O1xuICAgIG91dFs2XSA9IHp4ICsgd3k7XG5cbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFs0XSA9IDEgLSB4eCAtIHp6O1xuICAgIG91dFs3XSA9IHp5IC0gd3g7XG5cbiAgICBvdXRbMl0gPSB6eCAtIHd5O1xuICAgIG91dFs1XSA9IHp5ICsgd3g7XG4gICAgb3V0WzhdID0gMSAtIHh4IC0geXk7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgbWF0MyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgICBvdXRbMF0gPSBtMDA7XG4gICAgb3V0WzFdID0gbTAxO1xuICAgIG91dFsyXSA9IG0wMjtcbiAgICBvdXRbM10gPSBtMTA7XG4gICAgb3V0WzRdID0gbTExO1xuICAgIG91dFs1XSA9IG0xMjtcbiAgICBvdXRbNl0gPSBtMjA7XG4gICAgb3V0WzddID0gbTIxO1xuICAgIG91dFs4XSA9IG0yMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDMgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDE7XG4gICAgb3V0WzVdID0gMDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICBsZXQgYTAxID0gYVsxXSxcbiAgICAgICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgICAgICBhMTIgPSBhWzVdO1xuICAgICAgICBvdXRbMV0gPSBhWzNdO1xuICAgICAgICBvdXRbMl0gPSBhWzZdO1xuICAgICAgICBvdXRbM10gPSBhMDE7XG4gICAgICAgIG91dFs1XSA9IGFbN107XG4gICAgICAgIG91dFs2XSA9IGEwMjtcbiAgICAgICAgb3V0WzddID0gYTEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbM107XG4gICAgICAgIG91dFsyXSA9IGFbNl07XG4gICAgICAgIG91dFszXSA9IGFbMV07XG4gICAgICAgIG91dFs0XSA9IGFbNF07XG4gICAgICAgIG91dFs1XSA9IGFbN107XG4gICAgICAgIG91dFs2XSA9IGFbMl07XG4gICAgICAgIG91dFs3XSA9IGFbNV07XG4gICAgICAgIG91dFs4XSA9IGFbOF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXTtcbiAgICBsZXQgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBsZXQgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XTtcblxuICAgIGxldCBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjE7XG4gICAgbGV0IGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjA7XG4gICAgbGV0IGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMDtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICBsZXQgZGV0ID0gYTAwICogYjAxICsgYTAxICogYjExICsgYTAyICogYjIxO1xuXG4gICAgaWYgKCFkZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IGIwMSAqIGRldDtcbiAgICBvdXRbMV0gPSAoLWEyMiAqIGEwMSArIGEwMiAqIGEyMSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGExMiAqIGEwMSAtIGEwMiAqIGExMSkgKiBkZXQ7XG4gICAgb3V0WzNdID0gYjExICogZGV0O1xuICAgIG91dFs0XSA9IChhMjIgKiBhMDAgLSBhMDIgKiBhMjApICogZGV0O1xuICAgIG91dFs1XSA9ICgtYTEyICogYTAwICsgYTAyICogYTEwKSAqIGRldDtcbiAgICBvdXRbNl0gPSBiMjEgKiBkZXQ7XG4gICAgb3V0WzddID0gKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApICogZGV0O1xuICAgIG91dFs4XSA9IChhMTEgKiBhMDAgLSBhMDEgKiBhMTApICogZGV0O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl07XG4gICAgbGV0IGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV07XG4gICAgbGV0IGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF07XG5cbiAgICByZXR1cm4gYTAwICogKGEyMiAqIGExMSAtIGExMiAqIGEyMSkgKyBhMDEgKiAoLWEyMiAqIGExMCArIGExMiAqIGEyMCkgKyBhMDIgKiAoYTIxICogYTEwIC0gYTExICogYTIwKTtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQzJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXTtcbiAgICBsZXQgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBsZXQgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XTtcblxuICAgIGxldCBiMDAgPSBiWzBdLFxuICAgICAgICBiMDEgPSBiWzFdLFxuICAgICAgICBiMDIgPSBiWzJdO1xuICAgIGxldCBiMTAgPSBiWzNdLFxuICAgICAgICBiMTEgPSBiWzRdLFxuICAgICAgICBiMTIgPSBiWzVdO1xuICAgIGxldCBiMjAgPSBiWzZdLFxuICAgICAgICBiMjEgPSBiWzddLFxuICAgICAgICBiMjIgPSBiWzhdO1xuXG4gICAgb3V0WzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwO1xuICAgIG91dFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMTtcbiAgICBvdXRbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjI7XG5cbiAgICBvdXRbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjA7XG4gICAgb3V0WzRdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxO1xuICAgIG91dFs1XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMjtcblxuICAgIG91dFs2XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMDtcbiAgICBvdXRbN10gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjE7XG4gICAgb3V0WzhdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0MyBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XSxcbiAgICAgICAgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XSxcbiAgICAgICAgeCA9IHZbMF0sXG4gICAgICAgIHkgPSB2WzFdO1xuXG4gICAgb3V0WzBdID0gYTAwO1xuICAgIG91dFsxXSA9IGEwMTtcbiAgICBvdXRbMl0gPSBhMDI7XG5cbiAgICBvdXRbM10gPSBhMTA7XG4gICAgb3V0WzRdID0gYTExO1xuICAgIG91dFs1XSA9IGExMjtcblxuICAgIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICAgIG91dFs3XSA9IHggKiBhMDEgKyB5ICogYTExICsgYTIxO1xuICAgIG91dFs4XSA9IHggKiBhMDIgKyB5ICogYTEyICsgYTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdLFxuICAgICAgICBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBjICogYTAwICsgcyAqIGExMDtcbiAgICBvdXRbMV0gPSBjICogYTAxICsgcyAqIGExMTtcbiAgICBvdXRbMl0gPSBjICogYTAyICsgcyAqIGExMjtcblxuICAgIG91dFszXSA9IGMgKiBhMTAgLSBzICogYTAwO1xuICAgIG91dFs0XSA9IGMgKiBhMTEgLSBzICogYTAxO1xuICAgIG91dFs1XSA9IGMgKiBhMTIgLSBzICogYTAyO1xuXG4gICAgb3V0WzZdID0gYTIwO1xuICAgIG91dFs3XSA9IGEyMTtcbiAgICBvdXRbOF0gPSBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDMgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICAgIGxldCB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV07XG5cbiAgICBvdXRbMF0gPSB4ICogYVswXTtcbiAgICBvdXRbMV0gPSB4ICogYVsxXTtcbiAgICBvdXRbMl0gPSB4ICogYVsyXTtcblxuICAgIG91dFszXSA9IHkgKiBhWzNdO1xuICAgIG91dFs0XSA9IHkgKiBhWzRdO1xuICAgIG91dFs1XSA9IHkgKiBhWzVdO1xuXG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG5vcm1hbCBtYXRyaXggKHRyYW5zcG9zZSBpbnZlcnNlKSBmcm9tIHRoZSA0eDQgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHttYXQ0fSBhIE1hdDQgdG8gZGVyaXZlIHRoZSBub3JtYWwgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxGcm9tTWF0NChvdXQsIGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICBsZXQgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICBsZXQgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuICAgIGxldCBhMzAgPSBhWzEyXSxcbiAgICAgICAgYTMxID0gYVsxM10sXG4gICAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgICBhMzMgPSBhWzE1XTtcblxuICAgIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICAgIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICAgIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICAgIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG5cbiAgICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcblxuICAgIG91dFs2XSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFs3XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSAyRCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgeW91ciBnbCBjb250ZXh0XG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBnbCBjb250ZXh0XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uKG91dCwgd2lkdGgsIGhlaWdodCkge1xuICAgIG91dFswXSA9IDIgLyB3aWR0aDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAtMiAvIGhlaWdodDtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IC0xO1xuICAgIG91dFs3XSA9IDE7XG4gICAgb3V0WzhdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gICAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gICAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gICAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gICAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gICAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIG91dFs0XSA9IGFbNF0gKiBiO1xuICAgIG91dFs1XSA9IGFbNV0gKiBiO1xuICAgIG91dFs2XSA9IGFbNl0gKiBiO1xuICAgIG91dFs3XSA9IGFbN10gKiBiO1xuICAgIG91dFs4XSA9IGFbOF0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgICBvdXRbMF0gPSBtMDA7XG4gICAgb3V0WzFdID0gbTAxO1xuICAgIG91dFsyXSA9IG0wMjtcbiAgICBvdXRbM10gPSBtMDM7XG4gICAgb3V0WzRdID0gbTEwO1xuICAgIG91dFs1XSA9IG0xMTtcbiAgICBvdXRbNl0gPSBtMTI7XG4gICAgb3V0WzddID0gbTEzO1xuICAgIG91dFs4XSA9IG0yMDtcbiAgICBvdXRbOV0gPSBtMjE7XG4gICAgb3V0WzEwXSA9IG0yMjtcbiAgICBvdXRbMTFdID0gbTIzO1xuICAgIG91dFsxMl0gPSBtMzA7XG4gICAgb3V0WzEzXSA9IG0zMTtcbiAgICBvdXRbMTRdID0gbTMyO1xuICAgIG91dFsxNV0gPSBtMzM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICBsZXQgYTAxID0gYVsxXSxcbiAgICAgICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgICAgICBhMDMgPSBhWzNdO1xuICAgICAgICBsZXQgYTEyID0gYVs2XSxcbiAgICAgICAgICAgIGExMyA9IGFbN107XG4gICAgICAgIGxldCBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM107XG4gICAgbGV0IGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG4gICAgbGV0IGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcbiAgICBsZXQgYTMwID0gYVsxMl0sXG4gICAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgICBhMzIgPSBhWzE0XSxcbiAgICAgICAgYTMzID0gYVsxNV07XG5cbiAgICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICAgIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gICAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICAgIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gICAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICAgIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gICAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICAgIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gICAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICBsZXQgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICBsZXQgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuICAgIGxldCBhMzAgPSBhWzEyXSxcbiAgICAgICAgYTMxID0gYVsxM10sXG4gICAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgICBhMzMgPSBhWzE1XTtcblxuICAgIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gICAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICAgIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gICAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICAgIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gICAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICAgIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gICAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXTtcbiAgICBsZXQgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcbiAgICBsZXQgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuICAgIGxldCBhMzAgPSBhWzEyXSxcbiAgICAgICAgYTMxID0gYVsxM10sXG4gICAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgICBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIGxldCBiMCA9IGJbMF0sXG4gICAgICAgIGIxID0gYlsxXSxcbiAgICAgICAgYjIgPSBiWzJdLFxuICAgICAgICBiMyA9IGJbM107XG4gICAgb3V0WzBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzFdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzJdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzNdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG5cbiAgICBiMCA9IGJbNF07XG4gICAgYjEgPSBiWzVdO1xuICAgIGIyID0gYls2XTtcbiAgICBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzVdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzZdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzddID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG5cbiAgICBiMCA9IGJbOF07XG4gICAgYjEgPSBiWzldO1xuICAgIGIyID0gYlsxMF07XG4gICAgYjMgPSBiWzExXTtcbiAgICBvdXRbOF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgICBvdXRbOV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgICBvdXRbMTBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzExXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuXG4gICAgYjAgPSBiWzEyXTtcbiAgICBiMSA9IGJbMTNdO1xuICAgIGIyID0gYlsxNF07XG4gICAgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzEzXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFsxNF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgICBvdXRbMTVdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIGxldCB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV0sXG4gICAgICAgIHogPSB2WzJdO1xuICAgIGxldCBhMDAsIGEwMSwgYTAyLCBhMDM7XG4gICAgbGV0IGExMCwgYTExLCBhMTIsIGExMztcbiAgICBsZXQgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdO1xuICAgICAgICBhMDEgPSBhWzFdO1xuICAgICAgICBhMDIgPSBhWzJdO1xuICAgICAgICBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdO1xuICAgICAgICBhMTEgPSBhWzVdO1xuICAgICAgICBhMTIgPSBhWzZdO1xuICAgICAgICBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdO1xuICAgICAgICBhMjEgPSBhWzldO1xuICAgICAgICBhMjIgPSBhWzEwXTtcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwO1xuICAgICAgICBvdXRbMV0gPSBhMDE7XG4gICAgICAgIG91dFsyXSA9IGEwMjtcbiAgICAgICAgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7XG4gICAgICAgIG91dFs1XSA9IGExMTtcbiAgICAgICAgb3V0WzZdID0gYTEyO1xuICAgICAgICBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDtcbiAgICAgICAgb3V0WzldID0gYTIxO1xuICAgICAgICBvdXRbMTBdID0gYTIyO1xuICAgICAgICBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICBsZXQgeCA9IHZbMF0sXG4gICAgICAgIHkgPSB2WzFdLFxuICAgICAgICB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICBsZXQgeCA9IGF4aXNbMF0sXG4gICAgICAgIHkgPSBheGlzWzFdLFxuICAgICAgICB6ID0gYXhpc1syXTtcbiAgICBsZXQgbGVuID0gTWF0aC5oeXBvdCh4LCB5LCB6KTtcbiAgICBsZXQgcywgYywgdDtcbiAgICBsZXQgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICAgIGxldCBhMTAsIGExMSwgYTEyLCBhMTM7XG4gICAgbGV0IGEyMCwgYTIxLCBhMjIsIGEyMztcbiAgICBsZXQgYjAwLCBiMDEsIGIwMjtcbiAgICBsZXQgYjEwLCBiMTEsIGIxMjtcbiAgICBsZXQgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgRVBTSUxPTikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTtcbiAgICBhMDEgPSBhWzFdO1xuICAgIGEwMiA9IGFbMl07XG4gICAgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdO1xuICAgIGExMSA9IGFbNV07XG4gICAgYTEyID0gYVs2XTtcbiAgICBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07XG4gICAgYTIxID0gYVs5XTtcbiAgICBhMjIgPSBhWzEwXTtcbiAgICBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7XG4gICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7XG4gICAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7XG4gICAgYjExID0geSAqIHkgKiB0ICsgYztcbiAgICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogcztcbiAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcztcbiAgICBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkge1xuICAgICAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxuICogIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yXG4gKiAgb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSAge21hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG91dCwgbWF0KSB7XG4gICAgb3V0WzBdID0gbWF0WzEyXTtcbiAgICBvdXRbMV0gPSBtYXRbMTNdO1xuICAgIG91dFsyXSA9IG1hdFsxNF07XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcbiAqICB3aXRoIGEgbm9ybWFsaXplZCBRdWF0ZXJuaW9uIHBhcmFtdGVyLCB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmVcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGluZyhvdXQsIG1hdCkge1xuICAgIGxldCBtMTEgPSBtYXRbMF07XG4gICAgbGV0IG0xMiA9IG1hdFsxXTtcbiAgICBsZXQgbTEzID0gbWF0WzJdO1xuICAgIGxldCBtMjEgPSBtYXRbNF07XG4gICAgbGV0IG0yMiA9IG1hdFs1XTtcbiAgICBsZXQgbTIzID0gbWF0WzZdO1xuICAgIGxldCBtMzEgPSBtYXRbOF07XG4gICAgbGV0IG0zMiA9IG1hdFs5XTtcbiAgICBsZXQgbTMzID0gbWF0WzEwXTtcblxuICAgIG91dFswXSA9IE1hdGguaHlwb3QobTExLCBtMTIsIG0xMyk7XG4gICAgb3V0WzFdID0gTWF0aC5oeXBvdChtMjEsIG0yMiwgbTIzKTtcbiAgICBvdXRbMl0gPSBNYXRoLmh5cG90KG0zMSwgbTMyLCBtMzMpO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFNjYWxlT25BeGlzKG1hdCkge1xuICAgIGxldCBtMTEgPSBtYXRbMF07XG4gICAgbGV0IG0xMiA9IG1hdFsxXTtcbiAgICBsZXQgbTEzID0gbWF0WzJdO1xuICAgIGxldCBtMjEgPSBtYXRbNF07XG4gICAgbGV0IG0yMiA9IG1hdFs1XTtcbiAgICBsZXQgbTIzID0gbWF0WzZdO1xuICAgIGxldCBtMzEgPSBtYXRbOF07XG4gICAgbGV0IG0zMiA9IG1hdFs5XTtcbiAgICBsZXQgbTMzID0gbWF0WzEwXTtcblxuICAgIGNvbnN0IHggPSBtMTEgKiBtMTEgKyBtMTIgKiBtMTIgKyBtMTMgKiBtMTM7XG4gICAgY29uc3QgeSA9IG0yMSAqIG0yMSArIG0yMiAqIG0yMiArIG0yMyAqIG0yMztcbiAgICBjb25zdCB6ID0gbTMxICogbTMxICsgbTMyICogbTMyICsgbTMzICogbTMzO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLm1heCh4LCB5LCB6KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5leHBvcnQgY29uc3QgZ2V0Um90YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRlbXAgPSBbMSwgMSwgMV07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG91dCwgbWF0KSB7XG4gICAgICAgIGxldCBzY2FsaW5nID0gdGVtcDtcbiAgICAgICAgZ2V0U2NhbGluZyhzY2FsaW5nLCBtYXQpO1xuXG4gICAgICAgIGxldCBpczEgPSAxIC8gc2NhbGluZ1swXTtcbiAgICAgICAgbGV0IGlzMiA9IDEgLyBzY2FsaW5nWzFdO1xuICAgICAgICBsZXQgaXMzID0gMSAvIHNjYWxpbmdbMl07XG5cbiAgICAgICAgbGV0IHNtMTEgPSBtYXRbMF0gKiBpczE7XG4gICAgICAgIGxldCBzbTEyID0gbWF0WzFdICogaXMyO1xuICAgICAgICBsZXQgc20xMyA9IG1hdFsyXSAqIGlzMztcbiAgICAgICAgbGV0IHNtMjEgPSBtYXRbNF0gKiBpczE7XG4gICAgICAgIGxldCBzbTIyID0gbWF0WzVdICogaXMyO1xuICAgICAgICBsZXQgc20yMyA9IG1hdFs2XSAqIGlzMztcbiAgICAgICAgbGV0IHNtMzEgPSBtYXRbOF0gKiBpczE7XG4gICAgICAgIGxldCBzbTMyID0gbWF0WzldICogaXMyO1xuICAgICAgICBsZXQgc20zMyA9IG1hdFsxMF0gKiBpczM7XG5cbiAgICAgICAgbGV0IHRyYWNlID0gc20xMSArIHNtMjIgKyBzbTMzO1xuICAgICAgICBsZXQgUyA9IDA7XG5cbiAgICAgICAgaWYgKHRyYWNlID4gMCkge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgICAgICAgICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgICAgICAgICBvdXRbMF0gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICAgICAgICAgIG91dFsxXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgICAgICAgICAgb3V0WzJdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gICAgICAgIH0gZWxzZSBpZiAoc20xMSA+IHNtMjIgJiYgc20xMSA+IHNtMzMpIHtcbiAgICAgICAgICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20xMSAtIHNtMjIgLSBzbTMzKSAqIDI7XG4gICAgICAgICAgICBvdXRbM10gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICAgICAgICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgICAgICAgICAgb3V0WzFdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgICAgICAgICBvdXRbMl0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICAgICAgfSBlbHNlIGlmIChzbTIyID4gc20zMykge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTIyIC0gc20xMSAtIHNtMzMpICogMjtcbiAgICAgICAgICAgIG91dFszXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgICAgICAgICAgb3V0WzBdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgICAgICAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICAgICAgICAgIG91dFsyXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTMzIC0gc20xMSAtIHNtMjIpICogMjtcbiAgICAgICAgICAgIG91dFszXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICAgICAgICAgICAgb3V0WzBdID0gKHNtMzEgKyBzbTEzKSAvIFM7XG4gICAgICAgICAgICBvdXRbMV0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgICAgICAgICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xufSkoKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHh5ID0geCAqIHkyO1xuICAgIGxldCB4eiA9IHggKiB6MjtcbiAgICBsZXQgeXkgPSB5ICogeTI7XG4gICAgbGV0IHl6ID0geSAqIHoyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcbiAgICBsZXQgc3ggPSBzWzBdO1xuICAgIGxldCBzeSA9IHNbMV07XG4gICAgbGV0IHN6ID0gc1syXTtcblxuICAgIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICAgIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICAgIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gICAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gICAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHl4ID0geSAqIHgyO1xuICAgIGxldCB5eSA9IHkgKiB5MjtcbiAgICBsZXQgenggPSB6ICogeDI7XG4gICAgbGV0IHp5ID0geiAqIHkyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgbGV0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMik7XG4gICAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDIgKiBmYXIgKiBuZWFyICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIGxldCBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KTtcbiAgICBsZXQgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCk7XG4gICAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbWF0cml4IHRoYXQgbWFrZXMgc29tZXRoaW5nIGxvb2sgYXQgc29tZXRoaW5nIGVsc2UuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSB0YXJnZXQgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRvKG91dCwgZXllLCB0YXJnZXQsIHVwKSB7XG4gICAgbGV0IGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl07XG5cbiAgICBsZXQgejAgPSBleWV4IC0gdGFyZ2V0WzBdLFxuICAgICAgICB6MSA9IGV5ZXkgLSB0YXJnZXRbMV0sXG4gICAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcblxuICAgIGxldCBsZW4gPSB6MCAqIHowICsgejEgKiB6MSArIHoyICogejI7XG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAvLyBleWUgYW5kIHRhcmdldCBhcmUgaW4gdGhlIHNhbWUgcG9zaXRpb25cbiAgICAgICAgejIgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICAgICAgejAgKj0gbGVuO1xuICAgICAgICB6MSAqPSBsZW47XG4gICAgICAgIHoyICo9IGxlbjtcbiAgICB9XG5cbiAgICBsZXQgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxLFxuICAgICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcblxuICAgIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIC8vIHVwIGFuZCB6IGFyZSBwYXJhbGxlbFxuICAgICAgICBpZiAodXB6KSB7XG4gICAgICAgICAgICB1cHggKz0gMWUtNjtcbiAgICAgICAgfSBlbHNlIGlmICh1cHkpIHtcbiAgICAgICAgICAgIHVweiArPSAxZS02O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXB5ICs9IDFlLTY7XG4gICAgICAgIH1cbiAgICAgICAgKHgwID0gdXB5ICogejIgLSB1cHogKiB6MSksICh4MSA9IHVweiAqIHowIC0gdXB4ICogejIpLCAoeDIgPSB1cHggKiB6MSAtIHVweSAqIHowKTtcblxuICAgICAgICBsZW4gPSB4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDI7XG4gICAgfVxuXG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geDE7XG4gICAgb3V0WzJdID0geDI7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgICBvdXRbNl0gPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHowO1xuICAgIG91dFs5XSA9IHoxO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gZXlleDtcbiAgICBvdXRbMTNdID0gZXlleTtcbiAgICBvdXRbMTRdID0gZXllejtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gICAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gICAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gICAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gICAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gICAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gICAgb3V0WzldID0gYVs5XSAtIGJbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdIC0gYlsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdIC0gYlsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdIC0gYlsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdIC0gYlsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIG91dFs0XSA9IGFbNF0gKiBiO1xuICAgIG91dFs1XSA9IGFbNV0gKiBiO1xuICAgIG91dFs2XSA9IGFbNl0gKiBiO1xuICAgIG91dFs3XSA9IGFbN10gKiBiO1xuICAgIG91dFs4XSA9IGFbOF0gKiBiO1xuICAgIG91dFs5XSA9IGFbOV0gKiBiO1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gICAgb3V0WzExXSA9IGFbMTFdICogYjtcbiAgICBvdXRbMTJdID0gYVsxMl0gKiBiO1xuICAgIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gICAgb3V0WzE0XSA9IGFbMTRdICogYjtcbiAgICBvdXRbMTVdID0gYVsxNV0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJpbXBvcnQgKiBhcyB2ZWM0IGZyb20gJy4vVmVjNEZ1bmMuanMnO1xuXG4vKipcbiAqIFNldCBhIHF1YXQgdG8gdGhlIGlkZW50aXR5IHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcbiAqIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyBhcm91bmQgd2hpY2ggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2V0QXhpc0FuZ2xlKG91dCwgYXhpcywgcmFkKSB7XG4gICAgcmFkID0gcmFkICogMC41O1xuICAgIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBvdXRbMF0gPSBzICogYXhpc1swXTtcbiAgICBvdXRbMV0gPSBzICogYXhpc1sxXTtcbiAgICBvdXRbMl0gPSBzICogYXhpc1syXTtcbiAgICBvdXRbM10gPSBNYXRoLmNvcyhyYWQpO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gcXVhdHNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnggPSBiWzBdLFxuICAgICAgICBieSA9IGJbMV0sXG4gICAgICAgIGJ6ID0gYlsyXSxcbiAgICAgICAgYncgPSBiWzNdO1xuXG4gICAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gICAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICByYWQgKj0gMC41O1xuXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnggPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieDtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXogKiBieDtcbiAgICBvdXRbMl0gPSBheiAqIGJ3IC0gYXkgKiBieDtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgICByYWQgKj0gMC41O1xuXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnkgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieTtcbiAgICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXkgKiBieTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICByYWQgKj0gMC41O1xuXG4gICAgbGV0IGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl0sXG4gICAgICAgIGF3ID0gYVszXTtcbiAgICBsZXQgYnogPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICBvdXRbMF0gPSBheCAqIGJ3ICsgYXkgKiBiejtcbiAgICBvdXRbMV0gPSBheSAqIGJ3IC0gYXggKiBiejtcbiAgICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBiejtcbiAgICBvdXRbM10gPSBhdyAqIGJ3IC0gYXogKiBiejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgLy8gYmVuY2htYXJrczpcbiAgICAvLyAgICBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXNsZXJwLWltcGxlbWVudGF0aW9uc1xuICAgIGxldCBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXSxcbiAgICAgICAgYXogPSBhWzJdLFxuICAgICAgICBhdyA9IGFbM107XG4gICAgbGV0IGJ4ID0gYlswXSxcbiAgICAgICAgYnkgPSBiWzFdLFxuICAgICAgICBieiA9IGJbMl0sXG4gICAgICAgIGJ3ID0gYlszXTtcblxuICAgIGxldCBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTtcblxuICAgIC8vIGNhbGMgY29zaW5lXG4gICAgY29zb20gPSBheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogKyBhdyAqIGJ3O1xuICAgIC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuICAgIGlmIChjb3NvbSA8IDAuMCkge1xuICAgICAgICBjb3NvbSA9IC1jb3NvbTtcbiAgICAgICAgYnggPSAtYng7XG4gICAgICAgIGJ5ID0gLWJ5O1xuICAgICAgICBieiA9IC1iejtcbiAgICAgICAgYncgPSAtYnc7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcbiAgICBpZiAoMS4wIC0gY29zb20gPiAwLjAwMDAwMSkge1xuICAgICAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICAgICAgb21lZ2EgPSBNYXRoLmFjb3MoY29zb20pO1xuICAgICAgICBzaW5vbSA9IE1hdGguc2luKG9tZWdhKTtcbiAgICAgICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcImZyb21cIiBhbmQgXCJ0b1wiIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlXG4gICAgICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICAgICAgc2NhbGUxID0gdDtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICAgIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gICAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICAgIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGludmVyc2Ugb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgaW52ZXJzZSBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIGxldCBhMCA9IGFbMF0sXG4gICAgICAgIGExID0gYVsxXSxcbiAgICAgICAgYTIgPSBhWzJdLFxuICAgICAgICBhMyA9IGFbM107XG4gICAgbGV0IGRvdCA9IGEwICogYTAgKyBhMSAqIGExICsgYTIgKiBhMiArIGEzICogYTM7XG4gICAgbGV0IGludkRvdCA9IGRvdCA/IDEuMCAvIGRvdCA6IDA7XG5cbiAgICAvLyBUT0RPOiBXb3VsZCBiZSBmYXN0ZXIgdG8gcmV0dXJuIFswLDAsMCwwXSBpbW1lZGlhdGVseSBpZiBkb3QgPT0gMFxuXG4gICAgb3V0WzBdID0gLWEwICogaW52RG90O1xuICAgIG91dFsxXSA9IC1hMSAqIGludkRvdDtcbiAgICBvdXRbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gICAgb3V0WzNdID0gYTMgKiBpbnZEb3Q7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0XG4gKiBJZiB0aGUgcXVhdGVybmlvbiBpcyBub3JtYWxpemVkLCB0aGlzIGZ1bmN0aW9uIGlzIGZhc3RlciB0aGFuIHF1YXQuaW52ZXJzZSBhbmQgcHJvZHVjZXMgdGhlIHNhbWUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIGNvbmp1Z2F0ZSBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uanVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdO1xuICAgIG91dFsxXSA9IC1hWzFdO1xuICAgIG91dFsyXSA9IC1hWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxuICpcbiAqIE5PVEU6IFRoZSByZXN1bHRhbnQgcXVhdGVybmlvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28geW91IHNob3VsZCBiZSBzdXJlXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge21hdDN9IG0gcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQzKG91dCwgbSkge1xuICAgIC8vIEFsZ29yaXRobSBpbiBLZW4gU2hvZW1ha2UncyBhcnRpY2xlIGluIDE5ODcgU0lHR1JBUEggY291cnNlIG5vdGVzXG4gICAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gICAgbGV0IGZUcmFjZSA9IG1bMF0gKyBtWzRdICsgbVs4XTtcbiAgICBsZXQgZlJvb3Q7XG5cbiAgICBpZiAoZlRyYWNlID4gMC4wKSB7XG4gICAgICAgIC8vIHx3fCA+IDEvMiwgbWF5IGFzIHdlbGwgY2hvb3NlIHcgPiAxLzJcbiAgICAgICAgZlJvb3QgPSBNYXRoLnNxcnQoZlRyYWNlICsgMS4wKTsgLy8gMndcbiAgICAgICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgICAgIGZSb290ID0gMC41IC8gZlJvb3Q7IC8vIDEvKDR3KVxuICAgICAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgICAgIG91dFsxXSA9IChtWzZdIC0gbVsyXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHx3fCA8PSAxLzJcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBpZiAobVs0XSA+IG1bMF0pIGkgPSAxO1xuICAgICAgICBpZiAobVs4XSA+IG1baSAqIDMgKyBpXSkgaSA9IDI7XG4gICAgICAgIGxldCBqID0gKGkgKyAxKSAlIDM7XG4gICAgICAgIGxldCBrID0gKGkgKyAyKSAlIDM7XG5cbiAgICAgICAgZlJvb3QgPSBNYXRoLnNxcnQobVtpICogMyArIGldIC0gbVtqICogMyArIGpdIC0gbVtrICogMyArIGtdICsgMS4wKTtcbiAgICAgICAgb3V0W2ldID0gMC41ICogZlJvb3Q7XG4gICAgICAgIGZSb290ID0gMC41IC8gZlJvb3Q7XG4gICAgICAgIG91dFszXSA9IChtW2ogKiAzICsga10gLSBtW2sgKiAzICsgal0pICogZlJvb3Q7XG4gICAgICAgIG91dFtqXSA9IChtW2ogKiAzICsgaV0gKyBtW2kgKiAzICsgal0pICogZlJvb3Q7XG4gICAgICAgIG91dFtrXSA9IChtW2sgKiAzICsgaV0gKyBtW2kgKiAzICsga10pICogZlJvb3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBldWxlciBBbmdsZXMgdG8gcm90YXRlIGFyb3VuZCBlYWNoIGF4aXMgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcmRlciBkZXRhaWxpbmcgb3JkZXIgb2Ygb3BlcmF0aW9ucy4gRGVmYXVsdCAnWFlaJy5cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV1bGVyKG91dCwgZXVsZXIsIG9yZGVyID0gJ1lYWicpIHtcbiAgICBsZXQgc3ggPSBNYXRoLnNpbihldWxlclswXSAqIDAuNSk7XG4gICAgbGV0IGN4ID0gTWF0aC5jb3MoZXVsZXJbMF0gKiAwLjUpO1xuICAgIGxldCBzeSA9IE1hdGguc2luKGV1bGVyWzFdICogMC41KTtcbiAgICBsZXQgY3kgPSBNYXRoLmNvcyhldWxlclsxXSAqIDAuNSk7XG4gICAgbGV0IHN6ID0gTWF0aC5zaW4oZXVsZXJbMl0gKiAwLjUpO1xuICAgIGxldCBjeiA9IE1hdGguY29zKGV1bGVyWzJdICogMC41KTtcblxuICAgIGlmIChvcmRlciA9PT0gJ1hZWicpIHtcbiAgICAgICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6IC0gc3ggKiBzeSAqIHN6O1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWFonKSB7XG4gICAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6IC0gc3ggKiBjeSAqIHN6O1xuICAgICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWlhZJykge1xuICAgICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgICAgb3V0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1pZWCcpIHtcbiAgICAgICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICAgICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWlgnKSB7XG4gICAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICAgICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWFpZJykge1xuICAgICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgICAgb3V0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgcXVhdCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIHNvdXJjZSBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGNvcHkgPSB2ZWM0LmNvcHk7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzZXQgPSB2ZWM0LnNldDtcblxuLyoqXG4gKiBBZGRzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBhZGQgPSB2ZWM0LmFkZDtcblxuLyoqXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB2ZWM0LnNjYWxlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZG90ID0gdmVjNC5kb3Q7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZXJwID0gdmVjNC5sZXJwO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBjb25zdCBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdGVybmlvbiB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG4iLCJjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeiwgdykge1xuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICBvdXRbMl0gPSB6O1xuICAgIG91dFszXSA9IHc7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSArIGJbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgbGV0IHggPSBhWzBdO1xuICAgIGxldCB5ID0gYVsxXTtcbiAgICBsZXQgeiA9IGFbMl07XG4gICAgbGV0IHcgPSBhWzNdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICBsZXQgeCA9IGFbMF07XG4gICAgbGV0IHkgPSBhWzFdO1xuICAgIGxldCB6ID0gYVsyXTtcbiAgICBsZXQgdyA9IGFbM107XG4gICAgbGV0IGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB9XG4gICAgb3V0WzBdID0geCAqIGxlbjtcbiAgICBvdXRbMV0gPSB5ICogbGVuO1xuICAgIG91dFsyXSA9IHogKiBsZW47XG4gICAgb3V0WzNdID0gdyAqIGxlbjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICBsZXQgYXggPSBhWzBdO1xuICAgIGxldCBheSA9IGFbMV07XG4gICAgbGV0IGF6ID0gYVsyXTtcbiAgICBsZXQgYXcgPSBhWzNdO1xuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICAgIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICAgIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICAgIHJldHVybiBvdXQ7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyY2U0ZDM2MjEyYzg2ZWFlMWFjZVwiKSJdLCJuYW1lcyI6WyJDYW1lcmEiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIkJveCIsIlByb2dyYW0iLCJNZXNoIiwiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJjcmVhdGVSZW5kZXJlciIsInJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsImNyZWF0ZVNjZW5lIiwic2NlbmUiLCJjcmVhdGVDdWJlIiwiZ2VvbWV0cnkiLCJwcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwic2V0UGFyZW50Iiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJyZW5kZXIiLCJNYXQ0IiwiVmVjMyIsInRlbXBNYXQ0IiwidGVtcFZlYzNhIiwidGVtcFZlYzNiIiwibmVhciIsImZhciIsImZvdiIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcCIsInpvb20iLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9qZWN0aW9uTWF0cml4Iiwidmlld01hdHJpeCIsInByb2plY3Rpb25WaWV3TWF0cml4Iiwid29ybGRQb3NpdGlvbiIsInR5cGUiLCJvcnRob2dyYXBoaWMiLCJmcm9tUGVyc3BlY3RpdmUiLCJNYXRoIiwiUEkiLCJmcm9tT3J0aG9nb25hbCIsInVwZGF0ZU1hdHJpeFdvcmxkIiwiaW52ZXJzZSIsIndvcmxkTWF0cml4IiwiZ2V0VHJhbnNsYXRpb24iLCJtdWx0aXBseSIsImxvb2tBdCIsInRhcmdldCIsInByb2plY3QiLCJ2IiwiYXBwbHlNYXRyaXg0IiwidW5wcm9qZWN0IiwidXBkYXRlRnJ1c3R1bSIsImZydXN0dW0iLCJtIiwic2V0IiwiY29uc3RhbnQiLCJpIiwiaW52TGVuIiwiZGlzdGFuY2UiLCJmcnVzdHVtSW50ZXJzZWN0c01lc2giLCJub2RlIiwiYXR0cmlidXRlcyIsImJvdW5kcyIsInJhZGl1cyIsIkluZmluaXR5IiwiY29tcHV0ZUJvdW5kaW5nU3BoZXJlIiwiY2VudGVyIiwiY29weSIsImdldE1heFNjYWxlT25BeGlzIiwiZnJ1c3R1bUludGVyc2VjdHNTcGhlcmUiLCJub3JtYWwiLCJwbGFuZSIsImRvdCIsInRlbXBWZWMzIiwiSUQiLCJBVFRSX0lEIiwiaXNCb3VuZHNXYXJuZWQiLCJHZW9tZXRyeSIsImNvbnNvbGUiLCJlcnJvciIsImlkIiwiVkFPcyIsImRyYXdSYW5nZSIsInN0YXJ0IiwiY291bnQiLCJpbnN0YW5jZWRDb3VudCIsImJpbmRWZXJ0ZXhBcnJheSIsImN1cnJlbnRHZW9tZXRyeSIsImdsU3RhdGUiLCJzdGF0ZSIsImtleSIsImFkZEF0dHJpYnV0ZSIsImF0dHIiLCJzaXplIiwiZGF0YSIsIkZsb2F0MzJBcnJheSIsIkZMT0FUIiwiVWludDE2QXJyYXkiLCJVTlNJR05FRF9TSE9SVCIsIlVOU0lHTkVEX0lOVCIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiQVJSQVlfQlVGRkVSIiwibm9ybWFsaXplZCIsInN0cmlkZSIsIm9mZnNldCIsImJ5dGVMZW5ndGgiLCJsZW5ndGgiLCJkaXZpc29yIiwiaW5zdGFuY2VkIiwibmVlZHNVcGRhdGUiLCJ1c2FnZSIsIlNUQVRJQ19EUkFXIiwiYnVmZmVyIiwidXBkYXRlQXR0cmlidXRlIiwiaXNJbnN0YW5jZWQiLCJ3YXJuIiwibWluIiwiaW5kZXgiLCJtYXgiLCJpc05ld0J1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJvdW5kQnVmZmVyIiwiYmluZEJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJidWZmZXJTdWJEYXRhIiwic2V0SW5kZXgiLCJ2YWx1ZSIsInNldERyYXdSYW5nZSIsInNldEluc3RhbmNlZENvdW50IiwiY3JlYXRlVkFPIiwiYXR0cmlidXRlT3JkZXIiLCJjcmVhdGVWZXJ0ZXhBcnJheSIsImJpbmRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZm9yRWFjaCIsImxvY2F0aW9uIiwibmFtZSIsIm51bUxvYyIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYkRpdmlzb3IiLCJkcmF3IiwibW9kZSIsIlRSSUFOR0xFUyIsImluZGV4Qnl0ZXNQZXJFbGVtZW50IiwiZHJhd0VsZW1lbnRzSW5zdGFuY2VkIiwiZHJhd0FycmF5c0luc3RhbmNlZCIsImRyYXdFbGVtZW50cyIsImRyYXdBcnJheXMiLCJnZXRQb3NpdGlvbiIsImNvbXB1dGVCb3VuZGluZ0JveCIsImFycmF5Iiwic2NhbGUiLCJsIiwieCIsInkiLCJzdWIiLCJhZGQiLCJkaXZpZGUiLCJtYXhSYWRpdXNTcSIsImZyb21BcnJheSIsInNxdWFyZWREaXN0YW5jZSIsInNxcnQiLCJyZW1vdmUiLCJkZWxldGVWZXJ0ZXhBcnJheSIsImRlbGV0ZUJ1ZmZlciIsIk1hdDMiLCJmcnVzdHVtQ3VsbGVkIiwicmVuZGVyT3JkZXIiLCJtb2RlbFZpZXdNYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJiZWZvcmVSZW5kZXJDYWxsYmFja3MiLCJhZnRlclJlbmRlckNhbGxiYWNrcyIsIm9uQmVmb3JlUmVuZGVyIiwiZiIsInB1c2giLCJvbkFmdGVyUmVuZGVyIiwidW5pZm9ybXMiLCJtb2RlbE1hdHJpeCIsImNhbWVyYVBvc2l0aW9uIiwiZ2V0Tm9ybWFsTWF0cml4IiwiZmxpcEZhY2VzIiwiY3VsbEZhY2UiLCJkZXRlcm1pbmFudCIsInVzZSIsImFycmF5Q2FjaGVGMzIiLCJ0cmFuc3BhcmVudCIsIkJBQ0siLCJmcm9udEZhY2UiLCJDQ1ciLCJkZXB0aFRlc3QiLCJkZXB0aFdyaXRlIiwiZGVwdGhGdW5jIiwiTEVTUyIsImJsZW5kRnVuYyIsImJsZW5kRXF1YXRpb24iLCJzcmMiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJzZXRCbGVuZEZ1bmMiLCJPTkUiLCJPTkVfTUlOVVNfU1JDX0FMUEhBIiwiU1JDX0FMUEhBIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJJbmZvTG9nIiwiYWRkTGluZU51bWJlcnMiLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImdldFByb2dyYW1JbmZvTG9nIiwiZGVsZXRlU2hhZGVyIiwidW5pZm9ybUxvY2F0aW9ucyIsIk1hcCIsIm51bVVuaWZvcm1zIiwiQUNUSVZFX1VOSUZPUk1TIiwidUluZGV4IiwidW5pZm9ybSIsImdldEFjdGl2ZVVuaWZvcm0iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJzcGxpdCIsIm1hdGNoIiwidW5pZm9ybU5hbWUiLCJuYW1lQ29tcG9uZW50cyIsInNsaWNlIiwibG9jYXRpb25zIiwibnVtQXR0cmlicyIsIkFDVElWRV9BVFRSSUJVVEVTIiwiYUluZGV4IiwiYXR0cmlidXRlIiwiZ2V0QWN0aXZlQXR0cmliIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJqb2luIiwiZHN0Iiwic3JjQWxwaGEiLCJkc3RBbHBoYSIsInNldEJsZW5kRXF1YXRpb24iLCJtb2RlUkdCIiwibW9kZUFscGhhIiwiYXBwbHlTdGF0ZSIsImVuYWJsZSIsIkRFUFRIX1RFU1QiLCJkaXNhYmxlIiwiQ1VMTF9GQUNFIiwiQkxFTkQiLCJzZXRDdWxsRmFjZSIsInNldEZyb250RmFjZSIsInNldERlcHRoTWFzayIsInNldERlcHRoRnVuYyIsInRleHR1cmVVbml0IiwicHJvZ3JhbUFjdGl2ZSIsImN1cnJlbnRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImFjdGl2ZVVuaWZvcm0iLCJjb21wb25lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJ0ZXh0dXJlIiwic2V0VW5pZm9ybSIsInRleHR1cmVVbml0cyIsIkNXIiwiZGVsZXRlUHJvZ3JhbSIsImZsYXR0ZW4iLCJzZXRWYWx1ZSIsImdldCIsImFycmF5c0VxdWFsIiwic2V0QXJyYXkiLCJ1bmlmb3JtMWZ2IiwidW5pZm9ybTFmIiwidW5pZm9ybTJmdiIsInVuaWZvcm0zZnYiLCJ1bmlmb3JtNGZ2IiwidW5pZm9ybTFpdiIsInVuaWZvcm0xaSIsInVuaWZvcm0yaXYiLCJ1bmlmb3JtM2l2IiwidW5pZm9ybTRpdiIsInVuaWZvcm1NYXRyaXgyZnYiLCJ1bmlmb3JtTWF0cml4M2Z2IiwidW5pZm9ybU1hdHJpeDRmdiIsInN0cmluZyIsImxpbmVzIiwiYSIsImFycmF5TGVuIiwidmFsdWVMZW4iLCJiIiwid2FybkNvdW50IiwibWVzc2FnZSIsIlF1YXQiLCJFdWxlciIsInBhcmVudCIsImNoaWxkcmVuIiwidmlzaWJsZSIsIm1hdHJpeCIsIm1hdHJpeEF1dG9VcGRhdGUiLCJ3b3JsZE1hdHJpeE5lZWRzVXBkYXRlIiwicXVhdGVybmlvbiIsInJvdGF0aW9uIiwidXAiLCJvbkNoYW5nZSIsImZyb21FdWxlciIsImZyb21RdWF0ZXJuaW9uIiwibm90aWZ5UGFyZW50IiwicmVtb3ZlQ2hpbGQiLCJhZGRDaGlsZCIsImNoaWxkIiwibm90aWZ5Q2hpbGQiLCJpbmRleE9mIiwic3BsaWNlIiwiZm9yY2UiLCJ1cGRhdGVNYXRyaXgiLCJjb21wb3NlIiwidHJhdmVyc2UiLCJjYWxsYmFjayIsImRlY29tcG9zZSIsImdldFJvdGF0aW9uIiwiZ2V0U2NhbGluZyIsImludmVydCIsIlBsYW5lIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsIndpZHRoU2VnbWVudHMiLCJoZWlnaHRTZWdtZW50cyIsImRlcHRoU2VnbWVudHMiLCJ3U2VncyIsImhTZWdzIiwiZFNlZ3MiLCJudW0iLCJudW1JbmRpY2VzIiwidXYiLCJVaW50MzJBcnJheSIsImlpIiwiYnVpbGRQbGFuZSIsInUiLCJ3IiwidURpciIsInZEaXIiLCJpbyIsInNlZ1ciLCJzZWdIIiwiaXkiLCJpeCIsImMiLCJkIiwiRXVsZXJGdW5jIiwidG1wTWF0NCIsIm9yZGVyIiwicmVvcmRlciIsImZyb21Sb3RhdGlvbk1hdHJpeCIsInEiLCJvIiwidG9BcnJheSIsIk1hdDNGdW5jIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwibTIwIiwibTIxIiwibTIyIiwidHJhbnNsYXRlIiwicm90YXRlIiwibWEiLCJtYiIsImlkZW50aXR5IiwiZnJvbU1hdHJpeDQiLCJmcm9tTWF0NCIsImZyb21RdWF0IiwiZnJvbUJhc2lzIiwidmVjM2EiLCJ2ZWMzYiIsInZlYzNjIiwibm9ybWFsRnJvbU1hdDQiLCJNYXQ0RnVuYyIsIm0wMyIsIm0xMyIsIm0yMyIsIm0zMCIsIm0zMSIsIm0zMiIsIm0zMyIsImF4aXMiLCJzdWJ0cmFjdCIsIm11bHRpcGx5U2NhbGFyIiwib3J0aG8iLCJzZXRQb3NpdGlvbiIsInBvcyIsImZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGUiLCJleWUiLCJ0YXJnZXRUbyIsIlF1YXRGdW5jIiwicm90YXRlWCIsInJvdGF0ZVkiLCJyb3RhdGVaIiwiY29uanVnYXRlIiwibm9ybWFsaXplIiwicUEiLCJxQiIsImZyb21NYXRyaXgzIiwibWF0cml4MyIsImZyb21NYXQzIiwiZXVsZXIiLCJmcm9tQXhpc0FuZ2xlIiwic2V0QXhpc0FuZ2xlIiwic2xlcnAiLCJ0Iiwib3V0IiwiYXNpbiIsImFicyIsImF0YW4yIiwiRVBTSUxPTiIsIngyIiwieTIiLCJ6MiIsInh4IiwieXgiLCJ5eSIsInp4IiwienkiLCJ6eiIsInd4Iiwid3kiLCJ3eiIsInRyYW5zcG9zZSIsImEwMSIsImEwMiIsImExMiIsImEwMCIsImExMCIsImExMSIsImEyMCIsImEyMSIsImEyMiIsImIwMSIsImIxMSIsImIyMSIsImRldCIsImIwMCIsImIwMiIsImIxMCIsImIxMiIsImIyMCIsImIyMiIsInJhZCIsInMiLCJzaW4iLCJjb3MiLCJhMDMiLCJhMTMiLCJhMjMiLCJhMzAiLCJhMzEiLCJhMzIiLCJhMzMiLCJiMDMiLCJiMDQiLCJiMDUiLCJiMDYiLCJiMDciLCJiMDgiLCJiMDkiLCJwcm9qZWN0aW9uIiwiYjAiLCJiMSIsImIyIiwiYjMiLCJsZW4iLCJoeXBvdCIsIm1hdCIsInRlbXAiLCJzY2FsaW5nIiwiaXMxIiwiaXMyIiwiaXMzIiwic20xMSIsInNtMTIiLCJzbTEzIiwic20yMSIsInNtMjIiLCJzbTIzIiwic20zMSIsInNtMzIiLCJzbTMzIiwidHJhY2UiLCJTIiwieHkiLCJ4eiIsInl6Iiwic3giLCJzeSIsInN6IiwiZm92eSIsInRhbiIsIm5mIiwibHIiLCJidCIsImV5ZXgiLCJleWV5IiwiZXlleiIsInVweCIsInVweSIsInVweiIsInowIiwiejEiLCJ4MCIsIngxIiwidmVjNCIsImF4IiwiYXkiLCJheiIsImF3IiwiYngiLCJieSIsImJ6IiwiYnciLCJvbWVnYSIsImNvc29tIiwic2lub20iLCJzY2FsZTAiLCJzY2FsZTEiLCJhY29zIiwiYTAiLCJhMSIsImEyIiwiYTMiLCJpbnZEb3QiLCJmVHJhY2UiLCJmUm9vdCIsImoiLCJrIiwiY3giLCJjeSIsImN6IiwibGVycCJdLCJzb3VyY2VSb290IjoiIn0=