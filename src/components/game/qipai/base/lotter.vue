<template>
  <div>
    <div class="f">
      <div class="chip">
        <chi-per
          class="cp"
          v-for="(item,index) in chiplist"
          :key="index"
          :class="{act:add(item)}"
          @chek=ac
          ref="lot"
          :chip="item"
          :size=".8"
        ></chi-per>
      </div>
    </div>
  </div>
</template>

<script>
import ChiPer from "./chip";
export default {
  components: {
    ChiPer
  },
  name: "LotteR",
  data() {
    return {
      act: 1,
      chiplist: [1, 5, 10, 50, 100, 500, 1000, 5000, 10000]
    };
  },
  methods: {
    add(x) {
      if (x == this.act) {
        return true;
      }
    },
    ac(x) {
      this.act = x;
    }
  }
};
</script>

<style lang="scss" scoped>
.f {
  width: 100vw;
  height: 100px;
  position: absolute;
  bottom: 32px;
  overflow: scroll;
  z-index: 10;
  .chip {
    animation: late 0.7s linear 0s 1 alternate-reverse backwards;
    display: flex;
    width: 900px;
  }
  .cp {
    filter: brightness(0.7);
    transform: scale(0.9);
  }
  .act {
    transform: scale(1) translateY(-6px) !important;
    filter: brightness(1.2) !important;
  }
  @keyframes late {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-350px);
    }
  }
}
</style>