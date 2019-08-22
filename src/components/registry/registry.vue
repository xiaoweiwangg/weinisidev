<template>
  <div>
    <t-header :l="true" :t="'新 用 户 注 册'"></t-header>
    <van-cell-group>
      <van-field
        v-model.trim="name"
        required
        clearable
        :error-message="nem"
        label="用户名"
x        placeholder="请输入用户名"
      />
      <van-field
        v-model.trim="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-field
        v-model.trim="repassword"
        type="password"
        label="密码"
        placeholder="请确认密码"
        required
        :error-message="pwem"
      />
      <van-field
        v-model.trim="phone"
        label="手机号"
        placeholder="请输入手机号"
        :error-message="pem"
      />
      <div class="sub">
        <van-button :loading="load" @click="sub" square type="primary"
          >注 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 册</van-button
        >
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { Button } from "vant";
import { Notify } from "vant";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import THeader from "../home/cps/header/header";
export default {
  name: "RegIstry",
  components: {
    THeader,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Notify.name]: Notify
  },
  data() {
    return {
      show: false,
      load: false,
      name: "",
      password: "",
      repassword: "",
      phone: "",
      pem: "",
      nem: "",
      pwem: ""
    };
  },
  mounted() {},
  methods: {
    sub() {
      if (this.name.length < 8) {
        this.nem = "用户名不能少于8位";
        return;
      }
      if (this.password != this.repassword) {
        this.pwem = "两次输入密码不一致";
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.pem = "手机号格式错误";
        return;
      }
      let userinfo = {};
      userinfo.name = this.name;
      userinfo.password = this.password;
      userinfo.phone = this.phone;
      this.axios.post("/inuser", userinfo).then(x => {
        console.log(x.data);
        if (x.data.msg == "no") {
          this.$notify({
            message: "用户名已存在!",
            duration: 2000,
            background: "#000"
          });
        } else {
          sessionStorage.setItem("islogoin", "true");
          sessionStorage.setItem("token", x.data.token);
          sessionStorage.setItem("userinfo", JSON.stringify(x.data.userinfo));
          this.$notify({
            message: "注册成功!前往主页",
            duration: 1000,
            background: "#000"
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.van-popup {
  height: 60px;
  font-size: 25px;
  text-align: center;
  line-height: 60px;
}
.sub {
  text-align: center;
}
.ui {
  text-align: center;
  padding: 50px 0;
}
.iconfont {
  font-size: 80px;
}
.van-button {
  width: 200px;
  margin-top: 20px;
}
</style>
