const slots = {
  state: () => ({
    slots: [null, null, null, null],
  }),
  mutations: {
    addPlantToSlot(state, plant) {
      console.log('add plant to slot', plant);
      state.slots[plant.position] = plant;
    },
  },
  actions: {
    syncSlots({ commit, rootState }) {
      for (let index = 0; index < rootState.player.plants.length; index += 1) {
        const plant = rootState.player.plants[index];

        commit('addPlantToSlot', plant);
      }
    },
  },
};

export default slots;
