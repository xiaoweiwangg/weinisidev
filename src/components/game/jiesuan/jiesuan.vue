<template>
  <div class="js" v-show="isshow && num > 0">
    <div class="type" v-show="istype">
      <van-button type="warning">模式:</van-button>
      <van-button
        :class="{ ck: isck(tp, 1) }"
        @click="ck(1)"
        plain
        hairline
        type="primary"
        color="#07c160"
      >元</van-button>
      <van-button
        :class="{ ck: isck(tp, 0.1) }"
        @click="ck(0.1)"
        plain
        hairline
        type="primary"
        color="#07c160"
      >角</van-button>
      <van-button
        :class="{ ck: isck(tp, 0.01) }"
        @click="ck(0.01)"
        plain
        hairline
        type="primary"
        color="#07c160"
      >分</van-button>
      <van-stepper v-model="ratel" input-width="40px" button-size="44px" />
    </div>
    <div class="det">
      <van-button type="info" @click="detshow">
        投注篮合计:&nbsp;{{ add }}&nbsp;注
        <span class="iconfont icon-sanjiaoxing1"></span>
      </van-button>
      <van-button type="warning">{{ (num * huilv * tp * sprice * ratel).toFixed(2) }} 元</van-button>
    </div>
    <div class="sub">
      <van-button type="danger" @click="car1" :disabled="dis">立即下注</van-button>
    </div>
    <van-dialog v-model="sh" :title="name" show-cancel-button>
      <div class="car">{{ numcar }}</div>
    </van-dialog>
  </div>
</template>

<script>
import { Toast } from "vant";
import _ from "underscore";
import { Stepper } from "vant";
import { log } from "util";
export default {
  props: [
    "dt",
    "name",
    "cl",
    "gamelist",
    "mode",
    "playdate",
    "playgame",
    "dis"
  ],
  name: "JSuan",
  components: {
    [Stepper.name]: Stepper,
    [Toast.name]: Toast
  },
  data() {
    return {
      tp: 1,
      ratel: 1,
      istype: true,
      sh: false,
      isshow: true,
      num: 0,
      sprice: 2,
      huilv: 1,
      numcar: "",
      car: null
    };
  },
  watch: {
    name: function() {
      this.num = 0;
      this.isshow = false;
    },
    dt: function(x) {
      this.isshow = true;
    }
  },
  computed: {
    count() {
      return this.num * this.huilv * this.sprice;
    },
    add() {
      return this.suanfa(this.dt);
    }
  },
  mounted() {},
  methods: {
    car1() {
      let shopcar = {};
      (shopcar.username = JSON.parse(sessionStorage.getItem("userinfo")).name),
        (shopcar.userinput = JSON.stringify({ data: this.gamelist }));
      shopcar.buydet = JSON.stringify({ data: this.car });
      shopcar.playdate = `${this.playdate + 1}期`;
      shopcar.playname = this.name;
      shopcar.playgame = this.playgame;
      shopcar.playratel = this.ratel;
      shopcar.price = this.ratel * this.num * 2 * this.tp;
      shopcar.dl = this.num;
      shopcar.iskj = 0;
      shopcar.playmode = this.tp;
      console.log(shopcar);
      this.axios.post("/shopcar", shopcar).then(x => {
        if (x.data.msg == "余额不足") {
          this.$notify({
            message: "您的余额不足,请充值"
          });
          Toast.fail("订单提交失败");
        } else if (x.data.msg == "ok") {
          Toast.success("订单提交成功!");
        }
      });
    },
    isck(x, y) {
      if (x == y) {
        return true;
      } else {
        return false;
      }
    },
    ck(x) {
      this.tp = x;
    },
    detshow() {
      this.$dialog;
      this.sh = true;
    },
    show() {
      this.isshow = true;
    },
    suanfa(x) {
      // 1星算法

      if (this.name.includes("一星")) {
        let n = 0;
        if (x.length > 0) {
          this.show();
          x.map(i => {
            i.map(c => {
              if (c >= 0) {
                n++;
              }
            });
            i.join("");
          });
          this.car = x;
          this.numcar = x.join("__|");
          this.num = n;
          return n;
        }
      } //--end
      //前二后二直选组选复式
      if (this.name.includes("二") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          let n = 0;
          let ns = [];
          if (x.length == 2) {
            if (x[0].length > 0 && x[1].length > 0) {
              let s = "";
              for (let tv = 0; tv < x[0].length; tv++) {
                for (let t = 0; t < x[1].length; t++) {
                  s += x[0][tv] + "" + x[1][t] + "\r\n";
                  ns.push(x[0][tv] + "" + x[1][t]);
                }
              }
              this.car = ns;
              this.numcar = s;
              n = x[0].length * x[1].length;
              this.num = n;
              return n;
            }
          }
        } else {
          if ((x.length = 1)) {
            if (x[0].length > 0) {
              let n = 0;
              let sec = x[0];
              let s = "";
              let tel = [];
              for (let i = 0; i < x[0].length; i++) {
                n += i;
                for (let v = 0; v < sec.length; v++) {
                  if (x[0][i] !== sec[v]) {
                    tel.push([x[0][i], sec[v]].sort((a, b) => a - b).join(""));
                  }
                }
              }
              tel = _.uniq(tel);
              s += tel.join("\r\n");
              this.car = tel;
              this.numcar = s;
              this.num = n;
              return n;
            }
          }
        }
      } //end----------
      if (this.name.includes("二") && this.name.includes("直选和值")) {
        let n = 0;
        let ls = [];
        let hz = _.range(0, 19);
        for (let a = 0; a < x[0].length; a++) {
          for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {
              if (i + k == x[0][a]) {
                ls.push(i + "" + k);
              }
            }
          }
        }
        this.car = ls;
        this.numcar = ls.join("\r\n");
        this.num = ls.length;
        return ls.length;
      } //end------------------------
      if (this.name.includes("二") && this.name.includes("组选和值")) {
        let n = 0;
        let ls = [];
        let it = [];
        let hz = _.range(0, 19);
        for (let a = 0; a < x[0].length; a++) {
          for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {
              if (i!==k&&(i + k == x[0][a])) {
                it.push([i, k].sort((a, b) => a - b).join(""));
                ls.push(i + "" + k);
              }
            }
          }
        }
        this.car = _.uniq(it);
        this.numcar = _.uniq(it).join("\r\n");
        this.num = _.uniq(it).length;
        return _.uniq(it).length;
      } //end------------------------
      if (this.name.includes("二") && this.name.includes("直选跨度")) {
        let n = 0;
        let ls = [];
        let hz = _.range(0, 19);
        for (let a = 0; a < x[0].length; a++) {
          for (let i = 0; i < 10; i++) {
            for (let k = 0; k < 10; k++) {
              if (Math.abs(i - k) == x[0][a]) {
                ls.push(i + "" + k);
              }
            }
          }
        }
        this.car = ls;
        this.numcar = ls.join("\r\n");
        this.num = ls.length;
        return ls.length;
      } //end-------------------------------
      if (this.name.includes("三") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          if (x.length == 3) {
            let ls = [];
            for (let tv = 0; tv < x[0].length; tv++) {
              for (let t = 0; t < x[1].length; t++) {
                for (let tc = 0; tc < x[2].length; tc++) {
                  ls.push([x[0][tv], x[1][t], x[2][tc]].join(""));
                }
              }
            }
            this.car = ls;
            this.numcar = ls.join("\r\n");
            if (x[0].length > 0 && x[1].length > 0 && x[2].length > 0) {
              let n = x[0].length * x[1].length * x[2].length;
              this.num = n;
              return n;
            }
          }
        }
      } //end-----------------
      function loop(x) {
        let res = 0;
        for (let i = 0; i <= x; i++) {
          res += i;
        }
        return res;
      }
      if (this.name.includes("三") && this.name.includes("组六")) {
        if (x[0].length >= 3) {
          let n = x[0].length - 2;
          let ct = 0;
          let dic = _.range(0, n + 1);
          for (let i = 0; i < dic.length; i++) {
            ct += loop(dic[i]);
          }
          this.numcar = "";
          this.car = "";
          //------------
          let ls = [];
          for (let a = 0; a < 10; a++) {
            for (let b = 0; b < 10; b++) {
              for (let c = 0; c < 10; c++) {
                if (
                  a != b &&
                  a != c &&
                  b != c &&
                  (b != a) & (c != a) &&
                  c != b
                ) {
                  ls.push([a, b, c].sort((a, b) => a - b).join(""));
                }
              }
            }
          }
          let ty = [];
          _.uniq(ls).map(t => {
            if (
              x[0].join("").includes(t[0]) &&
              x[0].join("").includes(t[1]) &&
              x[0].join("").includes(t[2])
            ) {
              ty.push(t);
            }
          });
          this.car = ty;
          this.numcar = ty.join("\r\n");
          this.num = ct;
          return ct;
        }
      } //end***************
      if (this.name.includes("三") && this.name.includes("跨度")) {
        if (x[0].length > 0) {
          let ls = [];
          let n = "";
          for (let i = 0; i < x[0].length; i++) {
            for (let a = 0; a < 10; a++) {
              for (let b = 0; b < 10; b++) {
                for (let c = 0; c < 10; c++) {
                  if (Math.max(a, b, c) - Math.min(a, b, c) == x[0][i]) {
                    n = a + "" + b + c;
                    ls.push(n);
                  }
                }
              }
            }
          }
          this.car = ls;
          this.numcar = ls.join("\r\n");
          this.num = ls.length;
          return ls.length;
        }
      } //ende-------------------------
      if (this.name.includes("二") && this.name.includes("不定位包胆")) {
        if (x[0].length > 0) {
          let ls = [];
          x[0].map(c => {
            for (var i = 0; i < 10; i++) {
              for (var ic = 0; ic < 10; ic++) {
                if (i == c && c != ic) {
                  ls.push([i, ic].join(""));
                }
              }
            }
          });
          this.car = ls;
          this.numcar = ls.join("\r\n");
          this.num = x[0].length * 9;
          return x[0].length * 9;
        }
      } //-------------------
      if (this.name.includes("一码不定位")) {
        if (x[0].length >= 1) {
          this.car = x[0];
          this.numcar = x[0].join("\r\n");
          this.num = x[0].length;
          return x[0].length;
        }
      } //-------------------
      if (this.name.includes("二码不定位")) {
        if ((x.length = 1)) {
          if (x[0].length > 0) {
            let n = 0;
            for (let i = 0; i < x[0].length; i++) {
              n += i;
            }
            this.car = x[0];
            this.numcar = x[0].join("\r\n");
            this.num = n;
            return n;
          }
        }
      } //-------------------
      if (this.name.includes("三码不定位")) {
        if (x[0].length >= 3) {
          let n = x[0].length - 2;
          let ct = 0;
          let dic = _.range(0, n + 1);
          for (let i = 0; i < dic.length; i++) {
            ct += loop(dic[i]);
          }
          this.car = x[0];
          this.numcar = x[0].join("\r\n");
          this.num = ct;
          return ct;
        }
      } //-------------------
      if (this.name.includes("三") && this.name.includes("组三")) {
        if ((x.length = 1)) {
          if (x[0].length > 1) {
            let sec = x[0];
            let s = "";
            let tel = [];
            for (let i = 0; i < x[0].length; i++) {
              n += i;
              for (let v = 0; v < sec.length; v++) {
                if (x[0][i] !== sec[v]) {
                  tel.push(
                    [x[0][i], sec[v], x[0][i]].sort((a, b) => a - b).join("")
                  );
                }
              }
            }
            tel = _.uniq(tel);
            s += tel.join("\r\n");
            this.car = tel;
            this.numcar = s;
            //-----------
            let n = 0;
            for (let i = 0; i < x[0].length; i++) {
              n += i;
            }
            this.num = n * 2;
            return n * 2;
          }
        }
      } //end-------------------------
      if (this.name.includes("三") && this.name.includes("直选和值")) {
        if (x[0].length > 0) {
          let ls = [];
          let n = "";
          for (let i = 0; i < x[0].length; i++) {
            for (let a = 0; a < 10; a++) {
              for (let b = 0; b < 10; b++) {
                for (let c = 0; c < 10; c++) {
                  if (a + b + c == x[0][i]) {
                    n = a + "" + b + c;
                    ls.push(n);
                  }
                }
              }
            }
          }
          this.car = ls;
          this.numcar = ls.join("\r\n");
          this.num = ls.length;
          return ls.length;
        }
      } //end-----------------------
      if (this.name.includes("三") && this.name.includes("组选和值")) {
        if (x[0].length > 0) {
          let ls = [];
          let tip = [];
          let n = "";
          for (let a = 0; a < 10; a++) {
            for (let b = 0; b < 10; b++) {
              for (let c = 0; c < 10; c++) {
                tip.push([a, b, c].sort((d, e) => d - e).join(""));
                tip = _.uniq(tip);
              }
            }
          }
          for (let i = 0; i < x[0].length; i++) {
            tip.forEach(el => {
              if (el[0] * 1 + el[1] * 1 + el[2] * 1 == x[0][i]) {
                ls.push(el);
              }
            });
          }
          this.car = ls;
          this.numcar = ls.join("\r\n");
          this.num = ls.length;
          return ls.length;
        }
      } //end-----------------------
      if (this.name.includes("五") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          if (x.length == 5) {
            let ls = [];
            if (
              x[0].length > 0 &&
              x[1].length > 0 &&
              x[2].length > 0 &&
              x[3].length > 0 &&
              x[4].length > 0
            ) {
              let n =
                x[0].length *
                x[1].length *
                x[2].length *
                x[3].length *
                x[4].length;
              let ls = [];
              for (var a = 0; a < x[0].length; a++) {
                for (var b = 0; b < x[1].length; b++) {
                  for (var c = 0; c < x[2].length; c++) {
                    for (var d = 0; d < x[3].length; d++) {
                      for (var e = 0; e < x[4].length; e++) {
                        ls.push(
                          [x[0][a], x[1][b], x[2][c], x[3][d], x[4][e]].join("")
                        );
                      }
                    }
                  }
                }
              }
              this.car = ls;
              this.numcar = ls.join("\r\n");
              this.num = n;
              return n;
            }
          }
        }
      } //end-----------------
      if (this.name.includes("四") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          if (x.length == 4) {
            if (
              x[0].length > 0 &&
              x[1].length > 0 &&
              x[2].length > 0 &&
              x[3].length > 0
            ) {
              let ls = [];
              for (var a = 0; a < x[0].length; a++) {
                for (var b = 0; b < x[1].length; b++) {
                  for (var c = 0; c < x[2].length; c++) {
                    for (var d = 0; d < x[3].length; d++) {
                      ls.push([x[0][a], x[1][b], x[2][c], x[3][d]].join(""));
                    }
                  }
                }
              }
              this.car = ls;
              this.numcar = ls.join("\r\n");
              let n = x[0].length * x[1].length * x[2].length * x[3].length;
              this.num = n;
              return n;
            }
          }
        }
      } //end-----------------
      if (this.name.includes("单式")) {
        if (x[0].length == 0 && x[0].length == 0) {
          this.num = 0;
          return 0;
        }
        this.car = x;
        this.numcar = x.join("\r\n");
        this.num = x.length;
        return x.length;
      } //end----------------
    }
  }
};
</script>

<style lang="scss" scoped>
.ck {
  background-color: red;
}
.type {
  position: absolute;
  bottom: 44px;
  left: 0;
  right: 0;
  display: flex;
  background-color: #f1f3f5;
}
.van-stepper {
  .van-stepper__plus,
  .van-stepper__minus {
    width: 50px;
    height: 44px;
    background-color: green;
  }
}
.car {
  height: 100px;
  width: 300px;
  overflow: auto;
  padding: 30px;
}
.js {
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  display: flex;
  background-color: #ccc;
  .icon-sanjiaoxing1 {
    color: rgb(243, 99, 99);
  }
  .det {
    flex: 1;
  }
}
</style>
