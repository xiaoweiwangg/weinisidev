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
// import { homedir } from "os";
export default new Router({
  routes: [
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
