
import index from './index.interface';


export function getPageData({ url, errnoWhiteList = [], params ={} }) {
  return new Promise(function(resolve, reject) {
    index.getPageData(url, JSON.stringify(errnoWhiteList), JSON.stringify(params), function(res){
      resolve(JSON.parse(res));
    })
  })
} 