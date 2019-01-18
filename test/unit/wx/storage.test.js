require('../../vm/wx/index');
var cml = require('../../.api/wx/index')["default"];
var expect = require('chai').expect;

describe('数据存储', function () {
  it('setStorage: 存入本地存储', function () {
    var testKey = 'name';
    var testValue = 'vava';
    return cml.setStorage(testKey, testValue).then(function (res) {
      var storageValue = global.wx.getStorageSync(testKey);
      expect(storageValue).to.equal(testValue);
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
