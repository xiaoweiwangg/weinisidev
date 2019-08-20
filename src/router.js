import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import HomeV from "./components/home/home.vue";
import ActveV from "./components/active/active.vue";
import ManagerV from "./components/mangerment/manager.vue";
import TalkV from "./components/talk/talk.vue";
import LogoIn from "./components/logoin/login.vue";
import RegIstry from "./components/registry/registry.vue";
import WGame from "./components/game/game.vue"
// import { homedir } from "os";
export default new Router({
  routes: [
    {
      path: "/logoin2",//**************************************************************** */
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
      path:"/",
      component:WGame
    }
  ]
});
