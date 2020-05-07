<template>
  <div>
    <nav-bar class="nav_bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import { getHomeMultiData } from "network/home";
export default {
  name: "home",
  components: {
    NavBar
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
    });
  }
};
</script>
<style scoped>
.nav_bar {
  background-color: #ff8198;
  color: #fff;
}
</style>
