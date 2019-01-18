require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('关闭页面', function () {
  it('close: 关闭当前页面', function () {
    cml.close();
    var closed = global.weex.visible.page.closed || global.visible.webview.page.closed;
    expect(closed).to.be["true"];
  })
})
