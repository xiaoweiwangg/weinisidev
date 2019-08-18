import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./assets/base/hotcss"
import "./assets/icon/iconfont.css";
import "./assets/base/reset.css";
import fast from "fastclick";
import axios from "axios";
import vaxios from "vue-axios";
import { Notify } from "vant";
Vue.use(Notify);
Vue.use(vaxios, axios);
fast.attach(document.body);
Vue.config.productionTip = false;

axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem("token")) {
      config.headers.token = sessionStorage.getItem("token");
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

router.beforeEach((to, from, next) => {
  if (to.path === "/logoin" || to.path === "/" || to.path === "/registry") {
    next();
  } else {
    if (sessionStorage.getItem("islogoin") == "true") {
      next();
    } else {
      next("/logoin");
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
