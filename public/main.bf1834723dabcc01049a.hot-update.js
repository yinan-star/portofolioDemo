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
/******/ 	__webpack_require__.h = () => ("7b75926d63c93268f6ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQzBELEtBQUssRUFBR0UsSUFBSSxJQUFLO01BQ3BCQSxJQUFJLENBQUNDLE9BQU8sR0FBSUMsS0FBSyxJQUFLO1FBQ3hCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE1BQU07VUFBRUM7UUFBSyxDQUFDLEdBQUdKLElBQUk7UUFFckIsSUFBSSxDQUFDeEIsUUFBUSxDQUFDNEIsSUFBSSxDQUFDO01BQ3JCLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBQ0EsSUFBSXpELEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xLVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcblxuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4vcGFnZXMvRGV0YWlsL0RldGFpbFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZS9Ib21lXCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOWPrOWUpFxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG5cbiAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgIFxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIFxuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cbiAgLy8g5Yid5aeL5YyW57G7XG4gIGNyZWF0ZU5hdmlnYXRpb24oKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oeyB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSB9KTtcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpe1xuICAgIHRoaXMucHJlbG9hZGVyPW5ldyBQcmVsb2FkZXIoKVxuICAgIHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvL0RFUzogc2VsZWN0aW5nIHRoZSBjb250ZW50IGNsYXNzXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTsgLy9ERVM6IGdldHRpbmcgdGhlIGRhdGFzZXQtdGVtcGxhdGVcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzKCkge1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgLy8g5L2g5Zyo5ZOq5Liq6aG16Z2i5bCx5riy5p+T5LqG5ZOq5Liq6aG16Z2i77yMZGF0YTB0ZW1wYWx0ZeWug+S9v+W+l+S9oOWPr+S7peWcqCBIVE1MIOWFg+e0oOS4reWtmOWCqOaVsOaNru+8jOeEtuWQjumAmui/hyBKYXZhU2NyaXB0IOadpeivu+WPluWSjOS9v+eUqOi/meS6m+aVsOaNru+8jFxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuXG4gICAgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzXG4gICAqL1xuICBvblByZWxvYWRlZCgpe1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuICAgIHRoaXMub25SZXNpemUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcbiAgICAvLyDlvZPngrnlh7vml7bvvIzlvZPliY3pobXpnaLkvJrooqvpmpDol49cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmKHJlcXVlc3Quc3RhdHVzID09PSAyMDApe1xuICAgICAgY29uc3QgaHRtbD1hd2FpdCByZXF1ZXN0LnRleHQoKVxuICAgICAgY29uc3QgZGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAvLyB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sJycsdXJsKVxuICAgICAgLy8gLy8g5LiN55+l6YGT5Zyo5bmy5ZibXG5cbiAgICAgIGRpdi5pbm5lckhUTUw9aHRtbFxuXG4gICAgICBjb25zdCAgZGl2Q29udGVudCA9ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZT1kaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyx0aGlzLnRlbXBsYXRlKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTD1kaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICAvLyDov5nkuKp0ZW1wbGF0ZeaYr+aWsOeahOmhtemdoueahHRlbXBsYXRlXG4gICAgICBcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKGByZXNwb25zZSBzdGF0dXM6ICR7cmVxdWVzdC5zdGF0dXN9YCk7XG4gICAgfVxuXG4gXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHtcbiAgICAvLyAgIHRoaXMuY2FudmFzLm9uUmVzaXplKCk7XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvb3BcbiAgICovXG5cbiAgdXBkYXRlKCl7IC8vIOWKqOeUu+aIlumhtemdouabtOaWsOeahOW+queOr1xuICAgXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHRoaXMub25Qb3BTdGF0ZSgpKVxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJyx0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2I3NTkyNmQ2M2M5MzI2OGY2Y2FcIikiXSwibmFtZXMiOlsiZWFjaCIsIk5hdmlnYXRpb24iLCJQcmVsb2FkZXIiLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwiSG9tZSIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uUmVzaXplIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJlcnJvciIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==