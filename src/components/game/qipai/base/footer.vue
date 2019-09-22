<template>
  <div>
    <!-- <div class="balance">
      <div class="reback" @click="reback"></div>
      <div class="bal">余额:{{bl}}元</div>
      <div class="ent" @click="ent"></div>
    </div>-->
    <footer data-v-e1fcc0e8 class="game-chess-img chess-foot">
      <div class="game-foot-btn">
        <div class="resultMoney win" style="display: none;">
          <em class="games-font set-yellow-slide set-yellow-slide-me">+ -1</em>
        </div>
        <div class="game-chess-img game-foot-left not" @click="reback"></div>
        <div class="game-foot-middle">
          <div class="game-chess-img game-foot-money">
            <em class="game-chess-img foot-money-icon"></em>
            <em class="game-chess-img foot-add-btn" @click="fom"></em>
            <span id="self" class="games-font">{{balance}}</span>
          </div>
        </div>
        <div class="game-chess-img game-foot-right not" @click="ent">
          <button
            class="van-button van-button--default van-button--mini van-button--plain van-button--loading van-button--unclickable"
            style="display: none;"
          >
            <div
              class="van-loading van-loading--circular van-loading"
              style="color: rgb(201, 201, 201); width: 20px; height: 20px;"
            >
              <span class="van-loading__spinner van-loading__spinner--circular">
                <svg viewBox="25 25 50 50" class="van-loading__circular">
                  <circle cx="50" cy="50" r="20" fill="none" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
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
    fom() {
      this.$router.push("/wechatpay");
    },
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
</style>