require('../../vm/wx/index');
var cml = require('../../.api/wx/index')["default"];
var expect = require('chai').expect;

describe('获得系统信息', function () {
  it('getSystemInfo: 获得系统信息', function () {
    return cml.getSystemInfo().then(function (res) {
      expect(res.os).to.match(/ios|android/);
    })
  })
})
