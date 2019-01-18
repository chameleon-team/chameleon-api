require('../../vm/weex/index')
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('设置title', function () {
  it('setTitle：设置title为“Chameleon”', function () {
    const title = 'Chameleon';
    cml.setTitle(title);
  })
})
