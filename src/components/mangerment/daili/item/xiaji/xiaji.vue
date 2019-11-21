<template>
  <div>
    <t-header :l="true" :t="'下 级 管 理'"></t-header>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="( i , t ) in arr" :key="t" :title="'用户名:   '+i['name']" :name="t">当前余额:{{i.balance}} 元</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import THeader from "../../../../home/cps/header/header";

export default {
  name: "guanli",
  components: {
    THeader
  },
  data() {
    return {
      arr: [],
      activeNames: []
    };
  },
  mounted() {
    this.axios
      .post("/fallx", {
        name: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        console.log(x.data.per[0].name);
        this.arr = x.data.per;
        console.log(this.arr[0].name);
        
        
      });
  }
};
</script>

<style lang="scss" scoped>
</style>