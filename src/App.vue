<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar-context />
  </div>
</template>

<script>
import TabBarContext from "components/context/mainTabBar/TabBarContext";

export default {
  name: "App",
  components: {
    TabBarContext
  }
};
</script>

<style>
@import "assets/css/base.css";
@import url("assets/css/common.css");
</style>
