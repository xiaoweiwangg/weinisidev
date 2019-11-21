<template>
  <div>
    <t-header :l="true" :t="'我 的 推 广 链 接'"></t-header>
    <van-cell-group>
      <h1>您的私有推广链接</h1>
      <van-field :value="code" disabled />
    </van-cell-group>
    <hr />
    <van-button
      v-clipboard:copy="code"
      v-clipboard:success="oncopy"
      type="primary"
      >点击复制链接</van-button
    >
    <hr>
    <h1>
      我的邀请码: <span class="code">{{yaoqing}}</span>
    </h1>
    <van-button
      v-clipboard:copy="yaoqing"
      v-clipboard:success="oncopy"
      type="primary"
      >点击复制邀请码</van-button
    >
    <!-- <img :src="'/cimg?add='+code" alt=""> -->
  </div>
</template>

<script>
import THeader from "../../../../home/cps/header/header";
export default {
  name: "VCode",
  components: {
    THeader
  },
  data() {
    return {
      code1: "http://www.flcvip.net/#/registry?tid=",
      yaoqing: ""
    };
  },
  computed: {
    code() {
      return this.code1 + this.yaoqing;
    }
  },
  mounted() {
    this.axios
      .post("/findcode", {
        name: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        console.log(x);
        this.yaoqing = x.data.tid;
        console.log("/cimg?add=" + this.code);
      });
    // this.axios.post("/cimg",{name:JSON.parse(sessionStorage.getItem("userinfo")).name})
    // .then(x=>{
    //   console.log(x);
    //   // this.yaoqing=x.data.tid
    // })
  },
  methods: {
    oncopy() {
      alert("复制成功,通过该链接注册的用户,都自动挂载到您的账户名下.");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-field {
  font-size: 22px;
}
.code{
  color: red;
  font-size: 25px;
  line-height: 30px;

}
h1 {
  font-size: 22px;
  line-height: 30px;
  color: red;
}
.van-button {
  // float: right;
}
</style>
