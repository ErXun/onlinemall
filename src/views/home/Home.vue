<template>
  <div id="home">
    <nav-bar class="nav_bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ref="mobileSwipersRef"></home-swiper>
    <home-recommend-view :recommendLists="recommendLists"></home-recommend-view>
    <feature-view></feature-view>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "./components/HomeSwiper";
import HomeRecommendView from "./components/HomeRecommendView";
import FeatureView from "./components/FeatureView";
import { getHomeMultiData } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [], //轮播图
      recommendLists: [] // 推荐信息
    };
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommendLists = res.data.recommend.list;
    });
  },
  activated: function() {
    this.$refs.mobileSwipersRef.startTimer();
  },
  deactivated: function() {
    this.$refs.mobileSwipersRef.stopTimer();
  }
};
</script>
<style scoped>
#home{
  padding-top: 44px;
}
.nav_bar {
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:9;
}
</style>
