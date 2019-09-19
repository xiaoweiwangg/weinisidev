<template>
  <div>
    <div class="balance">
      <div class="reback" @click="reback"></div>
      <div class="bal"></div>
      <div class="ent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooTer",
  methods:{
    reback(){
      this.$emit("reback")
    }
  }
};
</script>

<style lang="scss" scoped>
.balance {
  display: flex;
  justify-content: space-between;
  height: 36px;
  border: 1px solid gray;
  z-index: 88888;
  position: absolute;
  bottom: -7px;
  width: 100%;
  background: url(https://images.imags-google.com/game/nnicon.png?1);
  background-size: 100vw auto;
  .reback {
    width: 103px;
    height: 33px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 103% 34.5%;
  }
  .ent {
    width: 103px;
    height: 33px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 116% 38.5%;
  }
  .bal {
    // flex:1;
    width: 112px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 59% 8.2%;
  }
}
</style>