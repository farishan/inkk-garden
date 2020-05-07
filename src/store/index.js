import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config';
import time from './modules/time.store';
import player from './modules/player';
import plants from './modules/plants';
import watering from './modules/watering';
import sprinkler from './modules/sprinkler';
import garden from './modules/garden.store';
import collector from './modules/collector';
import shop from './modules/shop.store';
import mediator from './modules/mediator';
import alert from './modules/alert';
import statistics from './modules/statistics';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: config.global,
  },
  mutations: {
  },
  actions: {
    init({ dispatch, commit }) {
      // Starting time
      dispatch('time/start');
      commit('statistics/setStartedAt', new Date().toISOString());

      // Add initial watering can
      dispatch('player/addWateringCan', 1);
      dispatch('shop/init');
    },
    sync({ dispatch }) {
      dispatch('garden/syncSlots');
    },
    update({ state, dispatch, commit }) {
      // Day changed. Update the state

      // Plants photosynthesis
      for (let index = 0; index < state.player.plants.length; index += 1) {
        const plant = state.player.plants[index];
        plant.check();

        // sprinkler
        if (state.sprinkler.on) {
          state.player.cookies -= state.config.autoWateringPrice;
          plant.hydrate();
        }

        // collector
        if (state.collector.on && plant.ready) {
          state.player.cookies -= state.config.autoCollectingPrice;
          dispatch('player/collect', plant);
        }

        if (plant.isDead) {
          dispatch('player/removePlant', plant);
          commit('statistics/addDeadPlant');
        }
      }

      dispatch('sync');
    },
    changePosition({ dispatch }, data) {
      dispatch('garden/changePosition', data);
    },
    buyPlant: mediator.shopAndPlayer.buyPlant,
    sellPlant: mediator.shopAndPlayer.sellPlant,
    buyWateringCan: mediator.shopAndPlayer.buyWateringCan,
    buySprinkler: mediator.shopAndPlayer.buySprinkler,
    buyCollector: mediator.shopAndPlayer.buyCollector,
    unlockNextTier: mediator.shopAndPlayer.unlockNextTier,
    unlockTools: mediator.shopAndPlayer.unlockTools,
    getDataToSave({ getters }) {
      return new Promise((resolve) => {
        resolve({
          shop: getters['shop/dataToSave'],
          player: getters['player/dataToSave'],
          time: getters['time/dataToSave'],
          statistics: getters['statistics/dataToSave'],
        });
      });
    },
    setDataToLoad({ dispatch, commit }, data) {
      dispatch('shop/setDataToLoad', data.shop);
      dispatch('player/setDataToLoad', data.player);
      dispatch('time/setDataToLoad', data.time);
      commit('statistics/setDataToLoad', data.statistics);
    },
  },
  modules: {
    alert,
    time,
    plants,
    player,
    garden,
    watering,
    sprinkler,
    collector,
    shop,
    statistics,
  },
});
