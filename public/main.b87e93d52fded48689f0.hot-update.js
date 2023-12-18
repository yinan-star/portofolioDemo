/*! For license information please see main.b87e93d52fded48689f0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/ogl/src/core/Texture.js"),r=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),o=t("./app/shaders/plane-fragment.glsl"),h=t("./app/shaders/plane-vertex.glsl");class n{constructor({element:e,geometry:s,gl:t,index:i,scene:r,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.index=i,this.scene=r,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new r.Program(this.gl,{fragment:o.default,vertex:h.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2,this.mesh.position.x+=this.index*this.mesh.scale.x}createBounds(){this.bounds=this.element.getClientBoundingRect(),console.log(this.bounds)}onResize(){this.createBounds()}}}},(function(e){e.h=()=>"0de34edeaf6987188fe4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iODdlOTNkNTJmZGVkNDg2ODlmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVZBTWUsTUFBTUEsRUFDbkJDLFdBQUFBLEVBQVksUUFBRUMsRUFBTyxTQUFFQyxFQUFRLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLE1BQUVDLElBQ2pEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsTUFBUUEsRUFHYkMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNQLENBQ0FGLGFBQUFBLEdBQ0VELEtBQUtJLFFBQVMsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0osSUFFL0JJLEtBQUtNLE1BQU8sSUFBSUMsT0FBT0MsTUFDdkJSLEtBQUtNLE1BQU1HLFlBQVksWUFDdkJULEtBQUtNLE1BQU1JLElBQUlWLEtBQUtOLFFBQVFpQixhQUFhLFlBQ3pDWCxLQUFLTSxNQUFNTSxPQUFTQyxHQUFNYixLQUFLSSxRQUFRRSxNQUFPTixLQUFLTSxLQUNyRCxDQUVBSixhQUFBQSxHQUNFRixLQUFLYyxRQUFVLElBQUlDLEVBQUFBLFFBQVFmLEtBQUtKLEdBQUksQ0FDbENvQixTQUFRLFVBQ1JDLE9BQU0sVUFDTkMsU0FBVSxDQUNSQyxLQUFNLENBQUVDLE1BQU9wQixLQUFLSSxXQUcxQixDQUVBRCxVQUFBQSxHQUNFSCxLQUFLcUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdEIsS0FBS0osR0FBSSxDQUM1QkQsU0FBVUssS0FBS0wsU0FDZm1CLFFBQVNkLEtBQUtjLFVBR2hCZCxLQUFLcUIsS0FBS0UsVUFBVXZCLEtBQUtGLE9BR3pCRSxLQUFLcUIsS0FBS0csTUFBTUMsRUFBRyxFQUNuQnpCLEtBQUtxQixLQUFLSyxTQUFTRCxHQUFLekIsS0FBS0gsTUFBUUcsS0FBS3FCLEtBQUtHLE1BQU1DLENBQ3ZELENBRUFFLFlBQUFBLEdBQ0UzQixLQUFLNEIsT0FBUTVCLEtBQUtOLFFBQVFtQyx3QkFDMUJDLFFBQVFDLElBQUkvQixLQUFLNEIsT0FDbkIsQ0FFQUksUUFBQUEsR0FDRWhDLEtBQUsyQixjQUNQLGtCQzNERk0sRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICAvLyDkuIrpnaLnmoRlbG1lbnTpg73mmK/pnIDopoHlpI3nlKjnmoTmiYDku6XlnKjov5nph4zliJ3lp4vljJZcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIHRoaXMuY3JlYXRlTWVzaCgpO1xuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID1uZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG4gICAgdGhpcy5pbWFnZSA9bmV3IHdpbmRvdy5JbWFnZSgpXG4gICAgdGhpcy5pbWFnZS5jcm9zc09yaWdpbj0nYW5vbnltb3VzJ1xuICAgIHRoaXMuaW1hZ2Uuc3JjPXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9dGhpcy5pbWFnZSlcbiAgfVxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0yXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggKz0gdGhpcy5pbmRleCAqIHRoaXMubWVzaC5zY2FsZS54O1xuICB9XG5cbiAgY3JlYXRlQm91bmRzKCl7XG4gICAgdGhpcy5ib3VuZHMgPXRoaXMuZWxlbWVudC5nZXRDbGllbnRCb3VuZGluZ1JlY3QoKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuYm91bmRzKTtcbiAgfVxuXG4gIG9uUmVzaXplKCl7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGRlMzRlZGVhZjY5ODcxODhmZTRcIikiXSwibmFtZXMiOlsiTWVkaWEiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwic2NhbGUiLCJ4IiwicG9zaXRpb24iLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRDbGllbnRCb3VuZGluZ1JlY3QiLCJjb25zb2xlIiwibG9nIiwib25SZXNpemUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=