/*! For license information please see main.ab6962296b50a1783928.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/ogl/src/core/Renderer.js"),r=t("./node_modules/ogl/src/core/Camera.js"),a=t("./node_modules/ogl/src/core/Transform.js"),n=t("./app/components/Canvas/Home.js");class c{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new r.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new a.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t},this.home&&this.home.onResize({sizes:this.sizes})}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"151d5ac062eed8347747"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYjY5NjIyOTZiNTBhMTc4MzkyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVRBSWUsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxXQUNMSixLQUFLSyxZQUNQLENBRUFKLGNBQUFBLEdBQ0VELEtBQUtNLFNBQVcsSUFBSUMsRUFBQUEsU0FFcEJQLEtBQUtRLEdBQUtSLEtBQUtNLFNBQVNFLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZWCxLQUFLUSxHQUFHSSxPQUNwQyxDQUVBVixZQUFBQSxHQUNFRixLQUFLYSxPQUFTLElBQUlDLEVBQUFBLE9BQU9kLEtBQUtRLElBQzlCUixLQUFLYSxPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFiLFdBQUFBLEdBQ0VILEtBQUtpQixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBRUFiLFVBQUFBLEdBQ0VMLEtBQUttQixLQUFPLElBQUlDLEVBQUFBLFFBQUssQ0FDbkJaLEdBQUlSLEtBQUtRLEdBQ1RTLE1BQU9qQixLQUFLaUIsTUFDWkksTUFBT3JCLEtBQUtxQixPQUdoQixDQUdBakIsUUFBQUEsR0FFRUosS0FBS00sU0FBU2dCLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBQ2hEekIsS0FBS2EsT0FBT2EsWUFBWSxDQUFFQyxPQUFRSixPQUFPQyxXQUFhRCxPQUFPRSxjQUU3RCxNQUFNRyxFQUFNNUIsS0FBS2EsT0FBT2UsS0FBT0MsS0FBS0MsR0FBSyxLQUNuQ0MsRUFBUyxFQUFJRixLQUFLRyxJQUFJSixFQUFNLEdBQUs1QixLQUFLYSxPQUFPRSxTQUFTQyxFQUN0RGlCLEVBQVFGLEVBQVMvQixLQUFLYSxPQUFPYyxPQUVuQzNCLEtBQUtxQixNQUFRLENBQ1hVLFNBQ0FFLFNBR0VqQyxLQUFLbUIsTUFDUG5CLEtBQUttQixLQUFLZixTQUFTLENBQ2pCaUIsTUFBT3JCLEtBQUtxQixPQUdsQixDQUVBYSxNQUFBQSxHQUdFbEMsS0FBS00sU0FBUzZCLE9BQU8sQ0FDbkJ0QixPQUFRYixLQUFLYSxPQUNiSSxNQUFPakIsS0FBS2lCLE9BRWhCLGtCQ3JFRm1CLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7IC8vVElQIHdvcmtzIGxpa2UgYSBjYW52YXMgY29udGV4dFxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgY3JlYXRlSG9tZSgpIHtcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KTtcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuXG4gICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApO1xuICAgIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLno7XG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3Q7XG5cbiAgICB0aGlzLnNpemVzID0ge1xuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblJlc2l6ZSh7XG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNTFkNWFjMDYyZWVkODM0Nzc0N1wiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==