<template>
  <div>
    <t-header :l="true" :t="'今 日 盈 亏'"></t-header>
    <div class="yknum">
        <p>盈利金额</p>
        <p class="num">{{yknum}}&nbsp;元</p>
    </div>
    <div class="ykcont">
        <ul>
            <li>
                <p class="tzcont">{{tzcont}}&nbsp;元</p>
                <p class="det">投注金额</p>
            </li>
            <li>
                <p class="tzcont">{{zjcont}}&nbsp;元</p>
                <p class="det">中奖金额</p>
            </li>
            <!-- <li>
                <p class="tzcont">{{hdcont}}&nbsp;元</p>
                <p class="det">活动礼金</p>
            </li>
            <li>
                <p class="tzcont">{{fdcont}}&nbsp;元</p>
                <p class="det">返点金额</p>
            </li>
            <li>
                <p class="tzcont">{{czcont}}&nbsp;元</p>
                <p class="det">充值金额</p>
            </li>
            <li>
                <p class="tzcont">{{txcont}}&nbsp;元</p>
                <p class="det">提现金额</p>
            </li>
            <li>
                <p class="tzcont">{{zzcont}}&nbsp;元</p>
                <p class="det">转账金额</p>
            </li>
            <li>
                <p class="tzcont">{{skcont}}&nbsp;元</p>
                <p class="det">收款金额</p>
            </li>
            <li>
                <p class="tzcont">{{hbcont}}&nbsp;元</p>
                <p class="det">红包金额</p>
            </li> -->
        </ul>
    </div>
  </div>
</template>

<script>
import THeader from "../../home/cps/header/header";
export default {
  name: "YingKui",
  components: {
    THeader
  },  
  data() {
    return {
        yknum:"0.00",
        tzcont:"0.00",
        zjcont:"0.00",
        hdcont:"0.00",
        fdcont:"0.00",
        czcont:"0.00",
        txcont:"0.00",
        zzcont:"0.00",
        skcont:"0.00",
        hbcont:"0.00",
    };
  },
  mounted(){
      this.axios.post("/yingkui",{name:JSON.parse(sessionStorage.getItem("userinfo")).name})
      .then((x)=>{
          console.log(x);
          this.yknum=(x.data["SUM(jiangjin)"]-x.data["SUM(price)"]).toFixed(2)
          this.tzcont=x.data["SUM(jiangjin)"]||this.tzcont
          this.zjcont=x.data["SUM(price)"]||this.zjcont
      })
  }
};
</script>

<style lang="scss" scoped>
.yknum{
    height: 175px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: linear-gradient(top,#6a202d,#3b052c);
    align-items: center;
    p{
        text-align: center;
        line-height: 35px;
        font-size: 22px;
        color:#fced08;
    }
    .num{
        font-size: 25px;
    }
}
.ykcont{
    ul{
        li{
            width: 33%;
            height: 120px;
            float: left;
            display: flex;
            flex-flow: column;
            justify-content:center;
            align-items: center;
            p{
                line-height: 30px;
                text-align: center;
            }
            .tzcont{
                color:#ff6818 ;
            }
        }
    }
}
</style>