/*! For license information please see main.8bcc1ac56048320bdfec.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-fragment.glsl":(e,n,a)=>{a.r(n),a.d(n,{default:()=>t});const t="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 texture = texture2D(tMap, vUv);\n\n    gl_FragColor = texture;\n    gl_FragColor.a = uAlpha;\n}"}},(function(e){e.h=()=>"bef049bee2860ea50412"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YmNjMWFjNTYwNDgzMjBiZGZlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NEhBQUEscVFDQUFBLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9ob21lLWZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gZmxvYXQgdUFscGhhO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRNYXA7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgdGV4dHVyZSA9IHRleHR1cmUyRCh0TWFwLCB2VXYpO1xcblxcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlO1xcbiAgICBnbF9GcmFnQ29sb3IuYSA9IHVBbHBoYTtcXG59XCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmVmMDQ5YmVlMjg2MGVhNTA0MTJcIikiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9