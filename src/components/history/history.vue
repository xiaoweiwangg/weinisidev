<template>
  <div>
    <t-header class="theader" :l="true" :t="'历史投注记录'"></t-header>
    <div class="cont">
      <table border="1" cellspacing="0" width="100%">
        <tr>
          <th>名称</th>
          <th>玩法</th>
          <th>期号</th>
          <th>是否中奖</th>
          <th>倍数</th>
          <th>金额</th>
        </tr>
        <tr v-for="(item, index) in currlist" :key="index">
          <td>{{ item.playgame | nm }}</td>
          <td>{{ item.playname }}</td>
          <td>{{ item.playdate }}</td>
          <td>{{ item.iszk | zj }}</td>
          <td colspan="2">
            <van-button type="info" @click="showPopup(index)">详情</van-button>
          </td>
        </tr>
      </table>

      <van-pagination
        @change="ch(currentPage)"
        v-model="currentPage"
        :total-items="length"
        :show-page-size="5"
        force-ellipses
      />
    </div>
    <van-popup v-model="show">
      <div class="pop">
        <table border="2" cellspacing="0" width="350px">
          <tr>
            <th>模式</th>
            <th>倍数</th>
            <th>金额</th>
            <th>开奖号码</th>
          </tr>
          <tr>
            <td>{{ im.playmode | md }}</td>
            <td>{{ im.playratel }}倍</td>
            <td>{{ im.price }}元</td>
            <td>{{ im.kjnum }}</td>
          </tr>
        </table>

        <div class="pp">
          <p>购买详情</p>
          {{ im.buydet | det }}
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Pagination } from "vant";
import THeader from "../home/cps/header/header";
import { Switch } from "vant";
export default {
  name: "HistoryPage",
  components: {
    THeader,
    [Pagination.name]: Pagination
  },
  data() {
    return {
      currlist: [],
      currentPage: 1,
      list: null,
      show: false,
      im: {},
      length: 0
    };
  },
  mounted() {
    this.axios
      .post("/history", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        let arr = [];
        this.list = Array.from(x.data).reverse();
        this.currlist = this.page(this.currentPage);
        this.length = this.list.length;
        this.im = this.list[0];
      });
  },
  methods: {
    page(x) {
      return this.list.slice((x - 1) * 12, x * 12);
    },
    ch(x) {
      this.currlist = this.page(x);
    },
    showPopup(x) {
      this.show = true;
      this.im = this.list[x];
    }
  },
  filters: {
    det(x) {
      if (x) {
        return JSON.parse(x).data;
      }
    },
    zj(x) {
      if (!x) {
        return "未中奖";
      } else {
        return x;
      }
    },
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
        case "txffc":
          return "腾讯分分彩";
          break;
        case "bjkcssc":
          return "北京赛车pk10";
          break;
        case "wnspk10":
          return "威尼斯pk10";
          break;
        case "niuniu":
          return "牛牛竞猜";
          break;
        case "rbwar":
          return "红黑大战";
          break;
      }
    },
    md(x) {
      switch (x) {
        case 1:
          return "元模式";
          break;
        case 0.1:
          return "角模式";
          break;
        case 0.01:
          return "分模式";
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pp {
  width: 350px;
  overflow: scroll;
  p {
    font-size: 23px;
    font-weight: bolder;
    border-bottom: 2px dashed #1a2a3a;
    margin: 7px 0px;
    padding: 7px;
    color: #1a2a3a;
  }
}
.td {
  overflow: auto;
}
.pop {
  padding: 10px;
  th {
    height: 40px;
    font-size: 23px;
    text-align: center;
    font-weight: bold;
  }
  td {
    text-align: center;
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
