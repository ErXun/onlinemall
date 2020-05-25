<template>
  <div id="detailParams" v-if="Object.keys(productParams).length !== 0 ">
    <div>
      <table class="baseParams">
        <tr v-for="(itemArr,index) in productParams.table" :key="index">
          <td v-for="(item,index) in itemArr" :key="index">{{item}}</td>
        </tr>
      </table>
      <table class="otherParams">
        <tr v-for="(itemArr,index) in productParams.set" :key="index">
          <td v-for="(item,index) in itemArr" :key="index">{{item}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    productParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
#detailParams {
  padding: 15px;
  font-size: 14px;
  border-bottom: 5px solid #eee;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table tr {
  border-bottom: 2px solid #eee;
}
.baseParams tr td {
  width: 25%;
  display: inline-block;
  padding: 15px 0;
}
.baseParams tr:last-child {
  border-bottom: 2px solid #ccc;
}
.otherParams td {
  width: 20%;
  display: inline-block;
  padding: 15px 0;
}
.otherParams tr td:last-child {
  width: 75%;
  color: #eb4868;
}
</style>
