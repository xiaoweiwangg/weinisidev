<template>
  <div>
    <t-header :l="true" :t="'登 录 中 心'"></t-header>
    <div class="tx">
      <span class="iconfont icon-yonghutouxiang"></span>
    </div>
    <div class="dl">
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          @keydown.enter="sub"
          placeholder="请输入密码"
          required
        />
        <div class="code">
          <div class="img">
            <img src="http://localhost/img" alt="验证码" />
          </div>
          <div class="coder">
            <van-field v-model="code" placeholder="请输入验证码" />
          </div>
        </div>
        <div class="sub">
          <van-button
            :loading="load"
            @click="sub"
            square
            type="primary"
          >登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 录</van-button>
        </div>
      </van-cell-group>
      <div class="fog">
        <router-link to="/registry">新用户注册</router-link>
        <span>忘记密码?</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
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
      f: false,
      code:""
    };
  },
  mounted() {
    this.getimg();
    $("img").on("click", () => {
      this.getimg();
    });
    window.addEventListener("resize", () => {
      // alert(1)
      if (this.f) {
        this.blu();
      }
    });
  },
  methods: {
    getimg() {
      $("img").attr("src", "http://localhost/img?" + Math.random());
    },
    sub() {
      this.load = true;
      let userinfo = {};
      userinfo.username = this.username;
      userinfo.password = this.password;
      userinfo.code=this.code
      this.axios.post("/fuser", userinfo).then(x => {
        if (x.data.msg == "ok") {
          sessionStorage.setItem("token", x.data.token);
          sessionStorage.setItem("islogoin", "true");
          sessionStorage.setItem("userinfo", JSON.stringify(x.data.userinfo));
          this.$store.commit(
            "setuserinfo",
            JSON.parse(sessionStorage.getItem("userinfo"))
          );

          this.$notify({
            message: "登录成功!跳转...",
            duration: 500,
            background: "green"
          });
          setTimeout(() => {
            this.$dialog
              .confirm({
                title: "棋牌游戏百人牛牛已推出",
                message:
                  "多样玩法,老少皆宜,真人对战,赔率更高,赶快加入游戏体验吧"
              })
              .then(x => {
                this.$router.push("/qipai");
              })
              .catch(() => {
                // on cancel
                this.load = false;
                this.$router.push("/");
              });
          }, 500);

          setInterval(() => {}, 1000);
        } else if (x.data.msg == "codeno"){
          this.$notify({
            message: "验证码错误",
            duration: 1000,
            background: "#000"
          });
          this.getimg()
          setTimeout(() => {
            this.load = false;
          }, 500);
        }else{
          this.getimg()
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
.code {
  display: flex;
}
.tx {
  text-align: center;
  padding: 10px;
}

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
  font-size: 60px;
}
.van-button {
  width: 200px;
  margin-top: 20px;
}
</style>
