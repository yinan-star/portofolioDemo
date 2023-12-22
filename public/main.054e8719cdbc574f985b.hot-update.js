/*! For license information please see main.054e8719cdbc574f985b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e.n(o),c=e("./node_modules/lodash/map.js"),a=e.n(c),h=e("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.transition=l,this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transformPrefix=n()("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=a()(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:0,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{this.media.opacity.multiplier=1,a()(this.medias,(t=>{t!==this.media&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else a()(this.medias,(t=>t.show()))}hide(){a()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,a()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));a()(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`,this.media=this.medias[this.index]}update(){this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),a()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"a1e3cfd91eeee8054b34"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9DLFFBQVNoQixLQUFLZSxPQUFPRSxPQUFRakIsS0FBS2UsT0FBT0csTUFFbEdsQixLQUFLTSxlQUFlMkUsTUFBTWpGLEtBQUtFLGlCQUFvQixjQUFhRixLQUFLZSxPQUFPQyxhQUd4RWhCLEtBQUtlLE9BQU9JLEtBQU9uQixLQUFLZSxPQUFPQyxRQUNqQ2hCLEtBQUtlLE9BQU91RSxVQUFZLFFBQ2Z0RixLQUFLZSxPQUFPSSxLQUFPbkIsS0FBS2UsT0FBT0MsVUFDeENoQixLQUFLZSxPQUFPdUUsVUFBWSxRQUkxQnRGLEtBQUtlLE9BQU9JLEtBQU9uQixLQUFLZSxPQUFPQyxRQUUvQixNQUFNZSxFQUFRd0QsS0FBS0MsTUFBTUQsS0FBS0UsS0FBS3pGLEtBQUtlLE9BQU9DLFFBQVVoQixLQUFLNEIsT0FBTyxHQUFHaUIsT0FBT0UsTUFBUSxHQUFLL0MsS0FBS2UsT0FBT2lELFFBQVVoRSxLQUFLNEIsT0FBTzhELE9BQVMsSUFHbkkxRixLQUFLK0IsUUFBVUEsR0FDakIvQixLQUFLeUUsU0FBUzFDLEdBR2hCRixJQUFJN0IsS0FBSzRCLFFBQVEsQ0FBQ2UsRUFBT1osS0FDdkJZLEVBQU1NLE9BQU9qRCxLQUFLZSxPQUFPQyxRQUFTaEIsS0FBSytCLE1BQU0sR0FRakQsQ0FLQTRELE9BQUFBLEdBQ0UzRixLQUFLSCxNQUFNK0YsWUFBWTVGLEtBQUtJLE1BQzlCLGtCQ3RORnlGLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvY29sbGVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgdHJhbnNpdGlvbiB9KSB7XG4gICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB0aGlzLmlkID0gJ2NvbGxlY3Rpb25zJztcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuICAgIHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuICAgIHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGVzJylcblxuICAgIHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScpXG4gICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJ1xuICAgICk7XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsZXJwOiAwLjEsXG4gICAgICB2ZWxvY2l0eTogMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcblxuICAgIHRoaXMub25SZXNpemUoeyBzaXplczogdGhpcy5zaXplcyB9KTtcblxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuXG4gICAgdGhpcy5zaG93KClcbiAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQW5pbWF0aW9uc1xuICBhc3luYyBzaG93KCkge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc3JjIH0gPSB0aGlzLnRyYW5zaXRpb24ubWVzaC5wcm9ncmFtLnVuaWZvcm1zLnRNYXAudmFsdWUuaW1hZ2U7XG4gICAgICBjb25zdCB0ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3NyY107XG4gICAgICBjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFzLmZpbmQoKG1lZGlhKSA9PiBtZWRpYS50ZXh0dXJlID09PSB0ZXh0dXJlKTtcbiAgICAgIGNvbnN0IHNjcm9sbCA9IC1tZWRpYS5ib3VuZHMubGVmdCAtIG1lZGlhLmJvdW5kcy53aWR0aCAvIDIgKyB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgIFxuICAgICAgdGhpcy50cmFuc2l0aW9uLmFuaW1hdGUoe1xuICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXG4gICAgICAgIHJvdGF0aW9uOiBtZWRpYS5tZXNoLnJvdGF0aW9uLFxuICAgICAgICBzY2FsZTogbWVkaWEubWVzaC5zY2FsZSxcbiAgICAgICAgLy8g6K6p6L+U5Zue55qE5Zu+54mHbWF0aOWOn+adpeeahOS9jee9rlxuXG4gICAgICB9LCBfID0+IHtcbiAgICAgICAgdGhpcy5tZWRpYS5vcGFjaXR5Lm11bHRpcGxpZXIgPSAxO1xuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAgICAgICAgIGlmIChtZWRpYSAhPT0gdGhpcy5tZWRpYSkge1xuICAgICAgICAgICAgbWVkaWEuc2hvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSBzY3JvbGw7XG4gICAgICBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICAgIH1cbiAgfVxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhKSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICAvLyDorqHnrpflvZPliY3nlLvlu4rnmoTlrr3luqbljaDop4bnqpflj6PnmoTlrr3luqbnmoTlpJrlsJHnhLblkI7kuZjku6XlhbfkvZPnmoTlrr3luqYtLT7lsIblhYPntKDlnKjop4blj6PkuK3nmoTmr5TkvovovazmjaLkuLrlhbfkvZPnmoTlrp7pmYXlrr3luqbjgILlk43lupTlvI/luIPlsYBcbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldCwgZGlzdGFuY2UpXG4gICAgLy8g5aaC5p6c5Zu+54mH5LiN6IO956e75Yqo77yM55yL5LiL6byg5qCH6IO95LiN6IO956e75Yqo5pWw5o2u77yM5aaC5p6c6byg5qCH6IO956e75Yqo5pWw5o2u77yM6YKj5bCx5piv5rKh5pyJ5oqK6L+Z5Liq5YC857uZ5YiwbWVkaWHorqnlm77niYfnp7vliqhcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gIH1cblxuICBvbldoZWVsKHsgcGl4ZWxZIH0pIHtcbiAgICAvLyDmjZXojrfmu5rliqjkuovku7bnmoTlg4/ntKDlgLzvvIznhLblkI7moLnmja7ov5nkupvlgLzmnaXmm7TmlrDpobXpnaLkuK3mn5DkupvlhYPntKDnmoTkvY3nva7miJbnirbmgIHvvIzlrp7njrDpobXpnaLnmoTmu5rliqjmiJbop4blm77nmoTlj5jljJZcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlZOiBlOWKqOWKqOeUu+WbvueJh+aWh+Wtl+agh+mimFxuICAgKi9cbiAgb25DaGFuZ2UoaW5kZXgpIHtcbiAgICAvLyDku47lhbbku5blnLDmlrnmjqXlj5fntKLlvJUs6byg5qCH5ruR5Yqo77yM5bem5LiL6KeS5paH5a2X5YaF5a656Lef552A5Zu+54mH5Y+Y5YyWXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG5cbiAgICBjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG4gICAgbWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7MjUgKiBzZWxlY3RlZENvbGxlY3Rpb259JSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpYFxuXG4gICAgdGhpcy5tZWRpYSA9IHRoaXMubWVkaWFzW3RoaXMuaW5kZXhdXG4gIH1cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG4gICAgLy8g5rua5Yqo5rua6L2u6ZmQ5Yi2XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cbiAgICB0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgLy8g5bCG5Zu+54mH6ZO+5o6l55qE5a655ZmobWF0Y2jmu5rliqjnmoTlnZDmoIfpmo/nnYDlm77niYfkuIDotbfmu5rogIzkuI3mmK/lgZzlnKjljp/lnLBcblxuICAgIGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgIH1cbiAgICAvLyDmo4DmtYvpvKDmoIfmu5rliqjmlrnlkJHvvIzlvZPliY3kvY3nva7lkozlhYjliY3kvY3nva7lgZrmr5TovoPjgIJcblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSB0aGlzLm1lZGlhc1swXS5ib3VuZHMud2lkdGggLyAyKSAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqICh0aGlzLm1lZGlhcy5sZW5ndGggLSAxKSk7XG4gICAgLy/lh4/ljrvkuIDljYrnmoTljaHniYflrr3luqYs5L2/5b6X5o+Q5YmNaGlnaGxpZ2h05Y2h54mHLOiAjOS4jeaYr+etieWIsOWNoeeJh3novbTkuK3lv4PmiY3mv4DmtLvlsLHmhaLkuoZcbiAgICAvLyBNYXRoLmZsb29yLOWPluaVtOaVsO+8jOa7muWKqOeJueWumui3neemu+WQjuehruWumuWbvueJh+WFg+e0oOWcqOaVsOe7hOS4reeahOe0ouW8lVxuICAgIGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShpbmRleClcbiAgICB9XG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLmluZGV4KVxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ICs9IE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLnNpemVzLndpZHRoKSAqIE1hdGguUEkgKiAwLjEpICogNDAgLSA0MFxuXG4gICAgfSlcblxuICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2LOWwhuW9k+WJjeeahOm8oOagh+a7muWKqOS9jee9ruS8oOe7mW1lZGlhXG5cblxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMWUzY2ZkOTFlZWVlODA1NGIzNFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiaWQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJsYXN0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJvblJlc2l6ZSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJzcmMiLCJtZXNoIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJtZWRpYSIsImZpbmQiLCJib3VuZHMiLCJsZWZ0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwidXBkYXRlIiwiYW5pbWF0ZSIsInBvc2l0aW9uIiwieCIsInkiLCJ6Iiwicm90YXRpb24iLCJzY2FsZSIsIl8iLCJvcGFjaXR5IiwibXVsdGlwbGllciIsInN0YXJ0IiwiaGlkZSIsImV2ZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9