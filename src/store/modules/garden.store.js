/* eslint-disable no-shadow */
const gardenModule = {
  namespaced: true,
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
      commit('changeSlots', [...state.initialSlots]);

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
    changePosition({ state, dispatch }, data) {
      const plant1 = state.slots[data.from];
      const plant2 = state.slots[data.to];

      if (plant1) {
        plant1.position = data.to;
      }

      if (plant2 && plant2 !== null) {
        plant2.position = data.from;
      }

      dispatch('syncSlots');
    },
    checkEmptySlot({ state }) {
      return new Promise((resolve) => {
        let slot = false;

        for (let index = 0; index < state.slots.length; index += 1) {
          const s = state.slots[index];
          if (s === null && slot === false) {
            slot = index;
          }
        }

        resolve(slot);
      });
    },
  },
};

export default gardenModule;
