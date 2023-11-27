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
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");






class App {
  constructor() {
    // 召唤
    this.createPreloader();
    this.createContent();
    this.createPages();
    this.addLinkListeners();
    this.addEventListeners();
    this.update();
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }
  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_2__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_3__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_4__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"]()
    };
    this.page = this.pages[this.template];
    // 你在哪个页面就渲染了哪个页面，data0tempalte它使得你可以在 HTML 元素中存储数据，然后通过 JavaScript 来读取和使用这些数据，
    this.page.create();
  }
  onPreloaded() {
    this.preloader.destroy();
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
      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;
      this.page = this.pages[this.template];
      // 这个template是新的页面的template
      this.page.create();
      this.page.show();
      this.addLinkListeners();
      // 这里又写一遍是因为在创建新的页面之后，有些页面里面还有新的链接，所以在掉一次这个方法
    } else {
      console.log('Error');
    }

    // if (request.status)
    console.log(request);
  }
  update() {
    // 动画或页面更新的循环

    if (this.page && this.page.update) {
      this.page.update();
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }
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
/******/ 	__webpack_require__.h = () => ("5649195478f8c3e1a598")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUM7TUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJcEQsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDaEhUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuXG4gIGNyZWF0ZVBhZ2VzKCkge1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgLy8g5L2g5Zyo5ZOq5Liq6aG16Z2i5bCx5riy5p+T5LqG5ZOq5Liq6aG16Z2i77yMZGF0YTB0ZW1wYWx0ZeWug+S9v+W+l+S9oOWPr+S7peWcqCBIVE1MIOWFg+e0oOS4reWtmOWCqOaVsOaNru+8jOeEtuWQjumAmui/hyBKYXZhU2NyaXB0IOadpeivu+WPluWSjOS9v+eUqOi/meS6m+aVsOaNru+8jFxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICB9XG5cbiAgb25QcmVsb2FkZWQoKXtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpey8vIOWQjOatpWh0bWzph4znmoR1cmzpk77mjqXvvIzkvb/lvpflnKhjaGVja+aXtuS4jeS8mueci+WIsOayoeacieabtOaWsOeahGNvbnRlbnTlkI3lrZdcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgLy8g5b2T54K55Ye75pe277yM5b2T5YmN6aG16Z2i5Lya6KKr6ZqQ6JePXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybClcbiAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgIGNvbnN0IGh0bWw9YXdhaXQgcmVxdWVzdC50ZXh0KClcbiAgICAgIGNvbnN0IGRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICAgIC8vIOi/memHjOWPiOWGmeS4gOmBjeaYr+WboOS4uuWcqOWIm+W7uuaWsOeahOmhtemdouS5i+WQju+8jOacieS6m+mhtemdoumHjOmdoui/mOacieaWsOeahOmTvuaOpe+8jOaJgOS7peWcqOaOieS4gOasoei/meS4quaWueazlVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yJylcbiAgICB9XG5cbiAgICAvLyBpZiAocmVxdWVzdC5zdGF0dXMpXG4gICAgY29uc29sZS5sb2cocmVxdWVzdClcbiAgfVxuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTY0OTE5NTQ3OGY4YzNlMWE1OThcIikiXSwibmFtZXMiOlsiZWFjaCIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwic2hvdyIsIm9uQ2hhbmdlIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZnJhbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==