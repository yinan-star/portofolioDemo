/*! For license information please see main.3f2d14fbcd4f19c370ea.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home.js":()=>{},"./app/components/Canvas/index.js":(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>o});var s=n("./node_modules/ogl/src/core/Renderer.js"),a=n("./node_modules/ogl/src/core/Camera.js"),t=n("./node_modules/ogl/src/core/Transform.js"),i=n("./app/components/Canvas/Home.js"),c=n.n(i);class o{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createHome()}createRenderer(){this.renderer=new s.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new a.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new t.Transform}createHome(){this.home=new(c())({gl:this.gl,scene:this.scene})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"11141a0ad0a0f7711b73"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZjJkMTRmYmNkNGYxOWMzNzBlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cVdBS2UsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUVMSCxLQUFLSSxZQUdQLENBRUFILGNBQUFBLEdBQ0VELEtBQUtLLFNBQVcsSUFBSUMsRUFBQUEsU0FFcEJOLEtBQUtPLEdBQUtQLEtBQUtLLFNBQVNFLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZVixLQUFLTyxHQUFHSSxPQUNwQyxDQUVBVCxZQUFBQSxHQUNFRixLQUFLWSxPQUFTLElBQUlDLEVBQUFBLE9BQU9iLEtBQUtPLElBQzlCUCxLQUFLWSxPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFaLFdBQUFBLEdBQ0VILEtBQUtnQixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBRUFiLFVBQUFBLEdBQ0VKLEtBQUtrQixLQUFPLElBQUlDLElBQUosQ0FBUyxDQUNuQlosR0FBSVAsS0FBS08sR0FDVFMsTUFBT2hCLEtBQUtnQixPQUloQixDQW1CQUksUUFBQUEsR0FFRXBCLEtBQUtLLFNBQVNnQixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRHhCLEtBQUtZLE9BQU9hLFlBQVksQ0FBRUMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFnQi9ELENBRUFHLE1BQUFBLEdBSUUzQixLQUFLSyxTQUFTdUIsT0FBTyxDQUNuQmhCLE9BQVFaLEtBQUtZLE9BQ2JJLE1BQU9oQixLQUFLZ0IsT0FFaEIsa0JDMUZGYSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBNZXNoLCBCb3gsIFByb2dyYW0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIC8vICAgICB0aGlzLm9uUmVzaXplKClcbiAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIC8vIHRoaXMuY3JlYXRlQ3ViZSgpXG4gICAgLy8g5LuA5LmI5LuA5LmI5b+Y6K6wZGVmaW5l5LqG77yM5bCx55yL6L+Z6YeM5pyJ5rKh5pyJ6KKr5Yid5aeL5YyWXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDsgLy9USVAgd29ya3MgbGlrZSBhIGNhbnZhcyBjb250ZXh0XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAvLyBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBjcmVhdGVDdWJlKCkge1xuICAvLyAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gIC8vICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAvLyAgICAgdmVydGV4LFxuICAvLyAgICAgZnJhZ21lbnRcbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhmds5L2c5Li656ys5LiA5Liq5YWD57Sg5Lyg57uZTWVzaFxuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgLy8gICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAvLyAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhuebkuWtkOiuvue9ruS4uuebuOacuueahOWtkOWFg+e0oFxuICAvLyAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAvLyB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgLy8g5Yib5bu65LqGY2FtZXJh5LmL5ZCO5omN6IO95Yib5bu66YCP6KeG5Zu+XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuXG4gICAgLy8gICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAvLyAgICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uejtcbiAgICAvLyAgICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3Q7XG5cbiAgICAvLyAgICAgdGhpcy5zaXplcyA9IHtcbiAgICAvLyAgICAgICBoZWlnaHQsXG4gICAgLy8gICAgICAgd2lkdGgsXG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgICAgIHRoaXMuaG9tZS5vblJlc2l6ZSh7XG4gICAgLy8gICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyDlrp7ml7bmuLLmn5NcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMTE0MWEwYWQwYTBmNzcxMWI3M1wiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlSG9tZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJob21lIiwiSG9tZSIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9