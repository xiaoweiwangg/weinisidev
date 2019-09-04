<template>
  <div>
    <div class="djs">
      <van-button type="info">
        <span v-show="show(ih)">{{w}}</span>
        {{ih}}:
      </van-button>
      <van-button type="info">
        <span v-show="show(im)">{{w}}</span>
        {{im}}:
      </van-button>
      <van-button type="info">
        <span v-show="show(ms)">{{w}}</span>
        {{ms}}
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerV",
  props: ["ih", "im", "ms"],
  data() {
    return {
      w: "0",
      tm: null,
      tp: "djs"
    };
  },
  methods: {
    show(x) {
      if ((this.w + x).length >= 3) {
        return false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    this.tm = setInterval(() => {
      this.ms--;
      if (this.ms == 0) {
        if (this.ih > 0) {
          if (this.im > 0) {
            this.ms = 59;
            this.im--;
          } else if (this.im == 0) {
            this.ih--
            this.ms = 59;
            this.im = 59;
          }
        } else if (this.ih == 0) {
          if (this.im > 0) {
            this.im--;
            this.ms = 59;
          } else if (this.im == 0) {
            this.im = 0;
            this.ms = 0;
            window.clearInterval(this.tm);
            this.tm = null;
            this.$emit("finish",{type:this.tp})
          }
        }
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.djs{
  position: absolute;
  top:0;
  left: 0;
  right:0;
  z-index: 999999;
}
</style>