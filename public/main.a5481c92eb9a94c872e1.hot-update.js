/*! For license information please see main.a5481c92eb9a94c872e1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t("./node_modules/ogl/src/core/Transform.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),n=t("./app/components/Canvas/Media.js"),r=t("./node_modules/lodash/map.js"),l=t.n(r);const m=class{constructor(e,s){this.gl=e,this.scene=s,this.group=new a.Transform,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(this.scene)}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=l()(this.mediasElements,((e,s)=>new n.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group})))}}}},(function(e){e.h=()=>"2662134a39239d090dc6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNTQ4MWM5MmViOWE5NGM4NzJlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1RBSUEsY0FDSUEsV0FBQUEsQ0FBWUMsRUFBSUMsR0FDWkMsS0FBS0YsR0FBS0EsRUFFVkUsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsTUFBUSxJQUFJQyxFQUFBQSxVQUVqQkYsS0FBS0csZUFBaUJDLFNBQVNDLGlCQUMzQixnQ0FHSkwsS0FBS00saUJBQ0xOLEtBQUtPLGdCQUVMUCxLQUFLQyxNQUFNTyxVQUFVUixLQUFLRCxNQUM5QixDQUVBTyxjQUFBQSxHQUNJTixLQUFLUyxTQUFXLElBQUlDLEVBQUFBLE1BQU1WLEtBQUtGLEdBQ25DLENBRUFTLGFBQUFBLEdBRUlQLEtBQUtXLE9BQVNDLElBQUlaLEtBQUtHLGdCQUFnQixDQUFDVSxFQUFTQyxJQUN0QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2JGLFVBQ0FKLFNBQVVULEtBQUtTLFNBQ2ZLLFFBQ0FoQixHQUFJRSxLQUFLRixHQUNUQyxNQUFPQyxLQUFLQyxTQUl4QixrQkN0Q0plLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnO1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBzY2VuZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIC8vIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJ1xuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICB9XG5cbiAgICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgICAgICAvLyDkvKDliLBNZWRpYemHjOmdoueahFxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgICAgICAgLy8gc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjY2MjEzNGEzOTIzOWQwOTBkYzZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwibWVkaWFzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=