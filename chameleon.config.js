
//设置静态资源的线上路径
const publicPath = '';
//设置api请求前缀
const apiPrefix = '';

cml.config.merge({
  enableGlobalCheck: true,
  globalCheckWhiteList: [
    '.spec.js', 
    'core-js/library/modules/_global.js', 
    'chameleon-ui-builtin/assets/js/utils/utils.js',
    'chameleon-runtime/src/platform/common/util/KEY.js',
    '_microtask.js', 'mobx.module.js', '_task.js', '_object-gopn-ext.js'],
  cmlNpm: [
    'chameleon-bridge',
    'chameleon-runtime',
    'chameleon-store',
    'cml-ui',
    'chameleon-ui-builtin',
    'chameleon-api'
  ],
  cmlComponents: [
  ],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: '',
    webPath: ''
  },
  check: {
    enable: true,
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

