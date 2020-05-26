<template>
  <div id="detail">
    <detail-tab></detail-tab>
    <scroll class="content" ref="scrollRef">
      <detail-swiper :img-arr="imgArr"></detail-swiper>
      <detail-desc :goods="goods" />
      <detail-seller :sellerInfo="sellerInfo" />
      <!-- <detail-seller-desc :sellerDescInfo="sellerDescInfo" @detailImgLoad="detailImgLoad" /> -->
      <!-- <detail-params :productParams="productParams" /> -->
      <user-comment :comments="comments" />
      <ul>
        <li>类别1</li>
        <li>类别2</li>
        <li>类别3</li>
        <li>类别4</li>
        <li>类别5</li>
        <li>类别6</li>
        <li>类别7</li>
        <li>类别8</li>
        <li>类别9</li>
        <li>类别10</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import DetailSwiper from "./components/DetailSwiper";
import DetailTab from "./components/DetailTab";
import DetailDesc from "./components/DetailDesc";
import DetailSeller from "./components/DetailSeller";
import DetailSellerDesc from "./components/DetailSellerDesc";
import DetailParams from "./components/DetailParams";
import UserComment from "./components/UserComment";
import { getDetailInfo, Goods, itemParams } from "network/detail";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "Detail",
  components: {
    DetailTab,
    DetailSwiper,
    DetailDesc,
    Scroll,
    DetailSeller,
    DetailSellerDesc,
    DetailParams,
    UserComment
  },
  data() {
    return {
      id: null,
      imgArr: [],
      goods: {},
      sellerInfo: {},
      sellerDescInfo: {},
      productParams: {},
      comments: []
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
        let data = res.result;
        this.imgArr = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.sellerInfo = data.shopInfo;
        this.sellerDescInfo = data.detailInfo;
        this.productParams = new itemParams(data.itemParams);
        this.comments = data.rate.list;
      });
    },
    /**
     * 响应事件
     */
    detailImgLoad() {
      this.$refs.scrollRef.refresh();
    }
  }
};
</script>
<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
  background-color: #fff;
}
</style>
