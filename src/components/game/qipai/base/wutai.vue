<template>
  <div class="bd">
    
    <audio src="https://images.imags-google.com/game/music/nn100/sound-bg.mp3" ref="bg"></audio>
  </div>
</template>

<script>
export default {
  name: "BmwV",
  methods: {
    isPlayAudio() {

    }
  },
  mounted() {
    console.log();
    this.$refs.bg.play()
    this.$refs.bg.loop=true
  }
};
</script>

<style lang="scss" scoped>
.bd{
    background:url(https://images.imags-google.com/game/nn100bg.jpg);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width:100%;
    background-size: cover;
    background-position: center center;
}
</style>