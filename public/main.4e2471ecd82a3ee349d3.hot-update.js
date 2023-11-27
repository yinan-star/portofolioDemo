self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Navigation.js":
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navigation */ "./app/components/Navigation.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var _pages_About_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/About/About */ "./app/pages/About/About.js");
/* harmony import */ var _pages_Collections_Collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Collections/Collections */ "./app/pages/Collections/Collections.js");
/* harmony import */ var _pages_Detail_Detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Detail/Detail */ "./app/pages/Detail/Detail.js");
/* harmony import */ var _pages_Home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Home/Home */ "./app/pages/Home/Home.js");







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
  // 初始化类
  createNavigation() {
    this.navigation = new Navigation({
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
/******/ 	__webpack_require__.h = () => ("01d9d16770d26afe42b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZTI0NzFlY2Q4MmEzZWUzNDlkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRW1CO0FBQ047QUFFSjtBQUNrQjtBQUNmO0FBQ047QUFFckMsTUFBTU8sR0FBRyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBRWY7RUFDQTtFQUNBQyxnQkFBZ0JBLENBQUEsRUFBRTtJQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBRSxJQUFJQyxVQUFVLENBQUM7TUFDOUJDLFFBQVEsRUFBQyxJQUFJLENBQUNBO0lBQ2hCLENBQUMsQ0FBQztFQUNKO0VBRUFULGVBQWVBLENBQUEsRUFBRTtJQUNmLElBQUksQ0FBQ1UsU0FBUyxHQUFDLElBQUlqQiw0REFBUyxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDaUIsU0FBUyxDQUFDQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDOUQ7RUFFQVosYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDYSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDUCxRQUFRLEdBQUcsSUFBSSxDQUFDSyxPQUFPLENBQUNHLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0VBQzlEOztFQUVBZixXQUFXQSxDQUFBLEVBQUc7SUFDWjtJQUNBLElBQUksQ0FB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LENBQUMsSUFBSSxDQUFDeEMsTUFBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbkU7O0VBRUE7QUFDRjtBQUNBO0VBQ0VULGlCQUFpQkEsQ0FBQSxFQUFFO0lBQ2pCd0MsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcEIsUUFBUSxDQUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDN0Q7RUFFQVYsZ0JBQWdCQSxDQUFBLEVBQUc7SUFBQzs7SUFFbEIsTUFBTTRDLEtBQUssR0FBR2hDLFFBQVEsQ0FBQ2lDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUM1Qzs7SUFFQXpELGtEQUFJLENBQUN3RCxLQUFLLEVBQUdFLElBQUksSUFBSztNQUNwQkEsSUFBSSxDQUFDQyxPQUFPLEdBQUlDLEtBQUssSUFBSztRQUN4QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUV0QixNQUFNO1VBQUVDO1FBQUssQ0FBQyxHQUFHSixJQUFJO1FBRXJCLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ3lCLElBQUksQ0FBQztNQUNyQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUNBLElBQUl2RCxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuSlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBOYXZpYWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cbiAgLy8g5Yid5aeL5YyW57G7XG4gIGNyZWF0ZU5hdmlnYXRpb24oKXtcbiAgICB0aGlzLm5hdmlnYXRpb24gPW5ldyBOYXZpZ2F0aW9uKHtcbiAgICAgIHRlbXBsYXRlOnRoaXMudGVtcGxhdGVcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKXsvLyDlkIzmraVodG1s6YeM55qEdXJs6ZO+5o6l77yM5L2/5b6X5ZyoY2hlY2vml7bkuI3kvJrnnIvliLDmsqHmnInmm7TmlrDnmoRjb250ZW505ZCN5a2XXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuICAgIC8vIOW9k+eCueWHu+aXtu+8jOW9k+WJjemhtemdouS8muiiq+makOiXj1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGRpdi5pbm5lckhUTUw9aHRtbFxuXG4gICAgICBjb25zdCAgZGl2Q29udGVudCA9ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZT1kaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyx0aGlzLnRlbXBsYXRlKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTD1kaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICAvLyDov5nkuKp0ZW1wbGF0ZeaYr+aWsOeahOmhtemdoueahHRlbXBsYXRlXG4gICAgICBcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8gaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG4gICAgLy8gICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpO1xuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb29wXG4gICAqL1xuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDFkOWQxNjc3MGQyNmFmZTQyYjFcIikiXSwibmFtZXMiOlsiZWFjaCIsIk5hdmlhZ2F0aW9uIiwiUHJlbG9hZGVyIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsIkhvbWUiLCJBcHAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsInVwZGF0ZSIsImNyZWF0ZU5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9