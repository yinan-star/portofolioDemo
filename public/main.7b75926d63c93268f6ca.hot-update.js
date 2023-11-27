"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navigation */ "./app/components/Navigation.js");
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");







class App {
  constructor() {
    // 召唤
    this.createContent();
    this.createNavigation();
    this.createPreloader();
    this.createPages();
    this.addLinkListeners();
    this.addEventListeners();
    this.onResize();
    this.update();
  }
  // 初始化类
  createNavigation() {
    this.navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"]({
      template: this.template
    });
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }
  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_3__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_4__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_5__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_6__["default"]()
    };
    this.page = this.pages[this.template];
    // 你在哪个页面就渲染了哪个页面，data0tempalte它使得你可以在 HTML 元素中存储数据，然后通过 JavaScript 来读取和使用这些数据，
    this.page.create();
  }

  /**
   * Events
   */
  onPreloaded() {
    this.preloader.destroy();
    this.onResize();
    this.page.show();
  }
  async onChange(url) {
    // 同步html里的url链接，使得在check时不会看到没有更新的content名字
    await this.page.hide();
    // 当点击时，当前页面会被隐藏
    const request = await fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      // window.history.pushState({},'',url)
      // // 不知道在干嘛

      div.innerHTML = html;
      const divContent = div.querySelector('.content');
      this.template = divContent.getAttribute('data-template');
      this.navigation.onChange(this.template);
      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;
      this.page = this.pages[this.template];
      // 这个template是新的页面的template

      this.page.create();
      this.onResize();
      this.page.show();
      this.addLinkListeners();
      // 这里又写一遍是因为在创建新的页面之后，有些页面里面还有新的链接，所以在掉一次这个方法
    } else {
      console.error(`response status: ${request.status}`);
    }
  }
  onResize() {
    // if (this.canvas && this.canvas.onResize) {
    //   this.canvas.onResize();
    // }

    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  /**
   * Loop
   */

  update() {
    // 动画或页面更新的循环

    if (this.page && this.page.update) {
      this.page.update();
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners() {
    // window.addEventListener('popstate', () => this.onPopState())
    // window.addEventListener('mousewheel',this.onWheel.bind(this))

    // window.addEventListener('mousedown', this.onTouchDown.bind(this));
    // window.addEventListener('mousemove', this.onTouchMove.bind(this));
    // window.addEventListener('mouseup', this.onTouchUp.bind(this));

    // window.addEventListener('touchstart', this.onTouchDown.bind(this));
    // window.addEventListener('touchmove', this.onTouchMove.bind(this));
    // window.addEventListener('touchend', this.onTouchUp.bind(this));

    window.addEventListener('resize', this.onResize.bind(this));
  }
  addLinkListeners() {
    // 链接跳转处理

    const links = document.querySelectorAll('a');
    // 选择所有链接，links是数组

    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(links, link => {
      link.onclick = event => {
        event.preventDefault();
        const {
          href
        } = link;
        this.onChange(href);
      };
    });
  }
}
new App();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dbdc3c87ce046e449367")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFDcEI7SUFFQSxJQUFJLENBQUNtQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUMsSUFBSSxDQUFDckMsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7O0VBRUE7QUFDRjtBQUNBO0VBQ0VSLGlCQUFpQkEsQ0FBQSxFQUFFO0lBQ2pCO0lBQ0E7O0lBRUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQXNDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3ZDLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzdEO0VBRUFULGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUM7O0lBRWxCLE1BQU0wQyxLQUFLLEdBQUcvQixRQUFRLENBQUNnQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUM7O0lBRUF4RCxrREFBSSxDQUFDdUQsS0FBSyxFQUFHRSxJQUFJLElBQUs7TUFDcEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFJQyxLQUFLLElBQUs7UUFDeEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFFdEIsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUVyQixJQUFJLENBQUNyQixRQUFRLENBQUN5QixJQUFJLENBQUM7TUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJdEQsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDbEtUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcblxuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuICAvLyDliJ3lp4vljJbnsbtcbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7IHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKXsvLyDlkIzmraVodG1s6YeM55qEdXJs6ZO+5o6l77yM5L2/5b6X5ZyoY2hlY2vml7bkuI3kvJrnnIvliLDmsqHmnInmm7TmlrDnmoRjb250ZW505ZCN5a2XXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuICAgIC8vIOW9k+eCueWHu+aXtu+8jOW9k+WJjemhtemdouS8muiiq+makOiXj1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwnJyx1cmwpXG4gICAgICAvLyAvLyDkuI3nn6XpgZPlnKjlubLlmJtcblxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIFxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgICAvLyDov5nph4zlj4jlhpnkuIDpgY3mmK/lm6DkuLrlnKjliJvlu7rmlrDnmoTpobXpnaLkuYvlkI7vvIzmnInkupvpobXpnaLph4zpnaLov5jmnInmlrDnmoTpk77mjqXvvIzmiYDku6XlnKjmjonkuIDmrKHov5nkuKrmlrnms5VcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHJlc3BvbnNlIHN0YXR1czogJHtyZXF1ZXN0LnN0YXR1c31gKTtcbiAgICB9XG5cbiBcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIC8vIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkge1xuICAgIC8vICAgdGhpcy5jYW52YXMub25SZXNpemUoKTtcbiAgICAvLyB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKCk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogTG9vcFxuICAgKi9cblxuICB1cGRhdGUoKXsgLy8g5Yqo55S75oiW6aG16Z2i5pu05paw55qE5b6q546vXG4gICBcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lcnNcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCl7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gdGhpcy5vblBvcFN0YXRlKCkpXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSk7XG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcblxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYmRjM2M4N2NlMDQ2ZTQ0OTM2N1wiKSJdLCJuYW1lcyI6WyJlYWNoIiwiTmF2aWdhdGlvbiIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25SZXNpemUiLCJ1cGRhdGUiLCJuYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJjb2xsZWN0aW9ucyIsImRldGFpbCIsImhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImVycm9yIiwiZnJhbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=