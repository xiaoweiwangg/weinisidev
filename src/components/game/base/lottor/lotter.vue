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
        //*--------------->=0是重点
        return true;
      }
    },
    up() {
      console.log(this.list);
      this.$emit("up", this.cont, this.pos);
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.child {
  li {
    height: 40px;
    width: 40px;
    border: 2px solid #ccc;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    margin: 5px 10px;
  }
  .act {
    background-color: red;
    border-color: goldenrod;
  }
}
</style>
