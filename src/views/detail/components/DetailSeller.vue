<template>
  <div id="detailSeller" v-if="Object.keys(sellerInfo).length !== 0">
    <div>
      <div class="seller_title">
        <img :src="sellerInfo.shopLogo" alt />
        <span>{{sellerInfo.name}}</span>
      </div>
      <div class="seller_detail">
        <div class="seller_mount">
          <div class>
            <p class="number">{{sellerInfo.cSells | numFormat}}</p>
            <p class="item">总销量</p>
          </div>
          <div class="seller_mount_item">
            <p class="number">{{sellerInfo.cGoods}}</p>
            <p class="item">全部宝贝</p>
          </div>
        </div>
        <div class="seller_service">
          <p v-for="(item,index) in sellerInfo.score" :key="index" class="seller_service_item">
            <span class="name">{{item.name}}</span>
            <span class="score" :class="{'active': item.isBetter}">{{item.score}}</span>
            <span class="evaluate" v-if="!item.isBetter">低</span>
            <span class="evaluate_active" v-else>高</span>
          </p>
        </div>
      </div>
      <div class="clickShop">
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSeller",
  props: {
    sellerInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    numFormat(value) {
      if (value > 10000) {
        return (value = (value / 10000).toFixed(1) + "万");
      }
    }
  },
  methods: {}
};
</script>
<style scoped>
#detailSeller {
  padding: 20px 10px;
  border-bottom: 3px solid #ccc;
}
.seller_title {
  font-size: 16px;
}
.seller_title img {
  width: 45px;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.seller_detail {
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
}
.seller_mount {
  margin: 20px 0px;
  display: flex;
  justify-content: space-around;
  padding: 0px 25px;
  border-right: 1px solid #eee;
}
.seller_mount_item {
  margin-left: 20px;
}
.number {
  text-align: center;
  font-size: 18px;
}
.item {
  margin-top: 15px;
  font-size: 12px;
}
.seller_service {
  font-size: 14px;
}
.seller_service_item {
  margin: 10px 0;
}
.seller_service_item .name,
.score {
  margin-right: 20px;
}
.seller_service_item .score {
  width: 33px;
  display: inline-block;
  color: #5ea732;
}
#detailSeller .active {
  color: #f13e3a;
}
.evaluate {
  background-color: #5ea732;
  color: #fff;
}
.evaluate_active {
  background-color: #f13e3a;
  color: #fff;
}
.clickShop {
  margin: 0 auto;
  width: 150px;
  text-align: center;
  padding: 5px;
  background-color: #f2f5f8;
  border-radius: 10px;
}

</style>
