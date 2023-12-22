/*! For license information please see main.6f6b4b5281c20fdb882e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t("./node_modules/gsap/index.js"),i=t("./node_modules/ogl/src/extras/Plane.js"),o=t("./node_modules/ogl/src/core/Program.js"),h=t("./node_modules/ogl/src/core/Mesh.js"),l=t("./app/shaders/plane-fragment.glsl"),r=t("./app/shaders/plane-vertex.glsl");const m=class{constructor({collections:e,gl:s,scene:t,sizes:a,url:o}){this.collections=e,this.gl=s,this.scene=t,this.sizes=a,this.url=o,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new o.Program(this.gl,{fragment:l.default,vertex:r.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}animateDetail(e){console.log(e),a.default.to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.mesh.scale.x,y:e.mesh.scale.y,z:e.mesh.scale.z}),a.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.mesh.position.x,y:e.mesh.position.y,z:e.mesh.position.z})}}}},(function(e){e.h=()=>"2b408c2dea55787c9727"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjZiNGI1MjgxYzIwZmRiODgyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBT0EsY0FDRUEsV0FBQUEsRUFBWSxZQUFFQyxFQUFXLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLElBQUVDLElBQzNDQyxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsSUFBS0EsRUFFVkMsS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLSixJQUcvQkksS0FBS0csZ0JBQ0xILEtBQUtJLGdCQUNMSixLQUFLSyxZQUNQLENBQ0FGLGFBQUFBLEdBQ0UsTUFBTSxNQUFDRyxFQUFLLE9BQUVDLEdBQVVQLEtBQUtMLFlBSTdCSyxLQUFLUSxNQUFRRCxFQUFPRCxFQUN0QixDQUdBRixhQUFBQSxHQUNFSixLQUFLUyxRQUFVLElBQUlDLEVBQUFBLFFBQVFWLEtBQUtKLEdBQUksQ0FDbENlLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPZixLQUFLUSxNQUFNUyxXQUdoQyxDQUVBWixVQUFBQSxHQUNFTCxLQUFLa0IsS0FBTyxJQUFJQyxFQUFBQSxLQUFLbkIsS0FBS0osR0FBSSxDQUM1QkssU0FBVUQsS0FBS0MsU0FDZlEsUUFBU1QsS0FBS1MsVUFHaEJULEtBQUtrQixLQUFLRSxNQUFNQyxFQUFHckIsS0FBS1EsTUFBTVUsS0FBS0UsTUFBTUMsRUFDekNyQixLQUFLa0IsS0FBS0UsTUFBTUUsRUFBR3RCLEtBQUtRLE1BQU1VLEtBQUtFLE1BQU1FLEVBQ3pDdEIsS0FBS2tCLEtBQUtFLE1BQU1HLEVBQUd2QixLQUFLUSxNQUFNVSxLQUFLRSxNQUFNRyxFQUV6Q3ZCLEtBQUtrQixLQUFLTSxTQUFTRCxFQUFJdkIsS0FBS1EsTUFBTVUsS0FBS00sU0FBU0QsRUFBSSxJQUVwRHZCLEtBQUtrQixLQUFLTyxVQUFVekIsS0FBS0gsTUFHM0IsQ0FJQTZCLGFBQUFBLENBQWNDLEdBQ1pDLFFBQVFDLElBQUlGLEdBQ1pHLEVBQUFBLFFBQUtDLEdBQUcvQixLQUFLa0IsS0FBS0UsTUFBTSxDQUN0QlksU0FBUyxJQUNUQyxLQUFNLGFBQ05aLEVBQUdNLEVBQVFULEtBQUtFLE1BQU1DLEVBQ3RCQyxFQUFHSyxFQUFRVCxLQUFLRSxNQUFNRSxFQUN0QkMsRUFBR0ksRUFBUVQsS0FBS0UsTUFBTUcsSUFFeEJPLEVBQUFBLFFBQUtDLEdBQUcvQixLQUFLa0IsS0FBS00sU0FBUyxDQUN6QlEsU0FBUyxJQUNUQyxLQUFNLGFBQ05aLEVBQUdNLEVBQVFULEtBQUtNLFNBQVNILEVBQ3pCQyxFQUFHSyxFQUFRVCxLQUFLTSxTQUFTRixFQUN6QkMsRUFBR0ksRUFBUVQsS0FBS00sU0FBU0QsR0FHN0Isa0JDOUVGVyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+WkhOeQhueFp+eJh1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IE1lc2gsUGxhbmUsIFByb2dyYW19IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25zLCBnbCwgc2NlbmUsIHNpemVzLCB1cmx9KSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMudXJsID11cmw7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IHtpbmRleCwgbWVkaWFzfSA9IHRoaXMuY29sbGVjdGlvbnNcblxuICAgIC8vIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuICAgIC8vIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG4gICAgdGhpcy5tZWRpYSA9IG1lZGlhc1tpbmRleF1cbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLm1lZGlhLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPXRoaXMubWVkaWEubWVzaC5zY2FsZS54XG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPXRoaXMubWVkaWEubWVzaC5zY2FsZS55XG4gICAgdGhpcy5tZXNoLnNjYWxlLnogPXRoaXMubWVkaWEubWVzaC5zY2FsZS56XG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueiA9IHRoaXMubWVkaWEubWVzaC5wb3NpdGlvbi56ICsgMC4wMVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICB9XG5cblxuICAvLyBBbmltYXRpb25zLlxuICBhbmltYXRlRGV0YWlsKGVsZW1lbnQpe1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgR1NBUC50byh0aGlzLm1lc2guc2NhbGUse1xuICAgICAgZHVyYXRpb246MS41LFxuICAgICAgZWFzZTogJ2V4cG8uaW5PdXQnLFxuICAgICAgeDogZWxlbWVudC5tZXNoLnNjYWxlLngsXG4gICAgICB5OiBlbGVtZW50Lm1lc2guc2NhbGUueSxcbiAgICAgIHo6IGVsZW1lbnQubWVzaC5zY2FsZS56XG4gICAgfSlcbiAgICBHU0FQLnRvKHRoaXMubWVzaC5wb3NpdGlvbix7XG4gICAgICBkdXJhdGlvbjoxLjUsXG4gICAgICBlYXNlOiAnZXhwby5pbk91dCcsXG4gICAgICB4OiBlbGVtZW50Lm1lc2gucG9zaXRpb24ueCxcbiAgICAgIHk6IGVsZW1lbnQubWVzaC5wb3NpdGlvbi55LFxuICAgICAgejogZWxlbWVudC5tZXNoLnBvc2l0aW9uLnpcbiAgICB9KVxuXG4gIH1cblxuIFxuXG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJiNDA4YzJkZWE1NTc4N2M5NzI3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiY29sbGVjdGlvbnMiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ1cmwiLCJ0aGlzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJ0ZXh0dXJlIiwibWVzaCIsIk1lc2giLCJzY2FsZSIsIngiLCJ5IiwieiIsInBvc2l0aW9uIiwic2V0UGFyZW50IiwiYW5pbWF0ZURldGFpbCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiR1NBUCIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9