<template>
  <div>
    <div
      class="chiper"
      :style="{backgroundPosition:fill(chip),transform:'scale('+size+')'}"
      ref="lot"
      @click="mit(chip)"
    ></div>
  </div>
</template>

<script>
export default {
    props:["chip","size"],
  name: "ChiP",
  methods: {
    mit(){
      this.$emit("chek",this.chip)
    },
    fill(x) {
      switch (x) {
        case 1:
          return "2.5% 65.8%";
          break;
        case 5:
          return "24.7% 65.8%";
          break;
        case 10:
          return "47.2% 65.8%";
          break;
        case 50:
          return "69.7% 65.8%";
          break;
        case 100:
          return "92.2% 65.8%";
          break;
        case 500:
          return "2.5% 92.1%";
          break;
        case 1000:
          return "25% 92.1%";
          break;
        case 5000:
          return "47.5% 92.1%";
          break;
        case 10000:
          return "70% 92.1%";
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chiper {
  height: 100px;
  width: 100px;
  transition: all 0.25s;
  box-shadow: 9.5px 14px 4px #310b0b;
  border-radius: 50%;
  z-index: 13;
  position: relative;
  background: url(https://images.imags-google.com/game/chipIcon.png);
}
</style>