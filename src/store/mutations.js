// mutations:只用来修改 state 中的属性；跟踪数据的更改；只支持同步方法，不支持异步操作
import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation-types'
export default {
  [ADD_COUNT](state, payLoad) {
    payLoad.count++
  },
  [ADD_TO_CART](state, payLoad) {
    payLoad.checked = true
    state.cartProducts.push(payLoad)
  }
}
