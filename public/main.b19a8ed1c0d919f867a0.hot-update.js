/*! For license information please see main.b19a8ed1c0d919f867a0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new r.Plane(this.gl)}createGallery(){this.medias=o()(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,gl:this.gl,index:e,scene:this.group,sizes:this.sizes})))}onResize(t){o()(this.medias,(e=>e.onResize(t))),this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width}}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((t,e)=>{const s=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}const i=t.mesh.scale.y/2;if("bottom"===this.y.direction){t.mesh.position.y-i>this.sizes.height/2&&(t.extra.y-=this.gallerySizes.height,mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("top"===this.y.direction){t.mesh.position.y+i<-this.sizes.height/2&&(t.extra.y+=this.gallerySizes.height,mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"97ba883666e4e1b116e2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUc1RCxNQUFNLEdBQXdCLFFBQXJCekQsS0FBS2UsRUFBRWdDLFVBQW9CLENBQ3hCcEIsRUFBTXNCLEtBQUtFLFNBQVNwQyxFQUFJMkMsR0FDMUIxRCxLQUFLRCxNQUFNZ0MsT0FBUyxJQUMxQkosRUFBTXlCLE1BQU1yQyxHQUFLZixLQUFLOEIsYUFBYUMsT0FDbkNrQixLQUFLSSxTQUFTQyxFQUFHVixFQUFBQSxRQUFLQyxNQUFNVSxPQUFrQixLQUFWQyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUc1RCxDQUlBOUIsRUFBTWdCLE9BQU8zQyxLQUFLaUIsT0FBTyxJQUc3QixrQkM1S0YwQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICApO1xuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSk7XG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy55ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCkpXG5cbiAgICB0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcblxuICAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAgICAgaGVpZ2h0OnRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKiB0aGlzLnNpemVzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcbiAgICB9XG4gICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcbiAgICBjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuICAgIHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZSxcbiAgICAgIHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gIH1cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuICAgIHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cbiAgICBpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuICAgIGlmICh0aGlzLnNjcm9sbC55IDwgdGhpcy55LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueS5kaXJlY3Rpb24gPSAndG9wJ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG4gICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcbiAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgIC8vIEZvciBYIGF4aXNcbiAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcbiAgICAgIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnbGVmdCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgICAgICAgICBtZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMil7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuICAgICAgICAgIG1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG4gICAgLy8gRm9yIFkgYXhpc1xuICAgIGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcbiAgICAgIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJyl7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVkgXG4gICAgICAgIGlmICh5ID4gdGhpcy5zaXplcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcbiAgICAgICAgICBtZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAvLyDlvoDkuIvmu5HvvIzpobbpg6jlhYPntKDnmoTlupXpg6jovrnnlYzlpKfkuo7lsY/luZXmnIDmnIDpobbnq68s5bCx56e75Yiw5bqV6YOo5p2lXG4gICAgICB9ZWxzZSBpZih0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJyl7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVkgXG4gICAgICAgIGlmKHkgPCAtdGhpcy5zaXplcy5oZWlnaHQgLyAyKXtcbiAgICAgICAgICBtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuICAgICAgICAgIG1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgICAvLyDlvoDkuIrmu5HvvIzov5nkuKrlhYPntKDnmoTpobbpg6jovrnnlYzlsI/kuo7lsY/luZXmnIDmnIDlupXnq68s5bCx56e75Yiw6aG26YOo5p2lXG4gICAgICB9XG5cbiAgICAgXG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbClcbiAgICB9KVxuICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk3YmE4ODM2NjZlNGUxYjExNmUyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJtZWRpYSIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsInJvdGF0aW9uIiwieiIsInJhbmRvbSIsIk1hdGgiLCJQSSIsInNjYWxlWSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==