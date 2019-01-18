require('../../vm/web/index')
var cml = require('../../.api/web/index')["default"];
var expect = require('chai').expect;

describe('选择图片', function () {
  it('chooseImage: 选择图片(web)', function () {
    return cml.chooseImage({ type: 'choice' }).then((res) => {
      expect(res.base64).to.match(/^data:image\/\w+;base64,.+/);
    })
  })
})
