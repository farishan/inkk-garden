/* eslint-disable no-shadow */
const slots = {
  state: () => ({
    initialSlots: [
      null, null, null, null,
      null, null, null, null,
      null, null, null, null,
      null, null, null, null,
    ],
    slots: [
      null, null, null, null,
      null, null, null, null,
      null, null, null, null,
      null, null, null, null,
    ],
    isEmpty: true,
  }),
  mutations: {
    addPlantToSlot(state, plant) {
      state.slots[plant.position] = plant;
    },
    changeSlots(state, slots) {
      state.slots = slots;
    },
    setIsEmpty(state, value) {
      state.isEmpty = value;
    },
  },
  actions: {
    syncSlots({ state, commit, rootState }) {
      const { slots } = state;
      const { plants } = rootState.player;

      if (plants.length > 0) {
        commit('setIsEmpty', false);
        for (let index = 0; index < plants.length; index += 1) {
          const plant = plants[index];
          slots[plant.position] = plant;
          commit('changeSlots', slots);
        }
      } else if (state.isEmpty === false) {
        commit('setIsEmpty', true);
        commit('changeSlots', [...state.initialSlots]);
      }
    },
  },
};

export default slots;
