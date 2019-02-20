import index from './index.interface';
import { queryStringify, isEmpty, addApiPrefix, isNeedApiPrefix, tryJsonParse } from '../../lib/utils.js';

// 为支持 DELETE / PUT 方法增加此方法
export default function request({
  url,
  data = {},
  method = 'GET',
  header = {},
  contentType = 'form',
  setting = { apiPrefix: isNeedApiPrefix(url) },
  resDataType = 'json'
}) {
  if (setting.apiPrefix) {
    url = addApiPrefix(url);
  }
  switch (contentType) {
  case 'form':
    data = queryStringify(data);
    header = {
      ...header,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    break;
  case 'json':
    data = JSON.stringify(data);
    header = {
      ...header,
      'Content-Type': 'application/json'
    };
    break;
  }

  return new Promise(function(resolve, reject) {
    index.request({
      url,
      body: data,
      setting,
      method,
      headers: header,
      cb: function(res) {
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
