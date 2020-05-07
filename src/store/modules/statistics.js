import config from '@/config';

const statisticsModule = {
  namespaced: true,
  state: () => ({
    startedAt: null,
    lastSavedAt: null,
    totalCookies: config.player.initialCookies,
    totalPlantsBought: 0,
    totalPlantsDied: 0,
    totalManualWatering: 0,
    unlockedPlantTypes: [],
  }),
  getters: {
    dataToSave(state) {
      return state;
    },
  },
  actions: {
    addPlant({ state, commit }, plant) {
      commit('addPlant');

      if (state.unlockedPlantTypes.indexOf(plant.typeId) === -1) {
        commit('addUnlockedPlant', plant.typeId);
      }
    },
  },
  mutations: {
    setStartedAt(state, value) {
      state.startedAt = value;
    },
    setLastSavedAt(state, value) {
      state.lastSavedAt = value;
    },
    setTotalCookies(state, value) {
      state.totalCookies = value;
    },
    addPlant(state) {
      state.totalPlantsBought += 1;
    },
    addUnlockedPlant(state, id) {
      state.unlockedPlantTypes.push(id);
    },
    addDeadPlant(state) {
      state.totalPlantsDied += 1;
    },
    addManualWatering(state) {
      state.totalManualWatering += 1;
    },
    setDataToLoad(state, data) {
      // sementara semuanya aja diload;
      Object.assign(state, data);
    },
  },
};

export default statisticsModule;
