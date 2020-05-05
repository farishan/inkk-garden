/* eslint-disable no-shadow */
const namespaced = true;

const state = () => ({
  show: false,
  message: '',
});

const actions = {
  show({ commit }, message) {
    commit('changeMessage', '');
    commit('setShow', false);

    commit('changeMessage', message);
    commit('setShow', true);

    setTimeout(() => {
      commit('changeMessage', '');
      commit('setShow', false);
    }, 2000 /* 2 seconds */);
  },
};

const mutations = {
  setShow(state, value) {
    state.show = value;
  },
  changeMessage(state, message) {
    state.message = message;
  },
};

export default {
  namespaced,
  state,
  actions,
  mutations,
};
