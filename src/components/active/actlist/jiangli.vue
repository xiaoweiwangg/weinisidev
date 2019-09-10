<template>
  <div>
    <t-header class="theader" :l="true" :t="'晋 级 奖 励'"></t-header>
    <div class="img">
      <img src="https://images.imags-google.com//system/activity/mobile/0710181149727.png" alt />
    </div>
    <div class="dtail">
      <p>当前等级:VIP{{jllist[0].vip}}</p>
      <p>晋级奖励:{{jllist[0].jjjl}}</p>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" color="#1a2a3a">不可领取</van-button>
    </div>
    <div class="jz">晋级机制</div>
    <div class="tb">
      <table>
        <tr>
          <th>等级</th>
          <th>成长积分</th>
          <th>晋级奖励</th>
          <th>跳级奖励</th>
        </tr>
        <tr v-for="(item,index) in jllist" :key="index">
          <td>VIP{{item.vip}}</td>
          <td>{{item.czjf}}</td>
          <td>{{item.jjjl}}</td>
          <td>{{item.tjjl}}</td>
        </tr>
      </table>
    </div>
    <div class="jz">活动说明</div>
    <div class="sm">
      <p>
        1、每晋升一个等级，都可以获得晋级奖励。
        <br />2、成长积分等于您充值的金额。
        <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
import THeader from "../../home/cps/header/header";
export default {
  name: "ActiveJl",
  components: {
    THeader
  },
  data() {
    return {
      jllist: [
        { vip: 1, czjf: 0, jjjl: 0, tjjl: 0 },
        { vip: 2, czjf: 10, jjjl: 1, tjjl: 1 },
        { vip: 3, czjf: 200, jjjl: 5, tjjl: 6 },
        { vip: 4, czjf: 1000, jjjl: 10, tjjl: 16 },
        { vip: 5, czjf: 10000, jjjl: 58, tjjl: 74 },
        { vip: 6, czjf: 50000, jjjl: 318, tjjl: 392 },
        { vip: 7, czjf: 250000, jjjl: 1588, tjjl: 1980 },
        { vip: 8, czjf: 1000000, jjjl: 6588, tjjl: 8568 },
        { vip: 9, czjf: 5000000, jjjl: 35888, tjjl: 44456 },
        { vip: 10, czjf: 20000000, jjjl: 58888, tjjl: 103344 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sm{
    p{
        font-size: 18px;
        padding-left: 7px;
        margin: 7px 0;
        font-weight: bold;
    }
}
.van-button {
  font-size: 23px;
  color: black;
  box-shadow: 3px 3px 3px gray;
}
.jz {
  border-left: 5px solid #109a5a;
  color: #109a5a;
  font-size: 23px;
  font-weight: bold;
  margin: 5px 10px;
  padding-left: 7px;
}
.img {
  img {
    width: 100%;
  }
}
.van-icon-arrow-left {
  color: rgb(250, 250, 250);
}
.dtail {
  p {
    font-size: 22px;
    font-weight: bolder;
    padding-left: 7px;
    margin: 5px 0;
  }
}
.tb {
  table {
    width: 100%;
    td,
    th {
      height: 30px;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>