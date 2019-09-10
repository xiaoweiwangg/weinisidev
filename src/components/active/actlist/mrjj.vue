<template>
  <div>
    <t-header class="theader" :l="true" :t="'每 日 加 奖'"></t-header>
    <div class="img">
      <img
        src="https://images.imags-google.com//system/mobile/activity/20161007024852511251.png"
        alt
      />
    </div>
    <div class="dtail">
      <p>昨日投注:{{'0.00'}}</p>
      <p>当前等级:{{0}}</p>
      <p>加奖比例:{{0}}</p>
      <p>可得加奖:{{0}}</p>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" color="#1a2a3a">不可领取</van-button>
    </div>
    <div class="jz">加奖比例</div>
    <div class="tb">
      <table>
        <tr>
          <th>等级/投注额</th>
          <th>500.00+</th>
          <th>300000.00+</th>
          <th>500000.00+</th>
        </tr>
        <tr v-for="(item,index) in jllist" :key="index">
          <td>VIP{{item.vip}}</td>
          <td>{{item.wbj}}</td>
          <td>{{item.sswj}}</td>
          <td>{{item.wswj}}</td>
        </tr>
      </table>
    </div>
    <div class="jz">活动说明</div>
    <div class="sm">
      <p>1、每日加奖在每日凌晨00:20后开放领取；</p>
      <p>2、加奖比例是根据会员等级以及昨日累计投注金额进行一定比例的加奖；</p>
      <p>3、撤单和其他无效投注将不计算在内；</p>
      <p>4、活动奖金当天24点前未领取，视为自动放弃活动资格。</p>
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
        { vip: 3, wbj: '0.1%', sswj: "0.2%",  wswj: "0.2%"},
        { vip: 4, wbj: "0.2%", sswj: "0.3%",  wswj: "0.3%"},
        { vip: 5, wbj: "0.3%", sswj: "0.3%",  wswj: "0.3%"},
        { vip: 6, wbj: "0.4%", sswj: "0.4%",  wswj: "0.4%"},
        { vip: 7, wbj: "0.5%", sswj: "0.5%",  wswj: "0.5%"},
        { vip: 8, wbj: "0.6%", sswj: "0.6%",  wswj: "0.6%"},
        { vip: 9, wbj: "0.7%", sswj: "0.7%",  wswj: "0.7%"},
        {vip: 10, wbj: "0.8%", wswj: "0.8%",  wswj: "0.8%"}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sm {
  p {
    font-size: 18px;
    padding-left: 7px;
    margin: 7px 0;
    line-height: 30px;
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
    th{
      font-size: 16px;
    }
  }
}
</style>