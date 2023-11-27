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
      this.content.setAttribute('data-template', this.template);
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
/******/ 	__webpack_require__.h = () => ("d6c3a29d43f670462f06")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcIi4vcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcIi4vcGFnZXMvRGV0YWlsL0RldGFpbFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZS9Ib21lXCI7XG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG5cbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuXG4gIGNyZWF0ZVBhZ2VzKCkge1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgLy8g5L2g5Zyo5ZOq5Liq6aG16Z2i5bCx5riy5p+T5LqG5ZOq5Liq6aG16Z2i77yMZGF0YTB0ZW1wYWx0ZeWug+S9v+W+l+S9oOWPr+S7peWcqCBIVE1MIOWFg+e0oOS4reWtmOWCqOaVsOaNru+8jOeEtuWQjumAmui/hyBKYXZhU2NyaXB0IOadpeivu+WPluWSjOS9v+eUqOi/meS6m+aVsOaNru+8jFxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGRpdi5pbm5lckhUTUw9aHRtbFxuXG4gICAgICBjb25zdCAgZGl2Q29udGVudCA9ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsdGhpcy50ZW1wbGF0ZSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUw9ZGl2Q29udGVudC5pbm5lckhUTUxcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxuXG4gICAgLy8gaWYgKHJlcXVlc3Quc3RhdHVzKVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpXG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkgey8vIOmTvuaOpei3s+i9rOWkhOeQhlxuXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcbiAgICAvLyDpgInmi6nmiYDmnInpk77mjqXvvIxsaW5rc+aYr+aVsOe7hFxuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ2YzNhMjlkNDNmNjcwNDYyZjA2XCIpIl0sIm5hbWVzIjpbImVhY2giLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwiSG9tZSIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJjb2xsZWN0aW9ucyIsImRldGFpbCIsImhvbWUiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsIm9uQ2hhbmdlIiwidXJsIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==