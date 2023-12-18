/*! For license information please see main.5c14cf6df0480dd40680.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),n=s.n(l),h=s("./app/components/Canvas/home/Media.js");const c=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.group=new r.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=n()(this.mediasElements,((e,t)=>new h.default({element:e,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}onResize(e){n()(this.medias,(t=>t.onResize(e))),this.sizes=e.sizes}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:e,y:t}){}update(){this.x.current=o.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=o.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="left":this.scroll.x>this.x.current&&(this.x.direction="right"),console.log(this.x.direction),this.scroll.x=this.x.current,this.scroll.y=this.y.current,n()(this.medias,((e,t)=>{0===t&&e.mesh.position.x<-this.sizes.width/2&&console.log("out of the screen",e.mesh.position.x),e.update(this.scroll)}))}}}},(function(e){e.h=()=>"4973cde7ec0e9a11ee2f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJ1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KCk7XG5cblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSk7XG5cbiAgICAgICAgdGhpcy54ID0ge1xuICAgICAgICAgICAgY3VycmVudDowLFxuICAgICAgICAgICAgdGFyZ2V0OjAsXG4gICAgICAgICAgICBsZXJwOjAuMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0ge1xuICAgICAgICAgICAgY3VycmVudDowLFxuICAgICAgICAgICAgdGFyZ2V0OjAsXG4gICAgICAgICAgICBsZXJwOjAuMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGxDdXJyZW50PXtcbiAgICAgICAgICAgIHg6MCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfVxuICAgICAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gICAgfVxuXG4gICAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcbiAgICB9XG5cbiAgICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgICAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIEV2ZW50c1xuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuICAgICAgICB0aGlzLnNpemVzID1ldmVudC5zaXplc1xuICAgICAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcbiAgICB9XG5cbiAgICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbEN1cnJlbnQueCA9dGhpcy5zY3JvbGwueFxuICAgICAgICB0aGlzLnNjcm9sbEN1cnJlbnQueSA9dGhpcy5zY3JvbGwueVxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgICAgIGNvbnN0IHhEaXN0YW5jZSA9eC5zdGFydCAtIHguZW5kXG4gICAgICAgIGNvbnN0IHlEaXN0YW5jZSA9eS5zdGFydCAtIHkuZW5kXG5cbiAgICAgICAgdGhpcy54LnRhcmdldCA9dGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2UsXG4gICAgICAgIHRoaXMueS50YXJnZXQgPXRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG4gICAgICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgICB9XG5cbiAgICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICAgIH1cblxuICAgIC8vIFVwZGF0ZVxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB0aGlzLnguY3VycmVudCA9R1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG4gICAgICAgIHRoaXMueS5jdXJyZW50ID1HU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuICAgICAgICBpZih0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpe1xuICAgICAgICAgICAgdGhpcy54LmRpcmVjdGlvbiA9J2xlZnQnXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCl7XG4gICAgICAgICAgICB0aGlzLnguZGlyZWN0aW9uID0ncmlnaHQnXG4gICAgICAgIH1cbiAgICAgICAgLy8g5qOA5rWL6byg5qCH5rua5Yqo5pa55ZCR77yM5b2T5YmN5L2N572u5ZKM5YWI5YmN5L2N572u5YGa5q+U6L6D44CCXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMueC5kaXJlY3Rpb24pXG4gICAgICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuICAgICAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICAgICAgICAgIGlmKG1lZGlhLm1lc2gucG9zaXRpb24ueCA8IC10aGlzLnNpemVzLndpZHRoIC8yKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ291dCBvZiB0aGUgc2NyZWVuJyxtZWRpYS5tZXNoLnBvc2l0aW9uLngpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuICAgICAgICB9KVxuICAgICAgICAvLyDkvKDnu5ltZWRpYeaWh+S7tlxuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ5NzNjZGU3ZWMwZTlhMTFlZTJmXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwibWVkaWFzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm1lc2giLCJwb3NpdGlvbiIsIndpZHRoIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9