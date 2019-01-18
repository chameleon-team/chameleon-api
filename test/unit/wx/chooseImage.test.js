require('../../vm/wx/index')
var cml = require('../../.api/wx/index')["default"];
var expect = require('chai').expect;

describe('选择图片', function () {
  it('chooseImage: 选择图片(wx)', function () {
    return cml.chooseImage({ type: 'choice' }).then((res) => {
      expect(res.WxTempFilePaths).to.have.length.above(0);
    })
  })
})
