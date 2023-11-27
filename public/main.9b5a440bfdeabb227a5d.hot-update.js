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
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.preloader.once('completed', this.onPreloaded);
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
    this.page.show();
  }
  async onPreloaded() {
    await this.page.hide();
    this.preloader.destroy();
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
/******/ 	__webpack_require__.h = () => ("b2d941f8d3c821b6c2b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YjVhNDQwYmZkZWFiYjIyN2E1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWE7QUFFSjtBQUNrQjtBQUNmO0FBQ047QUFFckMsTUFBTU0sR0FBRyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBRXpCO0VBRUFILGVBQWVBLENBQUEsRUFBRTtJQUNmLElBQUksQ0FBQ0ksU0FBUyxHQUFDLElBQUlYLDREQUFTLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNXLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztFQUNuRDtFQUVBTCxhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNNLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDOUQ7O0VBR0FULFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDVSxLQUFLLEdBQUc7TUFDWEMsS0FBSyxFQUFFLElBQUluQiwwREFBSyxDQUFDLENBQUM7TUFDbEJvQixXQUFXLEVBQUUsSUFBSW5CLHNFQUFXLENBQUMsQ0FBQztNQUM5Qm9CLE1BQU0sRUFBRSxJQUFJbkIsNERBQU0sQ0FBQyxDQUFDO01BQ3BCb0IsSUFBSSxFQUFFLElBQUluQix3REFBSSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLENBQUNvQixJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDckM7SUFDQSxJQUFJLENBQUNPLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDO0VBQ2xCO0VBRUEsTUFBTWIsV0FBV0EsQ0FBQSxFQUFFO0lBQ2pCLE1BQU0sSUFBSSxDQUFDVyxJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQ2lCLE9BQU8sQ0FBQyxDQUFDO0VBQzFCO0VBRUEsTUFBTUMsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFDO0lBQUM7SUFDbEIsTUFBTSxJQUFJLENBQUNOLElBQUksQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFDdEI7SUFDQSxNQUFNSSxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFDaEMsSUFBR0MsT0FBTyxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFDO01BQ3hCLE1BQU1DLElBQUksR0FBQyxNQUFNSCxPQUFPLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQy9CLE1BQU1DLEdBQUcsR0FBRXJCLFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFFeENELEdBQUcsQ0FBQ0UsU0FBUyxHQUFDSixJQUFJO01BRWxCLE1BQU9LLFVBQVUsR0FBRUgsR0FBRyxDQUFDcEIsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUVoRCxJQUFJLENBQUNDLFFBQVEsR0FBQ3NCLFVBQVUsQ0FBQ3JCLFlBQVksQ0FBQyxlQUFlLENBQUM7TUFDdEQsSUFBSSxDQUFDSixPQUFPLENBQUMwQixZQUFZLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQztNQUN4RCxJQUFJLENBQUNILE9BQU8sQ0FBQ3dCLFNBQVMsR0FBQ0MsVUFBVSxDQUFDRCxTQUFTO01BRTNDLElBQUksQ0FBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQ0YsUUFBUSxDQUFDO01BQ3JDO01BQ0EsSUFBSSxDQUFDTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ2xCLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBQztNQUNoQixJQUFJLENBQUNoQixnQkFBZ0IsQ0FBQyxDQUFDO01BQ3ZCO0lBQ0YsQ0FBQyxNQUNHO01BQ0YrQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDdEI7O0lBRUE7SUFDQUQsT0FBTyxDQUFDQyxHQUFHLENBQUNYLE9BQU8sQ0FBQztFQUN0QjtFQUVBckIsZ0JBQWdCQSxDQUFBLEVBQUc7SUFBQzs7SUFFbEIsTUFBTWlDLEtBQUssR0FBRzVCLFFBQVEsQ0FBQzZCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUM1Qzs7SUFFQTdDLGtEQUFJLENBQUM0QyxLQUFLLEVBQUdFLElBQUksSUFBSztNQUNwQkEsSUFBSSxDQUFDQyxPQUFPLEdBQUlDLEtBQUssSUFBSztRQUN4QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUV0QixNQUFNO1VBQUVDO1FBQUssQ0FBQyxHQUFHSixJQUFJO1FBRXJCLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ29CLElBQUksQ0FBQztNQUNyQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUNBLElBQUk1QyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqR1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5cbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLHRoaXMub25QcmVsb2FkZWQpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvblByZWxvYWRlZCgpe1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcbiAgICAvLyDlvZPngrnlh7vml7bvvIzlvZPliY3pobXpnaLkvJrooqvpmpDol49cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmKHJlcXVlc3Quc3RhdHVzID09PSAyMDApe1xuICAgICAgY29uc3QgaHRtbD1hd2FpdCByZXF1ZXN0LnRleHQoKVxuICAgICAgY29uc3QgZGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICBkaXYuaW5uZXJIVE1MPWh0bWxcblxuICAgICAgY29uc3QgIGRpdkNvbnRlbnQgPWRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAgIHRoaXMudGVtcGxhdGU9ZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsdGhpcy50ZW1wbGF0ZSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUw9ZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgICAgLy8g6L+Z5LiqdGVtcGxhdGXmmK/mlrDnmoTpobXpnaLnmoR0ZW1wbGF0ZVxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMmQ5NDFmOGQzYzgyMWI2YzJiNlwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiUHJlbG9hZGVyIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsIkhvbWUiLCJBcHAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJwcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJoaWRlIiwiZGVzdHJveSIsIm9uQ2hhbmdlIiwidXJsIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==