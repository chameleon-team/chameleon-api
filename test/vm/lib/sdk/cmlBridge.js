let cmlBridge = {
  callNative: function () {
  },
  canIUse: function (param, cb) {
    cb(true);
  },
  inSDK: function () {
    return true;
  },
  setTitle: function (param) {
    global.document.title = param.title;
  },
  getSDKInfo: function (param, cb) {
    cb({
      version: '0.0.6'
    })
  },
  getSystemInfo: function (param, cb) {
    cb({
      errno: 0,
      data: {
        "scale": 3,
        "deviceWidth": 1080,
        "deviceHeight": 2340,
        "os": "android",
        "extraParams": {
          "model": "PAFM00",
          "imei": "356416465466244",
          "netType": "WIFI"
        },
        msg: ''
      }
    })
  },
  getLocationInfo: function (param, cb) {
    cb({
      errno: 0,
      errMsg: '',
      data: {
        lat: '123.456',
        lng: '123.456'
      }
    })
  },
  chooseImage: function (params, callbackSuccess, callbackFail) {
    callbackSuccess({
      errno: 0,
      msg: '',
      data: {
        base64: 'data:image/png;base64,somedata',
        type: 'png',
        image: 'somedata',
        WxTempFilePaths: []
      }
    })
  },
  _clipBoardData: '',
  setClipBoardData: function (param, cb) {
    global.weex._clipBoardData = param.data;
    cb({
      errno: 0,
      errMsg: '',
      data: param.data
    })
  },
  getClipBoardData: function (param, cb) {
    var text = global.weex._clipBoardData;
    cb({
      errno: 0,
      errMsg: '',
      data: text
    })
  },
  getComponentRect: function (param, cb) {
    cb({
      width: 100,
      height: 100,
      left: 100,
      top: 100,
      right: 100,
      bottom: 100
    })
  },
  close: function () {
    global.weex.visible.page.closed = true;
  },
  open: function () {
    global.weex.visible.page.opened = true;
  },
  updateNaviTitle: function ({ title = '' }) {
    global.document.title = title;
  },
  setStorage: function (params, cb) {
    global.weex._storage[params.key] = params.value;
    cb({
      errno: 0,
      errMsg: '',
      data: params.value
    });
  },
  getStorage: function (params, cb) {
    cb({
      errno: 0,
      errMsg: '',
      data: global.weex._storage[params.key]
    });
  },
  getQueryObjSync() {
    return {
      name: 'cml'
    }
  },
  request: function (params) {
    var fromData = queryParse(params.body);
    var fromDataLength = Object.keys(fromData).length;
    var cb = params.cb;
    var res = {
      errno: "0"
    }
    if (fromDataLength) {
      res = fromData;
    }
    cb({
      status: 200,
      data: res
    })
  }
}

function queryParse(search = '') {
  let arr = search.split(/(\?|&)/);
  let parmsObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      let keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

export default cmlBridge;
