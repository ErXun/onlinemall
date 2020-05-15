<template>
  <div ref="scrollRef">
    <div>
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
import betterScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data(){
    return{
      scroll: null
    }
  },
  mounted(){
    this.scroll = new betterScroll(this.$refs.scrollRef,{
      click: true
    })
  }
}
</script>
<style scoped>

</style>
