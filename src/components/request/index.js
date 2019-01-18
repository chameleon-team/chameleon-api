

import index from './index.interface';
import cml from '../../api/index.js';
import { queryStringify } from '../../lib/utils.js';
export function get({url, data={}, header={}, setting = {apiPrefix: true}, resDataType = 'json' }) {
  if(setting.apiPrefix) {
    url = addApiPrefix(url);
  }

  if (data && queryStringify(data)) {
    url += '?' + queryStringify(data)
  }

  return new Promise(function(resolve, reject){
    index.request({
      url,
      body: '',
      method: 'GET',
      headers: header,
      cb: function(res) {
        let {status, data, headers} = res;
        if(status >= 200 && status < 300) {
          if(resDataType === 'json') {
            data = JSON.parse(data);
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
      }
    })
  })
}


//contentType 支持json和form 不支持formdata body不知道如何处理
export function post({url, data={}, header={}, contentType = 'form', setting = {apiPrefix: true}, resDataType = 'json' }) {
  if(setting.apiPrefix) {
    url = addApiPrefix(url);
  }
  switch (contentType) {
    case 'form':
      data = queryStringify(data);
      header = {
        ...header,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      break;
    case 'json':
      data = JSON.stringify(data);
      header = {
        ...header,
        'Content-Type': 'application/json'
      }
      break;
  }


  return new Promise(function(resolve, reject) {
    index.request({
      url,
      body: data,
      method: 'POST',
      headers: header,
      cb: function(res) {
        let {status, data, headers} = res;
        if(status >= 200 && status < 300) {
          if(resDataType === 'json') {
            data = JSON.parse(data);
          }
          resolve(data);
        } else {
          reject('http statusCode:' + status);
        }
       
      }
    })
  })
}

function addApiPrefix(url) {
  if (process.env.cmlApiPrefix) {
    return process.env.cmlApiPrefix + url;
  }
  return url;
}
