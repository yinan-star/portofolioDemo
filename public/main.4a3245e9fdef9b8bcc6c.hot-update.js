/*! For license information please see main.4a3245e9fdef9b8bcc6c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./node_modules/ogl/src/core/Texture.js"),a=s("./app/classes/Component.js"),o=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),i=s("./app/utils/text.js");class l extends a.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),this.canvas=e,window.TEXTURES={},(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{const t=new n.Texture(this.canvas.gl,{generateMipmaps:!1}),s=new window.Image;s.crossOrigin="anonymous",s.src=e,s.onload=e=>{t.image=s,this.onAssetLoaded()},window.TEXTURES[e]=t}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onloaded()}onloaded(){return new Promise((e=>{this.animateOut=o.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"d1e869f932e69996ea4a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YTMyNDVlOWZkZWY5YjhiY2M2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVRBT2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxXQUFBQSxFQUFZLE9BQUVDLElBQ1pDLE1BQU0sQ0FDSkMsUUFBUyxhQUNUQyxTQUFVLENBQ1JDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBR2hCQyxLQUFLUCxPQUFTQSxFQUNkUSxPQUFPQyxTQUFXLENBQUMsR0FFbkJDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU0ssS0FBS0osU0FBU0MsTUFDdkJPLFdBQVksVUFHZEQsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTSyxLQUFLSixTQUFTQyxNQUN2Qk8sV0FBWSxTQUdkSixLQUFLSixTQUFTUyxXQUFhTCxLQUFLSixTQUFTQyxNQUFNUyxpQkFBaUIsYUFFaEVOLEtBQUtPLE9BQVMsRUFFZFAsS0FBS1EsY0FDUCxDQUVBQSxZQUFBQSxHQUtFUCxPQUFPUSxPQUFPQyxTQUFRQyxJQUNwQixNQUFNQyxFQUFVLElBQUlDLEVBQUFBLFFBQVFiLEtBQUtQLE9BQU9xQixHQUFJLENBQzFDQyxpQkFBaUIsSUFFYkMsRUFBUSxJQUFJZixPQUFPZ0IsTUFFekJELEVBQU1FLFlBQWMsWUFDcEJGLEVBQU1HLElBQU1SLEVBQ1pLLEVBQU1JLE9BQVNDLElBQ2JULEVBQVFELE1BQU9LLEVBQ2ZoQixLQUFLc0IsZUFBZSxFQUV0QnJCLE9BQU9DLFNBQVNTLEdBQVNDLENBQU8sR0FHcEMsQ0FFQVUsYUFBQUEsQ0FBY1gsR0FDWlgsS0FBS08sUUFBVSxFQUVmLE1BQU1nQixFQUFVdkIsS0FBS08sT0FBU1AsS0FBS0osU0FBUzRCLE9BQU9qQixPQUNuRFAsS0FBS0osU0FBU0csV0FBVzBCLFVBQWEsR0FBRUMsS0FBS0MsTUFBZ0IsSUFBVkosTUFHbkMsSUFBWkEsR0FDRnZCLEtBQUs0QixVQUVULENBRUFBLFFBQUFBLEdBQ0UsT0FBTyxJQUFJQyxTQUFRQyxJQUNqQjlCLEtBQUsrQixXQUFhQyxFQUFBQSxRQUFLQyxTQUFTLENBQzlCQyxNQUFPLElBSVRsQyxLQUFLK0IsV0FBV0ksR0FBR25DLEtBQUtKLFNBQVNTLFdBQVksQ0FFM0MrQixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLFNBR0x2QyxLQUFLK0IsV0FBV0ksR0FBR25DLEtBQUtKLFNBQVNHLFdBQVksQ0FFM0NxQyxTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLFFBQ0YsU0FFSHZDLEtBQUsrQixXQUFXSSxHQUFHbkMsS0FBS0wsUUFBUyxDQUUvQnlDLFNBQVUsSUFDVkMsS0FBTSxXQUNORyxPQUFRLEVBQ1JDLGdCQUFpQixhQUVoQixPQUNIekMsS0FBSytCLFdBQVdXLE1BQUtyQixJQUVuQnJCLEtBQUsyQyxLQUFLLFlBQVksR0FDdEIsR0FFTixDQUVBQyxPQUFBQSxHQUNFNUMsS0FBS0wsUUFBUWtELFdBQVdDLFlBQVk5QyxLQUFLTCxRQUMzQyxrQkMvR0ZvRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ29nbCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY2xhc3Nlcy9Db21wb25lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiAnLnByZWxvYWRlcicsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICBudW1iZXI6ICcucHJlbG9hZGVyX19udW1iZXInLFxuICAgICAgICBudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0JyxcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgd2luZG93LlRFWFRVUkVTID0ge31cblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuICAgIC8vIOWlveWDj+aYr+WcqHNwYW7ph4zpnaLlgZrpga7nvalcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblxuICAgIHRoaXMubGVuZ3RoID0gMFxuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkgeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAvLyBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLGVsZW1lbnQgPT57XG4gICAgLy8gICAgIGVsZW1lbnQub25sb2FkPV8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXG4gICAgLy8gICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAvLyB9KSBcbiAgICB3aW5kb3cuQVNTRVRTLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzLmdsLCB7XG4gICAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2VcbiAgICAgIH0pXG4gICAgICBjb25zdCBtZWRpYSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXG4gICAgICBtZWRpYS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG4gICAgICBtZWRpYS5zcmMgPSBpbWFnZVxuICAgICAgbWVkaWEub25sb2FkID0gXyA9PntcbiAgICAgICAgdGV4dHVyZS5pbWFnZSA9bWVkaWFcbiAgICAgICAgdGhpcy5vbkFzc2V0TG9hZGVkKClcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5URVhUVVJFU1tpbWFnZV0gPSB0ZXh0dXJlXG4gICAgfSlcblxuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkgey8vIOWKoOi9vemhteeahOiuoeeul+WTjeW6lOWFrOW8jyAgICAgXG4gICAgdGhpcy5sZW5ndGggKz0gMVxuICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuICAgIC8vIOi/meS4quaYr+WKoOi9veWujOaJgOacieWbvuWDj+WQjueahOWKoOi9vemhteeahG51bWJlcueahOiuoeeul+WFrOW8j1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25sb2FkZWQoKVxuICAgIH1cbiAgfVxuXG4gIG9ubG9hZGVkKCkgey8vIOaOp+WItuWKoOi9vemhteetieW+heWkmuS5hei/m+WFpeS4u+mhteWPiuWKqOeUu1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMlxuICAgICAgICAvLyDmjqfliLbliqDovb3pobXnrYnlvoXlpJrkuYXov5vlhaXkuLvpobVcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcbiAgICAgICAgLy8g5a2X5L2T6K6+6K6h6YCQ5riQ5ZCR5LiL5raI5aSxXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogJzEwMCUnLFxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCwge1xuICAgICAgICAvLyDmlbDlrZforr7orqHpgJDmuJDlkJHkuIvmtojlpLFcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICB5OiAnMTAwJScsXG4gICAgICB9LCAnLT0xLjQnKVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIC8vIOiuqXByZWxvYWRlcuayv1novbTlkJHkuIrmtojlpLFcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcxMDAlIDEwMCUnXG5cbiAgICAgIH0sICctPTEnKVxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB7XG4gICAgICAgIC8vIOi/m+WFpeS4u+mhtVxuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQxZTg2OWY5MzJlNjk5OTZlYTRhXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJ0aGlzIiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsIkFTU0VUUyIsImZvckVhY2giLCJpbWFnZSIsInRleHR1cmUiLCJUZXh0dXJlIiwiZ2wiLCJnZW5lcmF0ZU1pcG1hcHMiLCJtZWRpYSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInBlcmNlbnQiLCJpbWFnZXMiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbmxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsIkdTQVAiLCJ0aW1lbGluZSIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==