/* eslint-disable no-shadow */
const state = () => ({
  cans: [
    {
      id: 1,
      name: 'watering can 1',
      capacity: 1,
    },
  ],
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
