/* eslint-disable no-shadow */
import plantActions from './plantActions';
import plantMutations from './plantMutations';

const state = () => ({
  plants: [],
  wateringCans: [],
  selectedCan: null,
});

const actions = {
  addPlant: plantActions.addPlant,
  removePlant: plantActions.removePlant,
  collect: plantActions.collect,
  hydrate: plantActions.hydrate,
  addWateringCan({ commit, rootState }, id) {
    const can = rootState.watering.cans.find((w) => w.id === id);
    console.log(can);

    commit('addWateringCan', can);
  },
  selectWateringCan({ dispatch, commit }, can) {
    console.log('can', can);
    dispatch('toggleWatering');
    commit('selectWateringCan', can);
  },
  deselectWateringCan({ dispatch, commit }) {
    dispatch('toggleWatering');
    commit('deselectWateringCan');
  },
  useCan({ state, dispatch, commit }) {
    console.log('using can...', state.selectedCan);
    commit('useCan');

    if (state.selectedCan.water === 0) {
      dispatch('deselectWateringCan');
    }
  },
};

const mutations = {
  addPlant: plantMutations.addPlant,
  removePlant: plantMutations.removePlant,
  addWateringCan(state, can) {
    state.wateringCans.push(can);
  },
  selectWateringCan(state, can) {
    const selectedCan = { ...can };
    selectedCan.water = can.capacity;
    state.selectedCan = selectedCan;
  },
  deselectWateringCan(state) {
    state.selectedCan = null;
  },
  useCan(state) {
    state.selectedCan.water -= 1;
  },
};

export default {
  state,
  actions,
  mutations,
};
