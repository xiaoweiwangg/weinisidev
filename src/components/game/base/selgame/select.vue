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
      <div class="playdet">
        玩法<i class="iconfont icon-wenhao"></i>
      </div>
    </div>
    <transition>
      <play-list v-show="ac" @show="chac" @sub="chang"></play-list>
    </transition>
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
      ac: false,
      gameplayname: "一星直选复式"
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
.playdet{
  color:white;
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
