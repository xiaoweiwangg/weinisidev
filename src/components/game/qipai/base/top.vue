<template>
  <div>
    <div class="top">
      <div class="quit" @click="back"></div>
      <div class="his">
        <div class="kjnum">{{playdate}}</div>
        <div class="zhuang"></div>
        <div class="touzhunum">
          {{type}}
          <div class="djs">{{start}} &nbsp;</div>
        </div>
      </div>
      <div class="playmethod">
        <div class="by"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["start","playdate","type"],
  name: "QTop",
  methods:{
      back(){
          this.$router.go(-1)
      }
  },
  data(){
      return {
      }
  }
};
</script>

<style lang="scss" scoped>
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
      line-height: 35px;
      text-align: right;
      color: white;
      font-weight: bold;
      font-size: 18px;
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 0% 45.9%;
      background-size: 100vw auto;
    }
    .kjnum,
    .touzhunum {
      width: 106px;
      height: 32px;
    }
    .touzhunum {
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 41% 45.9%;
      background-size: 100vw auto;
      font-size: 15px;
      color: white;
      font-weight: bold;
      .djs {
        float: right;
        width: 32px;
        text-align: center;
        position: relative;
        right: 4px;
        text-indent: 8px;
      }
      line-height: 32px;
    }
    .zhuang {
      width: 45px;
      height: 35px;
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 66.1% 34.4%;
      background-size: 100vw auto;
    }
  }

  .playmethod,
  .quit,
  .by {
    height: 37.5px;
    width: 37.5px;
  }
  .playmethod {
    background: url("https://images.imags-google.com/game/nnicon.png?1");
    background-position: 1.7% 35.1%;
    background-size: 100vw auto;
    .by {
      background: url("https://images.imags-google.com/game/nnicon.png?1");
      background-position: 26.7% 35.2%;
      background-size: 100vw auto;
    }
  }
}
</style>