<template>
  <div class="js" v-show="num>0">
    <div class="det">
      <van-button type="info">
        合计:&nbsp;{{add}}&nbsp;注
        <span class="iconfont icon-sanjiaoxing1"></span>
      </van-button>
      <van-button type="warning">{{count}} 元</van-button>
    </div>
    <div class="sub">
      <van-button type="danger">立即下注</van-button>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
export default {
  props: ["dt", "name"],
  name: "JSuan",
  data() {
    return {
      num: 0,
      sprice: 2,
      huilv: 1
    };
  },
  watch: {
    name: function() {
      this.num = 0;
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
  methods: {
    suanfa(x) {
      // 1星算法
      if (this.name.includes("一星")) {
        let n = 0;
        if (x.length > 0) {
          x.map(i => {
            i.map(c => {
              if (c >= 0) {
                n++;
              }
            });
          });
          this.num = n;
          return n;
        }
      } //--end
      //前二后二直选组选复式
      if (this.name.includes("二") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          let n = 0;
          if (x.length == 2) {
            if (x[0].length > 0 && x[1].length > 0) {
              n = x[0].length * x[1].length;
              this.num = n;
              return n;
            }
          }
        } else {
          if ((x.length = 1)) {
            if (x[0].length > 0) {
              let n = 0;
              for (let i = 0; i < x[0].length; i++) {
                n += i;
              }
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
        this.num = ls.length;
        return ls.length;
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
        this.num = ls.length;
        return ls.length;
      } //end-------------------------------
      if (this.name.includes("三") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          if (x.length == 3) {
            if (x[0].length > 0 && x[1].length > 0 && x[2].length > 0) {
              let n = x[0].length * x[1].length * x[2].length;
              // for (let a = 0; a < 10; a++) {
              //   for (let b = 0; b < 10; b++) {
              //     for (let c = 0; c < 10; c++) {
              //       n=a*b*c
              //     }
              //   }
              // }
              this.num = n;
              return n;
            }
          }
        }
      } //end-----------------
      if (this.name.includes("组六")) {
        if (x[0].length >= 3) {
          let n = x[0].length - 2;
          let ct = 0;
          console.log(n);
          
          for (let i = 0; i < n; i++) {
            for (let t = 0; t < i; t++) {
              ct += t+i
            }
          }
          this.num = ct;
          return ct;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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