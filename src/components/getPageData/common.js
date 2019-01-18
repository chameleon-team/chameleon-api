
import cml from "../../api/index.js";
import {get, post} from "../request/index.js";
//项目中如果需要添加token信息请改造该方法
export function ajaxGetData({ url, errnoWhiteList = [], params = {} }) {
  return new Promise(function(resolve, reject) {
    params = paramsFilter(params)

      get({
        url,
        data: {
          puredata: 1,
          ...params
        },
      }).then(res=>{
        if(res.errno == 0 || checkErron(res.errno, errnoWhiteList)) {
          
          resolve(res)
        } else {
          throw new Error(`errno 为 ${res.errno}`);
        }
      }).catch(e=>{
         //做跳转错误页面处理
        //  cml.redirectTo({path: '/beatles/h5/errorpage'});
      })
  })
}
function checkErron(errno, errnoWhiteList) {
    if (Object.prototype.toString.apply(errnoWhiteList) !== '[object Array]') {
        return false;
    } else {
        return errnoWhiteList.some(item =>  item == errno)
    }
}

/**
 * 过滤 cml 无用请求参数
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
 function paramsFilter(params = {}) {

  delete params['wx_addr']
  delete params['weex_path']
  delete params['weixin_appid']
  delete params['weixin_path']

  return params
}
