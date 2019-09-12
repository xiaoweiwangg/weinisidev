<template>
  <div>
    <div class="controlgame">
      <div class="back" @click="back">
        <i class="iconfont icon-jiantou-copy"></i>
      </div>
      <div class="sel" @click="chac">
        {{ gameplayname }}
        <span ref="zhishi" class="iconfont icon-sanjiaoxing1"></span>
      </div>
      <div class="playdet" @click="playlis(gameplayname)">
        玩法
        <i class="iconfont icon-wenhao"></i>
      </div>
    </div>
    <transition>
      <play-list v-show="ac" @show="chac" @sub="chang"></play-list>
    </transition>
    <van-popup v-model="pshow" position="top">
      <p class="pstr">{{str}}</p>
    </van-popup>
  </div>
</template>

<script>
import PlayList from "./playlist/playlist";
export default {
  props: ["gamelist"],
  components: {
    PlayList
  },
  name: "SelGame",
  data() {
    return {
      str: "",
      pshow: false,
      ac: false,
      gameplayname: "一星定位胆"
    };
  },
  mounted() {
    this.$emit("update", this.gameplayname);
  },
  watch: {
    gameplayname: function(v) {
      this.$emit("update", v);
    }
  },
  methods: {
    playlis(x) {
      switch (x) {
        case "一星定位胆":
          this.str =
            "从冠、亚、季、四、五、六、七、八、九、十任意位置上任意选择一个或一个以上号码。奖金  19.6元";
          break;
        case "猜前五直选复式":
          this.str =
            "从冠、亚、季、四、五、六、七、八、九、十任意位置上任意选择一个或一个以上号码。奖金  59270.40元";
          break;
        case "猜前四直选复式":
          this.str =
            "从各名次中各选择1个不重复的号码组成一注。奖金   9878.40元 ";
          break;
        case "猜前三直选复式":
          this.str =
            "从各名次中各选择1个不重复的号码组成一注。奖金   1411.20元";
          break;
        case "猜前二直选复式":
          this.str =
            "从各名次中各选择1个不重复的号码组成一注。奖金   176.40元";
          break;
        case "猜冠军直选复式":
          this.str =
            "选择1个号码组成一注。奖金  19.6元";
          break;
      }
      this.pshow = true;
    },
    back() {
      this.$router.go(-1);
    },
    chang(x) {
      this.gameplayname = x.pname + x.pgame;
      this.$emit("gl");
    },
    chac() {
      this.ac = !this.ac;
      this.$refs.zhishi.style.transform = this.ac
        ? "rotate(0deg)"
        : "rotate(90deg)";
    }
  }
};
</script>

<style lang="scss" scoped>
.pstr {
  background-color: #331b1b;
  color: white;
  line-height: 32px;
  font-size: 23px;
  text-indent: 40px;
  padding: 9px 13px;
}
.back{
  padding-left: 7px;
}
.playdet {
  color: white;
  line-height: 52px;
}
.v-enter,
.v-leave-to {
  transform: translateY(-550px);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.controlgame {
  background-color: #110e0e;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  .iconfont {
    font-size: 25px;
    color: white;
    line-height: 52px;
  }
  .sel {
    color: #fff;
    transform: translateX(20px);
    border: 1px solid #ccc;
    border-radius: 7px;
    height: 50px;
    font-size: 20px;
    min-width: 90px;
    line-height: 50px;
    .icon-sanjiaoxing1 {
      transition: 0.5s;
      font-size: 20px;
      display: inline-block;
      transform: rotate(90deg);
      color: gold;
    }
  }
}
</style>
