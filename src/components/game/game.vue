<template>
  <div>
    <s-game @update="up" :gamelist="gamelist" @gl="gl"></s-game>
    <div class="kjdet">
      <div class="kjnum">
        <div class="datenum">
          <span class>{{ playdate }}期</span>
          <span>开奖</span>
        </div>
        <ul class="de">
          <li v-for="(i, s) in playnum" :key="s">{{ i }}</li>
        </ul>
      </div>
      <div class="djs">
        <div class="datenum m">
          <span>{{ next }}</span>
          <span class="qi">期截止</span>
        </div>
        <div class="det">
          <van-count-down @finish="log" :time="time" />
          <div class="zhezhao" v-show="dj">正在开奖中</div>
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
    <j-suan
      :dt="dt"
      :playdate="playdate"
      :name="name"
      :gamelist="gamelist"
      :cl="cl"
      :playname="name"
      :playgame="n"
      :dis="ds"
    ></j-suan>
  </div>
</template>

<script>
import SGame from "./base/selgame/select";
import BaseLottor from "./base/pos/pos";
import GD from "./danshi/danshi";
import JSuan from "./jiesuan/jiesuan";
import { clearInterval } from "timers";
import { log } from "util";
export default {
  name: "WGame",
  mounted() {
    this.t = parseInt(this.$route.params.t);
    this.n = this.$route.params.n;
    // this.$nextTick(() => {
    this.$socket.emit(this.n, {
      username: JSON.parse(sessionStorage.getItem("userinfo")).name,
      name: this.$route.params.n,
      time: this.$route.params.t
    });
    this.sockets.subscribe(this.n, data => {
      this.time = ((this.t - (data.m % this.t)) * 60 - data.s) * 1000;
      this.next = parseInt(data.msg.playdate) + 1;
      this.playdate = parseInt(data.msg.playdate);
      this.playnum = data.msg.playnum;
      this.dj = false;
      this.ds = false;

      window.clearInterval(this.int);
      this.int = null;
      if (data.m < this.$route.params.jm % this.$route.params.t) {
        this.animate();
        this.dj = true;
        this.ds = "disabled";
      }
      // });
    });
  },
  watch: {
    t: function(x) {
      if (!x) {
        this.$router.push("/");
      }
    }
  },
  components: {
    BaseLottor,
    SGame,
    GD,
    JSuan
  },
  data() {
    return {
      ds: false,
      t: 5,
      n: "",
      dic: [
        "00000",
        "11111",
        "22222",
        "33333",
        "44444",
        "55555",
        "66666",
        "77777",
        "88888",
        "99999"
      ],
      q: 0,
      int: null,
      dj: false,
      next: "",
      playdate: "",
      playnum: "",
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
    animate() {
      this.int = setInterval(() => {
        this.q++;
        if (this.q % 10 == 0) {
          this.q = 0;
        }
        this.playnum = this.dic[this.q];
      }, 20);
      this.playdate += 1;
    },
    submi(x) {
      this.dt = x;
    },
    log() {
      this.dj = true;
      this.animate();
      this.$notify({
        message: this.playdate + "期投注时间已结束,再次投注请注意期数!",
        duration: 2000,
        background: "greenyellow"
      })
    },
    gl() {
      this.gamelist = [[], [], [], [], [], []];
      this.cl = "cl";
    },
    up(x) {
      this.name = x;
      this.num = 10;

      if (x.includes("一")) {
        console.log(this.n);

        if (this.$route.params.max == 3) {
          this.gamelist = [[], [], []];
          this.namelist = ["百位", "十位", "个位"];
          return;
        }
        this.gamelist = [[], [], [], [], []];
        this.namelist = ["万位", "千位", "百位", "十位", "个位"];
      }
      if (x.includes("前二")) {
        if (this.$route.params.max == 3) {
          this.gamelist = [[], []];
          this.namelist = ["百位", "十位"];
          return;
        }
        this.gamelist = [[], []];
        this.namelist = ["万位", "千位"];
      }
      if (x.includes("后二")) {
        if (this.$route.params.max == 3) {
          this.gamelist = [[], []];
          this.namelist = ["十位", "个位"];
          return;
        }
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
.m {
  text-align: center;
}
.zhezhao {
  position: absolute;
  height: 85%;
  width: 100%;
  font-size: 30px;
  text-align: center;
  letter-spacing: 5px;
  top: 0;
  line-height: 170%;
  background-color: #e1d9ba;
}
.de {
  display: flex;
  justify-content: space-around;
  li {
    height: 32px;
    width: 32px;
    border: 1px solid rgb(250, 51, 1);
    text-align: center;
    line-height: 32px;
    border-radius: 50%;
    color: red;
    font-size: 28px;
  }
}
.det {
  text-align: center;
  position: relative;
  .van-count-down {
    font-size: 29px;
    line-height: 52px;
    transform: translateX(18%);
  }
}
.van-count-down {
  text-align: center;
  display: flex;
}
.kjdet {
  .datenum,
  .kjnum {
    font-size: 20px;
    text-align: center;
    color: black;
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
