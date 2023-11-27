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
    const request = await window.fetch(url);

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
        // 阻止链接默认行为，打印下面的对象

        const {
          href
        } = link;
        console.log(href);
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
/******/ 	__webpack_require__.h = () => ("2efafe7d05f348dcc5a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYzhjMWU2NTkyNTMzMDdhZmNhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFUztBQUNrQjtBQUNmO0FBQ047QUFDckMsTUFBTUssR0FBRyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRWxCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUV6QjtFQUVBRixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNHLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDOUQ7O0VBR0FOLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDTyxLQUFLLEdBQUc7TUFDWEMsS0FBSyxFQUFFLElBQUlmLDBEQUFLLENBQUMsQ0FBQztNQUNsQmdCLFdBQVcsRUFBRSxJQUFJZixzRUFBVyxDQUFDLENBQUM7TUFDOUJnQixNQUFNLEVBQUUsSUFBSWYsNERBQU0sQ0FBQyxDQUFDO01BQ3BCZ0IsSUFBSSxFQUFFLElBQUlmLHdEQUFJLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksQ0FBQ2dCLElBQUksR0FBRyxJQUFJLENBQUNMLEtBQUssQ0FBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQztJQUNyQztJQUNBLElBQUksQ0FBQ08sSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUM7RUFDbEI7RUFFQSxNQUFNQyxRQUFRQSxDQUFDQyxHQUFHLEVBQUM7SUFDakIsTUFBTUMsT0FBTyxHQUFFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSCxHQUFHLENBQUM7O0lBRXRDO0lBQ0FJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUM7RUFDdEI7RUFFQWhCLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUM7O0lBRWxCLE1BQU1xQixLQUFLLEdBQUduQixRQUFRLENBQUNvQixnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUM7O0lBRUEvQixrREFBSSxDQUFDOEIsS0FBSyxFQUFFRSxJQUFJLElBQUk7TUFDbEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxLQUFLLElBQUk7UUFDdEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEI7O1FBRUEsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUVyQkosT0FBTyxDQUFDQyxHQUFHLENBQUNPLElBQUksQ0FBQztNQUNuQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUNBLElBQUkvQixHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUM1RFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuXG4gIGNyZWF0ZVBhZ2VzKCkge1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgLy8g5L2g5Zyo5ZOq5Liq6aG16Z2i5bCx5riy5p+T5LqG5ZOq5Liq6aG16Z2i77yMZGF0YTB0ZW1wYWx0ZeWug+S9v+W+l+S9oOWPr+S7peWcqCBIVE1MIOWFg+e0oOS4reWtmOWCqOaVsOaNru+8jOeEtuWQjumAmui/hyBKYXZhU2NyaXB0IOadpeivu+WPluWSjOS9v+eUqOi/meS6m+aVsOaNru+8jFxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7XG4gICAgY29uc3QgcmVxdWVzdCA9YXdhaXQgd2luZG93LmZldGNoKHVybClcblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIC8vIOmYu+atoumTvuaOpem7mOiupOihjOS4uu+8jOaJk+WNsOS4i+mdoueahOWvueixoVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmVmYWZlN2QwNWYzNDhkY2M1YTFcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=