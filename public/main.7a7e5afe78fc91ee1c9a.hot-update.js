"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
class Page {
  // 果你想在一个文件中定义一些东西并在另一个文件中使用它，你需要将这些内容导出并在其他文件中导入
  constructor({
    id
  }) {
    console.log('page');
    this.id = id;
  }
  // 构造函数：创建和初始化类或对象，它负责设置对象的初始状态、分配内存空间以及执行任何必要的初始设置
  // 在面向对象编程中，当你实例化一个类（创建类的一个具体实例）时，构造函数会被调用。用来初始化id实例。
  // 构造函数在实例化时会为对象设置初始属性或状态。构造函数定义了对象在创建时应该具备的特征。在创建类的实例后，可以访问和操作这些属性，还可以调用与该类相关联的方法。
  create() {
    console.log('Create', this.id);
  }
  // 调用方法
}

/***/ }),

/***/ "./app/pages/Collections/Collections.js":
/*!**********************************************!*\
  !*** ./app/pages/Collections/Collections.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collections)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Collections extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'collections'
    });
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c182907810c2ec77db2f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YTdlNWFmZTc4ZmM5MWVlMWM5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZSxNQUFNQSxJQUFJO0VBQ3ZCO0VBQ0FDLFdBQVdBLENBQUM7SUFBQ0M7RUFBRSxDQUFDLEVBQUM7SUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25CLElBQUksQ0FBQ0YsRUFBRSxHQUFDQSxFQUFFO0VBQ1o7RUFDQTtFQUNBO0VBQ0E7RUFDQUcsTUFBTUEsQ0FBQSxFQUFFO0lBQ05GLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUNGLEVBQUUsQ0FBQztFQUMvQjtFQUNBO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ2IrQjtBQUVoQixNQUFNSSxXQUFXLFNBQVNOLG9EQUFJO0VBQzNDQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSkMsRUFBRSxFQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0Y7RUFFRjtBQUNGOzs7Ozs7OztVQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdle1xuICAvLyDmnpzkvaDmg7PlnKjkuIDkuKrmlofku7bkuK3lrprkuYnkuIDkupvkuJzopb/lubblnKjlj6bkuIDkuKrmlofku7bkuK3kvb/nlKjlroPvvIzkvaDpnIDopoHlsIbov5nkupvlhoXlrrnlr7zlh7rlubblnKjlhbbku5bmlofku7bkuK3lr7zlhaVcbiAgY29uc3RydWN0b3Ioe2lkfSl7XG4gICAgY29uc29sZS5sb2coJ3BhZ2UnKVxuICAgIHRoaXMuaWQ9aWRcbiAgfVxuICAvLyDmnoTpgKDlh73mlbDvvJrliJvlu7rlkozliJ3lp4vljJbnsbvmiJblr7nosaHvvIzlroPotJ/otKPorr7nva7lr7nosaHnmoTliJ3lp4vnirbmgIHjgIHliIbphY3lhoXlrZjnqbrpl7Tku6Xlj4rmiafooYzku7vkvZXlv4XopoHnmoTliJ3lp4vorr7nva5cbiAgLy8g5Zyo6Z2i5ZCR5a+56LGh57yW56iL5Lit77yM5b2T5L2g5a6e5L6L5YyW5LiA5Liq57G777yI5Yib5bu657G755qE5LiA5Liq5YW35L2T5a6e5L6L77yJ5pe277yM5p6E6YCg5Ye95pWw5Lya6KKr6LCD55So44CC55So5p2l5Yid5aeL5YyWaWTlrp7kvovjgIJcbiAgLy8g5p6E6YCg5Ye95pWw5Zyo5a6e5L6L5YyW5pe25Lya5Li65a+56LGh6K6+572u5Yid5aeL5bGe5oCn5oiW54q25oCB44CC5p6E6YCg5Ye95pWw5a6a5LmJ5LqG5a+56LGh5Zyo5Yib5bu65pe25bqU6K+l5YW35aSH55qE54m55b6B44CC5Zyo5Yib5bu657G755qE5a6e5L6L5ZCO77yM5Y+v5Lul6K6/6Zeu5ZKM5pON5L2c6L+Z5Lqb5bGe5oCn77yM6L+Y5Y+v5Lul6LCD55So5LiO6K+l57G755u45YWz6IGU55qE5pa55rOV44CCXG4gIGNyZWF0ZSgpe1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGUnLHRoaXMuaWQpXG4gIH1cbiAgLy8g6LCD55So5pa55rOVXG59IiwiaW1wb3J0IFBhZ2UgZnJvbSAnY2xhc3Nlcy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9ucyBleHRlbmRzIFBhZ2V7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOidjb2xsZWN0aW9ucydcbiAgICB9KVxuICAgIC8vIHN1cGVyIOiwg+eUqOS6hueItuexu+eahOaehOmAoOWHveaVsO+8jOW5tuS8oOmAkuS6huS4gOS4quWMheWQqyBpZDogJ2Fib3V0JyDnmoTlr7nosaHjgILov5nkuKrlr7nosaHnlKjkuo7niLbnsbvnmoTmnoTpgKDlh73mlbDjgILnhLblkI7vvIzniLbnsbvnmoTmnoTpgKDlh73mlbDkuK3nmoQgY29uc29sZS5sb2coJ0NyZWF0ZScsIHRoaXMuaWQpIOWwhuS8muWcqOaOp+WItuWPsOiusOW9lSAnQ3JlYXRlIGFib3V0J+OAgui/meaYr+WboOS4uueItuexu+eahOaehOmAoOWHveaVsOaOpeaUtuWIsOS6hiB7IGlkOiAnYWJvdXQnIH0g6L+Z5Liq5a+56LGh77yM5bm26K6w5b2V5LqG55u45YWz5L+h5oGv44CCXG5cbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxODI5MDc4MTBjMmVjNzdkYjJmXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsIkNvbGxlY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==