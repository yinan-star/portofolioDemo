/*! For license information please see main.c8144d4ce3367658a2f9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.scene=e,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl,{widthSegments:20,heightSegments:20})}createGallery(){this.medias=o()(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,gl:this.gl,index:e,scene:this.group,sizes:this.sizes})))}show(){o()(this.medias,(t=>t.show()))}hide(){o()(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,o()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;this.scroll.x=this.x.current,this.scroll.y=this.y.current;const t=this.x.target-this.x.current,e=this.y.target-this.y.current,s=Math.sqrt(t*t+e*e);this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),o()(this.medias,((t,e)=>{const i=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+i<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-i>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}const h=t.mesh.scale.y/2;if("bottom"===this.y.direction){t.mesh.position.y-h>this.sizes.height/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("top"===this.y.direction){t.mesh.position.y+h<-this.sizes.height/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,s)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"7ed6f102c2c7029d0958"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICApO1xuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgdGhpcy5jcmVhdGVHYWxsZXJ5KCk7XG5cblxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuXG4gICAgdGhpcy5zaG93KClcbiAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcbiAgICAgIHdpZHRoU2VnbWVudHM6IDIwLFxuICAgICAgaGVpZ2h0U2VnbWVudHM6IDIwXG4gICAgICAvLyDmiorlubPpnaLlop7liqDliIbmrrUs5YOPM2TkuIDmoLcs5ZyoaG9tZS12ZXJ0ZXjph4zpnaLlgZrnrpfms5VcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnNcbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgfVxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIOiOt+WPluWFg+e0oOeahOS9jee9ruWSjOWwuuWvuFxuXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG4gICAgLy8g5bGP5bmV55qE5bC65a+477yM57uZdXBkYXRl6ICM5LiN5piv55S75biD55qEXG5cbiAgICB0aGlzLmdhbGxlcnlTaXplcyA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5nYWxsZXJ5Qm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5zaXplcy53aWR0aFxuICAgIH1cbiAgICAvLyDorqHnrpflvZPliY3nlLvlu4rnmoTlrr3luqbljaDop4bnqpflj6PnmoTlrr3luqbnmoTlpJrlsJHnhLblkI7kuZjku6XlhbfkvZPnmoTlrr3luqYtLT7lsIblhYPntKDlnKjop4blj6PkuK3nmoTmr5TkvovovazmjaLkuLrlhbfkvZPnmoTlrp7pmYXlrr3luqbjgILlk43lupTlvI/luIPlsYBcbiAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcbiAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LnRhcmdldCA9IDBcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG4gICAgdGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuICAgIGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG4gICAgdGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlLFxuICAgICAgdGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG4gICAgLy8g5aaC5p6c6byg5qCH5ZKM5Zu+54mH55qE56e75Yqo55u45Y+N5pa55ZCR77yM6KaB55So5YeP5Y+3XG5cblxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgfVxuXG4gIG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG4gICAgLy8g5o2V6I635rua5Yqo5LqL5Lu255qE5YOP57Sg5YC877yM54S25ZCO5qC55o2u6L+Z5Lqb5YC85p2l5pu05paw6aG16Z2i5Lit5p+Q5Lqb5YWD57Sg55qE5L2N572u5oiW54q25oCB77yM5a6e546w6aG16Z2i55qE5rua5Yqo5oiW6KeG5Zu+55qE5Y+Y5YyWXG4gICAgdGhpcy54LnRhcmdldCArPSBwaXhlbFhcbiAgICB0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuICB9XG5cbiAgLy8gVXBkYXRlXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cblxuICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG4gICAgY29uc3QgYSA9IHRoaXMueC50YXJnZXQgLSB0aGlzLnguY3VycmVudFxuICAgIGNvbnN0IGIgPSB0aGlzLnkudGFyZ2V0IC0gdGhpcy55LmN1cnJlbnRcblxuICAgIGNvbnN0IHNwZWVkID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgIC8vIOeul+S4ieinkuWHveaVsCzmlpzovrnnmoTot53nprss566X5Ye655So5oi355qE56e75Yqo6Led56a7P1xuICAgIFxuICAgIHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG4gICAgdGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuICAgIGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICB9XG4gICAgLy8g5qOA5rWL6byg5qCH5rua5Yqo5pa55ZCR77yM5b2T5YmN5L2N572u5ZKM5YWI5YmN5L2N572u5YGa5q+U6L6D44CCXG4gICAgaWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuICAgICAgdGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuICAgIH1cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gRm9yIFggYXhpc1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG4gICAgICAvLyBGb3IgWSBheGlzXG4gICAgICBjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG4gICAgICBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgY29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuICAgICAgICBpZiAoeSA+IHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG4gICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAvLyDlvoDkuIvmu5HvvIzpobbpg6jlhYPntKDnmoTlupXpg6jovrnnlYzlpKfkuo7lsY/luZXmnIDmnIDpobbnq68s5bCx56e75Yiw5bqV6YOo5p2lXG4gICAgICB9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcbiAgICAgICAgaWYgKHkgPCAtdGhpcy5zaXplcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgIC8vIOW+gOS4iua7ke+8jOi/meS4quWFg+e0oOeahOmhtumDqOi+ueeVjOWwj+S6juWxj+W5leacgOacgOW6leerryzlsLHnp7vliLDpobbpg6jmnaVcbiAgICAgIH1cblxuXG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgc3BlZWQpXG4gICAgfSlcbiAgICAvLyDkvKDnu5ltZWRpYeaWh+S7tlxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZWQ2ZjEwMmMyYzcwMjlkMDk1OFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbEN1cnJlbnQiLCJzY3JvbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIndpZHRoU2VnbWVudHMiLCJoZWlnaHRTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJhIiwiYiIsInNwZWVkIiwiTWF0aCIsInNxcnQiLCJHU0FQIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImRpcmVjdGlvbiIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJyb3RhdGlvbiIsInoiLCJyYW5kb20iLCJQSSIsInNjYWxlWSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==