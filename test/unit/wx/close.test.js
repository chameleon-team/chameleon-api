require('../../vm/wx/index');
var cml = require('../../.api/wx/index')["default"];
var expect = require('chai').expect;

describe('关闭页面', function () {
  it('close: 关闭当前页面', function () {
    cml.close();
    expect(global.wx.wxPage.closed).to.be["true"];
  })
})
