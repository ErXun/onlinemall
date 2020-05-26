import { request } from './request'
export function getDetailInfo(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 获取推荐数据
export function getRecommendInfo() {
  return request({
    url: '/recommend',
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class itemParams {
  constructor(itemParams) {
    this.set = itemParams.info.set
    this.table = itemParams.rule.tables[0]
  }
}
