<template>
  <div ref="scrollRef">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import betterScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeTypeValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      this.scroll = new betterScroll(this.$refs.scrollRef, {
        click: true,
        probeType: this.probeTypeValue, // 是否实时监测滚动位置
        pullUpLoad: true // 开启下拉加载更多
      });
      //  监听实施滚动
      this.scroll.on("scroll", position => {
        this.$emit("scrollBackTop", position);
      });
      // 监听向上加载更多
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
    backTop(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    // 完成上拉加载，为下次加载做准备(scroll，默认只会加载一次)
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll.y ? this.scroll.y : 0;
    }
  }
};
</script>
<style scoped>
</style>

