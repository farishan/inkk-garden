/* eslint-disable no-shadow */
const namespaced = true;

const state = () => ({
  on: false,
});

const mutations = {
  switch(state, value) {
    state.on = value;
  },
};

export default {
  namespaced,
  state,
  mutations,
};
