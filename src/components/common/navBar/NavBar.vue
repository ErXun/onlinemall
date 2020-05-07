<template>
  <div id="navBar">
    <div class="leftBar">
      <slot name="left"></slot>
    </div>
    <div class="centerBar">
      <slot name="center"></slot>
    </div>
    <div class="rightBar">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
#navBar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100,100,100,.08);
}
.leftBar,
.rightBar {
  width: 60px;
}
.centerBar{
  flex: 1;
  text-align: center;
}
</style>
