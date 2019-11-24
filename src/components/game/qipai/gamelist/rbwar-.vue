<template>
  <div class="rbwar">
  <div class="zhezhao"></div>
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
      <rb-play @close="close"></rb-play>
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
    <Foo-ter @reback="reback" @sub="sub" :pri="price" :start="start"></Foo-ter>
    <div class="timerdjs" v-show="jishil">{{str}}</div>
    <div data-v-e1fcc0e8 id="bettingBox" class="redblackwar-betting">
      <div data-v-e1fcc0e8>
        <div
          data-v-e1fcc0e8
          @click="add(0)"
          class="ite opacity-box redblackwar-red tl games-font vitem jj"
          style="position:relative"
        >
          <div data-v-e1fcc0e8 class="yet">
            <em data-v-e1fcc0e8>0</em>
          </div>
          <div data-v-e1fcc0e8 id="content1">
            <span data-v-e1fcc0e8>红方</span>
            <span data-v-e1fcc0e8>×</span>
            <span data-v-e1fcc0e8>1.970</span>
          </div>
          <div data-v-e1fcc0e8 class="slide-color">
            <em data-v-e1fcc0e8 class="set-red-black">0</em>
          </div>
          <div
            class="jjafter"
            style="position:absolute;top:0;left:0;height:100%;width:100%;z-index:100;"
          ></div>
        </div>
        <div
          data-v-e1fcc0e8
          @click="add(1)"
          class="ite opacity-box redblackwar-black tr games-font vitem jj"
          style="position:relative"
        >
          <div data-v-e1fcc0e8 class="yet">
            <em data-v-e1fcc0e8>0</em>
          </div>
          <div data-v-e1fcc0e8 id="content2">
            <span data-v-e1fcc0e8>黑方</span>
            <span data-v-e1fcc0e8>×</span>
            <span data-v-e1fcc0e8>1.970</span>
          </div>
          <div data-v-e1fcc0e8 class="slide-color">
            <em data-v-e1fcc0e8 class="set-red-black">0</em>
          </div>
          <div
            class="jjafter"
            style="position:absolute;top:0;left:0;height:100%;width:100%;z-index:100;"
          ></div>
        </div>
      </div>
      <div data-v-e1fcc0e8 class="jj" @click="add(2)" style="position:relative">
        <div data-v-e1fcc0e8 class="ite opacity-box redblackwar-hit bl games-font vitem">
          <div data-v-e1fcc0e8 id="yet">
            <em data-v-e1fcc0e8>0</em>
          </div>
          <div data-v-e1fcc0e8 id="content3">
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
          <div
            class="jjafter"
            style="position:absolute;top:0;left:0;height:100%;width:100%;z-index:100;"
          ></div>
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
import RbPlay from "../howtoplay/rbhowplay";
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
    [Toast.name]: Toast,
    RbPlay
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
      n: "", //全局牛n
      ischip: 1, //默认投注码
      ishow: true,
      winlist: [
        { iswin: false, playnum: 0 },
        { iswin: false, playnum: 0 },
        { iswin: false, playnum: 0 }
      ],
      puklist: [
        //扑克牌列表
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 1, hua: 0 }
      ],
      backpuk: [
        //扑克牌列表
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 1, hua: 0 }
      ],
      chiplist: [], //所有用户的投注码
      jieguo: [], //接收开牌结果集
      vs: [
        //对局列表
        { type: 0, playnum: 0, iswin: false },
        { type: 1, playnum: 0, iswin: false },
        { type: 2, playnum: 0, iswin: false }
      ],
      price: 0,
      start: 30, //默认起始倒计时
      playdate: "2019001", //投注日期
      type: "", //开奖投注状态
      timer: null, //定时器
      djs: 0,
      jishil: false,
      str: "停止下注",
      isactz: false
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
  mounted() {
    alert("维护中,暂不对外开放投注")
    return
    this.sockets.subscribe("move", data => {
      this.chiplist.push(data.tz);
      this.list.push(data.tz);
    });
    //---------------------
    document.addEventListener("visibilitychange", function() {
      //浏览器切换事件
      if (document.visibilityState == "hidden") {
        //离开当前tab标签
        createjs.Sound.stop();
      } else {
        /////回到当前tab标签
        createjs.Sound.play("bg");
      }
    });
    let that = this;
    for (let i = 0; i < $(".jj").length; i++) {}
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
        { id: "chenggong", src: "/mp3/chenggong.mp3" },
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
                $(".jj")
                  .eq(this.chiplist[i].addr)
                  .offset().left - 40,
                $(".jj")
                  .eq(this.chiplist[i].addr)
                  .offset().left +
                  ($(".jj")
                    .eq(this.chiplist[i].addr)
                    .width() -
                    70)
              )}px`,
              top: `${_.random(
                $(".jj")
                  .eq(this.chiplist[i].addr)
                  .offset().top - 20,
                $(".jj")
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
        setTimeout(() => {
          (Math.random() * 10) % 2 == 0 ? this.wanjiashou() : this.zhuangshou();
        }, 2000);
        let s = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
        let size = [
          "baozi",
          "jinshun",
          "jinhua",
          "shunzi",
          "duizi",
          "danzhang"
        ].reverse();
        //校验同牌
        if (x[0].niu == x[1].niu) {
          if (s.indexOf(x[0].maxnum) > s.indexOf(x[1].maxnum)) {
            this.winlist[0].iswin = true;
            $(".ite")
              .eq(0)
              .addClass("on");
            createjs.Sound.play("rwin");
          } else {
            this.winlist[1].iswin = true;
            $(".ite")
              .eq(1)
              .addClass("on");
            createjs.Sound.play("bwin");
          }
          if (x[0].maxnum == x[1].maxnum) {
            let hsize = [1, 0, 2, 3].reverse();
            if (hsize.indexOf(x[0].maxhua) > hsize.indexOf(x[1].maxhua)) {
              this.winlist[0].iswin = true;
              $(".ite")
                .eq(0)
                .addClass("on");
              createjs.Sound.play("rwin");
            } else {
              this.winlist[1].iswin = true;
              $(".ite")
                .eq(1)
                .addClass("on");
              createjs.Sound.play("bwin");
            }
          }
        } else {
          if (size.indexOf(x[0].niu) > size.indexOf(x[1].niu)) {
            this.winlist[0].iswin = true;
            $(".ite")
              .eq(0)
              .addClass("on");
            createjs.Sound.play("rwin");
          } else {
            this.winlist[1].iswin = true;
            $(".ite")
              .eq(1)
              .addClass("on");
            createjs.Sound.play("bwin");
          }
        }
        if (this.winlist[0].iswin && size.indexOf(x[0].niu) != 0) {
          $(".ite")
            .eq(2)
            .addClass("on");
          console.log("luck", size.indexOf(x[0].niu));
        }
        if (this.winlist[1].iswin && size.indexOf(x[1].niu) != 0) {
          $(".ite")
            .eq(2)
            .addClass("on");
          console.log("luck", size.indexOf(x[1].niu));
        }
        console.log(this.winlist);
        setTimeout(() => {
          $(".redblackwar-red,.redblackwar-black,.redblackwar-hit").removeClass(
            "on"
          );
        }, 10000);
        //结算
      }
    }
  },
  methods: {
    jishiv(x) {
      x > 17 ? "开奖时间" : "下注时间";
    },
    getdata() {
      return new Promise((res, rej) => {
        this.axios.post("/rbwar").then(data => {
          console.log(data.data.s, data, ".........");
          res(data.data);
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
      this.getdata().then(x => {
        this.start = 30 - (x.s % 30);
        this.djs = 15 - (x.s % 15);
        this.playdate = parseInt(x.data[0].playdate);
        this.puklist = JSON.parse(x.data[0].playnum);
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
          this.isactz=true
          this.type = "投注中";
        } else {
          this.type = "开奖中";
          this.isactz=false
        }
        if (this.start == 3) {
          // this.shoupai();
          setTimeout(() => {
            this.fapai();
            createjs.Sound.play("xiazhu");
            this.str = "开始下注";
            this.isactz = true;
            this.puklist = this.backpuk;
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
        if (this.start == 12) {
          this.$socket.emit("user", {
            username: JSON.parse(sessionStorage.getItem("userinfo")).name
          });
        }
        if (this.start == 15) {
          this.getdata().then(x => {
            this.start = 30 - (x.s % 30);
            this.djs = 15 - (x.s % 15);
            this.playdate = parseInt(x.data[0].playdate);
            this.puklist = JSON.parse(x.data[0].playnum);
          });
          createjs.Sound.play("tingzhu");
          this.str = "停止下注";
          this.isactz = false;
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
        x.playnum = 0;
      });
      this.price = 0;
    },
    sub() {
      if (!this.isactz) { 
        return;
      }
      if(this.price==0){
        return 
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
      shopcar.iskj = 0;
      shopcar.playmode = this.playmode;
      this.axios.post("/shopcar", shopcar).then(x => {
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
          setTimeout(() => {
            createjs.Sound.play("chenggong");
          }, 100);
        }
          this.$socket.emit("user", {
            username: JSON.parse(sessionStorage.getItem("userinfo")).name
          });
          this.reback();
      });
    },
    add(x) {
      if (!this.isactz) {
        this.$notify({
          message: "本期投注已截止,请等待开奖",
          background: "#dc3b40",
          duration: 1500
        });
        return;
      }
      let tz = {};
      tz.price = this.ischip;
      tz.addr = x;
      this.$socket.emit("add", {
        data: tz
      });
      this.winlist[x].playnum += this.ischip;
      createjs.Sound.play("chip");
      //加入用户投注列表
      this.vs[x].iswin = true;
      this.vs[x].playnum += this.ischip;
      // this.chiplist.push(tz);
      console.log(this.vs);
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
                left: $(".player").offset().left + "px"
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
                top: $("#bker").offset().top - 33 + "px",
                left: $("#bker").offset().left - 26 + "px"
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
      console.log(j, "cr");

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
      this.winlist.map(x => {
        console.log(x);

        x.iswin = false;
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
.zhezhao{
  position: absolute;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: .8)
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
  bottom: 153px;
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
  z-index: -1;
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
.yet {
  border-bottom-left-radius: 11px;
  border-bottom-right-radius: 11px;
}
#yet {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.on {
  animation: on 1s linear 0s alternate infinite forwards;
}
@keyframes on {
  0% {
    background: transparent;
  }
  100% {
    background: rgba(#ccc, 0.5);
  }
}
</style>