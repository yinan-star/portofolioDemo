/*! For license information please see main.61fb9196adb003faa811.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var l=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),n=s.n(o),c=s("./node_modules/lodash/map.js"),a=s.n(c),h=s("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.scene=t,this.sizes=s,this.transformPrefix=n()("transform"),this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((e,t)=>new h.default({element:e,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}show(){a()(this.medias,(e=>e.show()))}hide(){a()(this.medias,(e=>e.hide()))}onResize(e){this.sizes=e.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(t=>t.onResize(e,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:e,y:t}){this.scroll.last=this.scroll.current}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:e,y:t}){}onWheel({pixelY:e}){this.scroll.target+=e}onChange(e){this.index=e;const t=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionsElements,((e,s)=>{s===t?e.classList.add(this.collectionsElementsActive):e.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*t}%) translate(-50%, -50%) rotate(-90deg)`}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(-${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,a()(this.medias,((e,t)=>{e.update(this.scroll.current)}));const e=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==e&&this.onChange(e)}destroy(){this.scene.removeChild(this.group)}}}},(function(e){e.h=()=>"650226e349f49a52e077"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFvQixlQUFjLEdBQUtrRCwwQ0FDekUsQ0FHQVEsTUFBQUEsR0FDSSxJQUFLM0QsS0FBS21DLE9BQVEsT0FFbEJuQyxLQUFLYyxPQUFPRSxPQUFTNEMsRUFBQUEsUUFBS0MsTUFBTUMsT0FBUTlELEtBQUtjLE9BQU91QixNQUFPLEVBQUdyQyxLQUFLYyxPQUFPRSxRQUcxRWhCLEtBQUtjLE9BQU9DLFFBQVU2QyxFQUFBQSxRQUFLQyxNQUFNRSxZQUFZL0QsS0FBS2MsT0FBT0MsUUFBU2YsS0FBS2MsT0FBT0UsT0FBUWhCLEtBQUtjLE9BQU9HLE1BRWxHakIsS0FBS0ssZUFBZXFELE1BQU0xRCxLQUFLQyxpQkFBb0IsZUFBY0QsS0FBS2MsT0FBT0MsYUFHekVmLEtBQUtjLE9BQU9JLEtBQU9sQixLQUFLYyxPQUFPQyxRQUMvQmYsS0FBS2MsT0FBT2tELFVBQVksUUFDakJoRSxLQUFLYyxPQUFPSSxLQUFPbEIsS0FBS2MsT0FBT0MsVUFDdENmLEtBQUtjLE9BQU9rRCxVQUFZLFFBSTVCaEUsS0FBS2MsT0FBT0ksS0FBT2xCLEtBQUtjLE9BQU9DLFFBRS9CWSxJQUFJM0IsS0FBSzBCLFFBQVEsQ0FBQ0ssRUFBT0YsS0FDckJFLEVBQU00QixPQUFPM0QsS0FBS2MsT0FBT0MsUUFBUSxJQUlyQyxNQUFNYyxFQUFPb0MsS0FBS0MsTUFBTUQsS0FBS0UsSUFBSW5FLEtBQUtjLE9BQU9DLFFBQVVmLEtBQUtjLE9BQU91QixPQUFTckMsS0FBSzBCLE9BQU8wQyxRQUVyRnBFLEtBQUs2QixRQUFVQSxHQUNkN0IsS0FBS2tELFNBQVNyQixFQUV0QixDQUtBd0MsT0FBQUEsR0FDSXJFLEtBQUtGLE1BQU13RSxZQUFZdEUsS0FBS0csTUFDaEMsa0JDakxKb0UsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9jb2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG4gICAgICAgIHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlcycpXG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYSdcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgICAgICBsZXJwOiAwLjFcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICAgICAgbGFzdDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAgICAgLy8g5Lyg5YiwTWVkaWHph4zpnaJcbiAgICAgICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBBbmltYXRpb25zXG4gICAgc2hvdygpIHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICAgIH1cblxuICAgIC8vIEV2ZW50c1xuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgICAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgICAgICAvLyDorqHnrpflvZPliY3nlLvlu4rnmoTlrr3luqbljaDop4bnqpflj6PnmoTlrr3luqbnmoTlpJrlsJHnhLblkI7kuZjku6XlhbfkvZPnmoTlrr3luqYtLT7lsIblhYPntKDlnKjop4blj6PkuK3nmoTmr5TkvovovazmjaLkuLrlhbfkvZPnmoTlrp7pmYXlrr3luqbjgILlk43lupTlvI/luIPlsYBcbiAgICAgICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICB9XG5cbiAgICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG4gICAgICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbC50YXJnZXQsIGRpc3RhbmNlKVxuICAgICAgICAvLyDlpoLmnpzlm77niYfkuI3og73np7vliqjvvIznnIvkuIvpvKDmoIfog73kuI3og73np7vliqjmlbDmja7vvIzlpoLmnpzpvKDmoIfog73np7vliqjmlbDmja7vvIzpgqPlsLHmmK/msqHmnInmiorov5nkuKrlgLznu5nliLBtZWRpYeiuqeWbvueJh+enu+WKqFxuICAgIH1cblxuICAgIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gICAgfVxuXG4gICAgb25XaGVlbCh7IHBpeGVsWSB9KSB7XG4gICAgICAgIC8vIOaNleiOt+a7muWKqOS6i+S7tueahOWDj+e0oOWAvO+8jOeEtuWQjuagueaNrui/meS6m+WAvOadpeabtOaWsOmhtemdouS4reafkOS6m+WFg+e0oOeahOS9jee9ruaIlueKtuaAge+8jOWunueOsOmhtemdoueahOa7muWKqOaIluinhuWbvueahOWPmOWMllxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlZOiBlOWKqOWKqOeUu+WbvueJh+aWh+Wtl+agh+mimFxuICAgICAqL1xuICAgIG9uQ2hhbmdlIChpbmRleCl7XG4gICAgICAgIC8vIOS7juWFtuS7luWcsOaWueaOpeWPl+e0ouW8lSzpvKDmoIfmu5HliqjvvIzlt6bkuIvop5LmloflrZflhoXlrrnot5/nnYDlm77niYflj5jljJZcbiAgICAgICAgdGhpcy5pbmRleCA9aW5kZXhcblxuICAgICAgICBjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG4gICAgICAgIG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LGVsZW1lbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgXG4gICAgfVxuXG4gICAgLy8gVXBkYXRlXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKCAtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgICAgICAgLy8g5rua5Yqo5rua6L2u6ZmQ5Yi2XG5cbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgICAgIC8vIOWwhuWbvueJh+mTvuaOpeeahOWuueWZqG1hdGNo5rua5Yqo55qE5Z2Q5qCH6ZqP552A5Zu+54mH5LiA6LW35rua6ICM5LiN5piv5YGc5Zyo5Y6f5ZywXG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgICAgICB9XG4gICAgICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5Lyg57uZbWVkaWHmlofku7Ys5bCG5b2T5YmN55qE6byg5qCH5rua5Yqo5L2N572u5Lyg57uZbWVkaWFcblxuICAgICAgICBjb25zdCBpbmRleCA9TWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXQpICogdGhpcy5tZWRpYXMubGVuZ3RoKVxuICAgICAgICAvLyBNYXRoLmZsb29yLOWPluaVtOaVsO+8jOa7muWKqOeJueWumui3neemu+WQjuehruWumuWbvueJh+WFg+e0oOWcqOaVsOe7hOS4reeahOe0ouW8lVxuICAgICAgICBpZih0aGlzLmluZGV4ICE9PSBpbmRleCl7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGluZGV4KSAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY1MDIyNmUzNDlmNDlhNTJlMDc3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5V3JhcHBlckVsZW1lbnQiLCJ0aXRsZXNFbGVtZW50IiwiY29sbGVjdGlvbnNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwibWVkaWFzRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsImxhc3QiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGltaXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ1cGRhdGUiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9