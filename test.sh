#!/bin/bash
set -e

node test/make/index.js web
node test/make/index.js wx
node test/make/index.js weex

babel-node ./node_modules/.bin/_mocha test/unit/*/*.test.js --recursive --reporter spec