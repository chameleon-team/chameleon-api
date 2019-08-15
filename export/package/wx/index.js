module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyProtoProperty = copyProtoProperty;
/* eslint-disable */
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./src/interfaces/requestAnimationFrame/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./src/interfaces/cancelAnimationFrame/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./src/interfaces/createAnimation/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("./src/interfaces/canIUse/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("./src/interfaces/chooseImage/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("./src/interfaces/close/index.js");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("./src/interfaces/reload/index.js");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__("./src/interfaces/getRect/index.js");

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__("./src/interfaces/getLocationInfo/index.js");

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__("./src/interfaces/navigateTo/index.js");

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__("./src/interfaces/redirectTo/index.js");

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__("./src/interfaces/navigateBack/index.js");

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__("./src/interfaces/open/index.js");

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__("./src/interfaces/get/index.js");

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__("./src/interfaces/post/index.js");

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__("./src/interfaces/request/index.js");

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__("./src/interfaces/setTitle/index.js");

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__("./src/interfaces/initSocket/index.js");

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__("./src/interfaces/getStorage/index.js");

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__("./src/interfaces/setStorage/index.js");

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__("./src/interfaces/removeStorage/index.js");

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__("./src/interfaces/getSystemInfo/index.js");

var _index44 = _interopRequireDefault(_index43);

var _index45 = __webpack_require__("./src/interfaces/showToast/index.js");

var _index46 = _interopRequireDefault(_index45);

var _index47 = __webpack_require__("./src/interfaces/alert/index.js");

var _index48 = _interopRequireDefault(_index47);

var _index49 = __webpack_require__("./src/interfaces/confirm/index.js");

var _index50 = _interopRequireDefault(_index49);

var _index51 = __webpack_require__("./src/interfaces/getClipBoardData/index.js");

var _index52 = _interopRequireDefault(_index51);

var _index53 = __webpack_require__("./src/interfaces/setClipBoardData/index.js");

var _index54 = _interopRequireDefault(_index53);

var _index55 = __webpack_require__("./src/interfaces/px2cpx/index.js");

var _index56 = _interopRequireDefault(_index55);

var _index57 = __webpack_require__("./src/interfaces/cpx2px/index.js");

var _index58 = _interopRequireDefault(_index57);

var _index59 = __webpack_require__("./src/interfaces/getLaunchOptionsSync/index.js");

var _index60 = _interopRequireDefault(_index59);

var _index61 = __webpack_require__("./src/interfaces/inSDK/index.js");

var _index62 = _interopRequireDefault(_index61);

var _index63 = __webpack_require__("./src/interfaces/createInnerAudioContext/index.js");

var _index64 = _interopRequireDefault(_index63);

var _index65 = __webpack_require__("./src/interfaces/createVideoContext/index.js");

var _index66 = _interopRequireDefault(_index65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  requestAnimationFrame: _index2.default,
  cancelAnimationFrame: _index4.default,
  createAnimation: _index6.default,
  canIUse: _index8.default,
  chooseImage: _index10.default,
  close: _index12.default,
  reload: _index14.default,
  getRect: _index16.default,
  getLocationInfo: _index18.default,
  navigateTo: _index20.default,
  redirectTo: _index22.default,
  navigateBack: _index24.default,
  open: _index26.default,
  get: _index28.default,
  post: _index30.default,
  request: _index32.default,
  setTitle: _index34.default,
  initSocket: _index36.default,
  getStorage: _index38.default,
  setStorage: _index40.default,
  removeStorage: _index42.default,
  getSystemInfo: _index44.default,
  showToast: _index46.default,
  alert: _index48.default,
  confirm: _index50.default,
  getClipBoardData: _index52.default,
  setClipBoardData: _index54.default,
  px2cpx: _index56.default,
  cpx2px: _index58.default,
  getLaunchOptionsSync: _index60.default,
  inSDK: _index62.default,
  createInnerAudioContext: _index64.default,
  createVideoContext: _index66.default
};

/***/ }),

/***/ "./src/config.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var api = {
  alert: {
    baseOn: {
      sdk: 'alert',
      web: 'alert',
      wx: 'showModal',
      qq: 'showModal',
      baidu: 'showModal',
      alipay: 'alert',
      weex: 'modal.alert'
    }
  },
  cancelAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'cancelAnimationFrame',
      web: 'cancelAnimationFrame',
      wx: 'cancelAnimationFrame',
      qq: 'cancelAnimationFrame',
      baidu: 'cancelAnimationFrame',
      weex: 'cancelAnimationFrame',
      alipay: 'cancelAnimationFrame'
    }
  },
  canIUse: {
    allCanUse: true,
    baseOn: {
      sdk: 'canIUse',
      web: 'canIUse',
      wx: 'canIUse',
      qq: 'canIUse',
      baidu: 'canIUse',
      weex: 'canIUse',
      alipay: 'canIUse'
    }
  },
  inSDK: {
    allCanUse: true,
    baseOn: {
      sdk: 'inSDK',
      web: 'inSDK',
      wx: '',
      qq: '',
      baidu: '',
      weex: ''
    }
  },
  chooseImage: {
    baseOn: {
      sdk: 'chooseImage',
      web: 'chooseImage',
      wx: 'chooseImage',
      qq: 'chooseImage',
      baidu: 'chooseImage',
      weex: '',
      alipay: 'chooseImage'
    }
  },
  close: {
    baseOn: {
      sdk: 'close',
      web: 'close',
      wx: 'navigateBack',
      qq: 'navigateBack',
      baidu: 'navigateBack',
      weex: '',
      alipay: 'navigateBack'
    }
  },
  confirm: {
    baseOn: {
      sdk: 'confirm',
      web: 'confirm',
      wx: 'showModal',
      qq: 'showModal',
      baidu: 'showModal',
      weex: 'modal.confirm',
      alipay: 'confirm'
    }
  },
  cpx2px: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      qq: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfoSync'
    }
  },
  get: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  getClipBoardData: {
    baseOn: {
      sdk: 'getClipBoardData',
      web: 'getClipboardData',
      wx: 'getClipboardData',
      qq: 'getClipboardData',
      baidu: 'getClipboardData',
      weex: 'clipboard.getString',
      alipay: 'getClipboard'
    }
  },
  getLocationInfo: {
    baseOn: {
      sdk: 'getLocationInfo',
      web: 'getCurrentPosition',
      wx: 'getLocation',
      qq: 'getLocation',
      baidu: 'getLocation',
      weex: '',
      alipay: 'getLocation'
    }
  },
  getRect: {
    baseOn: {
      sdk: 'getComponentRect',
      web: 'getComputedStyle',
      wx: 'createSelectorQuery',
      qq: 'createSelectorQuery',
      baidu: 'createSelectorQuery',
      weex: 'getComponentRect',
      alipay: ''
    }
  },
  getStorage: {
    baseOn: {
      sdk: 'getStorage',
      web: 'localStorage.getItem',
      wx: 'getStorageSync',
      qq: 'getStorageSync',
      baidu: 'getStorageSync',
      weex: 'storage.getItem',
      alipay: 'getStorageSync'
    }
  },
  getSystemInfo: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfo',
      qq: 'getSystemInfo',
      baidu: 'getSystemInfo',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfo'
    }
  },
  initSocket: {
    baseOn: {
      sdk: 'initSocket',
      web: 'initSocket',
      wx: 'connectSocket',
      qq: 'connectSocket',
      baidu: 'connectSocket',
      weex: '',
      alipay: 'connectSocket'
    }
  },
  getLaunchOptionsSync: {
    baseOn: {
      sdk: 'getQueryObjSync',
      web: 'location.href',
      wx: 'getLaunchOptionsSync',
      qq: 'getLaunchOptionsSync',
      baidu: '',
      weex: 'weex.config.bundleUrl',
      alipay: ''
    }
  },
  navigateBack: {
    baseOn: {
      sdk: 'navigateBack',
      web: 'navigateBack',
      wx: 'navigateBack',
      qq: 'navigateBack',
      baidu: 'navigateBack',
      weex: 'navigateBack',
      alipay: 'navigateBack'
    }
  },
  navigateTo: {
    baseOn: {
      sdk: 'navigateTo',
      web: 'navigateTo',
      wx: 'navigateTo',
      qq: 'navigateTo',
      baidu: 'navigateTo',
      weex: 'navigateTo',
      alipay: 'navigateTo'
    }
  },
  open: {
    baseOn: {
      sdk: 'open',
      web: 'location.href',
      wx: 'navigateToMiniProgram',
      qq: 'navigateToMiniProgram',
      baidu: 'navigateToSmartProgram',
      weex: 'navigator.push',
      alipay: 'navigateToMiniProgram'
    }
  },
  post: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  px2cpx: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      qq: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: ''
    }
  },
  redirectTo: {
    baseOn: {
      sdk: 'redirectTo',
      web: 'router.replace',
      wx: 'redirectTo',
      qq: 'redirectTo',
      baidu: 'redirectTo',
      weex: 'router.replace',
      alipay: 'redirectTo'
    }
  },
  reload: {
    baseOn: {
      sdk: 'reload',
      web: 'location.reload',
      wx: '',
      qq: '',
      baidu: '',
      weex: '',
      alipay: ''
    }
  },
  removeStorage: {
    baseOn: {
      sdk: 'removeStorage',
      web: 'localStorage.removeItem',
      wx: 'removeStorageSync',
      qq: 'removeStorageSync',
      baidu: 'removeStorageSync',
      weex: 'storage.removeItem',
      alipay: 'removeStorageSync'
    }
  },
  request: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  requestAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'setTimeout',
      web: 'requestAnimationFrame',
      wx: 'setTimeout',
      qq: 'setTimeout',
      baidu: 'setTimeout',
      weex: 'requestAnimationFrame',
      alipay: 'requestAnimationFrame'
    }
  },
  setClipBoardData: {
    baseOn: {
      sdk: 'setClipBoardData',
      web: 'setClipBoardData',
      wx: 'setClipBoardData',
      qq: 'setClipBoardData',
      baidu: 'setClipBoardData',
      weex: 'clipboard.setString',
      alipay: 'setClipboard'
    }
  },
  setStorage: {
    baseOn: {
      sdk: 'setStorage',
      web: 'localStorage.setItem',
      wx: 'setStorageSync',
      qq: 'setStorageSync',
      baidu: 'setStorageSync',
      weex: 'storage.setItem',
      alipay: 'setStorageSync'
    }
  },
  setTitle: {
    baseOn: {
      sdk: 'setTitle',
      web: 'document.title',
      wx: 'setNavigationBarTitle',
      qq: 'setNavigationBarTitle',
      baidu: 'setNavigationBarTitle',
      weex: '',
      alipay: 'setNavigationBar'
    }
  },
  showToast: {
    baseOn: {
      sdk: 'showToast',
      web: 'showToast',
      wx: 'showToast',
      qq: 'showToast',
      baidu: 'showToast',
      weex: 'modal.toast',
      alipay: 'showToast'
    }
  }
};

exports.api = api;

/***/ }),

/***/ "./src/interfaces/alert/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'alert',
    value: function alert(opt, successCallBack, failCallBack) {
      var message = opt.message,
          confirmTitle = opt.confirmTitle;

      wx.showModal({
        showCancel: false,
        title: '',
        content: message,
        confirmText: confirmTitle,
        success: function success() {
          successCallBack(confirmTitle);
        },
        fail: function fail() {
          failCallBack(confirmTitle);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/alert/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alert;

var _index = __webpack_require__("./src/interfaces/alert/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function alert(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle;

  return new Promise(function (resolve, reject) {
    _index2.default.alert({ message: message, confirmTitle: confirmTitle }, function () {
      resolve();
    }, function () {
      reject();
    });
  });
}

/***/ }),

/***/ "./src/interfaces/canIUse/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__("./src/config.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'canIUse',
    value: function canIUse(metName, cb) {
      if (!_config.api[metName]) {
        cb(false);
        return;
      }

      var allCan = _config.api[metName].allCanUse;
      if (allCan) {
        cb(true);
        return;
      }

      var method = _config.api[metName].baseOn.wx;
      var result = wx.canIUse(method);
      cb(result);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/canIUse/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canIUse;

var _index = __webpack_require__("./src/interfaces/canIUse/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function canIUse(metName) {
  return new Promise(function (resolve, reject) {
    _index2.default.canIUse(metName, function (res) {
      if (res) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/cancelAnimationFrame/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animationShim = __webpack_require__("./src/interfaces/requestAnimationFrame/animationShim.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'init',
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: 'cancelAnimationFrame',
          value: function cancelAnimationFrame() {
            return _animationShim.cancelAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/cancelAnimationFrame/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./src/interfaces/cancelAnimationFrame/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CancelAnimationFactory = _index2.default.init();

var animationFrame = new CancelAnimationFactory();

exports.default = animationFrame.cancelAnimationFrame();

/***/ }),

/***/ "./src/interfaces/chooseImage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'chooseImage',
    value: function chooseImage(params, callbackSuccess, callbackFail) {
      var sourceType = [];
      switch (params.type) {
        case 'camera':
          sourceType = ['camera'];
          break;
        case 'album':
          sourceType = ['album'];
          break;
        default:
          sourceType = ['album', 'camera'];
      }

      wx.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: sourceType,
        success: function success(res) {
          callbackSuccess({
            base64: '',
            tempFilePaths: res.tempFilePaths
          });
        },
        fail: function fail(err) {
          callbackFail(err);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/chooseImage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chooseImage;

var _index = __webpack_require__("./src/interfaces/chooseImage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function chooseImage() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'choice'
  };

  return new Promise(function (resolve, reject) {
    _index2.default.chooseImage(params, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    });
  });
}

/***/ }),

/***/ "./src/interfaces/close/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'close',
    value: function close() {
      wx.navigateBack({
        delta: 1
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/close/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = close;

var _index = __webpack_require__("./src/interfaces/close/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function close() {
  _index2.default.close();
}

/***/ }),

/***/ "./src/interfaces/confirm/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'confirm',
    value: function confirm(opt, successCallBack, failCallBack) {
      var message = opt.message,
          confirmTitle = opt.confirmTitle,
          cancelTitle = opt.cancelTitle;

      wx.showModal({
        title: '',
        content: message,
        confirmText: confirmTitle,
        cancelText: cancelTitle,
        success: function success(res) {
          if (res.confirm) {
            successCallBack(confirmTitle);
          } else {
            successCallBack(cancelTitle);
          }
        },
        fail: function fail() {
          failCallBack();
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/confirm/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _index = __webpack_require__("./src/interfaces/confirm/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function confirm(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle,
      _opt$cancelTitle = opt.cancelTitle,
      cancelTitle = _opt$cancelTitle === undefined ? '取消' : _opt$cancelTitle;

  return new Promise(function (resolve, reject) {
    _index2.default.confirm({ message: message, confirmTitle: confirmTitle, cancelTitle: cancelTitle }, function (value) {
      resolve(value);
    }, function () {
      reject();
    });
  });
}

/***/ }),

/***/ "./src/interfaces/cpx2px/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cpx2px;

var _getWidth = __webpack_require__("./src/interfaces/px2cpx/getWidth.interface");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function cpx2px(cpx) {
  if (typeof cpx !== 'number') {
    console.error('Parameter must be a number');
    return;
  }
  var viewportWidth = _getWidth2.default.getWidth();
  var px = +(viewportWidth / 750 * cpx).toFixed(3);
  return px;
}

/***/ }),

/***/ "./src/interfaces/createAnimation/_util.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpx2px = exports.descriptionPipe = exports.stylePipe = undefined;

var _index = __webpack_require__("./src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var stylePipe = exports.stylePipe = function stylePipe(styles, descriptions, quene) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var current = styles;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, descriptions].concat(args));
  });
  return current;
};

var descriptionPipe = exports.descriptionPipe = function descriptionPipe(descriptions, styles, quene) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var current = descriptions;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, styles].concat(args));
  });
  return current;
};

var cpx2px = exports.cpx2px = function cpx2px(v) {
  return +(_index2.default.getViewportWidth() / 750 * v).toFixed(3);
};

exports.default = {};

/***/ }),

/***/ "./src/interfaces/createAnimation/createAnimationFactory.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var exportMiddleWare = _index2.default.exportMiddleWare,
    checkNumber = _index2.default.checkNumber,
    checkString = _index2.default.checkString;

var id = 0;

// 可用options
var STYLES = [{ key: 'width', type: 'number' }, { key: 'height', type: 'number' }, { key: 'opacity', type: 'number' }, { key: 'backgroundColor', type: 'string' }, // 16进制数值
{ key: 'translate', type: 'number' }, // web不支持
{ key: 'translateX', type: 'number' }, { key: 'translateY', type: 'number' }, { key: 'scale', type: 'number' }, // web不支持
{ key: 'scaleX', type: 'number' }, { key: 'scaleY', type: 'number' },
// {key:'skew', type: 'string'}, //weex不支持
// {key:'skewX', type: 'string'},
// {key:'skewY', type: 'string'},
// 暂时不支持校验，因为cml底层不支持校验多种类型
{ key: 'rotate', type: '' }, // web不支持,
{ key: 'rotateX', type: '' }, { key: 'rotateY', type: '' }, { key: 'transform', type: 'string' }];
// 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

var utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function enhanceAnimationPrototype(target, styles) {
    var transformProps = Array.isArray(styles) ? styles : Object.keys(styles);
    transformProps.forEach(function (item) {
      target[item.key] = function () {
        for (var _len = arguments.length, style = Array(_len), _key = 0; _key < _len; _key++) {
          style[_key] = arguments[_key];
        }

        // 校验类型
        if (item.type === 'number') {
          checkNumber(style[0]);
        } else if (item.type === 'string') {
          checkString(style[0]);
        }
        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};

var createAnimationFactory = function createAnimationFactory() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var updateQueue = [];
  // let stashQueue = [];

  this.id = id;
  id = id + 1;

  this.descriptions = description;

  this.styles = {};

  // 判断用户是否使用export
  this.useExport = '0';

  this.enqueue = function (param) {
    updateQueue.push(param);
  };

  this["export"] = function () {
    this.useExport = '1';

    var result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [].concat(_toConsumableArray(updateQueue))
    });
    // 清空
    updateQueue = [];
    this.useExport = '0';
    return result;
  };

  // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };

  // this.stashExport = function() {
  //   this.useExport = '1';

  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };
};

createAnimationFactory.prototype = {
  clear: function clear() {
    this.styles = {};
    this.descriptions = {};
    return this;
  },

  styles: function styles(_styles) {
    this.styles = Object.assign({}, this.styles, _styles);
    return this;
  },

  step: function step(descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: Object.assign({ cb: function cb() {
          return false;
        }, duration: 400 }, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};

utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);

exports.default = createAnimationFactory;

/***/ }),

/***/ "./src/interfaces/createAnimation/descriptionLoader/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commonLoader = exports.commonLoader = function commonLoader(descriptions) {
  return descriptions;
};

var transformOriginMap = {};
var cacheTransformOriginLoader = exports.cacheTransformOriginLoader = function cacheTransformOriginLoader(descriptions, styles, id) {
  var returnDescriptions = descriptions;

  var transformOrigin = descriptions.transformOrigin;
  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {};
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin;
  return returnDescriptions;
};

/***/ }),

/***/ "./src/interfaces/createAnimation/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("./src/interfaces/createAnimation/styleLoader/common.js");

var _wx = __webpack_require__("./src/interfaces/createAnimation/styleLoader/wx.js");

var _common2 = __webpack_require__("./src/interfaces/createAnimation/descriptionLoader/common.js");

var _util = __webpack_require__("./src/interfaces/createAnimation/_util.js");

var _util2 = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _wx.transformLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];

var createAnimationFuc = function createAnimationFuc(quene) {
  var animation = wx.createAnimation();
  var cbs = {};
  quene.forEach(function (tick, i) {
    var styles = tick.styles,
        descriptions = tick.descriptions;

    cbs[i] = descriptions.cb;
    Object.keys(styles).forEach(function (key) {
      var value = styles[key];

      animation[key](value);
    });

    animation.step(descriptions);
  });

  var temp = animation.export();
  temp.cbs = cbs;
  temp.index = 0;

  return temp;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initAnimation',
    value: function initAnimation() {}
  }, {
    key: 'checkNumber',
    value: function checkNumber(number) {}
  }, {
    key: 'checkString',
    value: function checkString(string) {}
  }, {
    key: 'checkObject',
    value: function checkObject(object) {}
  }, {
    key: 'getViewportWidth',
    value: function getViewportWidth() {
      var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
          windowWidth = _wx$getSystemInfoSync.windowWidth;

      return windowWidth;
    }
  }, {
    key: 'exportMiddleWare',
    value: function exportMiddleWare(param) {
      return createAnimationFuc(param.updateQueue.map(function (tick) {
        return {
          styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
          descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
        };
      }));
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util2.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/createAnimation/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

var _createAnimationFactory = __webpack_require__("./src/interfaces/createAnimation/createAnimationFactory.js");

var _createAnimationFactory2 = _interopRequireDefault(_createAnimationFactory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_index2.default.initAnimation();

exports.default = function (description) {
  return new _createAnimationFactory2.default(description);
};

/***/ }),

/***/ "./src/interfaces/createAnimation/styleLoader/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateStyles = exports.rotateStyles = ['rotate', 'rotateX', 'retateY'];

var isNumTypeStyles = exports.isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];

var transformStyles = exports.transformStyles = ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY'];

var compositeStyles = exports.compositeStyles = ['translate', 'scale'];

var commonLoader = exports.commonLoader = function commonLoader(styles) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];
    //
    if (value.length === 1 && key !== 'scale') {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        // scale的值只传递一个的情况
        if (key === 'scale' && value.length === 1) {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[0];
        } else {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[1];
        }

        // returnStyles[`${key}Z`] = value[2];
      } else {
          // redLog(`${key}属性不支持传多个参数`);
        }
    }
  });
  return returnStyles;
};

// 缓存transform属性
var transformStylesMap = {};
var cacheTransformStylesLoader = exports.cacheTransformStylesLoader = function cacheTransformStylesLoader(styles, descriptions, id) {
  var returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }
    returnStyles[key] = value;
  });

  if (JSON.stringify(transformStylesMap[id]) !== '{}') {
    Object.keys(transformStylesMap[id]).forEach(function (key) {
      var value = transformStylesMap[id][key];

      returnStyles[key] = value;
    });
  }

  return returnStyles;
};

/***/ }),

/***/ "./src/interfaces/createAnimation/styleLoader/wx.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformLoader = undefined;

var _util = __webpack_require__("./src/interfaces/createAnimation/_util.js");

var _utils = __webpack_require__("./src/lib/utils.js");

var _common = __webpack_require__("./src/interfaces/createAnimation/styleLoader/common.js");

var transformLoader = exports.transformLoader = function transformLoader(styles, description) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    // 目前不支持自动转换，所以loader来做
    if (_common.isNumTypeStyles.includes(key)) {
      if ((0, _utils.isNum)(value)) {
        // 转换单位
        value = (0, _util.cpx2px)(value);
      } else {
        console.error('Parameter must be a number');
      }
    }

    // // 目前不支持转换，所以loader来做
    // if (isStr(value) && value.includes('px')) {
    //   value = value.replace('px', 'rpx');
    // }

    // 100deg -> 100
    if (_common.rotateStyles.includes(key) && (0, _utils.isStr)(value)) {

      if (value.includes('deg')) {
        value = value.split('deg')[0];
      } else {
        console.error('Parameter format error');
      }
    }

    // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致
    returnStyles[key] = value;
  });

  return returnStyles;
};

/***/ }),

/***/ "./src/interfaces/createInnerAudioContext/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createInnerAudioContext',
    value: function createInnerAudioContext() {
      return wx.createInnerAudioContext();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/createInnerAudioContext/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInnerAudioContext;

var _index = __webpack_require__("./src/interfaces/createInnerAudioContext/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createInnerAudioContext() {
  return _index2.default.createInnerAudioContext();
}

/***/ }),

/***/ "./src/interfaces/createVideoContext/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'createVideoContext',
    value: function createVideoContext(id, instance) {
      return wx.createVideoContext('cmlVideo', instance.selectComponent('#' + id));
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/createVideoContext/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createVideoContext;

var _index = __webpack_require__("./src/interfaces/createVideoContext/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createVideoContext(id, componentInstance) {
  return _index2.default.createVideoContext(id, componentInstance);
}

/***/ }),

/***/ "./src/interfaces/get/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = __webpack_require__("./src/interfaces/request/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function post(options) {
  options.method = "GET";
  return (0, _index2.default)(options);
}

/***/ }),

/***/ "./src/interfaces/getClipBoardData/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getClipBoardData',
    value: function getClipBoardData(cb) {
      wx.getClipboardData({
        success: function success(res) {
          cb({
            errno: 0,
            errMsg: '',
            data: res.data
          });
        },
        fail: function fail(res) {
          cb({
            errno: -1,
            errMsg: 'wx.getClipboardData fail',
            data: ''
          });
        }
      });
    }
  }, {
    key: 'setClipBoardData',
    value: function setClipBoardData(text, cb) {
      wx.setClipboardData({
        data: text,
        success: function success(res) {
          cb({
            errno: 0,
            errMsg: '',
            data: text
          });
        },
        fail: function fail(res) {
          cb({
            errno: -1,
            data: '',
            errMsg: 'wx.setClipboardData fail'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/getClipBoardData/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClipBoardData;

var _index = __webpack_require__("./src/interfaces/getClipBoardData/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getClipBoardData() {
  return new Promise(function (resolve, reject) {
    _index2.default.getClipBoardData(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.msg);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/getLaunchOptionsSync/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getLaunchOptionsSync',
    value: function getLaunchOptionsSync() {
      return wx.getLaunchOptionsSync();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/getLaunchOptionsSync/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLaunchOptionsSync;

var _index = __webpack_require__("./src/interfaces/getLaunchOptionsSync/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getLaunchOptionsSync() {
  return _index2.default.getLaunchOptionsSync();
}

/***/ }),

/***/ "./src/interfaces/getLocationInfo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getLocationInfo',
    value: function getLocationInfo(cb) {
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var latitude = +res.latitude;
          var longitude = +res.longitude;
          cb({
            errno: 0,
            errMsg: '',
            data: {
              lat: latitude,
              lng: longitude
            }
          });
        },
        fail: function fail() {
          cb({
            errno: -1,
            errMsg: 'getLocation failed',
            data: {
              lat: 0,
              lng: 0
            }
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/getLocationInfo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocationInfo;

var _index = __webpack_require__("./src/interfaces/getLocationInfo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getLocationInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getLocationInfo(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/getRect/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__("./src/interfaces/px2cpx/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getRect',
    value: function getRect(refObj, cb) {
      var query = wx.createSelectorQuery().in(refObj.context);
      query.select('#' + refObj.id).boundingClientRect();

      query.exec(function (res) {
        var rectObj = {
          width: res[0] && (0, _index2.default)(res[0].width) || 0,
          height: res[0] && (0, _index2.default)(res[0].height) || 0,
          left: res[0] && (0, _index2.default)(res[0].left) || 0,
          top: res[0] && (0, _index2.default)(res[0].top) || 0,
          right: res[0] && (0, _index2.default)(res[0].right) || 0,
          bottom: res[0] && (0, _index2.default)(res[0].bottom) || 0
        };
        cb(rectObj);
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/getRect/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRect;

var _index = __webpack_require__("./src/interfaces/getRect/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./src/lib/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getRect(ref, context) {
  return new Promise(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref, context);
    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}

/***/ }),

/***/ "./src/interfaces/getStorage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getStorage',
    value: function getStorage(key, cb) {
      try {
        var _data = wx.getStorageSync(key);
        if (_data && typeof _data !== 'string') {
          _data = JSON.stringify(_data);
        }
        cb({
          errno: 0,
          errMsg: 'success',
          data: _data !== null ? _data : ''
        });
      } catch (e) {
        var _errMsg = void 0;
        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }
        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/getStorage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStorage;

var _index = __webpack_require__("./src/interfaces/getStorage/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./src/lib/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.getStorage(key, function (res) {
      if (res.errno === 0) {
        res.data = (0, _utils.tryJsonParse)(res.data);
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/getSystemInfo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var systemInfo = null;

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getSystemInfo',
    value: function getSystemInfo(cb) {
      if (systemInfo) {
        cb(systemInfo);
        return;
      }
      wx.getSystemInfo({
        success: function success(res) {
          var os = /android/i.test(res.system) ? 'android' : 'ios';
          var viewportWidth = res.windowWidth;
          var viewportHeight = res.windowHeight;
          systemInfo = {
            os: os,
            env: 'wx',
            viewportWidth: viewportWidth,
            viewportHeight: viewportHeight,
            extraParams: res || {}
          };
          cb(systemInfo);
        },
        fail: function fail(err) {
          // 获取失败时不做存储
          var failSystemInfo = {
            os: '',
            env: 'wx',
            viewportWidth: 0,
            viewportHeight: 0,
            extraParams: {}
          };
          cb(failSystemInfo);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/getSystemInfo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = getSystemInfo;

var _index = __webpack_require__("./src/interfaces/getSystemInfo/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./src/lib/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getSystemInfo(function (res) {
      res.extraParams = (0, _utils.tryJsonParse)(res.extraParams);
      // px2viewpx
      var pxRpxRate = 750 / res.viewportWidth;
      var viewportHeight = +(res.viewportHeight * pxRpxRate).toFixed(3);
      var viewportWidth = +(res.viewportWidth * pxRpxRate).toFixed(3);

      if (res.os) {
        resolve(_extends({}, res, {
          viewportHeight: viewportHeight,
          viewportWidth: viewportWidth
        }));
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/inSDK/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'inSDK',
    value: function inSDK() {
      return false;
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/inSDK/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inSDK;

var _index = __webpack_require__("./src/interfaces/inSDK/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function inSDK() {
  return _index2.default.inSDK();
}

/***/ }),

/***/ "./src/interfaces/initSocket/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wxSocket = __webpack_require__("./src/interfaces/initSocket/wxSocket.js");

var _wxSocket2 = _interopRequireDefault(_wxSocket);

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'initSocket',
    value: function initSocket(url) {
      return new _wxSocket2.default(url);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/initSocket/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initSocket;

var _index = __webpack_require__("./src/interfaces/initSocket/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function initSocket() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var instance = _index2.default.initSocket(url);
  return instance;
}

/***/ }),

/***/ "./src/interfaces/initSocket/wxSocket.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var WxSocket = function () {
  function WxSocket(url) {
    _classCallCheck(this, WxSocket);

    this.instance = wx.connectSocket({
      url: url
    });
  }

  _createClass(WxSocket, [{
    key: "onopen",
    value: function onopen(cb) {
      this.instance.onOpen(function () {
        cb();
      });
    }
  }, {
    key: "onmessage",
    value: function onmessage(cb) {
      this.instance.onMessage(function (res) {
        cb(res);
      });
    }
  }, {
    key: "onerror",
    value: function onerror(cb) {
      this.instance.onError(function (err) {
        cb(err);
      });
    }
  }, {
    key: "onclose",
    value: function onclose(cb) {
      this.instance.onClose(function () {
        cb();
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      data = JSON.stringify(data);
      this.instance.send({
        data: data
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.instance.close();
    }
  }]);

  return WxSocket;
}();

exports.default = WxSocket;

/***/ }),

/***/ "./src/interfaces/navigateBack/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'navigateBack',
    value: function navigateBack(backPageNum) {
      wx.navigateBack({
        delta: Math.abs(backPageNum)
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/navigateBack/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateBack;

var _index = __webpack_require__("./src/interfaces/navigateBack/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function navigateBack() {
  var backPageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

  _index2.default.navigateBack(backPageNum);
}

/***/ }),

/***/ "./src/interfaces/navigateTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./src/lib/utils.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'navigateTo',
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;

      path = (0, _utils.buildQueryStringUrl)(query, path);
      wx.navigateTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/navigateTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("./src/interfaces/navigateTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || '';

  // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题
  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "./src/interfaces/open/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./src/lib/utils.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'open',
    value: function open(url, commonPatchParams, extraOptions) {
      url = (0, _utils.buildQueryStringUrl)(commonPatchParams, url);
      wx.navigateToMiniProgram((0, _utils.getOpenObj)(url).wx);
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/open/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = open;

var _index = __webpack_require__("./src/interfaces/open/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function open() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var commonPatchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { closeCurrent: false };

  _index2.default.open(url, commonPatchParams, extraOptions);
}

/***/ }),

/***/ "./src/interfaces/post/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = __webpack_require__("./src/interfaces/request/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function post(options) {
  options.method = "POST";
  return (0, _index2.default)(options);
}

/***/ }),

/***/ "./src/interfaces/px2cpx/getWidth.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    windowWidth = _wx$getSystemInfoSync.windowWidth;

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'getWidth',
    value: function getWidth() {
      return windowWidth;
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/px2cpx/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = __webpack_require__("./src/interfaces/px2cpx/getWidth.interface");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}

/***/ }),

/***/ "./src/interfaces/redirectTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./src/lib/utils.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'redirectTo',
    value: function redirectTo(opt) {
      var path = opt.path,
          query = opt.query;

      path = (0, _utils.buildQueryStringUrl)(query, path);
      wx.redirectTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/redirectTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = redirectTo;

var _index = __webpack_require__("./src/interfaces/redirectTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function redirectTo(opt) {
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || '';

  _index2.default.redirectTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "./src/interfaces/reload/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'reload',
    value: function reload() {}
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/reload/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reload;

var _index = __webpack_require__("./src/interfaces/reload/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function reload() {
  _index2.default.reload();
}

/***/ }),

/***/ "./src/interfaces/removeStorage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'removeStorage',
    value: function removeStorage(key, cb) {
      try {
        wx.removeStorageSync(key);
        cb({
          errno: 0,
          errMsg: 'success',
          data: ''
        });
      } catch (e) {
        var _errMsg = void 0;
        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }
        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/removeStorage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStorage;

var _index = __webpack_require__("./src/interfaces/removeStorage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function removeStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.removeStorage(key, function (res) {
      if (res.errno === 0) {
        resolve();
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/request/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHeader = parseHeader;
var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

var defaultOptions = {
  credentials: 'same-origin'
};

var defaultType = 'form';
var contentTypeMap = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json'
};

// 处理基本的错误, 如500, 404等等
function filterStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res;
    error.type = 'http';
    throw error;
  }
}

// 解析为json格式
function parseJSON(res) {
  return res.json()["catch"](function (err) {
    if (err) {
      err.type = 'json';
      err.res = res;
    }
    throw err;
  });
}

// 转换成form表单形式
function toForm(body) {
  var form = new FormData();
  Object.keys(body).forEach(function (key) {
    if (body[key] !== undefined) {
      form.append(key, body[key]);
    }
  });
  return form;
}

function parseHeader(headers) {
  // fetch中的headers value为数组形式,其他端为字符串形式， 统一为字符串
  // header的key值统一为小写
  var result = {};
  Object.keys(headers).forEach(function (key) {
    var value = headers[key];
    if (value instanceof Array) {
      value = value[0];
    }
    result[key.toLowerCase()] = value;
  });
  return JSON.stringify(result);
}

exports.default = {
  defaultHeaders: defaultHeaders,
  defaultOptions: defaultOptions,
  defaultType: defaultType,
  contentTypeMap: contentTypeMap,
  filterStatus: filterStatus,
  parseJSON: parseJSON,
  toForm: toForm,
  parseHeader: parseHeader
};

/***/ }),

/***/ "./src/interfaces/request/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("./src/interfaces/request/common.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'request',
    value: function request(params) {
      var url = params.url,
          body = params.body,
          headers = params.headers,
          method = params.method,
          cb = params.cb;

      wx.request({
        url: url,
        data: body,
        dataType: 'text',
        method: method,
        header: headers,
        success: function success(res) {
          cb({
            status: res.statusCode,
            data: res.data,
            headers: (0, _common.parseHeader)(res.header)
          });
        },
        fail: function fail(e) {
          cb({
            status: -1,
            data: 'request failed',
            headers: '{}'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/request/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = request;

var _index = __webpack_require__("./src/interfaces/request/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./src/lib/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function request(_ref) {
  var domain = _ref.domain,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === undefined ? 'form' : _ref$contentType,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? {} : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;

  method = method.toUpperCase();
  var _setting$apiPrefix = setting.apiPrefix,
      apiPrefix = _setting$apiPrefix === undefined ? (0, _utils.isNeedApiPrefix)(url) : _setting$apiPrefix,
      _setting$jsonp = setting.jsonp,
      jsonp = _setting$jsonp === undefined ? false : _setting$jsonp,
      _setting$credentials = setting.credentials,
      credentials = _setting$credentials === undefined ? 'include' : _setting$credentials;

  var media = "export";
  // 如果用户配置了domain
  if (domain) {
    if (media === 'dev') {
      // dev模式对domain做分割处理
      if (~domain.indexOf('__DEV_SPLIT__')) {
        var splitArray = domain.split('__DEV_SPLIT__');
        domain = splitArray[0];
        var domainKey = splitArray[1];
        url = (0, _utils.buildQueryStringUrl)({ domainKey: domainKey }, url);
      }
    }
    url = domain + url;
  } else {
    // 如果没有配置domain
    if (apiPrefix) {
      // 有apiPrefix优先
      if (true) {
        url = "http://172.24.40.88:8001" + url;
      }
    }
  }

  if (['GET', 'PUT', 'DELETE'].indexOf(method) > -1) {
    url = (0, _utils.buildQueryStringUrl)(data, url);
    if (method == 'GET') {
      data = '';
    }
  }
  switch (contentType) {
    case 'form':
      if (typeof data !== 'string') {
        data = (0, _utils.buildQueryStringUrl)(data);
      }
      header = _extends({}, header, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      break;
    case 'json':
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      header = _extends({}, header, {
        'Content-Type': 'application/json'
      });
      break;
  }
  if (typeof data !== 'string') {
    data = '';
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: data,
      setting: {
        apiPrefix: apiPrefix,
        jsonp: jsonp,
        credentials: credentials
      },
      method: method,
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            headers = res.headers,
            data = res.data;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json' && typeof data == 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ', e);
            }
          }
          resolve(data);
        } else {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }
          headers = (0, _utils.tryJsonParse)(headers);
          reject({ data: data, headers: headers, status: status });
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/requestAnimationFrame/animationShim.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterPageTime = Date.now();

var TARGET_FPS = 60;

var requests = Object.create(null);

var raf_handle = 0;

var timeout_handle = -1;

function onFrameTimer() {
  var cur_requests = requests;
  requests = Object.create(null);
  timeout_handle = -1;
  Object.keys(cur_requests).forEach(function (id) {
    var request = cur_requests[id];

    request(Date.now() - enterPageTime);
  });
}

var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame(callback) {
  var cb_handle = ++raf_handle;
  requests[cb_handle] = callback;
  if (timeout_handle === -1) {
    timeout_handle = setTimeout(onFrameTimer, 1000 / TARGET_FPS);
  }
  return cb_handle;
};

var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame(handle) {
  delete requests[handle];
  if (Object.keys(requests).length === 0) {
    clearTimeout(timeout_handle);
    timeout_handle = -1;
  }
};

/***/ }),

/***/ "./src/interfaces/requestAnimationFrame/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// web端接口实现


var _animationShim = __webpack_require__("./src/interfaces/requestAnimationFrame/animationShim.js");

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'init',
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: 'requestAnimationFrame',
          value: function requestAnimationFrame() {
            return _animationShim.requestAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/requestAnimationFrame/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./src/interfaces/requestAnimationFrame/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RequestAnimationFactory = _index2.default.init();

var animationFrame = new RequestAnimationFactory();
exports.default = animationFrame.requestAnimationFrame();

/***/ }),

/***/ "./src/interfaces/setClipBoardData/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setClipBoardData;

var _index = __webpack_require__("./src/interfaces/getClipBoardData/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function setClipBoardData(text) {
  return new Promise(function (resolve, reject) {
    _index2.default.setClipBoardData(text, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/setStorage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'setStorage',
    value: function setStorage(key, value, cb) {
      try {
        wx.setStorage({
          key: key,
          data: value,
          success: function success() {
            cb({
              errno: 0,
              errMsg: 'success',
              data: value
            });
          },
          fail: function fail() {
            cb({
              errno: -1,
              errMsg: 'fail',
              data: ''
            });
          }
        });
      } catch (e) {
        var _errMsg = void 0;
        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }
        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/setStorage/index.js":
/***/ (function(module, exports, __webpack_require__) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = setStorage;

var _index = __webpack_require__("./src/interfaces/setStorage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function setStorage(key, value) {
  var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (valueType !== 'string') {
    value = JSON.stringify(value);
  }
  if (valueType === 'undefined') {
    console.warn('The type of storage value can not be "undefined"');
    return Promise.reject('The type of storage value cannot be "undefined"');
  }
  return new Promise(function (resolve, reject) {
    _index2.default.setStorage(key, value, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./src/interfaces/setTitle/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'setTitle',
    value: function setTitle(title) {
      wx.setNavigationBarTitle({
        title: title
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/setTitle/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = __webpack_require__("./src/interfaces/setTitle/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}

/***/ }),

/***/ "./src/interfaces/showToast/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/@didi/chameleon-loader/src/cml-compile/runtime/common/util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: 'showToast',
    value: function showToast(opt) {
      var message = opt.message,
          duration = opt.duration;

      wx.showToast({
        icon: 'none',
        title: message,
        duration: duration
      });
    }
  }]);

  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "./src/interfaces/showToast/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showToast;

var _index = __webpack_require__("./src/interfaces/showToast/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function showToast(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$duration = opt.duration,
      duration = _opt$duration === undefined ? 2000 : _opt$duration;

  _index2.default.showToast({
    message: message,
    duration: duration
  });
}

/***/ }),

/***/ "./src/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFn = isFn;
exports.isStr = isStr;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.buildQueryStringUrl = buildQueryStringUrl;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.getRefObj = getRefObj;
exports.compareVersion = compareVersion;

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isNum(obj) {
  return typeof obj === 'number';
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var strArr = [];
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      strArr.push(key + '=' + encodeURIComponent(obj[key]));
    }
  }
  return strArr.join('&');
}

function buildQueryStringUrl(params) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!url) return queryStringify(params);
  var retUrl = url;
  if (queryStringify(params)) {
    retUrl = url.indexOf('?') > -1 ? url + '&' + queryStringify(params) : url + '?' + queryStringify(params);
  }
  return retUrl;
}

function queryParse() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return !/^(https?\:\/\/)|^(\/\/)/.test(url);
}

function addApiPrefix(url, domainkey) {
  var domainMap = process.env.domainMap;
  // 新版cli
  if (domainMap) {
    var prefix = domainMap[domainkey] || process.env.devApiPrefix;
    return prefix + url;
  } else {
    // 老版本配置apiPrefix
    if (true) {
      return "http://172.24.40.88:8001" + url;
    }
  }
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    try {
      some = JSON.parse(some);
    } catch (err) {}
  }
  return some;
}

function getQueryParamsFromUrl(url) {
  var arr = url.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromUrl(url);

  var _queryObj$path = queryObj.path,
      path = _queryObj$path === undefined ? '' : _queryObj$path,
      _queryObj$envVersion = queryObj.envVersion,
      envVersion = _queryObj$envVersion === undefined ? '' : _queryObj$envVersion,
      _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$qq_appid = queryObj.qq_appid,
      qq_appid = _queryObj$qq_appid === undefined ? '' : _queryObj$qq_appid,
      _queryObj$qq_path = queryObj.qq_path,
      qq_path = _queryObj$qq_path === undefined ? '' : _queryObj$qq_path,
      _queryObj$qq_envVersi = queryObj.qq_envVersion,
      qq_envVersion = _queryObj$qq_envVersi === undefined ? '' : _queryObj$qq_envVersi,
      _queryObj$baidu_appid = queryObj.baidu_appid,
      baidu_appid = _queryObj$baidu_appid === undefined ? '' : _queryObj$baidu_appid,
      _queryObj$baidu_path = queryObj.baidu_path,
      baidu_path = _queryObj$baidu_path === undefined ? '' : _queryObj$baidu_path,
      _queryObj$baidu_envVe = queryObj.baidu_envVersion,
      baidu_envVersion = _queryObj$baidu_envVe === undefined ? '' : _queryObj$baidu_envVe,
      _queryObj$alipay_appi = queryObj.alipay_appid,
      alipay_appid = _queryObj$alipay_appi === undefined ? '' : _queryObj$alipay_appi,
      _queryObj$alipay_path = queryObj.alipay_path,
      alipay_path = _queryObj$alipay_path === undefined ? '' : _queryObj$alipay_path,
      _queryObj$alipay_envV = queryObj.alipay_envVersion,
      alipay_envVersion = _queryObj$alipay_envV === undefined ? '' : _queryObj$alipay_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$cml_addr = queryObj.cml_addr,
      cml_addr = _queryObj$cml_addr === undefined ? '' : _queryObj$cml_addr,
      extraData = _objectWithoutProperties(queryObj, ['path', 'envVersion', 'weixin_appid', 'weixin_path', 'weixin_envVersion', 'qq_appid', 'qq_path', 'qq_envVersion', 'baidu_appid', 'baidu_path', 'baidu_envVersion', 'alipay_appid', 'alipay_path', 'alipay_envVersion', 'weex_path', 'cml_addr']);

  var objTreated = {
    weex: cml_addr ? webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&cml_addr=' + cml_addr : null,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path || path,
      extraData: extraData,
      envVersion: weixin_envVersion || envVersion
    },
    qq: {
      appId: qq_appid,
      path: qq_path || path,
      extraData: extraData,
      envVersion: qq_envVersion || envVersion
    },
    alipay: {
      appId: alipay_appid,
      path: alipay_path || path,
      extraData: extraData,
      envVersion: alipay_envVersion || envVersion
    },
    baidu: {
      appKey: baidu_appid,
      path: baidu_path || path,
      extraData: extraData
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

// 获取ref的通用对象
function getRefObj(ref, context) {
  var refObj = {
    webDom: '',
    id: '',
    weexRef: '',
    context: context
  };
  // 容错处理
  if (!ref) return refObj;

  // 兼容新版ref, 为字符串
  if (typeof ref == 'string') {
    refObj.id = ref;
    if (false) {
      refObj.weexRef = context.$refs && context.$refs[ref];
    } else if (false) {
      refObj.webDom = context.$refs[ref] && context.$refs[ref][0] || context.$refs[ref] && context.$refs[ref].$el || context.$refs[ref];
    }
    return refObj;
  }

  // 向下兼容旧版ref
  if (true) {
    refObj.id = ref.id;
  } else if (process.env.platform === 'weex') {
    refObj.weexRef = ref;
  } else if (ref.$el) {
    refObj.webDom = ref.$el;
  } else {
    refObj.webDom = ref;
  }
  return refObj;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/**
 * 判断targetMap中的属性是否被checkMap的属性包含，不是则抛出错误
 * @param {Object || Array} checkMap 
 * @param {Object} targetMap 
 * @returns {Boolean}
 */
var checkValue = exports.checkValue = function checkValue(check, targetMap) {
  if (isObj(check) || isArray(check)) {
    var checkArray = isObj(check) ? Object.keys(check) : check;
    Object.keys(targetMap).forEach(function (key) {
      if (!checkArray.includes(key)) {
        throw Error(key + '\u503C\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u68C0\u67E5\uFF01');
      }
    });
  } else {
    // redLog('请传入数组或对象')
    return false;
  }
  return true;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../../../.nvm/versions/node/v9.11.2/lib/node_modules/@didi/chameleon-cli/node_modules/process/browser.js")))

/***/ })

/******/ });