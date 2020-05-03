/* eslint-disable no-shadow */
import database from '@/assets/watering-cans.json';

const state = () => ({
  cans: database,
  active: false,
});

const mutations = {
  setActive(state, value) {
    state.active = value;
  },
};

const actions = {
  toggleWatering({ state, commit }) {
    commit('setActive', !state.active);
  },
};

export default {
  state,
  mutations,
  actions,
};
