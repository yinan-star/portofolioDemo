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
  onPopState() {
    this.onChange(window.location.pathname);
  }
  async onChange(url) {
    // 同步html里的url链接，使得在check时不会看到没有更新的content名字
    await this.page.hide();
    // 当点击时，当前页面会被隐藏
    const request = await fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');
      window.history.pushState({}, '', url);
      // 不知道在干嘛

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
      console.log('Error');
    }

    // if (request.status)
    console.log(request);
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
    window.addEventListener('popstate', this.onPopState.bind(this));
    window.addEventListener('mousewheel', this.onWheel.bind(this));
    window.addEventListener('mousedown', this.onTouchDown.bind(this));
    window.addEventListener('mousemove', this.onTouchMove.bind(this));
    window.addEventListener('mouseup', this.onTouchUp.bind(this));
    window.addEventListener('touchstart', this.onTouchDown.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this));
    window.addEventListener('touchend', this.onTouchUp.bind(this));
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
/******/ 	__webpack_require__.h = () => ("621fa990b276d516db1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakVpQixNQUFNLENBQUNxQixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDSSxTQUFTLENBQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOURpQixNQUFNLENBQUNxQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDekIsUUFBUSxDQUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDN0Q7RUFFQVIsZ0JBQWdCQSxDQUFBLEVBQUc7SUFBQzs7SUFFbEIsTUFBTW1ELEtBQUssR0FBR3pDLFFBQVEsQ0FBQzBDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUM1Qzs7SUFFQWpFLGtEQUFJLENBQUNnRSxLQUFLLEVBQUdFLElBQUksSUFBSztNQUNwQkEsSUFBSSxDQUFDQyxPQUFPLEdBQUlDLEtBQUssSUFBSztRQUN4QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUV0QixNQUFNO1VBQUVDO1FBQUssQ0FBQyxHQUFHSixJQUFJO1FBRXJCLElBQUksQ0FBQzdCLFFBQVEsQ0FBQ2lDLElBQUksQ0FBQztNQUNyQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUNBLElBQUkvRCxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUN0S1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5cbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG4gICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICBcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuICAvLyDliJ3lp4vljJbnsbtcbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7IHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgb25Qb3BTdGF0ZSgpe1xuICAgIHRoaXMub25DaGFuZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKXsvLyDlkIzmraVodG1s6YeM55qEdXJs6ZO+5o6l77yM5L2/5b6X5ZyoY2hlY2vml7bkuI3kvJrnnIvliLDmsqHmnInmm7TmlrDnmoRjb250ZW505ZCN5a2XXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuICAgIC8vIOW9k+eCueWHu+aXtu+8jOW9k+WJjemhtemdouS8muiiq+makOiXj1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwnJyx1cmwpXG4gICAgICAvLyDkuI3nn6XpgZPlnKjlubLlmJtcblxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIFxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgICAvLyDov5nph4zlj4jlhpnkuIDpgY3mmK/lm6DkuLrlnKjliJvlu7rmlrDnmoTpobXpnaLkuYvlkI7vvIzmnInkupvpobXpnaLph4zpnaLov5jmnInmlrDnmoTpk77mjqXvvIzmiYDku6XlnKjmjonkuIDmrKHov5nkuKrmlrnms5VcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxuXG4gICAgLy8gaWYgKHJlcXVlc3Quc3RhdHVzKVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHtcbiAgICAvLyAgIHRoaXMuY2FudmFzLm9uUmVzaXplKCk7XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvb3BcbiAgICovXG5cbiAgdXBkYXRlKCl7IC8vIOWKqOeUu+aIlumhtemdouabtOaWsOeahOW+queOr1xuICAgXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MjFmYTk5MGIyNzZkNTE2ZGIxZFwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiTmF2aWdhdGlvbiIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uV2hlZWwiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=