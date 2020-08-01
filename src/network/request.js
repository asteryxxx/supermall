import axios from 'axios'
export function request(config) {
   //config:是参数，在里面对axios进行封装
   //1.创建axios实例，不要用全局
   const instance =axios.create({
       baseURL:"http://152.136.185.210:8000",
       timeout: 5000
   })//实例创建好，要把别人传的config要传到instance里面才能进行请求

/*   //别人不会在这里处理结果，要把结果给调用者返回回去
    instance(config).then(res=>{
 //可以让别人在传config的同时传入一个success函数，
        success(res)//通过success回调出去
    }).catch(err =>{
        failure(err)
    })*/

  instance.interceptors.request.use(config=> {
    //  console.log(config)}
    return config //拦截完记得还回去，不然会请求失败
  }, err => {

  })
  //请求拦截
  return  instance(config)
}

/*
instance(config.baseConfig).then(res=>{
    config.success(res)
}).catch(err =>{
    config.failure(err)
})
} */

/*
export function request(config ,success,failure) {
    return new Promise((resolve,reject)=>{
        const instance =axios.create({
            baseURL:"http://111.11:8080",
            timeout: 5000
        })//实例创建好，要把别人传的config要传到instance里面才能进行请求
        instance(config).then(res=>{
            resolve(res)
        }).catch(err =>{
            reject(err)
        })
    })
}
*/

/*export function request(config) {
        const instance =axios.create({
            baseURL:"http://111.11:8080",
            timeout: 5000
        })//实例创建好，要把别人传的config要传到instance里面才能进行请求*/
   /* instance.interceptors.request.use(
        config=>{
            console.log(config)}
        //1、比如config中的一些信息不符合服务器的要求
        //比如在请求过来添加独立的header。

       //2、比如每次发送网络请求时，都希望在界面显示一个请求的图标
      //请求成功再消失。每次发送的时候图标show出来，请求成功再去响应拦截隐藏起来

       //3、某些网络请求（登陆token）必须携带一些特殊的信息
            return config//拦截完记得还回去，不然会请求失败
        err=>{
            console.log(err)}
    )
    //请求拦截
      return  instance(config)*/


