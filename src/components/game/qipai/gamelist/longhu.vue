<template>
  <div class="longhu">
    <div data-v-e1fcc0e8 id="an">
      <div data-v-e1fcc0e8 class="kj-box">
        <div data-v-e1fcc0e8 class="longbg"></div>
        <div data-v-e1fcc0e8 class="tigerbg"></div>
        <div data-v-e1fcc0e8 class="long"></div>
        <div data-v-e1fcc0e8 class="tiger"></div>
        <div data-v-e1fcc0e8 class="vs"></div>
      </div>
    </div>
    <van-popup v-model="ishow">
      <div data-v-e1fcc0e8 title="2003" class="how-to-play loongtiger-show">
        <div class="game-chess-img how-to-play-top">
          <div class="game-chess-img how-to-play-head"></div>
          <div class="game-chess-img how-to-play-close" id="cl">x</div>
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
                每局由一副扑克牌（不含大小王）开出两张牌，龙虎各1张牌，竞猜龙虎的牌面大小；
                <br />
                <br />「龙」龙胜利即中奖，开和时退本金；
                <br />「虎」虎胜利即中奖，开和时退本金；
                <br />「和」龙虎相同时即中奖；
                <br />
                <br />*开和退本金时，不计入可提现金额的计算；
              </div>
            </div>
            <div>
              <div class="tit">牌型大小：</div>
              <div
                class="row-bottom"
              >K&gt;Q&gt;J&gt;10&gt;9&gt;8&gt;7&gt;6&gt;5&gt;4&gt;3&gt;2&gt;A;牌面大小不比花色，只比点数，K最大，A最小，大小相同时，即为和；</div>
            </div>
            <!---->
            <!---->
            <ul class="how-to-play-list"></ul>
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
          <div data-v-e1fcc0e8 class="loongtiger-chip-head loongtiger-chip-show">
            <div data-v-e1fcc0e8 class="game-loongTiger-img loongtiger-chip-left">
              <div data-v-e1fcc0e8 class="lt-fire-content lt-fire-content-l" style="display: none;"></div>
              <div data-v-e1fcc0e8 id="area-poker1" class="loongtiger-chips pk04">
                <div data-v-e1fcc0e8 title="火焰" id="fire" class="game-loongTiger-img lt-fire lt-fire6" style>
                  <div data-v-e1fcc0e8></div>
                </div>
              </div>
            </div>
            <div data-v-e1fcc0e8 class="game-loongTiger-img loongtiger-chip-right">
              <div data-v-e1fcc0e8 class="lt-fire-content lt-fire-content-t" style="display: none;"></div>
              <div data-v-e1fcc0e8 id="area-poker2" class="loongtiger-chips">
                <div data-v-e1fcc0e8 title="火焰" id="fire2" class="game-loongTiger-img lt-fire lt-fire6" style></div>
              </div>
            </div>
          </div>
          <div data-v-e1fcc0e8 class="loongtiger-chip-head">
            <div data-v-e1fcc0e8>
              <div data-v-e1fcc0e8 class="long-img">
                <div data-v-e1fcc0e8 id="lbg" class="bg-img long-animation5"></div>
              </div>
            </div>
            <div data-v-e1fcc0e8>
              <em data-v-e1fcc0e8 class="game-loongTiger-img loongtiger-chip-vs"></em>
            </div>
            <div data-v-e1fcc0e8>
              <div data-v-e1fcc0e8 class="tiger-img">
                <div data-v-e1fcc0e8 id="tbg" class="bg-img tiger-animation5"></div>
              </div>
            </div>
          </div>
          <!-- <div data-v-e1fcc0e8 class="game-chess-img redblackwar-top-bg"></div> -->
          <!-- <div data-v-e1fcc0e8 class="redblackwar-top-left">
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
          </div>-->
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
      <div class="desk">
        
      </div>
    </div>
    <lotte-r :cpl="cpl" class="cpr" @chek="ck"></lotte-r>
    <Foo-ter @reback="reback" @sub="sub" :pr="price" :start="start"></Foo-ter>
    <div class="timerdjs" v-show="jishil">{{str}}</div>
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
      n: "jinhua", //全局牛n
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
      str: "停止下注",
      tl:null
    };
  },
  beforeDestroy() {
    createjs.Sound.stop();
    window.clearInterval(this.timer);
    window.clearInterval(this.tl);
    this.timer = null;
    this.tl=null
    this.$socket.emit("qtniuniu", {
      username: JSON.parse(sessionStorage.getItem("userinfo")).name
    });
  },
  computed: {},
  mounted() {
    let tl = 0;
    this.tl=setInterval(() => {
      tl++;
      if (tl >= 8) {
        tl = 1;
      }
      $("#fire,#fire2").attr("class","game-loongTiger-img lt-fire lt-fire"+tl)
      $("#lbg").attr("class", "bg-img long-animation" + tl);
      $("#tbg").attr("class", "bg-img tiger-animation" + tl);
    }, 200);
    this.sockets.subscribe("rb2", data => {
      this.playdate = parseInt(data.msg.playdate);
      this.puklist = JSON.parse(data.msg.playnum);
    });
    this.sockets.subscribe("move", data => {
      this.chiplist.push(data.tz);
      this.list.push(data.tz);
    });
    this.sockets.subscribe("qtrbwar", data => {
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
        { id: "bg", src: "/rbwar/lhbg.mp3" },
        { id: "daojishi", src: "/mp3/daojishi.mp3" },
        { id: "dingdong", src: "/mp3/dingdong.wav" },
        { id: "start", src: "/rbwar/start.mp3" },
        { id: "kaipai", src: "/mp3/kaipai.mp3" },
        { id: "fapai", src: "/mp3/fapai.mp3" },
        { id: "tingzhu", src: "/mp3/tingzhu.mp3" },
        { id: "shouzhu", src: "/mp3/shouzhu.mp3" },
        { id: "lotter", src: "/mp3/lotter.mp3" },
        { id: "jinbi", src: "/mp3/jinbi.mp3" },
        { id: "baozi", src: "/rbwar/baozi.mp3" },
        { id: "jinshun", src: "/rbwar/shunjin.mp3" },
        { id: "jinhua", src: "/rbwar/jinhua.mp3" },
        { id: "shunzi", src: "/rbwar/shunzi.mp3" },
        { id: "duizi", src: "/rbwar/duizi.mp3" },
        { id: "danzhang", src: "/rbwar/danzhang.mp3" },
        { id: "chexiao", src: "/rbwar/chexiao.mp3" },
        { id: "chenggong", src: "/rbwar/chenggong.mp3" },
        { id: "bwin", src: "/rbwar/bwin.mp3" },
        { id: "rwin", src: "/rbwar/rwin.mp3" },
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
      if (x.length == 2) {
        let winlist = [{ rwin: false }, { bwin: false }, { wluck: false }];
        // setTimeout(() => {
        //   (Math.random() * 10) % 2 == 0 ? this.wanjiashou() : this.zhuangshou();
        // }, 2000);
        let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
        let size = [
          "baozi",
          "jinshun",
          "jinhua",
          "shunzi",
          "duizi",
          "danzhang"
        ].reverse();
        // console.log(x);
        //校验同牌
        if (x[0].niu == x[1].niu) {
          if (s.indexOf(x[0].maxnum) > s.indexOf(x[1].maxnum)) {
            winlist[0].rwin = true;
          } else {
            winlist[1].bwin = true;
          }
          if (x[0].maxnum == x[1].maxnum) {
            let hsize = [1, 0, 2, 3].reverse();
            if (hsize.indexOf(x[0].maxhua) > hsize.indexOf(x[1].maxhua)) {
              winlist[0].rwin = true;
            } else {
              winlist[1].bwin = true;
            }
          }
        } else {
          if (size.indexOf(x[0].niu) > size.indexOf(x[1].niu)) {
            winlist[0].rwin = true;
          } else {
            winlist[1].bwin = true;
          }
        }
        if (winlist[0].rwin) {
          createjs.Sound.play("rwin");
          $(".redblackwar-red").addClass("on");
        } else {
          $(".redblackwar-black").addClass("on");
          createjs.Sound.play("bwin");
        }
        if (winlist[0].rwin && size.indexOf(x[0].niu) != 0) {
          $(".redblackwar-hit").addClass("on");
          console.log("luck", size.indexOf(x[0].niu));
        }
        if (winlist[1].bwin && size.indexOf(x[1].niu) != 0) {
          $(".redblackwar-hit").addClass("on");
          console.log("luck", size.indexOf(x[1].niu));
        }
        console.log(winlist);

        setTimeout(() => {
          $(".redblackwar-red,.redblackwar-black,.redblackwar-hit").removeClass(
            "on"
          );
        }, 10000);
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
        this.playdate = parseInt(data.msg.playdate);
        this.puklist = JSON.parse(data.msg.playnum);
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
            $("#an").addClass("longtiger-kj-container");
            setTimeout(() => {
              $("#an").removeClass("longtiger-kj-container");
            }, 2000);
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
        case "jinshun":
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
        default:
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
      let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
      let guize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
      let jg = {};
      //校验最大单牌
      jg.maxnum = _.sortBy(j, x => s.indexOf(x.num))[2].num;
      jg.niu = "danzhang";
      //校验最大花色
      jg.maxhua = _.sortBy(j, x => s.indexOf(x.num))[2].hua;
      //校验baozi
      for (let i in _(j.map(x => x.num)).countBy()) {
        if (_(j.map(x => x.num)).countBy()[i] == 2) {
          //校验duizi的值
          jg.duizi = i;
          jg.niu = "duizi";
        }
        if (_(j.map(x => x.num)).countBy()[i] == 3) {
          //校验baozi的值
          jg.niu = "baozi";
          jg.baozi = i;
        }
      }
      jg.maxleng = Math.max(...Object.values(_(j.map(x => x.num)).countBy()));
      if (jg.maxleng == 3) {
        jg.niu = "baozi";
      }
      //校验顺子
      if (
        guize.indexOf(_.sortBy(j, x => x.num)[0]) + 1 ==
          guize.indexOf(_.sortBy(j, x => x.num)[1]) &&
        guize.indexOf(_.sortBy(j, x => x.num)[1]) + 1 ==
          guize.indexOf(_.sortBy(j, x => x.num)[2])
      ) {
        jg.niu = "shunzi";
        jg.shunzi = _.sortBy(j, x => x.num)[2];
      }
      //校验同花
      if (j[0].hua == j[1].hua && j[1].hua == j[2].hua) {
        jg.niu = "jinhua";
      }
      //校验同花顺
      if (jg.shunzi && jg.jinhua) {
        jg.niu = "jinshun";
      }
      console.log(jg);
      this.n = jg.niu;
      this.jieguo.push(jg);
      createjs.Sound.play(this.n);
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
              this.rbme(this.puklist.filter(x => x.type == i));
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
#an {
  position: fixed;
}
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
.redblack-king {
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
  margin: 5px;
  width: 77px;
  background: url(https://images.imags-google.com/game/redBlackIcon.png)
    no-repeat;
  // background-size: auto 100vh;
  background-position: center -4.55rem;
  transition: all 0.7s;
  background-size: 2rem;
  // border:1px dashed red;
  transform: rotateX(90deg);
  // background-position: -12px 43%;
}
.ad {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999999999;
  background: url(https://images.imags-google.com/game/lh-progress.jpg);
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
.longhu {
  display: flex;
  flex-flow: column;
  overflow: scroll;
  background: url(https://images.imags-google.com/game/loongTigerBg.jpg);
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
  transform: rotateX(2deg) translateX(-190px);
  border-radius: 8px !important;
  position: fixed;
  bottom: 97px;
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
.d {
  flex: 1;
  margin-top: 129px;
  .desk {
    width: 100%;
    perspective: 200px;
    height: 108%;
    justify-content: center;
    display: flex;
    align-items: center;
    background: url(https://images.imags-google.com/game/loongTigerFloor.png);
    background-size: 100% 100vh;
    background-position: 0 -304px;
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
@font-face {
  font-family: GamesFont;
  src: url(/static/font/fzcjh.ttf);
}
.ceshidonghua {
  position: fixed;
  z-index: 1000;
}
/*公共部分*/
.dafa-toast {
  position: fixed;
  left: 0;
  right: 0;
  max-width: 12rem;
  margin: 0 auto;
  top: 26%;
  /*margin-top: -10px;*/
  text-align: center;
}
.dafa-toast.toast-warning span {
  color: #fefc98;
}
.dafa-toast span {
  display: inline-block;
  min-width: 7.44186rem;
  text-align: center;
  font-size: 0.6rem;
  padding: 0.13953rem 0.74419rem;
  color: #0ac20a;
  text-shadow: 0 0 0.04651rem rgba(0, 0, 0, 0.3);
  background: url("/static/img/toast-bg.png") no-repeat center;
  background-size: 100% 100%;
}
.games-font {
  font-family: GamesFont;
}
/* 修改盘口筹码index值 */
.chip-zindex .animation-chip:nth-of-type(1) {
  z-index: 15;
}
.chip-zindex .animation-chip:nth-of-type(2) {
  z-index: 14;
}
.chip-zindex .animation-chip:nth-of-type(3) {
  z-index: 13;
}
.chip-zindex .animation-chip:nth-of-type(4) {
  z-index: 12;
}
.chip-zindex .animation-chip:nth-of-type(5) {
  z-index: 11;
}
.chip-zindex .animation-chip:nth-of-type(6) {
  z-index: 10;
}
/**图片精灵 */
.game-chess-img {
  background: url("https://images.imags-google.com/game/nnicon.png?1") no-repeat;
  background-size: 100vw auto;
}
/** 龙虎精灵图 **/
.game-loongTiger-img {
  background: url(https://images.imags-google.com/game/loongTiger.png) no-repeat;
  background-size: 100vw auto;
}
.game-chess-card {
  background: url(https://images.imags-google.com/game/puke.png) no-repeat;
  background-size: 100vw auto;
}
.game-ranking-img {
  background: url(https://images.imags-google.com/game/popupList.png) no-repeat;
  background-size: 100vw auto;
}
/** 筹码 **/
.game-chip-img {
  background: url(https://images.imags-google.com/game/chipIcon.png) no-repeat;
  background-size: 100vw auto;
}
/** 龙虎背景线 **/
.game-loongtiger-line {
  background: url(https://images.imags-google.com/game/longtiger-line.jpg)
    center center repeat;
  background-size: 100vw auto;
  width: 100%;
  height: 100%;
}
/** 奔驰宝马精灵图 **/
.game-benzbmw-img {
  background: url(https://images.imags-google.com/game/benzBMW-spirit.png)
    no-repeat;
  background-size: 100vw auto;
}
.game-benzbmw-inside {
  background: url(https://images.imags-google.com/game/benzBMW-inup.png)
    no-repeat;
  background-size: 97vw auto;
}
.benzbmw-bg {
  background: url(https://images.imags-google.com/game/benzBMW-bg.jpg) center
    bottom repeat-y;
  background-size: 100vw auto;
  width: 100%;
  height: 100%;
}
/** 骰宝精灵图 **/
.game-sicbo-img {
  background: url(https://images.imags-google.com/game/sicbo-spirit.png)
    no-repeat;
  background-size: 100vw auto;
}
.game-sicbo-girl {
  background: url(https://images.imags-google.com/game/sicbo-girl.png) no-repeat;
  background-size: 100vw auto;
}
em {
  font-style: normal;
}
.poker-start {
  position: absolute;
  top: 0;
  left: 0;
}
/** 公共倒计时 开始下注，停止下注，暂停下注*/
/* .game-runtime-list{
  position: absolute;
  top:35%;
  left:50%;
  margin-left:-16vw;
  z-index: 20;
  & > div{
    width: 31vw;
    height: 31vw;
    transition:opacity .3s;
    margin: 0 auto;
    opacity: 0;
    background-position: -50% -50%;
    & .on{
      opacity: 1;
    }
    &:nth-of-type(1){
      background-position: 94% 32.3%;
    }
    &:nth-of-type(2){
      background-position: 50% 32.3%;
    }
    &:nth-of-type(3){
      background-position: 4% 32.3%;
    }
  }
} */
.game-enter-out {
  position: absolute;
  top: 35%;
  left: 50%;
  margin-left: -40vw;
  z-index: 20;
}
.game-enter-out > div {
  width: 80vw;
  height: 18vw;
  margin: 0 auto;
}
.game-enter-out .game-enter-start {
  background-position: -7% 44.5%;
  /**开始下注*/
}
.game-enter-out .game-enter-stop {
  background-position: -7% 53.7%;
  /**停止下注*/
}
.game-enter-out .game-enter-pause {
  background-position: -7% 63%;
  /**暂停下注*/
}
/** 公共倒计时 开始下注，停止下注，暂停下注*/
.resultMoney {
  padding-right: 0.27907rem;
  font-size: 0.74419rem;
  font-weight: 100;
}
.resultMoney .win {
  color: #fdfb54;
}
.resultMoney .lose {
  color: #afd5ff;
}
.resultMoney > i {
  font-style: normal;
}
/** 其它用户图标 **/
.rb-war .game-other-user {
  top: 54vw;
}
.nn100 .game-other-user {
  top: 42vw;
}
@media only screen and (device-width: 375px) and (max-height: 600px) {
  .rb-war .game-other-user {
    top: 43vw;
  }
}
.game-other-user {
  position: absolute;
  right: 1vw;
  top: 45vw;
  z-index: 8;
}
.game-other-user .resultMoney {
  opacity: 0;
  position: absolute;
  top: 0.46512rem;
  right: 0;
  width: 5rem;
  text-align: right;
}
.game-other-user.redblackwar {
  top: 52vw;
}
.game-other-user .game-other-icon {
  position: relative;
  width: 10vw;
  height: 15vw;
}
.game-other-user .game-other-icon .game-other-user {
  position: absolute;
  width: 100%;
  height: 11.5vw;
  left: 0;
  top: 0;
  margin-bottom: 5vw;
}
.game-other-user .game-other-icon .game-other-user.play {
  -webkit-animation: fastPlay 300ms 1;
  animation: fastPlay 300ms 1;
}
.game-other-user .game-other-icon .game-other-user > em {
  display: block;
  width: 100%;
  height: 100%;
  background-position: 98% 75%;
  /*background-position: 98% 76%;*/
}
.game-other-user .game-other-icon > span {
  /*font-weight: bold;*/
  position: absolute;
  font-size: 0.5rem;
  width: 100%;
  text-align: center;
  color: #eec16c;
  bottom: 0;
}
/**公共头部 */
.chess-head {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 12vw;
  /* height:1.9rem; */
  background-position: 0 3.4%;
}
.chess-head .chess-head-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}
.chess-head .chess-head-list .chess-head-left {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /*margin-top:.2rem;*/
  text-align: center;
}
.chess-head .chess-head-list .chess-head-middle {
  -webkit-box-flex: 5;
  -ms-flex: 5;
  flex: 5;
  height: 8vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: -1.1vw;
}
.chess-head .chess-head-list .chess-head-middle .head-zhuang > em {
  display: block;
  width: 11vw;
  height: 9vw;
  background-position: 66.1% 34.4%;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-zhuang
  > em.nn100-middle-img {
  background-position: 51.7% 34.4%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img {
  width: 36%;
  background-position: 0.5% 12.2%;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  -ms-flex-line-pack: center;
  align-content: center;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .left-icon {
  float: left;
  width: 9.5vw;
  height: 6.3vw;
  line-height: 6.5vw;
  font-size: 4vw;
  margin-top: 1.5vw;
  text-align: center;
  display: inline-block;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .number-box {
  font-size: 3vw;
  width: 14vw;
  display: table-cell;
  vertical-align: middle;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon {
  float: right;
  display: inline-block;
  margin-right: 0;
  width: 5vw;
  height: 6vw;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-position: 39% 35.3%;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img
  .right-icon
  i.on {
  margin-top: 1vw;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime {
  background-position: 42.5% 12.2%;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .left-icon {
  width: 5vw;
  height: 6vw;
  margin: 0 0 0 0;
  display: inline-block;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .left-icon
  > i {
  display: inline-block;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-position: 39% 35.3%;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .left-icon
  > i.on {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  margin-top: 1vw;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .right-icon {
  width: 8.5vw;
  height: 7vw;
  line-height: 6.5vw;
  margin: 1.5vw 0 0 0;
  text-align: center;
  font-size: 4vw;
  display: inline-block;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.nn100-middle-img {
  background-position: 0% 45.9%;
}
.chess-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.nn100-middle-img.head-middle-runtime {
  background-position: 40% 45.9%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .padd1 {
  padding-top: 1vw;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .padd5 {
  padding-top: 0.7vw;
}
.chess-head .chess-head-list .chess-head-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /*margin-top:.2rem;*/
  text-align: center;
  position: relative;
}
/* .head-left-btn{

  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:14.5% 12.3%;
}
.head-right-btn{
  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:1.9% 12.3%;
} */
.head-left-btn {
  /* width:1.5rem;
  height:1.5rem; */
  width: 9vw;
  height: 9vw;
  margin: 0 auto;
  background-position: 1.7% 35.1%;
}
.head-left-btn > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-position: 14.7% 35.2%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.head-left-btn > em.on {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.head-right-btn {
  /* width:1.5rem;
  height:1.5rem; */
  width: 9vw;
  height: 9vw;
  margin: 0 auto;
  background-position: 1.7% 35.1%;
}
.head-right-btn > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-position: 26.7% 35.2%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.head-right-btn > em.on {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
/**公共头部结束 */
/**公共底部 */
.chess-foot {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 20;
  height: 8vw;
  /* height:1.3rem; */
  background-position: 0 0;
}
.chess-foot .game-foot-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.chess-foot .game-foot-btn .resultMoney {
  position: absolute;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 100;
  top: -100%;
}
.chess-foot .game-foot-btn > div {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.chess-foot .game-foot-btn .game-foot-left {
  background-position: 106% 34.4%;
}
.chess-foot .game-foot-btn .game-foot-left.not {
  opacity: 0.3;
}
.chess-foot .game-foot-btn .game-foot-middle {
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money {
  position: relative;
  display: block;
  width: 30vw;
  margin: 0 auto;
  background-position: 59% 8.2%;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money > span {
  color: #fff;
  display: block;
  width: 80%;
  height: 8vw;
  line-height: 8vw;
  font-size: 3vw;
  margin: 0 auto;
  text-align: center;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money > em {
  position: absolute;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money .foot-money-icon {
  left: 0.1vw;
  top: 0;
  width: 8vw;
  height: 8vw;
  background-position: 27% 8.2%;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money .foot-add-btn {
  right: 1vw;
  top: 0;
  width: 8vw;
  height: 8vw;
  background-position: 37% 8.2%;
}
.chess-foot .game-foot-btn .game-foot-right {
  background-position: 112% 38.5%;
}
.chess-foot .game-foot-btn .game-foot-right.not {
  opacity: 0.3;
}
.chess-foot {
  /**选择筹码*/
}
.chess-foot .foot-slide-chip {
  position: absolute;
  bottom: 8vw;
  width: 100%;
  height: 16vw;
}
.chess-foot .foot-slide-chip .foot-slide-list {
  position: absolute;
  top: -2vw;
  width: 100%;
}
.chess-foot .foot-slide-chip .chip-left-btn {
  position: absolute;
  left: 1vw;
  top: 5vw;
  width: 6vw;
  height: 8vw;
  background-position: 19% 8.5%;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  opacity: 0.5;
}
.chess-foot .foot-slide-chip .chip-left-btn.on {
  opacity: 1;
}
.chess-foot .foot-slide-chip .chip-right-btn {
  position: absolute;
  right: 1vw;
  top: 5vw;
  width: 6vw;
  height: 8vw;
  background-position: 19% 8.5%;
  opacity: 0.5;
}
.chess-foot .foot-slide-chip .chip-right-btn.on {
  opacity: 1;
}
.chess-foot .foot-slide-chip .foot-slide-main {
  margin: 0 6vw;
  width: 88vw;
  overflow-y: hidden;
  overflow-x: hidden;
  height: 19vw;
}
.chess-foot .foot-slide-chip .foot-slide-main ul {
  display: block;
  width: 158.745vw;
  /*width:140.8vw; 少500*/
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin-top: 0.7vw;
  height: 100%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li {
  position: relative;
  display: inline-block;
  float: left;
  height: 100%;
  margin: 0 1vw;
  width: 15.6vw;
  background-position: -100% -100%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg1 {
  background-position: 0.5% 6%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg5 {
  background-position: 23.5% 6%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg10 {
  background-position: 46.5% 6%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg50 {
  background-position: 69.9% 6%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg100 {
  background-position: 93% 6%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg500 {
  background-position: 0.5% 37%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg1000 {
  background-position: 23.5% 37%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg5000 {
  background-position: 47% 37%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg10000 {
  background-position: 69.9% 37%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li > em {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip1 {
  background-position: 0.7% 67.8%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip5 {
  background-position: 23.6% 67.8%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip10 {
  background-position: 46.7% 67.8%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip50 {
  background-position: 69.7% 67.8%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip100 {
  background-position: 92.8% 67.8%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip500 {
  background-position: 0.5% 96.1%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip1000 {
  background-position: 23.8% 96.1%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip5000 {
  background-position: 46.8% 96.1%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip10000 {
  background-position: 69.8% 96.1%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul {
  /*& .chip1{
          background-position: .7% 16.8%;
        }
        & .chip5{
          background-position: 18.8% 16.8%;
        }
        & .chip10{
          background-position: 36.7% 16.8%;
        }
        & .chip50{
          background-position: 54.7% 16.8%;
        }
        & .chip100{
          background-position: 72.8% 16.8%;
        }
        & .chip500{
          background-position: .7% 23.8%;
        }
        & .chip1000{
          background-position: 18.6% 23.8%;
        }
        & .chip10000{
          background-position: 36.8% 23.8%;
        }*/
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.gray {
  /*filter: grayscale(100%) brightness(.5);
          filter: gray;*/
  opacity: 0.4;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on {
  -webkit-transform: translateY(-1.5vw);
  transform: translateY(-1.5vw);
}
.chess-foot .foot-slide-chip .foot-slide-main ul.loongtiger-ul li.on {
  -webkit-transform: translateY(-1.9vw);
  transform: translateY(-1.9vw);
}
.chess-foot .foot-slide-chip .foot-chip-bg {
  display: block;
  margin-top: 8vw;
  width: 100%;
  height: 8vw;
  background: rgba(0, 0, 0, 0.5);
}
.chess-foot .foot-slide-chip .foot-chip-bg .foot-chip-bgli {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin: 0 6vw;
  height: 100%;
}
.chess-foot .foot-slide-chip .foot-chip-bg .foot-chip-bgli span {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0;
  height: 100%;
  background-position: -2% 8.6%;
}
.chess-foot .foot-slide-chip .foot-chip-longtiger-bg {
  display: block;
  margin-top: -0.5vw;
  width: 100%;
  height: 18vw;
}
.chess-foot .foot-slide-chip .foot-chip-longtiger-bg .foot-chip-bgli {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin: 0 6vw;
  height: 100%;
}
.chess-foot .foot-slide-chip .foot-chip-longtiger-bg .foot-chip-bgli span {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0;
  height: 100%;
  background-position: 95.4% 38.4%;
}
/**滚动条 */
.foot-slide-main::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0.27907rem rgba(0, 0, 0, 0.3);
  /* background-color: #F5F5F5; */
}
.foot-slide-main::-webkit-scrollbar {
  height: 1vw;
  /* background-color: #F5F5F5; */
}
.foot-slide-main::-webkit-scrollbar-thumb {
  /*  background-color: #666; */
}
/**公共底部结束 */
/**主体内容 */
.chess-all-body {
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* overflow-x: hidden; */
  background: #48100f url(https://images.imags-google.com/game/nn100bg.jpg) top
    center no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.red-black-war {
  overflow: hidden;
  background: #bd7b4b url(https://images.imags-google.com/game/redBlackWar.jpg)
    top center no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.loong-Tiger-body {
  overflow: hidden;
  background: url(https://images.imags-google.com/game/loongTigerBg.jpg) top
    center no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.benzbmw-body {
  overflow: hidden;
  background: url(https://images.imags-google.com/game/benzBMW.jpg) top center
    no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.sicbo-body {
  background: #0b0014 url(https://images.imags-google.com/game/sicbo-bg.jpg) top
    center no-repeat;
  background-size: 100vw auto;
}
/**百人牛牛 样式 */
.nn100-chipbg {
  position: fixed;
  z-index: 0;
  background: url(https://images.imags-google.com/game/nn100bg2.png) bottom
    center no-repeat;
  background-size: 100vw auto;
  width: 100%;
  height: 100%;
  bottom: -3vh;
}
.chess-nn100-start {
  margin-top: 12vw;
  height: calc(100vh - 20vw);
  position: relative;
  overflow: hidden;
}
.chess-nn100-start .nn100-rotate-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 4vw;
  height: 25vw;
}
.chess-nn100-start .nn100-rotate-card > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 1vw;
  height: 18vw;
}
.chess-nn100-start .nn100-rotate-card > div > span {
  display: block;
  width: 100%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title {
  height: 6vw;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(1) {
  display: inline-block;
  width: 30%;
  height: 100%;
  background-position: 66% 12.6%;
}
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(1).card-1,
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(1).card-2,
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(1).card-3 {
  background-position: 74.5% 12.6%;
}
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(2) {
  display: inline-block;
  width: 20%;
  height: 100%;
  background-position: 83% 12.6%;
}
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(2).card-1 {
  background-position: 83% 12.6%;
}
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(2).card-2 {
  background-position: 90% 12.6%;
}
.chess-nn100-start
  .nn100-rotate-card
  > div
  .rotate-card-title
  i:nth-of-type(2).card-3 {
  background-position: 98.5% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list {
  height: 9vw;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  position: relative;
}
#cl{
      text-align: center;
    line-height: 16px;
    color:white;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em {
  position: absolute;
  left: 0;
  top: 0;
  width: 11vw;
  height: 15vw;
  background-position: 84.3% 98%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-0 {
  left: 0;
  top: 0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-1 {
  left: 3vw;
  top: 0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-2 {
  left: 6vw;
  top: 0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-3 {
  left: 9vw;
  top: 0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-4 {
  left: 12vw;
  top: 0;
}
/**开奖走势栏 */
.prev-open-number {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 1vw;
  width: 72vw;
  padding: 0 1vw;
  background-position: 2% 81%;
  /* background:rgba(255,255,255,.1); */
}
.prev-open-number > div {
  /*width:100%;*/
  margin: 0.3vw 0.05vw;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding: 0 0.9vw;
}
.prev-open-number > div:nth-of-type(1).new:before {
  content: "";
  background: url(https://images.imags-google.com/game/nnicon.png?1) no-repeat;
  background-size: 100vw auto;
  position: absolute;
  left: 4.5vw;
  top: -1.6vw;
  width: 5vw;
  height: 3vw;
  background-position: 63% 45.1%;
}
.prev-open-number > div > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 4vw;
  height: 6vw;
}
.prev-open-number > div > em.win {
  background-position: 69.1% 47%;
  /*background-position:82.8% 9%;*/
}
.prev-open-number > div > em.win0 {
  background-position: 69.1% 47%;
  /*background-position:82.8% 9%;*/
}
.prev-open-number > div > em.win1 {
  background-position: 74% 47%;
  /*background-position:82.8% 9%;*/
}
.prev-open-number > div > em.win2 {
  background-position: 79.1% 47%;
  /*background-position:82.8% 9%;*/
}
.prev-open-number > div > em.lose {
  background-position: 69.1% 45.08%;
  /*background-position:75% 8.89%;*/
}
.prev-open-number > div > em.lose0 {
  background-position: 69.1% 45.08%;
  /*background-position:75% 8.89%;*/
}
.prev-open-number > div > em.lose1 {
  background-position: 74% 45.08%;
  /*background-position:75% 8.89%;*/
}
.prev-open-number > div > em.lose2 {
  background-position: 79% 45.08%;
  /*background-position:75% 8.89%;*/
}
.prev-open-number > div {
  /*&:before{
      position:absolute;
      right:0;
      content:'';
      top:0;
      width:1px;
      background:rgba(0,0,0,.2);
      box-shadow:.5px .5px 0 rgba(255,255,255,.2);
      height:4vw;
    }*/
  /*&:last-child:before{
      width:0;
    }*/
}
/** 牛牛总金额 **/
.nnall-beting-money {
  position: fixed;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  bottom: 113vw;
  /* top:54vw; */
}
.nnall-beting-money .all-beting-money {
  margin: 0 auto;
  font-size: 0.5em;
  padding: 1vw 3vw;
  display: inline-block;
  color: #fff;
  border-radius: 5vw;
  background: rgba(82, 14, 13, 0.4);
  /*text-shadow: 0.04651rem 0.04651rem 0.04651rem rgba(0, 0, 0, .3);*/
}
.nnall-beting-money .all-beting-money > span {
  color: #ce5855;
  position: relative;
}
.nnall-beting-money .all-beting-money > span:before {
  /*content: attr(data-text);*/
  position: absolute;
  /*text-shadow: 0 1px red, 1px 0 red, -1px 0 red, 0 -1px red;
        -webkit-text-stroke: 2px red;*/
  z-index: -1;
}
.nnall-beting-money .all-beting-money > em {
  /*font-weight: bold;*/
  color: #f9c970;
}
/** 牛牛100投注区 */
.betting-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  /* height:calc(100vh-70vw); */
  height: 107vw;
  position: fixed;
  bottom: 18vw;
  width: 100%;
}
.betting-box .betting-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 2vw 10vw;
  font-size: 0.7em;
}
.betting-box .betting-list > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2vw 0;
  width: 35%;
  font-size: 0.7em;
  border-radius: 2vw;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 26vw;
}
.betting-box .betting-list > div:not(.bet-inset-icon) {
  background: rgba(82, 14, 13, 0.4);
}
.betting-box .betting-list > div.bet-inset-icon {
  width: 16%;
  height: 17vw;
  background-position: 23% 40%;
}
.betting-box .betting-list > div .opacity-ele {
  opacity: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
}
.betting-box .betting-list > div > span {
  display: block;
  color: #ce5855;
  /*font-size:.7em;*/
  padding: 0.2vw;
  width: 100%;
}
.betting-box .betting-list > div > span > em {
  display: block;
}
.betting-box .betting-list > div > span > em:nth-of-type(1) {
  font-size: 1.8em;
  line-height: 100%;
}
.betting-box .betting-list > div > span > em:nth-of-type(2) {
  font-size: 0.4rem;
  line-height: 100%;
}
.betting-box .betting-list > div > span > em:nth-of-type(3) {
  font-size: 0.5rem !important;
}
.betting-box .betting-list > div > span.bet-bg {
  color: #000;
  font-size: 0.7em;
  /*font-weight: bold;*/
  opacity: 0.3;
}
.betting-box .betting-list > div > span.self-bet {
  color: #f9c970;
  /*font-weight: bold;*/
  background: rgba(82, 14, 13, 0.4);
}
.betting-box .betting-list > div > span.self-bet > em {
  font-size: 1em;
  color: #f9c970;
}
.betting-box .betting-list > div > span.other-bet {
  /*text-shadow: 1px 1px 1px rgba(0,0,0,.3);*/
}
.betting-box .betting-list > div > span.other-bet > em {
  font-size: 1em;
  color: #d15a56;
}
/** 牛牛100 样式结束 **/
/** 红黑大战样式开始 **/
.redblack-chipbg {
  position: fixed;
  background: url(https://images.imags-google.com/game/redblackbg.png) bottom
    center no-repeat;
  background-size: 100vw auto;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.chess-redblackwar-start {
  /* margin-top:12vw; */
  position: relative;
  height: 100vh;
  /* height: calc(100vh - 24vw); */
  -webkit-perspective: 800;
  perspective: 800;
  overflow: hidden;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.chess-redblackwar-start .redblackwar-chess-card {
  position: relative;
  width: 100%;
  height: 33vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-bg {
  width: 100%;
  height: 16vw;
  margin-top: 16.5vw;
  background-position: 0% 88.3%;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-left {
  position: absolute;
  left: -0.27907rem;
  top: -3vw;
  width: 23vw;
  height: 34vw;
  background-position: 10% 77.5%;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 23vw;
  height: 34vw;
  background-position: 45% 77.5%;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card {
  position: absolute;
  width: 57vw;
  height: 15vw;
  top: 0.2vw;
  left: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin-left: -28.5vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card > div {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card > div > em {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 11vw;
  height: 100%;
  margin: 0 0.2vw;
}
.chess-redblackwar-start
  .redblackwar-chess-card
  .redblackwar-card
  > div
  > em.rbcard1 {
  left: 2vw;
}
.chess-redblackwar-start
  .redblackwar-chess-card
  .redblackwar-card
  > div
  > em.rbcard2 {
  left: 8vw;
}
.chess-redblackwar-start
  .redblackwar-chess-card
  .redblackwar-card
  > div
  > em.rbcard3 {
  left: 14vw;
}
.chess-redblackwar-start
  .redblackwar-chess-card
  .redblackwar-card
  .reblackwar-vs {
  position: absolute;
  width: 10.1vw;
  left: 50%;
  height: 100%;
  margin-left: -5.5vw;
  -webkit-transform: scale(1);
  transform: scale(1);
  background-position: 97.2% 43%;
}
.chess-redblackwar-start {
  /** 红黑大战开奖走势区 **/
}
.chess-redblackwar-start .redblackwar-open-number {
  position: relative;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  width: 49vw;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1vw;
}
.chess-redblackwar-start .redblackwar-open-number > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.chess-redblackwar-start .redblackwar-open-number > div.redblackwar-open-left {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  /*width: 56vw!important;*/
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-trend-btn {
  width: 9vw;
  height: 9vw;
  background-position: 92% 25%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  width: 100%;
}
.chess-redblackwar-start
  .redblackwar-open-number
  .redblackwar-open-dot
  .redblack-new {
  position: absolute;
  left: 0;
  top: 0;
  width: 5vw;
  height: 4vw;
  background-position: 64.1% 47.2%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 4vw;
  height: 4vw;
  background-position: 89.8% 8.9%;
}
.chess-redblackwar-start
  .redblackwar-open-number
  .redblackwar-open-dot
  > em.red {
  background-position: 96.8% 8.9%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  width: 100%;
}
.chess-redblackwar-start
  .redblackwar-open-number
  .redblackwar-open-square
  > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 8vw;
  height: 5vw;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-position: 97.2% 70.3%;
}
.chess-redblackwar-start
  .redblackwar-open-number
  .redblackwar-open-square
  > em
  > i {
  font-size: 2.8vw;
  color: #fff;
  text-align: center;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  /*transform: scale(.8) translateY(.7vw);*/
  font-style: normal;
  margin: 0 auto;
  margin-top: 0.5vw;
}
.chess-redblackwar-start
  .redblackwar-open-number
  .redblackwar-open-square
  > em.blue {
  background-position: 83.2% 70.3%;
}
.chess-redblackwar-start .redblackwar-all-money {
  margin: 0 auto;
  position: absolute;
  top: 31.5vh;
  width: 100%;
  text-align: center;
}
.chess-redblackwar-start .redblackwar-all-money > div {
  display: inline-block;
  background: rgba(114, 30, 14, 0.3);
  font-size: 0.5em;
  width: auto;
  padding: 0.8vw 3vw;
  border-radius: 5vw;
}
.chess-redblackwar-start .redblackwar-all-money > div span {
  /*color:#f9c970;
          font-size: .55rem;
          text-shadow: 1px 1px 2px rgba(3, 4, 4,.2);*/
}
.chess-redblackwar-start {
  /** 红黑大战投注区 **/
}
.chess-redblackwar-start .redblackwar-betting {
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  bottom: 10vw;
  /*top:34vh;*/
  width: 100%;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /*height: calc(100vh-59vh);*/
  /*height: calc(100vh-65vh);*/
  height: 65vw;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-transform: rotateX(31deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(31deg) rotateY(0deg) rotateZ(0deg);
}
.chess-redblackwar-start .redblackwar-betting > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 70%;
  height: 100%;
}
.chess-redblackwar-start .redblackwar-betting > div > div {
  width: 100%;
  height: 100%;
  border-radius: 2vw;
  border: 0.5vw solid rgba(221, 98, 70, 0.43922);
  overflow: hidden;
}
.chess-redblackwar-start .redblackwar-betting > div > div.tl {
  border-radius: 2vw 0 0 0;
}
.chess-redblackwar-start .redblackwar-betting > div > div.tr {
  border-radius: 0 2vw 0 0;
  position: relative;
  left: -0.5vw;
}
.chess-redblackwar-start .redblackwar-betting > div > div.redblackwar-hit {
  /*border-top: 0;*/
  margin-top: -0.5vw;
  width: calc(100% - 0.5vw);
}
.chess-redblackwar-start .redblackwar-betting > div > div.on {
  -webkit-animation: lightshadow 3s infinite;
  animation: lightshadow 3s infinite;
  border-color: #fd9781;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red,
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-black,
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit {
  font-size: 0.7em;
  color: rgba(86, 16, 2, 0.79);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(1),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(1),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(1) {
  font-size: 0.7em;
  color: #ffdcab;
  width: 34vw;
  margin: 0 auto;
  border-radius: 0 0 2.5vw 2.5vw;
  display: block;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#a91604),
    to(#c3330e)
  );
  background-image: linear-gradient(to top, #a91604, #c3330e);
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(2),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(2),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(2) {
  opacity: 0.7;
  font-size: 0.8em;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(2)
  > span,
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(2)
  > span,
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(2)
  > span {
  display: block;
  /*text-shadow: 1px 1px 0 #c36011;*/
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(2)
  > span:nth-of-type(1),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(2)
  > span:nth-of-type(1),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(2)
  > span:nth-of-type(1) {
  font-size: 1.3em;
  /*font-weight: bold;*/
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(2)
  > span:nth-of-type(3),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(2)
  > span:nth-of-type(3),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(2)
  > span:nth-of-type(3) {
  font-size: 0.55814rem;
  /*font-weight: bold;*/
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(3),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(3),
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(3) {
  /*background: -webkit-linear-gradient(top,#a84032,#a84032 38%,#8b2713 68%,#8b2713);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;*/
  /*text-shadow: 1px 1px 1px #791e0c;*/
  font-size: 0.8em;
  padding: 0.2vw;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(1) {
  border-radius: 0 0 0 2.5vw;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-red
  div:nth-of-type(1)
  > em {
  font-style: normal;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(1) {
  border-radius: 0 0 2.5vw 0;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-black
  div:nth-of-type(1)
  > em {
  font-style: normal;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit.bl {
  border-radius: 0 0 2vw 2vw;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit.on {
  -webkit-animation: lightshadow 3s infinite;
  animation: lightshadow 3s infinite;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(2)
  > span:nth-of-type(1) {
  font-size: 1.3em;
}
.chess-redblackwar-start
  .redblackwar-betting
  > div
  .redblackwar-hit
  div:nth-of-type(2)
  > span:nth-of-type(2) {
  font-size: 0.7em;
}
.chess-redblackwar-start .redblack-span > i {
  display: inline-block;
  font-style: normal;
}
/** 投注区高亮 **/
@-webkit-keyframes lightshadow {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #fd9781 inset;
    box-shadow: 0 0 0 #fd9781 inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #fd9781 inset;
    box-shadow: 0 0 0 #fd9781 inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #fd9781 inset;
    box-shadow: 0 0 0 #fd9781 inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
}
@keyframes lightshadow {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #fd9781 inset;
    box-shadow: 0 0 0 #fd9781 inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #fd9781 inset;
    box-shadow: 0 0 0 #fd9781 inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #fd9781 inset;
    box-shadow: 0 0 0 #fd9781 inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;
    box-shadow: 0 0 0.83721rem #fd9781 inset;
  }
}
/** loong **/
@-webkit-keyframes lightloong {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
    box-shadow: 0 0 0 #6fbbf9 inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
    box-shadow: 0 0 0 #6fbbf9 inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
    box-shadow: 0 0 0 #6fbbf9 inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
}
@keyframes lightloong {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
    box-shadow: 0 0 0 #6fbbf9 inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
    box-shadow: 0 0 0 #6fbbf9 inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #6fbbf9 inset;
    box-shadow: 0 0 0 #6fbbf9 inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;
    box-shadow: 0 0 0.83721rem #6fbbf9 inset;
  }
}
/** tiger **/
@-webkit-keyframes lighttiger {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #f9ac56 inset;
    box-shadow: 0 0 0 #f9ac56 inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #f9ac56 inset;
    box-shadow: 0 0 0 #f9ac56 inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #f9ac56 inset;
    box-shadow: 0 0 0 #f9ac56 inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
}
@keyframes lighttiger {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #f9ac56 inset;
    box-shadow: 0 0 0 #f9ac56 inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #f9ac56 inset;
    box-shadow: 0 0 0 #f9ac56 inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #f9ac56 inset;
    box-shadow: 0 0 0 #f9ac56 inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;
    box-shadow: 0 0 0.83721rem #f9ac56 inset;
  }
}
/** he **/
@-webkit-keyframes lighthe {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #64e74d inset;
    box-shadow: 0 0 0 #64e74d inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #64e74d inset;
    box-shadow: 0 0 0 #64e74d inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #64e74d inset;
    box-shadow: 0 0 0 #64e74d inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
}
@keyframes lighthe {
  0% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
  25% {
    -webkit-box-shadow: 0 0 0 #64e74d inset;
    box-shadow: 0 0 0 #64e74d inset;
  }
  40% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
  55% {
    -webkit-box-shadow: 0 0 0 #64e74d inset;
    box-shadow: 0 0 0 #64e74d inset;
  }
  75% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
  90% {
    -webkit-box-shadow: 0 0 0 #64e74d inset;
    box-shadow: 0 0 0 #64e74d inset;
  }
  100% {
    -webkit-box-shadow: 0 0 0.83721rem #64e74d inset;
    box-shadow: 0 0 0.83721rem #64e74d inset;
  }
}
/** 放大动画 **/
@-webkit-keyframes mini-to-big {
  from {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes mini-to-big {
  from {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
/** 闪现动画 **/
@-webkit-keyframes flashshow {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes flashshow {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/** 右上角面板动画 **/
@-webkit-keyframes right-box {
  from {
    -webkit-transform: rotate(-91deg);
    transform: rotate(-91deg);
    -webkit-transform-origin: 85% 0;
    transform-origin: 85% 0;
  }
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 85% 0;
    transform-origin: 85% 0;
  }
}
@keyframes right-box {
  from {
    -webkit-transform: rotate(-91deg);
    transform: rotate(-91deg);
    -webkit-transform-origin: 85% 0;
    transform-origin: 85% 0;
  }
  to {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 85% 0;
    transform-origin: 85% 0;
  }
}
/** 抖动 **/
@-webkit-keyframes fastPlay {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(-1.5vw, 0);
    transform: translate(-1.5vw, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes fastPlay {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(-1.5vw, 0);
    transform: translate(-1.5vw, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
/** **/
.chess-popup {
  background: none !important;
}
/** 红黑大战样式结束 **/
/** 龙虎大战 开始 **/
.loongtiger-bg {
  position: fixed;
  bottom: 8vw;
  width: 100%;
  height: 50vh;
  z-index: 1;
  background: url(https://images.imags-google.com/game/loongTigerFloor.png)
    bottom center no-repeat;
  background-size: 100vw auto;
}
.loongTiger-head {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100vw;
  height: 12vw;
  /* height:1.9rem; */
  background-position: 0 0;
}
.loongTiger-head .chess-head-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}
.loongTiger-head .chess-head-list .chess-head-left {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /*margin-top:.2rem;*/
  text-align: center;
}
.loongTiger-head .chess-head-list .chess-head-middle {
  -webkit-box-flex: 5;
  -ms-flex: 5;
  flex: 5;
  height: 8vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-zhuang {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-zhuang > em {
  display: block;
  width: 11vw;
  height: 9vw;
  background-position: 66% 5.2%;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img {
  width: 36%;
  background-position: 1% 4.9%;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img
  .left-icon {
  float: left;
  width: 9.5vw;
  height: 7vw;
  line-height: 6.5vw;
  font-size: 4vw;
  margin-top: 1.5vw;
  text-align: center;
  display: inline-block;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img
  .number-box {
  font-size: 3vw;
  width: 14vw;
  display: inline-block;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img
  .right-icon {
  float: right;
  display: inline-block;
  margin-right: 0.5vw;
  width: 5vw;
  height: 6vw;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img
  .right-icon
  i {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-position: 39% 9.6%;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img
  .right-icon
  i.on {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  margin-top: 0.6vw;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime {
  background-position: 40.6% 4.9%;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .left-icon {
  width: 5vw;
  height: 6vw;
  margin: 0 0 0 0;
  display: inline-block;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .left-icon
  > i {
  display: inline-block;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-position: 39% 9.6%;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .left-icon
  > i.on {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  margin-top: 0.8vw;
}
.loongTiger-head
  .chess-head-list
  .chess-head-middle
  .head-middle-img.head-middle-runtime
  .right-icon {
  width: 9vw;
  height: 7vw;
  line-height: 6.5vw;
  margin: 1.5vw 0 0 0;
  text-align: center;
  font-size: 4vw;
  display: inline-block;
}
.loongTiger-head .chess-head-list .chess-head-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /*margin-top:.2rem;*/
  text-align: center;
}
.loongTiger-head .head-left-btn {
  /*width:1.5rem;
    height:1.5rem;*/
  width: 9vw;
  height: 9vw;
  margin: 0 auto;
  background-position: 15.5% 9.1%;
}
.loongTiger-head .head-left-btn > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-position: 2.3% 9%;
}
.loongTiger-head .head-right-btn {
  /*width:1.5rem;
    height:1.5rem;*/
  width: 9vw;
  height: 9vw;
  margin: 0 auto;
  background-position: 2.3% 9%;
}
.loongTiger-head .head-right-btn > em {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  background-position: 27.3% 9%;
}
/** 龙虎牌面区 **/
.loongtiger-chip-head {
  position: fixed;
  top: 11vw;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: 39vw;
}
.loongtiger-chip-head > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 100%;
}
.loongtiger-chip-head > div:nth-of-type(2) {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 58vw;
}
.loongtiger-chip-head > div:nth-of-type(2) > em {
  height: 12vw;
}
.loongtiger-chip-head > div > em {
  width: 100%;
}
.loongtiger-chip-head > div .loongtiger-chip-loong {
  background-position: 27% 15.2%;
}
.loongtiger-chip-head > div .loongtiger-chip-vs {
  background-position: 8.5% 49.7%;
}
.loongtiger-chip-head > div .loongtiger-chip-tiger {
  background-position: 0% 35%;
}
.loongtiger-chip-head > div .long-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-position: 100% 100%;
  /*background:url(https://images.imags-google.com/game/long.png) no-repeat;*/
  background-size: 250vw auto;
}
.loongtiger-chip-head > div .tiger-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.loongtiger-chip-head.loongtiger-chip-show {
  z-index: 20;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.loongtiger-chip-head.loongtiger-chip-show > div {
  width: 15vw;
  height: 21vw;
  margin: 0 4vw;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.loongtiger-chip-head.loongtiger-chip-show > div.loongtiger-chip-left {
  background-position: 70.6% 51%;
}
.loongtiger-chip-head.loongtiger-chip-show > div.loongtiger-chip-right {
  background-position: 95.5% 51%;
}
.loongtiger-chip-head.loongtiger-chip-show > div .loongtiger-chips {
  width: 11vw;
  height: 14.9vw;
  background-position: 84.6% 98%;
  position: relative;
  -webkit-transform: scale(1.07);
  transform: scale(1.07);
}
.loongtiger-chip-head.loongtiger-chip-show
  > div
  .loongtiger-chips
  > .loongtiger-fire {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  background-position: 46% 53%;
}
/** 龙虎开奖号码列表 **/
.loongtiger-open-list {
  position: fixed;
  top: 58vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  z-index: 8;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.loongtiger-open-list > .loongtiger-opennumber {
  width: 83vw;
  height: 10vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-position: 4% 59.7%;
  padding: 0 2vw;
}
.loongtiger-open-list > .loongtiger-opennumber > em {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 7vw;
}
.loongtiger-open-list > .loongtiger-opennumber > em > i {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.loongtiger-open-list > .loongtiger-opennumber > em .loongtiger-new {
  background-position: 72.1% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em .loongtiger-ltwo {
  z-index: 0;
  background-position: 98.4% 12.45%;
}
.loongtiger-open-list > .loongtiger-opennumber > em .loongtiger-light {
  z-index: 1;
  background-position: 79.9% 9.4%;
  opacity: 0;
  -webkit-animation: flashshow 3s infinite;
  animation: flashshow 3s infinite;
}
.loongtiger-open-list > .loongtiger-opennumber > em .loongtiger-light.l-loong {
  background-position: 79.9% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em .loongtiger-light.l-tiger {
  background-position: 89.2% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em .loongtiger-light.l-he {
  background-position: 98.6% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em.loong {
  background-position: 48% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em.tiger {
  background-position: 56% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em.he {
  background-position: 64% 9.4%;
}
/** 总投注 **/
.loongtiger-all-money {
  position: fixed;
  z-index: 8;
  top: 68vw;
  width: 100%;
  height: 15vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.loongtiger-all-money .loongtiger-all-mbg {
  width: 35vw;
  height: 7vw;
  font-size: 0.7em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-position: 97% 30.9%;
}
.loongtiger-all-money .loongtiger-all-mbg > em {
  color: #f9e3b2;
  font-size: 0.7em;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #541e32;
}
.loongtiger-user {
  top: 44vw;
}
/** 龙虎盘口开始 **/
.loongtiger-betting {
  position: fixed;
  bottom: 18vw;
  height: 72vw;
  /* height: 65vw; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 9;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
}
.loongtiger-betting > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.loongtiger-betting > div .loongtiger-betting-loong,
.loongtiger-betting > div .loongtiger-betting-tiger {
  width: 39vw;
  height: 33vw;
}
.loongtiger-betting > div .loongtiger-betting-loong {
  background: url(https://images.imags-google.com/game/loongBg.png) center
    center no-repeat;
  background-size: 50vw auto;
  /*background-position:0% 72%;*/
}
.loongtiger-betting > div .loongtiger-betting-loong .loongtiger-number-top {
  /*border-radius:1vw 1vw 0 0;*/
  position: relative;
  z-index: 100;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#33417c),
    color-stop(#5c76d6),
    to(#33417c)
  );
  background: linear-gradient(to right, #33417c, #5c76d6, #33417c);
}
.loongtiger-betting > div .loongtiger-betting-loong .loongtiger-number-middle {
  color: #31447f;
}
.loongtiger-betting > div .loongtiger-betting-loong .loongtiger-number-down {
  color: #afa5d5;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #231a4d;
}
.loongtiger-betting > div .loongtiger-betting-tiger {
  background: url(https://images.imags-google.com/game/tigerBg.png) center
    center no-repeat;
  background-size: 50vw auto;
  /*background-position:73% 72%;*/
}
.loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
  position: relative;
  z-index: 100;
  width: 39vw;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#7d603b),
    color-stop(#b88e3f),
    to(#7d603b)
  );
  background: linear-gradient(to right, #7d603b, #b88e3f, #7d603b);
  /*border-radius:1vw 1vw 0 0;*/
}
.loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-middle {
  color: #723e32;
}
.loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-down {
  color: #ffd3b3;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #503313;
}
.loongtiger-betting > div .loongtiger-betting-he {
  width: 80vw;
  height: 33vw;
  background: url(https://images.imags-google.com/game/heBg.png) bottom center
    no-repeat;
  background-size: auto 100%;
  /*background-position: 4% 89%;*/
}
.loongtiger-betting > div .loongtiger-betting-he .loongtiger-number-top {
  position: relative;
  z-index: 100;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#557e3b),
    color-stop(#7baf5f),
    to(#557e3b)
  );
  background: linear-gradient(to right, #557e3b, #7baf5f, #557e3b);
  /*border-radius:1vw 1vw 0 0;*/
}
.loongtiger-betting > div .loongtiger-betting-he .loongtiger-number-middle {
  color: #1f551c;
}
.loongtiger-betting > div .loongtiger-betting-he .loongtiger-number-down {
  color: #d4dfce;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #12531a;
}
.loongtiger-betting > div .loongtiger-betinfo {
  position: relative;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  /*font-size: .7em;*/
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}
.loongtiger-betting > div .loongtiger-betinfo > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.loongtiger-betting > div .loongtiger-betinfo > div > div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
}
.loongtiger-betting > div .loongtiger-betinfo > div > em {
  font-size: 0.7em;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-top {
  /*height: 5.5vw;*/
  color: #f9e3b2;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #541e32;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle {
  height: 24vw;
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div
  .loongtiger-nmiddle-loong,
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div
  .loongtiger-nmiddle-tiger,
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div
  .loongtiger-nmiddle-he {
  height: 9vw;
  width: 10vw;
  margin: 0 auto;
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div:nth-of-type(1) {
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div:nth-of-type(2)
  > em {
  font-size: 0.5em;
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div:nth-of-type(3)
  > em {
  font-size: 0.7em;
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div
  .loongtiger-nmiddle-loong {
  background-position: 97.5% 25.2%;
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div
  .loongtiger-nmiddle-tiger {
  background-position: 82.5% 25.2%;
}
.loongtiger-betting
  > div
  .loongtiger-betinfo
  .loongtiger-number-middle
  > div
  .loongtiger-nmiddle-he {
  background-position: 68.5% 25.2%;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-down {
  position: absolute;
  bottom: 0;
  width: 100%;
  /*height: 7vw;*/
}
.loongtiger-betting .loongtiger-first {
  width: 80vw;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.loongtiger-betting .loongtiger-first > div {
  border-radius: 1vw;
  overflow: hidden;
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(1) {
  margin-right: 2vw;
  border: 1px solid #394d8f;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#606192),
    to(#b0bfe9)
  );
  background: linear-gradient(to top, #606192, #b0bfe9);
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(1).on {
  -webkit-animation: lightloong 3s infinite;
  animation: lightloong 3s infinite;
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(2) {
  border: 1px solid #845019;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#9c7659),
    to(#e6c496)
  );
  background: linear-gradient(to top, #9c7659, #e6c496);
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(2).on {
  -webkit-animation: lighttiger 3s infinite;
  animation: lighttiger 3s infinite;
}
.loongtiger-betting .loongtiger-second {
  width: 80vw;
  overflow: hidden;
  margin-top: 2vw;
  border-radius: 1vw;
  border: 1px solid #1f6313;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#6b865a),
    to(#c3cbb7)
  );
  background: linear-gradient(to top, #6b865a, #c3cbb7);
}
.loongtiger-betting .loongtiger-second.on {
  -webkit-animation: lighthe 3s infinite;
  animation: lighthe 3s infinite;
  overflow: hidden;
}
/** 龙虎大战 结束 **/
/** 右上角面板start **/
.top-right-box {
  background-position: -3% 60.8%;
  position: absolute;
  right: 2vw;
  top: 9vw;
  width: 26vw;
  height: 34vw;
  z-index: 21;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-transform: rotate(-91deg);
  transform: rotate(-91deg);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.top-right-box.animate-in {
  opacity: 1;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  /*animation:.3s right-box 1;*/
}
.top-right-box.animate-out {
  -webkit-transform: rotate(-91deg);
  transform: rotate(-91deg);
}
.top-right-box .top-right-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 83%;
  margin: 0 auto;
  margin-top: 1vw;
  height: 25vw;
}
.top-right-box .top-right-info > div {
  width: 100%;
  height: 7vw;
  margin: 1vw auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.top-right-box .top-right-info > div > em {
  display: block;
  width: 100%;
  height: 100%;
}
.top-right-box .top-right-info > div > em.top-right-playinfo-icon {
  background-position: 81.9% 38.6%;
}
.top-right-box .top-right-info > div > em.top-right-playinfo-txt {
  background-position: 40% 41.7%;
}
.top-right-box .top-right-info > div > em.top-right-sound-open {
  background-position: 59.5% 38.6%;
}
.top-right-box .top-right-info > div > em.top-right-sound-close {
  background-position: 70.5% 38.6%;
}
.top-right-box .top-right-info > div > em.top-right-sound-txt {
  background-position: 55.5% 41.7%;
}
.top-right-box .top-right-info > div > em.top-right-music-open {
  background-position: 48.2% 38.4%;
}
.top-right-box .top-right-info > div > em.top-right-music-close {
  background-position: 37.1% 38.4%;
}
.top-right-box .top-right-info > div > em.top-right-music-txt {
  background-position: 70.7% 41.5%;
}
/* 字体样式处理 */
.set-yellow {
  background: -webkit-linear-gradient(
    top,
    #f8dab2,
    #f8dab2 38%,
    #f2c250 68%,
    #f2c250
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #f9c970;
}
.set-yellow-slide {
  background: -webkit-linear-gradient(
    top,
    #f8dab2,
    #f8dab2 38%,
    #f2c250 68%,
    #f2c250
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #f9c970;
  -webkit-text-stroke: 1px #5e3f28;
}
.set-yellow-slide-me {
  font-size: 1rem;
  /* color:#ac7207; */
}
.set-red {
  color: #d45c58;
}
.set-red-black {
  color: #ec8670;
}
.set-red-black-tran {
  color: rgba(236, 135, 112, 0.76863);
}
.slide-color {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.set-reducemoney {
  background: -webkit-linear-gradient(
    top,
    #4a72bc,
    #4a72bc 38%,
    #aad1fc 68%,
    #aad1fc
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #4a72bc;
  text-shadow: 0.04651rem 0.04651rem 0.09302rem rgba(0, 0, 0, 0.1);
}
/** 红黑和龙虎 牌面窗口样式 **/
.box-short {
  height: 42vw !important;
  top: 69% !important;
}
/** 右上角面板end **/
.how-to-play {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 84vw;
  -webkit-animation: 0.3s mini-to-big 1;
  animation: 0.3s mini-to-big 1;
}
/** 牌面显示说明对照
**
    方块<梅花<红桃<黑桃   04>>2  牌大小；04%4  牌型花色
    0<1<2<3

    ♦️  1  2  3  4  5  6  7  8  9  10  J  Q  K
      04 08 12 16 20 24 28 32 36 40  44 48 52
    ♣️ 1  2  3  4  5  6  7  8  9  10  J  Q  K
      05 09 13 17 21 25 29 33 37 41  45 49 53
    ♥️ 1  2  3  4  5  6  7  8  9  10  J  Q  K
      06 10 14 18 22 26 30 34 38 42  46 50 54
    ♠️ 1  2  3  4  5  6  7  8  9  10  J  Q  K
      07 11 15 19 23 27 31 35 39 43  47 51 55
*/
.pkbg {
  background-position: 84.8% 98% !important;
}
/**1**/
.pk7 {
  background-position: 13.5% -0.2% !important;
}
.pk6 {
  background-position: 0% -0.2% !important;
}
.pk5 {
  background-position: 27.3% -0.2% !important;
}
.pk4 {
  background-position: 40.7% -0.2% !important;
}
/**2**/
.pk11 {
  background-position: 13.5% 16.2% !important;
}
.pk10 {
  background-position: 0% 16.2% !important;
}
.pk9 {
  background-position: 27.3% 16.2% !important;
}
.pk8 {
  background-position: 40.7% 16.2% !important;
}
/**3**/
.pk15 {
  background-position: 13.5% 32.6% !important;
}
.pk14 {
  background-position: 0% 32.6% !important;
}
.pk13 {
  background-position: 27.3% 32.6% !important;
}
.pk12 {
  background-position: 40.7% 32.6% !important;
}
/**4**/
.pk19 {
  background-position: 13.5% 48.9% !important;
}
.pk18 {
  background-position: 0% 48.9% !important;
}
.pk17 {
  background-position: 27.3% 48.9% !important;
}
.pk16 {
  background-position: 40.7% 48.9% !important;
}
/**5**/
.pk23 {
  background-position: 13.5% 65.3% !important;
}
.pk22 {
  background-position: 0% 65.3% !important;
}
.pk21 {
  background-position: 27.3% 65.3% !important;
}
.pk20 {
  background-position: 40.7% 65.3% !important;
}
/**6**/
.pk27 {
  background-position: 13.5% 81.7% !important;
}
.pk26 {
  background-position: 0% 81.7% !important;
}
.pk25 {
  background-position: 27.3% 81.7% !important;
}
.pk24 {
  background-position: 40.7% 81.7% !important;
}
/**7**/
.pk31 {
  background-position: 13.5% 98% !important;
}
.pk30 {
  background-position: 0% 98% !important;
}
.pk29 {
  background-position: 27.3% 98% !important;
}
.pk28 {
  background-position: 40.7% 98% !important;
}
/**8**/
.pk35 {
  background-position: 71% -0.2% !important;
}
.pk34 {
  background-position: 57.5% -0.2% !important;
}
.pk33 {
  background-position: 84.5% -0.2% !important;
}
.pk32 {
  background-position: 98% -0.2% !important;
}
/**9**/
.pk39 {
  background-position: 71% 16.2% !important;
}
.pk38 {
  background-position: 57.5% 16.2% !important;
}
.pk37 {
  background-position: 84.5% 16.2% !important;
}
.pk36 {
  background-position: 98% 16.2% !important;
}
/**10**/
.pk43 {
  background-position: 71% 32.7% !important;
}
.pk42 {
  background-position: 57.5% 32.7% !important;
}
.pk41 {
  background-position: 84.5% 32.7% !important;
}
.pk40 {
  background-position: 98% 32.7% !important;
}
/**J**/
.pk47 {
  background-position: 71% 48.9% !important;
}
.pk46 {
  background-position: 57.5% 48.9% !important;
}
.pk45 {
  background-position: 84.5% 48.9% !important;
}
.pk44 {
  background-position: 98% 48.9% !important;
}
/**Q**/
.pk51 {
  background-position: 71% 65.3% !important;
}
.pk50 {
  background-position: 57.5% 65.3% !important;
}
.pk49 {
  background-position: 84.5% 65.3% !important;
}
.pk48 {
  background-position: 98% 65.3% !important;
}
/**K**/
.pk55 {
  background-position: 71% 81.7% !important;
}
.pk54 {
  background-position: 57.5% 81.7% !important;
}
.pk53 {
  background-position: 84.5% 81.7% !important;
}
.pk52 {
  background-position: 98% 81.7% !important;
}
/**牌面样式结束 */
.align-text {
  text-align: center;
  padding: 10%;
}
/** 骰宝点数 **/
.sicbodot-1 {
  background-position: -0.7% 35%;
}
.sicbodot-2 {
  background-position: 16% 35%;
}
.sicbodot-3 {
  background-position: 32.8% 35%;
}
.sicbodot-4 {
  background-position: 49.6% 35%;
}
.sicbodot-5 {
  background-position: 66.4% 35%;
}
.sicbodot-6 {
  background-position: 83% 35%;
}
/** 适配不同屏幕显示 **/
/** 兼容处理开始 **/
/** 320宽 **/
@media screen and (max-width: 320px) and (min-height: 480px) {
  .betting-box {
    bottom: 0vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .nn100-chipbg {
    bottom: -27vw;
  }
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 88vw;
  }
  .redblack-chipbg {
    bottom: -25vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    bottom: 12vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    height: 45vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
  }
  .loongtiger-all-money {
    top: 68vw;
  }
  .loongtiger-open-list > .loongtiger-opennumber {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 159vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (max-width: 320px) and (min-height: 500px) {
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 91vw;
  }
  .nn100-chipbg {
    bottom: -24vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    bottom: 17vw;
  }
  .loongtiger-all-money {
    top: 64vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (max-width: 320px) and (min-height: 518px) {
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 96vw;
  }
  .nn100-chipbg {
    bottom: -14vw;
  }
  .redblack-chipbg {
    bottom: -5vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 83vw;
    height: 45vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 19vw;
  }
  .betting-box {
    bottom: 3vw;
  }
}
@media screen and (max-width: 320px) and (min-height: 530px) {
  .chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    height: 59vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
  }
  .loongtiger-betting {
    bottom: 20vw;
  }
}
@media screen and (max-width: 320px) and (min-height: 550px) {
  .redblack-chipbg {
    bottom: -5vw;
  }
  .loongtiger-all-money {
    top: 69vw;
  }
  .loongtiger-betting {
    bottom: 28vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    height: 59vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 71vw;
  }
  .loongtiger-betting {
    height: 75vw;
    -webkit-transform: scale(1);
    transform: scale(1);
    bottom: 22vw;
  }
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (max-width: 320px) and (min-height: 560px) {
  .loongtiger-betting {
    bottom: 24vw;
  }
  .loongtiger-all-money {
    top: 66vw;
  }
}
@media screen and (max-width: 320px) and (min-height: 580px) {
  .redblack-chipbg {
    bottom: 2vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 91vw;
    height: 59vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 77vw;
  }
  .loongtiger-all-money {
    top: 70vw;
  }
}
@media screen and (max-width: 320px) and (min-height: 600px) {
  .nn100-chipbg {
    bottom: -10vw;
  }
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 99vw;
  }
  .redblack-chipbg {
    bottom: 0vh;
  }
  .loongtiger-betting {
    bottom: 28vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 92vw;
    height: 59vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 81vw;
  }
}
@media screen and (max-width: 320px) and (min-height: 650px) {
  .redblack-chipbg {
    bottom: 1vw;
    background-size: 100% 100%;
  }
  .nn100-chipbg {
    bottom: -10vw;
    background-size: 100% 94%;
  }
  .betting-box {
    bottom: 20vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 127vw;
  }
  .loongtiger-betting {
    bottom: 33vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 105vw;
    height: 59vw;
    bottom: inherit;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 81vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (max-width: 320px) and (min-height: 700px) {
  .loongtiger-all-money {
    top: 72vw;
  }
  .nnall-beting-money {
    bottom: 131vw;
  }
  .loongtiger-betting {
    bottom: 51vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 96vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 115vw;
    height: 59vw;
    bottom: inherit;
  }
}
@media screen and (max-width: 320px) and (min-height: 750px) {
  .loongtiger-all-money {
    top: 72vw;
  }
  .loongtiger-betting {
    bottom: 51vw;
  }
  .nnall-beting-money {
    bottom: 131vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 108vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 125vw;
    height: 75vw;
    bottom: inherit;
  }
}
/** 360宽 **/
@media screen and (min-width: 360px) and (min-height: 480px) {
  .betting-box {
    bottom: 0vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .nn100-chipbg {
    bottom: -30vw;
  }
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 84vw;
  }
  .redblack-chipbg {
    bottom: -34vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 65vw;
    height: 45vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    bottom: 7vw;
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 159vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
  .loongtiger-open-list > .loongtiger-opennumber {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
}
@media screen and (min-width: 360px) and (min-height: 500px) {
  .redblack-chipbg {
    bottom: -24vw;
  }
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 8vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 65vw;
    height: 45vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 360px) and (min-height: 518px) {
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 89vw;
  }
  .redblack-chipbg {
    bottom: -24vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    height: 45vw;
    bottom: inherit;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 12vw;
  }
  .betting-box {
    bottom: 3vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 530px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 58vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 70vw;
    height: 49vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 360px) and (min-height: 540px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 61vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 73vw;
    height: 49vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 360px) and (min-height: 550px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 77vw;
    height: 49vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 360px) and (min-height: 560px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 68vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 79vw;
    height: 49vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    bottom: 17vw;
  }
  .loongtiger-all-money {
    top: 63.5vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (min-width: 360px) and (min-height: 568px) {
  /** 牛牛 **/
  .nnall-beting-money {
    /* top: 63vw; */
  }
  .loongtiger-all-money {
    top: 70vw;
  }
  .loongtiger-betting {
    bottom: 17vw;
  }
  .redblack-chipbg {
    bottom: -12vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 63vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 75vw;
    height: 52vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    bottom: 18vw;
  }
  .loongtiger-all-money {
    top: 63.5vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 573px) {
  .redblack-chipbg {
    bottom: -12vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 64vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 77vw;
    height: 51vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 360px) and (min-height: 578px) {
  .loongtiger-betting {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    bottom: 18vw;
  }
  .loongtiger-all-money {
    top: 65.5vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 585px) {
  .loongtiger-betting {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    bottom: 20.5vw;
  }
  .loongtiger-all-money {
    top: 63.5vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 600px) {
  .loongtiger-betting {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    bottom: 21.5vw;
  }
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 609px) {
  .nn100-chipbg {
    bottom: -23vw;
  }
  .nnall-beting-money {
    bottom: 97vw;
  }
  .betting-box {
    bottom: 6vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .redblack-chipbg {
    bottom: -10vh;
  }
  .loongtiger-betting {
    bottom: 22vw;
  }
  .redblack-chipbg {
    bottom: -1vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 70vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 83vw;
    height: 51vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 360px) and (min-height: 630px) {
  .nn100-chipbg {
    bottom: -5vw;
  }
  .nnall-beting-money {
    bottom: 110vw;
  }
  .betting-box {
    bottom: 17vw;
  }
  .redblack-chipbg {
    bottom: 0vh;
  }
  .loongtiger-all-money {
    top: 70vw;
  }
  .loongtiger-betting {
    bottom: 31vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 73vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 83vw;
    bottom: inherit;
    height: 60vw;
  }
  .betting-box .betting-list > div > span > em:nth-of-type(2) {
    font-size: 1em;
  }
  .betting-box .betting-list > div > span > em:nth-of-type(3) {
    font-size: 1em;
  }
  .loongtiger-betting {
    -webkit-transform: scale(1);
    transform: scale(1);
    bottom: 25.5vw;
  }
  .loongtiger-all-money {
    top: 65.5vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 640px) {
  .loongtiger-betting {
    height: 75vw;
    -webkit-transform: scale(1);
    transform: scale(1);
    bottom: 24vw;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (min-width: 360px) and (min-height: 650px) {
  .loongtiger-betting {
    height: 75vw;
    bottom: 26vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 661px) {
  .nnall-beting-money {
    /* top: 68vw; */
  }
  .betting-box {
    /* bottom: 17vw; */
    /* bottom: 5vw; */
  }
  .redblack-chipbg {
    bottom: 0vh;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 94vw;
    bottom: inherit;
  }
  .loongtiger-all-money {
    top: 68vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 666px) {
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 91vw;
    /* bottom: 42vw; */
    height: 55vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 676px) {
  .nn100-chipbg {
    bottom: 0vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 82vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 94vw;
    /* bottom: 42vw; */
    height: 55vw;
  }
  .loongtiger-all-money {
    top: 69vw;
  }
  .loongtiger-betting {
    bottom: 29vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 690px) {
  .redblack-chipbg {
    bottom: 0vh;
    background-size: 100% 101%;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 82vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 94vw;
    /* bottom: 42vw; */
    height: 58vw;
  }
  .nn100-chipbg {
    bottom: 5vw;
  }
  .nnall-beting-money {
    bottom: 120vw;
  }
  .betting-box {
    -webkit-transform: scale(1);
    transform: scale(1);
    bottom: 18vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 700px) {
  /** 从这里开始 **/
  .chess-redblackwar-start .redblackwar-all-money {
    top: 81vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 101%;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 93vw;
  }
  .nnall-beting-money {
    bottom: 122vw;
  }
  .nn100-chipbg {
    bottom: 0vw;
    background-size: 100% 88%;
  }
  .betting-box {
    -webkit-transform: scale(1);
    transform: scale(1);
    bottom: 18vw;
  }
  .loongtiger-betting {
    bottom: 32vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 730px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 84vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 100vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 736px) {
  .betting-box {
    bottom: 18vw;
  }
  .nnall-beting-money {
    bottom: 124vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 84vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 99vw;
  }
  .loongtiger-betting {
    bottom: 37vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 760px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 88vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 107vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 780px) {
  .nnall-beting-money {
    bottom: 132vw;
  }
  .betting-box {
    bottom: 22vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 800px) {
  .nn100-chipbg {
    bottom: 9vw;
  }
  .nnall-beting-money {
    bottom: 145vw;
  }
  .betting-box {
    bottom: 29vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 98vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 115vw;
    height: 70vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 100%;
  }
  .loongtiger-betting {
    bottom: 48vw;
  }
}
@media screen and (min-width: 360px) and (min-height: 900px) {
  .nn100-chipbg {
    bottom: 9vw;
  }
  .nnall-beting-money {
    bottom: 152vw;
  }
  .betting-box {
    bottom: 29vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 116vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 141vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
  }
}
/** 375宽 **/
@media screen and (min-width: 375px) and (min-height: 480px) {
  .loongtiger-all-money {
    top: 44vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 484px) {
  .nn100-chipbg {
    height: 120vh;
    bottom: -19vw;
  }
  .nnall-beting-money {
    bottom: 90vw;
  }
  .betting-box {
    bottom: 1vw;
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  .betting-box .betting-list > div {
    width: 40%;
  }
  .redblack-chipbg {
    bottom: -30vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 58vw;
    height: 45vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 50.5vw;
  }
  .loongtiger-all-money {
    top: 44vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 500px) {
  .nn100-chipbg {
    height: 120vh;
    bottom: -19vw;
  }
  .nnall-beting-money {
    bottom: 90vw;
  }
  .betting-box {
    bottom: 2vw;
  }
  .redblack-chipbg {
    bottom: -33vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 64vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 53.5vw;
  }
  .loongtiger-open-list {
    top: 56vw;
  }
  .loongtiger-all-money {
    top: 61vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 513px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 54.5vw;
  }
  .redblack-chipbg {
    bottom: -29vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 68vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 540px) {
  .betting-box {
    bottom: 2vw;
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  .betting-box .betting-list > div {
    width: 40%;
  }
  .loongtiger-open-list {
    top: 58vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -29vw;
  }
  .nnall-beting-money {
    bottom: 90vw;
  }
  .redblack-chipbg {
    bottom: -25vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 72vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 9vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 553px) {
  .nn100-chipbg {
    bottom: -24vw;
  }
  .nnall-beting-money {
    bottom: 94vw;
  }
  .betting-box {
    bottom: 4vw;
  }
  .loongtiger-all-money {
    top: 68vw;
  }
  .loongtiger-betting {
    bottom: 10vw;
  }
  .redblack-chipbg {
    bottom: -21vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 63vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 71vw;
    height: 50vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    bottom: 14vw;
  }
  .loongtiger-all-money {
    top: 62.5vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 115vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 560px) {
  .loongtiger-betting {
    bottom: 14vw;
  }
  .loongtiger-all-money {
    top: 63.5vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 570px) {
  .loongtiger-betting {
    bottom: 15vw;
  }
  .loongtiger-all-money {
    top: 64vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 580px) {
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 95vw;
  }
  .betting-box {
    bottom: 6vw;
  }
  .nn100-chipbg {
    bottom: -21vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    bottom: 17vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 72vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 78vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 590px) {
  .loongtiger-all-money {
    top: 65vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 600px) {
  .nn100-chipbg {
    bottom: -19vw;
  }
  .nnall-beting-money {
    bottom: 98vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 82vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    bottom: 20vw;
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 610px) {
  .loongtiger-all-money {
    top: 64vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 630px) {
  .redblack-chipbg {
    bottom: -8vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 72vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 83vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(1);
    transform: scale(1);
    bottom: 24vw;
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 635px) {
  .nn100-chipbg {
    bottom: -13vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .betting-box {
    bottom: 10vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .nn100-chipbg {
    bottom: -15vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
  .redblack-chipbg {
    bottom: -10vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75.5vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 87vw;
  }

  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 102vw;
  }
  .betting-box .betting-list > div {
    height: 21vw;
    width: 35%;
  }
}
@media screen and (min-width: 375px) and (min-height: 638px) {
  .nn100-chipbg {
    bottom: -13vw;
  }
  .redblack-chipbg {
    bottom: -10vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75.5vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 87vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 639px) {
}
@media screen and (min-width: 375px) and (min-height: 640px) {
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 22vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 647px) {
  .loongtiger-all-money {
    top: 65.5vw;
  }
  .loongtiger-betting {
    bottom: 23vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 650px) {
  .nn100-chipbg {
    bottom: -11vw;
  }
  .loongtiger-all-money {
    top: 66vw;
  }
  .loongtiger-betting {
    bottom: 23vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 660px) {
  .redblack-chipbg {
    bottom: -4vw;
  }
  .nn100-chipbg {
    height: 120vh;
    bottom: -6vw;
  }
  .nnall-beting-money {
    bottom: 110vw;
  }
  .betting-box {
    bottom: 14vw;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 24vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 87vw;
    height: 55vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 667px) {
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 680px) {
  .nn100-chipbg {
    height: 120vh;
    bottom: -3vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 87vw;
    height: 58vw;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 700px) {
  .nn100-chipbg {
    height: 100vh;
    bottom: -3vw;
    background-size: 100% 88%;
  }
  .betting-box {
    bottom: 13vw;
  }
  .loongtiger-all-money {
    top: 69vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 78vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 91vw;
    height: 60vw;
  }
  .loongtiger-betting {
    bottom: 29vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@media screen and (min-width: 375px) and (min-height: 750px) {
  .nnall-beting-money {
    bottom: 115vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 100%;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 84vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 93vw;
    height: 68vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 790px) {
  .nn100-chipbg {
    bottom: -3vw;
  }
  .nnall-beting-money {
    bottom: 117vw;
  }
  .betting-box {
    bottom: 13vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 88vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 102vw;
  }
}
@media screen and (min-width: 375px) and (min-height: 800px) {
  .nn100-chipbg {
    bottom: 5vw;
  }
  .nnall-beting-money {
    bottom: 136vw;
  }
  .betting-box {
    bottom: 26vw;
  }
  .redblack-chipbg {
    bottom: 5vw;
    background-size: 100vw 102%;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 87vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 100vw;
    height: 75vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    bottom: 48vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@media screen and (min-width: 375px) and (min-height: 880px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 98vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 115vw;
    height: 75vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 375px) and (min-height: 900px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 98vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 115vw;
    height: 75vw;
    bottom: inherit;
  }
}
/** 384宽 **/
@media screen and (min-width: 384px) and (min-height: 500px) {
  .loongtiger-all-money {
    top: 60vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 510px) {
  .loongtiger-all-money {
    top: 61vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 520px) {
  .loongtiger-all-money {
    top: 61vw;
  }
  .loongtiger-betting {
    bottom: 8vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 530px) {
  .loongtiger-all-money {
    top: 61vw;
  }
  .loongtiger-betting {
    bottom: 8vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 535px) {
  .loongtiger-all-money {
    top: 61vw;
  }
  .loongtiger-betting {
    bottom: 10vw;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 135vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 540px) {
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 10vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 550px) {
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 11vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 560px) {
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 11vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 580px) {
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 14vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 116vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 600px) {
  .loongtiger-all-money {
    top: 67vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 610px) {
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 17vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 630px) {
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 21vw;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 640px) {
  .loongtiger-all-money {
    top: 64vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 660px) {
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 23vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 680px) {
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 384px) and (min-height: 730px) {
  .loongtiger-all-money {
    top: 69vw;
  }
  .loongtiger-betting {
    bottom: 29vw;
  }
}
/** 411宽 **/
@media screen and (min-width: 411px) and (min-height: 480px) {
  .loongtiger-all-money {
    top: 40vw;
  }
  .loongtiger-betting {
    bottom: 6vw;
  }
  .loongtiger-open-list {
    top: 49vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 484px) {
  .nn100-chipbg {
    height: 120vh;
    bottom: -39vw;
  }
  .nnall-beting-money {
    bottom: 67vw;
  }
  .betting-box {
    bottom: -9vw;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .redblack-chipbg {
    height: 120vh;
    bottom: -33vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 49vw;
    height: 45vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 36.5vh;
  }
  .loongtiger-open-list {
    top: 50vw;
  }
  .loongtiger-all-money {
    top: 40vw;
  }
  .loongtiger-betting {
    bottom: 6vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 500px) {
  .loongtiger-open-list {
    top: 52vw;
  }
  .loongtiger-all-money {
    top: 40vw;
  }
  .loongtiger-betting {
    bottom: 6vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 52vw;
    height: 45vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 510px) {
  .loongtiger-open-list {
    top: 55vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 530px) {
  .loongtiger-open-list {
    top: 58vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 540px) {
  .betting-box {
    bottom: -3vw;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -29vw;
  }
  .nnall-beting-money {
    bottom: 80vw;
  }
  .redblack-chipbg {
    bottom: -27vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 58vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    bottom: inherit;
    top: 50vw;
  }
  .loongtiger-open-list {
    top: 55vw;
  }
  .loongtiger-all-money {
    top: 60vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 550px) {
  .loongtiger-all-money {
    top: 61vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 50vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 62vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 553px) {
  .loongtiger-all-money {
    top: 61vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 162vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 560px) {
  .loongtiger-open-list {
    top: 57vw;
  }
  .loongtiger-all-money {
    top: 64vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 52vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 65vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 570px) {
  .loongtiger-all-money {
    top: 64vw;
  }
  .loongtiger-betting {
    bottom: 8vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 579px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 56vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 69vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 580px) {
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 89vw;
  }
  .redblack-chipbg {
    bottom: -28vw;
  }
  .betting-box {
    bottom: 2vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .nn100-chipbg {
    bottom: -31vw;
  }
  .loongtiger-betting {
    bottom: 14vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-all-money {
    top: 43vw;
  }
  .loongtiger-open-list {
    top: 58vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 69vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 115vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 590px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 60vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 73vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 600px) {
  /** 牛牛 **/
  .nnall-beting-money {
    bottom: 88vw;
  }
  .betting-box .betting-list > div {
    height: 20vw;
  }
  .betting-box {
    bottom: 2vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .nn100-chipbg {
    bottom: -29vw;
  }
  .loongtiger-betting {
    bottom: 13vw;
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .loongtiger-open-list {
    top: 58vw;
  }
  .redblack-chipbg {
    bottom: -22vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 70vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 610px) {
  .loongtiger-all-money {
    top: 64vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 115vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 620px) {
  .loongtiger-all-money {
    top: 64vw;
  }
  .loongtiger-betting {
    bottom: 14vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 62vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 76vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 630px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 67vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 79vw;
  }
  .loongtiger-betting {
    bottom: 17vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 638px) {
  .redblack-chipbg {
    bottom: -17vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 68vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 80vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 17vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 640px) {
  .nn100-chipbg {
    bottom: -19vw;
  }
  .nnall-beting-money {
    bottom: 97vw;
  }
  .betting-box {
    bottom: 7vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting {
    bottom: 15vw;
  }
  .loongtiger-all-money {
    top: 64vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 650px) {
  .loongtiger-betting {
    bottom: 19vw;
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 68vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 84vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 659px) {
  .loongtiger-betting {
    bottom: 19vw;
  }
  .loongtiger-all-money {
    top: 64vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 660px) {
  .loongtiger-betting {
    bottom: 19vw;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 670px) {
  .loongtiger-all-money {
    top: 64vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 680px) {
  .loongtiger-all-money {
    top: 64vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 89vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 690px) {
  .nn100-chipbg {
    bottom: -15vw;
  }
  .nnall-beting-money {
    bottom: 101vw;
  }
  .betting-box {
    bottom: 8vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 22vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 39vw;
  }
  .redblack-chipbg {
    bottom: -25vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 700px) {
  .nn100-chipbg {
    bottom: -2vw;
  }
  .nnall-beting-money {
    bottom: 103vw;
  }
  .betting-box {
    bottom: 8vw;
  }
  .loongtiger-all-money {
    top: 65vw;
  }
  .redblack-chipbg {
    bottom: -24vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 85vw;
    height: 56vw;
  }
  .loongtiger-betting {
    bottom: 22vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 710px) {
  .loongtiger-betting {
    bottom: 23vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 730px) {
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 24vw;
  }
  .redblack-chipbg {
    bottom: -22vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 85vw;
    height: 56vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 750px) {
  .nn100-chipbg {
    bottom: -2vw;
  }
  .nnall-beting-money {
    bottom: 108vw;
  }
  .betting-box {
    bottom: 12vw;
  }
  .loongtiger-all-money {
    top: 69vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 72vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 91vw;
  }
  .loongtiger-betting {
    bottom: 26vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 790px) {
  .nn100-chipbg {
    bottom: -2vw;
  }
  .nnall-beting-money {
    bottom: 115vw;
  }
  .betting-box {
    bottom: 16vw;
  }
  .loongtiger-betting {
    bottom: 30vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 800px) {
  .nnall-beting-money {
    bottom: 115vw;
  }
  .betting-box {
    bottom: 16vw;
  }
  .loongtiger-all-money {
    top: 70vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 86vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 96vw;
    bottom: inherit;
    height: 65vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 83%;
  }
  .loongtiger-betting {
    bottom: 32vw;
  }
}
@media screen and (min-width: 411px) and (min-height: 890px) {
  .chess-redblackwar-start .redblackwar-betting {
    top: 103vw;
    bottom: inherit;
  }
}
/** 414宽 **/
@media screen and (min-width: 414px) and (min-height: 510px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 46vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 55vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 520px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 46vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 56vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 526px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 48vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 58vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 530px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 48vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 59vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 550px) {
  .loongtiger-all-money {
    top: 66vw;
  }
  .loongtiger-betting {
    bottom: 8vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 50vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 61vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 570px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 67vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 580px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 69vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 598px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 74vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 600px) {
  .betting-box {
    bottom: -2vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -31vw;
  }
  .nnall-beting-money {
    bottom: 85vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 69vw;
    bottom: inherit;
    height: 50vw;
  }
  .redblack-chipbg {
    bottom: -25vw;
  }
  .loongtiger-all-money {
    top: 61.5vw;
  }
  .loongtiger-betting {
    bottom: 13vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 610px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 72vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 617px) {
  .loongtiger-all-money {
    top: 63vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 620px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 62vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 72vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -21vw;
  }
  .loongtiger-betting {
    bottom: 14vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 634px) {
  .chess-redblackwar-start .redblackwar-betting {
    top: 76vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    bottom: 15.5vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 640px) {
  .chess-redblackwar-start .redblackwar-betting {
    top: 76vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    bottom: 15.5vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 650px) {
  .nn100-chipbg {
    bottom: -21vw;
  }
  .nnall-beting-money {
    bottom: 99vw;
  }
  .betting-box {
    bottom: 7vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 64vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 78vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -13vw;
  }
  .loongtiger-betting {
    bottom: 16vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 667px) {
  .nn100-chipbg {
    bottom: -18vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 72vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -13vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 19vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 680px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 85vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -11vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 690px) {
  .nn100-chipbg {
    bottom: -15vw;
  }
  .nnall-beting-money {
    bottom: 101vw;
  }
  .betting-box {
    bottom: 8vw;
  }
  .loongtiger-betting {
    bottom: 22vw;
  }
  .loongtiger-all-money {
    top: 62vw;
  }
  .redblack-chipbg {
    bottom: -24vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 700px) {
  .nn100-chipbg {
    height: 100vh;
    bottom: -18vw;
    background-size: 100% 100%;
  }
  .nnall-beting-money {
    bottom: 102vw;
  }
  .betting-box {
    bottom: 8vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 78vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 90vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -24vw;
  }
  .loongtiger-all-money {
    top: 64vw;
  }
  .loongtiger-betting {
    bottom: 22.5vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 710px) {
  .redblack-chipbg {
    bottom: -20vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 720px) {
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 23vw;
  }
  .redblack-chipbg {
    bottom: -22vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 730px) {
  .nnall-beting-money {
    bottom: 105vw;
  }
  .betting-box {
    bottom: 10vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 88vw;
    bottom: inherit;
    height: 55vw;
  }
  .redblack-chipbg {
    bottom: -20vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 736px) {
  .redblack-chipbg {
    bottom: -20vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 750px) {
  .betting-box {
    bottom: 10vw;
  }
  .nn100-chipbg {
    bottom: -18vw;
  }
  .nnall-beting-money {
    bottom: 109vw;
  }
  .redblack-chipbg {
    bottom: -24vw;
  }
  .loongtiger-all-money {
    top: 68vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 83vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 93vw;
    bottom: inherit;
  }
}
@media screen and (min-width: 414px) and (min-height: 780px) {
  .nnall-beting-money {
    bottom: 112vw;
  }
  .betting-box {
    bottom: 13vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 78vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 95vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -18vw;
  }
  .loongtiger-betting {
    bottom: 29vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 800px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 83vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 100vw;
    bottom: inherit;
  }
  .loongtiger-all-money {
    top: 68vw;
  }
  .redblack-chipbg {
    bottom: -6vw;
  }
  .loongtiger-betting {
    bottom: 29vw;
  }
}
@media screen and (min-width: 414px) and (min-height: 823px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 85vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 100vw;
    bottom: inherit;
    height: 65vw;
  }
  .redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 83%;
  }
}
@media screen and (min-width: 414px) and (min-height: 900px) {
  .betting-box {
    bottom: 22vw;
  }
  .nn100-chipbg {
    bottom: -18vw;
  }
  .nnall-beting-money {
    bottom: 133vw;
  }
}
/** 480宽 **/
@media screen and (min-width: 480px) and (min-height: 650px) {
  .nn100-chipbg {
    bottom: -42vw;
  }
  .nnall-beting-money {
    bottom: 78vw;
  }
  .betting-box {
    bottom: -4vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -36vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
  .loongtiger-betting {
    bottom: 6vw;
  }
  .loongtiger-betting {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    bottom: 9vw;
  }
  .loongtiger-all-money {
    top: 42vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 133vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 690px) {
  .loongtiger-all-money {
    top: 43vw;
  }
  .loongtiger-betting {
    bottom: 12vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 114vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (min-width: 480px) and (min-height: 700px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 58vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 66vw;
    bottom: inherit;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -22vw;
  }
  .nnall-beting-money {
    bottom: 85vw;
  }
  .betting-box {
    bottom: 0vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-all-money {
    top: 43vw;
  }
  .loongtiger-betting {
    bottom: 13vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .redblack-chipbg {
    bottom: -24vw;
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 115vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 750px) {
  .nnall-beting-money {
    bottom: 90vw;
  }
  .nn100-chipbg {
    height: 107vh;
    bottom: -32vw;
  }
  .betting-box {
    bottom: 2vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 58vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 73vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -17vw;
  }
  .loongtiger-all-money {
    top: 41vw;
  }
  .loongtiger-betting {
    bottom: 19vw;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 89vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 780px) {
  .nnall-beting-money {
    bottom: 101vw;
  }
  .nn100-chipbg {
    height: 107vh;
    bottom: -27vw;
  }
  .betting-box {
    bottom: 8vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 64vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 77vw;
    bottom: inherit;
  }
  .redblack-chipbg {
    bottom: -12vw;
  }
  .loongtiger-all-money {
    top: 63vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 790px) {
  .loongtiger-all-money {
    top: 65vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 800px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 65vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 75vw;
    bottom: inherit;
  }
  .nnall-beting-money {
    bottom: 100vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -20vw;
  }
  .betting-box {
    bottom: 8vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .redblack-chipbg {
    bottom: -1vw;
  }
  .loongtiger-all-money {
    top: 66vw;
  }
  .loongtiger-betting {
    bottom: 20vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 820px) {
  .loongtiger-all-money {
    top: 65vw;
  }
  .loongtiger-betting {
    bottom: 22vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 830px) {
  .nnall-beting-money {
    bottom: 103vw;
  }
  .betting-box {
    bottom: 10vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .redblack-chipbg {
    bottom: -3vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 73vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    bottom: inherit;
  }
  .loongtiger-all-money {
    top: 66vw;
  }
  .loongtiger-betting {
    bottom: 23vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 39vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 850px) {
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 860px) {
  .betting-box {
    bottom: 11vw;
  }
  .nnall-beting-money {
    bottom: 107vw;
  }
  .redblack-chipbg {
    bottom: -4vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 76vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 86vw;
    bottom: inherit;
  }
  .loongtiger-all-money {
    top: 67vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 890px) {
  .nnall-beting-money {
    bottom: 109vw;
  }
  .betting-box {
    bottom: 12vw;
  }
  .redblack-chipbg {
    bottom: -9vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 81vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 90vw;
    bottom: inherit;
  }
  .loongtiger-betting {
    bottom: 28vw;
  }
}
@media screen and (min-width: 480px) and (min-height: 900px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 75.5vw;
  }
  .redblack-chipbg {
    bottom: 0vh;
  }
  .nnall-beting-money {
    bottom: 111vw;
  }
  .betting-box {
    bottom: 14vw;
  }
  .loongtiger-all-money {
    top: 70vw;
  }
  .loongtiger-betting {
    bottom: 25vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (min-width: 480px) and (min-height: 950px) {
  .loongtiger-betting {
    bottom: 35vw;
  }
  .nnall-beting-money {
    bottom: 116vw;
  }
}
/** 600 width**/
@media screen and (min-width: 600px) and (min-height: 800px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 53vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 60vw;
    bottom: inherit;
    height: 44vw;
  }
}
@media screen and (min-width: 600px) and (min-height: 800px) {
  .nnall-beting-money {
    bottom: 77vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -20vw;
  }
  .betting-box {
    bottom: -4vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 44vw;
  }
  .loongtiger-all-money {
    top: 62.5vw;
  }
  .loongtiger-betting {
    bottom: 12vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 115vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (min-width: 600px) and (min-height: 880px) {
  .nnall-beting-money {
    bottom: 85vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -20vw;
  }
  .betting-box {
    bottom: -1vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 48vw;
  }
}
@media screen and (min-width: 600px) and (min-height: 900px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 51vw;
  }
  .loongtiger-all-money {
    top: 65vw;
  }
}
@media screen and (min-width: 600px) and (min-height: 950px) {
  .nnall-beting-money {
    bottom: 99vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
  }
  .betting-box {
    bottom: 7vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 64vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 74vw;
    bottom: inherit;
    height: 51vw;
  }
  .loongtiger-all-money {
    top: 62.5vw;
  }
  .loongtiger-betting {
    bottom: 16vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
  .loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
    width: 100%;
  }
}
@media screen and (min-width: 600px) and (min-height: 960px) {
  .loongtiger-all-money {
    top: 66.5vw;
  }
}
@media screen and (min-width: 600px) and (min-height: 990px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 69vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    bottom: inherit;
    height: 51vw;
  }
  .loongtiger-all-money {
    top: 64.5vw;
  }
  .loongtiger-betting {
    bottom: 20vw;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
  }
}
@media screen and (min-width: 600px) and (min-height: 1100px) {
  .nnall-beting-money {
    bottom: 111vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
  }
  .betting-box {
    bottom: 13vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 76vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 89vw;
    bottom: inherit;
    height: 58vw;
  }
  .loongtiger-all-money {
    top: 70vw;
  }
  .loongtiger-betting {
    bottom: 24vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
  }
}
@media screen and (min-width: 600px) and (min-height: 1200px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 85vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 101vw;
    bottom: inherit;
    height: 65vw;
  }
}
/** 768W **/
@media screen and (min-width: 768px) and (min-height: 1000px) {
  .nnall-beting-money {
    bottom: 80vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
  }
  .betting-box {
    bottom: -3vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-all-money {
    top: 60vw;
  }
  .loongtiger-open-list {
    top: 56vw;
  }
  .loongtiger-betting {
    bottom: 5vw;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 161vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 52vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 55vw;
    bottom: inherit;
    height: 48vw;
  }
}
@media screen and (min-width: 768px) and (min-height: 1024px) {
  .loongtiger-all-money {
    top: 62vw;
  }
}
@media screen and (min-width: 768px) and (min-height: 1100px) {
  .nnall-beting-money {
    bottom: 89vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
  }
  .betting-box {
    bottom: 2vw;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .loongtiger-all-money {
    top: 60vw;
  }
  .loongtiger-open-list {
    top: 56vw;
  }
  .loongtiger-betting {
    bottom: 11vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 115vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 52vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 60vw;
    bottom: inherit;
    height: 49vw;
  }
}
@media screen and (min-width: 768px) and (min-height: 1137px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 65vw;
    bottom: inherit;
    height: 49vw;
  }
}
@media screen and (min-width: 768px) and (min-height: 1185px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 49vw;
  }
}
@media screen and (min-width: 768px) and (min-height: 1200px) {
  .nnall-beting-money {
    bottom: 99vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
  }
  .betting-box {
    bottom: 7vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .loongtiger-all-money {
    top: 65.5vw;
  }
  .loongtiger-open-list {
    top: 58vw;
  }
  .loongtiger-betting {
    bottom: 15vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
  }
}
@media screen and (min-width: 768px) and (min-height: 1230px) {
  .chess-redblackwar-start .redblackwar-all-money {
    top: 62vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 74vw;
    bottom: inherit;
    height: 49vw;
  }
}
/** 800W **/
@media screen and (min-width: 800px) and (min-height: 1100px) {
  .nnall-beting-money {
    bottom: 111vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -12vw;
  }
  .betting-box {
    bottom: 2vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .betting-box .betting-list > div {
    height: 15vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 61vw;
    bottom: inherit;
    height: 47vw;
  }
  .loongtiger-open-list {
    top: 56vw;
  }
  .loongtiger-all-money {
    top: 60.5vw;
  }
  .loongtiger-betting {
    bottom: 8vw;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 134vw;
  }
}
@media screen and (min-width: 800px) and (min-height: 1200px) {
  .nnall-beting-money {
    bottom: 99vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -9vw;
  }
  .betting-box {
    bottom: 8vw;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .betting-box .betting-list > div {
    height: 20vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 61vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 71vw;
    bottom: inherit;
    height: 47vw;
  }
  .loongtiger-open-list {
    top: 58vw;
  }
  .loongtiger-all-money {
    top: 64.5vw;
  }
  .loongtiger-betting {
    bottom: 13vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 116vw;
  }
}
@media screen and (min-width: 800px) and (min-height: 1280px) {
  .nnall-beting-money {
    bottom: 104vw;
  }
}
/** 1024 **/
@media screen and (min-width: 1024px) and (min-height: 1300px) {
  .nnall-beting-money {
    bottom: 75vw;
  }
  .nn100-chipbg {
    height: 100vh;
    bottom: -21vw;
  }
  .betting-box {
    bottom: -5vw;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  .loongtiger-open-list {
    top: 58vw;
  }
  .loongtiger-all-money {
    top: 42.5vw;
  }
  .loongtiger-betting {
    bottom: 5vw;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 160vw;
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 49vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 55vw;
    bottom: inherit;
    height: 42vw;
  }
}
@media screen and (min-width: 1024px) and (min-height: 1350px) {
  .loongtiger-all-money {
    top: 42.5vw;
  }
  .loongtiger-betting {
    bottom: 7vw;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .chess-redblackwar-start .redblackwar-all-money {
    top: 52vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 59vw;
    bottom: inherit;
    height: 42vw;
  }
}
@media screen and (min-width: 1024px) and (min-height: 1400px) {
  .nnall-beting-money {
    bottom: 79vw;
  }
  .betting-box {
    bottom: -3vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .loongtiger-betting {
    bottom: 10vw;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
  .loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he {
    width: 134vw;
  }
  .chess-redblackwar-start .redblackwar-betting {
    top: 62vw;
    bottom: inherit;
    height: 42vw;
  }
}
/** 兼容处理结束 **/
.loongtiger-chip-head #area-poker1,
.loongtiger-chip-head #area-poker2 {
  margin-top: 0.25rem;
}
/* .loongtiger-chip-head #area-poker1 {
  margin-left: 0.3rem;
}
.loongtiger-chip-head #area-poker2 {
  margin-right: 0.1rem;
} */
.loongtiger-chip-head.loongtiger-chip-show > div.loongtiger-chip-left {
  background-position: -46.51163rem !important;
}
.loongtiger-chip-head.loongtiger-chip-show > div.loongtiger-chip-right {
  background-position: -46.51163rem !important;
}
.loongtiger-open-list > .loongtiger-opennumber > em.trend-show {
  opacity: 0 !important;
}
/* 龙赢动画 */
/* 修改原有样式 */
.loongtiger-betting > div .loongtiger-betting-loong,
.loongtiger-betting > div .loongtiger-betting-tiger {
  background: none !important;
  background-size: none !important;
  background-position: 1000vw !important;
  position: relative;
  z-index: 10;
}
.aus-long-content,
.aus-tiger-content,
.aus-he-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9;
}
.aus-long-content.show,
.aus-tiger-content.show,
.aus-he-content.show {
  z-index: 11;
}
.aus-he-content {
  background: url(https://images.imags-google.com/game/he-bg.png) no-repeat;
  background-size: 100% 100%;
}
.aus-he {
  background: url(https://images.imags-google.com/game/he-step.png) no-repeat;
  background-size: 6.5rem auto;
  background-position: center 0;
  width: 6rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  top: 60%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.aus-he.aus-he-small {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  left: 8rem;
  top: 2.2rem;
}
.aus-he1 {
  background-position: center 0;
}
.aus-he2 {
  background-position: center -4.35rem;
}
.aus-he3 {
  background-position: center -8.72rem;
}
.aus-he4 {
  background-position: center -13.08rem;
}
.aus-he5 {
  background-position: center -17.4rem;
}
.aus-he6 {
  background-position: center -21.7rem;
}
.aus-he7 {
  background-position: center -26rem;
}
.aus-he8 {
  background-position: center -30.35rem;
}
.aus-long.show {
  /* animation: .5s 1s changeOpacity forwards; */
}
.aus-long {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: url(https://images.imags-google.com/game/dragon-step.png)
    no-repeat;
  background-size: 6.5rem auto;
  background-position: center 0;
  opacity: 1;
  z-index: 2;
}
.aus-long.aus-long1 {
  background-position: center 0;
}
.aus-long.aus-long2 {
  background-position: center -5.75rem;
}
.aus-long.aus-long3 {
  background-position: center -11.52rem;
}
.aus-long.aus-long4 {
  background-position: center -17.28rem;
}
.aus-long.aus-long5 {
  background-position: center -22.97rem;
}
.aus-long.aus-long6 {
  background-position: center -28.8rem;
}
.aus-long.aus-long7 {
  background-position: center -34.65rem;
}
.aus-long.aus-long8 {
  background-position: center -40.43rem;
}
.aus-tiger-bj.show {
  -webkit-animation: 0.5s changeWidth forwards;
  animation: 0.5s changeWidth forwards;
}
.aus-tiger {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: url(https://images.imags-google.com/game/tiger-step.png) no-repeat;
  background-size: 6.5rem auto;
  background-position: center -1.4rem;
  opacity: 1;
  z-index: 2;
}
.aus-tiger.aus-tiger1 {
  background-position: center -1.4rem;
}
.aus-tiger.aus-tiger2 {
  background-position: center -7.41rem;
}
.aus-tiger.aus-tiger3 {
  background-position: center -13.42rem;
}
.aus-tiger.aus-tiger4 {
  background-position: center -19.45rem;
}
.aus-tiger.aus-tiger5 {
  background-position: center -25.4rem;
}
.aus-tiger.aus-tiger6 {
  background-position: center -31.39rem;
}
.aus-tiger.aus-tiger7 {
  background-position: center -37.41rem;
}
.aus-tiger.aus-tiger8 {
  background-position: center -43.44rem;
}
.aus-tiger-bj {
  position: absolute;
  top: 0;
  /* background: rgba(92, 90, 148, 0.7); */
  /* background: url(https://images.imags-google.com/game/loongBg2.png) center left repeat; */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(220, 182, 149, 0.6)),
    to(rgb(175, 125, 88))
  );
  background: linear-gradient(
    to bottom,
    rgba(220, 182, 149, 0.6),
    rgb(175, 125, 88)
  );
  width: 100%;
  height: 100%;
  z-index: 3;
}
.aus-long-bj.show {
  -webkit-animation: 0.5s changeWidth forwards;
  animation: 0.5s changeWidth forwards;
}
.aus-long-bj {
  position: absolute;
  top: 0;
  /* background: rgba(92, 90, 148, 0.7); */
  /* background: url(https://images.imags-google.com/game/loongBg2.png) center left repeat; */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(149, 170, 226, 0.8)),
    to(rgb(104, 106, 158))
  );
  background: linear-gradient(
    to bottom,
    rgba(149, 170, 226, 0.8),
    rgb(104, 106, 158)
  );
  width: 100%;
  height: 100%;
  z-index: 3;
}
@-webkit-keyframes changeWidth {
  0% {
    width: 100%;
  }
  to {
    width: 0;
  }
}
@keyframes changeWidth {
  0% {
    width: 100%;
  }
  to {
    width: 0;
  }
}
@-webkit-keyframes changeOpacity {
  0% {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
@keyframes changeOpacity {
  0% {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes changeZindex {
  0% {
    z-index: 9;
  }
  to {
    z-index: 99;
  }
}
@keyframes changeZindex {
  0% {
    z-index: 9;
  }
  to {
    z-index: 99;
  }
}
.aus-longwin-show1 {
  background-position: 2vw -7vw;
}
.aus-longwin-show2 {
  background-position: -34vw -7vw;
}
.aus-longwin-show3 {
  background-position: -69.8vw -7vw;
}
.aus-longwin-show4 {
  background-position: -105.7vw -7vw;
}
.aus-longwin-show5 {
  background-position: -141.5vw -7vw;
}
.aus-longwin-show6 {
  background-position: -177.5vw -7vw;
}
.aus-longwin-show7 {
  background-position: -213.3vw -7vw;
}
.aus-longwin-show8 {
  background-position: -249vw -7vw;
}
@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-46.51163rem, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-46.51163rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  20% {
    opacity: 0.8;
    -webkit-transform: scale3d(0.475, 0.475, 0.475)
      translate3d(0.46512rem, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0.46512rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
  70% {
    opacity: 1;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-46.51163rem, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-46.51163rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  20% {
    opacity: 0.8;
    -webkit-transform: scale3d(0.475, 0.475, 0.475)
      translate3d(0.46512rem, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0.46512rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
  70% {
    opacity: 1;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(46.51163rem, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(46.51163rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  20% {
    opacity: 0.8;
    -webkit-transform: scale3d(0.475, 0.475, 0.475)
      translate3d(-0.46512rem, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-0.46512rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
  70% {
    opacity: 1;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(46.51163rem, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(46.51163rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  20% {
    opacity: 0.8;
    -webkit-transform: scale3d(0.475, 0.475, 0.475)
      translate3d(-0.46512rem, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-0.46512rem, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
  70% {
    opacity: 1;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
/* 虎赢动画 */
.aus-tigerwin-show {
  width: 100%;
  height: 165%;
  position: absolute;
  bottom: 0;
  background: url(https://images.imags-google.com/game/dragon-tiger-step.png)
    no-repeat;
  background-size: 288vw auto;
  background-position: 2.2vw -40vw;
  opacity: 0;
  -webkit-animation: zoomInRight 1.5s ease-in forwards;
  animation: zoomInRight 1.5s ease-in forwards;
}
.aus-tigerwin-show1 {
  background-position: 2.2vw -40vw;
}
.aus-tigerwin-show2 {
  background-position: -34vw -40vw;
}
.aus-tigerwin-show3 {
  background-position: -69.9vw -40vw;
}
.aus-tigerwin-show4 {
  background-position: -105.8vw -40vw;
}
.aus-tigerwin-show5 {
  background-position: -141.6vw -40vw;
}
.aus-tigerwin-show6 {
  background-position: -177.5vw -40vw;
}
.aus-tigerwin-show7 {
  background-position: -213.4vw -40vw;
}
.aus-tigerwin-show8 {
  background-position: -249.2vw -40vw;
}
/* 火焰 */
.loongtiger-chip-head .lt-fire-content {
  width: 2.05rem;
  height: 3.6rem;
  position: absolute;
  background: url(https://images.imags-google.com/game/lt-fire-box.png)
    no-repeat;
  background-size: 109vw 42.3vw;
  background-position: -2.12vw -20.2vw;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
.loongtiger-chip-head .lt-fire-content-l {
  /* left: 4.89rem; */
}
.loongtiger-chip-head .lt-fire-content-t {
  /* right: 5.1rem; */
}
.loongtiger-chip-head .lt-fire-content1 {
  background-position: -2.12vw -20.2vw;
}
.loongtiger-chip-head .lt-fire-content2 {
  background-position: -18.34vw -20.2vw;
}
.loongtiger-chip-head .lt-fire-content3 {
  background-position: -34.8vw -20.2vw;
}
.loongtiger-chip-head .lt-fire-content5 {
  background-position: -51.08vw -20.2vw;
}
.loongtiger-chip-head .lt-fire-content4 {
  background-position: -67.32vw -20.2vw;
}
.loongtiger-chip-head .lt-fire-content6 {
  background-position: -83.77vw -20.2vw;
}
.loongtiger-chip-head .lt-fire {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url(https://images.imags-google.com/game/lt-fire-box.png)
    no-repeat;
  background-size: 100vw 41vw;
  background-position: 0vw -5.1vw;
}
.loongtiger-chip-head .lt-fire1 {
  background-position: 0vw -5.1vw;
}
.loongtiger-chip-head .lt-fire2 {
  background-position: -13vw -5.1vw;
}
.loongtiger-chip-head .lt-fire3 {
  background-position: -26vw -5.1vw;
}
.loongtiger-chip-head .lt-fire4 {
  background-position: -38vw -5.1vw;
}
.loongtiger-chip-head .lt-fire5 {
  background-position: -51vw -5.1vw;
}
.loongtiger-chip-head .lt-fire6 {
  background-position: -63vw -5.1vw;
}
.loongtiger-chip-head .lt-fire7 {
  background-position: -76vw -5.1vw;
}
.loongtiger-chip-head .lt-fire8 {
  background-position: -89vw -5.1vw;
}
.longtiger-kj-container {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.container-bg {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  -webkit-animation: enterMask 1.5s ease-in forwards, outMask 0.5s 1.5s forwards;
  animation: enterMask 1.5s ease-in forwards, outMask 0.5s 1.5s forwards;
}
.longtiger-kj-container .kj-box {
  position: relative;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  height: 7rem;
}
.longtiger-kj-container .long {
  width: 50%;
  height: 7rem;
  background: url(https://images.imags-google.com/game/dragon-tiger-head.png)
    no-repeat;
  background-size: 322vw auto;
  background-position: 3.2vw 109%;
  position: absolute;
  left: -3vw;
  bottom: 8vw;
  opacity: 0;
  -webkit-animation: enterLongBg 1.5s 0.2s ease-in forwards,
    outLongBg 0.5s 1.5s forwards;
  animation: enterLongBg 1.5s 0.2s ease-in forwards,
    outLongBg 0.5s 1.5s forwards;
}
.longtiger-kj-container .longbg {
  width: 50%;
  height: 5rem;
  background: url(https://images.imags-google.com/game/lt-kj-bg1.png) no-repeat;
  background-size: 100%;
  position: absolute;
  left: 6vw;
  bottom: 7vw;
  opacity: 0;
  -webkit-animation: enterLongBg 1.5s ease-in forwards,
    outLongBg 0.5s 1.5s forwards;
  animation: enterLongBg 1.5s ease-in forwards, outLongBg 0.5s 1.5s forwards;
}
.longtiger-kj-container .tiger {
  width: 50%;
  height: 5rem;
  background: url(https://images.imags-google.com/game/dragon-tiger-head.png)
    no-repeat;
  background-size: 322vw auto;
  background-position: 8.2vw 8%;
  position: absolute;
  right: -0.46512rem;
  bottom: 9vw;
  opacity: 0;
  -webkit-animation: enterTigerBg 1.5s 0.2s ease-in forwards,
    outTigerBg 0.5s 1.5s forwards;
  animation: enterTigerBg 1.5s 0.2s ease-in forwards,
    outTigerBg 0.5s 1.5s forwards;
}
.longtiger-kj-container .tigerbg {
  width: 50%;
  height: 5rem;
  background: url(https://images.imags-google.com/game/lt-kj-bg2.png) no-repeat;
  background-size: 100%;
  position: absolute;
  right: 7vw;
  bottom: -1vw;
  opacity: 0;
  -webkit-animation: enterTigerBg 1.5s ease-in forwards,
    outTigerBg 0.5s 1.5s forwards;
  animation: enterTigerBg 1.5s ease-in forwards, outTigerBg 0.5s 1.5s forwards;
}
.longtiger-kj-container .vs {
  width: 24vw;
  height: 20vw;
  background: url(https://images.imags-google.com/game/lt-kj-vs.png) no-repeat;
  background-size: 100%;
  position: absolute;
  left: 40%;
  top: 15vw;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  opacity: 0;
  -webkit-animation: enterVs 1.5s ease-in forwards, outVs 0.5s 1.5s forwards;
  animation: enterVs 1.5s ease-in forwards, outVs 0.5s 1.5s forwards;
}
/* 龙序列图 */
.loongtiger-chip-head > div .long-img .bg-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 32vw;
  background: url(https://images.imags-google.com/game/dragon-tiger-head.png)
    no-repeat;
  background-size: 372vw auto;
  background-position: -13.9vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation1 {
  background-position: -13.9vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation2 {
  background-position: -59.7vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation3 {
  background-position: -106.5vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation4 {
  background-position: -152.5vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation5 {
  background-position: -199vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation6 {
  background-position: -245.4vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation7 {
  background-position: -291.8vw -48vw;
}
.loongtiger-chip-head > div .long-img .bg-img.long-animation8 {
  background-position: -338vw -48vw;
}
/* 虎序列图 */
.loongtiger-chip-head > div .tiger-img .bg-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 84%;
  background: url(https://images.imags-google.com/game/dragon-tiger-head.png)
    no-repeat;
  background-size: 372vw auto;
  background-position: -1vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation1 {
  background-position: -1vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation2 {
  background-position: -47.3vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation3 {
  background-position: -93.7vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation4 {
  background-position: -139.8vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation5 {
  background-position: -186.2vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation6 {
  background-position: -232.7vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation7 {
  background-position: -279vw -5vw;
}
.loongtiger-chip-head > div .tiger-img .bg-img.tiger-animation8 {
  background-position: -325.4vw -5vw;
}
@-webkit-keyframes enterMask {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes outMask {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 0.6;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes enterLongBg {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-46.51163rem, 0, 0);
    transform: translate3d(-46.51163rem, 0, 0);
  }
  30% {
    opacity: 0.5;
    -webkit-transform: translate3d(1.16279rem, 0, 0);
    transform: translate3d(1.16279rem, 0, 0);
  }
  45% {
    -webkit-transform: translate3d(-0.46512rem, 0, 0);
    transform: translate3d(-0.46512rem, 0, 0);
  }
  60% {
    -webkit-transform: translate3d(0.23256rem, 0, 0);
    transform: translate3d(0.23256rem, 0, 0);
  }
  70% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes outLongBg {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  60% {
    opacity: 0.5;
    -webkit-transform: translate3d(2.32558rem, 0, 0);
    transform: translate3d(2.32558rem, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-13.95349rem, 0, 0);
    transform: translate3d(-13.95349rem, 0, 0);
  }
}
@-webkit-keyframes enterTigerBg {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(46.51163rem, 0, 0);
    transform: translate3d(46.51163rem, 0, 0);
  }
  30% {
    opacity: 0.5;
    -webkit-transform: translate3d(-1.16279rem, 0, 0);
    transform: translate3d(-1.16279rem, 0, 0);
  }
  45% {
    -webkit-transform: translate3d(0.46512rem, 0, 0);
    transform: translate3d(0.46512rem, 0, 0);
  }
  60% {
    -webkit-transform: translate3d(-0.23256rem, 0, 0);
    transform: translate3d(-0.23256rem, 0, 0);
  }
  70% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes outTigerBg {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  60% {
    opacity: 0.5;
    -webkit-transform: translate3d(-2.32558rem, 0, 0);
    transform: translate3d(-2.32558rem, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(13.95349rem, 0, 0);
    transform: translate3d(13.95349rem, 0, 0);
  }
}
@-webkit-keyframes enterVs {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }
  30% {
    opacity: 0;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }
  40% {
    -webkit-transform: scale3d(1.6, 1.6, 1.6);
    transform: scale3d(1.6, 1.6, 1.6);
  }
  600% {
    -webkit-transform: scale3d(1.3, 1.3, 1.3);
    transform: scale3d(1.3, 1.3, 1.3);
  }
  70% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes outVs {
  0% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  60% {
    -webkit-transform: scale3d(1.6, 1.6, 1.6);
    transform: scale3d(1.6, 1.6, 1.6);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }
}
</style>