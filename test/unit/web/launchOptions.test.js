require('../../vm/web/index');
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('获得启动参数', function () {
  it('getLaunchOptionsSync: 获得启动参数', function () {
    location.href = 'http://abc.com?name=cml';
    expect('cml').to.equal(cml.getLaunchOptionsSync().query.name);
  })
})
