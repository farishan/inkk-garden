import Vue from 'vue';
import Vuex from 'vuex';
import time from './modules/time';
import plants from './modules/plants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slots: [null, null, null, null],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    time,
    plants,
  },
});
