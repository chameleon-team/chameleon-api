import index from '../request/index.interface';
import { queryStringify, isEmpty, addApiPrefix, isNeedApiPrefix, tryJsonParse } from '../../lib/utils.js';

export default function get({
  domainkey,
  url,
  data = {},
  header = {},
  setting = { apiPrefix: isNeedApiPrefix(url) },
  resDataType = 'json'
}) {
  let media = process.env.media;
  domainkey = domainkey || process.env.defaultDomainKey;
  // 兼容mock-api
  if (media === 'dev') {
    if (url.indexOf('?') === -1) {
      url += '?';
    }
    url += queryStringify({ domainkey });
  }
  if (setting.apiPrefix) {
    url = addApiPrefix(url, domainkey);
  }
  if (data && !isEmpty(data) && queryStringify(data)) {
    if (url.indexOf('?') === -1) {
      url += '?';
    }
    url += queryStringify(data);
  }

  return new Promise(function (resolve, reject) {
    index.request({
      url,
      body: '',
      method: 'GET',
      setting,
      headers: header,
      cb: function (res) {
        let { status, data } = res;
        if (status >= 200 && status < 300) {
          if (resDataType === 'json') {
            data = tryJsonParse(data);
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
      }
    });
  });
}
