/*! For license information please see main.7d8f3af866babb67e183.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new h.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),console.log(this.bounds),this.upadteScale(),this.upadteX(),this.upadteY()}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.upadteX(t&&t.x),this.upadteY(t&&t.y)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}upadteY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.upadteX(e),this.upadteY(0))}}}},(function(e){e.h=()=>"896a2d0d9ccb043b7276"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS3lCLEtBQUswQixTQUFTN0MsRUFBS04sS0FBS0QsTUFBTThDLE9BQVMsRUFBTTdDLEtBQUt5QixLQUFLd0IsTUFBTTNDLEVBQUksRUFBTU4sS0FBS00sRUFBSU4sS0FBS0QsTUFBTThDLE9BQVU3QyxLQUFLSSxNQUFNRSxDQUV2SCxDQUVBK0MsTUFBQUEsQ0FBT1QsR0FDRDVDLEtBQUtvQyxTQUVUcEMsS0FBS3lDLFFBQVFHLEdBQ2I1QyxLQUFLMEMsUUFBUSxHQUNmLGtCQzVIRlksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDowLFxuICAgICAgeTowXG4gICAgfVxuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gICAgLy8g5aaC5p6c5Zu+54mH5riy5p+T5LiN5Ye65p2l77yM5bCx55yL5LiL6L+Z6YeMXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICAgIC8vIHRoaXMubWVzaC5zY2FsZS54ID0gMlxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID1HU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsTWF0aC5QSSAqIDAuMDMpXG5cbiAgICAvLyB0aGlzLm1lc2gucG9zaXRpb24ueCArPSB0aGlzLmluZGV4ICogdGhpcy5tZXNoLnNjYWxlLnhcbiAgICAvLyDorqnlm77niYdzaWRlIGJ5IHNpZGVcbiAgICAvLyB0aGlzLmdlb21ldHJ5IOWPr+iDveS7o+ihqOaooeWei+eahOWHoOS9leS9k+mDqOWIhu+8jOS9huWcqOiuuOWkmuWcuuaZr+S4i++8jOS/ruaUueaooeWei+eahOS9jee9ruOAgee8qeaUvuaIluaXi+i9rOWPr+iDvemcgOimgeebtOaOpeaTjeS9nOaooeWei+WvueixoeacrOi6q++8jOWNsyB0aGlzLm1lc2hcbiAgICAvLyDlsLHmmK/or7TnvKnmlL7ml4vovazml7bvvIzotLTlm77opoHlkoxnZW9tZXRyeeS4gOi1t+i9rOiAjOS4jeaYr+WQhOiHqui9rFxuXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgLy8g5bCGbWVzaOWSjGdhbGxlcnnmiYDorr7lrprnmoTlsLrlr7jnu5HlrppcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICAvLyDliJ3lp4vljJZzaXplc++8jOiuqeS7luWPmOaIkOS4i+mdouWPr+S7pemHjeWkjeWIqeeUqOeahOWxnuaAp1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvdW5kcylcblxuICAgIHRoaXMudXBhZHRlU2NhbGUoKVxuICAgIHRoaXMudXBhZHRlWCgpXG4gICAgdGhpcy51cGFkdGVZKClcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6MCxcbiAgICAgIHk6MFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwYWR0ZVgoc2Nyb2xsICYmIHNjcm9sbC54IClcbiAgICB0aGlzLnVwYWR0ZVkoc2Nyb2xsICYmIHNjcm9sbC55IClcblxuICB9XG5cbiAgLy8gTG9vcFxuICB1cGFkdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gICAgLy8g5oiR54yc5piv5oqKd2ViR2zlm77niYflj5jmiJDljZXkvY3lkJHph4/nhLblkI7lho3kuZjku6XmraPnoa7nmoTlm77niYfnmoTlrr3pq5jvvIzorqnov5nkupvlm77niYflsLrlr7htYXRjaOWOn+WbvlxuXG5cbiAgfVxuXG4gIHVwYWR0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9ICgtdGhpcy5zaXplcy53aWR0aCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhLnhcbiAgICAvLyB3aWR0aOWSjGhlaWdodOaYr+inhueql+eahOWuvemrmOOAguS5n+WwseaYr21lc2jnmoRwb3NpdGlvbueahOWOn+eCueWcqOinhueql+WPo+eahOato+S4reW/g1xuICAgIC8vIC13aWR0aCAvIDIg6L+Z5Liq6YOo5YiG5bCx5piv5bCG5omA5pyJbWVzaOeahOWOn+eCuXBvc2l0aW9u56e75Yiw6KeG56qX55qE5bem5LiK6KeSXG4gIH1cblxuICB1cGFkdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAodGhpcy5zaXplcy5oZWlnaHQgLyAyKSAtICh0aGlzLm1lc2guc2NhbGUueSAvIDIpIC0gKHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0KSArIHRoaXMuZXh0cmEueVxuICAgIC8vIOi/meS4qnjmmK/kuYvliY3lnKhpbmRleOmHjOiuvue9rueahOm8oOagh+aLluWKqOeahOW9k+WJjeeahHgseeeahOi3neemu+OAguaJgOS7pe+8jOaDs+enu+WKqOWMuemFjeWlveeahOWbvueJh++8jOmcgOimgeWcqOaVtOS4quWuueWZqOWKoOS4ium8oOagh3gseeenu+WKqOeahOi3neemu1xuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGlmKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwYWR0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBhZHRlWSgwKVxuICB9XG5cblxuXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4OTZhMmQwZDljY2IwNDNiNzI3NlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwieCIsInkiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJyb3RhdGlvbiIsInoiLCJHU0FQIiwidXRpbHMiLCJyYW5kb20iLCJNYXRoIiwiUEkiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb25zb2xlIiwibG9nIiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==