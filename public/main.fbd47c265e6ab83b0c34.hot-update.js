/*! For license information please see main.fbd47c265e6ab83b0c34.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e.n(o),c=e("./node_modules/lodash/map.js"),a=e.n(c),h=e("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.transition=l,this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transformPrefix=n()("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.transition.animate(this.medias[0].mesh,(t=>{a()(this.medias,(t=>{t!==this.media&&t.show()})),this.media.opacity.multiplier=1,this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else a()(this.medias,(t=>t.show()))}hide(){a()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`,this.media=this.medias[this.index]}update(){this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),a()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"b79e7acc6a93f753daad"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT0MsYUFHeEVoQixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsUUFDakNoQixLQUFLZSxPQUFPbUUsVUFBWSxRQUNmbEYsS0FBS2UsT0FBT0ksS0FBT25CLEtBQUtlLE9BQU9DLFVBQ3hDaEIsS0FBS2UsT0FBT21FLFVBQVksUUFJMUJsRixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsUUFFL0IsTUFBTWUsRUFBUW9ELEtBQUtDLE1BQU1ELEtBQUtFLEtBQUtyRixLQUFLZSxPQUFPQyxRQUFVaEIsS0FBSzRCLE9BQU8sR0FBR2lCLE9BQU9FLE1BQVEsR0FBSy9DLEtBQUtlLE9BQU8wQyxRQUFVekQsS0FBSzRCLE9BQU8wRCxPQUFTLElBR25JdEYsS0FBSytCLFFBQVVBLEdBQ2pCL0IsS0FBS29FLFNBQVNyQyxHQUdoQkYsSUFBSTdCLEtBQUs0QixRQUFRLENBQUNlLEVBQU9aLEtBQ3ZCWSxFQUFNa0MsT0FBTzdFLEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsTUFBTSxHQVFqRCxDQUtBd0QsT0FBQUEsR0FDRXZGLEtBQUtILE1BQU0yRixZQUFZeEYsS0FBS0ksTUFDOUIsa0JDN01GcUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9jb2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcbiAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIHRoaXMuaWQgPSAnY29sbGVjdGlvbnMnO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG4gICAgdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXG4gICAgdGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG4gICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICB0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUgPSAnY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnXG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh7IHNpemVzOiB0aGlzLnNpemVzIH0pO1xuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICB0aGlzLnNob3coKVxuICAgIC8vIOWnkO+8jGNvbnN0cnVjdG9y5qC85byP5pivKHt9KXt944CC5LiN6KaB5b+Y6K6w5LqGXG5cbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgLy8g5Lyg5YiwTWVkaWHph4zpnaJcbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICAvLyBBbmltYXRpb25zXG4gIGFzeW5jIHNob3coKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgeyBzcmMgfSA9IHRoaXMudHJhbnNpdGlvbi5tZXNoLnByb2dyYW0udW5pZm9ybXMudE1hcC52YWx1ZS5pbWFnZTtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbc3JjXTtcbiAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZCgobWVkaWEpID0+IG1lZGlhLnRleHR1cmUgPT09IHRleHR1cmUpO1xuICAgICAgY29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMjsgXG5cblxuICAgICAgdGhpcy50cmFuc2l0aW9uLmFuaW1hdGUodGhpcy5tZWRpYXNbMF0ubWVzaCwgXyA9PiB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAgICAgICAgIGlmIChtZWRpYSAhPT0gdGhpcy5tZWRpYSkge1xuICAgICAgICAgICAgbWVkaWEuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWVkaWEub3BhY2l0eS5tdWx0aXBsaWVyID0gMTtcblxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gc2Nyb2xsO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gICAgfVxuICB9XG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IG1lZGlhLmhpZGUoKSlcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG4gICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG4gICAgLy8g5aaC5p6c6byg5qCH5ZKM5Zu+54mH55qE56e75Yqo55u45Y+N5pa55ZCR77yM6KaB55So5YeP5Y+3XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zY3JvbGwudGFyZ2V0LCBkaXN0YW5jZSlcbiAgICAvLyDlpoLmnpzlm77niYfkuI3og73np7vliqjvvIznnIvkuIvpvKDmoIfog73kuI3og73np7vliqjmlbDmja7vvIzlpoLmnpzpvKDmoIfog73np7vliqjmlbDmja7vvIzpgqPlsLHmmK/msqHmnInmiorov5nkuKrlgLznu5nliLBtZWRpYeiuqeWbvueJh+enu+WKqFxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgfVxuXG4gIG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuICAgIC8vIOaNleiOt+a7muWKqOS6i+S7tueahOWDj+e0oOWAvO+8jOeEtuWQjuagueaNrui/meS6m+WAvOadpeabtOaWsOmhtemdouS4reafkOS6m+WFg+e0oOeahOS9jee9ruaIlueKtuaAge+8jOWunueOsOmhtemdoueahOa7muWKqOaIluinhuWbvueahOWPmOWMllxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Vk6IGU5Yqo5Yqo55S75Zu+54mH5paH5a2X5qCH6aKYXG4gICAqL1xuICBvbkNoYW5nZShpbmRleCkge1xuICAgIC8vIOS7juWFtuS7luWcsOaWueaOpeWPl+e0ouW8lSzpvKDmoIfmu5HliqjvvIzlt6bkuIvop5LmloflrZflhoXlrrnot5/nnYDlm77niYflj5jljJZcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXG5cbiAgICBtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgXG5cbiAgICB0aGlzLm1lZGlhID0gdGhpcy5tZWRpYXNbdGhpcy5pbmRleF1cbiAgfVxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgICAvLyDmu5rliqjmu5rova7pmZDliLZcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICAvLyDlsIblm77niYfpk77mjqXnmoTlrrnlmahtYXRjaOa7muWKqOeahOWdkOagh+maj+edgOWbvueJh+S4gOi1t+a7muiAjOS4jeaYr+WBnOWcqOWOn+WcsFxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicygodGhpcy5zY3JvbGwuY3VycmVudCAtIHRoaXMubWVkaWFzWzBdLmJvdW5kcy53aWR0aCAvIDIpIC8gdGhpcy5zY3JvbGwubGltaXQpICogKHRoaXMubWVkaWFzLmxlbmd0aCAtIDEpKTtcbiAgICAvL+WHj+WOu+S4gOWNiueahOWNoeeJh+WuveW6pizkvb/lvpfmj5DliY1oaWdobGlnaHTljaHniYcs6ICM5LiN5piv562J5Yiw5Y2h54mHeei9tOS4reW/g+aJjea/gOa0u+WwseaFouS6hlxuICAgIC8vIE1hdGguZmxvb3Is5Y+W5pW05pWw77yM5rua5Yqo54m55a6a6Led56a75ZCO56Gu5a6a5Zu+54mH5YWD57Sg5Zyo5pWw57uE5Lit55qE57Si5byVXG4gICAgaWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGluZGV4KVxuICAgIH1cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuaW5kZXgpXG4gICAgICAvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwXG5cbiAgICB9KVxuXG4gICAgLy8g5Lyg57uZbWVkaWHmlofku7Ys5bCG5b2T5YmN55qE6byg5qCH5rua5Yqo5L2N572u5Lyg57uZbWVkaWFcblxuXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3OWU3YWNjNmE5M2Y3NTNkYWFkXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidHJhbnNpdGlvbiIsInRoaXMiLCJpZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5V3JhcHBlckVsZW1lbnQiLCJ0aXRsZXNFbGVtZW50IiwiY29sbGVjdGlvbnNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwibWVkaWFzRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsImxhc3QiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIm9uUmVzaXplIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsInNyYyIsIm1lc2giLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsIm1lZGlhIiwiZmluZCIsImJvdW5kcyIsImxlZnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJhbmltYXRlIiwiXyIsIm9wYWNpdHkiLCJtdWx0aXBsaWVyIiwic3RhcnQiLCJoaWRlIiwiZXZlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiY2xhbXAiLCJpbnRlcnBvbGF0ZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==