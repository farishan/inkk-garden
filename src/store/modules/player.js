/* eslint-disable no-shadow */
import { ID } from '@/utils';

const state = () => ({
  plants: [],
});

const actions = {
  addPlant({
    dispatch, state, commit, rootGetters,
  }, id) {
    const plant = rootGetters.getPlantById(id);
    console.log('Add plant to player:', plant);

    // add unique id to plant
    plant.id = ID();
    // add plant position
    plant.position = state.plants.length;

    commit('addPlant', plant);

    // add plant to garden's slots
    dispatch('sync', null, { root: true });
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
