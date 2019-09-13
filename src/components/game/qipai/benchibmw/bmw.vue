<template>
  <div class="bd">
    <div class="top">
      <div class="quit" @click="back"></div>
      <div class="his">
        <div class="kjnum"></div>
        <div class="zhuang"></div>
        <div class="touzhunum"></div>
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
      class="chiper"
      :style="{backgroundPosition:fill(item)}"
      v-for="(item,index) in chip"
      :key="index"
    ></div>
    <div class="f">
      <div class="chip">
        <div class="act act1">
          <div class="ch chip1"></div>
        </div>
        <div class="act act5">
          <div class="ch chip5"></div>
        </div>
        <div class="act act10">
          <div class="ch chip10"></div>
        </div>
        <div class="act act50">
          <div class="ch chip50"></div>
        </div>
        <div class="act act100">
          <div class="ch chip100"></div>
        </div>
        <div class="act act500">
          <div class="ch chip500"></div>
        </div>
        <div class="act act1000">
          <div class="ch chip1000"></div>
        </div>
        <div class="act act5000">
          <div class="ch chip5000"></div>
        </div>
        <div class="act act10000">
          <div class="ch chip10000"></div>
        </div>
      </div>
    </div>
    <div class="balance">
      <div class="reback"></div>
      <div class="bal"></div>
      <div class="ent"></div>
    </div>
    <audio src="https://images.imags-google.com/game/music/nn100/sound-bg.mp3" ref="bg"></audio>
    <audio
      src="https://images.imags-google.com/game/music/nn100/Effects/ChipInSound.mp3"
      ref="chip"
    ></audio>
    <audio src="/mp3/OpenPoker.mp3" class="puk"></audio>
  </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
export default {
  name: "BmwV",
  data() {
    return {
      puk: [
        { num: 14, type: "z", hua: 2 },
        { num: 14, type: "z", hua: 2 },
        { num: 14, type: "z", hua: 2 },
        { num: 14, type: "z", hua: 2 },
        { num: 14, type: "z", hua: 2 },
        { num: 14, type: "x1", hua: 2 },
        { num: 14, type: "x1", hua: 2 },
        { num: 14, type: "x1", hua: 2 },
        { num: 14, type: "x1", hua: 2 },
        { num: 14, type: "x1", hua: 2 },
        { num: 14, type: "x2", hua: 2 },
        { num: 14, type: "x2", hua: 2 },
        { num: 14, type: "x2", hua: 2 },
        { num: 14, type: "x2", hua: 2 },
        { num: 14, type: "x2", hua: 2 },
        { num: 14, type: "x3", hua: 2 },
        { num: 14, type: "x3", hua: 2 },
        { num: 14, type: "x3", hua: 2 },
        { num: 14, type: "x3", hua: 2 },
        { num: 14, type: "x3", hua: 2 }
      ],
      chip: [
        5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10, 5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5,
        5,
        1,
        100,
        10,
        20,
        10000,
        100,
        500,
        1,
        1,
        5
      ]
    };
  },
  methods: {
    pos(x, i) {
      switch (x) {
        case "z":
          return 0 + i * 10.5 + "px";
          break;
        case "x1":
          return 28 + i * 10.5 + "px";
          break;
        case "x2":
          return 56 + i * 10.5 + "px";
          break;
        case "x3":
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
    play() {
      let n = 0;
      let b = 0;
      for (let c = 0; c < this.$refs.pk.length; c++) {
        setTimeout(() => {
          $(".puk")[0].play();
          console.log($(".puk")[0]);
          if (c != 0 && c % 5 == 0) {
            n++;
            b = n * 28;
          }
          $(".pk")
            .eq(c)
            .animate(
              {
                top: "-20px",
                left: b + c * 10.5 + "px"
              }
            );
        }, c * 50);
      }
      for (let i = 0; i < this.chip.length; i++) {
        let r = _.random(0, 5);
        console.log(r);
        setTimeout(() => {
          this.$refs.chip.play();
          $(".chiper")
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
                    .position().top + 37
                )}px`
              },
              600
            );
        }, i * 70);
      }
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
        case 20:
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
  mounted() {
    this.play();

    console.log();
    this.$refs.bg.play();
    this.$refs.bg.loop = true;
  }
};
</script>

<style lang="scss" scoped>
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
  // border:1px solid red;
  position: absolute;
  top: -75px;
  left: 40%;
  height: 100px;
  width: 78px;
  transform: scale(0.45, 0.43);
  background: url(https://images.imags-google.com/game/puke.png);
}
.chiper {
  position: fixed;
  height: 100px;
  width: 100px;
  right: -36px;
  top: 112px;
  transform: scale(0.2);
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
  bottom: 25px;
  overflow: scroll;
  z-index: 10;
}
.chip {
  width: 640px;
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
  .chip1 {
    background-position: 0.7% 67.8%;
  }
  .chip5 {
    background-position: 23.6% 67.8%;
  }
  .chip10 {
    background-position: 46.7% 67.8%;
  }
  .chip50 {
    background-position: 69.7% 67.8%;
  }
  .chip100 {
    background-position: 92.8% 67.8%;
  }
  .chip500 {
    background-position: 0.5% 96.1%;
  }
  .chip1000 {
    background-position: 23.8% 96.1%;
  }
  .chip5000 {
    background-position: 46.8% 96.1%;
  }
  .chip10000 {
    background-position: 69.8% 96.1%;
  }
  .act {
    width: 15.6vw;
    margin: 0 1vw;
    height: 63px;
    float: left;
    position: relative;
    top: 6px;
    border: 1px dashed red;
    border-radius: 50%;
  }
  .act1 {
    background: #5bbd2e;
    filter: blur(0.1px);
  }
  .act5 {
    background: #2f6fb6;
  }
  .act10 {
    background: #5947a0;
  }
  .act50 {
    background: #df8306;
  }
  .act100 {
    background: #db397b;
  }
  .act500 {
    background: #ca424d;
  }
  .act1000 {
    background: #c64100;
  }
  .act5000 {
    background: #e61e2c;
  }
  .act10000 {
    background: #55555d;
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
      background-position: 40% 45.9%;
      background-size: 100vw auto;
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
  background-size: 100% 100%;

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