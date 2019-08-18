<template>
  <div id="app">
    <transition>
      <router-view class="roter"></router-view>
    </transition>
    <home-footer></home-footer>
  </div>
</template>
<script>
import { log } from "util";
import HomeFooter from "./components/footer/footerbar";
export default {
  components: {
    HomeFooter
  }
};
</script>
<style lang="scss" scoped>
#app {
  background-color: #fff;
  .v-enter,
  .v-leave-to {
    transform: translateX(-800px);
    opacity: 0;
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.15s;
  }
  .roter {
    padding: 45px 0 60px 0;
  }
}
</style>
