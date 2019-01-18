require('../../vm/weex/index')
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('打开页面', function () {
  it('open：打开页面”', function () {
    var addr = 'http://www.w3school.com.cn';
    cml.open(addr);
    expect(global.weex.visible.page.opened).to.be["true"];
  })
})
