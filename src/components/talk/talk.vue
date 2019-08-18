<template>
  <div class="talks">
    <t-header :t="'交 流 大 厅'"></t-header>
  </div>
</template>

<script>
import THeader from "../home/cps/header/header";
export default {
  name: "TalkV",
  components: {
    THeader
  }
};
</script>

<style lang="scss" scoped>
.talks {
  padding-top: 45px;
}
</style>
