/*! For license information please see main.5b30ec79b12e233de5dd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/home-fragment.glsl"),o=s("./app/shaders/home-vertex.glsl");const n=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const e=this.element;this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},uViewportSizes:{value:[this.sizes.width,this.sizes.height]},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:.4})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.upadteX(t&&t.x),this.upadteY(t&&t.y)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}upadteY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.upadteX(e.x),this.upadteY(e.y))}}}},(function(e){e.h=()=>"6c5949006f7ca324d570"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEMsRUFBSSxHQUNWTixLQUFLTSxHQUFLTixLQUFLa0MsT0FBT2dCLElBQU01QyxHQUFLRyxPQUFPb0MsWUFDeEM3QyxLQUFLdUIsS0FBSzBCLFNBQVMzQyxFQUFLTixLQUFLRCxNQUFNc0IsT0FBUyxFQUFNckIsS0FBS3VCLEtBQUt3QixNQUFNekMsRUFBSSxFQUFNTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNc0IsT0FBVXJCLEtBQUtJLE1BQU1FLENBRXZILENBRUE2QyxNQUFBQSxDQUFPUCxHQUNBNUMsS0FBS2tDLFNBQ1ZsQyxLQUFLcUMsUUFBUU8sRUFBT3ZDLEdBQ3BCTCxLQUFLc0MsUUFBUU0sRUFBT3RDLEdBQ3RCLGtCQ2xJRjhDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbX0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvaG9tZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9ob21lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICBjb25zdCBpbWFnZSA9dGhpcy5lbGVtZW50XG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuICAgICAgICB1Vmlld3BvcnRTaXplcyA6e3ZhbHVlOlt0aGlzLnNpemVzLndpZHRoLCB0aGlzLnNpemVzLmhlaWdodF19LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICAgIC8vIHRoaXMubWVzaC5zY2FsZS54ID0gMlxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblxuICAgIC8vIHRoaXMubWVzaC5wb3NpdGlvbi54ICs9IHRoaXMuaW5kZXggKiB0aGlzLm1lc2guc2NhbGUueFxuICAgIC8vIOiuqeWbvueJh3NpZGUgYnkgc2lkZVxuICAgIC8vIHRoaXMuZ2VvbWV0cnkg5Y+v6IO95Luj6KGo5qih5Z6L55qE5Yeg5L2V5L2T6YOo5YiG77yM5L2G5Zyo6K645aSa5Zy65pmv5LiL77yM5L+u5pS55qih5Z6L55qE5L2N572u44CB57yp5pS+5oiW5peL6L2s5Y+v6IO96ZyA6KaB55u05o6l5pON5L2c5qih5Z6L5a+56LGh5pys6Lqr77yM5Y2zIHRoaXMubWVzaFxuICAgIC8vIOWwseaYr+ivtOe8qeaUvuaXi+i9rOaXtu+8jOi0tOWbvuimgeWSjGdlb21ldHJ55LiA6LW36L2s6ICM5LiN5piv5ZCE6Ieq6L2sXG5cbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICAvLyDlsIZtZXNo5ZKMZ2FsbGVyeeaJgOiuvuWumueahOWwuuWvuOe7keWumlxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIC8vIOWIneWni+WMlnNpemVz77yM6K6p5LuW5Y+Y5oiQ5LiL6Z2i5Y+v5Lul6YeN5aSN5Yip55So55qE5bGe5oCnXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBhZHRlU2NhbGUoKVxuICAgIHRoaXMudXBhZHRlWCgpXG4gICAgdGhpcy51cGFkdGVZKClcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnMuXG4gIHNob3coKSB7XG4gICAgR1NBUC5mcm9tVG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDBcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogMC40XG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgR1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pXG4gIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwYWR0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KVxuICAgIHRoaXMudXBhZHRlWShzY3JvbGwgJiYgc2Nyb2xsLnkpXG5cbiAgfVxuXG4gIC8vIExvb3BcbiAgdXBhZHRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICAgIC8vIOaIkeeMnOaYr+aKindlYkds5Zu+54mH5Y+Y5oiQ5Y2V5L2N5ZCR6YeP54S25ZCO5YaN5LmY5Lul5q2j56Gu55qE5Zu+54mH55qE5a696auY77yM6K6p6L+Z5Lqb5Zu+54mH5bC65a+4bWF0Y2jljp/lm75cblxuXG4gIH1cblxuICB1cGFkdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYS54XG4gICAgLy8gd2lkdGjlkoxoZWlnaHTmmK/op4bnqpfnmoTlrr3pq5jjgILkuZ/lsLHmmK9tZXNo55qEcG9zaXRpb27nmoTljp/ngrnlnKjop4bnqpflj6PnmoTmraPkuK3lv4NcbiAgICAvLyAtd2lkdGggLyAyIOi/meS4qumDqOWIhuWwseaYr+WwhuaJgOaciW1lc2jnmoTljp/ngrlwb3NpdGlvbuenu+WIsOinhueql+eahOW3puS4iuinklxuICB9XG5cbiAgdXBhZHRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gKHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikgLSAodGhpcy5tZXNoLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnlcbiAgICAvLyDov5nkuKp45piv5LmL5YmN5ZyoaW5kZXjph4zorr7nva7nmoTpvKDmoIfmi5bliqjnmoTlvZPliY3nmoR4LHnnmoTot53nprvjgILmiYDku6XvvIzmg7Pnp7vliqjljLnphY3lpb3nmoTlm77niYfvvIzpnIDopoHlnKjmlbTkuKrlrrnlmajliqDkuIrpvKDmoId4LHnnp7vliqjnmoTot53nprtcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnVwYWR0ZVgoc2Nyb2xsLngpXG4gICAgdGhpcy51cGFkdGVZKHNjcm9sbC55KVxuICB9XG5cblxuXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YzU5NDkwMDZmN2NhMzI0ZDU3MFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwieCIsInkiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidVZpZXdwb3J0U2l6ZXMiLCJ3aWR0aCIsImhlaWdodCIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInJvdGF0aW9uIiwieiIsIkdTQVAiLCJ1dGlscyIsInJhbmRvbSIsIk1hdGgiLCJQSSIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwYWR0ZVNjYWxlIiwidXBhZHRlWCIsInVwYWR0ZVkiLCJzaG93IiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==