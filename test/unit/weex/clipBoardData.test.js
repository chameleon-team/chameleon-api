require('../../vm/weex/index');
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('剪切板', function () {
  var testText = 'vava';
  it('setClipBoardData: 存入剪切板', function () {
    return cml.setClipBoardData(testText).then(function () {
      expect(testText).to.equal(global.weex._clipBoardData);
    })
  })

  it('getClipBoardData: 获取剪切板数据', function () {
    return cml.getClipBoardData(testText).then(function (text) {
      expect(testText).to.equal(text);
    })
  })
})
