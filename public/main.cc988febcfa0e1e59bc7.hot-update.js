/*! For license information please see main.cc988febcfa0e1e59bc7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var o=t("./node_modules/gsap/index.js"),i=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),n=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./app/shaders/plane-fragment.glsl"),l=t("./app/shaders/plane-vertex.glsl");const h=class{constructor({collections:e,gl:s,scene:t,sizes:o,url:a}){this.collections=e,this.gl=s,this.scene=t,this.sizes=o,this.url=a,this.geometry=new i.Plane(this.gl)}createProgram(e){this.program=new a.Program(this.gl,{fragment:r.default,vertex:l.default,uniforms:{uAlpha:{value:1},tMap:{value:e}}})}createMesh(e){this.mesh=new n.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=e.scale.x,this.mesh.scale.y=e.scale.y,this.mesh.scale.z=e.scale.z,this.mesh.position.x=e.position.x,this.mesh.position.y=e.position.y,this.mesh.position.z=e.position.z+.01,this.mesh.rotation.x=e.rotation.x,this.mesh.rotation.y=e.rotation.y,this.mesh.rotation.z=e.rotation.z,this.mesh.setParent(this.scene)}setElement(e){if(console.log(e.id),"collections"===e.id){const{index:s,medias:t}=e,o=t[s];this.createProgram(o.texture),this.createMesh(o.mesh),this.transition="detail"}else this.createProgram(e.texture),this.createMesh(e.mesh),this.transition="collections"}animate(e,s){const t=o.default.timeline();t.to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.scale.x,y:e.scale.y,z:e.scale.z},0),t.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.position.x,y:e.position.y,z:e.position.z},0),t.to(this.mesh.rotation,{duration:1.5,ease:"expo.inOut",x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},0),t.call((e=>{s()})),t.call((e=>{this.scene.removeChild(this.mesh)}),null,"+=0.3")}}}},(function(e){e.h=()=>"2de428727fb59826f37b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYzk4OGZlYmNmYTBlMWU1OWJjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBT0EsY0FDRUEsV0FBQUEsRUFBWSxZQUFFQyxFQUFXLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLElBQUVDLElBQzNDQyxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsSUFBTUEsRUFFWEMsS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLSixHQUdqQyxDQUdBTyxhQUFBQSxDQUFjQyxHQUNaSixLQUFLSyxRQUFVLElBQUlDLEVBQUFBLFFBQVFOLEtBQUtKLEdBQUksQ0FDbENXLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPUCxLQUdyQixDQUVBUyxVQUFBQSxDQUFXQyxHQUNUZCxLQUFLYyxLQUFPLElBQUlDLEVBQUFBLEtBQUtmLEtBQUtKLEdBQUksQ0FDNUJLLFNBQVVELEtBQUtDLFNBQ2ZJLFFBQVNMLEtBQUtLLFVBR2hCTCxLQUFLYyxLQUFLRSxNQUFNQyxFQUFJSCxFQUFLRSxNQUFNQyxFQUMvQmpCLEtBQUtjLEtBQUtFLE1BQU1FLEVBQUlKLEVBQUtFLE1BQU1FLEVBQy9CbEIsS0FBS2MsS0FBS0UsTUFBTUcsRUFBSUwsRUFBS0UsTUFBTUcsRUFFL0JuQixLQUFLYyxLQUFLTSxTQUFTSCxFQUFJSCxFQUFLTSxTQUFTSCxFQUNyQ2pCLEtBQUtjLEtBQUtNLFNBQVNGLEVBQUlKLEVBQUtNLFNBQVNGLEVBQ3JDbEIsS0FBS2MsS0FBS00sU0FBU0QsRUFBSUwsRUFBS00sU0FBU0QsRUFBSSxJQUV6Q25CLEtBQUtjLEtBQUtPLFNBQVNKLEVBQUlILEVBQUtPLFNBQVNKLEVBQ3JDakIsS0FBS2MsS0FBS08sU0FBU0gsRUFBSUosRUFBS08sU0FBU0gsRUFDckNsQixLQUFLYyxLQUFLTyxTQUFTRixFQUFJTCxFQUFLTyxTQUFTRixFQUdyQ25CLEtBQUtjLEtBQUtRLFVBQVV0QixLQUFLSCxNQUczQixDQUdBMEIsVUFBQUEsQ0FBV0MsR0FHVCxHQUZBQyxRQUFRQyxJQUFJRixFQUFRRyxJQUVELGdCQUFmSCxFQUFRRyxHQUFzQixDQUNoQyxNQUFNLE1BQUVDLEVBQUssT0FBRUMsR0FBV0wsRUFDcEJNLEVBQVFELEVBQU9ELEdBRXJCNUIsS0FBS0csY0FBYzJCLEVBQU0xQixTQUN6QkosS0FBS2EsV0FBV2lCLEVBQU1oQixNQUV0QmQsS0FBSytCLFdBQWEsUUFDcEIsTUFDRS9CLEtBQUtHLGNBQWNxQixFQUFRcEIsU0FDM0JKLEtBQUthLFdBQVdXLEVBQVFWLE1BRXhCZCxLQUFLK0IsV0FBYSxhQUl0QixDQUVBQyxPQUFBQSxDQUFRUixFQUFTUyxHQUVmLE1BQU1DLEVBQVdDLEVBQUFBLFFBQUtELFdBRXRCQSxFQUFTRSxHQUFHcEMsS0FBS2MsS0FBS0UsTUFBTyxDQUMzQnFCLFNBQVUsSUFDVkMsS0FBTSxhQUNOckIsRUFBR08sRUFBUVIsTUFBTUMsRUFDakJDLEVBQUdNLEVBQVFSLE1BQU1FLEVBQ2pCQyxFQUFHSyxFQUFRUixNQUFNRyxHQUVoQixHQUNIZSxFQUFTRSxHQUFHcEMsS0FBS2MsS0FBS00sU0FBVSxDQUM5QmlCLFNBQVUsSUFDVkMsS0FBTSxhQUNOckIsRUFBR08sRUFBUUosU0FBU0gsRUFDcEJDLEVBQUdNLEVBQVFKLFNBQVNGLEVBQ3BCQyxFQUFHSyxFQUFRSixTQUFTRCxHQUNuQixHQUVIZSxFQUFTRSxHQUFHcEMsS0FBS2MsS0FBS08sU0FBVSxDQUM5QmdCLFNBQVUsSUFDVkMsS0FBTSxhQUNOckIsRUFBR08sRUFBUUgsU0FBU0osRUFDcEJDLEVBQUdNLEVBQVFILFNBQVNILEVBQ3BCQyxFQUFHSyxFQUFRSCxTQUFTRixHQUNuQixHQUVIZSxFQUFTSyxNQUFLQyxJQUNaUCxHQUFZLElBSWRDLEVBQVNLLE1BQUtDLElBQ1p4QyxLQUFLSCxNQUFNNEMsWUFBWXpDLEtBQUtjLEtBQUssR0FDaEMsS0FBTSxRQUdYLGtCQ3BIRjRCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBjb2xsZWN0aW9ucywgZ2wsIHNjZW5lLCBzaXplcywgdXJsIH0pIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnM7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy51cmwgPSB1cmw7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSh0ZXh0dXJlKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2gobWVzaCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSBtZXNoLnNjYWxlLng7XG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSBtZXNoLnNjYWxlLnk7XG4gICAgdGhpcy5tZXNoLnNjYWxlLnogPSBtZXNoLnNjYWxlLno7XG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IG1lc2gucG9zaXRpb24ueDtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9IG1lc2gucG9zaXRpb24ueTtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueiA9IG1lc2gucG9zaXRpb24ueiArIDAuMDE7XG5cbiAgICB0aGlzLm1lc2gucm90YXRpb24ueCA9IG1lc2gucm90YXRpb24ueDtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueSA9IG1lc2gucm90YXRpb24ueTtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IG1lc2gucm90YXRpb24uejtcblxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICB9XG5cbiAgLy8gRWxlbWVudFxuICBzZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LmlkKVxuXG4gICAgaWYgKGVsZW1lbnQuaWQgPT09ICdjb2xsZWN0aW9ucycpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXgsIG1lZGlhcyB9ID0gZWxlbWVudFxuICAgICAgY29uc3QgbWVkaWEgPSBtZWRpYXNbaW5kZXhdXG5cbiAgICAgIHRoaXMuY3JlYXRlUHJvZ3JhbShtZWRpYS50ZXh0dXJlKVxuICAgICAgdGhpcy5jcmVhdGVNZXNoKG1lZGlhLm1lc2gpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9ICdkZXRhaWwnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlUHJvZ3JhbShlbGVtZW50LnRleHR1cmUpXG4gICAgICB0aGlzLmNyZWF0ZU1lc2goZWxlbWVudC5tZXNoKVxuXG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSAnY29sbGVjdGlvbnMnXG4gICAgfVxuXG5cbiAgfVxuICAvLyBBbmltYXRpb25zLlxuICBhbmltYXRlKGVsZW1lbnQsIG9uQ29tcGxldGUpIHtcbiAgICAvLyDorqlmYWtpbmcgaW1hZ2XliqjotbfmnaVtYXRjaOWOn+acieeahGltYWdlLOS9huaYr+i/meS4qui/h+eoi+mcgOimgeetieWHoOenkizlm6DkuLrlnKhjb2xsZWN0aW9uc+eahGluZGV46YeM6K6+572u5LqGYm91bmRz6ZyA6KaB562J5Yeg56eSLui/meS4quetieWHoOenkuWcqENhbnZhc+eahGluZGV45paH5Lu26YeM6K6+572uR1NBUC5kZWxheWVkQ2FsbFxuICAgIGNvbnN0IHRpbWVsaW5lID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICB0aW1lbGluZS50byh0aGlzLm1lc2guc2NhbGUsIHtcbiAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICBlYXNlOiAnZXhwby5pbk91dCcsXG4gICAgICB4OiBlbGVtZW50LnNjYWxlLngsXG4gICAgICB5OiBlbGVtZW50LnNjYWxlLnksXG4gICAgICB6OiBlbGVtZW50LnNjYWxlLnosXG5cbiAgICB9LCAwKVxuICAgIHRpbWVsaW5lLnRvKHRoaXMubWVzaC5wb3NpdGlvbiwge1xuICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgIGVhc2U6ICdleHBvLmluT3V0JyxcbiAgICAgIHg6IGVsZW1lbnQucG9zaXRpb24ueCxcbiAgICAgIHk6IGVsZW1lbnQucG9zaXRpb24ueSxcbiAgICAgIHo6IGVsZW1lbnQucG9zaXRpb24ueixcbiAgICB9LCAwKVxuXG4gICAgdGltZWxpbmUudG8odGhpcy5tZXNoLnJvdGF0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgZWFzZTogJ2V4cG8uaW5PdXQnLFxuICAgICAgeDogZWxlbWVudC5yb3RhdGlvbi54LFxuICAgICAgeTogZWxlbWVudC5yb3RhdGlvbi55LFxuICAgICAgejogZWxlbWVudC5yb3RhdGlvbi56LFxuICAgIH0sIDApXG5cbiAgICB0aW1lbGluZS5jYWxsKF8gPT4ge1xuICAgICAgb25Db21wbGV0ZSgpXG4gICAgfSlcbiAgICAvLyDmtojnga3mipbliqjms5VcblxuICAgIHRpbWVsaW5lLmNhbGwoXyA9PiB7XG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMubWVzaClcbiAgICB9LCBudWxsLCAnKz0wLjMnKVxuICAgIC8vIOWujOaIkOWKqOeUu+WQjiznrYnkuKrlh6Dnp5Is6ZSA5q+B5Zu+54mHLOS4jeeEtuS7luS8muaKluWKqCzlm77niYfmgaLlpI3ljp/lhYjnmoTkvY3nva7kuIrml7ZcblxuICB9XG5cbn1cblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZGU0Mjg3MjdmYjU5ODI2ZjM3YlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVQcm9ncmFtIiwidGV4dHVyZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsImNyZWF0ZU1lc2giLCJtZXNoIiwiTWVzaCIsInNjYWxlIiwieCIsInkiLCJ6IiwicG9zaXRpb24iLCJyb3RhdGlvbiIsInNldFBhcmVudCIsInNldEVsZW1lbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImlkIiwiaW5kZXgiLCJtZWRpYXMiLCJtZWRpYSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwib25Db21wbGV0ZSIsInRpbWVsaW5lIiwiR1NBUCIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwiY2FsbCIsIl8iLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==