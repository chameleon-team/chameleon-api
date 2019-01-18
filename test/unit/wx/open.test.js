require('../../vm/wx/index')
var cml = require('../../.api/wx/index')["default"];
var expect = require('chai').expect;

describe('打开', function () {
  it('open：打开新的小程序”', function () {
    var addr = 'https://api.didialift.com/beatles/h5/passenger/order/calculatecostdetailv2?wx_addr=xxx29134e8fa.js&weixin_appid=123456&cml_path=page/a/b/c';
    cml.open(addr);
    expect(global.wx.app.opened).to.be["true"];
  })
})
