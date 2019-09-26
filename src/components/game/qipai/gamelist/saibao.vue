<template>
  <div class="niuniu">
    <van-popup v-model="ishow">
      <div data-v-e1fcc0e8 title="2001" class="how-to-play">
        <div class="game-chess-img how-to-play-top">
          <div class="game-chess-img how-to-play-head"></div>
          <div class="game-chess-img how-to-play-close" @click="close"></div>
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
    <div>
      <div data-v-e1fcc0e8="" class="sicbo-container"><div data-v-e1fcc0e8="" class="sibcbo-tx-content"><div data-v-e1fcc0e8="" id="sicboTx"><canvas class="dealer" width="542" height="244"></canvas></div></div> <div data-v-e1fcc0e8="" class="trend-content"><div data-v-e1fcc0e8="" class="sicbo-trend new"><div data-v-e1fcc0e8="" title="1"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-6"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-4"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="大" class="bordertxt colortxt-red">大</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="单" class="bordertxt colortxt-blue">单</span></div></div></div><div data-v-e1fcc0e8="" title="2"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-4"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-1"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="小" class="bordertxt colortxt-green">小</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="双" class="bordertxt colortxt-purple">双</span></div></div></div><div data-v-e1fcc0e8="" title="3"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-2"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-6"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="大" class="bordertxt colortxt-red">大</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="单" class="bordertxt colortxt-blue">单</span></div></div></div><div data-v-e1fcc0e8="" title="4"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-2"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-2"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="小" class="bordertxt colortxt-green">小</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="单" class="bordertxt colortxt-blue">单</span></div></div></div><div data-v-e1fcc0e8="" title="5"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-3"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-4"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-4"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="大" class="bordertxt colortxt-red">大</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="单" class="bordertxt colortxt-blue">单</span></div></div></div><div data-v-e1fcc0e8="" title="6"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-1"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-6"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-2"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="小" class="bordertxt colortxt-green">小</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="单" class="bordertxt colortxt-blue">单</span></div></div></div><div data-v-e1fcc0e8="" title="7"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-2"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="大" class="bordertxt colortxt-red">大</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="双" class="bordertxt colortxt-purple">双</span></div></div></div><div data-v-e1fcc0e8="" title="8"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-1"></span></div></div> <div data-v-e1fcc0e8=""><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-5"></span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" class="game-sicbo-img sicbo-trand-ico sicbo-3"></span></div></div> <div data-v-e1fcc0e8="" class="sicbo-new-trend"><div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="小" class="bordertxt colortxt-green">小</span></div> <div data-v-e1fcc0e8=""><span data-v-e1fcc0e8="" data="单" class="bordertxt colortxt-blue">单</span></div></div></div></div></div> <div data-v-e1fcc0e8="" class="sicbo-content games-font"><div data-v-e1fcc0e8="" class="sicbo-table-bg"></div> <div data-v-e1fcc0e8="" id="sicboDealer"><canvas class="dealer" width="745" height="663"></canvas></div> <div data-v-e1fcc0e8="" class="game-sicbogirl-chair game-sicbogirs"><div data-v-e1fcc0e8="" class="game-sicbo-girl"></div></div> <div data-v-e1fcc0e8="" title="总下注" class="sicbo-all-money"><span data-v-e1fcc0e8=""><em data-v-e1fcc0e8="" class="color-lightgreen">总下注</em> <em data-v-e1fcc0e8="" class="color-lightyellow set-yellow">6445</em></span></div> <div data-v-e1fcc0e8="" title="盘口" class="sicbo-table-li sicbo-big"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8="" class="sicbo-top-money"><span data-v-e1fcc0e8="" class="sicbo-money-other color-greenmiddle"><em data-v-e1fcc0e8="">3512</em></span></div> <div data-v-e1fcc0e8="" class="sicbo-middle-txt opacity-box"><div data-v-e1fcc0e8="" id="content1" class="content-box"></div> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">大</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">x</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">1.970</span></div> <div data-v-e1fcc0e8="" class="sicbo-bottom-money"><span data-v-e1fcc0e8="" class="sicbo-money-self color-greenmiddle"><em data-v-e1fcc0e8="">0</em></span></div></div></div><div data-v-e1fcc0e8="" title="盘口" class="sicbo-table-li sicbo-small"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8="" class="sicbo-top-money"><span data-v-e1fcc0e8="" class="sicbo-money-other color-greenmiddle"><em data-v-e1fcc0e8="">1724</em></span></div> <div data-v-e1fcc0e8="" class="sicbo-middle-txt opacity-box"><div data-v-e1fcc0e8="" id="content2" class="content-box"></div> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">小</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">x</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">1.970</span></div> <div data-v-e1fcc0e8="" class="sicbo-bottom-money"><span data-v-e1fcc0e8="" class="sicbo-money-self color-greenmiddle"><em data-v-e1fcc0e8="">0</em></span></div></div></div><div data-v-e1fcc0e8="" title="盘口" class="sicbo-table-li sicbo-single"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8="" class="sicbo-top-money"><span data-v-e1fcc0e8="" class="sicbo-money-other color-greenmiddle"><em data-v-e1fcc0e8="">883</em></span></div> <div data-v-e1fcc0e8="" class="sicbo-middle-txt opacity-box"><div data-v-e1fcc0e8="" id="content3" class="content-box"></div> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">单</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">x</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">1.970</span></div> <div data-v-e1fcc0e8="" class="sicbo-bottom-money"><span data-v-e1fcc0e8="" class="sicbo-money-self color-greenmiddle"><em data-v-e1fcc0e8="">0</em></span></div></div></div><div data-v-e1fcc0e8="" title="盘口" class="sicbo-table-li sicbo-double"><div data-v-e1fcc0e8=""><div data-v-e1fcc0e8="" class="sicbo-top-money"><span data-v-e1fcc0e8="" class="sicbo-money-other color-greenmiddle"><em data-v-e1fcc0e8="">326</em></span></div> <div data-v-e1fcc0e8="" class="sicbo-middle-txt opacity-box"><div data-v-e1fcc0e8="" id="content4" class="content-box"></div> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">双</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">x</span> <span data-v-e1fcc0e8="" class="color-deepgreen color-shadow-green">1.970</span></div> <div data-v-e1fcc0e8="" class="sicbo-bottom-money"><span data-v-e1fcc0e8="" class="sicbo-money-self color-greenmiddle"><em data-v-e1fcc0e8="">0</em></span></div></div></div> <div data-v-e1fcc0e8="" class="sicbolight-main"><div data-v-e1fcc0e8="" class="sicbolight-img sicbolight-single" style="display: none;"></div> <div data-v-e1fcc0e8="" class="sicbolight-img sicbolight-big" style="display: none;"></div> <div data-v-e1fcc0e8="" class="sicbolight-img sicbolight-small" style="display: none;"></div> <div data-v-e1fcc0e8="" class="sicbolight-img sicbolight-double" style="display: none;"></div></div> <div data-v-e1fcc0e8="" class="sicbo-open-glassbox"><div data-v-e1fcc0e8="" class="sicbo-black-bg" style="display: none;"></div> <div data-v-e1fcc0e8="" class="toMini"><div data-v-e1fcc0e8="" class="sicbo-shadow"><div data-v-e1fcc0e8="" class="game-sicbo-img sicbo-floor"></div></div> <div data-v-e1fcc0e8="" class="sicbo-open-sicbo"><div data-v-e1fcc0e8="" class="game-sicbo-img sicboopen-glass"></div> <div data-v-e1fcc0e8="" class="sicboopen-middle"><div data-v-e1fcc0e8="" class="sicboopen-openshow"><div data-v-e1fcc0e8="" title="第1" class="game-sicbo-img sicboglass-5"></div> <div data-v-e1fcc0e8="" title="第2" class="game-sicbo-img sicboglass-6"></div> <div data-v-e1fcc0e8="" title="第3" class="game-sicbo-img sicboglass-4"></div></div> <div data-v-e1fcc0e8="" class="sicboopen-openshow-bg"><div data-v-e1fcc0e8="" class="game-sicbo-img sicboglass-bg"></div> <div data-v-e1fcc0e8="" class="game-sicbo-img sicboglass-bg"></div> <div data-v-e1fcc0e8="" class="game-sicbo-img sicboglass-bg"></div></div></div> <div data-v-e1fcc0e8="" class="game-sicbo-img sicboopen-floor"></div></div></div></div></div> <div data-v-e1fcc0e8="" class="sicbo-open-fixed"><div data-v-e1fcc0e8="" class=""><div data-v-e1fcc0e8="" class="sicbodot-show"><div data-v-e1fcc0e8="" class="sicbonumber-img sicbo-opennum-li sicbonumber-15"></div> <div data-v-e1fcc0e8="" class="sicbonumber-img sicbo-opennum-li sicbonumber-dot"></div> <div data-v-e1fcc0e8="" class="sicbonumber-img sicbo-opennum-li sicbonumber-big"></div></div> <div data-v-e1fcc0e8="" class="set-animate-site"><div data-v-e1fcc0e8="" class="game-sicbo-img sicbo-opennum-li sicbodot-5"></div> <div data-v-e1fcc0e8="" class="game-sicbo-img sicbo-opennum-li sicbodot-6"></div> <div data-v-e1fcc0e8="" class="game-sicbo-img sicbo-opennum-li sicbodot-4"></div></div></div></div></div>
    </div>
    <lotte-r :cpl="cpl" class="cpr" @chek="ck"></lotte-r>
    <Foo-ter @reback="reback" @sub="sub" :pr="price" :start="start"></Foo-ter>
    <div class="timerdjs" v-show="jishil">{{str}}</div>
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
      this.playdate = parseInt(data.msg.playdate);
      this.puklist = JSON.parse(data.msg.playnum);
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
      //   setInterval(() => {
      //   that.chiplist.push({addr:_.random(0,5),price:[1,5,10,50,100][_.random(0,6)]})
      // }, 1000);
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
            300
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
      this.$socket.emit("niuniu", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      });
      this.sockets.subscribe("niuniu", data => {
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
          createjs.Sound.play("daojishi");
          this.str = "1";
          this.jishil = true;
          // this.getdata().then(x => {
          //   console.log(x);
          //   this.playdate = parseInt(x.playdate);
          //   this.puklist = JSON.parse(x.playnum);
          // });
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
      // createjs.Sound.play("chexiao");
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
      shopcar.playname = "百人牛牛";
      shopcar.playgame = "niuniu";
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
          createjs.Sound.play("chenggong");
        } else if (x.data.msg == "ok") {
          Toast.success("订单提交成功!");
          this.price = 0;
          createjs.Sound.play("dingdong");
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
                top: $("#banker").offset().top - 33 + "px",
                left: $("#banker").offset().left - 26 + "px"
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
        createjs.Sound.play("shouzhu");
        if (i % 2 == 0) {
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
      // console.log(r);
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
          // console.log(
          //   "牛" +
          //     (_.difference(j.map(x => x.num), r[i])
          //       .map(v => (v > 10 ? 10 : v))
          //       .reduce((a, b) => a + b) %
          //       10)
          // );
        }
      }
      if (n > 0) {
        jg.niu = Math.max(...jarr);
        // console.log(jg);
        // console.log(jarr);
      } else {
        jg.niu = "-1";
        // console.log("无牛");
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
      createjs.Sound.play("n" + jg.niu);
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
              300,
              function() {}
            );
        }, c * 80);
      }
    },
    shoupai() {
      this.reback();
      this.vs.map(x => {
        x.map(v => (v.iswin = false));
      });
      this.jieguo = [];
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
          line-height: 134%;
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
@font-face {
  font-family: GamesFont;
  src: url(/static/font/fzcjh.ttf);
}
.ceshidonghua {
  position: fixed;
  z-index: 1000;
}
/*公共部分*/
.dafa-toast{
  position: fixed;
  left: 0;
  right: 0;
  max-width: 12rem;
  margin: 0 auto;
  top: 26%;
  /*margin-top: -10px;*/
  text-align: center
}
.dafa-toast.toast-warning span {
  color: #fefc98;
}
.dafa-toast span{
  display: inline-block;
  min-width: 7.44186rem;
  text-align: center;
  font-size: .6rem;
  padding: 0.13953rem 0.74419rem;
  color: #0ac20a;
  text-shadow: 0 0 0.04651rem rgba(0, 0, 0, .3);
  background: url("/static/img/toast-bg.png") no-repeat center;
  background-size: 100% 100%;
}
.games-font{
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
.game-chess-img{
  background:url('https://images.imags-google.com/game/nnicon.png?1') no-repeat;
  background-size:100vw auto;
}
/** 龙虎精灵图 **/
.game-loongTiger-img{
  background:url(https://images.imags-google.com/game/loongTiger.png) no-repeat;
  background-size:100vw auto;
}
.game-chess-card{
  background:url(https://images.imags-google.com/game/puke.png) no-repeat;
  background-size:100vw auto;
}
.game-ranking-img{
  background:url(https://images.imags-google.com/game/popupList.png) no-repeat;
  background-size:100vw auto;
}
/** 筹码 **/
.game-chip-img{
  background:url(https://images.imags-google.com/game/chipIcon.png) no-repeat;
  background-size:100vw auto;
}
/** 龙虎背景线 **/
.game-loongtiger-line{
  background:url(https://images.imags-google.com/game/longtiger-line.jpg) center center repeat;
  background-size:100vw auto;
  width: 100%;
  height:100%;
}
/** 奔驰宝马精灵图 **/
.game-benzbmw-img{
  background:url(https://images.imags-google.com/game/benzBMW-spirit.png) no-repeat;
  background-size:100vw auto;
}
.game-benzbmw-inside{
  background:url(https://images.imags-google.com/game/benzBMW-inup.png) no-repeat;
  background-size:97vw auto;
}
.benzbmw-bg{
  background:url(https://images.imags-google.com/game/benzBMW-bg.jpg) center bottom repeat-y;
  background-size:100vw auto;
  width:100%;
  height:100%;
}
/** 骰宝精灵图 **/
.game-sicbo-img{
  background:url(https://images.imags-google.com/game/sicbo-spirit.png) no-repeat;
  background-size:100vw auto;
}
.game-sicbo-girl{
  background:url(https://images.imags-google.com/game/sicbo-girl.png) no-repeat;
  background-size:100vw auto;
}
em{
  font-style:normal;
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
.game-enter-out{
  position: absolute;
  top:35%;
  left:50%;
  margin-left:-40vw;
  z-index: 20
}
.game-enter-out > div {
  width:80vw;
  height:18vw;
  margin:0 auto;
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
  font-weight: 100
}
.resultMoney .win {
  color: #fdfb54;
}
.resultMoney .lose {
  color: #afd5ff;
}
.resultMoney > i {
  font-style:normal;
}
/** 其它用户图标 **/
.rb-war .game-other-user {
  top:54vw;
}
.nn100 .game-other-user {
  top:42vw;
}
@media only screen and (device-width: 375px) and (max-height: 600px) {
.rb-war .game-other-user {
    top:43vw;
}
}
.game-other-user{
  position: absolute;
  right:1vw;
  top:45vw;
  z-index: 8
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
  top:52vw;
}
.game-other-user .game-other-icon {
  position: relative;
  width:10vw;
  height:15vw;
}
.game-other-user .game-other-icon .game-other-user {
  position: absolute;
  width:100%;
  height:11.5vw;
  left:0;
  top:0;
  margin-bottom:5vw;
}
.game-other-user .game-other-icon .game-other-user.play {
  -webkit-animation: fastPlay 300ms 1;
          animation: fastPlay 300ms 1;
}
.game-other-user .game-other-icon .game-other-user > em {
  display:block;
  width:100%;
  height:100%;
  background-position: 98% 75%;
  /*background-position: 98% 76%;*/
}
.game-other-user .game-other-icon > span {
  /*font-weight: bold;*/
  position: absolute;
  font-size: 0.5rem;
  width:100%;
  text-align: center;
  color:#eec16c;
  bottom: 0;
}
/**公共头部 */
.chess-head{
  position:fixed;
  left:0;
  top:0;
  z-index:10;
  width:100vw;
  height:12vw;
  /* height:1.9rem; */
  background-position:0 3.4%
}
.chess-head .chess-head-list {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height:100%;
}
.chess-head .chess-head-list .chess-head-left {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  /*margin-top:.2rem;*/
  text-align:center;
}
.chess-head .chess-head-list .chess-head-middle {
  -webkit-box-flex:5;
      -ms-flex:5;
          flex:5;
  height: 8vw;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
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
  display:block;
  width: 11vw;
  height: 9vw;
  background-position: 66.1% 34.4%;
}
.chess-head .chess-head-list .chess-head-middle .head-zhuang > em.nn100-middle-img {
  background-position: 51.7% 34.4%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img {
  width:36%;
  background-position: 0.5% 12.2%;
  color:#fff;
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
  float:left;
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
  display:table-cell;
  vertical-align:middle;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon {
  float:right;
  display: inline-block;
  margin-right: 0;
  width: 5vw;
  height: 6vw;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i {
  display:block;
  width:100%;
  height:100%;
  -webkit-transition:.3s;
  transition:.3s;
  background-position: 39% 35.3%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i.on {
  margin-top: 1.0vw;
  -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime {
  background-position: 42.5% 12.2%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon {
  width: 5vw;
  height: 6vw;
  margin:0 0 0 0;
  display: inline-block;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon > i {
  display: inline-block;
  width:100%;
  height:100%;
  -webkit-transition:.3s;
  transition:.3s;
  background-position: 39% 35.3%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon > i.on {
  -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
  margin-top: 1.0vw;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .right-icon {
  width: 8.5vw;
  height: 7vw;
  line-height: 6.5vw;
  margin:1.5vw 0 0 0;
  text-align: center;
  font-size: 4vw;
  display: inline-block;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.nn100-middle-img {
  background-position: 0% 45.9%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img.nn100-middle-img.head-middle-runtime {
  background-position: 40% 45.9%;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .padd1 {
  padding-top: 1vw;
}
.chess-head .chess-head-list .chess-head-middle .head-middle-img .padd5 {
  padding-top: .7vw;
}
.chess-head .chess-head-list .chess-head-right {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  /*margin-top:.2rem;*/
  text-align:center;
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
.head-left-btn{
  /* width:1.5rem;
  height:1.5rem; */
  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:1.7% 35.1%
}
.head-left-btn > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  height:100%;
  background-position:14.7% 35.2%;
  -webkit-transition:.3s;
  transition:.3s;
}
.head-left-btn > em.on {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.head-right-btn{
  /* width:1.5rem;
  height:1.5rem; */
  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:1.7% 35.1%
}
.head-right-btn > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  height:100%;
  background-position:26.7% 35.2%;
  -webkit-transition:.3s;
  transition:.3s;
}
.head-right-btn > em.on {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
/**公共头部结束 */
/**公共底部 */
.chess-foot{
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
  z-index: 20;
  height: 8vw;
  /* height:1.3rem; */
  background-position:0 0
}
.chess-foot .game-foot-btn {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  height:100%;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
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
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.chess-foot .game-foot-btn .game-foot-left {
  background-position:106% 34.4%;
}
.chess-foot .game-foot-btn .game-foot-left.not {
  opacity: .3;
}
.chess-foot .game-foot-btn .game-foot-middle {
  -webkit-box-flex:2;
      -ms-flex:2;
          flex:2;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money {
  position:relative;
  display:block;
  width:30vw;
  margin:0 auto;
  background-position:59% 8.2%;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money > span {
  color:#fff;
  display:block;
  width:80%;
  height:8vw;
  line-height:8vw;
  font-size:3vw;
  margin:0 auto;
  text-align:center;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money > em {
  position:absolute;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money .foot-money-icon {
  left:.1vw;
  top:0;
  width:8vw;
  height:8vw;
  background-position:27% 8.2%;
}
.chess-foot .game-foot-btn .game-foot-middle .game-foot-money .foot-add-btn {
  right:1vw;
  top:0;
  width:8vw;
  height:8vw;
  background-position:37% 8.2%;
}
.chess-foot .game-foot-btn .game-foot-right {
  background-position:112% 38.5%;
}
.chess-foot .game-foot-btn .game-foot-right.not {
  opacity: .3;
}
.chess-foot {
  /**选择筹码*/
}
.chess-foot .foot-slide-chip {
  position: absolute;
  bottom:8vw;
  width:100%;
  height:16vw;
}
.chess-foot .foot-slide-chip .foot-slide-list {
  position:absolute;
  top:-2vw;
  width:100%;
}
.chess-foot .foot-slide-chip .chip-left-btn {
  position:absolute;
  left:1vw;
  top:5vw;
  width:6vw;
  height:8vw;
  background-position: 19% 8.5%;
  -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
  opacity:.5;
}
.chess-foot .foot-slide-chip .chip-left-btn.on {
  opacity:1;
}
.chess-foot .foot-slide-chip .chip-right-btn {
  position:absolute;
  right:1vw;
  top:5vw;
  width:6vw;
  height:8vw;
  background-position: 19% 8.5%;
  opacity:.5;
}
.chess-foot .foot-slide-chip .chip-right-btn.on {
  opacity:1;
}
.chess-foot .foot-slide-chip .foot-slide-main {
  margin: 0 6vw;
  width:88vw;
  overflow-y:hidden;
  overflow-x:hidden;
  height:19vw;
}
.chess-foot .foot-slide-chip .foot-slide-main ul {
  display:block;
  width:158.745vw;
  /*width:140.8vw; 少500*/
  -webkit-transition:.3s;
  transition:.3s;
  margin-top: .7vw;
  height:100%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li {
  position: relative;
  display:inline-block;
  float:left;
  height:100%;
  margin:0 1vw;
  width:15.6vw;
  background-position:-100% -100%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on.chipbg1 {
  background-position:0.5% 6%;
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
  left:0;
  top:0;
  display:block;
  width:100%;
  height:100%;
}
.chess-foot .foot-slide-chip .foot-slide-main ul .chip1 {
  background-position: .7% 67.8%;
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
  background-position: .5% 96.1%;
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
  opacity: .4;
}
.chess-foot .foot-slide-chip .foot-slide-main ul li.on {
  -webkit-transform:translateY(-1.5vw);
          transform:translateY(-1.5vw);
}
.chess-foot .foot-slide-chip .foot-slide-main ul.loongtiger-ul li.on {
  -webkit-transform:translateY(-1.9vw);
          transform:translateY(-1.9vw);
}
.chess-foot .foot-slide-chip .foot-chip-bg {
  display:block;
  margin-top:8vw;
  width:100%;
  height:8vw;
  background:rgba(0, 0, 0, .5);
}
.chess-foot .foot-slide-chip .foot-chip-bg .foot-chip-bgli {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  margin:0 6vw;
  height:100%;
}
.chess-foot .foot-slide-chip .foot-chip-bg .foot-chip-bgli span {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  margin:0;
  height:100%;
  background-position:-2% 8.6%;
}
.chess-foot .foot-slide-chip .foot-chip-longtiger-bg {
  display:block;
  margin-top: -.5vw;
  width:100%;
  height:18vw;
}
.chess-foot .foot-slide-chip .foot-chip-longtiger-bg .foot-chip-bgli {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  margin:0 6vw;
  height:100%;
}
.chess-foot .foot-slide-chip .foot-chip-longtiger-bg .foot-chip-bgli span {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  margin:0;
  height:100%;
  background-position:95.4% 38.4%;
}
/**滚动条 */
.foot-slide-main::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 0.27907rem rgba(0, 0, 0, .3);
  /* background-color: #F5F5F5; */
}
.foot-slide-main::-webkit-scrollbar{
  height:1vw;
  /* background-color: #F5F5F5; */
}
.foot-slide-main::-webkit-scrollbar-thumb{
 /*  background-color: #666; */
}
/**公共底部结束 */
/**主体内容 */
.chess-all-body{
  position: fixed;
  height:100%;
  width:100%;
  overflow: hidden;
  /* overflow-x: hidden; */
  background:#48100f url(https://images.imags-google.com/game/nn100bg.jpg) top center no-repeat;
  background-size: 100vw auto
}
.chess-all-body.red-black-war {
  overflow: hidden;
  background:#bd7b4b url(https://images.imags-google.com/game/redBlackWar.jpg) top center no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.loong-Tiger-body {
  overflow: hidden;
  background:url(https://images.imags-google.com/game/loongTigerBg.jpg) top center no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.benzbmw-body {
  overflow: hidden;
  background:url(https://images.imags-google.com/game/benzBMW.jpg) top center no-repeat;
  background-size: 100vw auto;
}
.chess-all-body.sicbo-body {
  background:#0b0014 url(https://images.imags-google.com/game/sicbo-bg.jpg) top center no-repeat;
  background-size: 100vw auto;
}
/**百人牛牛 样式 */
.nn100-chipbg{
  position: fixed;
  z-index: 0;
  background:url(https://images.imags-google.com/game/nn100bg2.png) bottom center no-repeat;
  background-size:100vw auto;
  width:100%;
  height:100%;
  bottom:-3vh;
}
.chess-nn100-start{
  margin-top:12vw;
  height:calc(100vh - 20vw);
  position: relative;
  overflow: hidden
}
.chess-nn100-start .nn100-rotate-card {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  margin: 0 4vw;
  height:25vw;
}
.chess-nn100-start .nn100-rotate-card > div {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0 1vw;
  height:18vw;
}
.chess-nn100-start .nn100-rotate-card > div > span {
  display:block;
  width:100%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title {
  height:6vw;
  text-align:center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(1) {
  display:inline-block;
  width:30%;
  height:100%;
  background-position: 66% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(1).card-1,.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(1).card-2,.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(1).card-3 {
  background-position: 74.5% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(2) {
  display:inline-block;
  width:20%;
  height:100%;
  background-position:83% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(2).card-1 {
  background-position:83% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(2).card-2 {
  background-position:90% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-title i:nth-of-type(2).card-3 {
  background-position:98.5% 12.6%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list {
  height:9vw;
  -webkit-transform: scale(.8);
          transform: scale(.8);
  position:relative;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em {
  position:absolute;
  left:0;
  top:0;
  width: 11vw;
  height: 15vw;
  background-position:84.3% 98%;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-0 {
  left:0;
  top:0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-1 {
  left:3vw;
  top:0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-2 {
  left:6vw;
  top:0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-3 {
  left:9vw;
  top:0;
}
.chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em.card-4 {
  left:12vw;
  top:0;
}
/**开奖走势栏 */
.prev-open-number{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  margin:0 auto;
  border-radius:1vw;
  width: 72vw;
  padding: 0 1vw;
  background-position: 2% 81%
  /* background:rgba(255,255,255,.1); */
}
.prev-open-number > div {
  /*width:100%;*/
  margin: .3vw .05vw;
  position:relative;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  padding:0 .9vw;
}
.prev-open-number > div:nth-of-type(1).new:before {
  content:'';
  background: url(https://images.imags-google.com/game/nnicon.png?1) no-repeat;
  background-size: 100vw auto;
  position: absolute;
  left: 4.5vw;
  top: -1.6vw;
  width:5vw;
  height:3vw;
  background-position: 63% 45.1%;
}
.prev-open-number > div > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:4vw;
  height:6vw;
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
.nnall-beting-money{
  position: fixed;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width:100%;
  bottom:113vw
  /* top:54vw; */
}
.nnall-beting-money .all-beting-money {
  margin:0 auto;
  font-size:.5em;
  padding:1vw 3vw;
  display:inline-block;
  color:#fff;
  border-radius:5vw;
  background:rgba(82, 14, 13, .4);
  /*text-shadow: 0.04651rem 0.04651rem 0.04651rem rgba(0, 0, 0, .3);*/
}
.nnall-beting-money .all-beting-money > span {
  color:#ce5855;
  position:relative;
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
  color:#f9c970;
}
/** 牛牛100投注区 */
.betting-box{
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
  text-align:center;
  /* height:calc(100vh-70vw); */
  height:107vw;
  position: fixed;
  bottom: 18vw;
  width:100%
}
.betting-box .betting-list {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  margin:2vw 10vw;
  font-size: .7em;
}
.betting-box .betting-list > div {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:2vw 0;
  width:35%;
  font-size:.7em;
  border-radius:2vw;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  position: relative;
  overflow: hidden;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: 26vw;
}
.betting-box .betting-list > div:not(.bet-inset-icon) {
  background:rgba(82, 14, 13, .4);
}
.betting-box .betting-list > div.bet-inset-icon {
  width:16%;
  height:17vw;
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
  display:block;
  color:#ce5855;
  /*font-size:.7em;*/
  padding:.2vw;
  width:100%;
}
.betting-box .betting-list > div > span > em {
  display:block;
}
.betting-box .betting-list > div > span > em:nth-of-type(1) {
  font-size:1.8em;
  line-height: 100%;
}
.betting-box .betting-list > div > span > em:nth-of-type(2) {
  font-size:.4rem;
  line-height: 100%;
}
.betting-box .betting-list > div > span > em:nth-of-type(3) {
  font-size:.5rem!important;
}
.betting-box .betting-list > div > span.bet-bg {
  color:#000;
  font-size:.7em;
  /*font-weight: bold;*/
  opacity:.3;
}
.betting-box .betting-list > div > span.self-bet {
  color:#f9c970;
  /*font-weight: bold;*/
  background:rgba(82, 14, 13, .4);
}
.betting-box .betting-list > div > span.self-bet > em {
  font-size:1em;
  color:#f9c970;
}
.betting-box .betting-list > div > span.other-bet {
  /*text-shadow: 1px 1px 1px rgba(0,0,0,.3);*/
}
.betting-box .betting-list > div > span.other-bet > em {
  font-size:1em;
  color:#d15a56;
}
/** 牛牛100 样式结束 **/
/** 红黑大战样式开始 **/
.redblack-chipbg{
  position: fixed;
  background:url(https://images.imags-google.com/game/redblackbg.png) bottom center no-repeat;
  background-size:100vw auto;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.chess-redblackwar-start{
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
          transform-style: preserve-3d
}
.chess-redblackwar-start .redblackwar-chess-card {
  position: relative;
  width:100%;
  height:33vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-bg {
  width:100%;
  height:16vw;
  margin-top: 16.5vw;
  background-position: 0% 88.3%;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-left {
  position: absolute;
  left:-0.27907rem;
  top: -3vw;
  width: 23vw;
  height: 34vw;
  background-position: 10% 77.5%;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-top-right {
  position: absolute;
  right:0;
  top: 0;
  width: 23vw;
  height: 34vw;
  background-position:45% 77.5%;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card {
  position: absolute;
  width: 57vw;
  height: 15vw;
  top: .2vw;
  left: 50%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
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
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  height:100%;
  -webkit-transform: scale(.8);
          transform: scale(.8);
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card > div > em {
  position: absolute;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:11vw;
  height:100%;
  margin: 0 .2vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card > div > em.rbcard1 {
  left:2vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card > div > em.rbcard2 {
  left:8vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card > div > em.rbcard3 {
  left:14vw;
}
.chess-redblackwar-start .redblackwar-chess-card .redblackwar-card .reblackwar-vs {
  position: absolute;
  width:10.1vw;
  left: 50%;
  height:100%;
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
  margin:0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  width: 49vw;
  background:rgba(255, 255, 255, .3);
  border-radius:1vw;
}
.chess-redblackwar-start .redblackwar-open-number > div {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
}
.chess-redblackwar-start .redblackwar-open-number > div.redblackwar-open-left {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  /*width: 56vw!important;*/
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-trend-btn {
  width:9vw;
  height:9vw;
  background-position: 92% 25%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot {
  position: relative;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  width:100%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot .redblack-new {
  position: absolute;
  left:0;
  top:0;
  width:5vw;
  height:4vw;
  background-position: 64.1% 47.2%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:4vw;
  height:4vw;
  background-position:89.8% 8.9%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-dot > em.red {
  background-position:96.8% 8.9%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  width:100%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:8vw;
  height:5vw;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-position:97.2% 70.3%;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square > em > i {
  font-size: 2.8vw;
  color:#fff;
  text-align: center;
  -webkit-transform: scale(.8);
          transform: scale(.8);
  /*transform: scale(.8) translateY(.7vw);*/
  font-style: normal;
  margin: 0 auto;
  margin-top: .5vw;
}
.chess-redblackwar-start .redblackwar-open-number .redblackwar-open-square > em.blue {
  background-position:83.2% 70.3%;
}
.chess-redblackwar-start .redblackwar-all-money {
  margin: 0 auto;
  position: absolute;
  top: 31.5vh;
  width: 100%;
  text-align: center;
}
.chess-redblackwar-start .redblackwar-all-money > div {
  display:inline-block;
  background:rgba(114, 30, 14, .3);
  font-size:.5em;
  width:auto;
  padding:.8vw 3vw;
  border-radius:5vw;
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
  width:100%;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  /*height: calc(100vh-59vh);*/
  /*height: calc(100vh-65vh);*/
  height:65vw;
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
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  width:70%;
  height:100%;
}
.chess-redblackwar-start .redblackwar-betting > div > div {
  width:100%;
  height:100%;
  border-radius:2vw;
  border:.5vw solid rgba(221, 98, 70, 0.43922);
  overflow: hidden;
}
.chess-redblackwar-start .redblackwar-betting > div > div.tl {
  border-radius: 2vw 0 0 0;
}
.chess-redblackwar-start .redblackwar-betting > div > div.tr {
  border-radius: 0 2vw 0 0;
  position: relative;
  left: -.5vw;
}
.chess-redblackwar-start .redblackwar-betting > div > div.redblackwar-hit {
  /*border-top: 0;*/
  margin-top:-.5vw;
  width: calc(100% - 0.5vw);
}
.chess-redblackwar-start .redblackwar-betting > div > div.on {
  -webkit-animation:lightshadow 3s infinite;
          animation:lightshadow 3s infinite;
  border-color: #fd9781;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red,.chess-redblackwar-start .redblackwar-betting > div .redblackwar-black,.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit {
  font-size:.7em;
  color:rgba(86, 16, 2, .79);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align:center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(1), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(1), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(1) {
  font-size:.7em;
  color:#ffdcab;
  width:34vw;
  margin:0 auto;
  border-radius:0 0 2.5vw 2.5vw;
  display:block;
  background-image: -webkit-gradient(linear , left bottom, left top , from(#a91604), to(#c3330e));
  background-image: linear-gradient(to top , #a91604, #c3330e);
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(2), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(2), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(2) {
  opacity: .7;
  font-size: .8em;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(2) > span, .chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(2) > span, .chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(2) > span {
  display: block;
  /*text-shadow: 1px 1px 0 #c36011;*/
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(2) > span:nth-of-type(1), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(2) > span:nth-of-type(1), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(2) > span:nth-of-type(1) {
  font-size:1.3em;
  /*font-weight: bold;*/
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(2) > span:nth-of-type(3), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(2) > span:nth-of-type(3), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(2) > span:nth-of-type(3) {
  font-size: 0.55814rem;
  /*font-weight: bold;*/
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(3), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(3), .chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(3) {
  /*background: -webkit-linear-gradient(top,#a84032,#a84032 38%,#8b2713 68%,#8b2713);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;*/
  /*text-shadow: 1px 1px 1px #791e0c;*/
  font-size:.8em;
  padding:.2vw;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(1) {
  border-radius:0 0 0 2.5vw;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-red div:nth-of-type(1) > em {
  font-style:normal;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(1) {
  border-radius:0 0 2.5vw 0;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-black div:nth-of-type(1) > em {
  font-style:normal;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit.bl {
  border-radius: 0 0 2vw 2vw;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit.on {
  -webkit-animation:lightshadow 3s infinite;
          animation:lightshadow 3s infinite;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(2) > span:nth-of-type(1) {
  font-size:1.3em;
}
.chess-redblackwar-start .redblackwar-betting > div .redblackwar-hit div:nth-of-type(2) > span:nth-of-type(2) {
  font-size:.7em;
}
.chess-redblackwar-start .redblack-span > i {
  display:inline-block;
  font-style:normal;
}
/** 投注区高亮 **/
@-webkit-keyframes lightshadow
{
0% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
25% {-webkit-box-shadow: 0 0 0 #fd9781 inset;box-shadow: 0 0 0 #fd9781 inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
55% {-webkit-box-shadow: 0 0 0 #fd9781 inset;box-shadow: 0 0 0 #fd9781 inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
90% {-webkit-box-shadow: 0 0 0 #fd9781 inset;box-shadow: 0 0 0 #fd9781 inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
}
@keyframes lightshadow
{
0% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
25% {-webkit-box-shadow: 0 0 0 #fd9781 inset;box-shadow: 0 0 0 #fd9781 inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
55% {-webkit-box-shadow: 0 0 0 #fd9781 inset;box-shadow: 0 0 0 #fd9781 inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
90% {-webkit-box-shadow: 0 0 0 #fd9781 inset;box-shadow: 0 0 0 #fd9781 inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #fd9781 inset;box-shadow: 0 0 0.83721rem #fd9781 inset;
}
}
/** loong **/
@-webkit-keyframes lightloong
{
0% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
25% {-webkit-box-shadow: 0 0 0 #6fbbf9 inset;box-shadow: 0 0 0 #6fbbf9 inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
55% {-webkit-box-shadow: 0 0 0 #6fbbf9 inset;box-shadow: 0 0 0 #6fbbf9 inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
90% {-webkit-box-shadow: 0 0 0 #6fbbf9 inset;box-shadow: 0 0 0 #6fbbf9 inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
}
@keyframes lightloong
{
0% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
25% {-webkit-box-shadow: 0 0 0 #6fbbf9 inset;box-shadow: 0 0 0 #6fbbf9 inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
55% {-webkit-box-shadow: 0 0 0 #6fbbf9 inset;box-shadow: 0 0 0 #6fbbf9 inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
90% {-webkit-box-shadow: 0 0 0 #6fbbf9 inset;box-shadow: 0 0 0 #6fbbf9 inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #6fbbf9 inset;box-shadow: 0 0 0.83721rem #6fbbf9 inset;
}
}
/** tiger **/
@-webkit-keyframes lighttiger
{
0% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
25% {-webkit-box-shadow: 0 0 0 #f9ac56 inset;box-shadow: 0 0 0 #f9ac56 inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
55% {-webkit-box-shadow: 0 0 0 #f9ac56 inset;box-shadow: 0 0 0 #f9ac56 inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
90% {-webkit-box-shadow: 0 0 0 #f9ac56 inset;box-shadow: 0 0 0 #f9ac56 inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
}
@keyframes lighttiger
{
0% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
25% {-webkit-box-shadow: 0 0 0 #f9ac56 inset;box-shadow: 0 0 0 #f9ac56 inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
55% {-webkit-box-shadow: 0 0 0 #f9ac56 inset;box-shadow: 0 0 0 #f9ac56 inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
90% {-webkit-box-shadow: 0 0 0 #f9ac56 inset;box-shadow: 0 0 0 #f9ac56 inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #f9ac56 inset;box-shadow: 0 0 0.83721rem #f9ac56 inset;
}
}
/** he **/
@-webkit-keyframes lighthe
{
0% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
25% {-webkit-box-shadow: 0 0 0 #64e74d inset;box-shadow: 0 0 0 #64e74d inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
55% {-webkit-box-shadow: 0 0 0 #64e74d inset;box-shadow: 0 0 0 #64e74d inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
90% {-webkit-box-shadow: 0 0 0 #64e74d inset;box-shadow: 0 0 0 #64e74d inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
}
@keyframes lighthe
{
0% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
25% {-webkit-box-shadow: 0 0 0 #64e74d inset;box-shadow: 0 0 0 #64e74d inset;
}
40% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
55% {-webkit-box-shadow: 0 0 0 #64e74d inset;box-shadow: 0 0 0 #64e74d inset;
}
75% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
90% {-webkit-box-shadow: 0 0 0 #64e74d inset;box-shadow: 0 0 0 #64e74d inset;
}
100% {-webkit-box-shadow: 0 0 0.83721rem #64e74d inset;box-shadow: 0 0 0.83721rem #64e74d inset;
}
}
/** 放大动画 **/
@-webkit-keyframes mini-to-big
{
from {-webkit-transform:scale(.5);transform:scale(.5);opacity: 0;
}
to {-webkit-transform:scale(1);transform:scale(1);opacity: 1;
}
}
@keyframes mini-to-big
{
from {-webkit-transform:scale(.5);transform:scale(.5);opacity: 0;
}
to {-webkit-transform:scale(1);transform:scale(1);opacity: 1;
}
}
/** 闪现动画 **/
@-webkit-keyframes flashshow
{
0% {opacity: 0;
}
35% {opacity: 1;
}
50% {opacity: 0;
}
75% {opacity: 1;
}
100% {opacity: 0;
}
}
@keyframes flashshow
{
0% {opacity: 0;
}
35% {opacity: 1;
}
50% {opacity: 0;
}
75% {opacity: 1;
}
100% {opacity: 0;
}
}
/** 右上角面板动画 **/
@-webkit-keyframes right-box
{
from {-webkit-transform: rotate(-91deg);transform: rotate(-91deg);-webkit-transform-origin: 85% 0;transform-origin: 85% 0;
}
to {-webkit-transform: rotate(0deg);transform: rotate(0deg);-webkit-transform-origin: 85% 0;transform-origin: 85% 0;
}
}
@keyframes right-box
{
from {-webkit-transform: rotate(-91deg);transform: rotate(-91deg);-webkit-transform-origin: 85% 0;transform-origin: 85% 0;
}
to {-webkit-transform: rotate(0deg);transform: rotate(0deg);-webkit-transform-origin: 85% 0;transform-origin: 85% 0;
}
}
/** 抖动 **/
@-webkit-keyframes fastPlay
{
0% {-webkit-transform:translate(0,0);transform:translate(0,0)
}
50% {-webkit-transform:translate(-1.5vw,0);transform:translate(-1.5vw,0)
}
100% {-webkit-transform:translate(0,0);transform:translate(0,0)
}
}
@keyframes fastPlay
{
0% {-webkit-transform:translate(0,0);transform:translate(0,0)
}
50% {-webkit-transform:translate(-1.5vw,0);transform:translate(-1.5vw,0)
}
100% {-webkit-transform:translate(0,0);transform:translate(0,0)
}
}
/** **/
.chess-popup{
  background:none!important;
}
/** 红黑大战样式结束 **/
/** 龙虎大战 开始 **/
.loongtiger-bg{
  position: fixed;
  bottom:8vw;
  width:100%;
  height:50vh;
  z-index: 1;
  background:url(https://images.imags-google.com/game/loongTigerFloor.png) bottom center no-repeat;
  background-size:100vw auto;
}
.loongTiger-head{
  position:fixed;
  left:0;
  top:0;
  z-index:30;
  width:100vw;
  height:12vw;
  /* height:1.9rem; */
  background-position:0 0
}
.loongTiger-head .chess-head-list {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height:100%;
}
.loongTiger-head .chess-head-list .chess-head-left {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  /*margin-top:.2rem;*/
  text-align:center;
}
.loongTiger-head .chess-head-list .chess-head-middle {
  -webkit-box-flex:5;
      -ms-flex:5;
          flex:5;
  height: 8vw;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
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
  display:block;
  width: 11vw;
  height: 9vw;
  background-position: 66% 5.2%;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img {
  width:36%;
  background-position: 1% 4.9%;
  color:#fff;
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
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .left-icon {
  float:left;
  width: 9.5vw;
  height: 7vw;
  line-height: 6.5vw;
  font-size: 4vw;
  margin-top: 1.5vw;
  text-align: center;
  display: inline-block;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .number-box {
  font-size: 3vw;
  width: 14vw;
  display: inline-block;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .right-icon {
  float:right;
  display: inline-block;
  margin-right: .5vw;
  width: 5vw;
  height: 6vw;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i {
  display:block;
  width:100%;
  height:100%;
  -webkit-transition:.3s;
  transition:.3s;
  background-position: 39% 9.6%;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img .right-icon i.on {
  -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
  margin-top: .6vw;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime {
  background-position: 40.6% 4.9%;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon {
  width: 5vw;
  height: 6vw;
  margin:0 0 0 0;
  display: inline-block;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon > i {
  display: inline-block;
  width:100%;
  height:100%;
  -webkit-transition:.3s;
  transition:.3s;
  background-position: 39% 9.6%;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .left-icon > i.on {
  -webkit-transform:rotate(180deg);
          transform:rotate(180deg);
  margin-top: .8vw;
}
.loongTiger-head .chess-head-list .chess-head-middle .head-middle-img.head-middle-runtime .right-icon {
  width: 9vw;
  height: 7vw;
  line-height: 6.5vw;
  margin:1.5vw 0 0 0;
  text-align: center;
  font-size: 4vw;
  display: inline-block;
}
.loongTiger-head .chess-head-list .chess-head-right {
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  /*margin-top:.2rem;*/
  text-align:center;
}
.loongTiger-head .head-left-btn {
  /*width:1.5rem;
    height:1.5rem;*/
  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:15.5% 9.1%;
}
.loongTiger-head .head-left-btn > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  height:100%;
  background-position:2.3% 9%;
}
.loongTiger-head .head-right-btn {
  /*width:1.5rem;
    height:1.5rem;*/
  width:9vw;
  height:9vw;
  margin:0 auto;
  background-position:2.3% 9%;
}
.loongTiger-head .head-right-btn > em {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  height:100%;
  background-position:27.3% 9%;
}
/** 龙虎牌面区 **/
.loongtiger-chip-head{
  position:fixed;
  top:11vw;
  width:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  height:39vw
}
.loongtiger-chip-head > div {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:100%;
  width:100%;
}
.loongtiger-chip-head > div:nth-of-type(2) {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width:58vw;
}
.loongtiger-chip-head > div:nth-of-type(2) > em {
  height:12vw;
}
.loongtiger-chip-head > div > em {
  width:100%;
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
  background-position:100% 100%;
  /*background:url(https://images.imags-google.com/game/long.png) no-repeat;*/
  background-size:250vw auto;
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
  margin:0 4vw;
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
  background-position:84.6% 98%;
  position: relative;
  -webkit-transform: scale(1.07);
          transform: scale(1.07);
}
.loongtiger-chip-head.loongtiger-chip-show > div .loongtiger-chips > .loongtiger-fire {
  position: absolute;
  top:50%;
  width: 100%;
  height: 50%;
  background-position:46% 53%;
}
/** 龙虎开奖号码列表 **/
.loongtiger-open-list{
  position:fixed;
  top:58vw;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  z-index: 8;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center
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
  padding:0 2vw;
}
.loongtiger-open-list > .loongtiger-opennumber > em {
  position: relative;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:100%;
  height:7vw;
}
.loongtiger-open-list > .loongtiger-opennumber > em > i {
  position: absolute;
  width:100%;
  height:100%;
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
  background-position:48.0% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em.tiger {
  background-position:56.0% 9.4%;
}
.loongtiger-open-list > .loongtiger-opennumber > em.he {
  background-position:64.0% 9.4%;
}
/** 总投注 **/
.loongtiger-all-money{
  position:fixed;
  z-index: 8;
  top:68vw;
  width:100%;
  height:15vw;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center
}
.loongtiger-all-money .loongtiger-all-mbg {
  width:35vw;
  height:7vw;
  font-size:.7em;
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
  background-position:97% 30.9%;
}
.loongtiger-all-money .loongtiger-all-mbg > em {
  color:#f9e3b2;
  font-size:.7em;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #541e32;
}
.loongtiger-user{
  top:44vw;
}
/** 龙虎盘口开始 **/
.loongtiger-betting{
  position: fixed;
  bottom:18vw;
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
  width:100%
}
.loongtiger-betting > div {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
.loongtiger-betting > div .loongtiger-betting-loong,.loongtiger-betting > div .loongtiger-betting-tiger {
  width:39vw;
  height:33vw;
}
.loongtiger-betting > div .loongtiger-betting-loong {
  background:url(https://images.imags-google.com/game/loongBg.png) center center no-repeat;
  background-size:50vw auto;
  /*background-position:0% 72%;*/
}
.loongtiger-betting > div .loongtiger-betting-loong .loongtiger-number-top {
  /*border-radius:1vw 1vw 0 0;*/
  position: relative;
  z-index: 100;
  background: -webkit-gradient(linear, left top, right top, from(#33417c), color-stop(#5c76d6), to(#33417c));
  background: linear-gradient(to right, #33417c, #5c76d6, #33417c);
}
.loongtiger-betting > div .loongtiger-betting-loong .loongtiger-number-middle {
  color:#31447f;
}
.loongtiger-betting > div .loongtiger-betting-loong .loongtiger-number-down {
  color: #afa5d5;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #231a4d;
}
.loongtiger-betting > div .loongtiger-betting-tiger {
  background:url(https://images.imags-google.com/game/tigerBg.png) center center no-repeat;
  background-size:50vw auto;
  /*background-position:73% 72%;*/
}
.loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top {
  position: relative;
  z-index: 100;
  width:39vw;
  background:-webkit-gradient(linear, left top, right top, from(#7d603b), color-stop(#b88e3f), to(#7d603b));
  background:linear-gradient(to right, #7d603b, #b88e3f, #7d603b);
  /*border-radius:1vw 1vw 0 0;*/
}
.loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-middle {
  color:#723e32;
}
.loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-down {
  color: #ffd3b3;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #503313;
}
.loongtiger-betting > div .loongtiger-betting-he {
  width: 80vw;
  height: 33vw;
  background:url(https://images.imags-google.com/game/heBg.png) bottom center no-repeat;
  background-size:auto 100%;
  /*background-position: 4% 89%;*/
}
.loongtiger-betting > div .loongtiger-betting-he .loongtiger-number-top {
  position: relative;
  z-index: 100;
  background:-webkit-gradient(linear, left top, right top, from(#557e3b), color-stop(#7baf5f), to(#557e3b));
  background:linear-gradient(to right, #557e3b, #7baf5f, #557e3b);
  /*border-radius:1vw 1vw 0 0;*/
}
.loongtiger-betting > div .loongtiger-betting-he .loongtiger-number-middle {
  color:#1f551c;
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
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
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
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width:100%;
}
.loongtiger-betting > div .loongtiger-betinfo > div > em {
  font-size:.7em;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-top {
  /*height: 5.5vw;*/
  color: #f9e3b2;
  text-shadow: 0.04651rem 0.04651rem 0.04651rem #541e32;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle {
  height: 24vw;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div .loongtiger-nmiddle-loong,
          .loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div .loongtiger-nmiddle-tiger,
          .loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div .loongtiger-nmiddle-he {
  height: 9vw;
  width: 10vw;
  margin: 0 auto;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div:nth-of-type(1) {
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div:nth-of-type(2) > em {
  font-size:.5em;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div:nth-of-type(3) > em {
  font-size:.7em;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div .loongtiger-nmiddle-loong {
  background-position: 97.5% 25.2%;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div .loongtiger-nmiddle-tiger {
  background-position: 82.5% 25.2%;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-middle > div .loongtiger-nmiddle-he {
  background-position: 68.5% 25.2%;
}
.loongtiger-betting > div .loongtiger-betinfo .loongtiger-number-down {
  position: absolute;
  bottom:0;
  width:100%;
  /*height: 7vw;*/
}
.loongtiger-betting .loongtiger-first {
  width:80vw;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.loongtiger-betting .loongtiger-first > div {
  border-radius: 1vw;
  overflow: hidden;
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(1) {
  margin-right:2vw;
  border: 1Px solid #394d8f;
  background:-webkit-gradient(linear,left bottom, left top,from(#606192),to(#b0bfe9));
  background:linear-gradient(to top,#606192,#b0bfe9);
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(1).on {
  -webkit-animation:lightloong 3s infinite;
          animation:lightloong 3s infinite;
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(2) {
  border: 1Px solid #845019;
  background:-webkit-gradient(linear,left bottom, left top,from(#9c7659),to(#e6c496));
  background:linear-gradient(to top,#9c7659,#e6c496);
}
.loongtiger-betting .loongtiger-first > div:nth-of-type(2).on {
  -webkit-animation:lighttiger 3s infinite;
          animation:lighttiger 3s infinite;
}
.loongtiger-betting .loongtiger-second {
  width:80vw;
  overflow: hidden;
  margin-top:2vw;
  border-radius:1vw;
  border: 1Px solid #1f6313;
  background:-webkit-gradient(linear,left bottom, left top,from(#6b865a),to(#c3cbb7));
  background:linear-gradient(to top,#6b865a,#c3cbb7);
}
.loongtiger-betting .loongtiger-second.on {
  -webkit-animation:lighthe 3s infinite;
          animation:lighthe 3s infinite;
  overflow: hidden;
}
/** 龙虎大战 结束 **/
/** 右上角面板start **/
.top-right-box{
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
  -webkit-transition: .3s all;
  transition: .3s all;
  -webkit-transform: rotate(-91deg);
          transform: rotate(-91deg);
  -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0
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
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  width: 83%;
  margin: 0 auto;
  margin-top: 1vw;
  height: 25vw;
}
.top-right-box .top-right-info > div {
  width:100%;
  height:7vw;
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
  display:block;
  width:100%;
  height:100%;
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
.set-yellow{
  background: -webkit-linear-gradient(top,#f8dab2,#f8dab2 38%,#f2c250 68%,#f2c250);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color:#f9c970;
}
.set-yellow-slide{
  background: -webkit-linear-gradient(top,#f8dab2,#f8dab2 38%,#f2c250 68%,#f2c250);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color:#f9c970;
  -webkit-text-stroke: 1Px #5e3f28;
}
.set-yellow-slide-me{
  font-size: 1rem;
  /* color:#ac7207; */
}
.set-red{
  color:#d45c58;
}
.set-red-black{
  color: #ec8670;
}
.set-red-black-tran{
  color: rgba(236, 135, 112, 0.76863);
}
.slide-color{
  text-shadow: 1Px 1Px 1Px rgba(0, 0, 0, .3);
}
.set-reducemoney{
  background: -webkit-linear-gradient(top,#4a72bc,#4a72bc 38%,#aad1fc 68%,#aad1fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color:#4a72bc;
  text-shadow: 0.04651rem 0.04651rem 0.09302rem rgba(0, 0, 0, .1);
}
/** 红黑和龙虎 牌面窗口样式 **/
.box-short{
    height:42vw!important;
    top:69%!important;
}
/** 右上角面板end **/
.how-to-play{
  position:relative;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 84vw;
  -webkit-animation:.3s mini-to-big 1;
          animation:.3s mini-to-big 1;
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
.pkbg{
  background-position:84.8% 98%!important;
}
/**1**/
.pk7{background-position:13.5% -.2%!important;
}
.pk6{background-position:0% -.2%!important;
}
.pk5{background-position:27.3% -.2%!important;
}
.pk4{background-position:40.7% -.2%!important;
}
/**2**/
.pk11{background-position:13.5% 16.2%!important;
}
.pk10{background-position:0% 16.2%!important;
}
.pk9{background-position:27.3% 16.2%!important;
}
.pk8{background-position:40.7% 16.2%!important;
}
/**3**/
.pk15{background-position:13.5% 32.6%!important;
}
.pk14{background-position:0% 32.6%!important;
}
.pk13{background-position:27.3% 32.6%!important;
}
.pk12{background-position:40.7% 32.6%!important;
}
/**4**/
.pk19{background-position:13.5% 48.9%!important;
}
.pk18{background-position:0% 48.9%!important;
}
.pk17{background-position:27.3% 48.9%!important;
}
.pk16{background-position:40.7% 48.9%!important;
}
/**5**/
.pk23{background-position:13.5% 65.3%!important;
}
.pk22{background-position:0% 65.3%!important;
}
.pk21{background-position:27.3% 65.3%!important;
}
.pk20{background-position:40.7% 65.3%!important;
}
/**6**/
.pk27{background-position:13.5% 81.7%!important;
}
.pk26{background-position:0% 81.7%!important;
}
.pk25{background-position:27.3% 81.7%!important;
}
.pk24{background-position:40.7% 81.7%!important;
}
/**7**/
.pk31{background-position:13.5% 98%!important;
}
.pk30{background-position:0% 98%!important;
}
.pk29{background-position:27.3% 98%!important;
}
.pk28{background-position:40.7% 98%!important;
}
/**8**/
.pk35{background-position:71% -.2%!important;
}
.pk34{background-position:57.5% -.2%!important;
}
.pk33{background-position:84.5% -.2%!important;
}
.pk32{background-position:98% -.2%!important;
}
/**9**/
.pk39{background-position:71% 16.2%!important;
}
.pk38{background-position:57.5% 16.2%!important;
}
.pk37{background-position:84.5% 16.2%!important;
}
.pk36{background-position:98% 16.2%!important;
}
/**10**/
.pk43{background-position:71% 32.7%!important;
}
.pk42{background-position:57.5% 32.7%!important;
}
.pk41{background-position:84.5% 32.7%!important;
}
.pk40{background-position:98% 32.7%!important;
}
/**J**/
.pk47{background-position:71% 48.9%!important;
}
.pk46{background-position:57.5% 48.9%!important;
}
.pk45{background-position:84.5% 48.9%!important;
}
.pk44{background-position:98% 48.9%!important;
}
/**Q**/
.pk51{background-position:71% 65.3%!important;
}
.pk50{background-position:57.5% 65.3%!important;
}
.pk49{background-position:84.5% 65.3%!important;
}
.pk48{background-position:98% 65.3%!important;
}
/**K**/
.pk55{background-position:71% 81.7%!important;
}
.pk54{background-position:57.5% 81.7%!important;
}
.pk53{background-position:84.5% 81.7%!important;
}
.pk52{background-position:98% 81.7%!important;
}
/**牌面样式结束 */
.align-text{
  text-align: center;
  padding:10%;
}
/** 骰宝点数 **/
.sicbodot-1{
  background-position:-0.7% 35%;
}
.sicbodot-2{
  background-position:16% 35%;
}
.sicbodot-3{
  background-position:32.8% 35%;
}
.sicbodot-4{
  background-position:49.6% 35%;
}
.sicbodot-5{
  background-position:66.4% 35%;
}
.sicbodot-6{
  background-position:83% 35%;
}
.gold-box {
  background: red !important;
}
.baccarat-body .baccarat-user > .game-other-user {
  top: 37vw;
}
/* 百家乐 start */
.chess-all-body.baccarat-body {
  background: #0b0014 url(https://images.imags-google.com/game/baccarat-bg.jpg) top center no-repeat;
  background-size: 100vw auto;
}
.baccarat-container {
  /* position: fixed; */
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden
  /* padding: 1.8rem 0 4rem 0; */
  /* background: url(https://images.imags-google.com/game/baccarat-bg.jpg) top center no-repeat;
  background-size: 100vw auto; */
  /* 走势区域 */
}
.baccarat-container .trend-content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 5.3vw;
  margin: 13vw auto 0;
  padding: 0 2vw;
  width: 62vw;
  background: rgba(255, 255, 255, .2);
  border-radius: .15rem;
}
.baccarat-container .trend-content .new {
  position: absolute;
  left: 0;
  top: 0;
  width:3.4vw;
  height: 3.4vw;
  background: url(https://images.imags-google.com/game/baccarat-sprite.png) bottom left no-repeat;
  background-size: 120vw 80vw;
  background-position: 0 0;
}
.baccarat-container .trend-content .trend-ele {
  width: 3.7vw;
  height: 3.4vw;
  background: url(https://images.imags-google.com/game/baccarat-sprite.png) left top no-repeat;
  background-size: 120vw 80vw;
  position: relative;
}
.baccarat-container .trend-content .trend-ele.ping {
  background-position: -15.8vw 0;
}
.baccarat-container .trend-content .trend-ele.zuan {
  background-position: -4.6vw 0;
}
.baccarat-container .trend-content .trend-ele.xian {
  background-position: -10vw 0;
}
.baccarat-container .trend-content .trend-ele.first {
  /*margin-left: 2vw;*/
}
.baccarat-container .trend-content .trend-show {
  opacity: 0;
}
.baccarat-container .beauty-chair {
  position: absolute;
  background: url(https://images.imags-google.com/game/baccarat-sprite.png) top left no-repeat;
  width: 32vw;
  height: 26vw;
  left: 33vw;
  top: -20vw;
  background-size: 134vw auto;
  background-position: -33vw 0;
}
.baccarat-container .beauty-shadow {
  position: absolute;
  z-index: 8;
  background: url(https://images.imags-google.com/game/baccarat-sprite.png) top left no-repeat;
  width: 25vw;
  height: 32vw;
  left: 34vw;
  top: -22vw;
  background-size: 118vw auto;
  background-position: -60vw 0;
}
.baccarat-container .beauty {
  position: absolute;
  left: 47%;
  z-index: 10;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  top: -23vw;
  width: 25.86vw;
  height: 32vw;
  background: url(https://images.imags-google.com/game/beauty-spr6.png) top left no-repeat;
  background-size: 543.2vw auto;
  background-position: 0vw 0vw;
  -webkit-animation: beautyshow 3s infinite steps(21, start);
          animation: beautyshow 3s infinite steps(21, start);
}
.baccarat-container .table-content-bg {
  position: absolute;
  width: 100%;
  height: 120.4vw;
  left: 0;
  bottom: 13vw;
}
.baccarat-container .table-content {
  position: absolute;
  left: 50%;
  margin-left: -63vw;
  width: 126vw;
  height: 100%;
  background: url(https://images.imags-google.com/game/baccarat-table2.png) bottom left no-repeat;
  background-size: 126vw auto;
  /*perspective: 800;
    -webkit-perspective: 800;*/
}
.baccarat-container .table-content .bet-xian-win-bg {
  width: 38%;
  height: 48%;
  position: absolute;
  top: 31%;
  /*background: red;*/
  left: 16vw;
  background: url(https://images.imags-google.com/game/xian-win-bg.png) no-repeat;
  background-size: 100% 92%;
  opacity: 0;
}
.baccarat-container .table-content .bet-xian-win-bg.show {
  -webkit-animation: win-line-show 3.5s forwards;
          animation: win-line-show 3.5s forwards;
}
.baccarat-container .table-content .bet-zuan-win-bg {
  width: 38%;
  height: 48%;
  position: absolute;
  top: 31%;
  /*background: red;*/
  right: 16vw;
  background: url(https://images.imags-google.com/game/zuan-win-bg.png) no-repeat;
  background-size: 100% 92%;
  opacity: 0;
}
.baccarat-container .table-content .bet-zuan-win-bg.show {
  -webkit-animation: win-line-show 3.5s forwards;
          animation: win-line-show 3.5s forwards;
}
.baccarat-container .table-content {
  /** 发牌洗牌 **/
}
.baccarat-container .table-content .baccarat-chipleft {
  position: absolute;
  background:url(https://images.imags-google.com/game/baccarat-left.png) no-repeat;
  background-size:130vw auto;
  width:15vw;
  height:25vw;
  /*top:-3%;
      right:64%;*/
  z-index: 20;
  top: -4%;
  right: 63.2%;
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
}
.baccarat-container .table-content .baccarat-chipleft.stop {
  background-position:2vw 16vw;
}
.baccarat-container .table-content .baccarat-chipleft.play {
  -webkit-animation:baccaratleft 1.5s forwards steps(10,start) 1;
}
.baccarat-container .table-content .baccarat-chipright {
  position: absolute;
  background:url(https://images.imags-google.com/game/baccarat-jack.png) no-repeat;
  background-size:360vw auto;
  width:20vw;
  height:25vw;
  /*top:-3%;
      left:62%;*/
  top: -4.8%;
  left: 61.2%;
  z-index: 20;
  -webkit-transform: scale(1.3);
          transform: scale(1.3);
}
.baccarat-container .table-content .baccarat-chipright.stop {
  background-position:4vw -5vw;
}
.baccarat-container .table-content .baccarat-chipright.play {
  -webkit-animation:baccaratright 1.5s forwards steps(15,start) 1;
}
.baccarat-container .table-content .baccarat-chipleft-bg {
  position: absolute;
  z-index: 19;
  width:15vw;
  height:15vw;
  top: 9.3vw;
  right: 80.5vw;
}
.baccarat-container .table-content .baccarat-chipleft-bg > div {
  width:100%;
  height:100%;
  background-position:43% 59%;
}
.baccarat-container .table-content .baccarat-chipright-bg {
  position: absolute;
  width:20vw;
  height:20vw;
  top: 5.3vw;
  left: 77.5vw;
  z-index: 19;
}
.baccarat-container .table-content .baccarat-chipright-bg > div {
  width:100%;
  height:100%;
  background-position:97% 59%;
}
.baccarat-container .table-content {
  /** 背景end **/
}
.baccarat-container .table-content .bet-money {
  position: absolute;
  left: 50%;
  top: 12%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  font-size: 0.55814rem;
  text-align: center;
  color: #96d3a4;
  text-shadow: .05rem .05rem .05rem #425a3f;
}
.baccarat-container .table-content .bet-money >span {
  color: transparent;
  background: -webkit-gradient(linear, left bottom, left top, from(#f2c457), to(#f8dbb6));
  background: linear-gradient(to top, #f2c457, #f8dbb6);
  -webkit-background-clip: text;
  text-shadow: none;
}
.baccarat-container {
  /*投注区域*/
}
.baccarat-container .bet-content {
  width: 100%;
  height: 68vw;
  position: absolute;
  top: 23vw;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  overflow: hidden;
}
.baccarat-container .bet-content .txt-box {
  text-align: center;
  position: absolute;
  width: 30vw;
  height: 50vw;
  left: 0;
}
.baccarat-container .bet-content .txt-box .money {
  color: #649e7a;
  font-size: .7em;
  line-height: 4.2vw;
  height: 5vw;
}
.baccarat-container .bet-content .txt-box .title {
  position: relative;
  font-size: 1.5em;
  color: #2b4a34;
  margin-top: 4vw;
  text-shadow:0.04651rem 0.04651rem 0.09302rem #75a270;
}
.baccarat-container .bet-content .txt-box .odds-x {
  font-size: .7em;
  line-height: .7em;
  margin: 1vw 0;
  color: #2b4a34;
  text-shadow: 0.02326rem 0.02326rem 0.02326rem #75a270;
}
.baccarat-container .bet-content .txt-box .odds {
  font-size: .7em;
  line-height: .7em;
  color: #2b4a34;
  text-shadow: 0.02326rem 0.02326rem 0.02326rem #75a270;
  padding: 1vw 0;
}
.baccarat-container .bet-content .txt-box .my-money {
  font-size: .7em;
  color: #44975b;
  margin-top: 3vw;
  /*-webkit-text-stroke: 1px #1f4c1d;*/
}
.baccarat-container .bet-content .txt-box-xian {
  left: 0.5vw;
}
.baccarat-container .bet-content .txt-box-xian .money {
  margin-bottom: 14vw;
  line-height: 5vw;
}
.baccarat-container .bet-content .txt-box-zuan {
  left: 12vw;
}
.baccarat-container .bet-content .txt-box-zuan .money {
  margin-bottom: 14vw;
  line-height: 5vw;
}
.baccarat-container .bet-content .txt-box-ping {
  width: 100%;
  height: 100%;
}
.baccarat-container .bet-content .txt-box-ping .money {
  margin-top: 1vw;
  line-height: 4vw;
}
.baccarat-container .bet-content .bet-box-ping {
  position: relative;
  z-index: 9;
  width: 42vw;
  height: 44vw;
  left: 42vw;
  top: 0;
  /*background: rgba(0,0,0,.5);*/
}
.baccarat-container .bet-content .bet-box-ping .chip-box3 {
  position: absolute;
  width: 65%;
  height: 52%;
  left: 7vw;
  top: 8vw;
  border-radius: 1rem;
  /*background: red;*/
}
.baccarat-container .bet-content .bet-box-ping .ping-win-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(https://images.imags-google.com/game/baccarat-sprite.png) 0 0 no-repeat;
  background-size: 124vw 80vw;
  background-position: -80vw -37vw;
  opacity: 0;
}
.baccarat-container .bet-content .bet-box-ping .ping-win-bg.show {
  -webkit-animation: win-line-show 3.5s forwards;
          animation: win-line-show 3.5s forwards;
}
.baccarat-container .bet-content .bet-box-ping .ping-box {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 18.5rem 12.5rem;
  background-position: 0.1rem -6.6rem;
  z-index: 1;
  border-radius: 1rem;
}
.baccarat-container .bet-content .bet-box {
  position: absolute;
  z-index: 8;
  bottom: 1vw;
  left: 20vw;
  width: 85vw;
  height: 52vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border-radius: 0 0 2rem 2rem;
  /*overflow: hidden;*/
}
.baccarat-container .bet-content .bet-ele {
  position: relative;
  width: 50%;
  height: 100%;
  /*background: rgba(0, 0, 0, .3);*/
}
.baccarat-container .bet-content .bet-ele .chip-box1 {
  position: absolute;
  width: 20vw;
  height: 29vw;
  left: 3vw;
  border-radius: 2rem;
  /*background: red;*/
  top: 10vw;
}
.baccarat-container .bet-content .bet-ele .chip-box2 {
  position: absolute;
  width: 20vw;
  height: 29vw;
  border-radius: 2rem;
  /*background: red;*/
  top: 10vw;
  right: 2vw;
}
/* @keyframes beautyshow{
  0%{background-position: 194Px 0;}
  100%{background-position: -3880Px 0;}
} */
@-webkit-keyframes beautyshow{
0%{background-position: 25.86vw 0;
}
100%{background-position: -517.34vw 0;
}
}
@keyframes beautyshow{
0%{background-position: 25.86vw 0;
}
100%{background-position: -517.34vw 0;
}
}
@-webkit-keyframes baccaratleft{
0%{background-position:2vw 16vw;
}
100%{background-position:-117vw 16vw;
}
}
@keyframes baccaratleft{
0%{background-position:2vw 16vw;
}
100%{background-position:-117vw 16vw;
}
}
@-webkit-keyframes baccaratright{
0%{background-position:4vw -5vw;
}
100%{background-position:-333vw -5vw;
}
}
@keyframes baccaratright{
0%{background-position:4vw -5vw;
}
100%{background-position:-333vw -5vw;
}
}
@-webkit-keyframes win-line-show
{
0% {opacity: 1;
}
20% {opacity: 0;
}
40% {opacity: 1;
}
60% {opacity: 0;
}
80% {opacity: 1;
}
100% {opacity: 0;
}
}
@keyframes win-line-show
{
0% {opacity: 1;
}
20% {opacity: 0;
}
40% {opacity: 1;
}
60% {opacity: 0;
}
80% {opacity: 1;
}
100% {opacity: 0;
}
}
/* 百家乐 end */
/** 适配不同屏幕显示 **/
/** 兼容处理开始 **/
/** 320宽 **/
@media screen and (max-width:320px) and (min-height:480px){
.betting-box{
    bottom: 0vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.nn100-chipbg{
    bottom:-27vw;
}
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 88vw;
}
.redblack-chipbg{
    bottom:-25vw;
}
.loongtiger-betting{
    -webkit-transform:scale(.5);
            transform:scale(.5);
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
.loongtiger-all-money{
    top:68vw;
}
.loongtiger-open-list > .loongtiger-opennumber{
    -webkit-transform: scale(.98);
            transform: scale(.98);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:159vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen  and (max-width:320px) and (min-height: 500px){
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 91vw;
}
.nn100-chipbg{
    bottom:-24vw;
}
.loongtiger-betting {
    -webkit-transform: scale(.8);
            transform: scale(.8);
    bottom: 17vw;
}
.loongtiger-all-money{
    top:64vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen  and (max-width:320px) and (min-height: 518px){
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 96vw;
}
.nn100-chipbg{
    bottom:-14vw;
}
.redblack-chipbg{
    bottom:-5vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 83vw;
    height: 45vw;
    bottom: inherit;
}
.chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting {
    bottom: 19vw;
}
.betting-box{
    bottom: 3vw;
}
}
@media screen  and (max-width:320px) and (min-height: 530px){
.chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    height: 59vw;
    bottom: inherit;
}
.chess-redblackwar-start .redblackwar-all-money {
    top: 66vw;
}
.loongtiger-betting{
    bottom: 20vw;
}
}
@media screen  and (max-width:320px) and (min-height: 550px){
.redblack-chipbg{
    bottom:-5vw;
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
.loongtiger-all-money{
    top:65vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen  and (max-width:320px) and (min-height: 560px){
.loongtiger-betting {
    bottom: 24vw;
}
.loongtiger-all-money{
    top:66vw;
}
}
@media screen  and (max-width:320px) and (min-height: 580px){
.redblack-chipbg{
    bottom:2vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 91vw;
    height: 59vw;
    bottom: inherit;
}
.chess-redblackwar-start .redblackwar-all-money {
    top: 77vw;
}
.loongtiger-all-money{
    top:70vw;
}
}
@media screen  and (max-width:320px) and (min-height: 600px){
.nn100-chipbg{
    bottom:-10vw;
}
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 99vw;
}
.redblack-chipbg{
    bottom:0vh;
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
@media screen  and (max-width:320px) and (min-height: 650px){
.redblack-chipbg{
    bottom:1vw;
    background-size:100% 100%;
}
.nn100-chipbg{
    bottom:-10vw;
    background-size: 100% 94%;
}
.betting-box {
    bottom: 20vw;
    -webkit-transform: scale(1);
            transform: scale(1);
}
   /** 牛牛 **/
.nnall-beting-money{
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
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen  and (max-width:320px) and (min-height: 700px){
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
@media screen  and (max-width:320px) and (min-height: 750px){
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
@media screen and (min-width:360px) and (min-height:480px){
.betting-box{
    bottom: 0vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.nn100-chipbg{
    bottom:-30vw;
}
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 84vw;
}
.redblack-chipbg{
    bottom:-34vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 55vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 65vw;
    height: 45vw;
    bottom: inherit;
}
.loongtiger-betting{
    -webkit-transform:scale(.5);
            transform:scale(.5);
    bottom: 7vw;
}
.loongtiger-all-money{
    top:62vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:159vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
.loongtiger-open-list > .loongtiger-opennumber{
    -webkit-transform: scale(.98);
            transform: scale(.98);
}
}
@media screen  and (min-width:360px) and (min-height: 500px){
.redblack-chipbg{
    bottom:-24vw;
}
.loongtiger-all-money{
    top:65vw;
}
.loongtiger-betting {
    bottom: 8vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 55vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 65vw;
    height: 45vw;
    bottom: inherit;
}
}
@media screen  and (min-width:360px) and (min-height: 518px){
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 89vw;
}
.redblack-chipbg{
    bottom:-24vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 55vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 68vw;
    height: 45vw;
    bottom: inherit;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting {
    bottom: 12vw;
}
.betting-box{
    bottom: 3vw;
}
}
@media screen  and (min-width:360px) and (min-height: 530px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 58vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 70vw;
    height: 49vw;
    bottom: inherit;
}
}
@media screen  and (min-width:360px) and (min-height: 540px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 61vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 73vw;
    height: 49vw;
    bottom: inherit;
}
}
@media screen  and (min-width:360px) and (min-height: 550px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 66vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 77vw;
    height: 49vw;
    bottom: inherit;
}
}
@media screen  and (min-width:360px) and (min-height: 560px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 68vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 79vw;
    height: 49vw;
    bottom: inherit;
}
.loongtiger-betting{
    -webkit-transform:scale(.8);
            transform:scale(.8);
    bottom: 17vw;
}
.loongtiger-all-money{
    top:63.5vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen  and (min-width:360px) and (min-height: 568px){
  /** 牛牛 **/
.nnall-beting-money{
    /* top: 63vw; */
}
.loongtiger-all-money{
    top:70vw;
}
.loongtiger-betting{
    bottom:17vw;
}
.redblack-chipbg{
    bottom:-12vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 63vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 75vw;
    height: 52vw;
    bottom: inherit;
}
.loongtiger-betting{
    bottom: 18vw;
}
.loongtiger-all-money{
    top:63.5vw;
}
}
@media screen  and (min-width:360px) and (min-height: 573px){
.redblack-chipbg{
    bottom:-12vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 64vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 77vw;
    height: 51vw;
    bottom: inherit;
}
}
@media screen and (min-width:360px) and (min-height:578px){
.loongtiger-betting{
    -webkit-transform:scale(.8);
            transform:scale(.8);
    bottom: 18vw;
}
.loongtiger-all-money{
    top:65.5vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
}
@media screen and (min-width:360px) and (min-height:585px){
.loongtiger-betting{
    -webkit-transform:scale(.9);
            transform:scale(.9);
    bottom: 20.5vw;
}
.loongtiger-all-money{
    top:63.5vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:90vw;
}
}
@media screen and (min-width:360px) and (min-height:600px){
.loongtiger-betting{
    -webkit-transform:scale(.9);
            transform:scale(.9);
    bottom: 21.5vw;
}
.loongtiger-all-money{
    top:65vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:90vw;
}
}
@media screen and (min-width:360px) and (min-height:609px){
.nn100-chipbg{
   bottom:-23vw;
}
.nnall-beting-money {
   bottom:97vw;
}
.betting-box{
    bottom: 6vw;
    -webkit-transform:scale(.8);
            transform:scale(.8);
}
.loongtiger-all-money{
    top:67vw;
}
.redblack-chipbg{
    bottom:-10vh;
}
.loongtiger-betting {
    bottom: 22vw;
}
.redblack-chipbg{
    bottom:-1vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 70vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 83vw;
    height: 51vw;
    bottom: inherit;
}
}
@media screen and (min-width:360px) and (min-height:630px){
.nn100-chipbg{
   bottom:-5vw;
}
.nnall-beting-money {
    bottom:110vw;
}
.betting-box{
    bottom: 17vw;
}
.redblack-chipbg{
    bottom:0vh;
}
.loongtiger-all-money{
    top:70vw;
}
.loongtiger-betting {
    bottom: 31vw;
}
.chess-redblackwar-start .redblackwar-all-money{
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
.loongtiger-betting{
    -webkit-transform:scale(1);
            transform:scale(1);
    bottom: 25.5vw;
}
.loongtiger-all-money{
    top:65.5vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
}
@media screen and (min-width:360px) and (min-height:640px){
.loongtiger-betting {
    height: 75vw;
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 24vw;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen and (min-width:360px) and (min-height:650px){
.loongtiger-betting {
    height: 75vw;
    bottom: 26vw;
}
}
@media screen and (min-width:360px) and (min-height:661px){
.nnall-beting-money {
    /* top: 68vw; */
}
.betting-box{
    /* bottom: 17vw; */
    /* bottom: 5vw; */
}
.redblack-chipbg{
    bottom:0vh;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 75vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 94vw;
    bottom: inherit;
}
.loongtiger-all-money{
    top:68vw;
}
}
@media screen and (min-width:360px) and (min-height:666px){
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 91vw;
    /* bottom: 42vw; */
    height: 55vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 75vw;
}
}
@media screen and (min-width:360px) and (min-height:676px){
.nn100-chipbg {
    bottom: 0vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 82vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 94vw;
    /* bottom: 42vw; */
    height: 55vw;
}
.loongtiger-all-money{
    top:69vw;
}
.loongtiger-betting {
    bottom: 29vw;
}
}
@media screen and (min-width:360px) and (min-height:690px){
.redblack-chipbg{
    bottom:0vh;
    background-size: 100% 101%;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 82vw;
}
.chess-redblackwar-start .redblackwar-betting{
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
.betting-box{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 18vw;
}
}
@media screen and (min-width:360px) and (min-height:700px){
  /** 从这里开始 **/
.chess-redblackwar-start .redblackwar-all-money{
    top: 81vw;
}
.redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 101%;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 93vw;
}
.nnall-beting-money{
    bottom: 122vw;
}
.nn100-chipbg {
    bottom: 0vw;
    background-size: 100% 88%;
}
.betting-box{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 18vw;
}
.loongtiger-betting {
    bottom: 32vw;
}
}
@media screen and (min-width:360px) and (min-height:730px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 84vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 100vw;
}
}
@media screen and (min-width:360px) and (min-height:736px){
.betting-box{
    bottom: 18vw;
}
.nnall-beting-money{
    bottom: 124vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 84vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 99vw;
}
.loongtiger-betting {
    bottom: 37vw;
}
}
@media screen and (min-width:360px) and (min-height:760px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 88vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 107vw;
}
}
@media screen and (min-width:360px) and (min-height:780px){
.nnall-beting-money{
    bottom: 132vw;
}
.betting-box{
    bottom: 22vw;
}
}
@media screen and (min-width:360px) and (min-height:800px){
.nn100-chipbg {
    bottom: 9vw;
}
.nnall-beting-money{
    bottom: 145vw;
}
.betting-box{
    bottom: 29vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 98vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 115vw;
    height: 70vw;
}
.redblack-chipbg{
    bottom:4vw;
    background-size: 100% 100%;
}
.loongtiger-betting {
    bottom: 48vw;
}
}
@media screen and (min-width:360px) and (min-height:900px){
.nn100-chipbg {
    bottom: 9vw;
}
.nnall-beting-money{
    bottom: 152vw;
}
.betting-box{
    bottom: 29vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 116vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 141vw;
}
.redblack-chipbg{
    bottom:4vw;
}
}
/** 375宽 **/
@media screen and (min-width:375px) and (min-height: 480px){
.loongtiger-all-money{
    top:44vw;
}
}
@media screen and (min-width:375px) and (min-height: 484px){
.nn100-chipbg {
    height:120vh;
    bottom: -19vw;
}
.nnall-beting-money{
    bottom: 90vw;
}
.betting-box{
    bottom: 1vw;
    -webkit-transform: scale(.75);
            transform: scale(.75)
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
.loongtiger-all-money{
    top:44vw;
}
.loongtiger-betting {
    bottom: 7vw;
}
}
@media screen and (min-width:375px) and (min-height: 500px){
.nn100-chipbg {
    height:120vh;
    bottom: -19vw;
}
.nnall-beting-money{
    bottom: 90vw;
}
.betting-box{
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
.loongtiger-open-list{
    top:56vw;
}
.loongtiger-all-money{
    top:61vw;
}
.loongtiger-betting {
    bottom: 7vw;
}
}
@media screen and (min-width:375px) and (min-height: 513px){
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
@media screen and (min-width:375px) and (min-height: 540px){
.betting-box{
    bottom: 2vw;
    -webkit-transform: scale(.75);
            transform: scale(.75)
}
.betting-box .betting-list > div {
    width: 40%;
}
.loongtiger-open-list {
    top: 58vw;
}
.nn100-chipbg {
    height:100vh;
    bottom: -29vw;
}
.nnall-beting-money{
    bottom: 90vw;
}
.redblack-chipbg{
    bottom:-25vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 72vw;
}
.chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting {
    bottom: 9vw;
}
}
@media screen and (min-width:375px) and (min-height: 553px){
.nn100-chipbg{
    bottom:-24vw;
}
.nnall-beting-money{
    bottom:94vw;
}
.betting-box{
    bottom: 4vw;
}
.loongtiger-all-money{
    top:68vw;
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
.loongtiger-betting{
    -webkit-transform:scale(.7);
            transform:scale(.7);
    bottom: 14vw;
}
.loongtiger-all-money{
    top:62.5vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:115vw;
}
}
@media screen and (min-width:375px) and (min-height: 560px){
.loongtiger-betting{
    bottom: 14vw;
}
.loongtiger-all-money{
    top:63.5vw;
}
}
@media screen and (min-width:375px) and (min-height: 570px){
.loongtiger-betting{
    bottom: 15vw;
}
.loongtiger-all-money{
    top:64vw;
}
}
@media screen and (min-width:375px) and (min-height: 580px){
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 95vw;
}
.betting-box{
    bottom: 6vw;
}
.nn100-chipbg{
    bottom:-21vw;
}
.loongtiger-betting{
    -webkit-transform:scale(.8);
            transform:scale(.8);
    bottom: 17vw;
}
.loongtiger-all-money{
    top:63vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 72vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 78vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
}
@media screen and (min-width:375px) and (min-height: 590px){
.loongtiger-all-money{
    top:65vw;
}
}
@media screen and (min-width:375px) and (min-height:600px){
.nn100-chipbg{
    bottom:-19vw;
}
.nnall-beting-money{
    bottom: 98vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 82vw;
}
.loongtiger-betting{
    -webkit-transform:scale(.9);
            transform:scale(.9);
    bottom: 20vw;
}
.loongtiger-all-money{
    top:62vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:90vw;
}
}
@media screen and (min-width:375px) and (min-height:610px){
.loongtiger-all-money{
    top:64vw;
}
}
@media screen and (min-width:375px) and (min-height:630px){
.redblack-chipbg {
    bottom: -8vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 72vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 83vw;
}
.loongtiger-betting{
    -webkit-transform:scale(1);
            transform:scale(1);
    bottom: 24vw;
}
.loongtiger-all-money{
    top:62vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
}
@media screen and (min-width:375px) and (min-height:635px){
.nn100-chipbg{
    bottom:-13vw;
}
.loongtiger-all-money{
    top:63vw;
}
.betting-box{
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
.redblack-chipbg{
    bottom:-10vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 75.5vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 87vw;
}

  /** 牛牛 **/
.nnall-beting-money{
    bottom:102vw;
}
.betting-box .betting-list > div{
    height:21vw;
    width: 35%;
}
}
@media screen and (min-width:375px) and (min-height:638px){
.nn100-chipbg {
    bottom: -13vw;
}
.redblack-chipbg{
   bottom:-10vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 75.5vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 87vw;
}
.loongtiger-all-money{
    top:63vw;
}
.loongtiger-betting {
    bottom: 25vw;
}
}
@media screen and (min-width:375px) and (min-height:639px){
}
@media screen and (min-width:375px) and (min-height:640px){
.loongtiger-all-money{
    top:65vw;
}
.loongtiger-betting{
    bottom:22vw;
}
}
@media screen and (min-width:375px) and (min-height:647px){
.loongtiger-all-money{
    top:65.5vw;
}
.loongtiger-betting{
    bottom:23vw;
}
}
@media screen and (min-width:375px) and (min-height:650px){
.nn100-chipbg {
    bottom: -11vw;
}
.loongtiger-all-money{
    top:66vw;
}
.loongtiger-betting{
    bottom:23vw;
}
}
@media screen and (min-width:375px) and (min-height:660px){
.redblack-chipbg{
   bottom:-4vw;
}
.nn100-chipbg {
    height:120vh;
    bottom: -6vw;
}
.nnall-beting-money{
    bottom: 110vw;
}
.betting-box {
    bottom: 14vw;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting{
    bottom:24vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 87vw;
    height: 55vw;
}
}
@media screen and (min-width:375px) and (min-height:667px){
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting{
    bottom:25vw;
}
}
@media screen and (min-width:375px) and (min-height:680px){
.nn100-chipbg {
    height:120vh;
    bottom: -3vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 87vw;
    height: 58vw;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting{
    bottom:25vw;
}
}
@media screen and (min-width:375px) and (min-height:700px){
.nn100-chipbg {
    height: 100vh;
    bottom: -3vw;
    background-size: 100% 88%;
}
.betting-box{
    bottom: 13vw;
}
.loongtiger-all-money{
    top:69vw;
}
.redblack-chipbg{
   bottom:4vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 78vw;
}
.chess-redblackwar-start .redblackwar-betting{
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
@media screen and (min-width:375px) and (min-height:750px){
.nnall-beting-money{
    bottom: 115vw;
}
.redblack-chipbg{
   bottom:4vw;
   background-size: 100% 100%;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 84vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 93vw;
    height: 68vw;
}
}
@media screen and (min-width:375px) and (min-height:790px){
.nn100-chipbg {
    bottom: -3vw;
}
.nnall-beting-money{
    bottom: 117vw;
}
.betting-box{
    bottom: 13vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 88vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 102vw;
}
}
@media screen and (min-width:375px) and (min-height:800px){
.nn100-chipbg {
    bottom: 5vw;
}
.nnall-beting-money{
    bottom: 136vw;
}
.betting-box {
    bottom: 26vw;
}
.redblack-chipbg{
    bottom:5vw;
    background-size: 100vw 102%;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 87vw;
}
.chess-redblackwar-start .redblackwar-betting{
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
@media screen and (min-width:375px) and (min-height:880px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 98vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 115vw;
    height: 75vw;
    bottom: inherit;
}
}
@media screen and (min-width:375px) and (min-height:900px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 98vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 115vw;
    height: 75vw;
    bottom: inherit;
}
}
/** 384宽 **/
@media screen and (min-width:384px) and (min-height: 500px){
.loongtiger-all-money{
    top: 60vw;
}
}
@media screen and (min-width:384px) and (min-height: 510px){
.loongtiger-all-money{
    top: 61vw;
}
}
@media screen and (min-width:384px) and (min-height: 520px){
.loongtiger-all-money{
    top: 61vw;
}
.loongtiger-betting{
    bottom: 8vw;
}
}
@media screen and (min-width:384px) and (min-height: 530px){
.loongtiger-all-money{
    top: 61vw;
}
.loongtiger-betting{
    bottom: 8vw;
}
}
@media screen and (min-width:384px) and (min-height: 535px){
.loongtiger-all-money{
    top: 61vw;
}
.loongtiger-betting{
    bottom: 10vw;
    -webkit-transform: scale(.6);
            transform: scale(.6);
}
.loongtiger-betting .loongtiger-first, .loongtiger-betting .loongtiger-second, .loongtiger-betting > div .loongtiger-betting-he {
    width: 135vw;
}
}
@media screen and (min-width:384px) and (min-height: 540px){
.loongtiger-all-money{
    top: 63vw;
}
.loongtiger-betting{
    bottom: 10vw;
}
}
@media screen and (min-width:384px) and (min-height: 550px){
.loongtiger-all-money{
    top: 63vw;
}
.loongtiger-betting{
    bottom: 11vw;
}
}
@media screen and (min-width:384px) and (min-height: 560px){
.loongtiger-all-money{
    top: 65vw;
}
.loongtiger-betting{
    bottom: 11vw;
}
}
@media screen and (min-width:384px) and (min-height: 580px){
.loongtiger-all-money{
    top: 65vw;
}
.loongtiger-betting{
    bottom: 14vw;    
    -webkit-transform: scale(.7);    
            transform: scale(.7);
}
.loongtiger-betting .loongtiger-first, .loongtiger-betting .loongtiger-second, .loongtiger-betting > div .loongtiger-betting-he {
    width: 116vw;
}
}
@media screen and (min-width:384px) and (min-height: 600px){
.loongtiger-all-money{
    top: 67vw;
}
}
@media screen and (min-width:384px) and (min-height: 610px){
.loongtiger-all-money{
    top: 65vw;
}
.loongtiger-betting{
    bottom: 17vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.loongtiger-betting .loongtiger-first, .loongtiger-betting .loongtiger-second, .loongtiger-betting > div .loongtiger-betting-he {
    width: 100vw;
}
}
@media screen and (min-width:384px) and (min-height: 630px){
.loongtiger-all-money{
    top: 63vw;
}
.loongtiger-betting{
    bottom: 21vw;
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.loongtiger-betting .loongtiger-first, .loongtiger-betting .loongtiger-second, .loongtiger-betting > div .loongtiger-betting-he {
    width: 90vw;
}
}
@media screen and (min-width:384px) and (min-height: 640px){
.loongtiger-all-money{
    top: 64vw;
}
}
@media screen and (min-width:384px) and (min-height: 660px){
.loongtiger-all-money{
    top: 65vw;
}
.loongtiger-betting{
    bottom: 23vw;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.loongtiger-betting .loongtiger-first, .loongtiger-betting .loongtiger-second, .loongtiger-betting > div .loongtiger-betting-he {
    width: 80vw;
}
}
@media screen and (min-width:384px) and (min-height: 680px){
.loongtiger-all-money{
    top: 67vw;
}
.loongtiger-betting{
    bottom: 25vw;
}
}
@media screen and (min-width:384px) and (min-height: 730px){
.loongtiger-all-money{
    top: 69vw;
}
.loongtiger-betting{
    bottom: 29vw;
}
}
/** 411宽 **/
@media screen and (min-width:411px) and (min-height: 480px){
.loongtiger-all-money{
    top: 40vw;
}
.loongtiger-betting {
    bottom: 6vw;
}
.loongtiger-open-list{
    top: 49vw;
}
}
@media screen and (min-width:411px) and (min-height: 484px){
.nn100-chipbg {
    height:120vh;
    bottom: -39vw;
}
.nnall-beting-money{
    bottom: 67vw;
}
.betting-box{
    bottom: -9vw;
    -webkit-transform: scale(.5);
            transform: scale(.5);
}
.redblack-chipbg{
    height:120vh;
    bottom:-33vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 49vw;
    height: 45vw;
}
.chess-redblackwar-start .redblackwar-all-money {
    top: 36.5vh;
}
.loongtiger-open-list{
    top: 50vw;
}
.loongtiger-all-money{
    top:40vw;
}
.loongtiger-betting {
    bottom: 6vw;
}
}
@media screen and (min-width:411px) and (min-height: 500px){
.loongtiger-open-list{
    top: 52vw;
}
.loongtiger-all-money{
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
@media screen and (min-width:411px) and (min-height: 510px){
.loongtiger-open-list{
    top: 55vw;
}
}
@media screen and (min-width:411px) and (min-height: 530px){
.loongtiger-open-list{
    top: 58vw;
}
.loongtiger-betting {
    bottom: 7vw;
}
}
@media screen and (min-width:411px) and (min-height: 540px){
.betting-box{
    bottom: -3vw;
    -webkit-transform: scale(.6);
            transform: scale(.6);
}
.nn100-chipbg {
    height:100vh;
    bottom: -29vw;
}
.nnall-beting-money{
    bottom: 80vw;
}
.redblack-chipbg{
    bottom:-27vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 58vw;
}
.chess-redblackwar-start .redblackwar-all-money {
    bottom: inherit;
    top: 50vw;
}
.loongtiger-open-list{
    top:55vw;
}
.loongtiger-all-money{
    top:60vw;
}
.loongtiger-betting {
    bottom: 7vw;
}
}
@media screen and (min-width:411px) and (min-height: 550px){
.loongtiger-all-money{
    top:61vw;
}
.loongtiger-betting {
    bottom: 7vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 50vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 62vw;
}
}
@media screen and (min-width:411px) and (min-height: 553px){
.loongtiger-all-money{
    top:61vw;
}
.loongtiger-betting {
    bottom: 7vw;
    -webkit-transform: scale(.5);
            transform: scale(.5);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:162vw;
}
}
@media screen and (min-width:411px) and (min-height: 560px){
.loongtiger-open-list{
    top:57vw;
}
.loongtiger-all-money{
    top:64vw;
}
.loongtiger-betting {
    bottom: 7vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 52vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 65vw;
}
}
@media screen and (min-width:411px) and (min-height: 570px){
.loongtiger-all-money{
    top:64vw;
}
.loongtiger-betting {
    bottom: 8vw;
}
}
@media screen and (min-width:411px) and (min-height: 579px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 56vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 69vw;
}
}
@media screen and (min-width:411px) and (min-height: 580px){
  /** 牛牛 **/
.nnall-beting-money{
    bottom: 89vw;
}
.redblack-chipbg{
    bottom:-28vw;
}
.betting-box{
    bottom: 2vw;
    -webkit-transform: scale(.7);
            transform: scale(.7);
}
.nn100-chipbg{
    bottom:-31vw;
}
.loongtiger-betting {
    bottom: 14vw;
    -webkit-transform: scale(.7);
            transform: scale(.7);
}
.loongtiger-all-money{
    top:43vw;
}
.loongtiger-open-list{
    top:58vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 69vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:115vw;
}
}
@media screen and (min-width:411px) and (min-height:590px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 60vw;
}
.chess-redblackwar-start .redblackwar-betting {
    bottom: inherit;
    top: 73vw;
}
}
@media screen and (min-width:411px) and (min-height:600px){
  /** 牛牛 **/
.nnall-beting-money{
    bottom:88vw;
}
.betting-box .betting-list > div{
    height:20vw;
}
.betting-box{
    bottom: 2vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.nn100-chipbg {
    bottom: -29vw;
}
.loongtiger-betting {
    bottom: 13vw;
}
.loongtiger-all-money{
    top:62vw;
}
.loongtiger-open-list{
    top:58vw;
}
.redblack-chipbg{
    bottom:-22vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 70vw;
}
}
@media screen and (min-width:411px) and (min-height:610px){
.loongtiger-all-money{
    top:64vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:115vw;
}
}
@media screen and (min-width:411px) and (min-height:620px){
.loongtiger-all-money{
    top:64vw;
}
.loongtiger-betting {
    bottom: 14vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 62vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 76vw;
}
}
@media screen and (min-width:411px) and (min-height:630px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 67vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 79vw;
}
.loongtiger-betting {
    bottom: 17vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.loongtiger-all-money{
    top:62vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
}
@media screen and (min-width:411px) and (min-height:638px){
.redblack-chipbg{
    bottom:-17vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 68vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 80vw;
}
.loongtiger-all-money{
    top:63vw;
}
.loongtiger-betting {
    bottom: 17vw;
}
}
@media screen and (min-width:411px) and (min-height:640px){
.nn100-chipbg {
    bottom: -19vw;
}
.nnall-beting-money{
    bottom:97vw;
}
.betting-box{
    bottom: 7vw;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.loongtiger-betting {
    bottom: 15vw;
}
.loongtiger-all-money{
    top:64vw;
}
}
@media screen and (min-width:411px) and (min-height:650px){
.loongtiger-betting {
    bottom: 19vw;
}
.loongtiger-all-money{
    top:62vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 68vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 84vw;
}
}
@media screen and (min-width:411px) and (min-height:659px){
.loongtiger-betting {
    bottom: 19vw;
}
.loongtiger-all-money{
    top:64vw;
}
}
@media screen and (min-width:411px) and (min-height:660px){
.loongtiger-betting {
    bottom: 19vw;
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.loongtiger-all-money{
    top:62vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:90vw;
}
}
@media screen and (min-width:411px) and (min-height:670px){
.loongtiger-all-money{
    top:64vw;
}
}
@media screen and (min-width:411px) and (min-height:680px){
.loongtiger-all-money{
    top:64vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 75vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 89vw;
}
}
@media screen and (min-width:411px) and (min-height:690px){
.nn100-chipbg {
    bottom: -15vw;
}
.nnall-beting-money{
    bottom:101vw;
}
.betting-box{
    bottom: 8vw;
}
.loongtiger-all-money{
    top:63vw;
}
.loongtiger-betting {
    bottom: 22vw;
    -webkit-transform:scale(1);
            transform:scale(1);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:39vw;
}
.redblack-chipbg{
    bottom:-25vw;
}
}
@media screen and (min-width:411px) and (min-height:700px){
.nn100-chipbg {
    bottom: -2vw;
}
.nnall-beting-money{
    bottom:103vw;
}
.betting-box{
    bottom: 8vw;
}
.loongtiger-all-money{
    top:65vw;
}
.redblack-chipbg{
    bottom:-24vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 66vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 85vw;
    height:56vw;
}
.loongtiger-betting {
    bottom: 22vw;
}
}
@media screen and (min-width:411px) and (min-height:710px){
.loongtiger-betting {
    bottom: 23vw;
}
}
@media screen and (min-width:411px) and (min-height:730px){
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting {
    bottom: 24vw;
}
.redblack-chipbg{
    bottom:-22vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 85vw;
    height:56vw;
}
}
@media screen and (min-width:411px) and (min-height:750px){
.nn100-chipbg {
    bottom: -2vw;
}
.nnall-beting-money{
    bottom:108vw;
}
.betting-box{
    bottom: 12vw;
}
.loongtiger-all-money{
    top:69vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 72vw;
}
.chess-redblackwar-start .redblackwar-betting{
    bottom: inherit;
    top: 91vw;
}
.loongtiger-betting {
    bottom: 26vw;
}
}
@media screen and (min-width:411px) and (min-height:790px){
.nn100-chipbg {
    bottom: -2vw;
}
.nnall-beting-money{
    bottom:115vw;
}
.betting-box{
    bottom: 16vw;
}
.loongtiger-betting {
    bottom: 30vw;
}
}
@media screen and (min-width:411px) and (min-height:800px){
.nnall-beting-money{
    bottom:115vw;
}
.betting-box{
    bottom: 16vw;
}
.loongtiger-all-money{
    top:70vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 86vw;
}
.chess-redblackwar-start .redblackwar-betting{
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
@media screen and (min-width:411px) and (min-height:890px){
.chess-redblackwar-start .redblackwar-betting{
    top: 103vw;
    bottom: inherit;
}
}
/** 414宽 **/
@media screen and (min-width:414px) and (min-height: 510px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 46vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 55vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 520px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 46vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 56vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 526px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 48vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 58vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 530px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 48vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 59vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 550px){
.loongtiger-all-money{
    top:66vw;
}
.loongtiger-betting {
    bottom: 8vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 50vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 61vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 570px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 55vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 67vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 580px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 69vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 598px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 74vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 600px){
.betting-box{
    bottom: -2vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.nn100-chipbg {
    height:100vh;
    bottom: -31vw;
}
.nnall-beting-money{
    bottom: 85vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 69vw;
    bottom: inherit;
    height:50vw;
}
.redblack-chipbg {
    bottom: -25vw;
}
.loongtiger-all-money{
    top:61.5vw;
}
.loongtiger-betting {
    bottom: 13vw;
}
}
@media screen and (min-width:414px) and (min-height: 610px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 72vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height: 617px){
.loongtiger-all-money{
    top:63vw;
}
}
@media screen and (min-width:414px) and (min-height: 620px){
.chess-redblackwar-start .redblackwar-all-money{
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
@media screen and (min-width:414px) and (min-height: 634px){
.chess-redblackwar-start .redblackwar-betting {
    top: 76vw;
    bottom: inherit;
}
.loongtiger-betting {
    bottom: 15.5vw;
}
}
@media screen and (min-width:414px) and (min-height: 640px){
.chess-redblackwar-start .redblackwar-betting {
    top: 76vw;
    bottom: inherit;
}
.loongtiger-betting {
    bottom: 15.5vw;
}
}
@media screen and (min-width:414px) and (min-height: 650px){
.nn100-chipbg {
    bottom: -21vw;
}
.nnall-beting-money{
    bottom: 99vw;
}
.betting-box{
    bottom: 7vw;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.chess-redblackwar-start .redblackwar-all-money{
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
@media screen and (min-width:414px) and (min-height: 667px){
.nn100-chipbg {
    bottom: -18vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 72vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    bottom: inherit;
}
.redblack-chipbg {
    bottom: -13vw;
}
.loongtiger-all-money{
    top:63vw;
}
.loongtiger-betting {
    bottom: 19vw;
}
}
@media screen and (min-width:414px) and (min-height: 680px){
.chess-redblackwar-start .redblackwar-all-money{
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
@media screen and (min-width:414px) and (min-height:690px){
.nn100-chipbg {
    bottom: -15vw;
}
.nnall-beting-money{
    bottom: 101vw;
}
.betting-box{
    bottom: 8vw;
}
.loongtiger-betting {
    bottom: 22vw;
}
.loongtiger-all-money{
    top:62vw;
}
.redblack-chipbg {
    bottom: -24vw;
}
}
@media screen and (min-width:414px) and (min-height:700px){
.nn100-chipbg {
    height:100vh;
    bottom: -18vw;
    background-size: 100% 100%;
}
.nnall-beting-money{
    bottom: 102vw;
}
.betting-box{
    bottom: 8vw;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 78vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 90vw;
    bottom: inherit;
}
.redblack-chipbg {
    bottom: -24vw;
}
.loongtiger-all-money{
    top:64vw;
}
.loongtiger-betting {
    bottom: 22.5vw;
}
}
@media screen and (min-width:414px) and (min-height:710px){
.redblack-chipbg {
    bottom: -20vw;
}
}
@media screen and (min-width:414px) and (min-height:720px){
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting {
    bottom: 23vw;
}
.redblack-chipbg {
    bottom: -22vw;
}
}
@media screen and (min-width:414px) and (min-height:730px){
.nnall-beting-money{
    bottom: 105vw;
}
.betting-box{
    bottom: 10vw;
}
.chess-redblackwar-start .redblackwar-all-money{
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
@media screen and (min-width:414px) and (min-height:736px){
.redblack-chipbg {
    bottom: -20vw;
}
}
@media screen and (min-width:414px) and (min-height:750px){
.betting-box{
    bottom: 10vw;
}
.nn100-chipbg {
    bottom: -18vw;
}
.nnall-beting-money{
    bottom: 109vw;
}
.redblack-chipbg{
    bottom:-24vw;
}
.loongtiger-all-money{
    top:68vw;
}
.loongtiger-betting {
    bottom: 25vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 83vw;
}
.chess-redblackwar-start .redblackwar-betting{
    top: 93vw;
    bottom: inherit;
}
}
@media screen and (min-width:414px) and (min-height:780px){
.nnall-beting-money{
    bottom: 112vw;
}
.betting-box{
    bottom: 13vw;
}
.chess-redblackwar-start .redblackwar-all-money{
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
@media screen and (min-width:414px) and (min-height:800px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 83vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 100vw;
    bottom: inherit;
}
.loongtiger-all-money{
    top:68vw;
}
.redblack-chipbg {
    bottom: -6vw;
}
.loongtiger-betting {
    bottom: 29vw;
}
}
@media screen and (min-width:414px) and (min-height:823px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 85vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 100vw;
    bottom: inherit;
    height:65vw;
}
.redblack-chipbg {
    bottom: 4vw;
    background-size: 100% 83%;
}
}
@media screen and (min-width:414px) and (min-height:900px){
.betting-box{
    bottom: 22vw;
}
.nn100-chipbg {
    bottom: -18vw;
}
.nnall-beting-money{
    bottom: 133vw;
}
}
/** 480宽 **/
@media screen and (min-width:480px) and (min-height:650px){
.nn100-chipbg {
    bottom: -42vw;
}
.nnall-beting-money{
    bottom: 78vw;
}
.betting-box{
    bottom: -4vw;
    -webkit-transform: scale(.7);
            transform: scale(.7);
}
.nn100-chipbg {
   height: 100vh;
   bottom: -36vw;
}
.loongtiger-all-money{
    top:63vw;
}
.loongtiger-betting {
    bottom: 6vw;
}
.loongtiger-betting{
    -webkit-transform:scale(.6);
            transform:scale(.6);
    bottom: 9vw;
}
.loongtiger-all-money{
    top:42vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:133vw;
}
}
@media screen and (min-width:480px) and (min-height:690px){
.loongtiger-all-money{
    top:43vw;
}
.loongtiger-betting {
    bottom: 12vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:114vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen and (min-width:480px) and (min-height:700px){
.chess-redblackwar-start .redblackwar-all-money{
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
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.loongtiger-all-money{
    top:43vw;
}
.loongtiger-betting {
    bottom: 13vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.redblack-chipbg{
    bottom:-24vw;
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:115vw;
}
}
@media screen and (min-width:480px) and (min-height:750px){
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
.chess-redblackwar-start .redblackwar-all-money{
    top: 58vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 73vw;
    bottom: inherit;
}
.redblack-chipbg {
    bottom: -17vw;
}
.loongtiger-all-money{
    top:41vw;
}
.loongtiger-betting {
    bottom: 19vw;
    -webkit-transform:scale(.9);
            transform:scale(.9);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:89vw;
}
}
@media screen and (min-width:480px) and (min-height:780px){
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
.chess-redblackwar-start .redblackwar-all-money{
    top: 64vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 77vw;
    bottom: inherit;
}
.redblack-chipbg {
    bottom: -12vw;
}
.loongtiger-all-money{
    top:63vw;
}
}
@media screen and (min-width:480px) and (min-height:790px){
.loongtiger-all-money{
    top:65vw;
}
}
@media screen and (min-width:480px) and (min-height:800px){
.chess-redblackwar-start .redblackwar-all-money{
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
.redblack-chipbg{
    bottom:-1vw;
}
.loongtiger-all-money{
    top:66vw;
}
.loongtiger-betting {
    bottom: 20vw;
}
}
@media screen and (min-width:480px) and (min-height:820px){
.loongtiger-all-money{
    top:65vw;
}
.loongtiger-betting {
    bottom: 22vw;
    -webkit-transform:scale(1);
            transform:scale(1);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
}
@media screen and (min-width:480px) and (min-height:830px){
.nnall-beting-money{
    bottom:103vw;
}
.betting-box {
    bottom: 10vw;    
    -webkit-transform: scale(1);    
            transform: scale(1);
}
.redblack-chipbg{
    bottom:-3vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 73vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    bottom: inherit;
}
.loongtiger-all-money{
    top:66vw;
}
.loongtiger-betting {
    bottom: 23vw;
    -webkit-transform:scale(1);
            transform:scale(1);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:39vw;
}
}
@media screen and (min-width:480px) and (min-height:850px){
.loongtiger-betting {
    bottom: 25vw;
}
}
@media screen and (min-width:480px) and (min-height:860px){
.betting-box {
    bottom: 11vw;
}
.nnall-beting-money{
    bottom:107vw;
}
.redblack-chipbg{
    bottom:-4vw;
}
.chess-redblackwar-start .redblackwar-all-money{
    top: 76vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 86vw;
    bottom: inherit;
}
.loongtiger-all-money{
    top:67vw;
}
.loongtiger-betting {
    bottom: 25vw;
}
}
@media screen and (min-width:480px) and (min-height:890px){
.nnall-beting-money{
    bottom:109vw;
}
.betting-box {
    bottom: 12vw;
}
.redblack-chipbg{
    bottom:-9vw;
}
.chess-redblackwar-start .redblackwar-all-money{
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
@media screen and (min-width:480px) and (min-height:900px){
.chess-redblackwar-start .redblackwar-all-money{
    top: 75.5vw;
}
.redblack-chipbg{
    bottom:0vh;
}
.nnall-beting-money{
    bottom:111vw;
}
.betting-box {
    bottom: 14vw;
}
.loongtiger-all-money{
    top:70vw;
}
.loongtiger-betting {
    bottom: 25vw;
    -webkit-transform:scale(1);
            transform:scale(1);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen and (min-width:480px) and (min-height:950px){
.loongtiger-betting {
    bottom: 35vw;
}
.nnall-beting-money{
    bottom:116vw;
}
}
/** 600 width**/
@media screen and (min-width:600px) and (min-height:800px){
.chess-redblackwar-start .redblackwar-all-money {
    top: 53vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 60vw;
    bottom: inherit;
    height: 44vw;
}
}
@media screen and (min-width:600px) and (min-height:800px){
.nnall-beting-money {
    bottom: 77vw;
}
.nn100-chipbg {
    height: 100vh;
    bottom: -20vw;
}
.betting-box {
    bottom: -4vw;
    -webkit-transform: scale(.7);
            transform: scale(.7);
}
.chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 44vw;
}
.loongtiger-all-money{
    top:62.5vw;
}
.loongtiger-betting {
    bottom: 12vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:115vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen and (min-width:600px) and (min-height:880px){
.nnall-beting-money {
    bottom: 85vw;
}
.nn100-chipbg {
    height: 100vh;
    bottom: -20vw;
}
.betting-box {
    bottom: -1vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
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
@media screen and (min-width:600px) and (min-height:900px){
.chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 51vw;
}
.loongtiger-all-money{
    top:65vw;
}
}
@media screen and (min-width:600px) and (min-height:950px){
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
.loongtiger-all-money{
    top:62.5vw;
}
.loongtiger-betting {
    bottom: 16vw;
    -webkit-transform:scale(.8);
            transform:scale(.8);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
.loongtiger-betting .loongtiger-first > div,
  .loongtiger-betting > div .loongtiger-betting-loong,
  .loongtiger-betting > div .loongtiger-betting-tiger,
  .loongtiger-betting > div .loongtiger-betting-tiger .loongtiger-number-top{
    width:100%;
}
}
@media screen and (min-width:600px) and (min-height:960px){
.loongtiger-all-money{
    top:66.5vw;
}
}
@media screen and (min-width:600px) and (min-height:990px){
.chess-redblackwar-start .redblackwar-all-money {
    top: 69vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 81vw;
    bottom: inherit;
    height: 51vw;
}
.loongtiger-all-money{
    top:64.5vw;
}
.loongtiger-betting {
    bottom: 20vw;
    -webkit-transform:scale(.9);
            transform:scale(.9);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:90vw;
}
}
@media screen and (min-width:600px) and (min-height:1100px){
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
.loongtiger-all-money{
    top:70vw;
}
.loongtiger-betting {
    bottom: 24vw;
    -webkit-transform:scale(1);
            transform:scale(1);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:80vw;
}
}
@media screen and (min-width:600px) and (min-height:1200px){
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
@media screen and (min-width:768px) and (min-height:1000px){
.nnall-beting-money {
    bottom: 80vw;
}
.nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
}
.betting-box {
    bottom: -3vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.loongtiger-all-money{
    top:60vw;
}
.loongtiger-open-list {
    top: 56vw;
}
.loongtiger-betting {
    bottom: 5vw;
    -webkit-transform:scale(.5);
            transform:scale(.5);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:161vw;
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
@media screen and (min-width:768px) and (min-height:1024px){
.loongtiger-all-money{
    top:62vw;
}
}
@media screen and (min-width:768px) and (min-height:1100px){
.nnall-beting-money {
    bottom: 89vw;
}
.nn100-chipbg {
    height: 100vh;
    bottom: -17vw;
}
.betting-box {
    bottom: 2vw;
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.loongtiger-all-money{
    top:60vw;
}
.loongtiger-open-list {
    top: 56vw;
}
.loongtiger-betting {
    bottom: 11vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:115vw;
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
@media screen and (min-width:768px) and (min-height:1137px){
.chess-redblackwar-start .redblackwar-all-money {
    top: 55vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 65vw;
    bottom: inherit;
    height: 49vw;
}
}
@media screen and (min-width:768px) and (min-height:1185px){
.chess-redblackwar-start .redblackwar-all-money {
    top: 59vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 68vw;
    bottom: inherit;
    height: 49vw;
}
}
@media screen and (min-width:768px) and (min-height:1200px){
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
.loongtiger-all-money{
    top:65.5vw;
}
.loongtiger-open-list {
    top: 58vw;
}
.loongtiger-betting {
    bottom: 15vw;
    -webkit-transform:scale(.8);
            transform:scale(.8);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:100vw;
}
}
@media screen and (min-width:768px) and (min-height:1230px){
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
@media screen and (min-width:800px) and (min-height:1100px){
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
.loongtiger-all-money{
    top:60.5vw;
}
.loongtiger-betting {
    bottom: 8vw;
    -webkit-transform:scale(.6);
            transform:scale(.6);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:134vw;
}
}
@media screen and (min-width:800px) and (min-height:1200px){
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
.loongtiger-all-money{
    top:64.5vw;
}
.loongtiger-betting {
    bottom: 13vw;
    -webkit-transform:scale(.7);
            transform:scale(.7);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:116vw;
}
}
@media screen and (min-width:800px) and (min-height:1280px){
.nnall-beting-money {
    bottom: 104vw;
}
}
/** 1024 **/
@media screen and (min-width:1024px) and (min-height:1300px){
.nnall-beting-money {
    bottom: 75vw;
}
.nn100-chipbg {
    height: 100vh;
    bottom: -21vw;
}
.betting-box {
    bottom: -5vw;
    -webkit-transform: scale(.7);
            transform: scale(.7);
}
.loongtiger-open-list {
    top: 58vw;
}
.loongtiger-all-money{
    top:42.5vw;
}
.loongtiger-betting {
    bottom: 5vw;
    -webkit-transform:scale(.5);
            transform:scale(.5);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:160vw;
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
@media screen and (min-width:1024px) and (min-height:1350px){
.loongtiger-all-money{
    top:42.5vw;
}
.loongtiger-betting {
    bottom: 7vw;
    -webkit-transform:scale(.5);
            transform:scale(.5);
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
@media screen and (min-width:1024px) and (min-height:1400px){
.nnall-beting-money {
    bottom: 79vw;
}
.betting-box {
    bottom: -3vw;
    -webkit-transform: scale(.8);
            transform: scale(.8);
}
.loongtiger-betting {
    bottom: 10vw;
    -webkit-transform:scale(.6);
            transform:scale(.6);
}
.loongtiger-betting .loongtiger-first,
  .loongtiger-betting .loongtiger-second,
  .loongtiger-betting > div .loongtiger-betting-he{
    width:134vw;
}
.chess-redblackwar-start .redblackwar-betting {
    top: 62vw;
    bottom: inherit;
    height: 42vw;
}
}
/** 兼容处理结束 **/
/** 适配不同屏幕显示 **/
/** 兼容处理开始 **/
/** 320宽 **/
/** 适配不同屏幕显示 **/
/** 兼容处理开始 **/
/** 320宽 **/
@media screen and (min-width:320px) and (min-height:480px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.84);
            transform: scale(0.84);
    bottom: 0vw;
}
}
@media screen and (min-width:320px) and (min-height:500px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.88);
            transform: scale(0.88);
    bottom: 1vw;
}
}
@media screen and (min-width:320px) and (min-height:530px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(.93);
            transform: scale(.93);
    bottom: 4vw;
}
}
@media screen and (min-width:320px) and (min-height:560px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 8vw;
}
}
@media screen and (min-width:320px) and (min-height:568px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:320px) and (min-height:580px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
/** 360宽 **/
@media screen and (min-width:360px) and (min-height:480px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.73);
            transform: scale(0.73);
    bottom: -5vw;
}
}
@media screen and (min-width:360px) and (min-height:500px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.77);
            transform: scale(0.77);
    bottom: -4vw;
}
}
@media screen and (min-width:360px) and (min-height:530px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 1vw;
}
}
@media screen and (min-width:360px) and (min-height:550px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.82);
            transform: scale(0.82);
    bottom: 4vw;
}
}
@media screen and (min-width:360px) and (min-height:580px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.88);
            transform: scale(0.88);
    bottom: 8vw;
}
}
@media screen and (min-width:360px) and (min-height:600px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 10vw;
}
}
@media screen and (min-width:360px) and (min-height:620px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 12vw;
}
}
@media screen and (min-width:360px) and (min-height:650px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
/** 375宽 **/
@media screen and (min-width:375px) and (min-height:480px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -7vw;
}
}
@media screen and (min-width:375px) and (min-height:490px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -6vw;
}
}
@media screen and (min-width:375px) and (min-height:520px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.73);
            transform: scale(0.73);
    bottom: 0vw;
}
}
@media screen and (min-width:375px) and (min-height:550px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 3vw;
}
}
@media screen and (min-width:375px) and (min-height:570px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.82);
            transform: scale(0.82);
    bottom: 5vw;
}
}
@media screen and (min-width:375px) and (min-height:590px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.88);
            transform: scale(0.88);
    bottom: 6vw;
}
}
@media screen and (min-width:375px) and (min-height:600px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.88);
            transform: scale(0.88);
    bottom: 8vw;
}
}
@media screen and (min-width:375px) and (min-height:620px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 10vw;
}
}
@media screen and (min-width:375px) and (min-height:650px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 12vw;
}
}
@media screen and (min-width:375px) and (min-height:660px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:375px) and (min-height:667px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:375px) and (min-height:670px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
/* 393宽 */
@media screen and (min-width:393px) and (min-height:500px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -9vw;
}
}
@media screen and (min-width:393px) and (min-height:520px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.72);
            transform: scale(0.72);
    bottom: -6vw;
}
}
@media screen and (min-width:393px) and (min-height:540px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    bottom: -4vw;
}
}
@media screen and (min-width:393px) and (min-height:560px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.77);
            transform: scale(0.77);
    bottom: -1vw;
}
}
@media screen and (min-width:393px) and (min-height:580px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 2vw;
}
}
@media screen and (min-width:393px) and (min-height:590px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 2vw;
}
}
@media screen and (min-width:393px) and (min-height:600px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 3vw;
}
}
@media screen and (min-width:393px) and (min-height:620px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 3vw;
}
}
@media screen and (min-width:393px) and (min-height:640px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 7vw;
}
}
@media screen and (min-width:393px) and (min-height:660px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 8vw;
}
}
@media screen and (min-width:393px) and (min-height:670px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 11vw;
}
}
@media screen and (min-width:393px) and (min-height:680px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 11vw;
}
}
@media screen and (min-width:393px) and (min-height:690px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 11vw;
}
}
@media screen and (min-width:393px) and (min-height:700px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:393px) and (min-height:720px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:393px) and (min-height:720px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:393px) and (min-height:750px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
/** 411宽 **/
@media screen and (min-width:411px) and (min-height:520px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -7vw;
}
}
@media screen and (min-width:411px) and (min-height:540px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -3vw;
}
}
@media screen and (min-width:411px) and (min-height:560px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    bottom: 0vw;
}
}
@media screen and (min-width:411px) and (min-height:580px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.77);
            transform: scale(0.77);
    bottom: 0vw;
}
}
@media screen and (min-width:411px) and (min-height:600px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 3vw;
}
}
@media screen and (min-width:411px) and (min-height:630px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 7vw;
}
}
@media screen and (min-width:411px) and (min-height:650px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 9vw;
}
}
@media screen and (min-width:411px) and (min-height:680px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.93);
            transform: scale(0.93);
    bottom: 11vw;
}
}
@media screen and (min-width:411px) and (min-height:700px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 12vw;
}
}
@media screen and (min-width:411px) and (min-height:720px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:411px) and (min-height:740px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
/** 600 **/
@media screen and (min-width:600px) and (min-height:800px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -2vw;
}
}
@media screen and (min-width:600px) and (min-height:830px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -2vw;
}
}
@media screen and (min-width:600px) and (min-height:850px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    bottom: 0vw;
}
}
@media screen and (min-width:600px) and (min-height:870px){
.baccarat-container .table-content-bg{
    ttransform: scale(0.77);
    bottom: 0vw;
}
}
@media screen and (min-width:600px) and (min-height:890px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 3vw;
}
}
@media screen and (min-width:600px) and (min-height:900px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 7vw;
}
}
@media screen and (min-width:600px) and (min-height:930px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 9vw;
}
}
@media screen and (min-width:600px) and (min-height:950px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.93);
            transform: scale(0.93);
    bottom: 11vw;
}
}
@media screen and (min-width:600px) and (min-height:980px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 12vw;
}
}
@media screen and (min-width:600px) and (min-height:1020px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:600px) and (min-height:1050px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
@media screen and (min-width:600px) and (min-height:1090px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
}
/** 768 **/
@media screen and (min-width:768px) and (min-height:980px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -7vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1030px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -3vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1080px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    bottom: 0vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1150px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.77);
            transform: scale(0.77);
    bottom: 0vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1180px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 3vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1250px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 7vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1280px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 7vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1300px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 9vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1350px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.93);
            transform: scale(0.93);
    bottom: 11vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
@media screen and (min-width:768px) and (min-height:1400px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.05) !important;
            transform: scale(1.05) !important;
}
}
/** 800 **/
@media screen and (min-width:800px) and (min-height:1000px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -7vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1050px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -3vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1100px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    bottom: 0vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1150px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.77);
            transform: scale(0.77);
    bottom: 0vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1200px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 3vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1250px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 7vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1300px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 9vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1350px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.93);
            transform: scale(0.93);
    bottom: 11vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1400px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 12vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
@media screen and (min-width:800px) and (min-height:1450px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.09) !important;
            transform: scale(1.09) !important;
}
}
/** 1024 */
@media screen and (min-width:1024px) and (min-height:1300px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -2vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1350px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    bottom: -2vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1400px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.75);
            transform: scale(0.75);
    bottom: 0vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1450px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.77);
            transform: scale(0.77);
    bottom: 0vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1500px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    bottom: 3vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1550px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    bottom: 7vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1600px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    bottom: 9vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1650px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.93);
            transform: scale(0.93);
    bottom: 11vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1700px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    bottom: 12vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1750px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1800px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
@media screen and (min-width:1024px) and (min-height:1850px){
.baccarat-container .table-content-bg{
    -webkit-transform: scale(1);
            transform: scale(1);
    bottom: 13vw;
}
#baccaratTx .dealer {
    -webkit-transform: scale(1.4) !important;
            transform: scale(1.4) !important;
}
}
.opacity-ele2 {
  z-index: 21 !important;
}
.baccarat-poker-start {
  position: absolute;
  height: .5rem;
  width: .5rem;
  bottom: 2rem;
  left: .5rem;
}
/* win动画样式 */
#winPosBox {
  position: fixed;
  z-index: 99;
  left:-50vw;
  top:-50vw;
}
#winPosBox .baccarat-win {
  position: fixed;
  z-index: 99;
  width: 4rem;
  height: auto;
}
.area-poker-win {
  position: absolute;
  width: 50%;
  height: 0.04651rem;
  left: 1rem;
  /* background: red; */
}
/* 骨骼动画 */
/* 人物 */
#dealer .dealer {
  /* width: 30vw;
  height: 40vw;
  top: -27.5vw;
  left: 36vw; */
  width: 60vw;
  height: 80vw;
  top: -46.7vw;
  left: 20vw;
  -webkit-transform: scale(0.5);
          transform: scale(0.5);
}
/* 场景 */
#baccaratTx .dealer {
  width: 140vw;
  height: 32vw;
  top: -2vw;
  z-index: 1;
  -webkit-transform: scale(0.75);
          transform: scale(0.75);
}
 #app.is-app {
        height: 100vh !important;
      }
      .slide-right-enter-active,
      .slide-left-enter-active,
      .slide-right-leave-active,
      .slide-left-leave-active {
        height: 100%;
        will-change: transform;
        -webkit-transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.58, 1);
        transition: -webkit-transform 300ms cubic-bezier(0, 0, 0.58, 1);
        transition: transform 300ms cubic-bezier(0, 0, 0.58, 1);
        transition: transform 300ms cubic-bezier(0, 0, 0.58, 1),
          -webkit-transform 300ms cubic-bezier(0, 0, 0.58, 1);
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
        position: absolute;
        top: 0;
        overflow: hidden;
      }
      .slide-right-enter-active .app-footer,
      .slide-left-enter-active .app-footer,
      .slide-right-leave-active .app-footer,
      .slide-left-leave-active .app-footer {
        position: absolute !important;
      }
      .slide-right-enter-active .van-tabs__wrap,
      .slide-right-enter-active .bg-thead,
      .slide-right-enter-active .van-tall-list,
      .slide-left-enter-active .van-tabs__wrap,
      .slide-left-enter-active .bg-thead,
      .slide-left-enter-active .van-tall-list,
      .slide-right-leave-active .van-tabs__wrap,
      .slide-right-leave-active .bg-thead,
      .slide-right-leave-active .van-tall-list,
      .slide-left-leave-active .van-tabs__wrap,
      .slide-left-leave-active .bg-thead,
      .slide-left-leave-active .van-tall-list {
        position: absolute !important;
        top: 0 !important;
      }
      .slide-right-enter {
        -webkit-transform: translate3d(-20%, 0, 0);
        transform: translate3d(-20%, 0, 0);
      }
      .slide-right-enter-to {
        overflow: hidden;
      }
      .slide-right-leave-active {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        background: #efeef4;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        -webkit-box-shadow: -0.04651rem 0 0.27907rem rgba(0, 0, 0, 0.2);
        box-shadow: -0.04651rem 0 0.27907rem rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }
      .slide-left-enter-active {
        -webkit-box-shadow: -0.04651rem 0 0.27907rem rgba(0, 0, 0, 0.2);
        box-shadow: -0.04651rem 0 0.27907rem rgba(0, 0, 0, 0.2);
        background: #efeef4;
        /*z-index: 101;*/
      }
      .slide-left-enter {
        -webkit-transform: translate3d(100%, 0, 0) !important;
        transform: translate3d(100%, 0, 0) !important;
        background: #efeef4;
        z-index: 1000;
        -webkit-box-shadow: -0.04651rem 0 0.09302rem rgba(0, 0, 0, 0.2);
        box-shadow: -0.04651rem 0 0.09302rem rgba(0, 0, 0, 0.2);
      }
      .slide-left-leave-active {
        -webkit-transform: translate3d(-20%, 0, 0) !important;
        transform: translate3d(-20%, 0, 0) !important;
      }
      .fade-enter-active,
      .fade-leave-active {
        -webkit-transition: opacity 0s ease;
        transition: opacity 0s ease;
      }
      .fade-enter, .fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
      }
      .slide-enter-active,
      .slide-leave-active {
        will-change: transform;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: -webkit-transform 0.3s 300ms
          cubic-bezier(0, 0, 0.58, 1);
        transition: -webkit-transform 0.3s 300ms cubic-bezier(0, 0, 0.58, 1);
        transition: transform 0.3s 300ms cubic-bezier(0, 0, 0.58, 1);
        transition: transform 0.3s 300ms cubic-bezier(0, 0, 0.58, 1),
          -webkit-transform 0.3s 300ms cubic-bezier(0, 0, 0.58, 1);
      }
      .slide-enter, .slide-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
      .message-popup {
        top: 0.46512rem;
        padding: 0;
        border-radius: 0.27907rem;
        width: 14.88372rem;
        background: hsla(0, 0%, 100%, 0.9) border-box;
        -webkit-box-shadow: 0 0 0 0.04651rem hsla(0, 0%, 100%, 0.3) inset,
          0 0.2em 0.1em rgba(250, 250, 250, 0.3);
        box-shadow: 0 0 0 0.04651rem hsla(0, 0%, 100%, 0.3) inset,
          0 0.2em 0.1em rgba(250, 250, 250, 0.3);
        text-shadow: 0 0.04651rem 0.04651rem hsla(0, 0%, 100%, 0.3);
      }
      .message-popup:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: -1.39535rem;
        z-index: -1;
        -webkit-filter: blur(0.93023rem);
        filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
        filter: blur(0.93023rem);
      }
      .message-popup span {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 2rem;
        width: 100%;
        font-size: 0.65116rem;
      }
      .share-edit-btn {
        color: #47bafe;
        margin-left: 0.5em;
        cursor: pointer;
      }
      .openSwitch .van-cell__value {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .suspension {
        width: 2rem;
        height: 2rem;
        background: #aaaaaa;
        border-radius: 50%;
        position: fixed;
        top: 10rem;
        right: 0;
        z-index: 2002;
      }
    
    
      @charset "utf-8";
      :root {
        /* 主色调 */ /*成功色*/ /*警告色*/ /* 危险色 */ /*信息色*/ /*快3大背景*/ /*快3开奖时间背景*/ /*快3字体色*/ /*快3按钮背景色和清空色*/ /*快3按钮亮黄色*/ /*快3按钮字体色*/ /*六合彩背景色*/

        /* 融合色 */

        /* 背景色(可与主色一致) */
        /* 大于768下基础字体*/
        /* 小于768下基础字体*/
        /* 基础字体大小,行高，宽度，字体颜色,字体链接色，链接背景颜色  */

        /*************** 背景 ************************/
        /*图片地址*/
        /* 背景色 simple configuration */

        /* 背景图片 simple configuration */

        /* 背景图片展示方式 */

        /* 背景图片对齐方式 */

        /***************end 背景 ************************/

        /***************top-banner图片 ************************/ /*PC版的头部banner背景*/ /*PC版的头部banner*/ /*手机版的头部banner*/ /*PAD版的头部banner*/
        /***************END top-banner图片 ************************/
        /***************logo图片 ************************/
        /***************END logo图片 ********************/

        /*****************************/
        /*****************************/

        /* 模块外框头部背景颜色*/
        /* 面板背景颜色*/

        /*通用内边距 */
        /*通用外边距 */
      }
      .app-footer {
        background: #22292c !important;
        height: auto !important;
        z-index: 100 !important;
      }
      .app-footer .van-tabbar-item {
        color: #bbb;
        height: 2.5em;
        font-size: inherit;
      }
      .app-footer .van-tabbar-item--active {
        color: #dc3b40;
      }
      .app-footer .van-tabbar-item--active .van-icon-home:before {
        content: "\E62A" !important;
      }
      .app-footer .van-tabbar-item--active .van-icon-live:before {
        content: "\E665" !important;
      }
      .app-footer .van-tabbar-item--active .van-icon-gift:before {
        content: "\E62E" !important;
      }
      .app-footer .van-tabbar-item--active .van-icon-compass:before {
        content: "\E628" !important;
      }
      .app-footer .van-tabbar-item--active .van-icon-user1:before {
        content: "\E62C" !important;
      }
      .app-footer .van-icon {
        display: block;
        font-size: 1.35em;
        line-height: 1.1em;
        height: 1.1em;
        font-weight: 100;
      }
      .app-footer .van-tabbar-item__icon {
        margin-bottom: 0.18605rem;
      }
      .app-footer .van-tabbar-item__text {
        margin-bottom: 0.18605rem;
        font-size: 0.6em;
      }
      .teb-footer .van-hairline--top-bottom::after {
        border-width: 0 !important;
      }
    
    
      @charset "utf-8";
      :root {
        /* 主色调 */ /*成功色*/ /*警告色*/ /* 危险色 */ /*信息色*/ /*快3大背景*/ /*快3开奖时间背景*/ /*快3字体色*/ /*快3按钮背景色和清空色*/ /*快3按钮亮黄色*/ /*快3按钮字体色*/ /*六合彩背景色*/

        /* 融合色 */

        /* 背景色(可与主色一致) */
        /* 大于768下基础字体*/
        /* 小于768下基础字体*/
        /* 基础字体大小,行高，宽度，字体颜色,字体链接色，链接背景颜色  */

        /*************** 背景 ************************/
        /*图片地址*/
        /* 背景色 simple configuration */

        /* 背景图片 simple configuration */

        /* 背景图片展示方式 */

        /* 背景图片对齐方式 */

        /***************end 背景 ************************/

        /***************top-banner图片 ************************/ /*PC版的头部banner背景*/ /*PC版的头部banner*/ /*手机版的头部banner*/ /*PAD版的头部banner*/
        /***************END top-banner图片 ************************/
        /***************logo图片 ************************/
        /***************END logo图片 ********************/

        /*****************************/
        /*****************************/

        /* 模块外框头部背景颜色*/
        /* 面板背景颜色*/

        /*通用内边距 */
        /*通用外边距 */
      }
      .share-popup {
        background: #eee !important;
      }
      .share-edit-title {
        font-size: 0.7em;
        text-align: center;
        padding: 0.5em 0.8em;
        border-bottom: 0.04651rem solid #ddd;
        background: #fff;
      }
      .share-edit-list {
        position: relative;
        overflow: scroll;
        height: 15em;
      }
      .share-edit-list ul {
        margin: 0 0.5em;
      }
      .share-edit-list ul li {
        background: #fff;
        margin-top: 0.5em;
        position: relative;
        border-radius: 0.2em;
      }
      .share-edit-info {
        font-size: 0.7em;
        padding: 0.3em 0.8em;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .share-multip-select {
        /* position: absolute; */
        left: 0;
        bottom: 100%;
        /* background: #f8f8f8; */
        width: 100%;
        height: 100%;
        z-index: 2;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.4em;
      }
      .share-multip-select .van-share-stepper {
        position: relative;
        font-size: inherit;
        margin-left: 1.8em;
      }
      .share-multip-select .van-share-stepper:before {
        content: "\500D";
        position: absolute;
        right: -1.2em;
        color: #989898;
        top: 0.4em;
        font-size: 0.7em;
      }
      .share-multip-select .van-share-stepper:after {
        content: "\6BCF\6CE8";
        position: absolute;
        left: -2.2em;
        color: #989898;
        top: 0.4em;
        font-size: 0.7em;
      }
      .share-multip-select .van-share-money {
        position: relative;
        font-size: inherit;
        margin-left: 1.8em;
      }
      .share-multip-select .van-share-money:before {
        content: "\5143";
        position: absolute;
        right: -1.2em;
        color: #989898;
        top: 0.4em;
        font-size: 0.7em;
      }
      .share-multip-select .van-share-money:after {
        content: "\6BCF\6CE8";
        position: absolute;
        left: -2.2em;
        color: #989898;
        top: 0.4em;
        font-size: 0.7em;
      }
      .unit-share {
        border: 0.04651rem solid #d2d2d2;
        border-radius: 0.15em;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .unit-share a {
        font-size: 0.7em;
        height: 2em;
        line-height: 2em;
        width: 2.25em;
        text-align: center;
        display: inline-block;
        border-right: 0.04651rem solid #d2d2d2;
      }
      .unit-share a:last-child {
        border-right: none;
      }
      .unit-share a.active {
        background: #dc3b40;
        border-right-color: #dc3b40;
        color: #fff;
      }
      .share-close {
        float: right;
      }
      .share-close:before {
        content: "\E61B";
      }
    
    
      @charset "utf-8";
      :root {
        /* 主色调 */ /*成功色*/ /*警告色*/ /* 危险色 */ /*信息色*/ /*快3大背景*/ /*快3开奖时间背景*/ /*快3字体色*/ /*快3按钮背景色和清空色*/ /*快3按钮亮黄色*/ /*快3按钮字体色*/ /*六合彩背景色*/

        /* 融合色 */

        /* 背景色(可与主色一致) */
        /* 大于768下基础字体*/
        /* 小于768下基础字体*/
        /* 基础字体大小,行高，宽度，字体颜色,字体链接色，链接背景颜色  */

        /*************** 背景 ************************/
        /*图片地址*/
        /* 背景色 simple configuration */

        /* 背景图片 simple configuration */

        /* 背景图片展示方式 */

        /* 背景图片对齐方式 */

        /***************end 背景 ************************/

        /***************top-banner图片 ************************/ /*PC版的头部banner背景*/ /*PC版的头部banner*/ /*手机版的头部banner*/ /*PAD版的头部banner*/
        /***************END top-banner图片 ************************/
        /***************logo图片 ************************/
        /***************END logo图片 ********************/

        /*****************************/
        /*****************************/

        /* 模块外框头部背景颜色*/
        /* 面板背景颜色*/

        /*通用内边距 */
        /*通用外边距 */
      }
      .postbet-dialog {
        border-radius: 0.46512rem;
        width: 72%;
        font-size: 0.65116rem;
      }
      .postbet-dialog .van-dialog__header {
        padding: 0.7rem 0 0.1rem 0 !important;
      }
      .postbet-dialog .van-dialog__message--has-title {
        padding-top: 0.55814rem;
        color: #000;
      }
      .postbet-dialog .van-button {
        height: 2rem;
        border: 0;
        font-size: 0.7rem;
      }
      .postbet-dialog .postbetinput {
        margin: 0;
        padding: 0;
        font-size: inherit;
      }
      .postbet-dialog .postbetinput .van-cell__title {
        max-width: 3.2rem !important;
        color: #000;
      }
      .postbet-dialog .postbetinput input {
        border: 0.04651rem solid #eee;
        padding: 0 0.23256rem;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-appearance: none;
      }
      .postbet-dialog .postbetstr span {
        display: inline-block;
      }
      .postbet-dialog .postbet-line {
        position: relative; /* margin-top:5px; */
        padding-top: 0.18605rem; /* border-top:1px solid #eee; */
      }
      .postbet-dialog .postbet-line .postbet-all {
        font-size: 0.7em;
        color: #dc3b40;
        margin-top: 0.23256rem;
      }
    
    
      .PlanLotteryRecord[data-v-5235f463] {
        position: relative;
        z-index: 30000;
      }
      .van-popup[data-v-5235f463] {
        background: #efeef4;
      }
      .room-info[data-v-5235f463] {
        width: 100%;
        height: 100%;
      }
      .pt20[data-v-5235f463] {
        padding-top: 1.98rem;
      }
      .mt20[data-v-5235f463] {
        margin-top: 1.98rem;
        margin-bottom: 2rem;
      }
      .envelop-body[data-v-5235f463] {
        height: 100%;
        position: relative;
      }
      .envelop-body .user-center[data-v-5235f463] {
        text-align: center;
        padding: 1.2rem 0;
        background: #f3f3f3;
      }
      .user-center .user-img[data-v-5235f463] {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .user-center .user-img img[data-v-5235f463] {
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
      }
      .user-center .user-name[data-v-5235f463] {
        font-size: 0.7em;
        margin-top: 0.4rem;
      }
      .user-center .user-name span[data-v-5235f463] {
        margin-left: 0.1rem;
      }
      .user-center .user-summoney[data-v-5235f463] {
        font-size: 1.7em;
        margin-top: 0.2rem;
        font-weight: bold;
        color: #333333;
      }
      .user-center .user-summoney span[data-v-5235f463] {
        font-size: 0.2em;
        margin-left: 0.2rem;
      }
      .my-redlist[data-v-5235f463] {
        padding: 0 0.5em;
        background: #fff;
      }
      .my-redlist ul li[data-v-5235f463] {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-bottom: 0.04651rem solid #efeef4;
        padding: 0.3rem 0;
      }
      .my-redlist .list-item-left[data-v-5235f463] {
        -webkit-box-flex: 8;
        -ms-flex: 8;
        flex: 8;
      }
      .my-redlist .list-item-right[data-v-5235f463] {
        -webkit-box-flex: 4;
        -ms-flex: 4;
        flex: 4;
        /*display: flex;*/
        /*justify-content: flex-end;*/
        font-size: 0.7rem;
        text-align: right;
      }
      .my-redlist .list-item-left .left-information[data-v-5235f463] {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .my-redlist .list-item-left .left-type[data-v-5235f463] {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 0.8rem;
        height: 0.8rem;
        background: #febb2a;
        font-size: 0.4rem;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: 0.25rem;
        color: #fff;
        border-radius: 2px;
      }
      .my-redlist .list-item-left .left-name[data-v-5235f463] {
        font-size: 0.65rem;
      }
      .my-redlist .list-item-left .left-datetime[data-v-5235f463] {
        font-size: 0.6rem;
        color: #999;
      }
      .my-redlist .list-item-right .left-datetime[data-v-5235f463] {
        font-size: 0.6rem;
        color: #999;
      }
      .Onlineheader[data-v-5235f463] {
        width: 100%;
        position: fixed;
        z-index: 3000;
        top: 0;
        height: 2rem;
      }
      /*.finished {*/
      /*padding-bottom: 2rem;*/
      /*}*/
      /*.is-null {*/
      /*padding-bottom: 2rem;*/
      /*}*/
    
    
      .planlotteryrecord .media-object-section {
        width: 80% !important;
      }
      .planlotteryrecord .color-black {
        font-size: 0.50465rem !important;
        color: #000;
      }
      .planlotteryrecord em.color-grap {
        color: #999 !important;
        font-style: normal;
        word-break: break-all;
      }
      .index-chess {
        background-color: white;
        height: 100%;
        width: 100%;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
    
    
    
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
        background: url("https://images.imags-google.com/game/nnicon.png?1")
          no-repeat;
        background-size: 100vw auto;
      }
      /** 龙虎精灵图 **/
      .game-loongTiger-img {
        background: url(https://images.imags-google.com/game/loongTiger.png)
          no-repeat;
        background-size: 100vw auto;
      }
      .game-chess-card {
        background: url(https://images.imags-google.com/game/puke.png) no-repeat;
        background-size: 100vw auto;
      }
      .game-ranking-img {
        background: url(https://images.imags-google.com/game/popupList.png)
          no-repeat;
        background-size: 100vw auto;
      }
      /** 筹码 **/
      .game-chip-img {
        background: url(https://images.imags-google.com/game/chipIcon.png)
          no-repeat;
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
        background: url(https://images.imags-google.com/game/benzBMW-bg.jpg)
          center bottom repeat-y;
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
        background: url(https://images.imags-google.com/game/sicbo-girl.png)
          no-repeat;
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
      .chess-head
        .chess-head-list
        .chess-head-middle
        .head-middle-img
        .left-icon {
        float: left;
        width: 9.5vw;
        height: 6.3vw;
        line-height: 6.5vw;
        font-size: 4vw;
        margin-top: 1.5vw;
        text-align: center;
        display: inline-block;
      }
      .chess-head
        .chess-head-list
        .chess-head-middle
        .head-middle-img
        .number-box {
        font-size: 3vw;
        width: 14vw;
        display: table-cell;
        vertical-align: middle;
      }
      .chess-head
        .chess-head-list
        .chess-head-middle
        .head-middle-img
        .right-icon {
        float: right;
        display: inline-block;
        margin-right: 0;
        width: 5vw;
        height: 6vw;
      }
      .chess-head
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
      .chess-foot
        .game-foot-btn
        .game-foot-middle
        .game-foot-money
        .foot-money-icon {
        left: 0.1vw;
        top: 0;
        width: 8vw;
        height: 8vw;
        background-position: 27% 8.2%;
      }
      .chess-foot
        .game-foot-btn
        .game-foot-middle
        .game-foot-money
        .foot-add-btn {
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
      .chess-foot
        .foot-slide-chip
        .foot-chip-longtiger-bg
        .foot-chip-bgli
        span {
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
        background: #48100f
          url(https://images.imags-google.com/game/nn100bg.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.red-black-war {
        overflow: hidden;
        background: #bd7b4b
          url(https://images.imags-google.com/game/redBlackWar.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.loong-Tiger-body {
        overflow: hidden;
        background: url(https://images.imags-google.com/game/loongTigerBg.jpg)
          top center no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.benzbmw-body {
        overflow: hidden;
        background: url(https://images.imags-google.com/game/benzBMW.jpg) top
          center no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.sicbo-body {
        background: #0b0014
          url(https://images.imags-google.com/game/sicbo-bg.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      /**百人牛牛 样式 */
      .nn100-chipbg {
        position: fixed;
        z-index: 0;
        background: url(https://images.imags-google.com/game/nn100bg2.png)
          bottom center no-repeat;
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
      .chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em {
        position: absolute;
        left: 0;
        top: 0;
        width: 11vw;
        height: 15vw;
        background-position: 84.3% 98%;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-0 {
        left: 0;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-1 {
        left: 3vw;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-2 {
        left: 6vw;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-3 {
        left: 9vw;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-4 {
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
        background: url(https://images.imags-google.com/game/nnicon.png?1)
          no-repeat;
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
        background: url(https://images.imags-google.com/game/redblackbg.png)
          bottom center no-repeat;
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
      .chess-redblackwar-start
        .redblackwar-chess-card
        .redblackwar-card
        > div
        > em {
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
      .chess-redblackwar-start
        .redblackwar-open-number
        > div.redblackwar-open-left {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        /*width: 56vw!important;*/
      }
      .chess-redblackwar-start
        .redblackwar-open-number
        .redblackwar-open-trend-btn {
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
      .chess-redblackwar-start
        .redblackwar-open-number
        .redblackwar-open-dot
        > em {
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
      .chess-redblackwar-start
        .redblackwar-open-number
        .redblackwar-open-square {
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
      .chess-redblackwar-start
        .redblackwar-betting
        > div
        > div.redblackwar-hit {
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
      .loongtiger-open-list
        > .loongtiger-opennumber
        > em
        .loongtiger-light.l-loong {
        background-position: 79.9% 9.4%;
      }
      .loongtiger-open-list
        > .loongtiger-opennumber
        > em
        .loongtiger-light.l-tiger {
        background-position: 89.2% 9.4%;
      }
      .loongtiger-open-list
        > .loongtiger-opennumber
        > em
        .loongtiger-light.l-he {
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
      .loongtiger-betting
        > div
        .loongtiger-betting-loong
        .loongtiger-number-top {
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
      .loongtiger-betting
        > div
        .loongtiger-betting-loong
        .loongtiger-number-middle {
        color: #31447f;
      }
      .loongtiger-betting
        > div
        .loongtiger-betting-loong
        .loongtiger-number-down {
        color: #afa5d5;
        text-shadow: 0.04651rem 0.04651rem 0.04651rem #231a4d;
      }
      .loongtiger-betting > div .loongtiger-betting-tiger {
        background: url(https://images.imags-google.com/game/tigerBg.png) center
          center no-repeat;
        background-size: 50vw auto;
        /*background-position:73% 72%;*/
      }
      .loongtiger-betting
        > div
        .loongtiger-betting-tiger
        .loongtiger-number-top {
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
      .loongtiger-betting
        > div
        .loongtiger-betting-tiger
        .loongtiger-number-middle {
        color: #723e32;
      }
      .loongtiger-betting
        > div
        .loongtiger-betting-tiger
        .loongtiger-number-down {
        color: #ffd3b3;
        text-shadow: 0.04651rem 0.04651rem 0.04651rem #503313;
      }
      .loongtiger-betting > div .loongtiger-betting-he {
        width: 80vw;
        height: 33vw;
        background: url(https://images.imags-google.com/game/heBg.png) bottom
          center no-repeat;
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
      .loongtiger-betting
        > div
        .loongtiger-betting-he
        .loongtiger-number-middle {
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
      .gold-box {
        background: red !important;
      }
      .baccarat-body .baccarat-user > .game-other-user {
        top: 37vw;
      }
      /* 百家乐 start */
      .chess-all-body.baccarat-body {
        background: #0b0014
          url(https://images.imags-google.com/game/baccarat-bg.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      .baccarat-container {
        /* position: fixed; */
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        overflow: hidden;
        /* padding: 1.8rem 0 4rem 0; */
        /* background: url(https://images.imags-google.com/game/baccarat-bg.jpg) top center no-repeat;
  background-size: 100vw auto; */
        /* 走势区域 */
      }
      .baccarat-container .trend-content {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 5.3vw;
        margin: 13vw auto 0;
        padding: 0 2vw;
        width: 62vw;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.15rem;
      }
      .baccarat-container .trend-content .new {
        position: absolute;
        left: 0;
        top: 0;
        width: 3.4vw;
        height: 3.4vw;
        background: url(https://images.imags-google.com/game/baccarat-sprite.png)
          bottom left no-repeat;
        background-size: 120vw 80vw;
        background-position: 0 0;
      }
      .baccarat-container .trend-content .trend-ele {
        width: 3.7vw;
        height: 3.4vw;
        background: url(https://images.imags-google.com/game/baccarat-sprite.png)
          left top no-repeat;
        background-size: 120vw 80vw;
        position: relative;
      }
      .baccarat-container .trend-content .trend-ele.ping {
        background-position: -15.8vw 0;
      }
      .baccarat-container .trend-content .trend-ele.zuan {
        background-position: -4.6vw 0;
      }
      .baccarat-container .trend-content .trend-ele.xian {
        background-position: -10vw 0;
      }
      .baccarat-container .trend-content .trend-ele.first {
        /*margin-left: 2vw;*/
      }
      .baccarat-container .trend-content .trend-show {
        opacity: 0;
      }
      .baccarat-container .beauty-chair {
        position: absolute;
        background: url(https://images.imags-google.com/game/baccarat-sprite.png)
          top left no-repeat;
        width: 32vw;
        height: 26vw;
        left: 33vw;
        top: -20vw;
        background-size: 134vw auto;
        background-position: -33vw 0;
      }
      .baccarat-container .beauty-shadow {
        position: absolute;
        z-index: 8;
        background: url(https://images.imags-google.com/game/baccarat-sprite.png)
          top left no-repeat;
        width: 25vw;
        height: 32vw;
        left: 34vw;
        top: -22vw;
        background-size: 118vw auto;
        background-position: -60vw 0;
      }
      .baccarat-container .beauty {
        position: absolute;
        left: 47%;
        z-index: 10;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: -23vw;
        width: 25.86vw;
        height: 32vw;
        background: url(https://images.imags-google.com/game/beauty-spr6.png)
          top left no-repeat;
        background-size: 543.2vw auto;
        background-position: 0vw 0vw;
        -webkit-animation: beautyshow 3s infinite steps(21, start);
        animation: beautyshow 3s infinite steps(21, start);
      }
      .baccarat-container .table-content-bg {
        position: absolute;
        width: 100%;
        height: 120.4vw;
        left: 0;
        bottom: 13vw;
      }
      .baccarat-container .table-content {
        position: absolute;
        left: 50%;
        margin-left: -63vw;
        width: 126vw;
        height: 100%;
        background: url(https://images.imags-google.com/game/baccarat-table2.png)
          bottom left no-repeat;
        background-size: 126vw auto;
        /*perspective: 800;
    -webkit-perspective: 800;*/
      }
      .baccarat-container .table-content .bet-xian-win-bg {
        width: 38%;
        height: 48%;
        position: absolute;
        top: 31%;
        /*background: red;*/
        left: 16vw;
        background: url(https://images.imags-google.com/game/xian-win-bg.png)
          no-repeat;
        background-size: 100% 92%;
        opacity: 0;
      }
      .baccarat-container .table-content .bet-xian-win-bg.show {
        -webkit-animation: win-line-show 3.5s forwards;
        animation: win-line-show 3.5s forwards;
      }
      .baccarat-container .table-content .bet-zuan-win-bg {
        width: 38%;
        height: 48%;
        position: absolute;
        top: 31%;
        /*background: red;*/
        right: 16vw;
        background: url(https://images.imags-google.com/game/zuan-win-bg.png)
          no-repeat;
        background-size: 100% 92%;
        opacity: 0;
      }
      .baccarat-container .table-content .bet-zuan-win-bg.show {
        -webkit-animation: win-line-show 3.5s forwards;
        animation: win-line-show 3.5s forwards;
      }
      .baccarat-container .table-content {
        /** 发牌洗牌 **/
      }
      .baccarat-container .table-content .baccarat-chipleft {
        position: absolute;
        background: url(https://images.imags-google.com/game/baccarat-left.png)
          no-repeat;
        background-size: 130vw auto;
        width: 15vw;
        height: 25vw;
        /*top:-3%;
      right:64%;*/
        z-index: 20;
        top: -4%;
        right: 63.2%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
      .baccarat-container .table-content .baccarat-chipleft.stop {
        background-position: 2vw 16vw;
      }
      .baccarat-container .table-content .baccarat-chipleft.play {
        -webkit-animation: baccaratleft 1.5s forwards steps(10, start) 1;
      }
      .baccarat-container .table-content .baccarat-chipright {
        position: absolute;
        background: url(https://images.imags-google.com/game/baccarat-jack.png)
          no-repeat;
        background-size: 360vw auto;
        width: 20vw;
        height: 25vw;
        /*top:-3%;
      left:62%;*/
        top: -4.8%;
        left: 61.2%;
        z-index: 20;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }
      .baccarat-container .table-content .baccarat-chipright.stop {
        background-position: 4vw -5vw;
      }
      .baccarat-container .table-content .baccarat-chipright.play {
        -webkit-animation: baccaratright 1.5s forwards steps(15, start) 1;
      }
      .baccarat-container .table-content .baccarat-chipleft-bg {
        position: absolute;
        z-index: 19;
        width: 15vw;
        height: 15vw;
        top: 9.3vw;
        right: 80.5vw;
      }
      .baccarat-container .table-content .baccarat-chipleft-bg > div {
        width: 100%;
        height: 100%;
        background-position: 43% 59%;
      }
      .baccarat-container .table-content .baccarat-chipright-bg {
        position: absolute;
        width: 20vw;
        height: 20vw;
        top: 5.3vw;
        left: 77.5vw;
        z-index: 19;
      }
      .baccarat-container .table-content .baccarat-chipright-bg > div {
        width: 100%;
        height: 100%;
        background-position: 97% 59%;
      }
      .baccarat-container .table-content {
        /** 背景end **/
      }
      .baccarat-container .table-content .bet-money {
        position: absolute;
        left: 50%;
        top: 12%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: 0.55814rem;
        text-align: center;
        color: #96d3a4;
        text-shadow: 0.05rem 0.05rem 0.05rem #425a3f;
      }
      .baccarat-container .table-content .bet-money > span {
        color: transparent;
        background: -webkit-gradient(
          linear,
          left bottom,
          left top,
          from(#f2c457),
          to(#f8dbb6)
        );
        background: linear-gradient(to top, #f2c457, #f8dbb6);
        -webkit-background-clip: text;
        text-shadow: none;
      }
      .baccarat-container {
        /*投注区域*/
      }
      .baccarat-container .bet-content {
        width: 100%;
        height: 68vw;
        position: absolute;
        top: 23vw;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        overflow: hidden;
      }
      .baccarat-container .bet-content .txt-box {
        text-align: center;
        position: absolute;
        width: 30vw;
        height: 50vw;
        left: 0;
      }
      .baccarat-container .bet-content .txt-box .money {
        color: #649e7a;
        font-size: 0.7em;
        line-height: 4.2vw;
        height: 5vw;
      }
      .baccarat-container .bet-content .txt-box .title {
        position: relative;
        font-size: 1.5em;
        color: #2b4a34;
        margin-top: 4vw;
        text-shadow: 0.04651rem 0.04651rem 0.09302rem #75a270;
      }
      .baccarat-container .bet-content .txt-box .odds-x {
        font-size: 0.7em;
        line-height: 0.7em;
        margin: 1vw 0;
        color: #2b4a34;
        text-shadow: 0.02326rem 0.02326rem 0.02326rem #75a270;
      }
      .baccarat-container .bet-content .txt-box .odds {
        font-size: 0.7em;
        line-height: 0.7em;
        color: #2b4a34;
        text-shadow: 0.02326rem 0.02326rem 0.02326rem #75a270;
        padding: 1vw 0;
      }
      .baccarat-container .bet-content .txt-box .my-money {
        font-size: 0.7em;
        color: #44975b;
        margin-top: 3vw;
        /*-webkit-text-stroke: 1px #1f4c1d;*/
      }
      .baccarat-container .bet-content .txt-box-xian {
        left: 0.5vw;
      }
      .baccarat-container .bet-content .txt-box-xian .money {
        margin-bottom: 14vw;
        line-height: 5vw;
      }
      .baccarat-container .bet-content .txt-box-zuan {
        left: 12vw;
      }
      .baccarat-container .bet-content .txt-box-zuan .money {
        margin-bottom: 14vw;
        line-height: 5vw;
      }
      .baccarat-container .bet-content .txt-box-ping {
        width: 100%;
        height: 100%;
      }
      .baccarat-container .bet-content .txt-box-ping .money {
        margin-top: 1vw;
        line-height: 4vw;
      }
      .baccarat-container .bet-content .bet-box-ping {
        position: relative;
        z-index: 9;
        width: 42vw;
        height: 44vw;
        left: 42vw;
        top: 0;
        /*background: rgba(0,0,0,.5);*/
      }
      .baccarat-container .bet-content .bet-box-ping .chip-box3 {
        position: absolute;
        width: 65%;
        height: 52%;
        left: 7vw;
        top: 8vw;
        border-radius: 1rem;
        /*background: red;*/
      }
      .baccarat-container .bet-content .bet-box-ping .ping-win-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(https://images.imags-google.com/game/baccarat-sprite.png)
          0 0 no-repeat;
        background-size: 124vw 80vw;
        background-position: -80vw -37vw;
        opacity: 0;
      }
      .baccarat-container .bet-content .bet-box-ping .ping-win-bg.show {
        -webkit-animation: win-line-show 3.5s forwards;
        animation: win-line-show 3.5s forwards;
      }
      .baccarat-container .bet-content .bet-box-ping .ping-box {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 18.5rem 12.5rem;
        background-position: 0.1rem -6.6rem;
        z-index: 1;
        border-radius: 1rem;
      }
      .baccarat-container .bet-content .bet-box {
        position: absolute;
        z-index: 8;
        bottom: 1vw;
        left: 20vw;
        width: 85vw;
        height: 52vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 0 0 2rem 2rem;
        /*overflow: hidden;*/
      }
      .baccarat-container .bet-content .bet-ele {
        position: relative;
        width: 50%;
        height: 100%;
        /*background: rgba(0, 0, 0, .3);*/
      }
      .baccarat-container .bet-content .bet-ele .chip-box1 {
        position: absolute;
        width: 20vw;
        height: 29vw;
        left: 3vw;
        border-radius: 2rem;
        /*background: red;*/
        top: 10vw;
      }
      .baccarat-container .bet-content .bet-ele .chip-box2 {
        position: absolute;
        width: 20vw;
        height: 29vw;
        border-radius: 2rem;
        /*background: red;*/
        top: 10vw;
        right: 2vw;
      }
      /* @keyframes beautyshow{
  0%{background-position: 194Px 0;}
  100%{background-position: -3880Px 0;}
} */
      @-webkit-keyframes beautyshow {
        0% {
          background-position: 25.86vw 0;
        }
        100% {
          background-position: -517.34vw 0;
        }
      }
      @keyframes beautyshow {
        0% {
          background-position: 25.86vw 0;
        }
        100% {
          background-position: -517.34vw 0;
        }
      }
      @-webkit-keyframes baccaratleft {
        0% {
          background-position: 2vw 16vw;
        }
        100% {
          background-position: -117vw 16vw;
        }
      }
      @keyframes baccaratleft {
        0% {
          background-position: 2vw 16vw;
        }
        100% {
          background-position: -117vw 16vw;
        }
      }
      @-webkit-keyframes baccaratright {
        0% {
          background-position: 4vw -5vw;
        }
        100% {
          background-position: -333vw -5vw;
        }
      }
      @keyframes baccaratright {
        0% {
          background-position: 4vw -5vw;
        }
        100% {
          background-position: -333vw -5vw;
        }
      }
      @-webkit-keyframes win-line-show {
        0% {
          opacity: 1;
        }
        20% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        60% {
          opacity: 0;
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes win-line-show {
        0% {
          opacity: 1;
        }
        20% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        60% {
          opacity: 0;
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      /* 百家乐 end */
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
        .loongtiger-betting
          > div
          .loongtiger-betting-tiger
          .loongtiger-number-top {
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
      /** 适配不同屏幕显示 **/
      /** 兼容处理开始 **/
      /** 320宽 **/
      /** 适配不同屏幕显示 **/
      /** 兼容处理开始 **/
      /** 320宽 **/
      @media screen and (min-width: 320px) and (min-height: 480px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.84);
          transform: scale(0.84);
          bottom: 0vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 500px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: 1vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 530px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: 4vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 560px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 8vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 568px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 580px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      /** 360宽 **/
      @media screen and (min-width: 360px) and (min-height: 480px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.73);
          transform: scale(0.73);
          bottom: -5vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 500px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.77);
          transform: scale(0.77);
          bottom: -4vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 530px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 1vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 550px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.82);
          transform: scale(0.82);
          bottom: 4vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 580px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: 8vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 600px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 10vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 620px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 12vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 650px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      /** 375宽 **/
      @media screen and (min-width: 375px) and (min-height: 480px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -7vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 490px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 520px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.73);
          transform: scale(0.73);
          bottom: 0vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 550px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 3vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 570px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.82);
          transform: scale(0.82);
          bottom: 5vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 590px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: 6vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 600px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: 8vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 620px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 10vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 650px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 12vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 660px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 667px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 670px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      /* 393宽 */
      @media screen and (min-width: 393px) and (min-height: 500px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -9vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 520px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.72);
          transform: scale(0.72);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 540px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: -4vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 560px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.77);
          transform: scale(0.77);
          bottom: -1vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 580px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 2vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 590px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 2vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 600px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 3vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 620px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 3vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 640px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 7vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 660px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 8vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 670px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 11vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 680px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 11vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 690px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 11vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 700px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 720px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 720px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 750px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      /** 411宽 **/
      @media screen and (min-width: 411px) and (min-height: 520px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -7vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 540px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 560px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: 0vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 580px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.77);
          transform: scale(0.77);
          bottom: 0vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 600px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 3vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 630px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 7vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 650px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 9vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 680px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: 11vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 700px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 12vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 720px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 740px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      /** 600 **/
      @media screen and (min-width: 600px) and (min-height: 800px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 830px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 850px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: 0vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 870px) {
        .baccarat-container .table-content-bg {
          ttransform: scale(0.77);
          bottom: 0vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 890px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 3vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 900px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 7vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 930px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 9vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 950px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: 11vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 980px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 12vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 1020px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 1050px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 1090px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
      }
      /** 768 **/
      @media screen and (min-width: 768px) and (min-height: 980px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -7vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1030px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -3vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1080px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: 0vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1150px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.77);
          transform: scale(0.77);
          bottom: 0vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1180px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 3vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1250px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 7vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1280px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 7vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1300px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 9vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1350px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: 11vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1400px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.05) !important;
          transform: scale(1.05) !important;
        }
      }
      /** 800 **/
      @media screen and (min-width: 800px) and (min-height: 1000px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -7vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1050px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -3vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1100px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: 0vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1150px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.77);
          transform: scale(0.77);
          bottom: 0vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1200px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 3vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1250px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 7vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1300px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 9vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1350px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: 11vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1400px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 12vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1450px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.09) !important;
          transform: scale(1.09) !important;
        }
      }
      /** 1024 */
      @media screen and (min-width: 1024px) and (min-height: 1300px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -2vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1350px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -2vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1400px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: 0vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1450px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.77);
          transform: scale(0.77);
          bottom: 0vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1500px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: 3vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1550px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: 7vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1600px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: 9vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1650px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: 11vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1700px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: 12vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1750px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1800px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1850px) {
        .baccarat-container .table-content-bg {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 13vw;
        }
        #baccaratTx .dealer {
          -webkit-transform: scale(1.4) !important;
          transform: scale(1.4) !important;
        }
      }
      .opacity-ele2 {
        z-index: 21 !important;
      }
      .baccarat-poker-start {
        position: absolute;
        height: 0.5rem;
        width: 0.5rem;
        bottom: 2rem;
        left: 0.5rem;
      }
      /* win动画样式 */
      #winPosBox {
        position: fixed;
        z-index: 99;
        left: -50vw;
        top: -50vw;
      }
      #winPosBox .baccarat-win {
        position: fixed;
        z-index: 99;
        width: 4rem;
        height: auto;
      }
      .area-poker-win {
        position: absolute;
        width: 50%;
        height: 0.04651rem;
        left: 1rem;
        /* background: red; */
      }
      /* 骨骼动画 */
      /* 人物 */
      #dealer .dealer {
        /* width: 30vw;
  height: 40vw;
  top: -27.5vw;
  left: 36vw; */
        width: 60vw;
        height: 80vw;
        top: -46.7vw;
        left: 20vw;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
      }
      /* 场景 */
      #baccaratTx .dealer {
        width: 140vw;
        height: 32vw;
        top: -2vw;
        z-index: 1;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
      }
    
    
      .scene.nn100[data-v-4767f019] {
        background: url("https://images.imags-google.com/game/nn-progress.jpg")
          center no-repeat;
        background-color: #a14a4a;
        background-size: cover;
      }
      .scene.long-tiger[data-v-4767f019] {
        background: url("https://images.imags-google.com/game/lh-progress.jpg")
          center no-repeat;
        background-size: cover;
        background-color: #6264a0;
      }
      .scene.red-black[data-v-4767f019] {
        background: url("https://images.imags-google.com/game/rb-progress.jpg")
          center no-repeat;
        background-size: cover;
        background-color: #a14a4a;
      }
      .scene.baccarat[data-v-4767f019] {
        background: url("https://images.imags-google.com/game/baccarat-progress.jpg")
          center no-repeat;
        background-size: cover;
        background-color: #a14a4a;
      }
      .scene.benz[data-v-4767f019] {
        background: url("https://images.imags-google.com/game/benz-progress.jpg")
          center no-repeat;
        background-size: cover;
        background-color: #a14a4a;
      }
      .scene.sicbo[data-v-4767f019] {
        background: url("https://images.imags-google.com/game/sicbo-progress.jpg")
          center no-repeat;
        background-size: cover;
        background-color: #a14a4a;
      }
      .scene[data-v-4767f019] {
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1006;
      }
      .progress-content[data-v-4767f019] {
        position: absolute;
        z-index: 1000;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 58%;
        /*bottom: 9.2rem;*/
        width: 9.30233rem;
        text-align: center;
        color: #fff;
        font-size: 0.74419rem;
      }
      .progress-content .progress-box[data-v-4767f019] {
        margin-top: 0.27907rem;
        color: gold;
        font-weight: bold;
        text-shadow: 0 0 0.46512rem #ad0000;
      }
      .long-tiger .progress-content[data-v-4767f019] {
        /*bottom: 8rem;*/
        top: 60%;
      }
      .progress-loading[data-v-4767f019] {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 2.35rem;
      }
      .progress-loading span[data-v-4767f019] {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-transform: uppercase;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
      }
      .progress-loading span.animate-slide[data-v-4767f019] {
        -webkit-animation: letterWave-data-v-4767f019 600ms linear infinite;
        animation: letterWave-data-v-4767f019 600ms linear infinite;
      }
      .baccarat .progress-loading[data-v-4767f019] {
        margin-top: 5vw;
      }
      .benz .progress-loading[data-v-4767f019] {
        margin-top: 4vw;
      }
      .sicbo .progress-loading[data-v-4767f019] {
        margin-top: -7vw;
      }
      .nn100 .progress-loading span[data-v-4767f019]:nth-child(1) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat 0.25rem 0.25rem;
        background-size: 8.37209rem;
      }
      .nn100 .progress-loading span[data-v-4767f019]:nth-child(2) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .nn100 .progress-loading span[data-v-4767f019]:nth-child(3) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -4.2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .nn100 .progress-loading span[data-v-4767f019]:nth-child(4) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -6.4rem 0.25rem;
        background-size: 8.37209rem;
      }
      .long-tiger .progress-loading span[data-v-4767f019]:nth-child(1) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat 0.25rem 0.25rem;
        background-size: 8.37209rem;
      }
      .long-tiger .progress-loading span[data-v-4767f019]:nth-child(2) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .long-tiger .progress-loading span[data-v-4767f019]:nth-child(3) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -4.2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .long-tiger .progress-loading span[data-v-4767f019]:nth-child(4) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -6.4rem 0.25rem;
        background-size: 8.37209rem;
      }
      .baccarat .progress-loading span[data-v-4767f019]:nth-child(1) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat 0.25rem 0.25rem;
        background-size: 8.37209rem;
      }
      .baccarat .progress-loading span[data-v-4767f019]:nth-child(2) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .baccarat .progress-loading span[data-v-4767f019]:nth-child(3) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -4.2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .baccarat .progress-loading span[data-v-4767f019]:nth-child(4) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -6.4rem 0.25rem;
        background-size: 8.37209rem;
      }
      .benz .progress-loading span[data-v-4767f019]:nth-child(1) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat 0.25rem 0.25rem;
        background-size: 8.37209rem;
      }
      .benz .progress-loading span[data-v-4767f019]:nth-child(2) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .benz .progress-loading span[data-v-4767f019]:nth-child(3) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -4.2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .benz .progress-loading span[data-v-4767f019]:nth-child(4) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -6.4rem 0.25rem;
        background-size: 8.37209rem;
      }
      .sicbo .progress-loading span[data-v-4767f019]:nth-child(1) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat 0.25rem 0.25rem;
        background-size: 8.37209rem;
      }
      .sicbo .progress-loading span[data-v-4767f019]:nth-child(2) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .sicbo .progress-loading span[data-v-4767f019]:nth-child(3) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -4.2rem 0.25rem;
        background-size: 8.37209rem;
      }
      .sicbo .progress-loading span[data-v-4767f019]:nth-child(4) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -6.4rem 0.25rem;
        background-size: 8.37209rem;
      }
      .red-black .progress-loading[data-v-4767f019] {
        display: block;
      }
      .red-black .progress-loading span[data-v-4767f019] {
        display: inline-block;
        width: 1.5rem;
        height: 100%;
      }
      .red-black .progress-loading span[data-v-4767f019]:nth-child(1) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat 0.15rem -1.85rem;
        background-size: 6rem;
      }
      .red-black .progress-loading span[data-v-4767f019]:nth-child(2) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -1.44rem -1.85rem;
        background-size: 6rem;
        margin-right: 1rem;
      }
      .red-black .progress-loading span[data-v-4767f019]:nth-child(3) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -3.05rem -1.85rem;
        background-size: 6rem;
        margin-left: 1rem;
      }
      .red-black .progress-loading span[data-v-4767f019]:nth-child(4) {
        background: url("https://images.imags-google.com/game/font.png")
          no-repeat -4.65rem -1.85rem;
        background-size: 6rem;
      }
      @-webkit-keyframes letterWave-data-v-4767f019 {
        0%,
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        25% {
          -webkit-transform: translateY(-0.46512rem);
          transform: translateY(-0.46512rem);
        }
        75% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }
      @keyframes letterWave-data-v-4767f019 {
        0%,
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        25% {
          -webkit-transform: translateY(-0.46512rem);
          transform: translateY(-0.46512rem);
        }
        75% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }
    
    
      .animation-chip {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
      }
      .animation-chip .animation-chip-container {
        position: relative;
      }
      .animation-chip .chip {
        position: absolute;
        background: url("https://images.imags-google.com/game/chipIcon.png")
          no-repeat;
        width: 0.975rem;
        height: 1.05rem;
        background-size: 6.5rem;
        -webkit-transition: 500ms;
        transition: 500ms;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        will-change: transform; /*animation: fade-in;
    animation-duration: 1s;
    -webkit-animation:fade-in 1s;*/
      }
      .animation-chip .chip.chip1 {
        background-position: -0.15rem -2.83rem;
      }
      .animation-chip .chip.chip5 {
        background-position: -1.36rem -2.78rem;
      }
      .animation-chip .chip.chip10 {
        background-position: -2.6rem -2.8rem;
      }
      .animation-chip .chip.chip50 {
        background-position: -3.88rem -2.8rem;
      }
      .animation-chip .chip.chip100 {
        background-position: -5.13rem -2.8rem;
      }
      .animation-chip .chip.chip500 {
        background-position: -0.08rem -3.95rem;
      }
      .animation-chip .chip.chip1000 {
        background-position: -1.35rem -3.95rem;
      }
      .animation-chip .chip.chip5000 {
        background-position: -2.6rem -3.9rem;
      }
      .animation-chip .chip.chip10000 {
        background-position: -3.88rem -3.9rem;
      }
      @-webkit-keyframes fade-in {
        0% {
          opacity: 0;
        } /*初始状态 透明度为0*/
        20% {
          opacity: 1;
        } /*过渡状态 透明度为0*/
        100% {
          opacity: 1;
        } /*过渡状态 透明度为0*/
      }
      @keyframes fade-in {
        0% {
          opacity: 0;
        } /*初始状态 透明度为0*/
        20% {
          opacity: 1;
        } /*过渡状态 透明度为0*/
        100% {
          opacity: 1;
        } /*过渡状态 透明度为0*/
      }
    
    
      .bet-state {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: fixed;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 1001;
        align-items: center;
      }
      .bet-state .bet-state-content {
        position: relative;
        width: 9.6rem;
        height: 3.72rem;
        margin: 0 auto;
      }
      .bet-state .lay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("https://images.imags-google.com/game/btnBg.png")
          no-repeat;
        background-size: 15rem;
      }
      .bet-state .lay1 {
        -webkit-animation: bet-state-bg 1s linear;
        animation: bet-state-bg 1s linear;
        opacity: 0;
      }
      .bet-state .lay2 {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-animation: bet-state-shadow 1s linear;
        animation: bet-state-shadow 1s linear;
        opacity: 0;
      }
      .bet-state .lay3 {
        -webkit-animation: bet-state-text 1s linear;
        animation: bet-state-text 1s linear;
      }
      .bet-state .lay4 {
        -webkit-animation: bet-state-text-bg 1s linear;
        animation: bet-state-text-bg 1s linear;
      }
      .bet-state .bg1 {
        background-position: 50% 0.5rem;
      }
      .bet-state .start {
        background-position: center -2.8rem;
      }
      .bet-state .pause {
        background-position: center -9.55rem;
      }
      .bet-state .end {
        background-position: center -6.15rem;
      }
      @-webkit-keyframes bet-state-bg {
        0% {
          -webkit-transform: scale(1) rotateX(90deg);
          transform: scale(1) rotateX(90deg);
          opacity: 1;
        }
        30% {
          -webkit-transform: scale(1) rotateX(20);
          transform: scale(1) rotateX(20);
          opacity: 1;
        }
        50% {
          -webkit-transform: scale(1.2) rotateX(0);
          transform: scale(1.2) rotateX(0);
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(1.6);
          transform: scale(1.6);
          opacity: 0;
        }
      }
      @keyframes bet-state-bg {
        0% {
          -webkit-transform: scale(1, 0);
          transform: scale(1, 0);
          opacity: 1;
        }
        30% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }
        50% {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(1.6);
          transform: scale(1.6);
          opacity: 0;
        }
      }
      @-webkit-keyframes bet-state-text {
        0% {
          -webkit-transform: scale(2);
          transform: scale(2);
          opacity: 0;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(100%);
          filter: contrast(100%);
        }
        20% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="2" intercept="-0.5" /><feFuncG type="linear" slope="2" intercept="-0.5" /><feFuncB type="linear" slope="2" intercept="-0.5" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(200%);
          filter: contrast(200%);
        }
        30% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="2" intercept="-0.5" /><feFuncG type="linear" slope="2" intercept="-0.5" /><feFuncB type="linear" slope="2" intercept="-0.5" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(200%);
          filter: contrast(200%);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(100%);
          filter: contrast(100%);
        }
      }
      @keyframes bet-state-text {
        0% {
          -webkit-transform: scale(2);
          transform: scale(2);
          opacity: 0;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(100%);
          filter: contrast(100%);
        }
        20% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="2" intercept="-0.5" /><feFuncG type="linear" slope="2" intercept="-0.5" /><feFuncB type="linear" slope="2" intercept="-0.5" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(200%);
          filter: contrast(200%);
        }
        30% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="2" intercept="-0.5" /><feFuncG type="linear" slope="2" intercept="-0.5" /><feFuncB type="linear" slope="2" intercept="-0.5" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(200%);
          filter: contrast(200%);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(100%);
          filter: contrast(100%);
        }
      }
      @-webkit-keyframes bet-state-text-bg {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes bet-state-text-bg {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }
      }
      @-webkit-keyframes bet-state-shadow {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
        15% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
        16% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0.8;
        }
        100% {
          -webkit-transform: scale(1.15);
          transform: scale(1.15);
          opacity: 0;
        }
      }
      @keyframes bet-state-shadow {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
        15% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0;
        }
        16% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 0.8;
        }
        100% {
          -webkit-transform: scale(1.15);
          transform: scale(1.15);
          opacity: 0;
        }
      }
    
    
      .countdown {
        position: relative;
        z-index: 19;
      }
      .countdown .countdown-content {
        position: fixed;
        top: 50%;
        margin-top: -2rem;
        left: 0;
        right: 0;
        width: 4rem;
        height: 4rem;
        margin: 0 auto;
        /* background: black;
    transform: scale(3); */
      }
      .countdown .countdown-content .bg-gif {
        position: absolute;
        left: -1rem;
        top: -1.2rem;
      }
      .countdown .countdown-content .lay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("https://images.imags-google.com/game/btnBg.png")
          no-repeat;
        background-size: 15rem;
      }
      .countdown .countdown-content .lay-bg {
        -webkit-animation: 1s lay-bg linear infinite;
        animation: 1s lay-bg linear infinite;
        opacity: 0;
        -webkit-animation-delay: 290ms;
        animation-delay: 290ms;
      }
      .countdown .countdown-content .lay4 {
        -webkit-animation: 1.5s countdown-num linear infinite;
        animation: 1.5s countdown-num linear infinite;
      }
      .countdown .countdown-content .num3 {
        background-position: -0.92rem -14.15rem;
      }
      .countdown .countdown-content .num2 {
        background-position: -0.92rem -19.4rem;
      }
      .countdown .countdown-content .num1 {
        background-position: -0.92rem -24.65rem;
      }
      @-webkit-keyframes lay-bg {
        1% {
          opacity: 1;
        }
        20% {
          opacity: 1;
        }
        90% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes countdown-num {
        0% {
          -webkit-transform: scale(2);
          transform: scale(2);
          opacity: 0;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(100%);
          filter: contrast(100%);
        }
        20% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="2" intercept="-0.5" /><feFuncG type="linear" slope="2" intercept="-0.5" /><feFuncB type="linear" slope="2" intercept="-0.5" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(200%);
          filter: contrast(200%);
        }
        30% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="2" intercept="-0.5" /><feFuncG type="linear" slope="2" intercept="-0.5" /><feFuncB type="linear" slope="2" intercept="-0.5" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(200%);
          filter: contrast(200%);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
          -webkit-filter: contrast(100%);
          filter: contrast(100%);
        }
      }
    
    
      .meteor2 {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
      }
      .meteor2 > div {
        filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="1.5" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.2" /><feFuncG type="linear" slope="1.2" /><feFuncB type="linear" slope="1.2" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter');
        -webkit-filter: blur(0.06977rem) brightness(1.2) contrast(1);
        filter: blur(0.06977rem) brightness(1.2) contrast(1);
      }
      .meteor2 .star {
        position: absolute;
        width: 1rem;
        height: 1rem;
        /* background: url('https://images.imags-google.com/game/meteor2.png') no-repeat; */
        /* background-size: 100%; */
        /* animation: meteor 4s; */
        /* animation-fill-mode: forwards; */
        -webkit-transition: 1000ms;
        transition: 1000ms;
        mix-blend-mode: color-dodge;
      }
      .meteor2 .star > svg {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        fill: #ffeb3b;
      }
    
    
      .baccarat-poker-send {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 20;
      }
      .baccarat-poker-send .poker-send1 {
        left: 50vw;
        top: 0;
      }
      .baccarat-poker-send .poker-container .anime-poker {
        display: block;
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
        /* 动画速度 与 js 保持一致 */
        -webkit-transition: 400ms;
        transition: 400ms;
      }
      .baccarat-poker-send .disable-anime {
        -webkit-transition: none !important;
        transition: none !important;
      }
      .baccarat-poker-send .flop-box {
        position: fixed;
        left: 0;
        top: 2.7907rem;
        width: 194px;
        height: 93px;
        /* transform: scale(.8); */
        background: url("https://images.imags-google.com/game/flop-sprite.png")
          left top no-repeat;
        background-size: 1164px 93px;
        background-position: 0 0;
      }
      .baccarat-poker-send .flop-box .poker-info {
        position: absolute;
        left: 92px;
        top: 12px;
        width: 20px;
        height: 40px;
        text-align: center;
        -webkit-transform: scale(0.4) rotate(64deg);
        transform: scale(0.4) rotate(64deg);
      }
      .baccarat-poker-send .flop-box .poker-info .value {
        font-family: ubuntu condensed, sans-serif;
        font-size: 1.02326rem;
        font-weight: bold;
      }
      .baccarat-poker-send .flop-box .poker-info .value0,
      .baccarat-poker-send .flop-box .poker-info .value2 {
        color: #b71903;
      }
      .baccarat-poker-send .flop-box .poker-info .value1,
      .baccarat-poker-send .flop-box .poker-info .value3 {
        color: #1b1b1b;
      }
      .baccarat-poker-send .flop-box .poker-info .type {
        width: 21px;
        height: 20px;
        background: url("https://images.imags-google.com/game/puke.png")
          no-repeat;
        background-size: 700px 783px;
        background-position: -651px -728px;
      }
      .baccarat-poker-send .flop-box .poker-info .type0 {
        background-position: -651px -728px;
      }
      .baccarat-poker-send .flop-box .poker-info .type1 {
        background-position: -616px -728px;
      }
      .baccarat-poker-send .flop-box .poker-info .type2 {
        background-position: -616px -689px;
      }
      .baccarat-poker-send .flop-box .poker-info .type3 {
        background-position: -650px -689px;
      }
      .baccarat-poker-send .flop-box1 {
        background-position: 0 0;
      }
      .baccarat-poker-send .flop-box2 {
        background-position: -194px 0;
      }
      .baccarat-poker-send .flop-box3 {
        background-position: -388px 0;
      }
      .baccarat-poker-send .flop-box4 {
        background-position: -582px 0;
      }
      .baccarat-poker-send .flop-box5 {
        background-position: -776px 0;
      }
      .baccarat-poker-send .flop-box6 {
        background-position: -969px 0;
      }
      .baccarat-poker-send .des {
        position: absolute;
        height: 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .baccarat-poker-send .des .bgimg-bjl,
      .baccarat-poker-send .des .bg-baccarat {
        position: absolute;
        background: url("https://images.imags-google.com/game/baccaratJackWin.png")
          no-repeat center;
        background-size: 5.5rem;
      }
      .baccarat-poker-send .des .bgx {
        /* left: -1.9rem;
      width: 4.5rem; */
        top: 0.9rem;
        height: 100%;
        background-position: center -20.7rem;
        position: relative;
      }
      .baccarat-poker-send .des .bgx .result {
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center -19.28rem;
      }
      .baccarat-poker-send .des .bgx {
        /* baccarat */
      }
      .baccarat-poker-send .des .bgx .baccarat0 {
        background-position: center -19.28rem;
      }
      .baccarat-poker-send .des .bgx .baccarat1 {
        background-position: center -17.85rem;
      }
      .baccarat-poker-send .des .bgx .baccarat2 {
        background-position: center -16.42rem;
      }
      .baccarat-poker-send .des .bgx .baccarat3 {
        background-position: center -14.99rem;
      }
      .baccarat-poker-send .des .bgx .baccarat4 {
        background-position: center -13.5rem;
      }
      .baccarat-poker-send .des .bgx .baccarat5 {
        background-position: center -12.055rem;
      }
      .baccarat-poker-send .des .bgx .baccarat6 {
        background-position: center -10.63rem;
      }
      .baccarat-poker-send .des .bgx .baccarat7 {
        background-position: center -9.2rem;
      }
      .baccarat-poker-send .des .bgx .baccarat8 {
        background-position: center -7.74rem;
      }
      .baccarat-poker-send .des .bgx .baccarat9 {
        background-position: center -6.31rem;
      }
      .baccarat-poker-send .anime1 .bg {
        -webkit-animation: bg 0.6s;
        animation: bg 0.6s;
      }
      .baccarat-poker-send .anime1 .result {
        -webkit-animation: result 0.6s;
        animation: result 0.6s;
      }
      .baccarat-poker-send .anime2 .bg {
        -webkit-animation: bg2 0.6s;
        animation: bg2 0.6s;
      }
      .baccarat-poker-send .anime2 .result {
        -webkit-animation: result2 0.6s;
        animation: result2 0.6s;
      }
      .baccarat-poker-send .poker-vgif {
        /* top: -1.2rem; */
        top: -0.3rem;
        font-size: 3.5rem;
        left: -3.5rem;
        position: absolute;
      }
      .baccarat-poker-send .poker-vgif.normal {
        left: -1.75rem;
      }
      @-webkit-keyframes bg {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes bg {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @-webkit-keyframes result {
        0% {
          opacity: 0;
          -webkit-transform: scale(1.6);
          transform: scale(1.6);
        }
        100% {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @keyframes result {
        0% {
          opacity: 0;
          -webkit-transform: scale(1.6);
          transform: scale(1.6);
        }
        100% {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @-webkit-keyframes bg2 {
        0% {
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
        }
        100% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
      @keyframes bg2 {
        0% {
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
        }
        100% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
        }
      }
      @-webkit-keyframes result2 {
        0% {
          opacity: 0;
          -webkit-transform: scale(0.2);
          transform: scale(0.2);
        }
        100% {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @keyframes result2 {
        0% {
          opacity: 0;
          -webkit-transform: scale(0.2);
          transform: scale(0.2);
        }
        100% {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    
    
      /*@import url('../../assets/css/games.css');*/
      .head-zhuang {
        position: relative;
      }
      .poker-start {
        position: absolute;
        top: 0;
        left: 0;
      }
    
    
      .money-show[data-v-1dbe65c0] {
        -webkit-animation: moneyshow-data-v-1dbe65c0 3s forwards;
        animation: moneyshow-data-v-1dbe65c0 3s forwards;
      }
      @-webkit-keyframes moneyshow-data-v-1dbe65c0 {
        0% {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
          opacity: 0;
        }
        10% {
          -webkit-transform: translate(0, -1.11628rem);
          transform: translate(0, -1.11628rem);
          opacity: 1;
        }
        60% {
          -webkit-transform: translate(0, -1.11628rem);
          transform: translate(0, -1.11628rem);
          opacity: 1;
        }
        100% {
          -webkit-transform: translate(0, -4.65116rem);
          transform: translate(0, -4.65116rem);
          opacity: 0;
        }
      }
      @keyframes moneyshow-data-v-1dbe65c0 {
        0% {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
          opacity: 0;
        }
        10% {
          -webkit-transform: translate(0, -1.11628rem);
          transform: translate(0, -1.11628rem);
          opacity: 1;
        }
        60% {
          -webkit-transform: translate(0, -1.11628rem);
          transform: translate(0, -1.11628rem);
          opacity: 1;
        }
        100% {
          -webkit-transform: translate(0, -4.65116rem);
          transform: translate(0, -4.65116rem);
          opacity: 0;
        }
      }
    
    
      .game-win {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
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
      .game-win .game-win-content {
        width: 4rem;
        height: 2.3rem;
        position: relative;
      }
      .game-win .bgimg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: url("https://images.imags-google.com/game/brnnJackWin.png");
        background-size: 5.5rem;
      }
      .game-win .win {
        background-position: center 5rem;
        -webkit-animation: game-win-img 0.5s
          cubic-bezier(0.18, 0.89, 0.32, 1.28);
        animation: game-win-img 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }
      .game-win .light {
        height: 3rem;
        top: -0.35rem;
        background-position: center 8.8rem;
        -webkit-animation: game-win-bg-rotate 3.5s infinite linear;
        animation: game-win-bg-rotate 3.5s infinite linear;
      }
      .game-win .star {
        position: absolute;
        width: 0.8rem;
        height: 0.8rem;
        background-position: center -30.9rem;
        -webkit-animation: game-win-star 1s linear;
        animation: game-win-star 1s linear;
        opacity: 0;
      }
      .game-win .star1 {
        left: 0.9rem;
        top: 1.2rem;
        -webkit-animation-delay: 500ms;
        animation-delay: 500ms;
      }
      .game-win .star2 {
        left: 2.1rem;
        top: 0.3rem;
        -webkit-animation-delay: 1200ms;
        animation-delay: 1200ms;
      }
      .game-win .star3 {
        left: 0.9rem;
        top: -0.1rem;
        -webkit-animation-delay: 1900ms;
        animation-delay: 1900ms;
      }
      .game-win .star4 {
        left: 2.1rem;
        top: 0.3rem;
        -webkit-animation-delay: 2600ms;
        animation-delay: 2600ms;
      }
      @-webkit-keyframes game-win-star {
        0% {
          opacity: 0;
          -webkit-transform: rotate(0) scale(0.4);
          transform: rotate(0) scale(0.4);
        }
        33.3333% {
          opacity: 1;
          -webkit-transform: rotate(40deg) scale(1);
          transform: rotate(40deg) scale(1);
        }
        66.6666% {
          opacity: 1;
          -webkit-transform: rotate(80deg) scale(1);
          transform: rotate(80deg) scale(1);
        }
        100% {
          opacity: 0;
          -webkit-transform: rotate(120deg) scale(0.4);
          transform: rotate(120deg) scale(0.4);
        }
      }
      @-webkit-keyframes game-win-bg-rotate {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @-webkit-keyframes game-win-img {
        0% {
          -webkit-transform: scale(1.4);
          transform: scale(1.4);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    
    
      .dealer {
        width: 6.97674rem;
        height: 6.97674rem;
        position: absolute;
        z-index: 9999;
      }
    
    
      /*@import url('../../assets/css/games.css');*/
      .game-chess-img button {
        background: none;
        border: 0;
        position: relative;
        left: -1.02326rem;
      }
    
    
      .queen-light[data-v-07f55b9f] {
        background: url(https://images.imags-google.com/game/RBlight.png)
          no-repeat;
      }
      .rw-animation[data-v-07f55b9f] {
        z-index: -10 !important;
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
        background: url(https://images.imags-google.com/game/RBlight.png)
          no-repeat;
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
        background: url(https://images.imags-google.com/game/RBlight.png)
          no-repeat;
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
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top left;
        left: -40px;
        -webkit-animation: left-little-data-v-07f55b9f 0.4s 0.2s forwards;
        animation: left-little-data-v-07f55b9f 0.4s 0.2s forwards;
      }
      .redblack-contain .king[data-v-07f55b9f] {
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top left -207px;
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
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top -178px left -273px;
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
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top -178px left -273px;
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
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top -179px left 0px;
      }
      .redblack-contain .vs-s[data-v-07f55b9f] {
        top: 25px;
        left: 30px;
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
      .redblack-contain .vs-s div[data-v-07f55b9f] {
        opacity: 0;
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top -179px left -77px;
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
        background: url(https://images.imags-google.com/game/RBOpeninng.png)
          no-repeat top -179px left -158px;
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
        background: url(https://images.imags-google.com/game/vslight.png)
          no-repeat top left;
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
        -webkit-animation: right-sword-light-data-v-07f55b9f 0.25s 0.45s
          forwards;
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
    
    
      .anime-poker {
        width: 2.3em;
        height: 3em;
        position: relative;
        display: inline-block;
      }
      .anime-poker * {
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
        width: 100%;
        height: 100%;
      }
      .anime-poker.state1 .bg {
        -webkit-transform: rotateY(90deg) skewY(-20deg);
        transform: rotateY(90deg) skewY(-20deg);
      }
      .anime-poker.state2 .front {
        -webkit-transform: rotateY(0) skewY(0);
        transform: rotateY(0) skewY(0);
      }
      .anime-poker .front {
        -webkit-transform: rotateY(90deg) skewY(20deg);
        transform: rotateY(90deg) skewY(20deg);
      }
      .anime-poker .poker-img {
        background: url("https://images.imags-google.com/game/puke.png")
          no-repeat;
        background-size: 20.45em;
      }
      .anime-poker .bg {
        background-position: -15.345em -19.495em;
        /* background-position: -17.745em -21.495em; */
      }
      .anime-poker {
        /* ♦️ 开始 */
      }
      .anime-poker .p4 {
        background-position: -7.32em -0.04em;
      }
      .anime-poker .p8 {
        background-position: -7.32em -3.27em;
      }
      .anime-poker .p12 {
        background-position: -7.32em -6.5em;
      }
      .anime-poker .p16 {
        background-position: -7.32em -9.76em;
      }
      .anime-poker .p20 {
        background-position: -7.32em -12.987em;
      }
      .anime-poker .p24 {
        background-position: -7.32em -16.24em;
      }
      .anime-poker .p28 {
        background-position: -7.32em -19.475em;
      }
      .anime-poker .p32 {
        background-position: -17.748em -0.02em;
      }
      .anime-poker .p36 {
        background-position: -17.748em -3.27em;
      }
      .anime-poker .p40 {
        background-position: -17.748em -6.5em;
      }
      .anime-poker .p44 {
        background-position: -17.748em -9.76em;
      }
      .anime-poker .p48 {
        background-position: -17.748em -12.987em;
      }
      .anime-poker .p52 {
        background-position: -17.748em -16.24em;
      }
      .anime-poker {
        /* ♣️ 开始 */
      }
      .anime-poker .p5 {
        background-position: -4.87em -0.02em;
      }
      .anime-poker .p9 {
        background-position: -4.87em -3.27em;
      }
      .anime-poker .p13 {
        background-position: -4.87em -6.5em;
      }
      .anime-poker .p17 {
        background-position: -4.87em -9.76em;
      }
      .anime-poker .p21 {
        background-position: -4.87em -12.987em;
      }
      .anime-poker .p25 {
        background-position: -4.87em -16.24em;
      }
      .anime-poker .p29 {
        background-position: -4.87em -19.475em;
      }
      .anime-poker .p33 {
        background-position: -15.3em -0.02em;
      }
      .anime-poker .p37 {
        background-position: -15.3em -3.27em;
      }
      .anime-poker .p41 {
        background-position: -15.3em -6.5em;
      }
      .anime-poker .p45 {
        background-position: -15.3em -9.76em;
      }
      .anime-poker .p49 {
        background-position: -15.3em -12.987em;
      }
      .anime-poker .p53 {
        background-position: -15.3em -16.24em;
      }
      .anime-poker {
        /* ♥️ 开始 */
      }
      .anime-poker .p6 {
        background-position: 0.04em -0.02em;
      }
      .anime-poker .p10 {
        background-position: 0.04em -3.27em;
      }
      .anime-poker .p14 {
        background-position: 0.04em -6.5em;
      }
      .anime-poker .p18 {
        background-position: 0.04em -9.76em;
      }
      .anime-poker .p22 {
        background-position: 0.04em -12.987em;
      }
      .anime-poker .p26 {
        background-position: 0.04em -16.24em;
      }
      .anime-poker .p30 {
        background-position: 0.04em -19.475em;
      }
      .anime-poker .p34 {
        background-position: -10.4em -0.02em;
      }
      .anime-poker .p38 {
        background-position: -10.4em -3.27em;
      }
      .anime-poker .p42 {
        background-position: -10.4em -6.5em;
      }
      .anime-poker .p46 {
        background-position: -10.4em -9.76em;
      }
      .anime-poker .p50 {
        background-position: -10.4em -12.987em;
      }
      .anime-poker .p54 {
        background-position: -10.4em -16.24em;
      }
      .anime-poker {
        /* ♠️ 开始 */
      }
      .anime-poker .p7 {
        background-position: -2.415em -0.02em;
      }
      .anime-poker .p11 {
        background-position: -2.415em -3.27em;
      }
      .anime-poker .p15 {
        background-position: -2.415em -6.5em;
      }
      .anime-poker .p19 {
        background-position: -2.415em -9.76em;
      }
      .anime-poker .p23 {
        background-position: -2.415em -12.987em;
      }
      .anime-poker .p27 {
        background-position: -2.415em -16.24em;
      }
      .anime-poker .p31 {
        background-position: -2.415em -19.475em;
      }
      .anime-poker .p35 {
        background-position: -12.84em -0.02em;
      }
      .anime-poker .p39 {
        background-position: -12.84em -3.27em;
      }
      .anime-poker .p43 {
        background-position: -12.84em -6.5em;
      }
      .anime-poker .p47 {
        background-position: -12.84em -9.76em;
      }
      .anime-poker .p51 {
        background-position: -12.84em -12.987em;
      }
      .anime-poker .p55 {
        background-position: -12.84em -16.24em;
      }
    
    
      .vgif {
        display: table;
      }
      .vgif > div {
        background: url("https://images.imags-google.com/game/vgif.png")
          no-repeat;
        background-size: 10.25em;
      }
      .vgif .countdown {
        width: 2em;
        height: 2em;
      }
      .vgif .good {
        width: 2em;
        height: 1em;
      }
      .vgif .normal {
        width: 1em;
        height: 1em;
      }
      .vgif .countdown-0 {
        background-position: -0.01em -0.01em;
      }
      .vgif .countdown-1 {
        background-position: -0.01em -2.03em;
      }
      .vgif .countdown-2 {
        background-position: -2.03em -0.01em;
      }
      .vgif .countdown-3 {
        background-position: -2.03em -2.03em;
      }
      .vgif .countdown-4 {
        background-position: -4.05em -0.01em;
      }
      .vgif .good-0 {
        background-position: -0.01em -4.05em;
      }
      .vgif .good-1 {
        background-position: -2.03em -4.05em;
      }
      .vgif .good-2 {
        background-position: -4.05em -2.03em;
      }
      .vgif .good-3 {
        background-position: -4.05em -3.05em;
      }
      .vgif .good-4 {
        background-position: -4.05em -4.07em;
      }
      .vgif .good-5 {
        background-position: -6.07em -0.01em;
      }
      .vgif .good-6 {
        background-position: -8.09em -0.01em;
      }
      .vgif .good-7 {
        background-position: -6.07em -1.03em;
      }
      .vgif .normal-0 {
        background-position: -8.09em -1.03em;
      }
      .vgif .normal-1 {
        background-position: -9.11em -1.03em;
      }
      .vgif .normal-2 {
        background-position: -6.07em -2.05em;
      }
      .vgif .normal-3 {
        background-position: -6.07em -3.07em;
      }
      .vgif .normal-4 {
        background-position: -6.07em -4.09em;
      }
      .vgif .normal-5 {
        background-position: -7.09em -2.05em;
      }
      .vgif .normal-6 {
        background-position: -7.09em -3.07em;
      }
      .vgif .normal-7 {
        background-position: -7.09em -4.09em;
      }
    
    
      [v-cloak] {
        display: none;
      }
      .action-feet i {
        font-size: 0.65116rem;
        margin-left: 0.18605rem;
      }
      .btn-header-right {
        font-size: 1.1em;
      }
      .btn-header-right .van-icon {
        position: relative;
        top: -0.04651rem;
        margin-left: 0.18605rem;
      }
      .textMore {
        font-size: 0.74rem;
      }
      .logo {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 5.28rem;
        height: 1.5rem;
      }
      .live-logo {
        width: 1.4rem;
        position: relative;
        top: -0.12rem;
      }
      .visibleHidden {
        position: absolute;
        opacity: 0;
        visibility: hidden;
      }
    
    
      .timebox[data-v-4682bdd6] {
        position: fixed;
        width: 100%;
        bottom: 5rem;
        background: red;
        text-align: center;
      }
      .hidden[data-v-4682bdd6] {
        visibility: hidden;
        display: none;
      }
      .games_bg[data-v-4682bdd6] {
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: url(https://images.imags-google.com/game/gamebg.png)
          no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        overflow: auto;
        padding-bottom: 2.5rem;
      }
      .game-header[data-v-4682bdd6] {
        height: 2.555em;
        text-align: center;
        line-height: 2.555em;
        color: #ffffff;
        border-bottom: 0.09302rem solid rgba(255, 255, 244, 0.2);
        background: #171939;
      }
      .van-hairline--bottom[data-v-4682bdd6]::after {
        border-bottom-width: 0 !important;
      }
      .game-item[data-v-4682bdd6] {
        margin: 0 1rem;
        height: 5rem;
        margin-top: 0.1rem;
      }
      .gamepre-item[data-v-4682bdd6] {
        margin: 0 1rem;
        height: 4rem;
        margin-top: 0.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-radius: 0.3rem;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border: 0.04651rem solid #fff;
      }
      .bg-game[data-v-4682bdd6] {
        background: url(https://images.imags-google.com/game/game-list.png?1)
          no-repeat;
        background-size: 87vw auto;
      }
      .bg_LHDZ[data-v-4682bdd6] {
        background-position: 0% 92%;
      }
      .bg_BRNN[data-v-4682bdd6] {
        background-position: 0 0%;
      }
      .bg_HHDZ[data-v-4682bdd6] {
        background-position: 0 46%;
      }
      .hidden[data-v-4682bdd6] {
        visibility: hidden;
        display: none;
      }
      .gamespre_bg[data-v-4682bdd6] {
        position: absolute;
        top: 0;
        width: 100%;
        min-height: 100%;
        overflow: auto;
        padding-bottom: 2.5rem;
        background: #171939;
        color: #ffffff;
      }
      .game-header[data-v-4682bdd6] {
        height: 2.555em;
        text-align: center;
        line-height: 2.555em;
        color: #ffffff;
        border-bottom: 0.09302rem solid rgba(255, 255, 244, 0.2);
        background: #171939;
      }
      .van-hairline--bottom[data-v-4682bdd6]::after {
        border-bottom-width: 0 !important;
      }
      .game-item[data-v-4682bdd6] {
        margin: 0 1rem;
        height: 5rem;
        margin-top: 0.1rem;
      }
      .bg-game[data-v-4682bdd6] {
        background: url(https://images.imags-google.com/game/game-list.png?1)
          no-repeat;
        background-size: 87vw auto;
        position: relative;
      }
      .bgcolor-BRNN[data-v-4682bdd6] {
        background-color: #f5b429;
      }
      .bgcolor-HHDZ[data-v-4682bdd6] {
        background-color: #e94749;
      }
      .bgcolor-LHDZ[data-v-4682bdd6] {
        background-color: #00a4cb;
      }
      .bg_BRNN[data-v-4682bdd6] {
        background-position: 0 0%;
      }
      .bg_HHDZ[data-v-4682bdd6] {
        background-position: 0 20%;
      }
      .bg_LHDZ[data-v-4682bdd6] {
        background-position: 0% 40%;
      }
      .bg_BJL[data-v-4682bdd6] {
        background-position: 0% 60%;
      }
      .bg_BCBM[data-v-4682bdd6] {
        background-position: 0% 80%;
      }
      .bg_TB[data-v-4682bdd6] {
        background-position: 0% 100%;
      }
    
    
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
        background: url("https://images.imags-google.com/game/nnicon.png?1")
          no-repeat;
        background-size: 100vw auto;
      }
      /** 龙虎精灵图 **/
      .game-loongTiger-img {
        background: url(https://images.imags-google.com/game/loongTiger.png)
          no-repeat;
        background-size: 100vw auto;
      }
      .game-chess-card {
        background: url(https://images.imags-google.com/game/puke.png) no-repeat;
        background-size: 100vw auto;
      }
      .game-ranking-img {
        background: url(https://images.imags-google.com/game/popupList.png)
          no-repeat;
        background-size: 100vw auto;
      }
      /** 筹码 **/
      .game-chip-img {
        background: url(https://images.imags-google.com/game/chipIcon.png)
          no-repeat;
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
        background: url(https://images.imags-google.com/game/benzBMW-bg.jpg)
          center bottom repeat-y;
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
        background: url(https://images.imags-google.com/game/sicbo-girl.png)
          no-repeat;
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
      .chess-head
        .chess-head-list
        .chess-head-middle
        .head-middle-img
        .left-icon {
        float: left;
        width: 9.5vw;
        height: 6.3vw;
        line-height: 6.5vw;
        font-size: 4vw;
        margin-top: 1.5vw;
        text-align: center;
        display: inline-block;
      }
      .chess-head
        .chess-head-list
        .chess-head-middle
        .head-middle-img
        .number-box {
        font-size: 3vw;
        width: 14vw;
        display: table-cell;
        vertical-align: middle;
      }
      .chess-head
        .chess-head-list
        .chess-head-middle
        .head-middle-img
        .right-icon {
        float: right;
        display: inline-block;
        margin-right: 0;
        width: 5vw;
        height: 6vw;
      }
      .chess-head
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
      .chess-foot
        .game-foot-btn
        .game-foot-middle
        .game-foot-money
        .foot-money-icon {
        left: 0.1vw;
        top: 0;
        width: 8vw;
        height: 8vw;
        background-position: 27% 8.2%;
      }
      .chess-foot
        .game-foot-btn
        .game-foot-middle
        .game-foot-money
        .foot-add-btn {
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
      .chess-foot
        .foot-slide-chip
        .foot-chip-longtiger-bg
        .foot-chip-bgli
        span {
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
        background: #48100f
          url(https://images.imags-google.com/game/nn100bg.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.red-black-war {
        overflow: hidden;
        background: #bd7b4b
          url(https://images.imags-google.com/game/redBlackWar.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.loong-Tiger-body {
        overflow: hidden;
        background: url(https://images.imags-google.com/game/loongTigerBg.jpg)
          top center no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.benzbmw-body {
        overflow: hidden;
        background: url(https://images.imags-google.com/game/benzBMW.jpg) top
          center no-repeat;
        background-size: 100vw auto;
      }
      .chess-all-body.sicbo-body {
        background: #0b0014
          url(https://images.imags-google.com/game/sicbo-bg.jpg) top center
          no-repeat;
        background-size: 100vw auto;
      }
      /**百人牛牛 样式 */
      .nn100-chipbg {
        position: fixed;
        z-index: 0;
        background: url(https://images.imags-google.com/game/nn100bg2.png)
          bottom center no-repeat;
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
      .chess-nn100-start .nn100-rotate-card > div .rotate-card-list > em {
        position: absolute;
        left: 0;
        top: 0;
        width: 11vw;
        height: 15vw;
        background-position: 84.3% 98%;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-0 {
        left: 0;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-1 {
        left: 3vw;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-2 {
        left: 6vw;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-3 {
        left: 9vw;
        top: 0;
      }
      .chess-nn100-start
        .nn100-rotate-card
        > div
        .rotate-card-list
        > em.card-4 {
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
        background: url(https://images.imags-google.com/game/nnicon.png?1)
          no-repeat;
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
        background: url(https://images.imags-google.com/game/redblackbg.png)
          bottom center no-repeat;
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
      .chess-redblackwar-start
        .redblackwar-chess-card
        .redblackwar-card
        > div
        > em {
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
      .chess-redblackwar-start
        .redblackwar-open-number
        > div.redblackwar-open-left {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        /*width: 56vw!important;*/
      }
      .chess-redblackwar-start
        .redblackwar-open-number
        .redblackwar-open-trend-btn {
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
      .chess-redblackwar-start
        .redblackwar-open-number
        .redblackwar-open-dot
        > em {
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
      .chess-redblackwar-start
        .redblackwar-open-number
        .redblackwar-open-square {
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
      .chess-redblackwar-start
        .redblackwar-betting
        > div
        > div.redblackwar-hit {
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
      .loongtiger-open-list
        > .loongtiger-opennumber
        > em
        .loongtiger-light.l-loong {
        background-position: 79.9% 9.4%;
      }
      .loongtiger-open-list
        > .loongtiger-opennumber
        > em
        .loongtiger-light.l-tiger {
        background-position: 89.2% 9.4%;
      }
      .loongtiger-open-list
        > .loongtiger-opennumber
        > em
        .loongtiger-light.l-he {
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
      .loongtiger-betting
        > div
        .loongtiger-betting-loong
        .loongtiger-number-top {
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
      .loongtiger-betting
        > div
        .loongtiger-betting-loong
        .loongtiger-number-middle {
        color: #31447f;
      }
      .loongtiger-betting
        > div
        .loongtiger-betting-loong
        .loongtiger-number-down {
        color: #afa5d5;
        text-shadow: 0.04651rem 0.04651rem 0.04651rem #231a4d;
      }
      .loongtiger-betting > div .loongtiger-betting-tiger {
        background: url(https://images.imags-google.com/game/tigerBg.png) center
          center no-repeat;
        background-size: 50vw auto;
        /*background-position:73% 72%;*/
      }
      .loongtiger-betting
        > div
        .loongtiger-betting-tiger
        .loongtiger-number-top {
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
      .loongtiger-betting
        > div
        .loongtiger-betting-tiger
        .loongtiger-number-middle {
        color: #723e32;
      }
      .loongtiger-betting
        > div
        .loongtiger-betting-tiger
        .loongtiger-number-down {
        color: #ffd3b3;
        text-shadow: 0.04651rem 0.04651rem 0.04651rem #503313;
      }
      .loongtiger-betting > div .loongtiger-betting-he {
        width: 80vw;
        height: 33vw;
        background: url(https://images.imags-google.com/game/heBg.png) bottom
          center no-repeat;
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
      .loongtiger-betting
        > div
        .loongtiger-betting-he
        .loongtiger-number-middle {
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
      /** sicbo **/
      .sicbo-body {
        top: 0;
      }
      /* 增加对筹码透明的处理 */
      .sicbo-animation-chip .animation-chip {
        opacity: 0.5 !important;
      }
      /** 点数图  **/
      .sicbonumber-img {
        background: url(https://images.imags-google.com/game/sicbo-number.png)
          no-repeat;
        background-size: 56vw auto;
      }
      /** 呼吸灯  **/
      .sicbolight-img {
        background: url(https://images.imags-google.com/game/sicbo-light.png)
          no-repeat;
        background-size: 66.666vw auto;
      }
      .sicbo-container {
        /* position: relative; */
        padding: 12vw 0 24vw 0;
        height: 100%;
        overflow: hidden;
        /** 走势样式 **/
      }
      .sicbo-container .trend-content {
        position: absolute;
        width: 100%;
      }
      .sicbo-container .trend-content .sicbo-trend {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        z-index: 1;
        width: 75vw;
        height: 15.5vw;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0.13953rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 auto;
        padding: 0.13953rem;
      }
      .sicbo-container .trend-content .sicbo-trend.new:before {
        content: "";
        background: url(https://images.imags-google.com/game/nnicon.png?1)
          no-repeat;
        background-size: 100vw auto;
        position: absolute;
        left: 0;
        top: 0;
        width: 5vw;
        height: 4vw;
        background-position: 64.1% 47.2%;
      }
      .sicbo-container .trend-content .sicbo-trend {
        /** 走势图点数 **/
      }
      .sicbo-container .trend-content .sicbo-trend > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 100%;
        margin: 0.09302rem 0.13953rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        font-size: 0.6rem;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        margin: 0 auto;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #fff;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div:nth-of-type(3) {
        margin: 0.04651rem auto 0 auto;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 0.6em;
        width: 100%;
      }
      .sicbo-container
        .trend-content
        .sicbo-trend
        > div
        > div
        .sicbo-trand-ico {
        width: 3.5vw;
        height: 3.5vw;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div {
        /** 走势图点数 **/
      }
      .sicbo-container .trend-content .sicbo-trend > div > div .sicbo-1 {
        background-position: 5.5% 27.7%;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div .sicbo-2 {
        background-position: 15.8% 27.7%;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div .sicbo-3 {
        background-position: 26.2% 27.7%;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div .sicbo-4 {
        background-position: 36.6% 27.7%;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div .sicbo-5 {
        background-position: 47.1% 27.7%;
      }
      .sicbo-container .trend-content .sicbo-trend > div > div .sicbo-6 {
        background-position: 57.4% 27.7%;
      }
      .sicbo-container .trend-content .sicbo-trend > div .sicbo-new-trend {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .sicbo-container {
        /** 投注区与桌面 **/
      }
      .sicbo-container .sicbo-content {
        position: absolute;
        height: 110vw;
        width: 100vw;
        bottom: 0vw;
      }
      .sicbo-container .sicbo-content > div {
        position: absolute;
      }
      .sicbo-container .sicbo-content .sicbo-table-bg {
        left: 50%;
        top: 0;
        width: 160vw;
        height: 100%;
        margin-left: -80vw;
        z-index: 1;
        background: url(https://images.imags-google.com/game/sicbo-table2.png)
          center bottom no-repeat;
        background-size: 160vw auto;
        /*background: url(https://images.imags-google.com/game/sicbo-table.png) center bottom no-repeat;
      background-size: 100vw auto;*/
      }
      .sicbo-container .sicbo-content {
        /** 女孩椅子start **/
      }
      .sicbo-container .sicbo-content .game-sicbogirs {
        left: 50%;
        width: 60vw;
        margin-left: -30vw;
      }
      .sicbo-container .sicbo-content .game-sicbogirl-chair {
        top: -32.5vw;
        height: 50vw;
      }
      .sicbo-container .sicbo-content .game-sicbogirl-chair > div {
        width: 100%;
        height: 100%;
        background-position: 51% 38%;
      }
      .sicbo-container .sicbo-content .game-sicbogirl-body {
        top: -46.8vw;
        height: 60vw;
      }
      .sicbo-container .sicbo-content .game-sicbogirl-body > div {
        width: 100%;
        height: 100%;
        background-position: 51% 96%;
      }
      .sicbo-container .sicbo-content .game-sicbogirl-hand {
        top: -9.5vw;
        height: 30vw;
        z-index: 3;
      }
      .sicbo-container .sicbo-content .game-sicbogirl-hand > div {
        width: 100%;
        height: 100%;
        background-position: 52.45% 0%;
      }
      .sicbo-container .sicbo-content {
        /** 女孩椅子end **/
        /** 总下注金额 **/
      }
      .sicbo-container .sicbo-content .sicbo-all-money {
        left: 50%;
        top: 27vw;
        z-index: 10;
        width: 50vw;
        margin-left: -25vw;
        height: 5vw;
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
      .sicbo-container .sicbo-content .sicbo-all-money > span {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 0.6em;
      }
      .sicbo-container .sicbo-content .sicbo-all-money > span > em {
        margin: 0 0.18605rem 0 0;
      }
      .sicbo-container .sicbo-content {
        /** 桌面盘口 **/
      }
      .sicbo-container .sicbo-content .sicbo-table-li {
        -webkit-perspective: 800;
        perspective: 800;
        z-index: 2;
        -webkit-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
      .sicbo-container .sicbo-content .sicbo-table-li.sicbo-big {
        left: 4vw;
        top: 22vw;
        -webkit-transform: rotate(35deg);
        transform: rotate(35deg);
      }
      .sicbo-container .sicbo-content .sicbo-table-li.sicbo-small {
        left: 24vw;
        top: 30.5vw;
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li.sicbo-small
        .sicbo-top-money {
        -webkit-transform: rotate(-4deg);
        transform: rotate(-4deg);
      }
      .sicbo-container .sicbo-content .sicbo-table-li.sicbo-single {
        left: 51vw;
        top: 30.5vw;
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li.sicbo-single
        .sicbo-top-money {
        -webkit-transform: rotate(4deg);
        transform: rotate(4deg);
      }
      .sicbo-container .sicbo-content .sicbo-table-li.sicbo-double {
        left: 71vw;
        top: 22vw;
        -webkit-transform: rotate(-34deg);
        transform: rotate(-34deg);
      }
      .sicbo-container .sicbo-content .sicbo-table-li > div {
        width: 25vw;
        height: 55vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-align: center;
      }
      .sicbo-container .sicbo-content .sicbo-table-li > div > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        height: 5vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt {
        height: 27vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-top-money {
        position: relative;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-top-money
        > span {
        -webkit-transform: translate(0, 2.5vw);
        transform: translate(0, 2.5vw);
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-bottom-money {
        position: relative;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-bottom-money
        > span {
        -webkit-transform: translate(0, -2.5vw);
        transform: translate(0, -2.5vw);
      }
      .sicbo-container .sicbo-content .sicbo-table-li > div > div > span {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div
        .sicbo-money-other {
        font-size: 0.5em;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div
        .sicbo-money-other
        > em {
        font-size: 0.8em;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div
        .sicbo-money-self {
        font-size: 0.5em;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div
        .sicbo-money-self
        > em {
        font-size: 0.8em;
      }
      .sicbo-container .sicbo-content .sicbo-table-li > div > div {
        /** 赔率区 **/
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 2vw 0;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt
        > span {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        opacity: 0.5;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt
        > span:nth-of-type(1) {
        font-size: 1.2em;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt
        > span:nth-of-type(2) {
        font-size: 0.8em;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt
        > span:nth-of-type(3) {
        font-size: 0.8em;
      }
      .sicbo-container .sicbo-content {
        /** 开奖器 **/
      }
      .sicbo-container .sicbo-content .sicbo-open-box {
        left: 5vw;
        top: 0.09302rem;
        z-index: 3;
      }
      .sicbo-container .sicbo-content .sicbo-open-box > div {
        width: 25vw;
        height: 33vw;
        background-position: 99% 3%;
      }
      .sicbo-container .sicbo-content {
        /** 骰宝 **/
      }
      .sicbo-container .sicbo-content .sicbo-right-sicbo {
        right: 5vw;
        top: -5vw;
        z-index: 3;
      }
      .sicbo-container .sicbo-content .sicbo-right-sicbo > div {
        position: relative;
        width: 30vw;
        height: 48vw;
      }
      .sicbo-container .sicbo-content .sicbo-right-sicbo > div > div {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .sicbo-container .sicbo-content .sicbo-right-sicbo > div .sicbo-glass {
        z-index: 5;
        background-position: 2.5% 0%;
      }
      .sicbo-container .sicbo-content .sicbo-right-sicbo > div .sicbo-floor {
        z-index: 1;
        background-position: 52% 0%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle {
        z-index: 2;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 15vw;
        height: 15vw;
        margin-top: -7vw;
        /*background-position:6.5% 83%;*/
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow-bg {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: -16.5vw;
        width: 30vw;
        height: 35vw;
        z-index: 1;
        margin-left: -6.5vw;
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow-bg
        > div {
        position: absolute;
        width: 10vw;
        height: 11vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow-bg
        > div:nth-of-type(1) {
        left: 2vw;
        top: 22vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow-bg
        > div:nth-of-type(2) {
        left: 9.7vw;
        top: 17.15vw;
        opacity: 0.7;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow-bg
        > div:nth-of-type(3) {
        left: 16.5vw;
        /*left: 15.5vw;*/
        top: 22.5vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow-bg
        .sicboglass-bg {
        background-position: 32% 81.2%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: -16.5vw;
        width: 30vw;
        height: 35vw;
        z-index: 2;
        margin-left: -6.5vw;
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        > div {
        position: absolute;
        width: 10vw;
        height: 11vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        > div:nth-of-type(1) {
        left: 2vw;
        top: 22vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        > div:nth-of-type(2) {
        left: 9.7vw;
        top: 17.15vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        > div:nth-of-type(3) {
        left: 16.5vw;
        top: 22.5vw;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        .sicboglass-1 {
        background-position: 4% 92.5%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        .sicboglass-2 {
        background-position: 22.6% 92.5%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        .sicboglass-3 {
        background-position: 41% 92.5%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        .sicboglass-4 {
        background-position: 59.5% 92.5%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        .sicboglass-5 {
        background-position: 78% 92.5%;
      }
      .sicbo-container
        .sicbo-content
        .sicbo-right-sicbo
        > div
        .sicbo-right-middle
        .sicbo-right-bg
        .sicboopen-openshow
        .sicboglass-6 {
        background-position: 96% 92.5%;
      }
      .sicbo-container .sicbo-content {
        /*呼吸灯start*/
      }
      .sicbo-container .sicbo-content .sicbolight-main {
        width: 100%;
        height: 100%;
      }
      .sicbo-container .sicbo-content .sicbolight-main > div {
        position: absolute;
        width: 50vw;
        height: 65vw;
        z-index: 2;
      }
      .sicbo-container .sicbo-content .sicbolight-main .sicbolight-single {
        left: -12.5vw;
        top: 25.5vw;
        background-position: 96% 1%;
        -webkit-animation: runauto 1.5s infinite;
        animation: runauto 1.5s infinite;
      }
      .sicbo-container .sicbo-content .sicbolight-main .sicbolight-big {
        left: 4.5vw;
        top: 24vw;
        background-position: 23% 101%;
        -webkit-animation: runauto 1.5s infinite;
        animation: runauto 1.5s infinite;
      }
      .sicbo-container .sicbo-content .sicbolight-main .sicbolight-small {
        left: 45.5vw;
        top: 24vw;
        background-position: 23% 101%;
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        -webkit-animation: runauto 1.5s infinite;
        animation: runauto 1.5s infinite;
      }
      .sicbo-container .sicbo-content .sicbolight-main .sicbolight-double {
        left: 62.5vw;
        top: 25.2vw;
        background-position: 96% 1%;
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        -webkit-animation: runauto 1.5s infinite;
        animation: runauto 1.5s infinite;
      }
      .sicbo-container .sicbo-content {
        /*呼吸灯end*/
      }
      .sicbo-container {
        /** 骰宝开奖层 start **/
      }
      .sicbo-container .sicbo-open-glassbox {
        position: fixed;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /*background:rgba(0,0,0,.3);*/
        z-index: 999;
        /*margin-top: -34vw;*/
        margin-top: -37vw;
        /*display: none;
    &.show{
      display:flex;
    }*/
      }
      .sicbo-container .sicbo-open-glassbox .sicbo-black-bg {
        position: absolute;
        left: -30%;
        width: 500vw;
        height: 200vh;
        top: -80%;
        z-index: -1;
        background: rgba(0, 0, 0, 0.3);
      }
      .sicbo-container .sicbo-open-glassbox > div {
        position: relative;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        z-index: 2;
      }
      .sicbo-container .sicbo-open-glassbox > div.toMini {
        -webkit-transform: scale(0.45) translateX(60vw) translateY(-12vw);
        transform: scale(0.45) translateX(60vw) translateY(-12vw);
        /*transform: scale(.55) translateX(56vw) translateY(-17vw);*/
      }
      .sicbo-container .sicbo-open-glassbox > div {
        /*骰宝阴影*/
      }
      .sicbo-container .sicbo-open-glassbox > div .sicbo-shadow {
        position: absolute;
        z-index: 0;
        width: 50vw;
        height: 50vw;
        bottom: -6vw;
        left: -1.5vw;
        -webkit-transform: scale(1.8);
        transform: scale(1.8);
      }
      .sicbo-container .sicbo-open-glassbox > div .sicbo-shadow .sicbo-floor {
        height: 100%;
        background-position: 52% -2%;
      }
      .sicbo-container .sicbo-open-glassbox > div .sicbo-open-sicbo {
        width: 50vw;
        height: 58vw;
      }
      .sicbo-container .sicbo-open-glassbox > div .sicbo-open-sicbo > div {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-glass {
        background-position: -1.5% 64%;
        z-index: 9;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        z-index: 8;
        height: 100%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-middlebox {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        left: 50%;
        margin-top: -4vw;
        margin-left: -15vw;
        width: 30vw;
        height: 35vw;
        bottom: 15vw;
        background: url(https://images.imags-google.com/game/saibao-stand.png)
          no-repeat;
        background-size: 492.8vw auto;
        -webkit-animation: sicborun 1.5s forwards steps(15, start) 1;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow-bg {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: -8vw;
        width: 30vw;
        height: 35vw;
        left: 50%;
        bottom: 15vw;
        margin-left: -15vw;
        z-index: 1;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow-bg
        > div {
        position: absolute;
        width: 10vw;
        height: 11vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow-bg
        > div:nth-of-type(1) {
        left: 2vw;
        top: 22vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow-bg
        > div:nth-of-type(2) {
        left: 9.7vw;
        top: 17.15vw;
        opacity: 0.7;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow-bg
        > div:nth-of-type(3) {
        left: 16.5vw;
        /*left: 15.5vw;*/
        top: 22.5vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow-bg
        .sicboglass-bg {
        background-position: 32% 81.2%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: -8vw;
        width: 30vw;
        height: 35vw;
        left: 50%;
        margin-left: -15vw;
        margin-bottom: 0vw;
        bottom: 15vw;
        z-index: 2;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        > div {
        position: absolute;
        width: 10vw;
        height: 11vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        > div:nth-of-type(1) {
        left: 2vw;
        top: 22vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        > div:nth-of-type(2) {
        left: 9.7vw;
        top: 17.15vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        > div:nth-of-type(3) {
        left: 16.5vw;
        /*left: 15.5vw;*/
        top: 22.5vw;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        .sicboglass-1 {
        background-position: 4% 92.5%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        .sicboglass-2 {
        background-position: 22.6% 92.5%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        .sicboglass-3 {
        background-position: 41% 92.5%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        .sicboglass-4 {
        background-position: 59.5% 92.5%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        .sicboglass-5 {
        background-position: 78% 92.5%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-middle
        .sicboopen-openshow
        .sicboglass-6 {
        background-position: 96% 92.5%;
      }
      .sicbo-container
        .sicbo-open-glassbox
        > div
        .sicbo-open-sicbo
        .sicboopen-floor {
        background-position: 101.5% 64%;
      }
      .sicbo-container {
        /** 骰宝开奖层 end **/
      }
      .sicbo-open-fixed {
        position: fixed;
        z-index: 290;
        bottom: 30vw;
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .sicbo-open-fixed .sicbo-open-numbers {
        position: relative;
        width: 50vw;
        height: 30vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 auto;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-animation: sicboLotteryShow 0.5s forwards;
        animation: sicboLotteryShow 0.5s forwards;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div.sicbodot-show {
        padding-right: 1vw;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbo-opennum-li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 12vw;
        height: 9vw;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-dot {
        background-position: 82% 95.5%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-big {
        background-position: 78.5% 75%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-small {
        background-position: 78.5% 85.2%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div {
        /** 点数开始 **/
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-18 {
        background-position: 78% 64.5%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-17 {
        background-position: 78% 53.9%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-16 {
        background-position: 78% 43.8%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-15 {
        background-position: 78% 33.5%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-14 {
        background-position: 78% 23.1%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-13 {
        background-position: 78% 12.9%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-12 {
        background-position: 78% 2.5%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-11 {
        background-position: 12% 85.5%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-10 {
        background-position: 12% 75.1%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-9 {
        background-position: 8% 64.6%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-8 {
        background-position: 8% 54.3%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-7 {
        background-position: 8% 43.8%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-6 {
        background-position: 8% 33.4%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-5 {
        background-position: 8% 23.1%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-4 {
        background-position: 8% 12.7%;
      }
      .sicbo-open-fixed .sicbo-open-numbers > div .sicbonumber-3 {
        background-position: 8% 2.5%;
      }
      /** 文字配字 **/
      .bordertxt {
        position: relative;
        font-weight: bold;
        -webkit-text-stroke: 0.04651rem black;
      }
      .bordertxt:before {
        position: absolute;
        z-index: 3;
        left: 0;
        top: 0;
        font-weight: bold;
        content: attr(data);
        -webkit-text-stroke: 0;
      }
      .colortxt-green {
        color: #84c57f;
        /* background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0, 128, 0, 1)), to(rgba(51, 51, 51, 1)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
      }
      .colortxt-red {
        color: #e76767;
      }
      .colortxt-blue {
        color: #7c98c1;
      }
      .colortxt-purple {
        color: #c97a98;
      }
      /** 亮绿色 **/
      .color-lightgreen {
        color: #82c27e;
      }
      /** 亮黄色 **/
      .color-lightyellow {
        color: #f8dbb6;
      }
      /** 淡绿 **/
      .color-greenmiddle {
        color: #6c9e64;
      }
      /** 深绿 **/
      .color-deepgreen {
        color: #182f1f;
      }
      /** 阴影 **/
      .color-shadow-green {
        text-shadow: 0.04651rem 0.04651rem 0.02326rem
          rgba(108, 158, 100, 0.56078);
      }
      @-webkit-keyframes runauto {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes runauto {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes sicborun {
        0% {
          background-position: 0% 66%;
        }
        100% {
          background-position: 99.8% 66%;
        }
      }
      @keyframes sicborun {
        0% {
          background-position: 0% 66%;
        }
        100% {
          background-position: 99.8% 66%;
        }
      }
      @-webkit-keyframes sicboLotteryShow {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @keyframes sicboLotteryShow {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      /** 适配不同屏幕显示 **/
      /** 兼容处理开始 **/
      /** 320宽 **/
      /** 适配不同屏幕显示 **/
      /** 兼容处理开始 **/
      /** 320宽 **/
      @media screen and (min-width: 320px) and (min-height: 480px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 500px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 530px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 560px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 568px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 320px) and (min-height: 580px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
      }
      /** 360宽 **/
      @media screen and (min-width: 360px) and (min-height: 480px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.68);
          transform: scale(0.68);
          bottom: -12vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 500px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -11vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 530px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.78);
          transform: scale(0.78);
          bottom: -10vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 550px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -7vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 580px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: -5vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 600px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 620px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 360px) and (min-height: 650px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
      }
      /** 375宽 **/
      @media screen and (min-width: 375px) and (min-height: 480px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -16vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 490px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -13vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 520px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -11vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 550px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.78);
          transform: scale(0.78);
          bottom: -10vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 570px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -8vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 590px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: -7vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 600px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: -5vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 620px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -4vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 650px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 660px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 667px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: -1vw;
        }
      }
      @media screen and (min-width: 375px) and (min-height: 670px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
      }
      /* 393 */
      @media screen and (min-width: 393px) and (min-height: 500px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.62);
          transform: scale(0.62);
          bottom: -13vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 530px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.67);
          transform: scale(0.67);
          bottom: -11vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 550px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.69);
          transform: scale(0.69);
          bottom: -11vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 560px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.73);
          transform: scale(0.73);
          bottom: -10vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 580px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.78);
          transform: scale(0.78);
          bottom: -9vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 600px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -8vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 620px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 640px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: -5vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 660px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: -4vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 680px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 700px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 393px) and (min-height: 720px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
      }
      /** 411宽 **/
      @media screen and (min-width: 411px) and (min-height: 520px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.63);
          transform: scale(0.63);
          bottom: -15vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 540px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -13vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 560px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.68);
          transform: scale(0.68);
          bottom: -11vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 580px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -10vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 600px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: -8vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 630px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 650px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 680px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -4vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 700px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 720px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 411px) and (min-height: 740px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
      }
      /** 600 **/
      @media screen and (min-width: 600px) and (min-height: 800px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -12vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 830px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.68);
          transform: scale(0.68);
          bottom: -11vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 850px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -10vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 870px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: -9vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 890px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.78);
          transform: scale(0.78);
          bottom: -9vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 900px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.78);
          transform: scale(0.78);
          bottom: -8vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 930px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -7vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 950px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: -6vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 980px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -5vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 1020px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: -3vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 1050px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -2vw;
        }
      }
      @media screen and (min-width: 600px) and (min-height: 1090px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
      }
      /** 768 **/
      @media screen and (min-width: 768px) and (min-height: 980px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.63);
          transform: scale(0.63);
          bottom: -13vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1030px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -12vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1080px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -10vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1150px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.76);
          transform: scale(0.76);
          bottom: -8vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1180px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -8vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1250px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -6vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1280px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -4vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1300px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: -4vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1350px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -2vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      @media screen and (min-width: 768px) and (min-height: 1400px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.03);
          transform: scale(1.03);
        }
      }
      /** 800 **/
      @media screen and (min-width: 800px) and (min-height: 1000px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -16vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1050px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -14vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1100px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.7);
          transform: scale(0.7);
          bottom: -12vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1150px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.75);
          transform: scale(0.75);
          bottom: -10vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1200px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.78);
          transform: scale(0.78);
          bottom: -8vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1250px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -6vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1300px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: -5vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1350px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.93);
          transform: scale(0.93);
          bottom: -3vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1400px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -2vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      @media screen and (min-width: 800px) and (min-height: 1450px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.08);
          transform: scale(1.08);
        }
      }
      /** 1024 */
      @media screen and (min-width: 1024px) and (min-height: 1300px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.63);
          transform: scale(0.63);
          bottom: -15vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1350px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.65);
          transform: scale(0.65);
          bottom: -13vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1400px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.68);
          transform: scale(0.68);
          bottom: -11vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1450px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.72);
          transform: scale(0.72);
          bottom: -10vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1500px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.76);
          transform: scale(0.76);
          bottom: -9vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1550px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          bottom: -8vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1600px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.85);
          transform: scale(0.85);
          bottom: -7vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1650px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.88);
          transform: scale(0.88);
          bottom: -6vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1700px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
          bottom: -5vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1750px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.95);
          transform: scale(0.95);
          bottom: -3vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1800px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
          bottom: -2vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      @media screen and (min-width: 1024px) and (min-height: 1850px) {
        .sicbo-container .sicbo-content {
          -webkit-transform: scale(1);
          transform: scale(1);
          bottom: 0vw;
        }
        #sicboTx .dealer {
          -webkit-transform: scale(1.37);
          transform: scale(1.37);
        }
      }
      /* 覆盖原有样式 */
      .sicbo-container
        .sicbo-content
        .sicbo-table-li
        > div
        > div.sicbo-middle-txt {
        position: relative;
      }
      .content-box {
        position: absolute;
        height: 80%;
        width: 60%;
        top: 0.5rem;
      }
      #content1.content-box {
        width: 50%;
      }
      #content2.content-box,
      #content3.content-box {
        left: 1rem;
      }
      #content4.content-box {
        left: 1.5rem;
        height: 60%;
        width: 50%;
        top: 1rem;
      }
      .sicbo-opacity-ele {
        -webkit-perspective: 800;
        perspective: 800;
        z-index: 2;
        -webkit-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
      .sicbo-opacity-ele0 {
        -webkit-transform: rotate(35deg) scale(0.7, 1);
        transform: rotate(35deg) scale(0.7, 1);
        border-radius: 30% 30% 0 0;
        /* background: red; */
        left: -1.39535rem !important;
      }
      .sicbo-opacity-ele1 {
        -webkit-transform: rotate(15deg) scale(0.9, 1);
        transform: rotate(15deg) scale(0.9, 1);
        border-radius: 50% 50% 0 0;
        z-index: 21 !important;
        /* background: green; */
      }
      .sicbo-opacity-ele2 {
        -webkit-transform: rotate(-15deg) scale(0.9, 1);
        transform: rotate(-15deg) scale(0.9, 1);
        border-radius: 50% 50% 0 0;
        z-index: 21 !important;
        /* background: red; */
      }
      .sicbo-opacity-ele3 {
        -webkit-transform: rotate(-34deg) scale(0.7, 1);
        transform: rotate(-34deg) scale(0.7, 1);
        border-radius: 50% 50% 0 0;
        /* background: green; */
        left: 70% !important;
      }
      .set-animate-site {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
      #sicboDealer .dealer {
        /* width: 90vw;
  height: 80vw;
  bottom: -35.8vw;
  z-index: 9;
  left: 5vw; */
        width: 180vw;
        height: 160vw;
        bottom: -74.8vw;
        z-index: 9;
        left: -39vw;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
      }
      #sicboTx .dealer {
        width: 131vw;
        height: 59vw;
        top: 0;
        z-index: 1;
        left: -16vw;
      }
</style>