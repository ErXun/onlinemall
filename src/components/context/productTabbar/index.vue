<template>
  <div class="product_tabbar">
    <div
      class="product_tabbar_item"
      v-for="(item,index) in title"
      :key="index"
      @click="clickEvent(index)"
    >
      <span :class="{'active': currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTabbar",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    clickEvent(index) {
      this.currentIndex = index;
      this.$emit('clickTab',index)
    }
  }
};
</script>
<style scoped>
.product_tabbar {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
  padding: 10px 0;
}
.product_tabbar_item {
  flex: 1;
  text-align: center;
}
.product_tabbar_item span {
  padding: 5px;
}
.product_tabbar_item span.active {
  border-bottom: 3px solid #ff8198;
}
</style>
