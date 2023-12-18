/*! For license information please see main.c6d751fc378fd37cf266.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new h.Texture(this.gl);const t=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=t.getAttribute("data-src"),this.image.onload=t=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e,s){this.extra=0,this.widthTotal=s,this.createBounds(t),this.upadteX(e),this.upadteY(0)}updateRotation(){this.mesh.rotation.z=i.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}upadteY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(t){this.bounds&&(this.updateRotation(),this.upadteScale(),this.upadteX(t),this.upadteY(0))}}}},(function(t){t.h=()=>"05cb4b5db3f7789bc704"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQU9uRCxHQUFLTSxPQUFPMkMsV0FDekN0RCxLQUFLMEIsS0FBS3lCLFNBQVM5QyxHQUFNTCxLQUFLRCxNQUFNMkMsTUFBUSxFQUFNMUMsS0FBSzBCLEtBQUs2QixNQUFNbEQsRUFBSSxFQUFNTCxLQUFLSyxFQUFJTCxLQUFLRCxNQUFNMkMsTUFBUzFDLEtBQUtJLEtBR2hILENBRUE4QixPQUFBQSxDQUFRNUIsRUFBSSxHQUNWTixLQUFLTSxHQUFLTixLQUFLOEIsT0FBTzJCLElBQU1uRCxHQUFLSyxPQUFPMEMsWUFDeENyRCxLQUFLMEIsS0FBS3lCLFNBQVM3QyxFQUFLTixLQUFLRCxNQUFNcUQsT0FBUyxFQUFNcEQsS0FBSzBCLEtBQUs2QixNQUFNakQsRUFBSSxFQUFNTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNcUQsT0FFaEdwRCxLQUFLMEIsS0FBS3lCLFNBQVM3QyxHQUEwRSxHQUFyRTJDLEtBQUtTLElBQUsxRCxLQUFLMEIsS0FBS3lCLFNBQVM5QyxFQUFJTCxLQUFLRCxNQUFNMkMsTUFBU08sS0FBS0MsR0FBSyxJQUFXLEVBSXBHLENBRUFTLE1BQUFBLENBQU9sQixHQUVBekMsS0FBSzhCLFNBRVY5QixLQUFLNEMsaUJBQ0w1QyxLQUFLZ0MsY0FDTGhDLEtBQUtpQyxRQUFRUSxHQUNiekMsS0FBS2tDLFFBQVEsR0FDZixrQkN6SkYwQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/lpITnkIbnhafniYdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIC8vIOWboOS4uuWbvueJh+aYr+S7jnByZXNtaWPmnaXnmoTvvIzmiYDku6XopoHljL/lkI1cbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcbiAgICAvLyDlpoLmnpzlm77niYfmuLLmn5PkuI3lh7rmnaXvvIzlsLHnnIvkuIvov5nph4xcbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcblxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIC8vIOWwhm1lc2jlkoxnYWxsZXJ55omA6K6+5a6a55qE5bC65a+457uR5a6aXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgLy8g5Yid5aeL5YyWc2l6ZXPvvIzorqnku5blj5jmiJDkuIvpnaLlj6/ku6Xph43lpI3liKnnlKjnmoTlsZ7mgKdcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuICB9XG5cbiAgLy8gQW5pbWF0aW9ucy5cbiAgc2hvdygpIHtcbiAgICBHU0FQLmZyb21Ubyh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMFxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgR1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pXG4gIH1cblxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsLCB3aWR0aCkge1xuICAgIHRoaXMuZXh0cmEgPSAwXG4gICAgdGhpcy53aWR0aFRvdGFsID0gd2lkdGhcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBhZHRlWChzY3JvbGwpXG4gICAgdGhpcy51cGFkdGVZKDApXG5cbiAgfVxuXG4gIC8vIExvb3BcbiAgdXBkYXRlUm90YXRpb24oKSB7XG4gICAgLy8g6KeG56qX55qE5bem5Y+z5Lik6L65XG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLm1hcFJhbmdlKFxuICAgICAgLXRoaXMuc2l6ZXMud2lkdGggLyAyLCBcbiAgICAgIHRoaXMuc2l6ZXMud2lkdGggLyAyLCBcbiAgICAgIE1hdGguUEkgKiAwLjEsIFxuICAgICAgLU1hdGguUEkgKiAwLjEsIFxuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnhcbiAgICAgIClcbiAgfVxuXG4gIHVwYWR0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICAvLyDmiJHnjJzmmK/miop3ZWJHbOWbvueJh+WPmOaIkOWNleS9jeWQkemHj+eEtuWQjuWGjeS5mOS7peato+ehrueahOWbvueJh+eahOWuvemrmO+8jOiuqei/meS6m+WbvueJh+WwuuWvuG1hdGNo5Y6f5Zu+XG5cbiAgICAvLyBjb25zdCBzY2FsZSA9IEdTQVAudXRpbHMubWFwUmFuZ2UoMCwgdGhpcy5zaXplcy53aWR0aCAvIDIsIDAuMSwgMCwgTWF0aC5hYnModGhpcy5tZXNoLnBvc2l0aW9uLngpKVxuICAgIC8vIC8vIOi+k+WFpeiMg+WbtOWGheeahOafkOS4quWAvO+8jOeUqOadpeaYoOWwhOWIsOi+k+WHuuiMg+WbtO+8jOWJjemdouS4pOWvueWwseaYr+WvueW6lOeahOi+k+WFpeWPguaVsOWSjOi+k+WHuuWPguaVsOeahOaYoOWwhOOAguacgOWQjuS4gOS4quWPguaVsOWImeaYr+mcgOimgei/m+ihjOaYoOWwhOeahOWFt+S9k+WAvFxuICAgIC8vIC8vIOW9k+i+k+WFpeeahOacgOWwj+WAvDDvvIzlr7nlupTovpPlh7rnmoTmnIDlsI/lgLwwLjHjgILovpPlhaXnmoTmnIDlpKflgLzvvIh0aGlzLnNpemVzLi4u77yJ5a+55bqU77yM6L6T5Ye655qE5pyA5aSn5YC8MOOAglxuICAgIC8vIC8vIOi2iui/nOemu+WOn+eCue+8iDAgLS0+IHRoaXMuc2l6ZXMud2lkdGggLyAyKeaXtu+8jHNjYWxl55qE5YC86LaK5bCP77yIMC4xIC0tPiAwKVxuICAgIC8vIHRoaXMubWVzaC5zY2FsZS54ICs9IHNjYWxlXG4gICAgLy8gLy8g5Zug5q2k5Zyo5Lit6Ze055qEeOeahOavlOS+i+aYr+acgOWkp+eahFxuICAgIC8vIHRoaXMubWVzaC5zY2FsZS55ICs9IHNjYWxlXG4gIH1cblxuICB1cGFkdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYVxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXG4gICAgLy8g6L+Z5LiqeOaYr+S5i+WJjeWcqGluZGV46YeM6K6+572u55qE6byg5qCH5ouW5Yqo55qE5b2T5YmN55qEeCx555qE6Led56a744CC5omA5Lul77yM5oOz56e75Yqo5Yy56YWN5aW955qE5Zu+54mH77yM6ZyA6KaB5Zyo5pW05Liq5a655Zmo5Yqg5LiK6byg5qCHeCx556e75Yqo55qE6Led56a7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKHRoaXMubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqNDAgLSA0MFxuICAgIC8vIOe0r+WKoOaYr+aWueWQke+8jOWQkeS4iui/mOaYr+WQkeS4i1xuICAgIC8vIE1hdGguUEnmmK/lvKfluqbvvJ9cbiAgICAvLyA3NeS5n+aYr+W8p+W6plxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIC8vIOS7peS4i+eahOaWueazleS8muS4jeaWreabtOaWsOaJp+ihjFxuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVSb3RhdGlvbigpXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDVjYjRiNWRiM2Y3Nzg5YmM3MDRcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsInNob3ciLCJHU0FQIiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJ3aWR0aCIsIndpZHRoVG90YWwiLCJ1cGRhdGVSb3RhdGlvbiIsInJvdGF0aW9uIiwieiIsInV0aWxzIiwibWFwUmFuZ2UiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInRvcCIsImNvcyIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==