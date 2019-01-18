require('../../vm/web/index')
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('动画帧', function () {
  var rafId = null;
  it('requestAnimationFrame', function () {
    rafId = cml.requestAnimationFrame(function (flag) {
      expect(flag).to.equal(true);
    })
  })

  it('cancelAnimationFrame', function () {
    // mock使存在返回值，表示方法被调用到正确的方法
    var result = cml.cancelAnimationFrame(rafId)
    expect(result).to.equal(true);
  })
})
