<template>
  <div id="home">
    <nav-bar class="nav_bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <product-tabbar
      :title="['流行','新款','精选']"
      ref="productTabbarRefOne"
      @clickTab="clickTab"
      v-show="isShow"
    />
    <scroll
      class="scrollContent"
      ref="scrollRef"
      :probe-type-value= '3'
      :is-load-more="true"
      @scrollBackTop="scrollBackTop"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" ref="mobileSwipersRef" @imgLoadEvent="imgLoadEvent" />
      <home-recommend-view :recommendLists="recommendLists" />
      <feature-view />
      <product-tabbar :title="['流行','新款','精选']" ref="productTabbarRefTwo" @clickTab="clickTab" />
      <product-list :goodLists="goodsItem" />
    </scroll>
    <back-top @click.native="backTopEvent" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import ProductTabbar from "components/context/productTabbar";
import ProductList from "components/context/productList/ProductList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop";

import HomeSwiper from "./components/HomeSwiper";
import HomeRecommendView from "./components/HomeRecommendView";
import FeatureView from "./components/FeatureView";
import { getHomeMulti, getHomeProduct } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    ProductTabbar,
    ProductList,
    Scroll,
    BackTop
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
      currentType: "pop",
      isShowBackTop: false,
      tag: false,
      isShow: false,
      tabTop: 0,
      pageY: 0,
    };
  },
  computed: {
    goodsItem() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this.getHomeMultiData();
  },
  mounted() {
    this.getHomeProductData("pop");
    this.getHomeProductData("new");
    this.getHomeProductData("sell");
    this.imgLoad();
  },
  // 页面活跃时，调用
  activated: function() {
    // this.$refs.mobileSwipersRef.startTimer();
    this.$refs.scrollRef.refresh()
    this.$refs.scrollRef.backTop(0,this.pageY)
    // this.$refs.scrollRef.refresh()
  },
  // 页面不活跃，调用
  deactivated: function() {
    // this.$refs.mobileSwipersRef.stopTimer();
    this.pageY = this.$refs.scrollRef.getScrollY()
  },
  destroyed(){
    // console.log('destoryed');
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
      this.$refs.productTabbarRefOne.currentIndex = index;
      this.$refs.productTabbarRefTwo.currentIndex = index;
    },
    // 回到顶部
    backTopEvent() {
      this.$refs.scrollRef.backTop(0, 0, 300);
    },
    // 监听实施滚动
    scrollBackTop(value) {
      // 是否隐藏回到顶部标识
      this.isShowBackTop = Math.abs(value.y) > 1000;
      // 是是否添加导航栏
      this.isShow = Math.abs(value.y) > this.tabTop
    },
    // 向上加载更多
    pullingUp() {
      this.getHomeProductData(this.currentType);
    },
    // 每加载完成一张图片，执行 refresh()
    imgLoad() {
      const refresh = debounce(this.$refs.scrollRef.refresh, 300);
      this.$bus.$on("imgLoad", () => {
        refresh();
      });
    },
    // 计算 tabControl 的 offsetTop
    imgLoadEvent() {
      this.tabTop = this.$refs.productTabbarRefTwo.$el.offsetTop;
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
        // .push(...res.data.list),一次添加多个数据
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scrollRef.finishPullUp();
      });
    }
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.nav_bar {
  background-color: #ff8198;
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.scrollContent {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* height: calc(100% - 93px);
  overflow: hidden; */
}
</style>
