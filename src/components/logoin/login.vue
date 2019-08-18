<template>
  <div>
    <t-header :t="'登 录 中 心'"></t-header>
    <div>
      <span class="iconfont icon-yonghutouxiang"></span>
    </div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        @focus="put"
        @blur="blu"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <div class="sub">
        <van-button :loading="load" @click="sub" square type="primary"
          >登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 录</van-button
        >
      </div>
    </van-cell-group>
    <van-cell-group class="fog">
      <router-link to="/registry">新用户注册</router-link>
      <span>忘记密码?</span>
    </van-cell-group>
  </div>
</template>

<script>
import { Button } from "vant";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import THeader from "../home/cps/header/header";
import { log } from "util";
export default {
  name: "LogoIn",
  components: {
    THeader,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data() {
    return {
      load: false,
      username: "",
      password: "",
      f: false
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      // alert(1)
      if (this.f) {
        this.blu();
      }
    });
  },
  methods: {
   
    sub() {
      this.load = true;
      let userinfo = {};
      userinfo.username = this.username;
      userinfo.password = this.password;
      this.axios.post("/fuser", userinfo).then(x => {
        if (x.data.msg == "ok") {
          console.log(x.data);
          sessionStorage.setItem("token", x.data.token);
          sessionStorage.setItem("islogoin", "true");
          sessionStorage.setItem("userinfo", JSON.stringify(x.data.userinfo));
          this.$store.commit(
            "setuserinfo",
            JSON.parse(sessionStorage.getItem("userinfo"))
          );
          setTimeout(() => {
            this.load = false;
            this.$router.push("/");
          }, 500);
        } else {
          this.$notify({
            message: "用户名或密码错误",
            duration: 1000,
            background: "#000"
          });
          setTimeout(() => {
            this.load = false;
          }, 500);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.put {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
}
.fog {
  text-align: center;
  margin-top: 20px;
  a {
    font-size: 18px;
  }
  span {
    font-size: 18px;
    margin-left: 20px;
  }
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
