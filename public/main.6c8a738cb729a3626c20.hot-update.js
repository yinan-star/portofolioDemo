/*! For license information please see main.6c8a738cb729a3626c20.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/collections-fragment.glsl"),o=s("./app/shaders/collections-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX()}show(){i.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){i.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(t,e){this.updateX(t);this.mesh.rotation.z=-.02*Math.PI*Math.sin(this.index/1),this.mesh.position.y=.1*Math.sin(this.index/1),this.opacity.target=e===this.index?1:.4,this.opacity.current=i.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.multiplier*this.opacity.current}}}},(function(t){t.h=()=>"b9c78f403161a0d767ef"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFsQkcsS0FBSzJCLEtBQUtvQixTQUFTNUMsRUFWRCxHQVVpQmdELEtBQUtFLElBQUlyRCxLQUFLSCxNQVIvQixHQVlsQkcsS0FBS0ksUUFBUUUsT0FBU1QsSUFBVUcsS0FBS0gsTUFBUSxFQUFJLEdBRWpERyxLQUFLSSxRQUFRQyxRQUFVOEIsRUFBQUEsUUFBS21CLE1BQU1DLFlBQ2hDdkQsS0FBS0ksUUFBUUMsUUFDYkwsS0FBS0ksUUFBUUUsT0FDYk4sS0FBS0ksUUFBUUcsTUFLZlAsS0FBS21CLFFBQVFJLFNBQVNDLE9BQU9DLE1BQVF6QixLQUFLSSxRQUFRSSxXQUFhUixLQUFLSSxRQUFRQyxPQUM5RSxrQkNwS0ZtRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2NvbGxlY3Rpb25zL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/lpITnkIbnhafniYdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvY29sbGVjdGlvbnMtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvY29sbGVjdGlvbnMtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLm9wYWNpdHkgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgICAgbXVsdGlwbGllcjogMFxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIHRoaXMuY3JlYXRlTWVzaCgpO1xuICAgIHRoaXMuY3JlYXRlQm91bmRzKHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSk7XG5cbiAgfVxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIC8vIOWcqHNoYWRlcumHjOmdouWBmueahOa4kOWPmFxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuICAgIC8vIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cbiAgICAvLyBjb25zdCBpbWFnZSA9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuICAgIC8vIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICAvLyB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICAvLyAvLyDlm6DkuLrlm77niYfmmK/ku45wcmVzbWlj5p2l55qE77yM5omA5Lul6KaB5Yy/5ZCNXG4gICAgLy8gdGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICAvLyB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG4gICAgLy8gLy8g5aaC5p6c5Zu+54mH5piv6buR6Imy55qE5p2Q6LSo77yM55yL6L+Z6YeM77yMZ2V0QXR0cmlidXRl5piv55u05o6laW1hZ2Uu6ICM5LiN5pivdGhpcy5pbWFnZVxuICAgIC8vIC8vIHRoaXMuaW1hZ2Ug5b2T5YmN57G755qE5a6e5L6L5a+56LGh5LiK55qE5LiA5Liq5bGe5oCn77yMaW1hZ2Ug5Y+q5piv5LiA5Liq5Zyo5pa55rOV5Lit5Li05pe25a2Y5YKo5Zu+54mH5YWD57Sg55qE5Y+Y6YePXG4gIH1cblxuICAvLyDnhLblkI7lsIbpgInlpb3nmoTnhafniYfkvKDnu5lwcm9ncmFt5aSE55CG6LS05Zu+XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XG4gICAgLy8gbWVzaOaYr3NjZW5l55qE5a2Q5YWD57Sg44CCXG5cbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICAvLyDlsIZtZXNo5ZKMZ2FsbGVyeeaJgOiuvuWumueahOWwuuWvuOe7keWumlxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIC8vIOWIneWni+WMlnNpemVz77yM6K6p5LuW5Y+Y5oiQ5LiL6Z2i5Y+v5Lul6YeN5aSN5Yip55So55qE5bGe5oCnXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgLy8gdGhpcy51cGRhdGVZKClcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbnMuXG4gIHNob3coKSB7XG4gICAgR1NBUC5mcm9tVG8odGhpcy5vcGFjaXR5LCB7XG4gICAgICBtdWx0aXBsaWVyOiAwXG4gICAgfSwge1xuICAgICAgbXVsdGlwbGllcjogMVxuICAgIH0pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIEdTQVAudG8odGhpcy5vcGFjaXR5LCB7XG4gICAgICBtdWx0aXBsaWVyOiAwXG4gICAgfSlcbiAgfVxuXG4gIC8vIEV2ZW50c1xuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwgJiYgc2Nyb2xsLngpXG4gICAgLy8gdGhpcy51cGRhdGVZKHNjcm9sbCAmJiBzY3JvbGwueSlcblxuICB9XG5cbiAgLy8gTG9vcFxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gICAgLy8g5oiR54yc5piv5oqKd2ViR2zlm77niYflj5jmiJDljZXkvY3lkJHph4/nhLblkI7lho3kuZjku6XmraPnoa7nmoTlm77niYfnmoTlrr3pq5jvvIzorqnov5nkupvlm77niYflsLrlr7htYXRjaOWOn+WbvlxuXG5cbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9ICgtdGhpcy5zaXplcy53aWR0aCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhLnhcbiAgICAvLyB3aWR0aOWSjGhlaWdodOaYr+inhueql+eahOWuvemrmOOAguS5n+WwseaYr21lc2jnmoRwb3NpdGlvbueahOWOn+eCueWcqOinhueql+WPo+eahOato+S4reW/g1xuICAgIC8vIC13aWR0aCAvIDIg6L+Z5Liq6YOo5YiG5bCx5piv5bCG5omA5pyJbWVzaOeahOWOn+eCuXBvc2l0aW9u56e75Yiw6KeG56qX55qE5bem5LiK6KeSXG4gIH1cblxuXG4gIC8vIGNvbGxlY3Rpb25z55qE5LiA57O75YiX5Zu+54mH55qE5Zu+55S7XG4gIHVwZGF0ZShzY3JvbGwsIGluZGV4KSB7XG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbCk7XG5cbiAgICBjb25zdCBhbXBsaXR1ZGUgPSAwLjE7XG4gICAgLy8g5oyv5bmFOuazoueahOW8uuW6puWSjOWkp+Wwj1xuICAgIGNvbnN0IGZyZXF1ZW5jeSA9IDE7XG4gICAgLy8g6aKR546HOuWRqOacn+asoeaVsCzku6Pooah1c2Vy55qE5LqS5Yqo6YCf5bqmLlxuXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSAtMC4wMiAqIE1hdGguUEkgKiBNYXRoLnNpbih0aGlzLmluZGV4IC8gZnJlcXVlbmN5KTtcbiAgICAvLyDnlKhpbmRleOWSjGZyZXF1ZW5jeeadpeWBmuaXi+i9rOinkuW6pueahOaKgOacr1xuICAgIC8vIOW9k+i+k+WFpeS4ujDml7bvvIzmraPlvKblh73mlbDnmoTlgLzkuLow77yM6ICM5L2Z5bym5Ye95pWw55qE5YC85Li6MVxuICAgIC8vIC0uMDLmmK/mnIDnu4jorqHnrpflh7rnmoTml4vovazop5LluqbnmoTojIPlm7TmiJbluYXluqZcbiAgICAvLyBNYXRoLlBJ5LuO5byn5bqm6L2s5o2i5Li66KeS5bqmXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSBhbXBsaXR1ZGUgKiBNYXRoLnNpbih0aGlzLmluZGV4IC8gZnJlcXVlbmN5KTtcbiAgICAvLyBkb2luZyBhIHJvdGF0aW9uIGFuZCBzaW1wbGUgc2luZSB3YXZlLlxuXG5cbiAgICB0aGlzLm9wYWNpdHkudGFyZ2V0ID0gaW5kZXggPT09IHRoaXMuaW5kZXggPyAxIDogMC40O1xuICAgIC8vIOWIpOaWreaYr+S4jeaYr+W9k+WJjeeahOWbvueJhyzlpoLmnpzmmK/lsLHorr7nva7pgI/mmI7luqbkuLoxLOS4jeaYr+iuvue9ruS4ujQwJVxuICAgIHRoaXMub3BhY2l0eS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMub3BhY2l0eS5jdXJyZW50LFxuICAgICAgdGhpcy5vcGFjaXR5LnRhcmdldCxcbiAgICAgIHRoaXMub3BhY2l0eS5sZXJwXG4gICAgKTtcbiAgICAvLyDku47lvZPliY3liLDnm67moIcs5b2i5oiQ6YCP5piO5bqm6K6+572u5b6q546vXG5cbiAgICAvLyB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gdGhpcy5vcGFjaXR5Lm11bHRpcGxpZXI7XG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYS52YWx1ZSA9IHRoaXMub3BhY2l0eS5tdWx0aXBsaWVyICogdGhpcy5vcGFjaXR5LmN1cnJlbnQ7XG4gIH1cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjljNzhmNDAzMTYxYTBkNzY3ZWZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5Iiwib3BhY2l0eSIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwibXVsdGlwbGllciIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwic2hvdyIsIkdTQVAiLCJmcm9tVG8iLCJoaWRlIiwidG8iLCJvblJlc2l6ZSIsInNjcm9sbCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ1cGRhdGUiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJzaW4iLCJ1dGlscyIsImludGVycG9sYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9