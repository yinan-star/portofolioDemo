/*! For license information please see main.94b063d66b3cf6d708c0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e.n(o),c=e("./node_modules/lodash/map.js"),a=e.n(c),h=e("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.transition=l,this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transformPrefix=n()("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.transition.animate({position:{x:0,y:0,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{a()(this.medias,(t=>{t!==this.media&&t.show()})),this.media.opacity.multiplier=1,this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else a()(this.medias,(t=>t.show()))}hide(){a()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`,this.media=this.medias[this.index]}update(){this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),a()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"468f79af53765a588db0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2UsT0FBT0UsT0FBUWpCLEtBQUtlLE9BQU9HLE1BRWxHbEIsS0FBS00sZUFBZTBFLE1BQU1oRixLQUFLRSxpQkFBb0IsY0FBYUYsS0FBS2UsT0FBT0MsYUFHeEVoQixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsUUFDakNoQixLQUFLZSxPQUFPdUUsVUFBWSxRQUNmdEYsS0FBS2UsT0FBT0ksS0FBT25CLEtBQUtlLE9BQU9DLFVBQ3hDaEIsS0FBS2UsT0FBT3VFLFVBQVksUUFJMUJ0RixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsUUFFL0IsTUFBTWUsRUFBUXdELEtBQUtDLE1BQU1ELEtBQUtFLEtBQUt6RixLQUFLZSxPQUFPQyxRQUFVaEIsS0FBSzRCLE9BQU8sR0FBR2lCLE9BQU9FLE1BQVEsR0FBSy9DLEtBQUtlLE9BQU9nRCxRQUFVL0QsS0FBSzRCLE9BQU84RCxPQUFTLElBR25JMUYsS0FBSytCLFFBQVVBLEdBQ2pCL0IsS0FBS3dFLFNBQVN6QyxHQUdoQkYsSUFBSTdCLEtBQUs0QixRQUFRLENBQUNlLEVBQU9aLEtBQ3ZCWSxFQUFNc0MsT0FBT2pGLEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsTUFBTSxHQVFqRCxDQUtBNEQsT0FBQUEsR0FDRTNGLEtBQUtILE1BQU0rRixZQUFZNUYsS0FBS0ksTUFDOUIsa0JDbE5GeUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9jb2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcbiAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIHRoaXMuaWQgPSAnY29sbGVjdGlvbnMnO1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG4gICAgdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXG4gICAgdGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG4gICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICB0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUgPSAnY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnXG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh7IHNpemVzOiB0aGlzLnNpemVzIH0pO1xuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICB0aGlzLnNob3coKVxuICAgIC8vIOWnkO+8jGNvbnN0cnVjdG9y5qC85byP5pivKHt9KXt944CC5LiN6KaB5b+Y6K6w5LqGXG5cbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgLy8g5Lyg5YiwTWVkaWHph4zpnaJcbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICAvLyBBbmltYXRpb25zXG4gIGFzeW5jIHNob3coKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgeyBzcmMgfSA9IHRoaXMudHJhbnNpdGlvbi5tZXNoLnByb2dyYW0udW5pZm9ybXMudE1hcC52YWx1ZS5pbWFnZTtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbc3JjXTtcbiAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZCgobWVkaWEpID0+IG1lZGlhLnRleHR1cmUgPT09IHRleHR1cmUpO1xuICAgICAgY29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcblxuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZSh7XG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgICAgICAgcm90YXRpb246IG1lZGlhLm1lc2gucm90YXRpb24sXG4gICAgICAgIHNjYWxlOiBtZWRpYS5tZXNoLnNjYWxlLFxuXG4gICAgICB9LCBfID0+IHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gICAgICAgICAgaWYgKG1lZGlhICE9PSB0aGlzLm1lZGlhKSB7XG4gICAgICAgICAgICBtZWRpYS5zaG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tZWRpYS5vcGFjaXR5Lm11bHRpcGxpZXIgPSAxO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSBzY3JvbGw7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgICB9XG4gIH1cbiAgaGlkZSgpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSkgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG4gICAgLy8g5bGP5bmV55qE5bC65a+477yM57uZdXBkYXRl6ICM5LiN5piv55S75biD55qEXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vIOiOt+WPluWFg+e0oOeahOS9jee9ruWSjOWwuuWvuFxuXG4gICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcbiAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2VcbiAgICAvLyDlpoLmnpzpvKDmoIflkozlm77niYfnmoTnp7vliqjnm7jlj43mlrnlkJHvvIzopoHnlKjlh4/lj7dcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbC50YXJnZXQsIGRpc3RhbmNlKVxuICAgIC8vIOWmguaenOWbvueJh+S4jeiDveenu+WKqO+8jOeci+S4i+m8oOagh+iDveS4jeiDveenu+WKqOaVsOaNru+8jOWmguaenOm8oOagh+iDveenu+WKqOaVsOaNru+8jOmCo+WwseaYr+ayoeacieaKiui/meS4quWAvOe7meWIsG1lZGlh6K6p5Zu+54mH56e75YqoXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICB9XG5cbiAgb25XaGVlbCh7IHBpeGVsWSB9KSB7XG4gICAgLy8g5o2V6I635rua5Yqo5LqL5Lu255qE5YOP57Sg5YC877yM54S25ZCO5qC55o2u6L+Z5Lqb5YC85p2l5pu05paw6aG16Z2i5Lit5p+Q5Lqb5YWD57Sg55qE5L2N572u5oiW54q25oCB77yM5a6e546w6aG16Z2i55qE5rua5Yqo5oiW6KeG5Zu+55qE5Y+Y5YyWXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZWTogZTliqjliqjnlLvlm77niYfmloflrZfmoIfpophcbiAgICovXG4gIG9uQ2hhbmdlKGluZGV4KSB7XG4gICAgLy8g5LuO5YW25LuW5Zyw5pa55o6l5Y+X57Si5byVLOm8oOagh+a7keWKqO+8jOW3puS4i+inkuaWh+Wtl+WGheWuuei3n+edgOWbvueJh+WPmOWMllxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuICAgIG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0kezI1ICogc2VsZWN0ZWRDb2xsZWN0aW9ufSUpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKWBcblxuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhc1t0aGlzLmluZGV4XVxuICB9XG5cbiAgLy8gVXBkYXRlXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgIC8vIOa7muWKqOa7mui9rumZkOWItlxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gICAgdGhpcy5nYWxsZXJ5RWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIC8vIOWwhuWbvueJh+mTvuaOpeeahOWuueWZqG1hdGNo5rua5Yqo55qE5Z2Q5qCH6ZqP552A5Zu+54mH5LiA6LW35rua6ICM5LiN5piv5YGc5Zyo5Y6f5ZywXG5cbiAgICBpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICB9XG4gICAgLy8g5qOA5rWL6byg5qCH5rua5Yqo5pa55ZCR77yM5b2T5YmN5L2N572u5ZKM5YWI5YmN5L2N572u5YGa5q+U6L6D44CCXG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKCh0aGlzLnNjcm9sbC5jdXJyZW50IC0gdGhpcy5tZWRpYXNbMF0uYm91bmRzLndpZHRoIC8gMikgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiAodGhpcy5tZWRpYXMubGVuZ3RoIC0gMSkpO1xuICAgIC8v5YeP5Y675LiA5Y2K55qE5Y2h54mH5a695bqmLOS9v+W+l+aPkOWJjWhpZ2hsaWdodOWNoeeJhyzogIzkuI3mmK/nrYnliLDljaHniYd56L205Lit5b+D5omN5r+A5rS75bCx5oWi5LqGXG4gICAgLy8gTWF0aC5mbG9vcizlj5bmlbTmlbDvvIzmu5rliqjnibnlrprot53nprvlkI7noa7lrprlm77niYflhYPntKDlnKjmlbDnu4TkuK3nmoTntKLlvJVcbiAgICBpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoaW5kZXgpXG4gICAgfVxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5pbmRleClcbiAgICAgIC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSArPSBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIDQwIC0gNDBcblxuICAgIH0pXG5cbiAgICAvLyDkvKDnu5ltZWRpYeaWh+S7tizlsIblvZPliY3nmoTpvKDmoIfmu5rliqjkvY3nva7kvKDnu5ltZWRpYVxuXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDY4Zjc5YWY1Mzc2NWE1ODhkYjBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImlkIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJtZWRpYXNFbGVtZW50cyIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwibGFzdCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwic3JjIiwibWVzaCIsInByb2dyYW0iLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsImltYWdlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwibWVkaWEiLCJmaW5kIiwiYm91bmRzIiwibGVmdCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImFuaW1hdGUiLCJwb3NpdGlvbiIsIngiLCJ5IiwieiIsInJvdGF0aW9uIiwic2NhbGUiLCJfIiwib3BhY2l0eSIsIm11bHRpcGxpZXIiLCJzdGFydCIsImhpZGUiLCJldmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiY2xhbXAiLCJpbnRlcnBvbGF0ZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==