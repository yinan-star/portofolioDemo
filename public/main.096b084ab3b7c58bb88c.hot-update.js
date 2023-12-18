/*! For license information please see main.096b084ab3b7c58bb88c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.scene=e,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl,{widthSegments:20,heightSegments:20})}createGallery(){this.medias=o()(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,gl:this.gl,index:e,scene:this.group,sizes:this.sizes})))}show(){o()(this.medias,(t=>t.show()))}hide(){o()(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,o()(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed.target=.1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.scroll.x=this.x.current,this.scroll.y=this.y.current,this.speed.current=h.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),o()(this.medias,((t,e)=>{const s=.6*this.sizes.width,i=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+i<-s&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-i>s&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}const r=.6*this.sizes.height,l=t.mesh.scale.y/2;if("bottom"===this.y.direction){t.mesh.position.y-l>r&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("top"===this.y.direction){t.mesh.position.y+l<-r&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,this.speed.current)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"8560fca35fd7e42f7ee8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEQsT0FBQUEsR0FDRXJFLEtBQUtGLE1BQU13RSxZQUFZdEUsS0FBS0MsTUFDOUIsa0JDMU5Gc0UsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgKTtcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxDdXJyZW50ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICAgIC8vIOS4jeimgeWwj+S6jjAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcblxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICB0aGlzLnNob3coKVxuICAgIC8vIOWnkO+8jGNvbnN0cnVjdG9y5qC85byP5pivKHt9KXt944CC5LiN6KaB5b+Y6K6w5LqGXG5cbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbCwge1xuICAgICAgd2lkdGhTZWdtZW50czogMjAsXG4gICAgICBoZWlnaHRTZWdtZW50czogMjBcbiAgICAgIC8vIOaKiuW5s+mdouWinuWKoOWIhuautSzlg48zZOS4gOagtyzlnKhob21lLXZlcnRleOmHjOmdouWBmueul+azlVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQW5pbWF0aW9uc1xuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICB9XG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcblxuICAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0ICogdGhpcy5zaXplcy5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy5nYWxsZXJ5Qm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLnNpemVzLndpZHRoXG4gICAgfVxuICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuICAgIHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNwZWVkLnRhcmdldCA9IDAuMVxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcbiAgICBjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuICAgIHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZSxcbiAgICAgIHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gMFxuXG4gIH1cblxuICBvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuICAgIC8vIOaNleiOt+a7muWKqOS6i+S7tueahOWDj+e0oOWAvO+8jOeEtuWQjuagueaNrui/meS6m+WAvOadpeabtOaWsOmhtemdouS4reafkOS6m+WFg+e0oOeahOS9jee9ruaIlueKtuaAge+8jOWunueOsOmhtemdoueahOa7muWKqOaIluinhuWbvueahOWPmOWMllxuICAgIHRoaXMueC50YXJnZXQgKz0gcGl4ZWxYXG4gICAgdGhpcy55LnRhcmdldCArPSBwaXhlbFlcbiAgfVxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxuXG5cbiAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcbiAgICB0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuICAgIHRoaXMuc3BlZWQuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zcGVlZC5jdXJyZW50LCB0aGlzLnNwZWVkLnRhcmdldCwgdGhpcy5zcGVlZC5sZXJwKVxuXG4gICAgdGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcbiAgICB0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLnggPCB0aGlzLnguY3VycmVudCkge1xuICAgICAgdGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuICAgICAgdGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgIH1cbiAgICAvLyDmo4DmtYvpvKDmoIfmu5rliqjmlrnlkJHvvIzlvZPliY3kvY3nva7lkozlhYjliY3kvY3nva7lgZrmr5TovoPjgIJcbiAgICBpZiAodGhpcy5zY3JvbGwueSA8IHRoaXMueS5jdXJyZW50KSB7XG4gICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xuICAgICAgdGhpcy55LmRpcmVjdGlvbiA9ICdib3R0b20nXG4gICAgfVxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAvLyBGb3IgWCBheGlzXG4gICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5zaXplcy53aWR0aCAqIDAuNlxuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtb2Zmc2V0WCApIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmICh4ID4gb2Zmc2V0WCApIHtcbiAgICAgICAgICBtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG4gICAgICAvLyBGb3IgWSBheGlzXG4gICAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5zaXplcy5oZWlnaHQgKiAwLjZcbiAgICAgIGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcbiAgICAgIFxuICAgICAgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVlcbiAgICAgICAgaWYgKHkgPiBvZmZzZXRZKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgIC8vIOW+gOS4i+a7ke+8jOmhtumDqOWFg+e0oOeahOW6lemDqOi+ueeVjOWkp+S6juWxj+W5leacgOacgOmhtuerryzlsLHnp7vliLDlupXpg6jmnaVcbiAgICAgIH0gZWxzZSBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgY29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSArIHNjYWxlWVxuICAgICAgICBpZiAoeSA8IC1vZmZzZXRZKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgIC8vIOW+gOS4iua7ke+8jOi/meS4quWFg+e0oOeahOmhtumDqOi+ueeVjOWwj+S6juWxj+W5leacgOacgOW6leerryzlsLHnp7vliLDpobbpg6jmnaVcbiAgICAgIH1cblxuXG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuICAgIH0pXG4gICAgLy8g5Lyg57uZbWVkaWHmlofku7ZcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODU2MGZjYTM1ZmQ3ZTQyZjdlZThcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIndpZHRoU2VnbWVudHMiLCJoZWlnaHRTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImRpcmVjdGlvbiIsIm9mZnNldFgiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwicmFuZG9tIiwiTWF0aCIsIlBJIiwib2Zmc2V0WSIsInNjYWxlWSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==