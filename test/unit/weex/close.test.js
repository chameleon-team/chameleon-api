require('../../vm/weex/index');
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('关闭页面', function () {
  it('close: 关闭当前页面', function () {
    cml.close();
    expect(global.weex.visible.page.closed).to.be["true"];
  })
})
