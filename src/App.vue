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
  },
  mounted() {
    this.sockets.subscribe(JSON.parse(sessionStorage.getItem("userinfo")).name, data => {
      if(data.msg=="ok"){
        this.$notify({
         message: "您有一条盈亏记录产生!请注意余额变化!",
            duration: 2000,
            background: "green"
        })
      }
      
    })
    setInterval(() => {
      if (sessionStorage.getItem("islogoin") == "true") {
        window.start++;
        if (window.start >= window.time) {
          this.$dialog
            .alert({
              title: "登录超时提醒",
              message:
                "由于您长时间未进行任何操作,为确保您的账户安全请重新登录!"
            })
            .then(() => {
              sessionStorage.clear();
              this.$router.push("/logoin")
            });
        }
      }
    }, 1000);
    window.addEventListener("touchstart", () => {
      window.start = 0;
    });
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
