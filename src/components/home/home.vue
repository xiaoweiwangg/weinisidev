<template>
  <div>
    <h-header :t="'购 彩 大 厅'"></h-header>
    <swi-per></swi-per>
    <blanc-v></blanc-v>
    <tabs-v></tabs-v>
    <play-list></play-list>
  </div>
</template>

<script>
import HHeader from "./cps/header/header";
import SwiPer from "./cps/sweiper/spwiper";
import BlancV from "./cps/blanc/blanc";
import TabsV from "./cps/tabs/tabs";
import PlayList from "./cps/playlist/playlist";
export default {
  name: "HomeV",
  components: {
    HHeader,
    SwiPer,
    BlancV,
    TabsV,
    PlayList
  }
};
</script>

<style lang="scss" scoped></style>
