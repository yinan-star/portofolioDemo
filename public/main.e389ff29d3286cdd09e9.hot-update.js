/*! For license information please see main.e389ff29d3286cdd09e9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/home/index.js"),c=s("./app/components/Canvas/about/index.js"),a=s("./app/components/Canvas/collections/index.js");class l{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(){this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.home&&this.home.hide()}onChangeEnd(e){"about"===e?this.createAbout():this.about&&this.destroyAbout(),"collections"===e?this.createCollections():this.collections&&this.destroyCollections(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const o={sizes:this.sizes};this.about&&this.about.onResize(o),this.collections&&this.collections.onResize(o),this.home&&this.home.onResize(o)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t),this.home&&this.home.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.about&&this.about.onTouchMove(o),this.collections&&this.collections.onTouchMove(o),this.home&&this.home.onTouchMove(o)}onTouchUp(e){this.isDown=!1;const t=e.changedTouches?e.changedTouches[0].clientX:e.clientX,s=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.about&&this.about.onTouchUp(o),this.collections&&this.collections.onTouchUp(o),this.home&&this.home.onTouchUp(o)}onWheel(e){this.home&&this.home.onWheel(e),this.collections&&this.collections.onWheel(e)}update(e){this.about&&this.about.update(e),this.collections&&this.collections.update(),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"fd5a23b816924ed1d1fc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLMEQsUUFBUyxFQUNkLE1BQU16RCxFQUFJd0QsRUFBTU8sZUFBaUJQLEVBQU1PLGVBQWUsR0FBR0osUUFBVUgsRUFBTUcsUUFDbkV2RCxFQUFJb0QsRUFBTU8sZUFBaUJQLEVBQU1PLGVBQWUsR0FBR0gsUUFBVUosRUFBTUksUUFFekU3RCxLQUFLQyxFQUFFRyxJQUFLSCxFQUNaRCxLQUFLSyxFQUFFRCxJQUFLQyxFQUVaLE1BQU1rRCxFQUFTLENBQ2J0RCxFQUFHRCxLQUFLQyxFQUNSSSxFQUFHTCxLQUFLSyxHQUdOTCxLQUFLZ0MsT0FDUGhDLEtBQUtnQyxNQUFNK0IsVUFBVVIsR0FHbkJ2RCxLQUFLb0MsYUFDUHBDLEtBQUtvQyxZQUFZMkIsVUFBVVIsR0FHekJ2RCxLQUFLMEIsTUFDUDFCLEtBQUswQixLQUFLcUMsVUFBVVIsRUFFeEIsQ0FFQVUsT0FBQUEsQ0FBUVIsR0FDSHpELEtBQUswQixNQUNOMUIsS0FBSzBCLEtBQUt1QyxRQUFRUixHQUdqQnpELEtBQUtvQyxhQUNOcEMsS0FBS29DLFlBQVk2QixRQUFRUixFQUU3QixDQUdBUyxNQUFBQSxDQUFPQyxHQUlGbkUsS0FBS2dDLE9BQ05oQyxLQUFLZ0MsTUFBTWtDLE9BQU9DLEdBSWpCbkUsS0FBS29DLGFBQ05wQyxLQUFLb0MsWUFBWThCLFNBR2hCbEUsS0FBSzBCLE1BQ04xQixLQUFLMEIsS0FBS3dDLFNBR1psRSxLQUFLVSxTQUFTMEQsT0FBTyxDQUNuQmpELE9BQVFuQixLQUFLbUIsT0FDYkksTUFBT3ZCLEtBQUt1QixPQUVoQixrQkN2VEY4QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g6L+Z5Liq5paH5Lu255qE5LiK5LiA57qn5Lqk5o6l5pivY29tcG9uZW50c+eahGluZGV4Lmpz5paH5Lu2XG5pbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vY29sbGVjdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHt0ZW1wbGF0ZX0pIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcbiAgICAvLyB0ZW1wbGF0ZeaYr+aVsOaNruaooeeJiFxuICAgIHRoaXMueCA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuXG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICAvLyB0aGlzLmNyZWF0ZUN1YmUoKVxuICAgIC8vIOS7gOS5iOS7gOS5iOW/mOiusGRlZmluZeS6hu+8jOWwseeci+i/memHjOacieayoeacieiiq+WIneWni+WMllxuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigge1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICAvLyDorql3ZWJnbOeahOiDjOaZr+iJsumAj+aYju+8jOS7juiAjOaYvuekumNzc+iuvue9rueahOminOiJslxuICAgICAgYW50aWFsaWFzOnRydWVcbiAgICAgIC8vIOaKl+mUr+m9v1xuICAgIH0pO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7IC8vVElQIHdvcmtzIGxpa2UgYSBjYW52YXMgY29udGV4dFxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgLyoqXG4gICAqIEhvbWUuXG4gICAqL1xuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuXG4gIH1cblxuICBkZXN0cm95SG9tZSgpe1xuICAgIGlmKCF0aGlzLmhvbWUpIHJldHVyblxuICAgIC8vIOWmguaenOS4jeWtmOWcqGhvbWXvvIzlsLHplIDmr4Fob21l77yM77yB5piv5LiN5oiQ56uL55qE5oSP5oCd77yM5p2h5Lu25Li65YGHXG4gICAgdGhpcy5ob21lLmRlc3Ryb3koKVxuICAgIHRoaXMuaG9tZSA9IG51bGxcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFib3V0LlxuICAgKi9cbiAgY3JlYXRlQWJvdXQoKXtcbiAgICB0aGlzLmFib3V0ID0gbmV3IEFib3V0KHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveUFib3V0KCl7XG4gICAgaWYoIXRoaXMuYWJvdXQpIHJldHVyblxuICAgIC8vIOWmguaenOS4jeWtmOWcqGFib3V077yM5bCx6ZSA5q+BYWJvdXTvvIzvvIHmmK/kuI3miJDnq4vnmoTmhI/mgJ3vvIzmnaHku7bkuLrlgYdcbiAgICB0aGlzLmFib3V0LmRlc3Ryb3koKVxuICAgIHRoaXMuYWJvdXQgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbnMuXG4gICAqL1xuICBjcmVhdGVDb2xsZWN0aW9ucygpe1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBuZXcgQ29sbGVjdGlvbnMoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95Q29sbGVjdGlvbnMoKXtcbiAgICBpZighdGhpcy5jb2xsZWN0aW9ucykgcmV0dXJuXG4gICAgLy8g5aaC5p6c5LiN5a2Y5ZyoQ29sbGVjdGlvbnPvvIzlsLHplIDmr4FDb2xsZWN0aW9uc++8jO+8geaYr+S4jeaIkOeri+eahOaEj+aAne+8jOadoeS7tuS4uuWBh1xuICAgIHRoaXMuY29sbGVjdGlvbnMuZGVzdHJveSgpXG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IG51bGxcbiAgfVxuXG4gIC8vIGNyZWF0ZUN1YmUoKSB7XG4gIC8vICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcbiAgLy8gICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gIC8vICAgICB2ZXJ0ZXgsXG4gIC8vICAgICBmcmFnbWVudFxuICAvLyAgIH0pXG4gIC8vICAgLy8g5bCGZ2zkvZzkuLrnrKzkuIDkuKrlhYPntKDkvKDnu5lNZXNoXG4gIC8vICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAvLyAgICAgZ2VvbWV0cnk6dGhpcy5nZW9tZXRyeSwgXG4gIC8vICAgICBwcm9ncmFtOnRoaXMucHJvZ3JhbVxuICAvLyAgIH0pXG4gIC8vICAgLy8g5bCG55uS5a2Q6K6+572u5Li655u45py655qE5a2Q5YWD57SgXG4gIC8vICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG4gIC8vIH1cblxuICAvLyBFdmVudHNcbiAgXG5cbiAgLyoqXG4gICAqIEVWRU5UU1xuICAgKi9cbiAgb25QcmVsb2FkZWQoKXtcbiAgICB0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG4gIH1cbiAgb25DaGFuZ2VTdGFydCgpe1xuICAgIGlmKHRoaXMuYWJvdXQpe1xuICAgICAgdGhpcy5hYm91dC5oaWRlKClcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbGxlY3Rpb25zKXtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXG4gICAgfVxuXG4gICAgaWYodGhpcy5ob21lKXtcbiAgICAgIHRoaXMuaG9tZS5oaWRlKClcbiAgICB9XG4gIH1cbiAgb25DaGFuZ2VFbmQodGVtcGxhdGUpe1xuICAgIC8vIOWwseaYr+W9k+eUqOaIt2NoYW5nZSB0aGUgcm91dGVcbiAgICBpZih0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jyl7XG4gICAgICB0aGlzLmNyZWF0ZUFib3V0KClcbiAgICB9ZWxzZSBpZiAodGhpcy5hYm91dCl7XG4gICAgICB0aGlzLmRlc3Ryb3lBYm91dCgpXG4gICAgfVxuXG4gICAgaWYodGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycpe1xuICAgICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9ucygpXG4gICAgfWVsc2UgaWYgKHRoaXMuY29sbGVjdGlvbnMpe1xuICAgICAgdGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuICAgIH1cblxuICAgIGlmKHRlbXBsYXRlID09PSAnaG9tZScpe1xuICAgICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICB9ZWxzZSB7XG4gICAgICB0aGlzLmRlc3Ryb3lIb21lKClcbiAgICB9XG5cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIOWwhua4suafk+eahOeUu+W4g+WwuuWvuOWhq+a7oeinhueql+WPo1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAvLyDliJvlu7rkuoZjYW1lcmHkuYvlkI7miY3og73liJvlu7rpgI/op4blm75cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uejtcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdDtcblxuICAgIHRoaXMuc2l6ZXMgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsdWVzID0ge3NpemVzOiB0aGlzLnNpemVzfVxuXG4gICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG4gICAgdGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICB0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPXhcbiAgICB0aGlzLnkuZW5kID15XG5cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIGlmICh0aGlzLmFib3V0KSB7XG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9eFxuICAgIHRoaXMueS5lbmQgPXlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIGlmICh0aGlzLmFib3V0KSB7XG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaFVwKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvbldoZWVsKGV2ZW50KXtcbiAgICBpZih0aGlzLmhvbWUpe1xuICAgICAgdGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG4gICAgfVxuXG4gICAgaWYodGhpcy5jb2xsZWN0aW9ucyl7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uV2hlZWwoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgLy8gTG9vcFxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgLy8g5a6e5pe25riy5p+TXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnggKz0gMC4wMVxuICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi55ICs9IDAuMDFcbiAgICBpZih0aGlzLmFib3V0KXtcbiAgICAgIHRoaXMuYWJvdXQudXBkYXRlKHNjcm9sbClcbiAgICB9XG4gICAgLy8g5Zug5Li65Y+q5pyJYWJvdXQgcGFnZeacieS4i+a7kVxuXG4gICAgaWYodGhpcy5jb2xsZWN0aW9ucyl7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLnVwZGF0ZSgpXG4gICAgfVxuXG4gICAgaWYodGhpcy5ob21lKXtcbiAgICAgIHRoaXMuaG9tZS51cGRhdGUoKVxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZVxuICAgIH0pXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZDVhMjNiODE2OTI0ZWQxZDFmY1wiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGVzdHJveUNvbGxlY3Rpb25zIiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsIm9uQ2hhbmdlU3RhcnQiLCJoaWRlIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=