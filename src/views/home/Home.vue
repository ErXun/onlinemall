<template>
  <div id="home">
    <nav-bar class="nav_bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ref="mobileSwipersRef"></home-swiper>
    <home-recommend-view :recommendLists="recommendLists"></home-recommend-view>
    <feature-view></feature-view>
    <product-tabbar :title="['流行','新款','精选']" ref="productTabbarRef" @clickTab="clickTab"></product-tabbar>
    <product-list :goodLists="goodsItem"></product-list>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import ProductTabbar from "components/context/productTabbar";
import ProductList from "components/context/productList/ProductList";

import HomeSwiper from "./components/HomeSwiper";
import HomeRecommendView from "./components/HomeRecommendView";
import FeatureView from "./components/FeatureView";
import { getHomeMulti, getHomeProduct } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    ProductTabbar,
    ProductList
  },
  data() {
    return {
      banners: [], //轮播图
      recommendLists: [], // 推荐信息
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  computed: {
    goodsItem() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultiData();
    this.getHomeProductData("pop");
    this.getHomeProductData("new");
    this.getHomeProductData("sell");
  },
  // 页面活跃时，调用
  activated: function() {
    this.$refs.mobileSwipersRef.startTimer();
  },
  // 页面不活跃，调用
  deactivated: function() {
    this.$refs.mobileSwipersRef.stopTimer();
  },
  methods: {
    /**
     *监听事件
     **/
    clickTab(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 获取网络请求
     **/
    // 轮播图和提示区
    getHomeMultiData() {
      getHomeMulti().then(res => {
        this.banners = res.data.banner.list;
        this.recommendLists = res.data.recommend.list;
      });
    },
    // 商品列表
    getHomeProductData(type) {
      let page = this.goods[type].page + 1;
      getHomeProduct(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.nav_bar {
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
