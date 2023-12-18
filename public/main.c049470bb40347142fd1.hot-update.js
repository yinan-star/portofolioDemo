/*! For license information please see main.c049470bb40347142fd1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t("./node_modules/ogl/src/core/Transform.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),n=t("./node_modules/lodash/map.js"),r=t.n(n),l=t("./app/components/Canvas/home/Media.js");const m=class{constructor(e,s,t){this.gl=e,this.scene=s,this.group=new a.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(this.scene)}createGeometry(){this.geometry=new o.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=r()(this.mediasElements,((e,s)=>new l.default({element:e,gl:this.gl,geometry:this.geometry,index:s,scene:this.group})))}}}},(function(e){e.h=()=>"2f8c857037f19f2214d4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMDQ5NDcwYmI0MDM0NzE0MmZkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBTUEsY0FDSUEsV0FBQUEsQ0FBWUMsRUFBSUMsRUFBT0MsR0FDbkJDLEtBQUtILEdBQUtBLEVBRVZHLEtBQUtGLE1BQU9BLEVBRVpFLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFDM0IsZ0NBR0pMLEtBQUtNLGlCQUNMTixLQUFLTyxnQkFHTFAsS0FBS0MsTUFBTU8sVUFBVVIsS0FBS0YsTUFFOUIsQ0FFQVEsY0FBQUEsR0FDSU4sS0FBS1MsU0FBVyxJQUFJQyxFQUFBQSxNQUFPVixLQUFLSCxHQUFHLENBQy9CYyxlQUFnQixHQUNoQkMsY0FBZSxJQUV2QixDQUVBTCxhQUFBQSxHQUVJUCxLQUFLYSxPQUFTQyxJQUFJZCxLQUFLRyxnQkFBZ0IsQ0FBQ1ksRUFBU0MsSUFDdEMsSUFBSUMsRUFBQUEsUUFBTSxDQUNiRixVQUNBbEIsR0FBSUcsS0FBS0gsR0FDVFksU0FBVVQsS0FBS1MsU0FDZk8sUUFDQWxCLE1BQU9FLEtBQUtDLFNBSXhCLGtCQzdDSmlCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgc2NlbmUsIHNpemVzKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbi8vICAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgICAgICB0aGlzLnNjZW5lID1zY2VuZTtcblxuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuXG4gICAgICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVHZW9tZXRyeSgpIHsgICAgIFxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lICh0aGlzLmdsLHtcbiAgICAgICAgICAgIGhlaWdodFNlZ21lbnRzOiAyMCxcbiAgICAgICAgICAgIHdpZHRoU2VnbWVudHM6IDIwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgICAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgaW5kZXgsICAgICBcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICAvLyBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbi8vICAgICBvblJlc2l6ZShldmVudCkge1xuLy8gICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcbi8vICAgICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZjhjODU3MDM3ZjE5ZjIyMTRkNFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9