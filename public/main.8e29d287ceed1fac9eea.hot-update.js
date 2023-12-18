/*! For license information please see main.8e29d287ceed1fac9eea.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/ogl/src/core/Renderer.js"),h=t("./node_modules/ogl/src/core/Camera.js"),n=t("./node_modules/ogl/src/core/Transform.js"),o=t("./app/components/Canvas/home/index.js");class c{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const s=e.touches?e.touches[0].clientX:e.clientX,t=e.touches?e.touches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const s=e.changedTouches?e.changedTouches[0].clientX:e.clientX,t=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"dbd13c6629169ad5db48"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3NCLFVBQVUsQ0FDbEIvQyxFQUFHRCxLQUFLQyxFQUNSSSxFQUFHTCxLQUFLSyxHQUdkLENBR0E2QyxNQUFBQSxHQUlLbEQsS0FBSzBCLE1BQ04xQixLQUFLMEIsS0FBS3dCLFNBRVpsRCxLQUFLVyxTQUFTd0MsT0FBTyxDQUNuQi9CLE9BQVFwQixLQUFLb0IsT0FDYkksTUFBT3hCLEtBQUt3QixPQUVoQixrQkM5SkY0QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cbiAgICB0aGlzLnkgPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG5cbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgLy8gdGhpcy5jcmVhdGVDdWJlKClcbiAgICAvLyDku4DkuYjku4DkuYjlv5jorrBkZWZpbmXkuobvvIzlsLHnnIvov5nph4zmnInmsqHmnInooqvliJ3lp4vljJZcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoIHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgLy8g6K6pd2ViZ2znmoTog4zmma/oibLpgI/mmI7vvIzku47ogIzmmL7npLpjc3Porr7nva7nmoTpopzoibJcbiAgICAgIGFudGlhbGlhczp0cnVlXG4gICAgICAvLyDmipfplK/pvb9cbiAgICB9KTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8vSG9tZVxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBjcmVhdGVDdWJlKCkge1xuICAvLyAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gIC8vICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAvLyAgICAgdmVydGV4LFxuICAvLyAgICAgZnJhZ21lbnRcbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhmds5L2c5Li656ys5LiA5Liq5YWD57Sg5Lyg57uZTWVzaFxuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgLy8gICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAvLyAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhuebkuWtkOiuvue9ruS4uuebuOacuueahOWtkOWFg+e0oFxuICAvLyAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAvLyB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIOWwhua4suafk+eahOeUu+W4g+WwuuWvuOWhq+a7oeinhueql+WPo1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAvLyDliJvlu7rkuoZjYW1lcmHkuYvlkI7miY3og73liJvlu7rpgI/op4blm75cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uejtcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdDtcblxuICAgIHRoaXMuc2l6ZXMgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaERvd24oe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID14XG4gICAgdGhpcy55LmVuZCA9eVxuXG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaE1vdmUoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9eFxuICAgIHRoaXMueS5lbmQgPXlcblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoVXAoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBMb29wXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyDlrp7ml7bmuLLmn5NcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIGlmKHRoaXMuaG9tZSl7XG4gICAgICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRiZDEzYzY2MjkxNjlhZDVkYjQ4XCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsImNyZWF0ZUhvbWUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJob21lIiwiSG9tZSIsInNpemVzIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==