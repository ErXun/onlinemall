<template>
  <div id="userComment">
    <div class="title clear-fix">
      <span>用户评价</span>
      <span class="more">更多 ></span>
    </div>
    <div class="content" v-for="(item,index) in comments" :key="index">
      <div class="userInfo">
        <img :src="item.user.avatar" alt />
        <span class="username">{{item.user.uname}}</span>
      </div>
      <div>{{item.content}}</div>
      <div class="product_style">
        <span>{{item.created | dateFormat}}</span>
        {{item.style}}
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "UserComment",
  props: {
    comments: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  filters: {
    dateFormat(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>
<style scoped>
#userComment {
  padding: 10px;
  font-size: 15px;
  border-bottom: 3px solid #ccc;
}
.title {
  font-size: 15px;
  padding: 15px;
  border-bottom: 3px solid #eee;
}
.more {
  float: right;
}
.content {
  padding: 10px;
}
.userInfo img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.product_style {
  margin-top: 20px;
  font-size: 12px;
}
</style>
