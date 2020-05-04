import Vue from 'vue';
import Vuex from 'vuex';
import time from './modules/time';
import player from './modules/player';
import plants from './modules/plants';
import watering from './modules/watering';
import garden from './modules/garden';
import sprinkler from './modules/sprinkler';
import collector from './modules/collector';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
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
        plant.check();

        // sprinkler
        if (state.sprinkler.on) {
          console.log('auto watering');
          plant.hydrate();
        }

        // collector
        if (state.collector.on && plant.ready) {
          console.log('auto collecting');
          dispatch('collect', plant);
        }

        if (plant.isDead) {
          dispatch('removePlant', plant);
        }
      }

      dispatch('sync');
    },

    // Mediator between Shop and Player
    buyPlant({ state, dispatch, commit }, plant) {
      if (state.player.cookies >= plant.price) {
        commit('addCookies', plant.price * -1);
        dispatch('wrapPlant', plant).then((wrappedPlant) => {
          wrappedPlant.setPosition(state.player.plants.length);
          commit('addPlant', wrappedPlant);
          dispatch('sync');
        });
      } else {
        console.log('not enough cookies');
      }
    },
  },
  modules: {
    time,
    plants,
    player,
    garden,
    watering,
    sprinkler,
    collector,
    shop,
  },
});
