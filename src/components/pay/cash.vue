<template>
  <div>
    <t-header :l="true" :t="'提 现 大 厅'"></t-header>
    <h1>提现到银行卡,平均到账时间5分钟,高峰期最迟10分钟! 提现时出款户名自动以注册时的真实姓名为据.</h1>
    <div class="card">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinhangka" />
      </svg>
      <p>{{cd}}</p>
      <van-cell-group>
        <van-field v-model.number="num" required clearable label="提现金额" placeholder="请输入提现金额" />
        <van-field v-model.trim="pwd" type="password" label="安全密码" placeholder="请输入提现密码" required />
      </van-cell-group>
      <div class="btn">
        <van-button type="danger" @click="sub">提交</van-button>
      </div>
    </div>
    <van-popup v-model="show">
      <van-cell-group>
        <van-field v-model.trim="name" required clearable label="用户姓名" placeholder="请输入真实用户名" />
        <van-field v-model.trim="card" required clearable label="提现卡号" placeholder="请输入提现银行卡号" />
        <van-field v-model.trim="pwd" type="password" label="安全密码" placeholder="请输入提现密码" required />
      </van-cell-group>
      <div class="btn">
        <van-button type="danger" @click="incard">提交</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";
import THeader from "../home/cps/header/header";
export default {
  name: "CaSh",
  components: {
    THeader
  },
  data() {
    return {
      num: "",
      card: "",
      name: "",
      pwd: "",
      cd: "",
      show: false
    };
  },
  computed:{
      ...mapState(["userinfo"])
  },
  mounted() {
    this.axios
      .post("/cash", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        this.cd = x.data[0].card;
        if (!x.data[0].card) {
          this.$dialog({
            title: "您还没有设置提现银行卡号",
            message: "添加收款银行卡号"
          }).then((x) => {
            this.showPopup();
          });
        }
      });
  },
  methods: {
    // ...mapMutations(["serbalance"]),
    sub() {
      if(isNaN(this.num)){
        this.$notify({
              message: "输入有误,请重新核对!",
              duration: 3000,
              background: "green"
            });
            return 
      }
      this.axios
        .post("/subcash", {
          card:this.cd||this.card,
          pwd:this.pwd,
          num: this.num,
          username: JSON.parse(sessionStorage.getItem("userinfo")).name
        })
        .then(x => {
          if (x.data.msg == "ok") {
            this.$notify({
              message: "提现请求已提交,稍后5分钟内到帐!",
              duration: 3000,
              background: "green"
            });
            console.log(this.userinfo);
            this.$store.commit("setbalance",this.userinfo.balance-this.num)
          } else if(x.data.msg=="no"){
            this.$notify({
              message: "安全密码错误!",
              duration: 3000,
              background: "gold"
            });
          }else if(x.data.msg=="余额不足"){
            this.$notify({
              message: "余额不足,请重新输入!",
              duration: 3000,
              background: "gold"
            });
          }
        });
    },
    showPopup(x) {
      this.show = true;
    },
    incard() {
      if (this.card.length != 19) {
        this.$notify({
          message: "银行卡格式错误",
          duration: 2000,
          background: "black"
        });
        return;
      }
      if (this.pwd.length < 6) {
        this.$notify({
          message: "密码长度过短",
          duration: 2000,
          background: "black"
        });
      }
      this.axios
        .post("/incard", {
          realname: this.name,
          pwd: this.pwd,
          card: this.card,
          username: JSON.parse(sessionStorage.getItem("userinfo")).name
        })
        .then((x)=>{
          this.show = false;
          this.cd=this.card
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-cell-group {
  width: 350px;
}
.btn {
  text-align: center;
}
.ts {
  font-size: 22px;
  color: goldenrod;
}
.card {
  text-align: center;
  position: relative;
  p {
    position: absolute;
    bottom: 238px;
    font-size: 25px;
    left: 0;
    right: 0;
  }
}
input {
  height: 40px;
  width: 300px;
  border: 3px solid goldenrod;
}
.icon {
  font-size: 300px;
}
h1 {
  font-size: 25px;
  font-weight: bolder;
}
</style>