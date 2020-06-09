import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 事件总线
Vue.use(toast) // 安装 toast 插件
FastClick.attach(document.body);// 解决移动端 300ms 的延迟

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
