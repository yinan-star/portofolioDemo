/*! For license information please see main.fc4a874e0abb566cf4a3.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":()=>{},"./app/index.js":(e,t,a)=>{"use strict";a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),i=a("./app/components/Canvas/index.js"),o=a.n(i),h=a("./app/components/Navigation.js"),p=a("./app/components/Preloader.js"),d=a("./app/pages/About/About.js"),c=a("./app/pages/Collections/Collections.js"),r=a("./app/pages/Detail/Detail.js"),l=a("./app/pages/Home/Home.js");new class{constructor(){this.createContent(),this.createNavigation(),this.createPreloader(),this.createCanvas(),this.createPages(),this.addLinkListeners(),this.addEventListeners(),this.update()}createNavigation(){this.navigation=new h.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new(o())}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new d.default,collections:new c.default,detail:new r.default,home:new l.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize()}async onChange(e){await this.page.hide();const t=await fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.addLinkListeners()}else console.log("Error");console.log(t)}onResize(){this.canvas&&this.canvas.onResize&&this.canvas.onResize(),this.page&&this.page.onResize&&this.page.onResize()}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");n()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}}}},(function(e){e.h=()=>"d7d596aa3da80a8785f6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcyc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcblxuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuICAvLyDliJ3lp4vljJbnsbtcbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7IHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKXtcbiAgICB0aGlzLmNhbnZhcyA9bmV3IENhbnZhcygpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgLy8gdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKXsvLyDlkIzmraVodG1s6YeM55qEdXJs6ZO+5o6l77yM5L2/5b6X5ZyoY2hlY2vml7bkuI3kvJrnnIvliLDmsqHmnInmm7TmlrDnmoRjb250ZW505ZCN5a2XXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuICAgIC8vIOW9k+eCueWHu+aXtu+8jOW9k+WJjemhtemdouS8muiiq+makOiXj1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGRpdi5pbm5lckhUTUw9aHRtbFxuXG4gICAgICBjb25zdCAgZGl2Q29udGVudCA9ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZT1kaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyx0aGlzLnRlbXBsYXRlKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTD1kaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICAvLyDov5nkuKp0ZW1wbGF0ZeaYr+aWsOeahOmhtemdoueahHRlbXBsYXRlXG4gICAgICBcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICAvLyB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb29wXG4gICAqL1xuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSgpO1xuICAgIH1cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDdkNTk2YWEzZGE4MGE4Nzg1ZjZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY2FudmFzIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9