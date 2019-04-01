import index from './index.interface';
import { isEmpty, addApiPrefix, isNeedApiPrefix, tryJsonParse, buildQueryStringUrl } from '../../lib/utils.js';
export default function request({
  domainkey, 
  url,
  data = {},
  method = 'GET', 
  header = {},
  contentType = 'form',
  setting = {},
  resDataType = 'json'
}) {
  let { apiPrefix = isNeedApiPrefix(url), jsonp = false, credentials = 'include' } = setting;
  let media = process.env.media;
  domainkey = domainkey || process.env.defaultDomainKey;
  // dev模式模拟多域名需要区分dmain
  if (media === 'dev' && domainkey) {
    url = buildQueryStringUrl({ domainkey }, url)
  }

  if (apiPrefix) {
    url = addApiPrefix(url, domainkey);
  }

  if (/^get$/gi.test(method)) {
    if (data && !isEmpty(data)) {
      url = buildQueryStringUrl(data, url)
    }
    if (typeof data !== 'string') {
      data = ''
    }
  } else {
    switch (contentType) {
    case 'form':
      if (typeof data !== 'string') {
        data = buildQueryStringUrl(data);
      }
      header = {
        ...header,
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      break;
    case 'json':
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      header = {
        ...header,
        'Content-Type': 'application/json'
      };
      break;
    }
  }

  return new Promise(function(resolve, reject) {
    index.request({
      url,
      body: data,
      setting: {
        apiPrefix,
        jsonp, 
        credentials
      },
      method,
      headers: header,
      cb: function(res) {
        let { status, data } = res;
        if (status >= 200 && status < 300) {
          if (resDataType === 'json' && typeof data == 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ', e)
            }
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
      }
    });
  });
}
