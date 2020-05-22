<template>
  <div>
    <nav-bar>
      <div slot="left">
        <div class="img_style" @click="backClick">
          <img src="~assets/img/common/back.svg" alt />
        </div>
      </div>
      <div slot="center" class="tab">
        <div
          v-for="(item,index) in titleArr"
          :key="index"
          class="item"
          :class="{'active':currentIndex == index}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common//navBar/NavBar";
export default {
  name: "DetailTab",
  components: {
    NavBar
  },
  data() {
    return {
      titleArr: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      // this.$router.back();
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.tab {
  display: flex;
  /* justify-content: space-around; */
}
.item {
  font-size: 14px;
  flex: 1;
}
.active {
  color: red;
}
.img_style {
  text-align: center;
  padding-top: 7px;
}
</style>
