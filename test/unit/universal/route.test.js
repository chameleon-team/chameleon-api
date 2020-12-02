/* eslint-disable global-require, no-loop-func, dot-notation */
const fs = require('fs');
const path = require('path');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const cmlTypes = ['wx', 'qq', 'tt', 'baidu', 'alipay'];
const globalAlias = { baidu: 'swan', alipay: 'my' };

for (const type of cmlTypes) {
  const navigateToSpy = chai.spy();
  const redirectToSpy = chai.spy();
  const globalName = globalAlias[type] || type;
  const vmPath = path.resolve(__dirname, `../../vm/${type}/index.js`);
  if (fs.existsSync(vmPath)) {
    require(vmPath);
    global[globalName].navigateTo = navigateToSpy;
    global[globalName].redirectTo = redirectToSpy;
  } else {
    global[globalName] = new Proxy(global[globalName] || {}, {
      get: function (target, prop) {
        if (prop === 'getSystemInfoSync') {
          return () => ({ windowWidth: 375 });
        }
        if (prop === 'navigateTo') {
          return navigateToSpy;
        }
        if (prop === 'redirectTo') {
          return redirectToSpy;
        }
        return Reflect.get(...arguments);
      },
    });
  }

  const cml = require(`../../.api/${type}/index`)['default'];

  describe(`route: ${type}`, function () {
    it('navigateTo', function () {
      const url = 'https://www.example.com?foo=1&bar=2';
      const webviewUrl = `/webview?url=${encodeURIComponent(url)}`;

      cml.navigateTo({ path: `/webview`, query: { url } });
      chai.expect(navigateToSpy).first.be.called.with({ url: webviewUrl });

      cml.navigateTo({ path: `/webview?url=${encodeURIComponent(url)}` });
      chai.expect(navigateToSpy).second.be.called.with({ url: webviewUrl });
    });

    it('redirectTo', function () {
      const url = 'https://www.example.com?foo=1&bar=2';
      const webviewUrl = `/webview?url=${encodeURIComponent(url)}`;

      cml.redirectTo({ path: `/webview`, query: { url } });
      chai.expect(redirectToSpy).first.be.called.with({ url: webviewUrl });

      cml.redirectTo({ path: `/webview?url=${encodeURIComponent(url)}` });
      chai.expect(redirectToSpy).second.be.called.with({ url: webviewUrl });
    });
  });
}
