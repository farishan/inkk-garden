/* eslint-disable no-shadow */
import { ID, priceConverter, random } from '@/utils';
import Plant from '../plants/plant';

export default {
  addPlant({
    dispatch,
    state,
    commit,
    rootGetters,
  }, id) {
    const plant = rootGetters.getPlantById(id);
    // Generate new plant
    const newPlant = new Plant({
      ...plant,
      id: ID(),
      position: state.plants.length,
    });

    console.log('Add plant to player:', newPlant, newPlant.position, state.plants.length);

    commit('addPlant', newPlant);

    // add plant to garden's slots
    dispatch('sync', null, { root: true });
  },
  collect({ commit, rootState }, plant) {
    plant.collect();

    // Calculate collected cookies
    const percentage = random(true,
      rootState.config.lowestCollectReward,
      rootState.config.highestCollectReward);
    const converted = priceConverter(percentage, plant.price);
    const cookies = Math.floor(converted);
    // console.log(`${percentage}% of ${plant.price} is ${cookies}`);

    commit('addCookies', cookies);
  },
  // eslint-disable-next-line no-empty-pattern
  hydrate({ dispatch }, plant) {
    plant.hydrate();
    dispatch('useCan');
  },
  removePlant({ commit, dispatch }, plant) {
    commit('removePlant', plant);
    dispatch('sync', null, { root: true });
  },
};
