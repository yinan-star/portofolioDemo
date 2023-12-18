/*! For license information please see main.e61069337f639328ec68.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t("./node_modules/ogl/src/core/Transform.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),n=t.n(i),r=t("./app/components/Canvas/Media.js");const l=class{constructor(e,s){this.gl=e,this.sizes=sizes,this.group=new a.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s)}createGeometry(){this.geometry=new o.Plane(this.gl,{})}createGallery(){this.medias=n()(this.mediasElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){n()(this.medias,(s=>s.onResize(e)))}}}},(function(e){e.h=()=>"c2f49de982b207f013a3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNjEwNjkzMzdmNjM5MzI4ZWM2OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1RBTUEsY0FDSUEsV0FBQUEsQ0FBWUMsRUFBSUMsR0FDWkMsS0FBS0YsR0FBS0EsRUFDVkUsS0FBS0MsTUFBUUEsTUFFYkQsS0FBS0UsTUFBUSxJQUFJQyxFQUFBQSxVQUVqQkgsS0FBS0ksZUFBaUJDLFNBQVNDLGlCQUMzQixnQ0FHSk4sS0FBS08saUJBQ0xQLEtBQUtRLGdCQUVMUixLQUFLRSxNQUFNTyxVQUFVVixFQUN6QixDQUVBUSxjQUFBQSxHQUNJUCxLQUFLVSxTQUFXLElBQUlDLEVBQUFBLE1BQU1YLEtBQUtGLEdBQUksQ0FFL0IsRUFHUixDQUVBVSxhQUFBQSxHQUVJUixLQUFLWSxPQUFTQyxJQUFJYixLQUFLSSxnQkFBZ0IsQ0FBQ1UsRUFBU0MsSUFDdEMsSUFBSUMsRUFBQUEsUUFBTSxDQUNiRixVQUNBSixTQUFVVixLQUFLVSxTQUNmSyxRQUNBakIsR0FBSUUsS0FBS0YsR0FDVEMsTUFBT0MsS0FBS0UsTUFDWkQsTUFBT0QsS0FBS0MsU0FHeEIsQ0FFQWdCLFFBQUFBLENBQVNDLEdBQ0xMLElBQUliLEtBQUtZLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLElBQzdDLGtCQy9DSkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBzY2VuZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcblxuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcbiAgICB9XG5cbiAgICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICAgICAgICAvLyBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICAgICAgICAvLyB3aWR0aFNlZ21lbnRzOiAyMCxcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcbiAgICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMmY0OWRlOTgyYjIwN2YwMTNhM1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJ0aGlzIiwic2l6ZXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9