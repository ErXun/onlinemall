<template>
  <div>
    <nav-bar class="title">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- <scroll ref="scrollRef">

    </scroll> -->
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "shopCart",
  components: {
    NavBar,
    Scroll
  }
};
</script>
<style scoped>
.title {
  background-color: #ff8198;
  color: #fff;
}
</style>
