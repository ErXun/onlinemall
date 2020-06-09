<template>
  <div id="productItem">
    <div v-for="(item,index) in shopCartData" :key="index" class="item_style">
      <div class="status">
        <check-button @click.native="clickProduct(index)" :isChecked="item.checked"/>
      </div>
      <div class="img">
        <img :src="item.img" alt />
      </div>
      <div class="desc_info">
        <div class="desc_info_title wrap">{{item.title}}</div>
        <div class="wrap desc">商品描述:{{item.desc}}</div>
        <div class="price clear-fix">￥{{item.realPrice}} <span class="mount"> x{{item.count}}</span> </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/context/checkButton/CheckButton'
export default {
  name: "productItem",
  props: {
    shopCartData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components:{
    CheckButton
  },
  data(){
    return{
      isChecked: false
    }
  },
  methods:{
    clickProduct(index){
      this.shopCartData[index].checked = !this.shopCartData[index].checked
    }
  }
};
</script>
<style scoped>
#productItem {
  padding: 5px;
  width: 100%;
  height: 100%;
}
#productItem .item_style {
  display: flex;
  width: 100%;
  padding: 5px 0 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
}
#productItem .item_style .status {
  width: 5%;
  display: flex;
  align-items: center;
}
#productItem .img {
  width: 80px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 10px;
}
#productItem .img img {
  width: 100%;
  height: 100%;
}
#productItem .desc_info {
  margin-left: 20px;
  width: calc(87% - 80px);
}
#productItem .desc_info .desc {
  font-size: 14px;
  color: '#eee';
  margin: 15px 0;
}
#productItem .desc_info_title {
  margin-top: 10px;
  color: #000;
}
#productItem .desc_info .wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#productItem .desc_info .price {
  margin-top: 20px;
  color: #ff4500;
}
#productItem .price .mount{
  color: #666;
  float: right;
}
</style>
