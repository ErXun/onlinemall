<template>
  <div id="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  components: {
  }
};
</script>
<style scoped>
#tab {
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #fff;
  padding: 5px;
  /* box-shadow: 0 -5px #eee; */
}
</style>
