<template>
  <div class="a">
    <t-header :t="'活 动 中 心'"></t-header>
    <router-link to="/jiangli">
      <div class="item">
        <div class="ic">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-8" />
          </svg>
        </div>
        <div class="con">
          <div class="title">晋级奖励</div>
          <div class="cont">每晋升一个等级，都可以获得晋级奖励！</div>
        </div>
      </div>
    </router-link>
    <router-link to="/jiajiang">
      <div class="item">
        <div class="ic">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shuzi2" />
          </svg>
        </div>
        <div class="con">
          <div class="title">每日加奖</div>
          <div class="cont">每日加奖是根据会员昨日投注金额进行加奖</div>
        </div>
      </div>
    </router-link>
    <a href="http://23.88.142.75/daili/index.html">
      <div class="item">
        <div class="ic">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shuzi3" />
          </svg>
        </div>
        <div class="con">
          <div class="title">专职代理日盈万金</div>
          <div class="cont">做专职代理日盈万金</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import _ from "underscore";
import THeader from "../home/cps/header/header";
export default {
  name: "ActiveV",
  components: {
    THeader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.a {
  width: 100%;
  height: 500px;
  background-color: #ccc;
}
.title {
  font-size: 20px;
  color: black;
}
.cont {
  font-size: 15px;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ic,
.jiantou {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  padding: 9px 15px;
  display: flex;
  background-color: #fff;
  border-bottom: 2px dashed #2a3a4a;
  background-color: #e67e22;
  box-shadow: 6px 4px 3px black;
  border-radius: 7px;
  margin: 7px;
  .icon {
    font-size: 38px;
    margin: 0 5px;
  }
  .con {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    div {
      padding: 5px 0;
    }
  }
}
</style>
