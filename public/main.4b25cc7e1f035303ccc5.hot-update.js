/*! For license information please see main.4b25cc7e1f035303ccc5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e.n(r),c=e("./node_modules/lodash/map.js"),a=e.n(c),h=e("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.transition=l,this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transformPrefix=n()("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,a()(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else a()(this.medias,(t=>t.show()))}hide(){a()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),a()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"99339bcc38d3c398f836"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9HLE1BRWxHbEIsS0FBS00sZUFBZTRFLE1BQU1sRixLQUFLRSxpQkFBb0IsY0FBYUYsS0FBS2UsT0FBT0MsYUFHeEVoQixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsUUFDakNoQixLQUFLZSxPQUFPd0UsVUFBWSxRQUNmdkYsS0FBS2UsT0FBT0ksS0FBT25CLEtBQUtlLE9BQU9DLFVBQ3hDaEIsS0FBS2UsT0FBT3dFLFVBQVksUUFJMUJ2RixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsUUFFL0IsTUFBTWUsRUFBUXlELEtBQUtDLE1BQU1ELEtBQUtFLEtBQUsxRixLQUFLZSxPQUFPQyxRQUFVaEIsS0FBSzRCLE9BQU8sR0FBR2lCLE9BQU9FLE1BQVEsR0FBSy9DLEtBQUtlLE9BQU9rRCxRQUFVakUsS0FBSzRCLE9BQU8rRCxPQUFTLElBR25JM0YsS0FBSytCLFFBQVVBLEdBQ2pCL0IsS0FBSzBFLFNBQVMzQyxHQUdoQkYsSUFBSTdCLEtBQUs0QixRQUFRLENBQUNlLEVBQU9aLEtBQ3ZCWSxFQUFNTSxPQUFPakQsS0FBS2UsT0FBT0MsUUFBU2hCLEtBQUsrQixNQUFNLEdBUWpELENBS0E2RCxPQUFBQSxHQUNFNUYsS0FBS0gsTUFBTWdHLFlBQVk3RixLQUFLSSxNQUM5QixrQkNyTkYwRixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHRyYW5zaXRpb24gfSkge1xuICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgdGhpcy5pZCA9ICdjb2xsZWN0aW9ucyc7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5JylcbiAgICB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fd3JhcHBlcicpXG5cbiAgICB0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlcycpXG5cbiAgICB0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2FydGljbGUnKVxuICAgIHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYSdcbiAgICApO1xuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgICAgdmVsb2NpdHk6IDFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgdGhpcy5jcmVhdGVHYWxsZXJ5KCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSk7XG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcblxuICAgIHRoaXMuc2hvdygpXG4gICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnNcbiAgYXN5bmMgc2hvdygpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB7IHNyYyB9ID0gdGhpcy50cmFuc2l0aW9uLm1lc2gucHJvZ3JhbS51bmlmb3Jtcy50TWFwLnZhbHVlLmltYWdlO1xuICAgICAgY29uc3QgdGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tzcmNdO1xuICAgICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhcy5maW5kKChtZWRpYSkgPT4gbWVkaWEudGV4dHVyZSA9PT0gdGV4dHVyZSk7XG4gICAgICBjb25zdCBzY3JvbGwgPSAtbWVkaWEuYm91bmRzLmxlZnQgLSBtZWRpYS5ib3VuZHMud2lkdGggLyAyICsgd2luZG93LmlubmVyV2lkdGggLyAyO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICBcbiAgICAgIHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKHtcbiAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogbWVkaWEubWVzaC5wb3NpdGlvbi55LCB6OiAwIH0sXG4gICAgICAgIHJvdGF0aW9uOiBtZWRpYS5tZXNoLnJvdGF0aW9uLFxuICAgICAgICBzY2FsZTogbWVkaWEubWVzaC5zY2FsZSxcbiAgICAgICAgLy8g6K6p6L+U5Zue55qE5Zu+54mHbWF0aOWOn+adpeeahOS9jee9rlxuXG4gICAgICB9LCBfID0+IHtcbiAgICAgICAgbWVkaWEub3BhY2l0eS5tdWx0aXBsaWVyID0gMTtcblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChtZWRpYSAhPT0gaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5zaG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHNjcm9sbDtcbiAgICAgIFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gICAgfVxuICB9XG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IG1lZGlhLmhpZGUoKSlcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG4gICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG4gICAgLy8g5aaC5p6c6byg5qCH5ZKM5Zu+54mH55qE56e75Yqo55u45Y+N5pa55ZCR77yM6KaB55So5YeP5Y+3XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zY3JvbGwudGFyZ2V0LCBkaXN0YW5jZSlcbiAgICAvLyDlpoLmnpzlm77niYfkuI3og73np7vliqjvvIznnIvkuIvpvKDmoIfog73kuI3og73np7vliqjmlbDmja7vvIzlpoLmnpzpvKDmoIfog73np7vliqjmlbDmja7vvIzpgqPlsLHmmK/msqHmnInmiorov5nkuKrlgLznu5nliLBtZWRpYeiuqeWbvueJh+enu+WKqFxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgfVxuXG4gIG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuICAgIC8vIOaNleiOt+a7muWKqOS6i+S7tueahOWDj+e0oOWAvO+8jOeEtuWQjuagueaNrui/meS6m+WAvOadpeabtOaWsOmhtemdouS4reafkOS6m+WFg+e0oOeahOS9jee9ruaIlueKtuaAge+8jOWunueOsOmhtemdoueahOa7muWKqOaIluinhuWbvueahOWPmOWMllxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Vk6IGU5Yqo5Yqo55S75Zu+54mH5paH5a2X5qCH6aKYXG4gICAqL1xuICBvbkNoYW5nZShpbmRleCkge1xuICAgIC8vIOS7juWFtuS7luWcsOaWueaOpeWPl+e0ouW8lSzpvKDmoIfmu5HliqjvvIzlt6bkuIvop5LmloflrZflhoXlrrnot5/nnYDlm77niYflj5jljJZcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXG5cbiAgICBtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgXG5cbiAgfVxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgICAvLyDmu5rliqjmu5rova7pmZDliLZcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICAvLyDlsIblm77niYfpk77mjqXnmoTlrrnlmahtYXRjaOa7muWKqOeahOWdkOagh+maj+edgOWbvueJh+S4gOi1t+a7muiAjOS4jeaYr+WBnOWcqOWOn+WcsFxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicygodGhpcy5zY3JvbGwuY3VycmVudCAtIHRoaXMubWVkaWFzWzBdLmJvdW5kcy53aWR0aCAvIDIpIC8gdGhpcy5zY3JvbGwubGltaXQpICogKHRoaXMubWVkaWFzLmxlbmd0aCAtIDEpKTtcbiAgICAvL+WHj+WOu+S4gOWNiueahOWNoeeJh+WuveW6pizkvb/lvpfmj5DliY1oaWdobGlnaHTljaHniYcs6ICM5LiN5piv562J5Yiw5Y2h54mHeei9tOS4reW/g+aJjea/gOa0u+WwseaFouS6hlxuICAgIC8vIE1hdGguZmxvb3Is5Y+W5pW05pWw77yM5rua5Yqo54m55a6a6Led56a75ZCO56Gu5a6a5Zu+54mH5YWD57Sg5Zyo5pWw57uE5Lit55qE57Si5byVXG4gICAgaWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGluZGV4KVxuICAgIH1cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuaW5kZXgpXG4gICAgICAvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwXG5cbiAgICB9KVxuXG4gICAgLy8g5Lyg57uZbWVkaWHmlofku7Ys5bCG5b2T5YmN55qE6byg5qCH5rua5Yqo5L2N572u5Lyg57uZbWVkaWFcblxuXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5MzM5YmNjMzhkM2MzOThmODM2XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidHJhbnNpdGlvbiIsInRoaXMiLCJpZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5V3JhcHBlckVsZW1lbnQiLCJ0aXRsZXNFbGVtZW50IiwiY29sbGVjdGlvbnNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwibWVkaWFzRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsImxhc3QiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIm9uUmVzaXplIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsInNyYyIsIm1lc2giLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsIm1lZGlhIiwiZmluZCIsImJvdW5kcyIsImxlZnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJ1cGRhdGUiLCJhbmltYXRlIiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJyb3RhdGlvbiIsInNjYWxlIiwiXyIsIm9wYWNpdHkiLCJtdWx0aXBsaWVyIiwiaXRlbSIsInN0YXJ0IiwiaGlkZSIsImV2ZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9