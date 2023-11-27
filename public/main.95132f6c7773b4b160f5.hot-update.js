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
/* harmony import */ var components_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Canvas */ "./app/components/Canvas/index.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation */ "./app/components/Navigation.js");
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");








class App {
  constructor() {
    // 召唤
    this.createContent();
    this.createNavigation();
    this.createPreloader();
    this.createCanvas();
    this.createPages();
    this.addLinkListeners();
    this.addEventListeners();
    this.update();
  }
  // 初始化类
  createNavigation() {
    this.navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"]({
      template: this.template
    });
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }
  createCanvas() {
    this.canvas = new components_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new _pages_About_About__WEBPACK_IMPORTED_MODULE_4__["default"](),
      collections: new _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_5__["default"](),
      detail: new _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_6__["default"](),
      home: new _pages_Home_Home__WEBPACK_IMPORTED_MODULE_7__["default"]()
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
    // this.page.show()
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
      // this.page.show()
      this.addLinkListeners();
      // 这里又写一遍是因为在创建新的页面之后，有些页面里面还有新的链接，所以在掉一次这个方法
    } else {
      console.log('Error');
    }

    // if (request.status)
    console.log(request);
  }
  onResize() {
    if (this.canvas && this.canvas.onResize) {
      this.canvas.onResize();
    }
    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  /**
   * Loop
   */

  update() {
    // 动画或页面更新的循环

    if (this.canvas && this.canvas.update) {
      this.canvas.update();
    }
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
/******/ 	__webpack_require__.h = () => ("b2459ea30cd363292e03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NTEzMmY2Yzc3NzNiNGIxNjBmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFUTtBQUNVO0FBQ0w7QUFFSjtBQUNrQjtBQUNmO0FBQ047QUFFckMsTUFBTVEsR0FBRyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBRWY7RUFDQTtFQUNBTixnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNPLFVBQVUsR0FBRyxJQUFJaEIsOERBQVUsQ0FBQztNQUFFaUIsUUFBUSxFQUFFLElBQUksQ0FBQ0E7SUFBUyxDQUFDLENBQUM7RUFDL0Q7RUFFQVAsZUFBZUEsQ0FBQSxFQUFFO0lBQ2YsSUFBSSxDQUFDUSxTQUFTLEdBQUMsSUFBSWpCLDREQUFTLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNpQixTQUFTLENBQUNDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM5RDtFQUVBVixZQUFZQSxDQUFBLEVBQUU7SUFDWixJQUFJLENBQUNXLE1BQU0sR0FBRSxJQUFJdkIseURBQU0sQ0FBQyxDQUFDO0VBQzNCO0VBRUFTLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ2UsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENB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QUVSLElBQUksSUFBSSxDQUFDTyxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUNQLE1BQU0sRUFBRTtNQUNyQyxJQUFJLENBQUNPLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDLENBQUM7SUFDdEI7SUFFQSxJQUFJLElBQUksQ0FBQ2lCLElBQUksSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ2pCLE1BQU0sRUFBRTtNQUNqQyxJQUFJLENBQUNpQixJQUFJLENBQUNqQixNQUFNLENBQUMsQ0FBQztJQUNwQjtJQUVBLElBQUksQ0FBQ29DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUN0QyxNQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTs7RUFFQTtBQUNGO0FBQ0E7RUFDRVAsaUJBQWlCQSxDQUFBLEVBQUU7SUFDakJzQyxNQUFNLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNuQixRQUFRLENBQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3RDtFQUVBUixnQkFBZ0JBLENBQUEsRUFBRztJQUFDOztJQUVsQixNQUFNMEMsS0FBSyxHQUFHL0IsUUFBUSxDQUFDZ0MsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBQzVDOztJQUVBMUQsa0RBQUksQ0FBQ3lELEtBQUssRUFBR0UsSUFBSSxJQUFLO01BQ3BCQSxJQUFJLENBQUNDLE9BQU8sR0FBSUMsS0FBSyxJQUFLO1FBQ3hCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLE1BQU07VUFBRUM7UUFBSyxDQUFDLEdBQUdKLElBQUk7UUFFckIsSUFBSSxDQUFDckIsUUFBUSxDQUFDeUIsSUFBSSxDQUFDO01BQ3JCLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBQ0EsSUFBSXZELEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztVQzdKVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcyc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcblxuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuICAvLyDliJ3lp4vljJbnsbtcbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7IHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKXtcbiAgICB0aGlzLmNhbnZhcyA9bmV3IENhbnZhcygpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgLy8gdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKXsvLyDlkIzmraVodG1s6YeM55qEdXJs6ZO+5o6l77yM5L2/5b6X5ZyoY2hlY2vml7bkuI3kvJrnnIvliLDmsqHmnInmm7TmlrDnmoRjb250ZW505ZCN5a2XXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuICAgIC8vIOW9k+eCueWHu+aXtu+8jOW9k+WJjemhtemdouS8muiiq+makOiXj1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGRpdi5pbm5lckhUTUw9aHRtbFxuXG4gICAgICBjb25zdCAgZGl2Q29udGVudCA9ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZT1kaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyx0aGlzLnRlbXBsYXRlKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTD1kaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICAvLyDov5nkuKp0ZW1wbGF0ZeaYr+aWsOeahOmhtemdoueahHRlbXBsYXRlXG4gICAgICBcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICAvLyB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb29wXG4gICAqL1xuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSgpO1xuICAgIH1cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjI0NTllYTMwY2QzNjMyOTJlMDNcIikiXSwibmFtZXMiOlsiZWFjaCIsIkNhbnZhcyIsIk5hdmlnYXRpb24iLCJQcmVsb2FkZXIiLCJBYm91dCIsIkNvbGxlY3Rpb25zIiwiRGV0YWlsIiwiSG9tZSIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9