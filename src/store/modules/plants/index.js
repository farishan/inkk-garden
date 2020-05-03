/* eslint-disable no-shadow */
import generated from './generated';

const state = () => ({
  data: generated,
});

const getters = {
  getPlantById: (state) => (id) => (
    { ...state.data.find((plant) => plant.id === id) }
  ),
};

export default {
  state,
  getters,
};
