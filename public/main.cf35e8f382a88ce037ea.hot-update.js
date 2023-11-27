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
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Media.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor() {
    this.medias = document.querySelectorAll('.home__gallery__media__image');
    this.createGallery();
  }
  createGallery() {
    lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(this.medias, (element, index) => {
      return new _Media__WEBPACK_IMPORTED_MODULE_0__["default"]({
        element,
        index
      });
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
    gl
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
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
  }
});

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("145384bfede225d9c46d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZjM1ZThmMzgyYTg4Y2UwMzdlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDQztBQUU3QixpRUFBZSxNQUFNO0VBQ2pCRSxXQUFXQSxDQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDbkMsOEJBQ0YsQ0FBQztJQUVILElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7RUFDeEI7RUFDQUEsYUFBYUEsQ0FBQSxFQUFFO0lBQ1hMLGlEQUFHLENBQUMsSUFBSSxDQUFDRSxNQUFNLEVBQUMsQ0FBQ0ksT0FBTyxFQUFDQyxLQUFLLEtBQUk7TUFDOUIsT0FBTyxJQUFJUiw4Q0FBSyxDQUFDO1FBQ2JPLE9BQU87UUFBQ0M7TUFDWixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ3dEO0FBRUw7QUFDSjtBQUUvQyxpRUFBZSxNQUFNO0VBQ25CTixXQUFXQSxDQUFDO0lBQUVLLE9BQU87SUFBRVEsUUFBUTtJQUFFQztFQUFHLENBQUMsRUFBRTtJQUNyQyxJQUFJLENBQUNULE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNTLEVBQUUsR0FBQ0EsRUFBRTtJQUNWLElBQUksQ0FBQ0QsUUFBUSxHQUFDQSxRQUFRO0lBQ3RCO0VBQ0Y7O0VBQ0FFLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUlOLHdDQUFPLENBQUMsSUFBSSxDQUFDSSxFQUFFLENBQUM7RUFFckM7RUFDQUcsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSVYsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUNsQ0gsUUFBUTtNQUNSQyxNQUFNO01BQ05PLFFBQVEsRUFBRTtRQUNSO01BQUE7SUFFSixDQUFDLENBQUM7RUFFSjtFQUNBQyxVQUFVQSxD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QUFDLENBQUMsR0FBRyxDQUFDO0VBQ1ZBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ1YsT0FBT0EsR0FBRztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTeUQsR0FBR0EsQ0FBQ3pELEdBQUcsRUFBRXBHLENBQUMsRUFBRUksQ0FBQyxFQUFFO0VBQzNCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCZ0csR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCLE9BQU9nRyxHQUFHO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMwRCxRQUFRQSxDQUFDMUQsR0FBRyxFQUFFcEcsQ0FBQyxFQUFFSSxDQUFDLEVBQUU7RUFDaENnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEJnRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdwRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEIsT0FBT2dHLEdBQUc7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUzJELGNBQWNBLENBQUMzRCxHQUFHLEVBQUVwRyxDQUFDLEVBQUVJLENBQUMsRUFBRTtFQUN0Q2dHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQmdHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR3BHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ksQ0FBQztFQUNqQixPQUFPZ0csR0FBRztBQUNkOzs7Ozs7OztVQ3JmQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9zaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL2NvcmUvTWVzaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9jb3JlL1Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL29nbC9zcmMvY29yZS9UZXh0dXJlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9vZ2wvc3JjL21hdGgvTWF0My5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvb2dsL3NyYy9tYXRoL2Z1bmN0aW9ucy9NYXQzRnVuYy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm1lZGlhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICAgICAgICApXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuICAgIH1cbiAgICBjcmVhdGVHYWxsZXJ5KCl7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywoZWxlbWVudCxpbmRleCkgPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LGluZGV4XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn0iLCIvL+WkhOeQhueFp+eJh1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVHJhbnNmb3JtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbD1nbFxuICAgIHRoaXMuZ2VvbWV0cnk9Z2VvbWV0cnlcbiAgICAvLyDkuIrpnaLnmoRlbG1lbnTpg73mmK/pnIDopoHlpI3nlKjnmoTmiYDku6XlnKjov5nph4zliJ3lp4vljJZcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpO1xuXG4gIH1cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIC8vICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIH1cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2g9bmV3IE1lc2godGhpcy5nbCx7XG4gICAgICBnZW9tZXRyeTp0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuNSwgMS4wLCAwLjAsIDEuMCk7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCI7IiwiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi9UcmFuc2Zvcm0uanMnO1xuaW1wb3J0IHsgTWF0MyB9IGZyb20gJy4uL21hdGgvTWF0My5qcyc7XG5pbXBvcnQgeyBNYXQ0IH0gZnJvbSAnLi4vbWF0aC9NYXQ0LmpzJztcblxubGV0IElEID0gMDtcblxuZXhwb3J0IGNsYXNzIE1lc2ggZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGdsLCB7IGdlb21ldHJ5LCBwcm9ncmFtLCBtb2RlID0gZ2wuVFJJQU5HTEVTLCBmcnVzdHVtQ3VsbGVkID0gdHJ1ZSwgcmVuZGVyT3JkZXIgPSAwIH0gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoIWdsLmNhbnZhcykgY29uc29sZS5lcnJvcignZ2wgbm90IHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudCB0byBNZXNoJyk7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcblxuICAgICAgICAvLyBVc2VkIHRvIHNraXAgZnJ1c3R1bSBjdWxsaW5nXG4gICAgICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZydXN0dW1DdWxsZWQ7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgc29ydGluZyB0byBmb3JjZSBhbiBvcmRlclxuICAgICAgICB0aGlzLnJlbmRlck9yZGVyID0gcmVuZGVyT3JkZXI7XG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4ID0gbmV3IE1hdDQoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxNYXRyaXggPSBuZXcgTWF0MygpO1xuICAgICAgICB0aGlzLmJlZm9yZVJlbmRlckNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmFmdGVyUmVuZGVyQ2FsbGJhY2tzID0gW107XG4gICAgfVxuXG4gICAgb25CZWZvcmVSZW5kZXIoZikge1xuICAgICAgICB0aGlzLmJlZm9yZVJlbmRlckNhbGxiYWNrcy5wdXNoKGYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkFmdGVyUmVuZGVyKGYpIHtcbiAgICAgICAgdGhpcy5hZnRlclJlbmRlckNhbGxiYWNrcy5wdXNoKGYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkcmF3KHsgY2FtZXJhIH0gPSB7fSkge1xuICAgICAgICBpZiAoY2FtZXJhKSB7XG4gICAgICAgICAgICAvLyBBZGQgZW1wdHkgbWF0cml4IHVuaWZvcm1zIHRvIHByb2dyYW0gaWYgdW5zZXRcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9ncmFtLnVuaWZvcm1zLm1vZGVsTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnByb2dyYW0udW5pZm9ybXMsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgdmlld01hdHJpeDogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbFZpZXdNYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsTWF0cml4OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb25NYXRyaXg6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb246IHsgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBtYXRyaXggdW5pZm9ybXNcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5wcm9qZWN0aW9uTWF0cml4LnZhbHVlID0gY2FtZXJhLnByb2plY3Rpb25NYXRyaXg7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMuY2FtZXJhUG9zaXRpb24udmFsdWUgPSBjYW1lcmEud29ybGRQb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy52aWV3TWF0cml4LnZhbHVlID0gY2FtZXJhLnZpZXdNYXRyaXg7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5tdWx0aXBseShjYW1lcmEudmlld01hdHJpeCwgdGhpcy53b3JsZE1hdHJpeCk7XG4gICAgICAgICAgICB0aGlzLm5vcm1hbE1hdHJpeC5nZXROb3JtYWxNYXRyaXgodGhpcy5tb2RlbFZpZXdNYXRyaXgpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLm1vZGVsTWF0cml4LnZhbHVlID0gdGhpcy53b3JsZE1hdHJpeDtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5tb2RlbFZpZXdNYXRyaXgudmFsdWUgPSB0aGlzLm1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy5ub3JtYWxNYXRyaXgudmFsdWUgPSB0aGlzLm5vcm1hbE1hdHJpeDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlZm9yZVJlbmRlckNhbGxiYWNrcy5mb3JFYWNoKChmKSA9PiBmICYmIGYoeyBtZXNoOiB0aGlzLCBjYW1lcmEgfSkpO1xuXG4gICAgICAgIC8vIGRldGVybWluZSBpZiBmYWNlcyBuZWVkIHRvIGJlIGZsaXBwZWQgLSB3aGVuIG1lc2ggc2NhbGVkIG5lZ2F0aXZlbHlcbiAgICAgICAgbGV0IGZsaXBGYWNlcyA9IHRoaXMucHJvZ3JhbS5jdWxsRmFjZSAmJiB0aGlzLndvcmxkTWF0cml4LmRldGVybWluYW50KCkgPCAwO1xuICAgICAgICB0aGlzLnByb2dyYW0udXNlKHsgZmxpcEZhY2VzIH0pO1xuICAgICAgICB0aGlzLmdlb21ldHJ5LmRyYXcoeyBtb2RlOiB0aGlzLm1vZGUsIHByb2dyYW06IHRoaXMucHJvZ3JhbSB9KTtcbiAgICAgICAgdGhpcy5hZnRlclJlbmRlckNhbGxiYWNrcy5mb3JFYWNoKChmKSA9PiBmICYmIGYoeyBtZXNoOiB0aGlzLCBjYW1lcmEgfSkpO1xuICAgIH1cbn1cbiIsIi8vIFRPRE86IHVwbG9hZCBlbXB0eSB0ZXh0dXJlIGlmIG51bGwgPyBtYXliZSBub3Rcbi8vIFRPRE86IHVwbG9hZCBpZGVudGl0eSBtYXRyaXggaWYgbnVsbCA/XG4vLyBUT0RPOiBzYW1wbGVyIEN1YmVcblxubGV0IElEID0gMTtcblxuLy8gY2FjaGUgb2YgdHlwZWQgYXJyYXlzIHVzZWQgdG8gZmxhdHRlbiB1bmlmb3JtIGFycmF5c1xuY29uc3QgYXJyYXlDYWNoZUYzMiA9IHt9O1xuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGdsLFxuICAgICAgICB7XG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgIHVuaWZvcm1zID0ge30sXG5cbiAgICAgICAgICAgIHRyYW5zcGFyZW50ID0gZmFsc2UsXG4gICAgICAgICAgICBjdWxsRmFjZSA9IGdsLkJBQ0ssXG4gICAgICAgICAgICBmcm9udEZhY2UgPSBnbC5DQ1csXG4gICAgICAgICAgICBkZXB0aFRlc3QgPSB0cnVlLFxuICAgICAgICAgICAgZGVwdGhXcml0ZSA9IHRydWUsXG4gICAgICAgICAgICBkZXB0aEZ1bmMgPSBnbC5MRVNTLFxuICAgICAgICB9ID0ge31cbiAgICApIHtcbiAgICAgICAgaWYgKCFnbC5jYW52YXMpIGNvbnNvbGUuZXJyb3IoJ2dsIG5vdCBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQgdG8gUHJvZ3JhbScpO1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSB1bmlmb3JtcztcbiAgICAgICAgdGhpcy5pZCA9IElEKys7XG5cbiAgICAgICAgaWYgKCF2ZXJ0ZXgpIGNvbnNvbGUud2FybigndmVydGV4IHNoYWRlciBub3Qgc3VwcGxpZWQnKTtcbiAgICAgICAgaWYgKCFmcmFnbWVudCkgY29uc29sZS53YXJuKCdmcmFnbWVudCBzaGFkZXIgbm90IHN1cHBsaWVkJyk7XG5cbiAgICAgICAgLy8gU3RvcmUgcHJvZ3JhbSBzdGF0ZVxuICAgICAgICB0aGlzLnRyYW5zcGFyZW50ID0gdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRoaXMuY3VsbEZhY2UgPSBjdWxsRmFjZTtcbiAgICAgICAgdGhpcy5mcm9udEZhY2UgPSBmcm9udEZhY2U7XG4gICAgICAgIHRoaXMuZGVwdGhUZXN0ID0gZGVwdGhUZXN0O1xuICAgICAgICB0aGlzLmRlcHRoV3JpdGUgPSBkZXB0aFdyaXRlO1xuICAgICAgICB0aGlzLmRlcHRoRnVuYyA9IGRlcHRoRnVuYztcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMgPSB7fTtcbiAgICAgICAgdGhpcy5ibGVuZEVxdWF0aW9uID0ge307XG5cbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgYmxlbmRGdW5jIGlmIHRyYW5zcGFyZW50IGZsYWdnZWRcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwYXJlbnQgJiYgIXRoaXMuYmxlbmRGdW5jLnNyYykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2wucmVuZGVyZXIucHJlbXVsdGlwbGllZEFscGhhKSB0aGlzLnNldEJsZW5kRnVuYyh0aGlzLmdsLk9ORSwgdGhpcy5nbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5zZXRCbGVuZEZ1bmModGhpcy5nbC5TUkNfQUxQSEEsIHRoaXMuZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21waWxlIHZlcnRleCBzaGFkZXIgYW5kIGxvZyBlcnJvcnNcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UodmVydGV4U2hhZGVyLCB2ZXJ0ZXgpO1xuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIGlmIChnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRleFNoYWRlcikgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0ZXhTaGFkZXIpfVxcblZlcnRleCBTaGFkZXJcXG4ke2FkZExpbmVOdW1iZXJzKHZlcnRleCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21waWxlIGZyYWdtZW50IHNoYWRlciBhbmQgbG9nIGVycm9yc1xuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXIsIGZyYWdtZW50KTtcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGlmIChnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdtZW50U2hhZGVyKSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnbC5nZXRTaGFkZXJJbmZvTG9nKGZyYWdtZW50U2hhZGVyKX1cXG5GcmFnbWVudCBTaGFkZXJcXG4ke2FkZExpbmVOdW1iZXJzKGZyYWdtZW50KX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBpbGUgcHJvZ3JhbSBhbmQgbG9nIGVycm9yc1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICAgICAgZ2wubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMucHJvZ3JhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHNoYWRlciBvbmNlIGxpbmtlZFxuICAgICAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcblxuICAgICAgICAvLyBHZXQgYWN0aXZlIHVuaWZvcm0gbG9jYXRpb25zXG4gICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGV0IG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG4gICAgICAgIGZvciAobGV0IHVJbmRleCA9IDA7IHVJbmRleCA8IG51bVVuaWZvcm1zOyB1SW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHVuaWZvcm0gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHRoaXMucHJvZ3JhbSwgdUluZGV4KTtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5zZXQodW5pZm9ybSwgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgdW5pZm9ybS5uYW1lKSk7XG5cbiAgICAgICAgICAgIC8vIHNwbGl0IHVuaWZvcm1zJyBuYW1lcyB0byBzZXBhcmF0ZSBhcnJheSBhbmQgc3RydWN0IGRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSB1bmlmb3JtLm5hbWUubWF0Y2goLyhcXHcrKS9nKTtcblxuICAgICAgICAgICAgdW5pZm9ybS51bmlmb3JtTmFtZSA9IHNwbGl0WzBdO1xuICAgICAgICAgICAgdW5pZm9ybS5uYW1lQ29tcG9uZW50cyA9IHNwbGl0LnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGFjdGl2ZSBhdHRyaWJ1dGUgbG9jYXRpb25zXG4gICAgICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgbnVtQXR0cmlicyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcm9ncmFtLCBnbC5BQ1RJVkVfQVRUUklCVVRFUyk7XG4gICAgICAgIGZvciAobGV0IGFJbmRleCA9IDA7IGFJbmRleCA8IG51bUF0dHJpYnM7IGFJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBnbC5nZXRBY3RpdmVBdHRyaWIodGhpcy5wcm9ncmFtLCBhSW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sIGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIC8vIElnbm9yZSBzcGVjaWFsIGJ1aWx0LWluIGlucHV0cy4gZWcgZ2xfVmVydGV4SUQsIGdsX0luc3RhbmNlSURcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PT0gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbG9jYXRpb25zW2xvY2F0aW9uXSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuc2V0KGF0dHJpYnV0ZSwgbG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT3JkZXIgPSBsb2NhdGlvbnMuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0QmxlbmRGdW5jKHNyYywgZHN0LCBzcmNBbHBoYSwgZHN0QWxwaGEpIHtcbiAgICAgICAgdGhpcy5ibGVuZEZ1bmMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLmJsZW5kRnVuYy5kc3QgPSBkc3Q7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLnNyY0FscGhhID0gc3JjQWxwaGE7XG4gICAgICAgIHRoaXMuYmxlbmRGdW5jLmRzdEFscGhhID0gZHN0QWxwaGE7XG4gICAgICAgIGlmIChzcmMpIHRoaXMudHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldEJsZW5kRXF1YXRpb24obW9kZVJHQiwgbW9kZUFscGhhKSB7XG4gICAgICAgIHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlUkdCID0gbW9kZVJHQjtcbiAgICAgICAgdGhpcy5ibGVuZEVxdWF0aW9uLm1vZGVBbHBoYSA9IG1vZGVBbHBoYTtcbiAgICB9XG5cbiAgICBhcHBseVN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5kZXB0aFRlc3QpIHRoaXMuZ2wucmVuZGVyZXIuZW5hYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG4gICAgICAgIGVsc2UgdGhpcy5nbC5yZW5kZXJlci5kaXNhYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VsbEZhY2UpIHRoaXMuZ2wucmVuZGVyZXIuZW5hYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcbiAgICAgICAgZWxzZSB0aGlzLmdsLnJlbmRlcmVyLmRpc2FibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xuXG4gICAgICAgIGlmICh0aGlzLmJsZW5kRnVuYy5zcmMpIHRoaXMuZ2wucmVuZGVyZXIuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICBlbHNlIHRoaXMuZ2wucmVuZGVyZXIuZGlzYWJsZSh0aGlzLmdsLkJMRU5EKTtcblxuICAgICAgICBpZiAodGhpcy5jdWxsRmFjZSkgdGhpcy5nbC5yZW5kZXJlci5zZXRDdWxsRmFjZSh0aGlzLmN1bGxGYWNlKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXRGcm9udEZhY2UodGhpcy5mcm9udEZhY2UpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldERlcHRoTWFzayh0aGlzLmRlcHRoV3JpdGUpO1xuICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldERlcHRoRnVuYyh0aGlzLmRlcHRoRnVuYyk7XG4gICAgICAgIGlmICh0aGlzLmJsZW5kRnVuYy5zcmMpXG4gICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLnNldEJsZW5kRnVuYyh0aGlzLmJsZW5kRnVuYy5zcmMsIHRoaXMuYmxlbmRGdW5jLmRzdCwgdGhpcy5ibGVuZEZ1bmMuc3JjQWxwaGEsIHRoaXMuYmxlbmRGdW5jLmRzdEFscGhhKTtcbiAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zZXRCbGVuZEVxdWF0aW9uKHRoaXMuYmxlbmRFcXVhdGlvbi5tb2RlUkdCLCB0aGlzLmJsZW5kRXF1YXRpb24ubW9kZUFscGhhKTtcbiAgICB9XG5cbiAgICB1c2UoeyBmbGlwRmFjZXMgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgbGV0IHRleHR1cmVVbml0ID0gLTE7XG4gICAgICAgIGNvbnN0IHByb2dyYW1BY3RpdmUgPSB0aGlzLmdsLnJlbmRlcmVyLnN0YXRlLmN1cnJlbnRQcm9ncmFtID09PSB0aGlzLmlkO1xuXG4gICAgICAgIC8vIEF2b2lkIGdsIGNhbGwgaWYgcHJvZ3JhbSBhbHJlYWR5IGluIHVzZVxuICAgICAgICBpZiAoIXByb2dyYW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5zdGF0ZS5jdXJyZW50UHJvZ3JhbSA9IHRoaXMuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgb25seSB0aGUgYWN0aXZlIHVuaWZvcm1zIGZvdW5kIGluIHRoZSBzaGFkZXJcbiAgICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uLCBhY3RpdmVVbmlmb3JtKSA9PiB7XG4gICAgICAgICAgICBsZXQgdW5pZm9ybSA9IHRoaXMudW5pZm9ybXNbYWN0aXZlVW5pZm9ybS51bmlmb3JtTmFtZV07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGFjdGl2ZVVuaWZvcm0ubmFtZUNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVuaWZvcm0pIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB1bmlmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gPSB1bmlmb3JtW2NvbXBvbmVudF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHVuaWZvcm0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF1bmlmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhcm4oYEFjdGl2ZSB1bmlmb3JtICR7YWN0aXZlVW5pZm9ybS5uYW1lfSBoYXMgbm90IGJlZW4gc3VwcGxpZWRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVuaWZvcm0gJiYgdW5pZm9ybS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhcm4oYCR7YWN0aXZlVW5pZm9ybS5uYW1lfSB1bmlmb3JtIGlzIG1pc3NpbmcgYSB2YWx1ZSBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVuaWZvcm0udmFsdWUudGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHRleHR1cmVVbml0ID0gdGV4dHVyZVVuaXQgKyAxO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGV4dHVyZSBuZWVkcyB0byBiZSB1cGRhdGVkXG4gICAgICAgICAgICAgICAgdW5pZm9ybS52YWx1ZS51cGRhdGUodGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRVbmlmb3JtKHRoaXMuZ2wsIGFjdGl2ZVVuaWZvcm0udHlwZSwgbG9jYXRpb24sIHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIHRleHR1cmUgYXJyYXlzLCBzZXQgdW5pZm9ybSBhcyBhbiBhcnJheSBvZiB0ZXh0dXJlIHVuaXRzIGluc3RlYWQgb2YganVzdCBvbmVcbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnZhbHVlLmxlbmd0aCAmJiB1bmlmb3JtLnZhbHVlWzBdLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlVW5pdHMgPSBbXTtcbiAgICAgICAgICAgICAgICB1bmlmb3JtLnZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVVbml0ID0gdGV4dHVyZVVuaXQgKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS51cGRhdGUodGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlVW5pdHMucHVzaCh0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VW5pZm9ybSh0aGlzLmdsLCBhY3RpdmVVbmlmb3JtLnR5cGUsIGxvY2F0aW9uLCB0ZXh0dXJlVW5pdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRVbmlmb3JtKHRoaXMuZ2wsIGFjdGl2ZVVuaWZvcm0udHlwZSwgbG9jYXRpb24sIHVuaWZvcm0udmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGx5U3RhdGUoKTtcbiAgICAgICAgaWYgKGZsaXBGYWNlcykgdGhpcy5nbC5yZW5kZXJlci5zZXRGcm9udEZhY2UodGhpcy5mcm9udEZhY2UgPT09IHRoaXMuZ2wuQ0NXID8gdGhpcy5nbC5DVyA6IHRoaXMuZ2wuQ0NXKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybShnbCwgdHlwZSwgbG9jYXRpb24sIHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGggPyBmbGF0dGVuKHZhbHVlKSA6IHZhbHVlO1xuICAgIGNvbnN0IHNldFZhbHVlID0gZ2wucmVuZGVyZXIuc3RhdGUudW5pZm9ybUxvY2F0aW9ucy5nZXQobG9jYXRpb24pO1xuXG4gICAgLy8gQXZvaWQgcmVkdW5kYW50IHVuaWZvcm0gY29tbWFuZHNcbiAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzZXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHNldFZhbHVlLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjbG9uZSBhcnJheSB0byBzdG9yZSBhcyBjYWNoZVxuICAgICAgICAgICAgZ2wucmVuZGVyZXIuc3RhdGUudW5pZm9ybUxvY2F0aW9ucy5zZXQobG9jYXRpb24sIHZhbHVlLnNsaWNlKDApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcnJheXNFcXVhbChzZXRWYWx1ZSwgdmFsdWUpKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYWNoZWQgYXJyYXkgdmFsdWVzXG4gICAgICAgICAgICBzZXRWYWx1ZS5zZXQgPyBzZXRWYWx1ZS5zZXQodmFsdWUpIDogc2V0QXJyYXkoc2V0VmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KGxvY2F0aW9uLCBzZXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2V0VmFsdWUgPT09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIGdsLnJlbmRlcmVyLnN0YXRlLnVuaWZvcm1Mb2NhdGlvbnMuc2V0KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgNTEyNjpcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPyBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2YWx1ZSkgOiBnbC51bmlmb3JtMWYobG9jYXRpb24sIHZhbHVlKTsgLy8gRkxPQVRcbiAgICAgICAgY2FzZSAzNTY2NDpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUX1ZFQzJcbiAgICAgICAgY2FzZSAzNTY2NTpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUX1ZFQzNcbiAgICAgICAgY2FzZSAzNTY2NjpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIEZMT0FUX1ZFQzRcbiAgICAgICAgY2FzZSAzNTY3MDogLy8gQk9PTFxuICAgICAgICBjYXNlIDUxMjQ6IC8vIElOVFxuICAgICAgICBjYXNlIDM1Njc4OiAvLyBTQU1QTEVSXzJEXG4gICAgICAgIGNhc2UgMzU2ODA6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID8gZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdmFsdWUpIDogZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7IC8vIFNBTVBMRVJfQ1VCRVxuICAgICAgICBjYXNlIDM1NjcxOiAvLyBCT09MX1ZFQzJcbiAgICAgICAgY2FzZSAzNTY2NzpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2YWx1ZSk7IC8vIElOVF9WRUMyXG4gICAgICAgIGNhc2UgMzU2NzI6IC8vIEJPT0xfVkVDM1xuICAgICAgICBjYXNlIDM1NjY4OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm0zaXYobG9jYXRpb24sIHZhbHVlKTsgLy8gSU5UX1ZFQzNcbiAgICAgICAgY2FzZSAzNTY3MzogLy8gQk9PTF9WRUM0XG4gICAgICAgIGNhc2UgMzU2Njk6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdmFsdWUpOyAvLyBJTlRfVkVDNFxuICAgICAgICBjYXNlIDM1Njc0OlxuICAgICAgICAgICAgcmV0dXJuIGdsLnVuaWZvcm1NYXRyaXgyZnYobG9jYXRpb24sIGZhbHNlLCB2YWx1ZSk7IC8vIEZMT0FUX01BVDJcbiAgICAgICAgY2FzZSAzNTY3NTpcbiAgICAgICAgICAgIHJldHVybiBnbC51bmlmb3JtTWF0cml4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUpOyAvLyBGTE9BVF9NQVQzXG4gICAgICAgIGNhc2UgMzU2NzY6XG4gICAgICAgICAgICByZXR1cm4gZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlKTsgLy8gRkxPQVRfTUFUNFxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkTGluZU51bWJlcnMoc3RyaW5nKSB7XG4gICAgbGV0IGxpbmVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpbmVzW2ldID0gaSArIDEgKyAnOiAnICsgbGluZXNbaV07XG4gICAgfVxuICAgIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhKSB7XG4gICAgY29uc3QgYXJyYXlMZW4gPSBhLmxlbmd0aDtcbiAgICBjb25zdCB2YWx1ZUxlbiA9IGFbMF0ubGVuZ3RoO1xuICAgIGlmICh2YWx1ZUxlbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gYTtcbiAgICBjb25zdCBsZW5ndGggPSBhcnJheUxlbiAqIHZhbHVlTGVuO1xuICAgIGxldCB2YWx1ZSA9IGFycmF5Q2FjaGVGMzJbbGVuZ3RoXTtcbiAgICBpZiAoIXZhbHVlKSBhcnJheUNhY2hlRjMyW2xlbmd0aF0gPSB2YWx1ZSA9IG5ldyBGbG9hdDMyQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGVuOyBpKyspIHZhbHVlLnNldChhW2ldLCBpICogdmFsdWVMZW4pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYXJyYXlzRXF1YWwoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXRBcnJheShhLCBiKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBhW2ldID0gYltpXTtcbiAgICB9XG59XG5cbmxldCB3YXJuQ291bnQgPSAwO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gICAgaWYgKHdhcm5Db3VudCA+IDEwMCkgcmV0dXJuO1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB3YXJuQ291bnQrKztcbiAgICBpZiAod2FybkNvdW50ID4gMTAwKSBjb25zb2xlLndhcm4oJ01vcmUgdGhhbiAxMDAgcHJvZ3JhbSB3YXJuaW5ncyAtIHN0b3BwaW5nIGxvZ3MuJyk7XG59XG4iLCIvLyBUT0RPOiBkZWxldGUgdGV4dHVyZVxuLy8gVE9ETzogdXNlIHRleFN1YkltYWdlMkQgZm9yIHVwZGF0ZXMgKHZpZGVvIG9yIHdoZW4gbG9hZGVkKVxuLy8gVE9ETzogbmVlZD8gZW5jb2RpbmcgPSBsaW5lYXJFbmNvZGluZ1xuLy8gVE9ETzogc3VwcG9ydCBub24tY29tcHJlc3NlZCBtaXBtYXBzIHVwbG9hZHNcblxuY29uc3QgZW1wdHlQaXhlbCA9IG5ldyBVaW50OEFycmF5KDQpO1xuXG5mdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PT0gMDtcbn1cblxubGV0IElEID0gMTtcblxuZXhwb3J0IGNsYXNzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBnbCxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICB0YXJnZXQgPSBnbC5URVhUVVJFXzJELFxuICAgICAgICAgICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgICAgICBmb3JtYXQgPSBnbC5SR0JBLFxuICAgICAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBmb3JtYXQsXG4gICAgICAgICAgICB3cmFwUyA9IGdsLkNMQU1QX1RPX0VER0UsXG4gICAgICAgICAgICB3cmFwVCA9IGdsLkNMQU1QX1RPX0VER0UsXG4gICAgICAgICAgICBnZW5lcmF0ZU1pcG1hcHMgPSB0cnVlLFxuICAgICAgICAgICAgbWluRmlsdGVyID0gZ2VuZXJhdGVNaXBtYXBzID8gZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSIDogZ2wuTElORUFSLFxuICAgICAgICAgICAgbWFnRmlsdGVyID0gZ2wuTElORUFSLFxuICAgICAgICAgICAgcHJlbXVsdGlwbHlBbHBoYSA9IGZhbHNlLFxuICAgICAgICAgICAgdW5wYWNrQWxpZ25tZW50ID0gNCxcbiAgICAgICAgICAgIGZsaXBZID0gdGFyZ2V0ID09IGdsLlRFWFRVUkVfMkQgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICBhbmlzb3Ryb3B5ID0gMCxcbiAgICAgICAgICAgIGxldmVsID0gMCxcbiAgICAgICAgICAgIHdpZHRoLCAvLyB1c2VkIGZvciBSZW5kZXJUYXJnZXRzIG9yIERhdGEgVGV4dHVyZXNcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoLFxuICAgICAgICB9ID0ge31cbiAgICApIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmlkID0gSUQrKztcblxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCA9IGludGVybmFsRm9ybWF0O1xuICAgICAgICB0aGlzLm1pbkZpbHRlciA9IG1pbkZpbHRlcjtcbiAgICAgICAgdGhpcy5tYWdGaWx0ZXIgPSBtYWdGaWx0ZXI7XG4gICAgICAgIHRoaXMud3JhcFMgPSB3cmFwUztcbiAgICAgICAgdGhpcy53cmFwVCA9IHdyYXBUO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTWlwbWFwcyA9IGdlbmVyYXRlTWlwbWFwcztcbiAgICAgICAgdGhpcy5wcmVtdWx0aXBseUFscGhhID0gcHJlbXVsdGlwbHlBbHBoYTtcbiAgICAgICAgdGhpcy51bnBhY2tBbGlnbm1lbnQgPSB1bnBhY2tBbGlnbm1lbnQ7XG4gICAgICAgIHRoaXMuZmxpcFkgPSBmbGlwWTtcbiAgICAgICAgdGhpcy5hbmlzb3Ryb3B5ID0gTWF0aC5taW4oYW5pc290cm9weSwgdGhpcy5nbC5yZW5kZXJlci5wYXJhbWV0ZXJzLm1heEFuaXNvdHJvcHkpO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuXG4gICAgICAgIHRoaXMuc3RvcmUgPSB7XG4gICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBbGlhcyBmb3Igc3RhdGUgc3RvcmUgdG8gYXZvaWQgcmVkdW5kYW50IGNhbGxzIGZvciBnbG9iYWwgc3RhdGVcbiAgICAgICAgdGhpcy5nbFN0YXRlID0gdGhpcy5nbC5yZW5kZXJlci5zdGF0ZTtcblxuICAgICAgICAvLyBTdGF0ZSBzdG9yZSB0byBhdm9pZCByZWR1bmRhbnQgY2FsbHMgZm9yIHBlci10ZXh0dXJlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5taW5GaWx0ZXIgPSB0aGlzLmdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYWdGaWx0ZXIgPSB0aGlzLmdsLkxJTkVBUjtcbiAgICAgICAgdGhpcy5zdGF0ZS53cmFwUyA9IHRoaXMuZ2wuUkVQRUFUO1xuICAgICAgICB0aGlzLnN0YXRlLndyYXBUID0gdGhpcy5nbC5SRVBFQVQ7XG4gICAgICAgIHRoaXMuc3RhdGUuYW5pc290cm9weSA9IDA7XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgLy8gQWxyZWFkeSBib3VuZCB0byBhY3RpdmUgdGV4dHVyZSB1bml0XG4gICAgICAgIGlmICh0aGlzLmdsU3RhdGUudGV4dHVyZVVuaXRzW3RoaXMuZ2xTdGF0ZS5hY3RpdmVUZXh0dXJlVW5pdF0gPT09IHRoaXMuaWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLnRhcmdldCwgdGhpcy50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5nbFN0YXRlLnRleHR1cmVVbml0c1t0aGlzLmdsU3RhdGUuYWN0aXZlVGV4dHVyZVVuaXRdID0gdGhpcy5pZDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGV4dHVyZVVuaXQgPSAwKSB7XG4gICAgICAgIGNvbnN0IG5lZWRzVXBkYXRlID0gISh0aGlzLmltYWdlID09PSB0aGlzLnN0b3JlLmltYWdlICYmICF0aGlzLm5lZWRzVXBkYXRlKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0ZXh0dXJlIGlzIGJvdW5kIHRvIGl0cyB0ZXh0dXJlIHVuaXRcbiAgICAgICAgaWYgKG5lZWRzVXBkYXRlIHx8IHRoaXMuZ2xTdGF0ZS50ZXh0dXJlVW5pdHNbdGV4dHVyZVVuaXRdICE9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAvLyBzZXQgYWN0aXZlIHRleHR1cmUgdW5pdCB0byBwZXJmb3JtIHRleHR1cmUgZnVuY3Rpb25zXG4gICAgICAgICAgICB0aGlzLmdsLnJlbmRlcmVyLmFjdGl2ZVRleHR1cmUodGV4dHVyZVVuaXQpO1xuICAgICAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5lZWRzVXBkYXRlKSByZXR1cm47XG4gICAgICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5mbGlwWSAhPT0gdGhpcy5nbFN0YXRlLmZsaXBZKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdGhpcy5mbGlwWSk7XG4gICAgICAgICAgICB0aGlzLmdsU3RhdGUuZmxpcFkgPSB0aGlzLmZsaXBZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJlbXVsdGlwbHlBbHBoYSAhPT0gdGhpcy5nbFN0YXRlLnByZW11bHRpcGx5QWxwaGEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wucGl4ZWxTdG9yZWkodGhpcy5nbC5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wsIHRoaXMucHJlbXVsdGlwbHlBbHBoYSk7XG4gICAgICAgICAgICB0aGlzLmdsU3RhdGUucHJlbXVsdGlwbHlBbHBoYSA9IHRoaXMucHJlbXVsdGlwbHlBbHBoYTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVucGFja0FsaWdubWVudCAhPT0gdGhpcy5nbFN0YXRlLnVucGFja0FsaWdubWVudCkge1xuICAgICAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19BTElHTk1FTlQsIHRoaXMudW5wYWNrQWxpZ25tZW50KTtcbiAgICAgICAgICAgIHRoaXMuZ2xTdGF0ZS51bnBhY2tBbGlnbm1lbnQgPSB0aGlzLnVucGFja0FsaWdubWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1pbkZpbHRlciAhPT0gdGhpcy5zdGF0ZS5taW5GaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX01JTl9GSUxURVIsIHRoaXMubWluRmlsdGVyKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWluRmlsdGVyID0gdGhpcy5taW5GaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYWdGaWx0ZXIgIT09IHRoaXMuc3RhdGUubWFnRmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB0aGlzLm1hZ0ZpbHRlcik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hZ0ZpbHRlciA9IHRoaXMubWFnRmlsdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMud3JhcFMgIT09IHRoaXMuc3RhdGUud3JhcFMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy53cmFwUyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndyYXBTID0gdGhpcy53cmFwUztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLndyYXBUICE9PSB0aGlzLnN0YXRlLndyYXBUKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMud3JhcFQpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS53cmFwVCA9IHRoaXMud3JhcFQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmlzb3Ryb3B5ICYmIHRoaXMuYW5pc290cm9weSAhPT0gdGhpcy5zdGF0ZS5hbmlzb3Ryb3B5KSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmYoXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5yZW5kZXJlci5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpLlRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULFxuICAgICAgICAgICAgICAgIHRoaXMuYW5pc290cm9weVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYW5pc290cm9weSA9IHRoaXMuYW5pc290cm9weTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGN1YmUgbWFwc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlW2ldXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpcy5pbWFnZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBEYXRhIHRleHR1cmVcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy50YXJnZXQsIHRoaXMubGV2ZWwsIHRoaXMuaW50ZXJuYWxGb3JtYXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCB0aGlzLmltYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZS5pc0NvbXByZXNzZWRUZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29tcHJlc3NlZCB0ZXh0dXJlXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGV2ZWwgPSAwOyBsZXZlbCA8IHRoaXMuaW1hZ2UubGVuZ3RoOyBsZXZlbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuY29tcHJlc3NlZFRleEltYWdlMkQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VbbGV2ZWxdLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVtsZXZlbF0uaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VbbGV2ZWxdLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlZ3VsYXIgdGV4dHVyZVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLnRhcmdldCwgdGhpcy5sZXZlbCwgdGhpcy5pbnRlcm5hbEZvcm1hdCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgdGhpcy5pbWFnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdlbmVyYXRlTWlwbWFwcykge1xuICAgICAgICAgICAgICAgIC8vIEZvciBXZWJHTDEsIGlmIG5vdCBhIHBvd2VyIG9mIDIsIHR1cm4gb2ZmIG1pcHMsIHNldCB3cmFwcGluZyB0byBjbGFtcCB0byBlZGdlIGFuZCBtaW5GaWx0ZXIgdG8gbGluZWFyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdsLnJlbmRlcmVyLmlzV2ViZ2wyICYmICghaXNQb3dlck9mMih0aGlzLmltYWdlLndpZHRoKSB8fCAhaXNQb3dlck9mMih0aGlzLmltYWdlLmhlaWdodCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcFMgPSB0aGlzLndyYXBUID0gdGhpcy5nbC5DTEFNUF9UT19FREdFO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbkZpbHRlciA9IHRoaXMuZ2wuTElORUFSO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuZ2VuZXJhdGVNaXBtYXAodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gZGF0YSBpcyBwdXNoZWQgdG8gR1BVXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlICYmIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gdGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBsb2FkIGVtcHR5IHBpeGVsIGZvciBlYWNoIHNpZGUgd2hpbGUgbm8gaW1hZ2UgdG8gYXZvaWQgZXJyb3JzIHdoaWxlIGltYWdlIG9yIHZpZGVvIGxvYWRpbmdcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCArIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5SR0JBLFxuICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5SR0JBLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlQaXhlbFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIGltYWdlIGludGVudGlvbmFsbHkgbGVmdCBudWxsIGZvciBSZW5kZXJUYXJnZXRcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy50YXJnZXQsIHRoaXMubGV2ZWwsIHRoaXMuaW50ZXJuYWxGb3JtYXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVXBsb2FkIGVtcHR5IHBpeGVsIGlmIG5vIGltYWdlIHRvIGF2b2lkIGVycm9ycyB3aGlsZSBpbWFnZSBvciB2aWRlbyBsb2FkaW5nXG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMudGFyZ2V0LCAwLCB0aGlzLmdsLlJHQkEsIDEsIDEsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBlbXB0eVBpeGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlLmltYWdlID0gdGhpcy5pbWFnZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBNYXQzRnVuYyBmcm9tICcuL2Z1bmN0aW9ucy9NYXQzRnVuYy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBNYXQzIGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKG0wMCA9IDEsIG0wMSA9IDAsIG0wMiA9IDAsIG0xMCA9IDAsIG0xMSA9IDEsIG0xMiA9IDAsIG0yMCA9IDAsIG0yMSA9IDAsIG0yMiA9IDEpIHtcbiAgICAgICAgc3VwZXIobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldChtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gICAgICAgIGlmIChtMDAubGVuZ3RoKSByZXR1cm4gdGhpcy5jb3B5KG0wMCk7XG4gICAgICAgIE1hdDNGdW5jLnNldCh0aGlzLCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDNGdW5jLnRyYW5zbGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcm90YXRlKHYsIG0gPSB0aGlzKSB7XG4gICAgICAgIE1hdDNGdW5jLnJvdGF0ZSh0aGlzLCBtLCB2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2NhbGUodiwgbSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMuc2NhbGUodGhpcywgbSwgdik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KG1hLCBtYikge1xuICAgICAgICBpZiAobWIpIHtcbiAgICAgICAgICAgIE1hdDNGdW5jLm11bHRpcGx5KHRoaXMsIG1hLCBtYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNYXQzRnVuYy5tdWx0aXBseSh0aGlzLCB0aGlzLCBtYSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIE1hdDNGdW5jLmlkZW50aXR5KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KG0pIHtcbiAgICAgICAgTWF0M0Z1bmMuY29weSh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbU1hdHJpeDQobSkge1xuICAgICAgICBNYXQzRnVuYy5mcm9tTWF0NCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbVF1YXRlcm5pb24ocSkge1xuICAgICAgICBNYXQzRnVuYy5mcm9tUXVhdCh0aGlzLCBxKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnJvbUJhc2lzKHZlYzNhLCB2ZWMzYiwgdmVjM2MpIHtcbiAgICAgICAgdGhpcy5zZXQodmVjM2FbMF0sIHZlYzNhWzFdLCB2ZWMzYVsyXSwgdmVjM2JbMF0sIHZlYzNiWzFdLCB2ZWMzYlsyXSwgdmVjM2NbMF0sIHZlYzNjWzFdLCB2ZWMzY1syXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UobSA9IHRoaXMpIHtcbiAgICAgICAgTWF0M0Z1bmMuaW52ZXJ0KHRoaXMsIG0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXROb3JtYWxNYXRyaXgobSkge1xuICAgICAgICBNYXQzRnVuYy5ub3JtYWxGcm9tTWF0NCh0aGlzLCBtKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAxO1xuXG4vKipcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyAzeDMgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbNF07XG4gICAgb3V0WzRdID0gYVs1XTtcbiAgICBvdXRbNV0gPSBhWzZdO1xuICAgIG91dFs2XSA9IGFbOF07XG4gICAgb3V0WzddID0gYVs5XTtcbiAgICBvdXRbOF0gPSBhWzEwXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICBsZXQgeCA9IHFbMF0sXG4gICAgICAgIHkgPSBxWzFdLFxuICAgICAgICB6ID0gcVsyXSxcbiAgICAgICAgdyA9IHFbM107XG4gICAgbGV0IHgyID0geCArIHg7XG4gICAgbGV0IHkyID0geSArIHk7XG4gICAgbGV0IHoyID0geiArIHo7XG5cbiAgICBsZXQgeHggPSB4ICogeDI7XG4gICAgbGV0IHl4ID0geSAqIHgyO1xuICAgIGxldCB5eSA9IHkgKiB5MjtcbiAgICBsZXQgenggPSB6ICogeDI7XG4gICAgbGV0IHp5ID0geiAqIHkyO1xuICAgIGxldCB6eiA9IHogKiB6MjtcbiAgICBsZXQgd3ggPSB3ICogeDI7XG4gICAgbGV0IHd5ID0gdyAqIHkyO1xuICAgIGxldCB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFszXSA9IHl4IC0gd3o7XG4gICAgb3V0WzZdID0genggKyB3eTtcblxuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzddID0genkgLSB3eDtcblxuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzVdID0genkgKyB3eDtcbiAgICBvdXRbOF0gPSAxIC0geHggLSB5eTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIG91dFswXSA9IG0wMDtcbiAgICBvdXRbMV0gPSBtMDE7XG4gICAgb3V0WzJdID0gbTAyO1xuICAgIG91dFszXSA9IG0xMDtcbiAgICBvdXRbNF0gPSBtMTE7XG4gICAgb3V0WzVdID0gbTEyO1xuICAgIG91dFs2XSA9IG0yMDtcbiAgICBvdXRbN10gPSBtMjE7XG4gICAgb3V0WzhdID0gbTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMTtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIGxldCBhMDEgPSBhWzFdLFxuICAgICAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgICAgIGExMiA9IGFbNV07XG4gICAgICAgIG91dFsxXSA9IGFbM107XG4gICAgICAgIG91dFsyXSA9IGFbNl07XG4gICAgICAgIG91dFszXSA9IGEwMTtcbiAgICAgICAgb3V0WzVdID0gYVs3XTtcbiAgICAgICAgb3V0WzZdID0gYTAyO1xuICAgICAgICBvdXRbN10gPSBhMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVszXTtcbiAgICAgICAgb3V0WzJdID0gYVs2XTtcbiAgICAgICAgb3V0WzNdID0gYVsxXTtcbiAgICAgICAgb3V0WzRdID0gYVs0XTtcbiAgICAgICAgb3V0WzVdID0gYVs3XTtcbiAgICAgICAgb3V0WzZdID0gYVsyXTtcbiAgICAgICAgb3V0WzddID0gYVs1XTtcbiAgICAgICAgb3V0WzhdID0gYVs4XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgbGV0IGIwMSA9IGEyMiAqIGExMSAtIGExMiAqIGEyMTtcbiAgICBsZXQgYjExID0gLWEyMiAqIGExMCArIGExMiAqIGEyMDtcbiAgICBsZXQgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIGxldCBkZXQgPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjE7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gYjAxICogZGV0O1xuICAgIG91dFsxXSA9ICgtYTIyICogYTAxICsgYTAyICogYTIxKSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTEyICogYTAxIC0gYTAyICogYTExKSAqIGRldDtcbiAgICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGEyMiAqIGEwMCAtIGEwMiAqIGEyMCkgKiBkZXQ7XG4gICAgb3V0WzVdID0gKC1hMTIgKiBhMDAgKyBhMDIgKiBhMTApICogZGV0O1xuICAgIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgICBvdXRbN10gPSAoLWEyMSAqIGEwMCArIGEwMSAqIGEyMCkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMSAqIGEwMCAtIGEwMSAqIGExMCkgKiBkZXQ7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICBsZXQgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXTtcbiAgICBsZXQgYTEwID0gYVszXSxcbiAgICAgICAgYTExID0gYVs0XSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBsZXQgYTIwID0gYVs2XSxcbiAgICAgICAgYTIxID0gYVs3XSxcbiAgICAgICAgYTIyID0gYVs4XTtcblxuICAgIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKSArIGEwMSAqICgtYTIyICogYTEwICsgYTEyICogYTIwKSArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdO1xuICAgIGxldCBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIGxldCBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdO1xuXG4gICAgbGV0IGIwMCA9IGJbMF0sXG4gICAgICAgIGIwMSA9IGJbMV0sXG4gICAgICAgIGIwMiA9IGJbMl07XG4gICAgbGV0IGIxMCA9IGJbM10sXG4gICAgICAgIGIxMSA9IGJbNF0sXG4gICAgICAgIGIxMiA9IGJbNV07XG4gICAgbGV0IGIyMCA9IGJbNl0sXG4gICAgICAgIGIyMSA9IGJbN10sXG4gICAgICAgIGIyMiA9IGJbOF07XG5cbiAgICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gICAgb3V0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xuICAgIG91dFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMjtcblxuICAgIG91dFszXSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcbiAgICBvdXRbNF0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjE7XG4gICAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuXG4gICAgb3V0WzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwO1xuICAgIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgICBvdXRbOF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLFxuICAgICAgICBhMTEgPSBhWzRdLFxuICAgICAgICBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLFxuICAgICAgICBhMjEgPSBhWzddLFxuICAgICAgICBhMjIgPSBhWzhdLFxuICAgICAgICB4ID0gdlswXSxcbiAgICAgICAgeSA9IHZbMV07XG5cbiAgICBvdXRbMF0gPSBhMDA7XG4gICAgb3V0WzFdID0gYTAxO1xuICAgIG91dFsyXSA9IGEwMjtcblxuICAgIG91dFszXSA9IGExMDtcbiAgICBvdXRbNF0gPSBhMTE7XG4gICAgb3V0WzVdID0gYTEyO1xuXG4gICAgb3V0WzZdID0geCAqIGEwMCArIHkgKiBhMTAgKyBhMjA7XG4gICAgb3V0WzddID0geCAqIGEwMSArIHkgKiBhMTEgKyBhMjE7XG4gICAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MyBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gICAgbGV0IGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sXG4gICAgICAgIGExMSA9IGFbNF0sXG4gICAgICAgIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sXG4gICAgICAgIGEyMSA9IGFbN10sXG4gICAgICAgIGEyMiA9IGFbOF0sXG4gICAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICAgIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICAgIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuXG4gICAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gICAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gICAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG5cbiAgICBvdXRbNl0gPSBhMjA7XG4gICAgb3V0WzddID0gYTIxO1xuICAgIG91dFs4XSA9IGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgbGV0IHggPSB2WzBdLFxuICAgICAgICB5ID0gdlsxXTtcblxuICAgIG91dFswXSA9IHggKiBhWzBdO1xuICAgIG91dFsxXSA9IHggKiBhWzFdO1xuICAgIG91dFsyXSA9IHggKiBhWzJdO1xuXG4gICAgb3V0WzNdID0geSAqIGFbM107XG4gICAgb3V0WzRdID0geSAqIGFbNF07XG4gICAgb3V0WzVdID0geSAqIGFbNV07XG5cbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICAgIGxldCBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIGxldCBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG4gICAgbGV0IGEzMCA9IGFbMTJdLFxuICAgICAgICBhMzEgPSBhWzEzXSxcbiAgICAgICAgYTMyID0gYVsxNF0sXG4gICAgICAgIGEzMyA9IGFbMTVdO1xuXG4gICAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICAgIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gICAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICAgIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gICAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICAgIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gICAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICAgIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcblxuICAgIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFs0XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuXG4gICAgb3V0WzZdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGdsIGNvbnRleHRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IC0yIC8gaGVpZ2h0O1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gLTE7XG4gICAgb3V0WzddID0gMTtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgb3V0WzRdID0gYVs0XSAqIGI7XG4gICAgb3V0WzVdID0gYVs1XSAqIGI7XG4gICAgb3V0WzZdID0gYVs2XSAqIGI7XG4gICAgb3V0WzddID0gYVs3XSAqIGI7XG4gICAgb3V0WzhdID0gYVs4XSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0NTM4NGJmZWRlMjI1ZDljNDZkXCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwibWFwIiwiY29uc3RydWN0b3IiLCJtZWRpYXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHYWxsZXJ5IiwiZWxlbWVudCIsImluZGV4IiwiTWVzaCIsIlByb2dyYW0iLCJUcmFuc2Zvcm0iLCJUZXh0dXJlIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJnZW9tZXRyeSIsImdsIiwiY3JlYXRlVGV4dHVyZSIsInRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwiY3JlYXRlTWVzaCIsIm1lc2giLCJNYXQzIiwiTWF0NCIsIklEIiwibW9kZSIsIlRSSUFOR0xFUyIsImZydXN0dW1DdWxsZWQiLCJyZW5kZXJPcmRlciIsImNhbnZhcyIsImNvbnNvbGUiLCJlcnJvciIsImlkIiwibW9kZWxWaWV3TWF0cml4Iiwibm9ybWFsTWF0cml4IiwiYmVmb3JlUmVuZGVyQ2FsbGJhY2tzIiwiYWZ0ZXJSZW5kZXJDYWxsYmFja3MiLCJvbkJlZm9yZVJlbmRlciIsImYiLCJwdXNoIiwib25BZnRlclJlbmRlciIsImRyYXciLCJjYW1lcmEiLCJtb2RlbE1hdHJpeCIsIk9iamVjdCIsImFzc2lnbiIsInZhbHVlIiwidmlld01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjYW1lcmFQb3NpdGlvbiIsIndvcmxkUG9zaXRpb24iLCJtdWx0aXBseSIsIndvcmxkTWF0cml4IiwiZ2V0Tm9ybWFsTWF0cml4IiwiZm9yRWFjaCIsImZsaXBGYWNlcyIsImN1bGxGYWNlIiwiZGV0ZXJtaW5hbnQiLCJ1c2UiLCJhcnJheUNhY2hlRjMyIiwidHJhbnNwYXJlbnQiLCJCQUNLIiwiZnJvbnRGYWNlIiwiQ0NXIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsImRlcHRoRnVuYyIsIkxFU1MiLCJ3YXJuIiwiYmxlbmRGdW5jIiwiYmxlbmRFcXVhdGlvbiIsInNyYyIsInJlbmRlcmVyIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0QmxlbmRGdW5jIiwiT05FIiwiT05FX01JTlVTX1NSQ19BTFBIQSIsIlNSQ19BTFBIQSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVySW5mb0xvZyIsImFkZExpbmVOdW1iZXJzIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImdldFByb2dyYW1JbmZvTG9nIiwiZGVsZXRlU2hhZGVyIiwidW5pZm9ybUxvY2F0aW9ucyIsIk1hcCIsIm51bVVuaWZvcm1zIiwiQUNUSVZFX1VOSUZPUk1TIiwidUluZGV4IiwidW5pZm9ybSIsImdldEFjdGl2ZVVuaWZvcm0iLCJzZXQiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJuYW1lIiwic3BsaXQiLCJtYXRjaCIsInVuaWZvcm1OYW1lIiwibmFtZUNvbXBvbmVudHMiLCJzbGljZSIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImxvY2F0aW9ucyIsIm51bUF0dHJpYnMiLCJBQ1RJVkVfQVRUUklCVVRFUyIsImFJbmRleCIsImF0dHJpYnV0ZSIsImdldEFjdGl2ZUF0dHJpYiIsImxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJhdHRyaWJ1dGVPcmRlciIsImpvaW4iLCJkc3QiLCJzcmNBbHBoYSIsImRzdEFscGhhIiwic2V0QmxlbmRFcXVhdGlvbiIsIm1vZGVSR0IiLCJtb2RlQWxwaGEiLCJhcHBseVN0YXRlIiwiZW5hYmxlIiwiREVQVEhfVEVTVCIsImRpc2FibGUiLCJDVUxMX0ZBQ0UiLCJCTEVORCIsInNldEN1bGxGYWNlIiwic2V0RnJvbnRGYWNlIiwic2V0RGVwdGhNYXNrIiwic2V0RGVwdGhGdW5jIiwidGV4dHVyZVVuaXQiLCJwcm9ncmFtQWN0aXZlIiwic3RhdGUiLCJjdXJyZW50UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJhY3RpdmVVbmlmb3JtIiwiY29tcG9uZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwidXBkYXRlIiwic2V0VW5pZm9ybSIsInR5cGUiLCJsZW5ndGgiLCJ0ZXh0dXJlVW5pdHMiLCJDVyIsInJlbW92ZSIsImRlbGV0ZVByb2dyYW0iLCJmbGF0dGVuIiwic2V0VmFsdWUiLCJnZXQiLCJhcnJheXNFcXVhbCIsInNldEFycmF5IiwidW5pZm9ybTFmdiIsInVuaWZvcm0xZiIsInVuaWZvcm0yZnYiLCJ1bmlmb3JtM2Z2IiwidW5pZm9ybTRmdiIsInVuaWZvcm0xaXYiLCJ1bmlmb3JtMWkiLCJ1bmlmb3JtMml2IiwidW5pZm9ybTNpdiIsInVuaWZvcm00aXYiLCJ1bmlmb3JtTWF0cml4MmZ2IiwidW5pZm9ybU1hdHJpeDNmdiIsInVuaWZvcm1NYXRyaXg0ZnYiLCJzdHJpbmciLCJsaW5lcyIsImkiLCJhIiwiYXJyYXlMZW4iLCJ2YWx1ZUxlbiIsIkZsb2F0MzJBcnJheSIsImIiLCJsIiwid2FybkNvdW50IiwibWVzc2FnZSIsImVtcHR5UGl4ZWwiLCJVaW50OEFycmF5IiwiaXNQb3dlck9mMiIsImltYWdlIiwidGFyZ2V0IiwiVEVYVFVSRV8yRCIsIlVOU0lHTkVEX0JZVEUiLCJmb3JtYXQiLCJSR0JBIiwiaW50ZXJuYWxGb3JtYXQiLCJ3cmFwUyIsIkNMQU1QX1RPX0VER0UiLCJ3cmFwVCIsImdlbmVyYXRlTWlwbWFwcyIsIm1pbkZpbHRlciIsIk5FQVJFU1RfTUlQTUFQX0xJTkVBUiIsIkxJTkVBUiIsIm1hZ0ZpbHRlciIsInByZW11bHRpcGx5QWxwaGEiLCJ1bnBhY2tBbGlnbm1lbnQiLCJmbGlwWSIsImFuaXNvdHJvcHkiLCJsZXZlbCIsIndpZHRoIiwiaGVpZ2h0IiwiTWF0aCIsIm1pbiIsInBhcmFtZXRlcnMiLCJtYXhBbmlzb3Ryb3B5Iiwic3RvcmUiLCJnbFN0YXRlIiwiUkVQRUFUIiwiYmluZCIsImFjdGl2ZVRleHR1cmVVbml0IiwiYmluZFRleHR1cmUiLCJuZWVkc1VwZGF0ZSIsImFjdGl2ZVRleHR1cmUiLCJwaXhlbFN0b3JlaSIsIlVOUEFDS19GTElQX1lfV0VCR0wiLCJVTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wiLCJVTlBBQ0tfQUxJR05NRU5UIiwidGV4UGFyYW1ldGVyaSIsIlRFWFRVUkVfTUlOX0ZJTFRFUiIsIlRFWFRVUkVfTUFHX0ZJTFRFUiIsIlRFWFRVUkVfV1JBUF9TIiwiVEVYVFVSRV9XUkFQX1QiLCJ0ZXhQYXJhbWV0ZXJmIiwiZ2V0RXh0ZW5zaW9uIiwiVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQiLCJURVhUVVJFX0NVQkVfTUFQIiwidGV4SW1hZ2UyRCIsIlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiaXNDb21wcmVzc2VkVGV4dHVyZSIsImNvbXByZXNzZWRUZXhJbWFnZTJEIiwiZGF0YSIsImlzV2ViZ2wyIiwiZ2VuZXJhdGVNaXBtYXAiLCJvblVwZGF0ZSIsIk1hdDNGdW5jIiwibTAwIiwibTAxIiwibTAyIiwibTEwIiwibTExIiwibTEyIiwibTIwIiwibTIxIiwibTIyIiwiY29weSIsInRyYW5zbGF0ZSIsInYiLCJtIiwicm90YXRlIiwic2NhbGUiLCJtYSIsIm1iIiwiaWRlbnRpdHkiLCJmcm9tTWF0cml4NCIsImZyb21NYXQ0IiwiZnJvbVF1YXRlcm5pb24iLCJxIiwiZnJvbVF1YXQiLCJmcm9tQmFzaXMiLCJ2ZWMzYSIsInZlYzNiIiwidmVjM2MiLCJpbnZlcnNlIiwiaW52ZXJ0Iiwibm9ybWFsRnJvbU1hdDQiLCJFUFNJTE9OIiwib3V0IiwieCIsInkiLCJ6IiwidyIsIngyIiwieTIiLCJ6MiIsInh4IiwieXgiLCJ5eSIsInp4IiwienkiLCJ6eiIsInd4Iiwid3kiLCJ3eiIsInRyYW5zcG9zZSIsImEwMSIsImEwMiIsImExMiIsImEwMCIsImExMCIsImExMSIsImEyMCIsImEyMSIsImEyMiIsImIwMSIsImIxMSIsImIyMSIsImRldCIsImIwMCIsImIwMiIsImIxMCIsImIxMiIsImIyMCIsImIyMiIsInJhZCIsInMiLCJzaW4iLCJjIiwiY29zIiwiYTAzIiwiYTEzIiwiYTIzIiwiYTMwIiwiYTMxIiwiYTMyIiwiYTMzIiwiYjAzIiwiYjA0IiwiYjA1IiwiYjA2IiwiYjA3IiwiYjA4IiwiYjA5IiwicHJvamVjdGlvbiIsImFkZCIsInN1YnRyYWN0IiwibXVsdGlwbHlTY2FsYXIiXSwic291cmNlUm9vdCI6IiJ9