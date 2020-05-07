/* eslint-disable no-shadow */

/**
 * Time - Vuex Store Module
 *
 * Made for Inkk Garden game.
 * Faris Han, 2020
 */

const timeModule = {
  namespaced: true,
  state: () => ({
    initialSpeed: 2, // seconds
    speed: 2, // seconds
    on: false,
    days: 0,
    periods: 0,
    fast: false,
  }),
  getters: {
    period: (state) => (state.periods % 2 === 0 ? 'day' : 'night'),
  },
  actions: {
    start({ commit, dispatch }) {
      commit('switch', true);
      dispatch('startLoop');
    },
    startLoop({ state, commit, dispatch }) {
      let last = 0; // timestamp of the last render() call

      function loop(now) {
        // Execute every [state.speed] seconds
        if (!last || now - last >= state.speed * 1000) {
          last = now;
          commit('addPeriod');

          if (state.periods % 2 === 0) {
            commit('addDay');
            dispatch('update', null, { root: true });
          }
        }

        if (state.on) {
          requestAnimationFrame(loop);
        }
      }

      loop(last);
    },
  },
  mutations: {
    switch(state, value) {
      state.on = value;
    },
    fast(state) {
      state.on = false;
      state.fast = true;
      state.speed /= 4;
    },
    normal(state) {
      state.on = false;
      state.fast = false;
      state.speed = state.initialSpeed;
    },
    addPeriod(state) {
      state.periods += 1;
    },
    addDay(state) {
      state.days = Math.floor(state.periods / 2);
    },
  },
};

export default timeModule;
