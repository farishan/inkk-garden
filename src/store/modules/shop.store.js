import { ID } from '@/utils';
import Plant from './plants/plant';

const shopModule = {
  namespaced: true,
  state: () => ({
    tiers: [
      {
        id: 1,
        price: 0,
        plantsToShow: 4,
      },
      {
        id: 2,
        price: 3000,
        plantsToShow: 8,
      },
      {
        id: 3,
        price: 7500,
        plantsToShow: 12,
      },
      {
        id: 4,
        price: 17497.5,
        plantsToShow: 16,
      },
    ],
    isNextTierAvailable: true,
    activeTierId: null,
    currentTier: null,
    plants: [],
    toolsLocked: true,
    unlockToolsPrice: 5000,
  }),
  getters: {
    plants(state) {
      const { plantsToShow } = state.currentTier;
      return state.plants.slice(0, plantsToShow);
    },
    nextTier(state) {
      return state.tiers.find((t) => t.id === state.activeTierId + 1);
    },
    dataToSave(state) {
      return {
        activeTierId: state.activeTierId,
        toolsLocked: state.toolsLocked,
      };
    },
  },
  actions: {
    init({ dispatch }) {
      dispatch('setTier', 1);
    },
    setTier({ commit, dispatch }, id) {
      commit('setActiveTierId', id);
      commit('setCurrentTier');
      dispatch('setPlants');
    },
    wrapPlant({ rootState }, plant) {
      return new Promise((resolve) => {
        const newPlant = new Plant({ ...plant });
        newPlant.id = ID();
        newPlant.typeId = plant.id;
        newPlant.boughtAt = rootState.time.periods;
        // console.log('new plant:', newPlant);
        resolve(newPlant);
      });
    },
    setPlants({ state, commit, rootState }) {
      const plants = rootState.plants.data;
      commit('setPlants', plants.slice(0, state.currentTier.plantsToShow));
    },
    upgradeTier({ state, commit, dispatch }) {
      if (state.isNextTierAvailable) {
        commit('setActiveTierId', state.activeTierId + 1);
        commit('setCurrentTier');
        dispatch('setPlants');
      }
    },
    setDataToLoad({ commit, dispatch }, data) {
      const {
        activeTierId,
        toolsLocked,
      } = data;

      dispatch('setTier', activeTierId);
      commit('setToolsLock', toolsLocked);
    },
  },
  mutations: {
    setActiveTierId(state, id) {
      state.activeTierId = id;
    },
    setCurrentTier(state) {
      state.currentTier = state.tiers.find((t) => t.id === state.activeTierId);
      state.isNextTierAvailable = state.activeTierId < state.tiers.length;
    },
    setPlants(state, plants) {
      state.plants = plants;
    },
    setToolsLock(state, value) {
      state.toolsLocked = value;
    },
  },
};

export default shopModule;
