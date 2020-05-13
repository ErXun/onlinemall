<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    startTimer() {
      this.$refs.swiper.startSwiper();
    },
    stopTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.stopSwiper();
      }
    }
  }
};
</script>
<style scoped>
</style>
