<template>
  <div class="d">
    <div class="desk"></div>
  </div>
</template>

<script>
export default {
  name: "DeskV"
};
</script>

<style lang="scss" scoped>
.d {
  flex: 1;
  .desk {
    width: 100%;
    height: 100%;
    background: url(https://images.imags-google.com/game/nn100bg2.png);
    background-size: 100% 100vh;
    background-position: 0 -113px;
  }
}
</style>