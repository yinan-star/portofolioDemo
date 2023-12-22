/*! For license information please see main.61e0d1d260b867cd702b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Detail/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),a=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({gl:e,scene:t,sizes:s,transition:i}){this.id="detail",this.element=document.querySelector(".detail__media__image"),this.gl=e,this.scene=t,this.sizes=s,this.transition=i,this.geometry=new h.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes}),this.show()}createTexture(){const e=this.element.getAttribute("data-src");this.texture=window.TEXTURES[e]}createProgram(){this.program=new a.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.rotation.z=.01*Math.PI,this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){this.transition?this.transition.animate(this.mesh,(e=>{this.program.uniforms.uAlpha.value=1})):i.default.to(this.program.uniforms.uAlpha,{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e){this.createBounds(e),this.upadteX(),this.upadteY()}onTouchDown(){}onTouchMove(){}onTouchUp(){}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}upadteY(){this.y=this.bounds.top/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(){this.upadteX(),this.upadteY()}destroy(){this.scene.removeChild(this.mesh)}}}},(function(e){e.h=()=>"94b063d66b3cf6d708c0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MWUwZDFkMjYwYjg2N2NkNzAyYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1lBT0EsY0FDRUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsRUFBSyxXQUFFQyxJQUM5QkMsS0FBS0MsR0FBSyxTQUVWRCxLQUFLRSxRQUFVQyxTQUFTQyxjQUFjLHlCQUN0Q0osS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsV0FBYUEsRUFFbEJDLEtBQUtLLFNBQVcsSUFBSUMsRUFBQUEsTUFBTU4sS0FBS0osSUFHL0JJLEtBQUtPLGdCQUNMUCxLQUFLUSxnQkFDTFIsS0FBS1MsYUFDTFQsS0FBS1UsYUFBYSxDQUFFWixNQUFPRSxLQUFLRixRQUVoQ0UsS0FBS1csTUFDUCxDQUNBSixhQUFBQSxHQUVFLE1BQU1LLEVBQVFaLEtBQUtFLFFBQVFXLGFBQWEsWUFDeENiLEtBQUtjLFFBQVVDLE9BQU9DLFNBQVNKLEVBWWpDLENBR0FKLGFBQUFBLEdBQ0VSLEtBQUtpQixRQUFVLElBQUlDLEVBQUFBLFFBQVFsQixLQUFLSixHQUFJLENBQ2xDdUIsU0FBUSxVQUNSQyxPQUFNLFVBQ05DLFNBQVUsQ0FDUkMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQUVELE1BQU92QixLQUFLYyxXQUcxQixDQUVBTCxVQUFBQSxHQUNFVCxLQUFLeUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLMUIsS0FBS0osR0FBSSxDQUM1QlMsU0FBVUwsS0FBS0ssU0FDZlksUUFBU2pCLEtBQUtpQixVQUdoQmpCLEtBQUt5QixLQUFLRSxTQUFTQyxFQUFjLElBQVZDLEtBQUtDLEdBRTVCOUIsS0FBS3lCLEtBQUtNLFVBQVUvQixLQUFLSCxNQUczQixDQUVBYSxZQUFBQSxFQUFhLE1BQUVaLElBRWJFLEtBQUtGLE1BQVFBLEVBRWJFLEtBQUtnQyxPQUFTaEMsS0FBS0UsUUFBUStCLHdCQUUzQmpDLEtBQUtrQyxjQUNMbEMsS0FBS21DLFVBQ0xuQyxLQUFLb0MsU0FDUCxDQUdBekIsSUFBQUEsR0FDTVgsS0FBS0QsV0FDUEMsS0FBS0QsV0FBV3NDLFFBQVFyQyxLQUFLeUIsTUFBTWEsSUFDakN0QyxLQUFLaUIsUUFBUUksU0FBU0MsT0FBT0MsTUFBUSxDQUFDLElBR3hDZ0IsRUFBQUEsUUFBS0MsR0FBR3hDLEtBQUtpQixRQUFRSSxTQUFTQyxPQUFRLENBQ3BDQyxNQUFPLEdBR2IsQ0FFQWtCLElBQUFBLEdBQ0VGLEVBQUFBLFFBQUtDLEdBQUd4QyxLQUFLaUIsUUFBUUksU0FBU0MsT0FBUSxDQUNwQ0MsTUFBTyxHQUVYLENBR0FtQixRQUFBQSxDQUFTNUMsR0FDUEUsS0FBS1UsYUFBYVosR0FDbEJFLEtBQUttQyxVQUNMbkMsS0FBS29DLFNBRVAsQ0FFQU8sV0FBQUEsR0FFQSxDQUVBQyxXQUFBQSxHQUVBLENBRUFDLFNBQUFBLEdBRUEsQ0FHQVgsV0FBQUEsR0FDRWxDLEtBQUs4QyxPQUFTOUMsS0FBS2dDLE9BQU9jLE9BQVMvQixPQUFPZ0MsWUFDMUMvQyxLQUFLZ0QsTUFBUWhELEtBQUtnQyxPQUFPZ0IsTUFBUWpDLE9BQU9rQyxXQUV4Q2pELEtBQUt5QixLQUFLeUIsTUFBTUMsRUFBSW5ELEtBQUtGLE1BQU1rRCxNQUFRaEQsS0FBS2dELE1BQzVDaEQsS0FBS3lCLEtBQUt5QixNQUFNRSxFQUFJcEQsS0FBS0YsTUFBTWdELE9BQVM5QyxLQUFLOEMsTUFJL0MsQ0FFQVgsT0FBQUEsR0FDRW5DLEtBQUttRCxFQUFLbkQsS0FBS2dDLE9BQU9xQixLQUFRdEMsT0FBT2tDLFdBQ3JDakQsS0FBS3lCLEtBQUs2QixTQUFTSCxHQUFNbkQsS0FBS0YsTUFBTWtELE1BQVEsRUFBTWhELEtBQUt5QixLQUFLeUIsTUFBTUMsRUFBSSxFQUFNbkQsS0FBS21ELEVBQUluRCxLQUFLRixNQUFNa0QsS0FHbEcsQ0FFQVosT0FBQUEsR0FDRXBDLEtBQUtvRCxFQUFLcEQsS0FBS2dDLE9BQU91QixJQUFPeEMsT0FBT2dDLFlBQ3BDL0MsS0FBS3lCLEtBQUs2QixTQUFTRixFQUFLcEQsS0FBS0YsTUFBTWdELE9BQVMsRUFBTTlDLEtBQUt5QixLQUFLeUIsTUFBTUUsRUFBSSxFQUFNcEQsS0FBS29ELEVBQUlwRCxLQUFLRixNQUFNZ0QsTUFFbEcsQ0FFQVUsTUFBQUEsR0FDRXhELEtBQUttQyxVQUNMbkMsS0FBS29DLFNBRVAsQ0FJQXFCLE9BQUFBLEdBQ0V6RCxLQUFLSCxNQUFNNkQsWUFBWTFELEtBQUt5QixLQUM5QixrQkMxSkZrQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0RldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcbiAgICB0aGlzLmlkID0gJ2RldGFpbCdcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxfX21lZGlhX19pbWFnZScpXG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoeyBzaXplczogdGhpcy5zaXplcyB9KTtcblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgLy8g5Zyoc2hhZGVy6YeM6Z2i5YGa55qE5riQ5Y+YXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlXVxuICAgIC8vIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cbiAgICAvLyBjb25zdCBpbWFnZSA9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuICAgIC8vIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICAvLyB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgLy8gdGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICAvLyB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gICAgLy8gLy8g5aaC5p6c5Zu+54mH5piv6buR6Imy55qE5p2Q6LSo77yM55yL6L+Z6YeM77yMZ2V0QXR0cmlidXRl5piv55u05o6laW1hZ2Uu6ICM5LiN5pivdGhpcy5pbWFnZVxuICAgIC8vIC8vIHRoaXMuaW1hZ2Ug5b2T5YmN57G755qE5a6e5L6L5a+56LGh5LiK55qE5LiA5Liq5bGe5oCn77yMaW1hZ2Ug5Y+q5piv5LiA5Liq5Zyo5pa55rOV5Lit5Li05pe25a2Y5YKo5Zu+54mH5YWD57Sg55qE5Y+Y6YePXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAqIDAuMDFcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG4gICAgLy8gbWVzaOaYr3NjZW5l55qE5a2Q5YWD57Sg44CCXG5cbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICAvLyDlsIZtZXNo5ZKMZ2FsbGVyeeaJgOiuvuWumueahOWwuuWvuOe7keWumlxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIC8vIOWIneWni+WMlnNpemVz77yM6K6p5LuW5Y+Y5oiQ5LiL6Z2i5Y+v5Lul6YeN5aSN5Yip55So55qE5bGe5oCnXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBhZHRlU2NhbGUoKVxuICAgIHRoaXMudXBhZHRlWCgpXG4gICAgdGhpcy51cGFkdGVZKClcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnMuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy50cmFuc2l0aW9uLmFuaW1hdGUodGhpcy5tZXNoLCBfID0+IHtcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYS52YWx1ZSA9IDFcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoc2l6ZXMpIHtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwYWR0ZVgoKVxuICAgIHRoaXMudXBhZHRlWSgpXG5cbiAgfVxuXG4gIG9uVG91Y2hEb3duKCkge1xuXG4gIH1cblxuICBvblRvdWNoTW92ZSgpIHtcblxuICB9XG5cbiAgb25Ub3VjaFVwKCkge1xuXG4gIH1cblxuICAvLyBMb29wXG4gIHVwYWR0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICAvLyDmiJHnjJzmmK/miop3ZWJHbOWbvueJh+WPmOaIkOWNleS9jeWQkemHj+eEtuWQjuWGjeS5mOS7peato+ehrueahOWbvueJh+eahOWuvemrmO+8jOiuqei/meS6m+WbvueJh+WwuuWvuG1hdGNo5Y6f5Zu+XG5cblxuICB9XG5cbiAgdXBhZHRlWCgpIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKVxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXG4gICAgLy8g6L+Z5LiqeOaYr+S5i+WJjeWcqGluZGV46YeM6K6+572u55qE6byg5qCH5ouW5Yqo55qE5b2T5YmN55qEeCx555qE6Led56a744CC5omA5Lul77yM5oOz56e75Yqo5Yy56YWN5aW955qE5Zu+54mH77yM6ZyA6KaB5Zyo5pW05Liq5a655Zmo5Yqg5LiK6byg5qCHeCx556e75Yqo55qE6Led56a7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuXG4gIH1cbiAgLyoqXG4gICAqIERlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLm1lc2gpXG4gIH1cblxuXG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk0YjA2M2Q2NmIzY2Y2ZDcwOGMwXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidHJhbnNpdGlvbiIsInRoaXMiLCJpZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW9tZXRyeSIsIlBsYW5lIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwic2hvdyIsImltYWdlIiwiZ2V0QXR0cmlidXRlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGFkdGVTY2FsZSIsInVwYWR0ZVgiLCJ1cGFkdGVZIiwiYW5pbWF0ZSIsIl8iLCJHU0FQIiwidG8iLCJoaWRlIiwib25SZXNpemUiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9