/*! For license information please see main.1a5e61160f298a0bbe33.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-fragment.glsl"),r=t("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),console.log(this.element),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}onResize(e){this.createBounds(e)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height,this.x=this.bounds.left/window.innerWidth,this.y=this.bounds.top/window.innerHeight}upadteX(e=0){this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+(this.x+e)*this.sizes.width}upadteY(e=0){this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-(this.y+e)*this.sizes.height}update(e){this.upadteX(e.x),this.upadteY(e.y)}}}},(function(e){e.h=()=>"8b5129ed9adc64313b5f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bXBvbmVudHMvQ2FudmFzL2hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+WkhOeQhueFp+eJh1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50KVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIC8vIOWboOS4uuWbvueJh+aYr+S7jnByZXNtaWPmnaXnmoTvvIzmiYDku6XopoHljL/lkI1cbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gMlxuXG4gICAgLy8gdGhpcy5tZXNoLnBvc2l0aW9uLnggKz0gdGhpcy5pbmRleCAqIHRoaXMubWVzaC5zY2FsZS54XG4gICAgLy8g6K6p5Zu+54mHc2lkZSBieSBzaWRlXG4gICAgLy8gdGhpcy5nZW9tZXRyeSDlj6/og73ku6PooajmqKHlnovnmoTlh6DkvZXkvZPpg6jliIbvvIzkvYblnKjorrjlpJrlnLrmma/kuIvvvIzkv67mlLnmqKHlnovnmoTkvY3nva7jgIHnvKnmlL7miJbml4vovazlj6/og73pnIDopoHnm7TmjqXmk43kvZzmqKHlnovlr7nosaHmnKzouqvvvIzljbMgdGhpcy5tZXNoXG4gICAgLy8g5bCx5piv6K+057yp5pS+5peL6L2s5pe277yM6LS05Zu+6KaB5ZKMZ2VvbWV0cnnkuIDotbfovazogIzkuI3mmK/lkIToh6rovaxcblxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIC8vIOWwhm1lc2jlkoxnYWxsZXJ55omA6K6+5a6a55qE5bC65a+457uR5a6aXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgLy8g5Yid5aeL5YyWc2l6ZXPvvIzorqnku5blj5jmiJDkuIvpnaLlj6/ku6Xph43lpI3liKnnlKjnmoTlsZ7mgKdcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzKSB7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gIH1cblxuICAvLyBMb29wXG4gIHVwYWR0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICAvLyDmiJHnjJzmmK/miop3ZWJHbOWbvueJh+WPmOaIkOWNleS9jeWQkemHj+eEtuWQjuWGjeS5mOS7peato+ehrueahOWbvueJh+eahOWuvemrmO+8jOiuqei/meS6m+WbvueJh+WwuuWvuG1hdGNo5Y6f5Zu+XG5cbiAgICB0aGlzLnggPSB0aGlzLmJvdW5kcy5sZWZ0IC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLnkgPSB0aGlzLmJvdW5kcy50b3AgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICB9XG5cbiAgdXBhZHRlWCh4ID0gMCkge1xuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICgodGhpcy54ICsgeCkgKiB0aGlzLnNpemVzLndpZHRoKVxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoeSA9IDApIHtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAoKHRoaXMueSArIHkpICogdGhpcy5zaXplcy5oZWlnaHQpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbC54KVxuICAgIHRoaXMudXBhZHRlWShzY3JvbGwueSlcbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGI1MTI5ZWQ5YWRjNjQzMTNiNWZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsIndpbmRvdyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJzY2FsZSIsIngiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGFkdGVTY2FsZSIsInVwYWR0ZVgiLCJ1cGFkdGVZIiwib25SZXNpemUiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInkiLCJsZWZ0IiwidG9wIiwicG9zaXRpb24iLCJ1cGRhdGUiLCJzY3JvbGwiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=