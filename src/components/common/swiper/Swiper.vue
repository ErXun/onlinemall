<template>
  <div id="swiper_container">
    <!-- 图片区 -->
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <!-- 指示区 -->
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div
          v-for="(item, itemIndex) in slideCount"
          class="indi-item"
          :class="{'active': itemIndex === index-1}"
          :key="itemIndex"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000 //  swiper 滚动的速度
    },
    animDuration: {
      type: Number,
      default: 300 //图片过度的时间
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    moveRatio: {
      type: Number,
      default: 0.25
    }
  },
  data() {
    return {
      swiperWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      swiperTimer: null,
      index: 1,
      scrolling: false, // 是否在滚动
      slideCount: 0,
      startX: 0, // 开始滑动的位置
      distance: 0 // 鼠标滑动时，移动的距离
    };
  },
  mounted() {
    setTimeout(() => {
      // 1. 操作 DOM,在前后克隆 swiperItem
      this.addItem();
      this.startSwiper();
    }, 2000);
  },
  methods: {
    addItem() {
      let swiper = document.querySelector(".swiper");
      this.slideCount = swiper.children.length;
      if (this.slideCount > 1) {
        let firstItem = swiper.children[this.slideCount - 1].cloneNode(true);
        let lastItem = swiper.children[0].cloneNode(true);
        swiper.appendChild(lastItem);
        swiper.insertBefore(firstItem, swiper.children[0]);
        this.swiperWidth = swiper.offsetWidth;
        this.swiperStyle = swiper.style;
        this.movePosition(-this.swiperWidth); //整个 swiper 左移一个单位(swiper的宽度)
      }
    },
    movePosition(value) {
      this.swiperStyle.transform = `translate3d(${value}px,0,0)`;
    },
    // 开始定时器
    startSwiper() {
      this.swiperTimer = setInterval(() => {
        this.index++;
        this.scrollContent(-this.index * this.swiperWidth);
      }, this.interval);
    },
    // 关闭定时器
    stopSwiper() {
      clearInterval(this.swiperTimer);
    },
    scrollContent(value) {
      this.scrolling = true; // 开始滚动
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.movePosition(value);
      this.scrolling = false; //结束滚动
      //  判断滚动的位置
      this.checkPosition();
    },
    checkPosition() {
      setTimeout(() => {
        this.swiperStyle.transition = "transform 0ms";
        if (this.index >= this.slideCount + 1) {
          this.index = 1;
          this.movePosition(-this.index * this.swiperWidth);
        } else if (this.currentIndex <= 0) {
          this.index = this.slideCount;
          this.movePosition(-this.index * this.swiperWidth);
        }
        // 2.结束移动后的回调
        // this.$emit("transitionEnd", this.index - 1);
      }, this.animDuration);
    },
    /*
      拖动事件的处理
     */
    touchStart(e) {
      // 1. 如何正在滚动，不可以拖动
      if (this.scrolling) return;
      // 2. 停止计时器
      this.stopSwiper();
      // 3. 保留开始滚动的位置
      this.startX = e.targetTouches[0].pageX;
    },
    touchMove(e) {
      this.distance = e.targetTouches[0].pageX - this.startX;
      let moveDistance = -this.index * this.swiperWidth + this.distance;
      this.movePosition(moveDistance);
    },
    touchEnd(e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);

      // 2.判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.swiperWidth * this.moveRatio
      ) {
        // 右边移动超过0.5
        this.index--;
      } else if (
        this.distance < 0 &&
        currentMove > this.swiperWidth * this.moveRatio
      ) {
        // 向左移动超过0.5
        this.index++;
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.index * this.swiperWidth);

      // 4.移动完成后重新开启定时器
      this.startSwiper();
    }
  }
};
</script>
<style scoped>
#swiper_container {
  position: relative;
  overflow: hidden;
}
.swiper {
  display: flex;
}
.indicator {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 8px;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
