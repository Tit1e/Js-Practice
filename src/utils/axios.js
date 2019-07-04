import axios from 'axios'
import Notify from '@/utils/notify.js'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? "http://129.204.79.16:3000" : "http://129.204.79.16:3000", // api 的 base_url
  timeout: 5000 // 请求超时时间
})


// 对返回结果进行拦截，统一处理错误情况，只在成功时抛出数据，减少后续处理判断
service.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      Notify.error(response.data.msg)
      return Promise.reject(response.data.msg)
    }
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  })

export default service