/*! For license information please see main.4ed9d6f6785cd42b61e9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),a=t.n(i),r=t("./app/components/Canvas/about/Gallery.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=a()(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}show(){a()(this.galleries,(e=>e.show()))}hide(){a()(this.galleries,(e=>e.hide()))}onResize(e){a()(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){a()(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){a()(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){a()(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){a()(this.galleries,(e=>e.update()))}destroy(){a()(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"f9bfab4ab9d15e0f1ab2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZWQ5ZDZmNjc4NWNkNDJiNjFlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVVBUUEsY0FDRUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsSUFDdkJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFHTEosS0FBS0MsTUFBTUksVUFBVVAsR0FDckJFLEtBQUtNLE1BSVAsQ0FFQUgsY0FBQUEsR0FDRUgsS0FBS08sU0FBVyxJQUFJQyxFQUFBQSxNQUFNUixLQUFLSCxHQUNqQyxDQUVBTyxlQUFBQSxHQUVFSixLQUFLUyxrQkFBb0JDLFNBQVNDLGlCQUFpQixtQkFDbkRYLEtBQUtZLFVBQVlDLElBQUliLEtBQUtTLG1CQUFtQixDQUFDSyxFQUFTQyxJQUM5QyxJQUFJQyxFQUFBQSxRQUFRLENBQ2pCRixVQUNBUCxTQUFVUCxLQUFLTyxTQUNmVixHQUFJRyxLQUFLSCxHQUNUa0IsUUFDQWpCLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR2xCLENBR0FPLElBQUFBLEdBQ0VPLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFYLFFBQ3pDLENBQ0FZLElBQUFBLEdBQ0VMLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFDLFFBQ3pDLENBSUFDLFFBQUFBLENBQVNDLEdBQ1BQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFFLFNBQVNDLElBQ2xELENBRUFDLFdBQUFBLENBQVlELEdBQ1ZQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFJLFlBQVlELElBQ3JELENBRUFFLFdBQUFBLENBQVlGLEdBQ1ZQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFLLFlBQVlGLElBQ3JELENBRUFHLFNBQUFBLENBQVVILEdBQ1JQLElBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFNLFVBQVVILElBQ25ELENBRUFJLE9BQUFBLEVBQVEsT0FBRUMsRUFBTSxPQUFFQyxJQUNoQixDQUtGQyxNQUFBQSxHQUNFZCxJQUFJYixLQUFLWSxXQUFXSyxHQUFXQSxFQUFRVSxVQUV6QyxDQUlBQyxPQUFBQSxHQUNFZixJQUFJYixLQUFLWSxXQUFXSyxHQUFXQSxFQUFRVyxXQUN6QyxrQkNyRkZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvYWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgdGhpcy5jcmVhdGVHYWxsZXJpZXMoKTtcblxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpO1xuICAgIHRoaXMuc2hvdygpXG5cbiAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG4gIH1cblxuICBjcmVhdGVHYWxsZXJpZXMoKSB7XG4gICAgLy8g5Lyg5YiwTWVkaWHph4zpnaJcbiAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5JylcbiAgICB0aGlzLmdhbGxlcmllcyA9IG1hcCh0aGlzLmdhbGxlcmllc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgR2FsbGVyeSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnNcbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5zaG93KCkpXG4gIH1cbiAgaGlkZSgpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5oaWRlKCkpXG4gIH1cblxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uUmVzaXplKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaERvd24oZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoTW92ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoVXAoZXZlbnQpKVxuICB9XG5cbiAgb25XaGVlbCh7IHBpeGVsWCwgcGl4ZWxZIH0pIHtcbiAgICAvLyDmjZXojrfmu5rliqjkuovku7bnmoTlg4/ntKDlgLzvvIznhLblkI7moLnmja7ov5nkupvlgLzmnaXmm7TmlrDpobXpnaLkuK3mn5DkupvlhYPntKDnmoTkvY3nva7miJbnirbmgIHvvIzlrp7njrDpobXpnaLnmoTmu5rliqjmiJbop4blm77nmoTlj5jljJZcblxuICB9XG5cbiAgLy8gVXBkYXRlXG4gIHVwZGF0ZSgpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoKSlcblxuICB9XG4gIC8qKlxuICAgKiBEZXN0cm95XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5YmZhYjRhYjlkMTVlMGYxYWIyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJpZXMiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImdhbGxlcmllc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyaWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiR2FsbGVyeSIsImdhbGxlcnkiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==