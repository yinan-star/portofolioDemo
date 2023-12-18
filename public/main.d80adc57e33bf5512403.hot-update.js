/*! For license information please see main.d80adc57e33bf5512403.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var r=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),i=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");class o{constructor({element:e,geometry:t,gl:s,index:r,scene:a}){this.element=e,this.geometry=t,this.gl=s,this.index=r,this.scene=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const e=this.element;this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new r.Program(this.gl,{fragment:i.default,vertex:h.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.position.x+=this.index*this.mesh.scale.x}}}},(function(e){e.h=()=>"a5481c92eb9a94c872e1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kODBhZGM1N2UzM2JmNTUxMjQwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVNBTWUsTUFBTUEsRUFDbkJDLFdBQUFBLEVBQVksUUFBRUMsRUFBTyxTQUFFQyxFQUFRLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxJQUMxQ0MsS0FBS0wsUUFBVUEsRUFDZkssS0FBS0osU0FBV0EsRUFDaEJJLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELE1BQVFBLEVBSWJDLEtBQUtDLGdCQUNMRCxLQUFLRSxnQkFDTEYsS0FBS0csWUFDUCxDQUNBRixhQUFBQSxHQUNFLE1BQU1HLEVBQVFKLEtBQUtMLFFBRW5CSyxLQUFLSyxRQUFVQyxPQUFPQyxTQUFTSCxFQUFNSSxhQUFhLFlBQ3BELENBRUFOLGFBQUFBLEdBQ0VGLEtBQUtTLFFBQVUsSUFBSUMsRUFBQUEsUUFBUVYsS0FBS0gsR0FBSSxDQUNsQ2MsU0FBUSxVQUNSQyxPQUFNLFVBQ05DLFNBQVUsQ0FDUkMsS0FBTSxDQUFFQyxNQUFPZixLQUFLSyxXQUcxQixDQUVBRixVQUFBQSxHQUNFSCxLQUFLZ0IsS0FBTyxJQUFJQyxFQUFBQSxLQUFLakIsS0FBS0gsR0FBSSxDQUM1QkQsU0FBVUksS0FBS0osU0FDZmEsUUFBU1QsS0FBS1MsVUFHaEJULEtBQUtnQixLQUFLRSxVQUFVbEIsS0FBS0QsT0FHekJDLEtBQUtnQixLQUFLRyxTQUFTQyxHQUFLcEIsS0FBS0YsTUFBUUUsS0FBS2dCLEtBQUtLLE1BQU1ELENBQ3ZELGtCQzlDRkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUcmFuc2Zvcm0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhe1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAvLyB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50O1xuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV07XG4gIH1cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG4gICAgLy8gbWVzaOaYr3NjZW5l55qE5a2Q5YWD57Sg44CCXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCArPSB0aGlzLmluZGV4ICogdGhpcy5tZXNoLnNjYWxlLng7XG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNTQ4MWM5MmViOWE5NGM4NzJlMVwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImltYWdlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJwb3NpdGlvbiIsIngiLCJzY2FsZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==