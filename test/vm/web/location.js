var visible = require('./visible');

var location = module.exports = {
  href: '',
  replace: function (url) {
    visible.webview.page.replaced = true;
    location.href = url;
  }
}
