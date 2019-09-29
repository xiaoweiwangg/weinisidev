<template>
  <div class="niuniu">
    <van-popup v-model="ishow">
      <how-play @close="close"></how-play>
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
      :class="item.cls||'other'"
    ></chi-per>
    <div>
      <div class="cont">
        <div class="zhuang">
          <div class="name">
            庄
            <div class="p">
              <div class="xs"></div>
            </div>
          </div>
        </div>
        <div class="x1">
          <div class="name">
            闲1
            <div class="p">
              <div class="xs"></div>
            </div>
          </div>
        </div>
        <div class="x2">
          <div class="name">
            闲2
            <div class="p">
              <div class="xs"></div>
            </div>
          </div>
        </div>
        <div class="x3">
          <div class="name">
            闲3
            <div class="p">
              <div class="xs"></div>
            </div>
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
          <div class="v">
            <div class="vs"></div>
            <div class="vs"></div>
            <div class="vs"></div>
          </div>
          <div class="jj" v-for="(it,index) in vs" :key="index">
            <div class="sj" @click="add(index,ix)" v-for="(i,ix) in it" :key="ix">
              <div class="det">
                <p>{{i.type|fname}}</p>
                <p>x</p>
                <p>1.970</p>
              </div>
              <div class="self">我的投注: {{i.playnum}}</div>
              <div class="w" v-show="i.iswin">
                <div class="win"></div>
                <div class="sun"></div>
              </div>
              <div class="w2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <lotte-r :cpl="cpl" class="cpr" @chek="ck"></lotte-r>
    <Foo-ter @reback="reback" @sub="sub" :pri="price" :start="start"></Foo-ter>
    <div class="timerdjs" v-show="jishil">{{str}}</div>
  </div>
</template>

<script>
import HowPlay from "../howtoplay/howniuniu";
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
    HowPlay
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
      isactz: false,
      puklist: [
        //扑克牌列表
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 }
      ],
      backpuk: [
        //扑克牌列表
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 0, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 1, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 2, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 },
        { num: 14, type: 3, hua: 0 }
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
        ],
        [
          { type: 0, playnum: 0, iswin: false },
          { type: 3, playnum: 0, iswin: false }
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
      pri: 0,
      tj: false,
      main: [],
      main2: [
        { id: "bg", src: "/mp3/bg.mp3" },
        { id: "daojishi", src: "/mp3/daojishi.mp3" },
        { id: "chenggong", src: "/rbwar/chenggong.mp3" },
        { id: "chexiao", src: "/rbwar/chexiao.mp3" },
        { id: "dingdong", src: "/mp3/dingdong.wav" },
        { id: "xiazhu", src: "/mp3/xiazhu.mp3" },
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
      mainfest: [
        { id: "bg", src: "/mp3/bg.mp3" },
        { id: "daojishi", src: "/mp3/daojishi.mp3" },
        { id: "chenggong", src: "/rbwar/chenggong.mp3" },
        { id: "chexiao", src: "/rbwar/chexiao.mp3" },
        { id: "dingdong", src: "/mp3/dingdong.wav" },
        { id: "xiazhu", src: "/mp3/xiazhu.mp3" },
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
      volume: 1,
      jingyin: 0
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
    if (this.$store.state.nnload) {
      this.isload = false;
    }
    this.sockets.subscribe("move", data => {
      this.chiplist.push(data.tz);
      this.list.push(data.tz);
    });
    this.sockets.subscribe("qtniuniu", data => {
      this.pm = data.pm;
    });
    //切换浏览器动作
    let that = this;
    document.addEventListener("visibilitychange", function() {
      //浏览器切换事件
      if (document.visibilityState == "hidden") {
        //离开当前tab标签
        that.mainfest = that.main;
        createjs.Sound.stop();
        that.volume = that.jingyin;
      } else {
        /////回到当前tab标签
        that.mainfest = that.main2;
        that.volume = 1;
      }
    });
    for (let i = 0; i < $(".jj .sj").length; i++) {}
    let p = this.per;
    var loader = new createjs.LoadQueue();
    // 添加声音支持
    loader.installPlugin(createjs.Sound);
    // 检测文件加载进度
    loader.addEventListener("progress", loadprogress);
    //加载文件列表
    loader.loadManifest(this.mainfest, true);
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
      createjs.Sound.play("bg", { loop: -1, volume: that.volume });
      that.cpl = true;
      that.init();
      that.$store.state.nnload = true;
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
  // 监听所有用户投注并执行动作
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
            300
          );
      }
    }
  },
  watch: {
    // 监听开奖结果并对比计算
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
        this.vs.map(x => {
          x.map(v => {
            if (v.iswin) {
              this.pri += v.playnum * 1.97;
            }
          });
        });
      }
    }
  },
  methods: {
    // 获取开奖状态
    jishiv(x) {
      x > 17 ? "开奖时间" : "下注时间";
    },
    // 获取数据
    getdata() {
      return new Promise((res, rej) => {
        this.axios.post("/niuniu").then(data => {
          res(data.data.data[0]);
        });
      });
    },
    // 关闭玩法组件
    close() {
      this.ishow = !this.ishow;
    },
    // 关闭背景音乐
    play() {
      createjs.Sound.stop();
    },
    // 初始化操作
    init() {
      this.$socket.emit("niuniu", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      });
      this.getdata().then(x => {
        this.playdate = parseInt(x.playdate);
        this.puklist = JSON.parse(x.playnum);
      });
      this.sockets.subscribe("niuniu", data => {
        // 初始倒计时时间
        this.start = 30 - (data.s % 30);
        this.djs = 15 - (data.s % 15);
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
      //定时器
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
            createjs.Sound.play("xiazhu", { volume: this.volume });
            this.price = 0;
            this.str = "开始下注";
            this.isactz = true;
            this.jishil = true;
            this.reback();
            this.tj = false;
          }, 2000);
          if (this.start % 15 == 0 && this.start != 15) {
          }
        } else {
          this.str = null;
          this.jishil = false;
        }
        if (this.start == 18) {
          createjs.Sound.play("daojishi", { volume: this.volume });
          this.str = "3";
          this.jishil = true;
        }
        if (this.start == 17) {
          createjs.Sound.play("daojishi", { volume: this.volume });
          this.str = "2";
          this.jishil = true;
        }
        if (this.start == 16) {
          createjs.Sound.play("daojishi", { volume: this.volume });
          this.str = "1";
          this.jishil = true;
        }
        if (this.start == 12) {
          this.$socket.emit("user", {
            username: JSON.parse(sessionStorage.getItem("userinfo")).name
          });
        }
        if (this.start == 15) {
          createjs.Sound.play("tingzhu", { volume: this.volume });
          this.str = "停止下注";
          this.jishil = true;
          this.isactz = false;
          this.getdata().then(x => {
            console.log(x);
            this.playdate = parseInt(x.playdate);
            this.puklist = JSON.parse(x.playnum);
          });
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
    //撤销动作
    reback() {
      this.vs.map(x => {
        x.map(v => (v.playnum = 0));
      });
      this.price = 0;
      this.pri = 0;
      this.meshou();
    },
    //提交动作
    sub() {
      if (!this.isactz) {
        return;
      }
      let shopcar = {};
      (shopcar.username = JSON.parse(sessionStorage.getItem("userinfo")).name),
        (shopcar.buydet = JSON.stringify(this.vs));
      shopcar.userinput = JSON.stringify(this.vs);
      shopcar.playdate = `${this.playdate + 1}期`;
      shopcar.playname = "百人牛牛";
      shopcar.playgame = "niuniu";
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
          createjs.Sound.play("dingdong", { volume: this.volume });
          this.$socket.emit("user", {
            username: JSON.parse(sessionStorage.getItem("userinfo")).name
          });
        } else if (x.data.msg == "ok") {
          this.price = 0;
          Toast.success("订单提交成功!");
          this.tj = true;
          createjs.Sound.play("chenggong", { volume: this.volume });
          this.$socket.emit("user", {
            username: JSON.parse(sessionStorage.getItem("userinfo")).name
          });
        }
      });
    },
    // 下注动作
    add(x, y) {
      if (!this.isactz) {
        this.$notify({
          message: "本期投注已截止,请等待开奖",
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
      tz.cls = "me";
      this.$socket.emit("add", {
        data: tz
      });
      this.vs[x][y].playnum += this.ischip;
      createjs.Sound.play("chip", { volume: this.volume });
      this.$emit("add", this.price);
      //加入用户投注列表
      this.price += this.ischip;
    },
    // 选定注码
    ck(x) {
      this.ischip = x;
    },
    // 开奖结果背景
    nnbg(x) {
      switch (x) {
        case "whn":
          return "-12px 5.45%";
          break;
        case "shn":
          return "-12px 10.1%";
          break;
        case "z4":
          return "-12px 0.6%";
          break;
        case 0:
          return "-12px 14.8%";
          break;
        case 1:
          return "-12px 57.5%";
          break;
        case 2:
          return "-12px 52.5%";
          break;
        case 3:
          return "-12px 47.9%";
          break;
        case 4:
          return "-12px 43.5%";
          break;
        case 5:
          return "-12px 38.7%";
          break;
        case 6:
          return "-12px 33.5%";
          break;
        case 7:
          return "-12px 29%";
          break;
        case 8:
          return "-12px 24.5%";
          break;
        case 9:
          return "-12px 19.8%";
          break;
        default:
          return "-12px 62%";
          break;
      }
    },
    // 我的收注
    meshou() {
      for (let i = 0; i < $(".me").length; i++) {
        setTimeout(() => {
          $(".me")
            .eq(i)
            .animate(
              {
                opacity: 0.2,
                top: $("#self").offset().top + "px",
                left: $("#self").offset().left + "px"
              },
              950,
              function() {
                $(".me")
                  .eq(i)
                  .css({ opacity: 0 });
                // this.chiplist = [];
              }
            );
        }, i * 10);
        if (i % 2 == 0) {
        }
      }
    },
    //玩家收注
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
    // 庄家收注
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
        createjs.Sound.play("shouzhu", { volume: this.volume });
        if (i % 2 == 0) {
        }
      }
    },
    // 求数组的差集函数
    dif(a, b) {
      for (let i = 0; i < 3; i++) {
        a.splice(a.indexOf(b[i]), 1);
      }
      return a;
    },
    // 结算方法
    nnme(j) {
      let jg = {};
      //校验最大单牌
      jg.maxnum = _.sortBy(j, x => x.num)[4].num;
      //校验最大花色
      jg.maxhua = _.sortBy(j, x => x.num)[4].hua;
      //校验四炸
      for (let i in _(j.map(x => x.num)).countBy()) {
        if (_(j.map(x => x.num)).countBy()[i] == 4) {
          //校验四炸的值
          jg.z4k = i;
        }
      }
      jg.maxleng = Math.max(...Object.values(_(j.map(x => x.num)).countBy()));
      //校验五花牛
      let whn = 0;
      let wh = j.map(x => x.num);
      for (let m = 0; m < wh.length; m++) {
        if (wh[m] > 10) {
          whn++;
        }
      }
      if (whn == 5) {
        jg.whn = 5;
      } else if (whn == 4) {
        jg.shn = 4;
      }
      //校验牛n
      let arr = j;
      let arr2 = j;
      let arr3 = j;
      let res = [];
      let num = "";
      for (let i = 0; i < arr.length; i++) {
        for (let c = 0; c < arr2.length; c++) {
          for (let d = 0; d < arr3.length; d++) {
            if (i != c && i != d && c != d) {
              res.push(
                [arr[i].num, arr2[c].num, arr3[d].num]
                  .sort((a, b) => a - b)
                  .join(",")
              );
            }
          }
        }
      }
      let r = [...new Set(res)].map(x => x.split(",").map(v => v - 0));
      let n = 0;
      let jarr = [];
      for (let i in r) {
        if (
          r[i].map(x => (x > 10 ? 10 : x)).reduce((a, b) => a + b) % 10 ==
          0
        ) {
          n++;
          jarr.push(
            this.dif(j.map(x => x.num), r[i])
              .map(v => (v > 10 ? 10 : v))
              .reduce((a, b) => a + b) % 10
          );
        }
      }
      if (n > 0) {
        jg.niu = Math.max(...jarr);
      } else {
        jg.niu = "-1";
      }

      if (jg.shn == 4) {
        jg.niu = "shn";
      }
      if (jg.whn == 5) {
        jg.niu = "whn";
      }
      if (jg.maxleng == 4) {
        jg.niu = "z4";
      }
      this.n = jg.niu;
      this.jieguo.push(jg);
      createjs.Sound.play("n" + jg.niu, { volume: this.volume });
    },
    // 是否翻转
    isfz(x, y, z) {
      if (z) {
        return false;
      }
      if (!x.includes(y)) {
        return true;
      }
    },
    // 开牌动作
    kaipai() {
      let arr = [1, 2, 3, 0];
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          this.t.push(arr[i]);
          setTimeout(() => {
            createjs.Sound.play("kaipai", { volume: this.volume });
            setTimeout(() => {
              this.nnme(this.puklist.filter(x => x.type == arr[i]));
              $(".xs")
                .eq(arr[i])
                .css({
                  backgroundPosition: this.nnbg(this.n)
                });
            }, 100);
            $(".p")
              .eq(arr[i])
              .addClass("ct");
          }, 400);
        }, i * 900);
      }
    },
    // 发牌动作
    fapai() {
      this.jieguo = [];
      this.fz = false;
      this.t = [];
      let n = 0;
      let b = 0;
      for (let c = 0; c < $(".pk").length; c++) {
        setTimeout(() => {
          if (c != 0 && c % 5 == 0) {
            n++;
            b = n * ($(window).width() * 0.1);
          }
          if (c % 5 == 0) {
            createjs.Sound.play("fapai", { volume: this.volume });
          }
          $(".pk")
            .eq(c)
            .animate(
              {
                opacity: 1,
                top: "0px",
                left: b + c * ($(window).width() * 0.028) + "px"
              },
              300,
              function() {}
            );
        }, c * 80);
      }
    },
    // 收牌动作
    shoupai() {
      this.reback();
      this.vs.map(x => {
        x.map(v => (v.iswin = false));
      });
      this.jieguo = [];
      this.fz = false;
      for (let i = 0; i < 4; i++) {
        createjs.Sound.play("fapai", { volume: this.volume });
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
            createjs.Sound.play("fapai", { volume: this.volume });
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
      this.puklist = this.backpuk;
    },
    // 初始牌面
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
              "scale(0.55) rotateX(0deg) rotateY(0deg) translatex(-10px)",
            top: "-5px",
            left: b + c * ($(window).width() * 0.028) + "px"
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.w2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999999999999999999999999;
}
.w {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .win {
    background: url("./../../../../assets/img/sun.png");
    background-size: 100%;
    background-position: center center;
    position: absolute;
    height: 108%;
    width: 100%;
    top: -10px;
    animation: sun 3s linear infinite;
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
@keyframes sun {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.xs {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(https://images.imags-google.com/game/brnnJackWin.png)
    no-repeat;
  background-size: auto 100vh;
  // background-position: -12px 43%;
}
.ad {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999999999;
  background: url(https://images.imags-google.com/game/nn-progress.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;
    bottom: 120px;
    letter-spacing: 5px;
    font-size: 25px;
    color: gold;
    text-shadow: 5px 9px 3px black;
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
  height: 30px !important;
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
  margin-top: 47px;
  .desk {
    width: 100%;
    height: 108%;
    background: url(https://images.imags-google.com/game/nn100bg2.png);
    background-size: 100% 100vh;
    background-position: 0 -50px;
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
    margin-top: 28.5%;
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
    position: fixed;
    left: 0;
    right: 0;
    bottom: 146px;
    .sj {
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: space-around;
      width: 27%;
      height: 74px;
      filter: brightness(1.1);
      // border: 1px dashed rgb(255, 255, 255);
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
          line-height: 192%;
        }
      }
      .zhushu {
        color: #ce5855;
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
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
      }
    }
  }
}
.niuniu {
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
</style>