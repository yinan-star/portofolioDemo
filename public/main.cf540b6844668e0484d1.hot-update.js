/*! For license information please see main.cf540b6844668e0484d1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/ogl/src/core/Texture.js"),r=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),h=t("./app/shaders/plane-fragment.glsl"),o=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:s,gl:t,index:i,scene:r,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.scene=r,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),console.log(this.element),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new r.Program(this.gl,{fragment:h.default,vertex:o.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2,this.mesh.position.x+=this.index*this.mesh.scale.x}onResize(){}}}},(function(e){e.h=()=>"021e8a881993738fb291"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZjU0MGI2ODQ0NjY4ZTA0ODRkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLEVBQUssTUFBRUMsSUFDakRDLEtBQUtOLFFBQVVBLEVBQ2ZNLEtBQUtMLFNBQVdBLEVBQ2hCSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFPQSxFQUNaQyxLQUFLSCxNQUFRQSxFQUdiRyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ1AsQ0FDQUYsYUFBQUEsR0FDRUQsS0FBS0ksUUFBVSxJQUFJQyxFQUFBQSxRQUFRTCxLQUFLSixJQUVoQ1UsUUFBUUMsSUFBSVAsS0FBS04sU0FFakJNLEtBQUtRLE1BQVEsSUFBSUMsT0FBT0MsTUFDeEJWLEtBQUtRLE1BQU1HLFlBQWMsWUFFekJYLEtBQUtRLE1BQU1JLElBQU1aLEtBQUtOLFFBQVFtQixhQUFhLFlBQzNDYixLQUFLUSxNQUFNTSxPQUFTQyxHQUFNZixLQUFLSSxRQUFRSSxNQUFRUixLQUFLUSxLQUN0RCxDQUdBTixhQUFBQSxHQUNFRixLQUFLZ0IsUUFBVSxJQUFJQyxFQUFBQSxRQUFRakIsS0FBS0osR0FBSSxDQUNsQ3NCLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLEtBQU0sQ0FBRUMsTUFBT3RCLEtBQUtJLFdBRzFCLENBRUFELFVBQUFBLEdBQ0VILEtBQUt1QixLQUFPLElBQUlDLEVBQUFBLEtBQUt4QixLQUFLSixHQUFJLENBQzVCRCxTQUFVSyxLQUFLTCxTQUNmcUIsUUFBU2hCLEtBQUtnQixVQUdoQmhCLEtBQUt1QixLQUFLRSxVQUFVekIsS0FBS0YsT0FHekJFLEtBQUt1QixLQUFLRyxNQUFNQyxFQUFJLEVBRXBCM0IsS0FBS3VCLEtBQUtLLFNBQVNELEdBQUszQixLQUFLSCxNQUFPRyxLQUFLdUIsS0FBS0csTUFBTUMsQ0FLdEQsQ0FFQUUsUUFBQUEsR0FFQSxrQkMvREZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPXNpemVzO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAvLyDkuIrpnaLnmoRlbG1lbnTpg73mmK/pnIDopoHlpI3nlKjnmoTmiYDku6XlnKjov5nph4zliJ3lp4vljJZcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIHRoaXMuY3JlYXRlTWVzaCgpO1xuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuICB9XG5cbiAgLy8g54S25ZCO5bCG6YCJ5aW955qE54Wn54mH5Lyg57uZcHJvZ3JhbeWkhOeQhui0tOWbvlxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG4gICAgLy8gbWVzaOaYr3NjZW5l55qE5a2Q5YWD57Sg44CCXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IDJcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ICs9IHRoaXMuaW5kZXggKnRoaXMubWVzaC5zY2FsZS54XG4gICAgLy8g6K6p5Zu+54mHc2lkZSBieSBzaWRlXG4gICAgLy8gdGhpcy5nZW9tZXRyeSDlj6/og73ku6PooajmqKHlnovnmoTlh6DkvZXkvZPpg6jliIbvvIzkvYblnKjorrjlpJrlnLrmma/kuIvvvIzkv67mlLnmqKHlnovnmoTkvY3nva7jgIHnvKnmlL7miJbml4vovazlj6/og73pnIDopoHnm7TmjqXmk43kvZzmqKHlnovlr7nosaHmnKzouqvvvIzljbMgdGhpcy5tZXNoXG4gICAgLy8g5bCx5piv6K+057yp5pS+5peL6L2s5pe277yM6LS05Zu+6KaB5ZKMZ2VvbWV0cnnkuIDotbfovazogIzkuI3mmK/lkIToh6rovaxcblxuICB9XG5cbiAgb25SZXNpemUoKXtcblxuICB9XG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAyMWU4YTg4MTk5MzczOGZiMjkxXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwic2NhbGUiLCJ4IiwicG9zaXRpb24iLCJvblJlc2l6ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==