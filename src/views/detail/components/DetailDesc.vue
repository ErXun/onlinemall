<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <div class="newPrice">{{goods.newPrice}}</div>
      <div class="oldPrcie">{{goods.oldPrice}}</div>
      <div class="discount">{{goods.discount}}</div>
    </div>
    <div class="columns">
      <div class="columns_item" v-if="goods.columns">
        <div>{{goods.columns[0]}}</div>
        <div>{{goods.columns[1]}}</div>
        <div>{{goods.services[goods.services.length-1].name}}</div>
      </div>
    </div>
    <div class="services">
      <div class="services_item" v-if="goods.services">
        <div class="item">
          <img :src="goods.services[1].icon" alt />
          <span>{{goods.services[0].name}}</span>
        </div>
        <div class="item">
          <img :src="goods.services[1].icon" alt />
          <span>{{goods.services[1].name}}</span>
        </div>
        <div class="item">
          <img :src="goods.services[2].icon" alt />
          <span>{{goods.services[2].name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDesc",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(this.goods);
    }
  }
};
</script>
<style scoped>
.title {
  color: #000;
  padding: 5px;
  font-size: 17px;
}
.price {
  padding: 5px;
  display: flex;
  align-items: flex-start;
}
.newPrice {
  font-size: 24px;
  color: #ff5777;
}
.oldPrcie {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  padding-top: 8px;
  /* position: relative; */
  /* top: 8px; */
}
.discount {
  background-color: #ff5777;
  color: #fff;
  font-size: 12px;
  border-radius: 8px;
  padding: 3px 5px;
  margin-left: 5px;
}
.columns {
  padding: 10px;
  color: #999;
  font-size: 14px;
}
.columns_item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.services {
  padding: 15px 0;
  font-size: 13px;
  border-bottom: 3px solid #ddd;
}
.services_item {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.services_item img {
  width: 12px;
}
.services_item .item {
  text-align: center;
}
</style>
