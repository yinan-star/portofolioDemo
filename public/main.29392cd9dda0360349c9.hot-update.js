/*! For license information please see main.29392cd9dda0360349c9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./node_modules/ogl/src/core/Texture.js"),a=s("./app/classes/Component.js"),o=s("./node_modules/gsap/index.js"),i=s("./app/utils/text.js");class l extends a.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),this.canvas=e,window.TEXTURES={},(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{const t=new n.Texture(this.canvas.gl,{generateMipmaps:!1}),s=new window.Image;s.crossOrigin="anonymous",s.src=e,s.onload=e=>{t.image=s,this.onAssetLoaded()},window.TEXTURES[e]=t}))}onAssetLoaded(e){this.length+=1;const t=this.length/window.ASSETS.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onloaded()}onloaded(){return new Promise((e=>{this.emit("completed"),this.animateOut=o.default.timeline({delay:1}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.to(this.element,{autoAlpha:0,duration:1}),this.animateOut.call((e=>{this.destroy()}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"177a1b0b51e0a4592ba8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yOTM5MmNkOWRkYTAzNjAzNDljOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFFBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxXQUFBQSxFQUFZLE9BQUVDLElBQ1pDLE1BQU0sQ0FDSkMsUUFBUyxhQUNUQyxTQUFVLENBQ1JDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBR2hCQyxLQUFLUCxPQUFTQSxFQUNkUSxPQUFPQyxTQUFXLENBQUMsR0FFbkJDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU0ssS0FBS0osU0FBU0MsTUFDdkJPLFdBQVksVUFHZEQsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTSyxLQUFLSixTQUFTQyxNQUN2Qk8sV0FBWSxTQUdkSixLQUFLSixTQUFTUyxXQUFhTCxLQUFLSixTQUFTQyxNQUFNUyxpQkFBaUIsYUFFaEVOLEtBQUtPLE9BQVMsRUFFZFAsS0FBS1EsY0FDUCxDQUVBQSxZQUFBQSxHQUtFUCxPQUFPUSxPQUFPQyxTQUFRQyxJQUNwQixNQUFNQyxFQUFVLElBQUlDLEVBQUFBLFFBQVFiLEtBQUtQLE9BQU9xQixHQUFJLENBQzFDQyxpQkFBaUIsSUFFYkMsRUFBUSxJQUFJZixPQUFPZ0IsTUFFekJELEVBQU1FLFlBQWMsWUFDcEJGLEVBQU1HLElBQU1SLEVBQ1pLLEVBQU1JLE9BQVNDLElBQ2JULEVBQVFELE1BQU9LLEVBQ2ZoQixLQUFLc0IsZUFBZSxFQUV0QnJCLE9BQU9DLFNBQVNTLEdBQVNDLENBQU8sR0FHcEMsQ0FFQVUsYUFBQUEsQ0FBY1gsR0FDWlgsS0FBS08sUUFBVSxFQUVmLE1BQU1nQixFQUFVdkIsS0FBS08sT0FBU04sT0FBT1EsT0FBT0YsT0FDNUNQLEtBQUtKLFNBQVNHLFdBQVd5QixVQUFhLEdBQUVDLEtBQUtDLE1BQWdCLElBQVZILE1BR25DLElBQVpBLEdBQ0Z2QixLQUFLMkIsVUFFVCxDQUVBQSxRQUFBQSxHQUNFLE9BQU8sSUFBSUMsU0FBUUMsSUFDakI3QixLQUFLOEIsS0FBSyxhQUVWOUIsS0FBSytCLFdBQWFDLEVBQUFBLFFBQUtDLFNBQVMsQ0FDOUJDLE1BQU8sSUFJVGxDLEtBQUsrQixXQUFXSSxHQUFHbkMsS0FBS0osU0FBU1MsV0FBWSxDQUUzQytCLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHTHZDLEtBQUsrQixXQUFXSSxHQUFHbkMsS0FBS0osU0FBU0csV0FBWSxDQUUzQ3FDLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsUUFDRixTQUVIdkMsS0FBSytCLFdBQVdJLEdBQUduQyxLQUFLTCxRQUFTLENBRS9CNkMsVUFBVyxFQUNYSixTQUFVLElBSVpwQyxLQUFLK0IsV0FBV1UsTUFBS3BCLElBQ25CckIsS0FBSzBDLFNBQVMsR0FDZCxHQUlOLENBRUFBLE9BQUFBLEdBQ0UxQyxLQUFLTCxRQUFRZ0QsV0FBV0MsWUFBWTVDLEtBQUtMLFFBQzNDLGtCQ2hIRmtELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiAnLnByZWxvYWRlcicsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICBudW1iZXI6ICcucHJlbG9hZGVyX19udW1iZXInLFxuICAgICAgICBudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0JyxcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgd2luZG93LlRFWFRVUkVTID0ge31cblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuICAgIC8vIOWlveWDj+aYr+WcqHNwYW7ph4zpnaLlgZrpga7nvalcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblxuICAgIHRoaXMubGVuZ3RoID0gMFxuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkgeyAvLyDliJvlu7rliqDovb3pobXlkI7nm7TmjqXlpZTnnYBhYm91dCBwYWdl5bm25LiU5bCGYWJvdXTlm77niYfpg73mmL7npLrlh7rmnaVcbiAgICAvLyBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLGVsZW1lbnQgPT57XG4gICAgLy8gICAgIGVsZW1lbnQub25sb2FkPV8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXG4gICAgLy8gICAgIGVsZW1lbnQuc3JjPWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpICAgICAgICAgICBcbiAgICAvLyB9KSBcbiAgICB3aW5kb3cuQVNTRVRTLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzLmdsLCB7XG4gICAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2VcbiAgICAgIH0pXG4gICAgICBjb25zdCBtZWRpYSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXG4gICAgICBtZWRpYS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG4gICAgICBtZWRpYS5zcmMgPSBpbWFnZVxuICAgICAgbWVkaWEub25sb2FkID0gXyA9PntcbiAgICAgICAgdGV4dHVyZS5pbWFnZSA9bWVkaWFcbiAgICAgICAgdGhpcy5vbkFzc2V0TG9hZGVkKClcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5URVhUVVJFU1tpbWFnZV0gPSB0ZXh0dXJlXG4gICAgfSlcblxuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkgey8vIOWKoOi9vemhteeahOiuoeeul+WTjeW6lOWFrOW8jyAgICAgXG4gICAgdGhpcy5sZW5ndGggKz0gMVxuICAgIC8vIOavj2xvYWTkuIDmrKHvvIzov5nkuKrlvZPliY3liqDovb3nmoTov5vluqbkvJrliqDkuIBcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB3aW5kb3cuQVNTRVRTLmxlbmd0aFxuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgXG4gICAgLy8g6L+Z5Liq5piv5Yqg6L295a6M5omA5pyJ5Zu+5YOP5ZCO55qE5Yqg6L296aG155qEbnVtYmVy55qE6K6h566X5YWs5byPXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbmxvYWRlZCgpXG4gICAgfVxuICB9XG5cbiAgb25sb2FkZWQoKSB7Ly8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG15Y+K5Yqo55S7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgZGVsYXk6IDFcbiAgICAgICAgLy8g5o6n5Yi25Yqg6L296aG1562J5b6F5aSa5LmF6L+b5YWl5Li76aG1XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIC8vIOWtl+S9k+iuvuiuoemAkOa4kOWQkeS4i+a2iOWksVxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgIHk6ICcxMDAlJyxcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsIHtcbiAgICAgICAgLy8g5pWw5a2X6K6+6K6h6YCQ5riQ5ZCR5LiL5raI5aSxXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogJzEwMCUnLFxuICAgICAgfSwgJy09MS40JylcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAvLyDorqlwcmVsb2FkZXLmsr9Z6L205ZCR5LiK5raI5aSxXG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZHVyYXRpb246IDFcblxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PntcbiAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgIH0pXG5cbiAgICBcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNzdhMWIwYjUxZTBhNDU5MmJhOFwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwidGhpcyIsIndpbmRvdyIsIlRFWFRVUkVTIiwic3BsaXQiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJBU1NFVFMiLCJmb3JFYWNoIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImdsIiwiZ2VuZXJhdGVNaXBtYXBzIiwibWVkaWEiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25sb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImVtaXQiLCJhbmltYXRlT3V0IiwiR1NBUCIsInRpbWVsaW5lIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiYXV0b0FscGhhIiwiY2FsbCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=