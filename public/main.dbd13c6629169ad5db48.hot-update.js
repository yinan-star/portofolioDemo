/*! For license information please see main.dbd13c6629169ad5db48.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/ogl/src/core/Renderer.js"),h=t("./node_modules/ogl/src/core/Camera.js"),n=t("./node_modules/ogl/src/core/Transform.js"),o=t("./app/components/Canvas/home/index.js");class c{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const s=e.touches?e.touches[0].clientX:e.clientX,t=e.touches?e.touches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const s=e.changedTouches?e.changedTouches[0].clientX:e.clientX,t=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"370d6fd766c06eba63a3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3NCLFVBQVUsQ0FDbEIvQyxFQUFHRCxLQUFLQyxFQUNSSSxFQUFHTCxLQUFLSyxHQUdkLENBRUE2QyxPQUFBQSxDQUFRUixHQUNIMUMsS0FBSzBCLE1BQ04xQixLQUFLMEIsS0FBS3dCLFFBQVFSLEVBRXRCLENBR0FTLE1BQUFBLEdBSUtuRCxLQUFLMEIsTUFDTjFCLEtBQUswQixLQUFLeUIsU0FFWm5ELEtBQUtXLFNBQVN5QyxPQUFPLENBQ25CaEMsT0FBUXBCLEtBQUtvQixPQUNiSSxNQUFPeEIsS0FBS3dCLE9BRWhCLGtCQ3BLRjZCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuICAgIHRoaXMueSA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cblxuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICAvLyB0aGlzLmNyZWF0ZUN1YmUoKVxuICAgIC8vIOS7gOS5iOS7gOS5iOW/mOiusGRlZmluZeS6hu+8jOWwseeci+i/memHjOacieayoeacieiiq+WIneWni+WMllxuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigge1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICAvLyDorql3ZWJnbOeahOiDjOaZr+iJsumAj+aYju+8jOS7juiAjOaYvuekumNzc+iuvue9rueahOminOiJslxuICAgICAgYW50aWFsaWFzOnRydWVcbiAgICAgIC8vIOaKl+mUr+m9v1xuICAgIH0pO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7IC8vVElQIHdvcmtzIGxpa2UgYSBjYW52YXMgY29udGV4dFxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgLy9Ib21lXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGNyZWF0ZUN1YmUoKSB7XG4gIC8vICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcbiAgLy8gICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gIC8vICAgICB2ZXJ0ZXgsXG4gIC8vICAgICBmcmFnbWVudFxuICAvLyAgIH0pXG4gIC8vICAgLy8g5bCGZ2zkvZzkuLrnrKzkuIDkuKrlhYPntKDkvKDnu5lNZXNoXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAvLyAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSwgXG4gIC8vICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAvLyAgIH0pXG4gIC8vICAgLy8g5bCG55uS5a2Q6K6+572u5Li655u45py655qE5a2Q5YWD57SgXG4gIC8vICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG4gIC8vIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoKSB7XG4gICAgLy8g5bCG5riy5p+T55qE55S75biD5bC65a+45aGr5ruh6KeG56qX5Y+jXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIC8vIOWIm+W7uuS6hmNhbWVyYeS5i+WQjuaJjeiDveWIm+W7uumAj+inhuWbvlxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCB9KTtcblxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56O1xuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0O1xuXG4gICAgdGhpcy5zaXplcyA9IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25SZXNpemUoeyBzaXplczogdGhpcy5zaXplcyB9KTtcbiAgICB9XG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgdGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPXhcbiAgICB0aGlzLnkuZW5kID15XG5cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID14XG4gICAgdGhpcy55LmVuZCA9eVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hVcCh7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpe1xuICAgIGlmKHRoaXMuaG9tZSl7XG4gICAgICB0aGlzLmhvbWUub25XaGVlbChldmVudClcbiAgICB9XG4gIH1cblxuICAvLyBMb29wXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyDlrp7ml7bmuLLmn5NcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIGlmKHRoaXMuaG9tZSl7XG4gICAgICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM3MGQ2ZmQ3NjZjMDZlYmE2M2EzXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsImNyZWF0ZUhvbWUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJob21lIiwiSG9tZSIsInNpemVzIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=