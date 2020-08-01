import {request} from "./request"
// 为首页提供所需要的所有方法函数
export function getHomeMultidata() {
   return request({
     url:'/home/multidata'
   })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,page
    }
  })
}
