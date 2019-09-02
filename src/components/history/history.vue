<template>
  <div>
    <t-header class="theader" :l="true" :t="'历史投注记录'"></t-header>
    <div class="cont">
      <table border="1" cellspacing="0" width="100%">
        <tr>
          <th>名称</th>
          <th>玩法</th>
          <th>期号</th>
          <th>模式</th>
          <th>倍数</th>
          <th>金额</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.playgame|nm}}</td>
          <td>{{item.playname}}</td>
          <td>{{item.playdate}}</td>
          <td colspan="3">
            <van-button type="info" @click="showPopup(index)">详情</van-button>
          </td>
        </tr>
      </table>
    </div>
    <van-popup v-model="show">
      <div class="pop">
        <table border="2" cellspacing="0" width="350px">
          <tr>
            <th>模式</th>
            <th>倍数</th>
            <th>金额</th>
            <th>号码</th>
          </tr>
          <tr>
            <td>{{im.playmode}}</td>
            <td>{{im.playratel}}</td>
            <td>{{im.price}}</td>
            <td>{{im.userinput}}</td>
          </tr>
        </table>
      </div>
    </van-popup>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
import { Switch } from "vant";
export default {
  name: "HistoryPage",
  components: {
    THeader
  },
  data() {
    return {
      list: null,
      show: false,
      im:{}
    };
  },
  mounted() {
      this.axios
      .post("/history", {
          username: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
          this.list = x.data;
      this.im=this.list[0]
        console.log(this.list);
      });
  },
  methods: {
    showPopup(x) {
      this.show = true;
      this.im=this.list[x]
    }
  },
  filters: {
    nm(x) {
      switch (x) {
        case "gassc":
          return "港澳时时彩";
          break;
        case "xjssc":
          return "新疆时时彩";
          break;
        case "cqssc":
          return "重庆时时彩";
          break;
        case "tjssc":
          return "天津时时彩";
          break;
        case "fc3d":
          return "福彩3D";
          break;
        case "tcpl5":
          return "体彩排列三/五";
          break;
        case "ynssc":
          return "云南时时彩";
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pop{
    th{
     height: 40px;   
     font-size: 23px;
     font-weight: bold;
    }
    td{
        height: 32px;

    }
}
.van-button {
  height: 28px;
  line-height: 30px;
}
.cont {
  th {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  td {
    text-align: center;
    height: 30px;
  }
}
.theder {
  background-color: rebeccapurple;
}
</style>