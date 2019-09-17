<template>
  <div class="bd">
    <div class="top">
      <div class="quit" @click="back"></div>
      <div class="his">
        <div class="kjnum">{{playdate}}</div>
        <div class="zhuang"></div>
        <div class="touzhunum">
          {{type}}
          <div class="djs">{{m}}</div>
        </div>
      </div>
      <div class="playmethod">
        <div class="by"></div>
      </div>
    </div>
    <div class="play">
      <div class="playz">
        <div class="z"></div>
        <div class="x1">
          <div class="x"></div>
          <div class="xz"></div>
        </div>
        <div class="x2">
          <div class="x"></div>
          <div class="xz"></div>
        </div>
        <div class="x3">
          <div class="x"></div>
          <div class="xz"></div>
        </div>
      </div>
      <ul>
        <li
          class="pk"
          ref="pk"
          :style="{backgroundPosition:pk(item.hua,item.num)}"
          v-for="(item,index) in puk"
          :key="index"
        ></li>
      </ul>
    </div>
    <div class="playcont">
      <div class="jia">
        <div class="item">
          <div class="zhushu">0</div>
          <div class="det">
            <p>庄</p>
            <p>x</p>
            <p>1.970</p>
          </div>
          <div class="self">0</div>
        </div>
        <div class="vs"></div>
        <div class="item">
          <div class="zhushu">0</div>
          <div class="det">
            <p>闲1</p>
            <p>x</p>
            <p>1.970</p>
          </div>
          <div class="self">0</div>
        </div>
        <div class="item">
          <div class="zhushu">0</div>
          <div class="det">
            <p>庄</p>
            <p>x</p>
            <p>1.970</p>
          </div>
          <div class="self">0</div>
        </div>
        <div class="vs"></div>
        <div class="item">
          <div class="zhushu">0</div>
          <div class="det">
            <p>闲2</p>
            <p>x</p>
            <p>1.970</p>
          </div>
          <div class="self">0</div>
        </div>
        <!-- <div class="vs"></div> -->
        <div class="item">
          <div class="zhushu">0</div>
          <div class="det">
            <p>庄</p>
            <p>x</p>
            <p>1.970</p>
          </div>
          <div class="self">0</div>
        </div>
        <div class="vs"></div>
        <div class="item">
          <div class="zhushu">0</div>
          <div class="det">
            <p>闲3</p>
            <p>x</p>
            <p>1.970</p>
          </div>
          <div class="self">0</div>
        </div>
      </div>
    </div>
    <div class="per">
      <span>(0)</span>
    </div>
    <div
      class="chiperl"
      :style="{backgroundPosition:fill(item)}"
      v-for="(item,index) in chip"
      :key="index"
    ></div>
    <div class="f">
      <div class="chip">
        <div
          class="chiper"
          :style="{backgroundPosition:fill(item)}"
          v-for="(item,index) in chiplist"
          :key="index"
        ></div>
      </div>
    </div>
    <div class="balance">
      <div class="reback"></div>
      <div class="bal"></div>
      <div class="ent"></div>
    </div>
    <transition name="log">
      <div class="dailog" v-show="ts">
        <div class="tishi">{{str}}</div>
      </div>
    </transition>
    <audio src="https://images.imags-google.com/game/music/nn100/sound-bg.mp3" ref="bg"></audio>
    <audio
      src="https://images.imags-google.com/game/music/nn100/Effects/ChipInSound.mp3"
      ref="chip"
    ></audio>
    <audio src="/mp3/OpenPoker.mp3" class="puk"></audio>
    <audio src="/mp3/CountDown.mp3" class="jsk"></audio>
    <audio src="/mp3/StartBet.mp3" class="sxz"></audio>
    <audio src="/mp3/StopBet.mp3" class="stop"></audio>
    <audio src="/mp3/closeCard.mp3" class="clo"></audio>
    <audio src="/mp3/OpenPoker.mp3" class="shou"></audio>
  </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
export default {
  name: "BmwV",
  data() {
    return {
      type: "",
      playdate: null,
      puk: [],
      puk1: [
        { num: 14, type: 0, hua: 2 },
        { num: 14, type: 0, hua: 2 },
        { num: 14, type: 0, hua: 2 },
        { num: 14, type: 0, hua: 2 },
        { num: 14, type: 0, hua: 2 },
        { num: 14, type: 1, hua: 2 },
        { num: 14, type: 1, hua: 2 },
        { num: 14, type: 1, hua: 2 },
        { num: 14, type: 1, hua: 2 },
        { num: 14, type: 1, hua: 2 },
        { num: 14, type: 2, hua: 2 },
        { num: 14, type: 2, hua: 2 },
        { num: 14, type: 2, hua: 2 },
        { num: 14, type: 2, hua: 2 },
        { num: 14, type: 2, hua: 2 },
        { num: 14, type: 3, hua: 2 },
        { num: 14, type: 3, hua: 2 },
        { num: 14, type: 3, hua: 2 },
        { num: 14, type: 3, hua: 2 },
        { num: 14, type: 3, hua: 2 }
      ],
      puk2: null,
      chiplist: [1, 5, 10, 50, 100, 500, 1000, 5000, 10000],
      chip: [
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        5,
        1,
        5,
        10,
        1000,
        5000,
        10000,
        1,
        5
      ],
      t: 15,
      time: null,
      ts: false,
      str: 3,
      m: 30
    };
  },
  methods: {
    shoupai() {
      console.log("shoupai");

      let n = 0;
      let b = 0;
      for (let c = 0; c < this.$refs.pk.length; c++) {
        this.puk = this.puk1;
        setTimeout(() => {
          $(".pk")
            .eq(c)
            .css({
              transform:
                "scale(0.45,0.43) rotateX(90deg) rotateY(0deg) translateZ(0px)"
            })
            .animate({
              top: "-75px",
              left: "40%"
            });
          $(".clo")[0].play();
        }, c * 80);
      }
    },
    shouzhu() {
      console.log("shouzhu");

      for (let i = 0; i < this.chip.length; i++) {
        let r = _.random(0, 5);
        setTimeout(() => {
          this.$refs.chip.play();
          $(".chiperl")
            .eq(i)
            .animate(
              {
                left: `${$(".per")
                  .eq(0)
                  .position().left - 30}px`,
                top: `${$(".per")
                  .eq(0)
                  .position().top - 30}px`
              },
              600
            );
        }, i * 70);
      }
    },
    get() {
      return new Promise(function(resolve, reject) {
        this.$socket.emit("niuniu2", {
          username: JSON.parse(sessionStorage.getItem("userinfo")).name,
          name: this.$route.params.n,
          time: this.$route.params.t
        });
        this.sockets.subscribe("niuniu2", data => {
          // 2.初始时间
          // this.t = 15 - (data.s % 15);
          // this.m = 30 - (data.s % 30);
          // 2.1初始开奖数据----
          this.playdate = parseInt(data.msg.playdate) + 1;
        });
      });
    },
    liangpai() {
      console.log("liangpai");
      
      for (let p = 0; p < this.$refs.pk.length; p++) {
        $(".pk")
          .eq(p)
          .css({
            transform:
              "scale(0.45,0.43) rotateX(0deg) rotateY(90deg) translateZ(0px)"
          });
        this.puk = this.puk2;

        setTimeout(() => {
          $(".pk")
            .eq(p)
            .css({
              transform:
                "scale(0.45,0.43) rotateX(0deg) rotateY(0deg) translateZ(0px)"
            });
        }, 500);
      }
    },
    pos(x, i) {
      switch (x) {
        case 0:
          return 0 + i * 10.5 + "px";
          break;
        case 1:
          return 28 + i * 10.5 + "px";
          break;
        case 2:
          return 56 + i * 10.5 + "px";
          break;
        case 3:
          return 87 + i * 10.5 + "px";
          break;
      }
    },
    pk(x, y) {
      if (y <= 7) {
        return `${x * -84.2}px ${(y - 1) * -111.5}px`;
      } else {
        y %= 7;

        return `${x * -84 - 356}px ${(y - 1) * -111.5}px`;
      }
    },
    back() {
      this.$router.go(-1);
    },
    fapai() {
      console.log("fapai");

      let n = 0;
      let b = 0;
      for (let c = 0; c < this.$refs.pk.length; c++) {
        setTimeout(() => {
          if (c != 0 && c % 5 == 0) {
            n++;
            b = n * 28;
          }
          $(".pk")
            .eq(c)
            .css({
              transform:
                "scale(0.45,0.43) rotateX(0deg) rotateY(0deg) translateZ(0px)"
            })
            .animate({
              top: "-20px",
              left: b + c * 10.5 + "px"
            });
          $(".puk")[0].play();
        }, c * 40);
      }
      for (let i = 0; i < this.chip.length; i++) {
        let r = _.random(0, 5);
        setTimeout(() => {
          this.$refs.chip.play();
          $(".chiperl")
            .eq(i)
            .animate(
              {
                left: `${_.random(
                  $(".item")
                    .eq(r)
                    .position().left - 40,
                  $(".item")
                    .eq(r)
                    .position().left + 40
                )}px`,
                top: `${_.random(
                  $(".item")
                    .eq(r)
                    .position().top + 17,
                  $(".item")
                    .eq(r)
                    .position().top + 27
                )}px`
              },
              600
            );
        }, i * 70);
      }
    },
    kaijiang() {
      let n = 0;
      let b = 0;
      for (let c = 0; c < this.$refs.pk.length; c++) {
        if (c != 0 && c % 5 == 0) {
          n++;
          b = n * 28;
        }
        $(".pk")
          .eq(c)
          .css({
            // top:"-20px",
            transform:
              "scale(0.45,0.43) rotateX(0deg) rotateY(0deg) translateZ(0px)",
            top: "-20px",
            left: b + c * 10.5 + "px"
          });
      }
    },
    xiazhu() {
      let n = 0;
      let b = 0;
      for (let c = 0; c < this.$refs.pk.length; c++) {
        if (c != 0 && c % 5 == 0) {
          n++;
          b = n * 28;
        }
        $(".pk")
          .eq(c)
          .css({
            // top:"-20px",
            transform:
              "scale(0.45,0.43) rotateX(0deg) rotateY(0deg) translateZ(0px)",
            top: "-20px",
            left: b + c * 10.5 + "px"
          });
      }
    },
    getnn() {},
    //1.获取时间
    gettime() {
      this.$socket.emit("niuniu", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name,
        name: this.$route.params.n,
        time: this.$route.params.t
      });
      this.sockets.subscribe("niuniu", data => {
        //2.初始时间
        this.t = 15 - (data.s % 15);
        this.m = 30 - (data.s % 30);
        //2.1初始开奖数据----
        this.playdate = parseInt(data.msg.playdate);
        //2.2初始化状态
        if (this.m > 15) {
          console.log("下注中");
          this.type = "下注时间";
          this.puk = this.puk1;
          this.xiazhu();
        } else {
          console.log("开奖中");
          this.type = "下注时间";
          this.puk2 = JSON.parse(data.msg.playnum);
          this.kaijiang();
        }
      });
    },
    fill(x) {
      switch (x) {
        case 1:
          return "2.5% 65.8%";
          break;
        case 5:
          return "24.7% 65.8%";
          break;
        case 10:
          return "47.2% 65.8%";
          break;
        case 50:
          return "69.7% 65.8%";
          break;
        case 100:
          return "92.2% 65.8%";
          break;
        case 500:
          return "2.5% 92.1%";
          break;
        case 1000:
          return "25% 92.1%";
          break;
        case 5000:
          return "47.5% 92.1%";
          break;
        case 10000:
          return "70% 92.1%";
          break;

        default:
          break;
      }
    }
  },
  beforeDestroy() {
    window.clearInterval(this.time);
    this.time = null;
  },
  mounted() {
    this.puk = this.puk1;
    this.getnn();
    //背景音乐播放
    this.$refs.bg.play();
    this.$refs.bg.loop = true;
    this.gettime(); //1.2.
    //3.设定计时
    this.time = setInterval(() => {
      this.t--;
      this.m--;
      if (this.m % 15 == 0 && this.m != 15) {
        this.fapai();
        setTimeout(() => {
          $(".sxz")[0].play();
          this.str = "开始下注";
          this.ts = true;
        }, 1000);
      } else {
        this.str = null;
        this.ts = false;
      }
      if (this.m == 19) {
        this.str = 3;
        this.ts = true;
        $(".jsk")[0].play();
      }
      if (this.m == 18) {
        this.str = 2;
        this.ts = true;
        $(".jsk")[0].play();
      }
      if (this.m == 17) {
        this.str = 1;
        this.ts = true;
        $(".jsk")[0].play();
        setTimeout(() => {
          this.ts = true;
          this.str = "停止下注";
          $(".stop")[0].play();
          setTimeout(() => {
            for (let v = 0; v < 20; v++) {
              $(".shou")[0].play();
            }
          }, 1500);
        }, 1000);
      }
      if (this.t <= 0) {
        this.t = 15;
      }
      if (this.m == 3) {
        this.shoupai();
        this.shouzhu();
      }
      if (this.m == 15) {
        this.$socket.emit("niuniu2", {
          username: JSON.parse(sessionStorage.getItem("userinfo")).name,
          name: this.$route.params.n,
          time: this.$route.params.t
        });
        this.sockets.subscribe("niuniu2", data => {
          // 2.初始时间
          // this.t = 15 - (data.s % 15);
          // this.m = 30 - (data.s % 30);
          // 2.1初始开奖数据----
          this.puk2=data.msg.playnum
          this.playdate = parseInt(data.msg.playdate) + 1;
        });
        this.liangpai();
        
      } else if (this.m == 14) {
        this.ts = false;
      }
      if (this.m == 0) {
        this.m = 30;
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.log-enter,
.log-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
.log-enter-active,
.log-leave-active {
  transition: all 0.3s;
}
.dailog {
  // transform: scale(1);
  position: relative;
  .tishi {
    height: 100px;
    width: 100%;
    // border: 1px solid red;
    text-shadow: 4px 14px 4px black;
    z-index: 99;
    font-size: 50px;
    font-family: "宋体";
    font-weight: bolder;
    text-align: center;
    line-height: 100px;
    color: gold;
  }
  margin: 0 auto;
  height: 100px;
  width: 100%;
  z-index: 17;
  top: 120px;
}
.z,
.x1 {
  position: relative;
  left: 10px;
}
.z {
  left: 13px;
}
.x1 {
  left: 15px;
}
.pk {
  position: absolute;
  top: -75px;
  left: 40%;
  transition: all 0.5s;
  height: 100px;
  width: 78px;
  transform: scale(0.35, 0.33) rotateX(90deg) translateZ(-100px);
  background: url(https://images.imags-google.com/game/puke.png);
}
.chiperl {
  position: fixed;
  height: 100px;
  width: 100px;
  right: -36px;
  top: 112px;
  transform: scale(0.2);
  z-index: 13;
  background: url(https://images.imags-google.com/game/chipIcon.png);
}
.chiper {
  // position: fixed;
  height: 100px;
  width: 100px;
  // right: -36px;
  // top: 112px;
  transform: scale(0.8);
  z-index: 13;
  background: url(https://images.imags-google.com/game/chipIcon.png);
}
.balance {
  display: flex;
  justify-content: space-between;
  height: 36px;
  border: 1px solid gray;
  z-index: 8;
  position: absolute;
  bottom: -7px;
  width: 100%;
  background: url(https://images.imags-google.com/game/nnicon.png?1);
  background-size: 100vw auto;
  .reback {
    width: 103px;
    height: 33px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 103% 34.5%;
  }
  .ent {
    width: 103px;
    height: 33px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 116% 38.5%;
  }
  .bal {
    // flex:1;
    width: 112px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 59% 8.2%;
  }
}
.f {
  width: 100vw;
  height: 78px;
  position: absolute;
  bottom: 32px;
  overflow: scroll;
  z-index: 10;
}
.chip {
  display: flex;
  width: 900px;
  .ch {
    margin: 0 auto;
    position: relative;
    top: 3px;
    width: 15.6vw;
    height: 64px;
    background: url(https://images.imags-google.com/game/chipIcon.png);
    background-position: 46.8% 96.1%;
    background-size: 100vw auto;
  }
}
.per {
  span {
    position: relative;
    top: 60px;
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  position: fixed;
  height: 60px;
  top: 134px;
  transform: scale(0.5);
  width: 59px;
  z-index: 12;
  // right: 50px;
  right: -13px;
  background: url(https://images.imags-google.com/game/nnicon.png?1);
  background-position: 97% 75%;
}
.top {
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: rgba($color: #000000, $alpha: 0.3);
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  // * {
  //   border: 1px solid red;
  // }
  .quit {
    background: url("https://images.imags-google.com/game/nnicon.png?1");
    background-position: 16.5% 35.5%;
    // background-size: 100% auto;
    margin-left: 5px;
  }
  .his {
    width: 295px;
    height: 33px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .kjnum {
      line-height: 35px;
      text-align: right;
      color: white;
      font-weight: bold;
      font-size: 20px;
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 0% 45.9%;
      background-size: 100vw auto;
    }
    .kjnum,
    .touzhunum {
      width: 106px;
      height: 32px;
    }
    .touzhunum {
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 41% 45.9%;
      background-size: 100vw auto;
      font-size: 15px;
      color: white;
      font-weight: bold;
      .djs {
        float: right;
        width: 32px;
        text-align: center;
        position: relative;
        right: 4px;
      }
      line-height: 32px;
    }
    .zhuang {
      width: 45px;
      height: 35px;
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 66.1% 34.4%;
      background-size: 100vw auto;
    }
  }

  .playmethod,
  .quit,
  .by {
    height: 37.5px;
    width: 37.5px;
  }
  .playmethod {
    background: url("https://images.imags-google.com/game/nnicon.png?1");
    background-position: 1.7% 35.1%;
    background-size: 100vw auto;
    .by {
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 26.7% 35.2%;
      background-size: 100vw auto;
    }
  }
}
.bd {
  overflow: scroll;
  background: url(https://images.imags-google.com/game/nn100bg.jpg);
  position: absolute;
  bottom: 0;
  z-index: 999999999;
  top: 0;
  left: 0;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
.play {
  height: 103px;
  margin: 7px;
  position: relative;
  z-index: 9;
  .playz {
    display: flex;
    justify-content: space-around;
    ul {
      transform-style: preserve-3d;
      perspective: 1500px;
    }
  }
  .z,
  .x,
  .xz {
    width: 26px;
    height: 24px;
    // border: 1px solid red;
  }
  .z {
    background: url(https://images.imags-google.com/game/nnicon.png?1) no-repeat;
    background-position: 66% 12.6%;
    background-size: 100vw auto;
  }
  .x1 {
    .xz {
      background: url(https://images.imags-google.com/game/nnicon.png?1)
        no-repeat;
      background-size: 100vw auto;
      background-position: 83% 12.6%;
    }
  }
  .x2 {
    .xz {
      background: url(https://images.imags-google.com/game/nnicon.png?1)
        no-repeat;
      background-size: 100vw auto;
      background-position: 90% 12.6%;
    }
  }
  .x3 {
    .xz {
      background: url(https://images.imags-google.com/game/nnicon.png?1)
        no-repeat;
      background-size: 100vw auto;
      background-position: 98.5% 12.6%;
    }
  }
  .x1,
  .x2,
  .x3 {
    display: flex;
  }
  .x {
    background: url(https://images.imags-google.com/game/nnicon.png?1) no-repeat;
    background-position: 74.5% 12.6%;
    background-size: 100vw auto;
  }
  ul {
    position: relative;
  }
}
.playcont {
  background: url(https://images.imags-google.com/game/nn100bg2.png);
  position: absolute;
  top: 30px;
  bottom: 0;
  width: 100%;
  z-index: 1;
  .jia {
    display: flex;
    flex-flow: wrap;
    justify-content: center;

    padding: 0 20px;
    padding-top: 41.5%;
    .vs {
      width: 16%;
      background: url(https://images.imags-google.com/game/nnicon.png?1);
      height: 17vw;
      background-position: 24% 40%;
    }
    .item {
      display: flex;
      flex-flow: column;
      align-items: space-around;
      width: 30%;
      height: 83px;

      border-radius: 9px;
      margin: 15px 5px 0 5px;
      background-color: rgba($color: #000000, $alpha: 0.2);
      .det {
        position: relative;
        text-align: center;
        flex: 1;
        font-size: 12px;
        color: #ccc;
        p {
          line-height: 16px;
        }
      }
      .zhushu {
        color: #f9c970;
        text-align: center;
        height: 16px;
        font-size: 13px;
      }
      .self {
        background-color: rgba($color: #000000, $alpha: 0.4);
        color: #f9c970;
        text-align: center;
        height: 16px;
        line-height: 16px;
      }
    }
  }
}
</style>