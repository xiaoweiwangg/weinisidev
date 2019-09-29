<template>
  <div>
    <van-row>
      <van-col span="8">
        <router-link :to="{ name: 'gassc', params: { n: 'gassc', t: 5,jh:0, js: 10, jm: 0 } }">
          <div class="item">
            <span class="iconfont icon-shishicai"></span>
            <span class="name">港澳时时彩</span>
            <span class="det">5分钟一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
        </div>
      </van-col>
      <van-col span="8">
        <router-link
          :to="{ name: 'txffc', params: { n: 'txffc',djs:5, t: 1,jh:0, js: 10, jm: 0 } }"
        >
          <div class="item">
            <span class="iconfont icon-tengxunfenfencai"></span>
            <span class="name">腾讯分分彩</span>
            <span class="det">1分钟一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
        </div>
      </van-col>

      <van-col span="8">
        <router-link :to="{ name: 'cqssc', params: { n: 'cqssc', t: 20,jh:0, js: 40, jm: 3 } }">
          <div class="item">
            <span class="iconfont icon-icon-zhongqingshishicai"></span>
            <span class="name">重庆时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
          <i class="iconfont icon-feng1"></i>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="8">
        <router-link :to="{ name: 'tjssc', params: { n: 'tjssc', t: 20,jh:0, js: 20, jm: 2 } }">
          <div class="item">
            <span class="iconfont icon-tjssc"></span>
            <span class="name">天津时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
        </div>
      </van-col>
      <van-col span="8">
        <router-link :to="{ name: 'xjssc', params: { n: 'xjssc', t: 20,jh:0, js: 20, jm: 2 } }">
          <div class="item">
            <span class="iconfont icon-xinjiangshishicai"></span>
            <span class="name">新疆时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
          <i class="iconfont icon-feng1"></i>
        </div>
      </van-col>
      <van-col span="8">
        <router-link :to="{ name: 'fc3d', params: { n: 'fc3d', t: 24,jh:19,js:20,jm:30,max: 3 } }">
          <div class="item">
            <span class="iconfont icon-fucai3d"></span>
            <span class="name">福彩3d</span>
            <span class="det">1天一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="8">
        <router-link
          :to="{ name: 'tcpl5', params: { n: 'tcpl5',  t: 24,jh:19,js:20,jm:30,max: 3 } }"
        >
          <div class="item">
            <span class="iconfont icon-pailiesanpailiewu"></span>
            <span class="name">体彩排列3/5</span>
            <span class="det">1天一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
        </div>
      </van-col>
      <van-col span="8">
        <router-link :to="{ name: 'ynssc', params: { n: 'ynssc', t: 20, jh:0,js: 20, jm: 2 } }">
          <div class="item">
            <span class="iconfont icon-jxssc"></span>
            <span class="name">云南时时彩</span>
            <span class="det">20分钟一期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
          <i class="iconfont icon-feng1"></i>
        </div>
      </van-col>
      <van-col span="8">
        <router-link :to="{ name: 'lol', params: { n: 'ynssc', t: 20, jh:0,js: 20, jm: 2 } }">
          <div class="item">
            <span class="iconfont icon-logo-esport"></span>
            <span class="name">电子竞技</span>
            <span class="det">S9等各大联赛...</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="8">
        <router-link :to="{ name: 'pk', params: { n: 'bjkcssc', t: 20, jh:0,js: 40, jm: 3 } }">
          <div class="item">
            <span class="iconfont icon-pk10"></span>
            <span class="name">北京赛车</span>
            <span class="det">20分钟1期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <i class="iconfont icon-sheweifengpan"></i>
          <i class="iconfont icon-feng1"></i>
        </div>
      </van-col>
      <van-col span="8">
        <router-link
          :to="{ name: 'pk10', params: { n: 'wnspk10',djs:5, t: 1,jh:0, js: 10, jm: 0 } }"
        >
          <div class="item">
            <span class="iconfont icon-pk"></span>
            <span class="name">威尼斯pk10</span>
            <span class="det">1分钟1期</span>
          </div>
        </router-link>
        <div class="fengpan" v-show="false">
          <!-- <i class="iconfont icon-sheweifengpan"></i> -->
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import $ from "jquery";
import { Row, Col } from "vant";
export default {
  name: "PlayList",
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
.icon-feng1 {
  position: absolute;
  position: absolute;
  top: -22px;
  left: 70px;
  right: 0;
  font-size: 49px;
}
.fengpan {
  position: absolute;
  margin: 1px;
  top: 0;
  bottom: 0;
  left: 0;
  font-family: "宋体";
  right: -3px;
  color: rgb(211, 72, 72);
  width: 100%;
  font-size: 18px;
  text-align: center;
  line-height: 99px;
  background-color: rgba(0, 0, 0, 0.3);
  .icon-sheweifengpan {
    font-size: 35px;
    color: wheat;
    position: relative;
  }
}
.van-col {
  position: relative;
}
.item {
  display: flex;
  flex-flow: column;
  text-align: center;
  border: 0.1px solid;
  border-color: #eee #eee #eee transparent;
  padding: 8px;
  // margin: 1px;
  .iconfont {
    font-size: 34px;
  }
  .icon-pk10 {
    color: rgb(243, 6, 6);
    // color:#ccc;
  }
  .icon-logo-esport {
    color: #e9bb4f;
  }
  .icon-pk {
    color: green;
  }
  .icon-shishicai {
    color: #f22751;
  }
  .icon-icon-zhongqingshishicai {
    color: #f96e;
    // color:#ccc;
  }
  .icon-jxssc {
    color: #38b366;
    // color:#ccc;
  }
  .icon-tjssc {
    color: #218ddd;
  }
  .icon-fucai3d {
    color: blue;
  }
  .icon-xinjiangshishicai {
    color: brown;
    // color:#ccc;
  }
  .icon-pailiesanpailiewu {
    color: rgb(235, 57, 45);
  }
  .name {
    font-size: 13px;
    font-weight: 600;
    color: #585151;
    margin: 8px auto 2px;
  }
  .det {
    font-size: 11px;
    color: #989898;
    margin: 5px 0;
    font-weight: bold;
  }
}
</style>
