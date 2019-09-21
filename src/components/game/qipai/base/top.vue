<template>
  <div>
    <div class="top">
      <div class="quit" @click="back"></div>
      <div class="his">
        <div class="kjnum">局:&nbsp;{{playdate}}期</div>
        <div class="zhuang"></div>
        <div class="touzhunum">
          {{type}}
          <div class="djs">{{start}} &nbsp;</div>
        </div>
      </div>
      <div class="playmethod">
        <div :style="{transform:show?'rotate(0deg)':'rotate(-90deg)'}" class="by" @click="sho">
          <i class="iconfont icon-sanjiaoxing1"></i>
        </div>
      </div>
    </div>
    <div class="game-chess-img top-right-box animate-in" :style="{transform:show?'rotate(0deg)':'rotate(-90deg)'}" :class="{rt:show}">
      <div class="top-right-info">
        <div @click="close">
          <em class="game-chess-img top-right-playinfo-icon"></em>
          <em class="game-chess-img top-right-playinfo-txt"></em>
        </div>
        <div @click="play">
          <em class="game-chess-img top-right-music-open top-right-music-open"></em>
          <em class="game-chess-img top-right-music-txt"></em>
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
    sho(){
      this.show=!this.show
    },
    play(){
    this.$emit("play")
    }
    ,
    close(){
    this.$emit("close")
    }
  },
  data() {
    return {
      show:false,
    };
  }
};
</script>

<style lang="scss" scoped>
.top-right-box{
  transition: .5s;
  right:-1vw;
}
.top {
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: rgba($color: #000000, $alpha: 0.3);
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  // * {
  //   border: 1px solid red;
  // }
  .quit {
    background: url("https://images.imags-google.com/game/nnicon.png?1");
    background-position: 16.5% 35.5%;
    // background-size: 100% auto;
    margin-left: 5px;
  }
  .his {
    width: 295px;
    height: 33px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .kjnum {
      line-height: 31px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 13px;
      // background: url("https://images.imags-google.com/game/nnicon.png?1");
      // background-position: 0% 45.9%;
      // background-size: 100vw auto;
      background-color: rgba(0, 0, 0, 0.4);
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
    .kjnum,
    .touzhunum {
      width: 106px;
      height: 32px;
    }
    .touzhunum {
      background-color: rgba(0, 0, 0, 0.4);
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      font-size: 13px;
      text-indent: 9px;
      color: white;
      height: 22px;
      font-weight: bold;
      .djs {
        float: right;
        width: 32px;
        height: 22px;
        text-align: center;
        position: relative;
        // right: 4px;
        border-radius: 50%;
        background: url("https://images.imags-google.com/game/nnicon.png?1");
        background-position: 51% 45.9%;
        background-size: 100vw auto;
        text-indent: 8px;
      }
      line-height: 22px;
    }
    .zhuang {
      width: 45px;
      height: 35px;
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 65.1% 34.4%;
      background-size: auto auto;
    }
  }

  .playmethod,
  .quit,
  .by {
    height: 37.5px;
    width: 37.5px;
  }
  .by {
    font-size: 30px;
    color: gold;
    text-align: center;
    line-height: 30.5px;
    transform: rotate(-90deg);
    transition: .5s;
  }
  .playmethod {
    background: url("https://images.imags-google.com/game/nnicon.png?1");
    background-position: 1.7% 35.1%;
    background-size: 100vw auto;
  }
}
</style>