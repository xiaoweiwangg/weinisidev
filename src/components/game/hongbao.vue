<template>
    <div class="rbn">
        <t-header class="hbao" :l="true" :t="'红 包 猜 拆 乐'"></t-header>
        <div class="cont">
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
            <h-b @up="up" :pri="balance" :value="value" :wvalue="wvalue"></h-b>
        </div>
        <div class="set">
            <h1>
                <van-button type="info" @click="shuo">玩法说明</van-button>
                <span class="big"> 红包中奖率最高达95%</span>
                <br>
                <span class="luck">红色幸运值:{{value}}分;</span><br>
                <span class="wuli">黑色武力值:{{wvalue}}分;</span>
                <span>账户余额:{{balance}}元</span><br>
                <span class="pri">当前单次拆包费用:{{price}}元</span>
            </h1>
            <van-slider v-model="value" bar-height="6px" :step="10" active-color="#ee0a24" :min="0" :max="90" />
            <br>
            <van-slider v-model="wvalue" bar-height="6px" :step="2" active-color="#000" :min="2" :max="100" />
        </div>
    </div>
</template>

<script>
import { Slider } from 'vant';
import HB from "./hb"
import THeader from "../home/cps/header/header";
import { setTimeout } from 'timers';
export default {
    name: "HongBao",
    components: {
        THeader,
        HB,
        [Slider.name]: Slider
    },
    methods: {
      shuo(){
        this.$dialog({
          title:"玩法说明",
          message:"通过滑动按钮调整武力值和幸运值,可以响应增加红包额度!\r\n武力值越高,所得红包额度越高\r\n幸运值越高,红包中奖率越高"
        })
      },
      up(x){
        console.log(x)
        this.balance=x
      }
    },
    data() {
        return {
            balance: 0,
            value: 80,
            wvalue:10,
        }
    },
    computed:{
      price(){
        return this.wvalue
      }
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
    }
}
</script>

<style lang="scss" scoped>
.cont {
    display: flex;
    flex-flow: wrap;
}

h1 {
    color: red;
    font-size: 20px;
    line-height: 30px;
    .luck{
      color:#ee0a24;
    }
    .wuli{
      color: black;
    }
    .pri{
      color: rgb(25, 1, 245);
      font-weight: bolder;
    }
}
.big{
  font-size: 25px;

}
.set {
    position: fixed;
    bottom: 200px;
    height: 20px;
    width: 100%;
    margin: 10px 0px;
}
</style>