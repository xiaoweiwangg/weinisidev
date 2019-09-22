<template>
  <div>
    <div data-v-e1fcc0e8 class="game-chess-img chess-head">
      <div class="chess-head-list">
        <div class="chess-head-left">
          <span class="game-chess-img head-left-btn">
            <em class="game-chess-img"></em>
          </span>
        </div>
        <div class="chess-head-middle">
          <div class="game-chess-img head-middle-img">
            <span class="left-icon"></span>
            <span class="number-box padd1 games-font">{{playdate}}</span>
            <span class="right-icon">
              <i class="game-chess-img"></i>
            </span>
          </div>
          <div id="banker" class="head-zhuang">
            <em class="game-chess-img"></em>
            <em id="pokerStart" class="poker-start" @click="back"></em>
          </div>
          <div class="game-chess-img head-middle-img head-middle-runtime">
            <span class="left-icon">
              <i class="game-chess-img"></i>
            </span>
            <span class="number-box padd5 games-font">{{type}}</span>
            <span class="right-icon games-font">{{start}}</span>
          </div>
        </div>
        <div class="chess-head-right">
          <span class="game-chess-img head-right-btn">
            <em class="game-chess-img on"  :style="{transform:show?'rotate(0deg)':'rotate(-90deg)'}" @click="sho" ></em>
          </span>
          <div
            class="game-chess-img top-right-box animate-in"
            :style="{transform:show?'rotate(0deg)':'rotate(-90deg)'}"
            :class="{rt:show}"
          >
            <div class="top-right-info">
              <div @click="close">
                <em class="game-chess-img top-right-playinfo-icon"></em>
                <em class="game-chess-img top-right-playinfo-txt"></em>
              </div>
              <div @click="play">
                <em class="game-chess-img top-right-sound-open"></em>
                <em class="game-chess-img top-right-sound-txt"></em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["start", "playdate", "type"],
  name: "QTop",
  methods: {
    back() {
      this.$router.go(-1);
    },
    sho() {
      this.show = !this.show;
    },
    play() {
      this.$emit("play");
    },
    close() {
      this.$emit("close");
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.top-right-box {
  transition: 0.5s;
  right: -1vw;
}
.top-right-info{
  justify-content: space-between!important;

}
.games-font {
  line-height: 5.5vw !important;
}
</style>