<template>
  <div ref="body" class="bd">
    <s-game @update="up" :gamelist="gamelist" @gl="gl"></s-game>
    <div class="kjdet">
      <div class="kjnum" @click="history">
        <div class="datenum">
          <span class>{{ playdate }}期</span>
          <span>开奖</span>
          <i class="iconfont icon-sanjiaoxing1" ref="zhishi"></i>
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
          <!-- <van-count-down @finish="log" :time="time" /> -->
          <div class="ds">
            <div class="van-button">
              <span v-show="show(ih)">{{w}}</span>
              {{ih}}&nbsp;:
              </div>
              <div class="van-button">
              <span v-show="show(im)">{{w}}</span>
              {{im}}&nbsp;:
              </div>
              <div class="van-button">
              <span v-show="show(ms)">{{w}}</span>
              {{ms}}
              </div>
          </div>
          <!-- ----------------------------------------------- -->
          <div class="zhezhao" v-show="dj">{{next}}期正在开奖中</div>
        </div>
      </div>
      <transition name="h">
        <div class="his" v-show="ac">
          <table border="2" cellspacing="0" width="100%">
            <tr>
              <th>期号</th>
              <th>开奖号码</th>
            </tr>
            <tr v-for="(item ,index) in hislist" :key="index">
              <td>{{item.playdate}}</td>
              <td>{{item.playnum}}</td>
            </tr>
          </table>
        </div>
      </transition>
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
      :dis="dis(dab)"
    ></j-suan>
  </div>
</template>

<script>
import TimeV from "../../time/timer";
import SGame from "./selgame/select";
import BaseLottor from "./base/pos/pos.vue";
import GD from "./danshi/danshi";
import JSuan from "./jiesuan/jiesuan";
import { clearInterval } from "timers";
import { log } from "util";
export default {
  name: "PkGame",

  mounted() {
    this.t = parseInt(this.$route.params.t);
    this.n = this.$route.params.n;
    this.$socket.emit(this.n, {
      username: JSON.parse(sessionStorage.getItem("userinfo")).name,
      name: this.$route.params.n,
      time: this.$route.params.t
    });
    this.sockets.subscribe(this.n, data => {
      if (this.$route.params.jh == 20) {
        this.ih = this.$route.params.jh - parseInt(new Date().getHours());
      }
      this.im = this.t - ((data.m % this.t) + 1);
      this.ms = 60 - data.s;
      this.ani();
      this.next = parseInt(data.msg.playdate) + 1;
      this.playdate = parseInt(data.msg.playdate);
      this.playnum = data.msg.playnum.split(",")
      this.dj = false;
      this.ds = true;
      this.dab = false;
      window.clearInterval(this.int);
      this.int = null;
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
    JSuan,
    TimeV
  },
  data() {
    return {
      ac: false,
      dab: false,
      im: 30,
      ih: 0,
      ms: 40,
      w: "0",
      tm: null,
      tp: "djs",
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
      dj: true,
      next: "",
      playdate: "",
      playnum: [],
      cl: "no",
      num: 10,
      cur: "BaseLottor",
      gamelist: null,
      namelist: null,
      dt: null, 
      name: "",
      hislist: []
    };
  },
  methods: {
    chac() {},
    history() {
      this.axios.get("/fhis?item=" + this.$route.params.n).then(x => {
        this.hislist = x.data.data;
      });
      this.ac = !this.ac;
      this.$refs.zhishi.style.transform = this.ac
        ? "rotate(0deg)"
        : "rotate(90deg)";
    },
    ani() {
      let djs = this.$route.params.djs || 30;
      this.tm = setInterval(() => {
        this.ms--;
        if (this.ih == 0 && this.im == 0 && this.ms < djs) {
          this.dab = true;
        }

        if (this.ms == 0) {
          if (this.ih > 0) {
            if (this.im > 0) {
              this.ms = 59;
              this.im--;
            } else if (this.im == 0) {
              this.ih--;
              this.ms = 59;
              this.im = 59;
            }
          } else if (this.ih == 0) {
            if (this.im > 0) {
              this.im--;
              this.ms = 59;
            } else if (this.im == 0) {
              this.im = 0;
              this.ms = 0;
              this.log();
              window.clearInterval(this.tm);
              this.tm = null;
            }
          }
        }
      }, 1000);
    },
    show(x) {
      if ((this.w + x).length >= 3) {
        return false;
      } else {
        return true;
      }
    },
    dis(x) {
      return x ? true : false;
    },
    animate() {
      this.dab = true;
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
    },
    gl() {
      this.gamelist = [[], [], [], [], [], []];
      this.cl = "cl";
    },
    up(x) {
      this.name = x;
      this.num = 10;

      if (x.includes("一")) {
        this.gamelist = [[], [], [], [], [], [], [], [], [], []];
        this.namelist = [
          "冠军",
          "亚军",
          "季军",
          "第四名",
          "第五名",
          "第六名",
          "第七名",
          "第八名",
          "第九名",
          "第十名"
        ];
      }
      if (x.includes("猜前五")) {
        this.gamelist = [[], [], [], [], []];
        this.namelist = ["冠军", "亚军", "季军", "第四名", "第五名"];
      }
      if (x.includes("猜前四")) {
        this.gamelist = [[], [], [], []];
        this.namelist = ["冠军", "亚军", "季军", "第四名"];
      }
      if (x.includes("猜前三")) {
        this.gamelist = [[], [], []];
        this.namelist = ["冠军", "亚军", "季军"];
      }
      if (x.includes("猜前二")) {
        this.gamelist = [[], []];
        this.namelist = ["冠军", "亚军"];
      }
      if (x.includes("猜冠军")) {
        this.gamelist = [[]];
        this.namelist = ["冠军"];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.h-enter,
.h-leave-to {
  transform: translateY(-550px);
  opacity: 0;
}
.h-enter-active,
.h-leave-active {
  transition: all 0.5s;
}
.icon-sanjiaoxing1 {
  transition: 0.5s;
  font-size: 20px;
  display: inline-block;
  transform: rotate(90deg);
  color: rgb(245, 9, 9);
}
.his {
  table {
    border: 2px solid white;
  }
  position: absolute;
  background-color: #2c3e50;
  z-index: 9999999;
  th,
  td {
    height: 50px;
    font-size: 22px;
    text-align: center;
    color: #ff976a;
  }
  top: 124px;
  left: 0;
  right: 0;
}
.ds {
  .van-button {
    font-size: 21px;
    font-weight: bold;
    text-shadow: 3px 4px 3px #000;
    height: 30px;
    color:whitesmoke;
    line-height: 30px;
    width: 33%;
    letter-spacing: 0px;
  }
}
.m {
  text-align: center;
  font-size: 15px;
}
.bd{
  background-color: #f5f1e4;
}
.zhezhao {
  position: absolute;
  height: 67px;
  background: #ff976a;

  width: 100%;
  font-size: 20px;
  text-align: center;
  letter-spacing: 5px;
  top: -35px;
  line-height: 170%;
  background-color: #e1d9ba;
}
.de {
  display: flex;
  justify-content: space-around;
  li {
    height: 31px;
    width: 31px;
    // border: 1px solid rgb(52, 112, 182);
    text-shadow: 2px 3px 2px black;
    text-align: center;
    line-height: 31px;
    // border-radius: 50%;
    color: rgb(215, 215, 0);
    font-size: 27px;
  }
}
.det {
  text-align: center;
  position: relative;
  .van-count-down {
    font-size: 20px;
    // line-height: 52px;
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
    font-size: 15px;
    text-align: center;
    line-height: 37px;
    color: black;
  }
  .datenum{
    font-size:18px;
  }
  margin-top: 8px;
  background-color: #e1d9ba;
  z-index: 9999999;
  width: 100%;
  height: 73px;
  display: flex;
  .djs,
  .kjnum {
    display: flex;
    flex-flow: column;
    div {
      flex: 1;
    }
  }
  .djs{
    flex: 1;
  }
  .kjnum{
    width: 60%;
  }
  .djs {
    border-left: 1px solid gray;
  }
}
</style>
