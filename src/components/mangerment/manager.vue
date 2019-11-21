<template>
  <div class="m">
    <t-header :t="'个 人 中 心'"></t-header>
    <div class="user">
      <div class="ui">
        <div class="img">
          <img
            :src="'/image/' + userinfo.img"
            alt=""
            height="100"
            width="100"
          />
        </div>
      </div>
      <div class="msg">
        <div class="name">
          <span class="sum">账 &nbsp;&nbsp;号:</span>
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
          <span class="ye">&nbsp;&nbsp;{{ balance }}&nbsp;元</span>
        </div>
      </div>
    </div>
    <van-row>
      <van-col span="6">
        <div class="item" @click="recharge">
          <div class="ic">
            <span class="iconfont icon-chongzhi"></span>
          </div>
          <div class="ms">我要充值</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="item" @click="cash">
          <div class="ic">
            <span class="iconfont icon-tixiancopy"></span>
          </div>
          <div class="ms">我要提现</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="item">
          <div class="ic">
            <span class="iconfont icon-tedian3"></span>
          </div>
          <div class="ms">交易记录</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="item" @click="history">
          <div class="ic">
            <span class="iconfont icon-jilu"></span>
          </div>
          <div class="ms">投注记录</div>
        </div>
      </van-col>
    </van-row>
    <div class="jx"></div>
    <!-- <div class="mlist">
      <div class="item">
        <i class="iconfont icon-management"></i>
        <span class="contdet">个人信息</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
    <div class="mlist">
      <div class="item">
        <i class="iconfont icon-anquan"></i>
        <span class="contdet">安全中心</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div> -->
    <div class="mlist">
      <div class="item">
        <i class="iconfont icon-daili1"></i>
        <router-link to="/daili">
          <span class="contdet">代理中心</span>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
      </div>
    </div>
    <div class="mlist">
      <div class="item">
        <router-link to="/yingkui">
          <i class="iconfont icon-yingkui"></i>
          <span class="contdet">今日盈亏</span>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
      </div>
    </div>
    <div class="jx"></div>
    <div class="mlist">
      <div class="item">
        <router-link to="/how">
          <i class="iconfont icon-zhinan"></i>
          <span class="contdet">帮助指南</span>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
      </div>
    </div>
    <div class="mlist">
      <div class="item">
        <router-link to="/guanyu">
          <i class="iconfont icon-guanyu"></i>
          <span class="contdet">关于我们</span>
          <i class="iconfont icon-jiantou1"></i>
        </router-link>
      </div>
    </div>
    <van-button class="q" type="primary" size="large" color="red" @click="quit"
      >退出登录</van-button
    >
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
    this.$socket.emit("user", {
      username: JSON.parse(sessionStorage.getItem("userinfo")).name
    });
    this.sockets.subscribe("balance", data => {
      this.balance = data[0].balance;
      this.$store.commit("setbalance", this.balance);
    });
    this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
  },
  computed: {
    ...mapGetters(["getuserinfo"])
  },
  data() {
    return {
      // ...mapState(["userinfo"]),
      userinfo: {},
      balance: 0
    };
  },
  methods: {
    quit() {
      sessionStorage.setItem("islogoin", "false");
      this.$router.push("/logoin");
    },
    cash() {
      this.$router.push("/cash");
    },
    recharge() {
      this.$router.push("/recharge");
    },
    history() {
      this.$router.push("/history");
    },
    ...mapMutations(["setbalance"])
    // ...mapActions([""])
  }
};
</script>

<style lang="scss" scoped>
.q {
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
}
.mlist {
  .item {
    height: 60px;
    display: flex;
    border-bottom: 1px dashed #ccc;
    padding: 0 12px;
    .icon-jiantou1 {
      font-size: 25px !important;
      line-height: 62px;
    }
    .iconfont {
      line-height: 60px;
    }
    .icon-management {
      color: #7885ca;
    }
    .icon-anquan {
      color: #81c784;
    }
    .icon-guanyu {
      color: #e0755f;
    }
    .icon-yingkui {
      color: #a1abe3;
    }
    .icon-daili1 {
      color: #63b4f6;
      font-size: 38px !important;
    }
    .icon-zhinan {
      color: #7ca3f5;
    }
  }
  .contdet {
    flex: 1;
    line-height: 62px;
    text-align: left;
    font-size: 20px;
    padding-left: 12px;
  }
}
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
  padding-bottom: 120px;

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
    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .van-row {
    display: flex;
    align-items: center;
    height: 75px;
  }
}
</style>
