<template>
  <div>
    <s-game @update="up" :gamelist="gamelist" @gl="gl"></s-game>
    <div class="kjdet">
      <div class="kjnum">
        <div class="datenum">
          <span></span>
          <span>开奖结果</span>
        </div>
        <div class="de"></div>
      </div>
      <div class="djs">
        <div class="datenum">
          <span></span>
          <span>投注截止</span>
        </div>
        <div class="det">
          <van-count-down :time="time" />
        </div>
      </div>
    </div>

    <component
      :name="name"
      @submi="submi"
      :is="cur"
      :num="num"
      :namelist="namelist"
      :gamelist="gamelist"
    ></component>
    <j-suan :dt="dt" :name="name" :cl="cl"></j-suan>
  </div>
</template>

<script>
import SGame from "./base/selgame/select";
import BaseLottor from "./base/pos/pos";
import GD from "./danshi/danshi";
import JSuan from "./jiesuan/jiesuan";
export default {
  name: "WGame",
  
  components: {
    BaseLottor,
    SGame,
    GD,
    JSuan
  },
  data() {
    return {
      time: 1000 * 60,
      cl: "no",
      num: 10,
      cur: "BaseLottor",
      gamelist: null,
      namelist: null,
      dt: null,
      name: ""
    };
  },
  methods: {
    submi(x) {
      this.dt = x;
    },
    gl() {
      this.gamelist = [[], [], [], [], [], []];
      this.cl = "cl";
    },
    up(x) {
      this.name = x;
      this.num = 10;

      if (x.includes("一")) {
        this.gamelist = [[], [], [], [], []];
        this.namelist = ["万位", "千位", "百位", "十位", "个位"];
      }
      if (x.includes("前二")) {
        this.gamelist = [[], []];
        this.namelist = ["万位", "千位"];
      }
      if (x.includes("后二")) {
        this.gamelist = [[], []];
        this.namelist = ["十位", "个位"];
      }
      if (x.includes("前三")) {
        this.gamelist = [[], [], []];
        this.namelist = ["万位", "千位", "百位"];
      }
      if (x.includes("中三")) {
        this.gamelist = [[], [], []];
        this.namelist = ["千位", "百位", "十位"];
      }
      if (x.includes("后三")) {
        this.gamelist = [[], [], []];
        this.namelist = ["百位", "十位", "个位"];
      }
      if (x.includes("五")) {
        this.gamelist = [[], [], [], [], []];
        this.namelist = ["万位", "千位", "百位", "十位", "个位"];
      }
      if (x.includes("四")) {
        this.gamelist = [[], [], [], []];
        this.namelist = ["千位", "百位", "十位", "个位"];
      }
      if (x.includes("组选")) {
        this.gamelist = [[]];
        this.namelist = ["组选"];
      }
      if (x.includes("跨度")) {
        this.gamelist = [[]];
        this.namelist = ["跨度"];
      }
      if (x.includes("和值") && x.includes("三")) {
        this.gamelist = [[]];
        this.namelist = ["和值"];
        this.num = 28;
      }
      if (x.includes("和值") && x.includes("二")) {
        this.gamelist = [[]];
        this.namelist = ["和值"];
        this.num = 19;
      }
      if (x.includes("不定位")) {
        this.gamelist = [[]];
        this.namelist = ["不定位"];
      }
      if (x.includes("不定位")) {
        this.gamelist = [[]];
        this.namelist = ["不定位"];
      }
      if (x.includes("单式")) {
        this.gamelist = [];
        this.namelist = [];
        this.cur = "GD";
      } else {
        this.cur = "BaseLottor";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.det {
  text-align: center;
  .van-count-down {
    text-align: center;
    font-size: 25px;
  }
}
.van-count-down {
  text-align: center;
  display: flex;
}
.kjdet {
  .datenum,
  .kjnum {
    font-size: 25px;
    color: #9b9b9b;
  }
  margin-top: 8px;
  background-color: #e1d9ba;
  z-index: 9999999;
  width: 100%;
  height: 70px;
  display: flex;
  .djs,
  .kjnum {
    flex: 1;
    display: flex;
    flex-flow: column;
    div {
      flex: 1;
    }
  }
  .djs {
    border-left: 1px solid gray;
  }
}
</style>
