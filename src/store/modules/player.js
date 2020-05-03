/* eslint-disable no-shadow */
import { ID } from '@/utils';

const state = () => ({
  plants: [],
});

const actions = {
  addPlant({ commit, rootGetters }, id) {
    const plant = rootGetters.getPlantById(id);
    console.log('Add plant to player:', plant);

    // add unique id to plant
    plant.id = ID();

    commit('addPlant', plant);
  },
};

const mutations = {
  addPlant(state, plant) {
    state.plants.push(plant);
  },
};

export default {
  state,
  actions,
  mutations,
};
