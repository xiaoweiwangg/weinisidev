<template>
  <div class="child">
    <li @click="up(cont, pos)" :pos="pos" :class="{ act: chek(cont) }">
      {{ cont }}
    </li>
  </div>
</template>

<script>
export default {
  props: ["cont", "pos", "list"],
  name: "GChild",
  data() {
    return {};
  },
  methods: {
    chek(cont) {
      if (this.list.indexOf(cont) >= 0) {
        //*--------------- >=0是重点
        return true;
      }
    },
    up() {
      this.$emit("up", this.cont, this.pos);
    }
  },
  watch: {
    
  }
};
</script>

<style lang="scss" scoped>
.child {
  li {
    height: 40px;
    width: 40px;
    border: 2px solid #000;
    border-radius: 50%;
    box-shadow: 2px 4px 2px #9a939a, 1px 2px 1px #ccc;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    margin:0 9px;
  }
  .act {
    background-color: red;
    border-color: goldenrod;
  }
}
</style>
