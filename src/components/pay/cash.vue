<template>
  <div>
    <t-header :l="true" :t="'提 现 大 厅'"></t-header>
    <h1>提现到银行卡</h1>
    <div class="card">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinhangka" />
      </svg>
      <p>{{cd}}</p>
    </div>
    <van-popup v-model="show">
      <van-cell-group>
        <van-field v-model="name" required clearable label="用户姓名" placeholder="请输入真实用户名" />
        <van-field v-model="card" required clearable label="提现卡号" placeholder="请输入提现银行卡号" />
        <van-field v-model="pwd" type="password" label="安全密码" placeholder="请输入提现密码" required />
      </van-cell-group>
      <div class="btn">
      <van-button type="danger">提交</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
export default {
  name: "CaSh",
  components: {
    THeader
  },
  data() {
    return {
      card: "",
      name: "",
      pwd: "",
      cd: "123",
      show: false
    };
  },
  methods: {
    showPopup(x) {
      this.show = true;
    }
  },
  mounted() {
    this.axios
      .post("/cash", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        if (!x.data.card) {
          this.$dialog({
            title: "您还没有设置提现银行卡号",
            message: "添加收款银行卡号"
          }).then(() => {
            this.showPopup();
          });
        }

        this.cd = x.data[0].card;
      });
  }
};
</script>

<style lang="scss" scoped>
.van-cell-group{
width:350px;
}
.btn{
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
    bottom: 106px;
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