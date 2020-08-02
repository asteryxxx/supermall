import {request} from "./request"
import {requestziji} from "./request"

// 为首页提供所需要的所有方法函数
export function getHomeMultidata() {
   return request({
     url:'/home/multidata'
   })
}

export function getHomeGoods(type,page) {
  //需要传参数过来，类型和页码
  console.log("进来了home.js 的类型："+type);
  let beitai="";
  if(type==='pop'){
    beitai='pop'
  }else if(type==='new'){
    beitai='new'
  }else{
    beitai='sell'
  }
  return requestziji({
    url: '/'+beitai ,
    params:{
      type,page
    }
  })
}
