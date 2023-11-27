"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Component.js":
/*!**********************************!*\
  !*** ./app/classes/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
// 管理网页中的特定页面的动画、元素和交互效果,单单是为了preloader的页面继承


class Page {
  // 果你想在一个文件中定义一些东西并在另一个文件中使用它，你需要将这些内容导出并在其他文件中导入
  constructor({
    // 构造函数在实例化时会为对象设置初始属性或状态。构造函数定义了对象在创建时应该具备的特征。在创建类的实例后，可以访问和操作这些属性，还可以调用与该类相关联的方法。
    element,
    elements
  }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements
    };
    // selector用来存储传入这两个属性的引用，用来存储对页面元素的引用。element可能是一个页面的元素，elements可能是元素集合
    // ...element是展开运算符，用于快速复制对象或合并对象属性到一个新的对象中。创建了一个新的对象，该对象包含了 elements 中的所有属性
    this.create();
    this.addEventListeners();
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

  addEventListeners() {
    return new Promise(resolve => {
      GSAP.from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
      // GSAP就是java动画库里的一个动画效果
    });
  }

  removeEventListeners() {
    return new Promise(resolve => {
      GSAP.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
}

/***/ }),

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Preloader: () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");

class Preloader extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number'
      }
    });
    console.log(this.element, this.elements);
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
/******/ 	__webpack_require__.h = () => ("617cca136930909c485f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOWZjOWRlZjYzMWE0NTUyMDJlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUU4QjtBQUVmLE1BQU1DLElBQUk7RUFDdkI7RUFDQUMsV0FBV0EsQ0FBQztJQUFDO0lBQ1hDLE9BQU87SUFDUEM7RUFDRixDQUFDLEVBQ0Q7SUFDRSxJQUFJLENBQUNDLFFBQVEsR0FBQ0YsT0FBTztJQUNyQixJQUFJLENBQUNHLGdCQUFnQixHQUFDO01BQUMsR0FBR0Y7SUFBUSxDQUFDO0lBQ25DO0lBQ0E7SUFDQSxJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0VBQzFCO0VBRUFELE1BQU1BLENBQUEsRUFBRTtJQUFDO0lBQ1AsSUFBSSxDQUFDSixPQUFPLEdBQUNNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ0wsUUFBUSxDQUFDO0lBQ2xEO0lBQ0EsSUFBSSxDQUFDRCxRQUFRLEdBQUMsQ0FBQyxDQUFDO0lBRWhCSixrREFBSSxDQUFDLElBQUksQ0FBQ00sZ0JBQWdCLEVBQUUsQ0FBQ0ssS0FBSyxFQUFDQyxHQUFHLEtBQUs7TUFDekMsSUFDRUQsS0FBSyxZQUFZRSxNQUFNLENBQUNDLFdBQVcsSUFDbkNILEtBQUssWUFBWUUsTUFBTSxDQUFDRSxRQUFRLEVBQ2hDO1FBQ0EsSUFBSSxDQUFDWCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxHQUFHRCxLQUFLO1FBQzFCO01BQ0YsQ0FBQyxNQUNJO1FBQ0gsSUFBSSxDQUFDUCxRQUFRLENBQUNRLEdBQUcsQ0FBQyxHQUFHSCxRQUFRLENBQUNPLGdCQUFnQixDQUFDTCxLQUFLLENBQUM7UUFDdkQ7UUFDRSxJQUFJLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNuQyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLEdBQUcsSUFBSTtRQUMzQixDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUNSLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLENBQUNLLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDeEMsSUFBSSxDQUFDYixRQUFRLENBQUNRLEdBQUcsQ0FBQyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDO1FBQ3BEO01BQ0Y7TUFDQTtNQUNBO0lBQ0YsQ0FBQyxDQUFDO0lBQ0Y7RUFDRjs7RUFFRjs7RUFFRUgsaUJBQWlCQSxDQUFBLEVBQUU7SUFDakIsT0FBTyxJQUFJVSxPQUFPLENBQUNDLE9BQU8sSUFBRztNQUMzQkMsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDbEIsT0FBTyxFQUFDO1FBQ3JCbUIsU0FBUyxFQUFDLENBQUM7UUFDWEMsVUFBVSxFQUFDSjtNQUNiLENBQUMsQ0FBQztNQUNGO0lBQ0YsQ0FBQyxDQUFDO0VBRUo7O0VBRUFLLG9CQUFvQkEsQ0FBQSxFQUFFO0lBQ3BCLE9BQU8sSUFBSU4sT0FBTyxDQUFDQyxPQUFPLElBQUc7TUFDM0JDLElBQUksQ0FBQ0ssRUFBRSxDQUFDLElBQUksQ0FBQ3RCLE9BQU8sRUFBQztRQUNuQm1CLFNBQVMsRUFBQyxDQUFDO1FBQ1hDLFVBQVUsRUFBRUo7TUFDZCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNyRTZDO0FBRXRDLE1BQU1RLFNBQVMsU0FBU0QsMERBQVM7RUFDcEN4QixXQUFXQSxDQUFBLEVBQUU7SUFDVCxLQUFLLENBQUM7TUFDRkMsT0FBTyxFQUFDLFlBQVk7TUFDcEJDLFFBQVEsRUFBQztRQUNMd0IsS0FBSyxFQUFDLGtCQUFrQjtRQUN4QkMsTUFBTSxFQUFDO01BQ1g7SUFDSixDQUFDLENBQUM7SUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDNUIsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0VBRTNDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QrQjtBQUVhO0FBRUo7QUFDa0I7QUFDZjtBQUNOO0FBRXJDLE1BQU1nQyxHQUFHLENBQUM7RUFDUmxDLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDbUMsZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRWxCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUV6QjtFQUVBSCxlQUFlQSxDQUFBLEVBQUU7SUFDZixJQUFJLENBQUNJLFNBQVMsR0FBQyxJQUFJZCw0REFBUyxDQUFDLENBQUM7RUFDaEM7RUFFQVcsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDSSxPQUFPLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksQ0FBQ2lDLFFBQVEsR0FBRyxJQUFJLENBQUNELE9BQU8sQ0FBQ0UsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDOUQ7O0VBR0FMLFdBQVdBLENBQUEsRUFBRztJQUNaO0lBQ0EsSUFBSSxDQUFDTSxLQUFLLEdBQUc7TUFDWEMsS0FBSyxFQUFFLElBQUlkLDBEQUFLLENBQUMsQ0FBQztNQUNsQmUsV0FBVyxFQUFFLElBQUlkLHNFQUFXLENBQUMsQ0FBQztNQUM5QmUsTUFBTSxFQUFFLElBQUlkLDREQUFNLENBQUMsQ0FBQztNQUNwQmUsSUFBSSxFQUFFLElBQUlkLHdEQUFJLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUksQ0FBQ2UsSUFBSSxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQ0YsUUFBUSxDQUFDO0lBQ3JDO0lBQ0EsSUFBSSxDQUFDTyxJQUFJLENBQUMzQyxNQUFNLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUMyQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ2xCO0VBRUEsTUFBTUMsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFDO0lBQUM7SUFDbEIsTUFBTSxJQUFJLENBQUNILElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFDdEI7SUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLENBQUM7SUFDaEMsSUFBR0UsT0FBTyxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFDO01BQ3hCLE1BQU1DLElBQUksR0FBQyxNQUFNSCxPQUFPLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQy9CLE1BQU1DLEdBQUcsR0FBRW5ELFFBQVEsQ0FBQ29ELGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFFeENELEdBQUcsQ0FBQ0UsU0FBUyxHQUFDSixJQUFJO01BRWxCLE1BQU9LLFVBQVUsR0FBRUgsR0FBRyxDQUFDbEQsYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUVoRCxJQUFJLENBQUNpQyxRQUFRLEdBQUNvQixVQUFVLENBQUNuQixZQUFZLENBQUMsZUFBZSxDQUFDO01BQ3RELElBQUksQ0FBQ0YsT0FBTyxDQUFDc0IsWUFBWSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUNyQixRQUFRLENBQUM7TUFDeEQsSUFBSSxDQUFDRCxPQUFPLENBQUNvQixTQUFTLEdBQUNDLFVBQVUsQ0FBQ0QsU0FBUztNQUUzQyxJQUFJLENBQUNaLElBQUksR0FBRyxJQUFJLENBQUNMLEtBQUssQ0FBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQztNQUNyQztNQUNBLElBQUksQ0FBQ08sSUFBSSxDQUFDM0MsTUFBTSxDQUFDLENBQUM7TUFDbEIsSUFBSSxDQUFDMkMsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUNoQixJQUFJLENBQUNYLGdCQUFnQixDQUFDLENBQUM7TUFDdkI7SUFDRixDQUFDLE1BQ0c7TUFDRlYsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3RCOztJQUVBO0lBQ0FELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDd0IsT0FBTyxDQUFDO0VBQ3RCO0VBRUFmLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUM7O0lBRWxCLE1BQU15QixLQUFLLEdBQUd4RCxRQUFRLENBQUNPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztJQUM1Qzs7SUFFQWhCLGtEQUFJLENBQUNpRSxLQUFLLEVBQUdDLElBQUksSUFBSztNQUNwQkEsSUFBSSxDQUFDQyxPQUFPLEdBQUlDLEtBQUssSUFBSztRQUN4QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUV0QixNQUFNO1VBQUVDO1FBQUssQ0FBQyxHQUFHSixJQUFJO1FBRXJCLElBQUksQ0FBQ2QsUUFBUSxDQUFDa0IsSUFBSSxDQUFDO01BQ3JCLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtBQUNGO0FBQ0EsSUFBSWxDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztVQzNGVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8g566h55CG572R6aG15Lit55qE54m55a6a6aG16Z2i55qE5Yqo55S744CB5YWD57Sg5ZKM5Lqk5LqS5pWI5p6cLOWNleWNleaYr+S4uuS6hnByZWxvYWRlcueahOmhtemdoue7p+aJv1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXtcbiAgLy8g5p6c5L2g5oOz5Zyo5LiA5Liq5paH5Lu25Lit5a6a5LmJ5LiA5Lqb5Lic6KW/5bm25Zyo5Y+m5LiA5Liq5paH5Lu25Lit5L2/55So5a6D77yM5L2g6ZyA6KaB5bCG6L+Z5Lqb5YaF5a655a+85Ye65bm25Zyo5YW25LuW5paH5Lu25Lit5a+85YWlXG4gIGNvbnN0cnVjdG9yKHsvLyDmnoTpgKDlh73mlbDlnKjlrp7kvovljJbml7bkvJrkuLrlr7nosaHorr7nva7liJ3lp4vlsZ7mgKfmiJbnirbmgIHjgILmnoTpgKDlh73mlbDlrprkuYnkuoblr7nosaHlnKjliJvlu7rml7blupTor6XlhbflpIfnmoTnibnlvoHjgILlnKjliJvlu7rnsbvnmoTlrp7kvovlkI7vvIzlj6/ku6Xorr/pl67lkozmk43kvZzov5nkupvlsZ7mgKfvvIzov5jlj6/ku6XosIPnlKjkuI7or6Xnsbvnm7jlhbPogZTnmoTmlrnms5XjgIJcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnRzXG4gIH0pXG4gIHtcbiAgICB0aGlzLnNlbGVjdG9yPWVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW49ey4uLmVsZW1lbnRzfVxuICAgIC8vIHNlbGVjdG9y55So5p2l5a2Y5YKo5Lyg5YWl6L+Z5Lik5Liq5bGe5oCn55qE5byV55So77yM55So5p2l5a2Y5YKo5a+56aG16Z2i5YWD57Sg55qE5byV55So44CCZWxlbWVudOWPr+iDveaYr+S4gOS4qumhtemdoueahOWFg+e0oO+8jGVsZW1lbnRz5Y+v6IO95piv5YWD57Sg6ZuG5ZCIXG4gICAgLy8gLi4uZWxlbWVudOaYr+WxleW8gOi/kOeul+espu+8jOeUqOS6juW/q+mAn+WkjeWItuWvueixoeaIluWQiOW5tuWvueixoeWxnuaAp+WIsOS4gOS4quaWsOeahOWvueixoeS4reOAguWIm+W7uuS6huS4gOS4quaWsOeahOWvueixoe+8jOivpeWvueixoeWMheWQq+S6hiBlbGVtZW50cyDkuK3nmoTmiYDmnInlsZ7mgKdcbiAgICB0aGlzLmNyZWF0ZSgpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBjcmVhdGUoKXsvLyBjcmVhdGXmlrnms5XmmK/kvb/nlKggcXVlcnlTZWxlY3Rvcui/m+ihjOmhtemdoueahOWFg+e0oOmAieaLqeWSjOaTjeS9nFxuICAgIHRoaXMuZWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgLy8g5bCx5piv5YWI6LCD55So5LiK6Z2i55qE5p6E6YCg5Ye95pWw77yM5bCG6aG16Z2i55qEZWxlbWVudOeahOWAvOWtmOWIsHRoaS5zZWxlY3RvcueahOWuueWZqOmHjO+8jOeEtuWQjuWcqOaJp+ihjOi/meS4qmNyZWF0ZeWHveaVsO+8jOiOt+WPluWIsOW9k+WJjeiiq+mAieaLqeWZqOaJgOaMh+WumueahOWFg+e0oOOAgnF1ZXJ5U2VsY3Rvcui/meS4quaWueazleS4jeS8mumAieaLqeaJgOacieWMuemFjeeahOWFg+e0oO+8jOiAjOWPquS8mui/lOWbnuesrOS4gOS4quWMuemFjeeahOWFg+e0oOOAglxuICAgIHRoaXMuZWxlbWVudHM9e31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksa2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICAgIC8vIOWwhuWxnuaAp+WAvOWNs+mhtemdouWFg+e0oOWtmOWCqOWcqGVsZW1lbnRz5a+56LGh5Lit5bm25Lul5LuW5Lus55qE5bGe5oCn5ZCN5ZG95ZCNXG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuICAgICAgLy8g5peg6K665piv55u05o6l55qE6aG16Z2i5YWD57Sg77yIPGRpdj7jgIE8cD7jgIE8c3Bhbj7vvInov5jmmK/pgInmi6nlmajlrZfnrKbkuLLvvIjnsbvlkI3jgIFJROOAgeagh+etvuWQje+8iemDveWtmOWcqGVsZW1lbnRz6YeM77yM5aW955So5YGa5ZCO57ut5pON5L2c6K6/6ZeuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbnRyeTrmr4/kuKrlsZ7mgKfnmoTlgLzvvIzkuZ/lsLHmmK/lsZ7mgKfmiYDlr7nlupTnmoTlhoXlrrk7a2V5OuWxnuaAp+eahOWQjeensOOAguS8mOeCueaMieeFp+WxnuaAp+WQje+8iOihqOekuuWFg+e0oOexu+Wei+aIlueJueW+ge+8ieadpeiuv+mXruWvueW6lOeahOWFg+e0oOaIluWFg+e0oOmbhuWQiFxuICAgICAgLy8g5q+P5Liq5bGe5oCn55qE5ZCN56ew6KGo56S65LqG5LiA57uE5YWD57Sg55qE57G75Z6L5oiW54m55b6B77yI5aaCIGFuaW1hdGlvblRpdGxlc+OAgWFuaW1hdGlvblBhcmFncmFwaHMg562J77yJ77yM6ICM5a+55bqU55qE5bGe5oCn5YC85piv55So6L+Z5Lqb6YCJ5oup5Zmo6YCJ5oup5Yiw55qE5YWD57Sg5oiW5YWD57Sg6ZuG5ZCI44CCXG4gICAgfSk7XG4gICAgLy8gZW50cnnmmK/lvZPliY3lhYPntKAsZm9yZWFjaOeUqOS4jeS6huaNouaIkOS6hmxvd2Nhc2gvZWFjaOadpemBjeWOhlxuICB9XG5cbi8vIOW8gOWni+WBmuWKqOeUu+S6hu+9nuKsh++4j1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LHtcbiAgICAgICAgYXV0b0FscGhhOjAsXG4gICAgICAgIG9uQ29tcGxldGU6cmVzb2x2ZVxuICAgICAgfSlcbiAgICAgIC8vIEdTQVDlsLHmmK9qYXZh5Yqo55S75bqT6YeM55qE5LiA5Liq5Yqo55S75pWI5p6cXG4gICAgfSlcbiAgXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQse1xuICAgICAgICBhdXRvQWxwaGE6MCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jbGFzc2VzL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgZWxlbWVudDonLnByZWxvYWRlcicsXG4gICAgICAgICAgICBlbGVtZW50czp7XG4gICAgICAgICAgICAgICAgdGl0bGU6Jy5wcmVsb2FkZXJfX3RleHQnLFxuICAgICAgICAgICAgICAgIG51bWJlcjonLnByZWxvYWRlcl9fbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsdGhpcy5lbGVtZW50cylcblxuICAgIH1cbn0iLCJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5cbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dC9BYm91dFwiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCIuL3BhZ2VzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCIuL3BhZ2VzL0RldGFpbC9EZXRhaWxcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUvSG9tZVwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDlj6zllKRcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlcj1uZXcgUHJlbG9hZGVyKClcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgLy9ERVM6IHNlbGVjdGluZyB0aGUgY29udGVudCBjbGFzc1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyk7IC8vREVTOiBnZXR0aW5nIHRoZSBkYXRhc2V0LXRlbXBsYXRlXG4gIH1cblxuXG4gIGNyZWF0ZVBhZ2VzKCkge1xuICAgIC8vIOWIneWni+WMlumhtemdoizlhYjlu7rmlofmoaPvvIzlnKjlhpnov5nkuKrvvIzku5bkvJroh6rliqjlvLnlh7ppbXBvcnRcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgLy8g5L2g5Zyo5ZOq5Liq6aG16Z2i5bCx5riy5p+T5LqG5ZOq5Liq6aG16Z2i77yMZGF0YTB0ZW1wYWx0ZeWug+S9v+W+l+S9oOWPr+S7peWcqCBIVE1MIOWFg+e0oOS4reWtmOWCqOaVsOaNru+8jOeEtuWQjumAmui/hyBKYXZhU2NyaXB0IOadpeivu+WPluWSjOS9v+eUqOi/meS6m+aVsOaNru+8jFxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCl7Ly8g5ZCM5q2laHRtbOmHjOeahHVybOmTvuaOpe+8jOS9v+W+l+WcqGNoZWNr5pe25LiN5Lya55yL5Yiw5rKh5pyJ5pu05paw55qEY29udGVudOWQjeWtl1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcbiAgICAvLyDlvZPngrnlh7vml7bvvIzlvZPliY3pobXpnaLkvJrooqvpmpDol49cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmKHJlcXVlc3Quc3RhdHVzID09PSAyMDApe1xuICAgICAgY29uc3QgaHRtbD1hd2FpdCByZXF1ZXN0LnRleHQoKVxuICAgICAgY29uc3QgZGl2ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICBkaXYuaW5uZXJIVE1MPWh0bWxcblxuICAgICAgY29uc3QgIGRpdkNvbnRlbnQgPWRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAgIHRoaXMudGVtcGxhdGU9ZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsdGhpcy50ZW1wbGF0ZSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUw9ZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgICAgLy8g6L+Z5LiqdGVtcGxhdGXmmK/mlrDnmoTpobXpnaLnmoR0ZW1wbGF0ZVxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgICAgLy8g6L+Z6YeM5Y+I5YaZ5LiA6YGN5piv5Zug5Li65Zyo5Yib5bu65paw55qE6aG16Z2i5LmL5ZCO77yM5pyJ5Lqb6aG16Z2i6YeM6Z2i6L+Y5pyJ5paw55qE6ZO+5o6l77yM5omA5Lul5Zyo5o6J5LiA5qyh6L+Z5Liq5pa55rOVXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3InKVxuICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0LnN0YXR1cylcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHsvLyDpk77mjqXot7PovazlpITnkIZcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG4gICAgLy8g6YCJ5oup5omA5pyJ6ZO+5o6l77yMbGlua3PmmK/mlbDnu4RcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5uZXcgQXBwKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MTdjY2ExMzY5MzA5MDljNDg1ZlwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJHU0FQIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsInRvIiwiQ29tcG9uZW50IiwiUHJlbG9hZGVyIiwidGl0bGUiLCJudW1iZXIiLCJjb25zb2xlIiwibG9nIiwiQWJvdXQiLCJDb2xsZWN0aW9ucyIsIkRldGFpbCIsIkhvbWUiLCJBcHAiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiY29udGVudCIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiaG9tZSIsInBhZ2UiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImxpbmtzIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=