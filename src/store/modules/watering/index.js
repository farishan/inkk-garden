/* eslint-disable no-shadow */
const state = () => ({
  cans: [
    {
      id: 1,
      name: 'Watering Can',
      water: 1,
      capacity: 1,
      image: 'watering_can.png',
    },
    {
      id: 2,
      name: 'Inked Watering Can',
      water: 5,
      capacity: 5,
      image: 'inked_watering_can.png',
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
