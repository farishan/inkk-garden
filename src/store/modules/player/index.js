/* eslint-disable no-shadow */
import config from '@/config';
import plantActions from './plantActions';
import plantMutations from './plantMutations';
import waterActions from './waterActions';
import waterMutations from './waterMutations';

const state = () => ({
  plants: [],
  wateringCans: [],
  wateringCanIds: [],
  selectedCan: null,
  sprinkler: null,
  collector: null,
  cookies: config.player.initialCookies,
});

const getters = {
  dataToSave(state) {
    const data = {};

    if (state.plants.length > 0) {
      data.plants = state.plants;
    }

    if (state.wateringCanIds.length > 0) {
      data.wateringCanIds = state.wateringCanIds;
    }

    if (state.sprinkler !== null) {
      data.sprinkler = state.sprinkler;
    }

    if (state.collector !== null) {
      data.collector = state.collector;
    }

    data.cookies = state.cookies;

    return data;
  },
};

const actions = {
  addPlant: plantActions.addPlant,
  removePlant: plantActions.removePlant,
  collect: plantActions.collect,
  hydrate: plantActions.hydrate,
  setPlants: plantActions.setPlants,
  addWateringCan: waterActions.addWateringCan,
  selectWateringCan: waterActions.selectWateringCan,
  deselectWateringCan: waterActions.deselectWateringCan,
  useCan: waterActions.useCan,
  checkCookies: ({ state }, amount) => new Promise((resolve, reject) => {
    if (state.cookies >= amount) {
      resolve();
    } else {
      reject();
    }
  }),
  setDataToLoad({ commit, dispatch }, data) {
    console.log('player data to load', data);
    const {
      cookies,
      wateringCanIds,
      plants,
      collector,
      sprinkler,
    } = data;

    // Set cookies
    commit('setCookies', cookies);

    // Set watering cans
    commit('resetWateringCans');
    for (let index = 0; index < wateringCanIds.length; index += 1) {
      const id = wateringCanIds[index];
      dispatch('addWateringCan', id);
    }

    if (plants) {
      commit('resetPlants');
      dispatch('setPlants', plants);
    }

    if (collector) {
      commit('addCollector');
    }

    if (sprinkler) {
      commit('addSprinkler');
    }
  },
};

const mutations = {
  addPlant: plantMutations.addPlant,
  removePlant: plantMutations.removePlant,
  resetPlants: plantMutations.resetPlants,
  setPlants: plantMutations.setPlants,
  addWateringCan: waterMutations.addWateringCan,
  selectWateringCan: waterMutations.selectWateringCan,
  deselectWateringCan: waterMutations.deselectWateringCan,
  useCan: waterMutations.useCan,
  addSprinkler: waterMutations.addSprinkler,
  resetWateringCans: waterMutations.resetWateringCans,
  addCollector: (state) => {
    state.collector = true;
  },
  addCookies: (state, value) => {
    state.cookies += value;
  },
  setCookies: (state, amount) => {
    state.cookies = amount;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
