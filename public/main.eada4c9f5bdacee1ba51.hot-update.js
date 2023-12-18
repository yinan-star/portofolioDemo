/*! For license information please see main.eada4c9f5bdacee1ba51.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new r.Plane(this.gl)}createGallery(){this.medias=o()(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,gl:this.gl,index:e,scene:this.group,sizes:this.sizes})))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,o()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((t,e)=>{const s=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}const i=t.mesh.scale.y/2;if("bottom"===this.y.direction){t.mesh.position.y-i>this.sizes.height/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("top"===this.y.direction){t.mesh.position.y+i<-this.sizes.height/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"7e5b840e1574fefd7c4c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNdEMsRUFBSSxFQUNsQyxHQUF5QixXQUFyQmYsS0FBS2UsRUFBRW1DLFVBQXVCLENBQ3RCZixFQUFNaUIsS0FBS0UsU0FBU3ZDLEVBQUk4QyxFQUMxQjdELEtBQUtELE1BQU0rQixPQUFTLElBQzFCSyxFQUFNb0IsTUFBTXhDLEdBQUtmLEtBQUs2QixhQUFhQyxPQUNuQ0ssRUFBTWlCLEtBQUtJLFNBQVNDLEVBQUdWLEVBQUFBLFFBQUtDLE1BQU1VLE9BQWtCLEtBQVZDLEtBQUtDLEdBQW9CLElBQVZELEtBQUtDLElBR2xFLE1BQU0sR0FBd0IsUUFBckI1RCxLQUFLZSxFQUFFbUMsVUFBb0IsQ0FDeEJmLEVBQU1pQixLQUFLRSxTQUFTdkMsRUFBSThDLEdBQzFCN0QsS0FBS0QsTUFBTStCLE9BQVMsSUFDMUJLLEVBQU1vQixNQUFNeEMsR0FBS2YsS0FBSzZCLGFBQWFDLE9BQ25DSyxFQUFNaUIsS0FBS0ksU0FBU0MsRUFBR1YsRUFBQUEsUUFBS0MsTUFBTVUsT0FBa0IsS0FBVkMsS0FBS0MsR0FBb0IsSUFBVkQsS0FBS0MsSUFHbEUsQ0FJQXpCLEVBQU1XLE9BQU85QyxLQUFLaUIsT0FBTyxJQUc3QixDQUtBNkMsT0FBQUEsR0FDRTlELEtBQUtGLE1BQU1pRSxZQUFZL0QsS0FBS0MsTUFDOUIsa0JDM0xGK0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgKTtcblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcblxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpO1xuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuXG4gICAgdGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG4gICAgICBoZWlnaHQ6dGhpcy5nYWxsZXJ5Qm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5zaXplcy53aWR0aFxuICAgIH1cbiAgICAvLyDorqHnrpflvZPliY3nlLvlu4rnmoTlrr3luqbljaDop4bnqpflj6PnmoTlrr3luqbnmoTlpJrlsJHnhLblkI7kuZjku6XlhbfkvZPnmoTlrr3luqYtLT7lsIblhYPntKDlnKjop4blj6PkuK3nmoTmr5TkvovovazmjaLkuLrlhbfkvZPnmoTlrp7pmYXlrr3luqbjgILlk43lupTlvI/luIPlsYBcbiAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcbiAgICB0aGlzLnNjcm9sbC55ID10aGlzLnkudGFyZ2V0ID0gMFxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcbiAgICB0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG4gICAgY29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cbiAgICB0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2UsXG4gICAgICB0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2VcbiAgICAvLyDlpoLmnpzpvKDmoIflkozlm77niYfnmoTnp7vliqjnm7jlj43mlrnlkJHvvIzopoHnlKjlh4/lj7dcblxuXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICB9XG5cbiAgb25XaGVlbCh7cGl4ZWxYLCBwaXhlbFl9KXtcbiAgICAvLyDmjZXojrfmu5rliqjkuovku7bnmoTlg4/ntKDlgLzvvIznhLblkI7moLnmja7ov5nkupvlgLzmnaXmm7TmlrDpobXpnaLkuK3mn5DkupvlhYPntKDnmoTkvY3nva7miJbnirbmgIHvvIzlrp7njrDpobXpnaLnmoTmu5rliqjmiJbop4blm77nmoTlj5jljJZcbiAgICB0aGlzLngudGFyZ2V0ICs9IHBpeGVsWFxuICAgIHRoaXMueS50YXJnZXQgKz0gcGl4ZWxZXG4gIH1cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuICAgIHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cbiAgICBpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuICAgIGlmICh0aGlzLnNjcm9sbC55IDwgdGhpcy55LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueS5kaXJlY3Rpb24gPSAndG9wJ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG4gICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcbiAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgIC8vIEZvciBYIGF4aXNcbiAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcbiAgICAgIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnbGVmdCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMil7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG4gICAgLy8gRm9yIFkgYXhpc1xuICAgIGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcbiAgICAgIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJyl7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVkgXG4gICAgICAgIGlmICh5ID4gdGhpcy5zaXplcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAvLyDlvoDkuIvmu5HvvIzpobbpg6jlhYPntKDnmoTlupXpg6jovrnnlYzlpKfkuo7lsY/luZXmnIDmnIDpobbnq68s5bCx56e75Yiw5bqV6YOo5p2lXG4gICAgICB9ZWxzZSBpZih0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJyl7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVkgXG4gICAgICAgIGlmKHkgPCAtdGhpcy5zaXplcy5oZWlnaHQgLyAyKXtcbiAgICAgICAgICBtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgICAvLyDlvoDkuIrmu5HvvIzov5nkuKrlhYPntKDnmoTpobbpg6jovrnnlYzlsI/kuo7lsY/luZXmnIDmnIDlupXnq68s5bCx56e75Yiw6aG26YOo5p2lXG4gICAgICB9XG5cbiAgICAgXG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbClcbiAgICB9KVxuICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpe1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2U1Yjg0MGUxNTc0ZmVmZDdjNGNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsInJvdGF0aW9uIiwieiIsInJhbmRvbSIsIk1hdGgiLCJQSSIsInNjYWxlWSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==