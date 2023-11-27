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
    try {
      const request = await fetch(url); //DES fetching the page url
      const html = await request.text(); //DES waiting for the page data

      const div = document.createElement('div'); //DES creating empty div

      div.innerHTML = html; //DES putting the fetch data in the div

      const divContent = div.querySelector('.content'); //DES selelcting the content element

      this.template = divContent.getAttribute('data-template');
      this.navigation.onChange(this.template);
      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML; //DES replacing the innerHTML of current Page's content element with divContent

      this.page = this.pages[this.template];
      this.page.create();
      this.onResize();
      this.page.show();
      this.addLinkListeners();
    } catch (err) {
      console.log(err);
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
    // window.addEventListener('popstate', this.onPopState.bind(this));
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
/******/ 	__webpack_require__.h = () => ("26233c55ebd30fbe2baa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNTVhY2QzMjU2ZjM2ZGE1ZTlkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVrQjtBQUNMO0FBRUo7QUFDa0I7QUFDZjtBQUNOO0FBRXJDLE1BQU1PLEdBQUcsQ0FBQztFQUNSQyxXQUFXQSxDQUFBLEVBQUc7SUFDWjtJQUNBLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7SUFFdEIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUVsQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRXhCLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFFZjtFQUNBO0VBQ0FMLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ00sVUFBVSxHQUFHLElBQUlmLDhEQUFVLENBQUM7TUFBRWdCLFFBQVEsRUFBRSxJQUFJLENBQUNBO0lBQVMsQ0FBQyxDQUFDO0VBQy9EO0VBRUFOLGVBQWVBLENBQUEsRUFBRTtJQUNmLElBQUksQ0FBQ08sU0FBUyxHQUFDLElBQUloQiw0REFBUyxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDZ0IsU0FBUyxDQUFDQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDOUQ7RUFFQVosYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDYSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDUCxRQUFRLEdBQUcsSUFBSSxDQUFDSyxPQUFPLENBQUNHLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0VBQzlEOztFQUVBYixXQUFXQSxDQUFBLEVBQUc7SUFDWjtJQUNBLElBQUksQ0FBQ2MsS0FBSyxHQUFHO01BQ1hDLEtBQUssRUFBRSxJQUFJeEIsMERBQUssQ0FBQyxDQUFDO01BQ2xCeUIsV0FBVyxFQUFFLElBQUl4QixzRUFBVyxDQUFDLENBQUM7TUFDOUJ5QixNQUFNLEVBQUUsSUFBSXhCLDREQUFNLENBQUMsQ0FBQztNQUNwQnlCLElBQUksRUFBRSxJQUFJeEIsd0RBQUksQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSSxDQUFDeUIsSUFBSSxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQ1QsUUFBUSxDQUFDO0lBQ3JDO0lBQ0EsSUFBSSxDQUFDYyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBR3BCOztFQUVBO0FBQ0Y7QUFDQTtFQUNFWixXQUFXQSxDQUFBLEVBQUU7SUFDWCxJQUFJLENBQUNGLFNBQVMsQ0FBQ2UsT0FBTyxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztJQUNmLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUMsQ0FBQztFQUNsQjtFQUVBLE1BQU1DLFFBQVFBLENBQUNDLEdBQUcsRUFBQztJQUFDO0lBQ2xCLE1BQU0sSUFBSSxDQUFDTixJQUFJLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUk7TUFDRixNQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ2xDLE1BQU1JLElBQUksR0FBRyxNQUFNRixPQUFPLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFbkMsTUFBTUMsR0FBRyxHQUFHcEIsUUFBUSxDQUFDcUIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O01BRTNDRCxHQUFHLENBQUNFLFNBQVMsR0FBR0osSUFBSSxDQUFDLENBQUM7O01BRXRCLE1BQU1LLFVBQVUsR0FBR0gsR0FBRyxDQUFDbkIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O01BRWxELElBQUksQ0FBQ1AsUUFBUSxHQUFHNkIsVUFBVSxDQUFDckIsWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUV4RCxJQUFJLENBQUNULFVBQVUsQ0FBQ29CLFFBQVEsQ0FBQyxJQUFJLENBQUNuQixRQUFRLENBQUM7TUFFdkMsSUFBSSxDQUFDSyxPQUFPLENBQUN5QixZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzlCLFFBQVEsQ0FBQztNQUN6RCxJQUFJLENBQUNLLE9BQU8sQ0FBQ3VCLFNBQVMsR0FBR0MsVUFBVSxDQUFDRCxTQUFTLENBQUMsQ0FBQzs7TUFFL0MsSUFBSSxDQUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDVCxRQUFRLENBQUM7TUFDckMsSUFBSSxDQUFDYyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ2xCLElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDZixJQUFJLENBQUNILElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7TUFFaEIsSUFBSSxDQUFDdEIsZ0JBQWdCLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsT0FBT21DLEdBQUcsRUFBRTtNQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQ2xCO0VBQ0Y7RUFFQWQsUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQTtJQUNBOztJQUVBLElBQUksSUFBSSxDQUFDSCxJQUFJLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNHLFFBQVEsRUFBRTtNQUNuQyxJQUFJLENBQUNILElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFDdEI7RUFDRjs7RUFHQTtBQUNGO0FBQ0E7O0VBRUVuQixNQUFNQSxDQUFBLEVBQUU7SUFBRTs7SUFFUixJQUFJLElBQUksQ0FBQ2dCLElBQUksSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ2hCLE1BQU0sRUFBRTtNQUNqQyxJQUFJLENBQUNnQixJQUFJLENBQUNoQixNQUFNLENBQUMsQ0FBQztJQUNwQjtJQUVBLElBQUksQ0FBQ29DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUN0QyxNQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTs7RUFFQTtBQUNGO0FBQ0E7RUFDRVAsaUJBQWlCQSxDQUFBLEVBQUU7SUFDakI7SUFDQXNDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFK0IsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDRSxXQUFXLENBQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUrQixNQUFNLENBQUNFLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNHLFNBQVMsQ0FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3RCtCLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFK0IsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDRSxXQUFXLENBQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUrQixNQUFNLENBQUNFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNHLFNBQVMsQ0FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU5RCtCLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzdEO0VBRUFSLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUM7O0lBRWxCLE1BQU02QyxLQUFLLEdBQUduQyxRQUFRLENBQUNvQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUM7O0lBRUEzRCxrREFBSSxDQUFDMEQsS0FBSyxFQUFHRSxJQUFJLElBQUs7TUFDcEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFJQyxLQUFLLElBQUs7UUFDeEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFFdEIsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUVyQixJQUFJLENBQUN4QixRQUFRLENBQUM0QixJQUFJLENBQUM7TUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJekQsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDdkpUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcblxuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cbiAgLy8g5Yid5aeL5YyW57G7XG4gIGNyZWF0ZU5hdmlnYXRpb24oKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oeyB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSB9KTtcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpe1xuICAgIHRoaXMucHJlbG9hZGVyPW5ldyBQcmVsb2FkZXIoKVxuICAgIHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvL0RFUzogc2VsZWN0aW5nIHRoZSBjb250ZW50IGNsYXNzXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTsgLy9ERVM6IGdldHRpbmcgdGhlIGRhdGFzZXQtdGVtcGxhdGVcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzKCkge1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgLy8g5L2g5Zyo5ZOq5Liq6aG16Z2i5bCx5riy5p+T5LqG5ZOq5Liq6aG16Z2i77yMZGF0YTB0ZW1wYWx0ZeWug+S9v+W+l+S9oOWPr+S7peWcqCBIVE1MIOWFg+e0oOS4reWtmOWCqOaVsOaNru+8jOeEtuWQjumAmui/hyBKYXZhU2NyaXB0IOadpeivu+WPluWSjOS9v+eUqOi/meS6m+aVsOaNru+8jFxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuXG4gICAgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzXG4gICAqL1xuICBvblByZWxvYWRlZCgpe1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuICAgIHRoaXMub25SZXNpemUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpOyAvL0RFUyBmZXRjaGluZyB0aGUgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTsgLy9ERVMgd2FpdGluZyBmb3IgdGhlIHBhZ2UgZGF0YVxuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9ERVMgY3JlYXRpbmcgZW1wdHkgZGl2XG5cbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sOyAvL0RFUyBwdXR0aW5nIHRoZSBmZXRjaCBkYXRhIGluIHRoZSBkaXZcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvL0RFUyBzZWxlbGN0aW5nIHRoZSBjb250ZW50IGVsZW1lbnRcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7XG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MOyAvL0RFUyByZXBsYWNpbmcgdGhlIGlubmVySFRNTCBvZiBjdXJyZW50IFBhZ2UncyBjb250ZW50IGVsZW1lbnQgd2l0aCBkaXZDb250ZW50XG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8gaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG4gICAgLy8gICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpO1xuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb29wXG4gICAqL1xuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNjIzM2M1NWViZDMwZmJlMmJhYVwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiTmF2aWdhdGlvbiIsIlByZWxvYWRlciIsIkFib3V0IiwiQ29sbGVjdGlvbnMiLCJEZXRhaWwiLCJIb21lIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiY29sbGVjdGlvbnMiLCJkZXRhaWwiLCJob21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==