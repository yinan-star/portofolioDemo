/*! For license information please see main.2b56ee85ef813bca6670.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var l=e("./node_modules/ogl/src/core/Transform.js"),i=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e.n(o),c=e("./node_modules/lodash/map.js"),h=e.n(c),a=e("./app/components/Canvas/collections/Media.js");const d=class{constructor({gl:t,scene:s,sizes:e,transition:i}){this.transition=i,this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transformPrefix=n()("transform"),this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=h()(this.mediasElements,((t,s)=>new a.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}show(){this.transition&&this.transition.animate(this.medias[0].mesh,(t=>{})),h()(this.medias,(t=>t.show()))}hide(){h()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,h()(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));h()(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t),h()(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"51555dc70e7a6ed04f0a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtGLE1BQU00QyxNQUFTMkIsS0FBS00sR0FBSyxJQUFZLEVBQUUsR0FPL0csQ0FLQUMsT0FBQUEsR0FDSTVFLEtBQUtILE1BQU1nRixZQUFZN0UsS0FBS0ksTUFDaEMsa0JDNUxKMEUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9jb2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsdHJhbnNpdGlvbiB9KSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuaWQgPSAnY29sbGVjdGlvbnMnO1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG4gICAgICAgIHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlcycpXG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYSdcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgICAgICBsZXJwOiAwLjFcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICAgICAgbGFzdDogMCxcbiAgICAgICAgICAgIGxlcnA6IDAuMSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAgICAgLy8g5Lyg5YiwTWVkaWHph4zpnaJcbiAgICAgICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBBbmltYXRpb25zXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uKXtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKHRoaXMubWVkaWFzWzBdLm1lc2gsIF8gPT57XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcbiAgICB9XG5cbiAgICAvLyBFdmVudHNcbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAgICAgLy8g5bGP5bmV55qE5bC65a+477yM57uZdXBkYXRl6ICM5LiN5piv55S75biD55qEXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICAgICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuICAgICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXG4gICAgfVxuXG4gICAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuICAgICAgICAvLyDlpoLmnpzpvKDmoIflkozlm77niYfnmoTnp7vliqjnm7jlj43mlrnlkJHvvIzopoHnlKjlh4/lj7dcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY3JvbGwudGFyZ2V0LCBkaXN0YW5jZSlcbiAgICAgICAgLy8g5aaC5p6c5Zu+54mH5LiN6IO956e75Yqo77yM55yL5LiL6byg5qCH6IO95LiN6IO956e75Yqo5pWw5o2u77yM5aaC5p6c6byg5qCH6IO956e75Yqo5pWw5o2u77yM6YKj5bCx5piv5rKh5pyJ5oqK6L+Z5Liq5YC857uZ5YiwbWVkaWHorqnlm77niYfnp7vliqhcbiAgICB9XG5cbiAgICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICAgIH1cblxuICAgIG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuICAgICAgICAvLyDmjZXojrfmu5rliqjkuovku7bnmoTlg4/ntKDlgLzvvIznhLblkI7moLnmja7ov5nkupvlgLzmnaXmm7TmlrDpobXpnaLkuK3mn5DkupvlhYPntKDnmoTkvY3nva7miJbnirbmgIHvvIzlrp7njrDpobXpnaLnmoTmu5rliqjmiJbop4blm77nmoTlj5jljJZcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZWTogZTliqjliqjnlLvlm77niYfmloflrZfmoIfpophcbiAgICAgKi9cbiAgICBvbkNoYW5nZSAoaW5kZXgpe1xuICAgICAgICAvLyDku47lhbbku5blnLDmlrnmjqXlj5fntKLlvJUs6byg5qCH5ruR5Yqo77yM5bem5LiL6KeS5paH5a2X5YaF5a656Lef552A5Zu+54mH5Y+Y5YyWXG4gICAgICAgIHRoaXMuaW5kZXggPWluZGV4XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuICAgICAgICBtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCxlbGVtZW50SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7MjUgKiBzZWxlY3RlZENvbGxlY3Rpb259JSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpYFxuICAgIH1cblxuICAgIC8vIFVwZGF0ZVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCggLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG4gICAgICAgIC8vIOa7muWKqOa7mui9rumZkOWItlxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgICAgIC8vIOWwhuWbvueJh+mTvuaOpeeahOWuueWZqG1hdGNo5rua5Yqo55qE5Z2Q5qCH6ZqP552A5Zu+54mH5LiA6LW35rua6ICM5LiN5piv5YGc5Zyo5Y6f5ZywXG5cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgICAgICB9XG4gICAgICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cbiAgICAgICAgY29uc3QgaW5kZXggPU1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcbiAgICAgICAgLy8gTWF0aC5mbG9vcizlj5bmlbTmlbDvvIzmu5rliqjnibnlrprot53nprvlkI7noa7lrprlm77niYflhYPntKDlnKjmlbDnu4TkuK3nmoTntKLlvJVcbiAgICAgICAgaWYodGhpcy5pbmRleCAhPT0gaW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShpbmRleCkgIFxuICAgICAgICB9XG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5pbmRleClcbiAgICAgICAgICAgIG1lZGlhLm1lc2gucG9zaXRpb24ueSArPSBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIDQwIC0gNDBcbiAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAvLyDkvKDnu5ltZWRpYeaWh+S7tizlsIblvZPliY3nmoTpvKDmoIfmu5rliqjkvY3nva7kvKDnu5ltZWRpYVxuXG4gICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MTU1NWRjNzBlN2E2ZWQwNGYwYVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiaWQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJsYXN0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwiYW5pbWF0ZSIsIm1lc2giLCJfIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWl0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiY2xhbXAiLCJpbnRlcnBvbGF0ZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsInBvc2l0aW9uIiwiY29zIiwiUEkiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=