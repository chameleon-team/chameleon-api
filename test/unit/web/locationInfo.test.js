require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('获得地理位置信息', function () {
  it('getLocationInfo: 获得地理位置信息', function () {
    return cml.getLocationInfo().then(function (res) {
      expect(res.lat).to.match(/.+/);
      expect(res.lng).to.match(/.+/);
    })
  })
})
