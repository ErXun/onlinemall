<template>
  <div class="tabBottom">
    <div class="check_all_button">
      <check-button :isChecked="isChooseAll" @click.native="checkAll" />
      <span>全选</span>
    </div>
    <div class="total_price">合计：￥{{totalPrice}}</div>
    <!-- <div class="buy">去计算({{cartCheckedLength}})</div> -->
    <div class="buy">去计算({{checkedMount}})</div>
  </div>
</template>

<script>
import CheckButton from "components/context/checkButton/CheckButton";
export default {
  name: "tabBottom",
  components: {
    CheckButton
  },
  props: {},
  data() {
    return {
      cartCheckedLength: 0
    };
  },
  mounted() {},
  computed: {
    totalPrice() {
      let total = 0;
      let count = 0;
      this.$store.state.cartProducts.map(item => {
        if (item.checked) {
          // count++
          total += item.count * Number(item.realPrice);
        }
      });
      // this.cartCheckedLength = count
      return total;
    },
    checkedMount() {
      return this.$store.state.cartProducts.filter(item => item.checked).length;
    },
    // 是否全选的判断
    isChooseAll() {
      if (this.$store.state.cartProducts.length !== 0) {
        // return !this.$store.state.cartProducts.filter(item => !item.checked).length
        return !this.$store.state.cartProducts.find(item => !item.checked);
      }
    }
  },
  methods: {
    checkAll() {
      if (this.isChooseAll) {
        // 如果全部选中
        this.$store.state.cartProducts.forEach(item => (item.checked = false));
      } else {
        this.$store.state.cartProducts.forEach(item => (item.checked = true));
      }
      // 此类情况，不成立
      // this.$store.state.cartProducts.forEach(item => (item.checked = !this.isChooseAll));
    }
  }
};
</script>

<style scoped>
.tabBottom {
  width: 100%;
  height: 100%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
}
.tabBottom .check_all_button {
  display: flex;
  align-items: center;
  margin-left: 15px;
}
.tabBottom .total_price {
  margin-left: -50px;
}
.buy {
  padding: 16px 20px;
  background-color: #ff4500;
  color: #fff;
}
</style>
