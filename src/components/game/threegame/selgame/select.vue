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
    playlis(x) {
      switch (x) {
        case "一星直选复式":
          this.str =
            "百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致。奖金 19.6元";
          break;
        case "前二直选复式":
          this.str =
            "每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖。奖金 196元";
          break;
        case "前二直选单式":
          this.str =
            "每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖。奖金 196元 ";
          break;
        case "前二直选和值":
          this.str =
            "至少选择一个和值，竞猜开奖号码前二位数字之和。奖金  196元";
          break;
        case "前二直选跨度":
          this.str =
            "所选数值等于开奖号码的前二位最大与最小数字相减之差，即为中奖。奖金  196元";
          break;
        case "前二直选复式":
          this.str =
            "从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限（不含对子）。奖金  98元";
          break;
        case "前二组选单式":
          this.str =
            "从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限（不含对子）。奖金  98元";
          break;
        case "前二组选和值":
          this.str =
            "所选数值等于开奖号码的前二位数字相加之和（不含对子）。奖金  98元";
          break;
           case "后二直选复式":
          this.str="每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖。奖金 196元"
          break;
          case "后二直选单式":
          this.str="每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖。奖金 196元 "
          break;
          case "后二直选和值":
          this.str="至少选择一个和值，竞猜开奖号码后二位数字之和。奖金  196元"
          break;
          case "后二直选跨度":
          this.str="所选数值等于开奖号码的后二位最大与最小数字相减之差，即为中奖。奖金  196元"
          break;
          case "后二直选复式":
          this.str="从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限（不含对子）。奖金  98元"
          break;
          case "后二组选单式":
          this.str="从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限（不含对子）。奖金  98元"
          break;
          case "后二组选和值":
          this.str="所选数值等于开奖号码的后二位数字相加之和（不含对子）。奖金  98元"
          break;
          case "前三直选复式":
          this.str="每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖。奖金  1960元"
          break;
          case "前三直选单式":
          this.str="每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖。奖金  1960元"
          break;
          case "前三直选和值":
          this.str="至少选择一个和值，竞猜开奖号码前三位数字之和。奖金  1960元"
          break;
          case "前三直选跨度":
          this.str="所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。奖金  1960元"
          break;
          case "前三组选组六":
          this.str="从0-9中任意选择3个号码组成一注，所选号码与开奖号码的前三位相同（不含对子），顺序不限。奖金  326.665元"
          break;
           case "前三组选组三":
          this.str="从0-9中选择2个数字组成两注，所选号码与开奖号码的前三位相同（必须含对子），顺序不限。奖金   656.33元"
          break;
           case "前三组选单式":
          this.str="从0-手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，即为中奖。组六326.665元   组三656.33元"
          break; 
          case "前三组选和值":
          this.str="从0-至少选择一个和值，竞猜开奖号码前三位数字之和(不含豹子号)。 组六326.665元   组三656.33元"
          break;
          case "前三一码不定位":
          this.str="从0-9中至少选择1个号码投注，竞猜开奖号码前三位中包含这个号码，包含即中奖。奖金  7.23元"
          break;
          case "前三二码不定位":
          this.str="从0-9中至少选择2个号码投注，竞猜开奖号码前三位中包含这个号码，包含即中奖。奖金  36.29元"
          break;
          case "中三直选复式":
          this.str="每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖。奖金  1960元"
          break;
          case "中三直选单式":
          this.str="每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖。奖金  1960元"
          break;
          case "中三直选和值":
          this.str="至少选择一个和值，竞猜开奖号码中三位数字之和。奖金  1960元"
          break;
          case "中三直选跨度":
          this.str="所选数值等于开奖号码的中3位最大与最小数字相减之差，即为中奖。奖金  1960元"
          break;
          case "中三组选组六":
          this.str="从0-9中任意选择3个号码组成一注，所选号码与开奖号码的中三位相同（不含对子），顺序不限。奖金  326.665元"
          break;
           case "中三组选组三":
          this.str="从0-9中选择2个数字组成两注，所选号码与开奖号码的中三位相同（必须含对子），顺序不限。奖金   656.33元"
          break;
           case "中三组选单式":
          this.str="从0-手动输入号码，3个数字为一注，所选号码与开奖号码的中三位相同，顺序不限，即为中奖。组六326.665元   组三656.33元"
          break; 
          case "中三组选和值":
          this.str="从0-至少选择一个和值，竞猜开奖号码中三位数字之和(不含豹子号)。 组六326.665元   组三656.33元"
          break;
          case "中三一码不定位":
          this.str="从0-9中至少选择1个号码投注，竞猜开奖号码中三位中包含这个号码，包含即中奖。奖金  7.23元"
          break;
          case "中三二码不定位":
          this.str="从0-9中至少选择2个号码投注，竞猜开奖号码中三位中包含这个号码，包含即中奖。奖金  36.29元"
          break;
          case "后三直选复式":
          this.str="每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖。奖金  1960元"
          break;
          case "后三直选单式":
          this.str="每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖。奖金  1960元"
          break;
          case "后三直选和值":
          this.str="至少选择一个和值，竞猜开奖号码后三位数字之和。奖金  1960元"
          break;
          case "后三直选跨度":
          this.str="所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。奖金  1960元"
          break;
          case "后三组选组六":
          this.str="从0-9中任意选择3个号码组成一注，所选号码与开奖号码的后三位相同（不含对子），顺序不限。奖金  326.665元"
          break;
           case "后三组选组三":
          this.str="从0-9中选择2个数字组成两注，所选号码与开奖号码的后三位相同（必须含对子），顺序不限。奖金   656.33元"
          break;
           case "后三组选单式":
          this.str="从0-手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，即为中奖。组六326.665元   组三656.33元"
          break; 
          case "后三组选和值":
          this.str="从0-至少选择一个和值，竞猜开奖号码后三位数字之和(不含豹子号)。 组六326.665元   组三656.33元"
          break;
          case "后三一码不定位":
          this.str="从0-9中至少选择1个号码投注，竞猜开奖号码后三位中包含这个号码，包含即中奖。奖金  7.23元"
          break;
          case "后三二码不定位":
          this.str="从0-9中至少选择2个号码投注，竞猜开奖号码后三位中包含这个号码，包含即中奖。奖金  36.29元"
          break;
          case "四星直选复式":
          this.str="每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖。奖金  19600元"
          break;
          case "四星直选单式":
          this.str="每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖。奖金  19600元"
          break; 
          case "四星一码不定位":
          this.str="从0-9中至少选择1个号码投注，竞猜开奖号码后四位中包含这个号码，包含即中奖。奖金   19600元"
          break;
          case "四星二码不定位":
          this.str="从0-9中至少选择2个号码投注，竞猜开奖号码后四位中包含这2个号码，包含即中奖。奖金   20.12元"
          break;
          case "五星直选复式":
          this.str="从每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖。奖金   196000元"
          break;
          case "五星直选单式":
          this.str="从每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖。奖金   196000元"
          break;
           case "五星一码不定位":
          this.str="从0-9中至少选择1个号码投注，竞猜开奖号码五位中包含这个号码，包含即中奖。奖金   4.78元"
          break;
          case "五星二码不定位":
          this.str="从0-9中至少选择2个号码投注，竞猜开奖号码五位中包含这2个号码，包含即中奖。奖金   13.36元"
          break;
          case "五星三码不定位":
          this.str="从0-9中至少选择3个号码投注，竞猜开奖号码中包含这3个号码，包含即中奖。奖金   45.05元"
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
