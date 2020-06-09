<template>
  <div class="check_button">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{'checked': isChecked}">
  </div>
</template>

<script>
export default {
  name: 'chenckButton',
  props:{
    isChecked:{
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>

.check_button img{
  border: 1px solid #ccc;
  border-radius: 50%;
}
.checked{
  background-color: red;
  border: 1px solid red;
}
</style>
