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
import { log } from "util";
//全局消息组件
Vue.use(Notify);

Vue.use(vaxios, axios);
fast.attach(document.body);
Vue.config.productionTip = false;

//全局弹出层组件
import { Dialog } from "vant";
Vue.use(Dialog);

//初始用户操作坐标值
window.time = 60 * 1;
window.start = 0;

//axios 拦截请求头
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem("islogoin") == "true") {
      if (sessionStorage.getItem("token")) {
        config.headers.token = sessionStorage.getItem("token");
      }
    } else {
      sessionStorage.clear();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//axios 拦截响应头
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode == "401") {
      console.log("response.data.resultCode是404");
      sessionStorage.clear();
      window.location.href = "/logoin";
      return;
    } else {
      return response;
    }
  },
  error => {
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

//全局路由守卫
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

//VUE实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
