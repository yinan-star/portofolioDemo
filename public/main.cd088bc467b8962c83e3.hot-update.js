/*! For license information please see main.cd088bc467b8962c83e3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var o=t("./node_modules/ogl/src/core/Transform.js"),a=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),n=t.n(i),r=t("./app/components/Canvas/Media.js");const l=class{constructor(e,s,t){this.gl=e,this.sizes=t,this.group=new o.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s)}createGeometry(){this.geometry=new a.Plane(this.gl),console.log(this.geometry)}createGallery(){this.medias=n()(this.mediasElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){n()(this.medias,(s=>s.onResize(e)))}}}},(function(e){e.h=()=>"f2c928d58dbcbc9d3f67"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZDA4OGJjNDY3Yjg5NjJjODNlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1RBTUEsY0FDSUEsV0FBQUEsQ0FBWUMsRUFBSUMsRUFBT0MsR0FDbkJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFDM0IsZ0NBR0pMLEtBQUtNLGlCQUNMTixLQUFLTyxnQkFHTFAsS0FBS0MsTUFBTU8sVUFBVVYsRUFDekIsQ0FFQVEsY0FBQUEsR0FHSU4sS0FBS1MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNVixLQUFLSCxJQUMvQmMsUUFBUUMsSUFBSVosS0FBS1MsU0FDckIsQ0FFQUYsYUFBQUEsR0FFSVAsS0FBS2EsT0FBU0MsSUFBSWQsS0FBS0csZ0JBQWdCLENBQUNZLEVBQVNDLElBQ3RDLElBQUlDLEVBQUFBLFFBQU0sQ0FDYkYsVUFDQU4sU0FBVVQsS0FBS1MsU0FDZk8sUUFDQW5CLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR3hCLENBRUFtQixRQUFBQSxDQUFTQyxHQUNMTCxJQUFJZCxLQUFLYSxRQUFRTyxHQUFTQSxFQUFNRixTQUFTQyxJQUM3QyxrQkMvQ0pFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgc2NlbmUsIHNpemVzKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZSdcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpO1xuICAgICAgICBcblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcbiAgICB9XG5cbiAgICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICAgICAgLy8gRW5zdXJlICdnbCcgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAnUGxhbmUnXG4gICAgICAgIFxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdlb21ldHJ5KVxuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcbiAgICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMmM5MjhkNThkYmNiYzlkM2Y2N1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJtZWRpYSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==