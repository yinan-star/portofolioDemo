/*! For license information please see main.3bbd54febdcf8f9758d3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-vertex.glsl":(n,i,e)=>{e.r(i),e.d(i,{default:()=>o});const o="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    newPosition.z *= sin((newPosition.y / uViewportSizes.y) * (newPosition.y / uViewportSizes.y) * PI + PI / 2.0) * abs(uSpeed); \n\n    gl_Position = projectionMatrix * newPosition;\n}"}},(function(n){n.h=()=>"dd559df2cf0c909d6c0e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYmJkNTRmZWJkY2Y4Zjk3NThkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MEhBQUEsb2pCQ0FBQSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3NoYWRlcnMvaG9tZS12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gZmxvYXQgdVNwZWVkO1xcbnVuaWZvcm0gdmVjMiB1Vmlld3BvcnRTaXplcztcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuXFxuICAgIG5ld1Bvc2l0aW9uLnogKj0gc2luKChuZXdQb3NpdGlvbi55IC8gdVZpZXdwb3J0U2l6ZXMueSkgKiAobmV3UG9zaXRpb24ueSAvIHVWaWV3cG9ydFNpemVzLnkpICogUEkgKyBQSSAvIDIuMCkgKiBhYnModVNwZWVkKTsgXFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZDU1OWRmMmNmMGM5MDlkNmMwZVwiKSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=