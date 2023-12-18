/*! For license information please see main.55a4ea4a64c23fdadd7f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var n=t("./node_modules/ogl/src/core/Renderer.js"),s=t("./node_modules/ogl/src/core/Camera.js"),i=t("./node_modules/ogl/src/core/Transform.js"),o=t("./node_modules/ogl/src/extras/Box.js"),a=t("./node_modules/ogl/src/core/Program.js"),c=t("./node_modules/ogl/src/core/Mesh.js");class m{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createCube()}createRenderer(){this.renderer=new n.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new s.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new i.Transform}createCube(){this.geometry=new o.Box(this.gl),this.program=new a.Program(this.gl,{vertex:"\n        attribute vec3 position;\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 projectionMatrix;\n\n        void main() {\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n        ",fragment:"\n      void main() {\n          gl_FragColor = vec4(1.0);\n      }\n      "}),this.mesh=new c.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"11286d12c8b826102788"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NWE0ZWE0YTY0YzIzZmRhZGQ3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVpBSWUsTUFBTUEsRUFDbkJDLFdBQUFBLEdBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUdMSCxLQUFLSSxZQUVQLENBRUFILGNBQUFBLEdBQ0VELEtBQUtLLFNBQVcsSUFBSUMsRUFBQUEsU0FFcEJOLEtBQUtPLEdBQUtQLEtBQUtLLFNBQVNFLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZVixLQUFLTyxHQUFHSSxPQUNwQyxDQUVBVCxZQUFBQSxHQUNFRixLQUFLWSxPQUFTLElBQUlDLEVBQUFBLE9BQU9iLEtBQUtPLElBQzlCUCxLQUFLWSxPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFaLFdBQUFBLEdBQ0VILEtBQUtnQixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBVUFiLFVBQUFBLEdBQ0VKLEtBQUtrQixTQUFXLElBQUlDLEVBQUFBLElBQUluQixLQUFLTyxJQUM3QlAsS0FBS29CLFFBQVUsSUFBSUMsRUFBQUEsUUFBUXJCLEtBQUtPLEdBQUksQ0FDbENlLE9BQW9CLHVQQVVwQkMsU0FBc0IsZ0ZBT3hCdkIsS0FBS3dCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3pCLEtBQUtPLEdBQUksQ0FDNUJXLFNBQVNsQixLQUFLa0IsU0FDZEUsUUFBUXBCLEtBQUtvQixVQUdmcEIsS0FBS3dCLEtBQUtFLFVBQVUxQixLQUFLZ0IsTUFFM0IsQ0FHQVcsUUFBQUEsR0FFRTNCLEtBQUtLLFNBQVN1QixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRC9CLEtBQUtZLE9BQU9vQixZQUFZLENBQUVDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGFBZ0IvRCxDQUVBRyxNQUFBQSxHQUVFbEMsS0FBS3dCLEtBQUtXLFNBQVNDLEdBQUssSUFDeEJwQyxLQUFLd0IsS0FBS1csU0FBU0UsR0FBSyxJQUN4QnJDLEtBQUtLLFNBQVNpQyxPQUFPLENBQ25CMUIsT0FBUVosS0FBS1ksT0FDYkksTUFBT2hCLEtBQUtnQixPQUVoQixrQkNyR0Z1QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBNZXNoLCBCb3gsIFByb2dyYW0gfSBmcm9tICdvZ2wnO1xuXG4vLyBpbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICAvLyAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgLy8gICAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgdGhpcy5jcmVhdGVDdWJlKClcbiAgICAvLyDku4DkuYjku4DkuYjlv5jorrBkZWZpbmXkuobvvIzlsLHnnIvov5nph4zmnInmsqHmnInooqvliJ3lp4vljJZcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8vICAgY3JlYXRlSG9tZSgpIHtcbiAgLy8gICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgLy8gICAgICAgZ2w6IHRoaXMuZ2wsXG4gIC8vICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAvLyAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAvLyAgICAgfSk7XG5cbiAgLy8gICB9XG4gIGNyZWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICB2ZXJ0ZXg6IC8qIGdsc2wgKi8gYFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcblxuICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgZnJhZ21lbnQ6IC8qIGdsc2wgKi8gYFxuICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcbiAgICAgIH1cbiAgICAgIGBcbiAgICB9KVxuICAgIC8vIOWwhmds5L2c5Li656ys5LiA5Liq5YWD57Sg5Lyg57uZTWVzaFxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgICB9KVxuICAgIC8vIOWwhuebkuWtkOiuvue9ruS4uuebuOacuueahOWtkOWFg+e0oFxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyDlsIbmuLLmn5PnmoTnlLvluIPlsLrlr7jloavmu6Hop4bnqpflj6NcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgLy8g5Yib5bu65LqGY2FtZXJh5LmL5ZCO5omN6IO95Yib5bu66YCP6KeG5Zu+XG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0IH0pO1xuXG4gICAgLy8gICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAvLyAgICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uejtcbiAgICAvLyAgICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3Q7XG5cbiAgICAvLyAgICAgdGhpcy5zaXplcyA9IHtcbiAgICAvLyAgICAgICBoZWlnaHQsXG4gICAgLy8gICAgICAgd2lkdGgsXG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgICAgIHRoaXMuaG9tZS5vblJlc2l6ZSh7XG4gICAgLy8gICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyDlrp7ml7bmuLLmn5NcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMTI4NmQxMmM4YjgyNjEwMjc4OFwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJnZW9tZXRyeSIsIkJveCIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==