/*! For license information please see main.89335a9d7175820cdc73.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":()=>{},"./app/components/Canvas/index.js":(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),n=s("./node_modules/ogl/src/core/Transform.js"),h=s("./app/components/Canvas/home/index.js"),c=s("./app/components/Canvas/about/index.js"),a=s("./app/components/Canvas/collections/index.js"),l=s("./app/components/Canvas/Transition.js"),r=s.n(l);class d{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createHome(){this.home=new h.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(e,t){this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.home&&this.home.hide(),this.isFromCollectionsToDetail="collections"===this.template&&t.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&t.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new(r()))}onChangeEnd(e){"about"===e?this.createAbout():this.about&&this.destroyAbout(),"collections"===e?this.createCollections():this.collections&&this.destroyCollections(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const o={sizes:this.sizes};this.about&&this.about.onResize(o),this.collections&&this.collections.onResize(o),this.home&&this.home.onResize(o)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t),this.home&&this.home.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.about&&this.about.onTouchMove(o),this.collections&&this.collections.onTouchMove(o),this.home&&this.home.onTouchMove(o)}onTouchUp(e){this.isDown=!1;const t=e.changedTouches?e.changedTouches[0].clientX:e.clientX,s=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.about&&this.about.onTouchUp(o),this.collections&&this.collections.onTouchUp(o),this.home&&this.home.onTouchUp(o)}onWheel(e){this.home&&this.home.onWheel(e),this.collections&&this.collections.onWheel(e)}update(e){this.about&&this.about.update(e),this.collections&&this.collections.update(),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"d4e110e6852bf870b01e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44OTMzNWE5ZDcxNzU4MjBjZGM3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z2dCQVNlLE1BQU1BLEVBQ25CQyxXQUFBQSxFQUFZLFNBQUNDLElBQ1hDLEtBQUtELFNBQVdBLEVBRWhCQyxLQUFLQyxFQUFJLENBQ1BDLE1BQU8sRUFDUEMsU0FBVSxFQUNWQyxJQUFLLEdBRVBKLEtBQUtLLEVBQUksQ0FDUEgsTUFBTyxFQUNQQyxTQUFVLEVBQ1ZDLElBQUssR0FJUEosS0FBS00saUJBQ0xOLEtBQUtPLGVBQ0xQLEtBQUtRLGNBRUxSLEtBQUtTLFVBSVAsQ0FFQUgsY0FBQUEsR0FDRU4sS0FBS1UsU0FBVyxJQUFJQyxFQUFBQSxTQUFVLENBQzVCQyxPQUFPLEVBRVBDLFdBQVUsSUFJWmIsS0FBS2MsR0FBS2QsS0FBS1UsU0FBU0ksR0FFeEJDLFNBQVNDLEtBQUtDLFlBQVlqQixLQUFLYyxHQUFHSSxPQUNwQyxDQUVBWCxZQUFBQSxHQUNFUCxLQUFLbUIsT0FBUyxJQUFJQyxFQUFBQSxPQUFPcEIsS0FBS2MsSUFDOUJkLEtBQUttQixPQUFPRSxTQUFTQyxFQUFJLENBRTNCLENBRUFkLFdBQUFBLEdBQ0VSLEtBQUt1QixNQUFRLElBQUlDLEVBQUFBLFNBQ25CLENBS0FDLFVBQUFBLEdBQ0V6QixLQUFLMEIsS0FBTyxJQUFJQyxFQUFBQSxRQUFLLENBQ25CYixHQUFJZCxLQUFLYyxHQUNUUyxNQUFPdkIsS0FBS3VCLE1BQ1pLLE1BQU81QixLQUFLNEIsT0FHaEIsQ0FFQUMsV0FBQUEsR0FDTTdCLEtBQUswQixPQUVUMUIsS0FBSzBCLEtBQUtJLFVBQ1Y5QixLQUFLMEIsS0FBTyxLQUNkLENBTUFLLFdBQUFBLEdBQ0UvQixLQUFLZ0MsTUFBUSxJQUFJQyxFQUFBQSxRQUFNLENBQ3JCbkIsR0FBSWQsS0FBS2MsR0FDVFMsTUFBT3ZCLEtBQUt1QixNQUNaSyxNQUFPNUIsS0FBSzRCLE9BRWhCLENBRUFNLFlBQUFBLEdBQ01sQyxLQUFLZ0MsUUFFVGhDLEtBQUtnQyxNQUFNRixVQUNYOUIsS0FBS2dDLE1BQVEsS0FDZixDQUtBRyxpQkFBQUEsR0FDRW5DLEtBQUtvQyxZQUFjLElBQUlDLEVBQUFBLFFBQVksQ0FDakN2QixHQUFJZCxLQUFLYyxHQUNUUyxNQUFPdkIsS0FBS3VCLE1BQ1pLLE1BQU81QixLQUFLNEIsT0FFaEIsQ0FFQVUsa0JBQUFBLEdBQ010QyxLQUFLb0MsY0FFVHBDLEtBQUtvQyxZQUFZTixVQUNqQjlCLEtBQUtvQyxZQUFjLEtBQ3JCLENBd0JBRyxXQUFBQSxHQUNFdkMsS0FBS3dDLFlBQVl4QyxLQUFLRCxTQUN4QixDQUNBMEMsYUFBQUEsQ0FBYzFDLEVBQVUyQyxHQUNuQjFDLEtBQUtnQyxPQUNOaEMsS0FBS2dDLE1BQU1XLE9BR1YzQyxLQUFLb0MsYUFDTnBDLEtBQUtvQyxZQUFZTyxPQUdoQjNDLEtBQUswQixNQUNOMUIsS0FBSzBCLEtBQUtpQixPQUdaM0MsS0FBSzRDLDBCQUE2QyxnQkFBakI1QyxLQUFLRCxVQUE2QjJDLEVBQUlHLFFBQVEsV0FBYSxFQUM1RjdDLEtBQUs4QywwQkFBNkMsV0FBakI5QyxLQUFLRCxVQUF3QjJDLEVBQUlHLFFBQVEsZ0JBQWtCLEdBR3pGN0MsS0FBSzRDLDJCQUE2QjVDLEtBQUs4Qyw2QkFDdkM5QyxLQUFLK0MsV0FBYSxJQUFJQyxLQUUzQixDQUNBUixXQUFBQSxDQUFZekMsR0FFTSxVQUFiQSxFQUNEQyxLQUFLK0IsY0FDRy9CLEtBQUtnQyxPQUNiaEMsS0FBS2tDLGVBR1MsZ0JBQWJuQyxFQUNEQyxLQUFLbUMsb0JBQ0duQyxLQUFLb0MsYUFDYnBDLEtBQUtzQyxxQkFHUyxTQUFidkMsRUFDREMsS0FBS3lCLGFBRUx6QixLQUFLNkIsYUFHVCxDQUVBcEIsUUFBQUEsR0FFRVQsS0FBS1UsU0FBU3VDLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEcEQsS0FBS21CLE9BQU9rQyxZQUFZLENBQUVDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGNBRTdELE1BQU1HLEVBQU12RCxLQUFLbUIsT0FBT29DLEtBQU9DLEtBQUtDLEdBQUssS0FDbkNDLEVBQVMsRUFBSUYsS0FBS0csSUFBSUosRUFBTSxHQUFLdkQsS0FBS21CLE9BQU9FLFNBQVNDLEVBQ3REc0MsRUFBUUYsRUFBUzFELEtBQUttQixPQUFPbUMsT0FFbkN0RCxLQUFLNEIsTUFBUSxDQUNYOEIsU0FDQUUsU0FHRixNQUFNQyxFQUFTLENBQUNqQyxNQUFPNUIsS0FBSzRCLE9BRXhCNUIsS0FBS2dDLE9BQ1BoQyxLQUFLZ0MsTUFBTXZCLFNBQVNvRCxHQUdsQjdELEtBQUtvQyxhQUNQcEMsS0FBS29DLFlBQVkzQixTQUFTb0QsR0FHeEI3RCxLQUFLMEIsTUFDUDFCLEtBQUswQixLQUFLakIsU0FBU29ELEVBRXZCLENBRUFDLFdBQUFBLENBQVlDLEdBQ1YvRCxLQUFLZ0UsUUFBUyxFQUNkaEUsS0FBS0MsRUFBRUMsTUFBUTZELEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDaEVsRSxLQUFLSyxFQUFFSCxNQUFRNkQsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUVoRSxNQUFNTixFQUFTLENBQ2I1RCxFQUFHRCxLQUFLQyxFQUNSSSxFQUFHTCxLQUFLSyxHQUdOTCxLQUFLZ0MsT0FDUGhDLEtBQUtnQyxNQUFNOEIsWUFBWUQsR0FHckI3RCxLQUFLb0MsYUFDUHBDLEtBQUtvQyxZQUFZMEIsWUFBWUQsR0FHM0I3RCxLQUFLMEIsTUFDUDFCLEtBQUswQixLQUFLb0MsWUFBWUQsRUFFMUIsQ0FFQU8sV0FBQUEsQ0FBWUwsR0FDVixJQUFLL0QsS0FBS2dFLE9BQVEsT0FFbEIsTUFBTS9ELEVBQUk4RCxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdDLFFBQVVILEVBQU1HLFFBQ3JEN0QsRUFBSTBELEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0UsUUFBVUosRUFBTUksUUFFM0RuRSxLQUFLQyxFQUFFRyxJQUFLSCxFQUNaRCxLQUFLSyxFQUFFRCxJQUFLQyxFQUdaLE1BQU13RCxFQUFTLENBQ2I1RCxFQUFHRCxLQUFLQyxFQUNSSSxFQUFHTCxLQUFLSyxHQUdOTCxLQUFLZ0MsT0FDUGhDLEtBQUtnQyxNQUFNb0MsWUFBWVAsR0FHckI3RCxLQUFLb0MsYUFDUHBDLEtBQUtvQyxZQUFZZ0MsWUFBWVAsR0FHM0I3RCxLQUFLMEIsTUFDUDFCLEtBQUswQixLQUFLMEMsWUFBWVAsRUFFMUIsQ0FFQVEsU0FBQUEsQ0FBVU4sR0FDUi9ELEtBQUtnRSxRQUFTLEVBQ2QsTUFBTS9ELEVBQUk4RCxFQUFNTyxlQUFpQlAsRUFBTU8sZUFBZSxHQUFHSixRQUFVSCxFQUFNRyxRQUNuRTdELEVBQUkwRCxFQUFNTyxlQUFpQlAsRUFBTU8sZUFBZSxHQUFHSCxRQUFVSixFQUFNSSxRQUV6RW5FLEtBQUtDLEVBQUVHLElBQUtILEVBQ1pELEtBQUtLLEVBQUVELElBQUtDLEVBRVosTUFBTXdELEVBQVMsQ0FDYjVELEVBQUdELEtBQUtDLEVBQ1JJLEVBQUdMLEtBQUtLLEdBR05MLEtBQUtnQyxPQUNQaEMsS0FBS2dDLE1BQU1xQyxVQUFVUixHQUduQjdELEtBQUtvQyxhQUNQcEMsS0FBS29DLFlBQVlpQyxVQUFVUixHQUd6QjdELEtBQUswQixNQUNQMUIsS0FBSzBCLEtBQUsyQyxVQUFVUixFQUV4QixDQUVBVSxPQUFBQSxDQUFRUixHQUNIL0QsS0FBSzBCLE1BQ04xQixLQUFLMEIsS0FBSzZDLFFBQVFSLEdBR2pCL0QsS0FBS29DLGFBQ05wQyxLQUFLb0MsWUFBWW1DLFFBQVFSLEVBRTdCLENBR0FTLE1BQUFBLENBQU9DLEdBSUZ6RSxLQUFLZ0MsT0FDTmhDLEtBQUtnQyxNQUFNd0MsT0FBT0MsR0FJakJ6RSxLQUFLb0MsYUFDTnBDLEtBQUtvQyxZQUFZb0MsU0FHaEJ4RSxLQUFLMEIsTUFDTjFCLEtBQUswQixLQUFLOEMsU0FHWnhFLEtBQUtVLFNBQVNnRSxPQUFPLENBQ25CdkQsT0FBUW5CLEtBQUttQixPQUNiSSxNQUFPdkIsS0FBS3VCLE9BRWhCLGtCQ2pVRm9ELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDov5nkuKrmlofku7bnmoTkuIrkuIDnuqfkuqTmjqXmmK9jb21wb25lbnRz55qEaW5kZXguanPmlofku7ZcbmltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9jb2xsZWN0aW9ucydcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3Rvcih7dGVtcGxhdGV9KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gICAgLy8gdGVtcGxhdGXmmK/mlbDmja7mqKHniYhcbiAgICB0aGlzLnggPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuICAgIHRoaXMueSA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cblxuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgLy8gdGhpcy5jcmVhdGVDdWJlKClcbiAgICAvLyDku4DkuYjku4DkuYjlv5jorrBkZWZpbmXkuobvvIzlsLHnnIvov5nph4zmnInmsqHmnInooqvliJ3lp4vljJZcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoIHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgLy8g6K6pd2ViZ2znmoTog4zmma/oibLpgI/mmI7vvIzku47ogIzmmL7npLpjc3Porr7nva7nmoTpopzoibJcbiAgICAgIGFudGlhbGlhczp0cnVlXG4gICAgICAvLyDmipfplK/pvb9cbiAgICB9KTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsOyAvL1RJUCB3b3JrcyBsaWtlIGEgY2FudmFzIGNvbnRleHRcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8qKlxuICAgKiBIb21lLlxuICAgKi9cbiAgY3JlYXRlSG9tZSgpIHtcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KTtcblxuICB9XG5cbiAgZGVzdHJveUhvbWUoKXtcbiAgICBpZighdGhpcy5ob21lKSByZXR1cm5cbiAgICAvLyDlpoLmnpzkuI3lrZjlnKhob21l77yM5bCx6ZSA5q+BaG9tZe+8jO+8geaYr+S4jeaIkOeri+eahOaEj+aAne+8jOadoeS7tuS4uuWBh1xuICAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgICB0aGlzLmhvbWUgPSBudWxsXG4gIH1cblxuXG4gIC8qKlxuICAgKiBBYm91dC5cbiAgICovXG4gIGNyZWF0ZUFib3V0KCl7XG4gICAgdGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3lBYm91dCgpe1xuICAgIGlmKCF0aGlzLmFib3V0KSByZXR1cm5cbiAgICAvLyDlpoLmnpzkuI3lrZjlnKhhYm91dO+8jOWwsemUgOavgWFib3V077yM77yB5piv5LiN5oiQ56uL55qE5oSP5oCd77yM5p2h5Lu25Li65YGHXG4gICAgdGhpcy5hYm91dC5kZXN0cm95KClcbiAgICB0aGlzLmFib3V0ID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb25zLlxuICAgKi9cbiAgY3JlYXRlQ29sbGVjdGlvbnMoKXtcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveUNvbGxlY3Rpb25zKCl7XG4gICAgaWYoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuICAgIC8vIOWmguaenOS4jeWtmOWcqENvbGxlY3Rpb25z77yM5bCx6ZSA5q+BQ29sbGVjdGlvbnPvvIzvvIHmmK/kuI3miJDnq4vnmoTmhI/mgJ3vvIzmnaHku7bkuLrlgYdcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG4gIH1cblxuICAvLyBjcmVhdGVDdWJlKCkge1xuICAvLyAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gIC8vICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAvLyAgICAgdmVydGV4LFxuICAvLyAgICAgZnJhZ21lbnRcbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhmds5L2c5Li656ys5LiA5Liq5YWD57Sg5Lyg57uZTWVzaFxuICAvLyAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgLy8gICAgIGdlb21ldHJ5OnRoaXMuZ2VvbWV0cnksIFxuICAvLyAgICAgcHJvZ3JhbTp0aGlzLnByb2dyYW1cbiAgLy8gICB9KVxuICAvLyAgIC8vIOWwhuebkuWtkOiuvue9ruS4uuebuOacuueahOWtkOWFg+e0oFxuICAvLyAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAvLyB9XG5cbiAgLy8gRXZlbnRzXG4gIFxuXG4gIC8qKlxuICAgKiBFVkVOVFNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuICB9XG4gIG9uQ2hhbmdlU3RhcnQodGVtcGxhdGUsIHVybCl7XG4gICAgaWYodGhpcy5hYm91dCl7XG4gICAgICB0aGlzLmFib3V0LmhpZGUoKVxuICAgIH1cblxuICAgIGlmKHRoaXMuY29sbGVjdGlvbnMpe1xuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5oaWRlKClcbiAgICB9XG5cbiAgICBpZih0aGlzLmhvbWUpe1xuICAgICAgdGhpcy5ob21lLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCA9IHRoaXMudGVtcGxhdGUgPT09J2NvbGxlY3Rpb25zJyAmJiB1cmwuaW5kZXhPZignZGV0YWlsJykgPiAtMVxuICAgIHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyA9IHRoaXMudGVtcGxhdGUgPT09J2RldGFpbCcgJiYgdXJsLmluZGV4T2YoJ2NvbGxlY3Rpb25zJykgPiAtMVxuICAgIC8vIOWmguaenOaYr2RldGFpbOW5tuS4lCxjb2xsZWN0aW9ucyBhcmUgdGhlIHBhcnQgb2YgdGhlIHVybOS7lueahOWAvOWwseaYrz4tMeeahFxuXG4gICAgaWYodGhpcy5pc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIHx8IHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyl7XG4gICAgICAgdGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oKVxuICAgIH1cbiAgfVxuICBvbkNoYW5nZUVuZCh0ZW1wbGF0ZSl7XG4gICAgLy8g5bCx5piv5b2T55So5oi3Y2hhbmdlIHRoZSByb3V0ZVxuICAgIGlmKHRlbXBsYXRlID09PSAnYWJvdXQnKXtcbiAgICAgIHRoaXMuY3JlYXRlQWJvdXQoKVxuICAgIH1lbHNlIGlmICh0aGlzLmFib3V0KXtcbiAgICAgIHRoaXMuZGVzdHJveUFib3V0KClcbiAgICB9XG5cbiAgICBpZih0ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJyl7XG4gICAgICB0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKClcbiAgICB9ZWxzZSBpZiAodGhpcy5jb2xsZWN0aW9ucyl7XG4gICAgICB0aGlzLmRlc3Ryb3lDb2xsZWN0aW9ucygpXG4gICAgfVxuXG4gICAgaWYodGVtcGxhdGUgPT09ICdob21lJyl7XG4gICAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMuZGVzdHJveUhvbWUoKVxuICAgIH1cblxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8g5bCG5riy5p+T55qE55S75biD5bC65a+45aGr5ruh6KeG56qX5Y+jXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIC8vIOWIm+W7uuS6hmNhbWVyYeS5i+WQjuaJjeiDveWIm+W7uumAj+inhuWbvlxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCB9KTtcblxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56O1xuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0O1xuXG4gICAgdGhpcy5zaXplcyA9IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7c2l6ZXM6IHRoaXMuc2l6ZXN9XG5cbiAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgdGhpcy5hYm91dC5vblJlc2l6ZSh2YWx1ZXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uUmVzaXplKHZhbHVlcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uUmVzaXplKHZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaERvd24odmFsdWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9eFxuICAgIHRoaXMueS5lbmQgPXlcblxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgIHRoaXMuYWJvdXQub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID14XG4gICAgdGhpcy55LmVuZCA9eVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgIHRoaXMuYWJvdXQub25Ub3VjaFVwKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXAodmFsdWVzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuICAgIH1cbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpe1xuICAgIGlmKHRoaXMuaG9tZSl7XG4gICAgICB0aGlzLmhvbWUub25XaGVlbChldmVudClcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbGxlY3Rpb25zKXtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMub25XaGVlbChldmVudClcbiAgICB9XG4gIH1cblxuICAvLyBMb29wXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICAvLyDlrp7ml7bmuLLmn5NcbiAgICAvLyB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG4gICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgIGlmKHRoaXMuYWJvdXQpe1xuICAgICAgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuICAgIH1cbiAgICAvLyDlm6DkuLrlj6rmnIlhYm91dCBwYWdl5pyJ5LiL5ruRXG5cbiAgICBpZih0aGlzLmNvbGxlY3Rpb25zKXtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMudXBkYXRlKClcbiAgICB9XG5cbiAgICBpZih0aGlzLmhvbWUpe1xuICAgICAgdGhpcy5ob21lLnVwZGF0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lXG4gICAgfSlcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0ZTExMGU2ODUyYmY4NzBiMDFlXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiVHJhbnNmb3JtIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJjcmVhdGVBYm91dCIsImFib3V0IiwiQWJvdXQiLCJkZXN0cm95QWJvdXQiLCJjcmVhdGVDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXN0cm95Q29sbGVjdGlvbnMiLCJvblByZWxvYWRlZCIsIm9uQ2hhbmdlRW5kIiwib25DaGFuZ2VTdGFydCIsInVybCIsImhpZGUiLCJpc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIiwiaW5kZXhPZiIsImlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9