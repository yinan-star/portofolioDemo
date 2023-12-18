/*! For license information please see main.d1d767124e9cffe697f0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>n});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),l=e.n(o),h=e("./app/components/Canvas/about/Media.js");class n{constructor({element:s,geometry:t,gl:e,index:r,scene:o,sizes:l}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.gl=e,this.index=r,this.scene=o,this.sizes=l,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1,velocity:1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediaElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=l()(this.mediaElements,((s,t)=>new h.default({element:s,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}show(){l()(this.medias,(s=>s.show()))}hide(){l()(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,l()(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){this.bounds&&(this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-1):this.scroll.current>this.scroll.target&&(this.direction="left",this.scroll.velocity=1),this.scroll.target-=this.scroll.velocity+s,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),l()(this.medias,((s,t)=>{const e=s.mesh.scale.x/2+.25;if("left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=s*this.sizes.height)}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"b56bc38a84842296f4f3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQzFCTixFQUFNMEIsT0FBUzdDLEtBQUt5QixNQUd4QixNQUFPLEdBQXVCLFVBQW5CekIsS0FBS3FDLFVBQXVCLENBQzNCbEIsRUFBTXVCLEtBQUtFLFNBQVNmLEVBQUlZLEVBRTFCekMsS0FBS0QsTUFBTTBCLE1BQVEsSUFDekJOLEVBQU0wQixPQUFTN0MsS0FBS3lCLE1BR3hCLENBR0FOLEVBQU1pQixPQUFPcEMsS0FBS0ssT0FBT0MsUUFBUSxJQVNuQ04sS0FBS0csTUFBTXlDLFNBQVNkLEVBQUlBLEVBQUk5QixLQUFLRCxNQUFNK0MsT0FHekMsQ0FJQUMsT0FBQUEsR0FDRS9DLEtBQUtGLE1BQU1rRCxZQUFZaEQsS0FBS0csTUFDOUIsa0JDNUpGOEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2dhbGxlcnlfX3dyYXBwZXInKVxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYUVsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuICAgIC8vIOazqOaEj++8jOWbvueJh+mAieaLqeaYr+mAieaLqeS4gOS4quexu+WQje+8iC4pIOaIluiAhUlE5ZCN77yII++8ieaJgOS7pe+8jOimgeazqOaEj+S4jeaYr+mAieaLqeWtl+espuS4slxuXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYUVsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblxuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG5cbiAgICB9KVxuICB9XG5cbiAgLy8gQW5pbWF0aW9uc1xuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICB9XG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLnNpemVzLndpZHRoXG4gICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG5cbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG5cbiAgICAvLyDlpoLmnpzpvKDmoIflkozlm77niYfnmoTnp7vliqjnm7jlj43mlrnlkJHvvIzopoHnlKjlh4/lj7dcblxuXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICB9XG5cblxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoeSkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtMVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gMVxuICAgIH1cbiAgICAvLyDmo4DmtYvpvKDmoIfmu5rliqjmlrnlkJHvvIzlvZPliY3kvY3nva7lkozlhYjliY3kvY3nva7lgZrmr5TovoPjgIJcblxuICAgIC8vIOiHquWKqOa7muWKqOWbvueJh++8jOaXoOmcgOaJi+WKqOa7mu+8jOWcqOaJi+WKqOa7muWKqOS5i+WJjS7mu5rliqjnmoTmlrnlkJHlnKjkuIrpnaLorr7nva7kuobmoLnmja5kaXJlY3Rpb27mu5rliqhcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHkgKyB5XG5cbiAgICAvLyDmiYvliqjmu5pcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gRm9yIFggYXhpc1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMiArIDAuMjVcbiAgICAgIC8vIOavj+W8oOWbvueJh+S5i+mXtOeahOmXtOmalO+8n1xuXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG5cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgICAvLyDmoLnmja7mu5rliqjnmoTkvY3nva7mnaXmm7TmlrDlqpLkvZPlhYPntKDnmoTnirbmgIHjgIJcbiAgICAgIC8vIOWmguaenOWbvueJh+WKoOi9veS6hu+8jOS9huaYr+ayoeacieaMieeFp+WOn+adpeeahOS9jee9ruaUvu+8jOiusOW+l+abtOaWsOi/meS4qlxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiAxIC0gMVxuICAgICAgLy8gLy8gZ2FsbGVyeeeahOa7muWKqOWKqOeUu1xuXG5cbiAgICB9KVxuICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gICAgLy8g5Zug5Li6eei/mOWPquaYr+S4quavlOS+i+WboOWtkO+8jOaJgOS7pei/mOS4jeaYr+ecn+WunueahOWAvFxuXG4gIH1cbiAgLyoqXG4gICogRGVzdHJveVxuICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjU2YmMzOGE4NDg0MjI5NmY0ZjNcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxlcnAiLCJ2ZWxvY2l0eSIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJzaG93IiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJzdGFydCIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=