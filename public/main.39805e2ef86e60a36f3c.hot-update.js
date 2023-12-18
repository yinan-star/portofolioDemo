/*! For license information please see main.39805e2ef86e60a36f3c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var r=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),o=t("./node_modules/ogl/src/core/Mesh.js"),l=t("./app/shaders/plane-fragment.glsl"),i=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({collections:e,gl:s,scene:t,sizes:a,url:o}){this.collections=e,this.gl=s,this.scene=t,this.sizes=a,this.url=o,this.geometry=new r.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const{index:e,medias:s}=this.collections,{texture:t}=s[e];console.log(t),this.texture=t}createProgram(){this.program=new a.Program(this.gl,{fragment:l.default,vertex:i.default,uniforms:{uAlpha:{value:1},tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}transition(){}}}},(function(e){e.h=()=>"2429b99a052d9540239f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zOTgwNWUyZWY4NmU2MGEzNmYzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBT0EsY0FDRUEsV0FBQUEsRUFBWSxZQUFFQyxFQUFXLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLElBQUVDLElBQzNDQyxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsSUFBS0EsRUFFVkMsS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLSixJQUcvQkksS0FBS0csZ0JBQ0xILEtBQUtJLGdCQUNMSixLQUFLSyxhQUVMTCxLQUFLTSxNQUFRLENBQ1hDLEVBQUcsRUFDSEMsRUFBRyxFQUVQLENBQ0FMLGFBQUFBLEdBQ0UsTUFBTSxNQUFDTSxFQUFLLE9BQUVDLEdBQVVWLEtBQUtMLGFBQ3ZCLFFBQUNnQixHQUFXRCxFQUFPRCxHQUN6QkcsUUFBUUMsSUFBSUYsR0FHWlgsS0FBS1csUUFBU0EsQ0FDaEIsQ0FHQVAsYUFBQUEsR0FDRUosS0FBS2MsUUFBVSxJQUFJQyxFQUFBQSxRQUFRZixLQUFLSixHQUFJLENBQ2xDb0IsU0FBUSxVQUNSQyxPQUFNLFVBQ05DLFNBQVUsQ0FDUkMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQUVELE1BQU9wQixLQUFLVyxXQUcxQixDQUVBTixVQUFBQSxHQUNFTCxLQUFLc0IsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdkIsS0FBS0osR0FBSSxDQUM1QkssU0FBVUQsS0FBS0MsU0FDZmEsUUFBU2QsS0FBS2MsVUFHaEJkLEtBQUtzQixLQUFLRSxVQUFVeEIsS0FBS0gsTUFHM0IsQ0FJQTRCLFVBQUFBLEdBRUEsa0JDL0RGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+WkhOeQhueFp+eJh1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IE1lc2gsUGxhbmUsIFByb2dyYW19IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25zLCBnbCwgc2NlbmUsIHNpemVzLCB1cmx9KSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMudXJsID11cmw7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IHtpbmRleCwgbWVkaWFzfSA9IHRoaXMuY29sbGVjdGlvbnNcbiAgICBjb25zdCB7dGV4dHVyZX0gPSBtZWRpYXNbaW5kZXhdXG4gICAgY29uc29sZS5sb2codGV4dHVyZSlcbiAgICAvLyBjb25zdCBpbWFnZSA9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcbiAgICAvLyB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuICAgIHRoaXMudGV4dHVyZSA9dGV4dHVyZVxuICB9XG5cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuICAgIC8vIG1lc2jmmK9zY2VuZeeahOWtkOWFg+e0oOOAglxuXG4gIH1cblxuXG4gIC8vIEFuaW1hdGlvbnMuXG4gIHRyYW5zaXRpb24oKXtcblxuICB9XG5cbiBcblxuXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNDI5Yjk5YTA1MmQ5NTQwMjM5ZlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwiaW5kZXgiLCJtZWRpYXMiLCJ0ZXh0dXJlIiwiY29uc29sZSIsImxvZyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwidHJhbnNpdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==