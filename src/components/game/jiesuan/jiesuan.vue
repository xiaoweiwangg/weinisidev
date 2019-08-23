<template>
  <div class="js" v-show="isshow">
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
import { log } from 'util';
export default {
  props: ["dt", "name","cl"],
  name: "JSuan",
  data() {
    return {
      isshow:true,
      num: 0,
      sprice: 2,
      huilv: 1
    };
  },
  watch: {
    name: function() {
      this.num = 0;
      console.log("切换了");
      this.isshow=false
      
    },
    dt:function(x){
      this.isshow=true
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
  mounted(){
    console.log(this.cl);
    
  },
  methods: {
      show(){
         this.isshow=true
       },
    suanfa(x) {
      // 1星算法
      if (this.name.includes("一星")) {
        let n = 0;
        if (x.length > 0) {
          this.show()
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
          this.num = ls.length;
          return ls.length;
        }
      } //ende-------------------------
      if (this.name.includes("二") && this.name.includes("不定位包胆")) {
        if (x[0].length >= 1) {
          this.num = x[0].length * 9;
          return x[0].length * 9;
        }
      } //-------------------
      if (this.name.includes("一码不定位")) {
        if (x[0].length >= 1) {
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
          this.num = ct;
          return ct;
        }
      } //-------------------
      if (this.name.includes("三") && this.name.includes("组三")) {
        if ((x.length = 1)) {
          if (x[0].length > 0) {
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
          this.num = ls.length;
          return ls.length;
        }
      } //end-----------------------
      if (this.name.includes("五") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          if (x.length == 5) {
            if (x[0].length > 0 && x[1].length > 0 && x[2].length > 0&& x[3].length > 0&& x[4].length > 0) {
              let n = x[0].length * x[1].length * x[2].length* x[3].length* x[4].length;
              this.num = n;
              return n;
            }
          }
        }
      } //end-----------------
      if (this.name.includes("四") && this.name.includes("复式")) {
        if (this.name.includes("直选")) {
          if (x.length == 4) {
            if (x[0].length > 0 && x[1].length > 0 && x[2].length > 0&& x[3].length > 0) {
              let n = x[0].length * x[1].length * x[2].length* x[3].length
              this.num = n;
              return n;
            }
          }
        }
      } //end-----------------
      if (this.name.includes("单式")) {
        console.log(x);
        if(x[0].length==0&&x[0].length==0){
          this.num=0
          return 0
        }
        this.num=x.length
        return x.length
      } //end----------------
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