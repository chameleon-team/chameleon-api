require('../../vm/weex/index');
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('请求数据', function () {
  var url = 'http://abc.com/api/user/1';
  var data = { name: 'vava' };
  var header = { 'Accept-Encoding': 'testAE' };
  var resDataType = 'json';

  it('get', function () {
    return cml.get({
      url,
      header
    }).then(function (res) {
      expect(res.errno).to.equal('0');
    })
  })

  it('post', function () {
    return cml.post({
      url,
      data,
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal('vava');
    })
  })


  it('put', function () {
    return cml.request({
      url,
      data,
      method: 'put',
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal('vava');
    })
  })

  it('delete', function () {
    return cml.request({
      url,
      data,
      method: 'delete',
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal('vava');
    })
  })

  it('request', function () {
    return cml.request({
      url,
      data,
      header,
      resDataType
    }).then(function (res) {
      expect(res.name).to.equal(data.name);
    })
  })
})
