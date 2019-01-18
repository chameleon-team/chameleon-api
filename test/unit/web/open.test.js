require('../../vm/web/index')
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('打开页面', function () {
  it('open：打开web页面”', function () {
    var addr = 'http://www.w3school.com.cn';
    cml.open(addr);
    expect(global.location.href).to.have.string(addr);
  })
  it('open：打开web页面并传参”', function () {
    var addr = 'http://www.w3school.com.cn';
    cml.open(addr, { name: 'jalon' });
    expect(global.location.href).to.have.string(addr);
    expect(global.location.href).to.have.string('name=jalon');
  })
  it('open：打开web页面并传参，并关闭当前页面”', function () {
    var addr = 'http://www.w3school.com.cn';
    cml.open(addr, { name: 'jalon' }, {
      closeCurrent: true
    });
    expect(global.visible.webview.page.replaced).to.be["true"];
    expect(global.location.href).to.have.string(addr);
  })
})
