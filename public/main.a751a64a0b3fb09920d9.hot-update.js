/*! For license information please see main.a751a64a0b3fb09920d9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,s)=>{s.r(t);var n=s("./node_modules/lodash/each.js"),a=s.n(n),i=s("./node_modules/normalize-wheel/index.js"),o=s.n(i),h=s("./app/components/Canvas/index.js"),d=s("./app/components/Navigation.js"),c=s("./app/components/Preloader.js"),p=s("./app/pages/About/About.js"),r=s("./app/pages/Collections/Collections.js"),l=s("./app/pages/Detail/Detail.js"),u=s("./app/pages/Home/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addLinkListeners(),this.addEventListeners(),this.onResize(),this.update()}createNavigation(){this.navigation=new d.default({template:this.template})}createPreloader(){this.preloader=new c.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new h.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new p.default,collections:new r.default,detail:new l.default,home:new u.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}async onChange(e){this.canvas.onChangeStart(this.template,e),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const s=await t.text(),n=document.createElement("div");push&&window.history.pushState({},"",e),n.innerHTML=s;const a=n.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.log("Error");console.log(t)}onResize(){window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()})),this.page&&this.page.onResize&&this.page.onResize()}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=o()(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");a()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}}}},(function(e){e.h=()=>"694e835d838a33140051"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUtDLFFBQVdiLElBQ2RBLEVBQU1jLGlCQUVOLE1BQU0sS0FBRUMsR0FBU0gsRUFFakJ4RSxLQUFLb0MsU0FBU3VDLEVBQUssQ0FDcEIsR0FFTCxrQkNoT0ZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlhbPkuY7mlbTkuKrnvZHpobXnmoTlsZXnpLrkv6Hmga9cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcblxuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4vcGFnZXMvRGV0YWlsL0RldGFpbFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIFxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcbiBcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG4gIC8vIOWIneWni+WMluexu1xuICBjcmVhdGVOYXZpZ2F0aW9uKCkge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKHtcbiAgICAgIGNhbnZhcyA6IHRoaXMuY2FudmFzXG4gICAgfSlcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpe1xuICAgIHRoaXMuY2FudmFzID1uZXcgQ2FudmFzKHtcbiAgICAgIHRlbXBsYXRlIDp0aGlzLnRlbXBsYXRlXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50c1xuICAgKi9cbiAgb25QcmVsb2FkZWQoKXtcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuY2FudmFzLm9uUHJlbG9hZGVkKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgLy8g6ZSA5q+BLemHjeaWsOWumuS5ieWwuuWvuC3pobXpnaLlsZXnpLpcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIHRoaXMuY2FudmFzLm9uQ2hhbmdlU3RhcnQodGhpcy50ZW1wbGF0ZSwgdXJsKVxuICAgIFxuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcbiAgICAvLyDlvZPngrnlh7vml7bvvIzlvZPliY3pobXpnaLkvJrooqvpmpDol49cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcbiAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgIGNvbnN0IGh0bWw9YXdhaXQgcmVxdWVzdC50ZXh0KClcbiAgICAgIGNvbnN0IGRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgaWYocHVzaCl7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgdXJsKVxuICAgICAgICAvLyDlsLHmmK/or7TkvaDngrnlh7vlk6rkuKrpobXpnaIsdXJs55qE5ZCO57yA5bCx5piv5ZOq5Liq6aG16Z2i55qEL2NvbGxlY3Rpc29ucyBvciAvYWJvdXQgb3IgL3NsYXNoIGhvbWVcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuIFxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMuY2FudmFzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIFxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgICAvLyDov5nph4zlj4jlhpnkuIDpgY3mmK/lm6DkuLrlnKjliJvlu7rmlrDnmoTpobXpnaLkuYvlkI7vvIzmnInkupvpobXpnaLph4zpnaLov5jmnInmlrDnmoTpk77mjqXvvIzmiYDku6XlnKjmjonkuIDmrKHov5nkuKrmlrnms5VcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxuXG4gICAgLy8gaWYgKHJlcXVlc3Quc3RhdHVzKVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT57XG4gICAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMub25SZXNpemUoKTtcbiAgICAgIH1cbiAgICAgIC8vIOWkhOeQhueql+WPo+iwg+aVtOWkp+Wwj+S6i+S7tueahOWHveaVsOOAguW9k+a1j+iniOWZqOeql+WPo+Wkp+Wwj+aUueWPmOaXtu+8iOavlOWmgueUqOaIt+iwg+aVtOeql+WPo+Wkp+Wwj+aIluiAheiuvuWkh+WPkeeUn+aXi+i9rO+8ie+8jOS8muinpuWPkSBvblJlc2l6ZSDlh73mlbDjgIJcbiAgICB9KVxuICAgIFxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KXtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGV2ZW50KTtcbiAgICB9XG5cblxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpe1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KXtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaFVwKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoVXAoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpe1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRXaGVlbCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25XaGVlbCkge1xuICAgICAgdGhpcy5jYW52YXMub25XaGVlbChub3JtYWxpemVkV2hlZWwpO1xuICAgICAgLy8g6LCD55So55S75biD55qEb25XaGVlbOeahOaWueazle+8jOW5tuWwhuagh+WHhuWMluWkhOeQhuWQjueahOa7muWKqOWAvOS9nOS4uuWPguaVsOS8oOi/m+WOu1xuICAgIH1cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpIHtcbiAgICAgIHRoaXMucGFnZS5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbCk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogTG9vcFxuICAgKi9cblxuICB1cGRhdGUoKXsgLy8g5Yqo55S75oiW6aG16Z2i5pu05paw55qE5b6q546vXG4gICBcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKTtcbiAgICB9XG4gICAgLy8g5YWI5riy5p+T6aG16Z2i77yM5Zug5Li65pyJY29ycmVjdCBZIHBvc2l0aW9u77yM5omA5Lul5ZCO6Z2i55qEY2FudmFz55qEWeS5n+S8mui3n+edgOabtOaWsFxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jYW52YXMudXBkYXRlKHRoaXMucGFnZS5zY3JvbGwpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcbiAgICAvLyDnlLXohJHnq6/nmoRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG4gICAgLy8g56e75Yqo56uv55qEXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkgey8vIOmTvuaOpei3s+i9rOWkhOeQhlxuXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcbiAgICAvLyDpgInmi6nmiYDmnInpk77mjqXvvIxsaW5rc+aYr+aVsOe7hFxuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY5NGU4MzVkODM4YTMzMTQwMDUxXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvblJlc2l6ZSIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJjYW52YXMiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJvbkNoYW5nZVN0YXJ0IiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInB1c2giLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIm9uQ2hhbmdlRW5kIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJvblRvdWNoRG93biIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZFdoZWVsIiwiTm9ybWFsaXplV2hlZWwiLCJzY3JvbGwiLCJmcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=