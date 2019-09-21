<template>
  <div>
    <div class="balance">
      <div class="reback" @click="reback"></div>
      <div class="bal">余额:{{bl}}元</div>
      <div class="ent" @click="ent"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pr", "start"],
  computed: {
    bl() {
      return this.balance;
    }
  },
  name: "FooTer",
  data() {
    return {
      balance: 0
    };
  },
  mounted() {
    this.getbalance();
  },
  methods: {
    getbalance() {
      this.$socket.emit("user", {
        username: JSON.parse(sessionStorage.getItem("userinfo")).name
      });
      this.sockets.subscribe("balance", data => {
        this.balance = data[0].balance;
        this.$store.commit("setbalance", this.balance);
      });
    },
    reback() {
      this.$emit("reback");
      this.getbalance();
    },
    ent() {
      this.$emit("sub");
      setTimeout(() => {
        this.getbalance();
      }, 500);
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
    font-size: 15px;
    text-align: center;
    line-height: 33px;
    color: honeydew;
    font-weight: 500;
    width: 112px;
    background: url(https://images.imags-google.com/game/nnicon.png?1);
    background-size: 100vw auto;
    background-position: 59% 8.2%;
  }
}
</style>