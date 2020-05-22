<template>
  <div>
    <detail-tab></detail-tab>
    <detail-swiper :img-arr="imgArr"></detail-swiper>
  </div>
</template>

<script>
import DetailSwiper from './components/DetailSwiper'
import DetailTab from "./components/DetailTab";
import { getDetailInfo } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailTab,
    DetailSwiper
  },
  data() {
    return {
      id: null,
      imgArr: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
  },
  methods: {
    /**
     * 网络请求
     */
    // 获取商品详情数据
    getDetail() {
      getDetailInfo(this.id).then(res => {
        console.log(res);
        this.imgArr = res.result.itemInfo.topImages
      });
    }
  }
};
</script>
<style scoped>
</style>
