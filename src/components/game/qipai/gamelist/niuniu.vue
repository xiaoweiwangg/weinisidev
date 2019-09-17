<template>
  <div class="niuniu">
    <div class="ad" v-show="isload">
      <p>{{per}}%</p>
    </div>
    <header-top></header-top>
    <div class="player">
      <span>(0)</span>
    </div>
    <chi-per class="ch" v-for="(item,index) in chiplist" :key="index" :chip="item" :size=".30"></chi-per>
    <div>
      <div class="cont">
        <div class="zhuang">
          <div class="name">
            庄
            <div class="p">123</div>
          </div>
        </div>
        <div class="x1">
          <div class="name">
            闲1
            <div class="p">123</div>
          </div>
        </div>
        <div class="x2">
          <div class="name">
            闲2
            <div class="p">123</div>
          </div>
        </div>
        <div class="x3">
          <div class="name">
            闲3
            <div class="p">123</div>
          </div>
        </div>
      </div>
      <div class="paiqu">
        <puker-v
          class="pk"
          v-for="(item,index) in puklist"
          :key="index"
          :puk="item"
          :isbface="isfz(t,item.type,fz)"
        ></puker-v>
      </div>
    </div>
    <div class="d">
      <div class="desk">
        <div class="pl">
          <div class="count">本局总下注数:0</div>
        </div>
        <div class="jia">
          <div class="item" @click="kaipai">
            <div class="zhushu">0</div>
            <div class="det">
              <p>庄</p>
              <p>x</p>
              <p>1.970</p>
            </div>
            <div class="self">0</div>
          </div>
          <div class="vs"></div>
          <div class="item" @click="shoupai">
            <div class="zhushu">0</div>
            <div class="det">
              <p>闲1</p>
              <p>x</p>
              <p>1.970</p>
            </div>
            <div class="self">0</div>
          </div>
          <div class="item" @click="fapai">
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
    </div>
    <lotte-r></lotte-r>
    <Foo-ter></Foo-ter>
  </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
require("yuki-createjs");
import HeaderTop from "../base/top";
import LotteR from "../base/lotter";
import FooTer from "../base/footer";
import PukerV from "../base/puker";
import ChiPer from "../base/chip";
export default {
  name: "NiuNiu",
  components: {
    HeaderTop,
    LotteR,
    FooTer,
    PukerV,
    ChiPer
  },
  filters: {
    fillnn(x) {}
  },
  data() {
    return {
      per: 0,
      isload: true,
      fz: false,
      ct: false,
      t: [],
      puklist: [
        { num: _.random(0, 13), type: 0, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 0, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 0, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 0, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 0, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 1, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 1, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 1, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 1, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 1, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 2, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 2, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 2, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 2, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 2, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 3, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 3, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 3, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 3, hua: _.random(0, 3) },
        { num: _.random(0, 13), type: 3, hua: _.random(0, 3) }
      ],
      chiplist: []
    };
  },
  beforeCreate() {
    $("body").css({
      background: "url(https://images.imags-google.com/game/nn-progress.jpg)",
      backgroundSize: "cover"
    });

    console.log(createjs);
    // alert("123");
  },
  beforeDestroy() {
    createjs.Sound.stop();
  },
  mounted() {
    let p = this.per;
    var loader = new createjs.LoadQueue();
    // 添加声音支持
    loader.installPlugin(createjs.Sound);
    loader.addEventListener("progress", loadprogress);
    loader.loadManifest(
      [
        { id: "bg", src: "/mp3/bg.mp3" },
        { id: "daojishi", src: "/mp3/daojishi.mp3" },
        { id: "dingdong", src: "/mp3/dingdong.wav" },
        { id: "xiazhu", src: "/mp3/xiazhu.mp3" },
        { id: "kaipai", src: "/mp3/kaipai.mp3" },
        { id: "fapai", src: "/mp3/fapai.mp3" },
        { id: "tingzhu", src: "/mp3/tingzhu.mp3" },
        { id: "shouzhu", src: "/mp3/shouzhu.mp3" },
        { id: "lotter", src: "/mp3/lotter.mp3" },
        { id: "jinbi", src: "/mp3/jinbi.mp3" },
        { id: "zhadanniu", src: "/mp3/FamaleZhaDanNiu.mp3" },
        { id: "wuhuaniu", src: "/mp3/FamaleWuHuaNiu.mp3" },
        { id: "sihuaniu", src: "/mp3/FamaleSiHuaNiu.mp3" },
        { id: "n1", src: "/mp3/FamaleNiuYi.mp3" },
        { id: "n5", src: "/mp3/FamaleNiuWu.mp3" },
        { id: "n4", src: "/mp3/FamaleNiuSi.mp3" },
        { id: "n3", src: "/mp3/FamaleNiuSan.mp3" },
        { id: "n7", src: "/mp3/FamaleNiuQi.mp3" },
        { id: "n0", src: "/mp3/FamaleNiuNone.mp3" },
        { id: "nn", src: "/mp3/FamaleNiuNiu.mp3" },
        { id: "n6", src: "/mp3/FamaleNiuLiu.mp3" },
        { id: "n9", src: "/mp3/FamaleNiuJiu.mp3" },
        { id: "n2", src: "/mp3/FamaleNiuEr.mp3" },
        { id: "n8", src: "/mp3/FamaleNiuBa.mp3" },
        { id: "chip", src: "/mp3/chip.mp3" }
      ],
      true
    );
    loader.addEventListener("complete", listener);
    createjs.Sound.alternateExtensions = ["mp3"];
    let that = this;
    function loadprogress(e) {
      let per = e.loaded;
      console.log((loader.progress * 100).toFixed(2) + " %");
      if (per > 1) {
        per = 1;
      }
      $(".ad p").text("核心文件加载 . . ." + (per * 100).toFixed(0) + " %");
    }

    function listener() {
      that.isload = false;
      createjs.Sound.play("bg", { loop: -1 });
    }
    //展示牌
    $(".item").css({
      height: $(window).height() * 0.11 + "px"
    });
    this.normal();
  },
  watch: {
    chiplist(x) {
      console.log(x);
      for (let i = 0; i < $(".ch").length; i++) {
        if (
          $(".ch")
            .eq(i)
            .position().top == 113
        ) {
          let r = _.random(0, 5);
          $(".ch")
            .eq(i)
            .animate(
              {
                left: `${_.random(
                  $(".item")
                    .eq(r)
                    .position().left - 40,
                  $(".item")
                    .eq(r)
                    .position().left + 50
                )}px`,
                top: `${_.random(
                  $(".item")
                    .eq(r)
                    .position().top - 10,
                  $(".item")
                    .eq(r)
                    .position().top
                )}px`
              },
              600
            );
        }
      }
    }
  },
  methods: {
   nnme(j) {
      let arr = j
      let arr2 = j
      let arr3 = j
      let res = []
      let num = ""
      for (let i = 0; i < arr.length; i++) {
        for (let c = 0; c < arr2.length; c++) {
          for (let d = 0; d < arr3.length; d++) {
            if (i != c && i != d && c != d) {
              res.push([arr[i], arr2[c], arr3[d]].sort((a, b) => a - b).join(","))
            }
          }
        }
      }
      let r = [...new Set(res)].map(x => (x.split(",")).map(v => v - 0))
      console.log(r);
      for (let i in r) {
        if (r[i].map(x => x > 10 ? 10 : x).reduce((a, b) => a + b) % 10 == 0) {
          console.log(r[i]);
          console.log(_.difference(j,r[i]).reduce((a,b)=>a+b)%10);
        }
      }
    },
    isfz(x, y, z) {
      if (z) {
        return false;
      }
      if (!x.includes(y)) {
        return true;
      }
    },
    kaipai() {
      let arr = [1, 2, 3, 0];
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          this.t.push(arr[i]);
          setTimeout(() => {
            createjs.Sound.play("kaipai");
            $(".p")
              .eq(arr[i])
              .addClass("ct");
          }, 400);
          
        }, i * 800);
      }
    },
    fapai() {
      this.fz = false;
      this.t = [];
      let n = 0;
      let b = 0;
      for (let c = 0; c < $(".pk").length; c++) {
        setTimeout(() => {
          if (c != 0 && c % 5 == 0) {
            n++;
            b = n * ($(window).width() * 0.1);
            createjs.Sound.play("fapai");
          }
          $(".pk")
            .eq(c)
            .animate(
              {
                opacity: 1,
                top: "0px",
                left: b + c * ($(window).width() * 0.028) + "px"
              },
              400,
              function() {}
            );
        }, c * 80);
      }
    },
    shoupai() {
      this.fz = false;
      for (let i = 0; i < 4; i++) {
        createjs.Sound.play("fapai");
        $(".p")
          .eq(i)
          .removeClass("ct");
      }
      this.t = [];
      let n = 0;
      let b = 0;
      for (let c = 0; c < $(".pk").length; c++) {
        if (c != 0 && c % 5 == 0) {
          n++;
          setTimeout(() => {
            createjs.Sound.play("fapai");
          }, 800 + n * 50);
        }
        setTimeout(() => {
          $(".pk")
            .eq(c)
            .animate(
              {
                top: "-73px",
                left: "40%",
                opacity: 0
              },
              500
            );
        }, 800 + c * 30);
      }
    },
    normal() {
      let n = 0;
      let b = 0;
      for (let c = 0; c < $(".pk").length; c++) {
        if (c != 0 && c % 5 == 0) {
          n++;
          b = n * ($(window).width() * 0.1);
        }
        $(".pk")
          .eq(c)
          .css({
            transform:
              "scale(0.43) rotateX(0deg) rotateY(0deg) translateZ(0px)",
            top: "3px",
            left: b + c * ($(window).width() * 0.028) + "px"
          });
      }
    },
    touzhu() {
      this.chiplist.push(
        [1, 5, 10, 50, 100, 500, 1000, 5000, 10000][_.random(0, 8)]
      );
      //   this.isfz = !this.isfz;
    }
  }
};
</script>

<style lang="scss" scoped>
.ad {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: url(https://images.imags-google.com/game/nn-progress.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    transform: translateY(155px);
    font-size: 30px;
    color: gold;
    text-shadow: 5px 5px 3px black;
    font-weight: bolder;
    text-align: center;
  }
}
.name {
  position: relative;
  perspective: 1000px;
  text-align: center;
  .p {
    background: url(https://images.imags-google.com/game/brnnJackWin.png)
      no-repeat;
    background-size: auto;
    background-position: -52px 66%;
    position: absolute;
    top: 30px;
    width: 100%;
    height: 30px;
    text-align: center;
    z-index: 99999;
    color: #b0dcfc;
    // transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all 0.3s ease-in-out;
    transform: rotateX(-180deg);
  }
}
.ct {
  transform: rotateX(0deg) !important;
}
.paiqu {
  position: relative;
  // top:17px;
  // height: 50px;
  .pk {
    // transition: all 0.5s;
    position: absolute;
  }
}
.ch {
  position: absolute;
  top: 113px;
  right: -34px;
}
.player {
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
  right: -13px;
  transform: scale(0.5);
  width: 59px;
  z-index: 12222;
  // right: 50px;
  background: url(https://images.imags-google.com/game/nnicon.png?1);
  background-position: 97% 75%;
}

//舞台背景
.niuniu {
  display: flex;
  flex-flow: column;
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
.d {
  flex: 1;
  margin-top: 67px;
  .desk {
    width: 100%;
    height: 100%;
    background: url(https://images.imags-google.com/game/nn100bg2.png);
    background-size: 100% 100vh;
    background-position: 0 -113px;
  }
}
.cont {
  display: flex;
  justify-content: space-between;
  color: #f8c430;
  font-size: 30px;
  font-weight: 900;
  font-family: "宋体";
  margin-top: 15px;
  letter-spacing: 5px;
  text-shadow: 2px 2px 2px black;
  .x1,
  .zhuang,
  .x2,
  .x3 {
    width: 25%;
    height: 30px;
    // text-align: center;
  }
  .zhuang {
    margin-left: 18px;
  }
}
.desk {
  border: 1px solid transparent;
  .pl {
    margin-top: 14.5%;
    display: flex;
    .count {
      color: white;
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
  }
  .jia {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    padding: 0 20px;
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
      border: 1px dashed rgb(255, 255, 255);
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