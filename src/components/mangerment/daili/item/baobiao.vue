<template>
  <div>
    <t-header :l="true" :t="'代 理 报 表'"></t-header>
    <!-- <van-search placeholder="" v-model="value" /> -->
    <van-search
      v-model="value"
      placeholder="输入用户名查看单个用户报表"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="ykcont">
      <ul>
        <li>
          <p class="tzcont">{{ tzcont }}&nbsp;元</p>
          <p class="det">团队投注金额</p>
        </li>
        <li>
          <p class="tzcont">{{ zjcont }}&nbsp;元</p>
          <p class="det">团队中奖金额</p>
        </li>
        <li>
          <p class="tzcont">{{ txcont }}&nbsp;元</p>
          <p class="det">团队提现总计</p>
        </li>
        <li>
          <p class="tzcont">{{ fdcont }}&nbsp;元</p>
          <p class="det">团队返点总计</p>
        </li>
        <li>
          <p class="tzcont">{{ ylcont }}&nbsp;元</p>
          <p class="det">团队盈利总计</p>
        </li>
        <li>
          <p class="tzcont">{{ dlcont }}&nbsp;元</p>
          <p class="det">代理返点总计</p>
        </li>
        <li>
          <p class="tzcont">{{ tdcont }}&nbsp;元</p>
          <p class="det">团队余额统计</p>
        </li>
        <li>
          <p class="tzcont">{{ xjcont }}&nbsp;人</p>
          <p class="det">当前下级人数</p>
        </li>
        <li>
          <p class="tzcont">{{ hbcont }}&nbsp;元</p>
          <p class="det">团队红包总额</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import THeader from "../../../home/cps/header/header";
import { Search } from "vant";
export default {
  name: "BaoBiao",
  components: {
    THeader,
    [Search.name]: Search
  },
  mounted() {
    this.axios
      .post("/findxiaji", {
        name: JSON.parse(sessionStorage.getItem("userinfo")).name
      })
      .then(x => {
        console.log(x.data);
        this.tzcont = (x.data.tz - 0).toFixed(2);
        this.zjcont = (x.data.jj - 0).toFixed(2);
        this.tdcont = (x.data.sum - 0).toFixed(2);
        this.txcont = (x.data.tx - 0).toFixed(2);
        this.xjcont = (x.data.pl - 0).toFixed(2);
        this.dlcont = (x.data.tz * 0.02 - 0).toFixed(2);
      });
  },
  data() {
    return {
      value: "",
      tzcont: "0.00",
      zjcont: "0.00",
      txcont: "0.00",
      tdcont: "0.00",
      ylcont: "0.00",
      dlcont: "0.00",
      fdcont: "0.00",
      xjcont: "0",
      hbcont: "0.00"
    };
  },
  methods: {
    onSearch(x) {
      console.log(this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.ykcont {
  ul {
    li {
      width: 33%;
      height: 120px;
      float: left;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      p {
        line-height: 30px;
        text-align: center;
      }
      .tzcont {
        color: #ff6818;
        font-size: 20px;
        font-weight: bold;
      }
      .det {
        font-weight: 700;
      }
    }
  }
}
</style>
