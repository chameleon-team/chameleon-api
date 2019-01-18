require('../../vm/weex/index')
var cml = require('../../.api/weex/index')["default"];
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
    cml.cancelAnimationFrame(rafId)
    expect(global.weex._timeoutCleared).to.equal(true);
  })
})
