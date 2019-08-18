import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: {}
  },
  mutations: {
    setuserinfo(state, x) {
      state.userinfo = x;
    }
  },
  actions: {},
  getters: {
    getuserinfo(state) {
      return state.userinfo;
    }
  }
});
