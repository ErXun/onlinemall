<template>
  <div class="recommend_view">
    <div v-for="(item,index) in recommendLists" :key="index" class="recommend_view_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props:{
    recommendLists:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  },
}
</script>
<style scoped>
.recommend_view{
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend_view_item{
  flex: 1;
}
.recommend_view_item img{
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
}
</style>
