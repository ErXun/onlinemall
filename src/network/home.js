import { request } from './request'

export function getHomeMulti() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeProduct(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}

