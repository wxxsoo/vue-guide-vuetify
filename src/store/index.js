import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/news.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true
  },
  getters: {
    drawer(state) {
      return state.drawer;
    }
  },
  mutations: {
    SET_DRAWER(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {},
  modules: {
    news //news module 등록
  }
});
