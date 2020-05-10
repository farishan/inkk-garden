/* eslint-disable no-shadow */
import database from '@/assets/achievements.json';

const state = () => ({
  data: database,
});

const actions = {
  init({ state }) {
    console.log(state.data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
