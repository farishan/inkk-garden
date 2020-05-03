export default {
  addWateringCan(state, can) {
    state.wateringCans.push(can);
  },
  selectWateringCan(state, can) {
    const selectedCan = { ...can };
    selectedCan.water = can.capacity;
    state.selectedCan = selectedCan;
  },
  deselectWateringCan(state) {
    state.selectedCan = null;
  },
  useCan(state) {
    state.selectedCan.water -= 1;
  },
};
