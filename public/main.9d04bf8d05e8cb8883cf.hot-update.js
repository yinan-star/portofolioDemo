/*! For license information please see main.9d04bf8d05e8cb8883cf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/lodash/map.js"),i=t.n(a),r=t("./app/components/Canvas/about/Gallery.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s)}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=i()(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}onResize(e){i()(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){i()(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){i()(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){i()(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){i()(this.galleries,(e=>e.update()))}destroy(){i()(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"a23f5418034ccb8611b7"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZDA0YmY4ZDA1ZThjYjg4ODNjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVVBUUEsY0FDRUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsSUFDdkJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFHTEosS0FBS0MsTUFBTUksVUFBVVAsRUFJdkIsQ0FFQUssY0FBQUEsR0FDRUgsS0FBS00sU0FBVyxJQUFJQyxFQUFBQSxNQUFNUCxLQUFLSCxHQUNqQyxDQUVBTyxlQUFBQSxHQUVFSixLQUFLUSxrQkFBb0JDLFNBQVNDLGlCQUFpQixtQkFDbkRWLEtBQUtXLFVBQVlDLElBQUlaLEtBQUtRLG1CQUFtQixDQUFDSyxFQUFTQyxJQUM5QyxJQUFJQyxFQUFBQSxRQUFRLENBQ2pCRixVQUNBUCxTQUFVTixLQUFLTSxTQUNmVCxHQUFJRyxLQUFLSCxHQUNUaUIsUUFDQWhCLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR2xCLENBR0FpQixRQUFBQSxDQUFTQyxHQUNQTCxJQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRixTQUFTQyxJQUNsRCxDQUVBRSxXQUFBQSxDQUFZRixHQUNWTCxJQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRQyxZQUFZRixJQUNyRCxDQUVBRyxXQUFBQSxDQUFZSCxHQUNWTCxJQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRSxZQUFZSCxJQUNyRCxDQUVBSSxTQUFBQSxDQUFVSixHQUNSTCxJQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRyxVQUFVSixJQUNuRCxDQUVBSyxPQUFBQSxFQUFRLE9BQUNDLEVBQU0sT0FBRUMsSUFDZixDQUtGQyxNQUFBQSxHQUNFYixJQUFJWixLQUFLVyxXQUFVTyxHQUFXQSxFQUFRTyxVQUV4QyxDQUlBQyxPQUFBQSxHQUNFZCxJQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRUSxXQUN6QyxrQkMzRUZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvYWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgdGhpcy5jcmVhdGVHYWxsZXJpZXMoKTtcblxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpO1xuXG4gICAgLy8g5aeQ77yMY29uc3RydWN0b3LmoLzlvI/mmK8oe30pe33jgILkuI3opoHlv5jorrDkuoZcblxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyaWVzKCkge1xuICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgdGhpcy5nYWxsZXJpZXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeScpXG4gICAgdGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IEdhbGxlcnkoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcbiAgfVxuXG4gIG9uV2hlZWwoe3BpeGVsWCwgcGl4ZWxZfSl7XG4gICAgLy8g5o2V6I635rua5Yqo5LqL5Lu255qE5YOP57Sg5YC877yM54S25ZCO5qC55o2u6L+Z5Lqb5YC85p2l5pu05paw6aG16Z2i5Lit5p+Q5Lqb5YWD57Sg55qE5L2N572u5oiW54q25oCB77yM5a6e546w6aG16Z2i55qE5rua5Yqo5oiW6KeG5Zu+55qE5Y+Y5YyWXG4gICBcbiAgfVxuXG4gIC8vIFVwZGF0ZVxuICB1cGRhdGUoKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoKSlcbiAgICBcbiAgfVxuICAvKipcbiAgICogRGVzdHJveVxuICAgKi9cbiAgZGVzdHJveSgpe1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEyM2Y1NDE4MDM0Y2NiODYxMWI3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJpZXMiLCJzZXRQYXJlbnQiLCJnZW9tZXRyeSIsIlBsYW5lIiwiZ2FsbGVyaWVzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJpZXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJHYWxsZXJ5Iiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnkiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsImRlc3Ryb3kiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=