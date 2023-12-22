/*! For license information please see main.e14b1f50de9007269843.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var i=t("./node_modules/gsap/index.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),l=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-fragment.glsl"),h=t("./app/shaders/plane-vertex.glsl");const r=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:a}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=a,this.geometry=new o.Plane(this.gl)}createProgram(e){this.program=new a.Program(this.gl,{fragment:n.default,vertex:h.default,uniforms:{uAlpha:{value:1},tMap:{value:e}}})}createMesh(e){this.mesh=new l.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=e.scale.x,this.mesh.scale.y=e.scale.y,this.mesh.scale.z=e.scale.z,this.mesh.position.x=e.position.x,this.mesh.position.y=e.position.y,this.mesh.position.z=e.position.z+.01,this.mesh.setParent(this.scene)}setElement(e){if(console.log(e.id),"collections"===e.id){const{index:s,medias:t}=e,i=t[s];this.createProgram(i.texture),this.createMesh(i.mesh),this.transition="detail"}else this.createProgram(e.texture),this.createMesh(e.mesh),this.transition="collections"}animate(e,s){const t=i.default.timeline({onComplete:s});t.to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.scale.x,y:e.scale.y,z:e.scale.z},0),t.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.position.x,y:e.position.y,z:e.position.z},0),t.call((e=>{this.scene.removeChild(this.mesh)}))}}}},(function(e){e.h=()=>"289258ae121e7083236f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMTRiMWY1MGRlOTAwNzI2OTg0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBT0EsY0FDRUEsV0FBQUEsRUFBWSxZQUFFQyxFQUFXLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLElBQUVDLElBQzNDQyxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsSUFBTUEsRUFFWEMsS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLSixHQUdqQyxDQUdBTyxhQUFBQSxDQUFjQyxHQUNaSixLQUFLSyxRQUFVLElBQUlDLEVBQUFBLFFBQVFOLEtBQUtKLEdBQUksQ0FDbENXLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPUCxLQUdyQixDQUVBUyxVQUFBQSxDQUFXQyxHQUNUZCxLQUFLYyxLQUFPLElBQUlDLEVBQUFBLEtBQUtmLEtBQUtKLEdBQUksQ0FDNUJLLFNBQVVELEtBQUtDLFNBQ2ZJLFFBQVNMLEtBQUtLLFVBR2hCTCxLQUFLYyxLQUFLRSxNQUFNQyxFQUFJSCxFQUFLRSxNQUFNQyxFQUMvQmpCLEtBQUtjLEtBQUtFLE1BQU1FLEVBQUlKLEVBQUtFLE1BQU1FLEVBQy9CbEIsS0FBS2MsS0FBS0UsTUFBTUcsRUFBSUwsRUFBS0UsTUFBTUcsRUFFL0JuQixLQUFLYyxLQUFLTSxTQUFTSCxFQUFJSCxFQUFLTSxTQUFTSCxFQUNyQ2pCLEtBQUtjLEtBQUtNLFNBQVNGLEVBQUlKLEVBQUtNLFNBQVNGLEVBQ3JDbEIsS0FBS2MsS0FBS00sU0FBU0QsRUFBSUwsRUFBS00sU0FBU0QsRUFBSSxJQUd6Q25CLEtBQUtjLEtBQUtPLFVBQVVyQixLQUFLSCxNQUczQixDQUdBeUIsVUFBQUEsQ0FBV0MsR0FHVCxHQUZBQyxRQUFRQyxJQUFJRixFQUFRRyxJQUVELGdCQUFmSCxFQUFRRyxHQUFzQixDQUNoQyxNQUFNLE1BQUVDLEVBQUssT0FBRUMsR0FBV0wsRUFDcEJNLEVBQVFELEVBQU9ELEdBRXJCM0IsS0FBS0csY0FBYzBCLEVBQU16QixTQUN6QkosS0FBS2EsV0FBV2dCLEVBQU1mLE1BRXRCZCxLQUFLOEIsV0FBYSxRQUNwQixNQUNFOUIsS0FBS0csY0FBY29CLEVBQVFuQixTQUMzQkosS0FBS2EsV0FBV1UsRUFBUVQsTUFFeEJkLEtBQUs4QixXQUFhLGFBSXRCLENBRUFDLE9BQUFBLENBQVFSLEVBQVNTLEdBRWYsTUFBTUMsRUFBV0MsRUFBQUEsUUFBS0QsU0FBUyxDQUM3QkQsZUFFRkMsRUFBU0UsR0FBR25DLEtBQUtjLEtBQUtFLE1BQU8sQ0FDM0JvQixTQUFVLElBQ1ZDLEtBQU0sYUFDTnBCLEVBQUdNLEVBQVFQLE1BQU1DLEVBQ2pCQyxFQUFHSyxFQUFRUCxNQUFNRSxFQUNqQkMsRUFBR0ksRUFBUVAsTUFBTUcsR0FFaEIsR0FDSGMsRUFBU0UsR0FBR25DLEtBQUtjLEtBQUtNLFNBQVUsQ0FDOUJnQixTQUFVLElBQ1ZDLEtBQU0sYUFDTnBCLEVBQUdNLEVBQVFILFNBQVNILEVBQ3BCQyxFQUFHSyxFQUFRSCxTQUFTRixFQUNwQkMsRUFBR0ksRUFBUUgsU0FBU0QsR0FDbkIsR0FFSGMsRUFBU0ssTUFBS0MsSUFDWnZDLEtBQUtILE1BQU0yQyxZQUFZeEMsS0FBS2MsS0FBSyxHQUlyQyxrQkNwR0YyQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+WkhOeQhueFp+eJh1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IE1lc2gsIFBsYW5lLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbnMsIGdsLCBzY2VuZSwgc2l6ZXMsIHVybCB9KSB7XG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0odGV4dHVyZSkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKG1lc2gpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gbWVzaC5zY2FsZS54O1xuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gbWVzaC5zY2FsZS55O1xuICAgIHRoaXMubWVzaC5zY2FsZS56ID0gbWVzaC5zY2FsZS56O1xuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSBtZXNoLnBvc2l0aW9uLng7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSBtZXNoLnBvc2l0aW9uLnk7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnogPSBtZXNoLnBvc2l0aW9uLnogKyAwLjAxO1xuXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuICAgIC8vIG1lc2jmmK9zY2VuZeeahOWtkOWFg+e0oOOAglxuXG4gIH1cblxuICAvLyBFbGVtZW50XG4gIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuaWQpXG5cbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gJ2NvbGxlY3Rpb25zJykge1xuICAgICAgY29uc3QgeyBpbmRleCwgbWVkaWFzIH0gPSBlbGVtZW50XG4gICAgICBjb25zdCBtZWRpYSA9IG1lZGlhc1tpbmRleF1cblxuICAgICAgdGhpcy5jcmVhdGVQcm9ncmFtKG1lZGlhLnRleHR1cmUpXG4gICAgICB0aGlzLmNyZWF0ZU1lc2gobWVkaWEubWVzaClcblxuICAgICAgdGhpcy50cmFuc2l0aW9uID0gJ2RldGFpbCdcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVQcm9ncmFtKGVsZW1lbnQudGV4dHVyZSlcbiAgICAgIHRoaXMuY3JlYXRlTWVzaChlbGVtZW50Lm1lc2gpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICdjb2xsZWN0aW9ucydcbiAgICB9XG5cblxuICB9XG4gIC8vIEFuaW1hdGlvbnMuXG4gIGFuaW1hdGUoZWxlbWVudCwgb25Db21wbGV0ZSkge1xuICAgIC8vIOiuqWZha2luZyBpbWFnZeWKqOi1t+adpW1hdGNo5Y6f5pyJ55qEaW1hZ2Us5L2G5piv6L+Z5Liq6L+H56iL6ZyA6KaB562J5Yeg56eSLOWboOS4uuWcqGNvbGxlY3Rpb25z55qEaW5kZXjph4zorr7nva7kuoZib3VuZHPpnIDopoHnrYnlh6Dnp5Iu6L+Z5Liq562J5Yeg56eS5ZyoQ2FudmFz55qEaW5kZXjmlofku7bph4zorr7nva5HU0FQLmRlbGF5ZWRDYWxsXG4gICAgY29uc3QgdGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgIG9uQ29tcGxldGVcbiAgICB9KVxuICAgIHRpbWVsaW5lLnRvKHRoaXMubWVzaC5zY2FsZSwge1xuICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgIGVhc2U6ICdleHBvLmluT3V0JyxcbiAgICAgIHg6IGVsZW1lbnQuc2NhbGUueCxcbiAgICAgIHk6IGVsZW1lbnQuc2NhbGUueSxcbiAgICAgIHo6IGVsZW1lbnQuc2NhbGUueixcblxuICAgIH0sIDApXG4gICAgdGltZWxpbmUudG8odGhpcy5tZXNoLnBvc2l0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgZWFzZTogJ2V4cG8uaW5PdXQnLFxuICAgICAgeDogZWxlbWVudC5wb3NpdGlvbi54LFxuICAgICAgeTogZWxlbWVudC5wb3NpdGlvbi55LFxuICAgICAgejogZWxlbWVudC5wb3NpdGlvbi56LFxuICAgIH0sIDApXG5cbiAgICB0aW1lbGluZS5jYWxsKF8gPT57XG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMubWVzaClcbiAgICB9KVxuICAgIC8vIOWujOaIkOWKqOeUu+WQjizlsLHplIDmr4Hlm77niYdcblxuICB9XG5cbn1cblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyODkyNThhZTEyMWU3MDgzMjM2ZlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVQcm9ncmFtIiwidGV4dHVyZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsImNyZWF0ZU1lc2giLCJtZXNoIiwiTWVzaCIsInNjYWxlIiwieCIsInkiLCJ6IiwicG9zaXRpb24iLCJzZXRQYXJlbnQiLCJzZXRFbGVtZW50IiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIm9uQ29tcGxldGUiLCJ0aW1lbGluZSIsIkdTQVAiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsImNhbGwiLCJfIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=