/*! For license information please see main.3cae319dfafa2b19df2f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/classes/Detection.js"),n=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e,s){this.extra=0,this.widthTotal=s,this.createBounds(t),this.upadteX(e),this.upadteY(0)}updateRotation(){this.mesh.rotation.z=i.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}upadteY(t=0){this.y=(this.bounds.top+t)/window.innerHeight;const e=o.default.isPhone()?15:40;this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)*e-e}update(t){this.updateRotation(),this.upadteScale(),this.upadteX(t),this.upadteY(0)}}}},(function(t){t.h=()=>"71d38acb607409061195"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixLQUFLRCxNQUFNc0MsTUFBU3JDLEtBQUtDLEtBR2hILENBRUE0QixPQUFBQSxDQUFRMUIsRUFBSSxHQUNWSCxLQUFLRyxHQUFLSCxLQUFLeUIsT0FBTzJCLElBQU1qRCxHQUFLUSxPQUFPcUMsWUFFeEMsTUFBTS9DLEVBQVFvRCxFQUFBQSxRQUFVQyxVQUFZLEdBQUssR0FDekN0RCxLQUFLc0IsS0FBS3dCLFNBQVMzQyxFQUFLSCxLQUFLRCxNQUFNZ0QsT0FBUyxFQUFNL0MsS0FBS3NCLEtBQUs0QixNQUFNL0MsRUFBSSxFQUFNSCxLQUFLRyxFQUFJSCxLQUFLRCxNQUFNZ0QsT0FFaEcvQyxLQUFLc0IsS0FBS3dCLFNBQVMzQyxHQUFLeUMsS0FBS1csSUFBS3ZELEtBQUtzQixLQUFLd0IsU0FBUzVDLEVBQUlGLEtBQUtELE1BQU1zQyxNQUFTTyxLQUFLQyxHQUFLLElBQU81QyxFQUFRQSxDQUl4RyxDQUVBdUQsTUFBQUEsQ0FBT3BCLEdBRUxwQyxLQUFLdUMsaUJBQ0x2QyxLQUFLMkIsY0FDTDNCLEtBQUs0QixRQUFRUSxHQUNicEMsS0FBSzZCLFFBQVEsRUFDZixrQkN0SkY0QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/lpITnkIbnhafniYdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBEZXRlY3Rpb24gZnJvbSAnY2xhc3Nlcy9EZXRlY3Rpb24nO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAvLyDkuIrpnaLnmoRlbG1lbnTpg73mmK/pnIDopoHlpI3nlKjnmoTmiYDku6XlnKjov5nph4zliJ3lp4vljJZcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoeyBzaXplczogdGhpcy5zaXplcyB9KVxuXG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cblxuICAgIC8vIOWmguaenOWbvueJh+a4suafk+S4jeWHuuadpe+8jOWwseeci+S4i+i/memHjFxuICB9XG5cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgLy8g5bCGbWVzaOWSjGdhbGxlcnnmiYDorr7lrprnmoTlsLrlr7jnu5HlrppcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICAvLyDliJ3lp4vljJZzaXplc++8jOiuqeS7luWPmOaIkOS4i+mdouWPr+S7pemHjeWkjeWIqeeUqOeahOWxnuaAp1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwYWR0ZVNjYWxlKClcbiAgICB0aGlzLnVwYWR0ZVgoKVxuICAgIHRoaXMudXBhZHRlWSgpXG4gIH1cblxuICAvLyBBbmltYXRpb25zLlxuICBzaG93KCkge1xuICAgIEdTQVAuZnJvbVRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSwge1xuICAgICAgdmFsdWU6IDFcbiAgICB9KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSlcbiAgfVxuXG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwsIHdpZHRoKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcbiAgICB0aGlzLndpZHRoVG90YWwgPSB3aWR0aFxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcblxuICB9XG5cbiAgLy8gTG9vcFxuICB1cGRhdGVSb3RhdGlvbigpIHtcbiAgICAvLyDop4bnqpfnmoTlt6blj7PkuKTovrlcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIsXG4gICAgICB0aGlzLnNpemVzLndpZHRoIC8gMixcbiAgICAgIE1hdGguUEkgKiAwLjEsXG4gICAgICAtTWF0aC5QSSAqIDAuMSxcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi54XG4gICAgKVxuICB9XG5cbiAgdXBhZHRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICAgIC8vIOaIkeeMnOaYr+aKindlYkds5Zu+54mH5Y+Y5oiQ5Y2V5L2N5ZCR6YeP54S25ZCO5YaN5LmY5Lul5q2j56Gu55qE5Zu+54mH55qE5a696auY77yM6K6p6L+Z5Lqb5Zu+54mH5bC65a+4bWF0Y2jljp/lm75cblxuICAgIC8vIGNvbnN0IHNjYWxlID0gR1NBUC51dGlscy5tYXBSYW5nZSgwLCB0aGlzLnNpemVzLndpZHRoIC8gMiwgMC4xLCAwLCBNYXRoLmFicyh0aGlzLm1lc2gucG9zaXRpb24ueCkpXG4gICAgLy8gLy8g6L6T5YWl6IyD5Zu05YaF55qE5p+Q5Liq5YC877yM55So5p2l5pig5bCE5Yiw6L6T5Ye66IyD5Zu077yM5YmN6Z2i5Lik5a+55bCx5piv5a+55bqU55qE6L6T5YWl5Y+C5pWw5ZKM6L6T5Ye65Y+C5pWw55qE5pig5bCE44CC5pyA5ZCO5LiA5Liq5Y+C5pWw5YiZ5piv6ZyA6KaB6L+b6KGM5pig5bCE55qE5YW35L2T5YC8XG4gICAgLy8gLy8g5b2T6L6T5YWl55qE5pyA5bCP5YC8MO+8jOWvueW6lOi+k+WHuueahOacgOWwj+WAvDAuMeOAgui+k+WFpeeahOacgOWkp+WAvO+8iHRoaXMuc2l6ZXMuLi7vvInlr7nlupTvvIzovpPlh7rnmoTmnIDlpKflgLww44CCXG4gICAgLy8gLy8g6LaK6L+c56a75Y6f54K577yIMCAtLT4gdGhpcy5zaXplcy53aWR0aCAvIDIp5pe277yMc2NhbGXnmoTlgLzotorlsI/vvIgwLjEgLS0+IDApXG4gICAgLy8gdGhpcy5tZXNoLnNjYWxlLnggKz0gc2NhbGVcbiAgICAvLyAvLyDlm6DmraTlnKjkuK3pl7TnmoR455qE5q+U5L6L5piv5pyA5aSn55qEXG4gICAgLy8gdGhpcy5tZXNoLnNjYWxlLnkgKz0gc2NhbGVcbiAgfVxuXG4gIHVwYWR0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9ICgtdGhpcy5zaXplcy53aWR0aCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhXG4gICAgLy8gd2lkdGjlkoxoZWlnaHTmmK/op4bnqpfnmoTlrr3pq5jjgILkuZ/lsLHmmK9tZXNo55qEcG9zaXRpb27nmoTljp/ngrnlnKjop4bnqpflj6PnmoTmraPkuK3lv4NcbiAgICAvLyAtd2lkdGggLyAyIOi/meS4qumDqOWIhuWwseaYr+WwhuaJgOaciW1lc2jnmoTljp/ngrlwb3NpdGlvbuenu+WIsOinhueql+eahOW3puS4iuinklxuICB9XG5cbiAgdXBhZHRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGNvbnN0IGV4dHJhID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDE1IDogNDA7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAodGhpcy5zaXplcy5oZWlnaHQgLyAyKSAtICh0aGlzLm1lc2guc2NhbGUueSAvIDIpIC0gKHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0KVxuICAgIC8vIOi/meS4qnjmmK/kuYvliY3lnKhpbmRleOmHjOiuvue9rueahOm8oOagh+aLluWKqOeahOW9k+WJjeeahHgseeeahOi3neemu+OAguaJgOS7pe+8jOaDs+enu+WKqOWMuemFjeWlveeahOWbvueJh++8jOmcgOimgeWcqOaVtOS4quWuueWZqOWKoOS4ium8oOagh3gseeenu+WKqOeahOi3neemu1xuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ICs9IE1hdGguY29zKCh0aGlzLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiBleHRyYSAtIGV4dHJhXG4gICAgLy8g57Sv5Yqg5piv5pa55ZCR77yM5ZCR5LiK6L+Y5piv5ZCR5LiLXG4gICAgLy8gTWF0aC5QSeaYr+W8p+W6pu+8n1xuICAgIC8vIDc15Lmf5piv5byn5bqmXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgLy8g5Lul5LiL55qE5pa55rOV5Lya5LiN5pat5pu05paw5omn6KGMXG4gICAgdGhpcy51cGRhdGVSb3RhdGlvbigpXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwYWR0ZVkoMClcbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzFkMzhhY2I2MDc0MDkwNjExOTVcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGFkdGVTY2FsZSIsInVwYWR0ZVgiLCJ1cGFkdGVZIiwic2hvdyIsIkdTQVAiLCJmcm9tVG8iLCJoaWRlIiwidG8iLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwid2lkdGhUb3RhbCIsInVwZGF0ZVJvdGF0aW9uIiwicm90YXRpb24iLCJ6IiwidXRpbHMiLCJtYXBSYW5nZSIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwidG9wIiwiRGV0ZWN0aW9uIiwiaXNQaG9uZSIsImNvcyIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==