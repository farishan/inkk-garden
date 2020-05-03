import Vue from 'vue';
import Vuex from 'vuex';
import time from './modules/time';
import player from './modules/player';
import plants from './modules/plants';
import garden from './modules/garden';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    sync({ dispatch }) {
      console.log('sync');
      dispatch('syncSlots');
    },
  },
  modules: {
    time,
    plants,
    player,
    garden,
  },
});
