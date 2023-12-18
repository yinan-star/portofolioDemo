/*! For license information please see main.e5f8dfd8fa155c83032b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>n});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),h=e("./node_modules/lodash/map.js"),o=e.n(h),l=e("./app/components/Canvas/about/Media.js");class n{constructor({element:s,geometry:t,gl:e,index:r,scene:h,sizes:o}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.gl=e,this.index=r,this.scene=h,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediaElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o()(this.mediaElements,((s,t)=>new l.default({element:s,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}show(){o()(this.medias,(s=>s.show()))}hide(){o()(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o()(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o()(this.medias,((s,t)=>{const e=s.mesh.scale.x/2+.25;if("left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=s*this.sizes.height)}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"4d546338033a7c94327d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLRCxNQUFNeUIsTUFBUSxJQUN6Qk4sRUFBTTBCLE9BQVM1QyxLQUFLd0IsTUFHeEIsQ0FHQU4sRUFBTWlCLE9BQU9uQyxLQUFLSyxPQUFPQyxRQUFRLElBU25DTixLQUFLRyxNQUFNd0MsU0FBU2QsRUFBSUEsRUFBSTdCLEtBQUtELE1BQU04QyxPQUd6QyxDQUlBQyxPQUFBQSxHQUNFOUMsS0FBS0YsTUFBTWlELFlBQVkvQyxLQUFLRyxNQUM5QixrQkNySkY2QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudFdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fZ2FsbGVyeV9fd3JhcHBlcicpXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYUVsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuICAgIC8vIOazqOaEj++8jOWbvueJh+mAieaLqeaYr+mAieaLqeS4gOS4quexu+WQje+8iC4pIOaIluiAhUlE5ZCN77yII++8ieaJgOS7pe+8jOimgeazqOaEj+S4jeaYr+mAieaLqeWtl+espuS4slxuXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYUVsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblxuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG5cbiAgICB9KVxuICB9XG5cbiAgLy8gQW5pbWF0aW9uc1xuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICB9XG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLnNpemVzLndpZHRoXG4gICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG5cbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG5cbiAgICAvLyDlpoLmnpzpvKDmoIflkozlm77niYfnmoTnp7vliqjnm7jlj43mlrnlkJHvvIzopoHnlKjlh4/lj7dcblxuXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICB9XG5cblxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoeSkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICB9XG4gICAgLy8g5qOA5rWL6byg5qCH5rua5Yqo5pa55ZCR77yM5b2T5YmN5L2N572u5ZKM5YWI5YmN5L2N572u5YGa5q+U6L6D44CCXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gRm9yIFggYXhpc1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMiArIDAuMjVcbiAgICAgIC8vIOavj+W8oOWbvueJh+S5i+mXtOeahOmXtOmalO+8n1xuXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG5cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgICAvLyDmoLnmja7mu5rliqjnmoTkvY3nva7mnaXmm7TmlrDlqpLkvZPlhYPntKDnmoTnirbmgIHjgIJcbiAgICAgIC8vIOWmguaenOWbvueJh+WKoOi9veS6hu+8jOS9huaYr+ayoeacieaMieeFp+WOn+adpeeahOS9jee9ruaUvu+8jOiusOW+l+abtOaWsOi/meS4qlxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ID0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiAxIC0gMVxuICAgICAgLy8gLy8gZ2FsbGVyeeeahOa7muWKqOWKqOeUu1xuXG5cbiAgICB9KVxuICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gICAgLy8g5Zug5Li6eei/mOWPquaYr+S4quavlOS+i+WboOWtkO+8jOaJgOS7pei/mOS4jeaYr+ecn+WunueahOWAvFxuXG4gIH1cbiAgLyoqXG4gICogRGVzdHJveVxuICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGQ1NDYzMzgwMzNhN2M5NDMyN2RcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwic3RhcnQiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiZGlyZWN0aW9uIiwiR1NBUCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9