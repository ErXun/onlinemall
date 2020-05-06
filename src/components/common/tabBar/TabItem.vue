<template>
  <div class="bar_item" @click="clickEvent">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon_active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    } ,
  },
  data() {
    return {
    };
  },
  computed:{
    // 当前点击选项高亮
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 底部字体样式判断
    isActiveColor(){
      return this.isActive === true ? {'color': this.activeColor} : {}
    }
  },
  methods:{
    clickEvent(){
      this.$router.push(this.path)
    }
  }
};
</script>
<style scoped>
.bar_item {
  flex: 1;
  font-size: 14px;
}
.bar_item img {
  width: 24px;
  height: 24px;
}
.textStyle {
  color: red;
}
</style>
