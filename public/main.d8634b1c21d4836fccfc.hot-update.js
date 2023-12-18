/*! For license information please see main.d8634b1c21d4836fccfc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0}}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){i.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.upadteX(e&&e.x),this.upadteY(e&&e.y)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}upadteY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(t,e){this.bounds&&(this.upadteX(t),this.upadteY(),this.opacity.target=this.index===e?1:.4,this.opacity.current=i.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.current*this.opacity.multiplier)}}}},(function(t){t.h=()=>"c6b0cb987bb7d8480b66"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kODYzNGIxYzIxZDQ4MzZmY2NmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVZBT0EsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLEVBQUssTUFBRUMsSUFDakRDLEtBQUtOLFFBQVVBLEVBQ2ZNLEtBQUtMLFNBQVdBLEVBQ2hCSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFRQSxFQUNiQyxLQUFLSCxNQUFRQSxFQUdiRyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLGFBRUxILEtBQUtJLE1BQVEsQ0FDWEMsRUFBRyxFQUNIQyxFQUFHLEdBR0xOLEtBQUtPLFFBQVUsQ0FDYkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sR0FDTkMsV0FBWSxFQUVoQixDQUNBVixhQUFBQSxHQUNFLE1BQU1XLEVBQVFaLEtBQUtOLFFBQVFtQixjQUFjLHVDQUN6Q2IsS0FBS2MsUUFBVUMsT0FBT0MsU0FBU0osRUFBTUssYUFBYSxZQVlwRCxDQUdBZixhQUFBQSxHQUNFRixLQUFLa0IsUUFBVSxJQUFJQyxFQUFBQSxRQUFRbkIsS0FBS0osR0FBSSxDQUNsQ3dCLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPeEIsS0FBS2MsV0FHMUIsQ0FFQVgsVUFBQUEsR0FDRUgsS0FBSzBCLEtBQU8sSUFBSUMsRUFBQUEsS0FBSzNCLEtBQUtKLEdBQUksQ0FDNUJELFNBQVVLLEtBQUtMLFNBQ2Z1QixRQUFTbEIsS0FBS2tCLFVBR2hCbEIsS0FBSzBCLEtBQUtFLFVBQVU1QixLQUFLRixNQUczQixDQUVBK0IsWUFBQUEsRUFBYSxNQUFFOUIsSUFFYkMsS0FBS0QsTUFBUUEsRUFFYkMsS0FBSzhCLE9BQVM5QixLQUFLTixRQUFRcUMsd0JBRTNCL0IsS0FBS2dDLGNBQ0xoQyxLQUFLaUMsVUFDTGpDLEtBQUtrQyxTQUNQLENBR0FDLElBQUFBLEdBQ0VDLEVBQUFBLFFBQUtDLE9BQU9yQyxLQUFLTyxRQUFTLENBQ3hCSSxXQUFZLEdBQ1gsQ0FDREEsV0FBWSxHQUVoQixDQUVBMkIsSUFBQUEsR0FDRUYsRUFBQUEsUUFBS0csR0FBR3ZDLEtBQUtPLFFBQVMsQ0FDcEJJLFdBQVksR0FFaEIsQ0FHQTZCLFFBQUFBLENBQVN6QyxFQUFPMEMsR0FDZHpDLEtBQUtJLE1BQVEsQ0FDWEMsRUFBRyxFQUNIQyxFQUFHLEdBRUxOLEtBQUs2QixhQUFhOUIsR0FDbEJDLEtBQUtpQyxRQUFRUSxHQUFVQSxFQUFPcEMsR0FDOUJMLEtBQUtrQyxRQUFRTyxHQUFVQSxFQUFPbkMsRUFFaEMsQ0FHQTBCLFdBQUFBLEdBQ0VoQyxLQUFLMEMsT0FBUzFDLEtBQUs4QixPQUFPWSxPQUFTM0IsT0FBTzRCLFlBQzFDM0MsS0FBSzRDLE1BQVE1QyxLQUFLOEIsT0FBT2MsTUFBUTdCLE9BQU84QixXQUV4QzdDLEtBQUswQixLQUFLb0IsTUFBTXpDLEVBQUlMLEtBQUtELE1BQU02QyxNQUFRNUMsS0FBSzRDLE1BQzVDNUMsS0FBSzBCLEtBQUtvQixNQUFNeEMsRUFBSU4sS0FBS0QsTUFBTTJDLE9BQVMxQyxLQUFLMEMsTUFJL0MsQ0FFQVQsT0FBQUEsQ0FBUTVCLEVBQUksR0FDVkwsS0FBS0ssR0FBS0wsS0FBSzhCLE9BQU9pQixLQUFPMUMsR0FBS1UsT0FBTzhCLFdBQ3pDN0MsS0FBSzBCLEtBQUtzQixTQUFTM0MsR0FBTUwsS0FBS0QsTUFBTTZDLE1BQVEsRUFBTTVDLEtBQUswQixLQUFLb0IsTUFBTXpDLEVBQUksRUFBTUwsS0FBS0ssRUFBSUwsS0FBS0QsTUFBTTZDLE1BQVM1QyxLQUFLSSxNQUFNQyxDQUd0SCxDQUVBNkIsT0FBQUEsQ0FBUTVCLEVBQUksR0FDVk4sS0FBS00sR0FBS04sS0FBSzhCLE9BQU9tQixJQUFNM0MsR0FBS1MsT0FBTzRCLFlBQ3hDM0MsS0FBSzBCLEtBQUtzQixTQUFTMUMsRUFBS04sS0FBS0QsTUFBTTJDLE9BQVMsRUFBTTFDLEtBQUswQixLQUFLb0IsTUFBTXhDLEVBQUksRUFBTU4sS0FBS00sRUFBSU4sS0FBS0QsTUFBTTJDLE9BQVUxQyxLQUFLSSxNQUFNRSxDQUV2SCxDQUVBNEMsTUFBQUEsQ0FBT1QsRUFBUTVDLEdBQ1JHLEtBQUs4QixTQUNWOUIsS0FBS2lDLFFBQVFRLEdBQ2J6QyxLQUFLa0MsVUFFTGxDLEtBQUtPLFFBQVFFLE9BQVNULEtBQUtILFFBQVVBLEVBQVEsRUFBSSxHQUVqREcsS0FBS08sUUFBUUMsUUFBVTRCLEVBQUFBLFFBQUtlLE1BQU1DLFlBQVlwRCxLQUFLTyxRQUFRQyxRQUFTUixLQUFLTyxRQUFRRSxPQUFRVCxLQUFLTyxRQUFRRyxNQUV0R1YsS0FBS2tCLFFBQVFJLFNBQVNDLE9BQU9DLE1BQVF4QixLQUFLTyxRQUFRQyxRQUFVUixLQUFLTyxRQUFRSSxXQUczRSxrQkNuSkYwQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2NvbGxlY3Rpb25zL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/lpITnkIbnhafniYdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgLy8g5LiK6Z2i55qEZWxtZW506YO95piv6ZyA6KaB5aSN55So55qE5omA5Lul5Zyo6L+Z6YeM5Yid5aeL5YyWXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMub3BhY2l0eSA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjEsXG4gICAgICBtdWx0aXBsaWVyOiAwXG4gICAgfVxuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG4gICAgLy8gdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIC8vIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG4gICAgLy8gdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIC8vIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIC8vIC8vIOWboOS4uuWbvueJh+aYr+S7jnByZXNtaWPmnaXnmoTvvIzmiYDku6XopoHljL/lkI1cbiAgICAvLyB0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIC8vIHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcbiAgICAvLyAvLyDlpoLmnpzlm77niYfmmK/pu5HoibLnmoTmnZDotKjvvIznnIvov5nph4zvvIxnZXRBdHRyaWJ1dGXmmK/nm7TmjqVpbWFnZS7ogIzkuI3mmK90aGlzLmltYWdlXG4gICAgLy8gLy8gdGhpcy5pbWFnZSDlvZPliY3nsbvnmoTlrp7kvovlr7nosaHkuIrnmoTkuIDkuKrlsZ7mgKfvvIxpbWFnZSDlj6rmmK/kuIDkuKrlnKjmlrnms5XkuK3kuLTml7blrZjlgqjlm77niYflhYPntKDnmoTlj5jph49cbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIC8vIOWwhm1lc2jlkoxnYWxsZXJ55omA6K6+5a6a55qE5bC65a+457uR5a6aXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgLy8g5Yid5aeL5YyWc2l6ZXPvvIzorqnku5blj5jmiJDkuIvpnaLlj6/ku6Xph43lpI3liKnnlKjnmoTlsZ7mgKdcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuICB9XG5cbiAgLy8gQW5pbWF0aW9ucy5cbiAgc2hvdygpIHtcbiAgICBHU0FQLmZyb21Ubyh0aGlzLm9wYWNpdHksIHtcbiAgICAgIG11bHRpcGxpZXI6IDBcbiAgICB9LCB7XG4gICAgICBtdWx0aXBsaWVyOiAxXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgR1NBUC50byh0aGlzLm9wYWNpdHksIHtcbiAgICAgIG11bHRpcGxpZXI6IDBcbiAgICB9KVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbCAmJiBzY3JvbGwueClcbiAgICB0aGlzLnVwYWR0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KVxuXG4gIH1cblxuICAvLyBMb29wXG4gIHVwYWR0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICAvLyDmiJHnjJzmmK/miop3ZWJHbOWbvueJh+WPmOaIkOWNleS9jeWQkemHj+eEtuWQjuWGjeS5mOS7peato+ehrueahOWbvueJh+eahOWuvemrmO+8jOiuqei/meS6m+WbvueJh+WwuuWvuG1hdGNo5Y6f5Zu+XG5cblxuICB9XG5cbiAgdXBhZHRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueFxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpICsgdGhpcy5leHRyYS55XG4gICAgLy8g6L+Z5LiqeOaYr+S5i+WJjeWcqGluZGV46YeM6K6+572u55qE6byg5qCH5ouW5Yqo55qE5b2T5YmN55qEeCx555qE6Led56a744CC5omA5Lul77yM5oOz56e75Yqo5Yy56YWN5aW955qE5Zu+54mH77yM6ZyA6KaB5Zyo5pW05Liq5a655Zmo5Yqg5LiK6byg5qCHeCx556e75Yqo55qE6Led56a7XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBpbmRleCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBhZHRlWChzY3JvbGwpXG4gICAgdGhpcy51cGFkdGVZKClcblxuICAgIHRoaXMub3BhY2l0eS50YXJnZXQgPSB0aGlzLmluZGV4ID09PSBpbmRleCA/IDEgOiAwLjRcblxuICAgIHRoaXMub3BhY2l0eS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLm9wYWNpdHkuY3VycmVudCwgdGhpcy5vcGFjaXR5LnRhcmdldCwgdGhpcy5vcGFjaXR5LmxlcnApXG5cbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gdGhpcy5vcGFjaXR5LmN1cnJlbnQgKiB0aGlzLm9wYWNpdHkubXVsdGlwbGllclxuXG5cbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzZiMGNiOTg3YmI3ZDg0ODBiNjZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5Iiwib3BhY2l0eSIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwibXVsdGlwbGllciIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsInNob3ciLCJHU0FQIiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==