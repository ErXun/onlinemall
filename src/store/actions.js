import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context, payLoad) {
    // 查找是否出现相同的商品
    let oldProduct = context.state.cartProducts.find(item => item.id === payLoad.id)
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct)
    } else {
      payLoad.count = 1
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}
