/*! For license information please see main.0e47da40bd972c1bd369.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,r,s)=>{s.r(r),s.d(r,{default:()=>c});var n=s("./node_modules/ogl/src/core/Renderer.js"),t=s("./node_modules/ogl/src/core/Camera.js"),a=s("./node_modules/ogl/src/core/Transform.js"),i=s("./app/components/Canvas/Home.js");class c{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createHome(),this.onResize()}createRenderer(){this.renderer=new n.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new t.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new a.Transform}createHome(){this.home=new i.default({gl:this.gl,scene:this.scene})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"bae611a5fa2cf37925c5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZTQ3ZGE0MGJkOTcyYzFiZDM2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVRBSWUsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxhQUNMSixLQUFLSyxVQUNQLENBRUFKLGNBQUFBLEdBQ0VELEtBQUtNLFNBQVcsSUFBSUMsRUFBQUEsU0FFcEJQLEtBQUtRLEdBQUtSLEtBQUtNLFNBQVNFLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZWCxLQUFLUSxHQUFHSSxPQUNwQyxDQUVBVixZQUFBQSxHQUNFRixLQUFLYSxPQUFTLElBQUlDLEVBQUFBLE9BQU9kLEtBQUtRLElBQzlCUixLQUFLYSxPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFiLFdBQUFBLEdBQ0VILEtBQUtpQixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBRUFkLFVBQUFBLEdBQ0VKLEtBQUttQixLQUFPLElBQUlDLEVBQUFBLFFBQUssQ0FDbkJaLEdBQUlSLEtBQUtRLEdBQ1RTLE1BQU9qQixLQUFLaUIsT0FJaEIsQ0FHQVosUUFBQUEsR0FFRUwsS0FBS00sU0FBU2UsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFDaER4QixLQUFLYSxPQUFPWSxZQUFZLENBQUVDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGFBQy9ELENBRUFHLE1BQUFBLEdBR00zQixLQUFLbUIsTUFDUG5CLEtBQUttQixLQUFLUSxTQUVaM0IsS0FBS00sU0FBU3NCLE9BQU8sQ0FDbkJmLE9BQVFiLEtBQUthLE9BQ2JJLE1BQU9qQixLQUFLaUIsT0FFaEIsa0JDekRGWSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBCb3gsIFByb2dyYW0sIE1lc2h9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDsgLy9USVAgd29ya3MgbGlrZSBhIGNhbnZhcyBjb250ZXh0XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAvLyBzaXplczogdGhpcy5zaXplcyxcbiAgICB9KTtcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLnVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmVcbiAgICB9KVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmFlNjExYTVmYTJjZjM3OTI1YzVcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUhvbWUiLCJvblJlc2l6ZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJob21lIiwiSG9tZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==