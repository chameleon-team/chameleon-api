require('../../vm/wx/index')
var cml = require('../../.api/wx/index')["default"];
var expect = require('chai').expect;

describe('设置title', function () {
  it('setTitle：设置title为“Chameleon”', function () {
    const title = 'Chameleon';
    cml.setTitle(title);
    expect(title).to.equal(global.wx.wxPage.title);
  })
})
