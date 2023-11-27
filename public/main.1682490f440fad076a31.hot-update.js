"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");




class Preloader extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        images: document.querySelectorAll('img')
      }
    });
    this.elements.titleSpans = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    this.length = 0;
    console.log(this.element, this.elements);
    this.createLoader();
  }
  createLoader() {
    // 创建加载页后直接奔着about page并且将about图片都显示出来
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element);
      element.src = element.getAttribute('data-src');
    });
  }
  onAssetLoaded(image) {
    // 加载页的计算响应公式     
    this.length += 1;
    // 每load一次，这个当前加载的进度会加一
    const percent = this.length / this.elements.images.length;
    this.elements.number.innerHTML = `${Math.round(percent * 100)}%`;
    // 这个是加载完所有图像后的加载页的number的计算公式

    if (percent === 1) {
      this.onloaded();
    }
  }
  onloaded() {
    // 控制加载页等待多久进入主页及动画
    return new Promise(resolve => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        delay: 2
        // 控制加载页等待多久进入主页
      });

      this.animateOut.to(this.element, {
        autoAlpha: 0
      });
      this.animateOut.call(_ => {
        this.emit('completed');
      });
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}

/***/ }),

/***/ "./app/utils/text.js":
/*!***************************!*\
  !*** ./app/utils/text.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate),
/* harmony export */   split: () => (/* binding */ split)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
// 让加载页的动画更加有设计感


/**
 * Function that splits text into spans
 * @param {string || HTMLElement} element
 * @param {string} expression
 * @param {bool} append
 */
function split({
  element,
  expression = ' ',
  append = true
}) {
  const words = splitText(element.innerHTML.toString().trim(), expression);
  let innerHTML = '';
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(words, line => {
    if (line.indexOf('<br>') > -1) {
      const lines = line.split('<br>');
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(lines, (line, index) => {
        innerHTML += index > 0 ? '<br>' + parseLine(line) : parseLine(line);
      });
    } else {
      innerHTML += parseLine(line);
    }
  });
  element.innerHTML = innerHTML;
  const spans = element.querySelectorAll('span');
  if (append) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(spans, span => {
      const isSingleLetter = span.textContent.length === 1;
      const isNotEmpty = span.innerHTML.trim() !== '';
      const isNotAndCharacter = span.textContent !== '&';
      const isNotDashCharacter = span.textContent !== '-';
      if (isSingleLetter && isNotEmpty && isNotAndCharacter && isNotDashCharacter) {
        span.innerHTML = `${span.textContent}&nbsp;`;
      }
    });
  }
  return spans;
}
function calculate(spans) {
  if (!spans.length) {
    return;
  }
  const lines = [];
  let words = [];
  let position = spans[0].offsetTop;
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(spans, (span, index) => {
    if (span.offsetTop === position) {
      words.push(span);
    }
    if (span.offsetTop !== position) {
      lines.push(words);
      words = [];
      words.push(span);
      position = span.offsetTop;
    }
    if (index + 1 === spans.length) {
      lines.push(words);
    }
  });
  return lines;
}
function splitText(text, expression) {
  const splits = text.split('<br>');
  let words = [];
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(splits, (item, index) => {
    if (index > 0) {
      words.push('<br>');
    }
    words = words.concat(item.split(expression));
    let isLink = false;
    let link = '';
    const innerHTML = [];
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(words, word => {
      if (!isLink && (word.includes('<a') || word.includes('<strong'))) {
        link = '';
        isLink = true;
      }
      if (isLink) {
        link += ` ${word}`;
      }
      if (isLink && (word.includes('/a>') || word.includes('/strong>'))) {
        innerHTML.push(link);
        link = '';
      }
      if (!isLink && link === '') {
        innerHTML.push(word);
      }
      if (isLink && (word.includes('/a>') || word.includes('/strong>'))) {
        isLink = false;
      }
    });
    words = innerHTML;
  });
  return words;
}
function parseLine(line) {
  line = line.trim();
  if (line === '' || line === ' ') {
    return line;
  } else {
    return line === '<br>' ? '<br>' : `<span>${line}</span>` + (line.length > 1 ? ' ' : '');
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80b1c78ff3e17bfb5927")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNjgyNDkwZjQ0MGZhZDA3NmEzMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBQ1A7QUFFTztBQUVmLE1BQU1JLFNBQVMsU0FBU0osMERBQVM7RUFDNUNLLFdBQVdBLENBQUEsRUFBRTtJQUNULEtBQUssQ0FBQztNQUNGQyxPQUFPLEVBQUMsWUFBWTtNQUNwQkMsUUFBUSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE1BQU0sRUFBQyxvQkFBb0I7UUFDM0JDLE1BQU0sRUFBQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxLQUFLO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTCxRQUFRLENBQUNNLFVBQVUsR0FBRVYsaURBQUssQ0FBQztNQUM1QkcsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzNCTSxVQUFVLEVBQUM7SUFDZixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLE1BQU0sR0FBRSxDQUFDO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1gsT0FBTyxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBRXZDLElBQUksQ0FBQ1csWUFBWSxDQUFDLENBQUM7RUFDdkI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFFO0lBQUU7SUFDWmpCLGtEQUFJLENBQUMsSUFBSSxDQUFDTSxRQUFRLENBQUNHLE1BQU0sRUFBQ0osT0FBTyxJQUFHO01BQ2hDQSxPQUFPLENBQUNhLE1BQU0sR0FBQ0MsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsYUFBYSxDQUFDZixPQUFPLENBQUM7TUFDL0NBLE9BQU8sQ0FBQ2dCLEdBQUcsR0FBQ2hCLE9BQU8sQ0FBQ2lCLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0VBRU47RUFFQUYsYUFBYUEsQ0FBQ0csS0FBSyxFQUFDO0lBQUM7SUFDakIsSUFBSSxDQUFDVCxNQUFNLElBQUcsQ0FB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QSxJQUFJRixNQUFNLEtBQUtFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJRCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1FBQ2pFSCxNQUFNLEdBQUcsS0FBSztNQUNoQjtJQUNGLENBQUMsQ0FBQztJQUVGeEIsS0FBSyxHQUFHakIsU0FBUztFQUNuQixDQUFDLENBQUM7RUFFRixPQUFPaUIsS0FBSztBQUNkO0FBRUEsU0FBU1EsU0FBU0EsQ0FBQ0osSUFBSSxFQUFFO0VBQ3ZCQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUM7RUFFbEIsSUFBSUMsSUFBSSxLQUFLLEVBQUUsSUFBSUEsSUFBSSxLQUFLLEdBQUcsRUFBRTtJQUMvQixPQUFPQSxJQUFJO0VBQ2IsQ0FBQyxNQUFNO0lBQ0wsT0FBT0EsSUFBSSxLQUFLLE1BQU0sR0FDbEIsTUFBTSxHQUNMLFNBQVFBLElBQUssU0FBUSxJQUFJQSxJQUFJLENBQUNoQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDM0Q7QUFDRjs7Ozs7Ozs7VUM3SUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3V0aWxzL3RleHQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NsYXNzZXMvQ29tcG9uZW50JztcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0e3NwbGl0fSBmcm9tJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBlbGVtZW50OicucHJlbG9hZGVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRzOntcbiAgICAgICAgICAgICAgICB0aXRsZTonLnByZWxvYWRlcl9fdGV4dCcsXG4gICAgICAgICAgICAgICAgbnVtYmVyOicucHJlbG9hZGVyX19udW1iZXInLFxuICAgICAgICAgICAgICAgIGltYWdlczpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9c3BsaXQoe1xuICAgICAgICAgICAgZWxlbWVudDp0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjonPGJyPidcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxlbmd0aCA9MFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsdGhpcy5lbGVtZW50cylcblxuICAgICAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gICAgfVxuXG4gICAgY3JlYXRlTG9hZGVyKCl7IC8vIOWIm+W7uuWKoOi9vemhteWQjuebtOaOpeWllOedgGFib3V0IHBhZ2XlubbkuJTlsIZhYm91dOWbvueJh+mDveaYvuekuuWHuuadpVxuICAgICAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLGVsZW1lbnQgPT57XG4gICAgICAgICAgICBlbGVtZW50Lm9ubG9hZD1fID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgICAgICAgICAgZWxlbWVudC5zcmM9ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykgICAgICAgICAgIFxuICAgICAgICB9KSBcbiAgICAgICBcbiAgICB9XG5cbiAgICBvbkFzc2V0TG9hZGVkKGltYWdlKXsvLyDliqDovb3pobXnmoTorqHnrpflk43lupTlhazlvI8gICAgIFxuICAgICAgICB0aGlzLmxlbmd0aCArPTFcbiAgICAgICAgLy8g5q+PbG9hZOS4gOasoe+8jOi/meS4quW9k+WJjeWKoOi9veeahOi/m+W6puS8muWKoOS4gFxuICAgICAgICBjb25zdCBwZXJjZW50PXRoaXMubGVuZ3RoL3RoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUw9YCR7TWF0aC5yb3VuZChwZXJjZW50KjEwMCl9JWBcbiAgICAgICAgLy8g6L+Z5Liq5piv5Yqg6L295a6M5omA5pyJ5Zu+5YOP5ZCO55qE5Yqg6L296aG155qEbnVtYmVy55qE6K6h566X5YWs5byPXG5cbiAgICAgICAgaWYocGVyY2VudCA9PT0xIClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5vbmxvYWRlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmxvYWRlZCgpey8vIOaOp+WItuWKoOi9vemhteetieW+heWkmuS5hei/m+WFpeS4u+mhteWPiuWKqOeUu1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PntcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICAgICAgICAgIGRlbGF5OjJcbiAgICAgICAgICAgICAgICAvLyDmjqfliLbliqDovb3pobXnrYnlvoXlpJrkuYXov5vlhaXkuLvpobVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LHtcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6MFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29tcGxldGVkJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pICAgXG4gICAgfVxuXG4gICAgZGVzdHJveSgpe1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gICAgfVxufSIsIi8vIOiuqeWKoOi9vemhteeahOWKqOeUu+abtOWKoOacieiuvuiuoeaEn1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgc3BsaXRzIHRleHQgaW50byBzcGFuc1xuICogQHBhcmFtIHtzdHJpbmcgfHwgSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2Jvb2x9IGFwcGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQoeyBlbGVtZW50LCBleHByZXNzaW9uID0gJyAnLCBhcHBlbmQgPSB0cnVlIH0pIHtcbiAgY29uc3Qgd29yZHMgPSBzcGxpdFRleHQoZWxlbWVudC5pbm5lckhUTUwudG9TdHJpbmcoKS50cmltKCksIGV4cHJlc3Npb24pO1xuXG4gIGxldCBpbm5lckhUTUwgPSAnJztcblxuICBlYWNoKHdvcmRzLCAobGluZSkgPT4ge1xuICAgIGlmIChsaW5lLmluZGV4T2YoJzxicj4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGxpbmUuc3BsaXQoJzxicj4nKTtcblxuICAgICAgZWFjaChsaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlubmVySFRNTCArPSBpbmRleCA+IDAgPyAnPGJyPicgKyBwYXJzZUxpbmUobGluZSkgOiBwYXJzZUxpbmUobGluZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5uZXJIVE1MICs9IHBhcnNlTGluZShsaW5lKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gIGNvbnN0IHNwYW5zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cbiAgaWYgKGFwcGVuZCkge1xuICAgIGVhY2goc3BhbnMsIChzcGFuKSA9PiB7XG4gICAgICBjb25zdCBpc1NpbmdsZUxldHRlciA9IHNwYW4udGV4dENvbnRlbnQubGVuZ3RoID09PSAxO1xuICAgICAgY29uc3QgaXNOb3RFbXB0eSA9IHNwYW4uaW5uZXJIVE1MLnRyaW0oKSAhPT0gJyc7XG4gICAgICBjb25zdCBpc05vdEFuZENoYXJhY3RlciA9IHNwYW4udGV4dENvbnRlbnQgIT09ICcmJztcbiAgICAgIGNvbnN0IGlzTm90RGFzaENoYXJhY3RlciA9IHNwYW4udGV4dENvbnRlbnQgIT09ICctJztcblxuICAgICAgaWYgKFxuICAgICAgICBpc1NpbmdsZUxldHRlciAmJlxuICAgICAgICBpc05vdEVtcHR5ICYmXG4gICAgICAgIGlzTm90QW5kQ2hhcmFjdGVyICYmXG4gICAgICAgIGlzTm90RGFzaENoYXJhY3RlclxuICAgICAgKSB7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gYCR7c3Bhbi50ZXh0Q29udGVudH0mbmJzcDtgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNwYW5zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlKHNwYW5zKSB7XG4gIGlmICghc3BhbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxpbmVzID0gW107XG4gIGxldCB3b3JkcyA9IFtdO1xuXG4gIGxldCBwb3NpdGlvbiA9IHNwYW5zWzBdLm9mZnNldFRvcDtcblxuICBlYWNoKHNwYW5zLCAoc3BhbiwgaW5kZXgpID0+IHtcbiAgICBpZiAoc3Bhbi5vZmZzZXRUb3AgPT09IHBvc2l0aW9uKSB7XG4gICAgICB3b3Jkcy5wdXNoKHNwYW4pO1xuICAgIH1cblxuICAgIGlmIChzcGFuLm9mZnNldFRvcCAhPT0gcG9zaXRpb24pIHtcbiAgICAgIGxpbmVzLnB1c2god29yZHMpO1xuXG4gICAgICB3b3JkcyA9IFtdO1xuICAgICAgd29yZHMucHVzaChzcGFuKTtcblxuICAgICAgcG9zaXRpb24gPSBzcGFuLm9mZnNldFRvcDtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggKyAxID09PSBzcGFucy5sZW5ndGgpIHtcbiAgICAgIGxpbmVzLnB1c2god29yZHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuXG5mdW5jdGlvbiBzcGxpdFRleHQodGV4dCwgZXhwcmVzc2lvbikge1xuICBjb25zdCBzcGxpdHMgPSB0ZXh0LnNwbGl0KCc8YnI+Jyk7XG5cbiAgbGV0IHdvcmRzID0gW107XG5cbiAgZWFjaChzcGxpdHMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHdvcmRzLnB1c2goJzxicj4nKTtcbiAgICB9XG5cbiAgICB3b3JkcyA9IHdvcmRzLmNvbmNhdChpdGVtLnNwbGl0KGV4cHJlc3Npb24pKTtcblxuICAgIGxldCBpc0xpbmsgPSBmYWxzZTtcbiAgICBsZXQgbGluayA9ICcnO1xuXG4gICAgY29uc3QgaW5uZXJIVE1MID0gW107XG5cbiAgICBlYWNoKHdvcmRzLCAod29yZCkgPT4ge1xuICAgICAgaWYgKCFpc0xpbmsgJiYgKHdvcmQuaW5jbHVkZXMoJzxhJykgfHwgd29yZC5pbmNsdWRlcygnPHN0cm9uZycpKSkge1xuICAgICAgICBsaW5rID0gJyc7XG5cbiAgICAgICAgaXNMaW5rID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTGluaykge1xuICAgICAgICBsaW5rICs9IGAgJHt3b3JkfWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0xpbmsgJiYgKHdvcmQuaW5jbHVkZXMoJy9hPicpIHx8IHdvcmQuaW5jbHVkZXMoJy9zdHJvbmc+JykpKSB7XG4gICAgICAgIGlubmVySFRNTC5wdXNoKGxpbmspO1xuXG4gICAgICAgIGxpbmsgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpbmsgJiYgbGluayA9PT0gJycpIHtcbiAgICAgICAgaW5uZXJIVE1MLnB1c2god29yZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0xpbmsgJiYgKHdvcmQuaW5jbHVkZXMoJy9hPicpIHx8IHdvcmQuaW5jbHVkZXMoJy9zdHJvbmc+JykpKSB7XG4gICAgICAgIGlzTGluayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd29yZHMgPSBpbm5lckhUTUw7XG4gIH0pO1xuXG4gIHJldHVybiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUpIHtcbiAgbGluZSA9IGxpbmUudHJpbSgpO1xuXG4gIGlmIChsaW5lID09PSAnJyB8fCBsaW5lID09PSAnICcpIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGluZSA9PT0gJzxicj4nXG4gICAgICA/ICc8YnI+J1xuICAgICAgOiBgPHNwYW4+JHtsaW5lfTwvc3Bhbj5gICsgKGxpbmUubGVuZ3RoID4gMSA/ICcgJyA6ICcnKTtcbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgwYjFjNzhmZjNlMTdiZmI1OTI3XCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImVhY2giLCJHU0FQIiwic3BsaXQiLCJQcmVsb2FkZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGl0bGVTcGFucyIsImV4cHJlc3Npb24iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlTG9hZGVyIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbmxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZCIsIndvcmRzIiwic3BsaXRUZXh0IiwidG9TdHJpbmciLCJ0cmltIiwibGluZSIsImluZGV4T2YiLCJsaW5lcyIsImluZGV4IiwicGFyc2VMaW5lIiwic3BhbnMiLCJzcGFuIiwiaXNTaW5nbGVMZXR0ZXIiLCJ0ZXh0Q29udGVudCIsImlzTm90RW1wdHkiLCJpc05vdEFuZENoYXJhY3RlciIsImlzTm90RGFzaENoYXJhY3RlciIsImNhbGN1bGF0ZSIsInBvc2l0aW9uIiwib2Zmc2V0VG9wIiwicHVzaCIsInRleHQiLCJzcGxpdHMiLCJpdGVtIiwiY29uY2F0IiwiaXNMaW5rIiwibGluayIsIndvcmQiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=