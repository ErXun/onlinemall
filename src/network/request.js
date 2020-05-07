import axios from 'axios'

export function request(config) {
  // 1. 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.拦截器，用于每次发送请求，或者得到响应后，对数据进行相应的处理
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config  //
  }, err => {
    return err
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(response => {
    return response.data  //
  }, err => {
    return err
  })
  // 3.发送真正的网络请求
  return instance(config) // instance(config) 返回值本身就是一个 Promise
}
