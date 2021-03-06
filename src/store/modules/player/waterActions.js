export default {
  addWateringCan({ commit, rootState }, id) {
    const can = rootState.watering.cans.find((w) => w.id === id);
    commit('addWateringCan', can);
  },
  selectWateringCan({ dispatch, commit }, can) {
    dispatch('toggleWatering', null, { root: true });
    commit('selectWateringCan', can);
  },
  deselectWateringCan({ dispatch, commit }) {
    dispatch('toggleWatering', null, { root: true });
    commit('deselectWateringCan');
  },
  useCan({ state, dispatch, commit }) {
    commit('useCan');

    if (state.selectedCan.water === 0) {
      dispatch('deselectWateringCan');
    }
  },
};
