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
  async onChange(url) {
    // 同步html里的url链接，使得在check时不会看到没有更新的content名字
    await this.page.hide();
    // 当点击时，当前页面会被隐藏
    const request = await fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');
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
/******/ 	__webpack_require__.h = () => ("671dc47a779a0c874e7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR0MsTUFBTSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUN0QyxNQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTs7RUFFQTtBQUNGO0FBQ0E7RUFDRVAsaUJBQWlCQSxDQUFBLEVBQUU7SUFDakJzQyxNQUFNLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNwQixRQUFRLENBQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3RDtFQUVBUixnQkFBZ0JBLENBQUEsRUFBRztJQUFDOztJQUVsQixNQUFNMEMsS0FBSyxHQUFHaEMsUUFBUSxDQUFDaUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBQzVDOztJQUVBeEQsa0RBQUksQ0FBQ3VELEtBQUssRUFBR0UsSUFBSSxJQUFLO01BQ3BCQSxJQUFJLENBQUNDLE9BQU8sR0FBSUMsS0FBSyxJQUFLO1FBQ3hCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE1BQU07VUFBRUM7UUFBSyxDQUFDLEdBQUdKLElBQUk7UUFFckIsSUFBSSxDQUFDckIsUUFBUSxDQUFDeUIsSUFBSSxDQUFDO01BQ3JCLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBQ0EsSUFBSXRELEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BKVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcblxuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4vcGFnZXMvRGV0YWlsL0RldGFpbFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZS9Ib21lXCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOWPrOWUpFxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG5cbiAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgIFxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG4gIC8vIOWIneWni+WMluexu1xuICBjcmVhdGVOYXZpZ2F0aW9uKCkge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50c1xuICAgKi9cbiAgb25QcmVsb2FkZWQoKXtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpey8vIOWQjOatpWh0bWzph4znmoR1cmzpk77mjqXvvIzkvb/lvpflnKhjaGVja+aXtuS4jeS8mueci+WIsOayoeacieabtOaWsOeahGNvbnRlbnTlkI3lrZdcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgLy8g5b2T54K55Ye75pe277yM5b2T5YmN6aG16Z2i5Lya6KKr6ZqQ6JePXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybClcbiAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgIGNvbnN0IGh0bWw9YXdhaXQgcmVxdWVzdC50ZXh0KClcbiAgICAgIGNvbnN0IGRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIFxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgICAvLyDov5nph4zlj4jlhpnkuIDpgY3mmK/lm6DkuLrlnKjliJvlu7rmlrDnmoTpobXpnaLkuYvlkI7vvIzmnInkupvpobXpnaLph4zpnaLov5jmnInmlrDnmoTpk77mjqXvvIzmiYDku6XlnKjmjonkuIDmrKHov5nkuKrmlrnms5VcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxuXG4gICAgLy8gaWYgKHJlcXVlc3Quc3RhdHVzKVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHtcbiAgICAvLyAgIHRoaXMuY2FudmFzLm9uUmVzaXplKCk7XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvb3BcbiAgICovXG5cbiAgdXBkYXRlKCl7IC8vIOWKqOeUu+aIlumhtemdouabtOaWsOeahOW+queOr1xuICAgXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NzFkYzQ3YTc3OWEwYzg3NGU3YlwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiTmF2aWdhdGlvbiIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9