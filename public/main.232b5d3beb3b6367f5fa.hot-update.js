/*! For license information please see main.232b5d3beb3b6367f5fa.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var a=t("./node_modules/ogl/src/core/Transform.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),n=t("./node_modules/lodash/map.js"),r=t.n(n),l=t("./app/components/Canvas/home/Media.js");const i=class{constructor({gl:e,scene:s}){this.gl=e,this.group=new a.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s)}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r()(this.mediasElements,((e,s)=>new l.default({element:e,geometry:this.geometry,gl:this.gl,index:s,scene:this.group})))}onResize(e){r()(this.medias,(s=>s.onResize(e)))}}}},(function(e){e.h=()=>"3dbb42b03efb42e2da37"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMzJiNWQzYmViM2I2MzY3ZjVmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBTUEsY0FDSUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLElBQ2RDLEtBQUtGLEdBQUtBLEVBQ1ZFLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFDM0IsZ0NBR0pMLEtBQUtNLGlCQUNMTixLQUFLTyxnQkFHTFAsS0FBS0MsTUFBTU8sVUFBVVQsRUFHekIsQ0FFQU8sY0FBQUEsR0FDSU4sS0FBS1MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNVixLQUFLRixHQUNuQyxDQUVBUyxhQUFBQSxHQUVJUCxLQUFLVyxPQUFTQyxJQUFJWixLQUFLRyxnQkFBZ0IsQ0FBQ1UsRUFBU0MsSUFDdEMsSUFBSUMsRUFBQUEsUUFBTSxDQUNiRixVQUNBSixTQUFVVCxLQUFLUyxTQUNmWCxHQUFJRSxLQUFLRixHQUNUZ0IsUUFDQWYsTUFBT0MsS0FBS0MsU0FHeEIsQ0FFQWUsUUFBQUEsQ0FBU0MsR0FDTEwsSUFBSVosS0FBS1csUUFBUU8sR0FBU0EsRUFBTUYsU0FBU0MsSUFDN0Msa0JDMUNKRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lIH0pIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJ1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KCk7XG5cblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSk7XG4gICAgICAgIC8vIOWnkO+8jGNvbnN0cnVjdG9y5qC85byP5pivKHt9KXt944CC5LiN6KaB5b+Y6K6w5LqGXG5cbiAgICB9XG5cbiAgICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNkYmI0MmIwM2VmYjQyZTJkYTM3XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9