/*! For license information please see main.c6132ec434ca969bba7e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new h.Texture(this.gl);const t=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=t.getAttribute("data-src"),this.image.onload=t=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e,s){this.extra=0,this.widthTotal=s,this.createBounds(t),this.upadteX(e),this.upadteY(0)}updateRotation(){const t=i.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.2*Math.PI,.2*-Math.PI,this.mesh.position.x);this.mesh.rotation.z=t}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}upadteY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=75*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-75}update(t){this.bounds&&(this.updateRotation(),this.upadteX(t),this.upadteY(0))}}}},(function(t){t.h=()=>"edcc07dd14e05dfd1950"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxLQUFLOEIsT0FBTzBCLEtBQU9uRCxHQUFLTSxPQUFPMkMsV0FDekN0RCxLQUFLMEIsS0FBS3dCLFNBQVM3QyxHQUFNTCxLQUFLRCxNQUFNMkMsTUFBUSxFQUFNMUMsS0FBSzBCLEtBQUs2QixNQUFNbEQsRUFBSSxFQUFNTCxLQUFLSyxFQUFJTCxLQUFLRCxNQUFNMkMsTUFBUzFDLEtBQUtJLEtBR2hILENBRUE4QixPQUFBQSxDQUFRNUIsRUFBSSxHQUNWTixLQUFLTSxHQUFLTixLQUFLOEIsT0FBTzJCLElBQU1uRCxHQUFLSyxPQUFPMEMsWUFDeENyRCxLQUFLMEIsS0FBS3dCLFNBQVM1QyxFQUFLTixLQUFLRCxNQUFNcUQsT0FBUyxFQUFNcEQsS0FBSzBCLEtBQUs2QixNQUFNakQsRUFBSSxFQUFNTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNcUQsT0FFaEdwRCxLQUFLMEIsS0FBS3dCLFNBQVM1QyxHQUEwRSxHQUFyRTBDLEtBQUtVLElBQUsxRCxLQUFLMEIsS0FBS3dCLFNBQVM3QyxFQUFJTCxLQUFLRCxNQUFNMkMsTUFBU00sS0FBS0MsR0FBSyxJQUFXLEVBSXBHLENBRUFVLE1BQUFBLENBQU9sQixHQUNBekMsS0FBSzhCLFNBRVY5QixLQUFLNEMsaUJBQ0w1QyxLQUFLaUMsUUFBUVEsR0FDYnpDLEtBQUtrQyxRQUFRLEdBQ2Ysa0JDNUlGMEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gICAgLy8g5aaC5p6c5Zu+54mH5riy5p+T5LiN5Ye65p2l77yM5bCx55yL5LiL6L+Z6YeMXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICAvLyDlsIZtZXNo5ZKMZ2FsbGVyeeaJgOiuvuWumueahOWwuuWvuOe7keWumlxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIC8vIOWIneWni+WMlnNpemVz77yM6K6p5LuW5Y+Y5oiQ5LiL6Z2i5Y+v5Lul6YeN5aSN5Yip55So55qE5bGe5oCnXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBhZHRlU2NhbGUoKVxuICAgIHRoaXMudXBhZHRlWCgpXG4gICAgdGhpcy51cGFkdGVZKClcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnMuXG4gIHNob3coKSB7XG4gICAgR1NBUC5mcm9tVG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDBcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDBcbiAgICB9KVxuICB9XG5cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCwgd2lkdGgpIHtcbiAgICB0aGlzLmV4dHJhID0gMFxuICAgIHRoaXMud2lkdGhUb3RhbCA9IHdpZHRoXG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwYWR0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBhZHRlWSgwKVxuXG4gIH1cblxuICAvLyBMb29wXG4gIHVwZGF0ZVJvdGF0aW9uKCkge1xuICAgIGNvbnN0IHJvdGF0aW9uID0gR1NBUC51dGlscy5tYXBSYW5nZSgtdGhpcy5zaXplcy53aWR0aCAvIDIsIHRoaXMuc2l6ZXMud2lkdGggLyAyLCBNYXRoLlBJICogMC4yLCAtTWF0aC5QSSAqIDAuMiwgdGhpcy5tZXNoLnBvc2l0aW9uLngpXG4gICAgLy8g6KeG56qX55qE5bem5Y+z5Lik6L65XG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSByb3RhdGlvblxuICB9XG5cbiAgdXBhZHRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICAgIC8vIOaIkeeMnOaYr+aKindlYkds5Zu+54mH5Y+Y5oiQ5Y2V5L2N5ZCR6YeP54S25ZCO5YaN5LmY5Lul5q2j56Gu55qE5Zu+54mH55qE5a696auY77yM6K6p6L+Z5Lqb5Zu+54mH5bC65a+4bWF0Y2jljp/lm75cblxuXG4gIH1cblxuICB1cGFkdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYVxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXG4gICAgLy8g6L+Z5LiqeOaYr+S5i+WJjeWcqGluZGV46YeM6K6+572u55qE6byg5qCH5ouW5Yqo55qE5b2T5YmN55qEeCx555qE6Led56a744CC5omA5Lul77yM5oOz56e75Yqo5Yy56YWN5aW955qE5Zu+54mH77yM6ZyA6KaB5Zyo5pW05Liq5a655Zmo5Yqg5LiK6byg5qCHeCx556e75Yqo55qE6Led56a7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKHRoaXMubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqNzUgLSA3NVxuICAgIC8vIOe0r+WKoOaYr+aWueWQke+8jOWQkeS4iui/mOaYr+WQkeS4i1xuICAgIC8vIE1hdGguUEnmmK/lvKfluqbvvJ9cbiAgICAvLyA3NeS5n+aYr+W8p+W6plxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVSb3RhdGlvbigpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWRjYzA3ZGQxNGUwNWRmZDE5NTBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsInNob3ciLCJHU0FQIiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJ3aWR0aCIsIndpZHRoVG90YWwiLCJ1cGRhdGVSb3RhdGlvbiIsInJvdGF0aW9uIiwidXRpbHMiLCJtYXBSYW5nZSIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwieiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInRvcCIsImNvcyIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==