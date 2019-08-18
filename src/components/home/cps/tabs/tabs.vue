<template>
  <div class="tab">
    <van-row>
      <van-col span="6"
        ><span class="iconfont icon-paihang"></span> 排行</van-col
      >
      <van-col span="6"
        ><span class="iconfont icon-custom-service"></span> 客服</van-col
      >
      <van-col span="6"><span class="iconfont icon-miji"></span> 秘籍</van-col>
      <van-col span="6"><span class="iconfont icon-jilu"></span> 长龙</van-col>
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
