/*! For license information please see main.a19afd4694f0ec22f8a4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),o=e.n(l),h=e("./app/components/Canvas/about/Media.js");class n{constructor({element:t,geometry:s,gl:e,index:r,scene:l,sizes:o}){this.element=t,this.geometry=s,this.gl=e,this.index=r,this.scene=l,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediaElements=this.element.querySelectorAll(".about__gallery__media"),this.media=o()(this.mediaElements,((t,s)=>new h.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o()(this.medias,(s=>s.onResize(t,this.scroll.current)))}onTouchDown({x:t,y:s}){this.scroll.current=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o()(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if("left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"514f261c48c47d010708"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDbkNQLEVBQU15QixLQUFLSyxTQUFTQyxFQUFHVixFQUFBQSxRQUFLQyxNQUFNVSxPQUFrQixLQUFWQyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUdsRSxDQUlBbEMsRUFBTW1CLE9BQU8vQixLQUFLRyxPQUFPLElBRzdCLGtCQy9IRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvYWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHtlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXN9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5ncm91cCA9bmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQgOjAsXG4gICAgICB0YXJnZXQgOjAsXG4gICAgICBsYXN0IDowLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKXtcbiAgICB0aGlzLm1lZGlhRWxlbWVudHMgPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcbiAgICAvLyDms6jmhI/vvIzlm77niYfpgInmi6nmmK/pgInmi6nkuIDkuKrnsbvlkI3vvIguKSDmiJbogIVJROWQje+8iCPvvInmiYDku6XvvIzopoHms6jmhI/kuI3mmK/pgInmi6nlrZfnrKbkuLJcblxuICAgIHRoaXMubWVkaWEgPSBtYXAodGhpcy5tZWRpYUVsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblxuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG5cbiAgICB9KVxuICB9XG4vKipcbiAqIEV2ZW50cy5cbiAqL1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5zaXplcy53aWR0aFxuICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQ9IHRoaXMuc2Nyb2xsXG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPXRoaXMuc2Nyb2xsLmN1cnJlbnQgLWRpc3RhbmNlXG4gICAgLy8g5aaC5p6c6byg5qCH5ZKM5Zu+54mH55qE56e75Yqo55u45Y+N5pa55ZCR77yM6KaB55So5YeP5Y+3XG5cblxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgfVxuXG5cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICB9XG4gICAgLy8g5qOA5rWL6byg5qCH5rua5Yqo5pa55ZCR77yM5b2T5YmN5L2N572u5ZKM5YWI5YmN5L2N572u5YGa5q+U6L6D44CCXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG4gICAgXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAvLyBGb3IgWCBheGlzXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcbiAgICAgICAgLy8g5YWD57Sg55qEeOS9jee9rivov5nkuKrlhYPntKDnmoTkuIDljYrnmoTlrr3luqbvvIzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoTmnIDlj7PovrnovrnnlYzvvIzov5nkuKrovrnnlYzlsI/pm6jlsY/luZXnmoTmnIDlt6bovrnnmoTovrnnlYzlsLHmmK/lm77niYdvdXQgb2YgcGljdHVyZVxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIC8vIOihqOekuuWxj+W5leWuveW6pueahOS4gOWNiuOAguWwhuWFtuWPlui0n+WAvOeahOWOn+WboOaYr++8jOmAmuW4uOaDheWGteS4i+Wxj+W5leW3puS+p+i+ueeVjOeahOWdkOagh+WAvOaYr+i0n+eahO+8jOiAjOWxj+W5leWPs+S+p+i+ueeVjOaYr+ato+eahOOAglxuICAgICAgICAgIC8vIOajgOafpeesrOS4gOS4quWqkuS9k+WFg+e0oOeahOS9jee9ruaYr+WQpui2heWHuuWxj+W5leW3puS+p+i+ueeVjFxuICAgICAgICAgIG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgICAvLyDlvZPnlKjmiLflvoDlt6bovrnmi73vvIzlubbkuJTnp7vlh7rljrvlkI7vvIzopoHlsIblroPmlL7liLDmnIDlj7Povrnorqnku5bku47lj7Povrnov5vmnaXvvIwg6L6+5oiQ5LiA5Liq5b6q546vLOWwseaYr+esrOS4gOS4quWFg+e0oOeahFjntK/liqDkuIrmlbTkuKrnlLvlu4rnmoTlrr3luqbvvIzlsLHliLDkuobmnIDlj7PovrlcbiAgICAgICAgICAvLyDnm7jlr7nkuo7lr7nosaHoh6rouqvnmoTkuK3lv4PovbTmiJbogIXljp/ngrnnmoTkvY3nva7vvIzkuZ/lsLHmmK/or7Rsb2NhbCBwb3NpdGlvblxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICBcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMil7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG5cbiAgICAgXG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbClcbiAgICB9KVxuICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUxNGYyNjFjNDhjNDdkMDEwNzA4XCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYSIsIm1hcCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1lZGlhcyIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJnYWxsZXJ5U2l6ZXMiLCJyb3RhdGlvbiIsInoiLCJyYW5kb20iLCJNYXRoIiwiUEkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=