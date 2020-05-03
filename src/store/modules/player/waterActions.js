export default {
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
