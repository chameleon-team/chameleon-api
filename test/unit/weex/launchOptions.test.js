require('../../vm/wx/index');
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('获得启动参数', function () {
  it('getLaunchOptionsSync: 获得启动参数', function () {
    expect('cml').to.equal(cml.getLaunchOptionsSync().query.name);
  })
})
