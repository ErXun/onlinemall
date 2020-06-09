import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      // 查找是否出现相同的商品
      let oldProduct = context.state.cartProducts.find(item => item.id === payLoad.id)
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('当前商品数量+1')
      } else {
        payLoad.count = 1
        context.commit(ADD_TO_CART, payLoad)
        resolve('添加新商品')
      }
    })
  },
}
