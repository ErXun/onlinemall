import Vue from 'vue'
import vueRouter from 'vue-router'
// 1. 安装插件
Vue.use(vueRouter)


// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopCart/ShopCart')
const Profile = () => import('views/profile/Profile')

// 3.配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopCart',
    component: ShopCart
  }, {
    path: '/profile',
    component: Profile
  },
]

// 2. 创建 router
const router = new vueRouter({
  routes,
  mode: 'history'
})


// 4. 导出router(为了在 main.js 能够得到挂载)
export default router
