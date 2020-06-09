<template>
  <div id="shopCart">
    <nav-bar class="title">
      <div slot="center">购物车({{cartNumber}})</div>
    </nav-bar>
    <scroll
      ref="scrollRef"
      :probe-type-value="3"
      @scrollBackTop="scrollProductLists"
      class="product_lists"
    >
      <product-item :shopCartData="shopCartData" />
    </scroll>
    <tab-bottom class="tab_bottom" :shopCart_data="shopCartData"/>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import ProductItem from "./components/ProductItem";
import TabBottom from "./components/TabBottom";
export default {
  name: "shopCart",
  components: {
    NavBar,
    Scroll,
    ProductItem,
    TabBottom
  },
  data() {
    return {
      shopCartData: [],
      cartNumber: ""
    };
  },
  created() {
    this.shopCartData = this.$store.state.cartProducts;
  },
  mounted() {
    this.cartNumber = this.shopCartData.length;
  },
  activated() {
    this.$refs.scrollRef.refresh();
  },
  methods: {
    scrollProductLists(value) {
      // console.log(value);
    }
  }
};
</script>
<style scoped>
#shopCart {
  height: 100vh; /** 用于scroll(必须)*/
  position: relative;
}
#shopCart .title {
  background-color: #ff8198;
  color: #fff;
}
#shopCart .product_lists {
  /* height: calc(100vh - 137px); */
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
}
#shopCart .tab_bottom{
  height: 49px;
  position: absolute;
  right: 0;
  left:0;
  bottom: 44px;
}
</style>
