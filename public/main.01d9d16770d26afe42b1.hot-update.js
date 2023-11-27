"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Navigation.js":
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Naviagation)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");


class Naviagation extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    template
  }) {
    super({
      element: '.navigation',
      elements: {
        items: '.navigation__list__item',
        links: '.navigation__list__link'
      }
    });
    this.onChange(template);
  }
  onChange(template) {
    console.log(template);
  }
}

/***/ }),

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
/******/ 	__webpack_require__.h = () => ("a9c18d69e7ce486a005e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMWQ5ZDE2NzcwZDI2YWZlNDJiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ3JCO0FBRVQsTUFBTUUsV0FBVyxTQUFTRiwwREFBUyxDQUFDO0VBQ2pERyxXQUFXQSxDQUFDO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ3hCLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUUsYUFBYTtNQUN0QkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSx5QkFBeUI7UUFDaENDLEtBQUssRUFBRTtNQUNUO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxRQUFRLENBQUNMLFFBQVEsQ0FBQztFQUN6QjtFQUVBSyxRQUFRQSxDQUFDTCxRQUFRLEVBQUM7SUFDaEJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxRQUFRLENBQUM7RUFDdkI7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CK0I7QUFFbUI7QUFDTjtBQUVKO0FBQ2tCO0FBQ2Y7QUFDTjtBQUVyQyxNQUFNYyxHQUFHLENBQUM7RUFDUmYsV0FBV0EsQ0FBQSxFQUFHO0lBQ1o7SUFDQSxJQUFJLENBQUNnQixlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBRWY7RUFDQTtFQUNBQyxnQkFBZ0JBLENBQUEsRUFBRTtJQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBRSxJQUFJQyxVQUFVLENBQUM7TUFDOUJ2QixRQUFRLEVBQUMsSUFBSSxDQUFDQTtJQUNoQixDQUFDLENBQUM7RUFDSjtFQUVBZSxlQUFlQSxDQUFBLEVBQUU7SUFDZixJQUFJLENBQUNTLFNBQVMsR0FBQyxJQUFJZiw0REFBUyxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDZSxTQUFTLENBQUNDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM5RDtFQUVBWCxhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNZLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDNEIsT0FBTyxDQUFDRyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztFQUM5RDs7RUFFQWQsV0FBV0EsQ0FBQSxFQUFHO0lBQ1o7SUFDQSxJQUFJLENBQUNlLEtBQUssR0FBRztNQUNYQyxLQUFLLEVBQUUsSUFBSXZCLDBEQUFLLENBQUMsQ0FBQztNQUNsQndCLFdBQVcsRUFBRSxJQUFJdkIsc0VBQVcsQ0FBQyxDQUFDO01BQzlCd0IsTUFBTSxFQUFFLElBQUl2Qiw0REFBTSxDQUFDLENBQUM7TUFDcEJ3QixJQUFJLEVBQUUsSUFBSXZCLHdEQUFJLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksQ0FBQ3dCLElBQUksR0FBRyxJQUFJLENBQUNMLEtBQUssQ0FBQyxJQUFJLENBQUNoQyxRQUFRLENBQUM7SUFDckM7SUFDQSxJQUFJLENBQUNxQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBR3BCOztFQUVBO0FBQ0Y7QUFDQTtFQUNFWixXQUFXQSxDQUFBLEVBQUU7SUFDWCxJQUFJLENBQUNGLFNBQVMsQ0FBQ2UsT0FBTyxDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztJQUNmLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUMsQ0FBQztFQUNsQjtFQUVBLE1BQU1wQyxRQUFRQSxDQUFDcUMsR0FBRyxFQUFDO0lBQUM7SUFDbEIsTUFBTSxJQUFJLENBQUNMLElBQUksQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDdEI7SUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLENBQUM7SUFDaEMsSUFBR0UsT0FBTyxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFDO01BQ3hCLE1BQU1DLElBQUksR0FBQyxNQUFNSCxPQUFPLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQy9CLE1BQU1DLEdBQUcsR0FBRXBCLFFBQVEsQ0FBQ3FCLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFFeENELEdBQUcsQ0FBQ0UsU0FBUyxHQUFDSixJQUFJO01BRWxCLE1BQU9LLFVBQVUsR0FBRUgsR0FBRyxDQUFDbkIsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUVoRCxJQUFJLENBQUM5QixRQUFRLEdBQUNvRCxVQUFVLENBQUNyQixZQUFZLENBQUMsZUFBZSxDQUFDO01BRXRELElBQUksQ0FBQ1QsVUFBVSxDQUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQ0wsUUFBUSxDQUFDO01BRXZDLElBQUksQ0FBQzRCLE9BQU8sQ0FBQ3lCLFlBQVksQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDckQsUUFBUSxDQUFDO01BQ3hELElBQUksQ0FBQzRCLE9BQU8sQ0FBQ3VCLFNBQVMsR0FBQ0MsVUFBVSxDQUFDRCxTQUFTO01BRTNDLElBQUksQ0FBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQ2hDLFFBQVEsQ0FBQztNQUNyQzs7TUFFQSxJQUFJLENBQUNxQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ2xCLElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUM7TUFDZixJQUFJLENBQUNILElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7TUFDaEIsSUFBSSxDQUFDdkIsZ0JBQWdCLENBQUMsQ0FBQztNQUN2QjtJQUNGLENBQUMsTUFDRztNQUNGWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDdEI7O0lBRUE7SUFDQUQsT0FBTyxDQUFDQyxHQUFHLENBQUNxQyxPQUFPLENBQUM7RUFDdEI7RUFFQUosUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQTtJQUNBOztJQUVBLElBQUksSUFBSSxDQUFDSCxJQUFJLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNHLFFBQVEsRUFBRTtNQUNuQyxJQUFJLENBQUNILElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFDdEI7RUFDRjs7RUFHQTtBQUNGO0FBQ0E7O0VBRUVwQixNQUFNQSxDQUFBLEVBQUU7SUFBRTs7SUFFUixJQUFJLElBQUksQ0FBQ2lCLElBQUksSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ2pCLE1BQU0sRUFBRTtNQUNqQyxJQUFJLENBQUNpQixJQUFJLENBQUNqQixNQUFNLENBQUMsQ0FBQztJQUNwQjtJQUVBLElBQUksQ0FBQ2tDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNwQyxNQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTs7RUFFQTtBQUNGO0FBQ0E7RUFDRVIsaUJBQWlCQSxDQUFBLEVBQUU7SUFDakJvQyxNQUFNLENBQUNFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNqQixRQUFRLENBQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3RDtFQUVBVCxnQkFBZ0JBLENBQUEsRUFBRztJQUFDOztJQUVsQixNQUFNZCxLQUFLLEdBQUd5QixRQUFRLENBQUM2QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUM7O0lBRUFsRCxrREFBSSxDQUFDSixLQUFLLEVBQUd1RCxJQUFJLElBQUs7TUFDcEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFJQyxLQUFLLElBQUs7UUFDeEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFFdEIsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUVyQixJQUFJLENBQUN0RCxRQUFRLENBQUMwRCxJQUFJLENBQUM7TUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFDQSxJQUFJakQsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDbkpUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50JztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpYWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6ICcubmF2aWdhdGlvbicsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBpdGVtczogJy5uYXZpZ2F0aW9uX19saXN0X19pdGVtJyxcbiAgICAgICAgbGlua3M6ICcubmF2aWdhdGlvbl9fbGlzdF9fbGluaycsXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uQ2hhbmdlKHRlbXBsYXRlKTtcbiAgfVxuICBcbiAgb25DaGFuZ2UodGVtcGxhdGUpe1xuICAgIGNvbnNvbGUubG9nKHRlbXBsYXRlKVxuICB9XG5cbn0iLCJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBOYXZpYWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwiLi9wYWdlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwiLi9wYWdlcy9EZXRhaWwvRGV0YWlsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lL0hvbWVcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g5Y+s5ZSkXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cbiAgLy8g5Yid5aeL5YyW57G7XG4gIGNyZWF0ZU5hdmlnYXRpb24oKXtcbiAgICB0aGlzLm5hdmlnYXRpb24gPW5ldyBOYXZpZ2F0aW9uKHtcbiAgICAgIHRlbXBsYXRlOnRoaXMudGVtcGxhdGVcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXI9bmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJyx0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vREVTOiBzZWxlY3RpbmcgdGhlIGNvbnRlbnQgY2xhc3NcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpOyAvL0RFUzogZ2V0dGluZyB0aGUgZGF0YXNldC10ZW1wbGF0ZVxuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgLy8g5Yid5aeL5YyW6aG16Z2iLOWFiOW7uuaWh+aho++8jOWcqOWGmei/meS4qu+8jOS7luS8muiHquWKqOW8ueWHumltcG9ydFxuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAvLyDkvaDlnKjlk6rkuKrpobXpnaLlsLHmuLLmn5Pkuoblk6rkuKrpobXpnaLvvIxkYXRhMHRlbXBhbHRl5a6D5L2/5b6X5L2g5Y+v5Lul5ZyoIEhUTUwg5YWD57Sg5Lit5a2Y5YKo5pWw5o2u77yM54S25ZCO6YCa6L+HIEphdmFTY3JpcHQg5p2l6K+75Y+W5ZKM5L2/55So6L+Z5Lqb5pWw5o2u77yMXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHNcbiAgICovXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKXsvLyDlkIzmraVodG1s6YeM55qEdXJs6ZO+5o6l77yM5L2/5b6X5ZyoY2hlY2vml7bkuI3kvJrnnIvliLDmsqHmnInmm7TmlrDnmoRjb250ZW505ZCN5a2XXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuICAgIC8vIOW9k+eCueWHu+aXtu+8jOW9k+WJjemhtemdouS8muiiq+makOiXj1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgaWYocmVxdWVzdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICBjb25zdCBodG1sPWF3YWl0IHJlcXVlc3QudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgIGRpdi5pbm5lckhUTUw9aHRtbFxuXG4gICAgICBjb25zdCAgZGl2Q29udGVudCA9ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZT1kaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyx0aGlzLnRlbXBsYXRlKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTD1kaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICAvLyDov5nkuKp0ZW1wbGF0ZeaYr+aWsOeahOmhtemdoueahHRlbXBsYXRlXG4gICAgICBcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgLy8gaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG4gICAgLy8gICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpO1xuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb29wXG4gICAqL1xuXG4gIHVwZGF0ZSgpeyAvLyDliqjnlLvmiJbpobXpnaLmm7TmlrDnmoTlvqrnjq9cbiAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7Ly8g6ZO+5o6l6Lez6L2s5aSE55CGXG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgIC8vIOmAieaLqeaJgOaciemTvuaOpe+8jGxpbmtz5piv5pWw57uEXG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubmV3IEFwcCgpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTljMThkNjllN2NlNDg2YTAwNWVcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiR1NBUCIsIk5hdmlhZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIml0ZW1zIiwibGlua3MiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJlYWNoIiwiUHJlbG9hZGVyIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsIkhvbWUiLCJBcHAiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJjcmVhdGVOYXZpZ2F0aW9uIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJwcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJjb2xsZWN0aW9ucyIsImRldGFpbCIsImhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiZnJhbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9