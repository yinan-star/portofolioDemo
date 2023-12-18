/*! For license information please see main.131e44d19b939057c32e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),console.log(this.element),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2,this.mesh.position.x+=this.index*this.mesh.scale.x}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY(),console.log(this.bounds)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth}onResize(){this.createBounds()}}}},(function(e){e.h=()=>"d0199194a12fce1c86c2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMzFlNDRkMTliOTM5MDU3YzMyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLEVBQUssTUFBRUMsSUFDakRDLEtBQUtOLFFBQVVBLEVBQ2ZNLEtBQUtMLFNBQVdBLEVBQ2hCSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFPQSxFQUNaQyxLQUFLSCxNQUFRQSxFQUdiRyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ1AsQ0FDQUYsYUFBQUEsR0FDRUQsS0FBS0ksUUFBVSxJQUFJQyxFQUFBQSxRQUFRTCxLQUFLSixJQUVoQ1UsUUFBUUMsSUFBSVAsS0FBS04sU0FFakJNLEtBQUtRLE1BQVEsSUFBSUMsT0FBT0MsTUFDeEJWLEtBQUtRLE1BQU1HLFlBQWMsWUFFekJYLEtBQUtRLE1BQU1JLElBQU1aLEtBQUtOLFFBQVFtQixhQUFhLFlBQzNDYixLQUFLUSxNQUFNTSxPQUFTQyxHQUFNZixLQUFLSSxRQUFRSSxNQUFRUixLQUFLUSxLQUN0RCxDQUdBTixhQUFBQSxHQUNFRixLQUFLZ0IsUUFBVSxJQUFJQyxFQUFBQSxRQUFRakIsS0FBS0osR0FBSSxDQUNsQ3NCLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLEtBQU0sQ0FBRUMsTUFBT3RCLEtBQUtJLFdBRzFCLENBRUFELFVBQUFBLEdBQ0VILEtBQUt1QixLQUFPLElBQUlDLEVBQUFBLEtBQUt4QixLQUFLSixHQUFJLENBQzVCRCxTQUFVSyxLQUFLTCxTQUNmcUIsUUFBU2hCLEtBQUtnQixVQUdoQmhCLEtBQUt1QixLQUFLRSxVQUFVekIsS0FBS0YsT0FHekJFLEtBQUt1QixLQUFLRyxNQUFNQyxFQUFJLEVBRXBCM0IsS0FBS3VCLEtBQUtLLFNBQVNELEdBQUszQixLQUFLSCxNQUFPRyxLQUFLdUIsS0FBS0csTUFBTUMsQ0FLdEQsQ0FFQUUsWUFBQUEsR0FFRTdCLEtBQUs4QixPQUFTOUIsS0FBS04sUUFBUXFDLHdCQUUzQi9CLEtBQUtnQyxjQUNMaEMsS0FBS2lDLFVBQ0xqQyxLQUFLa0MsVUFDTDVCLFFBQVFDLElBQUlQLEtBQUs4QixPQUNuQixDQUVBRSxXQUFBQSxHQUNFaEMsS0FBS21DLE9BQVFuQyxLQUFNOEIsT0FBT0ssT0FBUTFCLE9BQU8yQixZQUN6Q3BDLEtBQUtxQyxNQUFPckMsS0FBTThCLE9BQU9PLE1BQU81QixPQUFPNkIsVUFFekMsQ0FFQUMsUUFBQUEsR0FDRXZDLEtBQUs2QixjQUNQLGtCQy9FRlcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9ob21lL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/lpITnkIbnhafniYdcbmltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9c2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50KVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIC8vIOWboOS4uuWbvueJh+aYr+S7jnByZXNtaWPmnaXnmoTvvIzmiYDku6XopoHljL/lkI1cbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gMlxuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggKz0gdGhpcy5pbmRleCAqdGhpcy5tZXNoLnNjYWxlLnhcbiAgICAvLyDorqnlm77niYdzaWRlIGJ5IHNpZGVcbiAgICAvLyB0aGlzLmdlb21ldHJ5IOWPr+iDveS7o+ihqOaooeWei+eahOWHoOS9leS9k+mDqOWIhu+8jOS9huWcqOiuuOWkmuWcuuaZr+S4i++8jOS/ruaUueaooeWei+eahOS9jee9ruOAgee8qeaUvuaIluaXi+i9rOWPr+iDvemcgOimgeebtOaOpeaTjeS9nOaooeWei+WvueixoeacrOi6q++8jOWNsyB0aGlzLm1lc2hcbiAgICAvLyDlsLHmmK/or7TnvKnmlL7ml4vovazml7bvvIzotLTlm77opoHlkoxnZW9tZXRyeeS4gOi1t+i9rOiAjOS4jeaYr+WQhOiHqui9rFxuXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoKXtcbiAgICAvLyDlsIZtZXNo5ZKMZ2FsbGVyeeaJgOiuvuWumueahOWwuuWvuOe7keWumlxuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwYWR0ZVNjYWxlKClcbiAgICB0aGlzLnVwYWR0ZVgoKVxuICAgIHRoaXMudXBhZHRlWSgpXG4gICAgY29uc29sZS5sb2codGhpcy5ib3VuZHMpXG4gIH1cblxuICB1cGFkdGVTY2FsZSgpe1xuICAgIHRoaXMuaGVpZ2h0ID10aGlzLiBib3VuZHMuaGVpZ2h0IC93aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID10aGlzLiBib3VuZHMud2lkdGggL3dpbmRvdy5pbm5lcldpZHRoXG5cbiAgfVxuXG4gIG9uUmVzaXplKCl7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoKVxuICB9XG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQwMTk5MTk0YTEyZmNlMWM4NmMyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwic2NhbGUiLCJ4IiwicG9zaXRpb24iLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGFkdGVTY2FsZSIsInVwYWR0ZVgiLCJ1cGFkdGVZIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJvblJlc2l6ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==