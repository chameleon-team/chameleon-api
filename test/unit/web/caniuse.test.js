require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('canIUse', function () {
  it('canIUse: getSomeThing不可用', function () {
    return cml.canIUse('getSomeThing').then(function (res) {
      expect(res).to.equal(true);
    }, function(reject) {
      expect(reject).to.equal(false);
    })
  })
  it('canIUse: getLocationInfo可以用', function () {
    return cml.canIUse('getLocationInfo').then(function (res) {
      expect(res).to.equal(true);
    }, function(reject) {
      expect(reject).to.equal(false);
    })
  })
})
