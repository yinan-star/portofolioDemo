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
/******/ 	__webpack_require__.h = () => ("7c4b1d5cf35a6695f04a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNDVlODU1Njg2YzQ3ODViNDc0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFUTtBQUNVO0FBQ0w7QUFFSjtBQUNrQjtBQUNmO0FBQ047QUFFckMsTUFBTVEsR0FBRyxDQUFDO0VBQ1JDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBRWY7RUFDQTtFQUNBTixnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNPLFVBQVUsR0FBRyxJQUFJaEIsOERBQVUsQ0FBQztNQUFFaUIsUUFBUSxFQUFFLElBQUksQ0FBQ0E7SUFBUyxDQUFDLENBQUM7RUFDL0Q7RUFFQVAsZUFBZUEsQ0FBQSxFQUFFO0lBQ2YsSUFBSSxDQUFDUSxTQUFTLEdBQUMsSUFBSWpCLDREQUFTLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUNpQixTQUFTLENBQUNDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM5RDtFQUVBVixZQUFZQSxDQUFBLEVBQUU7SUFDWixJQUFJLENBQUNXLE1BQU0sR0FBRSxJQUFJdkIseURBQU0sQ0FBQyxDQUFDO0VBQzNCO0VBRUFTLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ2UsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENB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RyxRQUFRLENBQUMsQ0FBQztJQUN0QjtFQUNGOztFQUdBO0FBQ0Y7QUFDQTs7RUFFRXBCLE1BQU1BLENBQUEsRUFBRTtJQUFFOztJQUVSLElBQUksSUFBSSxDQUFDaUIsSUFBSSxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDakIsTUFBTSxFQUFFO01BQ2pDLElBQUksQ0FBQ2lCLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCO0lBRUEsSUFBSSxDQUFDcUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLHFCQUFxQixDQUFDLElBQUksQ0FBQ3ZDLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25FOztFQUVBO0FBQ0Y7QUFDQTtFQUNFUCxpQkFBaUJBLENBQUEsRUFBRTtJQUNqQnVDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzdEO0VBRUFSLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUM7O0lBRWxCLE1BQU0yQyxLQUFLLEdBQUdoQyxRQUFRLENBQUNpQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUM7O0lBRUEzRCxrREFBSSxDQUFDMEQsS0FBSyxFQUFHRSxJQUFJLElBQUs7TUFDcEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFJQyxLQUFLLElBQUs7UUFDeEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFFdEIsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUVyQixJQUFJLENBQUNyQixRQUFRLENBQUN5QixJQUFJLENBQUM7TUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJeEQsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDekpUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5cbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG4gICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVDYW52YXMoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG4gIC8vIOWIneWni+WMluexu1xuICBjcmVhdGVOYXZpZ2F0aW9uKCkge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpe1xuICAgIHRoaXMuY2FudmFzID1uZXcgQ2FudmFzKClcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICAvLyDliJ3lp4vljJbpobXpnaIs5YWI5bu65paH5qGj77yM5Zyo5YaZ6L+Z5Liq77yM5LuW5Lya6Ieq5Yqo5by55Ye6aW1wb3J0XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIC8vIOS9oOWcqOWTquS4qumhtemdouWwsea4suafk+S6huWTquS4qumhtemdou+8jGRhdGEwdGVtcGFsdGXlroPkvb/lvpfkvaDlj6/ku6XlnKggSFRNTCDlhYPntKDkuK3lrZjlgqjmlbDmja7vvIznhLblkI7pgJrov4cgSmF2YVNjcmlwdCDmnaXor7vlj5blkozkvb/nlKjov5nkupvmlbDmja7vvIxcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50c1xuICAgKi9cbiAgb25QcmVsb2FkZWQoKXtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpey8vIOWQjOatpWh0bWzph4znmoR1cmzpk77mjqXvvIzkvb/lvpflnKhjaGVja+aXtuS4jeS8mueci+WIsOayoeacieabtOaWsOeahGNvbnRlbnTlkI3lrZdcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgLy8g5b2T54K55Ye75pe277yM5b2T5YmN6aG16Z2i5Lya6KKr6ZqQ6JePXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHVybClcbiAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgIGNvbnN0IGh0bWw9YXdhaXQgcmVxdWVzdC50ZXh0KClcbiAgICAgIGNvbnN0IGRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgZGl2LmlubmVySFRNTD1odG1sXG5cbiAgICAgIGNvbnN0ICBkaXZDb250ZW50ID1kaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG4gICAgICB0aGlzLnRlbXBsYXRlPWRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLHRoaXMudGVtcGxhdGUpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MPWRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIC8vIOi/meS4qnRlbXBsYXRl5piv5paw55qE6aG16Z2i55qEdGVtcGxhdGVcbiAgICAgIFxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgICAvLyDov5nph4zlj4jlhpnkuIDpgY3mmK/lm6DkuLrlnKjliJvlu7rmlrDnmoTpobXpnaLkuYvlkI7vvIzmnInkupvpobXpnaLph4zpnaLov5jmnInmlrDnmoTpk77mjqXvvIzmiYDku6XlnKjmjonkuIDmrKHov5nkuKrmlrnms5VcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxuXG4gICAgLy8gaWYgKHJlcXVlc3Quc3RhdHVzKVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvb3BcbiAgICovXG5cbiAgdXBkYXRlKCl7IC8vIOWKqOeUu+aIlumhtemdouabtOaWsOeahOW+queOr1xuICAgXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YzRiMWQ1Y2YzNWE2Njk1ZjA0YVwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQ2FudmFzIiwiTmF2aWdhdGlvbiIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNhbnZhcyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9