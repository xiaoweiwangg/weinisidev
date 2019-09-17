<template>
  <div class="bg">
      <div
        class="bfase"
        :class="{bac:isbface}"
        :style="{backgroundPosition:pk(backpuk[0].hua,backpuk[0].num)}"
      ></div>
      <div class="zfase" :class="{zac:isbface}" :style="{backgroundPosition:pk(puk.hua,puk.num)}"></div>
  </div>
</template>

<script>
export default {
    props:["puk","isbface"],
  name: "PukerV",
  data() {
    return {
      backpuk: [{ num: 14, hua: 2 }]
    };
  },
  methods: {
    pk(x, y) {
      if (y == 14) {
        return `${-524}px ${118}px`;
      }
      if (y <= 7) {
        return `${x * -84.2}px ${(y - 1) * -111}px`;
      } else {
        y %= 7;
        return `${x * -84 - 356}px ${(y - 1) * -111}px`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  perspective: 1000px;
  overflow: hidden;
  border-radius: 7px;
  position: relative;
  height: 101px;
  width: 78px;
  div {
    position: absolute;
    transition: all .5s ease-in-out;
    height: 100%;
    border-radius: 7px;
    width: 100%;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    background: url(https://images.imags-google.com/game/puke.png);
  }
  .bfase {
    transform: scale(1) rotateY(-180deg);
  }
  .zfase {
    transform: scale(1) rotateY(0deg);
  }
  .zac {
    transform: scale(1) rotateY(180deg);
  }
  .bac {
    transform: scale(1) rotateY(0deg);
  }
}
</style>