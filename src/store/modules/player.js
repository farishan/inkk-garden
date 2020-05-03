/* eslint-disable no-shadow */
import { ID } from '@/utils';
import Plant from './plants/plant';

const state = () => ({
  plants: [],
});

const actions = {
  addPlant({
    dispatch,
    state,
    commit,
    rootGetters,
  }, id) {
    const plant = rootGetters.getPlantById(id);
    console.log('Add plant to player:', plant);

    // Generate new plant
    const newPlant = new Plant({
      ...plant,
      id: ID(),
      position: state.plants.length,
    });

    commit('addPlant', newPlant);

    // add plant to garden's slots
    dispatch('sync', null, { root: true });
  },
  // eslint-disable-next-line no-empty-pattern
  collect({}, plant) {
    plant.collect();
  },
  // eslint-disable-next-line no-empty-pattern
  hydrate({}, plant) {
    plant.hydrate();
  },
  removePlant({ commit, dispatch }, plant) {
    commit('removePlant', plant);
    dispatch('sync', null, { root: true });
  },
};

const mutations = {
  addPlant(state, plant) {
    state.plants.push(plant);
  },
  removePlant(state, plant) {
    const newPlants = state.plants.filter((p) => p.id !== plant.id);
    state.plants = newPlants;
  },
};

export default {
  state,
  actions,
  mutations,
};
