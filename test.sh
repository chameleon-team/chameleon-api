#!/bin/bash
set -e

node test/make/index.js web
node test/make/index.js wx
node test/make/index.js weex
node test/make/index.js qq
node test/make/index.js tt
node test/make/index.js baidu
node test/make/index.js alipay

babel-node ./node_modules/.bin/_mocha test/unit/*/*.test.js --recursive --reporter spec
