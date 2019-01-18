#!/bin/bash
set -e

node test/make/index.js web
node test/make/index.js wx
node test/make/index.js weex

babel-node ./node_modules/.bin/istanbul cover --report lcov --root test/.api/ node_modules/mocha/bin/_mocha -- -R spec --colors --recursive test/unit/*/*.test.js