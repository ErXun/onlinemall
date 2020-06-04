<template>
  <div id="productItem">
    <div class="status"></div>
    <div class="img"></div>
    <div class="descInfo"></div>
  </div>
</template>

<script>
export default {
  name: 'productItem'
}
</script>
<style scoped>
#productItem{
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
}
</style>
