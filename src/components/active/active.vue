<template>
  <div class="a">
    <t-header :t="'活 动 中 心'"></t-header>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
export default {
  name: "ActiveV",
  components: {
    THeader
  }
};
</script>

<style lang="scss" scoped>
.a {
  padding-top: 45px;
}
</style>
