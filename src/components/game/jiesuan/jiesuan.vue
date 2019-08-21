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
      if (this.name.includes("一星")) {
        let n = 0;
        x.map(a => {
          a.map(b => {
            if (b >= 0) {
              n++;
            }
          });
        });
        this.num = n;
        return n;
      }
      if (this.name.includes("二") && this.name.includes("直选")&&!this.name.includes("和值")&&!this.name.includes("跨度")) {
        let n = 0;
        if (x[0].length > 1 && x[1].length > 0) {
          n = x[0].length * x[1].length;
          this.num = n;
          return n;
        }
      }
      if (this.name.includes("二") && this.name.includes("直选")&&this.name.includes("和值")) {
        let n = 0;
        let ls=[]
        x[0].map(a=>{
            for(let i=0;i<10;i++){
                for(let k=0;k<10;k++){
                    if(i+k==a){
                        ls.push(i+""+k)
                    }
                }
            }
        })
        this.num=ls.length
        return ls.length
      }
      if (this.name.includes("二") && this.name.includes("直选")&&this.name.includes("跨度")) {
        let ls=[]
        x[0].map(a=>{
            for(let i=0;i<10;i++){
                for(let k=0;k<10;k++){
                    if(i-k==a){
                    ls.push(i+""+k)
                    }
                }
            }
        })
        console.log(ls);
        this.num=ls.length
        return ls.length
      }
      if (this.name.includes("二") && this.name.includes("组选")&&!this.name.includes("和值")) {
        let n = 0;
        if (x[0].length > 0) {
          for (let i = 0; i < x[0].length; i++) {
            n += i;
          }
          this.num = n;
          return n;
        }
      }
      if (
        this.name.includes("三") &&
        this.name.includes("直选") &&
        !this.name.includes("和值")
      ) {
        let n = 0;
        if (x[0].length > 0 && x[1].length > 0 && x[2].length > 0) {
          n = x[0].length * x[1].length * x[2].length;
          this.num = n;
          return n;
        }
      }
      if (
        this.name.includes("三") &&
        this.name.includes("组选") &&
        !this.name.includes("和值")
      ) {
        let n = 0;
        if (x[0].length > 0 && x[1].length > 0 && x[2].length > 0) {
          n = x[0].length * x[1].length * x[2].length;
          this.num = n;
          return n;
        }
      }
      if (
        this.name.includes("三") &&
        this.name.includes("直选") &&
        this.name.includes("和")
      ) {
        let n = 0;
        let ls = [];
        let hz = _.range(0, 28);
        if (x[0].length > 0) {
          x[0].map(a => {
            console.log(a);
            for (let i = 0; i < 10; i++) {
              for (let s = 0; s < 10; s++) {
                for (let g = 0; g < 10; g++) {
                  if (i + g + s == a) {
                    ls.push(i + "" + s + "" + g);
                  }
                }
              }
            }
          });
          this.num = ls.length;
          return ls.length;
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