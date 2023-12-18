/*! For license information please see main.530b0412e46a69c7c8da.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),l=s("./node_modules/gsap/index.js"),h=s("./node_modules/lodash/map.js"),o=s.n(h),n=s("./app/components/Canvas/home/Media.js");const a=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new r.Plane(this.gl)}createGallery(){this.medias=o()(this.mediasElements,((e,t)=>new n.default({element:e,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}onResize(e){o()(this.medias,(t=>t.onResize(e))),this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=e.sizes}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,i=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:e,y:t}){}update(){this.galleryBounds&&(this.x.current=l.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=l.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.galleryWidth=this.galleryBounds.width/window.innerWidth*this.sizes.width,this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((e,t)=>{if("left"===this.x.direction){e.mesh.position.x+e.mesh.scale.x/2<-this.sizes.width/2&&(e.extra.x+=this.galleryWidth)}else if("right"===this.x.direction){e.mesh.position.x-e.mesh.scale.x/2>this.sizes.width/2&&(e.extra.x-=this.galleryWidth)}e.update(this.scroll)})))}}}},(function(e){e.h=()=>"00626771e4e58f74ab89"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU4QixVQUFxQixDQUNwQmQsRUFBTW1CLEtBQUtDLFNBQVNwQyxFQUFJZ0IsRUFBTW1CLEtBQUtFLE1BQU1yQyxFQUFJLEdBRTlDWCxLQUFLRCxNQUFNNEMsTUFBUSxJQUcxQmhCLEVBQU1zQixNQUFNdEMsR0FBS1gsS0FBSzBDLGFBSzFCLE1BQU0sR0FBd0IsVUFBckIxQyxLQUFLVyxFQUFFOEIsVUFBc0IsQ0FDMUJkLEVBQU1tQixLQUFLQyxTQUFTcEMsRUFBSWdCLEVBQU1tQixLQUFLRSxNQUFNckMsRUFBSSxFQUNoRFgsS0FBS0QsTUFBTTRDLE1BQVEsSUFDeEJoQixFQUFNc0IsTUFBTXRDLEdBQUtYLEtBQUswQyxhQUcxQixDQUdBZixFQUFNVSxPQUFPckMsS0FBS2lCLE9BQU8sSUFHN0Isa0JDL0lGaUMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgKTtcblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcblxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpO1xuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuXG4gICAgdGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIOiOt+WPluWFg+e0oOeahOS9jee9ruWSjOWwuuWvuFxuXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG4gICAgLy8g5bGP5bmV55qE5bC65a+477yM57uZdXBkYXRl6ICM5LiN5piv55S75biD55qEXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcbiAgICBjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuICAgIHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZSxcbiAgICAgIHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gIH1cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuICAgIHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cbiAgICBpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgdGhpcy5nYWxsZXJ5V2lkdGggPSB0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcbiAgICAvLyDorqHnrpflvZPliY3nlLvlu4rnmoTlrr3luqbljaDop4bnqpflj6PnmoTlrr3luqbnmoTlpJrlsJHnhLblkI7kuZjku6XlhbfkvZPnmoTlrr3luqYtLT7lsIblhYPntKDlnKjop4blj6PkuK3nmoTmr5TkvovovazmjaLkuLrlhbfkvZPnmoTlrp7pmYXlrr3luqbjgILlk43lupTlvI/luIPlsYBcblxuICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgIFxuICAgICAgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVdpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgICBpZih4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpe1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5V2lkdGhcbiAgICAgICAgfVxuICAgICAgICAgLy8g6L+Z5Liq5YWD57Sg55qE5bem6L656L6555WM5aSn5LqO5bGP5bmV5pyA5Y+z6L65LOWwseenu+WIsOWJjemdouadpVxuICAgICAgfVxuICAgICBcblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuICAgIH0pXG4gICAgLy8g5Lyg57uZbWVkaWHmlofku7ZcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDA2MjY3NzFlNGU1OGY3NGFiODlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiZ2FsbGVyeVdpZHRoIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVzaCIsInBvc2l0aW9uIiwic2NhbGUiLCJleHRyYSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==