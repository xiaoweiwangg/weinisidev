<template>
  <div>
    <van-row>
      <van-col span="8">
        <router-link to="/cqssc">
          <div class="item">
            <span class="iconfont icon-kuai1"></span>
            <span class="name">港澳快3</span>
            <span class="det">1分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link to="/gassc">
          <div class="item">
            <span class="iconfont icon-shishicai"></span>
            <span class="name">港澳时时彩</span>
            <span class="det">5分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link to="/cqssc">
          <div class="item">
            <span class="iconfont icon-icon-zhongqingshishicai"></span>
            <span class="name">重庆时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="8">
        <router-link to="/cqssc">
          <div class="item">
            <span class="iconfont icon-tjssc"></span>
            <span class="name">天津时时彩</span>
            <span class="det">10分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link to="/cqssc">
          <div class="item">
            <span class="iconfont icon-xinjiangshishicai"></span>
            <span class="name">新疆时时彩</span>
            <span class="det">10分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link to="/cqssc">
          <div class="item">
            <span class="iconfont icon-fucai3d"></span>
            <span class="name">福彩3d</span>
            <span class="det">1天一期</span>
          </div>
        </router-link>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="8">
        <router-link to="/cqssc">
          <div class="item">
            <span class="iconfont icon-jxssc"></span>
            <span class="name">江西时时彩</span>
            <span class="det">10分钟一期</span>
          </div>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Row, Col } from "vant";
export default {
  name: "PlayList",
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-flow: column;
  text-align: center;
  border: 0.5px solid #ccc;
  padding: 5px;
  margin: 1px;
  .iconfont {
    font-size: 50px;
  }
  .icon-shishicai {
    color: #f22751;
  }
  .icon-icon-zhongqingshishicai {
    color: #f96e00;
  }
  .icon-jxssc {
    color: #38b366;
  }
  .icon-tjssc {
    color: #218ddd;
  }
  .icon-fucai3d {
    color: #58a3e1;
  }
  .icon-kuai1 {
    color: chartreuse;
  }
  .name {
    font-weight: bolder;
    color: black;
  }
  .det {
    font-size: 11px;
    color: #989898;
    margin: 5px 0;
    font-weight: bold;
  }
}
</style>
