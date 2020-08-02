import axios from 'axios'
export function request(config) {
   //config:是参数，在里面对axios进行封装
   //1.创建axios实例，不要用全局
   const instance =axios.create({
       baseURL:"http://123.207.32.32:8000",
       timeout: 5000
   })//实例创建好，要把别人传的config要传到instance里面才能进行请求

  instance.interceptors.request.use(config=> {
    //  console.log(config)}
    return config //拦截完记得还回去，不然会请求失败
  }, err => {
  })
  //请求拦截
  return  instance(config)
}

export function requestziji(config) {
  //config:是参数，在里面对axios进行封装
  //1.创建axios实例，不要用全局
  const instance =axios.create({
    baseURL:"http://localhost:3000",
    timeout: 5000
  })//实例创建好，要把别人传的config要传到instance里面才能进行请求

  instance.interceptors.request.use(config=> {
    //  console.log(config)}
    return config //拦截完记得还回去，不然会请求失败
  }, err => {
  })
  //请求拦截
  return  instance(config)
}


