<template>
  <div>
    <ul v-for="(item,i) in gamelist" :key="i">
      <div class="btn">
        <van-button @click="chek(i,9)" type="primary">大</van-button>
        <van-button @click="chek(i,0)" type="primary">小</van-button>
        <van-button @click="chek(i,1)" type="primary">单</van-button>
        <van-button @click="chek(i,2)" type="primary">双</van-button>
        <van-button @click="chek(i,10)" type="primary">全</van-button>
        <van-button @click="clear(i)" type="warning">清空</van-button>
      </div>
      <div class="lottors">
        <g-lottor
          @up="change"
          :list="gamelist[i]"
          v-for="(item , index ) in 10"
          :key="index"
          :cont="index"
          :pos="i"
        ></g-lottor>
      </div>
    </ul>
  </div>
</template>

<script>
import GLottor from "../lottor/lotter";
export default {
  props: [],
  name: "GPos",
  components: {
    GLottor
  },
  data() {
    return {
      gamelist: [[], [], [], [], []]
    };
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
      console.log(this.gamelist);
    },
    clear(t){
        this.gamelist[t].splice(0, 10);
    },
    chek(t,x) {
      switch (x) {
        case 0:
          for (let i = 0; i <= 4; i++) {
            this.f(t,i);
          }
          break;
        case 9:
          for (let i = 5; i <= 9; i++) {
            this.f(t,i);
          }
          break;
        case 1:
          for (let i = 0; i <= 9; i++) {
            if (i % 2 != 0) {
              this.f(t,i);
            }
          }
          break;
        case 2:
          for (let i = 0; i <= 9; i++) {
            if (i % 2 == 0) {
              this.f(t,i);
            }
          }
          break;
        case 10:
          for (let i = 0; i <= 9; i++) {
            this.f(t,i);
          }
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
ul {
  margin: 10px auto;
  padding: 0 0 5px 0;
  border-bottom: 1px dashed gray;
  display: flex;
  flex-flow: column;
  .lottors {
    display: flex;
    justify-content: space-around;
  }
  .btn {
    display: flex;
    justify-content: space-around;
    margin: 5px 0;
    van-button {
      min-width: 50px;
      min-height: 40px;
    }
  }
}
</style>