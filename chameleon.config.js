
//设置静态资源的线上路径
const publicPath = '';
//设置api请求前缀
const apiPrefix = '';

cml.config.merge({
  enableGlobalCheck: true,
  globalCheckWhiteList: ['.spec.js'],
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

