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
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");





class App {
  constructor() {
    // 召唤
    this.createContent();
    this.createPages();
    this.addLinkListeners();
  }
  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_1__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_2__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_3__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"]()
    };
    this.page = this.pages[this.template];
    // 你在哪个页面就渲染了哪个页面，data0tempalte它使得你可以在 HTML 元素中存储数据，然后通过 JavaScript 来读取和使用这些数据，
    this.page.create();
    this.page.show();
  }
  async onChange(url) {
    // 同步html里的url链接，使得在check时不会看到没有更新的content名字
    const request = await fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');
      div.innerHTML = html;
      const divContent = div.querySelector('.content');
      this.content.setAttribute('data-template', divContent.getAttribute('data-template'));
      this.content.innerHTML = divContent.innerHTML;
    } else {
      console.log('Error');
    }

    // if (request.status)
    console.log(request);
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
/******/ 	__webpack_require__.h = () => ("281c2a2cadbed3bcc075")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpey8vIOWQjOatpWh0bWzph4znmoR1cmzpk77mjqXvvIzkvb/lvpflnKhjaGVja+aXtuS4jeS8mueci+WIsOayoeacieabtOaWsOeahGNvbnRlbnTlkI3lrZdcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmKHJlcXVlc3Quc3RhdHVzID09PSAyMDApe1xuICAgICAgY29uc3QgaHRtbD1hd2FpdCByZXF1ZXN0LnRleHQoKVxuICAgICAgY29uc3QgZGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICBkaXYuaW5uZXJIVE1MPWh0bWxcblxuICAgICAgY29uc3QgIGRpdkNvbnRlbnQgPWRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyODFjMmEyY2FkYmVkM2JjYzA3NVwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsIkhvbWUiLCJBcHAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=