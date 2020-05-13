<template>
  <div>
    <nav-bar class="nav_bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ref="mobileSwipersRef"></home-swiper>
    <home-recommend-view :recommendLists="recommendLists"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "./components/HomeSwiper";
import HomeRecommendView from './components/HomeRecommendView'
import { getHomeMultiData } from "network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data() {
    return {
      banners: [],
      recommendLists:[]
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommendLists = res.data.recommend.list
    });
  },
  activated: function () {
      this.$refs.mobileSwipersRef.startTimer()
    },
    deactivated: function () {
      this.$refs.mobileSwipersRef.stopTimer()
    },
};
</script>
<style scoped>
.nav_bar {
  background-color: #ff8198;
  color: #fff;
}
</style>
