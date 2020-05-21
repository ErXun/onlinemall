<template>
  <div>
    <swiper ref="swiper">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoadEvent" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import Swiper from "components/common/swiper/Swiper";
// import SwiperItem from "components/common/swiper/SwiperItem";
import { Swiper, SwiperItem } from "components/common/swiper/";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      tag: false
    };
  },
  methods: {
    startTimer() {
      this.$refs.swiper.startSwiper();
    },
    stopTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.stopSwiper();
      }
    },
    imgLoadEvent() {
      // 限制多次调用
      if (!this.tag) {
        this.$emit("imgLoadEvent");
      }
      this.tag = true;
    }
  }
};
</script>
<style scoped>
</style>
