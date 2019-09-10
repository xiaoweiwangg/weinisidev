<template>
  <div class="tab">
    <van-row>
      <van-col span="6">
        <router-link to="/paihang">
        <span class="iconfont icon-paihang"></span> 排行
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/talks">
        <span class="iconfont icon-custom-service"></span> 客服
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/miji">
        <span class="iconfont icon-miji"></span> 秘籍
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Row, Col } from "vant";
export default {
  name: "TabsV",
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style lang="scss" scoped>
.tab {
  background-color: #efeef4;
}
.van-row {
  display: flex;
  height: 50px;
  padding: 5px 0;
  justify-content: space-around;
  .iconfont {
    font-size: 20px;
    width: 70px;
  }
  .icon-liaotian,
  .icon-miji {
    font-weight: bolder;
    font-size: 23px;
  }
  .icon-paihang {
    color: gold;
  }
  .icon-miji {
    color: crimson;
  }
  .icon-jilu {
    color: green;
  }
  .icon-custom-service {
    color: rgb(248, 95, 6);
  }
  .van-col {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    background-color: #fff;
    margin: 5px 10px;
    border-radius: 5px;
  }
}
</style>
