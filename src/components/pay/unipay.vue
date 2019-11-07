<template>
  <div>
    <t-header :l="true" :t="'银 联 转 账 充 值'"></t-header>
    <van-panel title="银联卡转账单次入款限额10000元,最低入款50元." desc="长按复制卡号" status="">
        <h1>888888888888888888888888888</h1>
        <!-- <div class="img"><img width="80%" src="../../assets/img/alipay.jpg" alt=""></div> -->
    </van-panel>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
import { Panel } from "vant";
export default {
  name: "UniPay",
  components: {
    THeader,
    [Panel.name]: Panel
  },
  mounted(){
      this.$dialog.confirm({
          title:"警告!!!",
          message:"入款银行卡会不定期更新,每次入款时请注意更新为最新入款银行卡号!\r\n请务必在您的付款界面的备注留言里填写您的账户名,否则将不能正常入帐;客服QQ88888888"
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