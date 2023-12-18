/*! For license information please see main.00626771e4e58f74ab89.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s.n(l),n=s("./app/components/Canvas/home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new r.Plane(this.gl)}createGallery(){this.medias=o()(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,gl:this.gl,index:e,scene:this.group,sizes:this.sizes})))}onResize(t){o()(this.medias,(e=>e.onResize(t))),this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width}}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="botttom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,o()(this.medias,((t,e)=>{const s=t.mesh.scale.x/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width)}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width)}const i=t.mesh.scale.y/2;if("bottom"===this.y.direction){t.mesh.position.y+i<-this.sizes.height/2&&(t.extra.y+=this.gallerySizes.height)}else if("top"===this.y.direction){t.mesh.position.y-i>this.sizes.height/2&&(t.extra.y-=this.gallerySizes.height)}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"b2345a23270ad230d953"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICApO1xuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSk7XG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy55ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCkpXG5cbiAgICB0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcblxuICAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAgICAgaGVpZ2h0OnRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKiB0aGlzLnNpemVzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcbiAgICB9XG4gICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuICAgIHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcbiAgICBjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuICAgIHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZSxcbiAgICAgIHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gIH1cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuICAgIHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cbiAgICBpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuICAgIGlmICh0aGlzLnNjcm9sbC55IDwgdGhpcy55LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueS5kaXJlY3Rpb24gPSAndG9wJ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG4gICAgICB0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHR0b20nXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG4gICAgdGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAvLyBGb3IgWCBheGlzXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuICAgICAgICAvLyDlhYPntKDnmoR45L2N572uK+i/meS4quWFg+e0oOeahOS4gOWNiueahOWuveW6pu+8jOWwseaYr+esrOS4gOS4quWFg+e0oOeahOacgOWPs+i+uei+ueeVjO+8jOi/meS4qui+ueeVjOWwj+mbqOWxj+W5leeahOacgOW3pui+ueeahOi+ueeVjOWwseaYr+WbvueJh291dCBvZiBwaWN0dXJlXG4gICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgLy8g6KGo56S65bGP5bmV5a695bqm55qE5LiA5Y2K44CC5bCG5YW25Y+W6LSf5YC855qE5Y6f5Zug5piv77yM6YCa5bi45oOF5Ya15LiL5bGP5bmV5bem5L6n6L6555WM55qE5Z2Q5qCH5YC85piv6LSf55qE77yM6ICM5bGP5bmV5Y+z5L6n6L6555WM5piv5q2j55qE44CCXG4gICAgICAgICAgLy8g5qOA5p+l56ys5LiA5Liq5aqS5L2T5YWD57Sg55qE5L2N572u5piv5ZCm6LaF5Ye65bGP5bmV5bem5L6n6L6555WMXG4gICAgICAgICAgbWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuICAgICAgICAgIC8vIOW9k+eUqOaIt+W+gOW3pui+ueaLve+8jOW5tuS4lOenu+WHuuWOu+WQju+8jOimgeWwhuWug+aUvuWIsOacgOWPs+i+ueiuqeS7luS7juWPs+i+uei/m+adpe+8jCDovr7miJDkuIDkuKrlvqrnjq8s5bCx5piv56ys5LiA5Liq5YWD57Sg55qEWOe0r+WKoOS4iuaVtOS4queUu+W7iueahOWuveW6pu+8jOWwseWIsOS6huacgOWPs+i+uVxuICAgICAgICAgIC8vIOebuOWvueS6juWvueixoeiHqui6q+eahOS4reW/g+i9tOaIluiAheWOn+eCueeahOS9jee9ru+8jOS5n+WwseaYr+ivtGxvY2FsIHBvc2l0aW9uXG4gIFxuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKXtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuICAgICAgICBpZih4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpe1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgICAgLy8g6L+Z5Liq5YWD57Sg55qE5bem6L656L6555WM5aSn5LqO5bGP5bmV5pyA5Y+z6L65LOWwseenu+WIsOWJjemdouadpVxuICAgICAgfVxuICAgIC8vIEZvciBZIGF4aXNcbiAgICBjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG4gICAgICBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpe1xuICAgICAgICBjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZIFxuICAgICAgICAvLyDlhYPntKDnmoR45L2N572uK+i/meS4quWFg+e0oOeahOS4gOWNiueahOWuveW6pu+8jOWwseaYr+esrOS4gOS4quWFg+e0oOeahOacgOWPs+i+uei+ueeVjO+8jOi/meS4qui+ueeVjOWwj+mbqOWxj+W5leeahOacgOW3pui+ueeahOi+ueeVjOWwseaYr+WbvueJh291dCBvZiBwaWN0dXJlXG4gICAgICAgIGlmICh5IDwgLXRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgIC8vIOihqOekuuWxj+W5lemrmOW6pueahOS4gOWNiuOAguWwhuWFtuWPlui0n+WAvOeahOWOn+WboOaYr++8jOmAmuW4uOaDheWGteS4i+Wxj+W5leW3puS+p+i+ueeVjOeahOWdkOagh+WAvOaYr+i0n+eahO+8jOiAjOWxj+W5leWPs+S+p+i+ueeVjOaYr+ato+eahOOAglxuICAgICAgICAgIC8vIFnnmoTpobbpg6jmmK/kuI3mmK/otoXlh7rkuoblsY/luZXlupXpg6jovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuICAgICAgICAgIC8vIOW9k+eUqOaIt+W+gOW3pui+ueaLve+8jOW5tuS4lOenu+WHuuWOu+WQju+8jOimgeWwhuWug+aUvuWIsOacgOWPs+i+ueiuqeS7luS7juWPs+i+uei/m+adpe+8jCDovr7miJDkuIDkuKrlvqrnjq8s5bCx5piv56ys5LiA5Liq5YWD57Sg55qEWOe0r+WKoOS4iuaVtOS4queUu+W7iueahOWuveW6pu+8jOWwseWIsOS6huacgOWPs+i+uVxuICAgICAgICAgIC8vIOebuOWvueS6juWvueixoeiHqui6q+eahOS4reW/g+i9tOaIluiAheWOn+eCueeahOS9jee9ru+8jOS5n+WwseaYr+ivtGxvY2FsIHBvc2l0aW9uXG4gIFxuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJyl7XG4gICAgICAgIGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVkgXG4gICAgICAgIGlmKHkgPiB0aGlzLnNpemVzLmhlaWdodCAvIDIpe1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgIC8vIOi/meS4quWFg+e0oOeahOW3pui+uei+ueeVjOWkp+S6juWxj+W5leacgOWPs+i+uSzlsLHnp7vliLDliY3pnaLmnaVcbiAgICAgIH1cblxuICAgICBcblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuICAgIH0pXG4gICAgLy8g5Lyg57uZbWVkaWHmlofku7ZcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjIzNDVhMjMyNzBhZDIzMGQ5NTNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwic2NhbGVZIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9