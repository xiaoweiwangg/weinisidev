<template>
  <div class="pos">
    <ul v-for="(item, i) in gamelist" :key="i">
      <div class="btn">
        <van-button @click="chek(i, 9)" type="primary">大</van-button>
        <van-button @click="chek(i, 0)" type="primary">小</van-button>
        <van-button @click="chek(i, 1)" type="primary">单</van-button>
        <van-button @click="chek(i, 2)" type="primary">双</van-button>
        <van-button @click="chek(i, 10)" type="primary">全</van-button>
        <van-button @click="chek(i, -1)" type="warning">清空</van-button>
      </div>
      <div class="lot">
        <div class="wei">{{ namelist[i] }}</div>
        <div class="lottors">
          <g-lottor
            @up="change"
            :list="gamelist[i]"
            v-for="(item, index) in num"
            :key="index"
            :cont="index"
            :pos="i"
          ></g-lottor>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import GLottor from "../lottor/lotter";
export default {
  props: ["namelist", "gamelist","num","name"],
  name: "GPos",
  components: {
    GLottor
  },
  data() {
    return {
    };
  },
  mounted() {},
  watch:{
    gamelist:function(x){
      this.$emit("submi",x)
    }
  },
  methods: {
    change(a, b) {
      if (this.gamelist[b].indexOf(a) < 0) {
        //**************************>=是重点啊 */
        this.gamelist[b].push(a);
        this.gamelist[b].sort((a1, a2) => a1 - a2);
      } else {
        this.gamelist[b].splice(this.gamelist[b].indexOf(a), 1);
      }
    },
    clear(t) {
      this.gamelist[t].splice(0, this.num);
    },
    chek(t, x) {
      this.gamelist[t].splice(0, this.num);
      switch (x) {
        case 0:
          for (let i = 0; i <= Math.floor(this.num/2)-1; i++) {
            this.f(t, i);
          }
          break;
        case 9:
          for (let i = Math.floor(this.num/2); i <= this.num-1; i++) {
            this.f(t, i);
          }
          break;
        case 1:
          for (let i = 0; i <=this.num-1; i++) {
            if (i % 2 != 0) {
              this.f(t, i);
            }
          }
          break;
        case 2:
          for (let i = 0; i <= this.num-1; i++) {
            if (i % 2 == 0) {
              this.f(t, i);
            }
          }
          break;
        case 10:
          for (let i = 0; i <= this.num-1; i++) {
            this.f(t, i);
          }
          break;
        case -1:
          this.gamelist[t].splice(0, this.num-1);
          break;
      }
    },
    f(i, x) {
      if (this.gamelist[i].indexOf(x) == -1) {
        this.gamelist[i].push(x);
      } else {
        this.gamelist[i].splice(this.gamelist[i].indexOf(x), 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pos{
  padding-bottom: 30px;
}
.act {
  background-color: red;
}
ul {
  margin: 10px auto;
  padding: 0 0 5px 0;
  border-bottom: 1px dashed gray;
  display: flex;
  flex-flow: column;
  .lot {
    display: flex;
    .wei {
      flex:1;
      width: 35px;
      min-height: 100px;
      line-height: 50px;
      min-width: 30px;
      text-align: center;
      font-size: 20px;
      background-color: gold;
      align-items: center;
    }
  }
  .lottors {
    // flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 20px;
  }
  .btn {
    display: flex;
    justify-content: space-around;
    margin: 5px 0;
    .van-button {
      min-width: 60px;
      height: 30px;
      line-height: 30px;
      margin:0 2px; 
    }
  }
}
</style>
