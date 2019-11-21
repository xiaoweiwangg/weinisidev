<template>
  <div>
    <t-header :l="true" :t="'代 理 中 心'"></t-header>
    <div class="yknum">
      <img src="https://images.imags-google.com/system/mobile/other/proxySlide.png" alt />
    </div>
    <div class="ykcont">
      <ul>
        <router-link to="/baobiao">
          <li>代理报表</li>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
        <router-link to="/guanli">
          <li>下级管理</li>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
        <router-link to="/code">
          <li>成为代理</li>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
        <router-link to="/shuoming">
          <li>代理说明</li>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
      </ul>
    </div>
  </div>
</template> 

<script>
import THeader from "../../home/cps/header/header";
export default {
  name: "DaiLi",
  components: {
    THeader
  },
  data() {
    return {
      yknum: "0.00",
      tzcont: "0.00",
      zjcont: "0.00",
      hdcont: "0.00",
      fdcont: "0.00",
      czcont: "0.00",
      txcont: "0.00",
      zzcont: "0.00",
      skcont: "0.00",
      hbcont: "0.00"
    };
  },
  mounted() {
    this.axios.post("/yingkui").then(x => {
      console.log(x);
    });
  }
};
</script>

<style lang="scss" scoped>
.yknum {
  height: 175px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background: linear-gradient(top, #6a202d, #3b052c);
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.ykcont {
  ul {
    a {
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 22px;
      font-weight: bolder;
      background-color: #ccc;
      margin: 10px 0px;
      border-radius: 3px;
      box-shadow: 3px 3px 5px black;
      color: blue;
      .icon-jiantou1 {
        font-size: 22px;
      }
    }
  }
}
</style>