<template>
  <div class="talks">
    <t-header :t="'交 流 大 厅'"></t-header>
    <div class="cont">
      <ul>
        <div class="ls clf" v-for="(item ,index) in msglist" :key="index">
        <div class="img" :style="{float:item.type=='client'?'left':'right'}"><i class="iconfont" :class="item.type=='client'?'icon-management':'icon-custom-service'"> </i></div>
        <li :style="{float:item.type=='client'?'left':'right',backgroundColor:item.type=='client'?'#1a2a3a':'gold',color:item.type=='client'?'white':'#1a2a3a'}">{{item.msg}}</li>
        </div>
      </ul>
    </div>
    <div class="tk">
      <input type="text" v-model="msg" />
      <van-button type="info" @click="send" size="large">发送</van-button>
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
      if(this.msg.length<=0){
        return 
      }
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
  .ls{
    min-height: 80px;
    
    .icon-custom-service{
      color:#9b59b6;
      font-size: 39px;
    }
    .icon-management{
      font-size: 39px;
      color: #2980b9;
    }

  }
}
li{
  width: 50.5%;
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
    border: 2px solid #2c3e50;
    border-radius: 8px;
    margin:0 5px;
    position: fixed;
    font-size: 25px;
    font-weight: bold;
    bottom: 70px;
    left: 0;
    right: 0;
    .van-button{
      float: right;
      width: 80px;
    }
    input {
      // flex: 1;
      width: 220px;
    }
  }
}
</style>
