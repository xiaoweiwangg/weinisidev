<template>
  <div class="rbwar">
    <div data-v-07f55b9f data-v-e1fcc0e8 id="vs" class="animate-contain rw-animation rbvs">
      <div data-v-07f55b9f class="redblack-contain">
        <div data-v-07f55b9f class="r-slide">
          <div data-v-07f55b9f class="right-slide slide">
            <div data-v-07f55b9f class="queen poerson"></div>
          </div>
        </div>
        <div data-v-07f55b9f class="middle-box">
          <div data-v-07f55b9f class="middle-relative">
            <div data-v-07f55b9f class="queen-flash flash0"></div>
            <div data-v-07f55b9f class="queen-flash flash1"></div>
            <div data-v-07f55b9f class="queen-flash flash2"></div>
            <div data-v-07f55b9f class="queen-flash flash3"></div>
            <div data-v-07f55b9f class="queen-flash flash4"></div>
            <div data-v-07f55b9f class="king-flash flash0"></div>
            <div data-v-07f55b9f class="king-flash flash1"></div>
            <div data-v-07f55b9f class="king-flash flash2"></div>
            <div data-v-07f55b9f class="king-flash flash3"></div>
            <div data-v-07f55b9f class="king-flash flash4"></div>
            <div data-v-07f55b9f class="shield"></div>
            <div data-v-07f55b9f class="left-sword sword"></div>
            <div data-v-07f55b9f class="right-sword sword"></div>
            <div data-v-07f55b9f class="left-sword-light sword-light"></div>
            <div data-v-07f55b9f class="right-sword-light sword-light"></div>
            <div data-v-07f55b9f class="vs">
              <div data-v-07f55b9f class="vs-relative">
                <div data-v-07f55b9f class="vslight vslight0"></div>
                <div data-v-07f55b9f class="vslight vslight1"></div>
                <div data-v-07f55b9f class="vslight vslight2"></div>
                <div data-v-07f55b9f class="vslight vslight3"></div>
                <div data-v-07f55b9f class="vslight vslight4"></div>
                <div data-v-07f55b9f class="vslight vslight5"></div>
                <div data-v-07f55b9f class="vs-v word">
                  <div data-v-07f55b9f></div>
                </div>
                <div data-v-07f55b9f class="vs-s word">
                  <div data-v-07f55b9f></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-07f55b9f class="l-slide">
          <div data-v-07f55b9f class="left-slide slide">
            <div data-v-07f55b9f class="king poerson"></div>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="ishow">
      <div data-v-e1fcc0e8 title="2002" class="how-to-play">
        <div class="game-chess-img how-to-play-top">
          <div class="game-chess-img how-to-play-head"></div>
          <div class="game-chess-img how-to-play-close" @click="close"></div>
        </div>
        <div class="game-chess-img how-to-play-middle">
          <div class="how-to-play-content setfont games-font">
            <div>
              <div class="tit">开奖时间：</div>
              <div class="row-bottom">30秒1局，全天2880局；</div>
            </div>
            <div>
              <div class="tit">玩法规则</div>
              <div class="row-bottom">
                每局由一副扑克牌（不含大小王）开出6张牌，红方、黑方各3张牌，竞猜红方和黑方的牌型大小，
                <br />
                <br />「红方」红方胜利即中奖；
                <br />「黑方」黑方胜利即中奖；
                <br />「幸运一击」胜利一方的牌型为特殊牌型时（豹子、顺金、金花、顺子、对子9-A）即中奖，不同牌型奖金也不同；
              </div>
            </div>
            <div>
              <div class="tit">牌型大小：</div>
              <div class="row-bottom">豹子&gt;顺金&gt;金花&gt;顺子&gt;对子&gt;单张；若牌型相同比点数大小，若点数也相同则比花色大小；</div>
            </div>
            <div>
              <div class="tit">点数大小：</div>
              <div
                class="row-bottom"
              >A&gt;K&gt;Q&gt;J&gt;10&gt;9&gt;8&gt;7&gt;6&gt;5&gt;4&gt;3&gt;2；</div>
            </div>
            <div>
              <div class="tit">花色大小：</div>
              <div class="row-bottom">黑桃&gt;红桃&gt;梅花&gt;方块</div>
            </div>
            <ul class="how-to-play-list">
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk4"></em>
                  <em class="game-chess-card rbcard-1 pk5"></em>
                  <em class="game-chess-card rbcard-2 pk6"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">豹子：</div>
                  <div>三张点数相同的牌；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk46"></em>
                  <em class="game-chess-card rbcard-1 pk50"></em>
                  <em class="game-chess-card rbcard-2 pk54"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">顺金：</div>
                  <div>三张花色相同的顺子；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk4"></em>
                  <em class="game-chess-card rbcard-1 pk24"></em>
                  <em class="game-chess-card rbcard-2 pk36"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">金花：</div>
                  <div>三张花色相同的牌</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk15"></em>
                  <em class="game-chess-card rbcard-1 pk17"></em>
                  <em class="game-chess-card rbcard-2 pk20"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">顺子：</div>
                  <div>三张不同花色的连牌；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk4"></em>
                  <em class="game-chess-card rbcard-1 pk5"></em>
                  <em class="game-chess-card rbcard-2 pk8"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">对子：</div>
                  <div>两张点数一样的牌；</div>
                </div>
              </li>
              <li>
                <div class="how-to-play-code">
                  <em class="game-chess-card rbcard-0 pk21"></em>
                  <em class="game-chess-card rbcard-1 pk40"></em>
                  <em class="game-chess-card rbcard-2 pk54"></em>
                </div>
                <div class="how-to-play-info">
                  <div class="tit">单张：</div>
                  <div>三张不同的牌；</div>
                </div>
              </li>
            </ul>
            <!---->
          </div>
        </div>
        <div class="game-chess-img how-to-play-dottom">
          <em class="game-chess-img how-to-play-icon"></em>
        </div>
      </div>
    </van-popup>
    <div class="ad" v-show="isload">
      <p>{{per}}%</p>
    </div>
    <header-top :start="djs" :playdate="playdate" :type="type" @play="play" @close="close"></header-top>
    <div class="player">
      <span>({{pm}})</span>
    </div>
    <chi-per
      class="ch"
      v-for="(item,index) in chiplist"
      :key="index"
      :chip="item.price"
      :size=".25"
    ></chi-per>
    <div>
      <div class="paiqu">
        <div class="rb game-chess-img redblackwar-top-bg">1</div>
        <div data-v-e1fcc0e8 class="redblackwar-chess-card">
          <!-- <div data-v-e1fcc0e8 class="game-chess-img redblackwar-top-bg"></div> -->
          <div data-v-e1fcc0e8 class="redblackwar-top-left">
            <div
              data-v-e1fcc0e8
              class="redblack-outsildebox redblack-queen queen-cry queen-waitting"
            >
              <div data-v-e1fcc0e8 class="redblack-queen-righthair whole"></div>
              <div data-v-e1fcc0e8 class="redblack-queen-lefthair whole"></div>
              <div data-v-e1fcc0e8 class="redblack-queen-allbody whole"></div>
              <div data-v-e1fcc0e8 class="redblack-queen-rightside whole"></div>
              <div data-v-e1fcc0e8 class="redblack-queen-leftside whole"></div>
              <div data-v-e1fcc0e8 class="redblack-queen-head whole"></div>
            </div>
          </div>
          <div data-v-e1fcc0e8 class="redblackwar-top-right">
            <div data-v-e1fcc0e8 class="redblack-outsildebox redblack-king king-cry king-waitting">
              <div data-v-e1fcc0e8 class="redblack-kingwin-leftcloth whole"></div>
              <div data-v-e1fcc0e8 class="redblack-kingwin-foot whole"></div>
              <div data-v-e1fcc0e8 class="redblack-kingwin-rightcloth whole"></div>
              <div data-v-e1fcc0e8 class="redblack-kingwin-lefthand whole"></div>
              <div data-v-e1fcc0e8 class="redblack-kingwin-allbody whole"></div>
              <div data-v-e1fcc0e8 class="redblack-kingwin-head whole"></div>
              <div data-v-e1fcc0e8 class="redblack-kingwin-righthand whole"></div>
            </div>
          </div>
        </div>
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
      <div class="desk"></div>
    </div>
    <lotte-r :cpl="cpl" class="cpr" @chek="ck"></lotte-r>
    <Foo-ter @reback="reback" @sub="sub" :pr="price" :start="start"></Foo-ter>
    <div class="timerdjs" v-show="jishil">{{str}}</div>
    <div data-v-e1fcc0e8 id="bettingBox" class="redblackwar-betting">
      <div data-v-e1fcc0e8>
        <div data-v-e1fcc0e8 class="opacity-box redblackwar-red tl games-font">
          <div data-v-e1fcc0e8 class="yet">
            <em data-v-e1fcc0e8>0</em>
          </div>
          <div data-v-e1fcc0e8 id="content1" @click="kaipai">
            <span data-v-e1fcc0e8>红方</span>
            <span data-v-e1fcc0e8>×</span>
            <span data-v-e1fcc0e8>1.970</span>
          </div>
          <div data-v-e1fcc0e8 class="slide-color">
            <em data-v-e1fcc0e8 class="set-red-black">0</em>
          </div>
        </div>
        <div data-v-e1fcc0e8 class="opacity-box redblackwar-black tr games-font">
          <div data-v-e1fcc0e8 class="yet">
            <em data-v-e1fcc0e8>0</em>
          </div>
          <div data-v-e1fcc0e8 id="content2" @click="fapai">
            <span data-v-e1fcc0e8>黑方</span>
            <span data-v-e1fcc0e8>×</span>
            <span data-v-e1fcc0e8>1.970</span>
          </div>
          <div data-v-e1fcc0e8 class="slide-color">
            <em data-v-e1fcc0e8 class="set-red-black">0</em>
          </div>
        </div>
      </div>
      <div data-v-e1fcc0e8>
        <div data-v-e1fcc0e8 class="opacity-box redblackwar-hit bl games-font">
          <div data-v-e1fcc0e8 id="yet">
            <em data-v-e1fcc0e8>0</em>
          </div>
          <div data-v-e1fcc0e8 id="content3" @click="shoupai">
            <span data-v-e1fcc0e8>幸运一击</span>
            <span data-v-e1fcc0e8 class="redblack-span">
              <i data-v-e1fcc0e8>豹子×14.775</i>
              <i data-v-e1fcc0e8>顺金×9.850</i>
              <i data-v-e1fcc0e8>金花×3.940</i>
              <i data-v-e1fcc0e8>顺子×2.955</i>
              <i data-v-e1fcc0e8>对子(9-A)×1.970</i>
            </span>
          </div>
          <div data-v-e1fcc0e8 class="slide-color">
            <em data-v-e1fcc0e8 class="set-red-black-tran">0</em>
          </div>
        </div>
      </div>
    </div>
    <div class="x">
      <div class="xs"></div>
      <div class="xs"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import _ from "underscore";
import HeaderTop from "../base/top";
import LotteR from "../base/lotter";
import { Toast } from "vant";
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
    ChiPer,
    [Toast.name]: Toast
  },
  filters: {
    fname(x) {
      switch (x) {
        case 0:
          return "庄";
          break;
        case 1:
          return "闲1";
          break;
        case 2:
          return "闲2";
          break;
        case 3:
          return "闲3";
          break;
        default:
          break;
      }
    }
  },
  data() {
    return {
      pm: 0,
      playmode: 1.0,
      playratel: 1.0,
      po: 0,
      list: [], //用户投注定位列表
      cpl: false, //chip动画
      per: 0, //加载进度
      isload: true, //首屏加载动画
      fz: false, //初始化是否翻转牌面
      ct: false, //开牌动画
      t: [], //牌翻转的序列
      n: null, //全局牛n
      ischip: 1, //默认投注码
      ishow: true,
      puklist: [
        //扑克牌列表
        { num: _.random(0, 13), type: 0, hua: 0 },
        { num: _.random(0, 13), type: 0, hua: 0 },
        { num: _.random(0, 13), type: 0, hua: 0 },
        { num: _.random(0, 13), type: 1, hua: 0 },
        { num: _.random(0, 13), type: 1, hua: 0 },
        { num: _.random(0, 13), type: 1, hua: 0 }
      ],
      chiplist: [], //所有用户的投注码
      jieguo: [], //接收开牌结果集
      vs: [
        //对局列表
        [
          { type: 0, playnum: 0, iswin: false },
          { type: 1, playnum: 0, iswin: false }
        ],
        [
          { type: 0, playnum: 0, iswin: false },
          { type: 2, playnum: 0, iswin: false }
        ]
      ],
      price: 0,
      start: 30, //默认起始倒计时
      playdate: "2019001", //投注日期
      type: "", //开奖投注状态
      timer: null, //定时器
      djs: 0,
      jishil: false,
      str: "停止下注"
    };
  },
  beforeDestroy() {
    createjs.Sound.stop();
    window.clearInterval(this.timer);
    this.timer = null;
    this.$socket.emit("qtniuniu", {
      username: JSON.parse(sessionStorage.getItem("userinfo")).name
    });
  },
  computed: {},
  mounted() {
    this.sockets.subscribe("niuniu2", data => {
      // this.playdate = parseInt(data.msg.playdate);
      // this.puklist = JSON.parse(data.msg.playnum);
    });
    this.sockets.subscribe("move", data => {
      this.chiplist.push(data.tz);
      this.list.push(data.tz);
    });
    this.sockets.subscribe("qtniuniu", data => {
      this.pm = data.pm;
    });
    //---------------------
    document.addEventListener("visibilitychange", function() {
      //浏览器切换事件
      if (document.visibilityState == "hidden") {
        //离开当前tab标签
        createjs.Sound.stop();
      } else {
        /////回到当前tab标签
        // createjs.Sound.play("bg");
      }
    });
    let that = this;
    for (let i = 0; i < $(".jj .sj").length; i++) {}
    let p = this.per;
    var loader = new createjs.LoadQueue();
    // 添加声音支持
    loader.installPlugin(createjs.Sound);
    // 检测文件加载进度
    loader.addEventListener("progress", loadprogress);
    //加载文件列表
    loader.loadManifest(
      [
        { id: "bg", src: "/rbwar/bg.mp3" },
        { id: "daojishi", src: "/mp3/daojishi.mp3" },
        { id: "dingdong", src: "/mp3/dingdong.wav" },
        { id: "start", src: "/rbwar/start.mp3" },
        { id: "kaipai", src: "/mp3/kaipai.mp3" },
        { id: "fapai", src: "/mp3/fapai.mp3" },
        { id: "tingzhu", src: "/mp3/tingzhu.mp3" },
        { id: "shouzhu", src: "/mp3/shouzhu.mp3" },
        { id: "lotter", src: "/mp3/lotter.mp3" },
        { id: "jinbi", src: "/mp3/jinbi.mp3" },
        { id: "nz4", src: "/mp3/FamaleZhaDanNiu.mp3" },
        { id: "nwhn", src: "/mp3/FamaleWuHuaNiu.mp3" },
        { id: "nshn", src: "/mp3/FamaleSiHuaNiu.mp3" },
        { id: "n1", src: "/mp3/FamaleNiuYi.mp3" },
        { id: "n5", src: "/mp3/FamaleNiuWu.mp3" },
        { id: "n4", src: "/mp3/FamaleNiuSi.mp3" },
        { id: "n3", src: "/mp3/FamaleNiuSan.mp3" },
        { id: "n7", src: "/mp3/FamaleNiuQi.mp3" },
        { id: "n-1", src: "/mp3/FamaleNiuNone.mp3" },
        { id: "n0", src: "/mp3/FamaleNiuNiu.mp3" },
        { id: "n6", src: "/mp3/FamaleNiuLiu.mp3" },
        { id: "n9", src: "/mp3/FamaleNiuJiu.mp3" },
        { id: "n2", src: "/mp3/FamaleNiuEr.mp3" },
        { id: "n8", src: "/mp3/FamaleNiuBa.mp3" },
        { id: "chip", src: "/mp3/chip.mp3" }
      ],
      true
    );
    //加载文件完成
    loader.addEventListener("complete", listener);
    //媒体文件扩展
    createjs.Sound.alternateExtensions = ["mp3", "wav"];
    function loadprogress(e) {
      let per = e.loaded;
      if (per > 1) {
        per = 1;
      }
      $(".ad p").text("LOADING . . ." + (per * 100).toFixed(0) + " %");
    }

    function listener() {
      that.isload = false;
      createjs.Sound.play("bg", { loop: -1 });
      that.cpl = true;

      that.init();
    }
    //展示牌
    $(".sj").css({
      height: $(window).height() * 0.11 + "px"
    });
    $(".vs").css({
      height: $(window).height() * 0.11 + "px"
    });
    this.normal();
  },
  updated() {
    if ($(".van-notify")[0]) {
      $(".van-notify")[0].style.zIndex = 999999999999999999;
    }
    if ($(".van-toast")[0]) {
      $(".van-toast")[0].style.zIndex = 999999999999999999;
    }
    // console.log($(".ch").eq(0).position().top);
    for (let i = 0; i < $(".ch").length; i++) {
      if (
        $(".ch")
          .eq(i)
          .position().top == 113
      ) {
        // createjs.Sound.play("chip");
        $(".ch")
          .eq(i)
          .animate(
            {
              left: `${_.random(
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().left - 40,
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().left + 50
              )}px`,
              top: `${_.random(
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().top - 20,
                $(".jj .sj")
                  .eq(this.chiplist[i].addr)
                  .offset().top
              )}px`
            },
            600
          );
      }
    }
  },
  watch: {
    jieguo(x) {
      if (x.length == 4) {
        setTimeout(() => {
          (Math.random() * 10) % 2 == 0 ? this.wanjiashou() : this.zhuangshou();
        }, 2000);
        let size = [
          "z4",
          "whn",
          "shn",
          0,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1,
          "-1"
        ].reverse();
        for (let i = 0; i < 3; i++) {
          if (size.indexOf(x[i].niu) == size.indexOf(x[3].niu)) {
            if (x[i].niu == "z4") {
              if (x[i].z4k != x[3].z4k) {
                if (x[i].z4k > x[3].z4k) {
                  this.vs[i][1].iswin = true;
                } else {
                  this.vs[i][0].iswin = true;
                }
              } else {
                let hsize = [1, 0, 2, 3].reverse();
                if (hsize.indexOf(x[i].z4k) > hsize.indexOf(x[3].z4k)) {
                  this.vs[i][1].iswin = true;
                } else {
                  this.vs[i][0].iswin = true;
                }
              }
            } else {
              if (x[i].maxnum != x[3].maxnum) {
                if (x[i].maxnum > x[3].maxnum) {
                  this.vs[i][1].iswin = true;
                } else {
                  this.vs[i][0].iswin = true;
                }
              } else {
                let hsize = [1, 0, 2, 3].reverse();
                if (hsize.indexOf(x[i].maxhua) > hsize.indexOf(x[3].maxhua)) {
                  this.vs[i][1].iswin = true;
                } else {
                  this.vs[i][0].iswin = true;
                }
              }
            }
          } else {
            if (size.indexOf(x[i].niu) > size.indexOf(x[3].niu)) {
              this.vs[i][1].iswin = true;
            } else {
              this.vs[i][0].iswin = true;
            }
          }
        }
        //结算
        this.$socket.emit("ks", { data: JSON.stringify(this.vs) });
        this.sockets.subscribe("jiesuan", data => {
          console.log();
        });
      }
    }
  },
  methods: {
    jishiv(x) {
      x > 17 ? "开奖时间" : "下注时间";
    },
    getdata() {
      return new Promise((res, rej) => {
        this.$socket.emit("niuniu2", {
          username: JSON.parse(sessionStorage.getItem("userinfo")).name
        });
      });
    },
    close() {
      this.ishow = !this.ishow;
    },
    play() {
      createjs.Sound.stop();
    },
    init() {
      this.$socket.emit("rbwar", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      });
      this.sockets.subscribe("rbwar", data => {
        // 初始倒计时时间
        this.start = 30 - (data.s % 30);
        this.djs = 15 - (data.s % 15);

        // 初始开奖date数据
        // this.playdate = parseInt(data.msg.playdate);
        // this.puklist = JSON.parse(data.msg.playnum);
        this.pm = data.pm;
      });
      if (this.start > 14) {
        this.type = "开奖中";
        this.fz = false;
      } else {
        this.fz = true;
        this.type = "投注中";
        console.log("投注");
      }
      this.timer = setInterval(() => {
        this.start--;
        this.djs--;
        if (this.start > 14) {
          this.type = "投注中";
        } else {
          this.type = "开奖中";
        }
        if (this.start == 3) {
          this.shoupai();
          setTimeout(() => {
            this.fapai();
            createjs.Sound.play("xiazhu");
            this.str = "开始下注";
            this.jishil = true;
          }, 2000);
          if (this.start % 15 == 0 && this.start != 15) {
          }
        } else {
          this.str = null;
          this.jishil = false;
        }
        if (this.start == 18) {
          createjs.Sound.play("daojishi");
          this.str = "3";
          this.jishil = true;
        }
        if (this.start == 17) {
          createjs.Sound.play("daojishi");
          this.str = "2";
          this.jishil = true;
        }
        if (this.start == 16) {
          createjs.Sound.play("start");
          $("#vs").addClass("show");
          createjs.Sound.play("daojishi");
          this.str = "1";
          this.jishil = true;
          // this.getdata().then(x => {
          //   console.log(x);
          //   this.playdate = parseInt(x.playdate);
          //   this.puklist = JSON.parse(x.playnum);
          // });
          setTimeout(() => {
            $("#vs").removeClass("show");
          }, 2000);
        }
        if (this.start == 14) {
        }
        if (this.start == 15) {
          createjs.Sound.play("tingzhu");
          this.str = "停止下注";
          this.jishil = true;
        }
        if (this.start == 14) {
          setTimeout(() => {
            this.kaipai();
          }, 500);
        }
        if (this.start <= 0) {
          this.start = 30;
        }
        if (this.djs == 0) {
          this.djs = 15;
        }
      }, 1000);
    },
    reback() {
      createjs.Sound.play("lotter");
      this.vs.map(x => {
        x.map(v => (v.playnum = 0));
      });
      this.price = 0;
    },
    sub() {
      if (this.start < 15 || this.price < 1) {
        return;
      }
      let shopcar = {};
      (shopcar.username = JSON.parse(sessionStorage.getItem("userinfo")).name),
        //   // (shopcar.userinput = JSON.stringify({ data: this.gamelist }));
        (shopcar.buydet = JSON.stringify(this.vs));
      shopcar.userinput = JSON.stringify(this.vs);
      shopcar.playdate = `${this.playdate + 1}期`;
      shopcar.playname = "红黑大战";
      shopcar.playgame = "rbwar";
      shopcar.playratel = this.playratel;
      shopcar.price = this.price;
      // shopcar.dl = this.num;
      shopcar.iskj = 0;
      shopcar.playmode = this.playmode;
      this.axios.post("/shopcar", shopcar).then(x => {
        this.reback();
        if (x.data.msg == "余额不足") {
          this.$notify({
            message: "您的余额不足,请充值"
          });
          Toast.fail("订单提交失败");
          setTimeout(() => {
            createjs.Sound.play("dingdong");
          }, 100);
        } else if (x.data.msg == "ok") {
          Toast.success("订单提交成功!");
          this.price = 0;
          setTimeout(() => {
            createjs.Sound.play("dingdong");
          }, 100);
        }
      });
    },
    add(x, y) {
      if (this.start < 17 && this.start > 14) {
        this.$notify({
          message: "本期投注已截止,请等待开奖",
          background: "#dc3b40",
          duration: 1500
        });
        return;
      }
      if (this.start < 14) {
        this.$notify({
          message: "结算时间,请稍后投注",
          background: "#dc3b40",
          duration: 1500
        });
        return;
      }

      let z = 0;
      let tz = {};
      tz.price = this.ischip;
      z = (x + 1) * x + y;
      if (z > 4) {
        z -= 2;
      }
      tz.addr = z;
      // this.list.push(tz);
      // console.log(this.list);
      this.$socket.emit("add", {
        data: tz
      });

      this.vs[x][y].playnum += this.ischip;
      createjs.Sound.play("chip");
      //加入用户投注列表
      // this.chiplist.push(tz);
      this.price += this.ischip;
    },
    ck(x) {
      this.ischip = x;
    },
    nnbg(x) {
      switch (x) {
        case "baozi":
          return "center -4.55rem";
          break;
        case "shunjin":
          return "center -3.7rem";
          break;
        case "jinhua":
          return "center -2.85rem";
          break;
        case "shunzi":
          return "center -2rem";
          break;
        case "duizi":
          return "center -1.2rem";
          break;
        case "danzhang":
          return "center -0.3rem";
          break;
      }
    },
    wanjiashou() {
      for (let i = 0; i < $(".ch").length; i++) {
        setTimeout(() => {
          $(".ch")
            .eq(i)
            .animate(
              {
                opacity: 0.2,
                top: 103 + "px",
                left: $(".player").position().left + "px"
              },
              950,
              function() {
                $(".ch")
                  .eq(i)
                  .css({ opacity: 0 });
                this.chiplist = [];
              }
            );
        }, i * 10);
        if (i % 2 == 0) {
        }
      }
    },
    zhuangshou() {
      for (let i = 0; i < $(".ch").length; i++) {
        setTimeout(() => {
          $(".ch")
            .eq(i)
            .animate(
              {
                opacity: 0.2,
                top: $(".zhuang").offset().top - 33 + "px",
                left: $(".zhuang").offset().left - 26 + "px"
              },
              950,
              function() {
                $(".ch")
                  .eq(i)
                  .css({ opacity: 0 });
                this.chiplist = [];
              }
            );
        }, i * 10);
        if (i % 2 == 0) {
          createjs.Sound.play("shouzhu");
        }
      }
      // this.chiplist=[]
    },
    dif(a, b) {
      for (let i = 0; i < 3; i++) {
        a.splice(a.indexOf(b[i]), 1);
      }
      return a;
    },
    rbme(j) {
      let jg = {};
      //校验最大单牌
      jg.maxnum = _.sortBy(j, x => x.num)[2].num;
      //校验最大花色
      jg.maxhua = _.sortBy(j, x => x.num)[2].hua;
      //校验baozi
      for (let i in _(j.map(x => x.num)).countBy()) {
        if (_(j.map(x => x.num)).countBy()[i] == 2) {
          //校验baozi的值
          jg.baozi = i;
        }
      }
      jg.maxleng = Math.max(...Object.values(_(j.map(x => x.num)).countBy()));
      //校验五花牛
      // let whn = 0;
      // let wh = j.map(x => x.num);
      // for (let m = 0; m < wh.length; m++) {
      //   if (wh[m] > 10) {
      //     whn++;
      //   }
      // }
      // if (whn == 5) {
      //   jg.whn = 5;
      // } else if (whn == 4) {
      //   jg.shn = 4;
      // }
      // //校验牛n
      // let arr = j;
      // let arr2 = j;
      // let arr3 = j;
      // let res = [];
      // let num = "";
      // for (let i = 0; i < arr.length; i++) {
      //   for (let c = 0; c < arr2.length; c++) {
      //     for (let d = 0; d < arr3.length; d++) {
      //       if (i != c && i != d && c != d) {
      //         res.push(
      //           [arr[i].num, arr2[c].num, arr3[d].num]
      //             .sort((a, b) => a - b)
      //             .join(",")
      //         );
      //       }
      //     }
      //   }
      // }

      // let r = [...new Set(res)].map(x => x.split(",").map(v => v - 0));
      // // console.log(r);
      // let n = "duizi";
      // let jarr = [];
      // for (let i in r) {
      //   if (
      //     r[i].map(x => (x > 10 ? 10 : x)).reduce((a, b) => a + b) % 10 ==
      //     0
      //   ) {
      //     n++;
      //     jarr.push(
      //       this.dif(j.map(x => x.num), r[i])
      //         .map(v => (v > 10 ? 10 : v))
      //         .reduce((a, b) => a + b) % 10
      //     );
      //     // console.log(
      //     //   "牛" +
      //     //     (_.difference(j.map(x => x.num), r[i])
      //     //       .map(v => (v > 10 ? 10 : v))
      //     //       .reduce((a, b) => a + b) %
      //     //       10)
      //     // );
      //   }
      // }
      // if (n > 0) {
      //   jg.niu = Math.max(...jarr);
      //   // console.log(jg);
      //   // console.log(jarr);
      // } else {
      //   jg.niu = "-1";
      //   // console.log("无牛");
      // }

      // if (jg.shn == 4) {
      //   jg.niu = "shn";
      // }
      // if (jg.whn == 5) {
      //   jg.niu = "whn";
      // }
      // if (jg.maxleng == 4) {
      //   jg.niu = "z4";
      // }
      // this.n = jg.niu;
      // this.jieguo.push(jg);
      // createjs.Sound.play("n" + jg.niu);
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
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          this.t.push(i);
          setTimeout(() => {
            createjs.Sound.play("kaipai");
            setTimeout(() => {
              this.rbme(this.puklist.filter(x => x.type == isfz));
              $(".xs")
                .eq(i)
                .css({
                  backgroundPosition: this.nnbg(this.n)
                });
            }, 100);
            $(".xs")
              .eq(i)
              .addClass("ct");
          }, 400);
        }, i * 900);
      }
    },
    fapai() {
      this.jieguo = [];
      this.fz = false;
      this.t = [];
      let n = 0;
      let b = 0;
      for (let c = 0; c < $(".pk").length; c++) {
        setTimeout(() => {
          if (c % 3 == 0) {
            n++;
            b = n * $(window).width() * 0.03;
          }
          if (c % 3 == 0) {
            createjs.Sound.play("fapai");
          }
          $(".pk")
            .eq(c)
            .animate(
              {
                transform:
                  "scale(0.55) rotateX(0deg) rotateY(0deg) translatex(-10px)",
                top: "10px",
                opacity: 1,
                left:
                  $(window).width() * 0.2 +
                  b +
                  c * $(window).width() * 0.0634 +
                  "px"
              },
              400,
              function() {}
            );
        }, c * 120);
      }
    },
    shoupai() {
      this.reback();
      this.vs.map(x => {
        x.map(v => (v.iswin = false));
      });
      this.jieguo = [];
      this.fz = false;
      for (let i = 0; i < 2; i++) {
        createjs.Sound.play("fapai");
        $(".xs")
          .eq(i)
          .removeClass("ct");
      }
      this.t = [];
      let n = 0;
      let b = 70;
      for (let c = 0; c < $(".pk").length; c++) {
        if (c != 0 && c % 3 == 0) {
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
                transform: "rotateY(360deg)",
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
        if (c != 0 && c % 3 == 0) {
          n++;
          b = n * $(window).width() * 0.096;
        }
        $(".pk")
          .eq(c)
          .css({
            transform:
              "scale(0.55) rotateX(0deg) rotateY(0deg) translatex(-10px)",
            top: "10px",
            left:
              $(window).width() * 0.25 +
              b +
              c * $(window).width() * 0.0434 +
              "px"
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
.rb {
  width: 100%;
  height: 16vw;
  margin-top: 6.5vw;
  background-position: 0% 88.3%;
  position: absolute;
}
.w2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
}
.w {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px dashed red;
  .win {
    background: url(https://images.imags-google.com/game/brnnJackWin.png);
    background-size: 2.8rem;
    background-position: center 4.5rem;
    position: absolute;
    height: 108%;
    width: 100%;
    // animation: sun 3s linear infinite;
  }
  .sun {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(https://images.imags-google.com/game/brnnJackWin.png);
    background-size: 3.2rem;
    background-position: center 3rem;
  }
}
.redblackwar-chess-card {
  display: flex;
  justify-content: space-between;
}
.redblackwar-top-right {
  position: relative;
}
.king-waitting {
  position: absolute;
  top: 14px;
  right: -74px;
}
@keyframes sun {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.x {
  height: 30px;
  position: fixed;
  top: 100px;
  right: 0;
  left: 0;
  justify-content: center;
  display: flex;
}
.xs {
  // position: absolute;
  height: 100%;
  margin:5px;
  width: 77px;
  background: url(https://images.imags-google.com/game/redBlackIcon.png)
    no-repeat;
  // background-size: auto 100vh;
  background-position: center -4.55rem;
  transition:all .7s;
  background-size:2rem;
  // border:1px dashed red;
  transform:rotateX(90deg);
  // background-position: -12px 43%;
}
.ad {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999999999;
  background: url(https://images.imags-google.com/game/rb-progress.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;
    bottom: 120px;
    font-size: 25px;
    letter-spacing: 5px;
    color: gold;
    text-shadow: 5px 9px 2px black;
    font-weight: 700;
    text-align: center;
  }
}
.name {
  position: relative;
  perspective: 1000px;
  text-align: center;
  transform: translateX(-10px);
  .p {
    background: url(https://images.imags-google.com/game/brnnJackWin.png)
      no-repeat;
    background-size: auto;
    background-position: -52px 66%;
    position: absolute;
    top: 75px;
    width: 100%;
    height: 0px;
    text-align: center;
    z-index: 99999;
    color: #b0dcfc;
    // transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: all 0.3s ease-in-out;
    transform: rotateX(-180deg) translateX(-10px);
  }
}
.ct {
  // height: 30px !important;
  transform: rotateX(0deg) !important;
}
.paiqu {
  position: relative;
  // top:17px;
  height: 80px;
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
.rbvs {
  position: absolute !important;
  z-index: 999999999;
}
//舞台背景
.rbwar {
  display: flex;
  flex-flow: column;
  overflow: scroll;
  background: url(https://images.imags-google.com/game/redBlackWar.jpg);
  position: absolute;
  bottom: 0;
  z-index: 999999999;
  top: 0;
  left: 0;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
#bettingBox {
  display: flex;
  flex-flow: column;
  transform: rotateX(7deg) translateX(-134px);
  border-radius: 8px !important;
  position: fixed;
  bottom: 116px;
  left: 50%;
}
#bettingBox > div:nth-child(1) {
  display: flex;
  justify-content: center;
  color: #dca091;
  & > div {
    width: 131px;
    height: 88px;
    border: 0.5vw solid #a93c30 !important;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-flow: column;
    /* align-items: center; */
    justify-content: space-between;
  }
}
.yet {
  font-size: 0.7em;
  color: #ffdcab;
  width: 100%;
  background-color: #c3330e;
  text-align: center;
}
#yet {
  width: 100%;
  background: #c3330e;
  width: 100%;
}

#bettingBox > div:nth-child(2) {
  display: flex;
  justify-content: center;
  & > div {
    text-align-last: center;
    width: 262px;
    height: 88px;
    border: 1vw solid #a93c30;
    overflow: hidden;
    color: #dca091;
    display: flex;
    flex-flow: column;
    align-items: center;
    #content3 {
      display: flex;
      flex-flow: column;
    }
    display: flex;
    flex-flow: column;
    /* align-items: center; */
    justify-content: space-between;
  }
}
.d {
  flex: 1;
  // margin-top: -20px;
  .desk {
    width: 100%;
    perspective: 200px;
    height: 108%;
    justify-content: center;
    display: flex;
    align-items: center;
    background: url(https://images.imags-google.com/game/redblackbg.png);
    background-size: 100% 100vh;
    background-position: 0 -103px;
  }
}
.cont {
  position: relative;
  z-index: 9;
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
  .v {
    display: flex;
    flex-flow: column;
    width: 16%;
    position: absolute;
    height: 100%;
    // transform: translateX(34%);
  }
  .vs {
    width: 100%;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    height: 43% !important;
    background-position: 24% 40%;
  }
  .jj {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    position: relative;
  }
  .jia {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    padding: 0 20px;
    position: relative;
    .sj {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: space-around;
      width: 33%;
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
        height: 100%;
        p {
          line-height: 134%;
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
.rbwar {
  overflow: hidden;
}
.timerdjs {
  position: fixed;
  height: 2rem;
  width: 4rem;
  top: 50%;
  left: 50%;
  transform: translateX(-2rem) translateY(-1rem);
  // background: url(https://images.imags-google.com/game/btnBg.png);
  // background-size: 100vw auto;
  line-height: 2.4rem;
  font-size: 0.9rem;
  font-weight: bolder;
  text-shadow: 5px 8px 2px black;
  color: #f9c970;
  text-align: center;
  z-index: 7;
  letter-spacing: 5px;
}
//-------------------------
.van-popup {
  z-index: 9999999 !important;
  background: transparent !important;
}
.how-to-play {
  font-size: 26px;
  z-index: 999999999999999999999;
  line-height: 23px;
  font-weight: 600;
}
// <style type="text/css">
.queen-light[data-v-07f55b9f] {
  background: url(https://images.imags-google.com/game/RBlight.png) no-repeat;
}
.rw-animation[data-v-07f55b9f] {
  z-index: 9 !important;
}
.show .rw-animation[data-v-07f55b9f] {
  z-index: 1003;
  position: relative;
}
.redblack-contain[data-v-07f55b9f] {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 999999;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: none;
}
.redblack-contain .queen-flash[data-v-07f55b9f] {
  width: 45px;
  height: 25px;
  right: 10px;
  top: 90px;
  -webkit-transform: scale(-2.8, 2.8);
  transform: scale(-2.8, 2.8);
  background: url(https://images.imags-google.com/game/RBlight.png) no-repeat;
  background-position: -45px -15px;
  position: absolute;
  opacity: 0;
  z-index: 5;
}
.redblack-contain .king-flash[data-v-07f55b9f] {
  width: 45px;
  height: 25px;
  left: 10px;
  top: 90px;
  -webkit-transform: scale(2.8);
  transform: scale(2.8);
  background: url(https://images.imags-google.com/game/RBlight.png) no-repeat;
  background-position: -45px -15px;
  position: absolute;
  opacity: 0;
  z-index: 5;
}
.redblack-contain .flash0[data-v-07f55b9f] {
  background-position: 0px -15px;
}
.redblack-contain .flash1[data-v-07f55b9f] {
  background-position: -45px -15px;
}
.redblack-contain .flash2[data-v-07f55b9f] {
  background-position: -89px -15px;
}
.redblack-contain .flash3[data-v-07f55b9f] {
  background-position: -127px -15px;
}
.redblack-contain .flash4[data-v-07f55b9f] {
  background-position: -179px -15px;
}
.redblack-contain .r-slide[data-v-07f55b9f],
.redblack-contain .l-slide[data-v-07f55b9f] {
  height: 30%;
  width: 100%;
}
.redblack-contain .slide[data-v-07f55b9f] {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
  background-size: cover;
}
.redblack-contain .right-slide[data-v-07f55b9f] {
  opacity: 0;
  /* FF3.6-15 */
  /* Chrome10-25,Safari5.1-6 */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(183, 31, 51, 0.31)),
    color-stop(21%, rgba(183, 31, 51, 0.44)),
    color-stop(31%, rgba(183, 31, 51, 0.5)),
    color-stop(54%, rgba(183, 31, 51, 0.5)),
    color-stop(83%, rgba(141, 58, 111, 0.5)),
    to(rgba(117, 74, 146, 0.5))
  );
  background: linear-gradient(
    to right,
    rgba(183, 31, 51, 0.31) 0%,
    rgba(183, 31, 51, 0.44) 21%,
    rgba(183, 31, 51, 0.5) 31%,
    rgba(183, 31, 51, 0.5) 54%,
    rgba(141, 58, 111, 0.5) 83%,
    rgba(117, 74, 146, 0.5) 100%
  );
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(79, 183, 31, 0.2)', endColorstr='rgba(128, 117, 74, 0.57255)',GradientType=1 );
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.redblack-contain .left-slide[data-v-07f55b9f] {
  opacity: 0;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(117, 74, 146, 0.5)),
    color-stop(21%, rgba(115, 75, 148, 0.5)),
    color-stop(54%, rgba(96, 88, 177, 0.5)),
    color-stop(83%, rgba(83, 97, 196, 0.5)),
    color-stop(99%, rgba(66, 109, 220, 0.44)),
    to(rgba(66, 109, 220, 0.31))
  );
  background: linear-gradient(
    to right,
    rgba(117, 74, 146, 0.5) 0%,
    rgba(115, 75, 148, 0.5) 21%,
    rgba(96, 88, 177, 0.5) 54%,
    rgba(83, 97, 196, 0.5) 83%,
    rgba(66, 109, 220, 0.44) 99%,
    rgba(66, 109, 220, 0.31) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#754a92', endColorstr='rgba(79, 66, 109, 0.86275)',GradientType=1 );
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.redblack-contain .poerson[data-v-07f55b9f] {
  width: 187px;
  height: 187px;
  top: 50%;
  position: absolute;
  z-index: 2;
  -webkit-transform: translate(0, -50%) scale(0.7);
  transform: translate(0, -50%) scale(0.7);
}
.redblack-contain .queen[data-v-07f55b9f] {
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top left;
  left: -40px;
  -webkit-animation: left-little-data-v-07f55b9f 0.4s 0.2s forwards;
  animation: left-little-data-v-07f55b9f 0.4s 0.2s forwards;
}
.redblack-contain .king[data-v-07f55b9f] {
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top left -207px;
  right: -40px;
  -webkit-animation: right-little-data-v-07f55b9f 0.4s 0.2s forwards;
  animation: right-little-data-v-07f55b9f 0.4s 0.2s forwards;
}
.redblack-contain .sword[data-v-07f55b9f] {
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  position: absolute;
}
.redblack-contain .left-sword[data-v-07f55b9f] {
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top -178px left -273px;
  -webkit-transform: translate(-70%, -54%);
  transform: translate(-70%, -54%);
  opacity: 0;
  z-index: 3;
}
.redblack-contain .left-sword-light[data-v-07f55b9f] {
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  position: absolute;
  -webkit-transform: scale(1) translate(-96%, -85%);
  transform: scale(1) translate(-96%, -85%);
  opacity: 0;
  z-index: 4;
}
.redblack-contain .left-sword-light[data-v-07f55b9f]:before {
  left: 0%;
  top: 5%;
  width: 100px;
  height: 100px;
  position: absolute;
  content: "";
  background: url(https://images.imags-google.com/game/swordlight2.png)
    no-repeat;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  background-size: cover;
  z-index: 1;
  opacity: 0;
}
.redblack-contain .right-sword-light[data-v-07f55b9f] {
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  position: absolute;
  -webkit-transform: scale(-1, 1) translate(10%, -86%);
  transform: scale(-1, 1) translate(10%, -86%);
  right: 40%;
  top: 50%;
  opacity: 0;
  z-index: 4;
}
.redblack-contain .right-sword[data-v-07f55b9f] {
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top -178px left -273px;
  -webkit-transform: scale(-1, 1) translate(37%, -54%);
  transform: scale(-1, 1) translate(37%, -54%);
  right: 40%;
  top: 50%;
  opacity: 0;
  z-index: 3;
}
.redblack-contain .right-sword-light[data-v-07f55b9f]:before {
  right: 0%;
  top: 2%;
  width: 100px;
  height: 100px;
  position: absolute;
  content: "";
  background: url(https://images.imags-google.com/game/swordlight2.png)
    no-repeat;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  background-size: cover;
  z-index: -1;
  opacity: 0;
}
.redblack-contain .vs[data-v-07f55b9f] {
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 10;
}
.redblack-contain .vs-relative[data-v-07f55b9f] {
  position: relative;
  z-index: 10;
  height: 100%;
}
.redblack-contain .word div[data-v-07f55b9f] {
  width: 60px;
  height: 84px;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
.redblack-contain .vs-v[data-v-07f55b9f] {
  left: 0px;
  top: 0px;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.redblack-contain .vs-v div[data-v-07f55b9f] {
  opacity: 0;
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top -179px left 0px;
}
.redblack-contain .vs-s[data-v-07f55b9f] {
  top: 25px;
  left: 30px;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.redblack-contain .vs-s div[data-v-07f55b9f] {
  opacity: 0;
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top -179px left -77px;
}
.redblack-contain .word[data-v-07f55b9f] {
  position: absolute;
  z-index: 10;
}
.redblack-contain .shield[data-v-07f55b9f] {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  background: url(https://images.imags-google.com/game/RBOpeninng.png) no-repeat
    top -179px left -158px;
  -webkit-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1);
}
.redblack-contain .middle-box[data-v-07f55b9f] {
  width: 9.30233rem;
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, 0) scale(0.9);
  transform: translate(-50%, 0) scale(0.9);
  height: 200px;
  z-index: 3;
}
.redblack-contain .middle-relative[data-v-07f55b9f] {
  position: relative;
  width: 100%;
  height: 100%;
}
.redblack-contain .vslight[data-v-07f55b9f] {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0%;
  left: 0%;
  opacity: 0;
  -webkit-transform: scale(3) translate(12%, 21%);
  transform: scale(3) translate(12%, 21%);
  z-index: 100;
  background: url(https://images.imags-google.com/game/vslight.png) no-repeat
    top left;
}
.redblack-contain .vslight1[data-v-07f55b9f] {
  background-position: -0px 0;
}
.redblack-contain .vslight1[data-v-07f55b9f] {
  background-position: -50px 0;
}
.redblack-contain .vslight2[data-v-07f55b9f] {
  background-position: -100px 0;
}
.redblack-contain .vslight3[data-v-07f55b9f] {
  background-position: -150px 0;
}
.redblack-contain .vslight4[data-v-07f55b9f] {
  background-position: -200px 0;
}
.redblack-contain .vslight4[data-v-07f55b9f] {
  background-position: -250px 0;
}
.show .redblack-contain[data-v-07f55b9f] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.show .light div[data-v-07f55b9f] {
  -webkit-animation: long 1.1s 0.7s forwards;
  animation: long 1.1s 0.7s forwards;
}
.show .vslight0[data-v-07f55b9f] {
  background-position: -0px 0;
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.7s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.7s forwards;
}
.show .vslight1[data-v-07f55b9f] {
  background-position: -50px 0;
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.8s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.8s forwards;
}
.show .vslight2[data-v-07f55b9f] {
  background-position: -100px 0;
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.9s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.9s forwards;
}
.show .vslight3[data-v-07f55b9f] {
  background-position: -150px 0;
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 1s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 1s forwards;
}
.show .vslight4[data-v-07f55b9f] {
  background-position: -200px 0;
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 1.1s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 1.1s forwards;
}
.show .vslight5[data-v-07f55b9f] {
  background-position: -250px 0;
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 1.2s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 1.2s forwards;
}
.show .flash0.queen-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.85s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.85s forwards;
}
.show .flash1.queen-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.9s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.9s forwards;
}
.show .flash0.king-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.9s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.9s forwards;
}
.show .flash3.king-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 0.95s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 0.95s forwards;
}
.show .flash3.queen-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 1s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 1s forwards;
}
.show .flash4.queen-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 1.05s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 1.05s forwards;
}
.show .flash4.king-flash[data-v-07f55b9f] {
  -webkit-animation: vslight-data-v-07f55b9f 0.15s 1.05s forwards;
  animation: vslight-data-v-07f55b9f 0.15s 1.05s forwards;
}
.show .r-slide[data-v-07f55b9f] {
  -webkit-animation: out-right-data-v-07f55b9f 0.3s 1.7s forwards;
  animation: out-right-data-v-07f55b9f 0.3s 1.7s forwards;
}
.show .l-slide[data-v-07f55b9f] {
  -webkit-animation: out-left-data-v-07f55b9f 0.3s 1.7s forwards;
  animation: out-left-data-v-07f55b9f 0.3s 1.7s forwards;
}
.show .right-slide[data-v-07f55b9f] {
  opacity: 1;
  -webkit-animation: right-slide-data-v-07f55b9f 0.3s forwards;
  animation: right-slide-data-v-07f55b9f 0.3s forwards;
}
.show .left-slide[data-v-07f55b9f] {
  opacity: 1;
  -webkit-animation: left-slide-data-v-07f55b9f 0.3s forwards;
  animation: left-slide-data-v-07f55b9f 0.3s forwards;
}
.show .queen[data-v-07f55b9f] {
  -webkit-animation: left-little-data-v-07f55b9f 0.4s 0.2s forwards;
  animation: left-little-data-v-07f55b9f 0.4s 0.2s forwards;
}
.show .king[data-v-07f55b9f] {
  -webkit-animation: right-little-data-v-07f55b9f 0.4s 0.2s forwards;
  animation: right-little-data-v-07f55b9f 0.4s 0.2s forwards;
}
.show .right-sword[data-v-07f55b9f] {
  -webkit-animation: right-sword-data-v-07f55b9f 0.25s 0.45s forwards;
  animation: right-sword-data-v-07f55b9f 0.25s 0.45s forwards;
}
.show .left-sword[data-v-07f55b9f] {
  -webkit-animation: left-sword-data-v-07f55b9f 0.25s 0.35s forwards;
  animation: left-sword-data-v-07f55b9f 0.25s 0.35s forwards;
}
.show .left-sword-light[data-v-07f55b9f] {
  -webkit-animation: left-sword-light-data-v-07f55b9f 0.25s 0.35s forwards;
  animation: left-sword-light-data-v-07f55b9f 0.25s 0.35s forwards;
}
.show .right-sword-light[data-v-07f55b9f]:before {
  -webkit-animation: opacity0-data-v-07f55b9f 0.3s 0.45s forwards;
  animation: opacity0-data-v-07f55b9f 0.3s 0.45s forwards;
  opacity: 0;
}
.show .left-sword-light[data-v-07f55b9f]:before {
  -webkit-animation: opacity0-data-v-07f55b9f 0.3s 0.35s forwards;
  animation: opacity0-data-v-07f55b9f 0.3s 0.35s forwards;
  opacity: 0;
}
.show .right-sword-light[data-v-07f55b9f] {
  -webkit-animation: right-sword-light-data-v-07f55b9f 0.25s 0.45s forwards;
  animation: right-sword-light-data-v-07f55b9f 0.25s 0.45s forwards;
}
.show .vs-v div[data-v-07f55b9f] {
  -webkit-animation: flyin-data-v-07f55b9f 0.6s 0.7s forwards;
  animation: flyin-data-v-07f55b9f 0.6s 0.7s forwards;
}
.show .vs-s div[data-v-07f55b9f] {
  -webkit-animation: flyin-data-v-07f55b9f 0.6s 0.8s forwards;
  animation: flyin-data-v-07f55b9f 0.6s 0.8s forwards;
}
.show .shield[data-v-07f55b9f] {
  -webkit-animation: shield-animation-data-v-07f55b9f 0.6s forwards;
  animation: shield-animation-data-v-07f55b9f 0.6s forwards;
}
.show .middle-box[data-v-07f55b9f] {
  -webkit-animation: out-mid-data-v-07f55b9f 0.4s 1.5s forwards;
  animation: out-mid-data-v-07f55b9f 0.4s 1.5s forwards;
}
.show .middle-relative[data-v-07f55b9f] {
  -webkit-animation: middle-relative-data-v-07f55b9f 0.4s 0.2s;
  animation: middle-relative-data-v-07f55b9f 0.4s 0.2s;
}
@-webkit-keyframes bigsword-data-v-07f55b9f {
  0% {
    -webkit-transform: scale(4);
    transform: scale(4);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes shield-animation-data-v-07f55b9f {
  0% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) scale(4);
    transform: translate(-50%, -50%) scale(4);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
  }
}
@-webkit-keyframes opacity0-data-v-07f55b9f {
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes right-sword-light-data-v-07f55b9f {
  0% {
    opacity: 0;
    -webkit-transform: scale(-1, 1) translate(-40%, -130%);
    transform: scale(-1, 1) translate(-40%, -130%);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(-1, 1) translate(37%, -54%);
    transform: scale(-1, 1) translate(37%, -54%);
  }
}
@-webkit-keyframes left-sword-light-data-v-07f55b9f {
  0% {
    opacity: 0;
    -webkit-transform: scale(1) translate(-130%, -130%);
    transform: scale(1) translate(-130%, -130%);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translate(-70%, -54%);
    transform: scale(1) translate(-70%, -54%);
  }
}
@-webkit-keyframes right-sword-data-v-07f55b9f {
  0% {
    opacity: 0;
    -webkit-transform: scale(-1, 1) translate(-10%, -100%);
    transform: scale(-1, 1) translate(-10%, -100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(-1, 1) translate(37%, -54%);
    transform: scale(-1, 1) translate(37%, -54%);
  }
}
@-webkit-keyframes left-sword-data-v-07f55b9f {
  0% {
    opacity: 0;
    -webkit-transform: scale(1) translate(-100%, -100%);
    transform: scale(1) translate(-100%, -100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translate(-70%, -54%);
    transform: scale(1) translate(-70%, -54%);
  }
}
@-webkit-keyframes middle-relative-data-v-07f55b9f {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  50% {
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
  75% {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes biger-data-v-07f55b9f {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes right-slide-data-v-07f55b9f {
  0% {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  100% {
    -webkit-transform: translate(0%, 0);
    transform: translate(0%, 0);
  }
}
@-webkit-keyframes left-slide-data-v-07f55b9f {
  0% {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  100% {
    -webkit-transform: translate(0%, 0);
    transform: translate(0%, 0);
  }
}
@-webkit-keyframes flyin-data-v-07f55b9f {
  0% {
    opacity: 0;
    -webkit-transform: scale(1.7);
    transform: scale(1.7);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  75% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
@-webkit-keyframes left-little-data-v-07f55b9f {
  0% {
    -webkit-transform: translate(0, -50%) scale(0.7);
    transform: translate(0, -50%) scale(0.7);
  }
  50% {
    -webkit-transform: translate(-3%, -50%) scale(0.7);
    transform: translate(-3%, -50%) scale(0.7);
  }
  100% {
    -webkit-transform: translate(0%, -50%) scale(0.7);
    transform: translate(0%, -50%) scale(0.7);
  }
}
@-webkit-keyframes right-little-data-v-07f55b9f {
  0% {
    -webkit-transform: translate(0, -50%) scale(0.7);
    transform: translate(0, -50%) scale(0.7);
  }
  50% {
    -webkit-transform: translate(2%, -50%) scale(0.7);
    transform: translate(2%, -50%) scale(0.7);
  }
  100% {
    -webkit-transform: translate(0%, -50%) scale(0.7);
    transform: translate(0%, -50%) scale(0.7);
  }
}
@-webkit-keyframes out-right-data-v-07f55b9f {
  0% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(-30%, 0);
    transform: translate(-30%, 0);
  }
}
@-webkit-keyframes out-left-data-v-07f55b9f {
  0% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(30%, 0);
    transform: translate(30%, 0);
  }
}
@-webkit-keyframes out-mid-data-v-07f55b9f {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes vslight-data-v-07f55b9f {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
//
</style>
// haha
</style>