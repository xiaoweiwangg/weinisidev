<template>
  <div class="bd" id="qipai">
    <t-header :l="true" :t="'棋 牌 大 厅'"></t-header>
   <div class="qipailist1" @click="ret">
      <router-link to="/qipai"></router-link>
    </div>
    <div class="qipailist2" @click="ret">
      <router-link to="/qipai"  ></router-link>
    </div>
    <!--<div class="qipailist3">
      <router-link to="/longhu"></router-link>
    </div>-->
    <div class="qipailist5"  @click="ret">
      <router-link to="/qipai" ></router-link>
    </div>
    <!--<div class="qipailist4">
      <router-link to="/baijiale"></router-link>
    </div>-->
    <div class="qipailist6" @click="ret">
      <router-link to="/qipai" ></router-link> 
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import THeader from "../../home/cps/header/header";
import { setTimeout } from "timers";
export default {
  components: {
    THeader
  },
  data() {
    return {
      show: false
    };
  },
  methods:{
     ret(){
      alert("维护中")
     }
  },
  name: "QiPai",
  mounted() {
    createjs.Sound.registerSound("/rbwar/maopao.mp3", "maopao");
    $("#qipai a").on("click", function() {
      createjs.Sound.play("maopao");
    });
    setTimeout(() => {
      // this.show=true
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  height: 133px;
  width: 100%;
}
p {
  font-size: 20px;
  padding: 5px 7px;
}
.bd {
  overflow: auto;
  background: url(https://images.imags-google.com/game/gamebg.png);
  background-size: cover;
  // height: 100%;
  position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
  .qipailist1 {
    height: 133px;
    background: url(https://images.imags-google.com/game/game-list.png?1);
    background-size: 100% auto;
  }
  .qipailist2 {
    height: 133px;
    background: url(https://images.imags-google.com/game/game-list.png?1);
    background-size: 100% auto;
    background-position: 0 20%;
  }
  .qipailist3 {
    height: 133px;
    background: url(https://images.imags-google.com/game/game-list.png?1);
    background-size: 100% auto;
    background-position: 0 40%;
  }
  .qipailist4 {
    height: 133px;
    background: url(https://images.imags-google.com/game/game-list.png?1);
    background-position: 0 60%;
    background-size: 100% auto;
  }
  .qipailist5 {
    height: 133px;
    background: url(https://images.imags-google.com/game/game-list.png?1);
    background-position: 0 80%;
    background-size: 100% auto;
  }
  .qipailist6 {
    height: 133px;
    background: url(https://images.imags-google.com/game/game-list.png?1);
    background-position: 0 100%;
    background-size: 100% auto;
  }
}
</style>
