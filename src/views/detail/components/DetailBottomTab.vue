<template>
  <div id="detailBottomTab">
    <div class="category">
      <div class="item">
        <div class="item_icon" style="background-position: 10px -60px;"></div>
        <p class="item_content">客服</p>
      </div>
      <div class="item">
        <div class="item_icon" style="background-position:10px -114px;"></div>
        <p class="item_content">店铺</p>
      </div>
      <div class="item">
        <div class="item_icon" style="background-position:10px -1px"></div>
        <p class="item_content">收藏</p>
      </div>
    </div>
    <div class="action">
      <div style="background:#ffe817;color: #333;" class="action_content" @click="addCart">加入购物车</div>
      <div style="background:#ff6699;color: #fff;" class="action_content">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomTab",
  data() {
    return {};
  },
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
};
</script>
<style scoped>
#detailBottomTab {
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
#detailBottomTab .category {
  width: 50%;
  height: 100%;
  font-size: 13px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}

.category .item {
  position: relative;
  width: 30%;
  height: 100%;
  padding: 5px;
}
.category .item .item_icon {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat;
  height: 30px;
  background-size: 25px;
}
.category .item .item_content {
  color: #ff6699;
  text-align: center;
  position: absolute;
  bottom: 5%;
  left: 25%;
}
#detailBottomTab .action {
  width: 50%;
  height: 100%;
  display: flex;
  font-size: 15px;
}
.action .action_content {
  flex: 1;
  padding: 15px 0;
  text-align: center;
}
</style>
