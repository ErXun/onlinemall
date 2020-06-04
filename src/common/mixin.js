import BackTop from "components/common/backTop";
export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backTopEvent() {
      this.$refs.scrolls_ref.backTop(0, 0, 300);
    },
    isShowBackTopFunc(value){
      this.isShowBackTop = Math.abs(value.y) > 1000;
    }
  }
}
