<template>
  <div>
    <t-header :l="true" :t="'帮 助 指 南'"></t-header>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="每日提现次数" name="1"
        >为了提供更好的服务体验，降低广大用户提现订单的处理时间，每日最多只允许提现5次，建议用户合理安排每日的提现时间和次数；</van-collapse-item
      >
      <van-collapse-item title="什么是安全密码" name="2">
        <div data-v-13f9bceb class="article-body">
          <p>
            <span style="line-height:1.5;"
              >安全密码不同于登陆密码，是另外要设置的一个密码；</span
            >
          </p>
          <p>安全密码一般用于提现、绑定银行卡等操作，可以保障账户资金安全；</p>
          <p>为了账户安全，设置安全密码时不能跟登陆密码相同；</p>
        </div>
      </van-collapse-item>
      <van-collapse-item title="如何充值" name="3">
        <div data-v-13f9bceb class="article-body">
          <p>
            <span style="line-height:1.5;">账号登录后，</span>
            <span style="line-height:1.5;"
              >点击网站右上角＂充值＂按钮，就可以进入充值页面；</span
            >
          </p>
          <p>
            目前网站提供了＂银行转账＂
            <span>＂</span>快捷支付＂＂
            <span>支付宝</span>＂＂微信支付＂四项充值方式；
          </p>
          <p>
            如实填写充值信息，并提交充值订单，1-2分钟左右，刷新账户余额，即可到账；
          </p>
          <p>点击＂我的账户＂＂交易记录＂可查看每日的交易明细；</p>
          <p>大额充值建议使用＂银行转账＂；</p>
        </div>
      </van-collapse-item>
      <van-collapse-item title="在线客服时间" name="4">
        在线客服提供全天24小时咨询服务，全年无休；
        在游戏中遇到任何问题，欢迎随时咨询我们的在线客服，我们竭诚为您提供最高品质的咨询服务；
      </van-collapse-item>
      <van-collapse-item title="手机如何购彩" name="5">
        直接在手机浏览器输入网址，即可登录手机版，无需下载；
        <p>
          手机版
          <span>随时随地可以进行投注，</span
          >更加便捷，建议广大用户使用手机版进行投注；
          建议使用＂谷歌＂＂苹果＂＂UC＂浏览器，操作体验更佳；
        </p>
      </van-collapse-item>
      <van-collapse-item title="如何提现" name="6">
        <div data-v-13f9bceb class="article-body">
          <p>
            <span style>可提现金额，就是账户可以用来提现的金额，</span>
          </p>
          <p>
            <span style>为防止洗钱，充值的钱，要进行投注，才可以提现，</span>
          </p>
          <p>
            <br />
          </p>
          <p>
            <strong>
              <span style="color:#333;">可提现金额计算公式如下：</span>
            </strong>
            &nbsp;
          </p>
          <ul>
            <li>
              <p>
                <span
                  style="color:rgb(51, 51, 51); background-color:rgb(255, 255, 255); font-size:16px; font-family:arial, helvetica, sans-serif;"
                  >可提现金额=投注金额+中奖金额（小于或等于余额）</span
                >
              </p>
            </li>
          </ul>
          <p>
            <span
              style="color:rgb(51, 51, 51); background-color:rgb(255, 255, 255); font-size:16px; font-family:arial, helvetica, sans-serif;"
            ></span>
          </p>
          <p>
            <span
              style="color:rgb(51, 51, 51); background-color:rgb(255, 255, 255); font-size:16px; font-family:arial, helvetica, sans-serif;"
              >*投注金额不含撤单的投注金额</span
            >
          </p>
          <p>
            <br />
          </p>
        </div>
      </van-collapse-item>
      <van-collapse-item title="账户安全" name="7">
        <div data-v-13f9bceb class="article-body">
          <p>
            <span style="line-height:1.5;"
              >为了广大用户的账户安全，网站的＂安全中心＂提供了多项提升账户安全系数的功能；</span
            >
          </p>
          <p>
            新用户注册完成后，请及时进入＂安全中心＂绑定＂密保手机＂
            <span>＂</span>密保问题＂＂密保邮箱＂；
          </p>
          <p>用户忘记密码时，可通过以上功能，找回密码；</p>
        </div>
      </van-collapse-item>
      <van-collapse-item title="如何绑定银行卡" name="8">
        <div data-v-13f9bceb class="article-body">
          <p>
            <span style="line-height:1.5;">进入</span>
            <span style="line-height:1.5;">＂我的账户＂</span>
            <span style="line-height:1.5;"
              >＂银行卡管理＂可以绑定您要用来提现的银行卡；</span
            >
          </p>
          <p>
            <span style="line-height:1.5;"
              >绑定银行卡前，需先设置安全密码；</span
            >
          </p>
          <p>银行卡最多只允许绑定5张；</p>
          <p>银行卡绑定支持所有主流银行；</p>
          <p>
            为了用户资金安全，已成功提现的银行卡将自动锁定，无法删除和修改；如想弃用银行卡，可联系在线客服禁用该银行卡；
          </p>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import THeader from "../../../components/home/cps/header/header";
import { Collapse, CollapseItem } from "vant";
export default {
  name: "HowPlay",
  components: {
    THeader,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  data() {
    return {
      activeNames: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
