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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
// 管理网页中的特定页面的动画、元素和交互效果


class Page {
  // 果你想在一个文件中定义一些东西并在另一个文件中使用它，你需要将这些内容导出并在其他文件中导入
  constructor({
    // 构造函数在实例化时会为对象设置初始属性或状态。构造函数定义了对象在创建时应该具备的特征。在创建类的实例后，可以访问和操作这些属性，还可以调用与该类相关联的方法。
    element,
    elements,
    id
  }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements
    };
    // selector用来存储传入这两个属性的引用，用来存储对页面元素的引用。element可能是一个页面的元素，elements可能是元素集合
    // ...element是展开运算符，用于快速复制对象或合并对象属性到一个新的对象中。创建了一个新的对象，该对象包含了 elements 中的所有属性

    this.id = id;
  }
  create() {
    // create方法是使用 querySelector进行页面的元素选择和操作
    this.element = document.querySelector(this.selector);
    // 就是先调用上面的构造函数，将页面的element的值存到thi.selector的容器里，然后在执行这个create函数，获取到当前被选择器所指定的元素。querySelctor这个方法不会选择所有匹配的元素，而只会返回第一个匹配的元素。
    this.elements = {};
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList) {
        this.elements[key] = entry;
        // 将属性值即页面元素存储在elements对象中并以他们的属性名命名
      } else {
        this.elements[key] = document.querySelectorAll(entry);
        // 无论是直接的页面元素（<div>、<p>、<span>）还是选择器字符串（类名、ID、标签名）都存在elements里，好用做后续操作访问
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
      // entry:每个属性的值，也就是属性所对应的内容;key:属性的名称。优点按照属性名（表示元素类型或特征）来访问对应的元素或元素集合
      // 每个属性的名称表示了一组元素的类型或特征（如 animationTitles、animationParagraphs 等），而对应的属性值是用这些选择器选择到的元素或元素集合。
    });
    // entry是当前元素,foreach用不了换成了lowcash/each来遍历
  }

  // 开始做动画了～⬇️

  show() {
    return new Promise(resolve => {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
  hide() {
    return new Promise(resolve => {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("09ac188ce5fd2ffbf035")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjljNDcxMjlkMDcxNGUwOWE2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1QjtBQUVPO0FBRWYsTUFBTUUsSUFBSTtFQUN2QjtFQUNBQyxXQUFXQSxDQUFDO0lBQUM7SUFDWEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDO0VBQ0YsQ0FBQyxFQUNEO0lBQ0UsSUFBSSxDQUFDQyxRQUFRLEdBQUNILE9BQU87SUFDckIsSUFBSSxDQUFDSSxnQkFBZ0IsR0FBQztNQUFDLEdBQUdIO0lBQVEsQ0FBQztJQUNuQztJQUNBOztJQUVBLElBQUksQ0FBQ0MsRUFBRSxHQUFDQSxFQUFFO0VBQ1o7RUFFQUcsTUFBTUEsQ0FBQSxFQUFFO0lBQUM7SUFDUCxJQUFJLENBQUNMLE9BQU8sR0FBQ00sUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDSixRQUFRLENBQUM7SUFDbEQ7SUFDQSxJQUFJLENBQUNGLFFBQVEsR0FBQyxDQUFDLENBQUM7SUFFaEJKLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxnQkFBZ0IsRUFBRSxDQUFDSSxLQUFLLEVBQUNDLEdBQUcsS0FBSztNQUN6QyxJQUNFRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBVyxJQUNuQ0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQVEsRUFDaEM7UUFDQSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdELEtBQUs7UUFDMUI7TUFDRixDQUFDLE1BQ0k7UUFDSCxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUNMLEtBQUssQ0FBQztRQUN2RDtRQUNFLElBQUksSUFBSSxDQUFDUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ25DLElBQUksQ0FBQ2IsUUFBUSxDQUFDUSxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQzNCLENBQUMsTUFDSSxJQUFJLElBQUksQ0FBQ1IsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUN4QyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUM7UUFDcEQ7TUFDRjtNQUNBO01BQ0E7SUFDRixDQUFDLENBQUM7SUFDRjtFQUNGOztFQUVGOztFQUVFTyxJQUFJQSxDQUFBLEVBQUU7SUFDSixPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO01BQzNCckIsNENBQUksQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLENBQUNsQixPQUFPLEVBQUM7UUFDckJtQixTQUFTLEVBQUMsQ0FBQztRQUNYQyxVQUFVLEVBQUNIO01BQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBRUo7RUFFQUksSUFBSUEsQ0FBQSxFQUFFO0lBQ0osT0FBTyxJQUFJTCxPQUFPLENBQUNDLE9BQU8sSUFBRztNQUMzQnJCLDRDQUFJLENBQUMwQixFQUFFLENBQUMsSUFBSSxDQUFDdEIsT0FBTyxFQUFDO1FBQ25CbUIsU0FBUyxFQUFDLENBQUM7UUFDWEMsVUFBVSxFQUFFSDtNQUNkLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDdEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOeuoeeQhue9kemhteS4reeahOeJueWumumhtemdoueahOWKqOeUu+OAgeWFg+e0oOWSjOS6pOS6kuaViOaenFxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2V7XG4gIC8vIOaenOS9oOaDs+WcqOS4gOS4quaWh+S7tuS4reWumuS5ieS4gOS6m+S4nOilv+W5tuWcqOWPpuS4gOS4quaWh+S7tuS4reS9v+eUqOWug++8jOS9oOmcgOimgeWwhui/meS6m+WGheWuueWvvOWHuuW5tuWcqOWFtuS7luaWh+S7tuS4reWvvOWFpVxuICBjb25zdHJ1Y3Rvcih7Ly8g5p6E6YCg5Ye95pWw5Zyo5a6e5L6L5YyW5pe25Lya5Li65a+56LGh6K6+572u5Yid5aeL5bGe5oCn5oiW54q25oCB44CC5p6E6YCg5Ye95pWw5a6a5LmJ5LqG5a+56LGh5Zyo5Yib5bu65pe25bqU6K+l5YW35aSH55qE54m55b6B44CC5Zyo5Yib5bu657G755qE5a6e5L6L5ZCO77yM5Y+v5Lul6K6/6Zeu5ZKM5pON5L2c6L+Z5Lqb5bGe5oCn77yM6L+Y5Y+v5Lul6LCD55So5LiO6K+l57G755u45YWz6IGU55qE5pa55rOV44CCXG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KVxuICB7XG4gICAgdGhpcy5zZWxlY3Rvcj1lbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuPXsuLi5lbGVtZW50c31cbiAgICAvLyBzZWxlY3RvcueUqOadpeWtmOWCqOS8oOWFpei/meS4pOS4quWxnuaAp+eahOW8leeUqO+8jOeUqOadpeWtmOWCqOWvuemhtemdouWFg+e0oOeahOW8leeUqOOAgmVsZW1lbnTlj6/og73mmK/kuIDkuKrpobXpnaLnmoTlhYPntKDvvIxlbGVtZW50c+WPr+iDveaYr+WFg+e0oOmbhuWQiFxuICAgIC8vIC4uLmVsZW1lbnTmmK/lsZXlvIDov5DnrpfnrKbvvIznlKjkuo7lv6vpgJ/lpI3liLblr7nosaHmiJblkIjlubblr7nosaHlsZ7mgKfliLDkuIDkuKrmlrDnmoTlr7nosaHkuK3jgILliJvlu7rkuobkuIDkuKrmlrDnmoTlr7nosaHvvIzor6Xlr7nosaHljIXlkKvkuoYgZWxlbWVudHMg5Lit55qE5omA5pyJ5bGe5oCnXG5cbiAgICB0aGlzLmlkPWlkXG4gIH1cblxuICBjcmVhdGUoKXsvLyBjcmVhdGXmlrnms5XmmK/kvb/nlKggcXVlcnlTZWxlY3Rvcui/m+ihjOmhtemdoueahOWFg+e0oOmAieaLqeWSjOaTjeS9nFxuICAgIHRoaXMuZWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgLy8g5bCx5piv5YWI6LCD55So5LiK6Z2i55qE5p6E6YCg5Ye95pWw77yM5bCG6aG16Z2i55qEZWxlbWVudOeahOWAvOWtmOWIsHRoaS5zZWxlY3RvcueahOWuueWZqOmHjO+8jOeEtuWQjuWcqOaJp+ihjOi/meS4qmNyZWF0ZeWHveaVsO+8jOiOt+WPluWIsOW9k+WJjeiiq+mAieaLqeWZqOaJgOaMh+WumueahOWFg+e0oOOAgnF1ZXJ5U2VsY3Rvcui/meS4quaWueazleS4jeS8mumAieaLqeaJgOacieWMuemFjeeahOWFg+e0oO+8jOiAjOWPquS8mui/lOWbnuesrOS4gOS4quWMuemFjeeahOWFg+e0oOOAglxuICAgIHRoaXMuZWxlbWVudHM9e31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksa2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICAgIC8vIOWwhuWxnuaAp+WAvOWNs+mhtemdouWFg+e0oOWtmOWCqOWcqGVsZW1lbnRz5a+56LGh5Lit5bm25Lul5LuW5Lus55qE5bGe5oCn5ZCN5ZG95ZCNXG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuICAgICAgLy8g5peg6K665piv55u05o6l55qE6aG16Z2i5YWD57Sg77yIPGRpdj7jgIE8cD7jgIE8c3Bhbj7vvInov5jmmK/pgInmi6nlmajlrZfnrKbkuLLvvIjnsbvlkI3jgIFJROOAgeagh+etvuWQje+8iemDveWtmOWcqGVsZW1lbnRz6YeM77yM5aW955So5YGa5ZCO57ut5pON5L2c6K6/6ZeuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbnRyeTrmr4/kuKrlsZ7mgKfnmoTlgLzvvIzkuZ/lsLHmmK/lsZ7mgKfmiYDlr7nlupTnmoTlhoXlrrk7a2V5OuWxnuaAp+eahOWQjeensOOAguS8mOeCueaMieeFp+WxnuaAp+WQje+8iOihqOekuuWFg+e0oOexu+Wei+aIlueJueW+ge+8ieadpeiuv+mXruWvueW6lOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiFxuICAgICAgLy8g5q+P5Liq5bGe5oCn55qE5ZCN56ew6KGo56S65LqG5LiA57uE5YWD57Sg55qE57G75Z6L5oiW54m55b6B77yI5aaCIGFuaW1hdGlvblRpdGxlc+OAgWFuaW1hdGlvblBhcmFncmFwaHMg562J77yJ77yM6ICM5a+55bqU55qE5bGe5oCn5YC85piv55So6L+Z5Lqb6YCJ5oup5Zmo6YCJ5oup5Yiw55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCI44CCXG4gICAgfSk7XG4gICAgLy8gZW50cnnmmK/lvZPliY3lhYPntKAsZm9yZWFjaOeUqOS4jeS6huaNouaIkOS6hmxvd2Nhc2gvZWFjaOadpemBjeWOhlxuICB9XG5cbi8vIOW8gOWni+WBmuWKqOeUu+S6hu+9nuKsh++4j1xuXG4gIHNob3coKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PntcbiAgICAgIEdTQVAuZnJvbSh0aGlzLmVsZW1lbnQse1xuICAgICAgICBhdXRvQWxwaGE6MCxcbiAgICAgICAgb25Db21wbGV0ZTpyZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIFxuICB9XG5cbiAgaGlkZSgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQse1xuICAgICAgICBhdXRvQWxwaGE6MCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDlhYzE4OGNlNWZkMmZmYmYwMzVcIikiXSwibmFtZXMiOlsiR1NBUCIsImVhY2giLCJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tIiwiYXV0b0FscGhhIiwib25Db21wbGV0ZSIsImhpZGUiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=