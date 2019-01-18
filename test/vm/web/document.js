var document = module.exports = {
  documentElement: {
    clientWidth: 375,
    clientHeight: 667
  },
  body: {
    clientWidth: 375,
    clientHeight: 667,
    appendChild: function (element) { },
    removeChild: function (element) { }
  },
  title: '',
  addEventListener: function () { },
  createElement: function (tagName) {
    var elementProps = {
      name: '',
      id: '',
      type: '',
      style: {},
      attributes: {},
      setAttribute: function (key, value) {
        this.attributes[key] = value;
      },
      getAttribute: function (key) {
        return this.attributes[key];
      },
      getBoundingClientRect: function () {
        return {
          bottom: -13,
          height: 25,
          left: 0,
          right: 1100,
          top: -38,
          width: 1100,
          x: 0,
          y: -38
        }
      }
    }

    if (tagName === 'input') {
      Object.defineProperty(elementProps, 'value', {
        get: function () {
          return elementProps.attributes.value || '';
        },
        set: function (newValue) {
          elementProps.attributes.value = newValue;
        },
        enumerable: true,
        configurable: true
      });
      elementProps.focus = function () { };
      elementProps.setSelectionRange = function (start, end) {
        document._selectionRange = elementProps.value;
      };
    }

    if (tagName === 'script') {
      elementProps.src = '';
      elementProps.onload = function () { };
    }
    if (elementProps.onload) {
      var timeout = 0;
      setTimeout(function () {
        var onloadFunc = elementProps.onload;
        var callbackName = elementProps.src.match(/callback\=(.*?)(&|$)/)[1];
        window[callbackName]({ errno: '0' });
        onloadFunc({ type: 'load' });
      }, timeout);
    }
    return elementProps;
  },
  _selectionRange: '',
  _clipBoardData: '',
  execCommand: function (cmd) {
    var cmdMap = {
      copy: function () {
        document._clipBoardData = document._selectionRange;
        return true;
      }
    }
    return cmdMap[cmd]();
  }
}
