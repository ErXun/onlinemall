<template>
  <div id="detailSellerDesc" class="clear-fix" v-if="Object.keys(sellerDescInfo).length !== 0 ">
    <div class="desc">
      <div class="start line"></div>
      <div class="content">{{sellerDescInfo.desc}}</div>
      <div class="end line"></div>
      <p>穿着效果</p>
    </div>
    <div>
      <img
        :src="item"
        alt
        v-for="(item,index) in sellerDescInfo.detailImage[0].list"
        :key="index"
        @load="detailImgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSellerDesc",
  props: {
    sellerDescInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLengh: 0
    };
  },
  watch: {
    // 获取图片个数
    sellerDescInfo() {
      this.imgLengh = this.sellerDescInfo.detailImage[0].list.length;
    }
  },
  methods: {
    detailImgLoad() {
      this.counter += 1;
      if (this.counter == this.imgLengh) {
        this.$emit('detailImgLoad')
      }
    }
  },

};
</script>
<style scoped>
#detailSellerDesc {
  font-size: 14px;
  border-bottom: 3px solid #ccc;
}
.desc {
  margin: 20px;
  position: relative;
}
.line {
  width: 90px;
  height: 1px;
  border: 1px solid #a3a3a5;
}
.end {
  float: right;
}
.content {
  padding: 10px 0;
}
.start::before {
  position: absolute;
  top: -3px;
  left: 0;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #000;
}
.end::after {
  position: absolute;
  bottom: 15px;
  right: 0;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #000;
}
img {
  width: 100%;
}
</style>
