<template>
  <swiper class="swiper_style">
    <swiper-item v-for="(item,index) in imgArr" :key="index">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    imgArr: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.swiper_style{
  height: 300px;
  overflow: hidden;
}
</style>
