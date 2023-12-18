/*! For license information please see main.fc1de3d68ad749c76d9c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),n=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new h.Texture(this.gl),console.log(this.element),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new n.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.upadteX(t.x),this.upadteY(t.y)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}upadteY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.upadteX(e.x),this.upadteY(e.y))}}}},(function(e){e.h=()=>"06ff12d3f084d8335a04"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFNNUMsS0FBSzBCLEtBQUtzQixNQUFNMUMsRUFBSSxFQUFNTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNNkMsT0FBVTVDLEtBQUtJLE1BQU1FLENBRXZILENBRUE4QyxNQUFBQSxDQUFPVCxHQUNEM0MsS0FBS3FDLFNBQ1RyQyxLQUFLd0MsUUFBUUcsRUFBT3RDLEdBQ3BCTCxLQUFLeUMsUUFBUUUsRUFBT3JDLEdBQ3RCLGtCQ3hIRitDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDowLFxuICAgICAgeTowXG4gICAgfVxuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuICB9XG5cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG4gICAgLy8gbWVzaOaYr3NjZW5l55qE5a2Q5YWD57Sg44CCXG5cbiAgICAvLyB0aGlzLm1lc2guc2NhbGUueCA9IDJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9R1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLE1hdGguUEkgKiAwLjAzKVxuXG4gICAgLy8gdGhpcy5tZXNoLnBvc2l0aW9uLnggKz0gdGhpcy5pbmRleCAqIHRoaXMubWVzaC5zY2FsZS54XG4gICAgLy8g6K6p5Zu+54mHc2lkZSBieSBzaWRlXG4gICAgLy8gdGhpcy5nZW9tZXRyeSDlj6/og73ku6PooajmqKHlnovnmoTlh6DkvZXkvZPpg6jliIbvvIzkvYblnKjorrjlpJrlnLrmma/kuIvvvIzkv67mlLnmqKHlnovnmoTkvY3nva7jgIHnvKnmlL7miJbml4vovazlj6/og73pnIDopoHnm7TmjqXmk43kvZzmqKHlnovlr7nosaHmnKzouqvvvIzljbMgdGhpcy5tZXNoXG4gICAgLy8g5bCx5piv6K+057yp5pS+5peL6L2s5pe277yM6LS05Zu+6KaB5ZKMZ2VvbWV0cnnkuIDotbfovazogIzkuI3mmK/lkIToh6rovaxcblxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIC8vIOWwhm1lc2jlkoxnYWxsZXJ55omA6K6+5a6a55qE5bC65a+457uR5a6aXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgLy8g5Yid5aeL5YyWc2l6ZXPvvIzorqnku5blj5jmiJDkuIvpnaLlj6/ku6Xph43lpI3liKnnlKjnmoTlsZ7mgKdcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDowLFxuICAgICAgeTowXG4gICAgfVxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBhZHRlWChzY3JvbGwueClcbiAgICB0aGlzLnVwYWR0ZVkoc2Nyb2xsLnkpXG5cbiAgfVxuXG4gIC8vIExvb3BcbiAgdXBhZHRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICAgIC8vIOaIkeeMnOaYr+aKindlYkds5Zu+54mH5Y+Y5oiQ5Y2V5L2N5ZCR6YeP54S25ZCO5YaN5LmY5Lul5q2j56Gu55qE5Zu+54mH55qE5a696auY77yM6K6p6L+Z5Lqb5Zu+54mH5bC65a+4bWF0Y2jljp/lm75cblxuXG4gIH1cblxuICB1cGFkdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYS54XG4gICAgLy8gd2lkdGjlkoxoZWlnaHTmmK/op4bnqpfnmoTlrr3pq5jjgILkuZ/lsLHmmK9tZXNo55qEcG9zaXRpb27nmoTljp/ngrnlnKjop4bnqpflj6PnmoTmraPkuK3lv4NcbiAgICAvLyAtd2lkdGggLyAyIOi/meS4qumDqOWIhuWwseaYr+WwhuaJgOaciW1lc2jnmoTljp/ngrlwb3NpdGlvbuenu+WIsOinhueql+eahOW3puS4iuinklxuICB9XG5cbiAgdXBhZHRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gKHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikgLSAodGhpcy5tZXNoLnNjYWxlLnkgLyAyKSAtICh0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnlcbiAgICAvLyDov5nkuKp45piv5LmL5YmN5ZyoaW5kZXjph4zorr7nva7nmoTpvKDmoIfmi5bliqjnmoTlvZPliY3nmoR4LHnnmoTot53nprvjgILmiYDku6XvvIzmg7Pnp7vliqjljLnphY3lpb3nmoTlm77niYfvvIzpnIDopoHlnKjmlbTkuKrlrrnlmajliqDkuIrpvKDmoId4LHnnp7vliqjnmoTot53nprtcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZighdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBhZHRlWChzY3JvbGwueClcbiAgICB0aGlzLnVwYWR0ZVkoc2Nyb2xsLnkpXG4gIH1cblxuXG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA2ZmYxMmQzZjA4NGQ4MzM1YTA0XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiY29uc29sZSIsImxvZyIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInJvdGF0aW9uIiwieiIsIkdTQVAiLCJ1dGlscyIsInJhbmRvbSIsIk1hdGgiLCJQSSIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwYWR0ZVNjYWxlIiwidXBhZHRlWCIsInVwYWR0ZVkiLCJvblJlc2l6ZSIsInNjcm9sbCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=