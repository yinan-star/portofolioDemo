/*! For license information please see main.11f08ad03dd1153e4600.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/ogl/src/core/Renderer.js"),h=t("./node_modules/ogl/src/core/Camera.js"),n=t("./node_modules/ogl/src/core/Transform.js"),o=t("./app/components/Canvas/home/index.js");class c{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const s=e.touches?e.touches[0].clientX:e.clientX,t=e.touches?e.touches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const s=e.changedTouches?e.changedTouches[0].clientX:e.clientX,t=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"7672f167bc3b9e1776b3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCOUMsRUFBR0QsS0FBS0MsRUFDUkksRUFBR0wsS0FBS0ssR0FHZCxDQUdBNEMsTUFBQUEsR0FJS2pELEtBQUt5QixNQUNOekIsS0FBS3lCLEtBQUt3QixTQUVaakQsS0FBS1csU0FBU3VDLE9BQU8sQ0FDbkIvQixPQUFRbkIsS0FBS21CLE9BQ2JJLE1BQU92QixLQUFLdUIsT0FFaEIsa0JDNUpGNEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuXG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIC8vIHRoaXMuY3JlYXRlQ3ViZSgpXG4gICAgLy8g5LuA5LmI5LuA5LmI5b+Y6K6wZGVmaW5l5LqG77yM5bCx55yL6L+Z6YeM5pyJ5rKh5pyJ6KKr5Yid5aeL5YyWXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCB7XG4gICAgICBhbHBoYTogdHJ1ZVxuICAgICAgLy8g6K6pd2ViZ2znmoTog4zmma/oibLpgI/mmI7vvIzku47ogIzmmL7npLpjc3Porr7nva7nmoTpopzoibJcbiAgICB9KTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8vSG9tZVxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBjcmVhdGVDdWJlKCkge1xuICAvLyAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gIC8vICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAvLyAgICAgdmVydGV4LFxuICAvLyAgICAgZnJhZ21lbnRcbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhmds5L2c5Li656ys5LiA5Liq5YWD57Sg5Lyg57uZTWVzaFxuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgLy8gICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAvLyAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhuebkuWtkOiuvue9ruS4uuebuOacuueahOWtkOWFg+e0oFxuICAvLyAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAvLyB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIOWwhua4suafk+eahOeUu+W4g+WwuuWvuOWhq+a7oeinhueql+WPo1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAvLyDliJvlu7rkuoZjYW1lcmHkuYvlkI7miY3og73liJvlu7rpgI/op4blm75cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uejtcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdDtcblxuICAgIHRoaXMuc2l6ZXMgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaERvd24oe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID14XG4gICAgdGhpcy55LmVuZCA9eVxuXG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaE1vdmUoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9eFxuICAgIHRoaXMueS5lbmQgPXlcblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoVXAoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBMb29wXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyDlrp7ml7bmuLLmn5NcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIGlmKHRoaXMuaG9tZSl7XG4gICAgICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc2NzJmMTY3YmMzYjllMTc3NmIzXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsImNyZWF0ZUhvbWUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJob21lIiwiSG9tZSIsInNpemVzIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==