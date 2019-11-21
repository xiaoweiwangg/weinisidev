<template>
  <div>
    <t-header :l="true" :t="titl"></t-header>
    <van-cell-group>
      <van-field
        v-model="cashnum"
        required
        clearable
        label="充值金额"
        placeholder="请输入充值金额"
      />
      <van-button type="primary" @click="onpick" v-show="!show">提交申请</van-button>
    </van-cell-group>
    <van-panel id="tit" title="微信转账支付单次入款限额10000元,最低入款10元." desc status v-show="show">
      <hr />
      <h1>
        1.入款银行类别:
        <span>中国银行</span>
        <van-button
          type="info"
          size="small"
          v-clipboard:copy="type"
          v-clipboard:success="oncopy"
        >点击复制</van-button>
      </h1>
      <hr />
      <h1>
        2.入款户名:
        <span class="name">符雄军</span>
        <van-button
          type="info"
          size="small"
          v-clipboard:copy="name"
          v-clipboard:success="oncopy"
        >点击复制</van-button>
      </h1>
      <hr />
      <h1>
        3.入款备注(必须):
        <span class="name">{{username}}</span>
        <van-button
          type="info"
          size="small"
          v-clipboard:copy="username"
          v-clipboard:success="oncopy"
        >点击复制</van-button>
      </h1>
      <hr />
      <h1>
        4.入款卡号:
        <span class="card">6216697000021122456</span>
        <van-button
          type="info"
          size="small"
          v-clipboard:copy="card"
          v-clipboard:success="oncopy"
        >点击复制</van-button>
      </h1>
      <hr />
      <br>
      <h1>
        5.最后一步,点击
        <van-button type="danger" @click="send">我已完成充值操作</van-button>
      </h1>
      <hr />
      <h2>
        充值时请务必在留言栏或者备注里写明您的账户名,否则将不能正常时间入款,如有充值未到账请及时联系客服,
        <hr />点击添加
        <a
          href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1226579671&website=www.oicqzone.com"
        >QQ:1226579671</a> ,24*7小时 客服专线为您服务
      </h2>
    </van-panel>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
import { Panel } from "vant";
import { log } from 'util';
export default {
  name: "WechatPay",
  components: {
    THeader,
    [Panel.name]: Panel
  },
  data() {
    return {
      username: "erwei",
      name: "符雄军",
      card: "6216697000021122456",
      type: "中国银行",
      currentTime: "12:00",
      show: false,
      titl:'微 信 充 值',
      cashnum:100,
    };
  },
  computed: {},
  mounted() {
    this.username = JSON.parse(sessionStorage.getItem("userinfo")).name;
    this.$dialog.confirm({
      title: "警告!!!",
      message:
        "入款账号会不定期更新,每次入款时请注意更新为最新入款账号!\r\n请务必在您付款界面的备注留言里填写您的账户名,否则将不能正常入帐;"
    });
  },
  methods: {
    oncopy() {
      alert("内容复制成功");
    },
    onpick() {
      this.show = true;
    },
    send(){
      let msg={cashnum:this.cashnum,type:this.titl,username:this.username}
      this.axios.post("/send",msg)
      alert("系统确认收到充值款项后,将自动入账到您的游戏账号,平均时长5分钟.")
    }
  }
};
</script>

<style lang="scss" scoped>
.van-button {
  float: right;
  margin-left: 5px;
  color: black;
  font-weight: bolder;
}
h1 {
  font-size: 20px;
  padding: 5px 15px;
}
h2 {
  font-size: 20px;
  padding: 15px;
  color: red;
  line-height: 30px;
}
span {
  color: green;
}
a {
  color: green;
}
#tit {
  font-size: 23px;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>