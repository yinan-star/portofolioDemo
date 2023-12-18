/*! For license information please see main.334d0b8e8eb08a3a3574.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}onResize(e,t){console.log(e,t),this.extra=0,this.createBounds(e),this.upadteX(t),this.upadteY(0)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}upadteY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.upadteX(e),this.upadteY(0))}}}},(function(e){e.h=()=>"372627acd274e0138f4e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs2QixTQUVUN0IsS0FBS2dDLFFBQVFHLEdBQ2JuQyxLQUFLaUMsUUFBUSxHQUNmLGtCQy9HRmMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDowLFxuICAgICAgeTowXG4gICAgfVxuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gICAgLy8g5aaC5p6c5Zu+54mH5riy5p+T5LiN5Ye65p2l77yM5bCx55yL5LiL6L+Z6YeMXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcblxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIC8vIOWwhm1lc2jlkoxnYWxsZXJ55omA6K6+5a6a55qE5bC65a+457uR5a6aXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgLy8g5Yid5aeL5YyWc2l6ZXPvvIzorqnku5blj5jmiJDkuIvpnaLlj6/ku6Xph43lpI3liKnnlKjnmoTlsZ7mgKdcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICBjb25zb2xlLmxvZyhzaXplcywgc2Nyb2xsKVxuICAgIHRoaXMuZXh0cmEgPSAwXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcblxuICB9XG5cbiAgLy8gTG9vcFxuICB1cGFkdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gICAgLy8g5oiR54yc5piv5oqKd2ViR2zlm77niYflj5jmiJDljZXkvY3lkJHph4/nhLblkI7lho3kuZjku6XmraPnoa7nmoTlm77niYfnmoTlrr3pq5jvvIzorqnov5nkupvlm77niYflsLrlr7htYXRjaOWOn+WbvlxuXG5cbiAgfVxuXG4gIHVwYWR0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9ICgtdGhpcy5zaXplcy53aWR0aCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhXG4gICAgLy8gd2lkdGjlkoxoZWlnaHTmmK/op4bnqpfnmoTlrr3pq5jjgILkuZ/lsLHmmK9tZXNo55qEcG9zaXRpb27nmoTljp/ngrnlnKjop4bnqpflj6PnmoTmraPkuK3lv4NcbiAgICAvLyAtd2lkdGggLyAyIOi/meS4qumDqOWIhuWwseaYr+WwhuaJgOaciW1lc2jnmoTljp/ngrlwb3NpdGlvbuenu+WIsOinhueql+eahOW3puS4iuinklxuICB9XG5cbiAgdXBhZHRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gKHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikgLSAodGhpcy5tZXNoLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodClcbiAgICAvLyDov5nkuKp45piv5LmL5YmN5ZyoaW5kZXjph4zorr7nva7nmoTpvKDmoIfmi5bliqjnmoTlvZPliY3nmoR4LHnnmoTot53nprvjgILmiYDku6XvvIzmg7Pnp7vliqjljLnphY3lpb3nmoTlm77niYfvvIzpnIDopoHlnKjmlbTkuKrlrrnlmajliqDkuIrpvKDmoId4LHnnp7vliqjnmoTot53nprtcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZighdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzcyNjI3YWNkMjc0ZTAxMzhmNGVcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=