import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import HomeV from "./components/home/home.vue";
import ActveV from "./components/active/active.vue";
import ManagerV from "./components/mangerment/manager.vue";
import TalkV from "./components/talk/talk.vue";
import LogoIn from "./components/logoin/login.vue";
import RegIstry from "./components/registry/registry.vue";
import WGame from "./components/game/game.vue";
import TGame from "./components/game/threegame/threegame.vue";
import RecharGe from "./components/recharge/recharge.vue";
import WechatPay from "./components/pay/wechatpay.vue";
import AliPay from "./components/pay/alipay.vue";
import HistoryPage from "./components/history/history.vue";
import CaSh from "./components/pay/cash.vue";
// import { homedir } from "os";
export default new Router({
  routes: [
    {
      path: "/cash",
      name: "cash",
      component: CaSh
    },
    {
      path: "/wechatpay",
      component: WechatPay,
      name: "wechatpay"
    },
    {
      path: "/aliPay",
      component: AliPay,
      name: "alipay"
    },
    {
      path: "/history",
      component: HistoryPage,
      name: "history"
    },
    {
      path: "/",
      component: HomeV,
      name: "home"
    },
    {
      path: "/active",
      component: ActveV
    },
    {
      path: "/talks",
      component: TalkV
    },
    {
      path: "/manager",
      component: ManagerV
    },
    {
      path: "/logoin",
      name: "logoin",
      component: LogoIn
    },
    {
      path: "/recharge",
      name: "recharge",
      component: RecharGe
    },
    {
      path: "/registry",
      component: RegIstry
    },
    {
      path: "*",
      redirect: "/",
      component: HomeV
    },
    {
      name: "gassc",
      path: "/gassc",
      component: WGame
    },
    {
      name: "cqssc",
      path: "/cqssc",
      component: WGame
    },
    {
      name: "tjssc",
      path: "/tjssc",
      component: WGame
    },
    {
      name: "tcpl5",
      path: "/tcpl5",
      component: WGame
    },
    {
      name: "xjssc",
      path: "/xjssc",
      component: WGame
    },
    {
      name: "ynssc",
      path: "/ynssc",
      component: WGame
    },
    {
      name: "fc3d",
      path: "/fc3d",
      component: TGame
    }
  ]
});
