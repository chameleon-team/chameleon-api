require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('数据存储', function () {
  it('setStorage: 存入本地存储', function () {
    var testKey = 'name';
    var testValue = 'vava';
    return cml.setStorage(testKey, testValue).then(function (res) {
      var webStorageValue = localStorage.getItem(testKey);
      expect(webStorageValue).to.equal(testValue);
    })
  })

  it('getStorage: 获取本地存储', function () {
    var testKey = 'name';
    var testValue = 'vava';
    return cml.getStorage(testKey).then(function (value) {
      expect(value).to.equal(testValue);
    })
  })
})
