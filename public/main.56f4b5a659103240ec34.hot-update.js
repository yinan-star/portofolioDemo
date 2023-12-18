/*! For license information please see main.56f4b5a659103240ec34.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./node_modules/lodash/each.js"),n=s.n(a),i=s("./node_modules/normalize-wheel/index.js"),o=s.n(i),h=s("./app/components/Canvas/index.js"),c=s("./app/components/Navigation.js"),d=s("./app/components/Preloader.js"),p=s("./app/pages/About/About.js"),r=s("./app/pages/Collections/Collections.js"),l=s("./app/pages/Detail/Detail.js"),u=s("./app/pages/Home/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addLinkListeners(),this.addEventListeners(),this.onResize(),this.update()}createNavigation(){this.navigation=new c.default({template:this.template})}createPreloader(){this.preloader=new d.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new h.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new p.default,collections:new r.default,detail:new l.default,home:new u.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}async onChange(e){this.canvas.onChangeStart(this.template,e),await this.page.hide();const t=await fetch(e);if(200===t.status){const s=await t.text(),a=document.createElement("div");window.history.pushState({},"",e),a.innerHTML=s;const n=a.querySelector(".content");this.template=n.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=n.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.log("Error");console.log(t)}onResize(){window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()})),this.page&&this.page.onResize&&this.page.onResize()}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=o()(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}}}},(function(e){e.h=()=>"89335a9d7175820cdc73"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2RBLEVBQU1jLGlCQUVOLE1BQU0sS0FBRUMsR0FBU0gsRUFFakJ2RSxLQUFLb0MsU0FBU3NDLEVBQUssQ0FDcEIsR0FFTCxrQkM5TkZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlhbPkuY7mlbTkuKrnvZHpobXnmoTlsZXnpLrkv6Hmga9cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcblxuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4vcGFnZXMvRGV0YWlsL0RldGFpbFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIFxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcbiBcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG4gIC8vIOWIneWni+WMluexu1xuICBjcmVhdGVOYXZpZ2F0aW9uKCkge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKHtcbiAgICAgIGNhbnZhcyA6IHRoaXMuY2FudmFzXG4gICAgfSlcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpe1xuICAgIHRoaXMuY2FudmFzID1uZXcgQ2FudmFzKHtcbiAgICAgIHRlbXBsYXRlIDp0aGlzLnRlbXBsYXRlXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50c1xuICAgKi9cbiAgb25QcmVsb2FkZWQoKXtcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuY2FudmFzLm9uUHJlbG9hZGVkKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgLy8g6ZSA5q+BLemHjeaWsOWumuS5ieWwuuWvuC3pobXpnaLlsZXnpLpcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIHRoaXMuY2FudmFzLm9uQ2hhbmdlU3RhcnQodGhpcy50ZW1wbGF0ZSwgdXJsKVxuICAgIFxuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcbiAgICAvLyDlvZPngrnlh7vml7bvvIzlvZPliY3pobXpnaLkvJrooqvpmpDol49cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmKHJlcXVlc3Quc3RhdHVzID09PSAyMDApe1xuICAgICAgY29uc3QgaHRtbD1hd2FpdCByZXF1ZXN0LnRleHQoKVxuICAgICAgY29uc3QgZGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIHVybClcbiAgICAgIC8vIOWwseaYr+ivtOS9oOeCueWHu+WTquS4qumhtemdoix1cmznmoTlkI7nvIDlsLHmmK/lk6rkuKrpobXpnaLnmoQvY29sbGVjdGlzb25zIG9yIC9hYm91dCBvciAvc2xhc2ggaG9tZVxuXG4gICAgICBkaXYuaW5uZXJIVE1MPWh0bWxcblxuICAgICAgY29uc3QgIGRpdkNvbnRlbnQgPWRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAgIHRoaXMudGVtcGxhdGU9ZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG4gXG4gICAgICB0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsdGhpcy50ZW1wbGF0ZSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUw9ZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5jYW52YXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgICAgLy8g6L+Z5LiqdGVtcGxhdGXmmK/mlrDnmoTpobXpnaLnmoR0ZW1wbGF0ZVxuICAgICAgXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMub25SZXNpemUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICAgIC8vIOi/memHjOWPiOWGmeS4gOmBjeaYr+WboOS4uuWcqOWIm+W7uuaWsOeahOmhtemdouS5i+WQju+8jOacieS6m+mhtemdoumHjOmdoui/mOacieaWsOeahOmTvuaOpe+8jOaJgOS7peWcqOaOieS4gOasoei/meS4quaWueazlVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yJylcbiAgICB9XG5cbiAgICAvLyBpZiAocmVxdWVzdC5zdGF0dXMpXG4gICAgY29uc29sZS5sb2cocmVxdWVzdClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PntcbiAgICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkge1xuICAgICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpO1xuICAgICAgfVxuICAgICAgLy8g5aSE55CG56qX5Y+j6LCD5pW05aSn5bCP5LqL5Lu255qE5Ye95pWw44CC5b2T5rWP6KeI5Zmo56qX5Y+j5aSn5bCP5pS55Y+Y5pe277yI5q+U5aaC55So5oi36LCD5pW056qX5Y+j5aSn5bCP5oiW6ICF6K6+5aSH5Y+R55Sf5peL6L2s77yJ77yM5Lya6Kem5Y+RIG9uUmVzaXplIOWHveaVsOOAglxuICAgIH0pXG4gICAgXG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpe1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpO1xuICAgIH1cblxuXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCl7XG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZShldmVudCk7XG4gICAgfVxuXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpe1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgb25XaGVlbChldmVudCl7XG4gICAgY29uc3Qgbm9ybWFsaXplZFdoZWVsID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbldoZWVsKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbCk7XG4gICAgICAvLyDosIPnlKjnlLvluIPnmoRvbldoZWVs55qE5pa55rOV77yM5bm25bCG5qCH5YeG5YyW5aSE55CG5ZCO55qE5rua5Yqo5YC85L2c5Li65Y+C5pWw5Lyg6L+b5Y67XG4gICAgfVxuICAgXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuICAgICAgdGhpcy5wYWdlLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb29wXG4gICAqL1xuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cbiAgICAvLyDlhYjmuLLmn5PpobXpnaLvvIzlm6DkuLrmnIljb3JyZWN0IFkgcG9zaXRpb27vvIzmiYDku6XlkI7pnaLnmoRjYW52YXPnmoRZ5Lmf5Lya6Lef552A5pu05pawXG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmNhbnZhcy51cGRhdGUodGhpcy5wYWdlLnNjcm9sbCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuICAgIC8vIOeUteiEkeerr+eahFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcbiAgICAvLyDnp7vliqjnq6/nmoRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODkzMzVhOWQ3MTc1ODIwY2RjNzNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uUmVzaXplIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsImNhbnZhcyIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsIm9uQ2hhbmdlU3RhcnQiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUVuZCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwic2Nyb2xsIiwiZnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9