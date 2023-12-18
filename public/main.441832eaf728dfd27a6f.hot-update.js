/*! For license information please see main.441832eaf728dfd27a6f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const r=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e,s){this.extra=0,this.widthTotal=s,this.createBounds(t),this.upadteX(e),this.upadteY(0)}updateRotation(){this.mesh.rotation.z=i.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}upadteY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(t){this.bounds&&(this.updateRotation(),this.upadteScale(),this.upadteX(t),this.upadteY(0))}}}},(function(t){t.h=()=>"b88fe508e71b9617f022"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBUXhCLEVBQUksR0FDVkwsS0FBS0ssR0FBS0wsS0FBS3lCLE9BQU8yQixJQUFNL0MsR0FBS0ssT0FBT3NDLFlBQ3hDaEQsS0FBS3FCLEtBQUt5QixTQUFTekMsRUFBS0wsS0FBS0QsTUFBTWdELE9BQVMsRUFBTS9DLEtBQUtxQixLQUFLNkIsTUFBTTdDLEVBQUksRUFBTUwsS0FBS0ssRUFBSUwsS0FBS0QsTUFBTWdELE9BRWhHL0MsS0FBS3FCLEtBQUt5QixTQUFTekMsR0FBMEUsR0FBckV1QyxLQUFLUyxJQUFLckQsS0FBS3FCLEtBQUt5QixTQUFTMUMsRUFBSUosS0FBS0QsTUFBTXNDLE1BQVNPLEtBQUtDLEdBQUssSUFBVyxFQUlwRyxDQUVBUyxNQUFBQSxDQUFPbEIsR0FFQXBDLEtBQUt5QixTQUVWekIsS0FBS3VDLGlCQUNMdkMsS0FBSzJCLGNBQ0wzQixLQUFLNEIsUUFBUVEsR0FDYnBDLEtBQUs2QixRQUFRLEdBQ2Ysa0JDbkpGMEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9hYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbX0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG4gIFxuICAgIC8vIOWmguaenOWbvueJh+a4suafk+S4jeWHuuadpe+8jOWwseeci+S4i+i/memHjFxuICB9XG5cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgLy8g5bCGbWVzaOWSjGdhbGxlcnnmiYDorr7lrprnmoTlsLrlr7jnu5HlrppcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICAvLyDliJ3lp4vljJZzaXplc++8jOiuqeS7luWPmOaIkOS4i+mdouWPr+S7pemHjeWkjeWIqeeUqOeahOWxnuaAp1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwYWR0ZVNjYWxlKClcbiAgICB0aGlzLnVwYWR0ZVgoKVxuICAgIHRoaXMudXBhZHRlWSgpXG4gIH1cblxuICAvLyBBbmltYXRpb25zLlxuICBzaG93KCkge1xuICAgIEdTQVAuZnJvbVRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSwge1xuICAgICAgdmFsdWU6IDFcbiAgICB9KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSlcbiAgfVxuXG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwsIHdpZHRoKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcbiAgICB0aGlzLndpZHRoVG90YWwgPSB3aWR0aFxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcblxuICB9XG5cbiAgLy8gTG9vcFxuICB1cGRhdGVSb3RhdGlvbigpIHtcbiAgICAvLyDop4bnqpfnmoTlt6blj7PkuKTovrlcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIsIFxuICAgICAgdGhpcy5zaXplcy53aWR0aCAvIDIsIFxuICAgICAgTWF0aC5QSSAqIDAuMSwgXG4gICAgICAtTWF0aC5QSSAqIDAuMSwgXG4gICAgICB0aGlzLm1lc2gucG9zaXRpb24ueFxuICAgICAgKVxuICB9XG5cbiAgdXBhZHRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICAgIC8vIOaIkeeMnOaYr+aKindlYkds5Zu+54mH5Y+Y5oiQ5Y2V5L2N5ZCR6YeP54S25ZCO5YaN5LmY5Lul5q2j56Gu55qE5Zu+54mH55qE5a696auY77yM6K6p6L+Z5Lqb5Zu+54mH5bC65a+4bWF0Y2jljp/lm75cblxuICAgIC8vIGNvbnN0IHNjYWxlID0gR1NBUC51dGlscy5tYXBSYW5nZSgwLCB0aGlzLnNpemVzLndpZHRoIC8gMiwgMC4xLCAwLCBNYXRoLmFicyh0aGlzLm1lc2gucG9zaXRpb24ueCkpXG4gICAgLy8gLy8g6L6T5YWl6IyD5Zu05YaF55qE5p+Q5Liq5YC877yM55So5p2l5pig5bCE5Yiw6L6T5Ye66IyD5Zu077yM5YmN6Z2i5Lik5a+55bCx5piv5a+55bqU55qE6L6T5YWl5Y+C5pWw5ZKM6L6T5Ye65Y+C5pWw55qE5pig5bCE44CC5pyA5ZCO5LiA5Liq5Y+C5pWw5YiZ5piv6ZyA6KaB6L+b6KGM5pig5bCE55qE5YW35L2T5YC8XG4gICAgLy8gLy8g5b2T6L6T5YWl55qE5pyA5bCP5YC8MO+8jOWvueW6lOi+k+WHuueahOacgOWwj+WAvDAuMeOAgui+k+WFpeeahOacgOWkp+WAvO+8iHRoaXMuc2l6ZXMuLi7vvInlr7nlupTvvIzovpPlh7rnmoTmnIDlpKflgLww44CCXG4gICAgLy8gLy8g6LaK6L+c56a75Y6f54K577yIMCAtLT4gdGhpcy5zaXplcy53aWR0aCAvIDIp5pe277yMc2NhbGXnmoTlgLzotorlsI/vvIgwLjEgLS0+IDApXG4gICAgLy8gdGhpcy5tZXNoLnNjYWxlLnggKz0gc2NhbGVcbiAgICAvLyAvLyDlm6DmraTlnKjkuK3pl7TnmoR455qE5q+U5L6L5piv5pyA5aSn55qEXG4gICAgLy8gdGhpcy5tZXNoLnNjYWxlLnkgKz0gc2NhbGVcbiAgfVxuXG4gIHVwYWR0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9ICgtdGhpcy5zaXplcy53aWR0aCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhXG4gICAgLy8gd2lkdGjlkoxoZWlnaHTmmK/op4bnqpfnmoTlrr3pq5jjgILkuZ/lsLHmmK9tZXNo55qEcG9zaXRpb27nmoTljp/ngrnlnKjop4bnqpflj6PnmoTmraPkuK3lv4NcbiAgICAvLyAtd2lkdGggLyAyIOi/meS4qumDqOWIhuWwseaYr+WwhuaJgOaciW1lc2jnmoTljp/ngrlwb3NpdGlvbuenu+WIsOinhueql+eahOW3puS4iuinklxuICB9XG5cbiAgdXBhZHRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gKHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikgLSAodGhpcy5tZXNoLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodClcbiAgICAvLyDov5nkuKp45piv5LmL5YmN5ZyoaW5kZXjph4zorr7nva7nmoTpvKDmoIfmi5bliqjnmoTlvZPliY3nmoR4LHnnmoTot53nprvjgILmiYDku6XvvIzmg7Pnp7vliqjljLnphY3lpb3nmoTlm77niYfvvIzpnIDopoHlnKjmlbTkuKrlrrnlmajliqDkuIrpvKDmoId4LHnnp7vliqjnmoTot53nprtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSArPSBNYXRoLmNvcygodGhpcy5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLnNpemVzLndpZHRoKSAqIE1hdGguUEkgKiAwLjEpICo0MCAtIDQwXG4gICAgLy8g57Sv5Yqg5piv5pa55ZCR77yM5ZCR5LiK6L+Y5piv5ZCR5LiLXG4gICAgLy8gTWF0aC5QSeaYr+W8p+W6pu+8n1xuICAgIC8vIDc15Lmf5piv5byn5bqmXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgLy8g5Lul5LiL55qE5pa55rOV5Lya5LiN5pat5pu05paw5omn6KGMXG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZVJvdGF0aW9uKClcbiAgICB0aGlzLnVwYWR0ZVNjYWxlKClcbiAgICB0aGlzLnVwYWR0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBhZHRlWSgwKVxuICB9XG5cblxuXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiODhmZTUwOGU3MWI5NjE3ZjAyMlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwYWR0ZVNjYWxlIiwidXBhZHRlWCIsInVwYWR0ZVkiLCJzaG93IiwiR1NBUCIsImZyb21UbyIsImhpZGUiLCJ0byIsIm9uUmVzaXplIiwic2Nyb2xsIiwid2lkdGgiLCJ3aWR0aFRvdGFsIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInoiLCJ1dGlscyIsIm1hcFJhbmdlIiwiTWF0aCIsIlBJIiwicG9zaXRpb24iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJ0b3AiLCJjb3MiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=