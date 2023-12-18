/*! For license information please see main.3187e9cbd0495bb21d1a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var n=t("./node_modules/ogl/src/core/Renderer.js"),s=t("./node_modules/ogl/src/core/Camera.js"),a=t("./node_modules/ogl/src/core/Transform.js"),i=t("./node_modules/ogl/src/extras/Box.js"),o=t("./node_modules/ogl/src/core/Program.js"),c=t("./node_modules/ogl/src/core/Mesh.js"),d=t("./app/shaders/plane-fragment.glsl"),h=t("./app/shaders/plane-vertex.glsl");class l{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createCube()}createRenderer(){this.renderer=new n.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new s.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new a.Transform}createCube(){this.geometry=new i.Box(this.gl),this.program=new o.Program(this.gl,{vertex:h.default,fragment:d.default}),this.mesh=new c.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}},"./app/shaders/plane-fragment.glsl":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n="precision highp float;\n#define GLSLIFY 1\nuniform sampler2D tMap\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 texture = texture2D(tMap, vUv);\n    gl_FragColor = texture;\n}"},"./app/shaders/plane-vertex.glsl":(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n="#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"}},(function(e){e.h=()=>"299ce700f7a53c45e7cc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMTg3ZTljYmQwNDk1YmIyMWQxYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aWVBT2UsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUdMSCxLQUFLSSxZQUVQLENBRUFILGNBQUFBLEdBQ0VELEtBQUtLLFNBQVcsSUFBSUMsRUFBQUEsU0FFcEJOLEtBQUtPLEdBQUtQLEtBQUtLLFNBQVNFLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZVixLQUFLTyxHQUFHSSxPQUNwQyxDQUVBVCxZQUFBQSxHQUNFRixLQUFLWSxPQUFTLElBQUlDLEVBQUFBLE9BQU9iLEtBQUtPLElBQzlCUCxLQUFLWSxPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFaLFdBQUFBLEdBQ0VILEtBQUtnQixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBVUFiLFVBQUFBLEdBQ0VKLEtBQUtrQixTQUFXLElBQUlDLEVBQUFBLElBQUluQixLQUFLTyxJQUM3QlAsS0FBS29CLFFBQVUsSUFBSUMsRUFBQUEsUUFBUXJCLEtBQUtPLEdBQUksQ0FDbENlLE9BQU0sVUFDTkMsU0FBUUEsRUFBQUEsVUFHVnZCLEtBQUt3QixLQUFPLElBQUlDLEVBQUFBLEtBQUt6QixLQUFLTyxHQUFJLENBQzVCVyxTQUFTbEIsS0FBS2tCLFNBQ2RFLFFBQVFwQixLQUFLb0IsVUFHZnBCLEtBQUt3QixLQUFLRSxVQUFVMUIsS0FBS2dCLE1BRTNCLENBR0FXLFFBQUFBLEdBRUUzQixLQUFLSyxTQUFTdUIsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaEQvQixLQUFLWSxPQUFPb0IsWUFBWSxDQUFFQyxPQUFRSixPQUFPQyxXQUFhRCxPQUFPRSxhQWdCL0QsQ0FFQUcsTUFBQUEsR0FFRWxDLEtBQUt3QixLQUFLVyxTQUFTQyxHQUFLLElBQ3hCcEMsS0FBS3dCLEtBQUtXLFNBQVNFLEdBQUssSUFDeEJyQyxLQUFLSyxTQUFTaUMsT0FBTyxDQUNuQjFCLE9BQVFaLEtBQUtZLE9BQ2JJLE1BQU9oQixLQUFLZ0IsT0FFaEIsZ0ZDM0ZGLHFRQ0FBLCtSQ0FBdUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9zaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBNZXNoLCBCb3gsIFByb2dyYW0gfSBmcm9tICdvZ2wnO1xuXG4vLyBpbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICAvLyAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgdGhpcy5jcmVhdGVDdWJlKClcbiAgICAvLyDku4DkuYjku4DkuYjlv5jorrBkZWZpbmXkuobvvIzlsLHnnIvov5nph4zmnInmsqHmnInooqvliJ3lp4vljJZcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8vICAgY3JlYXRlSG9tZSgpIHtcbiAgLy8gICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgLy8gICAgICAgZ2w6IHRoaXMuZ2wsXG4gIC8vICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAvLyAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAvLyAgICAgfSk7XG5cbiAgLy8gICB9XG4gIGNyZWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICB2ZXJ0ZXgsXG4gICAgICBmcmFnbWVudFxuICAgIH0pXG4gICAgLy8g5bCGZ2zkvZzkuLrnrKzkuIDkuKrlhYPntKDkvKDnu5lNZXNoXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSwgXG4gICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAgIH0pXG4gICAgLy8g5bCG55uS5a2Q6K6+572u5Li655u45py655qE5a2Q5YWD57SgXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG4gIH1cblxuXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIOWwhua4suafk+eahOeUu+W4g+WwuuWvuOWhq+a7oeinhueql+WPo1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAvLyDliJvlu7rkuoZjYW1lcmHkuYvlkI7miY3og73liJvlu7rpgI/op4blm75cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG5cbiAgICAvLyAgICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApO1xuICAgIC8vICAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56O1xuICAgIC8vICAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdDtcblxuICAgIC8vICAgICB0aGlzLnNpemVzID0ge1xuICAgIC8vICAgICAgIGhlaWdodCxcbiAgICAvLyAgICAgICB3aWR0aCxcbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICAgICAgdGhpcy5ob21lLm9uUmVzaXplKHtcbiAgICAvLyAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIOWunuaXtua4suafk1xuICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdE1hcFxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTtcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyOTljZTcwMGY3YTUzYzQ1ZTdjY1wiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJnZW9tZXRyeSIsIkJveCIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==