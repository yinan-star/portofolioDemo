/*! For license information please see main.167b5ed58bed8fa1848d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/ogl/src/core/Renderer.js"),h=t("./node_modules/ogl/src/core/Camera.js"),n=t("./node_modules/ogl/src/core/Transform.js"),o=t("./app/components/Canvas/home/index.js");class c{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const s=e.touches?e.touches[0].clientX:e.clientX,t=e.touches?e.touches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const s=e.changedTouches?e.changedTouches[0].clientX:e.clientX,t=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=s,this.y.end=t,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"5746081d9a27f8a15fea"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCOUMsRUFBR0QsS0FBS0MsRUFDUkksRUFBR0wsS0FBS0ssR0FHZCxDQUdBNEMsTUFBQUEsR0FJS2pELEtBQUt5QixNQUNOekIsS0FBS3lCLEtBQUt3QixTQUVaakQsS0FBS1csU0FBU3VDLE9BQU8sQ0FDbkIvQixPQUFRbkIsS0FBS21CLE9BQ2JJLE1BQU92QixLQUFLdUIsT0FFaEIsa0JDM0pGNEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuXG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIC8vIHRoaXMuY3JlYXRlQ3ViZSgpXG4gICAgLy8g5LuA5LmI5LuA5LmI5b+Y6K6wZGVmaW5l5LqG77yM5bCx55yL6L+Z6YeM5pyJ5rKh5pyJ6KKr5Yid5aeL5YyWXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCB7XG4gICAgICBhbHBoYTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7IC8vVElQIHdvcmtzIGxpa2UgYSBjYW52YXMgY29udGV4dFxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgLy9Ib21lXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGNyZWF0ZUN1YmUoKSB7XG4gIC8vICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcbiAgLy8gICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gIC8vICAgICB2ZXJ0ZXgsXG4gIC8vICAgICBmcmFnbWVudFxuICAvLyAgIH0pXG4gIC8vICAgLy8g5bCGZ2zkvZzkuLrnrKzkuIDkuKrlhYPntKDkvKDnu5lNZXNoXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAvLyAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSwgXG4gIC8vICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAvLyAgIH0pXG4gIC8vICAgLy8g5bCG55uS5a2Q6K6+572u5Li655u45py655qE5a2Q5YWD57SgXG4gIC8vICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG4gIC8vIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoKSB7XG4gICAgLy8g5bCG5riy5p+T55qE55S75biD5bC65a+45aGr5ruh6KeG56qX5Y+jXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIC8vIOWIm+W7uuS6hmNhbWVyYeS5i+WQjuaJjeiDveWIm+W7uumAj+inhuWbvlxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCB9KTtcblxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56O1xuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0O1xuXG4gICAgdGhpcy5zaXplcyA9IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25SZXNpemUoeyBzaXplczogdGhpcy5zaXplcyB9KTtcbiAgICB9XG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgdGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPXhcbiAgICB0aGlzLnkuZW5kID15XG5cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID14XG4gICAgdGhpcy55LmVuZCA9eVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hVcCh7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIExvb3BcbiAgdXBkYXRlKCkge1xuICAgIC8vIOWunuaXtua4suafk1xuICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG4gICAgaWYodGhpcy5ob21lKXtcbiAgICAgIHRoaXMuaG9tZS51cGRhdGUoKVxuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmVcbiAgICB9KVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTc0NjA4MWQ5YTI3ZjhhMTVmZWFcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwiY3JlYXRlSG9tZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsImNoYW5nZWRUb3VjaGVzIiwidXBkYXRlIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9