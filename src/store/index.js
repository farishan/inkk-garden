import Vue from 'vue';
import Vuex from 'vuex';
import time from './modules/time';
import plants from '../assets/plants.json';

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
