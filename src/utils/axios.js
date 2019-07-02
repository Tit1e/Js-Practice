import axios from 'axios'
import { Notification } from 'element-ui'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? "http://129.204.79.16:3000" : "http://129.204.79.16:3000", // api 的 base_url
  timeout: 5000 // request timeout
})


// respone interceptor
service.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      Notification.error(response.data.msg)
      return Promise.reject(response.data.msg)
    }
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  })

export default service