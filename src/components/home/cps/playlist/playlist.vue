<template>
  <div>
    <van-row>
      <van-col span="8">
        <router-link
          :to="{ name: 'gassc', params: { n: 'gassc', t: 5,jh:0, js: 10, jm: 0 } }"
        >
          <div class="item">
            <span class="iconfont icon-shishicai"></span>
            <span class="name">港澳时时彩</span>
            <span class="det">5分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link
          :to="{ name: 'ynssc', params: { n: 'ynssc', t: 20, jh:0,js: 20, jm: 2 } }"
        >
          <div class="item">
            <span class="iconfont icon-jxssc"></span>
            <span class="name">云南时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
      </van-col>

      <van-col span="8">
        <router-link
          :to="{ name: 'cqssc', params: { n: 'cqssc', t: 20,jh:0, js: 40, jm: 3 } }"
        >
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
        <router-link
          :to="{ name: 'tjssc', params: { n: 'tjssc', t: 20,jh:0, js: 20, jm: 2 } }"
        >
          <div class="item">
            <span class="iconfont icon-tjssc"></span>
            <span class="name">天津时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link
          :to="{ name: 'xjssc', params: { n: 'xjssc', t: 20,jh:0, js: 20, jm: 2 } }"
        >
          <div class="item">
            <span class="iconfont icon-xinjiangshishicai"></span>
            <span class="name">新疆时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
      </van-col>
      <van-col span="8">
        <router-link
          :to="{ name: 'fc3d', params: { n: 'fc3d', t: 24 * 12,max: 3 } }"
        >
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
        <router-link
          :to="{ name: 'tcpl5', params: { n: 'tcpl5', t: 20, js: 40, jm: 3 } }"
        >
          <div class="item">
            <span class="iconfont icon-pailiesanpailiewu"></span>
            <span class="name">体彩排列3/5</span>
            <span class="det">1天一期</span>
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
    color: blue;
  }
  .icon-xinjiangshishicai {
    color: brown;
  }
  .icon-pailiesanpailiewu {
    color: rgb(235, 57, 45);
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
