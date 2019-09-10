<template>
  <div class="talks">
    <t-header :t="'交 流 大 厅'"></t-header>
    <div class="cont">
      <ul>
        <li v-for="(item ,index) in msglist" :key="index" :style="{float:item.type=='client'?'left':'right',color:item.type=='client'?'green':'white'}">{{item.msg}}</li>
      </ul>
    </div>
    <div class="tk">
      <input type="text" v-model="msg" />
      <van-button type="info" @click="send">发送</van-button>
    </div>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
export default {
  name: "TalkV",
  components: {
    THeader
  },
  data() {
    return {
      msg: "",
      msglist: []
    };
  },
  methods: {
    send() {
      let res={}
      this.$socket.emit("logoin", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name,
        msg: this.msg
      });
      res.msg=this.msg
      res.type="client"
      this.msglist.push(res);
      console.log(this.msglist);
      this.msg=""
    }
  },
  mounted() {
    this.$socket.emit("logoin", {
      username: "client:"+JSON.parse(sessionStorage.getItem("userinfo")).name
    });
    this.sockets.subscribe(
      "client:"+JSON.parse(sessionStorage.getItem("userinfo")).name,
      data => {
        console.log(data);
        this.msglist.push(data);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  flex-flow: column;
}
li{
  font-size: 18px;
  margin: 5px;
  line-height: 25px;
  background-color: #2980b9;
  padding: 3px;
  border-radius: 7px;
}
.talks {
  padding-top: 45px;
  .tk {
    display: flex;
    border: 2px solid #2c3e50;
    border-radius: 8px;
    margin:0 5px;
    position: fixed;
    font-size: 25px;
    font-weight: bold;
    bottom: 70px;
    left: 0;
    right: 0;
    input {
      flex: 1;
    }
  }
}
</style>
