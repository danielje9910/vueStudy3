import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { module as loginStore } from "./loginStore";
import { module as boardStore } from "./boardStore";
import { module as ticTecToStore } from "./ZeroChoStudy/ticTecToStore";

export default new Vuex.Store({
  namespaced: true,
  state: {
    // data
  },
  getters: {},
  mutations: {
    //
  },
  actions: {},
  modules: {
    loginStore,
    boardStore,
    ticTecToStore,
  },
});
