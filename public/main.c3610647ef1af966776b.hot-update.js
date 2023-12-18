/*! For license information please see main.c3610647ef1af966776b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var r=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/gsap/index.js"),a=s("./node_modules/lodash/map.js"),n=s.n(a),l=s("./app/components/Canvas/home/Media.js");const h=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.group=new r.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=n()(this.mediasElements,((e,t)=>new l.default({element:e,geometry:this.geometry,gl:this.gl,index:t,scene:this.group,sizes:this.sizes})))}onResize(e){n()(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=s,this.y.target=r}onTouchUp({x:e,y:t}){}update(){this.x.current=o.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=o.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x=this.x.current,this.scroll.y=this.y.current,n()(this.medias,(e=>{e.update(this.scroll)}))}}}},(function(e){e.h=()=>"f1d640b309128d789c79"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMzYxMDY0N2VmMWFmOTY2Nzc2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVdBUUEsY0FDSUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsSUFDckJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFDM0IsZ0NBR0pMLEtBQUtNLGlCQUNMTixLQUFLTyxnQkFHTFAsS0FBS0MsTUFBTU8sVUFBVVYsR0FFckJFLEtBQUtTLEVBQUksQ0FDTEMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLEtBQUssSUFHVFosS0FBS2EsRUFBSSxDQUNMSCxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsS0FBSyxJQUdUWixLQUFLYyxPQUFTLENBQ1ZMLEVBQUUsRUFDRkksRUFBRSxFQUlWLENBRUFQLGNBQUFBLEdBQ0lOLEtBQUtlLFNBQVcsSUFBSUMsRUFBQUEsTUFBTWhCLEtBQUtILEdBQ25DLENBRUFVLGFBQUFBLEdBRUlQLEtBQUtpQixPQUFTQyxJQUFJbEIsS0FBS0csZ0JBQWdCLENBQUNnQixFQUFTQyxJQUN0QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2JGLFVBQ0FKLFNBQVVmLEtBQUtlLFNBQ2ZsQixHQUFJRyxLQUFLSCxHQUNUdUIsUUFDQXRCLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR3hCLENBR0F1QixRQUFBQSxDQUFTQyxHQUNMTCxJQUFJbEIsS0FBS2lCLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLElBQzdDLENBRUFFLFdBQUFBLEVBQVksRUFBRWhCLEVBQUMsRUFBRUksSUFFakIsQ0FFQWEsV0FBQUEsRUFBWSxFQUFFakIsRUFBQyxFQUFFSSxJQUNiLE1BQU1jLEVBQVdsQixFQUFFbUIsTUFBUW5CLEVBQUVvQixJQUN2QkMsRUFBV2pCLEVBQUVlLE1BQVFmLEVBQUVnQixJQUM3QjdCLEtBQUtTLEVBQUVFLE9BQVFnQixFQUNmM0IsS0FBS2EsRUFBRUYsT0FBUW1CLENBR25CLENBRUFDLFNBQUFBLEVBQVUsRUFBRXRCLEVBQUMsRUFBRUksSUFFZixDQUdBbUIsTUFBQUEsR0FDSWhDLEtBQUtTLEVBQUVDLFFBQVN1QixFQUFBQSxRQUFLQyxNQUFNQyxZQUFZbkMsS0FBS1MsRUFBRUMsUUFBU1YsS0FBS1MsRUFBRUUsT0FBUVgsS0FBS1MsRUFBRUcsTUFDN0VaLEtBQUthLEVBQUVILFFBQVN1QixFQUFBQSxRQUFLQyxNQUFNQyxZQUFZbkMsS0FBS2EsRUFBRUgsUUFBU1YsS0FBS2EsRUFBRUYsT0FBUVgsS0FBS2EsRUFBRUQsTUFFN0VaLEtBQUtjLE9BQU9MLEVBQUlULEtBQUtTLEVBQUVDLFFBQ3ZCVixLQUFLYyxPQUFPRCxFQUFJYixLQUFLYSxFQUFFSCxRQUV2QlEsSUFBSWxCLEtBQUtpQixRQUFRTyxJQUNiQSxFQUFNUSxPQUFPaEMsS0FBS2MsT0FBTyxHQUdqQyxrQkMvRkpzQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJ1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KCk7XG5cblxuICAgICAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSk7XG5cbiAgICAgICAgdGhpcy54ID0ge1xuICAgICAgICAgICAgY3VycmVudDowLFxuICAgICAgICAgICAgdGFyZ2V0OjAsXG4gICAgICAgICAgICBsZXJwOjAuMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0ge1xuICAgICAgICAgICAgY3VycmVudDowLFxuICAgICAgICAgICAgdGFyZ2V0OjAsXG4gICAgICAgICAgICBsZXJwOjAuMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfVxuICAgICAgICAvLyDlp5DvvIxjb25zdHJ1Y3RvcuagvOW8j+aYryh7fSl7feOAguS4jeimgeW/mOiusOS6hlxuXG4gICAgfVxuXG4gICAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcbiAgICB9XG5cbiAgICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgICAgICAvLyDkvKDliLBNZWRpYemHjOmdolxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIEV2ZW50c1xuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgICAgICBjb25zdCB4RGlzdGFuY2UgPXguc3RhcnQgLSB4LmVuZFxuICAgICAgICBjb25zdCB5RGlzdGFuY2UgPXkuc3RhcnQgLSB5LmVuZFxuICAgICAgICB0aGlzLngudGFyZ2V0ID14RGlzdGFuY2UsXG4gICAgICAgIHRoaXMueS50YXJnZXQgPXlEaXN0YW5jZVxuXG5cbiAgICB9XG5cbiAgICBvblRvdWNoVXAoeyB4LCB5IH0pIHtcblxuICAgIH1cblxuICAgIC8vIFVwZGF0ZVxuICAgIHVwZGF0ZSgpe1xuICAgICAgICB0aGlzLnguY3VycmVudCA9R1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG4gICAgICAgIHRoaXMueS5jdXJyZW50ID1HU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuICAgICAgICB0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcbiAgICAgICAgdGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gICAgICAgICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOS8oOe7mW1lZGlh5paH5Lu2XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjFkNjQwYjMwOTEyOGQ3ODljNzlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJtZWRpYXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGwiLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwibWVkaWEiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJHU0FQIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==