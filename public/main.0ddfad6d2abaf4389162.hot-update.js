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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/color */ "./app/utils/color.js");



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
    // 如果用户点击about页面，导航的字体的颜色会变成灰色，如果不是就是会反白
    if (template === 'about') {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.element, {
        color: utils_color__WEBPACK_IMPORTED_MODULE_1__.COLOR_BRIGHT_GRAY,
        duration: 1.5
      });
      // 链接是数组的话，itmes容器下面有几个链接，去pug里面查看,第一个你写的是collection，第二个是about
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.items[0], {
        autoAlpha: 1,
        delay: 0.75,
        duration: 0.75
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.items[1], {
        autoAlpha: 0,
        duration: 0.75
      });
      // autoalpha是可见与不可见，1为可见，反之
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.element, {
        color: utils_color__WEBPACK_IMPORTED_MODULE_1__.COLOR_QUARTER_SPANISH_WHITE,
        duration: 1.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.items[0], {
        autoAlpha: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.items[1], {
        autoAlpha: 1,
        delay: 0.75,
        duration: 0.75
      });
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c1827b535f11d00f75c5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZGRmYWQ2ZDJhYmFmNDM4OTE2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDckI7QUFFcUQ7QUFFOUQsTUFBTUksV0FBVyxTQUFTSiwwREFBUyxDQUFDO0VBQ2pESyxXQUFXQSxDQUFDO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ3hCLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUUsYUFBYTtNQUN0QkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSx5QkFBeUI7UUFDaENDLEtBQUssRUFBRTtNQUNUO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxRQUFRLENBQUNMLFFBQVEsQ0FBQztFQUN6QjtFQUVBSyxRQUFRQSxDQUFDTCxRQUFRLEVBQUM7SUFDaEI7SUFDQSxJQUFJQSxRQUFRLEtBQUssT0FBTyxFQUFFO01BQ3hCTCw0Q0FBSSxDQUFDVyxFQUFFLENBQUMsSUFBSSxDQUFDTCxPQUFPLEVBQUU7UUFDcEJNLEtBQUssRUFBRVgsMERBQWlCO1FBQ3hCWSxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7TUFDRjtNQUNBYiw0Q0FBSSxDQUFDVyxFQUFFLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5Qk0sU0FBUyxFQUFFLENBQUM7UUFDWkMsS0FBSyxFQUFFLElBQUk7UUFDWEYsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO01BRUZiLDRDQUFJLENBQUNXLEVBQUUsQ0FBQyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzlCTSxTQUFTLEVBQUUsQ0FBQztRQUNaRCxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7TUFDRjtJQUNGLENBQUMsTUFBSztNQUNKYiw0Q0FBSSxDQUFDVyxFQUFFLENBQUMsSUFBSSxDQUFDTCxPQUFPLEVBQUU7UUFDcEJNLEtBQUssRUFBRVYsb0VBQTJCO1FBQ2xDVyxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7TUFDRmIsNENBQUksQ0FBQ1csRUFBRSxDQUFDLElBQUksQ0FBQ0osUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDOUJNLFNBQVMsRUFBRTtNQUNiLENBQUMsQ0FBQztNQUVGZCw0Q0FBSSxDQUFDVyxFQUFFLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM5Qk0sU0FBUyxFQUFFLENBQUM7UUFDWkMsS0FBSyxFQUFFLElBQUk7UUFDWEYsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO0lBQ0o7RUFDRjtBQUVGOzs7Ozs7OztVQ3JEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50JztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuXG5pbXBvcnQgeyBDT0xPUl9CUklHSFRfR1JBWSwgQ09MT1JfUVVBUlRFUl9TUEFOSVNIX1dISVRFIH0gZnJvbSAndXRpbHMvY29sb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpYWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6ICcubmF2aWdhdGlvbicsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBpdGVtczogJy5uYXZpZ2F0aW9uX19saXN0X19pdGVtJyxcbiAgICAgICAgbGlua3M6ICcubmF2aWdhdGlvbl9fbGlzdF9fbGluaycsXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uQ2hhbmdlKHRlbXBsYXRlKTtcbiAgfVxuICBcbiAgb25DaGFuZ2UodGVtcGxhdGUpe1xuICAgIC8vIOWmguaenOeUqOaIt+eCueWHu2Fib3V06aG16Z2i77yM5a+86Iiq55qE5a2X5L2T55qE6aKc6Imy5Lya5Y+Y5oiQ54Gw6Imy77yM5aaC5p6c5LiN5piv5bCx5piv5Lya5Y+N55m9XG4gICAgaWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBjb2xvcjogQ09MT1JfQlJJR0hUX0dSQVksXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICB9KTtcbiAgICAgIC8vIOmTvuaOpeaYr+aVsOe7hOeahOivne+8jGl0bWVz5a655Zmo5LiL6Z2i5pyJ5Yeg5Liq6ZO+5o6l77yM5Y67cHVn6YeM6Z2i5p+l55yLLOesrOS4gOS4quS9oOWGmeeahOaYr2NvbGxlY3Rpb27vvIznrKzkuozkuKrmmK9hYm91dFxuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnRzLml0ZW1zWzBdLCB7XG4gICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgZGVsYXk6IDAuNzUsXG4gICAgICAgIGR1cmF0aW9uOiAwLjc1LFxuICAgICAgfSk7XG5cbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50cy5pdGVtc1sxXSwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjc1LFxuICAgICAgfSk7XG4gICAgICAvLyBhdXRvYWxwaGHmmK/lj6/op4HkuI7kuI3lj6/op4HvvIwx5Li65Y+v6KeB77yM5Y+N5LmLXG4gICAgfWVsc2Uge1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgY29sb3I6IENPTE9SX1FVQVJURVJfU1BBTklTSF9XSElURSxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgIH0pO1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnRzLml0ZW1zWzBdLCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIH0pO1xuXG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudHMuaXRlbXNbMV0sIHtcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICBkZWxheTogMC43NSxcbiAgICAgICAgZHVyYXRpb246IDAuNzUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxODI3YjUzNWYxMWQwMGY3NWM1XCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkdTQVAiLCJDT0xPUl9CUklHSFRfR1JBWSIsIkNPTE9SX1FVQVJURVJfU1BBTklTSF9XSElURSIsIk5hdmlhZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIml0ZW1zIiwibGlua3MiLCJvbkNoYW5nZSIsInRvIiwiY29sb3IiLCJkdXJhdGlvbiIsImF1dG9BbHBoYSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==