[![Build Status](https://travis-ci.org/beatles-chameleon/chameleon-api.svg?branch=master)](https://travis-ci.org/beatles-chameleon/chameleon-api)

# 使用说明
本仓库为chameleon的api的相关代码

## 如何开发
```
npm i
cml dev
```

## 单元测试与覆盖率测试
```
npm run test
npm run cover
```

## 接口文档

chameleon 支持大量基础API，对外提供统一的接口，以模块的方式引入chameleon-api进行使用。
接口查看及扩展等请见文档： https://beatles-chameleon.github.io/doc/api/api.html


例如:
``` javascript
import cml from 'chameleon-api'

cml.showToast({
  message: 'Hello world!',
  duration: 1000
})
```
