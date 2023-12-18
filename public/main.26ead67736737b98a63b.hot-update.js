/*! For license information please see main.26ead67736737b98a63b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t("./node_modules/ogl/src/core/Transform.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),n=t("./node_modules/lodash/map.js"),r=t.n(n),l=t("./app/components/Canvas/home/Media.js");const m=class{constructor(e,s,t){this.gl=e,this.scene=s,this.group=new a.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(this.scene)}createGeometry(){this.geometry=new o.Plane(this.gl,{})}createGallery(){this.medias=r()(this.mediasElements,((e,s)=>new l.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group})))}}}},(function(e){e.h=()=>"07560d765fb0bba60d89"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNmVhZDY3NzM2NzM3Yjk4YTYzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlRBTUEsY0FDSUEsV0FBQUEsQ0FBWUMsRUFBSUMsRUFBT0MsR0FDbkJDLEtBQUtILEdBQUtBLEVBRVZHLEtBQUtGLE1BQU9BLEVBRVpFLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFDM0IsZ0NBR0pMLEtBQUtNLGlCQUNMTixLQUFLTyxnQkFHTFAsS0FBS0MsTUFBTU8sVUFBVVIsS0FBS0YsTUFFOUIsQ0FFQVEsY0FBQUEsR0FDSU4sS0FBS1MsU0FBVyxJQUFJQyxFQUFBQSxNQUFPVixLQUFLSCxHQUFHLENBRW5DLEVBQ0osQ0FFQVUsYUFBQUEsR0FFSVAsS0FBS1csT0FBU0MsSUFBSVosS0FBS0csZ0JBQWdCLENBQUNVLEVBQVNDLElBQ3RDLElBQUlDLEVBQUFBLFFBQU0sQ0FDYkYsVUFDQUosU0FBVVQsS0FBS1MsU0FDZkssUUFDQWpCLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtDLFNBSXhCLGtCQzVDSmUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9ob21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBzY2VuZSwgc2l6ZXMpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuLy8gICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgICAgIHRoaXMuc2NlbmUgPXNjZW5lO1xuXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcblxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5KCkgeyAgICAgXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUgKHRoaXMuZ2wse1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICAvLyBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbi8vICAgICBvblJlc2l6ZShldmVudCkge1xuLy8gICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcbi8vICAgICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNzU2MGQ3NjVmYjBiYmE2MGQ4OVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9