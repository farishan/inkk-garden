/* eslint-disable no-shadow */

/**
 * Time - Vuex Store Module
 *
 * Made for Inkk Garden game.
 * Faris Han, 2020
 */

const state = () => ({
  speed: 2, // seconds
  on: false,
  days: 0,
  periods: 0,
});

const getters = {
  period: (state) => (state.periods % 2 === 0 ? 'day' : 'night'),
};

const actions = {
  start({ state, commit }) {
    commit('switch', true);
    let last = 0; // timestamp of the last render() call

    function loop(now) {
      // Execute every [state.speed] seconds
      if (!last || now - last >= state.speed * 1000) {
        last = now;
        commit('addPeriod');
      }

      if (state.on) {
        requestAnimationFrame(loop);
      }
    }

    loop(last);
  },
};

const mutations = {
  switch(state, value) {
    state.on = value;
  },
  addPeriod(state) {
    state.periods += 1;
    state.days = Math.floor(state.periods / 2);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
