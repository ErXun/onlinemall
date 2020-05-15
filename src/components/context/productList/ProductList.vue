<template>
  <div class="product_list">
    <product-list-item v-for="(item,index) in goodLists" :key="index" :listItem="item"></product-list-item>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",
  props: {
    goodLists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    ProductListItem
  }
};
</script>
<style scoped>
.product_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>
