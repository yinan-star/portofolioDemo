/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var images_hermes_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! images/hermes.png */ "./app/images/hermes.png");

console.log(images_hermes_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
// 写了倒入，就要写console,log才会执行

/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML;

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var _defColors = {
  reset: ['fff', '000'],
  // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
};
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
};
var _openTags = {
  '1': 'font-weight:bold',
  // bold
  '2': 'opacity:0.5',
  // dim
  '3': '<i>',
  // italic
  '4': '<u>',
  // underscore
  '8': 'display:none',
  // hidden
  '9': '<del>' // delete
};

var _closeTags = {
  '23': '</i>',
  // reset italic
  '24': '</u>',
  // reset underscore
  '29': '</del>' // reset delete
};

[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>';
});

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML(text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text;
  }

  // Cache opened sequence.
  var ansiCodes = [];
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq];
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) {
        // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop();
        return '</span>';
      }
      // Open tag.
      ansiCodes.push(seq);
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
    }
    var ct = _closeTags[seq];
    if (ct) {
      // Pop sequence
      ansiCodes.pop();
      return ct;
    }
    return '';
  });

  // Make sure tags are closed.
  var l = ansiCodes.length;
  l > 0 && (ret += Array(l + 1).join('</span>'));
  return ret;
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.');
  }
  var _finalColors = {};
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null;
    if (!hex) {
      _finalColors[key] = _defColors[key];
      continue;
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex];
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string';
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
      }
      var defHexColor = _defColors[key];
      if (!hex[0]) {
        hex[0] = defHexColor[0];
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]];
        hex.push(defHexColor[1]);
      }
      hex = hex.slice(0, 2);
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
    }
    _finalColors[key] = hex;
  }
  _setTags(_finalColors);
};

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors);
};

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {};
if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () {
      return _openTags;
    }
  });
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () {
      return _closeTags;
    }
  });
} else {
  ansiHTML.tags.open = _openTags;
  ansiHTML.tags.close = _closeTags;
}
function _setTags(colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey;
  for (var code in _styles) {
    var color = _styles[code];
    var oriColor = colors[color] || '000';
    _openTags[code] = 'color:#' + oriColor;
    code = parseInt(code);
    _openTags[(code + 10).toString()] = 'background:#' + oriColor;
  }
}
ansiHTML.reset();

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;
  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }
  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;
  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;
    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners = events[type];
  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }
  return this;
};
function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};
EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;
  if (events !== undefined) {
    var evlistener = events[type];
    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
  all: named_references_1.namedReferences.html5
});
var encodeRegExps = {
  specialChars: /[<>'"&]/g,
  nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
  nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
  nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
  extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
};
var defaultEncodeOptions = {
  mode: 'specialChars',
  level: 'all',
  numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
  var _b = _a === void 0 ? defaultEncodeOptions : _a,
    _c = _b.mode,
    mode = _c === void 0 ? 'specialChars' : _c,
    _d = _b.numeric,
    numeric = _d === void 0 ? 'decimal' : _d,
    _e = _b.level,
    level = _e === void 0 ? 'all' : _e;
  if (!text) {
    return '';
  }
  var encodeRegExp = encodeRegExps[mode];
  var references = allNamedReferences[level].characters;
  var isHex = numeric === 'hexadecimal';
  encodeRegExp.lastIndex = 0;
  var _b = encodeRegExp.exec(text);
  var _c;
  if (_b) {
    _c = '';
    var _d = 0;
    do {
      if (_d !== _b.index) {
        _c += text.substring(_d, _b.index);
      }
      var _e = _b[0];
      var result_1 = references[_e];
      if (!result_1) {
        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
        result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
      }
      _c += result_1;
      _d = _b.index + _e.length;
    } while (_b = encodeRegExp.exec(text));
    if (_d !== text.length) {
      _c += text.substring(_d);
    }
  } else {
    _c = text;
  }
  return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
  scope: 'body',
  level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.xml
  },
  html4: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html4
  },
  html5: {
    strict: strict,
    attribute: attribute,
    body: named_references_1.bodyRegExps.html5
  }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
  all: baseDecodeRegExps.html5
});
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
  level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
  var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,
    level = _b === void 0 ? 'all' : _b;
  if (!entity) {
    return '';
  }
  var _b = entity;
  var decodeEntityLastChar_1 = entity[entity.length - 1];
  if (false) {} else if (false) {} else {
    var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
    if (decodeResultByReference_1) {
      _b = decodeResultByReference_1;
    } else if (entity[0] === '&' && entity[1] === '#') {
      var decodeSecondChar_1 = entity[2];
      var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
    }
  }
  return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
  var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,
    decodeCode_1 = decodeSecondChar_1.level,
    level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,
    _b = decodeSecondChar_1.scope,
    scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
  if (!text) {
    return '';
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === 'attribute';
  var isStrict = scope === 'strict';
  decodeRegExp.lastIndex = 0;
  var replaceMatch_1 = decodeRegExp.exec(text);
  var replaceResult_1;
  if (replaceMatch_1) {
    replaceResult_1 = '';
    var replaceLastIndex_1 = 0;
    do {
      if (replaceLastIndex_1 !== replaceMatch_1.index) {
        replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
      }
      var replaceInput_1 = replaceMatch_1[0];
      var decodeResult_1 = replaceInput_1;
      var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
      if (isAttribute && decodeEntityLastChar_2 === '=') {
        decodeResult_1 = replaceInput_1;
      } else if (isStrict && decodeEntityLastChar_2 !== ';') {
        decodeResult_1 = replaceInput_1;
      } else {
        var decodeResultByReference_2 = references[replaceInput_1];
        if (decodeResultByReference_2) {
          decodeResult_1 = decodeResultByReference_2;
        } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
          var decodeSecondChar_2 = replaceInput_1[2];
          var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
          decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
        }
      }
      replaceResult_1 += decodeResult_1;
      replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
    } while (replaceMatch_1 = decodeRegExp.exec(text));
    if (replaceLastIndex_1 !== text.length) {
      replaceResult_1 += text.substring(replaceLastIndex_1);
    }
  } else {
    replaceResult_1 = text;
  }
  return replaceResult_1;
}
exports.decode = decode;

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
exports.namedReferences = {
  xml: {
    entities: {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
      "&amp;": "&"
    },
    characters: {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
      "&": "&amp;"
    }
  },
  html4: {
    entities: {
      "&apos;": "'",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&cent": "¢",
      "&cent;": "¢",
      "&pound": "£",
      "&pound;": "£",
      "&curren": "¤",
      "&curren;": "¤",
      "&yen": "¥",
      "&yen;": "¥",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&sect": "§",
      "&sect;": "§",
      "&uml": "¨",
      "&uml;": "¨",
      "&copy": "©",
      "&copy;": "©",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&laquo": "«",
      "&laquo;": "«",
      "&not": "¬",
      "&not;": "¬",
      "&shy": "­",
      "&shy;": "­",
      "&reg": "®",
      "&reg;": "®",
      "&macr": "¯",
      "&macr;": "¯",
      "&deg": "°",
      "&deg;": "°",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&acute": "´",
      "&acute;": "´",
      "&micro": "µ",
      "&micro;": "µ",
      "&para": "¶",
      "&para;": "¶",
      "&middot": "·",
      "&middot;": "·",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&ordm": "º",
      "&ordm;": "º",
      "&raquo": "»",
      "&raquo;": "»",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&times": "×",
      "&times;": "×",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&agrave": "à",
      "&agrave;": "à",
      "&aacute": "á",
      "&aacute;": "á",
      "&acirc": "â",
      "&acirc;": "â",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&aring": "å",
      "&aring;": "å",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&egrave": "è",
      "&egrave;": "è",
      "&eacute": "é",
      "&eacute;": "é",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&euml": "ë",
      "&euml;": "ë",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&iacute": "í",
      "&iacute;": "í",
      "&icirc": "î",
      "&icirc;": "î",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&eth": "ð",
      "&eth;": "ð",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&divide": "÷",
      "&divide;": "÷",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&quot": '"',
      "&quot;": '"',
      "&amp": "&",
      "&amp;": "&",
      "&lt": "<",
      "&lt;": "<",
      "&gt": ">",
      "&gt;": ">",
      "&OElig;": "Œ",
      "&oelig;": "œ",
      "&Scaron;": "Š",
      "&scaron;": "š",
      "&Yuml;": "Ÿ",
      "&circ;": "ˆ",
      "&tilde;": "˜",
      "&ensp;": " ",
      "&emsp;": " ",
      "&thinsp;": " ",
      "&zwnj;": "‌",
      "&zwj;": "‍",
      "&lrm;": "‎",
      "&rlm;": "‏",
      "&ndash;": "–",
      "&mdash;": "—",
      "&lsquo;": "‘",
      "&rsquo;": "’",
      "&sbquo;": "‚",
      "&ldquo;": "“",
      "&rdquo;": "”",
      "&bdquo;": "„",
      "&dagger;": "†",
      "&Dagger;": "‡",
      "&permil;": "‰",
      "&lsaquo;": "‹",
      "&rsaquo;": "›",
      "&euro;": "€",
      "&fnof;": "ƒ",
      "&Alpha;": "Α",
      "&Beta;": "Β",
      "&Gamma;": "Γ",
      "&Delta;": "Δ",
      "&Epsilon;": "Ε",
      "&Zeta;": "Ζ",
      "&Eta;": "Η",
      "&Theta;": "Θ",
      "&Iota;": "Ι",
      "&Kappa;": "Κ",
      "&Lambda;": "Λ",
      "&Mu;": "Μ",
      "&Nu;": "Ν",
      "&Xi;": "Ξ",
      "&Omicron;": "Ο",
      "&Pi;": "Π",
      "&Rho;": "Ρ",
      "&Sigma;": "Σ",
      "&Tau;": "Τ",
      "&Upsilon;": "Υ",
      "&Phi;": "Φ",
      "&Chi;": "Χ",
      "&Psi;": "Ψ",
      "&Omega;": "Ω",
      "&alpha;": "α",
      "&beta;": "β",
      "&gamma;": "γ",
      "&delta;": "δ",
      "&epsilon;": "ε",
      "&zeta;": "ζ",
      "&eta;": "η",
      "&theta;": "θ",
      "&iota;": "ι",
      "&kappa;": "κ",
      "&lambda;": "λ",
      "&mu;": "μ",
      "&nu;": "ν",
      "&xi;": "ξ",
      "&omicron;": "ο",
      "&pi;": "π",
      "&rho;": "ρ",
      "&sigmaf;": "ς",
      "&sigma;": "σ",
      "&tau;": "τ",
      "&upsilon;": "υ",
      "&phi;": "φ",
      "&chi;": "χ",
      "&psi;": "ψ",
      "&omega;": "ω",
      "&thetasym;": "ϑ",
      "&upsih;": "ϒ",
      "&piv;": "ϖ",
      "&bull;": "•",
      "&hellip;": "…",
      "&prime;": "′",
      "&Prime;": "″",
      "&oline;": "‾",
      "&frasl;": "⁄",
      "&weierp;": "℘",
      "&image;": "ℑ",
      "&real;": "ℜ",
      "&trade;": "™",
      "&alefsym;": "ℵ",
      "&larr;": "←",
      "&uarr;": "↑",
      "&rarr;": "→",
      "&darr;": "↓",
      "&harr;": "↔",
      "&crarr;": "↵",
      "&lArr;": "⇐",
      "&uArr;": "⇑",
      "&rArr;": "⇒",
      "&dArr;": "⇓",
      "&hArr;": "⇔",
      "&forall;": "∀",
      "&part;": "∂",
      "&exist;": "∃",
      "&empty;": "∅",
      "&nabla;": "∇",
      "&isin;": "∈",
      "&notin;": "∉",
      "&ni;": "∋",
      "&prod;": "∏",
      "&sum;": "∑",
      "&minus;": "−",
      "&lowast;": "∗",
      "&radic;": "√",
      "&prop;": "∝",
      "&infin;": "∞",
      "&ang;": "∠",
      "&and;": "∧",
      "&or;": "∨",
      "&cap;": "∩",
      "&cup;": "∪",
      "&int;": "∫",
      "&there4;": "∴",
      "&sim;": "∼",
      "&cong;": "≅",
      "&asymp;": "≈",
      "&ne;": "≠",
      "&equiv;": "≡",
      "&le;": "≤",
      "&ge;": "≥",
      "&sub;": "⊂",
      "&sup;": "⊃",
      "&nsub;": "⊄",
      "&sube;": "⊆",
      "&supe;": "⊇",
      "&oplus;": "⊕",
      "&otimes;": "⊗",
      "&perp;": "⊥",
      "&sdot;": "⋅",
      "&lceil;": "⌈",
      "&rceil;": "⌉",
      "&lfloor;": "⌊",
      "&rfloor;": "⌋",
      "&lang;": "〈",
      "&rang;": "〉",
      "&loz;": "◊",
      "&spades;": "♠",
      "&clubs;": "♣",
      "&hearts;": "♥",
      "&diams;": "♦"
    },
    characters: {
      "'": "&apos;",
      " ": "&nbsp;",
      "¡": "&iexcl;",
      "¢": "&cent;",
      "£": "&pound;",
      "¤": "&curren;",
      "¥": "&yen;",
      "¦": "&brvbar;",
      "§": "&sect;",
      "¨": "&uml;",
      "©": "&copy;",
      "ª": "&ordf;",
      "«": "&laquo;",
      "¬": "&not;",
      "­": "&shy;",
      "®": "&reg;",
      "¯": "&macr;",
      "°": "&deg;",
      "±": "&plusmn;",
      "²": "&sup2;",
      "³": "&sup3;",
      "´": "&acute;",
      "µ": "&micro;",
      "¶": "&para;",
      "·": "&middot;",
      "¸": "&cedil;",
      "¹": "&sup1;",
      "º": "&ordm;",
      "»": "&raquo;",
      "¼": "&frac14;",
      "½": "&frac12;",
      "¾": "&frac34;",
      "¿": "&iquest;",
      "À": "&Agrave;",
      "Á": "&Aacute;",
      "Â": "&Acirc;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "Å": "&Aring;",
      "Æ": "&AElig;",
      "Ç": "&Ccedil;",
      "È": "&Egrave;",
      "É": "&Eacute;",
      "Ê": "&Ecirc;",
      "Ë": "&Euml;",
      "Ì": "&Igrave;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "Ï": "&Iuml;",
      "Ð": "&ETH;",
      "Ñ": "&Ntilde;",
      "Ò": "&Ograve;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "Õ": "&Otilde;",
      "Ö": "&Ouml;",
      "×": "&times;",
      "Ø": "&Oslash;",
      "Ù": "&Ugrave;",
      "Ú": "&Uacute;",
      "Û": "&Ucirc;",
      "Ü": "&Uuml;",
      "Ý": "&Yacute;",
      "Þ": "&THORN;",
      "ß": "&szlig;",
      "à": "&agrave;",
      "á": "&aacute;",
      "â": "&acirc;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "å": "&aring;",
      "æ": "&aelig;",
      "ç": "&ccedil;",
      "è": "&egrave;",
      "é": "&eacute;",
      "ê": "&ecirc;",
      "ë": "&euml;",
      "ì": "&igrave;",
      "í": "&iacute;",
      "î": "&icirc;",
      "ï": "&iuml;",
      "ð": "&eth;",
      "ñ": "&ntilde;",
      "ò": "&ograve;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "õ": "&otilde;",
      "ö": "&ouml;",
      "÷": "&divide;",
      "ø": "&oslash;",
      "ù": "&ugrave;",
      "ú": "&uacute;",
      "û": "&ucirc;",
      "ü": "&uuml;",
      "ý": "&yacute;",
      "þ": "&thorn;",
      "ÿ": "&yuml;",
      '"': "&quot;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "Œ": "&OElig;",
      "œ": "&oelig;",
      "Š": "&Scaron;",
      "š": "&scaron;",
      "Ÿ": "&Yuml;",
      "ˆ": "&circ;",
      "˜": "&tilde;",
      " ": "&ensp;",
      " ": "&emsp;",
      " ": "&thinsp;",
      "‌": "&zwnj;",
      "‍": "&zwj;",
      "‎": "&lrm;",
      "‏": "&rlm;",
      "–": "&ndash;",
      "—": "&mdash;",
      "‘": "&lsquo;",
      "’": "&rsquo;",
      "‚": "&sbquo;",
      "“": "&ldquo;",
      "”": "&rdquo;",
      "„": "&bdquo;",
      "†": "&dagger;",
      "‡": "&Dagger;",
      "‰": "&permil;",
      "‹": "&lsaquo;",
      "›": "&rsaquo;",
      "€": "&euro;",
      "ƒ": "&fnof;",
      "Α": "&Alpha;",
      "Β": "&Beta;",
      "Γ": "&Gamma;",
      "Δ": "&Delta;",
      "Ε": "&Epsilon;",
      "Ζ": "&Zeta;",
      "Η": "&Eta;",
      "Θ": "&Theta;",
      "Ι": "&Iota;",
      "Κ": "&Kappa;",
      "Λ": "&Lambda;",
      "Μ": "&Mu;",
      "Ν": "&Nu;",
      "Ξ": "&Xi;",
      "Ο": "&Omicron;",
      "Π": "&Pi;",
      "Ρ": "&Rho;",
      "Σ": "&Sigma;",
      "Τ": "&Tau;",
      "Υ": "&Upsilon;",
      "Φ": "&Phi;",
      "Χ": "&Chi;",
      "Ψ": "&Psi;",
      "Ω": "&Omega;",
      "α": "&alpha;",
      "β": "&beta;",
      "γ": "&gamma;",
      "δ": "&delta;",
      "ε": "&epsilon;",
      "ζ": "&zeta;",
      "η": "&eta;",
      "θ": "&theta;",
      "ι": "&iota;",
      "κ": "&kappa;",
      "λ": "&lambda;",
      "μ": "&mu;",
      "ν": "&nu;",
      "ξ": "&xi;",
      "ο": "&omicron;",
      "π": "&pi;",
      "ρ": "&rho;",
      "ς": "&sigmaf;",
      "σ": "&sigma;",
      "τ": "&tau;",
      "υ": "&upsilon;",
      "φ": "&phi;",
      "χ": "&chi;",
      "ψ": "&psi;",
      "ω": "&omega;",
      "ϑ": "&thetasym;",
      "ϒ": "&upsih;",
      "ϖ": "&piv;",
      "•": "&bull;",
      "…": "&hellip;",
      "′": "&prime;",
      "″": "&Prime;",
      "‾": "&oline;",
      "⁄": "&frasl;",
      "℘": "&weierp;",
      "ℑ": "&image;",
      "ℜ": "&real;",
      "™": "&trade;",
      "ℵ": "&alefsym;",
      "←": "&larr;",
      "↑": "&uarr;",
      "→": "&rarr;",
      "↓": "&darr;",
      "↔": "&harr;",
      "↵": "&crarr;",
      "⇐": "&lArr;",
      "⇑": "&uArr;",
      "⇒": "&rArr;",
      "⇓": "&dArr;",
      "⇔": "&hArr;",
      "∀": "&forall;",
      "∂": "&part;",
      "∃": "&exist;",
      "∅": "&empty;",
      "∇": "&nabla;",
      "∈": "&isin;",
      "∉": "&notin;",
      "∋": "&ni;",
      "∏": "&prod;",
      "∑": "&sum;",
      "−": "&minus;",
      "∗": "&lowast;",
      "√": "&radic;",
      "∝": "&prop;",
      "∞": "&infin;",
      "∠": "&ang;",
      "∧": "&and;",
      "∨": "&or;",
      "∩": "&cap;",
      "∪": "&cup;",
      "∫": "&int;",
      "∴": "&there4;",
      "∼": "&sim;",
      "≅": "&cong;",
      "≈": "&asymp;",
      "≠": "&ne;",
      "≡": "&equiv;",
      "≤": "&le;",
      "≥": "&ge;",
      "⊂": "&sub;",
      "⊃": "&sup;",
      "⊄": "&nsub;",
      "⊆": "&sube;",
      "⊇": "&supe;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "⊥": "&perp;",
      "⋅": "&sdot;",
      "⌈": "&lceil;",
      "⌉": "&rceil;",
      "⌊": "&lfloor;",
      "⌋": "&rfloor;",
      "〈": "&lang;",
      "〉": "&rang;",
      "◊": "&loz;",
      "♠": "&spades;",
      "♣": "&clubs;",
      "♥": "&hearts;",
      "♦": "&diams;"
    }
  },
  html5: {
    entities: {
      "&AElig": "Æ",
      "&AElig;": "Æ",
      "&AMP": "&",
      "&AMP;": "&",
      "&Aacute": "Á",
      "&Aacute;": "Á",
      "&Abreve;": "Ă",
      "&Acirc": "Â",
      "&Acirc;": "Â",
      "&Acy;": "А",
      "&Afr;": "𝔄",
      "&Agrave": "À",
      "&Agrave;": "À",
      "&Alpha;": "Α",
      "&Amacr;": "Ā",
      "&And;": "⩓",
      "&Aogon;": "Ą",
      "&Aopf;": "𝔸",
      "&ApplyFunction;": "⁡",
      "&Aring": "Å",
      "&Aring;": "Å",
      "&Ascr;": "𝒜",
      "&Assign;": "≔",
      "&Atilde": "Ã",
      "&Atilde;": "Ã",
      "&Auml": "Ä",
      "&Auml;": "Ä",
      "&Backslash;": "∖",
      "&Barv;": "⫧",
      "&Barwed;": "⌆",
      "&Bcy;": "Б",
      "&Because;": "∵",
      "&Bernoullis;": "ℬ",
      "&Beta;": "Β",
      "&Bfr;": "𝔅",
      "&Bopf;": "𝔹",
      "&Breve;": "˘",
      "&Bscr;": "ℬ",
      "&Bumpeq;": "≎",
      "&CHcy;": "Ч",
      "&COPY": "©",
      "&COPY;": "©",
      "&Cacute;": "Ć",
      "&Cap;": "⋒",
      "&CapitalDifferentialD;": "ⅅ",
      "&Cayleys;": "ℭ",
      "&Ccaron;": "Č",
      "&Ccedil": "Ç",
      "&Ccedil;": "Ç",
      "&Ccirc;": "Ĉ",
      "&Cconint;": "∰",
      "&Cdot;": "Ċ",
      "&Cedilla;": "¸",
      "&CenterDot;": "·",
      "&Cfr;": "ℭ",
      "&Chi;": "Χ",
      "&CircleDot;": "⊙",
      "&CircleMinus;": "⊖",
      "&CirclePlus;": "⊕",
      "&CircleTimes;": "⊗",
      "&ClockwiseContourIntegral;": "∲",
      "&CloseCurlyDoubleQuote;": "”",
      "&CloseCurlyQuote;": "’",
      "&Colon;": "∷",
      "&Colone;": "⩴",
      "&Congruent;": "≡",
      "&Conint;": "∯",
      "&ContourIntegral;": "∮",
      "&Copf;": "ℂ",
      "&Coproduct;": "∐",
      "&CounterClockwiseContourIntegral;": "∳",
      "&Cross;": "⨯",
      "&Cscr;": "𝒞",
      "&Cup;": "⋓",
      "&CupCap;": "≍",
      "&DD;": "ⅅ",
      "&DDotrahd;": "⤑",
      "&DJcy;": "Ђ",
      "&DScy;": "Ѕ",
      "&DZcy;": "Џ",
      "&Dagger;": "‡",
      "&Darr;": "↡",
      "&Dashv;": "⫤",
      "&Dcaron;": "Ď",
      "&Dcy;": "Д",
      "&Del;": "∇",
      "&Delta;": "Δ",
      "&Dfr;": "𝔇",
      "&DiacriticalAcute;": "´",
      "&DiacriticalDot;": "˙",
      "&DiacriticalDoubleAcute;": "˝",
      "&DiacriticalGrave;": "`",
      "&DiacriticalTilde;": "˜",
      "&Diamond;": "⋄",
      "&DifferentialD;": "ⅆ",
      "&Dopf;": "𝔻",
      "&Dot;": "¨",
      "&DotDot;": "⃜",
      "&DotEqual;": "≐",
      "&DoubleContourIntegral;": "∯",
      "&DoubleDot;": "¨",
      "&DoubleDownArrow;": "⇓",
      "&DoubleLeftArrow;": "⇐",
      "&DoubleLeftRightArrow;": "⇔",
      "&DoubleLeftTee;": "⫤",
      "&DoubleLongLeftArrow;": "⟸",
      "&DoubleLongLeftRightArrow;": "⟺",
      "&DoubleLongRightArrow;": "⟹",
      "&DoubleRightArrow;": "⇒",
      "&DoubleRightTee;": "⊨",
      "&DoubleUpArrow;": "⇑",
      "&DoubleUpDownArrow;": "⇕",
      "&DoubleVerticalBar;": "∥",
      "&DownArrow;": "↓",
      "&DownArrowBar;": "⤓",
      "&DownArrowUpArrow;": "⇵",
      "&DownBreve;": "̑",
      "&DownLeftRightVector;": "⥐",
      "&DownLeftTeeVector;": "⥞",
      "&DownLeftVector;": "↽",
      "&DownLeftVectorBar;": "⥖",
      "&DownRightTeeVector;": "⥟",
      "&DownRightVector;": "⇁",
      "&DownRightVectorBar;": "⥗",
      "&DownTee;": "⊤",
      "&DownTeeArrow;": "↧",
      "&Downarrow;": "⇓",
      "&Dscr;": "𝒟",
      "&Dstrok;": "Đ",
      "&ENG;": "Ŋ",
      "&ETH": "Ð",
      "&ETH;": "Ð",
      "&Eacute": "É",
      "&Eacute;": "É",
      "&Ecaron;": "Ě",
      "&Ecirc": "Ê",
      "&Ecirc;": "Ê",
      "&Ecy;": "Э",
      "&Edot;": "Ė",
      "&Efr;": "𝔈",
      "&Egrave": "È",
      "&Egrave;": "È",
      "&Element;": "∈",
      "&Emacr;": "Ē",
      "&EmptySmallSquare;": "◻",
      "&EmptyVerySmallSquare;": "▫",
      "&Eogon;": "Ę",
      "&Eopf;": "𝔼",
      "&Epsilon;": "Ε",
      "&Equal;": "⩵",
      "&EqualTilde;": "≂",
      "&Equilibrium;": "⇌",
      "&Escr;": "ℰ",
      "&Esim;": "⩳",
      "&Eta;": "Η",
      "&Euml": "Ë",
      "&Euml;": "Ë",
      "&Exists;": "∃",
      "&ExponentialE;": "ⅇ",
      "&Fcy;": "Ф",
      "&Ffr;": "𝔉",
      "&FilledSmallSquare;": "◼",
      "&FilledVerySmallSquare;": "▪",
      "&Fopf;": "𝔽",
      "&ForAll;": "∀",
      "&Fouriertrf;": "ℱ",
      "&Fscr;": "ℱ",
      "&GJcy;": "Ѓ",
      "&GT": ">",
      "&GT;": ">",
      "&Gamma;": "Γ",
      "&Gammad;": "Ϝ",
      "&Gbreve;": "Ğ",
      "&Gcedil;": "Ģ",
      "&Gcirc;": "Ĝ",
      "&Gcy;": "Г",
      "&Gdot;": "Ġ",
      "&Gfr;": "𝔊",
      "&Gg;": "⋙",
      "&Gopf;": "𝔾",
      "&GreaterEqual;": "≥",
      "&GreaterEqualLess;": "⋛",
      "&GreaterFullEqual;": "≧",
      "&GreaterGreater;": "⪢",
      "&GreaterLess;": "≷",
      "&GreaterSlantEqual;": "⩾",
      "&GreaterTilde;": "≳",
      "&Gscr;": "𝒢",
      "&Gt;": "≫",
      "&HARDcy;": "Ъ",
      "&Hacek;": "ˇ",
      "&Hat;": "^",
      "&Hcirc;": "Ĥ",
      "&Hfr;": "ℌ",
      "&HilbertSpace;": "ℋ",
      "&Hopf;": "ℍ",
      "&HorizontalLine;": "─",
      "&Hscr;": "ℋ",
      "&Hstrok;": "Ħ",
      "&HumpDownHump;": "≎",
      "&HumpEqual;": "≏",
      "&IEcy;": "Е",
      "&IJlig;": "Ĳ",
      "&IOcy;": "Ё",
      "&Iacute": "Í",
      "&Iacute;": "Í",
      "&Icirc": "Î",
      "&Icirc;": "Î",
      "&Icy;": "И",
      "&Idot;": "İ",
      "&Ifr;": "ℑ",
      "&Igrave": "Ì",
      "&Igrave;": "Ì",
      "&Im;": "ℑ",
      "&Imacr;": "Ī",
      "&ImaginaryI;": "ⅈ",
      "&Implies;": "⇒",
      "&Int;": "∬",
      "&Integral;": "∫",
      "&Intersection;": "⋂",
      "&InvisibleComma;": "⁣",
      "&InvisibleTimes;": "⁢",
      "&Iogon;": "Į",
      "&Iopf;": "𝕀",
      "&Iota;": "Ι",
      "&Iscr;": "ℐ",
      "&Itilde;": "Ĩ",
      "&Iukcy;": "І",
      "&Iuml": "Ï",
      "&Iuml;": "Ï",
      "&Jcirc;": "Ĵ",
      "&Jcy;": "Й",
      "&Jfr;": "𝔍",
      "&Jopf;": "𝕁",
      "&Jscr;": "𝒥",
      "&Jsercy;": "Ј",
      "&Jukcy;": "Є",
      "&KHcy;": "Х",
      "&KJcy;": "Ќ",
      "&Kappa;": "Κ",
      "&Kcedil;": "Ķ",
      "&Kcy;": "К",
      "&Kfr;": "𝔎",
      "&Kopf;": "𝕂",
      "&Kscr;": "𝒦",
      "&LJcy;": "Љ",
      "&LT": "<",
      "&LT;": "<",
      "&Lacute;": "Ĺ",
      "&Lambda;": "Λ",
      "&Lang;": "⟪",
      "&Laplacetrf;": "ℒ",
      "&Larr;": "↞",
      "&Lcaron;": "Ľ",
      "&Lcedil;": "Ļ",
      "&Lcy;": "Л",
      "&LeftAngleBracket;": "⟨",
      "&LeftArrow;": "←",
      "&LeftArrowBar;": "⇤",
      "&LeftArrowRightArrow;": "⇆",
      "&LeftCeiling;": "⌈",
      "&LeftDoubleBracket;": "⟦",
      "&LeftDownTeeVector;": "⥡",
      "&LeftDownVector;": "⇃",
      "&LeftDownVectorBar;": "⥙",
      "&LeftFloor;": "⌊",
      "&LeftRightArrow;": "↔",
      "&LeftRightVector;": "⥎",
      "&LeftTee;": "⊣",
      "&LeftTeeArrow;": "↤",
      "&LeftTeeVector;": "⥚",
      "&LeftTriangle;": "⊲",
      "&LeftTriangleBar;": "⧏",
      "&LeftTriangleEqual;": "⊴",
      "&LeftUpDownVector;": "⥑",
      "&LeftUpTeeVector;": "⥠",
      "&LeftUpVector;": "↿",
      "&LeftUpVectorBar;": "⥘",
      "&LeftVector;": "↼",
      "&LeftVectorBar;": "⥒",
      "&Leftarrow;": "⇐",
      "&Leftrightarrow;": "⇔",
      "&LessEqualGreater;": "⋚",
      "&LessFullEqual;": "≦",
      "&LessGreater;": "≶",
      "&LessLess;": "⪡",
      "&LessSlantEqual;": "⩽",
      "&LessTilde;": "≲",
      "&Lfr;": "𝔏",
      "&Ll;": "⋘",
      "&Lleftarrow;": "⇚",
      "&Lmidot;": "Ŀ",
      "&LongLeftArrow;": "⟵",
      "&LongLeftRightArrow;": "⟷",
      "&LongRightArrow;": "⟶",
      "&Longleftarrow;": "⟸",
      "&Longleftrightarrow;": "⟺",
      "&Longrightarrow;": "⟹",
      "&Lopf;": "𝕃",
      "&LowerLeftArrow;": "↙",
      "&LowerRightArrow;": "↘",
      "&Lscr;": "ℒ",
      "&Lsh;": "↰",
      "&Lstrok;": "Ł",
      "&Lt;": "≪",
      "&Map;": "⤅",
      "&Mcy;": "М",
      "&MediumSpace;": " ",
      "&Mellintrf;": "ℳ",
      "&Mfr;": "𝔐",
      "&MinusPlus;": "∓",
      "&Mopf;": "𝕄",
      "&Mscr;": "ℳ",
      "&Mu;": "Μ",
      "&NJcy;": "Њ",
      "&Nacute;": "Ń",
      "&Ncaron;": "Ň",
      "&Ncedil;": "Ņ",
      "&Ncy;": "Н",
      "&NegativeMediumSpace;": "​",
      "&NegativeThickSpace;": "​",
      "&NegativeThinSpace;": "​",
      "&NegativeVeryThinSpace;": "​",
      "&NestedGreaterGreater;": "≫",
      "&NestedLessLess;": "≪",
      "&NewLine;": "\n",
      "&Nfr;": "𝔑",
      "&NoBreak;": "⁠",
      "&NonBreakingSpace;": " ",
      "&Nopf;": "ℕ",
      "&Not;": "⫬",
      "&NotCongruent;": "≢",
      "&NotCupCap;": "≭",
      "&NotDoubleVerticalBar;": "∦",
      "&NotElement;": "∉",
      "&NotEqual;": "≠",
      "&NotEqualTilde;": "≂̸",
      "&NotExists;": "∄",
      "&NotGreater;": "≯",
      "&NotGreaterEqual;": "≱",
      "&NotGreaterFullEqual;": "≧̸",
      "&NotGreaterGreater;": "≫̸",
      "&NotGreaterLess;": "≹",
      "&NotGreaterSlantEqual;": "⩾̸",
      "&NotGreaterTilde;": "≵",
      "&NotHumpDownHump;": "≎̸",
      "&NotHumpEqual;": "≏̸",
      "&NotLeftTriangle;": "⋪",
      "&NotLeftTriangleBar;": "⧏̸",
      "&NotLeftTriangleEqual;": "⋬",
      "&NotLess;": "≮",
      "&NotLessEqual;": "≰",
      "&NotLessGreater;": "≸",
      "&NotLessLess;": "≪̸",
      "&NotLessSlantEqual;": "⩽̸",
      "&NotLessTilde;": "≴",
      "&NotNestedGreaterGreater;": "⪢̸",
      "&NotNestedLessLess;": "⪡̸",
      "&NotPrecedes;": "⊀",
      "&NotPrecedesEqual;": "⪯̸",
      "&NotPrecedesSlantEqual;": "⋠",
      "&NotReverseElement;": "∌",
      "&NotRightTriangle;": "⋫",
      "&NotRightTriangleBar;": "⧐̸",
      "&NotRightTriangleEqual;": "⋭",
      "&NotSquareSubset;": "⊏̸",
      "&NotSquareSubsetEqual;": "⋢",
      "&NotSquareSuperset;": "⊐̸",
      "&NotSquareSupersetEqual;": "⋣",
      "&NotSubset;": "⊂⃒",
      "&NotSubsetEqual;": "⊈",
      "&NotSucceeds;": "⊁",
      "&NotSucceedsEqual;": "⪰̸",
      "&NotSucceedsSlantEqual;": "⋡",
      "&NotSucceedsTilde;": "≿̸",
      "&NotSuperset;": "⊃⃒",
      "&NotSupersetEqual;": "⊉",
      "&NotTilde;": "≁",
      "&NotTildeEqual;": "≄",
      "&NotTildeFullEqual;": "≇",
      "&NotTildeTilde;": "≉",
      "&NotVerticalBar;": "∤",
      "&Nscr;": "𝒩",
      "&Ntilde": "Ñ",
      "&Ntilde;": "Ñ",
      "&Nu;": "Ν",
      "&OElig;": "Œ",
      "&Oacute": "Ó",
      "&Oacute;": "Ó",
      "&Ocirc": "Ô",
      "&Ocirc;": "Ô",
      "&Ocy;": "О",
      "&Odblac;": "Ő",
      "&Ofr;": "𝔒",
      "&Ograve": "Ò",
      "&Ograve;": "Ò",
      "&Omacr;": "Ō",
      "&Omega;": "Ω",
      "&Omicron;": "Ο",
      "&Oopf;": "𝕆",
      "&OpenCurlyDoubleQuote;": "“",
      "&OpenCurlyQuote;": "‘",
      "&Or;": "⩔",
      "&Oscr;": "𝒪",
      "&Oslash": "Ø",
      "&Oslash;": "Ø",
      "&Otilde": "Õ",
      "&Otilde;": "Õ",
      "&Otimes;": "⨷",
      "&Ouml": "Ö",
      "&Ouml;": "Ö",
      "&OverBar;": "‾",
      "&OverBrace;": "⏞",
      "&OverBracket;": "⎴",
      "&OverParenthesis;": "⏜",
      "&PartialD;": "∂",
      "&Pcy;": "П",
      "&Pfr;": "𝔓",
      "&Phi;": "Φ",
      "&Pi;": "Π",
      "&PlusMinus;": "±",
      "&Poincareplane;": "ℌ",
      "&Popf;": "ℙ",
      "&Pr;": "⪻",
      "&Precedes;": "≺",
      "&PrecedesEqual;": "⪯",
      "&PrecedesSlantEqual;": "≼",
      "&PrecedesTilde;": "≾",
      "&Prime;": "″",
      "&Product;": "∏",
      "&Proportion;": "∷",
      "&Proportional;": "∝",
      "&Pscr;": "𝒫",
      "&Psi;": "Ψ",
      "&QUOT": '"',
      "&QUOT;": '"',
      "&Qfr;": "𝔔",
      "&Qopf;": "ℚ",
      "&Qscr;": "𝒬",
      "&RBarr;": "⤐",
      "&REG": "®",
      "&REG;": "®",
      "&Racute;": "Ŕ",
      "&Rang;": "⟫",
      "&Rarr;": "↠",
      "&Rarrtl;": "⤖",
      "&Rcaron;": "Ř",
      "&Rcedil;": "Ŗ",
      "&Rcy;": "Р",
      "&Re;": "ℜ",
      "&ReverseElement;": "∋",
      "&ReverseEquilibrium;": "⇋",
      "&ReverseUpEquilibrium;": "⥯",
      "&Rfr;": "ℜ",
      "&Rho;": "Ρ",
      "&RightAngleBracket;": "⟩",
      "&RightArrow;": "→",
      "&RightArrowBar;": "⇥",
      "&RightArrowLeftArrow;": "⇄",
      "&RightCeiling;": "⌉",
      "&RightDoubleBracket;": "⟧",
      "&RightDownTeeVector;": "⥝",
      "&RightDownVector;": "⇂",
      "&RightDownVectorBar;": "⥕",
      "&RightFloor;": "⌋",
      "&RightTee;": "⊢",
      "&RightTeeArrow;": "↦",
      "&RightTeeVector;": "⥛",
      "&RightTriangle;": "⊳",
      "&RightTriangleBar;": "⧐",
      "&RightTriangleEqual;": "⊵",
      "&RightUpDownVector;": "⥏",
      "&RightUpTeeVector;": "⥜",
      "&RightUpVector;": "↾",
      "&RightUpVectorBar;": "⥔",
      "&RightVector;": "⇀",
      "&RightVectorBar;": "⥓",
      "&Rightarrow;": "⇒",
      "&Ropf;": "ℝ",
      "&RoundImplies;": "⥰",
      "&Rrightarrow;": "⇛",
      "&Rscr;": "ℛ",
      "&Rsh;": "↱",
      "&RuleDelayed;": "⧴",
      "&SHCHcy;": "Щ",
      "&SHcy;": "Ш",
      "&SOFTcy;": "Ь",
      "&Sacute;": "Ś",
      "&Sc;": "⪼",
      "&Scaron;": "Š",
      "&Scedil;": "Ş",
      "&Scirc;": "Ŝ",
      "&Scy;": "С",
      "&Sfr;": "𝔖",
      "&ShortDownArrow;": "↓",
      "&ShortLeftArrow;": "←",
      "&ShortRightArrow;": "→",
      "&ShortUpArrow;": "↑",
      "&Sigma;": "Σ",
      "&SmallCircle;": "∘",
      "&Sopf;": "𝕊",
      "&Sqrt;": "√",
      "&Square;": "□",
      "&SquareIntersection;": "⊓",
      "&SquareSubset;": "⊏",
      "&SquareSubsetEqual;": "⊑",
      "&SquareSuperset;": "⊐",
      "&SquareSupersetEqual;": "⊒",
      "&SquareUnion;": "⊔",
      "&Sscr;": "𝒮",
      "&Star;": "⋆",
      "&Sub;": "⋐",
      "&Subset;": "⋐",
      "&SubsetEqual;": "⊆",
      "&Succeeds;": "≻",
      "&SucceedsEqual;": "⪰",
      "&SucceedsSlantEqual;": "≽",
      "&SucceedsTilde;": "≿",
      "&SuchThat;": "∋",
      "&Sum;": "∑",
      "&Sup;": "⋑",
      "&Superset;": "⊃",
      "&SupersetEqual;": "⊇",
      "&Supset;": "⋑",
      "&THORN": "Þ",
      "&THORN;": "Þ",
      "&TRADE;": "™",
      "&TSHcy;": "Ћ",
      "&TScy;": "Ц",
      "&Tab;": "\t",
      "&Tau;": "Τ",
      "&Tcaron;": "Ť",
      "&Tcedil;": "Ţ",
      "&Tcy;": "Т",
      "&Tfr;": "𝔗",
      "&Therefore;": "∴",
      "&Theta;": "Θ",
      "&ThickSpace;": "  ",
      "&ThinSpace;": " ",
      "&Tilde;": "∼",
      "&TildeEqual;": "≃",
      "&TildeFullEqual;": "≅",
      "&TildeTilde;": "≈",
      "&Topf;": "𝕋",
      "&TripleDot;": "⃛",
      "&Tscr;": "𝒯",
      "&Tstrok;": "Ŧ",
      "&Uacute": "Ú",
      "&Uacute;": "Ú",
      "&Uarr;": "↟",
      "&Uarrocir;": "⥉",
      "&Ubrcy;": "Ў",
      "&Ubreve;": "Ŭ",
      "&Ucirc": "Û",
      "&Ucirc;": "Û",
      "&Ucy;": "У",
      "&Udblac;": "Ű",
      "&Ufr;": "𝔘",
      "&Ugrave": "Ù",
      "&Ugrave;": "Ù",
      "&Umacr;": "Ū",
      "&UnderBar;": "_",
      "&UnderBrace;": "⏟",
      "&UnderBracket;": "⎵",
      "&UnderParenthesis;": "⏝",
      "&Union;": "⋃",
      "&UnionPlus;": "⊎",
      "&Uogon;": "Ų",
      "&Uopf;": "𝕌",
      "&UpArrow;": "↑",
      "&UpArrowBar;": "⤒",
      "&UpArrowDownArrow;": "⇅",
      "&UpDownArrow;": "↕",
      "&UpEquilibrium;": "⥮",
      "&UpTee;": "⊥",
      "&UpTeeArrow;": "↥",
      "&Uparrow;": "⇑",
      "&Updownarrow;": "⇕",
      "&UpperLeftArrow;": "↖",
      "&UpperRightArrow;": "↗",
      "&Upsi;": "ϒ",
      "&Upsilon;": "Υ",
      "&Uring;": "Ů",
      "&Uscr;": "𝒰",
      "&Utilde;": "Ũ",
      "&Uuml": "Ü",
      "&Uuml;": "Ü",
      "&VDash;": "⊫",
      "&Vbar;": "⫫",
      "&Vcy;": "В",
      "&Vdash;": "⊩",
      "&Vdashl;": "⫦",
      "&Vee;": "⋁",
      "&Verbar;": "‖",
      "&Vert;": "‖",
      "&VerticalBar;": "∣",
      "&VerticalLine;": "|",
      "&VerticalSeparator;": "❘",
      "&VerticalTilde;": "≀",
      "&VeryThinSpace;": " ",
      "&Vfr;": "𝔙",
      "&Vopf;": "𝕍",
      "&Vscr;": "𝒱",
      "&Vvdash;": "⊪",
      "&Wcirc;": "Ŵ",
      "&Wedge;": "⋀",
      "&Wfr;": "𝔚",
      "&Wopf;": "𝕎",
      "&Wscr;": "𝒲",
      "&Xfr;": "𝔛",
      "&Xi;": "Ξ",
      "&Xopf;": "𝕏",
      "&Xscr;": "𝒳",
      "&YAcy;": "Я",
      "&YIcy;": "Ї",
      "&YUcy;": "Ю",
      "&Yacute": "Ý",
      "&Yacute;": "Ý",
      "&Ycirc;": "Ŷ",
      "&Ycy;": "Ы",
      "&Yfr;": "𝔜",
      "&Yopf;": "𝕐",
      "&Yscr;": "𝒴",
      "&Yuml;": "Ÿ",
      "&ZHcy;": "Ж",
      "&Zacute;": "Ź",
      "&Zcaron;": "Ž",
      "&Zcy;": "З",
      "&Zdot;": "Ż",
      "&ZeroWidthSpace;": "​",
      "&Zeta;": "Ζ",
      "&Zfr;": "ℨ",
      "&Zopf;": "ℤ",
      "&Zscr;": "𝒵",
      "&aacute": "á",
      "&aacute;": "á",
      "&abreve;": "ă",
      "&ac;": "∾",
      "&acE;": "∾̳",
      "&acd;": "∿",
      "&acirc": "â",
      "&acirc;": "â",
      "&acute": "´",
      "&acute;": "´",
      "&acy;": "а",
      "&aelig": "æ",
      "&aelig;": "æ",
      "&af;": "⁡",
      "&afr;": "𝔞",
      "&agrave": "à",
      "&agrave;": "à",
      "&alefsym;": "ℵ",
      "&aleph;": "ℵ",
      "&alpha;": "α",
      "&amacr;": "ā",
      "&amalg;": "⨿",
      "&amp": "&",
      "&amp;": "&",
      "&and;": "∧",
      "&andand;": "⩕",
      "&andd;": "⩜",
      "&andslope;": "⩘",
      "&andv;": "⩚",
      "&ang;": "∠",
      "&ange;": "⦤",
      "&angle;": "∠",
      "&angmsd;": "∡",
      "&angmsdaa;": "⦨",
      "&angmsdab;": "⦩",
      "&angmsdac;": "⦪",
      "&angmsdad;": "⦫",
      "&angmsdae;": "⦬",
      "&angmsdaf;": "⦭",
      "&angmsdag;": "⦮",
      "&angmsdah;": "⦯",
      "&angrt;": "∟",
      "&angrtvb;": "⊾",
      "&angrtvbd;": "⦝",
      "&angsph;": "∢",
      "&angst;": "Å",
      "&angzarr;": "⍼",
      "&aogon;": "ą",
      "&aopf;": "𝕒",
      "&ap;": "≈",
      "&apE;": "⩰",
      "&apacir;": "⩯",
      "&ape;": "≊",
      "&apid;": "≋",
      "&apos;": "'",
      "&approx;": "≈",
      "&approxeq;": "≊",
      "&aring": "å",
      "&aring;": "å",
      "&ascr;": "𝒶",
      "&ast;": "*",
      "&asymp;": "≈",
      "&asympeq;": "≍",
      "&atilde": "ã",
      "&atilde;": "ã",
      "&auml": "ä",
      "&auml;": "ä",
      "&awconint;": "∳",
      "&awint;": "⨑",
      "&bNot;": "⫭",
      "&backcong;": "≌",
      "&backepsilon;": "϶",
      "&backprime;": "‵",
      "&backsim;": "∽",
      "&backsimeq;": "⋍",
      "&barvee;": "⊽",
      "&barwed;": "⌅",
      "&barwedge;": "⌅",
      "&bbrk;": "⎵",
      "&bbrktbrk;": "⎶",
      "&bcong;": "≌",
      "&bcy;": "б",
      "&bdquo;": "„",
      "&becaus;": "∵",
      "&because;": "∵",
      "&bemptyv;": "⦰",
      "&bepsi;": "϶",
      "&bernou;": "ℬ",
      "&beta;": "β",
      "&beth;": "ℶ",
      "&between;": "≬",
      "&bfr;": "𝔟",
      "&bigcap;": "⋂",
      "&bigcirc;": "◯",
      "&bigcup;": "⋃",
      "&bigodot;": "⨀",
      "&bigoplus;": "⨁",
      "&bigotimes;": "⨂",
      "&bigsqcup;": "⨆",
      "&bigstar;": "★",
      "&bigtriangledown;": "▽",
      "&bigtriangleup;": "△",
      "&biguplus;": "⨄",
      "&bigvee;": "⋁",
      "&bigwedge;": "⋀",
      "&bkarow;": "⤍",
      "&blacklozenge;": "⧫",
      "&blacksquare;": "▪",
      "&blacktriangle;": "▴",
      "&blacktriangledown;": "▾",
      "&blacktriangleleft;": "◂",
      "&blacktriangleright;": "▸",
      "&blank;": "␣",
      "&blk12;": "▒",
      "&blk14;": "░",
      "&blk34;": "▓",
      "&block;": "█",
      "&bne;": "=⃥",
      "&bnequiv;": "≡⃥",
      "&bnot;": "⌐",
      "&bopf;": "𝕓",
      "&bot;": "⊥",
      "&bottom;": "⊥",
      "&bowtie;": "⋈",
      "&boxDL;": "╗",
      "&boxDR;": "╔",
      "&boxDl;": "╖",
      "&boxDr;": "╓",
      "&boxH;": "═",
      "&boxHD;": "╦",
      "&boxHU;": "╩",
      "&boxHd;": "╤",
      "&boxHu;": "╧",
      "&boxUL;": "╝",
      "&boxUR;": "╚",
      "&boxUl;": "╜",
      "&boxUr;": "╙",
      "&boxV;": "║",
      "&boxVH;": "╬",
      "&boxVL;": "╣",
      "&boxVR;": "╠",
      "&boxVh;": "╫",
      "&boxVl;": "╢",
      "&boxVr;": "╟",
      "&boxbox;": "⧉",
      "&boxdL;": "╕",
      "&boxdR;": "╒",
      "&boxdl;": "┐",
      "&boxdr;": "┌",
      "&boxh;": "─",
      "&boxhD;": "╥",
      "&boxhU;": "╨",
      "&boxhd;": "┬",
      "&boxhu;": "┴",
      "&boxminus;": "⊟",
      "&boxplus;": "⊞",
      "&boxtimes;": "⊠",
      "&boxuL;": "╛",
      "&boxuR;": "╘",
      "&boxul;": "┘",
      "&boxur;": "└",
      "&boxv;": "│",
      "&boxvH;": "╪",
      "&boxvL;": "╡",
      "&boxvR;": "╞",
      "&boxvh;": "┼",
      "&boxvl;": "┤",
      "&boxvr;": "├",
      "&bprime;": "‵",
      "&breve;": "˘",
      "&brvbar": "¦",
      "&brvbar;": "¦",
      "&bscr;": "𝒷",
      "&bsemi;": "⁏",
      "&bsim;": "∽",
      "&bsime;": "⋍",
      "&bsol;": "\\",
      "&bsolb;": "⧅",
      "&bsolhsub;": "⟈",
      "&bull;": "•",
      "&bullet;": "•",
      "&bump;": "≎",
      "&bumpE;": "⪮",
      "&bumpe;": "≏",
      "&bumpeq;": "≏",
      "&cacute;": "ć",
      "&cap;": "∩",
      "&capand;": "⩄",
      "&capbrcup;": "⩉",
      "&capcap;": "⩋",
      "&capcup;": "⩇",
      "&capdot;": "⩀",
      "&caps;": "∩︀",
      "&caret;": "⁁",
      "&caron;": "ˇ",
      "&ccaps;": "⩍",
      "&ccaron;": "č",
      "&ccedil": "ç",
      "&ccedil;": "ç",
      "&ccirc;": "ĉ",
      "&ccups;": "⩌",
      "&ccupssm;": "⩐",
      "&cdot;": "ċ",
      "&cedil": "¸",
      "&cedil;": "¸",
      "&cemptyv;": "⦲",
      "&cent": "¢",
      "&cent;": "¢",
      "&centerdot;": "·",
      "&cfr;": "𝔠",
      "&chcy;": "ч",
      "&check;": "✓",
      "&checkmark;": "✓",
      "&chi;": "χ",
      "&cir;": "○",
      "&cirE;": "⧃",
      "&circ;": "ˆ",
      "&circeq;": "≗",
      "&circlearrowleft;": "↺",
      "&circlearrowright;": "↻",
      "&circledR;": "®",
      "&circledS;": "Ⓢ",
      "&circledast;": "⊛",
      "&circledcirc;": "⊚",
      "&circleddash;": "⊝",
      "&cire;": "≗",
      "&cirfnint;": "⨐",
      "&cirmid;": "⫯",
      "&cirscir;": "⧂",
      "&clubs;": "♣",
      "&clubsuit;": "♣",
      "&colon;": ":",
      "&colone;": "≔",
      "&coloneq;": "≔",
      "&comma;": ",",
      "&commat;": "@",
      "&comp;": "∁",
      "&compfn;": "∘",
      "&complement;": "∁",
      "&complexes;": "ℂ",
      "&cong;": "≅",
      "&congdot;": "⩭",
      "&conint;": "∮",
      "&copf;": "𝕔",
      "&coprod;": "∐",
      "&copy": "©",
      "&copy;": "©",
      "&copysr;": "℗",
      "&crarr;": "↵",
      "&cross;": "✗",
      "&cscr;": "𝒸",
      "&csub;": "⫏",
      "&csube;": "⫑",
      "&csup;": "⫐",
      "&csupe;": "⫒",
      "&ctdot;": "⋯",
      "&cudarrl;": "⤸",
      "&cudarrr;": "⤵",
      "&cuepr;": "⋞",
      "&cuesc;": "⋟",
      "&cularr;": "↶",
      "&cularrp;": "⤽",
      "&cup;": "∪",
      "&cupbrcap;": "⩈",
      "&cupcap;": "⩆",
      "&cupcup;": "⩊",
      "&cupdot;": "⊍",
      "&cupor;": "⩅",
      "&cups;": "∪︀",
      "&curarr;": "↷",
      "&curarrm;": "⤼",
      "&curlyeqprec;": "⋞",
      "&curlyeqsucc;": "⋟",
      "&curlyvee;": "⋎",
      "&curlywedge;": "⋏",
      "&curren": "¤",
      "&curren;": "¤",
      "&curvearrowleft;": "↶",
      "&curvearrowright;": "↷",
      "&cuvee;": "⋎",
      "&cuwed;": "⋏",
      "&cwconint;": "∲",
      "&cwint;": "∱",
      "&cylcty;": "⌭",
      "&dArr;": "⇓",
      "&dHar;": "⥥",
      "&dagger;": "†",
      "&daleth;": "ℸ",
      "&darr;": "↓",
      "&dash;": "‐",
      "&dashv;": "⊣",
      "&dbkarow;": "⤏",
      "&dblac;": "˝",
      "&dcaron;": "ď",
      "&dcy;": "д",
      "&dd;": "ⅆ",
      "&ddagger;": "‡",
      "&ddarr;": "⇊",
      "&ddotseq;": "⩷",
      "&deg": "°",
      "&deg;": "°",
      "&delta;": "δ",
      "&demptyv;": "⦱",
      "&dfisht;": "⥿",
      "&dfr;": "𝔡",
      "&dharl;": "⇃",
      "&dharr;": "⇂",
      "&diam;": "⋄",
      "&diamond;": "⋄",
      "&diamondsuit;": "♦",
      "&diams;": "♦",
      "&die;": "¨",
      "&digamma;": "ϝ",
      "&disin;": "⋲",
      "&div;": "÷",
      "&divide": "÷",
      "&divide;": "÷",
      "&divideontimes;": "⋇",
      "&divonx;": "⋇",
      "&djcy;": "ђ",
      "&dlcorn;": "⌞",
      "&dlcrop;": "⌍",
      "&dollar;": "$",
      "&dopf;": "𝕕",
      "&dot;": "˙",
      "&doteq;": "≐",
      "&doteqdot;": "≑",
      "&dotminus;": "∸",
      "&dotplus;": "∔",
      "&dotsquare;": "⊡",
      "&doublebarwedge;": "⌆",
      "&downarrow;": "↓",
      "&downdownarrows;": "⇊",
      "&downharpoonleft;": "⇃",
      "&downharpoonright;": "⇂",
      "&drbkarow;": "⤐",
      "&drcorn;": "⌟",
      "&drcrop;": "⌌",
      "&dscr;": "𝒹",
      "&dscy;": "ѕ",
      "&dsol;": "⧶",
      "&dstrok;": "đ",
      "&dtdot;": "⋱",
      "&dtri;": "▿",
      "&dtrif;": "▾",
      "&duarr;": "⇵",
      "&duhar;": "⥯",
      "&dwangle;": "⦦",
      "&dzcy;": "џ",
      "&dzigrarr;": "⟿",
      "&eDDot;": "⩷",
      "&eDot;": "≑",
      "&eacute": "é",
      "&eacute;": "é",
      "&easter;": "⩮",
      "&ecaron;": "ě",
      "&ecir;": "≖",
      "&ecirc": "ê",
      "&ecirc;": "ê",
      "&ecolon;": "≕",
      "&ecy;": "э",
      "&edot;": "ė",
      "&ee;": "ⅇ",
      "&efDot;": "≒",
      "&efr;": "𝔢",
      "&eg;": "⪚",
      "&egrave": "è",
      "&egrave;": "è",
      "&egs;": "⪖",
      "&egsdot;": "⪘",
      "&el;": "⪙",
      "&elinters;": "⏧",
      "&ell;": "ℓ",
      "&els;": "⪕",
      "&elsdot;": "⪗",
      "&emacr;": "ē",
      "&empty;": "∅",
      "&emptyset;": "∅",
      "&emptyv;": "∅",
      "&emsp13;": " ",
      "&emsp14;": " ",
      "&emsp;": " ",
      "&eng;": "ŋ",
      "&ensp;": " ",
      "&eogon;": "ę",
      "&eopf;": "𝕖",
      "&epar;": "⋕",
      "&eparsl;": "⧣",
      "&eplus;": "⩱",
      "&epsi;": "ε",
      "&epsilon;": "ε",
      "&epsiv;": "ϵ",
      "&eqcirc;": "≖",
      "&eqcolon;": "≕",
      "&eqsim;": "≂",
      "&eqslantgtr;": "⪖",
      "&eqslantless;": "⪕",
      "&equals;": "=",
      "&equest;": "≟",
      "&equiv;": "≡",
      "&equivDD;": "⩸",
      "&eqvparsl;": "⧥",
      "&erDot;": "≓",
      "&erarr;": "⥱",
      "&escr;": "ℯ",
      "&esdot;": "≐",
      "&esim;": "≂",
      "&eta;": "η",
      "&eth": "ð",
      "&eth;": "ð",
      "&euml": "ë",
      "&euml;": "ë",
      "&euro;": "€",
      "&excl;": "!",
      "&exist;": "∃",
      "&expectation;": "ℰ",
      "&exponentiale;": "ⅇ",
      "&fallingdotseq;": "≒",
      "&fcy;": "ф",
      "&female;": "♀",
      "&ffilig;": "ﬃ",
      "&fflig;": "ﬀ",
      "&ffllig;": "ﬄ",
      "&ffr;": "𝔣",
      "&filig;": "ﬁ",
      "&fjlig;": "fj",
      "&flat;": "♭",
      "&fllig;": "ﬂ",
      "&fltns;": "▱",
      "&fnof;": "ƒ",
      "&fopf;": "𝕗",
      "&forall;": "∀",
      "&fork;": "⋔",
      "&forkv;": "⫙",
      "&fpartint;": "⨍",
      "&frac12": "½",
      "&frac12;": "½",
      "&frac13;": "⅓",
      "&frac14": "¼",
      "&frac14;": "¼",
      "&frac15;": "⅕",
      "&frac16;": "⅙",
      "&frac18;": "⅛",
      "&frac23;": "⅔",
      "&frac25;": "⅖",
      "&frac34": "¾",
      "&frac34;": "¾",
      "&frac35;": "⅗",
      "&frac38;": "⅜",
      "&frac45;": "⅘",
      "&frac56;": "⅚",
      "&frac58;": "⅝",
      "&frac78;": "⅞",
      "&frasl;": "⁄",
      "&frown;": "⌢",
      "&fscr;": "𝒻",
      "&gE;": "≧",
      "&gEl;": "⪌",
      "&gacute;": "ǵ",
      "&gamma;": "γ",
      "&gammad;": "ϝ",
      "&gap;": "⪆",
      "&gbreve;": "ğ",
      "&gcirc;": "ĝ",
      "&gcy;": "г",
      "&gdot;": "ġ",
      "&ge;": "≥",
      "&gel;": "⋛",
      "&geq;": "≥",
      "&geqq;": "≧",
      "&geqslant;": "⩾",
      "&ges;": "⩾",
      "&gescc;": "⪩",
      "&gesdot;": "⪀",
      "&gesdoto;": "⪂",
      "&gesdotol;": "⪄",
      "&gesl;": "⋛︀",
      "&gesles;": "⪔",
      "&gfr;": "𝔤",
      "&gg;": "≫",
      "&ggg;": "⋙",
      "&gimel;": "ℷ",
      "&gjcy;": "ѓ",
      "&gl;": "≷",
      "&glE;": "⪒",
      "&gla;": "⪥",
      "&glj;": "⪤",
      "&gnE;": "≩",
      "&gnap;": "⪊",
      "&gnapprox;": "⪊",
      "&gne;": "⪈",
      "&gneq;": "⪈",
      "&gneqq;": "≩",
      "&gnsim;": "⋧",
      "&gopf;": "𝕘",
      "&grave;": "`",
      "&gscr;": "ℊ",
      "&gsim;": "≳",
      "&gsime;": "⪎",
      "&gsiml;": "⪐",
      "&gt": ">",
      "&gt;": ">",
      "&gtcc;": "⪧",
      "&gtcir;": "⩺",
      "&gtdot;": "⋗",
      "&gtlPar;": "⦕",
      "&gtquest;": "⩼",
      "&gtrapprox;": "⪆",
      "&gtrarr;": "⥸",
      "&gtrdot;": "⋗",
      "&gtreqless;": "⋛",
      "&gtreqqless;": "⪌",
      "&gtrless;": "≷",
      "&gtrsim;": "≳",
      "&gvertneqq;": "≩︀",
      "&gvnE;": "≩︀",
      "&hArr;": "⇔",
      "&hairsp;": " ",
      "&half;": "½",
      "&hamilt;": "ℋ",
      "&hardcy;": "ъ",
      "&harr;": "↔",
      "&harrcir;": "⥈",
      "&harrw;": "↭",
      "&hbar;": "ℏ",
      "&hcirc;": "ĥ",
      "&hearts;": "♥",
      "&heartsuit;": "♥",
      "&hellip;": "…",
      "&hercon;": "⊹",
      "&hfr;": "𝔥",
      "&hksearow;": "⤥",
      "&hkswarow;": "⤦",
      "&hoarr;": "⇿",
      "&homtht;": "∻",
      "&hookleftarrow;": "↩",
      "&hookrightarrow;": "↪",
      "&hopf;": "𝕙",
      "&horbar;": "―",
      "&hscr;": "𝒽",
      "&hslash;": "ℏ",
      "&hstrok;": "ħ",
      "&hybull;": "⁃",
      "&hyphen;": "‐",
      "&iacute": "í",
      "&iacute;": "í",
      "&ic;": "⁣",
      "&icirc": "î",
      "&icirc;": "î",
      "&icy;": "и",
      "&iecy;": "е",
      "&iexcl": "¡",
      "&iexcl;": "¡",
      "&iff;": "⇔",
      "&ifr;": "𝔦",
      "&igrave": "ì",
      "&igrave;": "ì",
      "&ii;": "ⅈ",
      "&iiiint;": "⨌",
      "&iiint;": "∭",
      "&iinfin;": "⧜",
      "&iiota;": "℩",
      "&ijlig;": "ĳ",
      "&imacr;": "ī",
      "&image;": "ℑ",
      "&imagline;": "ℐ",
      "&imagpart;": "ℑ",
      "&imath;": "ı",
      "&imof;": "⊷",
      "&imped;": "Ƶ",
      "&in;": "∈",
      "&incare;": "℅",
      "&infin;": "∞",
      "&infintie;": "⧝",
      "&inodot;": "ı",
      "&int;": "∫",
      "&intcal;": "⊺",
      "&integers;": "ℤ",
      "&intercal;": "⊺",
      "&intlarhk;": "⨗",
      "&intprod;": "⨼",
      "&iocy;": "ё",
      "&iogon;": "į",
      "&iopf;": "𝕚",
      "&iota;": "ι",
      "&iprod;": "⨼",
      "&iquest": "¿",
      "&iquest;": "¿",
      "&iscr;": "𝒾",
      "&isin;": "∈",
      "&isinE;": "⋹",
      "&isindot;": "⋵",
      "&isins;": "⋴",
      "&isinsv;": "⋳",
      "&isinv;": "∈",
      "&it;": "⁢",
      "&itilde;": "ĩ",
      "&iukcy;": "і",
      "&iuml": "ï",
      "&iuml;": "ï",
      "&jcirc;": "ĵ",
      "&jcy;": "й",
      "&jfr;": "𝔧",
      "&jmath;": "ȷ",
      "&jopf;": "𝕛",
      "&jscr;": "𝒿",
      "&jsercy;": "ј",
      "&jukcy;": "є",
      "&kappa;": "κ",
      "&kappav;": "ϰ",
      "&kcedil;": "ķ",
      "&kcy;": "к",
      "&kfr;": "𝔨",
      "&kgreen;": "ĸ",
      "&khcy;": "х",
      "&kjcy;": "ќ",
      "&kopf;": "𝕜",
      "&kscr;": "𝓀",
      "&lAarr;": "⇚",
      "&lArr;": "⇐",
      "&lAtail;": "⤛",
      "&lBarr;": "⤎",
      "&lE;": "≦",
      "&lEg;": "⪋",
      "&lHar;": "⥢",
      "&lacute;": "ĺ",
      "&laemptyv;": "⦴",
      "&lagran;": "ℒ",
      "&lambda;": "λ",
      "&lang;": "⟨",
      "&langd;": "⦑",
      "&langle;": "⟨",
      "&lap;": "⪅",
      "&laquo": "«",
      "&laquo;": "«",
      "&larr;": "←",
      "&larrb;": "⇤",
      "&larrbfs;": "⤟",
      "&larrfs;": "⤝",
      "&larrhk;": "↩",
      "&larrlp;": "↫",
      "&larrpl;": "⤹",
      "&larrsim;": "⥳",
      "&larrtl;": "↢",
      "&lat;": "⪫",
      "&latail;": "⤙",
      "&late;": "⪭",
      "&lates;": "⪭︀",
      "&lbarr;": "⤌",
      "&lbbrk;": "❲",
      "&lbrace;": "{",
      "&lbrack;": "[",
      "&lbrke;": "⦋",
      "&lbrksld;": "⦏",
      "&lbrkslu;": "⦍",
      "&lcaron;": "ľ",
      "&lcedil;": "ļ",
      "&lceil;": "⌈",
      "&lcub;": "{",
      "&lcy;": "л",
      "&ldca;": "⤶",
      "&ldquo;": "“",
      "&ldquor;": "„",
      "&ldrdhar;": "⥧",
      "&ldrushar;": "⥋",
      "&ldsh;": "↲",
      "&le;": "≤",
      "&leftarrow;": "←",
      "&leftarrowtail;": "↢",
      "&leftharpoondown;": "↽",
      "&leftharpoonup;": "↼",
      "&leftleftarrows;": "⇇",
      "&leftrightarrow;": "↔",
      "&leftrightarrows;": "⇆",
      "&leftrightharpoons;": "⇋",
      "&leftrightsquigarrow;": "↭",
      "&leftthreetimes;": "⋋",
      "&leg;": "⋚",
      "&leq;": "≤",
      "&leqq;": "≦",
      "&leqslant;": "⩽",
      "&les;": "⩽",
      "&lescc;": "⪨",
      "&lesdot;": "⩿",
      "&lesdoto;": "⪁",
      "&lesdotor;": "⪃",
      "&lesg;": "⋚︀",
      "&lesges;": "⪓",
      "&lessapprox;": "⪅",
      "&lessdot;": "⋖",
      "&lesseqgtr;": "⋚",
      "&lesseqqgtr;": "⪋",
      "&lessgtr;": "≶",
      "&lesssim;": "≲",
      "&lfisht;": "⥼",
      "&lfloor;": "⌊",
      "&lfr;": "𝔩",
      "&lg;": "≶",
      "&lgE;": "⪑",
      "&lhard;": "↽",
      "&lharu;": "↼",
      "&lharul;": "⥪",
      "&lhblk;": "▄",
      "&ljcy;": "љ",
      "&ll;": "≪",
      "&llarr;": "⇇",
      "&llcorner;": "⌞",
      "&llhard;": "⥫",
      "&lltri;": "◺",
      "&lmidot;": "ŀ",
      "&lmoust;": "⎰",
      "&lmoustache;": "⎰",
      "&lnE;": "≨",
      "&lnap;": "⪉",
      "&lnapprox;": "⪉",
      "&lne;": "⪇",
      "&lneq;": "⪇",
      "&lneqq;": "≨",
      "&lnsim;": "⋦",
      "&loang;": "⟬",
      "&loarr;": "⇽",
      "&lobrk;": "⟦",
      "&longleftarrow;": "⟵",
      "&longleftrightarrow;": "⟷",
      "&longmapsto;": "⟼",
      "&longrightarrow;": "⟶",
      "&looparrowleft;": "↫",
      "&looparrowright;": "↬",
      "&lopar;": "⦅",
      "&lopf;": "𝕝",
      "&loplus;": "⨭",
      "&lotimes;": "⨴",
      "&lowast;": "∗",
      "&lowbar;": "_",
      "&loz;": "◊",
      "&lozenge;": "◊",
      "&lozf;": "⧫",
      "&lpar;": "(",
      "&lparlt;": "⦓",
      "&lrarr;": "⇆",
      "&lrcorner;": "⌟",
      "&lrhar;": "⇋",
      "&lrhard;": "⥭",
      "&lrm;": "‎",
      "&lrtri;": "⊿",
      "&lsaquo;": "‹",
      "&lscr;": "𝓁",
      "&lsh;": "↰",
      "&lsim;": "≲",
      "&lsime;": "⪍",
      "&lsimg;": "⪏",
      "&lsqb;": "[",
      "&lsquo;": "‘",
      "&lsquor;": "‚",
      "&lstrok;": "ł",
      "&lt": "<",
      "&lt;": "<",
      "&ltcc;": "⪦",
      "&ltcir;": "⩹",
      "&ltdot;": "⋖",
      "&lthree;": "⋋",
      "&ltimes;": "⋉",
      "&ltlarr;": "⥶",
      "&ltquest;": "⩻",
      "&ltrPar;": "⦖",
      "&ltri;": "◃",
      "&ltrie;": "⊴",
      "&ltrif;": "◂",
      "&lurdshar;": "⥊",
      "&luruhar;": "⥦",
      "&lvertneqq;": "≨︀",
      "&lvnE;": "≨︀",
      "&mDDot;": "∺",
      "&macr": "¯",
      "&macr;": "¯",
      "&male;": "♂",
      "&malt;": "✠",
      "&maltese;": "✠",
      "&map;": "↦",
      "&mapsto;": "↦",
      "&mapstodown;": "↧",
      "&mapstoleft;": "↤",
      "&mapstoup;": "↥",
      "&marker;": "▮",
      "&mcomma;": "⨩",
      "&mcy;": "м",
      "&mdash;": "—",
      "&measuredangle;": "∡",
      "&mfr;": "𝔪",
      "&mho;": "℧",
      "&micro": "µ",
      "&micro;": "µ",
      "&mid;": "∣",
      "&midast;": "*",
      "&midcir;": "⫰",
      "&middot": "·",
      "&middot;": "·",
      "&minus;": "−",
      "&minusb;": "⊟",
      "&minusd;": "∸",
      "&minusdu;": "⨪",
      "&mlcp;": "⫛",
      "&mldr;": "…",
      "&mnplus;": "∓",
      "&models;": "⊧",
      "&mopf;": "𝕞",
      "&mp;": "∓",
      "&mscr;": "𝓂",
      "&mstpos;": "∾",
      "&mu;": "μ",
      "&multimap;": "⊸",
      "&mumap;": "⊸",
      "&nGg;": "⋙̸",
      "&nGt;": "≫⃒",
      "&nGtv;": "≫̸",
      "&nLeftarrow;": "⇍",
      "&nLeftrightarrow;": "⇎",
      "&nLl;": "⋘̸",
      "&nLt;": "≪⃒",
      "&nLtv;": "≪̸",
      "&nRightarrow;": "⇏",
      "&nVDash;": "⊯",
      "&nVdash;": "⊮",
      "&nabla;": "∇",
      "&nacute;": "ń",
      "&nang;": "∠⃒",
      "&nap;": "≉",
      "&napE;": "⩰̸",
      "&napid;": "≋̸",
      "&napos;": "ŉ",
      "&napprox;": "≉",
      "&natur;": "♮",
      "&natural;": "♮",
      "&naturals;": "ℕ",
      "&nbsp": " ",
      "&nbsp;": " ",
      "&nbump;": "≎̸",
      "&nbumpe;": "≏̸",
      "&ncap;": "⩃",
      "&ncaron;": "ň",
      "&ncedil;": "ņ",
      "&ncong;": "≇",
      "&ncongdot;": "⩭̸",
      "&ncup;": "⩂",
      "&ncy;": "н",
      "&ndash;": "–",
      "&ne;": "≠",
      "&neArr;": "⇗",
      "&nearhk;": "⤤",
      "&nearr;": "↗",
      "&nearrow;": "↗",
      "&nedot;": "≐̸",
      "&nequiv;": "≢",
      "&nesear;": "⤨",
      "&nesim;": "≂̸",
      "&nexist;": "∄",
      "&nexists;": "∄",
      "&nfr;": "𝔫",
      "&ngE;": "≧̸",
      "&nge;": "≱",
      "&ngeq;": "≱",
      "&ngeqq;": "≧̸",
      "&ngeqslant;": "⩾̸",
      "&nges;": "⩾̸",
      "&ngsim;": "≵",
      "&ngt;": "≯",
      "&ngtr;": "≯",
      "&nhArr;": "⇎",
      "&nharr;": "↮",
      "&nhpar;": "⫲",
      "&ni;": "∋",
      "&nis;": "⋼",
      "&nisd;": "⋺",
      "&niv;": "∋",
      "&njcy;": "њ",
      "&nlArr;": "⇍",
      "&nlE;": "≦̸",
      "&nlarr;": "↚",
      "&nldr;": "‥",
      "&nle;": "≰",
      "&nleftarrow;": "↚",
      "&nleftrightarrow;": "↮",
      "&nleq;": "≰",
      "&nleqq;": "≦̸",
      "&nleqslant;": "⩽̸",
      "&nles;": "⩽̸",
      "&nless;": "≮",
      "&nlsim;": "≴",
      "&nlt;": "≮",
      "&nltri;": "⋪",
      "&nltrie;": "⋬",
      "&nmid;": "∤",
      "&nopf;": "𝕟",
      "&not": "¬",
      "&not;": "¬",
      "&notin;": "∉",
      "&notinE;": "⋹̸",
      "&notindot;": "⋵̸",
      "&notinva;": "∉",
      "&notinvb;": "⋷",
      "&notinvc;": "⋶",
      "&notni;": "∌",
      "&notniva;": "∌",
      "&notnivb;": "⋾",
      "&notnivc;": "⋽",
      "&npar;": "∦",
      "&nparallel;": "∦",
      "&nparsl;": "⫽⃥",
      "&npart;": "∂̸",
      "&npolint;": "⨔",
      "&npr;": "⊀",
      "&nprcue;": "⋠",
      "&npre;": "⪯̸",
      "&nprec;": "⊀",
      "&npreceq;": "⪯̸",
      "&nrArr;": "⇏",
      "&nrarr;": "↛",
      "&nrarrc;": "⤳̸",
      "&nrarrw;": "↝̸",
      "&nrightarrow;": "↛",
      "&nrtri;": "⋫",
      "&nrtrie;": "⋭",
      "&nsc;": "⊁",
      "&nsccue;": "⋡",
      "&nsce;": "⪰̸",
      "&nscr;": "𝓃",
      "&nshortmid;": "∤",
      "&nshortparallel;": "∦",
      "&nsim;": "≁",
      "&nsime;": "≄",
      "&nsimeq;": "≄",
      "&nsmid;": "∤",
      "&nspar;": "∦",
      "&nsqsube;": "⋢",
      "&nsqsupe;": "⋣",
      "&nsub;": "⊄",
      "&nsubE;": "⫅̸",
      "&nsube;": "⊈",
      "&nsubset;": "⊂⃒",
      "&nsubseteq;": "⊈",
      "&nsubseteqq;": "⫅̸",
      "&nsucc;": "⊁",
      "&nsucceq;": "⪰̸",
      "&nsup;": "⊅",
      "&nsupE;": "⫆̸",
      "&nsupe;": "⊉",
      "&nsupset;": "⊃⃒",
      "&nsupseteq;": "⊉",
      "&nsupseteqq;": "⫆̸",
      "&ntgl;": "≹",
      "&ntilde": "ñ",
      "&ntilde;": "ñ",
      "&ntlg;": "≸",
      "&ntriangleleft;": "⋪",
      "&ntrianglelefteq;": "⋬",
      "&ntriangleright;": "⋫",
      "&ntrianglerighteq;": "⋭",
      "&nu;": "ν",
      "&num;": "#",
      "&numero;": "№",
      "&numsp;": " ",
      "&nvDash;": "⊭",
      "&nvHarr;": "⤄",
      "&nvap;": "≍⃒",
      "&nvdash;": "⊬",
      "&nvge;": "≥⃒",
      "&nvgt;": ">⃒",
      "&nvinfin;": "⧞",
      "&nvlArr;": "⤂",
      "&nvle;": "≤⃒",
      "&nvlt;": "<⃒",
      "&nvltrie;": "⊴⃒",
      "&nvrArr;": "⤃",
      "&nvrtrie;": "⊵⃒",
      "&nvsim;": "∼⃒",
      "&nwArr;": "⇖",
      "&nwarhk;": "⤣",
      "&nwarr;": "↖",
      "&nwarrow;": "↖",
      "&nwnear;": "⤧",
      "&oS;": "Ⓢ",
      "&oacute": "ó",
      "&oacute;": "ó",
      "&oast;": "⊛",
      "&ocir;": "⊚",
      "&ocirc": "ô",
      "&ocirc;": "ô",
      "&ocy;": "о",
      "&odash;": "⊝",
      "&odblac;": "ő",
      "&odiv;": "⨸",
      "&odot;": "⊙",
      "&odsold;": "⦼",
      "&oelig;": "œ",
      "&ofcir;": "⦿",
      "&ofr;": "𝔬",
      "&ogon;": "˛",
      "&ograve": "ò",
      "&ograve;": "ò",
      "&ogt;": "⧁",
      "&ohbar;": "⦵",
      "&ohm;": "Ω",
      "&oint;": "∮",
      "&olarr;": "↺",
      "&olcir;": "⦾",
      "&olcross;": "⦻",
      "&oline;": "‾",
      "&olt;": "⧀",
      "&omacr;": "ō",
      "&omega;": "ω",
      "&omicron;": "ο",
      "&omid;": "⦶",
      "&ominus;": "⊖",
      "&oopf;": "𝕠",
      "&opar;": "⦷",
      "&operp;": "⦹",
      "&oplus;": "⊕",
      "&or;": "∨",
      "&orarr;": "↻",
      "&ord;": "⩝",
      "&order;": "ℴ",
      "&orderof;": "ℴ",
      "&ordf": "ª",
      "&ordf;": "ª",
      "&ordm": "º",
      "&ordm;": "º",
      "&origof;": "⊶",
      "&oror;": "⩖",
      "&orslope;": "⩗",
      "&orv;": "⩛",
      "&oscr;": "ℴ",
      "&oslash": "ø",
      "&oslash;": "ø",
      "&osol;": "⊘",
      "&otilde": "õ",
      "&otilde;": "õ",
      "&otimes;": "⊗",
      "&otimesas;": "⨶",
      "&ouml": "ö",
      "&ouml;": "ö",
      "&ovbar;": "⌽",
      "&par;": "∥",
      "&para": "¶",
      "&para;": "¶",
      "&parallel;": "∥",
      "&parsim;": "⫳",
      "&parsl;": "⫽",
      "&part;": "∂",
      "&pcy;": "п",
      "&percnt;": "%",
      "&period;": ".",
      "&permil;": "‰",
      "&perp;": "⊥",
      "&pertenk;": "‱",
      "&pfr;": "𝔭",
      "&phi;": "φ",
      "&phiv;": "ϕ",
      "&phmmat;": "ℳ",
      "&phone;": "☎",
      "&pi;": "π",
      "&pitchfork;": "⋔",
      "&piv;": "ϖ",
      "&planck;": "ℏ",
      "&planckh;": "ℎ",
      "&plankv;": "ℏ",
      "&plus;": "+",
      "&plusacir;": "⨣",
      "&plusb;": "⊞",
      "&pluscir;": "⨢",
      "&plusdo;": "∔",
      "&plusdu;": "⨥",
      "&pluse;": "⩲",
      "&plusmn": "±",
      "&plusmn;": "±",
      "&plussim;": "⨦",
      "&plustwo;": "⨧",
      "&pm;": "±",
      "&pointint;": "⨕",
      "&popf;": "𝕡",
      "&pound": "£",
      "&pound;": "£",
      "&pr;": "≺",
      "&prE;": "⪳",
      "&prap;": "⪷",
      "&prcue;": "≼",
      "&pre;": "⪯",
      "&prec;": "≺",
      "&precapprox;": "⪷",
      "&preccurlyeq;": "≼",
      "&preceq;": "⪯",
      "&precnapprox;": "⪹",
      "&precneqq;": "⪵",
      "&precnsim;": "⋨",
      "&precsim;": "≾",
      "&prime;": "′",
      "&primes;": "ℙ",
      "&prnE;": "⪵",
      "&prnap;": "⪹",
      "&prnsim;": "⋨",
      "&prod;": "∏",
      "&profalar;": "⌮",
      "&profline;": "⌒",
      "&profsurf;": "⌓",
      "&prop;": "∝",
      "&propto;": "∝",
      "&prsim;": "≾",
      "&prurel;": "⊰",
      "&pscr;": "𝓅",
      "&psi;": "ψ",
      "&puncsp;": " ",
      "&qfr;": "𝔮",
      "&qint;": "⨌",
      "&qopf;": "𝕢",
      "&qprime;": "⁗",
      "&qscr;": "𝓆",
      "&quaternions;": "ℍ",
      "&quatint;": "⨖",
      "&quest;": "?",
      "&questeq;": "≟",
      "&quot": '"',
      "&quot;": '"',
      "&rAarr;": "⇛",
      "&rArr;": "⇒",
      "&rAtail;": "⤜",
      "&rBarr;": "⤏",
      "&rHar;": "⥤",
      "&race;": "∽̱",
      "&racute;": "ŕ",
      "&radic;": "√",
      "&raemptyv;": "⦳",
      "&rang;": "⟩",
      "&rangd;": "⦒",
      "&range;": "⦥",
      "&rangle;": "⟩",
      "&raquo": "»",
      "&raquo;": "»",
      "&rarr;": "→",
      "&rarrap;": "⥵",
      "&rarrb;": "⇥",
      "&rarrbfs;": "⤠",
      "&rarrc;": "⤳",
      "&rarrfs;": "⤞",
      "&rarrhk;": "↪",
      "&rarrlp;": "↬",
      "&rarrpl;": "⥅",
      "&rarrsim;": "⥴",
      "&rarrtl;": "↣",
      "&rarrw;": "↝",
      "&ratail;": "⤚",
      "&ratio;": "∶",
      "&rationals;": "ℚ",
      "&rbarr;": "⤍",
      "&rbbrk;": "❳",
      "&rbrace;": "}",
      "&rbrack;": "]",
      "&rbrke;": "⦌",
      "&rbrksld;": "⦎",
      "&rbrkslu;": "⦐",
      "&rcaron;": "ř",
      "&rcedil;": "ŗ",
      "&rceil;": "⌉",
      "&rcub;": "}",
      "&rcy;": "р",
      "&rdca;": "⤷",
      "&rdldhar;": "⥩",
      "&rdquo;": "”",
      "&rdquor;": "”",
      "&rdsh;": "↳",
      "&real;": "ℜ",
      "&realine;": "ℛ",
      "&realpart;": "ℜ",
      "&reals;": "ℝ",
      "&rect;": "▭",
      "&reg": "®",
      "&reg;": "®",
      "&rfisht;": "⥽",
      "&rfloor;": "⌋",
      "&rfr;": "𝔯",
      "&rhard;": "⇁",
      "&rharu;": "⇀",
      "&rharul;": "⥬",
      "&rho;": "ρ",
      "&rhov;": "ϱ",
      "&rightarrow;": "→",
      "&rightarrowtail;": "↣",
      "&rightharpoondown;": "⇁",
      "&rightharpoonup;": "⇀",
      "&rightleftarrows;": "⇄",
      "&rightleftharpoons;": "⇌",
      "&rightrightarrows;": "⇉",
      "&rightsquigarrow;": "↝",
      "&rightthreetimes;": "⋌",
      "&ring;": "˚",
      "&risingdotseq;": "≓",
      "&rlarr;": "⇄",
      "&rlhar;": "⇌",
      "&rlm;": "‏",
      "&rmoust;": "⎱",
      "&rmoustache;": "⎱",
      "&rnmid;": "⫮",
      "&roang;": "⟭",
      "&roarr;": "⇾",
      "&robrk;": "⟧",
      "&ropar;": "⦆",
      "&ropf;": "𝕣",
      "&roplus;": "⨮",
      "&rotimes;": "⨵",
      "&rpar;": ")",
      "&rpargt;": "⦔",
      "&rppolint;": "⨒",
      "&rrarr;": "⇉",
      "&rsaquo;": "›",
      "&rscr;": "𝓇",
      "&rsh;": "↱",
      "&rsqb;": "]",
      "&rsquo;": "’",
      "&rsquor;": "’",
      "&rthree;": "⋌",
      "&rtimes;": "⋊",
      "&rtri;": "▹",
      "&rtrie;": "⊵",
      "&rtrif;": "▸",
      "&rtriltri;": "⧎",
      "&ruluhar;": "⥨",
      "&rx;": "℞",
      "&sacute;": "ś",
      "&sbquo;": "‚",
      "&sc;": "≻",
      "&scE;": "⪴",
      "&scap;": "⪸",
      "&scaron;": "š",
      "&sccue;": "≽",
      "&sce;": "⪰",
      "&scedil;": "ş",
      "&scirc;": "ŝ",
      "&scnE;": "⪶",
      "&scnap;": "⪺",
      "&scnsim;": "⋩",
      "&scpolint;": "⨓",
      "&scsim;": "≿",
      "&scy;": "с",
      "&sdot;": "⋅",
      "&sdotb;": "⊡",
      "&sdote;": "⩦",
      "&seArr;": "⇘",
      "&searhk;": "⤥",
      "&searr;": "↘",
      "&searrow;": "↘",
      "&sect": "§",
      "&sect;": "§",
      "&semi;": ";",
      "&seswar;": "⤩",
      "&setminus;": "∖",
      "&setmn;": "∖",
      "&sext;": "✶",
      "&sfr;": "𝔰",
      "&sfrown;": "⌢",
      "&sharp;": "♯",
      "&shchcy;": "щ",
      "&shcy;": "ш",
      "&shortmid;": "∣",
      "&shortparallel;": "∥",
      "&shy": "­",
      "&shy;": "­",
      "&sigma;": "σ",
      "&sigmaf;": "ς",
      "&sigmav;": "ς",
      "&sim;": "∼",
      "&simdot;": "⩪",
      "&sime;": "≃",
      "&simeq;": "≃",
      "&simg;": "⪞",
      "&simgE;": "⪠",
      "&siml;": "⪝",
      "&simlE;": "⪟",
      "&simne;": "≆",
      "&simplus;": "⨤",
      "&simrarr;": "⥲",
      "&slarr;": "←",
      "&smallsetminus;": "∖",
      "&smashp;": "⨳",
      "&smeparsl;": "⧤",
      "&smid;": "∣",
      "&smile;": "⌣",
      "&smt;": "⪪",
      "&smte;": "⪬",
      "&smtes;": "⪬︀",
      "&softcy;": "ь",
      "&sol;": "/",
      "&solb;": "⧄",
      "&solbar;": "⌿",
      "&sopf;": "𝕤",
      "&spades;": "♠",
      "&spadesuit;": "♠",
      "&spar;": "∥",
      "&sqcap;": "⊓",
      "&sqcaps;": "⊓︀",
      "&sqcup;": "⊔",
      "&sqcups;": "⊔︀",
      "&sqsub;": "⊏",
      "&sqsube;": "⊑",
      "&sqsubset;": "⊏",
      "&sqsubseteq;": "⊑",
      "&sqsup;": "⊐",
      "&sqsupe;": "⊒",
      "&sqsupset;": "⊐",
      "&sqsupseteq;": "⊒",
      "&squ;": "□",
      "&square;": "□",
      "&squarf;": "▪",
      "&squf;": "▪",
      "&srarr;": "→",
      "&sscr;": "𝓈",
      "&ssetmn;": "∖",
      "&ssmile;": "⌣",
      "&sstarf;": "⋆",
      "&star;": "☆",
      "&starf;": "★",
      "&straightepsilon;": "ϵ",
      "&straightphi;": "ϕ",
      "&strns;": "¯",
      "&sub;": "⊂",
      "&subE;": "⫅",
      "&subdot;": "⪽",
      "&sube;": "⊆",
      "&subedot;": "⫃",
      "&submult;": "⫁",
      "&subnE;": "⫋",
      "&subne;": "⊊",
      "&subplus;": "⪿",
      "&subrarr;": "⥹",
      "&subset;": "⊂",
      "&subseteq;": "⊆",
      "&subseteqq;": "⫅",
      "&subsetneq;": "⊊",
      "&subsetneqq;": "⫋",
      "&subsim;": "⫇",
      "&subsub;": "⫕",
      "&subsup;": "⫓",
      "&succ;": "≻",
      "&succapprox;": "⪸",
      "&succcurlyeq;": "≽",
      "&succeq;": "⪰",
      "&succnapprox;": "⪺",
      "&succneqq;": "⪶",
      "&succnsim;": "⋩",
      "&succsim;": "≿",
      "&sum;": "∑",
      "&sung;": "♪",
      "&sup1": "¹",
      "&sup1;": "¹",
      "&sup2": "²",
      "&sup2;": "²",
      "&sup3": "³",
      "&sup3;": "³",
      "&sup;": "⊃",
      "&supE;": "⫆",
      "&supdot;": "⪾",
      "&supdsub;": "⫘",
      "&supe;": "⊇",
      "&supedot;": "⫄",
      "&suphsol;": "⟉",
      "&suphsub;": "⫗",
      "&suplarr;": "⥻",
      "&supmult;": "⫂",
      "&supnE;": "⫌",
      "&supne;": "⊋",
      "&supplus;": "⫀",
      "&supset;": "⊃",
      "&supseteq;": "⊇",
      "&supseteqq;": "⫆",
      "&supsetneq;": "⊋",
      "&supsetneqq;": "⫌",
      "&supsim;": "⫈",
      "&supsub;": "⫔",
      "&supsup;": "⫖",
      "&swArr;": "⇙",
      "&swarhk;": "⤦",
      "&swarr;": "↙",
      "&swarrow;": "↙",
      "&swnwar;": "⤪",
      "&szlig": "ß",
      "&szlig;": "ß",
      "&target;": "⌖",
      "&tau;": "τ",
      "&tbrk;": "⎴",
      "&tcaron;": "ť",
      "&tcedil;": "ţ",
      "&tcy;": "т",
      "&tdot;": "⃛",
      "&telrec;": "⌕",
      "&tfr;": "𝔱",
      "&there4;": "∴",
      "&therefore;": "∴",
      "&theta;": "θ",
      "&thetasym;": "ϑ",
      "&thetav;": "ϑ",
      "&thickapprox;": "≈",
      "&thicksim;": "∼",
      "&thinsp;": " ",
      "&thkap;": "≈",
      "&thksim;": "∼",
      "&thorn": "þ",
      "&thorn;": "þ",
      "&tilde;": "˜",
      "&times": "×",
      "&times;": "×",
      "&timesb;": "⊠",
      "&timesbar;": "⨱",
      "&timesd;": "⨰",
      "&tint;": "∭",
      "&toea;": "⤨",
      "&top;": "⊤",
      "&topbot;": "⌶",
      "&topcir;": "⫱",
      "&topf;": "𝕥",
      "&topfork;": "⫚",
      "&tosa;": "⤩",
      "&tprime;": "‴",
      "&trade;": "™",
      "&triangle;": "▵",
      "&triangledown;": "▿",
      "&triangleleft;": "◃",
      "&trianglelefteq;": "⊴",
      "&triangleq;": "≜",
      "&triangleright;": "▹",
      "&trianglerighteq;": "⊵",
      "&tridot;": "◬",
      "&trie;": "≜",
      "&triminus;": "⨺",
      "&triplus;": "⨹",
      "&trisb;": "⧍",
      "&tritime;": "⨻",
      "&trpezium;": "⏢",
      "&tscr;": "𝓉",
      "&tscy;": "ц",
      "&tshcy;": "ћ",
      "&tstrok;": "ŧ",
      "&twixt;": "≬",
      "&twoheadleftarrow;": "↞",
      "&twoheadrightarrow;": "↠",
      "&uArr;": "⇑",
      "&uHar;": "⥣",
      "&uacute": "ú",
      "&uacute;": "ú",
      "&uarr;": "↑",
      "&ubrcy;": "ў",
      "&ubreve;": "ŭ",
      "&ucirc": "û",
      "&ucirc;": "û",
      "&ucy;": "у",
      "&udarr;": "⇅",
      "&udblac;": "ű",
      "&udhar;": "⥮",
      "&ufisht;": "⥾",
      "&ufr;": "𝔲",
      "&ugrave": "ù",
      "&ugrave;": "ù",
      "&uharl;": "↿",
      "&uharr;": "↾",
      "&uhblk;": "▀",
      "&ulcorn;": "⌜",
      "&ulcorner;": "⌜",
      "&ulcrop;": "⌏",
      "&ultri;": "◸",
      "&umacr;": "ū",
      "&uml": "¨",
      "&uml;": "¨",
      "&uogon;": "ų",
      "&uopf;": "𝕦",
      "&uparrow;": "↑",
      "&updownarrow;": "↕",
      "&upharpoonleft;": "↿",
      "&upharpoonright;": "↾",
      "&uplus;": "⊎",
      "&upsi;": "υ",
      "&upsih;": "ϒ",
      "&upsilon;": "υ",
      "&upuparrows;": "⇈",
      "&urcorn;": "⌝",
      "&urcorner;": "⌝",
      "&urcrop;": "⌎",
      "&uring;": "ů",
      "&urtri;": "◹",
      "&uscr;": "𝓊",
      "&utdot;": "⋰",
      "&utilde;": "ũ",
      "&utri;": "▵",
      "&utrif;": "▴",
      "&uuarr;": "⇈",
      "&uuml": "ü",
      "&uuml;": "ü",
      "&uwangle;": "⦧",
      "&vArr;": "⇕",
      "&vBar;": "⫨",
      "&vBarv;": "⫩",
      "&vDash;": "⊨",
      "&vangrt;": "⦜",
      "&varepsilon;": "ϵ",
      "&varkappa;": "ϰ",
      "&varnothing;": "∅",
      "&varphi;": "ϕ",
      "&varpi;": "ϖ",
      "&varpropto;": "∝",
      "&varr;": "↕",
      "&varrho;": "ϱ",
      "&varsigma;": "ς",
      "&varsubsetneq;": "⊊︀",
      "&varsubsetneqq;": "⫋︀",
      "&varsupsetneq;": "⊋︀",
      "&varsupsetneqq;": "⫌︀",
      "&vartheta;": "ϑ",
      "&vartriangleleft;": "⊲",
      "&vartriangleright;": "⊳",
      "&vcy;": "в",
      "&vdash;": "⊢",
      "&vee;": "∨",
      "&veebar;": "⊻",
      "&veeeq;": "≚",
      "&vellip;": "⋮",
      "&verbar;": "|",
      "&vert;": "|",
      "&vfr;": "𝔳",
      "&vltri;": "⊲",
      "&vnsub;": "⊂⃒",
      "&vnsup;": "⊃⃒",
      "&vopf;": "𝕧",
      "&vprop;": "∝",
      "&vrtri;": "⊳",
      "&vscr;": "𝓋",
      "&vsubnE;": "⫋︀",
      "&vsubne;": "⊊︀",
      "&vsupnE;": "⫌︀",
      "&vsupne;": "⊋︀",
      "&vzigzag;": "⦚",
      "&wcirc;": "ŵ",
      "&wedbar;": "⩟",
      "&wedge;": "∧",
      "&wedgeq;": "≙",
      "&weierp;": "℘",
      "&wfr;": "𝔴",
      "&wopf;": "𝕨",
      "&wp;": "℘",
      "&wr;": "≀",
      "&wreath;": "≀",
      "&wscr;": "𝓌",
      "&xcap;": "⋂",
      "&xcirc;": "◯",
      "&xcup;": "⋃",
      "&xdtri;": "▽",
      "&xfr;": "𝔵",
      "&xhArr;": "⟺",
      "&xharr;": "⟷",
      "&xi;": "ξ",
      "&xlArr;": "⟸",
      "&xlarr;": "⟵",
      "&xmap;": "⟼",
      "&xnis;": "⋻",
      "&xodot;": "⨀",
      "&xopf;": "𝕩",
      "&xoplus;": "⨁",
      "&xotime;": "⨂",
      "&xrArr;": "⟹",
      "&xrarr;": "⟶",
      "&xscr;": "𝓍",
      "&xsqcup;": "⨆",
      "&xuplus;": "⨄",
      "&xutri;": "△",
      "&xvee;": "⋁",
      "&xwedge;": "⋀",
      "&yacute": "ý",
      "&yacute;": "ý",
      "&yacy;": "я",
      "&ycirc;": "ŷ",
      "&ycy;": "ы",
      "&yen": "¥",
      "&yen;": "¥",
      "&yfr;": "𝔶",
      "&yicy;": "ї",
      "&yopf;": "𝕪",
      "&yscr;": "𝓎",
      "&yucy;": "ю",
      "&yuml": "ÿ",
      "&yuml;": "ÿ",
      "&zacute;": "ź",
      "&zcaron;": "ž",
      "&zcy;": "з",
      "&zdot;": "ż",
      "&zeetrf;": "ℨ",
      "&zeta;": "ζ",
      "&zfr;": "𝔷",
      "&zhcy;": "ж",
      "&zigrarr;": "⇝",
      "&zopf;": "𝕫",
      "&zscr;": "𝓏",
      "&zwj;": "‍",
      "&zwnj;": "‌"
    },
    characters: {
      "Æ": "&AElig;",
      "&": "&amp;",
      "Á": "&Aacute;",
      "Ă": "&Abreve;",
      "Â": "&Acirc;",
      "А": "&Acy;",
      "𝔄": "&Afr;",
      "À": "&Agrave;",
      "Α": "&Alpha;",
      "Ā": "&Amacr;",
      "⩓": "&And;",
      "Ą": "&Aogon;",
      "𝔸": "&Aopf;",
      "⁡": "&af;",
      "Å": "&angst;",
      "𝒜": "&Ascr;",
      "≔": "&coloneq;",
      "Ã": "&Atilde;",
      "Ä": "&Auml;",
      "∖": "&ssetmn;",
      "⫧": "&Barv;",
      "⌆": "&doublebarwedge;",
      "Б": "&Bcy;",
      "∵": "&because;",
      "ℬ": "&bernou;",
      "Β": "&Beta;",
      "𝔅": "&Bfr;",
      "𝔹": "&Bopf;",
      "˘": "&breve;",
      "≎": "&bump;",
      "Ч": "&CHcy;",
      "©": "&copy;",
      "Ć": "&Cacute;",
      "⋒": "&Cap;",
      "ⅅ": "&DD;",
      "ℭ": "&Cfr;",
      "Č": "&Ccaron;",
      "Ç": "&Ccedil;",
      "Ĉ": "&Ccirc;",
      "∰": "&Cconint;",
      "Ċ": "&Cdot;",
      "¸": "&cedil;",
      "·": "&middot;",
      "Χ": "&Chi;",
      "⊙": "&odot;",
      "⊖": "&ominus;",
      "⊕": "&oplus;",
      "⊗": "&otimes;",
      "∲": "&cwconint;",
      "”": "&rdquor;",
      "’": "&rsquor;",
      "∷": "&Proportion;",
      "⩴": "&Colone;",
      "≡": "&equiv;",
      "∯": "&DoubleContourIntegral;",
      "∮": "&oint;",
      "ℂ": "&complexes;",
      "∐": "&coprod;",
      "∳": "&awconint;",
      "⨯": "&Cross;",
      "𝒞": "&Cscr;",
      "⋓": "&Cup;",
      "≍": "&asympeq;",
      "⤑": "&DDotrahd;",
      "Ђ": "&DJcy;",
      "Ѕ": "&DScy;",
      "Џ": "&DZcy;",
      "‡": "&ddagger;",
      "↡": "&Darr;",
      "⫤": "&DoubleLeftTee;",
      "Ď": "&Dcaron;",
      "Д": "&Dcy;",
      "∇": "&nabla;",
      "Δ": "&Delta;",
      "𝔇": "&Dfr;",
      "´": "&acute;",
      "˙": "&dot;",
      "˝": "&dblac;",
      "`": "&grave;",
      "˜": "&tilde;",
      "⋄": "&diamond;",
      "ⅆ": "&dd;",
      "𝔻": "&Dopf;",
      "¨": "&uml;",
      "⃜": "&DotDot;",
      "≐": "&esdot;",
      "⇓": "&dArr;",
      "⇐": "&lArr;",
      "⇔": "&iff;",
      "⟸": "&xlArr;",
      "⟺": "&xhArr;",
      "⟹": "&xrArr;",
      "⇒": "&rArr;",
      "⊨": "&vDash;",
      "⇑": "&uArr;",
      "⇕": "&vArr;",
      "∥": "&spar;",
      "↓": "&downarrow;",
      "⤓": "&DownArrowBar;",
      "⇵": "&duarr;",
      "̑": "&DownBreve;",
      "⥐": "&DownLeftRightVector;",
      "⥞": "&DownLeftTeeVector;",
      "↽": "&lhard;",
      "⥖": "&DownLeftVectorBar;",
      "⥟": "&DownRightTeeVector;",
      "⇁": "&rightharpoondown;",
      "⥗": "&DownRightVectorBar;",
      "⊤": "&top;",
      "↧": "&mapstodown;",
      "𝒟": "&Dscr;",
      "Đ": "&Dstrok;",
      "Ŋ": "&ENG;",
      "Ð": "&ETH;",
      "É": "&Eacute;",
      "Ě": "&Ecaron;",
      "Ê": "&Ecirc;",
      "Э": "&Ecy;",
      "Ė": "&Edot;",
      "𝔈": "&Efr;",
      "È": "&Egrave;",
      "∈": "&isinv;",
      "Ē": "&Emacr;",
      "◻": "&EmptySmallSquare;",
      "▫": "&EmptyVerySmallSquare;",
      "Ę": "&Eogon;",
      "𝔼": "&Eopf;",
      "Ε": "&Epsilon;",
      "⩵": "&Equal;",
      "≂": "&esim;",
      "⇌": "&rlhar;",
      "ℰ": "&expectation;",
      "⩳": "&Esim;",
      "Η": "&Eta;",
      "Ë": "&Euml;",
      "∃": "&exist;",
      "ⅇ": "&exponentiale;",
      "Ф": "&Fcy;",
      "𝔉": "&Ffr;",
      "◼": "&FilledSmallSquare;",
      "▪": "&squf;",
      "𝔽": "&Fopf;",
      "∀": "&forall;",
      "ℱ": "&Fscr;",
      "Ѓ": "&GJcy;",
      ">": "&gt;",
      "Γ": "&Gamma;",
      "Ϝ": "&Gammad;",
      "Ğ": "&Gbreve;",
      "Ģ": "&Gcedil;",
      "Ĝ": "&Gcirc;",
      "Г": "&Gcy;",
      "Ġ": "&Gdot;",
      "𝔊": "&Gfr;",
      "⋙": "&ggg;",
      "𝔾": "&Gopf;",
      "≥": "&geq;",
      "⋛": "&gtreqless;",
      "≧": "&geqq;",
      "⪢": "&GreaterGreater;",
      "≷": "&gtrless;",
      "⩾": "&ges;",
      "≳": "&gtrsim;",
      "𝒢": "&Gscr;",
      "≫": "&gg;",
      "Ъ": "&HARDcy;",
      "ˇ": "&caron;",
      "^": "&Hat;",
      "Ĥ": "&Hcirc;",
      "ℌ": "&Poincareplane;",
      "ℋ": "&hamilt;",
      "ℍ": "&quaternions;",
      "─": "&boxh;",
      "Ħ": "&Hstrok;",
      "≏": "&bumpeq;",
      "Е": "&IEcy;",
      "Ĳ": "&IJlig;",
      "Ё": "&IOcy;",
      "Í": "&Iacute;",
      "Î": "&Icirc;",
      "И": "&Icy;",
      "İ": "&Idot;",
      "ℑ": "&imagpart;",
      "Ì": "&Igrave;",
      "Ī": "&Imacr;",
      "ⅈ": "&ii;",
      "∬": "&Int;",
      "∫": "&int;",
      "⋂": "&xcap;",
      "⁣": "&ic;",
      "⁢": "&it;",
      "Į": "&Iogon;",
      "𝕀": "&Iopf;",
      "Ι": "&Iota;",
      "ℐ": "&imagline;",
      "Ĩ": "&Itilde;",
      "І": "&Iukcy;",
      "Ï": "&Iuml;",
      "Ĵ": "&Jcirc;",
      "Й": "&Jcy;",
      "𝔍": "&Jfr;",
      "𝕁": "&Jopf;",
      "𝒥": "&Jscr;",
      "Ј": "&Jsercy;",
      "Є": "&Jukcy;",
      "Х": "&KHcy;",
      "Ќ": "&KJcy;",
      "Κ": "&Kappa;",
      "Ķ": "&Kcedil;",
      "К": "&Kcy;",
      "𝔎": "&Kfr;",
      "𝕂": "&Kopf;",
      "𝒦": "&Kscr;",
      "Љ": "&LJcy;",
      "<": "&lt;",
      "Ĺ": "&Lacute;",
      "Λ": "&Lambda;",
      "⟪": "&Lang;",
      "ℒ": "&lagran;",
      "↞": "&twoheadleftarrow;",
      "Ľ": "&Lcaron;",
      "Ļ": "&Lcedil;",
      "Л": "&Lcy;",
      "⟨": "&langle;",
      "←": "&slarr;",
      "⇤": "&larrb;",
      "⇆": "&lrarr;",
      "⌈": "&lceil;",
      "⟦": "&lobrk;",
      "⥡": "&LeftDownTeeVector;",
      "⇃": "&downharpoonleft;",
      "⥙": "&LeftDownVectorBar;",
      "⌊": "&lfloor;",
      "↔": "&leftrightarrow;",
      "⥎": "&LeftRightVector;",
      "⊣": "&dashv;",
      "↤": "&mapstoleft;",
      "⥚": "&LeftTeeVector;",
      "⊲": "&vltri;",
      "⧏": "&LeftTriangleBar;",
      "⊴": "&trianglelefteq;",
      "⥑": "&LeftUpDownVector;",
      "⥠": "&LeftUpTeeVector;",
      "↿": "&upharpoonleft;",
      "⥘": "&LeftUpVectorBar;",
      "↼": "&lharu;",
      "⥒": "&LeftVectorBar;",
      "⋚": "&lesseqgtr;",
      "≦": "&leqq;",
      "≶": "&lg;",
      "⪡": "&LessLess;",
      "⩽": "&les;",
      "≲": "&lsim;",
      "𝔏": "&Lfr;",
      "⋘": "&Ll;",
      "⇚": "&lAarr;",
      "Ŀ": "&Lmidot;",
      "⟵": "&xlarr;",
      "⟷": "&xharr;",
      "⟶": "&xrarr;",
      "𝕃": "&Lopf;",
      "↙": "&swarrow;",
      "↘": "&searrow;",
      "↰": "&lsh;",
      "Ł": "&Lstrok;",
      "≪": "&ll;",
      "⤅": "&Map;",
      "М": "&Mcy;",
      " ": "&MediumSpace;",
      "ℳ": "&phmmat;",
      "𝔐": "&Mfr;",
      "∓": "&mp;",
      "𝕄": "&Mopf;",
      "Μ": "&Mu;",
      "Њ": "&NJcy;",
      "Ń": "&Nacute;",
      "Ň": "&Ncaron;",
      "Ņ": "&Ncedil;",
      "Н": "&Ncy;",
      "​": "&ZeroWidthSpace;",
      "\n": "&NewLine;",
      "𝔑": "&Nfr;",
      "⁠": "&NoBreak;",
      " ": "&nbsp;",
      "ℕ": "&naturals;",
      "⫬": "&Not;",
      "≢": "&nequiv;",
      "≭": "&NotCupCap;",
      "∦": "&nspar;",
      "∉": "&notinva;",
      "≠": "&ne;",
      "≂̸": "&nesim;",
      "∄": "&nexists;",
      "≯": "&ngtr;",
      "≱": "&ngeq;",
      "≧̸": "&ngeqq;",
      "≫̸": "&nGtv;",
      "≹": "&ntgl;",
      "⩾̸": "&nges;",
      "≵": "&ngsim;",
      "≎̸": "&nbump;",
      "≏̸": "&nbumpe;",
      "⋪": "&ntriangleleft;",
      "⧏̸": "&NotLeftTriangleBar;",
      "⋬": "&ntrianglelefteq;",
      "≮": "&nlt;",
      "≰": "&nleq;",
      "≸": "&ntlg;",
      "≪̸": "&nLtv;",
      "⩽̸": "&nles;",
      "≴": "&nlsim;",
      "⪢̸": "&NotNestedGreaterGreater;",
      "⪡̸": "&NotNestedLessLess;",
      "⊀": "&nprec;",
      "⪯̸": "&npreceq;",
      "⋠": "&nprcue;",
      "∌": "&notniva;",
      "⋫": "&ntriangleright;",
      "⧐̸": "&NotRightTriangleBar;",
      "⋭": "&ntrianglerighteq;",
      "⊏̸": "&NotSquareSubset;",
      "⋢": "&nsqsube;",
      "⊐̸": "&NotSquareSuperset;",
      "⋣": "&nsqsupe;",
      "⊂⃒": "&vnsub;",
      "⊈": "&nsubseteq;",
      "⊁": "&nsucc;",
      "⪰̸": "&nsucceq;",
      "⋡": "&nsccue;",
      "≿̸": "&NotSucceedsTilde;",
      "⊃⃒": "&vnsup;",
      "⊉": "&nsupseteq;",
      "≁": "&nsim;",
      "≄": "&nsimeq;",
      "≇": "&ncong;",
      "≉": "&napprox;",
      "∤": "&nsmid;",
      "𝒩": "&Nscr;",
      "Ñ": "&Ntilde;",
      "Ν": "&Nu;",
      "Œ": "&OElig;",
      "Ó": "&Oacute;",
      "Ô": "&Ocirc;",
      "О": "&Ocy;",
      "Ő": "&Odblac;",
      "𝔒": "&Ofr;",
      "Ò": "&Ograve;",
      "Ō": "&Omacr;",
      "Ω": "&ohm;",
      "Ο": "&Omicron;",
      "𝕆": "&Oopf;",
      "“": "&ldquo;",
      "‘": "&lsquo;",
      "⩔": "&Or;",
      "𝒪": "&Oscr;",
      "Ø": "&Oslash;",
      "Õ": "&Otilde;",
      "⨷": "&Otimes;",
      "Ö": "&Ouml;",
      "‾": "&oline;",
      "⏞": "&OverBrace;",
      "⎴": "&tbrk;",
      "⏜": "&OverParenthesis;",
      "∂": "&part;",
      "П": "&Pcy;",
      "𝔓": "&Pfr;",
      "Φ": "&Phi;",
      "Π": "&Pi;",
      "±": "&pm;",
      "ℙ": "&primes;",
      "⪻": "&Pr;",
      "≺": "&prec;",
      "⪯": "&preceq;",
      "≼": "&preccurlyeq;",
      "≾": "&prsim;",
      "″": "&Prime;",
      "∏": "&prod;",
      "∝": "&vprop;",
      "𝒫": "&Pscr;",
      "Ψ": "&Psi;",
      '"': "&quot;",
      "𝔔": "&Qfr;",
      "ℚ": "&rationals;",
      "𝒬": "&Qscr;",
      "⤐": "&drbkarow;",
      "®": "&reg;",
      "Ŕ": "&Racute;",
      "⟫": "&Rang;",
      "↠": "&twoheadrightarrow;",
      "⤖": "&Rarrtl;",
      "Ř": "&Rcaron;",
      "Ŗ": "&Rcedil;",
      "Р": "&Rcy;",
      "ℜ": "&realpart;",
      "∋": "&niv;",
      "⇋": "&lrhar;",
      "⥯": "&duhar;",
      "Ρ": "&Rho;",
      "⟩": "&rangle;",
      "→": "&srarr;",
      "⇥": "&rarrb;",
      "⇄": "&rlarr;",
      "⌉": "&rceil;",
      "⟧": "&robrk;",
      "⥝": "&RightDownTeeVector;",
      "⇂": "&downharpoonright;",
      "⥕": "&RightDownVectorBar;",
      "⌋": "&rfloor;",
      "⊢": "&vdash;",
      "↦": "&mapsto;",
      "⥛": "&RightTeeVector;",
      "⊳": "&vrtri;",
      "⧐": "&RightTriangleBar;",
      "⊵": "&trianglerighteq;",
      "⥏": "&RightUpDownVector;",
      "⥜": "&RightUpTeeVector;",
      "↾": "&upharpoonright;",
      "⥔": "&RightUpVectorBar;",
      "⇀": "&rightharpoonup;",
      "⥓": "&RightVectorBar;",
      "ℝ": "&reals;",
      "⥰": "&RoundImplies;",
      "⇛": "&rAarr;",
      "ℛ": "&realine;",
      "↱": "&rsh;",
      "⧴": "&RuleDelayed;",
      "Щ": "&SHCHcy;",
      "Ш": "&SHcy;",
      "Ь": "&SOFTcy;",
      "Ś": "&Sacute;",
      "⪼": "&Sc;",
      "Š": "&Scaron;",
      "Ş": "&Scedil;",
      "Ŝ": "&Scirc;",
      "С": "&Scy;",
      "𝔖": "&Sfr;",
      "↑": "&uparrow;",
      "Σ": "&Sigma;",
      "∘": "&compfn;",
      "𝕊": "&Sopf;",
      "√": "&radic;",
      "□": "&square;",
      "⊓": "&sqcap;",
      "⊏": "&sqsubset;",
      "⊑": "&sqsubseteq;",
      "⊐": "&sqsupset;",
      "⊒": "&sqsupseteq;",
      "⊔": "&sqcup;",
      "𝒮": "&Sscr;",
      "⋆": "&sstarf;",
      "⋐": "&Subset;",
      "⊆": "&subseteq;",
      "≻": "&succ;",
      "⪰": "&succeq;",
      "≽": "&succcurlyeq;",
      "≿": "&succsim;",
      "∑": "&sum;",
      "⋑": "&Supset;",
      "⊃": "&supset;",
      "⊇": "&supseteq;",
      "Þ": "&THORN;",
      "™": "&trade;",
      "Ћ": "&TSHcy;",
      "Ц": "&TScy;",
      "\t": "&Tab;",
      "Τ": "&Tau;",
      "Ť": "&Tcaron;",
      "Ţ": "&Tcedil;",
      "Т": "&Tcy;",
      "𝔗": "&Tfr;",
      "∴": "&therefore;",
      "Θ": "&Theta;",
      "  ": "&ThickSpace;",
      " ": "&thinsp;",
      "∼": "&thksim;",
      "≃": "&simeq;",
      "≅": "&cong;",
      "≈": "&thkap;",
      "𝕋": "&Topf;",
      "⃛": "&tdot;",
      "𝒯": "&Tscr;",
      "Ŧ": "&Tstrok;",
      "Ú": "&Uacute;",
      "↟": "&Uarr;",
      "⥉": "&Uarrocir;",
      "Ў": "&Ubrcy;",
      "Ŭ": "&Ubreve;",
      "Û": "&Ucirc;",
      "У": "&Ucy;",
      "Ű": "&Udblac;",
      "𝔘": "&Ufr;",
      "Ù": "&Ugrave;",
      "Ū": "&Umacr;",
      _: "&lowbar;",
      "⏟": "&UnderBrace;",
      "⎵": "&bbrk;",
      "⏝": "&UnderParenthesis;",
      "⋃": "&xcup;",
      "⊎": "&uplus;",
      "Ų": "&Uogon;",
      "𝕌": "&Uopf;",
      "⤒": "&UpArrowBar;",
      "⇅": "&udarr;",
      "↕": "&varr;",
      "⥮": "&udhar;",
      "⊥": "&perp;",
      "↥": "&mapstoup;",
      "↖": "&nwarrow;",
      "↗": "&nearrow;",
      "ϒ": "&upsih;",
      "Υ": "&Upsilon;",
      "Ů": "&Uring;",
      "𝒰": "&Uscr;",
      "Ũ": "&Utilde;",
      "Ü": "&Uuml;",
      "⊫": "&VDash;",
      "⫫": "&Vbar;",
      "В": "&Vcy;",
      "⊩": "&Vdash;",
      "⫦": "&Vdashl;",
      "⋁": "&xvee;",
      "‖": "&Vert;",
      "∣": "&smid;",
      "|": "&vert;",
      "❘": "&VerticalSeparator;",
      "≀": "&wreath;",
      " ": "&hairsp;",
      "𝔙": "&Vfr;",
      "𝕍": "&Vopf;",
      "𝒱": "&Vscr;",
      "⊪": "&Vvdash;",
      "Ŵ": "&Wcirc;",
      "⋀": "&xwedge;",
      "𝔚": "&Wfr;",
      "𝕎": "&Wopf;",
      "𝒲": "&Wscr;",
      "𝔛": "&Xfr;",
      "Ξ": "&Xi;",
      "𝕏": "&Xopf;",
      "𝒳": "&Xscr;",
      "Я": "&YAcy;",
      "Ї": "&YIcy;",
      "Ю": "&YUcy;",
      "Ý": "&Yacute;",
      "Ŷ": "&Ycirc;",
      "Ы": "&Ycy;",
      "𝔜": "&Yfr;",
      "𝕐": "&Yopf;",
      "𝒴": "&Yscr;",
      "Ÿ": "&Yuml;",
      "Ж": "&ZHcy;",
      "Ź": "&Zacute;",
      "Ž": "&Zcaron;",
      "З": "&Zcy;",
      "Ż": "&Zdot;",
      "Ζ": "&Zeta;",
      "ℨ": "&zeetrf;",
      "ℤ": "&integers;",
      "𝒵": "&Zscr;",
      "á": "&aacute;",
      "ă": "&abreve;",
      "∾": "&mstpos;",
      "∾̳": "&acE;",
      "∿": "&acd;",
      "â": "&acirc;",
      "а": "&acy;",
      "æ": "&aelig;",
      "𝔞": "&afr;",
      "à": "&agrave;",
      "ℵ": "&aleph;",
      "α": "&alpha;",
      "ā": "&amacr;",
      "⨿": "&amalg;",
      "∧": "&wedge;",
      "⩕": "&andand;",
      "⩜": "&andd;",
      "⩘": "&andslope;",
      "⩚": "&andv;",
      "∠": "&angle;",
      "⦤": "&ange;",
      "∡": "&measuredangle;",
      "⦨": "&angmsdaa;",
      "⦩": "&angmsdab;",
      "⦪": "&angmsdac;",
      "⦫": "&angmsdad;",
      "⦬": "&angmsdae;",
      "⦭": "&angmsdaf;",
      "⦮": "&angmsdag;",
      "⦯": "&angmsdah;",
      "∟": "&angrt;",
      "⊾": "&angrtvb;",
      "⦝": "&angrtvbd;",
      "∢": "&angsph;",
      "⍼": "&angzarr;",
      "ą": "&aogon;",
      "𝕒": "&aopf;",
      "⩰": "&apE;",
      "⩯": "&apacir;",
      "≊": "&approxeq;",
      "≋": "&apid;",
      "'": "&apos;",
      "å": "&aring;",
      "𝒶": "&ascr;",
      "*": "&midast;",
      "ã": "&atilde;",
      "ä": "&auml;",
      "⨑": "&awint;",
      "⫭": "&bNot;",
      "≌": "&bcong;",
      "϶": "&bepsi;",
      "‵": "&bprime;",
      "∽": "&bsim;",
      "⋍": "&bsime;",
      "⊽": "&barvee;",
      "⌅": "&barwedge;",
      "⎶": "&bbrktbrk;",
      "б": "&bcy;",
      "„": "&ldquor;",
      "⦰": "&bemptyv;",
      "β": "&beta;",
      "ℶ": "&beth;",
      "≬": "&twixt;",
      "𝔟": "&bfr;",
      "◯": "&xcirc;",
      "⨀": "&xodot;",
      "⨁": "&xoplus;",
      "⨂": "&xotime;",
      "⨆": "&xsqcup;",
      "★": "&starf;",
      "▽": "&xdtri;",
      "△": "&xutri;",
      "⨄": "&xuplus;",
      "⤍": "&rbarr;",
      "⧫": "&lozf;",
      "▴": "&utrif;",
      "▾": "&dtrif;",
      "◂": "&ltrif;",
      "▸": "&rtrif;",
      "␣": "&blank;",
      "▒": "&blk12;",
      "░": "&blk14;",
      "▓": "&blk34;",
      "█": "&block;",
      "=⃥": "&bne;",
      "≡⃥": "&bnequiv;",
      "⌐": "&bnot;",
      "𝕓": "&bopf;",
      "⋈": "&bowtie;",
      "╗": "&boxDL;",
      "╔": "&boxDR;",
      "╖": "&boxDl;",
      "╓": "&boxDr;",
      "═": "&boxH;",
      "╦": "&boxHD;",
      "╩": "&boxHU;",
      "╤": "&boxHd;",
      "╧": "&boxHu;",
      "╝": "&boxUL;",
      "╚": "&boxUR;",
      "╜": "&boxUl;",
      "╙": "&boxUr;",
      "║": "&boxV;",
      "╬": "&boxVH;",
      "╣": "&boxVL;",
      "╠": "&boxVR;",
      "╫": "&boxVh;",
      "╢": "&boxVl;",
      "╟": "&boxVr;",
      "⧉": "&boxbox;",
      "╕": "&boxdL;",
      "╒": "&boxdR;",
      "┐": "&boxdl;",
      "┌": "&boxdr;",
      "╥": "&boxhD;",
      "╨": "&boxhU;",
      "┬": "&boxhd;",
      "┴": "&boxhu;",
      "⊟": "&minusb;",
      "⊞": "&plusb;",
      "⊠": "&timesb;",
      "╛": "&boxuL;",
      "╘": "&boxuR;",
      "┘": "&boxul;",
      "└": "&boxur;",
      "│": "&boxv;",
      "╪": "&boxvH;",
      "╡": "&boxvL;",
      "╞": "&boxvR;",
      "┼": "&boxvh;",
      "┤": "&boxvl;",
      "├": "&boxvr;",
      "¦": "&brvbar;",
      "𝒷": "&bscr;",
      "⁏": "&bsemi;",
      "\\": "&bsol;",
      "⧅": "&bsolb;",
      "⟈": "&bsolhsub;",
      "•": "&bullet;",
      "⪮": "&bumpE;",
      "ć": "&cacute;",
      "∩": "&cap;",
      "⩄": "&capand;",
      "⩉": "&capbrcup;",
      "⩋": "&capcap;",
      "⩇": "&capcup;",
      "⩀": "&capdot;",
      "∩︀": "&caps;",
      "⁁": "&caret;",
      "⩍": "&ccaps;",
      "č": "&ccaron;",
      "ç": "&ccedil;",
      "ĉ": "&ccirc;",
      "⩌": "&ccups;",
      "⩐": "&ccupssm;",
      "ċ": "&cdot;",
      "⦲": "&cemptyv;",
      "¢": "&cent;",
      "𝔠": "&cfr;",
      "ч": "&chcy;",
      "✓": "&checkmark;",
      "χ": "&chi;",
      "○": "&cir;",
      "⧃": "&cirE;",
      "ˆ": "&circ;",
      "≗": "&cire;",
      "↺": "&olarr;",
      "↻": "&orarr;",
      "Ⓢ": "&oS;",
      "⊛": "&oast;",
      "⊚": "&ocir;",
      "⊝": "&odash;",
      "⨐": "&cirfnint;",
      "⫯": "&cirmid;",
      "⧂": "&cirscir;",
      "♣": "&clubsuit;",
      ":": "&colon;",
      ",": "&comma;",
      "@": "&commat;",
      "∁": "&complement;",
      "⩭": "&congdot;",
      "𝕔": "&copf;",
      "℗": "&copysr;",
      "↵": "&crarr;",
      "✗": "&cross;",
      "𝒸": "&cscr;",
      "⫏": "&csub;",
      "⫑": "&csube;",
      "⫐": "&csup;",
      "⫒": "&csupe;",
      "⋯": "&ctdot;",
      "⤸": "&cudarrl;",
      "⤵": "&cudarrr;",
      "⋞": "&curlyeqprec;",
      "⋟": "&curlyeqsucc;",
      "↶": "&curvearrowleft;",
      "⤽": "&cularrp;",
      "∪": "&cup;",
      "⩈": "&cupbrcap;",
      "⩆": "&cupcap;",
      "⩊": "&cupcup;",
      "⊍": "&cupdot;",
      "⩅": "&cupor;",
      "∪︀": "&cups;",
      "↷": "&curvearrowright;",
      "⤼": "&curarrm;",
      "⋎": "&cuvee;",
      "⋏": "&cuwed;",
      "¤": "&curren;",
      "∱": "&cwint;",
      "⌭": "&cylcty;",
      "⥥": "&dHar;",
      "†": "&dagger;",
      "ℸ": "&daleth;",
      "‐": "&hyphen;",
      "⤏": "&rBarr;",
      "ď": "&dcaron;",
      "д": "&dcy;",
      "⇊": "&downdownarrows;",
      "⩷": "&eDDot;",
      "°": "&deg;",
      "δ": "&delta;",
      "⦱": "&demptyv;",
      "⥿": "&dfisht;",
      "𝔡": "&dfr;",
      "♦": "&diams;",
      "ϝ": "&gammad;",
      "⋲": "&disin;",
      "÷": "&divide;",
      "⋇": "&divonx;",
      "ђ": "&djcy;",
      "⌞": "&llcorner;",
      "⌍": "&dlcrop;",
      $: "&dollar;",
      "𝕕": "&dopf;",
      "≑": "&eDot;",
      "∸": "&minusd;",
      "∔": "&plusdo;",
      "⊡": "&sdotb;",
      "⌟": "&lrcorner;",
      "⌌": "&drcrop;",
      "𝒹": "&dscr;",
      "ѕ": "&dscy;",
      "⧶": "&dsol;",
      "đ": "&dstrok;",
      "⋱": "&dtdot;",
      "▿": "&triangledown;",
      "⦦": "&dwangle;",
      "џ": "&dzcy;",
      "⟿": "&dzigrarr;",
      "é": "&eacute;",
      "⩮": "&easter;",
      "ě": "&ecaron;",
      "≖": "&eqcirc;",
      "ê": "&ecirc;",
      "≕": "&eqcolon;",
      "э": "&ecy;",
      "ė": "&edot;",
      "≒": "&fallingdotseq;",
      "𝔢": "&efr;",
      "⪚": "&eg;",
      "è": "&egrave;",
      "⪖": "&eqslantgtr;",
      "⪘": "&egsdot;",
      "⪙": "&el;",
      "⏧": "&elinters;",
      "ℓ": "&ell;",
      "⪕": "&eqslantless;",
      "⪗": "&elsdot;",
      "ē": "&emacr;",
      "∅": "&varnothing;",
      " ": "&emsp13;",
      " ": "&emsp14;",
      " ": "&emsp;",
      "ŋ": "&eng;",
      " ": "&ensp;",
      "ę": "&eogon;",
      "𝕖": "&eopf;",
      "⋕": "&epar;",
      "⧣": "&eparsl;",
      "⩱": "&eplus;",
      "ε": "&epsilon;",
      "ϵ": "&varepsilon;",
      "=": "&equals;",
      "≟": "&questeq;",
      "⩸": "&equivDD;",
      "⧥": "&eqvparsl;",
      "≓": "&risingdotseq;",
      "⥱": "&erarr;",
      "ℯ": "&escr;",
      "η": "&eta;",
      "ð": "&eth;",
      "ë": "&euml;",
      "€": "&euro;",
      "!": "&excl;",
      "ф": "&fcy;",
      "♀": "&female;",
      "ﬃ": "&ffilig;",
      "ﬀ": "&fflig;",
      "ﬄ": "&ffllig;",
      "𝔣": "&ffr;",
      "ﬁ": "&filig;",
      fj: "&fjlig;",
      "♭": "&flat;",
      "ﬂ": "&fllig;",
      "▱": "&fltns;",
      "ƒ": "&fnof;",
      "𝕗": "&fopf;",
      "⋔": "&pitchfork;",
      "⫙": "&forkv;",
      "⨍": "&fpartint;",
      "½": "&half;",
      "⅓": "&frac13;",
      "¼": "&frac14;",
      "⅕": "&frac15;",
      "⅙": "&frac16;",
      "⅛": "&frac18;",
      "⅔": "&frac23;",
      "⅖": "&frac25;",
      "¾": "&frac34;",
      "⅗": "&frac35;",
      "⅜": "&frac38;",
      "⅘": "&frac45;",
      "⅚": "&frac56;",
      "⅝": "&frac58;",
      "⅞": "&frac78;",
      "⁄": "&frasl;",
      "⌢": "&sfrown;",
      "𝒻": "&fscr;",
      "⪌": "&gtreqqless;",
      "ǵ": "&gacute;",
      "γ": "&gamma;",
      "⪆": "&gtrapprox;",
      "ğ": "&gbreve;",
      "ĝ": "&gcirc;",
      "г": "&gcy;",
      "ġ": "&gdot;",
      "⪩": "&gescc;",
      "⪀": "&gesdot;",
      "⪂": "&gesdoto;",
      "⪄": "&gesdotol;",
      "⋛︀": "&gesl;",
      "⪔": "&gesles;",
      "𝔤": "&gfr;",
      "ℷ": "&gimel;",
      "ѓ": "&gjcy;",
      "⪒": "&glE;",
      "⪥": "&gla;",
      "⪤": "&glj;",
      "≩": "&gneqq;",
      "⪊": "&gnapprox;",
      "⪈": "&gneq;",
      "⋧": "&gnsim;",
      "𝕘": "&gopf;",
      "ℊ": "&gscr;",
      "⪎": "&gsime;",
      "⪐": "&gsiml;",
      "⪧": "&gtcc;",
      "⩺": "&gtcir;",
      "⋗": "&gtrdot;",
      "⦕": "&gtlPar;",
      "⩼": "&gtquest;",
      "⥸": "&gtrarr;",
      "≩︀": "&gvnE;",
      "ъ": "&hardcy;",
      "⥈": "&harrcir;",
      "↭": "&leftrightsquigarrow;",
      "ℏ": "&plankv;",
      "ĥ": "&hcirc;",
      "♥": "&heartsuit;",
      "…": "&mldr;",
      "⊹": "&hercon;",
      "𝔥": "&hfr;",
      "⤥": "&searhk;",
      "⤦": "&swarhk;",
      "⇿": "&hoarr;",
      "∻": "&homtht;",
      "↩": "&larrhk;",
      "↪": "&rarrhk;",
      "𝕙": "&hopf;",
      "―": "&horbar;",
      "𝒽": "&hscr;",
      "ħ": "&hstrok;",
      "⁃": "&hybull;",
      "í": "&iacute;",
      "î": "&icirc;",
      "и": "&icy;",
      "е": "&iecy;",
      "¡": "&iexcl;",
      "𝔦": "&ifr;",
      "ì": "&igrave;",
      "⨌": "&qint;",
      "∭": "&tint;",
      "⧜": "&iinfin;",
      "℩": "&iiota;",
      "ĳ": "&ijlig;",
      "ī": "&imacr;",
      "ı": "&inodot;",
      "⊷": "&imof;",
      "Ƶ": "&imped;",
      "℅": "&incare;",
      "∞": "&infin;",
      "⧝": "&infintie;",
      "⊺": "&intercal;",
      "⨗": "&intlarhk;",
      "⨼": "&iprod;",
      "ё": "&iocy;",
      "į": "&iogon;",
      "𝕚": "&iopf;",
      "ι": "&iota;",
      "¿": "&iquest;",
      "𝒾": "&iscr;",
      "⋹": "&isinE;",
      "⋵": "&isindot;",
      "⋴": "&isins;",
      "⋳": "&isinsv;",
      "ĩ": "&itilde;",
      "і": "&iukcy;",
      "ï": "&iuml;",
      "ĵ": "&jcirc;",
      "й": "&jcy;",
      "𝔧": "&jfr;",
      "ȷ": "&jmath;",
      "𝕛": "&jopf;",
      "𝒿": "&jscr;",
      "ј": "&jsercy;",
      "є": "&jukcy;",
      "κ": "&kappa;",
      "ϰ": "&varkappa;",
      "ķ": "&kcedil;",
      "к": "&kcy;",
      "𝔨": "&kfr;",
      "ĸ": "&kgreen;",
      "х": "&khcy;",
      "ќ": "&kjcy;",
      "𝕜": "&kopf;",
      "𝓀": "&kscr;",
      "⤛": "&lAtail;",
      "⤎": "&lBarr;",
      "⪋": "&lesseqqgtr;",
      "⥢": "&lHar;",
      "ĺ": "&lacute;",
      "⦴": "&laemptyv;",
      "λ": "&lambda;",
      "⦑": "&langd;",
      "⪅": "&lessapprox;",
      "«": "&laquo;",
      "⤟": "&larrbfs;",
      "⤝": "&larrfs;",
      "↫": "&looparrowleft;",
      "⤹": "&larrpl;",
      "⥳": "&larrsim;",
      "↢": "&leftarrowtail;",
      "⪫": "&lat;",
      "⤙": "&latail;",
      "⪭": "&late;",
      "⪭︀": "&lates;",
      "⤌": "&lbarr;",
      "❲": "&lbbrk;",
      "{": "&lcub;",
      "[": "&lsqb;",
      "⦋": "&lbrke;",
      "⦏": "&lbrksld;",
      "⦍": "&lbrkslu;",
      "ľ": "&lcaron;",
      "ļ": "&lcedil;",
      "л": "&lcy;",
      "⤶": "&ldca;",
      "⥧": "&ldrdhar;",
      "⥋": "&ldrushar;",
      "↲": "&ldsh;",
      "≤": "&leq;",
      "⇇": "&llarr;",
      "⋋": "&lthree;",
      "⪨": "&lescc;",
      "⩿": "&lesdot;",
      "⪁": "&lesdoto;",
      "⪃": "&lesdotor;",
      "⋚︀": "&lesg;",
      "⪓": "&lesges;",
      "⋖": "&ltdot;",
      "⥼": "&lfisht;",
      "𝔩": "&lfr;",
      "⪑": "&lgE;",
      "⥪": "&lharul;",
      "▄": "&lhblk;",
      "љ": "&ljcy;",
      "⥫": "&llhard;",
      "◺": "&lltri;",
      "ŀ": "&lmidot;",
      "⎰": "&lmoustache;",
      "≨": "&lneqq;",
      "⪉": "&lnapprox;",
      "⪇": "&lneq;",
      "⋦": "&lnsim;",
      "⟬": "&loang;",
      "⇽": "&loarr;",
      "⟼": "&xmap;",
      "↬": "&rarrlp;",
      "⦅": "&lopar;",
      "𝕝": "&lopf;",
      "⨭": "&loplus;",
      "⨴": "&lotimes;",
      "∗": "&lowast;",
      "◊": "&lozenge;",
      "(": "&lpar;",
      "⦓": "&lparlt;",
      "⥭": "&lrhard;",
      "‎": "&lrm;",
      "⊿": "&lrtri;",
      "‹": "&lsaquo;",
      "𝓁": "&lscr;",
      "⪍": "&lsime;",
      "⪏": "&lsimg;",
      "‚": "&sbquo;",
      "ł": "&lstrok;",
      "⪦": "&ltcc;",
      "⩹": "&ltcir;",
      "⋉": "&ltimes;",
      "⥶": "&ltlarr;",
      "⩻": "&ltquest;",
      "⦖": "&ltrPar;",
      "◃": "&triangleleft;",
      "⥊": "&lurdshar;",
      "⥦": "&luruhar;",
      "≨︀": "&lvnE;",
      "∺": "&mDDot;",
      "¯": "&strns;",
      "♂": "&male;",
      "✠": "&maltese;",
      "▮": "&marker;",
      "⨩": "&mcomma;",
      "м": "&mcy;",
      "—": "&mdash;",
      "𝔪": "&mfr;",
      "℧": "&mho;",
      "µ": "&micro;",
      "⫰": "&midcir;",
      "−": "&minus;",
      "⨪": "&minusdu;",
      "⫛": "&mlcp;",
      "⊧": "&models;",
      "𝕞": "&mopf;",
      "𝓂": "&mscr;",
      "μ": "&mu;",
      "⊸": "&mumap;",
      "⋙̸": "&nGg;",
      "≫⃒": "&nGt;",
      "⇍": "&nlArr;",
      "⇎": "&nhArr;",
      "⋘̸": "&nLl;",
      "≪⃒": "&nLt;",
      "⇏": "&nrArr;",
      "⊯": "&nVDash;",
      "⊮": "&nVdash;",
      "ń": "&nacute;",
      "∠⃒": "&nang;",
      "⩰̸": "&napE;",
      "≋̸": "&napid;",
      "ŉ": "&napos;",
      "♮": "&natural;",
      "⩃": "&ncap;",
      "ň": "&ncaron;",
      "ņ": "&ncedil;",
      "⩭̸": "&ncongdot;",
      "⩂": "&ncup;",
      "н": "&ncy;",
      "–": "&ndash;",
      "⇗": "&neArr;",
      "⤤": "&nearhk;",
      "≐̸": "&nedot;",
      "⤨": "&toea;",
      "𝔫": "&nfr;",
      "↮": "&nleftrightarrow;",
      "⫲": "&nhpar;",
      "⋼": "&nis;",
      "⋺": "&nisd;",
      "њ": "&njcy;",
      "≦̸": "&nleqq;",
      "↚": "&nleftarrow;",
      "‥": "&nldr;",
      "𝕟": "&nopf;",
      "¬": "&not;",
      "⋹̸": "&notinE;",
      "⋵̸": "&notindot;",
      "⋷": "&notinvb;",
      "⋶": "&notinvc;",
      "⋾": "&notnivb;",
      "⋽": "&notnivc;",
      "⫽⃥": "&nparsl;",
      "∂̸": "&npart;",
      "⨔": "&npolint;",
      "↛": "&nrightarrow;",
      "⤳̸": "&nrarrc;",
      "↝̸": "&nrarrw;",
      "𝓃": "&nscr;",
      "⊄": "&nsub;",
      "⫅̸": "&nsubseteqq;",
      "⊅": "&nsup;",
      "⫆̸": "&nsupseteqq;",
      "ñ": "&ntilde;",
      "ν": "&nu;",
      "#": "&num;",
      "№": "&numero;",
      " ": "&numsp;",
      "⊭": "&nvDash;",
      "⤄": "&nvHarr;",
      "≍⃒": "&nvap;",
      "⊬": "&nvdash;",
      "≥⃒": "&nvge;",
      ">⃒": "&nvgt;",
      "⧞": "&nvinfin;",
      "⤂": "&nvlArr;",
      "≤⃒": "&nvle;",
      "<⃒": "&nvlt;",
      "⊴⃒": "&nvltrie;",
      "⤃": "&nvrArr;",
      "⊵⃒": "&nvrtrie;",
      "∼⃒": "&nvsim;",
      "⇖": "&nwArr;",
      "⤣": "&nwarhk;",
      "⤧": "&nwnear;",
      "ó": "&oacute;",
      "ô": "&ocirc;",
      "о": "&ocy;",
      "ő": "&odblac;",
      "⨸": "&odiv;",
      "⦼": "&odsold;",
      "œ": "&oelig;",
      "⦿": "&ofcir;",
      "𝔬": "&ofr;",
      "˛": "&ogon;",
      "ò": "&ograve;",
      "⧁": "&ogt;",
      "⦵": "&ohbar;",
      "⦾": "&olcir;",
      "⦻": "&olcross;",
      "⧀": "&olt;",
      "ō": "&omacr;",
      "ω": "&omega;",
      "ο": "&omicron;",
      "⦶": "&omid;",
      "𝕠": "&oopf;",
      "⦷": "&opar;",
      "⦹": "&operp;",
      "∨": "&vee;",
      "⩝": "&ord;",
      "ℴ": "&oscr;",
      "ª": "&ordf;",
      "º": "&ordm;",
      "⊶": "&origof;",
      "⩖": "&oror;",
      "⩗": "&orslope;",
      "⩛": "&orv;",
      "ø": "&oslash;",
      "⊘": "&osol;",
      "õ": "&otilde;",
      "⨶": "&otimesas;",
      "ö": "&ouml;",
      "⌽": "&ovbar;",
      "¶": "&para;",
      "⫳": "&parsim;",
      "⫽": "&parsl;",
      "п": "&pcy;",
      "%": "&percnt;",
      ".": "&period;",
      "‰": "&permil;",
      "‱": "&pertenk;",
      "𝔭": "&pfr;",
      "φ": "&phi;",
      "ϕ": "&varphi;",
      "☎": "&phone;",
      "π": "&pi;",
      "ϖ": "&varpi;",
      "ℎ": "&planckh;",
      "+": "&plus;",
      "⨣": "&plusacir;",
      "⨢": "&pluscir;",
      "⨥": "&plusdu;",
      "⩲": "&pluse;",
      "⨦": "&plussim;",
      "⨧": "&plustwo;",
      "⨕": "&pointint;",
      "𝕡": "&popf;",
      "£": "&pound;",
      "⪳": "&prE;",
      "⪷": "&precapprox;",
      "⪹": "&prnap;",
      "⪵": "&prnE;",
      "⋨": "&prnsim;",
      "′": "&prime;",
      "⌮": "&profalar;",
      "⌒": "&profline;",
      "⌓": "&profsurf;",
      "⊰": "&prurel;",
      "𝓅": "&pscr;",
      "ψ": "&psi;",
      " ": "&puncsp;",
      "𝔮": "&qfr;",
      "𝕢": "&qopf;",
      "⁗": "&qprime;",
      "𝓆": "&qscr;",
      "⨖": "&quatint;",
      "?": "&quest;",
      "⤜": "&rAtail;",
      "⥤": "&rHar;",
      "∽̱": "&race;",
      "ŕ": "&racute;",
      "⦳": "&raemptyv;",
      "⦒": "&rangd;",
      "⦥": "&range;",
      "»": "&raquo;",
      "⥵": "&rarrap;",
      "⤠": "&rarrbfs;",
      "⤳": "&rarrc;",
      "⤞": "&rarrfs;",
      "⥅": "&rarrpl;",
      "⥴": "&rarrsim;",
      "↣": "&rightarrowtail;",
      "↝": "&rightsquigarrow;",
      "⤚": "&ratail;",
      "∶": "&ratio;",
      "❳": "&rbbrk;",
      "}": "&rcub;",
      "]": "&rsqb;",
      "⦌": "&rbrke;",
      "⦎": "&rbrksld;",
      "⦐": "&rbrkslu;",
      "ř": "&rcaron;",
      "ŗ": "&rcedil;",
      "р": "&rcy;",
      "⤷": "&rdca;",
      "⥩": "&rdldhar;",
      "↳": "&rdsh;",
      "▭": "&rect;",
      "⥽": "&rfisht;",
      "𝔯": "&rfr;",
      "⥬": "&rharul;",
      "ρ": "&rho;",
      "ϱ": "&varrho;",
      "⇉": "&rrarr;",
      "⋌": "&rthree;",
      "˚": "&ring;",
      "‏": "&rlm;",
      "⎱": "&rmoustache;",
      "⫮": "&rnmid;",
      "⟭": "&roang;",
      "⇾": "&roarr;",
      "⦆": "&ropar;",
      "𝕣": "&ropf;",
      "⨮": "&roplus;",
      "⨵": "&rotimes;",
      ")": "&rpar;",
      "⦔": "&rpargt;",
      "⨒": "&rppolint;",
      "›": "&rsaquo;",
      "𝓇": "&rscr;",
      "⋊": "&rtimes;",
      "▹": "&triangleright;",
      "⧎": "&rtriltri;",
      "⥨": "&ruluhar;",
      "℞": "&rx;",
      "ś": "&sacute;",
      "⪴": "&scE;",
      "⪸": "&succapprox;",
      "š": "&scaron;",
      "ş": "&scedil;",
      "ŝ": "&scirc;",
      "⪶": "&succneqq;",
      "⪺": "&succnapprox;",
      "⋩": "&succnsim;",
      "⨓": "&scpolint;",
      "с": "&scy;",
      "⋅": "&sdot;",
      "⩦": "&sdote;",
      "⇘": "&seArr;",
      "§": "&sect;",
      ";": "&semi;",
      "⤩": "&tosa;",
      "✶": "&sext;",
      "𝔰": "&sfr;",
      "♯": "&sharp;",
      "щ": "&shchcy;",
      "ш": "&shcy;",
      "­": "&shy;",
      "σ": "&sigma;",
      "ς": "&varsigma;",
      "⩪": "&simdot;",
      "⪞": "&simg;",
      "⪠": "&simgE;",
      "⪝": "&siml;",
      "⪟": "&simlE;",
      "≆": "&simne;",
      "⨤": "&simplus;",
      "⥲": "&simrarr;",
      "⨳": "&smashp;",
      "⧤": "&smeparsl;",
      "⌣": "&ssmile;",
      "⪪": "&smt;",
      "⪬": "&smte;",
      "⪬︀": "&smtes;",
      "ь": "&softcy;",
      "/": "&sol;",
      "⧄": "&solb;",
      "⌿": "&solbar;",
      "𝕤": "&sopf;",
      "♠": "&spadesuit;",
      "⊓︀": "&sqcaps;",
      "⊔︀": "&sqcups;",
      "𝓈": "&sscr;",
      "☆": "&star;",
      "⊂": "&subset;",
      "⫅": "&subseteqq;",
      "⪽": "&subdot;",
      "⫃": "&subedot;",
      "⫁": "&submult;",
      "⫋": "&subsetneqq;",
      "⊊": "&subsetneq;",
      "⪿": "&subplus;",
      "⥹": "&subrarr;",
      "⫇": "&subsim;",
      "⫕": "&subsub;",
      "⫓": "&subsup;",
      "♪": "&sung;",
      "¹": "&sup1;",
      "²": "&sup2;",
      "³": "&sup3;",
      "⫆": "&supseteqq;",
      "⪾": "&supdot;",
      "⫘": "&supdsub;",
      "⫄": "&supedot;",
      "⟉": "&suphsol;",
      "⫗": "&suphsub;",
      "⥻": "&suplarr;",
      "⫂": "&supmult;",
      "⫌": "&supsetneqq;",
      "⊋": "&supsetneq;",
      "⫀": "&supplus;",
      "⫈": "&supsim;",
      "⫔": "&supsub;",
      "⫖": "&supsup;",
      "⇙": "&swArr;",
      "⤪": "&swnwar;",
      "ß": "&szlig;",
      "⌖": "&target;",
      "τ": "&tau;",
      "ť": "&tcaron;",
      "ţ": "&tcedil;",
      "т": "&tcy;",
      "⌕": "&telrec;",
      "𝔱": "&tfr;",
      "θ": "&theta;",
      "ϑ": "&vartheta;",
      "þ": "&thorn;",
      "×": "&times;",
      "⨱": "&timesbar;",
      "⨰": "&timesd;",
      "⌶": "&topbot;",
      "⫱": "&topcir;",
      "𝕥": "&topf;",
      "⫚": "&topfork;",
      "‴": "&tprime;",
      "▵": "&utri;",
      "≜": "&trie;",
      "◬": "&tridot;",
      "⨺": "&triminus;",
      "⨹": "&triplus;",
      "⧍": "&trisb;",
      "⨻": "&tritime;",
      "⏢": "&trpezium;",
      "𝓉": "&tscr;",
      "ц": "&tscy;",
      "ћ": "&tshcy;",
      "ŧ": "&tstrok;",
      "⥣": "&uHar;",
      "ú": "&uacute;",
      "ў": "&ubrcy;",
      "ŭ": "&ubreve;",
      "û": "&ucirc;",
      "у": "&ucy;",
      "ű": "&udblac;",
      "⥾": "&ufisht;",
      "𝔲": "&ufr;",
      "ù": "&ugrave;",
      "▀": "&uhblk;",
      "⌜": "&ulcorner;",
      "⌏": "&ulcrop;",
      "◸": "&ultri;",
      "ū": "&umacr;",
      "ų": "&uogon;",
      "𝕦": "&uopf;",
      "υ": "&upsilon;",
      "⇈": "&uuarr;",
      "⌝": "&urcorner;",
      "⌎": "&urcrop;",
      "ů": "&uring;",
      "◹": "&urtri;",
      "𝓊": "&uscr;",
      "⋰": "&utdot;",
      "ũ": "&utilde;",
      "ü": "&uuml;",
      "⦧": "&uwangle;",
      "⫨": "&vBar;",
      "⫩": "&vBarv;",
      "⦜": "&vangrt;",
      "⊊︀": "&vsubne;",
      "⫋︀": "&vsubnE;",
      "⊋︀": "&vsupne;",
      "⫌︀": "&vsupnE;",
      "в": "&vcy;",
      "⊻": "&veebar;",
      "≚": "&veeeq;",
      "⋮": "&vellip;",
      "𝔳": "&vfr;",
      "𝕧": "&vopf;",
      "𝓋": "&vscr;",
      "⦚": "&vzigzag;",
      "ŵ": "&wcirc;",
      "⩟": "&wedbar;",
      "≙": "&wedgeq;",
      "℘": "&wp;",
      "𝔴": "&wfr;",
      "𝕨": "&wopf;",
      "𝓌": "&wscr;",
      "𝔵": "&xfr;",
      "ξ": "&xi;",
      "⋻": "&xnis;",
      "𝕩": "&xopf;",
      "𝓍": "&xscr;",
      "ý": "&yacute;",
      "я": "&yacy;",
      "ŷ": "&ycirc;",
      "ы": "&ycy;",
      "¥": "&yen;",
      "𝔶": "&yfr;",
      "ї": "&yicy;",
      "𝕪": "&yopf;",
      "𝓎": "&yscr;",
      "ю": "&yucy;",
      "ÿ": "&yuml;",
      "ź": "&zacute;",
      "ž": "&zcaron;",
      "з": "&zcy;",
      "ż": "&zdot;",
      "ζ": "&zeta;",
      "𝔷": "&zfr;",
      "ж": "&zhcy;",
      "⇝": "&zigrarr;",
      "𝕫": "&zopf;",
      "𝓏": "&zscr;",
      "‍": "&zwj;",
      "‌": "&zwnj;"
    }
  }
};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};
exports.getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
};
exports.highSurrogateFrom = 55296;
exports.highSurrogateTo = 56319;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = /** @type {HTMLScriptElement} */document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);
    this.client = new WebSocket(url);
    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }

  /**
   * @param {(...args: any[]) => void} f
   */
  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }

    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    }

    // call f with the message string as the first argument
    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);
  return WebSocketClient;
}();


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js");
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />










/**
 * @typedef {Object} OverlayOptions
 * @property {boolean | (error: Error) => boolean} [warnings]
 * @property {boolean | (error: Error) => boolean} [errors]
 * @property {boolean | (error: Error) => boolean} [runtimeErrors]
 * @property {string} [trustedTypesPolicyName]
 */

/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | OverlayOptions} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions
 */
var decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {
  if (typeof overlayOptions === "object") {
    ["warnings", "errors", "runtimeErrors"].forEach(function (property) {
      if (typeof overlayOptions[property] === "string") {
        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);

        // eslint-disable-next-line no-new-func
        var overlayFilterFunction = new Function("message", "var callback = ".concat(overlayFilterFunctionString, "\n        return callback(message)"));
        overlayOptions[property] = overlayFilterFunction;
      }
    });
  }
};

/**
 * @type {Status}
 */
var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};

/** @type {Options} */
var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);
var enabledFeatures = {
  "Hot Module Replacement": false,
  "Live Reloading": false,
  Progress: false,
  Overlay: false
};
if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
  options.progress = true;
  enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
  try {
    options.overlay = JSON.parse(parsedResourceQuery.overlay);
  } catch (e) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Error parsing overlay options from resource query:", e);
  }

  // Fill in default "true" params for partially-specified objects.
  if (typeof options.overlay === "object") {
    options.overlay = _objectSpread({
      errors: true,
      warnings: true,
      runtimeErrors: true
    }, options.overlay);
    decodeOverlayOptions(options.overlay);
  }
  enabledFeatures.Overlay = true;
}
if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}

/**
 * @param {string} level
 */
function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}
if (options.logging) {
  setAllLogLevel(options.logging);
}
(0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.logEnabledFeatures)(enabledFeatures);
self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var overlay = typeof window !== "undefined" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.createOverlay)(typeof options.overlay === "object" ? {
  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
  catchRuntimeError: options.overlay.runtimeErrors
} : {
  trustedTypesPolicyName: false,
  catchRuntimeError: options.overlay
}) : {
  send: function send() {}
};
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }
    options.hot = true;
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }
    options.liveReload = true;
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling...");

    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },
  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,
  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }
    options.overlay = value;
    decodeOverlayOptions(options.overlay);
  },
  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }
    options.reconnect = value;
  },
  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },
  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'
  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");
    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
        header = _formatProblem.header,
        body = _formatProblem.body;
      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);
    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }
    var overlayWarningsSetting = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
    if (overlayWarningsSetting) {
      var warningsToDisplay = typeof overlayWarningsSetting === "function" ? _warnings.filter(overlayWarningsSetting) : _warnings;
      if (warningsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "warning",
          messages: _warnings
        });
      }
    }
    if (params && params.preventReloading) {
      return;
    }
    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");
    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
        header = _formatProblem2.header,
        body = _formatProblem2.body;
      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);
    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }
    var overlayErrorsSettings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
    if (overlayErrorsSettings) {
      var errorsToDisplay = typeof overlayErrorsSettings === "function" ? _errors.filter(overlayErrorsSettings) : _errors;
      if (errorsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "error",
          messages: _errors
        });
      }
    }
  },
  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./client-src/modules/logger/SyncBailHookFake.js":
    /*!*******************************************************!*\
      !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
      \*******************************************************/
    /***/
    function (module) {
      /**
       * Client stub for tapable SyncBailHook
       */
      module.exports = function clientTapableSyncBailHook() {
        return {
          call: function call() {}
        };
      };

      /***/
    },

    /***/"./node_modules/webpack/lib/logging/Logger.js":
    /*!****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/Logger.js ***!
      \****************************************************/
    /***/
    function (__unused_webpack_module, exports) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      var LogType = Object.freeze({
        error: /** @type {"error"} */"error",
        // message, c style arguments
        warn: /** @type {"warn"} */"warn",
        // message, c style arguments
        info: /** @type {"info"} */"info",
        // message, c style arguments
        log: /** @type {"log"} */"log",
        // message, c style arguments
        debug: /** @type {"debug"} */"debug",
        // message, c style arguments

        trace: /** @type {"trace"} */"trace",
        // no arguments

        group: /** @type {"group"} */"group",
        // [label]
        groupCollapsed: /** @type {"groupCollapsed"} */"groupCollapsed",
        // [label]
        groupEnd: /** @type {"groupEnd"} */"groupEnd",
        // [label]

        profile: /** @type {"profile"} */"profile",
        // [profileName]
        profileEnd: /** @type {"profileEnd"} */"profileEnd",
        // [profileName]

        time: /** @type {"time"} */"time",
        // name, time as [seconds, nanoseconds]

        clear: /** @type {"clear"} */"clear",
        // no arguments
        status: /** @type {"status"} */"status" // message, arguments
      });

      exports.LogType = LogType;

      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

      var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger raw log method");
      var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger times");
      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) {
        return i;
      })("webpack logger aggregated times");
      var WebpackLogger = /*#__PURE__*/function () {
        /**
         * @param {function(LogTypeEnum, any[]=): void} log log function
         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
         */
        function WebpackLogger(log, getChildLogger) {
          _classCallCheck(this, WebpackLogger);
          this[LOG_SYMBOL] = log;
          this.getChildLogger = getChildLogger;
        }
        _createClass(WebpackLogger, [{
          key: "error",
          value: function error() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            this[LOG_SYMBOL](LogType.error, args);
          }
        }, {
          key: "warn",
          value: function warn() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            this[LOG_SYMBOL](LogType.warn, args);
          }
        }, {
          key: "info",
          value: function info() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            this[LOG_SYMBOL](LogType.info, args);
          }
        }, {
          key: "log",
          value: function log() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            this[LOG_SYMBOL](LogType.log, args);
          }
        }, {
          key: "debug",
          value: function debug() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            this[LOG_SYMBOL](LogType.debug, args);
          }
        }, {
          key: "assert",
          value: function assert(assertion) {
            if (!assertion) {
              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                args[_key6 - 1] = arguments[_key6];
              }
              this[LOG_SYMBOL](LogType.error, args);
            }
          }
        }, {
          key: "trace",
          value: function trace() {
            this[LOG_SYMBOL](LogType.trace, ["Trace"]);
          }
        }, {
          key: "clear",
          value: function clear() {
            this[LOG_SYMBOL](LogType.clear);
          }
        }, {
          key: "status",
          value: function status() {
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }
            this[LOG_SYMBOL](LogType.status, args);
          }
        }, {
          key: "group",
          value: function group() {
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }
            this[LOG_SYMBOL](LogType.group, args);
          }
        }, {
          key: "groupCollapsed",
          value: function groupCollapsed() {
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }
            this[LOG_SYMBOL](LogType.groupCollapsed, args);
          }
        }, {
          key: "groupEnd",
          value: function groupEnd() {
            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }
            this[LOG_SYMBOL](LogType.groupEnd, args);
          }
        }, {
          key: "profile",
          value: function profile(label) {
            this[LOG_SYMBOL](LogType.profile, [label]);
          }
        }, {
          key: "profileEnd",
          value: function profileEnd(label) {
            this[LOG_SYMBOL](LogType.profileEnd, [label]);
          }
        }, {
          key: "time",
          value: function time(label) {
            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
            this[TIMERS_SYMBOL].set(label, process.hrtime());
          }
        }, {
          key: "timeLog",
          value: function timeLog(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
            }
            var time = process.hrtime(prev);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeEnd",
          value: function timeEnd(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
            }
            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }, {
          key: "timeAggregate",
          value: function timeAggregate(label) {
            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
            if (!prev) {
              throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
            }
            var time = process.hrtime(prev);
            this[TIMERS_SYMBOL].delete(label);
            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
            if (current !== undefined) {
              if (time[1] + current[1] > 1e9) {
                time[0] += current[0] + 1;
                time[1] = time[1] - 1e9 + current[1];
              } else {
                time[0] += current[0];
                time[1] += current[1];
              }
            }
            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
          }
        }, {
          key: "timeAggregateEnd",
          value: function timeAggregateEnd(label) {
            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
            if (time === undefined) return;
            this[TIMERS_AGGREGATES_SYMBOL].delete(label);
            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
          }
        }]);
        return WebpackLogger;
      }();
      exports.Logger = WebpackLogger;

      /***/
    },

    /***/"./node_modules/webpack/lib/logging/createConsoleLogger.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
      \*****************************************************************/
    /***/
    function (module, __unused_webpack_exports, __nested_webpack_require_13155__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) {
          return i;
        }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var _require = __nested_webpack_require_13155__( /*! ./Logger */"./node_modules/webpack/lib/logging/Logger.js"),
        LogType = _require.LogType;

      /** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
      /** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
      /** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

      /** @typedef {function(string): boolean} FilterFunction */

      /**
       * @typedef {Object} LoggerConsole
       * @property {function(): void} clear
       * @property {function(): void} trace
       * @property {(...args: any[]) => void} info
       * @property {(...args: any[]) => void} log
       * @property {(...args: any[]) => void} warn
       * @property {(...args: any[]) => void} error
       * @property {(...args: any[]) => void=} debug
       * @property {(...args: any[]) => void=} group
       * @property {(...args: any[]) => void=} groupCollapsed
       * @property {(...args: any[]) => void=} groupEnd
       * @property {(...args: any[]) => void=} status
       * @property {(...args: any[]) => void=} profile
       * @property {(...args: any[]) => void=} profileEnd
       * @property {(...args: any[]) => void=} logTime
       */

      /**
       * @typedef {Object} LoggerOptions
       * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
       * @property {FilterTypes|boolean} debug filter for debug logging
       * @property {LoggerConsole} console the console to log to
       */

      /**
       * @param {FilterItemTypes} item an input item
       * @returns {FilterFunction} filter function
       */
      var filterToFunction = function filterToFunction(item) {
        if (typeof item === "string") {
          var regExp = new RegExp("[\\\\/]".concat(item.replace(
          // eslint-disable-next-line no-useless-escape
          /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
          return function (ident) {
            return regExp.test(ident);
          };
        }
        if (item && typeof item === "object" && typeof item.test === "function") {
          return function (ident) {
            return item.test(ident);
          };
        }
        if (typeof item === "function") {
          return item;
        }
        if (typeof item === "boolean") {
          return function () {
            return item;
          };
        }
      };

      /**
       * @enum {number}
       */
      var LogLevel = {
        none: 6,
        false: 6,
        error: 5,
        warn: 4,
        info: 3,
        log: 2,
        true: 2,
        verbose: 1
      };

      /**
       * @param {LoggerOptions} options options object
       * @returns {function(string, LogTypeEnum, any[]): void} logging function
       */
      module.exports = function (_ref) {
        var _ref$level = _ref.level,
          level = _ref$level === void 0 ? "info" : _ref$level,
          _ref$debug = _ref.debug,
          debug = _ref$debug === void 0 ? false : _ref$debug,
          console = _ref.console;
        var debugFilters = typeof debug === "boolean" ? [function () {
          return debug;
        }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);
        /** @type {number} */
        var loglevel = LogLevel["".concat(level)] || 0;

        /**
         * @param {string} name name of the logger
         * @param {LogTypeEnum} type type of the log entry
         * @param {any[]} args arguments of the log entry
         * @returns {void}
         */
        var logger = function logger(name, type, args) {
          var labeledArgs = function labeledArgs() {
            if (Array.isArray(args)) {
              if (args.length > 0 && typeof args[0] === "string") {
                return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
              } else {
                return ["[".concat(name, "]")].concat(_toConsumableArray(args));
              }
            } else {
              return [];
            }
          };
          var debug = debugFilters.some(function (f) {
            return f(name);
          });
          switch (type) {
            case LogType.debug:
              if (!debug) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.debug === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.debug.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.log:
              if (!debug && loglevel > LogLevel.log) return;
              console.log.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.info:
              if (!debug && loglevel > LogLevel.info) return;
              console.info.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.warn:
              if (!debug && loglevel > LogLevel.warn) return;
              console.warn.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.error:
              if (!debug && loglevel > LogLevel.error) return;
              console.error.apply(console, _toConsumableArray(labeledArgs()));
              break;
            case LogType.trace:
              if (!debug) return;
              console.trace();
              break;
            case LogType.groupCollapsed:
              if (!debug && loglevel > LogLevel.log) return;
              if (!debug && loglevel > LogLevel.verbose) {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                if (typeof console.groupCollapsed === "function") {
                  // eslint-disable-next-line node/no-unsupported-features/node-builtins
                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
                } else {
                  console.log.apply(console, _toConsumableArray(labeledArgs()));
                }
                break;
              }
            // falls through
            case LogType.group:
              if (!debug && loglevel > LogLevel.log) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.group === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.group.apply(console, _toConsumableArray(labeledArgs()));
              } else {
                console.log.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.groupEnd:
              if (!debug && loglevel > LogLevel.log) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.groupEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.groupEnd();
              }
              break;
            case LogType.time:
              {
                if (!debug && loglevel > LogLevel.log) return;
                var ms = args[1] * 1000 + args[2] / 1000000;
                var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");
                if (typeof console.logTime === "function") {
                  console.logTime(msg);
                } else {
                  console.log(msg);
                }
                break;
              }
            case LogType.profile:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profile === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profile.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.profileEnd:
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.profileEnd === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
              }
              break;
            case LogType.clear:
              if (!debug && loglevel > LogLevel.log) return;
              // eslint-disable-next-line node/no-unsupported-features/node-builtins
              if (typeof console.clear === "function") {
                // eslint-disable-next-line node/no-unsupported-features/node-builtins
                console.clear();
              }
              break;
            case LogType.status:
              if (!debug && loglevel > LogLevel.info) return;
              if (typeof console.status === "function") {
                if (args.length === 0) {
                  console.status();
                } else {
                  console.status.apply(console, _toConsumableArray(labeledArgs()));
                }
              } else {
                if (args.length !== 0) {
                  console.info.apply(console, _toConsumableArray(labeledArgs()));
                }
              }
              break;
            default:
              throw new Error("Unexpected LogType ".concat(type));
          }
        };
        return logger;
      };

      /***/
    },

    /***/"./node_modules/webpack/lib/logging/runtime.js":
    /*!*****************************************************!*\
      !*** ./node_modules/webpack/lib/logging/runtime.js ***!
      \*****************************************************/
    /***/
    function (__unused_webpack_module, exports, __nested_webpack_require_24769__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      var SyncBailHook = __nested_webpack_require_24769__( /*! tapable/lib/SyncBailHook */"./client-src/modules/logger/SyncBailHookFake.js");
      var _require = __nested_webpack_require_24769__( /*! ./Logger */"./node_modules/webpack/lib/logging/Logger.js"),
        Logger = _require.Logger;
      var createConsoleLogger = __nested_webpack_require_24769__( /*! ./createConsoleLogger */"./node_modules/webpack/lib/logging/createConsoleLogger.js");

      /** @type {createConsoleLogger.LoggerOptions} */
      var currentDefaultLoggerOptions = {
        level: "info",
        debug: false,
        console: console
      };
      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

      /**
       * @param {string} name name of the logger
       * @returns {Logger} a logger
       */
      exports.getLogger = function (name) {
        return new Logger(function (type, args) {
          if (exports.hooks.log.call(name, type, args) === undefined) {
            currentDefaultLogger(name, type, args);
          }
        }, function (childName) {
          return exports.getLogger("".concat(name, "/").concat(childName));
        });
      };

      /**
       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
       * @returns {void}
       */
      exports.configureDefaultLogger = function (options) {
        _extends(currentDefaultLoggerOptions, options);
        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
      };
      exports.hooks = {
        log: new SyncBailHook(["origin", "type", "args"])
      };

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_27234__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27234__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_27234__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_27234__.o(definition, key) && !__nested_webpack_require_27234__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_27234__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  !function () {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_27234__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  }();
  /******/
  /************************************************************************/
  var __nested_webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    /*!********************************************!*\
      !*** ./client-src/modules/logger/index.js ***!
      \********************************************/
    __nested_webpack_require_27234__.r(__nested_webpack_exports__);
    /* harmony export */
    __nested_webpack_require_27234__.d(__nested_webpack_exports__, {
      /* harmony export */"default": function () {
        return (/* reexport default export from named module */webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__
        );
      }
      /* harmony export */
    });
    /* harmony import */
    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27234__( /*! webpack/lib/logging/runtime.js */"./node_modules/webpack/lib/logging/runtime.js");
  }();
  var __webpack_export_target__ = exports;
  for (var i in __nested_webpack_exports__) __webpack_export_target__[i] = __nested_webpack_exports__[i];
  if (__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
  /******/
})();

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOverlay: () => (/* binding */ createOverlay),
/* harmony export */   formatProblem: () => (/* binding */ formatProblem)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay/runtime-error.js */ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js");
/* harmony import */ var _overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay/state-machine.js */ "./node_modules/webpack-dev-server/client/overlay/state-machine.js");
/* harmony import */ var _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay/styles.js */ "./node_modules/webpack-dev-server/client/overlay/styles.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).






var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item
 * @returns {{ header: string, body: string }}
 */
function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";
  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || "";
    // eslint-disable-next-line no-nested-ternary
    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }
  if (Array.isArray(item.stack)) {
    item.stack.forEach(function (stack) {
      if (typeof stack === "string") {
        body += "\r\n".concat(stack);
      }
    });
  }
  return {
    header: header,
    body: body
  };
}

/**
 * @typedef {Object} CreateOverlayOptions
 * @property {string | null} trustedTypesPolicyName
 * @property {boolean | (error: Error) => void} [catchRuntimeError]
 */

/**
 *
 * @param {CreateOverlayOptions} options
 */
var createOverlay = function createOverlay(options) {
  /** @type {HTMLIFrameElement | null | undefined} */
  var iframeContainerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var containerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var headerElement;
  /** @type {Array<(element: HTMLDivElement) => void>} */
  var onLoadQueue = [];
  /** @type {TrustedTypePolicy | undefined} */
  var overlayTrustedTypesPolicy;

  /**
   *
   * @param {HTMLElement} element
   * @param {CSSStyleDeclaration} style
   */
  function applyStyle(element, style) {
    Object.keys(style).forEach(function (prop) {
      element.style[prop] = style[prop];
    });
  }

  /**
   * @param {string | null} trustedTypesPolicyName
   */
  function createContainer(trustedTypesPolicyName) {
    // Enable Trusted Types if they are available in the current browser.
    if (window.trustedTypes) {
      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
        createHTML: function createHTML(value) {
          return value;
        }
      });
    }
    iframeContainerElement = document.createElement("iframe");
    iframeContainerElement.id = "webpack-dev-server-client-overlay";
    iframeContainerElement.src = "about:blank";
    applyStyle(iframeContainerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.iframeStyle);
    iframeContainerElement.onload = function () {
      var contentElement = /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.createElement("div");
      containerElement = /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.createElement("div");
      contentElement.id = "webpack-dev-server-client-overlay-div";
      applyStyle(contentElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.containerStyle);
      headerElement = document.createElement("div");
      headerElement.innerText = "Compiled with problems:";
      applyStyle(headerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.headerStyle);
      var closeButtonElement = document.createElement("button");
      applyStyle(closeButtonElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.dismissButtonStyle);
      closeButtonElement.innerText = "×";
      closeButtonElement.ariaLabel = "Dismiss";
      closeButtonElement.addEventListener("click", function () {
        // eslint-disable-next-line no-use-before-define
        overlayService.send({
          type: "DISMISS"
        });
      });
      contentElement.appendChild(headerElement);
      contentElement.appendChild(closeButtonElement);
      contentElement.appendChild(containerElement);

      /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.body.appendChild(contentElement);
      onLoadQueue.forEach(function (onLoad) {
        onLoad( /** @type {HTMLDivElement} */contentElement);
      });
      onLoadQueue = [];

      /** @type {HTMLIFrameElement} */
      iframeContainerElement.onload = null;
    };
    document.body.appendChild(iframeContainerElement);
  }

  /**
   * @param {(element: HTMLDivElement) => void} callback
   * @param {string | null} trustedTypesPolicyName
   */
  function ensureOverlayExists(callback, trustedTypesPolicyName) {
    if (containerElement) {
      containerElement.innerHTML = "";
      // Everything is ready, call the callback right away.
      callback(containerElement);
      return;
    }
    onLoadQueue.push(callback);
    if (iframeContainerElement) {
      return;
    }
    createContainer(trustedTypesPolicyName);
  }

  // Successful compilation.
  function hide() {
    if (!iframeContainerElement) {
      return;
    }

    // Clean up and reset internal state.
    document.body.removeChild(iframeContainerElement);
    iframeContainerElement = null;
    containerElement = null;
  }

  // Compilation with errors (e.g. syntax error or missing modules).
  /**
   * @param {string} type
   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
   * @param {string | null} trustedTypesPolicyName
   * @param {'build' | 'runtime'} messageSource
   */
  function show(type, messages, trustedTypesPolicyName, messageSource) {
    ensureOverlayExists(function () {
      headerElement.innerText = messageSource === "runtime" ? "Uncaught runtime errors:" : "Compiled with problems:";
      messages.forEach(function (message) {
        var entryElement = document.createElement("div");
        var msgStyle = type === "warning" ? _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.warning : _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.error;
        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {
          padding: "1rem 1rem 1.5rem 1rem"
        }));
        var typeElement = document.createElement("div");
        var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;
        typeElement.innerText = header;
        applyStyle(typeElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTypeStyle);
        if (message.moduleIdentifier) {
          applyStyle(typeElement, {
            cursor: "pointer"
          });
          // element.dataset not supported in IE
          typeElement.setAttribute("data-can-open", true);
          typeElement.addEventListener("click", function () {
            fetch("/webpack-dev-server/open-editor?fileName=".concat(message.moduleIdentifier));
          });
        }

        // Make it look similar to our terminal.
        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(body));
        var messageTextNode = document.createElement("div");
        applyStyle(messageTextNode, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTextStyle);
        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
        entryElement.appendChild(typeElement);
        entryElement.appendChild(messageTextNode);

        /** @type {HTMLDivElement} */
        containerElement.appendChild(entryElement);
      });
    }, trustedTypesPolicyName);
  }
  var overlayService = (0,_overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    showOverlay: function showOverlay(_ref) {
      var _ref$level = _ref.level,
        level = _ref$level === void 0 ? "error" : _ref$level,
        messages = _ref.messages,
        messageSource = _ref.messageSource;
      return show(level, messages, options.trustedTypesPolicyName, messageSource);
    },
    hideOverlay: hide
  });
  if (options.catchRuntimeError) {
    /**
     * @param {Error | undefined} error
     * @param {string} fallbackMessage
     */
    var handleError = function handleError(error, fallbackMessage) {
      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);
      var shouldDisplay = typeof options.catchRuntimeError === "function" ? options.catchRuntimeError(errorObject) : true;
      if (shouldDisplay) {
        overlayService.send({
          type: "RUNTIME_ERROR",
          messages: [{
            message: errorObject.message,
            stack: (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.parseErrorToStacks)(errorObject)
          }]
        });
      }
    };
    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToRuntimeError)(function (errorEvent) {
      // error property may be empty in older browser like IE
      var error = errorEvent.error,
        message = errorEvent.message;
      if (!error && !message) {
        return;
      }
      handleError(error, message);
    });
    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToUnhandledRejection)(function (promiseRejectionEvent) {
      var reason = promiseRejectionEvent.reason;
      handleError(reason, "Unknown promise rejection reason");
    });
  }
  return overlayService;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/fsm.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/fsm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
/**
 * @typedef {Object} StateDefinitions
 * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]
 */

/**
 * @typedef {Object} Options
 * @property {{[state: string]: StateDefinitions}} states
 * @property {object} context;
 * @property {string} initial
 */

/**
 * @typedef {Object} Implementation
 * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions
 */

/**
 * A simplified `createMachine` from `@xstate/fsm` with the following differences:
 *
 *  - the returned machine is technically a "service". No `interpret(machine).start()` is needed.
 *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.
 *  - event passed to `send` must be an object with `type` property.
 *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.
 *  Do not return anything if you just want to invoke side effect.
 *
 * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using
 * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.
 *
 * @param {Options} options
 * @param {Implementation} implementation
 */
function createMachine(_ref, _ref2) {
  var states = _ref.states,
    context = _ref.context,
    initial = _ref.initial;
  var actions = _ref2.actions;
  var currentState = initial;
  var currentContext = context;
  return {
    send: function send(event) {
      var currentStateOn = states[currentState].on;
      var transitionConfig = currentStateOn && currentStateOn[event.type];
      if (transitionConfig) {
        currentState = transitionConfig.target;
        if (transitionConfig.actions) {
          transitionConfig.actions.forEach(function (actName) {
            var actionImpl = actions[actName];
            var nextContextValue = actionImpl && actionImpl(currentContext, event);
            if (nextContextValue) {
              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);
            }
          });
        }
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMachine);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/runtime-error.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenToRuntimeError: () => (/* binding */ listenToRuntimeError),
/* harmony export */   listenToUnhandledRejection: () => (/* binding */ listenToUnhandledRejection),
/* harmony export */   parseErrorToStacks: () => (/* binding */ parseErrorToStacks)
/* harmony export */ });
/**
 *
 * @param {Error} error
 */
function parseErrorToStacks(error) {
  if (!error || !(error instanceof Error)) {
    throw new Error("parseErrorToStacks expects Error object");
  }
  if (typeof error.stack === "string") {
    return error.stack.split("\n").filter(function (stack) {
      return stack !== "Error: ".concat(error.message);
    });
  }
}

/**
 * @callback ErrorCallback
 * @param {ErrorEvent} error
 * @returns {void}
 */

/**
 * @param {ErrorCallback} callback
 */
function listenToRuntimeError(callback) {
  window.addEventListener("error", callback);
  return function cleanup() {
    window.removeEventListener("error", callback);
  };
}

/**
 * @callback UnhandledRejectionCallback
 * @param {PromiseRejectionEvent} rejectionEvent
 * @returns {void}
 */

/**
 * @param {UnhandledRejectionCallback} callback
 */
function listenToUnhandledRejection(callback) {
  window.addEventListener("unhandledrejection", callback);
  return function cleanup() {
    window.removeEventListener("unhandledrejection", callback);
  };
}


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/state-machine.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/state-machine.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fsm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsm.js */ "./node_modules/webpack-dev-server/client/overlay/fsm.js");


/**
 * @typedef {Object} ShowOverlayData
 * @property {'warning' | 'error'} level
 * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
 * @property {'build' | 'runtime'} messageSource
 */

/**
 * @typedef {Object} CreateOverlayMachineOptions
 * @property {(data: ShowOverlayData) => void} showOverlay
 * @property {() => void} hideOverlay
 */

/**
 * @param {CreateOverlayMachineOptions} options
 */
var createOverlayMachine = function createOverlayMachine(options) {
  var hideOverlay = options.hideOverlay,
    showOverlay = options.showOverlay;
  var overlayMachine = (0,_fsm_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    initial: "hidden",
    context: {
      level: "error",
      messages: [],
      messageSource: "build"
    },
    states: {
      hidden: {
        on: {
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      },
      displayBuildError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["appendMessages", "showOverlay"]
          }
        }
      },
      displayRuntimeError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["appendMessages", "showOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      }
    }
  }, {
    actions: {
      dismissMessages: function dismissMessages() {
        return {
          messages: [],
          level: "error",
          messageSource: "build"
        };
      },
      appendMessages: function appendMessages(context, event) {
        return {
          messages: context.messages.concat(event.messages),
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      setMessages: function setMessages(context, event) {
        return {
          messages: event.messages,
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      hideOverlay: hideOverlay,
      showOverlay: showOverlay
    }
  });
  return overlayMachine;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOverlayMachine);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/styles.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerStyle: () => (/* binding */ containerStyle),
/* harmony export */   dismissButtonStyle: () => (/* binding */ dismissButtonStyle),
/* harmony export */   headerStyle: () => (/* binding */ headerStyle),
/* harmony export */   iframeStyle: () => (/* binding */ iframeStyle),
/* harmony export */   msgStyles: () => (/* binding */ msgStyles),
/* harmony export */   msgTextStyle: () => (/* binding */ msgTextStyle),
/* harmony export */   msgTypeStyle: () => (/* binding */ msgTypeStyle)
/* harmony export */ });
// styles are inspired by `react-error-overlay`

var msgStyles = {
  error: {
    backgroundColor: "rgba(206, 17, 38, 0.1)",
    color: "#fccfcf"
  },
  warning: {
    backgroundColor: "rgba(251, 245, 180, 0.1)",
    color: "#fbf5b4"
  }
};
var iframeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  border: "none",
  "z-index": 9999999999
};
var containerStyle = {
  position: "fixed",
  boxSizing: "border-box",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  fontSize: "large",
  padding: "2rem 2rem 4rem 2rem",
  lineHeight: "1.2",
  whiteSpace: "pre-wrap",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "white"
};
var headerStyle = {
  color: "#e83b46",
  fontSize: "2em",
  whiteSpace: "pre-wrap",
  fontFamily: "sans-serif",
  margin: "0 2rem 2rem 0",
  flex: "0 0 auto",
  maxHeight: "50%",
  overflow: "auto"
};
var dismissButtonStyle = {
  color: "#ffffff",
  lineHeight: "1rem",
  fontSize: "1.5rem",
  padding: "1rem",
  cursor: "pointer",
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: "transparent",
  border: "none"
};
var msgTypeStyle = {
  color: "#e83b46",
  fontSize: "1.2em",
  marginBottom: "1rem",
  fontFamily: "sans-serif"
};
var msgTextStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Menlo, Consolas, monospace"
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */




// this WebsocketClient is here as a default fallback, in case the client is not injected
/* eslint-disable camelcase */
var Client =
// eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;

// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports
var client = null;

/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */
var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    }

    // Try to reconnect.
    client = null;

    // After 10 retries stop trying, to prevent logspam.
    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);
    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";
  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }
  var auth = objURL.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var host = "";
  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));
    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }
  var pathname = objURL.pathname || "";
  if (objURL.slashes) {
    host = "//".concat(host || "");
    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }
  var search = objURL.search || "";
  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }
  var hash = objURL.hash || "";
  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }
  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */
function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname;

  // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'
  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]";

  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384
  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }
  var socketURLProtocol = parsedURL.protocol || self.location.protocol;

  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }
  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = "";

  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them
  if (parsedURL.username) {
    socketURLAuth = parsedURL.username;

    // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.
    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  }

  // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided
  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;
  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  }

  // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.
  var socketURLPathname = "/ws";
  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }
  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  }

  // Fallback to getting all scripts running in the document.
  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });
  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  }

  // Fail as there was no script to use.
  throw new Error("[webpack-dev-server] Failed to get current script source.");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   logEnabledFeatures: () => (/* binding */ logEnabledFeatures),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server";
// default level is set on the client side, so it does not need
// to be set by the CLI or API
var defaultLevel = "info";

// options new options, merge with old options
/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */
function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}
setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);
var logEnabledFeatures = function logEnabledFeatures(features) {
  var enabledFeatures = Object.keys(features);
  if (!features || enabledFeatures.length === 0) {
    return;
  }
  var logString = "Server started:";

  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
  for (var i = 0; i < enabledFeatures.length; i++) {
    var key = enabledFeatures[i];
    logString += " ".concat(key, " ").concat(features[key] ? "enabled" : "disabled", ",");
  }
  // replace last comma with a period
  logString = logString.slice(0, -1).concat(".");
  log.info(logString);
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");


/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */
function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};
  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");
    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;
    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {
      // URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }
    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }
  return options;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");



/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */
function reloadApp(_ref, status) {
  var hot = _ref.hot,
    liveReload = _ref.liveReload;
  if (status.isUnloading) {
    return;
  }
  var currentHash = status.currentHash,
    previousHash = status.previousHash;
  var isInitial = currentHash.indexOf( /** @type {string} */previousHash) >= 0;
  if (isInitial) {
    return;
  }

  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */
  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }
  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;
  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);
    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  }
  // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self;

    // use parent window for reload (in case we're in an iframe with no valid src)
    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;
        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */

// Send messages to the outside, so plugins can consume it.
/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");

/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
  }
  return string.replace(ansiRegex, "");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
  /** @type {undefined|string} */
  var lastHash;
  var upToDate = function upToDate() {
    return (/** @type {string} */lastHash.indexOf(__webpack_require__.h()) >= 0
    );
  };
  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
  var check = function check() {
    module.hot.check(true).then(function (updatedModules) {
      if (!updatedModules) {
        log("warning", "[HMR] Cannot find update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
        log("warning", "[HMR] (Probably because of restarting the webpack-dev-server)");
        if (typeof window !== "undefined") {
          window.location.reload();
        }
        return;
      }
      if (!upToDate()) {
        check();
      }
      __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
      if (upToDate()) {
        log("info", "[HMR] App is up to date.");
      }
    }).catch(function (err) {
      var status = module.hot.status();
      if (["abort", "fail"].indexOf(status) >= 0) {
        log("warning", "[HMR] Cannot apply update. " + (typeof window !== "undefined" ? "Need to do a full reload!" : "Please reload manually!"));
        log("warning", "[HMR] " + log.formatError(err));
        if (typeof window !== "undefined") {
          window.location.reload();
        }
      } else {
        log("warning", "[HMR] Update failed: " + log.formatError(err));
      }
    });
  };
  var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
  hotEmitter.on("webpackHotUpdate", function (currentHash) {
    lastHash = currentHash;
    if (!upToDate() && module.hot.status() === "idle") {
      log("info", "[HMR] Checking for updates on the server...");
      check();
    }
  });
  log("info", "[HMR] Waiting for update signal from WDS...");
} else {}

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });
  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }
  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", '[HMR] Consider using the optimization.moduleIds: "named" for module names.');
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = "info";
function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
  logLevel = level;
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;
  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + "\n" + stack;
  } else {
    return stack;
  }
};

/***/ }),

/***/ "./app/images/hermes.png":
/*!*******************************!*\
  !*** ./app/images/hermes.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/4b7b09793652e12d40122b92f649528d.png");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1699750479324
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f7703490d178c8fdc206")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "floema:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatefloema"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	__webpack_require__("./app/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./styles/index.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsS0FBSyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLEtBQUssRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQztJQUFHLENBQUM7SUFBQzFCLFVBQVUsRUFBQztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQztJQUFTO0VBQUMsQ0FBQztFQUFDbkIsS0FBSyxFQUFDO0lBQUM2QyxRQUFRLEVBQUM7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxpQkFBaUIsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFB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U0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsZ0JBQWdCLEVBQUMsR0FBRztNQUFDLGtCQUFrQixFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsS0FBSyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFH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Z0JBQWdCLEVBQUMsR0FBRztNQUFDLHFCQUFxQixFQUFDLEdBQUc7TUFBQyxpQkFBaUIsRUFBQyxHQUFHO01BQUMsaUJBQWlCLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLG1CQUFtQixFQUFDLEdBQUc7TUFBQyxpQkFBaUIsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxnQkFBZ0IsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxpQkFBaUIsRUFBQyxHQUFHO01BQUMscUJBQXFCLEVBQUMsR0FBRztNQUFDLHFCQUFxQixFQUFDLEdBQUc7TUFBQyxzQkFBc0IsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxtQkFBbUIsRUFBQyxHQUFHO01BQUMsb0JBQW9CLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxjQUFjLEVBQUMsR0FBRztNQUFDLGVBQWUsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLGVBQWUsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGtCQUFrQixFQUFDLEdBQUc7TUFBQyxtQkFBbUIsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGlCQUFpQixFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsbUJBQW1CLEVBQUMsR0FBRztNQUFDLG9CQUFvQixFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxjQUFjLEVBQUMsR0FBRztNQUFDLGVBQWUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxnQkFBZ0IsRUFBQyxHQUFHO01BQUMsaUJBQWlCLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsS0FBSyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGlCQUFpQixFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMs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QVksRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsY0FBYyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsaUJBQWlCLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsbUJBQW1CLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLGVBQWUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsSUFBSTtNQUFDLGFBQWEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsbUJBQW1CLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxhQUFhLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsSUFBSTtNQUFDLFlBQVksRUFBQyxJQUFJO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsSUFBSTtNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxJQUFJO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLGtCQUFrQixFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxjQUFjLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsSUFBSTtNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsY0FBYyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLGlCQUFpQixFQUFDLEdBQUc7TUFBQyxtQkFBbUIsRUFBQyxHQUFHO01BQUMsa0JBQWtCLEVBQUMsR0FBRztNQUFDLG9CQUFvQixFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsV0FBVyxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGVBQWUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsa0JBQWtCLEVBQUMsR0FBRztNQUFDLG9CQUFvQixFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsbUJBQW1CLEVBQUMsR0FBRztNQUFDLHFCQUFxQixFQUFDLEdBQUc7TUFBQyxvQkFBb0IsRUFBQyxHQUFHO01BQUMsbUJBQW1CLEVBQUMsR0FBRztNQUFDLG1CQUFtQixFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLGdCQUFnQixFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLGlCQUFpQixFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsaUJBQWlCLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsY0FBYyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxjQUFjLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxtQkFBbUIsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxjQUFjLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsY0FBYyxFQUFDLEdBQUc7TUFBQyxlQUFlLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGFBQWEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsZ0JBQWdCLEVBQUMsR0FBRztNQUFDLGdCQUFnQixFQUFDLEdBQUc7TUFBQyxrQkFBa0IsRUFBQyxHQUFHO01BQUMsYUFBYSxFQUFDLEdBQUc7TUFBQyxpQkFBaUIsRUFBQyxHQUFHO01BQUMsbUJBQW1CLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxXQUFXLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLG9CQUFvQixFQUFDLEdBQUc7TUFBQyxxQkFBcUIsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsZUFBZSxFQUFDLEdBQUc7TUFBQyxpQkFBaUIsRUFBQyxHQUFHO01BQUMsa0JBQWtCLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsY0FBYyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFlBQVksRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLGNBQWMsRUFBQyxHQUFHO01BQUMsWUFBWSxFQUFDLEdBQUc7TUFBQyxjQUFjLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxhQUFhLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLGdCQUFnQixFQUFDLElBQUk7TUFBQyxpQkFBaUIsRUFBQyxJQUFJO01BQUMsZ0JBQWdCLEVBQUMsSUFBSTtNQUFDLGlCQUFpQixFQUFDLElBQUk7TUFBQyxZQUFZLEVBQUMsR0FBRztNQUFDLG1CQUFtQixFQUFDLEdBQUc7TUFBQyxvQkFBb0IsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsSUFBSTtNQUFDLFNBQVMsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsSUFBSTtNQUFDLFVBQVUsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsSUFBSTtNQUFDLFdBQVcsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE1BQU0sRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsTUFBTSxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsU0FBUyxFQUFDLEdBQUc7TUFBQyxTQUFTLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsVUFBVSxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFNBQVMsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxNQUFNLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsUUFBUSxFQUFDLElBQUk7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLE9BQU8sRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxVQUFVLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsR0FBRztNQUFDLFVBQVUsRUFBQyxHQUFHO01BQUMsUUFBUSxFQUFDLEdBQUc7TUFBQyxPQUFPLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxHQUFHO01BQUMsV0FBVyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUMsSUFBSTtNQUFDLFFBQVEsRUFBQyxJQUFJO01BQUMsT0FBTyxFQUFDLEdBQUc7TUFBQyxRQUFRLEVBQUM7SUFBRyxDQUFDO0lBQUMxQixVQUFVLEVBQUM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMs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QUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsYUFBYTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLGtCQUFrQjtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxpQkFBaUI7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxlQUFlO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFB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QUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsYUFBYTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLG1CQUFtQjtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLGVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLGFBQWE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLHFCQUFxQjtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxzQkFBc0I7TUFBQyxHQUFHLEVBQUMsb0JBQW9CO01BQUMsR0FBRyxFQUFDLHNCQUFzQjtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxrQkFBa0I7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxvQkFBb0I7TUFBQyxHQUFHLEVBQUMsbUJBQW1CO01BQUMsR0FBRyxFQUFDLHFCQUFxQjtNQUFDLEdBQUcsRUFBQyxvQkFBb0I7TUFBQyxHQUFHLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLG9CQUFvQjtNQUFDLEdBQUcsRUFBQyxrQkFBa0I7TUFBQyxHQUFHLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsZ0JBQWdCO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLGVBQWU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsY0FBYztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxlQUFlO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLGFBQWE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDNkMsQ0FBQyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsY0FBYztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLG9CQUFvQjtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxxQkFBcUI7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxpQkFBaUI7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsYUFBYTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsZUFBZTtNQUFDLEdBQUcsRUFBQyxlQUFlO01BQUMsR0FBRyxFQUFDLGtCQUFrQjtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsbUJBQW1CO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDQyxDQUFDLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxnQkFBZ0I7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLGlCQUFpQjtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsZUFBZTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsY0FBYztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsY0FBYztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLGdCQUFnQjtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQ0MsRUFBRSxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLGFBQWE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLGFBQWE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsdUJBQXVCO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxhQUFhO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsaUJBQWlCO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxpQkFBaUI7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsZ0JBQWdCO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxtQkFBbUI7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxJQUFJLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsZUFBZTtNQUFDLElBQUksRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxXQUFXO01BQUMsSUFBSSxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE1BQU07TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxPQUFPO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsa0JBQWtCO01BQUMsR0FBRyxFQUFDLG1CQUFtQjtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsaUJBQWlCO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsZUFBZTtNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxhQUFhO01BQUMsSUFBSSxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxhQUFhO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLGNBQWM7TUFBQyxHQUFHLEVBQUMsYUFBYTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxhQUFhO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsY0FBYztNQUFDLEdBQUcsRUFBQyxhQUFhO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsWUFBWTtNQUFDLEdBQUcsRUFBQyxXQUFXO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFlBQVk7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFdBQVc7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxZQUFZO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFNBQVM7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxVQUFVO01BQUMsSUFBSSxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsVUFBVTtNQUFDLElBQUksRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsV0FBVztNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUMsR0FBRyxFQUFDLFVBQVU7TUFBQyxHQUFHLEVBQUMsVUFBVTtNQUFDLEdBQUcsRUFBQyxNQUFNO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLElBQUksRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLE9BQU87TUFBQyxHQUFHLEVBQUMsTUFBTTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxVQUFVO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFDLEdBQUcsRUFBQyxPQUFPO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxJQUFJLEVBQUMsT0FBTztNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsSUFBSSxFQUFDLFFBQVE7TUFBQyxJQUFJLEVBQUMsUUFBUTtNQUFDLEdBQUcsRUFBQyxRQUFRO01BQUMsR0FBRyxFQUFDLFFBQVE7TUFB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QUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLE1BQU07V0FDcEI7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLGFBQWE7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9hbnNpLWh0bWwtY29tbXVuaXR5L2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9odG1sLWVudGl0aWVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvbmFtZWQtcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvbnVtZXJpYy11bmljb2RlLW1hcC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvc3Vycm9nYXRlLXBhaXJzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9tb2R1bGVzL2xvZ2dlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9vdmVybGF5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkvZnNtLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkvcnVudGltZS1lcnJvci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9vdmVybGF5L3N0YXRlLW1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvb3ZlcmxheS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvc29ja2V0LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2NyZWF0ZVNvY2tldFVSTC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9wYXJzZVVSTC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9yZWxvYWRBcHAuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc3RyaXBBbnNpLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9lbWl0dGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2ctYXBwbHktcmVzdWx0LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2ltYWdlcy9oZXJtZXMucG5nIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZXJtZXMgZnJvbSAnaW1hZ2VzL2hlcm1lcy5wbmcnXG5jb25zb2xlLmxvZyhoZXJtZXMpXG4vLyDlhpnkuoblgJLlhaXvvIzlsLHopoHlhpljb25zb2xlLGxvZ+aJjeS8muaJp+ihjCIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuc2lIVE1MXG5cbi8vIFJlZmVyZW5jZSB0byBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2Fuc2ktcmVnZXhcbnZhciBfcmVnQU5TSSA9IC8oPzooPzpcXHUwMDFiXFxbKXxcXHUwMDliKSg/Oig/OlswLTldezEsM30pPyg/Oig/OjtbMC05XXswLDN9KSopP1tBLU18Zi1tXSl8XFx1MDAxYltBLU1dL1xuXG52YXIgX2RlZkNvbG9ycyA9IHtcbiAgcmVzZXQ6IFsnZmZmJywgJzAwMCddLCAvLyBbRk9SRUdST1VEX0NPTE9SLCBCQUNLR1JPVU5EX0NPTE9SXVxuICBibGFjazogJzAwMCcsXG4gIHJlZDogJ2ZmMDAwMCcsXG4gIGdyZWVuOiAnMjA5ODA1JyxcbiAgeWVsbG93OiAnZThiZjAzJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIG1hZ2VudGE6ICdmZjAwZmYnLFxuICBjeWFuOiAnMDBmZmVlJyxcbiAgbGlnaHRncmV5OiAnZjBmMGYwJyxcbiAgZGFya2dyZXk6ICc4ODgnXG59XG52YXIgX3N0eWxlcyA9IHtcbiAgMzA6ICdibGFjaycsXG4gIDMxOiAncmVkJyxcbiAgMzI6ICdncmVlbicsXG4gIDMzOiAneWVsbG93JyxcbiAgMzQ6ICdibHVlJyxcbiAgMzU6ICdtYWdlbnRhJyxcbiAgMzY6ICdjeWFuJyxcbiAgMzc6ICdsaWdodGdyZXknXG59XG52YXIgX29wZW5UYWdzID0ge1xuICAnMSc6ICdmb250LXdlaWdodDpib2xkJywgLy8gYm9sZFxuICAnMic6ICdvcGFjaXR5OjAuNScsIC8vIGRpbVxuICAnMyc6ICc8aT4nLCAvLyBpdGFsaWNcbiAgJzQnOiAnPHU+JywgLy8gdW5kZXJzY29yZVxuICAnOCc6ICdkaXNwbGF5Om5vbmUnLCAvLyBoaWRkZW5cbiAgJzknOiAnPGRlbD4nIC8vIGRlbGV0ZVxufVxudmFyIF9jbG9zZVRhZ3MgPSB7XG4gICcyMyc6ICc8L2k+JywgLy8gcmVzZXQgaXRhbGljXG4gICcyNCc6ICc8L3U+JywgLy8gcmVzZXQgdW5kZXJzY29yZVxuICAnMjknOiAnPC9kZWw+JyAvLyByZXNldCBkZWxldGVcbn1cblxuO1swLCAyMSwgMjIsIDI3LCAyOCwgMzksIDQ5XS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gIF9jbG9zZVRhZ3Nbbl0gPSAnPC9zcGFuPidcbn0pXG5cbi8qKlxuICogQ29udmVydHMgdGV4dCB3aXRoIEFOU0kgY29sb3IgY29kZXMgdG8gSFRNTCBtYXJrdXAuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGFuc2lIVE1MICh0ZXh0KSB7XG4gIC8vIFJldHVybnMgdGhlIHRleHQgaWYgdGhlIHN0cmluZyBoYXMgbm8gQU5TSSBlc2NhcGUgY29kZS5cbiAgaWYgKCFfcmVnQU5TSS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIHRleHRcbiAgfVxuXG4gIC8vIENhY2hlIG9wZW5lZCBzZXF1ZW5jZS5cbiAgdmFyIGFuc2lDb2RlcyA9IFtdXG4gIC8vIFJlcGxhY2Ugd2l0aCBtYXJrdXAuXG4gIHZhciByZXQgPSB0ZXh0LnJlcGxhY2UoL1xcMDMzXFxbKFxcZCspbS9nLCBmdW5jdGlvbiAobWF0Y2gsIHNlcSkge1xuICAgIHZhciBvdCA9IF9vcGVuVGFnc1tzZXFdXG4gICAgaWYgKG90KSB7XG4gICAgICAvLyBJZiBjdXJyZW50IHNlcXVlbmNlIGhhcyBiZWVuIG9wZW5lZCwgY2xvc2UgaXQuXG4gICAgICBpZiAoISF+YW5zaUNvZGVzLmluZGV4T2Yoc2VxKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV4dHJhLWJvb2xlYW4tY2FzdFxuICAgICAgICBhbnNpQ29kZXMucG9wKClcbiAgICAgICAgcmV0dXJuICc8L3NwYW4+J1xuICAgICAgfVxuICAgICAgLy8gT3BlbiB0YWcuXG4gICAgICBhbnNpQ29kZXMucHVzaChzZXEpXG4gICAgICByZXR1cm4gb3RbMF0gPT09ICc8JyA/IG90IDogJzxzcGFuIHN0eWxlPVwiJyArIG90ICsgJztcIj4nXG4gICAgfVxuXG4gICAgdmFyIGN0ID0gX2Nsb3NlVGFnc1tzZXFdXG4gICAgaWYgKGN0KSB7XG4gICAgICAvLyBQb3Agc2VxdWVuY2VcbiAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgcmV0dXJuIGN0XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9KVxuXG4gIC8vIE1ha2Ugc3VyZSB0YWdzIGFyZSBjbG9zZWQuXG4gIHZhciBsID0gYW5zaUNvZGVzLmxlbmd0aFxuICA7KGwgPiAwKSAmJiAocmV0ICs9IEFycmF5KGwgKyAxKS5qb2luKCc8L3NwYW4+JykpXG5cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIEN1c3RvbWl6ZSBjb2xvcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29sb3JzIHJlZmVyZW5jZSB0byBfZGVmQ29sb3JzXG4gKi9cbmFuc2lIVE1MLnNldENvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgaWYgKHR5cGVvZiBjb2xvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgY29sb3JzYCBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBPYmplY3QuJylcbiAgfVxuXG4gIHZhciBfZmluYWxDb2xvcnMgPSB7fVxuICBmb3IgKHZhciBrZXkgaW4gX2RlZkNvbG9ycykge1xuICAgIHZhciBoZXggPSBjb2xvcnMuaGFzT3duUHJvcGVydHkoa2V5KSA/IGNvbG9yc1trZXldIDogbnVsbFxuICAgIGlmICghaGV4KSB7XG4gICAgICBfZmluYWxDb2xvcnNba2V5XSA9IF9kZWZDb2xvcnNba2V5XVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKCdyZXNldCcgPT09IGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBoZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGhleCA9IFtoZXhdXG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaGV4KSB8fCBoZXgubGVuZ3RoID09PSAwIHx8IGhleC5zb21lKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaCAhPT0gJ3N0cmluZydcbiAgICAgIH0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlIG9mIGAnICsga2V5ICsgJ2AgcHJvcGVydHkgbXVzdCBiZSBhbiBBcnJheSBhbmQgZWFjaCBpdGVtIGNvdWxkIG9ubHkgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgICAgfVxuICAgICAgdmFyIGRlZkhleENvbG9yID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBpZiAoIWhleFswXSkge1xuICAgICAgICBoZXhbMF0gPSBkZWZIZXhDb2xvclswXVxuICAgICAgfVxuICAgICAgaWYgKGhleC5sZW5ndGggPT09IDEgfHwgIWhleFsxXSkge1xuICAgICAgICBoZXggPSBbaGV4WzBdXVxuICAgICAgICBoZXgucHVzaChkZWZIZXhDb2xvclsxXSlcbiAgICAgIH1cblxuICAgICAgaGV4ID0gaGV4LnNsaWNlKDAsIDIpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGEgaGV4IHN0cmluZywgZS5nLjogRkYwMDAwJylcbiAgICB9XG4gICAgX2ZpbmFsQ29sb3JzW2tleV0gPSBoZXhcbiAgfVxuICBfc2V0VGFncyhfZmluYWxDb2xvcnMpXG59XG5cbi8qKlxuICogUmVzZXQgY29sb3JzLlxuICovXG5hbnNpSFRNTC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgX3NldFRhZ3MoX2RlZkNvbG9ycylcbn1cblxuLyoqXG4gKiBFeHBvc2UgdGFncywgaW5jbHVkaW5nIG9wZW4gYW5kIGNsb3NlLlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuYW5zaUhUTUwudGFncyA9IHt9XG5cbmlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuc2lIVE1MLnRhZ3MsICdvcGVuJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX29wZW5UYWdzIH1cbiAgfSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuc2lIVE1MLnRhZ3MsICdjbG9zZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jbG9zZVRhZ3MgfVxuICB9KVxufSBlbHNlIHtcbiAgYW5zaUhUTUwudGFncy5vcGVuID0gX29wZW5UYWdzXG4gIGFuc2lIVE1MLnRhZ3MuY2xvc2UgPSBfY2xvc2VUYWdzXG59XG5cbmZ1bmN0aW9uIF9zZXRUYWdzIChjb2xvcnMpIHtcbiAgLy8gcmVzZXQgYWxsXG4gIF9vcGVuVGFnc1snMCddID0gJ2ZvbnQtd2VpZ2h0Om5vcm1hbDtvcGFjaXR5OjE7Y29sb3I6IycgKyBjb2xvcnMucmVzZXRbMF0gKyAnO2JhY2tncm91bmQ6IycgKyBjb2xvcnMucmVzZXRbMV1cbiAgLy8gaW52ZXJzZVxuICBfb3BlblRhZ3NbJzcnXSA9ICdjb2xvcjojJyArIGNvbG9ycy5yZXNldFsxXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFswXVxuICAvLyBkYXJrIGdyZXlcbiAgX29wZW5UYWdzWyc5MCddID0gJ2NvbG9yOiMnICsgY29sb3JzLmRhcmtncmV5XG5cbiAgZm9yICh2YXIgY29kZSBpbiBfc3R5bGVzKSB7XG4gICAgdmFyIGNvbG9yID0gX3N0eWxlc1tjb2RlXVxuICAgIHZhciBvcmlDb2xvciA9IGNvbG9yc1tjb2xvcl0gfHwgJzAwMCdcbiAgICBfb3BlblRhZ3NbY29kZV0gPSAnY29sb3I6IycgKyBvcmlDb2xvclxuICAgIGNvZGUgPSBwYXJzZUludChjb2RlKVxuICAgIF9vcGVuVGFnc1soY29kZSArIDEwKS50b1N0cmluZygpXSA9ICdiYWNrZ3JvdW5kOiMnICsgb3JpQ29sb3JcbiAgfVxufVxuXG5hbnNpSFRNTC5yZXNldCgpXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5hbWVkX3JlZmVyZW5jZXNfMSA9IHJlcXVpcmUoXCIuL25hbWVkLXJlZmVyZW5jZXNcIik7XG52YXIgbnVtZXJpY191bmljb2RlX21hcF8xID0gcmVxdWlyZShcIi4vbnVtZXJpYy11bmljb2RlLW1hcFwiKTtcbnZhciBzdXJyb2dhdGVfcGFpcnNfMSA9IHJlcXVpcmUoXCIuL3N1cnJvZ2F0ZS1wYWlyc1wiKTtcbnZhciBhbGxOYW1lZFJlZmVyZW5jZXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbmFtZWRfcmVmZXJlbmNlc18xLm5hbWVkUmVmZXJlbmNlcyksIHsgYWxsOiBuYW1lZF9yZWZlcmVuY2VzXzEubmFtZWRSZWZlcmVuY2VzLmh0bWw1IH0pO1xudmFyIGVuY29kZVJlZ0V4cHMgPSB7XG4gICAgc3BlY2lhbENoYXJzOiAvWzw+J1wiJl0vZyxcbiAgICBub25Bc2NpaTogL1s8PidcIiZcXHUwMDgwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vZyxcbiAgICBub25Bc2NpaVByaW50YWJsZTogL1s8PidcIiZcXHgwMS1cXHgwOFxceDExLVxceDE1XFx4MTctXFx4MUZcXHg3Zi1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdL2csXG4gICAgbm9uQXNjaWlQcmludGFibGVPbmx5OiAvW1xceDAxLVxceDA4XFx4MTEtXFx4MTVcXHgxNy1cXHgxRlxceDdmLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vZyxcbiAgICBleHRlbnNpdmU6IC9bXFx4MDEtXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDJjXFx4MmUtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2RcXHg3Zi1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdL2dcbn07XG52YXIgZGVmYXVsdEVuY29kZU9wdGlvbnMgPSB7XG4gICAgbW9kZTogJ3NwZWNpYWxDaGFycycsXG4gICAgbGV2ZWw6ICdhbGwnLFxuICAgIG51bWVyaWM6ICdkZWNpbWFsJ1xufTtcbi8qKiBFbmNvZGVzIGFsbCB0aGUgbmVjZXNzYXJ5IChzcGVjaWZpZWQgYnkgYGxldmVsYCkgY2hhcmFjdGVycyBpbiB0aGUgdGV4dCAqL1xuZnVuY3Rpb24gZW5jb2RlKHRleHQsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHRFbmNvZGVPcHRpb25zIDogX2EsIF9jID0gX2IubW9kZSwgbW9kZSA9IF9jID09PSB2b2lkIDAgPyAnc3BlY2lhbENoYXJzJyA6IF9jLCBfZCA9IF9iLm51bWVyaWMsIG51bWVyaWMgPSBfZCA9PT0gdm9pZCAwID8gJ2RlY2ltYWwnIDogX2QsIF9lID0gX2IubGV2ZWwsIGxldmVsID0gX2UgPT09IHZvaWQgMCA/ICdhbGwnIDogX2U7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIGVuY29kZVJlZ0V4cCA9IGVuY29kZVJlZ0V4cHNbbW9kZV07XG4gICAgdmFyIHJlZmVyZW5jZXMgPSBhbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmNoYXJhY3RlcnM7XG4gICAgdmFyIGlzSGV4ID0gbnVtZXJpYyA9PT0gJ2hleGFkZWNpbWFsJztcbiAgICBlbmNvZGVSZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgX2IgPSBlbmNvZGVSZWdFeHAuZXhlYyh0ZXh0KTtcbiAgICB2YXIgX2M7XG4gICAgaWYgKF9iKSB7XG4gICAgICAgIF9jID0gJyc7XG4gICAgICAgIHZhciBfZCA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChfZCAhPT0gX2IuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBfYyArPSB0ZXh0LnN1YnN0cmluZyhfZCwgX2IuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9lID0gX2JbMF07XG4gICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSByZWZlcmVuY2VzW19lXTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0XzEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZV8xID0gX2UubGVuZ3RoID4gMSA/IHN1cnJvZ2F0ZV9wYWlyc18xLmdldENvZGVQb2ludChfZSwgMCkgOiBfZS5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdF8xID0gKGlzSGV4ID8gJyYjeCcgKyBjb2RlXzEudG9TdHJpbmcoMTYpIDogJyYjJyArIGNvZGVfMSkgKyAnOyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYyArPSByZXN1bHRfMTtcbiAgICAgICAgICAgIF9kID0gX2IuaW5kZXggKyBfZS5sZW5ndGg7XG4gICAgICAgIH0gd2hpbGUgKChfYiA9IGVuY29kZVJlZ0V4cC5leGVjKHRleHQpKSk7XG4gICAgICAgIGlmIChfZCAhPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIF9jICs9IHRleHQuc3Vic3RyaW5nKF9kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgX2MgPVxuICAgICAgICAgICAgdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIF9jO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG52YXIgZGVmYXVsdERlY29kZU9wdGlvbnMgPSB7XG4gICAgc2NvcGU6ICdib2R5JyxcbiAgICBsZXZlbDogJ2FsbCdcbn07XG52YXIgc3RyaWN0ID0gLyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOy9nO1xudmFyIGF0dHJpYnV0ZSA9IC8mKD86I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKVs7PV0/L2c7XG52YXIgYmFzZURlY29kZVJlZ0V4cHMgPSB7XG4gICAgeG1sOiB7XG4gICAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgYm9keTogbmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLnhtbFxuICAgIH0sXG4gICAgaHRtbDQ6IHtcbiAgICAgICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgICAgIGF0dHJpYnV0ZTogYXR0cmlidXRlLFxuICAgICAgICBib2R5OiBuYW1lZF9yZWZlcmVuY2VzXzEuYm9keVJlZ0V4cHMuaHRtbDRcbiAgICB9LFxuICAgIGh0bWw1OiB7XG4gICAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgYm9keTogbmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLmh0bWw1XG4gICAgfVxufTtcbnZhciBkZWNvZGVSZWdFeHBzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGJhc2VEZWNvZGVSZWdFeHBzKSwgeyBhbGw6IGJhc2VEZWNvZGVSZWdFeHBzLmh0bWw1IH0pO1xudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG52YXIgb3V0T2ZCb3VuZHNDaGFyID0gZnJvbUNoYXJDb2RlKDY1NTMzKTtcbnZhciBkZWZhdWx0RGVjb2RlRW50aXR5T3B0aW9ucyA9IHtcbiAgICBsZXZlbDogJ2FsbCdcbn07XG4vKiogRGVjb2RlcyBhIHNpbmdsZSBlbnRpdHkgKi9cbmZ1bmN0aW9uIGRlY29kZUVudGl0eShlbnRpdHksIF9hKSB7XG4gICAgdmFyIF9iID0gKF9hID09PSB2b2lkIDAgPyBkZWZhdWx0RGVjb2RlRW50aXR5T3B0aW9ucyA6IF9hKS5sZXZlbCwgbGV2ZWwgPSBfYiA9PT0gdm9pZCAwID8gJ2FsbCcgOiBfYjtcbiAgICBpZiAoIWVudGl0eSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBfYiA9IGVudGl0eTtcbiAgICB2YXIgZGVjb2RlRW50aXR5TGFzdENoYXJfMSA9IGVudGl0eVtlbnRpdHkubGVuZ3RoIC0gMV07XG4gICAgaWYgKGZhbHNlXG4gICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzEgPT09ICc9Jykge1xuICAgICAgICBfYiA9XG4gICAgICAgICAgICBlbnRpdHk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZhbHNlXG4gICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzEgIT09ICc7Jykge1xuICAgICAgICBfYiA9XG4gICAgICAgICAgICBlbnRpdHk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMSA9IGFsbE5hbWVkUmVmZXJlbmNlc1tsZXZlbF0uZW50aXRpZXNbZW50aXR5XTtcbiAgICAgICAgaWYgKGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzEpIHtcbiAgICAgICAgICAgIF9iID0gZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbnRpdHlbMF0gPT09ICcmJyAmJiBlbnRpdHlbMV0gPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGRlY29kZVNlY29uZENoYXJfMSA9IGVudGl0eVsyXTtcbiAgICAgICAgICAgIHZhciBkZWNvZGVDb2RlXzEgPSBkZWNvZGVTZWNvbmRDaGFyXzEgPT0gJ3gnIHx8IGRlY29kZVNlY29uZENoYXJfMSA9PSAnWCdcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMyksIDE2KVxuICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoZW50aXR5LnN1YnN0cigyKSk7XG4gICAgICAgICAgICBfYiA9XG4gICAgICAgICAgICAgICAgZGVjb2RlQ29kZV8xID49IDB4MTBmZmZmXG4gICAgICAgICAgICAgICAgICAgID8gb3V0T2ZCb3VuZHNDaGFyXG4gICAgICAgICAgICAgICAgICAgIDogZGVjb2RlQ29kZV8xID4gNjU1MzVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3Vycm9nYXRlX3BhaXJzXzEuZnJvbUNvZGVQb2ludChkZWNvZGVDb2RlXzEpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZyb21DaGFyQ29kZShudW1lcmljX3VuaWNvZGVfbWFwXzEubnVtZXJpY1VuaWNvZGVNYXBbZGVjb2RlQ29kZV8xXSB8fCBkZWNvZGVDb2RlXzEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfYjtcbn1cbmV4cG9ydHMuZGVjb2RlRW50aXR5ID0gZGVjb2RlRW50aXR5O1xuLyoqIERlY29kZXMgYWxsIGVudGl0aWVzIGluIHRoZSB0ZXh0ICovXG5mdW5jdGlvbiBkZWNvZGUodGV4dCwgX2EpIHtcbiAgICB2YXIgZGVjb2RlU2Vjb25kQ2hhcl8xID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHREZWNvZGVPcHRpb25zIDogX2EsIGRlY29kZUNvZGVfMSA9IGRlY29kZVNlY29uZENoYXJfMS5sZXZlbCwgbGV2ZWwgPSBkZWNvZGVDb2RlXzEgPT09IHZvaWQgMCA/ICdhbGwnIDogZGVjb2RlQ29kZV8xLCBfYiA9IGRlY29kZVNlY29uZENoYXJfMS5zY29wZSwgc2NvcGUgPSBfYiA9PT0gdm9pZCAwID8gbGV2ZWwgPT09ICd4bWwnID8gJ3N0cmljdCcgOiAnYm9keScgOiBfYjtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgZGVjb2RlUmVnRXhwID0gZGVjb2RlUmVnRXhwc1tsZXZlbF1bc2NvcGVdO1xuICAgIHZhciByZWZlcmVuY2VzID0gYWxsTmFtZWRSZWZlcmVuY2VzW2xldmVsXS5lbnRpdGllcztcbiAgICB2YXIgaXNBdHRyaWJ1dGUgPSBzY29wZSA9PT0gJ2F0dHJpYnV0ZSc7XG4gICAgdmFyIGlzU3RyaWN0ID0gc2NvcGUgPT09ICdzdHJpY3QnO1xuICAgIGRlY29kZVJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgIHZhciByZXBsYWNlTWF0Y2hfMSA9IGRlY29kZVJlZ0V4cC5leGVjKHRleHQpO1xuICAgIHZhciByZXBsYWNlUmVzdWx0XzE7XG4gICAgaWYgKHJlcGxhY2VNYXRjaF8xKSB7XG4gICAgICAgIHJlcGxhY2VSZXN1bHRfMSA9ICcnO1xuICAgICAgICB2YXIgcmVwbGFjZUxhc3RJbmRleF8xID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VMYXN0SW5kZXhfMSAhPT0gcmVwbGFjZU1hdGNoXzEuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlUmVzdWx0XzEgKz0gdGV4dC5zdWJzdHJpbmcocmVwbGFjZUxhc3RJbmRleF8xLCByZXBsYWNlTWF0Y2hfMS5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVwbGFjZUlucHV0XzEgPSByZXBsYWNlTWF0Y2hfMVswXTtcbiAgICAgICAgICAgIHZhciBkZWNvZGVSZXN1bHRfMSA9IHJlcGxhY2VJbnB1dF8xO1xuICAgICAgICAgICAgdmFyIGRlY29kZUVudGl0eUxhc3RDaGFyXzIgPSByZXBsYWNlSW5wdXRfMVtyZXBsYWNlSW5wdXRfMS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGlmIChpc0F0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzIgPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID0gcmVwbGFjZUlucHV0XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1N0cmljdFxuICAgICAgICAgICAgICAgICYmIGRlY29kZUVudGl0eUxhc3RDaGFyXzIgIT09ICc7Jykge1xuICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID0gcmVwbGFjZUlucHV0XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMiA9IHJlZmVyZW5jZXNbcmVwbGFjZUlucHV0XzFdO1xuICAgICAgICAgICAgICAgIGlmIChkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID0gZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZUlucHV0XzFbMF0gPT09ICcmJyAmJiByZXBsYWNlSW5wdXRfMVsxXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvZGVTZWNvbmRDaGFyXzIgPSByZXBsYWNlSW5wdXRfMVsyXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY29kZUNvZGVfMiA9IGRlY29kZVNlY29uZENoYXJfMiA9PSAneCcgfHwgZGVjb2RlU2Vjb25kQ2hhcl8yID09ICdYJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludChyZXBsYWNlSW5wdXRfMS5zdWJzdHIoMyksIDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChyZXBsYWNlSW5wdXRfMS5zdWJzdHIoMikpO1xuICAgICAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVDb2RlXzIgPj0gMHgxMGZmZmZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG91dE9mQm91bmRzQ2hhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlQ29kZV8yID4gNjU1MzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdXJyb2dhdGVfcGFpcnNfMS5mcm9tQ29kZVBvaW50KGRlY29kZUNvZGVfMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUobnVtZXJpY191bmljb2RlX21hcF8xLm51bWVyaWNVbmljb2RlTWFwW2RlY29kZUNvZGVfMl0gfHwgZGVjb2RlQ29kZV8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXBsYWNlUmVzdWx0XzEgKz0gZGVjb2RlUmVzdWx0XzE7XG4gICAgICAgICAgICByZXBsYWNlTGFzdEluZGV4XzEgPSByZXBsYWNlTWF0Y2hfMS5pbmRleCArIHJlcGxhY2VJbnB1dF8xLmxlbmd0aDtcbiAgICAgICAgfSB3aGlsZSAoKHJlcGxhY2VNYXRjaF8xID0gZGVjb2RlUmVnRXhwLmV4ZWModGV4dCkpKTtcbiAgICAgICAgaWYgKHJlcGxhY2VMYXN0SW5kZXhfMSAhPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlcGxhY2VSZXN1bHRfMSArPSB0ZXh0LnN1YnN0cmluZyhyZXBsYWNlTGFzdEluZGV4XzEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXBsYWNlUmVzdWx0XzEgPVxuICAgICAgICAgICAgdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcGxhY2VSZXN1bHRfMTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLmJvZHlSZWdFeHBzPXt4bWw6LyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZyxodG1sNDovJm5vdGluO3wmKD86bmJzcHxpZXhjbHxjZW50fHBvdW5kfGN1cnJlbnx5ZW58YnJ2YmFyfHNlY3R8dW1sfGNvcHl8b3JkZnxsYXF1b3xub3R8c2h5fHJlZ3xtYWNyfGRlZ3xwbHVzbW58c3VwMnxzdXAzfGFjdXRlfG1pY3JvfHBhcmF8bWlkZG90fGNlZGlsfHN1cDF8b3JkbXxyYXF1b3xmcmFjMTR8ZnJhYzEyfGZyYWMzNHxpcXVlc3R8QWdyYXZlfEFhY3V0ZXxBY2lyY3xBdGlsZGV8QXVtbHxBcmluZ3xBRWxpZ3xDY2VkaWx8RWdyYXZlfEVhY3V0ZXxFY2lyY3xFdW1sfElncmF2ZXxJYWN1dGV8SWNpcmN8SXVtbHxFVEh8TnRpbGRlfE9ncmF2ZXxPYWN1dGV8T2NpcmN8T3RpbGRlfE91bWx8dGltZXN8T3NsYXNofFVncmF2ZXxVYWN1dGV8VWNpcmN8VXVtbHxZYWN1dGV8VEhPUk58c3psaWd8YWdyYXZlfGFhY3V0ZXxhY2lyY3xhdGlsZGV8YXVtbHxhcmluZ3xhZWxpZ3xjY2VkaWx8ZWdyYXZlfGVhY3V0ZXxlY2lyY3xldW1sfGlncmF2ZXxpYWN1dGV8aWNpcmN8aXVtbHxldGh8bnRpbGRlfG9ncmF2ZXxvYWN1dGV8b2NpcmN8b3RpbGRlfG91bWx8ZGl2aWRlfG9zbGFzaHx1Z3JhdmV8dWFjdXRlfHVjaXJjfHV1bWx8eWFjdXRlfHRob3JufHl1bWx8cXVvdHxhbXB8bHR8Z3R8I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTs/L2csaHRtbDU6LyZjZW50ZXJkb3Q7fCZjb3B5c3I7fCZkaXZpZGVvbnRpbWVzO3wmZ3RjYzt8Jmd0Y2lyO3wmZ3Rkb3Q7fCZndGxQYXI7fCZndHF1ZXN0O3wmZ3RyYXBwcm94O3wmZ3RyYXJyO3wmZ3RyZG90O3wmZ3RyZXFsZXNzO3wmZ3RyZXFxbGVzczt8Jmd0cmxlc3M7fCZndHJzaW07fCZsdGNjO3wmbHRjaXI7fCZsdGRvdDt8Jmx0aHJlZTt8Jmx0aW1lczt8Jmx0bGFycjt8Jmx0cXVlc3Q7fCZsdHJQYXI7fCZsdHJpO3wmbHRyaWU7fCZsdHJpZjt8Jm5vdGluO3wmbm90aW5FO3wmbm90aW5kb3Q7fCZub3RpbnZhO3wmbm90aW52Yjt8Jm5vdGludmM7fCZub3RuaTt8Jm5vdG5pdmE7fCZub3RuaXZiO3wmbm90bml2Yzt8JnBhcmFsbGVsO3wmdGltZXNiO3wmdGltZXNiYXI7fCZ0aW1lc2Q7fCYoPzpBRWxpZ3xBTVB8QWFjdXRlfEFjaXJjfEFncmF2ZXxBcmluZ3xBdGlsZGV8QXVtbHxDT1BZfENjZWRpbHxFVEh8RWFjdXRlfEVjaXJjfEVncmF2ZXxFdW1sfEdUfElhY3V0ZXxJY2lyY3xJZ3JhdmV8SXVtbHxMVHxOdGlsZGV8T2FjdXRlfE9jaXJjfE9ncmF2ZXxPc2xhc2h8T3RpbGRlfE91bWx8UVVPVHxSRUd8VEhPUk58VWFjdXRlfFVjaXJjfFVncmF2ZXxVdW1sfFlhY3V0ZXxhYWN1dGV8YWNpcmN8YWN1dGV8YWVsaWd8YWdyYXZlfGFtcHxhcmluZ3xhdGlsZGV8YXVtbHxicnZiYXJ8Y2NlZGlsfGNlZGlsfGNlbnR8Y29weXxjdXJyZW58ZGVnfGRpdmlkZXxlYWN1dGV8ZWNpcmN8ZWdyYXZlfGV0aHxldW1sfGZyYWMxMnxmcmFjMTR8ZnJhYzM0fGd0fGlhY3V0ZXxpY2lyY3xpZXhjbHxpZ3JhdmV8aXF1ZXN0fGl1bWx8bGFxdW98bHR8bWFjcnxtaWNyb3xtaWRkb3R8bmJzcHxub3R8bnRpbGRlfG9hY3V0ZXxvY2lyY3xvZ3JhdmV8b3JkZnxvcmRtfG9zbGFzaHxvdGlsZGV8b3VtbHxwYXJhfHBsdXNtbnxwb3VuZHxxdW90fHJhcXVvfHJlZ3xzZWN0fHNoeXxzdXAxfHN1cDJ8c3VwM3xzemxpZ3x0aG9ybnx0aW1lc3x1YWN1dGV8dWNpcmN8dWdyYXZlfHVtbHx1dW1sfHlhY3V0ZXx5ZW58eXVtbHwjXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZ307ZXhwb3J0cy5uYW1lZFJlZmVyZW5jZXM9e3htbDp7ZW50aXRpZXM6e1wiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiZhcG9zO1wiOlwiJ1wiLFwiJmFtcDtcIjpcIiZcIn0sY2hhcmFjdGVyczp7XCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJmFwb3M7XCIsXCImXCI6XCImYW1wO1wifX0saHRtbDQ6e2VudGl0aWVzOntcIiZhcG9zO1wiOlwiJ1wiLFwiJm5ic3BcIjpcIsKgXCIsXCImbmJzcDtcIjpcIsKgXCIsXCImaWV4Y2xcIjpcIsKhXCIsXCImaWV4Y2w7XCI6XCLCoVwiLFwiJmNlbnRcIjpcIsKiXCIsXCImY2VudDtcIjpcIsKiXCIsXCImcG91bmRcIjpcIsKjXCIsXCImcG91bmQ7XCI6XCLCo1wiLFwiJmN1cnJlblwiOlwiwqRcIixcIiZjdXJyZW47XCI6XCLCpFwiLFwiJnllblwiOlwiwqVcIixcIiZ5ZW47XCI6XCLCpVwiLFwiJmJydmJhclwiOlwiwqZcIixcIiZicnZiYXI7XCI6XCLCplwiLFwiJnNlY3RcIjpcIsKnXCIsXCImc2VjdDtcIjpcIsKnXCIsXCImdW1sXCI6XCLCqFwiLFwiJnVtbDtcIjpcIsKoXCIsXCImY29weVwiOlwiwqlcIixcIiZjb3B5O1wiOlwiwqlcIixcIiZvcmRmXCI6XCLCqlwiLFwiJm9yZGY7XCI6XCLCqlwiLFwiJmxhcXVvXCI6XCLCq1wiLFwiJmxhcXVvO1wiOlwiwqtcIixcIiZub3RcIjpcIsKsXCIsXCImbm90O1wiOlwiwqxcIixcIiZzaHlcIjpcIsKtXCIsXCImc2h5O1wiOlwiwq1cIixcIiZyZWdcIjpcIsKuXCIsXCImcmVnO1wiOlwiwq5cIixcIiZtYWNyXCI6XCLCr1wiLFwiJm1hY3I7XCI6XCLCr1wiLFwiJmRlZ1wiOlwiwrBcIixcIiZkZWc7XCI6XCLCsFwiLFwiJnBsdXNtblwiOlwiwrFcIixcIiZwbHVzbW47XCI6XCLCsVwiLFwiJnN1cDJcIjpcIsKyXCIsXCImc3VwMjtcIjpcIsKyXCIsXCImc3VwM1wiOlwiwrNcIixcIiZzdXAzO1wiOlwiwrNcIixcIiZhY3V0ZVwiOlwiwrRcIixcIiZhY3V0ZTtcIjpcIsK0XCIsXCImbWljcm9cIjpcIsK1XCIsXCImbWljcm87XCI6XCLCtVwiLFwiJnBhcmFcIjpcIsK2XCIsXCImcGFyYTtcIjpcIsK2XCIsXCImbWlkZG90XCI6XCLCt1wiLFwiJm1pZGRvdDtcIjpcIsK3XCIsXCImY2VkaWxcIjpcIsK4XCIsXCImY2VkaWw7XCI6XCLCuFwiLFwiJnN1cDFcIjpcIsK5XCIsXCImc3VwMTtcIjpcIsK5XCIsXCImb3JkbVwiOlwiwrpcIixcIiZvcmRtO1wiOlwiwrpcIixcIiZyYXF1b1wiOlwiwrtcIixcIiZyYXF1bztcIjpcIsK7XCIsXCImZnJhYzE0XCI6XCLCvFwiLFwiJmZyYWMxNDtcIjpcIsK8XCIsXCImZnJhYzEyXCI6XCLCvVwiLFwiJmZyYWMxMjtcIjpcIsK9XCIsXCImZnJhYzM0XCI6XCLCvlwiLFwiJmZyYWMzNDtcIjpcIsK+XCIsXCImaXF1ZXN0XCI6XCLCv1wiLFwiJmlxdWVzdDtcIjpcIsK/XCIsXCImQWdyYXZlXCI6XCLDgFwiLFwiJkFncmF2ZTtcIjpcIsOAXCIsXCImQWFjdXRlXCI6XCLDgVwiLFwiJkFhY3V0ZTtcIjpcIsOBXCIsXCImQWNpcmNcIjpcIsOCXCIsXCImQWNpcmM7XCI6XCLDglwiLFwiJkF0aWxkZVwiOlwiw4NcIixcIiZBdGlsZGU7XCI6XCLDg1wiLFwiJkF1bWxcIjpcIsOEXCIsXCImQXVtbDtcIjpcIsOEXCIsXCImQXJpbmdcIjpcIsOFXCIsXCImQXJpbmc7XCI6XCLDhVwiLFwiJkFFbGlnXCI6XCLDhlwiLFwiJkFFbGlnO1wiOlwiw4ZcIixcIiZDY2VkaWxcIjpcIsOHXCIsXCImQ2NlZGlsO1wiOlwiw4dcIixcIiZFZ3JhdmVcIjpcIsOIXCIsXCImRWdyYXZlO1wiOlwiw4hcIixcIiZFYWN1dGVcIjpcIsOJXCIsXCImRWFjdXRlO1wiOlwiw4lcIixcIiZFY2lyY1wiOlwiw4pcIixcIiZFY2lyYztcIjpcIsOKXCIsXCImRXVtbFwiOlwiw4tcIixcIiZFdW1sO1wiOlwiw4tcIixcIiZJZ3JhdmVcIjpcIsOMXCIsXCImSWdyYXZlO1wiOlwiw4xcIixcIiZJYWN1dGVcIjpcIsONXCIsXCImSWFjdXRlO1wiOlwiw41cIixcIiZJY2lyY1wiOlwiw45cIixcIiZJY2lyYztcIjpcIsOOXCIsXCImSXVtbFwiOlwiw49cIixcIiZJdW1sO1wiOlwiw49cIixcIiZFVEhcIjpcIsOQXCIsXCImRVRIO1wiOlwiw5BcIixcIiZOdGlsZGVcIjpcIsORXCIsXCImTnRpbGRlO1wiOlwiw5FcIixcIiZPZ3JhdmVcIjpcIsOSXCIsXCImT2dyYXZlO1wiOlwiw5JcIixcIiZPYWN1dGVcIjpcIsOTXCIsXCImT2FjdXRlO1wiOlwiw5NcIixcIiZPY2lyY1wiOlwiw5RcIixcIiZPY2lyYztcIjpcIsOUXCIsXCImT3RpbGRlXCI6XCLDlVwiLFwiJk90aWxkZTtcIjpcIsOVXCIsXCImT3VtbFwiOlwiw5ZcIixcIiZPdW1sO1wiOlwiw5ZcIixcIiZ0aW1lc1wiOlwiw5dcIixcIiZ0aW1lcztcIjpcIsOXXCIsXCImT3NsYXNoXCI6XCLDmFwiLFwiJk9zbGFzaDtcIjpcIsOYXCIsXCImVWdyYXZlXCI6XCLDmVwiLFwiJlVncmF2ZTtcIjpcIsOZXCIsXCImVWFjdXRlXCI6XCLDmlwiLFwiJlVhY3V0ZTtcIjpcIsOaXCIsXCImVWNpcmNcIjpcIsObXCIsXCImVWNpcmM7XCI6XCLDm1wiLFwiJlV1bWxcIjpcIsOcXCIsXCImVXVtbDtcIjpcIsOcXCIsXCImWWFjdXRlXCI6XCLDnVwiLFwiJllhY3V0ZTtcIjpcIsOdXCIsXCImVEhPUk5cIjpcIsOeXCIsXCImVEhPUk47XCI6XCLDnlwiLFwiJnN6bGlnXCI6XCLDn1wiLFwiJnN6bGlnO1wiOlwiw59cIixcIiZhZ3JhdmVcIjpcIsOgXCIsXCImYWdyYXZlO1wiOlwiw6BcIixcIiZhYWN1dGVcIjpcIsOhXCIsXCImYWFjdXRlO1wiOlwiw6FcIixcIiZhY2lyY1wiOlwiw6JcIixcIiZhY2lyYztcIjpcIsOiXCIsXCImYXRpbGRlXCI6XCLDo1wiLFwiJmF0aWxkZTtcIjpcIsOjXCIsXCImYXVtbFwiOlwiw6RcIixcIiZhdW1sO1wiOlwiw6RcIixcIiZhcmluZ1wiOlwiw6VcIixcIiZhcmluZztcIjpcIsOlXCIsXCImYWVsaWdcIjpcIsOmXCIsXCImYWVsaWc7XCI6XCLDplwiLFwiJmNjZWRpbFwiOlwiw6dcIixcIiZjY2VkaWw7XCI6XCLDp1wiLFwiJmVncmF2ZVwiOlwiw6hcIixcIiZlZ3JhdmU7XCI6XCLDqFwiLFwiJmVhY3V0ZVwiOlwiw6lcIixcIiZlYWN1dGU7XCI6XCLDqVwiLFwiJmVjaXJjXCI6XCLDqlwiLFwiJmVjaXJjO1wiOlwiw6pcIixcIiZldW1sXCI6XCLDq1wiLFwiJmV1bWw7XCI6XCLDq1wiLFwiJmlncmF2ZVwiOlwiw6xcIixcIiZpZ3JhdmU7XCI6XCLDrFwiLFwiJmlhY3V0ZVwiOlwiw61cIixcIiZpYWN1dGU7XCI6XCLDrVwiLFwiJmljaXJjXCI6XCLDrlwiLFwiJmljaXJjO1wiOlwiw65cIixcIiZpdW1sXCI6XCLDr1wiLFwiJml1bWw7XCI6XCLDr1wiLFwiJmV0aFwiOlwiw7BcIixcIiZldGg7XCI6XCLDsFwiLFwiJm50aWxkZVwiOlwiw7FcIixcIiZudGlsZGU7XCI6XCLDsVwiLFwiJm9ncmF2ZVwiOlwiw7JcIixcIiZvZ3JhdmU7XCI6XCLDslwiLFwiJm9hY3V0ZVwiOlwiw7NcIixcIiZvYWN1dGU7XCI6XCLDs1wiLFwiJm9jaXJjXCI6XCLDtFwiLFwiJm9jaXJjO1wiOlwiw7RcIixcIiZvdGlsZGVcIjpcIsO1XCIsXCImb3RpbGRlO1wiOlwiw7VcIixcIiZvdW1sXCI6XCLDtlwiLFwiJm91bWw7XCI6XCLDtlwiLFwiJmRpdmlkZVwiOlwiw7dcIixcIiZkaXZpZGU7XCI6XCLDt1wiLFwiJm9zbGFzaFwiOlwiw7hcIixcIiZvc2xhc2g7XCI6XCLDuFwiLFwiJnVncmF2ZVwiOlwiw7lcIixcIiZ1Z3JhdmU7XCI6XCLDuVwiLFwiJnVhY3V0ZVwiOlwiw7pcIixcIiZ1YWN1dGU7XCI6XCLDulwiLFwiJnVjaXJjXCI6XCLDu1wiLFwiJnVjaXJjO1wiOlwiw7tcIixcIiZ1dW1sXCI6XCLDvFwiLFwiJnV1bWw7XCI6XCLDvFwiLFwiJnlhY3V0ZVwiOlwiw71cIixcIiZ5YWN1dGU7XCI6XCLDvVwiLFwiJnRob3JuXCI6XCLDvlwiLFwiJnRob3JuO1wiOlwiw75cIixcIiZ5dW1sXCI6XCLDv1wiLFwiJnl1bWw7XCI6XCLDv1wiLFwiJnF1b3RcIjonXCInLFwiJnF1b3Q7XCI6J1wiJyxcIiZhbXBcIjpcIiZcIixcIiZhbXA7XCI6XCImXCIsXCImbHRcIjpcIjxcIixcIiZsdDtcIjpcIjxcIixcIiZndFwiOlwiPlwiLFwiJmd0O1wiOlwiPlwiLFwiJk9FbGlnO1wiOlwixZJcIixcIiZvZWxpZztcIjpcIsWTXCIsXCImU2Nhcm9uO1wiOlwixaBcIixcIiZzY2Fyb247XCI6XCLFoVwiLFwiJll1bWw7XCI6XCLFuFwiLFwiJmNpcmM7XCI6XCLLhlwiLFwiJnRpbGRlO1wiOlwiy5xcIixcIiZlbnNwO1wiOlwi4oCCXCIsXCImZW1zcDtcIjpcIuKAg1wiLFwiJnRoaW5zcDtcIjpcIuKAiVwiLFwiJnp3bmo7XCI6XCLigIxcIixcIiZ6d2o7XCI6XCLigI1cIixcIiZscm07XCI6XCLigI5cIixcIiZybG07XCI6XCLigI9cIixcIiZuZGFzaDtcIjpcIuKAk1wiLFwiJm1kYXNoO1wiOlwi4oCUXCIsXCImbHNxdW87XCI6XCLigJhcIixcIiZyc3F1bztcIjpcIuKAmVwiLFwiJnNicXVvO1wiOlwi4oCaXCIsXCImbGRxdW87XCI6XCLigJxcIixcIiZyZHF1bztcIjpcIuKAnVwiLFwiJmJkcXVvO1wiOlwi4oCeXCIsXCImZGFnZ2VyO1wiOlwi4oCgXCIsXCImRGFnZ2VyO1wiOlwi4oChXCIsXCImcGVybWlsO1wiOlwi4oCwXCIsXCImbHNhcXVvO1wiOlwi4oC5XCIsXCImcnNhcXVvO1wiOlwi4oC6XCIsXCImZXVybztcIjpcIuKCrFwiLFwiJmZub2Y7XCI6XCLGklwiLFwiJkFscGhhO1wiOlwizpFcIixcIiZCZXRhO1wiOlwizpJcIixcIiZHYW1tYTtcIjpcIs6TXCIsXCImRGVsdGE7XCI6XCLOlFwiLFwiJkVwc2lsb247XCI6XCLOlVwiLFwiJlpldGE7XCI6XCLOllwiLFwiJkV0YTtcIjpcIs6XXCIsXCImVGhldGE7XCI6XCLOmFwiLFwiJklvdGE7XCI6XCLOmVwiLFwiJkthcHBhO1wiOlwizppcIixcIiZMYW1iZGE7XCI6XCLOm1wiLFwiJk11O1wiOlwizpxcIixcIiZOdTtcIjpcIs6dXCIsXCImWGk7XCI6XCLOnlwiLFwiJk9taWNyb247XCI6XCLOn1wiLFwiJlBpO1wiOlwizqBcIixcIiZSaG87XCI6XCLOoVwiLFwiJlNpZ21hO1wiOlwizqNcIixcIiZUYXU7XCI6XCLOpFwiLFwiJlVwc2lsb247XCI6XCLOpVwiLFwiJlBoaTtcIjpcIs6mXCIsXCImQ2hpO1wiOlwizqdcIixcIiZQc2k7XCI6XCLOqFwiLFwiJk9tZWdhO1wiOlwizqlcIixcIiZhbHBoYTtcIjpcIs6xXCIsXCImYmV0YTtcIjpcIs6yXCIsXCImZ2FtbWE7XCI6XCLOs1wiLFwiJmRlbHRhO1wiOlwizrRcIixcIiZlcHNpbG9uO1wiOlwizrVcIixcIiZ6ZXRhO1wiOlwizrZcIixcIiZldGE7XCI6XCLOt1wiLFwiJnRoZXRhO1wiOlwizrhcIixcIiZpb3RhO1wiOlwizrlcIixcIiZrYXBwYTtcIjpcIs66XCIsXCImbGFtYmRhO1wiOlwizrtcIixcIiZtdTtcIjpcIs68XCIsXCImbnU7XCI6XCLOvVwiLFwiJnhpO1wiOlwizr5cIixcIiZvbWljcm9uO1wiOlwizr9cIixcIiZwaTtcIjpcIs+AXCIsXCImcmhvO1wiOlwiz4FcIixcIiZzaWdtYWY7XCI6XCLPglwiLFwiJnNpZ21hO1wiOlwiz4NcIixcIiZ0YXU7XCI6XCLPhFwiLFwiJnVwc2lsb247XCI6XCLPhVwiLFwiJnBoaTtcIjpcIs+GXCIsXCImY2hpO1wiOlwiz4dcIixcIiZwc2k7XCI6XCLPiFwiLFwiJm9tZWdhO1wiOlwiz4lcIixcIiZ0aGV0YXN5bTtcIjpcIs+RXCIsXCImdXBzaWg7XCI6XCLPklwiLFwiJnBpdjtcIjpcIs+WXCIsXCImYnVsbDtcIjpcIuKAolwiLFwiJmhlbGxpcDtcIjpcIuKAplwiLFwiJnByaW1lO1wiOlwi4oCyXCIsXCImUHJpbWU7XCI6XCLigLNcIixcIiZvbGluZTtcIjpcIuKAvlwiLFwiJmZyYXNsO1wiOlwi4oGEXCIsXCImd2VpZXJwO1wiOlwi4oSYXCIsXCImaW1hZ2U7XCI6XCLihJFcIixcIiZyZWFsO1wiOlwi4oScXCIsXCImdHJhZGU7XCI6XCLihKJcIixcIiZhbGVmc3ltO1wiOlwi4oS1XCIsXCImbGFycjtcIjpcIuKGkFwiLFwiJnVhcnI7XCI6XCLihpFcIixcIiZyYXJyO1wiOlwi4oaSXCIsXCImZGFycjtcIjpcIuKGk1wiLFwiJmhhcnI7XCI6XCLihpRcIixcIiZjcmFycjtcIjpcIuKGtVwiLFwiJmxBcnI7XCI6XCLih5BcIixcIiZ1QXJyO1wiOlwi4oeRXCIsXCImckFycjtcIjpcIuKHklwiLFwiJmRBcnI7XCI6XCLih5NcIixcIiZoQXJyO1wiOlwi4oeUXCIsXCImZm9yYWxsO1wiOlwi4oiAXCIsXCImcGFydDtcIjpcIuKIglwiLFwiJmV4aXN0O1wiOlwi4oiDXCIsXCImZW1wdHk7XCI6XCLiiIVcIixcIiZuYWJsYTtcIjpcIuKIh1wiLFwiJmlzaW47XCI6XCLiiIhcIixcIiZub3RpbjtcIjpcIuKIiVwiLFwiJm5pO1wiOlwi4oiLXCIsXCImcHJvZDtcIjpcIuKIj1wiLFwiJnN1bTtcIjpcIuKIkVwiLFwiJm1pbnVzO1wiOlwi4oiSXCIsXCImbG93YXN0O1wiOlwi4oiXXCIsXCImcmFkaWM7XCI6XCLiiJpcIixcIiZwcm9wO1wiOlwi4oidXCIsXCImaW5maW47XCI6XCLiiJ5cIixcIiZhbmc7XCI6XCLiiKBcIixcIiZhbmQ7XCI6XCLiiKdcIixcIiZvcjtcIjpcIuKIqFwiLFwiJmNhcDtcIjpcIuKIqVwiLFwiJmN1cDtcIjpcIuKIqlwiLFwiJmludDtcIjpcIuKIq1wiLFwiJnRoZXJlNDtcIjpcIuKItFwiLFwiJnNpbTtcIjpcIuKIvFwiLFwiJmNvbmc7XCI6XCLiiYVcIixcIiZhc3ltcDtcIjpcIuKJiFwiLFwiJm5lO1wiOlwi4omgXCIsXCImZXF1aXY7XCI6XCLiiaFcIixcIiZsZTtcIjpcIuKJpFwiLFwiJmdlO1wiOlwi4omlXCIsXCImc3ViO1wiOlwi4oqCXCIsXCImc3VwO1wiOlwi4oqDXCIsXCImbnN1YjtcIjpcIuKKhFwiLFwiJnN1YmU7XCI6XCLiioZcIixcIiZzdXBlO1wiOlwi4oqHXCIsXCImb3BsdXM7XCI6XCLiipVcIixcIiZvdGltZXM7XCI6XCLiipdcIixcIiZwZXJwO1wiOlwi4oqlXCIsXCImc2RvdDtcIjpcIuKLhVwiLFwiJmxjZWlsO1wiOlwi4oyIXCIsXCImcmNlaWw7XCI6XCLijIlcIixcIiZsZmxvb3I7XCI6XCLijIpcIixcIiZyZmxvb3I7XCI6XCLijItcIixcIiZsYW5nO1wiOlwi4oypXCIsXCImcmFuZztcIjpcIuKMqlwiLFwiJmxvejtcIjpcIuKXilwiLFwiJnNwYWRlcztcIjpcIuKZoFwiLFwiJmNsdWJzO1wiOlwi4pmjXCIsXCImaGVhcnRzO1wiOlwi4pmlXCIsXCImZGlhbXM7XCI6XCLimaZcIn0sY2hhcmFjdGVyczp7XCInXCI6XCImYXBvcztcIixcIsKgXCI6XCImbmJzcDtcIixcIsKhXCI6XCImaWV4Y2w7XCIsXCLColwiOlwiJmNlbnQ7XCIsXCLCo1wiOlwiJnBvdW5kO1wiLFwiwqRcIjpcIiZjdXJyZW47XCIsXCLCpVwiOlwiJnllbjtcIixcIsKmXCI6XCImYnJ2YmFyO1wiLFwiwqdcIjpcIiZzZWN0O1wiLFwiwqhcIjpcIiZ1bWw7XCIsXCLCqVwiOlwiJmNvcHk7XCIsXCLCqlwiOlwiJm9yZGY7XCIsXCLCq1wiOlwiJmxhcXVvO1wiLFwiwqxcIjpcIiZub3Q7XCIsXCLCrVwiOlwiJnNoeTtcIixcIsKuXCI6XCImcmVnO1wiLFwiwq9cIjpcIiZtYWNyO1wiLFwiwrBcIjpcIiZkZWc7XCIsXCLCsVwiOlwiJnBsdXNtbjtcIixcIsKyXCI6XCImc3VwMjtcIixcIsKzXCI6XCImc3VwMztcIixcIsK0XCI6XCImYWN1dGU7XCIsXCLCtVwiOlwiJm1pY3JvO1wiLFwiwrZcIjpcIiZwYXJhO1wiLFwiwrdcIjpcIiZtaWRkb3Q7XCIsXCLCuFwiOlwiJmNlZGlsO1wiLFwiwrlcIjpcIiZzdXAxO1wiLFwiwrpcIjpcIiZvcmRtO1wiLFwiwrtcIjpcIiZyYXF1bztcIixcIsK8XCI6XCImZnJhYzE0O1wiLFwiwr1cIjpcIiZmcmFjMTI7XCIsXCLCvlwiOlwiJmZyYWMzNDtcIixcIsK/XCI6XCImaXF1ZXN0O1wiLFwiw4BcIjpcIiZBZ3JhdmU7XCIsXCLDgVwiOlwiJkFhY3V0ZTtcIixcIsOCXCI6XCImQWNpcmM7XCIsXCLDg1wiOlwiJkF0aWxkZTtcIixcIsOEXCI6XCImQXVtbDtcIixcIsOFXCI6XCImQXJpbmc7XCIsXCLDhlwiOlwiJkFFbGlnO1wiLFwiw4dcIjpcIiZDY2VkaWw7XCIsXCLDiFwiOlwiJkVncmF2ZTtcIixcIsOJXCI6XCImRWFjdXRlO1wiLFwiw4pcIjpcIiZFY2lyYztcIixcIsOLXCI6XCImRXVtbDtcIixcIsOMXCI6XCImSWdyYXZlO1wiLFwiw41cIjpcIiZJYWN1dGU7XCIsXCLDjlwiOlwiJkljaXJjO1wiLFwiw49cIjpcIiZJdW1sO1wiLFwiw5BcIjpcIiZFVEg7XCIsXCLDkVwiOlwiJk50aWxkZTtcIixcIsOSXCI6XCImT2dyYXZlO1wiLFwiw5NcIjpcIiZPYWN1dGU7XCIsXCLDlFwiOlwiJk9jaXJjO1wiLFwiw5VcIjpcIiZPdGlsZGU7XCIsXCLDllwiOlwiJk91bWw7XCIsXCLDl1wiOlwiJnRpbWVzO1wiLFwiw5hcIjpcIiZPc2xhc2g7XCIsXCLDmVwiOlwiJlVncmF2ZTtcIixcIsOaXCI6XCImVWFjdXRlO1wiLFwiw5tcIjpcIiZVY2lyYztcIixcIsOcXCI6XCImVXVtbDtcIixcIsOdXCI6XCImWWFjdXRlO1wiLFwiw55cIjpcIiZUSE9STjtcIixcIsOfXCI6XCImc3psaWc7XCIsXCLDoFwiOlwiJmFncmF2ZTtcIixcIsOhXCI6XCImYWFjdXRlO1wiLFwiw6JcIjpcIiZhY2lyYztcIixcIsOjXCI6XCImYXRpbGRlO1wiLFwiw6RcIjpcIiZhdW1sO1wiLFwiw6VcIjpcIiZhcmluZztcIixcIsOmXCI6XCImYWVsaWc7XCIsXCLDp1wiOlwiJmNjZWRpbDtcIixcIsOoXCI6XCImZWdyYXZlO1wiLFwiw6lcIjpcIiZlYWN1dGU7XCIsXCLDqlwiOlwiJmVjaXJjO1wiLFwiw6tcIjpcIiZldW1sO1wiLFwiw6xcIjpcIiZpZ3JhdmU7XCIsXCLDrVwiOlwiJmlhY3V0ZTtcIixcIsOuXCI6XCImaWNpcmM7XCIsXCLDr1wiOlwiJml1bWw7XCIsXCLDsFwiOlwiJmV0aDtcIixcIsOxXCI6XCImbnRpbGRlO1wiLFwiw7JcIjpcIiZvZ3JhdmU7XCIsXCLDs1wiOlwiJm9hY3V0ZTtcIixcIsO0XCI6XCImb2NpcmM7XCIsXCLDtVwiOlwiJm90aWxkZTtcIixcIsO2XCI6XCImb3VtbDtcIixcIsO3XCI6XCImZGl2aWRlO1wiLFwiw7hcIjpcIiZvc2xhc2g7XCIsXCLDuVwiOlwiJnVncmF2ZTtcIixcIsO6XCI6XCImdWFjdXRlO1wiLFwiw7tcIjpcIiZ1Y2lyYztcIixcIsO8XCI6XCImdXVtbDtcIixcIsO9XCI6XCImeWFjdXRlO1wiLFwiw75cIjpcIiZ0aG9ybjtcIixcIsO/XCI6XCImeXVtbDtcIiwnXCInOlwiJnF1b3Q7XCIsXCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLFwixZJcIjpcIiZPRWxpZztcIixcIsWTXCI6XCImb2VsaWc7XCIsXCLFoFwiOlwiJlNjYXJvbjtcIixcIsWhXCI6XCImc2Nhcm9uO1wiLFwixbhcIjpcIiZZdW1sO1wiLFwiy4ZcIjpcIiZjaXJjO1wiLFwiy5xcIjpcIiZ0aWxkZTtcIixcIuKAglwiOlwiJmVuc3A7XCIsXCLigINcIjpcIiZlbXNwO1wiLFwi4oCJXCI6XCImdGhpbnNwO1wiLFwi4oCMXCI6XCImenduajtcIixcIuKAjVwiOlwiJnp3ajtcIixcIuKAjlwiOlwiJmxybTtcIixcIuKAj1wiOlwiJnJsbTtcIixcIuKAk1wiOlwiJm5kYXNoO1wiLFwi4oCUXCI6XCImbWRhc2g7XCIsXCLigJhcIjpcIiZsc3F1bztcIixcIuKAmVwiOlwiJnJzcXVvO1wiLFwi4oCaXCI6XCImc2JxdW87XCIsXCLigJxcIjpcIiZsZHF1bztcIixcIuKAnVwiOlwiJnJkcXVvO1wiLFwi4oCeXCI6XCImYmRxdW87XCIsXCLigKBcIjpcIiZkYWdnZXI7XCIsXCLigKFcIjpcIiZEYWdnZXI7XCIsXCLigLBcIjpcIiZwZXJtaWw7XCIsXCLigLlcIjpcIiZsc2FxdW87XCIsXCLigLpcIjpcIiZyc2FxdW87XCIsXCLigqxcIjpcIiZldXJvO1wiLFwixpJcIjpcIiZmbm9mO1wiLFwizpFcIjpcIiZBbHBoYTtcIixcIs6SXCI6XCImQmV0YTtcIixcIs6TXCI6XCImR2FtbWE7XCIsXCLOlFwiOlwiJkRlbHRhO1wiLFwizpVcIjpcIiZFcHNpbG9uO1wiLFwizpZcIjpcIiZaZXRhO1wiLFwizpdcIjpcIiZFdGE7XCIsXCLOmFwiOlwiJlRoZXRhO1wiLFwizplcIjpcIiZJb3RhO1wiLFwizppcIjpcIiZLYXBwYTtcIixcIs6bXCI6XCImTGFtYmRhO1wiLFwizpxcIjpcIiZNdTtcIixcIs6dXCI6XCImTnU7XCIsXCLOnlwiOlwiJlhpO1wiLFwizp9cIjpcIiZPbWljcm9uO1wiLFwizqBcIjpcIiZQaTtcIixcIs6hXCI6XCImUmhvO1wiLFwizqNcIjpcIiZTaWdtYTtcIixcIs6kXCI6XCImVGF1O1wiLFwizqVcIjpcIiZVcHNpbG9uO1wiLFwizqZcIjpcIiZQaGk7XCIsXCLOp1wiOlwiJkNoaTtcIixcIs6oXCI6XCImUHNpO1wiLFwizqlcIjpcIiZPbWVnYTtcIixcIs6xXCI6XCImYWxwaGE7XCIsXCLOslwiOlwiJmJldGE7XCIsXCLOs1wiOlwiJmdhbW1hO1wiLFwizrRcIjpcIiZkZWx0YTtcIixcIs61XCI6XCImZXBzaWxvbjtcIixcIs62XCI6XCImemV0YTtcIixcIs63XCI6XCImZXRhO1wiLFwizrhcIjpcIiZ0aGV0YTtcIixcIs65XCI6XCImaW90YTtcIixcIs66XCI6XCIma2FwcGE7XCIsXCLOu1wiOlwiJmxhbWJkYTtcIixcIs68XCI6XCImbXU7XCIsXCLOvVwiOlwiJm51O1wiLFwizr5cIjpcIiZ4aTtcIixcIs6/XCI6XCImb21pY3JvbjtcIixcIs+AXCI6XCImcGk7XCIsXCLPgVwiOlwiJnJobztcIixcIs+CXCI6XCImc2lnbWFmO1wiLFwiz4NcIjpcIiZzaWdtYTtcIixcIs+EXCI6XCImdGF1O1wiLFwiz4VcIjpcIiZ1cHNpbG9uO1wiLFwiz4ZcIjpcIiZwaGk7XCIsXCLPh1wiOlwiJmNoaTtcIixcIs+IXCI6XCImcHNpO1wiLFwiz4lcIjpcIiZvbWVnYTtcIixcIs+RXCI6XCImdGhldGFzeW07XCIsXCLPklwiOlwiJnVwc2loO1wiLFwiz5ZcIjpcIiZwaXY7XCIsXCLigKJcIjpcIiZidWxsO1wiLFwi4oCmXCI6XCImaGVsbGlwO1wiLFwi4oCyXCI6XCImcHJpbWU7XCIsXCLigLNcIjpcIiZQcmltZTtcIixcIuKAvlwiOlwiJm9saW5lO1wiLFwi4oGEXCI6XCImZnJhc2w7XCIsXCLihJhcIjpcIiZ3ZWllcnA7XCIsXCLihJFcIjpcIiZpbWFnZTtcIixcIuKEnFwiOlwiJnJlYWw7XCIsXCLihKJcIjpcIiZ0cmFkZTtcIixcIuKEtVwiOlwiJmFsZWZzeW07XCIsXCLihpBcIjpcIiZsYXJyO1wiLFwi4oaRXCI6XCImdWFycjtcIixcIuKGklwiOlwiJnJhcnI7XCIsXCLihpNcIjpcIiZkYXJyO1wiLFwi4oaUXCI6XCImaGFycjtcIixcIuKGtVwiOlwiJmNyYXJyO1wiLFwi4oeQXCI6XCImbEFycjtcIixcIuKHkVwiOlwiJnVBcnI7XCIsXCLih5JcIjpcIiZyQXJyO1wiLFwi4oeTXCI6XCImZEFycjtcIixcIuKHlFwiOlwiJmhBcnI7XCIsXCLiiIBcIjpcIiZmb3JhbGw7XCIsXCLiiIJcIjpcIiZwYXJ0O1wiLFwi4oiDXCI6XCImZXhpc3Q7XCIsXCLiiIVcIjpcIiZlbXB0eTtcIixcIuKIh1wiOlwiJm5hYmxhO1wiLFwi4oiIXCI6XCImaXNpbjtcIixcIuKIiVwiOlwiJm5vdGluO1wiLFwi4oiLXCI6XCImbmk7XCIsXCLiiI9cIjpcIiZwcm9kO1wiLFwi4oiRXCI6XCImc3VtO1wiLFwi4oiSXCI6XCImbWludXM7XCIsXCLiiJdcIjpcIiZsb3dhc3Q7XCIsXCLiiJpcIjpcIiZyYWRpYztcIixcIuKInVwiOlwiJnByb3A7XCIsXCLiiJ5cIjpcIiZpbmZpbjtcIixcIuKIoFwiOlwiJmFuZztcIixcIuKIp1wiOlwiJmFuZDtcIixcIuKIqFwiOlwiJm9yO1wiLFwi4oipXCI6XCImY2FwO1wiLFwi4oiqXCI6XCImY3VwO1wiLFwi4oirXCI6XCImaW50O1wiLFwi4oi0XCI6XCImdGhlcmU0O1wiLFwi4oi8XCI6XCImc2ltO1wiLFwi4omFXCI6XCImY29uZztcIixcIuKJiFwiOlwiJmFzeW1wO1wiLFwi4omgXCI6XCImbmU7XCIsXCLiiaFcIjpcIiZlcXVpdjtcIixcIuKJpFwiOlwiJmxlO1wiLFwi4omlXCI6XCImZ2U7XCIsXCLiioJcIjpcIiZzdWI7XCIsXCLiioNcIjpcIiZzdXA7XCIsXCLiioRcIjpcIiZuc3ViO1wiLFwi4oqGXCI6XCImc3ViZTtcIixcIuKKh1wiOlwiJnN1cGU7XCIsXCLiipVcIjpcIiZvcGx1cztcIixcIuKKl1wiOlwiJm90aW1lcztcIixcIuKKpVwiOlwiJnBlcnA7XCIsXCLii4VcIjpcIiZzZG90O1wiLFwi4oyIXCI6XCImbGNlaWw7XCIsXCLijIlcIjpcIiZyY2VpbDtcIixcIuKMilwiOlwiJmxmbG9vcjtcIixcIuKMi1wiOlwiJnJmbG9vcjtcIixcIuKMqVwiOlwiJmxhbmc7XCIsXCLijKpcIjpcIiZyYW5nO1wiLFwi4peKXCI6XCImbG96O1wiLFwi4pmgXCI6XCImc3BhZGVzO1wiLFwi4pmjXCI6XCImY2x1YnM7XCIsXCLimaVcIjpcIiZoZWFydHM7XCIsXCLimaZcIjpcIiZkaWFtcztcIn19LGh0bWw1OntlbnRpdGllczp7XCImQUVsaWdcIjpcIsOGXCIsXCImQUVsaWc7XCI6XCLDhlwiLFwiJkFNUFwiOlwiJlwiLFwiJkFNUDtcIjpcIiZcIixcIiZBYWN1dGVcIjpcIsOBXCIsXCImQWFjdXRlO1wiOlwiw4FcIixcIiZBYnJldmU7XCI6XCLEglwiLFwiJkFjaXJjXCI6XCLDglwiLFwiJkFjaXJjO1wiOlwiw4JcIixcIiZBY3k7XCI6XCLQkFwiLFwiJkFmcjtcIjpcIvCdlIRcIixcIiZBZ3JhdmVcIjpcIsOAXCIsXCImQWdyYXZlO1wiOlwiw4BcIixcIiZBbHBoYTtcIjpcIs6RXCIsXCImQW1hY3I7XCI6XCLEgFwiLFwiJkFuZDtcIjpcIuKpk1wiLFwiJkFvZ29uO1wiOlwixIRcIixcIiZBb3BmO1wiOlwi8J2UuFwiLFwiJkFwcGx5RnVuY3Rpb247XCI6XCLigaFcIixcIiZBcmluZ1wiOlwiw4VcIixcIiZBcmluZztcIjpcIsOFXCIsXCImQXNjcjtcIjpcIvCdkpxcIixcIiZBc3NpZ247XCI6XCLiiZRcIixcIiZBdGlsZGVcIjpcIsODXCIsXCImQXRpbGRlO1wiOlwiw4NcIixcIiZBdW1sXCI6XCLDhFwiLFwiJkF1bWw7XCI6XCLDhFwiLFwiJkJhY2tzbGFzaDtcIjpcIuKIllwiLFwiJkJhcnY7XCI6XCLiq6dcIixcIiZCYXJ3ZWQ7XCI6XCLijIZcIixcIiZCY3k7XCI6XCLQkVwiLFwiJkJlY2F1c2U7XCI6XCLiiLVcIixcIiZCZXJub3VsbGlzO1wiOlwi4oSsXCIsXCImQmV0YTtcIjpcIs6SXCIsXCImQmZyO1wiOlwi8J2UhVwiLFwiJkJvcGY7XCI6XCLwnZS5XCIsXCImQnJldmU7XCI6XCLLmFwiLFwiJkJzY3I7XCI6XCLihKxcIixcIiZCdW1wZXE7XCI6XCLiiY5cIixcIiZDSGN5O1wiOlwi0KdcIixcIiZDT1BZXCI6XCLCqVwiLFwiJkNPUFk7XCI6XCLCqVwiLFwiJkNhY3V0ZTtcIjpcIsSGXCIsXCImQ2FwO1wiOlwi4ouSXCIsXCImQ2FwaXRhbERpZmZlcmVudGlhbEQ7XCI6XCLihYVcIixcIiZDYXlsZXlzO1wiOlwi4oStXCIsXCImQ2Nhcm9uO1wiOlwixIxcIixcIiZDY2VkaWxcIjpcIsOHXCIsXCImQ2NlZGlsO1wiOlwiw4dcIixcIiZDY2lyYztcIjpcIsSIXCIsXCImQ2NvbmludDtcIjpcIuKIsFwiLFwiJkNkb3Q7XCI6XCLEilwiLFwiJkNlZGlsbGE7XCI6XCLCuFwiLFwiJkNlbnRlckRvdDtcIjpcIsK3XCIsXCImQ2ZyO1wiOlwi4oStXCIsXCImQ2hpO1wiOlwizqdcIixcIiZDaXJjbGVEb3Q7XCI6XCLiiplcIixcIiZDaXJjbGVNaW51cztcIjpcIuKKllwiLFwiJkNpcmNsZVBsdXM7XCI6XCLiipVcIixcIiZDaXJjbGVUaW1lcztcIjpcIuKKl1wiLFwiJkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIslwiLFwiJkNsb3NlQ3VybHlEb3VibGVRdW90ZTtcIjpcIuKAnVwiLFwiJkNsb3NlQ3VybHlRdW90ZTtcIjpcIuKAmVwiLFwiJkNvbG9uO1wiOlwi4oi3XCIsXCImQ29sb25lO1wiOlwi4qm0XCIsXCImQ29uZ3J1ZW50O1wiOlwi4omhXCIsXCImQ29uaW50O1wiOlwi4oivXCIsXCImQ29udG91ckludGVncmFsO1wiOlwi4oiuXCIsXCImQ29wZjtcIjpcIuKEglwiLFwiJkNvcHJvZHVjdDtcIjpcIuKIkFwiLFwiJkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWw7XCI6XCLiiLNcIixcIiZDcm9zcztcIjpcIuKor1wiLFwiJkNzY3I7XCI6XCLwnZKeXCIsXCImQ3VwO1wiOlwi4ouTXCIsXCImQ3VwQ2FwO1wiOlwi4omNXCIsXCImREQ7XCI6XCLihYVcIixcIiZERG90cmFoZDtcIjpcIuKkkVwiLFwiJkRKY3k7XCI6XCLQglwiLFwiJkRTY3k7XCI6XCLQhVwiLFwiJkRaY3k7XCI6XCLQj1wiLFwiJkRhZ2dlcjtcIjpcIuKAoVwiLFwiJkRhcnI7XCI6XCLihqFcIixcIiZEYXNodjtcIjpcIuKrpFwiLFwiJkRjYXJvbjtcIjpcIsSOXCIsXCImRGN5O1wiOlwi0JRcIixcIiZEZWw7XCI6XCLiiIdcIixcIiZEZWx0YTtcIjpcIs6UXCIsXCImRGZyO1wiOlwi8J2Uh1wiLFwiJkRpYWNyaXRpY2FsQWN1dGU7XCI6XCLCtFwiLFwiJkRpYWNyaXRpY2FsRG90O1wiOlwiy5lcIixcIiZEaWFjcml0aWNhbERvdWJsZUFjdXRlO1wiOlwiy51cIixcIiZEaWFjcml0aWNhbEdyYXZlO1wiOlwiYFwiLFwiJkRpYWNyaXRpY2FsVGlsZGU7XCI6XCLLnFwiLFwiJkRpYW1vbmQ7XCI6XCLii4RcIixcIiZEaWZmZXJlbnRpYWxEO1wiOlwi4oWGXCIsXCImRG9wZjtcIjpcIvCdlLtcIixcIiZEb3Q7XCI6XCLCqFwiLFwiJkRvdERvdDtcIjpcIuKDnFwiLFwiJkRvdEVxdWFsO1wiOlwi4omQXCIsXCImRG91YmxlQ29udG91ckludGVncmFsO1wiOlwi4oivXCIsXCImRG91YmxlRG90O1wiOlwiwqhcIixcIiZEb3VibGVEb3duQXJyb3c7XCI6XCLih5NcIixcIiZEb3VibGVMZWZ0QXJyb3c7XCI6XCLih5BcIixcIiZEb3VibGVMZWZ0UmlnaHRBcnJvdztcIjpcIuKHlFwiLFwiJkRvdWJsZUxlZnRUZWU7XCI6XCLiq6RcIixcIiZEb3VibGVMb25nTGVmdEFycm93O1wiOlwi4p+4XCIsXCImRG91YmxlTG9uZ0xlZnRSaWdodEFycm93O1wiOlwi4p+6XCIsXCImRG91YmxlTG9uZ1JpZ2h0QXJyb3c7XCI6XCLin7lcIixcIiZEb3VibGVSaWdodEFycm93O1wiOlwi4oeSXCIsXCImRG91YmxlUmlnaHRUZWU7XCI6XCLiiqhcIixcIiZEb3VibGVVcEFycm93O1wiOlwi4oeRXCIsXCImRG91YmxlVXBEb3duQXJyb3c7XCI6XCLih5VcIixcIiZEb3VibGVWZXJ0aWNhbEJhcjtcIjpcIuKIpVwiLFwiJkRvd25BcnJvdztcIjpcIuKGk1wiLFwiJkRvd25BcnJvd0JhcjtcIjpcIuKkk1wiLFwiJkRvd25BcnJvd1VwQXJyb3c7XCI6XCLih7VcIixcIiZEb3duQnJldmU7XCI6XCLMkVwiLFwiJkRvd25MZWZ0UmlnaHRWZWN0b3I7XCI6XCLipZBcIixcIiZEb3duTGVmdFRlZVZlY3RvcjtcIjpcIuKlnlwiLFwiJkRvd25MZWZ0VmVjdG9yO1wiOlwi4oa9XCIsXCImRG93bkxlZnRWZWN0b3JCYXI7XCI6XCLipZZcIixcIiZEb3duUmlnaHRUZWVWZWN0b3I7XCI6XCLipZ9cIixcIiZEb3duUmlnaHRWZWN0b3I7XCI6XCLih4FcIixcIiZEb3duUmlnaHRWZWN0b3JCYXI7XCI6XCLipZdcIixcIiZEb3duVGVlO1wiOlwi4oqkXCIsXCImRG93blRlZUFycm93O1wiOlwi4oanXCIsXCImRG93bmFycm93O1wiOlwi4oeTXCIsXCImRHNjcjtcIjpcIvCdkp9cIixcIiZEc3Ryb2s7XCI6XCLEkFwiLFwiJkVORztcIjpcIsWKXCIsXCImRVRIXCI6XCLDkFwiLFwiJkVUSDtcIjpcIsOQXCIsXCImRWFjdXRlXCI6XCLDiVwiLFwiJkVhY3V0ZTtcIjpcIsOJXCIsXCImRWNhcm9uO1wiOlwixJpcIixcIiZFY2lyY1wiOlwiw4pcIixcIiZFY2lyYztcIjpcIsOKXCIsXCImRWN5O1wiOlwi0K1cIixcIiZFZG90O1wiOlwixJZcIixcIiZFZnI7XCI6XCLwnZSIXCIsXCImRWdyYXZlXCI6XCLDiFwiLFwiJkVncmF2ZTtcIjpcIsOIXCIsXCImRWxlbWVudDtcIjpcIuKIiFwiLFwiJkVtYWNyO1wiOlwixJJcIixcIiZFbXB0eVNtYWxsU3F1YXJlO1wiOlwi4pe7XCIsXCImRW1wdHlWZXJ5U21hbGxTcXVhcmU7XCI6XCLilqtcIixcIiZFb2dvbjtcIjpcIsSYXCIsXCImRW9wZjtcIjpcIvCdlLxcIixcIiZFcHNpbG9uO1wiOlwizpVcIixcIiZFcXVhbDtcIjpcIuKptVwiLFwiJkVxdWFsVGlsZGU7XCI6XCLiiYJcIixcIiZFcXVpbGlicml1bTtcIjpcIuKHjFwiLFwiJkVzY3I7XCI6XCLihLBcIixcIiZFc2ltO1wiOlwi4qmzXCIsXCImRXRhO1wiOlwizpdcIixcIiZFdW1sXCI6XCLDi1wiLFwiJkV1bWw7XCI6XCLDi1wiLFwiJkV4aXN0cztcIjpcIuKIg1wiLFwiJkV4cG9uZW50aWFsRTtcIjpcIuKFh1wiLFwiJkZjeTtcIjpcItCkXCIsXCImRmZyO1wiOlwi8J2UiVwiLFwiJkZpbGxlZFNtYWxsU3F1YXJlO1wiOlwi4pe8XCIsXCImRmlsbGVkVmVyeVNtYWxsU3F1YXJlO1wiOlwi4paqXCIsXCImRm9wZjtcIjpcIvCdlL1cIixcIiZGb3JBbGw7XCI6XCLiiIBcIixcIiZGb3VyaWVydHJmO1wiOlwi4oSxXCIsXCImRnNjcjtcIjpcIuKEsVwiLFwiJkdKY3k7XCI6XCLQg1wiLFwiJkdUXCI6XCI+XCIsXCImR1Q7XCI6XCI+XCIsXCImR2FtbWE7XCI6XCLOk1wiLFwiJkdhbW1hZDtcIjpcIs+cXCIsXCImR2JyZXZlO1wiOlwixJ5cIixcIiZHY2VkaWw7XCI6XCLEolwiLFwiJkdjaXJjO1wiOlwixJxcIixcIiZHY3k7XCI6XCLQk1wiLFwiJkdkb3Q7XCI6XCLEoFwiLFwiJkdmcjtcIjpcIvCdlIpcIixcIiZHZztcIjpcIuKLmVwiLFwiJkdvcGY7XCI6XCLwnZS+XCIsXCImR3JlYXRlckVxdWFsO1wiOlwi4omlXCIsXCImR3JlYXRlckVxdWFsTGVzcztcIjpcIuKLm1wiLFwiJkdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiadcIixcIiZHcmVhdGVyR3JlYXRlcjtcIjpcIuKqolwiLFwiJkdyZWF0ZXJMZXNzO1wiOlwi4om3XCIsXCImR3JlYXRlclNsYW50RXF1YWw7XCI6XCLiqb5cIixcIiZHcmVhdGVyVGlsZGU7XCI6XCLiibNcIixcIiZHc2NyO1wiOlwi8J2SolwiLFwiJkd0O1wiOlwi4omrXCIsXCImSEFSRGN5O1wiOlwi0KpcIixcIiZIYWNlaztcIjpcIsuHXCIsXCImSGF0O1wiOlwiXlwiLFwiJkhjaXJjO1wiOlwixKRcIixcIiZIZnI7XCI6XCLihIxcIixcIiZIaWxiZXJ0U3BhY2U7XCI6XCLihItcIixcIiZIb3BmO1wiOlwi4oSNXCIsXCImSG9yaXpvbnRhbExpbmU7XCI6XCLilIBcIixcIiZIc2NyO1wiOlwi4oSLXCIsXCImSHN0cm9rO1wiOlwixKZcIixcIiZIdW1wRG93bkh1bXA7XCI6XCLiiY5cIixcIiZIdW1wRXF1YWw7XCI6XCLiiY9cIixcIiZJRWN5O1wiOlwi0JVcIixcIiZJSmxpZztcIjpcIsSyXCIsXCImSU9jeTtcIjpcItCBXCIsXCImSWFjdXRlXCI6XCLDjVwiLFwiJklhY3V0ZTtcIjpcIsONXCIsXCImSWNpcmNcIjpcIsOOXCIsXCImSWNpcmM7XCI6XCLDjlwiLFwiJkljeTtcIjpcItCYXCIsXCImSWRvdDtcIjpcIsSwXCIsXCImSWZyO1wiOlwi4oSRXCIsXCImSWdyYXZlXCI6XCLDjFwiLFwiJklncmF2ZTtcIjpcIsOMXCIsXCImSW07XCI6XCLihJFcIixcIiZJbWFjcjtcIjpcIsSqXCIsXCImSW1hZ2luYXJ5STtcIjpcIuKFiFwiLFwiJkltcGxpZXM7XCI6XCLih5JcIixcIiZJbnQ7XCI6XCLiiKxcIixcIiZJbnRlZ3JhbDtcIjpcIuKIq1wiLFwiJkludGVyc2VjdGlvbjtcIjpcIuKLglwiLFwiJkludmlzaWJsZUNvbW1hO1wiOlwi4oGjXCIsXCImSW52aXNpYmxlVGltZXM7XCI6XCLigaJcIixcIiZJb2dvbjtcIjpcIsSuXCIsXCImSW9wZjtcIjpcIvCdlYBcIixcIiZJb3RhO1wiOlwizplcIixcIiZJc2NyO1wiOlwi4oSQXCIsXCImSXRpbGRlO1wiOlwixKhcIixcIiZJdWtjeTtcIjpcItCGXCIsXCImSXVtbFwiOlwiw49cIixcIiZJdW1sO1wiOlwiw49cIixcIiZKY2lyYztcIjpcIsS0XCIsXCImSmN5O1wiOlwi0JlcIixcIiZKZnI7XCI6XCLwnZSNXCIsXCImSm9wZjtcIjpcIvCdlYFcIixcIiZKc2NyO1wiOlwi8J2SpVwiLFwiJkpzZXJjeTtcIjpcItCIXCIsXCImSnVrY3k7XCI6XCLQhFwiLFwiJktIY3k7XCI6XCLQpVwiLFwiJktKY3k7XCI6XCLQjFwiLFwiJkthcHBhO1wiOlwizppcIixcIiZLY2VkaWw7XCI6XCLEtlwiLFwiJktjeTtcIjpcItCaXCIsXCImS2ZyO1wiOlwi8J2UjlwiLFwiJktvcGY7XCI6XCLwnZWCXCIsXCImS3NjcjtcIjpcIvCdkqZcIixcIiZMSmN5O1wiOlwi0IlcIixcIiZMVFwiOlwiPFwiLFwiJkxUO1wiOlwiPFwiLFwiJkxhY3V0ZTtcIjpcIsS5XCIsXCImTGFtYmRhO1wiOlwizptcIixcIiZMYW5nO1wiOlwi4p+qXCIsXCImTGFwbGFjZXRyZjtcIjpcIuKEklwiLFwiJkxhcnI7XCI6XCLihp5cIixcIiZMY2Fyb247XCI6XCLEvVwiLFwiJkxjZWRpbDtcIjpcIsS7XCIsXCImTGN5O1wiOlwi0JtcIixcIiZMZWZ0QW5nbGVCcmFja2V0O1wiOlwi4p+oXCIsXCImTGVmdEFycm93O1wiOlwi4oaQXCIsXCImTGVmdEFycm93QmFyO1wiOlwi4oekXCIsXCImTGVmdEFycm93UmlnaHRBcnJvdztcIjpcIuKHhlwiLFwiJkxlZnRDZWlsaW5nO1wiOlwi4oyIXCIsXCImTGVmdERvdWJsZUJyYWNrZXQ7XCI6XCLin6ZcIixcIiZMZWZ0RG93blRlZVZlY3RvcjtcIjpcIuKloVwiLFwiJkxlZnREb3duVmVjdG9yO1wiOlwi4oeDXCIsXCImTGVmdERvd25WZWN0b3JCYXI7XCI6XCLipZlcIixcIiZMZWZ0Rmxvb3I7XCI6XCLijIpcIixcIiZMZWZ0UmlnaHRBcnJvdztcIjpcIuKGlFwiLFwiJkxlZnRSaWdodFZlY3RvcjtcIjpcIuKljlwiLFwiJkxlZnRUZWU7XCI6XCLiiqNcIixcIiZMZWZ0VGVlQXJyb3c7XCI6XCLihqRcIixcIiZMZWZ0VGVlVmVjdG9yO1wiOlwi4qWaXCIsXCImTGVmdFRyaWFuZ2xlO1wiOlwi4oqyXCIsXCImTGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePXCIsXCImTGVmdFRyaWFuZ2xlRXF1YWw7XCI6XCLiirRcIixcIiZMZWZ0VXBEb3duVmVjdG9yO1wiOlwi4qWRXCIsXCImTGVmdFVwVGVlVmVjdG9yO1wiOlwi4qWgXCIsXCImTGVmdFVwVmVjdG9yO1wiOlwi4oa/XCIsXCImTGVmdFVwVmVjdG9yQmFyO1wiOlwi4qWYXCIsXCImTGVmdFZlY3RvcjtcIjpcIuKGvFwiLFwiJkxlZnRWZWN0b3JCYXI7XCI6XCLipZJcIixcIiZMZWZ0YXJyb3c7XCI6XCLih5BcIixcIiZMZWZ0cmlnaHRhcnJvdztcIjpcIuKHlFwiLFwiJkxlc3NFcXVhbEdyZWF0ZXI7XCI6XCLii5pcIixcIiZMZXNzRnVsbEVxdWFsO1wiOlwi4ommXCIsXCImTGVzc0dyZWF0ZXI7XCI6XCLiibZcIixcIiZMZXNzTGVzcztcIjpcIuKqoVwiLFwiJkxlc3NTbGFudEVxdWFsO1wiOlwi4qm9XCIsXCImTGVzc1RpbGRlO1wiOlwi4omyXCIsXCImTGZyO1wiOlwi8J2Uj1wiLFwiJkxsO1wiOlwi4ouYXCIsXCImTGxlZnRhcnJvdztcIjpcIuKHmlwiLFwiJkxtaWRvdDtcIjpcIsS/XCIsXCImTG9uZ0xlZnRBcnJvdztcIjpcIuKftVwiLFwiJkxvbmdMZWZ0UmlnaHRBcnJvdztcIjpcIuKft1wiLFwiJkxvbmdSaWdodEFycm93O1wiOlwi4p+2XCIsXCImTG9uZ2xlZnRhcnJvdztcIjpcIuKfuFwiLFwiJkxvbmdsZWZ0cmlnaHRhcnJvdztcIjpcIuKfulwiLFwiJkxvbmdyaWdodGFycm93O1wiOlwi4p+5XCIsXCImTG9wZjtcIjpcIvCdlYNcIixcIiZMb3dlckxlZnRBcnJvdztcIjpcIuKGmVwiLFwiJkxvd2VyUmlnaHRBcnJvdztcIjpcIuKGmFwiLFwiJkxzY3I7XCI6XCLihJJcIixcIiZMc2g7XCI6XCLihrBcIixcIiZMc3Ryb2s7XCI6XCLFgVwiLFwiJkx0O1wiOlwi4omqXCIsXCImTWFwO1wiOlwi4qSFXCIsXCImTWN5O1wiOlwi0JxcIixcIiZNZWRpdW1TcGFjZTtcIjpcIuKBn1wiLFwiJk1lbGxpbnRyZjtcIjpcIuKEs1wiLFwiJk1mcjtcIjpcIvCdlJBcIixcIiZNaW51c1BsdXM7XCI6XCLiiJNcIixcIiZNb3BmO1wiOlwi8J2VhFwiLFwiJk1zY3I7XCI6XCLihLNcIixcIiZNdTtcIjpcIs6cXCIsXCImTkpjeTtcIjpcItCKXCIsXCImTmFjdXRlO1wiOlwixYNcIixcIiZOY2Fyb247XCI6XCLFh1wiLFwiJk5jZWRpbDtcIjpcIsWFXCIsXCImTmN5O1wiOlwi0J1cIixcIiZOZWdhdGl2ZU1lZGl1bVNwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVUaGlja1NwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVUaGluU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVZlcnlUaGluU3BhY2U7XCI6XCLigItcIixcIiZOZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIjpcIuKJq1wiLFwiJk5lc3RlZExlc3NMZXNzO1wiOlwi4omqXCIsXCImTmV3TGluZTtcIjpcIlxcblwiLFwiJk5mcjtcIjpcIvCdlJFcIixcIiZOb0JyZWFrO1wiOlwi4oGgXCIsXCImTm9uQnJlYWtpbmdTcGFjZTtcIjpcIsKgXCIsXCImTm9wZjtcIjpcIuKElVwiLFwiJk5vdDtcIjpcIuKrrFwiLFwiJk5vdENvbmdydWVudDtcIjpcIuKJolwiLFwiJk5vdEN1cENhcDtcIjpcIuKJrVwiLFwiJk5vdERvdWJsZVZlcnRpY2FsQmFyO1wiOlwi4oimXCIsXCImTm90RWxlbWVudDtcIjpcIuKIiVwiLFwiJk5vdEVxdWFsO1wiOlwi4omgXCIsXCImTm90RXF1YWxUaWxkZTtcIjpcIuKJgsy4XCIsXCImTm90RXhpc3RzO1wiOlwi4oiEXCIsXCImTm90R3JlYXRlcjtcIjpcIuKJr1wiLFwiJk5vdEdyZWF0ZXJFcXVhbDtcIjpcIuKJsVwiLFwiJk5vdEdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiafMuFwiLFwiJk5vdEdyZWF0ZXJHcmVhdGVyO1wiOlwi4omrzLhcIixcIiZOb3RHcmVhdGVyTGVzcztcIjpcIuKJuVwiLFwiJk5vdEdyZWF0ZXJTbGFudEVxdWFsO1wiOlwi4qm+zLhcIixcIiZOb3RHcmVhdGVyVGlsZGU7XCI6XCLiibVcIixcIiZOb3RIdW1wRG93bkh1bXA7XCI6XCLiiY7MuFwiLFwiJk5vdEh1bXBFcXVhbDtcIjpcIuKJj8y4XCIsXCImTm90TGVmdFRyaWFuZ2xlO1wiOlwi4ouqXCIsXCImTm90TGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePzLhcIixcIiZOb3RMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrFwiLFwiJk5vdExlc3M7XCI6XCLiia5cIixcIiZOb3RMZXNzRXF1YWw7XCI6XCLiibBcIixcIiZOb3RMZXNzR3JlYXRlcjtcIjpcIuKJuFwiLFwiJk5vdExlc3NMZXNzO1wiOlwi4omqzLhcIixcIiZOb3RMZXNzU2xhbnRFcXVhbDtcIjpcIuKpvcy4XCIsXCImTm90TGVzc1RpbGRlO1wiOlwi4om0XCIsXCImTm90TmVzdGVkR3JlYXRlckdyZWF0ZXI7XCI6XCLiqqLMuFwiLFwiJk5vdE5lc3RlZExlc3NMZXNzO1wiOlwi4qqhzLhcIixcIiZOb3RQcmVjZWRlcztcIjpcIuKKgFwiLFwiJk5vdFByZWNlZGVzRXF1YWw7XCI6XCLiqq/MuFwiLFwiJk5vdFByZWNlZGVzU2xhbnRFcXVhbDtcIjpcIuKLoFwiLFwiJk5vdFJldmVyc2VFbGVtZW50O1wiOlwi4oiMXCIsXCImTm90UmlnaHRUcmlhbmdsZTtcIjpcIuKLq1wiLFwiJk5vdFJpZ2h0VHJpYW5nbGVCYXI7XCI6XCLip5DMuFwiLFwiJk5vdFJpZ2h0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrVwiLFwiJk5vdFNxdWFyZVN1YnNldDtcIjpcIuKKj8y4XCIsXCImTm90U3F1YXJlU3Vic2V0RXF1YWw7XCI6XCLii6JcIixcIiZOb3RTcXVhcmVTdXBlcnNldDtcIjpcIuKKkMy4XCIsXCImTm90U3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKLo1wiLFwiJk5vdFN1YnNldDtcIjpcIuKKguKDklwiLFwiJk5vdFN1YnNldEVxdWFsO1wiOlwi4oqIXCIsXCImTm90U3VjY2VlZHM7XCI6XCLiioFcIixcIiZOb3RTdWNjZWVkc0VxdWFsO1wiOlwi4qqwzLhcIixcIiZOb3RTdWNjZWVkc1NsYW50RXF1YWw7XCI6XCLii6FcIixcIiZOb3RTdWNjZWVkc1RpbGRlO1wiOlwi4om/zLhcIixcIiZOb3RTdXBlcnNldDtcIjpcIuKKg+KDklwiLFwiJk5vdFN1cGVyc2V0RXF1YWw7XCI6XCLiiolcIixcIiZOb3RUaWxkZTtcIjpcIuKJgVwiLFwiJk5vdFRpbGRlRXF1YWw7XCI6XCLiiYRcIixcIiZOb3RUaWxkZUZ1bGxFcXVhbDtcIjpcIuKJh1wiLFwiJk5vdFRpbGRlVGlsZGU7XCI6XCLiiYlcIixcIiZOb3RWZXJ0aWNhbEJhcjtcIjpcIuKIpFwiLFwiJk5zY3I7XCI6XCLwnZKpXCIsXCImTnRpbGRlXCI6XCLDkVwiLFwiJk50aWxkZTtcIjpcIsORXCIsXCImTnU7XCI6XCLOnVwiLFwiJk9FbGlnO1wiOlwixZJcIixcIiZPYWN1dGVcIjpcIsOTXCIsXCImT2FjdXRlO1wiOlwiw5NcIixcIiZPY2lyY1wiOlwiw5RcIixcIiZPY2lyYztcIjpcIsOUXCIsXCImT2N5O1wiOlwi0J5cIixcIiZPZGJsYWM7XCI6XCLFkFwiLFwiJk9mcjtcIjpcIvCdlJJcIixcIiZPZ3JhdmVcIjpcIsOSXCIsXCImT2dyYXZlO1wiOlwiw5JcIixcIiZPbWFjcjtcIjpcIsWMXCIsXCImT21lZ2E7XCI6XCLOqVwiLFwiJk9taWNyb247XCI6XCLOn1wiLFwiJk9vcGY7XCI6XCLwnZWGXCIsXCImT3BlbkN1cmx5RG91YmxlUXVvdGU7XCI6XCLigJxcIixcIiZPcGVuQ3VybHlRdW90ZTtcIjpcIuKAmFwiLFwiJk9yO1wiOlwi4qmUXCIsXCImT3NjcjtcIjpcIvCdkqpcIixcIiZPc2xhc2hcIjpcIsOYXCIsXCImT3NsYXNoO1wiOlwiw5hcIixcIiZPdGlsZGVcIjpcIsOVXCIsXCImT3RpbGRlO1wiOlwiw5VcIixcIiZPdGltZXM7XCI6XCLiqLdcIixcIiZPdW1sXCI6XCLDllwiLFwiJk91bWw7XCI6XCLDllwiLFwiJk92ZXJCYXI7XCI6XCLigL5cIixcIiZPdmVyQnJhY2U7XCI6XCLij55cIixcIiZPdmVyQnJhY2tldDtcIjpcIuKOtFwiLFwiJk92ZXJQYXJlbnRoZXNpcztcIjpcIuKPnFwiLFwiJlBhcnRpYWxEO1wiOlwi4oiCXCIsXCImUGN5O1wiOlwi0J9cIixcIiZQZnI7XCI6XCLwnZSTXCIsXCImUGhpO1wiOlwizqZcIixcIiZQaTtcIjpcIs6gXCIsXCImUGx1c01pbnVzO1wiOlwiwrFcIixcIiZQb2luY2FyZXBsYW5lO1wiOlwi4oSMXCIsXCImUG9wZjtcIjpcIuKEmVwiLFwiJlByO1wiOlwi4qq7XCIsXCImUHJlY2VkZXM7XCI6XCLiibpcIixcIiZQcmVjZWRlc0VxdWFsO1wiOlwi4qqvXCIsXCImUHJlY2VkZXNTbGFudEVxdWFsO1wiOlwi4om8XCIsXCImUHJlY2VkZXNUaWxkZTtcIjpcIuKJvlwiLFwiJlByaW1lO1wiOlwi4oCzXCIsXCImUHJvZHVjdDtcIjpcIuKIj1wiLFwiJlByb3BvcnRpb247XCI6XCLiiLdcIixcIiZQcm9wb3J0aW9uYWw7XCI6XCLiiJ1cIixcIiZQc2NyO1wiOlwi8J2Sq1wiLFwiJlBzaTtcIjpcIs6oXCIsXCImUVVPVFwiOidcIicsXCImUVVPVDtcIjonXCInLFwiJlFmcjtcIjpcIvCdlJRcIixcIiZRb3BmO1wiOlwi4oSaXCIsXCImUXNjcjtcIjpcIvCdkqxcIixcIiZSQmFycjtcIjpcIuKkkFwiLFwiJlJFR1wiOlwiwq5cIixcIiZSRUc7XCI6XCLCrlwiLFwiJlJhY3V0ZTtcIjpcIsWUXCIsXCImUmFuZztcIjpcIuKfq1wiLFwiJlJhcnI7XCI6XCLihqBcIixcIiZSYXJydGw7XCI6XCLipJZcIixcIiZSY2Fyb247XCI6XCLFmFwiLFwiJlJjZWRpbDtcIjpcIsWWXCIsXCImUmN5O1wiOlwi0KBcIixcIiZSZTtcIjpcIuKEnFwiLFwiJlJldmVyc2VFbGVtZW50O1wiOlwi4oiLXCIsXCImUmV2ZXJzZUVxdWlsaWJyaXVtO1wiOlwi4oeLXCIsXCImUmV2ZXJzZVVwRXF1aWxpYnJpdW07XCI6XCLipa9cIixcIiZSZnI7XCI6XCLihJxcIixcIiZSaG87XCI6XCLOoVwiLFwiJlJpZ2h0QW5nbGVCcmFja2V0O1wiOlwi4p+pXCIsXCImUmlnaHRBcnJvdztcIjpcIuKGklwiLFwiJlJpZ2h0QXJyb3dCYXI7XCI6XCLih6VcIixcIiZSaWdodEFycm93TGVmdEFycm93O1wiOlwi4oeEXCIsXCImUmlnaHRDZWlsaW5nO1wiOlwi4oyJXCIsXCImUmlnaHREb3VibGVCcmFja2V0O1wiOlwi4p+nXCIsXCImUmlnaHREb3duVGVlVmVjdG9yO1wiOlwi4qWdXCIsXCImUmlnaHREb3duVmVjdG9yO1wiOlwi4oeCXCIsXCImUmlnaHREb3duVmVjdG9yQmFyO1wiOlwi4qWVXCIsXCImUmlnaHRGbG9vcjtcIjpcIuKMi1wiLFwiJlJpZ2h0VGVlO1wiOlwi4oqiXCIsXCImUmlnaHRUZWVBcnJvdztcIjpcIuKGplwiLFwiJlJpZ2h0VGVlVmVjdG9yO1wiOlwi4qWbXCIsXCImUmlnaHRUcmlhbmdsZTtcIjpcIuKKs1wiLFwiJlJpZ2h0VHJpYW5nbGVCYXI7XCI6XCLip5BcIixcIiZSaWdodFRyaWFuZ2xlRXF1YWw7XCI6XCLiirVcIixcIiZSaWdodFVwRG93blZlY3RvcjtcIjpcIuKlj1wiLFwiJlJpZ2h0VXBUZWVWZWN0b3I7XCI6XCLipZxcIixcIiZSaWdodFVwVmVjdG9yO1wiOlwi4oa+XCIsXCImUmlnaHRVcFZlY3RvckJhcjtcIjpcIuKllFwiLFwiJlJpZ2h0VmVjdG9yO1wiOlwi4oeAXCIsXCImUmlnaHRWZWN0b3JCYXI7XCI6XCLipZNcIixcIiZSaWdodGFycm93O1wiOlwi4oeSXCIsXCImUm9wZjtcIjpcIuKEnVwiLFwiJlJvdW5kSW1wbGllcztcIjpcIuKlsFwiLFwiJlJyaWdodGFycm93O1wiOlwi4oebXCIsXCImUnNjcjtcIjpcIuKEm1wiLFwiJlJzaDtcIjpcIuKGsVwiLFwiJlJ1bGVEZWxheWVkO1wiOlwi4qe0XCIsXCImU0hDSGN5O1wiOlwi0KlcIixcIiZTSGN5O1wiOlwi0KhcIixcIiZTT0ZUY3k7XCI6XCLQrFwiLFwiJlNhY3V0ZTtcIjpcIsWaXCIsXCImU2M7XCI6XCLiqrxcIixcIiZTY2Fyb247XCI6XCLFoFwiLFwiJlNjZWRpbDtcIjpcIsWeXCIsXCImU2NpcmM7XCI6XCLFnFwiLFwiJlNjeTtcIjpcItChXCIsXCImU2ZyO1wiOlwi8J2UllwiLFwiJlNob3J0RG93bkFycm93O1wiOlwi4oaTXCIsXCImU2hvcnRMZWZ0QXJyb3c7XCI6XCLihpBcIixcIiZTaG9ydFJpZ2h0QXJyb3c7XCI6XCLihpJcIixcIiZTaG9ydFVwQXJyb3c7XCI6XCLihpFcIixcIiZTaWdtYTtcIjpcIs6jXCIsXCImU21hbGxDaXJjbGU7XCI6XCLiiJhcIixcIiZTb3BmO1wiOlwi8J2VilwiLFwiJlNxcnQ7XCI6XCLiiJpcIixcIiZTcXVhcmU7XCI6XCLilqFcIixcIiZTcXVhcmVJbnRlcnNlY3Rpb247XCI6XCLiipNcIixcIiZTcXVhcmVTdWJzZXQ7XCI6XCLiio9cIixcIiZTcXVhcmVTdWJzZXRFcXVhbDtcIjpcIuKKkVwiLFwiJlNxdWFyZVN1cGVyc2V0O1wiOlwi4oqQXCIsXCImU3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKKklwiLFwiJlNxdWFyZVVuaW9uO1wiOlwi4oqUXCIsXCImU3NjcjtcIjpcIvCdkq5cIixcIiZTdGFyO1wiOlwi4ouGXCIsXCImU3ViO1wiOlwi4ouQXCIsXCImU3Vic2V0O1wiOlwi4ouQXCIsXCImU3Vic2V0RXF1YWw7XCI6XCLiioZcIixcIiZTdWNjZWVkcztcIjpcIuKJu1wiLFwiJlN1Y2NlZWRzRXF1YWw7XCI6XCLiqrBcIixcIiZTdWNjZWVkc1NsYW50RXF1YWw7XCI6XCLiib1cIixcIiZTdWNjZWVkc1RpbGRlO1wiOlwi4om/XCIsXCImU3VjaFRoYXQ7XCI6XCLiiItcIixcIiZTdW07XCI6XCLiiJFcIixcIiZTdXA7XCI6XCLii5FcIixcIiZTdXBlcnNldDtcIjpcIuKKg1wiLFwiJlN1cGVyc2V0RXF1YWw7XCI6XCLiiodcIixcIiZTdXBzZXQ7XCI6XCLii5FcIixcIiZUSE9STlwiOlwiw55cIixcIiZUSE9STjtcIjpcIsOeXCIsXCImVFJBREU7XCI6XCLihKJcIixcIiZUU0hjeTtcIjpcItCLXCIsXCImVFNjeTtcIjpcItCmXCIsXCImVGFiO1wiOlwiXFx0XCIsXCImVGF1O1wiOlwizqRcIixcIiZUY2Fyb247XCI6XCLFpFwiLFwiJlRjZWRpbDtcIjpcIsWiXCIsXCImVGN5O1wiOlwi0KJcIixcIiZUZnI7XCI6XCLwnZSXXCIsXCImVGhlcmVmb3JlO1wiOlwi4oi0XCIsXCImVGhldGE7XCI6XCLOmFwiLFwiJlRoaWNrU3BhY2U7XCI6XCLigZ/igIpcIixcIiZUaGluU3BhY2U7XCI6XCLigIlcIixcIiZUaWxkZTtcIjpcIuKIvFwiLFwiJlRpbGRlRXF1YWw7XCI6XCLiiYNcIixcIiZUaWxkZUZ1bGxFcXVhbDtcIjpcIuKJhVwiLFwiJlRpbGRlVGlsZGU7XCI6XCLiiYhcIixcIiZUb3BmO1wiOlwi8J2Vi1wiLFwiJlRyaXBsZURvdDtcIjpcIuKDm1wiLFwiJlRzY3I7XCI6XCLwnZKvXCIsXCImVHN0cm9rO1wiOlwixaZcIixcIiZVYWN1dGVcIjpcIsOaXCIsXCImVWFjdXRlO1wiOlwiw5pcIixcIiZVYXJyO1wiOlwi4oafXCIsXCImVWFycm9jaXI7XCI6XCLipYlcIixcIiZVYnJjeTtcIjpcItCOXCIsXCImVWJyZXZlO1wiOlwixaxcIixcIiZVY2lyY1wiOlwiw5tcIixcIiZVY2lyYztcIjpcIsObXCIsXCImVWN5O1wiOlwi0KNcIixcIiZVZGJsYWM7XCI6XCLFsFwiLFwiJlVmcjtcIjpcIvCdlJhcIixcIiZVZ3JhdmVcIjpcIsOZXCIsXCImVWdyYXZlO1wiOlwiw5lcIixcIiZVbWFjcjtcIjpcIsWqXCIsXCImVW5kZXJCYXI7XCI6XCJfXCIsXCImVW5kZXJCcmFjZTtcIjpcIuKPn1wiLFwiJlVuZGVyQnJhY2tldDtcIjpcIuKOtVwiLFwiJlVuZGVyUGFyZW50aGVzaXM7XCI6XCLij51cIixcIiZVbmlvbjtcIjpcIuKLg1wiLFwiJlVuaW9uUGx1cztcIjpcIuKKjlwiLFwiJlVvZ29uO1wiOlwixbJcIixcIiZVb3BmO1wiOlwi8J2VjFwiLFwiJlVwQXJyb3c7XCI6XCLihpFcIixcIiZVcEFycm93QmFyO1wiOlwi4qSSXCIsXCImVXBBcnJvd0Rvd25BcnJvdztcIjpcIuKHhVwiLFwiJlVwRG93bkFycm93O1wiOlwi4oaVXCIsXCImVXBFcXVpbGlicml1bTtcIjpcIuKlrlwiLFwiJlVwVGVlO1wiOlwi4oqlXCIsXCImVXBUZWVBcnJvdztcIjpcIuKGpVwiLFwiJlVwYXJyb3c7XCI6XCLih5FcIixcIiZVcGRvd25hcnJvdztcIjpcIuKHlVwiLFwiJlVwcGVyTGVmdEFycm93O1wiOlwi4oaWXCIsXCImVXBwZXJSaWdodEFycm93O1wiOlwi4oaXXCIsXCImVXBzaTtcIjpcIs+SXCIsXCImVXBzaWxvbjtcIjpcIs6lXCIsXCImVXJpbmc7XCI6XCLFrlwiLFwiJlVzY3I7XCI6XCLwnZKwXCIsXCImVXRpbGRlO1wiOlwixahcIixcIiZVdW1sXCI6XCLDnFwiLFwiJlV1bWw7XCI6XCLDnFwiLFwiJlZEYXNoO1wiOlwi4oqrXCIsXCImVmJhcjtcIjpcIuKrq1wiLFwiJlZjeTtcIjpcItCSXCIsXCImVmRhc2g7XCI6XCLiiqlcIixcIiZWZGFzaGw7XCI6XCLiq6ZcIixcIiZWZWU7XCI6XCLii4FcIixcIiZWZXJiYXI7XCI6XCLigJZcIixcIiZWZXJ0O1wiOlwi4oCWXCIsXCImVmVydGljYWxCYXI7XCI6XCLiiKNcIixcIiZWZXJ0aWNhbExpbmU7XCI6XCJ8XCIsXCImVmVydGljYWxTZXBhcmF0b3I7XCI6XCLinZhcIixcIiZWZXJ0aWNhbFRpbGRlO1wiOlwi4omAXCIsXCImVmVyeVRoaW5TcGFjZTtcIjpcIuKAilwiLFwiJlZmcjtcIjpcIvCdlJlcIixcIiZWb3BmO1wiOlwi8J2VjVwiLFwiJlZzY3I7XCI6XCLwnZKxXCIsXCImVnZkYXNoO1wiOlwi4oqqXCIsXCImV2NpcmM7XCI6XCLFtFwiLFwiJldlZGdlO1wiOlwi4ouAXCIsXCImV2ZyO1wiOlwi8J2UmlwiLFwiJldvcGY7XCI6XCLwnZWOXCIsXCImV3NjcjtcIjpcIvCdkrJcIixcIiZYZnI7XCI6XCLwnZSbXCIsXCImWGk7XCI6XCLOnlwiLFwiJlhvcGY7XCI6XCLwnZWPXCIsXCImWHNjcjtcIjpcIvCdkrNcIixcIiZZQWN5O1wiOlwi0K9cIixcIiZZSWN5O1wiOlwi0IdcIixcIiZZVWN5O1wiOlwi0K5cIixcIiZZYWN1dGVcIjpcIsOdXCIsXCImWWFjdXRlO1wiOlwiw51cIixcIiZZY2lyYztcIjpcIsW2XCIsXCImWWN5O1wiOlwi0KtcIixcIiZZZnI7XCI6XCLwnZScXCIsXCImWW9wZjtcIjpcIvCdlZBcIixcIiZZc2NyO1wiOlwi8J2StFwiLFwiJll1bWw7XCI6XCLFuFwiLFwiJlpIY3k7XCI6XCLQllwiLFwiJlphY3V0ZTtcIjpcIsW5XCIsXCImWmNhcm9uO1wiOlwixb1cIixcIiZaY3k7XCI6XCLQl1wiLFwiJlpkb3Q7XCI6XCLFu1wiLFwiJlplcm9XaWR0aFNwYWNlO1wiOlwi4oCLXCIsXCImWmV0YTtcIjpcIs6WXCIsXCImWmZyO1wiOlwi4oSoXCIsXCImWm9wZjtcIjpcIuKEpFwiLFwiJlpzY3I7XCI6XCLwnZK1XCIsXCImYWFjdXRlXCI6XCLDoVwiLFwiJmFhY3V0ZTtcIjpcIsOhXCIsXCImYWJyZXZlO1wiOlwixINcIixcIiZhYztcIjpcIuKIvlwiLFwiJmFjRTtcIjpcIuKIvsyzXCIsXCImYWNkO1wiOlwi4oi/XCIsXCImYWNpcmNcIjpcIsOiXCIsXCImYWNpcmM7XCI6XCLDolwiLFwiJmFjdXRlXCI6XCLCtFwiLFwiJmFjdXRlO1wiOlwiwrRcIixcIiZhY3k7XCI6XCLQsFwiLFwiJmFlbGlnXCI6XCLDplwiLFwiJmFlbGlnO1wiOlwiw6ZcIixcIiZhZjtcIjpcIuKBoVwiLFwiJmFmcjtcIjpcIvCdlJ5cIixcIiZhZ3JhdmVcIjpcIsOgXCIsXCImYWdyYXZlO1wiOlwiw6BcIixcIiZhbGVmc3ltO1wiOlwi4oS1XCIsXCImYWxlcGg7XCI6XCLihLVcIixcIiZhbHBoYTtcIjpcIs6xXCIsXCImYW1hY3I7XCI6XCLEgVwiLFwiJmFtYWxnO1wiOlwi4qi/XCIsXCImYW1wXCI6XCImXCIsXCImYW1wO1wiOlwiJlwiLFwiJmFuZDtcIjpcIuKIp1wiLFwiJmFuZGFuZDtcIjpcIuKplVwiLFwiJmFuZGQ7XCI6XCLiqZxcIixcIiZhbmRzbG9wZTtcIjpcIuKpmFwiLFwiJmFuZHY7XCI6XCLiqZpcIixcIiZhbmc7XCI6XCLiiKBcIixcIiZhbmdlO1wiOlwi4qakXCIsXCImYW5nbGU7XCI6XCLiiKBcIixcIiZhbmdtc2Q7XCI6XCLiiKFcIixcIiZhbmdtc2RhYTtcIjpcIuKmqFwiLFwiJmFuZ21zZGFiO1wiOlwi4qapXCIsXCImYW5nbXNkYWM7XCI6XCLipqpcIixcIiZhbmdtc2RhZDtcIjpcIuKmq1wiLFwiJmFuZ21zZGFlO1wiOlwi4qasXCIsXCImYW5nbXNkYWY7XCI6XCLipq1cIixcIiZhbmdtc2RhZztcIjpcIuKmrlwiLFwiJmFuZ21zZGFoO1wiOlwi4qavXCIsXCImYW5ncnQ7XCI6XCLiiJ9cIixcIiZhbmdydHZiO1wiOlwi4oq+XCIsXCImYW5ncnR2YmQ7XCI6XCLipp1cIixcIiZhbmdzcGg7XCI6XCLiiKJcIixcIiZhbmdzdDtcIjpcIsOFXCIsXCImYW5nemFycjtcIjpcIuKNvFwiLFwiJmFvZ29uO1wiOlwixIVcIixcIiZhb3BmO1wiOlwi8J2VklwiLFwiJmFwO1wiOlwi4omIXCIsXCImYXBFO1wiOlwi4qmwXCIsXCImYXBhY2lyO1wiOlwi4qmvXCIsXCImYXBlO1wiOlwi4omKXCIsXCImYXBpZDtcIjpcIuKJi1wiLFwiJmFwb3M7XCI6XCInXCIsXCImYXBwcm94O1wiOlwi4omIXCIsXCImYXBwcm94ZXE7XCI6XCLiiYpcIixcIiZhcmluZ1wiOlwiw6VcIixcIiZhcmluZztcIjpcIsOlXCIsXCImYXNjcjtcIjpcIvCdkrZcIixcIiZhc3Q7XCI6XCIqXCIsXCImYXN5bXA7XCI6XCLiiYhcIixcIiZhc3ltcGVxO1wiOlwi4omNXCIsXCImYXRpbGRlXCI6XCLDo1wiLFwiJmF0aWxkZTtcIjpcIsOjXCIsXCImYXVtbFwiOlwiw6RcIixcIiZhdW1sO1wiOlwiw6RcIixcIiZhd2NvbmludDtcIjpcIuKIs1wiLFwiJmF3aW50O1wiOlwi4qiRXCIsXCImYk5vdDtcIjpcIuKrrVwiLFwiJmJhY2tjb25nO1wiOlwi4omMXCIsXCImYmFja2Vwc2lsb247XCI6XCLPtlwiLFwiJmJhY2twcmltZTtcIjpcIuKAtVwiLFwiJmJhY2tzaW07XCI6XCLiiL1cIixcIiZiYWNrc2ltZXE7XCI6XCLii41cIixcIiZiYXJ2ZWU7XCI6XCLiir1cIixcIiZiYXJ3ZWQ7XCI6XCLijIVcIixcIiZiYXJ3ZWRnZTtcIjpcIuKMhVwiLFwiJmJicms7XCI6XCLijrVcIixcIiZiYnJrdGJyaztcIjpcIuKOtlwiLFwiJmJjb25nO1wiOlwi4omMXCIsXCImYmN5O1wiOlwi0LFcIixcIiZiZHF1bztcIjpcIuKAnlwiLFwiJmJlY2F1cztcIjpcIuKItVwiLFwiJmJlY2F1c2U7XCI6XCLiiLVcIixcIiZiZW1wdHl2O1wiOlwi4qawXCIsXCImYmVwc2k7XCI6XCLPtlwiLFwiJmJlcm5vdTtcIjpcIuKErFwiLFwiJmJldGE7XCI6XCLOslwiLFwiJmJldGg7XCI6XCLihLZcIixcIiZiZXR3ZWVuO1wiOlwi4omsXCIsXCImYmZyO1wiOlwi8J2Un1wiLFwiJmJpZ2NhcDtcIjpcIuKLglwiLFwiJmJpZ2NpcmM7XCI6XCLil69cIixcIiZiaWdjdXA7XCI6XCLii4NcIixcIiZiaWdvZG90O1wiOlwi4qiAXCIsXCImYmlnb3BsdXM7XCI6XCLiqIFcIixcIiZiaWdvdGltZXM7XCI6XCLiqIJcIixcIiZiaWdzcWN1cDtcIjpcIuKohlwiLFwiJmJpZ3N0YXI7XCI6XCLimIVcIixcIiZiaWd0cmlhbmdsZWRvd247XCI6XCLilr1cIixcIiZiaWd0cmlhbmdsZXVwO1wiOlwi4pazXCIsXCImYmlndXBsdXM7XCI6XCLiqIRcIixcIiZiaWd2ZWU7XCI6XCLii4FcIixcIiZiaWd3ZWRnZTtcIjpcIuKLgFwiLFwiJmJrYXJvdztcIjpcIuKkjVwiLFwiJmJsYWNrbG96ZW5nZTtcIjpcIuKnq1wiLFwiJmJsYWNrc3F1YXJlO1wiOlwi4paqXCIsXCImYmxhY2t0cmlhbmdsZTtcIjpcIuKWtFwiLFwiJmJsYWNrdHJpYW5nbGVkb3duO1wiOlwi4pa+XCIsXCImYmxhY2t0cmlhbmdsZWxlZnQ7XCI6XCLil4JcIixcIiZibGFja3RyaWFuZ2xlcmlnaHQ7XCI6XCLilrhcIixcIiZibGFuaztcIjpcIuKQo1wiLFwiJmJsazEyO1wiOlwi4paSXCIsXCImYmxrMTQ7XCI6XCLilpFcIixcIiZibGszNDtcIjpcIuKWk1wiLFwiJmJsb2NrO1wiOlwi4paIXCIsXCImYm5lO1wiOlwiPeKDpVwiLFwiJmJuZXF1aXY7XCI6XCLiiaHig6VcIixcIiZibm90O1wiOlwi4oyQXCIsXCImYm9wZjtcIjpcIvCdlZNcIixcIiZib3Q7XCI6XCLiiqVcIixcIiZib3R0b207XCI6XCLiiqVcIixcIiZib3d0aWU7XCI6XCLii4hcIixcIiZib3hETDtcIjpcIuKVl1wiLFwiJmJveERSO1wiOlwi4pWUXCIsXCImYm94RGw7XCI6XCLilZZcIixcIiZib3hEcjtcIjpcIuKVk1wiLFwiJmJveEg7XCI6XCLilZBcIixcIiZib3hIRDtcIjpcIuKVplwiLFwiJmJveEhVO1wiOlwi4pWpXCIsXCImYm94SGQ7XCI6XCLilaRcIixcIiZib3hIdTtcIjpcIuKVp1wiLFwiJmJveFVMO1wiOlwi4pWdXCIsXCImYm94VVI7XCI6XCLilZpcIixcIiZib3hVbDtcIjpcIuKVnFwiLFwiJmJveFVyO1wiOlwi4pWZXCIsXCImYm94VjtcIjpcIuKVkVwiLFwiJmJveFZIO1wiOlwi4pWsXCIsXCImYm94Vkw7XCI6XCLilaNcIixcIiZib3hWUjtcIjpcIuKVoFwiLFwiJmJveFZoO1wiOlwi4pWrXCIsXCImYm94Vmw7XCI6XCLilaJcIixcIiZib3hWcjtcIjpcIuKVn1wiLFwiJmJveGJveDtcIjpcIuKniVwiLFwiJmJveGRMO1wiOlwi4pWVXCIsXCImYm94ZFI7XCI6XCLilZJcIixcIiZib3hkbDtcIjpcIuKUkFwiLFwiJmJveGRyO1wiOlwi4pSMXCIsXCImYm94aDtcIjpcIuKUgFwiLFwiJmJveGhEO1wiOlwi4pWlXCIsXCImYm94aFU7XCI6XCLilahcIixcIiZib3hoZDtcIjpcIuKUrFwiLFwiJmJveGh1O1wiOlwi4pS0XCIsXCImYm94bWludXM7XCI6XCLiip9cIixcIiZib3hwbHVzO1wiOlwi4oqeXCIsXCImYm94dGltZXM7XCI6XCLiiqBcIixcIiZib3h1TDtcIjpcIuKVm1wiLFwiJmJveHVSO1wiOlwi4pWYXCIsXCImYm94dWw7XCI6XCLilJhcIixcIiZib3h1cjtcIjpcIuKUlFwiLFwiJmJveHY7XCI6XCLilIJcIixcIiZib3h2SDtcIjpcIuKVqlwiLFwiJmJveHZMO1wiOlwi4pWhXCIsXCImYm94dlI7XCI6XCLilZ5cIixcIiZib3h2aDtcIjpcIuKUvFwiLFwiJmJveHZsO1wiOlwi4pSkXCIsXCImYm94dnI7XCI6XCLilJxcIixcIiZicHJpbWU7XCI6XCLigLVcIixcIiZicmV2ZTtcIjpcIsuYXCIsXCImYnJ2YmFyXCI6XCLCplwiLFwiJmJydmJhcjtcIjpcIsKmXCIsXCImYnNjcjtcIjpcIvCdkrdcIixcIiZic2VtaTtcIjpcIuKBj1wiLFwiJmJzaW07XCI6XCLiiL1cIixcIiZic2ltZTtcIjpcIuKLjVwiLFwiJmJzb2w7XCI6XCJcXFxcXCIsXCImYnNvbGI7XCI6XCLip4VcIixcIiZic29saHN1YjtcIjpcIuKfiFwiLFwiJmJ1bGw7XCI6XCLigKJcIixcIiZidWxsZXQ7XCI6XCLigKJcIixcIiZidW1wO1wiOlwi4omOXCIsXCImYnVtcEU7XCI6XCLiqq5cIixcIiZidW1wZTtcIjpcIuKJj1wiLFwiJmJ1bXBlcTtcIjpcIuKJj1wiLFwiJmNhY3V0ZTtcIjpcIsSHXCIsXCImY2FwO1wiOlwi4oipXCIsXCImY2FwYW5kO1wiOlwi4qmEXCIsXCImY2FwYnJjdXA7XCI6XCLiqYlcIixcIiZjYXBjYXA7XCI6XCLiqYtcIixcIiZjYXBjdXA7XCI6XCLiqYdcIixcIiZjYXBkb3Q7XCI6XCLiqYBcIixcIiZjYXBzO1wiOlwi4oip77iAXCIsXCImY2FyZXQ7XCI6XCLigYFcIixcIiZjYXJvbjtcIjpcIsuHXCIsXCImY2NhcHM7XCI6XCLiqY1cIixcIiZjY2Fyb247XCI6XCLEjVwiLFwiJmNjZWRpbFwiOlwiw6dcIixcIiZjY2VkaWw7XCI6XCLDp1wiLFwiJmNjaXJjO1wiOlwixIlcIixcIiZjY3VwcztcIjpcIuKpjFwiLFwiJmNjdXBzc207XCI6XCLiqZBcIixcIiZjZG90O1wiOlwixItcIixcIiZjZWRpbFwiOlwiwrhcIixcIiZjZWRpbDtcIjpcIsK4XCIsXCImY2VtcHR5djtcIjpcIuKmslwiLFwiJmNlbnRcIjpcIsKiXCIsXCImY2VudDtcIjpcIsKiXCIsXCImY2VudGVyZG90O1wiOlwiwrdcIixcIiZjZnI7XCI6XCLwnZSgXCIsXCImY2hjeTtcIjpcItGHXCIsXCImY2hlY2s7XCI6XCLinJNcIixcIiZjaGVja21hcms7XCI6XCLinJNcIixcIiZjaGk7XCI6XCLPh1wiLFwiJmNpcjtcIjpcIuKXi1wiLFwiJmNpckU7XCI6XCLip4NcIixcIiZjaXJjO1wiOlwiy4ZcIixcIiZjaXJjZXE7XCI6XCLiiZdcIixcIiZjaXJjbGVhcnJvd2xlZnQ7XCI6XCLihrpcIixcIiZjaXJjbGVhcnJvd3JpZ2h0O1wiOlwi4oa7XCIsXCImY2lyY2xlZFI7XCI6XCLCrlwiLFwiJmNpcmNsZWRTO1wiOlwi4pOIXCIsXCImY2lyY2xlZGFzdDtcIjpcIuKKm1wiLFwiJmNpcmNsZWRjaXJjO1wiOlwi4oqaXCIsXCImY2lyY2xlZGRhc2g7XCI6XCLiip1cIixcIiZjaXJlO1wiOlwi4omXXCIsXCImY2lyZm5pbnQ7XCI6XCLiqJBcIixcIiZjaXJtaWQ7XCI6XCLiq69cIixcIiZjaXJzY2lyO1wiOlwi4qeCXCIsXCImY2x1YnM7XCI6XCLimaNcIixcIiZjbHVic3VpdDtcIjpcIuKZo1wiLFwiJmNvbG9uO1wiOlwiOlwiLFwiJmNvbG9uZTtcIjpcIuKJlFwiLFwiJmNvbG9uZXE7XCI6XCLiiZRcIixcIiZjb21tYTtcIjpcIixcIixcIiZjb21tYXQ7XCI6XCJAXCIsXCImY29tcDtcIjpcIuKIgVwiLFwiJmNvbXBmbjtcIjpcIuKImFwiLFwiJmNvbXBsZW1lbnQ7XCI6XCLiiIFcIixcIiZjb21wbGV4ZXM7XCI6XCLihIJcIixcIiZjb25nO1wiOlwi4omFXCIsXCImY29uZ2RvdDtcIjpcIuKprVwiLFwiJmNvbmludDtcIjpcIuKIrlwiLFwiJmNvcGY7XCI6XCLwnZWUXCIsXCImY29wcm9kO1wiOlwi4oiQXCIsXCImY29weVwiOlwiwqlcIixcIiZjb3B5O1wiOlwiwqlcIixcIiZjb3B5c3I7XCI6XCLihJdcIixcIiZjcmFycjtcIjpcIuKGtVwiLFwiJmNyb3NzO1wiOlwi4pyXXCIsXCImY3NjcjtcIjpcIvCdkrhcIixcIiZjc3ViO1wiOlwi4quPXCIsXCImY3N1YmU7XCI6XCLiq5FcIixcIiZjc3VwO1wiOlwi4quQXCIsXCImY3N1cGU7XCI6XCLiq5JcIixcIiZjdGRvdDtcIjpcIuKLr1wiLFwiJmN1ZGFycmw7XCI6XCLipLhcIixcIiZjdWRhcnJyO1wiOlwi4qS1XCIsXCImY3VlcHI7XCI6XCLii55cIixcIiZjdWVzYztcIjpcIuKLn1wiLFwiJmN1bGFycjtcIjpcIuKGtlwiLFwiJmN1bGFycnA7XCI6XCLipL1cIixcIiZjdXA7XCI6XCLiiKpcIixcIiZjdXBicmNhcDtcIjpcIuKpiFwiLFwiJmN1cGNhcDtcIjpcIuKphlwiLFwiJmN1cGN1cDtcIjpcIuKpilwiLFwiJmN1cGRvdDtcIjpcIuKKjVwiLFwiJmN1cG9yO1wiOlwi4qmFXCIsXCImY3VwcztcIjpcIuKIqu+4gFwiLFwiJmN1cmFycjtcIjpcIuKGt1wiLFwiJmN1cmFycm07XCI6XCLipLxcIixcIiZjdXJseWVxcHJlYztcIjpcIuKLnlwiLFwiJmN1cmx5ZXFzdWNjO1wiOlwi4oufXCIsXCImY3VybHl2ZWU7XCI6XCLii45cIixcIiZjdXJseXdlZGdlO1wiOlwi4ouPXCIsXCImY3VycmVuXCI6XCLCpFwiLFwiJmN1cnJlbjtcIjpcIsKkXCIsXCImY3VydmVhcnJvd2xlZnQ7XCI6XCLihrZcIixcIiZjdXJ2ZWFycm93cmlnaHQ7XCI6XCLihrdcIixcIiZjdXZlZTtcIjpcIuKLjlwiLFwiJmN1d2VkO1wiOlwi4ouPXCIsXCImY3djb25pbnQ7XCI6XCLiiLJcIixcIiZjd2ludDtcIjpcIuKIsVwiLFwiJmN5bGN0eTtcIjpcIuKMrVwiLFwiJmRBcnI7XCI6XCLih5NcIixcIiZkSGFyO1wiOlwi4qWlXCIsXCImZGFnZ2VyO1wiOlwi4oCgXCIsXCImZGFsZXRoO1wiOlwi4oS4XCIsXCImZGFycjtcIjpcIuKGk1wiLFwiJmRhc2g7XCI6XCLigJBcIixcIiZkYXNodjtcIjpcIuKKo1wiLFwiJmRia2Fyb3c7XCI6XCLipI9cIixcIiZkYmxhYztcIjpcIsudXCIsXCImZGNhcm9uO1wiOlwixI9cIixcIiZkY3k7XCI6XCLQtFwiLFwiJmRkO1wiOlwi4oWGXCIsXCImZGRhZ2dlcjtcIjpcIuKAoVwiLFwiJmRkYXJyO1wiOlwi4oeKXCIsXCImZGRvdHNlcTtcIjpcIuKpt1wiLFwiJmRlZ1wiOlwiwrBcIixcIiZkZWc7XCI6XCLCsFwiLFwiJmRlbHRhO1wiOlwizrRcIixcIiZkZW1wdHl2O1wiOlwi4qaxXCIsXCImZGZpc2h0O1wiOlwi4qW/XCIsXCImZGZyO1wiOlwi8J2UoVwiLFwiJmRoYXJsO1wiOlwi4oeDXCIsXCImZGhhcnI7XCI6XCLih4JcIixcIiZkaWFtO1wiOlwi4ouEXCIsXCImZGlhbW9uZDtcIjpcIuKLhFwiLFwiJmRpYW1vbmRzdWl0O1wiOlwi4pmmXCIsXCImZGlhbXM7XCI6XCLimaZcIixcIiZkaWU7XCI6XCLCqFwiLFwiJmRpZ2FtbWE7XCI6XCLPnVwiLFwiJmRpc2luO1wiOlwi4ouyXCIsXCImZGl2O1wiOlwiw7dcIixcIiZkaXZpZGVcIjpcIsO3XCIsXCImZGl2aWRlO1wiOlwiw7dcIixcIiZkaXZpZGVvbnRpbWVzO1wiOlwi4ouHXCIsXCImZGl2b254O1wiOlwi4ouHXCIsXCImZGpjeTtcIjpcItGSXCIsXCImZGxjb3JuO1wiOlwi4oyeXCIsXCImZGxjcm9wO1wiOlwi4oyNXCIsXCImZG9sbGFyO1wiOlwiJFwiLFwiJmRvcGY7XCI6XCLwnZWVXCIsXCImZG90O1wiOlwiy5lcIixcIiZkb3RlcTtcIjpcIuKJkFwiLFwiJmRvdGVxZG90O1wiOlwi4omRXCIsXCImZG90bWludXM7XCI6XCLiiLhcIixcIiZkb3RwbHVzO1wiOlwi4oiUXCIsXCImZG90c3F1YXJlO1wiOlwi4oqhXCIsXCImZG91YmxlYmFyd2VkZ2U7XCI6XCLijIZcIixcIiZkb3duYXJyb3c7XCI6XCLihpNcIixcIiZkb3duZG93bmFycm93cztcIjpcIuKHilwiLFwiJmRvd25oYXJwb29ubGVmdDtcIjpcIuKHg1wiLFwiJmRvd25oYXJwb29ucmlnaHQ7XCI6XCLih4JcIixcIiZkcmJrYXJvdztcIjpcIuKkkFwiLFwiJmRyY29ybjtcIjpcIuKMn1wiLFwiJmRyY3JvcDtcIjpcIuKMjFwiLFwiJmRzY3I7XCI6XCLwnZK5XCIsXCImZHNjeTtcIjpcItGVXCIsXCImZHNvbDtcIjpcIuKntlwiLFwiJmRzdHJvaztcIjpcIsSRXCIsXCImZHRkb3Q7XCI6XCLii7FcIixcIiZkdHJpO1wiOlwi4pa/XCIsXCImZHRyaWY7XCI6XCLilr5cIixcIiZkdWFycjtcIjpcIuKHtVwiLFwiJmR1aGFyO1wiOlwi4qWvXCIsXCImZHdhbmdsZTtcIjpcIuKmplwiLFwiJmR6Y3k7XCI6XCLRn1wiLFwiJmR6aWdyYXJyO1wiOlwi4p+/XCIsXCImZUREb3Q7XCI6XCLiqbdcIixcIiZlRG90O1wiOlwi4omRXCIsXCImZWFjdXRlXCI6XCLDqVwiLFwiJmVhY3V0ZTtcIjpcIsOpXCIsXCImZWFzdGVyO1wiOlwi4qmuXCIsXCImZWNhcm9uO1wiOlwixJtcIixcIiZlY2lyO1wiOlwi4omWXCIsXCImZWNpcmNcIjpcIsOqXCIsXCImZWNpcmM7XCI6XCLDqlwiLFwiJmVjb2xvbjtcIjpcIuKJlVwiLFwiJmVjeTtcIjpcItGNXCIsXCImZWRvdDtcIjpcIsSXXCIsXCImZWU7XCI6XCLihYdcIixcIiZlZkRvdDtcIjpcIuKJklwiLFwiJmVmcjtcIjpcIvCdlKJcIixcIiZlZztcIjpcIuKqmlwiLFwiJmVncmF2ZVwiOlwiw6hcIixcIiZlZ3JhdmU7XCI6XCLDqFwiLFwiJmVncztcIjpcIuKqllwiLFwiJmVnc2RvdDtcIjpcIuKqmFwiLFwiJmVsO1wiOlwi4qqZXCIsXCImZWxpbnRlcnM7XCI6XCLij6dcIixcIiZlbGw7XCI6XCLihJNcIixcIiZlbHM7XCI6XCLiqpVcIixcIiZlbHNkb3Q7XCI6XCLiqpdcIixcIiZlbWFjcjtcIjpcIsSTXCIsXCImZW1wdHk7XCI6XCLiiIVcIixcIiZlbXB0eXNldDtcIjpcIuKIhVwiLFwiJmVtcHR5djtcIjpcIuKIhVwiLFwiJmVtc3AxMztcIjpcIuKAhFwiLFwiJmVtc3AxNDtcIjpcIuKAhVwiLFwiJmVtc3A7XCI6XCLigINcIixcIiZlbmc7XCI6XCLFi1wiLFwiJmVuc3A7XCI6XCLigIJcIixcIiZlb2dvbjtcIjpcIsSZXCIsXCImZW9wZjtcIjpcIvCdlZZcIixcIiZlcGFyO1wiOlwi4ouVXCIsXCImZXBhcnNsO1wiOlwi4qejXCIsXCImZXBsdXM7XCI6XCLiqbFcIixcIiZlcHNpO1wiOlwizrVcIixcIiZlcHNpbG9uO1wiOlwizrVcIixcIiZlcHNpdjtcIjpcIs+1XCIsXCImZXFjaXJjO1wiOlwi4omWXCIsXCImZXFjb2xvbjtcIjpcIuKJlVwiLFwiJmVxc2ltO1wiOlwi4omCXCIsXCImZXFzbGFudGd0cjtcIjpcIuKqllwiLFwiJmVxc2xhbnRsZXNzO1wiOlwi4qqVXCIsXCImZXF1YWxzO1wiOlwiPVwiLFwiJmVxdWVzdDtcIjpcIuKJn1wiLFwiJmVxdWl2O1wiOlwi4omhXCIsXCImZXF1aXZERDtcIjpcIuKpuFwiLFwiJmVxdnBhcnNsO1wiOlwi4qelXCIsXCImZXJEb3Q7XCI6XCLiiZNcIixcIiZlcmFycjtcIjpcIuKlsVwiLFwiJmVzY3I7XCI6XCLihK9cIixcIiZlc2RvdDtcIjpcIuKJkFwiLFwiJmVzaW07XCI6XCLiiYJcIixcIiZldGE7XCI6XCLOt1wiLFwiJmV0aFwiOlwiw7BcIixcIiZldGg7XCI6XCLDsFwiLFwiJmV1bWxcIjpcIsOrXCIsXCImZXVtbDtcIjpcIsOrXCIsXCImZXVybztcIjpcIuKCrFwiLFwiJmV4Y2w7XCI6XCIhXCIsXCImZXhpc3Q7XCI6XCLiiINcIixcIiZleHBlY3RhdGlvbjtcIjpcIuKEsFwiLFwiJmV4cG9uZW50aWFsZTtcIjpcIuKFh1wiLFwiJmZhbGxpbmdkb3RzZXE7XCI6XCLiiZJcIixcIiZmY3k7XCI6XCLRhFwiLFwiJmZlbWFsZTtcIjpcIuKZgFwiLFwiJmZmaWxpZztcIjpcIu+sg1wiLFwiJmZmbGlnO1wiOlwi76yAXCIsXCImZmZsbGlnO1wiOlwi76yEXCIsXCImZmZyO1wiOlwi8J2Uo1wiLFwiJmZpbGlnO1wiOlwi76yBXCIsXCImZmpsaWc7XCI6XCJmalwiLFwiJmZsYXQ7XCI6XCLima1cIixcIiZmbGxpZztcIjpcIu+sglwiLFwiJmZsdG5zO1wiOlwi4paxXCIsXCImZm5vZjtcIjpcIsaSXCIsXCImZm9wZjtcIjpcIvCdlZdcIixcIiZmb3JhbGw7XCI6XCLiiIBcIixcIiZmb3JrO1wiOlwi4ouUXCIsXCImZm9ya3Y7XCI6XCLiq5lcIixcIiZmcGFydGludDtcIjpcIuKojVwiLFwiJmZyYWMxMlwiOlwiwr1cIixcIiZmcmFjMTI7XCI6XCLCvVwiLFwiJmZyYWMxMztcIjpcIuKFk1wiLFwiJmZyYWMxNFwiOlwiwrxcIixcIiZmcmFjMTQ7XCI6XCLCvFwiLFwiJmZyYWMxNTtcIjpcIuKFlVwiLFwiJmZyYWMxNjtcIjpcIuKFmVwiLFwiJmZyYWMxODtcIjpcIuKFm1wiLFwiJmZyYWMyMztcIjpcIuKFlFwiLFwiJmZyYWMyNTtcIjpcIuKFllwiLFwiJmZyYWMzNFwiOlwiwr5cIixcIiZmcmFjMzQ7XCI6XCLCvlwiLFwiJmZyYWMzNTtcIjpcIuKFl1wiLFwiJmZyYWMzODtcIjpcIuKFnFwiLFwiJmZyYWM0NTtcIjpcIuKFmFwiLFwiJmZyYWM1NjtcIjpcIuKFmlwiLFwiJmZyYWM1ODtcIjpcIuKFnVwiLFwiJmZyYWM3ODtcIjpcIuKFnlwiLFwiJmZyYXNsO1wiOlwi4oGEXCIsXCImZnJvd247XCI6XCLijKJcIixcIiZmc2NyO1wiOlwi8J2Su1wiLFwiJmdFO1wiOlwi4omnXCIsXCImZ0VsO1wiOlwi4qqMXCIsXCImZ2FjdXRlO1wiOlwix7VcIixcIiZnYW1tYTtcIjpcIs6zXCIsXCImZ2FtbWFkO1wiOlwiz51cIixcIiZnYXA7XCI6XCLiqoZcIixcIiZnYnJldmU7XCI6XCLEn1wiLFwiJmdjaXJjO1wiOlwixJ1cIixcIiZnY3k7XCI6XCLQs1wiLFwiJmdkb3Q7XCI6XCLEoVwiLFwiJmdlO1wiOlwi4omlXCIsXCImZ2VsO1wiOlwi4oubXCIsXCImZ2VxO1wiOlwi4omlXCIsXCImZ2VxcTtcIjpcIuKJp1wiLFwiJmdlcXNsYW50O1wiOlwi4qm+XCIsXCImZ2VzO1wiOlwi4qm+XCIsXCImZ2VzY2M7XCI6XCLiqqlcIixcIiZnZXNkb3Q7XCI6XCLiqoBcIixcIiZnZXNkb3RvO1wiOlwi4qqCXCIsXCImZ2VzZG90b2w7XCI6XCLiqoRcIixcIiZnZXNsO1wiOlwi4oub77iAXCIsXCImZ2VzbGVzO1wiOlwi4qqUXCIsXCImZ2ZyO1wiOlwi8J2UpFwiLFwiJmdnO1wiOlwi4omrXCIsXCImZ2dnO1wiOlwi4ouZXCIsXCImZ2ltZWw7XCI6XCLihLdcIixcIiZnamN5O1wiOlwi0ZNcIixcIiZnbDtcIjpcIuKJt1wiLFwiJmdsRTtcIjpcIuKqklwiLFwiJmdsYTtcIjpcIuKqpVwiLFwiJmdsajtcIjpcIuKqpFwiLFwiJmduRTtcIjpcIuKJqVwiLFwiJmduYXA7XCI6XCLiqopcIixcIiZnbmFwcHJveDtcIjpcIuKqilwiLFwiJmduZTtcIjpcIuKqiFwiLFwiJmduZXE7XCI6XCLiqohcIixcIiZnbmVxcTtcIjpcIuKJqVwiLFwiJmduc2ltO1wiOlwi4ounXCIsXCImZ29wZjtcIjpcIvCdlZhcIixcIiZncmF2ZTtcIjpcImBcIixcIiZnc2NyO1wiOlwi4oSKXCIsXCImZ3NpbTtcIjpcIuKJs1wiLFwiJmdzaW1lO1wiOlwi4qqOXCIsXCImZ3NpbWw7XCI6XCLiqpBcIixcIiZndFwiOlwiPlwiLFwiJmd0O1wiOlwiPlwiLFwiJmd0Y2M7XCI6XCLiqqdcIixcIiZndGNpcjtcIjpcIuKpulwiLFwiJmd0ZG90O1wiOlwi4ouXXCIsXCImZ3RsUGFyO1wiOlwi4qaVXCIsXCImZ3RxdWVzdDtcIjpcIuKpvFwiLFwiJmd0cmFwcHJveDtcIjpcIuKqhlwiLFwiJmd0cmFycjtcIjpcIuKluFwiLFwiJmd0cmRvdDtcIjpcIuKLl1wiLFwiJmd0cmVxbGVzcztcIjpcIuKLm1wiLFwiJmd0cmVxcWxlc3M7XCI6XCLiqoxcIixcIiZndHJsZXNzO1wiOlwi4om3XCIsXCImZ3Ryc2ltO1wiOlwi4omzXCIsXCImZ3ZlcnRuZXFxO1wiOlwi4omp77iAXCIsXCImZ3ZuRTtcIjpcIuKJqe+4gFwiLFwiJmhBcnI7XCI6XCLih5RcIixcIiZoYWlyc3A7XCI6XCLigIpcIixcIiZoYWxmO1wiOlwiwr1cIixcIiZoYW1pbHQ7XCI6XCLihItcIixcIiZoYXJkY3k7XCI6XCLRilwiLFwiJmhhcnI7XCI6XCLihpRcIixcIiZoYXJyY2lyO1wiOlwi4qWIXCIsXCImaGFycnc7XCI6XCLihq1cIixcIiZoYmFyO1wiOlwi4oSPXCIsXCImaGNpcmM7XCI6XCLEpVwiLFwiJmhlYXJ0cztcIjpcIuKZpVwiLFwiJmhlYXJ0c3VpdDtcIjpcIuKZpVwiLFwiJmhlbGxpcDtcIjpcIuKAplwiLFwiJmhlcmNvbjtcIjpcIuKKuVwiLFwiJmhmcjtcIjpcIvCdlKVcIixcIiZoa3NlYXJvdztcIjpcIuKkpVwiLFwiJmhrc3dhcm93O1wiOlwi4qSmXCIsXCImaG9hcnI7XCI6XCLih79cIixcIiZob210aHQ7XCI6XCLiiLtcIixcIiZob29rbGVmdGFycm93O1wiOlwi4oapXCIsXCImaG9va3JpZ2h0YXJyb3c7XCI6XCLihqpcIixcIiZob3BmO1wiOlwi8J2VmVwiLFwiJmhvcmJhcjtcIjpcIuKAlVwiLFwiJmhzY3I7XCI6XCLwnZK9XCIsXCImaHNsYXNoO1wiOlwi4oSPXCIsXCImaHN0cm9rO1wiOlwixKdcIixcIiZoeWJ1bGw7XCI6XCLigYNcIixcIiZoeXBoZW47XCI6XCLigJBcIixcIiZpYWN1dGVcIjpcIsOtXCIsXCImaWFjdXRlO1wiOlwiw61cIixcIiZpYztcIjpcIuKBo1wiLFwiJmljaXJjXCI6XCLDrlwiLFwiJmljaXJjO1wiOlwiw65cIixcIiZpY3k7XCI6XCLQuFwiLFwiJmllY3k7XCI6XCLQtVwiLFwiJmlleGNsXCI6XCLCoVwiLFwiJmlleGNsO1wiOlwiwqFcIixcIiZpZmY7XCI6XCLih5RcIixcIiZpZnI7XCI6XCLwnZSmXCIsXCImaWdyYXZlXCI6XCLDrFwiLFwiJmlncmF2ZTtcIjpcIsOsXCIsXCImaWk7XCI6XCLihYhcIixcIiZpaWlpbnQ7XCI6XCLiqIxcIixcIiZpaWludDtcIjpcIuKIrVwiLFwiJmlpbmZpbjtcIjpcIuKnnFwiLFwiJmlpb3RhO1wiOlwi4oSpXCIsXCImaWpsaWc7XCI6XCLEs1wiLFwiJmltYWNyO1wiOlwixKtcIixcIiZpbWFnZTtcIjpcIuKEkVwiLFwiJmltYWdsaW5lO1wiOlwi4oSQXCIsXCImaW1hZ3BhcnQ7XCI6XCLihJFcIixcIiZpbWF0aDtcIjpcIsSxXCIsXCImaW1vZjtcIjpcIuKKt1wiLFwiJmltcGVkO1wiOlwixrVcIixcIiZpbjtcIjpcIuKIiFwiLFwiJmluY2FyZTtcIjpcIuKEhVwiLFwiJmluZmluO1wiOlwi4oieXCIsXCImaW5maW50aWU7XCI6XCLip51cIixcIiZpbm9kb3Q7XCI6XCLEsVwiLFwiJmludDtcIjpcIuKIq1wiLFwiJmludGNhbDtcIjpcIuKKulwiLFwiJmludGVnZXJzO1wiOlwi4oSkXCIsXCImaW50ZXJjYWw7XCI6XCLiirpcIixcIiZpbnRsYXJoaztcIjpcIuKol1wiLFwiJmludHByb2Q7XCI6XCLiqLxcIixcIiZpb2N5O1wiOlwi0ZFcIixcIiZpb2dvbjtcIjpcIsSvXCIsXCImaW9wZjtcIjpcIvCdlZpcIixcIiZpb3RhO1wiOlwizrlcIixcIiZpcHJvZDtcIjpcIuKovFwiLFwiJmlxdWVzdFwiOlwiwr9cIixcIiZpcXVlc3Q7XCI6XCLCv1wiLFwiJmlzY3I7XCI6XCLwnZK+XCIsXCImaXNpbjtcIjpcIuKIiFwiLFwiJmlzaW5FO1wiOlwi4ou5XCIsXCImaXNpbmRvdDtcIjpcIuKLtVwiLFwiJmlzaW5zO1wiOlwi4ou0XCIsXCImaXNpbnN2O1wiOlwi4ouzXCIsXCImaXNpbnY7XCI6XCLiiIhcIixcIiZpdDtcIjpcIuKBolwiLFwiJml0aWxkZTtcIjpcIsSpXCIsXCImaXVrY3k7XCI6XCLRllwiLFwiJml1bWxcIjpcIsOvXCIsXCImaXVtbDtcIjpcIsOvXCIsXCImamNpcmM7XCI6XCLEtVwiLFwiJmpjeTtcIjpcItC5XCIsXCImamZyO1wiOlwi8J2Up1wiLFwiJmptYXRoO1wiOlwiyLdcIixcIiZqb3BmO1wiOlwi8J2Vm1wiLFwiJmpzY3I7XCI6XCLwnZK/XCIsXCImanNlcmN5O1wiOlwi0ZhcIixcIiZqdWtjeTtcIjpcItGUXCIsXCIma2FwcGE7XCI6XCLOulwiLFwiJmthcHBhdjtcIjpcIs+wXCIsXCIma2NlZGlsO1wiOlwixLdcIixcIiZrY3k7XCI6XCLQulwiLFwiJmtmcjtcIjpcIvCdlKhcIixcIiZrZ3JlZW47XCI6XCLEuFwiLFwiJmtoY3k7XCI6XCLRhVwiLFwiJmtqY3k7XCI6XCLRnFwiLFwiJmtvcGY7XCI6XCLwnZWcXCIsXCIma3NjcjtcIjpcIvCdk4BcIixcIiZsQWFycjtcIjpcIuKHmlwiLFwiJmxBcnI7XCI6XCLih5BcIixcIiZsQXRhaWw7XCI6XCLipJtcIixcIiZsQmFycjtcIjpcIuKkjlwiLFwiJmxFO1wiOlwi4ommXCIsXCImbEVnO1wiOlwi4qqLXCIsXCImbEhhcjtcIjpcIuKlolwiLFwiJmxhY3V0ZTtcIjpcIsS6XCIsXCImbGFlbXB0eXY7XCI6XCLiprRcIixcIiZsYWdyYW47XCI6XCLihJJcIixcIiZsYW1iZGE7XCI6XCLOu1wiLFwiJmxhbmc7XCI6XCLin6hcIixcIiZsYW5nZDtcIjpcIuKmkVwiLFwiJmxhbmdsZTtcIjpcIuKfqFwiLFwiJmxhcDtcIjpcIuKqhVwiLFwiJmxhcXVvXCI6XCLCq1wiLFwiJmxhcXVvO1wiOlwiwqtcIixcIiZsYXJyO1wiOlwi4oaQXCIsXCImbGFycmI7XCI6XCLih6RcIixcIiZsYXJyYmZzO1wiOlwi4qSfXCIsXCImbGFycmZzO1wiOlwi4qSdXCIsXCImbGFycmhrO1wiOlwi4oapXCIsXCImbGFycmxwO1wiOlwi4oarXCIsXCImbGFycnBsO1wiOlwi4qS5XCIsXCImbGFycnNpbTtcIjpcIuKls1wiLFwiJmxhcnJ0bDtcIjpcIuKGolwiLFwiJmxhdDtcIjpcIuKqq1wiLFwiJmxhdGFpbDtcIjpcIuKkmVwiLFwiJmxhdGU7XCI6XCLiqq1cIixcIiZsYXRlcztcIjpcIuKqre+4gFwiLFwiJmxiYXJyO1wiOlwi4qSMXCIsXCImbGJicms7XCI6XCLinbJcIixcIiZsYnJhY2U7XCI6XCJ7XCIsXCImbGJyYWNrO1wiOlwiW1wiLFwiJmxicmtlO1wiOlwi4qaLXCIsXCImbGJya3NsZDtcIjpcIuKmj1wiLFwiJmxicmtzbHU7XCI6XCLipo1cIixcIiZsY2Fyb247XCI6XCLEvlwiLFwiJmxjZWRpbDtcIjpcIsS8XCIsXCImbGNlaWw7XCI6XCLijIhcIixcIiZsY3ViO1wiOlwie1wiLFwiJmxjeTtcIjpcItC7XCIsXCImbGRjYTtcIjpcIuKktlwiLFwiJmxkcXVvO1wiOlwi4oCcXCIsXCImbGRxdW9yO1wiOlwi4oCeXCIsXCImbGRyZGhhcjtcIjpcIuKlp1wiLFwiJmxkcnVzaGFyO1wiOlwi4qWLXCIsXCImbGRzaDtcIjpcIuKGslwiLFwiJmxlO1wiOlwi4omkXCIsXCImbGVmdGFycm93O1wiOlwi4oaQXCIsXCImbGVmdGFycm93dGFpbDtcIjpcIuKGolwiLFwiJmxlZnRoYXJwb29uZG93bjtcIjpcIuKGvVwiLFwiJmxlZnRoYXJwb29udXA7XCI6XCLihrxcIixcIiZsZWZ0bGVmdGFycm93cztcIjpcIuKHh1wiLFwiJmxlZnRyaWdodGFycm93O1wiOlwi4oaUXCIsXCImbGVmdHJpZ2h0YXJyb3dzO1wiOlwi4oeGXCIsXCImbGVmdHJpZ2h0aGFycG9vbnM7XCI6XCLih4tcIixcIiZsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiOlwi4oatXCIsXCImbGVmdHRocmVldGltZXM7XCI6XCLii4tcIixcIiZsZWc7XCI6XCLii5pcIixcIiZsZXE7XCI6XCLiiaRcIixcIiZsZXFxO1wiOlwi4ommXCIsXCImbGVxc2xhbnQ7XCI6XCLiqb1cIixcIiZsZXM7XCI6XCLiqb1cIixcIiZsZXNjYztcIjpcIuKqqFwiLFwiJmxlc2RvdDtcIjpcIuKpv1wiLFwiJmxlc2RvdG87XCI6XCLiqoFcIixcIiZsZXNkb3RvcjtcIjpcIuKqg1wiLFwiJmxlc2c7XCI6XCLii5rvuIBcIixcIiZsZXNnZXM7XCI6XCLiqpNcIixcIiZsZXNzYXBwcm94O1wiOlwi4qqFXCIsXCImbGVzc2RvdDtcIjpcIuKLllwiLFwiJmxlc3NlcWd0cjtcIjpcIuKLmlwiLFwiJmxlc3NlcXFndHI7XCI6XCLiqotcIixcIiZsZXNzZ3RyO1wiOlwi4om2XCIsXCImbGVzc3NpbTtcIjpcIuKJslwiLFwiJmxmaXNodDtcIjpcIuKlvFwiLFwiJmxmbG9vcjtcIjpcIuKMilwiLFwiJmxmcjtcIjpcIvCdlKlcIixcIiZsZztcIjpcIuKJtlwiLFwiJmxnRTtcIjpcIuKqkVwiLFwiJmxoYXJkO1wiOlwi4oa9XCIsXCImbGhhcnU7XCI6XCLihrxcIixcIiZsaGFydWw7XCI6XCLipapcIixcIiZsaGJsaztcIjpcIuKWhFwiLFwiJmxqY3k7XCI6XCLRmVwiLFwiJmxsO1wiOlwi4omqXCIsXCImbGxhcnI7XCI6XCLih4dcIixcIiZsbGNvcm5lcjtcIjpcIuKMnlwiLFwiJmxsaGFyZDtcIjpcIuKlq1wiLFwiJmxsdHJpO1wiOlwi4pe6XCIsXCImbG1pZG90O1wiOlwixYBcIixcIiZsbW91c3Q7XCI6XCLijrBcIixcIiZsbW91c3RhY2hlO1wiOlwi4o6wXCIsXCImbG5FO1wiOlwi4omoXCIsXCImbG5hcDtcIjpcIuKqiVwiLFwiJmxuYXBwcm94O1wiOlwi4qqJXCIsXCImbG5lO1wiOlwi4qqHXCIsXCImbG5lcTtcIjpcIuKqh1wiLFwiJmxuZXFxO1wiOlwi4omoXCIsXCImbG5zaW07XCI6XCLii6ZcIixcIiZsb2FuZztcIjpcIuKfrFwiLFwiJmxvYXJyO1wiOlwi4oe9XCIsXCImbG9icms7XCI6XCLin6ZcIixcIiZsb25nbGVmdGFycm93O1wiOlwi4p+1XCIsXCImbG9uZ2xlZnRyaWdodGFycm93O1wiOlwi4p+3XCIsXCImbG9uZ21hcHN0bztcIjpcIuKfvFwiLFwiJmxvbmdyaWdodGFycm93O1wiOlwi4p+2XCIsXCImbG9vcGFycm93bGVmdDtcIjpcIuKGq1wiLFwiJmxvb3BhcnJvd3JpZ2h0O1wiOlwi4oasXCIsXCImbG9wYXI7XCI6XCLipoVcIixcIiZsb3BmO1wiOlwi8J2VnVwiLFwiJmxvcGx1cztcIjpcIuKorVwiLFwiJmxvdGltZXM7XCI6XCLiqLRcIixcIiZsb3dhc3Q7XCI6XCLiiJdcIixcIiZsb3diYXI7XCI6XCJfXCIsXCImbG96O1wiOlwi4peKXCIsXCImbG96ZW5nZTtcIjpcIuKXilwiLFwiJmxvemY7XCI6XCLip6tcIixcIiZscGFyO1wiOlwiKFwiLFwiJmxwYXJsdDtcIjpcIuKmk1wiLFwiJmxyYXJyO1wiOlwi4oeGXCIsXCImbHJjb3JuZXI7XCI6XCLijJ9cIixcIiZscmhhcjtcIjpcIuKHi1wiLFwiJmxyaGFyZDtcIjpcIuKlrVwiLFwiJmxybTtcIjpcIuKAjlwiLFwiJmxydHJpO1wiOlwi4oq/XCIsXCImbHNhcXVvO1wiOlwi4oC5XCIsXCImbHNjcjtcIjpcIvCdk4FcIixcIiZsc2g7XCI6XCLihrBcIixcIiZsc2ltO1wiOlwi4omyXCIsXCImbHNpbWU7XCI6XCLiqo1cIixcIiZsc2ltZztcIjpcIuKqj1wiLFwiJmxzcWI7XCI6XCJbXCIsXCImbHNxdW87XCI6XCLigJhcIixcIiZsc3F1b3I7XCI6XCLigJpcIixcIiZsc3Ryb2s7XCI6XCLFglwiLFwiJmx0XCI6XCI8XCIsXCImbHQ7XCI6XCI8XCIsXCImbHRjYztcIjpcIuKqplwiLFwiJmx0Y2lyO1wiOlwi4qm5XCIsXCImbHRkb3Q7XCI6XCLii5ZcIixcIiZsdGhyZWU7XCI6XCLii4tcIixcIiZsdGltZXM7XCI6XCLii4lcIixcIiZsdGxhcnI7XCI6XCLipbZcIixcIiZsdHF1ZXN0O1wiOlwi4qm7XCIsXCImbHRyUGFyO1wiOlwi4qaWXCIsXCImbHRyaTtcIjpcIuKXg1wiLFwiJmx0cmllO1wiOlwi4oq0XCIsXCImbHRyaWY7XCI6XCLil4JcIixcIiZsdXJkc2hhcjtcIjpcIuKlilwiLFwiJmx1cnVoYXI7XCI6XCLipaZcIixcIiZsdmVydG5lcXE7XCI6XCLiiajvuIBcIixcIiZsdm5FO1wiOlwi4omo77iAXCIsXCImbUREb3Q7XCI6XCLiiLpcIixcIiZtYWNyXCI6XCLCr1wiLFwiJm1hY3I7XCI6XCLCr1wiLFwiJm1hbGU7XCI6XCLimYJcIixcIiZtYWx0O1wiOlwi4pygXCIsXCImbWFsdGVzZTtcIjpcIuKcoFwiLFwiJm1hcDtcIjpcIuKGplwiLFwiJm1hcHN0bztcIjpcIuKGplwiLFwiJm1hcHN0b2Rvd247XCI6XCLihqdcIixcIiZtYXBzdG9sZWZ0O1wiOlwi4oakXCIsXCImbWFwc3RvdXA7XCI6XCLihqVcIixcIiZtYXJrZXI7XCI6XCLilq5cIixcIiZtY29tbWE7XCI6XCLiqKlcIixcIiZtY3k7XCI6XCLQvFwiLFwiJm1kYXNoO1wiOlwi4oCUXCIsXCImbWVhc3VyZWRhbmdsZTtcIjpcIuKIoVwiLFwiJm1mcjtcIjpcIvCdlKpcIixcIiZtaG87XCI6XCLihKdcIixcIiZtaWNyb1wiOlwiwrVcIixcIiZtaWNybztcIjpcIsK1XCIsXCImbWlkO1wiOlwi4oijXCIsXCImbWlkYXN0O1wiOlwiKlwiLFwiJm1pZGNpcjtcIjpcIuKrsFwiLFwiJm1pZGRvdFwiOlwiwrdcIixcIiZtaWRkb3Q7XCI6XCLCt1wiLFwiJm1pbnVzO1wiOlwi4oiSXCIsXCImbWludXNiO1wiOlwi4oqfXCIsXCImbWludXNkO1wiOlwi4oi4XCIsXCImbWludXNkdTtcIjpcIuKoqlwiLFwiJm1sY3A7XCI6XCLiq5tcIixcIiZtbGRyO1wiOlwi4oCmXCIsXCImbW5wbHVzO1wiOlwi4oiTXCIsXCImbW9kZWxzO1wiOlwi4oqnXCIsXCImbW9wZjtcIjpcIvCdlZ5cIixcIiZtcDtcIjpcIuKIk1wiLFwiJm1zY3I7XCI6XCLwnZOCXCIsXCImbXN0cG9zO1wiOlwi4oi+XCIsXCImbXU7XCI6XCLOvFwiLFwiJm11bHRpbWFwO1wiOlwi4oq4XCIsXCImbXVtYXA7XCI6XCLiirhcIixcIiZuR2c7XCI6XCLii5nMuFwiLFwiJm5HdDtcIjpcIuKJq+KDklwiLFwiJm5HdHY7XCI6XCLiiavMuFwiLFwiJm5MZWZ0YXJyb3c7XCI6XCLih41cIixcIiZuTGVmdHJpZ2h0YXJyb3c7XCI6XCLih45cIixcIiZuTGw7XCI6XCLii5jMuFwiLFwiJm5MdDtcIjpcIuKJquKDklwiLFwiJm5MdHY7XCI6XCLiiarMuFwiLFwiJm5SaWdodGFycm93O1wiOlwi4oePXCIsXCImblZEYXNoO1wiOlwi4oqvXCIsXCImblZkYXNoO1wiOlwi4oquXCIsXCImbmFibGE7XCI6XCLiiIdcIixcIiZuYWN1dGU7XCI6XCLFhFwiLFwiJm5hbmc7XCI6XCLiiKDig5JcIixcIiZuYXA7XCI6XCLiiYlcIixcIiZuYXBFO1wiOlwi4qmwzLhcIixcIiZuYXBpZDtcIjpcIuKJi8y4XCIsXCImbmFwb3M7XCI6XCLFiVwiLFwiJm5hcHByb3g7XCI6XCLiiYlcIixcIiZuYXR1cjtcIjpcIuKZrlwiLFwiJm5hdHVyYWw7XCI6XCLima5cIixcIiZuYXR1cmFscztcIjpcIuKElVwiLFwiJm5ic3BcIjpcIsKgXCIsXCImbmJzcDtcIjpcIsKgXCIsXCImbmJ1bXA7XCI6XCLiiY7MuFwiLFwiJm5idW1wZTtcIjpcIuKJj8y4XCIsXCImbmNhcDtcIjpcIuKpg1wiLFwiJm5jYXJvbjtcIjpcIsWIXCIsXCImbmNlZGlsO1wiOlwixYZcIixcIiZuY29uZztcIjpcIuKJh1wiLFwiJm5jb25nZG90O1wiOlwi4qmtzLhcIixcIiZuY3VwO1wiOlwi4qmCXCIsXCImbmN5O1wiOlwi0L1cIixcIiZuZGFzaDtcIjpcIuKAk1wiLFwiJm5lO1wiOlwi4omgXCIsXCImbmVBcnI7XCI6XCLih5dcIixcIiZuZWFyaGs7XCI6XCLipKRcIixcIiZuZWFycjtcIjpcIuKGl1wiLFwiJm5lYXJyb3c7XCI6XCLihpdcIixcIiZuZWRvdDtcIjpcIuKJkMy4XCIsXCImbmVxdWl2O1wiOlwi4omiXCIsXCImbmVzZWFyO1wiOlwi4qSoXCIsXCImbmVzaW07XCI6XCLiiYLMuFwiLFwiJm5leGlzdDtcIjpcIuKIhFwiLFwiJm5leGlzdHM7XCI6XCLiiIRcIixcIiZuZnI7XCI6XCLwnZSrXCIsXCImbmdFO1wiOlwi4omnzLhcIixcIiZuZ2U7XCI6XCLiibFcIixcIiZuZ2VxO1wiOlwi4omxXCIsXCImbmdlcXE7XCI6XCLiiafMuFwiLFwiJm5nZXFzbGFudDtcIjpcIuKpvsy4XCIsXCImbmdlcztcIjpcIuKpvsy4XCIsXCImbmdzaW07XCI6XCLiibVcIixcIiZuZ3Q7XCI6XCLiia9cIixcIiZuZ3RyO1wiOlwi4omvXCIsXCImbmhBcnI7XCI6XCLih45cIixcIiZuaGFycjtcIjpcIuKGrlwiLFwiJm5ocGFyO1wiOlwi4quyXCIsXCImbmk7XCI6XCLiiItcIixcIiZuaXM7XCI6XCLii7xcIixcIiZuaXNkO1wiOlwi4ou6XCIsXCImbml2O1wiOlwi4oiLXCIsXCImbmpjeTtcIjpcItGaXCIsXCImbmxBcnI7XCI6XCLih41cIixcIiZubEU7XCI6XCLiiabMuFwiLFwiJm5sYXJyO1wiOlwi4oaaXCIsXCImbmxkcjtcIjpcIuKApVwiLFwiJm5sZTtcIjpcIuKJsFwiLFwiJm5sZWZ0YXJyb3c7XCI6XCLihppcIixcIiZubGVmdHJpZ2h0YXJyb3c7XCI6XCLihq5cIixcIiZubGVxO1wiOlwi4omwXCIsXCImbmxlcXE7XCI6XCLiiabMuFwiLFwiJm5sZXFzbGFudDtcIjpcIuKpvcy4XCIsXCImbmxlcztcIjpcIuKpvcy4XCIsXCImbmxlc3M7XCI6XCLiia5cIixcIiZubHNpbTtcIjpcIuKJtFwiLFwiJm5sdDtcIjpcIuKJrlwiLFwiJm5sdHJpO1wiOlwi4ouqXCIsXCImbmx0cmllO1wiOlwi4ousXCIsXCImbm1pZDtcIjpcIuKIpFwiLFwiJm5vcGY7XCI6XCLwnZWfXCIsXCImbm90XCI6XCLCrFwiLFwiJm5vdDtcIjpcIsKsXCIsXCImbm90aW47XCI6XCLiiIlcIixcIiZub3RpbkU7XCI6XCLii7nMuFwiLFwiJm5vdGluZG90O1wiOlwi4ou1zLhcIixcIiZub3RpbnZhO1wiOlwi4oiJXCIsXCImbm90aW52YjtcIjpcIuKLt1wiLFwiJm5vdGludmM7XCI6XCLii7ZcIixcIiZub3RuaTtcIjpcIuKIjFwiLFwiJm5vdG5pdmE7XCI6XCLiiIxcIixcIiZub3RuaXZiO1wiOlwi4ou+XCIsXCImbm90bml2YztcIjpcIuKLvVwiLFwiJm5wYXI7XCI6XCLiiKZcIixcIiZucGFyYWxsZWw7XCI6XCLiiKZcIixcIiZucGFyc2w7XCI6XCLiq73ig6VcIixcIiZucGFydDtcIjpcIuKIgsy4XCIsXCImbnBvbGludDtcIjpcIuKolFwiLFwiJm5wcjtcIjpcIuKKgFwiLFwiJm5wcmN1ZTtcIjpcIuKLoFwiLFwiJm5wcmU7XCI6XCLiqq/MuFwiLFwiJm5wcmVjO1wiOlwi4oqAXCIsXCImbnByZWNlcTtcIjpcIuKqr8y4XCIsXCImbnJBcnI7XCI6XCLih49cIixcIiZucmFycjtcIjpcIuKGm1wiLFwiJm5yYXJyYztcIjpcIuKks8y4XCIsXCImbnJhcnJ3O1wiOlwi4oadzLhcIixcIiZucmlnaHRhcnJvdztcIjpcIuKGm1wiLFwiJm5ydHJpO1wiOlwi4ourXCIsXCImbnJ0cmllO1wiOlwi4outXCIsXCImbnNjO1wiOlwi4oqBXCIsXCImbnNjY3VlO1wiOlwi4ouhXCIsXCImbnNjZTtcIjpcIuKqsMy4XCIsXCImbnNjcjtcIjpcIvCdk4NcIixcIiZuc2hvcnRtaWQ7XCI6XCLiiKRcIixcIiZuc2hvcnRwYXJhbGxlbDtcIjpcIuKIplwiLFwiJm5zaW07XCI6XCLiiYFcIixcIiZuc2ltZTtcIjpcIuKJhFwiLFwiJm5zaW1lcTtcIjpcIuKJhFwiLFwiJm5zbWlkO1wiOlwi4oikXCIsXCImbnNwYXI7XCI6XCLiiKZcIixcIiZuc3FzdWJlO1wiOlwi4ouiXCIsXCImbnNxc3VwZTtcIjpcIuKLo1wiLFwiJm5zdWI7XCI6XCLiioRcIixcIiZuc3ViRTtcIjpcIuKrhcy4XCIsXCImbnN1YmU7XCI6XCLiiohcIixcIiZuc3Vic2V0O1wiOlwi4oqC4oOSXCIsXCImbnN1YnNldGVxO1wiOlwi4oqIXCIsXCImbnN1YnNldGVxcTtcIjpcIuKrhcy4XCIsXCImbnN1Y2M7XCI6XCLiioFcIixcIiZuc3VjY2VxO1wiOlwi4qqwzLhcIixcIiZuc3VwO1wiOlwi4oqFXCIsXCImbnN1cEU7XCI6XCLiq4bMuFwiLFwiJm5zdXBlO1wiOlwi4oqJXCIsXCImbnN1cHNldDtcIjpcIuKKg+KDklwiLFwiJm5zdXBzZXRlcTtcIjpcIuKKiVwiLFwiJm5zdXBzZXRlcXE7XCI6XCLiq4bMuFwiLFwiJm50Z2w7XCI6XCLiiblcIixcIiZudGlsZGVcIjpcIsOxXCIsXCImbnRpbGRlO1wiOlwiw7FcIixcIiZudGxnO1wiOlwi4om4XCIsXCImbnRyaWFuZ2xlbGVmdDtcIjpcIuKLqlwiLFwiJm50cmlhbmdsZWxlZnRlcTtcIjpcIuKLrFwiLFwiJm50cmlhbmdsZXJpZ2h0O1wiOlwi4ourXCIsXCImbnRyaWFuZ2xlcmlnaHRlcTtcIjpcIuKLrVwiLFwiJm51O1wiOlwizr1cIixcIiZudW07XCI6XCIjXCIsXCImbnVtZXJvO1wiOlwi4oSWXCIsXCImbnVtc3A7XCI6XCLigIdcIixcIiZudkRhc2g7XCI6XCLiiq1cIixcIiZudkhhcnI7XCI6XCLipIRcIixcIiZudmFwO1wiOlwi4omN4oOSXCIsXCImbnZkYXNoO1wiOlwi4oqsXCIsXCImbnZnZTtcIjpcIuKJpeKDklwiLFwiJm52Z3Q7XCI6XCI+4oOSXCIsXCImbnZpbmZpbjtcIjpcIuKnnlwiLFwiJm52bEFycjtcIjpcIuKkglwiLFwiJm52bGU7XCI6XCLiiaTig5JcIixcIiZudmx0O1wiOlwiPOKDklwiLFwiJm52bHRyaWU7XCI6XCLiirTig5JcIixcIiZudnJBcnI7XCI6XCLipINcIixcIiZudnJ0cmllO1wiOlwi4oq14oOSXCIsXCImbnZzaW07XCI6XCLiiLzig5JcIixcIiZud0FycjtcIjpcIuKHllwiLFwiJm53YXJoaztcIjpcIuKko1wiLFwiJm53YXJyO1wiOlwi4oaWXCIsXCImbndhcnJvdztcIjpcIuKGllwiLFwiJm53bmVhcjtcIjpcIuKkp1wiLFwiJm9TO1wiOlwi4pOIXCIsXCImb2FjdXRlXCI6XCLDs1wiLFwiJm9hY3V0ZTtcIjpcIsOzXCIsXCImb2FzdDtcIjpcIuKKm1wiLFwiJm9jaXI7XCI6XCLiippcIixcIiZvY2lyY1wiOlwiw7RcIixcIiZvY2lyYztcIjpcIsO0XCIsXCImb2N5O1wiOlwi0L5cIixcIiZvZGFzaDtcIjpcIuKKnVwiLFwiJm9kYmxhYztcIjpcIsWRXCIsXCImb2RpdjtcIjpcIuKouFwiLFwiJm9kb3Q7XCI6XCLiiplcIixcIiZvZHNvbGQ7XCI6XCLiprxcIixcIiZvZWxpZztcIjpcIsWTXCIsXCImb2ZjaXI7XCI6XCLipr9cIixcIiZvZnI7XCI6XCLwnZSsXCIsXCImb2dvbjtcIjpcIsubXCIsXCImb2dyYXZlXCI6XCLDslwiLFwiJm9ncmF2ZTtcIjpcIsOyXCIsXCImb2d0O1wiOlwi4qeBXCIsXCImb2hiYXI7XCI6XCLiprVcIixcIiZvaG07XCI6XCLOqVwiLFwiJm9pbnQ7XCI6XCLiiK5cIixcIiZvbGFycjtcIjpcIuKGulwiLFwiJm9sY2lyO1wiOlwi4qa+XCIsXCImb2xjcm9zcztcIjpcIuKmu1wiLFwiJm9saW5lO1wiOlwi4oC+XCIsXCImb2x0O1wiOlwi4qeAXCIsXCImb21hY3I7XCI6XCLFjVwiLFwiJm9tZWdhO1wiOlwiz4lcIixcIiZvbWljcm9uO1wiOlwizr9cIixcIiZvbWlkO1wiOlwi4qa2XCIsXCImb21pbnVzO1wiOlwi4oqWXCIsXCImb29wZjtcIjpcIvCdlaBcIixcIiZvcGFyO1wiOlwi4qa3XCIsXCImb3BlcnA7XCI6XCLiprlcIixcIiZvcGx1cztcIjpcIuKKlVwiLFwiJm9yO1wiOlwi4oioXCIsXCImb3JhcnI7XCI6XCLihrtcIixcIiZvcmQ7XCI6XCLiqZ1cIixcIiZvcmRlcjtcIjpcIuKEtFwiLFwiJm9yZGVyb2Y7XCI6XCLihLRcIixcIiZvcmRmXCI6XCLCqlwiLFwiJm9yZGY7XCI6XCLCqlwiLFwiJm9yZG1cIjpcIsK6XCIsXCImb3JkbTtcIjpcIsK6XCIsXCImb3JpZ29mO1wiOlwi4oq2XCIsXCImb3JvcjtcIjpcIuKpllwiLFwiJm9yc2xvcGU7XCI6XCLiqZdcIixcIiZvcnY7XCI6XCLiqZtcIixcIiZvc2NyO1wiOlwi4oS0XCIsXCImb3NsYXNoXCI6XCLDuFwiLFwiJm9zbGFzaDtcIjpcIsO4XCIsXCImb3NvbDtcIjpcIuKKmFwiLFwiJm90aWxkZVwiOlwiw7VcIixcIiZvdGlsZGU7XCI6XCLDtVwiLFwiJm90aW1lcztcIjpcIuKKl1wiLFwiJm90aW1lc2FzO1wiOlwi4qi2XCIsXCImb3VtbFwiOlwiw7ZcIixcIiZvdW1sO1wiOlwiw7ZcIixcIiZvdmJhcjtcIjpcIuKMvVwiLFwiJnBhcjtcIjpcIuKIpVwiLFwiJnBhcmFcIjpcIsK2XCIsXCImcGFyYTtcIjpcIsK2XCIsXCImcGFyYWxsZWw7XCI6XCLiiKVcIixcIiZwYXJzaW07XCI6XCLiq7NcIixcIiZwYXJzbDtcIjpcIuKrvVwiLFwiJnBhcnQ7XCI6XCLiiIJcIixcIiZwY3k7XCI6XCLQv1wiLFwiJnBlcmNudDtcIjpcIiVcIixcIiZwZXJpb2Q7XCI6XCIuXCIsXCImcGVybWlsO1wiOlwi4oCwXCIsXCImcGVycDtcIjpcIuKKpVwiLFwiJnBlcnRlbms7XCI6XCLigLFcIixcIiZwZnI7XCI6XCLwnZStXCIsXCImcGhpO1wiOlwiz4ZcIixcIiZwaGl2O1wiOlwiz5VcIixcIiZwaG1tYXQ7XCI6XCLihLNcIixcIiZwaG9uZTtcIjpcIuKYjlwiLFwiJnBpO1wiOlwiz4BcIixcIiZwaXRjaGZvcms7XCI6XCLii5RcIixcIiZwaXY7XCI6XCLPllwiLFwiJnBsYW5jaztcIjpcIuKEj1wiLFwiJnBsYW5ja2g7XCI6XCLihI5cIixcIiZwbGFua3Y7XCI6XCLihI9cIixcIiZwbHVzO1wiOlwiK1wiLFwiJnBsdXNhY2lyO1wiOlwi4qijXCIsXCImcGx1c2I7XCI6XCLiip5cIixcIiZwbHVzY2lyO1wiOlwi4qiiXCIsXCImcGx1c2RvO1wiOlwi4oiUXCIsXCImcGx1c2R1O1wiOlwi4qilXCIsXCImcGx1c2U7XCI6XCLiqbJcIixcIiZwbHVzbW5cIjpcIsKxXCIsXCImcGx1c21uO1wiOlwiwrFcIixcIiZwbHVzc2ltO1wiOlwi4qimXCIsXCImcGx1c3R3bztcIjpcIuKop1wiLFwiJnBtO1wiOlwiwrFcIixcIiZwb2ludGludDtcIjpcIuKolVwiLFwiJnBvcGY7XCI6XCLwnZWhXCIsXCImcG91bmRcIjpcIsKjXCIsXCImcG91bmQ7XCI6XCLCo1wiLFwiJnByO1wiOlwi4om6XCIsXCImcHJFO1wiOlwi4qqzXCIsXCImcHJhcDtcIjpcIuKqt1wiLFwiJnByY3VlO1wiOlwi4om8XCIsXCImcHJlO1wiOlwi4qqvXCIsXCImcHJlYztcIjpcIuKJulwiLFwiJnByZWNhcHByb3g7XCI6XCLiqrdcIixcIiZwcmVjY3VybHllcTtcIjpcIuKJvFwiLFwiJnByZWNlcTtcIjpcIuKqr1wiLFwiJnByZWNuYXBwcm94O1wiOlwi4qq5XCIsXCImcHJlY25lcXE7XCI6XCLiqrVcIixcIiZwcmVjbnNpbTtcIjpcIuKLqFwiLFwiJnByZWNzaW07XCI6XCLiib5cIixcIiZwcmltZTtcIjpcIuKAslwiLFwiJnByaW1lcztcIjpcIuKEmVwiLFwiJnBybkU7XCI6XCLiqrVcIixcIiZwcm5hcDtcIjpcIuKquVwiLFwiJnBybnNpbTtcIjpcIuKLqFwiLFwiJnByb2Q7XCI6XCLiiI9cIixcIiZwcm9mYWxhcjtcIjpcIuKMrlwiLFwiJnByb2ZsaW5lO1wiOlwi4oySXCIsXCImcHJvZnN1cmY7XCI6XCLijJNcIixcIiZwcm9wO1wiOlwi4oidXCIsXCImcHJvcHRvO1wiOlwi4oidXCIsXCImcHJzaW07XCI6XCLiib5cIixcIiZwcnVyZWw7XCI6XCLiirBcIixcIiZwc2NyO1wiOlwi8J2ThVwiLFwiJnBzaTtcIjpcIs+IXCIsXCImcHVuY3NwO1wiOlwi4oCIXCIsXCImcWZyO1wiOlwi8J2UrlwiLFwiJnFpbnQ7XCI6XCLiqIxcIixcIiZxb3BmO1wiOlwi8J2VolwiLFwiJnFwcmltZTtcIjpcIuKBl1wiLFwiJnFzY3I7XCI6XCLwnZOGXCIsXCImcXVhdGVybmlvbnM7XCI6XCLihI1cIixcIiZxdWF0aW50O1wiOlwi4qiWXCIsXCImcXVlc3Q7XCI6XCI/XCIsXCImcXVlc3RlcTtcIjpcIuKJn1wiLFwiJnF1b3RcIjonXCInLFwiJnF1b3Q7XCI6J1wiJyxcIiZyQWFycjtcIjpcIuKHm1wiLFwiJnJBcnI7XCI6XCLih5JcIixcIiZyQXRhaWw7XCI6XCLipJxcIixcIiZyQmFycjtcIjpcIuKkj1wiLFwiJnJIYXI7XCI6XCLipaRcIixcIiZyYWNlO1wiOlwi4oi9zLFcIixcIiZyYWN1dGU7XCI6XCLFlVwiLFwiJnJhZGljO1wiOlwi4oiaXCIsXCImcmFlbXB0eXY7XCI6XCLiprNcIixcIiZyYW5nO1wiOlwi4p+pXCIsXCImcmFuZ2Q7XCI6XCLippJcIixcIiZyYW5nZTtcIjpcIuKmpVwiLFwiJnJhbmdsZTtcIjpcIuKfqVwiLFwiJnJhcXVvXCI6XCLCu1wiLFwiJnJhcXVvO1wiOlwiwrtcIixcIiZyYXJyO1wiOlwi4oaSXCIsXCImcmFycmFwO1wiOlwi4qW1XCIsXCImcmFycmI7XCI6XCLih6VcIixcIiZyYXJyYmZzO1wiOlwi4qSgXCIsXCImcmFycmM7XCI6XCLipLNcIixcIiZyYXJyZnM7XCI6XCLipJ5cIixcIiZyYXJyaGs7XCI6XCLihqpcIixcIiZyYXJybHA7XCI6XCLihqxcIixcIiZyYXJycGw7XCI6XCLipYVcIixcIiZyYXJyc2ltO1wiOlwi4qW0XCIsXCImcmFycnRsO1wiOlwi4oajXCIsXCImcmFycnc7XCI6XCLihp1cIixcIiZyYXRhaWw7XCI6XCLipJpcIixcIiZyYXRpbztcIjpcIuKItlwiLFwiJnJhdGlvbmFscztcIjpcIuKEmlwiLFwiJnJiYXJyO1wiOlwi4qSNXCIsXCImcmJicms7XCI6XCLinbNcIixcIiZyYnJhY2U7XCI6XCJ9XCIsXCImcmJyYWNrO1wiOlwiXVwiLFwiJnJicmtlO1wiOlwi4qaMXCIsXCImcmJya3NsZDtcIjpcIuKmjlwiLFwiJnJicmtzbHU7XCI6XCLippBcIixcIiZyY2Fyb247XCI6XCLFmVwiLFwiJnJjZWRpbDtcIjpcIsWXXCIsXCImcmNlaWw7XCI6XCLijIlcIixcIiZyY3ViO1wiOlwifVwiLFwiJnJjeTtcIjpcItGAXCIsXCImcmRjYTtcIjpcIuKkt1wiLFwiJnJkbGRoYXI7XCI6XCLipalcIixcIiZyZHF1bztcIjpcIuKAnVwiLFwiJnJkcXVvcjtcIjpcIuKAnVwiLFwiJnJkc2g7XCI6XCLihrNcIixcIiZyZWFsO1wiOlwi4oScXCIsXCImcmVhbGluZTtcIjpcIuKEm1wiLFwiJnJlYWxwYXJ0O1wiOlwi4oScXCIsXCImcmVhbHM7XCI6XCLihJ1cIixcIiZyZWN0O1wiOlwi4patXCIsXCImcmVnXCI6XCLCrlwiLFwiJnJlZztcIjpcIsKuXCIsXCImcmZpc2h0O1wiOlwi4qW9XCIsXCImcmZsb29yO1wiOlwi4oyLXCIsXCImcmZyO1wiOlwi8J2Ur1wiLFwiJnJoYXJkO1wiOlwi4oeBXCIsXCImcmhhcnU7XCI6XCLih4BcIixcIiZyaGFydWw7XCI6XCLipaxcIixcIiZyaG87XCI6XCLPgVwiLFwiJnJob3Y7XCI6XCLPsVwiLFwiJnJpZ2h0YXJyb3c7XCI6XCLihpJcIixcIiZyaWdodGFycm93dGFpbDtcIjpcIuKGo1wiLFwiJnJpZ2h0aGFycG9vbmRvd247XCI6XCLih4FcIixcIiZyaWdodGhhcnBvb251cDtcIjpcIuKHgFwiLFwiJnJpZ2h0bGVmdGFycm93cztcIjpcIuKHhFwiLFwiJnJpZ2h0bGVmdGhhcnBvb25zO1wiOlwi4oeMXCIsXCImcmlnaHRyaWdodGFycm93cztcIjpcIuKHiVwiLFwiJnJpZ2h0c3F1aWdhcnJvdztcIjpcIuKGnVwiLFwiJnJpZ2h0dGhyZWV0aW1lcztcIjpcIuKLjFwiLFwiJnJpbmc7XCI6XCLLmlwiLFwiJnJpc2luZ2RvdHNlcTtcIjpcIuKJk1wiLFwiJnJsYXJyO1wiOlwi4oeEXCIsXCImcmxoYXI7XCI6XCLih4xcIixcIiZybG07XCI6XCLigI9cIixcIiZybW91c3Q7XCI6XCLijrFcIixcIiZybW91c3RhY2hlO1wiOlwi4o6xXCIsXCImcm5taWQ7XCI6XCLiq65cIixcIiZyb2FuZztcIjpcIuKfrVwiLFwiJnJvYXJyO1wiOlwi4oe+XCIsXCImcm9icms7XCI6XCLin6dcIixcIiZyb3BhcjtcIjpcIuKmhlwiLFwiJnJvcGY7XCI6XCLwnZWjXCIsXCImcm9wbHVzO1wiOlwi4qiuXCIsXCImcm90aW1lcztcIjpcIuKotVwiLFwiJnJwYXI7XCI6XCIpXCIsXCImcnBhcmd0O1wiOlwi4qaUXCIsXCImcnBwb2xpbnQ7XCI6XCLiqJJcIixcIiZycmFycjtcIjpcIuKHiVwiLFwiJnJzYXF1bztcIjpcIuKAulwiLFwiJnJzY3I7XCI6XCLwnZOHXCIsXCImcnNoO1wiOlwi4oaxXCIsXCImcnNxYjtcIjpcIl1cIixcIiZyc3F1bztcIjpcIuKAmVwiLFwiJnJzcXVvcjtcIjpcIuKAmVwiLFwiJnJ0aHJlZTtcIjpcIuKLjFwiLFwiJnJ0aW1lcztcIjpcIuKLilwiLFwiJnJ0cmk7XCI6XCLilrlcIixcIiZydHJpZTtcIjpcIuKKtVwiLFwiJnJ0cmlmO1wiOlwi4pa4XCIsXCImcnRyaWx0cmk7XCI6XCLip45cIixcIiZydWx1aGFyO1wiOlwi4qWoXCIsXCImcng7XCI6XCLihJ5cIixcIiZzYWN1dGU7XCI6XCLFm1wiLFwiJnNicXVvO1wiOlwi4oCaXCIsXCImc2M7XCI6XCLiibtcIixcIiZzY0U7XCI6XCLiqrRcIixcIiZzY2FwO1wiOlwi4qq4XCIsXCImc2Nhcm9uO1wiOlwixaFcIixcIiZzY2N1ZTtcIjpcIuKJvVwiLFwiJnNjZTtcIjpcIuKqsFwiLFwiJnNjZWRpbDtcIjpcIsWfXCIsXCImc2NpcmM7XCI6XCLFnVwiLFwiJnNjbkU7XCI6XCLiqrZcIixcIiZzY25hcDtcIjpcIuKqulwiLFwiJnNjbnNpbTtcIjpcIuKLqVwiLFwiJnNjcG9saW50O1wiOlwi4qiTXCIsXCImc2NzaW07XCI6XCLiib9cIixcIiZzY3k7XCI6XCLRgVwiLFwiJnNkb3Q7XCI6XCLii4VcIixcIiZzZG90YjtcIjpcIuKKoVwiLFwiJnNkb3RlO1wiOlwi4qmmXCIsXCImc2VBcnI7XCI6XCLih5hcIixcIiZzZWFyaGs7XCI6XCLipKVcIixcIiZzZWFycjtcIjpcIuKGmFwiLFwiJnNlYXJyb3c7XCI6XCLihphcIixcIiZzZWN0XCI6XCLCp1wiLFwiJnNlY3Q7XCI6XCLCp1wiLFwiJnNlbWk7XCI6XCI7XCIsXCImc2Vzd2FyO1wiOlwi4qSpXCIsXCImc2V0bWludXM7XCI6XCLiiJZcIixcIiZzZXRtbjtcIjpcIuKIllwiLFwiJnNleHQ7XCI6XCLinLZcIixcIiZzZnI7XCI6XCLwnZSwXCIsXCImc2Zyb3duO1wiOlwi4oyiXCIsXCImc2hhcnA7XCI6XCLima9cIixcIiZzaGNoY3k7XCI6XCLRiVwiLFwiJnNoY3k7XCI6XCLRiFwiLFwiJnNob3J0bWlkO1wiOlwi4oijXCIsXCImc2hvcnRwYXJhbGxlbDtcIjpcIuKIpVwiLFwiJnNoeVwiOlwiwq1cIixcIiZzaHk7XCI6XCLCrVwiLFwiJnNpZ21hO1wiOlwiz4NcIixcIiZzaWdtYWY7XCI6XCLPglwiLFwiJnNpZ21hdjtcIjpcIs+CXCIsXCImc2ltO1wiOlwi4oi8XCIsXCImc2ltZG90O1wiOlwi4qmqXCIsXCImc2ltZTtcIjpcIuKJg1wiLFwiJnNpbWVxO1wiOlwi4omDXCIsXCImc2ltZztcIjpcIuKqnlwiLFwiJnNpbWdFO1wiOlwi4qqgXCIsXCImc2ltbDtcIjpcIuKqnVwiLFwiJnNpbWxFO1wiOlwi4qqfXCIsXCImc2ltbmU7XCI6XCLiiYZcIixcIiZzaW1wbHVzO1wiOlwi4qikXCIsXCImc2ltcmFycjtcIjpcIuKlslwiLFwiJnNsYXJyO1wiOlwi4oaQXCIsXCImc21hbGxzZXRtaW51cztcIjpcIuKIllwiLFwiJnNtYXNocDtcIjpcIuKos1wiLFwiJnNtZXBhcnNsO1wiOlwi4qekXCIsXCImc21pZDtcIjpcIuKIo1wiLFwiJnNtaWxlO1wiOlwi4oyjXCIsXCImc210O1wiOlwi4qqqXCIsXCImc210ZTtcIjpcIuKqrFwiLFwiJnNtdGVzO1wiOlwi4qqs77iAXCIsXCImc29mdGN5O1wiOlwi0YxcIixcIiZzb2w7XCI6XCIvXCIsXCImc29sYjtcIjpcIuKnhFwiLFwiJnNvbGJhcjtcIjpcIuKMv1wiLFwiJnNvcGY7XCI6XCLwnZWkXCIsXCImc3BhZGVzO1wiOlwi4pmgXCIsXCImc3BhZGVzdWl0O1wiOlwi4pmgXCIsXCImc3BhcjtcIjpcIuKIpVwiLFwiJnNxY2FwO1wiOlwi4oqTXCIsXCImc3FjYXBzO1wiOlwi4oqT77iAXCIsXCImc3FjdXA7XCI6XCLiipRcIixcIiZzcWN1cHM7XCI6XCLiipTvuIBcIixcIiZzcXN1YjtcIjpcIuKKj1wiLFwiJnNxc3ViZTtcIjpcIuKKkVwiLFwiJnNxc3Vic2V0O1wiOlwi4oqPXCIsXCImc3FzdWJzZXRlcTtcIjpcIuKKkVwiLFwiJnNxc3VwO1wiOlwi4oqQXCIsXCImc3FzdXBlO1wiOlwi4oqSXCIsXCImc3FzdXBzZXQ7XCI6XCLiipBcIixcIiZzcXN1cHNldGVxO1wiOlwi4oqSXCIsXCImc3F1O1wiOlwi4pahXCIsXCImc3F1YXJlO1wiOlwi4pahXCIsXCImc3F1YXJmO1wiOlwi4paqXCIsXCImc3F1ZjtcIjpcIuKWqlwiLFwiJnNyYXJyO1wiOlwi4oaSXCIsXCImc3NjcjtcIjpcIvCdk4hcIixcIiZzc2V0bW47XCI6XCLiiJZcIixcIiZzc21pbGU7XCI6XCLijKNcIixcIiZzc3RhcmY7XCI6XCLii4ZcIixcIiZzdGFyO1wiOlwi4piGXCIsXCImc3RhcmY7XCI6XCLimIVcIixcIiZzdHJhaWdodGVwc2lsb247XCI6XCLPtVwiLFwiJnN0cmFpZ2h0cGhpO1wiOlwiz5VcIixcIiZzdHJucztcIjpcIsKvXCIsXCImc3ViO1wiOlwi4oqCXCIsXCImc3ViRTtcIjpcIuKrhVwiLFwiJnN1YmRvdDtcIjpcIuKqvVwiLFwiJnN1YmU7XCI6XCLiioZcIixcIiZzdWJlZG90O1wiOlwi4quDXCIsXCImc3VibXVsdDtcIjpcIuKrgVwiLFwiJnN1Ym5FO1wiOlwi4quLXCIsXCImc3VibmU7XCI6XCLiiopcIixcIiZzdWJwbHVzO1wiOlwi4qq/XCIsXCImc3VicmFycjtcIjpcIuKluVwiLFwiJnN1YnNldDtcIjpcIuKKglwiLFwiJnN1YnNldGVxO1wiOlwi4oqGXCIsXCImc3Vic2V0ZXFxO1wiOlwi4quFXCIsXCImc3Vic2V0bmVxO1wiOlwi4oqKXCIsXCImc3Vic2V0bmVxcTtcIjpcIuKri1wiLFwiJnN1YnNpbTtcIjpcIuKrh1wiLFwiJnN1YnN1YjtcIjpcIuKrlVwiLFwiJnN1YnN1cDtcIjpcIuKrk1wiLFwiJnN1Y2M7XCI6XCLiibtcIixcIiZzdWNjYXBwcm94O1wiOlwi4qq4XCIsXCImc3VjY2N1cmx5ZXE7XCI6XCLiib1cIixcIiZzdWNjZXE7XCI6XCLiqrBcIixcIiZzdWNjbmFwcHJveDtcIjpcIuKqulwiLFwiJnN1Y2NuZXFxO1wiOlwi4qq2XCIsXCImc3VjY25zaW07XCI6XCLii6lcIixcIiZzdWNjc2ltO1wiOlwi4om/XCIsXCImc3VtO1wiOlwi4oiRXCIsXCImc3VuZztcIjpcIuKZqlwiLFwiJnN1cDFcIjpcIsK5XCIsXCImc3VwMTtcIjpcIsK5XCIsXCImc3VwMlwiOlwiwrJcIixcIiZzdXAyO1wiOlwiwrJcIixcIiZzdXAzXCI6XCLCs1wiLFwiJnN1cDM7XCI6XCLCs1wiLFwiJnN1cDtcIjpcIuKKg1wiLFwiJnN1cEU7XCI6XCLiq4ZcIixcIiZzdXBkb3Q7XCI6XCLiqr5cIixcIiZzdXBkc3ViO1wiOlwi4quYXCIsXCImc3VwZTtcIjpcIuKKh1wiLFwiJnN1cGVkb3Q7XCI6XCLiq4RcIixcIiZzdXBoc29sO1wiOlwi4p+JXCIsXCImc3VwaHN1YjtcIjpcIuKrl1wiLFwiJnN1cGxhcnI7XCI6XCLipbtcIixcIiZzdXBtdWx0O1wiOlwi4quCXCIsXCImc3VwbkU7XCI6XCLiq4xcIixcIiZzdXBuZTtcIjpcIuKKi1wiLFwiJnN1cHBsdXM7XCI6XCLiq4BcIixcIiZzdXBzZXQ7XCI6XCLiioNcIixcIiZzdXBzZXRlcTtcIjpcIuKKh1wiLFwiJnN1cHNldGVxcTtcIjpcIuKrhlwiLFwiJnN1cHNldG5lcTtcIjpcIuKKi1wiLFwiJnN1cHNldG5lcXE7XCI6XCLiq4xcIixcIiZzdXBzaW07XCI6XCLiq4hcIixcIiZzdXBzdWI7XCI6XCLiq5RcIixcIiZzdXBzdXA7XCI6XCLiq5ZcIixcIiZzd0FycjtcIjpcIuKHmVwiLFwiJnN3YXJoaztcIjpcIuKkplwiLFwiJnN3YXJyO1wiOlwi4oaZXCIsXCImc3dhcnJvdztcIjpcIuKGmVwiLFwiJnN3bndhcjtcIjpcIuKkqlwiLFwiJnN6bGlnXCI6XCLDn1wiLFwiJnN6bGlnO1wiOlwiw59cIixcIiZ0YXJnZXQ7XCI6XCLijJZcIixcIiZ0YXU7XCI6XCLPhFwiLFwiJnRicms7XCI6XCLijrRcIixcIiZ0Y2Fyb247XCI6XCLFpVwiLFwiJnRjZWRpbDtcIjpcIsWjXCIsXCImdGN5O1wiOlwi0YJcIixcIiZ0ZG90O1wiOlwi4oObXCIsXCImdGVscmVjO1wiOlwi4oyVXCIsXCImdGZyO1wiOlwi8J2UsVwiLFwiJnRoZXJlNDtcIjpcIuKItFwiLFwiJnRoZXJlZm9yZTtcIjpcIuKItFwiLFwiJnRoZXRhO1wiOlwizrhcIixcIiZ0aGV0YXN5bTtcIjpcIs+RXCIsXCImdGhldGF2O1wiOlwiz5FcIixcIiZ0aGlja2FwcHJveDtcIjpcIuKJiFwiLFwiJnRoaWNrc2ltO1wiOlwi4oi8XCIsXCImdGhpbnNwO1wiOlwi4oCJXCIsXCImdGhrYXA7XCI6XCLiiYhcIixcIiZ0aGtzaW07XCI6XCLiiLxcIixcIiZ0aG9yblwiOlwiw75cIixcIiZ0aG9ybjtcIjpcIsO+XCIsXCImdGlsZGU7XCI6XCLLnFwiLFwiJnRpbWVzXCI6XCLDl1wiLFwiJnRpbWVzO1wiOlwiw5dcIixcIiZ0aW1lc2I7XCI6XCLiiqBcIixcIiZ0aW1lc2JhcjtcIjpcIuKosVwiLFwiJnRpbWVzZDtcIjpcIuKosFwiLFwiJnRpbnQ7XCI6XCLiiK1cIixcIiZ0b2VhO1wiOlwi4qSoXCIsXCImdG9wO1wiOlwi4oqkXCIsXCImdG9wYm90O1wiOlwi4oy2XCIsXCImdG9wY2lyO1wiOlwi4quxXCIsXCImdG9wZjtcIjpcIvCdlaVcIixcIiZ0b3Bmb3JrO1wiOlwi4quaXCIsXCImdG9zYTtcIjpcIuKkqVwiLFwiJnRwcmltZTtcIjpcIuKAtFwiLFwiJnRyYWRlO1wiOlwi4oSiXCIsXCImdHJpYW5nbGU7XCI6XCLilrVcIixcIiZ0cmlhbmdsZWRvd247XCI6XCLilr9cIixcIiZ0cmlhbmdsZWxlZnQ7XCI6XCLil4NcIixcIiZ0cmlhbmdsZWxlZnRlcTtcIjpcIuKKtFwiLFwiJnRyaWFuZ2xlcTtcIjpcIuKJnFwiLFwiJnRyaWFuZ2xlcmlnaHQ7XCI6XCLilrlcIixcIiZ0cmlhbmdsZXJpZ2h0ZXE7XCI6XCLiirVcIixcIiZ0cmlkb3Q7XCI6XCLil6xcIixcIiZ0cmllO1wiOlwi4omcXCIsXCImdHJpbWludXM7XCI6XCLiqLpcIixcIiZ0cmlwbHVzO1wiOlwi4qi5XCIsXCImdHJpc2I7XCI6XCLip41cIixcIiZ0cml0aW1lO1wiOlwi4qi7XCIsXCImdHJwZXppdW07XCI6XCLij6JcIixcIiZ0c2NyO1wiOlwi8J2TiVwiLFwiJnRzY3k7XCI6XCLRhlwiLFwiJnRzaGN5O1wiOlwi0ZtcIixcIiZ0c3Ryb2s7XCI6XCLFp1wiLFwiJnR3aXh0O1wiOlwi4omsXCIsXCImdHdvaGVhZGxlZnRhcnJvdztcIjpcIuKGnlwiLFwiJnR3b2hlYWRyaWdodGFycm93O1wiOlwi4oagXCIsXCImdUFycjtcIjpcIuKHkVwiLFwiJnVIYXI7XCI6XCLipaNcIixcIiZ1YWN1dGVcIjpcIsO6XCIsXCImdWFjdXRlO1wiOlwiw7pcIixcIiZ1YXJyO1wiOlwi4oaRXCIsXCImdWJyY3k7XCI6XCLRnlwiLFwiJnVicmV2ZTtcIjpcIsWtXCIsXCImdWNpcmNcIjpcIsO7XCIsXCImdWNpcmM7XCI6XCLDu1wiLFwiJnVjeTtcIjpcItGDXCIsXCImdWRhcnI7XCI6XCLih4VcIixcIiZ1ZGJsYWM7XCI6XCLFsVwiLFwiJnVkaGFyO1wiOlwi4qWuXCIsXCImdWZpc2h0O1wiOlwi4qW+XCIsXCImdWZyO1wiOlwi8J2UslwiLFwiJnVncmF2ZVwiOlwiw7lcIixcIiZ1Z3JhdmU7XCI6XCLDuVwiLFwiJnVoYXJsO1wiOlwi4oa/XCIsXCImdWhhcnI7XCI6XCLihr5cIixcIiZ1aGJsaztcIjpcIuKWgFwiLFwiJnVsY29ybjtcIjpcIuKMnFwiLFwiJnVsY29ybmVyO1wiOlwi4oycXCIsXCImdWxjcm9wO1wiOlwi4oyPXCIsXCImdWx0cmk7XCI6XCLil7hcIixcIiZ1bWFjcjtcIjpcIsWrXCIsXCImdW1sXCI6XCLCqFwiLFwiJnVtbDtcIjpcIsKoXCIsXCImdW9nb247XCI6XCLFs1wiLFwiJnVvcGY7XCI6XCLwnZWmXCIsXCImdXBhcnJvdztcIjpcIuKGkVwiLFwiJnVwZG93bmFycm93O1wiOlwi4oaVXCIsXCImdXBoYXJwb29ubGVmdDtcIjpcIuKGv1wiLFwiJnVwaGFycG9vbnJpZ2h0O1wiOlwi4oa+XCIsXCImdXBsdXM7XCI6XCLiio5cIixcIiZ1cHNpO1wiOlwiz4VcIixcIiZ1cHNpaDtcIjpcIs+SXCIsXCImdXBzaWxvbjtcIjpcIs+FXCIsXCImdXB1cGFycm93cztcIjpcIuKHiFwiLFwiJnVyY29ybjtcIjpcIuKMnVwiLFwiJnVyY29ybmVyO1wiOlwi4oydXCIsXCImdXJjcm9wO1wiOlwi4oyOXCIsXCImdXJpbmc7XCI6XCLFr1wiLFwiJnVydHJpO1wiOlwi4pe5XCIsXCImdXNjcjtcIjpcIvCdk4pcIixcIiZ1dGRvdDtcIjpcIuKLsFwiLFwiJnV0aWxkZTtcIjpcIsWpXCIsXCImdXRyaTtcIjpcIuKWtVwiLFwiJnV0cmlmO1wiOlwi4pa0XCIsXCImdXVhcnI7XCI6XCLih4hcIixcIiZ1dW1sXCI6XCLDvFwiLFwiJnV1bWw7XCI6XCLDvFwiLFwiJnV3YW5nbGU7XCI6XCLipqdcIixcIiZ2QXJyO1wiOlwi4oeVXCIsXCImdkJhcjtcIjpcIuKrqFwiLFwiJnZCYXJ2O1wiOlwi4qupXCIsXCImdkRhc2g7XCI6XCLiiqhcIixcIiZ2YW5ncnQ7XCI6XCLippxcIixcIiZ2YXJlcHNpbG9uO1wiOlwiz7VcIixcIiZ2YXJrYXBwYTtcIjpcIs+wXCIsXCImdmFybm90aGluZztcIjpcIuKIhVwiLFwiJnZhcnBoaTtcIjpcIs+VXCIsXCImdmFycGk7XCI6XCLPllwiLFwiJnZhcnByb3B0bztcIjpcIuKInVwiLFwiJnZhcnI7XCI6XCLihpVcIixcIiZ2YXJyaG87XCI6XCLPsVwiLFwiJnZhcnNpZ21hO1wiOlwiz4JcIixcIiZ2YXJzdWJzZXRuZXE7XCI6XCLiiorvuIBcIixcIiZ2YXJzdWJzZXRuZXFxO1wiOlwi4quL77iAXCIsXCImdmFyc3Vwc2V0bmVxO1wiOlwi4oqL77iAXCIsXCImdmFyc3Vwc2V0bmVxcTtcIjpcIuKrjO+4gFwiLFwiJnZhcnRoZXRhO1wiOlwiz5FcIixcIiZ2YXJ0cmlhbmdsZWxlZnQ7XCI6XCLiirJcIixcIiZ2YXJ0cmlhbmdsZXJpZ2h0O1wiOlwi4oqzXCIsXCImdmN5O1wiOlwi0LJcIixcIiZ2ZGFzaDtcIjpcIuKKolwiLFwiJnZlZTtcIjpcIuKIqFwiLFwiJnZlZWJhcjtcIjpcIuKKu1wiLFwiJnZlZWVxO1wiOlwi4omaXCIsXCImdmVsbGlwO1wiOlwi4ouuXCIsXCImdmVyYmFyO1wiOlwifFwiLFwiJnZlcnQ7XCI6XCJ8XCIsXCImdmZyO1wiOlwi8J2Us1wiLFwiJnZsdHJpO1wiOlwi4oqyXCIsXCImdm5zdWI7XCI6XCLiioLig5JcIixcIiZ2bnN1cDtcIjpcIuKKg+KDklwiLFwiJnZvcGY7XCI6XCLwnZWnXCIsXCImdnByb3A7XCI6XCLiiJ1cIixcIiZ2cnRyaTtcIjpcIuKKs1wiLFwiJnZzY3I7XCI6XCLwnZOLXCIsXCImdnN1Ym5FO1wiOlwi4quL77iAXCIsXCImdnN1Ym5lO1wiOlwi4oqK77iAXCIsXCImdnN1cG5FO1wiOlwi4quM77iAXCIsXCImdnN1cG5lO1wiOlwi4oqL77iAXCIsXCImdnppZ3phZztcIjpcIuKmmlwiLFwiJndjaXJjO1wiOlwixbVcIixcIiZ3ZWRiYXI7XCI6XCLiqZ9cIixcIiZ3ZWRnZTtcIjpcIuKIp1wiLFwiJndlZGdlcTtcIjpcIuKJmVwiLFwiJndlaWVycDtcIjpcIuKEmFwiLFwiJndmcjtcIjpcIvCdlLRcIixcIiZ3b3BmO1wiOlwi8J2VqFwiLFwiJndwO1wiOlwi4oSYXCIsXCImd3I7XCI6XCLiiYBcIixcIiZ3cmVhdGg7XCI6XCLiiYBcIixcIiZ3c2NyO1wiOlwi8J2TjFwiLFwiJnhjYXA7XCI6XCLii4JcIixcIiZ4Y2lyYztcIjpcIuKXr1wiLFwiJnhjdXA7XCI6XCLii4NcIixcIiZ4ZHRyaTtcIjpcIuKWvVwiLFwiJnhmcjtcIjpcIvCdlLVcIixcIiZ4aEFycjtcIjpcIuKfulwiLFwiJnhoYXJyO1wiOlwi4p+3XCIsXCImeGk7XCI6XCLOvlwiLFwiJnhsQXJyO1wiOlwi4p+4XCIsXCImeGxhcnI7XCI6XCLin7VcIixcIiZ4bWFwO1wiOlwi4p+8XCIsXCImeG5pcztcIjpcIuKLu1wiLFwiJnhvZG90O1wiOlwi4qiAXCIsXCImeG9wZjtcIjpcIvCdlalcIixcIiZ4b3BsdXM7XCI6XCLiqIFcIixcIiZ4b3RpbWU7XCI6XCLiqIJcIixcIiZ4ckFycjtcIjpcIuKfuVwiLFwiJnhyYXJyO1wiOlwi4p+2XCIsXCImeHNjcjtcIjpcIvCdk41cIixcIiZ4c3FjdXA7XCI6XCLiqIZcIixcIiZ4dXBsdXM7XCI6XCLiqIRcIixcIiZ4dXRyaTtcIjpcIuKWs1wiLFwiJnh2ZWU7XCI6XCLii4FcIixcIiZ4d2VkZ2U7XCI6XCLii4BcIixcIiZ5YWN1dGVcIjpcIsO9XCIsXCImeWFjdXRlO1wiOlwiw71cIixcIiZ5YWN5O1wiOlwi0Y9cIixcIiZ5Y2lyYztcIjpcIsW3XCIsXCImeWN5O1wiOlwi0YtcIixcIiZ5ZW5cIjpcIsKlXCIsXCImeWVuO1wiOlwiwqVcIixcIiZ5ZnI7XCI6XCLwnZS2XCIsXCImeWljeTtcIjpcItGXXCIsXCImeW9wZjtcIjpcIvCdlapcIixcIiZ5c2NyO1wiOlwi8J2TjlwiLFwiJnl1Y3k7XCI6XCLRjlwiLFwiJnl1bWxcIjpcIsO/XCIsXCImeXVtbDtcIjpcIsO/XCIsXCImemFjdXRlO1wiOlwixbpcIixcIiZ6Y2Fyb247XCI6XCLFvlwiLFwiJnpjeTtcIjpcItC3XCIsXCImemRvdDtcIjpcIsW8XCIsXCImemVldHJmO1wiOlwi4oSoXCIsXCImemV0YTtcIjpcIs62XCIsXCImemZyO1wiOlwi8J2Ut1wiLFwiJnpoY3k7XCI6XCLQtlwiLFwiJnppZ3JhcnI7XCI6XCLih51cIixcIiZ6b3BmO1wiOlwi8J2Vq1wiLFwiJnpzY3I7XCI6XCLwnZOPXCIsXCImendqO1wiOlwi4oCNXCIsXCImenduajtcIjpcIuKAjFwifSxjaGFyYWN0ZXJzOntcIsOGXCI6XCImQUVsaWc7XCIsXCImXCI6XCImYW1wO1wiLFwiw4FcIjpcIiZBYWN1dGU7XCIsXCLEglwiOlwiJkFicmV2ZTtcIixcIsOCXCI6XCImQWNpcmM7XCIsXCLQkFwiOlwiJkFjeTtcIixcIvCdlIRcIjpcIiZBZnI7XCIsXCLDgFwiOlwiJkFncmF2ZTtcIixcIs6RXCI6XCImQWxwaGE7XCIsXCLEgFwiOlwiJkFtYWNyO1wiLFwi4qmTXCI6XCImQW5kO1wiLFwixIRcIjpcIiZBb2dvbjtcIixcIvCdlLhcIjpcIiZBb3BmO1wiLFwi4oGhXCI6XCImYWY7XCIsXCLDhVwiOlwiJmFuZ3N0O1wiLFwi8J2SnFwiOlwiJkFzY3I7XCIsXCLiiZRcIjpcIiZjb2xvbmVxO1wiLFwiw4NcIjpcIiZBdGlsZGU7XCIsXCLDhFwiOlwiJkF1bWw7XCIsXCLiiJZcIjpcIiZzc2V0bW47XCIsXCLiq6dcIjpcIiZCYXJ2O1wiLFwi4oyGXCI6XCImZG91YmxlYmFyd2VkZ2U7XCIsXCLQkVwiOlwiJkJjeTtcIixcIuKItVwiOlwiJmJlY2F1c2U7XCIsXCLihKxcIjpcIiZiZXJub3U7XCIsXCLOklwiOlwiJkJldGE7XCIsXCLwnZSFXCI6XCImQmZyO1wiLFwi8J2UuVwiOlwiJkJvcGY7XCIsXCLLmFwiOlwiJmJyZXZlO1wiLFwi4omOXCI6XCImYnVtcDtcIixcItCnXCI6XCImQ0hjeTtcIixcIsKpXCI6XCImY29weTtcIixcIsSGXCI6XCImQ2FjdXRlO1wiLFwi4ouSXCI6XCImQ2FwO1wiLFwi4oWFXCI6XCImREQ7XCIsXCLihK1cIjpcIiZDZnI7XCIsXCLEjFwiOlwiJkNjYXJvbjtcIixcIsOHXCI6XCImQ2NlZGlsO1wiLFwixIhcIjpcIiZDY2lyYztcIixcIuKIsFwiOlwiJkNjb25pbnQ7XCIsXCLEilwiOlwiJkNkb3Q7XCIsXCLCuFwiOlwiJmNlZGlsO1wiLFwiwrdcIjpcIiZtaWRkb3Q7XCIsXCLOp1wiOlwiJkNoaTtcIixcIuKKmVwiOlwiJm9kb3Q7XCIsXCLiipZcIjpcIiZvbWludXM7XCIsXCLiipVcIjpcIiZvcGx1cztcIixcIuKKl1wiOlwiJm90aW1lcztcIixcIuKIslwiOlwiJmN3Y29uaW50O1wiLFwi4oCdXCI6XCImcmRxdW9yO1wiLFwi4oCZXCI6XCImcnNxdW9yO1wiLFwi4oi3XCI6XCImUHJvcG9ydGlvbjtcIixcIuKptFwiOlwiJkNvbG9uZTtcIixcIuKJoVwiOlwiJmVxdWl2O1wiLFwi4oivXCI6XCImRG91YmxlQ29udG91ckludGVncmFsO1wiLFwi4oiuXCI6XCImb2ludDtcIixcIuKEglwiOlwiJmNvbXBsZXhlcztcIixcIuKIkFwiOlwiJmNvcHJvZDtcIixcIuKIs1wiOlwiJmF3Y29uaW50O1wiLFwi4qivXCI6XCImQ3Jvc3M7XCIsXCLwnZKeXCI6XCImQ3NjcjtcIixcIuKLk1wiOlwiJkN1cDtcIixcIuKJjVwiOlwiJmFzeW1wZXE7XCIsXCLipJFcIjpcIiZERG90cmFoZDtcIixcItCCXCI6XCImREpjeTtcIixcItCFXCI6XCImRFNjeTtcIixcItCPXCI6XCImRFpjeTtcIixcIuKAoVwiOlwiJmRkYWdnZXI7XCIsXCLihqFcIjpcIiZEYXJyO1wiLFwi4qukXCI6XCImRG91YmxlTGVmdFRlZTtcIixcIsSOXCI6XCImRGNhcm9uO1wiLFwi0JRcIjpcIiZEY3k7XCIsXCLiiIdcIjpcIiZuYWJsYTtcIixcIs6UXCI6XCImRGVsdGE7XCIsXCLwnZSHXCI6XCImRGZyO1wiLFwiwrRcIjpcIiZhY3V0ZTtcIixcIsuZXCI6XCImZG90O1wiLFwiy51cIjpcIiZkYmxhYztcIixcImBcIjpcIiZncmF2ZTtcIixcIsucXCI6XCImdGlsZGU7XCIsXCLii4RcIjpcIiZkaWFtb25kO1wiLFwi4oWGXCI6XCImZGQ7XCIsXCLwnZS7XCI6XCImRG9wZjtcIixcIsKoXCI6XCImdW1sO1wiLFwi4oOcXCI6XCImRG90RG90O1wiLFwi4omQXCI6XCImZXNkb3Q7XCIsXCLih5NcIjpcIiZkQXJyO1wiLFwi4oeQXCI6XCImbEFycjtcIixcIuKHlFwiOlwiJmlmZjtcIixcIuKfuFwiOlwiJnhsQXJyO1wiLFwi4p+6XCI6XCImeGhBcnI7XCIsXCLin7lcIjpcIiZ4ckFycjtcIixcIuKHklwiOlwiJnJBcnI7XCIsXCLiiqhcIjpcIiZ2RGFzaDtcIixcIuKHkVwiOlwiJnVBcnI7XCIsXCLih5VcIjpcIiZ2QXJyO1wiLFwi4oilXCI6XCImc3BhcjtcIixcIuKGk1wiOlwiJmRvd25hcnJvdztcIixcIuKkk1wiOlwiJkRvd25BcnJvd0JhcjtcIixcIuKHtVwiOlwiJmR1YXJyO1wiLFwizJFcIjpcIiZEb3duQnJldmU7XCIsXCLipZBcIjpcIiZEb3duTGVmdFJpZ2h0VmVjdG9yO1wiLFwi4qWeXCI6XCImRG93bkxlZnRUZWVWZWN0b3I7XCIsXCLihr1cIjpcIiZsaGFyZDtcIixcIuKlllwiOlwiJkRvd25MZWZ0VmVjdG9yQmFyO1wiLFwi4qWfXCI6XCImRG93blJpZ2h0VGVlVmVjdG9yO1wiLFwi4oeBXCI6XCImcmlnaHRoYXJwb29uZG93bjtcIixcIuKll1wiOlwiJkRvd25SaWdodFZlY3RvckJhcjtcIixcIuKKpFwiOlwiJnRvcDtcIixcIuKGp1wiOlwiJm1hcHN0b2Rvd247XCIsXCLwnZKfXCI6XCImRHNjcjtcIixcIsSQXCI6XCImRHN0cm9rO1wiLFwixYpcIjpcIiZFTkc7XCIsXCLDkFwiOlwiJkVUSDtcIixcIsOJXCI6XCImRWFjdXRlO1wiLFwixJpcIjpcIiZFY2Fyb247XCIsXCLDilwiOlwiJkVjaXJjO1wiLFwi0K1cIjpcIiZFY3k7XCIsXCLEllwiOlwiJkVkb3Q7XCIsXCLwnZSIXCI6XCImRWZyO1wiLFwiw4hcIjpcIiZFZ3JhdmU7XCIsXCLiiIhcIjpcIiZpc2ludjtcIixcIsSSXCI6XCImRW1hY3I7XCIsXCLil7tcIjpcIiZFbXB0eVNtYWxsU3F1YXJlO1wiLFwi4parXCI6XCImRW1wdHlWZXJ5U21hbGxTcXVhcmU7XCIsXCLEmFwiOlwiJkVvZ29uO1wiLFwi8J2UvFwiOlwiJkVvcGY7XCIsXCLOlVwiOlwiJkVwc2lsb247XCIsXCLiqbVcIjpcIiZFcXVhbDtcIixcIuKJglwiOlwiJmVzaW07XCIsXCLih4xcIjpcIiZybGhhcjtcIixcIuKEsFwiOlwiJmV4cGVjdGF0aW9uO1wiLFwi4qmzXCI6XCImRXNpbTtcIixcIs6XXCI6XCImRXRhO1wiLFwiw4tcIjpcIiZFdW1sO1wiLFwi4oiDXCI6XCImZXhpc3Q7XCIsXCLihYdcIjpcIiZleHBvbmVudGlhbGU7XCIsXCLQpFwiOlwiJkZjeTtcIixcIvCdlIlcIjpcIiZGZnI7XCIsXCLil7xcIjpcIiZGaWxsZWRTbWFsbFNxdWFyZTtcIixcIuKWqlwiOlwiJnNxdWY7XCIsXCLwnZS9XCI6XCImRm9wZjtcIixcIuKIgFwiOlwiJmZvcmFsbDtcIixcIuKEsVwiOlwiJkZzY3I7XCIsXCLQg1wiOlwiJkdKY3k7XCIsXCI+XCI6XCImZ3Q7XCIsXCLOk1wiOlwiJkdhbW1hO1wiLFwiz5xcIjpcIiZHYW1tYWQ7XCIsXCLEnlwiOlwiJkdicmV2ZTtcIixcIsSiXCI6XCImR2NlZGlsO1wiLFwixJxcIjpcIiZHY2lyYztcIixcItCTXCI6XCImR2N5O1wiLFwixKBcIjpcIiZHZG90O1wiLFwi8J2UilwiOlwiJkdmcjtcIixcIuKLmVwiOlwiJmdnZztcIixcIvCdlL5cIjpcIiZHb3BmO1wiLFwi4omlXCI6XCImZ2VxO1wiLFwi4oubXCI6XCImZ3RyZXFsZXNzO1wiLFwi4omnXCI6XCImZ2VxcTtcIixcIuKqolwiOlwiJkdyZWF0ZXJHcmVhdGVyO1wiLFwi4om3XCI6XCImZ3RybGVzcztcIixcIuKpvlwiOlwiJmdlcztcIixcIuKJs1wiOlwiJmd0cnNpbTtcIixcIvCdkqJcIjpcIiZHc2NyO1wiLFwi4omrXCI6XCImZ2c7XCIsXCLQqlwiOlwiJkhBUkRjeTtcIixcIsuHXCI6XCImY2Fyb247XCIsXCJeXCI6XCImSGF0O1wiLFwixKRcIjpcIiZIY2lyYztcIixcIuKEjFwiOlwiJlBvaW5jYXJlcGxhbmU7XCIsXCLihItcIjpcIiZoYW1pbHQ7XCIsXCLihI1cIjpcIiZxdWF0ZXJuaW9ucztcIixcIuKUgFwiOlwiJmJveGg7XCIsXCLEplwiOlwiJkhzdHJvaztcIixcIuKJj1wiOlwiJmJ1bXBlcTtcIixcItCVXCI6XCImSUVjeTtcIixcIsSyXCI6XCImSUpsaWc7XCIsXCLQgVwiOlwiJklPY3k7XCIsXCLDjVwiOlwiJklhY3V0ZTtcIixcIsOOXCI6XCImSWNpcmM7XCIsXCLQmFwiOlwiJkljeTtcIixcIsSwXCI6XCImSWRvdDtcIixcIuKEkVwiOlwiJmltYWdwYXJ0O1wiLFwiw4xcIjpcIiZJZ3JhdmU7XCIsXCLEqlwiOlwiJkltYWNyO1wiLFwi4oWIXCI6XCImaWk7XCIsXCLiiKxcIjpcIiZJbnQ7XCIsXCLiiKtcIjpcIiZpbnQ7XCIsXCLii4JcIjpcIiZ4Y2FwO1wiLFwi4oGjXCI6XCImaWM7XCIsXCLigaJcIjpcIiZpdDtcIixcIsSuXCI6XCImSW9nb247XCIsXCLwnZWAXCI6XCImSW9wZjtcIixcIs6ZXCI6XCImSW90YTtcIixcIuKEkFwiOlwiJmltYWdsaW5lO1wiLFwixKhcIjpcIiZJdGlsZGU7XCIsXCLQhlwiOlwiJkl1a2N5O1wiLFwiw49cIjpcIiZJdW1sO1wiLFwixLRcIjpcIiZKY2lyYztcIixcItCZXCI6XCImSmN5O1wiLFwi8J2UjVwiOlwiJkpmcjtcIixcIvCdlYFcIjpcIiZKb3BmO1wiLFwi8J2SpVwiOlwiJkpzY3I7XCIsXCLQiFwiOlwiJkpzZXJjeTtcIixcItCEXCI6XCImSnVrY3k7XCIsXCLQpVwiOlwiJktIY3k7XCIsXCLQjFwiOlwiJktKY3k7XCIsXCLOmlwiOlwiJkthcHBhO1wiLFwixLZcIjpcIiZLY2VkaWw7XCIsXCLQmlwiOlwiJktjeTtcIixcIvCdlI5cIjpcIiZLZnI7XCIsXCLwnZWCXCI6XCImS29wZjtcIixcIvCdkqZcIjpcIiZLc2NyO1wiLFwi0IlcIjpcIiZMSmN5O1wiLFwiPFwiOlwiJmx0O1wiLFwixLlcIjpcIiZMYWN1dGU7XCIsXCLOm1wiOlwiJkxhbWJkYTtcIixcIuKfqlwiOlwiJkxhbmc7XCIsXCLihJJcIjpcIiZsYWdyYW47XCIsXCLihp5cIjpcIiZ0d29oZWFkbGVmdGFycm93O1wiLFwixL1cIjpcIiZMY2Fyb247XCIsXCLEu1wiOlwiJkxjZWRpbDtcIixcItCbXCI6XCImTGN5O1wiLFwi4p+oXCI6XCImbGFuZ2xlO1wiLFwi4oaQXCI6XCImc2xhcnI7XCIsXCLih6RcIjpcIiZsYXJyYjtcIixcIuKHhlwiOlwiJmxyYXJyO1wiLFwi4oyIXCI6XCImbGNlaWw7XCIsXCLin6ZcIjpcIiZsb2JyaztcIixcIuKloVwiOlwiJkxlZnREb3duVGVlVmVjdG9yO1wiLFwi4oeDXCI6XCImZG93bmhhcnBvb25sZWZ0O1wiLFwi4qWZXCI6XCImTGVmdERvd25WZWN0b3JCYXI7XCIsXCLijIpcIjpcIiZsZmxvb3I7XCIsXCLihpRcIjpcIiZsZWZ0cmlnaHRhcnJvdztcIixcIuKljlwiOlwiJkxlZnRSaWdodFZlY3RvcjtcIixcIuKKo1wiOlwiJmRhc2h2O1wiLFwi4oakXCI6XCImbWFwc3RvbGVmdDtcIixcIuKlmlwiOlwiJkxlZnRUZWVWZWN0b3I7XCIsXCLiirJcIjpcIiZ2bHRyaTtcIixcIuKnj1wiOlwiJkxlZnRUcmlhbmdsZUJhcjtcIixcIuKKtFwiOlwiJnRyaWFuZ2xlbGVmdGVxO1wiLFwi4qWRXCI6XCImTGVmdFVwRG93blZlY3RvcjtcIixcIuKloFwiOlwiJkxlZnRVcFRlZVZlY3RvcjtcIixcIuKGv1wiOlwiJnVwaGFycG9vbmxlZnQ7XCIsXCLipZhcIjpcIiZMZWZ0VXBWZWN0b3JCYXI7XCIsXCLihrxcIjpcIiZsaGFydTtcIixcIuKlklwiOlwiJkxlZnRWZWN0b3JCYXI7XCIsXCLii5pcIjpcIiZsZXNzZXFndHI7XCIsXCLiiaZcIjpcIiZsZXFxO1wiLFwi4om2XCI6XCImbGc7XCIsXCLiqqFcIjpcIiZMZXNzTGVzcztcIixcIuKpvVwiOlwiJmxlcztcIixcIuKJslwiOlwiJmxzaW07XCIsXCLwnZSPXCI6XCImTGZyO1wiLFwi4ouYXCI6XCImTGw7XCIsXCLih5pcIjpcIiZsQWFycjtcIixcIsS/XCI6XCImTG1pZG90O1wiLFwi4p+1XCI6XCImeGxhcnI7XCIsXCLin7dcIjpcIiZ4aGFycjtcIixcIuKftlwiOlwiJnhyYXJyO1wiLFwi8J2Vg1wiOlwiJkxvcGY7XCIsXCLihplcIjpcIiZzd2Fycm93O1wiLFwi4oaYXCI6XCImc2VhcnJvdztcIixcIuKGsFwiOlwiJmxzaDtcIixcIsWBXCI6XCImTHN0cm9rO1wiLFwi4omqXCI6XCImbGw7XCIsXCLipIVcIjpcIiZNYXA7XCIsXCLQnFwiOlwiJk1jeTtcIixcIuKBn1wiOlwiJk1lZGl1bVNwYWNlO1wiLFwi4oSzXCI6XCImcGhtbWF0O1wiLFwi8J2UkFwiOlwiJk1mcjtcIixcIuKIk1wiOlwiJm1wO1wiLFwi8J2VhFwiOlwiJk1vcGY7XCIsXCLOnFwiOlwiJk11O1wiLFwi0IpcIjpcIiZOSmN5O1wiLFwixYNcIjpcIiZOYWN1dGU7XCIsXCLFh1wiOlwiJk5jYXJvbjtcIixcIsWFXCI6XCImTmNlZGlsO1wiLFwi0J1cIjpcIiZOY3k7XCIsXCLigItcIjpcIiZaZXJvV2lkdGhTcGFjZTtcIixcIlxcblwiOlwiJk5ld0xpbmU7XCIsXCLwnZSRXCI6XCImTmZyO1wiLFwi4oGgXCI6XCImTm9CcmVhaztcIixcIsKgXCI6XCImbmJzcDtcIixcIuKElVwiOlwiJm5hdHVyYWxzO1wiLFwi4qusXCI6XCImTm90O1wiLFwi4omiXCI6XCImbmVxdWl2O1wiLFwi4omtXCI6XCImTm90Q3VwQ2FwO1wiLFwi4oimXCI6XCImbnNwYXI7XCIsXCLiiIlcIjpcIiZub3RpbnZhO1wiLFwi4omgXCI6XCImbmU7XCIsXCLiiYLMuFwiOlwiJm5lc2ltO1wiLFwi4oiEXCI6XCImbmV4aXN0cztcIixcIuKJr1wiOlwiJm5ndHI7XCIsXCLiibFcIjpcIiZuZ2VxO1wiLFwi4omnzLhcIjpcIiZuZ2VxcTtcIixcIuKJq8y4XCI6XCImbkd0djtcIixcIuKJuVwiOlwiJm50Z2w7XCIsXCLiqb7MuFwiOlwiJm5nZXM7XCIsXCLiibVcIjpcIiZuZ3NpbTtcIixcIuKJjsy4XCI6XCImbmJ1bXA7XCIsXCLiiY/MuFwiOlwiJm5idW1wZTtcIixcIuKLqlwiOlwiJm50cmlhbmdsZWxlZnQ7XCIsXCLip4/MuFwiOlwiJk5vdExlZnRUcmlhbmdsZUJhcjtcIixcIuKLrFwiOlwiJm50cmlhbmdsZWxlZnRlcTtcIixcIuKJrlwiOlwiJm5sdDtcIixcIuKJsFwiOlwiJm5sZXE7XCIsXCLiibhcIjpcIiZudGxnO1wiLFwi4omqzLhcIjpcIiZuTHR2O1wiLFwi4qm9zLhcIjpcIiZubGVzO1wiLFwi4om0XCI6XCImbmxzaW07XCIsXCLiqqLMuFwiOlwiJk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyO1wiLFwi4qqhzLhcIjpcIiZOb3ROZXN0ZWRMZXNzTGVzcztcIixcIuKKgFwiOlwiJm5wcmVjO1wiLFwi4qqvzLhcIjpcIiZucHJlY2VxO1wiLFwi4ougXCI6XCImbnByY3VlO1wiLFwi4oiMXCI6XCImbm90bml2YTtcIixcIuKLq1wiOlwiJm50cmlhbmdsZXJpZ2h0O1wiLFwi4qeQzLhcIjpcIiZOb3RSaWdodFRyaWFuZ2xlQmFyO1wiLFwi4outXCI6XCImbnRyaWFuZ2xlcmlnaHRlcTtcIixcIuKKj8y4XCI6XCImTm90U3F1YXJlU3Vic2V0O1wiLFwi4ouiXCI6XCImbnNxc3ViZTtcIixcIuKKkMy4XCI6XCImTm90U3F1YXJlU3VwZXJzZXQ7XCIsXCLii6NcIjpcIiZuc3FzdXBlO1wiLFwi4oqC4oOSXCI6XCImdm5zdWI7XCIsXCLiiohcIjpcIiZuc3Vic2V0ZXE7XCIsXCLiioFcIjpcIiZuc3VjYztcIixcIuKqsMy4XCI6XCImbnN1Y2NlcTtcIixcIuKLoVwiOlwiJm5zY2N1ZTtcIixcIuKJv8y4XCI6XCImTm90U3VjY2VlZHNUaWxkZTtcIixcIuKKg+KDklwiOlwiJnZuc3VwO1wiLFwi4oqJXCI6XCImbnN1cHNldGVxO1wiLFwi4omBXCI6XCImbnNpbTtcIixcIuKJhFwiOlwiJm5zaW1lcTtcIixcIuKJh1wiOlwiJm5jb25nO1wiLFwi4omJXCI6XCImbmFwcHJveDtcIixcIuKIpFwiOlwiJm5zbWlkO1wiLFwi8J2SqVwiOlwiJk5zY3I7XCIsXCLDkVwiOlwiJk50aWxkZTtcIixcIs6dXCI6XCImTnU7XCIsXCLFklwiOlwiJk9FbGlnO1wiLFwiw5NcIjpcIiZPYWN1dGU7XCIsXCLDlFwiOlwiJk9jaXJjO1wiLFwi0J5cIjpcIiZPY3k7XCIsXCLFkFwiOlwiJk9kYmxhYztcIixcIvCdlJJcIjpcIiZPZnI7XCIsXCLDklwiOlwiJk9ncmF2ZTtcIixcIsWMXCI6XCImT21hY3I7XCIsXCLOqVwiOlwiJm9obTtcIixcIs6fXCI6XCImT21pY3JvbjtcIixcIvCdlYZcIjpcIiZPb3BmO1wiLFwi4oCcXCI6XCImbGRxdW87XCIsXCLigJhcIjpcIiZsc3F1bztcIixcIuKplFwiOlwiJk9yO1wiLFwi8J2SqlwiOlwiJk9zY3I7XCIsXCLDmFwiOlwiJk9zbGFzaDtcIixcIsOVXCI6XCImT3RpbGRlO1wiLFwi4qi3XCI6XCImT3RpbWVzO1wiLFwiw5ZcIjpcIiZPdW1sO1wiLFwi4oC+XCI6XCImb2xpbmU7XCIsXCLij55cIjpcIiZPdmVyQnJhY2U7XCIsXCLijrRcIjpcIiZ0YnJrO1wiLFwi4o+cXCI6XCImT3ZlclBhcmVudGhlc2lzO1wiLFwi4oiCXCI6XCImcGFydDtcIixcItCfXCI6XCImUGN5O1wiLFwi8J2Uk1wiOlwiJlBmcjtcIixcIs6mXCI6XCImUGhpO1wiLFwizqBcIjpcIiZQaTtcIixcIsKxXCI6XCImcG07XCIsXCLihJlcIjpcIiZwcmltZXM7XCIsXCLiqrtcIjpcIiZQcjtcIixcIuKJulwiOlwiJnByZWM7XCIsXCLiqq9cIjpcIiZwcmVjZXE7XCIsXCLiibxcIjpcIiZwcmVjY3VybHllcTtcIixcIuKJvlwiOlwiJnByc2ltO1wiLFwi4oCzXCI6XCImUHJpbWU7XCIsXCLiiI9cIjpcIiZwcm9kO1wiLFwi4oidXCI6XCImdnByb3A7XCIsXCLwnZKrXCI6XCImUHNjcjtcIixcIs6oXCI6XCImUHNpO1wiLCdcIic6XCImcXVvdDtcIixcIvCdlJRcIjpcIiZRZnI7XCIsXCLihJpcIjpcIiZyYXRpb25hbHM7XCIsXCLwnZKsXCI6XCImUXNjcjtcIixcIuKkkFwiOlwiJmRyYmthcm93O1wiLFwiwq5cIjpcIiZyZWc7XCIsXCLFlFwiOlwiJlJhY3V0ZTtcIixcIuKfq1wiOlwiJlJhbmc7XCIsXCLihqBcIjpcIiZ0d29oZWFkcmlnaHRhcnJvdztcIixcIuKkllwiOlwiJlJhcnJ0bDtcIixcIsWYXCI6XCImUmNhcm9uO1wiLFwixZZcIjpcIiZSY2VkaWw7XCIsXCLQoFwiOlwiJlJjeTtcIixcIuKEnFwiOlwiJnJlYWxwYXJ0O1wiLFwi4oiLXCI6XCImbml2O1wiLFwi4oeLXCI6XCImbHJoYXI7XCIsXCLipa9cIjpcIiZkdWhhcjtcIixcIs6hXCI6XCImUmhvO1wiLFwi4p+pXCI6XCImcmFuZ2xlO1wiLFwi4oaSXCI6XCImc3JhcnI7XCIsXCLih6VcIjpcIiZyYXJyYjtcIixcIuKHhFwiOlwiJnJsYXJyO1wiLFwi4oyJXCI6XCImcmNlaWw7XCIsXCLin6dcIjpcIiZyb2JyaztcIixcIuKlnVwiOlwiJlJpZ2h0RG93blRlZVZlY3RvcjtcIixcIuKHglwiOlwiJmRvd25oYXJwb29ucmlnaHQ7XCIsXCLipZVcIjpcIiZSaWdodERvd25WZWN0b3JCYXI7XCIsXCLijItcIjpcIiZyZmxvb3I7XCIsXCLiiqJcIjpcIiZ2ZGFzaDtcIixcIuKGplwiOlwiJm1hcHN0bztcIixcIuKlm1wiOlwiJlJpZ2h0VGVlVmVjdG9yO1wiLFwi4oqzXCI6XCImdnJ0cmk7XCIsXCLip5BcIjpcIiZSaWdodFRyaWFuZ2xlQmFyO1wiLFwi4oq1XCI6XCImdHJpYW5nbGVyaWdodGVxO1wiLFwi4qWPXCI6XCImUmlnaHRVcERvd25WZWN0b3I7XCIsXCLipZxcIjpcIiZSaWdodFVwVGVlVmVjdG9yO1wiLFwi4oa+XCI6XCImdXBoYXJwb29ucmlnaHQ7XCIsXCLipZRcIjpcIiZSaWdodFVwVmVjdG9yQmFyO1wiLFwi4oeAXCI6XCImcmlnaHRoYXJwb29udXA7XCIsXCLipZNcIjpcIiZSaWdodFZlY3RvckJhcjtcIixcIuKEnVwiOlwiJnJlYWxzO1wiLFwi4qWwXCI6XCImUm91bmRJbXBsaWVzO1wiLFwi4oebXCI6XCImckFhcnI7XCIsXCLihJtcIjpcIiZyZWFsaW5lO1wiLFwi4oaxXCI6XCImcnNoO1wiLFwi4qe0XCI6XCImUnVsZURlbGF5ZWQ7XCIsXCLQqVwiOlwiJlNIQ0hjeTtcIixcItCoXCI6XCImU0hjeTtcIixcItCsXCI6XCImU09GVGN5O1wiLFwixZpcIjpcIiZTYWN1dGU7XCIsXCLiqrxcIjpcIiZTYztcIixcIsWgXCI6XCImU2Nhcm9uO1wiLFwixZ5cIjpcIiZTY2VkaWw7XCIsXCLFnFwiOlwiJlNjaXJjO1wiLFwi0KFcIjpcIiZTY3k7XCIsXCLwnZSWXCI6XCImU2ZyO1wiLFwi4oaRXCI6XCImdXBhcnJvdztcIixcIs6jXCI6XCImU2lnbWE7XCIsXCLiiJhcIjpcIiZjb21wZm47XCIsXCLwnZWKXCI6XCImU29wZjtcIixcIuKImlwiOlwiJnJhZGljO1wiLFwi4pahXCI6XCImc3F1YXJlO1wiLFwi4oqTXCI6XCImc3FjYXA7XCIsXCLiio9cIjpcIiZzcXN1YnNldDtcIixcIuKKkVwiOlwiJnNxc3Vic2V0ZXE7XCIsXCLiipBcIjpcIiZzcXN1cHNldDtcIixcIuKKklwiOlwiJnNxc3Vwc2V0ZXE7XCIsXCLiipRcIjpcIiZzcWN1cDtcIixcIvCdkq5cIjpcIiZTc2NyO1wiLFwi4ouGXCI6XCImc3N0YXJmO1wiLFwi4ouQXCI6XCImU3Vic2V0O1wiLFwi4oqGXCI6XCImc3Vic2V0ZXE7XCIsXCLiibtcIjpcIiZzdWNjO1wiLFwi4qqwXCI6XCImc3VjY2VxO1wiLFwi4om9XCI6XCImc3VjY2N1cmx5ZXE7XCIsXCLiib9cIjpcIiZzdWNjc2ltO1wiLFwi4oiRXCI6XCImc3VtO1wiLFwi4ouRXCI6XCImU3Vwc2V0O1wiLFwi4oqDXCI6XCImc3Vwc2V0O1wiLFwi4oqHXCI6XCImc3Vwc2V0ZXE7XCIsXCLDnlwiOlwiJlRIT1JOO1wiLFwi4oSiXCI6XCImdHJhZGU7XCIsXCLQi1wiOlwiJlRTSGN5O1wiLFwi0KZcIjpcIiZUU2N5O1wiLFwiXFx0XCI6XCImVGFiO1wiLFwizqRcIjpcIiZUYXU7XCIsXCLFpFwiOlwiJlRjYXJvbjtcIixcIsWiXCI6XCImVGNlZGlsO1wiLFwi0KJcIjpcIiZUY3k7XCIsXCLwnZSXXCI6XCImVGZyO1wiLFwi4oi0XCI6XCImdGhlcmVmb3JlO1wiLFwizphcIjpcIiZUaGV0YTtcIixcIuKBn+KAilwiOlwiJlRoaWNrU3BhY2U7XCIsXCLigIlcIjpcIiZ0aGluc3A7XCIsXCLiiLxcIjpcIiZ0aGtzaW07XCIsXCLiiYNcIjpcIiZzaW1lcTtcIixcIuKJhVwiOlwiJmNvbmc7XCIsXCLiiYhcIjpcIiZ0aGthcDtcIixcIvCdlYtcIjpcIiZUb3BmO1wiLFwi4oObXCI6XCImdGRvdDtcIixcIvCdkq9cIjpcIiZUc2NyO1wiLFwixaZcIjpcIiZUc3Ryb2s7XCIsXCLDmlwiOlwiJlVhY3V0ZTtcIixcIuKGn1wiOlwiJlVhcnI7XCIsXCLipYlcIjpcIiZVYXJyb2NpcjtcIixcItCOXCI6XCImVWJyY3k7XCIsXCLFrFwiOlwiJlVicmV2ZTtcIixcIsObXCI6XCImVWNpcmM7XCIsXCLQo1wiOlwiJlVjeTtcIixcIsWwXCI6XCImVWRibGFjO1wiLFwi8J2UmFwiOlwiJlVmcjtcIixcIsOZXCI6XCImVWdyYXZlO1wiLFwixapcIjpcIiZVbWFjcjtcIixfOlwiJmxvd2JhcjtcIixcIuKPn1wiOlwiJlVuZGVyQnJhY2U7XCIsXCLijrVcIjpcIiZiYnJrO1wiLFwi4o+dXCI6XCImVW5kZXJQYXJlbnRoZXNpcztcIixcIuKLg1wiOlwiJnhjdXA7XCIsXCLiio5cIjpcIiZ1cGx1cztcIixcIsWyXCI6XCImVW9nb247XCIsXCLwnZWMXCI6XCImVW9wZjtcIixcIuKkklwiOlwiJlVwQXJyb3dCYXI7XCIsXCLih4VcIjpcIiZ1ZGFycjtcIixcIuKGlVwiOlwiJnZhcnI7XCIsXCLipa5cIjpcIiZ1ZGhhcjtcIixcIuKKpVwiOlwiJnBlcnA7XCIsXCLihqVcIjpcIiZtYXBzdG91cDtcIixcIuKGllwiOlwiJm53YXJyb3c7XCIsXCLihpdcIjpcIiZuZWFycm93O1wiLFwiz5JcIjpcIiZ1cHNpaDtcIixcIs6lXCI6XCImVXBzaWxvbjtcIixcIsWuXCI6XCImVXJpbmc7XCIsXCLwnZKwXCI6XCImVXNjcjtcIixcIsWoXCI6XCImVXRpbGRlO1wiLFwiw5xcIjpcIiZVdW1sO1wiLFwi4oqrXCI6XCImVkRhc2g7XCIsXCLiq6tcIjpcIiZWYmFyO1wiLFwi0JJcIjpcIiZWY3k7XCIsXCLiiqlcIjpcIiZWZGFzaDtcIixcIuKrplwiOlwiJlZkYXNobDtcIixcIuKLgVwiOlwiJnh2ZWU7XCIsXCLigJZcIjpcIiZWZXJ0O1wiLFwi4oijXCI6XCImc21pZDtcIixcInxcIjpcIiZ2ZXJ0O1wiLFwi4p2YXCI6XCImVmVydGljYWxTZXBhcmF0b3I7XCIsXCLiiYBcIjpcIiZ3cmVhdGg7XCIsXCLigIpcIjpcIiZoYWlyc3A7XCIsXCLwnZSZXCI6XCImVmZyO1wiLFwi8J2VjVwiOlwiJlZvcGY7XCIsXCLwnZKxXCI6XCImVnNjcjtcIixcIuKKqlwiOlwiJlZ2ZGFzaDtcIixcIsW0XCI6XCImV2NpcmM7XCIsXCLii4BcIjpcIiZ4d2VkZ2U7XCIsXCLwnZSaXCI6XCImV2ZyO1wiLFwi8J2VjlwiOlwiJldvcGY7XCIsXCLwnZKyXCI6XCImV3NjcjtcIixcIvCdlJtcIjpcIiZYZnI7XCIsXCLOnlwiOlwiJlhpO1wiLFwi8J2Vj1wiOlwiJlhvcGY7XCIsXCLwnZKzXCI6XCImWHNjcjtcIixcItCvXCI6XCImWUFjeTtcIixcItCHXCI6XCImWUljeTtcIixcItCuXCI6XCImWVVjeTtcIixcIsOdXCI6XCImWWFjdXRlO1wiLFwixbZcIjpcIiZZY2lyYztcIixcItCrXCI6XCImWWN5O1wiLFwi8J2UnFwiOlwiJllmcjtcIixcIvCdlZBcIjpcIiZZb3BmO1wiLFwi8J2StFwiOlwiJllzY3I7XCIsXCLFuFwiOlwiJll1bWw7XCIsXCLQllwiOlwiJlpIY3k7XCIsXCLFuVwiOlwiJlphY3V0ZTtcIixcIsW9XCI6XCImWmNhcm9uO1wiLFwi0JdcIjpcIiZaY3k7XCIsXCLFu1wiOlwiJlpkb3Q7XCIsXCLOllwiOlwiJlpldGE7XCIsXCLihKhcIjpcIiZ6ZWV0cmY7XCIsXCLihKRcIjpcIiZpbnRlZ2VycztcIixcIvCdkrVcIjpcIiZac2NyO1wiLFwiw6FcIjpcIiZhYWN1dGU7XCIsXCLEg1wiOlwiJmFicmV2ZTtcIixcIuKIvlwiOlwiJm1zdHBvcztcIixcIuKIvsyzXCI6XCImYWNFO1wiLFwi4oi/XCI6XCImYWNkO1wiLFwiw6JcIjpcIiZhY2lyYztcIixcItCwXCI6XCImYWN5O1wiLFwiw6ZcIjpcIiZhZWxpZztcIixcIvCdlJ5cIjpcIiZhZnI7XCIsXCLDoFwiOlwiJmFncmF2ZTtcIixcIuKEtVwiOlwiJmFsZXBoO1wiLFwizrFcIjpcIiZhbHBoYTtcIixcIsSBXCI6XCImYW1hY3I7XCIsXCLiqL9cIjpcIiZhbWFsZztcIixcIuKIp1wiOlwiJndlZGdlO1wiLFwi4qmVXCI6XCImYW5kYW5kO1wiLFwi4qmcXCI6XCImYW5kZDtcIixcIuKpmFwiOlwiJmFuZHNsb3BlO1wiLFwi4qmaXCI6XCImYW5kdjtcIixcIuKIoFwiOlwiJmFuZ2xlO1wiLFwi4qakXCI6XCImYW5nZTtcIixcIuKIoVwiOlwiJm1lYXN1cmVkYW5nbGU7XCIsXCLipqhcIjpcIiZhbmdtc2RhYTtcIixcIuKmqVwiOlwiJmFuZ21zZGFiO1wiLFwi4qaqXCI6XCImYW5nbXNkYWM7XCIsXCLipqtcIjpcIiZhbmdtc2RhZDtcIixcIuKmrFwiOlwiJmFuZ21zZGFlO1wiLFwi4qatXCI6XCImYW5nbXNkYWY7XCIsXCLipq5cIjpcIiZhbmdtc2RhZztcIixcIuKmr1wiOlwiJmFuZ21zZGFoO1wiLFwi4oifXCI6XCImYW5ncnQ7XCIsXCLiir5cIjpcIiZhbmdydHZiO1wiLFwi4qadXCI6XCImYW5ncnR2YmQ7XCIsXCLiiKJcIjpcIiZhbmdzcGg7XCIsXCLijbxcIjpcIiZhbmd6YXJyO1wiLFwixIVcIjpcIiZhb2dvbjtcIixcIvCdlZJcIjpcIiZhb3BmO1wiLFwi4qmwXCI6XCImYXBFO1wiLFwi4qmvXCI6XCImYXBhY2lyO1wiLFwi4omKXCI6XCImYXBwcm94ZXE7XCIsXCLiiYtcIjpcIiZhcGlkO1wiLFwiJ1wiOlwiJmFwb3M7XCIsXCLDpVwiOlwiJmFyaW5nO1wiLFwi8J2StlwiOlwiJmFzY3I7XCIsXCIqXCI6XCImbWlkYXN0O1wiLFwiw6NcIjpcIiZhdGlsZGU7XCIsXCLDpFwiOlwiJmF1bWw7XCIsXCLiqJFcIjpcIiZhd2ludDtcIixcIuKrrVwiOlwiJmJOb3Q7XCIsXCLiiYxcIjpcIiZiY29uZztcIixcIs+2XCI6XCImYmVwc2k7XCIsXCLigLVcIjpcIiZicHJpbWU7XCIsXCLiiL1cIjpcIiZic2ltO1wiLFwi4ouNXCI6XCImYnNpbWU7XCIsXCLiir1cIjpcIiZiYXJ2ZWU7XCIsXCLijIVcIjpcIiZiYXJ3ZWRnZTtcIixcIuKOtlwiOlwiJmJicmt0YnJrO1wiLFwi0LFcIjpcIiZiY3k7XCIsXCLigJ5cIjpcIiZsZHF1b3I7XCIsXCLiprBcIjpcIiZiZW1wdHl2O1wiLFwizrJcIjpcIiZiZXRhO1wiLFwi4oS2XCI6XCImYmV0aDtcIixcIuKJrFwiOlwiJnR3aXh0O1wiLFwi8J2Un1wiOlwiJmJmcjtcIixcIuKXr1wiOlwiJnhjaXJjO1wiLFwi4qiAXCI6XCImeG9kb3Q7XCIsXCLiqIFcIjpcIiZ4b3BsdXM7XCIsXCLiqIJcIjpcIiZ4b3RpbWU7XCIsXCLiqIZcIjpcIiZ4c3FjdXA7XCIsXCLimIVcIjpcIiZzdGFyZjtcIixcIuKWvVwiOlwiJnhkdHJpO1wiLFwi4pazXCI6XCImeHV0cmk7XCIsXCLiqIRcIjpcIiZ4dXBsdXM7XCIsXCLipI1cIjpcIiZyYmFycjtcIixcIuKnq1wiOlwiJmxvemY7XCIsXCLilrRcIjpcIiZ1dHJpZjtcIixcIuKWvlwiOlwiJmR0cmlmO1wiLFwi4peCXCI6XCImbHRyaWY7XCIsXCLilrhcIjpcIiZydHJpZjtcIixcIuKQo1wiOlwiJmJsYW5rO1wiLFwi4paSXCI6XCImYmxrMTI7XCIsXCLilpFcIjpcIiZibGsxNDtcIixcIuKWk1wiOlwiJmJsazM0O1wiLFwi4paIXCI6XCImYmxvY2s7XCIsXCI94oOlXCI6XCImYm5lO1wiLFwi4omh4oOlXCI6XCImYm5lcXVpdjtcIixcIuKMkFwiOlwiJmJub3Q7XCIsXCLwnZWTXCI6XCImYm9wZjtcIixcIuKLiFwiOlwiJmJvd3RpZTtcIixcIuKVl1wiOlwiJmJveERMO1wiLFwi4pWUXCI6XCImYm94RFI7XCIsXCLilZZcIjpcIiZib3hEbDtcIixcIuKVk1wiOlwiJmJveERyO1wiLFwi4pWQXCI6XCImYm94SDtcIixcIuKVplwiOlwiJmJveEhEO1wiLFwi4pWpXCI6XCImYm94SFU7XCIsXCLilaRcIjpcIiZib3hIZDtcIixcIuKVp1wiOlwiJmJveEh1O1wiLFwi4pWdXCI6XCImYm94VUw7XCIsXCLilZpcIjpcIiZib3hVUjtcIixcIuKVnFwiOlwiJmJveFVsO1wiLFwi4pWZXCI6XCImYm94VXI7XCIsXCLilZFcIjpcIiZib3hWO1wiLFwi4pWsXCI6XCImYm94Vkg7XCIsXCLilaNcIjpcIiZib3hWTDtcIixcIuKVoFwiOlwiJmJveFZSO1wiLFwi4pWrXCI6XCImYm94Vmg7XCIsXCLilaJcIjpcIiZib3hWbDtcIixcIuKVn1wiOlwiJmJveFZyO1wiLFwi4qeJXCI6XCImYm94Ym94O1wiLFwi4pWVXCI6XCImYm94ZEw7XCIsXCLilZJcIjpcIiZib3hkUjtcIixcIuKUkFwiOlwiJmJveGRsO1wiLFwi4pSMXCI6XCImYm94ZHI7XCIsXCLilaVcIjpcIiZib3hoRDtcIixcIuKVqFwiOlwiJmJveGhVO1wiLFwi4pSsXCI6XCImYm94aGQ7XCIsXCLilLRcIjpcIiZib3hodTtcIixcIuKKn1wiOlwiJm1pbnVzYjtcIixcIuKKnlwiOlwiJnBsdXNiO1wiLFwi4oqgXCI6XCImdGltZXNiO1wiLFwi4pWbXCI6XCImYm94dUw7XCIsXCLilZhcIjpcIiZib3h1UjtcIixcIuKUmFwiOlwiJmJveHVsO1wiLFwi4pSUXCI6XCImYm94dXI7XCIsXCLilIJcIjpcIiZib3h2O1wiLFwi4pWqXCI6XCImYm94dkg7XCIsXCLilaFcIjpcIiZib3h2TDtcIixcIuKVnlwiOlwiJmJveHZSO1wiLFwi4pS8XCI6XCImYm94dmg7XCIsXCLilKRcIjpcIiZib3h2bDtcIixcIuKUnFwiOlwiJmJveHZyO1wiLFwiwqZcIjpcIiZicnZiYXI7XCIsXCLwnZK3XCI6XCImYnNjcjtcIixcIuKBj1wiOlwiJmJzZW1pO1wiLFwiXFxcXFwiOlwiJmJzb2w7XCIsXCLip4VcIjpcIiZic29sYjtcIixcIuKfiFwiOlwiJmJzb2xoc3ViO1wiLFwi4oCiXCI6XCImYnVsbGV0O1wiLFwi4qquXCI6XCImYnVtcEU7XCIsXCLEh1wiOlwiJmNhY3V0ZTtcIixcIuKIqVwiOlwiJmNhcDtcIixcIuKphFwiOlwiJmNhcGFuZDtcIixcIuKpiVwiOlwiJmNhcGJyY3VwO1wiLFwi4qmLXCI6XCImY2FwY2FwO1wiLFwi4qmHXCI6XCImY2FwY3VwO1wiLFwi4qmAXCI6XCImY2FwZG90O1wiLFwi4oip77iAXCI6XCImY2FwcztcIixcIuKBgVwiOlwiJmNhcmV0O1wiLFwi4qmNXCI6XCImY2NhcHM7XCIsXCLEjVwiOlwiJmNjYXJvbjtcIixcIsOnXCI6XCImY2NlZGlsO1wiLFwixIlcIjpcIiZjY2lyYztcIixcIuKpjFwiOlwiJmNjdXBzO1wiLFwi4qmQXCI6XCImY2N1cHNzbTtcIixcIsSLXCI6XCImY2RvdDtcIixcIuKmslwiOlwiJmNlbXB0eXY7XCIsXCLColwiOlwiJmNlbnQ7XCIsXCLwnZSgXCI6XCImY2ZyO1wiLFwi0YdcIjpcIiZjaGN5O1wiLFwi4pyTXCI6XCImY2hlY2ttYXJrO1wiLFwiz4dcIjpcIiZjaGk7XCIsXCLil4tcIjpcIiZjaXI7XCIsXCLip4NcIjpcIiZjaXJFO1wiLFwiy4ZcIjpcIiZjaXJjO1wiLFwi4omXXCI6XCImY2lyZTtcIixcIuKGulwiOlwiJm9sYXJyO1wiLFwi4oa7XCI6XCImb3JhcnI7XCIsXCLik4hcIjpcIiZvUztcIixcIuKKm1wiOlwiJm9hc3Q7XCIsXCLiippcIjpcIiZvY2lyO1wiLFwi4oqdXCI6XCImb2Rhc2g7XCIsXCLiqJBcIjpcIiZjaXJmbmludDtcIixcIuKrr1wiOlwiJmNpcm1pZDtcIixcIuKnglwiOlwiJmNpcnNjaXI7XCIsXCLimaNcIjpcIiZjbHVic3VpdDtcIixcIjpcIjpcIiZjb2xvbjtcIixcIixcIjpcIiZjb21tYTtcIixcIkBcIjpcIiZjb21tYXQ7XCIsXCLiiIFcIjpcIiZjb21wbGVtZW50O1wiLFwi4qmtXCI6XCImY29uZ2RvdDtcIixcIvCdlZRcIjpcIiZjb3BmO1wiLFwi4oSXXCI6XCImY29weXNyO1wiLFwi4oa1XCI6XCImY3JhcnI7XCIsXCLinJdcIjpcIiZjcm9zcztcIixcIvCdkrhcIjpcIiZjc2NyO1wiLFwi4quPXCI6XCImY3N1YjtcIixcIuKrkVwiOlwiJmNzdWJlO1wiLFwi4quQXCI6XCImY3N1cDtcIixcIuKrklwiOlwiJmNzdXBlO1wiLFwi4ouvXCI6XCImY3Rkb3Q7XCIsXCLipLhcIjpcIiZjdWRhcnJsO1wiLFwi4qS1XCI6XCImY3VkYXJycjtcIixcIuKLnlwiOlwiJmN1cmx5ZXFwcmVjO1wiLFwi4oufXCI6XCImY3VybHllcXN1Y2M7XCIsXCLihrZcIjpcIiZjdXJ2ZWFycm93bGVmdDtcIixcIuKkvVwiOlwiJmN1bGFycnA7XCIsXCLiiKpcIjpcIiZjdXA7XCIsXCLiqYhcIjpcIiZjdXBicmNhcDtcIixcIuKphlwiOlwiJmN1cGNhcDtcIixcIuKpilwiOlwiJmN1cGN1cDtcIixcIuKKjVwiOlwiJmN1cGRvdDtcIixcIuKphVwiOlwiJmN1cG9yO1wiLFwi4oiq77iAXCI6XCImY3VwcztcIixcIuKGt1wiOlwiJmN1cnZlYXJyb3dyaWdodDtcIixcIuKkvFwiOlwiJmN1cmFycm07XCIsXCLii45cIjpcIiZjdXZlZTtcIixcIuKLj1wiOlwiJmN1d2VkO1wiLFwiwqRcIjpcIiZjdXJyZW47XCIsXCLiiLFcIjpcIiZjd2ludDtcIixcIuKMrVwiOlwiJmN5bGN0eTtcIixcIuKlpVwiOlwiJmRIYXI7XCIsXCLigKBcIjpcIiZkYWdnZXI7XCIsXCLihLhcIjpcIiZkYWxldGg7XCIsXCLigJBcIjpcIiZoeXBoZW47XCIsXCLipI9cIjpcIiZyQmFycjtcIixcIsSPXCI6XCImZGNhcm9uO1wiLFwi0LRcIjpcIiZkY3k7XCIsXCLih4pcIjpcIiZkb3duZG93bmFycm93cztcIixcIuKpt1wiOlwiJmVERG90O1wiLFwiwrBcIjpcIiZkZWc7XCIsXCLOtFwiOlwiJmRlbHRhO1wiLFwi4qaxXCI6XCImZGVtcHR5djtcIixcIuKlv1wiOlwiJmRmaXNodDtcIixcIvCdlKFcIjpcIiZkZnI7XCIsXCLimaZcIjpcIiZkaWFtcztcIixcIs+dXCI6XCImZ2FtbWFkO1wiLFwi4ouyXCI6XCImZGlzaW47XCIsXCLDt1wiOlwiJmRpdmlkZTtcIixcIuKLh1wiOlwiJmRpdm9ueDtcIixcItGSXCI6XCImZGpjeTtcIixcIuKMnlwiOlwiJmxsY29ybmVyO1wiLFwi4oyNXCI6XCImZGxjcm9wO1wiLCQ6XCImZG9sbGFyO1wiLFwi8J2VlVwiOlwiJmRvcGY7XCIsXCLiiZFcIjpcIiZlRG90O1wiLFwi4oi4XCI6XCImbWludXNkO1wiLFwi4oiUXCI6XCImcGx1c2RvO1wiLFwi4oqhXCI6XCImc2RvdGI7XCIsXCLijJ9cIjpcIiZscmNvcm5lcjtcIixcIuKMjFwiOlwiJmRyY3JvcDtcIixcIvCdkrlcIjpcIiZkc2NyO1wiLFwi0ZVcIjpcIiZkc2N5O1wiLFwi4qe2XCI6XCImZHNvbDtcIixcIsSRXCI6XCImZHN0cm9rO1wiLFwi4ouxXCI6XCImZHRkb3Q7XCIsXCLilr9cIjpcIiZ0cmlhbmdsZWRvd247XCIsXCLipqZcIjpcIiZkd2FuZ2xlO1wiLFwi0Z9cIjpcIiZkemN5O1wiLFwi4p+/XCI6XCImZHppZ3JhcnI7XCIsXCLDqVwiOlwiJmVhY3V0ZTtcIixcIuKprlwiOlwiJmVhc3RlcjtcIixcIsSbXCI6XCImZWNhcm9uO1wiLFwi4omWXCI6XCImZXFjaXJjO1wiLFwiw6pcIjpcIiZlY2lyYztcIixcIuKJlVwiOlwiJmVxY29sb247XCIsXCLRjVwiOlwiJmVjeTtcIixcIsSXXCI6XCImZWRvdDtcIixcIuKJklwiOlwiJmZhbGxpbmdkb3RzZXE7XCIsXCLwnZSiXCI6XCImZWZyO1wiLFwi4qqaXCI6XCImZWc7XCIsXCLDqFwiOlwiJmVncmF2ZTtcIixcIuKqllwiOlwiJmVxc2xhbnRndHI7XCIsXCLiqphcIjpcIiZlZ3Nkb3Q7XCIsXCLiqplcIjpcIiZlbDtcIixcIuKPp1wiOlwiJmVsaW50ZXJzO1wiLFwi4oSTXCI6XCImZWxsO1wiLFwi4qqVXCI6XCImZXFzbGFudGxlc3M7XCIsXCLiqpdcIjpcIiZlbHNkb3Q7XCIsXCLEk1wiOlwiJmVtYWNyO1wiLFwi4oiFXCI6XCImdmFybm90aGluZztcIixcIuKAhFwiOlwiJmVtc3AxMztcIixcIuKAhVwiOlwiJmVtc3AxNDtcIixcIuKAg1wiOlwiJmVtc3A7XCIsXCLFi1wiOlwiJmVuZztcIixcIuKAglwiOlwiJmVuc3A7XCIsXCLEmVwiOlwiJmVvZ29uO1wiLFwi8J2VllwiOlwiJmVvcGY7XCIsXCLii5VcIjpcIiZlcGFyO1wiLFwi4qejXCI6XCImZXBhcnNsO1wiLFwi4qmxXCI6XCImZXBsdXM7XCIsXCLOtVwiOlwiJmVwc2lsb247XCIsXCLPtVwiOlwiJnZhcmVwc2lsb247XCIsXCI9XCI6XCImZXF1YWxzO1wiLFwi4omfXCI6XCImcXVlc3RlcTtcIixcIuKpuFwiOlwiJmVxdWl2REQ7XCIsXCLip6VcIjpcIiZlcXZwYXJzbDtcIixcIuKJk1wiOlwiJnJpc2luZ2RvdHNlcTtcIixcIuKlsVwiOlwiJmVyYXJyO1wiLFwi4oSvXCI6XCImZXNjcjtcIixcIs63XCI6XCImZXRhO1wiLFwiw7BcIjpcIiZldGg7XCIsXCLDq1wiOlwiJmV1bWw7XCIsXCLigqxcIjpcIiZldXJvO1wiLFwiIVwiOlwiJmV4Y2w7XCIsXCLRhFwiOlwiJmZjeTtcIixcIuKZgFwiOlwiJmZlbWFsZTtcIixcIu+sg1wiOlwiJmZmaWxpZztcIixcIu+sgFwiOlwiJmZmbGlnO1wiLFwi76yEXCI6XCImZmZsbGlnO1wiLFwi8J2Uo1wiOlwiJmZmcjtcIixcIu+sgVwiOlwiJmZpbGlnO1wiLGZqOlwiJmZqbGlnO1wiLFwi4pmtXCI6XCImZmxhdDtcIixcIu+sglwiOlwiJmZsbGlnO1wiLFwi4paxXCI6XCImZmx0bnM7XCIsXCLGklwiOlwiJmZub2Y7XCIsXCLwnZWXXCI6XCImZm9wZjtcIixcIuKLlFwiOlwiJnBpdGNoZm9yaztcIixcIuKrmVwiOlwiJmZvcmt2O1wiLFwi4qiNXCI6XCImZnBhcnRpbnQ7XCIsXCLCvVwiOlwiJmhhbGY7XCIsXCLihZNcIjpcIiZmcmFjMTM7XCIsXCLCvFwiOlwiJmZyYWMxNDtcIixcIuKFlVwiOlwiJmZyYWMxNTtcIixcIuKFmVwiOlwiJmZyYWMxNjtcIixcIuKFm1wiOlwiJmZyYWMxODtcIixcIuKFlFwiOlwiJmZyYWMyMztcIixcIuKFllwiOlwiJmZyYWMyNTtcIixcIsK+XCI6XCImZnJhYzM0O1wiLFwi4oWXXCI6XCImZnJhYzM1O1wiLFwi4oWcXCI6XCImZnJhYzM4O1wiLFwi4oWYXCI6XCImZnJhYzQ1O1wiLFwi4oWaXCI6XCImZnJhYzU2O1wiLFwi4oWdXCI6XCImZnJhYzU4O1wiLFwi4oWeXCI6XCImZnJhYzc4O1wiLFwi4oGEXCI6XCImZnJhc2w7XCIsXCLijKJcIjpcIiZzZnJvd247XCIsXCLwnZK7XCI6XCImZnNjcjtcIixcIuKqjFwiOlwiJmd0cmVxcWxlc3M7XCIsXCLHtVwiOlwiJmdhY3V0ZTtcIixcIs6zXCI6XCImZ2FtbWE7XCIsXCLiqoZcIjpcIiZndHJhcHByb3g7XCIsXCLEn1wiOlwiJmdicmV2ZTtcIixcIsSdXCI6XCImZ2NpcmM7XCIsXCLQs1wiOlwiJmdjeTtcIixcIsShXCI6XCImZ2RvdDtcIixcIuKqqVwiOlwiJmdlc2NjO1wiLFwi4qqAXCI6XCImZ2VzZG90O1wiLFwi4qqCXCI6XCImZ2VzZG90bztcIixcIuKqhFwiOlwiJmdlc2RvdG9sO1wiLFwi4oub77iAXCI6XCImZ2VzbDtcIixcIuKqlFwiOlwiJmdlc2xlcztcIixcIvCdlKRcIjpcIiZnZnI7XCIsXCLihLdcIjpcIiZnaW1lbDtcIixcItGTXCI6XCImZ2pjeTtcIixcIuKqklwiOlwiJmdsRTtcIixcIuKqpVwiOlwiJmdsYTtcIixcIuKqpFwiOlwiJmdsajtcIixcIuKJqVwiOlwiJmduZXFxO1wiLFwi4qqKXCI6XCImZ25hcHByb3g7XCIsXCLiqohcIjpcIiZnbmVxO1wiLFwi4ounXCI6XCImZ25zaW07XCIsXCLwnZWYXCI6XCImZ29wZjtcIixcIuKEilwiOlwiJmdzY3I7XCIsXCLiqo5cIjpcIiZnc2ltZTtcIixcIuKqkFwiOlwiJmdzaW1sO1wiLFwi4qqnXCI6XCImZ3RjYztcIixcIuKpulwiOlwiJmd0Y2lyO1wiLFwi4ouXXCI6XCImZ3RyZG90O1wiLFwi4qaVXCI6XCImZ3RsUGFyO1wiLFwi4qm8XCI6XCImZ3RxdWVzdDtcIixcIuKluFwiOlwiJmd0cmFycjtcIixcIuKJqe+4gFwiOlwiJmd2bkU7XCIsXCLRilwiOlwiJmhhcmRjeTtcIixcIuKliFwiOlwiJmhhcnJjaXI7XCIsXCLihq1cIjpcIiZsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiLFwi4oSPXCI6XCImcGxhbmt2O1wiLFwixKVcIjpcIiZoY2lyYztcIixcIuKZpVwiOlwiJmhlYXJ0c3VpdDtcIixcIuKAplwiOlwiJm1sZHI7XCIsXCLiirlcIjpcIiZoZXJjb247XCIsXCLwnZSlXCI6XCImaGZyO1wiLFwi4qSlXCI6XCImc2VhcmhrO1wiLFwi4qSmXCI6XCImc3dhcmhrO1wiLFwi4oe/XCI6XCImaG9hcnI7XCIsXCLiiLtcIjpcIiZob210aHQ7XCIsXCLihqlcIjpcIiZsYXJyaGs7XCIsXCLihqpcIjpcIiZyYXJyaGs7XCIsXCLwnZWZXCI6XCImaG9wZjtcIixcIuKAlVwiOlwiJmhvcmJhcjtcIixcIvCdkr1cIjpcIiZoc2NyO1wiLFwixKdcIjpcIiZoc3Ryb2s7XCIsXCLigYNcIjpcIiZoeWJ1bGw7XCIsXCLDrVwiOlwiJmlhY3V0ZTtcIixcIsOuXCI6XCImaWNpcmM7XCIsXCLQuFwiOlwiJmljeTtcIixcItC1XCI6XCImaWVjeTtcIixcIsKhXCI6XCImaWV4Y2w7XCIsXCLwnZSmXCI6XCImaWZyO1wiLFwiw6xcIjpcIiZpZ3JhdmU7XCIsXCLiqIxcIjpcIiZxaW50O1wiLFwi4oitXCI6XCImdGludDtcIixcIuKnnFwiOlwiJmlpbmZpbjtcIixcIuKEqVwiOlwiJmlpb3RhO1wiLFwixLNcIjpcIiZpamxpZztcIixcIsSrXCI6XCImaW1hY3I7XCIsXCLEsVwiOlwiJmlub2RvdDtcIixcIuKKt1wiOlwiJmltb2Y7XCIsXCLGtVwiOlwiJmltcGVkO1wiLFwi4oSFXCI6XCImaW5jYXJlO1wiLFwi4oieXCI6XCImaW5maW47XCIsXCLip51cIjpcIiZpbmZpbnRpZTtcIixcIuKKulwiOlwiJmludGVyY2FsO1wiLFwi4qiXXCI6XCImaW50bGFyaGs7XCIsXCLiqLxcIjpcIiZpcHJvZDtcIixcItGRXCI6XCImaW9jeTtcIixcIsSvXCI6XCImaW9nb247XCIsXCLwnZWaXCI6XCImaW9wZjtcIixcIs65XCI6XCImaW90YTtcIixcIsK/XCI6XCImaXF1ZXN0O1wiLFwi8J2SvlwiOlwiJmlzY3I7XCIsXCLii7lcIjpcIiZpc2luRTtcIixcIuKLtVwiOlwiJmlzaW5kb3Q7XCIsXCLii7RcIjpcIiZpc2lucztcIixcIuKLs1wiOlwiJmlzaW5zdjtcIixcIsSpXCI6XCImaXRpbGRlO1wiLFwi0ZZcIjpcIiZpdWtjeTtcIixcIsOvXCI6XCImaXVtbDtcIixcIsS1XCI6XCImamNpcmM7XCIsXCLQuVwiOlwiJmpjeTtcIixcIvCdlKdcIjpcIiZqZnI7XCIsXCLIt1wiOlwiJmptYXRoO1wiLFwi8J2Vm1wiOlwiJmpvcGY7XCIsXCLwnZK/XCI6XCImanNjcjtcIixcItGYXCI6XCImanNlcmN5O1wiLFwi0ZRcIjpcIiZqdWtjeTtcIixcIs66XCI6XCIma2FwcGE7XCIsXCLPsFwiOlwiJnZhcmthcHBhO1wiLFwixLdcIjpcIiZrY2VkaWw7XCIsXCLQulwiOlwiJmtjeTtcIixcIvCdlKhcIjpcIiZrZnI7XCIsXCLEuFwiOlwiJmtncmVlbjtcIixcItGFXCI6XCIma2hjeTtcIixcItGcXCI6XCIma2pjeTtcIixcIvCdlZxcIjpcIiZrb3BmO1wiLFwi8J2TgFwiOlwiJmtzY3I7XCIsXCLipJtcIjpcIiZsQXRhaWw7XCIsXCLipI5cIjpcIiZsQmFycjtcIixcIuKqi1wiOlwiJmxlc3NlcXFndHI7XCIsXCLipaJcIjpcIiZsSGFyO1wiLFwixLpcIjpcIiZsYWN1dGU7XCIsXCLiprRcIjpcIiZsYWVtcHR5djtcIixcIs67XCI6XCImbGFtYmRhO1wiLFwi4qaRXCI6XCImbGFuZ2Q7XCIsXCLiqoVcIjpcIiZsZXNzYXBwcm94O1wiLFwiwqtcIjpcIiZsYXF1bztcIixcIuKkn1wiOlwiJmxhcnJiZnM7XCIsXCLipJ1cIjpcIiZsYXJyZnM7XCIsXCLihqtcIjpcIiZsb29wYXJyb3dsZWZ0O1wiLFwi4qS5XCI6XCImbGFycnBsO1wiLFwi4qWzXCI6XCImbGFycnNpbTtcIixcIuKGolwiOlwiJmxlZnRhcnJvd3RhaWw7XCIsXCLiqqtcIjpcIiZsYXQ7XCIsXCLipJlcIjpcIiZsYXRhaWw7XCIsXCLiqq1cIjpcIiZsYXRlO1wiLFwi4qqt77iAXCI6XCImbGF0ZXM7XCIsXCLipIxcIjpcIiZsYmFycjtcIixcIuKdslwiOlwiJmxiYnJrO1wiLFwie1wiOlwiJmxjdWI7XCIsXCJbXCI6XCImbHNxYjtcIixcIuKmi1wiOlwiJmxicmtlO1wiLFwi4qaPXCI6XCImbGJya3NsZDtcIixcIuKmjVwiOlwiJmxicmtzbHU7XCIsXCLEvlwiOlwiJmxjYXJvbjtcIixcIsS8XCI6XCImbGNlZGlsO1wiLFwi0LtcIjpcIiZsY3k7XCIsXCLipLZcIjpcIiZsZGNhO1wiLFwi4qWnXCI6XCImbGRyZGhhcjtcIixcIuKli1wiOlwiJmxkcnVzaGFyO1wiLFwi4oayXCI6XCImbGRzaDtcIixcIuKJpFwiOlwiJmxlcTtcIixcIuKHh1wiOlwiJmxsYXJyO1wiLFwi4ouLXCI6XCImbHRocmVlO1wiLFwi4qqoXCI6XCImbGVzY2M7XCIsXCLiqb9cIjpcIiZsZXNkb3Q7XCIsXCLiqoFcIjpcIiZsZXNkb3RvO1wiLFwi4qqDXCI6XCImbGVzZG90b3I7XCIsXCLii5rvuIBcIjpcIiZsZXNnO1wiLFwi4qqTXCI6XCImbGVzZ2VzO1wiLFwi4ouWXCI6XCImbHRkb3Q7XCIsXCLipbxcIjpcIiZsZmlzaHQ7XCIsXCLwnZSpXCI6XCImbGZyO1wiLFwi4qqRXCI6XCImbGdFO1wiLFwi4qWqXCI6XCImbGhhcnVsO1wiLFwi4paEXCI6XCImbGhibGs7XCIsXCLRmVwiOlwiJmxqY3k7XCIsXCLipatcIjpcIiZsbGhhcmQ7XCIsXCLil7pcIjpcIiZsbHRyaTtcIixcIsWAXCI6XCImbG1pZG90O1wiLFwi4o6wXCI6XCImbG1vdXN0YWNoZTtcIixcIuKJqFwiOlwiJmxuZXFxO1wiLFwi4qqJXCI6XCImbG5hcHByb3g7XCIsXCLiqodcIjpcIiZsbmVxO1wiLFwi4oumXCI6XCImbG5zaW07XCIsXCLin6xcIjpcIiZsb2FuZztcIixcIuKHvVwiOlwiJmxvYXJyO1wiLFwi4p+8XCI6XCImeG1hcDtcIixcIuKGrFwiOlwiJnJhcnJscDtcIixcIuKmhVwiOlwiJmxvcGFyO1wiLFwi8J2VnVwiOlwiJmxvcGY7XCIsXCLiqK1cIjpcIiZsb3BsdXM7XCIsXCLiqLRcIjpcIiZsb3RpbWVzO1wiLFwi4oiXXCI6XCImbG93YXN0O1wiLFwi4peKXCI6XCImbG96ZW5nZTtcIixcIihcIjpcIiZscGFyO1wiLFwi4qaTXCI6XCImbHBhcmx0O1wiLFwi4qWtXCI6XCImbHJoYXJkO1wiLFwi4oCOXCI6XCImbHJtO1wiLFwi4oq/XCI6XCImbHJ0cmk7XCIsXCLigLlcIjpcIiZsc2FxdW87XCIsXCLwnZOBXCI6XCImbHNjcjtcIixcIuKqjVwiOlwiJmxzaW1lO1wiLFwi4qqPXCI6XCImbHNpbWc7XCIsXCLigJpcIjpcIiZzYnF1bztcIixcIsWCXCI6XCImbHN0cm9rO1wiLFwi4qqmXCI6XCImbHRjYztcIixcIuKpuVwiOlwiJmx0Y2lyO1wiLFwi4ouJXCI6XCImbHRpbWVzO1wiLFwi4qW2XCI6XCImbHRsYXJyO1wiLFwi4qm7XCI6XCImbHRxdWVzdDtcIixcIuKmllwiOlwiJmx0clBhcjtcIixcIuKXg1wiOlwiJnRyaWFuZ2xlbGVmdDtcIixcIuKlilwiOlwiJmx1cmRzaGFyO1wiLFwi4qWmXCI6XCImbHVydWhhcjtcIixcIuKJqO+4gFwiOlwiJmx2bkU7XCIsXCLiiLpcIjpcIiZtRERvdDtcIixcIsKvXCI6XCImc3RybnM7XCIsXCLimYJcIjpcIiZtYWxlO1wiLFwi4pygXCI6XCImbWFsdGVzZTtcIixcIuKWrlwiOlwiJm1hcmtlcjtcIixcIuKoqVwiOlwiJm1jb21tYTtcIixcItC8XCI6XCImbWN5O1wiLFwi4oCUXCI6XCImbWRhc2g7XCIsXCLwnZSqXCI6XCImbWZyO1wiLFwi4oSnXCI6XCImbWhvO1wiLFwiwrVcIjpcIiZtaWNybztcIixcIuKrsFwiOlwiJm1pZGNpcjtcIixcIuKIklwiOlwiJm1pbnVzO1wiLFwi4qiqXCI6XCImbWludXNkdTtcIixcIuKrm1wiOlwiJm1sY3A7XCIsXCLiiqdcIjpcIiZtb2RlbHM7XCIsXCLwnZWeXCI6XCImbW9wZjtcIixcIvCdk4JcIjpcIiZtc2NyO1wiLFwizrxcIjpcIiZtdTtcIixcIuKKuFwiOlwiJm11bWFwO1wiLFwi4ouZzLhcIjpcIiZuR2c7XCIsXCLiiavig5JcIjpcIiZuR3Q7XCIsXCLih41cIjpcIiZubEFycjtcIixcIuKHjlwiOlwiJm5oQXJyO1wiLFwi4ouYzLhcIjpcIiZuTGw7XCIsXCLiiarig5JcIjpcIiZuTHQ7XCIsXCLih49cIjpcIiZuckFycjtcIixcIuKKr1wiOlwiJm5WRGFzaDtcIixcIuKKrlwiOlwiJm5WZGFzaDtcIixcIsWEXCI6XCImbmFjdXRlO1wiLFwi4oig4oOSXCI6XCImbmFuZztcIixcIuKpsMy4XCI6XCImbmFwRTtcIixcIuKJi8y4XCI6XCImbmFwaWQ7XCIsXCLFiVwiOlwiJm5hcG9zO1wiLFwi4pmuXCI6XCImbmF0dXJhbDtcIixcIuKpg1wiOlwiJm5jYXA7XCIsXCLFiFwiOlwiJm5jYXJvbjtcIixcIsWGXCI6XCImbmNlZGlsO1wiLFwi4qmtzLhcIjpcIiZuY29uZ2RvdDtcIixcIuKpglwiOlwiJm5jdXA7XCIsXCLQvVwiOlwiJm5jeTtcIixcIuKAk1wiOlwiJm5kYXNoO1wiLFwi4oeXXCI6XCImbmVBcnI7XCIsXCLipKRcIjpcIiZuZWFyaGs7XCIsXCLiiZDMuFwiOlwiJm5lZG90O1wiLFwi4qSoXCI6XCImdG9lYTtcIixcIvCdlKtcIjpcIiZuZnI7XCIsXCLihq5cIjpcIiZubGVmdHJpZ2h0YXJyb3c7XCIsXCLiq7JcIjpcIiZuaHBhcjtcIixcIuKLvFwiOlwiJm5pcztcIixcIuKLulwiOlwiJm5pc2Q7XCIsXCLRmlwiOlwiJm5qY3k7XCIsXCLiiabMuFwiOlwiJm5sZXFxO1wiLFwi4oaaXCI6XCImbmxlZnRhcnJvdztcIixcIuKApVwiOlwiJm5sZHI7XCIsXCLwnZWfXCI6XCImbm9wZjtcIixcIsKsXCI6XCImbm90O1wiLFwi4ou5zLhcIjpcIiZub3RpbkU7XCIsXCLii7XMuFwiOlwiJm5vdGluZG90O1wiLFwi4ou3XCI6XCImbm90aW52YjtcIixcIuKLtlwiOlwiJm5vdGludmM7XCIsXCLii75cIjpcIiZub3RuaXZiO1wiLFwi4ou9XCI6XCImbm90bml2YztcIixcIuKrveKDpVwiOlwiJm5wYXJzbDtcIixcIuKIgsy4XCI6XCImbnBhcnQ7XCIsXCLiqJRcIjpcIiZucG9saW50O1wiLFwi4oabXCI6XCImbnJpZ2h0YXJyb3c7XCIsXCLipLPMuFwiOlwiJm5yYXJyYztcIixcIuKGncy4XCI6XCImbnJhcnJ3O1wiLFwi8J2Tg1wiOlwiJm5zY3I7XCIsXCLiioRcIjpcIiZuc3ViO1wiLFwi4quFzLhcIjpcIiZuc3Vic2V0ZXFxO1wiLFwi4oqFXCI6XCImbnN1cDtcIixcIuKrhsy4XCI6XCImbnN1cHNldGVxcTtcIixcIsOxXCI6XCImbnRpbGRlO1wiLFwizr1cIjpcIiZudTtcIixcIiNcIjpcIiZudW07XCIsXCLihJZcIjpcIiZudW1lcm87XCIsXCLigIdcIjpcIiZudW1zcDtcIixcIuKKrVwiOlwiJm52RGFzaDtcIixcIuKkhFwiOlwiJm52SGFycjtcIixcIuKJjeKDklwiOlwiJm52YXA7XCIsXCLiiqxcIjpcIiZudmRhc2g7XCIsXCLiiaXig5JcIjpcIiZudmdlO1wiLFwiPuKDklwiOlwiJm52Z3Q7XCIsXCLip55cIjpcIiZudmluZmluO1wiLFwi4qSCXCI6XCImbnZsQXJyO1wiLFwi4omk4oOSXCI6XCImbnZsZTtcIixcIjzig5JcIjpcIiZudmx0O1wiLFwi4oq04oOSXCI6XCImbnZsdHJpZTtcIixcIuKkg1wiOlwiJm52ckFycjtcIixcIuKKteKDklwiOlwiJm52cnRyaWU7XCIsXCLiiLzig5JcIjpcIiZudnNpbTtcIixcIuKHllwiOlwiJm53QXJyO1wiLFwi4qSjXCI6XCImbndhcmhrO1wiLFwi4qSnXCI6XCImbnduZWFyO1wiLFwiw7NcIjpcIiZvYWN1dGU7XCIsXCLDtFwiOlwiJm9jaXJjO1wiLFwi0L5cIjpcIiZvY3k7XCIsXCLFkVwiOlwiJm9kYmxhYztcIixcIuKouFwiOlwiJm9kaXY7XCIsXCLiprxcIjpcIiZvZHNvbGQ7XCIsXCLFk1wiOlwiJm9lbGlnO1wiLFwi4qa/XCI6XCImb2ZjaXI7XCIsXCLwnZSsXCI6XCImb2ZyO1wiLFwiy5tcIjpcIiZvZ29uO1wiLFwiw7JcIjpcIiZvZ3JhdmU7XCIsXCLip4FcIjpcIiZvZ3Q7XCIsXCLiprVcIjpcIiZvaGJhcjtcIixcIuKmvlwiOlwiJm9sY2lyO1wiLFwi4qa7XCI6XCImb2xjcm9zcztcIixcIuKngFwiOlwiJm9sdDtcIixcIsWNXCI6XCImb21hY3I7XCIsXCLPiVwiOlwiJm9tZWdhO1wiLFwizr9cIjpcIiZvbWljcm9uO1wiLFwi4qa2XCI6XCImb21pZDtcIixcIvCdlaBcIjpcIiZvb3BmO1wiLFwi4qa3XCI6XCImb3BhcjtcIixcIuKmuVwiOlwiJm9wZXJwO1wiLFwi4oioXCI6XCImdmVlO1wiLFwi4qmdXCI6XCImb3JkO1wiLFwi4oS0XCI6XCImb3NjcjtcIixcIsKqXCI6XCImb3JkZjtcIixcIsK6XCI6XCImb3JkbTtcIixcIuKKtlwiOlwiJm9yaWdvZjtcIixcIuKpllwiOlwiJm9yb3I7XCIsXCLiqZdcIjpcIiZvcnNsb3BlO1wiLFwi4qmbXCI6XCImb3J2O1wiLFwiw7hcIjpcIiZvc2xhc2g7XCIsXCLiiphcIjpcIiZvc29sO1wiLFwiw7VcIjpcIiZvdGlsZGU7XCIsXCLiqLZcIjpcIiZvdGltZXNhcztcIixcIsO2XCI6XCImb3VtbDtcIixcIuKMvVwiOlwiJm92YmFyO1wiLFwiwrZcIjpcIiZwYXJhO1wiLFwi4quzXCI6XCImcGFyc2ltO1wiLFwi4qu9XCI6XCImcGFyc2w7XCIsXCLQv1wiOlwiJnBjeTtcIixcIiVcIjpcIiZwZXJjbnQ7XCIsXCIuXCI6XCImcGVyaW9kO1wiLFwi4oCwXCI6XCImcGVybWlsO1wiLFwi4oCxXCI6XCImcGVydGVuaztcIixcIvCdlK1cIjpcIiZwZnI7XCIsXCLPhlwiOlwiJnBoaTtcIixcIs+VXCI6XCImdmFycGhpO1wiLFwi4piOXCI6XCImcGhvbmU7XCIsXCLPgFwiOlwiJnBpO1wiLFwiz5ZcIjpcIiZ2YXJwaTtcIixcIuKEjlwiOlwiJnBsYW5ja2g7XCIsXCIrXCI6XCImcGx1cztcIixcIuKoo1wiOlwiJnBsdXNhY2lyO1wiLFwi4qiiXCI6XCImcGx1c2NpcjtcIixcIuKopVwiOlwiJnBsdXNkdTtcIixcIuKpslwiOlwiJnBsdXNlO1wiLFwi4qimXCI6XCImcGx1c3NpbTtcIixcIuKop1wiOlwiJnBsdXN0d287XCIsXCLiqJVcIjpcIiZwb2ludGludDtcIixcIvCdlaFcIjpcIiZwb3BmO1wiLFwiwqNcIjpcIiZwb3VuZDtcIixcIuKqs1wiOlwiJnByRTtcIixcIuKqt1wiOlwiJnByZWNhcHByb3g7XCIsXCLiqrlcIjpcIiZwcm5hcDtcIixcIuKqtVwiOlwiJnBybkU7XCIsXCLii6hcIjpcIiZwcm5zaW07XCIsXCLigLJcIjpcIiZwcmltZTtcIixcIuKMrlwiOlwiJnByb2ZhbGFyO1wiLFwi4oySXCI6XCImcHJvZmxpbmU7XCIsXCLijJNcIjpcIiZwcm9mc3VyZjtcIixcIuKKsFwiOlwiJnBydXJlbDtcIixcIvCdk4VcIjpcIiZwc2NyO1wiLFwiz4hcIjpcIiZwc2k7XCIsXCLigIhcIjpcIiZwdW5jc3A7XCIsXCLwnZSuXCI6XCImcWZyO1wiLFwi8J2VolwiOlwiJnFvcGY7XCIsXCLigZdcIjpcIiZxcHJpbWU7XCIsXCLwnZOGXCI6XCImcXNjcjtcIixcIuKollwiOlwiJnF1YXRpbnQ7XCIsXCI/XCI6XCImcXVlc3Q7XCIsXCLipJxcIjpcIiZyQXRhaWw7XCIsXCLipaRcIjpcIiZySGFyO1wiLFwi4oi9zLFcIjpcIiZyYWNlO1wiLFwixZVcIjpcIiZyYWN1dGU7XCIsXCLiprNcIjpcIiZyYWVtcHR5djtcIixcIuKmklwiOlwiJnJhbmdkO1wiLFwi4qalXCI6XCImcmFuZ2U7XCIsXCLCu1wiOlwiJnJhcXVvO1wiLFwi4qW1XCI6XCImcmFycmFwO1wiLFwi4qSgXCI6XCImcmFycmJmcztcIixcIuKks1wiOlwiJnJhcnJjO1wiLFwi4qSeXCI6XCImcmFycmZzO1wiLFwi4qWFXCI6XCImcmFycnBsO1wiLFwi4qW0XCI6XCImcmFycnNpbTtcIixcIuKGo1wiOlwiJnJpZ2h0YXJyb3d0YWlsO1wiLFwi4oadXCI6XCImcmlnaHRzcXVpZ2Fycm93O1wiLFwi4qSaXCI6XCImcmF0YWlsO1wiLFwi4oi2XCI6XCImcmF0aW87XCIsXCLinbNcIjpcIiZyYmJyaztcIixcIn1cIjpcIiZyY3ViO1wiLFwiXVwiOlwiJnJzcWI7XCIsXCLipoxcIjpcIiZyYnJrZTtcIixcIuKmjlwiOlwiJnJicmtzbGQ7XCIsXCLippBcIjpcIiZyYnJrc2x1O1wiLFwixZlcIjpcIiZyY2Fyb247XCIsXCLFl1wiOlwiJnJjZWRpbDtcIixcItGAXCI6XCImcmN5O1wiLFwi4qS3XCI6XCImcmRjYTtcIixcIuKlqVwiOlwiJnJkbGRoYXI7XCIsXCLihrNcIjpcIiZyZHNoO1wiLFwi4patXCI6XCImcmVjdDtcIixcIuKlvVwiOlwiJnJmaXNodDtcIixcIvCdlK9cIjpcIiZyZnI7XCIsXCLipaxcIjpcIiZyaGFydWw7XCIsXCLPgVwiOlwiJnJobztcIixcIs+xXCI6XCImdmFycmhvO1wiLFwi4oeJXCI6XCImcnJhcnI7XCIsXCLii4xcIjpcIiZydGhyZWU7XCIsXCLLmlwiOlwiJnJpbmc7XCIsXCLigI9cIjpcIiZybG07XCIsXCLijrFcIjpcIiZybW91c3RhY2hlO1wiLFwi4quuXCI6XCImcm5taWQ7XCIsXCLin61cIjpcIiZyb2FuZztcIixcIuKHvlwiOlwiJnJvYXJyO1wiLFwi4qaGXCI6XCImcm9wYXI7XCIsXCLwnZWjXCI6XCImcm9wZjtcIixcIuKorlwiOlwiJnJvcGx1cztcIixcIuKotVwiOlwiJnJvdGltZXM7XCIsXCIpXCI6XCImcnBhcjtcIixcIuKmlFwiOlwiJnJwYXJndDtcIixcIuKoklwiOlwiJnJwcG9saW50O1wiLFwi4oC6XCI6XCImcnNhcXVvO1wiLFwi8J2Th1wiOlwiJnJzY3I7XCIsXCLii4pcIjpcIiZydGltZXM7XCIsXCLilrlcIjpcIiZ0cmlhbmdsZXJpZ2h0O1wiLFwi4qeOXCI6XCImcnRyaWx0cmk7XCIsXCLipahcIjpcIiZydWx1aGFyO1wiLFwi4oSeXCI6XCImcng7XCIsXCLFm1wiOlwiJnNhY3V0ZTtcIixcIuKqtFwiOlwiJnNjRTtcIixcIuKquFwiOlwiJnN1Y2NhcHByb3g7XCIsXCLFoVwiOlwiJnNjYXJvbjtcIixcIsWfXCI6XCImc2NlZGlsO1wiLFwixZ1cIjpcIiZzY2lyYztcIixcIuKqtlwiOlwiJnN1Y2NuZXFxO1wiLFwi4qq6XCI6XCImc3VjY25hcHByb3g7XCIsXCLii6lcIjpcIiZzdWNjbnNpbTtcIixcIuKok1wiOlwiJnNjcG9saW50O1wiLFwi0YFcIjpcIiZzY3k7XCIsXCLii4VcIjpcIiZzZG90O1wiLFwi4qmmXCI6XCImc2RvdGU7XCIsXCLih5hcIjpcIiZzZUFycjtcIixcIsKnXCI6XCImc2VjdDtcIixcIjtcIjpcIiZzZW1pO1wiLFwi4qSpXCI6XCImdG9zYTtcIixcIuKctlwiOlwiJnNleHQ7XCIsXCLwnZSwXCI6XCImc2ZyO1wiLFwi4pmvXCI6XCImc2hhcnA7XCIsXCLRiVwiOlwiJnNoY2hjeTtcIixcItGIXCI6XCImc2hjeTtcIixcIsKtXCI6XCImc2h5O1wiLFwiz4NcIjpcIiZzaWdtYTtcIixcIs+CXCI6XCImdmFyc2lnbWE7XCIsXCLiqapcIjpcIiZzaW1kb3Q7XCIsXCLiqp5cIjpcIiZzaW1nO1wiLFwi4qqgXCI6XCImc2ltZ0U7XCIsXCLiqp1cIjpcIiZzaW1sO1wiLFwi4qqfXCI6XCImc2ltbEU7XCIsXCLiiYZcIjpcIiZzaW1uZTtcIixcIuKopFwiOlwiJnNpbXBsdXM7XCIsXCLipbJcIjpcIiZzaW1yYXJyO1wiLFwi4qizXCI6XCImc21hc2hwO1wiLFwi4qekXCI6XCImc21lcGFyc2w7XCIsXCLijKNcIjpcIiZzc21pbGU7XCIsXCLiqqpcIjpcIiZzbXQ7XCIsXCLiqqxcIjpcIiZzbXRlO1wiLFwi4qqs77iAXCI6XCImc210ZXM7XCIsXCLRjFwiOlwiJnNvZnRjeTtcIixcIi9cIjpcIiZzb2w7XCIsXCLip4RcIjpcIiZzb2xiO1wiLFwi4oy/XCI6XCImc29sYmFyO1wiLFwi8J2VpFwiOlwiJnNvcGY7XCIsXCLimaBcIjpcIiZzcGFkZXN1aXQ7XCIsXCLiipPvuIBcIjpcIiZzcWNhcHM7XCIsXCLiipTvuIBcIjpcIiZzcWN1cHM7XCIsXCLwnZOIXCI6XCImc3NjcjtcIixcIuKYhlwiOlwiJnN0YXI7XCIsXCLiioJcIjpcIiZzdWJzZXQ7XCIsXCLiq4VcIjpcIiZzdWJzZXRlcXE7XCIsXCLiqr1cIjpcIiZzdWJkb3Q7XCIsXCLiq4NcIjpcIiZzdWJlZG90O1wiLFwi4quBXCI6XCImc3VibXVsdDtcIixcIuKri1wiOlwiJnN1YnNldG5lcXE7XCIsXCLiiopcIjpcIiZzdWJzZXRuZXE7XCIsXCLiqr9cIjpcIiZzdWJwbHVzO1wiLFwi4qW5XCI6XCImc3VicmFycjtcIixcIuKrh1wiOlwiJnN1YnNpbTtcIixcIuKrlVwiOlwiJnN1YnN1YjtcIixcIuKrk1wiOlwiJnN1YnN1cDtcIixcIuKZqlwiOlwiJnN1bmc7XCIsXCLCuVwiOlwiJnN1cDE7XCIsXCLCslwiOlwiJnN1cDI7XCIsXCLCs1wiOlwiJnN1cDM7XCIsXCLiq4ZcIjpcIiZzdXBzZXRlcXE7XCIsXCLiqr5cIjpcIiZzdXBkb3Q7XCIsXCLiq5hcIjpcIiZzdXBkc3ViO1wiLFwi4quEXCI6XCImc3VwZWRvdDtcIixcIuKfiVwiOlwiJnN1cGhzb2w7XCIsXCLiq5dcIjpcIiZzdXBoc3ViO1wiLFwi4qW7XCI6XCImc3VwbGFycjtcIixcIuKrglwiOlwiJnN1cG11bHQ7XCIsXCLiq4xcIjpcIiZzdXBzZXRuZXFxO1wiLFwi4oqLXCI6XCImc3Vwc2V0bmVxO1wiLFwi4quAXCI6XCImc3VwcGx1cztcIixcIuKriFwiOlwiJnN1cHNpbTtcIixcIuKrlFwiOlwiJnN1cHN1YjtcIixcIuKrllwiOlwiJnN1cHN1cDtcIixcIuKHmVwiOlwiJnN3QXJyO1wiLFwi4qSqXCI6XCImc3dud2FyO1wiLFwiw59cIjpcIiZzemxpZztcIixcIuKMllwiOlwiJnRhcmdldDtcIixcIs+EXCI6XCImdGF1O1wiLFwixaVcIjpcIiZ0Y2Fyb247XCIsXCLFo1wiOlwiJnRjZWRpbDtcIixcItGCXCI6XCImdGN5O1wiLFwi4oyVXCI6XCImdGVscmVjO1wiLFwi8J2UsVwiOlwiJnRmcjtcIixcIs64XCI6XCImdGhldGE7XCIsXCLPkVwiOlwiJnZhcnRoZXRhO1wiLFwiw75cIjpcIiZ0aG9ybjtcIixcIsOXXCI6XCImdGltZXM7XCIsXCLiqLFcIjpcIiZ0aW1lc2JhcjtcIixcIuKosFwiOlwiJnRpbWVzZDtcIixcIuKMtlwiOlwiJnRvcGJvdDtcIixcIuKrsVwiOlwiJnRvcGNpcjtcIixcIvCdlaVcIjpcIiZ0b3BmO1wiLFwi4quaXCI6XCImdG9wZm9yaztcIixcIuKAtFwiOlwiJnRwcmltZTtcIixcIuKWtVwiOlwiJnV0cmk7XCIsXCLiiZxcIjpcIiZ0cmllO1wiLFwi4pesXCI6XCImdHJpZG90O1wiLFwi4qi6XCI6XCImdHJpbWludXM7XCIsXCLiqLlcIjpcIiZ0cmlwbHVzO1wiLFwi4qeNXCI6XCImdHJpc2I7XCIsXCLiqLtcIjpcIiZ0cml0aW1lO1wiLFwi4o+iXCI6XCImdHJwZXppdW07XCIsXCLwnZOJXCI6XCImdHNjcjtcIixcItGGXCI6XCImdHNjeTtcIixcItGbXCI6XCImdHNoY3k7XCIsXCLFp1wiOlwiJnRzdHJvaztcIixcIuKlo1wiOlwiJnVIYXI7XCIsXCLDulwiOlwiJnVhY3V0ZTtcIixcItGeXCI6XCImdWJyY3k7XCIsXCLFrVwiOlwiJnVicmV2ZTtcIixcIsO7XCI6XCImdWNpcmM7XCIsXCLRg1wiOlwiJnVjeTtcIixcIsWxXCI6XCImdWRibGFjO1wiLFwi4qW+XCI6XCImdWZpc2h0O1wiLFwi8J2UslwiOlwiJnVmcjtcIixcIsO5XCI6XCImdWdyYXZlO1wiLFwi4paAXCI6XCImdWhibGs7XCIsXCLijJxcIjpcIiZ1bGNvcm5lcjtcIixcIuKMj1wiOlwiJnVsY3JvcDtcIixcIuKXuFwiOlwiJnVsdHJpO1wiLFwixatcIjpcIiZ1bWFjcjtcIixcIsWzXCI6XCImdW9nb247XCIsXCLwnZWmXCI6XCImdW9wZjtcIixcIs+FXCI6XCImdXBzaWxvbjtcIixcIuKHiFwiOlwiJnV1YXJyO1wiLFwi4oydXCI6XCImdXJjb3JuZXI7XCIsXCLijI5cIjpcIiZ1cmNyb3A7XCIsXCLFr1wiOlwiJnVyaW5nO1wiLFwi4pe5XCI6XCImdXJ0cmk7XCIsXCLwnZOKXCI6XCImdXNjcjtcIixcIuKLsFwiOlwiJnV0ZG90O1wiLFwixalcIjpcIiZ1dGlsZGU7XCIsXCLDvFwiOlwiJnV1bWw7XCIsXCLipqdcIjpcIiZ1d2FuZ2xlO1wiLFwi4quoXCI6XCImdkJhcjtcIixcIuKrqVwiOlwiJnZCYXJ2O1wiLFwi4qacXCI6XCImdmFuZ3J0O1wiLFwi4oqK77iAXCI6XCImdnN1Ym5lO1wiLFwi4quL77iAXCI6XCImdnN1Ym5FO1wiLFwi4oqL77iAXCI6XCImdnN1cG5lO1wiLFwi4quM77iAXCI6XCImdnN1cG5FO1wiLFwi0LJcIjpcIiZ2Y3k7XCIsXCLiirtcIjpcIiZ2ZWViYXI7XCIsXCLiiZpcIjpcIiZ2ZWVlcTtcIixcIuKLrlwiOlwiJnZlbGxpcDtcIixcIvCdlLNcIjpcIiZ2ZnI7XCIsXCLwnZWnXCI6XCImdm9wZjtcIixcIvCdk4tcIjpcIiZ2c2NyO1wiLFwi4qaaXCI6XCImdnppZ3phZztcIixcIsW1XCI6XCImd2NpcmM7XCIsXCLiqZ9cIjpcIiZ3ZWRiYXI7XCIsXCLiiZlcIjpcIiZ3ZWRnZXE7XCIsXCLihJhcIjpcIiZ3cDtcIixcIvCdlLRcIjpcIiZ3ZnI7XCIsXCLwnZWoXCI6XCImd29wZjtcIixcIvCdk4xcIjpcIiZ3c2NyO1wiLFwi8J2UtVwiOlwiJnhmcjtcIixcIs6+XCI6XCImeGk7XCIsXCLii7tcIjpcIiZ4bmlzO1wiLFwi8J2VqVwiOlwiJnhvcGY7XCIsXCLwnZONXCI6XCImeHNjcjtcIixcIsO9XCI6XCImeWFjdXRlO1wiLFwi0Y9cIjpcIiZ5YWN5O1wiLFwixbdcIjpcIiZ5Y2lyYztcIixcItGLXCI6XCImeWN5O1wiLFwiwqVcIjpcIiZ5ZW47XCIsXCLwnZS2XCI6XCImeWZyO1wiLFwi0ZdcIjpcIiZ5aWN5O1wiLFwi8J2VqlwiOlwiJnlvcGY7XCIsXCLwnZOOXCI6XCImeXNjcjtcIixcItGOXCI6XCImeXVjeTtcIixcIsO/XCI6XCImeXVtbDtcIixcIsW6XCI6XCImemFjdXRlO1wiLFwixb5cIjpcIiZ6Y2Fyb247XCIsXCLQt1wiOlwiJnpjeTtcIixcIsW8XCI6XCImemRvdDtcIixcIs62XCI6XCImemV0YTtcIixcIvCdlLdcIjpcIiZ6ZnI7XCIsXCLQtlwiOlwiJnpoY3k7XCIsXCLih51cIjpcIiZ6aWdyYXJyO1wiLFwi8J2Vq1wiOlwiJnpvcGY7XCIsXCLwnZOPXCI6XCImenNjcjtcIixcIuKAjVwiOlwiJnp3ajtcIixcIuKAjFwiOlwiJnp3bmo7XCJ9fX07IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLm51bWVyaWNVbmljb2RlTWFwPXswOjY1NTMzLDEyODo4MzY0LDEzMDo4MjE4LDEzMTo0MDIsMTMyOjgyMjIsMTMzOjgyMzAsMTM0OjgyMjQsMTM1OjgyMjUsMTM2OjcxMCwxMzc6ODI0MCwxMzg6MzUyLDEzOTo4MjQ5LDE0MDozMzgsMTQyOjM4MSwxNDU6ODIxNiwxNDY6ODIxNywxNDc6ODIyMCwxNDg6ODIyMSwxNDk6ODIyNiwxNTA6ODIxMSwxNTE6ODIxMiwxNTI6NzMyLDE1Mzo4NDgyLDE1NDozNTMsMTU1OjgyNTAsMTU2OjMzOSwxNTg6MzgyLDE1OTozNzZ9OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5mcm9tQ29kZVBvaW50PVN0cmluZy5mcm9tQ29kZVBvaW50fHxmdW5jdGlvbihhc3RyYWxDb2RlUG9pbnQpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoKGFzdHJhbENvZGVQb2ludC02NTUzNikvMTAyNCkrNTUyOTYsKGFzdHJhbENvZGVQb2ludC02NTUzNiklMTAyNCs1NjMyMCl9O2V4cG9ydHMuZ2V0Q29kZVBvaW50PVN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQ/ZnVuY3Rpb24oaW5wdXQscG9zaXRpb24pe3JldHVybiBpbnB1dC5jb2RlUG9pbnRBdChwb3NpdGlvbil9OmZ1bmN0aW9uKGlucHV0LHBvc2l0aW9uKXtyZXR1cm4oaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbiktNTUyOTYpKjEwMjQraW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbisxKS01NjMyMCs2NTUzNn07ZXhwb3J0cy5oaWdoU3Vycm9nYXRlRnJvbT01NTI5NjtleHBvcnRzLmhpZ2hTdXJyb2dhdGVUbz01NjMxOTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKlxuICBlc2xpbnQtZGlzYWJsZVxuICBuby1jb25zb2xlLFxuICBmdW5jLW5hbWVzXG4qL1xuXG4vKiogQHR5cGVkZWYge2FueX0gVE9ETyAqL1xuXG52YXIgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybFwiKTtcbnZhciBzcmNCeU1vZHVsZUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBub0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiO1xudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqIEByZXR1cm5zIHsoZnVuY3Rpb24oKTogdm9pZCl8Kn1cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKSB7XG4gIHZhciBzcmMgPSBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXTtcbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID0gLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxhc3RTY3JpcHRUYWcpIHtcbiAgICAgICAgc3JjID0gbGFzdFNjcmlwdFRhZy5zcmM7XG4gICAgICB9XG4gICAgfVxuICAgIHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdID0gc3JjO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTWFwXG4gICAqIEByZXR1cm5zIHtudWxsIHwgc3RyaW5nW119XG4gICAqL1xuICByZXR1cm4gZnVuY3Rpb24gKGZpbGVNYXApIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZU1hcC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChtYXBSdWxlKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChmaWxlbmFtZSwgXCJcXFxcLmpzJFwiKSwgXCJnXCIpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXVxuICovXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWwsIHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHVybCA9IGVsLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICB9XG4gIGlmICghaXNVcmxSZXF1ZXN0KCAvKiogQHR5cGUge3N0cmluZ30gKi91cmwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChlbC5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBXZSBzZWVtIHRvIGJlIGFib3V0IHRvIHJlcGxhY2UgYSBjc3MgbGluayB0aGF0IGhhc24ndCBsb2FkZWQgeWV0LlxuICAgIC8vIFdlJ3JlIHByb2JhYmx5IGNoYW5naW5nIHRoZSBzYW1lIGZpbGUgbW9yZSB0aGFuIG9uY2UuXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGVsLnZpc2l0ZWQgPSB0cnVlO1xuICB2YXIgbmV3RWwgPSBlbC5jbG9uZU5vZGUoKTtcbiAgbmV3RWwuaXNMb2FkZWQgPSBmYWxzZTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuICBpZiAoZWwubmV4dFNpYmxpbmcpIHtcbiAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbCwgZWwubmV4dFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIGVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7VE9ET30gc3JjXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYpO1xuICBzcmMuc29tZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgZnVuY3Rpb24gKHVybCkge1xuICAgIGlmIChocmVmLmluZGV4T2Yoc3JjKSA+IC0xKSB7XG4gICAgICByZXQgPSB1cmw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NyY11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHVybCA9IGdldFJlbG9hZFVybChlbC5ocmVmLCBzcmMpO1xuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHVybCkge1xuICAgICAgdXBkYXRlQ3NzKGVsLCB1cmwpO1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9hZGVkO1xufVxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cGRhdGVDc3MoZWwpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KHVybCkge1xuICAvLyBBbiBVUkwgaXMgbm90IGFuIHJlcXVlc3QgaWZcblxuICAvLyBJdCBpcyBub3QgaHR0cCBvciBodHRwc1xuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aXFxkK1xcLS5dKjovLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcGFyYW0ge1RPRE99IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG4gIHZhciBnZXRTY3JpcHRTcmMgPSBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKTtcbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzcmMgPSBnZXRTY3JpcHRTcmMob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgdmFyIHJlbG9hZGVkID0gcmVsb2FkU3R5bGUoc3JjKTtcbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZWxvYWRlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBjc3MgcmVsb2FkICVzXCIsIHNyYy5qb2luKFwiIFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKHVwZGF0ZSwgNTApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQ29tcG9uZW50c1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlIFwiLi5cIjpcbiAgICAgICAgYWNjdW11bGF0b3IucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIC8qKiBAdHlwZSB7c3RyaW5nW119ICovW10pLmpvaW4oXCIvXCIpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybFN0cmluZykge1xuICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cbiAgdmFyIHByb3RvY29sID0gdXJsU3RyaW5nLmluZGV4T2YoXCIvL1wiKSAhPT0gLTEgPyB1cmxTdHJpbmcuc3BsaXQoXCIvL1wiKVswXSArIFwiLy9cIiA6IFwiXCI7XG4gIHZhciBjb21wb25lbnRzID0gdXJsU3RyaW5nLnJlcGxhY2UobmV3IFJlZ0V4cChwcm90b2NvbCwgXCJpXCIpLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIHZhciBob3N0ID0gY29tcG9uZW50c1swXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgY29tcG9uZW50c1swXSA9IFwiXCI7XG4gIHZhciBwYXRoID0gbm9ybWFsaXplVXJsKGNvbXBvbmVudHMpO1xuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aDtcbn07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvbG9nLmpzXCI7XG52YXIgV2ViU29ja2V0Q2xpZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGZ1bmN0aW9uIFdlYlNvY2tldENsaWVudCh1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViU29ja2V0Q2xpZW50KTtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICB0aGlzLmNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICovXG4gIF9jcmVhdGVDbGFzcyhXZWJTb2NrZXRDbGllbnQsIFt7XG4gICAga2V5OiBcIm9uT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW4oZikge1xuICAgICAgdGhpcy5jbGllbnQub25vcGVuID0gZjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZShmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbmNsb3NlID0gZjtcbiAgICB9XG5cbiAgICAvLyBjYWxsIGYgd2l0aCB0aGUgbWVzc2FnZSBzdHJpbmcgYXMgdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvbk1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZXNzYWdlKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGYoZS5kYXRhKTtcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBXZWJTb2NrZXRDbGllbnQ7XG59KCk7XG5leHBvcnQgeyBXZWJTb2NrZXRDbGllbnQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuLyogZ2xvYmFsIF9fcmVzb3VyY2VRdWVyeSwgX193ZWJwYWNrX2hhc2hfXyAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJwYWNrL21vZHVsZVwiIC8+XG5pbXBvcnQgd2VicGFja0hvdExvZyBmcm9tIFwid2VicGFjay9ob3QvbG9nLmpzXCI7XG5pbXBvcnQgc3RyaXBBbnNpIGZyb20gXCIuL3V0aWxzL3N0cmlwQW5zaS5qc1wiO1xuaW1wb3J0IHBhcnNlVVJMIGZyb20gXCIuL3V0aWxzL3BhcnNlVVJMLmpzXCI7XG5pbXBvcnQgc29ja2V0IGZyb20gXCIuL3NvY2tldC5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UHJvYmxlbSwgY3JlYXRlT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXkuanNcIjtcbmltcG9ydCB7IGxvZywgbG9nRW5hYmxlZEZlYXR1cmVzLCBzZXRMb2dMZXZlbCB9IGZyb20gXCIuL3V0aWxzL2xvZy5qc1wiO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gXCIuL3V0aWxzL3NlbmRNZXNzYWdlLmpzXCI7XG5pbXBvcnQgcmVsb2FkQXBwIGZyb20gXCIuL3V0aWxzL3JlbG9hZEFwcC5qc1wiO1xuaW1wb3J0IGNyZWF0ZVNvY2tldFVSTCBmcm9tIFwiLi91dGlscy9jcmVhdGVTb2NrZXRVUkwuanNcIjtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPdmVybGF5T3B0aW9uc1xuICogQHByb3BlcnR5IHtib29sZWFuIHwgKGVycm9yOiBFcnJvcikgPT4gYm9vbGVhbn0gW3dhcm5pbmdzXVxuICogQHByb3BlcnR5IHtib29sZWFuIHwgKGVycm9yOiBFcnJvcikgPT4gYm9vbGVhbn0gW2Vycm9yc11cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IChlcnJvcjogRXJyb3IpID0+IGJvb2xlYW59IFtydW50aW1lRXJyb3JzXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICogQHByb3BlcnR5IHtib29sZWFufSBob3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGl2ZVJlbG9hZFxuICogQHByb3BlcnR5IHtib29sZWFufSBwcm9ncmVzc1xuICogQHByb3BlcnR5IHtib29sZWFuIHwgT3ZlcmxheU9wdGlvbnN9IG92ZXJsYXlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbG9nZ2luZ11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVjb25uZWN0XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3RhdHVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzVW5sb2FkaW5nXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VycmVudEhhc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcHJldmlvdXNIYXNoXVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtib29sZWFuIHwgeyB3YXJuaW5ncz86IGJvb2xlYW4gfCBzdHJpbmc7IGVycm9ycz86IGJvb2xlYW4gfCBzdHJpbmc7IHJ1bnRpbWVFcnJvcnM/OiBib29sZWFuIHwgc3RyaW5nOyB9fSBvdmVybGF5T3B0aW9uc1xuICovXG52YXIgZGVjb2RlT3ZlcmxheU9wdGlvbnMgPSBmdW5jdGlvbiBkZWNvZGVPdmVybGF5T3B0aW9ucyhvdmVybGF5T3B0aW9ucykge1xuICBpZiAodHlwZW9mIG92ZXJsYXlPcHRpb25zID09PSBcIm9iamVjdFwiKSB7XG4gICAgW1wid2FybmluZ3NcIiwgXCJlcnJvcnNcIiwgXCJydW50aW1lRXJyb3JzXCJdLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICBpZiAodHlwZW9mIG92ZXJsYXlPcHRpb25zW3Byb3BlcnR5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgb3ZlcmxheUZpbHRlckZ1bmN0aW9uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KG92ZXJsYXlPcHRpb25zW3Byb3BlcnR5XSk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAgIHZhciBvdmVybGF5RmlsdGVyRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJtZXNzYWdlXCIsIFwidmFyIGNhbGxiYWNrID0gXCIuY29uY2F0KG92ZXJsYXlGaWx0ZXJGdW5jdGlvblN0cmluZywgXCJcXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKVwiKSk7XG4gICAgICAgIG92ZXJsYXlPcHRpb25zW3Byb3BlcnR5XSA9IG92ZXJsYXlGaWx0ZXJGdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZSB7U3RhdHVzfVxuICovXG52YXIgc3RhdHVzID0ge1xuICBpc1VubG9hZGluZzogZmFsc2UsXG4gIC8vIFRPRE8gV29ya2Fyb3VuZCBmb3Igd2VicGFjayB2NCwgYF9fd2VicGFja19oYXNoX19gIGlzIG5vdCByZXBsYWNlZCB3aXRob3V0IEhvdE1vZHVsZVJlcGxhY2VtZW50XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY3VycmVudEhhc2g6IHR5cGVvZiBfX3dlYnBhY2tfaGFzaF9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX2hhc2hfXyA6IFwiXCJcbn07XG5cbi8qKiBAdHlwZSB7T3B0aW9uc30gKi9cbnZhciBvcHRpb25zID0ge1xuICBob3Q6IGZhbHNlLFxuICBsaXZlUmVsb2FkOiBmYWxzZSxcbiAgcHJvZ3Jlc3M6IGZhbHNlLFxuICBvdmVybGF5OiBmYWxzZVxufTtcbnZhciBwYXJzZWRSZXNvdXJjZVF1ZXJ5ID0gcGFyc2VVUkwoX19yZXNvdXJjZVF1ZXJ5KTtcbnZhciBlbmFibGVkRmVhdHVyZXMgPSB7XG4gIFwiSG90IE1vZHVsZSBSZXBsYWNlbWVudFwiOiBmYWxzZSxcbiAgXCJMaXZlIFJlbG9hZGluZ1wiOiBmYWxzZSxcbiAgUHJvZ3Jlc3M6IGZhbHNlLFxuICBPdmVybGF5OiBmYWxzZVxufTtcbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmhvdCA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5ob3QgPSB0cnVlO1xuICBlbmFibGVkRmVhdHVyZXNbXCJIb3QgTW9kdWxlIFJlcGxhY2VtZW50XCJdID0gdHJ1ZTtcbn1cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5W1wibGl2ZS1yZWxvYWRcIl0gPT09IFwidHJ1ZVwiKSB7XG4gIG9wdGlvbnMubGl2ZVJlbG9hZCA9IHRydWU7XG4gIGVuYWJsZWRGZWF0dXJlc1tcIkxpdmUgUmVsb2FkaW5nXCJdID0gdHJ1ZTtcbn1cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LnByb2dyZXNzID09PSBcInRydWVcIikge1xuICBvcHRpb25zLnByb2dyZXNzID0gdHJ1ZTtcbiAgZW5hYmxlZEZlYXR1cmVzLlByb2dyZXNzID0gdHJ1ZTtcbn1cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5Lm92ZXJsYXkpIHtcbiAgdHJ5IHtcbiAgICBvcHRpb25zLm92ZXJsYXkgPSBKU09OLnBhcnNlKHBhcnNlZFJlc291cmNlUXVlcnkub3ZlcmxheSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsb2cuZXJyb3IoXCJFcnJvciBwYXJzaW5nIG92ZXJsYXkgb3B0aW9ucyBmcm9tIHJlc291cmNlIHF1ZXJ5OlwiLCBlKTtcbiAgfVxuXG4gIC8vIEZpbGwgaW4gZGVmYXVsdCBcInRydWVcIiBwYXJhbXMgZm9yIHBhcnRpYWxseS1zcGVjaWZpZWQgb2JqZWN0cy5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwib2JqZWN0XCIpIHtcbiAgICBvcHRpb25zLm92ZXJsYXkgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGVycm9yczogdHJ1ZSxcbiAgICAgIHdhcm5pbmdzOiB0cnVlLFxuICAgICAgcnVudGltZUVycm9yczogdHJ1ZVxuICAgIH0sIG9wdGlvbnMub3ZlcmxheSk7XG4gICAgZGVjb2RlT3ZlcmxheU9wdGlvbnMob3B0aW9ucy5vdmVybGF5KTtcbiAgfVxuICBlbmFibGVkRmVhdHVyZXMuT3ZlcmxheSA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5sb2dnaW5nKSB7XG4gIG9wdGlvbnMubG9nZ2luZyA9IHBhcnNlZFJlc291cmNlUXVlcnkubG9nZ2luZztcbn1cbmlmICh0eXBlb2YgcGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgb3B0aW9ucy5yZWNvbm5lY3QgPSBOdW1iZXIocGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbFxuICovXG5mdW5jdGlvbiBzZXRBbGxMb2dMZXZlbChsZXZlbCkge1xuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBITVIgbG9nZ2VyIG9wZXJhdGUgc2VwYXJhdGVseSBmcm9tIGRldiBzZXJ2ZXIgbG9nZ2VyXG4gIHdlYnBhY2tIb3RMb2cuc2V0TG9nTGV2ZWwobGV2ZWwgPT09IFwidmVyYm9zZVwiIHx8IGxldmVsID09PSBcImxvZ1wiID8gXCJpbmZvXCIgOiBsZXZlbCk7XG4gIHNldExvZ0xldmVsKGxldmVsKTtcbn1cbmlmIChvcHRpb25zLmxvZ2dpbmcpIHtcbiAgc2V0QWxsTG9nTGV2ZWwob3B0aW9ucy5sb2dnaW5nKTtcbn1cbmxvZ0VuYWJsZWRGZWF0dXJlcyhlbmFibGVkRmVhdHVyZXMpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgc3RhdHVzLmlzVW5sb2FkaW5nID0gdHJ1ZTtcbn0pO1xudmFyIG92ZXJsYXkgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gY3JlYXRlT3ZlcmxheSh0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcIm9iamVjdFwiID8ge1xuICB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lOiBvcHRpb25zLm92ZXJsYXkudHJ1c3RlZFR5cGVzUG9saWN5TmFtZSxcbiAgY2F0Y2hSdW50aW1lRXJyb3I6IG9wdGlvbnMub3ZlcmxheS5ydW50aW1lRXJyb3JzXG59IDoge1xuICB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lOiBmYWxzZSxcbiAgY2F0Y2hSdW50aW1lRXJyb3I6IG9wdGlvbnMub3ZlcmxheVxufSkgOiB7XG4gIHNlbmQ6IGZ1bmN0aW9uIHNlbmQoKSB7fVxufTtcbnZhciBvblNvY2tldE1lc3NhZ2UgPSB7XG4gIGhvdDogZnVuY3Rpb24gaG90KCkge1xuICAgIGlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmhvdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMuaG90ID0gdHJ1ZTtcbiAgfSxcbiAgbGl2ZVJlbG9hZDogZnVuY3Rpb24gbGl2ZVJlbG9hZCgpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeVtcImxpdmUtcmVsb2FkXCJdID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5saXZlUmVsb2FkID0gdHJ1ZTtcbiAgfSxcbiAgaW52YWxpZDogZnVuY3Rpb24gaW52YWxpZCgpIHtcbiAgICBsb2cuaW5mbyhcIkFwcCB1cGRhdGVkLiBSZWNvbXBpbGluZy4uLlwiKTtcblxuICAgIC8vIEZpeGVzICMxMDQyLiBvdmVybGF5IGRvZXNuJ3QgY2xlYXIgaWYgZXJyb3JzIGFyZSBmaXhlZCBidXQgd2FybmluZ3MgcmVtYWluLlxuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgIHR5cGU6IFwiRElTTUlTU1wiXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2VuZE1lc3NhZ2UoXCJJbnZhbGlkXCIpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICovXG4gIGhhc2g6IGZ1bmN0aW9uIGhhc2goX2hhc2gpIHtcbiAgICBzdGF0dXMucHJldmlvdXNIYXNoID0gc3RhdHVzLmN1cnJlbnRIYXNoO1xuICAgIHN0YXR1cy5jdXJyZW50SGFzaCA9IF9oYXNoO1xuICB9LFxuICBsb2dnaW5nOiBzZXRBbGxMb2dMZXZlbCxcbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIG92ZXJsYXk6IGZ1bmN0aW9uIG92ZXJsYXkodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMub3ZlcmxheSA9IHZhbHVlO1xuICAgIGRlY29kZU92ZXJsYXlPcHRpb25zKG9wdGlvbnMub3ZlcmxheSk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICovXG4gIHJlY29ubmVjdDogZnVuY3Rpb24gcmVjb25uZWN0KHZhbHVlKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0ID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5yZWNvbm5lY3QgPSB2YWx1ZTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHByb2dyZXNzOiBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSkge1xuICAgIG9wdGlvbnMucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7eyBwbHVnaW5OYW1lPzogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIsIG1zZzogc3RyaW5nIH19IGRhdGFcbiAgICovXG4gIFwicHJvZ3Jlc3MtdXBkYXRlXCI6IGZ1bmN0aW9uIHByb2dyZXNzVXBkYXRlKGRhdGEpIHtcbiAgICBpZiAob3B0aW9ucy5wcm9ncmVzcykge1xuICAgICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZGF0YS5wbHVnaW5OYW1lID8gXCJbXCIuY29uY2F0KGRhdGEucGx1Z2luTmFtZSwgXCJdIFwiKSA6IFwiXCIpLmNvbmNhdChkYXRhLnBlcmNlbnQsIFwiJSAtIFwiKS5jb25jYXQoZGF0YS5tc2csIFwiLlwiKSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiUHJvZ3Jlc3NcIiwgZGF0YSk7XG4gIH0sXG4gIFwic3RpbGwtb2tcIjogZnVuY3Rpb24gc3RpbGxPaygpIHtcbiAgICBsb2cuaW5mbyhcIk5vdGhpbmcgY2hhbmdlZC5cIik7XG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZShcIlN0aWxsT2tcIik7XG4gIH0sXG4gIG9rOiBmdW5jdGlvbiBvaygpIHtcbiAgICBzZW5kTWVzc2FnZShcIk9rXCIpO1xuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgIHR5cGU6IFwiRElTTUlTU1wiXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVsb2FkQXBwKG9wdGlvbnMsIHN0YXR1cyk7XG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSBpbiB2NSBpbiBmYXZvciBvZiAnc3RhdGljLWNoYW5nZWQnXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVxuICAgKi9cbiAgXCJjb250ZW50LWNoYW5nZWRcIjogZnVuY3Rpb24gY29udGVudENoYW5nZWQoZmlsZSkge1xuICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGZpbGUgPyBcIlxcXCJcIi5jb25jYXQoZmlsZSwgXCJcXFwiXCIpIDogXCJDb250ZW50XCIsIFwiIGZyb20gc3RhdGljIGRpcmVjdG9yeSB3YXMgY2hhbmdlZC4gUmVsb2FkaW5nLi4uXCIpKTtcbiAgICBzZWxmLmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICovXG4gIFwic3RhdGljLWNoYW5nZWRcIjogZnVuY3Rpb24gc3RhdGljQ2hhbmdlZChmaWxlKSB7XG4gICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZmlsZSA/IFwiXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCJcIikgOiBcIkNvbnRlbnRcIiwgXCIgZnJvbSBzdGF0aWMgZGlyZWN0b3J5IHdhcyBjaGFuZ2VkLiBSZWxvYWRpbmcuLi5cIikpO1xuICAgIHNlbGYubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yW119IHdhcm5pbmdzXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAgICovXG4gIHdhcm5pbmdzOiBmdW5jdGlvbiB3YXJuaW5ncyhfd2FybmluZ3MsIHBhcmFtcykge1xuICAgIGxvZy53YXJuKFwiV2FybmluZ3Mgd2hpbGUgY29tcGlsaW5nLlwiKTtcbiAgICB2YXIgcHJpbnRhYmxlV2FybmluZ3MgPSBfd2FybmluZ3MubWFwKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9mb3JtYXRQcm9ibGVtID0gZm9ybWF0UHJvYmxlbShcIndhcm5pbmdcIiwgZXJyb3IpLFxuICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbS5oZWFkZXIsXG4gICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGhlYWRlciwgXCJcXG5cIikuY29uY2F0KHN0cmlwQW5zaShib2R5KSk7XG4gICAgfSk7XG4gICAgc2VuZE1lc3NhZ2UoXCJXYXJuaW5nc1wiLCBwcmludGFibGVXYXJuaW5ncyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVXYXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLndhcm4ocHJpbnRhYmxlV2FybmluZ3NbaV0pO1xuICAgIH1cbiAgICB2YXIgb3ZlcmxheVdhcm5pbmdzU2V0dGluZyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS53YXJuaW5ncztcbiAgICBpZiAob3ZlcmxheVdhcm5pbmdzU2V0dGluZykge1xuICAgICAgdmFyIHdhcm5pbmdzVG9EaXNwbGF5ID0gdHlwZW9mIG92ZXJsYXlXYXJuaW5nc1NldHRpbmcgPT09IFwiZnVuY3Rpb25cIiA/IF93YXJuaW5ncy5maWx0ZXIob3ZlcmxheVdhcm5pbmdzU2V0dGluZykgOiBfd2FybmluZ3M7XG4gICAgICBpZiAod2FybmluZ3NUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJCVUlMRF9FUlJPUlwiLFxuICAgICAgICAgIGxldmVsOiBcIndhcm5pbmdcIixcbiAgICAgICAgICBtZXNzYWdlczogX3dhcm5pbmdzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV2ZW50UmVsb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbG9hZEFwcChvcHRpb25zLCBzdGF0dXMpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcltdfSBlcnJvcnNcbiAgICovXG4gIGVycm9yczogZnVuY3Rpb24gZXJyb3JzKF9lcnJvcnMpIHtcbiAgICBsb2cuZXJyb3IoXCJFcnJvcnMgd2hpbGUgY29tcGlsaW5nLiBSZWxvYWQgcHJldmVudGVkLlwiKTtcbiAgICB2YXIgcHJpbnRhYmxlRXJyb3JzID0gX2Vycm9ycy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgX2Zvcm1hdFByb2JsZW0yID0gZm9ybWF0UHJvYmxlbShcImVycm9yXCIsIGVycm9yKSxcbiAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0yLmhlYWRlcixcbiAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtMi5ib2R5O1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGhlYWRlciwgXCJcXG5cIikuY29uY2F0KHN0cmlwQW5zaShib2R5KSk7XG4gICAgfSk7XG4gICAgc2VuZE1lc3NhZ2UoXCJFcnJvcnNcIiwgcHJpbnRhYmxlRXJyb3JzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW50YWJsZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLmVycm9yKHByaW50YWJsZUVycm9yc1tpXSk7XG4gICAgfVxuICAgIHZhciBvdmVybGF5RXJyb3JzU2V0dGluZ3MgPSB0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMub3ZlcmxheSA6IG9wdGlvbnMub3ZlcmxheSAmJiBvcHRpb25zLm92ZXJsYXkuZXJyb3JzO1xuICAgIGlmIChvdmVybGF5RXJyb3JzU2V0dGluZ3MpIHtcbiAgICAgIHZhciBlcnJvcnNUb0Rpc3BsYXkgPSB0eXBlb2Ygb3ZlcmxheUVycm9yc1NldHRpbmdzID09PSBcImZ1bmN0aW9uXCIgPyBfZXJyb3JzLmZpbHRlcihvdmVybGF5RXJyb3JzU2V0dGluZ3MpIDogX2Vycm9ycztcbiAgICAgIGlmIChlcnJvcnNUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJCVUlMRF9FUlJPUlwiLFxuICAgICAgICAgIGxldmVsOiBcImVycm9yXCIsXG4gICAgICAgICAgbWVzc2FnZXM6IF9lcnJvcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAgICovXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoX2Vycm9yKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGxvZy5pbmZvKFwiRGlzY29ubmVjdGVkIVwiKTtcbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkRJU01JU1NcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiQ2xvc2VcIik7XG4gIH1cbn07XG52YXIgc29ja2V0VVJMID0gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFJlc291cmNlUXVlcnkpO1xuc29ja2V0KHNvY2tldFVSTCwgb25Tb2NrZXRNZXNzYWdlLCBvcHRpb25zLnJlY29ubmVjdCk7IiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cblxuXG4vKipcbiAqIENsaWVudCBzdHViIGZvciB0YXBhYmxlIFN5bmNCYWlsSG9va1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNsaWVudFRhcGFibGVTeW5jQmFpbEhvb2soKSB7XG4gIHJldHVybiB7XG4gICAgY2FsbDogZnVuY3Rpb24gY2FsbCgpIHt9XG4gIH07XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0Wyh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbnZhciBMb2dUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGVycm9yOiAvKiogQHR5cGUge1wiZXJyb3JcIn0gKi9cImVycm9yXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIHdhcm46IC8qKiBAdHlwZSB7XCJ3YXJuXCJ9ICovXCJ3YXJuXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGluZm86IC8qKiBAdHlwZSB7XCJpbmZvXCJ9ICovXCJpbmZvXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGxvZzogLyoqIEB0eXBlIHtcImxvZ1wifSAqL1wibG9nXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGRlYnVnOiAvKiogQHR5cGUge1wiZGVidWdcIn0gKi9cImRlYnVnXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG5cbiAgdHJhY2U6IC8qKiBAdHlwZSB7XCJ0cmFjZVwifSAqL1widHJhY2VcIixcbiAgLy8gbm8gYXJndW1lbnRzXG5cbiAgZ3JvdXA6IC8qKiBAdHlwZSB7XCJncm91cFwifSAqL1wiZ3JvdXBcIixcbiAgLy8gW2xhYmVsXVxuICBncm91cENvbGxhcHNlZDogLyoqIEB0eXBlIHtcImdyb3VwQ29sbGFwc2VkXCJ9ICovXCJncm91cENvbGxhcHNlZFwiLFxuICAvLyBbbGFiZWxdXG4gIGdyb3VwRW5kOiAvKiogQHR5cGUge1wiZ3JvdXBFbmRcIn0gKi9cImdyb3VwRW5kXCIsXG4gIC8vIFtsYWJlbF1cblxuICBwcm9maWxlOiAvKiogQHR5cGUge1wicHJvZmlsZVwifSAqL1wicHJvZmlsZVwiLFxuICAvLyBbcHJvZmlsZU5hbWVdXG4gIHByb2ZpbGVFbmQ6IC8qKiBAdHlwZSB7XCJwcm9maWxlRW5kXCJ9ICovXCJwcm9maWxlRW5kXCIsXG4gIC8vIFtwcm9maWxlTmFtZV1cblxuICB0aW1lOiAvKiogQHR5cGUge1widGltZVwifSAqL1widGltZVwiLFxuICAvLyBuYW1lLCB0aW1lIGFzIFtzZWNvbmRzLCBuYW5vc2Vjb25kc11cblxuICBjbGVhcjogLyoqIEB0eXBlIHtcImNsZWFyXCJ9ICovXCJjbGVhclwiLFxuICAvLyBubyBhcmd1bWVudHNcbiAgc3RhdHVzOiAvKiogQHR5cGUge1wic3RhdHVzXCJ9ICovXCJzdGF0dXNcIiAvLyBtZXNzYWdlLCBhcmd1bWVudHNcbn0pO1xuXG5leHBvcnRzLkxvZ1R5cGUgPSBMb2dUeXBlO1xuXG4vKiogQHR5cGVkZWYge3R5cGVvZiBMb2dUeXBlW2tleW9mIHR5cGVvZiBMb2dUeXBlXX0gTG9nVHlwZUVudW0gKi9cblxudmFyIExPR19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIHJhdyBsb2cgbWV0aG9kXCIpO1xudmFyIFRJTUVSU19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIHRpbWVzXCIpO1xudmFyIFRJTUVSU19BR0dSRUdBVEVTX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgYWdncmVnYXRlZCB0aW1lc1wiKTtcbnZhciBXZWJwYWNrTG9nZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oTG9nVHlwZUVudW0sIGFueVtdPSk6IHZvaWR9IGxvZyBsb2cgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcgfCBmdW5jdGlvbigpOiBzdHJpbmcpOiBXZWJwYWNrTG9nZ2VyfSBnZXRDaGlsZExvZ2dlciBmdW5jdGlvbiB0byBjcmVhdGUgY2hpbGQgbG9nZ2VyXG4gICAqL1xuICBmdW5jdGlvbiBXZWJwYWNrTG9nZ2VyKGxvZywgZ2V0Q2hpbGRMb2dnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VicGFja0xvZ2dlcik7XG4gICAgdGhpc1tMT0dfU1lNQk9MXSA9IGxvZztcbiAgICB0aGlzLmdldENoaWxkTG9nZ2VyID0gZ2V0Q2hpbGRMb2dnZXI7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFdlYnBhY2tMb2dnZXIsIFt7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZXJyb3IsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLndhcm4sIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmluZm8sIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5sb2csIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWJ1Z1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZGVidWcsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhc3NlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNzZXJ0KGFzc2VydGlvbikge1xuICAgICAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgICBhcmdzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5lcnJvciwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRyYWNlLCBbXCJUcmFjZVwiXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmNsZWFyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXR1cygpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuc3RhdHVzLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBDb2xsYXBzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBDb2xsYXBzZWQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwQ29sbGFwc2VkLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBFbmQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMTAgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4xMCksIF9rZXkxMCA9IDA7IF9rZXkxMCA8IF9sZW4xMDsgX2tleTEwKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MTBdID0gYXJndW1lbnRzW19rZXkxMF07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZ3JvdXBFbmQsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcm9maWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2ZpbGUobGFiZWwpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5wcm9maWxlLCBbbGFiZWxdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJvZmlsZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9maWxlRW5kKGxhYmVsKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUucHJvZmlsZUVuZCwgW2xhYmVsXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZShsYWJlbCkge1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXSA9IHRoaXNbVElNRVJTX1NZTUJPTF0gfHwgbmV3IE1hcCgpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5zZXQobGFiZWwsIHByb2Nlc3MuaHJ0aW1lKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lTG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVMb2cobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUxvZygpXCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUVuZChsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lRW5kKClcIikpO1xuICAgICAgfVxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0uZGVsZXRlKGxhYmVsKTtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50aW1lLCBbbGFiZWxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGltZSkpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUFnZ3JlZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lQWdncmVnYXRlKGxhYmVsKSB7XG4gICAgICB2YXIgcHJldiA9IHRoaXNbVElNRVJTX1NZTUJPTF0gJiYgdGhpc1tUSU1FUlNfU1lNQk9MXS5nZXQobGFiZWwpO1xuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWwgJ1wiLmNvbmNhdChsYWJlbCwgXCInIGZvciBXZWJwYWNrTG9nZ2VyLnRpbWVBZ2dyZWdhdGUoKVwiKSk7XG4gICAgICB9XG4gICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKHByZXYpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdIHx8IG5ldyBNYXAoKTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aW1lWzFdICsgY3VycmVudFsxXSA+IDFlOSkge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXSArIDE7XG4gICAgICAgICAgdGltZVsxXSA9IHRpbWVbMV0gLSAxZTkgKyBjdXJyZW50WzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXTtcbiAgICAgICAgICB0aW1lWzFdICs9IGN1cnJlbnRbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5zZXQobGFiZWwsIHRpbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lQWdncmVnYXRlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVBZ2dyZWdhdGVFbmQobGFiZWwpIHtcbiAgICAgIGlmICh0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdmFyIHRpbWUgPSB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICh0aW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gV2VicGFja0xvZ2dlcjtcbn0oKTtcbmV4cG9ydHMuTG9nZ2VyID0gV2VicGFja0xvZ2dlcjtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL2NyZWF0ZUNvbnNvbGVMb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlclsodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIiksXG4gIExvZ1R5cGUgPSBfcmVxdWlyZS5Mb2dUeXBlO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uLy4uL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9uc1wiKS5GaWx0ZXJJdGVtVHlwZXN9IEZpbHRlckl0ZW1UeXBlcyAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi8uLi9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnNcIikuRmlsdGVyVHlwZXN9IEZpbHRlclR5cGVzICovXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4vTG9nZ2VyXCIpLkxvZ1R5cGVFbnVtfSBMb2dUeXBlRW51bSAqL1xuXG4vKiogQHR5cGVkZWYge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IEZpbHRlckZ1bmN0aW9uICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTG9nZ2VyQ29uc29sZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOiB2b2lkfSBjbGVhclxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOiB2b2lkfSB0cmFjZVxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGluZm9cbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBsb2dcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSB3YXJuXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZXJyb3JcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBDb2xsYXBzZWRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBFbmRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gc3RhdHVzXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IHByb2ZpbGVcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gcHJvZmlsZUVuZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBsb2dUaW1lXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBMb2dnZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge2ZhbHNlfHRydWV8XCJub25lXCJ8XCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJ2ZXJib3NlXCJ9IGxldmVsIGxvZ2xldmVsXG4gKiBAcHJvcGVydHkge0ZpbHRlclR5cGVzfGJvb2xlYW59IGRlYnVnIGZpbHRlciBmb3IgZGVidWcgbG9nZ2luZ1xuICogQHByb3BlcnR5IHtMb2dnZXJDb25zb2xlfSBjb25zb2xlIHRoZSBjb25zb2xlIHRvIGxvZyB0b1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtGaWx0ZXJJdGVtVHlwZXN9IGl0ZW0gYW4gaW5wdXQgaXRlbVxuICogQHJldHVybnMge0ZpbHRlckZ1bmN0aW9ufSBmaWx0ZXIgZnVuY3Rpb25cbiAqL1xudmFyIGZpbHRlclRvRnVuY3Rpb24gPSBmdW5jdGlvbiBmaWx0ZXJUb0Z1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJbXFxcXFxcXFwvXVwiLmNvbmNhdChpdGVtLnJlcGxhY2UoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgL1stW1xcXXt9KCkqKz8uXFxcXF4kfF0vZywgXCJcXFxcJCZcIiksIFwiKFtcXFxcXFxcXC9dfCR8IXxcXFxcPylcIikpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWRlbnQpIHtcbiAgICAgIHJldHVybiByZWdFeHAudGVzdChpZGVudCk7XG4gICAgfTtcbiAgfVxuICBpZiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgaXRlbS50ZXN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkZW50KSB7XG4gICAgICByZXR1cm4gaXRlbS50ZXN0KGlkZW50KTtcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbnZhciBMb2dMZXZlbCA9IHtcbiAgbm9uZTogNixcbiAgZmFsc2U6IDYsXG4gIGVycm9yOiA1LFxuICB3YXJuOiA0LFxuICBpbmZvOiAzLFxuICBsb2c6IDIsXG4gIHRydWU6IDIsXG4gIHZlcmJvc2U6IDFcbn07XG5cbi8qKlxuICogQHBhcmFtIHtMb2dnZXJPcHRpb25zfSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBMb2dUeXBlRW51bSwgYW55W10pOiB2b2lkfSBsb2dnaW5nIGZ1bmN0aW9uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYkbGV2ZWwgPSBfcmVmLmxldmVsLFxuICAgIGxldmVsID0gX3JlZiRsZXZlbCA9PT0gdm9pZCAwID8gXCJpbmZvXCIgOiBfcmVmJGxldmVsLFxuICAgIF9yZWYkZGVidWcgPSBfcmVmLmRlYnVnLFxuICAgIGRlYnVnID0gX3JlZiRkZWJ1ZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlYnVnLFxuICAgIGNvbnNvbGUgPSBfcmVmLmNvbnNvbGU7XG4gIHZhciBkZWJ1Z0ZpbHRlcnMgPSB0eXBlb2YgZGVidWcgPT09IFwiYm9vbGVhblwiID8gW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVidWc7XG4gIH1dIDogLyoqIEB0eXBlIHtGaWx0ZXJJdGVtVHlwZXNbXX0gKi9bXS5jb25jYXQoZGVidWcpLm1hcChmaWx0ZXJUb0Z1bmN0aW9uKTtcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIHZhciBsb2dsZXZlbCA9IExvZ0xldmVsW1wiXCIuY29uY2F0KGxldmVsKV0gfHwgMDtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbG9nZ2VyXG4gICAqIEBwYXJhbSB7TG9nVHlwZUVudW19IHR5cGUgdHlwZSBvZiB0aGUgbG9nIGVudHJ5XG4gICAqIEBwYXJhbSB7YW55W119IGFyZ3MgYXJndW1lbnRzIG9mIHRoZSBsb2cgZW50cnlcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICB2YXIgbG9nZ2VyID0gZnVuY3Rpb24gbG9nZ2VyKG5hbWUsIHR5cGUsIGFyZ3MpIHtcbiAgICB2YXIgbGFiZWxlZEFyZ3MgPSBmdW5jdGlvbiBsYWJlbGVkQXJncygpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gW1wiW1wiLmNvbmNhdChuYW1lLCBcIl0gXCIpLmNvbmNhdChhcmdzWzBdKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzLnNsaWNlKDEpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtcIltcIi5jb25jYXQobmFtZSwgXCJdXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGRlYnVnID0gZGVidWdGaWx0ZXJzLnNvbWUoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKG5hbWUpO1xuICAgIH0pO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2dUeXBlLmRlYnVnOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUubG9nOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmluZm86XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5pbmZvKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS53YXJuOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwud2FybikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZXJyb3I6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5lcnJvcikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnRyYWNlOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXBDb2xsYXBzZWQ6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLnZlcmJvc2UpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwQ29sbGFwc2VkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgTG9nVHlwZS5ncm91cDpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXAuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwRW5kOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwRW5kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnRpbWU6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgICAgdmFyIG1zID0gYXJnc1sxXSAqIDEwMDAgKyBhcmdzWzJdIC8gMTAwMDAwMDtcbiAgICAgICAgICB2YXIgbXNnID0gXCJbXCIuY29uY2F0KG5hbWUsIFwiXSBcIikuY29uY2F0KGFyZ3NbMF0sIFwiOiBcIikuY29uY2F0KG1zLCBcIiBtc1wiKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUubG9nVGltZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZ1RpbWUobXNnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgTG9nVHlwZS5wcm9maWxlOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5wcm9maWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5wcm9maWxlLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUucHJvZmlsZUVuZDpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUucHJvZmlsZUVuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUucHJvZmlsZUVuZC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmNsZWFyOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmNsZWFyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnN0YXR1czpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmluZm8pIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnN0YXR1cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTG9nVHlwZSBcIi5jb25jYXQodHlwZSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG52YXIgU3luY0JhaWxIb29rID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgdGFwYWJsZS9saWIvU3luY0JhaWxIb29rICovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanNcIik7XG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCIpLFxuICBMb2dnZXIgPSBfcmVxdWlyZS5Mb2dnZXI7XG52YXIgY3JlYXRlQ29uc29sZUxvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlQ29uc29sZUxvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qc1wiKTtcblxuLyoqIEB0eXBlIHtjcmVhdGVDb25zb2xlTG9nZ2VyLkxvZ2dlck9wdGlvbnN9ICovXG52YXIgY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zID0ge1xuICBsZXZlbDogXCJpbmZvXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY29uc29sZTogY29uc29sZVxufTtcbnZhciBjdXJyZW50RGVmYXVsdExvZ2dlciA9IGNyZWF0ZUNvbnNvbGVMb2dnZXIoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBsb2dnZXJcbiAqIEByZXR1cm5zIHtMb2dnZXJ9IGEgbG9nZ2VyXG4gKi9cbmV4cG9ydHMuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBMb2dnZXIoZnVuY3Rpb24gKHR5cGUsIGFyZ3MpIHtcbiAgICBpZiAoZXhwb3J0cy5ob29rcy5sb2cuY2FsbChuYW1lLCB0eXBlLCBhcmdzKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdXJyZW50RGVmYXVsdExvZ2dlcihuYW1lLCB0eXBlLCBhcmdzKTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChjaGlsZE5hbWUpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5nZXRMb2dnZXIoXCJcIi5jb25jYXQobmFtZSwgXCIvXCIpLmNvbmNhdChjaGlsZE5hbWUpKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Y3JlYXRlQ29uc29sZUxvZ2dlci5Mb2dnZXJPcHRpb25zfSBvcHRpb25zIG5ldyBvcHRpb25zLCBtZXJnZSB3aXRoIG9sZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0cy5jb25maWd1cmVEZWZhdWx0TG9nZ2VyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgX2V4dGVuZHMoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zLCBvcHRpb25zKTtcbiAgY3VycmVudERlZmF1bHRMb2dnZXIgPSBjcmVhdGVDb25zb2xlTG9nZ2VyKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucyk7XG59O1xuZXhwb3J0cy5ob29rcyA9IHtcbiAgbG9nOiBuZXcgU3luY0JhaWxIb29rKFtcIm9yaWdpblwiLCBcInR5cGVcIiwgXCJhcmdzXCJdKVxufTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG4vLyBUaGlzIGVudHJ5IG5lZWQgdG8gYmUgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2UgaXQgbmVlZCB0byBiZSBpc29sYXRlZCBhZ2FpbnN0IG90aGVyIG1vZHVsZXMgaW4gdGhlIGNodW5rLlxuIWZ1bmN0aW9uKCkge1xuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIHJlZXhwb3J0IGRlZmF1bHQgZXhwb3J0IGZyb20gbmFtZWQgbW9kdWxlICovIHdlYnBhY2tfbGliX2xvZ2dpbmdfcnVudGltZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fOyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciB3ZWJwYWNrX2xpYl9sb2dnaW5nX3J1bnRpbWVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHdlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiKTtcblxufSgpO1xudmFyIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X18gPSBleHBvcnRzO1xuZm9yKHZhciBpIGluIF9fd2VicGFja19leHBvcnRzX18pIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X19baV0gPSBfX3dlYnBhY2tfZXhwb3J0c19fW2ldO1xuaWYoX193ZWJwYWNrX2V4cG9ydHNfXy5fX2VzTW9kdWxlKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyB9KSgpXG47IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG4vLyBUaGUgZXJyb3Igb3ZlcmxheSBpcyBpbnNwaXJlZCAoYW5kIG1vc3RseSBjb3BpZWQpIGZyb20gQ3JlYXRlIFJlYWN0IEFwcCAoaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHApXG4vLyBUaGV5LCBpbiB0dXJuLCBnb3QgaW5zcGlyZWQgYnkgd2VicGFjay1ob3QtbWlkZGxld2FyZSAoaHR0cHM6Ly9naXRodWIuY29tL2dsZW5qYW1pbi93ZWJwYWNrLWhvdC1taWRkbGV3YXJlKS5cblxuaW1wb3J0IGFuc2lIVE1MIGZyb20gXCJhbnNpLWh0bWwtY29tbXVuaXR5XCI7XG5pbXBvcnQgeyBlbmNvZGUgfSBmcm9tIFwiaHRtbC1lbnRpdGllc1wiO1xuaW1wb3J0IHsgbGlzdGVuVG9SdW50aW1lRXJyb3IsIGxpc3RlblRvVW5oYW5kbGVkUmVqZWN0aW9uLCBwYXJzZUVycm9yVG9TdGFja3MgfSBmcm9tIFwiLi9vdmVybGF5L3J1bnRpbWUtZXJyb3IuanNcIjtcbmltcG9ydCBjcmVhdGVPdmVybGF5TWFjaGluZSBmcm9tIFwiLi9vdmVybGF5L3N0YXRlLW1hY2hpbmUuanNcIjtcbmltcG9ydCB7IGNvbnRhaW5lclN0eWxlLCBkaXNtaXNzQnV0dG9uU3R5bGUsIGhlYWRlclN0eWxlLCBpZnJhbWVTdHlsZSwgbXNnU3R5bGVzLCBtc2dUZXh0U3R5bGUsIG1zZ1R5cGVTdHlsZSB9IGZyb20gXCIuL292ZXJsYXkvc3R5bGVzLmpzXCI7XG52YXIgY29sb3JzID0ge1xuICByZXNldDogW1widHJhbnNwYXJlbnRcIiwgXCJ0cmFuc3BhcmVudFwiXSxcbiAgYmxhY2s6IFwiMTgxODE4XCIsXG4gIHJlZDogXCJFMzYwNDlcIixcbiAgZ3JlZW46IFwiQjNDQjc0XCIsXG4gIHllbGxvdzogXCJGRkQwODBcIixcbiAgYmx1ZTogXCI3Q0FGQzJcIixcbiAgbWFnZW50YTogXCI3RkFDQ0FcIixcbiAgY3lhbjogXCJDM0MyRUZcIixcbiAgbGlnaHRncmV5OiBcIkVCRTdFM1wiLFxuICBkYXJrZ3JleTogXCI2RDc4OTFcIlxufTtcbmFuc2lIVE1MLnNldENvbG9ycyhjb2xvcnMpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZyAgfCB7IGZpbGU/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZzsgc3RhY2s/OiBzdHJpbmdbXSB9fSBpdGVtXG4gKiBAcmV0dXJucyB7eyBoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nIH19XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFByb2JsZW0odHlwZSwgaXRlbSkge1xuICB2YXIgaGVhZGVyID0gdHlwZSA9PT0gXCJ3YXJuaW5nXCIgPyBcIldBUk5JTkdcIiA6IFwiRVJST1JcIjtcbiAgdmFyIGJvZHkgPSBcIlwiO1xuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBib2R5ICs9IGl0ZW07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpbGUgPSBpdGVtLmZpbGUgfHwgXCJcIjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICB2YXIgbW9kdWxlTmFtZSA9IGl0ZW0ubW9kdWxlTmFtZSA/IGl0ZW0ubW9kdWxlTmFtZS5pbmRleE9mKFwiIVwiKSAhPT0gLTEgPyBcIlwiLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUucmVwbGFjZSgvXihcXHN8XFxTKSohLywgXCJcIiksIFwiIChcIikuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZSwgXCIpXCIpIDogXCJcIi5jb25jYXQoaXRlbS5tb2R1bGVOYW1lKSA6IFwiXCI7XG4gICAgdmFyIGxvYyA9IGl0ZW0ubG9jO1xuICAgIGhlYWRlciArPSBcIlwiLmNvbmNhdChtb2R1bGVOYW1lIHx8IGZpbGUgPyBcIiBpbiBcIi5jb25jYXQobW9kdWxlTmFtZSA/IFwiXCIuY29uY2F0KG1vZHVsZU5hbWUpLmNvbmNhdChmaWxlID8gXCIgKFwiLmNvbmNhdChmaWxlLCBcIilcIikgOiBcIlwiKSA6IGZpbGUpLmNvbmNhdChsb2MgPyBcIiBcIi5jb25jYXQobG9jKSA6IFwiXCIpIDogXCJcIik7XG4gICAgYm9keSArPSBpdGVtLm1lc3NhZ2UgfHwgXCJcIjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLnN0YWNrKSkge1xuICAgIGl0ZW0uc3RhY2suZm9yRWFjaChmdW5jdGlvbiAoc3RhY2spIHtcbiAgICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgYm9keSArPSBcIlxcclxcblwiLmNvbmNhdChzdGFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICBib2R5OiBib2R5XG4gIH07XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ3JlYXRlT3ZlcmxheU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbH0gdHJ1c3RlZFR5cGVzUG9saWN5TmFtZVxuICogQHByb3BlcnR5IHtib29sZWFuIHwgKGVycm9yOiBFcnJvcikgPT4gdm9pZH0gW2NhdGNoUnVudGltZUVycm9yXVxuICovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7Q3JlYXRlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbiBjcmVhdGVPdmVybGF5KG9wdGlvbnMpIHtcbiAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXG4gIHZhciBpZnJhbWVDb250YWluZXJFbGVtZW50O1xuICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cbiAgdmFyIGNvbnRhaW5lckVsZW1lbnQ7XG4gIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuICB2YXIgaGVhZGVyRWxlbWVudDtcbiAgLyoqIEB0eXBlIHtBcnJheTwoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHZvaWQ+fSAqL1xuICB2YXIgb25Mb2FkUXVldWUgPSBbXTtcbiAgLyoqIEB0eXBlIHtUcnVzdGVkVHlwZVBvbGljeSB8IHVuZGVmaW5lZH0gKi9cbiAgdmFyIG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3k7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSkge1xuICAgIC8vIEVuYWJsZSBUcnVzdGVkIFR5cGVzIGlmIHRoZXkgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBicm93c2VyLlxuICAgIGlmICh3aW5kb3cudHJ1c3RlZFR5cGVzKSB7XG4gICAgICBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5ID0gd2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSB8fCBcIndlYnBhY2stZGV2LXNlcnZlciNvdmVybGF5XCIsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogZnVuY3Rpb24gY3JlYXRlSFRNTCh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuaWQgPSBcIndlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheVwiO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3JjID0gXCJhYm91dDpibGFua1wiO1xuICAgIGFwcGx5U3R5bGUoaWZyYW1lQ29udGFpbmVyRWxlbWVudCwgaWZyYW1lU3R5bGUpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRlbnRFbGVtZW50ID0gLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbiAgICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50LmNvbnRlbnREb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyRWxlbWVudCA9IC8qKiBAdHlwZSB7RG9jdW1lbnR9ICovXG4gICAgICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5jb250ZW50RG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmlkID0gXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItY2xpZW50LW92ZXJsYXktZGl2XCI7XG4gICAgICBhcHBseVN0eWxlKGNvbnRlbnRFbGVtZW50LCBjb250YWluZXJTdHlsZSk7XG4gICAgICBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGhlYWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJDb21waWxlZCB3aXRoIHByb2JsZW1zOlwiO1xuICAgICAgYXBwbHlTdHlsZShoZWFkZXJFbGVtZW50LCBoZWFkZXJTdHlsZSk7XG4gICAgICB2YXIgY2xvc2VCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFwcGx5U3R5bGUoY2xvc2VCdXR0b25FbGVtZW50LCBkaXNtaXNzQnV0dG9uU3R5bGUpO1xuICAgICAgY2xvc2VCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwiw5dcIjtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hcmlhTGFiZWwgPSBcIkRpc21pc3NcIjtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgb3ZlcmxheVNlcnZpY2Uuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuICAgICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25FbGVtZW50KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuICAgICAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudH0gKi9cbiAgICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuY29udGVudERvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xuICAgICAgb25Mb2FkUXVldWUuZm9yRWFjaChmdW5jdGlvbiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZCggLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi9jb250ZW50RWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIG9uTG9hZFF1ZXVlID0gW107XG5cbiAgICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkfSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZU92ZXJsYXlFeGlzdHMoY2FsbGJhY2ssIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpIHtcbiAgICBpZiAoY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgLy8gRXZlcnl0aGluZyBpcyByZWFkeSwgY2FsbCB0aGUgY2FsbGJhY2sgcmlnaHQgYXdheS5cbiAgICAgIGNhbGxiYWNrKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkxvYWRRdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICBpZiAoaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVDb250YWluZXIodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSk7XG4gIH1cblxuICAvLyBTdWNjZXNzZnVsIGNvbXBpbGF0aW9uLlxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIGlmICghaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFuZCByZXNldCBpbnRlcm5hbCBzdGF0ZS5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuICAgIGNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgLy8gQ29tcGlsYXRpb24gd2l0aCBlcnJvcnMgKGUuZy4gc3ludGF4IGVycm9yIG9yIG1pc3NpbmcgbW9kdWxlcykuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZyAgfCB7IG1vZHVsZUlkZW50aWZpZXI/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9Pn0gbWVzc2FnZXNcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gICAqIEBwYXJhbSB7J2J1aWxkJyB8ICdydW50aW1lJ30gbWVzc2FnZVNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdyh0eXBlLCBtZXNzYWdlcywgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZSwgbWVzc2FnZVNvdXJjZSkge1xuICAgIGVuc3VyZU92ZXJsYXlFeGlzdHMoZnVuY3Rpb24gKCkge1xuICAgICAgaGVhZGVyRWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlU291cmNlID09PSBcInJ1bnRpbWVcIiA/IFwiVW5jYXVnaHQgcnVudGltZSBlcnJvcnM6XCIgOiBcIkNvbXBpbGVkIHdpdGggcHJvYmxlbXM6XCI7XG4gICAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlbnRyeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNnU3R5bGUgPSB0eXBlID09PSBcIndhcm5pbmdcIiA/IG1zZ1N0eWxlcy53YXJuaW5nIDogbXNnU3R5bGVzLmVycm9yO1xuICAgICAgICBhcHBseVN0eWxlKGVudHJ5RWxlbWVudCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtc2dTdHlsZSksIHt9LCB7XG4gICAgICAgICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMS41cmVtIDFyZW1cIlxuICAgICAgICB9KSk7XG4gICAgICAgIHZhciB0eXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBfZm9ybWF0UHJvYmxlbSA9IGZvcm1hdFByb2JsZW0odHlwZSwgbWVzc2FnZSksXG4gICAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuICAgICAgICB0eXBlRWxlbWVudC5pbm5lclRleHQgPSBoZWFkZXI7XG4gICAgICAgIGFwcGx5U3R5bGUodHlwZUVsZW1lbnQsIG1zZ1R5cGVTdHlsZSk7XG4gICAgICAgIGlmIChtZXNzYWdlLm1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBhcHBseVN0eWxlKHR5cGVFbGVtZW50LCB7XG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gZWxlbWVudC5kYXRhc2V0IG5vdCBzdXBwb3J0ZWQgaW4gSUVcbiAgICAgICAgICB0eXBlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhbi1vcGVuXCIsIHRydWUpO1xuICAgICAgICAgIHR5cGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmZXRjaChcIi93ZWJwYWNrLWRldi1zZXJ2ZXIvb3Blbi1lZGl0b3I/ZmlsZU5hbWU9XCIuY29uY2F0KG1lc3NhZ2UubW9kdWxlSWRlbnRpZmllcikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBpdCBsb29rIHNpbWlsYXIgdG8gb3VyIHRlcm1pbmFsLlxuICAgICAgICB2YXIgdGV4dCA9IGFuc2lIVE1MKGVuY29kZShib2R5KSk7XG4gICAgICAgIHZhciBtZXNzYWdlVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBseVN0eWxlKG1lc3NhZ2VUZXh0Tm9kZSwgbXNnVGV4dFN0eWxlKTtcbiAgICAgICAgbWVzc2FnZVRleHROb2RlLmlubmVySFRNTCA9IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPyBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodGV4dCkgOiB0ZXh0O1xuICAgICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQodHlwZUVsZW1lbnQpO1xuICAgICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVudHJ5RWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9LCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKTtcbiAgfVxuICB2YXIgb3ZlcmxheVNlcnZpY2UgPSBjcmVhdGVPdmVybGF5TWFjaGluZSh7XG4gICAgc2hvd092ZXJsYXk6IGZ1bmN0aW9uIHNob3dPdmVybGF5KF9yZWYpIHtcbiAgICAgIHZhciBfcmVmJGxldmVsID0gX3JlZi5sZXZlbCxcbiAgICAgICAgbGV2ZWwgPSBfcmVmJGxldmVsID09PSB2b2lkIDAgPyBcImVycm9yXCIgOiBfcmVmJGxldmVsLFxuICAgICAgICBtZXNzYWdlcyA9IF9yZWYubWVzc2FnZXMsXG4gICAgICAgIG1lc3NhZ2VTb3VyY2UgPSBfcmVmLm1lc3NhZ2VTb3VyY2U7XG4gICAgICByZXR1cm4gc2hvdyhsZXZlbCwgbWVzc2FnZXMsIG9wdGlvbnMudHJ1c3RlZFR5cGVzUG9saWN5TmFtZSwgbWVzc2FnZVNvdXJjZSk7XG4gICAgfSxcbiAgICBoaWRlT3ZlcmxheTogaGlkZVxuICB9KTtcbiAgaWYgKG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Vycm9yIHwgdW5kZWZpbmVkfSBlcnJvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYWxsYmFja01lc3NhZ2VcbiAgICAgKi9cbiAgICB2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvciwgZmFsbGJhY2tNZXNzYWdlKSB7XG4gICAgICB2YXIgZXJyb3JPYmplY3QgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoZXJyb3IgfHwgZmFsbGJhY2tNZXNzYWdlKTtcbiAgICAgIHZhciBzaG91bGREaXNwbGF5ID0gdHlwZW9mIG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IoZXJyb3JPYmplY3QpIDogdHJ1ZTtcbiAgICAgIGlmIChzaG91bGREaXNwbGF5KSB7XG4gICAgICAgIG92ZXJsYXlTZXJ2aWNlLnNlbmQoe1xuICAgICAgICAgIHR5cGU6IFwiUlVOVElNRV9FUlJPUlwiLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JPYmplY3QubWVzc2FnZSxcbiAgICAgICAgICAgIHN0YWNrOiBwYXJzZUVycm9yVG9TdGFja3MoZXJyb3JPYmplY3QpXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsaXN0ZW5Ub1J1bnRpbWVFcnJvcihmdW5jdGlvbiAoZXJyb3JFdmVudCkge1xuICAgICAgLy8gZXJyb3IgcHJvcGVydHkgbWF5IGJlIGVtcHR5IGluIG9sZGVyIGJyb3dzZXIgbGlrZSBJRVxuICAgICAgdmFyIGVycm9yID0gZXJyb3JFdmVudC5lcnJvcixcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yRXZlbnQubWVzc2FnZTtcbiAgICAgIGlmICghZXJyb3IgJiYgIW1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGxpc3RlblRvVW5oYW5kbGVkUmVqZWN0aW9uKGZ1bmN0aW9uIChwcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgIHZhciByZWFzb24gPSBwcm9taXNlUmVqZWN0aW9uRXZlbnQucmVhc29uO1xuICAgICAgaGFuZGxlRXJyb3IocmVhc29uLCBcIlVua25vd24gcHJvbWlzZSByZWplY3Rpb24gcmVhc29uXCIpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBvdmVybGF5U2VydmljZTtcbn07XG5leHBvcnQgeyBmb3JtYXRQcm9ibGVtLCBjcmVhdGVPdmVybGF5IH07IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN0YXRlRGVmaW5pdGlvbnNcbiAqIEBwcm9wZXJ0eSB7e1tldmVudDogc3RyaW5nXTogeyB0YXJnZXQ6IHN0cmluZzsgYWN0aW9ucz86IEFycmF5PHN0cmluZz4gfX19IFtvbl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7e1tzdGF0ZTogc3RyaW5nXTogU3RhdGVEZWZpbml0aW9uc319IHN0YXRlc1xuICogQHByb3BlcnR5IHtvYmplY3R9IGNvbnRleHQ7XG4gKiBAcHJvcGVydHkge3N0cmluZ30gaW5pdGlhbFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSW1wbGVtZW50YXRpb25cbiAqIEBwcm9wZXJ0eSB7e1thY3Rpb25OYW1lOiBzdHJpbmddOiAoY3R4OiBvYmplY3QsIGV2ZW50OiBhbnkpID0+IG9iamVjdH19IGFjdGlvbnNcbiAqL1xuXG4vKipcbiAqIEEgc2ltcGxpZmllZCBgY3JlYXRlTWFjaGluZWAgZnJvbSBgQHhzdGF0ZS9mc21gIHdpdGggdGhlIGZvbGxvd2luZyBkaWZmZXJlbmNlczpcbiAqXG4gKiAgLSB0aGUgcmV0dXJuZWQgbWFjaGluZSBpcyB0ZWNobmljYWxseSBhIFwic2VydmljZVwiLiBObyBgaW50ZXJwcmV0KG1hY2hpbmUpLnN0YXJ0KClgIGlzIG5lZWRlZC5cbiAqICAtIHRoZSBzdGF0ZSBkZWZpbml0aW9uIG9ubHkgc3VwcG9ydCBgb25gIGFuZCB0YXJnZXQgbXVzdCBiZSBkZWNsYXJlZCB3aXRoIHsgdGFyZ2V0OiAnbmV4dFN0YXRlJywgYWN0aW9uczogW10gfSBleHBsaWNpdGx5LlxuICogIC0gZXZlbnQgcGFzc2VkIHRvIGBzZW5kYCBtdXN0IGJlIGFuIG9iamVjdCB3aXRoIGB0eXBlYCBwcm9wZXJ0eS5cbiAqICAtIGFjdGlvbnMgaW1wbGVtZW50YXRpb24gd2lsbCBiZSBbYXNzaWduIGFjdGlvbl0oaHR0cHM6Ly94c3RhdGUuanMub3JnL2RvY3MvZ3VpZGVzL2NvbnRleHQuaHRtbCNhc3NpZ24tYWN0aW9uKSBpZiB5b3UgcmV0dXJuIGFueSB2YWx1ZS5cbiAqICBEbyBub3QgcmV0dXJuIGFueXRoaW5nIGlmIHlvdSBqdXN0IHdhbnQgdG8gaW52b2tlIHNpZGUgZWZmZWN0LlxuICpcbiAqIFRoZSBnb2FsIG9mIHRoaXMgY3VzdG9tIGZ1bmN0aW9uIGlzIHRvIGF2b2lkIGluc3RhbGxpbmcgdGhlIGVudGlyZSBgJ3hzdGF0ZS9mc20nYCBwYWNrYWdlLCB3aGlsZSBlbmFibGluZyBtb2RlbGluZyB1c2luZ1xuICogc3RhdGUgbWFjaGluZS4gWW91IGNhbiBjb3B5IHRoZSBmaXJzdCBwYXJhbWV0ZXIgaW50byB0aGUgZWRpdG9yIGF0IGh0dHBzOi8vc3RhdGVseS5haS92aXogdG8gdmlzdWFsaXplIHRoZSBzdGF0ZSBtYWNoaW5lLlxuICpcbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9uc1xuICogQHBhcmFtIHtJbXBsZW1lbnRhdGlvbn0gaW1wbGVtZW50YXRpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTWFjaGluZShfcmVmLCBfcmVmMikge1xuICB2YXIgc3RhdGVzID0gX3JlZi5zdGF0ZXMsXG4gICAgY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICBpbml0aWFsID0gX3JlZi5pbml0aWFsO1xuICB2YXIgYWN0aW9ucyA9IF9yZWYyLmFjdGlvbnM7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBpbml0aWFsO1xuICB2YXIgY3VycmVudENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4ge1xuICAgIHNlbmQ6IGZ1bmN0aW9uIHNlbmQoZXZlbnQpIHtcbiAgICAgIHZhciBjdXJyZW50U3RhdGVPbiA9IHN0YXRlc1tjdXJyZW50U3RhdGVdLm9uO1xuICAgICAgdmFyIHRyYW5zaXRpb25Db25maWcgPSBjdXJyZW50U3RhdGVPbiAmJiBjdXJyZW50U3RhdGVPbltldmVudC50eXBlXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uQ29uZmlnKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IHRyYW5zaXRpb25Db25maWcudGFyZ2V0O1xuICAgICAgICBpZiAodHJhbnNpdGlvbkNvbmZpZy5hY3Rpb25zKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbkNvbmZpZy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb25JbXBsID0gYWN0aW9uc1thY3ROYW1lXTtcbiAgICAgICAgICAgIHZhciBuZXh0Q29udGV4dFZhbHVlID0gYWN0aW9uSW1wbCAmJiBhY3Rpb25JbXBsKGN1cnJlbnRDb250ZXh0LCBldmVudCk7XG4gICAgICAgICAgICBpZiAobmV4dENvbnRleHRWYWx1ZSkge1xuICAgICAgICAgICAgICBjdXJyZW50Q29udGV4dCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY3VycmVudENvbnRleHQpLCBuZXh0Q29udGV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1hY2hpbmU7IiwiLyoqXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAqL1xuZnVuY3Rpb24gcGFyc2VFcnJvclRvU3RhY2tzKGVycm9yKSB7XG4gIGlmICghZXJyb3IgfHwgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInBhcnNlRXJyb3JUb1N0YWNrcyBleHBlY3RzIEVycm9yIG9iamVjdFwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVycm9yLnN0YWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpLmZpbHRlcihmdW5jdGlvbiAoc3RhY2spIHtcbiAgICAgIHJldHVybiBzdGFjayAhPT0gXCJFcnJvcjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGNhbGxiYWNrIEVycm9yQ2FsbGJhY2tcbiAqIEBwYXJhbSB7RXJyb3JFdmVudH0gZXJyb3JcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBsaXN0ZW5Ub1J1bnRpbWVFcnJvcihjYWxsYmFjaykge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGNhbGxiYWNrKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBjYWxsYmFjayk7XG4gIH07XG59XG5cbi8qKlxuICogQGNhbGxiYWNrIFVuaGFuZGxlZFJlamVjdGlvbkNhbGxiYWNrXG4gKiBAcGFyYW0ge1Byb21pc2VSZWplY3Rpb25FdmVudH0gcmVqZWN0aW9uRXZlbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtVbmhhbmRsZWRSZWplY3Rpb25DYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gbGlzdGVuVG9VbmhhbmRsZWRSZWplY3Rpb24oY2FsbGJhY2spIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgY2FsbGJhY2spO1xuICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCBjYWxsYmFjayk7XG4gIH07XG59XG5leHBvcnQgeyBsaXN0ZW5Ub1J1bnRpbWVFcnJvciwgbGlzdGVuVG9VbmhhbmRsZWRSZWplY3Rpb24sIHBhcnNlRXJyb3JUb1N0YWNrcyB9OyIsImltcG9ydCBjcmVhdGVNYWNoaW5lIGZyb20gXCIuL2ZzbS5qc1wiO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNob3dPdmVybGF5RGF0YVxuICogQHByb3BlcnR5IHsnd2FybmluZycgfCAnZXJyb3InfSBsZXZlbFxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmcgIHwgeyBtb2R1bGVJZGVudGlmaWVyPzogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nLCBsb2M/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfT59IG1lc3NhZ2VzXG4gKiBAcHJvcGVydHkgeydidWlsZCcgfCAncnVudGltZSd9IG1lc3NhZ2VTb3VyY2VcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENyZWF0ZU92ZXJsYXlNYWNoaW5lT3B0aW9uc1xuICogQHByb3BlcnR5IHsoZGF0YTogU2hvd092ZXJsYXlEYXRhKSA9PiB2b2lkfSBzaG93T3ZlcmxheVxuICogQHByb3BlcnR5IHsoKSA9PiB2b2lkfSBoaWRlT3ZlcmxheVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtDcmVhdGVPdmVybGF5TWFjaGluZU9wdGlvbnN9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZU92ZXJsYXlNYWNoaW5lID0gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheU1hY2hpbmUob3B0aW9ucykge1xuICB2YXIgaGlkZU92ZXJsYXkgPSBvcHRpb25zLmhpZGVPdmVybGF5LFxuICAgIHNob3dPdmVybGF5ID0gb3B0aW9ucy5zaG93T3ZlcmxheTtcbiAgdmFyIG92ZXJsYXlNYWNoaW5lID0gY3JlYXRlTWFjaGluZSh7XG4gICAgaW5pdGlhbDogXCJoaWRkZW5cIixcbiAgICBjb250ZXh0OiB7XG4gICAgICBsZXZlbDogXCJlcnJvclwiLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgbWVzc2FnZVNvdXJjZTogXCJidWlsZFwiXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIGhpZGRlbjoge1xuICAgICAgICBvbjoge1xuICAgICAgICAgIEJVSUxEX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheUJ1aWxkRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcInNldE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJVTlRJTUVfRVJST1I6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJkaXNwbGF5UnVudGltZUVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheUJ1aWxkRXJyb3I6IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBESVNNSVNTOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJkaXNtaXNzTWVzc2FnZXNcIiwgXCJoaWRlT3ZlcmxheVwiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgQlVJTERfRVJST1I6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJkaXNwbGF5QnVpbGRFcnJvclwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiYXBwZW5kTWVzc2FnZXNcIiwgXCJzaG93T3ZlcmxheVwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlSdW50aW1lRXJyb3I6IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBESVNNSVNTOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJkaXNtaXNzTWVzc2FnZXNcIiwgXCJoaWRlT3ZlcmxheVwiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUlVOVElNRV9FUlJPUjoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImRpc3BsYXlSdW50aW1lRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFwcGVuZE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEJVSUxEX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheUJ1aWxkRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcInNldE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICBkaXNtaXNzTWVzc2FnZXM6IGZ1bmN0aW9uIGRpc21pc3NNZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIixcbiAgICAgICAgICBtZXNzYWdlU291cmNlOiBcImJ1aWxkXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBhcHBlbmRNZXNzYWdlczogZnVuY3Rpb24gYXBwZW5kTWVzc2FnZXMoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogY29udGV4dC5tZXNzYWdlcy5jb25jYXQoZXZlbnQubWVzc2FnZXMpLFxuICAgICAgICAgIGxldmVsOiBldmVudC5sZXZlbCB8fCBjb250ZXh0LmxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VTb3VyY2U6IGV2ZW50LnR5cGUgPT09IFwiUlVOVElNRV9FUlJPUlwiID8gXCJydW50aW1lXCIgOiBcImJ1aWxkXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzZXRNZXNzYWdlczogZnVuY3Rpb24gc2V0TWVzc2FnZXMoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogZXZlbnQubWVzc2FnZXMsXG4gICAgICAgICAgbGV2ZWw6IGV2ZW50LmxldmVsIHx8IGNvbnRleHQubGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZVNvdXJjZTogZXZlbnQudHlwZSA9PT0gXCJSVU5USU1FX0VSUk9SXCIgPyBcInJ1bnRpbWVcIiA6IFwiYnVpbGRcIlxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGhpZGVPdmVybGF5OiBoaWRlT3ZlcmxheSxcbiAgICAgIHNob3dPdmVybGF5OiBzaG93T3ZlcmxheVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdmVybGF5TWFjaGluZTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPdmVybGF5TWFjaGluZTsiLCIvLyBzdHlsZXMgYXJlIGluc3BpcmVkIGJ5IGByZWFjdC1lcnJvci1vdmVybGF5YFxuXG52YXIgbXNnU3R5bGVzID0ge1xuICBlcnJvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIwNiwgMTcsIDM4LCAwLjEpXCIsXG4gICAgY29sb3I6IFwiI2ZjY2ZjZlwiXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTEsIDI0NSwgMTgwLCAwLjEpXCIsXG4gICAgY29sb3I6IFwiI2ZiZjViNFwiXG4gIH1cbn07XG52YXIgaWZyYW1lU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMCxcbiAgd2lkdGg6IFwiMTAwdndcIixcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIGJvcmRlcjogXCJub25lXCIsXG4gIFwiei1pbmRleFwiOiA5OTk5OTk5OTk5XG59O1xudmFyIGNvbnRhaW5lclN0eWxlID0ge1xuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBib3R0b206IDAsXG4gIHdpZHRoOiBcIjEwMHZ3XCIsXG4gIGhlaWdodDogXCIxMDB2aFwiLFxuICBmb250U2l6ZTogXCJsYXJnZVwiLFxuICBwYWRkaW5nOiBcIjJyZW0gMnJlbSA0cmVtIDJyZW1cIixcbiAgbGluZUhlaWdodDogXCIxLjJcIixcbiAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxuICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuOSlcIixcbiAgY29sb3I6IFwid2hpdGVcIlxufTtcbnZhciBoZWFkZXJTdHlsZSA9IHtcbiAgY29sb3I6IFwiI2U4M2I0NlwiLFxuICBmb250U2l6ZTogXCIyZW1cIixcbiAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxuICBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcbiAgbWFyZ2luOiBcIjAgMnJlbSAycmVtIDBcIixcbiAgZmxleDogXCIwIDAgYXV0b1wiLFxuICBtYXhIZWlnaHQ6IFwiNTAlXCIsXG4gIG92ZXJmbG93OiBcImF1dG9cIlxufTtcbnZhciBkaXNtaXNzQnV0dG9uU3R5bGUgPSB7XG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgbGluZUhlaWdodDogXCIxcmVtXCIsXG4gIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgcmlnaHQ6IDAsXG4gIHRvcDogMCxcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIGJvcmRlcjogXCJub25lXCJcbn07XG52YXIgbXNnVHlwZVN0eWxlID0ge1xuICBjb2xvcjogXCIjZTgzYjQ2XCIsXG4gIGZvbnRTaXplOiBcIjEuMmVtXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiXG59O1xudmFyIG1zZ1RleHRTdHlsZSA9IHtcbiAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgZm9udFNpemU6IFwiMXJlbVwiLFxuICBmb250RmFtaWx5OiBcIk1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlXCJcbn07XG5leHBvcnQgeyBtc2dTdHlsZXMsIGlmcmFtZVN0eWxlLCBjb250YWluZXJTdHlsZSwgaGVhZGVyU3R5bGUsIGRpc21pc3NCdXR0b25TdHlsZSwgbXNnVHlwZVN0eWxlLCBtc2dUZXh0U3R5bGUgfTsiLCIvKiBnbG9iYWwgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18gKi9cblxuaW1wb3J0IFdlYlNvY2tldENsaWVudCBmcm9tIFwiLi9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qc1wiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vdXRpbHMvbG9nLmpzXCI7XG5cbi8vIHRoaXMgV2Vic29ja2V0Q2xpZW50IGlzIGhlcmUgYXMgYSBkZWZhdWx0IGZhbGxiYWNrLCBpbiBjYXNlIHRoZSBjbGllbnQgaXMgbm90IGluamVjdGVkXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbnZhciBDbGllbnQgPVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG50eXBlb2YgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18gIT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fLmRlZmF1bHQgOiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyA6IFdlYlNvY2tldENsaWVudDtcbi8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbnZhciByZXRyaWVzID0gMDtcbnZhciBtYXhSZXRyaWVzID0gMTA7XG5cbi8vIEluaXRpYWxpemVkIGNsaWVudCBpcyBleHBvcnRlZCBzbyBleHRlcm5hbCBjb25zdW1lcnMgY2FuIHV0aWxpemUgdGhlIHNhbWUgaW5zdGFuY2Vcbi8vIEl0IGlzIG11dGFibGUgdG8gZW5mb3JjZSBzaW5nbGV0b25cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5leHBvcnQgdmFyIGNsaWVudCA9IG51bGw7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHt7IFtoYW5kbGVyOiBzdHJpbmddOiAoZGF0YT86IGFueSwgcGFyYW1zPzogYW55KSA9PiBhbnkgfX0gaGFuZGxlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmVjb25uZWN0XVxuICovXG52YXIgc29ja2V0ID0gZnVuY3Rpb24gaW5pdFNvY2tldCh1cmwsIGhhbmRsZXJzLCByZWNvbm5lY3QpIHtcbiAgY2xpZW50ID0gbmV3IENsaWVudCh1cmwpO1xuICBjbGllbnQub25PcGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXRyaWVzID0gMDtcbiAgICBpZiAodHlwZW9mIHJlY29ubmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbWF4UmV0cmllcyA9IHJlY29ubmVjdDtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJldHJpZXMgPT09IDApIHtcbiAgICAgIGhhbmRsZXJzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIHJlY29ubmVjdC5cbiAgICBjbGllbnQgPSBudWxsO1xuXG4gICAgLy8gQWZ0ZXIgMTAgcmV0cmllcyBzdG9wIHRyeWluZywgdG8gcHJldmVudCBsb2dzcGFtLlxuICAgIGlmIChyZXRyaWVzIDwgbWF4UmV0cmllcykge1xuICAgICAgLy8gRXhwb25lbnRpYWxseSBpbmNyZWFzZSB0aW1lb3V0IHRvIHJlY29ubmVjdC5cbiAgICAgIC8vIFJlc3BlY3RmdWxseSBjb3BpZWQgZnJvbSB0aGUgcGFja2FnZSBgZ290YC5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcbiAgICAgIHZhciByZXRyeUluTXMgPSAxMDAwICogTWF0aC5wb3coMiwgcmV0cmllcykgKyBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgICAgcmV0cmllcyArPSAxO1xuICAgICAgbG9nLmluZm8oXCJUcnlpbmcgdG8gcmVjb25uZWN0Li4uXCIpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNvY2tldCh1cmwsIGhhbmRsZXJzLCByZWNvbm5lY3QpO1xuICAgICAgfSwgcmV0cnlJbk1zKTtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQub25NZXNzYWdlKFxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIGlmIChoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKSB7XG4gICAgICBoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5wYXJhbXMpO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc29ja2V0OyIsIi8qKlxuICogQHBhcmFtIHt7IHByb3RvY29sPzogc3RyaW5nLCBhdXRoPzogc3RyaW5nLCBob3N0bmFtZT86IHN0cmluZywgcG9ydD86IHN0cmluZywgcGF0aG5hbWU/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgaGFzaD86IHN0cmluZywgc2xhc2hlcz86IGJvb2xlYW4gfX0gb2JqVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmb3JtYXQob2JqVVJMKSB7XG4gIHZhciBwcm90b2NvbCA9IG9ialVSTC5wcm90b2NvbCB8fCBcIlwiO1xuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gXCI6XCIpIHtcbiAgICBwcm90b2NvbCArPSBcIjpcIjtcbiAgfVxuICB2YXIgYXV0aCA9IG9ialVSTC5hdXRoIHx8IFwiXCI7XG4gIGlmIChhdXRoKSB7XG4gICAgYXV0aCA9IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICBhdXRoID0gYXV0aC5yZXBsYWNlKC8lM0EvaSwgXCI6XCIpO1xuICAgIGF1dGggKz0gXCJAXCI7XG4gIH1cbiAgdmFyIGhvc3QgPSBcIlwiO1xuICBpZiAob2JqVVJMLmhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAob2JqVVJMLmhvc3RuYW1lLmluZGV4T2YoXCI6XCIpID09PSAtMSA/IG9ialVSTC5ob3N0bmFtZSA6IFwiW1wiLmNvbmNhdChvYmpVUkwuaG9zdG5hbWUsIFwiXVwiKSk7XG4gICAgaWYgKG9ialVSTC5wb3J0KSB7XG4gICAgICBob3N0ICs9IFwiOlwiLmNvbmNhdChvYmpVUkwucG9ydCk7XG4gICAgfVxuICB9XG4gIHZhciBwYXRobmFtZSA9IG9ialVSTC5wYXRobmFtZSB8fCBcIlwiO1xuICBpZiAob2JqVVJMLnNsYXNoZXMpIHtcbiAgICBob3N0ID0gXCIvL1wiLmNvbmNhdChob3N0IHx8IFwiXCIpO1xuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZS5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XG4gICAgICBwYXRobmFtZSA9IFwiL1wiLmNvbmNhdChwYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9IFwiXCI7XG4gIH1cbiAgdmFyIHNlYXJjaCA9IG9ialVSTC5zZWFyY2ggfHwgXCJcIjtcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2guY2hhckF0KDApICE9PSBcIj9cIikge1xuICAgIHNlYXJjaCA9IFwiP1wiLmNvbmNhdChzZWFyY2gpO1xuICB9XG4gIHZhciBoYXNoID0gb2JqVVJMLmhhc2ggfHwgXCJcIjtcbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09IFwiI1wiKSB7XG4gICAgaGFzaCA9IFwiI1wiLmNvbmNhdChoYXNoKTtcbiAgfVxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gIH0pO1xuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZShcIiNcIiwgXCIlMjNcIik7XG4gIHJldHVybiBcIlwiLmNvbmNhdChwcm90b2NvbCkuY29uY2F0KGhvc3QpLmNvbmNhdChwYXRobmFtZSkuY29uY2F0KHNlYXJjaCkuY29uY2F0KGhhc2gpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VVJMICYgeyBmcm9tQ3VycmVudFNjcmlwdD86IGJvb2xlYW4gfX0gcGFyc2VkVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjcmVhdGVTb2NrZXRVUkwocGFyc2VkVVJMKSB7XG4gIHZhciBob3N0bmFtZSA9IHBhcnNlZFVSTC5ob3N0bmFtZTtcblxuICAvLyBOb2RlLmpzIG1vZHVsZSBwYXJzZXMgaXQgYXMgYDo6YFxuICAvLyBgbmV3IFVSTCh1cmxTdHJpbmcsIFtiYXNlVVJMU3RyaW5nXSlgIHBhcnNlcyBpdCBhcyAnWzo6XSdcbiAgdmFyIGlzSW5BZGRyQW55ID0gaG9zdG5hbWUgPT09IFwiMC4wLjAuMFwiIHx8IGhvc3RuYW1lID09PSBcIjo6XCIgfHwgaG9zdG5hbWUgPT09IFwiWzo6XVwiO1xuXG4gIC8vIHdoeSBkbyB3ZSBuZWVkIHRoaXMgY2hlY2s/XG4gIC8vIGhvc3RuYW1lIG4vYSBmb3IgZmlsZSBwcm90b2NvbCAoZXhhbXBsZSwgd2hlbiB1c2luZyBlbGVjdHJvbiwgaW9uaWMpXG4gIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay1kZXYtc2VydmVyL3B1bGwvMzg0XG4gIGlmIChpc0luQWRkckFueSAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIikgPT09IDApIHtcbiAgICBob3N0bmFtZSA9IHNlbGYubG9jYXRpb24uaG9zdG5hbWU7XG4gIH1cbiAgdmFyIHNvY2tldFVSTFByb3RvY29sID0gcGFyc2VkVVJMLnByb3RvY29sIHx8IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgLy8gV2hlbiBodHRwcyBpcyB1c2VkIGluIHRoZSBhcHAsIHNlY3VyZSB3ZWIgc29ja2V0cyBhcmUgYWx3YXlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBicm93c2VyIGRvZXNuJ3QgYWNjZXB0IG5vbi1zZWN1cmUgd2ViIHNvY2tldHMuXG4gIGlmIChzb2NrZXRVUkxQcm90b2NvbCA9PT0gXCJhdXRvOlwiIHx8IGhvc3RuYW1lICYmIGlzSW5BZGRyQW55ICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICBzb2NrZXRVUkxQcm90b2NvbCA9IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7XG4gIH1cbiAgc29ja2V0VVJMUHJvdG9jb2wgPSBzb2NrZXRVUkxQcm90b2NvbC5yZXBsYWNlKC9eKD86aHR0cHwuKy1leHRlbnNpb258ZmlsZSkvaSwgXCJ3c1wiKTtcbiAgdmFyIHNvY2tldFVSTEF1dGggPSBcIlwiO1xuXG4gIC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxzdHJpbmddKWAgZG9lc24ndCBoYXZlIGBhdXRoYCBwcm9wZXJ0eVxuICAvLyBQYXJzZSBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBpbiBjYXNlIHdlIG5lZWQgdGhlbVxuICBpZiAocGFyc2VkVVJMLnVzZXJuYW1lKSB7XG4gICAgc29ja2V0VVJMQXV0aCA9IHBhcnNlZFVSTC51c2VybmFtZTtcblxuICAgIC8vIFNpbmNlIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb24gZG9lcyBub3QgYWxsb3cgZW1wdHkgdXNlcm5hbWUsXG4gICAgLy8gd2Ugb25seSBpbmNsdWRlIHBhc3N3b3JkIGlmIHRoZSB1c2VybmFtZSBpcyBub3QgZW1wdHkuXG4gICAgaWYgKHBhcnNlZFVSTC5wYXNzd29yZCkge1xuICAgICAgLy8gUmVzdWx0OiA8dXNlcm5hbWU+OjxwYXNzd29yZD5cbiAgICAgIHNvY2tldFVSTEF1dGggPSBzb2NrZXRVUkxBdXRoLmNvbmNhdChcIjpcIiwgcGFyc2VkVVJMLnBhc3N3b3JkKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbiBjYXNlIHRoZSBob3N0IGlzIGEgcmF3IElQdjYgYWRkcmVzcywgaXQgY2FuIGJlIGVuY2xvc2VkIGluXG4gIC8vIHRoZSBicmFja2V0cyBhcyB0aGUgYnJhY2tldHMgYXJlIG5lZWRlZCBpbiB0aGUgZmluYWwgVVJMIHN0cmluZy5cbiAgLy8gTmVlZCB0byByZW1vdmUgdGhvc2UgYXMgdXJsLmZvcm1hdCBibGluZGx5IGFkZHMgaXRzIG93biBzZXQgb2YgYnJhY2tldHNcbiAgLy8gaWYgdGhlIGhvc3Qgc3RyaW5nIGNvbnRhaW5zIGNvbG9ucy4gVGhhdCB3b3VsZCBsZWFkIHRvIG5vbi13b3JraW5nXG4gIC8vIGRvdWJsZSBicmFja2V0cyAoZS5nLiBbWzo6XV0pIGhvc3RcbiAgLy9cbiAgLy8gQWxsIG9mIHRoZXNlIHdlYiBzb2NrZXQgdXJsIHBhcmFtcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgaW4gdGhyb3VnaCByZXNvdXJjZVF1ZXJ5LFxuICAvLyBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBpZiB0aGV5IGFyZSBub3QgcHJvdmlkZWRcbiAgdmFyIHNvY2tldFVSTEhvc3RuYW1lID0gKGhvc3RuYW1lIHx8IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgfHwgXCJsb2NhbGhvc3RcIikucmVwbGFjZSgvXlxcWyguKilcXF0kLywgXCIkMVwiKTtcbiAgdmFyIHNvY2tldFVSTFBvcnQgPSBwYXJzZWRVUkwucG9ydDtcbiAgaWYgKCFzb2NrZXRVUkxQb3J0IHx8IHNvY2tldFVSTFBvcnQgPT09IFwiMFwiKSB7XG4gICAgc29ja2V0VVJMUG9ydCA9IHNlbGYubG9jYXRpb24ucG9ydDtcbiAgfVxuXG4gIC8vIElmIHBhdGggaXMgcHJvdmlkZWQgaXQnbGwgYmUgcGFzc2VkIGluIHZpYSB0aGUgcmVzb3VyY2VRdWVyeSBhcyBhXG4gIC8vIHF1ZXJ5IHBhcmFtIHNvIGl0IGhhcyB0byBiZSBwYXJzZWQgb3V0IG9mIHRoZSBxdWVyeXN0cmluZyBpbiBvcmRlciBmb3IgdGhlXG4gIC8vIGNsaWVudCB0byBvcGVuIHRoZSBzb2NrZXQgdG8gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG4gIHZhciBzb2NrZXRVUkxQYXRobmFtZSA9IFwiL3dzXCI7XG4gIGlmIChwYXJzZWRVUkwucGF0aG5hbWUgJiYgIXBhcnNlZFVSTC5mcm9tQ3VycmVudFNjcmlwdCkge1xuICAgIHNvY2tldFVSTFBhdGhuYW1lID0gcGFyc2VkVVJMLnBhdGhuYW1lO1xuICB9XG4gIHJldHVybiBmb3JtYXQoe1xuICAgIHByb3RvY29sOiBzb2NrZXRVUkxQcm90b2NvbCxcbiAgICBhdXRoOiBzb2NrZXRVUkxBdXRoLFxuICAgIGhvc3RuYW1lOiBzb2NrZXRVUkxIb3N0bmFtZSxcbiAgICBwb3J0OiBzb2NrZXRVUkxQb3J0LFxuICAgIHBhdGhuYW1lOiBzb2NrZXRVUkxQYXRobmFtZSxcbiAgICBzbGFzaGVzOiB0cnVlXG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU29ja2V0VVJMOyIsIi8qKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpIHtcbiAgLy8gYGRvY3VtZW50LmN1cnJlbnRTY3JpcHRgIGlzIHRoZSBtb3N0IGFjY3VyYXRlIHdheSB0byBmaW5kIHRoZSBjdXJyZW50IHNjcmlwdCxcbiAgLy8gYnV0IGlzIG5vdCBzdXBwb3J0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfVxuXG4gIC8vIEZhbGxiYWNrIHRvIGdldHRpbmcgYWxsIHNjcmlwdHMgcnVubmluZyBpbiB0aGUgZG9jdW1lbnQuXG4gIHZhciBzY3JpcHRFbGVtZW50cyA9IGRvY3VtZW50LnNjcmlwdHMgfHwgW107XG4gIHZhciBzY3JpcHRFbGVtZW50c1dpdGhTcmMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoc2NyaXB0RWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9KTtcbiAgaWYgKHNjcmlwdEVsZW1lbnRzV2l0aFNyYy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGN1cnJlbnRTY3JpcHQgPSBzY3JpcHRFbGVtZW50c1dpdGhTcmNbc2NyaXB0RWxlbWVudHNXaXRoU3JjLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBjdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfVxuXG4gIC8vIEZhaWwgYXMgdGhlcmUgd2FzIG5vIHNjcmlwdCB0byB1c2UuXG4gIHRocm93IG5ldyBFcnJvcihcIlt3ZWJwYWNrLWRldi1zZXJ2ZXJdIEZhaWxlZCB0byBnZXQgY3VycmVudCBzY3JpcHQgc291cmNlLlwiKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnRTY3JpcHRTb3VyY2U7IiwiaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vbW9kdWxlcy9sb2dnZXIvaW5kZXguanNcIjtcbnZhciBuYW1lID0gXCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjtcbi8vIGRlZmF1bHQgbGV2ZWwgaXMgc2V0IG9uIHRoZSBjbGllbnQgc2lkZSwgc28gaXQgZG9lcyBub3QgbmVlZFxuLy8gdG8gYmUgc2V0IGJ5IHRoZSBDTEkgb3IgQVBJXG52YXIgZGVmYXVsdExldmVsID0gXCJpbmZvXCI7XG5cbi8vIG9wdGlvbnMgbmV3IG9wdGlvbnMsIG1lcmdlIHdpdGggb2xkIG9wdGlvbnNcbi8qKlxuICogQHBhcmFtIHtmYWxzZSB8IHRydWUgfCBcIm5vbmVcIiB8IFwiZXJyb3JcIiB8IFwid2FyblwiIHwgXCJpbmZvXCIgfCBcImxvZ1wiIHwgXCJ2ZXJib3NlXCJ9IGxldmVsXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHtcbiAgbG9nZ2VyLmNvbmZpZ3VyZURlZmF1bHRMb2dnZXIoe1xuICAgIGxldmVsOiBsZXZlbFxuICB9KTtcbn1cbnNldExvZ0xldmVsKGRlZmF1bHRMZXZlbCk7XG52YXIgbG9nID0gbG9nZ2VyLmdldExvZ2dlcihuYW1lKTtcbnZhciBsb2dFbmFibGVkRmVhdHVyZXMgPSBmdW5jdGlvbiBsb2dFbmFibGVkRmVhdHVyZXMoZmVhdHVyZXMpIHtcbiAgdmFyIGVuYWJsZWRGZWF0dXJlcyA9IE9iamVjdC5rZXlzKGZlYXR1cmVzKTtcbiAgaWYgKCFmZWF0dXJlcyB8fCBlbmFibGVkRmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBsb2dTdHJpbmcgPSBcIlNlcnZlciBzdGFydGVkOlwiO1xuXG4gIC8vIFNlcnZlciBzdGFydGVkOiBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGVuYWJsZWQsIExpdmUgUmVsb2FkaW5nIGVuYWJsZWQsIE92ZXJsYXkgZGlzYWJsZWQuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZW5hYmxlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGVuYWJsZWRGZWF0dXJlc1tpXTtcbiAgICBsb2dTdHJpbmcgKz0gXCIgXCIuY29uY2F0KGtleSwgXCIgXCIpLmNvbmNhdChmZWF0dXJlc1trZXldID8gXCJlbmFibGVkXCIgOiBcImRpc2FibGVkXCIsIFwiLFwiKTtcbiAgfVxuICAvLyByZXBsYWNlIGxhc3QgY29tbWEgd2l0aCBhIHBlcmlvZFxuICBsb2dTdHJpbmcgPSBsb2dTdHJpbmcuc2xpY2UoMCwgLTEpLmNvbmNhdChcIi5cIik7XG4gIGxvZy5pbmZvKGxvZ1N0cmluZyk7XG59O1xuZXhwb3J0IHsgbG9nLCBsb2dFbmFibGVkRmVhdHVyZXMsIHNldExvZ0xldmVsIH07IiwiaW1wb3J0IGdldEN1cnJlbnRTY3JpcHRTb3VyY2UgZnJvbSBcIi4vZ2V0Q3VycmVudFNjcmlwdFNvdXJjZS5qc1wiO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZVF1ZXJ5XG4gKiBAcmV0dXJucyB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIH19XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVVJMKHJlc291cmNlUXVlcnkpIHtcbiAgLyoqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9fSAqL1xuICB2YXIgb3B0aW9ucyA9IHt9O1xuICBpZiAodHlwZW9mIHJlc291cmNlUXVlcnkgPT09IFwic3RyaW5nXCIgJiYgcmVzb3VyY2VRdWVyeSAhPT0gXCJcIikge1xuICAgIHZhciBzZWFyY2hQYXJhbXMgPSByZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpLnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhaXIgPSBzZWFyY2hQYXJhbXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgb3B0aW9uc1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRWxzZSwgZ2V0IHRoZSB1cmwgZnJvbSB0aGUgPHNjcmlwdD4gdGhpcyBmaWxlIHdhcyBjYWxsZWQgd2l0aC5cbiAgICB2YXIgc2NyaXB0U291cmNlID0gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpO1xuICAgIHZhciBzY3JpcHRTb3VyY2VVUkw7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlciBgYmFzZVVSTGAgd2l0aCBgd2luZG93LmxvY2F0aW9uLmhyZWZgLFxuICAgICAgLy8gaXMgdG8gYWxsb3cgcGFyc2luZyBvZiBwYXRoLXJlbGF0aXZlIG9yIHByb3RvY29sLXJlbGF0aXZlIFVSTHMsXG4gICAgICAvLyBhbmQgd2lsbCBoYXZlIG5vIGVmZmVjdCBpZiBgc2NyaXB0U291cmNlYCBpcyBhIGZ1bGx5IHZhbGlkIFVSTC5cbiAgICAgIHNjcmlwdFNvdXJjZVVSTCA9IG5ldyBVUkwoc2NyaXB0U291cmNlLCBzZWxmLmxvY2F0aW9uLmhyZWYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBVUkwgcGFyc2luZyBmYWlsZWQsIGRvIG5vdGhpbmcuXG4gICAgICAvLyBXZSB3aWxsIHN0aWxsIHByb2NlZWQgdG8gc2VlIGlmIHdlIGNhbiByZWNvdmVyIHVzaW5nIGByZXNvdXJjZVF1ZXJ5YFxuICAgIH1cbiAgICBpZiAoc2NyaXB0U291cmNlVVJMKSB7XG4gICAgICBvcHRpb25zID0gc2NyaXB0U291cmNlVVJMO1xuICAgICAgb3B0aW9ucy5mcm9tQ3VycmVudFNjcmlwdCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuZXhwb3J0IGRlZmF1bHQgcGFyc2VVUkw7IiwiaW1wb3J0IGhvdEVtaXR0ZXIgZnJvbSBcIndlYnBhY2svaG90L2VtaXR0ZXIuanNcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZy5qc1wiO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL2luZGV4XCIpLk9wdGlvbnN9IE9wdGlvbnNcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vaW5kZXhcIikuU3RhdHVzfSBTdGF0dXNcblxuLyoqXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RhdHVzfSBzdGF0dXNcbiAqL1xuZnVuY3Rpb24gcmVsb2FkQXBwKF9yZWYsIHN0YXR1cykge1xuICB2YXIgaG90ID0gX3JlZi5ob3QsXG4gICAgbGl2ZVJlbG9hZCA9IF9yZWYubGl2ZVJlbG9hZDtcbiAgaWYgKHN0YXR1cy5pc1VubG9hZGluZykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY3VycmVudEhhc2ggPSBzdGF0dXMuY3VycmVudEhhc2gsXG4gICAgcHJldmlvdXNIYXNoID0gc3RhdHVzLnByZXZpb3VzSGFzaDtcbiAgdmFyIGlzSW5pdGlhbCA9IGN1cnJlbnRIYXNoLmluZGV4T2YoIC8qKiBAdHlwZSB7c3RyaW5nfSAqL3ByZXZpb3VzSGFzaCkgPj0gMDtcbiAgaWYgKGlzSW5pdGlhbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1dpbmRvd30gcm9vdFdpbmRvd1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJ2YWxJZFxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgbG9nLmluZm8oXCJBcHAgdXBkYXRlZC4gUmVsb2FkaW5nLi4uXCIpO1xuICAgIHJvb3RXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbiAgdmFyIHNlYXJjaCA9IHNlbGYubG9jYXRpb24uc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbGxvd1RvSG90ID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItaG90PWZhbHNlXCIpID09PSAtMTtcbiAgdmFyIGFsbG93VG9MaXZlUmVsb2FkID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItbGl2ZS1yZWxvYWQ9ZmFsc2VcIikgPT09IC0xO1xuICBpZiAoaG90ICYmIGFsbG93VG9Ib3QpIHtcbiAgICBsb2cuaW5mbyhcIkFwcCBob3QgdXBkYXRlLi4uXCIpO1xuICAgIGhvdEVtaXR0ZXIuZW1pdChcIndlYnBhY2tIb3RVcGRhdGVcIiwgc3RhdHVzLmN1cnJlbnRIYXNoKTtcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi53aW5kb3cpIHtcbiAgICAgIC8vIGJyb2FkY2FzdCB1cGRhdGUgdG8gd2luZG93XG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKFwid2VicGFja0hvdFVwZGF0ZVwiLmNvbmNhdChzdGF0dXMuY3VycmVudEhhc2gpLCBcIipcIik7XG4gICAgfVxuICB9XG4gIC8vIGFsbG93IHJlZnJlc2hpbmcgdGhlIHBhZ2Ugb25seSBpZiBsaXZlUmVsb2FkIGlzbid0IGRpc2FibGVkXG4gIGVsc2UgaWYgKGxpdmVSZWxvYWQgJiYgYWxsb3dUb0xpdmVSZWxvYWQpIHtcbiAgICB2YXIgcm9vdFdpbmRvdyA9IHNlbGY7XG5cbiAgICAvLyB1c2UgcGFyZW50IHdpbmRvdyBmb3IgcmVsb2FkIChpbiBjYXNlIHdlJ3JlIGluIGFuIGlmcmFtZSB3aXRoIG5vIHZhbGlkIHNyYylcbiAgICB2YXIgaW50ZXJ2YWxJZCA9IHNlbGYuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJvb3RXaW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09IFwiYWJvdXQ6XCIpIHtcbiAgICAgICAgLy8gcmVsb2FkIGltbWVkaWF0ZWx5IGlmIHByb3RvY29sIGlzIHZhbGlkXG4gICAgICAgIGFwcGx5UmVsb2FkKHJvb3RXaW5kb3csIGludGVydmFsSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdFdpbmRvdyA9IHJvb3RXaW5kb3cucGFyZW50O1xuICAgICAgICBpZiAocm9vdFdpbmRvdy5wYXJlbnQgPT09IHJvb3RXaW5kb3cpIHtcbiAgICAgICAgICAvLyBpZiBwYXJlbnQgZXF1YWxzIGN1cnJlbnQgd2luZG93IHdlJ3ZlIHJlYWNoZWQgdGhlIHJvb3Qgd2hpY2ggd291bGQgY29udGludWUgZm9yZXZlciwgc28gdHJpZ2dlciBhIHJlbG9hZCBhbnl3YXlzXG4gICAgICAgICAgYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVsb2FkQXBwOyIsIi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnkgV29ya2VyR2xvYmFsU2NvcGUgKi9cblxuLy8gU2VuZCBtZXNzYWdlcyB0byB0aGUgb3V0c2lkZSwgc28gcGx1Z2lucyBjYW4gY29uc3VtZSBpdC5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSBbZGF0YV1cbiAqL1xuZnVuY3Rpb24gc2VuZE1zZyh0eXBlLCBkYXRhKSB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiIHx8ICEoc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKSkpIHtcbiAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwid2VicGFja1wiLmNvbmNhdCh0eXBlKSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9LCBcIipcIik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNlbmRNc2c7IiwidmFyIGFuc2lSZWdleCA9IG5ldyBSZWdFeHAoW1wiW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KVwiLCBcIig/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnEtdXk9Pjx+XSkpXCJdLmpvaW4oXCJ8XCIpLCBcImdcIik7XG5cbi8qKlxuICpcbiAqIFN0cmlwIFtBTlNJIGVzY2FwZSBjb2Rlc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSkgZnJvbSBhIHN0cmluZy5cbiAqIEFkYXB0ZWQgZnJvbSBjb2RlIG9yaWdpbmFsbHkgcmVsZWFzZWQgYnkgU2luZHJlIFNvcmh1c1xuICogTGljZW5zZWQgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpcEFuc2koc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgYHN0cmluZ2AsIGdvdCBgXCIuY29uY2F0KHR5cGVvZiBzdHJpbmcsIFwiYFwiKSk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGFuc2lSZWdleCwgXCJcIik7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpcEFuc2k7IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0LyoqIEB0eXBlIHt1bmRlZmluZWR8c3RyaW5nfSAqL1xuXHR2YXIgbGFzdEhhc2g7XG5cdHZhciB1cFRvRGF0ZSA9IGZ1bmN0aW9uIHVwVG9EYXRlKCkge1xuXHRcdHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGxhc3RIYXNoKS5pbmRleE9mKF9fd2VicGFja19oYXNoX18pID49IDA7XG5cdH07XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cdHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKCkge1xuXHRcdG1vZHVsZS5ob3Rcblx0XHRcdC5jaGVjayh0cnVlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlLiBcIiArXG5cdFx0XHRcdFx0XHRcdCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcIk5lZWQgdG8gZG8gYSBmdWxsIHJlbG9hZCFcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJQbGVhc2UgcmVsb2FkIG1hbnVhbGx5IVwiKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIChQcm9iYWJseSBiZWNhdXNlIG9mIHJlc3RhcnRpbmcgdGhlIHdlYnBhY2stZGV2LXNlcnZlcilcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0Y2hlY2soKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlcXVpcmUoXCIuL2xvZy1hcHBseS1yZXN1bHRcIikodXBkYXRlZE1vZHVsZXMsIHVwZGF0ZWRNb2R1bGVzKTtcblxuXHRcdFx0XHRpZiAodXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHR2YXIgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSBDYW5ub3QgYXBwbHkgdXBkYXRlLiBcIiArXG5cdFx0XHRcdFx0XHRcdCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcIk5lZWQgdG8gZG8gYSBmdWxsIHJlbG9hZCFcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJQbGVhc2UgcmVsb2FkIG1hbnVhbGx5IVwiKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBVcGRhdGUgZmFpbGVkOiBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cdHZhciBob3RFbWl0dGVyID0gcmVxdWlyZShcIi4vZW1pdHRlclwiKTtcblx0aG90RW1pdHRlci5vbihcIndlYnBhY2tIb3RVcGRhdGVcIiwgZnVuY3Rpb24gKGN1cnJlbnRIYXNoKSB7XG5cdFx0bGFzdEhhc2ggPSBjdXJyZW50SGFzaDtcblx0XHRpZiAoIXVwVG9EYXRlKCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuXHRcdFx0Y2hlY2soKTtcblx0XHR9XG5cdH0pO1xuXHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gV2FpdGluZyBmb3IgdXBkYXRlIHNpZ25hbCBmcm9tIFdEUy4uLlwiKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdfSB1cGRhdGVkTW9kdWxlcyB1cGRhdGVkIG1vZHVsZXNcbiAqIEBwYXJhbSB7KHN0cmluZyB8IG51bWJlcilbXSB8IG51bGx9IHJlbmV3ZWRNb2R1bGVzIHJlbmV3ZWQgbW9kdWxlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcblx0dmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG5cdH0pO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdGlmICh1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0bG9nKFxuXHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogKFRoZXkgd291bGQgbmVlZCBhIGZ1bGwgcmVsb2FkISlcIlxuXHRcdCk7XG5cdFx0dW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICghcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuXHRcdHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1vZHVsZUlkID09PSBcInN0cmluZ1wiICYmIG1vZHVsZUlkLmluZGV4T2YoXCIhXCIpICE9PSAtMSkge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBtb2R1bGVJZC5zcGxpdChcIiFcIik7XG5cdFx0XHRcdGxvZy5ncm91cENvbGxhcHNlZChcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIHBhcnRzLnBvcCgpKTtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0XHRsb2cuZ3JvdXBFbmQoXCJpbmZvXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBudW1iZXJJZHMgPSByZW5ld2VkTW9kdWxlcy5ldmVyeShmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgbW9kdWxlSWQgPT09IFwibnVtYmVyXCI7XG5cdFx0fSk7XG5cdFx0aWYgKG51bWJlcklkcylcblx0XHRcdGxvZyhcblx0XHRcdFx0XCJpbmZvXCIsXG5cdFx0XHRcdCdbSE1SXSBDb25zaWRlciB1c2luZyB0aGUgb3B0aW1pemF0aW9uLm1vZHVsZUlkczogXCJuYW1lZFwiIGZvciBtb2R1bGUgbmFtZXMuJ1xuXHRcdFx0KTtcblx0fVxufTtcbiIsIi8qKiBAdHlwZWRlZiB7XCJpbmZvXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIn0gTG9nTGV2ZWwgKi9cblxuLyoqIEB0eXBlIHtMb2dMZXZlbH0gKi9cbnZhciBsb2dMZXZlbCA9IFwiaW5mb1wiO1xuXG5mdW5jdGlvbiBkdW1teSgpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSwgaWYgc2hvdWxkIGxvZ1xuICovXG5mdW5jdGlvbiBzaG91bGRMb2cobGV2ZWwpIHtcblx0dmFyIHNob3VsZExvZyA9XG5cdFx0KGxvZ0xldmVsID09PSBcImluZm9cIiAmJiBsZXZlbCA9PT0gXCJpbmZvXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCJdLmluZGV4T2YobG9nTGV2ZWwpID49IDAgJiYgbGV2ZWwgPT09IFwid2FybmluZ1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiLCBcImVycm9yXCJdLmluZGV4T2YobG9nTGV2ZWwpID49IDAgJiYgbGV2ZWwgPT09IFwiZXJyb3JcIik7XG5cdHJldHVybiBzaG91bGRMb2c7XG59XG5cbi8qKlxuICogQHBhcmFtIHsobXNnPzogc3RyaW5nKSA9PiB2b2lkfSBsb2dGbiBsb2cgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHsobGV2ZWw6IExvZ0xldmVsLCBtc2c/OiBzdHJpbmcpID0+IHZvaWR9IGZ1bmN0aW9uIHRoYXQgbG9ncyB3aGVuIGxvZyBsZXZlbCBpcyBzdWZmaWNpZW50XG4gKi9cbmZ1bmN0aW9uIGxvZ0dyb3VwKGxvZ0ZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAobGV2ZWwsIG1zZykge1xuXHRcdGlmIChzaG91bGRMb2cobGV2ZWwpKSB7XG5cdFx0XHRsb2dGbihtc2cpO1xuXHRcdH1cblx0fTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqIEBwYXJhbSB7c3RyaW5nfEVycm9yfSBtc2cgbWVzc2FnZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdGlmIChzaG91bGRMb2cobGV2ZWwpKSB7XG5cdFx0aWYgKGxldmVsID09PSBcImluZm9cIikge1xuXHRcdFx0Y29uc29sZS5sb2cobXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcIndhcm5pbmdcIikge1xuXHRcdFx0Y29uc29sZS53YXJuKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKG1zZyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cbnZhciBncm91cCA9IGNvbnNvbGUuZ3JvdXAgfHwgZHVtbXk7XG52YXIgZ3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkIHx8IGR1bW15O1xudmFyIGdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZCB8fCBkdW1teTtcbi8qIGVzbGludC1lbmFibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwID0gbG9nR3JvdXAoZ3JvdXApO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cENvbGxhcHNlZCA9IGxvZ0dyb3VwKGdyb3VwQ29sbGFwc2VkKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBFbmQgPSBsb2dHcm91cChncm91cEVuZCk7XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKi9cbm1vZHVsZS5leHBvcnRzLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG5cdGxvZ0xldmVsID0gbGV2ZWw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBlcnJvclxuICogQHJldHVybnMge3N0cmluZ30gZm9ybWF0dGVkIGVycm9yXG4gKi9cbm1vZHVsZS5leHBvcnRzLmZvcm1hdEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHR2YXIgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXHR2YXIgc3RhY2sgPSBlcnIuc3RhY2s7XG5cdGlmICghc3RhY2spIHtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSBlbHNlIGlmIChzdGFjay5pbmRleE9mKG1lc3NhZ2UpIDwgMCkge1xuXHRcdHJldHVybiBtZXNzYWdlICsgXCJcXG5cIiArIHN0YWNrO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNGI3YjA5NzkzNjUyZTEyZDQwMTIyYjkyZjY0OTUyOGQucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY5OTc1MDQ3OTMyNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3NzAzNDkwZDE3OGM4ZmRjMjA2XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiZmxvZW1hOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0W10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG52YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgb2xkVGFnLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGlmIChsaW5rVGFnLnBhcmVudE5vZGUpIGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGlmIChvbGRUYWcpIHtcblx0XHRvbGRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlua1RhZywgb2xkVGFnLm5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHR9XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIG51bGwsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG52YXIgb2xkVGFncyA9IFtdO1xudmFyIG5ld1RhZ3MgPSBbXTtcbnZhciBhcHBseUhhbmRsZXIgPSAob3B0aW9ucykgPT4ge1xuXHRyZXR1cm4geyBkaXNwb3NlOiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG9sZFRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBvbGRUYWcgPSBvbGRUYWdzW2ldO1xuXHRcdFx0aWYob2xkVGFnLnBhcmVudE5vZGUpIG9sZFRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFRhZyk7XG5cdFx0fVxuXHRcdG9sZFRhZ3MubGVuZ3RoID0gMDtcblx0fSwgYXBwbHk6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbmV3VGFncy5sZW5ndGg7IGkrKykgbmV3VGFnc1tpXS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0XHRuZXdUYWdzLmxlbmd0aCA9IDA7XG5cdH0gfTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5taW5pQ3NzID0gKGNodW5rSWRzLCByZW1vdmVkQ2h1bmtzLCByZW1vdmVkTW9kdWxlcywgcHJvbWlzZXMsIGFwcGx5SGFuZGxlcnMsIHVwZGF0ZWRNb2R1bGVzTGlzdCkgPT4ge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y2h1bmtJZHMuZm9yRWFjaCgoY2h1bmtJZCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdHZhciBvbGRUYWcgPSBmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZik7XG5cdFx0aWYoIW9sZFRhZykgcmV0dXJuO1xuXHRcdHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dmFyIHRhZyA9IGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIG9sZFRhZywgKCkgPT4ge1xuXHRcdFx0XHR0YWcuYXMgPSBcInN0eWxlXCI7XG5cdFx0XHRcdHRhZy5yZWwgPSBcInByZWxvYWRcIjtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdG9sZFRhZ3MucHVzaChvbGRUYWcpO1xuXHRcdFx0bmV3VGFncy5wdXNoKHRhZyk7XG5cdFx0fSkpO1xuXHR9KTtcbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlZmxvZW1hXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9wcm90b2NvbD13cyUzQSZob3N0bmFtZT0wLjAuMC4wJnBvcnQ9ODA4MCZwYXRobmFtZT0lMkZ3cyZsb2dnaW5nPWluZm8mb3ZlcmxheT10cnVlJnJlY29ubmVjdD0xMCZob3Q9dHJ1ZSZsaXZlLXJlbG9hZD10cnVlXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hcHAvaW5kZXguanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3N0eWxlcy9pbmRleC5zY3NzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImhlcm1lcyIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIiwiYW5zaUhUTUwiLCJfcmVnQU5TSSIsIl9kZWZDb2xvcnMiLCJyZXNldCIsImJsYWNrIiwicmVkIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJibHVlIiwibWFnZW50YSIsImN5YW4iLCJsaWdodGdyZXkiLCJkYXJrZ3JleSIsIl9zdHlsZXMiLCJfb3BlblRhZ3MiLCJfY2xvc2VUYWdzIiwiZm9yRWFjaCIsIm4iLCJ0ZXh0IiwidGVzdCIsImFuc2lDb2RlcyIsInJldCIsInJlcGxhY2UiLCJtYXRjaCIsInNlcSIsIm90IiwiaW5kZXhPZiIsInBvcCIsInB1c2giLCJjdCIsImwiLCJsZW5ndGgiLCJBcnJheSIsImpvaW4iLCJzZXRDb2xvcnMiLCJjb2xvcnMiLCJFcnJvciIsIl9maW5hbENvbG9ycyIsImtleSIsImhleCIsImhhc093blByb3BlcnR5IiwiaXNBcnJheSIsInNvbWUiLCJoIiwiZGVmSGV4Q29sb3IiLCJzbGljZSIsIl9zZXRUYWdzIiwidGFncyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwib3BlbiIsImNsb3NlIiwiY29kZSIsImNvbG9yIiwib3JpQ29sb3IiLCJwYXJzZUludCIsInRvU3RyaW5nIiwiUiIsIlJlZmxlY3QiLCJSZWZsZWN0QXBwbHkiLCJhcHBseSIsInRhcmdldCIsInJlY2VpdmVyIiwiYXJncyIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiY2FsbCIsIlJlZmxlY3RPd25LZXlzIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJjb25jYXQiLCJQcm9jZXNzRW1pdFdhcm5pbmciLCJ3YXJuaW5nIiwid2FybiIsIk51bWJlcklzTmFOIiwiTnVtYmVyIiwiaXNOYU4iLCJ2YWx1ZSIsIkV2ZW50RW1pdHRlciIsImluaXQiLCJvbmNlIiwiX2V2ZW50cyIsInVuZGVmaW5lZCIsIl9ldmVudHNDb3VudCIsIl9tYXhMaXN0ZW5lcnMiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwiY2hlY2tMaXN0ZW5lciIsImxpc3RlbmVyIiwiVHlwZUVycm9yIiwiZW51bWVyYWJsZSIsInNldCIsImFyZyIsIlJhbmdlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsImNyZWF0ZSIsInNldE1heExpc3RlbmVycyIsIl9nZXRNYXhMaXN0ZW5lcnMiLCJ0aGF0IiwiZ2V0TWF4TGlzdGVuZXJzIiwiZW1pdCIsInR5cGUiLCJpIiwiYXJndW1lbnRzIiwiZG9FcnJvciIsImV2ZW50cyIsImVycm9yIiwiZXIiLCJlcnIiLCJtZXNzYWdlIiwiY29udGV4dCIsImhhbmRsZXIiLCJsZW4iLCJsaXN0ZW5lcnMiLCJhcnJheUNsb25lIiwiX2FkZExpc3RlbmVyIiwicHJlcGVuZCIsIm0iLCJleGlzdGluZyIsIm5ld0xpc3RlbmVyIiwidW5zaGlmdCIsIndhcm5lZCIsInciLCJTdHJpbmciLCJuYW1lIiwiZW1pdHRlciIsImNvdW50IiwiYWRkTGlzdGVuZXIiLCJvbiIsInByZXBlbmRMaXN0ZW5lciIsIm9uY2VXcmFwcGVyIiwiZmlyZWQiLCJyZW1vdmVMaXN0ZW5lciIsIndyYXBGbiIsIl9vbmNlV3JhcCIsInN0YXRlIiwid3JhcHBlZCIsImJpbmQiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdCIsInBvc2l0aW9uIiwib3JpZ2luYWxMaXN0ZW5lciIsInNoaWZ0Iiwic3BsaWNlT25lIiwib2ZmIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwia2V5cyIsIl9saXN0ZW5lcnMiLCJ1bndyYXAiLCJldmxpc3RlbmVyIiwidW53cmFwTGlzdGVuZXJzIiwicmF3TGlzdGVuZXJzIiwibGlzdGVuZXJDb3VudCIsImV2ZW50TmFtZXMiLCJhcnIiLCJjb3B5IiwiaW5kZXgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yTGlzdGVuZXIiLCJyZXNvbHZlciIsImV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lciIsImFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyIiwiZmxhZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwid3JhcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJwIiwibmFtZWRfcmVmZXJlbmNlc18xIiwicmVxdWlyZSIsIm51bWVyaWNfdW5pY29kZV9tYXBfMSIsInN1cnJvZ2F0ZV9wYWlyc18xIiwiYWxsTmFtZWRSZWZlcmVuY2VzIiwibmFtZWRSZWZlcmVuY2VzIiwiYWxsIiwiaHRtbDUiLCJlbmNvZGVSZWdFeHBzIiwic3BlY2lhbENoYXJzIiwibm9uQXNjaWkiLCJub25Bc2NpaVByaW50YWJsZSIsIm5vbkFzY2lpUHJpbnRhYmxlT25seSIsImV4dGVuc2l2ZSIsImRlZmF1bHRFbmNvZGVPcHRpb25zIiwibW9kZSIsImxldmVsIiwibnVtZXJpYyIsImVuY29kZSIsIl9hIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJlbmNvZGVSZWdFeHAiLCJyZWZlcmVuY2VzIiwiY2hhcmFjdGVycyIsImlzSGV4IiwibGFzdEluZGV4IiwiZXhlYyIsInN1YnN0cmluZyIsInJlc3VsdF8xIiwiY29kZV8xIiwiZ2V0Q29kZVBvaW50IiwiY2hhckNvZGVBdCIsImRlZmF1bHREZWNvZGVPcHRpb25zIiwic2NvcGUiLCJzdHJpY3QiLCJhdHRyaWJ1dGUiLCJiYXNlRGVjb2RlUmVnRXhwcyIsInhtbCIsImJvZHkiLCJib2R5UmVnRXhwcyIsImh0bWw0IiwiZGVjb2RlUmVnRXhwcyIsImZyb21DaGFyQ29kZSIsIm91dE9mQm91bmRzQ2hhciIsImRlZmF1bHREZWNvZGVFbnRpdHlPcHRpb25zIiwiZGVjb2RlRW50aXR5IiwiZW50aXR5IiwiZGVjb2RlRW50aXR5TGFzdENoYXJfMSIsImRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzEiLCJlbnRpdGllcyIsImRlY29kZVNlY29uZENoYXJfMSIsImRlY29kZUNvZGVfMSIsInN1YnN0ciIsImZyb21Db2RlUG9pbnQiLCJudW1lcmljVW5pY29kZU1hcCIsImRlY29kZSIsImRlY29kZVJlZ0V4cCIsImlzQXR0cmlidXRlIiwiaXNTdHJpY3QiLCJyZXBsYWNlTWF0Y2hfMSIsInJlcGxhY2VSZXN1bHRfMSIsInJlcGxhY2VMYXN0SW5kZXhfMSIsInJlcGxhY2VJbnB1dF8xIiwiZGVjb2RlUmVzdWx0XzEiLCJkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yIiwiZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMiIsImRlY29kZVNlY29uZENoYXJfMiIsImRlY29kZUNvZGVfMiIsIl8iLCIkIiwiZmoiLCJhc3RyYWxDb2RlUG9pbnQiLCJNYXRoIiwiZmxvb3IiLCJjb2RlUG9pbnRBdCIsImlucHV0IiwiaGlnaFN1cnJvZ2F0ZUZyb20iLCJoaWdoU3Vycm9nYXRlVG8iLCJub3JtYWxpemVVcmwiLCJzcmNCeU1vZHVsZUlkIiwibm9Eb2N1bWVudCIsImRvY3VtZW50IiwiZGVib3VuY2UiLCJmbiIsInRpbWUiLCJ0aW1lb3V0Iiwic2VsZiIsImZ1bmN0aW9uQ2FsbCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJub29wIiwiZ2V0Q3VycmVudFNjcmlwdFVybCIsIm1vZHVsZUlkIiwic3JjIiwiY3VycmVudFNjcmlwdCIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxhc3RTY3JpcHRUYWciLCJmaWxlTWFwIiwic3BsaXRSZXN1bHQiLCJzcGxpdCIsImZpbGVuYW1lIiwibWFwIiwibWFwUnVsZSIsInJlZyIsIlJlZ0V4cCIsInVwZGF0ZUNzcyIsImVsIiwidXJsIiwiaHJlZiIsImlzVXJsUmVxdWVzdCIsImlzTG9hZGVkIiwidmlzaXRlZCIsIm5ld0VsIiwiY2xvbmVOb2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiRGF0ZSIsIm5vdyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJnZXRSZWxvYWRVcmwiLCJyZWxvYWRTdHlsZSIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYWRlZCIsInJlbG9hZEFsbCIsIm9wdGlvbnMiLCJnZXRTY3JpcHRTcmMiLCJ1cGRhdGUiLCJyZWxvYWRlZCIsImxvY2FscyIsInBhdGhDb21wb25lbnRzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwidXJsU3RyaW5nIiwidHJpbSIsInByb3RvY29sIiwiY29tcG9uZW50cyIsImhvc3QiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiaGludCIsInByaW0iLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIldlYlNvY2tldENsaWVudCIsImNsaWVudCIsIldlYlNvY2tldCIsIm9uZXJyb3IiLCJvbk9wZW4iLCJmIiwib25vcGVuIiwib25DbG9zZSIsIm9uY2xvc2UiLCJvbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImRlZmF1bHQiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwic291cmNlIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmoiLCJ3ZWJwYWNrSG90TG9nIiwic3RyaXBBbnNpIiwicGFyc2VVUkwiLCJzb2NrZXQiLCJmb3JtYXRQcm9ibGVtIiwiY3JlYXRlT3ZlcmxheSIsImxvZ0VuYWJsZWRGZWF0dXJlcyIsInNldExvZ0xldmVsIiwic2VuZE1lc3NhZ2UiLCJyZWxvYWRBcHAiLCJjcmVhdGVTb2NrZXRVUkwiLCJkZWNvZGVPdmVybGF5T3B0aW9ucyIsIm92ZXJsYXlPcHRpb25zIiwicHJvcGVydHkiLCJvdmVybGF5RmlsdGVyRnVuY3Rpb25TdHJpbmciLCJkZWNvZGVVUklDb21wb25lbnQiLCJvdmVybGF5RmlsdGVyRnVuY3Rpb24iLCJzdGF0dXMiLCJpc1VubG9hZGluZyIsImN1cnJlbnRIYXNoIiwiX193ZWJwYWNrX2hhc2hfXyIsImhvdCIsImxpdmVSZWxvYWQiLCJwcm9ncmVzcyIsIm92ZXJsYXkiLCJwYXJzZWRSZXNvdXJjZVF1ZXJ5IiwiX19yZXNvdXJjZVF1ZXJ5IiwiZW5hYmxlZEZlYXR1cmVzIiwiUHJvZ3Jlc3MiLCJPdmVybGF5IiwiSlNPTiIsInBhcnNlIiwiZXJyb3JzIiwid2FybmluZ3MiLCJydW50aW1lRXJyb3JzIiwibG9nZ2luZyIsInJlY29ubmVjdCIsInNldEFsbExvZ0xldmVsIiwid2luZG93IiwidHJ1c3RlZFR5cGVzUG9saWN5TmFtZSIsImNhdGNoUnVudGltZUVycm9yIiwic2VuZCIsIm9uU29ja2V0TWVzc2FnZSIsImludmFsaWQiLCJpbmZvIiwiaGFzaCIsIl9oYXNoIiwicHJldmlvdXNIYXNoIiwicHJvZ3Jlc3NVcGRhdGUiLCJwbHVnaW5OYW1lIiwicGVyY2VudCIsIm1zZyIsInN0aWxsT2siLCJvayIsImNvbnRlbnRDaGFuZ2VkIiwiZmlsZSIsImxvY2F0aW9uIiwicmVsb2FkIiwic3RhdGljQ2hhbmdlZCIsIl93YXJuaW5ncyIsInBhcmFtcyIsInByaW50YWJsZVdhcm5pbmdzIiwiX2Zvcm1hdFByb2JsZW0iLCJoZWFkZXIiLCJvdmVybGF5V2FybmluZ3NTZXR0aW5nIiwid2FybmluZ3NUb0Rpc3BsYXkiLCJtZXNzYWdlcyIsInByZXZlbnRSZWxvYWRpbmciLCJfZXJyb3JzIiwicHJpbnRhYmxlRXJyb3JzIiwiX2Zvcm1hdFByb2JsZW0yIiwib3ZlcmxheUVycm9yc1NldHRpbmdzIiwiZXJyb3JzVG9EaXNwbGF5IiwiX2Vycm9yIiwic29ja2V0VVJMIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIi4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci9TeW5jQmFpbEhvb2tGYWtlLmpzIiwiY2xpZW50VGFwYWJsZVN5bmNCYWlsSG9vayIsIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzIiwiX191bnVzZWRfd2VicGFja19tb2R1bGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwiY29uc3RydWN0b3IiLCJmcm9tIiwiaXRlciIsIml0ZXJhdG9yIiwiYXJyMiIsIkxvZ1R5cGUiLCJmcmVlemUiLCJkZWJ1ZyIsInRyYWNlIiwiZ3JvdXAiLCJncm91cENvbGxhcHNlZCIsImdyb3VwRW5kIiwicHJvZmlsZSIsInByb2ZpbGVFbmQiLCJjbGVhciIsIkxPR19TWU1CT0wiLCJUSU1FUlNfU1lNQk9MIiwiVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MIiwiV2VicGFja0xvZ2dlciIsImdldENoaWxkTG9nZ2VyIiwiX2xlbiIsIl9rZXkiLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsIl9sZW40IiwiX2tleTQiLCJfbGVuNSIsIl9rZXk1IiwiYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiX2xlbjYiLCJfa2V5NiIsIl9sZW43IiwiX2tleTciLCJfbGVuOCIsIl9rZXk4IiwiX2xlbjkiLCJfa2V5OSIsIl9sZW4xMCIsIl9rZXkxMCIsImxhYmVsIiwiTWFwIiwicHJvY2VzcyIsImhydGltZSIsInRpbWVMb2ciLCJwcmV2IiwidGltZUVuZCIsImRlbGV0ZSIsInRpbWVBZ2dyZWdhdGUiLCJjdXJyZW50IiwidGltZUFnZ3JlZ2F0ZUVuZCIsIkxvZ2dlciIsIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qcyIsIl9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJfcmVxdWlyZSIsImZpbHRlclRvRnVuY3Rpb24iLCJyZWdFeHAiLCJpZGVudCIsIkxvZ0xldmVsIiwibm9uZSIsImZhbHNlIiwidHJ1ZSIsInZlcmJvc2UiLCJfcmVmIiwiX3JlZiRsZXZlbCIsIl9yZWYkZGVidWciLCJkZWJ1Z0ZpbHRlcnMiLCJsb2dsZXZlbCIsImxvZ2dlciIsImxhYmVsZWRBcmdzIiwibXMiLCJsb2dUaW1lIiwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzIiwiX2V4dGVuZHMiLCJTeW5jQmFpbEhvb2siLCJjcmVhdGVDb25zb2xlTG9nZ2VyIiwiY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zIiwiY3VycmVudERlZmF1bHRMb2dnZXIiLCJnZXRMb2dnZXIiLCJob29rcyIsImNoaWxkTmFtZSIsImNvbmZpZ3VyZURlZmF1bHRMb2dnZXIiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJjYWNoZWRNb2R1bGUiLCJkIiwiZGVmaW5pdGlvbiIsInByb3AiLCJyIiwidG9TdHJpbmdUYWciLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwid2VicGFja19saWJfbG9nZ2luZ19ydW50aW1lX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fIiwiX19lc01vZHVsZSIsImxpc3RlblRvUnVudGltZUVycm9yIiwibGlzdGVuVG9VbmhhbmRsZWRSZWplY3Rpb24iLCJwYXJzZUVycm9yVG9TdGFja3MiLCJjcmVhdGVPdmVybGF5TWFjaGluZSIsImNvbnRhaW5lclN0eWxlIiwiZGlzbWlzc0J1dHRvblN0eWxlIiwiaGVhZGVyU3R5bGUiLCJpZnJhbWVTdHlsZSIsIm1zZ1N0eWxlcyIsIm1zZ1RleHRTdHlsZSIsIm1zZ1R5cGVTdHlsZSIsIm1vZHVsZU5hbWUiLCJsb2MiLCJzdGFjayIsImlmcmFtZUNvbnRhaW5lckVsZW1lbnQiLCJjb250YWluZXJFbGVtZW50IiwiaGVhZGVyRWxlbWVudCIsIm9uTG9hZFF1ZXVlIiwib3ZlcmxheVRydXN0ZWRUeXBlc1BvbGljeSIsImFwcGx5U3R5bGUiLCJlbGVtZW50Iiwic3R5bGUiLCJjcmVhdGVDb250YWluZXIiLCJ0cnVzdGVkVHlwZXMiLCJjcmVhdGVQb2xpY3kiLCJjcmVhdGVIVE1MIiwiY3JlYXRlRWxlbWVudCIsImlkIiwib25sb2FkIiwiY29udGVudEVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJpbm5lclRleHQiLCJjbG9zZUJ1dHRvbkVsZW1lbnQiLCJhcmlhTGFiZWwiLCJvdmVybGF5U2VydmljZSIsIm9uTG9hZCIsImVuc3VyZU92ZXJsYXlFeGlzdHMiLCJjYWxsYmFjayIsImlubmVySFRNTCIsImhpZGUiLCJzaG93IiwibWVzc2FnZVNvdXJjZSIsImVudHJ5RWxlbWVudCIsIm1zZ1N0eWxlIiwicGFkZGluZyIsInR5cGVFbGVtZW50IiwibW9kdWxlSWRlbnRpZmllciIsImN1cnNvciIsInNldEF0dHJpYnV0ZSIsImZldGNoIiwibWVzc2FnZVRleHROb2RlIiwic2hvd092ZXJsYXkiLCJoaWRlT3ZlcmxheSIsImhhbmRsZUVycm9yIiwiZmFsbGJhY2tNZXNzYWdlIiwiZXJyb3JPYmplY3QiLCJzaG91bGREaXNwbGF5IiwiZXJyb3JFdmVudCIsInByb21pc2VSZWplY3Rpb25FdmVudCIsInJlYXNvbiIsImNyZWF0ZU1hY2hpbmUiLCJfcmVmMiIsInN0YXRlcyIsImluaXRpYWwiLCJhY3Rpb25zIiwiY3VycmVudFN0YXRlIiwiY3VycmVudENvbnRleHQiLCJldmVudCIsImN1cnJlbnRTdGF0ZU9uIiwidHJhbnNpdGlvbkNvbmZpZyIsImFjdE5hbWUiLCJhY3Rpb25JbXBsIiwibmV4dENvbnRleHRWYWx1ZSIsImNsZWFudXAiLCJvdmVybGF5TWFjaGluZSIsImhpZGRlbiIsIkJVSUxEX0VSUk9SIiwiUlVOVElNRV9FUlJPUiIsImRpc3BsYXlCdWlsZEVycm9yIiwiRElTTUlTUyIsImRpc3BsYXlSdW50aW1lRXJyb3IiLCJkaXNtaXNzTWVzc2FnZXMiLCJhcHBlbmRNZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYmFja2dyb3VuZENvbG9yIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJib3hTaXppbmciLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJmb250RmFtaWx5IiwibWFyZ2luIiwiZmxleCIsIm1heEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIkNsaWVudCIsIl9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fIiwicmV0cmllcyIsIm1heFJldHJpZXMiLCJpbml0U29ja2V0IiwiaGFuZGxlcnMiLCJyZXRyeUluTXMiLCJwb3ciLCJyYW5kb20iLCJmb3JtYXQiLCJvYmpVUkwiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJzbGFzaGVzIiwiY2hhckF0Iiwic2VhcmNoIiwicGFyc2VkVVJMIiwiaXNJbkFkZHJBbnkiLCJzb2NrZXRVUkxQcm90b2NvbCIsInNvY2tldFVSTEF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic29ja2V0VVJMSG9zdG5hbWUiLCJzb2NrZXRVUkxQb3J0Iiwic29ja2V0VVJMUGF0aG5hbWUiLCJmcm9tQ3VycmVudFNjcmlwdCIsImdldEN1cnJlbnRTY3JpcHRTb3VyY2UiLCJnZXRBdHRyaWJ1dGUiLCJzY3JpcHRFbGVtZW50cyIsInNjcmlwdEVsZW1lbnRzV2l0aFNyYyIsImRlZmF1bHRMZXZlbCIsImZlYXR1cmVzIiwibG9nU3RyaW5nIiwicmVzb3VyY2VRdWVyeSIsInNlYXJjaFBhcmFtcyIsInBhaXIiLCJzY3JpcHRTb3VyY2UiLCJzY3JpcHRTb3VyY2VVUkwiLCJVUkwiLCJob3RFbWl0dGVyIiwiaXNJbml0aWFsIiwiYXBwbHlSZWxvYWQiLCJyb290V2luZG93IiwiaW50ZXJ2YWxJZCIsImNsZWFySW50ZXJ2YWwiLCJhbGxvd1RvSG90IiwiYWxsb3dUb0xpdmVSZWxvYWQiLCJwb3N0TWVzc2FnZSIsInNldEludGVydmFsIiwicGFyZW50Iiwic2VuZE1zZyIsIldvcmtlckdsb2JhbFNjb3BlIiwiYW5zaVJlZ2V4Iiwic3RyaW5nIiwibGFzdEhhc2giLCJ1cFRvRGF0ZSIsImNoZWNrIiwidGhlbiIsInVwZGF0ZWRNb2R1bGVzIiwiY2F0Y2giLCJmb3JtYXRFcnJvciIsInJlbmV3ZWRNb2R1bGVzIiwidW5hY2NlcHRlZE1vZHVsZXMiLCJwYXJ0cyIsIm51bWJlcklkcyIsImV2ZXJ5IiwibG9nTGV2ZWwiLCJkdW1teSIsInNob3VsZExvZyIsImxvZ0dyb3VwIiwibG9nRm4iXSwic291cmNlUm9vdCI6IiJ9