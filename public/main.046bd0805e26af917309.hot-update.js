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
  onPreloaded() {
    console.log('Preloaded!');
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
/******/ 	__webpack_require__.h = () => ("5e199a4027c021992403")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNDZiZDA4MDVlMjZhZjkxNzMwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWE7QUFFSjtBQUNrQjtBQUNmO0FBQ047QUFFckMsTUFBTU0sR0FBRyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBRXpCO0VBRUFILGVBQWVBLENBQUEsRUFBRTtJQUNmLElBQUksQ0FBQ0ksU0FBUyxHQUFDLElBQUlYLDREQUFTLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNXLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztFQUNuRDtFQUVBTCxhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNNLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDOUQ7O0VBR0FULFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDVSxLQUFLLEdBQUc7TUFDWEMsS0FBSyxFQUFFLElBQUluQiwwREFBSyxDQUFDLENBQUM7TUFDbEJvQixXQUFXLEVBQUUsSUFBSW5CLHNFQUFXLENBQUMsQ0FBQztNQUM5Qm9CLE1BQU0sRUFBRSxJQUFJbkIsNERBQU0sQ0FBQyxDQUFDO01BQ3BCb0IsSUFBSSxFQUFFLElBQUluQix3REFBSSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxJQUFJLENBQUNvQixJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDckM7SUFDQSxJQUFJLENBQUNPLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDO0VBQ2xCO0VBRUFiLFdBQVdBLENBQUEsRUFBRTtJQUNYYyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDM0I7RUFFQSxNQUFNQyxRQUFRQSxDQUFDQyxHQUFHLEVBQUM7SUFBQztJQUNsQixNQUFNLElBQUksQ0FBQ04sSUFBSSxDQUFDTyxJQUFJLENBQUMsQ0FBQztJQUN0QjtJQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxLQUFLLENBQUNILEdBQUcsQ0FBQztJQUNoQyxJQUFHRSxPQUFPLENBQUNFLE1BQU0sS0FBSyxHQUFHLEVBQUM7TUFDeEIsTUFBTUMsSUFBSSxHQUFDLE1BQU1ILE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLENBQUM7TUFDL0IsTUFBTUMsR0FBRyxHQUFFdEIsUUFBUSxDQUFDdUIsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUV4Q0QsR0FBRyxDQUFDRSxTQUFTLEdBQUNKLElBQUk7TUFFbEIsTUFBT0ssVUFBVSxHQUFFSCxHQUFHLENBQUNyQixhQUFhLENBQUMsVUFBVSxDQUFDO01BRWhELElBQUksQ0FBQ0MsUUFBUSxHQUFDdUIsVUFBVSxDQUFDdEIsWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUN0RCxJQUFJLENBQUNKLE9BQU8sQ0FBQzJCLFlBQVksQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDeEIsUUFBUSxDQUFDO01BQ3hELElBQUksQ0FBQ0gsT0FBTyxDQUFDeUIsU0FBUyxHQUFDQyxVQUFVLENBQUNELFNBQVM7TUFFM0MsSUFBSSxDQUFDZixJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7TUFDckM7TUFDQSxJQUFJLENBQUNPLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7TUFDbEIsSUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDO01BQ2hCLElBQUksQ0FBQ2hCLGdCQUFnQixDQUFDLENBQUM7TUFDdkI7SUFDRixDQUFDLE1BQ0c7TUFDRmlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN0Qjs7SUFFQTtJQUNBRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDO0VBQ3RCO0VBRUF0QixnQkFBZ0JBLENBQUEsRUFBRztJQUFDOztJQUVsQixNQUFNZ0MsS0FBSyxHQUFHM0IsUUFBUSxDQUFDNEIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBQzVDOztJQUVBNUMsa0RBQUksQ0FBQzJDLEtBQUssRUFBR0UsSUFBSSxJQUFLO01BQ3BCQSxJQUFJLENBQUNDLE9BQU8sR0FBSUMsS0FBSyxJQUFLO1FBQ3hCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE1BQU07VUFBRUM7UUFBSyxDQUFDLEdBQUdKLElBQUk7UUFFckIsSUFBSSxDQUFDZixRQUFRLENBQUNtQixJQUFJLENBQUM7TUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJM0MsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDaEdUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcblxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvL0RFUzogc2VsZWN0aW5nIHRoZSBjb250ZW50IGNsYXNzXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTsgLy9ERVM6IGdldHRpbmcgdGhlIGRhdGFzZXQtdGVtcGxhdGVcbiAgfVxuXG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgb25QcmVsb2FkZWQoKXtcbiAgICBjb25zb2xlLmxvZygnUHJlbG9hZGVkIScpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpey8vIOWQjOatpWh0bWzph4znmoR1cmzpk77mjqXvvIzkvb/lvpflnKhjaGVja+aXtuS4jeS8mueci+WIsOayoeacieabtOaWsOeahGNvbnRlbnTlkI3lrZdcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgLy8g5b2T54K55Ye75pe277yM5b2T5YmN6aG16Z2i5Lya6KKr6ZqQ6JePXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybClcbiAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgIGNvbnN0IGh0bWw9YXdhaXQgcmVxdWVzdC50ZXh0KClcbiAgICAgIGNvbnN0IGRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICAgIC8vIOi/memHjOWPiOWGmeS4gOmBjeaYr+WboOS4uuWcqOWIm+W7uuaWsOeahOmhtemdouS5i+WQju+8jOacieS6m+mhtemdoumHjOmdoui/mOacieaWsOeahOmTvuaOpe+8jOaJgOS7peWcqOaOieS4gOasoei/meS4quaWueazlVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yJylcbiAgICB9XG5cbiAgICAvLyBpZiAocmVxdWVzdC5zdGF0dXMpXG4gICAgY29uc29sZS5sb2cocmVxdWVzdClcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWUxOTlhNDAyN2MwMjE5OTI0MDNcIikiXSwibmFtZXMiOlsiZWFjaCIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==