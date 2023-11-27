self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Navigation.js":
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Naviagation)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/color */ "./app/utils/color.js");
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utils_color__WEBPACK_IMPORTED_MODULE_1__);



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
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.element, {
      color: template === 'about' ? utils_color__WEBPACK_IMPORTED_MODULE_1__.COLOR_BRIGHT_GRAY : utils_color__WEBPACK_IMPORTED_MODULE_1__.COLOR_QUARTER_SPANISH_WHITE,
      duration: 1.5
    });
  }
}

/***/ }),

/***/ "./app/utils/color.js":
/*!****************************!*\
  !*** ./app/utils/color.js ***!
  \****************************/
/***/ (() => {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("41c8ec415ff2b5deddae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kY2MxZjY0OWQ2M2E4NTYxYTdjOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ3JCO0FBRXFEO0FBRTlELE1BQU1JLFdBQVcsU0FBU0osMERBQVMsQ0FBQztFQUNqREssV0FBV0EsQ0FBQztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUN4QixLQUFLLENBQUM7TUFDSkMsT0FBTyxFQUFFLGFBQWE7TUFDdEJDLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUseUJBQXlCO1FBQ2hDQyxLQUFLLEVBQUU7TUFDVDtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsUUFBUSxDQUFDTCxRQUFRLENBQUM7RUFDekI7RUFFQUssUUFBUUEsQ0FBQ0wsUUFBUSxFQUFDO0lBQ2hCO0lBQ0FMLDRDQUFJLENBQUNXLEVBQUUsQ0FBQyxJQUFJLENBQUNMLE9BQU8sRUFBQztNQUNuQk0sS0FBSyxFQUFDUCxRQUFRLEtBQUssT0FBTyxHQUFHSiwwREFBaUIsR0FBR0Msb0VBQTJCO01BQzVFVyxRQUFRLEVBQUM7SUFDWCxDQUFDLENBQUM7RUFDSjtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcblxuaW1wb3J0IHsgQ09MT1JfQlJJR0hUX0dSQVksIENPTE9SX1FVQVJURVJfU1BBTklTSF9XSElURSB9IGZyb20gJ3V0aWxzL2NvbG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWFnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiAnLm5hdmlnYXRpb24nLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgaXRlbXM6ICcubmF2aWdhdGlvbl9fbGlzdF9faXRlbScsXG4gICAgICAgIGxpbmtzOiAnLm5hdmlnYXRpb25fX2xpc3RfX2xpbmsnLFxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vbkNoYW5nZSh0ZW1wbGF0ZSk7XG4gIH1cbiAgXG4gIG9uQ2hhbmdlKHRlbXBsYXRlKXtcbiAgICAvLyDlpoLmnpznlKjmiLfngrnlh7thYm91dOmhtemdou+8jOWvvOiIqueahOWtl+S9k+eahOminOiJsuS8muWPmOaIkOeBsOiJsu+8jOWmguaenOS4jeaYr+WwseaYr+S8muWPjeeZvVxuICAgIEdTQVAudG8odGhpcy5lbGVtZW50LHtcbiAgICAgIGNvbG9yOnRlbXBsYXRlID09PSAnYWJvdXQnID8gQ09MT1JfQlJJR0hUX0dSQVkgOiBDT0xPUl9RVUFSVEVSX1NQQU5JU0hfV0hJVEUsXG4gICAgICBkdXJhdGlvbjoxLjVcbiAgICB9KVxuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MWM4ZWM0MTVmZjJiNWRlZGRhZVwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJHU0FQIiwiQ09MT1JfQlJJR0hUX0dSQVkiLCJDT0xPUl9RVUFSVEVSX1NQQU5JU0hfV0hJVEUiLCJOYXZpYWdhdGlvbiIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpdGVtcyIsImxpbmtzIiwib25DaGFuZ2UiLCJ0byIsImNvbG9yIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9