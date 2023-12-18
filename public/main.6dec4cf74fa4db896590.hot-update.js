/*! For license information please see main.6dec4cf74fa4db896590.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),o=e.n(l),h=e("./app/components/Canvas/about/Media.js");class n{constructor({element:t,geometry:s,gl:e,index:r,scene:l,sizes:o}){this.element=t,this.geometry=s,this.gl=e,this.index=r,this.scene=l,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediaElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o()(this.mediaElements,((t,s)=>new h.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o()(this.medias,(s=>s.onResize(t,this.scroll.current)))}onTouchDown({x:t,y:s}){this.scroll.current=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o()(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if("left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll.current)})))}}}},(function(t){t.h=()=>"9147082b55a9d4a39a8b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNZSxLQUFLSyxTQUFTQyxFQUFHVixFQUFBQSxRQUFLQyxNQUFNVSxPQUFrQixLQUFWQyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUdsRSxDQUlBeEIsRUFBTVMsT0FBTy9CLEtBQUtHLE9BQU9DLFFBQVEsSUFHckMsa0JDL0hGMkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3Ioe2VsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplc30pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG5cbiAgICB0aGlzLmdyb3VwID1uZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudCA6MCxcbiAgICAgIHRhcmdldCA6MCxcbiAgICAgIGxhc3QgOjAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpe1xuICAgIHRoaXMubWVkaWFFbGVtZW50cyA9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuICAgIC8vIOazqOaEj++8jOWbvueJh+mAieaLqeaYr+mAieaLqeS4gOS4quexu+WQje+8iC4pIOaIluiAhUlE5ZCN77yII++8ieaJgOS7pe+8jOimgeazqOaEj+S4jeaYr+mAieaLqeWtl+espuS4slxuXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYUVsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblxuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG5cbiAgICB9KVxuICB9XG4vKipcbiAqIEV2ZW50cy5cbiAqL1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgLy8g6I635Y+W5YWD57Sg55qE5L2N572u5ZKM5bC65a+4XG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcbiAgICAvLyDlsY/luZXnmoTlsLrlr7jvvIznu5l1cGRhdGXogIzkuI3mmK/nlLvluIPnmoRcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoICogdGhpcy5zaXplcy53aWR0aFxuICAgIC8vIOiuoeeul+W9k+WJjeeUu+W7iueahOWuveW6puWNoOinhueql+WPo+eahOWuveW6pueahOWkmuWwkeeEtuWQjuS5mOS7peWFt+S9k+eahOWuveW6pi0tPuWwhuWFg+e0oOWcqOinhuWPo+S4reeahOavlOS+i+i9rOaNouS4uuWFt+S9k+eahOWunumZheWuveW6puOAguWTjeW6lOW8j+W4g+WxgFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQ9IHRoaXMuc2Nyb2xsXG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPXRoaXMuc2Nyb2xsLmN1cnJlbnQgLWRpc3RhbmNlXG4gICAgLy8g5aaC5p6c6byg5qCH5ZKM5Zu+54mH55qE56e75Yqo55u45Y+N5pa55ZCR77yM6KaB55So5YeP5Y+3XG5cblxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgfVxuXG5cblxuICAvLyBVcGRhdGVcbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcbiAgICB9XG4gICAgLy8g5qOA5rWL6byg5qCH5rua5Yqo5pa55ZCR77yM5b2T5YmN5L2N572u5ZKM5YWI5YmN5L2N572u5YGa5q+U6L6D44CCXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG4gICAgXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAvLyBGb3IgWCBheGlzXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcbiAgICAgICAgLy8g5YWD57Sg55qEeOS9jee9rivov5nkuKrlhYPntKDnmoTkuIDljYrnmoTlrr3luqbvvIzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoTmnIDlj7PovrnovrnnlYzvvIzov5nkuKrovrnnlYzlsI/pm6jlsY/luZXnmoTmnIDlt6bovrnnmoTovrnnlYzlsLHmmK/lm77niYdvdXQgb2YgcGljdHVyZVxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIC8vIOihqOekuuWxj+W5leWuveW6pueahOS4gOWNiuOAguWwhuWFtuWPlui0n+WAvOeahOWOn+WboOaYr++8jOmAmuW4uOaDheWGteS4i+Wxj+W5leW3puS+p+i+ueeVjOeahOWdkOagh+WAvOaYr+i0n+eahO+8jOiAjOWxj+W5leWPs+S+p+i+ueeVjOaYr+ato+eahOOAglxuICAgICAgICAgIC8vIOajgOafpeesrOS4gOS4quWqkuS9k+WFg+e0oOeahOS9jee9ruaYr+WQpui2heWHuuWxj+W5leW3puS+p+i+ueeVjFxuICAgICAgICAgIG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgICAvLyDlvZPnlKjmiLflvoDlt6bovrnmi73vvIzlubbkuJTnp7vlh7rljrvlkI7vvIzopoHlsIblroPmlL7liLDmnIDlj7Povrnorqnku5bku47lj7Povrnov5vmnaXvvIwg6L6+5oiQ5LiA5Liq5b6q546vLOWwseaYr+esrOS4gOS4quWFg+e0oOeahFjntK/liqDkuIrmlbTkuKrnlLvlu4rnmoTlrr3luqbvvIzlsLHliLDkuobmnIDlj7PovrlcbiAgICAgICAgICAvLyDnm7jlr7nkuo7lr7nosaHoh6rouqvnmoTkuK3lv4PovbTmiJbogIXljp/ngrnnmoTkvY3nva7vvIzkuZ/lsLHmmK/or7Rsb2NhbCBwb3NpdGlvblxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICBcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMil7XG4gICAgICAgICAgbWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuICAgICAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuICAgICAgICB9XG4gICAgICAgICAvLyDov5nkuKrlhYPntKDnmoTlt6bovrnovrnnlYzlpKfkuo7lsY/luZXmnIDlj7Povrks5bCx56e75Yiw5YmN6Z2i5p2lXG4gICAgICB9XG5cbiAgICAgXG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgIH0pXG4gICAgLy8g5Lyg57uZbWVkaWHmlofku7ZcbiAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTE0NzA4MmI1NWE5ZDRhMzlhOGJcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRpcmVjdGlvbiIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImdhbGxlcnlTaXplcyIsInJvdGF0aW9uIiwieiIsInJhbmRvbSIsIk1hdGgiLCJQSSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==