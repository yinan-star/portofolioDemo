/*! For license information please see main.1778557c2463e5851b16.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),i=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");const m=class{constructor({element:e,geometry:t,gl:s,scene:r}){this.element=e,this.gl=s,this.geometry=t,this.scene=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),console.log(this.element),this.image=new Image,this.image.src=this.element.getAttribute("data-src"),this.image.onload=()=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:i.default,vertex:h.default,uniforms:{}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"7b5b4ea6093500318790"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNzc4NTU3YzI0NjNlNTg1MWIxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVZBTUEsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxJQUNuQ0MsS0FBS0osUUFBVUEsRUFDZkksS0FBS0YsR0FBS0EsRUFDVkUsS0FBS0gsU0FBU0EsRUFDZEcsS0FBS0QsTUFBTUEsRUFHWEMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNQLENBQ0FGLGFBQUFBLEdBQ0VELEtBQUtJLFFBQVUsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0YsSUFDaENRLFFBQVFDLElBQUlQLEtBQUtKLFNBRWpCSSxLQUFLUSxNQUFRLElBQUlDLE1BQ2pCVCxLQUFLUSxNQUFNRSxJQUFNVixLQUFLSixRQUFRZSxhQUFhLFlBQzNDWCxLQUFLUSxNQUFNSSxPQUFTLElBQU9aLEtBQUtJLFFBQVFJLE1BQVFSLEtBQUtRLEtBSXZELENBRUFOLGFBQUFBLEdBQ0VGLEtBQUthLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWQsS0FBS0YsR0FBSSxDQUNsQ2lCLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1IsR0FJTixDQUNBZCxVQUFBQSxHQUNFSCxLQUFLa0IsS0FBSyxJQUFJQyxFQUFBQSxLQUFLbkIsS0FBS0YsR0FBRyxDQUN6QkQsU0FBU0csS0FBS0gsU0FDZGdCLFFBQVFiLEtBQUthLFVBRWZiLEtBQUtrQixLQUFLRSxVQUFVcEIsS0FBS0QsTUFDM0Isa0JDOUNGc0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUcmFuc2Zvcm0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIHNjZW5lIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuZ2VvbWV0cnk9Z2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lPXNjZW5lXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSk7XG5cbiAgIFxuXG4gIH1cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgLy8gICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfVxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaD1uZXcgTWVzaCh0aGlzLmdsLHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAgIH0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2I1YjRlYTYwOTM1MDAzMTg3OTBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiY29uc29sZSIsImxvZyIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==