<template>
  <div>
    <n-bar :left-arrow="l" :title="t || '购 彩 大 厅'" fiexd @click-left="onClickLeft"/>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  props: ["t","l"],
  name: "HHeader",
  components: {
    NBar: NavBar
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #dc3b40;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar__title {
    font-size: 22px;
    font-weight: 300;
  }
}
</style>
