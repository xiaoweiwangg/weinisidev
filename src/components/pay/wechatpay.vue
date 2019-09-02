<template>
  <div>
    <t-header :l="true" :t="'微 信 充 值'"></t-header>
    <van-panel title="微信扫码支付单次入款限额5000元,最低入款100元." desc="长按保存下载或截屏二维码到手机" status="">
        
        <div class="img"><img width="80%" src="../../assets/img/wechat.jpg" alt=""></div>
    </van-panel>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
import { Panel } from "vant";
export default {
  name: "WechatPay",
  components: {
    THeader,
    [Panel.name]: Panel
  },
  mounted(){
      this.$dialog.confirm({
          title:"警告!!!",
          message:"二维码会不定期更新,每次入款时请注意更新为最新入款二维码!\r\n请务必在您的付款界面的备注留言里填写您的账户名,否则将不能正常入帐;"
      })
  }
};
</script>

<style lang="scss" scoped>
.img{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>