/*! For license information please see main.f1439166ddb612313a12.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),i=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");const m=class{constructor({element:e,geometry:t,gl:s,scene:r}){this.element=e,this.gl=s,this.geometry=t,this.scene=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),this.image=new Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=()=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:o.default,vertex:h.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"8e2ccf93f0125c801dd5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMTQzOTE2NmRkYjYxMjMxM2ExMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVZBTUEsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxJQUNuQ0MsS0FBS0osUUFBVUEsRUFDZkksS0FBS0YsR0FBS0EsRUFDVkUsS0FBS0gsU0FBU0EsRUFDZEcsS0FBS0QsTUFBTUEsRUFHWEMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNQLENBQ0FGLGFBQUFBLEdBQ0VELEtBQUtJLFFBQVUsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0YsSUFFaENFLEtBQUtNLE1BQVEsSUFBSUMsTUFDakJQLEtBQUtNLE1BQU1FLFlBQWMsWUFDekJSLEtBQUtNLE1BQU1HLElBQU1ULEtBQUtKLFFBQVFjLGFBQWEsWUFDM0NWLEtBQUtNLE1BQU1LLE9BQVMsSUFBT1gsS0FBS0ksUUFBUUUsTUFBUU4sS0FBS00sS0FJdkQsQ0FFQUosYUFBQUEsR0FDRUYsS0FBS1ksUUFBVSxJQUFJQyxFQUFBQSxRQUFRYixLQUFLRixHQUFJLENBQ2xDZ0IsU0FBUSxVQUNSQyxPQUFNLFVBQ05DLFNBQVUsQ0FDTkMsS0FBTSxDQUFFQyxNQUFPbEIsS0FBS0ksV0FJNUIsQ0FDQUQsVUFBQUEsR0FDRUgsS0FBS21CLEtBQUssSUFBSUMsRUFBQUEsS0FBS3BCLEtBQUtGLEdBQUcsQ0FDekJELFNBQVNHLEtBQUtILFNBQ2RlLFFBQVFaLEtBQUtZLFVBRWZaLEtBQUttQixLQUFLRSxVQUFVckIsS0FBS0QsTUFDM0Isa0JDOUNGdUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUcmFuc2Zvcm0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIHNjZW5lIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuZ2VvbWV0cnk9Z2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lPXNjZW5lXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpO1xuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSk7XG5cbiAgIFxuXG4gIH1cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfVxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaD1uZXcgTWVzaCh0aGlzLmdsLHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAgIH0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGUyY2NmOTNmMDEyNWM4MDFkZDVcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=