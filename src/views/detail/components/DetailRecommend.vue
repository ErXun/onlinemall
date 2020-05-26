<template>
  <div id="detailRecommend">
    <div>
      <div>热门推荐</div>
      <div>
        <product-list :goodLists="recommendList"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "components/context/productList/ProductList";
export default {
  name: "DetailRecommend",
  components: {
    ProductList
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
#detailRecommend {
  padding: 5px;
}
</style>
