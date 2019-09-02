<template>
  <div class="m">
    <t-header :t="'个 人 中 心'"></t-header>
    <div class="user">
      <div class="ui">
        <span class="iconfont icon-yonghutouxiang"></span>
      </div>
      <div class="msg">
        <div class="name">
          <span class="sum"> 账 &nbsp;&nbsp;号:</span>
          <span class="nm">{{ userinfo.name }}</span>
        </div>
        <div class="bl">
          <span class="sum">代&nbsp;&nbsp; 理:</span>
          <span class="ye dl"
            >&nbsp;&nbsp;{{ userinfo.level }}&nbsp;&nbsp;级</span
          >
        </div>
        <div class="bl">
          <span class="sum">余&nbsp;&nbsp; 额:</span>
          <span class="ye"
            >&nbsp;&nbsp;{{ balance }}&nbsp;元</span>
        </div>
      </div>
    </div>
    <van-row>
      <van-col span="6" >
        <div class="item" @click="recharge">
          <div class="ic"><span class="iconfont icon-chongzhi"></span></div>
          <div class="ms">我要充值</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="item">
          <div class="ic"><span class="iconfont icon-tixiancopy"></span></div>
          <div class="ms">我要提现</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="item">
          <div class="ic"><span class="iconfont icon-tedian3"></span></div>
          <div class="ms">交易记录</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="item" @click="history">
          <div class="ic"><span class="iconfont icon-jilu"></span></div>
          <div class="ms">投注记录</div>
        </div>
      </van-col>
    </van-row>
    <div class="jx"></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { Row, Col } from "vant";
import THeader from "../home/cps/header/header";
export default {
  name: "ManagerV",
  components: {
    THeader,
    [Row.name]: Row,
    [Col.name]: Col
  },
  mounted() {
    this.$socket.emit("user",{
      username:JSON.parse(sessionStorage.getItem("userinfo")).name,
    })
    this.sockets.subscribe("balance", data => {
     this.balance=data[0].balance
    })
    this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"))
  },
  computed: {
    ...mapGetters(["getuserinfo"])
  },
  data() {
    return {
      // ...mapState(["userinfo"]),
      userinfo: {},
      balance:0,
    };
  },
  methods: {
    recharge(){
      this.$router.push("/recharge")
    },
    history(){
      this.$router.push("/history")
    }
    // ...mapMutations([""]),
    // ...mapActions([""])
  }
};
</script>

<style lang="scss" scoped>
.nm {
  color: rebeccapurple;
}
.dl {
  color: gold;
  font-size: 21px;
}
.ye {
  color: goldenrod;
}
.icon-rmb {
  vertical-align: top;
  position: relative;
  top: -2px;
}
.jx {
  height: 15px;
  background-color: #efeef4;
}
.m {
  padding-top: 45px;
  .user {
    display: flex;
    text-align: center;
    border-bottom: 1px dashed gray;
    min-height: 100px;
  }
  .icon-yonghutouxiang {
    line-height: 100px;
    font-size: 66px;
    color: rgb(197, 169, 12);
    border: 1px dashed rgb(126, 56, 108);
  }
  .name,
  .bl {
    font-size: 20px;
  }
  .msg {
    text-align: left;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
  .ui,
  .msg {
    flex: 1;
  }
  .sum {
    font-weight: bold;
    display: inline-block;
  }
  .item {
    text-align: center;
    .iconfont {
      font-size: 35px;
    }
    .icon-chongzhi {
      color: #d8d514;
    }
    .icon-tixiancopy {
      color: rgb(12, 204, 211);
    }
    .icon-tedian3 {
      color: rgb(250, 196, 18);
    }
    .icon-jilu {
      color: salmon;
    }
    .ms {
      font-size: 17px;
      padding-top: 7px;
    }
  }
  .van-row {
    display: flex;
    align-items: center;
    height: 75px;
  }
}
</style>
