<template>
  <div>
    <t-header :l="true" :t="'代 理 说 明'"></t-header>
    <div class="img">

    <img src="https://images.imags-google.com//system/mobile/other/agentIntro.jpg" alt="">
    </div>
    <div data-v-5d5c2272 class="article-body agent-content">
      <div data-v-5d5c2272 class="font-s14">当您能看到这个页面，说明您的账号即是玩家账号也是代理账号，即可以自己投注，也可以发展下级玩家，赚取返点佣金。</div>
      <div data-v-5d5c2272 class="title">
        <hr />
        <i data-v-5d5c2272 class="van-icon"><span class="iconfont">&#xe667;</span></i>如何赚取返点？
      </div>
      <p data-v-5d5c2272>可获得的返点，等于自身返点与下级返点的差值，如自身返点5，下级返点3，你将能获得下级投注金额2%的返点，如下级投注100元，你将会获得2元。</p>
      <p data-v-5d5c2272 class="no-b">点击下级开户，可查看自身返点，也可为下级设置返点。</p>
      <div data-v-5d5c2272 class="title">
        <hr />
        <i data-v-5d5c2272 class="van-icon"><span class="iconfont">&#xe667;</span></i>如何为下级开户？
      </div>
      <p data-v-5d5c2272>点击下级开户，先为您的下级设置返点，设置成功后会生成一条邀请码，将邀请码发送给您的下级注册，注册后他就是您的下级，点击会员管理，就能查看他注册的账号；</p>
      <p
        data-v-5d5c2272
        class="no-b"
      >如果您为下级设置的是代理类型的账号，那么您的下级就能继续发展下级，如果设置的是玩家类型，那么您的下级只能投注，不能再发展下级，也看不到代理中心；</p>
      <div data-v-5d5c2272 class="title">
          <hr>
        <i data-v-5d5c2272 class="van-icon"><span class="iconfont">&#xe667;</span></i>温馨提示：
      </div>
      <p data-v-5d5c2272>返点不同赔率也不同，点击返点赔率表，可查看返点赔率；</p>
      <p data-v-5d5c2272>返点越低，赔率就越低，建议为下级设置的返点不要过低；</p>
      <p data-v-5d5c2272>可在代理报表、投注明细、交易明细查看代理的发展情况；</p>
      <p data-v-5d5c2272 class="no-b">建议开设的下级也是代理类型，无论发展了几级，您都能获得返点。</p>
    </div>
  </div>
</template>

<script>
import THeader from "../../../../home/cps/header/header"
export default {
    components: {
    THeader
  },
};
</script>

<style lang="scss" scoped>
  img{
      width: 100%;
      height: 145px;
  }
.article-body {
  font-size: 20px;
  padding: 25px;
  line-height: 29px;
  .title{
      color:red;
      line-height: 30px;
  }
}
</style>