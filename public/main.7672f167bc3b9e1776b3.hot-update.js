/*! For license information please see main.7672f167bc3b9e1776b3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),n=s.n(l),h=s("./app/components/Canvas/home/Media.js");const c=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.group=new r.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=n()(this.mediasElements,((e,t)=>new h.default({element:e,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}onResize(e){n()(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:e,y:t}){}update(){this.x.current=o.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=o.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="left":this.scroll.x>this.x.current&&(this.x.direction="right"),console.log(this.x.direction),this.scroll.x=this.x.current,this.scroll.y=this.y.current,n()(this.medias,((e,t)=>{0===t&&console.log(e.mesh.position.x),e.update(this.scroll)}))}}}},(function(e){e.h=()=>"5c14cf6df0480dd40680"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NjcyZjE2N2JjM2I5ZTE3NzZiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVdBUUEsY0FDSUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsSUFDckJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFDM0IsZ0NBR0pMLEtBQUtNLGlCQUNMTixLQUFLTyxnQkFHTFAsS0FBS0MsTUFBTU8sVUFBVVYsR0FFckJFLEtBQUtTLEVBQUksQ0FDTEMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLEtBQUssSUFHVFosS0FBS2EsRUFBSSxDQUNMSCxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsS0FBSyxJQUdUWixLQUFLYyxjQUFjLENBQ2ZMLEVBQUUsRUFDRkksRUFBRSxHQUdOYixLQUFLZSxPQUFTLENBQ1ZOLEVBQUUsRUFDRkksRUFBRSxFQUlWLENBRUFQLGNBQUFBLEdBQ0lOLEtBQUtnQixTQUFXLElBQUlDLEVBQUFBLE1BQU1qQixLQUFLSCxHQUNuQyxDQUVBVSxhQUFBQSxHQUVJUCxLQUFLa0IsT0FBU0MsSUFBSW5CLEtBQUtHLGdCQUFnQixDQUFDaUIsRUFBU0MsSUFDdEMsSUFBSUMsRUFBQUEsUUFBTSxDQUNiRixVQUNBSixTQUFVaEIsS0FBS2dCLFNBQ2ZuQixHQUFJRyxLQUFLSCxHQUNUd0IsUUFDQXZCLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR3hCLENBR0F3QixRQUFBQSxDQUFTQyxHQUNMTCxJQUFJbkIsS0FBS2tCLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLElBQzdDLENBRUFFLFdBQUFBLEVBQVksRUFBRWpCLEVBQUMsRUFBRUksSUFDYmIsS0FBS2MsY0FBY0wsRUFBR1QsS0FBS2UsT0FBT04sRUFDbENULEtBQUtjLGNBQWNELEVBQUdiLEtBQUtlLE9BQU9GLENBQ3RDLENBRUFjLFdBQUFBLEVBQVksRUFBRWxCLEVBQUMsRUFBRUksSUFDYixNQUFNZSxFQUFXbkIsRUFBRW9CLE1BQVFwQixFQUFFcUIsSUFDdkJDLEVBQVdsQixFQUFFZ0IsTUFBUWhCLEVBQUVpQixJQUU3QjlCLEtBQUtTLEVBQUVFLE9BQVFYLEtBQUtjLGNBQWNMLEVBQUltQixFQUN0QzVCLEtBQUthLEVBQUVGLE9BQVFYLEtBQUtjLGNBQWNELEVBQUlrQixDQUkxQyxDQUVBQyxTQUFBQSxFQUFVLEVBQUV2QixFQUFDLEVBQUVJLElBRWYsQ0FHQW9CLE1BQUFBLEdBQ0lqQyxLQUFLUyxFQUFFQyxRQUFTd0IsRUFBQUEsUUFBS0MsTUFBTUMsWUFBWXBDLEtBQUtTLEVBQUVDLFFBQVNWLEtBQUtTLEVBQUVFLE9BQVFYLEtBQUtTLEVBQUVHLE1BQzdFWixLQUFLYSxFQUFFSCxRQUFTd0IsRUFBQUEsUUFBS0MsTUFBTUMsWUFBWXBDLEtBQUthLEVBQUVILFFBQVNWLEtBQUthLEVBQUVGLE9BQVFYLEtBQUthLEVBQUVELE1BRTFFWixLQUFLZSxPQUFPTixFQUFJVCxLQUFLUyxFQUFFQyxRQUN0QlYsS0FBS1MsRUFBRTRCLFVBQVcsT0FDYnJDLEtBQUtlLE9BQU9OLEVBQUlULEtBQUtTLEVBQUVDLFVBQzVCVixLQUFLUyxFQUFFNEIsVUFBVyxTQUd0QkMsUUFBUUMsSUFBSXZDLEtBQUtTLEVBQUU0QixXQUNuQnJDLEtBQUtlLE9BQU9OLEVBQUlULEtBQUtTLEVBQUVDLFFBQ3ZCVixLQUFLZSxPQUFPRixFQUFJYixLQUFLYSxFQUFFSCxRQUV2QlMsSUFBSW5CLEtBQUtrQixRQUFRLENBQUNPLEVBQU1KLEtBQ1AsSUFBVkEsR0FDQ2lCLFFBQVFDLElBQUlkLEVBQU1lLEtBQUtDLFNBQVNoQyxHQUVwQ2dCLEVBQU1RLE9BQU9qQyxLQUFLZSxPQUFPLEdBR2pDLGtCQ2pISjJCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKTtcblxuXG4gICAgICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKTtcblxuICAgICAgICB0aGlzLnggPSB7XG4gICAgICAgICAgICBjdXJyZW50OjAsXG4gICAgICAgICAgICB0YXJnZXQ6MCxcbiAgICAgICAgICAgIGxlcnA6MC4xXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnkgPSB7XG4gICAgICAgICAgICBjdXJyZW50OjAsXG4gICAgICAgICAgICB0YXJnZXQ6MCxcbiAgICAgICAgICAgIGxlcnA6MC4xXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbEN1cnJlbnQ9e1xuICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgeTowXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6MCxcbiAgICAgICAgICAgIHk6MFxuICAgICAgICB9XG4gICAgICAgIC8vIOWnkO+8jGNvbnN0cnVjdG9y5qC85byP5pivKHt9KXt944CC5LiN6KaB5b+Y6K6w5LqGXG5cbiAgICB9XG5cbiAgICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgICAgIC8vIOS8oOWIsE1lZGlh6YeM6Z2iXG4gICAgICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gRXZlbnRzXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCkpXG4gICAgfVxuXG4gICAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxDdXJyZW50LnggPXRoaXMuc2Nyb2xsLnhcbiAgICAgICAgdGhpcy5zY3JvbGxDdXJyZW50LnkgPXRoaXMuc2Nyb2xsLnlcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgICAgICBjb25zdCB4RGlzdGFuY2UgPXguc3RhcnQgLSB4LmVuZFxuICAgICAgICBjb25zdCB5RGlzdGFuY2UgPXkuc3RhcnQgLSB5LmVuZFxuXG4gICAgICAgIHRoaXMueC50YXJnZXQgPXRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlLFxuICAgICAgICB0aGlzLnkudGFyZ2V0ID10aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuICAgICAgICAvLyDlpoLmnpzpvKDmoIflkozlm77niYfnmoTnp7vliqjnm7jlj43mlrnlkJHvvIzopoHnlKjlh4/lj7dcblxuXG4gICAgfVxuXG4gICAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICB1cGRhdGUoKXtcbiAgICAgICAgdGhpcy54LmN1cnJlbnQgPUdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuICAgICAgICB0aGlzLnkuY3VycmVudCA9R1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cbiAgICAgICAgaWYodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KXtcbiAgICAgICAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSdsZWZ0J1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpe1xuICAgICAgICAgICAgdGhpcy54LmRpcmVjdGlvbiA9J3JpZ2h0J1xuICAgICAgICB9XG4gICAgICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnguZGlyZWN0aW9uKVxuICAgICAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcbiAgICAgICAgdGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZWRpYS5tZXNoLnBvc2l0aW9uLngpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWMxNGNmNmRmMDQ4MGRkNDA2ODBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJtZWRpYXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJkaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibWVzaCIsInBvc2l0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9