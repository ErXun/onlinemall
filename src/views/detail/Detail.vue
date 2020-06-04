<template>
  <div id="detail">
    <detail-tab @tabClick="tabClick" ref="tabClickRef" />
    <scroll :probe-type-value="3" class="content" ref="scrolls_ref" @scrollBackTop="scrollBackTops">
      <detail-swiper :img-arr="imgArr" />
      <detail-desc :goods="goods" />
      <detail-seller :sellerInfo="sellerInfo" />
      <detail-seller-desc :sellerDescInfo="sellerDescInfo" @detailImgLoad="detailImgLoad" />
      <detail-params :productParams="productParams" ref="productParamsRef" />
      <user-comment :comments="comments" ref="userCommentRef" />
      <detail-recommend :recommend-list="recommendList" ref="recommendListRef" />
    </scroll>
    <back-top @click.native="backTopEvent" v-show="isShowBackTop" />
    <detail-bottom-tab class="bottomTab" @addCart="addCart"/>
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
import DetailRecommend from "./components/DetailRecommend";
import DetailBottomTab from "./components/DetailBottomTab";
import { backTopMixin } from "common/mixin";

import {
  getDetailInfo,
  Goods,
  itemParams,
  getRecommendInfo
} from "network/detail";
import Scroll from "components/common/scroll/Scroll";
import { debounce } from "common/utils";
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
    UserComment,
    DetailRecommend,
    DetailBottomTab
  },
  mixins: [backTopMixin],
  data() {
    return {
      id: null,
      imgArr: [],
      goods: {},
      sellerInfo: {},
      sellerDescInfo: {},
      productParams: {},
      comments: [],
      recommendList: [],
      paramsoffsetTopArr: [],
      getTopY: null,
      currentIndex: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
    this.getRecommend();
  },
  mounted() {
    //  DOM 已经被渲染，但图片依然未加载完
    this.$nextTick(() => {});
    this.getTopY = debounce(() => {
      this.paramsoffsetTopArr = [];
      this.paramsoffsetTopArr.push(0);
      this.paramsoffsetTopArr.push(this.$refs.productParamsRef.$el.offsetTop);
      this.paramsoffsetTopArr.push(this.$refs.userCommentRef.$el.offsetTop);
      this.paramsoffsetTopArr.push(this.$refs.recommendListRef.$el.offsetTop);
      this.paramsoffsetTopArr.push(Number.MAX_VALUE);
    }, 300);
  },
  updated() {},
  methods: {
    /**
     * 网络请求
     */
    // 获取商品详情数据
    getDetail() {
      getDetailInfo(this.id).then(res => {
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
    // 获取推荐数据
    getRecommend() {
      getRecommendInfo().then((res, error) => {
        if (error) return;
        this.recommendList = res.data.list;
      });
    },
    /**
     * 响应事件
     */
    detailImgLoad() {
      this.$refs.scrolls_ref.refresh();
      this.getTopY();
    },
    tabClick(value) {
      this.$refs.scrolls_ref.backTop(
        0,
        -this.paramsoffsetTopArr[value],
        // -(this.paramsoffsetTopArr[value] - 44),
        0
      );
    },
    scrollBackTops(value) {
      let offTop = -value.y;

      for (let i = 0; i < this.paramsoffsetTopArr.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          offTop >= this.paramsoffsetTopArr[i] &&
          offTop < this.paramsoffsetTopArr[i + 1]
        ) {
          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.tabClickRef.currentIndex = this.currentIndex;
        }
      }

      // if (offTop < this.paramsoffsetTopArr[1]) {
      //   this.currentIndex = 0;
      // } else if (
      //   this.paramsoffsetTopArr[2] > offTop &&
      //   offTop >= this.paramsoffsetTopArr[1]
      // ) {
      //   this.currentIndex = 1;
      // } else if (
      //   this.paramsoffsetTopArr[3] > offTop &&
      //   offTop >= this.paramsoffsetTopArr[2]
      // ) {
      //   this.currentIndex = 2;
      // } else {
      //   this.currentIndex = 3;
      // }
      // console.log(this.currentIndex);
      this.isShowBackTopFunc(value)
    },
    addCart(){
      const productInfos = {}
      productInfos.img = this.imgArr[0]
      productInfos.title = this.goods.title
      productInfos.desc = this.goods.desc
      productInfos.realPrice = this.goods.realPrice
      productInfos.id = this.id
      this.$store.dispatch('addCart',productInfos)
      console.log(this.$store.state.cartProducts);

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
  /* height: calc(100% - 44px); */
  overflow: hidden;
  background-color: #fff;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.bottomTab {
  height: 49px;
}
</style>
