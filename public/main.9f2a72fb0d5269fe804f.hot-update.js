/*! For license information please see main.9f2a72fb0d5269fe804f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),a=t.n(i),r=t("./app/components/Canvas/about/Gallery.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=a()(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}show(){a()(this.galleries,(e=>e.show()))}hide(){a()(this.galleries,(e=>e.hide()))}onResize(e){a()(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){a()(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){a()(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){a()(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){a()(this.galleries,(e=>e.update()))}destroy(){a()(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"04ea3fa8d841e47bb2ab"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZjJhNzJmYjBkNTI2OWZlODA0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVVBUUEsY0FDRUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsSUFDdkJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFHTEosS0FBS0MsTUFBTUksVUFBVVAsR0FDckJFLEtBQUtNLE1BSVAsQ0FFQUgsY0FBQUEsR0FDRUgsS0FBS08sU0FBVyxJQUFJQyxFQUFBQSxNQUFNUixLQUFLSCxHQUNqQyxDQUVBTyxlQUFBQSxHQUVFSixLQUFLUyxrQkFBb0JDLFNBQVNDLGlCQUFpQixtQkFDbkRYLEtBQUtZLFVBQVlDLElBQUliLEtBQUtTLG1CQUFtQixDQUFDSyxFQUFTQyxJQUM5QyxJQUFJQyxFQUFBQSxRQUFRLENBQ2pCRixVQUNBUCxTQUFVUCxLQUFLTyxTQUNmVixHQUFJRyxLQUFLSCxHQUNUa0IsUUFDQWpCLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR2xCLENBR0FPLElBQUFBLEdBQ0VPLElBQUliLEtBQUtZLFdBQVVLLEdBQVdBLEVBQVFYLFFBQ3hDLENBQ0FZLElBQUFBLEdBQ0VMLElBQUliLEtBQUtZLFdBQVVLLEdBQVdBLEVBQVFDLFFBQ3hDLENBSUFDLFFBQUFBLENBQVNDLEdBQ1BQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFFLFNBQVNDLElBQ2xELENBRUFDLFdBQUFBLENBQVlELEdBQ1ZQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFJLFlBQVlELElBQ3JELENBRUFFLFdBQUFBLENBQVlGLEdBQ1ZQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFLLFlBQVlGLElBQ3JELENBRUFHLFNBQUFBLENBQVVILEdBQ1JQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFNLFVBQVVILElBQ25ELENBRUFJLE9BQUFBLEVBQVEsT0FBQ0MsRUFBTSxPQUFFQyxJQUNmLENBS0ZDLE1BQUFBLEdBQ0VkLElBQUliLEtBQUtZLFdBQVVLLEdBQVdBLEVBQVFVLFVBRXhDLENBSUFDLE9BQUFBLEdBQ0VmLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFXLFdBQ3pDLGtCQ3JGRkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKTtcblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcmllcygpO1xuXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSk7XG4gICAgdGhpcy5zaG93KClcblxuICAgIC8vIOWnkO+8jGNvbnN0cnVjdG9y5qC85byP5pivKHt9KXt944CC5LiN6KaB5b+Y6K6w5LqGXG5cbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcmllcygpIHtcbiAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnknKVxuICAgIHRoaXMuZ2FsbGVyaWVzID0gbWFwKHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBHYWxsZXJ5KHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQW5pbWF0aW9uc1xuICBzaG93KCl7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLGdhbGxlcnkgPT4gZ2FsbGVyeS5zaG93KCkpXG4gIH1cbiAgaGlkZSgpe1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcyxnYWxsZXJ5ID0+IGdhbGxlcnkuaGlkZSgpKVxuICB9XG5cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcbiAgfVxuXG4gIG9uV2hlZWwoe3BpeGVsWCwgcGl4ZWxZfSl7XG4gICAgLy8g5o2V6I635rua5Yqo5LqL5Lu255qE5YOP57Sg5YC877yM54S25ZCO5qC55o2u6L+Z5Lqb5YC85p2l5pu05paw6aG16Z2i5Lit5p+Q5Lqb5YWD57Sg55qE5L2N572u5oiW54q25oCB77yM5a6e546w6aG16Z2i55qE5rua5Yqo5oiW6KeG5Zu+55qE5Y+Y5YyWXG4gICBcbiAgfVxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoKSlcbiAgICBcbiAgfVxuICAvKipcbiAgICogRGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpe1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA0ZWEzZmE4ZDg0MWU0N2JiMmFiXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJpZXMiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImdhbGxlcmllc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyaWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiR2FsbGVyeSIsImdhbGxlcnkiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==