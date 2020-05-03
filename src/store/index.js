import Vue from 'vue';
import Vuex from 'vuex';
import plants from '@/assets/plants.json';
import time from './modules/time';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plants,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    time,
  },
});
