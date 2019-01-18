require('../../vm/web/index')
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('设置title', function () {
  it('setTitle：设置title为“Chameleon”', function () {
    const title = 'Chameleon';
    cml.setTitle(title);
    expect(title).to.equal(global.document.title);
  })
})
