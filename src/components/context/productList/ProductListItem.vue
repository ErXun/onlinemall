<template>
  <div class="product_list_item">
    <img :src="listItem.show.img " alt />
    <div class="item_info">
      <p class="title">{{listItem.title}}</p>
      <span class="price">￥{{listItem.price}}</span>
      <span class="collect">{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {}
};
</script>
<style scoped>
.product_list_item {
  width: 48%;
  font-size: 12px;
  margin-bottom: 10px;
}
.product_list_item img {
  width: 100%;
}
.item_info {
  text-align: center;
}
.title {
  /* width: 85%; */
  /* margin: 0 auto; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  color: #f00;
  margin-right: 25px;
}
.collect {
  position: relative;
}
.collect:before {
  position: absolute;
  top: -1px;
  left: -15px;
  content: "";
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") no-repeat;
  background-size: 14px;
}
</style>
