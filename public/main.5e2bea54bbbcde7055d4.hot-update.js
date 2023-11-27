/*! For license information please see main.5e2bea54bbbcde7055d4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),i=s("./node_modules/ogl/src/core/Mesh.js"),h=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const m=class{constructor({element:e,geometry:t,gl:s,index:r,scene:a}){this.element=e,this.gl=s,this.geometry=t,this.scene=a,this.index=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),this.image=new Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=()=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:h.default,vertex:o.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.position.x+=this.index*this.mesh.scale.x}}}},(function(e){e.h=()=>"958fddc159a475348d97"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZTJiZWE1NGJiYmNkZTcwNTVkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVZBTUEsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLElBQzFDQyxLQUFLTCxRQUFVQSxFQUNmSyxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLSixTQUFTQSxFQUNkSSxLQUFLRCxNQUFNQSxFQUNYQyxLQUFLRixNQUFPQSxFQUdaRSxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ1AsQ0FDQUYsYUFBQUEsR0FDRUQsS0FBS0ksUUFBVSxJQUFJQyxFQUFBQSxRQUFRTCxLQUFLSCxJQUVoQ0csS0FBS00sTUFBUSxJQUFJQyxNQUNqQlAsS0FBS00sTUFBTUUsWUFBYyxZQUN6QlIsS0FBS00sTUFBTUcsSUFBTVQsS0FBS0wsUUFBUWUsYUFBYSxZQUMzQ1YsS0FBS00sTUFBTUssT0FBUyxJQUFPWCxLQUFLSSxRQUFRRSxNQUFRTixLQUFLTSxLQUl2RCxDQUVBSixhQUFBQSxHQUNFRixLQUFLWSxRQUFVLElBQUlDLEVBQUFBLFFBQVFiLEtBQUtILEdBQUksQ0FDbENpQixTQUFRLFVBQ1JDLE9BQU0sVUFDTkMsU0FBVSxDQUNOQyxLQUFNLENBQUVDLE1BQU9sQixLQUFLSSxXQUk1QixDQUNBRCxVQUFBQSxHQUNFSCxLQUFLbUIsS0FBSyxJQUFJQyxFQUFBQSxLQUFLcEIsS0FBS0gsR0FBRyxDQUN6QkQsU0FBU0ksS0FBS0osU0FDZGdCLFFBQVFaLEtBQUtZLFVBRWZaLEtBQUttQixLQUFLRSxVQUFVckIsS0FBS0QsT0FDekJDLEtBQUttQixLQUFLRyxTQUFTQyxHQUFLdkIsS0FBS0YsTUFBUUUsS0FBS21CLEtBQUtLLE1BQU1ELENBQ3ZELGtCQ2hERkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUcmFuc2Zvcm0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmdlb21ldHJ5PWdlb21ldHJ5XG4gICAgdGhpcy5zY2VuZT1zY2VuZVxuICAgIHRoaXMuaW5kZXggPWluZGV4XG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpO1xuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSk7XG5cbiAgIFxuXG4gIH1cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfVxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaD1uZXcgTWVzaCh0aGlzLmdsLHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAgIH0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ICs9IHRoaXMuaW5kZXggKiB0aGlzLm1lc2guc2NhbGUueDtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1OGZkZGMxNTlhNDc1MzQ4ZDk3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJwb3NpdGlvbiIsIngiLCJzY2FsZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==