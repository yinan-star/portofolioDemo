/*! For license information please see main.137f3c9a06feb389cd48.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-vertex.glsl":(n,i,e)=>{e.r(i),e.d(i,{default:()=>o});const o="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    newPosition.z -= sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0); \n\n    gl_Position = projectionMatrix * newPosition;\n}"}},(function(n){n.h=()=>"c512110eb2d4ca44d20f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMzdmM2M5YTA2ZmViMzg5Y2Q0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MEhBQUEsd2VDQUFBLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9ob21lLXZlcnRleC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbiNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudW5pZm9ybSB2ZWMyIHVWaWV3cG9ydFNpemVzO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZVdiA9IHV2O1xcblxcbiAgICB2ZWM0IG5ld1Bvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG5cXG4gICAgbmV3UG9zaXRpb24ueiAtPSBzaW4obmV3UG9zaXRpb24ueSAvIHVWaWV3cG9ydFNpemVzLnkgKiBQSSArIFBJIC8gMi4wKTsgXFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNTEyMTEwZWIyZDRjYTQ0ZDIwZlwiKSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=