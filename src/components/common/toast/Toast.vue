<template>
  <div class="toast" v-show="show">{{message}}</div>
</template>

<script>
export default {
  name: "toast",
  props: {
    // message: {
    //   type: String,
    //   default: ""
    // },
    // show:{
    //   type: Boolean,
    //   default:false
    // }
  },
  data(){
    return {
      message: '',
      show:false
    }
  },
  methods:{
    showAttention(res,duration=1500){
      this.show = true
      this.message = res
      setTimeout(() => {
        this.show = false
        this.message = ''
      },duration)
    }
  }
};
</script>
<style scoped>
.toast {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 10px 25px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 99;
}
</style>
