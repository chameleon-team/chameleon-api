const api = {
  alert: {
    baseOn: {
      sdk: 'alert',
      web: 'alert',
      wx: 'showModal',
      weex: 'modal.alert'
    }
  },
  cancelAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'cancelAnimationFrame',
      web: 'cancelAnimationFrame',
      wx: 'cancelAnimationFrame',
      weex: 'cancelAnimationFrame'
    }
  },
  canIUse: {
    allCanUse: true,
    baseOn: {
      sdk: 'canIUse',
      web: 'canIUse',
      wx: 'canIUse',
      weex: 'canIUse'
    }
  },
  chooseImage: {
    baseOn: {
      sdk: 'chooseImage',
      web: 'chooseImage',
      wx: 'chooseImage',
      weex: ''
    }
  },
  close: {
    baseOn: {
      sdk: 'close',
      web: 'close',
      wx: 'navigateBack',
      weex: ''
    }
  },
  confirm: {
    baseOn: {
      sdk: 'confirm',
      web: 'confirm',
      wx: 'showModal',
      weex: 'modal.confirm'
    }
  },
  cpx2px: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      weex: 'getSystemInfo'
    }
  },
  get: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      weex: 'fetch'
    }
  },
  getClipBoardData: {
    baseOn: {
      sdk: 'getClipBoardData',
      web: 'getClipboardData',
      wx: 'getClipboardData',
      weex: 'clipboard.getString'
    }
  },
  getLocationInfo: {
    baseOn: {
      sdk: 'getLocationInfo',
      web: 'getCurrentPosition',
      wx: 'getLocation',
      weex: ''
    }
  },
  getRect: {
    baseOn: {
      sdk: 'getComponentRect',
      web: 'getComputedStyle',
      wx: 'createSelectorQuery',
      weex: 'getComponentRect'
    }
  },
  getStorage: {
    baseOn: {
      sdk: 'getStorage',
      web: 'localStorage.getItem',
      wx: 'getStorageSync',
      weex: 'storage.getItem'
    }
  },
  getSystemInfo: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfo',
      weex: 'getSystemInfo'
    }
  },
  initSocket: {
    baseOn: {
      sdk: 'initSocket',
      web: 'initSocket',
      wx: 'connectSocket',
      weex: ''
    }
  },
  getLaunchOptionsSync: {
    baseOn: {
      sdk: 'getQueryObjSync',
      web: 'location.href',
      wx: 'getLaunchOptionsSync',
      weex: 'weex.config.bundleUrl'
    }
  },
  navigateBack: {
    baseOn: {
      sdk: 'navigateBack',
      web: 'navigateBack',
      wx: 'navigateBack',
      weex: 'navigateBack'
    }
  },
  navigateTo: {
    baseOn: {
      sdk: 'navigateTo',
      web: 'navigateTo',
      wx: 'navigateTo',
      weex: 'navigateTo'
    }
  },
  open: {
    baseOn: {
      sdk: 'open',
      web: 'location.href',
      wx: 'navigateToMiniProgram',
      weex: 'navigator.push'
    }
  },
  post: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      weex: 'fetch'
    }
  },
  px2cpx: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      weex: 'getSystemInfo'
    }
  },
  redirectTo: {
    baseOn: {
      sdk: 'redirectTo',
      web: 'router.replace',
      wx: 'navigateTo',
      weex: 'router.replace'
    }
  },
  reload: {
    baseOn: {
      sdk: 'reload',
      web: 'location.reload',
      wx: '',
      weex: ''
    }
  },
  removeStorage: {
    baseOn: {
      sdk: 'removeStorage',
      web: 'localStorage.removeItem',
      wx: 'removeStorageSync',
      weex: 'storage.removeItem'
    }
  },
  request: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      weex: 'fetch'
    }
  },
  requestAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'setTimeout',
      web: 'requestAnimationFrame',
      wx: 'setTimeout',
      weex: 'requestAnimationFrame'
    }
  },
  setClipBoardData: {
    baseOn: {
      sdk: 'setClipBoardData',
      web: 'setClipBoardData',
      wx: 'getClipboardData',
      weex: 'clipboard.setString'
    }
  },
  setStorage: {
    baseOn: {
      sdk: 'setStorage',
      web: 'localStorage.setItem',
      wx: 'setStorageSync',
      weex: 'storage.setItem'
    }
  },
  setTitle: {
    baseOn: {
      sdk: 'setTitle',
      web: 'document.title',
      wx: 'setNavigationBarTitle',
      weex: ''
    }
  },
  showToast: {
    baseOn: {
      sdk: 'showToast',
      web: 'showToast',
      wx: 'showToast',
      weex: 'modal.toast'
    }
  }
};

export {
  api
};
