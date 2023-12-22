/*! For license information please see main.7679f9826c9f2cc264f0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var l=e("./node_modules/ogl/src/core/Transform.js"),i=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e.n(o),c=e("./node_modules/lodash/map.js"),h=e.n(c),a=e("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:i}){this.transition=i,this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transformPrefix=n()("transform"),this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=h()(this.mediasElements,((t,s)=>new a.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}show(){this.transition&&this.transition.animate(this.medias[0],(t=>{})),h()(this.medias,(t=>t.show()))}hide(){h()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,h()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));h()(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t),h()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"4a3f370df29fb779fc8f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0yQyxNQUFTMkIsS0FBS08sR0FBSyxJQUFZLEVBQUUsR0FPL0csQ0FLQUMsT0FBQUEsR0FDSTVFLEtBQUtILE1BQU1nRixZQUFZN0UsS0FBS0ksTUFDaEMsa0JDNUxKMEUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9jb2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsdHJhbnNpdGlvbiB9KSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuaWQgPSAnY29sbGVjdGlvbnMnO1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG4gICAgICAgIHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlcycpXG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYSdcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgICAgICBsZXJwOiAwLjFcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICAgICAgbGFzdDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAgICAgLy8g5Lyg5YiwTWVkaWHph4zpnaJcbiAgICAgICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBBbmltYXRpb25zXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uKXtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKHRoaXMubWVkaWFzWzBdLCBfID0+e1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gICAgfVxuXG4gICAgLy8gRXZlbnRzXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG4gICAgICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOiOt+WPluWFg+e0oOeahOS9jee9ruWSjOWwuuWvuFxuXG4gICAgICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuICAgICAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcbiAgICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2VcbiAgICAgICAgLy8g5aaC5p6c6byg5qCH5ZKM5Zu+54mH55qE56e75Yqo55u45Y+N5pa55ZCR77yM6KaB55So5YeP5Y+3XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldCwgZGlzdGFuY2UpXG4gICAgICAgIC8vIOWmguaenOWbvueJh+S4jeiDveenu+WKqO+8jOeci+S4i+m8oOagh+iDveS4jeiDveenu+WKqOaVsOaNru+8jOWmguaenOm8oOagh+iDveenu+WKqOaVsOaNru+8jOmCo+WwseaYr+ayoeacieaKiui/meS4quWAvOe7meWIsG1lZGlh6K6p5Zu+54mH56e75YqoXG4gICAgfVxuXG4gICAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgICB9XG5cbiAgICBvbldoZWVsKHsgcGl4ZWxZIH0pIHtcbiAgICAgICAgLy8g5o2V6I635rua5Yqo5LqL5Lu255qE5YOP57Sg5YC877yM54S25ZCO5qC55o2u6L+Z5Lqb5YC85p2l5pu05paw6aG16Z2i5Lit5p+Q5Lqb5YWD57Sg55qE5L2N572u5oiW54q25oCB77yM5a6e546w6aG16Z2i55qE5rua5Yqo5oiW6KeG5Zu+55qE5Y+Y5YyWXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Vk6IGU5Yqo5Yqo55S75Zu+54mH5paH5a2X5qCH6aKYXG4gICAgICovXG4gICAgb25DaGFuZ2UgKGluZGV4KXtcbiAgICAgICAgLy8g5LuO5YW25LuW5Zyw5pa55o6l5Y+X57Si5byVLOm8oOagh+a7keWKqO+8jOW3puS4i+inkuaWh+Wtl+WGheWuuei3n+edgOWbvueJh+WPmOWMllxuICAgICAgICB0aGlzLmluZGV4ID1pbmRleFxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXG5cbiAgICAgICAgbWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsZWxlbWVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbil7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0kezI1ICogc2VsZWN0ZWRDb2xsZWN0aW9ufSUpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKWBcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoIC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgICAgICAvLyDmu5rliqjmu5rova7pmZDliLZcblxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgICAgICAvLyDlsIblm77niYfpk77mjqXnmoTlrrnlmahtYXRjaOa7muWKqOeahOWdkOagh+maj+edgOWbvueJh+S4gOi1t+a7muiAjOS4jeaYr+WBnOWcqOWOn+WcsFxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICAgICAgfVxuICAgICAgICAvLyDmo4DmtYvpvKDmoIfmu5rliqjmlrnlkJHvvIzlvZPliY3kvY3nva7lkozlhYjliY3kvY3nva7lgZrmr5TovoPjgIJcblxuICAgICAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG4gICAgICAgIGNvbnN0IGluZGV4ID1NYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiB0aGlzLm1lZGlhcy5sZW5ndGgpXG4gICAgICAgIC8vIE1hdGguZmxvb3Is5Y+W5pW05pWw77yM5rua5Yqo54m55a6a6Led56a75ZCO56Gu5a6a5Zu+54mH5YWD57Sg5Zyo5pWw57uE5Lit55qE57Si5byVXG4gICAgICAgIGlmKHRoaXMuaW5kZXggIT09IGluZGV4KXtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoaW5kZXgpICBcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuaW5kZXgpXG4gICAgICAgICAgICBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwXG4gICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgLy8g5Lyg57uZbWVkaWHmlofku7Ys5bCG5b2T5YmN55qE6byg5qCH5rua5Yqo5L2N572u5Lyg57uZbWVkaWFcblxuICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGEzZjM3MGRmMjlmYjc3OWZjOGZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImlkIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJtZWRpYXNFbGVtZW50cyIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwibGFzdCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsImFuaW1hdGUiLCJfIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWl0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiY2xhbXAiLCJpbnRlcnBvbGF0ZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsIm1lc2giLCJwb3NpdGlvbiIsImNvcyIsIlBJIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9