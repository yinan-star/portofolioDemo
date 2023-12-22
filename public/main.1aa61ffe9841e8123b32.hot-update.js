/*! For license information please see main.1aa61ffe9841e8123b32.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/collections/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/collections-fragment.glsl"),o=s("./app/shaders/collections-vertex.glsl");const n=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.sizes=a,this.index=i,this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes}),this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0}}createTexture(){const e=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.upadteScale(),this.upadteX(),this.upadteY()}show(){i.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){i.default.to(this.opacity,{multiplier:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.upadteX(t&&t.x),this.upadteY(t&&t.y)}upadteScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}upadteX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}upadteY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e,t){this.bounds&&(this.upadteX(e),this.upadteY(),this.program.uniforms.uAlpha.value=this.opacity.multiplier)}}}},(function(e){e.h=()=>"66be3c8ffebc5ebced04"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYWE2MWZmZTk4NDFlODEyM2IzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cVdBT0EsY0FDRUEsV0FBQUEsRUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLEVBQUssTUFBRUMsSUFDakRDLEtBQUtOLFFBQVVBLEVBQ2ZNLEtBQUtMLFNBQVdBLEVBQ2hCSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFRQSxFQUNiQyxLQUFLSCxNQUFRQSxFQUdiRyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLGFBQ0xILEtBQUtJLGFBQWEsQ0FDaEJMLE1BQU9DLEtBQUtELFFBR2RDLEtBQUtLLE1BQVEsQ0FDWEMsRUFBRyxFQUNIQyxFQUFHLEdBR0xQLEtBQUtRLFFBQVUsQ0FDYkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sR0FDTkMsV0FBWSxFQUVoQixDQUNBWCxhQUFBQSxHQUVFLE1BQU1ZLEVBQVFiLEtBQUtOLFFBQVFvQixjQUFjLHVDQUN6Q2QsS0FBS2UsUUFBVUMsT0FBT0MsU0FBU0osRUFBTUssYUFBYSxZQVlwRCxDQUdBaEIsYUFBQUEsR0FDRUYsS0FBS21CLFFBQVUsSUFBSUMsRUFBQUEsUUFBUXBCLEtBQUtKLEdBQUksQ0FDbEN5QixTQUFRLFVBQ1JDLE9BQU0sVUFDTkMsU0FBVSxDQUNSQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT3pCLEtBQUtlLFdBRzFCLENBRUFaLFVBQUFBLEdBQ0VILEtBQUsyQixLQUFPLElBQUlDLEVBQUFBLEtBQUs1QixLQUFLSixHQUFJLENBQzVCRCxTQUFVSyxLQUFLTCxTQUNmd0IsUUFBU25CLEtBQUttQixVQUdoQm5CLEtBQUsyQixLQUFLRSxVQUFVN0IsS0FBS0YsTUFHM0IsQ0FFQU0sWUFBQUEsRUFBYSxNQUFFTCxJQUViQyxLQUFLRCxNQUFRQSxFQUViQyxLQUFLOEIsT0FBUzlCLEtBQUtOLFFBQVFxQyx3QkFFM0IvQixLQUFLZ0MsY0FDTGhDLEtBQUtpQyxVQUNMakMsS0FBS2tDLFNBQ1AsQ0FHQUMsSUFBQUEsR0FDRUMsRUFBQUEsUUFBS0MsT0FBT3JDLEtBQUtRLFFBQVMsQ0FDeEJJLFdBQVksR0FDWCxDQUNEQSxXQUFZLEdBRWhCLENBRUEwQixJQUFBQSxHQUNFRixFQUFBQSxRQUFLRyxHQUFHdkMsS0FBS1EsUUFBUyxDQUNwQkksV0FBWSxHQUVoQixDQUdBNEIsUUFBQUEsQ0FBU3pDLEVBQU8wQyxHQUNkekMsS0FBS0ssTUFBUSxDQUNYQyxFQUFHLEVBQ0hDLEVBQUcsR0FFTFAsS0FBS0ksYUFBYUwsR0FDbEJDLEtBQUtpQyxRQUFRUSxHQUFVQSxFQUFPbkMsR0FDOUJOLEtBQUtrQyxRQUFRTyxHQUFVQSxFQUFPbEMsRUFFaEMsQ0FHQXlCLFdBQUFBLEdBQ0VoQyxLQUFLMEMsT0FBUzFDLEtBQUs4QixPQUFPWSxPQUFTMUIsT0FBTzJCLFlBQzFDM0MsS0FBSzRDLE1BQVE1QyxLQUFLOEIsT0FBT2MsTUFBUTVCLE9BQU82QixXQUV4QzdDLEtBQUsyQixLQUFLbUIsTUFBTXhDLEVBQUlOLEtBQUtELE1BQU02QyxNQUFRNUMsS0FBSzRDLE1BQzVDNUMsS0FBSzJCLEtBQUttQixNQUFNdkMsRUFBSVAsS0FBS0QsTUFBTTJDLE9BQVMxQyxLQUFLMEMsTUFJL0MsQ0FFQVQsT0FBQUEsQ0FBUTNCLEVBQUksR0FDVk4sS0FBS00sR0FBS04sS0FBSzhCLE9BQU9pQixLQUFPekMsR0FBS1UsT0FBTzZCLFdBQ3pDN0MsS0FBSzJCLEtBQUtxQixTQUFTMUMsR0FBTU4sS0FBS0QsTUFBTTZDLE1BQVEsRUFBTTVDLEtBQUsyQixLQUFLbUIsTUFBTXhDLEVBQUksRUFBTU4sS0FBS00sRUFBSU4sS0FBS0QsTUFBTTZDLE1BQVM1QyxLQUFLSyxNQUFNQyxDQUd0SCxDQUVBNEIsT0FBQUEsQ0FBUTNCLEVBQUksR0FDVlAsS0FBS08sR0FBS1AsS0FBSzhCLE9BQU9tQixJQUFNMUMsR0FBS1MsT0FBTzJCLFlBQ3hDM0MsS0FBSzJCLEtBQUtxQixTQUFTekMsRUFBS1AsS0FBS0QsTUFBTTJDLE9BQVMsRUFBTTFDLEtBQUsyQixLQUFLbUIsTUFBTXZDLEVBQUksRUFBTVAsS0FBS08sRUFBSVAsS0FBS0QsTUFBTTJDLE9BQVUxQyxLQUFLSyxNQUFNRSxDQUV2SCxDQUVBMkMsTUFBQUEsQ0FBT1QsRUFBUTVDLEdBQ1JHLEtBQUs4QixTQUNWOUIsS0FBS2lDLFFBQVFRLEdBQ2J6QyxLQUFLa0MsVUFFTGxDLEtBQUttQixRQUFRSSxTQUFTQyxPQUFPQyxNQUFRekIsS0FBS1EsUUFBUUksV0FHcEQsa0JDbkpGdUMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9jb2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8v5aSE55CG54Wn54mHXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL2NvbGxlY3Rpb25zLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL2NvbGxlY3Rpb25zLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIC8vIOS4iumdoueahGVsbWVudOmDveaYr+mcgOimgeWkjeeUqOeahOaJgOS7peWcqOi/memHjOWIneWni+WMllxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KTtcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMub3BhY2l0eSA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjEsXG4gICAgICBtdWx0aXBsaWVyOiAwXG4gICAgfVxuICB9XG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgLy8g5Zyoc2hhZGVy6YeM6Z2i5YGa55qE5riQ5Y+YXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG4gICAgLy8gdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIC8vIGNvbnN0IGltYWdlID10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG4gICAgLy8gdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIC8vIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuICAgIC8vIC8vIOWboOS4uuWbvueJh+aYr+S7jnByZXNtaWPmnaXnmoTvvIzmiYDku6XopoHljL/lkI1cbiAgICAvLyB0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIC8vIHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcbiAgICAvLyAvLyDlpoLmnpzlm77niYfmmK/pu5HoibLnmoTmnZDotKjvvIznnIvov5nph4zvvIxnZXRBdHRyaWJ1dGXmmK/nm7TmjqVpbWFnZS7ogIzkuI3mmK90aGlzLmltYWdlXG4gICAgLy8gLy8gdGhpcy5pbWFnZSDlvZPliY3nsbvnmoTlrp7kvovlr7nosaHkuIrnmoTkuIDkuKrlsZ7mgKfvvIxpbWFnZSDlj6rmmK/kuIDkuKrlnKjmlrnms5XkuK3kuLTml7blrZjlgqjlm77niYflhYPntKDnmoTlj5jph49cbiAgfVxuXG4gIC8vIOeEtuWQjuWwhumAieWlveeahOeFp+eJh+S8oOe7mXByb2dyYW3lpITnkIbotLTlm75cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICAvLyBtZXNo5pivc2NlbmXnmoTlrZDlhYPntKDjgIJcblxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIC8vIOWwhm1lc2jlkoxnYWxsZXJ55omA6K6+5a6a55qE5bC65a+457uR5a6aXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgLy8g5Yid5aeL5YyWc2l6ZXPvvIzorqnku5blj5jmiJDkuIvpnaLlj6/ku6Xph43lpI3liKnnlKjnmoTlsZ7mgKdcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGFkdGVTY2FsZSgpXG4gICAgdGhpcy51cGFkdGVYKClcbiAgICB0aGlzLnVwYWR0ZVkoKVxuICB9XG5cbiAgLy8gQW5pbWF0aW9ucy5cbiAgc2hvdygpIHtcbiAgICBHU0FQLmZyb21Ubyh0aGlzLm9wYWNpdHksIHtcbiAgICAgIG11bHRpcGxpZXI6IDBcbiAgICB9LCB7XG4gICAgICBtdWx0aXBsaWVyOiAxXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgR1NBUC50byh0aGlzLm9wYWNpdHksIHtcbiAgICAgIG11bHRpcGxpZXI6IDBcbiAgICB9KVxuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGFkdGVYKHNjcm9sbCAmJiBzY3JvbGwueClcbiAgICB0aGlzLnVwYWR0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KVxuXG4gIH1cblxuICAvLyBMb29wXG4gIHVwYWR0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICAvLyDmiJHnjJzmmK/miop3ZWJHbOWbvueJh+WPmOaIkOWNleS9jeWQkemHj+eEtuWQjuWGjeS5mOS7peato+ehrueahOWbvueJh+eahOWuvemrmO+8jOiuqei/meS6m+WbvueJh+WwuuWvuG1hdGNo5Y6f5Zu+XG5cblxuICB9XG5cbiAgdXBhZHRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueFxuICAgIC8vIHdpZHRo5ZKMaGVpZ2h05piv6KeG56qX55qE5a696auY44CC5Lmf5bCx5pivbWVzaOeahHBvc2l0aW9u55qE5Y6f54K55Zyo6KeG56qX5Y+j55qE5q2j5Lit5b+DXG4gICAgLy8gLXdpZHRoIC8gMiDov5nkuKrpg6jliIblsLHmmK/lsIbmiYDmnIltZXNo55qE5Y6f54K5cG9zaXRpb27np7vliLDop4bnqpfnmoTlt6bkuIrop5JcbiAgfVxuXG4gIHVwYWR0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpICsgdGhpcy5leHRyYS55XG4gICAgLy8g6L+Z5LiqeOaYr+S5i+WJjeWcqGluZGV46YeM6K6+572u55qE6byg5qCH5ouW5Yqo55qE5b2T5YmN55qEeCx555qE6Led56a744CC5omA5Lul77yM5oOz56e75Yqo5Yy56YWN5aW955qE5Zu+54mH77yM6ZyA6KaB5Zyo5pW05Liq5a655Zmo5Yqg5LiK6byg5qCHeCx556e75Yqo55qE6Led56a7XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBpbmRleCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBhZHRlWChzY3JvbGwpXG4gICAgdGhpcy51cGFkdGVZKClcblxuICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEudmFsdWUgPSB0aGlzLm9wYWNpdHkubXVsdGlwbGllclxuXG5cbiAgfVxuXG5cblxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjZiZTNjOGZmZWJjNWViY2VkMDRcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJleHRyYSIsIngiLCJ5Iiwib3BhY2l0eSIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwibXVsdGlwbGllciIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBhZHRlU2NhbGUiLCJ1cGFkdGVYIiwidXBhZHRlWSIsInNob3ciLCJHU0FQIiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9