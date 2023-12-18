/*! For license information please see main.b0d1917ca882253b0bec.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/ogl/src/core/Program.js"),r=t("./node_modules/ogl/src/core/Mesh.js"),h=t("./app/shaders/plane-fragment.glsl"),o=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:r}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=r,this.geometry=new a.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new i.Program(this.gl,{fragment:h.default,vertex:o.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}transition(e){}}}},(function(e){e.h=()=>"e4a39775ba4044609c97"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMGQxOTE3Y2E4ODIyNTNiMGJlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBT0EsY0FDRUEsV0FBQUEsRUFBWSxZQUFFQyxFQUFXLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLElBQUVDLElBQzNDQyxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsSUFBS0EsRUFFVkMsS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLSixJQUcvQkksS0FBS0csZ0JBQ0xILEtBQUtJLGdCQUNMSixLQUFLSyxZQUNQLENBQ0FGLGFBQUFBLEdBQ0UsTUFBTSxNQUFDRyxFQUFLLE9BQUVDLEdBQVVQLEtBQUtMLFlBSTdCSyxLQUFLUSxNQUFRRCxFQUFPRCxFQUN0QixDQUdBRixhQUFBQSxHQUNFSixLQUFLUyxRQUFVLElBQUlDLEVBQUFBLFFBQVFWLEtBQUtKLEdBQUksQ0FDbENlLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPZixLQUFLUSxNQUFNUyxXQUdoQyxDQUVBWixVQUFBQSxHQUNFTCxLQUFLa0IsS0FBTyxJQUFJQyxFQUFBQSxLQUFLbkIsS0FBS0osR0FBSSxDQUM1QkssU0FBVUQsS0FBS0MsU0FDZlEsUUFBU1QsS0FBS1MsVUFHaEJULEtBQUtrQixLQUFLRSxNQUFNQyxFQUFHckIsS0FBS1EsTUFBTVUsS0FBS0UsTUFBTUMsRUFDekNyQixLQUFLa0IsS0FBS0UsTUFBTUUsRUFBR3RCLEtBQUtRLE1BQU1VLEtBQUtFLE1BQU1FLEVBQ3pDdEIsS0FBS2tCLEtBQUtFLE1BQU1HLEVBQUd2QixLQUFLUSxNQUFNVSxLQUFLRSxNQUFNRyxFQUV6Q3ZCLEtBQUtrQixLQUFLTSxTQUFTRCxFQUFJdkIsS0FBS1EsTUFBTVUsS0FBS00sU0FBU0QsRUFBSSxJQUVwRHZCLEtBQUtrQixLQUFLTyxVQUFVekIsS0FBS0gsTUFHM0IsQ0FJQTZCLFVBQUFBLENBQVdDLEdBRVgsa0JDL0RGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+WkhOeQhueFp+eJh1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IE1lc2gsUGxhbmUsIFByb2dyYW19IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25zLCBnbCwgc2NlbmUsIHNpemVzLCB1cmx9KSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMudXJsID11cmw7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IHtpbmRleCwgbWVkaWFzfSA9IHRoaXMuY29sbGVjdGlvbnNcblxuICAgIC8vIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuICAgIC8vIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG4gICAgdGhpcy5tZWRpYSA9IG1lZGlhc1tpbmRleF1cbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLm1lZGlhLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPXRoaXMubWVkaWEubWVzaC5zY2FsZS54XG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPXRoaXMubWVkaWEubWVzaC5zY2FsZS55XG4gICAgdGhpcy5tZXNoLnNjYWxlLnogPXRoaXMubWVkaWEubWVzaC5zY2FsZS56XG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueiA9IHRoaXMubWVkaWEubWVzaC5wb3NpdGlvbi56ICsgMC4wMVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICB9XG5cblxuICAvLyBBbmltYXRpb25zLlxuICB0cmFuc2l0aW9uKGVsZW1lbnQpe1xuXG4gIH1cblxuIFxuXG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0YTM5Nzc1YmE0MDQ0NjA5Yzk3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiY29sbGVjdGlvbnMiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ1cmwiLCJ0aGlzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJ0ZXh0dXJlIiwibWVzaCIsIk1lc2giLCJzY2FsZSIsIngiLCJ5IiwieiIsInBvc2l0aW9uIiwic2V0UGFyZW50IiwidHJhbnNpdGlvbiIsImVsZW1lbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=