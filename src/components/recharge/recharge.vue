<template>
  <div>
    <t-header :l="true" :t="'充 值 中 心'"></t-header>
    <div class="item">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinlian" />
        </svg>
      </div>
      <router-link to="/unipay">
        <div class="right">
          <div class="tit">银联卡转账/支付</div>
          <div class="detail">最低入款10元起,单次5万元封顶,3分钟到帐</div>
        </div>
      </router-link>
    </div>
    <div class="item">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin" />
        </svg>
      </div>
      <router-link to="/wechatpay">
        <div class="right">
          <div class="tit">微信转账支付</div>
          <div class="detail">最低入款100元起,单次5万元封顶,1分钟到帐</div>
        </div>
      </router-link>
    </div>
    <div class="item">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifubao" />
        </svg>
      </div>
      <router-link to="/alipay">
        <div class="right">
          <div class="tit">支付宝转账支付</div>
          <div class="detail">最低入款100元起,单次5万元封顶,1分钟到帐</div>
        </div>
      </router-link>
    </div>
    <div class="item">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan1" />
        </svg>
      </div>
      <div class="right">
        <div class="tit">QQ钱包支付</div>
        <div class="detail">QQ钱包充值通道维护中...</div>
      </div>
    </div>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
export default {
  name: "RecharGe",
  components: {
    THeader
  },
  mounted() {
    this.$notify({
      message: "如充值过程遇到问题请加客服QQ或微信,专线客服快速处理一切问题"
    });
  }
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 70px;
}
.left {
  margin: 0 10px;
}
.item {
  display: flex;
  margin: 5px 0px;

  .detail,
  .tit {
    font-size: 20px;
    line-height: 32px;
  }
  .tit {
    font-weight: 600;
  }
  .detail {
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #icon-zhifubao,
  #icon-ziyuan1 {
    color: #ccc;
  }
  a {
    color: black;
  }
}
</style>
