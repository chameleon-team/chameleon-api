require('../../vm/web/index')
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('单位转换', function () {
  it('px2cpx 375px', function () {
    const pxNumber = 750;
    const cpxNumber = 1500;
    expect(cpxNumber).to.equal(cml.px2cpx(pxNumber));
  })
  it('px2cpx 414px', function () {
    const pxNumber = 414;
    const cpxNumber = 828;
    expect(cpxNumber).to.equal(cml.px2cpx(pxNumber));
  })
  it('cpx2px 750cpx', function () {
    const cpxNumber = 750;
    const pxNumber = 375;
    expect(pxNumber).to.equal(cml.cpx2px(cpxNumber));
  })
  it('cpx2px 828cpx', function () {
    const cpxNumber = 828;
    const pxNumber = 414;
    expect(pxNumber).to.equal(cml.cpx2px(cpxNumber));
  })
})
