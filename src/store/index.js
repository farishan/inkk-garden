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
    rerender(state) {
      const oldPlants = state.player.plants;
      state.player.plants = oldPlants;
    },
  },
  actions: {
    sync({ dispatch }) {
      dispatch('syncSlots');
    },
    update({ state, dispatch }) {
      // Day changed. Update the state

      // Plants photosynthesis
      for (let index = 0; index < state.player.plants.length; index += 1) {
        const plant = state.player.plants[index];
        plant.photosynthesis();
      }

      dispatch('sync');
    },
  },
  modules: {
    time,
    plants,
    player,
    garden,
  },
});
