<template>
  <div>
    <t-header :l="true" :t="'支 付 宝 充 值'"></t-header>
    <van-panel title="支付宝扫码支付单次入款限额10000元,最低入款100元." desc="长按保存下载或截屏二维码到手机" status="">
        
        <div class="img"><img width="80%" src="../../assets/img/alipay.jpg" alt=""></div>
    </van-panel>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
import { Panel } from "vant";
export default {
  name: "AliPay",
  components: {
    THeader,
    [Panel.name]: Panel
  },
  mounted(){
      this.$dialog.confirm({
          title:"警告!!!",
          message:"入款二维码会不定期更新,每次入款时请注意更新为最新入款二维码!\r\n请务必在您的付款界面的备注留言里填写您的账户名,否则将不能正常入帐;"
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