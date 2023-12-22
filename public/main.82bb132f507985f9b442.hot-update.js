/*! For license information please see main.82bb132f507985f9b442.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Detail/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var i=t("./node_modules/ogl/src/extras/Plane.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-fragment.glsl"),o=t("./app/shaders/plane-vertex.glsl");const r=class{constructor({gl:e,scene:s,sizes:t,transition:h}){this.id="detail",this.element=document.querySelector(".detail__media__image"),this.gl=e,this.scene=s,this.sizes=t,this.transition=h,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes}),this.show()}createTexture(){const e=this.element.getAttribute("data-src");this.texture=window.TEXTURES[e]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:1},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){this.transition&&this.transition.animate(this.mesh,(e=>{this.program.uniforms.uAlpha.value=1}))}hide(){}onResize(e){this.createBounds(e),this.upadteX(),this.upadteY()}onTouchDown(){}onTouchMove(){}onTouchUp(){}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}upadteY(){this.y=this.bounds.top/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(){this.bounds&&(this.upadteX(),this.upadteY())}destroy(){this.scene.removeChild(this.mesh)}}}},(function(e){e.h=()=>"4b6f00b757585ebeffa3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS2dDLFVBRVAsQ0FJQW1CLE9BQUFBLEdBQ0VuRCxLQUFLSCxNQUFNdUQsWUFBWXBELEtBQUt5QixLQUNoQyxrQkNySkE0QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0RldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcbiAgICB0aGlzLmlkID0gJ2RldGFpbCdcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxfX21lZGlhX19pbWFnZScpXG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoe3NpemVzOiB0aGlzLnNpemVzfSk7XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIC8vIOWcqHNoYWRlcumHjOmdouWBmueahOa4kOWPmFxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZV1cbiAgICAvLyB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG4gICAgLy8gY29uc3QgaW1hZ2UgPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cbiAgICAvLyB0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG4gICAgLy8gdGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG4gICAgLy8gLy8g5Zug5Li65Zu+54mH5piv5LuOcHJlc21pY+adpeeahO+8jOaJgOS7peimgeWMv+WQjVxuICAgIC8vIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgLy8gdGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuICAgIC8vIC8vIOWmguaenOWbvueJh+aYr+m7keiJsueahOadkOi0qO+8jOeci+i/memHjO+8jGdldEF0dHJpYnV0ZeaYr+ebtOaOpWltYWdlLuiAjOS4jeaYr3RoaXMuaW1hZ2VcbiAgICAvLyAvLyB0aGlzLmltYWdlIOW9k+WJjeexu+eahOWunuS+i+WvueixoeS4iueahOS4gOS4quWxnuaAp++8jGltYWdlIOWPquaYr+S4gOS4quWcqOaWueazleS4reS4tOaXtuWtmOWCqOWbvueJh+WFg+e0oOeahOWPmOmHj1xuICB9XG5cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuICAgIC8vIG1lc2jmmK9zY2VuZeeahOWtkOWFg+e0oOOAglxuXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgLy8g5bCGbWVzaOWSjGdhbGxlcnnmiYDorr7lrprnmoTlsLrlr7jnu5HlrppcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICAvLyDliJ3lp4vljJZzaXplc++8jOiuqeS7luWPmOaIkOS4i+mdouWPr+S7pemHjeWkjeWIqeeUqOeahOWxnuaAp1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwYWR0ZVNjYWxlKClcbiAgICB0aGlzLnVwYWR0ZVgoKVxuICAgIHRoaXMudXBhZHRlWSgpXG4gIH1cblxuICAvLyBBbmltYXRpb25zLlxuICBzaG93KCkge1xuICAgIGlmKHRoaXMudHJhbnNpdGlvbil7XG4gICAgICB0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZSh0aGlzLm1lc2gsIF8gPT57XG4gICAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEudmFsdWUgPSAxXG4gICAgICB9KVxuICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGhpZGUoKSB7XG5cbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShzaXplcykge1xuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBhZHRlWCgpXG4gICAgdGhpcy51cGFkdGVZKClcblxuICB9XG5cbiAgb25Ub3VjaERvd24oKXtcblxuICB9XG5cbiAgb25Ub3VjaE1vdmUoKXtcblxuICB9XG5cbiAgb25Ub3VjaFVwKCl7XG4gICAgXG4gIH1cblxuICAvLyBMb29wXG4gIHVwYWR0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICAvLyDmiJHnjJzmmK/miop3ZWJHbOWbvueJh+WPmOaIkOWNleS9jeWQkemHj+eEtuWQjuWGjeS5mOS7peato+ehrueahOWbvueJh+eahOWuvemrmO+8jOiuqei/meS6m+WbvueJh+WwuuWvuG1hdGNo5Y6f5Zu+XG5cblxuICB9XG5cbiAgdXBhZHRlWCgpIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKVxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXG4gICAgLy8g6L+Z5LiqeOaYr+S5i+WJjeWcqGluZGV46YeM6K6+572u55qE6byg5qCH5ouW5Yqo55qE5b2T5YmN55qEeCx555qE6Led56a744CC5omA5Lul77yM5oOz56e75Yqo5Yy56YWN5aW955qE5Zu+54mH77yM6ZyA6KaB5Zyo5pW05Liq5a655Zmo5Yqg5LiK6byg5qCHeCx556e75Yqo55qE6Led56a7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuXG4gIH1cbiAgLyoqXG4gICAqIERlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLm1lc2gpXG59XG5cblxuXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YjZmMDBiNzU3NTg1ZWJlZmZhM1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsInNob3ciLCJpbWFnZSIsImdldEF0dHJpYnV0ZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsImFuaW1hdGUiLCJfIiwiaGlkZSIsIm9uUmVzaXplIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJ4IiwieSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==