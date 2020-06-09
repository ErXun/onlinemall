<template>
    <tab>
      <tab-item path="/home">
        <img slot="icon" src="~assets/img/tabBarImg/home.svg" alt />
        <img slot="icon_active" src="~assets/img/tabBarImg/home_active.svg" alt />
        <div slot="text">首页</div>
      </tab-item>
      <tab-item path="/category">
        <img slot="icon" src="~assets/img/tabBarImg/category.svg" alt />
        <img slot="icon_active" src="~assets/img/tabBarImg/category_active.svg" alt />
        <div slot="text">分类</div>
      </tab-item>
      <tab-item path="/shopCart">
        <img slot="icon" src="~assets/img/tabBarImg/shopCart.svg" alt />
        <img slot="icon_active" src="~assets/img/tabBarImg/shopCart_active.svg" alt />
        <div slot="text">购物车</div>
      </tab-item>
      <tab-item path="/profile">
        <img slot="icon" src="~assets/img/tabBarImg/profile.svg" alt />
        <img slot="icon_active" src="~assets/img/tabBarImg/profile_active.svg" alt />
        <div slot="text">我的</div>
      </tab-item>
    </tab>
</template>

<script>
import tab from "components/common/tabBar/tab";
import tabItem from "components/common/tabBar/TabItem";

export default {
  name: "TabBarContext",
  components: {
    tab,
    tabItem
  },
  data(){
    return {
    }
  }
};
</script>
<style scoped>
#tabBarContext{
  height: 49px;
}
</style>
