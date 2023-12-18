/*! For license information please see main.e13c7ea379ef82344a09.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>c});var s=n("./node_modules/ogl/src/core/Renderer.js"),t=n("./node_modules/ogl/src/core/Camera.js"),a=n("./node_modules/ogl/src/core/Transform.js"),i=n("./app/components/Canvas/home/index.js");class c{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createHome()}createRenderer(){this.renderer=new s.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new t.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new a.Transform}createHome(){this.home=new i.default({gl:this.gl,scene:this.scene})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"fbfd0d962fd4df436d87"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMTNjN2VhMzc5ZWY4MjM0NGEwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVRBSWUsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUdQLENBRUFILGNBQUFBLEdBQ0VELEtBQUtLLFNBQVcsSUFBSUMsRUFBQUEsU0FFcEJOLEtBQUtPLEdBQUtQLEtBQUtLLFNBQVNFLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZVixLQUFLTyxHQUFHSSxPQUNwQyxDQUVBVCxZQUFBQSxHQUNFRixLQUFLWSxPQUFTLElBQUlDLEVBQUFBLE9BQU9iLEtBQUtPLElBQzlCUCxLQUFLWSxPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFaLFdBQUFBLEdBQ0VILEtBQUtnQixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBR0FiLFVBQUFBLEdBQ0VKLEtBQUtrQixLQUFPLElBQUlDLEVBQUFBLFFBQUssQ0FDbkJaLEdBQUlQLEtBQUtPLEdBQ1RTLE1BQU9oQixLQUFLZ0IsT0FJaEIsQ0FtQkFJLFFBQUFBLEdBRUVwQixLQUFLSyxTQUFTZ0IsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaER4QixLQUFLWSxPQUFPYSxZQUFZLENBQUVDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGFBQy9ELENBRUFHLE1BQUFBLEdBSUUzQixLQUFLSyxTQUFTdUIsT0FBTyxDQUNuQmhCLE9BQVFaLEtBQUtZLE9BQ2JJLE1BQU9oQixLQUFLZ0IsT0FFaEIsa0JDMUVGYSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgLy8gdGhpcy5jcmVhdGVDdWJlKClcbiAgICAvLyDku4DkuYjku4DkuYjlv5jorrBkZWZpbmXkuobvvIzlsLHnnIvov5nph4zmnInmsqHmnInooqvliJ3lp4vljJZcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8vSG9tZVxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAvLyBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBjcmVhdGVDdWJlKCkge1xuICAvLyAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gIC8vICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAvLyAgICAgdmVydGV4LFxuICAvLyAgICAgZnJhZ21lbnRcbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhmds5L2c5Li656ys5LiA5Liq5YWD57Sg5Lyg57uZTWVzaFxuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgLy8gICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAvLyAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhuebkuWtkOiuvue9ruS4uuebuOacuueahOWtkOWFg+e0oFxuICAvLyAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAvLyB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgLy8g5Yib5bu65LqGY2FtZXJh5LmL5ZCO5omN6IO95Yib5bu66YCP6KeG5Zu+XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIOWunuaXtua4suafk1xuICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZiZmQwZDk2MmZkNGRmNDM2ZDg3XCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImhvbWUiLCJIb21lIiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=