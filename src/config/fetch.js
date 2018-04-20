import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 异常
     */
    const res = response.data
    if (!res.flag) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    /**
     * 报错
     */
    console.log(error.response) // for debug
    if (error.response.status === 401) {
      console.log('登录失效请重新登录')
    } else {
      console.log('服务器异常' + error.response.status)
    }
    return Promise.reject(error)
  }
)

export default service
