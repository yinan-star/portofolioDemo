/*! For license information please see main.c43d87c230322d590b60.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Gallery.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/gsap/index.js"),o=s("./node_modules/lodash/map.js"),r=s.n(o),h=s("./app/components/Canvas/about/Media.js");class n{constructor({element:t,geometry:e,gl:s,index:l,scene:o,sizes:r}){this.element=t,this.geometry=e,this.gl=s,this.index=l,this.scene=o,this.sizes=r,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediaElements=this.element.querySelectorAll("about__gallery__media__image"),console.log(this.mediaElements,this.element),this.media=r()(this.mediaElements,((t,e)=>(console.log(t),new h.default({element:t,geometry:this.geometry,gl:this.gl,index:e,scene:this.group,sizes:this.sizes}))))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,r()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scroll.current=this.scroll}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.current-s}onTouchUp({x:t,y:e}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),r()(this.medias,((t,e)=>{const s=t.mesh.scale.x/2;if("left"===this.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=l.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=l.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"60b5a32bce55ea5e20f2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TXNCLE1BQVEsSUFDeEJQLEVBQU00QixNQUFNaEIsR0FBSzFCLEtBQUsyQyxhQUFhdEIsTUFDbkNQLEVBQU15QixLQUFLSyxTQUFTQyxFQUFHVixFQUFBQSxRQUFLQyxNQUFNVSxPQUFrQixLQUFWQyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUdsRSxDQUlBbEMsRUFBTW1CLE9BQU9qQyxLQUFLRyxPQUFPLElBRzdCLGtCQ2pJRjhDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvYWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHtlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXN9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5ncm91cCA9bmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQgOjAsXG4gICAgICB0YXJnZXQgOjAsXG4gICAgICBsYXN0IDowLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKXtcbiAgICB0aGlzLm1lZGlhRWxlbWVudHMgPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhYm91dF9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVkaWFFbGVtZW50cywgdGhpcy5lbGVtZW50KVxuXG4gICAgdGhpcy5tZWRpYSA9IG1hcCh0aGlzLm1lZGlhRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudClcblxuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG5cbiAgICB9KVxuICB9XG4vKipcbiAqIEV2ZW50cy5cbiAqL1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5zaXplcy53aWR0aFxuICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50PSB0aGlzLnNjcm9sbFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID10aGlzLnNjcm9sbC5jdXJyZW50IC1kaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gIH1cblxuXG5cbiAgLy8gVXBkYXRlXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuICAgIFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgLy8gRm9yIFggYXhpc1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnbGVmdCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKXtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuICAgICAgICBpZih4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpe1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAgLy8g6L+Z5Liq5YWD57Sg55qE5bem6L656L6555WM5aSn5LqO5bGP5bmV5pyA5Y+z6L65LOWwseenu+WIsOWJjemdouadpVxuICAgICAgfVxuXG4gICAgIFxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG4gICAgfSlcbiAgICAvLyDkvKDnu5ltZWRpYeaWh+S7tlxuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MGI1YTMyYmNlNTVlYTVlMjBmMlwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGVycCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsIm1lZGlhIiwibWFwIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWFzIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRpcmVjdGlvbiIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImdhbGxlcnlTaXplcyIsInJvdGF0aW9uIiwieiIsInJhbmRvbSIsIk1hdGgiLCJQSSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==