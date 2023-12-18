/*! For license information please see main.205bbe44a13d01bae0a2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s("./node_modules/ogl/src/core/Texture.js"),i=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:t,gl:s,index:r,scene:i}){this.element=e,this.geometry=t,this.gl=s,this.scene=i,this.index=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),console.log(this.element),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:h.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.position.x+=this.index*this.mesh.scale.x}}}},(function(e){e.h=()=>"190d75e7bb392089d42f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMDViYmU0NGExM2QwMWJhZTBhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLElBQzFDQyxLQUFLTCxRQUFVQSxFQUNmSyxLQUFLSixTQUFXQSxFQUNoQkksS0FBS0gsR0FBS0EsRUFDVkcsS0FBS0QsTUFBUUEsRUFDYkMsS0FBS0YsTUFBUUEsRUFHYkUsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNQLENBQ0FGLGFBQUFBLEdBQ0VELEtBQUtJLFFBQVUsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0gsSUFFaENTLFFBQVFDLElBQUlQLEtBQUtMLFNBRWpCSyxLQUFLUSxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCVixLQUFLUSxNQUFNRyxZQUFjLFlBRXpCWCxLQUFLUSxNQUFNSSxJQUFNWixLQUFLTCxRQUFRa0IsYUFBYSxZQUMzQ2IsS0FBS1EsTUFBTU0sT0FBU0MsR0FBTWYsS0FBS0ksUUFBUUksTUFBUVIsS0FBS1EsS0FDdEQsQ0FHQU4sYUFBQUEsR0FDRUYsS0FBS2dCLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWpCLEtBQUtILEdBQUksQ0FDbENxQixTQUFRLFVBQ1JDLE9BQU0sVUFDTkMsU0FBVSxDQUNSQyxLQUFNLENBQUVDLE1BQU90QixLQUFLSSxXQUcxQixDQUVBRCxVQUFBQSxHQUNFSCxLQUFLdUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLeEIsS0FBS0gsR0FBSSxDQUM1QkQsU0FBVUksS0FBS0osU0FDZm9CLFFBQVNoQixLQUFLZ0IsVUFHaEJoQixLQUFLdUIsS0FBS0UsVUFBVXpCLEtBQUtELE9BR3pCQyxLQUFLdUIsS0FBS0csU0FBU0MsR0FBSzNCLEtBQUtGLE1BQU9FLEtBQUt1QixLQUFLSyxNQUFNRCxDQUt0RCxrQkN4REZFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gIH1cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50KVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIC8vIOWboOS4uuWbvueJh+aYr+S7jnByZXNtaWPmnaXnmoTvvIzmiYDku6XopoHljL/lkI1cbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ICs9IHRoaXMuaW5kZXggKnRoaXMubWVzaC5zY2FsZS54XG4gICAgLy8g6K6p5Zu+54mHc2lkZSBieSBzaWRlXG4gICAgLy8gdGhpcy5nZW9tZXRyeSDlj6/og73ku6PooajmqKHlnovnmoTlh6DkvZXkvZPpg6jliIbvvIzkvYblnKjorrjlpJrlnLrmma/kuIvvvIzkv67mlLnmqKHlnovnmoTkvY3nva7jgIHnvKnmlL7miJbml4vovazlj6/og73pnIDopoHnm7TmjqXmk43kvZzmqKHlnovlr7nosaHmnKzouqvvvIzljbMgdGhpcy5tZXNoXG4gICAgLy8g5bCx5piv6K+057yp5pS+5peL6L2s5pe277yM6LS05Zu+6KaB5ZKMZ2VvbWV0cnnkuIDotbfovazogIzkuI3mmK/lkIToh6rovaxcblxuICB9XG5cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5MGQ3NWU3YmIzOTIwODlkNDJmXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiY29uc29sZSIsImxvZyIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInBvc2l0aW9uIiwieCIsInNjYWxlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9